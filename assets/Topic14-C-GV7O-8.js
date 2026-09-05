import{j as e}from"./vendor-react-core-Doz9nIC6.js";import{J as t}from"./JavaFileLoader-BfBG3xz_.js";import{F as n}from"./FAQTemplate-BHhlgA96.js";import{P as r}from"./PlainTextPrint-C08xhKA4.js";import{T as a}from"./TeacherSukantaHui-DerPxfxp.js";import"./JavaCodeBlock-BwsLxS3r.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-CH1iX9C8.js";const i=`/**\r
 * Java Core Tutorial - Module 003_001: String Immutability & The String Constant Pool (SCP)\r
 * Topic 14: Performance Pitfalls of Repeated String Concatenation in Loops (Capstone)\r
 * Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
 */\r
\r
package com.coderaccotax.javatutorial.strings;\r
\r
public class StringConcatenationPitfallsCapstoneDemo {\r
\r
    public static void main(String[] args) {\r
        System.out.println("==========================================================================");\r
        System.out.println(" TOPIC 14: STRING CONCATENATION PITFALLS CAPSTONE - BARRACKPORE");\r
        System.out.println("==========================================================================\\n");\r
\r
        int iterations = 10000;\r
\r
        // 1. BAD PRACTICE: Repeated '+' concatenation in loop -> O(N^2) Quadratic Heap Garbage!\r
        long start1 = System.currentTimeMillis();\r
        String result = "";\r
        for (int i = 0; i < iterations; i++) {\r
            result += i; // Allocates 10,000 intermediate StringBuilder & String instances on Heap!\r
        }\r
        long time1 = System.currentTimeMillis() - start1;\r
        System.out.println(">>> 1. String '+' Concatenation in Loop (10,000 iterations):");\r
        System.out.printf("  Execution Time: %d ms | Heap Garbage: ~50 MB wasted!\\n", time1);\r
\r
        // 2. BEST PRACTICE: Using StringBuilder -> O(N) Linear Time & 1 Heap Allocation!\r
        long start2 = System.currentTimeMillis();\r
        StringBuilder sb = new StringBuilder(iterations * 4); // Pre-sized buffer!\r
        for (int i = 0; i < iterations; i++) {\r
            sb.append(i); // Mutates internal byte buffer with zero garbage!\r
        }\r
        String efficientResult = sb.toString();\r
        long time2 = System.currentTimeMillis() - start2;\r
        System.out.println("\\n>>> 2. StringBuilder.append() (10,000 iterations):");\r
        System.out.printf("  Execution Time: %d ms | (Over 100x Faster!)\\n", time2);\r
\r
        System.out.println("\\n==========================================================================");\r
        System.out.println(" MODULE 003_001 STRING IMMUTABILITY & SCP 100% COMPLETE!");\r
        System.out.println("==========================================================================");\r
    }\r
}`,o=`================================================================================\r
JAVA CORE TUTORIAL - QUICK REVISION GUIDE\r
Module 003_001: String Immutability & String Constant Pool\r
Topic 14: String Concatenation Pitfalls Capstone\r
Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
================================================================================\r
\r
1. MODULE 003_001 SUMMARY:\r
   - String is an immutable object wrapping a compact 'byte[]' (Java 9+).\r
   - Literals are pooled in the String Constant Pool (SCP) in Heap memory.\r
   - Immutability provides security, thread-safety, SCP sharing, and hash caching.\r
   - Always compare with '.equals()', never with '=='.\r
   - Use 'StandardCharsets.UTF_8' for byte conversions.\r
   - Never use '+' in loops; use 'StringBuilder.append()'.\r
\r
================================================================================\r
Classroom Practice: Barrackpore Academy | Mentor: Sukanta Hui\r
================================================================================`,s=[{question:"Why does repeated String concatenation ('s += i') inside a loop cause severe O(N^2) performance degradation?",shortAnswer:"Because Strings are immutable, each '+' inside a loop instantiates a new StringBuilder, copies all previous characters, and creates a new String object. Over N iterations, it copies N*(N+1)/2 characters, creating quadratic O(N^2) CPU overhead and massive GC pressure.",explanation:"Always use StringBuilder or StringBuffer for loop concatenation.",hint:"Copies previous characters repeatedly, resulting in O(N^2) time complexity.",level:"Advanced",codeExample:"StringBuilder sb = new StringBuilder(); for (...) sb.append(item);"}];function S(){return e.jsxs("div",{className:"space-y-12 px-4 md:px-8 py-8 text-slate-200 bg-slate-900 min-h-screen",children:[e.jsx("style",{children:`
          @keyframes fadeIn {
            from { opacity: 0; transform: translateY(8px); }
            to { opacity: 1; transform: translateY(0); }
          }
          .animate-fade-in { animation: fadeIn 0.5s ease-out forwards; }
        `}),e.jsxs("header",{className:"space-y-4 border-b border-slate-800 pb-6 animate-fade-in",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"px-3 py-1 bg-sky-500/10 text-sky-400 border border-sky-500/20 text-xs font-semibold rounded-full uppercase tracking-wider",children:"Module 003_001 · Topic 14"}),e.jsx("span",{className:"px-3 py-1 bg-rose-500/10 text-rose-400 border border-rose-500/20 text-xs font-semibold rounded-full",children:"Performance Capstone"})]}),e.jsx("h1",{className:"text-xl sm:text-2xl md:text-3xl font-bold text-white tracking-tight",children:"Performance Pitfalls of Repeated String Concatenation in Loops"}),e.jsxs("p",{className:"text-base md:text-lg text-slate-400 leading-relaxed max-w-4xl",children:["Benchmark and diagnose the infamous ",e.jsx("code",{className:"text-rose-400 font-mono",children:"O(N^2)"})," string concatenation trap: comparing loop garbage generation against high-throughput ",e.jsx("code",{className:"text-emerald-300 font-mono",children:"StringBuilder"})," pipelines."]})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsxs("h2",{className:"text-2xl font-bold text-emerald-400 flex items-center gap-2",children:[e.jsx("span",{children:"💻"})," Hands-On Java Demo Code"]}),e.jsx(t,{fileModule:i,title:"StringConcatenationPitfallsCapstoneDemo.java",highlightLines:[7,16,17,24,26,28]})]}),e.jsx("section",{className:"space-y-4",children:e.jsx(n,{title:"Loop Concatenation FAQs",questions:s})}),e.jsx("section",{className:"space-y-4",children:e.jsx(r,{content:o,title:"Module 003_001 Topic 14: Concatenation Pitfalls",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Printable Note",downloadFileName:"003_001_topic14_concatenation_pitfalls_note.txt"})}),e.jsx(a,{note:"Congratulations on completing Module 003_001! You have mastered the entire lifecycle of Java Strings, String Constant Pool mechanics, immutability benefits, and performance optimization rules! — Sukanta Hui"})]})}export{S as default};
