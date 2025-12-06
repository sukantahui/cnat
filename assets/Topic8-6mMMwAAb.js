import{r as a,j as t}from"./index-DmMPx_vc.js";import{C as Y}from"./CodeBlock-BP7LpZJG.js";import{q as H}from"./js-control-flow-test-R02ArAoA.js";import"./prism-json-CHRsBE-6.js";const K="quizEngine_";function M(p){const n=[...p];for(let i=n.length-1;i>0;i--){const c=Math.floor(Math.random()*(i+1));[n[i],n[c]]=[n[c],n[i]]}return n}function R(p){return M(p).map(n=>{const i=n.options.map((d,v)=>({text:d,originalIndex:v})),c=M(i),w=c.findIndex(d=>d.originalIndex===n.answerIndex);return{...n,options:c.map(d=>d.text),answerIndex:w}})}function U({title:p="Quiz Test",questions:n=[],testId:i="test_default",certificateHeader:c="Coder & AccoTax – Premium Computer Training Institute",certificateSubtitle:w="Barrackpore · www.codernaccotax.co.in",certificateTitle:d="Certificate of Completion",showStudentName:v=!0}){const j=K+i,[r,N]=a.useState([]),[u,k]=a.useState({}),[x,S]=a.useState({}),[h,I]=a.useState(0),[b,C]=a.useState(!1),[f,E]=a.useState(!1),[A,z]=a.useState(""),F=a.useRef([]);a.useEffect(()=>{const e=localStorage.getItem(j);if(e)try{const s=JSON.parse(e);N(s.quiz||R(n)),k(s.responses||{}),S(s.submitted||{}),I(s.score||0),C(s.isFinished||!1);return}catch{}N(R(n))},[n]),a.useEffect(()=>{if(!r.length)return;const e={quiz:r,responses:u,submitted:x,score:h,isFinished:b};localStorage.setItem(j,JSON.stringify(e))},[r,u,x,h,b]);const Q=e=>{const s=F.current[e];s&&s.scrollIntoView({behavior:"smooth",block:"center"})},P=(e,s)=>{x[e]||k(g=>({...g,[e]:s}))},B=(e,s)=>{if(x[e.id])return;u[e.id]===e.answerIndex&&I(l=>l+1),S(l=>{const o={...l,[e.id]:!0};return Object.keys(o).length===r.length&&C(!0),o}),!f&&s+1<r.length&&setTimeout(()=>Q(s+1),600)},G=()=>{const e=R(n);N(e),k({}),S({}),I(0),C(!1),E(!1),z(""),localStorage.removeItem(j)},_=r.filter(e=>x[e.id]&&u[e.id]!==e.answerIndex),J=f?_:r,L=()=>{const e=A||"Student Name",s=r.length,g=(h/s*100).toFixed(2),l=new Date().toLocaleDateString("en-IN",{day:"2-digit",month:"short",year:"numeric"}),o=`
<!DOCTYPE html>
<html>
<head>
<title>${d}</title>
<meta charset="UTF-8" />
<style>
  body { font-family: system-ui; background: #f0f2f5; margin: 0; }
  .page { padding: 40px; display:flex; justify-content:center; }
  .card {
    background:white; padding:40px; max-width:900px; width:100%;
    border-radius:20px; box-shadow:0 20px 50px rgba(0,0,0,0.2);
  }
  h1 { font-size:2rem; text-align:center; font-weight:800; }
  .org { text-align:center; font-weight:700; margin-bottom:10px; }
  .student {
    font-size:1.7rem; font-weight:700; text-align:center; margin-top:20px;
    border-bottom:2px solid #38bdf8; display:inline-block; padding:4px 12px;
  }
  .footer { margin-top:40px; display:flex; justify-content:space-between; }
</style>
</head>
<body>
<div class="page">
<div class="card">

<div class="org">${c}</div>
<div style="text-align:center;color:#555;margin-bottom:20px;">
  ${w}
</div>

<h1>${d}</h1>

<div style="text-align:center;font-size:1rem;margin-top:20px;">
  This is to certify that<br/>
  <span class="student">${e}</span><br/>
  has completed the test: <strong>${p}</strong><br/>
  with a score of <strong>${h}/${s}</strong> (${g}%)
</div>

<div style="text-align:center;margin-top:10px;">Issued on: ${l}</div>

<div class="footer">
  <div>© Coder & AccoTax</div>
  <div style="text-align:right;">
    <div style="border-bottom:1px solid #444;width:150px;margin-left:auto;"></div>
    <div style="font-weight:600;">Sukanta Hui</div>
    <div>Director</div>
  </div>
</div>

</div>
</div>

<script>window.print();<\/script>
</body>
</html>
    `,m=window.open("","_blank");m.document.write(o),m.document.close()};if(!r.length)return t.jsx("p",{className:"text-slate-300",children:"Loading…"});const O=Object.keys(x).length,D=r.length;return t.jsxs("div",{className:"space-y-8",children:[t.jsxs("header",{className:"space-y-2 border-b border-slate-800 pb-4",children:[t.jsx("h2",{className:"text-xl md:text-2xl font-bold text-sky-300",children:p}),t.jsx("div",{className:"w-full bg-slate-800 h-3 rounded-full overflow-hidden",children:t.jsx("div",{className:"bg-sky-500 h-3 transition-all",style:{width:`${O/D*100}%`}})}),t.jsxs("div",{className:"text-xs text-slate-400",children:["Progress: ",O,"/",D," | Score: ",h]}),t.jsxs("div",{className:"flex flex-wrap gap-2 mt-2",children:[t.jsx("button",{onClick:G,className:"px-3 py-1 bg-rose-600 hover:bg-rose-500 text-white rounded-lg text-xs",children:"Restart Test"}),!f&&_.length>0&&b&&t.jsx("button",{onClick:()=>E(!0),className:"px-3 py-1 bg-amber-500 text-white rounded-lg text-xs",children:"Review Incorrect"}),f&&t.jsx("button",{onClick:()=>E(!1),className:"px-3 py-1 bg-slate-700 text-white rounded-lg text-xs",children:"Exit Review"})]}),b&&t.jsxs("div",{className:"mt-3 p-3 bg-slate-900/60 rounded-xl border border-slate-700 space-y-2",children:[v&&t.jsx("input",{type:"text",placeholder:"Enter student name",value:A,onChange:e=>z(e.target.value),className:"px-3 py-1.5 w-full bg-slate-800 border border-slate-600 text-slate-100 rounded-lg text-sm"}),t.jsx("button",{onClick:L,className:"px-3 py-1.5 bg-sky-600 hover:bg-sky-500 text-white rounded-lg text-sm font-semibold",children:"Download Certificate"})]})]}),t.jsx("div",{className:"space-y-6",children:J.map(e=>{const s=r.findIndex(o=>o.id===e.id),g=u[e.id],l=x[e.id];return t.jsxs("article",{ref:o=>F.current[s]=o,className:"border border-slate-800 bg-slate-900/60 rounded-2xl p-4 space-y-3",children:[t.jsxs("h3",{className:"font-semibold text-slate-100 text-sm md:text-base",children:[t.jsxs("span",{className:"text-sky-400 mr-2",children:["Q",s+1,"."]}),e.question]}),e.code&&t.jsx(Y,{code:e.code,language:"javascript"}),t.jsx("div",{className:"space-y-1",children:e.options.map((o,m)=>{const $=`q${e.id}_${m}`,T=g===m;let y="border-slate-700 bg-slate-900/60 hover:bg-slate-800";return l?m===e.answerIndex?y="border-emerald-500 bg-emerald-900/30 text-emerald-300":T&&(y="border-rose-500 bg-rose-900/30 text-rose-300"):T&&(y="border-sky-500 bg-sky-900/30 text-sky-50"),t.jsxs("label",{htmlFor:$,className:`cursor-pointer px-3 py-2 border rounded-lg flex gap-2 text-sm ${y}`,children:[t.jsx("input",{id:$,type:"radio",disabled:l,checked:T,onChange:()=>P(e.id,m),className:"mt-0.5 accent-sky-500"}),o]},$)})}),l?t.jsxs(t.Fragment,{children:[t.jsxs("p",{className:"text-xs text-emerald-400",children:["Correct Answer: ",e.options[e.answerIndex]]}),e.explanation&&t.jsxs("div",{className:"p-3 bg-slate-800 border border-slate-700 rounded-lg text-sm text-slate-200",children:[t.jsx("strong",{className:"text-sky-400",children:"Explanation:"})," ",e.explanation]})]}):t.jsx("button",{onClick:()=>B(e,s),disabled:u[e.id]==null,className:"px-4 py-2 bg-sky-600 hover:bg-sky-500 disabled:bg-slate-700 disabled:text-slate-400 text-white rounded-lg text-sm",children:"Submit Answer"})]},e.id)})})]})}function q(){return t.jsx(U,{title:"Module Test – Control Flow & Decision Making",questions:H,testId:"js_control_flow_100"})}export{q as default};
