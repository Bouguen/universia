import test from 'node:test';
import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';
import {portalIndex,searchPortal,paginateResults,normalizeSearch} from './portal-search.js';
import {libraryEntries} from './lot-b-data.js';
test('chaque élément indexé ouvre un contenu précis',()=>{
 assert.ok(portalIndex.length>=85);
 assert.equal(new Set(portalIndex.map(x=>x.id)).size,portalIndex.length);
 for(const x of portalIndex){
  const url=new URL(x.href,'https://universia.test');
  assert.equal(url.searchParams.get('cible'),x.id,x.id);
  assert.ok(url.hash.length>1,x.id);
  assert.ok(x.title&&x.type&&x.desc!==undefined);
 }
});
test('classement par pertinence et recherche multi-mots accent-insensible',()=>{
 assert.equal(normalizeSearch('Évaluation'),'evaluation');
 const hits=searchPortal({query:'références bibliographiques'});
 assert.ok(hits.length>0);
 assert.ok(hits[0].title.toLowerCase().includes('références')||hits[0].title.toLowerCase().includes('bibliograph'));
 assert.deepEqual(searchPortal({query:'revue',type:'Bibliothèque'}).every(x=>x.type==='Bibliothèque'),true);
 assert.equal(searchPortal({query:'introuvableZZ889900'}).length,0);
});
test('pagination complète, bornée, sans perte de résultats',()=>{
 const all=searchPortal();
 const pages=Math.ceil(all.length/12);
 let collected=[];
 for(let i=1;i<=pages;i++)collected.push(...paginateResults(all,i,12).items);
 assert.deepEqual(collected.map(x=>x.id),all.map(x=>x.id));
 assert.equal(paginateResults(all,0,12).page,1);
 assert.equal(paginateResults(all,999,12).page,pages);
 assert.equal(paginateResults([],1,12).pages,1);
});
test('chaque fiche bibliographique possède une cible et un ID stable',()=>{
 for(const x of libraryEntries){
  assert.ok(portalIndex.some(y=>y.id==='library-'+x.id&&y.href.includes('cible=')));
 }
 const ui=readFileSync('lot-b-ui.js','utf8');
 assert.match(ui,/data-library-id/);
});
test('navigation entre pages et panneau mobile sans menu doublon',()=>{
 const targets=readFileSync('c1-targets.js','utf8');
 assert.match(targets,/enableCrossPageActions/);
 assert.match(targets,/applySearchTarget/);
 assert.match(targets,/universia:load-case/);
 const css=readFileSync('c1-navigation.css','utf8');
 assert.match(css,/overflow-x:auto!important/);
 assert.match(css,/flex-wrap:nowrap!important/);
});
