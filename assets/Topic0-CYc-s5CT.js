import{j as e}from"./vendor-react-core-Doz9nIC6.js";import{J as n}from"./JavaFileLoader-BfBG3xz_.js";import{F as t}from"./FAQTemplate-CkSqDH4B.js";import{P as r}from"./PlainTextPrint-C08xhKA4.js";import{T as a}from"./TeacherSukantaHui-CyIG3xbg.js";import"./JavaCodeBlock-BwsLxS3r.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-CIaKtAt4.js";const s=`/**\r
 * Java Core Tutorial - Module 008_001: Thread Fundamentals, Lifecycle & Creation\r
 * Topic 0: Concurrency vs Parallelism: Time-Slicing vs True Multi-Core Simultaneity\r
 * Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
 */\r
\r
package com.coderaccotax.javatutorial.multithreading;\r
\r
public class ConcurrencyVsParallelismDemo {\r
\r
    public static void main(String[] args) {\r
        System.out.println("==========================================================================");\r
        System.out.println(" TOPIC 0: CONCURRENCY vs PARALLELISM - BARRACKPORE ACADEMY");\r
        System.out.println("==========================================================================\\n");\r
\r
        int availableCores = Runtime.getRuntime().availableProcessors();\r
        System.out.println(">>> 1. Hardware Architecture Metrics:");\r
        System.out.println("  Available Hardware CPU Cores / SMT Threads: " + availableCores);\r
\r
        System.out.println("\\n>>> 2. CONCURRENCY vs PARALLELISM DEFINITION:");\r
        System.out.println("  - CONCURRENCY (Dealing with lots of things at once - Rob Pike):");\r
        System.out.println("    * Structure/Design: Interleaving multiple tasks on a single CPU core via OS Context Switching (Time-Slicing).");\r
        System.out.println("    * Illusion of Simultaneity: Rapid switching makes tasks appear to run at the same time.");\r
        System.out.println();\r
        System.out.println("  - PARALLELISM (Doing lots of things at once):");\r
        System.out.println("    * Hardware Execution: Physically executing multiple instructions simultaneously across distinct physical CPU cores.");\r
        System.out.println("    * Requires Multi-Core Hardware: Truly runs at the exact same physical nanosecond!");\r
\r
        System.out.println("\\n>>> REAL-WORLD ANALOGY (Barrackpore AccoTax Office):");\r
        System.out.println("  - Concurrency : 1 Accountant (Single Core) switching between Swadeep's GST filing and Tuhina's Tax Audit every 5 minutes.");\r
        System.out.println("  - Parallelism : 2 Accountants (Dual Core) filing Swadeep's and Tuhina's returns at the exact same time on separate desks!");\r
\r
        System.out.println("\\n==========================================================================");\r
    }\r
}`,i=`================================================================================\r
JAVA CORE TUTORIAL - QUICK REVISION GUIDE\r
Module 008_001: Thread Fundamentals, Lifecycle & Creation\r
Topic 0: Concurrency vs Parallelism\r
Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
================================================================================\r
\r
1. CONCURRENCY vs PARALLELISM:\r
   - Concurrency: Dealing with many tasks (interleaved time-slicing on 1 core).\r
   - Parallelism: Doing many tasks simultaneously (across multiple CPU cores).\r
   - Java threads can be concurrent (1 core) or parallel (multi-core).\r
   - Query cores: 'Runtime.getRuntime().availableProcessors()'.\r
\r
================================================================================\r
Classroom Practice: Barrackpore Academy | Mentor: Sukanta Hui\r
================================================================================`,l=[{question:"What is the fundamental difference between 'Concurrency' and 'Parallelism' in computing?",shortAnswer:"'Concurrency' is about 'structure'—managing multiple tasks by interleaving their execution over time (such as time-slicing via OS context switching on a single CPU core). 'Parallelism' is about 'execution'—physically running multiple computations simultaneously at the exact same instant across multiple distinct hardware CPU cores.",explanation:"Classic computer systems distinction formulated famously by Rob Pike.",hint:"Concurrency is dealing with many tasks (interleaved time-slicing); Parallelism is executing many tasks simultaneously on multiple cores.",level:"Beginner",codeExample:"int cores = Runtime.getRuntime().availableProcessors(); // Enables hardware parallelism"}];function h(){return e.jsxs("div",{className:"space-y-12 px-4 md:px-8 py-8 text-slate-200 bg-slate-900 min-h-screen",children:[e.jsxs("header",{className:"space-y-4 border-b border-slate-800 pb-6",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"px-3 py-1 bg-sky-500/10 text-sky-400 border border-sky-500/20 text-xs font-semibold rounded-full uppercase tracking-wider",children:"Module 008_001 · Topic 0"}),e.jsx("span",{className:"px-3 py-1 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-xs font-semibold rounded-full",children:"Concurrency vs Parallelism"})]}),e.jsxs("h1",{className:"text-3xl md:text-4xl font-extrabold text-white tracking-tight",children:["What is ",e.jsx("code",{className:"text-emerald-400 font-mono",children:"Concurrency"})," vs ",e.jsx("code",{className:"text-sky-400 font-mono",children:"Parallelism"}),": Time-Slicing vs Multi-Core Execution"]}),e.jsxs("p",{className:"text-base md:text-lg text-slate-400 leading-relaxed max-w-4xl",children:["Welcome to Segment 8: Multithreading & Concurrency! Differentiate single-core interleaved time-slicing (",e.jsx("code",{className:"text-emerald-300 font-mono",children:"Concurrency"}),") from true simultaneous hardware multi-core computation (",e.jsx("code",{className:"text-sky-300 font-mono",children:"Parallelism"}),")."]})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsxs("h2",{className:"text-2xl font-bold text-emerald-400 flex items-center gap-2",children:[e.jsx("span",{children:"💻"})," Hands-On Java Demo Code"]}),e.jsx(n,{fileModule:s,title:"ConcurrencyVsParallelismDemo.java",highlightLines:[7,10,13,14,18,19,23,24,28,29]})]}),e.jsx("section",{className:"space-y-4",children:e.jsx(t,{title:"Concurrency vs Parallelism FAQs",questions:l})}),e.jsx("section",{className:"space-y-4",children:e.jsx(r,{content:i,title:"Module 008_001 Topic 0: Concurrency vs Parallelism",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Printable Note",downloadFileName:"008_001_topic0_concurrency_vs_parallelism_note.txt"})}),e.jsx(a,{note:"Welcome to Segment 8: Multithreading & Concurrency! Think of Concurrency like juggling 3 balls with 1 hand (switching rapidly), while Parallelism is juggling with 3 people at the same time (multiple CPU cores)! — Sukanta Hui"})]})}export{h as default};
