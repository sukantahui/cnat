import{r as c,j as t}from"./index-sRNy85CP.js";import{P as v}from"./PrintButton-CiasTY7K.js";import{J as u}from"./JavaCodeBlock-S7Z7pBVM.js";import{P as j}from"./prism-CMh3e-_S.js";import"./prism-java-BwO6k4I_.js";function y({code:i="",highlightLines:p=[],title:h="Java Code (BlueJ)"}){const[d,m]=c.useState([]),x=c.useRef(null);return c.useEffect(()=>{const l=j.highlight(i,j.languages.java,"java");m(l.split(`
`))},[i]),t.jsx("div",{ref:x,className:"my-5 rounded-2xl overflow-hidden bg-white border border-gray-300 shadow-md",children:t.jsx("div",{className:"flex text-sm leading-6 font-mono overflow-auto",children:t.jsx("pre",{className:"flex-1 px-4 py-3 whitespace-pre",children:t.jsx("code",{className:"language-java",children:d.map((l,o)=>t.jsx("div",{className:p.includes(o+1)?"bg-gray-200 border-l-2 border-gray-800 pl-3":"pl-3",dangerouslySetInnerHTML:{__html:l||"&nbsp;"}},o))})})})})}const P=({data:i,isLoggedIn:p=!1,organizationDetails:h={}})=>{const[d,m]=c.useState({}),x=(e,n)=>{const r=`${e}-${n}`;m(s=>({...s,[r]:!s[r]}))},l=e=>e?e.includes("```java")||e.includes("```")?e.split(/(```java[\s\S]*?```|```[\s\S]*?```)/g).map((r,s)=>{if(r.startsWith("```java")&&r.endsWith("```")){const a=r.slice(7,-3).trim();return t.jsx(y,{code:a,title:"Java Code"},s)}if(r.startsWith("```")&&r.endsWith("```")){const a=r.slice(3,-3).trim();return t.jsx(y,{code:a,title:"Code"},s)}return t.jsx("span",{className:"whitespace-pre-wrap",children:r},s)}):t.jsx("span",{className:"whitespace-pre-wrap",children:e}):null,o=e=>e?e.includes("```java")||e.includes("```")?e.split(/(```java[\s\S]*?```|```[\s\S]*?```)/g).map((r,s)=>{if(r.startsWith("```java")&&r.endsWith("```")){const a=r.slice(7,-3).trim();return t.jsx(u,{code:a,title:"Java Code"},s)}if(r.startsWith("```")&&r.endsWith("```")){const a=r.slice(3,-3).trim();return t.jsx(u,{code:a,title:"Code"},s)}return t.jsx("p",{className:"whitespace-pre-wrap text-gray-300 print:text-black print:leading-tight",children:r},s)}):t.jsx("p",{className:"whitespace-pre-wrap text-gray-300 print:text-black print:leading-tight",children:e}):null,f=e=>e&&(e.includes("```java")||e.includes("public class")||e.includes("public static void"));return t.jsxs("div",{className:"max-w-4xl mx-auto p-6 bg-gray-900 shadow-lg rounded-xl text-gray-100 print:bg-white print:text-black print:p-4",children:[t.jsx("div",{className:"flex justify-end mb-4 no-print",children:t.jsx(v,{targetId:"print-content",title:i.title,organizationDetails:h})}),t.jsxs("div",{id:"print-content",className:"print:leading-tight",children:[t.jsxs("div",{className:"text-center border-b border-gray-700 print:border-black pb-4 mb-6 print:pb-2 print:mb-3",children:[t.jsx("h1",{className:"text-2xl font-bold text-white print:text-black print:text-xl print:mb-1",children:i.title}),t.jsxs("p",{className:"text-sm text-gray-400 print:text-gray-600 print:text-xs",children:["Paper ID: ",i.paperId]}),t.jsxs("div",{className:"flex justify-between mt-2 text-sm text-gray-400 print:text-gray-600 print:text-xs print:mt-1",children:[t.jsxs("span",{children:["Duration: ",i.duration]}),t.jsxs("span",{children:["Total Marks: ",i.totalMarks]})]}),i.prerequisites&&t.jsx("div",{className:"mt-3 text-xs text-gray-500 print:text-gray-600 print:text-xs print:mt-1",children:t.jsxs("span",{children:["Prerequisites: ",i.prerequisites]})})]}),i.instructions&&t.jsxs("div",{className:"mb-6 p-4 bg-gray-800 rounded-lg border border-gray-700 print:bg-white print:border-black print:shadow-none print:p-3 print:mb-3",children:[t.jsx("h3",{className:"text-md font-semibold text-yellow-400 print:text-black mb-2 print:text-sm print:mb-1",children:"Instructions:"}),t.jsx("ul",{className:"list-disc pl-5 text-sm text-gray-300 print:text-black print:text-xs space-y-1 print:space-y-0.5",children:i.instructions.map((e,n)=>t.jsx("li",{className:"print:text-black print:leading-tight",children:e},n))})]}),i.sections.map((e,n)=>t.jsxs("div",{className:"mb-8 print:mb-4",children:[t.jsxs("div",{className:"mb-3 print:mb-2",children:[t.jsxs("h2",{className:"text-lg font-semibold text-white print:text-black print:text-base",children:["Section ",e.section,": ",e.type]}),t.jsxs("p",{className:"text-sm text-gray-400 print:text-gray-600 print:text-xs",children:["(",e.totalQuestions," Questions × ",e.marksPerQuestion," Marks)"]}),e.description&&t.jsx("p",{className:"text-xs text-gray-500 print:text-gray-600 print:text-xs print:mt-0.5",children:e.description})]}),t.jsx("ol",{className:"list-decimal pl-5 space-y-6 print:space-y-2",children:e.questions.map((r,s)=>{const a=`${n}-${s}`,b=d[a],g=r.answer&&f(r.answer);return t.jsxs("li",{className:"space-y-2 print:space-y-1",children:[t.jsxs("div",{className:"flex justify-between items-start gap-4",children:[t.jsx("div",{className:"text-gray-200 print:text-black flex-1 font-medium print:text-sm",children:l(r.q)}),t.jsxs("div",{className:"flex items-center gap-3",children:[t.jsxs("span",{className:"text-sm text-gray-400 print:text-gray-600 font-mono print:text-xs",children:["[",r.marks," marks]"]}),p&&t.jsx("button",{onClick:()=>x(n,s),className:"px-2 py-1 text-xs rounded bg-blue-600 hover:bg-blue-500 text-white transition-colors no-print",children:b?"Hide Answer":"Show Answer"})]})]}),r.hint&&t.jsxs("div",{className:"text-xs text-gray-500 print:text-gray-600 italic pl-4 print:text-xs print:leading-tight",children:["💡 Hint: ",r.hint]}),p&&b&&r.answer&&t.jsx("div",{className:`answer-content mt-3 p-4 rounded-lg border ${g?"bg-gray-850":"bg-gray-800"} print:bg-white border-gray-700 print:border-black print:p-2 print:mt-1`,children:t.jsxs("div",{className:"text-sm print:text-xs",children:[t.jsxs("div",{className:"text-emerald-400 print:text-black text-xs font-semibold mb-2 flex items-center gap-2 print:mb-1",children:[t.jsx("span",{children:"📝 Answer:"}),g&&t.jsx("span",{className:"text-blue-400 print:text-gray-600",children:"(Includes Java Code)"})]}),o(r.answer)]})})]},s)})})]},n)),t.jsxs("div",{className:"mt-8 pt-4 border-t border-gray-700 print:border-gray-300 text-center text-xs text-gray-500 print:text-gray-600 print:mt-4 print:pt-2",children:[t.jsxs("p",{children:["© ",new Date().getFullYear()," Java Question Paper - All Rights Reserved"]}),t.jsx("p",{className:"mt-1 print:mt-0.5",children:"Good Luck!"})]})]}),t.jsx("style",{jsx:!0,children:`
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
      `})]})};export{P as J};
