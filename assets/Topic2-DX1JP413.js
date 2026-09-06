import{j as e}from"./vendor-react-core-Doz9nIC6.js";import{J as n}from"./JavaFileLoader-BfBG3xz_.js";import{F as t}from"./FAQTemplate-BHhlgA96.js";import{P as a}from"./PlainTextPrint-C08xhKA4.js";import{T as r}from"./TeacherSukantaHui-DDN87fI5.js";import"./JavaCodeBlock-BwsLxS3r.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-DEsnU7fn.js";const o=`/**\r
 * Java Core Tutorial - Module 003_001: String Immutability & The String Constant Pool (SCP)\r
 * Topic 2: The String Constant Pool (SCP) Inside the JVM Heap Memory\r
 * Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
 */\r
\r
package com.coderaccotax.javatutorial.strings;\r
\r
public class StringConstantPoolArchitectureDemo {\r
\r
    public static void main(String[] args) {\r
        System.out.println("==========================================================================");\r
        System.out.println(" TOPIC 2: STRING CONSTANT POOL (SCP) ARCHITECTURE - BARRACKPORE");\r
        System.out.println("==========================================================================\\n");\r
\r
        System.out.println(">>> History & Evolution of SCP Location in JVM Memory:");\r
        System.out.println("  - Java 6 and earlier: SCP resided in the 'PermGen' (Permanent Generation) space.");\r
        System.out.println("    (Caused frequent 'java.lang.OutOfMemoryError: PermGen space' crashes!).");\r
        System.out.println();\r
        System.out.println("  - Java 7+: SCP was MOVED to the MAIN HEAP memory!");\r
        System.out.println("    (Benefits: Strings in SCP can now be garbage collected when unreferenced!).");\r
        System.out.println();\r
        System.out.println("  - Java 8+: PermGen completely removed and replaced by Metaspace (off-heap native RAM),");\r
        System.out.println("    while SCP remains safely in regular Heap.");\r
\r
        System.out.println("\\n==========================================================================");\r
    }\r
}`,i=`================================================================================\r
JAVA CORE TUTORIAL - QUICK REVISION GUIDE\r
Module 003_001: String Immutability & String Constant Pool\r
Topic 2: String Constant Pool Architecture\r
Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
================================================================================\r
\r
1. SCP ARCHITECTURE:\r
   - Java 6 : PermGen (Fixed size, prone to OutOfMemoryError).\r
   - Java 7+: Main Heap (Garbage collected, dynamic resizing).\r
   - Java 8+: PermGen replaced by Metaspace; SCP stays in Heap.\r
\r
================================================================================\r
Classroom Practice: Barrackpore Academy | Mentor: Sukanta Hui\r
================================================================================`,s=[{question:"Where is the String Constant Pool (SCP) located in JVM memory in modern Java (Java 7+)?",shortAnswer:"In modern Java (Java 7 and newer), the String Constant Pool (SCP) is located directly inside the main Heap memory. In Java 6 and older, it resided in PermGen, which caused memory leaks.",explanation:"Being in the Heap allows unused interned strings to be reclaimed by Garbage Collection.",hint:"Located inside the main Heap memory in Java 7+.",level:"Intermediate",codeExample:"// SCP resides in main JVM Heap, subject to standard GC"}];function y(){return e.jsxs("div",{className:"space-y-12 px-4 md:px-8 py-8 text-slate-200 bg-slate-900 min-h-screen",children:[e.jsx("style",{children:`
          @keyframes fadeIn {
            from { opacity: 0; transform: translateY(8px); }
            to { opacity: 1; transform: translateY(0); }
          }
          .animate-fade-in { animation: fadeIn 0.5s ease-out forwards; }
        `}),e.jsxs("header",{className:"space-y-4 border-b border-slate-800 pb-6 animate-fade-in",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"px-3 py-1 bg-sky-500/10 text-sky-400 border border-sky-500/20 text-xs font-semibold rounded-full uppercase tracking-wider",children:"Module 003_001 · Topic 2"}),e.jsx("span",{className:"px-3 py-1 bg-indigo-500/10 text-indigo-400 border border-indigo-500/20 text-xs font-semibold rounded-full",children:"JVM Internals"})]}),e.jsx("h1",{className:"text-xl sm:text-2xl md:text-3xl font-bold text-white tracking-tight",children:"The String Constant Pool (SCP) Inside JVM Heap Memory"}),e.jsx("p",{className:"text-base md:text-lg text-slate-400 leading-relaxed max-w-4xl",children:"Learn how the String Constant Pool evolved from Java 6 PermGen to modern Java 7+ Heap memory: enabling dynamic garbage collection and preventing memory leaks."})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsxs("h2",{className:"text-2xl font-bold text-emerald-400 flex items-center gap-2",children:[e.jsx("span",{children:"💻"})," Hands-On Java Demo Code"]}),e.jsx(n,{fileModule:o,title:"StringConstantPoolArchitectureDemo.java",highlightLines:[7,13,16,19]})]}),e.jsx("section",{className:"space-y-4",children:e.jsx(t,{title:"SCP Architecture FAQs",questions:s})}),e.jsx("section",{className:"space-y-4",children:e.jsx(a,{content:i,title:"Module 003_001 Topic 2: SCP Architecture",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Printable Note",downloadFileName:"003_001_topic2_scp_architecture_note.txt"})}),e.jsx(r,{note:"Remember in your interviews: Since Java 7, the String Constant Pool lives inside the normal Garbage-Collected Heap, NOT PermGen or Metaspace! — Sukanta Hui"})]})}export{y as default};
