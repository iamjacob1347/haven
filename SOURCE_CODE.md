# Haven — complete source code

Every authored code file is reproduced below. Image assets and identical publication copies are included separately in this ZIP. See README.md for setup and prototype limitations.

## index.html

```html
<!doctype html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <meta name="theme-color" content="#170d3b" />
  <title>Haven — Faith, Help & Community</title>
  <meta name="description" content="Explore the Haven app design: FaithBridge, encouragement, prayer, and community." />
  <link rel="icon" type="image/svg+xml" href="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 64 64'%3E%3Cpath d='M11 34Q32 8 53 34' fill='none' stroke='%23fff' stroke-width='5' stroke-linecap='round'/%3E%3Cpath d='M18 33v19M46 33v19M18 42h28' fill='none' stroke='%23fff' stroke-width='5' stroke-linecap='round'/%3E%3C/svg%3E" />
  <style>
    :root{--ink:#17102d;--violet:#6f46d9;--deep:#24105c;--blue:#4ba6e8;--lilac:#c9a7ff;--paper:#f7f3ff;--gold:#ffd77a}
    *{box-sizing:border-box} body{margin:0;min-height:100vh;display:grid;place-items:center;font-family:Inter,ui-sans-serif,system-ui,-apple-system,sans-serif;color:var(--ink);background:radial-gradient(circle at 18% 18%,#dbc8ff 0,transparent 30%),radial-gradient(circle at 82% 74%,#bfe5ff 0,transparent 34%),#eee9fa;overflow:hidden}
    .page{width:min(1100px,94vw);display:grid;grid-template-columns:1fr 420px;align-items:center;gap:clamp(24px,6vw,80px)}
    .copy small{display:inline-block;padding:7px 11px;border:1px solid rgba(36,16,92,.16);border-radius:999px;background:#ffffff87;font-size:12px;letter-spacing:.14em;text-transform:uppercase}.copy h1{font-family:Georgia,serif;font-size:clamp(48px,7vw,88px);line-height:.95;margin:20px 0 18px;color:var(--deep)}.copy p{max-width:520px;font-size:18px;line-height:1.65;color:#51476c}.replay{border:0;border-radius:999px;padding:13px 20px;background:var(--deep);color:white;font-weight:700;cursor:pointer;box-shadow:0 14px 30px #24105c35}.hint{display:block;margin-top:13px;font-size:12px;color:#756c88}
    .phone{position:relative;width:390px;height:780px;border:10px solid #17131d;border-radius:54px;background:#fbfaff;box-shadow:0 35px 90px #28145c45;overflow:hidden}.island{position:absolute;z-index:20;left:50%;top:11px;transform:translateX(-50%);width:108px;height:28px;border-radius:18px;background:#151219}.status{position:absolute;z-index:15;top:18px;left:26px;right:26px;display:flex;justify-content:space-between;color:white;font-size:12px;font-weight:700}.screen{position:absolute;inset:0;background:radial-gradient(circle at 76% 18%,#7a50dc 0,transparent 35%),radial-gradient(circle at 20% 82%,#327fc9 0,transparent 40%),linear-gradient(145deg,#162d73,#36136f 52%,#7f4dda);overflow:hidden}.screen::before{content:"";position:absolute;inset:-30%;background:conic-gradient(from 180deg,transparent,#a777ff55,transparent,#3bb5ff44,transparent);animation:drift 8s linear infinite}.stars{position:absolute;inset:0;background-image:radial-gradient(#fff 0.8px,transparent 1px);background-size:32px 32px;opacity:.26}
    .stage{position:absolute;inset:0;display:grid;place-items:center}.dove{position:absolute;z-index:4;left:-64%;top:39%;width:72%;aspect-ratio:1.18;animation:fly 6s cubic-bezier(.32,.02,.18,1) forwards;will-change:transform,left,filter,opacity}.dove img{width:100%;height:100%;object-fit:contain;filter:drop-shadow(0 18px 24px #13042f66);animation:wingPulse .8s ease-in-out 4 alternate}.wordmark{position:absolute;z-index:3;top:44%;left:50%;transform:translate(-50%,-50%);width:330px;height:190px;opacity:0;filter:blur(16px);animation:reveal 6s cubic-bezier(.2,.72,.25,1) forwards}.roof{stroke-dasharray:350;stroke-dashoffset:350;animation:drawRoof 6s ease forwards}.letters{font-family:Georgia,'Times New Roman',serif;font-weight:700;font-size:69px;letter-spacing:1px;fill:url(#wordGradient);stroke:#eadcff;stroke-width:.7px;paint-order:stroke fill;filter:drop-shadow(0 8px 12px #17033c99)}.tagline{position:absolute;top:61%;left:50%;transform:translateX(-50%);width:100%;text-align:center;color:#ece4ff;opacity:0;animation:tag 6s ease forwards}.tagline b{display:block;font-family:Georgia,serif;font-size:17px;letter-spacing:.03em}.tagline span{font-size:11px;letter-spacing:.22em;text-transform:uppercase;opacity:.75}.glow{position:absolute;z-index:5;left:50%;top:34%;width:13px;height:13px;transform:translate(-50%,-50%);background:var(--gold);clip-path:polygon(50% 0,61% 37%,100% 50%,61% 63%,50% 100%,39% 63%,0 50%,39% 37%);opacity:0;filter:drop-shadow(0 0 14px #ffe9a6);animation:star 6s ease forwards}.enter{position:absolute;bottom:68px;left:50%;transform:translateX(-50%);width:72%;height:49px;border:1px solid #ffffff55;border-radius:999px;background:#ffffff18;color:white;font-weight:700;backdrop-filter:blur(10px);opacity:0;animation:tag 6s .5s ease forwards;cursor:pointer}.leaf{fill:none;stroke:#bde9d0;stroke-width:3;stroke-linecap:round}.reduce{display:none}
    @keyframes fly{0%{left:-64%;transform:translateY(44px) scale(.72) rotate(-3deg);opacity:0}9%{opacity:1}42%{left:14%;transform:translateY(-14px) scale(.9) rotate(1deg);opacity:1;filter:blur(0)}56%{left:14%;transform:translateY(-14px) scale(.9);opacity:1;filter:blur(0)}69%{left:14%;transform:translateY(-14px) scale(.72);opacity:0;filter:blur(14px) brightness(1.8)}100%{left:14%;transform:translateY(-14px) scale(.68);opacity:0;filter:blur(18px)}}
    @keyframes wingPulse{0%{transform:translateY(2px) rotate(-.6deg)}100%{transform:translateY(-5px) rotate(.6deg)}}
    @keyframes reveal{0%,57%{opacity:0;transform:translate(-50%,-50%) scale(.72);filter:blur(16px)}72%,100%{opacity:1;transform:translate(-50%,-50%) scale(1);filter:blur(0)}}
    @keyframes drawRoof{0%,68%{stroke-dashoffset:350}91%,100%{stroke-dashoffset:0}}
    @keyframes star{0%,77%{opacity:0;transform:translate(-50%,-50%) scale(.2) rotate(0)}88%,100%{opacity:1;transform:translate(-50%,-50%) scale(1) rotate(90deg)}}
    @keyframes tag{0%,82%{opacity:0;transform:translate(-50%,9px)}100%{opacity:1;transform:translate(-50%,0)}}
    @keyframes drift{to{transform:rotate(360deg)}}
    @media(max-width:850px){body{overflow:auto;padding:28px 0}.page{grid-template-columns:1fr;justify-items:center}.copy{text-align:center}.copy p{font-size:16px}.phone{width:min(390px,92vw);height:min(780px,78vh);min-height:650px}.copy h1{font-size:54px}}
    @media(prefers-reduced-motion:reduce){.dove,.wordmark,.roof,.glow,.tagline,.enter,.screen::before{animation-duration:.001s!important;animation-delay:0s!important}}
    .motion{position:absolute;inset:0;width:100%;height:100%;z-index:4;pointer-events:none}
    .wordmark{top:50%;animation:none;opacity:1;filter:none}.roof{animation:roofFinish 7s ease forwards}
    .glow{top:calc(50% - 108px);background:linear-gradient(135deg,#fff,#e4cbff);filter:drop-shadow(0 0 12px #caa4ff);animation:starFinish 7s ease forwards}
    .tagline{animation:tag 7s ease forwards}.enter{animation:tag 7s .4s ease forwards}
    .screen:not(.ready) *,.screen:not(.ready)::before{animation-play-state:paused!important}
    @keyframes roofFinish{0%,54%{stroke-dashoffset:350;opacity:0}55%{opacity:1;stroke-dashoffset:350}68%,86%{stroke-dashoffset:0;opacity:1}100%{stroke-dashoffset:0;opacity:0}}
    @keyframes starFinish{0%,85%{opacity:0;transform:translate(-50%,-50%) scale(.2)}100%{opacity:1;transform:translate(-50%,-50%) scale(1)}}
    @media(prefers-reduced-motion:reduce){.roof,.glow{animation-duration:.001s!important}}
    .screen{background:radial-gradient(ellipse at 12% 8%,#448ed244,transparent 38%),linear-gradient(160deg,#2862a9 0%,#334b95 23%,#2b124e 48%,#50277c 68%,#ac80d9 100%)}
    .screen::before{inset:-5%;background:url('assets/purple-supernova.png') center/cover no-repeat;opacity:.1;filter:blur(9px) saturate(.6);animation:nebulaDrift 28s ease-in-out infinite alternate}
    .stars{display:none}
    .roof{animation-duration:5.2s}.glow{animation-duration:3.9s}.tagline,.enter{animation-duration:3.9s}.enter{animation-delay:.2s;background:#26104555}
    @keyframes nebulaDrift{from{transform:scale(1)}to{transform:scale(1.055) translateY(-.6%)}}
    @media(prefers-reduced-motion:reduce){.screen::before{animation:none!important}}
    .wordmark{top:43%}.glow{top:calc(43% - 108px)}.tagline{top:54%}
    .screen{transition:opacity .55s ease,transform .7s ease}.home-open .screen{opacity:0;transform:scale(1.035);pointer-events:none}
    .home{position:absolute;inset:0;z-index:10;overflow-y:auto;background:#f8f5ff;color:#2c1849;animation:homeReveal .65s ease both;scrollbar-width:thin;scrollbar-color:#cbb9e7 transparent}
    .home[hidden]{display:none}.home-header{padding:28px 24px 22px;background:linear-gradient(135deg,#284d91,#341658 60%,#7950a8);color:white;display:flex;flex-direction:column;gap:8px}
    .home-brand{font:bold 30px Georgia,serif;display:flex;align-items:center;justify-content:space-between}.home-brand span{font-size:22px;color:#ddc9ff}.home-label{font-size:12px;letter-spacing:.14em;color:#e0d2f4}
    .home-content{padding:25px 22px 20px}.eyebrow{font-size:12px;letter-spacing:.12em;font-weight:700;margin:0 0 9px;color:#77559a}.home h2{font:32px/1.15 Georgia,serif;letter-spacing:-.03em;margin:0 0 10px;outline:none}.welcome{font-size:16px;line-height:1.5;margin:0 0 22px;color:#776585}
    .bridge-card{padding:23px;border-radius:23px;color:white;background:radial-gradient(ellipse at top right,#9160c777,transparent 65%),linear-gradient(125deg,#322051,#55317e);box-shadow:0 10px 24px #3c19551a}.bridge-card .eyebrow{color:#d9c1f5;font-size:12px}.bridge-card h3{font:30px Georgia,serif;margin:8px 0}.bridge-card p{font-size:16px;line-height:1.5;color:#e6dcf2;margin:9px 0 18px}.bridge-card summary{display:flex;justify-content:space-between;font-size:14px;font-weight:700;padding-top:15px;border-top:1px solid #ffffff33;cursor:pointer}.bridge-card details p{margin-bottom:0;font-size:14px}
    .section-heading{display:flex;justify-content:space-between;align-items:center;margin-top:25px}.section-heading h3,.community-title{font-size:17px;margin:0 0 13px}.section-heading span{color:#8760b2;margin-bottom:13px}.verse-card{padding:20px;background:#efe7fa;border:1px solid #e5d8f4;border-radius:19px}.verse-card blockquote{font:22px/1.4 Georgia,serif;margin:5px 0 12px}.verse-card p{font-size:12px;color:#785a94;margin:0}.community-title{margin-top:25px}.home-row{border-bottom:1px solid #e8dff0;padding:13px 0}.home-row summary{display:flex;align-items:center;gap:12px;cursor:pointer;list-style:none}.home-row summary::-webkit-details-marker,.bridge-card summary::-webkit-details-marker{display:none}.row-icon{display:grid;place-items:center;background:#eae0f6;border-radius:13px;min-width:40px;height:44px;font-size:24px;color:#7345a7}.home-row summary>span:nth-child(2){flex:1}.home-row b{display:block;font-size:14px;font-weight:650}.home-row small{display:block;font-size:12px;line-height:1.5;color:#826f92;margin-top:4px}.home-row p{font-size:16px;line-height:1.6;color:#665175;padding:0 5px}.home-footer{text-align:center;font-size:12px;color:#8a769a;margin:26px 0 0}summary:focus-visible,button:focus-visible{outline:3px solid #af8cda;outline-offset:4px}
    @keyframes homeReveal{from{opacity:0;transform:translateY(14px)}to{opacity:1;transform:translateY(0)}}
    @media(prefers-reduced-motion:reduce){.home{animation:none}.screen{transition:none}}
  </style>
  <link rel="stylesheet" href="app.css" />
  <link rel="stylesheet" href="social.css" />
  <link rel="stylesheet" href="signup.css" />
  <link rel="stylesheet" href="website.css" />
</head>
<body>
  <main class="page">
    <section class="copy">
      <small>Haven · Interactive design</small>
      <h1>Help. Hope.<br>A place to belong.</h1>
      <p>Stories that bring us closer. A community that listens. A bridge to help when you need it.</p>
      <button class="replay" type="button" onclick="replay()">Replay opening</button>
      <span class="hint">Design preview · Sample content, no live matching or messaging</span>
    </section>
    <section class="phone" aria-label="Haven">
      <div class="screen" id="screen">
        <div class="stars"></div><div class="status"><span>9:41</span><span>● ● ●</span></div><div class="island"></div>
        <div class="stage">
          <canvas class="motion" aria-label="The purple Haven dove appears at the center in a soft glow, then transforms into Haven"></canvas>
          <div class="glow"></div>
          <svg class="wordmark" viewBox="0 0 320 190" aria-label="Haven"><defs><linearGradient id="wordGradient" x1="0" y1="0" x2="1" y2="1"><stop stop-color="#f4dcff"/><stop offset=".32" stop-color="#b678ff"/><stop offset=".68" stop-color="#702ee8"/><stop offset="1" stop-color="#391179"/></linearGradient></defs>
            <path class="roof" d="M46 53 Q160 -4 274 53" fill="none" stroke="#d8c5ff" stroke-width="7" stroke-linecap="round"/>
          </svg>
          <div class="tagline"><b>A safe bridge to hope.</b><span>Faith · Help · Community</span></div>
          <button class="enter" type="button" onclick="openSignup()">Get started</button>
        </div>
      </div>
      <section class="signup" id="signup" aria-labelledby="signup-title" hidden>
        <div class="signup-welcome"><div class="signup-brand"><img src="assets/haven-dove.png" alt=""/><span>Haven</span></div><div class="signup-story"><p>FAITH · HELP · COMMUNITY</p><h1>A place<br>to belong.</h1><p>Stories that bring us closer.<br>A community that listens.<br>A bridge to help when you need it.</p></div></div>
        <div class="signup-card">
          <p class="signup-eyebrow">A PLACE TO BELONG</p>
          <h2 id="signup-title" tabindex="-1">Create your<br>Haven account.</h2>
          <p class="signup-intro">Find hope. Share your story.<br>Walk with a community of faith.</p>
          <p class="signup-demo" id="signup-demo">Sign-up preview · Use sample details. Nothing is sent or saved, and no account is created.</p>
          <form id="signup-form" aria-describedby="signup-demo">
            <label for="signup-alias">Your community name</label>
            <input id="signup-alias" type="text" placeholder="e.g. Quiet Dove" required minlength="2" maxlength="30" autocomplete="off" aria-describedby="alias-hint"/>
            <p class="input-hint" id="alias-hint">Choose an alias instead of your real name.</p>
            <label for="signup-email">Email</label>
            <input id="signup-email" type="email" placeholder="you@example.com" required autocomplete="off"/>
            <label for="signup-password">Password</label>
            <div class="password-field"><input id="signup-password" type="password" placeholder="At least 8 characters" required minlength="8" autocomplete="off" aria-describedby="password-hint"/><button id="toggle-password" type="button" aria-label="Show password" aria-pressed="false">Show</button></div>
            <p class="input-hint" id="password-hint">For this preview, use a made-up password.</p>
            <button class="signup-submit" type="submit">Continue to Haven <span aria-hidden="true">→</span></button>
          </form>
          <button class="signup-explore" type="button" onclick="openHome()">Explore the preview first</button>
        </div>
      </section>
      <section class="home" id="home" aria-label="Haven home" hidden>
        <header class="home-header"><span class="home-brand">Haven<span aria-hidden="true">✦</span></span><span class="home-label">FAITH · HELP · COMMUNITY</span></header>
        <div class="home-content">
          <p class="eyebrow">A PLACE TO BELONG</p>
          <h2 tabindex="-1" id="home-title">You are not alone.</h2>
          <p class="welcome">Find encouragement for today.<br>Take your next step with hope.</p>
          <section class="bridge-card" aria-labelledby="bridge-title">
            <span class="eyebrow">SUPPORT FOR YOUR JOURNEY</span>
            <h3 id="bridge-title">FaithBridge</h3>
            <p>A bridge between Christians facing persecution and the people who can help.</p>
            <details><summary>Explore support <span aria-hidden="true">↗</span></summary><p>FaithBridge is being developed to help you find organizations and resources based on your needs, language, and location.</p></details>
          </section>
          <div class="section-heading"><h3>A moment of hope</h3><span aria-hidden="true">✦</span></div>
          <section class="verse-card"><span class="eyebrow">BE STILL</span><blockquote>“God is our refuge and strength, a very present help in trouble.”</blockquote><p>Psalm 46:1 · KJV</p></section>
          <h3 class="community-title">Walk together</h3>
          <details class="home-row"><summary><span class="row-icon" aria-hidden="true">♡</span><span><b>Pray for the Church</b><small>Stand with believers around the world</small></span><span aria-hidden="true">+</span></summary><p>Lord, strengthen those who face persecution for their faith. Bring comfort to their families, courage for today, and people who can offer care. Amen.</p></details>
          <details class="home-row"><summary><span class="row-icon" aria-hidden="true">✧</span><span><b>Testimonies of hope</b><small>Faith shared. Courage renewed.</small></span><span aria-hidden="true">+</span></summary><p>Stories from the community will appear here as Haven grows.</p></details>
          <p class="home-footer">Rooted in faith. Connected in hope.</p>
        </div>
      </section>
    </section>
  </main>
  <script src="app.js"></script>
  <script src="opening.js"></script>
  <script src="signup.js"></script>
</body>
</html>

```

## opening.js

```javascript
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

```

## signup.js

```javascript
(() => {
 const form=document.getElementById('signup-form');
 const alias=document.getElementById('signup-alias');
 const password=document.getElementById('signup-password');
 const toggle=document.getElementById('toggle-password');
 toggle.addEventListener('click',()=>{
  const show=password.type==='password';
  password.type=show?'text':'password';
  toggle.textContent=show?'Hide':'Show';
  toggle.setAttribute('aria-label',show?'Hide password':'Show password');
  toggle.setAttribute('aria-pressed',String(show));
 });
 alias.addEventListener('input',()=>alias.setCustomValidity(alias.value.trim().length<2?'Choose a community name with at least 2 characters.':''));
 form.addEventListener('submit',event=>{
  event.preventDefault();
  if(!form.reportValidity())return;
  const name=alias.value.trim();
  // No account creation or credential storage in the design preview.
  openHome(name);
 });
 form.addEventListener('reset',()=>{
  alias.setCustomValidity('');password.type='password';toggle.textContent='Show';
  toggle.setAttribute('aria-label','Show password');toggle.setAttribute('aria-pressed','false');
 });
})();

```

## app.js

```javascript
(() => {
 const paths={create:'M3 5h12v14H3ZM15 10l6-4v12l-6-4',profile:'M16 7a4 4 0 1 1-8 0 4 4 0 0 1 8 0M4 21v-2a8 8 0 0 1 16 0v2',settings:'M4 6h16M4 12h16M4 18h16M8 3v6M16 9v6M10 15v6',home:'M3 10 12 3l9 7v11h-6v-7H9v7H3Z',help:'M4 21V9m16 12V9M2 9q10-12 20 0M4 14h16',heart:'M12 21s-9-5-9-12a5 5 0 0 1 9-3 5 5 0 0 1 9 3c0 7-9 12-9 12Z',prayer:'m12 2 3 7 7 3-7 3-3 7-3-7-7-3 7-3Z',community:'M21 11a8 8 0 0 1-8 8H8l-5 3V6a3 3 0 0 1 3-3h7a8 8 0 0 1 8 8Z',arrow:'M5 12h14m-6-6 6 6-6 6',back:'M19 12H5m6-6-6 6 6 6',save:'M6 3h12v19l-6-4-6 4Z',plus:'M12 5v14M5 12h14',upload:'M12 16V3m-5 5 5-5 5 5M4 15v6h16v-6'};
 const icon=n=>`<svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="${paths[n]||paths.heart}"/></svg>`;
 const esc=s=>String(s).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
 const state={page:'home',need:'',language:'English',step:1,filter:'For you',topic:'All',prayed:new Set(),likes:new Set(),saved:new Set(),reply:null,video:null,videoName:'',caption:'',kind:'Testimony',notice:''};
 let userAlias='Quiet Dove';
 let nextId=10;
 const clips=[{id:'r1',kind:'Testimony',alias:'Quiet Cedar',title:'A little hope can change a whole day.',caption:'An everyday reminder that encouragement matters.',sample:true},{id:'r2',kind:'Encouragement',alias:'Morning Light',title:'You do not have to carry it alone.',caption:'Make room for faith, questions, and people who listen.',sample:true}];
 const requests=[{id:'p1',alias:'Still Waters',topic:'Family',body:'My family does not understand my faith, and I feel alone. Please pray for patience, wisdom, and someone I can talk to.',sample:true},{id:'p2',alias:'Quiet Olive',topic:'Displacement',body:'We are trying to begin again after leaving our home. Please pray for peace and a caring community around us.',sample:true},{id:'p3',alias:'Gentle Dawn',topic:'Strength',body:'It has been difficult to hold on to hope this week. Please pray that I find strength for the next step.',sample:true}];
 const posts=[{id:'c1',alias:'Quiet Cedar',topic:'Struggles',body:'Some days I feel like I have to hide the part of me that matters most. Does anyone else find it hard to talk about their faith at home?',sample:true,replies:[{alias:'Still Waters',body:'I relate to that feeling. Thank you for putting it into words.'}]},{id:'c2',alias:'Morning Light',topic:'Questions',body:'Can faith and doubt exist at the same time? I have questions, but I do not want to feel ashamed for asking them.',sample:true,replies:[{alias:'Gentle Dawn',body:'I have questions too. It helps to have a place where we can be honest.'}]},{id:'c3',alias:'Quiet Olive',topic:'Encouragement',body:'Someone checked in on me today without trying to fix everything. Just being heard made a difference.',sample:true,replies:[]}];
 const host=document.getElementById('home');
 host.innerHTML=`<header class="app-top"><span class="brand"><img src="assets/haven-dove.png" alt=""/>Haven</span><span class="desktop-tagline">Faith. Help. Community.</span><div class="header-actions"><button data-page="profile" aria-label="Your profile">${icon('profile')}</button><button data-page="settings" aria-label="Settings">${icon('settings')}</button></div></header><div class="app-scroll" id="app-content"></div><nav class="app-nav" aria-label="Main navigation">${[['home','Home'],['help','FaithBridge'],['create','Post'],['prayer','Prayer'],['community','Community']].map(([key,label])=>`<button data-page="${key}" class="${key==='create'?'dove-tab':''}" aria-label="${key==='create'?'Create a video post':label}" aria-current="${key==='home'?'page':'false'}">${key==='create'?'<span class="dove-button"><img src="assets/haven-dove.png" alt=""/><span aria-hidden="true">+</span></span>':icon(key)}<span>${label}</span></button>`).join('')}</nav><aside class="website-aside" aria-label="Encouragement and community"><section class="website-verse"><p class="overline">A MOMENT OF HOPE</p><blockquote>“God is our refuge and strength, a very present help in trouble.”</blockquote><p>Psalm 46:1 · KJV</p></section><section class="website-connect"><h3>Walk together.</h3><button data-page="prayer">${icon('prayer')}<span><b>Lift someone in prayer</b><small>Stand beside a fellow believer</small></span>${icon('arrow')}</button><button data-page="community">${icon('community')}<span><b>Join the conversation</b><small>Share what is on your heart</small></span>${icon('arrow')}</button><button data-page="help">${icon('help')}<span><b>Find your next step</b><small>Explore FaithBridge resources</small></span>${icon('arrow')}</button></section><p class="website-footnote">Rooted in faith. Connected in hope.</p></aside>`;
 const heading=(label,title,description)=>`<p class="overline">${label}</p><h2 id="home-title" tabindex="-1">${title}</h2><p class="intro">${description}</p>`;
 const avatar=alias=>`<span class="alias-avatar" aria-hidden="true">${esc(alias.split(' ').map(w=>w[0]).join(''))}</span>`;
 const byline=p=>`<div class="byline">${avatar(p.alias)}<span><b>${esc(p.alias)}</b><small>${p.sample?'Illustrative sample':'You · This session'} · ${esc(p.topic||p.kind||'')}</small></span></div>`;
 function home(){const list=clips.filter(c=>state.filter==='For you'||(state.filter==='Testimonies'?c.kind==='Testimony':!c.sample));return `<div class="feed-heading"><h2 id="home-title" tabindex="-1">A little hope.</h2><span>Stories that bring us closer.</span></div><button class="bridge-strip" data-page="help">${icon('help')}<span><b>FaithBridge</b><small>A bridge to the support you need</small></span>${icon('arrow')}</button><div class="feed-tabs" role="group" aria-label="Video feed">${['For you','Testimonies','My videos'].map(f=>`<button data-filter="${f}" aria-pressed="${state.filter===f}">${f}</button>`).join('')}</div>${state.notice?`<p class="session-message" role="status">${esc(state.notice)}</p>`:''}<div class="reels">${list.map((c,i)=>`<article class="reel ${i%2?'reel-blue':''}">${c.url?`<video src="${esc(c.url)}" controls playsinline preload="metadata" aria-label="${esc(c.caption||'Your video')}"></video>`:`<div class="sample-reel"><span class="reel-badge">${c.kind} · Layout sample</span><img src="assets/haven-dove.png" alt=""/><h3>${c.title}</h3><p>Video goes here</p><button data-page="create">Try your own video ${icon('plus')}</button></div>`}<div class="reel-caption"><b>@${esc(c.alias.toLowerCase().replaceAll(' ','_'))}</b><p>${esc(c.caption)}</p><span>${c.sample?'Illustrative content · Not a real testimony':'Only visible in this preview session'}</span></div><div class="reel-actions"><button data-like="${c.id}" aria-label="Like this post" aria-pressed="${state.likes.has(c.id)}">${icon('heart')}</button><button data-save="${c.id}" aria-label="Save this post for this session" aria-pressed="${state.saved.has(c.id)}">${icon('save')}</button></div></article>`).join('')||`<section class="paper-card"><h3>Your stories belong here.</h3><p>Tap the dove to choose a video and try posting it to your preview feed.</p><button class="action" data-page="create">Create a video post ${icon('plus')}</button></section>`}</div>`}
 function helpContent(){if(state.step===2)return `${heading('FAITHBRIDGE','Your next step.','A connection begins with understanding.')}<p class="step">02 / 02 · REVIEW</p><section class="paper-card"><p class="overline">YOUR SELECTION</p><h3>${esc(state.need)}</h3><p>Preferred language: ${esc(state.language)}</p></section><section class="paper-card"><h3>How matching will work</h3><p>FaithBridge will use your circumstances and preferences to search a vetted resource directory. You choose whether to contact an organization.</p></section><div class="notice">Matching is not connected in this design preview. No request has been submitted and no organization has been contacted.</div><button class="action" data-edit>Change my selection ${icon('back')}</button>`;return `${heading('FAITHBRIDGE','Here for your needs.','Start with the kind of support you are looking for.')}<p class="step">01 / 02 · YOUR NEED</p><div class="choice-grid" role="group" aria-label="Type of support">${['Threats or persecution','Displacement','Legal support','Health & wellbeing','Questioning faith?','Not sure yet'].map(n=>`<button class="choice" data-need="${n}" aria-pressed="${state.need===n}">${n}</button>`).join('')}</div><label class="field">Preferred language<select id="language">${['English','Français','Español','العربية','中文'].map(l=>`<option${state.language===l?' selected':''}>${l}</option>`).join('')}</select></label><button class="action" data-continue>Continue ${icon('arrow')}</button><p id="need-error" role="status" class="fine"></p>`}
 function create(){return `${heading('SHARE A LITTLE HOPE','Your story. Your voice.','A testimony, an encouragement, a moment of faith.')}<form id="video-form"><label class="video-picker">${state.video?'<span>Choose a different video</span>':`${icon('upload')}<b>Choose a video</b><span>MP4, WebM or MOV · Up to 100 MB</span>`}<input id="video-file" type="file" accept="video/mp4,video/webm,video/quicktime"/></label>${state.video?`<video class="upload-preview" src="${esc(state.video)}" controls playsinline></video><p class="fine">${esc(state.videoName)}</p>`:''}<label class="field">Post type<select id="video-kind"><option${state.kind==='Testimony'?' selected':''}>Testimony</option><option${state.kind==='Encouragement'?' selected':''}>Encouragement</option></select></label><label class="field">Caption<textarea id="video-caption" maxlength="500" rows="3" placeholder="What would you like to share?">${esc(state.caption)}</textarea></label><div class="notice">Local preview only: your video is not uploaded or shared. Faces, voices, and backgrounds can reveal identity.</div><p class="form-error" id="video-error" role="status"></p><button class="action" type="submit">Post to my preview ${icon('arrow')}</button></form>`}
 function prayer(){return `${heading('HAVEN PRAYER','Carry one another.','Ask for prayer. Stand beside someone in theirs.')}<details class="composer"><summary>${icon('plus')}Share a prayer request</summary><form id="prayer-form"><label class="field">Your request<textarea name="body" required maxlength="1200" rows="4" placeholder="What would you like prayer for?"></textarea></label><p class="fine">Posted as ${esc(userAlias)}. Use sample details; do not include names or exact locations. This stays in this session.</p><button class="action">Add to preview ${icon('arrow')}</button></form></details><p class="feed-note">Sample requests show the experience. New requests are visible only to you until you refresh.</p>${requests.map(p=>`<article class="social-post prayer-post">${byline(p)}<p>${esc(p.body)}</p><button class="prayer-pledge" data-pray="${p.id}" aria-pressed="${state.prayed.has(p.id)}">${icon('prayer')}<span>${state.prayed.has(p.id)?'You prayed for this request':'I prayed for you'}</span></button></article>`).join('')}`}
 function community(){const list=posts.filter(p=>state.topic==='All'||p.topic===state.topic);return `${heading('HAVEN COMMUNITY','Voice your opinions.','Faith, struggles, questions. A conversation with room for you.')}<form class="discussion-composer" id="post-form"><div class="byline">${avatar(userAlias)}<span><b>${esc(userAlias)}</b><small>Your preview alias</small></span></div><label class="sr-only" for="post-body">Share a thought</label><textarea id="post-body" name="body" required maxlength="1200" rows="3" placeholder="What have you been carrying lately?"></textarea><div class="composer-bottom"><label><span class="sr-only">Topic</span><select name="topic"><option>Struggles</option><option>Questions</option><option>Encouragement</option></select></label><button type="submit">Post</button></div></form><p class="feed-note">Illustrative discussions · Your posts and replies stay in this session. No live anonymous messaging.</p><div class="chips" role="group" aria-label="Discussion topics">${['All','Struggles','Questions','Encouragement'].map(t=>`<button data-topic="${t}" aria-pressed="${state.topic===t}">${t}</button>`).join('')}</div>${list.map(p=>`<article class="social-post">${byline(p)}<p>${esc(p.body)}</p><div class="post-actions"><button data-like="${p.id}" aria-pressed="${state.likes.has(p.id)}">${icon('heart')}<span>${state.likes.has(p.id)?'Supported':'Support'}</span></button><button data-reply="${p.id}" aria-expanded="${state.reply===p.id}">${icon('community')}<span>${p.replies.length} ${p.replies.length===1?'reply':'replies'}</span></button></div>${state.reply===p.id?`<div class="replies">${p.replies.map(r=>`<div class="reply"><b>${esc(r.alias)}</b><p>${esc(r.body)}</p></div>`).join('')}<form class="reply-form" data-reply-form="${p.id}"><label class="sr-only" for="reply-${p.id}">Your reply</label><textarea id="reply-${p.id}" name="body" required maxlength="600" rows="2" placeholder="Reply with kindness…"></textarea><button type="submit">Reply as ${esc(userAlias)}</button></form></div>`:''}</article>`).join('')||'<p class="intro">No posts in this topic yet. Start the conversation above.</p>'}`}
 const organizations=[
  {name:'Open Doors',tag:'Persecuted Church',description:'Explore country profiles and learn about support for persecuted Christians worldwide.',url:'https://www.opendoors.org/en-US/',letters:'OD'},
  {name:'The Voice of the Martyrs',tag:'Prayer & encouragement',description:'Find prayer guides, testimonies, and ways to support Christians facing persecution.',url:'https://www.persecution.com/',letters:'VM'},
  {name:'Global Christian Relief',tag:'Relief & support',description:'Learn about relief efforts and stories from Christian communities facing persecution.',url:'https://globalchristianrelief.org/',letters:'GR'}
 ];
 function resources(){return `<section class="organization-resources" aria-labelledby="resources-title"><p class="overline">BUILDING THE BRIDGE</p><h3 id="resources-title">Organizations & resources</h3><p class="resource-intro">Explore organizations serving Christians facing persecution.</p><p class="resource-note">Public resources · Haven partnerships and direct referrals are not yet established.</p><div class="organization-list">${organizations.map(o=>`<article class="organization-card"><div class="organization-top"><span class="organization-mark" aria-hidden="true">${o.letters}</span><span><small>${o.tag}</small><h4>${o.name}</h4></span></div><p>${o.description}</p><a href="${o.url}" target="_blank" rel="noopener noreferrer">Explore resources <span aria-hidden="true">↗</span><span class="sr-only"> from ${o.name} (opens in a new tab)</span></a></article>`).join('')}</div></section>`}
 function help(){return `<div class="needs-panel">${helpContent()}</div>${resources()}`}
 function profile(){return `${heading('YOUR HAVEN','Your profile.','Your place in the community.')}<section class="profile-card">${avatar(userAlias)}<h3>${esc(userAlias)}</h3><p>Your community name</p></section><div class="profile-stats"><div><b>${clips.filter(c=>!c.sample).length}</b><span>Videos</span></div><div><b>${posts.filter(p=>!p.sample).length}</b><span>Discussions</span></div><div><b>${requests.filter(p=>!p.sample).length}</b><span>Prayer requests</span></div></div><button class="account-row" data-my-videos>${icon('create')}<span>My videos</span>${icon('arrow')}</button><button class="account-row" data-page="settings">${icon('settings')}<span>Settings</span>${icon('arrow')}</button><p class="fine">Your activity is available for this preview session. No account has been created.</p>`}
 function settings(){return `${heading('YOUR HAVEN','Settings.','Make Haven feel more like you.')}<section class="paper-card"><h3>FaithBridge preferences</h3><label class="field">Preferred support language<select id="language">${['English','Français','Español','العربية','中文'].map(l=>`<option${state.language===l?' selected':''}>${l}</option>`).join('')}</select></label><p class="settings-hint">Used for your FaithBridge support selection.</p><p id="settings-feedback" class="settings-feedback" role="status"></p></section><button class="account-row" data-page="profile">${icon('profile')}<span>Your profile</span>${icon('arrow')}</button><button class="account-row" data-replay-opening>${icon('back')}<span>Replay Haven intro</span>${icon('arrow')}</button><p class="fine">Preferences apply to this preview session.</p>`}
 const views={home,help,create,prayer,community,profile,settings};
 function render(focus=false){host.dataset.view=state.page;const content=document.getElementById('app-content');content.querySelectorAll('video').forEach(v=>v.pause());content.innerHTML=views[state.page]();content.classList.toggle('is-feed',state.page==='home');host.querySelectorAll('.app-nav [data-page], .header-actions [data-page]').forEach(b=>b.setAttribute('aria-current',b.dataset.page===state.page?'page':'false'));if(focus){content.scrollTop=0;document.getElementById('home-title').focus({preventScroll:true})}}
 function navigate(page){state.page=page;state.reply=null;render(true)}
 host.addEventListener('click',e=>{const b=e.target.closest('button');if(!b)return;
  if(b.dataset.page)navigate(b.dataset.page);
  else if(b.hasAttribute('data-my-videos')){state.filter='My videos';navigate('home')}
  else if(b.hasAttribute('data-replay-opening')){host.querySelectorAll('video').forEach(v=>v.pause());replay()}
  else if(b.dataset.need){state.need=b.dataset.need;host.querySelectorAll('[data-need]').forEach(x=>x.setAttribute('aria-pressed',x===b))}
  else if(b.hasAttribute('data-continue')){if(!state.need){document.getElementById('need-error').textContent='Choose a support type to continue.';return}state.step=2;render(true)}
  else if(b.hasAttribute('data-edit')){state.step=1;render(true)}
  else if(b.dataset.filter){state.filter=b.dataset.filter;render();host.querySelector(`[data-filter="${state.filter}"]`).focus()}
  else if(b.dataset.topic){state.topic=b.dataset.topic;render();host.querySelector(`[data-topic="${state.topic}"]`).focus()}
  else if(b.dataset.pray){const id=b.dataset.pray;state.prayed.has(id)?state.prayed.delete(id):state.prayed.add(id);b.setAttribute('aria-pressed',state.prayed.has(id));b.querySelector('span').textContent=state.prayed.has(id)?'You prayed for this request':'I prayed for you'}
  else if(b.dataset.like||b.dataset.save){const save=!!b.dataset.save,id=save?b.dataset.save:b.dataset.like,set=save?state.saved:state.likes;set.has(id)?set.delete(id):set.add(id);b.setAttribute('aria-pressed',set.has(id));if(b.querySelector('span'))b.querySelector('span').textContent=set.has(id)?'Supported':'Support'}
  else if(b.dataset.reply){state.reply=state.reply===b.dataset.reply?null:b.dataset.reply;const top=document.getElementById('app-content').scrollTop;render();document.getElementById('app-content').scrollTop=top;host.querySelector(`[data-reply="${b.dataset.reply}"]`).focus()}
 });
 host.addEventListener('input',e=>{if(e.target.id==='video-caption')state.caption=e.target.value;if(e.target.matches('textarea'))e.target.setCustomValidity('')});
 host.addEventListener('change',e=>{if(e.target.id==='language'){state.language=e.target.value;const feedback=document.getElementById('settings-feedback');if(feedback)feedback.textContent='Support language updated.';}if(e.target.id==='video-kind')state.kind=e.target.value;if(e.target.id==='video-file'){const file=e.target.files[0];if(!file)return;if(!file.type.startsWith('video/')||file.size>100*1024*1024){document.getElementById('video-error').textContent='Choose a video smaller than 100 MB.';return}if(state.video)URL.revokeObjectURL(state.video);state.video=URL.createObjectURL(file);state.videoName=file.name;render()}});
 host.addEventListener('error',e=>{if(e.target.matches('video')){const p=document.createElement('p');p.className='form-error';p.textContent='This browser could not play the video. Try an MP4 or WebM file.';e.target.replaceWith(p)}},true);
 host.addEventListener('submit',e=>{e.preventDefault();const form=e.target;
  if(form.id==='video-form'){if(!state.video){document.getElementById('video-error').textContent='Choose a video first.';return}clips.unshift({id:'r'+nextId++,alias:userAlias,kind:state.kind,caption:state.caption||'A moment of hope.',url:state.video,sample:false});state.video=null;state.videoName='';state.caption='';state.filter='My videos';state.notice='Your video was added to this preview. It has not been shared publicly.';navigate('home');return}
  const data=new FormData(form),body=String(data.get('body')||'').trim();if(!body){form.querySelector('textarea').setCustomValidity('Write a few words first.');form.querySelector('textarea').reportValidity();return}form.querySelector('textarea').setCustomValidity('');
  if(form.id==='prayer-form'){requests.unshift({id:'p'+nextId++,alias:userAlias,topic:'Prayer request',body,sample:false});render(true)}
  else if(form.id==='post-form'){posts.unshift({id:'c'+nextId++,alias:userAlias,topic:String(data.get('topic')),body,sample:false,replies:[]});state.topic='All';render(true)}
  else if(form.dataset.replyForm){posts.find(p=>p.id===form.dataset.replyForm).replies.push({alias:userAlias,body});const top=document.getElementById('app-content').scrollTop;render();document.getElementById('app-content').scrollTop=top}
 });
 window.resetHavenHome=alias=>{userAlias=alias||'Quiet Dove';state.notice=alias?'Welcome, '+userAlias+'. You are exploring the preview; no account was created.':'';navigate('home')};
 render();
})();

```

## app.css

```css
button,input,select{font:inherit}button{cursor:pointer}button:focus-visible,select:focus-visible{outline:3px solid #a987ed;outline-offset:3px}.home{overflow:hidden;background:#f8f6fc;display:flex;flex-direction:column}.home[hidden]{display:none}.app-top{padding:27px 23px 17px;display:flex;align-items:center;justify-content:space-between;background:#f8f6fc;border-bottom:1px solid #e9e3f1;flex-shrink:0}.brand{display:flex;align-items:center;gap:7px;font:bold 29px Georgia,serif;color:#3f2266}.brand img{width:35px;height:39px;object-fit:contain}.preview-label{font-size:12px;background:#ece4f6;color:#644484;padding:6px 9px;border-radius:8px}.app-scroll{overflow-y:auto;flex:1;min-height:0;padding:25px 22px 24px;scrollbar-width:thin}.app-nav{display:grid;grid-template-columns:repeat(5,1fr);background:#fff;border-top:1px solid #e8e1f0;padding:10px 5px 17px;flex-shrink:0}.app-nav button{border:0;background:none;display:flex;flex-direction:column;align-items:center;gap:5px;font-size:12px;color:#756881;padding:7px 0;border-radius:12px}.app-nav button[aria-current=page]{color:#693bb0;background:#f1e9fc}.icon{width:22px;height:22px;display:inline-block;flex-shrink:0}.app-scroll h2{font:34px/1.12 Georgia,serif;margin:0 0 12px;color:#321e4b}.app-scroll h3{font:22px/1.2 Georgia,serif;margin:0 0 9px}.app-scroll p{font-size:16px;line-height:1.5}.intro{color:#74657f;margin:0 0 22px}.overline{font-size:12px!important;letter-spacing:.12em;font-weight:700;color:#82619c;margin:0 0 10px!important}.primary-card{background:radial-gradient(ellipse at 100% 0,#8f5ccd88,transparent 70%),linear-gradient(130deg,#271344,#583286);border-radius:24px;padding:23px;color:#fff;position:relative;overflow:hidden}.primary-card .overline{color:#d4baef}.primary-card h3{font-size:30px;color:#fff}.primary-card p{color:#e7d9f5;margin:12px 0 20px}.primary-card .card-dove{position:absolute;right:12px;top:8px;width:78px;height:78px;object-fit:contain;opacity:.55;pointer-events:none}.primary-card h3{position:relative}.action{width:100%;border:0;border-radius:12px;background:#6f43aa;color:white;padding:14px 17px;font-size:14px;font-weight:700;display:flex;align-items:center;justify-content:space-between;gap:10px}.primary-card .action{color:#42235e;background:#f7eeff}.section-title{display:flex;justify-content:space-between;align-items:center;margin:25px 0 13px}.section-title h3{font-family:inherit;font-weight:650;font-size:17px;margin:0}.text-button{color:#734aa4;border:0;background:none;font-size:14px;padding:6px 0}.verse{padding:23px;background:linear-gradient(135deg,#eee4fa,#e6e9fa);border-radius:21px;border:1px solid #e4d9ef}.verse blockquote{font:23px/1.4 Georgia,serif;margin:10px 0 14px}.verse cite{font-style:normal;font-size:12px;color:#705785}.duo{display:grid;grid-template-columns:1fr 1fr;gap:12px;margin-top:15px}.mini{border:1px solid #e7dff0;border-radius:18px;background:#fff;text-align:left;padding:18px 15px;color:#3d2653;display:flex;flex-direction:column;gap:10px}.mini b{font-size:16px}.mini span{font-size:14px;line-height:1.45;color:#7e6a8d}.mini .icon{color:#8654b5}.community-call{border:0;width:100%;background:#eae1f4;color:#4b2c69;border-radius:17px;padding:18px;display:flex;align-items:center;gap:13px;text-align:left;margin-top:15px}.community-call span{flex:1}.community-call b{display:block;font-size:16px}.community-call small{display:block;font-size:14px;margin-top:5px;color:#77588f}.fine{font-size:12px!important;color:#85708f;line-height:1.5;margin-top:20px}.back{padding:0;margin:0 0 20px;border:0;background:none;color:#744ca0;display:flex;align-items:center;gap:7px;font-size:14px}.notice{border-left:3px solid #a580cc;background:#eee7f6;color:#6c527f;padding:12px 14px;font-size:14px;line-height:1.5;margin:18px 0;border-radius:0 10px 10px 0}.choice-grid{display:grid;grid-template-columns:1fr 1fr;gap:10px;margin:17px 0 22px}.choice{border:1px solid #e0d4eb;background:white;color:#65497d;border-radius:13px;padding:15px 10px;font-size:14px;min-height:60px}.choice[aria-pressed=true]{background:#ede0fc;border-color:#8854bb;color:#482169;box-shadow:inset 0 0 0 1px #8854bb}.field{display:block;font-size:14px;font-weight:650;margin:15px 0}.field select{display:block;width:100%;border:1px solid #dfd3ea;border-radius:12px;padding:13px;background:white;color:#493258;margin-top:8px}.step{font-size:12px;color:#9276aa;letter-spacing:.1em;margin-bottom:18px}.paper-card{background:#fff;border:1px solid #e7dfef;border-radius:18px;padding:21px;margin:15px 0}.paper-card p{color:#75607f;margin:8px 0 0}.paper-card .overline{color:#8c65ad}.reader{font:21px/1.6 Georgia,serif!important;color:#4e365f!important}.chips{display:flex;flex-wrap:wrap;gap:8px;margin:18px 0}.chips button{border:1px solid #e1d4ee;border-radius:30px;background:#fff;padding:10px 16px;color:#785491;font-size:14px}.chips button[aria-pressed=true]{color:#fff;background:#643793;border-color:#643793}.prayer-button{margin-top:19px;background:#f0e7f9;color:#714698}.prayer-button[aria-pressed=true]{background:#693b9b;color:#fff}.room{display:flex;align-items:center;gap:14px;text-align:left;width:100%;background:#fff;border:1px solid #e6dcee;border-radius:17px;margin-top:13px;padding:18px;color:#5b3e75}.room span{flex:1}.room b{font-size:16px;display:block}.room small{font-size:14px;display:block;margin-top:6px;color:#84718f}.demo-post{border-top:1px solid #e4d9ed;padding:18px 0}.demo-post b{font-size:14px;color:#74558e}.demo-post p{margin-bottom:0}.app-scroll [tabindex='-1']:focus{outline:none}.app-nav svg{width:21px;height:21px}.copy h1{font-size:clamp(45px,5.5vw,70px)}
body{overflow:auto;padding:24px 0}
@media(max-width:600px){body{padding:0;background:#f8f6fc}.page{width:100%;display:block}.copy{display:none}.phone{border:0;border-radius:0;width:100%;height:100dvh;min-height:0;box-shadow:none}.app-top{padding-top:max(20px,env(safe-area-inset-top))}.app-nav{padding-bottom:max(14px,env(safe-area-inset-bottom))}.app-scroll{padding-left:24px;padding-right:24px}.island,.status{display:none}}@media(prefers-reduced-motion:reduce){*{scroll-behavior:auto!important}}
.header-actions{display:flex;gap:8px}.header-actions button{display:grid;place-items:center;width:40px;height:40px;border:1px solid #e4d9ed;border-radius:50%;background:#fff;color:#69418e}.header-actions button:hover,.header-actions button[aria-current=page]{background:#e9dcf7;border-color:#b996d8;color:#492269}.organization-resources{margin-top:30px;padding-top:25px;border-top:1px solid #dfd3e9}.organization-resources>h3{font-size:27px;margin-bottom:10px}.resource-intro{color:#735f81;margin:0 0 10px}.resource-note{font-size:12px!important;line-height:1.5;color:#887493;margin:0 0 18px}.organization-list{display:grid;gap:13px}.organization-card{padding:19px;border:1px solid #e6daef;border-radius:20px;background:linear-gradient(140deg,#fff,#f5effc)}.organization-top{display:flex;align-items:center;gap:12px}.organization-mark{display:grid;place-items:center;width:44px;height:44px;flex-shrink:0;border-radius:14px;background:#eee2fa;color:#6e4595;font:700 16px Georgia,serif}.organization-top small{font-size:12px;color:#816492}.organization-top h4{font-size:16px;line-height:1.35;margin:4px 0 0;color:#3e2357}.organization-card p{font-size:14px;line-height:1.55;color:#786484;margin:13px 0 15px}.organization-card a{display:flex;align-items:center;justify-content:space-between;padding-top:12px;border-top:1px solid #e9dff1;font-size:14px;color:#694096;text-decoration:none;font-weight:650}.organization-card a:hover{text-decoration:underline}.organization-card a:focus-visible{outline:3px solid #a987ed;outline-offset:4px}.profile-card{text-align:center;background:linear-gradient(140deg,#e9ddf8,#eef0fc);padding:28px 20px;border:1px solid #e1d4ef;border-radius:23px}.profile-card .alias-avatar{width:68px;height:68px;font-size:24px;margin:0 auto 15px}.profile-card h3{overflow-wrap:anywhere}.profile-card p{font-size:14px;color:#80688f;margin-bottom:0}.profile-stats{display:grid;grid-template-columns:repeat(3,1fr);gap:8px;margin:22px 0}.profile-stats div{text-align:center;padding:12px 3px}.profile-stats b{display:block;font-size:24px;color:#57337b}.profile-stats span{display:block;font-size:12px;color:#816b90;margin-top:6px}.account-row{display:flex;align-items:center;gap:12px;width:100%;text-align:left;padding:19px 4px;border:0;border-bottom:1px solid #e6dded;background:transparent;color:#644581;font-size:16px}.account-row span{flex:1}.settings-hint{font-size:14px!important}.settings-feedback{color:#644581;font-size:14px!important}.settings-feedback:empty{display:none}

```

## social.css

```css
.app-top{padding-bottom:13px;padding-top:20px}.app-scroll{padding:23px 20px 28px}.app-nav{align-items:end;padding-top:6px}.app-nav button{font-size:11px;min-width:0}.app-nav .dove-tab{padding-top:0;background:transparent}.dove-button{position:relative;display:grid;place-items:center;width:53px;height:43px;border-radius:16px;background:linear-gradient(140deg,#2b1b58,#8553be);box-shadow:0 4px 13px #713da73b}.dove-button img{width:40px;height:35px;object-fit:contain}.dove-button>span{position:absolute;right:2px;bottom:-3px;background:#f5e9ff;border:2px solid white;border-radius:50%;width:18px;height:18px;line-height:14px;color:#5b327d;font-size:17px}.feed-heading h2{font-size:28px;margin:0 0 5px}.feed-heading>span{font-size:14px;color:#82718f}.bridge-strip{display:flex;align-items:center;gap:13px;text-align:left;width:100%;border:0;border-radius:16px;padding:16px;color:#f8efff;background:linear-gradient(120deg,#31204e,#65408a);margin:20px 0 13px}.bridge-strip>span{flex:1}.bridge-strip b{font:21px Georgia,serif}.bridge-strip small{display:block;font-size:12px;color:#e0cdef;margin-top:4px}.bridge-strip>.icon:first-child{color:#d9c1f5;width:29px;height:29px}.feed-tabs{display:flex;gap:21px;border-bottom:1px solid #e5dcef;margin-bottom:16px}.feed-tabs button{border:0;background:none;color:#8c789e;padding:11px 0;font-size:14px;white-space:nowrap;border-bottom:2px solid transparent}.feed-tabs button[aria-pressed=true]{border-color:#70439c;color:#482260;font-weight:700}.reels{display:grid;gap:18px}.reel{position:relative;border-radius:23px;overflow:hidden;background:#27183d;color:white;isolation:isolate;scroll-snap-align:start}.sample-reel{min-height:380px;padding:21px 25px 30px;text-align:center;display:flex;flex-direction:column;align-items:center;background:radial-gradient(ellipse at 80% 15%,#8b63bc99,transparent 65%),linear-gradient(150deg,#332859,#27132e 55%,#724483)}.reel-blue .sample-reel{background:radial-gradient(ellipse at 10% 25%,#415e9a,transparent 65%),linear-gradient(145deg,#1c2c4b,#553463)}.reel-badge{align-self:flex-start;font-size:11px;letter-spacing:.05em;border:1px solid #ffffff40;background:#ffffff0d;border-radius:20px;padding:7px 10px}.sample-reel>img{height:72px;width:86px;object-fit:contain;margin:25px 0 15px}.sample-reel h3{font:30px/1.2 Georgia,serif;max-width:230px;color:#fff;margin-bottom:8px}.sample-reel>p{font-size:12px;color:#d1bddf;margin:10px 0}.sample-reel>button{display:flex;align-items:center;gap:8px;border:1px solid #ffffff40;border-radius:20px;background:#ffffff14;color:#eee0ff;font-size:12px;padding:8px 12px}.sample-reel>button svg{height:15px;width:15px}.reel-caption{padding:19px 63px 23px 21px;background:linear-gradient(120deg,#281638,#392144)}.reel-caption>b{font-size:14px}.reel-caption p{font-size:14px;line-height:1.4;margin:9px 0}.reel-caption>span{font-size:11px;color:#cab6dc}.reel-actions{position:absolute;right:12px;bottom:31px;display:grid;gap:10px}.reel-actions button{display:grid;place-items:center;background:#ffffff14;border:1px solid #ffffff24;border-radius:50%;width:35px;height:35px;color:white}.reel-actions button[aria-pressed=true]{background:#d3a9ff;color:#43235b}.reel video{display:block;width:100%;max-height:490px;aspect-ratio:9/14;object-fit:contain;background:#140d1e}.session-message{font-size:13px!important;background:#eadff5;color:#674880;padding:12px;border-radius:10px}.byline{display:flex;align-items:center;gap:10px}.alias-avatar{width:37px;height:37px;border-radius:50%;display:grid;place-items:center;flex-shrink:0;background:linear-gradient(135deg,#d9c6ef,#ede5f7);color:#6c468b;font:bold 12px system-ui}.byline>span:last-child{min-width:0}.byline b{display:block;font-size:14px;color:#492f60}.byline small{display:block;font-size:11px;color:#967ea6;margin-top:4px}.social-post{padding:22px 0;border-bottom:1px solid #e5dbee}.social-post>p{font-size:16px;line-height:1.6;color:#53445e;margin:14px 0 18px;white-space:pre-wrap;overflow-wrap:anywhere}.post-actions{display:flex;gap:24px}.post-actions button{border:0;background:none;color:#876d9b;display:flex;align-items:center;gap:7px;font-size:12px;padding:4px 0}.post-actions svg{width:18px;height:18px}.post-actions button[aria-pressed=true]{color:#7943b8}.post-actions button[aria-pressed=true] svg{fill:#e0c9f5}.discussion-composer{background:white;border:1px solid #e4d7ee;border-radius:18px;padding:17px}.discussion-composer textarea{border:0!important;padding:13px 0!important;background:white!important}.composer-bottom{display:flex;justify-content:space-between;gap:10px;align-items:center;border-top:1px solid #f0e8f7;padding-top:10px}.composer-bottom select{max-width:170px;border:0;background:#f3ecf9;color:#6c4b87;padding:7px;border-radius:9px;font-size:12px}.composer-bottom button,.reply-form button{background:#704496;color:white;border:0;border-radius:20px;padding:9px 18px;font-size:13px;font-weight:600}.feed-note{font-size:12px!important;color:#96849f;line-height:1.5;margin:14px 0}.chips{gap:6px}.chips button{padding:9px 11px;font-size:12px}.replies{margin-top:16px;border-left:2px solid #e5d6f1;padding-left:16px}.reply{padding:13px 0}.reply b{font-size:13px;color:#79558e}.reply p{font-size:14px;white-space:pre-wrap;overflow-wrap:anywhere;margin:7px 0;color:#7a648b}.reply-form button{margin-top:9px}.composer{background:#ede2f8;border:1px solid #dfcceb;padding:17px;border-radius:17px}.composer summary{font-size:14px;display:flex;gap:9px;align-items:center;color:#694284;cursor:pointer;font-weight:650}.composer summary::-webkit-details-marker{display:none}.prayer-post{background:white;border:1px solid #e6daef;border-radius:19px;padding:19px;margin:15px 0}.prayer-pledge{width:100%;display:flex;justify-content:center;align-items:center;gap:9px;border:1px solid #e3d3ee;background:#f5eefb;color:#81539e;border-radius:12px;padding:12px;font-size:14px}.prayer-pledge[aria-pressed=true]{background:#6b408e;border-color:#6b408e;color:white}textarea{width:100%;display:block;border:1px solid #e1d3eb;background:white;border-radius:12px;color:#513564;font:16px/1.5 system-ui;padding:12px;margin-top:9px;resize:vertical}textarea:focus-visible{outline:2px solid #a174be;outline-offset:3px}.video-picker{padding:25px 16px;position:relative;display:flex;align-items:center;flex-direction:column;gap:12px;border:1px dashed #b394cc;background:#eee3f8;border-radius:19px;color:#734695;cursor:pointer}.video-picker>b{font-size:17px}.video-picker>span{font-size:12px}.video-picker>svg{width:30px;height:30px}.video-picker input{max-width:100%;font-size:12px;margin-top:10px}.video-picker input::file-selector-button{padding:8px 13px;border:0;border-radius:20px;background:#764c9a;color:white;cursor:pointer}.upload-preview{margin-top:15px;border-radius:17px;max-height:310px;width:100%;background:#23132e}.form-error{color:#974359;font-size:14px!important}.sr-only{position:absolute;width:1px;height:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0,0,0,0);white-space:nowrap;border:0}
@media(max-width:600px){.app-nav button{font-size:12px}.app-scroll{padding-left:20px;padding-right:20px}.sample-reel{min-height:410px}.app-nav{padding-bottom:max(14px,env(safe-area-inset-bottom))}}@media(max-width:350px){.app-nav button{font-size:10px}.app-scroll{padding-left:15px;padding-right:15px}.feed-tabs{gap:15px}}

```

## signup.css

```css
.signup{position:absolute;inset:0;z-index:12;overflow-y:auto;padding:42px 22px 26px;background:radial-gradient(ellipse at 90% 0%,#9763d766,transparent 45%),linear-gradient(160deg,#294984 0%,#321451 43%,#5c3284 100%);color:white;scrollbar-width:thin;animation:signupReveal .75s cubic-bezier(.2,.7,.2,1) both}.signup[hidden]{display:none}.signup-open .screen{opacity:0;transform:scale(1.06);pointer-events:none}.signup-brand{display:flex;align-items:center;justify-content:center;gap:8px;margin-bottom:22px;font:700 31px Georgia,serif;color:#f0dfff}.signup-brand img{width:42px;height:44px;object-fit:contain;filter:drop-shadow(0 4px 10px #17073055)}.signup-card{padding:25px 23px 17px;background:#fcfaff;border:1px solid #fff8;border-radius:28px;color:#35204e;box-shadow:0 20px 50px #16052b33}.signup-eyebrow{font-size:12px;letter-spacing:.15em;font-weight:700;color:#8154a6;margin:0 0 12px}.signup h2{font:36px/1.05 Georgia,serif;letter-spacing:-.035em;margin:0 0 12px;outline:none}.signup-intro{font-size:16px;line-height:1.5;color:#766582;margin:0 0 16px}.signup-demo{font-size:12px;line-height:1.5;color:#6f5683;padding:10px 12px;border-radius:10px;background:#f0e8f8;margin:0 0 18px}.signup label{display:block;font-size:14px;font-weight:650;margin:14px 0 7px}.signup input{width:100%;min-width:0;background:#fff;border:1px solid #ddcfe9;border-radius:11px;padding:12px 13px;font-family:inherit;color:#35204e;font-size:16px;line-height:1.25}.signup input::placeholder{color:#95859e}.signup input:focus-visible{outline:3px solid #b395da;outline-offset:2px}.input-hint{font-size:12px;line-height:1.45;margin:6px 0 0;color:#806a90}.password-field{position:relative}.password-field input{padding-right:66px}.password-field button{position:absolute;right:5px;top:5px;bottom:5px;padding:0 9px;border:0;background:transparent;color:#70479b;font-size:14px;border-radius:6px}.signup-submit{width:100%;border:0;border-radius:12px;background:linear-gradient(110deg,#562c86,#814db3);color:white;font-size:16px;font-weight:650;padding:15px 16px;margin-top:21px;display:flex;justify-content:space-between;box-shadow:0 8px 18px #64318b25}.signup-explore{display:block;width:100%;border:0;background:none;color:#745191;font-size:14px;padding:17px 0 4px;text-decoration:underline;text-underline-offset:4px}@keyframes signupReveal{from{opacity:0;transform:translateY(24px)}to{opacity:1;transform:translateY(0)}}@media(max-width:600px){.signup{padding: max(28px,env(safe-area-inset-top)) 24px max(28px,env(safe-area-inset-bottom))}.signup-brand{margin:0 0 22px}.signup-card{max-width:420px;margin:auto;padding:28px 24px 20px}}@media(prefers-reduced-motion:reduce){.signup{animation:none}.signup-open .screen{transform:none}}

```

## website.css

```css
/* The Haven experience adapts from a mobile app to a full website. */
.copy,.island,.status{display:none}
body{display:block;padding:0;background:#f8f6fc;overflow:hidden}
.page{display:block;width:100%;max-width:none}
.phone{width:100%;height:100dvh;min-height:0;border:0;border-radius:0;box-shadow:none}
.website-aside,.desktop-tagline,.signup-story{display:none}
.signup-welcome{min-width:0}
@media(min-width:900px){
 .home{display:grid;grid-template-columns:224px minmax(0,1fr) 290px;grid-template-rows:88px minmax(0,1fr);background:#f9f7fc;animation:homeReveal .55s ease both}
 .home[hidden]{display:none}
 .app-top{grid-column:1/-1;grid-row:1;padding:0 36px 0 30px;background:#fff;border-bottom:1px solid #e9e1f0;gap:28px}
 .brand{font-size:34px;gap:10px}.brand img{width:42px;height:46px}
 .desktop-tagline{display:block;flex:1;font-size:14px;color:#8b789c;letter-spacing:.035em}
 .header-actions{gap:12px}.header-actions button{width:44px;height:44px}
 .app-nav{grid-column:1;grid-row:2;display:flex;flex-direction:column;align-items:stretch;justify-content:flex-start;gap:10px;padding:32px 18px;background:#fff;border-top:0;border-right:1px solid #e9e1f0;overflow:auto}
 .app-nav button{display:flex;flex-direction:row;align-items:center;gap:15px;text-align:left;min-height:52px;padding:14px 17px;font-size:15px;color:#7a688a;border-radius:13px;flex-shrink:0}
 .app-nav button:hover{background:#f4eefb}.app-nav button[aria-current=page]{background:#eee4f9;color:#60328d;font-weight:650}
 .app-nav .icon{width:23px;height:23px}
 .app-nav .dove-tab{order:1;margin-top:24px;padding:9px 14px;background:linear-gradient(110deg,#422364,#7b4ba8);color:#fff;gap:12px}
 .app-nav .dove-tab:hover,.app-nav .dove-tab[aria-current=page]{background:#573080;color:#fff}
 .dove-button{background:transparent;box-shadow:none;width:35px;height:35px}.dove-button img{width:34px;height:33px}.dove-button>span{bottom:-2px;right:-2px;border-color:#684090}
 .app-scroll{grid-column:2;grid-row:2;min-width:0;min-height:0;padding:38px clamp(24px,3vw,48px) 55px;overflow-y:auto}
 .app-scroll h2{font-size:40px;letter-spacing:-.035em}.app-scroll>.intro{max-width:650px;margin-bottom:28px}
 .feed-heading h2{font-size:42px}.feed-heading>span{font-size:16px}
 .bridge-strip{padding:19px 22px;border-radius:18px;margin:27px 0 18px}.bridge-strip small{font-size:14px}.bridge-strip b{font-size:23px}
 .feed-tabs{gap:30px;margin-bottom:23px}.feed-tabs button{font-size:15px;padding-bottom:14px}
 .reels{grid-template-columns:repeat(2,minmax(0,1fr));gap:18px;align-items:start}.sample-reel{min-height:365px;padding:20px 17px}.sample-reel h3{font-size:27px}.reel-caption{min-height:162px;padding-left:18px}.reel-badge{font-size:12px}.sample-reel>button,.sample-reel>p,.reel-caption>span{font-size:12px}
 .website-aside{display:block;grid-column:3;grid-row:2;padding:38px 26px 28px 4px;overflow-y:auto}
 .website-verse{border-radius:22px;padding:24px;background:linear-gradient(145deg,#42205f,#75529c);color:#fff;box-shadow:0 10px 30px #4a256216}
 .website-verse .overline{color:#e2c9f8}.website-verse blockquote{margin:20px 0;font:25px/1.45 Georgia,serif}.website-verse>p:last-child{font-size:12px;color:#dbc6ec}
 .website-connect{margin-top:28px}.website-connect h3{font:25px Georgia,serif;margin:0 0 16px;color:#492d62}
 .website-connect button{width:100%;display:flex;align-items:center;text-align:left;gap:10px;border:0;border-bottom:1px solid #e7ddec;background:none;padding:18px 0;color:#7a5795}.website-connect button>span{flex:1}.website-connect b{display:block;font-size:14px;line-height:1.4;font-weight:600}.website-connect small{display:block;font-size:12px;color:#94819f;line-height:1.5;margin-top:4px}.website-connect button>.icon:last-child{width:15px;height:15px}
 .website-footnote{font-size:12px;line-height:1.6;color:#9b89a7;margin-top:24px}
 .home[data-view=help] .app-scroll{grid-column:2/-1;display:grid;grid-template-columns:minmax(0,1.1fr) minmax(290px,.9fr);gap:clamp(28px,4vw,70px);align-items:start}
 .home[data-view=help] .website-aside{display:none}.organization-resources{margin:0;padding:5px 0 0;border:0}.organization-resources>h3{font-size:30px}.organization-card{padding:22px;background:#fff}.organization-list{gap:16px}.choice-grid{gap:13px;margin:24px 0}.choice{min-height:75px;font-size:15px}.needs-panel{max-width:650px}.needs-panel .action{font-size:16px;margin-top:22px}
 .social-post{padding:26px 0}.prayer-post{padding:25px;margin:20px 0}.discussion-composer{padding:23px}.byline .alias-avatar{width:43px;height:43px;font-size:14px}.byline b{font-size:15px}.byline small{font-size:12px}.chips button,.post-actions button{font-size:14px}.feed-note{font-size:13px!important}
 .home[data-view=create] .app-scroll,.home[data-view=profile] .app-scroll,.home[data-view=settings] .app-scroll{width:100%;max-width:800px;justify-self:center}.video-picker{padding:45px 20px}.upload-preview{max-height:420px}
 .signup{display:grid;grid-template-columns:minmax(0,1fr) 450px;align-items:center;gap:clamp(40px,8vw,140px);padding:48px max(60px,calc((100vw - 1160px)/2));background:radial-gradient(ellipse at 9% 5%,#476cbd77,transparent 47%),radial-gradient(ellipse at 50% 110%,#a673c977,transparent 55%),linear-gradient(130deg,#24163e,#3a1c60 65%,#603986)}
 .signup[hidden]{display:none}.signup-welcome{align-self:center}.signup-brand{justify-content:flex-start;gap:14px;font-size:42px;margin-bottom:62px}.signup-brand img{width:64px;height:68px}.signup-story{display:block}.signup-story>p:first-child{font-size:12px;letter-spacing:.19em;color:#cdb3e7}.signup-story h1{font:clamp(62px,6.4vw,92px)/1.04 Georgia,serif;letter-spacing:-.04em;margin:20px 0 28px;color:#faf1ff}.signup-story>p:last-child{font-size:18px;line-height:1.85;color:#dccbe9;margin-bottom:0}.signup-card{padding:32px 36px 25px;border-radius:28px;width:100%;margin:0}.signup h2{font-size:40px}.signup-intro{font-size:16px}.signup-demo{font-size:12px}.signup label{margin-top:17px}.signup input{padding-top:13px;padding-bottom:13px}
 .enter{width:240px;bottom:15%;font-size:16px}.tagline b{font-size:24px}.tagline span{display:block;font-size:12px;margin-top:12px}.wordmark{width:360px}
}
@media(min-width:1500px){.home{grid-template-columns:250px minmax(0,1fr) 340px}.app-scroll{padding-left:60px;padding-right:60px}.website-aside{padding-right:40px}.sample-reel{min-height:440px}.sample-reel h3{font-size:34px;max-width:290px}.sample-reel>img{margin-top:42px}.signup{grid-template-columns:minmax(0,1fr) 470px}}
@media(min-width:900px) and (max-width:1150px){.home{grid-template-columns:200px minmax(0,1fr) 250px}.app-top{padding-left:25px}.app-nav{padding:28px 12px}.app-nav button{gap:12px;padding-left:14px}.reels{grid-template-columns:1fr}.sample-reel{min-height:360px}.website-aside{padding-right:20px}.website-verse{padding:20px}.website-verse blockquote{font-size:23px}.signup{padding:40px;gap:40px;grid-template-columns:minmax(0,1fr) 420px}.signup-card{padding:30px}.signup-story h1{font-size:65px}}
@media(min-width:601px) and (max-width:899px){.app-scroll{padding:30px max(30px,calc((100vw - 620px)/2))}.app-top{padding:20px 30px}.signup{padding:32px}.signup-card{max-width:420px;margin:auto}.signup-brand{margin-bottom:22px}.reels{grid-template-columns:repeat(2,minmax(0,1fr))}.sample-reel{min-height:365px}.sample-reel h3{font-size:25px}.app-nav button{font-size:14px}}
@media(prefers-reduced-motion:reduce){.home{animation:none}}

```

## .openai/hosting.json

```json
{
  "project_id": "appgprj_6aaa4edc7a5c8191a05349af8867f15e",
  "static": {
    "directory": "dist"
  }
}

```

