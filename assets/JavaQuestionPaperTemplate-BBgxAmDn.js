import{b as W,j as e}from"./vendor-react-core-CaA1o1Cx.js";import{J as B}from"./JavaCodeBlock-DjVlNPWU.js";import{P as I}from"./vendor-prism-CCfIgi4B.js";function J({code:n="",highlightLines:P=[],title:q="Java Code (BlueJ)"}){const[T,L]=W.useState([]),S=W.useRef(null);return W.useEffect(()=>{const A=I.highlight(n,I.languages.java,"java");L(A.split(`
`))},[n]),e.jsxs("div",{ref:S,className:"code-block-container my-3 rounded-xl overflow-hidden bg-slate-800/90 border border-slate-700/80 shadow-sm text-slate-100 print:bg-gray-100 print:border-gray-400 print:text-black print:my-2",children:[e.jsx("div",{className:"flex text-sm leading-6 font-mono overflow-auto",children:e.jsx("pre",{className:"flex-1 px-4 py-3 whitespace-pre",children:e.jsx("code",{className:"language-java",children:T.map((A,H)=>e.jsx("div",{className:P.includes(H+1)?"bg-slate-700/50 border-l-2 border-sky-400 pl-3":"pl-3",dangerouslySetInnerHTML:{__html:A||"&nbsp;"}},H))})})}),e.jsx("style",{jsx:!0,children:`
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
      `})]})}const ee=({data:n,isLoggedIn:P=!1,organizationDetails:q={}})=>{const[T,L]=W.useState({}),[S,A]=W.useState(!1),H=(r,d)=>{const s=`${r}-${d}`;L(t=>({...t,[s]:!t[s]}))},E=r=>r?r.replace(/\\times/g,"×").replace(/\\neq/g,"≠").replace(/\\le(?![a-zA-Z])/g,"≤").replace(/\\leq/g,"≤").replace(/\\ge(?![a-zA-Z])/g,"≥").replace(/\\geq/g,"≥").replace(/\\rightarrow/g,"→").replace(/\\%/g,"%").replace(/\\text\{([^}]+)\}/g,"$1").replace(/\$1\^3 \+ 5\^3 \+ 3\^3 = 1 \+ 125 \+ 27 = 153\$/g,"1³ + 5³ + 3³ = 1 + 125 + 27 = 153").replace(/\$([^$\n]+)\$/g,"$1"):"",v=r=>r?E(r).split(/(\*\*[\s\S]*?\*\*|__[\s\S]*?__|`[^`]+`|\*[^*\n]+\*)/g).map((t,o)=>{if(!t)return null;if(t.startsWith("**")&&t.endsWith("**")&&t.length>=4||t.startsWith("__")&&t.endsWith("__")&&t.length>=4){const a=t.slice(2,-2);return e.jsx("strong",{className:"font-bold text-white print:text-black print:font-bold",children:v(a)},o)}if(t.startsWith("`")&&t.endsWith("`")&&t.length>=2){const a=t.slice(1,-1);return e.jsx("code",{className:"px-1.5 py-0.5 mx-0.5 rounded bg-gray-800 text-emerald-400 font-mono text-xs border border-gray-700 print:bg-gray-100 print:text-black print:border-gray-300",children:a},o)}if(t.startsWith("*")&&t.endsWith("*")&&t.length>=2){const a=t.slice(1,-1);return e.jsx("em",{className:"italic text-gray-300 print:text-gray-700",children:a},o)}return e.jsx("span",{children:t},o)}):null,Q=(r,d=!1,s=null)=>{if(!r)return null;const t=r.split(`
`);let o=!1;return e.jsx("div",{className:`space-y-2 ${d?"text-gray-300 print:text-black":"text-gray-200 print:text-black"}`,children:t.map((a,m)=>{const p=a.trim();if(!p)return e.jsx("div",{className:"h-1"},m);const u=!d&&!o&&p.match(/^(Question\s+\d+)(?:\s*\[(.*?)\])?$/i);if(u){o=!0;const i=u[1],l=u[2];return e.jsxs("div",{className:"font-bold text-base sm:text-lg text-yellow-400 print:text-black mb-2 pb-1.5 border-b border-gray-700/80 print:border-black flex justify-between items-baseline",children:[e.jsxs("div",{children:[e.jsx("span",{className:"font-bold text-yellow-400 print:text-black",children:i}),l&&e.jsxs("span",{className:"text-xs sm:text-sm font-normal text-gray-400 print:text-gray-700 ml-2 italic",children:["[",l,"]"]})]}),s&&e.jsxs("span",{className:"text-xs sm:text-sm font-mono font-semibold text-gray-300 print:text-black",children:["[",s," Marks]"]})]},m)}if(p.startsWith("### "))return e.jsx("h4",{className:"text-xs sm:text-sm font-bold text-yellow-400 print:text-black mt-3 mb-1 uppercase tracking-wide",children:v(p.slice(4))},m);if(p.startsWith("## "))return e.jsx("h3",{className:"text-sm sm:text-base font-bold text-white print:text-black mt-4 mb-1",children:v(p.slice(3))},m);const x=p.match(/^(\d+\.|\([a-zA-Z0-9ivx]+\)|[ivx]+\.|\*|-|•)\s+(.*)$/i);if(x){const i=x[1],l=x[2];return e.jsxs("div",{className:"pl-6 print:pl-5 flex items-start gap-2 text-sm print:text-xs leading-relaxed print:leading-tight my-1",children:[e.jsx("strong",{className:"text-emerald-400 print:text-black font-semibold min-w-[22px] shrink-0",children:i}),e.jsx("span",{className:"flex-1",children:v(l)})]},m)}return e.jsx("p",{className:"whitespace-pre-wrap leading-relaxed print:leading-tight text-sm print:text-xs",children:v(a)},m)})})},M=(r,d=!1,s=null)=>{if(!r)return null;if(r.includes("|")&&r.includes("---")){const t=r.split(`
`),o=[],a=[],m=[];let p=!1,u=!1;for(let x=0;x<t.length;x++){const i=t[x].trim();i.startsWith("|")&&i.endsWith("|")?(p=!0,o.push(i)):p&&!u?(u=!0,m.push(t[x])):u?m.push(t[x]):a.push(t[x])}if(o.length>=2){const i=o[0].split("|").map(g=>g.trim()).filter(Boolean),l=o.slice(2).map(g=>g.split("|").map(c=>c.trim()).filter(Boolean));return e.jsxs("div",{className:"space-y-3",children:[a.length>0&&Q(a.join(`
`),d,s),e.jsx("div",{className:"overflow-x-auto my-3",children:e.jsxs("table",{className:"min-w-full text-xs text-left border border-gray-700 print:border-black rounded-lg overflow-hidden",children:[e.jsx("thead",{className:"bg-gray-800 print:bg-gray-200 text-gray-200 print:text-black font-semibold uppercase",children:e.jsx("tr",{children:i.map((g,c)=>e.jsx("th",{className:"px-3 py-2 border-b border-gray-700 print:border-black",children:v(g)},c))})}),e.jsx("tbody",{className:"divide-y divide-gray-800 print:divide-gray-300",children:l.map((g,c)=>e.jsx("tr",{className:"hover:bg-gray-800/40 print:hover:bg-transparent",children:g.map((w,f)=>e.jsx("td",{className:"px-3 py-2 text-gray-300 print:text-black",children:v(w)},f))},c))})]})}),m.length>0&&Q(m.join(`
`),d,s)]})}}return Q(r,d,s)},R=(r,d=null)=>r?r.includes("```java")||r.includes("```")?r.split(/(```java[\s\S]*?```|```[\s\S]*?```)/g).map((t,o)=>{if(t.startsWith("```java")&&t.endsWith("```")){const a=t.slice(7,-3).trim();return e.jsx(J,{code:a,title:"Java Code"},o)}if(t.startsWith("```")&&t.endsWith("```")){const a=t.slice(3,-3).trim();return e.jsx(J,{code:a,title:"Code"},o)}return e.jsx("div",{children:M(t,!1,d)},o)}):M(r,!1,d):null,O=r=>r?r.includes("```java")||r.includes("```")?r.split(/(```java[\s\S]*?```|```[\s\S]*?```)/g).map((s,t)=>{if(s.startsWith("```java")&&s.endsWith("```")){const o=s.slice(7,-3).trim();return e.jsx(B,{code:o,title:"Java Code"},t)}if(s.startsWith("```")&&s.endsWith("```")){const o=s.slice(3,-3).trim();return e.jsx(B,{code:o,title:"Code"},t)}return e.jsx("div",{children:M(s,!0)},t)}):M(r,!0):null,U=r=>r&&(r.includes("```java")||r.includes("public class")||r.includes("public static void")),D=(r=!1)=>{const d=window.open("","_blank","width=850,height=700");if(!d){alert("Please allow popups for this site to print.");return}const s=i=>i?String(i).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;"):"",t=i=>i?E(i).replace(/\*\*([\s\S]*?)\*\*/g,"<strong>$1</strong>").replace(/__([\s\S]*?)__/g,"<strong>$1</strong>").replace(/`([^`]+)`/g,'<code style="font-family:Courier New,monospace; background:#f0f0f0; padding:1px 4px; border-radius:2px; font-size:8.5pt; border:1px solid #ddd;">$1</code>').replace(/\*([^*\n]+)\*/g,"<em>$1</em>"):"",o=(i,l=null)=>{if(!i)return"";if(i.includes("|")&&i.includes("---")){const f=i.split(`
`),z=[],b=[],y=[];let $=!1,j=!1;for(let h=0;h<f.length;h++){const C=f[h].trim();C.startsWith("|")&&C.endsWith("|")?($=!0,z.push(C)):$&&!j?(j=!0,y.push(f[h])):j?y.push(f[h]):b.push(f[h])}if(z.length>=2){const h=z[0].split("|").map(N=>N.trim()).filter(Boolean),C=z.slice(2).map(N=>N.split("|").map(_=>_.trim()).filter(Boolean));let k='<table class="print-table" style="width:100%; border-collapse:collapse; margin:6px 0; font-size:8.5pt;">';k+='<thead><tr style="background:#e8e8e8;">',h.forEach(N=>{k+=`<th style="border:1px solid #333; padding:3px 6px; text-align:left; font-weight:bold;">${t(N)}</th>`}),k+="</tr></thead><tbody>",C.forEach(N=>{k+="<tr>",N.forEach(_=>{k+=`<td style="border:1px solid #333; padding:3px 6px;">${t(_)}</td>`}),k+="</tr>"}),k+="</tbody></table>";const Z=b.length>0?o(b.join(`
`),l):"",K=y.length>0?o(y.join(`
`),l):"";return`${Z}${k}${K}`}}const g=i.split(`
`);let c="",w=!1;for(let f=0;f<g.length;f++){const b=g[f].trim();if(!b){c+='<div style="height: 5px;"></div>';continue}const y=!w&&b.match(/^(Question\s+\d+)(?:\s*\[(.*?)\])?$/i);if(y){w=!0;const j=y[1],h=y[2]?` <span style="font-size: 8.5pt; font-weight: normal; color: #444; font-style: italic;">[${t(y[2])}]</span>`:"";c+=`
            <div style="font-size: 11pt; font-weight: bold; margin-bottom: 5px; padding-bottom: 2px; border-bottom: 1.5px solid #000; display: flex; justify-content: space-between; align-items: baseline;">
              <span>${j}${h}</span>
              ${l?`<span style="font-size: 9.5pt; font-family: 'Courier New', monospace; font-weight: bold;">[${l} Marks]</span>`:""}
            </div>
          `;continue}if(b.startsWith("### ")){c+=`<div style="font-weight:bold; margin-top:6px; margin-bottom:2px; font-size:9.5pt; text-transform:uppercase;">${t(b.slice(4))}</div>`;continue}if(b.startsWith("## ")){c+=`<div style="font-weight:bold; margin-top:8px; margin-bottom:3px; font-size:10.5pt;">${t(b.slice(3))}</div>`;continue}const $=b.match(/^(\d+\.|\([a-zA-Z0-9ivx]+\)|[ivx]+\.|\*|-|•)\s+(.*)$/i);if($){const j=$[1],h=$[2];c+=`
            <div style="margin-left: 24px; text-indent: -24px; margin-top: 2px; margin-bottom: 2px; line-height: 1.35; font-size: 10pt;">
              <strong style="min-width: 20px; display: inline-block;">${j}</strong> ${t(h)}
            </div>
          `;continue}c+=`<div style="margin-bottom: 3px; line-height: 1.35; font-size: 10pt;">${t(b)}</div>`}return c},a=(i,l=null)=>i?i.includes("```java")||i.includes("```")?i.split(/(```java[\s\S]*?```|```[\s\S]*?```)/g).map(c=>{if(c.startsWith("```java")&&c.endsWith("```")){const w=c.slice(7,-3).trim();return`<pre class="code-block">${s(w)}</pre>`}if(c.startsWith("```")&&c.endsWith("```")){const w=c.slice(3,-3).trim();return`<pre class="code-block">${s(w)}</pre>`}return o(c,l)}).join(""):o(i,l):"",p={...{name:"Coder & AccoTax",address:"123 Education Street, Knowledge City, KC 123456",phone:"+91 1234567890",email:"info@coderandaccotax.com",website:"www.coderandaccotax.com"},...q},u=new Date().toLocaleDateString("en-US",{year:"numeric",month:"long",day:"numeric"});let x=`
      <!DOCTYPE html>
      <html>
        <head>
          <title>${n.title} ${r?"(With Answers)":""}</title>
          <style>
            @page {
              size: A4;
              margin: 10mm 12mm;
            }
            * { margin: 0; padding: 0; box-sizing: border-box; }
            body { 
              font-family: 'Times New Roman', Times, Georgia, serif; 
              line-height: 1.35; 
              color: #000; 
              background: #fff; 
              font-size: 10.5pt;
            }
            .paper { max-width: 100%; margin: 0 auto; }
            strong, b { font-weight: bold !important; }
            
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
            .section { margin-bottom: 14px; }
            .section-header { background: #f0f0f0; padding: 4px 8px; border-left: 3px solid #000; margin-bottom: 10px; border-top: 1px solid #ddd; border-right: 1px solid #ddd; border-bottom: 1px solid #ddd; page-break-inside: avoid; }
            .section-title { font-size: 11pt; font-weight: bold; }
            .section-desc { font-size: 8.5pt; color: #333; font-style: italic; }

            /* Questions (No artificial outer numbering) */
            .question-list { list-style: none; padding: 0; margin: 0; }
            .question { margin-bottom: 12px; page-break-inside: avoid; break-inside: avoid; }
            .qtext-wrapper { display: flex; justify-content: space-between; align-items: flex-start; gap: 10px; }
            .qcontent-body { flex: 1; }
            .marks-badge { font-size: 9pt; font-family: 'Courier New', monospace; font-weight: bold; white-space: nowrap; }

            /* Answers */
            .answer { margin-top: 5px; padding: 6px 10px; border: 1px solid #999; border-radius: 3px; background: #f8f9fa; font-size: 9.5pt; page-break-inside: avoid; }
            .ans-label { font-weight: bold; color: #000; font-size: 9pt; margin-bottom: 2px; }

            /* Code Blocks */
            pre, code { font-family: 'Courier New', Courier, monospace !important; font-size: 9pt !important; line-height: 1.25 !important; }
            pre.code-block { background: #f4f4f4; border: 1px solid #ccc; padding: 5px 8px; margin: 4px 0; border-radius: 3px; white-space: pre-wrap; word-wrap: break-word; page-break-inside: avoid; }

            /* Tables */
            .print-table { border: 1px solid #333; page-break-inside: avoid; }
            .print-table th, .print-table td { border: 1px solid #333; }

            /* Footer */
            .footer { margin-top: 15px; border-top: 1px solid #000; padding-top: 4px; text-align: center; font-size: 8pt; color: #444; page-break-inside: avoid; }
          </style>
        </head>
        <body>
          <div class="paper">
            <!-- Organization Header -->
            <div class="org-header">
              <div class="org-name">${p.name}</div>
              <div class="org-details">
                <div>${p.address}</div>
                <div class="org-info-line">
                  <span>Ph: ${p.phone}</span> &bull; 
                  <span>Email: ${p.email}</span>
                  ${p.website?` &bull; <span>Web: ${p.website}</span>`:""}
                </div>
                <div class="org-issue-date">Date of Issue: ${u}</div>
              </div>
            </div>

            <!-- Question Paper Header -->
            <div class="paper-header">
              <div class="paper-title">${n.title} ${r?'<span style="font-size:10pt; font-weight:normal;">(Answer Key)</span>':""}</div>
              <div class="paper-meta">
                <span>Paper ID: ${n.paperId}</span>
                <span>Duration: ${n.duration}</span>
                <span>Total Marks: ${n.totalMarks}</span>
              </div>
              ${n.source?`<div style="font-size: 8.5pt; color: #222; margin-top: 3px; font-weight: 500;">Source: ${n.source} ${n.sourceUrl?`(<a href="${n.sourceUrl}" target="_blank" style="color:#0055aa; text-decoration:underline;">${n.sourceUrl}</a>)`:""}</div>`:""}
              ${n.prerequisites?`<div style="font-size: 8.5pt; margin-top: 2px; color: #555;">Prerequisites: ${n.prerequisites}</div>`:""}
            </div>

            <!-- Instructions -->
            ${n.instructions?`
              <div class="instructions">
                <h3>Instructions:</h3>
                <ul>
                  ${(Array.isArray(n.instructions)?n.instructions:typeof n.instructions=="string"?[n.instructions]:[]).map(i=>`<li>${a(i)}</li>`).join("")}
                </ul>
              </div>
            `:""}

            <!-- Sections -->
            ${(n.sections||[]).map(i=>`
              <div class="section">
                <div class="section-header">
                  <div class="section-title">Section ${i.section}: ${i.type}</div>
                  <div class="section-desc">(${i.totalQuestions} Questions × ${i.marksPerQuestion} Marks)${i.description?" - "+a(i.description):""}</div>
                </div>
                <div class="question-list">
                  ${i.questions.map(l=>`
                      <div class="question">
                        ${l.q&&/^\s*Question\s+\d+/i.test(l.q)?`
                          <div>${a(l.q,l.marks)}</div>
                        `:`
                          <div class="qtext-wrapper">
                            <div class="qcontent-body">${a(l.q)}</div>
                            <span class="marks-badge">[${l.marks} mark${l.marks>1?"s":""}]</span>
                          </div>
                        `}
                        ${r&&l.answer?`
                          <div class="answer">
                            <div class="ans-label">📝 Answer / Marking Scheme:</div>
                            <div>${a(l.answer)}</div>
                          </div>
                        `:""}
                      </div>
                    `).join("")}
                </div>
              </div>
            `).join("")}

            <!-- Footer -->
            <div class="footer">
              <p>© ${new Date().getFullYear()} ${p.name} - All Rights Reserved | Page 1 of 1</p>
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
    `;d.document.write(x),d.document.close()},F=()=>{D(!0)},G=()=>{D(!1)};return e.jsxs("div",{className:"max-w-4xl mx-auto p-6 bg-gray-900 shadow-lg rounded-xl text-gray-100 print:bg-white print:text-black print:p-4",children:[e.jsxs("div",{className:"flex justify-end mb-4 no-print gap-2",children:[e.jsxs("button",{onClick:G,className:"flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white text-sm rounded-lg transition-colors shadow-md",title:"Print official blank question paper",children:[e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-4 w-4",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z"})}),"Print Question Paper"]}),e.jsxs("button",{onClick:F,className:"flex items-center gap-2 px-4 py-2 bg-green-600 hover:bg-green-700 text-white text-sm rounded-lg transition-colors shadow-md",title:"Print question paper with answers and solutions",children:[e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-4 w-4",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"})}),"Print with Answers"]})]}),e.jsxs("div",{id:"print-content",className:"print:leading-tight",children:[e.jsxs("div",{className:"text-center border-b border-gray-700 print:border-black pb-4 mb-6 print:pb-2 print:mb-3",children:[e.jsx("h1",{className:"text-2xl font-bold text-white print:text-black print:text-xl print:mb-1",children:n.title}),e.jsxs("p",{className:"text-sm text-gray-400 print:text-gray-600 print:text-xs",children:["Paper ID: ",n.paperId]}),e.jsxs("div",{className:"flex justify-between mt-2 text-sm text-gray-400 print:text-gray-600 print:text-xs print:mt-1",children:[e.jsxs("span",{children:["Duration: ",n.duration]}),e.jsxs("span",{children:["Total Marks: ",n.totalMarks]})]}),n.source&&(()=>{const r=n.sourceUrl||(n.source?.includes("CISCE")?"https://cisce.org/":null);return r?e.jsxs("a",{href:r,target:"_blank",rel:"noopener noreferrer",className:"mt-2.5 inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-950/60 border border-emerald-500/40 text-emerald-400 text-xs font-medium hover:bg-emerald-900/80 hover:text-emerald-300 hover:border-emerald-400 hover:shadow-sm hover:shadow-emerald-500/20 transition-all duration-200 group no-underline print:bg-transparent print:border-none print:text-gray-700",title:"Open official CISCE website (cisce.org)",children:[e.jsxs("span",{children:["🏛️ Source: ",n.source]}),e.jsxs("span",{className:"inline-flex items-center text-[11px] underline decoration-emerald-500/50 group-hover:decoration-emerald-300 text-emerald-300 font-semibold gap-1 ml-0.5",children:["Visit CISCE",e.jsx("svg",{className:"w-3.5 h-3.5 text-emerald-400 group-hover:text-emerald-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform no-print",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"})})]})]}):e.jsx("div",{className:"mt-2.5 inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-950/60 border border-emerald-500/30 text-emerald-400 text-xs font-medium print:bg-transparent print:border-none print:text-gray-700",children:e.jsxs("span",{children:["🏛️ Source: ",n.source]})})})(),n.prerequisites&&e.jsx("div",{className:"mt-2 text-xs text-gray-500 print:text-gray-600 print:text-xs print:mt-1",children:e.jsxs("span",{children:["Prerequisites: ",n.prerequisites]})})]}),n.instructions&&e.jsxs("div",{className:"mb-6 p-4 bg-gray-800 rounded-lg border border-gray-700 print:bg-white print:border-black print:shadow-none print:p-3 print:mb-3",children:[e.jsx("h3",{className:"text-md font-semibold text-yellow-400 print:text-black mb-2 print:text-sm print:mb-1",children:"Instructions:"}),e.jsx("ul",{className:"list-disc pl-5 text-sm text-gray-300 print:text-black print:text-xs space-y-1 print:space-y-0.5",children:(Array.isArray(n.instructions)?n.instructions:[n.instructions]).map((r,d)=>e.jsx("li",{className:"print:text-black print:leading-tight",children:v(r)},d))})]}),(n.sections||[]).map((r,d)=>e.jsxs("div",{className:"mb-8 print:mb-4 section",children:[e.jsxs("div",{className:"mb-3 print:mb-2",children:[e.jsxs("h2",{className:"text-lg font-semibold text-white print:text-black print:text-base",children:["Section ",r.section,": ",r.type]}),e.jsxs("p",{className:"text-sm text-gray-400 print:text-gray-600 print:text-xs",children:["(",r.totalQuestions," Questions × ",r.marksPerQuestion," Marks)"]}),r.description&&e.jsx("p",{className:"text-xs text-gray-500 print:text-gray-600 print:text-xs print:mt-0.5",children:v(r.description)})]}),e.jsx("div",{className:"space-y-6 print:space-y-4",children:r.questions.map((s,t)=>{const o=`${d}-${t}`,a=T[o],m=s.answer&&U(s.answer),p=P&&!S,u=s.q&&/^\s*Question\s+\d+/i.test(s.q);return e.jsxs("div",{className:"space-y-2 print:space-y-1.5 question",children:[e.jsxs("div",{className:"flex justify-between items-start gap-4 print:flex-nowrap print:items-baseline print:gap-2",children:[e.jsx("div",{className:"text-gray-200 print:text-black flex-1 font-medium print:text-sm print:break-words",children:R(s.q,s.marks)}),e.jsxs("div",{className:"flex items-center gap-3 print:flex-shrink-0 print:ml-2 print:whitespace-nowrap",children:[!u&&e.jsxs("span",{className:"text-sm text-gray-400 print:text-gray-600 font-mono print:text-xs",children:["[",s.marks," mark",s.marks>1?"s":"","]"]}),p&&e.jsx("button",{onClick:()=>H(d,t),className:"px-2 py-1 text-xs rounded bg-blue-600 hover:bg-blue-500 text-white transition-colors no-print",children:a?"Hide Answer":"Show Answer"})]})]}),s.hint&&e.jsxs("div",{className:"text-xs text-gray-500 italic pl-4 no-print print:hidden",children:["💡 Hint: ",v(s.hint)]}),P&&(a||S)&&s.answer&&e.jsx("div",{className:`answer-content mt-3 p-4 rounded-lg border ${m?"bg-gray-850":"bg-gray-800"} print:bg-white border-gray-700 print:border-black print:p-2 print:mt-1`,children:e.jsxs("div",{className:"text-sm print:text-xs",children:[e.jsxs("div",{className:"text-emerald-400 print:text-black text-xs font-semibold mb-2 flex items-center gap-2 print:mb-1",children:[e.jsx("span",{children:"📝 Answer:"}),m&&e.jsx("span",{className:"text-blue-400 print:text-gray-600",children:"(Includes Java Code)"})]}),O(s.answer)]})})]},t)})})]},d)),e.jsxs("div",{className:"mt-8 pt-4 border-t border-gray-700 print:border-gray-300 text-center text-xs text-gray-500 print:text-gray-600 print:mt-4 print:pt-2",children:[e.jsxs("p",{children:["© ",new Date().getFullYear()," Java Question Paper - All Rights Reserved"]}),e.jsx("p",{className:"mt-1 print:mt-0.5",children:"Good Luck!"})]})]}),e.jsx("style",{jsx:!0,children:`
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
      `})]})};export{ee as J};
