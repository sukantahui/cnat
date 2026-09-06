import{j as e}from"./vendor-react-core-Doz9nIC6.js";import{J as t}from"./JavaFileLoader-BfBG3xz_.js";import{F as n}from"./FAQTemplate-BHhlgA96.js";import{P as r}from"./PlainTextPrint-C08xhKA4.js";import{T as a}from"./TeacherSukantaHui-DDN87fI5.js";import"./JavaCodeBlock-BwsLxS3r.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-DEsnU7fn.js";const s=`/**\r
 * Java Core Tutorial - Module 003_001: String Immutability & The String Constant Pool (SCP)\r
 * Topic 3: How JVM Optimizes Memory by Reusing Identical String Literals\r
 * Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
 */\r
\r
package com.coderaccotax.javatutorial.strings;\r
\r
public class LiteralReuseOptimizationDemo {\r
\r
    public static void main(String[] args) {\r
        System.out.println("==========================================================================");\r
        System.out.println(" TOPIC 3: SCP LITERAL REUSE OPTIMIZATION - BARRACKPORE");\r
        System.out.println("==========================================================================\\n");\r
\r
        // Imagine 10,000 students enrolled in 'Barrackpore Hub':\r
        String hub1 = "Barrackpore";\r
        String hub2 = "Barrackpore";\r
        String hub3 = "Barrackpore";\r
        String hub4 = "Barrackpore";\r
\r
        System.out.println(">>> 1. Verifying Reference Sharing across 4 variables:");\r
        System.out.println("  hub1 == hub2: " + (hub1 == hub2));\r
        System.out.println("  hub2 == hub3: " + (hub2 == hub3));\r
        System.out.println("  hub3 == hub4: " + (hub3 == hub4));\r
\r
        System.out.println("\\n>>> 2. Memory Savings Analysis:");\r
        System.out.println("  - Without SCP : 10,000 separate String objects created on Heap.");\r
        System.out.println("  - With SCP    : EXACTLY 1 String object created in SCP; 10,000 pointers reference it!");\r
        System.out.println("  - Memory saved: Over 99.9% RAM conservation for repeated keys, city names, status tags.");\r
\r
        System.out.println("\\n==========================================================================");\r
    }\r
}`,i=`================================================================================\r
JAVA CORE TUTORIAL - QUICK REVISION GUIDE\r
Module 003_001: String Immutability & String Constant Pool\r
Topic 3: SCP Literal Reuse Optimization\r
Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
================================================================================\r
\r
1. SCP REUSE MECHANISM:\r
   - When a literal is encountered, JVM checks if it exists in SCP.\r
   - If present → Returns existing pooled reference.\r
   - If absent  → Creates new string in SCP and returns reference.\r
   - Flyweight design pattern implemented at JVM bytecode level.\r
\r
================================================================================\r
Classroom Practice: Barrackpore Academy | Mentor: Sukanta Hui\r
================================================================================`,o=[{question:"How does String Constant Pool sharing optimize memory in enterprise applications?",shortAnswer:"Instead of allocating thousands of separate objects for identical strings (e.g. status 'ACTIVE' or city 'Barrackpore'), the JVM creates a single instance in the SCP and points all references to it, saving immense Heap memory.",explanation:"This is a direct application of the Flyweight Design Pattern.",hint:"Reuses a single pooled instance across thousands of references (Flyweight Pattern).",level:"Beginner",codeExample:'String s1 = "ACTIVE"; String s2 = "ACTIVE"; // Shares 1 pool instance'}];function x(){return e.jsxs("div",{className:"space-y-12 px-4 md:px-8 py-8 text-slate-200 bg-slate-900 min-h-screen",children:[e.jsx("style",{children:`
          @keyframes fadeIn {
            from { opacity: 0; transform: translateY(8px); }
            to { opacity: 1; transform: translateY(0); }
          }
          .animate-fade-in { animation: fadeIn 0.5s ease-out forwards; }
        `}),e.jsxs("header",{className:"space-y-4 border-b border-slate-800 pb-6 animate-fade-in",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"px-3 py-1 bg-sky-500/10 text-sky-400 border border-sky-500/20 text-xs font-semibold rounded-full uppercase tracking-wider",children:"Module 003_001 · Topic 3"}),e.jsx("span",{className:"px-3 py-1 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-xs font-semibold rounded-full",children:"Flyweight Pattern"})]}),e.jsx("h1",{className:"text-xl sm:text-2xl md:text-3xl font-bold text-white tracking-tight",children:"How JVM Optimizes Memory by Reusing Identical String Literals"}),e.jsx("p",{className:"text-base md:text-lg text-slate-400 leading-relaxed max-w-4xl",children:"Discover how the Flyweight pattern in JVM memory allows thousands of references to share a single String Constant Pool instance: saving gigabytes of heap RAM in production."})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsxs("h2",{className:"text-2xl font-bold text-emerald-400 flex items-center gap-2",children:[e.jsx("span",{children:"💻"})," Hands-On Java Demo Code"]}),e.jsx(t,{fileModule:s,title:"LiteralReuseOptimizationDemo.java",highlightLines:[7,15,16,17,18,22,23,24]})]}),e.jsx("section",{className:"space-y-4",children:e.jsx(n,{title:"Literal Reuse FAQs",questions:o})}),e.jsx("section",{className:"space-y-4",children:e.jsx(r,{content:i,title:"Module 003_001 Topic 3: Literal Reuse Optimization",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Printable Note",downloadFileName:"003_001_topic3_literal_reuse_note.txt"})}),e.jsx(a,{note:"If 5000 students at our Barrackpore academy have 'West Bengal' as their state, Java only creates ONE 'West Bengal' string in RAM! All 5000 students point to that single object. — Sukanta Hui"})]})}export{x as default};
