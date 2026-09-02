import{j as e}from"./vendor-react-core-Doz9nIC6.js";import{J as n}from"./JavaFileLoader-BfBG3xz_.js";import{F as t}from"./FAQTemplate-BHhlgA96.js";import{P as r}from"./PlainTextPrint-C08xhKA4.js";import{T as o}from"./TeacherSukantaHui-RpFLNJ5A.js";import"./JavaCodeBlock-BwsLxS3r.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-wprqVFW_.js";const a=`/**\r
 * Java Core Tutorial - Module 011_004: Transaction Management, ACID, Isolation Levels & Savepoints\r
 * Topic 4: Isolation - Concurrent Transaction Independence\r
 * Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
 */\r
\r
package com.coderaccotax.javatutorial.jdbc;\r
\r
public class IsolationConcurrencyControlDemo {\r
\r
    public static void main(String[] args) {\r
        System.out.println("==========================================================================");\r
        System.out.println(" TOPIC 4: ISOLATION & CONCURRENCY CONTROL - BARRACKPORE ACADEMY");\r
        System.out.println("==========================================================================\\n");\r
\r
        System.out.println(">>> 1. WHAT IS ISOLATION:");\r
        System.out.println("  - Ensures that concurrent transactions execute independently without observing");\r
        System.out.println("    intermediate uncommitted state changes of other transactions.\\n");\r
\r
        System.out.println(">>> 2. HOW MODERN DATABASES IMPLEMENT ISOLATION:");\r
        System.out.println("  A. TWO-PHASE LOCKING (2PL):");\r
        System.out.println("     - Shared Locks (S-Locks) for reading; Exclusive Locks (X-Locks) for writing.");\r
        System.out.println("     - Readers block writers; writers block readers.\\n");\r
\r
        System.out.println("  B. MULTI-VERSION CONCURRENCY CONTROL (MVCC - PostgreSQL / MySQL InnoDB / Oracle):");\r
        System.out.println("     - Every row has creation and deletion transaction IDs (xmin / xmax).");\r
        System.out.println("     - READERS NEVER BLOCK WRITERS, AND WRITERS NEVER BLOCK READERS!");\r
        System.out.println("     - Readers see a consistent snapshot of the data at the time the query began!");\r
\r
        System.out.println("\\n==========================================================================");\r
    }\r
}\r
`,s=`================================================================================\r
JAVA CORE TUTORIAL - QUICK REVISION GUIDE\r
Module 011_004: Transaction Management, ACID, Isolation Levels & Savepoints\r
Topic 4: Isolation: Concurrency Control\r
Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
================================================================================\r
\r
1. WHAT IS ISOLATION:\r
   - Controls how changes made by one transaction are visible to other concurrent transactions.\r
   - Configured in JDBC via 'conn.setTransactionIsolation(level)'.\r
\r
2. MVCC (Multi-Version Concurrency Control):\r
   - The modern standard in PostgreSQL, MySQL InnoDB, and Oracle.\r
   - Provides snapshot isolation without heavy table or row read-locking.\r
\r
================================================================================\r
Classroom Practice: Barrackpore Academy | Mentor: Sukanta Hui\r
================================================================================\r
`,i=[{question:"What is MVCC (Multi-Version Concurrency Control) and why is it used in modern relational databases?",shortAnswer:"MVCC is a concurrency control technique where the database engine maintains multiple immutable versions of row data, allowing readers to query a consistent snapshot of past committed data without locking writers or being blocked by active updates.",explanation:"Enables massive concurrent read/write throughput without deadlocks.",hint:"Maintains multiple versions of data so readers never block writers.",level:"Intermediate",codeExample:"MVCC: Readers see snapshot without acquiring exclusive row locks."},{question:"What trade-off exists between higher transaction isolation levels and database performance?",shortAnswer:"Higher isolation levels (e.g. SERIALIZABLE) eliminate concurrency anomalies but increase locking, abort rates, and serialization conflicts, whereas lower isolation levels (e.g. READ COMMITTED) provide much higher concurrent throughput with minor concurrency anomalies.",explanation:"Isolation strictness is balanced against throughput requirements.",hint:"Higher isolation increases correctness but reduces concurrency throughput.",level:"Intermediate",codeExample:"Higher Isolation = Lower Concurrency & Higher Safety."}];function C(){return e.jsxs("div",{className:"space-y-12 px-4 md:px-8 py-8 text-slate-200 bg-slate-900 min-h-screen",children:[e.jsxs("header",{className:"space-y-4 border-b border-slate-800 pb-6",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"px-3 py-1 bg-sky-500/10 text-sky-400 border border-sky-500/20 text-xs font-semibold rounded-full uppercase tracking-wider",children:"Module 011_004 · Topic 4"}),e.jsx("span",{className:"px-3 py-1 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-xs font-semibold rounded-full",children:"Transactions & ACID"})]}),e.jsxs("h1",{className:"text-xl sm:text-2xl md:text-3xl font-bold text-white tracking-tight",children:["Isolation: ",e.jsx("code",{className:"text-emerald-400 font-mono",children:"Concurrent Transaction Independence"})]}),e.jsx("p",{className:"text-base md:text-lg text-slate-400 leading-relaxed max-w-4xl",children:"Preventing interference: how database engines use locks and Multi-Version Concurrency Control (MVCC) so concurrent transactions execute without cross-contamination."})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsxs("h2",{className:"text-2xl font-bold text-emerald-400 flex items-center gap-2",children:[e.jsx("span",{children:"💻"})," Hands-On Java Demo Code"]}),e.jsx(n,{fileModule:a,title:"IsolationConcurrencyControlDemo.java",highlightLines:[18,25,34,43]})]}),e.jsx("section",{className:"space-y-4",children:e.jsx(t,{title:"Transaction & ACID FAQs",questions:i})}),e.jsx("section",{className:"space-y-4",children:e.jsx(r,{content:s,title:"Module 011_004 Topic 4: Isolation: Concurrency Control",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Printable Note",downloadFileName:"011_004_topic4_isolation_concurrency_control_note.txt"})}),e.jsx(o,{note:"Isolation ensures that when Swadeep and Debangshu both buy course tickets simultaneously, their transactions do not step on each other's toes! Modern databases use MVCC (Multi-Version Concurrency Control) so readers never block writers! — Sukanta Hui"})]})}export{C as default};
