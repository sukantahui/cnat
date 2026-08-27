import{j as e}from"./vendor-react-core-Doz9nIC6.js";import{J as t}from"./JavaFileLoader-BfBG3xz_.js";import{F as n}from"./FAQTemplate-CkSqDH4B.js";import{P as r}from"./PlainTextPrint-C08xhKA4.js";import{T as a}from"./TeacherSukantaHui-CyIG3xbg.js";import"./JavaCodeBlock-BwsLxS3r.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-CIaKtAt4.js";const s=`/**\r
 * Java Core Tutorial - Module 011_003: ResultSet, Scrollable, Updatable & Metadata\r
 * Topic 4: ResultSet Types & Concurrency - Scrollability & Mutability\r
 * Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
 */\r
\r
package com.coderaccotax.javatutorial.jdbc;\r
\r
public class ResultSetTypesConcurrencyOverviewDemo {\r
\r
    public static void main(String[] args) {\r
        System.out.println("==========================================================================");\r
        System.out.println(" TOPIC 4: RESULTSET TYPES & CONCURRENCY OVERVIEW - BARRACKPORE");\r
        System.out.println("==========================================================================\\n");\r
\r
        System.out.println(">>> 1. THE 3 RESULTSET TYPES (Scrollability):");\r
        System.out.println("  - ResultSet.TYPE_FORWARD_ONLY        : Moves forward only with rs.next() (Default / Fastest / Lowest RAM).");\r
        System.out.println("  - ResultSet.TYPE_SCROLL_INSENSITIVE  : Can scroll backward and jump; snapshot is insensitive to DB changes.");\r
        System.out.println("  - ResultSet.TYPE_SCROLL_SENSITIVE    : Can scroll backward and jump; reflects live updates made by other transactions.\\n");\r
\r
        System.out.println(">>> 2. THE 2 CONCURRENCY MODES (Updatability):");\r
        System.out.println("  - ResultSet.CONCUR_READ_ONLY         : Data rows cannot be updated via the ResultSet (Default).");\r
        System.out.println("  - ResultSet.CONCUR_UPDATABLE         : Rows can be mutated directly via rs.updateString() and rs.updateRow()!\\n");\r
\r
        System.out.println(">>> CREATING A CUSTOM STATEMENT WITH SPECIFIC TYPE & CONCURRENCY:");\r
        System.out.println("  Statement stmt = conn.createStatement(");\r
        System.out.println("      ResultSet.TYPE_SCROLL_INSENSITIVE,");\r
        System.out.println("      ResultSet.CONCUR_READ_ONLY);");\r
\r
        System.out.println("\\n==========================================================================");\r
    }\r
}\r
`,o=`================================================================================\r
JAVA CORE TUTORIAL - QUICK REVISION GUIDE\r
Module 011_003: ResultSet, Scrollable, Updatable & Metadata\r
Topic 4: ResultSet Types & Concurrency\r
Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
================================================================================\r
\r
1. TYPE CONSTANTS:\r
   - 'TYPE_FORWARD_ONLY'        (int 1003)\r
   - 'TYPE_SCROLL_INSENSITIVE'  (int 1004)\r
   - 'TYPE_SCROLL_SENSITIVE'    (int 1005)\r
\r
2. CONCURRENCY CONSTANTS:\r
   - 'CONCUR_READ_ONLY'         (int 1007)\r
   - 'CONCUR_UPDATABLE'         (int 1008)\r
\r
================================================================================\r
Classroom Practice: Barrackpore Academy | Mentor: Sukanta Hui\r
================================================================================\r
`,l=[{question:"What are the default ResultSet type and concurrency modes if not explicitly specified when creating a Statement?",shortAnswer:"ResultSet.TYPE_FORWARD_ONLY and ResultSet.CONCUR_READ_ONLY.",explanation:"Provides the highest performance and lowest memory footprint.",hint:"TYPE_FORWARD_ONLY and CONCUR_READ_ONLY.",level:"Beginner",codeExample:"conn.createStatement(); // Defaults to TYPE_FORWARD_ONLY, CONCUR_READ_ONLY"},{question:"What happens if you attempt to call rs.previous() on a ResultSet created with the default TYPE_FORWARD_ONLY setting?",shortAnswer:"The JDBC driver throws a java.sql.SQLException because backward navigation is not supported on forward-only cursors.",explanation:"Must configure TYPE_SCROLL_INSENSITIVE or TYPE_SCROLL_SENSITIVE to enable backward navigation.",hint:"Throws java.sql.SQLException because backward navigation is disabled.",level:"Beginner",codeExample:"rs.previous(); // Throws SQLException on TYPE_FORWARD_ONLY"}];function E(){return e.jsxs("div",{className:"space-y-12 px-4 md:px-8 py-8 text-slate-200 bg-slate-900 min-h-screen",children:[e.jsxs("header",{className:"space-y-4 border-b border-slate-800 pb-6",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"px-3 py-1 bg-sky-500/10 text-sky-400 border border-sky-500/20 text-xs font-semibold rounded-full uppercase tracking-wider",children:"Module 011_003 · Topic 4"}),e.jsx("span",{className:"px-3 py-1 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-xs font-semibold rounded-full",children:"ResultSet & Metadata"})]}),e.jsxs("h1",{className:"text-3xl md:text-4xl font-extrabold text-white tracking-tight",children:["ResultSet Types & Concurrency: ",e.jsx("code",{className:"text-emerald-400 font-mono",children:"Scrollability & Mutability"})]}),e.jsx("p",{className:"text-base md:text-lg text-slate-400 leading-relaxed max-w-4xl",children:"Understanding statement creation flags: TYPE_FORWARD_ONLY, TYPE_SCROLL_INSENSITIVE, TYPE_SCROLL_SENSITIVE, and CONCUR_UPDATABLE."})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsxs("h2",{className:"text-2xl font-bold text-emerald-400 flex items-center gap-2",children:[e.jsx("span",{children:"💻"})," Hands-On Java Demo Code"]}),e.jsx(t,{fileModule:s,title:"ResultSetTypesConcurrencyOverviewDemo.java",highlightLines:[18,25,34,43]})]}),e.jsx("section",{className:"space-y-4",children:e.jsx(n,{title:"ResultSet & Metadata FAQs",questions:l})}),e.jsx("section",{className:"space-y-4",children:e.jsx(r,{content:o,title:"Module 011_003 Topic 4: ResultSet Types & Concurrency",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Printable Note",downloadFileName:"011_003_topic4_resultset_types_concurrency_overview_note.txt"})}),e.jsx(a,{note:"By default, ResultSets only move forward (TYPE_FORWARD_ONLY). But you can configure conn.createStatement(ResultSet.TYPE_SCROLL_INSENSITIVE, ResultSet.CONCUR_READ_ONLY) to scroll backwards, jump to specific rows, or even edit rows directly! — Sukanta Hui"})]})}export{E as default};
