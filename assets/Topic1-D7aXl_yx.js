import{j as e}from"./vendor-react-core-Doz9nIC6.js";import{J as r}from"./JavaFileLoader-BfBG3xz_.js";import{F as n}from"./FAQTemplate-BHhlgA96.js";import{P as i}from"./PlainTextPrint-C08xhKA4.js";import{T as t}from"./TeacherSukantaHui-DerPxfxp.js";import"./JavaCodeBlock-BwsLxS3r.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-CH1iX9C8.js";const o=`/**\r
 * Java Core Tutorial - Module 008_006: JMM, volatile, Atomics & CAS\r
 * Topic 1: The Memory Visibility Problem: Stale CPU Caches & Infinite Worker Loops\r
 * Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
 */\r
\r
package com.coderaccotax.javatutorial.multithreading;\r
\r
public class MemoryVisibilityInfiniteLoopDemo {\r
\r
    // NON-VOLATILE SHARED FLAG:\r
    private static boolean running = true;\r
\r
    public static void main(String[] args) throws InterruptedException {\r
        System.out.println("==========================================================================");\r
        System.out.println(" TOPIC 1: THE MEMORY VISIBILITY PROBLEM - BARRACKPORE");\r
        System.out.println("==========================================================================\\n");\r
\r
        Thread workerThread = new Thread(() -> {\r
            long count = 0;\r
            System.out.println("  [Worker Thread] Started executing loop...");\r
\r
            // JIT COMPILER OPTIMIZATION (Hoisting):\r
            // Because 'running' is NOT volatile, JIT compiler transforms 'while(running)' into:\r
            // 'if (running) while(true) count++;' (Caching 'running = true' inside CPU register permanently!)\r
            while (running) {\r
                count++;\r
            }\r
\r
            System.out.printf("  [Worker Thread] FINISHED loop after %,d iterations!%n", count);\r
        }, "Worker-Thread");\r
\r
        workerThread.start();\r
        Thread.sleep(100); // Let worker start spinning\r
\r
        System.out.println(">>> Main Thread changing 'running = false' in memory...");\r
        running = false; // Writes false to Main thread's cache/RAM\r
\r
        System.out.println(">>> Main thread waiting for worker to finish via join(1000)...");\r
        workerThread.join(1000); // Will TIME OUT because worker is stuck in infinite loop!\r
\r
        if (workerThread.isAlive()) {\r
            System.out.println("\\n🚨 WORKER THREAD IS STUCK IN INFINITE LOOP!");\r
            System.out.println("  Reason: Worker thread cached 'running = true' in its CPU L1 register and NEVER saw main thread's update!");\r
            System.exit(0); // Terminate demo\r
        }\r
\r
        System.out.println("\\n==========================================================================");\r
    }\r
}`,a=`================================================================================\r
JAVA CORE TUTORIAL - QUICK REVISION GUIDE\r
Module 008_006: JMM, volatile, Atomics & CAS\r
Topic 1: Memory Visibility Problem\r
Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
================================================================================\r
\r
1. MEMORY VISIBILITY PROBLEM:\r
   - Changes made by Thread A on Core 1 are buffered in Core 1's cache.\r
   - Thread B on Core 2 reads stale value from Core 2's cache.\r
   - JIT compiler optimizes 'while(flag)' into an infinite register loop.\r
   - Fix: Declare flag as 'volatile' or guard with 'synchronized'.\r
\r
================================================================================\r
Classroom Practice: Barrackpore Academy | Mentor: Sukanta Hui\r
================================================================================`,s=[{question:"Why does a worker thread running 'while (running)' enter an infinite loop when another thread sets 'running = false' if the field is not volatile?",shortAnswer:"Because without the 'volatile' keyword or synchronization memory barriers, the JVM JIT compiler and hardware CPU assume the variable is only accessed by a single thread. The JIT compiler optimizes the loop by 'hoisting' the read out of the loop ('if (running) while(true)'), caching 'running = true' indefinitely in a CPU register or L1 cache. The worker thread never re-reads the updated value from main RAM, remaining trapped in an infinite loop.",explanation:"Classic Java Memory Model visibility defect.",hint:"JIT compiler hoists the variable read into a CPU register; the worker never checks RAM again.",level:"Intermediate",codeExample:"private static boolean running = true; // Stuck! Change to: private static volatile boolean running = true;"}];function x(){return e.jsxs("div",{className:"space-y-12 px-4 md:px-8 py-8 text-slate-200 bg-slate-900 min-h-screen",children:[e.jsxs("header",{className:"space-y-4 border-b border-slate-800 pb-6",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"px-3 py-1 bg-sky-500/10 text-sky-400 border border-sky-500/20 text-xs font-semibold rounded-full uppercase tracking-wider",children:"Module 008_006 · Topic 1"}),e.jsx("span",{className:"px-3 py-1 bg-rose-500/10 text-rose-400 border border-rose-500/20 text-xs font-semibold rounded-full",children:"Memory Visibility"})]}),e.jsxs("h1",{className:"text-xl sm:text-2xl md:text-3xl font-bold text-white tracking-tight",children:["The ",e.jsx("code",{className:"text-rose-400 font-mono",children:"Memory Visibility"})," Problem: Stale CPU Caches & Infinite Loops"]}),e.jsx("p",{className:"text-base md:text-lg text-slate-400 leading-relaxed max-w-4xl",children:"Witness stale cache bugs live: observing how JIT compiler hoisting and un-synchronized CPU registers trap background worker threads in infinite loops despite main memory updates."})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsxs("h2",{className:"text-2xl font-bold text-emerald-400 flex items-center gap-2",children:[e.jsx("span",{children:"💻"})," Hands-On Java Demo Code"]}),e.jsx(r,{fileModule:o,title:"MemoryVisibilityInfiniteLoopDemo.java",highlightLines:[7,10,13,14,21,22,29,30,32,33]})]}),e.jsx("section",{className:"space-y-4",children:e.jsx(n,{title:"Memory Visibility FAQs",questions:s})}),e.jsx("section",{className:"space-y-4",children:e.jsx(i,{content:a,title:"Module 008_006 Topic 1: Memory Visibility Problem",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Printable Note",downloadFileName:"008_006_topic1_memory_visibility_note.txt"})}),e.jsx(t,{note:"If you change a normal boolean flag to false on the main thread, the worker thread on another CPU core might NEVER see it! The worker caches 'true' in its CPU register and runs forever in an infinite loop! That is the Memory Visibility bug! — Sukanta Hui"})]})}export{x as default};
