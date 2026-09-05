import{j as e}from"./vendor-react-core-Doz9nIC6.js";import{J as t}from"./JavaFileLoader-BfBG3xz_.js";import{F as n}from"./FAQTemplate-BHhlgA96.js";import{P as r}from"./PlainTextPrint-C08xhKA4.js";import{T as o}from"./TeacherSukantaHui-DerPxfxp.js";import"./JavaCodeBlock-BwsLxS3r.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-CH1iX9C8.js";const a=`/**\r
 * Java Core Tutorial - Module 008_006: JMM, volatile, Atomics & CAS\r
 * Topic 11: Lock-Free Concurrency: The java.util.concurrent.atomic Package Suite\r
 * Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
 */\r
\r
package com.coderaccotax.javatutorial.multithreading;\r
\r
import java.util.concurrent.atomic.AtomicInteger;\r
\r
public class AtomicPackageLockFreeOverviewDemo {\r
\r
    // 1. LOCK-FREE ATOMIC COUNTER (Thread-safe without synchronized keyword!):\r
    private static final AtomicInteger atomicCounter = new AtomicInteger(0);\r
\r
    public static void main(String[] args) throws InterruptedException {\r
        System.out.println("==========================================================================");\r
        System.out.println(" TOPIC 11: java.util.concurrent.atomic OVERVIEW - BARRACKPORE");\r
        System.out.println("==========================================================================\\n");\r
\r
        Runnable task = () -> {\r
            for (int i = 0; i < 50_000; i++) {\r
                // ATOMIC INCREMENT: Uses internal hardware CAS loop to increment safely:\r
                atomicCounter.incrementAndGet(); // 100% Thread-Safe & Lock-Free!\r
            }\r
        };\r
\r
        Thread t1 = new Thread(task, "Worker-1");\r
        Thread t2 = new Thread(task, "Worker-2");\r
\r
        t1.start();\r
        t2.start();\r
\r
        t1.join();\r
        t2.join();\r
\r
        System.out.println(">>> EXPERIMENT RESULTS (50,000 + 50,000 Expected = 100,000):");\r
        System.out.printf("  Actual Final atomicCounter Value: %,d (100%% EXACT & THREAD-SAFE!)%n",\r
                atomicCounter.get());\r
\r
        System.out.println("\\n>>> WHY ATOMIC CLASSES OUTPERFORM SYNCHRONIZED:");\r
        System.out.println("  1. No Thread Sleeping  : Competing threads never enter BLOCKED state; they stay RUNNABLE.");\r
        System.out.println("  2. Zero OS Overheads   : Eliminates thousands of CPU cycles spent on OS context switching.");\r
        System.out.println("  3. Non-Blocking Design : If Thread 1 is preempted, Thread 2 continues running without deadlock!");\r
\r
        System.out.println("\\n==========================================================================");\r
    }\r
}`,i=`================================================================================\r
JAVA CORE TUTORIAL - QUICK REVISION GUIDE\r
Module 008_006: JMM, volatile, Atomics & CAS\r
Topic 11: java.util.concurrent.atomic Overview\r
Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
================================================================================\r
\r
1. ATOMIC PACKAGE SUITE:\r
   - Package: 'java.util.concurrent.atomic'.\r
   - Core types: AtomicInteger, AtomicLong, AtomicBoolean, AtomicReference.\r
   - Non-blocking lock-free concurrency powered by CAS.\r
   - Eliminates OS context switches and deadlock risks.\r
   - Perfect replacement for synchronized counters and flags.\r
\r
================================================================================\r
Classroom Practice: Barrackpore Academy | Mentor: Sukanta Hui\r
================================================================================`,c=[{question:"Why do 'java.util.concurrent.atomic' classes perform significantly better than 'synchronized' blocks under low-to-moderate contention?",shortAnswer:"Atomic classes use non-blocking hardware CAS (Compare-And-Swap) loops rather than mutual exclusion locks. When contention occurs, threads do NOT transition into the 'BLOCKED' state and the operating system does NOT need to perform expensive thread context switching (which costs ~2000 CPU cycles per switch). Threads simply retry their CAS calculation in user-space while remaining in the 'RUNNABLE' state, achieving much higher throughput and zero deadlock vulnerability.",explanation:"Performance comparison between lock-free CAS and lock-based synchronization.",hint:"Atomic classes use hardware CAS retry loops without putting threads to sleep, eliminating OS context switching overhead.",level:"Intermediate",codeExample:"AtomicInteger count = new AtomicInteger(); count.incrementAndGet(); // Lock-free!"}];function g(){return e.jsxs("div",{className:"space-y-12 px-4 md:px-8 py-8 text-slate-200 bg-slate-900 min-h-screen",children:[e.jsxs("header",{className:"space-y-4 border-b border-slate-800 pb-6",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"px-3 py-1 bg-sky-500/10 text-sky-400 border border-sky-500/20 text-xs font-semibold rounded-full uppercase tracking-wider",children:"Module 008_006 · Topic 11"}),e.jsx("span",{className:"px-3 py-1 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-xs font-semibold rounded-full",children:"Atomic Overview"})]}),e.jsxs("h1",{className:"text-xl sm:text-2xl md:text-3xl font-bold text-white tracking-tight",children:["Lock-Free Concurrency with ",e.jsx("code",{className:"text-emerald-400 font-mono",children:"java.util.concurrent.atomic"})]}),e.jsxs("p",{className:"text-base md:text-lg text-slate-400 leading-relaxed max-w-4xl",children:["Supercharge multi-core performance: replacing heavy ",e.jsx("code",{className:"text-rose-300 font-mono",children:"synchronized"})," locks with lock-free ",e.jsx("code",{className:"text-emerald-300 font-mono",children:"AtomicInteger"})," operations backed by hardware CAS."]})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsxs("h2",{className:"text-2xl font-bold text-emerald-400 flex items-center gap-2",children:[e.jsx("span",{children:"💻"})," Hands-On Java Demo Code"]}),e.jsx(t,{fileModule:a,title:"AtomicPackageLockFreeOverviewDemo.java",highlightLines:[7,10,13,14,20,21,27,28,33,34]})]}),e.jsx("section",{className:"space-y-4",children:e.jsx(n,{title:"Atomic Package FAQs",questions:c})}),e.jsx("section",{className:"space-y-4",children:e.jsx(r,{content:i,title:"Module 008_006 Topic 11: java.util.concurrent.atomic Overview",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Printable Note",downloadFileName:"008_006_topic11_atomic_overview_note.txt"})}),e.jsx(o,{note:"Whenever you need a thread-safe counter or accumulator, reach for AtomicInteger instead of writing synchronized methods! It gives you 100% thread safety at lightning-fast hardware CPU speeds! — Sukanta Hui"})]})}export{g as default};
