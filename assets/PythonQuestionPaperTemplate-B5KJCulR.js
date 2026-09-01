import{b as u,j as t}from"./vendor-react-core-Doz9nIC6.js";import{P as j}from"./PrintButton-BGrBfOtS.js";import{P as c}from"./PythonCodeBlock-CsFlBAp6.js";const f=({data:a,isLoggedIn:o=!1,organizationDetails:x={}})=>{const[m,d]=u.useState({}),h=(e,i)=>{const r=`${e}-${i}`;d(s=>({...s,[r]:!s[r]}))},g=e=>{if(!e)return null;const i=/```python\n([\s\S]*?)```/g,r=[];let s=0,n;for(;(n=i.exec(e))!==null;){n.index>s&&r.push(t.jsx("span",{className:"whitespace-pre-wrap",children:e.slice(s,n.index)},`text-${s}`));const p=n[1].trim();r.push(t.jsx(c,{code:p,title:"Python Code"},`code-${n.index}`)),s=n.index+n[0].length}return s<e.length&&r.push(t.jsx("span",{className:"whitespace-pre-wrap",children:e.slice(s)},`text-${s}`)),r.length?r:t.jsx("span",{className:"whitespace-pre-wrap",children:e})},b=e=>{if(!e)return null;const i=/```python\n([\s\S]*?)```/g,r=[];let s=0,n;for(;(n=i.exec(e))!==null;){if(n.index>s){const l=e.slice(s,n.index);l.trim()&&r.push(t.jsx("p",{className:"whitespace-pre-wrap text-gray-300 print:text-black print:leading-tight",children:l},`text-${s}`))}const p=n[1].trim();r.push(t.jsx(c,{code:p,title:"Python Code"},`code-${n.index}`)),s=n.index+n[0].length}if(s<e.length){const p=e.slice(s);p.trim()&&r.push(t.jsx("p",{className:"whitespace-pre-wrap text-gray-300 print:text-black print:leading-tight",children:p},`text-${s}`))}return r.length?r:t.jsx("p",{className:"whitespace-pre-wrap text-gray-300 print:text-black print:leading-tight",children:e})},y=e=>e&&(e.includes("```python")||/class\s+\w+:|def\s+\w+\(|import\s+\w+/.test(e));return t.jsxs("div",{className:"max-w-4xl mx-auto p-6 bg-gray-900 shadow-lg rounded-xl text-gray-100 print:bg-white print:text-black print:p-4",children:[t.jsx("div",{className:"flex justify-end mb-4 no-print",children:t.jsx(j,{targetId:"print-content",title:a.title,organizationDetails:x})}),t.jsxs("div",{id:"print-content",className:"print:leading-tight",children:[t.jsxs("div",{className:"text-center border-b border-gray-700 print:border-black pb-4 mb-6 print:pb-2 print:mb-3",children:[t.jsx("h1",{className:"text-2xl font-bold text-white print:text-black print:text-xl print:mb-1",children:a.title}),t.jsxs("p",{className:"text-sm text-gray-400 print:text-gray-600 print:text-xs",children:["Paper ID: ",a.paperId]}),t.jsxs("div",{className:"flex justify-between mt-2 text-sm text-gray-400 print:text-gray-600 print:text-xs print:mt-1",children:[t.jsxs("span",{children:["Duration: ",a.duration]}),t.jsxs("span",{children:["Total Marks: ",a.totalMarks]})]}),a.prerequisites&&t.jsx("div",{className:"mt-3 text-xs text-gray-500 print:text-gray-600 print:text-xs print:mt-1",children:t.jsxs("span",{children:["Prerequisites: ",a.prerequisites]})})]}),a.instructions&&t.jsxs("div",{className:"mb-6 p-4 bg-gray-800 rounded-lg border border-gray-700 print:bg-white print:border-black print:shadow-none print:p-3 print:mb-3",children:[t.jsx("h3",{className:"text-md font-semibold text-yellow-400 print:text-black mb-2 print:text-sm print:mb-1",children:"Instructions:"}),t.jsx("ul",{className:"list-disc pl-5 text-sm text-gray-300 print:text-black print:text-xs space-y-1 print:space-y-0.5",children:a.instructions.map((e,i)=>t.jsx("li",{className:"print:text-black print:leading-tight",children:e},i))})]}),a.sections.map((e,i)=>t.jsxs("div",{className:"mb-8 print:mb-4",children:[t.jsxs("div",{className:"mb-3 print:mb-2",children:[t.jsxs("h2",{className:"text-lg font-semibold text-white print:text-black print:text-base",children:["Section ",e.section,": ",e.type]}),t.jsxs("p",{className:"text-sm text-gray-400 print:text-gray-600 print:text-xs",children:["(",e.totalQuestions," Questions × ",e.marksPerQuestion," Marks)"]}),e.description&&t.jsx("p",{className:"text-xs text-gray-500 print:text-gray-600 print:text-xs print:mt-0.5",children:e.description})]}),t.jsx("ol",{className:"list-decimal pl-5 space-y-6 print:space-y-2",children:e.questions.map((r,s)=>{const n=`${i}-${s}`,p=m[n],l=r.answer&&y(r.answer);return t.jsxs("li",{className:"space-y-2 print:space-y-1",children:[t.jsxs("div",{className:"flex justify-between items-start gap-4",children:[t.jsx("div",{className:"text-gray-200 print:text-black flex-1 font-medium print:text-sm",children:g(r.q)}),t.jsxs("div",{className:"flex items-center gap-3",children:[t.jsxs("span",{className:"text-sm text-gray-400 print:text-gray-600 font-mono print:text-xs",children:["[",r.marks," marks]"]}),o&&t.jsx("button",{onClick:()=>h(i,s),className:"px-2 py-1 text-xs rounded bg-blue-600 hover:bg-blue-500 text-white transition-colors no-print",children:p?"Hide Answer":"Show Answer"})]})]}),r.hint&&t.jsxs("div",{className:"text-xs text-gray-500 print:text-gray-600 italic pl-4 print:text-xs print:leading-tight",children:["💡 Hint: ",r.hint]}),o&&p&&r.answer&&t.jsx("div",{className:`answer-content mt-3 p-4 rounded-lg border ${l?"bg-gray-850":"bg-gray-800"} print:bg-white border-gray-700 print:border-black print:p-2 print:mt-1`,children:t.jsxs("div",{className:"text-sm print:text-xs",children:[t.jsxs("div",{className:"text-emerald-400 print:text-black text-xs font-semibold mb-2 flex items-center gap-2 print:mb-1",children:[t.jsx("span",{children:"📝 Answer:"}),l&&t.jsx("span",{className:"text-blue-400 print:text-gray-600",children:"(Includes Python Code)"})]}),b(r.answer)]})})]},s)})})]},i)),t.jsxs("div",{className:"mt-8 pt-4 border-t border-gray-700 print:border-gray-300 text-center text-xs text-gray-500 print:text-gray-600 print:mt-4 print:pt-2",children:[t.jsxs("p",{children:["© ",new Date().getFullYear()," Python Question Paper - All Rights Reserved"]}),t.jsx("p",{className:"mt-1 print:mt-0.5",children:"Good Luck!"})]})]}),t.jsx("style",{jsx:!0,children:`
        @media print {
          .print\\:bg-white {
            background-color: white !important;
          }
          .print\\:text-black {
            color: black !important;
          }
          .print\\:text-gray-600 {
            color: #4b5563 !important;
          }
          .print\\:border-black {
            border-color: black !important;
          }
          .print\\:border-gray-300 {
            border-color: #d1d5db !important;
          }
          .print\\:shadow-none {
            box-shadow: none !important;
          }
          body, div, p, li, span, h1, h2, h3, h4 {
            line-height: 1.2 !important;
          }
          li, .list-disc li {
            line-height: 1.15 !important;
            margin-bottom: 2px !important;
          }
          .mb-8 {
            margin-bottom: 0.75rem !important;
          }
          .space-y-6 > * + * {
            margin-top: 0.5rem !important;
          }
          p {
            margin-bottom: 0.25rem !important;
            line-height: 1.2 !important;
          }
          pre, code {
            background-color: #f3f4f6 !important;
            color: black !important;
            border: 1px solid #d1d5db !important;
            line-height: 1.2 !important;
            margin: 0.25rem 0 !important;
          }
          h1, h2, h3 {
            margin-bottom: 0.25rem !important;
            margin-top: 0.25rem !important;
          }
          .p-4 {
            padding: 0.5rem !important;
          }
          .p-6 {
            padding: 1rem !important;
          }
        }
      `})]})};export{f as P};
