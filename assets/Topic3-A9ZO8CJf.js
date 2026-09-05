import{j as e}from"./vendor-react-core-Doz9nIC6.js";import{J as t}from"./JavaFileLoader-BfBG3xz_.js";import{F as r}from"./FAQTemplate-BHhlgA96.js";import{P as n}from"./PlainTextPrint-C08xhKA4.js";import{T as a}from"./TeacherSukantaHui-DerPxfxp.js";import"./JavaCodeBlock-BwsLxS3r.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-CH1iX9C8.js";const i=`/**\r
 * Java Core Tutorial - Module 003_002: StringBuilder, StringBuffer & String Formatting\r
 * Topic 3: Detailed Comparison: String vs StringBuilder vs StringBuffer\r
 * Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
 */\r
\r
package com.coderaccotax.javatutorial.stringbuilder;\r
\r
public class StringVsBuilderVsBufferComparisonDemo {\r
\r
    public static void main(String[] args) {\r
        System.out.println("==========================================================================");\r
        System.out.println(" TOPIC 3: String vs StringBuilder vs StringBuffer - BARRACKPORE");\r
        System.out.println("==========================================================================\\n");\r
\r
        System.out.println("+-------------------+-------------------+-------------------+-------------------+");\r
        System.out.println("| Feature           | String            | StringBuilder     | StringBuffer      |");\r
        System.out.println("+-------------------+-------------------+-------------------+-------------------+");\r
        System.out.println("| Storage / Memory  | SCP & Heap        | Heap only         | Heap only         |");\r
        System.out.println("| Mutability        | IMMUTABLE         | MUTABLE           | MUTABLE           |");\r
        System.out.println("| Thread-Safety     | Thread-Safe (imm) | NOT Thread-Safe   | THREAD-SAFE (sync)|");\r
        System.out.println("| Performance       | Slow in loops     | FASTEST (No locks)| Moderate (Locking)|");\r
        System.out.println("| Introduced In     | Java 1.0          | Java 5.0          | Java 1.0          |");\r
        System.out.println("+-------------------+-------------------+-------------------+-------------------+");\r
\r
        System.out.println("\\n>>> Summary Selection Guide:");\r
        System.out.println("  1. Choose String        : For constants, keys, DTO fields, and small fixed text.");\r
        System.out.println("  2. Choose StringBuilder : For local method string assembly, loops, and building JSON/SQL.");\r
        System.out.println("  3. Choose StringBuffer  : Only for legacy multi-threaded shared buffers.");\r
\r
        System.out.println("\\n==========================================================================");\r
    }\r
}`,s=`================================================================================\r
JAVA CORE TUTORIAL - QUICK REVISION GUIDE\r
Module 003_002: StringBuilder, StringBuffer & String Formatting\r
Topic 3: String vs StringBuilder vs StringBuffer\r
Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
================================================================================\r
\r
+-------------------+-------------------+-------------------+-------------------+\r
| Feature           | String            | StringBuilder     | StringBuffer      |\r
+-------------------+-------------------+-------------------+-------------------+\r
| Mutability        | Immutable         | Mutable           | Mutable           |\r
| Thread Safety     | Yes (By nature)   | No                | Yes (Synchronized)|\r
| Speed             | Slow in loops     | Fastest           | Moderate          |\r
| Pool Storage      | Yes (SCP)         | No (Heap)         | No (Heap)         |\r
+-------------------+-------------------+-------------------+-------------------+\r
\r
================================================================================\r
Classroom Practice: Barrackpore Academy | Mentor: Sukanta Hui\r
================================================================================`,o=[{question:"Summarize the differences between String, StringBuilder, and StringBuffer in Java.",shortAnswer:"1. String: Immutable, thread-safe, uses Constant Pool. 2. StringBuilder: Mutable, NOT thread-safe, fastest performance (Java 5). 3. StringBuffer: Mutable, thread-safe (synchronized), slower performance (Java 1.0).",explanation:"This 3-way showdown is one of the top 5 most frequently asked Java interview questions.",hint:"String (immutable), StringBuilder (mutable, unsynchronized, fast), StringBuffer (mutable, synchronized).",level:"Beginner",codeExample:"// String (constant) vs StringBuilder (fast loop) vs StringBuffer (thread safe)"}];function g(){return e.jsxs("div",{className:"space-y-12 px-4 md:px-8 py-8 text-slate-200 bg-slate-900 min-h-screen",children:[e.jsxs("header",{className:"space-y-4 border-b border-slate-800 pb-6",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"px-3 py-1 bg-sky-500/10 text-sky-400 border border-sky-500/20 text-xs font-semibold rounded-full uppercase tracking-wider",children:"Module 003_002 · Topic 3"}),e.jsx("span",{className:"px-3 py-1 bg-indigo-500/10 text-indigo-400 border border-indigo-500/20 text-xs font-semibold rounded-full",children:"Mastery Matrix"})]}),e.jsxs("h1",{className:"text-xl sm:text-2xl md:text-3xl font-bold text-white tracking-tight",children:["Comparison Table: ",e.jsx("code",{className:"text-sky-400 font-mono",children:"String"})," vs ",e.jsx("code",{className:"text-emerald-400 font-mono",children:"StringBuilder"})," vs ",e.jsx("code",{className:"text-amber-400 font-mono",children:"StringBuffer"})]}),e.jsx("p",{className:"text-base md:text-lg text-slate-400 leading-relaxed max-w-4xl",children:"Master the complete feature matrix: mutability, thread-safety, heap footprint, and performance trade-offs across Java's three textual representations."})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsxs("h2",{className:"text-2xl font-bold text-emerald-400 flex items-center gap-2",children:[e.jsx("span",{children:"💻"})," Hands-On Java Demo Code"]}),e.jsx(t,{fileModule:i,title:"StringVsBuilderVsBufferComparisonDemo.java",highlightLines:[7,14,15,16,17,18,23,24,25]})]}),e.jsx("section",{className:"space-y-4",children:e.jsx(r,{title:"Comparison Matrix FAQs",questions:o})}),e.jsx("section",{className:"space-y-4",children:e.jsx(n,{content:s,title:"Module 003_002 Topic 3: String Comparison Table",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Printable Note",downloadFileName:"003_002_topic3_comparison_matrix_note.txt"})}),e.jsx(a,{note:"If it never changes, use String. If you are constructing it inside a single method, use StringBuilder. If 10 threads are writing to it at once, use StringBuffer! — Sukanta Hui"})]})}export{g as default};
