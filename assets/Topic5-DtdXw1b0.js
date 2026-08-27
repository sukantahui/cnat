import{j as e}from"./vendor-react-core-Doz9nIC6.js";import{J as r}from"./JavaFileLoader-BfBG3xz_.js";import{F as t}from"./FAQTemplate-CkSqDH4B.js";import{P as a}from"./PlainTextPrint-C08xhKA4.js";import{T as i}from"./TeacherSukantaHui-CC0AKmkm.js";import"./JavaCodeBlock-BwsLxS3r.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-BtJHuk7w.js";const o=`/**\r
 * Java Core Tutorial - Module 008_006: JMM, volatile, Atomics & CAS\r
 * Topic 5: The volatile Keyword in Java: Lightweight Non-Blocking Visibility\r
 * Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
 */\r
\r
package com.coderaccotax.javatutorial.multithreading;\r
\r
public class VolatileKeywordOverviewDemo {\r
\r
    // 1. VOLATILE FIELD:\r
    // - Guarantees all writes are immediately written to main RAM.\r
    // - Guarantees all reads are loaded directly from main RAM (never stale in CPU cache!).\r
    private static volatile boolean active = true;\r
\r
    public static void main(String[] args) throws InterruptedException {\r
        System.out.println("==========================================================================");\r
        System.out.println(" TOPIC 5: THE volatile KEYWORD OVERVIEW - BARRACKPORE");\r
        System.out.println("==========================================================================\\n");\r
\r
        Thread worker = new Thread(() -> {\r
            long loopCount = 0;\r
            System.out.println("  [Worker] Worker thread running with volatile 'active' flag...");\r
\r
            // Because 'active' is VOLATILE, JIT cannot hoist it into a register!\r
            // It MUST re-read from memory on every loop iteration:\r
            while (active) {\r
                loopCount++;\r
            }\r
\r
            System.out.printf(">>> [Worker] Instant reaction! Stopped after %,d iterations.%n", loopCount);\r
        }, "Volatile-Worker");\r
\r
        worker.start();\r
        Thread.sleep(100);\r
\r
        System.out.println(">>> Main thread setting 'active = false'...");\r
        active = false; // Immediately visible to worker thread!\r
\r
        worker.join(); // Terminates cleanly without hanging!\r
\r
        System.out.println("\\n>>> THE 2 CORE PILLARS OF volatile IN JAVA:");\r
        System.out.println("  1. Memory Visibility           : Flushes writes to RAM; forces reads from RAM.");\r
        System.out.println("  2. Instruction Ordering Fences : Prevents compiler and CPU instruction reordering across volatile reads/writes.");\r
\r
        System.out.println("\\n==========================================================================");\r
    }\r
}`,n=`================================================================================\r
JAVA CORE TUTORIAL - QUICK REVISION GUIDE\r
Module 008_006: JMM, volatile, Atomics & CAS\r
Topic 5: volatile Keyword Overview\r
Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
================================================================================\r
\r
1. THE VOLATILE KEYWORD:\r
   - Modifier applied to instance/static fields.\r
   - Pillar 1: Memory Visibility (reads/writes direct to main RAM).\r
   - Pillar 2: Prevents instruction reordering (Memory Barriers).\r
   - Non-blocking (no thread context switching, 0 lock overhead).\r
   - Does NOT guarantee atomicity for compound operations (e.g. 'count++').\r
\r
================================================================================\r
Classroom Practice: Barrackpore Academy | Mentor: Sukanta Hui\r
================================================================================`,l=[{question:"What are the two primary guarantees provided by the 'volatile' keyword in Java?",shortAnswer:"1. 'Memory Visibility Guarantee': Writes to a volatile variable are immediately flushed out of the CPU's local write-buffer directly into main memory (RAM). Subsequent reads of that volatile variable bypass local L1/L2 caches and are read directly from main memory. 2. 'Instruction Ordering Guarantee (Memory Barriers)': The JVM inserts hardware memory fences around volatile reads and writes, preventing the compiler, JIT, and CPU from reordering memory instructions across the volatile access boundary.",explanation:"Core definition of the volatile keyword in the Java Memory Model.",hint:"Guarantees immediate memory visibility across CPU caches and prevents instruction reordering via memory fences.",level:"Beginner",codeExample:"private static volatile boolean ready = false; // Visible to all threads without locking"}];function y(){return e.jsxs("div",{className:"space-y-12 px-4 md:px-8 py-8 text-slate-200 bg-slate-900 min-h-screen",children:[e.jsxs("header",{className:"space-y-4 border-b border-slate-800 pb-6",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"px-3 py-1 bg-sky-500/10 text-sky-400 border border-sky-500/20 text-xs font-semibold rounded-full uppercase tracking-wider",children:"Module 008_006 · Topic 5"}),e.jsx("span",{className:"px-3 py-1 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-xs font-semibold rounded-full",children:"volatile Keyword"})]}),e.jsxs("h1",{className:"text-3xl md:text-4xl font-extrabold text-white tracking-tight",children:["The ",e.jsx("code",{className:"text-emerald-400 font-mono",children:"volatile"})," Keyword in Java: Lightweight Memory Visibility"]}),e.jsxs("p",{className:"text-base md:text-lg text-slate-400 leading-relaxed max-w-4xl",children:["Achieve non-blocking coordination: utilizing the ",e.jsx("code",{className:"text-emerald-300 font-mono",children:"volatile"})," modifier to flush CPU cache write-buffers directly to RAM with zero thread locking overhead."]})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsxs("h2",{className:"text-2xl font-bold text-emerald-400 flex items-center gap-2",children:[e.jsx("span",{children:"💻"})," Hands-On Java Demo Code"]}),e.jsx(r,{fileModule:o,title:"VolatileKeywordOverviewDemo.java",highlightLines:[7,10,13,14,21,22,29,30]})]}),e.jsx("section",{className:"space-y-4",children:e.jsx(t,{title:"volatile Overview FAQs",questions:l})}),e.jsx("section",{className:"space-y-4",children:e.jsx(a,{content:n,title:"Module 008_006 Topic 5: volatile Keyword Overview",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Printable Note",downloadFileName:"008_006_topic5_volatile_keyword_overview_note.txt"})}),e.jsx(i,{note:"Think of 'volatile' as a direct hotline to main RAM! Normal variables can hide in a CPU core's private drawer (L1 cache), but a volatile variable is always written straight to the big whiteboard in main memory for all threads to see! — Sukanta Hui"})]})}export{y as default};
