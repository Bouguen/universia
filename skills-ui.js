import {pageUrl} from './multi-routes.js';
import {academicSkills,skillFamilies} from './skills-data.js';
import {filterAcademicSkills,skillById,toSkillMarkdown,skillSlug,customSkillMarkdown,validateCustomSkill} from './skills-core.js';
import './skills.css';

const esc=function esc(v){return String(v??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));};
function downloadMarkdown(value) {const url=URL.createObjectURL(new Blob([value],{type:'text/markdown;charset=utf-8'}));const a=document.createElement('a');a.href=url;a.download='SKILL.md';document.body.append(a);a.click();a.remove();setTimeout(()=>URL.revokeObjectURL(url),1500);}
async function copyMarkdown(value,status){try{if(!navigator.clipboard?.writeText)throw new Error('Clipboard indisponible');await navigator.clipboard.writeText(value);status.textContent='Copié ✓';}catch{status.textContent='Copie automatique indisponible : sélectionnez le texte affiché pour le copier.';}}
export function mountSkills(){
const root=document.querySelector('#universia-skills');if(!root)return;
const pick=new URLSearchParams(location.search).get('skill');
const selected=skillById(pick);
const family=id=>skillFamilies.find(f=>f.id===id);
const el=id=>root.querySelector('#'+id);
root.innerHTML=`
<section class="section shell skills-section" id="skills">
<div class="sectiontop"><div><p class="kicker">10 / BIBLIOTHÈQUE DE SKILLS ACADÉMIQUES</p><h2>Des méthodes réutilisables,<br><em>et documentées.</em></h2></div><p>32 workflows originaux dans huit familles universitaires. Instructions SKILL.md à télécharger, sans scripts cachés ni exécution automatique.</p></div>
<div class="sk-intro"><div><strong>Découvrir</strong><p>Chercher une méthode adaptée.</p></div><div><strong>Utiliser</strong><p>Consulter les étapes et exporter un SKILL.md.</p></div><div><strong>Créer</strong><p>Composer votre propre workflow.</p></div></div>
<p class="sk-safety"><strong>Précaution :</strong> modèles éditoriaux UNIVERS·IA, et non extensions tierces certifiées. L’installation et la compatibilité dépendent de l’agent. Aucun téléchargement n’installe ou n’exécute de code.</p>
<div class="sk-toolbar">
<label for="skills-query">Rechercher<input type="search" id="skills-query" placeholder="Syllabus, bibliographie, statistiques…" autocomplete="off"></label>
<label for="skills-category">Domaine<select id="skills-category"><option value="toutes">Tous les domaines</option>${skillFamilies.map(f=>`<option value="${esc(f.id)}">${esc(f.name)}</option>`).join('')}</select></label>
<label for="skills-level">Niveau<select id="skills-level"><option value="tous">Tous les niveaux</option><option>Fondamentaux</option><option>Intermédiaire</option><option>Avancé</option></select></label>
</div>
<p id="skills-count" class="sk-count" role="status" aria-live="polite"></p>
<div class="sk-grid" id="skills-grid"></div>
${selected?`<article class="sk-detail" id="skills-detail"><a class="sk-back" href="${esc(pageUrl('skills','skills'))}">← Retour au catalogue</a><p class="kicker">${esc(family(selected.category).name)} · ${esc(selected.level)}</p><h3>${esc(selected.title)}</h3><p>${esc(selected.goal)}</p><div class="sk-detail-cols">
<div><h4>Procédure</h4><ol>${selected.steps.map(s=>`<li>${esc(s)}</li>`).join('')}</ol><h4>Livrable attendu</h4><p>${esc(selected.deliverable)}</p><h4>Contrôles qualité</h4><ul>${selected.checks.map(x=>`<li>${esc(x)}</li>`).join('')}</ul><p class="sk-safety"><strong>Vigilance :</strong> ${esc(selected.caution)}</p><p class="sk-meta">Source : ${esc(selected.origin)} · Révision : ${esc(selected.reviewed)} · Aucun script. Compatibilité à vérifier avec l’agent.</p></div>
<div><div class="sk-pre-header"><strong>SKILL.md</strong><small>skills/${esc(selected.id)}/SKILL.md</small></div><pre id="skills-markdown" tabindex="0" aria-label="Instructions du skill">${esc(toSkillMarkdown(selected))}</pre><div class="sk-buttons"><button type="button" class="btn secondary" id="skills-copy">Copier</button><button type="button" class="btn primary" id="skills-download">Télécharger SKILL.md ↓</button></div><p class="sk-feedback" id="skills-feedback" role="status"></p></div>
</div></article>`:''}
<aside class="sk-learn"><h3>Comment installer un skill ?</h3><p>Un Agent Skill contient au minimum un fichier <code>SKILL.md</code> avec un en-tête YAML (nom et description) et des instructions Markdown. Placez le fichier téléchargé dans un dossier portant le nom du skill, puis suivez la documentation d’installation de l’agent compatible. Les répertoires <code>scripts/</code>, <code>references/</code> et <code>assets/</code> sont facultatifs et absents de nos modèles.</p><a href="https://agentskills.io/specification" target="_blank" rel="noopener noreferrer">Spécification officielle ↗</a> <a href="https://openai.com/academy/skills/" target="_blank" rel="noopener noreferrer">Guide pédagogique ↗</a></aside>
</section>
<section class="section pale" id="skills-atelier"><div class="shell"><div class="sectiontop"><div><p class="kicker">ATELIER DE CRÉATION</p><h2>Créez votre propre<br><em>skill universitaire.</em></h2></div><p>Un formulaire guidé, un aperçu éditable par les champs et un export SKILL.md. Aucune donnée n’est envoyée à un serveur.</p></div>
<div class="sk-builder">
<form class="sk-form" id="skills-form" novalidate>
<label for="sk-title">Nom du skill *<input id="sk-title" maxlength="120" required placeholder="Préparer une revue de littérature"></label>
<label for="sk-description">Quand l’utiliser ? *<textarea id="sk-description" rows="3" maxlength="700" required placeholder="Utiliser lorsque l’on souhaite…"></textarea></label>
<label for="sk-context">Contexte, public, contraintes<textarea id="sk-context" rows="2" maxlength="1200" placeholder="Discipline, niveau, supports disponibles…"></textarea></label>
<label for="sk-steps">Étapes (une par ligne) *<textarea id="sk-steps" rows="6" maxlength="3500" required placeholder="Identifier le besoin&#10;Rassembler les sources&#10;Construire le livrable&#10;Vérifier le résultat"></textarea></label>
<label for="sk-deliverable">Livrable attendu *<input id="sk-deliverable" maxlength="300" required placeholder="Plan d’analyse et checklist"></label>
<label for="sk-checks">Contrôles complémentaires (un par ligne)<textarea id="sk-checks" rows="3" maxlength="1200" placeholder="Vérifier les références&#10;Respecter les consignes institutionnelles"></textarea></label>
<button type="submit" class="btn primary">Générer le SKILL.md ↗</button>
<p class="sk-meta">Aucun script n’est généré. Évitez de saisir des données sensibles.</p></form>
<div class="sk-builder-output"><div class="sk-pre-header"><strong>Prévisualisation</strong><small id="sk-file">SKILL.md</small></div><pre tabindex="0" id="sk-preview" aria-label="Contenu Markdown du skill personnalisé">Complétez les champs puis cliquez sur « Générer le SKILL.md ».</pre><p id="sk-result" class="sk-feedback" role="status" aria-live="polite"></p><div class="sk-buttons"><button id="sk-copy" type="button" class="btn secondary" disabled>Copier</button><button id="sk-download" type="button" class="btn primary" disabled>Télécharger SKILL.md ↓</button></div></div>
</div></div></section>`;
let query='',category='toutes',level='tous';
function showCatalog(){
 const list=filterAcademicSkills({query,category,level});
 el('skills-count').textContent=`${list.length} skill${list.length===1?'':'s'} sur ${academicSkills.length}`;
 el('skills-grid').innerHTML=list.length?list.map(s=>{const f=family(s.category);return `<article class="sk-card"><div class="sk-card-heading"><span aria-hidden="true">${f.icon}</span><small>${esc(f.name)}</small></div><h3>${esc(s.title)}</h3><p>${esc(s.goal)}</p><div class="sk-card-footer"><small>${esc(s.level)}</small><a href="${esc(pageUrl('skills','skills-detail','skill='+encodeURIComponent(s.id)))}" aria-label="Consulter ${esc(s.title)}">Consulter et utiliser ↗</a></div></article>`}).join(''):'<p class="sk-empty">Aucun résultat. Essayez un autre mot-clé ou changez les filtres.</p>';
}
el('skills-query').addEventListener('input',e=>{query=e.target.value;showCatalog()});
el('skills-category').addEventListener('change',e=>{category=e.target.value;showCatalog()});
el('skills-level').addEventListener('change',e=>{level=e.target.value;showCatalog()});
showCatalog();
if(selected){const markdown=toSkillMarkdown(selected);el('skills-copy').addEventListener('click',()=>copyMarkdown(markdown,el('skills-feedback')));el('skills-download').addEventListener('click',()=>{downloadMarkdown(markdown);el('skills-feedback').textContent=`SKILL.md téléchargé : placez-le dans le dossier « ${selected.id} ». `})}
const val=()=>({title:el('sk-title').value,description:el('sk-description').value,context:el('sk-context').value,steps:el('sk-steps').value,deliverable:el('sk-deliverable').value,checks:el('sk-checks').value});
let generated='';
const enable=on=>{el('sk-copy').disabled=!on;el('sk-download').disabled=!on};
el('skills-form').addEventListener('input',()=>{generated='';enable(false);el('sk-result').textContent='Champs modifiés : régénérez le fichier.'});
el('skills-form').addEventListener('submit',e=>{e.preventDefault();const data=val(),v=validateCustomSkill(data);if(!v.ready){generated='';enable(false);el('sk-result').textContent=v.errors.join(' ');return}generated=customSkillMarkdown(data);el('sk-preview').textContent=generated;el('sk-file').textContent=skillSlug(data.title)+'/SKILL.md';el('sk-result').textContent='Fichier généré localement. Relisez-le avant toute installation.';enable(true)});
el('sk-copy').addEventListener('click',()=>{if(generated)copyMarkdown(generated,el('sk-result'))});
el('sk-download').addEventListener('click',()=>{if(generated){downloadMarkdown(generated);el('sk-result').textContent='SKILL.md téléchargé. Placez-le dans le dossier indiqué.'}});
}
