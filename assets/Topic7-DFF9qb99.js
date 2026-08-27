import{j as e}from"./vendor-react-core-Doz9nIC6.js";import{J as t}from"./JavaFileLoader-BfBG3xz_.js";import{F as a}from"./FAQTemplate-CkSqDH4B.js";import{P as r}from"./PlainTextPrint-C08xhKA4.js";import{T as o}from"./TeacherSukantaHui-CyIG3xbg.js";import"./JavaCodeBlock-BwsLxS3r.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-CIaKtAt4.js";const n=`/**\r
 * Java Core Tutorial - Module 010_005: Garbage Collection Algorithms, Collectors & GC Tuning\r
 * Topic 7: Survey of JVM Garbage Collectors - The 5 Major Collectors\r
 * Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
 */\r
\r
package com.coderaccotax.javatutorial.gc;\r
\r
import java.lang.management.GarbageCollectorMXBean;\r
import java.lang.management.ManagementFactory;\r
\r
public class SurveyJvmGarbageCollectorsDemo {\r
\r
    public static void main(String[] args) {\r
        System.out.println("==========================================================================");\r
        System.out.println(" TOPIC 7: SURVEY OF JVM GARBAGE COLLECTORS - BARRACKPORE");\r
        System.out.println("==========================================================================\\n");\r
\r
        System.out.println(">>> 1. CURRENT ACTIVE GARBAGE COLLECTORS IN THIS JVM:");\r
        for (GarbageCollectorMXBean gc : ManagementFactory.getGarbageCollectorMXBeans()) {\r
            System.out.println("  - Active Collector : " + gc.getName());\r
            System.out.println("    Collection Count : " + gc.getCollectionCount());\r
            System.out.println("    Total GC Time    : " + gc.getCollectionTime() + " ms\\n");\r
        }\r
\r
        System.out.println(">>> 2. THE 5 MAJOR PRODUCTION COLLECTORS IN MODERN JAVA:");\r
        System.out.println("  1. Serial GC     (-XX:+UseSerialGC)    : Single-threaded; ideal for CLI tools & <512MB RAM.");\r
        System.out.println("  2. Parallel GC   (-XX:+UseParallelGC)  : Multi-threaded throughput champion; ideal for batch compute.");\r
        System.out.println("  3. G1 GC         (-XX:+UseG1GC)        : Region-based default since Java 9; balanced latency/throughput.");\r
        System.out.println("  4. ZGC           (-XX:+UseZGC)         : Ultra-low latency (<1ms STW); TB-scale heaps (Java 15+).");\r
        System.out.println("  5. Shenandoah GC (-XX:+UseShenandoahGC): Ultra-low latency concurrent compaction collector.");\r
\r
        System.out.println("\\n==========================================================================");\r
    }\r
}\r
`,l=`================================================================================\r
JAVA CORE TUTORIAL - QUICK REVISION GUIDE\r
Module 010_005: Garbage Collection Algorithms, Collectors & GC Tuning\r
Topic 7: Survey of JVM Garbage Collectors\r
Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
================================================================================\r
\r
1. THE GC TRIANGLE OF TRADEOFFS:\r
   - Throughput : Percentage of total time spent executing user code (Parallel GC excels).\r
   - Latency    : Length of Stop-The-World pauses (ZGC and Shenandoah excel).\r
   - Footprint  : Memory overhead of GC metadata (Serial GC excels).\r
\r
2. MODERN DEFAULT:\r
   - Java 8        : Parallel GC (Throughput).\r
   - Java 9 - 21+  : G1 GC (Garbage-First).\r
\r
================================================================================\r
Classroom Practice: Barrackpore Academy | Mentor: Sukanta Hui\r
================================================================================\r
`,s=[{question:"What is the default Garbage Collector in Java 8 versus Java 9 through Java 21 LTS?",shortAnswer:"In Java 8, the default collector is Parallel GC (throughput collector). In Java 9 and later (including Java 11, 17, 21), the default is G1 GC (Garbage-First Collector).",explanation:"Reflected the shift toward latency-sensitive cloud microservices.",hint:"Java 8: Parallel GC; Java 9+: G1 GC.",level:"Beginner",codeExample:"Java 8 = ParallelGC; Java 9+ = G1GC"},{question:"What three competing metrics form the 'GC Tradeoff Triangle'?",shortAnswer:"1. Throughput (maximizing application CPU time), 2. Latency (minimizing Stop-The-World pause durations), and 3. Footprint (minimizing GC memory overhead).",explanation:"Optimizing for one always involves compromises on the other two.",hint:"Throughput, Latency, and Memory Footprint.",level:"Intermediate",codeExample:"Tradeoffs: Throughput vs Latency vs Footprint."}];function C(){return e.jsxs("div",{className:"space-y-12 px-4 md:px-8 py-8 text-slate-200 bg-slate-900 min-h-screen",children:[e.jsxs("header",{className:"space-y-4 border-b border-slate-800 pb-6",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"px-3 py-1 bg-sky-500/10 text-sky-400 border border-sky-500/20 text-xs font-semibold rounded-full uppercase tracking-wider",children:"Module 010_005 · Topic 7"}),e.jsx("span",{className:"px-3 py-1 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-xs font-semibold rounded-full",children:"Garbage Collection & Tuning"})]}),e.jsxs("h1",{className:"text-3xl md:text-4xl font-extrabold text-white tracking-tight",children:["Survey of JVM Garbage Collectors: ",e.jsx("code",{className:"text-emerald-400 font-mono",children:"From Serial to ZGC"})]}),e.jsx("p",{className:"text-base md:text-lg text-slate-400 leading-relaxed max-w-4xl",children:"Choosing the right collector: tradeoffs between Throughput, Latency, and Memory Footprint across the 5 major production collectors."})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsxs("h2",{className:"text-2xl font-bold text-emerald-400 flex items-center gap-2",children:[e.jsx("span",{children:"💻"})," Hands-On Java Demo Code"]}),e.jsx(t,{fileModule:n,title:"SurveyJvmGarbageCollectorsDemo.java",highlightLines:[18,25,34,43]})]}),e.jsx("section",{className:"space-y-4",children:e.jsx(a,{title:"Garbage Collection FAQs",questions:s})}),e.jsx("section",{className:"space-y-4",children:e.jsx(r,{content:l,title:"Module 010_005 Topic 7: Survey of JVM Garbage Collectors",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Printable Note",downloadFileName:"010_005_topic7_survey_jvm_garbage_collectors_note.txt"})}),e.jsx(o,{note:"There is no single best garbage collector for every situation! It is all about tradeoffs: Parallel GC maximizes Throughput, G1 GC balances Throughput and Latency, and ZGC delivers sub-millisecond Latency! — Sukanta Hui"})]})}export{C as default};
