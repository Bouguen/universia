import {academyTracks} from './academy-data.js';
import {academicReferences} from './lot-b-enrichment.js';
import {currentPage} from './multi-routes.js';
import './academy.css';
const esc=value=>String(value??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const KEY='universia-academy-progress-v1';
const findTrack=id=>academyTracks.find(x=>x.id===id)||academyTracks[0];
const sourceIds={fondements:['unesco-genai'],prompts:['unesco-genai'],enseigner:['unesco-genai','wcag22'],evaluer:['unesco-genai'],bibliographie:['prisma-2020','crossref-api'],recherche:['fair'],publication:['crossref-api'],doctorat:['fair'],ethique:['unesco-genai'],accessibilite:['wcag22'],ingenierie:['fair'],disciplines:['unesco-genai']};
export function readAcademyProgress(storage=globalThis.localStorage){
 try{const v=JSON.parse(storage?.getItem(KEY)||'{}');return v&&typeof v==='object'&&!Array.isArray(v)?v:{}}catch{return {}}
}
export function progressFor(track,progress){const completed=track.lessons.filter((_,i)=>progress[track.id+':'+i]===true).length;return {completed,total:track.lessons.length};}
export function academyWorkbook(track){
 const lines=['# Dossier de formation UNIVERS·IA','',track.title,track.audience,track.duration,
 '','Exercices originaux, exemples fictifs. Dossier d’autoformation non certifiant.',''];
 for(const [i,l] of track.lessons.entries())lines.push('## '+(i+1)+'. '+l.title,'','### Méthode',l.concept,'','### Exemple fictif',l.example,'','### Travail demandé',l.exercise,'','### Éléments de correction',l.correction,'','### Question de contrôle',l.check,'');
 return lines.join('\n');
}
export function mountAcademy(){
 if(currentPage(location.pathname)!=='formations')return;
 const intro=document.querySelector('.mp-intro'),main=document.querySelector('#main');if(!main)return;
 const root=document.createElement('section');root.id='academie';root.className='academy-section';
 root.innerHTML=`<div class="shell"><div class="sectiontop"><div><p class="kicker">ACADÉMIE UNIVERS·IA</p><h2>Apprendre, expérimenter,<br><em>argumenter et vérifier.</em></h2></div><p>Douze parcours universitaires structurés : 48 leçons avec cas fictifs, exercices de transfert, éléments de correction et contrôles de compréhension. Aucun compte n’est nécessaire.</p></div>
 <div class="academy-layout"><aside class="academy-sidebar"><label for="academy-select">Choisir un parcours</label><select id="academy-select">${academyTracks.map(x=>`<option value="${esc(x.id)}">${esc(x.title)}</option>`).join('')}</select><nav class="academy-track-list" id="academy-tracks" aria-label="Parcours de formation"></nav><p class="academy-small">Votre progression est conservée uniquement dans ce navigateur. L’autoévaluation ne délivre pas de diplôme ou certification.</p></aside>
 <div class="academy-content" id="academy-content" aria-live="off"></div></div>
 </div>`;
 if(intro)intro.after(root);else main.prepend(root);
 let active=academyTracks[0].id,progress=readAcademyProgress();
 const sel=root.querySelector('#academy-select'),tabs=root.querySelector('#academy-tracks'),content=root.querySelector('#academy-content');
 const persist=()=>{try{localStorage.setItem(KEY,JSON.stringify(progress));return true}catch{return false}};
 const render=()=>{
  tabs.innerHTML=academyTracks.map(x=>{const p=progressFor(x,progress);return `<button type="button" data-academy="${esc(x.id)}" class="${active===x.id?'on':''}" aria-current="${active===x.id?'true':'false'}"><span>${esc(x.title)}</span><small>${p.completed}/${p.total} leçons parcourues</small></button>`}).join('');
  sel.value=active;
  const track=findTrack(active),p=progressFor(track,progress);
  const sources=(sourceIds[track.id]||[]).map(id=>academicReferences.find(s=>s.id===id)).filter(Boolean);
  content.innerHTML=`<header class="academy-header"><span class="academy-level">${esc(track.level)} · ${esc(track.duration)}</span><h3>${esc(track.title)}</h3><p>Public : ${esc(track.audience)}</p><div class="academy-progress"><progress max="${p.total}" value="${p.completed}">${p.completed} sur ${p.total}</progress><span>${p.completed}/${p.total} leçons autoévaluées</span></div><div class="academy-actions"><button type="button" data-academy-export>Exporter le dossier (.md)</button><button type="button" data-academy-reset>Réinitialiser ce parcours</button></div><p class="academy-status" role="status"></p></header>
  <div class="academy-lessons">${track.lessons.map((l,i)=>`<details class="academy-lesson" data-academy-lesson="${i}"><summary><span class="academy-lesson-num">${String(i+1).padStart(2,'0')}</span><span class="academy-lesson-title">${esc(l.title)}</span><span class="academy-done" aria-label="${progress[track.id+':'+i]===true?'Leçon relue':'Leçon non encore relue'}">${progress[track.id+':'+i]===true?'✓ Relue':'À étudier'}</span></summary><div class="academy-lesson-body"><h4>Comprendre et appliquer</h4><p>${esc(l.concept)}</p><div class="academy-example"><h4>Exemple commenté (fictif)</h4><p>${esc(l.example)}</p></div><div class="academy-exercise"><h4>Activité à réaliser</h4><p>${esc(l.exercise)}</p><label for="academy-response-${i}">Votre réponse ou plan de résolution <small>(brouillon local, non sauvegardé)</small></label><textarea id="academy-response-${i}" rows="4" placeholder="Notez votre raisonnement avant de consulter la correction…"></textarea><details class="academy-correction"><summary>Afficher les éléments de correction</summary><p>${esc(l.correction)}</p></details></div><div class="academy-check"><h4>Question de compréhension</h4><p>${esc(l.check)}</p></div><button type="button" data-academy-complete="${i}" aria-pressed="${progress[track.id+':'+i]===true?'true':'false'}">${progress[track.id+':'+i]===true?'Retirer le marquage':'Marquer la leçon comme étudiée'}</button><p class="academy-small">Marquage déclaratif après lecture et comparaison au corrigé, sans évaluation automatique.</p></div></details>`).join('')}</div>
  <div class="academy-summary"><h4>Projet final de transfert</h4><p>Choisissez une situation réelle et autorisée de votre discipline. Construisez un document comprenant le problème, les données utilisées, le protocole proposé, un exemple d’application, trois contrôles de qualité et les limites rencontrées. Faites relire ce dossier par un pair ou un encadrant avant réutilisation.</p><h4>Critères d’autoévaluation du dossier</h4><ul><li>Objectifs et public explicités</li><li>Sources et données effectivement contrôlées</li><li>Étapes et décisions reproductibles</li><li>Limites et précautions documentées</li><li>Justification des choix et retour critique</li></ul><p class="academy-small">Ce projet est un exercice d’autoformation, pas un diplôme ou une certification institutionnelle.</p></div>
  ${sources.length?`<div class="academy-references"><h4>Références pour aller plus loin</h4>${sources.map(s=>`<p><a href="${esc(s.url)}" target="_blank" rel="noopener noreferrer">${esc(s.title)} ↗</a><small>${esc(s.scope)}</small></p>`).join('')}<p class="academy-small">Ces références ne constituent pas une validation automatique de vos productions.</p></div>`:''}`;
 };
 const choose=id=>{if(!academyTracks.some(x=>x.id===id))return;active=id;render();content.querySelector('h3')?.scrollIntoView({block:'nearest'});};
 tabs.addEventListener('click',event=>{const btn=event.target.closest('button[data-academy]');if(btn)choose(btn.dataset.academy);});
 sel.addEventListener('change',()=>choose(sel.value));
 content.addEventListener('click',event=>{
  const button=event.target.closest('button');if(!button)return;
  const status=content.querySelector('.academy-status');
  if(button.hasAttribute('data-academy-export')){
   const text=academyWorkbook(findTrack(active)),blob=new Blob([text],{type:'text/markdown;charset=utf-8'});
   const url=URL.createObjectURL(blob),link=document.createElement('a');link.href=url;link.download='universia-formation-'+active+'.md';link.click();setTimeout(()=>URL.revokeObjectURL(url),1000);
   if(status)status.textContent='Dossier de formation téléchargé.';
  }else if(button.hasAttribute('data-academy-reset')){
   for(let i=0;i<findTrack(active).lessons.length;i++)delete progress[active+':'+i];
   persist();render();content.querySelector('[data-academy-reset]')?.focus();
  }else if(button.hasAttribute('data-academy-complete')){
   const i=Number(button.dataset.academyComplete),parent=button.closest('.academy-lesson');
   const key=active+':'+i;progress[key]=!progress[key];if(!progress[key])delete progress[key];
   persist();render();const details=content.querySelector('.academy-lesson[data-academy-lesson="'+i+'"]');
   if(details){details.open=true;details.querySelector('[data-academy-complete]')?.focus();}
  }
 });
 render();
}
