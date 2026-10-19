import test from 'node:test';
import assert from 'node:assert/strict';
import {portalIndex,portalTypes,searchPortal} from './portal-search.js';
import {academicReferences,disciplinaryExamples,relatedReferences} from './lot-b-enrichment.js';
import {libraryEntries} from './lot-b-data.js';
test('index transversale et toutes les catégories',()=>{assert.ok(portalIndex.length>=85);assert.equal(new Set(portalIndex.map(x=>x.id)).size,portalIndex.length);for(const t of ['Ressources','Bibliothèque','Prompts','Générateurs','Formations','Cas pratiques'])assert.ok(portalTypes.includes(t));});
test('recherche accents et filtres',()=>{assert.ok(searchPortal({query:'évaluation'}).length>0);assert.ok(searchPortal({query:'evaluation'}).length>0);assert.ok(searchPortal({query:'revue',type:'Bibliothèque'}).every(x=>x.type==='Bibliothèque'));assert.equal(searchPortal({query:'motquinesetrouvejamais1234'}).length,0);});
test('exemples disciplinaires complets et distincts',()=>{assert.equal(disciplinaryExamples.length,12);for(const e of disciplinaryExamples){assert.ok(libraryEntries.some(x=>x.id===e.id));assert.ok(e.context&&e.activity&&e.output);}});
test('références explicites et reliées seulement aux fiches existantes',()=>{assert.equal(academicReferences.length,5);for(const r of academicReferences){assert.ok(r.url.startsWith('https://'));assert.ok(r.title&&r.kind&&r.scope);}for(const [id,ids] of Object.entries(relatedReferences)){assert.ok(libraryEntries.some(x=>x.id===id));for(const i of ids)assert.ok(academicReferences.some(x=>x.id===i));}});
