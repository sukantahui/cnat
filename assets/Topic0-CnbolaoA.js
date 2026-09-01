import{j as e}from"./vendor-react-core-Doz9nIC6.js";import{J as t}from"./JavaFileLoader-BfBG3xz_.js";import{F as r}from"./FAQTemplate-BHhlgA96.js";import{P as n}from"./PlainTextPrint-C08xhKA4.js";import{T as a}from"./TeacherSukantaHui-CEPuAfsb.js";import"./JavaCodeBlock-BwsLxS3r.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-DGCamHnX.js";const i=`/**\r
 * Java Core Tutorial - Module 003_002: StringBuilder, StringBuffer & String Formatting\r
 * Topic 0: Why Mutable String Builders Are Essential: Avoiding Heap Garbage Creation\r
 * Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
 */\r
\r
package com.coderaccotax.javatutorial.stringbuilder;\r
\r
public class WhyStringBuildersAreEssentialDemo {\r
\r
    public static void main(String[] args) {\r
        System.out.println("==========================================================================");\r
        System.out.println(" TOPIC 0: WHY MUTABLE STRING BUILDERS ARE ESSENTIAL - BARRACKPORE");\r
        System.out.println("==========================================================================\\n");\r
\r
        System.out.println(">>> The Problem of String Immutability during Concatenation:");\r
        System.out.println("  - When you write: String s = "A"; s += "B"; s += "C";");\r
        System.out.println("  - The JVM creates 3 separate String objects on the Heap: "A", "AB", and "ABC"!");\r
        System.out.println("  - In high-throughput servers (handling 10,000 req/sec), this triggers massive Garbage Collection (GC) pauses.");\r
        System.out.println();\r
        System.out.println(">>> The Solution: java.lang.StringBuilder / StringBuffer");\r
        System.out.println("  - Wraps a MUTABLE, growable internal byte/char buffer.");\r
        System.out.println("  - Modifies characters in-place inside the SAME memory buffer.");\r
        System.out.println("  - Zero intermediate garbage objects created during assembly!");\r
\r
        System.out.println("\\n==========================================================================");\r
    }\r
}`,s=`================================================================================\r
JAVA CORE TUTORIAL - QUICK REVISION GUIDE\r
Module 003_002: StringBuilder, StringBuffer & String Formatting\r
Topic 0: Why Mutable String Builders Are Essential\r
Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
================================================================================\r
\r
1. MUTABLE STRING ESSENTIALS:\r
   - String is Immutable (new object on every mutation).\r
   - StringBuilder is Mutable (mutates internal buffer in-place).\r
   - Dramatically reduces Heap churn and Garbage Collection pauses.\r
\r
================================================================================\r
Classroom Practice: Barrackpore Academy | Mentor: Sukanta Hui\r
================================================================================`,l=[{question:"Why are mutable string builders (StringBuilder/StringBuffer) essential in Java backend development?",shortAnswer:"Because Java Strings are immutable, concatenating strings creates temporary intermediate objects on the Heap. Mutable builders maintain a resizable internal buffer that mutates characters in-place, eliminating GC garbage pressure.",explanation:"Essential for building complex JSON payloads, HTML reports, and SQL queries.",hint:"Mutates characters in-place inside an internal buffer without creating intermediate garbage.",level:"Beginner",codeExample:'StringBuilder sb = new StringBuilder(); sb.append("data");'}];function h(){return e.jsxs("div",{className:"space-y-12 px-4 md:px-8 py-8 text-slate-200 bg-slate-900 min-h-screen",children:[e.jsxs("header",{className:"space-y-4 border-b border-slate-800 pb-6",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"px-3 py-1 bg-sky-500/10 text-sky-400 border border-sky-500/20 text-xs font-semibold rounded-full uppercase tracking-wider",children:"Module 003_002 · Topic 0"}),e.jsx("span",{className:"px-3 py-1 bg-indigo-500/10 text-indigo-400 border border-indigo-500/20 text-xs font-semibold rounded-full",children:"Buffer Architecture"})]}),e.jsx("h1",{className:"text-xl sm:text-2xl md:text-3xl font-bold text-white tracking-tight",children:"Why Mutable String Builders Are Essential: Avoiding Heap Garbage"}),e.jsx("p",{className:"text-base md:text-lg text-slate-400 leading-relaxed max-w-4xl",children:"Discover why high-throughput backend applications replace immutable string concatenation with mutable internal buffers: eliminating GC churn and memory thrashing."})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsxs("h2",{className:"text-2xl font-bold text-emerald-400 flex items-center gap-2",children:[e.jsx("span",{children:"💻"})," Hands-On Java Demo Code"]}),e.jsx(t,{fileModule:i,title:"WhyStringBuildersAreEssentialDemo.java",highlightLines:[7,13,14,15,18,19,20]})]}),e.jsx("section",{className:"space-y-4",children:e.jsx(r,{title:"Mutable String Builders FAQs",questions:l})}),e.jsx("section",{className:"space-y-4",children:e.jsx(n,{content:s,title:"Module 003_002 Topic 0: Mutable String Builders",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Printable Note",downloadFileName:"003_002_topic0_why_stringbuilder_note.txt"})}),e.jsx(a,{note:"Whenever you are building a string with more than 3 steps, always switch to StringBuilder! It modifies its internal array directly without creating temporary junk objects on the Heap. — Sukanta Hui"})]})}export{h as default};
