import{b as x,j as e}from"./vendor-react-core-Doz9nIC6.js";const y="/og-banner.png",w=n=>{if(!n)return[];if(Array.isArray(n))return n.map((a,i)=>({id:i,text:a.text||a.questionText||a.q||"Question not available",maxMarks:a.maxMarks||a.marks||0}));if(n.sections){let a=[];return n.sections.forEach(i=>{i.questions?.forEach(o=>{a.push({text:o.q||"Question not available",maxMarks:o.marks||0})})}),a}return[]},S=({questions:n,examData:a,paperTitle:i="Java Arrays – Practice Paper",organizationName:o="Coder & AccoTax"})=>{const d=w(n||a),m=d.reduce((s,t)=>s+t.maxMarks,0),[h,N]=x.useState(""),[c,p]=x.useState(d.map(()=>0)),[b,j]=x.useState(!1),k=(s,t)=>{let l=parseFloat(t);isNaN(l)&&(l=0),l=Math.min(Math.max(l,0),d[s].maxMarks);const g=[...c];g[s]=l,p(g)},f=s=>{const t=[...c];t[s]=d[s].maxMarks,p(t)},u=c.reduce((s,t)=>s+t,0),r=m?(u/m*100).toFixed(1):0,v=r>=90?"A+":r>=80?"A":r>=70?"B+":r>=60?"B":r>=50?"C":r>=40?"D":"F";return e.jsxs("div",{className:"min-h-screen bg-gray-900 p-6 flex justify-center items-start",children:[e.jsxs("div",{className:"w-full max-w-6xl bg-white rounded-xl shadow-xl overflow-hidden",children:[!b&&e.jsxs("div",{className:"p-6 bg-gray-900 text-white",children:[e.jsx("h2",{className:"text-2xl mb-4 font-bold",children:"Student Mark Entry"}),e.jsx("input",{type:"text",placeholder:"Enter Student Name",value:h,onChange:s=>N(s.target.value),className:"w-full p-3 mb-6 bg-gray-800 rounded-lg"}),e.jsx("div",{className:"space-y-4 max-h-[400px] overflow-y-auto pr-2",children:d.map((s,t)=>e.jsx("div",{className:"bg-gray-800 p-4 rounded-lg",children:e.jsxs("div",{className:"flex justify-between items-start gap-4",children:[e.jsxs("div",{children:[e.jsxs("p",{className:"text-purple-400 font-semibold",children:["Q",t+1]}),e.jsx("p",{className:"text-sm mt-1",children:s.text})]}),e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx("input",{type:"number",value:c[t],max:s.maxMarks,onChange:l=>k(t,l.target.value),className:"w-20 p-1 text-center bg-gray-700 rounded"}),e.jsx("button",{onClick:()=>f(t),className:"bg-green-600 px-2 py-1 text-xs rounded",children:"Full"}),e.jsxs("span",{children:["/ ",s.maxMarks]})]})]})},t))}),e.jsx("button",{onClick:()=>j(!0),className:"mt-6 px-6 py-2 bg-purple-600 rounded-lg",children:"Generate Marksheet"})]}),b&&e.jsx("div",{className:"print-marksheet",children:e.jsxs("div",{className:"a4-page text-black",children:[e.jsxs("div",{className:"text-center border-b pb-2 mb-2",children:[e.jsx("img",{src:y,className:"mx-auto h-10 mb-1"}),e.jsx("h2",{className:"text-lg font-bold",children:o}),e.jsx("p",{className:"text-xs",children:i})]}),e.jsxs("div",{className:"border p-2 mb-3 text-xs",children:[e.jsxs("p",{children:[e.jsx("b",{children:"Name:"})," ",h]}),e.jsxs("p",{children:[e.jsx("b",{children:"Total Marks:"})," ",m]})]}),e.jsxs("table",{className:"w-full text-xs border-collapse",children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{className:"border p-1",children:"Q.No"}),e.jsx("th",{className:"border p-1",children:"Question"}),e.jsx("th",{className:"border p-1",children:"Max"}),e.jsx("th",{className:"border p-1",children:"Obtained"})]})}),e.jsxs("tbody",{children:[d.map((s,t)=>e.jsxs("tr",{children:[e.jsx("td",{className:"border p-1",children:t+1}),e.jsx("td",{className:"border p-1",children:s.text}),e.jsx("td",{className:"border p-1",children:s.maxMarks}),e.jsx("td",{className:"border p-1",children:c[t]})]},t)),e.jsxs("tr",{className:"font-bold",children:[e.jsx("td",{colSpan:"2",className:"border p-1 text-right",children:"TOTAL"}),e.jsx("td",{className:"border p-1",children:m}),e.jsx("td",{className:"border p-1",children:u})]})]})]}),e.jsxs("div",{className:"mt-3 border p-2 text-xs flex justify-between",children:[e.jsxs("span",{children:["Percentage: ",r,"%"]}),e.jsxs("span",{children:["Grade: ",v]}),e.jsxs("span",{children:["Result: ",r>=40?"PASS":"FAIL"]})]}),e.jsxs("div",{className:"mt-3 no-print",children:[e.jsx("button",{onClick:()=>window.print(),className:"mr-4 text-blue-600",children:"Print"}),e.jsx("button",{onClick:()=>j(!1),className:"text-red-600",children:"Back"})]})]})})]}),e.jsx("style",{children:`
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
      `})]})};export{S};
