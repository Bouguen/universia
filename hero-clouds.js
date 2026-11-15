/** UNIVERS·IA atmospheric clouds: GPU ray-marched noise, with a canvas fallback. */
export function mountHeroClouds() {
  const hero = document.querySelector('.hero');
  if (!hero || hero.querySelector('.universia-clouds')) return;
  const canvas = document.createElement('canvas');
  canvas.className = 'universia-clouds';
  canvas.setAttribute('aria-hidden', 'true');
  hero.prepend(canvas);

  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)');
  let gl = null, program = null, uniforms = null, ctx2d = null;
  let raf = 0, width = 0, height = 0, visible = true;
  let targetX = 0, targetY = 0, mouseX = 0, mouseY = 0;
  let elapsed = 0, lastFrame = 0;
  const vertex = `attribute vec2 aPosition;
    varying vec2 vUv;
    void main(){vUv=aPosition*.5+.5;gl_Position=vec4(aPosition,0.,1.);}`;
  const fragment = `precision highp float;
    varying vec2 vUv;
    uniform vec2 uResolution;
    uniform vec2 uPointer;
    uniform float uTime;
    float hash(vec3 p){
      p=fract(p*.1031);p+=dot(p,p.yzx+33.33);
      return fract((p.x+p.y)*p.z);
    }
    float noise(vec3 p){
      vec3 i=floor(p), f=fract(p);
      f=f*f*(3.-2.*f);
      return mix(mix(mix(hash(i),hash(i+vec3(1,0,0)),f.x),
                     mix(hash(i+vec3(0,1,0)),hash(i+vec3(1,1,0)),f.x),f.y),
                 mix(mix(hash(i+vec3(0,0,1)),hash(i+vec3(1,0,1)),f.x),
                     mix(hash(i+vec3(0,1,1)),hash(i+vec3(1,1,1)),f.x),f.y),f.z);
    }
    float fbm(vec3 p){
      float v=0., a=.5;
      for(int i=0;i<4;i++){v+=noise(p)*a;p=p*2.06+vec3(2.7,4.3,1.8);a*=.5;}
      return v;
    }
    float cloudShape(vec2 p, vec2 c, vec2 r){
      vec2 q=(p-c)/r;
      return exp(-dot(q,q)*1.9);
    }
    void main(){
      vec2 uv=vUv;
      vec2 p=(uv-.5)*vec2(uResolution.x/max(uResolution.y,1.),1.);
      vec2 pointer=uPointer*.105;
      float t=uTime*.037;
      vec3 accum=vec3(0.);
      float alpha=0.;
      // Seven slices create depth, occlusion and pointer-driven parallax.
      for(int i=0;i<7;i++){
        float layer=float(i)/6.;
        vec2 drift=vec2(t*(.20+layer*.4),sin(t*.7+layer*5.)*.045);
        vec2 q=p+pointer*(.28+layer*1.45)+drift;
        float n=fbm(vec3(q*vec2(2.1,3.0)+layer*2.4,t*.53+layer*3.2));
        float shape=cloudShape(q,vec2(.52,.07),vec2(.95,.39))
                   +cloudShape(q,vec2(-.05,-.34),vec2(1.13,.32))
                   +cloudShape(q,vec2(1.0,-.4),vec2(.7,.45));
        float d=smoothstep(.37,.73,n*.7+shape*.48-.10);
        d*=.12+.12*layer;
        vec3 blue=vec3(.36,.76,.91);
        vec3 mint=vec3(.34,.88,.79);
        vec3 white=vec3(.93,.99,.99);
        vec3 col=mix(blue,mint,smoothstep(-.6,.8,q.x));
        col=mix(col,white,.30+.35*n+.17*layer);
        accum+=(1.-alpha)*d*col;
        alpha+=(1.-alpha)*d;
      }
      // Soft luminous atmosphere behind the cloud mass.
      float aura=exp(-length((p-vec2(.45,.0))*vec2(.6,1.1))*.96);
      vec3 base=mix(vec3(.78,.94,.94),vec3(.70,.85,.97),smoothstep(-.8,1.0,p.x));
      vec3 color=mix(base,vec3(.89,1.,.97),aura*.33);
      color=mix(color,accum/max(alpha,.001),clamp(alpha*1.5,0.,.88));
      color+=vec3(.018,.032,.026)*sin(p.x*1.7+t)*aura;
      gl_FragColor=vec4(clamp(color,0.,1.),1.);
    }`;

  function compile(type, source) {
    const shader = gl.createShader(type);
    gl.shaderSource(shader, source);
    gl.compileShader(shader);
    if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
      console.warn('UNIVERS·IA cloud shader:', gl.getShaderInfoLog(shader));
      gl.deleteShader(shader);
      return null;
    }
    return shader;
  }
  function initWebGL() {
    try {
      gl = canvas.getContext('webgl', {alpha:false, antialias:false, depth:false, stencil:false, powerPreference:'low-power'});
      if (!gl) return false;
      const vs=compile(gl.VERTEX_SHADER,vertex), fs=compile(gl.FRAGMENT_SHADER,fragment);
      if(!vs||!fs) return false;
      program=gl.createProgram();
      gl.attachShader(program,vs);gl.attachShader(program,fs);gl.linkProgram(program);
      gl.deleteShader(vs);gl.deleteShader(fs);
      if(!gl.getProgramParameter(program,gl.LINK_STATUS))return false;
      gl.useProgram(program);
      const buffer=gl.createBuffer();
      gl.bindBuffer(gl.ARRAY_BUFFER,buffer);
      gl.bufferData(gl.ARRAY_BUFFER,new Float32Array([-1,-1,1,-1,-1,1,-1,1,1,-1,1,1]),gl.STATIC_DRAW);
      const attr=gl.getAttribLocation(program,'aPosition');
      gl.enableVertexAttribArray(attr);gl.vertexAttribPointer(attr,2,gl.FLOAT,false,0,0);
      uniforms={resolution:gl.getUniformLocation(program,'uResolution'),pointer:gl.getUniformLocation(program,'uPointer'),time:gl.getUniformLocation(program,'uTime')};
      return true;
    } catch (err) {console.warn('UNIVERS·IA cloud WebGL fallback:',err);return false;}
  }
  const gpu = initWebGL();
  if (!gpu) {
    // WebGL unavailable: retain a distinctive visible atmosphere on Canvas 2D.
    const fallback = document.createElement('canvas');
    fallback.className='universia-clouds universia-clouds-fallback';
    fallback.setAttribute('aria-hidden','true');
    hero.replaceChild(fallback,canvas);
    ctx2d=fallback.getContext('2d');
    if (!ctx2d) return;
    canvas.width=0;
    function drawFallback() {
      const r=hero.getBoundingClientRect(), w=r.width, h=r.height;
      if (!w || !h) return;
      const d=Math.min(window.devicePixelRatio||1,1.5);
      fallback.width=Math.round(w*d);fallback.height=Math.round(h*d);
      ctx2d.setTransform(d,0,0,d,0,0);
      const bg=ctx2d.createLinearGradient(0,0,w,h);
      bg.addColorStop(0,'#def9f1');bg.addColorStop(1,'#accfe9');
      ctx2d.fillStyle=bg;ctx2d.fillRect(0,0,w,h);
      [[.78,.26,.48,.37],[.48,.72,.55,.31],[.94,.82,.43,.39],[.20,.32,.40,.34]].forEach(([x,y,rx,ry],i)=>{
        const g=ctx2d.createRadialGradient(x*w,y*h,0,x*w,y*h,rx*w);
        g.addColorStop(0,i%2?'rgba(66,201,188,.47)':'rgba(75,165,219,.48)');
        g.addColorStop(.6,'rgba(240,255,255,.22)');g.addColorStop(1,'rgba(255,255,255,0)');
        ctx2d.save();ctx2d.translate(x*w,y*h);ctx2d.scale(1,ry*h/(rx*w));
        ctx2d.fillStyle=g;ctx2d.beginPath();ctx2d.arc(0,0,rx*w,0,Math.PI*2);ctx2d.fill();ctx2d.restore();
      });
    }
    new ResizeObserver(drawFallback).observe(hero);
    drawFallback();
    return;
  }
  function resize() {
    const rect=hero.getBoundingClientRect();
    width=Math.round(rect.width);height=Math.round(rect.height);
    if(width<1||height<1)return;
    const d=Math.min(window.devicePixelRatio||1,1.35);
    const quality=window.innerWidth<760?.65:.85;
    canvas.width=Math.max(1,Math.round(width*d*quality));
    canvas.height=Math.max(1,Math.round(height*d*quality));
    gl.viewport(0,0,canvas.width,canvas.height);
    render();
  }
  function render() {
    if(!gl||!width||!height)return;
    mouseX+=(targetX-mouseX)*.048;mouseY+=(targetY-mouseY)*.048;
    gl.useProgram(program);
    gl.uniform2f(uniforms.resolution,width,height);
    gl.uniform2f(uniforms.pointer,mouseX,mouseY);
    gl.uniform1f(uniforms.time,elapsed);
    gl.drawArrays(gl.TRIANGLES,0,6);
  }
  function frame(timestamp) {
    raf=0;
    if(!visible||reduced.matches||document.hidden)return;
    if(lastFrame)elapsed+=Math.min(timestamp-lastFrame,50)*.001;
    lastFrame=timestamp;
    render();
    raf=requestAnimationFrame(frame);
  }
  function start() {
    if(!visible||document.hidden)return;
    lastFrame=0;
    render();
    if(!reduced.matches&&!raf)raf=requestAnimationFrame(frame);
  }
  function stop(){cancelAnimationFrame(raf);raf=0;lastFrame=0;}
  hero.addEventListener('pointermove',event=>{
    const r=hero.getBoundingClientRect();
    targetX=((event.clientX-r.left)/r.width-.5)*2;
    targetY=((event.clientY-r.top)/r.height-.5)*2;
  },{passive:true});
  hero.addEventListener('pointerleave',()=>{targetX=targetY=0;});
  document.addEventListener('visibilitychange',()=>document.hidden?stop():start());
  new IntersectionObserver(([entry])=>{visible=entry.isIntersecting;visible?start():stop();}).observe(hero);
  new ResizeObserver(resize).observe(hero);
  reduced.addEventListener?.('change',()=>{stop();start();});
  canvas.addEventListener('webglcontextlost',e=>{e.preventDefault();stop();});
  resize();start();
}
