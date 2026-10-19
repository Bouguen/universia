import {chromium} from 'playwright-core';
import {mkdirSync} from 'node:fs';
import assert from 'node:assert/strict';
mkdirSync('screenshots',{recursive:true});
const browser=await chromium.launch({executablePath:process.env.CHROME_BIN||'/usr/bin/google-chrome',headless:true,args:['--no-sandbox']});
const base=(process.env.UI_URL||'http://127.0.0.1:4173/').replace(/\/?$/,'/');
const checks=[
 ['accueil','', ['#accueil','#constellation','#parcours'],['#bibliotheque','#studio','#recherche-globale']],
 ['bibliotheque','bibliotheque/',['#bibliotheque','#lotb-search','#lotb-results'],['#constellation','#atelier']],
 ['ressources','ressources/',['#ressources','.resourcegrid'],['#constellation','#studio']],
 ['recherche','recherche/',['#recherche-globale','#portal-query','#portal-results'],['#constellation','#ressources']],
 ['outils','outils/',['#outils','#studio','#v1-create','#u12-compose'],['#promptotheque','#formations']],
 ['prompts','prompts/',['#atelier','#promptotheque','#generate','#v1-catalog'],['#studio','#formations']],
 ['formations','formations/',['#formations','#modules','#formations-approfondies'],['#studio','#atelier']],
 ['cas','cas-pratiques/',['#cas-academiques','#u12-cases'],['#studio','#formations-approfondies']],
 ['integrite','integrite/',['#reperes','.sources'],['#studio','#atelier']]
];
try{
 for(const [name,slug,present,absent] of checks){
  const page=await browser.newPage({viewport:{width:1440,height:900}});
  const errors=[];page.on('pageerror',err=>errors.push(err.message));
  const response=await page.goto(base+slug,{waitUntil:'networkidle'});
  assert.equal(response?.status(),200,name+': mauvaise réponse HTTP');
  await page.locator('#main').waitFor();
  assert.equal(errors.length,0,name+': erreurs Javascript '+errors.join('; '));
  for(const selector of present)assert.equal(await page.locator(selector).count(),1,name+': rubrique absente '+selector);
  for(const selector of absent)assert.equal(await page.locator(selector).count(),0,name+': rubrique non masquée '+selector);
  assert.equal(await page.locator('main h1').count(),1,name+': un seul titre principal requis');
  assert.equal(await page.locator('nav#site-nav').count(),1,name+': une seule bannière de navigation');
  assert.equal(await page.locator('#menu-toggle').count(),0,name+': aucun menu doublon');
  assert.equal(await page.evaluate(()=>document.documentElement.scrollWidth>innerWidth+2),false,name+': débordement horizontal');
  assert.ok((await page.locator('#site-nav a').count())>=8,name+': navigation incomplète');
  assert.ok(await page.locator('#site-nav a[aria-current="page"]').count()===1,name+': page active manquante');
  if(name==='accueil'){
   const order=await page.evaluate(()=>[...document.querySelectorAll('main>section')].map(x=>x.id).filter(Boolean));
   assert.deepEqual(order.slice(0,2),['accueil','parcours'], 'Accueil allégé sans section constellation répétée');
   assert.equal(await page.locator('#accueil #constellation').count(),1,'La constellation est dans le héros');
   assert.equal(await page.locator('.hero-art').count(),0,'Ancienne illustration U supprimée');
   assert.equal(await page.locator('.constellation-node').count(),12);
   const headerRect=await page.locator('.head').boundingBox();
   const eyebrowRect=await page.locator('.hero .eyebrow').boundingBox();
   assert.ok(headerRect&&eyebrowRect&&eyebrowRect.y>=headerRect.y+headerRect.height-2,'La bannière ne doit pas chevaucher le titre');
   const heroTitle=await page.locator('.hero h1').boundingBox();
   const galaxy=await page.locator('#constellation').boundingBox();
   assert.ok(galaxy&&heroTitle&&galaxy.x>heroTitle.x+heroTitle.width/2,'La constellation doit être à droite du titre');
   await page.screenshot({path:'screenshots/universia-accueil-constellation.png',fullPage:false});
   assert.ok((await page.locator('body').evaluate(el=>el.scrollHeight))<3200,'Accueil trop long');
   const shortcut=page.locator('.hero .actions a[href="#constellation"]');assert.equal(await shortcut.count(),1);
   await shortcut.click();assert.equal(new URL(page.url()).hash,'#constellation');
  }
  if(name==='bibliotheque'){
   assert.equal(await page.locator('.lotb-card').count(),24);
   assert.equal((await page.locator('.mp-intro h1').textContent()).trim(),'Bibliothèque universitaire','Un seul titre principal de bibliothèque');
   assert.ok(!(await page.locator('#bibliotheque .sectiontop h2').textContent()).includes('Bibliothèque'),'Ne pas répéter Bibliothèque dans la section');
   assert.equal(await page.getByText('NOUVEAU · LOT B').count(),0,'Ne pas afficher les mentions de développement');
   await page.locator('#lotb-search').fill('entretien');
   assert.ok(await page.locator('.lotb-card').count()>0,'Filtre bibliothèque non fonctionnel');
   await page.goto(base+'bibliotheque/?categorie=Recherche#bibliotheque',{waitUntil:'networkidle'});
   assert.equal(await page.locator('#lotb-category').inputValue(),'Recherche','Le lien direct doit activer le filtre Recherche');
  }
  if(name==='ressources'){
   await page.locator('.resourcegrid .res').first().locator('summary').click();
   assert.ok(await page.locator('.resourcegrid .res').first().locator('.res-action').isVisible());
  }
  if(name==='recherche'){
   await page.locator('#portal-query').fill('revue');
   assert.ok(await page.locator('.portal-result').count()>0);
  }
  await page.screenshot({path:'screenshots/universia-'+name+'.png',fullPage:false});
  console.log(name,': OK');
  await page.close();
 }
 {
  const medium=await browser.newPage({viewport:{width:980,height:900}});
  await medium.goto(base,{waitUntil:'networkidle'});
  const title=await medium.locator('.hero h1').boundingBox();
  const network=await medium.locator('#accueil #constellation').boundingBox();
  assert.ok(title&&network&&network.x>=title.x+title.width-5,'Constellation à droite du titre sur ordinateur de largeur intermédiaire');
  assert.equal(await medium.evaluate(()=>document.documentElement.scrollWidth>innerWidth+2),false,'Aucun débordement horizontal à 980 px');
  await medium.screenshot({path:'screenshots/universia-accueil-980.png',fullPage:false});
  await medium.close();
 }
 for(const [name,slug] of [['accueil',''],['bibliotheque','bibliotheque/'],['outils','outils/'],['formations','formations/']]){
  const page=await browser.newPage({viewport:{width:390,height:844}});
  await page.goto(base+slug,{waitUntil:'networkidle'});
  assert.equal(await page.evaluate(()=>document.documentElement.scrollWidth>innerWidth+2),false,name+' mobile : débordement');
  if(name==='accueil'){
    assert.equal(await page.locator('#accueil #constellation').count(),1,'Constellation visible dans le hero mobile');
    assert.ok(await page.locator('#constellation').isVisible(),'La constellation doit rester visible sur mobile');
  }
  for(const item of await page.locator('#site-nav a').all())assert.ok(await item.isVisible(),name+' mobile : lien caché');
  await page.screenshot({path:'screenshots/universia-mobile-'+name+'.png',fullPage:false});
  await page.close();
 }
}finally{await browser.close();}
