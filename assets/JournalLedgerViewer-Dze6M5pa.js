import{j as e,b as g}from"./vendor-react-core-Doz9nIC6.js";import{O as j,x as T,D as k,X as E,Q as y,B as N,L as D,q as P}from"./vendor-icons-8ao-0upJ.js";const S=({projectTitle:i="Project 1: Commercial Accounting Assignment",companyName:s="M/s Apex Global Traders",period:n="April 2026",transactions:x=[],isBengali:o=!1})=>{const p=window.open("","_blank");if(!p)return;const r=o?`কোডার ও অ্যাকাউন্টাক্স অফিশিয়াল কমার্স প্রশ্নপত্র — ${s}`:`CODER & ACCOTAX OFFICIAL COMMERCE QUESTION PAPER — ${s}`,f=x.map(c=>`
    <tr>
      <td style="text-align: center; font-weight: bold; width: 45px; font-family: Arial, sans-serif;">Q${c.id}.</td>
      <td style="width: 95px; font-family: monospace; font-size: 10pt;">${c.date}</td>
      <td style="font-weight: 600;">${o?c.descBn:c.descEn}</td>
      <td style="text-align: center; width: 50px; font-family: Arial, sans-serif;">1</td>
    </tr>
  `).join(""),b=`<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8" />
  <title>${r}</title>
  <style>
    @page {
      size: A4 portrait;
      margin: 10mm 12mm 10mm 12mm;
    }
    body {
      font-family: 'Times New Roman', Times, Georgia, serif;
      color: #000;
      background: #fff;
      margin: 0;
      padding: 0;
      font-size: 11pt;
      line-height: 1.35;
      -webkit-print-color-adjust: exact;
    }
    .outer-border {
      border: 3px double #000;
      padding: 16px;
      box-sizing: border-box;
    }
    .header {
      text-align: center;
      border-bottom: 2px solid #000;
      padding-bottom: 8px;
      margin-bottom: 10px;
    }
    .sub-header {
      font-size: 9pt;
      font-family: Arial, sans-serif;
      letter-spacing: 1px;
      font-weight: bold;
      text-transform: uppercase;
      color: #111;
    }
    .main-title {
      font-size: 22pt;
      font-weight: 900;
      text-transform: uppercase;
      margin: 2px 0;
      font-family: 'Times New Roman', Times, serif;
      letter-spacing: 0.5px;
    }
    .center-info {
      font-size: 9.5pt;
      font-family: Arial, sans-serif;
      color: #222;
    }
    .exam-banner {
      margin-top: 6px;
      font-size: 11.5pt;
      font-weight: bold;
      text-transform: uppercase;
      font-family: Arial, sans-serif;
      background: #f0f0f0;
      padding: 4px;
      border: 1px solid #ccc;
    }
    .meta-table {
      width: 100%;
      border-collapse: collapse;
      margin: 10px 0;
      font-family: Arial, sans-serif;
      font-size: 9.5pt;
    }
    .meta-table td {
      border: 1px solid #000;
      padding: 5px 8px;
      background: #fafafa;
    }
    .candidate-block {
      border: 1px solid #000;
      padding: 8px 12px;
      margin-bottom: 12px;
      font-family: Arial, sans-serif;
      font-size: 9.5pt;
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      gap: 8px;
    }
    .instructions {
      border: 1px solid #000;
      background: #f9f9f9;
      padding: 8px 12px;
      margin-bottom: 12px;
      font-size: 9.5pt;
    }
    .instructions h4 {
      margin: 0 0 4px 0;
      font-family: Arial, sans-serif;
      font-size: 9.5pt;
      text-transform: uppercase;
    }
    .instructions ol {
      margin: 0;
      padding-left: 20px;
    }
    .q-section-title {
      font-weight: bold;
      font-family: Arial, sans-serif;
      font-size: 10.5pt;
      margin-bottom: 6px;
      margin-top: 10px;
      display: flex;
      justify-content: space-between;
    }
    .q-table {
      width: 100%;
      border-collapse: collapse;
    }
    .q-table th {
      background: #e8e8e8;
      border: 1px solid #000;
      padding: 6px;
      font-family: Arial, sans-serif;
      font-size: 9.5pt;
      text-transform: uppercase;
    }
    .q-table td {
      border: 1px solid #000;
      padding: 6px 8px;
      font-size: 10pt;
      vertical-align: top;
    }
    .footer {
      margin-top: 30px;
      display: flex;
      justify-content: space-between;
      align-items: flex-end;
      font-family: Arial, sans-serif;
      font-size: 9pt;
      page-break-inside: avoid;
    }
    .sig-box {
      text-align: center;
      width: 180px;
    }
    .sig-line {
      border-bottom: 1px solid #000;
      margin-bottom: 4px;
    }
  </style>
</head>
<body>
  <div class="outer-border">
    
    <div class="header">
      <div class="sub-header">ISO 9001:2015 Certified Academy of Commerce &amp; IT</div>
      <div class="main-title">CODER &amp; ACCOTAX</div>
      <div class="center-info">Center for Practical Accounting, TallyPrime &amp; Taxation Studies · Barrackpore Lab</div>
      <div class="center-info" style="font-size: 8.5pt; margin-top: 2px;">Exam Center Code: CA-743121 | Affiliation ID: ACC-IND-2026</div>

      <div class="exam-banner">
        DIPLOMA IN PRACTICAL ACCOUNTING — SEMESTER EXAMINATION
      </div>
      <div style="font-size: 10.5pt; font-weight: bold; margin-top: 4px;">
        ${i} (${s} — Financial Period: ${n})
      </div>
    </div>

    <table class="meta-table">
      <tr>
        <td><strong>Time Allowed:</strong> 2 Hours (120 Mins)</td>
        <td><strong>Course Code:</strong> TALLY-PRO-103</td>
        <td><strong>Full Marks:</strong> 30 Marks</td>
        <td><strong>Pass Marks:</strong> 12 Marks</td>
      </tr>
    </table>

    <div class="candidate-block">
      <div><strong>Candidate Name:</strong> _____________________________________</div>
      <div><strong>Roll / Reg No:</strong> ______________________</div>
      <div style="margin-top: 4px;"><strong>Study Center:</strong> ____________________________________</div>
      <div style="margin-top: 4px;"><strong>Exam Date:</strong> ______________________</div>
    </div>

    <div class="instructions">
      <h4>General Instructions for Candidates:</h4>
      <ol>
        <li>${o?"সকল প্রশ্নের উত্তর আবশ্যক। নিচে প্রদত্ত ৩০টি ব্যবসায়িক লেনদেন সমাধান করুন।":"All questions are compulsory. Solve all 30 commercial business transactions listed below."}</li>
        <li>${o?"৫-কলামের জাবেদা বইয়ে (Date, Particulars, J.F., Dr., Cr.) হিসাবভুক্ত করুন।":"Record entries in 5-column General Journal format (Date, Particulars, J.F., Debit, Credit)."}</li>
        <li>${o?"T-ফরম্যাটে খতিয়ান অ্যাকাউন্ট (8-Column Ledgers) প্রস্তুত করে মাস শেষে Balance c/d বের করুন।":"Post entries to 8-column T-Account Ledgers and balance each account with Balance c/d."}</li>
        <li>${o?"পরবর্তী মাসের ১লা তারিখে Balance b/d হিসাবে জের আনয়ন করুন এবং রেওয়ামিল মিলিয়ে দিন।":"Carry forward Balance b/d on 1st of next month and reconcile final Trial Balance."}</li>
      </ol>
    </div>

    <div class="q-section-title">
      <span>SECTION B: 30 Commercial Business Transactions (30 Marks)</span>
      <span>[1 Mark Each]</span>
    </div>

    <table class="q-table">
      <thead>
        <tr>
          <th style="width: 45px;">Q#</th>
          <th style="width: 95px;">Date</th>
          <th>Commercial Business Transaction Statement</th>
          <th style="width: 55px;">Marks</th>
        </tr>
      </thead>
      <tbody>
        ${f}
      </tbody>
    </table>

    <div class="footer">
      <div class="sig-box">
        <div class="sig-line"></div>
        <div>Candidate's Signature</div>
      </div>
      <div class="sig-box">
        <div class="sig-line"></div>
        <div>Invigilator's Signature</div>
      </div>
      <div class="sig-box">
        <div class="sig-line"></div>
        <div style="font-weight: bold;">Mr. CNAT (Chief Examiner)</div>
        <div style="font-size: 8pt;">Coder &amp; AccoTax Examination Board</div>
      </div>
    </div>

  </div>
  <script>
    window.onload = function() {
      window.print();
      setTimeout(function() { window.close(); }, 500);
    };
  <\/script>
</body>
</html>`;p.document.write(b),p.document.close()};function I({isOpen:i,onClose:s,projectTitle:n="Project 1: Commercial Accounting Assignment",companyName:x="M/s Apex Global Traders",period:o="April 2026",transactions:p=[],isBengali:r=!1,plainTextQp:f=""}){if(!i)return null;const b=()=>{S({projectTitle:n,companyName:x,period:o,transactions:p,isBengali:r})},c=()=>{const a=document.createElement("a"),_=new Blob([f],{type:"text/plain;charset=utf-8"});a.href=URL.createObjectURL(_),a.download=r?"Coder_AccoTax_Commerce_Question_Paper_bn.txt":"Coder_AccoTax_Commerce_Question_Paper.txt",document.body.appendChild(a),a.click(),document.body.removeChild(a)};return e.jsx("div",{className:"fixed inset-0 z-50 flex items-center justify-center bg-slate-950/85 backdrop-blur-md p-2 sm:p-4 overflow-y-auto",children:e.jsxs("div",{className:"relative w-full max-w-4xl bg-slate-900 border border-emerald-500/40 rounded-2xl shadow-2xl overflow-hidden flex flex-col max-h-[92vh]",children:[e.jsxs("div",{className:"flex items-center justify-between px-6 py-4 bg-slate-950 border-b border-slate-800 text-white",children:[e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx(j,{className:"text-emerald-400",size:20}),e.jsx("h3",{className:"text-sm font-bold font-mono text-emerald-300",children:r?"কোডার ও অ্যাকাউন্টাক্স কমার্স প্রশ্নপত্র প্যানেল":"Coder & AccoTax Commerce Exam Question Paper"})]}),e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsxs("button",{onClick:b,className:"px-4 py-2 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white font-mono text-xs font-bold transition flex items-center gap-2 shadow-lg scale-105",children:[e.jsx(T,{size:16}),e.jsx("span",{children:r?"🖨️ A4 কমার্স প্রশ্নপত্র প্রিন্ট / PDF":"🖨️ Print A4 Commerce Question Paper"})]}),e.jsxs("button",{onClick:c,className:"px-3.5 py-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 font-mono text-xs font-bold transition flex items-center gap-2 border border-slate-700",children:[e.jsx(k,{size:14}),e.jsx("span",{children:r?"TXT ডাউনলোড":"Download .txt"})]}),e.jsx("button",{onClick:s,className:"p-2 rounded-lg bg-slate-800 hover:bg-rose-950 text-slate-400 hover:text-rose-400 transition",children:e.jsx(E,{size:18})})]})]}),e.jsx("div",{className:"overflow-y-auto p-6 sm:p-10 space-y-6 text-slate-900 bg-slate-100 font-serif",children:e.jsxs("div",{className:"border-4 border-slate-900 p-6 rounded-none space-y-6 bg-white shadow-xl",children:[e.jsxs("div",{className:"text-center space-y-1.5 border-b-2 border-slate-900 pb-4",children:[e.jsx("div",{className:"text-xs font-mono font-bold tracking-widest text-slate-700 uppercase",children:"ISO 9001:2015 CERTIFIED ACADEMY OF COMMERCE & IT"}),e.jsx("h1",{className:"text-2xl sm:text-3xl font-black text-slate-950 tracking-tight uppercase font-serif",children:"CODER & ACCOTAX"}),e.jsx("p",{className:"text-xs sm:text-sm font-semibold text-slate-800 font-sans",children:"Center for Practical Accounting, TallyPrime & Taxation Studies · Barrackpore Lab"}),e.jsx("p",{className:"text-[11px] font-mono text-slate-600",children:"Exam Center Code: CA-743121 | Affiliation ID: ACC-IND-2026"}),e.jsxs("div",{className:"pt-2",children:[e.jsx("h2",{className:"text-base sm:text-lg font-bold text-slate-900 uppercase tracking-wide font-sans bg-slate-100 py-1 border border-slate-300",children:"DIPLOMA IN PRACTICAL ACCOUNTING — SEMESTER EXAMINATION"}),e.jsxs("p",{className:"text-xs font-mono text-slate-800 font-bold mt-1",children:[n," (",x," — Financial Period: ",o,")"]})]})]}),e.jsxs("div",{className:"flex flex-col sm:flex-row items-center justify-between text-xs font-mono font-bold bg-slate-50 p-2.5 border border-slate-900 text-slate-900",children:[e.jsx("span",{children:"Time Allowed: 2 Hours (120 Mins)"}),e.jsx("span",{children:"Course Code: TALLY-PRO-103"}),e.jsx("span",{children:"Full Marks: 30 Marks"}),e.jsx("span",{children:"Pass Marks: 12 Marks"})]}),e.jsxs("div",{className:"border border-slate-900 p-3.5 font-mono text-xs text-slate-900 grid grid-cols-1 sm:grid-cols-2 gap-2 bg-slate-50",children:[e.jsxs("div",{children:[e.jsx("strong",{children:"Name of Candidate:"})," _____________________________________"]}),e.jsxs("div",{children:[e.jsx("strong",{children:"Registration / Roll No:"})," ______________________"]}),e.jsxs("div",{children:[e.jsx("strong",{children:"Study Center Name:"})," ____________________________________"]}),e.jsxs("div",{children:[e.jsx("strong",{children:"Date of Examination:"})," ______________________"]})]}),e.jsxs("div",{className:"p-3.5 bg-slate-50 border border-slate-900 space-y-1.5 text-xs font-sans text-slate-900",children:[e.jsxs("h4",{className:"font-mono font-bold uppercase tracking-wider text-slate-950 flex items-center gap-1.5",children:[e.jsx(y,{size:14}),e.jsx("span",{children:r?"পরীক্ষার্থীদের জন্য সাধারণ নির্দেশাবলী (General Instructions):":"General Instructions for Candidates:"})]}),e.jsxs("ol",{className:"list-decimal pl-5 space-y-1 text-slate-800",children:[e.jsx("li",{children:r?"সকল প্রশ্নের উত্তর আবশ্যক। নিচে প্রদত্ত ৩০টি ব্যবসায়িক লেনদেন সমাধান করুন।":"All questions are compulsory. Solve all 30 commercial business transactions listed below."}),e.jsx("li",{children:r?"৫-কলামের জাবেদা বইয়ে (Date, Particulars, J.F., Dr., Cr.) হিসাবভুক্ত করুন।":"Record entries in 5-column General Journal format (Date, Particulars, J.F., Debit, Credit)."}),e.jsx("li",{children:r?"T-ফরম্যাটে খতিয়ান অ্যাকাউন্ট (8-Column Ledgers) প্রস্তুত করে মাস শেষে Balance c/d বের করুন।":"Post entries to 8-column T-Account Ledgers and balance each account with Balance c/d."}),e.jsx("li",{children:r?"পরবর্তী মাসের ১লা তারিখে Balance b/d হিসাবে জের আনয়ন করুন এবং রেওয়ামিল মিলিয়ে দিন।":"Carry forward Balance b/d on 1st of next month and reconcile final Trial Balance."})]})]}),e.jsxs("div",{className:"space-y-3",children:[e.jsxs("div",{className:"flex items-center justify-between border-b-2 border-slate-900 pb-1.5 font-sans",children:[e.jsx("h3",{className:"text-xs sm:text-sm font-bold uppercase tracking-wider text-slate-950",children:r?"বিভাগ-খ: ৩০টি ব্যবসায়িক লেনদেন প্রশ্নাবলী (৩০ নম্বর)":"SECTION B: 30 Commercial Business Transactions (30 Marks)"}),e.jsx("span",{className:"text-xs font-mono text-slate-800 font-bold",children:"[1 Mark Each]"})]}),e.jsx("div",{className:"overflow-x-auto",children:e.jsxs("table",{className:"w-full text-left text-xs font-sans border-collapse border border-slate-900",children:[e.jsx("thead",{children:e.jsxs("tr",{className:"bg-slate-200 text-slate-950 font-mono font-bold border-b border-slate-900",children:[e.jsx("th",{className:"py-2 px-3 w-12 text-center border-r border-slate-900",children:"Q#"}),e.jsx("th",{className:"py-2 px-3 w-28 font-mono border-r border-slate-900",children:"Date"}),e.jsx("th",{className:"py-2 px-3 border-r border-slate-900",children:"Commercial Business Transaction Statement"}),e.jsx("th",{className:"py-2 px-3 w-16 text-center",children:"Marks"})]})}),e.jsx("tbody",{className:"divide-y divide-slate-400 text-slate-900",children:p.map(a=>e.jsxs("tr",{className:"hover:bg-slate-50",children:[e.jsxs("td",{className:"py-2 px-3 text-center font-mono font-bold text-slate-950 border-r border-slate-300",children:["Q",a.id,"."]}),e.jsx("td",{className:"py-2 px-3 font-mono text-slate-700 border-r border-slate-300",children:a.date}),e.jsx("td",{className:"py-2 px-3 font-semibold text-slate-950 border-r border-slate-300",children:r?a.descBn:a.descEn}),e.jsx("td",{className:"py-2 px-3 text-center font-mono font-bold text-slate-800",children:"1"})]},a.id))})]})})]}),e.jsxs("div",{className:"pt-8 flex justify-between items-end font-sans text-xs text-slate-900",children:[e.jsxs("div",{className:"text-center space-y-1",children:[e.jsx("div",{className:"w-44 border-b border-slate-900 mb-1"}),e.jsx("div",{children:"Candidate's Signature"})]}),e.jsxs("div",{className:"text-center space-y-1",children:[e.jsx("div",{className:"w-44 border-b border-slate-900 mb-1"}),e.jsx("div",{children:"Invigilator's Signature"})]}),e.jsxs("div",{className:"text-center space-y-1",children:[e.jsx("div",{className:"w-44 border-b border-slate-900 mb-1"}),e.jsx("div",{className:"font-bold text-slate-950",children:"Mr. CNAT (Chief Examiner)"}),e.jsx("div",{className:"text-[10px] font-mono text-slate-700",children:"Coder & AccoTax Examination Board"})]})]})]})})]})})}const d=i=>i==null||isNaN(i)?"0":Number(i).toLocaleString("en-IN");function z({data:i,isBengali:s=!1}){const[n,x]=g.useState("journal"),[o,p]=g.useState("Cash Account");if(!i)return null;const{company:r,transactions:f=[],journalEntries:b=[],ledgers:c={},trialBalance:a=[]}=i,_=Object.keys(c),m=c[o]||(_.length>0?c[_[0]]:null),v=b.reduce((t,l)=>t+(l.drAmount||0),0),w=b.reduce((t,l)=>t+(l.crAmount||0),0),C=a.reduce((t,l)=>t+(l.drAmount||0),0),A=a.reduce((t,l)=>t+(l.crAmount||0),0);return e.jsxs("div",{className:"rounded-2xl border border-emerald-500/30 bg-slate-900/90 p-5 md:p-8 shadow-2xl space-y-6",children:[e.jsxs("div",{className:"flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-800 pb-4",children:[e.jsxs("div",{children:[e.jsxs("div",{className:"inline-flex items-center gap-2 px-3 py-1 rounded-md bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-mono font-bold uppercase mb-2",children:[e.jsx(N,{size:14}),e.jsx("span",{children:s?"জার্নাল ও খতিয়ান সমাধান ভিউয়ার":"Master Journal & Ledger Solution Viewer"})]}),e.jsxs("h2",{className:"text-xl md:text-2xl font-bold text-white",children:[r?.name||"M/s Apex Global Traders"," — ",r?.period||"April 2026"]}),e.jsx("p",{className:"text-xs text-slate-400",children:s?"৩০টি লেনদেনের সম্পূর্ণ ডাবল-এন্ট্রি জাবেদা, খতিয়ান অ্যাকাউন্ট ও ট্রায়াল ব্যালেন্স অডিট":"Complete 30-Transaction Journal Entries, T-Account Ledgers & Trial Balance Audit Solution"})]}),e.jsxs("div",{className:"flex flex-wrap items-center gap-1.5 bg-slate-950 p-1.5 rounded-xl border border-slate-800 text-xs font-mono font-bold",children:[e.jsxs("button",{onClick:()=>x("txList"),className:`px-3 py-2 rounded-lg transition flex items-center gap-1.5 ${n==="txList"?"bg-slate-800 text-emerald-300 border border-slate-700":"text-slate-400 hover:text-slate-200"}`,children:[e.jsx(y,{size:14}),e.jsx("span",{children:s?"১. লেনদেনসমূহ (৩০)":"1. Transactions (30)"})]}),e.jsxs("button",{onClick:()=>x("journal"),className:`px-3 py-2 rounded-lg transition flex items-center gap-1.5 ${n==="journal"?"bg-emerald-950 text-emerald-300 border border-emerald-500":"text-slate-400 hover:text-slate-200"}`,children:[e.jsx(D,{size:14}),e.jsx("span",{children:s?"২. জাবেদা বই (Journal)":"2. Journal Book"})]}),e.jsxs("button",{onClick:()=>x("ledger"),className:`px-3 py-2 rounded-lg transition flex items-center gap-1.5 ${n==="ledger"?"bg-sky-950 text-sky-300 border border-sky-500":"text-slate-400 hover:text-slate-200"}`,children:[e.jsx(N,{size:14}),e.jsx("span",{children:s?"৩. খতিয়ান খাতা (Ledger)":"3. T-Ledgers"})]}),e.jsxs("button",{onClick:()=>x("trialBalance"),className:`px-3 py-2 rounded-lg transition flex items-center gap-1.5 ${n==="trialBalance"?"bg-teal-950 text-teal-300 border border-teal-500":"text-slate-400 hover:text-slate-200"}`,children:[e.jsx(j,{size:14}),e.jsx("span",{children:s?"৪. ট্রায়াল ব্যালেন্স":"4. Trial Balance"})]})]})]}),n==="txList"&&e.jsxs("div",{className:"space-y-4",children:[e.jsx("h3",{className:"text-base font-bold text-emerald-400 font-mono",children:s?"৩০টি বাণিজ্যিক লেনদেনের বিবরণী তালিকা:":"30 Commercial Business Transactions List:"}),e.jsx("div",{className:"overflow-x-auto rounded-xl border border-slate-800 bg-slate-950",children:e.jsxs("table",{className:"w-full text-left text-xs font-mono border-collapse min-w-[650px]",children:[e.jsx("thead",{children:e.jsxs("tr",{className:"bg-slate-900 text-slate-400 border-b border-slate-800",children:[e.jsx("th",{className:"py-2.5 px-3 w-16 text-center",children:"#"}),e.jsx("th",{className:"py-2.5 px-3 w-28",children:"Date"}),e.jsx("th",{className:"py-2.5 px-3",children:"Transaction Detail Description"}),e.jsx("th",{className:"py-2.5 px-3 w-36 text-right",children:"Voucher Type"})]})}),e.jsx("tbody",{className:"divide-y divide-slate-800/60 text-slate-300",children:f.map(t=>e.jsxs("tr",{className:"hover:bg-slate-900/50 transition",children:[e.jsxs("td",{className:"py-2.5 px-3 text-center text-emerald-400 font-bold",children:["#",t.id]}),e.jsx("td",{className:"py-2.5 px-3 text-slate-400",children:t.date}),e.jsx("td",{className:"py-2.5 px-3 font-sans text-xs",children:s?t.descBn:t.descEn}),e.jsx("td",{className:"py-2.5 px-3 text-right font-bold text-sky-400",children:t.voucher})]},t.id))})]})})]}),n==="journal"&&e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{className:"flex flex-col sm:flex-row sm:items-center justify-between gap-2",children:[e.jsxs("h3",{className:"text-base font-bold text-emerald-300 font-mono flex items-center gap-2",children:[e.jsx(P,{size:16,className:"text-emerald-400"}),e.jsx("span",{children:s?"৫-কলামের পূর্ণাঙ্গ সাধারণ জাবেদা বই (Journal Book):":"Full 5-Column General Journal Book:"})]}),e.jsxs("span",{className:"text-xs font-mono text-slate-400",children:["Total Lines: ",b.length," Journal Entries"]})]}),e.jsx("div",{className:"overflow-x-auto rounded-xl border border-slate-800 bg-slate-950 shadow-inner",children:e.jsxs("table",{className:"w-full text-left text-xs font-mono border-collapse min-w-[700px]",children:[e.jsx("thead",{children:e.jsxs("tr",{className:"bg-slate-900 text-slate-300 border-b border-slate-800",children:[e.jsx("th",{className:"py-3 px-3 w-24",children:"Date"}),e.jsx("th",{className:"py-3 px-3",children:"Particulars & Narration"}),e.jsx("th",{className:"py-3 px-3 w-16 text-center border-r border-slate-800",children:"J.F."}),e.jsx("th",{className:"py-3 px-3 w-32 text-right text-emerald-400 border-r border-slate-800",children:"Debit (₹)"}),e.jsx("th",{className:"py-3 px-3 w-32 text-right text-sky-400",children:"Credit (₹)"})]})}),e.jsxs("tbody",{className:"divide-y divide-slate-800/50 text-slate-200",children:[b.map((t,l)=>e.jsxs("tr",{className:"hover:bg-slate-900/50 transition",children:[e.jsx("td",{className:"py-3 px-3 text-slate-400 align-top",children:t.date}),e.jsxs("td",{className:"py-3 px-3 space-y-1",children:[e.jsxs("div",{className:"font-bold text-emerald-300",children:[t.drAccount," Dr."]}),e.jsxs("div",{className:"pl-6 text-sky-300",children:["To ",t.crAccount]}),e.jsxs("div",{className:"text-[11px] text-slate-400 italic pt-0.5",children:["(",t.narration,")"]})]}),e.jsx("td",{className:"py-3 px-3 text-center text-slate-500 border-r border-slate-800/60 align-top",children:t.jf||"—"}),e.jsxs("td",{className:"py-3 px-3 text-right font-bold text-emerald-400 border-r border-slate-800/60 align-top",children:["₹",d(t.drAmount)]}),e.jsxs("td",{className:"py-3 px-3 text-right font-bold text-sky-400 align-top",children:["₹",d(t.crAmount)]})]},l)),e.jsxs("tr",{className:"bg-slate-900 font-bold text-white border-t-2 border-b-2 border-emerald-500/50 text-sm",children:[e.jsx("td",{colSpan:3,className:"py-3.5 px-3 text-right uppercase tracking-wider text-slate-300",children:"Grand Journal Total:"}),e.jsxs("td",{className:"py-3.5 px-3 text-right text-emerald-400 border-r border-slate-800",children:["₹",d(v)]}),e.jsxs("td",{className:"py-3.5 px-3 text-right text-sky-400",children:["₹",d(w)]})]})]})]})})]}),n==="ledger"&&e.jsxs("div",{className:"space-y-6",children:[e.jsxs("div",{className:"flex flex-col sm:flex-row sm:items-center justify-between gap-3",children:[e.jsx("h3",{className:"text-base font-bold text-sky-300 font-mono",children:s?"খতিয়ান খাতা নির্বাচন করুন:":"Select General Ledger Account to View T-Format:"}),e.jsx("div",{className:"flex flex-wrap gap-1.5",children:_.map(t=>e.jsx("button",{onClick:()=>p(t),className:`px-3 py-1.5 rounded-lg text-xs font-mono font-bold transition border ${o===t?"bg-sky-950 border-sky-500 text-sky-300 shadow-md":"bg-slate-950 border-slate-800 text-slate-400 hover:text-slate-200"}`,children:t},t))})]}),m&&e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{className:"flex flex-col sm:flex-row sm:items-center justify-between gap-2 bg-slate-950 p-4 rounded-xl border border-slate-800",children:[e.jsxs("h4",{className:"text-lg font-bold text-white font-mono uppercase tracking-wider",children:["ACCOUNT: ",o]}),e.jsxs("div",{className:"flex items-center gap-3 text-xs font-mono",children:[e.jsxs("span",{className:"px-3 py-1 rounded bg-slate-900 border border-slate-700 text-emerald-400 font-bold",children:["Net Balance: ₹",d(m.closingBalance)]}),e.jsx("span",{className:"px-3 py-1 rounded bg-sky-950 text-sky-300 border border-sky-500/40 font-bold",children:m.balanceType})]})]}),e.jsx("div",{className:"overflow-x-auto rounded-xl border border-slate-800 bg-slate-950 shadow-inner",children:e.jsxs("table",{className:"w-full text-left text-xs font-mono border-collapse min-w-[700px]",children:[e.jsxs("thead",{children:[e.jsxs("tr",{className:"bg-slate-900 text-slate-300 border-b border-slate-800",children:[e.jsx("th",{colSpan:4,className:"py-2.5 px-4 text-emerald-400 font-bold border-r border-slate-800 text-center uppercase tracking-wider bg-emerald-950/40",children:"Dr. (Debit Side - বাম পাশ)"}),e.jsx("th",{colSpan:4,className:"py-2.5 px-4 text-sky-400 font-bold text-center uppercase tracking-wider bg-sky-950/40",children:"Cr. (Credit Side - ডান পাশ)"})]}),e.jsxs("tr",{className:"bg-slate-900/90 text-slate-400 border-b border-slate-800 text-[11px]",children:[e.jsx("th",{className:"py-2 px-3 border-r border-slate-800/60 w-24",children:"Date"}),e.jsx("th",{className:"py-2 px-3 border-r border-slate-800/60",children:"Particulars (Dr)"}),e.jsx("th",{className:"py-2 px-3 border-r border-slate-800/60 w-12 text-center",children:"J.F."}),e.jsx("th",{className:"py-2 px-3 border-r-2 border-slate-700 text-right w-24",children:"Amount (₹)"}),e.jsx("th",{className:"py-2 px-3 border-r border-slate-800/60 w-24",children:"Date"}),e.jsx("th",{className:"py-2 px-3 border-r border-slate-800/60",children:"Particulars (Cr)"}),e.jsx("th",{className:"py-2 px-3 border-r border-slate-800/60 w-12 text-center",children:"J.F."}),e.jsx("th",{className:"py-2 px-3 text-right w-24",children:"Amount (₹)"})]})]}),e.jsxs("tbody",{className:"divide-y divide-slate-800/50 text-slate-200",children:[Array.from({length:Math.max(m.debitEntries?.length||0,m.creditEntries?.length||0)}).map((t,l)=>{const u=m.debitEntries?.[l],h=m.creditEntries?.[l];return e.jsxs("tr",{className:"hover:bg-slate-900/50 transition",children:[e.jsx("td",{className:"py-2.5 px-3 border-r border-slate-800/60 text-slate-400",children:u?.date||""}),e.jsx("td",{className:"py-2.5 px-3 border-r border-slate-800/60 font-semibold text-emerald-300",children:u?.particular||""}),e.jsx("td",{className:"py-2.5 px-3 border-r border-slate-800/60 text-center text-slate-500",children:u?.jf||""}),e.jsx("td",{className:"py-2.5 px-3 border-r-2 border-slate-700 text-right font-bold text-emerald-400",children:u?.amount!==void 0?`₹${d(u.amount)}`:""}),e.jsx("td",{className:"py-2.5 px-3 border-r border-slate-800/60 text-slate-400",children:h?.date||""}),e.jsx("td",{className:`py-2.5 px-3 border-r border-slate-800/60 font-semibold ${h?.particular?.includes("c/d")?"text-amber-300 font-bold":"text-sky-300"}`,children:h?.particular||""}),e.jsx("td",{className:"py-2.5 px-3 border-r border-slate-800/60 text-center text-slate-500",children:h?.jf||""}),e.jsx("td",{className:`py-2.5 px-3 text-right font-bold ${h?.particular?.includes("c/d")?"text-amber-300":"text-sky-400"}`,children:h?.amount!==void 0?`₹${d(h.amount)}`:""})]},l)}),e.jsxs("tr",{className:"bg-slate-900 font-bold text-white border-t-2 border-b-2 border-emerald-500/50",children:[e.jsx("td",{colSpan:3,className:"py-3 px-3 text-right border-r border-slate-800/60 uppercase text-[11px] tracking-wider text-emerald-400",children:"Total Dr:"}),e.jsxs("td",{className:"py-3 px-3 border-r-2 border-slate-700 text-right text-emerald-400 font-mono text-sm",children:["₹",d(m.debitTotal)]}),e.jsx("td",{colSpan:3,className:"py-3 px-3 text-right border-r border-slate-800/60 uppercase text-[11px] tracking-wider text-sky-400",children:"Total Cr:"}),e.jsxs("td",{className:"py-3 px-3 text-right text-sky-400 font-mono text-sm",children:["₹",d(m.creditTotal)]})]})]})]})})]})]}),n==="trialBalance"&&e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{className:"flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-800 pb-3",children:[e.jsxs("h3",{className:"text-base font-bold text-teal-300 font-mono flex items-center gap-2",children:[e.jsx(j,{size:16,className:"text-teal-400"}),e.jsx("span",{children:s?"ট্রায়াল ব্যালেন্স সমীকরণ ও গাণিতিক অডিট:":"Final Reconciled Trial Balance:"})]}),e.jsx("span",{className:"text-xs font-mono text-emerald-400 font-bold",children:"Status: 100% Balanced Equality"})]}),e.jsx("div",{className:"overflow-x-auto rounded-xl border border-slate-800 bg-slate-950 shadow-inner",children:e.jsxs("table",{className:"w-full text-left text-xs font-mono border-collapse min-w-[650px]",children:[e.jsx("thead",{children:e.jsxs("tr",{className:"bg-slate-900 text-slate-300 border-b border-slate-800",children:[e.jsx("th",{className:"py-2.5 px-3",children:"Ledger Account Name"}),e.jsx("th",{className:"py-2.5 px-3",children:"Parent Group / Nature"}),e.jsx("th",{className:"py-2.5 px-3 w-36 text-right text-emerald-400 border-r border-slate-800",children:"Debit (₹)"}),e.jsx("th",{className:"py-2.5 px-3 w-36 text-right text-sky-400",children:"Credit (₹)"})]})}),e.jsxs("tbody",{className:"divide-y divide-slate-800/50 text-slate-200",children:[a.map((t,l)=>e.jsxs("tr",{className:"hover:bg-slate-900/50 transition",children:[e.jsx("td",{className:"py-2.5 px-3 font-bold text-slate-200",children:t.accountName}),e.jsx("td",{className:"py-2.5 px-3 text-slate-400 text-[11px]",children:t.group}),e.jsx("td",{className:"py-2.5 px-3 text-right font-bold text-emerald-400 border-r border-slate-800/60",children:t.drAmount?`₹${d(t.drAmount)}`:"—"}),e.jsx("td",{className:"py-2.5 px-3 text-right font-bold text-sky-400",children:t.crAmount?`₹${d(t.crAmount)}`:"—"})]},l)),e.jsxs("tr",{className:"bg-slate-900 font-bold text-white border-t-2 border-b-2 border-teal-500/50 text-sm",children:[e.jsx("td",{colSpan:2,className:"py-3.5 px-3 text-right uppercase tracking-wider text-teal-300",children:"Trial Balance Total:"}),e.jsxs("td",{className:"py-3.5 px-3 text-right text-emerald-400 border-r border-slate-800",children:["₹",d(C)]}),e.jsxs("td",{className:"py-3.5 px-3 text-right text-sky-400",children:["₹",d(A)]})]})]})]})})]})]})}export{I as C,z as J,S as t};
