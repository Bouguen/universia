import test from 'node:test';
import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';
import {constellationNodes,constellationLinks,validateConstellationTargets} from './constellation-data.js';
import {libraryCategories} from './lot-b-data.js';
test('constellation de 12 accès distincts et lisibles',()=>{
 assert.equal(constellationNodes.length,12);
 assert.equal(new Set(constellationNodes.map(n=>n.id)).size,12);
 for(const n of constellationNodes){
  assert.ok(n.label&&n.description&&n.href.startsWith('#'));
  assert.ok(n.x>=8&&n.x<=92&&n.y>=12&&n.y<=88);
  if(n.category)assert.ok(libraryCategories.includes(n.category));
 }
});
test('nœuds et liens dirigés vers des sections existantes',()=>{
 const ids=new Set(['bibliotheque','recherche-globale','outils','promptotheque','cas-academiques','formations-approfondies','studio']);
 assert.ok(validateConstellationTargets(ids));
 for(const [a,b] of constellationLinks){assert.ok(constellationNodes.some(n=>n.id===a));assert.ok(constellationNodes.some(n=>n.id===b));}
});
test('une seule carte avec vue liste et navigation accessible',()=>{
 const ui=readFileSync('constellation-ui.js','utf8');
 const css=readFileSync('constellation.css','utf8');
 assert.match(ui,/aria-label="Raccourcis vers les pages du portail"/);
 assert.match(ui,/aria-pressed="true"/);
 assert.match(ui,/data-layout="network"/);
 assert.match(ui,/mouseenter/);
 assert.match(ui,/focus/);
 assert.match(ui,/illustration.replaceWith\(host\)/);
 assert.match(ui,/id='constellation'/);
 assert.match(css,/prefers-reduced-motion:reduce/);
 assert.match(css,/max-width:670px/);
});
