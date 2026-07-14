import{r as l,j as e}from"./index-CK4WUhpx.js";import{C as Y,p as V,t as Ve,a as Qe}from"./index-Clk_rs8B.js";import{s as be}from"./studentService-CQnnXgDC.js";import{c as we}from"./courseService-C7dXBNr3.js";import{l as He}from"./loginService-CDfeLjnp.js";import"./api-DRw56g4m.js";const st=()=>{const ve=()=>{const t=new Date,a=t.getFullYear(),s=String(t.getMonth()+1).padStart(2,"0"),n=String(t.getDate()).padStart(2,"0");return`${a}-${s}-${n}`},[u,Ne]=l.useState(null),[Je,Q]=l.useState(!0),[A,H]=l.useState([]),[F,J]=l.useState(!1),[je,T]=l.useState(""),[D,K]=l.useState(null),[Ke,N]=l.useState(""),[X,Z]=l.useState([]),[$,ee]=l.useState(!1),[R,te]=l.useState(null),[I,E]=l.useState(!1),[g,q]=l.useState({student_name:"",nickname:"",whatsapp:""}),[ae,re]=l.useState(!1),[M,h]=l.useState(null),[U,z]=l.useState(!1),[v,_]=l.useState({courseCode:"",courseName:""}),[se,oe]=l.useState(!1),[L,b]=l.useState(null),[r,f]=l.useState({studentName:"",phone:"",course:"",feeType:"non_monthly",monthlyFeeAmount:"",feesPaid:"",paymentDate:ve(),paymentMode:"Cash",periodFrom:"",periodTo:"",registrationNumber:""}),[o,ke]=l.useState(null),[j,Ce]=l.useState(!1),[B,k]=l.useState(!1),[ne,ie]=l.useState(!1),le=l.useRef(null),[Se,Pe]=l.useState(""),[Ae,Fe]=l.useState(""),Te=async()=>{Q(!0);try{const t=await He.currentUser();t&&t.status===!0&&t.data&&Ne(t.data)}catch(t){console.error("Error fetching current user:",t)}finally{Q(!1)}};l.useEffect(()=>{Te(),de(),ce()},[]);const de=async()=>{J(!0),K(null);try{const t=await be.getAll();let a=[];t&&t.data&&Array.isArray(t.data)?a=t.data:Array.isArray(t)?a=t:t&&t.data&&t.data.data&&Array.isArray(t.data.data)&&(a=t.data.data),H(a),a.length===0&&console.warn("No students found in database")}catch(t){console.error("Error fetching students:",t),K("Failed to load students from database. Please try again later."),H([])}finally{J(!1)}},ce=async()=>{ee(!0),te(null);try{const t=await we.getAll();let a=[];t&&t.status===!0&&Array.isArray(t.data)?a=t.data:Array.isArray(t)?a=t:t&&t.data&&Array.isArray(t.data)&&(a=t.data),Z(a),a.length===0&&console.warn("No courses found in database")}catch(t){console.error("Error fetching courses:",t),te("Failed to load courses from database. Please try again later."),Z([])}finally{ee(!1)}},pe=()=>u?u.employee&&u.employee.employeeName?u.employee.employeeName:u.userName?u.userName:"Authorized Collector":"System",me=()=>u?u.employee&&u.employee.designation?u.employee.designation.name:u.userType&&u.userType.userTypeName?u.userType.userTypeName:"Accounts Department":"",W=t=>{const{name:a,value:s}=t.target;q(n=>({...n,[a]:s})),M&&h(null)},De=async t=>{if(t.preventDefault(),!g.student_name.trim()){h("Student name is required");return}if(!g.whatsapp.trim()){h("WhatsApp number is required");return}if(!/^\d{10}$/.test(g.whatsapp)){h("Please enter a valid 10-digit WhatsApp number");return}re(!0),h(null);try{const s={student_name:g.student_name.trim(),nickname:g.nickname.trim()||g.student_name.trim(),whatsapp:g.whatsapp.trim()},n=await be.createBasic(s);if(n&&n.status===!0){const i=n.data;await de(),i&&i.id&&(T(i.id.toString()),N(i.registrationNumber||""),f(p=>({...p,studentName:i.student_name||"",phone:i.whatsapp||"",registrationNumber:i.registrationNumber||""}))),q({student_name:"",nickname:"",whatsapp:""}),E(!1),alert(`Student "${i.student_name}" created successfully!
Registration Number: ${i.registrationNumber}`)}else h(n?.message||"Failed to create student")}catch(s){console.error("Error creating student:",s),h(s.response?.data?.message||"Failed to create student. Please try again.")}finally{re(!1)}},ue=t=>{const{name:a,value:s}=t.target;_(n=>({...n,[a]:s})),L&&b(null)},$e=async t=>{if(t.preventDefault(),!v.courseCode.trim()){b("Course code is required");return}if(!v.courseName.trim()){b("Course name is required");return}oe(!0),b(null);try{const a={courseCode:v.courseCode.trim().toUpperCase(),courseName:v.courseName.trim()},s=await we.createBasic(a);if(s&&s.status===!0){const n=s.data;await ce(),n&&n.id&&f(i=>({...i,course:n.courseName||""})),_({courseCode:"",courseName:""}),z(!1),alert(`Course "${n.courseName}" created successfully!
Course Code: ${n.courseCode}`)}else b(s?.message||"Failed to create course")}catch(a){console.error("Error creating course:",a),b(a.response?.data?.message||"Failed to create course. Please try again.")}finally{oe(!1)}};l.useEffect(()=>{(async()=>{try{const s=await(await fetch(Y)).blob(),n=new FileReader;n.onloadend=()=>{Pe(n.result)},n.readAsDataURL(s);const p=await(await fetch(V)).blob(),c=new FileReader;c.onloadend=()=>{Fe(c.result)},c.readAsDataURL(p)}catch(a){console.error("Error loading images:",a)}})()},[]);const Re=t=>{const a=t.target.value;if(T(a),a){const s=A.find(n=>n.studentId===parseInt(a));s&&(N(s.registrationNumber||""),f(n=>({...n,studentName:s.studentName||"",phone:s.whatsapp||s.phone1||"",registrationNumber:s.registrationNumber||""})))}else N(""),f(s=>({...s,studentName:"",phone:"",registrationNumber:""}))},Ie=(t,a,s,n)=>{const i="CNAT",p=`${t.trim()}_${a}_${s}_${n}`,m=(ye=>{let w=0;for(let G=0;G<ye.length;G++){const Ye=ye.charCodeAt(G);w=(w<<5)-w+Ye,w=w&w}return Math.abs(w).toString(36).toUpperCase()})(p),d=new Date,S=d.getFullYear(),y=String(d.getMonth()+1).padStart(2,"0"),P=String(d.getDate()).padStart(2,"0"),Oe=`${S}${y}${P}`,Ge=m.substring(0,8);return`${i}-${Oe}-${Ge}`},x=t=>{const{name:a,value:s}=t.target;f(n=>({...n,[a]:s})),(a==="studentName"||a==="phone")&&(T(""),N(""),f(n=>({...n,registrationNumber:""})))},C=(t,a)=>{if(!t||!a)return 0;const s=new Date(t),n=new Date(a),i=(n.getFullYear()-s.getFullYear())*12+(n.getMonth()-s.getMonth())+1;return i>0?i:0},ge=t=>{const a=t.target.value;f(s=>({...s,feeType:a,feesPaid:"",periodFrom:"",periodTo:"",monthlyFeeAmount:""}))},Ee=()=>{if(r.feeType==="monthly"){const t=C(r.periodFrom,r.periodTo),a=parseFloat(r.monthlyFeeAmount)||0,s=t*a;f(n=>({...n,feesPaid:s.toString()}))}};l.useEffect(()=>{r.feeType==="monthly"&&r.periodFrom&&r.periodTo&&r.monthlyFeeAmount&&Ee()},[r.periodFrom,r.periodTo,r.monthlyFeeAmount,r.feeType]);const xe=t=>{if(!t||isNaN(t))return"";if(t=Math.floor(t),t===0)return"Zero Only";const a=["","One","Two","Three","Four","Five","Six","Seven","Eight","Nine"],s=["","","Twenty","Thirty","Forty","Fifty","Sixty","Seventy","Eighty","Ninety"],n=["Ten","Eleven","Twelve","Thirteen","Fourteen","Fifteen","Sixteen","Seventeen","Eighteen","Nineteen"],i=d=>d===0?"":d<10?a[d]:d<20?n[d-10]:s[Math.floor(d/10)]+(d%10?" "+a[d%10]:""),p=d=>{if(d===0)return"";if(d<100)return i(d);const S=Math.floor(d/100),y=d%100;return a[S]+" Hundred"+(y?" and "+i(y):"")};let c="",m=t;if(m>=1e7){const d=Math.floor(m/1e7);c+=i(d)+" Crore",m%=1e7,m>0&&(c+=" ")}if(m>=1e5){const d=Math.floor(m/1e5);c+=i(d)+" Lakh",m%=1e5,m>0&&(c+=" ")}if(m>=1e3){const d=Math.floor(m/1e3);c+=p(d)+" Thousand",m%=1e3,m>0&&(c+=" ")}return m>0&&(c+=p(m)),c+" Only"},qe=t=>t?new Date(t).toLocaleDateString("en-IN",{day:"2-digit",month:"long",year:"numeric"}):"",he=t=>t?new Date(t).toLocaleDateString("en-IN",{month:"long",year:"numeric"}):"",fe=t=>{switch(t){case"Cash":return"💵";case"Online (UPI)":return"📱";case"Online (Card)":return"💳";case"Online (Net Banking)":return"🏦";case"Cheque":return"📝";default:return"💰"}},O=async(t="jpeg")=>{const a=le.current;if(!a)throw new Error("Receipt element not found");const s={overflow:a.style.overflow,width:a.style.width,position:a.style.position};a.style.overflow="visible",a.style.width="fit-content",a.style.position="relative";const n=a.scrollWidth,i=a.scrollHeight,p={quality:1,pixelRatio:3,backgroundColor:"#ffffff",cacheBust:!0,width:n,height:i,style:{margin:"0",padding:"0",transform:"none",overflow:"visible"},skipAutoScale:!1,preferDimensions:!0};let c;return t==="jpeg"?c=await Ve(a,p):c=await Qe(a,p),a.style.overflow=s.overflow,a.style.width=s.width,a.style.position=s.position,c},Me=async()=>{if(!o){alert("Please generate a receipt first");return}const t=r.phone;if(!t){alert("Student phone number is required to send via WhatsApp");return}let a=t.replace(/\D/g,"");a.length===10&&(a="91"+a),!a.startsWith("91")&&a.length===12&&(a=a.substring(0,2)==="91"?a:"91"+a),ie(!0);try{const s=await O("jpeg"),i=await(await fetch(s)).blob(),p=new File([i],`Receipt_${o.receiptNo}.jpg`,{type:"image/jpeg"}),c=`📄 *Fee Payment Receipt - Coder & AccoTax* 📄

👤 *Student:* ${o.studentName}
🆔 *Registration No:* ${o.registrationNumber||"N/A"}
📚 *Course:* ${o.course}
💰 *Amount Paid:* ₹${parseFloat(o.feesPaid).toLocaleString("en-IN")}/-
📅 *Date:* ${o.paymentDate}
🧾 *Receipt No:* ${o.receiptNo}
👨‍💼 *Collected By:* ${pe()} (${me()})

Thank you for choosing Coder & AccoTax! ✨
For any queries, contact: +91 70037 56860`,m=encodeURIComponent(c),d=`https://wa.me/${a}?text=${m}`;if(window.open(d,"_blank"),window.confirm(`WhatsApp will open now. Please follow these steps:

1. The message text will be pre-filled
2. Click on the attachment (📎) icon
3. Select "Gallery" or "Document"
4. Choose the receipt image you want to send

Would you like to download the receipt image now to easily attach it?`)){const y=document.createElement("a"),P=`Receipt_${o.receiptNo}_${o.studentName.replace(/\s/g,"_")}.jpg`;y.download=P,y.href=s,y.click(),setTimeout(()=>{alert(`✅ Receipt saved as "${P}".

Please attach this image in WhatsApp to complete sending.`)},500)}}catch(s){console.error("Error sending to WhatsApp:",s),alert("Failed to send receipt via WhatsApp. Please try again or use the Save/Print options.")}finally{ie(!1)}},Ue=async()=>{if(!o){alert("Please generate a receipt first");return}k(!0);try{const t=await O("jpeg"),a=document.createElement("a"),s=`Receipt_${o.receiptNo}_${o.studentName.replace(/\s/g,"_")}.jpg`;a.download=s,a.href=t,a.click(),alert(`Receipt saved successfully as ${s}`)}catch(t){console.error("Error saving receipt as JPG:",t),alert("Failed to save receipt as JPG. Please try again.")}finally{k(!1)}},ze=async()=>{if(!o){alert("Please generate a receipt first");return}k(!0);try{const t=await O("png"),a=document.createElement("a"),s=`Receipt_${o.receiptNo}_${o.studentName.replace(/\s/g,"_")}.png`;a.download=s,a.href=t,a.click(),alert(`Receipt saved successfully as ${s}`)}catch(t){console.error("Error saving receipt as PNG:",t),alert("Failed to save receipt as PNG. Please try again.")}finally{k(!1)}},_e=t=>{if(t.preventDefault(),!r.studentName||!r.phone||!r.course||!r.paymentDate||!r.paymentMode){alert("Please fill in all required fields");return}if(r.feeType==="monthly"){if(!r.periodFrom||!r.periodTo||!r.monthlyFeeAmount){alert("Please fill in period details and monthly fee amount for monthly fee type");return}if(!r.feesPaid||parseFloat(r.feesPaid)<=0){alert("Please calculate total fees by selecting period and monthly amount");return}}else if(!r.feesPaid){alert("Please enter the total fees amount");return}let a="",s="";if(r.feeType==="monthly"&&r.periodFrom&&r.periodTo){const i=C(r.periodFrom,r.periodTo),p=parseFloat(r.monthlyFeeAmount);a=`${he(r.periodFrom)} to ${he(r.periodTo)}`,s=` (${i} months × ₹${p.toLocaleString("en-IN")} = ₹${(i*p).toLocaleString("en-IN")})`}const n=Ie(r.studentName,r.course,r.paymentDate,r.feesPaid);ke({studentName:r.studentName,phone:r.phone,course:r.course,feeType:r.feeType,feesPaid:r.feesPaid,monthlyFeeAmount:r.monthlyFeeAmount,paymentDate:qe(r.paymentDate),paymentMode:r.paymentMode,period:a,monthlyBreakdown:s,receiptNo:n,registrationNumber:r.registrationNumber,collectedBy:pe(),collectorDesignation:me()})},Le=()=>{if(!o){alert("Please generate a receipt first");return}const t=window.open("","_blank","width=800,height=600");if(!t){alert("Please allow pop-ups to print the receipt");return}const a=xe(parseFloat(o.feesPaid)),s=parseFloat(o.feesPaid).toLocaleString("en-IN"),n=fe(o.paymentMode),i=new Date().toLocaleString("en-IN",{day:"2-digit",month:"2-digit",year:"numeric",hour:"2-digit",minute:"2-digit",hour12:!0}),p=Se||"/assets/cnat.png",c=Ae||V;t.document.write(`
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
          .collector-info {
            margin-top: 8px;
            padding: 6px;
            background: #f0fdf4;
            border-radius: 4px;
            font-size: 8px;
            text-align: center;
          }
          .collector-label {
            font-weight: bold;
            color: #166534;
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
              <img src="${p}" alt="Watermark" class="watermark-image" />
            </div>
            
            <!-- PAID Stamp Image -->
            <div class="stamp-container">
              <img src="${c}" alt="Paid Stamp" class="paid-stamp-image" />
            </div>
            
            <div class="receipt-content">
              <div class="header">
                <div class="organisation-name">
                  <img src="${p}" alt="Coder & AccoTax Logo" class="organisation-logo" />
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
                  <div class="info-label">Registration No.</div>
                  <div class="info-value">${o.registrationNumber||"N/A"}</div>
                </div>
                <div class="info-item">
                  <div class="info-label">Receipt No.</div>
                  <div class="info-value">${o.receiptNo}</div>
                </div>
                <div class="info-item">
                  <div class="info-label">Payment Date</div>
                  <div class="info-value">${o.paymentDate}</div>
                </div>
                <div class="info-item">
                  <div class="info-label">Payment Mode</div>
                  <div class="info-value">${n} ${o.paymentMode}</div>
                </div>
              </div>

              <div class="details-section">
                <div class="section-title">Student & Course Details</div>
                <table class="details-table">
                  <tr>
                    <td>Student Name</td>
                    <td>${o.studentName}</td>
                  </tr>
                  <tr>
                    <td>Phone Number</td>
                    <td>${o.phone}</td>
                  </tr>
                  <tr>
                    <td>Course Enrolled</td>
                    <td>${o.course}</td>
                  </tr>
                  ${o.period?`
                  <tr>
                    <td>Course Period</td>
                    <td>${o.period}</td>
                  </tr>
                  `:""}
                </table>
              </div>

              <div class="fee-section">
                <div class="fee-row">
                  <span class="fee-label">Course Fees</span>
                  <span class="fee-amount">₹ ${s}/-</span>
                </div>
                ${o.monthlyBreakdown?`
                <div class="fee-breakdown">
                  ${o.monthlyBreakdown}
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
                  <img src="https://quickchart.io/qr?text=upi://pay?pa=9432456083@upi&pn=Coder%20%26%20AccoTax&cu=INR&am=${parseFloat(o.feesPaid)}" alt="UPI QR Code" style="width: 70px; height: 70px;" />
                </div>
              </div>

              <!-- Collector Information -->
              <div class="collector-info">
                <span class="collector-label">💰 Collected By:</span> ${o.collectedBy||"System"} 
                <span style="color: #6b7280;">|</span> 
                <span class="collector-label">📋 Designation:</span> ${o.collectorDesignation||"Accounts Department"}
                <br/>
                <span style="font-size: 7px; color: #9ca3af;">📅 Printed on: ${i}</span>
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
  `),t.document.close()};l.useEffect(()=>{j?document.documentElement.classList.add("dark"):document.documentElement.classList.remove("dark")},[j]);const Be=o?xe(parseFloat(o.feesPaid)):"",We=o?fe(o.paymentMode):"";return e.jsxs("div",{className:"min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 transition-colors duration-300 p-4",children:[e.jsx("div",{className:"flex justify-end mb-4 max-w-6xl mx-auto gap-2",children:e.jsx("button",{onClick:()=>Ce(!j),className:"flex items-center gap-2 px-4 py-2 rounded-full bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-200 shadow-md hover:shadow-lg transition border border-gray-200 dark:border-gray-600 text-sm",children:j?e.jsxs(e.Fragment,{children:[e.jsx("span",{children:"☀️"})," Light Mode"]}):e.jsxs(e.Fragment,{children:[e.jsx("span",{children:"🌙"})," Dark Mode"]})})}),e.jsxs("div",{className:"max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-6",children:[e.jsxs("div",{className:"bg-white dark:bg-gray-800 rounded-2xl shadow-xl overflow-hidden",children:[e.jsxs("div",{className:"bg-gradient-to-r from-blue-600 to-blue-700 px-6 py-3",children:[e.jsxs("h2",{className:"text-lg font-bold text-white flex items-center gap-2",children:[e.jsx("span",{children:"📝"})," Student Fee Payment Form"]}),e.jsx("p",{className:"text-blue-100 text-xs mt-1",children:"Enter payment details to generate receipt"})]}),e.jsxs("form",{onSubmit:_e,className:"p-5 space-y-4",children:[e.jsxs("div",{children:[e.jsxs("div",{className:"flex justify-between items-center mb-1",children:[e.jsx("label",{className:"block text-sm font-semibold text-gray-700 dark:text-gray-300",children:"Select Student (Optional)"}),e.jsx("button",{type:"button",onClick:()=>E(!I),className:"text-xs text-blue-600 dark:text-blue-400 hover:text-blue-700 font-semibold",children:I?"− Cancel":"+ Add New Student"})]}),e.jsxs("select",{value:je,onChange:Re,className:"w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-white transition cursor-pointer",disabled:F,children:[e.jsx("option",{value:"",children:"-- Select from database --"}),A.map(t=>e.jsxs("option",{value:t.studentId,children:[t.studentName," - ",t.registrationNumber||"No Reg No"," - ",t.whatsapp||t.phone1]},t.studentId))]}),F&&e.jsx("p",{className:"text-xs text-gray-500 mt-1",children:"Loading students..."}),D&&e.jsx("p",{className:"text-xs text-red-600 mt-1",children:D}),A.length===0&&!F&&!D&&e.jsx("p",{className:"text-xs text-yellow-600 mt-1",children:"No students found in database"})]}),I&&e.jsxs("div",{className:"border-2 border-blue-200 dark:border-blue-800 rounded-lg p-4 bg-blue-50 dark:bg-blue-900/20",children:[e.jsx("h3",{className:"text-sm font-bold text-blue-700 dark:text-blue-300 mb-3",children:"Add New Student"}),e.jsxs("div",{className:"space-y-3",children:[e.jsxs("div",{children:[e.jsx("label",{className:"block text-xs font-semibold text-gray-700 dark:text-gray-300 mb-1",children:"Student Name *"}),e.jsx("input",{type:"text",name:"student_name",value:g.student_name,onChange:W,className:"w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-white transition text-sm",placeholder:"Enter full name"})]}),e.jsxs("div",{children:[e.jsx("label",{className:"block text-xs font-semibold text-gray-700 dark:text-gray-300 mb-1",children:"Nickname (Optional)"}),e.jsx("input",{type:"text",name:"nickname",value:g.nickname,onChange:W,className:"w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-white transition text-sm",placeholder:"e.g., Kaustav class 5"})]}),e.jsxs("div",{children:[e.jsx("label",{className:"block text-xs font-semibold text-gray-700 dark:text-gray-300 mb-1",children:"WhatsApp Number *"}),e.jsx("input",{type:"tel",name:"whatsapp",value:g.whatsapp,onChange:W,className:"w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-white transition text-sm",placeholder:"10-digit mobile number"})]}),M&&e.jsx("p",{className:"text-xs text-red-600 mt-1",children:M}),e.jsxs("div",{className:"flex gap-2",children:[e.jsx("button",{type:"button",onClick:De,disabled:ae,className:"flex-1 bg-green-600 hover:bg-green-700 text-white font-semibold py-2 rounded-lg transition disabled:opacity-50 disabled:cursor-not-allowed text-sm",children:ae?"Creating...":"Create Student"}),e.jsx("button",{type:"button",onClick:()=>{E(!1),q({student_name:"",nickname:"",whatsapp:""}),h(null)},className:"px-4 py-2 bg-gray-300 dark:bg-gray-600 text-gray-700 dark:text-gray-200 rounded-lg hover:bg-gray-400 transition text-sm",children:"Cancel"})]})]})]}),e.jsx("div",{className:"border-t border-gray-200 dark:border-gray-700 pt-3",children:e.jsx("p",{className:"text-xs text-gray-500 dark:text-gray-400 mb-2 text-center",children:"OR Enter Manually"})}),e.jsxs("div",{children:[e.jsx("label",{className:"block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-1",children:"Student Full Name *"}),e.jsx("input",{type:"text",name:"studentName",value:r.studentName,onChange:x,className:"w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-white transition",placeholder:"Enter student name",required:!0})]}),e.jsxs("div",{children:[e.jsx("label",{className:"block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-1",children:"Phone Number *"}),e.jsx("input",{type:"tel",name:"phone",value:r.phone,onChange:x,className:"w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-white transition",placeholder:"10-digit mobile number",required:!0})]}),e.jsxs("div",{children:[e.jsxs("div",{className:"flex justify-between items-center mb-1",children:[e.jsx("label",{className:"block text-sm font-semibold text-gray-700 dark:text-gray-300",children:"Course Name *"}),e.jsx("button",{type:"button",onClick:()=>z(!U),className:"text-xs text-blue-600 dark:text-blue-400 hover:text-blue-700 font-semibold",children:U?"− Cancel":"+ Add New Course"})]}),e.jsxs("select",{name:"course",value:r.course,onChange:x,className:"w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-white transition cursor-pointer",required:!0,disabled:$,children:[e.jsx("option",{value:"",children:"Select a course"}),X.map(t=>e.jsxs("option",{value:t.courseName,children:[t.courseCode," - ",t.courseName]},t.id))]}),$&&e.jsx("p",{className:"text-xs text-gray-500 mt-1",children:"Loading courses..."}),R&&e.jsx("p",{className:"text-xs text-red-600 mt-1",children:R}),X.length===0&&!$&&!R&&e.jsx("p",{className:"text-xs text-yellow-600 mt-1",children:"No courses found in database"})]}),U&&e.jsxs("div",{className:"border-2 border-purple-200 dark:border-purple-800 rounded-lg p-4 bg-purple-50 dark:bg-purple-900/20",children:[e.jsx("h3",{className:"text-sm font-bold text-purple-700 dark:text-purple-300 mb-3",children:"Add New Course"}),e.jsxs("div",{className:"space-y-3",children:[e.jsxs("div",{children:[e.jsx("label",{className:"block text-xs font-semibold text-gray-700 dark:text-gray-300 mb-1",children:"Course Code *"}),e.jsx("input",{type:"text",name:"courseCode",value:v.courseCode,onChange:ue,className:"w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-purple-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-white transition text-sm",placeholder:"e.g., REACT01, PYTHON01"}),e.jsx("p",{className:"text-xs text-gray-500 mt-1",children:"Unique course identifier (will be converted to uppercase)"})]}),e.jsxs("div",{children:[e.jsx("label",{className:"block text-xs font-semibold text-gray-700 dark:text-gray-300 mb-1",children:"Course Name *"}),e.jsx("input",{type:"text",name:"courseName",value:v.courseName,onChange:ue,className:"w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-purple-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-white transition text-sm",placeholder:"e.g., React Development, Python Programming"})]}),L&&e.jsx("p",{className:"text-xs text-red-600 mt-1",children:L}),e.jsxs("div",{className:"flex gap-2",children:[e.jsx("button",{type:"button",onClick:$e,disabled:se,className:"flex-1 bg-purple-600 hover:bg-purple-700 text-white font-semibold py-2 rounded-lg transition disabled:opacity-50 disabled:cursor-not-allowed text-sm",children:se?"Creating...":"Create Course"}),e.jsx("button",{type:"button",onClick:()=>{z(!1),_({courseCode:"",courseName:""}),b(null)},className:"px-4 py-2 bg-gray-300 dark:bg-gray-600 text-gray-700 dark:text-gray-200 rounded-lg hover:bg-gray-400 transition text-sm",children:"Cancel"})]})]})]}),e.jsxs("div",{children:[e.jsx("label",{className:"block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-1",children:"Fee Type *"}),e.jsxs("div",{className:"grid grid-cols-2 gap-3",children:[e.jsx("button",{type:"button",onClick:()=>ge({target:{value:"non_monthly"}}),className:`px-4 py-2 rounded-lg font-semibold transition ${r.feeType==="non_monthly"?"bg-blue-600 text-white":"bg-gray-200 dark:bg-gray-600 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-500"}`,children:"One-time / Fixed Fee"}),e.jsx("button",{type:"button",onClick:()=>ge({target:{value:"monthly"}}),className:`px-4 py-2 rounded-lg font-semibold transition ${r.feeType==="monthly"?"bg-blue-600 text-white":"bg-gray-200 dark:bg-gray-600 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-500"}`,children:"Monthly Fee"})]})]}),r.feeType==="monthly"?e.jsxs(e.Fragment,{children:[e.jsxs("div",{children:[e.jsx("label",{className:"block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-1",children:"Monthly Fee Amount (₹) *"}),e.jsx("input",{type:"number",name:"monthlyFeeAmount",value:r.monthlyFeeAmount,onChange:x,className:"w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-white transition",placeholder:"Enter monthly fee amount",required:!0})]}),e.jsxs("div",{children:[e.jsx("label",{className:"block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-1",children:"Course Period (Monthly) *"}),e.jsxs("div",{className:"grid grid-cols-2 gap-3",children:[e.jsxs("div",{children:[e.jsx("label",{className:"block text-xs text-gray-500 dark:text-gray-400 mb-1",children:"From"}),e.jsx("input",{type:"month",name:"periodFrom",value:r.periodFrom,onChange:x,className:"w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-white transition text-sm",required:!0})]}),e.jsxs("div",{children:[e.jsx("label",{className:"block text-xs text-gray-500 dark:text-gray-400 mb-1",children:"To"}),e.jsx("input",{type:"month",name:"periodTo",value:r.periodTo,onChange:x,className:"w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-white transition text-sm",required:!0})]})]}),r.periodFrom&&r.periodTo&&r.monthlyFeeAmount&&e.jsx("div",{className:"mt-2 p-2 bg-blue-50 dark:bg-blue-900/20 rounded-lg",children:e.jsxs("p",{className:"text-xs text-gray-600 dark:text-gray-300",children:["Total Months: ",e.jsx("strong",{children:C(r.periodFrom,r.periodTo)})," | Total Fees: ",e.jsxs("strong",{children:["₹ ",(C(r.periodFrom,r.periodTo)*(parseFloat(r.monthlyFeeAmount)||0)).toLocaleString("en-IN")]})]})})]})]}):e.jsxs("div",{children:[e.jsx("label",{className:"block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-1",children:"Total Fees Amount (₹) *"}),e.jsx("input",{type:"number",name:"feesPaid",value:r.feesPaid,onChange:x,className:"w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-white transition",placeholder:"Enter total fees amount",required:!0})]}),e.jsxs("div",{children:[e.jsx("label",{className:"block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-1",children:"Payment Date *"}),e.jsx("input",{type:"date",name:"paymentDate",value:r.paymentDate,onChange:x,className:"w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-white transition",required:!0})]}),e.jsxs("div",{children:[e.jsx("label",{className:"block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-1",children:"Payment Mode *"}),e.jsxs("select",{name:"paymentMode",value:r.paymentMode,onChange:x,className:"w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-white transition cursor-pointer",required:!0,children:[e.jsx("option",{value:"Cash",children:"💵 Cash"}),e.jsx("option",{value:"Online (UPI)",children:"📱 Online (UPI)"}),e.jsx("option",{value:"Online (Card)",children:"💳 Online (Card)"}),e.jsx("option",{value:"Online (Net Banking)",children:"🏦 Online (Net Banking)"}),e.jsx("option",{value:"Cheque",children:"📝 Cheque"})]})]}),e.jsx("button",{type:"submit",className:"w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-semibold py-2.5 rounded-lg transition duration-200 shadow-md hover:shadow-lg",children:"Generate Receipt →"})]})]}),e.jsxs("div",{className:"bg-white dark:bg-gray-800 rounded-2xl shadow-xl overflow-hidden flex flex-col",children:[e.jsxs("div",{className:"bg-gradient-to-r from-green-600 to-green-700 px-6 py-3 flex justify-between items-center flex-wrap gap-2",children:[e.jsxs("div",{children:[e.jsxs("h2",{className:"text-lg font-bold text-white flex items-center gap-2",children:[e.jsx("span",{children:"🧾"})," Receipt Preview"]}),e.jsx("p",{className:"text-green-100 text-xs mt-1",children:"Review before printing or saving"})]}),o&&e.jsxs("div",{className:"flex gap-2 flex-wrap",children:[e.jsx("button",{onClick:Ue,disabled:B,className:"flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white px-3 py-1.5 rounded-lg text-sm font-semibold shadow transition disabled:opacity-50 disabled:cursor-not-allowed",children:B?"⏳ Saving...":"📸 Save as JPG"}),e.jsx("button",{onClick:ze,disabled:B,className:"flex items-center gap-2 bg-purple-500 hover:bg-purple-600 text-white px-3 py-1.5 rounded-lg text-sm font-semibold shadow transition disabled:opacity-50 disabled:cursor-not-allowed",children:"🖼️ Save as PNG"}),e.jsx("button",{onClick:Me,disabled:ne,className:"flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white px-3 py-1.5 rounded-lg text-sm font-semibold shadow transition disabled:opacity-50 disabled:cursor-not-allowed",children:ne?"⏳ Sending...":"💬 Send to WhatsApp"}),e.jsx("button",{onClick:Le,className:"flex items-center gap-2 bg-white text-green-700 px-3 py-1.5 rounded-lg text-sm font-semibold shadow hover:shadow-lg transition",children:"🖨️ Print"})]})]}),e.jsx("div",{className:"p-5 flex-1 flex items-center justify-center overflow-auto",children:o?e.jsxs("div",{ref:le,className:"w-full max-w-sm mx-auto bg-white rounded-xl border-2 border-gray-200 shadow-lg overflow-visible relative",style:{backgroundColor:"#ffffff",width:"380px"},children:[e.jsx("div",{className:"absolute inset-0 flex items-center justify-center pointer-events-none opacity-10",children:e.jsx("img",{src:Y,alt:"Watermark",className:"w-48 h-auto transform rotate-[-25deg]",onError:t=>{t.target.style.display="none"}})}),e.jsx("div",{className:"absolute top-[60%] right-[40%] transform -translate-y-1/2 rotate-[-15deg] z-20 pointer-events-none",children:e.jsx("img",{src:V,alt:"Paid Stamp",className:"w-28 opacity-60"})}),e.jsxs("div",{className:"p-4 space-y-3 relative z-10",children:[e.jsxs("div",{className:"text-center border-b pb-3",children:[e.jsxs("div",{className:"flex items-center justify-center gap-2 mb-1",children:[e.jsx("img",{src:Y,alt:"Coder & AccoTax Logo",className:"h-8 w-auto",onError:t=>{t.target.style.display="none"}}),e.jsx("h3",{className:"text-lg font-bold text-blue-700",children:"Coder & AccoTax"})]}),e.jsx("p",{className:"text-[9px] text-gray-500 mt-1",children:"Fee Payment Receipt"})]}),e.jsxs("div",{className:"space-y-2 text-xs",children:[e.jsxs("div",{className:"flex justify-between items-center",children:[e.jsx("span",{className:"font-semibold text-gray-600",children:"Registration No:"}),e.jsx("span",{className:"text-gray-800 font-mono text-[10px]",children:o.registrationNumber||"N/A"})]}),e.jsxs("div",{className:"flex justify-between items-center",children:[e.jsx("span",{className:"font-semibold text-gray-600",children:"Receipt No:"}),e.jsx("span",{className:"text-gray-800 font-mono text-[10px]",children:o.receiptNo})]}),e.jsxs("div",{className:"flex justify-between",children:[e.jsx("span",{className:"font-semibold text-gray-600",children:"Date:"}),e.jsx("span",{className:"text-gray-700",children:o.paymentDate})]}),e.jsxs("div",{className:"flex justify-between",children:[e.jsx("span",{className:"font-semibold text-gray-600",children:"Mode:"}),e.jsxs("span",{className:"text-gray-700",children:[We," ",o.paymentMode]})]}),e.jsxs("div",{className:"border-t pt-2 mt-2",children:[e.jsxs("div",{className:"flex justify-between mb-1",children:[e.jsx("span",{className:"font-semibold text-gray-600",children:"Student:"}),e.jsx("span",{className:"text-gray-800 font-medium text-right",children:o.studentName})]}),e.jsxs("div",{className:"flex justify-between mb-1",children:[e.jsx("span",{className:"font-semibold text-gray-600",children:"Phone:"}),e.jsx("span",{className:"text-gray-700",children:o.phone})]}),e.jsxs("div",{className:"flex justify-between mb-1",children:[e.jsx("span",{className:"font-semibold text-gray-600",children:"Course:"}),e.jsx("span",{className:"text-gray-700 text-right",children:o.course})]}),o.period&&e.jsxs("div",{className:"flex justify-between mb-1",children:[e.jsx("span",{className:"font-semibold text-gray-600",children:"Period:"}),e.jsx("span",{className:"text-gray-700 text-right text-[9px]",children:o.period})]})]}),e.jsxs("div",{className:"bg-green-50 p-3 rounded-lg mt-2",children:[e.jsxs("div",{className:"flex justify-between items-center",children:[e.jsx("span",{className:"font-bold text-gray-700",children:"Amount Paid:"}),e.jsxs("span",{className:"font-bold text-green-600 text-base",children:["₹ ",parseFloat(o.feesPaid).toLocaleString("en-IN")]})]}),o.monthlyBreakdown&&e.jsx("div",{className:"text-[8px] text-gray-500 italic mt-1",children:o.monthlyBreakdown}),e.jsx("div",{className:"text-[8px] text-gray-500 italic mt-2 pt-1 border-t",children:Be})]}),e.jsxs("div",{className:"bg-gray-50 p-2 rounded-lg mt-2 text-center",children:[e.jsx("p",{className:"text-[8px] font-semibold text-gray-600",children:"💰 Collected By:"}),e.jsx("p",{className:"text-[9px] font-bold text-green-700",children:o.collectedBy||"System"}),e.jsx("p",{className:"text-[7px] text-gray-500",children:o.collectorDesignation||"Accounts Department"})]})]}),e.jsxs("div",{className:"text-center pt-3 border-t",children:[e.jsx("p",{className:"text-[8px] text-gray-400",children:"✓ Valid without signature"}),e.jsx("p",{className:"text-[7px] text-gray-400 mt-1",children:"25(10/A) Shibtala Road, Barrackpore, Kol-122"}),e.jsx("div",{className:"mt-2 pt-2 flex justify-center",children:e.jsx("img",{src:"https://quickchart.io/qr?text=upi://pay?pa=9432456083@upi&pn=Coder%20%26%20AccoTax&cu=INR",alt:"UPI QR Code",className:"w-16 h-16 mx-auto"})}),e.jsx("div",{className:"text-[6px] text-gray-400 mt-1",children:"UPI ID: 9432456083@upi"}),e.jsxs("div",{className:"mt-2 pt-1 border-t border-gray-100",children:[e.jsxs("p",{className:"text-[7px] text-gray-500",children:["📞 For any query: ",e.jsx("span",{className:"font-semibold text-gray-700",children:"7003756860"})]}),e.jsxs("p",{className:"text-[7px] text-gray-500 mt-0.5",children:["🌐 Visit us: ",e.jsx("span",{className:"font-semibold text-blue-600",children:"www.codernaccotax.co.in"})]})]}),e.jsx("p",{className:"text-[8px] text-blue-600 mt-2",children:"✨ Thank you! ✨"})]})]})]}):e.jsxs("div",{className:"flex flex-col items-center justify-center text-center p-6",children:[e.jsx("div",{className:"w-20 h-20 bg-gray-100 dark:bg-gray-700 rounded-full flex items-center justify-center mb-3",children:e.jsx("svg",{className:"w-10 h-10 text-gray-400",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:1.5,d:"M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"})})}),e.jsx("p",{className:"text-gray-500 dark:text-gray-400 font-medium text-sm",children:"No receipt generated yet"}),e.jsx("p",{className:"text-xs text-gray-400 mt-1",children:'Fill the form and click "Generate Receipt"'})]})})]})]})]})};export{st as default};
