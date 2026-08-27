import{j as e}from"./vendor-react-core-Doz9nIC6.js";import{J as t}from"./JavaFileLoader-BfBG3xz_.js";import{F as r}from"./FAQTemplate-CkSqDH4B.js";import{P as n}from"./PlainTextPrint-C08xhKA4.js";import{T as s}from"./TeacherSukantaHui-CC0AKmkm.js";import"./JavaCodeBlock-BwsLxS3r.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-BtJHuk7w.js";const o=`/**\r
 * Java Core Tutorial - Module 011_003: ResultSet, Scrollable, Updatable & Metadata\r
 * Topic 1: ResultSet Cursor Mechanics - Navigating Tabular Data\r
 * Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
 */\r
\r
package com.coderaccotax.javatutorial.jdbc;\r
\r
public class ResultSetCursorMechanicsDemo {\r
\r
    public static void main(String[] args) {\r
        System.out.println("==========================================================================");\r
        System.out.println(" TOPIC 1: RESULTSET CURSOR MECHANICS - BARRACKPORE ACADEMY");\r
        System.out.println("==========================================================================\\n");\r
\r
        System.out.println(">>> THE RESULTSET CURSOR PROGRESSION TIMELINE:");\r
        System.out.println("  [State 1: Initial]      -> Cursor is at 'BEFORE FIRST' position (isBeforeFirst() = true).");\r
        System.out.println("  [State 2: 1st rs.next()] -> Moves to Row 1 (getRow() = 1, returns true).");\r
        System.out.println("  [State 3: 2nd rs.next()] -> Moves to Row 2 (getRow() = 2, returns true).");\r
        System.out.println("  [State 4: 3rd rs.next()] -> Moves to Row 3 (getRow() = 3, returns true).");\r
        System.out.println("  [State 5: 4th rs.next()] -> No more rows -> Moves to 'AFTER LAST' (isAfterLast() = true, returns false!).\\n");\r
\r
        System.out.println(">>> THE CANONICAL IDIOMS:");\r
        System.out.println("  1. Multi-Row Iteration   : while (rs.next()) { ... }");\r
        System.out.println("  2. Single-Row / PK Fetch : if (rs.next()) { ... } else { throw new NotFoundException(); }");\r
\r
        System.out.println("\\n==========================================================================");\r
    }\r
}\r
`,a=`================================================================================\r
JAVA CORE TUTORIAL - QUICK REVISION GUIDE\r
Module 011_003: ResultSet, Scrollable, Updatable & Metadata\r
Topic 1: ResultSet Cursor Mechanics\r
Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
================================================================================\r
\r
1. CURSOR NAVIGATION METHODS:\r
   - 'boolean next()'        : Advances cursor forward by one row.\r
   - 'int getRow()'          : Returns the 1-based current row number (0 if before first or after last).\r
   - 'boolean isBeforeFirst()' : True if cursor is before the first row.\r
   - 'boolean isFirst()'     : True if cursor is on the first row.\r
   - 'boolean isAfterLast()' : True if cursor is past the last row.\r
\r
================================================================================\r
Classroom Practice: Barrackpore Academy | Mentor: Sukanta Hui\r
================================================================================\r
`,i=[{question:"What does rs.getRow() return when the cursor is positioned on the third row of the ResultSet?",shortAnswer:"3 (Row numbering is 1-based in JDBC).",explanation:"Returns 0 if the cursor is before the first row or after the last row.",hint:"3 (1-based row numbering).",level:"Beginner",codeExample:"rs.next(); rs.next(); rs.next(); System.out.println(rs.getRow()); // 3"},{question:"How do you check if a query designed to fetch a single unique primary key found a matching record?",shortAnswer:"Using an 'if (rs.next())' statement. If true, read the column values; if false, handle the record-not-found case.",explanation:"Standard pattern for unique primary key lookups.",hint:"Use if (rs.next()) for single-row lookups.",level:"Beginner",codeExample:"if (rs.next()) { return mapRow(rs); } else { throw new StudentNotFoundException(); }"}];function f(){return e.jsxs("div",{className:"space-y-12 px-4 md:px-8 py-8 text-slate-200 bg-slate-900 min-h-screen",children:[e.jsxs("header",{className:"space-y-4 border-b border-slate-800 pb-6",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"px-3 py-1 bg-sky-500/10 text-sky-400 border border-sky-500/20 text-xs font-semibold rounded-full uppercase tracking-wider",children:"Module 011_003 · Topic 1"}),e.jsx("span",{className:"px-3 py-1 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-xs font-semibold rounded-full",children:"ResultSet & Metadata"})]}),e.jsxs("h1",{className:"text-3xl md:text-4xl font-extrabold text-white tracking-tight",children:["ResultSet Cursor Mechanics: ",e.jsx("code",{className:"text-emerald-400 font-mono",children:"Navigating Tabular Data"})]}),e.jsx("p",{className:"text-base md:text-lg text-slate-400 leading-relaxed max-w-4xl",children:"Cursor lifecycles: understanding rs.next(), isBeforeFirst(), isAfterLast(), getRow(), and traversing query result buffers."})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsxs("h2",{className:"text-2xl font-bold text-emerald-400 flex items-center gap-2",children:[e.jsx("span",{children:"💻"})," Hands-On Java Demo Code"]}),e.jsx(t,{fileModule:o,title:"ResultSetCursorMechanicsDemo.java",highlightLines:[18,25,34,43]})]}),e.jsx("section",{className:"space-y-4",children:e.jsx(r,{title:"ResultSet & Metadata FAQs",questions:i})}),e.jsx("section",{className:"space-y-4",children:e.jsx(n,{content:a,title:"Module 011_003 Topic 1: ResultSet Cursor Mechanics",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Printable Note",downloadFileName:"011_003_topic1_resultset_cursor_mechanics_note.txt"})}),e.jsx(s,{note:"The while (rs.next()) loop is the most famous loop in JDBC! rs.next() moves the cursor to the next row and returns true, or returns false when there are no more rows left! — Sukanta Hui"})]})}export{f as default};
