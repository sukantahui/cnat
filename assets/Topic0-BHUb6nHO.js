import{j as e}from"./vendor-react-core-Doz9nIC6.js";import{J as a}from"./JavaFileLoader-BfBG3xz_.js";import{F as t}from"./FAQTemplate-BHhlgA96.js";import{P as n}from"./PlainTextPrint-C08xhKA4.js";import{T as r}from"./TeacherSukantaHui-RpFLNJ5A.js";import"./JavaCodeBlock-BwsLxS3r.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-wprqVFW_.js";const o=`/**\r
 * Java Core Tutorial - Module 010_006: JVM Profiling, Heap Dumps & Memory Leak Diagnosis\r
 * Topic 0: Why Memory Leaks Occur in Java - Unintentional Object Retention\r
 * Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
 */\r
\r
package com.coderaccotax.javatutorial.profiling;\r
\r
import java.util.ArrayList;\r
import java.util.List;\r
\r
public class WhyMemoryLeaksOccurDemo {\r
\r
    // Simulating a lingering static reference (Memory Leak Root Cause):\r
    private static final List<byte[]> LINGERING_LEAK_HOLDER = new ArrayList<>();\r
\r
    public static void main(String[] args) {\r
        System.out.println("==========================================================================");\r
        System.out.println(" TOPIC 0: WHY MEMORY LEAKS OCCUR IN JAVA - BARRACKPORE ACADEMY");\r
        System.out.println("==========================================================================\\n");\r
\r
        System.out.println(">>> 1. WHAT IS A JAVA MEMORY LEAK (Unintentional Object Retention):");\r
        System.out.println("  - In C/C++: Memory leak occurs when allocated memory is forgotten without 'free()'.");\r
        System.out.println("  - In Java  : Memory leak occurs when an object is logically dead, but a live reference (GC Root) prevents GC from reclaiming it!\\n");\r
\r
        // Simulating memory accumulation:\r
        for (int i = 1; i <= 5; i++) {\r
            LINGERING_LEAK_HOLDER.add(new byte[1024 * 1024]); // 1MB each\r
            System.out.println("  - Accumulated leaked block #" + i + " (Held by static GC Root)");\r
        }\r
\r
        System.out.println("\\n>>> THE DANGER:");\r
        System.out.println("  - As long as LINGERING_LEAK_HOLDER exists, these 5MB cannot be freed.");\r
        System.out.println("  - Over days/weeks in production, this causes 'OutOfMemoryError: Java heap space'!");\r
        System.out.println("==========================================================================");\r
    }\r
}\r
`,i=`================================================================================\r
JAVA CORE TUTORIAL - QUICK REVISION GUIDE\r
Module 010_006: JVM Profiling, Heap Dumps & Memory Leak Diagnosis\r
Topic 0: Why Memory Leaks Occur in Java\r
Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
================================================================================\r
\r
1. DEFINITION OF A JAVA MEMORY LEAK:\r
   - Also known as 'Unintentional Object Retention' or 'LPS' (Lapsed Pointer Syndrome).\r
   - An object that is no longer required for application execution remains reachable\r
     from an active GC Root (e.g. static collection, thread local, listener).\r
\r
2. SYMPTOMS IN PRODUCTION:\r
   - Application responsiveness gradually degrades over hours/days.\r
   - GC pause times increase and occur more frequently.\r
   - Ultimately results in 'java.lang.OutOfMemoryError: Java heap space'.\r
\r
================================================================================\r
Classroom Practice: Barrackpore Academy | Mentor: Sukanta Hui\r
================================================================================\r
`,s=[{question:"How can a memory leak occur in a language with an automatic garbage collector like Java?",shortAnswer:"A memory leak in Java occurs when an object that is no longer needed by application logic remains referenced by a live GC Root (e.g. a static collection, thread-local, or listener). Because the object is technically reachable, the Garbage Collector cannot legally reclaim it.",explanation:"GC only reclaims unreachable objects, not unneeded objects.",hint:"Logically dead objects remain referenced by live GC Roots.",level:"Beginner",codeExample:"static List<Data> list = new ArrayList<>(); // Never cleared → Leak"},{question:"What is the typical visual signature of a memory leak in a JVM memory monitoring graph (VisualVM)?",shortAnswer:"A classic 'sawtooth pattern' where the bottom floor of heap memory usage after each Full GC steadily climbs upward over time instead of returning to a stable baseline.",explanation:"Indicates that unreclaimable objects are accumulating over time.",hint:"The minimum heap baseline after GC steadily climbs over time.",level:"Intermediate",codeExample:"Heap after GC: 100MB → 250MB → 500MB → 900MB → Crash"}];function b(){return e.jsxs("div",{className:"space-y-12 px-4 md:px-8 py-8 text-slate-200 bg-slate-900 min-h-screen",children:[e.jsxs("header",{className:"space-y-4 border-b border-slate-800 pb-6",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"px-3 py-1 bg-sky-500/10 text-sky-400 border border-sky-500/20 text-xs font-semibold rounded-full uppercase tracking-wider",children:"Module 010_006 · Topic 0"}),e.jsx("span",{className:"px-3 py-1 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-xs font-semibold rounded-full",children:"JVM Profiling & OOM"})]}),e.jsxs("h1",{className:"text-xl sm:text-2xl md:text-3xl font-bold text-white tracking-tight",children:["Why Memory Leaks Occur in Java: ",e.jsx("code",{className:"text-emerald-400 font-mono",children:"Unintentional Object Retention"})]}),e.jsx("p",{className:"text-base md:text-lg text-slate-400 leading-relaxed max-w-4xl",children:"The misconception of automatic GC: how lingering live references prevent GC from reclaiming dead objects, causing OutOfMemoryError crashes."})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsxs("h2",{className:"text-2xl font-bold text-emerald-400 flex items-center gap-2",children:[e.jsx("span",{children:"💻"})," Hands-On Java Demo Code"]}),e.jsx(a,{fileModule:o,title:"WhyMemoryLeaksOccurDemo.java",highlightLines:[18,25,34,43]})]}),e.jsx("section",{className:"space-y-4",children:e.jsx(t,{title:"Memory Profiling & OOM FAQs",questions:s})}),e.jsx("section",{className:"space-y-4",children:e.jsx(n,{content:i,title:"Module 010_006 Topic 0: Why Memory Leaks Occur",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Printable Note",downloadFileName:"010_006_topic0_why_memory_leaks_occur_note.txt"})}),e.jsx(r,{note:"Many beginners believe Java cannot have memory leaks because of Garbage Collection! That is false! A Java memory leak happens when an object is NO LONGER NEEDED by business logic, but a live pointer is still holding it! — Sukanta Hui"})]})}export{b as default};
