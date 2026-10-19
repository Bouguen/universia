import {portalIndex,portalTypes,searchPortal,paginateResults} from './portal-search.js';
import './portal-search.css';
import './c1-navigation.css';
const esc=v=>String(v??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
export function mountPortalSearch(){
 const el=document.createElement('section');
 el.id='recherche-globale';
 el.className='portal-search section';
 el.innerHTML='<div class="shell"><div class="sectiontop"><div><p class="kicker">RECHERCHE TRANSVERSALE</p><h2>Tout le portail,<br><em>en une recherche.</em></h2></div><p>Accédez directement à la fiche, au prompt, au générateur ou à la formation qui vous intéresse.</p></div>'+
 '<div class="portal-searchbar"><label>Que recherchez-vous ?<input type="search" id="portal-query" placeholder="Ex. revue de littérature, évaluation, syllabus" autocomplete="off"></label>'+
 '<label>Type de contenu<select id="portal-type">'+portalTypes.map(t=>'<option>'+esc(t)+'</option>').join('')+'</select></label></div>'+
 '<div class="c1-summary"><p id="portal-count" role="status"></p><label>Résultats par page <select id="portal-size"><option value="12">12</option><option value="24">24</option><option value="48">48</option></select></label></div>'+
 '<div id="portal-results" class="portal-results"></div><nav class="c1-pagination" id="portal-pagination" aria-label="Pages de résultats de recherche"></nav>'+
 '<p class="portal-note">Recherche effectuée localement dans le navigateur. Les résultats s’ouvrent sur les contenus précis et restent consultables sans compte.</p></div>';
 const anchor=document.querySelector('#accueil');anchor?.after(el);
 const query=el.querySelector('#portal-query'),type=el.querySelector('#portal-type'),size=el.querySelector('#portal-size'),results=el.querySelector('#portal-results'),count=el.querySelector('#portal-count'),pagination=el.querySelector('#portal-pagination');
 let page=1,matched=[];
 function draw(){
  const info=paginateResults(matched,page,Number(size.value));page=info.page;
  count.textContent=info.total+' résultat'+(info.total>1?'s':'')+' parmi '+portalIndex.length+' contenus · Page '+page+' sur '+info.pages;
  results.innerHTML=info.items.map(x=>
    '<a class="portal-result" href="'+esc(x.href)+'" data-result="'+esc(x.id)+'"><span>'+esc(x.type)+'</span><strong>'+esc(x.title)+'</strong><small>'+esc(x.desc)+'</small><em>Ouvrir ce contenu ↗</em></a>'
  ).join('')||'<p>Aucun résultat. Essayez un autre terme ou un autre filtre.</p>';
  if(info.pages<2){pagination.innerHTML='';return;}
  pagination.innerHTML='<button type="button" data-go="prev" '+(page===1?'disabled':'')+'>← Précédent</button>'+
   '<span aria-live="off">Page '+page+' / '+info.pages+'</span>'+
   '<button type="button" data-go="next" '+(page===info.pages?'disabled':'')+'>Suivant →</button>';
 }
 function filter(){
  page=1;matched=searchPortal({query:query.value,type:type.value});draw();
 }
 pagination.addEventListener('click',e=>{
  const button=e.target.closest('button[data-go]');if(!button||button.disabled)return;
  page+=button.dataset.go==='next'?1:-1;draw();
  const first=results.querySelector('.portal-result');
  if(first){first.focus({preventScroll:true});results.scrollIntoView({behavior:'instant',block:'start'});}
 });
 query.addEventListener('input',filter);type.addEventListener('change',filter);size.addEventListener('change',()=>{page=1;draw();});
 const initial=new URLSearchParams(location.search);
 if(initial.get('q'))query.value=initial.get('q').slice(0,200);
 if(portalTypes.includes(initial.get('type')))type.value=initial.get('type');
 filter();
}
