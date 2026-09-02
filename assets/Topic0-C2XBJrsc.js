import{j as e}from"./vendor-react-core-Doz9nIC6.js";import{J as t}from"./JavaFileLoader-BfBG3xz_.js";import{F as r}from"./FAQTemplate-BHhlgA96.js";import{P as n}from"./PlainTextPrint-C08xhKA4.js";import{T as s}from"./TeacherSukantaHui-RpFLNJ5A.js";import"./JavaCodeBlock-BwsLxS3r.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-wprqVFW_.js";const i=`/**\r
 * Java Core Tutorial - Module 003_003: Wrapper Classes, Autoboxing & Number Parsing\r
 * Topic 0: Why Wrapper Classes Exist: Collections Compatibility & Null Support\r
 * Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
 */\r
\r
package com.coderaccotax.javatutorial.wrappers;\r
\r
import java.util.ArrayList;\r
import java.util.List;\r
\r
public class WhyWrapperClassesExistDemo {\r
\r
    public static void main(String[] args) {\r
        System.out.println("==========================================================================");\r
        System.out.println(" TOPIC 0: WHY WRAPPER CLASSES EXIST - BARRACKPORE");\r
        System.out.println("==========================================================================\\n");\r
\r
        System.out.println(">>> The 3 Fundamental Reasons Java Has Wrapper Classes:");\r
        System.out.println();\r
        System.out.println("  1. COLLECTIONS FRAMEWORK COMPATIBILITY:");\r
        System.out.println("     Java Collections (List, Set, Map) can ONLY hold Objects, NOT primitives!");\r
        System.out.println("     - 'List<int> list'      -> ILLEGAL / COMPILE ERROR!");\r
        System.out.println("     - 'List<Integer> list'  -> VALID & STANDARD!");\r
\r
        List<Integer> rollNumbers = new ArrayList<>();\r
        rollNumbers.add(101);\r
        rollNumbers.add(102);\r
        System.out.println("     Enrolled Roll Numbers in List<Integer>: " + rollNumbers);\r
\r
        System.out.println();\r
        System.out.println("  2. NULL REPRESENTATION IN ENTERPRISE DATABASES:");\r
        System.out.println("     A primitive 'int' defaults to 0 (cannot be null).");\r
        System.out.println("     An 'Integer' can be NULL, representing an unassigned database column!");\r
\r
        Integer unassignedExamScore = null; // Represents missing/unattempted test\r
        System.out.println("     Unassigned Exam Score: " + unassignedExamScore);\r
\r
        System.out.println();\r
        System.out.println("  3. RICH UTILITY METHODS & PARSING:");\r
        System.out.println("     Integer.parseInt("42"), Double.MAX_VALUE, Integer.toBinaryString(255).");\r
\r
        System.out.println("\\n==========================================================================");\r
    }\r
}`,a=`================================================================================\r
JAVA CORE TUTORIAL - QUICK REVISION GUIDE\r
Module 003_003: Wrapper Classes & Autoboxing\r
Topic 0: Why Wrapper Classes Exist\r
Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
================================================================================\r
\r
1. WRAPPER CLASS REASONS:\r
   - Collections / Generics only store Objects ('List<Integer>').\r
   - Support 'null' for optional database columns and forms.\r
   - Supply static parsing utilities (parseInt, parseDouble).\r
\r
================================================================================\r
Classroom Practice: Barrackpore Academy | Mentor: Sukanta Hui\r
================================================================================`,o=[{question:"What are the 3 primary reasons why Java provides Wrapper Classes for primitives?",shortAnswer:"1. Collections Framework compatibility (generics require Objects like 'List<Integer>', not 'List<int>'). 2. Null representation (useful for database columns and uninitialized DTO fields). 3. Utility methods (parsing, binary conversion, MIN/MAX constants).",explanation:"Wrapper classes bridge the gap between high-performance primitives and object polymorphism.",hint:"Collections require objects, allows nulls in DB fields, and provides conversion utilities.",level:"Beginner",codeExample:"List<Integer> numbers = new ArrayList<>(); // Primitives not allowed in generics"}];function y(){return e.jsxs("div",{className:"space-y-12 px-4 md:px-8 py-8 text-slate-200 bg-slate-900 min-h-screen",children:[e.jsxs("header",{className:"space-y-4 border-b border-slate-800 pb-6",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"px-3 py-1 bg-sky-500/10 text-sky-400 border border-sky-500/20 text-xs font-semibold rounded-full uppercase tracking-wider",children:"Module 003_003 · Topic 0"}),e.jsx("span",{className:"px-3 py-1 bg-indigo-500/10 text-indigo-400 border border-indigo-500/20 text-xs font-semibold rounded-full",children:"Type System Bridge"})]}),e.jsx("h1",{className:"text-xl sm:text-2xl md:text-3xl font-bold text-white tracking-tight",children:"Why Wrapper Classes Exist: Collections Compatibility & Null Support"}),e.jsxs("p",{className:"text-base md:text-lg text-slate-400 leading-relaxed max-w-4xl",children:["Discover why Java provides object wrappers for all eight primitive types: bridging primitives with Collections, representing SQL ",e.jsx("code",{className:"text-amber-400 font-mono",children:"NULL"}),", and providing parsing utilities."]})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsxs("h2",{className:"text-2xl font-bold text-emerald-400 flex items-center gap-2",children:[e.jsx("span",{children:"💻"})," Hands-On Java Demo Code"]}),e.jsx(t,{fileModule:i,title:"WhyWrapperClassesExistDemo.java",highlightLines:[7,18,19,26,31]})]}),e.jsx("section",{className:"space-y-4",children:e.jsx(r,{title:"Wrapper Classes FAQs",questions:o})}),e.jsx("section",{className:"space-y-4",children:e.jsx(n,{content:a,title:"Module 003_003 Topic 0: Why Wrapper Classes Exist",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Printable Note",downloadFileName:"003_003_topic0_why_wrappers_note.txt"})}),e.jsx(s,{note:"If a student skipped an exam, an int score defaults to 0, which looks like a failing grade! An Integer can be null, accurately recording that the test was never attempted. — Sukanta Hui"})]})}export{y as default};
