import {libraryEntries} from './lot-b-data.js';
export function filterLibrary({query='',category='Toutes',audience='Tous publics'}={}){
 const term=query.trim().toLocaleLowerCase('fr');
 return libraryEntries.filter(e=>(category==='Toutes'||e.category===category)&&(audience==='Tous publics'||e.audience===audience||e.audience==='Tous publics')&&(!term||[e.title,e.category,e.summary,e.audience,...e.steps].join(' ').toLocaleLowerCase('fr').includes(term)));
}
