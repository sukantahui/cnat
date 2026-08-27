import{j as e}from"./vendor-react-core-Doz9nIC6.js";import{J as n}from"./JavaFileLoader-BfBG3xz_.js";import{F as r}from"./FAQTemplate-CkSqDH4B.js";import{P as t}from"./PlainTextPrint-C08xhKA4.js";import{T as a}from"./TeacherSukantaHui-CC0AKmkm.js";import"./JavaCodeBlock-BwsLxS3r.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-BtJHuk7w.js";const i=`/**\r
 * Java Core Tutorial - Module 003_002: StringBuilder, StringBuffer & String Formatting\r
 * Topic 1: java.lang.StringBuilder: Architecture, Un-synchronized Performance & Usage\r
 * Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
 */\r
\r
package com.coderaccotax.javatutorial.stringbuilder;\r
\r
public class StringBuilderFoundationsDemo {\r
\r
    public static void main(String[] args) {\r
        System.out.println("==========================================================================");\r
        System.out.println(" TOPIC 1: java.lang.StringBuilder ARCHITECTURE - BARRACKPORE");\r
        System.out.println("==========================================================================\\n");\r
\r
        // 1. Initializing StringBuilder with default capacity (16 chars):\r
        StringBuilder sb = new StringBuilder();\r
\r
        System.out.println(">>> 1. Initial Buffer State:");\r
        System.out.println("  sb.length()   : " + sb.length() + " characters");\r
        System.out.println("  sb.capacity() : " + sb.capacity() + " buffer capacity");\r
\r
        // 2. Appending mixed datatypes in-place:\r
        sb.append("Trainee: ").append("Swadeep Paul");\r
        sb.append(" | Score: ").append(98.5);\r
        sb.append(" | Enrolled: ").append(true);\r
\r
        System.out.println("\\n>>> 2. Buffer State After In-Place Mutation:");\r
        System.out.println("  sb.toString() : "" + sb.toString() + """);\r
        System.out.println("  sb.length()   : " + sb.length() + " chars");\r
        System.out.println("  sb.capacity() : " + sb.capacity() + " buffer capacity");\r
\r
        System.out.println("\\n>>> Key Trait: StringBuilder is NOT synchronized (High speed single-threaded execution).");\r
\r
        System.out.println("\\n==========================================================================");\r
    }\r
}`,s=`================================================================================\r
JAVA CORE TUTORIAL - QUICK REVISION GUIDE\r
Module 003_002: StringBuilder, StringBuffer & String Formatting\r
Topic 1: java.lang.StringBuilder\r
Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
================================================================================\r
\r
1. STRINGBUILDER KEY FACTS:\r
   - Introduced in Java 5.\r
   - Mutable, growable character buffer.\r
   - NOT synchronized &rarr; Zero locking overhead (Maximum speed).\r
   - Default initial capacity = 16 characters.\r
\r
================================================================================\r
Classroom Practice: Barrackpore Academy | Mentor: Sukanta Hui\r
================================================================================`,o=[{question:"Why was 'StringBuilder' introduced in Java 5 alongside the existing 'StringBuffer'?",shortAnswer:"'StringBuilder' was introduced to provide an unsynchronized (non-thread-safe) alternative to StringBuffer. Because 99% of string construction happens locally within a single method, removing synchronization overhead made StringBuilder significantly faster.",explanation:"StringBuilder is the default choice for single-threaded string assembly.",hint:"Introduced in Java 5 as a faster, unsynchronized replacement for StringBuffer in single threads.",level:"Beginner",codeExample:"StringBuilder sb = new StringBuilder(); // Fast & unsynchronized"}];function f(){return e.jsxs("div",{className:"space-y-12 px-4 md:px-8 py-8 text-slate-200 bg-slate-900 min-h-screen",children:[e.jsxs("header",{className:"space-y-4 border-b border-slate-800 pb-6",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"px-3 py-1 bg-sky-500/10 text-sky-400 border border-sky-500/20 text-xs font-semibold rounded-full uppercase tracking-wider",children:"Module 003_002 · Topic 1"}),e.jsx("span",{className:"px-3 py-1 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-xs font-semibold rounded-full",children:"High-Performance Mutable Buffer"})]}),e.jsxs("h1",{className:"text-3xl md:text-4xl font-extrabold text-white tracking-tight",children:[e.jsx("code",{className:"text-emerald-400 font-mono",children:"java.lang.StringBuilder"}),": Un-synchronized Performance & Usage"]}),e.jsx("p",{className:"text-base md:text-lg text-slate-400 leading-relaxed max-w-4xl",children:"Master the standard high-performance string builder in Java: buffer allocations, method chaining, and unsynchronized speed optimizations introduced in Java 5."})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsxs("h2",{className:"text-2xl font-bold text-emerald-400 flex items-center gap-2",children:[e.jsx("span",{children:"💻"})," Hands-On Java Demo Code"]}),e.jsx(n,{fileModule:i,title:"StringBuilderFoundationsDemo.java",highlightLines:[7,15,18,19,23,24,27]})]}),e.jsx("section",{className:"space-y-4",children:e.jsx(r,{title:"StringBuilder FAQs",questions:o})}),e.jsx("section",{className:"space-y-4",children:e.jsx(t,{content:s,title:"Module 003_002 Topic 1: StringBuilder Usage",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Printable Note",downloadFileName:"003_002_topic1_stringbuilder_note.txt"})}),e.jsx(a,{note:"Unless multiple background threads are writing to the exact same buffer at the same microsecond, always use StringBuilder! It is much faster than the legacy StringBuffer. — Sukanta Hui"})]})}export{f as default};
