import{r as l,j as e}from"./index-NACEEa8w.js";import{C as Q,p as X,t as at,a as rt}from"./index-Clk_rs8B.js";import{s as Pe}from"./studentService-CMhWakmQ.js";import{c as Fe}from"./courseService-CM7gDx3V.js";import{l as st}from"./loginService-Byapl26K.js";import{s as ot}from"./simpleFeesReceiptService-DJAIF06W.js";import"./api-Cgk0GMDb.js";const bt=()=>{const Te=()=>{const t=new Date,a=t.getFullYear(),s=String(t.getMonth()+1).padStart(2,"0"),o=String(t.getDate()).padStart(2,"0");return`${a}-${s}-${o}`},[m,Ae]=l.useState(null),[nt,Z]=l.useState(!0),[D,ee]=l.useState([]),[R,te]=l.useState(!1),[N,$]=l.useState(""),[I,ae]=l.useState(null),[it,C]=l.useState(""),[E,re]=l.useState([]),[_,se]=l.useState(!1),[q,oe]=l.useState(null),[j,M]=l.useState(""),[U,z]=l.useState(!1),[g,L]=l.useState({student_name:"",nickname:"",whatsapp:""}),[ne,ie]=l.useState(!1),[B,h]=l.useState(null),[W,O]=l.useState(!1),[v,G]=l.useState({courseCode:"",courseName:""}),[le,de]=l.useState(!1),[Y,b]=l.useState(null),[ce,pe]=l.useState(!1),[ue,k]=l.useState(null),[lt,dt]=l.useState(!1),[ct,pt]=l.useState(""),[r,x]=l.useState({studentName:"",phone:"",course:"",feeType:"non_monthly",monthlyFeeAmount:"",feesPaid:"",paymentDate:Te(),paymentMode:"Cash",periodFrom:"",periodTo:"",registrationNumber:""}),[n,De]=l.useState(null),[S,Re]=l.useState(!1),[V,P]=l.useState(!1),[me,ge]=l.useState(!1),xe=l.useRef(null),[$e,Ie]=l.useState(""),[Ee,_e]=l.useState(""),he=!1,qe=async()=>{Z(!0);try{const t=await st.currentUser();t&&t.status===!0&&t.data&&Ae(t.data)}catch(t){console.error("Error fetching current user:",t)}finally{Z(!1)}};l.useEffect(()=>{qe(),fe(),ye()},[]);const fe=async()=>{te(!0),ae(null);try{const t=await Pe.getAll();let a=[];t&&t.data&&Array.isArray(t.data)?a=t.data:Array.isArray(t)?a=t:t&&t.data&&t.data.data&&Array.isArray(t.data.data)&&(a=t.data.data),a.length>0&&(console.log("Student data structure:",a[0]),console.log("Available fields:",Object.keys(a[0]))),ee(a),a.length===0&&console.warn("No students found in database")}catch(t){console.error("Error fetching students:",t),ae("Failed to load students from database. Please try again later."),ee([])}finally{te(!1)}},ye=async()=>{se(!0),oe(null);try{const t=await Fe.getAll();let a=[];t&&t.status===!0&&Array.isArray(t.data)?a=t.data:Array.isArray(t)?a=t:t&&t.data&&Array.isArray(t.data)&&(a=t.data),re(a),a.length===0&&console.warn("No courses found in database")}catch(t){console.error("Error fetching courses:",t),oe("Failed to load courses from database. Please try again later."),re([])}finally{se(!1)}},be=()=>m?m.employee&&m.employee.employeeName?m.employee.employeeName:m.userName?m.userName:"Authorized Collector":"System",we=()=>m?m.employee&&m.employee.designation?m.employee.designation.name:m.userType&&m.userType.userTypeName?m.userType.userTypeName:"Accounts Department":"",H=t=>{const{name:a,value:s}=t.target;L(o=>({...o,[a]:s})),B&&h(null)},Me=async t=>{if(t.preventDefault(),!g.student_name.trim()){h("Student name is required");return}if(!g.whatsapp.trim()){h("WhatsApp number is required");return}if(!/^\d{10}$/.test(g.whatsapp)){h("Please enter a valid 10-digit WhatsApp number");return}ie(!0),h(null);try{const s={student_name:g.student_name.trim(),nickname:g.nickname.trim()||g.student_name.trim(),whatsapp:g.whatsapp.trim()},o=await Pe.createBasic(s);if(o&&o.status===!0){const i=o.data;await fe(),i&&i.id&&($(i.id.toString()),C(i.registrationNumber||""),x(p=>({...p,studentName:i.student_name||"",phone:i.whatsapp||"",registrationNumber:i.registrationNumber||""}))),L({student_name:"",nickname:"",whatsapp:""}),z(!1),alert(`Student "${i.student_name}" created successfully!
Registration Number: ${i.registrationNumber}`)}else h(o?.message||"Failed to create student")}catch(s){console.error("Error creating student:",s),h(s.response?.data?.message||"Failed to create student. Please try again.")}finally{ie(!1)}},ve=t=>{const{name:a,value:s}=t.target;G(o=>({...o,[a]:s})),Y&&b(null)},Ue=async t=>{if(t.preventDefault(),!v.courseCode.trim()){b("Course code is required");return}if(!v.courseName.trim()){b("Course name is required");return}de(!0),b(null);try{const a={courseCode:v.courseCode.trim().toUpperCase(),courseName:v.courseName.trim()},s=await Fe.createBasic(a);if(s&&s.status===!0){const o=s.data;await ye(),o&&o.id&&(M(o.id.toString()),x(i=>({...i,course:o.courseName||""}))),G({courseCode:"",courseName:""}),O(!1),alert(`Course "${o.courseName}" created successfully!
Course Code: ${o.courseCode}`)}else b(s?.message||"Failed to create course")}catch(a){console.error("Error creating course:",a),b(a.response?.data?.message||"Failed to create course. Please try again.")}finally{de(!1)}};l.useEffect(()=>{(async()=>{try{const s=await(await fetch(Q)).blob(),o=new FileReader;o.onloadend=()=>{Ie(o.result)},o.readAsDataURL(s);const p=await(await fetch(X)).blob(),c=new FileReader;c.onloadend=()=>{_e(c.result)},c.readAsDataURL(p)}catch(a){console.error("Error loading images:",a)}})()},[]);const ze=t=>{const a=t.target.value;if($(a),a){const s=D.find(o=>o.studentId===parseInt(a)||o.id===parseInt(a)||o.student_id===parseInt(a));if(s){const o=s.registrationNumber||s.reg_no||s.regNo||s.registration_no||"";C(o),x(i=>({...i,studentName:s.studentName||s.student_name||"",phone:s.whatsapp||s.phone1||s.phone||"",registrationNumber:o}))}}else C(""),x(s=>({...s,studentName:"",phone:"",registrationNumber:""}))},Le=t=>{const a=t.target.value;if(M(a),a){const s=E.find(o=>o.id===parseInt(a));s&&x(o=>({...o,course:s.courseName||""}))}else M(""),x(s=>({...s,course:""}))},Be=(t,a,s,o)=>{const i="CNAT",p=`${t.trim()}_${a}_${s}_${o}`,u=(Se=>{let w=0;for(let K=0;K<Se.length;K++){const tt=Se.charCodeAt(K);w=(w<<5)-w+tt,w=w&w}return Math.abs(w).toString(36).toUpperCase()})(p),d=new Date,T=d.getFullYear(),y=String(d.getMonth()+1).padStart(2,"0"),A=String(d.getDate()).padStart(2,"0"),Ze=`${T}${y}${A}`,et=u.substring(0,8);return`${i}-${Ze}-${et}`},f=t=>{const{name:a,value:s}=t.target;x(o=>({...o,[a]:s})),(a==="studentName"||a==="phone")&&($(""),C(""),x(o=>({...o,registrationNumber:""})))},F=(t,a)=>{if(!t||!a)return 0;const s=new Date(t),o=new Date(a),i=(o.getFullYear()-s.getFullYear())*12+(o.getMonth()-s.getMonth())+1;return i>0?i:0},Ne=t=>{const a=t.target.value;x(s=>({...s,feeType:a,feesPaid:"",periodFrom:"",periodTo:"",monthlyFeeAmount:""}))},We=()=>{if(r.feeType==="monthly"){const t=F(r.periodFrom,r.periodTo),a=parseFloat(r.monthlyFeeAmount)||0,s=t*a;x(o=>({...o,feesPaid:s.toString()}))}};l.useEffect(()=>{r.feeType==="monthly"&&r.periodFrom&&r.periodTo&&r.monthlyFeeAmount&&We()},[r.periodFrom,r.periodTo,r.monthlyFeeAmount,r.feeType]);const Oe=async t=>{if(!N)return k("Please select a student from the database"),!1;if(!j)return k("Please select a course from the database"),!1;pe(!0),k(null);try{const a={receipt_no:t,student_id:parseInt(N),course_id:parseInt(j),fee_type:r.feeType,amount_paid:parseFloat(r.feesPaid),monthly_fee_amount:r.feeType==="monthly"?parseFloat(r.monthlyFeeAmount):null,period_from:r.feeType==="monthly"&&r.periodFrom?r.periodFrom:null,period_to:r.feeType==="monthly"&&r.periodTo?r.periodTo:null,payment_date:r.paymentDate,payment_mode:r.paymentMode},s=await ot.create(a);return s&&s.status===!0?(console.log("Receipt saved to database:",s.data),!0):(k(s?.message||"Failed to save receipt to database"),!1)}catch(a){return console.error("Error saving receipt to database:",a),k(a.response?.data?.message||"Failed to save receipt. Please try again."),!1}finally{pe(!1)}},je=t=>{if(!t||isNaN(t))return"";if(t=Math.floor(t),t===0)return"Zero Only";const a=["","One","Two","Three","Four","Five","Six","Seven","Eight","Nine"],s=["","","Twenty","Thirty","Forty","Fifty","Sixty","Seventy","Eighty","Ninety"],o=["Ten","Eleven","Twelve","Thirteen","Fourteen","Fifteen","Sixteen","Seventeen","Eighteen","Nineteen"],i=d=>d===0?"":d<10?a[d]:d<20?o[d-10]:s[Math.floor(d/10)]+(d%10?" "+a[d%10]:""),p=d=>{if(d===0)return"";if(d<100)return i(d);const T=Math.floor(d/100),y=d%100;return a[T]+" Hundred"+(y?" and "+i(y):"")};let c="",u=t;if(u>=1e7){const d=Math.floor(u/1e7);c+=i(d)+" Crore",u%=1e7,u>0&&(c+=" ")}if(u>=1e5){const d=Math.floor(u/1e5);c+=i(d)+" Lakh",u%=1e5,u>0&&(c+=" ")}if(u>=1e3){const d=Math.floor(u/1e3);c+=p(d)+" Thousand",u%=1e3,u>0&&(c+=" ")}return u>0&&(c+=p(u)),c+" Only"},Ge=t=>t?new Date(t).toLocaleDateString("en-IN",{day:"2-digit",month:"long",year:"numeric"}):"",ke=t=>t?new Date(t).toLocaleDateString("en-IN",{month:"long",year:"numeric"}):"",Ce=t=>{switch(t){case"Cash":return"💵";case"Online (UPI)":return"📱";case"Online (Card)":return"💳";case"Online (Net Banking)":return"🏦";case"Cheque":return"📝";default:return"💰"}},J=async(t="jpeg")=>{const a=xe.current;if(!a)throw new Error("Receipt element not found");const s={overflow:a.style.overflow,width:a.style.width,position:a.style.position};a.style.overflow="visible",a.style.width="fit-content",a.style.position="relative";const o=a.scrollWidth,i=a.scrollHeight,p={quality:1,pixelRatio:3,backgroundColor:"#ffffff",cacheBust:!0,width:o,height:i,style:{margin:"0",padding:"0",transform:"none",overflow:"visible"},skipAutoScale:!1,preferDimensions:!0};let c;return t==="jpeg"?c=await at(a,p):c=await rt(a,p),a.style.overflow=s.overflow,a.style.width=s.width,a.style.position=s.position,c},Ye=async()=>{if(!n){alert("Please generate a receipt first");return}const t=r.phone;if(!t){alert("Student phone number is required to send via WhatsApp");return}let a=t.replace(/\D/g,"");a.length===10&&(a="91"+a),!a.startsWith("91")&&a.length===12&&(a=a.substring(0,2)==="91"?a:"91"+a),ge(!0);try{const s=await J("jpeg"),i=await(await fetch(s)).blob(),p=new File([i],`Receipt_${n.receiptNo}.jpg`,{type:"image/jpeg"}),c=`📄 *Fee Payment Receipt - Coder & AccoTax* 📄

👤 *Student:* ${n.studentName}
🆔 *Registration No:* ${n.registrationNumber||"N/A"}
📚 *Course:* ${n.course}
💰 *Amount Paid:* ₹${parseFloat(n.feesPaid).toLocaleString("en-IN")}/-
📅 *Date:* ${n.paymentDate}
🧾 *Receipt No:* ${n.receiptNo}
👨‍💼 *Collected By:* ${be()} (${we()})

Thank you for choosing Coder & AccoTax! ✨
For any queries, contact: +91 70037 56860`,u=encodeURIComponent(c),d=`https://wa.me/${a}?text=${u}`;if(window.open(d,"_blank"),window.confirm(`WhatsApp will open now. Please follow these steps:

1. The message text will be pre-filled
2. Click on the attachment (📎) icon
3. Select "Gallery" or "Document"
4. Choose the receipt image you want to send

Would you like to download the receipt image now to easily attach it?`)){const y=document.createElement("a"),A=`Receipt_${n.receiptNo}_${n.studentName.replace(/\s/g,"_")}.jpg`;y.download=A,y.href=s,y.click(),setTimeout(()=>{alert(`✅ Receipt saved as "${A}".

Please attach this image in WhatsApp to complete sending.`)},500)}}catch(s){console.error("Error sending to WhatsApp:",s),alert("Failed to send receipt via WhatsApp. Please try again or use the Save/Print options.")}finally{ge(!1)}},Ve=async()=>{if(!n){alert("Please generate a receipt first");return}P(!0);try{const t=await J("jpeg"),a=document.createElement("a"),s=`Receipt_${n.receiptNo}_${n.studentName.replace(/\s/g,"_")}.jpg`;a.download=s,a.href=t,a.click(),alert(`Receipt saved successfully as ${s}`)}catch(t){console.error("Error saving receipt as JPG:",t),alert("Failed to save receipt as JPG. Please try again.")}finally{P(!1)}},He=async()=>{if(!n){alert("Please generate a receipt first");return}P(!0);try{const t=await J("png"),a=document.createElement("a"),s=`Receipt_${n.receiptNo}_${n.studentName.replace(/\s/g,"_")}.png`;a.download=s,a.href=t,a.click(),alert(`Receipt saved successfully as ${s}`)}catch(t){console.error("Error saving receipt as PNG:",t),alert("Failed to save receipt as PNG. Please try again.")}finally{P(!1)}},Je=async t=>{if(t.preventDefault(),!r.studentName||!r.phone||!r.course||!r.paymentDate||!r.paymentMode){alert("Please fill in all required fields");return}if(r.feeType==="monthly"){if(!r.periodFrom||!r.periodTo||!r.monthlyFeeAmount){alert("Please fill in period details and monthly fee amount for monthly fee type");return}if(!r.feesPaid||parseFloat(r.feesPaid)<=0){alert("Please calculate total fees by selecting period and monthly amount");return}}else if(!r.feesPaid){alert("Please enter the total fees amount");return}if(!N&&!window.confirm(`Warning: This student is not saved in the database. Receipt will be generated but not saved to database.

To save receipts, please select a student from the dropdown or add a new student first.

Do you want to continue without saving to database?`)||!j&&!window.confirm(`Warning: This course is not saved in the database. Receipt will be generated but not saved to database.

To save receipts, please select a course from the dropdown or add a new course first.

Do you want to continue without saving to database?`))return;let a="",s="";if(r.feeType==="monthly"&&r.periodFrom&&r.periodTo){const i=F(r.periodFrom,r.periodTo),p=parseFloat(r.monthlyFeeAmount);a=`${ke(r.periodFrom)} to ${ke(r.periodTo)}`,s=` (${i} months × ₹${p.toLocaleString("en-IN")} = ₹${(i*p).toLocaleString("en-IN")})`}const o=Be(r.studentName,r.course,r.paymentDate,r.feesPaid);if(De({studentName:r.studentName,phone:r.phone,course:r.course,feeType:r.feeType,feesPaid:r.feesPaid,monthlyFeeAmount:r.monthlyFeeAmount,paymentDate:Ge(r.paymentDate),paymentMode:r.paymentMode,period:a,monthlyBreakdown:s,receiptNo:o,registrationNumber:r.registrationNumber,collectedBy:be(),collectorDesignation:we()}),N&&j){const i=await Oe(o);alert(i?"✓ Receipt generated and saved to database successfully!":"⚠️ Receipt generated but failed to save to database. You can still save/print the receipt.")}},Ke=()=>{if(!n){alert("Please generate a receipt first");return}const t=window.open("","_blank","width=800,height=600");if(!t){alert("Please allow pop-ups to print the receipt");return}const a=je(parseFloat(n.feesPaid)),s=parseFloat(n.feesPaid).toLocaleString("en-IN"),o=Ce(n.paymentMode),i=new Date().toLocaleString("en-IN",{day:"2-digit",month:"2-digit",year:"numeric",hour:"2-digit",minute:"2-digit",hour12:!0}),p=$e||"/assets/cnat.png",c=Ee||X;t.document.write(`
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
            <div class="watermark-container">
              <img src="${p}" alt="Watermark" class="watermark-image" />
            </div>
            
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
                  <div class="info-value">${n.registrationNumber||"N/A"}</div>
                </div>
                <div class="info-item">
                  <div class="info-label">Receipt No.</div>
                  <div class="info-value">${n.receiptNo}</div>
                </div>
                <div class="info-item">
                  <div class="info-label">Payment Date</div>
                  <div class="info-value">${n.paymentDate}</div>
                </div>
                <div class="info-item">
                  <div class="info-label">Payment Mode</div>
                  <div class="info-value">${o} ${n.paymentMode}</div>
                </div>
              </div>

              <div class="details-section">
                <div class="section-title">Student & Course Details</div>
                <table class="details-table">
                  <tr>
                    <td>Student Name</td>
                    <td>${n.studentName}</td>
                  </tr>
                  <tr>
                    <td>Phone Number</td>
                    <td>${n.phone}</td>
                  </tr>
                  <tr>
                    <td>Course Enrolled</td>
                    <td>${n.course}</td>
                  </tr>
                  ${n.period?`
                  <tr>
                    <td>Course Period</td>
                    <td>${n.period}</td>
                  </tr>
                  `:""}
                </table>
              </div>

              <div class="fee-section">
                <div class="fee-row">
                  <span class="fee-label">Course Fees</span>
                  <span class="fee-amount">₹ ${s}/-</span>
                </div>
                ${n.monthlyBreakdown?`
                <div class="fee-breakdown">
                  ${n.monthlyBreakdown}
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

              <div class="qr-section">
                <div class="qr-info">
                  <div class="qr-title">📱 Pay Online via UPI</div>
                  <div class="qr-text">Scan QR code to make payment</div>
                  <div class="qr-text">Any UPI App (Google Pay, PhonePe, Paytm)</div>
                  <div class="upi-id">UPI ID: 9432456083@upi</div>
                </div>
                <div class="qr-code">
                  <img src="https://quickchart.io/qr?text=upi://pay?pa=9432456083@upi&pn=Coder%20%26%20AccoTax&cu=INR&am=${parseFloat(n.feesPaid)}" alt="UPI QR Code" style="width: 70px; height: 70px;" />
                </div>
              </div>

              <div class="collector-info">
                <span class="collector-label">💰 Collected By:</span> ${n.collectedBy||"System"} 
                <span style="color: #6b7280;">|</span> 
                <span class="collector-label">📋 Designation:</span> ${n.collectorDesignation||"Accounts Department"}
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
  `),t.document.close()};l.useEffect(()=>{S?document.documentElement.classList.add("dark"):document.documentElement.classList.remove("dark")},[S]);const Qe=n?je(parseFloat(n.feesPaid)):"",Xe=n?Ce(n.paymentMode):"";return e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 transition-colors duration-300 p-4",children:[e.jsxs("div",{className:"flex justify-end mb-4 max-w-6xl mx-auto gap-2",children:[e.jsx("button",{onClick:()=>Re(!S),className:"flex items-center gap-2 px-4 py-2 rounded-full bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-200 shadow-md hover:shadow-lg transition border border-gray-200 dark:border-gray-600 text-sm",children:S?e.jsxs(e.Fragment,{children:[e.jsx("span",{children:"☀️"})," Light Mode"]}):e.jsxs(e.Fragment,{children:[e.jsx("span",{children:"🌙"})," Dark Mode"]})}),he]}),e.jsxs("div",{className:"max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-6",children:[e.jsxs("div",{className:"bg-white dark:bg-gray-800 rounded-2xl shadow-xl overflow-hidden",children:[e.jsxs("div",{className:"bg-gradient-to-r from-blue-600 to-blue-700 px-6 py-3",children:[e.jsxs("h2",{className:"text-lg font-bold text-white flex items-center gap-2",children:[e.jsx("span",{children:"📝"})," Student Fee Payment Form"]}),e.jsx("p",{className:"text-blue-100 text-xs mt-1",children:"Enter payment details to generate receipt"})]}),e.jsxs("form",{onSubmit:Je,className:"p-5 space-y-4",children:[e.jsxs("div",{children:[e.jsxs("div",{className:"flex justify-between items-center mb-1",children:[e.jsx("label",{className:"block text-sm font-semibold text-gray-700 dark:text-gray-300",children:"Select Student (Required for saving)"}),e.jsx("button",{type:"button",onClick:()=>z(!U),className:"text-xs text-blue-600 dark:text-blue-400 hover:text-blue-700 font-semibold",children:U?"− Cancel":"+ Add New Student"})]}),e.jsxs("select",{value:N,onChange:ze,className:"w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-white transition cursor-pointer",disabled:R,children:[e.jsx("option",{value:"",children:"-- Select from database --"}),D.map(t=>{const a=t.registrationNumber||t.reg_no||t.regNo||t.registration_no||"No Reg No",s=t.studentId||t.id||t.student_id,o=t.studentName||t.student_name,i=t.whatsapp||t.phone1||t.phone;return e.jsxs("option",{value:s,children:[o," - ",a," - ",i]},s)})]}),R&&e.jsx("p",{className:"text-xs text-gray-500 mt-1",children:"Loading students..."}),I&&e.jsx("p",{className:"text-xs text-red-600 mt-1",children:I}),D.length===0&&!R&&!I&&e.jsx("p",{className:"text-xs text-yellow-600 mt-1",children:"No students found in database"})]}),U&&e.jsxs("div",{className:"border-2 border-blue-200 dark:border-blue-800 rounded-lg p-4 bg-blue-50 dark:bg-blue-900/20",children:[e.jsx("h3",{className:"text-sm font-bold text-blue-700 dark:text-blue-300 mb-3",children:"Add New Student"}),e.jsxs("div",{className:"space-y-3",children:[e.jsxs("div",{children:[e.jsx("label",{className:"block text-xs font-semibold text-gray-700 dark:text-gray-300 mb-1",children:"Student Name *"}),e.jsx("input",{type:"text",name:"student_name",value:g.student_name,onChange:H,className:"w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-white transition text-sm",placeholder:"Enter full name"})]}),e.jsxs("div",{children:[e.jsx("label",{className:"block text-xs font-semibold text-gray-700 dark:text-gray-300 mb-1",children:"Nickname (Optional)"}),e.jsx("input",{type:"text",name:"nickname",value:g.nickname,onChange:H,className:"w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-white transition text-sm",placeholder:"e.g., Kaustav class 5"})]}),e.jsxs("div",{children:[e.jsx("label",{className:"block text-xs font-semibold text-gray-700 dark:text-gray-300 mb-1",children:"WhatsApp Number *"}),e.jsx("input",{type:"tel",name:"whatsapp",value:g.whatsapp,onChange:H,className:"w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-white transition text-sm",placeholder:"10-digit mobile number"})]}),B&&e.jsx("p",{className:"text-xs text-red-600 mt-1",children:B}),e.jsxs("div",{className:"flex gap-2",children:[e.jsx("button",{type:"button",onClick:Me,disabled:ne,className:"flex-1 bg-green-600 hover:bg-green-700 text-white font-semibold py-2 rounded-lg transition disabled:opacity-50 disabled:cursor-not-allowed text-sm",children:ne?"Creating...":"Create Student"}),e.jsx("button",{type:"button",onClick:()=>{z(!1),L({student_name:"",nickname:"",whatsapp:""}),h(null)},className:"px-4 py-2 bg-gray-300 dark:bg-gray-600 text-gray-700 dark:text-gray-200 rounded-lg hover:bg-gray-400 transition text-sm",children:"Cancel"})]})]})]}),e.jsx("div",{className:"border-t border-gray-200 dark:border-gray-700 pt-3",children:e.jsx("p",{className:"text-xs text-gray-500 dark:text-gray-400 mb-2 text-center",children:"OR Enter Manually"})}),e.jsxs("div",{children:[e.jsx("label",{className:"block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-1",children:"Student Full Name *"}),e.jsx("input",{type:"text",name:"studentName",value:r.studentName,onChange:f,className:"w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-white transition",placeholder:"Enter student name",required:!0})]}),e.jsxs("div",{children:[e.jsx("label",{className:"block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-1",children:"Phone Number *"}),e.jsx("input",{type:"tel",name:"phone",value:r.phone,onChange:f,className:"w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-white transition",placeholder:"10-digit mobile number",required:!0})]}),e.jsxs("div",{children:[e.jsxs("div",{className:"flex justify-between items-center mb-1",children:[e.jsx("label",{className:"block text-sm font-semibold text-gray-700 dark:text-gray-300",children:"Course Name (Required for saving) *"}),e.jsx("button",{type:"button",onClick:()=>O(!W),className:"text-xs text-blue-600 dark:text-blue-400 hover:text-blue-700 font-semibold",children:W?"− Cancel":"+ Add New Course"})]}),e.jsxs("select",{name:"course",value:j,onChange:Le,className:"w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-white transition cursor-pointer",required:!0,disabled:_,children:[e.jsx("option",{value:"",children:"Select a course"}),E.map(t=>e.jsxs("option",{value:t.id,children:[t.courseCode," - ",t.courseName]},t.id))]}),_&&e.jsx("p",{className:"text-xs text-gray-500 mt-1",children:"Loading courses..."}),q&&e.jsx("p",{className:"text-xs text-red-600 mt-1",children:q}),E.length===0&&!_&&!q&&e.jsx("p",{className:"text-xs text-yellow-600 mt-1",children:"No courses found in database"})]}),W&&e.jsxs("div",{className:"border-2 border-purple-200 dark:border-purple-800 rounded-lg p-4 bg-purple-50 dark:bg-purple-900/20",children:[e.jsx("h3",{className:"text-sm font-bold text-purple-700 dark:text-purple-300 mb-3",children:"Add New Course"}),e.jsxs("div",{className:"space-y-3",children:[e.jsxs("div",{children:[e.jsx("label",{className:"block text-xs font-semibold text-gray-700 dark:text-gray-300 mb-1",children:"Course Code *"}),e.jsx("input",{type:"text",name:"courseCode",value:v.courseCode,onChange:ve,className:"w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-purple-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-white transition text-sm",placeholder:"e.g., REACT01, PYTHON01"}),e.jsx("p",{className:"text-xs text-gray-500 mt-1",children:"Unique course identifier (will be converted to uppercase)"})]}),e.jsxs("div",{children:[e.jsx("label",{className:"block text-xs font-semibold text-gray-700 dark:text-gray-300 mb-1",children:"Course Name *"}),e.jsx("input",{type:"text",name:"courseName",value:v.courseName,onChange:ve,className:"w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-purple-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-white transition text-sm",placeholder:"e.g., React Development, Python Programming"})]}),Y&&e.jsx("p",{className:"text-xs text-red-600 mt-1",children:Y}),e.jsxs("div",{className:"flex gap-2",children:[e.jsx("button",{type:"button",onClick:Ue,disabled:le,className:"flex-1 bg-purple-600 hover:bg-purple-700 text-white font-semibold py-2 rounded-lg transition disabled:opacity-50 disabled:cursor-not-allowed text-sm",children:le?"Creating...":"Create Course"}),e.jsx("button",{type:"button",onClick:()=>{O(!1),G({courseCode:"",courseName:""}),b(null)},className:"px-4 py-2 bg-gray-300 dark:bg-gray-600 text-gray-700 dark:text-gray-200 rounded-lg hover:bg-gray-400 transition text-sm",children:"Cancel"})]})]})]}),e.jsxs("div",{children:[e.jsx("label",{className:"block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-1",children:"Fee Type *"}),e.jsxs("div",{className:"grid grid-cols-2 gap-3",children:[e.jsx("button",{type:"button",onClick:()=>Ne({target:{value:"non_monthly"}}),className:`px-4 py-2 rounded-lg font-semibold transition ${r.feeType==="non_monthly"?"bg-blue-600 text-white":"bg-gray-200 dark:bg-gray-600 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-500"}`,children:"One-time / Fixed Fee"}),e.jsx("button",{type:"button",onClick:()=>Ne({target:{value:"monthly"}}),className:`px-4 py-2 rounded-lg font-semibold transition ${r.feeType==="monthly"?"bg-blue-600 text-white":"bg-gray-200 dark:bg-gray-600 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-500"}`,children:"Monthly Fee"})]})]}),r.feeType==="monthly"?e.jsxs(e.Fragment,{children:[e.jsxs("div",{children:[e.jsx("label",{className:"block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-1",children:"Monthly Fee Amount (₹) *"}),e.jsx("input",{type:"number",name:"monthlyFeeAmount",value:r.monthlyFeeAmount,onChange:f,className:"w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-white transition",placeholder:"Enter monthly fee amount",required:!0})]}),e.jsxs("div",{children:[e.jsx("label",{className:"block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-1",children:"Course Period (Monthly) *"}),e.jsxs("div",{className:"grid grid-cols-2 gap-3",children:[e.jsxs("div",{children:[e.jsx("label",{className:"block text-xs text-gray-500 dark:text-gray-400 mb-1",children:"From"}),e.jsx("input",{type:"month",name:"periodFrom",value:r.periodFrom,onChange:f,className:"w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-white transition text-sm",required:!0})]}),e.jsxs("div",{children:[e.jsx("label",{className:"block text-xs text-gray-500 dark:text-gray-400 mb-1",children:"To"}),e.jsx("input",{type:"month",name:"periodTo",value:r.periodTo,onChange:f,className:"w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-white transition text-sm",required:!0})]})]}),r.periodFrom&&r.periodTo&&r.monthlyFeeAmount&&e.jsx("div",{className:"mt-2 p-2 bg-blue-50 dark:bg-blue-900/20 rounded-lg",children:e.jsxs("p",{className:"text-xs text-gray-600 dark:text-gray-300",children:["Total Months: ",e.jsx("strong",{children:F(r.periodFrom,r.periodTo)})," | Total Fees: ",e.jsxs("strong",{children:["₹ ",(F(r.periodFrom,r.periodTo)*(parseFloat(r.monthlyFeeAmount)||0)).toLocaleString("en-IN")]})]})})]})]}):e.jsxs("div",{children:[e.jsx("label",{className:"block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-1",children:"Total Fees Amount (₹) *"}),e.jsx("input",{type:"number",name:"feesPaid",value:r.feesPaid,onChange:f,className:"w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-white transition",placeholder:"Enter total fees amount",required:!0})]}),e.jsxs("div",{children:[e.jsx("label",{className:"block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-1",children:"Payment Date *"}),e.jsx("input",{type:"date",name:"paymentDate",value:r.paymentDate,onChange:f,className:"w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-white transition",required:!0})]}),e.jsxs("div",{children:[e.jsx("label",{className:"block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-1",children:"Payment Mode *"}),e.jsxs("select",{name:"paymentMode",value:r.paymentMode,onChange:f,className:"w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-white transition cursor-pointer",required:!0,children:[e.jsx("option",{value:"Cash",children:"💵 Cash"}),e.jsx("option",{value:"Online (UPI)",children:"📱 Online (UPI)"}),e.jsx("option",{value:"Online (Card)",children:"💳 Online (Card)"}),e.jsx("option",{value:"Online (Net Banking)",children:"🏦 Online (Net Banking)"}),e.jsx("option",{value:"Cheque",children:"📝 Cheque"})]})]}),e.jsx("button",{type:"submit",disabled:ce,className:"w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-semibold py-2.5 rounded-lg transition duration-200 shadow-md hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed",children:ce?"Saving to Database...":"Generate Receipt →"}),ue&&e.jsx("p",{className:"text-xs text-red-600 mt-1 text-center",children:ue})]})]}),e.jsxs("div",{className:"bg-white dark:bg-gray-800 rounded-2xl shadow-xl overflow-hidden flex flex-col",children:[e.jsxs("div",{className:"bg-gradient-to-r from-green-600 to-green-700 px-6 py-3 flex justify-between items-center flex-wrap gap-2",children:[e.jsxs("div",{children:[e.jsxs("h2",{className:"text-lg font-bold text-white flex items-center gap-2",children:[e.jsx("span",{children:"🧾"})," Receipt Preview"]}),e.jsx("p",{className:"text-green-100 text-xs mt-1",children:"Review before printing or saving"})]}),n&&e.jsxs("div",{className:"flex gap-2 flex-wrap",children:[e.jsx("button",{onClick:Ve,disabled:V,className:"flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white px-3 py-1.5 rounded-lg text-sm font-semibold shadow transition disabled:opacity-50 disabled:cursor-not-allowed",children:V?"⏳ Saving...":"📸 Save as JPG"}),e.jsx("button",{onClick:He,disabled:V,className:"flex items-center gap-2 bg-purple-500 hover:bg-purple-600 text-white px-3 py-1.5 rounded-lg text-sm font-semibold shadow transition disabled:opacity-50 disabled:cursor-not-allowed",children:"🖼️ Save as PNG"}),e.jsx("button",{onClick:Ye,disabled:me,className:"flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white px-3 py-1.5 rounded-lg text-sm font-semibold shadow transition disabled:opacity-50 disabled:cursor-not-allowed",children:me?"⏳ Sending...":"💬 Send to WhatsApp"}),e.jsx("button",{onClick:Ke,className:"flex items-center gap-2 bg-white text-green-700 px-3 py-1.5 rounded-lg text-sm font-semibold shadow hover:shadow-lg transition",children:"🖨️ Print"})]})]}),e.jsx("div",{className:"p-5 flex-1 flex items-center justify-center overflow-auto",children:n?e.jsxs("div",{ref:xe,className:"w-full max-w-sm mx-auto bg-white rounded-xl border-2 border-gray-200 shadow-lg overflow-visible relative",style:{backgroundColor:"#ffffff",width:"380px"},children:[e.jsx("div",{className:"absolute inset-0 flex items-center justify-center pointer-events-none opacity-10",children:e.jsx("img",{src:Q,alt:"Watermark",className:"w-48 h-auto transform rotate-[-25deg]",onError:t=>{t.target.style.display="none"}})}),e.jsx("div",{className:"absolute top-[60%] right-[40%] transform -translate-y-1/2 rotate-[-15deg] z-20 pointer-events-none",children:e.jsx("img",{src:X,alt:"Paid Stamp",className:"w-28 opacity-60"})}),e.jsxs("div",{className:"p-4 space-y-3 relative z-10",children:[e.jsxs("div",{className:"text-center border-b pb-3",children:[e.jsxs("div",{className:"flex items-center justify-center gap-2 mb-1",children:[e.jsx("img",{src:Q,alt:"Coder & AccoTax Logo",className:"h-8 w-auto",onError:t=>{t.target.style.display="none"}}),e.jsx("h3",{className:"text-lg font-bold text-blue-700",children:"Coder & AccoTax"})]}),e.jsx("p",{className:"text-[9px] text-gray-500 mt-1",children:"Fee Payment Receipt"})]}),e.jsxs("div",{className:"space-y-2 text-xs",children:[e.jsxs("div",{className:"flex justify-between items-center",children:[e.jsx("span",{className:"font-semibold text-gray-600",children:"Registration No:"}),e.jsx("span",{className:"text-gray-800 font-mono text-[10px]",children:n.registrationNumber||"N/A"})]}),e.jsxs("div",{className:"flex justify-between items-center",children:[e.jsx("span",{className:"font-semibold text-gray-600",children:"Receipt No:"}),e.jsx("span",{className:"text-gray-800 font-mono text-[10px]",children:n.receiptNo})]}),e.jsxs("div",{className:"flex justify-between",children:[e.jsx("span",{className:"font-semibold text-gray-600",children:"Date:"}),e.jsx("span",{className:"text-gray-700",children:n.paymentDate})]}),e.jsxs("div",{className:"flex justify-between",children:[e.jsx("span",{className:"font-semibold text-gray-600",children:"Mode:"}),e.jsxs("span",{className:"text-gray-700",children:[Xe," ",n.paymentMode]})]}),e.jsxs("div",{className:"border-t pt-2 mt-2",children:[e.jsxs("div",{className:"flex justify-between mb-1",children:[e.jsx("span",{className:"font-semibold text-gray-600",children:"Student:"}),e.jsx("span",{className:"text-gray-800 font-medium text-right",children:n.studentName})]}),e.jsxs("div",{className:"flex justify-between mb-1",children:[e.jsx("span",{className:"font-semibold text-gray-600",children:"Phone:"}),e.jsx("span",{className:"text-gray-700",children:n.phone})]}),e.jsxs("div",{className:"flex justify-between mb-1",children:[e.jsx("span",{className:"font-semibold text-gray-600",children:"Course:"}),e.jsx("span",{className:"text-gray-700 text-right",children:n.course})]}),n.period&&e.jsxs("div",{className:"flex justify-between mb-1",children:[e.jsx("span",{className:"font-semibold text-gray-600",children:"Period:"}),e.jsx("span",{className:"text-gray-700 text-right text-[9px]",children:n.period})]})]}),e.jsxs("div",{className:"bg-green-50 p-3 rounded-lg mt-2",children:[e.jsxs("div",{className:"flex justify-between items-center",children:[e.jsx("span",{className:"font-bold text-gray-700",children:"Amount Paid:"}),e.jsxs("span",{className:"font-bold text-green-600 text-base",children:["₹ ",parseFloat(n.feesPaid).toLocaleString("en-IN")]})]}),n.monthlyBreakdown&&e.jsx("div",{className:"text-[8px] text-gray-500 italic mt-1",children:n.monthlyBreakdown}),e.jsx("div",{className:"text-[8px] text-gray-500 italic mt-2 pt-1 border-t",children:Qe})]}),e.jsxs("div",{className:"bg-gray-50 p-2 rounded-lg mt-2 text-center",children:[e.jsx("p",{className:"text-[8px] font-semibold text-gray-600",children:"💰 Collected By:"}),e.jsx("p",{className:"text-[9px] font-bold text-green-700",children:n.collectedBy||"System"}),e.jsx("p",{className:"text-[7px] text-gray-500",children:n.collectorDesignation||"Accounts Department"})]})]}),e.jsxs("div",{className:"text-center pt-3 border-t",children:[e.jsx("p",{className:"text-[8px] text-gray-400",children:"✓ Valid without signature"}),e.jsx("p",{className:"text-[7px] text-gray-400 mt-1",children:"25(10/A) Shibtala Road, Barrackpore, Kol-122"}),e.jsx("div",{className:"mt-2 pt-2 flex justify-center",children:e.jsx("img",{src:"https://quickchart.io/qr?text=upi://pay?pa=9432456083@upi&pn=Coder%20%26%20AccoTax&cu=INR",alt:"UPI QR Code",className:"w-16 h-16 mx-auto"})}),e.jsx("div",{className:"text-[6px] text-gray-400 mt-1",children:"UPI ID: 9432456083@upi"}),e.jsxs("div",{className:"mt-2 pt-1 border-t border-gray-100",children:[e.jsxs("p",{className:"text-[7px] text-gray-500",children:["📞 For any query: ",e.jsx("span",{className:"font-semibold text-gray-700",children:"7003756860"})]}),e.jsxs("p",{className:"text-[7px] text-gray-500 mt-0.5",children:["🌐 Visit us: ",e.jsx("span",{className:"font-semibold text-blue-600",children:"www.codernaccotax.co.in"})]})]}),e.jsx("p",{className:"text-[8px] text-blue-600 mt-2",children:"✨ Thank you! ✨"})]})]})]}):e.jsxs("div",{className:"flex flex-col items-center justify-center text-center p-6",children:[e.jsx("div",{className:"w-20 h-20 bg-gray-100 dark:bg-gray-700 rounded-full flex items-center justify-center mb-3",children:e.jsx("svg",{className:"w-10 h-10 text-gray-400",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:1.5,d:"M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"})})}),e.jsx("p",{className:"text-gray-500 dark:text-gray-400 font-medium text-sm",children:"No receipt generated yet"}),e.jsx("p",{className:"text-xs text-gray-400 mt-1",children:'Fill the form and click "Generate Receipt"'})]})})]})]})]}),he]})};export{bt as default};
