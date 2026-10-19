// Barre de navigation unique, visible et adaptable sur deux lignes.
export const navigationItems=[
 {href:'#constellation',label:'Explorer'},
 {href:'#parcours',label:'Parcours'},
 {href:'#ressources',label:'Ressources'},
 {href:'#recherche-globale',label:'Recherche'},
 {href:'#bibliotheque',label:'Bibliothèque'},
 {href:'#outils',label:'Générateurs'},
 {href:'#studio',label:'Studio'},
 {href:'#cas-academiques',label:'Cas pratiques'},
 {href:'#formations-approfondies',label:'Formations'},
 {href:'#modules',label:'Ateliers'},
 {href:'#promptotheque',label:'Promptothèque'}
];
export function navigationMarkup(){return '<nav id="site-nav" class="links" aria-label="Navigation principale">'+navigationItems.map(({href,label})=>'<a href="'+href+'">'+label+'</a>').join('')+'</nav><span class="c1-nav-hint" aria-hidden="true">Faites glisser pour découvrir les autres rubriques →</span>';}
export function initNavigation(){/* Les ancres natives conservent navigation clavier et accès direct. */}
