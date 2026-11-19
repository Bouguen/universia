import test from 'node:test';
import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';
import {navigationItems,navigationMarkup} from './navigation.js';
import {resources} from './data.js';
import {resourceGuides} from './resource-guides.js';
test('bannière unique : ancres et rubriques réelles',()=>{const markup=navigationMarkup();assert.equal((markup.match(/<nav/g)||[]).length,1);assert.ok(!markup.includes('menu-toggle'));assert.equal((markup.match(/<a href=/g)||[]).length,navigationItems.length);for(const item of navigationItems){const id=item.href.slice(1);assert.ok(['src.js','v1-ui.js','v11-ui.js','v12-ui.js','lot-b-ui.js','portal-search-ui.js','constellation-ui.js','skills-ui.js'].some(path=>readFileSync(path,'utf8').includes('id="'+id+'"')||(readFileSync(path,'utf8').includes("root.id='"+id+"'")||readFileSync(path,'utf8').includes("el.id='"+id+"'")||readFileSync(path,'utf8').includes("host.id='"+id+"'"))),id);}});
test('les 14 cartes de ressources ont une fiche actionnable',()=>{assert.equal(resources.length,14);for(const item of resources){const guide=resourceGuides[item.title];assert.ok(guide,item.title);assert.ok(guide.steps.length>=3);assert.ok(guide.deliverable&&guide.caution&&guide.href.startsWith('#'));assert.ok(navigationItems.some(x=>x.href===guide.href));}});
test('bannière affichée et centrée à toutes les tailles',()=>{const css=readFileSync('v12.css','utf8');assert.match(css,/\.nav \.menu-toggle\{display:none!important\}/);assert.match(css,/flex-wrap:wrap!important/);assert.match(css,/justify-content:flex-start!important/);});
