// Navigation partagée par ordinateur, tablette et mobile.
export const navigationItems = [
  {href:'#parcours',label:'Parcours'},
  {href:'#ressources',label:'Ressources'},
  {href:'#bibliotheque',label:'Bibliothèque'},
  {href:'#outils',label:'Générateurs'},
  {href:'#studio',label:'Studio académique'},
  {href:'#cas-academiques',label:'Cas pratiques'},
  {href:'#formations-approfondies',label:'Formations'},
  {href:'#modules',label:'Ateliers'},
  {href:'#promptotheque',label:'Promptothèque',mobileOnly:true},
  {href:'#atelier',label:'Atelier initial',mobileOnly:true},
  {href:'#formations',label:'Parcours initiaux',mobileOnly:true},
];
export function navigationMarkup(){
  const links=navigationItems.map(({href,label,mobileOnly})=>
    `<a href="${href}"${mobileOnly?' class="nav-mobile-only"':''}>${label}</a>`).join('');
  return `<button type="button" class="menu-toggle" id="menu-toggle" aria-controls="site-nav" aria-expanded="false" aria-label="Ouvrir le menu"><span class="menu-toggle-icon" aria-hidden="true">☰</span><span>Menu</span></button><nav id="site-nav" class="links" aria-label="Navigation principale">${links}</nav>`;
}
export function initNavigation(doc=document){
  const button=doc.querySelector('#menu-toggle');
  const nav=doc.querySelector('#site-nav');
  if(!button||!nav)return;
  let open=false;
  const setOpen=(value)=>{
    open=Boolean(value);
    button.setAttribute('aria-expanded',String(open));
    button.setAttribute('aria-label',open?'Fermer le menu':'Ouvrir le menu');
    nav.classList.toggle('is-open',open);
  };
  button.addEventListener('click',()=>setOpen(!open));
  nav.addEventListener('click',event=>{
    if(event.target.closest('a'))setOpen(false);
  });
  doc.addEventListener('keydown',event=>{
    if(event.key==='Escape'&&open){setOpen(false);button.focus();}
  });
  doc.addEventListener('click',event=>{
    if(open&&!nav.contains(event.target)&&!button.contains(event.target))setOpen(false);
  });
  if(typeof window!=='undefined'){
    window.addEventListener('resize',()=>{
      if(window.innerWidth>1100&&open)setOpen(false);
    });
  }
}
