import {resources,prompts,themes} from './data.js';
import {academicSkills} from './skills-data.js';
import {academicTemplates,academicPrompts,courses} from './v1-data.js';
import {lessons} from './v11-data.js';
import {workflows,cases,advancedCourses} from './v12-data.js';
import {libraryEntries} from './lot-b-data.js';
export const normalizeSearch=v=>String(v??'').normalize('NFD').replace(/[\u0300-\u036f]/g,'').toLocaleLowerCase('fr').trim();
export const portalIndex=[
 ...resources.map((x,i)=>({id:'resource-'+i,type:'Ressources',title:x.title,desc:x.desc,href:'#ressources',params:'ressource='+encodeURIComponent(x.title),search:x.title+' '+x.desc+' '+(themes.find(t=>t.id===x.group)?.title||'')})),
 ...libraryEntries.map(x=>({id:'library-'+x.id,type:'Bibliothèque',title:x.title,desc:x.summary,href:'#bibliotheque',params:'fiche='+encodeURIComponent(x.id),search:x.title+' '+x.summary+' '+x.category+' '+x.audience+' '+x.steps.join(' ')})),
 ...prompts.map(x=>({id:'starter-'+x.id,type:'Prompts',title:x.label,desc:x.task,href:'#atelier',search:x.label+' '+x.task+' '+x.details})),
 ...academicTemplates.map(x=>({id:'generator-'+x.id,type:'Générateurs',title:x.name,desc:x.area,href:'#outils',search:x.name+' '+x.area})),
 ...academicPrompts.map((x,i)=>({id:'prompt-'+i,type:'Prompts',title:x.title,desc:x.area,href:'#promptotheque',search:x.title+' '+x.area})),
 ...courses.map(x=>({id:'course-'+x.id,type:'Formations',title:x.title,desc:x.level,href:'#formations',search:x.title+' '+x.level})),
 ...lessons.map(x=>({id:'workshop-'+x.id,type:'Formations',title:x.title,desc:x.category,href:'#modules',search:x.title+' '+x.category})),
 ...workflows.map(x=>({id:'workflow-'+x.id,type:'Générateurs',title:x.name,desc:x.goal,href:'#studio',search:x.name+' '+x.area+' '+x.goal})),
 ...cases.map(x=>({id:'case-'+x.id,type:'Cas pratiques',title:x.title,desc:x.context,href:'#cas-academiques',search:x.title+' '+x.context+' '+x.expected})),
 ...advancedCourses.map(x=>({id:'advanced-'+x.id,type:'Formations',title:x.title,desc:x.audience,href:'#formations-approfondies',search:x.title+' '+x.audience})),
 ...academicSkills.map(x=>({id:'skill-'+x.id,type:'Skills IA',title:x.title,desc:x.goal,href:'#skills-detail',params:'skill='+encodeURIComponent(x.id),search:x.title+' '+x.goal+' '+x.category+' '+x.steps.join(' ')}))
];
export const portalTypes=['Tous',...new Set(portalIndex.map(x=>x.type))];
export function searchPortal({query='',type='Tous'}={}){const q=normalizeSearch(query);return portalIndex.filter(x=>(type==='Tous'||type===x.type)&&(!q||normalizeSearch(x.search).includes(q)));}

export function paginatePortal(items,page=1,size=12){
 const total=items.length;
 const pages=Math.max(1,Math.ceil(total/size));
 const current=Math.max(1,Math.min(pages,Number(page)||1));
 return {total,pages,page:current,items:items.slice((current-1)*size,current*size)};
}
