// Browser smoke test for a built Vite preview (Chrome installed on GitHub runners).
import {execFileSync} from 'node:child_process';
import {mkdirSync} from 'node:fs';
import assert from 'node:assert/strict';
const browser=process.env.CHROME_BIN || 'google-chrome';
const url=process.env.UI_URL || 'http://127.0.0.1:4173/';
const dir='screenshots';
mkdirSync(dir,{recursive:true});
for(const [name,width,height] of [['desktop',1440,900],['mobile',390,844]]){
  const opts=['--headless=new','--no-sandbox','--disable-dev-shm-usage','--disable-gpu','--hide-scrollbars','--virtual-time-budget=5000',`--window-size=${width},${height}`];
  const html=execFileSync(browser,[...opts,'--dump-dom',url],{encoding:'utf8',timeout:45000,maxBuffer:6*1024*1024,stdio:['ignore','pipe','pipe']});
  for(const marker of ['id="main"','id="studio"','id="menu-toggle"','id="site-nav"','id="u12-course-tabs"','id="u12-result"']){
    assert.ok(html.includes(marker),`${name}: élément absent dans le rendu navigateur: ${marker}. Document: ${html.slice(0,1800)}`);
  }
  assert.ok(html.includes('UNIVERS'),`${name}: contenu du site absent`);
  execFileSync(browser,[...opts,`--screenshot=${dir}/universia-${name}.png`,url],{timeout:45000,stdio:'ignore'});
  console.log(`Rendu navigateur ${name} : OK — ${width}×${height}`);
}
