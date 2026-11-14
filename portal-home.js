import {currentPage,pageUrl} from './multi-routes.js';
import './portal-home.css';

// Progressive V2 entry point: existing nine pages, content and URLs remain unchanged.
export function mountPortalHome(){
  if(currentPage(window.location.pathname)!=='accueil')return;
  const main=document.querySelector('#main');
  if(!main)return;
  const constellation=document.querySelector('#constellation');
  const oldPaths=document.querySelector('#parcours');
  const home=document.createElement('div');
  home.className='v2-home';
  home.innerHTML=`
    <section class="v2-splash" aria-labelledby="v2-title">
      <div class="v2-cosmos" aria-hidden="true"><span class="v2-orbit v2-orbit-one"></span><span class="v2-orbit v2-orbit-two"></span><span class="v2-light"></span></div>
      <div class="shell v2-splash-content">
        <p class="v2-eyebrow"><span class="v2-signal"></span> UNIVERS·IA 2.0 · L'INTELLIGENCE ARTIFICIELLE À L'UNIVERSITÉ</p>
        <h1 id="v2-title">Trois univers. <em>Une même ambition : le savoir.</em></h1>
        <p class="v2-lead">Apprendre et enseigner avec l'IA, comprendre ses outils et ses fondements, expérimenter ses technologies. Choisissez votre espace.</p>
        <nav class="v2-portals" aria-label="Les trois espaces d'UNIVERS·IA">
          <a class="v2-portal v2-education" href="${pageUrl('formations')}" aria-label="Accéder à l'espace Pédagogie et apprentissage">
            <span class="v2-portal-icon" aria-hidden="true">✦</span><span class="v2-portal-no">01 / CAMPUS</span>
            <span class="v2-portal-title">Pédagogie<br>& apprentissage</span>
            <span class="v2-portal-desc">Formations, parcours, activités, cas pratiques et méthodes pour enseigner et apprendre avec l'IA.</span>
            <span class="v2-portal-link">Entrer dans le campus <span aria-hidden="true">↗</span></span>
          </a>
          <a class="v2-portal v2-reference" href="${pageUrl('bibliotheque')}" aria-label="Accéder à l'espace Documentation et références">
            <span class="v2-portal-icon" aria-hidden="true">◎</span><span class="v2-portal-no">02 / BIBLIOTHÈQUE</span>
            <span class="v2-portal-title">Documentation<br>& références</span>
            <span class="v2-portal-desc">Encyclopédie en devenir, ressources, outils, standards, sources et guides documentaires.</span>
            <span class="v2-portal-link">Explorer les références <span aria-hidden="true">↗</span></span>
          </a>
          <a class="v2-portal v2-lab" href="${pageUrl('outils')}" aria-label="Accéder à l'espace Laboratoire et expérimentation">
            <span class="v2-portal-icon" aria-hidden="true">⌘</span><span class="v2-portal-no">03 / LABORATOIRE</span>
            <span class="v2-portal-title">Laboratoire<br>& expérimentation</span>
            <span class="v2-portal-desc">Studios et générateurs existants, prompts personnalisables et futurs bacs à sable techniques.</span>
            <span class="v2-portal-link">Accéder au laboratoire <span aria-hidden="true">↗</span></span>
          </a>
        </nav>
        <p class="v2-undertext">Accès libre · Approche critique · Ressources pour l'enseignement supérieur</p>
      </div>
    </section>
    <section class="v2-continuity shell" aria-labelledby="v2-explore-title">
      <div><p class="v2-eyebrow">EXPLORER AUTREMENT</p><h2 id="v2-explore-title">Le savoir est un réseau.</h2><p>Retrouvez la constellation et les parcours thématiques de la version précédente. Ils restent disponibles pendant l'évolution du portail.</p></div>
      <div class="v2-shortcuts">
        <a href="${pageUrl('prompts')}">Promptothèque ↗</a>
        <a href="${pageUrl('recherche')}">Recherche globale ↗</a>
        <a href="${pageUrl('cas')}">Cas pratiques ↗</a>
        <a href="${pageUrl('integrite')}">Éthique & intégrité ↗</a>
      </div>
    </section>
    <div class="shell v2-legacy"><details id="v2-network"><summary>Explorer la constellation interactive <span aria-hidden="true">✦</span></summary><div id="v2-network-slot"></div></details><details id="v2-pathways"><summary>Retrouver les six parcours thématiques <span aria-hidden="true">↗</span></summary><div id="v2-paths-slot"></div></details></div>
  `;
  // Move, never recreate, the existing interactive constellation and pathways.
  if(constellation)home.querySelector('#v2-network-slot').append(constellation);
  if(oldPaths)home.querySelector('#v2-paths-slot').append(oldPaths);
  main.replaceChildren(home);
  const nav=document.querySelector('#site-nav');
  if(nav){
    nav.innerHTML=[
      ['Pédagogie',pageUrl('formations')],
      ['Références',pageUrl('bibliotheque')],
      ['Laboratoire',pageUrl('outils')],
      ['Recherche',pageUrl('recherche')]
    ].map(([label,href])=>'<a href="'+href+'">'+label+'</a>').join('');
  }
  const cta=document.querySelector('.head .navcta');
  if(cta){cta.href=pageUrl('recherche');cta.textContent='Recherche ↗';}
  const brand=document.querySelector('.head .brand');
  if(brand)brand.href=pageUrl('accueil');
  document.querySelector('footer .footergrid>span')?.replaceChildren(document.createTextNode('UNIVERS·IA 2.0 · ÉVOLUTION PROGRESSIVE'));
}
