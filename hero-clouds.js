/** Interactive atmospheric cloud canvas for the UNIVERS·IA landing hero. */
export function mountHeroClouds() {
 const hero=document.querySelector('.hero');
 if(!hero||hero.querySelector('.universia-clouds'))return;
 const canvas=document.createElement('canvas');
 canvas.className='universia-clouds';canvas.setAttribute('aria-hidden','true');hero.prepend(canvas);
 const ctx=canvas.getContext('2d',{alpha:true});if(!ctx)return;
 const reduced=matchMedia('(prefers-reduced-motion: reduce)');
 const clouds=[
 [.77,.17,.36,.23,.17,170,.43,0],
 [.92,.58,.40,.28,.23,204,.40,1.9],
 [.42,.90,.48,.22,.12,178,.27,3],
 [.08,.14,.32,.20,.11,194,.17,2.7],
 [.63,.43,.27,.18,.28,160,.28,4.2]
 ];
 let w=0,h=0,raf=0,visible=true,px=0,py=0,tx=0,ty=0;
 function puff(x,y,rx,ry,hue,a){
   ctx.save();ctx.translate(x,y);ctx.scale(rx,ry);
   const g=ctx.createRadialGradient(0,0,.08,0,0,1);
   g.addColorStop(0,`hsla(${hue},80%,98%,${a})`);
   g.addColorStop(.35,`hsla(${hue},70%,91%,${a*.76})`);
   g.addColorStop(.68,`hsla(${hue},75%,85%,${a*.29})`);
   g.addColorStop(1,`hsla(${hue},75%,85%,0)`);
   ctx.fillStyle=g;ctx.beginPath();ctx.arc(0,0,1,0,Math.PI*2);ctx.fill();ctx.restore();
 }
 function draw(ms){
  if(!w||!h)return;ctx.clearRect(0,0,w,h);
  const t=reduced.matches?0:ms*.00012;
  px+=(tx-px)*.035;py+=(ty-py)*.035;
  for(const [x,y,rx,ry,s,hue,a,phase] of clouds){
   const cx=x*w+Math.sin(t*s*7+phase)*w*.028+px*w*s*.065;
   const cy=y*h+Math.cos(t*s*5+phase)*h*.034+py*h*s*.075;
   const ww=rx*w,hh=ry*h;
   puff(cx,cy,ww,hh,hue,a);
   puff(cx-ww*.34,cy+hh*.13,ww*.64,hh*.8,hue+7,a*.72);
   puff(cx+ww*.28,cy-hh*.14,ww*.74,hh*.89,hue-8,a*.68);
   puff(cx-ww*.03,cy-hh*.30,ww*.61,hh*.73,hue,a*.45);
  }
 }
 function loop(t){if(!visible||reduced.matches){raf=0;return}draw(t);raf=requestAnimationFrame(loop)}
 function start(){if(visible&&!reduced.matches&&!raf)raf=requestAnimationFrame(loop);else draw(performance.now())}
 function resize(){const r=hero.getBoundingClientRect();w=r.width;h=r.height;const d=Math.min(devicePixelRatio||1,1.5);canvas.width=Math.round(w*d);canvas.height=Math.round(h*d);ctx.setTransform(d,0,0,d,0,0);draw(performance.now())}
 hero.addEventListener('pointermove',e=>{const r=hero.getBoundingClientRect();tx=((e.clientX-r.left)/r.width-.5)*2;ty=((e.clientY-r.top)/r.height-.5)*2},{passive:true});
 hero.addEventListener('pointerleave',()=>{tx=ty=0});
 new IntersectionObserver(([entry])=>{visible=entry.isIntersecting;if(visible)start();else{cancelAnimationFrame(raf);raf=0}}).observe(hero);
 new ResizeObserver(resize).observe(hero);
 reduced.addEventListener?.('change',()=>{cancelAnimationFrame(raf);raf=0;start()});
 resize();start();
}
