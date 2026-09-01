import{j as t}from"./vendor-react-core-Doz9nIC6.js";import{J as e}from"./JavaFileLoader-BfBG3xz_.js";import{F as n}from"./FAQTemplate-BHhlgA96.js";import{P as a}from"./PlainTextPrint-C08xhKA4.js";import{T as o}from"./TeacherSukantaHui-BaJcBHAy.js";import"./JavaCodeBlock-BwsLxS3r.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-8ao-0upJ.js";const i=`/**\r
 * Java Core Tutorial - Module 011_004: Transaction Management, ACID, Isolation Levels & Savepoints\r
 * Topic 7: Disabling Auto-Commit - conn.setAutoCommit(false)\r
 * Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
 */\r
\r
package com.coderaccotax.javatutorial.jdbc;\r
\r
import java.sql.Connection;\r
import java.sql.SQLException;\r
\r
public class DisablingAutoCommitDemo {\r
\r
    public static void demonstrateAutoCommitBehavior(Connection conn) throws SQLException {\r
        // Checking current mode:\r
        System.out.println("   [DEFAULT]: conn.getAutoCommit() = " + conn.getAutoCommit());\r
\r
        // Disabling auto-commit:\r
        conn.setAutoCommit(false);\r
        System.out.println("   [MANUAL TX]: conn.getAutoCommit() is now FALSE!");\r
        System.out.println("   - The database server has now implicitly started a transaction.");\r
        System.out.println("   - All subsequent INSERT, UPDATE, DELETE queries will be held uncommitted until conn.commit() is called.");\r
    }\r
\r
    public static void main(String[] args) {\r
        System.out.println("==========================================================================");\r
        System.out.println(" TOPIC 7: DISABLING AUTO-COMMIT - BARRACKPORE ACADEMY");\r
        System.out.println("==========================================================================\\n");\r
\r
        System.out.println(">>> AUTO-COMMIT MODES:");\r
        System.out.println("  1. autoCommit = true  (Default): Every statement commits on execution. Zero rollback capability!");\r
        System.out.println("  2. autoCommit = false (Manual): Statements accumulate into a transaction until commit() or rollback().");\r
\r
        System.out.println("\\n==========================================================================");\r
    }\r
}\r
`,s=`================================================================================\r
JAVA CORE TUTORIAL - QUICK REVISION GUIDE\r
Module 011_004: Transaction Management, ACID, Isolation Levels & Savepoints\r
Topic 7: Disabling Auto-Commit\r
Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
================================================================================\r
\r
1. WHAT 'setAutoCommit(false)' DOES:\r
   - Sends 'START TRANSACTION' or 'BEGIN' (or changes session variable) on the database engine.\r
   - Puts the connection in explicit manual transaction mode.\r
\r
2. PERFORMANCE BENEFIT:\r
   - Grouping 1,000 INSERT statements under one 'setAutoCommit(false)' reduces disk fsync operations\r
     from 1,000 times to ONCE at commit time, resulting in a 50x speedup!\r
\r
================================================================================\r
Classroom Practice: Barrackpore Academy | Mentor: Sukanta Hui\r
================================================================================\r
`,r=[{question:"Why does batch inserting 10,000 rows with auto-commit disabled run significantly faster than with auto-commit enabled?",shortAnswer:"Because with auto-commit enabled, the database engine must perform an expensive disk fsync and Write-Ahead Log commit for every single row (10,000 disk syncs), whereas with auto-commit disabled, the database flushes all 10,000 rows in a single batch fsync at commit time.",explanation:"Drastically minimizes disk I/O bottlenecks.",hint:"Flushes disk write-ahead logs once at commit rather than 10,000 individual times.",level:"Intermediate",codeExample:"conn.setAutoCommit(false); // 1 commit fsync instead of 10,000"},{question:"What happens if a query is executed when auto-commit is false and the program terminates normally without calling commit() or rollback()?",shortAnswer:"The transaction is implicitly aborted and rolled back by the database server when the connection socket is closed.",explanation:"Uncommitted transactions are never saved without an explicit commit.",hint:"The database rolls back uncommitted changes upon connection closure.",level:"Beginner",codeExample:"No commit() called → Changes discarded on disconnect."}];function b(){return t.jsxs("div",{className:"space-y-12 px-4 md:px-8 py-8 text-slate-200 bg-slate-900 min-h-screen",children:[t.jsxs("header",{className:"space-y-4 border-b border-slate-800 pb-6",children:[t.jsxs("div",{className:"flex items-center gap-3",children:[t.jsx("span",{className:"px-3 py-1 bg-sky-500/10 text-sky-400 border border-sky-500/20 text-xs font-semibold rounded-full uppercase tracking-wider",children:"Module 011_004 · Topic 7"}),t.jsx("span",{className:"px-3 py-1 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-xs font-semibold rounded-full",children:"Transactions & ACID"})]}),t.jsxs("h1",{className:"text-xl sm:text-2xl md:text-3xl font-bold text-white tracking-tight",children:["Disabling Auto-Commit: ",t.jsx("code",{className:"text-emerald-400 font-mono",children:"conn.setAutoCommit(false)"})]}),t.jsx("p",{className:"text-base md:text-lg text-slate-400 leading-relaxed max-w-4xl",children:"Controlling transaction boundaries: how disabling auto-commit signals the JDBC driver and database engine to group subsequent SQL statements into a single unit."})]}),t.jsxs("section",{className:"space-y-4",children:[t.jsxs("h2",{className:"text-2xl font-bold text-emerald-400 flex items-center gap-2",children:[t.jsx("span",{children:"💻"})," Hands-On Java Demo Code"]}),t.jsx(e,{fileModule:i,title:"DisablingAutoCommitDemo.java",highlightLines:[18,25,34,43]})]}),t.jsx("section",{className:"space-y-4",children:t.jsx(n,{title:"Transaction & ACID FAQs",questions:r})}),t.jsx("section",{className:"space-y-4",children:t.jsx(a,{content:s,title:"Module 011_004 Topic 7: Disabling Auto-Commit",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Printable Note",downloadFileName:"011_004_topic7_disabling_auto_commit_note.txt"})}),t.jsx(o,{note:"By default, JDBC operates in auto-commit mode where every single statement is its own micro-transaction! Calling setAutoCommit(false) is the ONLY way to execute multi-statement business transactions in pure Java! — Sukanta Hui"})]})}export{b as default};
