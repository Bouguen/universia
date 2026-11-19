import test from 'node:test';
import assert from 'node:assert/strict';
import {academicSkills,skillFamilies} from './skills-data.js';
import {skillById,filterAcademicSkills,skillSlug,toSkillMarkdown,validateCustomSkill,customSkillMarkdown} from './skills-core.js';
import {readFileSync,existsSync} from 'node:fs';

test('32 skills distincts répartis dans les huit familles académiques',()=>{
 assert.equal(academicSkills.length,32);
 assert.equal(skillFamilies.length,8);
 assert.equal(new Set(academicSkills.map(x=>x.id)).size,32);
 for(const category of skillFamilies){
  const subset=academicSkills.filter(x=>x.category===category.id);
  assert.equal(subset.length,4,category.id);
 }
});
test('chaque skill fournit un workflow documenté et un SKILL.md conforme',()=>{
 for(const skill of academicSkills){
  assert.equal(skillById(skill.id),skill);
  assert.ok(skill.title.length>10&&skill.goal.length>20&&skill.deliverable.length>10,skill.id);
  assert.ok(skill.steps.length>=4&&skill.checks.length>=2&&skill.caution.length>20,skill.id);
  assert.ok(skill.steps.every(x=>x.length>20),skill.id);
  const md=toSkillMarkdown(skill);
  const header=md.match(/^---\n([\s\S]+?)\n---\n/);
  assert.ok(header,'YAML header '+skill.id);
  assert.match(header[1],new RegExp('^name: '+skill.id+'$', 'm'));
  assert.match(header[1],/^description: ".{20,}"$/m);
  assert.match(md,/## Procédure/);
  assert.match(md,/## Contrôles qualité/);
  assert.ok(!md.includes('<script'),skill.id);
  assert.ok(!md.includes('curl | bash'),skill.id);
  assert.ok(skillSlug(skill.id).length<=64);
 }
});
test('filtrage multi-critères, accents et identifiants invalides',()=>{
 assert.equal(filterAcademicSkills().length,32);
 assert.equal(filterAcademicSkills({category:'recherche'}).length,4);
 assert.equal(filterAcademicSkills({query:'littérature'}).length,filterAcademicSkills({query:'litterature'}).length);
 assert.ok(filterAcademicSkills({query:'syllabus'}).some(s=>s.id==='syllabus-aligne'));
 assert.equal(filterAcademicSkills({query:'xyz-no-result'}).length,0);
 assert.equal(skillById('<script>'),null);
});
test('atelier : champs requis, normalisation et génération locale',()=>{
 const base={title:'Réviser un mémoire',description:'Utiliser pour relire un manuscrit et établir des suggestions vérifiables.',context:'Master',deliverable:'Rapport de vérification',steps:'Vérifier les titres\nLire la méthodologie\nContrôler les sources',checks:'Vérifier les dates'};
 assert.equal(validateCustomSkill({...base,title:''}).ready,false);
 assert.equal(validateCustomSkill({...base,steps:'Une étape'}).ready,false);
 assert.equal(validateCustomSkill(base).ready,true);
 const result=customSkillMarkdown(base);
 assert.match(result,/^---\nname: reviser-un-memoire\n/);
 assert.ok(result.includes('## Étapes'));
 assert.ok(result.includes('Rapport de vérification'));
 assert.equal(skillSlug('Évaluation : données & IA'),'evaluation-donnees-ia');
});
test('rubrique dédiée et composants disponibles',()=>{
 assert.ok(existsSync('skills/index.html'));
 const ui=readFileSync('skills-ui.js','utf8');
 assert.ok(ui.includes('skills-grid'));
 assert.ok(ui.includes('skills-detail'));
 assert.ok(ui.includes('skills-form'));
 assert.ok(ui.includes('downloadMarkdown'));
 const src=readFileSync('src.js','utf8');
 assert.ok(src.includes('mountSkills()'));
});
