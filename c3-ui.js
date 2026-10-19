import {generatorGuides,modulePracticals,advancedPracticals,casePracticals,integritySituations} from './c3-data.js';
import {academicTemplates} from './v1-data.js';
import {lessons} from './v11-data.js';
import './c3.css';
const h=s=>String(s??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const items=a=>'<ol>'+a.map(s=>'<li>'+h(s)+'</li>').join('')+'</ol>';
const checks=a=>'<ul class="c3-checks">'+a.map(s=>'<li>'+h(s)+'</li>').join('')+'</ul>';

export function renderCasePractice(id){
 const p=casePracticals[id];if(!p)return '';
 const [one,two,three,deliverable]=p;
 return '<details class="c3-case-detail"><summary>Voir le déroulé de l’activité</summary><div class="c3-case-body"><h5>Trois étapes de travail</h5>'+items([one,two,three])+'<p><b>Production concrète :</b> '+h(deliverable)+'</p><p class="c3-note">Préparation pédagogique fictive à adapter ; l’enseignant valide les références et les exigences.</p></div></details>';
}
export function renderAdvancedPractice(id){
 const p=advancedPracticals[id];if(!p)return '';
 return '<details class="c3-advanced"><summary>Atelier d’application et contrôle qualité</summary><div><p><b>Travail :</b> '+h(p.task)+'</p><p><b>Exemple fictif :</b> '+h(p.example)+'</p><h4>Vérifier le livrable</h4>'+checks(p.checks)+'</div></details>';
}
export function mountC3(){
 const tool=document.querySelector('#outils'),picker=document.querySelector('#v1-tool');
 if(tool&&picker){
  const section=document.createElement('aside');section.className='c3-tools';section.setAttribute('aria-label','Mode d’emploi du générateur');
  section.innerHTML='<div class="c3-heading"><p class="kicker">GUIDE DU GÉNÉRATEUR</p><h3>Un exemple concret pour préparer votre consigne</h3></div><div id="c3-tool-guide"></div>';
  tool.querySelector('.v1-work')?.after(section);
  const target=section.querySelector('#c3-tool-guide');
  const render=()=>{
   const g=generatorGuides[picker.value];
   if(!g){target.textContent='Choisissez un générateur pour afficher son guide.';return;}
   const name=academicTemplates.find(t=>t.id===picker.value)?.name||'Générateur';
   target.innerHTML='<p class="c3-meta">'+h(name)+'</p><p><b>Situation de départ :</b> '+h(g.scenario)+'</p><p><b>Informations à renseigner :</b> '+h(g.inputs)+'</p><div class="c3-example"><b>Exemple de livrable attendu</b><p>'+h(g.sample)+'</p></div><h4>Avant de réutiliser le prompt</h4>'+checks(g.checks)+'<p class="c3-note">Le générateur prépare une consigne : il ne fabrique ni référence vérifiée ni résultat scientifique. Relisez et adaptez les champs avant de l’utiliser.</p>';
  };
  picker.addEventListener('change',render);
  render();
 }
 const modules=document.querySelector('#modules');
 if(modules){
  const section=document.createElement('section');section.className='c3-training';
  section.innerHTML='<div class="c3-heading"><p class="kicker">EXERCICES D’APPLICATION</p><h3>Du module à une réalisation vérifiable</h3><p>Après chaque atelier, choisissez une mise en situation et comparez votre travail aux critères proposés. Ces exercices ne constituent pas une certification.</p></div><div class="c3-training-grid">'+lessons.map(x=>{
   const p=modulePracticals[x.id];if(!p)return '';
   return '<details class="c3-training-card" data-module="'+h(x.id)+'"><summary><span>'+h(x.category)+'</span><strong>'+h(x.title)+'</strong><small>Ouvrir le travail pratique</small></summary><div class="c3-training-content"><p><b>Mission :</b> '+h(p.mission)+'</p><h4>Déroulé</h4>'+items(p.process)+'<div class="c3-example"><b>Exemple de réponse attendue</b><p>'+h(p.sample)+'</p></div><p><b>Question de recul :</b> '+h(p.reflection)+'</p><h4>Autocontrôle</h4>'+checks(p.checks)+'</div></details>';
  }).join('')+'</div>';
  modules.append(section);
 }
 const ethics=document.querySelector('#reperes');
 if(ethics){
  const section=document.createElement('section');section.className='shell c3-ethics';section.setAttribute('aria-label','Situations de décision et intégrité académique');
  section.innerHTML='<div class="c3-heading"><p class="kicker">ÉTHIQUE EN SITUATION</p><h3>Quatre décisions à examiner avant d’agir</h3><p>Chaque situation est fictive. Les procédures officielles de votre établissement et les textes applicables priment sur ces suggestions.</p></div><div class="c3-ethics-grid">'+integritySituations.map(e=>
   '<details class="c3-ethics-card" data-situation="'+h(e.id)+'"><summary><strong>'+h(e.title)+'</strong><span>Étudier la situation</span></summary><div><p><b>Situation :</b> '+h(e.situation)+'</p><p><b>Conduite prudente :</b> '+h(e.decision)+'</p><h4>Contrôles à effectuer</h4>'+checks(e.checks)+'<p class="c3-warning"><b>À retenir :</b> '+h(e.warning)+'</p></div></details>'
  ).join('')+'</div><p class="c3-ethics-footer">Pour approfondir : <a href="https://www.unesco.org/en/articles/guidance-generative-ai-education-and-research" target="_blank" rel="noopener noreferrer">Guide de l’UNESCO sur l’IA générative en éducation et recherche ↗</a> — <a href="https://www.crossref.org/documentation/retrieve-metadata/rest-api/" target="_blank" rel="noopener noreferrer">Documentation Crossref sur les métadonnées ↗</a>. Ces références ne constituent pas une validation de chaque situation fictive.</p>';
  ethics.append(section);
 }
}
