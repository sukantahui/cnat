import{j as e}from"./vendor-react-core-Doz9nIC6.js";import{J as t}from"./JavaFileLoader-BfBG3xz_.js";import{F as r}from"./FAQTemplate-BHhlgA96.js";import{P as a}from"./PlainTextPrint-C08xhKA4.js";import{T as n}from"./TeacherSukantaHui-CEPuAfsb.js";import"./JavaCodeBlock-BwsLxS3r.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-DGCamHnX.js";const s=`/**\r
 * Java Core Tutorial - Module 011_002: PreparedStatements, CallableStatements & SQL Safety\r
 * Topic 5: PreparedStatement Performance - Plan Caching & Benchmark\r
 * Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
 */\r
\r
package com.coderaccotax.javatutorial.jdbc;\r
\r
public class PreparedStatementPerformanceDemo {\r
\r
    public static void main(String[] args) {\r
        System.out.println("==========================================================================");\r
        System.out.println(" TOPIC 5: PREPAREDSTATEMENT PERFORMANCE & PLAN CACHING - BARRACKPORE");\r
        System.out.println("==========================================================================\\n");\r
\r
        System.out.println(">>> WHY PREPAREDSTATEMENT RUNS 10x TO 50x FASTER IN BATCHES:");\r
        System.out.println("  1. STATEMENT (Uncached SQL String Parsing):");\r
        System.out.println("     - For 10,000 INSERT statements:");\r
        System.out.println("     - 10,000 Lexical SQL parse passes + 10,000 AST trees + 10,000 B-Tree optimizer calculations.");\r
        System.out.println("     - High database CPU spike and lock contention.\\n");\r
\r
        System.out.println("  2. PREPAREDSTATEMENT (Plan Cache Reuse):");\r
        System.out.println("     - Pre-compiles SQL template ONCE (1 parse pass + 1 optimizer plan).");\r
        System.out.println("     - Reuses same plan for all 10,000 rows!");\r
        System.out.println("     - Reduces DB CPU load by over 80%!\\n");\r
\r
        System.out.println(">>> CLIENT-SIDE STATEMENT CACHING (HikariCP / MySQL):");\r
        System.out.println("  - Driver property: 'cachePrepStmts=true&prepStmtCacheSize=250&prepStmtCacheSqlLimit=2048'");\r
        System.out.println("  - Keeps PreparedStatement instances cached in client RAM across multiple getConnection() calls!");\r
\r
        System.out.println("\\n==========================================================================");\r
    }\r
}\r
`,i=`================================================================================\r
JAVA CORE TUTORIAL - QUICK REVISION GUIDE\r
Module 011_002: PreparedStatements, CallableStatements & SQL Safety\r
Topic 5: PreparedStatement Performance\r
Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
================================================================================\r
\r
1. THE TWO LEVELS OF STATEMENT CACHING:\r
   - Level 1 (Database Server) : Statement Plan Cache stores compiled binary query execution plans.\r
   - Level 2 (Client Driver/Pool) : Connection Pool (HikariCP) caches 'PreparedStatement' wrapper objects.\r
\r
2. DRIVER OPTIMIZATION FLAGS (MySQL Connector/J):\r
   - 'cachePrepStmts=true'\r
   - 'prepStmtCacheSize=250'\r
   - 'prepStmtCacheSqlLimit=2048'\r
   - 'useServerPrepStmts=true'\r
\r
================================================================================\r
Classroom Practice: Barrackpore Academy | Mentor: Sukanta Hui\r
================================================================================\r
`,o=[{question:"What are the two caching layers that accelerate PreparedStatement executions in enterprise systems?",shortAnswer:"1. Server-side Query Plan Caching (where the database engine caches the parsed execution plan), and 2. Client-side PreparedStatement Caching (where the JDBC driver or connection pool like HikariCP reuses PreparedStatement object wrappers across leases).",explanation:"Maximizes throughput and minimizes CPU utilization on both sides.",hint:"Server-side Query Plan cache and Client-side PreparedStatement pool cache.",level:"Intermediate",codeExample:"config.addDataSourceProperty('cachePrepStmts', 'true');"},{question:"What MySQL JDBC connection property enables client-side statement caching?",shortAnswer:"cachePrepStmts=true (typically configured alongside prepStmtCacheSize=250 and prepStmtCacheSqlLimit=2048).",explanation:"Standard production performance tuning flag for MySQL and MariaDB.",hint:"cachePrepStmts=true",level:"Intermediate",codeExample:"jdbc:mysql://localhost/db?cachePrepStmts=true&prepStmtCacheSize=250"}];function x(){return e.jsxs("div",{className:"space-y-12 px-4 md:px-8 py-8 text-slate-200 bg-slate-900 min-h-screen",children:[e.jsxs("header",{className:"space-y-4 border-b border-slate-800 pb-6",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"px-3 py-1 bg-sky-500/10 text-sky-400 border border-sky-500/20 text-xs font-semibold rounded-full uppercase tracking-wider",children:"Module 011_002 · Topic 5"}),e.jsx("span",{className:"px-3 py-1 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-xs font-semibold rounded-full",children:"SQL Safety & PreparedStatements"})]}),e.jsxs("h1",{className:"text-xl sm:text-2xl md:text-3xl font-bold text-white tracking-tight",children:["PreparedStatement Performance: ",e.jsx("code",{className:"text-emerald-400 font-mono",children:"Plan Caching & Benchmark"})]}),e.jsx("p",{className:"text-base md:text-lg text-slate-400 leading-relaxed max-w-4xl",children:"Maximizing throughput: query execution plan caching, CPU utilization reduction, and batching parameter sets."})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsxs("h2",{className:"text-2xl font-bold text-emerald-400 flex items-center gap-2",children:[e.jsx("span",{children:"💻"})," Hands-On Java Demo Code"]}),e.jsx(t,{fileModule:s,title:"PreparedStatementPerformanceDemo.java",highlightLines:[18,25,34,43]})]}),e.jsx("section",{className:"space-y-4",children:e.jsx(r,{title:"SQL Statements & Injection FAQs",questions:o})}),e.jsx("section",{className:"space-y-4",children:e.jsx(a,{content:i,title:"Module 011_002 Topic 5: PreparedStatement Performance",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Printable Note",downloadFileName:"011_002_topic5_preparedstatement_performance_note.txt"})}),e.jsx(n,{note:"When inserting 10,000 student records, Statement forces the database to parse 10,000 SQL strings! PreparedStatement parses ONCE, reusing the query execution plan 10,000 times! That is a 10x to 50x throughput gain! — Sukanta Hui"})]})}export{x as default};
