// Routes statiques multi-pages compatibles Vercel et GitHub Pages.
export const sections = [
 {id:'accueil',name:'Accueil',slug:'',description:'Découvrez les grands usages de l’IA à l’université et choisissez votre parcours.'},
 {id:'bibliotheque',name:'Bibliothèque',slug:'bibliotheque',description:'Des méthodes, exemples disciplinaires et repères pour enseigner, évaluer, rechercher et publier avec l’IA.'},
 {id:'ressources',name:'Ressources',slug:'ressources',description:'14 ressources pratiques, filtres et favoris.'},
 {id:'recherche',name:'Recherche globale',slug:'recherche',description:'Retrouvez rapidement les fiches, cours, prompts et générateurs.'},
 {id:'outils',name:'Générateurs',slug:'outils',description:'Atelier de création de prompts guidés et générateurs universitaires.'},
 {id:'prompts',name:'Promptothèque',slug:'prompts',description:'Explorez et personnalisez les modèles de prompts académiques.'},
 {id:'formations',name:'Formations',slug:'formations',description:'Parcours d’apprentissage, exercices et ateliers accompagnés.'},
 {id:'cas',name:'Cas pratiques',slug:'cas-pratiques',description:'Exemples concrets dans six familles disciplinaires.'},
 {id:'integrite',name:'Éthique & intégrité',slug:'integrite',description:'Transparence, confidentialité, responsabilité et sources institutionnelles.'},
 {id:'skills',name:'Skills IA',slug:'skills',description:'32 méthodes académiques réutilisables et un atelier de création SKILL.md.'},
 {id:'skills',name:'Skills IA',slug:'skills',description:'32 méthodes académiques réutilisables et un atelier de création de fichiers SKILL.md.'}
];
const base=()=>import.meta.env?.BASE_URL||'/';
export function pageUrl(id='accueil',hash='',params=''){
 const page=sections.find(s=>s.id===id)||sections[0];
 const pathname=base()+(page.slug?page.slug+'/':'');
 return pathname+(params?'?'+params:'')+(hash?'#'+hash:'');
}
export function currentPage(pathname=''){
 const normalized=pathname.replace(/index\.html$/,'').replace(/\/+$/,'');
 return sections.find(x=>x.slug&&normalized.endsWith('/'+x.slug))?.id||'accueil';
}
const sectionMap={
 accueil:'accueil',constellation:'accueil',parcours:'accueil',
 ressources:'ressources',bibliotheque:'bibliotheque','recherche-globale':'recherche',
 atelier:'prompts',promptotheque:'prompts',
 outils:'outils',studio:'outils',
 formations:'formations',modules:'formations','formations-approfondies':'formations',
 'cas-academiques':'cas',reperes:'integrite',skills:'skills','skills-detail':'skills','skills-atelier':'skills',skills:'skills','skills-detail':'skills','skills-atelier':'skills'
};
export function destinationForHash(hash,params=''){
 const id=hash.replace(/^#/,'');
 return pageUrl(sectionMap[id]||'accueil',id,params);
}
export function pageLinks(){return sections.map(s=>({id:s.id,label:s.name,href:pageUrl(s.id)}));}
