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
  for(const selector of ['#studio','#menu-toggle','#site-nav','#u12-course-tabs','#u12-result']){
    assert.equal(await page.locator(selector).count(),1,name+': élément manquant '+selector);
  }
  if(name==='mobile'){
    await page.locator('#menu-toggle').click();
    assert.equal(await page.locator('#menu-toggle').getAttribute('aria-expanded'),'true');
    await page.screenshot({path:'screenshots/universia-mobile-menu.png',fullPage:false});
    const menu=await page.locator('#site-nav').boundingBox();
    assert.ok(menu,name+': le menu devrait être visible');
    assert.ok(menu.height<560,name+': menu trop haut '+menu.height);
    assert.ok(menu.width<=width,name+': menu déborde horizontalement');
    const first=await page.locator('#site-nav a').nth(0).boundingBox();
    const second=await page.locator('#site-nav a').nth(1).boundingBox();
    assert.ok(first&&second&&second.y-first.y<80,name+': espacement excessif entre les liens');
    await page.keyboard.press('Escape');
    assert.equal(await page.locator('#menu-toggle').getAttribute('aria-expanded'),'false');
  }
  await page.close();
 }
}finally{await browser.close();}
