import{j as e}from"./vendor-react-core-Doz9nIC6.js";import{J as n}from"./JavaFileLoader-BfBG3xz_.js";import{F as t}from"./FAQTemplate-CkSqDH4B.js";import{P as r}from"./PlainTextPrint-C08xhKA4.js";import{T as o}from"./TeacherSukantaHui-CC0AKmkm.js";import"./JavaCodeBlock-BwsLxS3r.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-BtJHuk7w.js";const i=`/**\r
 * Java Core Tutorial - Module 008_003: Thread Synchronization & Locks\r
 * Topic 11: Performance Overhead of Synchronization: Context Switching & JMM Flushes (Capstone)\r
 * Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
 */\r
\r
package com.coderaccotax.javatutorial.multithreading;\r
\r
public class SynchronizationOverheadCapstoneDemo {\r
\r
    private static final int ITERATIONS = 10_000_000;\r
    private static int unsyncedCount = 0;\r
    private static int syncedCount = 0;\r
    private static final Object LOCK = new Object();\r
\r
    public static void main(String[] args) {\r
        System.out.println("==========================================================================");\r
        System.out.println(" TOPIC 11: SYNCHRONIZATION OVERHEAD & JMM FLUSHES (CAPSTONE) - BARRACKPORE");\r
        System.out.println("==========================================================================\\n");\r
\r
        // 1. Benchmark: Unsynchronized Loop (Single-threaded baseline):\r
        long start1 = System.currentTimeMillis();\r
        for (int i = 0; i < ITERATIONS; i++) {\r
            unsyncedCount++; // Raw CPU L1 register increment\r
        }\r
        long dur1 = System.currentTimeMillis() - start1;\r
\r
        // 2. Benchmark: Synchronized Loop (Memory barrier & lock acquisition):\r
        long start2 = System.currentTimeMillis();\r
        for (int i = 0; i < ITERATIONS; i++) {\r
            synchronized (LOCK) {\r
                syncedCount++; // Enforces monitorenter, memory barrier, monitorexit\r
            }\r
        }\r
        long dur2 = System.currentTimeMillis() - start2;\r
\r
        System.out.println(">>> 10,000,000 ITERATIONS BENCHMARK RESULTS:");\r
        System.out.printf("  1. Unsynchronized Time: %,5d ms%n", dur1);\r
        System.out.printf("  2. Synchronized Time  : %,5d ms%n", dur2);\r
        System.out.printf("  ⚡ OVERHEAD FACTOR    : Synchronized is %.1fx slower due to memory barriers!%n",\r
                (double) dur2 / Math.max(dur1, 1));\r
\r
        System.out.println("\\n>>> WHY SYNCHRONIZATION INCURS HARDWARE OVERHEAD:");\r
        System.out.println("  1. Memory Barrier (JMM)  : 'monitorexit' forces modified CPU registers to flush to L3/RAM; 'monitorenter' invalidates local L1 cache.");\r
        System.out.println("  2. OS Context Switches   : If lock is contested (Heavyweight), the OS puts the thread to sleep, requiring ~2000 CPU cycles to switch stacks!");\r
        System.out.println("  3. Prevents Optimization : JIT compiler cannot reorder or hoist instructions across synchronization boundaries.");\r
\r
        System.out.println("\\n==========================================================================");\r
        System.out.println(" 🎉 MODULE 008_003 THREAD SYNCHRONIZATION & LOCKS 100% COMPLETE!");\r
        System.out.println("==========================================================================");\r
    }\r
}`,s=`================================================================================\r
JAVA CORE TUTORIAL - QUICK REVISION GUIDE\r
Module 008_003: Thread Synchronization & Locks\r
Topic 11: Synchronization Overhead Capstone\r
Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
================================================================================\r
\r
1. MODULE 008_003 GRAND SUMMARY:\r
   - Shared mutable state causes race conditions ('count++' is not atomic).\r
   - Check-Then-Act hazard: multiple threads pass check before either acts.\r
   - Critical Section: protected by Mutual Exclusion (Mutex).\r
   - Intrinsic Lock: 8-byte Mark Word in Object Header ('monitorenter/exit').\r
   - Synchronized Instance Method: locks 'this' instance.\r
   - Synchronized Static Method: locks 'ClassName.class' in Metaspace.\r
   - Synchronized Block: minimizes lock scope and allows custom lock targets.\r
   - Lock Reentrancy: prevents self-deadlocks in inheritance.\r
   - Best Practice: 'private final Object lock = new Object()'.\r
\r
================================================================================\r
Classroom Practice: Barrackpore Academy | Mentor: Sukanta Hui\r
================================================================================`,a=[{question:"What underlying hardware and JVM mechanisms cause 'synchronized' blocks to have performance overhead?",shortAnswer:"1. 'Memory Barriers (JMM Visibility)': Entering a synchronized block invalidates local CPU L1/L2 caches; exiting a block flushes modified CPU write-buffers to main memory to guarantee cross-thread visibility. 2. 'Lock Acquisition & Inflation': CAS operations and potential inflation to OS heavyweight mutexes. 3. 'OS Context Switching': When contention occurs, the OS suspends blocked threads, costing thousands of CPU cycles for context switches. 4. 'Compiler Inhibitions': JIT compilers cannot reorder instructions across lock barriers.",explanation:"Low-level hardware and JVM memory architecture analysis.",hint:"Memory barriers flush CPU write buffers, JIT cannot reorder code, and OS context switching costs thousands of cycles.",level:"Advanced",codeExample:"synchronized(lock) { ... } // Emits memory barriers and disables JIT reordering"}];function x(){return e.jsxs("div",{className:"space-y-12 px-4 md:px-8 py-8 text-slate-200 bg-slate-900 min-h-screen",children:[e.jsxs("header",{className:"space-y-4 border-b border-slate-800 pb-6",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"px-3 py-1 bg-sky-500/10 text-sky-400 border border-sky-500/20 text-xs font-semibold rounded-full uppercase tracking-wider",children:"Module 008_003 · Topic 11"}),e.jsx("span",{className:"px-3 py-1 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-xs font-semibold rounded-full",children:"Synchronization Capstone"})]}),e.jsxs("h1",{className:"text-3xl md:text-4xl font-extrabold text-white tracking-tight",children:["Performance Overhead of Synchronization: ",e.jsx("code",{className:"text-emerald-400 font-mono",children:"Context Switching"})," & ",e.jsx("code",{className:"text-sky-400 font-mono",children:"JMM"})," Memory Barriers (Capstone)"]}),e.jsx("p",{className:"text-base md:text-lg text-slate-400 leading-relaxed max-w-4xl",children:"Synthesize locking architectures: measuring hardware throughput overhead, CPU memory barrier flushes, and OS context switching latencies across synchronization boundaries."})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsxs("h2",{className:"text-2xl font-bold text-emerald-400 flex items-center gap-2",children:[e.jsx("span",{children:"💻"})," Hands-On Java Demo Code"]}),e.jsx(n,{fileModule:i,title:"SynchronizationOverheadCapstoneDemo.java",highlightLines:[7,10,16,17,23,24,25,33,34,39,40]})]}),e.jsx("section",{className:"space-y-4",children:e.jsx(t,{title:"Synchronization Overhead FAQs",questions:a})}),e.jsx("section",{className:"space-y-4",children:e.jsx(r,{content:s,title:"Module 008_003 Topic 11: Synchronization Overhead Capstone",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Printable Note",downloadFileName:"008_003_topic11_synchronization_overhead_capstone_note.txt"})}),e.jsx(o,{note:"Congratulations on completing Module 008_003! You now understand the complete mechanics of thread synchronization—from race conditions and Mark Word intrinsic locks, to instance vs class locks, reentrancy, and private final lock objects! — Sukanta Hui"})]})}export{x as default};
