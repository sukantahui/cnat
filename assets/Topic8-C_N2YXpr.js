import{j as e}from"./vendor-react-core-Doz9nIC6.js";import{J as n}from"./JavaFileLoader-BfBG3xz_.js";import{F as t}from"./FAQTemplate-BHhlgA96.js";import{P as r}from"./PlainTextPrint-C08xhKA4.js";import{T as o}from"./TeacherSukantaHui-CEPuAfsb.js";import"./JavaCodeBlock-BwsLxS3r.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-DGCamHnX.js";const a=`/**\r
 * Java Core Tutorial - Module 010_004: JVM Memory Model: Heap, Stack, Metaspace & Runtime Areas\r
 * Topic 8: JVM Heap Architecture - The Generational Memory Model\r
 * Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
 */\r
\r
package com.coderaccotax.javatutorial.memory;\r
\r
import java.lang.management.ManagementFactory;\r
import java.lang.management.MemoryPoolMXBean;\r
\r
public class JvmHeapArchitectureOverviewDemo {\r
\r
    public static void main(String[] args) {\r
        System.out.println("==========================================================================");\r
        System.out.println(" TOPIC 8: JVM HEAP GENERATIONAL MODEL - BARRACKPORE ACADEMY");\r
        System.out.println("==========================================================================\\n");\r
\r
        System.out.println(">>> 1. INSPECTING HEAP GENERATION MEMORY POOLS:");\r
        for (MemoryPoolMXBean pool : ManagementFactory.getMemoryPoolMXBeans()) {\r
            if (pool.getName().toLowerCase().contains("eden") ||\r
                pool.getName().toLowerCase().contains("survivor") ||\r
                pool.getName().toLowerCase().contains("old") ||\r
                pool.getName().toLowerCase().contains("tenured")) {\r
                System.out.println("  - Pool: " + pool.getName() + " | Used: " + (pool.getUsage().getUsed() / (1024 * 1024)) + " MB");\r
            }\r
        }\r
\r
        System.out.println("\\n>>> THE WEAK GENERATIONAL HYPOTHESIS:");\r
        System.out.println("  1. Most allocated objects (iterators, DTOs, buffers) die shortly after creation (95%+ mortality rate).");\r
        System.out.println("  2. Very few references exist from older generation objects to younger generation objects.\\n");\r
\r
        System.out.println(">>> HEAP DIVISION STRUCTURE:");\r
        System.out.println("  [ HEAP MEMORY ]");\r
        System.out.println("    ├── YOUNG GENERATION (Eden + Survivor 0 + Survivor 1) -> Cleaned via Minor GC (Fast & Frequent)");\r
        System.out.println("    └── OLD / TENURED GENERATION (Long-lived objects)     -> Cleaned via Major / Full GC (Thorough)");\r
        System.out.println("==========================================================================");\r
    }\r
}\r
`,s=`================================================================================\r
JAVA CORE TUTORIAL - QUICK REVISION GUIDE\r
Module 010_004: JVM Memory Model: Heap, Stack, Metaspace & Runtime Areas\r
Topic 8: JVM Heap Architecture (Generational Model)\r
Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
================================================================================\r
\r
1. THE WEAK GENERATIONAL HYPOTHESIS:\r
   - Empirical observation in software engineering:\r
     * Over 90-95% of all object instances become garbage very quickly (short lifespans).\r
     * Objects that survive multiple GC cycles tend to live for a very long time (caches, singletons).\r
\r
2. HEAP GENERATION ADVANTAGE:\r
   - Segregating young from old objects allows Minor GC to scan only the small Young Generation,\r
     reclaiming huge amounts of memory in a few milliseconds without scanning the massive Old Gen!\r
\r
================================================================================\r
Classroom Practice: Barrackpore Academy | Mentor: Sukanta Hui\r
================================================================================\r
`,i=[{question:"What is the Weak Generational Hypothesis upon which JVM heap architecture is designed?",shortAnswer:"The empirical rule that most allocated objects die shortly after creation (high infant mortality), and references from older generation objects to younger generation objects are rare.",explanation:"Enables fast, efficient Minor GCs on small memory regions.",hint:"Most objects die young shortly after creation.",level:"Beginner",codeExample:"Minor GC scans only Young Gen → Fast sub-millisecond pauses."},{question:"What are the two primary divisions of the standard HotSpot JVM Heap?",shortAnswer:"1. Young Generation (comprising Eden Space, Survivor 0, and Survivor 1), and 2. Old / Tenured Generation.",explanation:"Standard generational layout in HotSpot JVM.",hint:"Young Generation and Old (Tenured) Generation.",level:"Beginner",codeExample:"Heap = Young Gen (Eden + S0 + S1) + Old Gen"}];function y(){return e.jsxs("div",{className:"space-y-12 px-4 md:px-8 py-8 text-slate-200 bg-slate-900 min-h-screen",children:[e.jsxs("header",{className:"space-y-4 border-b border-slate-800 pb-6",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"px-3 py-1 bg-sky-500/10 text-sky-400 border border-sky-500/20 text-xs font-semibold rounded-full uppercase tracking-wider",children:"Module 010_004 · Topic 8"}),e.jsx("span",{className:"px-3 py-1 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-xs font-semibold rounded-full",children:"JVM Memory Model"})]}),e.jsxs("h1",{className:"text-xl sm:text-2xl md:text-3xl font-bold text-white tracking-tight",children:["JVM Heap Architecture: ",e.jsx("code",{className:"text-emerald-400 font-mono",children:"The Generational Memory Model"})]}),e.jsx("p",{className:"text-base md:text-lg text-slate-400 leading-relaxed max-w-4xl",children:"The Weak Generational Hypothesis: why JVM Heap divides into Young Generation (Eden + Survivors) and Old Generation (Tenured) for peak GC throughput."})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsxs("h2",{className:"text-2xl font-bold text-emerald-400 flex items-center gap-2",children:[e.jsx("span",{children:"💻"})," Hands-On Java Demo Code"]}),e.jsx(n,{fileModule:a,title:"JvmHeapArchitectureOverviewDemo.java",highlightLines:[18,25,34,43]})]}),e.jsx("section",{className:"space-y-4",children:e.jsx(t,{title:"JVM Memory Areas FAQs",questions:i})}),e.jsx("section",{className:"space-y-4",children:e.jsx(r,{content:s,title:"Module 010_004 Topic 8: JVM Heap Architecture Overview",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Printable Note",downloadFileName:"010_004_topic8_jvm_heap_architecture_overview_note.txt"})}),e.jsx(o,{note:"The Generational Hypothesis states: Most objects die young! In fact, over 95% of objects die in the Young Generation within milliseconds! That's why the Heap is split into Young and Old generations! — Sukanta Hui"})]})}export{y as default};
