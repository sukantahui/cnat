import{j as e}from"./vendor-react-core-Doz9nIC6.js";import{J as t}from"./JavaFileLoader-BfBG3xz_.js";import{F as n}from"./FAQTemplate-BHhlgA96.js";import{P as a}from"./PlainTextPrint-C08xhKA4.js";import{T as r}from"./TeacherSukantaHui-DerPxfxp.js";import"./JavaCodeBlock-BwsLxS3r.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-CH1iX9C8.js";const s=`/**\r
 * Java Core Tutorial - Module 011_003: ResultSet, Scrollable, Updatable & Metadata\r
 * Topic 2: Extracting Column Data - 1-Based Index vs Column Label Name\r
 * Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
 */\r
\r
package com.coderaccotax.javatutorial.jdbc;\r
\r
public class ColumnIndexVsLabelExtractionDemo {\r
\r
    public static void main(String[] args) {\r
        System.out.println("==========================================================================");\r
        System.out.println(" TOPIC 2: 1-BASED INDEX VS COLUMN LABEL EXTRACTION - BARRACKPORE");\r
        System.out.println("==========================================================================\\n");\r
\r
        System.out.println(">>> 1. EXTRACTION BY 1-BASED COLUMN INDEX (e.g. rs.getInt(1)):");\r
        System.out.println("  - PROS: Microsecond speed advantage (driver directly accesses column array index).");\r
        System.out.println("  - CONS: High Fragility! If SQL changes from 'SELECT id, name' to 'SELECT name, id',");\r
        System.out.println("          rs.getInt(1) will attempt to parse 'name' as int and throw SQLException!\\n");\r
\r
        System.out.println(">>> 2. EXTRACTION BY COLUMN LABEL / NAME (e.g. rs.getString("student_name")):");\r
        System.out.println("  - PROS: High Maintainability & Readability! Immune to SQL SELECT column ordering changes!");\r
        System.out.println("  - PROS: Works seamlessly with SQL column aliases (e.g. 'SELECT s_name AS student_name').");\r
        System.out.println("  - CONS: Microscopic overhead for driver's internal String-to-Index hash map lookup.\\n");\r
\r
        System.out.println(">>> INDUSTRY RECOMMENDATION:");\r
        System.out.println("  - Use COLUMN LABELS / NAMES in 99% of business code for maintainability and safety!");\r
        System.out.println("==========================================================================");\r
    }\r
}\r
`,i=`================================================================================\r
JAVA CORE TUTORIAL - QUICK REVISION GUIDE\r
Module 011_003: ResultSet, Scrollable, Updatable & Metadata\r
Topic 2: Column Index vs Label Extraction\r
Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
================================================================================\r
\r
1. GETTER SIGNATURES:\r
   - Index-Based : 'rs.getInt(1)', 'rs.getString(2)', 'rs.getDouble(3)' (1-based!)\r
   - Label-Based : 'rs.getInt("id")', 'rs.getString("name")', 'rs.getDouble("score")'\r
\r
2. SQL ALIASES:\r
   - When SQL uses 'SELECT first_name AS fname', always access using 'rs.getString("fname")'.\r
\r
================================================================================\r
Classroom Practice: Barrackpore Academy | Mentor: Sukanta Hui\r
================================================================================\r
`,o=[{question:"If a query is written as 'SELECT s.student_name AS full_name FROM students s', what string should be passed to rs.getString()?",shortAnswer:"rs.getString('full_name') (Column label aliases take precedence when retrieving data by name).",explanation:"JDBC specifies that getColumnLabel() aliases match named getters.",hint:"Use the alias name: 'full_name'.",level:"Beginner",codeExample:"rs.getString('full_name');"},{question:"What is the primary risk of using 1-based column indices (e.g. rs.getString(1)) in enterprise applications?",shortAnswer:"High code fragility. If a developer refactors the SQL query by adding, removing, or reordering columns in the SELECT clause, the numeric indices will point to wrong columns, causing silent data corruption or ClassCastExceptions at runtime.",explanation:"Named column getters are immune to column order refactoring.",hint:"Query refactoring or column reordering causes silent data corruption or type errors.",level:"Intermediate",codeExample:"SELECT name, id → rs.getInt(1) fails because index 1 is now name."}];function S(){return e.jsxs("div",{className:"space-y-12 px-4 md:px-8 py-8 text-slate-200 bg-slate-900 min-h-screen",children:[e.jsxs("header",{className:"space-y-4 border-b border-slate-800 pb-6",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"px-3 py-1 bg-sky-500/10 text-sky-400 border border-sky-500/20 text-xs font-semibold rounded-full uppercase tracking-wider",children:"Module 011_003 · Topic 2"}),e.jsx("span",{className:"px-3 py-1 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-xs font-semibold rounded-full",children:"ResultSet & Metadata"})]}),e.jsxs("h1",{className:"text-xl sm:text-2xl md:text-3xl font-bold text-white tracking-tight",children:["Extracting Column Data: ",e.jsx("code",{className:"text-emerald-400 font-mono",children:"1-Based Index vs Column Label Name"})]}),e.jsx("p",{className:"text-base md:text-lg text-slate-400 leading-relaxed max-w-4xl",children:'Access strategies: comparing rs.getString(1) (maximum speed) vs rs.getString("email") (maximum maintainability and readability).'})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsxs("h2",{className:"text-2xl font-bold text-emerald-400 flex items-center gap-2",children:[e.jsx("span",{children:"💻"})," Hands-On Java Demo Code"]}),e.jsx(t,{fileModule:s,title:"ColumnIndexVsLabelExtractionDemo.java",highlightLines:[18,25,34,43]})]}),e.jsx("section",{className:"space-y-4",children:e.jsx(n,{title:"ResultSet & Metadata FAQs",questions:o})}),e.jsx("section",{className:"space-y-4",children:e.jsx(a,{content:i,title:"Module 011_003 Topic 2: Column Index vs Label Extraction",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Printable Note",downloadFileName:"011_003_topic2_column_index_vs_label_extraction_note.txt"})}),e.jsx(r,{note:"Should you use column index rs.getString(1) or column name rs.getString('student_name')? Column index is slightly faster, but column name is MUCH safer because changing SQL column order will not break your code! — Sukanta Hui"})]})}export{S as default};
