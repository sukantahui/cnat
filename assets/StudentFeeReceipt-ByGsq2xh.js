import{r as m,j as e}from"./index-BHC-ARLC.js";import{c as R}from"./courses-C93V3GmA.js";const O=()=>{const j=()=>{const a=new Date,r=a.getFullYear(),n=String(a.getMonth()+1).padStart(2,"0"),s=String(a.getDate()).padStart(2,"0");return`${r}-${n}-${s}`},[t,h]=m.useState({studentName:"",phone:"",course:"",feeType:"non_monthly",monthlyFeeAmount:"",feesPaid:"",paymentDate:j(),paymentMode:"Cash",periodFrom:"",periodTo:""}),[d,k]=m.useState(null),[x,N]=m.useState(!1),[F,T]=m.useState([]);m.useEffect(()=>{T(R.courses)},[]);const P=()=>{const a="CNAT",r=new Date,n=r.getFullYear(),s=String(r.getMonth()+1).padStart(2,"0"),i=String(r.getDate()).padStart(2,"0"),u=String(r.getHours()).padStart(2,"0"),c=String(r.getMinutes()).padStart(2,"0"),l=String(r.getSeconds()).padStart(2,"0"),o=`${n}${s}${i}${u}${c}${l}`;return`${a}-${o}`},p=a=>{const{name:r,value:n}=a.target;h(s=>({...s,[r]:n}))},g=(a,r)=>{if(!a||!r)return 0;const n=new Date(a),s=new Date(r),i=(s.getFullYear()-n.getFullYear())*12+(s.getMonth()-n.getMonth())+1;return i>0?i:0},f=a=>{const r=a.target.value;h(n=>({...n,feeType:r,feesPaid:"",periodFrom:"",periodTo:"",monthlyFeeAmount:""}))},C=()=>{if(t.feeType==="monthly"){const a=g(t.periodFrom,t.periodTo),r=parseFloat(t.monthlyFeeAmount)||0,n=a*r;h(s=>({...s,feesPaid:n.toString()}))}};m.useEffect(()=>{t.feeType==="monthly"&&t.periodFrom&&t.periodTo&&t.monthlyFeeAmount&&C()},[t.periodFrom,t.periodTo,t.monthlyFeeAmount,t.feeType]);const b=a=>{if(!a||isNaN(a))return"";if(a=Math.floor(a),a===0)return"Zero Only";const r=["","One","Two","Three","Four","Five","Six","Seven","Eight","Nine"],n=["","","Twenty","Thirty","Forty","Fifty","Sixty","Seventy","Eighty","Ninety"],s=["Ten","Eleven","Twelve","Thirteen","Fourteen","Fifteen","Sixteen","Seventeen","Eighteen","Nineteen"],i=o=>o===0?"":o<10?r[o]:o<20?s[o-10]:n[Math.floor(o/10)]+(o%10?" "+r[o%10]:""),u=o=>{if(o===0)return"";if(o<100)return i(o);const I=Math.floor(o/100),w=o%100;return r[I]+" Hundred"+(w?" and "+i(w):"")};let c="",l=a;if(l>=1e7){const o=Math.floor(l/1e7);c+=i(o)+" Crore",l%=1e7,l>0&&(c+=" ")}if(l>=1e5){const o=Math.floor(l/1e5);c+=i(o)+" Lakh",l%=1e5,l>0&&(c+=" ")}if(l>=1e3){const o=Math.floor(l/1e3);c+=u(o)+" Thousand",l%=1e3,l>0&&(c+=" ")}return l>0&&(c+=u(l)),c+" Only"},S=a=>a?new Date(a).toLocaleDateString("en-IN",{day:"2-digit",month:"long",year:"numeric"}):"",y=a=>a?new Date(a).toLocaleDateString("en-IN",{month:"long",year:"numeric"}):"",v=a=>{switch(a){case"Cash":return"💵";case"Online (UPI)":return"📱";case"Online (Card)":return"💳";case"Online (Net Banking)":return"🏦";case"Cheque":return"📝";default:return"💰"}},M=a=>{if(a.preventDefault(),!t.studentName||!t.phone||!t.course||!t.paymentDate||!t.paymentMode){alert("Please fill in all required fields");return}if(t.feeType==="monthly"){if(!t.periodFrom||!t.periodTo||!t.monthlyFeeAmount){alert("Please fill in period details and monthly fee amount for monthly fee type");return}if(!t.feesPaid||parseFloat(t.feesPaid)<=0){alert("Please calculate total fees by selecting period and monthly amount");return}}else if(!t.feesPaid){alert("Please enter the total fees amount");return}let r="",n="";if(t.feeType==="monthly"&&t.periodFrom&&t.periodTo){const s=g(t.periodFrom,t.periodTo),i=parseFloat(t.monthlyFeeAmount);r=`${y(t.periodFrom)} to ${y(t.periodTo)}`,n=` (${s} months × ₹${i.toLocaleString("en-IN")} = ₹${(s*i).toLocaleString("en-IN")})`}k({studentName:t.studentName,phone:t.phone,course:t.course,feeType:t.feeType,feesPaid:t.feesPaid,monthlyFeeAmount:t.monthlyFeeAmount,paymentDate:S(t.paymentDate),paymentMode:t.paymentMode,period:r,monthlyBreakdown:n,receiptNo:P()})},A=a=>{const r=b(parseFloat(a.feesPaid)),n=parseFloat(a.feesPaid).toLocaleString("en-IN"),s=v(a.paymentMode);return`
      <!DOCTYPE html>
      <html>
        <head>
          <title>Fee Receipt - Coder & AccoTax</title>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <style>
            * {
              margin: 0;
              padding: 0;
              box-sizing: border-box;
            }
            body {
              font-family: 'Times New Roman', Times, serif;
              font-size: 13px;
              background: white;
              margin: 0;
              padding: 0;
            }
            .receipt {
              position: relative;
              width: 100%;
              background: white;
              margin: 0;
              padding: 0;
              page-break-after: avoid;
              page-break-inside: avoid;
            }
            .receipt-content {
              padding: 2mm 8mm 4mm 8mm;
              display: flex;
              flex-direction: column;
              background: white;
              position: relative;
              z-index: 1;
            }
            .stamp-container {
              position: absolute;
              top: 65%;
              left: 60%;
              transform: translate(-50%, -50%) rotate(-18deg);
              z-index: 10;
              pointer-events: none;
            }
            .rounded-stamp {
              width: 130px;
              height: 130px;
              border-radius: 50%;
              border: 2.5px solid #b30021;
              position: relative;
              background: radial-gradient(circle, rgba(179,0,33,0.08) 20%, transparent 70%);
              display: flex;
              align-items: center;
              justify-content: center;
              box-shadow: 
                0 0 0 2px rgba(179,0,33,0.3),
                inset 0 0 6px rgba(179,0,33,0.2);
            }
            .rounded-stamp::after {
              content: "";
              position: absolute;
              inset: 0;
              border-radius: 50%;
              background: url('https://www.transparenttextures.com/patterns/ink.png');
              opacity: 0.15;
              mix-blend-mode: multiply;
            }    
            .rounded-stamp::before {
              content: "";
              position: absolute;
              width: 115px;
              height: 115px;
              border-radius: 50%;
              border: 1.5px dashed rgba(179,0,33,0.5);
            }    
            .stamp-text {
              font-family: 'Times New Roman', Times, serif;
              text-align: center;
            }
            .stamp-paid {
              font-size: 24px;
              font-weight: 900;
              color: #b30021;
              letter-spacing: 3px;
              text-transform: uppercase;
              transform: rotate(-2deg);
              text-shadow: 
                1px 1px 0 rgba(0,0,0,0.1),
                0 0 4px rgba(179,0,33,0.4);
            }
            .stamp-company {
              font-size: 8px;
              color: #c41e3a;
              font-weight: 600;
              margin-top: 4px;
              text-transform: uppercase;
              letter-spacing: 1px;
            }
            .stamp-since {
              font-size: 7px;
              color: #c41e3a;
              margin-top: 2px;
              font-style: italic;
            }
            .header {
              text-align: center;
              border-bottom: 2px solid #1a3e6f;
              padding-bottom: 4px;
              margin-bottom: 6px;
              position: relative;
              z-index: 1;
              background: white;
            }
            .organisation-name {
              font-size: 24px;
              font-weight: bold;
              color: #1a3e6f;
              letter-spacing: 1px;
              margin-bottom: 2px;
              display: flex;
              align-items: center;
              justify-content: center;
              gap: 8px;
            }
            .organisation-logo {
              height: 36px;
              width: auto;
              vertical-align: middle;
            }
            .organisation-tagline {
              font-size: 9px;
              color: #4a5568;
              margin-top: 2px;
              font-style: italic;
            }
            .address {
              font-size: 8px;
              color: #4a5568;
              margin-top: 3px;
              line-height: 1.2;
            }
            .contact-row {
              display: flex;
              justify-content: center;
              gap: 12px;
              font-size: 8px;
              color: #4a5568;
              margin-top: 3px;
              flex-wrap: wrap;
            }
            .receipt-title {
              font-size: 16px;
              font-weight: bold;
              color: #2d3748;
              margin-top: 4px;
              text-transform: uppercase;
              letter-spacing: 1px;
              background: #f0f4f8;
              display: inline-block;
              padding: 2px 16px;
              border-radius: 20px;
            }
            .info-row {
              display: flex;
              justify-content: space-between;
              margin: 6px 0;
              padding: 4px 0;
              border-bottom: 1px dashed #cbd5e0;
              position: relative;
              z-index: 1;
              background: white;
            }
            .info-box {
              background: #f7fafc;
              padding: 3px 10px;
              border-radius: 4px;
              border: 1px solid #e2e8f0;
            }
            .info-label {
              font-size: 10px;
              font-weight: 600;
              color: #4a5568;
              text-transform: uppercase;
              letter-spacing: 0.5px;
            }
            .info-value {
              font-size: 13px;
              font-weight: bold;
              color: #2d3748;
              margin-top: 1px;
            }
            .details-section {
              margin-bottom: 8px;
              position: relative;
              z-index: 1;
              background: white;
            }
            .section-title {
              font-size: 11px;
              font-weight: bold;
              color: #1a3e6f;
              border-left: 3px solid #1a3e6f;
              padding-left: 6px;
              margin-bottom: 6px;
              text-transform: uppercase;
            }
            .details-table {
              width: 100%;
              border-collapse: collapse;
            }
            .details-table tr {
              border-bottom: 1px solid #e2e8f0;
            }
            .details-table td {
              padding: 4px 5px;
              font-size: 10px;
            }
            .details-table td:first-child {
              font-weight: 600;
              color: #4a5568;
              width: 35%;
            }
            .details-table td:last-child {
              color: #2d3748;
              font-weight: 500;
            }
            .fee-section {
              background: #f7fafc;
              padding: 8px 10px;
              margin: 6px 0;
              border-radius: 6px;
              border: 1px solid #e2e8f0;
              position: relative;
              z-index: 1;
            }
            .fee-row {
              display: flex;
              justify-content: space-between;
              padding: 4px 0;
            }
            .fee-label {
              font-weight: bold;
              font-size: 11px;
              color: #4a5568;
            }
            .fee-amount {
              font-weight: bold;
              font-size: 15px;
              color: #2f855a;
            }
            .fee-breakdown {
              font-size: 8px;
              color: #718096;
              margin-top: 2px;
              font-style: italic;
            }
            .amount-words {
              font-size: 8px;
              color: #718096;
              margin-top: 4px;
              padding-top: 4px;
              border-top: 1px dashed #cbd5e0;
              font-style: italic;
            }
            .footer {
              margin-top: auto;
              text-align: center;
              border-top: 1px solid #e2e8f0;
              padding-top: 6px;
              position: relative;
              z-index: 1;
              background: white;
            }
            .signature-area {
              display: flex;
              justify-content: space-between;
              margin: 8px 0 4px 0;
            }
            .signature-line {
              text-align: center;
              width: 45%;
            }
            .signature-line p:first-child {
              font-size: 8px;
              color: #718096;
              margin-bottom: 10px;
            }
            .signature-line p:last-child {
              font-size: 8px;
              font-weight: 600;
              color: #4a5568;
              border-top: 1px solid #cbd5e0;
              padding-top: 3px;
              display: inline-block;
              min-width: 90px;
            }
            .footer-note {
              font-size: 7px;
              color: #a0aec0;
              margin-top: 4px;
              line-height: 1.3;
            }
            .thankyou {
              font-size: 9px;
              font-weight: bold;
              color: #1a3e6f;
              margin-top: 4px;
            }
            @media print {
              body {
                margin: 0;
                padding: 0;
              }
              .receipt {
                margin: 0;
                padding: 0;
                width: 100%;
                height: auto;
              }
              .receipt-content {
                padding: 2mm 8mm 4mm 8mm;
              }
              .rounded-stamp {
                -webkit-print-color-adjust: exact;
                print-color-adjust: exact;
              }
              @page {
                size: A4;
                margin: 0mm;
              }
            }
            @media (max-width: 768px) {
              .receipt-content {
                padding: 10px;
              }
              .organisation-name {
                font-size: 18px;
              }
              .organisation-logo {
                height: 28px;
              }
              .info-row {
                flex-direction: column;
                gap: 8px;
              }
              .info-box {
                width: 100%;
              }
            }
          </style>
        </head>
        <body>
          <div class="receipt">
            <div class="stamp-container">
              <div class="rounded-stamp">
                <div class="stamp-text">
                  <div class="stamp-paid">PAID</div>
                  <div class="stamp-company">Coder & AccoTax</div>
                  <div class="stamp-since">Since 1997</div>
                </div>
              </div>
            </div>
            <div class="receipt-content">
              <div class="header">
                <div class="organisation-name">
                  <img src="/assets/cnat.png" alt="Coder & AccoTax Logo" class="organisation-logo" />
                  <span>CODER & ACCOTAX</span>
                </div>
                <div class="organisation-tagline">Quality Education | Professional Training | Tax Solutions</div>
                <div class="address">
                  25(10/A) Shibtala Road, PO-N C Pukur, Barrackpore, Kolkata-700122
                </div>
                <div class="contact-row">
                  <span>📞 +91 70037 56860</span>
                  <span>🌐 codernaccotax.co.in</span>
                  <span>✉️ info@codernaccotax.co.in</span>
                </div>
                <div>
                  <span class="receipt-title">Fee Payment Receipt</span>
                </div>
              </div>
              <div class="info-row">
                <div class="info-box">
                  <div class="info-label">Receipt No.</div>
                  <div class="info-value">${a.receiptNo}</div>
                </div>
                <div class="info-box">
                  <div class="info-label">Payment Date</div>
                  <div class="info-value">${a.paymentDate}</div>
                </div>
                <div class="info-box">
                  <div class="info-label">Payment Mode</div>
                  <div class="info-value">${s} ${a.paymentMode}</div>
                </div>
              </div>
              <div class="details-section">
                <div class="section-title">Student Information</div>
                <table class="details-table">
                  <tr>
                    <td>Student Name</td>
                    <td><strong>${a.studentName}</strong></td>
                    <td>Phone Number</td>
                    <td>${a.phone}</td>
                  </tr>
                  ${a.period?`
                  <tr>
                    <td>Course Period</td>
                    <td colspan="3"><strong>${a.period}</strong></td>
                  </tr>
                  `:""}
                  <tr>
                    <td>Course Enrolled</td>
                    <td><strong>${a.course}</strong></td>
                  </tr>
                </table>
              </div>
              <div class="fee-section">
                <div class="fee-row">
                  <span class="fee-label">Course Fees</span>
                  <span class="fee-amount">₹ ${n}/-</span>
                </div>
                ${a.monthlyBreakdown?`
                <div class="fee-breakdown">
                  ${a.monthlyBreakdown}
                </div>
                `:""}
                <div class="fee-row">
                  <span class="fee-label">Payment Status</span>
                  <span style="color: #2f855a; font-weight: bold;">✓ PAID IN FULL</span>
                </div>
                <div class="amount-words">
                  Amount in words: Rupees ${r}
                </div>
              </div>
              <div class="footer">
                <div class="signature-area">
                  <div class="signature-line">
                    <p>Student's Signature</p>
                    <p>(Student)</p>
                  </div>
                  <div class="signature-line">
                    <p>Authorized Signatory</p>
                    <p>(Coder & AccoTax)</p>
                  </div>
                </div>
                <div class="footer-note">
                  This is a computer generated receipt - Valid without signature<br>
                  For any queries, please contact our support team | Office Hours: 10 AM - 7 PM (Mon-Sat)
                </div>
                <div class="thankyou">
                  ✨ Thank you for choosing Coder & AccoTax! ✨
                </div>
              </div>
            </div>
          </div>
          <script>
            if (window.matchMedia('print').matches) {
              // Already in print mode
              setTimeout(() => {
                window.print();
              }, 100);
            } else {
              // Not in print mode, trigger print and close
              window.onload = function() {
                setTimeout(function() {
                  window.print();
                  window.onafterprint = function() {
                    window.close();
                  };
                }, 300);
              };
            }
          <\/script>
        </body>
      </html>
    `},z=()=>{if(!d){alert("Please generate a receipt first");return}const a=A(d),r=document.createElement("iframe");r.style.position="absolute",r.style.width="0px",r.style.height="0px",r.style.border="none",document.body.appendChild(r);const n=r.contentWindow.document;n.open(),n.write(a),n.close(),r.contentWindow.focus(),setTimeout(()=>{try{r.contentWindow.print();const s=setInterval(()=>{r.contentWindow.document.hasFocus()||setTimeout(()=>{document.body.removeChild(r),clearInterval(s)},500)},500);setTimeout(()=>{document.body.contains(r)&&document.body.removeChild(r)},3e4)}catch(s){console.error("Print failed:",s),document.body.removeChild(r);const i=window.open("","_blank","width=800,height=600");i?(i.document.write(a),i.document.close(),i.focus(),i.print(),i.onafterprint=()=>i.close()):alert("Please allow pop-ups to print the receipt. You can also use the browser's print option (Ctrl+P or Cmd+P)")}},100)};m.useEffect(()=>{x?document.documentElement.classList.add("dark"):document.documentElement.classList.remove("dark")},[x]);const $=d?b(parseFloat(d.feesPaid)):"",D=d?v(d.paymentMode):"";return e.jsxs("div",{className:"min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 transition-colors duration-300 p-4",children:[e.jsx("div",{className:"flex justify-end mb-4 max-w-6xl mx-auto",children:e.jsx("button",{onClick:()=>N(!x),className:"flex items-center gap-2 px-4 py-2 rounded-full bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-200 shadow-md hover:shadow-lg transition border border-gray-200 dark:border-gray-600 text-sm",children:x?e.jsxs(e.Fragment,{children:[e.jsx("span",{children:"☀️"})," Light Mode"]}):e.jsxs(e.Fragment,{children:[e.jsx("span",{children:"🌙"})," Dark Mode"]})})}),e.jsxs("div",{className:"max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-6",children:[e.jsxs("div",{className:"bg-white dark:bg-gray-800 rounded-2xl shadow-xl overflow-hidden",children:[e.jsxs("div",{className:"bg-gradient-to-r from-blue-600 to-blue-700 px-6 py-3",children:[e.jsxs("h2",{className:"text-lg font-bold text-white flex items-center gap-2",children:[e.jsx("span",{children:"📝"})," Student Fee Payment Form"]}),e.jsx("p",{className:"text-blue-100 text-xs mt-1",children:"Enter payment details to generate receipt"})]}),e.jsxs("form",{onSubmit:M,className:"p-5 space-y-4",children:[e.jsxs("div",{children:[e.jsx("label",{className:"block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-1",children:"Student Full Name *"}),e.jsx("input",{type:"text",name:"studentName",value:t.studentName,onChange:p,className:"w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-white transition",placeholder:"Enter student name",required:!0})]}),e.jsxs("div",{children:[e.jsx("label",{className:"block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-1",children:"Phone Number *"}),e.jsx("input",{type:"tel",name:"phone",value:t.phone,onChange:p,className:"w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-white transition",placeholder:"10-digit mobile number",required:!0})]}),e.jsxs("div",{children:[e.jsx("label",{className:"block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-1",children:"Course Name *"}),e.jsxs("select",{name:"course",value:t.course,onChange:p,className:"w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-white transition cursor-pointer",required:!0,children:[e.jsx("option",{value:"",children:"Select a course"}),F.map(a=>e.jsx("option",{value:a.name,children:a.name},a.id))]})]}),e.jsxs("div",{children:[e.jsx("label",{className:"block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-1",children:"Fee Type *"}),e.jsxs("div",{className:"grid grid-cols-2 gap-3",children:[e.jsx("button",{type:"button",onClick:f,value:"non_monthly",className:`px-4 py-2 rounded-lg font-semibold transition ${t.feeType==="non_monthly"?"bg-blue-600 text-white":"bg-gray-200 dark:bg-gray-600 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-500"}`,children:"One-time / Fixed Fee"}),e.jsx("button",{type:"button",onClick:f,value:"monthly",className:`px-4 py-2 rounded-lg font-semibold transition ${t.feeType==="monthly"?"bg-blue-600 text-white":"bg-gray-200 dark:bg-gray-600 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-500"}`,children:"Monthly Fee"})]})]}),t.feeType==="monthly"?e.jsxs(e.Fragment,{children:[e.jsxs("div",{children:[e.jsx("label",{className:"block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-1",children:"Monthly Fee Amount (₹) *"}),e.jsx("input",{type:"number",name:"monthlyFeeAmount",value:t.monthlyFeeAmount,onChange:p,className:"w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-white transition",placeholder:"Enter monthly fee amount",required:!0})]}),e.jsxs("div",{children:[e.jsx("label",{className:"block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-1",children:"Course Period (Monthly) *"}),e.jsxs("div",{className:"grid grid-cols-2 gap-3",children:[e.jsxs("div",{children:[e.jsx("label",{className:"block text-xs text-gray-500 dark:text-gray-400 mb-1",children:"From"}),e.jsx("input",{type:"month",name:"periodFrom",value:t.periodFrom,onChange:p,className:"w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-white transition text-sm",required:!0})]}),e.jsxs("div",{children:[e.jsx("label",{className:"block text-xs text-gray-500 dark:text-gray-400 mb-1",children:"To"}),e.jsx("input",{type:"month",name:"periodTo",value:t.periodTo,onChange:p,className:"w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-white transition text-sm",required:!0})]})]}),t.periodFrom&&t.periodTo&&t.monthlyFeeAmount&&e.jsx("div",{className:"mt-2 p-2 bg-blue-50 dark:bg-blue-900/20 rounded-lg",children:e.jsxs("p",{className:"text-xs text-gray-600 dark:text-gray-300",children:["Total Months: ",e.jsx("strong",{children:g(t.periodFrom,t.periodTo)})," | Total Fees: ",e.jsxs("strong",{children:["₹ ",(g(t.periodFrom,t.periodTo)*(parseFloat(t.monthlyFeeAmount)||0)).toLocaleString("en-IN")]})]})})]})]}):e.jsxs("div",{children:[e.jsx("label",{className:"block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-1",children:"Total Fees Amount (₹) *"}),e.jsx("input",{type:"number",name:"feesPaid",value:t.feesPaid,onChange:p,className:"w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-white transition",placeholder:"Enter total fees amount",required:!0})]}),e.jsxs("div",{children:[e.jsx("label",{className:"block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-1",children:"Payment Date *"}),e.jsx("input",{type:"date",name:"paymentDate",value:t.paymentDate,onChange:p,className:"w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-white transition",required:!0})]}),e.jsxs("div",{children:[e.jsx("label",{className:"block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-1",children:"Payment Mode *"}),e.jsxs("select",{name:"paymentMode",value:t.paymentMode,onChange:p,className:"w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-white transition cursor-pointer",required:!0,children:[e.jsx("option",{value:"Cash",children:"💵 Cash"}),e.jsx("option",{value:"Online (UPI)",children:"📱 Online (UPI)"}),e.jsx("option",{value:"Online (Card)",children:"💳 Online (Card)"}),e.jsx("option",{value:"Online (Net Banking)",children:"🏦 Online (Net Banking)"}),e.jsx("option",{value:"Cheque",children:"📝 Cheque"})]})]}),e.jsx("button",{type:"submit",className:"w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-semibold py-2.5 rounded-lg transition duration-200 shadow-md hover:shadow-lg",children:"Generate Receipt →"})]})]}),e.jsxs("div",{className:"bg-white dark:bg-gray-800 rounded-2xl shadow-xl overflow-hidden flex flex-col",children:[e.jsxs("div",{className:"bg-gradient-to-r from-green-600 to-green-700 px-6 py-3 flex justify-between items-center",children:[e.jsxs("div",{children:[e.jsxs("h2",{className:"text-lg font-bold text-white flex items-center gap-2",children:[e.jsx("span",{children:"🧾"})," Receipt Preview"]}),e.jsx("p",{className:"text-green-100 text-xs mt-1",children:"Review before printing"})]}),d&&e.jsx("button",{onClick:z,className:"flex items-center gap-2 bg-white text-green-700 px-4 py-1.5 rounded-lg text-sm font-semibold shadow hover:shadow-lg transition",children:"🖨️ Print Receipt"})]}),e.jsx("div",{className:"p-5 flex-1 flex items-center justify-center",children:d?e.jsxs("div",{className:"w-full max-w-md mx-auto bg-white dark:bg-gray-800 rounded-xl border-2 border-gray-200 dark:border-gray-700 shadow-lg overflow-hidden relative",children:[e.jsx("div",{className:"absolute inset-0 flex items-center justify-center pointer-events-none opacity-30",children:e.jsxs("div",{className:"w-32 h-32 rounded-full border-2 border-red-600 flex flex-col items-center justify-center transform -rotate-12",children:[e.jsx("div",{className:"text-lg font-bold text-red-600",children:"PAID"}),e.jsx("div",{className:"text-[8px] text-red-600 text-center px-2",children:"Coder & AccoTax"}),e.jsx("div",{className:"text-[7px] text-red-600",children:"Since 1997"})]})}),e.jsxs("div",{className:"p-4 space-y-2 relative z-10",children:[e.jsxs("div",{className:"text-center border-b pb-2",children:[e.jsx("h3",{className:"text-base font-bold text-blue-700 dark:text-blue-400",children:"Coder & AccoTax"}),e.jsx("p",{className:"text-[10px] text-gray-500",children:"Fee Payment Receipt"})]}),e.jsxs("div",{className:"space-y-1.5 text-xs",children:[e.jsxs("div",{className:"flex justify-between",children:[e.jsx("span",{className:"font-semibold",children:"Receipt No:"}),e.jsx("span",{className:"text-gray-600 dark:text-gray-300",children:d.receiptNo})]}),e.jsxs("div",{className:"flex justify-between",children:[e.jsx("span",{className:"font-semibold",children:"Payment Date:"}),e.jsx("span",{className:"text-gray-600 dark:text-gray-300",children:d.paymentDate})]}),e.jsxs("div",{className:"flex justify-between",children:[e.jsx("span",{className:"font-semibold",children:"Payment Mode:"}),e.jsxs("span",{className:"text-gray-600 dark:text-gray-300",children:[D," ",d.paymentMode]})]}),e.jsxs("div",{className:"flex justify-between",children:[e.jsx("span",{className:"font-semibold",children:"Student:"}),e.jsx("span",{className:"text-gray-800 dark:text-white font-medium",children:d.studentName})]}),e.jsxs("div",{className:"flex justify-between",children:[e.jsx("span",{className:"font-semibold",children:"Phone:"}),e.jsx("span",{className:"text-gray-600 dark:text-gray-300",children:d.phone})]}),e.jsxs("div",{className:"flex justify-between",children:[e.jsx("span",{className:"font-semibold",children:"Course:"}),e.jsx("span",{className:"text-gray-600 dark:text-gray-300",children:d.course})]}),d.period&&e.jsxs("div",{className:"flex justify-between",children:[e.jsx("span",{className:"font-semibold",children:"Period:"}),e.jsx("span",{className:"text-gray-600 dark:text-gray-300",children:d.period})]}),e.jsxs("div",{className:"flex justify-between pt-2 border-t mt-1",children:[e.jsx("span",{className:"font-bold",children:"Amount Paid:"}),e.jsxs("span",{className:"font-bold text-green-600 text-sm",children:["₹ ",parseFloat(d.feesPaid).toLocaleString("en-IN")]})]}),d.monthlyBreakdown&&e.jsx("div",{className:"text-[8px] text-gray-500 italic",children:d.monthlyBreakdown}),e.jsxs("div",{className:"pt-1 pb-1",children:[e.jsx("span",{className:"font-semibold text-[10px] text-gray-500",children:"Amount in words:"}),e.jsx("p",{className:"text-[9px] text-gray-600 dark:text-gray-400 italic",children:$})]})]}),e.jsxs("div",{className:"text-center pt-2 border-t",children:[e.jsx("p",{className:"text-[9px] text-gray-400",children:"✓ Ready to print on half A4 sheet (no top margin)"}),e.jsx("p",{className:"text-[8px] text-gray-400 mt-1",children:"25(10/A) Shibtala Road, Barrackpore, Kol-122"})]})]})]}):e.jsxs("div",{className:"flex flex-col items-center justify-center text-center p-6",children:[e.jsx("div",{className:"w-20 h-20 bg-gray-100 dark:bg-gray-700 rounded-full flex items-center justify-center mb-3",children:e.jsx("svg",{className:"w-10 h-10 text-gray-400",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:1.5,d:"M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"})})}),e.jsx("p",{className:"text-gray-500 dark:text-gray-400 font-medium text-sm",children:"No receipt generated yet"}),e.jsx("p",{className:"text-xs text-gray-400 mt-1",children:'Fill the form and click "Generate Receipt"'})]})})]})]})]})};export{O as default};
