import test from 'node:test';
import assert from 'node:assert/strict';
import {disciplines,workflows,cases,advancedCourses} from './v12-data.js';
import {composeV12,validateV12,resolveCase,resolveLesson,isCorrect,courseProgress,normalizeInput} from './v12-core.js';

test('le studio expose les six disciplines et quatre missions',()=>{
  assert.equal(disciplines.length,6);assert.equal(workflows.length,4);
  assert.equal(new Set(disciplines.map(x=>x.id)).size,6);
  assert.equal(new Set(workflows.map(x=>x.id)).size,4);
});
test('les missions comportent des paramètres guidés et des règles vérifiables',()=>{
  for(const w of workflows){assert.equal(w.fields.length,5);assert.ok(w.steps.length>=4);
    const p=composeV12({workflowId:w.id,disciplineId:'droit',values:{},notes:'test'});
    assert.ok(p.includes('N’invente aucune publication'));
    assert.ok(p.includes('[À compléter]'));
    assert.ok(p.includes('droit'));
  }
});
test('la validation ne considère pas les champs vides comme remplis',()=>{
  assert.equal(validateV12({workflowId:'course',disciplineId:'shs',values:{}}).missing.length,5);
  const values=Object.fromEntries(workflows[0].fields.map(([k])=>[k,'valeur']));
  assert.equal(validateV12({workflowId:'course',disciplineId:'shs',values}).ready,true);
});
test('les cas disciplinaires référencent des missions existantes',()=>{
  assert.equal(cases.length,15);assert.equal(new Set(cases.map(x=>x.id)).size,15);
  for(const c of cases){assert.ok(disciplines.some(d=>d.id===c.discipline));assert.ok(workflows.some(w=>w.id===c.workflow));assert.deepEqual(resolveCase(c.id),c)}
});
test('douze leçons et corrigés cohérents',()=>{
  assert.equal(advancedCourses.length,4);assert.equal(advancedCourses.reduce((n,c)=>n+c.lessons.length,0),12);
  for(const c of advancedCourses){assert.equal(c.lessons.length,3);
    c.lessons.forEach((l,i)=>{assert.equal(resolveLesson(c.id,i),l);assert.ok(l.answer>=0&&l.answer<l.choices.length);assert.ok(isCorrect(c.id,i,l.answer));assert.ok(!isCorrect(c.id,i,(l.answer+1)%l.choices.length))});
    const answers=Object.fromEntries(c.lessons.map((l,i)=>[`${c.id}:${i}`,l.answer]));
    assert.deepEqual(courseProgress(c,answers),{correct:3,total:3,percent:100});
    assert.equal(courseProgress(c,{}).percent,0);
  }
});
test('nettoyage des saisies et longueur maximale',()=>{
  assert.equal(normalizeInput(' texte \n  test '),'texte test');
  assert.equal(normalizeInput('X'.repeat(2000)).length,1600);
});
