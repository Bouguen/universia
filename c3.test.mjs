import test from 'node:test';
import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';
import {academicTemplates} from './v1-data.js';
import {lessons} from './v11-data.js';
import {cases,advancedCourses} from './v12-data.js';
import {generatorGuides,modulePracticals,advancedPracticals,casePracticals,integritySituations} from './c3-data.js';
test('Tous les générateurs disposent de consignes concrètes et contrôles',()=>{
 assert.equal(academicTemplates.length,8);
 assert.deepEqual(new Set(Object.keys(generatorGuides)),new Set(academicTemplates.map(x=>x.id)));
 for(const g of Object.values(generatorGuides)){
  for(const k of ['scenario','inputs','sample'])assert.ok(g[k]?.length>40,k);
  assert.equal(g.checks.length,3);
 }
});
test('Six modules et quatre parcours avancés sont accompagnés d’exercices',()=>{
 assert.deepEqual(new Set(Object.keys(modulePracticals)),new Set(lessons.map(x=>x.id)));
 assert.deepEqual(new Set(Object.keys(advancedPracticals)),new Set(advancedCourses.map(x=>x.id)));
 for(const p of Object.values(modulePracticals)){
  assert.equal(p.process.length,3);assert.equal(p.checks.length,3);
  assert.ok(p.sample.length>70&&p.mission.length>35&&p.reflection.length>35);
 }
});
test('Chacun des cas disciplinaires possède trois étapes spécifiques et un livrable',()=>{
 assert.equal(cases.length,15);
 assert.deepEqual(new Set(Object.keys(casePracticals)),new Set(cases.map(x=>x.id)));
 for(const [id,p] of Object.entries(casePracticals)){
  assert.equal(p.length,4,id);
  assert.ok(p.every(x=>x.length>=30),id);
 }
});
test('Quatre situations d’intégrité avec décision responsable et avertissement',()=>{
 assert.equal(integritySituations.length,4);
 for(const c of integritySituations){
  assert.ok(c.title&&c.situation.length>70&&c.decision.length>75&&c.warning.length>30);
  assert.equal(c.checks.length,3);
 }
});
test('Montage des rubriques C3 avant filtrage multipage et sans deuxième accueil',()=>{
 const src=readFileSync('src.js','utf8'),ui=readFileSync('c3-ui.js','utf8'),casesUi=readFileSync('v12-ui.js','utf8');
 assert.match(src,/mountC3\(\);\s*applyMultipage\(\)/);
 assert.match(ui,/c3-ethics/);
 assert.match(ui,/c3-training/);
 assert.match(casesUi,/renderCasePractice\(c\.id\)/);
 assert.match(casesUi,/renderAdvancedPractice\(courseId\)/);
});
