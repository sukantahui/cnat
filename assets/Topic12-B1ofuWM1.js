import{j as e}from"./vendor-react-core-Doz9nIC6.js";import{J as n}from"./JavaFileLoader-BfBG3xz_.js";import{F as a}from"./FAQTemplate-CkSqDH4B.js";import{P as t}from"./PlainTextPrint-C08xhKA4.js";import{T as r}from"./TeacherSukantaHui-CC0AKmkm.js";import"./JavaCodeBlock-BwsLxS3r.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-BtJHuk7w.js";const o=`/**\r
 * Java Core Tutorial - Module 011_004: Transaction Management, ACID, Isolation Levels & Savepoints\r
 * Topic 12: Concurrency Phenomena - Multi-User Database Anomalies\r
 * Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
 */\r
\r
package com.coderaccotax.javatutorial.jdbc;\r
\r
public class ConcurrencyPhenomenaOverviewDemo {\r
\r
    public static void main(String[] args) {\r
        System.out.println("==========================================================================");\r
        System.out.println(" TOPIC 12: CONCURRENCY READ PHENOMENA - BARRACKPORE ACADEMY");\r
        System.out.println("==========================================================================\\n");\r
\r
        System.out.println(">>> THE 3 ANSI SQL READ ANOMALIES:");\r
        System.out.println("  --------------------------------------------------------------------------------------------------");\r
        System.out.println("  ANOMALY               SCENARIO DESCRIPTION                               PREVENTED BY");\r
        System.out.println("  --------------------------------------------------------------------------------------------------");\r
        System.out.println("  1. DIRTY READ         Tx A reads uncommitted modifications of Tx B.      READ COMMITTED +");\r
        System.out.println("                        Tx B then rolls back -> Tx A read ghost data!");\r
        System.out.println("  2. NON-REPEATABLE     Tx A reads row X. Tx B updates row X & commits.    REPEATABLE READ +");\r
        System.out.println("     READ               Tx A re-reads row X and sees DIFFERENT values!");\r
        System.out.println("  3. PHANTOM READ       Tx A queries WHERE range (e.g. 5 rows).            SERIALIZABLE");\r
        System.out.println("                        Tx B inserts a new matching row & commits.");\r
        System.out.println("                        Tx A re-queries same range -> Sees 6 rows! (Phantom)");\r
        System.out.println("  --------------------------------------------------------------------------------------------------");\r
\r
        System.out.println("\\n==========================================================================");\r
    }\r
}\r
`,s=`================================================================================\r
JAVA CORE TUTORIAL - QUICK REVISION GUIDE\r
Module 011_004: Transaction Management, ACID, Isolation Levels & Savepoints\r
Topic 12: Concurrency Phenomena Overview\r
Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
================================================================================\r
\r
1. ANSI SQL ISOLATION MATRIX:\r
   - READ UNCOMMITTED : Suffers Dirty Read, Non-Repeatable Read, Phantom Read.\r
   - READ COMMITTED   : Prevents Dirty Read; suffers Non-Repeatable Read, Phantom Read.\r
   - REPEATABLE READ  : Prevents Dirty Read, Non-Repeatable Read; may suffer Phantom Read.\r
   - SERIALIZABLE     : Prevents ALL three anomalies (100% strict isolation).\r
\r
================================================================================\r
Classroom Practice: Barrackpore Academy | Mentor: Sukanta Hui\r
================================================================================\r
`,i=[{question:"What are the three standard ANSI SQL read anomalies that can occur in concurrent database transactions?",shortAnswer:"1. Dirty Read, 2. Non-Repeatable Read (Fuzzy Read), and 3. Phantom Read.",explanation:"Standard benchmark classifications for transaction isolation.",hint:"Dirty Read, Non-Repeatable Read, Phantom Read.",level:"Beginner",codeExample:"3 Anomalies: Dirty Read, Non-Repeatable Read, Phantom Read."},{question:"Which isolation level is the minimum required to prevent Dirty Reads?",shortAnswer:"TRANSACTION_READ_COMMITTED (Connection.TRANSACTION_READ_COMMITTED).",explanation:"Ensures transactions only read committed data.",hint:"READ_COMMITTED.",level:"Beginner",codeExample:"conn.setTransactionIsolation(Connection.TRANSACTION_READ_COMMITTED);"}];function x(){return e.jsxs("div",{className:"space-y-12 px-4 md:px-8 py-8 text-slate-200 bg-slate-900 min-h-screen",children:[e.jsxs("header",{className:"space-y-4 border-b border-slate-800 pb-6",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"px-3 py-1 bg-sky-500/10 text-sky-400 border border-sky-500/20 text-xs font-semibold rounded-full uppercase tracking-wider",children:"Module 011_004 · Topic 12"}),e.jsx("span",{className:"px-3 py-1 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-xs font-semibold rounded-full",children:"Transactions & ACID"})]}),e.jsxs("h1",{className:"text-3xl md:text-4xl font-extrabold text-white tracking-tight",children:["Concurrency Phenomena: ",e.jsx("code",{className:"text-emerald-400 font-mono",children:"Multi-User Database Anomalies"})]}),e.jsx("p",{className:"text-base md:text-lg text-slate-400 leading-relaxed max-w-4xl",children:"When concurrent transactions collide: analyzing the 3 classic ANSI SQL concurrency read phenomena — Dirty Read, Non-Repeatable Read, and Phantom Read."})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsxs("h2",{className:"text-2xl font-bold text-emerald-400 flex items-center gap-2",children:[e.jsx("span",{children:"💻"})," Hands-On Java Demo Code"]}),e.jsx(n,{fileModule:o,title:"ConcurrencyPhenomenaOverviewDemo.java",highlightLines:[18,25,34,43]})]}),e.jsx("section",{className:"space-y-4",children:e.jsx(a,{title:"Transaction & ACID FAQs",questions:i})}),e.jsx("section",{className:"space-y-4",children:e.jsx(t,{content:s,title:"Module 011_004 Topic 12: Concurrency Phenomena Overview",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Printable Note",downloadFileName:"011_004_topic12_concurrency_phenomena_overview_note.txt"})}),e.jsx(r,{note:"When multiple users hit the database at the exact same millisecond, 3 strange bugs can happen: Dirty Reads, Non-Repeatable Reads, and Phantom Reads! Isolation levels exist specifically to prevent these 3 anomalies! — Sukanta Hui"})]})}export{x as default};
