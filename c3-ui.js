import {c3Content} from './c3-content.js';
import {currentPage,pageUrl} from './multi-routes.js';
import './c3-content.css';
const e=s=>String(s??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const item=(title,body,idx)=>'<details class="c3-card"><summary><span class="c3-n">'+String(idx+1).padStart(2,'0')+'</span><strong>'+e(title)+'</strong><span class="c3-open">Consulter la méthode ↗</span></summary><div class="c3-body">'+body+'</div></details>';
const line=(label,value)=>'<p><b>'+e(label)+' :</b> '+e(value)+'</p>';
export function mountC3(){const page=currentPage(location.pathname);if(!['formations','cas','outils','integrite'].includes(page))return;
 const section=document.createElement('section');section.id='atelier-approfondi';section.className='c3-section';
 let title='',intro='',markup='';
 if(page==='formations'){
  title='Mettre les connaissances en pratique';intro='Quatre ateliers complémentaires avec une démarche, un livrable et un exercice de transfert.';
  markup=c3Content.formations.map((x,i)=>item(x[0],line('Domaine',x[1])+line('Durée indicative',x[2])+line('Méthode',x[3])+line('Livrable',x[4])+line('Exercice de transfert',x[5])+line('Point de vigilance',x[6]),i)).join('');
 }else if(page==='cas'){
  title='Études de cas à réaliser';intro='Six cas fictifs : une situation, une démarche concrète, une production attendue et des limites.';
  markup=c3Content.cas.map((x,i)=>item(x[1],line('Discipline',x[0])+line('Situation fictive',x[2])+line('Votre mission',x[3])+line('Production attendue',x[4])+line('Vigilance',x[5]),i)).join('');
 }else if(page==='outils'){
  title='Choisir et utiliser le bon générateur';intro='Des exemples guidés pour exploiter les outils du portail sans confondre prompt et contenu validé.';
  markup=c3Content.outils.map((x,i)=>item(x[0],line('Méthode d’utilisation',x[1])+line('À contrôler avant utilisation',x[2])+'<p><a href="'+e(pageUrl('bibliotheque'))+'">Approfondir avec une fiche de la Bibliothèque ↗</a></p>',i)).join('');
 }else{
  title='Décider et agir avec intégrité';intro='Six situations de vigilance, chacune associée à un document de preuve et une limite à respecter.';
  markup=c3Content.integrity.map((x,i)=>item(x[0],line('Pratique recommandée',x[1])+line('Trace à conserver',x[2])+line('À ne pas faire',x[3]),i)).join('');
 }
 section.innerHTML='<div class="shell"><div class="sectiontop"><div><p class="kicker">ATELIERS & REPÈRES</p><h2>'+e(title)+'</h2></div><p>'+e(intro)+'</p></div><div class="c3-grid">'+markup+'</div><p class="c3-warning">Ces contenus constituent des supports pédagogiques à adapter. Les cas sont fictifs ; vérifiez les règles institutionnelles et les sources applicables.</p></div>';
 const anchor=document.querySelector('main');if(anchor)anchor.append(section);
}
