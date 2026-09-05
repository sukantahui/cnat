import{j as e}from"./vendor-react-core-Doz9nIC6.js";import{J as n}from"./JavaFileLoader-BfBG3xz_.js";import{F as t}from"./FAQTemplate-BHhlgA96.js";import{P as a}from"./PlainTextPrint-C08xhKA4.js";import{T as r}from"./TeacherSukantaHui-DerPxfxp.js";import"./JavaCodeBlock-BwsLxS3r.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-CH1iX9C8.js";const o=`/**\r
 * Java Core Tutorial - Module 011_004: Transaction Management, ACID, Isolation Levels & Savepoints\r
 * Topic 16: The 4 Standard Isolation Levels - ANSI SQL & JDBC Matrix\r
 * Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
 */\r
\r
package com.coderaccotax.javatutorial.jdbc;\r
\r
import java.sql.Connection;\r
\r
public class IsolationLevelsMatrixOverviewDemo {\r
\r
    public static void main(String[] args) {\r
        System.out.println("==========================================================================");\r
        System.out.println(" TOPIC 16: THE 4 ISOLATION LEVELS IN JDBC - BARRACKPORE ACADEMY");\r
        System.out.println("==========================================================================\\n");\r
\r
        System.out.println(">>> THE COMPLETE JDBC TRANSACTION ISOLATION MATRIX:");\r
        System.out.println("  -----------------------------------------------------------------------------------------");\r
        System.out.println("  ISOLATION CONSTANT               VALUE  DIRTY READ  NON-REPEATABLE  PHANTOM  THROUGHPUT");\r
        System.out.println("  -----------------------------------------------------------------------------------------");\r
        System.out.println("  TRANSACTION_READ_UNCOMMITTED     1      YES         YES             YES      MAXIMUM");\r
        System.out.println("  TRANSACTION_READ_COMMITTED       2      NO          YES             YES      HIGH (Default: Postgres/Oracle)");\r
        System.out.println("  TRANSACTION_REPEATABLE_READ      4      NO          NO              YES*     MEDIUM (Default: MySQL)");\r
        System.out.println("  TRANSACTION_SERIALIZABLE         8      NO          NO              NO       LOWEST");\r
        System.out.println("  -----------------------------------------------------------------------------------------");\r
        System.out.println("  *Note: MySQL InnoDB also prevents Phantoms in REPEATABLE_READ via Next-Key locks!\\n");\r
\r
        System.out.println("==========================================================================");\r
    }\r
}\r
`,s=`================================================================================\r
JAVA CORE TUTORIAL - QUICK REVISION GUIDE\r
Module 011_004: Transaction Management, ACID, Isolation Levels & Savepoints\r
Topic 16: Isolation Levels Matrix Overview\r
Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
================================================================================\r
\r
1. JDBC CONSTANTS (in 'java.sql.Connection'):\r
   - 'Connection.TRANSACTION_READ_UNCOMMITTED' (1)\r
   - 'Connection.TRANSACTION_READ_COMMITTED'   (2)\r
   - 'Connection.TRANSACTION_REPEATABLE_READ'  (4)\r
   - 'Connection.TRANSACTION_SERIALIZABLE'     (8)\r
   - 'Connection.TRANSACTION_NONE'             (0 - No transaction support)\r
\r
2. CONFIGURATION METHOD:\r
   - 'conn.setTransactionIsolation(Connection.TRANSACTION_READ_COMMITTED);'\r
\r
================================================================================\r
Classroom Practice: Barrackpore Academy | Mentor: Sukanta Hui\r
================================================================================\r
`,i=[{question:"What integer constant represents TRANSACTION_READ_COMMITTED in java.sql.Connection?",shortAnswer:"2 (Connection.TRANSACTION_READ_COMMITTED == 2).",explanation:"Standard JDBC isolation constant value.",hint:"2",level:"Beginner",codeExample:"int level = Connection.TRANSACTION_READ_COMMITTED; // 2"},{question:"What is the default isolation level in PostgreSQL and Oracle vs MySQL InnoDB?",shortAnswer:"PostgreSQL and Oracle default to TRANSACTION_READ_COMMITTED. MySQL InnoDB defaults to TRANSACTION_REPEATABLE_READ.",explanation:"Essential knowledge when migrating enterprise database schemas.",hint:"Postgres/Oracle = READ COMMITTED; MySQL InnoDB = REPEATABLE READ.",level:"Intermediate",codeExample:"PostgreSQL: READ COMMITTED | MySQL: REPEATABLE READ"}];function N(){return e.jsxs("div",{className:"space-y-12 px-4 md:px-8 py-8 text-slate-200 bg-slate-900 min-h-screen",children:[e.jsxs("header",{className:"space-y-4 border-b border-slate-800 pb-6",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"px-3 py-1 bg-sky-500/10 text-sky-400 border border-sky-500/20 text-xs font-semibold rounded-full uppercase tracking-wider",children:"Module 011_004 · Topic 16"}),e.jsx("span",{className:"px-3 py-1 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-xs font-semibold rounded-full",children:"Transactions & ACID"})]}),e.jsxs("h1",{className:"text-xl sm:text-2xl md:text-3xl font-bold text-white tracking-tight",children:["The 4 Standard Isolation Levels: ",e.jsx("code",{className:"text-emerald-400 font-mono",children:"ANSI SQL & JDBC Matrix"})]}),e.jsx("p",{className:"text-base md:text-lg text-slate-400 leading-relaxed max-w-4xl",children:"Choosing the right balance: comparing the 4 isolation levels across Dirty Read, Non-Repeatable Read, Phantom Read, and concurrent performance."})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsxs("h2",{className:"text-2xl font-bold text-emerald-400 flex items-center gap-2",children:[e.jsx("span",{children:"💻"})," Hands-On Java Demo Code"]}),e.jsx(n,{fileModule:o,title:"IsolationLevelsMatrixOverviewDemo.java",highlightLines:[18,25,34,43]})]}),e.jsx("section",{className:"space-y-4",children:e.jsx(t,{title:"Transaction & ACID FAQs",questions:i})}),e.jsx("section",{className:"space-y-4",children:e.jsx(a,{content:s,title:"Module 011_004 Topic 16: 4 Standard Isolation Levels Matrix",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Printable Note",downloadFileName:"011_004_topic16_isolation_levels_matrix_overview_note.txt"})}),e.jsx(r,{note:"The 4 isolation levels are like security checkpoints: Level 1 (READ_UNCOMMITTED) has no guards; Level 2 (READ_COMMITTED) checks tickets at entry; Level 3 (REPEATABLE_READ) reserves your private seat; and Level 4 (SERIALIZABLE) locks the entire stadium for one person at a time! — Sukanta Hui"})]})}export{N as default};
