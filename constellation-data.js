// Navigation visuelle : positions fixes pour préserver la lisibilité et la stabilité du clavier.
// Chaque entrée mène à une section existante, certaines appliquent un filtre éditorial.
export const constellationNodes = [
 {id:'enseigner',label:'Enseigner',icon:'◈',href:'#bibliotheque',category:'Enseignement',description:'Cours, TD et ingénierie pédagogique : consulter les méthodes destinées aux enseignants.',x:13,y:20,group:'pedagogie'},
 {id:'evaluer',label:'Évaluer',icon:'▤',href:'#bibliotheque',category:'Évaluation',description:'Grilles critériées, évaluation authentique et rétroaction formative.',x:37,y:14,group:'pedagogie'},
 {id:'recherche',label:'Recherche scientifique',icon:'✳',href:'#bibliotheque',category:'Recherche',description:'Stratégies documentaires, protocoles, reproductibilité et méthodes de recherche.',x:63,y:14,group:'recherche'},
 {id:'publier',label:'Publier',icon:'▧',href:'#bibliotheque',category:'Publication',description:'Rédaction d’article, figures, choix de revue et réponses aux évaluateurs.',x:87,y:20,group:'recherche'},
 {id:'bibliotheque',label:'Bibliothèque',icon:'▦',href:'#bibliotheque',description:'Accéder aux fiches méthodologiques et aux études de cas disciplinaires.',x:11,y:49,group:'ressources'},
 {id:'recherche-globale',label:'Recherche globale',icon:'⌕',href:'#recherche-globale',description:'Retrouver un prompt, une formation, une fiche ou un outil dans tout le portail.',x:29,y:41,group:'ressources'},
 {id:'generateurs',label:'Générateurs',icon:'⚙',href:'#outils',description:'Générer des supports universitaires structurés et personnalisables.',x:71,y:41,group:'outils'},
 {id:'promptotheque',label:'Promptothèque',icon:'✧',href:'#promptotheque',description:'Découvrir des modèles de prompts adaptés aux métiers universitaires.',x:89,y:49,group:'outils'},
 {id:'cas',label:'Cas pratiques',icon:'◇',href:'#cas-academiques',description:'Appliquer l’IA à des situations disciplinaires documentées.',x:13,y:78,group:'pratique'},
 {id:'formations',label:'Formations',icon:'◉',href:'#formations-approfondies',description:'Suivre des parcours de perfectionnement avec exercices et corrigés.',x:37,y:86,group:'pratique'},
 {id:'integrite',label:'Éthique et intégrité',icon:'⛨',href:'#bibliotheque',category:'Éthique',description:'Transparence, protection des données et responsabilité académique.',x:63,y:86,group:'ethique'},
 {id:'studio',label:'Studio académique',icon:'✦',href:'#studio',description:'Composer un prompt guidé selon la mission et la discipline.',x:87,y:78,group:'outils'}
];
export const constellationLinks = [
 ['enseigner','evaluer'],
 ['recherche','publier'],
 ['bibliotheque','recherche-globale'],
 ['generateurs','promptotheque'],
 ['cas','formations'],
 ['integrite','studio']
];
export function validateConstellationTargets(ids){
 return constellationNodes.every(n=>ids.has(n.href.substring(1)));
}
