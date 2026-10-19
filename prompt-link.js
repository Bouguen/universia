import {academicPrompts,academicTemplates} from './v1-data.js';
import {pageUrl} from './multi-routes.js';

// Chaque exemple sélectionne le générateur correspondant à son usage réel.
const preciseTemplates={
 7:'rubric',8:'assessment',9:'assessment',10:'feedback',
 16:'article',17:'article',18:'article',19:'reviewers',
 20:'thesis',21:'thesis',22:'assessment',23:'assessment'
};
const byArea={
 Enseignement:'syllabus',Évaluation:'rubric',Recherche:'review',
 Publication:'article',Encadrement:'thesis',Intégrité:'assessment'
};
export function academicExample(id){
 if(!/^[1-9]\d*$/.test(String(id??'')))return null;
 return academicPrompts.find(p=>p.id===Number(id))||null;
}
export function templateForExample(example){
 if(!example)return null;
 const id=preciseTemplates[example.id]||byArea[example.area]||'syllabus';
 return academicTemplates.some(t=>t.id===id)?id:null;
}
export function academicExampleHref(id){
 return pageUrl('outils','outils','prompt='+encodeURIComponent(String(id)));
}
