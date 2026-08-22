import{r as o,j as t}from"./index-YkKVfVEM.js";import{P}from"./PrintButton-Cm_TXdcK.js";import{J as u}from"./JavaCodeBlock-DN0rWtg8.js";import{P as f}from"./prism-BIjtOw9A.js";import"./prism-java-BwO6k4I_.js";function w({code:i="",highlightLines:p=[],title:h="Java Code (BlueJ)"}){const[x,m]=o.useState([]),l=o.useRef(null);return o.useEffect(()=>{const c=f.highlight(i,f.languages.java,"java");m(c.split(`
`))},[i]),t.jsx("div",{ref:l,className:"my-5 rounded-2xl overflow-hidden bg-white border border-gray-300 shadow-md",children:t.jsx("div",{className:"flex text-sm leading-6 font-mono overflow-auto",children:t.jsx("pre",{className:"flex-1 px-4 py-3 whitespace-pre",children:t.jsx("code",{className:"language-java",children:x.map((c,d)=>t.jsx("div",{className:p.includes(d+1)?"bg-gray-200 border-l-2 border-gray-800 pl-3":"pl-3",dangerouslySetInnerHTML:{__html:c||"&nbsp;"}},d))})})})})}const W=({data:i,isLoggedIn:p=!1,organizationDetails:h={}})=>{const[x,m]=o.useState({}),[l,c]=o.useState(!1),d=(e,a)=>{const r=`${e}-${a}`;m(s=>({...s,[r]:!s[r]}))},j=e=>e?e.includes("```java")||e.includes("```")?e.split(/(```java[\s\S]*?```|```[\s\S]*?```)/g).map((r,s)=>{if(r.startsWith("```java")&&r.endsWith("```")){const n=r.slice(7,-3).trim();return t.jsx(w,{code:n,title:"Java Code"},s)}if(r.startsWith("```")&&r.endsWith("```")){const n=r.slice(3,-3).trim();return t.jsx(w,{code:n,title:"Code"},s)}return t.jsx("span",{className:"whitespace-pre-wrap",children:r},s)}):t.jsx("span",{className:"whitespace-pre-wrap",children:e}):null,y=e=>e?e.includes("```java")||e.includes("```")?e.split(/(```java[\s\S]*?```|```[\s\S]*?```)/g).map((r,s)=>{if(r.startsWith("```java")&&r.endsWith("```")){const n=r.slice(7,-3).trim();return t.jsx(u,{code:n,title:"Java Code"},s)}if(r.startsWith("```")&&r.endsWith("```")){const n=r.slice(3,-3).trim();return t.jsx(u,{code:n,title:"Code"},s)}return t.jsx("p",{className:"whitespace-pre-wrap text-gray-300 print:text-black print:leading-tight",children:r},s)}):t.jsx("p",{className:"whitespace-pre-wrap text-gray-300 print:text-black print:leading-tight",children:e}):null,v=e=>e&&(e.includes("```java")||e.includes("public class")||e.includes("public static void")),k=(e=!1)=>{const a=window.open("","_blank","width=800,height=600");if(!a){alert("Please allow popups for this site to print.");return}let r=`
      <!DOCTYPE html>
      <html>
        <head>
          <title>${i.title}</title>
          <style>
            /* Reset and print styles */
            * { margin: 0; padding: 0; box-sizing: border-box; }
            body { font-family: Arial, Helvetica, sans-serif; line-height: 1.4; padding: 20px; color: #000; background: #fff; }
            .paper { max-width: 900px; margin: 0 auto; }
            h1 { font-size: 20px; margin-bottom: 5px; }
            .header { text-align: center; border-bottom: 1px solid #000; padding-bottom: 10px; margin-bottom: 15px; }
            .header p { font-size: 12px; margin: 2px 0; }
            .instructions { margin-bottom: 15px; padding: 10px; border: 1px solid #000; border-radius: 4px; }
            .instructions h3 { font-size: 14px; margin-bottom: 5px; }
            .instructions ul { font-size: 12px; list-style: disc; padding-left: 20px; }
            .section { margin-bottom: 20px; }
            .section h2 { font-size: 16px; margin-bottom: 5px; }
            .section .desc { font-size: 12px; color: #333; }
            .question { margin-bottom: 12px; }
            .question .qtext { font-size: 14px; font-weight: 500; display: flex; justify-content: space-between; }
            .question .qtext .marks { font-size: 12px; font-weight: normal; color: #555; }
            .question .answer { margin-top: 4px; padding: 6px 10px; border: 1px solid #ddd; border-radius: 4px; background: #f9f9f9; font-size: 13px; }
            .question .answer .ans-label { font-weight: 600; color: #2a7a2a; }
            .footer { margin-top: 20px; border-top: 1px solid #ccc; padding-top: 10px; text-align: center; font-size: 11px; color: #777; }
            pre, code { background: #f4f4f4; padding: 4px; border-radius: 3px; font-size: 12px; }
            .code-block { background: #f4f4f4; padding: 8px; border-radius: 4px; margin: 4px 0; font-family: monospace; white-space: pre-wrap; }
          </style>
        </head>
        <body>
          <div class="paper">
            <!-- Header -->
            <div class="header">
              <h1>${i.title}</h1>
              <p>Paper ID: ${i.paperId}</p>
              <p>Duration: ${i.duration} | Total Marks: ${i.totalMarks}</p>
              ${i.prerequisites?`<p>Prerequisites: ${i.prerequisites}</p>`:""}
            </div>
            <!-- Instructions -->
            ${i.instructions?`
              <div class="instructions">
                <h3>Instructions:</h3>
                <ul>
                  ${i.instructions.map(s=>`<li>${s}</li>`).join("")}
                </ul>
              </div>
            `:""}
            <!-- Sections -->
            ${i.sections.map(s=>`
              <div class="section">
                <h2>Section ${s.section}: ${s.type}</h2>
                <p class="desc">(${s.totalQuestions} Questions × ${s.marksPerQuestion} Marks) ${s.description?" - "+s.description:""}</p>
                <ol style="padding-left: 20px; margin-top: 8px;">
                  ${s.questions.map((n,g)=>`
                    <li class="question" style="margin-bottom: 8px;">
                      <div class="qtext">
                        <span>${n.q.replace(/```java/g,'<pre class="code-block">').replace(/```/g,"</pre>").replace(/\n/g,"<br/>")}</span>
                        <span class="marks">[${n.marks} marks]</span>
                      </div>
                      ${e&&n.answer?`
                        <div class="answer">
                          <div class="ans-label">📝 Answer:</div>
                          <div>${n.answer.replace(/```java/g,'<pre class="code-block">').replace(/```/g,"</pre>").replace(/\n/g,"<br/>")}</div>
                        </div>
                      `:""}
                    </li>
                  `).join("")}
                </ol>
              </div>
            `).join("")}
            <!-- Footer -->
            <div class="footer">
              <p>© ${new Date().getFullYear()} Java Question Paper - All Rights Reserved</p>
              <p>Good Luck!</p>
            </div>
          </div>
          <script>
            window.onload = function() {
              window.print();
              window.onafterprint = function() { window.close(); };
            }
          <\/script>
        </body>
      </html>
    `;a.document.write(r),a.document.close()},N=()=>{k(!0)};return t.jsxs("div",{className:"max-w-4xl mx-auto p-6 bg-gray-900 shadow-lg rounded-xl text-gray-100 print:bg-white print:text-black print:p-4",children:[t.jsxs("div",{className:"flex justify-end mb-4 no-print gap-2",children:[t.jsx(P,{targetId:"print-content",title:i.title,organizationDetails:h}),t.jsx("button",{onClick:N,className:"px-4 py-2 bg-green-600 hover:bg-green-700 text-white text-sm rounded transition-colors",children:"Print with Answers"})]}),t.jsxs("div",{id:"print-content",className:"print:leading-tight",children:[t.jsxs("div",{className:"text-center border-b border-gray-700 print:border-black pb-4 mb-6 print:pb-2 print:mb-3",children:[t.jsx("h1",{className:"text-2xl font-bold text-white print:text-black print:text-xl print:mb-1",children:i.title}),t.jsxs("p",{className:"text-sm text-gray-400 print:text-gray-600 print:text-xs",children:["Paper ID: ",i.paperId]}),t.jsxs("div",{className:"flex justify-between mt-2 text-sm text-gray-400 print:text-gray-600 print:text-xs print:mt-1",children:[t.jsxs("span",{children:["Duration: ",i.duration]}),t.jsxs("span",{children:["Total Marks: ",i.totalMarks]})]}),i.prerequisites&&t.jsx("div",{className:"mt-3 text-xs text-gray-500 print:text-gray-600 print:text-xs print:mt-1",children:t.jsxs("span",{children:["Prerequisites: ",i.prerequisites]})})]}),i.instructions&&t.jsxs("div",{className:"mb-6 p-4 bg-gray-800 rounded-lg border border-gray-700 print:bg-white print:border-black print:shadow-none print:p-3 print:mb-3",children:[t.jsx("h3",{className:"text-md font-semibold text-yellow-400 print:text-black mb-2 print:text-sm print:mb-1",children:"Instructions:"}),t.jsx("ul",{className:"list-disc pl-5 text-sm text-gray-300 print:text-black print:text-xs space-y-1 print:space-y-0.5",children:i.instructions.map((e,a)=>t.jsx("li",{className:"print:text-black print:leading-tight",children:e},a))})]}),i.sections.map((e,a)=>t.jsxs("div",{className:"mb-8 print:mb-4",children:[t.jsxs("div",{className:"mb-3 print:mb-2",children:[t.jsxs("h2",{className:"text-lg font-semibold text-white print:text-black print:text-base",children:["Section ",e.section,": ",e.type]}),t.jsxs("p",{className:"text-sm text-gray-400 print:text-gray-600 print:text-xs",children:["(",e.totalQuestions," Questions × ",e.marksPerQuestion," Marks)"]}),e.description&&t.jsx("p",{className:"text-xs text-gray-500 print:text-gray-600 print:text-xs print:mt-0.5",children:e.description})]}),t.jsx("ol",{className:"list-decimal pl-5 space-y-6 print:space-y-2",children:e.questions.map((r,s)=>{const n=`${a}-${s}`,g=x[n],b=r.answer&&v(r.answer),$=p&&!l;return t.jsxs("li",{className:"space-y-2 print:space-y-1",children:[t.jsxs("div",{className:"flex justify-between items-start gap-4 print:flex-nowrap print:items-baseline print:gap-2",children:[t.jsx("div",{className:"text-gray-200 print:text-black flex-1 font-medium print:text-sm print:break-words",children:j(r.q)}),t.jsxs("div",{className:"flex items-center gap-3 print:flex-shrink-0 print:ml-2 print:whitespace-nowrap",children:[t.jsxs("span",{className:"text-sm text-gray-400 print:text-gray-600 font-mono print:text-xs",children:["[",r.marks," marks]"]}),$&&t.jsx("button",{onClick:()=>d(a,s),className:"px-2 py-1 text-xs rounded bg-blue-600 hover:bg-blue-500 text-white transition-colors no-print",children:g?"Hide Answer":"Show Answer"})]})]}),r.hint&&t.jsxs("div",{className:"text-xs text-gray-500 print:text-gray-600 italic pl-4 print:text-xs print:leading-tight",children:["💡 Hint: ",r.hint]}),p&&(g||l)&&r.answer&&t.jsx("div",{className:`answer-content mt-3 p-4 rounded-lg border ${b?"bg-gray-850":"bg-gray-800"} print:bg-white border-gray-700 print:border-black print:p-2 print:mt-1`,children:t.jsxs("div",{className:"text-sm print:text-xs",children:[t.jsxs("div",{className:"text-emerald-400 print:text-black text-xs font-semibold mb-2 flex items-center gap-2 print:mb-1",children:[t.jsx("span",{children:"📝 Answer:"}),b&&t.jsx("span",{className:"text-blue-400 print:text-gray-600",children:"(Includes Java Code)"})]}),y(r.answer)]})})]},s)})})]},a)),t.jsxs("div",{className:"mt-8 pt-4 border-t border-gray-700 print:border-gray-300 text-center text-xs text-gray-500 print:text-gray-600 print:mt-4 print:pt-2",children:[t.jsxs("p",{children:["© ",new Date().getFullYear()," Java Question Paper - All Rights Reserved"]}),t.jsx("p",{className:"mt-1 print:mt-0.5",children:"Good Luck!"})]})]}),t.jsx("style",{jsx:!0,children:`
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
      `})]})};export{W as J};
