import test from 'node:test';import assert from 'node:assert/strict';import {readFileSync} from 'node:fs';
import {academyTracks} from './academy-data.js';
test('12 parcours et 48 leçons substantielles, sans répétition',()=>{
 assert.equal(academyTracks.length,12);assert.equal(new Set(academyTracks.map(x=>x.id)).size,12);
 const lessons=academyTracks.flatMap(x=>x.lessons);assert.equal(lessons.length,48);
 for(const t of academyTracks){assert.ok(t.title&&t.audience&&t.duration&&t.level);assert.equal(t.lessons.length,4);
  for(const l of t.lessons){for(const f of ['title','concept','example','exercise','correction','check'])assert.ok(l[f]?.length>(f==='title'?10:35),t.id+'/'+l.title+': '+f);}
 }
});
test('formations détaillées, progressives, exportables et non certificatives',()=>{
 const ui=readFileSync('academy-ui.js','utf8');
 for(const s of ['academyTracks','academyWorkbook','data-academy-complete','data-academy-export','data-academy-reset','localStorage','Aucun compte','non certifiant','academy-correction'])assert.ok(ui.includes(s),s);
 const src=readFileSync('src.js','utf8');assert.ok(src.includes('mountAcademy()'));
});
test('un cas pratique pointe sur le Studio et initialise le formulaire sur sa page',()=>{
 const ui=readFileSync('v12-ui.js','utf8');
 assert.ok(ui.includes("pageUrl('outils','studio','cas='+encodeURIComponent(c.id))"));
 assert.ok(ui.includes("get('cas')"));
 assert.ok(ui.includes('applyCase(target)'));
});
