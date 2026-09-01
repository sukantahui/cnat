import{b as l,j as t}from"./vendor-react-core-Doz9nIC6.js";import{P as z}from"./PrintButton-BGrBfOtS.js";import{J as f}from"./JavaCodeBlock-BwsLxS3r.js";import{P as v}from"./vendor-prism-ZrEUZN6d.js";function w({code:r="",highlightLines:c=[],title:b="Java Code (BlueJ)"}){const[u,h]=l.useState([]),d=l.useRef(null);return l.useEffect(()=>{const m=v.highlight(r,v.languages.java,"java");h(m.split(`
`))},[r]),t.jsxs("div",{ref:d,className:"code-block-container my-3 rounded-xl overflow-hidden bg-slate-800/90 border border-slate-700/80 shadow-sm text-slate-100 print:bg-gray-100 print:border-gray-400 print:text-black print:my-2",children:[t.jsx("div",{className:"flex text-sm leading-6 font-mono overflow-auto",children:t.jsx("pre",{className:"flex-1 px-4 py-3 whitespace-pre",children:t.jsx("code",{className:"language-java",children:u.map((m,x)=>t.jsx("div",{className:c.includes(x+1)?"bg-slate-700/50 border-l-2 border-sky-400 pl-3":"pl-3",dangerouslySetInnerHTML:{__html:m||"&nbsp;"}},x))})})}),t.jsx("style",{jsx:!0,children:`
        .code-block-container code,
        .code-block-container pre {
          color: #f8fafc !important;
          background: transparent !important;
        }
        .code-block-container .token {
          color: #e2e8f0 !important;
          background: transparent !important;
        }
        .code-block-container .token.keyword {
          color: #38bdf8 !important;
          font-weight: bold;
        }
        .code-block-container .token.string,
        .code-block-container .token.number {
          color: #f472b6 !important;
        }
        .code-block-container .token.comment {
          color: #94a3b8 !important;
          font-style: italic;
        }

        @media print {
          .code-block-container {
            background-color: #f4f4f4 !important;
            color: #000000 !important;
            border-color: #999999 !important;
          }
          .code-block-container code,
          .code-block-container pre,
          .code-block-container .token {
            color: #000000 !important;
          }
        }
      `})]})}const W=({data:r,isLoggedIn:c=!1,organizationDetails:b={}})=>{const[u,h]=l.useState({}),[d,m]=l.useState(!1),x=(e,s)=>{const i=`${e}-${s}`;h(n=>({...n,[i]:!n[i]}))},k=e=>e?e.includes("```java")||e.includes("```")?e.split(/(```java[\s\S]*?```|```[\s\S]*?```)/g).map((i,n)=>{if(i.startsWith("```java")&&i.endsWith("```")){const a=i.slice(7,-3).trim();return t.jsx(w,{code:a,title:"Java Code"},n)}if(i.startsWith("```")&&i.endsWith("```")){const a=i.slice(3,-3).trim();return t.jsx(w,{code:a,title:"Code"},n)}return t.jsx("span",{className:"whitespace-pre-wrap",children:i},n)}):t.jsx("span",{className:"whitespace-pre-wrap",children:e}):null,y=e=>e?e.includes("```java")||e.includes("```")?e.split(/(```java[\s\S]*?```|```[\s\S]*?```)/g).map((i,n)=>{if(i.startsWith("```java")&&i.endsWith("```")){const a=i.slice(7,-3).trim();return t.jsx(f,{code:a,title:"Java Code"},n)}if(i.startsWith("```")&&i.endsWith("```")){const a=i.slice(3,-3).trim();return t.jsx(f,{code:a,title:"Code"},n)}return t.jsx("p",{className:"whitespace-pre-wrap text-gray-300 print:text-black print:leading-tight",children:i},n)}):t.jsx("p",{className:"whitespace-pre-wrap text-gray-300 print:text-black print:leading-tight",children:e}):null,j=e=>e&&(e.includes("```java")||e.includes("public class")||e.includes("public static void")),N=(e=!1)=>{const s=window.open("","_blank","width=850,height=700");if(!s){alert("Please allow popups for this site to print.");return}const n={...{name:"Coder & AccoTax",address:"123 Education Street, Knowledge City, KC 123456",phone:"+91 1234567890",email:"info@coderandaccotax.com",website:"www.coderandaccotax.com"},...b},a=new Date().toLocaleDateString("en-US",{year:"numeric",month:"long",day:"numeric"});let g=`
      <!DOCTYPE html>
      <html>
        <head>
          <title>${r.title} ${e?"(With Answers)":""}</title>
          <style>
            @page {
              size: A4;
              margin: 10mm 12mm;
            }
            * { margin: 0; padding: 0; box-sizing: border-box; }
            body { 
              font-family: 'Times New Roman', Times, Georgia, serif; 
              line-height: 1.3; 
              color: #000; 
              background: #fff; 
              font-size: 11pt;
            }
            .paper { max-width: 100%; margin: 0 auto; }
            
            /* Organization Header */
            .org-header { text-align: center; margin-bottom: 10px; padding-bottom: 6px; border-bottom: 2px solid #000; }
            .org-name { font-size: 15pt; font-weight: bold; text-transform: uppercase; letter-spacing: 0.5px; }
            .org-details { font-size: 8.5pt; color: #222; margin-top: 2px; line-height: 1.35; }
            .org-info-line { margin-top: 1px; }
            .org-issue-date { font-size: 8.5pt; color: #444; margin-top: 2px; font-style: italic; }

            /* Question Paper Header */
            .paper-header { text-align: center; margin-bottom: 10px; padding-bottom: 6px; border-bottom: 1px solid #000; }
            .paper-title { font-size: 14pt; font-weight: bold; margin-bottom: 3px; }
            .paper-meta { display: flex; justify-content: space-between; font-size: 9pt; font-weight: bold; margin-top: 4px; padding: 3px 0; border-top: 1px solid #000; border-bottom: 1px solid #000; }
            .paper-id { font-size: 8.5pt; color: #444; }

            /* Instructions */
            .instructions { margin-bottom: 10px; padding: 6px 10px; border: 1px solid #000; background: #fdfdfd; font-size: 9pt; page-break-inside: avoid; }
            .instructions h3 { font-size: 9.5pt; font-weight: bold; margin-bottom: 2px; text-transform: uppercase; }
            .instructions ul { list-style: disc; padding-left: 18px; }
            .instructions li { margin-bottom: 1px; }

            /* Sections */
            .section { margin-bottom: 12px; }
            .section-header { background: #f0f0f0; padding: 4px 8px; border-left: 3px solid #000; margin-bottom: 8px; border-top: 1px solid #ddd; border-right: 1px solid #ddd; border-bottom: 1px solid #ddd; page-break-inside: avoid; }
            .section-title { font-size: 11pt; font-weight: bold; }
            .section-desc { font-size: 8.5pt; color: #333; font-style: italic; }

            /* Questions */
            .question-list { list-style: decimal; padding-left: 22px; margin: 0; }
            .question { margin-bottom: 8px; page-break-inside: avoid; break-inside: avoid; }
            .qtext { font-size: 10.5pt; display: flex; justify-content: space-between; align-items: flex-start; gap: 10px; line-height: 1.3; }
            .qcontent { flex: 1; }
            .marks { font-size: 9pt; font-weight: bold; white-space: nowrap; }

            /* Answers */
            .answer { margin-top: 4px; padding: 5px 8px; border: 1px solid #999; border-radius: 3px; background: #f8f9fa; font-size: 9.5pt; page-break-inside: avoid; }
            .ans-label { font-weight: bold; color: #000; font-size: 9pt; margin-bottom: 2px; }

            /* Code Blocks */
            pre, code { font-family: 'Courier New', Courier, monospace !important; font-size: 9pt !important; line-height: 1.25 !important; }
            pre.code-block { background: #f4f4f4; border: 1px solid #ccc; padding: 5px 8px; margin: 4px 0; border-radius: 3px; white-space: pre-wrap; word-wrap: break-word; page-break-inside: avoid; }

            /* Footer */
            .footer { margin-top: 15px; border-top: 1px solid #000; padding-top: 4px; text-align: center; font-size: 8pt; color: #444; page-break-inside: avoid; }
          </style>
        </head>
        <body>
          <div class="paper">
            <!-- Organization Header -->
            <div class="org-header">
              <div class="org-name">${n.name}</div>
              <div class="org-details">
                <div>${n.address}</div>
                <div class="org-info-line">
                  <span>Ph: ${n.phone}</span> &bull; 
                  <span>Email: ${n.email}</span>
                  ${n.website?` &bull; <span>Web: ${n.website}</span>`:""}
                </div>
                <div class="org-issue-date">Date of Issue: ${a}</div>
              </div>
            </div>

            <!-- Question Paper Header -->
            <div class="paper-header">
              <div class="paper-title">${r.title} ${e?'<span style="font-size:10pt; font-weight:normal;">(Answer Key)</span>':""}</div>
              <div class="paper-meta">
                <span>Paper ID: ${r.paperId}</span>
                <span>Duration: ${r.duration}</span>
                <span>Total Marks: ${r.totalMarks}</span>
              </div>
              ${r.prerequisites?`<div style="font-size: 8.5pt; margin-top: 2px;">Prerequisites: ${r.prerequisites}</div>`:""}
            </div>

            <!-- Instructions -->
            ${r.instructions?`
              <div class="instructions">
                <h3>Instructions:</h3>
                <ul>
                  ${r.instructions.map(o=>`<li>${o}</li>`).join("")}
                </ul>
              </div>
            `:""}

            <!-- Sections -->
            ${r.sections.map(o=>`
              <div class="section">
                <div class="section-header">
                  <div class="section-title">Section ${o.section}: ${o.type}</div>
                  <div class="section-desc">(${o.totalQuestions} Questions × ${o.marksPerQuestion} Marks)${o.description?" - "+o.description:""}</div>
                </div>
                <ol class="question-list">
                  ${o.questions.map(p=>`
                    <li class="question">
                      <div class="qtext">
                        <div class="qcontent">${p.q.replace(/```java/g,'<pre class="code-block">').replace(/```/g,"</pre>").replace(/\n/g,"<br/>")}</div>
                        <span class="marks">[${p.marks} marks]</span>
                      </div>
                      ${e&&p.answer?`
                        <div class="answer">
                          <div class="ans-label">📝 Answer:</div>
                          <div>${p.answer.replace(/```java/g,'<pre class="code-block">').replace(/```/g,"</pre>").replace(/\n/g,"<br/>")}</div>
                        </div>
                      `:""}
                    </li>
                  `).join("")}
                </ol>
              </div>
            `).join("")}

            <!-- Footer -->
            <div class="footer">
              <p>© ${new Date().getFullYear()} ${n.name} - All Rights Reserved | Page 1 of 1</p>
              <p style="font-style: italic;">*** Good Luck ***</p>
            </div>
          </div>
          <script>
            window.onload = function() {
              setTimeout(function() {
                window.print();
                setTimeout(function() { window.close(); }, 500);
              }, 300);
            }
          <\/script>
        </body>
      </html>
    `;s.document.write(g),s.document.close()},$=()=>{N(!0)};return t.jsxs("div",{className:"max-w-4xl mx-auto p-6 bg-gray-900 shadow-lg rounded-xl text-gray-100 print:bg-white print:text-black print:p-4",children:[t.jsxs("div",{className:"flex justify-end mb-4 no-print gap-2",children:[t.jsx(z,{targetId:"print-content",title:r.title,organizationDetails:b}),t.jsx("button",{onClick:$,className:"px-4 py-2 bg-green-600 hover:bg-green-700 text-white text-sm rounded transition-colors",children:"Print with Answers"})]}),t.jsxs("div",{id:"print-content",className:"print:leading-tight",children:[t.jsxs("div",{className:"text-center border-b border-gray-700 print:border-black pb-4 mb-6 print:pb-2 print:mb-3",children:[t.jsx("h1",{className:"text-2xl font-bold text-white print:text-black print:text-xl print:mb-1",children:r.title}),t.jsxs("p",{className:"text-sm text-gray-400 print:text-gray-600 print:text-xs",children:["Paper ID: ",r.paperId]}),t.jsxs("div",{className:"flex justify-between mt-2 text-sm text-gray-400 print:text-gray-600 print:text-xs print:mt-1",children:[t.jsxs("span",{children:["Duration: ",r.duration]}),t.jsxs("span",{children:["Total Marks: ",r.totalMarks]})]}),r.prerequisites&&t.jsx("div",{className:"mt-3 text-xs text-gray-500 print:text-gray-600 print:text-xs print:mt-1",children:t.jsxs("span",{children:["Prerequisites: ",r.prerequisites]})})]}),r.instructions&&t.jsxs("div",{className:"mb-6 p-4 bg-gray-800 rounded-lg border border-gray-700 print:bg-white print:border-black print:shadow-none print:p-3 print:mb-3",children:[t.jsx("h3",{className:"text-md font-semibold text-yellow-400 print:text-black mb-2 print:text-sm print:mb-1",children:"Instructions:"}),t.jsx("ul",{className:"list-disc pl-5 text-sm text-gray-300 print:text-black print:text-xs space-y-1 print:space-y-0.5",children:r.instructions.map((e,s)=>t.jsx("li",{className:"print:text-black print:leading-tight",children:e},s))})]}),r.sections.map((e,s)=>t.jsxs("div",{className:"mb-8 print:mb-4 section",children:[t.jsxs("div",{className:"mb-3 print:mb-2",children:[t.jsxs("h2",{className:"text-lg font-semibold text-white print:text-black print:text-base",children:["Section ",e.section,": ",e.type]}),t.jsxs("p",{className:"text-sm text-gray-400 print:text-gray-600 print:text-xs",children:["(",e.totalQuestions," Questions × ",e.marksPerQuestion," Marks)"]}),e.description&&t.jsx("p",{className:"text-xs text-gray-500 print:text-gray-600 print:text-xs print:mt-0.5",children:e.description})]}),t.jsx("ol",{className:"list-decimal pl-5 space-y-6 print:space-y-2",children:e.questions.map((i,n)=>{const a=`${s}-${n}`,g=u[a],o=i.answer&&j(i.answer),p=c&&!d;return t.jsxs("li",{className:"space-y-2 print:space-y-1 question",children:[t.jsxs("div",{className:"flex justify-between items-start gap-4 print:flex-nowrap print:items-baseline print:gap-2",children:[t.jsx("div",{className:"text-gray-200 print:text-black flex-1 font-medium print:text-sm print:break-words",children:k(i.q)}),t.jsxs("div",{className:"flex items-center gap-3 print:flex-shrink-0 print:ml-2 print:whitespace-nowrap",children:[t.jsxs("span",{className:"text-sm text-gray-400 print:text-gray-600 font-mono print:text-xs",children:["[",i.marks," marks]"]}),p&&t.jsx("button",{onClick:()=>x(s,n),className:"px-2 py-1 text-xs rounded bg-blue-600 hover:bg-blue-500 text-white transition-colors no-print",children:g?"Hide Answer":"Show Answer"})]})]}),i.hint&&t.jsxs("div",{className:"text-xs text-gray-500 italic pl-4 no-print print:hidden",children:["💡 Hint: ",i.hint]}),c&&(g||d)&&i.answer&&t.jsx("div",{className:`answer-content mt-3 p-4 rounded-lg border ${o?"bg-gray-850":"bg-gray-800"} print:bg-white border-gray-700 print:border-black print:p-2 print:mt-1`,children:t.jsxs("div",{className:"text-sm print:text-xs",children:[t.jsxs("div",{className:"text-emerald-400 print:text-black text-xs font-semibold mb-2 flex items-center gap-2 print:mb-1",children:[t.jsx("span",{children:"📝 Answer:"}),o&&t.jsx("span",{className:"text-blue-400 print:text-gray-600",children:"(Includes Java Code)"})]}),y(i.answer)]})})]},n)})})]},s)),t.jsxs("div",{className:"mt-8 pt-4 border-t border-gray-700 print:border-gray-300 text-center text-xs text-gray-500 print:text-gray-600 print:mt-4 print:pt-2",children:[t.jsxs("p",{children:["© ",new Date().getFullYear()," Java Question Paper - All Rights Reserved"]}),t.jsx("p",{className:"mt-1 print:mt-0.5",children:"Good Luck!"})]})]}),t.jsx("style",{jsx:!0,children:`
        @media print {
          @page {
            size: A4;
            margin: 10mm 12mm !important;
          }
          body {
            background-color: white !important;
            color: black !important;
            font-family: 'Times New Roman', Times, Georgia, serif !important;
            font-size: 11pt !important;
            line-height: 1.3 !important;
          }
          .print\\:bg-white {
            background-color: white !important;
          }
          .print\\:text-black {
            color: black !important;
          }
          .print\\:text-gray-600 {
            color: #333333 !important;
          }
          .print\\:border-black {
            border-color: black !important;
          }
          .print\\:border-gray-300 {
            border-color: #999999 !important;
          }
          .print\\:shadow-none {
            box-shadow: none !important;
          }
          li, .question {
            page-break-inside: avoid !important;
            break-inside: avoid !important;
            margin-bottom: 6px !important;
          }
          .section {
            page-break-inside: avoid !important;
            margin-bottom: 12px !important;
          }
          pre, code {
            background-color: #f4f4f4 !important;
            color: black !important;
            border: 1px solid #ccc !important;
            font-family: 'Courier New', Courier, monospace !important;
            font-size: 9pt !important;
            line-height: 1.25 !important;
            padding: 4px 6px !important;
            margin: 4px 0 !important;
            page-break-inside: avoid !important;
          }
          .answer-content {
            page-break-inside: avoid !important;
            margin-top: 4px !important;
            padding: 4px 8px !important;
            border: 1px solid #999 !important;
            background-color: #f8f9fa !important;
          }
        }
      `})]})};export{W as J};
