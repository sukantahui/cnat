import{r as d,j as e}from"./index-CEi3MejZ.js";import{J as N}from"./JavaCodeBlock-BWtBTZEf.js";function y(s){const o=[...s];for(let r=o.length-1;r>0;r--){const c=Math.floor(Math.random()*(r+1));[o[r],o[c]]=[o[c],o[r]]}return o}function C({data:s}){const[o,r]=d.useState([]),[c,h]=d.useState("all"),[x,b]=d.useState(50),[p,g]=d.useState(!1),[l,f]=d.useState([]);if(!s||!s.questions)return e.jsx("p",{className:"p-4 text-red-400",children:"No questions found."});const j=[...new Set(s.questions.map(t=>t.topic))],v=c==="all"?s.questions:s.questions.filter(t=>t.topic===c);function w(t){r(i=>i.includes(t)?i.filter(u=>u!==t):[...i,t])}const n=t=>t?t.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#39;"):"",k=()=>{if(!l.length)return;const t={name:"Coder & AccoTax",phone:"+91 7003756860",website:"https://codernaccotax.co.in"},i=`${window.location.origin}/assets/cnat-stamp.png`,u=`${s.subject} – ${s.topic} (${s.class}, ${s.board})`,m=window.open("","_blank");m.document.write(`
    <!DOCTYPE html>
    <html>
      <head>
        <title>${n(u)}</title>
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
          /* Fixed header on every printed page */
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
            -webkit-print-color-adjust: exact;
            print-color-adjust: exact;
          }
          /* Spacer to prevent content from hiding under fixed header */
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
          /* Page numbering */
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
          .topic-badge {
            display: inline-block;
            background: #e2e8f0;
            color: #1e293b;
            font-size: 8pt;
            padding: 0.1rem 0.4rem;
            border-radius: 10px;
            font-family: monospace;
            margin-bottom: 0.3rem;
          }
          pre {
            background: #f1f5f9;
            padding: 0.5rem;
            border-radius: 6px;
            overflow-x: auto;
            font-family: 'Courier New', Courier, monospace;
            font-size: 9pt;
            margin: 0.5rem 0;
            border: 1px solid #ddd;
          }
          .answer-section {
            margin-top: 0.5rem;
            background: #faf9f5;
            padding: 0.6rem;
            border-left: 3px solid #2c7da0;
            font-size: 9.5pt;
          }
          /* Stamp image – fixed on every page, bottom-right corner, semi‑transparent */
          .stamp {
            position: fixed;
            bottom: 1.2cm;
            right: 1.2cm;
            width: 300px;      /* adjust to your stamp size */
            opacity: 0.38;     /* subtle watermark effect */
            pointer-events: none;
            z-index: 9999;
            transform: rotate(-21deg);
            -webkit-print-color-adjust: exact;
            print-color-adjust: exact;
          }
          @media print {
            .print-header, .stamp {
              -webkit-print-color-adjust: exact;
              print-color-adjust: exact;
            }
          }
        </style>
      </head>
      <body>
        <!-- Fixed header with organization details -->
        <div class="print-header">
          📘 ${t.name} &nbsp;|&nbsp; 📞 ${t.phone} &nbsp;|&nbsp; 🌐 ${t.website}
        </div>

        <!-- Stamp image on every page -->
        <img src="${i}" class="stamp" alt="CNAT Stamp" />

        <div class="spacer"></div>
        <div class="main-content">
          <div class="header">
            <h1>${n(s.topic)}</h1>
            <p>${n(s.subject)} • Class ${n(s.class)} • ${n(s.board)}</p>
            <p>Total Questions: ${l.length}</p>
          </div>
          ${l.map((a,z)=>`
            <div class="question-card">
              <div class="topic-badge">${n(a.topic)}</div>
              <div class="question-title">Q${z+1}. ${n(a.question)}</div>
              ${a.code?`<pre><code>${n(a.code)}</code></pre>`:""}
              <div class="answer-section">
                ${a.code?`
                  <div><span class="output-label">📤 Output:</span>
                  <pre><code>${n(a.output)}</code></pre></div>
                  <div><strong>💡 Explanation:</strong><br/>${n(a.explanation)}</div>
                `:`<div><strong>📖 Answer:</strong><br/>${n(a.answer)}</div>`}
              </div>
            </div>
          `).join("")}
        </div>
      </body>
    </html>
  `),m.document.close(),m.focus(),m.print()};return e.jsx("div",{className:"min-h-screen bg-gradient-to-br from-zinc-950 via-black to-zinc-900 text-zinc-200 p-6",children:e.jsxs("div",{className:"max-w-5xl mx-auto",children:[e.jsxs("div",{className:"flex items-center gap-4 mb-8",children:[e.jsx("div",{className:"p-3 rounded-2xl bg-gradient-to-br from-zinc-900 via-zinc-800 to-zinc-900 shadow-[0_0_30px_rgba(56,189,248,0.35)] ring-1 ring-sky-500/40",children:e.jsx("img",{src:s.subjectLogo?.path,alt:s.subjectLogo?.alt||"Logo",className:"w-12 h-12 object-contain dark:invert dark:brightness-125 dark:contrast-125 dark:drop-shadow-[0_0_8px_rgba(255,255,255,0.7)]"})}),e.jsxs("div",{children:[e.jsx("h1",{className:"text-3xl font-bold text-sky-400 tracking-wide",children:s.topic}),e.jsxs("p",{className:"text-sm text-zinc-400",children:[s.subject," • Class ",s.class," • ",s.board]})]})]}),e.jsxs("div",{className:"bg-zinc-900/80 border border-zinc-800 p-5 rounded-xl mb-8 flex flex-wrap gap-4 items-center justify-between",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"text-sm text-zinc-400",children:"Topic"}),e.jsxs("select",{value:c,onChange:t=>{h(t.target.value),g(!1)},className:"bg-zinc-900 border border-zinc-700 p-2 rounded-md",children:[e.jsx("option",{value:"all",children:"All"}),j.map((t,i)=>e.jsx("option",{value:t,children:t},i))]})]}),e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"text-sm text-zinc-400",children:"Questions"}),e.jsxs("select",{value:x,onChange:t=>{const i=t.target.value;b(i==="all"?"all":Number(i)),g(!1)},className:"bg-zinc-900 border border-zinc-700 p-2 rounded-md",children:[e.jsx("option",{value:"all",children:"All"}),[5,10,20,30,40,50].map(t=>e.jsx("option",{value:t,children:t},t))]})]}),e.jsxs("div",{className:"flex gap-3",children:[e.jsx("button",{onClick:()=>{r([]);const t=y(v);f(x==="all"?t:t.slice(0,x)),g(!0)},className:"px-6 py-2 bg-sky-600 hover:bg-sky-500 text-white rounded-lg shadow",children:"Start Practice"}),e.jsx("button",{onClick:k,disabled:!p||l.length===0,className:`px-6 py-2 rounded-lg shadow transition ${p&&l.length?"bg-emerald-700 hover:bg-emerald-600 text-white":"bg-zinc-700 text-zinc-400 cursor-not-allowed"}`,children:"🖨️ Print"})]})]}),p&&l.map((t,i)=>e.jsxs("div",{className:"bg-zinc-900/80 border border-zinc-800 p-5 mb-6 rounded-2xl shadow-lg hover:shadow-sky-900/30 transition",children:[e.jsxs("div",{className:"flex justify-between items-center mb-3",children:[e.jsxs("p",{className:"font-semibold text-zinc-100",children:["Q",i+1,". ",t.question]}),e.jsx("span",{className:"text-xs px-2 py-1 rounded bg-sky-900 text-sky-300",children:t.topic})]}),t.code&&e.jsx("div",{className:"mb-3",children:e.jsx(N,{code:t.code})}),e.jsx("button",{onClick:()=>w(t.id),className:"mt-2 p-2 rounded-full border border-sky-500/40 bg-slate-900 hover:bg-sky-700/40 transition",children:o.includes(t.id)?e.jsx("svg",{className:"w-5 h-5 text-emerald-400",fill:"none",stroke:"currentColor",strokeWidth:"2",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M13.875 18.825A10.05 10.05 0 0112 19c-5 0-9.27-3.11-11-7.5a11.05 11.05 0 014.95-5.9M15 12a3 3 0 11-6 0 3 3 0 016 0zm6.12 5.88L3 3"})}):e.jsx("svg",{className:"w-5 h-5 text-sky-400",fill:"none",stroke:"currentColor",strokeWidth:"2",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M15 12a3 3 0 11-6 0 3 3 0 016 0zm7.5 0S18.27 4.5 12 4.5 1.5 12 1.5 12 5.73 19.5 12 19.5 22.5 12 22.5 12z"})})}),o.includes(t.id)&&e.jsx("div",{className:"mt-3 bg-slate-900/70 border border-slate-700 p-4 rounded-xl shadow-inner space-y-2",children:t.code?e.jsxs(e.Fragment,{children:[e.jsxs("div",{children:[e.jsx("p",{className:"text-emerald-300 text-sm font-semibold",children:"Output:"}),e.jsx("pre",{className:"bg-slate-950 p-2 rounded-lg text-slate-200 text-sm",children:t.output})]}),e.jsxs("p",{className:"text-slate-300 text-sm leading-relaxed",children:[e.jsx("b",{children:"Explanation:"})," ",t.explanation]})]}):e.jsx("p",{className:"text-slate-200 text-sm leading-relaxed",children:t.answer})})]},t.id)),!p&&e.jsxs("p",{className:"text-center text-zinc-500 mt-10",children:["Select topic & number of questions, then click ",e.jsx("b",{children:"Start Practice"}),"."]})]})})}export{C as J};
