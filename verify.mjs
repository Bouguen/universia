import {academicTemplates,academicPrompts,courses} from './v1-data.js';
import {resources,prompts,themes} from './data.js';
import {readFileSync} from 'node:fs';
import assert from 'node:assert/strict';
assert.equal(academicTemplates.length,8);
assert.equal(academicPrompts.length,24);
assert.equal(courses.length,4);
assert.equal(resources.length,14);
assert.equal(prompts.length,6);
assert.equal(themes.length,6);
for(const t of academicTemplates){assert.equal(t.fields.length,5);assert.ok(t.fields.every(x=>x.length===3))}
for(const c of courses){assert.equal(c.units.length,4);assert.ok(c.answer>=0&&c.answer<c.choices.length)}
for(const file of ['src.js','v1-ui.js','style.css']){assert.ok(readFileSync(file,'utf8').length>1000)}
assert.match(readFileSync('src.js','utf8'),/mountV1\(\)/);
console.log('10 contrôles de structure et de contenu : OK');
