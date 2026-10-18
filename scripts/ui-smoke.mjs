import {chromium} from 'playwright-core';
import {mkdirSync} from 'node:fs';
import assert from 'node:assert/strict';
mkdirSync('screenshots',{recursive:true});
const browser=await chromium.launch({executablePath:process.env.CHROME_BIN||'/usr/bin/google-chrome',headless:true,args:['--no-sandbox']});
try{
 for(const [name,width,height] of [['desktop',1440,900],['mobile',390,844]]){
  const page=await browser.newPage({viewport:{width,height}});
  const errors=[];
  page.on('pageerror',err=>errors.push(err.stack||err.message));
  page.on('console',msg=>{if(msg.type()==='error')errors.push('Console: '+msg.text())});
  page.on('requestfailed',request=>errors.push('Request failed: '+request.url()+' '+request.failure()?.errorText));
  await page.goto(process.env.UI_URL||'http://127.0.0.1:4173/',{waitUntil:'networkidle'});
  await page.screenshot({path:'screenshots/universia-'+name+'.png',fullPage:false});
  const main=await page.locator('#main').count();
  console.log(name, 'main',main,'errors',errors,'title',await page.title());
  assert.equal(main,1,name+': contenu principal absent ; erreurs: '+errors.join(' | '));
  for(const selector of ['#studio','#bibliotheque','#lotb-search','#lotb-results','#site-nav','#u12-course-tabs','#u12-result']){
    assert.equal(await page.locator(selector).count(),1,name+': élément manquant '+selector);
  }
  assert.equal(await page.locator('#menu-toggle').count(),0,'Le menu déroulant doit être supprimé');
  const nav=page.locator('#site-nav');
  assert.ok(await nav.isVisible(),'La bannière doit rester visible');
  for(const link of await nav.locator('a').all()){assert.ok(await link.isVisible(),'Tous les liens de la bannière doivent rester visibles');}
  const horizontalOverflow=await page.evaluate(()=>document.documentElement.scrollWidth>window.innerWidth+2);
  assert.equal(horizontalOverflow,false,'Pas de débordement horizontal');
  const card=page.locator('.resourcegrid .res').first();
  await card.locator('summary').click();
  assert.ok(await card.locator('.res-action').isVisible(),'Les fiches de ressources doivent être cliquables');
  await page.close();
 }
}finally{await browser.close();}
