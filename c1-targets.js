import {portalIndex} from './portal-search.js';
import {academicPrompts} from './v1-data.js';
import {cases} from './v12-data.js';
import {pageUrl} from './multi-routes.js';

const el=(selector)=>document.querySelector(selector);
const byData=(attr,id)=>el('['+attr+'="'+CSS.escape(String(id))+'"]');
const changed=node=>node?.dispatchEvent(new Event('change',{bubbles:true}));
const typed=node=>node?.dispatchEvent(new Event('input',{bubbles:true}));
function reveal(node){
 if(!node)return false;
 node.classList.add('c1-target');
 if(!node.hasAttribute('tabindex'))node.setAttribute('tabindex','-1');
 node.scrollIntoView({block:'center',behavior:'instant'});
 node.focus({preventScroll:true});
 return true;
}
// Called once, after all existing course and tool components are mounted.
export function applySearchTarget(){
 const id=new URLSearchParams(location.search).get('cible');
 if(!id||!portalIndex.some(x=>x.id===id))return;
 let node=null;
 if(id.startsWith('library-')){
  node=byData('data-library-id',id.slice(8));
  if(node)node.open=true;
 }else if(id.startsWith('resource-')){
  node=byData('data-resource-index',id.slice(9));
  if(node)node.querySelector('details')?.setAttribute('open','');
 }else if(id.startsWith('starter-')){
  const select=el('#template');
  if(select){select.value=id.slice(8);el('#generate')?.click();node=select;}
 }else if(id.startsWith('generator-')){
  const select=el('#v1-tool');
  if(select){select.value=id.slice(10);changed(select);node=select;}
 }else if(id.startsWith('prompt-')){
  const position=Number(id.slice(7));
  const prompt=academicPrompts[position];
  if(prompt){
   const search=el('#v1-search');
   if(search){search.value=prompt.title;typed(search);node=el('#v1-catalog .v1-prompt');}
   else{
    const picker=el('#v1-tool');
    if(picker){
     const mapping={'Enseignement':'syllabus','Évaluation':'rubric','Recherche':'review','Publication':'article','Encadrement':'thesis','Intégrité':'assessment'};
     picker.value=mapping[prompt.area]||'syllabus';changed(picker);
     const goal=el('#v1-fields [data-key="goals"]');
     if(goal)goal.value=prompt.title;
     el('#v1-create')?.click();node=picker;
    }
   }
  }
 }else if(id.startsWith('course-')){
  const button=el('#v1-courses [data-course="'+CSS.escape(id.slice(7))+'"]');
  if(button){button.click();node=el('#v1-course-detail');}
 }else if(id.startsWith('workshop-')){
  const button=el('#v11-index [data-lesson="'+CSS.escape(id.slice(9))+'"]');
  if(button){button.click();node=el('#v11-detail');}
 }else if(id.startsWith('workflow-')){
  const button=el('#u12-workflows [data-workflow="'+CSS.escape(id.slice(9))+'"]');
  if(button){button.click();node=el('#studio');}
 }else if(id.startsWith('case-')){
  const caseId=id.slice(5);
  const c=cases.find(x=>x.id===caseId);
  if(c){
   const search=el('#u12-search');
   if(search){search.value=c.title;typed(search);node=el('#u12-cases .u12-case');}
   else if(el('#studio')){
    window.dispatchEvent(new CustomEvent('universia:load-case',{detail:{id:caseId}}));
    node=el('#studio');
   }
  }
 }else if(id.startsWith('advanced-')){
  const button=el('#u12-course-tabs [data-course="'+CSS.escape(id.slice(9))+'"]');
  if(button){button.click();node=el('#u12-lesson');}
 }
 reveal(node);
}
export function enableCrossPageActions(page){
 if(page==='cas'){
  el('#u12-cases')?.addEventListener('click',event=>{
   const button=event.target.closest('button[data-case]');
   if(!button)return;
   event.preventDefault();
   event.stopImmediatePropagation();
   window.location.assign(pageUrl('outils','studio','cible='+encodeURIComponent('case-'+button.dataset.case)));
  },true);
 }
 if(page==='prompts'){
  el('#v1-catalog')?.addEventListener('click',event=>{
   const button=event.target.closest('button[data-prompt]');
   if(!button)return;
   event.preventDefault();
   event.stopImmediatePropagation();
   const position=academicPrompts.findIndex(x=>String(x.id)===button.dataset.prompt);
   if(position>=0)window.location.assign(pageUrl('outils','outils','cible='+encodeURIComponent('prompt-'+position)));
  },true);
 }
}
