import{j as e}from"./vendor-react-core-Doz9nIC6.js";import{J as t}from"./JavaFileLoader-BfBG3xz_.js";import{F as a}from"./FAQTemplate-BHhlgA96.js";import{P as r}from"./PlainTextPrint-C08xhKA4.js";import{T as n}from"./TeacherSukantaHui-RpFLNJ5A.js";import"./JavaCodeBlock-BwsLxS3r.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-wprqVFW_.js";const s=`/**\r
 * Java Core Tutorial - Module 011_005: Batch Updates & DAO Pattern\r
 * Topic 1: JDBC Batch Processing - Consolidating Network Payloads\r
 * Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
 */\r
\r
package com.coderaccotax.javatutorial.jdbc;\r
\r
public class JdbcBatchProcessingOverviewDemo {\r
\r
    public static void main(String[] args) {\r
        System.out.println("==========================================================================");\r
        System.out.println(" TOPIC 1: JDBC BATCH PROCESSING OVERVIEW - BARRACKPORE ACADEMY");\r
        System.out.println("==========================================================================\\n");\r
\r
        System.out.println(">>> THE 2 FLAVORS OF JDBC BATCHING:");\r
        System.out.println("  1. Statement.addBatch(String sql):");\r
        System.out.println("     - Groups multiple arbitrary static SQL statements (INSERT, UPDATE, DELETE).");\r
        System.out.println("     - Example: stmt.addBatch("INSERT INTO a VALUES (1)"); stmt.addBatch("UPDATE b SET x=2");\\n");\r
\r
        System.out.println("  2. PreparedStatement.addBatch():");\r
        System.out.println("     - Reuses ONE compiled SQL statement and passes multiple sets of parameter arguments.");\r
        System.out.println("     - 10x to 50x faster than Statement batching due to pre-compilation and wire compression!");\r
\r
        System.out.println("\\n==========================================================================");\r
    }\r
}\r
`,i=`================================================================================\r
JAVA CORE TUTORIAL - QUICK REVISION GUIDE\r
Module 011_005: Batch Updates & DAO Pattern\r
Topic 1: JDBC Batch Processing Overview\r
Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
================================================================================\r
\r
1. WHAT IS BATCH PROCESSING:\r
   - The capability of grouping multiple SQL operations together and executing them in a single call.\r
\r
2. DRIVER-LEVEL OPTIMIZATION (rewriteBatchedStatements):\r
   - In MySQL Connector/J, add '?rewriteBatchedStatements=true' to the JDBC URL to rewrite batch\r
     inserts into multi-value SQL ('INSERT INTO t VALUES (1), (2), (3)...') for massive 10x throughput!\r
\r
================================================================================\r
Classroom Practice: Barrackpore Academy | Mentor: Sukanta Hui\r
================================================================================\r
`,o=[{question:"What is the crucial connection property in MySQL Connector/J that maximizes batch insert performance?",shortAnswer:"rewriteBatchedStatements=true (e.g. jdbc:mysql://localhost:3306/db?rewriteBatchedStatements=true).",explanation:"Rewrites individual batch inserts into consolidated multi-row SQL INSERT statements.",hint:"rewriteBatchedStatements=true",level:"Intermediate",codeExample:"jdbc:mysql://localhost:3306/academy?rewriteBatchedStatements=true"},{question:"Why is PreparedStatement batching superior to Statement batching for bulk data loading?",shortAnswer:"Because PreparedStatement compiles the SQL query once on the database server, sending only binary parameter values in each batch, whereas Statement sends full SQL text strings for every operation.",explanation:"Pre-compilation and compact binary serialization save bandwidth and CPU.",hint:"PreparedStatement sends only binary parameters for a pre-compiled query.",level:"Intermediate",codeExample:"PreparedStatement compiles once; Statement re-parses every SQL string."}];function S(){return e.jsxs("div",{className:"space-y-12 px-4 md:px-8 py-8 text-slate-200 bg-slate-900 min-h-screen",children:[e.jsxs("header",{className:"space-y-4 border-b border-slate-800 pb-6",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"px-3 py-1 bg-sky-500/10 text-sky-400 border border-sky-500/20 text-xs font-semibold rounded-full uppercase tracking-wider",children:"Module 011_005 · Topic 1"}),e.jsx("span",{className:"px-3 py-1 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-xs font-semibold rounded-full",children:"Batch Updates & DAO Pattern"})]}),e.jsxs("h1",{className:"text-xl sm:text-2xl md:text-3xl font-bold text-white tracking-tight",children:["JDBC Batch Processing: ",e.jsx("code",{className:"text-emerald-400 font-mono",children:"Consolidating Network Payloads"})]}),e.jsx("p",{className:"text-base md:text-lg text-slate-400 leading-relaxed max-w-4xl",children:"High-throughput data ingestion: how JDBC drivers package hundreds of parameter sets into unified wire protocol packets."})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsxs("h2",{className:"text-2xl font-bold text-emerald-400 flex items-center gap-2",children:[e.jsx("span",{children:"💻"})," Hands-On Java Demo Code"]}),e.jsx(t,{fileModule:s,title:"JdbcBatchProcessingOverviewDemo.java",highlightLines:[18,25,34,43]})]}),e.jsx("section",{className:"space-y-4",children:e.jsx(a,{title:"Batch Updates & DAO FAQs",questions:o})}),e.jsx("section",{className:"space-y-4",children:e.jsx(r,{content:i,title:"Module 011_005 Topic 1: JDBC Batch Processing Overview",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Printable Note",downloadFileName:"011_005_topic1_jdbc_batch_processing_overview_note.txt"})}),e.jsx(n,{note:"Think of JDBC Batching like Amazon delivery! Instead of the delivery truck driving to your house 500 times for 500 pencils, it packs all 500 pencils in ONE box and delivers them in a single trip! — Sukanta Hui"})]})}export{S as default};
