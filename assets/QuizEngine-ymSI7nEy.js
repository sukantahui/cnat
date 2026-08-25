import{j as e,bd as je,b as i,be as ne}from"./vendor-react-core-Doz9nIC6.js";import{C as ye}from"./CodeBlockGeneral-DeFweuXn.js";import{c as q}from"./index-DvDr7AoL.js";import{r as ie,ab as Ne,s as we,a2 as Se,bS as ke}from"./vendor-icons-CbUXUJ65.js";const Ce="/assets/signature-CtsmCGqM.png",Ae="/assets/stamp-DpSj6svg.png";function oe(){const u="certificate_counter";let r=parseInt(localStorage.getItem(u),10);(isNaN(r)||r<1)&&(r=1);const n=new Date().getFullYear(),c=String(r).padStart(5,"0"),C=`CAT-${n}-${c}`;return localStorage.setItem(u,r+1),C}function _e({studentName:u="STUDENT NAME",score:r=0,total:n=0,title:c="Module Test",passPercent:C=60,level:y="All Levels"}){const D=async()=>{const h=n?(r/n*100).toFixed(2):"0.00",x=h>=C,N=h>=85?"A+":h>=70?"A":h>=60?"B":h>=50?"C":"D",f=new Date().toLocaleDateString("en-IN",{day:"2-digit",month:"short",year:"numeric"}),w=oe(),A=`https://www.codernaccotax.co.in/verify?cert=${w}`,o=await je.toDataURL(A),_=`
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8" />
<title>Certificate</title>

<style>
  @page { size: A4; margin: 0; }
  body { margin:0; padding:0; font-family:'Times New Roman', serif; background:#ffffff; }

  .page {
    width:210mm; height:297mm; padding:12mm 16mm 10mm 16mm; box-sizing:border-box;
    position:relative;
  }

  .outer-frame {
    width:100%; height:100%; border:6px solid #d4af37; padding:10mm; box-sizing:border-box;
  }

  .inner-frame {
    width:100%; height:100%; border:2px solid #b28c1a; padding:10mm; text-align:center;
    box-sizing:border-box; position:relative;
  }

  .header { font-size:20px; font-weight:bold; color:#1e3a8a; }
  .subheader { font-size:11px; color:#555; margin-top:2px; }
  .cert-title { font-size:28px; font-weight:800; margin-top:12px; }

  .student-name {
    margin-top:4px; font-size:22px; font-weight:bold;
    display:inline-block; padding:2px 20px; border-bottom:1px solid #000;
    text-transform:uppercase;
  }

  .score-box { margin-top:10px; font-size:14px; font-weight:bold; }
  .qr-box { margin-top:10px; }
  .small-text { margin-top:4px; font-size:12px; }

  .footer {
    display:flex; justify-content:space-between;
    margin-top:22mm; padding:0 20mm;
  }

  .sign-block { text-align:center; font-size:12px; }
  .sign-block img { width:70px; }

  .seal img { width:80px; }

  .cert-number { text-align:right; font-size:12px; margin-bottom:6px; }

  .watermark {
    position:absolute; top:42%; left:50%; transform:translate(-50%,-50%);
    font-size:50px; color:#d0d7df; opacity:0.22; font-weight:700;
  }
</style>
</head>

<body>
<div class="page">
  <div class="outer-frame">
    <div class="inner-frame">

      <div class="cert-number">Certificate No: ${w}</div>

      <div class="header">Coder & AccoTax</div>
      <div class="subheader">Barrackpore · www.codernaccotax.co.in</div>

      <div class="cert-title">Certificate of Completion</div>

      <div class="small-text">This certifies that</div>
      <div class="student-name">${u}</div>

      <div class="small-text">has successfully completed</div>

      <h3 style="margin-top:6px;">${c}</h3>

      <div class="small-text">Test Level: <b>${y}</b></div>

      <div class="score-box">
        Score: ${r}/${n} (${h}%)
        <br/>Result: <b style="color:${x?"green":"red"};">${x?"PASSED":"NOT PASSED"}</b>
        | Grade: ${N}
      </div>

      <div class="small-text">Issued on: ${f}</div>

      <div class="qr-box">
        <img src="${o}" width="110" />
        <div class="small-text">Scan to verify certificate</div>
      </div>

      <div class="watermark">Coder & AccoTax</div>

      <div class="footer">
        <div class="sign-block">
          <img src="${Ce}" />
          <div>____________________</div>
          <div>Sukanta Hui</div>
          <div>Director</div>
          <div>Coder & AccoTax</div>
        </div>

        <div class="seal">
          <img src="${Ae}" />
          <div style="font-size:11px; text-align:center;">Official Seal</div>
        </div>
      </div>

    </div>
  </div>
</div>

<script> window.print(); <\/script>
</body>
</html>
`,v=window.open("","_blank");v.document.write(_),v.document.close()},z=()=>{const h=oe(),x=n?(r/n*100).toFixed(2):"0.00",N=x>=85?"A+ 🌟":x>=70?"A 👍":x>=60?"B 🙂":x>=50?"C ⚠️":"D ❌",f=x>=C,w=f?"PASSED ✅":"NOT PASSED ❌",A=f?`🎉 *Congratulations!*  
Your dedication and hard work have brought you success.  
Keep learning, keep growing — the future is yours!`:`💡 *Don't be discouraged!*  
Every attempt makes you stronger.  
Review your mistakes, try again — success is waiting for you! 💪`,o=`🏅 *CERTIFICATE OF COMPLETION*
━━━━━━━━━━━━━━━━━━━━━━

👤 *Student:* ${u}
📘 *Module:* ${c}
🎚 *Level:* ${y}

📊 *Score:* ${r}/${n}
📈 *Percentage:* ${x}%
🎖 *Result:* ${w}
🏷 *Grade:* ${N}

🗓 *Issued on:* ${new Date().toLocaleDateString("en-IN")}
🔢 *Certificate No:* ${h}

🔗 Verify:
https://www.codernaccotax.co.in/verify?cert=${h}

━━━━━━━━━━━━━━━━━━━━━━
💬 *Message from Coder & AccoTax*
${A}

🏫 Coder & AccoTax · Barrackpore
💻 www.codernaccotax.co.in
━━━━━━━━━━━━━━━━━━━━━━`,_=`https://wa.me/919432456083?text=${encodeURIComponent(o)}`;window.open(_,"_blank")};return e.jsxs(e.Fragment,{children:[e.jsx("button",{onClick:D,className:"inline-flex items-center gap-2 bg-sky-600 hover:bg-sky-500 px-4 py-2 rounded-full text-white text-xs font-semibold",children:"Download Certificate"}),e.jsx("button",{onClick:z,className:"inline-flex items-center gap-2 bg-green-600 hover:bg-green-500 px-4 py-2 rounded-full text-white text-xs font-semibold ml-2",children:"Send to WhatsApp"})]})}const de="quizEngine_",Ee="quizLeaderboard_";function ce(u){const r=[...u];for(let n=r.length-1;n>0;n--){const c=Math.floor(Math.random()*(n+1));[r[n],r[c]]=[r[c],r[n]]}return r}function Te(u,r){if(!Array.isArray(u))return[];const n=ce(u),c=r?Math.min(r,n.length):n.length;return n.slice(0,c).map(y=>{const D=y.options.map((x,N)=>({text:x,originalIndex:N})),z=ce(D),h=z.findIndex(x=>x.originalIndex===y.answerIndex);return{...y,options:z.map(x=>x.text),answerIndex:h}})}function De({title:u="Quiz Test",questions:r=[],testId:n="test_default",questionLimit:c=25,certificateHeader:C="Coder & AccoTax",certificateSubtitle:y="Barrackpore · www.codernaccotax.co.in",certificateTitle:D="Certificate of Completion",leaderboardTitle:z="Coder & AccoTax Leaderboard",showStudentName:h=!0,passPercent:x=60,onResultSubmit:N}){const f=de+n,w=Ee+n,A=de+"best_"+n,[o,_]=i.useState([]),[v,Q]=i.useState({}),[E,B]=i.useState({}),[j,P]=i.useState(0),[$,U]=i.useState(!1),[O,F]=i.useState(!1),[S,M]=i.useState(""),[I,J]=i.useState(!1),[K,H]=i.useState([]),[xe,W]=i.useState({}),[L,X]=i.useState(()=>Number.isFinite(c)&&c>0?c:25),[g,ee]=i.useState("All"),te=i.useRef([]),G=i.useRef(!1),V=typeof navigator<"u"&&/Android|iPhone|iPad|iPod|IEMobile|Opera Mini/i.test(navigator.userAgent);i.useEffect(()=>{V&&!I&&(M("MOBILE USER"),J(!0))},[V,I]);const T=i.useMemo(()=>{if(!Array.isArray(r))return[];if(g==="All")return r;const t=g.toLowerCase();let s=r.filter(a=>a.level?String(a.level).toLowerCase()===t:!0);return s.length||(s=r),s},[r,g]);i.useEffect(()=>{const t=localStorage.getItem(w);if(t)try{const a=JSON.parse(t);H(Array.isArray(a)?a:[])}catch{H([])}const s=localStorage.getItem(A);if(s)try{const a=JSON.parse(s);a&&typeof a=="object"&&W(a)}catch{W({})}},[w,A]),i.useEffect(()=>{if(!I||!T.length)return;const t=localStorage.getItem(f);if(t)try{const s=JSON.parse(t);Array.isArray(s.quiz)&&s.quiz.length&&(_(s.quiz),Q(s.responses||{}),B(s.submitted||{}),P(s.score||0),U(!!s.isFinished),F(!1),X(s.quiz.length))}catch{}},[I,T,f]),i.useEffect(()=>{if(!o.length)return;const t={quiz:o,responses:v,submitted:E,score:j,isFinished:$};localStorage.setItem(f,JSON.stringify(t))},[o,v,E,j,$,f]);const me=t=>{const s=te.current[t];if(!s)return;const a=s.getBoundingClientRect().top+window.scrollY-120;window.scrollTo({top:a,behavior:"smooth"})},se=()=>{if(!T.length)return;const t=L==="All"?T.length:Math.min(Number(L)||c||25,T.length);if(t<=0)return;const s=Te(T,t);_(s),Q({}),B({}),P(0),U(!1),F(!1),G.current=!1,localStorage.setItem(f,JSON.stringify({quiz:s,responses:{},submitted:{},score:0,isFinished:!1})),window.scrollTo({top:0,behavior:"smooth"})},pe=(t,s)=>{E[t]||Q(a=>({...a,[t]:s}))},ue=(t,s)=>{if(E[t.id])return;v[t.id]===t.answerIndex&&P(m=>m+1),B(m=>{const p={...m,[t.id]:!0};return Object.keys(p).length===o.length&&U(!0),p}),!O&&s+1<o.length&&setTimeout(()=>me(s+1),600)},he=()=>{localStorage.removeItem(f),se()},be=()=>{localStorage.removeItem(f),_([]),Q({}),B({}),P(0),U(!1),F(!1),M(""),J(!1),X(Number.isFinite(c)&&c>0?c:25),ee("All"),G.current=!1,window.scrollTo({top:0,behavior:"smooth"})},ae=o.filter(t=>E[t.id]&&v[t.id]!==t.answerIndex),fe=O?ae:o;if(i.useEffect(()=>{if(!$||!o.length||G.current)return;const t=o.length,s=t?Number((j/t*100).toFixed(2)):0,a={name:S.trim()||"Guest",score:j,total:t,percent:s,date:new Date().toISOString()};H(m=>{const p=[...m,a];p.sort((d,b)=>b.percent!==d.percent?b.percent-d.percent:b.score!==d.score?b.score-d.score:new Date(b.date)-new Date(d.date));const l=p.slice(0,10);return localStorage.setItem(w,JSON.stringify(l)),l}),W(m=>{const p={...m},l=t,d=p[l];return(!d||s>d.percent)&&(p[l]={score:j,total:t,percent:s,date:a.date}),localStorage.setItem(A,JSON.stringify(p)),p}),typeof N=="function"&&N({...a,testId:n}),G.current=!0},[$,j,o.length]),!I&&!V){const t=s=>{s&&s.preventDefault();const a=S.trim();a&&(document.activeElement&&document.activeElement.blur&&document.activeElement.blur(),setTimeout(()=>{M(a.toUpperCase()),J(!0)},30))};return e.jsx("section",{className:"min-h-[60vh] flex items-center justify-center px-4",children:e.jsxs("div",{className:"w-full max-w-md rounded-3xl bg-slate-950/90 border border-slate-800 shadow-[0_18px_50px_rgba(0,0,0,0.8)] p-6 space-y-4",children:[e.jsxs("div",{className:"flex items-center gap-3 mb-2",children:[e.jsx("div",{className:"h-9 w-9 rounded-2xl bg-sky-500/10 border border-sky-500/40 flex items-center justify-center",children:e.jsx("img",{src:q,alt:"Coder & AccoTax",className:"h-6 w-6 object-contain"})}),e.jsxs("div",{children:[e.jsx("p",{className:"text-[11px] uppercase tracking-[0.25em] text-slate-400",children:"Coder & AccoTax"}),e.jsx("h1",{className:"text-sm font-semibold text-sky-100",children:"Module Test · Candidate Entry"})]})]}),e.jsx("h2",{className:"text-lg font-bold text-sky-200",children:"Enter Student Name to Begin"}),e.jsxs("p",{className:"text-xs text-slate-400",children:["This name will be printed on the"," ",e.jsx("span",{className:"text-sky-300 font-semibold",children:"certificate"})," and shown on the"," ",e.jsx("span",{className:"text-emerald-300 font-semibold",children:"leaderboard"}),"."]}),e.jsx("input",{type:"text",placeholder:"Student Name",value:S,onChange:s=>M(s.target.value.toUpperCase()),className:"w-full px-4 py-2.5 rounded-2xl bg-slate-950 border border-slate-700 text-slate-100 placeholder:text-slate-500 focus:ring-1 focus:ring-sky-500 focus:outline-none text-sm"}),e.jsx("button",{type:"button",onClick:t,className:`w-full py-2.5 rounded-2xl text-white font-semibold text-sm transition ${S.trim()?"bg-sky-600 hover:bg-sky-500 shadow-[0_10px_30px_rgba(56,189,248,0.3)]":"bg-slate-800 text-slate-500 cursor-not-allowed"}`,children:"Continue to Test Setup"}),e.jsxs("p",{className:"text-[11px] text-slate-500 text-center pt-1",children:["Tip: Use your"," ",e.jsx("span",{className:"text-sky-300",children:"full official name"})," for printed certificates."]})]})})}if(I&&!o.length){const t=typeof window<"u"?window.location.href:"https://www.codernaccotax.co.in",s=T.length,m=[5,10,15,20,25,30,40,50,"All"].filter(l=>l==="All"||l<=s),p=L==="All"?s:Math.min(Number(L)||c||25,s);return e.jsxs("section",{className:"max-w-4xl mx-auto mt-8 mb-10 px-3 space-y-8",children:[e.jsxs("header",{className:"relative rounded-3xl bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 border border-slate-800/80 shadow-[0_18px_60px_rgba(0,0,0,0.85)] p-6 overflow-hidden",children:[e.jsx("div",{className:"absolute -top-24 -right-10 h-48 w-48 rounded-full bg-sky-500/20 blur-3xl opacity-60"}),e.jsx("div",{className:"absolute -bottom-24 -left-10 h-48 w-48 rounded-full bg-violet-500/20 blur-3xl opacity-60"}),e.jsxs("div",{className:"relative z-10 space-y-3",children:[e.jsxs("div",{className:"flex items-center justify-between gap-3",children:[e.jsxs("div",{children:[e.jsx("p",{className:"text-[11px] uppercase tracking-[0.25em] text-slate-400",children:"Coder & AccoTax · Online Assessment"}),e.jsx("h2",{className:"text-xl md:text-2xl font-bold text-sky-100 mt-1",children:u}),e.jsxs("p",{className:"text-xs text-slate-400 mt-1",children:["Candidate:"," ",e.jsx("span",{className:"text-sky-300 font-semibold",children:S||"Guest"})]})]}),e.jsxs("div",{className:"hidden sm:flex flex-col items-end gap-2 text-[11px]",children:[e.jsxs("div",{className:"inline-flex items-center gap-1 rounded-full bg-slate-900/80 border border-slate-700 px-2.5 py-1",children:[e.jsx("span",{className:"h-1.5 w-1.5 rounded-full bg-emerald-400"}),e.jsx("span",{className:"text-slate-200 font-medium",children:"Ready to Start"})]}),e.jsxs("p",{className:"text-slate-500",children:["Question pool:"," ",e.jsx("span",{className:"text-sky-300 font-semibold",children:s})]})]})]}),e.jsxs("div",{className:"flex flex-wrap gap-2 text-[11px]",children:[e.jsxs("span",{className:"inline-flex items-center gap-1 rounded-full bg-slate-900/80 border border-slate-700 px-2.5 py-1 text-slate-300",children:["Selected Level:"," ",e.jsx("span",{className:"text-emerald-300 font-semibold",children:g==="All"?"All Levels":g.charAt(0).toUpperCase()+g.slice(1)})]}),e.jsxs("span",{className:"inline-flex items-center gap-1 rounded-full bg-slate-900/80 border border-slate-700 px-2.5 py-1 text-slate-300",children:["Planned Questions:"," ",e.jsx("span",{className:"text-sky-300 font-semibold",children:p})]})]})]})]}),e.jsxs("div",{className:"p-5 rounded-2xl bg-slate-950/90 border border-slate-800 shadow-inner shadow-black/40",children:[e.jsxs("div",{className:"flex items-center justify-between gap-2 mb-2",children:[e.jsx("p",{className:"text-xs font-semibold text-slate-200",children:"1. Select Difficulty Level"}),e.jsx("p",{className:"text-[10px] text-slate-500",children:"Un-tagged questions appear in all levels"})]}),e.jsx("div",{className:"flex flex-wrap gap-2",children:["All","beginner","moderate","advanced"].map(l=>{const d=g===l,b=l==="All"?"All Levels":l.charAt(0).toUpperCase()+l.slice(1);return e.jsxs("button",{type:"button",onClick:()=>ee(l),className:`px-3 py-1.5 rounded-full text-[11px] border transition flex items-center gap-1 ${d?"bg-emerald-600 text-white border-emerald-400 shadow-[0_8px_25px_rgba(16,185,129,0.4)]":"bg-slate-900 text-slate-300 border-slate-700 hover:bg-slate-800"}`,children:[d&&e.jsx("span",{className:"h-1.5 w-1.5 rounded-full bg-emerald-200"}),b]},l)})})]}),e.jsxs("div",{className:"p-5 rounded-2xl bg-slate-950/90 border border-slate-800 shadow-inner shadow-black/40 space-y-3",children:[e.jsx("p",{className:"text-xs font-semibold text-slate-200",children:"2. Select Number of Questions"}),e.jsx("div",{className:"flex flex-wrap gap-2",children:m.map(l=>{const d=l,b=L===d;return e.jsx("button",{type:"button",onClick:()=>X(d),className:`px-3 py-1.5 rounded-full text-[11px] border transition ${b?"bg-sky-600 text-white border-sky-400 shadow-[0_8px_25px_rgba(56,189,248,0.4)]":"bg-slate-900 text-slate-300 border-slate-700 hover:bg-slate-800"}`,children:l==="All"?"All":l},l)})}),e.jsx("div",{className:"flex items-center justify-between gap-2 text-[11px] text-slate-400",children:e.jsxs("span",{children:["You will get"," ",e.jsx("span",{className:"text-sky-300 font-semibold",children:p})," ","question(s) from"," ",e.jsx("span",{className:"text-slate-200 font-semibold",children:s})," ","in this test."]})}),e.jsx("button",{type:"button",onClick:se,className:"mt-2 w-full py-2.5 rounded-2xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-semibold shadow-[0_14px_40px_rgba(16,185,129,0.55)] transition",children:"Start Test Now"})]}),e.jsxs("div",{className:"flex flex-col items-center gap-2",children:[e.jsx("p",{className:"text-[11px] text-slate-400",children:"Scan to open this test on another device:"}),e.jsxs("div",{className:"relative p-4 rounded-2xl bg-slate-950 border border-slate-800 shadow-[0_14px_40px_rgba(15,23,42,0.9)]",children:[e.jsx("div",{className:"absolute inset-0 rounded-2xl bg-sky-500/10 blur-xl opacity-40 pointer-events-none"}),e.jsxs("div",{className:"relative bg-slate-900 p-3 rounded-xl border border-slate-700",children:[e.jsx(ne,{value:t,size:150,level:"H"}),e.jsx("div",{className:"absolute inset-0 flex items-center justify-center pointer-events-none",children:e.jsx("div",{className:"bg-slate-950 p-1 rounded-lg border border-slate-600",children:e.jsx("img",{src:q,alt:"logo",className:"h-8 w-8"})})})]})]}),e.jsx("p",{className:"text-[10px] text-slate-500 break-all text-center",children:t})]})]})}if(!o.length)return e.jsx("div",{className:"max-w-5xl mx-auto text-slate-300 text-sm",children:"Loading questions…"});const re=Object.keys(E).length,k=o.length,le=k?Math.round(re/k*100):0,ge=k?(j/k*100).toFixed(1):"0.0",R=xe[k]||null,ve=typeof window<"u"?window.location.href:"https://www.codernaccotax.co.in";return e.jsxs("section",{className:"max-w-5xl mx-auto space-y-8 mb-10 px-3",children:[e.jsxs("header",{className:"relative overflow-hidden rounded-3xl border border-slate-800 bg-gradient-to-r from-slate-950 via-slate-900 to-slate-950 px-4 py-5 md:px-6 md:py-6 shadow-[0_20px_60px_rgba(0,0,0,0.9)]",children:[e.jsxs("div",{className:"absolute inset-0 pointer-events-none opacity-50",children:[e.jsx("div",{className:"absolute -top-28 -left-16 h-44 w-44 rounded-full bg-sky-500/30 blur-3xl"}),e.jsx("div",{className:"absolute -bottom-28 -right-10 h-52 w-52 rounded-full bg-violet-500/25 blur-3xl"})]}),e.jsxs("div",{className:"relative z-10 space-y-4",children:[e.jsxs("div",{className:"flex flex-col md:flex-row md:items-center md:justify-between gap-3",children:[e.jsxs("div",{children:[e.jsx("p",{className:"text-[11px] uppercase tracking-[0.25em] text-slate-400 mb-1",children:"Coder & AccoTax · Module Test"}),e.jsx("h2",{className:"text-xl md:text-2xl font-bold text-sky-100",children:u}),e.jsxs("p",{className:"text-[11px] text-slate-400 mt-1",children:["Candidate:"," ",e.jsx("span",{className:"text-sky-300 font-semibold",children:S||"Guest"})]}),e.jsxs("div",{className:"mt-2 flex flex-wrap gap-2 text-[11px]",children:[e.jsxs("span",{className:"inline-flex items-center gap-1 rounded-full bg-slate-900/80 border border-slate-700 px-2.5 py-1 text-slate-300",children:["Level:"," ",e.jsx("span",{className:"text-emerald-300 font-semibold",children:g==="All"?"All Levels":g.charAt(0).toUpperCase()+g.slice(1)})]}),e.jsxs("span",{className:"inline-flex items-center gap-1 rounded-full bg-slate-900/80 border border-slate-700 px-2.5 py-1 text-slate-300",children:["Questions in this test:"," ",e.jsx("span",{className:"text-sky-300 font-semibold",children:k})]})]})]}),e.jsxs("div",{className:"flex flex-col items-end gap-2 text-[11px]",children:[e.jsxs("span",{className:"inline-flex items-center gap-1 rounded-full border border-sky-500/40 bg-sky-500/10 px-3 py-1 text-sky-100",children:[e.jsx("span",{className:"h-1.5 w-1.5 rounded-full bg-emerald-400"}),re,"/",k," submitted"]}),e.jsxs("span",{className:"inline-flex items-center gap-1 rounded-full border border-emerald-500/40 bg-emerald-500/10 px-3 py-1 text-emerald-100",children:["Score: ",j," (",ge,"%)"]}),R&&e.jsxs("span",{className:"inline-flex items-center gap-1 rounded-full border border-amber-500/40 bg-amber-500/10 px-3 py-1 text-amber-100",children:["Best: ",R.score,"/",R.total," (",R.percent.toFixed?R.percent.toFixed(1):R.percent,"%)"]}),O&&e.jsxs("span",{className:"inline-flex items-center gap-1 rounded-full border border-amber-500/40 bg-amber-500/10 px-3 py-1 text-amber-100",children:[e.jsx(ie,{size:12}),"Review incorrect only"]})]})]}),e.jsxs("div",{className:"space-y-1",children:[e.jsxs("div",{className:"flex justify-between text-[11px] text-slate-400",children:[e.jsx("span",{children:"Progress"}),e.jsxs("span",{children:[le,"%"]})]}),e.jsx("div",{className:"h-2 w-full rounded-full bg-slate-900 overflow-hidden",children:e.jsx("div",{className:"h-2 rounded-full bg-gradient-to-r from-sky-400 via-emerald-400 to-violet-400 transition-all",style:{width:`${le}%`}})})]}),e.jsxs("div",{className:"flex flex-wrap gap-2 pt-1",children:[e.jsx("button",{type:"button",onClick:be,className:`inline-flex items-center gap-1.5 rounded-full bg-rose-600/90 px-3 py-1.5 \r
                text-[11px] font-medium text-white border border-rose-700 \r
                hover:bg-rose-500 shadow-[0_10px_30px_rgba(248,113,113,0.55)] transition`,children:"Reset Test"}),e.jsxs("button",{type:"button",onClick:he,className:"inline-flex items-center gap-1.5 rounded-full bg-slate-900/80 px-3 py-1.5 text-[11px] font-medium text-slate-100 border border-slate-700 hover:border-sky-500 hover:text-sky-100 hover:bg-slate-900 transition",children:[e.jsx(Ne,{size:12}),"Restart (new ",k," Qs)"]}),!O&&ae.length>0&&$&&e.jsxs("button",{type:"button",onClick:()=>F(!0),className:"inline-flex items-center gap-1.5 rounded-full bg-amber-500/10 px-3 py-1.5 text-[11px] font-medium text-amber-100 border border-amber-500/60 hover:bg-amber-500/20 transition",children:[e.jsx(we,{size:12}),"Review incorrect only"]}),O&&e.jsxs("button",{type:"button",onClick:()=>F(!1),className:"inline-flex items-center gap-1.5 rounded-full bg-slate-900/80 px-3 py-1.5 text-[11px] font-medium text-slate-100 border border-slate-600 hover:border-slate-400 transition",children:[e.jsx(ie,{size:12}),"Exit review mode"]})]}),e.jsxs("div",{className:"mt-3 flex items-center gap-3 text-[11px]",children:[e.jsxs("div",{className:"relative p-2 rounded-xl bg-slate-950 border border-slate-700",children:[e.jsx(ne,{value:ve,size:80,level:"H"}),e.jsx("div",{className:"absolute inset-0 flex items-center justify-center pointer-events-none",children:e.jsx("div",{className:"bg-slate-950 p-0.5 rounded-md border border-slate-600",children:e.jsx("img",{src:q,alt:"logo",className:"h-4 w-4"})})})]}),e.jsx("p",{className:"text-slate-400",children:"Scan to continue this quiz on another device."})]}),$&&e.jsxs("div",{className:"mt-3 rounded-2xl border border-slate-700 bg-slate-950/70 px-3 py-3 flex flex-col md:flex-row md:items-center gap-3",children:[e.jsxs("div",{className:"flex items-center gap-2 text-xs text-slate-200",children:[e.jsx("div",{className:"inline-flex h-7 w-7 items-center justify-center rounded-full bg-sky-500/15 border border-sky-500/50",children:e.jsx(Se,{size:14,className:"text-sky-300"})}),e.jsxs("div",{children:[e.jsx("p",{className:"font-medium text-slate-100",children:"Test completed – generate certificate"}),e.jsx("p",{className:"text-[11px] text-slate-400",children:"The name shown above will appear on the printed certificate."})]})]}),e.jsxs("div",{className:"flex-1 flex flex-col sm:flex-row gap-2 md:justify-end",children:[h&&e.jsx("input",{type:"text",placeholder:"Student name",value:S,onChange:t=>M(t.target.value.toUpperCase()),className:"flex-1 px-3 py-1.5 rounded-full bg-slate-950 border border-slate-700 text-[11px] text-slate-100 placeholder:text-slate-500 focus:outline-none focus:ring-1 focus:ring-sky-500"}),e.jsx(_e,{studentName:S||"Student Name",score:j,total:o.length,title:u,level:g,certificateHeader:C,certificateSubtitle:y,certificateTitle:D,passPercent:x})]})]}),K.length>0&&e.jsxs("div",{className:"mt-3 rounded-2xl border border-slate-800 bg-slate-950/80 px-3 py-3 space-y-2",children:[e.jsx("div",{className:"flex items-center justify-between gap-2",children:e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx("span",{className:"inline-flex h-7 w-7 items-center justify-center rounded-full bg-amber-500/10 border border-amber-500/50",children:e.jsx(ke,{size:14,className:"text-amber-300"})}),e.jsxs("div",{children:[e.jsx("h3",{className:"text-xs font-semibold text-amber-100",children:z}),e.jsxs("p",{className:"text-[11px] text-slate-400",children:["Top ",K.length," scores recorded locally on this device."]})]})]})}),e.jsx("div",{className:"overflow-x-auto rounded-xl border border-slate-800 bg-slate-950/90",children:e.jsxs("table",{className:"w-full text-[11px] text-slate-100",children:[e.jsx("thead",{className:"bg-slate-900/80 text-slate-400",children:e.jsxs("tr",{children:[e.jsx("th",{className:"py-1.5 px-2 text-left",children:"#"}),e.jsx("th",{className:"py-1.5 px-2 text-left",children:"Name"}),e.jsx("th",{className:"py-1.5 px-2 text-right",children:"Score"}),e.jsx("th",{className:"py-1.5 px-2 text-right",children:"%"}),e.jsx("th",{className:"py-1.5 px-2 text-right",children:"Date"})]})}),e.jsx("tbody",{children:K.map((t,s)=>{const a=new Date(t.date).toLocaleDateString("en-IN",{day:"2-digit",month:"short"}),m=typeof t.percent=="number"?t.percent.toFixed(1):t.percent;return e.jsxs("tr",{className:"border-t border-slate-800/70 hover:bg-slate-900/70",children:[e.jsx("td",{className:"py-1.5 px-2",children:s+1}),e.jsx("td",{className:"py-1.5 px-2",children:t.name}),e.jsxs("td",{className:"py-1.5 px-2 text-right",children:[t.score,"/",t.total]}),e.jsx("td",{className:"py-1.5 px-2 text-right",children:m}),e.jsx("td",{className:"py-1.5 px-2 text-right",children:a})]},s)})})]})})]})]})]}),e.jsx("div",{className:"space-y-6",children:fe.map(t=>{const s=o.findIndex(l=>l.id===t.id),a=v[t.id],m=E[t.id],p=m&&a===t.answerIndex;return e.jsxs("article",{ref:l=>te.current[s]=l,className:"border border-slate-800 bg-slate-950/80 rounded-2xl p-4 md:p-5 shadow-[0_12px_40px_rgba(0,0,0,0.85)] space-y-3 transition-transform duration-150 hover:-translate-y-0.5",children:[e.jsxs("div",{className:"flex items-start justify-between gap-3",children:[e.jsxs("div",{children:[e.jsxs("div",{className:"flex flex-wrap items-center gap-2 mb-1",children:[e.jsxs("span",{className:"inline-flex h-6 min-w-[2rem] items-center justify-center rounded-full bg-slate-900 text-[11px] text-slate-300 border border-slate-700",children:["Q",s+1]}),t.topic&&e.jsx("span",{className:"inline-flex items-center rounded-full bg-sky-500/10 border border-sky-500/40 px-2 py-0.5 text-[10px] uppercase tracking-wide text-sky-200",children:t.topic}),t.level&&e.jsx("span",{className:"inline-flex items-center rounded-full bg-emerald-500/10 border border-emerald-500/40 px-2 py-0.5 text-[10px] uppercase tracking-wide text-emerald-200",children:String(t.level)})]}),e.jsx("h3",{className:"font-semibold text-slate-50 text-sm md:text-base leading-snug",children:t.question})]}),m&&e.jsx("span",{className:`inline-flex items-center rounded-full px-2.5 py-1 text-[10px] font-semibold border ${p?"bg-emerald-500/15 text-emerald-200 border-emerald-500/60":"bg-rose-500/15 text-rose-200 border-rose-500/60"}`,children:p?"Correct":"Incorrect"})]}),t.code&&e.jsx("div",{className:"mt-1",children:e.jsx(ye,{code:t.code,language:"javascript"})}),e.jsx("div",{className:"space-y-1 mt-1",children:t.options.map((l,d)=>{const b=`q${t.id}_${d}`,Z=a===d;let Y="border-slate-700 bg-slate-950 hover:bg-slate-900";return m?d===t.answerIndex?Y="border-emerald-500 bg-emerald-900/40 text-emerald-50":Z&&(Y="border-rose-500 bg-rose-900/40 text-rose-100"):Z&&(Y="border-sky-500 bg-sky-900/40 text-sky-50"),e.jsxs("label",{htmlFor:b,className:`cursor-pointer px-3 py-2 border rounded-xl flex gap-2 text-sm transition ${Y}`,children:[e.jsx("input",{id:b,type:"radio",disabled:m,checked:Z,onChange:()=>pe(t.id,d),className:"mt-0.5 accent-sky-500"}),e.jsx("span",{className:"leading-snug",children:l})]},b)})}),m?e.jsxs("div",{className:"space-y-2 mt-2",children:[e.jsxs("p",{className:"text-xs text-emerald-400",children:["Correct answer:"," ",e.jsx("span",{className:"font-semibold",children:t.options[t.answerIndex]})]}),t.explanation&&e.jsxs("div",{className:"p-3 rounded-xl bg-slate-950 border border-slate-700 text-sm text-slate-200",children:[e.jsx("p",{className:"text-[11px] uppercase tracking-[0.18em] text-sky-400 mb-1",children:"Explanation"}),e.jsx("p",{className:"text-sm leading-relaxed",children:t.explanation})]})]}):e.jsx("button",{type:"button",onClick:()=>ue(t,s),disabled:v[t.id]==null,className:"mt-2 inline-flex items-center justify-center px-4 py-2 rounded-full bg-sky-600 hover:bg-sky-500 disabled:bg-slate-800 disabled:text-slate-500 text-white text-xs font-semibold transition",children:"Submit answer"})]},t.id)})})]})}export{De as Q};
