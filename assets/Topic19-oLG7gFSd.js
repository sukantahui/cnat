import{j as e}from"./vendor-react-core-Doz9nIC6.js";import{J as t}from"./JavaFileLoader-BfBG3xz_.js";import{F as n}from"./FAQTemplate-BHhlgA96.js";import{P as a}from"./PlainTextPrint-C08xhKA4.js";import{T as s}from"./TeacherSukantaHui-BaJcBHAy.js";import"./JavaCodeBlock-BwsLxS3r.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-8ao-0upJ.js";const r=`/**\r
 * Java Core Tutorial - Module 011_004: Transaction Management, ACID, Isolation Levels & Savepoints\r
 * Topic 19: 3. TRANSACTION_REPEATABLE_READ - Consistent Transaction Snapshots\r
 * Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
 */\r
\r
package com.coderaccotax.javatutorial.jdbc;\r
\r
import java.sql.Connection;\r
import java.sql.SQLException;\r
\r
public class TransactionRepeatableReadDemo {\r
\r
    public static void configureRepeatableRead(Connection conn) throws SQLException {\r
        conn.setTransactionIsolation(Connection.TRANSACTION_REPEATABLE_READ);\r
        System.out.println("   [ISOLATION]: Set to TRANSACTION_REPEATABLE_READ (4).");\r
        System.out.println("   - 100% Protected against Dirty Reads and Non-Repeatable Reads.");\r
        System.out.println("   - Snapshot is created on FIRST read and remains constant for the entire transaction lifetime!");\r
    }\r
\r
    public static void main(String[] args) {\r
        System.out.println("==========================================================================");\r
        System.out.println(" TOPIC 19: TRANSACTION_REPEATABLE_READ - BARRACKPORE ACADEMY");\r
        System.out.println("==========================================================================\\n");\r
\r
        System.out.println(">>> READ COMMITTED VS REPEATABLE READ UNDER MVCC:");\r
        System.out.println("  - READ COMMITTED   : Creates a new snapshot for EVERY INDIVIDUAL SQL STATEMENT.");\r
        System.out.println("  - REPEATABLE READ  : Creates a single snapshot at the START of the transaction;");\r
        System.out.println("                       re-uses that exact same snapshot for ALL statements in the transaction!\\n");\r
\r
        System.out.println(">>> MYSQL INNODB NEXT-KEY LOCKING:");\r
        System.out.println("  - In MySQL InnoDB, REPEATABLE_READ also locks index gaps (Next-Key Locks),");\r
        System.out.println("    preventing Phantom Reads as well!");\r
\r
        System.out.println("\\n==========================================================================");\r
    }\r
}\r
`,o=`================================================================================\r
JAVA CORE TUTORIAL - QUICK REVISION GUIDE\r
Module 011_004: Transaction Management, ACID, Isolation Levels & Savepoints\r
Topic 19: TRANSACTION_REPEATABLE_READ\r
Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
================================================================================\r
\r
1. TRANSACTION-LEVEL SNAPSHOT:\r
   - Re-reading the same row multiple times within the transaction is guaranteed to return identical data.\r
   - Prevents Dirty Reads and Non-Repeatable Reads.\r
\r
2. DEFAULT IN MYSQL INNODB:\r
   - MySQL uses 'REPEATABLE READ' as its default isolation level.\r
\r
================================================================================\r
Classroom Practice: Barrackpore Academy | Mentor: Sukanta Hui\r
================================================================================\r
`,i=[{question:"How does REPEATABLE_READ ensure that reading the same row multiple times returns identical data?",shortAnswer:"In MVCC databases, it creates a single consistent snapshot timestamp when the transaction performs its first read, reusing that exact snapshot for all subsequent queries so modifications committed by other transactions are hidden.",explanation:"Anchors visibility to the initial transaction read snapshot.",hint:"Reuses the transaction's initial snapshot timestamp for all queries.",level:"Intermediate",codeExample:"conn.setTransactionIsolation(Connection.TRANSACTION_REPEATABLE_READ);"},{question:"What is the default isolation level of the MySQL InnoDB storage engine?",shortAnswer:"TRANSACTION_REPEATABLE_READ",explanation:"MySQL defaults to Repeatable Read with Next-Key locking.",hint:"TRANSACTION_REPEATABLE_READ.",level:"Beginner",codeExample:"MySQL InnoDB Default: REPEATABLE READ"}];function T(){return e.jsxs("div",{className:"space-y-12 px-4 md:px-8 py-8 text-slate-200 bg-slate-900 min-h-screen",children:[e.jsxs("header",{className:"space-y-4 border-b border-slate-800 pb-6",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"px-3 py-1 bg-sky-500/10 text-sky-400 border border-sky-500/20 text-xs font-semibold rounded-full uppercase tracking-wider",children:"Module 011_004 · Topic 19"}),e.jsx("span",{className:"px-3 py-1 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-xs font-semibold rounded-full",children:"Transactions & ACID"})]}),e.jsxs("h1",{className:"text-xl sm:text-2xl md:text-3xl font-bold text-white tracking-tight",children:["3. TRANSACTION_REPEATABLE_READ: ",e.jsx("code",{className:"text-emerald-400 font-mono",children:"Consistent Transaction Snapshots"})]}),e.jsx("p",{className:"text-base md:text-lg text-slate-400 leading-relaxed max-w-4xl",children:"Immutable views: preventing dirty and non-repeatable reads by anchoring query snapshots to the start of the transaction (MySQL InnoDB default)."})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsxs("h2",{className:"text-2xl font-bold text-emerald-400 flex items-center gap-2",children:[e.jsx("span",{children:"💻"})," Hands-On Java Demo Code"]}),e.jsx(t,{fileModule:r,title:"TransactionRepeatableReadDemo.java",highlightLines:[18,25,34,43]})]}),e.jsx("section",{className:"space-y-4",children:e.jsx(n,{title:"Transaction & ACID FAQs",questions:i})}),e.jsx("section",{className:"space-y-4",children:e.jsx(a,{content:o,title:"Module 011_004 Topic 19: TRANSACTION_REPEATABLE_READ",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Printable Note",downloadFileName:"011_004_topic19_transaction_repeatable_read_note.txt"})}),e.jsx(s,{note:"With TRANSACTION_REPEATABLE_READ, your entire transaction freezes time! Even if 1,000 other users commit updates to the database while your transaction is running, every SELECT in your transaction will see the EXACT same snapshot! — Sukanta Hui"})]})}export{T as default};
