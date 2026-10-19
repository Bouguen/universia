import {portalIndex,portalTypes,searchPortal,paginatePortal} from './portal-search.js';
import './portal-search.css';
const esc=v=>String(v??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
export function mountPortalSearch(){
 const el=document.createElement('section');el.id='recherche-globale';el.className='portal-search section';el.innerHTML=`<div class="shell"><div class="sectiontop"><div><p class="kicker">RECHERCHE TRANSVERSALE</p><h2>Tout le portail,<br><em>en une recherche.</em></h2></div><p>Retrouvez fiches, prompts, générateurs, cas pratiques et formations. Les résultats renvoient à leurs rubriques.</p></div><div class="portal-searchbar"><label>Que recherchez-vous ?<input type="search" id="portal-query" placeholder="Ex. revue de littérature, évaluation, syllabus"></label><label>Type de ressource<select id="portal-type">${portalTypes.map(t=>`<option>${esc(t)}</option>`).join('')}</select></label></div><p id="portal-count" role="status" aria-live="polite"></p><div id="portal-results" class="portal-results"></div><nav id="portal-pages" class="portal-pages" aria-label="Pagination des résultats"></nav><p class="portal-note">Recherche locale dans les contenus publiés sur ce portail, sans transmission de vos requêtes à un service tiers.</p></div>`;
 const anchor=document.querySelector('#accueil');anchor?.after(el);
 const query=el.querySelector('#portal-query'),type=el.querySelector('#portal-type'),results=el.querySelector('#portal-results'),count=el.querySelector('#portal-count');
 const pages=el.querySelector('#portal-pages');let current=1;
 const draw=()=>{const matches=searchPortal({query:query.value,type:type.value});const currentPage=paginatePortal(matches,current,12);current=currentPage.page;count.textContent=currentPage.total+' résultat(s) sur '+portalIndex.length+' · Page '+current+' sur '+currentPage.pages;
 results.innerHTML=currentPage.items.map(x=>`<a class="portal-result" href="${esc(x.href)}"${x.params?' data-params="'+esc(x.params)+'"':''}><span>${esc(x.type)}</span><strong>${esc(x.title)}</strong><small>${esc(x.desc)}</small><em>Ouvrir ce contenu ↗</em></a>`).join('')||'<p>Aucun résultat. Essayez un autre terme ou un autre filtre.</p>';
 pages.innerHTML=currentPage.total>12?'<button type="button" data-page="prev" '+(current===1?'disabled':'')+'>← Précédent</button><span>Page '+current+' / '+currentPage.pages+'</span><button type="button" data-page="next" '+(current===currentPage.pages?'disabled':'')+'>Suivant →</button>':'';
 };
 query.addEventListener('input',()=>{current=1;draw();});type.addEventListener('change',()=>{current=1;draw();});
 pages.addEventListener('click',event=>{const button=event.target.closest('button[data-page]');if(!button||button.disabled)return;current+=button.dataset.page==='next'?1:-1;draw();count.scrollIntoView({block:'nearest',behavior:'instant'});});
 results.addEventListener('click',event=>{const link=event.target.closest('a[data-params]');if(!link)return;const p=link.dataset.params;try{sessionStorage.setItem('universia-c1-target',p);}catch{}});
 draw();
}
