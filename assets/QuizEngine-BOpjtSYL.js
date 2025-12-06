import{c as Y,r as i,j as e,e as W,f as de}from"./index-COKJF6Tt.js";import{P as J}from"./prism-json-BFDU5njd.js";/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ce=[["path",{d:"m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526",key:"1yiouv"}],["circle",{cx:"12",cy:"8",r:"6",key:"1vp47v"}]],Z=Y("award",ce);/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xe=[["path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",key:"1357e3"}],["path",{d:"M3 3v5h5",key:"1xhq8a"}]],me=Y("rotate-ccw",xe);/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pe=[["path",{d:"M10 14.66v1.626a2 2 0 0 1-.976 1.696A5 5 0 0 0 7 21.978",key:"1n3hpd"}],["path",{d:"M14 14.66v1.626a2 2 0 0 0 .976 1.696A5 5 0 0 1 17 21.978",key:"rfe1zi"}],["path",{d:"M18 9h1.5a1 1 0 0 0 0-5H18",key:"7xy6bh"}],["path",{d:"M4 22h16",key:"57wxv0"}],["path",{d:"M6 9a6 6 0 0 0 12 0V3a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1z",key:"1mhfuq"}],["path",{d:"M6 9H4.5a1 1 0 0 1 0-5H6",key:"tex48p"}]],he=Y("trophy",pe);function ue({code:m="",initialCode:r="",language:n="javascript"}){const l=r||m,[j,y]=i.useState("");return i.useEffect(()=>{const N=J.highlight(l,J.languages[n]||J.languages.javascript,n);y(N)},[l,n]),e.jsx("div",{className:"my-4 rounded-xl overflow-hidden border border-slate-700 bg-[#0f172a] shadow-lg",children:e.jsx("pre",{className:"p-4 overflow-auto text-sm leading-6",children:e.jsx("code",{className:`language-${n}`,dangerouslySetInnerHTML:{__html:j}})})})}const be="quizEngine_",fe="quizLeaderboard_";function q(m){const r=[...m];for(let n=r.length-1;n>0;n--){const l=Math.floor(Math.random()*(n+1));[r[n],r[l]]=[r[l],r[n]]}return r}function _(m,r){if(!Array.isArray(m))return[];const n=q(m),l=r?Math.min(r,n.length):n.length;return n.slice(0,l).map(y=>{const N=y.options.map((b,f)=>({text:b,originalIndex:f})),C=q(N),F=C.findIndex(b=>b.originalIndex===y.answerIndex);return{...y,options:C.map(b=>b.text),answerIndex:F}})}function ge(){const m="certificate_counter";let r=parseInt(localStorage.getItem(m),10);(isNaN(r)||r<1)&&(r=1);const n=new Date().getFullYear(),l=String(r).padStart(5,"0"),j=`CAT-${n}-${l}`;return localStorage.setItem(m,r+1),j}function je({title:m="Quiz Test",questions:r=[],testId:n="test_default",questionLimit:l=25,certificateHeader:j="Coder & AccoTax – Premium Computer Training Institute",certificateSubtitle:y="Barrackpore · www.codernaccotax.co.in",certificateTitle:N="Certificate of Completion",leaderboardTitle:C="Coder & AccoTax Leaderboard",showStudentName:F=!0,onResultSubmit:b}){const f=be+n,O=fe+n,[d,I]=i.useState([]),[w,A]=i.useState({}),[v,E]=i.useState({}),[h,$]=i.useState(0),[g,R]=i.useState(!1),[S,T]=i.useState(!1),[D,Q]=i.useState(""),[P,H]=i.useState([]),[k,L]=i.useState(l),K=i.useRef([]),V=i.useRef(!1);i.useEffect(()=>{const t=localStorage.getItem(O);if(t)try{const s=JSON.parse(t);H(Array.isArray(s)?s:[])}catch{H([])}},[O]),i.useEffect(()=>{const t=localStorage.getItem(f);if(t)try{const a=JSON.parse(t),o=a.quiz||_(r,l);I(o),A(a.responses||{}),E(a.submitted||{}),$(a.score||0),R(a.isFinished||!1);const x=a.quiz&&a.quiz.length||l;L(Math.min(x,r.length||x));return}catch{}const s=_(r,l);I(s),L(Math.min(l,r.length||l))},[r,l,f]),i.useEffect(()=>{if(!d.length)return;const t={quiz:d,responses:w,submitted:v,score:h,isFinished:g};localStorage.setItem(f,JSON.stringify(t))},[d,w,v,h,g,f]);const ee=t=>{const s=K.current[t];s&&s.scrollIntoView({behavior:"smooth",block:"center"})},te=(t,s)=>{v[t]||A(a=>({...a,[t]:s}))},se=(t,s)=>{if(v[t.id])return;w[t.id]===t.answerIndex&&$(o=>o+1),E(o=>{const x={...o,[t.id]:!0};return Object.keys(x).length===d.length&&R(!0),x}),!S&&s+1<d.length&&setTimeout(()=>ee(s+1),600)},re=()=>{const t=_(r,k);I(t),A({}),E({}),$(0),R(!1),T(!1),Q(""),localStorage.removeItem(f)},X=d.filter(t=>v[t.id]&&w[t.id]!==t.answerIndex),ae=S?X:d,ne=()=>{if(!d.length)return;const t=d.length,s=t?Number((h/t*100).toFixed(2)):0,a={name:D.trim()||"Guest",score:h,total:t,percent:s,date:new Date().toISOString()};H(o=>{const x=[...o,a];x.sort((c,u)=>u.percent!==c.percent?u.percent-c.percent:u.score!==c.score?u.score-c.score:new Date(u.date)-new Date(c.date));const p=x.slice(0,10);return localStorage.setItem(O,JSON.stringify(p)),p}),typeof b=="function"&&b({...a,testId:n})};i.useEffect(()=>{!V.current&&g&&ne(),V.current=g},[g,h,d.length,D]);const le=()=>{const t=D||"Student Name",s=d.length,a=s?(h/s*100).toFixed(2):"0.00",o=new Date().toLocaleDateString("en-IN",{day:"2-digit",month:"short",year:"numeric"}),x=ge(),p=`
<!DOCTYPE html>
<html>
<head>
<title>${N}</title>
<meta charset="UTF-8" />

<style>
  @page {
    size: A4;
    margin: 0;
  }

  body {
    margin: 0;
    padding: 0;
    background: #e8ecf3;
    font-family: "Times New Roman", serif;
  }

  .page {
    width: 210mm;
    height: 297mm;
    background: white;
    margin: auto;
    padding: 25mm;
    box-sizing: border-box;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .certificate {
    width: 100%;
    height: auto;
    padding: 20mm;
    border: 8px solid #1e3a8a;
    outline: 4px solid #93c5fd;
    text-align: center;
    box-sizing: border-box;
  }

  .cert-number {
    text-align: right;
    font-size: 14px;
    color: #333;
    margin-bottom: 10px;
  }

  .header-title {
    font-size: 22px;
    font-weight: bold;
    color: #1e3a8a;
    margin-bottom: 5px;
    text-transform: uppercase;
    letter-spacing: 1px;
  }

  .subtitle {
    font-size: 14px;
    color: #555;
    margin-bottom: 25px;
  }

  .main-title {
    font-size: 40px;
    font-weight: 800;
    color: #1e3a8a;
    margin-bottom: 20px;
    letter-spacing: 1px;
  }

  .body-text {
    font-size: 18px;
    color: #333;
    padding: 0 10mm;
    margin-bottom: 25px;
    line-height: 1.6;
  }

  .student-name {
    font-size: 28px;
    font-weight: bold;
    color: #0f172a;
    border-bottom: 2px solid #38bdf8;
    display: inline-block;
    padding: 5px 20px;
    margin: 10px 0 20px 0;
  }

  .score-box {
    font-size: 20px;
    font-weight: bold;
    color: #2563eb;
    margin-bottom: 25px;
  }

  .footer-row {
    display: flex;
    justify-content: space-between;
    margin-top: 40px;
    padding: 0 10mm;
  }

  .signature-block {
    text-align: center;
  }

  .line {
    width: 160px;
    border-top: 1px solid black;
    margin: auto;
    margin-bottom: 5px;
  }

  .director {
    font-size: 14px;
    font-weight: bold;
    color: #000;
  }

  .date-block {
    border-top: 1px solid black;
    width: 160px;
    margin: auto;
    margin-bottom: 5px;
  }

  @media print {
    body {
      -webkit-print-color-adjust: exact;
      print-color-adjust: exact;
    }
  }
</style>

</head>
<body>

<div class="page">
  <div class="certificate">

    <div class="cert-number">
      <strong>Certificate No:</strong> ${x}
    </div>

    <div class="header-title">${j}</div>
    <div class="subtitle">${y}</div>

    <div class="main-title">${N}</div>

    <div class="body-text">
      This is to certify that
      <br><br>
      <span class="student-name">${t}</span>
      <br><br>
      has successfully completed the test:
      <br>
      <strong>${m}</strong>
    </div>

    <div class="score-box">
      Score: ${h}/${s} &nbsp; | &nbsp; ${a}%
    </div>

    <div class="body-text">Issued on: ${o}</div>

    <div class="footer-row">
      <div class="signature-block">
        <div class="date-block"></div>
        <div>Date</div>
      </div>

      <div class="signature-block">
        <div class="line"></div>
        <div class="director">Sukanta Hui</div>
        <div>Director, Coder & AccoTax</div>
      </div>
    </div>

  </div>
</div>

<script>
  window.print();
<\/script>

</body>
</html>
    `,c=window.open("","_blank");c&&(c.document.write(p),c.document.close())},oe=()=>{const t=k||r.length||l,s=_(r,t);I(s),A({}),E({}),$(0),R(!1),T(!1),Q(""),localStorage.removeItem(f)};if(!d.length)return e.jsx("div",{className:"max-w-5xl mx-auto text-slate-300 text-sm",children:"Loading questions…"});const B=Object.keys(v).length,z=d.length,U=z?Math.round(B/z*100):0,ie=z?(h/z*100).toFixed(1):"0.0";return e.jsxs("section",{className:"max-w-5xl mx-auto space-y-8",children:[e.jsxs("header",{className:"relative overflow-hidden rounded-3xl border border-slate-800 bg-gradient-to-r from-slate-900/80 via-slate-900 to-slate-950 px-4 py-5 md:px-6 md:py-6 shadow-xl shadow-slate-950/40",children:[e.jsxs("div",{className:"absolute inset-0 pointer-events-none opacity-40",children:[e.jsx("div",{className:"absolute -top-24 -left-16 h-40 w-40 rounded-full bg-sky-500/30 blur-3xl"}),e.jsx("div",{className:"absolute -bottom-24 -right-10 h-48 w-48 rounded-full bg-violet-500/25 blur-3xl"})]}),e.jsxs("div",{className:"relative z-10 space-y-4",children:[e.jsxs("div",{className:"flex flex-col md:flex-row md:items-center md:justify-between gap-3",children:[e.jsxs("div",{children:[e.jsx("p",{className:"text-[11px] uppercase tracking-[0.25em] text-slate-400 mb-1",children:"Coder & AccoTax · Module Test"}),e.jsx("h2",{className:"text-xl md:text-2xl font-bold text-sky-200",children:m})]}),e.jsxs("div",{className:"flex flex-wrap gap-2 text-[11px]",children:[e.jsxs("span",{className:"inline-flex items-center gap-1 rounded-full border border-sky-500/40 bg-sky-500/10 px-3 py-1 text-sky-100",children:[e.jsx("span",{className:"h-1.5 w-1.5 rounded-full bg-emerald-400"}),B,"/",z," submitted"]}),e.jsxs("span",{className:"inline-flex items-center gap-1 rounded-full border border-emerald-500/40 bg-emerald-500/10 px-3 py-1 text-emerald-100",children:["Score: ",h," (",ie,"%)"]}),S&&e.jsxs("span",{className:"inline-flex items-center gap-1 rounded-full border border-amber-500/40 bg-amber-500/10 px-3 py-1 text-amber-100",children:[e.jsx(W,{size:12}),"Review incorrect only"]})]})]}),e.jsxs("div",{className:"space-y-1",children:[e.jsxs("div",{className:"flex justify-between text-[11px] text-slate-400",children:[e.jsx("span",{children:"Progress"}),e.jsxs("span",{children:[U,"%"]})]}),e.jsx("div",{className:"h-2 w-full rounded-full bg-slate-800 overflow-hidden",children:e.jsx("div",{className:"h-2 rounded-full bg-gradient-to-r from-sky-400 via-emerald-400 to-violet-400 transition-all",style:{width:`${U}%`}})})]}),e.jsxs("div",{className:"flex flex-wrap gap-2 pt-1",children:[e.jsxs("button",{type:"button",onClick:re,className:"inline-flex items-center gap-1.5 rounded-full bg-slate-900/80 px-3 py-1.5 text-[11px] font-medium text-slate-100 border border-slate-700 hover:border-sky-500 hover:text-sky-100 hover:bg-slate-900 transition",children:[e.jsx(me,{size:12}),"Restart (new ",k," Qs)"]}),!S&&X.length>0&&g&&e.jsxs("button",{type:"button",onClick:()=>T(!0),className:"inline-flex items-center gap-1.5 rounded-full bg-amber-500/10 px-3 py-1.5 text-[11px] font-medium text-amber-100 border border-amber-500/60 hover:bg-amber-500/20 transition",children:[e.jsx(de,{size:12}),"Review incorrect only"]}),S&&e.jsxs("button",{type:"button",onClick:()=>T(!1),className:"inline-flex items-center gap-1.5 rounded-full bg-slate-900/80 px-3 py-1.5 text-[11px] font-medium text-slate-100 border border-slate-600 hover:border-slate-400 transition",children:[e.jsx(W,{size:12}),"Exit review mode"]})]}),B===0&&!g&&e.jsxs("div",{className:"mt-3 p-3 rounded-2xl bg-slate-900/60 border border-slate-700 space-y-2",children:[e.jsx("p",{className:"text-xs text-slate-300 font-medium",children:"Select number of questions:"}),e.jsx("div",{className:"flex flex-wrap gap-2",children:[10,15,20,25,50,"All"].map(t=>{const s=t==="All"?r.length:t,a=k===s;return e.jsx("button",{type:"button",onClick:()=>L(s),className:`px-3 py-1.5 rounded-full text-[11px] border transition ${a?"bg-sky-600 text-white border-sky-400":"bg-slate-800 text-slate-300 border-slate-700 hover:bg-slate-700"}`,children:t},t)})}),e.jsxs("button",{type:"button",onClick:oe,className:"mt-2 px-4 py-1.5 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-semibold",children:["Start with ",k," Question",k!==1?"s":""]})]}),g&&e.jsxs("div",{className:"mt-3 rounded-2xl border border-slate-700 bg-slate-900/60 px-3 py-3 flex flex-col md:flex-row md:items-center gap-3",children:[e.jsxs("div",{className:"flex items-center gap-2 text-xs text-slate-200",children:[e.jsx("div",{className:"inline-flex h-7 w-7 items-center justify-center rounded-full bg-sky-500/15 border border-sky-500/50",children:e.jsx(Z,{size:14,className:"text-sky-300"})}),e.jsxs("div",{children:[e.jsx("p",{className:"font-medium text-slate-100",children:"Test completed – generate certificate"}),e.jsx("p",{className:"text-[11px] text-slate-400",children:"Enter the student name to print or save a PDF certificate."})]})]}),e.jsxs("div",{className:"flex-1 flex flex-col sm:flex-row gap-2 md:justify-end",children:[F&&e.jsx("input",{type:"text",placeholder:"Student name",value:D,onChange:t=>Q(t.target.value),className:"flex-1 px-3 py-1.5 rounded-full bg-slate-950 border border-slate-700 text-[11px] text-slate-100 placeholder:text-slate-500 focus:outline-none focus:ring-1 focus:ring-sky-500"}),e.jsxs("button",{type:"button",onClick:le,className:"inline-flex items-center justify-center gap-1.5 rounded-full bg-sky-600 px-4 py-1.5 text-[11px] font-semibold text-white hover:bg-sky-500 transition",children:[e.jsx(Z,{size:12}),"Download certificate"]})]})]}),P.length>0&&e.jsxs("div",{className:"mt-3 rounded-2xl border border-slate-800 bg-slate-950/70 px-3 py-3 space-y-2",children:[e.jsx("div",{className:"flex items-center justify-between gap-2",children:e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx("span",{className:"inline-flex h-7 w-7 items-center justify-center rounded-full bg-amber-500/10 border border-amber-500/50",children:e.jsx(he,{size:14,className:"text-amber-300"})}),e.jsxs("div",{children:[e.jsx("h3",{className:"text-xs font-semibold text-amber-100",children:C}),e.jsxs("p",{className:"text-[11px] text-slate-400",children:["Top ",P.length," scores recorded locally on this device."]})]})]})}),e.jsx("div",{className:"overflow-x-auto rounded-xl border border-slate-800 bg-slate-950/80",children:e.jsxs("table",{className:"w-full text-[11px] text-slate-100",children:[e.jsx("thead",{className:"bg-slate-900/80 text-slate-400",children:e.jsxs("tr",{children:[e.jsx("th",{className:"py-1.5 px-2 text-left",children:"#"}),e.jsx("th",{className:"py-1.5 px-2 text-left",children:"Name"}),e.jsx("th",{className:"py-1.5 px-2 text-right",children:"Score"}),e.jsx("th",{className:"py-1.5 px-2 text-right",children:"%"}),e.jsx("th",{className:"py-1.5 px-2 text-right",children:"Date"})]})}),e.jsx("tbody",{children:P.map((t,s)=>{const a=new Date(t.date).toLocaleDateString("en-IN",{day:"2-digit",month:"short"}),o=typeof t.percent=="number"?t.percent.toFixed(1):t.percent;return e.jsxs("tr",{className:"border-t border-slate-800/70 hover:bg-slate-900/60",children:[e.jsx("td",{className:"py-1.5 px-2",children:s+1}),e.jsx("td",{className:"py-1.5 px-2",children:t.name}),e.jsxs("td",{className:"py-1.5 px-2 text-right",children:[t.score,"/",t.total]}),e.jsx("td",{className:"py-1.5 px-2 text-right",children:o}),e.jsx("td",{className:"py-1.5 px-2 text-right",children:a})]},s)})})]})})]})]})]}),e.jsx("div",{className:"space-y-6",children:ae.map(t=>{const s=d.findIndex(p=>p.id===t.id),a=w[t.id],o=v[t.id],x=o&&a===t.answerIndex;return e.jsxs("article",{ref:p=>K.current[s]=p,className:"border border-slate-800 bg-slate-900/70 rounded-2xl p-4 md:p-5 shadow-lg shadow-black/40 space-y-3",children:[e.jsxs("div",{className:"flex items-start justify-between gap-3",children:[e.jsxs("div",{children:[e.jsxs("div",{className:"flex items-center gap-2 mb-1",children:[e.jsxs("span",{className:"inline-flex h-6 min-w-[2rem] items-center justify-center rounded-full bg-slate-800 text-[11px] text-slate-300 border border-slate-700",children:["Q",s+1]}),t.topic&&e.jsx("span",{className:"inline-flex items-center rounded-full bg-sky-500/10 border border-sky-500/40 px-2 py-0.5 text-[10px] uppercase tracking-wide text-sky-200",children:t.topic})]}),e.jsx("h3",{className:"font-semibold text-slate-50 text-sm md:text-base leading-snug",children:t.question})]}),o&&e.jsx("span",{className:`inline-flex items-center rounded-full px-2.5 py-1 text-[10px] font-semibold border ${x?"bg-emerald-500/15 text-emerald-200 border-emerald-500/60":"bg-rose-500/15 text-rose-200 border-rose-500/60"}`,children:x?"Correct":"Incorrect"})]}),t.code&&e.jsx("div",{className:"mt-1",children:e.jsx(ue,{code:t.code,language:"javascript"})}),e.jsx("div",{className:"space-y-1 mt-1",children:t.options.map((p,c)=>{const u=`q${t.id}_${c}`,G=a===c;let M="border-slate-700 bg-slate-900/70 hover:bg-slate-800/90";return o?c===t.answerIndex?M="border-emerald-500 bg-emerald-900/40 text-emerald-50":G&&(M="border-rose-500 bg-rose-900/40 text-rose-100"):G&&(M="border-sky-500 bg-sky-900/40 text-sky-50"),e.jsxs("label",{htmlFor:u,className:`cursor-pointer px-3 py-2 border rounded-xl flex gap-2 text-sm transition ${M}`,children:[e.jsx("input",{id:u,type:"radio",disabled:o,checked:G,onChange:()=>te(t.id,c),className:"mt-0.5 accent-sky-500"}),e.jsx("span",{className:"leading-snug",children:p})]},u)})}),o?e.jsxs("div",{className:"space-y-2 mt-2",children:[e.jsxs("p",{className:"text-xs text-emerald-400",children:["Correct answer:"," ",e.jsx("span",{className:"font-semibold",children:t.options[t.answerIndex]})]}),t.explanation&&e.jsxs("div",{className:"p-3 rounded-xl bg-slate-900 border border-slate-700 text-sm text-slate-200",children:[e.jsx("p",{className:"text-[11px] uppercase tracking-[0.18em] text-sky-400 mb-1",children:"Explanation"}),e.jsx("p",{className:"text-sm leading-relaxed",children:t.explanation})]})]}):e.jsx("button",{type:"button",onClick:()=>se(t,s),disabled:w[t.id]==null,className:"mt-2 inline-flex items-center justify-center px-4 py-2 rounded-full bg-sky-600 hover:bg-sky-500 disabled:bg-slate-700 disabled:text-slate-400 text-white text-xs font-semibold transition",children:"Submit answer"})]},t.id)})})]})}export{je as Q};
