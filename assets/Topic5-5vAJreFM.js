import{j as e}from"./vendor-react-core-Doz9nIC6.js";import{J as t}from"./JavaFileLoader-BfBG3xz_.js";import{F as a}from"./FAQTemplate-BHhlgA96.js";import{P as n}from"./PlainTextPrint-C08xhKA4.js";import{T as r}from"./TeacherSukantaHui-RpFLNJ5A.js";import"./JavaCodeBlock-BwsLxS3r.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-wprqVFW_.js";const s=`/**\r
 * Java Core Tutorial - Module 011_004: Transaction Management, ACID, Isolation Levels & Savepoints\r
 * Topic 5: Durability - Write-Ahead Logs & Crash Recovery\r
 * Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
 */\r
\r
package com.coderaccotax.javatutorial.jdbc;\r
\r
public class DurabilityWriteAheadLogsDemo {\r
\r
    public static void main(String[] args) {\r
        System.out.println("==========================================================================");\r
        System.out.println(" TOPIC 5: DURABILITY & WRITE-AHEAD LOGGING (WAL) - BARRACKPORE");\r
        System.out.println("==========================================================================\\n");\r
\r
        System.out.println(">>> THE WRITE-AHEAD LOGGING (WAL / REDO LOG) MECHANISM:");\r
        System.out.println("  1. User calls conn.commit().");\r
        System.out.println("  2. DB engine writes transaction changes sequentially into the WAL / Redo Log on disk.");\r
        System.out.println("  3. DB engine calls OS 'fsync()' to flush disk cache to non-volatile SSD/HDD.");\r
        System.out.println("  4. DB returns COMMIT SUCCESS to Java client.\\n");\r
\r
        System.out.println(">>> CRASH RECOVERY (ARIES Protocol):");\r
        System.out.println("  - Scenario: Server loses power immediately after step 4.");\r
        System.out.println("  - Upon Reboot:");\r
        System.out.println("    * Analysis Pass : Scans WAL to identify active transactions at time of crash.");\r
        System.out.println("    * Redo Pass     : Replays all committed WAL records forward into table data pages.");\r
        System.out.println("    * Undo Pass     : Rolls back any uncommitted transactions that were in-flight!");\r
        System.out.println("  - RESULT          : 100% Zero Committed Data Loss! 🛡️");\r
\r
        System.out.println("\\n==========================================================================");\r
    }\r
}\r
`,o=`================================================================================\r
JAVA CORE TUTORIAL - QUICK REVISION GUIDE\r
Module 011_004: Transaction Management, ACID, Isolation Levels & Savepoints\r
Topic 5: Durability: Write-Ahead Logs\r
Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
================================================================================\r
\r
1. WHAT IS DURABILITY:\r
   - Guarantees that once a transaction has committed, it will remain committed even in the event\r
     of a system crash, power outage, or OS failure.\r
\r
2. KEY MECHANISMS:\r
   - Write-Ahead Logging (WAL in PostgreSQL / Redo Log in MySQL InnoDB / Oracle).\r
   - Checkpointing (flushing dirty RAM pages to disk periodically).\r
   - RAID non-volatile disk storage & replication.\r
\r
================================================================================\r
Classroom Practice: Barrackpore Academy | Mentor: Sukanta Hui\r
================================================================================\r
`,i=[{question:"What is Write-Ahead Logging (WAL) and how does it ensure Durability in database systems?",shortAnswer:"WAL is an append-only logging technique where changes are flushed sequentially to a persistent log file on disk before the main data pages in memory are updated. If the server crashes, the database replays the WAL on startup to restore all committed transactions.",explanation:"Fast sequential disk I/O provides crash recovery guarantees.",hint:"Changes are written sequentially to a log file on disk before committing.",level:"Intermediate",codeExample:"WAL / Redo Log: Append-only disk journal guaranteeing durability."},{question:"What is the purpose of the ARIES crash recovery algorithm during database reboot?",shortAnswer:"It performs three passes: 1. Analysis pass (identifies dirty pages and in-flight transactions), 2. Redo pass (replays committed changes from WAL), and 3. Undo pass (rolls back uncommitted transactions from the time of crash).",explanation:"Standard database recovery algorithm.",hint:"Analysis, Redo (committed work), and Undo (uncommitted work).",level:"Advanced",codeExample:"ARIES Recovery: Analysis → Redo → Undo."}];function y(){return e.jsxs("div",{className:"space-y-12 px-4 md:px-8 py-8 text-slate-200 bg-slate-900 min-h-screen",children:[e.jsxs("header",{className:"space-y-4 border-b border-slate-800 pb-6",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"px-3 py-1 bg-sky-500/10 text-sky-400 border border-sky-500/20 text-xs font-semibold rounded-full uppercase tracking-wider",children:"Module 011_004 · Topic 5"}),e.jsx("span",{className:"px-3 py-1 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-xs font-semibold rounded-full",children:"Transactions & ACID"})]}),e.jsxs("h1",{className:"text-xl sm:text-2xl md:text-3xl font-bold text-white tracking-tight",children:["Durability: ",e.jsx("code",{className:"text-emerald-400 font-mono",children:"Write-Ahead Logs & Crash Recovery"})]}),e.jsx("p",{className:"text-base md:text-lg text-slate-400 leading-relaxed max-w-4xl",children:"The permanent promise: how database engines use Write-Ahead Logging (WAL) and disk fsync() to guarantee committed data survives total power failures."})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsxs("h2",{className:"text-2xl font-bold text-emerald-400 flex items-center gap-2",children:[e.jsx("span",{children:"💻"})," Hands-On Java Demo Code"]}),e.jsx(t,{fileModule:s,title:"DurabilityWriteAheadLogsDemo.java",highlightLines:[18,25,34,43]})]}),e.jsx("section",{className:"space-y-4",children:e.jsx(a,{title:"Transaction & ACID FAQs",questions:i})}),e.jsx("section",{className:"space-y-4",children:e.jsx(n,{content:o,title:"Module 011_004 Topic 5: Durability: Write-Ahead Logs",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Printable Note",downloadFileName:"011_004_topic5_durability_write_ahead_logs_note.txt"})}),e.jsx(r,{note:"Durability means that once conn.commit() returns, your data is written to non-volatile disk! Even if lightning strikes the server room and kills the power 1 millisecond later, upon reboot the database replays the Write-Ahead Log (WAL) and restores the data! — Sukanta Hui"})]})}export{y as default};
