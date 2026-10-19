import test from 'node:test';
import assert from 'node:assert/strict';
import {academicPrompts,academicTemplates} from './v1-data.js';
import {academicExample,templateForExample,academicExampleHref} from './prompt-link.js';

test('les 24 exemples proposent un lien vers un générateur existant',()=>{
 assert.equal(academicPrompts.length,24);
 for(const p of academicPrompts){
  assert.deepEqual(academicExample(String(p.id)),p);
  assert.ok(academicTemplates.some(x=>x.id===templateForExample(p)),p.title);
  const url=academicExampleHref(p.id);
  assert.match(url,new RegExp('/outils/\\?prompt='+p.id+'#outils$'));
 }
});
test('les associations respectent les activités scientifiques spécifiques',()=>{
 for(const [id,template] of [[1,'syllabus'],[7,'rubric'],[8,'assessment'],[10,'feedback'],[12,'review'],[16,'article'],[19,'reviewers'],[20,'thesis'],[22,'assessment'],[24,'syllabus']]){
   assert.equal(templateForExample(academicExample(id)),template,String(id));
 }
});
test('les valeurs incorrectes ne sélectionnent pas de prompt',()=>{
 for(const id of [null,'','0','1.1','NaN','33','<script>','-1'])assert.equal(academicExample(id),null);
});
