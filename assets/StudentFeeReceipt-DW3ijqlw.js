import{r as m,j as e,y as P,z as F,D as oe,E as re}from"./index-DdIeXD-l.js";import{c as ne}from"./courses-C9iQVG4E.js";const le=()=>{const M=()=>{const o=new Date,a=o.getFullYear(),n=String(o.getMonth()+1).padStart(2,"0"),i=String(o.getDate()).padStart(2,"0");return`${a}-${n}-${i}`},[t,w]=m.useState({studentName:"",phone:"",course:"",feeType:"non_monthly",monthlyFeeAmount:"",feesPaid:"",paymentDate:M(),paymentMode:"Cash",periodFrom:"",periodTo:""}),[r,q]=m.useState(null),[h,z]=m.useState(!1),[E,U]=m.useState([]),[j,f]=m.useState(!1),[S,T]=m.useState(!1),C=m.useRef(null),[L,W]=m.useState(""),[O,_]=m.useState("");m.useEffect(()=>{U(ne.courses),(async()=>{try{const n=await(await fetch(P)).blob(),i=new FileReader;i.onloadend=()=>{W(i.result)},i.readAsDataURL(n);const p=await(await fetch(F)).blob(),d=new FileReader;d.onloadend=()=>{_(d.result)},d.readAsDataURL(p)}catch(a){console.error("Error loading images:",a)}})()},[]);const B=(o,a,n,i)=>{const l="CNAT",p=`${o.trim()}_${a}_${n}_${i}`,c=(I=>{let u=0;for(let k=0;k<I.length;k++){const ae=I.charCodeAt(k);u=(u<<5)-u+ae,u=u&u}return Math.abs(u).toString(36).toUpperCase()})(p),s=new Date,b=s.getFullYear(),x=String(s.getMonth()+1).padStart(2,"0"),v=String(s.getDate()).padStart(2,"0"),ee=`${b}${x}${v}`,te=c.substring(0,8);return`${l}-${ee}-${te}`},g=o=>{const{name:a,value:n}=o.target;w(i=>({...i,[a]:n}))},y=(o,a)=>{if(!o||!a)return 0;const n=new Date(o),i=new Date(a),l=(i.getFullYear()-n.getFullYear())*12+(i.getMonth()-n.getMonth())+1;return l>0?l:0},A=o=>{const a=o.target.value;w(n=>({...n,feeType:a,feesPaid:"",periodFrom:"",periodTo:"",monthlyFeeAmount:""}))},G=()=>{if(t.feeType==="monthly"){const o=y(t.periodFrom,t.periodTo),a=parseFloat(t.monthlyFeeAmount)||0,n=o*a;w(i=>({...i,feesPaid:n.toString()}))}};m.useEffect(()=>{t.feeType==="monthly"&&t.periodFrom&&t.periodTo&&t.monthlyFeeAmount&&G()},[t.periodFrom,t.periodTo,t.monthlyFeeAmount,t.feeType]);const D=o=>{if(!o||isNaN(o))return"";if(o=Math.floor(o),o===0)return"Zero Only";const a=["","One","Two","Three","Four","Five","Six","Seven","Eight","Nine"],n=["","","Twenty","Thirty","Forty","Fifty","Sixty","Seventy","Eighty","Ninety"],i=["Ten","Eleven","Twelve","Thirteen","Fourteen","Fifteen","Sixteen","Seventeen","Eighteen","Nineteen"],l=s=>s===0?"":s<10?a[s]:s<20?i[s-10]:n[Math.floor(s/10)]+(s%10?" "+a[s%10]:""),p=s=>{if(s===0)return"";if(s<100)return l(s);const b=Math.floor(s/100),x=s%100;return a[b]+" Hundred"+(x?" and "+l(x):"")};let d="",c=o;if(c>=1e7){const s=Math.floor(c/1e7);d+=l(s)+" Crore",c%=1e7,c>0&&(d+=" ")}if(c>=1e5){const s=Math.floor(c/1e5);d+=l(s)+" Lakh",c%=1e5,c>0&&(d+=" ")}if(c>=1e3){const s=Math.floor(c/1e3);d+=p(s)+" Thousand",c%=1e3,c>0&&(d+=" ")}return c>0&&(d+=p(c)),d+" Only"},V=o=>o?new Date(o).toLocaleDateString("en-IN",{day:"2-digit",month:"long",year:"numeric"}):"",$=o=>o?new Date(o).toLocaleDateString("en-IN",{month:"long",year:"numeric"}):"",R=o=>{switch(o){case"Cash":return"💵";case"Online (UPI)":return"📱";case"Online (Card)":return"💳";case"Online (Net Banking)":return"🏦";case"Cheque":return"📝";default:return"💰"}},N=async(o="jpeg")=>{const a=C.current;if(!a)throw new Error("Receipt element not found");const n={overflow:a.style.overflow,width:a.style.width,position:a.style.position};a.style.overflow="visible",a.style.width="fit-content",a.style.position="relative";const i=a.scrollWidth,l=a.scrollHeight,p={quality:1,pixelRatio:3,backgroundColor:"#ffffff",cacheBust:!0,width:i,height:l,style:{margin:"0",padding:"0",transform:"none",overflow:"visible"},skipAutoScale:!1,preferDimensions:!0};let d;return o==="jpeg"?d=await oe(a,p):d=await re(a,p),a.style.overflow=n.overflow,a.style.width=n.width,a.style.position=n.position,d},Y=async()=>{if(!r){alert("Please generate a receipt first");return}const o=t.phone;if(!o){alert("Student phone number is required to send via WhatsApp");return}let a=o.replace(/\D/g,"");a.length===10&&(a="91"+a),!a.startsWith("91")&&a.length===12&&(a=a.substring(0,2)==="91"?a:"91"+a),T(!0);try{const n=await N("jpeg"),l=await(await fetch(n)).blob(),p=new File([l],`Receipt_${r.receiptNo}.jpg`,{type:"image/jpeg"}),d=`📄 *Fee Payment Receipt - Coder & AccoTax* 📄

👤 *Student:* ${r.studentName}
📚 *Course:* ${r.course}
💰 *Amount Paid:* ₹${parseFloat(r.feesPaid).toLocaleString("en-IN")}/-
📅 *Date:* ${r.paymentDate}
🧾 *Receipt No:* ${r.receiptNo}

Thank you for choosing Coder & AccoTax! ✨
For any queries, contact: +91 70037 56860`,c=encodeURIComponent(d),s=`https://wa.me/${a}?text=${c}`;if(window.open(s,"_blank"),window.confirm(`WhatsApp will open now. Please follow these steps:

1. The message text will be pre-filled
2. Click on the attachment (📎) icon
3. Select "Gallery" or "Document"
4. Choose the receipt image you want to send

Would you like to download the receipt image now to easily attach it?`)){const x=document.createElement("a"),v=`Receipt_${r.receiptNo}_${r.studentName.replace(/\s/g,"_")}.jpg`;x.download=v,x.href=n,x.click(),setTimeout(()=>{alert(`✅ Receipt saved as "${v}".

Please attach this image in WhatsApp to complete sending.`)},500)}}catch(n){console.error("Error sending to WhatsApp:",n),alert("Failed to send receipt via WhatsApp. Please try again or use the Save/Print options.")}finally{T(!1)}},Q=async()=>{if(!r){alert("Please generate a receipt first");return}f(!0);try{const o=await N("jpeg"),a=document.createElement("a"),n=`Receipt_${r.receiptNo}_${r.studentName.replace(/\s/g,"_")}.jpg`;a.download=n,a.href=o,a.click(),alert(`Receipt saved successfully as ${n}`)}catch(o){console.error("Error saving receipt as JPG:",o),alert("Failed to save receipt as JPG. Please try again.")}finally{f(!1)}},J=async()=>{if(!r){alert("Please generate a receipt first");return}f(!0);try{const o=await N("png"),a=document.createElement("a"),n=`Receipt_${r.receiptNo}_${r.studentName.replace(/\s/g,"_")}.png`;a.download=n,a.href=o,a.click(),alert(`Receipt saved successfully as ${n}`)}catch(o){console.error("Error saving receipt as PNG:",o),alert("Failed to save receipt as PNG. Please try again.")}finally{f(!1)}},H=o=>{if(o.preventDefault(),!t.studentName||!t.phone||!t.course||!t.paymentDate||!t.paymentMode){alert("Please fill in all required fields");return}if(t.feeType==="monthly"){if(!t.periodFrom||!t.periodTo||!t.monthlyFeeAmount){alert("Please fill in period details and monthly fee amount for monthly fee type");return}if(!t.feesPaid||parseFloat(t.feesPaid)<=0){alert("Please calculate total fees by selecting period and monthly amount");return}}else if(!t.feesPaid){alert("Please enter the total fees amount");return}let a="",n="";if(t.feeType==="monthly"&&t.periodFrom&&t.periodTo){const l=y(t.periodFrom,t.periodTo),p=parseFloat(t.monthlyFeeAmount);a=`${$(t.periodFrom)} to ${$(t.periodTo)}`,n=` (${l} months × ₹${p.toLocaleString("en-IN")} = ₹${(l*p).toLocaleString("en-IN")})`}const i=B(t.studentName,t.course,t.paymentDate,t.feesPaid);q({studentName:t.studentName,phone:t.phone,course:t.course,feeType:t.feeType,feesPaid:t.feesPaid,monthlyFeeAmount:t.monthlyFeeAmount,paymentDate:V(t.paymentDate),paymentMode:t.paymentMode,period:a,monthlyBreakdown:n,receiptNo:i})},K=()=>{if(!r){alert("Please generate a receipt first");return}const o=window.open("","_blank","width=800,height=600");if(!o){alert("Please allow pop-ups to print the receipt");return}const a=D(parseFloat(r.feesPaid)),n=parseFloat(r.feesPaid).toLocaleString("en-IN"),i=R(r.paymentMode),l=L||"/assets/cnat.png",p=O||F;o.document.write(`
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
            background: white;
            margin: 0;
            padding: 0;
            display: flex;
            justify-content: center;
            align-items: flex-start;
            min-height: auto;
          }
          .receipt-container {
            width: 100%;
            max-width: 100%;
            margin: 0;
            position: relative;
            overflow: visible;
          }
          .receipt {
            position: relative;
            background: white;
            border-radius: 0;
            box-shadow: none;
            margin: 0;
            padding: 10px 20px 20px 20px;
            overflow: visible;
            width: 100%;
          }
          .receipt-content {
            padding: 10px;
            position: relative;
            z-index: 1;
            width: 100%;
          }
          
          .header {
            text-align: center;
            border-bottom: 2px solid #1a3e6f;
            padding-bottom: 10px;
            margin-bottom: 12px;
          }
          .organisation-name {
            font-size: 24px;
            font-weight: bold;
            color: #1a3e6f;
            margin-bottom: 5px;
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 10px;
          }
          .organisation-logo {
            height: 35px;
            width: auto;
            vertical-align: middle;
          }
          .organisation-tagline {
            font-size: 10px;
            color: #4a5568;
            margin-top: 3px;
          }
          .address {
            font-size: 9px;
            color: #4a5568;
            margin-top: 5px;
            line-height: 1.3;
          }
          .contact-row {
            display: flex;
            justify-content: center;
            gap: 15px;
            font-size: 9px;
            color: #4a5568;
            margin-top: 5px;
            flex-wrap: wrap;
          }
          .receipt-title {
            font-size: 14px;
            font-weight: bold;
            color: #2d3748;
            margin-top: 8px;
            background: #f0f4f8;
            display: inline-block;
            padding: 4px 15px;
            border-radius: 20px;
          }
          .info-grid {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            gap: 10px;
            margin: 12px 0;
            padding: 10px;
            background: #f7fafc;
            border-radius: 6px;
          }
          .info-item {
            display: flex;
            flex-direction: column;
          }
          .info-label {
            font-size: 9px;
            font-weight: 600;
            color: #4a5568;
            text-transform: uppercase;
            margin-bottom: 3px;
          }
          .info-value {
            font-size: 11px;
            font-weight: bold;
            color: #2d3748;
            word-break: break-word;
          }
          .details-section {
            margin-bottom: 12px;
          }
          .section-title {
            font-size: 11px;
            font-weight: bold;
            color: #1a3e6f;
            border-left: 3px solid #1a3e6f;
            padding-left: 8px;
            margin-bottom: 8px;
          }
          .details-table {
            width: 100%;
            border-collapse: collapse;
          }
          .details-table tr {
            border-bottom: 1px solid #e2e8f0;
          }
          .details-table td {
            padding: 6px;
            font-size: 10px;
          }
          .details-table td:first-child {
            font-weight: 600;
            color: #4a5568;
            width: 35%;
          }
          .details-table td:last-child {
            color: #2d3748;
          }
          .fee-section {
            background: #f0f9ff;
            padding: 10px;
            margin: 12px 0;
            border-radius: 6px;
            border: 1px solid #cbd5e0;
          }
          .fee-row {
            display: flex;
            justify-content: space-between;
            margin-bottom: 6px;
          }
          .fee-label {
            font-weight: bold;
            font-size: 11px;
            color: #4a5568;
          }
          .fee-amount {
            font-weight: bold;
            font-size: 14px;
            color: #2f855a;
          }
          .fee-breakdown {
            font-size: 8px;
            color: #718096;
            margin-top: 5px;
            font-style: italic;
          }
          .amount-words {
            font-size: 8px;
            color: #718096;
            margin-top: 6px;
            padding-top: 6px;
            border-top: 1px dashed #cbd5e0;
            font-style: italic;
          }
          
          /* QR Code Section */
          .qr-section {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin: 12px 0;
            padding: 10px;
            background: #faf5ff;
            border-radius: 6px;
            border: 1px solid #d8b4fe;
          }
          .qr-info {
            flex: 1;
            padding-right: 10px;
          }
          .qr-title {
            font-size: 10px;
            font-weight: bold;
            color: #6b21a5;
            margin-bottom: 5px;
          }
          .qr-text {
            font-size: 8px;
            color: #4a5568;
            margin-bottom: 3px;
          }
          .upi-id {
            font-size: 9px;
            font-weight: bold;
            color: #1a3e6f;
            background: white;
            padding: 3px 6px;
            border-radius: 4px;
            display: inline-block;
            margin-top: 5px;
          }
          .qr-code {
            width: 70px;
            height: 70px;
            object-fit: contain;
          }
          
          .footer {
            text-align: center;
            border-top: 1px solid #e2e8f0;
            padding-top: 10px;
            margin-top: 10px;
          }
          .signature-area {
            display: flex;
            justify-content: space-between;
            margin: 10px 0 8px;
          }
          .signature-line {
            text-align: center;
            width: 45%;
          }
          .signature-line p:first-child {
            font-size: 8px;
            color: #718096;
            margin-bottom: 5px;
          }
          .signature-line p:last-child {
            font-size: 9px;
            font-weight: 600;
            color: #4a5568;
            border-top: 1px solid #cbd5e0;
            padding-top: 5px;
            display: inline-block;
            min-width: 100px;
          }
          .footer-note {
            font-size: 7px;
            color: #a0aec0;
            margin-top: 6px;
            line-height: 1.3;
          }
          .contact-info {
            margin-top: 8px;
            padding-top: 6px;
            border-top: 1px solid #e2e8f0;
          }
          .contact-info p {
            font-size: 8px;
            color: #4a5568;
            margin-top: 3px;
          }
          .thankyou {
            font-size: 9px;
            font-weight: bold;
            color: #1a3e6f;
            margin-top: 6px;
          }
          
          /* Watermark styles */
          .watermark-container {
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            display: flex;
            align-items: center;
            justify-content: center;
            pointer-events: none;
            z-index: 10;
            opacity: 0.08;
          }
          .watermark-image {
            width: 50%;
            height: auto;
            transform: rotate(-25deg);
          }

          /* PAID Stamp - Fixed positioning */
          .stamp-container {
            position: absolute;
            top: 55%;
            right: 12%;
            transform: translateY(-50%) rotate(-15deg);
            z-index: 20;
            pointer-events: none;
          }

          .paid-stamp-image {
            width: 120px;
            height: auto;
            opacity: 0.6;
          }
          
          @media print {
            body {
              margin: 0;
              padding: 0;
            }
            .receipt-container {
              margin: 0;
              padding: 0;
              width: 100%;
            }
            .receipt {
              padding: 0;
              margin: 0;
              width: 100%;
            }
            .stamp-container {
              opacity: 0.7 !important;
              -webkit-print-color-adjust: exact;
              print-color-adjust: exact;
            }
            .paid-stamp-image {
              opacity: 0.7 !important;
              -webkit-print-color-adjust: exact;
              print-color-adjust: exact;
            }
            .qr-section {
              -webkit-print-color-adjust: exact;
              print-color-adjust: exact;
            }
            @page {
              size: A4;
              margin: 0cm;
            }
          }
        </style>
      </head>
      <body>
        <div class="receipt-container">
          <div class="receipt">
            <!-- Watermark -->
            <div class="watermark-container">
              <img src="${l}" alt="Watermark" class="watermark-image" />
            </div>
            
            <!-- PAID Stamp Image -->
            <div class="stamp-container">
              <img src="${p}" alt="Paid Stamp" class="paid-stamp-image" />
            </div>
            
            <div class="receipt-content">
              <div class="header">
                <div class="organisation-name">
                  <img src="${l}" alt="Coder & AccoTax Logo" class="organisation-logo" />
                  <span>CODER & ACCOTAX</span>
                </div>
                <div class="organisation-tagline">Quality Education | Professional Training | Tax Solutions</div>
                <div class="address">
                  25(10/A) Shibtala Road, PO-N C Pukur, Barrackpore, Kolkata-700122
                </div>
                <div class="contact-row">
                  <span>📞 +91 70037 56860</span>
                  <span>✉️ info@codernaccotax.co.in</span>
                </div>
                <div>
                  <span class="receipt-title">Fee Payment Receipt</span>
                </div>
              </div>
              
              <div class="info-grid">
                <div class="info-item">
                  <div class="info-label">Receipt No.</div>
                  <div class="info-value">${r.receiptNo}</div>
                </div>
                <div class="info-item">
                  <div class="info-label">Payment Date</div>
                  <div class="info-value">${r.paymentDate}</div>
                </div>
                <div class="info-item">
                  <div class="info-label">Payment Mode</div>
                  <div class="info-value">${i} ${r.paymentMode}</div>
                </div>
                <div class="info-item">
                  <div class="info-label">Student Name</div>
                  <div class="info-value">${r.studentName}</div>
                </div>
              </div>

              <div class="details-section">
                <div class="section-title">Course Details</div>
                <table class="details-table">
                  <tr>
                    <td>Phone Number</td>
                    <td>${r.phone}</td>
                  </tr>
                  <tr>
                    <td>Course Enrolled</td>
                    <td>${r.course}</td>
                  </tr>
                  ${r.period?`
                  <tr>
                    <td>Course Period</td>
                    <td>${r.period}</td>
                  </tr>
                  `:""}
                </table>
              </div>

              <div class="fee-section">
                <div class="fee-row">
                  <span class="fee-label">Course Fees</span>
                  <span class="fee-amount">₹ ${n}/-</span>
                </div>
                ${r.monthlyBreakdown?`
                <div class="fee-breakdown">
                  ${r.monthlyBreakdown}
                </div>
                `:""}
                <div class="fee-row">
                  <span class="fee-label">Payment Status</span>
                  <span style="color: #2f855a; font-weight: bold;">✓ PAID IN FULL</span>
                </div>
                <div class="amount-words">
                  Amount in words: Rupees ${a}
                </div>
              </div>

              <!-- QR Code Section for Online Payment -->
              <div class="qr-section">
                <div class="qr-info">
                  <div class="qr-title">📱 Pay Online via UPI</div>
                  <div class="qr-text">Scan QR code to make payment</div>
                  <div class="qr-text">Any UPI App (Google Pay, PhonePe, Paytm)</div>
                  <div class="upi-id">UPI ID: 9432456083@upi</div>
                </div>
                <div class="qr-code">
                  <img src="https://quickchart.io/qr?text=upi://pay?pa=9432456083@upi&pn=Coder%20%26%20AccoTax&cu=INR&am=${parseFloat(r.feesPaid)}" alt="UPI QR Code" style="width: 70px; height: 70px;" />
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
                  This is a computer generated receipt - Valid without signature
                </div>
                <div class="contact-info">
                  <p>📞 For any query: <strong>7003756860</strong></p>
                  <p>🌐 Visit us: <strong style="color: #1a3e6f;">www.codernaccotax.co.in</strong></p>
                </div>
                <div class="thankyou">
                  ✨ Thank you for choosing Coder & AccoTax! ✨
                </div>
              </div>
            </div>
          </div>
        </div>
        <script>
          window.onload = function() {
            setTimeout(function() {
              window.print();
              window.onafterprint = function() {
                window.close();
              };
            }, 500);
          };
        <\/script>
      </body>
    </html>
  `),o.document.close()};m.useEffect(()=>{h?document.documentElement.classList.add("dark"):document.documentElement.classList.remove("dark")},[h]);const X=r?D(parseFloat(r.feesPaid)):"",Z=r?R(r.paymentMode):"";return e.jsxs("div",{className:"min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 transition-colors duration-300 p-4",children:[e.jsx("div",{className:"flex justify-end mb-4 max-w-6xl mx-auto gap-2",children:e.jsx("button",{onClick:()=>z(!h),className:"flex items-center gap-2 px-4 py-2 rounded-full bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-200 shadow-md hover:shadow-lg transition border border-gray-200 dark:border-gray-600 text-sm",children:h?e.jsxs(e.Fragment,{children:[e.jsx("span",{children:"☀️"})," Light Mode"]}):e.jsxs(e.Fragment,{children:[e.jsx("span",{children:"🌙"})," Dark Mode"]})})}),e.jsxs("div",{className:"max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-6",children:[e.jsxs("div",{className:"bg-white dark:bg-gray-800 rounded-2xl shadow-xl overflow-hidden",children:[e.jsxs("div",{className:"bg-gradient-to-r from-blue-600 to-blue-700 px-6 py-3",children:[e.jsxs("h2",{className:"text-lg font-bold text-white flex items-center gap-2",children:[e.jsx("span",{children:"📝"})," Student Fee Payment Form"]}),e.jsx("p",{className:"text-blue-100 text-xs mt-1",children:"Enter payment details to generate receipt"})]}),e.jsxs("form",{onSubmit:H,className:"p-5 space-y-4",children:[e.jsxs("div",{children:[e.jsx("label",{className:"block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-1",children:"Student Full Name *"}),e.jsx("input",{type:"text",name:"studentName",value:t.studentName,onChange:g,className:"w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-white transition",placeholder:"Enter student name",required:!0})]}),e.jsxs("div",{children:[e.jsx("label",{className:"block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-1",children:"Phone Number *"}),e.jsx("input",{type:"tel",name:"phone",value:t.phone,onChange:g,className:"w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-white transition",placeholder:"10-digit mobile number",required:!0})]}),e.jsxs("div",{children:[e.jsx("label",{className:"block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-1",children:"Course Name *"}),e.jsxs("select",{name:"course",value:t.course,onChange:g,className:"w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-white transition cursor-pointer",required:!0,children:[e.jsx("option",{value:"",children:"Select a course"}),E.map(o=>e.jsx("option",{value:o.name,children:o.name},o.id))]})]}),e.jsxs("div",{children:[e.jsx("label",{className:"block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-1",children:"Fee Type *"}),e.jsxs("div",{className:"grid grid-cols-2 gap-3",children:[e.jsx("button",{type:"button",onClick:A,value:"non_monthly",className:`px-4 py-2 rounded-lg font-semibold transition ${t.feeType==="non_monthly"?"bg-blue-600 text-white":"bg-gray-200 dark:bg-gray-600 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-500"}`,children:"One-time / Fixed Fee"}),e.jsx("button",{type:"button",onClick:A,value:"monthly",className:`px-4 py-2 rounded-lg font-semibold transition ${t.feeType==="monthly"?"bg-blue-600 text-white":"bg-gray-200 dark:bg-gray-600 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-500"}`,children:"Monthly Fee"})]})]}),t.feeType==="monthly"?e.jsxs(e.Fragment,{children:[e.jsxs("div",{children:[e.jsx("label",{className:"block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-1",children:"Monthly Fee Amount (₹) *"}),e.jsx("input",{type:"number",name:"monthlyFeeAmount",value:t.monthlyFeeAmount,onChange:g,className:"w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-white transition",placeholder:"Enter monthly fee amount",required:!0})]}),e.jsxs("div",{children:[e.jsx("label",{className:"block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-1",children:"Course Period (Monthly) *"}),e.jsxs("div",{className:"grid grid-cols-2 gap-3",children:[e.jsxs("div",{children:[e.jsx("label",{className:"block text-xs text-gray-500 dark:text-gray-400 mb-1",children:"From"}),e.jsx("input",{type:"month",name:"periodFrom",value:t.periodFrom,onChange:g,className:"w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-white transition text-sm",required:!0})]}),e.jsxs("div",{children:[e.jsx("label",{className:"block text-xs text-gray-500 dark:text-gray-400 mb-1",children:"To"}),e.jsx("input",{type:"month",name:"periodTo",value:t.periodTo,onChange:g,className:"w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-white transition text-sm",required:!0})]})]}),t.periodFrom&&t.periodTo&&t.monthlyFeeAmount&&e.jsx("div",{className:"mt-2 p-2 bg-blue-50 dark:bg-blue-900/20 rounded-lg",children:e.jsxs("p",{className:"text-xs text-gray-600 dark:text-gray-300",children:["Total Months: ",e.jsx("strong",{children:y(t.periodFrom,t.periodTo)})," | Total Fees: ",e.jsxs("strong",{children:["₹ ",(y(t.periodFrom,t.periodTo)*(parseFloat(t.monthlyFeeAmount)||0)).toLocaleString("en-IN")]})]})})]})]}):e.jsxs("div",{children:[e.jsx("label",{className:"block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-1",children:"Total Fees Amount (₹) *"}),e.jsx("input",{type:"number",name:"feesPaid",value:t.feesPaid,onChange:g,className:"w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-white transition",placeholder:"Enter total fees amount",required:!0})]}),e.jsxs("div",{children:[e.jsx("label",{className:"block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-1",children:"Payment Date *"}),e.jsx("input",{type:"date",name:"paymentDate",value:t.paymentDate,onChange:g,className:"w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-white transition",required:!0})]}),e.jsxs("div",{children:[e.jsx("label",{className:"block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-1",children:"Payment Mode *"}),e.jsxs("select",{name:"paymentMode",value:t.paymentMode,onChange:g,className:"w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-white transition cursor-pointer",required:!0,children:[e.jsx("option",{value:"Cash",children:"💵 Cash"}),e.jsx("option",{value:"Online (UPI)",children:"📱 Online (UPI)"}),e.jsx("option",{value:"Online (Card)",children:"💳 Online (Card)"}),e.jsx("option",{value:"Online (Net Banking)",children:"🏦 Online (Net Banking)"}),e.jsx("option",{value:"Cheque",children:"📝 Cheque"})]})]}),e.jsx("button",{type:"submit",className:"w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-semibold py-2.5 rounded-lg transition duration-200 shadow-md hover:shadow-lg",children:"Generate Receipt →"})]})]}),e.jsxs("div",{className:"bg-white dark:bg-gray-800 rounded-2xl shadow-xl overflow-hidden flex flex-col",children:[e.jsxs("div",{className:"bg-gradient-to-r from-green-600 to-green-700 px-6 py-3 flex justify-between items-center flex-wrap gap-2",children:[e.jsxs("div",{children:[e.jsxs("h2",{className:"text-lg font-bold text-white flex items-center gap-2",children:[e.jsx("span",{children:"🧾"})," Receipt Preview"]}),e.jsx("p",{className:"text-green-100 text-xs mt-1",children:"Review before printing or saving"})]}),r&&e.jsxs("div",{className:"flex gap-2 flex-wrap",children:[e.jsx("button",{onClick:Q,disabled:j,className:"flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white px-3 py-1.5 rounded-lg text-sm font-semibold shadow transition disabled:opacity-50 disabled:cursor-not-allowed",children:j?"⏳ Saving...":"📸 Save as JPG"}),e.jsx("button",{onClick:J,disabled:j,className:"flex items-center gap-2 bg-purple-500 hover:bg-purple-600 text-white px-3 py-1.5 rounded-lg text-sm font-semibold shadow transition disabled:opacity-50 disabled:cursor-not-allowed",children:"🖼️ Save as PNG"}),e.jsx("button",{onClick:Y,disabled:S,className:"flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white px-3 py-1.5 rounded-lg text-sm font-semibold shadow transition disabled:opacity-50 disabled:cursor-not-allowed",children:S?"⏳ Sending...":"💬 Send to WhatsApp"}),e.jsx("button",{onClick:K,className:"flex items-center gap-2 bg-white text-green-700 px-3 py-1.5 rounded-lg text-sm font-semibold shadow hover:shadow-lg transition",children:"🖨️ Print"})]})]}),e.jsx("div",{className:"p-5 flex-1 flex items-center justify-center overflow-auto",children:r?e.jsxs("div",{ref:C,className:"w-full max-w-sm mx-auto bg-white rounded-xl border-2 border-gray-200 shadow-lg overflow-visible relative",style:{backgroundColor:"#ffffff",width:"380px"},children:[e.jsx("div",{className:"absolute inset-0 flex items-center justify-center pointer-events-none opacity-10",children:e.jsx("img",{src:P,alt:"Watermark",className:"w-48 h-auto transform rotate-[-25deg]",onError:o=>{o.target.style.display="none"}})}),e.jsx("div",{className:"absolute top-[60%] right-[40%] transform -translate-y-1/2 rotate-[-15deg] z-20 pointer-events-none",children:e.jsx("img",{src:F,alt:"Paid Stamp",className:"w-28 opacity-60"})}),e.jsxs("div",{className:"p-4 space-y-3 relative z-10",children:[e.jsxs("div",{className:"text-center border-b pb-3",children:[e.jsxs("div",{className:"flex items-center justify-center gap-2 mb-1",children:[e.jsx("img",{src:P,alt:"Coder & AccoTax Logo",className:"h-8 w-auto",onError:o=>{o.target.style.display="none"}}),e.jsx("h3",{className:"text-lg font-bold text-blue-700",children:"Coder & AccoTax"})]}),e.jsx("p",{className:"text-[9px] text-gray-500 mt-1",children:"Fee Payment Receipt"})]}),e.jsxs("div",{className:"space-y-2 text-xs",children:[e.jsxs("div",{className:"flex justify-between items-center",children:[e.jsx("span",{className:"font-semibold text-gray-600",children:"Receipt No:"}),e.jsx("span",{className:"text-gray-800 font-mono text-[10px]",children:r.receiptNo})]}),e.jsxs("div",{className:"flex justify-between",children:[e.jsx("span",{className:"font-semibold text-gray-600",children:"Date:"}),e.jsx("span",{className:"text-gray-700",children:r.paymentDate})]}),e.jsxs("div",{className:"flex justify-between",children:[e.jsx("span",{className:"font-semibold text-gray-600",children:"Mode:"}),e.jsxs("span",{className:"text-gray-700",children:[Z," ",r.paymentMode]})]}),e.jsxs("div",{className:"border-t pt-2 mt-2",children:[e.jsxs("div",{className:"flex justify-between mb-1",children:[e.jsx("span",{className:"font-semibold text-gray-600",children:"Student:"}),e.jsx("span",{className:"text-gray-800 font-medium text-right",children:r.studentName})]}),e.jsxs("div",{className:"flex justify-between mb-1",children:[e.jsx("span",{className:"font-semibold text-gray-600",children:"Phone:"}),e.jsx("span",{className:"text-gray-700",children:r.phone})]}),e.jsxs("div",{className:"flex justify-between mb-1",children:[e.jsx("span",{className:"font-semibold text-gray-600",children:"Course:"}),e.jsx("span",{className:"text-gray-700 text-right",children:r.course})]}),r.period&&e.jsxs("div",{className:"flex justify-between mb-1",children:[e.jsx("span",{className:"font-semibold text-gray-600",children:"Period:"}),e.jsx("span",{className:"text-gray-700 text-right text-[9px]",children:r.period})]})]}),e.jsxs("div",{className:"bg-green-50 p-3 rounded-lg mt-2",children:[e.jsxs("div",{className:"flex justify-between items-center",children:[e.jsx("span",{className:"font-bold text-gray-700",children:"Amount Paid:"}),e.jsxs("span",{className:"font-bold text-green-600 text-base",children:["₹ ",parseFloat(r.feesPaid).toLocaleString("en-IN")]})]}),r.monthlyBreakdown&&e.jsx("div",{className:"text-[8px] text-gray-500 italic mt-1",children:r.monthlyBreakdown}),e.jsx("div",{className:"text-[8px] text-gray-500 italic mt-2 pt-1 border-t",children:X})]})]}),e.jsxs("div",{className:"text-center pt-3 border-t",children:[e.jsx("p",{className:"text-[8px] text-gray-400",children:"✓ Valid without signature"}),e.jsx("p",{className:"text-[7px] text-gray-400 mt-1",children:"25(10/A) Shibtala Road, Barrackpore, Kol-122"}),e.jsx("div",{className:"mt-2 pt-2 flex justify-center",children:e.jsx("img",{src:"https://quickchart.io/qr?text=upi://pay?pa=9432456083@upi&pn=Coder%20%26%20AccoTax&cu=INR",alt:"UPI QR Code",className:"w-16 h-16 mx-auto"})}),e.jsx("div",{className:"text-[6px] text-gray-400 mt-1",children:"UPI ID: 9432456083@upi"}),e.jsxs("div",{className:"mt-2 pt-1 border-t border-gray-100",children:[e.jsxs("p",{className:"text-[7px] text-gray-500",children:["📞 For any query: ",e.jsx("span",{className:"font-semibold text-gray-700",children:"7003756860"})]}),e.jsxs("p",{className:"text-[7px] text-gray-500 mt-0.5",children:["🌐 Visit us: ",e.jsx("span",{className:"font-semibold text-blue-600",children:"www.codernaccotax.co.in"})]})]}),e.jsx("p",{className:"text-[8px] text-blue-600 mt-2",children:"✨ Thank you! ✨"})]})]})]}):e.jsxs("div",{className:"flex flex-col items-center justify-center text-center p-6",children:[e.jsx("div",{className:"w-20 h-20 bg-gray-100 dark:bg-gray-700 rounded-full flex items-center justify-center mb-3",children:e.jsx("svg",{className:"w-10 h-10 text-gray-400",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:1.5,d:"M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"})})}),e.jsx("p",{className:"text-gray-500 dark:text-gray-400 font-medium text-sm",children:"No receipt generated yet"}),e.jsx("p",{className:"text-xs text-gray-400 mt-1",children:'Fill the form and click "Generate Receipt"'})]})})]})]})]})};export{le as default};
