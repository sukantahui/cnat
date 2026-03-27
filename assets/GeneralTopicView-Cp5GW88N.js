const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/Topic0-HqQX4H9t.js","assets/index-CRiz6zY8.js","assets/index-Dz09gbwp.css","assets/network-DRjDyAs-.js","assets/circle-alert-DiJaGb7l.js","assets/server-DOwYIEyk.js","assets/Topic1-h8z7cxmU.js","assets/Topic2-BqdtNGD6.js","assets/Topic3-CqncEqSA.js","assets/Topic4-B4BGe_xy.js","assets/PracticeEngineAdvance-BIWlz19L.js","assets/CodeBlockGeneral-CkFgS3oa.js","assets/prism-BvF-w-Cc.js","assets/prism-json-D0UlpdKh.js","assets/Topic5-CBJiQf21.js","assets/index-Chjiymov.js","assets/Topic6-CVldQdLs.js","assets/Topic7-CtHr8-Rt.js","assets/CodeBlock-CXiH8Y1W.js","assets/file-code-C3NGmQnN.js","assets/copy-BknYEKcl.js","assets/download-tHUdtA5g.js","assets/play-DYY1utPs.js","assets/Topic0-DqI-kgfe.js","assets/Topic1-ByrUJP4M.js"])))=>i.map(i=>d[i]);
import{u as Z,j as e,r as d,L as i,R as ee,A as j,b as H,B as te,l as y,n as se,C as G,X as re,_ as x}from"./index-CRiz6zY8.js";import{r as l}from"./general-roadmap-Bm9Nl7tM.js";const Q=Object.assign({"./topics/general-practice-test-one/Topic0.jsx":()=>x(()=>import("./Topic0-HqQX4H9t.js"),__vite__mapDeps([0,1,2,3,4,5])),"./topics/general-practice-test-one/Topic1.jsx":()=>x(()=>import("./Topic1-h8z7cxmU.js"),__vite__mapDeps([6,1,2])),"./topics/general-practice-test-one/Topic2.jsx":()=>x(()=>import("./Topic2-BqdtNGD6.js"),__vite__mapDeps([7,1,2])),"./topics/general-practice-test-one/Topic3.jsx":()=>x(()=>import("./Topic3-CqncEqSA.js"),__vite__mapDeps([8,1,2])),"./topics/general-practice-test-one/Topic4.jsx":()=>x(()=>import("./Topic4-B4BGe_xy.js"),__vite__mapDeps([9,1,2,10,11,12,13])),"./topics/general-practice-test-one/Topic5.jsx":()=>x(()=>import("./Topic5-CBJiQf21.js"),__vite__mapDeps([14,1,2,11,12,13,15])),"./topics/general-practice-test-one/Topic6.jsx":()=>x(()=>import("./Topic6-CVldQdLs.js"),__vite__mapDeps([16,1,2,10,11,12,13])),"./topics/general-practice-test-one/Topic7.jsx":()=>x(()=>import("./Topic7-CtHr8-Rt.js"),__vite__mapDeps([17,1,2,18,12,13,19,20,21,22])),"./topics/general-topics/Topic0.jsx":()=>x(()=>import("./Topic0-DqI-kgfe.js"),__vite__mapDeps([23,1,2])),"./topics/general-topics/Topic1.jsx":()=>x(()=>import("./Topic1-ByrUJP4M.js"),__vite__mapDeps([24,1,2]))});function ne(){const{moduleSlug:a,topicIndex:m}=Z();return e.jsx(le,{moduleSlug:a,topicIndex:m},`${a}-${m}`)}function le({moduleSlug:a,topicIndex:m}){const n=Number.parseInt(m,10)||0,P=d.useRef(null),[q,b]=d.useState(!1);let r=null,O=null;for(const s of l.segments){const t=s.modules.find(o=>o.slug===a);if(t){r=t,O=s;break}}if(!r)return e.jsxs("div",{className:"min-h-screen bg-slate-950 text-slate-100 p-10",children:[e.jsx("h1",{className:"text-2xl text-red-400 font-bold",children:"Module Not Found"}),e.jsx(i,{to:`/${l.folder}/roadmap`,className:"text-sky-400 underline mt-4 inline-block",children:"← Back to Roadmap"})]});const N=r.topics[n];if(!N)return e.jsxs("div",{className:"min-h-screen bg-slate-950 text-slate-100 p-10",children:[e.jsx("h1",{className:"text-2xl text-red-400 font-bold",children:"Topic Not Found"}),e.jsx(i,{to:`/${l.folder}/module/${a}`,className:"text-sky-400 underline mt-4 inline-block",children:"← Back to Module"})]});const v=`js-progress-${a}`,[C,S]=d.useState([]);d.useEffect(()=>{const s=localStorage.getItem(v)||"[]";let t=[];try{t=JSON.parse(s)}catch{t=[]}t.includes(n)||t.push(n),t.sort((o,c)=>o-c),localStorage.setItem(v,JSON.stringify(t)),S(t)},[n,v]);const h=r.topics.length,L=C.length,w=Math.round(L/h*100),B=n>0,A=n<h-1,D=()=>{localStorage.removeItem(v),S([])},I=`./topics/${a}/Topic${m}.jsx`,V=Q[I]?ee.lazy(Q[I]):null;d.useEffect(()=>{P.current&&P.current.scrollIntoView({behavior:"smooth",block:"center"})},[n]),d.useEffect(()=>{b(!1)},[a,m]);const[M,F]=d.useState(""),[p,J]=d.useState(()=>{try{return localStorage.getItem("student_name")||""}catch{return""}}),[k,K]=d.useState(!0),[W,E]=d.useState(!1),[Y,R]=d.useState(""),z=s=>s.map((t,o)=>`${o+1}. ${t}`).join(`
`);return e.jsxs("div",{className:"min-h-screen bg-slate-950 text-slate-100 flex flex-col relative overflow-hidden",children:[e.jsxs("div",{className:"absolute inset-0 pointer-events-none overflow-hidden",children:[e.jsxs("svg",{className:"absolute -top-40 -left-40 opacity-40",width:"420",height:"420",children:[e.jsx("defs",{children:e.jsxs("radialGradient",{id:"jsTopicBlob1",cx:"0",cy:"0",r:"1",gradientUnits:"userSpaceOnUse",gradientTransform:"translate(0,0) rotate(45) scale(400)",children:[e.jsx("stop",{stopColor:"#38bdf8"}),e.jsx("stop",{offset:"1",stopColor:"#020617",stopOpacity:"0"})]})}),e.jsx("circle",{cx:"200",cy:"200",r:"200",fill:"url(#jsTopicBlob1)"})]}),e.jsxs("svg",{className:"absolute bottom-[-160px] right-[-130px] opacity-40",width:"420",height:"420",children:[e.jsx("defs",{children:e.jsxs("radialGradient",{id:"jsTopicBlob2",cx:"0",cy:"0",r:"1",gradientUnits:"userSpaceOnUse",gradientTransform:"translate(400,400) rotate(225) scale(400)",children:[e.jsx("stop",{stopColor:"#a855f7"}),e.jsx("stop",{offset:"1",stopColor:"#020617",stopOpacity:"0"})]})}),e.jsx("circle",{cx:"200",cy:"200",r:"200",fill:"url(#jsTopicBlob2)"})]}),e.jsxs("svg",{className:"absolute inset-0 w-full h-full opacity-[0.06]",children:[e.jsx("defs",{children:e.jsx("pattern",{id:"jsTopicGrid",width:"40",height:"40",patternUnits:"userSpaceOnUse",children:e.jsx("path",{d:"M40 0H0V40",fill:"none",stroke:"#1f2937",strokeWidth:"1"})})}),e.jsx("rect",{width:"100%",height:"100%",fill:"url(#jsTopicGrid)"})]})]}),e.jsx("header",{className:"relative z-30 border-b border-slate-800/70 bg-slate-950/80 backdrop-blur-xl",children:e.jsxs("div",{className:"max-w-6xl mx-auto px-4 py-3 flex items-center justify-between gap-3",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsxs(i,{to:`/${l.folder}/roadmap`,className:"hidden sm:inline-flex items-center rounded-full border border-slate-700 bg-slate-900/70 px-2.5 py-1 text-[11px] text-slate-300 hover:border-sky-500 hover:text-sky-300",children:[e.jsx(j,{size:12,className:"mr-1"}),"Roadmap"]}),e.jsxs("div",{className:"flex flex-col",children:[e.jsxs("div",{className:"flex items-center gap-2 text-[11px] uppercase tracking-[0.18em] text-slate-500",children:[e.jsx(H,{size:12,className:"text-sky-400"}),e.jsx("span",{children:l.trackTitle})]}),e.jsxs("p",{className:"text-[11px] text-slate-400",children:[O?.title," • ",r.title]})]})]}),e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsxs("div",{className:"hidden md:flex flex-col items-end gap-1",children:[e.jsxs("div",{className:"flex items-center gap-2 text-[11px] text-slate-300",children:[e.jsx(te,{size:13,className:"text-sky-400"}),e.jsxs("span",{children:["Topic ",n+1," of ",h]})]}),e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx("div",{className:"w-28 h-1.5 rounded-full bg-slate-800 border border-slate-700 overflow-hidden",children:e.jsx("div",{className:"h-full bg-gradient-to-r from-sky-400 to-emerald-400",style:{width:`${w}%`}})}),e.jsxs("span",{className:"text-[11px] text-sky-300 font-semibold",children:[w,"%"]})]})]}),e.jsxs("div",{className:"hidden sm:flex items-center gap-2",children:[B?e.jsxs(i,{to:`/${l.folder}/topic/${a}/${n-1}`,className:"px-2.5 py-1.5 rounded-lg bg-slate-900 border border-slate-700 text-[11px] text-slate-200 hover:bg-slate-800",children:[e.jsx(j,{size:13})," Prev"]}):e.jsxs("button",{disabled:!0,className:"px-2.5 py-1.5 rounded-lg bg-slate-950 text-slate-600 border border-slate-900 text-[11px]",children:[e.jsx(j,{size:13})," Prev"]}),A?e.jsxs(i,{to:`/${l.folder}/topic/${a}/${n+1}`,className:"px-2.5 py-1.5 rounded-lg bg-sky-600 hover:bg-sky-500 border border-sky-500 text-[11px] text-white",children:["Next ",e.jsx(y,{size:13})]}):e.jsxs("button",{disabled:!0,className:"px-2.5 py-1.5 rounded-lg bg-slate-950 text-slate-600 border border-slate-900 text-[11px]",children:["Next ",e.jsx(y,{size:13})]})]}),e.jsxs("button",{type:"button",onClick:()=>b(!0),className:"inline-flex items-center gap-1 px-2.5 py-1.5 rounded-lg bg-slate-900 border border-slate-700 text-[11px] text-slate-100 sm:hidden",children:[e.jsx(se,{size:14})," Topics"]})]})]})}),e.jsx("div",{className:"relative z-20 flex-1 flex justify-center",children:e.jsxs("div",{className:"w-full max-w-6xl mx-auto flex",children:[e.jsxs("aside",{className:"hidden lg:flex flex-col w-72 shrink-0 border-r border-slate-800 bg-slate-950/60 backdrop-blur-xl pt-6 pb-8 px-4",children:[e.jsxs("div",{className:"mb-6 rounded-2xl border border-slate-800 bg-slate-900/80 p-4 text-xs text-slate-200",children:[e.jsxs("div",{className:"flex items-center justify-between mb-1",children:[e.jsx("span",{className:"uppercase tracking-[0.18em] text-[10px] text-slate-500",children:"Progress"}),e.jsxs("span",{className:"text-[11px] text-sky-300 font-semibold",children:[L,"/",h]})]}),e.jsx("div",{className:"w-full h-1.5 rounded-full bg-slate-800 border border-slate-700 overflow-hidden",children:e.jsx("div",{className:"h-full bg-gradient-to-r from-sky-400 to-emerald-400",style:{width:`${w}%`}})}),e.jsx("button",{type:"button",onClick:D,className:"mt-2 text-[11px] text-rose-300 hover:text-rose-400",children:"Reset Progress"})]}),e.jsx("div",{className:"space-y-2 text-sm",children:r.topics.map((s,t)=>{const o=t===n,c=C.includes(t);return e.jsxs(i,{ref:o?P:null,to:`/${l.folder}/topic/${a}/${t}`,className:`
                      relative flex items-center gap-3 px-3 py-2 rounded-xl border transition
                      ${o?"border-sky-500 bg-sky-600/90 text-white shadow-lg":"border-slate-800 bg-slate-900/90 text-slate-200 hover:bg-slate-800/90"}
                    `,children:[e.jsx("span",{className:`absolute left-0 top-0 h-full w-[3px] ${o?"bg-sky-300":"bg-slate-700"}`}),c?e.jsx(G,{size:16,className:"text-emerald-400 shrink-0"}):e.jsx("span",{className:"w-4 h-4 rounded-full border border-slate-500 shrink-0"}),e.jsxs("span",{className:"truncate",children:[e.jsxs("span",{className:"text-sky-300 mr-1 text-xs",children:[t+1,"."]}),s]})]},t)})}),e.jsxs("div",{className:"mt-6 pt-4 border-t border-slate-800 space-y-2 text-xs",children:[e.jsx(i,{to:`/${l.folder}/module/${a}`,className:"block px-3 py-2 rounded-lg bg-slate-900 border border-slate-700 hover:bg-slate-800 text-slate-200",children:"← Back to Module Overview"}),e.jsxs(i,{to:`/${l.folder}/roadmap`,className:"block px-3 py-2 rounded-lg bg-slate-900 border border-slate-700 hover:bg-slate-800 text-slate-200",children:["📍 ",l.subject," Roadmap"]}),e.jsx("a",{href:"/play",target:"_blank",rel:"noopener noreferrer",className:"block px-3 py-2 rounded-lg bg-slate-900 border border-slate-700 hover:bg-slate-800 text-slate-200",children:"🧪 CNAT Playground"})]}),e.jsxs("div",{className:"mb-6 rounded-2xl border border-slate-800 bg-slate-900/80 p-4 text-xs text-slate-300",children:[e.jsxs("div",{className:"flex items-center justify-between mb-2",children:[e.jsx("p",{className:"text-[11px] uppercase tracking-[0.15em] text-slate-500",children:"Send Topics List"}),e.jsxs("span",{className:"text-[11px] text-slate-400",children:[r.topics.length," topics"]})]}),e.jsx("label",{className:"text-[11px] text-slate-400",children:"Student name (optional)"}),e.jsx("input",{id:"waStudentNameInput",value:p,onChange:s=>J(s.target.value),type:"text",placeholder:"e.g., Ritaja Ghosh",className:"w-full bg-slate-800 text-slate-200 p-2 rounded-lg border border-slate-600 text-xs mt-1 mb-3 focus:outline-none focus:border-sky-500"}),e.jsx("label",{className:"text-[11px] text-slate-400",children:"WhatsApp number"}),e.jsx("input",{id:"waPhoneInput",value:M,onChange:s=>F(s.target.value),type:"text",placeholder:"e.g., 919876543210",className:"w-full bg-slate-800 text-slate-200 p-2 rounded-lg border border-slate-600 text-xs mt-1 focus:outline-none focus:border-sky-500"}),e.jsxs("div",{className:"flex items-center gap-2 mt-3",children:[e.jsxs("label",{className:"inline-flex items-center gap-2 text-xs text-slate-300",children:[e.jsx("input",{type:"checkbox",checked:k,onChange:()=>K(s=>!s),className:"accent-sky-500"}),"Include module link"]}),e.jsx("button",{onClick:()=>{if(!M.trim())return alert("Please enter a WhatsApp phone number.");const t=`${window.location.origin}/${l.folder}/module/${a}`,o=z(r.topics),$=`${p.trim()?`Hi ${p.trim()},

`:""}📘 *Ultra Premium Topic List*
━━━━━━━━━━━━━━━━━━━━`,g=`*Module:* ${r.title}
*Topics:* ${r.topics.length}
`,f=`
*Topics Preview:*
${o}
`,T=k?`
🔗 Module Link:
${t}
`:"",u=`${$}
${g}
${f}${T}
━━━━━━━━━━━━━━━━━━━━
Sent via Coder & AccoTax Learning Platform • Barrackpore
www.codernaccotax.co.in`;try{navigator.clipboard.writeText(u),alert("Message preview copied to clipboard. You can paste it in WhatsApp or preview below."),R(u),E(!0)}catch{R(u),E(!0)}},className:"ml-auto px-3 py-1 rounded-lg bg-slate-800 border border-slate-700 text-xs text-slate-300 hover:bg-slate-900",children:"Copy Preview"})]}),e.jsx("div",{className:"mt-3",children:e.jsx("button",{onClick:()=>{const s=`${window.location.origin}/${l.folder}/module/${a}`,t=z(r.topics),c=`${p.trim()?`Hi ${p.trim()},

`:""}📘 *Ultra Premium Topic List*
━━━━━━━━━━━━━━━━━━━━`,$=`*Module:* ${r.title}
*Topics:* ${r.topics.length}
`,g=`
*Topics Preview:*
${t}
`,f=k?`
🔗 Module Link:
${s}
`:"",_=`${c}
${$}
${g}${f}
━━━━━━━━━━━━━━━━━━━━
Sent via Coder & AccoTax Learning Platform • Barrackpore
www.codernaccotax.co.in`;R(_),E(u=>!u)},className:"w-full mt-3 py-2 rounded-lg bg-sky-600 hover:bg-sky-500 text-xs font-semibold text-white transition",children:W?"Hide Preview":"Preview Message"})}),W&&e.jsx("pre",{className:"mt-3 whitespace-pre-wrap text-[13px] bg-slate-900 border border-slate-800 rounded-lg p-3 text-slate-200 text-xs",children:Y||"No preview available."}),e.jsx("button",{onClick:()=>{const s=M.trim();if(!s)return alert("Please enter the WhatsApp phone number (with country code). Example: 919876543210");const t=s.replace(/[^0-9]/g,"");if(!/^\d{10,15}$/.test(t)&&!confirm("Phone number looks unusual. Continue anyway?"))return;const o=`${window.location.origin}/${l.folder}/module/${a}`,c=z(r.topics),g=`${p.trim()?`Hi ${p.trim()},

`:""}📘 *Ultra Premium Topic List*
━━━━━━━━━━━━━━━━━━━━`,f=`*Module:* ${r.title}
*Topics:* ${r.topics.length}
`,T=`
*Topics Preview:*
${c}
`,_=k?`
🔗 Module Link:
${o}
`:"",U=`${g}
${f}
${T}${_}
━━━━━━━━━━━━━━━━━━━━
Need help? Reply with "HELP" and we'll assist you.
Sent via Coder & AccoTax Learning Platform • Barrackpore
www.codernaccotax.co.in`;try{localStorage.setItem("student_name",p.trim())}catch{}const X=`https://wa.me/${t}?text=${encodeURIComponent(U)}`;window.open(X,"_blank")},className:"w-full mt-3 py-2 rounded-lg bg-green-600 hover:bg-green-500 text-xs font-semibold text-white transition",children:"📤 Send Ultra Premium Topic Message"}),e.jsx("p",{className:"text-[11px] text-slate-500 mt-2",children:"Tip: include country code (e.g., 91 for India). You can preview or copy the message before sending."})]})]}),q&&e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"fixed inset-0 z-40 bg-black/60 lg:hidden",onClick:()=>b(!1)}),e.jsxs("aside",{className:"fixed inset-y-0 left-0 z-50 w-72 bg-slate-950/95 backdrop-blur-xl border-r border-slate-800 pt-4 pb-6 px-4 flex flex-col lg:hidden",children:[e.jsxs("div",{className:"flex items-center justify-between mb-4",children:[e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx(H,{size:16,className:"text-sky-400"}),e.jsx("span",{className:"text-sm font-semibold text-sky-300",children:r.title})]}),e.jsx("button",{type:"button",onClick:()=>b(!1),className:"p-1 rounded-full border border-slate-700 bg-slate-900 hover:bg-slate-800 text-slate-300",children:e.jsx(re,{size:14})})]}),e.jsxs("div",{className:"mb-4 rounded-xl border border-slate-800 bg-slate-900/80 p-3 text-[11px] text-slate-200",children:[e.jsxs("div",{className:"flex items-center justify-between mb-1",children:[e.jsx("span",{className:"uppercase tracking-[0.18em] text-[10px] text-slate-500",children:"Progress"}),e.jsxs("span",{className:"text-sky-300 font-semibold",children:[L,"/",h]})]}),e.jsx("div",{className:"w-full h-1.5 bg-slate-800 border border-slate-700 rounded-full overflow-hidden",children:e.jsx("div",{className:"h-full bg-gradient-to-r from-sky-400 to-emerald-400",style:{width:`${w}%`}})}),e.jsx("button",{type:"button",onClick:D,className:"mt-2 text-[10px] text-rose-300 hover:text-rose-400",children:"Reset Progress"})]}),e.jsx("div",{className:"flex-1 overflow-y-auto space-y-2 text-sm",children:r.topics.map((s,t)=>{const o=t===n,c=C.includes(t);return e.jsxs(i,{to:`/${l.folder}/topic/${a}/${t}`,onClick:()=>b(!1),className:`
                          relative flex items-center gap-3 px-3 py-2 rounded-xl border transition
                          ${o?"border-sky-500 bg-sky-600/90 text-white shadow-lg":"border-slate-800 bg-slate-900/90 text-slate-200 hover:bg-slate-800/90"}
                        `,children:[e.jsx("span",{className:`absolute left-0 top-0 h-full w-[3px] ${o?"bg-sky-300":"bg-slate-700"}`}),c?e.jsx(G,{size:16,className:"text-emerald-400 shrink-0"}):e.jsx("span",{className:"w-4 h-4 rounded-full border border-slate-500 shrink-0"}),e.jsxs("span",{className:"truncate",children:[e.jsxs("span",{className:"text-sky-300 mr-1 text-xs",children:[t+1,"."]}),s]})]},t)})}),e.jsxs("div",{className:"mt-4 pt-3 border-t border-slate-800 space-y-2 text-xs",children:[e.jsx(i,{to:`/${l.folder}/module/${a}`,onClick:()=>b(!1),className:"block px-3 py-2 rounded-lg bg-slate-900 border border-slate-700 hover:bg-slate-800 text-slate-200",children:"← Back to Module Overview"}),e.jsxs(i,{to:`/${l.folder}/roadmap`,onClick:()=>b(!1),className:"block px-3 py-2 rounded-lg bg-slate-900 border border-slate-700 hover:bg-slate-800 text-slate-200",children:["📍 ",l.subject," Roadmap"]}),e.jsx("a",{href:"/play",target:"_blank",rel:"noopener noreferrer",className:"block px-3 py-2 rounded-lg bg-slate-900 border border-slate-700 hover:bg-slate-800 text-slate-200",children:"🧪 CNAT Playground"})]})]})]}),e.jsxs("main",{className:"flex-1 flex justify-center px-4 lg:px-8 py-6 lg:py-10",children:[e.jsxs("div",{className:"w-full max-w-3xl",children:[e.jsxs("div",{className:"mb-6 rounded-2xl border border-slate-800 bg-slate-900/60 backdrop-blur-xl shadow-xl relative overflow-hidden",children:[e.jsxs("svg",{className:"absolute top-0 left-0 w-full h-1.5",children:[e.jsx("defs",{children:e.jsxs("linearGradient",{id:"jsTopicHeaderLine",x1:"0%",y1:"0%",x2:"100%",y2:"0%",children:[e.jsx("stop",{offset:"0%",stopColor:"#38bdf8"}),e.jsx("stop",{offset:"50%",stopColor:"#22c55e"}),e.jsx("stop",{offset:"100%",stopColor:"#a855f7"})]})}),e.jsx("rect",{width:"100%",height:"100%",fill:"url(#jsTopicHeaderLine)"})]}),e.jsxs("div",{className:"p-6 flex flex-col md:flex-row md:justify-between",children:[e.jsxs("div",{children:[e.jsxs("p",{className:"text-[11px] uppercase tracking-[0.18em] text-slate-500 flex items-center gap-2",children:[e.jsxs("span",{className:"inline-flex items-center justify-center rounded-full bg-slate-800 border border-slate-700 px-2 py-[2px] text-[9px] text-sky-300",children:["Topic ",n+1," / ",h]}),r.level||"Module"," • ",r.difficulty||"Difficulty"]}),e.jsx("h1",{className:"text-xl md:text-2xl font-bold text-sky-300",children:N}),e.jsxs("p",{className:"text-[12px] text-slate-400 mt-1",children:["Module: ",e.jsx("span",{className:"text-slate-200",children:r.title})]})]}),e.jsxs("div",{className:"flex items-center gap-2 mt-4 md:mt-0",children:[B?e.jsxs(i,{to:`/${l.folder}/topic/${a}/${n-1}`,className:"px-2.5 py-1.5 rounded-lg bg-slate-900 border border-slate-700 text-[11px] text-slate-200 hover:bg-slate-800",children:[e.jsx(j,{size:13})," Prev"]}):e.jsxs("button",{disabled:!0,className:"px-2.5 py-1.5 rounded-lg bg-slate-950 border border-slate-900 text-[11px] text-slate-600",children:[e.jsx(j,{size:13})," Prev"]}),A?e.jsxs(i,{to:`/${l.folder}/topic/${a}/${n+1}`,className:"px-2.5 py-1.5 rounded-lg bg-sky-600 border border-sky-500 text-[11px] text-white hover:bg-sky-500",children:["Next ",e.jsx(y,{size:13})]}):e.jsxs("button",{disabled:!0,className:"px-2.5 py-1.5 rounded-lg bg-slate-950 border border-slate-900 text-[11px] text-slate-600",children:["Next ",e.jsx(y,{size:13})]})]})]})]}),e.jsxs("section",{className:"relative rounded-3xl border border-slate-800 bg-slate-900/70 backdrop-blur-lg shadow-[0_22px_45px_rgba(15,23,42,0.75)] px-5 md:px-8 py-6 md:py-8",children:[e.jsx(d.Suspense,{fallback:e.jsx("p",{className:"text-slate-400 text-sm",children:"Loading topic content…"}),children:V?e.jsx(V,{},I):e.jsxs("div",{className:"text-slate-300 text-sm",children:[e.jsx("p",{className:"mb-1",children:"Topic file missing:"}),e.jsx("pre",{className:"text-sky-400 mt-2 text-xs bg-slate-950/60 rounded-lg p-3 border border-slate-800 overflow-x-auto",children:`src/components/study/${l.folder}/topics/${a}/Topic${m}.jsx`})]})}),e.jsxs("div",{className:"mt-10 p-5 rounded-2xl border border-slate-700 bg-slate-900/60 shadow-lg space-y-3",children:[e.jsx("h3",{className:"text-lg font-semibold text-sky-300",children:"Have a Question About This Topic?"}),e.jsx("p",{className:"text-sm text-slate-400",children:"Send your doubts directly on WhatsApp. I will reply as soon as possible."}),e.jsx("textarea",{id:"waQuery",placeholder:"Type your question here...",className:"w-full bg-slate-800 text-slate-200 p-3 rounded-xl border border-slate-600 text-sm focus:outline-none focus:border-sky-500",rows:3}),e.jsx("button",{onClick:()=>{const s=document.getElementById("waQuery").value.trim();if(!s)return alert("Please type your question first.");const t="919432456083",o=encodeURIComponent(`Hello Sir,
I have a query regarding:

• Module: ${r.title}
• Topic: ${N}

My Question:
${s}`);window.open(`https://wa.me/${t}?text=${o}`,"_blank")},className:"px-4 py-2 rounded-lg bg-green-600 hover:bg-green-500 text-white text-sm font-semibold transition",children:"📲 Send WhatsApp Query"})]})]})]}),e.jsxs("div",{className:"fixed bottom-6 right-6 z-[9999] group",children:[e.jsx("div",{className:`\r
      absolute right-14 bottom-1\r
      opacity-0 group-hover:opacity-100\r
      transition-opacity duration-300\r
      bg-slate-900 text-slate-200\r
      border border-slate-700\r
      text-xs px-3 py-1.5 rounded-lg shadow-lg\r
      whitespace-nowrap\r
    `,children:"Ask your question on WhatsApp"}),e.jsxs("div",{className:"fixed bottom-6 right-6 z-[9999] flex flex-col items-end gap-3",children:[e.jsxs("div",{id:"waBox",className:`\r
      w-72\r
      bg-slate-900/90 backdrop-blur-xl\r
      border border-slate-700/60\r
      shadow-[0_8px_30px_rgba(0,0,0,0.55)]\r
      rounded-2xl\r
      p-4\r
      text-slate-200\r
      hidden\r
      animate-fadeIn\r
    `,children:[e.jsx("p",{className:"text-[11px] text-slate-400 mb-2",children:"Ask your question regarding this topic:"}),e.jsx("textarea",{id:"waMessage",placeholder:"Type your doubt here…",rows:3,className:`\r
        w-full bg-slate-800 text-slate-200\r
        border border-slate-600\r
        rounded-lg text-sm p-2\r
        focus:outline-none focus:border-sky-500\r
      `}),e.jsx("button",{onClick:()=>{const t=document.getElementById("waMessage").value.trim()||"(No question typed)",o="919432456083",c=encodeURIComponent(`📘 *Topic Support Query*

• *Module:* ${r.title}
• *Topic:* ${N}

📝 *Student Question:*
${t}

— Sent from Coder & AccoTax Learning Platform`);window.open(`https://wa.me/${o}?text=${c}`,"_blank")},className:`\r
        w-full mt-3 py-2\r
        bg-green-600 hover:bg-green-500\r
        rounded-lg text-sm font-semibold\r
        text-white transition\r
      `,children:"📲 Send on WhatsApp"})]}),e.jsx("button",{onClick:()=>{document.getElementById("waBox").classList.toggle("hidden")},className:`\r
      w-14 h-14 rounded-full\r
      bg-gradient-to-br from-green-500 to-green-600\r
      hover:from-green-400 hover:to-green-500\r
      shadow-[0_8px_25px_rgba(16,185,129,0.45)]\r
      border border-green-400/40\r
      flex items-center justify-center\r
      text-white text-2xl\r
      hover:scale-[1.06]\r
      transition-all\r
    `,children:"💬"})]})]})]}),A&&e.jsxs(i,{to:`/${l.folder}/topic/${a}/${n+1}`,className:`\r
                fixed\r
                bottom-6\r
                right-[calc(50%-24rem)]\r
                translate-x-[24rem]\r
                z-[9998]\r
                flex items-center gap-2\r
                px-5 py-3\r
                rounded-full\r
                bg-gradient-to-r from-sky-600 to-indigo-600\r
                hover:from-sky-500 hover:to-indigo-500\r
                text-white\r
                text-sm\r
                font-semibold\r
                shadow-[0_10px_30px_rgba(56,189,248,0.45)]\r
                border border-white/10\r
                backdrop-blur\r
                transition-all\r
                hover:scale-[1.05]\r
                animate-fadeIn\r
              `,children:["Next Topic",e.jsx(y,{size:16})]})]})})]})}export{ne as default};
