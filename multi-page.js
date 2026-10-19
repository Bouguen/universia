import {currentPage,sections,pageUrl,pageLinks,destinationForHash} from './multi-routes.js';
import {constellationNodes} from './constellation-data.js';
import './multi-page.css';
const esc=v=>String(v??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const activeSections={
 accueil:['accueil','parcours','constellation'],
 bibliotheque:['bibliotheque'],ressources:['ressources'],recherche:['recherche-globale'],
 outils:['univ-v1','universia-v12'],prompts:['atelier','univ-v1'],
 formations:['univ-v1','universia-v11','universia-v12'],cas:['universia-v12'],
 integrite:['reperes']
};
const widgetSections={
 outils:{'univ-v1':['outils'],'universia-v12':['studio']},
 prompts:{'univ-v1':['promptotheque']},
 formations:{'univ-v1':['formations'],'universia-v11':['modules'],'universia-v12':['formations-approfondies']},
 cas:{'universia-v12':['cas-academiques']}
};
function linkFor(a,page){
 const raw=a.getAttribute('href')||'';
 if(!raw.startsWith('#')||raw==='#')return;
 if(a.dataset.params){a.href=destinationForHash(raw,a.dataset.params);return;}
 if(a.dataset.group){
   a.href=destinationForHash('#ressources','theme='+encodeURIComponent(a.dataset.group));
   return;
 }
 if(a.classList.contains('constellation-node')){
   const n=constellationNodes.find(n=>n.id===a.dataset.node);
   if(n?.category){a.href=destinationForHash('#bibliotheque','categorie='+encodeURIComponent(n.category));return;}
 }
 const target=raw.slice(1);
 if(!document.getElementById(target))a.href=destinationForHash(raw);
}
export function applyMultipage(){
 const page=currentPage(window.location.pathname);
 document.body.dataset.page=page;
 const nav=document.querySelector('#site-nav');
 if(nav){
  nav.innerHTML=pageLinks().map(x=>'<a href="'+esc(x.href)+'"'+(x.id===page?' aria-current="page"':'')+'>'+esc(x.label)+'</a>').join('');
 }
 const brand=document.querySelector('.head .brand');
 if(brand)brand.href=pageUrl('accueil');
 const main=document.querySelector('#main');
 if(!main)return;
 const allowed=new Set(activeSections[page]||activeSections.accueil);
 const nested=widgetSections[page]||{};
 for(const child of Array.from(main.children)){
  const id=child.id||'';
  const special=(page==='accueil'&&child.classList.contains('audience'))||(page==='integrite'&&child.classList.contains('sources'));
  if(!allowed.has(id)&&!special){child.remove();continue;}
  if(nested[id]){
   for(const el of Array.from(child.children))if(!nested[id].includes(el.id))el.remove();
  }
 }
 if(page==='accueil'){
  // Les parcours sont utiles sur l'accueil; ils ouvrent la page Ressources.
  for(const a of document.querySelectorAll('#parcours a[data-group]'))a.replaceWith(a.cloneNode(true));
 }else{
  const info=sections.find(s=>s.id===page);
  const intro=document.createElement('section');
  intro.className='mp-intro';
  const heading=page==='bibliotheque'?'Bibliothèque universitaire':info.name;
  const label=page==='bibliotheque'?'FICHES ET MÉTHODES':info.name.toUpperCase();
  intro.innerHTML='<div class="shell"><a class="mp-crumb" href="'+esc(pageUrl('accueil'))+'">← Accueil UNIVERS·IA</a><p class="kicker">UNIVERS·IA / '+esc(label)+'</p><h1>'+esc(heading)+'</h1><p>'+esc(info.description)+'</p></div>';
  main.prepend(intro);
 }
 for(const a of document.querySelectorAll('a[href^="#"]'))linkFor(a,page);
 if(page==='ressources'){
  const theme=new URLSearchParams(window.location.search).get('theme');
  const filter=document.querySelector('#ressources [data-filter="'+CSS.escape(theme||'')+'"]');
  if(filter)filter.click();
 }
 if(page==='ressources'){
  const name=new URLSearchParams(window.location.search).get('ressource');
  if(name){const item=[...document.querySelectorAll('#results [data-resource]')].find(x=>x.dataset.resource===name);if(item){const d=item.querySelector('details');if(d)d.open=true;item.scrollIntoView({block:'start'});item.querySelector('summary')?.focus();}}
 }
 if(page==='bibliotheque'){
  const category=new URLSearchParams(window.location.search).get('categorie');
  const select=document.querySelector('#lotb-category');
  if(select&&category&&[...select.options].some(o=>o.value===category)){
   select.value=category;select.dispatchEvent(new Event('change',{bubbles:true}));
  }
  const target=new URLSearchParams(window.location.search).get('fiche');
  if(target){const card=document.querySelector('#lotb-results [data-fiche]');const exact=[...document.querySelectorAll('#lotb-results [data-fiche]')].find(el=>el.dataset.fiche===target);if(exact){exact.open=true;exact.scrollIntoView({block:'start'});exact.querySelector('summary')?.focus();}}
 }
 // Les résultats de recherche sont reconstruits après chaque frappe; leur routage doit rester actif.
 const discovery=document.querySelector('#recherche-globale');
 if(discovery)discovery.addEventListener('click',event=>{
  const a=event.target.closest('a[href^="#"]');if(!a)return;
  linkFor(a,page);
 });
 document.querySelector('footer .footergrid>span')?.replaceChildren(document.createTextNode('VERSION V1.3 · MULTIPAGE · 2026'));
}
