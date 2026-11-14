import test from 'node:test';
import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';
import {resourceGuides} from './resource-guides.js';
import {guideEnhancements} from './guide-enhancements.js';
import {encyclopediaEntries,filterEncyclopedia} from './encyclopedia-data.js';
import {pageUrl,destinationForHash} from './multi-routes.js';

test('resource-card action links resolve to valid multipage destinations',()=>{
 for(const [title,guide] of Object.entries(resourceGuides)){
  const target=destinationForHash(guide.href);
  assert.ok(target.startsWith('/')||target.startsWith('http'),title);
  assert.ok(target.includes('/'),title);
  assert.ok(guideEnhancements[title],title);
  assert.equal(guideEnhancements[title].criteria.length,3,title);
 }
 assert.match(destinationForHash('#studio'),/outils\/#studio$/);
 const src=readFileSync('src.js','utf8');
 assert.ok(src.includes('destinationForHash(resourceGuides[r.title].href)'), 'guides must resolve links while rendering');
 const router=readFileSync('multi-page.js','utf8');
 assert.ok(router.includes("main.addEventListener('click'"),'delegated navigation must work after re-render');
});
test('encyclopedia records are complete and relations point to real targets',()=>{
 const ids=new Set(encyclopediaEntries.map(x=>x.id));
 assert.ok(ids.size>=8);
 assert.equal(ids.size,encyclopediaEntries.length);
 for(const x of encyclopediaEntries){
  assert.ok(x.title&&x.summary&&x.detail&&x.university&&x.limits,x.id);
  assert.ok(x.sources.length>0,x.id);
  for(const src of x.sources)assert.match(src.url,/^https:\/\//,x.id);
  for(const id of x.related)assert.ok(ids.has(id),x.id+' -> '+id);
 }
 assert.ok(filterEncyclopedia({query:'rag'}).some(x=>x.id==='rag'));
 assert.ok(filterEncyclopedia({category:'Cadre et standard'}).some(x=>x.id==='iso42001'));
 assert.equal(filterEncyclopedia({query:'zzzz-not-existing'}).length,0);
});
test('both the old library and new encyclopedia remain mounted',()=>{
 const src=readFileSync('src.js','utf8');
 assert.ok(src.includes('mountLotB();'));
 assert.ok(src.includes('mountEncyclopedia();'));
 const ui=readFileSync('encyclopedia-ui.js','utf8');
 assert.ok(ui.includes('first.before(section)'), 'do not replace old library');
 assert.ok(ui.includes('data-encyclopedia-target'));
});
