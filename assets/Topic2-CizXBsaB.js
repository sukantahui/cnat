import{r as x,j as e}from"./index-COd1BgDP.js";import{q as y}from"./question-DhJqyITL.js";const w="/og-banner.png",M=n=>{if(!n)return[];if(Array.isArray(n))return n.map((t,d)=>({id:d,text:t.text||t.questionText||t.q||"Question not available",maxMarks:t.maxMarks||t.marks||0}));if(n.sections){let t=[];return n.sections.forEach(d=>{d.questions?.forEach(o=>{t.push({text:o.q||"Question not available",maxMarks:o.marks||0})})}),t}return[]},S=({questions:n,examData:t,paperTitle:d="Java Arrays – Practice Paper",organizationName:o="Coder & AccoTax"})=>{const i=M(n||t),m=i.reduce((s,a)=>s+a.maxMarks,0),[h,N]=x.useState(""),[c,p]=x.useState(i.map(()=>0)),[b,u]=x.useState(!1),k=(s,a)=>{let l=parseFloat(a);isNaN(l)&&(l=0),l=Math.min(Math.max(l,0),i[s].maxMarks);const g=[...c];g[s]=l,p(g)},f=s=>{const a=[...c];a[s]=i[s].maxMarks,p(a)},j=c.reduce((s,a)=>s+a,0),r=m?(j/m*100).toFixed(1):0,v=r>=90?"A+":r>=80?"A":r>=70?"B+":r>=60?"B":r>=50?"C":r>=40?"D":"F";return e.jsxs("div",{className:"min-h-screen bg-gray-900 p-6 flex justify-center items-start",children:[e.jsxs("div",{className:"w-full max-w-6xl bg-white rounded-xl shadow-xl overflow-hidden",children:[!b&&e.jsxs("div",{className:"p-6 bg-gray-900 text-white",children:[e.jsx("h2",{className:"text-2xl mb-4 font-bold",children:"Student Mark Entry"}),e.jsx("input",{type:"text",placeholder:"Enter Student Name",value:h,onChange:s=>N(s.target.value),className:"w-full p-3 mb-6 bg-gray-800 rounded-lg"}),e.jsx("div",{className:"space-y-4 max-h-[400px] overflow-y-auto pr-2",children:i.map((s,a)=>e.jsx("div",{className:"bg-gray-800 p-4 rounded-lg",children:e.jsxs("div",{className:"flex justify-between items-start gap-4",children:[e.jsxs("div",{children:[e.jsxs("p",{className:"text-purple-400 font-semibold",children:["Q",a+1]}),e.jsx("p",{className:"text-sm mt-1",children:s.text})]}),e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx("input",{type:"number",value:c[a],max:s.maxMarks,onChange:l=>k(a,l.target.value),className:"w-20 p-1 text-center bg-gray-700 rounded"}),e.jsx("button",{onClick:()=>f(a),className:"bg-green-600 px-2 py-1 text-xs rounded",children:"Full"}),e.jsxs("span",{children:["/ ",s.maxMarks]})]})]})},a))}),e.jsx("button",{onClick:()=>u(!0),className:"mt-6 px-6 py-2 bg-purple-600 rounded-lg",children:"Generate Marksheet"})]}),b&&e.jsx("div",{className:"print-marksheet",children:e.jsxs("div",{className:"a4-page text-black",children:[e.jsxs("div",{className:"text-center border-b pb-2 mb-2",children:[e.jsx("img",{src:w,className:"mx-auto h-10 mb-1"}),e.jsx("h2",{className:"text-lg font-bold",children:o}),e.jsx("p",{className:"text-xs",children:d})]}),e.jsxs("div",{className:"border p-2 mb-3 text-xs",children:[e.jsxs("p",{children:[e.jsx("b",{children:"Name:"})," ",h]}),e.jsxs("p",{children:[e.jsx("b",{children:"Total Marks:"})," ",m]})]}),e.jsxs("table",{className:"w-full text-xs border-collapse",children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{className:"border p-1",children:"Q.No"}),e.jsx("th",{className:"border p-1",children:"Question"}),e.jsx("th",{className:"border p-1",children:"Max"}),e.jsx("th",{className:"border p-1",children:"Obtained"})]})}),e.jsxs("tbody",{children:[i.map((s,a)=>e.jsxs("tr",{children:[e.jsx("td",{className:"border p-1",children:a+1}),e.jsx("td",{className:"border p-1",children:s.text}),e.jsx("td",{className:"border p-1",children:s.maxMarks}),e.jsx("td",{className:"border p-1",children:c[a]})]},a)),e.jsxs("tr",{className:"font-bold",children:[e.jsx("td",{colSpan:"2",className:"border p-1 text-right",children:"TOTAL"}),e.jsx("td",{className:"border p-1",children:m}),e.jsx("td",{className:"border p-1",children:j})]})]})]}),e.jsxs("div",{className:"mt-3 border p-2 text-xs flex justify-between",children:[e.jsxs("span",{children:["Percentage: ",r,"%"]}),e.jsxs("span",{children:["Grade: ",v]}),e.jsxs("span",{children:["Result: ",r>=40?"PASS":"FAIL"]})]}),e.jsxs("div",{className:"mt-3 no-print",children:[e.jsx("button",{onClick:()=>window.print(),className:"mr-4 text-blue-600",children:"Print"}),e.jsx("button",{onClick:()=>u(!1),className:"text-red-600",children:"Back"})]})]})})]}),e.jsx("style",{children:`
        .a4-page {
          width: 210mm;
          min-height: 297mm;
          margin: auto;
          padding: 10mm;
          background: white;
          box-sizing: border-box;
        }

        @media print {

          @page {
            size: A4;
            margin: 0;
          }

          html, body {
            margin: 0;
            padding: 0;
            height: auto !important;
          }

          body * {
            visibility: hidden;
          }

          .print-marksheet,
          .print-marksheet * {
            visibility: visible;
          }

          .print-marksheet {
            position: absolute;
            top: 0 !important;
            left: 0;
            width: 210mm;
          }

          .a4-page {
            width: 210mm;
            height: 297mm;
            margin: 0 !important;
            padding: 10mm 10mm 5mm 10mm;
          }

          .no-print {
            display: none !important;
          }

          table {
            width: 100%;
            border-collapse: collapse;
          }

          th, td {
            border: 1px solid black;
            padding: 4px;
          }

          * {
            -webkit-print-color-adjust: exact;
            print-color-adjust: exact;
          }
        }
      `})]})},P=()=>e.jsx("div",{className:"container mx-auto py-8",children:e.jsx(S,{questions:y,paperTitle:"Java Arrays – Practice Paper (Class X)"})});export{P as default};
