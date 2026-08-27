import{j as e}from"./vendor-react-core-Doz9nIC6.js";import{J as t}from"./JavaFileLoader-BfBG3xz_.js";import{F as n}from"./FAQTemplate-CkSqDH4B.js";import{P as a}from"./PlainTextPrint-C08xhKA4.js";import{T as r}from"./TeacherSukantaHui-CC0AKmkm.js";import"./JavaCodeBlock-BwsLxS3r.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-BtJHuk7w.js";const s=`/**\r
 * Java Core Tutorial - Module 011_004: Transaction Management, ACID, Isolation Levels & Savepoints\r
 * Topic 18: 2. TRANSACTION_READ_COMMITTED - The Industry Standard\r
 * Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
 */\r
\r
package com.coderaccotax.javatutorial.jdbc;\r
\r
import java.sql.Connection;\r
import java.sql.SQLException;\r
\r
public class TransactionReadCommittedDemo {\r
\r
    public static void configureReadCommitted(Connection conn) throws SQLException {\r
        conn.setTransactionIsolation(Connection.TRANSACTION_READ_COMMITTED);\r
        System.out.println("   [ISOLATION]: Configured to TRANSACTION_READ_COMMITTED (2).");\r
        System.out.println("   - 100% Protected against Dirty Reads.");\r
        System.out.println("   - Each SQL statement sees a fresh snapshot of committed data.");\r
    }\r
\r
    public static void main(String[] args) {\r
        System.out.println("==========================================================================");\r
        System.out.println(" TOPIC 18: TRANSACTION_READ_COMMITTED - BARRACKPORE ACADEMY");\r
        System.out.println("==========================================================================\\n");\r
\r
        System.out.println(">>> HOW READ COMMITTED OPERATES UNDER MVCC (PostgreSQL / Oracle):");\r
        System.out.println("  1. STATEMENT SNAPSHOTS:");\r
        System.out.println("     - Every single SELECT query creates a NEW snapshot of all data committed up to that instant.");\r
        System.out.println("  2. DIRTY READ IMMUNITY:");\r
        System.out.println("     - If Tx 1 modifies a row without committing, Tx 2 sees the PREVIOUS committed version.");\r
        System.out.println("  3. NON-REPEATABLE READS POSSIBLE:");\r
        System.out.println("     - If Tx 1 commits an update between Tx 2's first and second SELECT, Tx 2 will see the new value.");\r
\r
        System.out.println("\\n==========================================================================");\r
    }\r
}\r
`,o=`================================================================================\r
JAVA CORE TUTORIAL - QUICK REVISION GUIDE\r
Module 011_004: Transaction Management, ACID, Isolation Levels & Savepoints\r
Topic 18: TRANSACTION_READ_COMMITTED\r
Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
================================================================================\r
\r
1. CORE GUARANTEE:\r
   - A query only reads data that was committed before the query began.\r
   - Prevents Dirty Reads completely.\r
\r
2. STATEMENT SNAPSHOT VS TRANSACTION SNAPSHOT:\r
   - In READ COMMITTED, each SELECT statement within the transaction takes a fresh snapshot of data!\r
\r
================================================================================\r
Classroom Practice: Barrackpore Academy | Mentor: Sukanta Hui\r
================================================================================\r
`,i=[{question:"Why is TRANSACTION_READ_COMMITTED the default isolation level in enterprise databases like PostgreSQL and Oracle?",shortAnswer:"Because it provides the ideal balance between high concurrency throughput and data safety: it completely eliminates dangerous dirty reads while avoiding the heavy locking or serialization aborts of higher isolation levels.",explanation:"The default benchmark for transactional web architectures.",hint:"Optimal balance of high concurrency throughput and eliminating dirty reads.",level:"Intermediate",codeExample:"Default in PostgreSQL, Oracle, and MS SQL Server."},{question:"Under TRANSACTION_READ_COMMITTED, how does MVCC determine which row version a query should read?",shortAnswer:"The query reads the newest committed row version whose committing transaction ID is less than or equal to the current statement snapshot's transaction timestamp.",explanation:"Uses transaction visibility maps without acquiring read locks.",hint:"Reads the newest row version committed before the current statement began.",level:"Advanced",codeExample:"MVCC statement snapshot reads latest committed tuple."}];function S(){return e.jsxs("div",{className:"space-y-12 px-4 md:px-8 py-8 text-slate-200 bg-slate-900 min-h-screen",children:[e.jsxs("header",{className:"space-y-4 border-b border-slate-800 pb-6",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"px-3 py-1 bg-sky-500/10 text-sky-400 border border-sky-500/20 text-xs font-semibold rounded-full uppercase tracking-wider",children:"Module 011_004 · Topic 18"}),e.jsx("span",{className:"px-3 py-1 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-xs font-semibold rounded-full",children:"Transactions & ACID"})]}),e.jsxs("h1",{className:"text-3xl md:text-4xl font-extrabold text-white tracking-tight",children:["2. TRANSACTION_READ_COMMITTED: ",e.jsx("code",{className:"text-emerald-400 font-mono",children:"The Industry Standard"})]}),e.jsx("p",{className:"text-base md:text-lg text-slate-400 leading-relaxed max-w-4xl",children:"Preventing dirty reads: the enterprise default in PostgreSQL and Oracle that ensures transactions only observe committed data snapshots."})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsxs("h2",{className:"text-2xl font-bold text-emerald-400 flex items-center gap-2",children:[e.jsx("span",{children:"💻"})," Hands-On Java Demo Code"]}),e.jsx(t,{fileModule:s,title:"TransactionReadCommittedDemo.java",highlightLines:[18,25,34,43]})]}),e.jsx("section",{className:"space-y-4",children:e.jsx(n,{title:"Transaction & ACID FAQs",questions:i})}),e.jsx("section",{className:"space-y-4",children:e.jsx(a,{content:o,title:"Module 011_004 Topic 18: TRANSACTION_READ_COMMITTED",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Printable Note",downloadFileName:"011_004_topic18_transaction_read_committed_note.txt"})}),e.jsx(r,{note:"TRANSACTION_READ_COMMITTED is the gold standard for web applications! It guarantees you will never read uncommitted dirty garbage, while keeping concurrency very high! It is the default in PostgreSQL, Oracle, and Microsoft SQL Server! — Sukanta Hui"})]})}export{S as default};
