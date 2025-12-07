import{c as U,r as l,j as e,e as re,f as ue,g as ge}from"./index-BpejU3eY.js";import{P as V}from"./prism-json-CAVvJggU.js";/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ye=[["path",{d:"m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526",key:"1yiouv"}],["circle",{cx:"12",cy:"8",r:"6",key:"1vp47v"}]],ae=U("award",ye);/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ve=[["path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",key:"1357e3"}],["path",{d:"M3 3v5h5",key:"1xhq8a"}]],je=U("rotate-ccw",ve);/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ne=[["path",{d:"M10 14.66v1.626a2 2 0 0 1-.976 1.696A5 5 0 0 0 7 21.978",key:"1n3hpd"}],["path",{d:"M14 14.66v1.626a2 2 0 0 0 .976 1.696A5 5 0 0 1 17 21.978",key:"rfe1zi"}],["path",{d:"M18 9h1.5a1 1 0 0 0 0-5H18",key:"7xy6bh"}],["path",{d:"M4 22h16",key:"57wxv0"}],["path",{d:"M6 9a6 6 0 0 0 12 0V3a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1z",key:"1mhfuq"}],["path",{d:"M6 9H4.5a1 1 0 0 1 0-5H6",key:"tex48p"}]],we=U("trophy",Ne);function ke({code:h="",initialCode:r="",language:n="javascript"}){const o=r||h,[w,y]=l.useState("");return l.useEffect(()=>{const k=V.highlight(o,V.languages[n]||V.languages.javascript,n);y(k)},[o,n]),e.jsx("div",{className:"my-4 rounded-xl overflow-hidden border border-slate-700 bg-[#0f172a] shadow-lg",children:e.jsx("pre",{className:"p-4 overflow-auto text-sm leading-6",children:e.jsx("code",{className:`language-${n}`,dangerouslySetInnerHTML:{__html:w}})})})}const ne="quizEngine_",Se="quizLeaderboard_";function le(h){const r=[...h];for(let n=r.length-1;n>0;n--){const o=Math.floor(Math.random()*(n+1));[r[n],r[o]]=[r[o],r[n]]}return r}function X(h,r){if(!Array.isArray(h))return[];const n=le(h),o=r?Math.min(r,n.length):n.length;return n.slice(0,o).map(y=>{const k=y.options.map((v,$)=>({text:v,originalIndex:$})),I=le(k),B=I.findIndex(v=>v.originalIndex===y.answerIndex);return{...y,options:I.map(v=>v.text),answerIndex:B}})}function ze(){const h="certificate_counter";let r=parseInt(localStorage.getItem(h),10);(isNaN(r)||r<1)&&(r=1);const n=new Date().getFullYear(),o=String(r).padStart(5,"0"),w=`CAT-${n}-${o}`;return localStorage.setItem(h,r+1),w}function Ee({title:h="Quiz Test",questions:r=[],testId:n="test_default",questionLimit:o=25,certificateHeader:w="Coder & AccoTax",certificateSubtitle:y="Barrackpore · www.codernaccotax.co.in",certificateTitle:k="Certificate of Completion",leaderboardTitle:I="Coder & AccoTax Leaderboard",showStudentName:B=!0,passPercent:v=60,onResultSubmit:$}){const S=ne+n,P=Se+n,H=ne+"best_"+n,[m,M]=l.useState([]),[z,D]=l.useState({}),[j,R]=l.useState({}),[f,_]=l.useState(0),[u,O]=l.useState(!1),[E,F]=l.useState(!1),[N,Q]=l.useState(""),[oe,L]=l.useState(!1),[G,J]=l.useState([]),[W,Y]=l.useState({}),[c,Z]=l.useState(()=>o||25),q=l.useRef([]),ee=l.useRef(!1);l.useEffect(()=>{const t=localStorage.getItem(P);if(t)try{const s=JSON.parse(t);J(Array.isArray(s)?s:[])}catch{J([])}},[P]),l.useEffect(()=>{const t=localStorage.getItem(H);if(t)try{const s=JSON.parse(t);s&&typeof s=="object"&&Y(s)}catch{Y({})}},[H]),l.useEffect(()=>{if(!r||!r.length)return;const t=localStorage.getItem(S);if(t)try{const a=JSON.parse(t);if(a&&a.submitted&&Object.keys(a.submitted).length>0&&Array.isArray(a.quiz)){M(a.quiz),D(a.responses||{}),R(a.submitted||{}),_(a.score||0),O(!!a.isFinished);const i=a.quiz&&a.quiz.length||o;Z(i);return}}catch{}const s=c&&c>0?Math.min(c,r.length):Math.min(o||25,r.length),d=X(r,s);M(d)},[r,c,S,o]),l.useEffect(()=>{if(!m.length)return;const t={quiz:m,responses:z,submitted:j,score:f,isFinished:u};localStorage.setItem(S,JSON.stringify(t))},[m,z,j,f,u,S]);const ie=t=>{const s=q.current[t];s&&s.scrollIntoView({behavior:"smooth",block:"center"})},de=(t,s)=>{j[t]||D(d=>({...d,[t]:s}))},ce=(t,s)=>{if(j[t.id])return;z[t.id]===t.answerIndex&&_(a=>a+1),R(a=>{const x={...a,[t.id]:!0};return Object.keys(x).length===m.length&&O(!0),x}),!E&&s+1<m.length&&setTimeout(()=>ie(s+1),600)},xe=()=>{const t=c&&c>0?Math.min(c,r.length||c):Math.min(o||25,r.length||o),s=X(r,t);M(s),D({}),R({}),_(0),O(!1),F(!1),Q(""),L(!1),localStorage.removeItem(S),window.scrollTo({top:0,behavior:"smooth"})},te=m.filter(t=>j[t.id]&&z[t.id]!==t.answerIndex),pe=E?te:m,me=()=>{if(!m.length)return;const t=m.length,s=t?Number((f/t*100).toFixed(2)):0,d={name:N.trim()||"Guest",score:f,total:t,percent:s,date:new Date().toISOString()};J(a=>{const x=[...a,d];x.sort((p,b)=>b.percent!==p.percent?b.percent-p.percent:b.score!==p.score?b.score-p.score:new Date(b.date)-new Date(p.date));const i=x.slice(0,10);return localStorage.setItem(P,JSON.stringify(i)),i}),Y(a=>{const x={...a},i=x[t];return(!i||s>i.percent)&&(x[t]={score:f,total:t,percent:s,date:d.date}),localStorage.setItem(H,JSON.stringify(x)),x}),typeof $=="function"&&$({...d,testId:n})};l.useEffect(()=>{!ee.current&&u&&me(),ee.current=u},[u,f,m.length]);const he=()=>{const t=N||"Student Name",s=m.length,d=s?(f/s*100).toFixed(2):"0.00",a=new Date().toLocaleDateString("en-IN",{day:"2-digit",month:"short",year:"numeric"}),x=ze(),i=parseFloat(d);let p="D";i>=85?p="A+":i>=70?p="A":i>=60?p="B":i>=50&&(p="C");const b=i>=v,T=`
<!DOCTYPE html>
<html>
<head>
<title>${k}</title>
<meta charset="UTF-8" />

<style>
  @page {
    size: A4;
    margin: 0;
  }

  body {
    margin: 0;
    padding: 0;
    background: #0f172a;
    font-family: "Times New Roman", serif;
  }

  .page {
    width: 210mm;
    height: 297mm;
    background: radial-gradient(circle at top, #eff6ff, #e2e8f0 40%, #cbd5f5 80%);
    margin: auto;
    padding: 18mm;
    box-sizing: border-box;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .certificate {
    position: relative;
    width: 100%;
    height: auto;
    padding: 18mm 20mm;
    background: #ffffff;
    border: 8px solid #1e3a8a;
    outline: 5px solid #93c5fd;
    box-shadow: 0 0 18px rgba(15,23,42,0.4);
    text-align: center;
    box-sizing: border-box;
  }

  .cert-number {
    text-align: right;
    font-size: 13px;
    color: #111827;
    margin-bottom: 8px;
  }

  .header-title {
    font-size: 22px;
    font-weight: bold;
    color: #1e3a8a;
    margin-bottom: 4px;
    text-transform: uppercase;
    letter-spacing: 1px;
  }

  .subtitle {
    font-size: 13px;
    color: #4b5563;
    margin-bottom: 20px;
  }

  .main-title {
    font-size: 38px;
    font-weight: 800;
    color: #111827;
    margin-bottom: 14px;
    letter-spacing: 1px;
    text-transform: uppercase;
  }

  .tagline {
    font-size: 13px;
    color: #1f2933;
    margin-bottom: 22px;
    text-transform: uppercase;
    letter-spacing: 4px;
  }

  .body-text {
    font-size: 17px;
    color: #111827;
    padding: 0 10mm;
    margin-bottom: 16px;
    line-height: 1.6;
  }

  .student-name {
    font-size: 28px;
    font-weight: bold;
    color: #0f172a;
    border-bottom: 2px solid #38bdf8;
    display: inline-block;
    padding: 4px 22px;
    margin: 12px 0 18px 0;
  }

  .test-title {
    font-size: 17px;
    font-weight: 600;
    color: #1e40af;
  }

  .score-box {
    font-size: 18px;
    font-weight: bold;
    color: #1d4ed8;
    margin: 8px 0 6px 0;
  }

  .result-box {
    font-size: 16px;
    font-weight: 600;
    color: #111827;
    margin-bottom: 18px;
  }

  .result-box span {
    padding: 3px 10px;
    border-radius: 999px;
    border: 1px solid #1e40af;
  }

  .result-pass {
    background: #dcfce7;
    color: #166534;
    border-color: #16a34a;
  }

  .result-fail {
    background: #fee2e2;
    color: #b91c1c;
    border-color: #ef4444;
  }

  .grade-pill {
    margin-left: 8px;
    background: #e0f2fe;
    color: #1d4ed8;
    border-color: #38bdf8;
  }

  .issue-date {
    font-size: 14px;
    color: #374151;
    margin-bottom: 8px;
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
    width: 170px;
    border-top: 1px solid #111827;
    margin: auto;
    margin-bottom: 5px;
  }

  .director {
    font-size: 14px;
    font-weight: bold;
    color: #000;
  }

  .designation {
    font-size: 12px;
    color: #374151;
  }

  .date-block {
    border-top: 1px solid #111827;
    width: 160px;
    margin: auto;
    margin-bottom: 5px;
  }

  .footer-note {
    margin-top: 18px;
    font-size: 11px;
    color: #6b7280;
  }

  /* Seal with logo */
  .seal {
    position: absolute;
    bottom: 40mm; /* slightly higher so it doesn't clash with date */
    left: 30mm;
    width: 60px;
    height: 60px;
    border-radius: 50%;
    border: 3px solid #1e3a8a;
    box-shadow: 0 0 8px rgba(30,64,175,0.6);
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
    background: radial-gradient(circle at 30% 30%, #e0f2fe, #bfdbfe);
    box-sizing: border-box;
  }

  .seal img {
    width: 100%;
    height: 100%;
    object-fit: contain;
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

    <div class="header-title">${w}</div>
    <div class="subtitle">${y}</div>

    <div class="main-title">${k}</div>
    <div class="tagline">Verified Assessment · Coder & AccoTax</div>

    <div class="body-text">
      This is to certify that
      <br><br>
      <span class="student-name">${t}</span>
      <br><br>
      has successfully completed the test:
      <br>
      <span class="test-title">${h}</span>
    </div>

    <div class="score-box">
      Score: ${f}/${s} &nbsp; | &nbsp; ${d}%
    </div>

    <div class="result-box">
      <span class="${b?"result-pass":"result-fail"}">
        ${b?"PASSED":"NOT PASSED"}
      </span>
      <span class="grade-pill">
        Grade: ${p}
      </span>
    </div>

    <div class="issue-date">Issued on: ${a}</div>

    <div class="footer-row">
      <div class="signature-block">
        <div class="date-block"></div>
        <div>Date</div>
      </div>

      <div class="signature-block">
        <div class="line"></div>
        <div class="director">Sukanta Hui</div>
        <div class="designation">Director, Coder & AccoTax</div>
      </div>
    </div>

    <div class="footer-note">
      This is a system-generated certificate and does not require a physical signature.
    </div>

    <div class="seal">
      <img src="${ge}" alt="Coder & AccoTax Logo" />
    </div>

  </div>
</div>

<script>
  window.print();
<\/script>

</body>
</html>
    `,g=window.open("","_blank");g&&(g.document.write(T),g.document.close())},be=()=>{const t=c&&c>0?Math.min(c,r.length||c):Math.min(o||25,r.length||o),s=X(r,t);M(s),D({}),R({}),_(0),O(!1),F(!1),Q(""),L(!0),localStorage.removeItem(S),window.scrollTo({top:0,behavior:"smooth"})};if(!oe)return e.jsxs("section",{className:"max-w-md mx-auto mt-20 p-6 rounded-2xl bg-slate-900 border border-slate-700 shadow-xl shadow-black/40",children:[e.jsx("h2",{className:"text-xl font-bold text-sky-300 mb-4 text-center",children:"Enter Student Name to Begin Test"}),e.jsx("p",{className:"text-xs text-slate-400 mb-4 text-center",children:"This name will appear on the certificate and leaderboard."}),e.jsx("input",{type:"text",placeholder:"Student Name",value:N,onChange:t=>Q(t.target.value),className:"w-full px-4 py-2 mb-4 rounded-xl bg-slate-950 border border-slate-700 text-slate-100 placeholder:text-slate-500 focus:ring-1 focus:ring-sky-500 focus:outline-none text-sm"}),e.jsx("button",{disabled:!N.trim(),onClick:()=>L(!0),className:`w-full py-2 rounded-xl text-white font-semibold text-sm transition ${N.trim()?"bg-sky-600 hover:bg-sky-500":"bg-slate-700 cursor-not-allowed"}`,children:"Start Test"})]});if(!m.length)return e.jsx("div",{className:"max-w-5xl mx-auto text-slate-300 text-sm",children:"Loading questions…"});const K=Object.keys(j).length,C=m.length,se=C?Math.round(K/C*100):0,fe=C?(f/C*100).toFixed(1):"0.0",A=W[C]||W[c]||null;return e.jsxs("section",{className:"max-w-5xl mx-auto space-y-8",children:[e.jsxs("header",{className:"relative overflow-hidden rounded-3xl border border-slate-800 bg-gradient-to-r from-slate-900/80 via-slate-900 to-slate-950 px-4 py-5 md:px-6 md:py-6 shadow-xl shadow-slate-950/40",children:[e.jsxs("div",{className:"absolute inset-0 pointer-events-none opacity-40",children:[e.jsx("div",{className:"absolute -top-24 -left-16 h-40 w-40 rounded-full bg-sky-500/30 blur-3xl"}),e.jsx("div",{className:"absolute -bottom-24 -right-10 h-48 w-48 rounded-full bg-violet-500/25 blur-3xl"})]}),e.jsxs("div",{className:"relative z-10 space-y-4",children:[e.jsxs("div",{className:"flex flex-col md:flex-row md:items-center md:justify-between gap-3",children:[e.jsxs("div",{children:[e.jsx("p",{className:"text-[11px] uppercase tracking-[0.25em] text-slate-400 mb-1",children:"Coder & AccoTax · Module Test"}),e.jsx("h2",{className:"text-xl md:text-2xl font-bold text-sky-200",children:h}),e.jsxs("p",{className:"text-[11px] text-slate-400 mt-1",children:["Student:"," ",e.jsx("span",{className:"text-sky-300 font-semibold",children:N||"Guest"})]})]}),e.jsxs("div",{className:"flex flex-wrap gap-2 text-[11px]",children:[e.jsxs("span",{className:"inline-flex items-center gap-1 rounded-full border border-sky-500/40 bg-sky-500/10 px-3 py-1 text-sky-100",children:[e.jsx("span",{className:"h-1.5 w-1.5 rounded-full bg-emerald-400"}),K,"/",C," submitted"]}),e.jsxs("span",{className:"inline-flex items-center gap-1 rounded-full border border-emerald-500/40 bg-emerald-500/10 px-3 py-1 text-emerald-100",children:["Score: ",f," (",fe,"%)"]}),A&&e.jsxs("span",{className:"inline-flex items-center gap-1 rounded-full border border-amber-500/40 bg-amber-500/10 px-3 py-1 text-amber-100",children:["Best: ",A.score,"/",A.total," (",A.percent.toFixed?A.percent.toFixed(1):A.percent,"%)"]}),E&&e.jsxs("span",{className:"inline-flex items-center gap-1 rounded-full border border-amber-500/40 bg-amber-500/10 px-3 py-1 text-amber-100",children:[e.jsx(re,{size:12}),"Review incorrect only"]})]})]}),e.jsxs("div",{className:"space-y-1",children:[e.jsxs("div",{className:"flex justify-between text-[11px] text-slate-400",children:[e.jsx("span",{children:"Progress"}),e.jsxs("span",{children:[se,"%"]})]}),e.jsx("div",{className:"h-2 w-full rounded-full bg-slate-800 overflow-hidden",children:e.jsx("div",{className:"h-2 rounded-full bg-gradient-to-r from-sky-400 via-emerald-400 to-violet-400 transition-all",style:{width:`${se}%`}})})]}),e.jsxs("div",{className:"flex flex-wrap gap-2 pt-1",children:[e.jsxs("button",{type:"button",onClick:xe,className:"inline-flex items-center gap-1.5 rounded-full bg-slate-900/80 px-3 py-1.5 text-[11px] font-medium text-slate-100 border border-slate-700 hover:border-sky-500 hover:text-sky-100 hover:bg-slate-900 transition",children:[e.jsx(je,{size:12}),"Restart (new ",c," Qs)"]}),!E&&te.length>0&&u&&e.jsxs("button",{type:"button",onClick:()=>F(!0),className:"inline-flex items-center gap-1.5 rounded-full bg-amber-500/10 px-3 py-1.5 text-[11px] font-medium text-amber-100 border border-amber-500/60 hover:bg-amber-500/20 transition",children:[e.jsx(ue,{size:12}),"Review incorrect only"]}),E&&e.jsxs("button",{type:"button",onClick:()=>F(!1),className:"inline-flex items-center gap-1.5 rounded-full bg-slate-900/80 px-3 py-1.5 text-[11px] font-medium text-slate-100 border border-slate-600 hover:border-slate-400 transition",children:[e.jsx(re,{size:12}),"Exit review mode"]})]}),K===0&&!u&&e.jsxs("div",{className:"mt-3 p-3 rounded-2xl bg-slate-900/60 border border-slate-700 space-y-2",children:[e.jsx("p",{className:"text-xs text-slate-300 font-medium",children:"Select number of questions:"}),e.jsx("div",{className:"flex flex-wrap gap-2",children:[10,15,20,25,50,"All"].map(t=>{const s=t==="All"?r.length:t,d=c===s;return e.jsx("button",{type:"button",onClick:()=>Z(Math.min(s,r.length||s)),className:`px-3 py-1.5 rounded-full text-[11px] border transition ${d?"bg-sky-600 text-white border-sky-400":"bg-slate-800 text-slate-300 border-slate-700 hover:bg-slate-700"}`,children:t},t)})}),e.jsxs("button",{type:"button",onClick:be,className:"mt-2 px-4 py-1.5 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-semibold",children:["Start with ",c," Question",c!==1?"s":""]})]}),u&&e.jsxs("div",{className:"mt-3 rounded-2xl border border-slate-700 bg-slate-900/60 px-3 py-3 flex flex-col md:flex-row md:items-center gap-3",children:[e.jsxs("div",{className:"flex items-center gap-2 text-xs text-slate-200",children:[e.jsx("div",{className:"inline-flex h-7 w-7 items-center justify-center rounded-full bg-sky-500/15 border border-sky-500/50",children:e.jsx(ae,{size:14,className:"text-sky-300"})}),e.jsxs("div",{children:[e.jsx("p",{className:"font-medium text-slate-100",children:"Test completed – generate certificate"}),e.jsx("p",{className:"text-[11px] text-slate-400",children:"The name shown above will appear on the printed certificate."})]})]}),e.jsxs("div",{className:"flex-1 flex flex-col sm:flex-row gap-2 md:justify-end",children:[B&&e.jsx("input",{type:"text",placeholder:"Student name",value:N,onChange:t=>Q(t.target.value),className:"flex-1 px-3 py-1.5 rounded-full bg-slate-950 border border-slate-700 text-[11px] text-slate-100 placeholder:text-slate-500 focus:outline-none focus:ring-1 focus:ring-sky-500"}),e.jsxs("button",{type:"button",onClick:he,className:"inline-flex items-center justify-center gap-1.5 rounded-full bg-sky-600 px-4 py-1.5 text-[11px] font-semibold text-white hover:bg-sky-500 transition",children:[e.jsx(ae,{size:12}),"Download certificate"]})]})]}),G.length>0&&e.jsxs("div",{className:"mt-3 rounded-2xl border border-slate-800 bg-slate-950/70 px-3 py-3 space-y-2",children:[e.jsx("div",{className:"flex items-center justify-between gap-2",children:e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx("span",{className:"inline-flex h-7 w-7 items-center justify-center rounded-full bg-amber-500/10 border border-amber-500/50",children:e.jsx(we,{size:14,className:"text-amber-300"})}),e.jsxs("div",{children:[e.jsx("h3",{className:"text-xs font-semibold text-amber-100",children:I}),e.jsxs("p",{className:"text-[11px] text-slate-400",children:["Top ",G.length," scores recorded locally on this device."]})]})]})}),e.jsx("div",{className:"overflow-x-auto rounded-xl border border-slate-800 bg-slate-950/80",children:e.jsxs("table",{className:"w-full text-[11px] text-slate-100",children:[e.jsx("thead",{className:"bg-slate-900/80 text-slate-400",children:e.jsxs("tr",{children:[e.jsx("th",{className:"py-1.5 px-2 text-left",children:"#"}),e.jsx("th",{className:"py-1.5 px-2 text-left",children:"Name"}),e.jsx("th",{className:"py-1.5 px-2 text-right",children:"Score"}),e.jsx("th",{className:"py-1.5 px-2 text-right",children:"%"}),e.jsx("th",{className:"py-1.5 px-2 text-right",children:"Date"})]})}),e.jsx("tbody",{children:G.map((t,s)=>{const d=new Date(t.date).toLocaleDateString("en-IN",{day:"2-digit",month:"short"}),a=typeof t.percent=="number"?t.percent.toFixed(1):t.percent;return e.jsxs("tr",{className:"border-t border-slate-800/70 hover:bg-slate-900/60",children:[e.jsx("td",{className:"py-1.5 px-2",children:s+1}),e.jsx("td",{className:"py-1.5 px-2",children:t.name}),e.jsxs("td",{className:"py-1.5 px-2 text-right",children:[t.score,"/",t.total]}),e.jsx("td",{className:"py-1.5 px-2 text-right",children:a}),e.jsx("td",{className:"py-1.5 px-2 text-right",children:d})]},s)})})]})})]})]})]}),e.jsx("div",{className:"space-y-6",children:pe.map(t=>{const s=m.findIndex(i=>i.id===t.id),d=z[t.id],a=j[t.id],x=a&&d===t.answerIndex;return e.jsxs("article",{ref:i=>q.current[s]=i,className:"border border-slate-800 bg-slate-900/70 rounded-2xl p-4 md:p-5 shadow-lg shadow-black/40 space-y-3",children:[e.jsxs("div",{className:"flex items-start justify-between gap-3",children:[e.jsxs("div",{children:[e.jsxs("div",{className:"flex items-center gap-2 mb-1",children:[e.jsxs("span",{className:"inline-flex h-6 min-w-[2rem] items-center justify-center rounded-full bg-slate-800 text-[11px] text-slate-300 border border-slate-700",children:["Q",s+1]}),t.topic&&e.jsx("span",{className:"inline-flex items-center rounded-full bg-sky-500/10 border border-sky-500/40 px-2 py-0.5 text-[10px] uppercase tracking-wide text-sky-200",children:t.topic})]}),e.jsx("h3",{className:"font-semibold text-slate-50 text-sm md:text-base leading-snug",children:t.question})]}),a&&e.jsx("span",{className:`inline-flex items-center rounded-full px-2.5 py-1 text-[10px] font-semibold border ${x?"bg-emerald-500/15 text-emerald-200 border-emerald-500/60":"bg-rose-500/15 text-rose-200 border-rose-500/60"}`,children:x?"Correct":"Incorrect"})]}),t.code&&e.jsx("div",{className:"mt-1",children:e.jsx(ke,{code:t.code,language:"javascript"})}),e.jsx("div",{className:"space-y-1 mt-1",children:t.options.map((i,p)=>{const b=`q${t.id}_${p}`,T=d===p;let g="border-slate-700 bg-slate-900/70 hover:bg-slate-800/90";return a?p===t.answerIndex?g="border-emerald-500 bg-emerald-900/40 text-emerald-50":T&&(g="border-rose-500 bg-rose-900/40 text-rose-100"):T&&(g="border-sky-500 bg-sky-900/40 text-sky-50"),e.jsxs("label",{htmlFor:b,className:`cursor-pointer px-3 py-2 border rounded-xl flex gap-2 text-sm transition ${g}`,children:[e.jsx("input",{id:b,type:"radio",disabled:a,checked:T,onChange:()=>de(t.id,p),className:"mt-0.5 accent-sky-500"}),e.jsx("span",{className:"leading-snug",children:i})]},b)})}),a?e.jsxs("div",{className:"space-y-2 mt-2",children:[e.jsxs("p",{className:"text-xs text-emerald-400",children:["Correct answer:"," ",e.jsx("span",{className:"font-semibold",children:t.options[t.answerIndex]})]}),t.explanation&&e.jsxs("div",{className:"p-3 rounded-xl bg-slate-900 border border-slate-700 text-sm text-slate-200",children:[e.jsx("p",{className:"text-[11px] uppercase tracking-[0.18em] text-sky-400 mb-1",children:"Explanation"}),e.jsx("p",{className:"text-sm leading-relaxed",children:t.explanation})]})]}):e.jsx("button",{type:"button",onClick:()=>ce(t,s),disabled:z[t.id]==null,className:"mt-2 inline-flex items-center justify-center px-4 py-2 rounded-full bg-sky-600 hover:bg-sky-500 disabled:bg-slate-700 disabled:text-slate-400 text-white text-xs font-semibold transition",children:"Submit answer"})]},t.id)})})]})}export{Ee as Q};
