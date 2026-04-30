import{r as n,R as E,j as e}from"./index-M13epWmp.js";import{c as b}from"./clsx-B-dksMZM.js";const T=({title:c="Frequently Asked Questions",subtitle:w="Test your understanding with these practice questions",questions:s=[],showPrint:v=!0,showExpandAll:j=!0,showSearch:k=!0,showProgress:N=!0})=>{const[x,p]=n.useState({}),[o,m]=n.useState(""),[h,f]=n.useState([]),C=n.useCallback(r=>{p(t=>({...t,[r]:!t[r]}))},[]),g=n.useCallback(()=>{const r={};s.forEach((t,a)=>{r[a]=!0}),p(r)},[s]),l=n.useCallback(()=>{p({})},[]),d=n.useMemo(()=>Object.values(x).filter(Boolean).length,[x]);n.useMemo(()=>{if(!o.trim())f(s.map((r,t)=>t));else{const r=o.toLowerCase(),t=s.map((a,i)=>({idx:i,question:a.question,answer:a.shortAnswer})).filter(a=>a.question.toLowerCase().includes(r)||a.answer.toLowerCase().includes(r)).map(a=>a.idx);f(t)}},[o,s]);const u=n.useCallback(()=>{const r=document.getElementById("question-set");if(!r)return;const t=d===s.length;if(!t){const a={};s.forEach((i,A)=>{a[A]=!0}),p(a)}setTimeout(()=>{const a=window.open("","_blank"),i=new Date().toLocaleDateString("en-US",{year:"numeric",month:"long",day:"numeric"});a.document.write(`
        <!DOCTYPE html>
        <html>
          <head>
            <title>${c} - Practice Questions</title>
            <meta charset="UTF-8">
            <style>
              @page {
                size: A4;
                margin: 18mm;
              }

              * {
                -webkit-print-color-adjust: exact !important;
                print-color-adjust: exact !important;
              }

              body {
                font-family: 'Segoe UI', 'Roboto', Arial, sans-serif;
                margin: 0;
                padding: 0;
                color: #1a1a2e;
                line-height: 1.5;
              }

              .print-header {
                text-align: center;
                margin-bottom: 25px;
                padding: 15px;
                background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
                color: white;
                border-radius: 12px;
              }

              .print-header h1 {
                font-size: 24px;
                margin: 0 0 5px 0;
                letter-spacing: 1px;
              }

              .print-header p {
                font-size: 13px;
                margin: 5px 0;
                opacity: 0.95;
              }

              .print-meta {
                display: flex;
                justify-content: space-between;
                margin-top: 10px;
                padding-top: 8px;
                border-top: 1px solid rgba(255,255,255,0.3);
                font-size: 12px;
              }

              .print-item {
                page-break-inside: avoid;
                margin-bottom: 16px;
                padding: 12px;
                background: #f8f9fa;
                border-left: 5px solid #4f46e5;
                border-radius: 8px;
              }

              .question-text {
                font-weight: 700;
                font-size: 15px;
                color: #1e293b;
                margin-bottom: 12px;
                padding-bottom: 8px;
                border-bottom: 2px solid #e2e8f0;
              }

              .answer-section {
                margin-top: 10px;
              }

              .answer-hint {
                background: #fff3e0;
                border-left: 3px solid #f59e0b;
                padding: 8px 12px;
                margin: 8px 0;
                border-radius: 6px;
                font-size: 13px;
              }

              .answer-short {
                background: #e6f7e6;
                border-left: 3px solid #10b981;
                padding: 8px 12px;
                margin: 8px 0;
                border-radius: 6px;
                font-size: 13px;
                font-weight: 500;
              }

              .answer-explanation {
                background: #e8f0fe;
                border-left: 3px solid #3b82f6;
                padding: 8px 12px;
                margin: 8px 0;
                border-radius: 6px;
                font-size: 13px;
              }

              .toggle-icon, .action-buttons, .search-bar, .progress-bar {
                display: none !important;
              }

              .footer {
                position: fixed;
                bottom: 15mm;
                left: 0;
                right: 0;
                text-align: center;
                font-size: 11px;
                color: #94a3b8;
              }

              .page-number:after {
                content: " - Page " counter(page);
              }
            </style>
          </head>

          <body>
            <div class="print-header">
              <h1>📚 ${c}</h1>
              <p>Master Java Inheritance - Practice Questions</p>
              <div class="print-meta">
                <span>👨‍🏫 Instructor: Sukanta Hui</span>
                <span>📅 Date: ${i}</span>
              </div>
              <div class="print-meta">
                <span>🏫 Coder & AccoTax Academy</span>
                <span>⏱️ Time: 45 minutes</span>
              </div>
            </div>

            ${r.innerHTML.replace(/▲|▼|🔍|Expand All|Collapse All|Show Answer|Hide Answer/g,"")}
            
            <div class="footer">
              <span class="page-number"></span>
            </div>
          </body>
        </html>
      `),a.document.close(),a.focus(),setTimeout(()=>{a.print(),a.close()},300),t||setTimeout(()=>{l()},500)},200)},[c,s,d,l]),y=n.useMemo(()=>d/s.length*100,[d,s.length]);return E.useEffect(()=>{const r=t=>{(t.ctrlKey||t.metaKey)&&t.key==="e"&&(t.preventDefault(),g()),(t.ctrlKey||t.metaKey)&&t.key==="c"&&(t.preventDefault(),l()),(t.ctrlKey||t.metaKey)&&t.key==="p"&&(t.preventDefault(),u())};return window.addEventListener("keydown",r),()=>window.removeEventListener("keydown",r)},[g,l,u]),e.jsxs("div",{className:"space-y-6 animate-[fadeSlideUp_0.6s_ease-out]",children:[e.jsxs("div",{className:"bg-gradient-to-r from-indigo-500 to-purple-600 dark:from-indigo-600 dark:to-purple-700 rounded-2xl p-6 text-white shadow-lg",children:[e.jsxs("div",{className:"flex justify-between items-start flex-wrap gap-4",children:[e.jsxs("div",{children:[e.jsx("h2",{className:"text-2xl md:text-3xl font-bold mb-2",children:c}),e.jsx("p",{className:"text-indigo-100",children:w}),e.jsxs("div",{className:"mt-3 flex gap-4 text-sm",children:[e.jsxs("span",{className:"bg-white/20 px-3 py-1 rounded-full",children:["📝 ",s.length," Questions"]}),e.jsxs("span",{className:"bg-white/20 px-3 py-1 rounded-full",children:["✅ ",d," Answered"]})]})]}),e.jsxs("div",{className:"flex gap-2 flex-wrap",children:[v&&e.jsx("button",{onClick:u,className:"px-4 py-2 bg-white text-indigo-600 rounded-lg hover:bg-indigo-50 transition-all duration-300 font-medium flex items-center gap-2 shadow-md hover:shadow-xl",children:"🖨️ Print"}),j&&e.jsxs(e.Fragment,{children:[e.jsx("button",{onClick:g,className:"px-4 py-2 bg-white/20 backdrop-blur rounded-lg hover:bg-white/30 transition-all duration-300 font-medium flex items-center gap-2",children:"📖 Expand All"}),e.jsx("button",{onClick:l,className:"px-4 py-2 bg-white/20 backdrop-blur rounded-lg hover:bg-white/30 transition-all duration-300 font-medium flex items-center gap-2",children:"📝 Collapse All"})]})]})]}),N&&e.jsxs("div",{className:"mt-4",children:[e.jsxs("div",{className:"flex justify-between text-sm mb-1",children:[e.jsx("span",{children:"Your Progress"}),e.jsxs("span",{children:[Math.round(y),"%"]})]}),e.jsx("div",{className:"w-full bg-white/30 rounded-full h-2 overflow-hidden",children:e.jsx("div",{className:"bg-white h-2 rounded-full transition-all duration-500 ease-out",style:{width:`${y}%`}})})]})]}),k&&e.jsxs("div",{className:"relative animate-[fadeSlideUp_0.6s_ease-out_0.1s]",children:[e.jsx("input",{type:"text",placeholder:"🔍 Search questions by keyword...",value:o,onChange:r=>m(r.target.value),className:"w-full px-5 py-3 pl-12 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-300"}),e.jsx("span",{className:"absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 text-lg",children:"🔍"}),o&&e.jsx("button",{onClick:()=>m(""),className:"absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors",children:"✕"})]}),e.jsxs("div",{className:"text-xs text-center text-gray-500 dark:text-gray-400 animate-[fadeSlideUp_0.6s_ease-out_0.15s]",children:["💡 Pro tip: Use ",e.jsx("kbd",{className:"px-1 py-0.5 bg-gray-200 dark:bg-gray-700 rounded",children:"Ctrl+E"})," to expand all,",e.jsx("kbd",{className:"px-1 py-0.5 bg-gray-200 dark:bg-gray-700 rounded ml-1",children:"Ctrl+C"})," to collapse all,",e.jsx("kbd",{className:"px-1 py-0.5 bg-gray-200 dark:bg-gray-700 rounded ml-1",children:"Ctrl+P"})," to print"]}),e.jsxs("div",{id:"question-set",children:[e.jsx("div",{className:"print-header hidden print:block"}),e.jsx("div",{className:"space-y-4",children:h.map((r,t)=>{const a=s[r],i=x[r];return e.jsxs("div",{className:b("border border-gray-200 dark:border-gray-700 rounded-xl overflow-hidden transition-all duration-300","hover:shadow-lg hover:border-indigo-300 dark:hover:border-indigo-700","animate-[fadeSlideUp_0.6s_ease-out]"),style:{animationDelay:`${t*.03}s`},children:[e.jsxs("button",{onClick:()=>C(r),className:"w-full text-left px-6 py-4 bg-gray-50 dark:bg-gray-900/50 hover:bg-gray-100 dark:hover:bg-gray-800 transition-all duration-300 flex justify-between items-center group",children:[e.jsxs("div",{className:"flex items-start gap-3",children:[e.jsxs("span",{className:"font-bold text-indigo-500 dark:text-indigo-400 min-w-[2rem]",children:[r+1,"."]}),e.jsx("span",{className:"font-semibold text-gray-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors",children:a.question})]}),e.jsx("span",{className:b("text-indigo-500 dark:text-indigo-400 text-xl transition-transform duration-300",i&&"rotate-180"),children:"▼"})]}),e.jsx("div",{className:b("transition-all duration-300 ease-in-out overflow-hidden",i?"max-h-96 opacity-100":"max-h-0 opacity-0"),children:e.jsxs("div",{className:"px-6 py-4 bg-white dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700 space-y-3",children:[e.jsxs("div",{className:"bg-amber-50 dark:bg-amber-900/20 border-l-4 border-amber-500 p-3 rounded-r-lg hover:shadow-md transition-all duration-300",children:[e.jsx("p",{className:"text-sm font-semibold text-amber-800 dark:text-amber-300 mb-1",children:"💡 Hint"}),e.jsx("p",{className:"text-amber-700 dark:text-amber-200 text-sm",children:a.hint})]}),e.jsxs("div",{className:"bg-green-50 dark:bg-green-900/20 border-l-4 border-green-500 p-3 rounded-r-lg hover:shadow-md transition-all duration-300",children:[e.jsx("p",{className:"text-sm font-semibold text-green-800 dark:text-green-300 mb-1",children:"✅ Quick Answer"}),e.jsx("p",{className:"text-green-700 dark:text-green-200 text-sm",children:a.shortAnswer})]}),e.jsxs("div",{className:"bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 p-3 rounded-r-lg hover:shadow-md transition-all duration-300",children:[e.jsx("p",{className:"text-sm font-semibold text-blue-800 dark:text-blue-300 mb-1",children:"📘 Detailed Explanation"}),e.jsx("p",{className:"text-blue-700 dark:text-blue-200 text-sm leading-relaxed",children:a.explanation})]}),a.codeExample&&e.jsx("div",{className:"bg-gray-900 rounded-lg p-3 overflow-x-auto",children:e.jsx("pre",{className:"text-gray-300 text-xs font-mono",children:a.codeExample})})]})})]},r)})}),h.length===0&&e.jsxs("div",{className:"text-center py-12 bg-gray-50 dark:bg-gray-800 rounded-xl",children:[e.jsxs("p",{className:"text-gray-500 dark:text-gray-400",children:['No questions found matching "',o,'"']}),e.jsx("button",{onClick:()=>m(""),className:"mt-3 text-indigo-500 hover:text-indigo-600 underline",children:"Clear search"})]})]}),e.jsx("style",{children:`
        @keyframes fadeSlideUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @media print {
          .no-print {
            display: none !important;
          }
          button {
            display: none !important;
          }
        }
      `})]})};export{T as F};
