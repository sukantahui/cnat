import{j as e,b as u}from"./vendor-react-core-B-R9HE-Z.js";import{T as b}from"./TeacherSukantaHui-BKEDxeCI.js";import{F as f}from"./FAQTemplate-16IfroqC.js";import{P as w}from"./PlainTextPrint-C6NaUtnE.js";import{c as g,D as a,F as v,aj as N,P as c,a as C,t as j,aY as y}from"./vendor-icons-C1Dcofhq.js";const T=[{question:"What is the primary purpose of the Module 003_004 Revision Document?",answer:"To provide a consolidated, quick-reference guide on iterative loops (while, do-while), output prediction techniques, dry-run tables, and infinite loop prevention for CBSE Class XII IT (802) students.",marks:2,hint:"Think about rapid board examination revision."},{question:"Which loop guarantees that its body is executed at least once regardless of the condition?",options:["do-while loop","while loop","for loop","enhanced for loop"],correctAnswer:0,explanation:"The do-while loop evaluates its condition at the bottom (exit point), guaranteeing at least one execution.",marks:1},{question:"Which of the following creates an infinite loop in Java?",options:["int i = 5; while (i >= 1) { System.out.print(i); i++; }","int i = 5; while (i >= 1) { System.out.print(i); i--; }","int i = 1; while (i <= 5) { i++; }","for (int i = 0; i < 5; i++) {}"],correctAnswer:0,explanation:"Incrementing i when checking i >= 1 moves the value further away from 0, resulting in an infinite loop.",marks:1}],m=`================================================================================\r
CBSE CLASS XII INFORMATION TECHNOLOGY (SUBJECT CODE: 802)\r
MODULE 003_004: ITERATIVE LOOPS & OUTPUT PREDICTION\r
TOPIC 7: DOWNLOADABLE DOCUMENTS & REVISION PACK\r
INSTRUCTOR: SUKANTA HUI (CODER & ACCOTAX, BARRACKPORE)\r
================================================================================\r
\r
This document provides printable materials and revision checklists for:\r
1. Java Iterative Statements (while and do-while loops).\r
2. Step-by-step output prediction dry-run tables.\r
3. Common examiner traps, semicolon errors, and jump statement edge cases.\r
\r
Use the download buttons in Topic 7 to save these reference materials offline.\r
================================================================================\r
`,E=`================================================================================\r
CBSE CLASS XII INFORMATION TECHNOLOGY (SUBJECT CODE: 802)\r
MODULE 003_004: ITERATIVE LOOPS & OUTPUT PREDICTION\r
MASTER REVISION SUMMARY & BOARD EXAMINATION CHEATSHEET\r
INSTRUCTOR: SUKANTA HUI (CODER & ACCOTAX, BARRACKPORE)\r
================================================================================\r
\r
1. CORE CONCEPTS SUMMARY\r
--------------------------------------------------------------------------------\r
* Loop Components: Initialization, Condition, Body, Update Expression.\r
* Entry-Controlled (while, for): Condition tested BEFORE body. Min runs: 0.\r
* Exit-Controlled (do-while): Condition tested AFTER body. Min runs: 1.\r
* Semicolon Alert: \`do { ... } while(condition);\` MUST have a semicolon.\r
  \`while(condition);\` creates an empty body loop!\r
\r
2. DRY RUNNING OUTPUT PREDICTION (CBSE FAVORITE)\r
--------------------------------------------------------------------------------\r
Snippet:\r
    int num = 5;\r
    do {\r
        System.out.println(num + 2);\r
        --num;\r
    } while (num >= 2);\r
\r
Output:\r
7\r
6\r
5\r
4\r
\r
Final value of num: 1\r
\r
3. JUMP STATEMENTS\r
--------------------------------------------------------------------------------\r
* \`break;\`: Terminates the entire enclosing loop immediately.\r
* \`continue;\`: Skips the remaining statements in the current iteration only.\r
\r
4. 10-POINT EXAM CHECKLIST\r
--------------------------------------------------------------------------------\r
1. Entry-controlled vs Exit-controlled differences.\r
2. Semicolon rules on while vs do-while.\r
3. Output prediction of decrementing loops.\r
4. Division (\`/ 10\`) vs Modulus (\`% 10\`) in digit extraction.\r
5. Why Scanner requires \`import java.util.Scanner;\`.\r
6. Break statement behavior in loops and switch cases.\r
7. Continue statement mechanics and while-loop increment traps.\r
8. Detecting infinite loops from incorrect update expressions.\r
9. Guaranteed execution of do-while loop (1 time).\r
10. Converting while loops to for loops and do-while loops.\r
================================================================================\r
`,R=()=>{const[i,x]=u.useState({}),o=[{id:1,text:"Entry vs Exit Controlled: Know that while/for evaluate at entry (min 0 runs), whereas do-while evaluates at exit (min 1 run)."},{id:2,text:"Mandatory Semicolon: Remember that 'do { ... } while(cond);' strictly requires a terminating semicolon."},{id:3,text:"Empty Body While Trap: Understand that 'while(cond);' executes an empty body and easily leads to an infinite loop."},{id:4,text:"Digit Extraction Math: Master 'n % 10' for extracting digits and 'n / 10' for reducing multi-digit integers."},{id:5,text:"Scanner Input Blueprint: Remember 'import java.util.Scanner;' and 'sc.nextInt()' for reading numeric values."},{id:6,text:"Reverse Loop Variables: In N to 1 loops, remember that the variable decrements ('i--') and condition is 'i >= 1'."},{id:7,text:"Break vs Continue: 'break' kills the whole loop; 'continue' skips only the remaining statements of the current iteration."},{id:8,text:"While Continue Trap: When using continue in while loops, update the variable BEFORE calling continue."},{id:9,text:"Trace Table Accuracy: Record variable values, print outputs, decrements, and condition evaluations in clear columns."},{id:10,text:"Infinite Loop Recognition: Detect missing updates or increments in loops expecting decrements."}],h=t=>{x(s=>({...s,[t]:!s[t]}))},r=Object.values(i).filter(Boolean).length,l=Math.round(r/o.length*100),d=(t,s)=>{const n=document.createElement("a"),p=new Blob([s],{type:"text/plain;charset=utf-8"});n.href=URL.createObjectURL(p),n.download=t,document.body.appendChild(n),n.click(),document.body.removeChild(n)};return e.jsxs("div",{className:"bg-slate-900/90 border border-slate-800 rounded-3xl p-6 sm:p-8 shadow-2xl space-y-8 mb-12",children:[e.jsxs("div",{className:"flex flex-wrap items-center justify-between gap-4 border-b border-slate-800 pb-5",children:[e.jsxs("div",{children:[e.jsxs("div",{className:"flex items-center gap-2 text-amber-400 font-semibold text-xs tracking-wider uppercase",children:[e.jsx(a,{className:"w-4 h-4"}),e.jsx("span",{children:"Master Revision & Download Center"})]}),e.jsx("h3",{className:"text-xl sm:text-2xl font-black text-white mt-1",children:"Downloadable Revision Sheets & 10-Point CBSE Exam Checklist"})]}),e.jsx("div",{className:"text-xs font-mono px-3 py-1.5 rounded-full bg-slate-950 border border-slate-800 text-slate-300",children:"Module 003_004 Master Revision Pack"})]}),e.jsxs("div",{className:"grid sm:grid-cols-2 lg:grid-cols-3 gap-4",children:[e.jsxs("div",{className:"p-5 rounded-2xl bg-slate-950 border border-slate-800 space-y-3 flex flex-col justify-between",children:[e.jsxs("div",{className:"space-y-2",children:[e.jsx("div",{className:"p-3 rounded-xl bg-amber-500/10 border border-amber-500/30 text-amber-400 w-fit",children:e.jsx(v,{className:"w-5 h-5"})}),e.jsx("h4",{className:"text-sm font-bold text-white",children:"Master Revision Cheatsheet (.txt)"}),e.jsx("p",{className:"text-xs text-slate-400 leading-relaxed",children:"Complete theoretical summary of while, do-while, loop tracing tables, digit extraction, and jump statement mechanics."})]}),e.jsxs("button",{onClick:()=>d("003_004_iterative_loops_master_summary.txt",E),className:"w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs transition-colors shadow-lg shadow-amber-950/40",children:[e.jsx(a,{className:"w-3.5 h-3.5"})," Download Master Cheatsheet"]})]}),e.jsxs("div",{className:"p-5 rounded-2xl bg-slate-950 border border-slate-800 space-y-3 flex flex-col justify-between",children:[e.jsxs("div",{className:"space-y-2",children:[e.jsx("div",{className:"p-3 rounded-xl bg-sky-500/10 border border-sky-500/30 text-sky-400 w-fit",children:e.jsx(N,{className:"w-5 h-5"})}),e.jsx("h4",{className:"text-sm font-bold text-white",children:"Top 10 Exam Golden Rules (.txt)"}),e.jsx("p",{className:"text-xs text-slate-400 leading-relaxed",children:"High-yield exam review sheet highlighting the top 10 CBSE examiner favorite traps, semicolon errors, and output tracing formulas."})]}),e.jsxs("button",{onClick:()=>d("003_004_loop_exam_golden_rules.txt",m),className:"w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-sky-500 hover:bg-sky-400 text-slate-950 font-bold text-xs transition-colors shadow-lg shadow-sky-950/40",children:[e.jsx(a,{className:"w-3.5 h-3.5"})," Download Golden Rules"]})]}),e.jsxs("div",{className:"p-5 rounded-2xl bg-slate-950 border border-slate-800 space-y-3 flex flex-col justify-between",children:[e.jsxs("div",{className:"space-y-2",children:[e.jsx("div",{className:"p-3 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 w-fit",children:e.jsx(c,{className:"w-5 h-5"})}),e.jsx("h4",{className:"text-sm font-bold text-white",children:"Printable Reference Card"}),e.jsx("p",{className:"text-xs text-slate-400 leading-relaxed",children:"Quick print-ready revision sheet for last-minute revision before practical lab tests and board examinations."})]}),e.jsxs("button",{onClick:()=>window.print(),className:"w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-xs transition-colors shadow-lg shadow-emerald-950/40",children:[e.jsx(c,{className:"w-3.5 h-3.5"})," Print Revision Pack"]})]})]}),e.jsxs("div",{className:"bg-slate-950 p-6 rounded-2xl border border-slate-800 space-y-4",children:[e.jsxs("div",{className:"flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-800 pb-3",children:[e.jsxs("h4",{className:"text-sm font-bold text-white flex items-center gap-2",children:[e.jsx(C,{className:"w-4 h-4 text-emerald-400"}),"10-Point CBSE IT (802) Exam Readiness Checklist"]}),e.jsxs("span",{className:"text-xs font-mono text-emerald-400 font-bold",children:[r," / ",o.length," Completed (",l,"%)"]})]}),e.jsx("div",{className:"w-full bg-slate-900 h-2 rounded-full overflow-hidden",children:e.jsx("div",{className:"bg-emerald-500 h-full transition-all duration-300 rounded-full",style:{width:`${l}%`}})}),e.jsx("div",{className:"grid gap-2.5 pt-2",children:o.map(t=>e.jsxs("div",{onClick:()=>h(t.id),className:`p-3 rounded-xl border text-xs flex items-start gap-3 cursor-pointer transition ${i[t.id]?"bg-emerald-500/10 border-emerald-500/30 text-slate-200":"bg-slate-900/60 border-slate-800/80 text-slate-400 hover:bg-slate-900"}`,children:[e.jsx("div",{className:"mt-0.5",children:i[t.id]?e.jsx(j,{className:"w-4 h-4 text-emerald-400 shrink-0"}):e.jsx(y,{className:"w-4 h-4 text-slate-600 shrink-0"})}),e.jsx("span",{className:"leading-relaxed",children:t.text})]},t.id))})]})]})},M=()=>e.jsx("div",{className:"min-h-screen bg-slate-950 text-slate-200 py-10 px-4 sm:px-6 lg:px-8",children:e.jsxs("div",{className:"max-w-5xl mx-auto space-y-12",children:[e.jsxs("div",{className:"space-y-4 border-b border-slate-800 pb-8",children:[e.jsxs("div",{className:"inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-amber-500/10 text-amber-400 border border-amber-500/20",children:[e.jsx(g,{className:"w-3.5 h-3.5"})," Module 003_004 • Topic 7"]}),e.jsx("h1",{className:"text-3xl sm:text-4xl font-black text-white tracking-tight",children:"Downloadable Documents & Revision Center"}),e.jsx("p",{className:"text-slate-400 text-base sm:text-lg max-w-3xl leading-relaxed",children:"Access downloadable summary sheets, top 10 CBSE examination tips, and an interactive 10-point checklist for Module 003_004."})]}),e.jsx(R,{}),e.jsx(f,{title:"Frequently Asked Questions • Module 003_004 Downloads & Checklist",questions:T}),e.jsx(w,{content:m,title:"CBSE Class XII IT 802 – Module 003_004 Revision Document",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Topic 7 Note (.txt)",downloadFileName:"003_004_topic7_note.txt"}),e.jsx(b,{note:"Make sure to download the Master Revision Cheatsheet before your exam! Re-read the dry run tables and output tracing rules for loops with decrements and jump statements. — Sukanta Hui"})]})});export{M as default};
