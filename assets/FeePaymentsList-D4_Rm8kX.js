import{b as x,j as e,bc as g}from"./vendor-react-core-Doz9nIC6.js";import{u as B,a as es,F as ts,w as ss}from"./vendor-docs-By7GS1Id.js";import{a as as,b as ns,t as os}from"./vendor-canvas-e-rorcri.js";import{a as O}from"./api-B-LR1TGi.js";import{l as rs}from"./loginService-DYJy04Cj.js";import{s as ls}from"./studentService-Cj8fG_Mh.js";import{c as pe}from"./index-CZzL3g5v.js";import{p as ye}from"./paid-stamp-DDbnMIS8.js";import{L as Nt}from"./vendor-router-T2HtTMgF.js";import{b$ as ze,bG as yt,B as K,b9 as Z,D as jt,h as ue,R as ee,c0 as Be,C as We,F as je,n as ve,a3 as W,g as is,M as V,_ as Ve,S as ds,H as we,c1 as cs,aY as xs,O as ms,V as ps}from"./vendor-icons-CH1iX9C8.js";import{A as Ce,m as he}from"./vendor-motion-BDzTVADj.js";import"./vendor-katex-CEAnkW6r.js";import"./vendor-mermaid-B6Rp7zrY.js";import"./vendor-diagrams-iGm-tyJD.js";import"./vendor-prism-ZrEUZN6d.js";const ke="/assets/CNAT_QR-DbQJp68-.jpeg";function Ls(){const[R,vt]=x.useState([]),[Se,qe]=x.useState(!0),[q,De]=x.useState(""),[H,L]=x.useState("ALL"),[Y,A]=x.useState("ALL"),[Pe,wt]=x.useState("date"),[be,Ct]=x.useState("desc"),[N,M]=x.useState("ALL"),[c,fe]=x.useState(null),[kt,He]=x.useState(null),[T,Ye]=x.useState(null),[ge,St]=x.useState(""),[Le,Dt]=x.useState(""),[Ae,Pt]=x.useState(""),[Qe,Ge]=x.useState(!1),[Je,Xe]=x.useState(!1),te=x.useRef(null),[Lt,se]=x.useState(!1),[_,Ne]=x.useState([]),[Ke,ae]=x.useState(!1),[y,de]=x.useState(null),[ne,E]=x.useState(""),[Ze,At]=x.useState("Cash"),[et,Mt]=x.useState(new Date().toISOString().split("T")[0]),[tt,st]=x.useState(!1),[Me,at]=x.useState(""),[p,$t]=x.useState(null),[nt,ot]=x.useState(!1),[It,$e]=x.useState(!1),[Tt,Ie]=x.useState(!1),[F,Te]=x.useState(""),[Ft,oe]=x.useState(!1),[Fe,rt]=x.useState(!1),[D,_t]=x.useState({summary:{},students:[],enrollments:[]}),[ce,lt]=x.useState("STUDENT"),[w,re]=x.useState("DUES_ONLY"),[U,it]=x.useState(""),[Rt,dt]=x.useState({}),Q=x.useMemo(()=>{if(!F.trim())return _;const t=F.trim().toLowerCase(),s=t.replace(/^#/,"");return _.filter(a=>{const o=(a.student?.studentName||a.student?.student_name||"").toLowerCase(),l=(a.admissionNumber||"").toLowerCase(),n=(a.student?.registrationNumber||a.student?.registration_number||"").toLowerCase(),i=(a.student?.whatsapp||a.student?.phone1||"").toLowerCase(),r=(a.course?.courseName||a.course?.course_name||"").toLowerCase(),d=(a.course?.courseCode||a.course?.course_code||"").toLowerCase(),b=String(a.admissionId||a.id||"");return b===s||b.includes(s)||l.includes(t)||n.includes(t)||o.includes(t)||i.includes(t)||r.includes(t)||d.includes(t)})},[_,F]);x.useEffect(()=>{(async()=>{try{const a=await(await fetch(pe)).blob(),o=new FileReader;o.onloadend=()=>St(o.result),o.readAsDataURL(a);const n=await(await fetch(ye)).blob(),i=new FileReader;i.onloadend=()=>Dt(i.result),i.readAsDataURL(n);const d=await(await fetch(ke)).blob(),b=new FileReader;b.onloadend=()=>Pt(b.result),b.readAsDataURL(d)}catch(s){console.error("Error pre-loading voucher images:",s)}})()},[]),x.useEffect(()=>{(async()=>{try{const s=await rs.currentUser();s?.status&&s.data&&Ye(s.data)}catch{try{const s=localStorage.getItem("user");s&&Ye(JSON.parse(s))}catch{}}})()},[]);const _e=async()=>{qe(!0);try{const t=await O.get("/fees-receipts");let s=[];t.data?.status&&Array.isArray(t.data.data)||Array.isArray(t.data?.data)?s=t.data.data:Array.isArray(t.data)&&(s=t.data),vt(s)}catch(t){console.error("Error loading fee receipts:",t),g.fire({icon:"error",title:"Failed to Load Payments",text:t.response?.data?.message||"Could not retrieve fee receipts from server.",background:"#0f172a",color:"#f8fafc",confirmButtonColor:"#2563eb"})}finally{qe(!1)}};x.useEffect(()=>{_e()},[]);const G=x.useMemo(()=>R.filter(t=>{if(N==="MONTHLY"){if((t.feeType||t.fee_type||"").toLowerCase()!=="monthly")return!1}else if(N==="NON_MONTHLY"){if((t.feeType||t.fee_type||"").toLowerCase()==="monthly")return!1}else if(N==="CASH"){if((t.paymentMode||t.payment_mode||"").toLowerCase()!=="cash")return!1}else if(N==="UPI"){const a=(t.paymentMode||t.payment_mode||"").toLowerCase();if(!a.includes("upi")&&!a.includes("online"))return!1}else if(N==="TODAY"){const a=new Date().toISOString().split("T")[0];if((t.paymentDate||t.payment_date||t.createdAt||"").split("T")[0]!==a)return!1}const s=q.toLowerCase().trim();if(s){const a=(t.receiptNo||t.receipt_no||"").toLowerCase(),o=(t.studentName||t.student_name||t.student?.student_name||"").toLowerCase(),l=(t.registrationNumber||t.registration_number||t.student?.registration_number||"").toLowerCase(),n=(t.studentPhone||t.phone||t.student?.whatsapp||t.student?.phone||"").toLowerCase(),i=(t.courseName||t.course_name||t.course?.course_name||"").toLowerCase(),r=(t.paymentMode||t.payment_mode||"").toLowerCase(),d=(t.coveragePeriodText||"").toLowerCase();if(!(a.includes(s)||o.includes(s)||l.includes(s)||n.includes(s)||i.includes(s)||r.includes(s)||d.includes(s)))return!1}if(H!=="ALL"){const a=(t.paymentMode||t.payment_mode||"").toLowerCase();if(H.toLowerCase()!==a)return!1}if(Y!=="ALL"){const a=(t.feeType||t.fee_type||"").toLowerCase();if(Y.toLowerCase()!==a)return!1}return!0}).sort((t,s)=>{if(Pe==="amount"){const l=Number(t.amountPaid||t.amount_paid||0),n=Number(s.amountPaid||s.amount_paid||0);return be==="asc"?l-n:n-l}const a=new Date(t.paymentDate||t.payment_date||t.createdAt||t.created_at).getTime(),o=new Date(s.paymentDate||s.payment_date||s.createdAt||s.created_at).getTime();return be==="asc"?a-o:o-a}),[R,N,q,H,Y,Pe,be]),C=x.useMemo(()=>{let t=0,s=0,a=0,o=0,l=0,n=0,i=0,r=0,d=0,b=0,m=0,u=0;const S=new Date().toISOString().split("T")[0];return R.forEach(h=>{const j=Number(h.amountPaid||h.amount_paid||0),k=(h.paymentMode||h.payment_mode||"").toLowerCase(),v=(h.feeType||h.fee_type||"").toLowerCase(),f=(h.paymentDate||h.payment_date||h.createdAt||"").split("T")[0];t+=j,k==="cash"?(s+=j,a++):k.includes("upi")||k.includes("online")?(o+=j,l++):n+=j,v==="monthly"?(i+=j,r++):(d+=j,b++),f===S&&(m++,u+=j)}),{totalCount:R.length,totalAmount:t,cashAmount:s,cashCount:a,upiAmount:o,upiCount:l,bankAmount:n,monthlyTotal:i,monthlyCount:r,lumpSumTotal:d,lumpSumCount:b,todayCount:m,todayAmount:u}},[R]),Ot=x.useMemo(()=>G.reduce((t,s)=>t+Number(s.amountPaid||s.amount_paid||0),0),[G]),Et=t=>{navigator.clipboard.writeText(t),He(t),setTimeout(()=>He(null),1500)},Ut=()=>{if(G.length===0){g.fire({icon:"info",title:"No Data to Export",text:"There are no payment receipts matching your current filters.",background:"#0f172a",color:"#f8fafc"});return}const t=G.map((n,i)=>({"SL #":i+1,"Receipt Number":n.receiptNo||n.receipt_no,"Payment Date":n.paymentDate?new Date(n.paymentDate).toLocaleDateString():"","Student Name":n.studentName||n.student_name,"Registration Number":n.registrationNumber||n.registration_number,"Course Program":n.courseName||n.course_name,"Fee Type":(n.feeType||n.fee_type)==="monthly"?"Monthly":"Course Fees (Lump sum)","Payment Mode":n.paymentMode||n.payment_mode,"Amount Paid (₹)":Number(n.amountPaid||n.amount_paid||0),"Coverage Period":me(n),"Collected By":n.collectedBy||"Admin"})),s=B.json_to_sheet(t),a=B.book_new();B.book_append_sheet(a,s,"Fee Payments");const o=es(a,{bookType:"xlsx",type:"array"}),l=new Blob([o],{type:"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8"});ts.saveAs(l,`CNAT_Fee_Payments_${new Date().toISOString().split("T")[0]}.xlsx`)},zt=()=>{window.print()},ct=t=>{if(!t||isNaN(t))return"";if(t=Math.floor(Number(t)),t===0)return"Zero Only";const s=["","One","Two","Three","Four","Five","Six","Seven","Eight","Nine"],a=["","","Twenty","Thirty","Forty","Fifty","Sixty","Seventy","Eighty","Ninety"],o=["Ten","Eleven","Twelve","Thirteen","Fourteen","Fifteen","Sixteen","Seventeen","Eighteen","Nineteen"],l=d=>d===0?"":d<10?s[d]:d<20?o[d-10]:a[Math.floor(d/10)]+(d%10?" "+s[d%10]:""),n=d=>{if(d===0)return"";if(d<100)return l(d);const b=Math.floor(d/100),m=d%100;return s[b]+" Hundred"+(m?" and "+l(m):"")};let i="",r=t;if(r>=1e7){const d=Math.floor(r/1e7);i+=l(d)+" Crore",r%=1e7,r>0&&(i+=" ")}if(r>=1e5){const d=Math.floor(r/1e5);i+=l(d)+" Lakh",r%=1e5,r>0&&(i+=" ")}if(r>=1e3){const d=Math.floor(r/1e3);i+=n(d)+" Thousand",r%=1e3,r>0&&(i+=" ")}return r>0&&(i+=n(r)),i+" Only"},xt=()=>c?.collectedBy||c?.collected_by?c.collectedBy||c.collected_by:T?.student_name||T?.name?T.student_name||T.name:T?.email?T.email.split("@")[0]:"Accounts Section",mt=()=>c?.collectorDesignation||c?.collector_designation?c.collectorDesignation||c.collector_designation:T?.role||T?.userType&&T.userType.userTypeName?T.role||T.userType.userTypeName:"Accounts Department",Bt=async()=>{if(se(!0),at(""),_.length===0){ae(!0);try{const t=await O.get("/admissions"),s=t?.data?.data||t?.data||[],a=Array.isArray(s)?s.filter(o=>o.student&&o.course):[];Ne(a)}catch(t){console.error("Failed to load admissions:",t),g.fire({icon:"error",title:"Failed to load admissions",text:"Could not load admitted students. Please try again.",background:"#0f172a",color:"#f8fafc"})}finally{ae(!1)}}},Re=t=>{if(!t||!t.student||!t.course)return null;const s=t.student.id,a=t.course.id,o=Number(t.feeModesId)===1||t.feeModeName?.toLowerCase().includes("monthly"),l=Number(t.courseFees||t.course?.courseFees||600),i=R.filter(r=>(r.studentId===s||r.student_id===s)&&(r.courseId===a||r.course_id===a)).reduce((r,d)=>r+Number(d.amountPaid||d.amount_paid||0),0);if(o){const r=l>0?l:600,d=Math.floor(i/r),b=new Date(t.admissionDate||new Date),m=[];for(let h=0;h<d;h++){const j=new Date(b);j.setMonth(j.getMonth()+h),m.push(j.toLocaleDateString("en-IN",{month:"long",year:"numeric"}))}const u=new Date(b);u.setMonth(u.getMonth()+d);const S=u.toLocaleDateString("en-IN",{month:"long",year:"numeric"});return{isMonthly:!0,monthlyRate:r,previousPaid:i,monthsCleared:d,clearedMonthsList:m,nextDueMonth:S,suggestedAmount:r,admissionDate:t.admissionDate}}else{const r=l,d=Math.max(0,r-i);return{isMonthly:!1,totalCourseFee:r,previousPaid:i,balanceDue:d,suggestedAmount:d,isPaidInFull:d<=0,admissionDate:t.admissionDate}}},Wt=t=>{de(t);const s=Re(t);s&&E(s.suggestedAmount>0?s.suggestedAmount.toString():"")},Vt=(t,s)=>{if(!t||!t.isMonthly||!s||Number(s)<=0)return[];const a=Math.floor(Number(s)/t.monthlyRate);if(a<=0)return[];const o=new Date(t.admissionDate||new Date),l=t.monthsCleared,n=[];for(let i=0;i<a;i++){const r=new Date(o);r.setMonth(r.getMonth()+l+i),n.push(r.toLocaleDateString("en-IN",{month:"long",year:"numeric"}))}return n},qt=async t=>{if(t.preventDefault(),!y){g.fire({icon:"warning",title:"Select Student",text:"Please select an admitted student first.",background:"#0f172a",color:"#f8fafc"});return}const s=Number(ne);if(!s||s<=0){g.fire({icon:"warning",title:"Invalid Amount",text:"Please enter a valid payment amount.",background:"#0f172a",color:"#f8fafc"});return}const a=Re(y);if(a?.isMonthly&&s<a.monthlyRate){g.fire({icon:"warning",title:"Amount Less than Monthly Fee",text:`Monthly installment is ₹${a.monthlyRate}. Amount paid cannot be less than ₹${a.monthlyRate}.`,background:"#0f172a",color:"#f8fafc"});return}st(!0);try{const o={student_id:y.student.id,course_id:y.course.id,fee_type:a?.isMonthly?"monthly":"non_monthly",amount_paid:s,payment_date:et,payment_mode:Ze},l=await O.post("/fees-receipts",o),n=l?.data?.data||l?.data;await _e(),se(!1),de(null),E(""),g.fire({icon:"success",title:"Fee Payment Recorded!",text:`Receipt #${n?.receiptNo||n?.receipt_no||"Issued"} recorded successfully. Opening voucher...`,timer:1600,showConfirmButton:!1,background:"#0f172a",color:"#f8fafc"}),n&&fe(n)}catch(o){console.error("Failed to record fee payment:",o);const l=o.response?.data?.message||o.response?.data?.data||"Failed to record payment. Please check required fields.";g.fire({icon:"error",title:"Payment Recording Failed",text:typeof l=="string"?l:JSON.stringify(l),background:"#0f172a",color:"#f8fafc"})}finally{st(!1)}},J=async t=>{if(t){ot(!0);try{const s=await O.get(`/admissions/${t}/ledger`);s?.data?.status&&s?.data?.data?($t(s.data.data),Ie(!1),$e(!0)):g.fire({icon:"error",title:"Ledger Not Found",text:s?.data?.message||"Could not load student fee ledger.",background:"#0f172a",color:"#f8fafc"})}catch(s){console.error("Failed to load student ledger:",s),g.fire({icon:"error",title:"Ledger Error",text:s.response?.data?.message||"Failed to load student fee ledger. Please verify Admission ID.",background:"#0f172a",color:"#f8fafc"})}finally{ot(!1)}}},pt=async t=>{if(!t)return;const s=t.studentId||t.student_id,a=t.courseId||t.course_id;let o=_.find(n=>(n.student?.id===s||n.studentId===s)&&(n.course?.id===a||n.courseId===a));if(!o)try{const n=await O.get("/admissions"),i=n?.data?.data||n?.data||[],r=Array.isArray(i)?i.filter(d=>d.student&&d.course):[];Ne(r),o=r.find(d=>(d.student?.id===s||d.studentId===s)&&(d.course?.id===a||d.courseId===a))}catch(n){console.error("Error fetching admissions for receipt ledger:",n)}const l=o?.admissionId||o?.id;if(l)J(l);else{try{const n=await O.get(`/students/${s}/admissions`),r=(n?.data?.data||n?.data||[]).find(d=>d.courseId===a||d.course_id===a||d.course?.id===a);if(r&&(r.id||r.admissionId)){J(r.id||r.admissionId);return}}catch(n){console.error("Fallback student admissions error:",n)}g.fire({icon:"warning",title:"Admission Record Not Found",text:"Could not locate an active admission record for this student and course.",background:"#0f172a",color:"#f8fafc"})}},Ht=t=>{if(!t)return;const s=t.student,a=s?.whatsapp||s?.phone;if(!a){g.fire({icon:"warning",title:"No WhatsApp Number",text:"Student does not have a WhatsApp number registered.",background:"#0f172a",color:"#f8fafc"});return}let o=`🏛️ *CODER & ACCOTAX (CNAT)*
`;o+=`📋 *Official Student Fee Ledger Statement*

`,o+=`👤 *Student Name:* ${s.name}
`,o+=`🆔 *Registration #:* ${s.registrationNumber||"N/A"}
`,o+=`📝 *Admission #:* ${t.admission?.admissionNumber} (ID: #${t.admission?.admissionId})
`,o+=`📚 *Course:* ${t.course?.name}
`,o+=`📅 *Admission Date:* ${t.admission?.admissionDate}
`,o+=`💰 *Fee Plan:* ${t.admission?.feeMode} (${t.admission?.isMonthly?"₹"+t.summary?.monthlyRate+"/mo":"₹"+t.summary?.totalCourseFee+" Total"})

`,o+=`📊 *Account Summary:*
`,o+=`• *Total Cumulative Paid:* ₹${t.summary?.totalPaid?.toLocaleString("en-IN")}/-
`,t.admission?.isMonthly?(t.summary?.clearedMonthsText&&(o+=`• *Months Cleared:* ${t.summary.clearedMonthsText} (${t.summary.clearedMonthsCount} Months)
`),t.summary?.nextDueMonth&&(o+=`• *⚠️ Next Due Month:* ${t.summary.nextDueMonth} (Due: ₹${t.summary.dueAmount?.toLocaleString("en-IN")}/-)
`)):(o+=`• *Total Course Fee:* ₹${t.summary?.totalCourseFee?.toLocaleString("en-IN")}/-
`,o+=`• *Outstanding Balance Due:* ₹${t.summary?.balanceDue?.toLocaleString("en-IN")}/-
`),o+=`• *Account Status:* ${t.summary?.statusBadge}

`,o+=`🧾 *Transaction History (${t.transactions?.length||0} Payment${(t.transactions?.length||0)>1?"s":""}):*
`,(t.transactions||[]).forEach(r=>{o+=`• ${r.paymentDate||"N/A"}: *${r.receiptNo}* — ₹${r.amountPaid?.toLocaleString("en-IN")}/- (${r.coveragePeriod}) [${r.paymentMode}]
`}),o+=`
💳 *Pay Online via UPI:* codernaccotax@okhdfcbank
`,o+="_For any accounts queries, contact CNAT Accounts Department._";const l=a.replace(/[^0-9]/g,""),i=`https://api.whatsapp.com/send?phone=${l.length===10?`91${l}`:l}&text=${encodeURIComponent(o)}`;window.open(i,"_blank")},Yt=t=>{if(!t)return;const s=window.open("","_blank","width=920,height=850");if(!s){g.fire({icon:"warning",title:"Popup Blocked",text:"Please allow pop-ups for this site to print the student ledger statement.",background:"#0f172a",color:"#f8fafc"});return}const a=ge||pe,o=Ae||ke,l=Le||ye,n=new Date().toLocaleDateString("en-IN",{day:"2-digit",month:"long",year:"numeric"}),i=t.admission?.isMonthly,r=t.summary||{},d=t.student||{},b=t.course||{},m=t.admission||{},u=t.transactions||[],S=`<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title>Student Fee Ledger - ${d.name||"Student"} - ${m.admissionNumber||""}</title>
  <style>
    @page {
      size: A4 portrait;
      margin: 10mm 12mm;
    }
    * {
      box-sizing: border-box;
      margin: 0;
      padding: 0;
    }
    body {
      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
      font-size: 10.5px;
      color: #1e293b;
      background: #fff;
      line-height: 1.35;
      padding: 8px;
    }
    .ledger-container {
      max-width: 100%;
      margin: 0 auto;
    }
    .header {
      display: flex;
      align-items: center;
      justify-content: space-between;
      border-bottom: 2px solid #0f766e;
      padding-bottom: 8px;
      margin-bottom: 10px;
    }
    .header-left {
      display: flex;
      align-items: center;
      gap: 12px;
    }
    .header-left img {
      width: 52px;
      height: 52px;
      object-fit: contain;
    }
    .org-title {
      font-size: 17px;
      font-weight: 800;
      color: #0f766e;
      letter-spacing: 0.5px;
      line-height: 1.2;
    }
    .org-subtitle {
      font-size: 8.5px;
      color: #475569;
      font-weight: 500;
    }
    .org-contact {
      font-size: 8px;
      color: #64748b;
      margin-top: 1px;
    }
    .statement-badge {
      text-align: right;
    }
    .badge-title {
      font-size: 13px;
      font-weight: 800;
      color: #1e293b;
      text-transform: uppercase;
      letter-spacing: 0.5px;
    }
    .badge-meta {
      font-size: 8.5px;
      color: #64748b;
      margin-top: 1px;
    }
    .badge-status {
      display: inline-block;
      margin-top: 3px;
      padding: 2px 7px;
      border-radius: 4px;
      font-size: 8.5px;
      font-weight: 700;
      background: #ecfdf5;
      color: #065f46;
      border: 1px solid #a7f3d0;
    }
    .badge-status.partial {
      background: #fffbeb;
      color: #92400e;
      border: 1px solid #fde68a;
    }
    .info-grid {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 10px;
      margin-bottom: 10px;
    }
    .info-card {
      border: 1px solid #cbd5e1;
      border-radius: 6px;
      padding: 7px 9px;
      background: #f8fafc;
    }
    .info-card-title {
      font-size: 9.5px;
      font-weight: 700;
      color: #0f766e;
      text-transform: uppercase;
      margin-bottom: 5px;
      border-bottom: 1px solid #e2e8f0;
      padding-bottom: 2px;
    }
    .info-row {
      display: flex;
      justify-content: space-between;
      font-size: 9px;
      margin-bottom: 2.5px;
    }
    .info-label {
      color: #64748b;
    }
    .info-value {
      font-weight: 600;
      color: #1e293b;
      text-align: right;
    }
    .kpi-grid {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      gap: 8px;
      margin-bottom: 10px;
    }
    .kpi-box {
      border: 1px solid #cbd5e1;
      border-radius: 6px;
      padding: 6px 8px;
      background: #ffffff;
      text-align: center;
    }
    .kpi-label {
      font-size: 8px;
      color: #64748b;
      text-transform: uppercase;
      font-weight: 600;
    }
    .kpi-value {
      font-size: 13px;
      font-weight: 800;
      color: #0f766e;
      margin-top: 1px;
    }
    .kpi-value.due {
      color: #b45309;
    }
    table.txn-table {
      width: 100%;
      border-collapse: collapse;
      margin-bottom: 10px;
      font-size: 9px;
    }
    table.txn-table th {
      background: #0f766e;
      color: #ffffff;
      font-weight: 700;
      padding: 5px 7px;
      text-align: left;
      border: 1px solid #0f766e;
    }
    table.txn-table th.right, table.txn-table td.right {
      text-align: right;
    }
    table.txn-table th.center, table.txn-table td.center {
      text-align: center;
    }
    table.txn-table td {
      padding: 4px 7px;
      border: 1px solid #cbd5e1;
      color: #334155;
    }
    table.txn-table tr:nth-child(even) td {
      background: #f8fafc;
    }
    table.txn-table tfoot td {
      font-weight: 800;
      background: #f1f5f9;
      border-top: 2px solid #0f766e;
      color: #0f766e;
    }
    .clearance-box {
      border: 1px dashed #0f766e;
      border-radius: 6px;
      padding: 6px 8px;
      background: #f0fdfa;
      margin-bottom: 10px;
      font-size: 9px;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
    .footer-grid {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 12px;
      margin-top: 10px;
      padding-top: 8px;
      border-top: 1px solid #cbd5e1;
      align-items: center;
    }
    .upi-section {
      display: flex;
      align-items: center;
      gap: 8px;
    }
    .upi-section img {
      width: 50px;
      height: 50px;
      object-fit: contain;
      border: 1px solid #cbd5e1;
      border-radius: 4px;
      padding: 2px;
    }
    .upi-text {
      font-size: 8px;
      color: #475569;
    }
    .upi-id {
      font-family: monospace;
      font-weight: 700;
      color: #0f766e;
      font-size: 9px;
    }
    .signature-section {
      display: flex;
      justify-content: flex-end;
      align-items: flex-end;
      gap: 15px;
      text-align: center;
    }
    .stamp-container img {
      width: 60px;
      height: 60px;
      object-fit: contain;
      opacity: 0.85;
    }
    .sig-line {
      border-top: 1px solid #475569;
      width: 130px;
      padding-top: 3px;
      font-size: 8px;
      font-weight: 700;
      color: #334155;
    }
    .disclaimer {
      font-size: 7.5px;
      color: #94a3b8;
      text-align: center;
      margin-top: 8px;
      font-style: italic;
    }
  </style>
</head>
<body>
  <div class="ledger-container">
    <div class="header">
      <div class="header-left">
        <img src="${a}" alt="CNAT Logo" />
        <div>
          <div class="org-title">CODER &amp; ACCOTAX</div>
          <div class="org-subtitle">Advance Technical Education &amp; Career Training Academy</div>
          <div class="org-contact">Barrackpore, Kolkata - 700120 | Phone: +91 9830371685 | Web: www.cnat.in</div>
        </div>
      </div>
      <div class="statement-badge">
        <div class="badge-title">Student Fee Ledger</div>
        <div class="badge-meta">Statement Date: ${n}</div>
        <div class="badge-meta">Academic Session: 2026–2027</div>
        <div class="badge-status ${!r.isPaidInFull&&!i?"partial":""}">
          ${r.statusBadge||"Account Active"}
        </div>
      </div>
    </div>

    <div class="info-grid">
      <div class="info-card">
        <div class="info-card-title">Student Profile</div>
        <div class="info-row">
          <span class="info-label">Student Name:</span>
          <span class="info-value">${d.name||"N/A"}</span>
        </div>
        <div class="info-row">
          <span class="info-label">Registration No:</span>
          <span class="info-value" style="font-family: monospace;">${d.registrationNumber||"N/A"}</span>
        </div>
        <div class="info-row">
          <span class="info-label">Admission ID / No:</span>
          <span class="info-value" style="font-family: monospace;">#${m.admissionId} (${m.admissionNumber||"N/A"})</span>
        </div>
        <div class="info-row">
          <span class="info-label">Phone / WhatsApp:</span>
          <span class="info-value">${d.whatsapp||d.phone||"N/A"}</span>
        </div>
        <div class="info-row">
          <span class="info-label">Location / City:</span>
          <span class="info-value">${d.city||d.address||"Barrackpore"}</span>
        </div>
      </div>

      <div class="info-card">
        <div class="info-card-title">Academic &amp; Fee Details</div>
        <div class="info-row">
          <span class="info-label">Enrolled Course:</span>
          <span class="info-value">${b.name||"N/A"}</span>
        </div>
        <div class="info-row">
          <span class="info-label">Course Code:</span>
          <span class="info-value" style="font-family: monospace;">${b.code||"N/A"}</span>
        </div>
        <div class="info-row">
          <span class="info-label">Date of Admission:</span>
          <span class="info-value">${m.admissionDate||"N/A"}</span>
        </div>
        <div class="info-row">
          <span class="info-label">Fee Plan:</span>
          <span class="info-value">${m.feeMode||(i?"Monthly":"Lump sum")}</span>
        </div>
        <div class="info-row">
          <span class="info-label">Agreed Fee Rate:</span>
          <span class="info-value" style="color: #0f766e;">₹ ${Number(m.agreedFee||0).toLocaleString("en-IN")}/- ${i?"per month":"total"}</span>
        </div>
      </div>
    </div>

    <div class="kpi-grid">
      <div class="kpi-box">
        <div class="kpi-label">${i?"Monthly Rate":"Total Course Fee"}</div>
        <div class="kpi-value">₹ ${Number(i?r.monthlyRate||0:r.totalCourseFee||0).toLocaleString("en-IN")}</div>
      </div>
      <div class="kpi-box">
        <div class="kpi-label">Cumulative Paid</div>
        <div class="kpi-value">₹ ${Number(r.totalPaid||0).toLocaleString("en-IN")}</div>
      </div>
      <div class="kpi-box">
        <div class="kpi-label">${i?"Next Due Month":"Balance Due"}</div>
        <div class="kpi-value ${r.balanceDue>0||i?"due":""}">
          ${i?r.nextDueMonth||"Up to Date":"₹ "+Number(r.balanceDue||0).toLocaleString("en-IN")}
        </div>
      </div>
      <div class="kpi-box">
        <div class="kpi-label">${i?"Installments Cleared":"Payment Status"}</div>
        <div class="kpi-value">
          ${i?r.clearedMonthsCount+" Months":r.isPaidInFull?"100% Cleared":"Partial"}
        </div>
      </div>
    </div>

    ${i?`
    <div class="clearance-box">
      <div>
        <strong style="color: #0f766e;">✓ Months Cleared by Received Fees:</strong> 
        <span>${r.clearedMonthsText||"None recorded yet"} (${r.clearedMonthsCount} Months)</span>
      </div>
      ${r.nextDueMonth?`
      <div style="font-weight: 700; color: #b45309;">
        ⚠️ Next Due: ${r.nextDueMonth} (Due: ₹ ${Number(r.dueAmount||0).toLocaleString("en-IN")}/-)
      </div>
      `:""}
    </div>
    `:""}

    <table class="txn-table">
      <thead>
        <tr>
          <th class="center" style="width: 25px;">#</th>
          <th>Payment Date</th>
          <th>Receipt No</th>
          <th>Coverage / Description</th>
          <th>Payment Mode</th>
          <th class="right">Amount Paid (₹)</th>
          <th class="right">Cumulative Total (₹)</th>
          <th>Collected By</th>
        </tr>
      </thead>
      <tbody>
        ${u.length>0?u.map(h=>`
          <tr>
            <td class="center">${h.slNo}</td>
            <td>${h.paymentDate||"N/A"}</td>
            <td style="font-family: monospace; font-weight: 700; color: #0f766e;">${h.receiptNo}</td>
            <td>${h.coveragePeriod}</td>
            <td>${h.paymentMode}</td>
            <td class="right" style="font-weight: 700; color: #047857;">₹ ${Number(h.amountPaid||0).toLocaleString("en-IN")}/-</td>
            <td class="right" style="font-weight: 700; color: #0f766e;">₹ ${Number(h.runningTotal||0).toLocaleString("en-IN")}/-</td>
            <td>${h.collectedBy}</td>
          </tr>
        `).join(""):`
          <tr>
            <td colspan="8" class="center" style="padding: 12px; color: #64748b;">No fee payment transactions recorded for this admission yet.</td>
          </tr>
        `}
      </tbody>
      <tfoot>
        <tr>
          <td colspan="5" class="right">TOTAL PAYMENTS RECEIVED TO DATE:</td>
          <td class="right">₹ ${Number(r.totalPaid||0).toLocaleString("en-IN")}/-</td>
          <td class="right">₹ ${Number(r.totalPaid||0).toLocaleString("en-IN")}/-</td>
          <td></td>
        </tr>
      </tfoot>
    </table>

    <div class="footer-grid">
      <div class="upi-section">
        <img src="${o}" alt="UPI QR" />
        <div class="upi-text">
          <strong>Online Fee Payment via UPI:</strong><br />
          Scan QR code or send payment to UPI ID:<br />
          <span class="upi-id">codernaccotax@okhdfcbank</span><br />
          Supports Google Pay, PhonePe, Paytm, BHIM UPI.
        </div>
      </div>

      <div class="signature-section">
        <div class="stamp-container">
          <img src="${l}" alt="Official Stamp" />
        </div>
        <div>
          <div class="sig-line">Authorized Signatory</div>
          <div style="font-size: 7.5px; color: #64748b; margin-top: 2px;">Accounts Department, CNAT</div>
        </div>
      </div>
    </div>

    <div class="disclaimer">
      This is a computer-generated official student fee ledger &amp; statement of account issued by Coder &amp; AccoTax (CNAT). For billing discrepancies, please contact accounts@cnat.in.
    </div>
  </div>

  <script>
    window.onload = function() {
      setTimeout(function() {
        window.print();
      }, 500);
    };
  <\/script>
</body>
</html>`;s.document.open(),s.document.write(S),s.document.close()},Oe=async()=>{rt(!0);try{const s=(await O.get("/admissions/dues")).data?.data||{summary:{},students:[],enrollments:[]};_t(s);const a={};(s.students||[]).forEach(o=>{(o.hasMultipleCourses||o.totalDue>0)&&(a[o.studentId]=!0)}),dt(a)}catch(t){console.error("Error fetching dues list:",t),g.fire({icon:"error",title:"Failed to Load Dues List",text:t.response?.data?.message||"Could not retrieve student dues statement.",background:"#0f172a",color:"#f8fafc"})}finally{rt(!1)}},Qt=t=>{dt(s=>({...s,[t]:!s[t]}))},le=x.useMemo(()=>{if(!D.students)return[];let t=[...D.students];if(w==="DUES_ONLY"?t=t.filter(s=>s.totalDue>0):w==="MULTI_COURSE"?t=t.filter(s=>s.hasMultipleCourses):w==="CLEARED"?t=t.filter(s=>s.totalDue<=0):w==="MONTHLY"?t=t.filter(s=>s.courses.some(a=>a.isMonthly&&a.balanceDue>0)):w==="LUMPSUM"&&(t=t.filter(s=>s.courses.some(a=>!a.isMonthly&&a.balanceDue>0))),U.trim()){const s=U.trim().toLowerCase();t=t.filter(a=>{const o=(a.studentName||"").toLowerCase().includes(s),l=(a.studentRegNo||"").toLowerCase().includes(s),n=(a.studentPhone||"").toLowerCase().includes(s),i=a.courses.some(r=>(r.courseName||"").toLowerCase().includes(s)||(r.courseCode||"").toLowerCase().includes(s));return o||l||n||i})}return t},[D.students,w,U]),xe=x.useMemo(()=>{if(!D.enrollments)return[];let t=[...D.enrollments];if(w==="DUES_ONLY"?t=t.filter(s=>s.balanceDue>0):w==="CLEARED"?t=t.filter(s=>s.balanceDue<=0):w==="MONTHLY"?t=t.filter(s=>s.isMonthly):w==="LUMPSUM"&&(t=t.filter(s=>!s.isMonthly)),U.trim()){const s=U.trim().toLowerCase();t=t.filter(a=>(a.studentName||"").toLowerCase().includes(s)||(a.studentRegNo||"").toLowerCase().includes(s)||(a.studentPhone||"").toLowerCase().includes(s)||(a.courseName||"").toLowerCase().includes(s)||(a.courseCode||"").toLowerCase().includes(s))}return t},[D.enrollments,w,U]),Gt=t=>{const s=(t.studentPhone||"").replace(/\D/g,"");if(!s){g.fire({icon:"warning",title:"No WhatsApp Number",text:`No phone number recorded for ${t.studentName}.`,background:"#0f172a",color:"#f8fafc"});return}const a=s.length===10?`91${s}`:s;let o=`🔔 *Fee Due Reminder - Coder & AccoTax* 🔔

Dear *${t.studentName}* (${t.studentRegNo||"Student"}),
Greetings from Coder & AccoTax!

This is a friendly reminder regarding your outstanding tuition fees for the current academic session:

`;t.courses.forEach((n,i)=>{o+=`📚 *${i+1}. ${n.courseName}* [${n.feeMode}]
`,n.isMonthly?(o+=`   • Monthly Rate: ₹${Number(n.monthlyRate||0).toLocaleString("en-IN")}/-
`,o+=`   • Status: ${n.status}
`,n.balanceDue>0?o+=`   • Outstanding Due: *₹${Number(n.balanceDue).toLocaleString("en-IN")}/-*
`:o+=`   • Status: Dues Cleared ✓
`):(o+=`   • Course Fee: ₹${Number(n.totalCourseFee||0).toLocaleString("en-IN")}/-
`,o+=`   • Paid to Date: ₹${Number(n.totalPaid||0).toLocaleString("en-IN")}/-
`,n.balanceDue>0?o+=`   • Outstanding Balance: *₹${Number(n.balanceDue).toLocaleString("en-IN")}/-*
`:o+=`   • Status: Paid in Full ✓
`),o+=`
`}),o+=`━━━━━━━━━━━━━━━━━━━━
💰 *TOTAL OUTSTANDING DUE: ₹${Number(t.totalDue).toLocaleString("en-IN")}/-*
━━━━━━━━━━━━━━━━━━━━

📱 *Instant Payment via UPI / QR:*
UPI ID: *codernaccotax@okhdfcbank*
Pay via Google Pay / PhonePe / Paytm / BHIM

Kindly clear the pending dues at your earliest convenience. If already paid, please ignore or share the transaction screenshot.

For queries: +91 70037 56860
Coder & AccoTax (Barrackpore)`;const l=encodeURIComponent(o);window.open(`https://api.whatsapp.com/send?phone=${a}&text=${l}`,"_blank")},ut=t=>{const s=(t.studentPhone||"").replace(/\D/g,"");if(!s){g.fire({icon:"warning",title:"No WhatsApp Number",text:`No phone number recorded for ${t.studentName}.`,background:"#0f172a",color:"#f8fafc"});return}const a=s.length===10?`91${s}`:s;let o=`🔔 *Fee Due Reminder - Coder & AccoTax* 🔔

Dear *${t.studentName}* (${t.studentRegNo||"Student"}),
Greetings from Coder & AccoTax!

Course: *${t.courseName}* [${t.feeMode}]
`;t.isMonthly?o+=`Monthly Rate: ₹${Number(t.monthlyRate||0).toLocaleString("en-IN")}/-
Current Status: ${t.status}
Outstanding Due: *₹${Number(t.balanceDue).toLocaleString("en-IN")}/-*

`:o+=`Total Course Fee: ₹${Number(t.totalCourseFee||0).toLocaleString("en-IN")}/-
Paid to Date: ₹${Number(t.totalPaid||0).toLocaleString("en-IN")}/-
Outstanding Balance: *₹${Number(t.balanceDue).toLocaleString("en-IN")}/-*

`,o+=`📱 *Instant Payment via UPI / QR:*
UPI ID: *codernaccotax@okhdfcbank*

Please clear the dues at your earliest convenience.
Coder & AccoTax (Barrackpore) | +91 70037 56860`;const l=encodeURIComponent(o);window.open(`https://api.whatsapp.com/send?phone=${a}&text=${l}`,"_blank")},ht=t=>{oe(!1);const s=_.find(a=>a.id===t.admissionId||a.admissionId===t.admissionId);s?(de(s),E(String(t.balanceDue>0?t.balanceDue:t.monthlyRate||"")),se(!0)):(ae(!0),O.get("/admissions").then(a=>{const o=a?.data?.data||a?.data||[],l=Array.isArray(o)?o.filter(i=>i.student):[];Ne(l);const n=l.find(i=>i.id===t.admissionId||i.admissionId===t.admissionId);n&&(de(n),E(String(t.balanceDue>0?t.balanceDue:t.monthlyRate||""))),se(!0)}).catch(a=>console.error(a)).finally(()=>ae(!1)))},bt=t=>{oe(!1),J(t.admissionId)},Jt=()=>{const t=window.open("","_blank");if(!t){g.fire({icon:"warning",title:"Pop-up Blocked",text:"Please allow pop-ups to print the official Dues Statement.",background:"#0f172a",color:"#f8fafc"});return}const s=new Date().toLocaleString("en-IN",{day:"2-digit",month:"short",year:"numeric",hour:"2-digit",minute:"2-digit"}),a=le,o=a.reduce((n,i)=>n+Number(i.totalDue||0),0),l=`<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title>CNAT - Outstanding Student Dues Statement</title>
  <style>
    @page { size: A4 portrait; margin: 12mm 15mm; }
    body { font-family: Arial, Helvetica, sans-serif; font-size: 11px; color: #1e293b; margin: 0; padding: 0; line-height: 1.35; }
    .header { text-align: center; border-bottom: 2px solid #0f766e; padding-bottom: 8px; margin-bottom: 12px; }
    .inst-name { font-size: 18px; font-weight: 900; color: #0f766e; letter-spacing: 0.5px; margin: 0; }
    .inst-sub { font-size: 10px; color: #475569; margin: 2px 0 6px; }
    .report-title { font-size: 13px; font-weight: 800; color: #0f172a; text-transform: uppercase; letter-spacing: 1px; margin: 4px 0 2px; }
    .meta-bar { display: flex; justify-content: space-between; font-size: 9px; color: #64748b; margin-top: 4px; }
    
    .kpi-row { display: flex; gap: 8px; margin-bottom: 12px; }
    .kpi-card { flex: 1; border: 1px solid #cbd5e1; border-radius: 6px; padding: 6px 10px; background: #f8fafc; }
    .kpi-label { font-size: 9px; color: #64748b; text-transform: uppercase; font-weight: bold; }
    .kpi-val { font-size: 14px; font-weight: 900; color: #0f172a; margin-top: 2px; }
    .kpi-val.due { color: #dc2626; }

    table { width: 100%; border-collapse: collapse; margin-top: 6px; font-size: 10px; }
    th { background: #0f766e; color: #ffffff; font-weight: bold; text-align: left; padding: 6px 8px; border: 1px solid #0f766e; font-size: 9px; text-transform: uppercase; }
    td { padding: 5px 8px; border: 1px solid #cbd5e1; vertical-align: top; }
    tr:nth-child(even) td { background: #f8fafc; }
    .center { text-align: center; }
    .right { text-align: right; }
    .bold { font-weight: bold; }
    .mono { font-family: monospace; }
    .badge { display: inline-block; padding: 2px 5px; border-radius: 4px; font-size: 8px; font-weight: bold; }
    .badge-monthly { background: #e0f2fe; color: #0369a1; }
    .badge-lumpsum { background: #fef3c7; color: #92400e; }
    .badge-multi { background: #f3e8ff; color: #7e22ce; margin-left: 4px; }
    .due-amount { color: #dc2626; font-weight: bold; }

    .course-subtable { width: 100%; border-collapse: collapse; margin-top: 3px; font-size: 9px; }
    .course-subtable td { border: none; padding: 2px 4px; background: transparent !important; }
    .course-subtable tr:hover td { background: transparent; }

    .footer { margin-top: 20px; display: flex; justify-content: space-between; align-items: flex-end; page-break-inside: avoid; }
    .signature-box { text-align: center; width: 160px; }
    .sig-line { border-top: 1px solid #94a3b8; margin-top: 35px; padding-top: 4px; font-size: 10px; font-weight: bold; }
  </style>
</head>
<body>
  <div class="header">
    <div class="inst-name">CODER &amp; ACCOTAX</div>
    <div class="inst-sub">Computer Training &amp; Academic Coaching Institute • Barasat Road, Barrackpore, Kolkata - 700120 • Ph: +91 70037 56860</div>
    <div class="report-title">Student &amp; Course-wise Outstanding Dues Statement</div>
    <div class="meta-bar">
      <span>Academic Session: 2026–2027</span>
      <span>UPI Payment ID: codernaccotax@okhdfcbank</span>
      <span>Statement As Of: ${s}</span>
    </div>
  </div>

  <div class="kpi-row">
    <div class="kpi-card">
      <div class="kpi-label">Total Outstanding Dues</div>
      <div class="kpi-val due">₹ ${o.toLocaleString("en-IN")}/-</div>
    </div>
    <div class="kpi-card">
      <div class="kpi-label">Students with Pending Dues</div>
      <div class="kpi-val">${a.filter(n=>n.totalDue>0).length} Students</div>
    </div>
    <div class="kpi-card">
      <div class="kpi-label">Multi-Course Students</div>
      <div class="kpi-val">${a.filter(n=>n.hasMultipleCourses).length} Students</div>
    </div>
    <div class="kpi-card">
      <div class="kpi-label">Total Listed Enrollments</div>
      <div class="kpi-val">${a.reduce((n,i)=>n+i.courses.length,0)} Courses</div>
    </div>
  </div>

  <table>
    <thead>
      <tr>
        <th style="width: 24px;" class="center">#</th>
        <th style="width: 140px;">Student Information</th>
        <th>Enrolled Courses &amp; Due Breakdown</th>
        <th style="width: 80px;" class="right">Total Paid (₹)</th>
        <th style="width: 90px;" class="right">Total Due (₹)</th>
      </tr>
    </thead>
    <tbody>
      ${a.map((n,i)=>`
        <tr>
          <td class="center bold">${i+1}</td>
          <td>
            <div class="bold" style="color: #0f172a; font-size: 11px;">${n.studentName}</div>
            <div class="mono" style="color: #64748b; font-size: 9px;">${n.studentRegNo||"—"}</div>
            <div style="color: #0f766e; font-size: 9px;">📞 ${n.studentPhone||"N/A"}</div>
            ${n.hasMultipleCourses?`<span class="badge badge-multi">${n.totalCoursesCount} Courses</span>`:""}
          </td>
          <td>
            <table class="course-subtable">
              ${n.courses.map(r=>`
                <tr style="border-bottom: 1px dashed #e2e8f0;">
                  <td class="bold" style="color: #1e293b;">• ${r.courseName}</td>
                  <td>
                    <span class="badge ${r.isMonthly?"badge-monthly":"badge-lumpsum"}">
                      ${r.isMonthly?"Monthly (₹"+r.monthlyRate+"/mo)":"Lump sum (₹"+(r.totalCourseFee||0)+")"}
                    </span>
                  </td>
                  <td style="color: #475569;">
                    ${r.isMonthly?r.status:"Paid ₹"+r.totalPaid+" of ₹"+(r.totalCourseFee||0)}
                  </td>
                  <td class="right ${r.balanceDue>0?"due-amount":"bold"}" style="width: 70px;">
                    ${r.balanceDue>0?"₹ "+Number(r.balanceDue).toLocaleString("en-IN")+"/-":'<span style="color: #16a34a;">Cleared ✓</span>'}
                  </td>
                </tr>
              `).join("")}
            </table>
          </td>
          <td class="right bold" style="color: #0f766e;">
            ₹ ${Number(n.totalPaid||0).toLocaleString("en-IN")}/-
          </td>
          <td class="right bold ${n.totalDue>0?"due-amount":""}">
            ${n.totalDue>0?"₹ "+Number(n.totalDue).toLocaleString("en-IN")+"/-":'<span style="color: #16a34a;">₹0 (Cleared)</span>'}
          </td>
        </tr>
      `).join("")}
    </tbody>
    <tfoot>
      <tr style="background: #0f172a; color: #ffffff; font-weight: bold; font-size: 11px;">
        <td colspan="4" class="right" style="padding: 8px; border: 1px solid #0f172a; color: white;">
          GRAND TOTAL OUTSTANDING DUES:
        </td>
        <td class="right" style="padding: 8px; border: 1px solid #0f172a; color: #f87171; font-size: 12px;">
          ₹ ${o.toLocaleString("en-IN")}/-
        </td>
      </tr>
    </tfoot>
  </table>

  <div class="footer">
    <div style="font-size: 9px; color: #64748b; max-width: 380px;">
      * Computer generated institutional fee report. All figures are verified from system ledger.<br>
      Students with pending dues can pay via official UPI ID <strong>codernaccotax@okhdfcbank</strong>.
    </div>
    <div class="signature-box">
      <div class="sig-line">Accounts Department / Admin</div>
      <div style="font-size: 8px; color: #64748b;">Coder &amp; AccoTax</div>
    </div>
  </div>

  <script>
    window.onload = function() {
      setTimeout(function() {
        window.print();
      }, 500);
    };
  <\/script>
</body>
</html>`;t.document.open(),t.document.write(l),t.document.close()},Xt=()=>{if(!D.students||D.students.length===0){g.fire({icon:"info",title:"No Data to Export",text:"There is no dues data to export.",background:"#0f172a",color:"#f8fafc"});return}const t=le.map((n,i)=>({"Sl No":i+1,"Student Name":n.studentName,"Registration No":n.studentRegNo||"—","Phone / WhatsApp":n.studentPhone||"—","Total Courses Enrolled":n.totalCoursesCount,"Total Fees Paid (₹)":n.totalPaid,"Total Due Amount (₹)":n.totalDue,"Enrolled Courses":n.courses.map(r=>`${r.courseName} (${r.feeMode}: Due ₹${r.balanceDue})`).join("; ")})),s=xe.map((n,i)=>({"Sl No":i+1,"Student Name":n.studentName,"Registration No":n.studentRegNo||"—",Phone:n.studentPhone||"—","Course Name":n.courseName,"Course Code":n.courseCode||"—","Fee Mode":n.feeMode,"Agreed Fee / Rate (₹)":n.agreedFee,"Total Paid (₹)":n.totalPaid,"Cleared / Status":n.status,"Next Due Month":n.nextDueMonth||"—","Outstanding Due (₹)":n.balanceDue})),a=B.book_new(),o=B.json_to_sheet(t),l=B.json_to_sheet(s);B.book_append_sheet(a,o,"Student Summary Dues"),B.book_append_sheet(a,l,"Course-wise Dues"),ss(a,`CNAT_Student_Course_Dues_${new Date().toISOString().split("T")[0]}.xlsx`)},z=t=>{if(!t)return null;const s=(t.feeType||t.fee_type)==="monthly",a=Number(t.amountPaid||t.amount_paid||0),o=Number(t.monthlyFeeAmount||t.monthly_fee_amount||t.course?.course_fees||600),l=Number(t.totalCourseFee||t.course?.course_fees||(s?0:a));let n=Number(t.previousPaid??0),i=Number(t.totalPaidToDate??n+a),r=Array.isArray(t.coveredMonths)?[...t.coveredMonths]:[],d=t.nextDueMonth||null,b=Number(t.balanceDue??(s?0:Math.max(0,l-i))),m=t.isPaidInFull??(s?!0:b<=0),u=Number(t.dueAmount||(s?o:b)),S=t.admissionDate||t.student?.admission_date||null;if(n===0){const v=t.studentId||t.student_id,f=t.courseId||t.course_id,P=t.id;if(v&&f){const X=R.filter(I=>(I.studentId===v||I.student_id===v)&&(I.courseId===f||I.course_id===f)).filter(I=>I.id&&P?I.id<P:!1);X.length>0&&(n=X.reduce((I,ie)=>I+Number(ie.amountPaid||ie.amount_paid||0),0),i=n+a,s||(b=Math.max(0,l-i),u=b,m=b<=0))}}if(s&&r.length===0){const v=o>0?o:600,f=S||t.periodFrom||t.paymentDate||t.createdAt;if(f){const P=new Date(f),$=Math.floor(n/v),X=Math.floor(i/v),I=[];for(let Ee=$;Ee<X;Ee++){const Ue=new Date(P);Ue.setMonth(Ue.getMonth()+Ee),I.push(Ue.toLocaleDateString("en-IN",{month:"long",year:"numeric"}))}r=I;const ie=new Date(P);ie.setMonth(ie.getMonth()+X),d=ie.toLocaleDateString("en-IN",{month:"long",year:"numeric"}),u=v}}let h="N/A";const j=S||t.periodFrom;j&&(h=new Date(j).toLocaleDateString("en-IN",{day:"2-digit",month:"long",year:"numeric"}));let k=t.coveragePeriodText||null;if(s&&!k&&r.length>0){const v=r[0],f=r[r.length-1];if(v===f)k=v;else{const P=v.split(" "),$=f.split(" ");k=P[1]&&$[1]&&P[1]===$[1]?`${P[0]} to ${$[0]} ${$[1]}`:`${v} to ${f}`}}else s||(b>0?k="Part Payment":k=n>0?"Final Payment":"Paid in Full");return{isMonthly:s,amountPaid:a,monthlyRate:o,totalCourseFee:l,previousPaid:n,totalPaidToDate:i,balanceDue:b,isPaidInFull:m,coveredMonths:r,coveredMonthsText:r.length>0?r.join(", "):null,coveragePeriodText:k,nextDueMonth:d,dueAmount:u,admissionDateFormatted:h}},me=t=>{if(!t)return"—";const s=z(t);if(s?.coveragePeriodText)return s.coveragePeriodText;if(s?.isMonthly&&s?.coveredMonths&&s.coveredMonths.length>0){const a=s.coveredMonths[0],o=s.coveredMonths[s.coveredMonths.length-1];if(a===o)return a;const l=a.split(" "),n=o.split(" ");return l[1]&&n[1]&&l[1]===n[1]?`${l[0]} to ${n[0]} ${n[1]}`:`${a} to ${o}`}return s?.isMonthly?"—":s?.balanceDue>0?"Part Payment":s?.previousPaid>0?"Final Payment":"Paid in Full"},ft=async t=>{if(!t)return;let s=t.whatsapp||t.studentPhone||t.phone||t.student?.whatsapp||t.student?.phone||"";if(!s&&t.studentId)try{const o=await ls.getById(t.studentId),l=o?.data||o;s=l?.whatsapp||l?.phone1||l?.phone||""}catch{}let a=(s||"").replace(/\D/g,"");if(a.length<10){const{value:o,isConfirmed:l}=await g.fire({title:"WhatsApp Number",text:`Please enter the 10-digit WhatsApp mobile number for ${t.studentName||"the student"}:`,input:"tel",inputValue:a,inputPlaceholder:"e.g. 9876543210",showCancelButton:!0,confirmButtonText:"Prepare & Open WhatsApp",cancelButtonText:"Cancel",confirmButtonColor:"#16a34a",cancelButtonColor:"#475569",background:"#0f172a",color:"#f8fafc",inputValidator:n=>{const i=(n||"").replace(/\D/g,"");if(i.length!==10&&i.length!==12)return"Please enter a valid 10-digit mobile number"}});if(!l||!o)return;a=o.replace(/\D/g,"")}a.length===10&&(a="91"+a),Xe(!0);try{const o=Number(t.amountPaid||t.amount_paid||0),l=t.receiptNo||t.receipt_no||"N/A",n=t.registrationNumber||t.registration_number||t.student?.registration_number||"N/A",i=t.studentName||t.student_name||t.student?.student_name||"Student",r=t.courseName||t.course_name||t.course?.course_name||"Course",d=t.paymentDate||t.payment_date||t.createdAt||t.created_at,b=d?new Date(d).toLocaleDateString("en-IN",{day:"numeric",month:"short",year:"numeric"}):"N/A",m=z(t);let u=`📄 *Fee Payment Receipt - Coder & AccoTax* 📄

👤 *Student:* ${i}
🆔 *Registration No:* ${n}
📚 *Course:* ${r}
`;m?.admissionDateFormatted&&m.admissionDateFormatted!=="N/A"&&(u+=`📅 *Admission Date:* ${m.admissionDateFormatted}
`),u+=`💰 *Amount Paid (This Voucher):* ₹${o.toLocaleString("en-IN")}/-
📅 *Payment Date:* ${b}
🧾 *Receipt No:* ${l}
💳 *Payment Mode:* ${t.paymentMode||t.payment_mode||"Cash"}

`,m?.isMonthly?(u+=`📊 *Payment Accounting & Dues Status:*
• *Monthly Fee Rate:* ₹${m.monthlyRate.toLocaleString("en-IN")}/- per month
• *Previous Payments Considered:* ₹${m.previousPaid.toLocaleString("en-IN")}/-
• *Total Cumulative Paid to Date:* ₹${m.totalPaidToDate.toLocaleString("en-IN")}/-
`,m.coveredMonthsText&&(u+=`• *Months Cleared:* ${m.coveredMonthsText} (${m.coveredMonths.length} Months)
`),m.nextDueMonth&&(u+=`• *⚠️ Next Due Month:* ${m.nextDueMonth} (Due: ₹${m.dueAmount.toLocaleString("en-IN")}/-)
`),u+=`
`):(u+=`📊 *Course Fee Accounting & Balance:*
• *Total Agreed Course Fee:* ₹${m.totalCourseFee.toLocaleString("en-IN")}/-
• *Previous Payments Considered:* ₹${m.previousPaid.toLocaleString("en-IN")}/-
• *Paid in this Voucher:* ₹${o.toLocaleString("en-IN")}/-
• *Total Cumulative Paid:* ₹${m.totalPaidToDate.toLocaleString("en-IN")}/-
`,m.balanceDue>0?(u+=`• *⚠️ Outstanding Balance Due:* ₹${m.balanceDue.toLocaleString("en-IN")}/-
`,u+=`• *Payment Classification:* Part Payment

`):m.previousPaid>0?u+=`• *Payment Classification:* Final Payment ✓ (Course Fee Fully Cleared)

`:u+=`• *Payment Classification:* Paid in Full ✓ (No Balance Due)

`),u+=`Thank you for choosing Coder & AccoTax! ✨
For any queries, contact: +91 70037 56860 | www.codernaccotax.co.in`;let S=null,h=null;if(te.current)try{const f={quality:.95,backgroundColor:"#ffffff",pixelRatio:2,skipFonts:!0,fontEmbedCSS:""};h=await as(te.current,f);try{S=await ns(te.current,f)}catch{h&&(S=await(await fetch(h)).blob())}}catch(f){console.warn("Could not capture voucher image:",f)}let j=!1;if(S&&navigator.clipboard&&typeof window.ClipboardItem<"u")try{await navigator.clipboard.write([new window.ClipboardItem({"image/png":S})]),j=!0}catch(f){console.warn("Could not write image to clipboard:",f)}if(h){const f=document.createElement("a"),P=String(l).replace(/[^a-zA-Z0-9_-]/g,"_"),$=String(i).replace(/[^a-zA-Z0-9_-]/g,"_");f.download=`Voucher_${P}_${$}.png`,f.href=h,f.click()}const k=encodeURIComponent(u),v=`https://api.whatsapp.com/send?phone=${a}&text=${k}`;window.open(v,"_blank"),g.fire({icon:"success",title:"Opening WhatsApp...",html:`
          <div class="text-left text-xs space-y-2.5 text-slate-300 p-3.5 bg-slate-800/90 rounded-xl border border-slate-700 mt-2">
            <p class="text-white font-semibold flex items-center gap-1.5">
              <span class="text-base">✅</span> <b>Voucher image downloaded & prepared!</b>
            </p>
            ${j?`
              <div class="text-emerald-300 font-medium bg-emerald-950/50 p-2.5 rounded-lg border border-emerald-800/50 space-y-1">
                <p>📋 <b>Voucher image copied to your clipboard!</b></p>
                <p class="text-slate-300 text-[11px]">
                  Inside WhatsApp, simply press <kbd class="px-1.5 py-0.5 bg-slate-900 border border-slate-600 rounded text-white font-mono font-bold">Ctrl + V</kbd> to paste the voucher directly!
                </p>
              </div>
            `:`
              <p class="text-slate-300">
                📎 Click the attachment icon (📎) in WhatsApp and attach the downloaded voucher image.
              </p>
            `}
            <div class="pt-2 border-t border-slate-700/80 flex items-center justify-between">
              <span class="text-[11px] text-slate-400">If WhatsApp didn't open automatically:</span>
              <a href="${v}" target="_blank" rel="noopener noreferrer" class="px-3 py-1 bg-emerald-600 hover:bg-emerald-500 text-white font-bold rounded-lg text-xs transition inline-flex items-center gap-1">
                Open WhatsApp
              </a>
            </div>
          </div>
        `,background:"#0f172a",color:"#f8fafc",confirmButtonColor:"#16a34a",confirmButtonText:"Got it!"})}catch(o){console.error("WhatsApp sender error:",o),g.fire({icon:"error",title:"WhatsApp Failed",text:"Could not launch WhatsApp. Please check pop-up settings or download the voucher as JPG.",background:"#0f172a",color:"#f8fafc",confirmButtonColor:"#ef4444"})}finally{Xe(!1)}},Kt=async t=>{if(!(!t||!te.current)){Ge(!0);try{const s=await os(te.current,{quality:.95,backgroundColor:"#ffffff",pixelRatio:2,skipFonts:!0,fontEmbedCSS:""}),a=document.createElement("a"),o=(t.receiptNo||t.receipt_no||"receipt").replace(/[^a-zA-Z0-9_-]/g,"_"),l=(t.studentName||t.student_name||"student").replace(/[^a-zA-Z0-9_-]/g,"_");a.download=`Receipt_${o}_${l}.jpg`,a.href=s,a.click()}catch(s){console.error("Error saving receipt image:",s),g.fire({icon:"error",title:"Export Failed",text:"Could not generate image. Please use the Print Official Voucher button.",background:"#0f172a",color:"#f8fafc"})}finally{Ge(!1)}}},gt=async t=>{if(!t)return;const s=Number(t.amountPaid||t.amount_paid||0),a=Ae||ke,o=window.open("","_blank","width=850,height=750");if(!o){g.fire({icon:"warning",title:"Popup Blocked",text:"Please allow pop-ups for this site to print the official voucher.",background:"#0f172a",color:"#f8fafc"});return}const l=z(t),n=ct(s),i=s.toLocaleString("en-IN"),r=t.receiptNo||t.receipt_no||"N/A",d=t.registrationNumber||t.registration_number||t.student?.registration_number||"N/A",b=t.studentName||t.student_name||t.student?.student_name||"N/A",m=t.studentPhone||t.phone||t.student?.whatsapp||t.student?.phone||"N/A",u=t.courseName||t.course_name||t.course?.course_name||"N/A",S=t.paymentMode||t.payment_mode||"Cash";let h="N/A";const j=t.paymentDate||t.payment_date||t.createdAt||t.created_at;j&&(h=new Date(j).toLocaleDateString("en-IN",{day:"2-digit",month:"long",year:"numeric"}));const k=me(t),v=new Date().toLocaleString("en-IN",{day:"2-digit",month:"2-digit",year:"numeric",hour:"2-digit",minute:"2-digit",hour12:!0}),f=xt(),P=mt(),$=ge||pe,X=Le||ye;o.document.write(`
    <!DOCTYPE html>
    <html>
      <head>
        <title>Fee Receipt - ${r} - Coder & AccoTax</title>
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
            letter-spacing: 0.5px;
          }
          .info-grid {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            gap: 10px;
            margin: 12px 0;
            padding: 10px;
            background: #f7fafc;
            border-radius: 6px;
            border: 1px solid #edf2f7;
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
          .amount-words {
            font-size: 9px;
            color: #4a5568;
            margin-top: 6px;
            padding-top: 6px;
            border-top: 1px dashed #cbd5e0;
            font-style: italic;
            font-weight: 600;
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
            border: 1px solid #e9d5ff;
          }
          .qr-code {
            width: 70px;
            height: 70px;
            object-fit: contain;
          }
          
          .collector-info {
            margin-top: 8px;
            padding: 6px;
            background: #f0fdf4;
            border-radius: 4px;
            font-size: 8px;
            text-align: center;
            border: 1px solid #bbf7d0;
          }
          .collector-label {
            font-weight: bold;
            color: #166534;
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
            margin: 16px 0 8px;
          }
          .signature-line {
            text-align: center;
            width: 45%;
          }
          .signature-line p:first-child {
            font-size: 8px;
            color: #718096;
            margin-bottom: 6px;
          }
          .signature-line p:last-child {
            font-size: 9px;
            font-weight: 600;
            color: #4a5568;
            border-top: 1px solid #cbd5e0;
            padding-top: 5px;
            display: inline-block;
            min-width: 120px;
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
              margin: 0.8cm;
            }
          }
        </style>
      </head>
      <body>
        <div class="receipt-container">
          <div class="receipt">
            <div class="watermark-container">
              <img src="${$}" alt="Watermark" class="watermark-image" />
            </div>
            
            <div class="stamp-container">
              <img src="${X}" alt="Paid Stamp" class="paid-stamp-image" />
            </div>
            
            <div class="receipt-content">
              <div class="header">
                <div class="organisation-name">
                  <img src="${$}" alt="Coder & AccoTax Logo" class="organisation-logo" />
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
                  <div class="info-value">${d}</div>
                </div>
                <div class="info-item">
                  <div class="info-label">Receipt No.</div>
                  <div class="info-value">${r}</div>
                </div>
                <div class="info-item">
                  <div class="info-label">Payment Date</div>
                  <div class="info-value">${h}</div>
                </div>
                <div class="info-item">
                  <div class="info-label">Payment Mode</div>
                  <div class="info-value">${S}</div>
                </div>
              </div>

              <div class="details-section">
                <div class="section-title">Student & Course Details</div>
                <table class="details-table">
                  <tr>
                    <td>Student Name</td>
                    <td>${b}</td>
                  </tr>
                  <tr>
                    <td>Phone Number</td>
                    <td>${m}</td>
                  </tr>
                  <tr>
                    <td>Course Enrolled</td>
                    <td>${u}</td>
                  </tr>
                  ${l?.admissionDateFormatted&&l.admissionDateFormatted!=="N/A"?`
                  <tr>
                    <td>Admission Date</td>
                    <td><b>${l.admissionDateFormatted}</b></td>
                  </tr>
                  `:""}
                  ${k&&k!=="—"?`
                  <tr>
                    <td>${l?.isMonthly?"Coverage Period":"Payment Classification"}</td>
                    <td><b>${k}</b></td>
                  </tr>
                  `:""}
                </table>
              </div>

              <div class="fee-section">
                <div class="fee-row">
                  <span class="fee-label">${l?.isMonthly?"Monthly Fee Rate":"Total Course Fee (Lump sum Plan)"}</span>
                  <span class="fee-amount">₹ ${l?.isMonthly?i:l?.totalCourseFee?.toLocaleString("en-IN")||i}/-</span>
                </div>
                <div class="fee-row">
                  <span class="fee-label">Payment Status</span>
                  ${l?.isMonthly?'<span style="color: #2f855a; font-weight: bold;">✓ Monthly Fee Paid</span>':l?.balanceDue>0?`<span style="color: #c05621; font-weight: bold;">⚠️ Part Payment (Due: ₹ ${l?.balanceDue?.toLocaleString("en-IN")}/-)</span>`:l?.previousPaid>0?'<span style="color: #2f855a; font-weight: bold;">✓ Final Payment (Paid in Full)</span>':'<span style="color: #2f855a; font-weight: bold;">✓ Paid in Full</span>'}
                </div>

                ${l?.isMonthly?`
                <div style="margin-top: 8px; padding-top: 6px; border-top: 1px dashed #cbd5e0; font-size: 8px;">
                  <div style="display: flex; justify-content: space-between; margin-bottom: 2px;">
                    <span style="color: #4a5568;">Monthly Fee Rate:</span>
                    <span style="font-weight: bold; color: #2d3748;">₹ ${l.monthlyRate.toLocaleString("en-IN")}/- per month</span>
                  </div>
                  <div style="display: flex; justify-content: space-between; margin-bottom: 2px;">
                    <span style="color: #4a5568;">Previous Payments Considered:</span>
                    <span style="font-weight: bold; color: #2d3748;">₹ ${l.previousPaid.toLocaleString("en-IN")}/-</span>
                  </div>
                  <div style="display: flex; justify-content: space-between; margin-bottom: 2px;">
                    <span style="color: #4a5568;">Total Cumulative Paid to Date:</span>
                    <span style="font-weight: bold; color: #1a3e6f;">₹ ${l.totalPaidToDate.toLocaleString("en-IN")}/-</span>
                  </div>
                  ${l.coveredMonthsText?`
                  <div style="display: flex; justify-content: space-between; margin-bottom: 3px; background: #ecfdf5; padding: 2px 4px; border-radius: 3px; border: 1px solid #a7f3d0;">
                    <span style="color: #065f46; font-weight: bold;">Months Cleared by this Voucher:</span>
                    <span style="font-weight: bold; color: #047857;">${l.coveredMonthsText} (${l.coveredMonths.length} Months)</span>
                  </div>
                  `:""}
                  ${l.nextDueMonth?`
                  <div style="display: flex; justify-content: space-between; margin-top: 3px; background: #fffbeb; padding: 3px 4px; border-radius: 3px; border: 1px solid #fde68a;">
                    <span style="color: #92400e; font-weight: bold;">⚠️ Next Due Month:</span>
                    <span style="font-weight: 800; color: #b45309;">${l.nextDueMonth} (Due: ₹ ${l.dueAmount.toLocaleString("en-IN")}/-)</span>
                  </div>
                  `:""}
                </div>
                `:`
                <div style="margin-top: 8px; padding-top: 6px; border-top: 1px dashed #cbd5e0; font-size: 8px;">
                  <div style="display: flex; justify-content: space-between; margin-bottom: 2px;">
                    <span style="color: #4a5568;">Total Agreed Course Fee:</span>
                    <span style="font-weight: bold; color: #2d3748;">₹ ${l?.totalCourseFee?.toLocaleString("en-IN")}/-</span>
                  </div>
                  <div style="display: flex; justify-content: space-between; margin-bottom: 2px;">
                    <span style="color: #4a5568;">Previous Payments Considered:</span>
                    <span style="font-weight: bold; color: #2d3748;">₹ ${l?.previousPaid?.toLocaleString("en-IN")}/-</span>
                  </div>
                  <div style="display: flex; justify-content: space-between; margin-bottom: 2px;">
                    <span style="color: #4a5568;">Current Payment (This Voucher):</span>
                    <span style="font-weight: bold; color: #15803d;">₹ ${i}/-</span>
                  </div>
                  <div style="display: flex; justify-content: space-between; margin-bottom: 2px; padding-top: 2px; border-top: 1px solid #e2e8f0;">
                    <span style="color: #2d3748; font-weight: bold;">Total Cumulative Paid:</span>
                    <span style="font-weight: bold; color: #1a3e6f;">₹ ${l?.totalPaidToDate?.toLocaleString("en-IN")}/-</span>
                  </div>
                  ${l?.balanceDue>0?`
                  <div style="display: flex; justify-content: space-between; margin-top: 3px; background: #fffbeb; padding: 3px 4px; border-radius: 3px; border: 1px solid #fde68a;">
                    <span style="color: #92400e; font-weight: bold;">⚠️ Remaining Balance Due:</span>
                    <span style="font-weight: 800; color: #b45309;">₹ ${l?.balanceDue?.toLocaleString("en-IN")}/-</span>
                  </div>
                  `:`
                  <div style="display: flex; justify-content: space-between; margin-top: 3px; background: #ecfdf5; padding: 3px 4px; border-radius: 3px; border: 1px solid #a7f3d0;">
                    <span style="color: #065f46; font-weight: bold;">✓ Fee Clearance Status:</span>
                    <span style="font-weight: bold; color: #047857;">100% Cleared (₹0 Balance Due)</span>
                  </div>
                  `}
                </div>
                `}

                <div class="amount-words">
                  Amount in words: Rupees ${n}
                </div>
              </div>

              <div class="qr-section">
                <div class="qr-info">
                  <div class="qr-title">📱 Pay Online via UPI</div>
                  <div class="qr-text">Scan official QR to pay installments or verify</div>
                  <div class="qr-text">Any UPI App (Google Pay, PhonePe, Paytm)</div>
                  <div class="upi-id">UPI ID: codernaccotax@okhdfcbank</div>
                </div>
                <div class="qr-code" style="width: 78px; height: 96px; display: flex; align-items: center; justify-content: center;">
                  <img src="${a}" alt="CNAT Payment QR Code" style="width: 100%; height: 100%; object-fit: contain; border-radius: 4px; border: 1px solid #e9d5ff;" />
                </div>
              </div>

              <div class="collector-info">
                <span class="collector-label">💰 Collected By:</span> ${f}
                <span style="color: #6b7280; margin: 0 4px;">|</span> 
                <span class="collector-label">📋 Designation:</span> ${P}
                <br/>
                <span style="font-size: 7px; color: #9ca3af;">📅 Printed on: ${v}</span>
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
  `),o.document.close()},Zt=t=>{const s=t.toLowerCase();return s==="cash"?"bg-emerald-500/15 text-emerald-400 border-emerald-500/30":s==="upi"||s.includes("online")?"bg-sky-500/15 text-sky-400 border-sky-500/30":s.includes("bank")||s.includes("neft")?"bg-purple-500/15 text-purple-400 border-purple-500/30":s.includes("cheque")?"bg-amber-500/15 text-amber-400 border-amber-500/30":"bg-indigo-500/15 text-indigo-400 border-indigo-500/30"};return e.jsxs("div",{className:"min-h-screen bg-[#030712] text-slate-100 p-4 sm:p-6 lg:p-8",children:[e.jsx("div",{className:"fixed w-[600px] h-[600px] bg-emerald-600/10 rounded-full blur-[160px] -top-32 -left-20 pointer-events-none"}),e.jsx("div",{className:"fixed w-[500px] h-[500px] bg-sky-600/10 rounded-full blur-[150px] top-1/2 -right-20 pointer-events-none"}),e.jsxs("div",{className:"max-w-7xl mx-auto space-y-6 relative z-10",children:[e.jsxs("div",{className:"bg-slate-900/60 border border-slate-800/80 backdrop-blur-xl rounded-2xl p-5 sm:p-6 shadow-2xl flex flex-col xl:flex-row items-start xl:items-center justify-between gap-5",children:[e.jsxs("div",{children:[e.jsxs("div",{className:"flex items-center gap-2 text-xs text-slate-400 mb-1.5",children:[e.jsx(Nt,{to:"/dashboard",className:"hover:text-white transition",children:"Dashboard"}),e.jsx("span",{children:"/"}),e.jsx("span",{className:"text-slate-400",children:"Finance & Accounts"}),e.jsx("span",{children:"/"}),e.jsx("span",{className:"text-emerald-400 font-semibold",children:"Fees Management"})]}),e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("div",{className:"w-10 h-10 rounded-2xl bg-gradient-to-tr from-emerald-500 to-teal-600 flex items-center justify-center text-white shadow-lg shadow-emerald-500/20 shrink-0",children:e.jsx(ze,{className:"w-5 h-5"})}),e.jsxs("div",{children:[e.jsx("h1",{className:"text-2xl sm:text-3xl font-extrabold text-white tracking-tight flex items-center gap-2",children:"Fees & Collections Desk"}),e.jsx("p",{className:"text-slate-400 text-xs sm:text-sm mt-0.5",children:"Record tuition payments, generate branded vouchers, query student fee ledgers, and audit collections."})]})]})]}),e.jsxs("div",{className:"flex flex-wrap items-center gap-2.5 w-full xl:w-auto",children:[e.jsxs("button",{type:"button",onClick:Bt,className:"flex-1 sm:flex-none px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold bg-gradient-to-r from-emerald-500 via-emerald-600 to-teal-600 hover:from-emerald-400 hover:to-teal-500 text-white transition flex items-center justify-center gap-2 shadow-lg shadow-emerald-500/25 cursor-pointer hover:scale-[1.02] active:scale-[0.98]",title:"Record a fresh fee receipt for an already admitted student",children:[e.jsx(yt,{className:"w-4 h-4 stroke-[2.5]"}),e.jsx("span",{children:"Record Fee Payment"})]}),e.jsxs("button",{type:"button",onClick:()=>{Ie(!0),Te(""),_.length===0&&(ae(!0),O.get("/admissions").then(t=>{const s=t?.data?.data||t?.data||[];Ne(Array.isArray(s)?s.filter(a=>a.student):[])}).catch(t=>console.error("Error loading admissions:",t)).finally(()=>ae(!1)))},className:"flex-1 sm:flex-none px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold bg-gradient-to-r from-indigo-500 to-blue-600 hover:from-indigo-400 hover:to-blue-500 text-white transition flex items-center justify-center gap-2 shadow-lg shadow-indigo-500/20 cursor-pointer hover:scale-[1.02] active:scale-[0.98]",title:"View & Print Student Fee Ledger by Admission ID",children:[e.jsx(K,{className:"w-4 h-4 stroke-[2]"}),e.jsx("span",{children:"Student Ledger"})]}),e.jsxs("button",{type:"button",onClick:()=>{oe(!0),Oe()},className:"flex-1 sm:flex-none px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold bg-gradient-to-r from-amber-500 via-orange-500 to-rose-600 hover:from-amber-400 hover:to-rose-500 text-white transition flex items-center justify-center gap-2 shadow-lg shadow-amber-500/25 cursor-pointer hover:scale-[1.02] active:scale-[0.98]",title:"Audit Student & Course-wise Outstanding Dues (Handles multi-course students)",children:[e.jsx(Z,{className:"w-4 h-4 stroke-[2.5]"}),e.jsx("span",{children:"Outstanding Due List"})]}),e.jsxs("div",{className:"flex items-center gap-1.5 border-l border-slate-800 pl-2",children:[e.jsx(Nt,{to:"/students/student-admission",className:"px-3 py-2 rounded-xl text-xs font-semibold bg-slate-800/90 hover:bg-slate-700 text-slate-200 border border-slate-700/80 transition flex items-center gap-1 shadow-sm",title:"Register and admit a new student",children:e.jsx("span",{children:"+ Admission"})}),e.jsx("button",{onClick:Ut,className:"p-2 rounded-xl text-xs font-semibold bg-slate-800/90 hover:bg-slate-700 text-emerald-400 border border-slate-700/80 transition flex items-center gap-1 cursor-pointer",title:"Export filtered records to Excel",children:e.jsx(jt,{className:"w-4 h-4"})}),e.jsx("button",{onClick:zt,className:"p-2 rounded-xl text-xs font-semibold bg-slate-800/90 hover:bg-slate-700 text-sky-400 border border-slate-700/80 transition flex items-center gap-1 cursor-pointer",title:"Print Current Table View",children:e.jsx(ue,{className:"w-4 h-4"})}),e.jsx("button",{onClick:_e,disabled:Se,className:"p-2 rounded-xl text-xs font-semibold bg-slate-800/90 hover:bg-slate-700 text-slate-300 border border-slate-700/80 transition flex items-center gap-1 cursor-pointer disabled:opacity-50",title:"Refresh Receipts",children:e.jsx(ee,{className:`w-4 h-4 ${Se?"animate-spin text-sky-400":""}`})})]})]})]}),e.jsxs("div",{className:"grid grid-cols-2 lg:grid-cols-4 gap-3.5",children:[e.jsxs("div",{onClick:()=>{M("ALL"),L("ALL"),A("ALL")},className:`rounded-2xl p-4 sm:p-5 backdrop-blur-xl transition cursor-pointer relative overflow-hidden group ${N==="ALL"&&H==="ALL"&&Y==="ALL"?"bg-slate-900/90 border-2 border-emerald-500/60 shadow-lg shadow-emerald-500/10":"bg-slate-900/60 border border-slate-800/80 hover:border-slate-700"}`,children:[e.jsx("div",{className:"absolute -right-2 -bottom-2 w-20 h-20 bg-emerald-500/10 rounded-full blur-xl pointer-events-none group-hover:scale-125 transition"}),e.jsxs("div",{className:"flex items-center justify-between mb-2",children:[e.jsx("span",{className:"text-xs font-semibold text-slate-400",children:"Total Collections"}),e.jsx("div",{className:"w-8 h-8 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center font-bold text-sm",children:"₹"})]}),e.jsxs("div",{className:"text-2xl sm:text-3xl font-black text-emerald-400 tracking-tight",children:["₹",C.totalAmount.toLocaleString()]}),e.jsxs("div",{className:"text-[11px] text-slate-400 mt-1 flex items-center justify-between",children:[e.jsxs("span",{children:["Across ",e.jsx("strong",{className:"text-white",children:C.totalCount})," receipts"]}),e.jsx("span",{className:"text-[10px] text-emerald-400 font-semibold opacity-0 group-hover:opacity-100 transition",children:"View All →"})]})]}),e.jsxs("div",{onClick:()=>{M("CASH"),L("ALL"),A("ALL")},className:`rounded-2xl p-4 sm:p-5 backdrop-blur-xl transition cursor-pointer relative overflow-hidden group ${N==="CASH"?"bg-slate-900/90 border-2 border-emerald-500/60 shadow-lg shadow-emerald-500/10":"bg-slate-900/60 border border-slate-800/80 hover:border-slate-700"}`,children:[e.jsx("div",{className:"absolute -right-2 -bottom-2 w-20 h-20 bg-emerald-600/10 rounded-full blur-xl pointer-events-none group-hover:scale-125 transition"}),e.jsxs("div",{className:"flex items-center justify-between mb-2",children:[e.jsx("span",{className:"text-xs font-semibold text-slate-400",children:"Cash Collections"}),e.jsx("div",{className:"w-8 h-8 rounded-xl bg-emerald-500/20 text-emerald-300 flex items-center justify-center",children:e.jsx(Be,{className:"w-4 h-4"})})]}),e.jsxs("div",{className:"text-2xl sm:text-3xl font-black text-white tracking-tight",children:["₹",C.cashAmount.toLocaleString()]}),e.jsxs("div",{className:"text-[11px] text-slate-400 mt-1 flex items-center justify-between",children:[e.jsxs("span",{children:[C.cashCount," cash payments"]}),e.jsx("span",{className:"text-[10px] text-emerald-400 font-semibold opacity-0 group-hover:opacity-100 transition",children:"Filter Cash →"})]})]}),e.jsxs("div",{onClick:()=>{M("UPI"),L("ALL"),A("ALL")},className:`rounded-2xl p-4 sm:p-5 backdrop-blur-xl transition cursor-pointer relative overflow-hidden group ${N==="UPI"?"bg-slate-900/90 border-2 border-sky-500/60 shadow-lg shadow-sky-500/10":"bg-slate-900/60 border border-slate-800/80 hover:border-slate-700"}`,children:[e.jsx("div",{className:"absolute -right-2 -bottom-2 w-20 h-20 bg-sky-500/10 rounded-full blur-xl pointer-events-none group-hover:scale-125 transition"}),e.jsxs("div",{className:"flex items-center justify-between mb-2",children:[e.jsx("span",{className:"text-xs font-semibold text-slate-400",children:"UPI / QR Digital"}),e.jsx("div",{className:"w-8 h-8 rounded-xl bg-sky-500/20 text-sky-300 flex items-center justify-center",children:e.jsx(We,{className:"w-4 h-4"})})]}),e.jsxs("div",{className:"text-2xl sm:text-3xl font-black text-sky-400 tracking-tight",children:["₹",C.upiAmount.toLocaleString()]}),e.jsxs("div",{className:"text-[11px] text-slate-400 mt-1 flex items-center justify-between",children:[e.jsxs("span",{children:[C.upiCount," digital payments"]}),e.jsx("span",{className:"text-[10px] text-sky-400 font-semibold opacity-0 group-hover:opacity-100 transition",children:"Filter UPI →"})]})]}),e.jsxs("div",{className:`rounded-2xl p-4 sm:p-5 backdrop-blur-xl transition relative overflow-hidden ${N==="MONTHLY"||N==="NON_MONTHLY"?"bg-slate-900/90 border-2 border-purple-500/60 shadow-lg shadow-purple-500/10":"bg-slate-900/60 border border-slate-800/80"}`,children:[e.jsx("div",{className:"absolute -right-2 -bottom-2 w-20 h-20 bg-purple-500/10 rounded-full blur-xl pointer-events-none"}),e.jsxs("div",{className:"flex items-center justify-between mb-2",children:[e.jsx("span",{className:"text-xs font-semibold text-slate-400",children:"Plan Collections"}),e.jsx("div",{className:"w-8 h-8 rounded-xl bg-purple-500/20 text-purple-300 flex items-center justify-center",children:e.jsx(je,{className:"w-4 h-4"})})]}),e.jsxs("div",{className:"space-y-1.5",children:[e.jsxs("button",{type:"button",onClick:()=>{M("MONTHLY"),L("ALL"),A("ALL")},className:`w-full flex items-center justify-between text-xs p-1.5 rounded-lg transition cursor-pointer ${N==="MONTHLY"?"bg-purple-500/30 text-white font-bold border border-purple-500/40":"hover:bg-slate-800/60 text-slate-300"}`,children:[e.jsxs("span",{className:"text-slate-400",children:["Monthly (",C.monthlyCount,"):"]}),e.jsxs("span",{className:"text-emerald-300 font-bold font-mono",children:["₹",C.monthlyTotal.toLocaleString()]})]}),e.jsxs("button",{type:"button",onClick:()=>{M("NON_MONTHLY"),L("ALL"),A("ALL")},className:`w-full flex items-center justify-between text-xs p-1.5 rounded-lg transition cursor-pointer ${N==="NON_MONTHLY"?"bg-amber-500/30 text-white font-bold border border-amber-500/40":"hover:bg-slate-800/60 text-slate-300"}`,children:[e.jsxs("span",{className:"text-slate-400",children:["Course Fee (",C.lumpSumCount,"):"]}),e.jsxs("span",{className:"text-amber-300 font-bold font-mono",children:["₹",C.lumpSumTotal.toLocaleString()]})]})]})]})]}),e.jsxs("div",{className:"bg-slate-900/60 border border-slate-800/80 backdrop-blur-xl rounded-2xl p-4 sm:p-5 shadow-xl space-y-3.5",children:[e.jsxs("div",{className:"flex items-center gap-2 overflow-x-auto pb-1 no-scrollbar",children:[e.jsxs("button",{type:"button",onClick:()=>{M("ALL"),L("ALL"),A("ALL")},className:`px-3.5 py-1.5 rounded-xl text-xs font-bold transition flex items-center gap-1.5 cursor-pointer whitespace-nowrap ${N==="ALL"&&H==="ALL"&&Y==="ALL"?"bg-emerald-500 text-slate-950 shadow-md shadow-emerald-500/20":"bg-slate-950/80 text-slate-400 hover:text-white hover:bg-slate-800 border border-slate-800"}`,children:[e.jsx("span",{children:"All Receipts"}),e.jsx("span",{className:"text-[10px] px-1.5 py-0.5 bg-black/20 rounded-full font-mono",children:R.length})]}),e.jsxs("button",{type:"button",onClick:()=>{M("MONTHLY"),A("ALL"),L("ALL")},className:`px-3.5 py-1.5 rounded-xl text-xs font-bold transition flex items-center gap-1.5 cursor-pointer whitespace-nowrap ${N==="MONTHLY"?"bg-purple-500 text-white shadow-md shadow-purple-500/20":"bg-slate-950/80 text-slate-400 hover:text-white hover:bg-slate-800 border border-slate-800"}`,children:[e.jsx("span",{children:"Monthly Plans"}),e.jsx("span",{className:"text-[10px] px-1.5 py-0.5 bg-black/20 rounded-full font-mono",children:C.monthlyCount})]}),e.jsxs("button",{type:"button",onClick:()=>{M("NON_MONTHLY"),A("ALL"),L("ALL")},className:`px-3.5 py-1.5 rounded-xl text-xs font-bold transition flex items-center gap-1.5 cursor-pointer whitespace-nowrap ${N==="NON_MONTHLY"?"bg-amber-500 text-slate-950 shadow-md shadow-amber-500/20":"bg-slate-950/80 text-slate-400 hover:text-white hover:bg-slate-800 border border-slate-800"}`,children:[e.jsx("span",{children:"Course Fee (Lump sum)"}),e.jsx("span",{className:"text-[10px] px-1.5 py-0.5 bg-black/20 rounded-full font-mono",children:C.lumpSumCount})]}),e.jsxs("button",{type:"button",onClick:()=>{M("CASH"),L("ALL"),A("ALL")},className:`px-3.5 py-1.5 rounded-xl text-xs font-bold transition flex items-center gap-1.5 cursor-pointer whitespace-nowrap ${N==="CASH"?"bg-emerald-600 text-white shadow-md shadow-emerald-600/20":"bg-slate-950/80 text-slate-400 hover:text-white hover:bg-slate-800 border border-slate-800"}`,children:[e.jsx(Be,{className:"w-3.5 h-3.5"}),e.jsx("span",{children:"Cash Desk"}),e.jsx("span",{className:"text-[10px] px-1.5 py-0.5 bg-black/20 rounded-full font-mono",children:C.cashCount})]}),e.jsxs("button",{type:"button",onClick:()=>{M("UPI"),L("ALL"),A("ALL")},className:`px-3.5 py-1.5 rounded-xl text-xs font-bold transition flex items-center gap-1.5 cursor-pointer whitespace-nowrap ${N==="UPI"?"bg-sky-500 text-white shadow-md shadow-sky-500/20":"bg-slate-950/80 text-slate-400 hover:text-white hover:bg-slate-800 border border-slate-800"}`,children:[e.jsx(We,{className:"w-3.5 h-3.5"}),e.jsx("span",{children:"UPI / QR"}),e.jsx("span",{className:"text-[10px] px-1.5 py-0.5 bg-black/20 rounded-full font-mono",children:C.upiCount})]}),C.todayCount>0&&e.jsxs("button",{type:"button",onClick:()=>{M("TODAY"),L("ALL"),A("ALL")},className:`px-3.5 py-1.5 rounded-xl text-xs font-bold transition flex items-center gap-1.5 cursor-pointer whitespace-nowrap ${N==="TODAY"?"bg-teal-500 text-white shadow-md shadow-teal-500/20":"bg-slate-950/80 text-teal-400 hover:text-white hover:bg-slate-800 border border-teal-500/30"}`,children:[e.jsx("span",{className:"w-2 h-2 rounded-full bg-teal-400 animate-pulse"}),e.jsx("span",{children:"Today's Receipts"}),e.jsx("span",{className:"text-[10px] px-1.5 py-0.5 bg-black/20 rounded-full font-mono",children:C.todayCount})]}),e.jsxs("button",{type:"button",onClick:()=>{oe(!0),Oe()},className:"ml-auto px-3.5 py-1.5 rounded-xl text-xs font-bold transition flex items-center gap-1.5 cursor-pointer whitespace-nowrap bg-gradient-to-r from-amber-500/20 to-rose-500/20 text-amber-300 hover:from-amber-500/30 hover:to-rose-500/30 border border-amber-500/40 shadow-sm",title:"Open Student & Course-wise Due List Desk",children:[e.jsx(Z,{className:"w-3.5 h-3.5 text-amber-400"}),e.jsx("span",{children:"Outstanding Due Desk"})]})]}),e.jsxs("div",{className:"flex flex-col md:flex-row items-stretch md:items-center justify-between gap-3 pt-1",children:[e.jsxs("div",{className:"relative flex-1",children:[e.jsx(ve,{className:"w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400"}),e.jsx("input",{type:"text",placeholder:"Search by student name, registration #, receipt # (e.g. REC-10004), phone, or course...",value:q,onChange:t=>De(t.target.value),className:"w-full bg-slate-950 border border-slate-700/80 rounded-xl pl-10 pr-9 py-2 text-xs sm:text-sm text-white placeholder-slate-500 focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition"}),q&&e.jsx("button",{type:"button",onClick:()=>De(""),className:"absolute right-3 top-1/2 -translate-y-1/2 text-slate-500 hover:text-white cursor-pointer",children:e.jsx(W,{className:"w-4 h-4"})})]}),e.jsxs("div",{className:"flex items-center gap-2 flex-wrap",children:[e.jsx("div",{className:"flex items-center gap-1 text-xs",children:e.jsxs("select",{value:H,onChange:t=>L(t.target.value),className:"bg-slate-950 border border-slate-700 text-slate-200 rounded-xl px-2.5 py-2 text-xs focus:outline-none focus:border-emerald-500 cursor-pointer",title:"Filter by payment mode",children:[e.jsx("option",{value:"ALL",children:"All Modes"}),e.jsx("option",{value:"Cash",children:"Cash Only"}),e.jsx("option",{value:"UPI",children:"UPI / Online"}),e.jsx("option",{value:"Bank Transfer",children:"Bank Transfer"}),e.jsx("option",{value:"Cheque",children:"Cheque"}),e.jsx("option",{value:"Card",children:"Card"})]})}),e.jsx("div",{className:"flex items-center gap-1 text-xs",children:e.jsxs("select",{value:Y,onChange:t=>A(t.target.value),className:"bg-slate-950 border border-slate-700 text-slate-200 rounded-xl px-2.5 py-2 text-xs focus:outline-none focus:border-emerald-500 cursor-pointer",title:"Filter by fee plan type",children:[e.jsx("option",{value:"ALL",children:"All Plan Types"}),e.jsx("option",{value:"monthly",children:"Monthly Plans"}),e.jsx("option",{value:"non_monthly",children:"Course Fees (Lump sum)"})]})}),e.jsx("div",{className:"flex items-center gap-1 text-xs",children:e.jsxs("select",{value:`${Pe}_${be}`,onChange:t=>{const[s,a]=t.target.value.split("_");wt(s),Ct(a)},className:"bg-slate-950 border border-slate-700 text-slate-200 rounded-xl px-2.5 py-2 text-xs focus:outline-none focus:border-emerald-500 cursor-pointer font-medium",title:"Sort order",children:[e.jsx("option",{value:"date_desc",children:"Date: Newest First"}),e.jsx("option",{value:"date_asc",children:"Date: Oldest First"}),e.jsx("option",{value:"amount_desc",children:"Amount: Highest First"}),e.jsx("option",{value:"amount_asc",children:"Amount: Lowest First"})]})})]})]}),e.jsxs("div",{className:"flex items-center justify-between text-xs text-slate-400 border-t border-slate-800/80 pt-2.5",children:[e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsxs("span",{children:["Showing ",e.jsx("strong",{className:"text-white",children:G.length})," of ",e.jsx("strong",{className:"text-slate-300",children:R.length})," receipts"]}),e.jsx("span",{className:"text-slate-600",children:"•"}),e.jsxs("span",{className:"text-emerald-400 font-bold",children:["Filtered Total: ₹",Ot.toLocaleString(),"/-"]})]}),(q||H!=="ALL"||Y!=="ALL"||N!=="ALL")&&e.jsx("button",{type:"button",onClick:()=>{De(""),L("ALL"),A("ALL"),M("ALL")},className:"text-xs text-emerald-400 hover:underline font-semibold cursor-pointer",children:"Reset All Filters"})]})]}),e.jsx("div",{className:"bg-slate-900/60 border border-slate-800/80 backdrop-blur-xl rounded-2xl shadow-xl overflow-hidden",children:e.jsx("div",{className:"overflow-x-auto",children:e.jsxs("table",{className:"w-full text-left border-collapse text-xs sm:text-sm",children:[e.jsx("thead",{children:e.jsxs("tr",{className:"border-b border-slate-800 bg-slate-950/80 text-slate-400 text-[11px] font-bold uppercase tracking-wider",children:[e.jsx("th",{className:"p-3.5",children:"Receipt #"}),e.jsx("th",{className:"p-3.5",children:"Payment Date"}),e.jsx("th",{className:"p-3.5",children:"Student & Contact"}),e.jsx("th",{className:"p-3.5",children:"Course Program"}),e.jsx("th",{className:"p-3.5",children:"Mode"}),e.jsx("th",{className:"p-3.5",children:"Coverage / Status"}),e.jsx("th",{className:"p-3.5 text-right",children:"Amount Paid"}),e.jsx("th",{className:"p-3.5 text-center",children:"Quick Actions"})]})}),e.jsx("tbody",{className:"divide-y divide-slate-800/60",children:Se?e.jsx("tr",{children:e.jsx("td",{colSpan:8,className:"text-center py-16 text-slate-400",children:e.jsxs("div",{className:"flex flex-col items-center justify-center gap-3",children:[e.jsx("div",{className:"animate-spin rounded-full h-8 w-8 border-2 border-emerald-500 border-t-transparent"}),e.jsx("span",{className:"text-xs",children:"Loading fee receipts..."})]})})}):G.length===0?e.jsx("tr",{children:e.jsx("td",{colSpan:8,className:"text-center py-16 text-slate-400",children:e.jsxs("div",{className:"flex flex-col items-center justify-center gap-2",children:[e.jsx(ze,{className:"w-10 h-10 text-slate-600 stroke-[1.5]"}),e.jsx("p",{className:"text-sm font-semibold text-slate-300",children:"No payment receipts found"}),e.jsx("p",{className:"text-xs text-slate-500 max-w-sm",children:q?`No records match your search "${q}".`:"No student fee payments have been recorded for the selected filter."})]})})}):G.map(t=>{const s=t.receiptNo||t.receipt_no,a=t.studentName||t.student_name||t.student?.student_name||"Student",o=t.registrationNumber||t.registration_number||t.student?.registration_number,l=t.studentPhone||t.phone||t.student?.whatsapp||t.student?.phone,n=t.courseName||t.course_name||t.course?.course_name||"Course",i=t.paymentMode||t.payment_mode||"Cash",r=(t.feeType||t.fee_type||"").toLowerCase(),d=Number(t.amountPaid||t.amount_paid||0),b=t.paymentDate||t.payment_date||t.createdAt||t.created_at,m=b?new Date(b).toLocaleDateString("en-IN",{day:"2-digit",month:"short",year:"numeric"}):"N/A";return e.jsxs("tr",{className:"hover:bg-slate-800/40 transition group",children:[e.jsx("td",{className:"p-3.5 font-mono text-xs font-bold text-sky-400 whitespace-nowrap",children:e.jsxs("div",{className:"flex items-center gap-1.5",children:[e.jsx("span",{className:"bg-sky-950/60 border border-sky-800/60 px-2 py-0.5 rounded-lg",children:s}),e.jsx("button",{onClick:()=>Et(s),className:"opacity-0 group-hover:opacity-100 transition text-slate-500 hover:text-white p-0.5 rounded cursor-pointer",title:"Copy Receipt #",children:e.jsx(is,{className:"w-3 h-3"})}),kt===s&&e.jsx("span",{className:"text-[10px] text-emerald-400 font-sans font-normal",children:"Copied!"})]})}),e.jsx("td",{className:"p-3.5 text-slate-300 whitespace-nowrap text-xs",children:m}),e.jsx("td",{className:"p-3.5 min-w-[200px]",children:e.jsxs("div",{className:"flex items-center gap-2.5",children:[e.jsx("div",{className:"w-8 h-8 rounded-xl bg-gradient-to-br from-slate-800 to-slate-700 border border-slate-700 text-emerald-400 font-bold text-xs flex items-center justify-center shrink-0 font-mono shadow-sm",children:a.substring(0,2).toUpperCase()}),e.jsxs("div",{className:"min-w-0",children:[e.jsx("p",{className:"font-semibold text-white truncate text-xs sm:text-sm flex items-center gap-1.5",children:e.jsx("span",{children:a})}),e.jsxs("div",{className:"flex items-center gap-2 text-[10px] text-slate-400 font-mono mt-0.5",children:[o&&e.jsx("span",{className:"text-slate-300",children:o}),l&&e.jsxs(e.Fragment,{children:[e.jsx("span",{className:"text-slate-600",children:"•"}),e.jsxs("a",{href:`https://api.whatsapp.com/send?phone=91${l.replace(/\D/g,"")}`,target:"_blank",rel:"noreferrer",className:"text-emerald-400 hover:underline flex items-center gap-0.5",title:"Open WhatsApp Chat",children:[e.jsx(V,{className:"w-2.5 h-2.5"}),e.jsx("span",{children:l})]})]})]})]})]})}),e.jsxs("td",{className:"p-3.5 min-w-[180px]",children:[e.jsx("p",{className:"text-xs font-semibold text-slate-200 truncate",children:n}),e.jsx("span",{className:`inline-block mt-0.5 px-2 py-0.2 rounded text-[9px] font-semibold ${r==="monthly"?"bg-purple-500/15 text-purple-300 border border-purple-500/30":"bg-amber-500/15 text-amber-300 border border-amber-500/30"}`,children:r==="monthly"?"Monthly Plan":"Course Fee Plan"})]}),e.jsx("td",{className:"p-3.5 whitespace-nowrap",children:e.jsxs("span",{className:`px-2.5 py-1 rounded-lg text-[11px] font-bold border flex items-center gap-1 w-fit ${Zt(i)}`,children:[i.toLowerCase()==="cash"?e.jsx(Be,{className:"w-3 h-3"}):e.jsx(We,{className:"w-3 h-3"}),e.jsx("span",{children:i})]})}),e.jsx("td",{className:"p-3.5 text-[11px] text-slate-300 whitespace-nowrap",children:(()=>{const u=me(t);return u==="Part Payment"?e.jsx("span",{className:"px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-amber-500/15 text-amber-300 border border-amber-500/30",children:"Part Payment"}):u==="Final Payment"?e.jsx("span",{className:"px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-teal-500/15 text-teal-300 border border-teal-500/30",children:"Final Payment"}):u==="Paid in Full"?e.jsx("span",{className:"px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-emerald-500/15 text-emerald-300 border border-emerald-500/30",children:"Paid in Full"}):u!=="—"?e.jsx("span",{className:"font-semibold text-slate-200",children:u}):e.jsx("span",{className:"text-slate-600",children:"—"})})()}),e.jsx("td",{className:"p-3.5 text-right whitespace-nowrap",children:e.jsxs("span",{className:"font-extrabold text-emerald-400 text-sm sm:text-base font-mono",children:["₹",d.toLocaleString()]})}),e.jsx("td",{className:"p-3.5 text-center whitespace-nowrap",children:e.jsxs("div",{className:"flex items-center justify-center gap-1.5",children:[e.jsxs("button",{type:"button",onClick:()=>fe(t),className:"px-2.5 py-1.5 rounded-lg text-xs font-semibold bg-slate-800 hover:bg-slate-700 text-slate-200 hover:text-white border border-slate-700 transition cursor-pointer flex items-center gap-1",title:"View Official Receipt Voucher",children:[e.jsx(je,{className:"w-3.5 h-3.5 text-sky-400"}),e.jsx("span",{children:"Voucher"})]}),e.jsx("button",{type:"button",onClick:()=>gt(t),className:"p-1.5 rounded-lg text-xs font-semibold bg-emerald-500/15 hover:bg-emerald-500/30 text-emerald-300 border border-emerald-500/30 transition cursor-pointer",title:"Direct Print Official Voucher",children:e.jsx(ue,{className:"w-3.5 h-3.5"})}),e.jsx("button",{type:"button",onClick:()=>ft(t),className:"p-1.5 rounded-lg text-xs font-semibold bg-emerald-600/15 hover:bg-emerald-600/30 text-emerald-300 border border-emerald-500/30 transition cursor-pointer",title:"Share Fee Voucher via WhatsApp",children:e.jsx(V,{className:"w-3.5 h-3.5"})}),e.jsx("button",{type:"button",onClick:()=>pt(t),className:"p-1.5 rounded-lg text-xs font-semibold bg-indigo-500/15 hover:bg-indigo-500/30 text-indigo-300 border border-indigo-500/30 transition cursor-pointer",title:"View & Print Full Student Ledger (Account Statement)",children:e.jsx(K,{className:"w-3.5 h-3.5"})})]})})]},t.id||s)})})]})})})]}),e.jsx(Ce,{children:Lt&&e.jsx("div",{className:"fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/85 backdrop-blur-md animate-fadeIn overflow-y-auto",children:e.jsxs(he.div,{initial:{scale:.95,opacity:0,y:10},animate:{scale:1,opacity:1,y:0},exit:{scale:.95,opacity:0,y:10},className:"w-full max-w-xl bg-slate-900 border border-slate-700 rounded-3xl shadow-2xl overflow-hidden text-slate-100 p-5 sm:p-6 space-y-4 my-auto max-h-[95vh] flex flex-col",children:[e.jsxs("div",{className:"flex items-center justify-between border-b border-slate-800 pb-3 shrink-0",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("div",{className:"w-10 h-10 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center border border-emerald-500/30",children:e.jsx(Ve,{className:"w-5 h-5"})}),e.jsxs("div",{children:[e.jsx("h3",{className:"font-bold text-white text-base sm:text-lg flex items-center gap-2",children:"Record Fresh Fee Payment"}),e.jsx("p",{className:"text-xs text-slate-400",children:"Collect tuition installment for an already admitted student"})]})]}),e.jsx("button",{type:"button",onClick:()=>se(!1),className:"p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition cursor-pointer",children:e.jsx(W,{className:"w-5 h-5"})})]}),e.jsxs("form",{onSubmit:qt,className:"space-y-4 overflow-y-auto pr-1",children:[e.jsxs("div",{className:"space-y-2",children:[e.jsxs("label",{className:"text-xs font-bold text-slate-300 uppercase tracking-wider flex items-center justify-between",children:[e.jsx("span",{children:"1. Select Admitted Student"}),y&&e.jsx("button",{type:"button",onClick:()=>de(null),className:"text-xs text-sky-400 hover:underline cursor-pointer lowercase",children:"(change student)"})]}),Ke?e.jsxs("div",{className:"p-4 rounded-xl bg-slate-800/60 border border-slate-700 text-center text-xs text-slate-400 flex items-center justify-center gap-2",children:[e.jsx(ee,{className:"w-4 h-4 animate-spin text-emerald-400"}),"Loading admitted students..."]}):y?e.jsxs("div",{className:"p-3.5 rounded-2xl bg-emerald-950/30 border border-emerald-500/30 flex items-start justify-between",children:[e.jsxs("div",{className:"space-y-1",children:[e.jsxs("div",{className:"text-xs font-bold text-white flex items-center gap-2",children:[e.jsx("span",{className:"text-sm",children:y.student?.studentName||y.student?.student_name}),e.jsx("span",{className:"text-[10px] bg-emerald-500/20 text-emerald-300 px-2 py-0.5 rounded-full font-mono border border-emerald-500/30",children:y.student?.registrationNumber||y.admissionNumber})]}),e.jsxs("p",{className:"text-xs text-emerald-200/80",children:["Course: ",e.jsx("strong",{className:"text-white",children:y.course?.courseName||y.course?.course_name})]}),e.jsxs("p",{className:"text-[11px] text-slate-400",children:["Phone / WhatsApp: ",e.jsx("span",{className:"font-mono text-slate-300",children:y.student?.whatsapp||y.student?.phone1||"N/A"})]})]}),e.jsxs("div",{className:"text-right",children:[e.jsxs("span",{className:"text-xs font-extrabold text-emerald-400 block",children:["₹",Number(y.courseFees||y.course?.courseFees||0).toLocaleString("en-IN")]}),e.jsx("span",{className:"text-[10px] text-emerald-400/70 font-semibold uppercase",children:Number(y.feeModesId)===1?"Monthly Rate":"Total Fee"})]})]}):e.jsxs("div",{className:"space-y-2",children:[e.jsxs("div",{className:"relative",children:[e.jsx(ve,{className:"w-4 h-4 text-slate-400 absolute left-3 top-3"}),e.jsx("input",{type:"text",value:Me,onChange:t=>at(t.target.value),placeholder:"Search student by name, registration #, or WhatsApp...",className:"w-full bg-slate-800/90 border border-slate-700 rounded-xl pl-9 pr-3 py-2 text-xs text-white placeholder-slate-400 focus:outline-none focus:border-emerald-500"})]}),e.jsxs("div",{className:"max-h-48 overflow-y-auto rounded-xl border border-slate-800 bg-slate-950/60 divide-y divide-slate-800/60",children:[_.filter(t=>{if(!Me.trim())return!0;const s=Me.toLowerCase(),a=(t.student?.studentName||t.student?.student_name||"").toLowerCase(),o=(t.admissionNumber||t.student?.registrationNumber||"").toLowerCase(),l=(t.student?.whatsapp||t.student?.phone1||"").toLowerCase(),n=(t.course?.courseName||t.course?.course_name||"").toLowerCase();return a.includes(s)||o.includes(s)||l.includes(s)||n.includes(s)}).map(t=>e.jsxs("div",{onClick:()=>Wt(t),className:"p-2.5 hover:bg-emerald-500/10 transition cursor-pointer flex items-center justify-between group",children:[e.jsxs("div",{children:[e.jsxs("div",{className:"text-xs font-bold text-slate-200 group-hover:text-emerald-400 flex items-center gap-2",children:[e.jsx("span",{children:t.student?.studentName||t.student?.student_name}),e.jsx("span",{className:"text-[10px] px-1.5 py-0.5 rounded bg-slate-800 text-slate-400 font-mono",children:t.student?.registrationNumber||t.admissionNumber})]}),e.jsxs("div",{className:"text-[11px] text-slate-400 mt-0.5",children:["Course: ",e.jsx("strong",{className:"text-slate-300",children:t.course?.courseName||t.course?.course_name})," • ",e.jsx("span",{children:Number(t.feeModesId)===1?"Monthly Plan":"Lumpsum Plan"})]})]}),e.jsxs("div",{className:"text-right",children:[e.jsxs("span",{className:"text-xs font-bold text-emerald-400",children:["₹",Number(t.courseFees||t.course?.courseFees||0).toLocaleString("en-IN")]}),e.jsx("div",{className:"text-[10px] text-slate-500",children:Number(t.feeModesId)===1?"/ month":"total fee"})]})]},t.admissionId||t.id)),_.length===0&&e.jsx("div",{className:"p-4 text-center text-xs text-slate-400",children:"No admitted students found in database."})]})]})]}),y&&(()=>{const t=Re(y);if(!t)return null;const s=Vt(t,ne);return e.jsxs("div",{className:"space-y-2",children:[e.jsxs("label",{className:"text-xs font-bold text-slate-300 uppercase tracking-wider flex items-center gap-1.5",children:[e.jsx(ds,{className:"w-3.5 h-3.5 text-amber-400"}),e.jsx("span",{children:"2. Current Dues & Accounting Ledger"})]}),e.jsxs("div",{className:"p-3.5 rounded-2xl bg-slate-950/70 border border-slate-800 text-xs space-y-2",children:[e.jsxs("div",{className:"grid grid-cols-2 sm:grid-cols-3 gap-2 text-slate-300 text-[11px]",children:[e.jsxs("div",{children:[e.jsx("span",{className:"text-slate-500 block",children:"Admission Date:"}),e.jsx("span",{className:"font-semibold text-white",children:t.admissionDate||"N/A"})]}),e.jsxs("div",{children:[e.jsx("span",{className:"text-slate-500 block",children:"Previously Paid:"}),e.jsxs("span",{className:"font-semibold text-white font-mono",children:["₹",t.previousPaid.toLocaleString("en-IN"),"/-"]})]}),e.jsxs("div",{children:[e.jsx("span",{className:"text-slate-500 block",children:"Fee Plan:"}),e.jsx("span",{className:"font-semibold text-emerald-400",children:t.isMonthly?`Monthly (₹${t.monthlyRate}/mo)`:"Lump sum Course Fee"})]})]}),t.isMonthly?e.jsxs("div",{className:"space-y-1.5 pt-2 border-t border-dashed border-slate-800",children:[t.clearedMonthsList.length>0?e.jsxs("div",{className:"text-[11px] text-slate-400",children:[e.jsx("span",{className:"text-emerald-400 font-semibold",children:"Months Already Cleared:"})," ",t.clearedMonthsList.join(", ")," (",t.monthsCleared," Months)"]}):e.jsx("div",{className:"text-[11px] text-slate-400 italic",children:"No prior monthly installments recorded."}),e.jsxs("div",{className:"p-2 rounded-xl bg-amber-500/10 border border-amber-500/30 text-amber-300 flex items-center justify-between text-xs",children:[e.jsxs("span",{className:"font-bold flex items-center gap-1.5",children:[e.jsx(Z,{className:"w-4 h-4 text-amber-400"}),"Next Due Month: ",t.nextDueMonth]}),e.jsxs("span",{className:"font-extrabold font-mono text-amber-400",children:["Due: ₹",t.monthlyRate.toLocaleString("en-IN"),"/-"]})]})]}):e.jsxs("div",{className:"space-y-1.5 pt-2 border-t border-dashed border-slate-800",children:[e.jsxs("div",{className:"flex justify-between items-center text-xs",children:[e.jsx("span",{className:"text-slate-400",children:"Total Course Fee:"}),e.jsxs("span",{className:"font-bold text-white font-mono",children:["₹",t.totalCourseFee.toLocaleString("en-IN"),"/-"]})]}),e.jsxs("div",{className:"p-2 rounded-xl bg-amber-500/10 border border-amber-500/30 text-amber-300 flex items-center justify-between text-xs",children:[e.jsxs("span",{className:"font-bold flex items-center gap-1.5",children:[e.jsx(Z,{className:"w-4 h-4 text-amber-400"}),"Outstanding Balance Due:"]}),e.jsxs("span",{className:"font-extrabold font-mono text-amber-400",children:["₹",t.balanceDue.toLocaleString("en-IN"),"/-"]})]})]})]}),e.jsxs("div",{className:"space-y-3 pt-2",children:[e.jsx("label",{className:"text-xs font-bold text-slate-300 uppercase tracking-wider",children:"3. Payment Details"}),e.jsxs("div",{children:[e.jsxs("div",{className:"flex justify-between items-center text-xs mb-1.5",children:[e.jsx("span",{className:"text-slate-300 font-semibold",children:"Amount Received (₹):"}),t.isMonthly&&e.jsxs("div",{className:"flex items-center gap-1.5",children:[e.jsxs("button",{type:"button",onClick:()=>E(t.monthlyRate.toString()),className:"text-[10px] px-2 py-0.5 rounded bg-slate-800 text-sky-400 hover:bg-slate-700 cursor-pointer",children:["1 Mo (₹",t.monthlyRate,")"]}),e.jsxs("button",{type:"button",onClick:()=>E((t.monthlyRate*2).toString()),className:"text-[10px] px-2 py-0.5 rounded bg-slate-800 text-sky-400 hover:bg-slate-700 cursor-pointer",children:["2 Mos (₹",t.monthlyRate*2,")"]}),e.jsxs("button",{type:"button",onClick:()=>E((t.monthlyRate*3).toString()),className:"text-[10px] px-2 py-0.5 rounded bg-slate-800 text-sky-400 hover:bg-slate-700 cursor-pointer",children:["3 Mos (₹",t.monthlyRate*3,")"]})]})]}),e.jsxs("div",{className:"relative",children:[e.jsx(Ve,{className:"w-4 h-4 text-slate-400 absolute left-3 top-3"}),e.jsx("input",{type:"number",min:"1",step:"any",value:ne,onChange:a=>E(a.target.value),placeholder:"Enter amount received...",required:!0,className:"w-full bg-slate-800/90 border border-slate-700 rounded-xl pl-9 pr-3 py-2.5 text-sm text-white font-mono font-bold focus:outline-none focus:border-emerald-500"})]}),t.isMonthly&&s.length>0&&e.jsxs("div",{className:"mt-1.5 text-[11px] text-emerald-400 flex items-center gap-1 font-medium bg-emerald-500/10 p-2 rounded-lg border border-emerald-500/20",children:[e.jsx(we,{className:"w-3.5 h-3.5 text-emerald-400 shrink-0"}),e.jsxs("span",{children:["This payment clears: ",e.jsx("strong",{children:s.join(", ")})," (",s.length," Month",s.length>1?"s":"",")"]})]}),!t.isMonthly&&ne&&e.jsxs("div",{className:"mt-1.5 text-[11px] text-slate-300 flex items-center justify-between bg-slate-800/70 p-2 rounded-lg border border-slate-700",children:[e.jsx("span",{children:"Remaining Balance after this payment:"}),e.jsxs("strong",{className:"font-mono text-amber-400",children:["₹",Math.max(0,t.balanceDue-Number(ne)).toLocaleString("en-IN"),"/-"]})]})]}),e.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-2 gap-3",children:[e.jsxs("div",{children:[e.jsx("label",{className:"text-xs text-slate-300 font-semibold mb-1 block",children:"Payment Mode:"}),e.jsxs("select",{value:Ze,onChange:a=>At(a.target.value),className:"w-full bg-slate-800/90 border border-slate-700 rounded-xl px-3 py-2 text-xs text-white focus:outline-none focus:border-emerald-500 cursor-pointer",children:[e.jsx("option",{value:"Cash",children:"Cash"}),e.jsx("option",{value:"UPI",children:"UPI / Google Pay / PhonePe"}),e.jsx("option",{value:"Bank Transfer",children:"Bank Transfer (NEFT/IMPS)"}),e.jsx("option",{value:"Card",children:"Debit / Credit Card"}),e.jsx("option",{value:"Cheque",children:"Cheque"})]})]}),e.jsxs("div",{children:[e.jsx("label",{className:"text-xs text-slate-300 font-semibold mb-1 block",children:"Payment Date:"}),e.jsx("input",{type:"date",value:et,onChange:a=>Mt(a.target.value),max:new Date().toISOString().split("T")[0],className:"w-full bg-slate-800/90 border border-slate-700 rounded-xl px-3 py-2 text-xs text-white focus:outline-none focus:border-emerald-500"})]})]})]})]})})(),e.jsxs("div",{className:"pt-3 border-t border-slate-800 flex items-center justify-end gap-2.5",children:[e.jsx("button",{type:"button",onClick:()=>se(!1),className:"px-4 py-2 rounded-xl text-xs font-semibold text-slate-400 hover:text-white hover:bg-slate-800 transition cursor-pointer",children:"Cancel"}),e.jsx("button",{type:"submit",disabled:tt||!y||!ne,className:"px-5 py-2.5 rounded-xl text-xs font-bold bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-400 hover:to-teal-500 text-white transition flex items-center gap-2 shadow-lg shadow-emerald-500/25 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed",children:tt?e.jsxs(e.Fragment,{children:[e.jsx(ee,{className:"w-3.5 h-3.5 animate-spin"}),e.jsx("span",{children:"Recording Payment..."})]}):e.jsxs(e.Fragment,{children:[e.jsx(Ve,{className:"w-3.5 h-3.5"}),e.jsx("span",{children:"Confirm & Record Payment"})]})})]})]})]})})}),e.jsx(Ce,{children:c&&e.jsx("div",{className:"fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/85 backdrop-blur-md animate-fadeIn overflow-y-auto",children:e.jsxs(he.div,{initial:{scale:.95,opacity:0,y:10},animate:{scale:1,opacity:1,y:0},exit:{scale:.95,opacity:0,y:10},className:"w-full max-w-2xl bg-slate-900 border border-slate-700 rounded-3xl shadow-2xl overflow-hidden text-slate-100 p-4 sm:p-6 space-y-4 my-auto max-h-[95vh] flex flex-col",children:[e.jsxs("div",{className:"flex items-center justify-between border-b border-slate-800 pb-3 shrink-0",children:[e.jsxs("div",{className:"flex items-center gap-2.5",children:[e.jsx("div",{className:"w-10 h-10 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center border border-emerald-500/30",children:e.jsx(ze,{className:"w-5 h-5"})}),e.jsxs("div",{children:[e.jsxs("h3",{className:"font-bold text-white text-base sm:text-lg flex items-center gap-2",children:["Official Fee Receipt Voucher",e.jsx("span",{className:"text-[10px] uppercase font-bold bg-emerald-500/20 text-emerald-300 px-2 py-0.5 rounded-full border border-emerald-500/30",children:"Official"})]}),e.jsx("p",{className:"text-xs text-sky-400 font-mono",children:c.receiptNo||c.receipt_no})]})]}),e.jsx("button",{onClick:()=>fe(null),className:"p-2 rounded-xl text-slate-400 hover:text-white hover:bg-slate-800 transition cursor-pointer",title:"Close Voucher",children:e.jsx(W,{className:"w-5 h-5"})})]}),e.jsx("div",{className:"overflow-y-auto pr-1 flex-1 py-1",children:e.jsxs("div",{ref:te,className:"w-full max-w-xl mx-auto bg-white text-slate-900 rounded-2xl shadow-xl overflow-hidden relative border border-slate-200 p-5 sm:p-6 select-text font-serif",style:{backgroundColor:"#ffffff"},children:[e.jsx("div",{className:"absolute inset-0 flex items-center justify-center pointer-events-none opacity-[0.07]",children:e.jsx("img",{src:ge||pe,alt:"Watermark",className:"w-64 h-auto transform -rotate-25"})}),e.jsx("div",{className:"absolute top-[56%] right-[8%] transform -translate-y-1/2 -rotate-12 z-20 pointer-events-none",children:e.jsx("img",{src:Le||ye,alt:"Paid Stamp",className:"w-28 sm:w-32 opacity-70 drop-shadow-md"})}),e.jsxs("div",{className:"relative z-10 space-y-4",children:[e.jsxs("div",{className:"text-center border-b-2 border-[#1a3e6f] pb-3",children:[e.jsxs("div",{className:"flex items-center justify-center gap-2.5 mb-1",children:[e.jsx("img",{src:ge||pe,alt:"Coder & AccoTax Logo",className:"h-9 w-auto"}),e.jsx("span",{className:"text-2xl font-bold tracking-tight text-[#1a3e6f]",children:"CODER & ACCOTAX"})]}),e.jsx("p",{className:"text-[10px] text-slate-600 font-sans",children:"Quality Education | Professional Training | Tax Solutions"}),e.jsx("p",{className:"text-[9px] text-slate-500 font-sans mt-0.5",children:"25(10/A) Shibtala Road, PO-N C Pukur, Barrackpore, Kolkata-700122"}),e.jsxs("div",{className:"flex items-center justify-center gap-4 text-[9px] text-slate-500 font-sans mt-0.5",children:[e.jsx("span",{children:"📞 +91 70037 56860"}),e.jsx("span",{children:"✉️ info@codernaccotax.co.in"})]}),e.jsx("div",{className:"mt-2.5",children:e.jsx("span",{className:"text-xs uppercase font-bold tracking-wider px-3.5 py-1 bg-slate-100 text-slate-800 rounded-full border border-slate-200 font-sans",children:"Fee Payment Receipt"})})]}),e.jsxs("div",{className:"grid grid-cols-2 gap-2.5 p-3 rounded-xl bg-slate-50 border border-slate-200 text-xs font-sans",children:[e.jsxs("div",{children:[e.jsx("span",{className:"text-[9px] uppercase tracking-wider text-slate-500 font-bold block",children:"Registration No."}),e.jsx("span",{className:"font-mono font-bold text-slate-800 text-xs",children:c.registrationNumber||c.registration_number||c.student?.registration_number||"N/A"})]}),e.jsxs("div",{children:[e.jsx("span",{className:"text-[9px] uppercase tracking-wider text-slate-500 font-bold block",children:"Receipt No."}),e.jsx("span",{className:"font-mono font-bold text-sky-700 text-xs",children:c.receiptNo||c.receipt_no})]}),e.jsxs("div",{children:[e.jsx("span",{className:"text-[9px] uppercase tracking-wider text-slate-500 font-bold block",children:"Payment Date"}),e.jsx("span",{className:"font-medium text-slate-800",children:c.paymentDate?new Date(c.paymentDate).toLocaleDateString("en-IN",{day:"2-digit",month:"long",year:"numeric"}):"N/A"})]}),e.jsxs("div",{children:[e.jsx("span",{className:"text-[9px] uppercase tracking-wider text-slate-500 font-bold block",children:"Payment Mode"}),e.jsx("span",{className:"font-bold text-emerald-700",children:c.paymentMode||c.payment_mode||"Cash"})]})]}),e.jsxs("div",{className:"font-sans",children:[e.jsx("div",{className:"text-xs font-bold text-[#1a3e6f] border-l-3 border-[#1a3e6f] pl-2 mb-1.5 uppercase tracking-wide",children:"Student & Course Details"}),e.jsx("table",{className:"w-full text-xs border-collapse",children:e.jsxs("tbody",{children:[e.jsxs("tr",{className:"border-b border-slate-200",children:[e.jsx("td",{className:"py-1.5 text-slate-600 font-semibold w-1/3",children:"Student Name"}),e.jsx("td",{className:"py-1.5 text-slate-900 font-bold",children:c.studentName||c.student_name||c.student?.student_name})]}),e.jsxs("tr",{className:"border-b border-slate-200",children:[e.jsx("td",{className:"py-1.5 text-slate-600 font-semibold",children:"Phone Number"}),e.jsx("td",{className:"py-1.5 text-slate-800",children:c.studentPhone||c.phone||c.student?.whatsapp||c.student?.phone||"N/A"})]}),e.jsxs("tr",{className:"border-b border-slate-200",children:[e.jsx("td",{className:"py-1.5 text-slate-600 font-semibold",children:"Course Enrolled"}),e.jsx("td",{className:"py-1.5 text-slate-900 font-medium",children:c.courseName||c.course_name||c.course?.course_name})]}),z(c)?.admissionDateFormatted&&z(c).admissionDateFormatted!=="N/A"&&e.jsxs("tr",{className:"border-b border-slate-200",children:[e.jsx("td",{className:"py-1.5 text-slate-600 font-semibold",children:"Admission Date"}),e.jsx("td",{className:"py-1.5 text-slate-900 font-bold",children:z(c).admissionDateFormatted})]}),me(c)!=="—"&&e.jsxs("tr",{className:"border-b border-slate-200",children:[e.jsx("td",{className:"py-1.5 text-slate-600 font-semibold",children:z(c)?.isMonthly?"Coverage Period":"Payment Classification"}),e.jsx("td",{className:"py-1.5 text-slate-900 font-bold",children:me(c)})]})]})})]}),(()=>{const t=z(c);return e.jsxs("div",{className:"p-3.5 rounded-xl bg-sky-50/70 border border-sky-200 font-sans space-y-2",children:[e.jsxs("div",{className:"flex justify-between items-center",children:[e.jsx("span",{className:"text-xs font-bold text-slate-700",children:t?.isMonthly?"Monthly Installment Paid":"Total Course Fee"}),e.jsxs("span",{className:"text-base font-extrabold text-slate-900",children:["₹",Number(t?.isMonthly?c.amountPaid||c.amount_paid||0:t?.totalCourseFee||c.amountPaid||0).toLocaleString("en-IN"),"/-"]})]}),e.jsxs("div",{className:"flex justify-between items-center text-xs",children:[e.jsx("span",{className:"text-slate-600",children:"Payment Status:"}),t?.isMonthly?e.jsx("span",{className:"font-bold text-emerald-700 flex items-center gap-1 bg-emerald-100/80 px-2 py-0.5 rounded-full text-[11px] border border-emerald-300",children:"✓ Monthly Fee Paid"}):t?.balanceDue>0?e.jsxs("span",{className:"font-bold text-amber-700 flex items-center gap-1 bg-amber-100/80 px-2 py-0.5 rounded-full text-[11px] border border-amber-300",children:["⚠️ Part Payment (Due: ₹",t?.balanceDue?.toLocaleString("en-IN"),"/-)"]}):t?.previousPaid>0?e.jsx("span",{className:"font-bold text-emerald-700 flex items-center gap-1 bg-emerald-100/80 px-2 py-0.5 rounded-full text-[11px] border border-emerald-300",children:"✓ Final Payment (Paid in Full)"}):e.jsx("span",{className:"font-bold text-emerald-700 flex items-center gap-1 bg-emerald-100/80 px-2 py-0.5 rounded-full text-[11px] border border-emerald-300",children:"✓ Paid in Full"})]}),!t?.isMonthly&&e.jsxs("div",{className:"pt-2 border-t border-dashed border-sky-300 text-xs space-y-1.5",children:[e.jsxs("div",{className:"flex justify-between text-slate-600 text-[11px]",children:[e.jsx("span",{children:"Total Agreed Course Fee:"}),e.jsxs("span",{className:"font-bold text-slate-800 font-mono",children:["₹",t?.totalCourseFee?.toLocaleString("en-IN"),"/-"]})]}),e.jsxs("div",{className:"flex justify-between text-slate-600 text-[11px]",children:[e.jsx("span",{children:"Previous Payments Considered:"}),e.jsxs("span",{className:"font-bold text-slate-800 font-mono",children:["₹",t?.previousPaid?.toLocaleString("en-IN"),"/-"]})]}),e.jsxs("div",{className:"flex justify-between text-slate-600 text-[11px]",children:[e.jsx("span",{children:"Current Payment (This Voucher):"}),e.jsxs("span",{className:"font-bold text-emerald-700 font-mono",children:["₹",Number(c.amountPaid||c.amount_paid||0).toLocaleString("en-IN"),"/-"]})]}),e.jsxs("div",{className:"flex justify-between text-slate-600 text-[11px] pt-1 border-t border-slate-200",children:[e.jsx("span",{className:"font-semibold text-slate-700",children:"Total Cumulative Paid:"}),e.jsxs("span",{className:"font-extrabold text-[#1a3e6f] font-mono",children:["₹",t?.totalPaidToDate?.toLocaleString("en-IN"),"/-"]})]}),t?.balanceDue>0?e.jsxs("div",{className:"p-2 rounded-lg bg-amber-50 border border-amber-300 text-amber-900 text-[11px] flex items-center justify-between",children:[e.jsxs("div",{className:"flex items-center gap-1",children:[e.jsx("span",{className:"text-amber-600 text-xs",children:"⚠️"}),e.jsx("span",{className:"font-bold",children:"Outstanding Balance Due:"})]}),e.jsxs("span",{className:"font-mono font-black text-amber-800 text-xs",children:["₹",t.balanceDue.toLocaleString("en-IN"),"/-"]})]}):e.jsxs("div",{className:"p-2 rounded-lg bg-emerald-50 border border-emerald-300 text-emerald-900 text-[11px] flex items-center justify-between",children:[e.jsxs("div",{className:"flex items-center gap-1",children:[e.jsx(we,{className:"w-3.5 h-3.5 text-emerald-600"}),e.jsx("span",{className:"font-bold",children:"Course Fee Status:"})]}),e.jsx("span",{className:"font-mono font-bold text-emerald-800",children:"100% Cleared (₹0 Due)"})]})]}),t?.isMonthly&&e.jsxs("div",{className:"pt-2 border-t border-dashed border-sky-300 text-xs space-y-1.5",children:[e.jsxs("div",{className:"flex justify-between text-slate-600 text-[11px]",children:[e.jsx("span",{children:"Monthly Fee Rate:"}),e.jsxs("span",{className:"font-bold text-slate-800 font-mono",children:["₹",t.monthlyRate.toLocaleString("en-IN"),"/- per month"]})]}),e.jsxs("div",{className:"flex justify-between text-slate-600 text-[11px]",children:[e.jsx("span",{children:"Previous Payments Considered:"}),e.jsxs("span",{className:"font-bold text-slate-800 font-mono",children:["₹",t.previousPaid.toLocaleString("en-IN"),"/-"]})]}),e.jsxs("div",{className:"flex justify-between text-slate-600 text-[11px]",children:[e.jsx("span",{children:"Total Cumulative Paid to Date:"}),e.jsxs("span",{className:"font-bold text-[#1a3e6f] font-mono",children:["₹",t.totalPaidToDate.toLocaleString("en-IN"),"/-"]})]}),t.coveredMonthsText&&e.jsxs("div",{className:"p-2 rounded-lg bg-emerald-100/70 border border-emerald-300 text-emerald-900 text-[11px] flex items-start gap-1.5",children:[e.jsx(we,{className:"w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5"}),e.jsxs("div",{children:[e.jsx("span",{className:"font-bold",children:"Months Cleared by this Payment:"})," ",e.jsx("span",{className:"font-semibold",children:t.coveredMonthsText})," ",e.jsxs("span",{className:"text-[10px] bg-emerald-200 text-emerald-800 px-1.5 py-0.2 rounded font-bold",children:[t.coveredMonths.length," Months"]})]})]}),t.nextDueMonth&&e.jsxs("div",{className:"p-2 rounded-lg bg-amber-50 border border-amber-300 text-amber-900 text-[11px] flex items-start justify-between",children:[e.jsxs("div",{className:"flex items-center gap-1.5",children:[e.jsx("span",{className:"text-amber-600 text-xs",children:"⚠️"}),e.jsxs("div",{children:[e.jsx("span",{className:"font-bold",children:"Next Due Month:"})," ",e.jsx("span",{className:"font-extrabold text-amber-800",children:t.nextDueMonth})]})]}),e.jsxs("span",{className:"font-mono font-extrabold text-amber-800",children:["Due: ₹",t.dueAmount.toLocaleString("en-IN"),"/-"]})]})]}),e.jsxs("div",{className:"pt-2 border-t border-dashed border-sky-300 text-[11px] text-slate-700 italic font-medium",children:["Amount in words: Rupees ",ct(Number(c.amountPaid||c.amount_paid||0))]})]})})(),e.jsxs("div",{className:"flex items-center justify-between p-3 rounded-xl bg-purple-50/70 border border-purple-200 font-sans",children:[e.jsxs("div",{className:"space-y-0.5",children:[e.jsx("p",{className:"text-xs font-bold text-purple-900",children:"📱 Pay Online via UPI"}),e.jsx("p",{className:"text-[9px] text-slate-600",children:"Scan official QR to pay installments or verify"}),e.jsx("p",{className:"text-[9px] text-slate-500",children:"Works with Google Pay, PhonePe, Paytm, etc."}),e.jsx("div",{className:"inline-block mt-1 px-2 py-0.5 rounded bg-white border border-purple-200 text-[10px] font-mono font-bold text-[#1a3e6f]",children:"UPI ID: codernaccotax@okhdfcbank"})]}),e.jsx("div",{className:"shrink-0 bg-white p-1 rounded-lg border border-purple-200 shadow-sm flex items-center justify-center",children:e.jsx("img",{src:Ae||ke,alt:"CNAT Official Payment QR",className:"w-20 h-24 object-contain rounded"})})]}),e.jsxs("div",{className:"p-2 rounded-lg bg-emerald-50 border border-emerald-200 text-center text-[10px] font-sans text-slate-700",children:[e.jsx("span",{className:"font-bold text-emerald-800",children:"💰 Collected By:"})," ",xt(),e.jsx("span",{className:"text-slate-400 mx-2",children:"|"}),e.jsx("span",{className:"font-bold text-emerald-800",children:"📋 Designation:"})," ",mt()]}),e.jsxs("div",{className:"pt-4 flex justify-between items-end font-sans",children:[e.jsxs("div",{className:"text-center w-40",children:[e.jsx("p",{className:"text-[9px] text-slate-500 mb-1",children:"Student's Signature"}),e.jsx("div",{className:"border-t border-slate-300 pt-1 text-[10px] font-semibold text-slate-700",children:"(Student)"})]}),e.jsxs("div",{className:"text-center w-44",children:[e.jsx("p",{className:"text-[9px] text-slate-500 mb-1",children:"Authorized Signatory"}),e.jsx("div",{className:"border-t border-slate-300 pt-1 text-[10px] font-semibold text-slate-800",children:"(Coder & AccoTax)"})]})]}),e.jsxs("div",{className:"text-center border-t border-slate-200 pt-2 text-[8px] text-slate-500 font-sans space-y-0.5",children:[e.jsx("p",{children:"This is a computer generated receipt - Valid without physical signature"}),e.jsxs("p",{className:"text-slate-600",children:["📞 For query: ",e.jsx("strong",{children:"7003756860"})," | 🌐 Visit: ",e.jsx("strong",{children:"www.codernaccotax.co.in"})]}),e.jsx("p",{className:"text-[#1a3e6f] font-bold text-[9px]",children:"✨ Thank you for choosing Coder & AccoTax! ✨"})]})]})]})}),e.jsxs("div",{className:"flex flex-wrap items-center justify-between gap-2.5 pt-3 border-t border-slate-800 shrink-0",children:[e.jsx("button",{type:"button",onClick:()=>fe(null),className:"px-4 py-2 rounded-xl text-xs font-semibold bg-slate-800 hover:bg-slate-700 text-slate-300 transition cursor-pointer",children:"Close"}),e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsxs("button",{type:"button",onClick:()=>Kt(c),disabled:Qe,className:"px-3.5 py-2 rounded-xl text-xs font-bold bg-amber-500/20 hover:bg-amber-500/30 text-amber-300 border border-amber-500/40 transition flex items-center gap-1.5 cursor-pointer disabled:opacity-50",title:"Save voucher as high-quality JPG image",children:[e.jsx(cs,{className:"w-3.5 h-3.5"}),e.jsx("span",{children:Qe?"Saving...":"Save JPG"})]}),e.jsxs("button",{type:"button",onClick:()=>ft(c),disabled:Je,className:"px-3.5 py-2 rounded-xl text-xs font-bold bg-emerald-600 hover:bg-emerald-500 text-white transition flex items-center gap-1.5 shadow-lg shadow-emerald-600/20 cursor-pointer disabled:opacity-50",title:"Send voucher image and details to student on WhatsApp",children:[e.jsx(V,{className:"w-3.5 h-3.5"}),e.jsx("span",{children:Je?"Preparing...":"WhatsApp"})]}),e.jsxs("button",{type:"button",onClick:()=>pt(c),className:"px-3.5 py-2 rounded-xl text-xs font-bold bg-indigo-600/20 hover:bg-indigo-600/30 text-indigo-300 border border-indigo-500/30 transition flex items-center gap-1.5 cursor-pointer",title:"View & Print Full Student Account Statement",children:[e.jsx(K,{className:"w-4 h-4"}),e.jsx("span",{children:"View Student Ledger"})]}),e.jsxs("button",{type:"button",onClick:()=>gt(c),className:"px-4 py-2 rounded-xl text-xs font-bold bg-gradient-to-r from-emerald-500 to-sky-600 hover:from-emerald-400 hover:to-sky-500 text-white transition flex items-center gap-1.5 shadow-lg shadow-emerald-500/20 cursor-pointer",title:"Print clean official A4 / slip receipt",children:[e.jsx(ue,{className:"w-4 h-4"}),e.jsx("span",{children:"Print Official Voucher"})]})]})]})]})})}),e.jsx(Ce,{children:Tt&&e.jsx("div",{className:"fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/85 backdrop-blur-md animate-fadeIn overflow-y-auto",children:e.jsxs(he.div,{initial:{scale:.95,opacity:0,y:10},animate:{scale:1,opacity:1,y:0},exit:{scale:.95,opacity:0,y:10},className:"w-full max-w-lg bg-slate-900 border border-slate-700 rounded-3xl shadow-2xl overflow-hidden text-slate-100 p-5 sm:p-6 space-y-4 my-auto max-h-[95vh] flex flex-col",children:[e.jsxs("div",{className:"flex items-center justify-between border-b border-slate-800 pb-3 shrink-0",children:[e.jsxs("div",{className:"flex items-center gap-2.5",children:[e.jsx("div",{className:"w-10 h-10 rounded-xl bg-indigo-500/20 text-indigo-400 flex items-center justify-center border border-indigo-500/30",children:e.jsx(K,{className:"w-5 h-5"})}),e.jsxs("div",{children:[e.jsx("h3",{className:"font-bold text-white text-base sm:text-lg",children:"Student Fee Ledger"}),e.jsx("p",{className:"text-xs text-slate-400",children:"View and print account statement based on Admission ID"})]})]}),e.jsx("button",{type:"button",onClick:()=>Ie(!1),className:"p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition cursor-pointer",children:e.jsx(W,{className:"w-5 h-5"})})]}),e.jsx("div",{className:"space-y-2",children:e.jsxs("form",{onSubmit:t=>{t.preventDefault();const s=F.trim();s&&(Q.length>0?J(Q[0].admissionId||Q[0].id):J(s))},className:"space-y-1.5",children:[e.jsxs("div",{className:"relative flex items-center gap-2",children:[e.jsxs("div",{className:"relative flex-1",children:[e.jsx(ve,{className:"w-4 h-4 text-indigo-400 absolute left-3.5 top-1/2 -translate-y-1/2"}),e.jsx("input",{type:"text",autoFocus:!0,value:F,onChange:t=>Te(t.target.value),placeholder:"Search by Admission ID (e.g. 14), Reg #, Student Name, Phone, Course...",className:"w-full bg-slate-800/90 border border-indigo-500/40 focus:border-indigo-400 rounded-2xl pl-10 pr-9 py-2.5 text-xs text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 shadow-inner"}),F&&e.jsx("button",{type:"button",onClick:()=>Te(""),className:"absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-white",children:e.jsx(W,{className:"w-3.5 h-3.5"})})]}),e.jsxs("button",{type:"submit",disabled:nt||!F.trim(),className:"px-4 py-2.5 rounded-2xl text-xs font-bold bg-gradient-to-r from-indigo-600 to-indigo-500 hover:from-indigo-500 hover:to-indigo-400 text-white transition disabled:opacity-50 cursor-pointer flex items-center gap-1.5 shrink-0 shadow-lg shadow-indigo-600/25",children:[nt?e.jsx(ee,{className:"w-3.5 h-3.5 animate-spin"}):e.jsx(je,{className:"w-3.5 h-3.5"}),e.jsx("span",{children:"View Ledger"})]})]}),e.jsxs("div",{className:"flex items-center justify-between text-[11px] text-slate-400 px-1",children:[e.jsx("span",{children:F.trim()?`Found ${Q.length} matching admission${Q.length===1?"":"s"}`:`Showing all ${_.length} admitted students`}),e.jsxs("span",{className:"text-[10px] text-indigo-300",children:["Press ",e.jsx("kbd",{className:"px-1 py-0.5 rounded bg-slate-800 border border-slate-700 font-mono text-[9px]",children:"Enter ↵"})," to open"]})]})]})}),e.jsx("div",{className:"max-h-72 overflow-y-auto rounded-2xl border border-slate-800 bg-slate-950/70 divide-y divide-slate-800/60 p-1",children:Ke?e.jsxs("div",{className:"p-6 text-center text-xs text-slate-400 flex items-center justify-center gap-2",children:[e.jsx(ee,{className:"w-4 h-4 animate-spin text-indigo-400"}),e.jsx("span",{children:"Loading admissions catalog..."})]}):Q.length>0?Q.map(t=>{const s=t.admissionId||t.id,a=t.student?.studentName||t.student?.student_name||"Unknown Student",o=t.student?.registrationNumber||t.student?.registration_number,l=t.admissionNumber,n=t.course?.courseName||t.course?.course_name||"Course",i=t.student?.whatsapp||t.student?.phone1,r=Number(t.feeModesId)===1;return e.jsxs("div",{onClick:()=>J(s),className:"p-3 hover:bg-indigo-500/10 rounded-xl transition cursor-pointer flex items-center justify-between group gap-3",children:[e.jsxs("div",{className:"space-y-1 min-w-0",children:[e.jsxs("div",{className:"text-xs font-bold text-slate-200 group-hover:text-indigo-300 flex items-center gap-2 flex-wrap",children:[e.jsx("span",{className:"text-sm text-white",children:a}),e.jsxs("span",{className:"text-[10px] px-1.5 py-0.5 rounded bg-indigo-500/20 text-indigo-300 border border-indigo-500/30 font-mono font-bold",children:["ID: #",s]}),l&&e.jsx("span",{className:"text-[10px] px-1.5 py-0.5 rounded bg-slate-800 text-slate-400 font-mono",children:l}),o&&e.jsx("span",{className:"text-[10px] px-1.5 py-0.5 rounded bg-emerald-950/60 text-emerald-300 border border-emerald-800/40 font-mono",children:o})]}),e.jsxs("div",{className:"text-[11px] text-slate-400 flex items-center gap-2 flex-wrap",children:[e.jsxs("span",{children:["Course: ",e.jsx("strong",{className:"text-slate-300",children:n})]}),e.jsx("span",{children:"•"}),e.jsx("span",{className:r?"text-sky-400 font-medium":"text-amber-400 font-medium",children:r?"Monthly Plan":"Lump sum"}),i&&e.jsxs(e.Fragment,{children:[e.jsx("span",{children:"•"}),e.jsxs("span",{className:"font-mono text-slate-400",children:["📞 ",i]})]})]})]}),e.jsx("div",{className:"text-right shrink-0",children:e.jsxs("button",{type:"button",className:"px-3 py-1.5 rounded-xl text-xs font-bold bg-indigo-600/20 text-indigo-300 group-hover:bg-indigo-600 group-hover:text-white transition cursor-pointer flex items-center gap-1 shadow-sm",children:[e.jsx("span",{children:"Open Ledger"}),e.jsx("span",{children:"→"})]})})]},s)}):e.jsxs("div",{className:"p-6 text-center text-xs text-slate-400 space-y-2",children:[e.jsxs("p",{children:["No student found locally matching ",e.jsxs("strong",{className:"text-indigo-300",children:['"',F,'"']})]}),e.jsxs("button",{type:"button",onClick:()=>J(F.trim()),className:"px-3.5 py-1.5 rounded-xl text-xs font-bold bg-indigo-600 hover:bg-indigo-500 text-white transition cursor-pointer",children:['Search backend database for "',F,'" →']})]})})]})})}),e.jsxs(Ce,{children:[It&&p&&e.jsx("div",{className:"fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/85 backdrop-blur-md animate-fadeIn overflow-y-auto",children:e.jsxs(he.div,{initial:{scale:.95,opacity:0,y:10},animate:{scale:1,opacity:1,y:0},exit:{scale:.95,opacity:0,y:10},className:"w-full max-w-3xl bg-slate-900 border border-slate-700 rounded-3xl shadow-2xl overflow-hidden text-slate-100 p-5 sm:p-6 space-y-4 my-auto max-h-[95vh] flex flex-col",children:[e.jsxs("div",{className:"flex items-center justify-between border-b border-slate-800 pb-3 shrink-0",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("div",{className:"w-10 h-10 rounded-xl bg-indigo-500/20 text-indigo-400 flex items-center justify-center border border-indigo-500/30",children:e.jsx(K,{className:"w-5 h-5"})}),e.jsxs("div",{children:[e.jsxs("h3",{className:"font-bold text-white text-base sm:text-lg flex items-center gap-2",children:[e.jsx("span",{children:"Student Fee Ledger Statement"}),e.jsxs("span",{className:"text-xs bg-indigo-500/20 text-indigo-300 border border-indigo-500/30 px-2 py-0.5 rounded-full font-mono font-bold",children:["Admission #",p.admission?.admissionId," (",p.admission?.admissionNumber,")"]})]}),e.jsx("p",{className:"text-xs text-slate-400",children:"Complete fee accounting audit, transaction timeline & dues clearance"})]})]}),e.jsx("button",{type:"button",onClick:()=>$e(!1),className:"p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition cursor-pointer",children:e.jsx(W,{className:"w-5 h-5"})})]}),e.jsxs("div",{className:"space-y-4 overflow-y-auto pr-1 flex-1",children:[e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-3 text-xs",children:[e.jsxs("div",{className:"p-3.5 rounded-2xl bg-slate-950/70 border border-slate-800 space-y-1.5",children:[e.jsx("div",{className:"font-bold text-indigo-400 uppercase tracking-wider text-[11px] pb-1 border-b border-slate-800",children:"👤 Student Information"}),e.jsxs("div",{className:"flex justify-between",children:[e.jsx("span",{className:"text-slate-400",children:"Name:"}),e.jsx("strong",{className:"text-white text-sm",children:p.student?.name})]}),e.jsxs("div",{className:"flex justify-between",children:[e.jsx("span",{className:"text-slate-400",children:"Registration #:"}),e.jsx("span",{className:"font-mono font-semibold text-slate-200",children:p.student?.registrationNumber||"N/A"})]}),e.jsxs("div",{className:"flex justify-between",children:[e.jsx("span",{className:"text-slate-400",children:"Phone / WhatsApp:"}),e.jsx("span",{className:"font-mono text-slate-200",children:p.student?.whatsapp||p.student?.phone||"N/A"})]}),e.jsxs("div",{className:"flex justify-between",children:[e.jsx("span",{className:"text-slate-400",children:"City / Address:"}),e.jsx("span",{className:"text-slate-300",children:p.student?.city||p.student?.address||"Barrackpore"})]})]}),e.jsxs("div",{className:"p-3.5 rounded-2xl bg-slate-950/70 border border-slate-800 space-y-1.5",children:[e.jsx("div",{className:"font-bold text-indigo-400 uppercase tracking-wider text-[11px] pb-1 border-b border-slate-800",children:"📚 Academic Enrollment"}),e.jsxs("div",{className:"flex justify-between",children:[e.jsx("span",{className:"text-slate-400",children:"Enrolled Course:"}),e.jsx("strong",{className:"text-white",children:p.course?.name})]}),e.jsxs("div",{className:"flex justify-between",children:[e.jsx("span",{className:"text-slate-400",children:"Admission Date:"}),e.jsx("span",{className:"text-slate-200 font-semibold",children:p.admission?.admissionDate||"N/A"})]}),e.jsxs("div",{className:"flex justify-between",children:[e.jsx("span",{className:"text-slate-400",children:"Fee Mode:"}),e.jsx("span",{className:"text-emerald-400 font-bold",children:p.admission?.feeMode})]}),e.jsxs("div",{className:"flex justify-between",children:[e.jsx("span",{className:"text-slate-400",children:"Agreed Fee Rate:"}),e.jsxs("span",{className:"font-mono font-bold text-emerald-400",children:["₹",Number(p.admission?.agreedFee||0).toLocaleString("en-IN"),"/- ",p.admission?.isMonthly?"per month":"total"]})]})]})]}),e.jsxs("div",{className:"grid grid-cols-2 sm:grid-cols-4 gap-3 text-center",children:[e.jsxs("div",{className:"p-3 rounded-2xl bg-slate-950/80 border border-slate-800",children:[e.jsx("div",{className:"text-[10px] text-slate-400 uppercase font-bold",children:p.admission?.isMonthly?"Monthly Rate":"Course Fee"}),e.jsxs("div",{className:"text-lg font-black text-white mt-0.5",children:["₹",Number(p.admission?.isMonthly?p.summary?.monthlyRate:p.summary?.totalCourseFee).toLocaleString("en-IN")]})]}),e.jsxs("div",{className:"p-3 rounded-2xl bg-slate-950/80 border border-slate-800",children:[e.jsx("div",{className:"text-[10px] text-slate-400 uppercase font-bold",children:"Cumulative Paid"}),e.jsxs("div",{className:"text-lg font-black text-emerald-400 mt-0.5",children:["₹",Number(p.summary?.totalPaid||0).toLocaleString("en-IN")]})]}),e.jsxs("div",{className:"p-3 rounded-2xl bg-slate-950/80 border border-slate-800",children:[e.jsx("div",{className:"text-[10px] text-slate-400 uppercase font-bold",children:p.admission?.isMonthly?"Next Due Month":"Balance Due"}),e.jsx("div",{className:"text-lg font-black text-amber-400 mt-0.5",children:p.admission?.isMonthly?p.summary?.nextDueMonth||"Up to Date":`₹${Number(p.summary?.balanceDue||0).toLocaleString("en-IN")}`})]}),e.jsxs("div",{className:"p-3 rounded-2xl bg-slate-950/80 border border-slate-800",children:[e.jsx("div",{className:"text-[10px] text-slate-400 uppercase font-bold",children:"Account Status"}),e.jsxs("div",{className:"text-xs font-black text-emerald-400 mt-1.5 flex items-center justify-center gap-1",children:[e.jsx(we,{className:"w-3.5 h-3.5"}),e.jsx("span",{children:p.admission?.isMonthly?`${p.summary?.clearedMonthsCount} Mos Cleared`:p.summary?.isPaidInFull?p.summary?.statusBadge?.includes("Final Payment")?"Final Payment Cleared":"Paid in Full":"Part Payment"})]})]})]}),p.admission?.isMonthly&&e.jsxs("div",{className:"p-3 rounded-2xl bg-emerald-950/20 border border-emerald-500/30 text-xs flex items-center justify-between",children:[e.jsxs("div",{children:[e.jsx("strong",{className:"text-emerald-300",children:"✓ Cleared Months:"})," ",e.jsx("span",{className:"text-slate-200",children:p.summary?.clearedMonthsText||"None recorded yet"})]}),p.summary?.nextDueMonth&&e.jsxs("div",{className:"text-amber-400 font-bold",children:["⚠️ Due: ",p.summary?.nextDueMonth," (₹",Number(p.summary?.dueAmount||0).toLocaleString("en-IN"),"/-)"]})]}),e.jsxs("div",{className:"space-y-2",children:[e.jsx("div",{className:"flex items-center justify-between text-xs",children:e.jsxs("span",{className:"font-bold text-slate-300 uppercase tracking-wider",children:["Transaction History (",p.transactions?.length||0," Receipts)"]})}),e.jsx("div",{className:"overflow-x-auto rounded-2xl border border-slate-800 bg-slate-950/60",children:e.jsxs("table",{className:"w-full text-xs text-left",children:[e.jsx("thead",{className:"bg-slate-900 text-slate-400 border-b border-slate-800 text-[11px]",children:e.jsxs("tr",{children:[e.jsx("th",{className:"p-3 text-center w-10",children:"#"}),e.jsx("th",{className:"p-3",children:"Payment Date"}),e.jsx("th",{className:"p-3",children:"Receipt No"}),e.jsx("th",{className:"p-3",children:"Coverage / Description"}),e.jsx("th",{className:"p-3",children:"Mode"}),e.jsx("th",{className:"p-3 text-right",children:"Amount Paid"}),e.jsx("th",{className:"p-3 text-right",children:"Cumulative Total"}),e.jsx("th",{className:"p-3",children:"Collector"})]})}),e.jsx("tbody",{className:"divide-y divide-slate-800/60",children:(p.transactions||[]).length>0?p.transactions.map(t=>e.jsxs("tr",{className:"hover:bg-slate-800/40 transition",children:[e.jsx("td",{className:"p-3 text-center text-slate-400",children:t.slNo}),e.jsx("td",{className:"p-3 text-slate-200 font-medium",children:t.paymentDate||"N/A"}),e.jsx("td",{className:"p-3 font-mono font-bold text-emerald-400",children:t.receiptNo}),e.jsx("td",{className:"p-3 text-slate-300",children:t.coveragePeriod}),e.jsx("td",{className:"p-3 text-slate-300",children:t.paymentMode}),e.jsxs("td",{className:"p-3 text-right font-mono font-bold text-emerald-300",children:["₹",Number(t.amountPaid||0).toLocaleString("en-IN"),"/-"]}),e.jsxs("td",{className:"p-3 text-right font-mono font-bold text-indigo-300",children:["₹",Number(t.runningTotal||0).toLocaleString("en-IN"),"/-"]}),e.jsx("td",{className:"p-3 text-slate-400",children:t.collectedBy})]},t.receiptId||t.slNo)):e.jsx("tr",{children:e.jsx("td",{colSpan:8,className:"p-6 text-center text-slate-500",children:"No payment receipts recorded for this admission yet."})})}),e.jsx("tfoot",{className:"bg-slate-900/90 font-bold border-t border-slate-800 text-xs",children:e.jsxs("tr",{children:[e.jsx("td",{colSpan:5,className:"p-3 text-right text-slate-400 uppercase",children:"Total Cumulative Paid:"}),e.jsxs("td",{className:"p-3 text-right font-mono text-emerald-400 text-sm",children:["₹",Number(p.summary?.totalPaid||0).toLocaleString("en-IN"),"/-"]}),e.jsxs("td",{className:"p-3 text-right font-mono text-indigo-400 text-sm",children:["₹",Number(p.summary?.totalPaid||0).toLocaleString("en-IN"),"/-"]}),e.jsx("td",{})]})})]})})]})]}),e.jsxs("div",{className:"border-t border-slate-800 pt-3 flex items-center justify-between shrink-0",children:[e.jsx("button",{type:"button",onClick:()=>$e(!1),className:"px-4 py-2 rounded-xl text-xs font-semibold text-slate-400 hover:text-white hover:bg-slate-800 transition cursor-pointer",children:"Close"}),e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsxs("button",{type:"button",onClick:()=>Ht(p),className:"px-3.5 py-2 rounded-xl text-xs font-bold bg-emerald-600 hover:bg-emerald-500 text-white transition flex items-center gap-1.5 shadow-lg shadow-emerald-600/20 cursor-pointer",title:"Share complete statement to student via WhatsApp",children:[e.jsx(V,{className:"w-3.5 h-3.5"}),e.jsx("span",{children:"WhatsApp Statement"})]}),e.jsxs("button",{type:"button",onClick:()=>Yt(p),className:"px-4 py-2 rounded-xl text-xs font-bold bg-gradient-to-r from-indigo-500 to-teal-600 hover:from-indigo-400 hover:to-teal-500 text-white transition flex items-center gap-1.5 shadow-lg shadow-indigo-500/25 cursor-pointer",title:"Print clean official A4 statement",children:[e.jsx(ue,{className:"w-4 h-4"}),e.jsx("span",{children:"Print Official A4 Ledger"})]})]})]})]})}),Ft&&e.jsx("div",{className:"fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-3 sm:p-5 overflow-y-auto",children:e.jsxs(he.div,{initial:{opacity:0,scale:.96},animate:{opacity:1,scale:1},exit:{opacity:0,scale:.96},className:"bg-slate-900 border border-slate-700/80 rounded-2xl w-full max-w-6xl shadow-2xl p-4 sm:p-6 flex flex-col max-h-[92vh] overflow-hidden",children:[e.jsxs("div",{className:"flex items-center justify-between pb-3 border-b border-slate-800 shrink-0",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("div",{className:"w-10 h-10 rounded-xl bg-gradient-to-br from-amber-500/20 via-orange-500/20 to-rose-500/20 border border-amber-500/30 flex items-center justify-center text-amber-400 shadow-inner",children:e.jsx(Z,{className:"w-5 h-5 stroke-[2.5]"})}),e.jsxs("div",{children:[e.jsxs("h3",{className:"text-base sm:text-lg font-black text-white flex items-center gap-2",children:[e.jsx("span",{children:"Student & Course-wise Outstanding Due List"}),e.jsx("span",{className:"text-[10px] px-2 py-0.5 rounded-full bg-amber-500/20 text-amber-300 border border-amber-500/30 font-mono",children:"Session 2026–2027"})]}),e.jsx("p",{className:"text-xs text-slate-400",children:"Audit pending monthly installments & course fee balances across all enrollments • Multi-course support"})]})]}),e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx("button",{type:"button",onClick:Oe,disabled:Fe,className:"p-2 rounded-xl text-xs font-semibold bg-slate-800 hover:bg-slate-700 text-slate-300 border border-slate-700 transition cursor-pointer",title:"Reload fresh dues data",children:e.jsx(ee,{className:`w-4 h-4 ${Fe?"animate-spin text-amber-400":""}`})}),e.jsx("button",{type:"button",onClick:()=>oe(!1),className:"p-2 rounded-xl text-slate-400 hover:text-white hover:bg-slate-800 transition cursor-pointer",children:e.jsx(W,{className:"w-5 h-5"})})]})]}),e.jsxs("div",{className:"grid grid-cols-2 lg:grid-cols-4 gap-2.5 my-3 shrink-0",children:[e.jsxs("div",{className:"p-3 rounded-xl bg-slate-950/60 border border-rose-500/30",children:[e.jsx("div",{className:"text-[10px] font-bold text-rose-400 uppercase tracking-wider",children:"Total Outstanding Due"}),e.jsxs("div",{className:"text-xl font-black font-mono text-rose-300 mt-0.5",children:["₹",Number(D.summary?.totalOutstandingDue||0).toLocaleString("en-IN"),"/-"]}),e.jsx("div",{className:"text-[10px] text-slate-400 mt-0.5",children:"Across all students & courses"})]}),e.jsxs("div",{className:"p-3 rounded-xl bg-slate-950/60 border border-amber-500/30",children:[e.jsx("div",{className:"text-[10px] font-bold text-amber-400 uppercase tracking-wider",children:"Students with Dues"}),e.jsxs("div",{className:"text-xl font-black font-mono text-amber-300 mt-0.5",children:[D.summary?.studentsWithDuesCount??0,e.jsxs("span",{className:"text-xs font-normal text-slate-400 ml-1",children:["/ ",D.summary?.totalStudents??0," admitted"]})]}),e.jsx("div",{className:"text-[10px] text-slate-400 mt-0.5",children:"Students with balance pending"})]}),e.jsxs("div",{className:"p-3 rounded-xl bg-slate-950/60 border border-purple-500/30",children:[e.jsx("div",{className:"text-[10px] font-bold text-purple-400 uppercase tracking-wider",children:"Multi-Course Students"}),e.jsxs("div",{className:"text-xl font-black font-mono text-purple-300 mt-0.5",children:[D.summary?.multiCourseStudentsCount??0,e.jsx("span",{className:"text-xs font-normal text-slate-400 ml-1",children:"students"})]}),e.jsx("div",{className:"text-[10px] text-slate-400 mt-0.5",children:"Enrolled in 2 or more courses"})]}),e.jsxs("div",{className:"p-3 rounded-xl bg-slate-950/60 border border-teal-500/30",children:[e.jsx("div",{className:"text-[10px] font-bold text-teal-400 uppercase tracking-wider",children:"Total Enrollments"}),e.jsxs("div",{className:"text-xl font-black font-mono text-teal-300 mt-0.5",children:[D.summary?.totalEnrollments??0,e.jsx("span",{className:"text-xs font-normal text-slate-400 ml-1",children:"active courses"})]}),e.jsxs("div",{className:"text-[10px] text-slate-400 mt-0.5",children:["As of ",D.summary?.asOfDate||"Today"]})]})]}),e.jsxs("div",{className:"bg-slate-950/80 border border-slate-800 rounded-xl p-3 mb-3 space-y-2.5 shrink-0",children:[e.jsxs("div",{className:"flex flex-wrap items-center justify-between gap-2",children:[e.jsxs("div",{className:"flex items-center p-0.5 bg-slate-900 border border-slate-700/80 rounded-xl",children:[e.jsxs("button",{type:"button",onClick:()=>lt("STUDENT"),className:`px-3 py-1.5 rounded-lg text-xs font-bold transition flex items-center gap-1.5 cursor-pointer ${ce==="STUDENT"?"bg-amber-500 text-slate-950 shadow-md shadow-amber-500/20":"text-slate-400 hover:text-white"}`,children:[e.jsx(xs,{className:"w-3.5 h-3.5"}),e.jsx("span",{children:"Group by Student (Consolidated)"})]}),e.jsxs("button",{type:"button",onClick:()=>lt("COURSE"),className:`px-3 py-1.5 rounded-lg text-xs font-bold transition flex items-center gap-1.5 cursor-pointer ${ce==="COURSE"?"bg-amber-500 text-slate-950 shadow-md shadow-amber-500/20":"text-slate-400 hover:text-white"}`,children:[e.jsx(je,{className:"w-3.5 h-3.5"}),e.jsx("span",{children:"Course-wise Detailed List"})]})]}),e.jsxs("div",{className:"flex items-center gap-1.5",children:[e.jsxs("button",{type:"button",onClick:Xt,className:"px-3 py-1.5 rounded-xl text-xs font-bold bg-slate-800 hover:bg-slate-700 text-emerald-400 border border-slate-700 transition flex items-center gap-1.5 cursor-pointer",title:"Export Dues List to Excel (Student & Course sheets)",children:[e.jsx(jt,{className:"w-3.5 h-3.5"}),e.jsx("span",{children:"Export Excel"})]}),e.jsxs("button",{type:"button",onClick:Jt,className:"px-3.5 py-1.5 rounded-xl text-xs font-bold bg-gradient-to-r from-amber-500 to-rose-600 hover:from-amber-400 hover:to-rose-500 text-white transition flex items-center gap-1.5 shadow-md shadow-amber-500/20 cursor-pointer",title:"Print Official A4 Due Report",children:[e.jsx(ue,{className:"w-3.5 h-3.5"}),e.jsx("span",{children:"Print A4 Statement"})]})]})]}),e.jsxs("div",{className:"flex flex-col md:flex-row items-stretch md:items-center justify-between gap-2.5 pt-1 border-t border-slate-800/80",children:[e.jsxs("div",{className:"flex items-center gap-1.5 overflow-x-auto pb-0.5 no-scrollbar",children:[e.jsx("button",{type:"button",onClick:()=>re("DUES_ONLY"),className:`px-2.5 py-1 rounded-lg text-xs font-semibold transition cursor-pointer whitespace-nowrap ${w==="DUES_ONLY"?"bg-rose-500/25 text-rose-300 border border-rose-500/50 font-bold":"bg-slate-900 text-slate-400 hover:text-white border border-slate-800"}`,children:"Has Dues Only"}),e.jsx("button",{type:"button",onClick:()=>re("MULTI_COURSE"),className:`px-2.5 py-1 rounded-lg text-xs font-semibold transition cursor-pointer whitespace-nowrap ${w==="MULTI_COURSE"?"bg-purple-500/25 text-purple-300 border border-purple-500/50 font-bold":"bg-slate-900 text-slate-400 hover:text-white border border-slate-800"}`,children:"Multi-Course (2+)"}),e.jsx("button",{type:"button",onClick:()=>re("MONTHLY"),className:`px-2.5 py-1 rounded-lg text-xs font-semibold transition cursor-pointer whitespace-nowrap ${w==="MONTHLY"?"bg-sky-500/25 text-sky-300 border border-sky-500/50 font-bold":"bg-slate-900 text-slate-400 hover:text-white border border-slate-800"}`,children:"Monthly Dues"}),e.jsx("button",{type:"button",onClick:()=>re("LUMPSUM"),className:`px-2.5 py-1 rounded-lg text-xs font-semibold transition cursor-pointer whitespace-nowrap ${w==="LUMPSUM"?"bg-amber-500/25 text-amber-300 border border-amber-500/50 font-bold":"bg-slate-900 text-slate-400 hover:text-white border border-slate-800"}`,children:"Course Fee Dues"}),e.jsx("button",{type:"button",onClick:()=>re("CLEARED"),className:`px-2.5 py-1 rounded-lg text-xs font-semibold transition cursor-pointer whitespace-nowrap ${w==="CLEARED"?"bg-emerald-500/25 text-emerald-300 border border-emerald-500/50 font-bold":"bg-slate-900 text-slate-400 hover:text-white border border-slate-800"}`,children:"Fully Cleared"}),e.jsx("button",{type:"button",onClick:()=>re("ALL"),className:`px-2.5 py-1 rounded-lg text-xs font-semibold transition cursor-pointer whitespace-nowrap ${w==="ALL"?"bg-slate-700 text-white border border-slate-600 font-bold":"bg-slate-900 text-slate-400 hover:text-white border border-slate-800"}`,children:"All"})]}),e.jsxs("div",{className:"relative min-w-[240px]",children:[e.jsx(ve,{className:"w-3.5 h-3.5 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"}),e.jsx("input",{type:"text",value:U,onChange:t=>it(t.target.value),placeholder:"Search student, reg #, phone, course...",className:"w-full pl-8 pr-7 py-1 text-xs bg-slate-900 border border-slate-700 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:border-amber-500"}),U&&e.jsx("button",{type:"button",onClick:()=>it(""),className:"absolute right-2 top-1/2 -translate-y-1/2 text-slate-400 hover:text-white cursor-pointer",children:e.jsx(W,{className:"w-3.5 h-3.5"})})]})]})]}),e.jsx("div",{className:"flex-1 overflow-y-auto pr-1 space-y-3",children:Fe?e.jsxs("div",{className:"flex flex-col items-center justify-center p-12 text-slate-400",children:[e.jsx(ee,{className:"w-8 h-8 animate-spin text-amber-400 mb-3"}),e.jsx("p",{className:"text-sm font-semibold",children:"Calculating student and course-wise dues..."})]}):ce==="STUDENT"?le.length===0?e.jsxs("div",{className:"p-12 text-center text-slate-500 bg-slate-950/40 rounded-xl border border-slate-800",children:[e.jsx(Z,{className:"w-8 h-8 mx-auto text-slate-600 mb-2"}),e.jsx("p",{className:"text-sm",children:"No students match the current dues filter or search criteria."})]}):le.map(t=>{const s=Rt[t.studentId];return e.jsxs("div",{className:"bg-slate-950/60 border border-slate-800 hover:border-slate-700/90 rounded-xl overflow-hidden transition",children:[e.jsxs("div",{className:"p-3.5 flex flex-col md:flex-row items-start md:items-center justify-between gap-3 bg-slate-900/40",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("div",{className:"w-9 h-9 rounded-xl bg-gradient-to-br from-indigo-500/20 to-purple-500/20 border border-indigo-500/30 flex items-center justify-center text-indigo-300 font-bold text-sm shrink-0",children:t.studentName?t.studentName.charAt(0).toUpperCase():"S"}),e.jsxs("div",{children:[e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx("span",{className:"text-sm font-bold text-white",children:t.studentName}),t.hasMultipleCourses&&e.jsxs("span",{className:"text-[10px] px-2 py-0.5 rounded-md bg-purple-500/20 text-purple-300 border border-purple-500/40 font-semibold flex items-center gap-1",children:[e.jsx("span",{children:"📚"})," ",t.totalCoursesCount," Courses"]})]}),e.jsxs("div",{className:"flex flex-wrap items-center gap-2 text-xs text-slate-400 mt-0.5",children:[e.jsx("span",{className:"font-mono text-slate-300 bg-slate-800/80 px-1.5 py-0.5 rounded text-[10px]",children:t.studentRegNo||"—"}),e.jsx("span",{children:"•"}),e.jsx("span",{children:t.studentCity||"Barrackpore"}),t.studentPhone&&e.jsxs(e.Fragment,{children:[e.jsx("span",{children:"•"}),e.jsxs("a",{href:`https://wa.me/${t.studentPhone.replace(/\D/g,"").length===10?`91${t.studentPhone.replace(/\D/g,"")}`:t.studentPhone.replace(/\D/g,"")}`,target:"_blank",rel:"noopener noreferrer",className:"text-emerald-400 hover:text-emerald-300 flex items-center gap-1",children:[e.jsx(V,{className:"w-3 h-3"}),e.jsx("span",{children:t.studentPhone})]})]})]})]})]}),e.jsxs("div",{className:"flex items-center gap-4 self-end md:self-center",children:[e.jsxs("div",{className:"text-right",children:[e.jsx("div",{className:"text-[10px] text-slate-400 uppercase font-semibold",children:"Total Dues"}),e.jsx("div",{className:`text-base font-black font-mono ${t.totalDue>0?"text-rose-400":"text-emerald-400"}`,children:t.totalDue>0?`₹${Number(t.totalDue).toLocaleString("en-IN")}/-`:"₹0 (Cleared)"}),e.jsxs("div",{className:"text-[10px] text-slate-500",children:["Paid: ₹",Number(t.totalPaid||0).toLocaleString("en-IN")]})]}),e.jsxs("div",{className:"flex items-center gap-1.5",children:[e.jsxs("button",{type:"button",onClick:()=>Gt(t),className:"px-2.5 py-1.5 rounded-lg text-xs font-semibold bg-emerald-600/90 hover:bg-emerald-500 text-white transition flex items-center gap-1 shadow-sm cursor-pointer",title:"Send WhatsApp reminder for all courses",children:[e.jsx(V,{className:"w-3.5 h-3.5"}),e.jsx("span",{className:"hidden sm:inline",children:"WhatsApp"})]}),e.jsx("button",{type:"button",onClick:()=>Qt(t.studentId),className:"p-1.5 rounded-lg text-slate-400 hover:text-white bg-slate-800/80 hover:bg-slate-700 transition cursor-pointer",title:s?"Collapse course details":"Expand course details",children:s?e.jsx(ms,{className:"w-4 h-4"}):e.jsx(ps,{className:"w-4 h-4"})})]})]})]}),s&&e.jsxs("div",{className:"p-3 border-t border-slate-800/80 bg-slate-950/40",children:[e.jsxs("div",{className:"text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-2 flex items-center justify-between",children:[e.jsxs("span",{children:["Enrolled Courses Breakdown (",t.courses.length,")"]}),e.jsx("span",{className:"text-[10px] text-slate-500 font-normal",children:"Click 'Pay Fee' to record payment for specific course"})]}),e.jsx("div",{className:"space-y-2",children:t.courses.map((a,o)=>e.jsxs("div",{className:"p-2.5 rounded-lg bg-slate-900/60 border border-slate-800 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2.5 text-xs",children:[e.jsxs("div",{className:"flex items-start gap-2.5",children:[e.jsx("span",{className:"w-5 h-5 rounded-md bg-slate-800 text-slate-300 font-mono font-bold flex items-center justify-center text-[10px] shrink-0 mt-0.5",children:o+1}),e.jsxs("div",{children:[e.jsxs("div",{className:"font-bold text-white flex items-center gap-1.5",children:[e.jsx("span",{children:a.courseName}),a.courseCode&&e.jsxs("span",{className:"font-mono text-[10px] text-slate-400",children:["(",a.courseCode,")"]})]}),e.jsxs("div",{className:"flex flex-wrap items-center gap-2 text-[11px] text-slate-400 mt-0.5",children:[e.jsx("span",{className:`px-1.5 py-0.2 rounded text-[10px] font-semibold ${a.isMonthly?"bg-sky-500/15 text-sky-300 border border-sky-500/30":"bg-amber-500/15 text-amber-300 border border-amber-500/30"}`,children:a.isMonthly?`Monthly (₹${a.monthlyRate}/mo)`:`Lump sum Fee (₹${a.totalCourseFee||0})`}),e.jsx("span",{children:"•"}),e.jsxs("span",{children:["Total Paid: ₹",Number(a.totalPaid||0).toLocaleString("en-IN")]}),e.jsx("span",{children:"•"}),e.jsx("span",{className:"text-slate-300 font-medium",children:a.status})]})]})]}),e.jsxs("div",{className:"flex items-center gap-3 self-end sm:self-center",children:[e.jsxs("div",{className:"text-right",children:[e.jsx("span",{className:"text-[10px] text-slate-400 block",children:"Due Amount"}),e.jsx("span",{className:`font-mono font-bold text-sm ${a.balanceDue>0?"text-rose-400":"text-emerald-400"}`,children:a.balanceDue>0?`₹${Number(a.balanceDue).toLocaleString("en-IN")}/-`:"Cleared ✓"})]}),e.jsxs("div",{className:"flex items-center gap-1.5",children:[e.jsx("button",{type:"button",onClick:()=>ut(a),className:"p-1.5 rounded-lg text-emerald-400 hover:bg-emerald-500/20 transition cursor-pointer",title:`Send WhatsApp reminder for ${a.courseName}`,children:e.jsx(V,{className:"w-3.5 h-3.5"})}),e.jsx("button",{type:"button",onClick:()=>bt(a),className:"p-1.5 rounded-lg text-indigo-400 hover:bg-indigo-500/20 transition cursor-pointer",title:"View complete ledger for this course",children:e.jsx(K,{className:"w-3.5 h-3.5"})}),e.jsxs("button",{type:"button",onClick:()=>ht(a),className:"px-2.5 py-1 rounded-lg text-xs font-bold bg-emerald-600 hover:bg-emerald-500 text-white transition flex items-center gap-1 shadow-sm cursor-pointer",title:"Record fee payment for this course",children:[e.jsx(yt,{className:"w-3 h-3"}),e.jsx("span",{children:"Pay Fee"})]})]})]})]},o))})]})]},t.studentId)}):xe.length===0?e.jsxs("div",{className:"p-12 text-center text-slate-500 bg-slate-950/40 rounded-xl border border-slate-800",children:[e.jsx(Z,{className:"w-8 h-8 mx-auto text-slate-600 mb-2"}),e.jsx("p",{className:"text-sm",children:"No course enrollments match the current criteria."})]}):e.jsx("div",{className:"overflow-x-auto rounded-xl border border-slate-800",children:e.jsxs("table",{className:"w-full text-left text-xs text-slate-300",children:[e.jsx("thead",{className:"bg-slate-950 text-slate-400 uppercase text-[10px] font-bold border-b border-slate-800",children:e.jsxs("tr",{children:[e.jsx("th",{className:"p-2.5 text-center",children:"#"}),e.jsx("th",{className:"p-2.5",children:"Student"}),e.jsx("th",{className:"p-2.5",children:"Course & Code"}),e.jsx("th",{className:"p-2.5",children:"Plan Type"}),e.jsx("th",{className:"p-2.5 text-right",children:"Agreed / Rate"}),e.jsx("th",{className:"p-2.5 text-right",children:"Paid to Date"}),e.jsx("th",{className:"p-2.5",children:"Clearance / Due Status"}),e.jsx("th",{className:"p-2.5 text-right",children:"Outstanding Due"}),e.jsx("th",{className:"p-2.5 text-center",children:"Actions"})]})}),e.jsx("tbody",{className:"divide-y divide-slate-800/60",children:xe.map((t,s)=>e.jsxs("tr",{className:"hover:bg-slate-800/30 transition",children:[e.jsx("td",{className:"p-2.5 text-center text-slate-500 font-mono",children:s+1}),e.jsxs("td",{className:"p-2.5",children:[e.jsx("div",{className:"font-bold text-white",children:t.studentName}),e.jsx("div",{className:"font-mono text-[10px] text-slate-400",children:t.studentRegNo||"—"})]}),e.jsxs("td",{className:"p-2.5",children:[e.jsx("div",{className:"font-semibold text-slate-200",children:t.courseName}),t.courseCode&&e.jsx("div",{className:"font-mono text-[10px] text-slate-500",children:t.courseCode})]}),e.jsx("td",{className:"p-2.5",children:e.jsx("span",{className:`px-2 py-0.5 rounded text-[10px] font-semibold ${t.isMonthly?"bg-sky-500/20 text-sky-300 border border-sky-500/30":"bg-amber-500/20 text-amber-300 border border-amber-500/30"}`,children:t.feeMode})}),e.jsxs("td",{className:"p-2.5 text-right font-mono font-semibold text-slate-300",children:["₹",Number(t.agreedFee||0).toLocaleString("en-IN"),"/-"]}),e.jsxs("td",{className:"p-2.5 text-right font-mono font-semibold text-emerald-400",children:["₹",Number(t.totalPaid||0).toLocaleString("en-IN"),"/-"]}),e.jsx("td",{className:"p-2.5",children:e.jsx("span",{className:"text-[11px] text-slate-300",children:t.status})}),e.jsx("td",{className:"p-2.5 text-right font-mono font-bold",children:e.jsx("span",{className:t.balanceDue>0?"text-rose-400":"text-emerald-400",children:t.balanceDue>0?`₹${Number(t.balanceDue).toLocaleString("en-IN")}/-`:"₹0 (Cleared)"})}),e.jsx("td",{className:"p-2.5",children:e.jsxs("div",{className:"flex items-center justify-center gap-1",children:[e.jsx("button",{type:"button",onClick:()=>ut(t),className:"p-1 rounded-lg text-emerald-400 hover:bg-emerald-500/20 transition cursor-pointer",title:"WhatsApp Reminder",children:e.jsx(V,{className:"w-3.5 h-3.5"})}),e.jsx("button",{type:"button",onClick:()=>bt(t),className:"p-1 rounded-lg text-indigo-400 hover:bg-indigo-500/20 transition cursor-pointer",title:"View Ledger",children:e.jsx(K,{className:"w-3.5 h-3.5"})}),e.jsx("button",{type:"button",onClick:()=>ht(t),className:"px-2 py-0.5 rounded-lg text-[10px] font-bold bg-emerald-600 hover:bg-emerald-500 text-white transition cursor-pointer",title:"Record Fee Payment",children:"Pay"})]})})]},s))})]})})}),e.jsxs("div",{className:"border-t border-slate-800 pt-3 mt-3 flex items-center justify-between shrink-0 text-xs text-slate-400",children:[e.jsxs("div",{children:["Showing"," ",e.jsx("span",{className:"text-white font-bold",children:ce==="STUDENT"?le.length:xe.length})," ","records • Filtered Dues:"," ",e.jsxs("span",{className:"text-rose-400 font-mono font-bold",children:["₹",(ce==="STUDENT"?le.reduce((t,s)=>t+Number(s.totalDue||0),0):xe.reduce((t,s)=>t+Number(s.balanceDue||0),0)).toLocaleString("en-IN"),"/-"]})]}),e.jsx("button",{type:"button",onClick:()=>oe(!1),className:"px-4 py-1.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-semibold transition cursor-pointer",children:"Close"})]})]})})]})]})}export{Ls as default};
