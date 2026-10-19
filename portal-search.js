import {resources,prompts,themes} from './data.js';
import {academicTemplates,academicPrompts,courses} from './v1-data.js';
import {lessons} from './v11-data.js';
import {workflows,cases,advancedCourses} from './v12-data.js';
import {libraryEntries} from './lot-b-data.js';
import {pageUrl} from './multi-routes.js';

export const normalizeSearch=value=>String(value??'').normalize('NFD').replace(/[\u0300-\u036f]/g,'').toLocaleLowerCase('fr').trim();
const item=(id,type,title,desc,page,anchor,search)=>{
  return {id,type,title,desc,href:pageUrl(page,anchor,'cible='+encodeURIComponent(id)),search};
};
export const portalIndex=[
 ...resources.map((x,i)=>item('resource-'+i,'Ressources',x.title,x.desc,'ressources','ressources',x.title+' '+x.desc+' '+x.kind+' '+(themes.find(t=>t.id===x.group)?.title||''))),
 ...libraryEntries.map(x=>item('library-'+x.id,'Bibliothèque',x.title,x.summary,'bibliotheque','bibliotheque',x.title+' '+x.summary+' '+x.category+' '+x.audience+' '+x.steps.join(' '))),
 ...prompts.map(x=>item('starter-'+x.id,'Prompts',x.label,x.task,'prompts','atelier',x.label+' '+x.task+' '+x.details)),
 ...academicTemplates.map(x=>item('generator-'+x.id,'Générateurs',x.name,x.area,'outils','outils',x.name+' '+x.area)),
 ...academicPrompts.map((x,i)=>item('prompt-'+i,'Prompts',x.title,x.area,'prompts','promptotheque',x.title+' '+x.area)),
 ...courses.map(x=>item('course-'+x.id,'Formations',x.title,x.level,'formations','formations',x.title+' '+x.level)),
 ...lessons.map(x=>item('workshop-'+x.id,'Formations',x.title,x.category,'formations','modules',x.title+' '+x.category+' '+x.audience)),
 ...workflows.map(x=>item('workflow-'+x.id,'Générateurs',x.name,x.goal,'outils','studio',x.name+' '+x.area+' '+x.goal)),
 ...cases.map(x=>item('case-'+x.id,'Cas pratiques',x.title,x.context,'cas','cas-academiques',x.title+' '+x.context+' '+x.expected)),
 ...advancedCourses.map(x=>item('advanced-'+x.id,'Formations',x.title,x.audience,'formations','formations-approfondies',x.title+' '+x.audience))
];
export const portalTypes=['Tous',...new Set(portalIndex.map(x=>x.type))];
const tokens=q=>normalizeSearch(q).split(/\s+/).filter(Boolean);
function relevance(entry,terms){
 const title=normalizeSearch(entry.title),desc=normalizeSearch(entry.desc),full=normalizeSearch(entry.search);
 if(!terms.every(t=>full.includes(t)))return -1;
 let score=terms.reduce((sum,t)=>sum+(title.includes(t)?12:0)+(desc.includes(t)?4:0),0);
 if(title===terms.join(' '))score+=80;
 else if(title.startsWith(terms.join(' ')))score+=30;
 return score;
}
export function searchPortal({query='',type='Tous'}={}){
 const terms=tokens(query);
 return portalIndex.filter(x=>type==='Tous'||x.type===type).map(x=>({entry:x,score:terms.length?relevance(x,terms):0}))
 .filter(x=>x.score>=0).sort((a,b)=>b.score-a.score||a.entry.title.localeCompare(b.entry.title,'fr'))
 .map(x=>x.entry);
}
export function paginateResults(items,page=1,pageSize=12){
 const size=Math.max(1,Math.min(50,Math.floor(Number(pageSize))||12));
 const pages=Math.max(1,Math.ceil(items.length/size));
 const current=Math.max(1,Math.min(pages,Math.floor(Number(page))||1));
 return {items:items.slice((current-1)*size,current*size),page:current,pages,total:items.length,pageSize:size};
}
