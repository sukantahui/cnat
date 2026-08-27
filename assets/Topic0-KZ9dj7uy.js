import{j as e}from"./vendor-react-core-Doz9nIC6.js";import{J as t}from"./JavaFileLoader-BfBG3xz_.js";import{F as a}from"./FAQTemplate-CkSqDH4B.js";import{P as n}from"./PlainTextPrint-C08xhKA4.js";import{T as r}from"./TeacherSukantaHui-CyIG3xbg.js";import"./JavaCodeBlock-BwsLxS3r.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-CIaKtAt4.js";const s=`/**\r
 * Java Core Tutorial - Module 011_004: Transaction Management, ACID, Isolation Levels & Savepoints\r
 * Topic 0: What is a Transaction - Logical Unit of Work (LUW)\r
 * Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
 */\r
\r
package com.coderaccotax.javatutorial.jdbc;\r
\r
public class WhatIsTransactionDemo {\r
\r
    public static void main(String[] args) {\r
        System.out.println("==========================================================================");\r
        System.out.println(" TOPIC 0: WHAT IS A DATABASE TRANSACTION - BARRACKPORE ACADEMY");\r
        System.out.println("==========================================================================\\n");\r
\r
        System.out.println(">>> 1. DEFINITION OF A TRANSACTION:");\r
        System.out.println("  - A Transaction is a single Logical Unit of Work (LUW) comprising one or more SQL statements.");\r
        System.out.println("  - Fundamental Rule: Either EVERY operation succeeds (COMMIT) or ALL operations are undone (ROLLBACK).\\n");\r
\r
        System.out.println(">>> 2. THE CLASSIC MONEY TRANSFER SCENARIO:");\r
        System.out.println("  - Step 1: UPDATE accounts SET balance = balance - 5000 WHERE account_id = 'SWADEEP_101'");\r
        System.out.println("  - Step 2: UPDATE accounts SET balance = balance + 5000 WHERE account_id = 'DEBANGSHU_202'");\r
        System.out.println("  - Step 3: INSERT INTO transfer_audit_log VALUES ('SWADEEP_101', 'DEBANGSHU_202', 5000, NOW())\\n");\r
\r
        System.out.println(">>> WITHOUT TRANSACTIONS (Disaster):");\r
        System.out.println("  - If network fails after Step 1, Swadeep loses ₹5000 but Debangshu never receives it!");\r
        System.out.println(">>> WITH TRANSACTIONS (Reliable):");\r
        System.out.println("  - If network fails after Step 1, the entire transaction ROLLS BACK, restoring Swadeep's balance!");\r
\r
        System.out.println("\\n==========================================================================");\r
    }\r
}\r
`,o=`================================================================================\r
JAVA CORE TUTORIAL - QUICK REVISION GUIDE\r
Module 011_004: Transaction Management, ACID, Isolation Levels & Savepoints\r
Topic 0: What is a Transaction\r
Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
================================================================================\r
\r
1. WHAT IS A TRANSACTION:\r
   - A sequence of one or more database operations treated as an indivisible atomic unit.\r
   - Boundaries: Begins when auto-commit is disabled; ends with 'commit()' or 'rollback()'.\r
\r
2. KEY OUTCOMES:\r
   - COMMIT   : Permanently persists all state changes to disk.\r
   - ROLLBACK : Discards all changes, reverting data back to pre-transaction state.\r
\r
================================================================================\r
Classroom Practice: Barrackpore Academy | Mentor: Sukanta Hui\r
================================================================================\r
`,i=[{question:"What is the core definition of a database transaction?",shortAnswer:"A logical unit of work comprising one or more database operations that must execute with all-or-nothing atomicity, ensuring that either all changes are permanently persisted (commit) or all changes are completely reverted (rollback).",explanation:"The foundation of enterprise data integrity.",hint:"An indivisible unit of work where all operations succeed or all are rolled back.",level:"Beginner",codeExample:"Transaction: Step 1 (Debit) + Step 2 (Credit) -> Commit together."},{question:"What happens to uncommitted database modifications if a Java application crashes during an active transaction?",shortAnswer:"The database server detects the severed TCP connection and automatically executes an internal ROLLBACK, discarding all uncommitted modifications and restoring data integrity.",explanation:"Preserves database consistency even across sudden client/server crashes.",hint:"The database automatically rolls back all uncommitted changes.",level:"Intermediate",codeExample:"Crash -> Automatic server rollback."}];function x(){return e.jsxs("div",{className:"space-y-12 px-4 md:px-8 py-8 text-slate-200 bg-slate-900 min-h-screen",children:[e.jsxs("header",{className:"space-y-4 border-b border-slate-800 pb-6",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"px-3 py-1 bg-sky-500/10 text-sky-400 border border-sky-500/20 text-xs font-semibold rounded-full uppercase tracking-wider",children:"Module 011_004 · Topic 0"}),e.jsx("span",{className:"px-3 py-1 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-xs font-semibold rounded-full",children:"Transactions & ACID"})]}),e.jsxs("h1",{className:"text-3xl md:text-4xl font-extrabold text-white tracking-tight",children:["What is a Transaction: ",e.jsx("code",{className:"text-emerald-400 font-mono",children:"Logical Unit of Work (LUW)"})]}),e.jsx("p",{className:"text-base md:text-lg text-slate-400 leading-relaxed max-w-4xl",children:"The all-or-nothing guarantee: defining database transactions as atomic sequences of operations that transition state from one consistent boundary to another."})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsxs("h2",{className:"text-2xl font-bold text-emerald-400 flex items-center gap-2",children:[e.jsx("span",{children:"💻"})," Hands-On Java Demo Code"]}),e.jsx(t,{fileModule:s,title:"WhatIsTransactionDemo.java",highlightLines:[18,25,34,43]})]}),e.jsx("section",{className:"space-y-4",children:e.jsx(a,{title:"Transaction & ACID FAQs",questions:i})}),e.jsx("section",{className:"space-y-4",children:e.jsx(n,{content:o,title:"Module 011_004 Topic 0: What is a Transaction",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Printable Note",downloadFileName:"011_004_topic0_what_is_transaction_note.txt"})}),e.jsx(r,{note:"Imagine transferring ₹5,000 from Swadeep to Debangshu. If your server crashes after deducting from Swadeep but before adding to Debangshu, ₹5,000 disappears into thin air! A Transaction guarantees that BOTH updates happen, or NEITHER happens! — Sukanta Hui"})]})}export{x as default};
