import{j as e}from"./vendor-react-core-Doz9nIC6.js";import{J as r}from"./JavaFileLoader-BfBG3xz_.js";import{F as n}from"./FAQTemplate-BHhlgA96.js";import{P as t}from"./PlainTextPrint-C08xhKA4.js";import{T as a}from"./TeacherSukantaHui-BaJcBHAy.js";import"./JavaCodeBlock-BwsLxS3r.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-8ao-0upJ.js";const i=`/**\r
 * Java Core Tutorial - Module 012_003: High-Concurrency Order Matching Engine\r
 * Topic 4: Parallel Ingestion with Java 21 Virtual Threads\r
 * Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
 */\r
\r
package com.coderaccotax.javatutorial.exchange;\r
\r
import java.util.concurrent.ExecutorService;\r
import java.util.concurrent.Executors;\r
import java.util.concurrent.atomic.LongAdder;\r
\r
public class ParallelOrderIngestionVirtualThreadsDemo {\r
\r
    public static void main(String[] args) {\r
        System.out.println("==========================================================================");\r
        System.out.println(" TOPIC 4: PARALLEL ORDER INGESTION & VIRTUAL THREADS - BARRACKPORE");\r
        System.out.println("==========================================================================\\n");\r
\r
        LongAdder ingestedOrders = new LongAdder();\r
        int clientCount = 50_000;\r
\r
        System.out.println(">>> Spawning " + clientCount + " Virtual Threads to simulate concurrent trader connections...");\r
\r
        long startTime = System.currentTimeMillis();\r
\r
        try (ExecutorService executor = Executors.newVirtualThreadPerTaskExecutor()) {\r
            for (int i = 0; i < clientCount; i++) {\r
                executor.submit(() -> {\r
                    // Simulate parsing inbound FIX/WebSocket message:\r
                    ingestedOrders.increment();\r
                });\r
            }\r
        } // Auto-awaits completion of all virtual threads!\r
\r
        long duration = System.currentTimeMillis() - startTime;\r
\r
        System.out.println(">>> INGESTION PERFORMANCE:");\r
        System.out.println("  - Total Virtual Threads Processed : " + ingestedOrders.sum());\r
        System.out.println("  - Time Taken                     : " + duration + " ms");\r
        System.out.println("  - Throughput                     : " + (ingestedOrders.sum() * 1000L / Math.max(1, duration)) + " orders/sec");\r
\r
        System.out.println("\\n==========================================================================");\r
    }\r
}\r
`,o=`================================================================================\r
JAVA CORE TUTORIAL - QUICK REVISION GUIDE\r
Module 012_003: High-Concurrency Order Matching Engine\r
Topic 4: Parallel Ingestion with Virtual Threads\r
Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
================================================================================\r
\r
1. VIRTUAL THREADS IN ORDER GATEWAYS:\r
   - 'Executors.newVirtualThreadPerTaskExecutor()' provides one thread per inbound connection.\r
   - Millions of virtual threads mount onto a handful of carrier OS threads.\r
   - Non-blocking I/O suspends the continuation without blocking operating system threads.\r
\r
================================================================================\r
Classroom Practice: Barrackpore Academy | Mentor: Sukanta Hui\r
================================================================================\r
`,s=[{question:"Why are Java 21 Virtual Threads ideal for network ingestion gateways in high-throughput exchanges?",shortAnswer:"Because network gateways spend most time waiting on I/O sockets; virtual threads have lightweight stacks (~few KB vs 1MB OS threads) and unmount during I/O wait without consuming OS thread handles, supporting millions of concurrent connections.",explanation:"JEP 444 virtual thread architecture.",hint:"Lightweight user-mode threads unmount during socket I/O waits.",level:"Intermediate",codeExample:"Executors.newVirtualThreadPerTaskExecutor()"},{question:"Why should LongAdder be used instead of AtomicLong for measuring global ingested order counts?",shortAnswer:"LongAdder stripes internal counters across multiple cells to eliminate thread contention and CPU cache-line bouncing under extreme multi-threaded increment bursts.",explanation:"High-concurrency striped counter in java.util.concurrent.atomic.",hint:"Striped internal cells eliminate CAS cache-line contention.",level:"Intermediate",codeExample:"LongAdder counter = new LongAdder(); counter.increment();"}];function x(){return e.jsxs("div",{className:"space-y-12 px-4 md:px-8 py-8 text-slate-200 bg-slate-900 min-h-screen",children:[e.jsxs("header",{className:"space-y-4 border-b border-slate-800 pb-6",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"px-3 py-1 bg-sky-500/10 text-sky-400 border border-sky-500/20 text-xs font-semibold rounded-full uppercase tracking-wider",children:"Module 012_003 · Topic 4"}),e.jsx("span",{className:"px-3 py-1 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-xs font-semibold rounded-full",children:"Capstone 2: Order Matching Engine"})]}),e.jsxs("h1",{className:"text-xl sm:text-2xl md:text-3xl font-bold text-white tracking-tight",children:["Parallel Ingestion: ",e.jsx("code",{className:"text-emerald-400 font-mono",children:"Java 21 Virtual Threads"})]}),e.jsx("p",{className:"text-base md:text-lg text-slate-400 leading-relaxed max-w-4xl",children:"Massive scale concurrency: ingesting 100,000+ incoming WebSocket orders concurrently using Java 21 Virtual Threads (newVirtualThreadPerTaskExecutor)."})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsxs("h2",{className:"text-2xl font-bold text-emerald-400 flex items-center gap-2",children:[e.jsx("span",{children:"💻"})," Hands-On Java Demo Code"]}),e.jsx(r,{fileModule:i,title:"ParallelOrderIngestionVirtualThreadsDemo.java",highlightLines:[18,25,34,43]})]}),e.jsx("section",{className:"space-y-4",children:e.jsx(n,{title:"Order Matching Engine FAQs",questions:s})}),e.jsx("section",{className:"space-y-4",children:e.jsx(t,{content:o,title:"Module 012_003 Topic 4: Parallel Order Ingestion with Virtual Threads",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Printable Note",downloadFileName:"012_003_topic4_parallel_order_ingestion_virtual_threads_note.txt"})}),e.jsx(a,{note:"Java 21 Virtual Threads are a game changer for financial gateways! Instead of capping your thread pool at 200 platform threads, you can effortlessly spawn 100,000 virtual threads to handle connections from thousands of traders! — Sukanta Hui"})]})}export{x as default};
