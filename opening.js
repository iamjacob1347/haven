// Approved logo texture on a deformable mesh, followed by a smooth silhouette morph.
const doveImage=new Image();doveImage.src='assets/haven-dove.png';
let frameId=0,generation=0,homeTimer;
function openSignup(){
 clearTimeout(homeTimer);cancelAnimationFrame(frameId);generation++;
 const screen=document.getElementById('screen');
 screen.inert=true;screen.setAttribute('aria-hidden','true');
 document.getElementById('signup').hidden=false;
 document.getElementById('home').hidden=true;
 document.querySelector('.phone').classList.add('signup-open');
 document.getElementById('signup-title').focus({preventScroll:true});
}
function openHome(alias){
 document.getElementById('signup-form').reset();
 document.getElementById('signup').hidden=true;
 document.querySelector('.phone').classList.remove('signup-open');
 clearTimeout(homeTimer);cancelAnimationFrame(frameId);generation++;
 const screen=document.getElementById('screen'),home=document.getElementById('home');
 home.hidden=false;screen.inert=true;screen.setAttribute('aria-hidden','true');
 if(window.resetHavenHome)window.resetHavenHome(typeof alias==='string'?alias:undefined);
 document.querySelector('.phone').classList.add('home-open');
 document.getElementById('home-title').focus({preventScroll:true});
}
const clamp=t=>Math.max(0,Math.min(1,t));
const smooth=t=>{t=clamp(t);return t*t*t*(t*(t*6-15)+10)};
const mix=(a,b,t)=>a+(b-a)*t;
function surface(w,h){const c=document.createElement('canvas');c.width=w;c.height=h;return c}
function distanceField(data,n){
 function pass(inside){
  const d=new Float32Array(n*n);
  for(let i=0;i<d.length;i++)d[i]=(data[i*4+3]>100)===inside?0:10000;
  for(let y=0;y<n;y++)for(let x=0;x<n;x++){const i=y*n+x;let v=d[i];if(x)v=Math.min(v,d[i-1]+1);if(y)v=Math.min(v,d[i-n]+1);if(x&&y)v=Math.min(v,d[i-n-1]+1.4142);if(y&&x<n-1)v=Math.min(v,d[i-n+1]+1.4142);d[i]=v}
  for(let y=n-1;y>=0;y--)for(let x=n-1;x>=0;x--){const i=y*n+x;let v=d[i];if(x<n-1)v=Math.min(v,d[i+1]+1);if(y<n-1)v=Math.min(v,d[i+n]+1);if(x<n-1&&y<n-1)v=Math.min(v,d[i+n+1]+1.4142);if(y<n-1&&x)v=Math.min(v,d[i+n-1]+1.4142);d[i]=v}
  return d;
 }
 const a=pass(true),b=pass(false);for(let i=0;i<a.length;i++)a[i]=b[i]-a[i];return a;
}
function triangle(ctx,img,s,d){
 const [p,q,r]=s,[a,b,c]=d,u=q.x-p.x,v=q.y-p.y,k=r.x-p.x,l=r.y-p.y,det=u*l-k*v;
 const A=((b.x-a.x)*l-(c.x-a.x)*v)/det,B=((b.y-a.y)*l-(c.y-a.y)*v)/det;
 const C=((c.x-a.x)*u-(b.x-a.x)*k)/det,D=((c.y-a.y)*u-(b.y-a.y)*k)/det;
 ctx.save();ctx.beginPath();const cx=(a.x+b.x+c.x)/3,cy=(a.y+b.y+c.y)/3;
 d.forEach((p,i)=>{const dx=p.x-cx,dy=p.y-cy,len=Math.hypot(dx,dy)||1;ctx[i?'lineTo':'moveTo'](p.x+dx/len*.28,p.y+dy/len*.28)});
 ctx.closePath();ctx.clip();ctx.transform(A,B,C,D,a.x-A*p.x-C*p.y,a.y-B*p.x-D*p.y);ctx.drawImage(img,0,0);ctx.restore();
}
async function begin(){
 const run=++generation;cancelAnimationFrame(frameId);clearTimeout(homeTimer);
 try{await doveImage.decode()}catch{document.querySelector('.hint').textContent='The bird could not load. Please refresh to retry.';return}
 if(run!==generation)return;
 const screen=document.getElementById('screen'),canvas=screen.querySelector('canvas'),w=screen.clientWidth,h=screen.clientHeight;
 const ratio=Math.min(devicePixelRatio||1,2);canvas.width=w*ratio;canvas.height=h*ratio;const ctx=canvas.getContext('2d');ctx.scale(ratio,ratio);
 const n=240,size=Math.min(152,w*.42),scale=size/n,font=Math.min(70,w*.19),mid=h*.43;
 const bird=surface(n,n),bc=bird.getContext('2d'),fit=Math.min(n/doveImage.width,n/doveImage.height);
 bc.drawImage(doveImage,(n-doveImage.width*fit)/2,(n-doveImage.height*fit)/2,doveImage.width*fit,doveImage.height*fit);
 const texture=bc.getImageData(0,0,n,n).data;
 ctx.font='bold '+font+'px Georgia';
 const chars=[...'Haven'],widths=chars.map(c=>ctx.measureText(c).width),total=widths.reduce((a,b)=>a+b,0);
 let cursor=(w-total)/2;const centers=widths.map(v=>{const c=cursor+v/2;cursor+=v;return c});
 const target=surface(n,n),tc=target.getContext('2d');tc.font='bold '+font/scale+'px Georgia';tc.textAlign='center';tc.textBaseline='middle';tc.fillStyle='white';tc.fillText('H',n/2,n/2);
 const targetPixels=tc.getImageData(0,0,n,n).data,sourceSDF=distanceField(texture,n),targetSDF=distanceField(targetPixels,n);
 const morph=surface(n,n),mc=morph.getContext('2d'),output=mc.createImageData(n,n);
 const colors=Array.from({length:n},(_,y)=>{const t=y/n,shine=Math.exp(-Math.pow((t-.44)/.045,2));return [Math.min(255,225-110*t+55*shine),Math.min(255,185-135*t+70*shine),Math.min(255,255-45*t+20*shine)]});
 function drawMorph(p,x){
  for(let i=0;i<n*n;i++){const k=i*4,col=colors[Math.floor(i/n)],alpha=clamp(mix(sourceSDF[i],targetSDF[i],p)+.5);for(let j=0;j<3;j++)output.data[k+j]=mix(texture[k+3]>30?texture[k+j]:col[j],col[j],p);output.data[k+3]=255*alpha}
  mc.putImageData(output,0,0);ctx.drawImage(morph,x-size/2,mid-size/2,size,size);
 }
 function drawBird(t,x,y){
  // A stronger downstroke and softer recovery, with delayed flex at the feather tips.
  const amplitude=1-smooth((t-1.9)/.65),phase=t*2*Math.PI/.78;
  function vertex(u,v){
   const weight=smooth((.73-u)/.28)*smooth((.8-v)/.3);
   const beat=Math.pow((1-Math.cos(phase+.3*(1-u)))*.5,.72),flex=weight*amplitude*beat;
   return{x:x+(u-.5)*size+flex*size*.14,y:y+(v-.5)*size+flex*(.76-v)*size*.86};
  }
  const steps=18;
  for(let y=0;y<steps;y++)for(let x=0;x<steps;x++){
   const uv=[[x,y],[x+1,y],[x+1,y+1],[x,y+1]].map(([a,b])=>[a/steps,b/steps]),s=uv.map(([u,v])=>({x:u*n,y:v*n})),d=uv.map(([u,v])=>vertex(u,v));
   triangle(ctx,bird,[s[0],s[1],s[2]],[d[0],d[1],d[2]]);triangle(ctx,bird,[s[0],s[2],s[3]],[d[0],d[2],d[3]]);
  }
 }
 function glyph(i,x,y,progress=1){
  ctx.save();ctx.translate(x,y);ctx.scale(Math.max(.015,progress),1);ctx.font='bold '+font+'px Georgia';ctx.textAlign='center';ctx.textBaseline='middle';
  const grad=ctx.createLinearGradient(0,-font*.5,0,font*.5);grad.addColorStop(0,'#eed9ff');grad.addColorStop(.38,'#ca97ef');grad.addColorStop(.47,'#f2deff');grad.addColorStop(.57,'#a765df');grad.addColorStop(1,'#6d329e');ctx.fillStyle=grad;ctx.shadowColor='#32105c';ctx.shadowBlur=8;ctx.fillText(chars[i],0,0);ctx.restore();
 }
 const stars=Array.from({length:56},(_,i)=>({x:((i*137.508)%360)/360*w,y:((i*83.17+37)%800)/800*h,r:i%13===0?1.05:.55,phase:i*1.71}));
 const reduced=matchMedia('(prefers-reduced-motion: reduce)').matches;screen.classList.add('ready');let start;
 homeTimer=setTimeout(()=>{if(run===generation)openSignup()},reduced?500:5500);
 const stopX=w*.5;
 function aura(t,x,y){
  const fade=smooth(t/.45)*(1-smooth((t-1.75)/1.1));if(fade<=0)return;
  ctx.save();ctx.globalCompositeOperation='screen';
  const radius=70+smooth(t/.8)*30,glow=ctx.createRadialGradient(x,y,0,x,y,radius);
  glow.addColorStop(0,'rgba(213,147,255,'+fade*.22+')');glow.addColorStop(.45,'rgba(143,55,247,'+fade*.1+')');glow.addColorStop(1,'rgba(110,30,224,0)');ctx.fillStyle=glow;ctx.fillRect(x-radius,y-radius,radius*2,radius*2);
  ctx.restore();
 }
 function draw(now){
  if(run!==generation)return;if(start===undefined)start=now;
  const t=reduced?10:(now-start)/1000*1.65;ctx.clearRect(0,0,w,h);
  for(const s of stars){ctx.globalAlpha=.2+.3*(.5+.5*Math.sin(t*.5+s.phase));ctx.fillStyle='#eee0ff';ctx.beginPath();ctx.arc(s.x,s.y,s.r,0,Math.PI*2);ctx.fill()}ctx.globalAlpha=1;
  if(!reduced)aura(t,stopX,mid);
  if(t<1.6){const pop=smooth(t/.75);ctx.save();ctx.globalAlpha=smooth(t/.3);ctx.translate(stopX,mid);ctx.scale(mix(.55,1,pop),mix(.55,1,pop));ctx.translate(-stopX,-mid);drawBird(t+1,stopX,mid);ctx.restore()}
  else{
   const morphProgress=smooth((t-1.6)/1.25),shift=smooth((t-2.85)/1.8),x=mix(stopX,centers[0],shift);
   if(morphProgress<1)drawMorph(morphProgress,x);else glyph(0,x,mid);
   for(let i=1;i<chars.length;i++){const local=(t-(2.82+(i-1)*.5))/.72;if(local<=0)continue;const unfold=smooth(local),offset=x-centers[0],origin=centers[i-1]+widths[i-1]*.36;glyph(i,mix(origin,centers[i],unfold)+offset,mid,unfold)}
  }
  if(!reduced&&t<12)frameId=requestAnimationFrame(draw);
 }
 frameId=requestAnimationFrame(draw);
}
function replay(){document.getElementById('signup').hidden=true;document.getElementById('signup-form').reset();document.querySelector('.phone').classList.remove('signup-open');clearTimeout(homeTimer);document.querySelector('.phone').classList.remove('home-open');document.getElementById('home').hidden=true;const s=document.getElementById('screen'),c=s.cloneNode(true);c.classList.remove('ready');c.inert=false;c.removeAttribute('aria-hidden');s.replaceWith(c);begin()}
let resizeTimer;window.addEventListener('resize',()=>{clearTimeout(resizeTimer);if(!document.querySelector('.phone').classList.contains('home-open')&&!document.querySelector('.phone').classList.contains('signup-open'))resizeTimer=setTimeout(replay,180)});
begin();
