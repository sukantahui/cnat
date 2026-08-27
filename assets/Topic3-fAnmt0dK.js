import{j as e}from"./vendor-react-core-Doz9nIC6.js";import{J as t}from"./JavaFileLoader-BfBG3xz_.js";import{F as a}from"./FAQTemplate-CkSqDH4B.js";import{P as n}from"./PlainTextPrint-C08xhKA4.js";import{T as r}from"./TeacherSukantaHui-CyIG3xbg.js";import"./JavaCodeBlock-BwsLxS3r.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-CIaKtAt4.js";const s=`/**\r
 * Java Core Tutorial - Module 011_002: PreparedStatements, CallableStatements & SQL Safety\r
 * Topic 3: How PreparedStatement Works - Placeholders & DB Pre-Compilation\r
 * Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
 */\r
\r
package com.coderaccotax.javatutorial.jdbc;\r
\r
public class HowPreparedStatementWorksDemo {\r
\r
    public static void main(String[] args) {\r
        System.out.println("==========================================================================");\r
        System.out.println(" TOPIC 3: HOW PREPAREDSTATEMENT WORKS UNDER THE HOOD - BARRACKPORE");\r
        System.out.println("==========================================================================\\n");\r
\r
        System.out.println(">>> THE 2-PHASE PREPAREDSTATEMENT EXECUTION PROTOCOL:");\r
        System.out.println("  PHASE 1: PRE-COMPILATION (conn.prepareStatement(sql)):");\r
        System.out.println("           - App sends: 'SELECT * FROM students WHERE center = ? AND fees > ?'");\r
        System.out.println("           - Database engine parses syntax, validates table/column names, checks permissions,");\r
        System.out.println("             generates cost-based B-Tree index scan execution plan, and stores it in Plan Cache!");\r
        System.out.println("           - Returns Statement Handle ID to client.\\n");\r
\r
        System.out.println("  PHASE 2: PARAMETER BINDING & EXECUTION (pstmt.executeQuery()):");\r
        System.out.println("           - App binds: [1 -> "Barrackpore", 2 -> 4000.0]");\r
        System.out.println("           - App sends ONLY binary data values alongside the Statement Handle ID.");\r
        System.out.println("           - Database engine runs the cached execution plan immediately with zero re-parsing!\\n");\r
\r
        System.out.println(">>> RESULT: Blistering speed and zero possibility of SQL injection!");\r
        System.out.println("==========================================================================");\r
    }\r
}\r
`,o=`================================================================================\r
JAVA CORE TUTORIAL - QUICK REVISION GUIDE\r
Module 011_002: PreparedStatements, CallableStatements & SQL Safety\r
Topic 3: How PreparedStatement Works\r
Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
================================================================================\r
\r
1. THE SERVER-SIDE PREPARED STATEMENT PROTOCOL:\r
   - Supported natively in MySQL, PostgreSQL, Oracle, and MS SQL Server.\r
   - Command 'COM_STMT_PREPARE' prepares the statement on the server.\r
   - Command 'COM_STMT_EXECUTE' executes the prepared statement with new parameter values.\r
\r
2. REUSABILITY:\r
   - In a loop inserting 10,000 rows, the SQL syntax is parsed and compiled ONCE instead of 10,000 times!\r
\r
================================================================================\r
Classroom Practice: Barrackpore Academy | Mentor: Sukanta Hui\r
================================================================================\r
`,i=[{question:"What operations does the database engine perform during the prepareStatement() call before executeQuery() is invoked?",shortAnswer:"The database parses SQL syntax, verifies schema objects and user permissions, optimizes the query execution plan (index selection), and stores the pre-compiled plan in the server's Statement Plan Cache.",explanation:"Pre-compiles the query structure prior to receiving parameter data.",hint:"Parses syntax, checks permissions, generates execution plan, and caches it.",level:"Intermediate",codeExample:"conn.prepareStatement(sql) -> Generates & caches DB execution plan."},{question:"Why does re-executing the same PreparedStatement inside a loop with different parameter values provide a massive performance boost?",shortAnswer:"Because the database avoids repeating expensive SQL string parsing, AST generation, and query plan optimization for every iteration, reusing the pre-compiled execution plan with only the new parameter values.",explanation:"Drastically reduces database CPU and latency.",hint:"Reuses the cached query execution plan across all loop iterations.",level:"Beginner",codeExample:"for (Student s : list) { pstmt.setInt(1, s.id); pstmt.executeUpdate(); }"}];function S(){return e.jsxs("div",{className:"space-y-12 px-4 md:px-8 py-8 text-slate-200 bg-slate-900 min-h-screen",children:[e.jsxs("header",{className:"space-y-4 border-b border-slate-800 pb-6",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"px-3 py-1 bg-sky-500/10 text-sky-400 border border-sky-500/20 text-xs font-semibold rounded-full uppercase tracking-wider",children:"Module 011_002 · Topic 3"}),e.jsx("span",{className:"px-3 py-1 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-xs font-semibold rounded-full",children:"SQL Safety & PreparedStatements"})]}),e.jsxs("h1",{className:"text-3xl md:text-4xl font-extrabold text-white tracking-tight",children:["How PreparedStatement Works: ",e.jsx("code",{className:"text-emerald-400 font-mono",children:"Placeholders & DB Pre-Compilation"})]}),e.jsx("p",{className:"text-base md:text-lg text-slate-400 leading-relaxed max-w-4xl",children:"Under the hood: the 2-phase execution protocol — sending parameterized templates for server-side compilation and streaming bound data values."})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsxs("h2",{className:"text-2xl font-bold text-emerald-400 flex items-center gap-2",children:[e.jsx("span",{children:"💻"})," Hands-On Java Demo Code"]}),e.jsx(t,{fileModule:s,title:"HowPreparedStatementWorksDemo.java",highlightLines:[18,25,34,43]})]}),e.jsx("section",{className:"space-y-4",children:e.jsx(a,{title:"SQL Statements & Injection FAQs",questions:i})}),e.jsx("section",{className:"space-y-4",children:e.jsx(n,{content:o,title:"Module 011_002 Topic 3: How PreparedStatement Works",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Printable Note",downloadFileName:"011_002_topic3_how_preparedstatement_works_note.txt"})}),e.jsx(r,{note:"Here is the secret of PreparedStatement: Phase 1 sends the SQL template to the DB to create a Query Execution Plan. Phase 2 sends only the parameter data packets! The database never has to re-parse the query! — Sukanta Hui"})]})}export{S as default};
