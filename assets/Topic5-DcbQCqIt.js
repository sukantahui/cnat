import{j as e}from"./vendor-react-core-Doz9nIC6.js";import{J as a}from"./JavaFileLoader-BfBG3xz_.js";import{F as t}from"./FAQTemplate-CkSqDH4B.js";import{P as s}from"./PlainTextPrint-C08xhKA4.js";import{T as n}from"./TeacherSukantaHui-CC0AKmkm.js";import"./JavaCodeBlock-BwsLxS3r.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-BtJHuk7w.js";const i=`/**\r
 * Java Core Tutorial - Module 002_009: Packages, Access Modifiers, JAR Packaging & Module System\r
 * Topic 5: Resolving Class Name Ambiguity with Duplicate Names (java.util.Date vs java.sql.Date)\r
 * Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
 */\r
\r
package com.coderaccotax.javatutorial.packages;\r
\r
// If you write both:\r
// import java.util.Date;\r
// import java.sql.Date;\r
// -> COMPILE ERROR: "Date is already defined in a single-type import"\r
\r
// RESOLUTION STRATEGY:\r
// 1. Import one (or neither) and use the Fully Qualified Class Name (FQCN) for the other!\r
import java.util.Date; // Primary utility Date\r
\r
public class ResolvingClassNameAmbiguityDemo {\r
\r
    public static void main(String[] args) {\r
        System.out.println("==========================================================================");\r
        System.out.println(" TOPIC 5: RESOLVING CLASS NAME AMBIGUITY - BARRACKPORE");\r
        System.out.println("==========================================================================\\n");\r
\r
        // 1. Using imported simple name for java.util.Date:\r
        Date utilDate = new Date();\r
        System.out.println("  [java.util.Date] Current Timestamp: " + utilDate);\r
\r
        // 2. Using Fully Qualified Name (FQCN) for conflicting java.sql.Date:\r
        java.sql.Date sqlDate = new java.sql.Date(System.currentTimeMillis());\r
        System.out.println("  [java.sql.Date]  SQL Database Date: " + sqlDate);\r
\r
        System.out.println("\\n>>> Ambiguity Resolution Rules:");\r
        System.out.println("  - An explicit single-type import wins over wildcard imports.");\r
        System.out.println("  - When 2 conflicting classes must be used in the same method, use the FQCN for at least one!");\r
\r
        System.out.println("\\n==========================================================================");\r
    }\r
}`,r=`================================================================================\r
JAVA CORE TUTORIAL - QUICK REVISION GUIDE\r
Module 002_009: Packages, Access Modifiers & Module System\r
Topic 5: Resolving Class Name Ambiguity\r
Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
================================================================================\r
\r
1. AMBIGUITY RESOLUTION RULES:\r
   - Same simple name from 2 packages cannot both be imported explicitly.\r
   - Solution: Use Fully Qualified Class Name (FQCN): 'packageName.ClassName'.\r
\r
================================================================================\r
Classroom Practice: Barrackpore Academy | Mentor: Sukanta Hui\r
================================================================================`,l=[{question:"How do you resolve a naming conflict when you need to use two classes with the same simple name (e.g. 'java.util.Date' and 'java.sql.Date') in the same Java file?",shortAnswer:"Import one of the classes (or neither) and refer to the other class using its Fully Qualified Class Name (FQCN), such as 'java.sql.Date sqlDate = new java.sql.Date(...);'.",explanation:"This eliminates all compiler ambiguity.",hint:"Use Fully Qualified Class Name (FQCN) for the conflicting type.",level:"Beginner",codeExample:`Date d1 = new Date();
java.sql.Date d2 = new java.sql.Date(ms);`}];function g(){return e.jsxs("div",{className:"space-y-12 px-4 md:px-8 py-8 text-slate-200 bg-slate-900 min-h-screen",children:[e.jsx("style",{children:`
          @keyframes fadeIn {
            from { opacity: 0; transform: translateY(8px); }
            to { opacity: 1; transform: translateY(0); }
          }
          .animate-fade-in { animation: fadeIn 0.5s ease-out forwards; }
        `}),e.jsxs("header",{className:"space-y-4 border-b border-slate-800 pb-6 animate-fade-in",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"px-3 py-1 bg-sky-500/10 text-sky-400 border border-sky-500/20 text-xs font-semibold rounded-full uppercase tracking-wider",children:"Module 002_009 · Topic 5"}),e.jsx("span",{className:"px-3 py-1 bg-rose-500/10 text-rose-400 border border-rose-500/20 text-xs font-semibold rounded-full",children:"Collision Resolution"})]}),e.jsxs("h1",{className:"text-3xl md:text-4xl font-extrabold text-white tracking-tight",children:["Resolving Class Name Ambiguity: ",e.jsx("code",{className:"text-sky-300 font-mono",children:"java.util.Date"})," vs ",e.jsx("code",{className:"text-emerald-300 font-mono",children:"java.sql.Date"})]}),e.jsx("p",{className:"text-base md:text-lg text-slate-400 leading-relaxed max-w-4xl",children:"Learn how to resolve duplicate class name collisions cleanly using Fully Qualified Class Names (FQCN) and priority import precedence."})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsxs("h2",{className:"text-2xl font-bold text-emerald-400 flex items-center gap-2",children:[e.jsx("span",{children:"💻"})," Hands-On Java Demo Code"]}),e.jsx(a,{fileModule:i,title:"ResolvingClassNameAmbiguityDemo.java",highlightLines:[15,23,27]})]}),e.jsx("section",{className:"space-y-4",children:e.jsx(t,{title:"Class Ambiguity FAQs",questions:l})}),e.jsx("section",{className:"space-y-4",children:e.jsx(s,{content:r,title:"Module 002_009 Topic 5: Resolving Class Ambiguity",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Printable Note",downloadFileName:"002_009_topic5_ambiguity_note.txt"})}),e.jsx(n,{note:"When working with JDBC and collections together, you often need both Dates. Keep util.Date imported and write java.sql.Date explicitly for database queries! — Sukanta Hui"})]})}export{g as default};
