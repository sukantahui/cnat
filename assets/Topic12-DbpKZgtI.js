import{j as e}from"./vendor-react-core-Doz9nIC6.js";import{J as n}from"./JavaFileLoader-BfBG3xz_.js";import{F as a}from"./FAQTemplate-BHhlgA96.js";import{P as r}from"./PlainTextPrint-C08xhKA4.js";import{T as t}from"./TeacherSukantaHui-CEPuAfsb.js";import"./JavaCodeBlock-BwsLxS3r.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-DGCamHnX.js";const o=`/**\r
 * Java Core Tutorial - Module 010_005: Garbage Collection Algorithms, Collectors & GC Tuning\r
 * Topic 12: Shenandoah Garbage Collector - Concurrent Compaction\r
 * Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
 */\r
\r
package com.coderaccotax.javatutorial.gc;\r
\r
public class ShenandoahGcDemo {\r
\r
    public static void main(String[] args) {\r
        System.out.println("==========================================================================");\r
        System.out.println(" TOPIC 12: SHENANDOAH GC (-XX:+UseShenandoahGC) - BARRACKPORE");\r
        System.out.println("==========================================================================\\n");\r
\r
        System.out.println(">>> KEY ATTRIBUTES OF SHENANDOAH GC:");\r
        System.out.println("  1. Ultra-Low Latency        : Keeps STW pauses under a few milliseconds regardless of heap size.");\r
        System.out.println("  2. Concurrent Evacuation    : Moves live objects concurrently while application threads write/read.");\r
        System.out.println("  3. Load-Reference Barriers  : Intercepts object references to ensure mutators always see the new copy.\\n");\r
\r
        System.out.println(">>> SHENANDOAH VS ZGC:");\r
        System.out.println("  - Shenandoah was developed by Red Hat and integrated into OpenJDK.");\r
        System.out.println("  - ZGC was developed by Oracle (now supporting Generational ZGC in Java 21).");\r
        System.out.println("  - Both deliver ultra-low latency; Shenandoah does not require colored pointer hardware bit manipulation.");\r
\r
        System.out.println("\\n==========================================================================");\r
    }\r
}\r
`,s=`================================================================================\r
JAVA CORE TUTORIAL - QUICK REVISION GUIDE\r
Module 010_005: Garbage Collection Algorithms, Collectors & GC Tuning\r
Topic 12: Shenandoah GC (-XX:+UseShenandoahGC)\r
Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
================================================================================\r
\r
1. WHAT IS SHENANDOAH GC:\r
   - An ultra-low latency concurrent garbage collector developed by Red Hat (JEP 189).\r
   - Performs concurrent marking, concurrent evacuation, and concurrent update references.\r
\r
2. HOW IT REDUCES PAUSES:\r
   - Traditional G1 GC evacuates regions during Stop-The-World pauses.\r
   - Shenandoah evacuates regions CONCURRENTLY with running Java threads using Load-Reference Barriers.\r
\r
================================================================================\r
Classroom Practice: Barrackpore Academy | Mentor: Sukanta Hui\r
================================================================================\r
`,i=[{question:"What is the primary operational difference between G1 GC and Shenandoah GC during memory compaction (evacuation)?",shortAnswer:"G1 GC performs region evacuation during Stop-The-World pauses, whereas Shenandoah GC evacuates regions concurrently while application threads continue executing.",explanation:"Enables consistent low-latency pauses regardless of heap size.",hint:"Shenandoah performs region evacuation concurrently rather than during STW pauses.",level:"Intermediate",codeExample:"G1: STW Evacuation; Shenandoah: Concurrent Evacuation."},{question:"What JVM flag enables the Shenandoah Garbage Collector?",shortAnswer:"-XX:+UseShenandoahGC",explanation:"Available in standard OpenJDK builds.",hint:"-XX:+UseShenandoahGC",level:"Beginner",codeExample:"java -XX:+UseShenandoahGC -Xmx8g -jar payment-service.jar"}];function S(){return e.jsxs("div",{className:"space-y-12 px-4 md:px-8 py-8 text-slate-200 bg-slate-900 min-h-screen",children:[e.jsxs("header",{className:"space-y-4 border-b border-slate-800 pb-6",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"px-3 py-1 bg-sky-500/10 text-sky-400 border border-sky-500/20 text-xs font-semibold rounded-full uppercase tracking-wider",children:"Module 010_005 · Topic 12"}),e.jsx("span",{className:"px-3 py-1 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-xs font-semibold rounded-full",children:"Garbage Collection & Tuning"})]}),e.jsxs("h1",{className:"text-xl sm:text-2xl md:text-3xl font-bold text-white tracking-tight",children:["The Shenandoah Garbage Collector: ",e.jsx("code",{className:"text-emerald-400 font-mono",children:"-XX:+UseShenandoahGC"})]}),e.jsx("p",{className:"text-base md:text-lg text-slate-400 leading-relaxed max-w-4xl",children:"Red Hat's ultra-low latency innovation: concurrent evacuation, Brooks Pointers / Load-Reference Barriers, and pause-time independence from heap size."})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsxs("h2",{className:"text-2xl font-bold text-emerald-400 flex items-center gap-2",children:[e.jsx("span",{children:"💻"})," Hands-On Java Demo Code"]}),e.jsx(n,{fileModule:o,title:"ShenandoahGcDemo.java",highlightLines:[18,25,34,43]})]}),e.jsx("section",{className:"space-y-4",children:e.jsx(a,{title:"Garbage Collection FAQs",questions:i})}),e.jsx("section",{className:"space-y-4",children:e.jsx(r,{content:s,title:"Module 010_005 Topic 12: Shenandoah GC",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Printable Note",downloadFileName:"010_005_topic12_shenandoah_gc_note.txt"})}),e.jsx(t,{note:"Shenandoah GC performs concurrent evacuation alongside application threads! It was pioneered by Red Hat and is an ultra-low latency alternative to ZGC with sub-millisecond pauses! — Sukanta Hui"})]})}export{S as default};
