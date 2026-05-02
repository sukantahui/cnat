import{r as p,j as e}from"./index-COd1BgDP.js";function $(t){const r=[...t];for(let o=r.length-1;o>0;o--){const c=Math.floor(Math.random()*(o+1));[r[o],r[c]]=[r[c],r[o]]}return r}function i(t){return t?t.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#39;"):""}function A({data:t}){const[r,o]=p.useState([]),[c,f]=p.useState("all"),[h,v]=p.useState(15),[x,b]=p.useState(!1),[d,j]=p.useState([]);if(!t||!t.sections)return e.jsx("p",{className:"p-4 text-red-400",children:"No questions found."});const u=t.sections.flatMap(s=>s.questions.map(n=>({...n,sectionName:s.section,sectionType:s.type,marks:n.marks!==void 0?n.marks:s.marksPerQuestion}))),k=["all",...new Set(t.sections.map(s=>s.section))],w=c==="all"?u:u.filter(s=>s.sectionName===c);function N(s){o(n=>n.includes(s)?n.filter(l=>l!==s):[...n,s])}const y=()=>{if(!d.length)return;const s={name:"Coder & AccoTax",phone:"+91 7003756860",website:"https://codernaccotax.co.in"},n=`${window.location.origin}/assets/cnat-stamp.png`,l=`${t.title}`,m=window.open("","_blank");m.document.write(`
      <!DOCTYPE html>
      <html>
        <head>
          <title>${i(l)}</title>
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
            .step-action {
              font-weight: bold;
              color: #2563eb;
            }
            .step-expression {
              font-family: 'Courier New', monospace;
              background: #f1f5f9;
              padding: 0.2rem 0.4rem;
              border-radius: 4px;
            }
            .step-law {
              font-style: italic;
              color: #4b5563;
            }
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
          </style>
        </head>
        <body>
          <div class="print-header">
            📘 ${s.name} &nbsp;|&nbsp; 📞 ${s.phone} &nbsp;|&nbsp; 🌐 ${s.website}
          </div>
          <img src="${n}" class="stamp" alt="CNAT Stamp" />
          <div class="spacer"></div>
          <div class="main-content">
            <div class="header">
              <h1>${i(t.title)}</h1>
              <p>${i(t.subject)} • Class ${i(t.class)} • ${i(t.board)}</p>
              <p>Duration: ${i(t.duration)} | Total Marks: ${t.totalMarks}</p>
              <p>Questions in this set: ${d.length}</p>
            </div>
            ${d.map((a,z)=>`
              <div class="question-card">
                <div>
                  <span class="section-badge">${i(a.sectionName)}</span>
                  <span class="marks">${a.marks} marks</span>
                </div>
                <div class="question-title">Q${z+1}. ${i(a.q)}</div>
                <div class="answer-section">
                  ${a.steps&&a.steps.length?`<div><strong>📝 Step-by-step solution:</strong></div>
                         ${a.steps.map(g=>`
                           <div class="step">
                             <div><span class="step-action">Step ${g.step}: ${g.action}</span></div>
                             <div class="step-expression">${i(g.expression)}</div>
                             <div class="step-law">Law: ${i(g.law)}</div>
                           </div>
                         `).join("")}
                         <div><strong>✨ Simplified result:</strong> ${i(a.simplified||a.answer)}</div>
                         ${a.explanation?`<div><strong>💡 Explanation:</strong> ${i(a.explanation)}</div>`:""}
                       `:`
                         <div><strong>📖 Answer:</strong><br/>${i(a.answer)}</div>
                         ${a.explanation?`<div><strong>💡 Explanation:</strong><br/>${i(a.explanation)}</div>`:""}
                       `}
                </div>
              </div>
            `).join("")}
          </div>
        </body>
      </html>
    `),m.document.close(),m.focus(),m.print()};return e.jsx("div",{className:"min-h-screen bg-gradient-to-br from-zinc-950 via-black to-zinc-900 text-zinc-200 p-6",children:e.jsxs("div",{className:"max-w-5xl mx-auto",children:[e.jsxs("div",{className:"flex items-center gap-4 mb-8",children:[e.jsx("div",{className:"p-3 rounded-2xl bg-gradient-to-br from-zinc-900 via-zinc-800 to-zinc-900 shadow-[0_0_30px_rgba(56,189,248,0.35)] ring-1 ring-sky-500/40",children:e.jsx("span",{className:"text-3xl",children:"🧠"})}),e.jsxs("div",{children:[e.jsx("h1",{className:"text-3xl font-bold text-sky-400 tracking-wide",children:t.title}),e.jsxs("p",{className:"text-sm text-zinc-400",children:[t.subject," • Class ",t.class," • ",t.board," •"," ",t.duration," • ",t.totalMarks," marks"]})]})]}),e.jsxs("div",{className:"bg-zinc-900/80 border border-zinc-800 p-5 rounded-xl mb-8 flex flex-wrap gap-4 items-center justify-between",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"text-sm text-zinc-400",children:"Section"}),e.jsx("select",{value:c,onChange:s=>{f(s.target.value),b(!1)},className:"bg-zinc-900 border border-zinc-700 p-2 rounded-md",children:k.map((s,n)=>e.jsx("option",{value:s,children:s==="all"?"All Sections":s},n))})]}),e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"text-sm text-zinc-400",children:"Questions"}),e.jsxs("select",{value:h,onChange:s=>{const n=s.target.value;v(n==="all"?"all":Number(n)),b(!1)},className:"bg-zinc-900 border border-zinc-700 p-2 rounded-md",children:[e.jsx("option",{value:"all",children:"All"}),[5,10,15,20,30,40].map(s=>e.jsx("option",{value:s,children:s},s))]})]}),e.jsxs("div",{className:"flex gap-3",children:[e.jsx("button",{onClick:()=>{o([]);const s=$(w);j(h==="all"?s:s.slice(0,h)),b(!0)},className:"px-6 py-2 bg-sky-600 hover:bg-sky-500 text-white rounded-lg shadow",children:"Start Practice"}),e.jsx("button",{onClick:y,disabled:!x||d.length===0,className:`px-6 py-2 rounded-lg shadow transition ${x&&d.length?"bg-emerald-700 hover:bg-emerald-600 text-white":"bg-zinc-700 text-zinc-400 cursor-not-allowed"}`,children:"🖨️ Print"})]})]}),x&&d.map((s,n)=>e.jsxs("div",{className:"bg-zinc-900/80 border border-zinc-800 p-5 mb-6 rounded-2xl shadow-lg hover:shadow-sky-900/30 transition",children:[e.jsxs("div",{className:"flex justify-between items-start mb-3 flex-wrap gap-2",children:[e.jsxs("p",{className:"font-semibold text-zinc-100",children:["Q",n+1,". ",s.q]}),e.jsxs("div",{className:"flex gap-2",children:[e.jsx("span",{className:"text-xs px-2 py-1 rounded bg-sky-900 text-sky-300",children:s.sectionName}),e.jsxs("span",{className:"text-xs px-2 py-1 rounded bg-amber-800 text-amber-200",children:[s.marks," marks"]})]})]}),e.jsx("button",{onClick:()=>N(s.id),className:"mt-2 p-2 rounded-full border border-sky-500/40 bg-slate-900 hover:bg-sky-700/40 transition",children:r.includes(s.id)?e.jsx("svg",{className:"w-5 h-5 text-emerald-400",fill:"none",stroke:"currentColor",strokeWidth:"2",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M13.875 18.825A10.05 10.05 0 0112 19c-5 0-9.27-3.11-11-7.5a11.05 11.05 0 014.95-5.9M15 12a3 3 0 11-6 0 3 3 0 016 0zm6.12 5.88L3 3"})}):e.jsx("svg",{className:"w-5 h-5 text-sky-400",fill:"none",stroke:"currentColor",strokeWidth:"2",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M15 12a3 3 0 11-6 0 3 3 0 016 0zm7.5 0S18.27 4.5 12 4.5 1.5 12 1.5 12 5.73 19.5 12 19.5 22.5 12 22.5 12z"})})}),r.includes(s.id)&&e.jsx("div",{className:"mt-3 bg-slate-900/70 border border-slate-700 p-4 rounded-xl shadow-inner space-y-3",children:s.steps&&s.steps.length?e.jsxs(e.Fragment,{children:[e.jsxs("div",{children:[e.jsx("p",{className:"text-emerald-300 text-sm font-semibold mb-2",children:"📝 Step-by-step solution:"}),e.jsx("div",{className:"space-y-3",children:s.steps.map((l,m)=>e.jsxs("div",{className:"border-l-2 border-sky-500 pl-3",children:[e.jsxs("p",{className:"text-sky-300 text-sm",children:["Step ",l.step,": ",l.action]}),e.jsx("pre",{className:"bg-slate-950 p-2 rounded-md text-slate-200 text-sm font-mono mt-1",children:l.expression}),e.jsxs("p",{className:"text-zinc-400 text-xs italic mt-1",children:["Law: ",l.law]})]},m))})]}),s.simplified&&e.jsxs("p",{className:"text-emerald-300 text-sm",children:["✨ Simplified result:"," ",e.jsx("span",{className:"font-mono",children:s.simplified})]}),s.explanation&&e.jsxs("p",{className:"text-slate-300 text-sm leading-relaxed",children:["💡 Explanation: ",s.explanation]})]}):e.jsxs(e.Fragment,{children:[e.jsx("p",{className:"text-slate-200 text-sm leading-relaxed",children:s.answer}),s.explanation&&e.jsxs("p",{className:"text-slate-300 text-sm leading-relaxed",children:["💡 Explanation: ",s.explanation]})]})})]},s.id)),!x&&e.jsxs("p",{className:"text-center text-zinc-500 mt-10",children:["Select a section and number of questions, then click"," ",e.jsx("b",{children:"Start Practice"}),"."]})]})})}export{A as B};
