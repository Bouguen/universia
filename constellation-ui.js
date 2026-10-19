import {constellationNodes,constellationLinks} from './constellation-data.js';
import './constellation.css';
const safe=s=>String(s??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;','\'':'&#39;'}[c]));
export function mountConstellation(){
 const host=document.createElement('section');host.id='constellation';host.className='constellation-section';
 const nodeMarkup=n=>'<a class="constellation-node group-'+n.group+'" data-node="'+safe(n.id)+'" href="'+safe(n.href)+'" style="--x:'+n.x+'%;--y:'+n.y+'%" aria-label="'+safe(n.label+'. '+n.description)+'"><span class="constellation-symbol" aria-hidden="true">'+safe(n.icon)+'</span><span>'+safe(n.label)+'</span></a>';
 const paths=constellationLinks.map(([a,b])=>{const n=constellationNodes.find(x=>x.id===a),m=constellationNodes.find(x=>x.id===b);return '<line x1="'+n.x+'%" y1="'+n.y+'%" x2="'+m.x+'%" y2="'+m.y+'%"/>';}).join('');
 host.innerHTML='<div class="shell"><div class="constellation-heading"><div><p class="kicker">EXPLOREZ UNIVERS·IA</p><h2>Une constellation de savoirs,<br><em>à explorer librement.</em></h2><p>Choisissez un domaine pour accéder directement à ses outils, méthodes et formations.</p></div><div class="constellation-controls" role="group" aria-label="Présentation de la constellation"><button type="button" data-view="network" aria-pressed="true">Vue réseau</button><button type="button" data-view="list" aria-pressed="false">Vue liste</button></div></div><div class="constellation-stage" data-layout="network"><svg class="constellation-wires" aria-hidden="true" viewBox="0 0 100 100" preserveAspectRatio="none">'+paths+constellationNodes.map(n=>'<line x1="50%" y1="50%" x2="'+n.x+'%" y2="'+n.y+'%"/>').join('')+'</svg><div class="constellation-center" aria-hidden="true"><strong>U<span>·</span>IA</strong><small>Explorer</small></div><nav class="constellation-items" aria-label="Accès visuels aux contenus">'+constellationNodes.map(nodeMarkup).join('')+'</nav></div><p class="constellation-caption" id="constellation-help" role="status">Survolez un thème ou utilisez le clavier pour découvrir sa description ; cliquez pour y accéder.</p></div>';
 const hero=document.querySelector('#accueil');if(!hero)return;hero.after(host);
 const stage=host.querySelector('.constellation-stage'),help=host.querySelector('#constellation-help');
 for(const a of host.querySelectorAll('.constellation-node')){
   const node=constellationNodes.find(n=>n.id===a.dataset.node);
   a.addEventListener('mouseenter',()=>{help.textContent=node.description;stage.dataset.active=node.id;});
   a.addEventListener('focus',()=>{help.textContent=node.description;stage.dataset.active=node.id;});
   a.addEventListener('mouseleave',()=>{stage.dataset.active='';help.textContent='Choisissez un thème pour accéder à son contenu.';});
   a.addEventListener('blur',()=>{stage.dataset.active='';});
   a.addEventListener('click',()=>{if(node.category){try{sessionStorage.setItem('universia-constellation-category',node.category)}catch{}}});
 }
 for(const button of host.querySelectorAll('[data-view]')){
   button.addEventListener('click',()=>{stage.dataset.layout=button.dataset.view;for(const b of host.querySelectorAll('[data-view]'))b.setAttribute('aria-pressed',String(b===button));});
 }
}
