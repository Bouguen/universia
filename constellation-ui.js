import {constellationNodes,constellationLinks} from './constellation-data.js';
import './constellation.css';

const safe=v=>String(v??'').replace(/[&<>"']/g,ch=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[ch]));
const compactNames={
  recherche:'Recherche', 'recherche-globale':'Explorer',
  integrite:'Intégrité', generateurs:'Outils',
  promptotheque:'Prompts', bibliotheque:'Bibliothèque',
  cas:'Cas pratiques', formations:'Formations', studio:'Studio'
};
const stars=[
 [5,12],[8,35],[10,67],[19,6],[25,26],[28,67],[34,6],[41,29],[44,70],
 [51,9],[55,25],[59,71],[68,7],[71,66],[77,29],[82,10],[91,13],[95,36],
 [91,68],[84,93],[74,96],[56,93],[31,93],[8,93],[17,48],[50,72],[96,88]
];

export function mountConstellation(){
 const illustration=document.querySelector('#accueil .hero-art');
 if(!illustration)return;
 const host=document.createElement('div');
 host.id='constellation';
 host.className='hero-constellation';
 host.setAttribute('role','region');
 host.setAttribute('aria-label','Constellation interactive des contenus UNIVERS·IA');

 const lines=constellationLinks.map(([a,b])=>{
   const source=constellationNodes.find(n=>n.id===a),target=constellationNodes.find(n=>n.id===b);
   return '<line x1="'+source.x+'" y1="'+source.y+'" x2="'+target.x+'" y2="'+target.y+'" />';
 }).join('');
 const spokes=constellationNodes.map(n=>'<line x1="50" y1="52" x2="'+n.x+'" y2="'+n.y+'" />').join('');
 const stardust=stars.map(([x,y],i)=>'<circle cx="'+x+'" cy="'+y+'" r="'+(i%5===0?.34:.16)+'" />').join('');
 const nodes=constellationNodes.map(n=>
  '<a class="constellation-node" data-node="'+safe(n.id)+'" href="'+safe(n.href)+'" style="--x:'+n.x+'%;--y:'+n.y+'%" aria-label="'+safe(n.label+'. '+n.description)+'">'+
  '<span class="constellation-dot" aria-hidden="true"></span><span class="constellation-name">'+safe(compactNames[n.id]||n.label)+'</span></a>'
 ).join('');

 host.innerHTML=
  '<div class="constellation-overline"><span class="constellation-signal" aria-hidden="true"></span>UNIVERS·IA / CARTE DES SAVOIRS<span class="constellation-overline-number">01 — 12</span></div>'+
  '<div class="constellation-stage" data-layout="network">'+
   '<svg class="constellation-wires" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true">'+
    '<g class="cosmos-stars">'+stardust+'</g><g class="cosmos-links">'+spokes+lines+'</g>'+
   '</svg>'+
   '<div class="constellation-center" aria-hidden="true"><strong>U<span>·</span>IA</strong><small>Explorer</small></div>'+
   '<nav class="constellation-items" aria-label="Raccourcis vers les pages du portail">'+nodes+'</nav>'+
  '</div>'+
  '<div class="constellation-foot"><p id="constellation-help" aria-live="off">Choisissez un domaine dans la constellation.</p>'+
   '<div class="constellation-controls" role="group" aria-label="Afficher la constellation">'+
    '<button type="button" data-view="network" aria-pressed="true">Réseau</button>'+
    '<button type="button" data-view="list" aria-pressed="false">Liste</button>'+
   '</div>'+
  '</div>';
 illustration.replaceWith(host);
 const stage=host.querySelector('.constellation-stage'),help=host.querySelector('#constellation-help');
 for(const a of host.querySelectorAll('.constellation-node')){
  const node=constellationNodes.find(n=>n.id===a.dataset.node);
  const show=()=>{help.textContent=node.description;stage.dataset.active=node.id;};
  const reset=()=>{help.textContent='Choisissez un domaine dans la constellation.';stage.dataset.active='';};
  a.addEventListener('mouseenter',show);
  a.addEventListener('focus',show);
  a.addEventListener('mouseleave',reset);
  a.addEventListener('blur',reset);
  a.addEventListener('click',()=>{
   if(node.category){
    try{sessionStorage.setItem('universia-constellation-category',node.category)}catch{}
    const category=document.querySelector('#lotb-category');
    if(category){category.value=node.category;category.dispatchEvent(new Event('change',{bubbles:true}));}
   }
  });
 }
 for(const button of host.querySelectorAll('[data-view]')){
  button.addEventListener('click',()=>{
   stage.dataset.layout=button.dataset.view;
   for(const b of host.querySelectorAll('[data-view]'))b.setAttribute('aria-pressed',String(b===button));
  });
 }
}
