import{j as e}from"./vendor-react-core-Doz9nIC6.js";import{J as a}from"./JavaFileLoader-BfBG3xz_.js";import{F as t}from"./FAQTemplate-CkSqDH4B.js";import{P as r}from"./PlainTextPrint-C08xhKA4.js";import{T as n}from"./TeacherSukantaHui-CC0AKmkm.js";import"./JavaCodeBlock-BwsLxS3r.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-BtJHuk7w.js";const o=`/**\r
 * Java Core Tutorial - Module 010_005: Garbage Collection Algorithms, Collectors & GC Tuning\r
 * Topic 11: ZGC - Ultra-Low Latency Sub-Millisecond Garbage Collector (Java 15+ Production)\r
 * Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
 */\r
\r
package com.coderaccotax.javatutorial.gc;\r
\r
public class ZgcSubmillisecondPausesDemo {\r
\r
    public static void main(String[] args) {\r
        System.out.println("==========================================================================");\r
        System.out.println(" TOPIC 11: ZGC (ULTRA-LOW LATENCY GC) - BARRACKPORE ACADEMY");\r
        System.out.println("==========================================================================\\n");\r
\r
        System.out.println(">>> THE 3 TECHNOLOGICAL PILLARS OF ZGC:");\r
        System.out.println("  1. COLORED POINTERS : Uses reference address metadata bits (Marked0, Marked1, Remapped) directly in 64-bit pointers.");\r
        System.out.println("  2. LOAD BARRIERS    : When application dereferences a pointer, Load Barrier detects if object was relocated and self-heals the pointer!");\r
        System.out.println("  3. CONCURRENT WORK  : Marking, Relocation, and Compaction ALL happen concurrently while user threads run!\\n");\r
\r
        System.out.println(">>> ZGC PERFORMANCE SPECS (Java 21 Generational ZGC):");\r
        System.out.println("  - Typical STW Pause Time : Under 1 millisecond (< 1ms) regardless of heap size!");\r
        System.out.println("  - Supported Heap Range   : 16 MB up to 16 TERABYTES (16 TB).");\r
        System.out.println("  - Generational ZGC       : Standard in Java 21+ (-XX:+UseZGC -XX:+ZGenerational).\\n");\r
\r
        System.out.println(">>> ENABLING ZGC:");\r
        System.out.println("  - java -XX:+UseZGC -Xms16g -Xmx16g -jar trading-engine.jar");\r
        System.out.println("==========================================================================");\r
    }\r
}\r
`,s=`================================================================================\r
JAVA CORE TUTORIAL - QUICK REVISION GUIDE\r
Module 010_005: Garbage Collection Algorithms, Collectors & GC Tuning\r
Topic 11: ZGC (Ultra-Low Latency Collector)\r
Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
================================================================================\r
\r
1. WHAT IS ZGC (JEP 377 / JEP 439):\r
   - Production-ready since Java 15; Generational ZGC added in Java 21 (JEP 439).\r
   - Scalable low-latency collector targeting Stop-The-World pauses &lt; 1ms.\r
   - Heap capacity scales from 16MB to 16TB without increasing pause times!\r
\r
2. HOW CONCURRENT COMPACTION WORKS:\r
   - Uses Colored Pointers (metadata in reference bits 42-45) and JIT-compiled Load Barriers.\r
   - If an application thread accesses an object currently being moved, the Load Barrier\r
     intercepts the access, updates the pointer to the new address ('self-healing'),\r
     and returns the object without pausing the thread!\r
\r
================================================================================\r
Classroom Practice: Barrackpore Academy | Mentor: Sukanta Hui\r
================================================================================\r
`,i=[{question:"How does ZGC manage to compact and relocate heap objects concurrently without stopping application threads?",shortAnswer:"Through Colored Pointers and JIT Load Barriers. When an application thread dereferences an object pointer, the Load Barrier checks the pointer color bits. If the object was relocated, the load barrier reads the forwarding table, repairs the pointer in place (self-healing), and continues execution with zero STW pause.",explanation:"Revolutionary concurrent relocation architecture.",hint:"Uses colored pointer metadata bits and JIT self-healing load barriers.",level:"Advanced",codeExample:"Load Barrier: if (bad_color(ptr)) ptr = heal_and_remap(ptr);"},{question:"What major enhancement was added to ZGC in Java 21 LTS (JEP 439)?",shortAnswer:"Generational ZGC (-XX:+ZGenerational), which introduced young and old generation separation to ZGC, delivering up to 4x higher throughput and lower CPU overhead while preserving sub-millisecond pauses.",explanation:"Combines generational hypothesis efficiency with ZGC low latency.",hint:"Generational ZGC (JEP 439).",level:"Intermediate",codeExample:"java -XX:+UseZGC -XX:+ZGenerational -jar app.jar"}];function g(){return e.jsxs("div",{className:"space-y-12 px-4 md:px-8 py-8 text-slate-200 bg-slate-900 min-h-screen",children:[e.jsxs("header",{className:"space-y-4 border-b border-slate-800 pb-6",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"px-3 py-1 bg-sky-500/10 text-sky-400 border border-sky-500/20 text-xs font-semibold rounded-full uppercase tracking-wider",children:"Module 010_005 · Topic 11"}),e.jsx("span",{className:"px-3 py-1 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-xs font-semibold rounded-full",children:"Garbage Collection & Tuning"})]}),e.jsxs("h1",{className:"text-3xl md:text-4xl font-extrabold text-white tracking-tight",children:["The Z Garbage Collector: ",e.jsx("code",{className:"text-emerald-400 font-mono",children:"ZGC Sub-Millisecond Pauses (Java 15+ Production)"})]}),e.jsx("p",{className:"text-base md:text-lg text-slate-400 leading-relaxed max-w-4xl",children:"Ultra-low latency at terabyte scale: how ZGC achieves sub-millisecond STW pauses using Colored Pointers, Load Barriers, and concurrent compaction."})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsxs("h2",{className:"text-2xl font-bold text-emerald-400 flex items-center gap-2",children:[e.jsx("span",{children:"💻"})," Hands-On Java Demo Code"]}),e.jsx(a,{fileModule:o,title:"ZgcSubmillisecondPausesDemo.java",highlightLines:[18,25,34,43]})]}),e.jsx("section",{className:"space-y-4",children:e.jsx(t,{title:"Garbage Collection FAQs",questions:i})}),e.jsx("section",{className:"space-y-4",children:e.jsx(r,{content:s,title:"Module 010_005 Topic 11: The Z Garbage Collector (ZGC)",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Printable Note",downloadFileName:"010_005_topic11_zgc_submillisecond_pauses_note.txt"})}),e.jsx(n,{note:"ZGC is one of the greatest engineering feats in JVM history! Whether your heap is 16MB or 16 TERABYTES, ZGC pause times are less than 1 MILLISECOND! It marks and moves objects concurrently while your code is running! — Sukanta Hui"})]})}export{g as default};
