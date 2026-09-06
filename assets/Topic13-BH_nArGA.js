import{j as e}from"./vendor-react-core-Doz9nIC6.js";import{J as t}from"./JavaFileLoader-BfBG3xz_.js";import{F as a}from"./FAQTemplate-BHhlgA96.js";import{P as n}from"./PlainTextPrint-C08xhKA4.js";import{T as r}from"./TeacherSukantaHui-DDN87fI5.js";import"./JavaCodeBlock-BwsLxS3r.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-DEsnU7fn.js";const s=`/**\r
 * Java Core Tutorial - Module 011_004: Transaction Management, ACID, Isolation Levels & Savepoints\r
 * Topic 13: 1. Dirty Read - Reading Uncommitted Modifications\r
 * Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
 */\r
\r
package com.coderaccotax.javatutorial.jdbc;\r
\r
public class DirtyReadAnomalyDemo {\r
\r
    public static void main(String[] args) {\r
        System.out.println("==========================================================================");\r
        System.out.println(" TOPIC 13: DIRTY READ ANOMALY STEP-BY-STEP - BARRACKPORE");\r
        System.out.println("==========================================================================\\n");\r
\r
        System.out.println(">>> THE DIRTY READ TIMELINE COLLISION:");\r
        System.out.println("  Time T1 (Tx 1): UPDATE students SET scholarship = 50000.0 WHERE id = 101; (UNCOMMITTED!)");\r
        System.out.println("  Time T2 (Tx 2): SELECT scholarship FROM students WHERE id = 101; -> Reads 50000.0! (DIRTY READ!)");\r
        System.out.println("  Time T3 (Tx 2): Approves student for gold credit card based on 50000.0 scholarship!");\r
        System.out.println("  Time T4 (Tx 1): ROLLBACK; (Tx 1 fails; scholarship reverts to 0.0!)");\r
        System.out.println("  Time T5 (Result): Bank issued gold credit card for money that NEVER EXISTED! 🚨\\n");\r
\r
        System.out.println(">>> THE REMEDY:");\r
        System.out.println("  - Set isolation level to at least TRANSACTION_READ_COMMITTED.");\r
        System.out.println("  - Database engine will block Tx 2 or serve the last committed snapshot (0.0)!\\n");\r
\r
        System.out.println("==========================================================================");\r
    }\r
}\r
`,o=`================================================================================\r
JAVA CORE TUTORIAL - QUICK REVISION GUIDE\r
Module 011_004: Transaction Management, ACID, Isolation Levels & Savepoints\r
Topic 13: Dirty Read Anomaly\r
Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
================================================================================\r
\r
1. WHAT IS A DIRTY READ:\r
   - Occurs when Transaction A reads data modified by concurrent Transaction B that has NOT yet committed.\r
   - If Transaction B performs a ROLLBACK, the data read by Transaction A becomes invalid 'dirty' data.\r
\r
2. PREVENTION:\r
   - Enforced by 'Connection.TRANSACTION_READ_COMMITTED' and above.\r
\r
================================================================================\r
Classroom Practice: Barrackpore Academy | Mentor: Sukanta Hui\r
================================================================================\r
`,i=[{question:"Why is a Dirty Read dangerous in enterprise financial applications?",shortAnswer:"Because the application makes real-world decisions or executes payments based on uncommitted data changes that may be immediately rolled back by the originating transaction, resulting in data inconsistency and financial loss.",explanation:"Uncommitted changes can be aborted at any moment.",hint:"Application acts upon data that gets rolled back and never permanently existed.",level:"Beginner",codeExample:"Tx 1 uncommitted update → Tx 2 reads dirty data → Tx 1 rolls back."},{question:"Under which JDBC isolation level can Dirty Reads occur?",shortAnswer:"Connection.TRANSACTION_READ_UNCOMMITTED",explanation:"The lowest isolation level which allows uncommitted read access.",hint:"TRANSACTION_READ_UNCOMMITTED.",level:"Beginner",codeExample:"conn.setTransactionIsolation(Connection.TRANSACTION_READ_UNCOMMITTED);"}];function h(){return e.jsxs("div",{className:"space-y-12 px-4 md:px-8 py-8 text-slate-200 bg-slate-900 min-h-screen",children:[e.jsxs("header",{className:"space-y-4 border-b border-slate-800 pb-6",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"px-3 py-1 bg-sky-500/10 text-sky-400 border border-sky-500/20 text-xs font-semibold rounded-full uppercase tracking-wider",children:"Module 011_004 · Topic 13"}),e.jsx("span",{className:"px-3 py-1 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-xs font-semibold rounded-full",children:"Transactions & ACID"})]}),e.jsxs("h1",{className:"text-xl sm:text-2xl md:text-3xl font-bold text-white tracking-tight",children:["1. Dirty Read: ",e.jsx("code",{className:"text-emerald-400 font-mono",children:"Reading Uncommitted Modifications"})]}),e.jsx("p",{className:"text-base md:text-lg text-slate-400 leading-relaxed max-w-4xl",children:"Ghost data hazards: analyzing how Transaction A reads uncommitted edits from Transaction B that are subsequently rolled back."})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsxs("h2",{className:"text-2xl font-bold text-emerald-400 flex items-center gap-2",children:[e.jsx("span",{children:"💻"})," Hands-On Java Demo Code"]}),e.jsx(t,{fileModule:s,title:"DirtyReadAnomalyDemo.java",highlightLines:[18,25,34,43]})]}),e.jsx("section",{className:"space-y-4",children:e.jsx(a,{title:"Transaction & ACID FAQs",questions:i})}),e.jsx("section",{className:"space-y-4",children:e.jsx(n,{content:o,title:"Module 011_004 Topic 13: Dirty Read Anomaly",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Printable Note",downloadFileName:"011_004_topic13_dirty_read_anomaly_note.txt"})}),e.jsx(r,{note:"A Dirty Read is reading fake news! If Swadeep starts a transfer and updates his balance to ₹1,000,000, and Debangshu reads that balance BEFORE Swadeep's transaction rolls back, Debangshu just read a dirty hallucination! — Sukanta Hui"})]})}export{h as default};
