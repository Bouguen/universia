import test from 'node:test';
import assert from 'node:assert/strict';
import {readFileSync,existsSync} from 'node:fs';
import {sections,pageUrl,currentPage,destinationForHash} from './multi-routes.js';
test('neuf pages distinctes, sans doublons et fichiers réels',()=>{
 assert.equal(sections.length,9);
 assert.equal(new Set(sections.map(x=>x.id)).size,sections.length);
 assert.equal(new Set(sections.map(x=>x.slug)).size,sections.length);
 for(const page of sections){assert.ok(page.name&&page.description);const path=page.slug?page.slug+'/index.html':'index.html';assert.ok(existsSync(path),path);}
});
test('routes portables et correspondance des sections',()=>{
 assert.equal(currentPage('/universia/bibliotheque/'),'bibliotheque');
 assert.equal(currentPage('/bibliotheque/index.html'),'bibliotheque');
 assert.equal(currentPage('/universia/'),'accueil');
 assert.equal(currentPage('/cas-pratiques/'),'cas');
 assert.ok(pageUrl('accueil').endsWith('/'));
 assert.match(destinationForHash('#studio'),/outils\/#studio$/);
 assert.match(destinationForHash('#promptotheque'),/prompts\/#promptotheque$/);
 assert.match(destinationForHash('#formations-approfondies'),/formations\/#formations-approfondies$/);
});
test('homepage allégée, retour et CSS dédié',()=>{
 const src=readFileSync('src.js','utf8');
 const css=readFileSync('multi-page.css','utf8');
 assert.ok(src.includes('applyMultipage()'));
 assert.ok(src.includes('mountConstellation()'));
 assert.ok(css.includes('data-page="accueil"'));
 const router=readFileSync('multi-page.js','utf8');
 for(const id of ['accueil','bibliotheque','ressources','recherche','outils','prompts','formations','cas','integrite'])assert.ok(router.includes(id));
});
