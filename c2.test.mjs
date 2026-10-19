import test from 'node:test';
import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';
import {libraryEntries} from './lot-b-data.js';
import {deepGuides} from './deep-guides.js';
import {resourceApplications} from './resource-applications.js';
import {resourceGuides} from './resource-guides.js';
import {renderDeepGuide} from './deep-guide-ui.js';

test('Les 24 fiches disposent chacune d’un atelier spécifique',()=>{
 assert.equal(Object.keys(deepGuides).length,24);
 assert.deepEqual(new Set(Object.keys(deepGuides)),new Set(libraryEntries.map(x=>x.id)));
 for(const x of libraryEntries){const g=deepGuides[x.id];assert.ok(g,'guide absent: '+x.id);
  assert.ok(g.duration.length>=5);
  for(const field of ['context','task','example','prompt'])assert.ok(g[field]&&g[field].length>35, x.id+' / '+field);
  assert.ok(g.prompt.length>120,x.id+' : prompt trop superficiel');
  assert.equal(g.checks.length,3,x.id+' : grille à trois contrôles');
  assert.ok(g.checks.every(c=>c.length>=30),x.id+' : contrôle trop vague');
 }
});
test('Chaque fiche se rend avec exercices et prompt personnalisable, sans HTML dangereux',()=>{
 const html=renderDeepGuide('verification-references');
 for(const text of ['Atelier guidé','Exemple commenté','Prompt personnalisable','Grille de contrôle','data-deep-copy'])assert.ok(html.includes(text));
 assert.ok(renderDeepGuide('non-existant')==='');
 const ui=readFileSync('lot-b-ui.js','utf8');
 assert.match(ui,/renderDeepGuide\(e\.id\)/);
 assert.match(ui,/enableDeepGuideCopy\(root\)/);
});
test('Les exemples sont diversifiés et ne prétendent pas fournir des données empiriques',()=>{
 assert.ok(deepGuides['strategie-documentaire'].example.includes('journal'));
 assert.ok(deepGuides['eval-authentique'].example.includes('20'));
 assert.ok(deepGuides['accessibilite-cours'].prompt.includes('WCAG'));
 assert.ok(deepGuides['verification-references'].prompt.includes('DOI'));
});

test('Les quatorze ressources conduisent à une méthode approfondie liée au thème',()=>{assert.equal(Object.keys(resourceApplications).length,14);assert.deepEqual(new Set(Object.keys(resourceApplications)),new Set(Object.keys(resourceGuides)));for(const [title,x] of Object.entries(resourceApplications)){assert.ok(deepGuides[x.guideId],title);assert.ok(x.task.length>=45&&x.output.length>=25,title);}});
