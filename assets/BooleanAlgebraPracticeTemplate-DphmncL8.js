import{r as N,j as e}from"./index-C0Oguwhi.js";function Q(n){const p=[...n];for(let c=p.length-1;c>0;c--){const h=Math.floor(Math.random()*(c+1));[p[c],p[h]]=[p[h],p[c]]}return p}function a(n){return n?n.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#39;"):""}function B({minterms:n=[],dc:p=[],groups:c=[],variables:h=4}){const S=["00","01","11","10"],f=["00","01","11","10"],j=(r,d)=>{const x=parseInt(r,2),m=parseInt(d,2);return x*4+m},u=(r,d)=>{const x=j(r,d);return n.includes(x)?"one":p.includes(x)?"dc":"zero"},k=(r,d)=>{const x=j(r,d);if(!c)return null;for(let m=0;m<c.length;m++)if(c[m].cells&&c[m].cells.includes(x))return m;return null},g=["bg-red-200/70","bg-green-200/70","bg-blue-200/70","bg-yellow-200/70","bg-purple-200/70","bg-pink-200/70"];return e.jsx("div",{className:"overflow-x-auto my-4",children:e.jsxs("table",{className:"border-collapse border border-gray-600 text-center text-sm mx-auto",children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{className:"border p-2 bg-gray-800",children:"AB \\ CD"}),f.map(r=>e.jsx("th",{className:"border p-2 bg-gray-800",children:r},r))]})}),e.jsx("tbody",{children:S.map(r=>e.jsxs("tr",{children:[e.jsx("th",{className:"border p-2 bg-gray-800",children:r}),f.map(d=>{const x=j(r,d),m=u(r,d),w=k(r,d),C=w!==null?g[w%g.length]:"";let s="";return m==="one"?s="1":m==="dc"?s="X":s="0",e.jsx("td",{className:`border p-3 font-mono ${C} ${m==="one"?"font-bold":""}`,title:`Cell ${x}`,children:s},d)})]},r))})]})})}function D({data:n}){const[p,c]=N.useState([]),[h,S]=N.useState("all"),[f,j]=N.useState(15),[u,k]=N.useState(!1),[g,r]=N.useState([]);if(!n||!n.sections)return e.jsx("p",{className:"p-4 text-red-400",children:"No questions found."});const d=n.sections.flatMap(s=>s.questions.map(l=>({...l,sectionName:s.section,sectionType:s.type,marks:l.marks!==void 0?l.marks:s.marksPerQuestion}))),x=["all",...new Set(n.sections.map(s=>s.section))],m=h==="all"?d:d.filter(s=>s.sectionName===h);function w(s){c(l=>l.includes(s)?l.filter(i=>i!==s):[...l,s])}const C=()=>{if(!g.length)return;const s={name:"Coder & AccoTax",phone:"+91 7003756860",website:"https://codernaccotax.co.in"},l=`${window.location.origin}/assets/cnat-stamp.png`,i=`${n.title}`,y=t=>{const A=["00","01","11","10"],o=["00","01","11","10"],P=(v,E)=>parseInt(v,2)*4+parseInt(E,2);let b='<table class="kmap-print" border="1" cellpadding="8" cellspacing="0" style="border-collapse: collapse; margin: 10px 0; font-family: monospace;">';return b+='<thead><tr><th style="background:#f0f0f0;">AB\\CD</th>',o.forEach(v=>{b+=`<th style="background:#f0f0f0;">${v}</th>`}),b+="</tr></thead><tbody>",A.forEach(v=>{b+=`<tr><th style="background:#f0f0f0;">${v}</th>`,o.forEach(E=>{const M=P(v,E);let z="";t.minterms&&t.minterms.includes(M)?z="1":t.dc&&t.dc.includes(M)?z="X":z="0";let L="";if(t.steps){for(let T of t.steps)if(T.cells&&T.cells.includes(M)){L="kmap-group";break}}b+=`<td class="${L}" style="text-align:center; ${L?"background:#e6f7e6;":""}">${z}</td>`}),b+="</tr>"}),b+="</tbody></table>",b},$=window.open("","_blank");$.document.write(`
      <!DOCTYPE html>
      <html>
        <head>
          <title>${a(i)}</title>
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
            .spacer {
              height: 1.4cm;
            }
            .main-content {
              padding: 0.4cm 1.2cm 1.2cm 1.2cm;
            }
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
            table.kmap-print th {
              background: #f0f0f0;
            }
            .kmap-group {
              background-color: #e6f7e6 !important;
            }
          </style>
        </head>
        <body>
          <div class="print-header">
            📘 ${s.name} &nbsp;|&nbsp; 📞 ${s.phone} &nbsp;|&nbsp; 🌐 ${s.website}
          </div>
          <img src="${l}" class="stamp" alt="CNAT Stamp" />
          <div class="spacer"></div>
          <div class="main-content">
            <div class="header">
              <h1>${a(n.title)}</h1>
              <p>${a(n.subject)} • Class ${a(n.class)} • ${a(n.board)}</p>
              <p>Duration: ${a(n.duration)} | Total Marks: ${n.totalMarks}</p>
              <p>Questions in this set: ${g.length}</p>
            </div>
            ${g.map((t,A)=>`
              <div class="question-card">
                <div>
                  <span class="section-badge">${a(t.sectionName)}</span>
                  <span class="marks">${t.marks} marks</span>
                </div>
                <div class="question-title">Q${A+1}. ${a(t.q)}</div>
                <div class="answer-section">
                  ${t.type==="kmap"?`
                        <div><strong>🗺️ Karnaugh Map:</strong></div>
                        ${y(t)}
                        ${t.steps&&t.steps.length?`<div><strong>📝 Grouping steps:</strong></div>
                               ${t.steps.map(o=>`
                                   <div class="step">
                                     <div class="step-action">Step ${o.step}: ${a(o.action)}</div>
                                     ${o.term?`<div><strong>Resulting term:</strong> ${a(o.term)}</div>`:""}
                                     ${o.law?`<div class="step-law">Law: ${a(o.law)}</div>`:""}
                                   </div>
                                 `).join("")}
                             `:""}
                        <div><strong>✨ Simplified expression:</strong> ${a(t.answer)}</div>
                        ${t.explanation?`<div><strong>💡 Explanation:</strong> ${a(t.explanation)}</div>`:""}
                      `:`
                        ${t.steps&&t.steps.length?`<div><strong>📝 Step-by-step solution:</strong></div>
                               ${t.steps.map(o=>`
                                   <div class="step">
                                     <div class="step-action">Step ${o.step}: ${a(o.action)}</div>
                                     <div class="step-expression">${a(o.expression)}</div>
                                     <div class="step-law">Law: ${a(o.law)}</div>
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
    `),$.document.close(),$.focus(),$.print()};return e.jsx("div",{className:"min-h-screen bg-gradient-to-br from-zinc-950 via-black to-zinc-900 text-zinc-200 p-6",children:e.jsxs("div",{className:"max-w-5xl mx-auto",children:[e.jsxs("div",{className:"flex items-center gap-4 mb-8",children:[e.jsx("div",{className:"p-3 rounded-2xl bg-gradient-to-br from-zinc-900 via-zinc-800 to-zinc-900 shadow-[0_0_30px_rgba(56,189,248,0.35)] ring-1 ring-sky-500/40",children:e.jsx("span",{className:"text-3xl",children:"🧠"})}),e.jsxs("div",{children:[e.jsx("h1",{className:"text-3xl font-bold text-sky-400 tracking-wide",children:n.title}),e.jsxs("p",{className:"text-sm text-zinc-400",children:[n.subject," • Class ",n.class," • ",n.board," •"," ",n.duration," • ",n.totalMarks," marks"]})]})]}),e.jsxs("div",{className:"bg-zinc-900/80 border border-zinc-800 p-5 rounded-xl mb-8 flex flex-wrap gap-4 items-center justify-between",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"text-sm text-zinc-400",children:"Section"}),e.jsx("select",{value:h,onChange:s=>{S(s.target.value),k(!1)},className:"bg-zinc-900 border border-zinc-700 p-2 rounded-md",children:x.map((s,l)=>e.jsx("option",{value:s,children:s==="all"?"All Sections":s},l))})]}),e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"text-sm text-zinc-400",children:"Questions"}),e.jsxs("select",{value:f,onChange:s=>{const l=s.target.value;j(l==="all"?"all":Number(l)),k(!1)},className:"bg-zinc-900 border border-zinc-700 p-2 rounded-md",children:[e.jsx("option",{value:"all",children:"All"}),[5,10,15,20,30,40].map(s=>e.jsx("option",{value:s,children:s},s))]})]}),e.jsxs("div",{className:"flex gap-3",children:[e.jsx("button",{onClick:()=>{c([]);const s=Q(m);r(f==="all"?s:s.slice(0,f)),k(!0)},className:"px-6 py-2 bg-sky-600 hover:bg-sky-500 text-white rounded-lg shadow",children:"Start Practice"}),e.jsx("button",{onClick:C,disabled:!u||g.length===0,className:`px-6 py-2 rounded-lg shadow transition ${u&&g.length?"bg-emerald-700 hover:bg-emerald-600 text-white":"bg-zinc-700 text-zinc-400 cursor-not-allowed"}`,children:"🖨️ Print"})]})]}),u&&g.map((s,l)=>e.jsxs("div",{className:"bg-zinc-900/80 border border-zinc-800 p-5 mb-6 rounded-2xl shadow-lg hover:shadow-sky-900/30 transition",children:[e.jsxs("div",{className:"flex justify-between items-start mb-3 flex-wrap gap-2",children:[e.jsxs("p",{className:"font-semibold text-zinc-100",children:["Q",l+1,". ",s.q]}),e.jsxs("div",{className:"flex gap-2",children:[e.jsx("span",{className:"text-xs px-2 py-1 rounded bg-sky-900 text-sky-300",children:s.sectionName}),e.jsxs("span",{className:"text-xs px-2 py-1 rounded bg-amber-800 text-amber-200",children:[s.marks," marks"]})]})]}),e.jsx("button",{onClick:()=>w(s.id),className:"mt-2 p-2 rounded-full border border-sky-500/40 bg-slate-900 hover:bg-sky-700/40 transition",children:p.includes(s.id)?e.jsx("svg",{className:"w-5 h-5 text-emerald-400",fill:"none",stroke:"currentColor",strokeWidth:"2",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M13.875 18.825A10.05 10.05 0 0112 19c-5 0-9.27-3.11-11-7.5a11.05 11.05 0 014.95-5.9M15 12a3 3 0 11-6 0 3 3 0 016 0zm6.12 5.88L3 3"})}):e.jsx("svg",{className:"w-5 h-5 text-sky-400",fill:"none",stroke:"currentColor",strokeWidth:"2",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M15 12a3 3 0 11-6 0 3 3 0 016 0zm7.5 0S18.27 4.5 12 4.5 1.5 12 1.5 12 5.73 19.5 12 19.5 22.5 12 22.5 12z"})})}),p.includes(s.id)&&e.jsx("div",{className:"mt-3 bg-slate-900/70 border border-slate-700 p-4 rounded-xl shadow-inner space-y-3",children:s.type==="kmap"?e.jsxs(e.Fragment,{children:[e.jsxs("div",{children:[e.jsx("p",{className:"text-emerald-300 text-sm font-semibold mb-2",children:"🗺️ Karnaugh Map"}),e.jsx(B,{minterms:s.minterms||[],dc:s.dc||[],groups:s.steps?.map(i=>({cells:i.cells||[]}))||[],variables:s.variables||4})]}),s.steps&&s.steps.length>0&&e.jsxs("div",{children:[e.jsx("p",{className:"text-emerald-300 text-sm font-semibold mb-2",children:"📝 Step-by-step grouping:"}),e.jsx("div",{className:"space-y-3",children:s.steps.map((i,y)=>e.jsxs("div",{className:"border-l-2 border-sky-500 pl-3",children:[e.jsxs("p",{className:"text-sky-300 text-sm",children:["Step ",i.step,": ",i.action]}),i.term&&e.jsxs("p",{className:"text-zinc-200 text-sm",children:["→ Result: ",i.term]}),i.law&&e.jsxs("p",{className:"text-zinc-400 text-xs italic",children:["Law: ",i.law]})]},y))})]}),e.jsxs("p",{className:"text-emerald-300 text-sm",children:["✨ Simplified expression: ",e.jsx("span",{className:"font-mono",children:s.answer})]}),s.explanation&&e.jsxs("p",{className:"text-slate-300 text-sm",children:["💡 Explanation: ",s.explanation]})]}):e.jsxs(e.Fragment,{children:[s.steps&&s.steps.length?e.jsxs(e.Fragment,{children:[e.jsx("p",{className:"text-emerald-300 text-sm font-semibold mb-2",children:"📝 Step-by-step solution:"}),s.steps.map((i,y)=>e.jsxs("div",{className:"border-l-2 border-sky-500 pl-3",children:[e.jsxs("p",{className:"text-sky-300 text-sm",children:["Step ",i.step,": ",i.action]}),e.jsx("pre",{className:"bg-slate-950 p-2 rounded-md text-slate-200 text-sm font-mono mt-1",children:i.expression}),e.jsxs("p",{className:"text-zinc-400 text-xs italic mt-1",children:["Law: ",i.law]})]},y)),s.simplified&&e.jsxs("p",{className:"text-emerald-300 text-sm",children:["✨ Simplified result: ",e.jsx("span",{className:"font-mono",children:s.simplified})]})]}):e.jsx("p",{className:"text-slate-200 text-sm leading-relaxed",children:s.answer}),s.explanation&&e.jsxs("p",{className:"text-slate-300 text-sm leading-relaxed",children:["💡 Explanation: ",s.explanation]})]})})]},s.id)),!u&&e.jsxs("p",{className:"text-center text-zinc-500 mt-10",children:["Select a section and number of questions, then click ",e.jsx("b",{children:"Start Practice"}),"."]})]})})}export{D as B};
