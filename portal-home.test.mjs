import test from 'node:test';
import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';

test('V2 three-space landing integrates without replacing historical route map',()=>{
 const home=readFileSync('portal-home.js','utf8');
 const entry=readFileSync('src.js','utf8');
 const route=readFileSync('multi-routes.js','utf8');
 for(const item of ['Pédagogie','Documentation','Laboratoire','mountPortalHome','pageUrl(\'formations\')','pageUrl(\'bibliotheque\')','pageUrl(\'outils\')'])assert.ok(home.includes(item),item);
 for(const legacy of ['#constellation','#parcours','pageUrl(\'prompts\')','pageUrl(\'recherche\')'])assert.ok(home.includes(legacy),legacy);
 assert.ok(entry.includes("import {mountPortalHome} from './portal-home.js'"));
 assert.ok(entry.indexOf('mountPortalHome();')>entry.indexOf('mountC3();'));
 for(const slug of ['bibliotheque','formations','outils','prompts','integrite'])assert.ok(route.includes("slug:'"+slug+"'"));
});
test('V2 landing keeps keyboard focus and motion alternatives',()=>{
 const css=readFileSync('portal-home.css','utf8');
 assert.match(css,/:focus-visible/);
 assert.match(css,/prefers-reduced-motion/);
 assert.match(css,/@media\(max-width:860px\)/);
});
