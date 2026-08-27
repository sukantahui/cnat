import{j as e}from"./vendor-react-core-Doz9nIC6.js";import{J as t}from"./JavaFileLoader-BfBG3xz_.js";import{F as r}from"./FAQTemplate-CkSqDH4B.js";import{P as n}from"./PlainTextPrint-C08xhKA4.js";import{T as s}from"./TeacherSukantaHui-CyIG3xbg.js";import"./JavaCodeBlock-BwsLxS3r.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-CIaKtAt4.js";const o=`/**\r
 * Java Core Tutorial - Module 011_003: ResultSet, Scrollable, Updatable & Metadata\r
 * Topic 5: TYPE_FORWARD_ONLY - Stream Processing & Memory Efficiency\r
 * Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
 */\r
\r
package com.coderaccotax.javatutorial.jdbc;\r
\r
public class TypeForwardOnlyProcessingDemo {\r
\r
    public static void main(String[] args) {\r
        System.out.println("==========================================================================");\r
        System.out.println(" TOPIC 5: TYPE_FORWARD_ONLY STREAM PROCESSING - BARRACKPORE");\r
        System.out.println("==========================================================================\\n");\r
\r
        System.out.println(">>> WHY TYPE_FORWARD_ONLY IS ARCHITECTURALLY SUPERIOR:");\r
        System.out.println("  1. STREAMING PIPELINE:");\r
        System.out.println("     - Rows are fetched across the network in small batches (fetchSize, e.g. 50 rows).");\r
        System.out.println("     - Once a row is read and the cursor moves forward, the old row buffer is immediately eligible for GC!\\n");\r
\r
        System.out.println("  2. ZERO CLIENT MEMORY OVERHEAD:");\r
        System.out.println("     - Can export 50,000,000 student invoice records to CSV on a machine with only 64MB of RAM!");\r
        System.out.println("     - Scrollable ResultSets, by contrast, must cache all rows on the client, risking OutOfMemoryError!\\n");\r
\r
        System.out.println("  3. MAXIMUM DATABASE SPEED:");\r
        System.out.println("     - Database engine can stream rows straight off disk without maintaining expensive server-side cursor state.");\r
\r
        System.out.println("\\n==========================================================================");\r
    }\r
}\r
`,a=`================================================================================\r
JAVA CORE TUTORIAL - QUICK REVISION GUIDE\r
Module 011_003: ResultSet, Scrollable, Updatable & Metadata\r
Topic 5: TYPE_FORWARD_ONLY Processing\r
Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
================================================================================\r
\r
1. CHARACTERISTICS:\r
   - Cursor moves exclusively forward with 'rs.next()'.\r
   - 'rs.previous()', 'rs.first()', 'rs.last()', and 'rs.absolute()' are unsupported.\r
\r
2. STREAMING MYSQL / POSTGRESQL TRICK:\r
   - In MySQL, set 'statement.setFetchSize(Integer.MIN_VALUE)' to enable true streaming mode without client buffering!\r
\r
================================================================================\r
Classroom Practice: Barrackpore Academy | Mentor: Sukanta Hui\r
================================================================================\r
`,i=[{question:"Why should TYPE_FORWARD_ONLY always be preferred over scrollable result sets when exporting massive datasets (e.g. 10 million rows)?",shortAnswer:"Because forward-only result sets do not retain previously read rows in memory, allowing the JVM to stream and garbage-collect rows continuously in constant O(1) memory, preventing OutOfMemoryErrors.",explanation:"Scrollable result sets buffer rows in client RAM to allow backward seeking.",hint:"Streams data in constant O(1) memory without buffering history.",level:"Intermediate",codeExample:"conn.createStatement(ResultSet.TYPE_FORWARD_ONLY, ResultSet.CONCUR_READ_ONLY);"},{question:"How do you enable true row-by-row streaming in MySQL Connector/J with TYPE_FORWARD_ONLY?",shortAnswer:"By setting stmt.setFetchSize(Integer.MIN_VALUE) on a forward-only, read-only statement.",explanation:"Special MySQL Connector/J driver convention for stream processing.",hint:"stmt.setFetchSize(Integer.MIN_VALUE)",level:"Advanced",codeExample:"stmt.setFetchSize(Integer.MIN_VALUE); // MySQL streaming trigger"}];function h(){return e.jsxs("div",{className:"space-y-12 px-4 md:px-8 py-8 text-slate-200 bg-slate-900 min-h-screen",children:[e.jsxs("header",{className:"space-y-4 border-b border-slate-800 pb-6",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"px-3 py-1 bg-sky-500/10 text-sky-400 border border-sky-500/20 text-xs font-semibold rounded-full uppercase tracking-wider",children:"Module 011_003 · Topic 5"}),e.jsx("span",{className:"px-3 py-1 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-xs font-semibold rounded-full",children:"ResultSet & Metadata"})]}),e.jsxs("h1",{className:"text-3xl md:text-4xl font-extrabold text-white tracking-tight",children:["TYPE_FORWARD_ONLY: ",e.jsx("code",{className:"text-emerald-400 font-mono",children:"Stream Processing & Memory Efficiency"})]}),e.jsx("p",{className:"text-base md:text-lg text-slate-400 leading-relaxed max-w-4xl",children:"The high-performance baseline: streaming millions of rows with minimal client RAM, continuous buffer pipelining, and one-pass processing."})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsxs("h2",{className:"text-2xl font-bold text-emerald-400 flex items-center gap-2",children:[e.jsx("span",{children:"💻"})," Hands-On Java Demo Code"]}),e.jsx(t,{fileModule:o,title:"TypeForwardOnlyProcessingDemo.java",highlightLines:[18,25,34,43]})]}),e.jsx("section",{className:"space-y-4",children:e.jsx(r,{title:"ResultSet & Metadata FAQs",questions:i})}),e.jsx("section",{className:"space-y-4",children:e.jsx(n,{content:a,title:"Module 011_003 Topic 5: TYPE_FORWARD_ONLY Processing",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Printable Note",downloadFileName:"011_003_topic5_type_forward_only_processing_note.txt"})}),e.jsx(s,{note:"Why is TYPE_FORWARD_ONLY the default in 99.9% of enterprise systems? Because the JDBC driver does not need to buffer previous rows in memory! It can stream 10 million rows continuously without running out of RAM! — Sukanta Hui"})]})}export{h as default};
