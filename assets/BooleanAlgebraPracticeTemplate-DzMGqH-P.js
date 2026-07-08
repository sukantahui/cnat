import{r as y,j as e}from"./index-gsr__VoO.js";function F(n){const x=[...n];for(let p=x.length-1;p>0;p--){const u=Math.floor(Math.random()*(p+1));[x[p],x[u]]=[x[u],x[p]]}return x}function a(n){return n?n.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#39;"):""}function G({minterms:n=[],dc:x=[],groups:p=[],variables:u=4}){const C=["00","01","11","10"],f=["00","01","11","10"],k=(o,i)=>{const c=parseInt(o,2),d=parseInt(i,2);return c*4+d},h=(o,i)=>{const c=k(o,i);return n.includes(c)?"one":x.includes(c)?"dc":"zero"},N=(o,i)=>{const c=k(o,i);if(!p)return null;for(let d=0;d<p.length;d++)if(p[d].cells&&p[d].cells.includes(c))return d;return null},g=["bg-red-200/70","bg-green-200/70","bg-blue-200/70","bg-yellow-200/70","bg-purple-200/70","bg-pink-200/70"];return e.jsx("div",{className:"overflow-x-auto my-4",children:e.jsxs("table",{className:"border-collapse border border-gray-600 text-center text-sm mx-auto",children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{className:"border p-2 bg-gray-800",children:"AB \\ CD"}),f.map(o=>e.jsx("th",{className:"border p-2 bg-gray-800",children:o},o))]})}),e.jsx("tbody",{children:C.map(o=>e.jsxs("tr",{children:[e.jsx("th",{className:"border p-2 bg-gray-800",children:o}),f.map(i=>{const c=k(o,i),d=h(o,i),$=N(o,i),A=$!==null?g[$%g.length]:"";let v="";return d==="one"?v="1":d==="dc"?v="X":v="0",e.jsx("td",{className:`border p-3 font-mono ${A} ${d==="one"?"font-bold":""}`,title:`Cell ${c}`,children:v},i)})]},o))})]})})}function _({data:n}){const[x,p]=y.useState([]),[u,C]=y.useState("all"),[f,k]=y.useState(15),[h,N]=y.useState(!1),[g,o]=y.useState([]),[i,c]=y.useState("");if(!n||!n.sections)return e.jsx("p",{className:"p-4 text-red-400",children:"No questions found."});const d=n.sections.flatMap(s=>s.questions.map(r=>({...r,sectionName:s.section,sectionType:s.type,marks:r.marks!==void 0?r.marks:s.marksPerQuestion}))),$=["all",...new Set(n.sections.map(s=>s.section))],A=u==="all"?d:d.filter(s=>s.sectionName===u);function v(s){p(r=>r.includes(s)?r.filter(l=>l!==s):[...r,s])}const I=h?i.trim()?g.filter(r=>r.id.toString()===i.trim()):g:[],L=()=>{c("")},P=()=>{if(!g.length)return;const s={name:"Coder & AccoTax",phone:"+91 7003756860",website:"https://codernaccotax.co.in"},r=`${window.location.origin}/assets/cnat-stamp.png`,l=`${n.title}`,w=t=>{const E=["00","01","11","10"],m=["00","01","11","10"],B=(j,M)=>parseInt(j,2)*4+parseInt(M,2);let b='<table class="kmap-print" border="1" cellpadding="8" cellspacing="0" style="border-collapse: collapse; margin: 10px 0; font-family: monospace;">';return b+='<thead><tr><th style="background:#f0f0f0;">AB\\CD</th>',m.forEach(j=>{b+=`<th style="background:#f0f0f0;">${j}</th>`}),b+="</tr></thead><tbody>",E.forEach(j=>{b+=`<tr><th style="background:#f0f0f0;">${j}</th>`,m.forEach(M=>{const Q=B(j,M);let S="";t.minterms&&t.minterms.includes(Q)?S="1":t.dc&&t.dc.includes(Q)?S="X":S="0";let T="";if(t.steps){for(let D of t.steps)if(D.cells&&D.cells.includes(Q)){T="kmap-group";break}}b+=`<td class="${T}" style="text-align:center; ${T?"background:#e6f7e6;":""}">${S}</td>`}),b+="</tr>"}),b+="</tbody></table>",b},z=window.open("","_blank");z.document.write(`
      <!DOCTYPE html>
      <html>
        <head>
          <title>${a(l)}</title>
          <meta charset="UTF-8" />
          <style>
            * { margin: 0; padding: 0; box-sizing: border-box; }
            body {
              font-family: 'Georgia', 'Times New Roman', Times, serif;
              background: white;
              color: black;
              margin: 0;
              padding: 0;
              font-size: 10pt;
              line-height: 1.4;
            }
            .print-header {
              position: fixed;
              top: 0;
              left: 0;
              right: 0;
              background: white;
              text-align: center;
              font-size: 9pt;
              font-family: Arial, Helvetica, sans-serif;
              padding: 0.4cm 0;
              border-bottom: 2px solid #aaa;
              z-index: 1000;
            }
            .spacer { height: 1.4cm; }
            .main-content { padding: 0.4cm 1.2cm 1.2cm 1.2cm; }
            .header {
              text-align: center;
              margin-bottom: 1rem;
              border-bottom: 1px solid #aaa;
              padding-bottom: 0.5rem;
            }
            .header h1 { font-size: 18pt; margin-bottom: 0.2rem; }
            .header p { font-size: 10pt; color: #333; }
            @page {
              size: A4;
              margin: 1.8cm 1.2cm 1.2cm 1.2cm;
              @bottom-center {
                content: "Page " counter(page) " of " counter(pages);
                font-family: Arial, sans-serif;
                font-size: 8pt;
              }
            }
            .question-card {
              margin-bottom: 1.2rem;
              page-break-inside: avoid;
              break-inside: avoid;
            }
            .question-title {
              font-weight: bold;
              font-size: 11pt;
              margin: 0.3rem 0 0.2rem;
            }
            .section-badge {
              display: inline-block;
              background: #e2e8f0;
              color: #1e293b;
              font-size: 8pt;
              padding: 0.1rem 0.4rem;
              border-radius: 10px;
              font-family: monospace;
              margin-bottom: 0.3rem;
            }
            .marks {
              display: inline-block;
              background: #facc15;
              color: #1e1e1e;
              font-size: 8pt;
              padding: 0.1rem 0.4rem;
              border-radius: 10px;
              margin-left: 8px;
            }
            .step {
              margin-left: 1rem;
              margin-top: 0.4rem;
              border-left: 2px solid #94a3b8;
              padding-left: 0.8rem;
            }
            .step-action { font-weight: bold; color: #2563eb; }
            .step-expression { font-family: 'Courier New', monospace; background: #f1f5f9; padding: 0.2rem 0.4rem; border-radius: 4px; }
            .step-law { font-style: italic; color: #4b5563; }
            .answer-section {
              margin-top: 0.5rem;
              background: #faf9f5;
              padding: 0.6rem;
              border-left: 3px solid #2c7da0;
              font-size: 9.5pt;
            }
            .stamp {
              position: fixed;
              bottom: 1.2cm;
              right: 1.2cm;
              width: 300px;
              opacity: 0.38;
              pointer-events: none;
              z-index: 9999;
              transform: rotate(-21deg);
            }
            table.kmap-print {
              border-collapse: collapse;
              margin: 10px 0;
            }
            table.kmap-print th, table.kmap-print td {
              border: 1px solid #333;
              padding: 6px 10px;
              text-align: center;
              font-family: monospace;
            }
            table.kmap-print th { background: #f0f0f0; }
            .kmap-group { background-color: #e6f7e6 !important; }
          </style>
        </head>
        <body>
          <div class="print-header">
            📘 ${s.name} &nbsp;|&nbsp; 📞 ${s.phone} &nbsp;|&nbsp; 🌐 ${s.website}
          </div>
          <img src="${r}" class="stamp" alt="CNAT Stamp" />
          <div class="spacer"></div>
          <div class="main-content">
            <div class="header">
              <h1>${a(n.title)}</h1>
              <p>${a(n.subject)} • Class ${a(n.class)} • ${a(n.board)}</p>
              <p>Duration: ${a(n.duration)} | Total Marks: ${n.totalMarks}</p>
              <p>Questions in this set: ${g.length}</p>
            </div>
            ${g.map((t,E)=>`
              <div class="question-card">
                <div>
                  <span class="section-badge">${a(t.sectionName)}</span>
                  <span class="marks">${t.marks} marks</span>
                </div>
                <div class="question-title">Q${E+1}. ${a(t.q)}</div>
                <div class="answer-section">
                  ${t.type==="kmap"?`
                        <div><strong>🗺️ Karnaugh Map:</strong></div>
                        ${w(t)}
                        ${t.steps&&t.steps.length?`<div><strong>📝 Grouping steps:</strong></div>
                               ${t.steps.map(m=>`
                                   <div class="step">
                                     <div class="step-action">Step ${m.step}: ${a(m.action)}</div>
                                     ${m.term?`<div><strong>Resulting term:</strong> ${a(m.term)}</div>`:""}
                                     ${m.law?`<div class="step-law">Law: ${a(m.law)}</div>`:""}
                                   </div>
                                 `).join("")}
                             `:""}
                        <div><strong>✨ Simplified expression:</strong> ${a(t.answer)}</div>
                        ${t.explanation?`<div><strong>💡 Explanation:</strong> ${a(t.explanation)}</div>`:""}
                      `:`
                        ${t.steps&&t.steps.length?`<div><strong>📝 Step-by-step solution:</strong></div>
                               ${t.steps.map(m=>`
                                   <div class="step">
                                     <div class="step-action">Step ${m.step}: ${a(m.action)}</div>
                                     <div class="step-expression">${a(m.expression)}</div>
                                     <div class="step-law">Law: ${a(m.law)}</div>
                                   </div>
                                 `).join("")}
                               <div><strong>✨ Simplified result:</strong> ${a(t.simplified||t.answer)}</div>
                               ${t.explanation?`<div><strong>💡 Explanation:</strong> ${a(t.explanation)}</div>`:""}
                             `:`
                               <div><strong>📖 Answer:</strong><br/>${a(t.answer)}</div>
                               ${t.explanation?`<div><strong>💡 Explanation:</strong><br/>${a(t.explanation)}</div>`:""}
                             `}
                      `}
                </div>
              </div>
            `).join("")}
          </div>
        </body>
      </html>
    `),z.document.close(),z.focus(),z.print()};return e.jsx("div",{className:"min-h-screen bg-gradient-to-br from-zinc-950 via-black to-zinc-900 text-zinc-200 p-6",children:e.jsxs("div",{className:"max-w-5xl mx-auto",children:[e.jsxs("div",{className:"flex items-center gap-4 mb-8",children:[e.jsx("div",{className:"p-3 rounded-2xl bg-gradient-to-br from-zinc-900 via-zinc-800 to-zinc-900 shadow-[0_0_30px_rgba(56,189,248,0.35)] ring-1 ring-sky-500/40",children:e.jsx("span",{className:"text-3xl",children:"🧠"})}),e.jsxs("div",{children:[e.jsx("h1",{className:"text-3xl font-bold text-sky-400 tracking-wide",children:n.title}),e.jsxs("p",{className:"text-sm text-zinc-400",children:[n.subject," • Class ",n.class," • ",n.board," •"," ",n.duration," • ",n.totalMarks," marks"]})]})]}),e.jsxs("div",{className:"bg-zinc-900/80 border border-zinc-800 p-5 rounded-xl mb-8 flex flex-wrap gap-4 items-center justify-between",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"text-sm text-zinc-400",children:"Section"}),e.jsx("select",{value:u,onChange:s=>{C(s.target.value),N(!1),c("")},className:"bg-zinc-900 border border-zinc-700 p-2 rounded-md",children:$.map((s,r)=>e.jsx("option",{value:s,children:s==="all"?"All Sections":s},r))})]}),e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"text-sm text-zinc-400",children:"Questions"}),e.jsxs("select",{value:f,onChange:s=>{const r=s.target.value;k(r==="all"?"all":Number(r)),N(!1),c("")},className:"bg-zinc-900 border border-zinc-700 p-2 rounded-md",children:[e.jsx("option",{value:"all",children:"All"}),[5,10,15,20,30,40].map(s=>e.jsx("option",{value:s,children:s},s))]})]}),e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx("span",{className:"text-sm text-zinc-400",children:"Search ID"}),e.jsx("input",{type:"text",value:i,onChange:s=>c(s.target.value),placeholder:"e.g., 34",className:"bg-zinc-900 border border-zinc-700 p-2 rounded-md w-24 text-center",disabled:!h}),e.jsx("button",{onClick:L,disabled:!h||!i,className:"px-3 py-2 bg-zinc-700 hover:bg-zinc-600 rounded-md text-sm disabled:opacity-50",children:"Clear"})]}),e.jsxs("div",{className:"flex gap-3",children:[e.jsx("button",{onClick:()=>{p([]),c("");const s=F(A);o(f==="all"?s:s.slice(0,f)),N(!0)},className:"px-6 py-2 bg-sky-600 hover:bg-sky-500 text-white rounded-lg shadow",children:"Start Practice"}),e.jsx("button",{onClick:P,disabled:!h||g.length===0,className:`px-6 py-2 rounded-lg shadow transition ${h&&g.length?"bg-emerald-700 hover:bg-emerald-600 text-white":"bg-zinc-700 text-zinc-400 cursor-not-allowed"}`,children:"🖨️ Print"})]})]}),h&&e.jsxs(e.Fragment,{children:[I.length===0&&i&&e.jsxs("div",{className:"bg-yellow-900/30 border border-yellow-700 p-4 rounded-xl mb-6 text-yellow-200 text-center",children:['⚠️ No question found with ID "',i,'". Try a different ID or clear the search.']}),I.map((s,r)=>e.jsxs("div",{className:"bg-zinc-900/80 border border-zinc-800 p-5 mb-6 rounded-2xl shadow-lg hover:shadow-sky-900/30 transition",children:[e.jsxs("div",{className:"flex justify-between items-start mb-3 flex-wrap gap-2",children:[e.jsxs("p",{className:"font-semibold text-zinc-100",children:["Q",r+1,". ",s.q]}),e.jsxs("div",{className:"flex gap-2",children:[e.jsx("span",{className:"text-xs px-2 py-1 rounded bg-sky-900 text-sky-300",children:s.sectionName}),e.jsxs("span",{className:"text-xs px-2 py-1 rounded bg-amber-800 text-amber-200",children:[s.marks," marks"]}),e.jsxs("span",{className:"text-xs px-2 py-1 rounded bg-gray-700 text-gray-300",children:["ID: ",s.id]})]})]}),e.jsx("button",{onClick:()=>v(s.id),className:"mt-2 p-2 rounded-full border border-sky-500/40 bg-slate-900 hover:bg-sky-700/40 transition",children:x.includes(s.id)?e.jsx("svg",{className:"w-5 h-5 text-emerald-400",fill:"none",stroke:"currentColor",strokeWidth:"2",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M13.875 18.825A10.05 10.05 0 0112 19c-5 0-9.27-3.11-11-7.5a11.05 11.05 0 014.95-5.9M15 12a3 3 0 11-6 0 3 3 0 016 0zm6.12 5.88L3 3"})}):e.jsx("svg",{className:"w-5 h-5 text-sky-400",fill:"none",stroke:"currentColor",strokeWidth:"2",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M15 12a3 3 0 11-6 0 3 3 0 016 0zm7.5 0S18.27 4.5 12 4.5 1.5 12 1.5 12 5.73 19.5 12 19.5 22.5 12 22.5 12z"})})}),x.includes(s.id)&&e.jsx("div",{className:"mt-3 bg-slate-900/70 border border-slate-700 p-4 rounded-xl shadow-inner space-y-3",children:s.type==="kmap"?e.jsxs(e.Fragment,{children:[e.jsxs("div",{children:[e.jsx("p",{className:"text-emerald-300 text-sm font-semibold mb-2",children:"🗺️ Karnaugh Map"}),e.jsx(G,{minterms:s.minterms||[],dc:s.dc||[],groups:s.steps?.map(l=>({cells:l.cells||[]}))||[],variables:s.variables||4})]}),s.steps&&s.steps.length>0&&e.jsxs("div",{children:[e.jsx("p",{className:"text-emerald-300 text-sm font-semibold mb-2",children:"📝 Step-by-step grouping:"}),e.jsx("div",{className:"space-y-3",children:s.steps.map((l,w)=>e.jsxs("div",{className:"border-l-2 border-sky-500 pl-3",children:[e.jsxs("p",{className:"text-sky-300 text-sm",children:["Step ",l.step,": ",l.action]}),l.term&&e.jsxs("p",{className:"text-zinc-200 text-sm",children:["→ Result: ",l.term]}),l.law&&e.jsxs("p",{className:"text-zinc-400 text-xs italic",children:["Law: ",l.law]})]},w))})]}),e.jsxs("p",{className:"text-emerald-300 text-sm",children:["✨ Simplified expression: ",e.jsx("span",{className:"font-mono",children:s.answer})]}),s.explanation&&e.jsxs("p",{className:"text-slate-300 text-sm",children:["💡 Explanation: ",s.explanation]})]}):e.jsxs(e.Fragment,{children:[s.steps&&s.steps.length?e.jsxs(e.Fragment,{children:[e.jsx("p",{className:"text-emerald-300 text-sm font-semibold mb-2",children:"📝 Step-by-step solution:"}),s.steps.map((l,w)=>e.jsxs("div",{className:"border-l-2 border-sky-500 pl-3",children:[e.jsxs("p",{className:"text-sky-300 text-sm",children:["Step ",l.step,": ",l.action]}),e.jsx("pre",{className:"bg-slate-950 p-2 rounded-md text-slate-200 text-sm font-mono mt-1",children:l.expression}),e.jsxs("p",{className:"text-zinc-400 text-xs italic mt-1",children:["Law: ",l.law]})]},w)),s.simplified&&e.jsxs("p",{className:"text-emerald-300 text-sm",children:["✨ Simplified result: ",e.jsx("span",{className:"font-mono",children:s.simplified})]})]}):e.jsx("p",{className:"text-slate-200 text-sm leading-relaxed",children:s.answer}),s.explanation&&e.jsxs("p",{className:"text-slate-300 text-sm leading-relaxed",children:["💡 Explanation: ",s.explanation]})]})})]},s.id)),I.length===0&&!i&&e.jsx("p",{className:"text-center text-zinc-500 mt-10",children:"No questions match the selected criteria."})]}),!h&&e.jsxs("p",{className:"text-center text-zinc-500 mt-10",children:["Select a section and number of questions, then click ",e.jsx("b",{children:"Start Practice"}),"."]})]})})}export{_ as B};
