import{j as e}from"./vendor-react-core-Doz9nIC6.js";import{J as n}from"./JavaFileLoader-BfBG3xz_.js";import{F as r}from"./FAQTemplate-BHhlgA96.js";import{P as t}from"./PlainTextPrint-C08xhKA4.js";import{T as a}from"./TeacherSukantaHui-CEPuAfsb.js";import"./JavaCodeBlock-BwsLxS3r.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-DGCamHnX.js";const o=`/**\r
 * Java Core Tutorial - Module 008_006: JMM, volatile, Atomics & CAS\r
 * Topic 14: High-Throughput Concurrency: LongAdder, DoubleAdder & Striped Cells (Capstone)\r
 * Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
 */\r
\r
package com.coderaccotax.javatutorial.multithreading;\r
\r
import java.util.concurrent.atomic.AtomicLong;\r
import java.util.concurrent.atomic.LongAdder;\r
\r
public class LongAdderStripedCellHighThroughputCapstoneDemo {\r
\r
    private static final int THREAD_COUNT = 16;\r
    private static final int ITERATIONS_PER_THREAD = 1_000_000;\r
\r
    public static void main(String[] args) throws InterruptedException {\r
        System.out.println("==========================================================================");\r
        System.out.println(" TOPIC 14: LongAdder STRIPED CELLS vs AtomicLong (CAPSTONE) - BARRACKPORE");\r
        System.out.println("==========================================================================\\n");\r
\r
        // 1. BENCHMARK A: AtomicLong (High CAS Contention on a SINGLE memory cell):\r
        AtomicLong atomicLong = new AtomicLong(0);\r
        Thread[] atomicThreads = new Thread[THREAD_COUNT];\r
\r
        long startA = System.currentTimeMillis();\r
        for (int i = 0; i < THREAD_COUNT; i++) {\r
            atomicThreads[i] = new Thread(() -> {\r
                for (int j = 0; j < ITERATIONS_PER_THREAD; j++) {\r
                    atomicLong.incrementAndGet(); // 16 threads hammering 1 single memory cell!\r
                }\r
            });\r
            atomicThreads[i].start();\r
        }\r
        for (Thread t : atomicThreads) t.join();\r
        long durA = System.currentTimeMillis() - startA;\r
\r
        // 2. BENCHMARK B: LongAdder (Striped internal Cell[] array minimizing CAS contention):\r
        LongAdder longAdder = new LongAdder();\r
        Thread[] adderThreads = new Thread[THREAD_COUNT];\r
\r
        long startB = System.currentTimeMillis();\r
        for (int i = 0; i < THREAD_COUNT; i++) {\r
            adderThreads[i] = new Thread(() -> {\r
                for (int j = 0; j < ITERATIONS_PER_THREAD; j++) {\r
                    longAdder.increment(); // Threads update separate internal Cells in parallel!\r
                }\r
            });\r
            adderThreads[i].start();\r
        }\r
        for (Thread t : adderThreads) t.join();\r
        long durB = System.currentTimeMillis() - startB;\r
\r
        System.out.printf(">>> 16 THREADS x 1,000,000 ITERATIONS BENCHMARK RESULTS:%n");\r
        System.out.printf("  1. AtomicLong Total Time : %,5d ms (High CAS contention on single cell)%n", durA);\r
        System.out.printf("  2. LongAdder Total Time  : %,5d ms (Striped Cell[] array optimization)%n", durB);\r
        System.out.printf("  ⚡ SPEEDUP FACTOR        : LongAdder is %.1fx FASTER!%n", (double) durA / Math.max(durB, 1));\r
        System.out.printf("  Final Calculated Sum     : %,d%n", longAdder.sum());\r
\r
        System.out.println("\\n>>> ARCHITECTURAL RECOMMENDATION (Doug Lea):");\r
        System.out.println("  - When many threads frequently update a counter (e.g. web server request metrics, analytics): USE LongAdder!");\r
        System.out.println("  - When you need exact sequential compareAndSet() logic or identity references: USE AtomicLong!");\r
\r
        System.out.println("\\n==========================================================================");\r
        System.out.println(" 🎉 MODULE 008_006 JMM, VOLATILE & ATOMICS 100% COMPLETE!");\r
        System.out.println("==========================================================================");\r
    }\r
}`,i=`================================================================================\r
JAVA CORE TUTORIAL - QUICK REVISION GUIDE\r
Module 008_006: JMM, volatile, Atomics & CAS\r
Topic 14: LongAdder & Striped Cells Capstone\r
Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
================================================================================\r
\r
1. MODULE 008_006 GRAND SUMMARY:\r
   - CPU Memory Hierarchy: L1/L2 caches create memory visibility hazards across cores.\r
   - JMM (JSR-133): Defines visibility and ordering contracts via Happens-Before.\r
   - volatile: Guarantees visibility and prevents reordering via Memory Barriers.\r
   - volatile Fallacy: Does NOT guarantee atomicity for compound operations (count++).\r
   - Valid volatile: Boolean flags & Double-Checked Locking singletons.\r
   - Hardware CAS: 'LOCK CMPXCHG' enables lock-free atomic modifications.\r
   - AtomicInteger / AtomicLong: Lock-free CAS wrappers in java.util.concurrent.atomic.\r
   - LongAdder / DoubleAdder: Striped Cell[] arrays minimizing CAS contention in Java 8+.\r
\r
================================================================================\r
Classroom Practice: Barrackpore Academy | Mentor: Sukanta Hui\r
================================================================================`,s=[{question:"Why is 'LongAdder' significantly faster than 'AtomicLong' in high-concurrency multi-threaded environments?",shortAnswer:"In 'AtomicLong', all threads contend on a SINGLE shared 64-bit memory cell via CAS. Under high multi-threaded contention (e.g. 16+ CPU cores), CAS failures skyrocket, forcing threads into CPU-wasting retry loops and bus cache-line bouncing. 'LongAdder' (introduced in Java 8 by Doug Lea) solves this by maintaining a dynamically striped array of 'Cell' objects. Different threads hash to different Cells and update them concurrently with near-zero contention. When the final total is needed, 'longAdder.sum()' simply aggregates the values across all internal cells.",explanation:"Grand architectural capstone of Module 008_006.",hint:"Maintains a striped array of Cell objects so threads update separate memory cells without CAS contention.",level:"Advanced",codeExample:"LongAdder adder = new LongAdder(); adder.increment(); long total = adder.sum();"}];function A(){return e.jsxs("div",{className:"space-y-12 px-4 md:px-8 py-8 text-slate-200 bg-slate-900 min-h-screen",children:[e.jsxs("header",{className:"space-y-4 border-b border-slate-800 pb-6",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"px-3 py-1 bg-sky-500/10 text-sky-400 border border-sky-500/20 text-xs font-semibold rounded-full uppercase tracking-wider",children:"Module 008_006 · Topic 14"}),e.jsx("span",{className:"px-3 py-1 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-xs font-semibold rounded-full",children:"LongAdder Capstone"})]}),e.jsxs("h1",{className:"text-xl sm:text-2xl md:text-3xl font-bold text-white tracking-tight",children:["High-Throughput Concurrency in Java 8+: ",e.jsx("code",{className:"text-emerald-400 font-mono",children:"LongAdder"})," & Striped Cells (Capstone)"]}),e.jsxs("p",{className:"text-base md:text-lg text-slate-400 leading-relaxed max-w-4xl",children:["Synthesize lock-free scalability: benchmarking single-cell ",e.jsx("code",{className:"text-sky-300 font-mono",children:"AtomicLong"})," contention against dynamically striped ",e.jsx("code",{className:"text-emerald-300 font-mono",children:"LongAdder"})," cell arrays under multi-core workloads."]})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsxs("h2",{className:"text-2xl font-bold text-emerald-400 flex items-center gap-2",children:[e.jsx("span",{children:"💻"})," Hands-On Java Demo Code"]}),e.jsx(n,{fileModule:o,title:"LongAdderStripedCellHighThroughputCapstoneDemo.java",highlightLines:[7,10,11,23,24,38,39,47,48,51,52]})]}),e.jsx("section",{className:"space-y-4",children:e.jsx(r,{title:"LongAdder Capstone FAQs",questions:s})}),e.jsx("section",{className:"space-y-4",children:e.jsx(t,{content:i,title:"Module 008_006 Topic 14: LongAdder Capstone",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Printable Note",downloadFileName:"008_006_topic14_longadder_capstone_note.txt"})}),e.jsx(a,{note:"Congratulations on completing Module 008_006! You have mastered the deepest levels of Java concurrency—from CPU cache hierarchies and JMM Happens-Before rules, to volatile memory barriers, hardware CAS, and Java 8's revolutionary LongAdder! — Sukanta Hui"})]})}export{A as default};
