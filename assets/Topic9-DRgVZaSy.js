import{j as e}from"./vendor-react-core-Doz9nIC6.js";import{J as r}from"./JavaFileLoader-BfBG3xz_.js";import{F as t}from"./FAQTemplate-BHhlgA96.js";import{P as n}from"./PlainTextPrint-C08xhKA4.js";import{T as i}from"./TeacherSukantaHui-DerPxfxp.js";import"./JavaCodeBlock-BwsLxS3r.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-CH1iX9C8.js";const o=`/**\r
 * Java Core Tutorial - Module 003_003: Wrapper Classes, Autoboxing & Number Parsing\r
 * Topic 9: Performance Costs of Autoboxing in Tight Loops (Memory Churn Benchmark)\r
 * Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
 */\r
\r
package com.coderaccotax.javatutorial.wrappers;\r
\r
public class AutoboxingLoopPerformanceBenchmarkDemo {\r
\r
    public static void main(String[] args) {\r
        System.out.println("==========================================================================");\r
        System.out.println(" TOPIC 9: AUTOBOXING LOOP PERFORMANCE BENCHMARK - BARRACKPORE");\r
        System.out.println("==========================================================================\\n");\r
\r
        int iterations = 10_000_000;\r
\r
        // 1. BAD PRACTICE: Using 'Long' wrapper in loop summation (Triggers 10M Object Allocations!):\r
        long start1 = System.currentTimeMillis();\r
        Long boxedSum = 0L; // Wrapper object on Heap!\r
        for (long i = 0; i < iterations; i++) {\r
            boxedSum += i; // Unboxes -> Adds -> Allocates BRAND NEW Long(sum) on Heap!\r
        }\r
        long time1 = System.currentTimeMillis() - start1;\r
\r
        System.out.println(">>> 1. Summation with Autoboxed 'Long' Wrapper:");\r
        System.out.printf("  Sum: %d | Time: %d ms (Created 10 Million temporary Heap objects!)\\n", boxedSum, time1);\r
\r
        // 2. BEST PRACTICE: Using primitive 'long' on CPU Stack:\r
        long start2 = System.currentTimeMillis();\r
        long primitiveSum = 0L; // Primitive in CPU register / Stack!\r
        for (long i = 0; i < iterations; i++) {\r
            primitiveSum += i; // Pure 64-bit ALU CPU addition with ZERO garbage!\r
        }\r
        long time2 = System.currentTimeMillis() - start2;\r
\r
        System.out.println("\\n>>> 2. Summation with Primitive 'long':");\r
        System.out.printf("  Sum: %d | Time: %d ms (Over 10x Faster! Zero GC Churn!)\\n", primitiveSum, time2);\r
\r
        System.out.println("\\n==========================================================================");\r
    }\r
}`,a=`================================================================================\r
JAVA CORE TUTORIAL - QUICK REVISION GUIDE\r
Module 003_003: Wrapper Classes & Autoboxing\r
Topic 9: Autoboxing Performance in Loops\r
Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
================================================================================\r
\r
1. PERFORMANCE RULES:\r
   - Primitives: Fast, CPU register execution, zero GC impact.\r
   - Wrappers in loops: Destructive memory churn (~10x slower).\r
   - Prefer primitives for high-throughput arithmetic and math processing.\r
\r
================================================================================\r
Classroom Practice: Barrackpore Academy | Mentor: Sukanta Hui\r
================================================================================`,s=[{question:"Why is primitive 'long' drastically faster than wrapper 'Long' in high-frequency computational loops?",shortAnswer:"Primitive 'long' operations execute directly inside high-speed CPU registers with zero memory allocations. Wrapper 'Long' triggers autoboxing on every iteration, unboxing to primitive, calculating, and allocating a new Long object on the Heap, leading to millions of allocations and heavy GC thrashing.",explanation:"This classic pitfall was famously highlighted in Effective Java Item 6.",hint:"Primitive runs in CPU registers; wrapper instantiates millions of heap objects in loops.",level:"Advanced",codeExample:"long sum = 0L; // Fast primitive stack allocation"}];function h(){return e.jsxs("div",{className:"space-y-12 px-4 md:px-8 py-8 text-slate-200 bg-slate-900 min-h-screen",children:[e.jsxs("header",{className:"space-y-4 border-b border-slate-800 pb-6",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"px-3 py-1 bg-sky-500/10 text-sky-400 border border-sky-500/20 text-xs font-semibold rounded-full uppercase tracking-wider",children:"Module 003_003 · Topic 9"}),e.jsx("span",{className:"px-3 py-1 bg-amber-500/10 text-amber-400 border border-amber-500/20 text-xs font-semibold rounded-full",children:"Performance Optimization"})]}),e.jsx("h1",{className:"text-xl sm:text-2xl md:text-3xl font-bold text-white tracking-tight",children:"Performance Costs of Autoboxing in Tight Loops (Memory Churn Benchmark)"}),e.jsx("p",{className:"text-base md:text-lg text-slate-400 leading-relaxed max-w-4xl",children:"Benchmark and visualize why wrapper types inside loops create severe performance penalties: contrasting CPU register arithmetic against millions of heap object instantiations."})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsxs("h2",{className:"text-2xl font-bold text-emerald-400 flex items-center gap-2",children:[e.jsx("span",{children:"💻"})," Hands-On Java Demo Code"]}),e.jsx(r,{fileModule:o,title:"AutoboxingLoopPerformanceBenchmarkDemo.java",highlightLines:[7,16,17,18,26,27,28]})]}),e.jsx("section",{className:"space-y-4",children:e.jsx(t,{title:"Autoboxing Performance FAQs",questions:s})}),e.jsx("section",{className:"space-y-4",children:e.jsx(n,{content:a,title:"Module 003_003 Topic 9: Autoboxing Loop Performance",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Printable Note",downloadFileName:"003_003_topic9_autoboxing_bench_note.txt"})}),e.jsx(i,{note:"One single uppercase letter ('Long sum' instead of 'long sum') creates 10 million temporary objects in RAM and slows your algorithm down by 1000%! Always use primitive types for loops. — Sukanta Hui"})]})}export{h as default};
