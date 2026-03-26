const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/Topic0-DCO_wt5M.js","assets/index-b7ec57y3.js","assets/index-Bq941JKc.css","assets/clsx-B-dksMZM.js","assets/JavaFileLoader-BVYbG073.js","assets/JavaCodeBlock-CriO_eTL.js","assets/prism-Bmoc0uMW.js","assets/browser-qwMsJzIL.js","assets/prism-java-BwO6k4I_.js","assets/Topic1-CJDf7mjD.js","assets/Topic2-C1bBdQQn.js","assets/Topic3-B6Xqwuxx.js","assets/Topic4-M6CBP2By.js","assets/Topic5-D5_LezgE.js","assets/Topic6-DCwKyKLV.js","assets/Topic7-B3sZJuux.js"])))=>i.map(i=>d[i]);
import{u as se,j as e,r as i,a as re,L as c,R as ae,_ as p}from"./index-b7ec57y3.js";import{r as l}from"./icse-class-10-roadmap-DuSRWWju.js";import{A as v}from"./arrow-left-BpfZ_G3Y.js";import{L as G}from"./layers-BFfIAnKv.js";import{B as le}from"./Topic7-Cy5CTqR4.js";import{A as L,M as oe,X as ne}from"./x-BTXMpx5M.js";import{C as F}from"./circle-check-D22CEaxB.js";import"./createLucideIcon-rpwAtNd4.js";const J=Object.assign({"./topics/array-1d-numeric/Topic0.jsx":()=>p(()=>import("./Topic0-DCO_wt5M.js"),__vite__mapDeps([0,1,2,3,4,5,6,7,8])),"./topics/array-1d-numeric/Topic1.jsx":()=>p(()=>import("./Topic1-CJDf7mjD.js"),__vite__mapDeps([9,1,2,3,4,5,6,7,8])),"./topics/array-1d-numeric/Topic2.jsx":()=>p(()=>import("./Topic2-C1bBdQQn.js"),__vite__mapDeps([10,1,2,3,4,5,6,7,8])),"./topics/array-1d-numeric/Topic3.jsx":()=>p(()=>import("./Topic3-B6Xqwuxx.js"),__vite__mapDeps([11,1,2,3,4,5,6,7,8])),"./topics/array-1d-numeric/Topic4.jsx":()=>p(()=>import("./Topic4-M6CBP2By.js"),__vite__mapDeps([12,1,2,3,4,5,6,7,8])),"./topics/array-1d-numeric/Topic5.jsx":()=>p(()=>import("./Topic5-D5_LezgE.js"),__vite__mapDeps([13,1,2,3,4,5,6,7,8])),"./topics/array-1d-numeric/Topic6.jsx":()=>p(()=>import("./Topic6-DCwKyKLV.js"),__vite__mapDeps([14,1,2,3,4,5,6,7,8])),"./topics/array-1d-numeric/Topic7.jsx":()=>p(()=>import("./Topic7-B3sZJuux.js"),__vite__mapDeps([15,1,2,3,4,5,6,7,8]))});function fe(){const{moduleSlug:r,topicIndex:m}=se();return e.jsx(ie,{moduleSlug:r,topicIndex:m},`${r}-${m}`)}function ie({moduleSlug:r,topicIndex:m}){const n=Number.parseInt(m,10)||0,M=i.useRef(null),[K,A]=i.useState(!1),E=re(),[I,b]=i.useState(!1);let a=null,U=null;for(const s of l.segments){const t=s.modules.find(o=>o.slug===r);if(t){a=t,U=s;break}}if(!a)return e.jsxs("div",{className:"min-h-screen bg-slate-950 text-slate-100 p-10",children:[e.jsx("h1",{className:"text-2xl text-red-400 font-bold",children:"Module Not Found"}),e.jsx(c,{to:`/${l.folder}/roadmap`,className:"text-sky-400 underline mt-4 inline-block",children:"← Back to Roadmap"})]});const w=a.topics[n];if(!w)return e.jsxs("div",{className:"min-h-screen bg-slate-950 text-slate-100 p-10",children:[e.jsx("h1",{className:"text-2xl text-red-400 font-bold",children:"Topic Not Found"}),e.jsx(c,{to:`/${l.folder}/module/${r}`,className:"text-sky-400 underline mt-4 inline-block",children:"← Back to Module"})]});const N=`js-progress-${r}`,[j,D]=i.useState([]);i.useEffect(()=>{const s=localStorage.getItem(N)||"[]";let t=[];try{t=JSON.parse(s)}catch{t=[]}t.includes(n)||t.push(n),t.sort((o,d)=>o-d),localStorage.setItem(N,JSON.stringify(t)),D(t)},[n,N]);const h=a.topics.length,R=j.length,k=h>0?Math.round(R/h*100):0,$=n>0,T=n<h-1,V=()=>{localStorage.removeItem(N),D([])},z=`./topics/${r}/Topic${m}.jsx`,H=J[z]?ae.lazy(J[z]):null;i.useEffect(()=>{A(!1)},[n]),i.useEffect(()=>{const s=t=>{t.key==="ArrowRight"&&T&&E(`/${l.folder}/topic/${r}/${n+1}`),t.key==="ArrowLeft"&&$&&E(`/${l.folder}/topic/${r}/${n-1}`)};return window.addEventListener("keydown",s),()=>window.removeEventListener("keydown",s)},[n,T,$,r,E]),i.useEffect(()=>{M.current&&M.current.scrollIntoView({behavior:"smooth",block:"center"})},[n,I]),i.useEffect(()=>{b(!1)},[r,m]);const[O,X]=i.useState(""),[x,Y]=i.useState(()=>{try{return localStorage.getItem("student_name")||""}catch{return""}}),[_,Z]=i.useState(!0),[Q,S]=i.useState(!1),[ee,B]=i.useState(""),W=s=>s.map((t,o)=>`${o+1}. ${t}`).join(`
`);return e.jsxs("div",{className:"min-h-screen bg-slate-950 text-slate-100 flex flex-col relative overflow-hidden",children:[e.jsxs("div",{className:"absolute inset-0 pointer-events-none overflow-hidden",children:[e.jsxs("svg",{className:"absolute -top-40 -left-40 opacity-40",width:"420",height:"420",children:[e.jsx("defs",{children:e.jsxs("radialGradient",{id:"jsTopicBlob1",cx:"0",cy:"0",r:"1",gradientUnits:"userSpaceOnUse",gradientTransform:"translate(0,0) rotate(45) scale(400)",children:[e.jsx("stop",{stopColor:"#38bdf8"}),e.jsx("stop",{offset:"1",stopColor:"#020617",stopOpacity:"0"})]})}),e.jsx("circle",{cx:"200",cy:"200",r:"200",fill:"url(#jsTopicBlob1)"})]}),e.jsxs("svg",{className:"absolute bottom-[-160px] right-[-130px] opacity-40",width:"420",height:"420",children:[e.jsx("defs",{children:e.jsxs("radialGradient",{id:"jsTopicBlob2",cx:"0",cy:"0",r:"1",gradientUnits:"userSpaceOnUse",gradientTransform:"translate(400,400) rotate(225) scale(400)",children:[e.jsx("stop",{stopColor:"#a855f7"}),e.jsx("stop",{offset:"1",stopColor:"#020617",stopOpacity:"0"})]})}),e.jsx("circle",{cx:"200",cy:"200",r:"200",fill:"url(#jsTopicBlob2)"})]}),e.jsxs("svg",{className:"absolute inset-0 w-full h-full opacity-[0.06]",children:[e.jsx("defs",{children:e.jsx("pattern",{id:"jsTopicGrid",width:"40",height:"40",patternUnits:"userSpaceOnUse",children:e.jsx("path",{d:"M40 0H0V40",fill:"none",stroke:"#1f2937",strokeWidth:"1"})})}),e.jsx("rect",{width:"100%",height:"100%",fill:"url(#jsTopicGrid)"})]})]}),e.jsx("header",{className:"relative z-30 border-b border-slate-800/70 bg-slate-950/80 backdrop-blur-xl",children:e.jsxs("div",{className:"max-w-6xl mx-auto px-4 py-3 flex items-center justify-between gap-3",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsxs(c,{to:`/${l.folder}/roadmap`,className:"hidden sm:inline-flex items-center rounded-full border border-slate-700 bg-slate-900/70 px-2.5 py-1 text-[11px] text-slate-300 hover:border-sky-500 hover:text-sky-300",children:[e.jsx(v,{size:12,className:"mr-1"}),"Roadmap"]}),e.jsxs("div",{className:"flex flex-col",children:[e.jsxs("div",{className:"flex items-center gap-2 text-[11px] uppercase tracking-[0.18em] text-slate-500",children:[e.jsx(G,{size:12,className:"text-sky-400"}),e.jsx("span",{children:l.trackTitle})]}),e.jsxs("p",{className:"text-[11px] text-slate-400",children:[U?.title," • ",a.title]})]})]}),e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsxs("div",{className:"hidden md:flex flex-col items-end gap-1",children:[e.jsxs("div",{className:"flex items-center gap-2 text-[11px] text-slate-300",children:[e.jsx(le,{size:13,className:"text-sky-400"}),e.jsxs("span",{children:["Topic ",n+1," of ",h]})]}),e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx("div",{className:"w-28 h-1.5 rounded-full bg-slate-800 border border-slate-700 overflow-hidden",children:e.jsx("div",{className:"h-full bg-gradient-to-r from-sky-400 to-emerald-400",style:{width:`${k}%`}})}),e.jsxs("span",{className:"text-[11px] text-sky-300 font-semibold",children:[k,"%"]})]})]}),e.jsxs("div",{className:"hidden sm:flex items-center gap-2",children:[$?e.jsxs(c,{to:`/${l.folder}/topic/${r}/${n-1}`,className:"px-2.5 py-1.5 rounded-lg bg-slate-900 border border-slate-700 text-[11px] text-slate-200 hover:bg-slate-800",children:[e.jsx(v,{size:13})," Prev"]}):e.jsxs("button",{disabled:!0,className:"px-2.5 py-1.5 rounded-lg bg-slate-950 text-slate-600 border border-slate-900 text-[11px]",children:[e.jsx(v,{size:13})," Prev"]}),T?e.jsxs(c,{to:`/${l.folder}/topic/${r}/${n+1}`,className:"px-2.5 py-1.5 rounded-lg bg-sky-600 hover:bg-sky-500 border border-sky-500 text-[11px] text-white",children:["Next ",e.jsx(L,{size:13})]}):e.jsxs("button",{disabled:!0,className:"px-2.5 py-1.5 rounded-lg bg-slate-950 text-slate-600 border border-slate-900 text-[11px]",children:["Next ",e.jsx(L,{size:13})]})]}),e.jsxs("button",{type:"button",onClick:()=>{b(!0),A(!1)},className:"inline-flex items-center gap-1 px-2.5 py-1.5 rounded-lg bg-slate-900 border border-slate-700 text-[11px] text-slate-100 sm:hidden",children:[e.jsx(oe,{size:14})," Topics"]})]})]})}),e.jsx("div",{className:"relative z-20 flex-1 flex justify-center",children:e.jsxs("div",{className:"w-full max-w-7xl mx-auto flex overflow-visible",children:[e.jsxs("aside",{className:"hidden lg:flex flex-col w-72 shrink-0 border-r border-slate-800 bg-slate-950/60 backdrop-blur-xl pt-6 pb-8 px-4 relative overflow-visible",children:[e.jsxs("div",{className:"mb-6 rounded-2xl border border-slate-800 bg-slate-900/80 p-4 text-xs text-slate-200",children:[e.jsxs("div",{className:"flex items-center justify-between mb-1",children:[e.jsx("span",{className:"uppercase tracking-[0.18em] text-[10px] text-slate-500",children:"Progress"}),e.jsxs("span",{className:"text-[11px] text-sky-300 font-semibold",children:[R,"/",h]})]}),e.jsx("div",{className:"w-full h-1.5 rounded-full bg-slate-800 border border-slate-700 overflow-hidden",children:e.jsx("div",{className:"h-full bg-gradient-to-r from-sky-400 to-emerald-400",style:{width:`${k}%`}})}),e.jsx("button",{type:"button",onClick:V,className:"mt-2 text-[11px] text-rose-300 hover:text-rose-400",children:"Reset Progress"})]}),e.jsx("div",{className:"space-y-2 text-sm",children:a.topics.map((s,t)=>{const o=t===n,d=j.includes(t),u=j.length>0?Math.max(...j)+2:2;return t>u?e.jsxs("div",{title:"Complete previous topics to unlock this topic.",className:`\r
            relative flex items-center gap-3 px-3 py-2 rounded-xl\r
            border border-slate-800\r
            bg-slate-900/60 text-slate-500\r
            cursor-not-allowed opacity-60\r
          `,children:[e.jsx("span",{className:"absolute left-0 top-0 h-full w-[3px] bg-slate-700"}),e.jsx("span",{className:"text-lg shrink-0",children:"🔒"}),e.jsxs("div",{className:"relative flex-1 min-w-0 group",children:[e.jsxs("span",{className:"block truncate",children:[e.jsxs("span",{className:"mr-1 text-xs",children:[t+1,"."]}),s]}),e.jsx("div",{className:`\r
      absolute left-0 top-full mt-2\r
      opacity-0 group-hover:opacity-100\r
      pointer-events-none\r
      transition-all duration-200\r
      translate-y-1 group-hover:translate-y-0\r
      bg-slate-900 border border-slate-700\r
      text-xs text-slate-200\r
      px-3 py-2 rounded-lg shadow-xl\r
      w-max max-w-xs z-50\r
    `,children:s})]})]},t):e.jsxs(c,{ref:o?M:null,to:`/${l.folder}/topic/${r}/${t}`,className:`
          relative flex items-center gap-3 px-3 py-2 rounded-xl border transition
          ${o?"border-sky-500 bg-sky-600/90 text-white shadow-lg":"border-slate-800 bg-slate-900/90 text-slate-200 hover:bg-slate-800/90"}
        `,children:[e.jsx("span",{className:`absolute left-0 top-0 h-full w-[3px] ${o?"bg-sky-300":"bg-slate-700"}`}),d?e.jsx(F,{size:16,className:"text-emerald-400 shrink-0"}):e.jsx("span",{className:"w-4 h-4 rounded-full border border-slate-500 shrink-0"}),e.jsxs("div",{className:"relative flex-1 min-w-0 group",children:[e.jsxs("span",{className:"block truncate",children:[e.jsxs("span",{className:"text-sky-300 mr-1 text-xs",children:[t+1,"."]}),s]}),e.jsx("div",{className:`\r
      absolute left-0 top-full mt-2\r
      opacity-0 group-hover:opacity-100\r
      pointer-events-none\r
      transition-all duration-200\r
      translate-y-1 group-hover:translate-y-0\r
      bg-slate-900 border border-slate-700\r
      text-xs text-slate-200\r
      px-3 py-2 rounded-lg shadow-xl\r
      w-max max-w-xs z-[9999]\r
    `,children:s})]})]},t)})}),e.jsxs("div",{className:"mt-6 pt-4 border-t border-slate-800 space-y-2 text-xs",children:[e.jsx(c,{to:`/${l.folder}/module/${r}`,className:"block px-3 py-2 rounded-lg bg-slate-900 border border-slate-700 hover:bg-slate-800 text-slate-200",children:"← Back to Module Overview"}),e.jsxs(c,{to:`/${l.folder}/roadmap`,className:"block px-3 py-2 rounded-lg bg-slate-900 border border-slate-700 hover:bg-slate-800 text-slate-200",children:["📍 ",l.subject," Roadmap"]}),e.jsx("a",{href:"/play",target:"_blank",rel:"noopener noreferrer",className:"block px-3 py-2 rounded-lg bg-slate-900 border border-slate-700 hover:bg-slate-800 text-slate-200",children:"🧪 CNAT Playground"})]}),e.jsxs("div",{className:"mb-6 rounded-2xl border border-slate-800 bg-slate-900/80 p-4 text-xs text-slate-300",children:[e.jsxs("div",{className:"flex items-center justify-between mb-2",children:[e.jsx("p",{className:"text-[11px] uppercase tracking-[0.15em] text-slate-500",children:"Send Topics List"}),e.jsxs("span",{className:"text-[11px] text-slate-400",children:[a.topics.length," topics"]})]}),e.jsx("label",{className:"text-[11px] text-slate-400",children:"Student name (optional)"}),e.jsx("input",{id:"waStudentNameInput",value:x,onChange:s=>Y(s.target.value),type:"text",placeholder:"e.g., Ritaja Ghosh",className:"w-full bg-slate-800 text-slate-200 p-2 rounded-lg border border-slate-600 text-xs mt-1 mb-3 focus:outline-none focus:border-sky-500"}),e.jsx("label",{className:"text-[11px] text-slate-400",children:"WhatsApp number"}),e.jsx("input",{id:"waPhoneInput",value:O,onChange:s=>X(s.target.value),type:"text",placeholder:"e.g., 919876543210",className:"w-full bg-slate-800 text-slate-200 p-2 rounded-lg border border-slate-600 text-xs mt-1 focus:outline-none focus:border-sky-500"}),e.jsxs("div",{className:"flex items-center gap-2 mt-3",children:[e.jsxs("label",{className:"inline-flex items-center gap-2 text-xs text-slate-300",children:[e.jsx("input",{type:"checkbox",checked:_,onChange:()=>Z(s=>!s),className:"accent-sky-500"}),"Include module link"]}),e.jsx("button",{onClick:()=>{if(!O.trim())return alert("Please enter a WhatsApp phone number.");const t=`${window.location.origin}/${l.folder}/module/${r}`,o=W(a.topics),u=`${x.trim()?`Hi ${x.trim()},

`:""}📘 *Ultra Premium Topic List*
━━━━━━━━━━━━━━━━━━━━`,f=`*Module:* ${a.title}
*Topics:* ${a.topics.length}
`,y=`
*Topics Preview:*
${o}
`,P=_?`
🔗 Module Link:
${t}
`:"",g=`${u}
${f}
${y}${P}
━━━━━━━━━━━━━━━━━━━━
Sent via Coder & AccoTax Learning Platform • Barrackpore
www.codernaccotax.co.in`;try{navigator.clipboard.writeText(g),alert("Message preview copied to clipboard. You can paste it in WhatsApp or preview below."),B(g),S(!0)}catch{B(g),S(!0)}},className:"ml-auto px-3 py-1 rounded-lg bg-slate-800 border border-slate-700 text-xs text-slate-300 hover:bg-slate-900",children:"Copy Preview"})]}),e.jsx("div",{className:"mt-3",children:e.jsx("button",{onClick:()=>{const s=`${window.location.origin}/${l.folder}/module/${r}`,t=W(a.topics),d=`${x.trim()?`Hi ${x.trim()},

`:""}📘 *Ultra Premium Topic List*
━━━━━━━━━━━━━━━━━━━━`,u=`*Module:* ${a.title}
*Topics:* ${a.topics.length}
`,f=`
*Topics Preview:*
${t}
`,y=_?`
🔗 Module Link:
${s}
`:"",C=`${d}
${u}
${f}${y}
━━━━━━━━━━━━━━━━━━━━
Sent via Coder & AccoTax Learning Platform • Barrackpore
www.codernaccotax.co.in`;B(C),S(g=>!g)},className:"w-full mt-3 py-2 rounded-lg bg-sky-600 hover:bg-sky-500 text-xs font-semibold text-white transition",children:Q?"Hide Preview":"Preview Message"})}),Q&&e.jsx("pre",{className:"mt-3 whitespace-pre-wrap text-[13px] bg-slate-900 border border-slate-800 rounded-lg p-3 text-slate-200 text-xs",children:ee||"No preview available."}),e.jsx("button",{onClick:()=>{const s=O.trim();if(!s)return alert("Please enter the WhatsApp phone number (with country code). Example: 919876543210");const t=s.replace(/[^0-9]/g,"");if(!/^\d{10,15}$/.test(t)&&!confirm("Phone number looks unusual. Continue anyway?"))return;const o=`${window.location.origin}/${l.folder}/module/${r}`,d=W(a.topics),f=`${x.trim()?`Hi ${x.trim()},

`:""}📘 *Ultra Premium Topic List*
━━━━━━━━━━━━━━━━━━━━`,y=`*Module:* ${a.title}
*Topics:* ${a.topics.length}
`,P=`
*Topics Preview:*
${d}
`,C=_?`
🔗 Module Link:
${o}
`:"",q=`${f}
${y}
${P}${C}
━━━━━━━━━━━━━━━━━━━━
Need help? Reply with "HELP" and we'll assist you.
Sent via Coder & AccoTax Learning Platform • Barrackpore
www.codernaccotax.co.in`;try{localStorage.setItem("student_name",x.trim())}catch{}const te=`https://wa.me/${t}?text=${encodeURIComponent(q)}`;window.open(te,"_blank")},className:"w-full mt-3 py-2 rounded-lg bg-green-600 hover:bg-green-500 text-xs font-semibold text-white transition",children:"📤 Send Ultra Premium Topic Message"}),e.jsx("p",{className:"text-[11px] text-slate-500 mt-2",children:"Tip: include country code (e.g., 91 for India). You can preview or copy the message before sending."})]})]}),I&&e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"fixed inset-0 z-40 bg-black/60 lg:hidden",onClick:()=>b(!1)}),e.jsxs("aside",{className:"fixed inset-y-0 left-0 z-50 w-72 bg-slate-950/95 backdrop-blur-xl border-r border-slate-800 pt-4 pb-6 px-4 flex flex-col lg:hidden",children:[e.jsxs("div",{className:"flex items-center justify-between mb-4",children:[e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx(G,{size:16,className:"text-sky-400"}),e.jsx("span",{className:"text-sm font-semibold text-sky-300",children:a.title})]}),e.jsx("button",{type:"button",onClick:()=>b(!1),className:"p-1 rounded-full border border-slate-700 bg-slate-900 hover:bg-slate-800 text-slate-300",children:e.jsx(ne,{size:14})})]}),e.jsxs("div",{className:"mb-4 rounded-xl border border-slate-800 bg-slate-900/80 p-3 text-[11px] text-slate-200",children:[e.jsxs("div",{className:"flex items-center justify-between mb-1",children:[e.jsx("span",{className:"uppercase tracking-[0.18em] text-[10px] text-slate-500",children:"Progress"}),e.jsxs("span",{className:"text-sky-300 font-semibold",children:[R,"/",h]})]}),e.jsx("div",{className:"w-full h-1.5 bg-slate-800 border border-slate-700 rounded-full overflow-hidden",children:e.jsx("div",{className:"h-full bg-gradient-to-r from-sky-400 to-emerald-400",style:{width:`${k}%`}})}),e.jsx("button",{type:"button",onClick:V,className:"mt-2 text-[10px] text-rose-300 hover:text-rose-400",children:"Reset Progress"})]}),e.jsx("div",{className:"flex-1 overflow-y-auto space-y-2 text-sm",children:a.topics.map((s,t)=>{const o=t===n,d=j.includes(t);return e.jsxs(c,{to:`/${l.folder}/topic/${r}/${t}`,onClick:()=>b(!1),className:`
                          relative flex items-center gap-3 px-3 py-2 rounded-xl border transition
                          ${o?"border-sky-500 bg-sky-600/90 text-white shadow-lg":"border-slate-800 bg-slate-900/90 text-slate-200 hover:bg-slate-800/90"}
                        `,children:[e.jsx("span",{className:`absolute left-0 top-0 h-full w-[3px] ${o?"bg-sky-300":"bg-slate-700"}`}),d?e.jsx(F,{size:16,className:"text-emerald-400 shrink-0"}):e.jsx("span",{className:"w-4 h-4 rounded-full border border-slate-500 shrink-0"}),e.jsxs("div",{className:"relative flex-1 min-w-0 group",children:[e.jsxs("span",{className:"block truncate",children:[e.jsxs("span",{className:"text-sky-300 mr-1 text-xs",children:[t+1,"."]}),s]}),e.jsx("div",{className:`\r
      absolute left-0 top-full mt-2\r
      opacity-0 group-hover:opacity-100\r
      pointer-events-none\r
      transition-all duration-200\r
      translate-y-1 group-hover:translate-y-0\r
      bg-slate-900 border border-slate-700\r
      text-xs text-slate-200\r
      px-3 py-2 rounded-lg shadow-xl\r
      w-max max-w-xs z-[9999]\r
    `,children:s})]})]},t)})}),e.jsxs("div",{className:"mt-4 pt-3 border-t border-slate-800 space-y-2 text-xs",children:[e.jsx(c,{to:`/${l.folder}/module/${r}`,onClick:()=>b(!1),className:"block px-3 py-2 rounded-lg bg-slate-900 border border-slate-700 hover:bg-slate-800 text-slate-200",children:"← Back to Module Overview"}),e.jsxs(c,{to:`/${l.folder}/roadmap`,onClick:()=>b(!1),className:"block px-3 py-2 rounded-lg bg-slate-900 border border-slate-700 hover:bg-slate-800 text-slate-200",children:["📍 ",l.subject," Roadmap"]}),e.jsx("a",{href:"/play",target:"_blank",rel:"noopener noreferrer",className:"block px-3 py-2 rounded-lg bg-slate-900 border border-slate-700 hover:bg-slate-800 text-slate-200",children:"🧪 CNAT Playground"})]})]})]}),e.jsxs("main",{className:"flex-1 flex justify-center px-4 lg:px-8 py-6 lg:py-10",children:[e.jsxs("div",{className:"w-full max-w-5xl",children:[e.jsxs("div",{className:"mb-6 rounded-2xl border border-slate-800 bg-slate-900/60 backdrop-blur-xl shadow-xl relative overflow-hidden",children:[e.jsxs("svg",{className:"absolute top-0 left-0 w-full h-1.5",children:[e.jsx("defs",{children:e.jsxs("linearGradient",{id:"jsTopicHeaderLine",x1:"0%",y1:"0%",x2:"100%",y2:"0%",children:[e.jsx("stop",{offset:"0%",stopColor:"#38bdf8"}),e.jsx("stop",{offset:"50%",stopColor:"#22c55e"}),e.jsx("stop",{offset:"100%",stopColor:"#a855f7"})]})}),e.jsx("rect",{width:"100%",height:"100%",fill:"url(#jsTopicHeaderLine)"})]}),e.jsxs("div",{className:"p-6 flex flex-col md:flex-row md:justify-between",children:[e.jsxs("div",{children:[e.jsxs("p",{className:"text-[11px] uppercase tracking-[0.18em] text-slate-500 flex items-center gap-2",children:[e.jsxs("span",{className:"inline-flex items-center justify-center rounded-full bg-slate-800 border border-slate-700 px-2 py-[2px] text-[9px] text-sky-300",children:["Topic ",n+1," / ",h]}),a.level||"Module"," • ",a.difficulty||"Difficulty"]}),e.jsx("h1",{className:"text-xl md:text-2xl font-bold text-sky-300",children:w}),e.jsxs("p",{className:"text-[12px] text-slate-400 mt-1",children:["Module: ",e.jsx("span",{className:"text-slate-200",children:a.title})]})]}),e.jsxs("div",{className:"flex items-center gap-2 mt-4 md:mt-0",children:[$?e.jsxs(c,{to:`/${l.folder}/topic/${r}/${n-1}`,className:"px-2.5 py-1.5 rounded-lg bg-slate-900 border border-slate-700 text-[11px] text-slate-200 hover:bg-slate-800",children:[e.jsx(v,{size:13})," Prev"]}):e.jsxs("button",{disabled:!0,className:"px-2.5 py-1.5 rounded-lg bg-slate-950 border border-slate-900 text-[11px] text-slate-600",children:[e.jsx(v,{size:13})," Prev"]}),T?e.jsxs(c,{to:`/${l.folder}/topic/${r}/${n+1}`,className:"px-2.5 py-1.5 rounded-lg bg-sky-600 border border-sky-500 text-[11px] text-white hover:bg-sky-500",children:["Next ",e.jsx(L,{size:13})]}):e.jsxs("button",{disabled:!0,className:"px-2.5 py-1.5 rounded-lg bg-slate-950 border border-slate-900 text-[11px] text-slate-600",children:["Next ",e.jsx(L,{size:13})]})]})]})]}),e.jsxs("section",{className:"relative rounded-3xl border border-slate-800 bg-slate-900/70 backdrop-blur-lg shadow-[0_22px_45px_rgba(15,23,42,0.75)] px-5 md:px-8 py-6 md:py-8",children:[e.jsx(i.Suspense,{fallback:e.jsx("p",{className:"text-slate-400 text-sm",children:"Loading topic content…"}),children:H?e.jsx(H,{},z):e.jsxs("div",{className:"text-slate-300 text-sm",children:[e.jsx("p",{className:"mb-1",children:"Topic file missing:"}),e.jsx("pre",{className:"text-sky-400 mt-2 text-xs bg-slate-950/60 rounded-lg p-3 border border-slate-800 overflow-x-auto",children:`src/components/study/${l.folder}/topics/${r}/Topic${m}.jsx`})]})}),e.jsxs("div",{className:"mt-10 p-5 rounded-2xl border border-slate-700 bg-slate-900/60 shadow-lg space-y-3",children:[e.jsx("h3",{className:"text-lg font-semibold text-sky-300",children:"Have a Question About This Topic?"}),e.jsx("p",{className:"text-sm text-slate-400",children:"Send your doubts directly on WhatsApp. I will reply as soon as possible."}),e.jsx("textarea",{id:"waQuery",placeholder:"Type your question here...",className:"w-full bg-slate-800 text-slate-200 p-3 rounded-xl border border-slate-600 text-sm focus:outline-none focus:border-sky-500",rows:3}),e.jsx("button",{onClick:()=>{const s=document.getElementById("waQuery").value.trim();if(!s)return alert("Please type your question first.");const t="919432456083",o=encodeURIComponent(`Hello Sir,
I have a query regarding:

• Module: ${a.title}
• Topic: ${w}

My Question:
${s}`);window.open(`https://wa.me/${t}?text=${o}`,"_blank")},className:"px-4 py-2 rounded-lg bg-green-600 hover:bg-green-500 text-white text-sm font-semibold transition",children:"📲 Send WhatsApp Query"})]})]})]}),!I&&e.jsxs("div",{className:"fixed bottom-6 right-6 z-[9999] group",children:[e.jsx("div",{className:`\r
      absolute right-14 bottom-1\r
      opacity-0 group-hover:opacity-100\r
      transition-opacity duration-300\r
      bg-slate-900 text-slate-200\r
      border border-slate-700\r
      text-xs px-3 py-1.5 rounded-lg shadow-lg\r
      whitespace-nowrap\r
    `,children:"Ask your question on WhatsApp"}),e.jsxs("div",{className:"fixed bottom-6 right-6 z-[9999] flex flex-col items-end gap-3",children:[e.jsxs("div",{className:`
                    w-72 bg-slate-900/90 backdrop-blur-xl
                    border border-slate-700/60
                    shadow-[0_8px_30px_rgba(0,0,0,0.55)]
                    rounded-2xl p-4 text-slate-200
                    animate-fadeIn
                    ${K?"block":"hidden"}
                  `,children:[e.jsx("p",{className:"text-[11px] text-slate-400 mb-2",children:"Ask your question regarding this topic:"}),e.jsx("textarea",{id:"waMessage",placeholder:"Type your doubt here…",rows:3,className:`\r
        w-full bg-slate-800 text-slate-200\r
        border border-slate-600\r
        rounded-lg text-sm p-2\r
        focus:outline-none focus:border-sky-500\r
      `}),e.jsx("button",{onClick:()=>{const t=document.getElementById("waMessage").value.trim()||"(No question typed)",o="919432456083",d=encodeURIComponent(`📘 *Topic Support Query*

• *Module:* ${a.title}
• *Topic:* ${w}

📝 *Student Question:*
${t}

— Sent from Coder & AccoTax Learning Platform`);window.open(`https://wa.me/${o}?text=${d}`,"_blank")},className:`\r
        w-full mt-3 py-2\r
        bg-green-600 hover:bg-green-500\r
        rounded-lg text-sm font-semibold\r
        text-white transition\r
      `,children:"📲 Send on WhatsApp"})]}),e.jsx("button",{onClick:()=>A(s=>!s),className:`\r
      w-14 h-14 rounded-full\r
      bg-gradient-to-br from-green-500 to-green-600\r
      hover:from-green-400 hover:to-green-500\r
      shadow-[0_8px_25px_rgba(16,185,129,0.45)]\r
      border border-green-400/40\r
      flex items-center justify-center\r
      text-white text-2xl\r
      hover:scale-[1.06]\r
      transition-all\r
    `,children:"💬"})]})]})]})]})})]})}export{fe as default};
