import{c as q,r as n,j as e,e as ne,f as je,Q as we,g as Ne}from"./index-D0w4062P.js";import{P as W}from"./prism-json-6L_nN8vC.js";/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ke=[["path",{d:"m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526",key:"1yiouv"}],["circle",{cx:"12",cy:"8",r:"6",key:"1vp47v"}]],oe=q("award",ke);/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Se=[["path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",key:"1357e3"}],["path",{d:"M3 3v5h5",key:"1xhq8a"}]],Ce=q("rotate-ccw",Se);/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ae=[["path",{d:"M10 14.66v1.626a2 2 0 0 1-.976 1.696A5 5 0 0 0 7 21.978",key:"1n3hpd"}],["path",{d:"M14 14.66v1.626a2 2 0 0 0 .976 1.696A5 5 0 0 1 17 21.978",key:"rfe1zi"}],["path",{d:"M18 9h1.5a1 1 0 0 0 0-5H18",key:"7xy6bh"}],["path",{d:"M4 22h16",key:"57wxv0"}],["path",{d:"M6 9a6 6 0 0 0 12 0V3a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1z",key:"1mhfuq"}],["path",{d:"M6 9H4.5a1 1 0 0 1 0-5H6",key:"tex48p"}]],ze=q("trophy",Ae);function Ee({code:f="",initialCode:l="",language:o="javascript"}){const d=l||f,[w,y]=n.useState("");return n.useEffect(()=>{const N=W.highlight(d,W.languages[o]||W.languages.javascript,o);y(N)},[d,o]),e.jsx("div",{className:"my-4 rounded-xl overflow-hidden border border-slate-700 bg-[#0f172a] shadow-lg",children:e.jsx("pre",{className:"p-4 overflow-auto text-sm leading-6",children:e.jsx("code",{className:`language-${o}`,dangerouslySetInnerHTML:{__html:w}})})})}const ie="quizEngine_",Te="quizLeaderboard_";function de(f){const l=[...f];for(let o=l.length-1;o>0;o--){const d=Math.floor(Math.random()*(o+1));[l[o],l[d]]=[l[d],l[o]]}return l}function Z(f,l){if(!Array.isArray(f))return[];const o=de(f),d=l?Math.min(l,o.length):o.length;return o.slice(0,d).map(y=>{const N=y.options.map((v,F)=>({text:v,originalIndex:F})),O=de(N),P=O.findIndex(v=>v.originalIndex===y.answerIndex);return{...y,options:O.map(v=>v.text),answerIndex:P}})}function Ie(){const f="certificate_counter";let l=parseInt(localStorage.getItem(f),10);(isNaN(l)||l<1)&&(l=1);const o=new Date().getFullYear(),d=String(l).padStart(5,"0"),w=`CAT-${o}-${d}`;return localStorage.setItem(f,l+1),w}function Re({title:f="Quiz Test",questions:l=[],testId:o="test_default",questionLimit:d=25,certificateHeader:w="Coder & AccoTax",certificateSubtitle:y="Barrackpore · www.codernaccotax.co.in",certificateTitle:N="Certificate of Completion",leaderboardTitle:O="Coder & AccoTax Leaderboard",showStudentName:P=!0,passPercent:v=60,onResultSubmit:F}){const k=ie+o,H=Te+o,G=ie+"best_"+o,[u,L]=n.useState([]),[S,I]=n.useState({}),[j,$]=n.useState({}),[h,M]=n.useState(0),[g,R]=n.useState(!1),[D,_]=n.useState(!1),[C,A]=n.useState(""),[ce,J]=n.useState(!1),[Y,U]=n.useState([]),[ee,K]=n.useState({}),[p,te]=n.useState(()=>d||25),[Q,xe]=n.useState("All"),se=n.useRef([]),re=n.useRef(!1),c=n.useMemo(()=>{if(!Array.isArray(l))return[];if(Q==="All")return l;const t=Q.toLowerCase();let s=l.filter(a=>a.level?String(a.level).toLowerCase()===t:!0);return s.length||(s=l),s},[l,Q]);n.useEffect(()=>{const t=localStorage.getItem(H);if(t)try{const s=JSON.parse(t);U(Array.isArray(s)?s:[])}catch{U([])}},[H]),n.useEffect(()=>{const t=localStorage.getItem(G);if(t)try{const s=JSON.parse(t);s&&typeof s=="object"&&K(s)}catch{K({})}},[G]),n.useEffect(()=>{if(!c||!c.length)return;const t=localStorage.getItem(k);if(t)try{const r=JSON.parse(t);if(r&&r.submitted&&Object.keys(r.submitted).length>0&&Array.isArray(r.quiz)){L(r.quiz),I(r.responses||{}),$(r.submitted||{}),M(r.score||0),R(!!r.isFinished);const i=r.quiz&&r.quiz.length||d;te(i);return}}catch{}const s=p&&p>0?Math.min(p,c.length):Math.min(d||25,c.length),a=Z(c,s);L(a),I({}),$({}),M(0),R(!1),_(!1)},[c,p,k,d]),n.useEffect(()=>{if(!u.length)return;const t={quiz:u,responses:S,submitted:j,score:h,isFinished:g};localStorage.setItem(k,JSON.stringify(t))},[u,S,j,h,g,k]);const me=t=>{const s=se.current[t];if(!s)return;const a=s.getBoundingClientRect().top+window.scrollY-120;window.scrollTo({top:a,behavior:"smooth"})},pe=(t,s)=>{j[t]||I(a=>({...a,[t]:s}))},ue=(t,s)=>{if(j[t.id])return;S[t.id]===t.answerIndex&&M(r=>r+1),$(r=>{const x={...r,[t.id]:!0};return Object.keys(x).length===u.length&&R(!0),x}),!D&&s+1<u.length&&setTimeout(()=>me(s+1),600)},fe=()=>{if(!c.length)return;const t=p&&p>0?Math.min(p,c.length):Math.min(d||25,c.length),s=Z(c,t);L(s),I({}),$({}),M(0),R(!1),_(!1),A(""),J(!1),localStorage.removeItem(k),window.scrollTo({top:0,behavior:"smooth"})},ae=u.filter(t=>j[t.id]&&S[t.id]!==t.answerIndex),be=D?ae:u,he=()=>{if(!u.length)return;const t=u.length,s=t?Number((h/t*100).toFixed(2)):0,a={name:C.trim()||"Guest",score:h,total:t,percent:s,date:new Date().toISOString()};U(r=>{const x=[...r,a];x.sort((m,b)=>b.percent!==m.percent?b.percent-m.percent:b.score!==m.score?b.score-m.score:new Date(b.date)-new Date(m.date));const i=x.slice(0,10);return localStorage.setItem(H,JSON.stringify(i)),i}),K(r=>{const x={...r},i=x[t];return(!i||s>i.percent)&&(x[t]={score:h,total:t,percent:s,date:a.date}),localStorage.setItem(G,JSON.stringify(x)),x}),typeof F=="function"&&F({...a,testId:o})};n.useEffect(()=>{!re.current&&g&&he(),re.current=g},[g,h,u.length]);const ge=()=>{const t=C||"Student Name",s=u.length,a=s?(h/s*100).toFixed(2):"0.00",r=new Date().toLocaleDateString("en-IN",{day:"2-digit",month:"short",year:"numeric"}),x=Ie(),i=parseFloat(a);let m="D";i>=85?m="A+":i>=70?m="A":i>=60?m="B":i>=50&&(m="C");const b=i>=v,T=`
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
  .seal {
    position: absolute;
    bottom: 40mm;
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

    <div class="main-title">${N}</div>
    <div class="tagline">Verified Assessment · Coder & AccoTax</div>

    <div class="body-text">
      This is to certify that
      <br><br>
      <span class="student-name">${t}</span>
      <br><br>
      has successfully completed the test:
      <br>
      <span class="test-title">${f}</span>
    </div>

    <div class="score-box">
      Score: ${h}/${s} &nbsp; | &nbsp; ${a}%
    </div>

    <div class="result-box">
      <span class="${b?"result-pass":"result-fail"}">
        ${b?"PASSED":"NOT PASSED"}
      </span>
      <span class="grade-pill">
        Grade: ${m}
      </span>
    </div>

    <div class="issue-date">Issued on: ${r}</div>

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
      <img src="${Ne}" alt="Coder & AccoTax Logo" />
    </div>

  </div>
</div>

<script>
  window.print();
<\/script>

</body>
</html>
    `,X=window.open("","_blank");X&&(X.document.write(T),X.document.close())},ye=()=>{if(!c.length)return;const t=p&&p>0?Math.min(p,c.length):Math.min(d||25,c.length),s=Z(c,t);L(s),I({}),$({}),M(0),R(!1),_(!1),A(""),J(!0),localStorage.removeItem(k),window.scrollTo({top:0,behavior:"smooth"})};if(!ce)return e.jsxs("section",{className:"max-w-md mx-auto mt-20 p-6 rounded-2xl bg-slate-900 border border-slate-700 shadow-xl shadow-black/40",children:[e.jsx("h2",{className:"text-xl font-bold text-sky-300 mb-4 text-center",children:"Enter Student Name to Begin Test"}),e.jsx("p",{className:"text-xs text-slate-400 mb-4 text-center",children:"This name will appear on the certificate and leaderboard."}),e.jsx("input",{type:"text",placeholder:"Student Name",value:C,onChange:t=>A(t.target.value),onBlur:t=>{A(t.target.value.trim())},autoComplete:"off",autoCorrect:"off",autoCapitalize:"none",spellCheck:"false",className:"w-full px-4 py-2 mb-4 rounded-xl bg-slate-950 border border-slate-700 text-slate-100 placeholder:text-slate-500 focus:ring-1 focus:ring-sky-500 focus:outline-none text-sm"}),e.jsx("button",{onClick:()=>{const t=C.trim();if(!t){alert("Please enter your name");return}document.activeElement&&document.activeElement.blur&&document.activeElement.blur(),setTimeout(()=>{A(t),J(!0)},150)},className:"w-full py-2 rounded-xl text-white font-semibold text-sm bg-sky-600 hover:bg-sky-500 transition",children:"Start Test"})]});if(!u.length)return e.jsx("div",{className:"max-w-5xl mx-auto text-slate-300 text-sm",children:"Loading questions…"});const V=Object.keys(j).length,z=u.length,le=z?Math.round(V/z*100):0,ve=z?(h/z*100).toFixed(1):"0.0",E=ee[z]||ee[p]||null;return e.jsxs("section",{className:"max-w-5xl mx-auto space-y-8",children:[e.jsxs("header",{className:"relative overflow-hidden rounded-3xl border border-slate-800 bg-gradient-to-r from-slate-900/80 via-slate-900 to-slate-950 px-4 py-5 md:px-6 md:py-6 shadow-xl shadow-slate-950/40",children:[e.jsxs("div",{className:"absolute inset-0 pointer-events-none opacity-40",children:[e.jsx("div",{className:"absolute -top-24 -left-16 h-40 w-40 rounded-full bg-sky-500/30 blur-3xl"}),e.jsx("div",{className:"absolute -bottom-24 -right-10 h-48 w-48 rounded-full bg-violet-500/25 blur-3xl"})]}),e.jsxs("div",{className:"relative z-10 space-y-4",children:[e.jsxs("div",{className:"flex flex-col md:flex-row md:items-center md:justify-between gap-3",children:[e.jsxs("div",{children:[e.jsx("p",{className:"text-[11px] uppercase tracking-[0.25em] text-slate-400 mb-1",children:"Coder & AccoTax · Module Test"}),e.jsx("h2",{className:"text-xl md:text-2xl font-bold text-sky-200",children:f}),e.jsxs("p",{className:"text-[11px] text-slate-400 mt-1",children:["Student:"," ",e.jsx("span",{className:"text-sky-300 font-semibold",children:C||"Guest"})]})]}),e.jsxs("div",{className:"flex flex-wrap gap-2 text-[11px]",children:[e.jsxs("span",{className:"inline-flex items-center gap-1 rounded-full border border-sky-500/40 bg-sky-500/10 px-3 py-1 text-sky-100",children:[e.jsx("span",{className:"h-1.5 w-1.5 rounded-full bg-emerald-400"}),V,"/",z," submitted"]}),e.jsxs("span",{className:"inline-flex items-center gap-1 rounded-full border border-emerald-500/40 bg-emerald-500/10 px-3 py-1 text-emerald-100",children:["Score: ",h," (",ve,"%)"]}),E&&e.jsxs("span",{className:"inline-flex items-center gap-1 rounded-full border border-amber-500/40 bg-amber-500/10 px-3 py-1 text-amber-100",children:["Best: ",E.score,"/",E.total," (",E.percent.toFixed?E.percent.toFixed(1):E.percent,"%)"]}),D&&e.jsxs("span",{className:"inline-flex items-center gap-1 rounded-full border border-amber-500/40 bg-amber-500/10 px-3 py-1 text-amber-100",children:[e.jsx(ne,{size:12}),"Review incorrect only"]})]})]}),e.jsxs("div",{className:"space-y-1",children:[e.jsxs("div",{className:"flex justify-between text-[11px] text-slate-400",children:[e.jsx("span",{children:"Progress"}),e.jsxs("span",{children:[le,"%"]})]}),e.jsx("div",{className:"h-2 w-full rounded-full bg-slate-800 overflow-hidden",children:e.jsx("div",{className:"h-2 rounded-full bg-gradient-to-r from-sky-400 via-emerald-400 to-violet-400 transition-all",style:{width:`${le}%`}})})]}),e.jsxs("div",{className:"flex flex-wrap gap-2 pt-1",children:[e.jsxs("button",{type:"button",onClick:fe,className:"inline-flex items-center gap-1.5 rounded-full bg-slate-900/80 px-3 py-1.5 text-[11px] font-medium text-slate-100 border border-slate-700 hover:border-sky-500 hover:text-sky-100 hover:bg-slate-900 transition",children:[e.jsx(Ce,{size:12}),"Restart (new ",p," Qs)"]}),!D&&ae.length>0&&g&&e.jsxs("button",{type:"button",onClick:()=>_(!0),className:"inline-flex items-center gap-1.5 rounded-full bg-amber-500/10 px-3 py-1.5 text-[11px] font-medium text-amber-100 border border-amber-500/60 hover:bg-amber-500/20 transition",children:[e.jsx(je,{size:12}),"Review incorrect only"]}),D&&e.jsxs("button",{type:"button",onClick:()=>_(!1),className:"inline-flex items-center gap-1.5 rounded-full bg-slate-900/80 px-3 py-1.5 text-[11px] font-medium text-slate-100 border border-slate-600 hover:border-slate-400 transition",children:[e.jsx(ne,{size:12}),"Exit review mode"]})]}),e.jsxs("div",{className:"mt-3 p-3 rounded-2xl bg-slate-900/60 border border-slate-700 space-y-2",children:[e.jsx("p",{className:"text-xs text-slate-300 font-medium",children:"Select difficulty level:"}),e.jsx("div",{className:"flex flex-wrap gap-2",children:["All","beginner","moderate","advanced"].map(t=>{const s=t==="All"?"All Levels":t.charAt(0).toUpperCase()+t.slice(1),a=Q.toLowerCase()===t.toLowerCase();return e.jsx("button",{type:"button",onClick:()=>xe(t==="All"?"All":t),className:`px-3 py-1.5 rounded-full text-[11px] border transition ${a?"bg-emerald-600 text-white border-emerald-400":"bg-slate-800 text-slate-300 border-slate-700 hover:bg-slate-700"}`,children:s},t)})}),e.jsx("p",{className:"text-[11px] text-slate-500",children:"Questions without a level tag are included in every level."})]}),e.jsxs("div",{className:"mt-4 p-3 rounded-2xl bg-slate-900/70 border border-slate-700 shadow-md flex flex-col sm:flex-row items-center gap-3",children:[e.jsxs("div",{className:"flex-1",children:[e.jsx("p",{className:"text-xs text-slate-300 font-medium",children:"Open this quiz on your mobile:"}),e.jsx("p",{className:"text-[11px] text-sky-300 break-all",children:window.location.href})]}),e.jsx("div",{className:"p-2 bg-white rounded-xl shadow",children:e.jsx(we,{value:window.location.href,size:96,fgColor:"#0f172a"})})]}),V===0&&!g&&e.jsxs("div",{className:"mt-3 p-3 rounded-2xl bg-slate-900/60 border border-slate-700 space-y-2",children:[e.jsx("p",{className:"text-xs text-slate-300 font-medium",children:"Select number of questions:"}),e.jsx("div",{className:"flex flex-wrap gap-2",children:[10,15,20,25,50,"All"].map(t=>{const s=t==="All"?c.length:t,a=p===s;return e.jsx("button",{type:"button",onClick:()=>te(Math.min(s,c.length||s)),className:`px-3 py-1.5 rounded-full text-[11px] border transition ${a?"bg-sky-600 text-white border-sky-400":"bg-slate-800 text-slate-300 border-slate-700 hover:bg-slate-700"}`,children:t},t)})}),e.jsxs("button",{type:"button",onClick:ye,className:"mt-2 px-4 py-1.5 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-semibold",children:["Start with ",p," Question",p!==1?"s":""]})]}),g&&e.jsxs("div",{className:"mt-3 rounded-2xl border border-slate-700 bg-slate-900/60 px-3 py-3 flex flex-col md:flex-row md:items-center gap-3",children:[e.jsxs("div",{className:"flex items-center gap-2 text-xs text-slate-200",children:[e.jsx("div",{className:"inline-flex h-7 w-7 items-center justify-center rounded-full bg-sky-500/15 border border-sky-500/50",children:e.jsx(oe,{size:14,className:"text-sky-300"})}),e.jsxs("div",{children:[e.jsx("p",{className:"font-medium text-slate-100",children:"Test completed – generate certificate"}),e.jsx("p",{className:"text-[11px] text-slate-400",children:"The name shown above will appear on the printed certificate."})]})]}),e.jsxs("div",{className:"flex-1 flex flex-col sm:flex-row gap-2 md:justify-end",children:[P&&e.jsx("input",{type:"text",placeholder:"Student name",value:C,onChange:t=>A(t.target.value),className:"flex-1 px-3 py-1.5 rounded-full bg-slate-950 border border-slate-700 text-[11px] text-slate-100 placeholder:text-slate-500 focus:outline-none focus:ring-1 focus:ring-sky-500"}),e.jsxs("button",{type:"button",onClick:ge,className:"inline-flex items-center justify-center gap-1.5 rounded-full bg-sky-600 px-4 py-1.5 text-[11px] font-semibold text-white hover:bg-sky-500 transition",children:[e.jsx(oe,{size:12}),"Download certificate"]})]})]}),Y.length>0&&e.jsxs("div",{className:"mt-3 rounded-2xl border border-slate-800 bg-slate-950/70 px-3 py-3 space-y-2",children:[e.jsx("div",{className:"flex items-center justify-between gap-2",children:e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx("span",{className:"inline-flex h-7 w-7 items-center justify-center rounded-full bg-amber-500/10 border border-amber-500/50",children:e.jsx(ze,{size:14,className:"text-amber-300"})}),e.jsxs("div",{children:[e.jsx("h3",{className:"text-xs font-semibold text-amber-100",children:O}),e.jsxs("p",{className:"text-[11px] text-slate-400",children:["Top ",Y.length," scores recorded locally on this device."]})]})]})}),e.jsx("div",{className:"overflow-x-auto rounded-xl border border-slate-800 bg-slate-950/80",children:e.jsxs("table",{className:"w-full text-[11px] text-slate-100",children:[e.jsx("thead",{className:"bg-slate-900/80 text-slate-400",children:e.jsxs("tr",{children:[e.jsx("th",{className:"py-1.5 px-2 text-left",children:"#"}),e.jsx("th",{className:"py-1.5 px-2 text-left",children:"Name"}),e.jsx("th",{className:"py-1.5 px-2 text-right",children:"Score"}),e.jsx("th",{className:"py-1.5 px-2 text-right",children:"%"}),e.jsx("th",{className:"py-1.5 px-2 text-right",children:"Date"})]})}),e.jsx("tbody",{children:Y.map((t,s)=>{const a=new Date(t.date).toLocaleDateString("en-IN",{day:"2-digit",month:"short"}),r=typeof t.percent=="number"?t.percent.toFixed(1):t.percent;return e.jsxs("tr",{className:"border-t border-slate-800/70 hover:bg-slate-900/60",children:[e.jsx("td",{className:"py-1.5 px-2",children:s+1}),e.jsx("td",{className:"py-1.5 px-2",children:t.name}),e.jsxs("td",{className:"py-1.5 px-2 text-right",children:[t.score,"/",t.total]}),e.jsx("td",{className:"py-1.5 px-2 text-right",children:r}),e.jsx("td",{className:"py-1.5 px-2 text-right",children:a})]},s)})})]})})]})]})]}),e.jsx("div",{className:"space-y-6",children:be.map(t=>{const s=u.findIndex(i=>i.id===t.id),a=S[t.id],r=j[t.id],x=r&&a===t.answerIndex;return e.jsxs("article",{ref:i=>se.current[s]=i,className:"border border-slate-800 bg-slate-900/70 rounded-2xl p-4 md:p-5 shadow-lg shadow-black/40 space-y-3",children:[e.jsxs("div",{className:"flex items-start justify-between gap-3",children:[e.jsxs("div",{children:[e.jsxs("div",{className:"flex items-center gap-2 mb-1",children:[e.jsxs("span",{className:"inline-flex h-6 min-w-[2rem] items-center justify-center rounded-full bg-slate-800 text-[11px] text-slate-300 border border-slate-700",children:["Q",s+1]}),t.topic&&e.jsx("span",{className:"inline-flex items-center rounded-full bg-sky-500/10 border border-sky-500/40 px-2 py-0.5 text-[10px] uppercase tracking-wide text-sky-200",children:t.topic}),t.level&&e.jsx("span",{className:"inline-flex items-center rounded-full bg-emerald-500/10 border border-emerald-500/40 px-2 py-0.5 text-[10px] uppercase tracking-wide text-emerald-200",children:String(t.level)})]}),e.jsx("h3",{className:"font-semibold text-slate-50 text-sm md:text-base leading-snug",children:t.question})]}),r&&e.jsx("span",{className:`inline-flex items-center rounded-full px-2.5 py-1 text-[10px] font-semibold border ${x?"bg-emerald-500/15 text-emerald-200 border-emerald-500/60":"bg-rose-500/15 text-rose-200 border-rose-500/60"}`,children:x?"Correct":"Incorrect"})]}),t.code&&e.jsx("div",{className:"mt-1",children:e.jsx(Ee,{code:t.code,language:"javascript"})}),e.jsx("div",{className:"space-y-1 mt-1",children:t.options.map((i,m)=>{const b=`q${t.id}_${m}`,B=a===m;let T="border-slate-700 bg-slate-900/70 hover:bg-slate-800/90";return r?m===t.answerIndex?T="border-emerald-500 bg-emerald-900/40 text-emerald-50":B&&(T="border-rose-500 bg-rose-900/40 text-rose-100"):B&&(T="border-sky-500 bg-sky-900/40 text-sky-50"),e.jsxs("label",{htmlFor:b,className:`cursor-pointer px-3 py-2 border rounded-xl flex gap-2 text-sm transition ${T}`,children:[e.jsx("input",{id:b,type:"radio",disabled:r,checked:B,onChange:()=>pe(t.id,m),className:"mt-0.5 accent-sky-500"}),e.jsx("span",{className:"leading-snug",children:i})]},b)})}),r?e.jsxs("div",{className:"space-y-2 mt-2",children:[e.jsxs("p",{className:"text-xs text-emerald-400",children:["Correct answer:"," ",e.jsx("span",{className:"font-semibold",children:t.options[t.answerIndex]})]}),t.explanation&&e.jsxs("div",{className:"p-3 rounded-xl bg-slate-900 border border-slate-700 text-sm text-slate-200",children:[e.jsx("p",{className:"text-[11px] uppercase tracking-[0.18em] text-sky-400 mb-1",children:"Explanation"}),e.jsx("p",{className:"text-sm leading-relaxed",children:t.explanation})]})]}):e.jsx("button",{type:"button",onClick:()=>ue(t,s),disabled:S[t.id]==null,className:"mt-2 inline-flex items-center justify-center px-4 py-2 rounded-full bg-sky-600 hover:bg-sky-500 disabled:bg-slate-700 disabled:text-slate-400 text-white text-xs font-semibold transition",children:"Submit answer"})]},t.id)})})]})}export{Re as Q};
