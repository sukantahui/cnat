import{j as e}from"./vendor-react-core-Doz9nIC6.js";import{J as n}from"./JavaFileLoader-BfBG3xz_.js";import{F as t}from"./FAQTemplate-BHhlgA96.js";import{P as r}from"./PlainTextPrint-C08xhKA4.js";import{T as o}from"./TeacherSukantaHui-DDN87fI5.js";import"./JavaCodeBlock-BwsLxS3r.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-DEsnU7fn.js";const a=`/**\r
 * Java Core Tutorial - Module 010_005: Garbage Collection Algorithms, Collectors & GC Tuning\r
 * Topic 6: Minor GC vs Major GC vs Full GC - Scopes & Latency\r
 * Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
 */\r
\r
package com.coderaccotax.javatutorial.gc;\r
\r
public class MinorMajorFullGcDemo {\r
\r
    public static void main(String[] args) {\r
        System.out.println("==========================================================================");\r
        System.out.println(" TOPIC 6: MINOR GC VS MAJOR GC VS FULL GC - BARRACKPORE");\r
        System.out.println("==========================================================================\\n");\r
\r
        System.out.println(">>> THE 3 LEVELS OF GARBAGE COLLECTION:");\r
        System.out.println("  --------------------------------------------------------------------------------------------------");\r
        System.out.println("  GC TYPE         TARGET SCOPE            TRIGGER                          TYPICAL LATENCY");\r
        System.out.println("  --------------------------------------------------------------------------------------------------");\r
        System.out.println("  Minor GC        Young Gen (Eden + S0/S1) Eden space is full              1ms - 10ms (Ultra-Fast)");\r
        System.out.println("  Major GC        Old Gen (Tenured)        Old Gen allocation threshold    100ms - 500ms");\r
        System.out.println("  Full GC         Entire Heap + Metaspace  Metaspace full / Promotion fail 500ms - 10,000ms+ (Painful!)");\r
        System.out.println("  --------------------------------------------------------------------------------------------------\\n");\r
\r
        System.out.println(">>> COMMON TRIGGERS OF UNEXPECTED FULL GC:");\r
        System.out.println("  1. Metaspace exhaustion (Classloader leaks).");\r
        System.out.println("  2. Concurrent Mode Failure in G1/CMS (Heap allocation rate faster than concurrent marking).");\r
        System.out.println("  3. Promotion Failure (Old Gen too fragmented to fit promoted objects).");\r
        System.out.println("  4. Explicit 'System.gc()' calls in third-party libraries.");\r
        System.out.println("==========================================================================");\r
    }\r
}\r
`,l=`================================================================================\r
JAVA CORE TUTORIAL - QUICK REVISION GUIDE\r
Module 010_005: Garbage Collection Algorithms, Collectors & GC Tuning\r
Topic 6: Minor GC vs Major GC vs Full GC\r
Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
================================================================================\r
\r
1. SCOPES DEFINED:\r
   - Minor GC (Scavenge) : Collects ONLY the Young Generation.\r
   - Major GC            : Collects ONLY the Old Generation.\r
   - Full GC             : Collects the entire JVM (Young Gen + Old Gen + Metaspace + Native buffers).\r
\r
2. PERFORMANCE GOAL:\r
   - Maximize Minor GCs (cheap copying).\r
   - Minimize or eliminate Full GCs (expensive full compaction).\r
\r
================================================================================\r
Classroom Practice: Barrackpore Academy | Mentor: Sukanta Hui\r
================================================================================\r
`,s=[{question:"What is the difference in scope between a Minor GC and a Full GC?",shortAnswer:"A Minor GC cleans only the Young Generation (Eden and Survivor spaces), while a Full GC cleans the entire JVM memory space, including Young Generation, Old Generation, and Metaspace.",explanation:"Minor GC is ultra-fast; Full GC requires sweeping the entire process memory.",hint:"Minor GC = Young Gen only; Full GC = Young + Old + Metaspace.",level:"Beginner",codeExample:"Minor GC: 2ms pause; Full GC: 2000ms pause."},{question:"What is a Promotion Failure in JVM Garbage Collection?",shortAnswer:"An event where a Minor GC attempts to promote surviving objects from Survivor space into Old Gen, but the Old Gen does not have sufficient contiguous free space, forcing the JVM to immediately trigger an emergency Full GC.",explanation:"Indicates Old Gen fragmentation or undersized Old Gen capacity.",hint:"Old Gen lacks sufficient contiguous space to receive promoted survivor objects.",level:"Advanced",codeExample:"Promotion Failure → Emergency Stop-The-World Full GC."}];function x(){return e.jsxs("div",{className:"space-y-12 px-4 md:px-8 py-8 text-slate-200 bg-slate-900 min-h-screen",children:[e.jsxs("header",{className:"space-y-4 border-b border-slate-800 pb-6",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"px-3 py-1 bg-sky-500/10 text-sky-400 border border-sky-500/20 text-xs font-semibold rounded-full uppercase tracking-wider",children:"Module 010_005 · Topic 6"}),e.jsx("span",{className:"px-3 py-1 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-xs font-semibold rounded-full",children:"Garbage Collection & Tuning"})]}),e.jsxs("h1",{className:"text-xl sm:text-2xl md:text-3xl font-bold text-white tracking-tight",children:["Minor GC vs Major GC vs Full GC: ",e.jsx("code",{className:"text-emerald-400 font-mono",children:"Scope & Latency Differences"})]}),e.jsx("p",{className:"text-base md:text-lg text-slate-400 leading-relaxed max-w-4xl",children:"Understanding GC scopes: Minor GC (Young Gen only), Major GC (Old Gen only), and Full GC (Young + Old + Metaspace full heap collection)."})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsxs("h2",{className:"text-2xl font-bold text-emerald-400 flex items-center gap-2",children:[e.jsx("span",{children:"💻"})," Hands-On Java Demo Code"]}),e.jsx(n,{fileModule:a,title:"MinorMajorFullGcDemo.java",highlightLines:[18,25,34,43]})]}),e.jsx("section",{className:"space-y-4",children:e.jsx(t,{title:"Garbage Collection FAQs",questions:s})}),e.jsx("section",{className:"space-y-4",children:e.jsx(r,{content:l,title:"Module 010_005 Topic 6: Minor GC vs Major GC vs Full GC",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Printable Note",downloadFileName:"010_005_topic6_minor_major_full_gc_note.txt"})}),e.jsx(o,{note:"Minor GC cleans only the Young Generation and takes 1 to 5 ms! Major GC cleans the Old Generation! Full GC stops the entire world and cleans Young, Old, and Metaspace, taking seconds! Avoid Full GCs at all costs! — Sukanta Hui"})]})}export{x as default};
