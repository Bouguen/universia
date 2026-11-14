import {encyclopediaEntries,encyclopediaCategories,filterEncyclopedia} from './encyclopedia-data.js';
import './encyclopedia.css';
const esc=v=>String(v??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
export function mountEncyclopedia(){
 const parent=document.querySelector('#bibliotheque .shell');
 if(!parent)return;
 const section=document.createElement('section');
 section.id='encyclopedie';
 section.className='encyclopedia';
 section.setAttribute('aria-labelledby','encyclopedia-heading');
 section.innerHTML=`<div class="encyclopedia-heading"><p class="kicker">UNIVERS·IA / ENCYCLOPÉDIE</p><h2 id="encyclopedia-heading">Comprendre les concepts, explorer les références.</h2><p>Une collection initiale de notices pédagogiques reliées, chacune assortie de sources primaires. Il s'agit de synthèses éditoriales, non d'une reproduction des standards ou publications.</p></div>
 <div class="encyclopedia-filters"><label for="encyclopedia-query">Chercher une notion<input id="encyclopedia-query" type="search" placeholder="RAG, risque, UNESCO, norme…"></label><label for="encyclopedia-category">Catégorie<select id="encyclopedia-category">${encyclopediaCategories.map(x=>'<option>'+esc(x)+'</option>').join('')}</select></label></div>
 <p id="encyclopedia-count" role="status" class="encyclopedia-count"></p><div id="encyclopedia-results" class="encyclopedia-results"></div>
 <p class="encyclopedia-disclaimer">État documentaire initial · Contrôler les dates, les versions, les licences et les politiques institutionnelles avant toute application. Les relations sont des rapprochements pédagogiques éditorialement définis.</p>`;
 // Insert ahead of the pre-existing methodological cards without replacing them.
 const first=parent.querySelector('.sectiontop');
 if(first)first.before(section);else parent.prepend(section);
 const query=section.querySelector('#encyclopedia-query'),category=section.querySelector('#encyclopedia-category'),results=section.querySelector('#encyclopedia-results'),count=section.querySelector('#encyclopedia-count');
 const markup=e=>`<details class="encyclopedia-card" id="encyclopedia-${esc(e.id)}"><summary><span class="encyclopedia-tag">${esc(e.category)}</span><strong>${esc(e.title)}</strong><span>${esc(e.summary)}</span><span class="encyclopedia-read">Lire la notice ↗</span></summary><div class="encyclopedia-body">
 <h3>Présentation et méthode</h3><p>${esc(e.detail)}</p>
 <h3>Usage dans l’enseignement supérieur</h3><p>${esc(e.university)}</p>
 <h3>Limites et précautions</h3><p>${esc(e.limits)}</p>
 <h3>Sources officielles ou scientifiques</h3><ul class="encyclopedia-sources">${e.sources.map(s=>'<li><a href="'+esc(s.url)+'" target="_blank" rel="noopener noreferrer">'+esc(s.label)+' ↗</a></li>').join('')}</ul>
 <h3>Notions et documents associés</h3><div class="encyclopedia-relations">${e.related.map(id=>{const target=encyclopediaEntries.find(x=>x.id===id);return target?'<button type="button" data-encyclopedia-target="'+esc(id)+'">'+esc(target.title)+' ↗</button>':''}).join('')}</div>
 <small>Fiche : ${esc(e.id)} · Langue : français · Statut : synthèse éditoriale</small></div></details>`;
 function render(){
  const items=filterEncyclopedia({query:query.value,category:category.value});
  count.textContent=items.length+' notice(s) trouvée(s) sur '+encyclopediaEntries.length;
  results.innerHTML=items.length?items.map(markup).join(''):'<p>Aucune notice pour ces critères. Essayez un autre terme.</p>';
 }
 query.addEventListener('input',render);category.addEventListener('change',render);
 section.addEventListener('click',event=>{
  const button=event.target.closest('button[data-encyclopedia-target]');if(!button)return;
  const id=button.dataset.encyclopediaTarget;
  // Reset filters so the destination card always exists.
  query.value='';category.value='Toutes';render();
  const target=document.getElementById('encyclopedia-'+id);
  if(target){target.open=true;target.scrollIntoView({behavior:'smooth',block:'start'});target.querySelector('summary')?.focus({preventScroll:true});}
 });
 render();
}
