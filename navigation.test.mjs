import test from 'node:test';
import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';
import {navigationItems,navigationMarkup,initNavigation} from './navigation.js';

test('les ancres du menu sont uniques et correspondent à des sections existantes',()=>{
  const anchors=navigationItems.map(item=>item.href);
  assert.equal(anchors.length,new Set(anchors).size);
  for(const anchor of anchors){
    const id=anchor.slice(1);
    assert.match(id,/^[a-z][a-z0-9-]*$/);
    const sources=['src.js','v1-ui.js','v11-ui.js','v12-ui.js'].map(path=>readFileSync(path,'utf8'));
    assert.ok(sources.some(src=>src.includes('id="'+id+'"')), 'Section manquante : '+id);
  }
});
test('le menu propose un bouton accessible associé aux liens',()=>{
  const markup=navigationMarkup();
  assert.match(markup,/aria-controls="site-nav"/);
  assert.match(markup,/aria-expanded="false"/);
  assert.match(markup,/aria-label="Ouvrir le menu"/);
  assert.equal((markup.match(/<a href=/g)||[]).length,navigationItems.length);
});
test('le menu s’ouvre, se ferme et restitue le focus après Échap',()=>{
  const handlers={};
  const docHandlers={};
  const classes=new Set();
  const button={attrs:{},focusCount:0,addEventListener:(type,fn)=>handlers['btn:'+type]=fn,
    setAttribute(k,v){this.attrs[k]=v;},focus(){this.focusCount++;},contains:()=>false};
  const nav={classList:{toggle(k,on){if(on)classes.add(k);else classes.delete(k);}},
    addEventListener:(type,fn)=>handlers['nav:'+type]=fn,contains:()=>false};
  const doc={querySelector:s=>s==='#menu-toggle'?button:s==='#site-nav'?nav:null,
    addEventListener:(type,fn)=>docHandlers[type]=fn};
  initNavigation(doc);
  handlers['btn:click']();
  assert.equal(button.attrs['aria-expanded'],'true');
  assert.ok(classes.has('is-open'));
  docHandlers.keydown({key:'Escape'});
  assert.equal(button.attrs['aria-expanded'],'false');
  assert.equal(button.focusCount,1);
  handlers['btn:click']();
  handlers['nav:click']({target:{closest:s=>s==='a'?{}:null}});
  assert.equal(button.attrs['aria-expanded'],'false');
});
test('accessibilité : focus, annonces limitées et mouvements réduits',()=>{
  const ui=readFileSync('v12-ui.js','utf8');
  const css=readFileSync('v12.css','utf8');
  const src=readFileSync('src.js','utf8');
  assert.match(src,/initNavigation\(document\)/);
  assert.ok(!ui.includes('id="u12-result" tabindex="0" aria-live="polite"'));
  assert.match(ui,/h3 tabindex="-1"/);
  assert.match(ui,/sel\('#u12-lesson h3'\)\?\.focus\(\)/);
  assert.match(css,/prefers-reduced-motion:reduce/);
  assert.match(css,/\.links\.is-open\{display:grid;/);
});
