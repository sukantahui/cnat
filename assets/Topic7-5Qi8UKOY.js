import{j as e}from"./vendor-react-core-Doz9nIC6.js";import{J as t}from"./JavaFileLoader-BfBG3xz_.js";import{F as n}from"./FAQTemplate-BHhlgA96.js";import{P as r}from"./PlainTextPrint-C08xhKA4.js";import{T as a}from"./TeacherSukantaHui-DDN87fI5.js";import"./JavaCodeBlock-BwsLxS3r.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-DEsnU7fn.js";const o=`/**\r
 * Java Core Tutorial - Module 008_008: Explicit Locks & Synchronizers\r
 * Topic 7: Concurrency Synchronizer 1: CountDownLatch (One-Time Gatekeeper)\r
 * Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
 */\r
\r
package com.coderaccotax.javatutorial.multithreading;\r
\r
import java.util.concurrent.CountDownLatch;\r
\r
public class CountDownLatchGatekeeperDemo {\r
\r
    public static void main(String[] args) throws InterruptedException {\r
        System.out.println("==========================================================================");\r
        System.out.println(" TOPIC 7: CountDownLatch SYNCHRONIZER - BARRACKPORE ACADEMY");\r
        System.out.println("==========================================================================\\n");\r
\r
        int workerCount = 3;\r
        // CountDownLatch initialized with N=3 events:\r
        CountDownLatch latch = new CountDownLatch(workerCount);\r
\r
        for (int i = 1; i <= workerCount; i++) {\r
            final int workerId = i;\r
            new Thread(() -> {\r
                try {\r
                    System.out.printf("  [Audit Worker #%d] Verifying branch accounts...%n", workerId);\r
                    Thread.sleep(workerId * 150);\r
                    System.out.printf("  [Audit Worker #%d] VERIFIED! Counting down latch.%n", workerId);\r
                } catch (InterruptedException ignored) {\r
                } finally {\r
                    // Decrement latch count atomically:\r
                    latch.countDown();\r
                }\r
            }, "Worker-" + i).start();\r
        }\r
\r
        System.out.println(">>> Main Thread waiting at latch.await() for all 3 workers to finish...");\r
        // BLOCKS until count reaches ZERO:\r
        latch.await();\r
\r
        System.out.println("\\n>>> LATCH OPENED (Count reached 0)! Main thread generates final Tax Return!");\r
\r
        System.out.println("\\n==========================================================================");\r
    }\r
}`,i=`================================================================================\r
JAVA CORE TUTORIAL - QUICK REVISION GUIDE\r
Module 008_008: Explicit Locks & Synchronizers\r
Topic 7: CountDownLatch Gatekeeper\r
Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
================================================================================\r
\r
1. COUNTDOWNLATCH:\r
   - Initialized with count N.\r
   - 'await()': Blocks until count == 0.\r
   - 'countDown()': Atomically decrements count by 1.\r
   - One-Time Use ONLY (Cannot be reset or reused).\r
   - Use Case: Server startup (wait for DB, Cache, and Messaging to initialize).\r
\r
================================================================================\r
Classroom Practice: Barrackpore Academy | Mentor: Sukanta Hui\r
================================================================================`,c=[{question:"What is 'CountDownLatch' in Java, how does it coordinate threads, and can it be reset after reaching zero?",shortAnswer:"'CountDownLatch' is a one-time synchronization barrier initialized with an integer count N. Threads calling 'latch.await()' block until the count reaches zero. Worker threads perform independent tasks and call 'latch.countDown()', which decrements the counter atomically. When the count reaches 0, the latch opens and all waiting threads are released simultaneously. 'CountDownLatch CANNOT be reset'—its count is strictly one-way and irreversible; if you need a reusable barrier, use 'CyclicBarrier'.",explanation:"Foundational Java concurrency synchronizer from java.util.concurrent.",hint:"Initialized with count N; workers call countDown(); master calls await(); CANNOT be reset.",level:"Intermediate",codeExample:"CountDownLatch latch = new CountDownLatch(3); latch.countDown(); latch.await();"}];function x(){return e.jsxs("div",{className:"space-y-12 px-4 md:px-8 py-8 text-slate-200 bg-slate-900 min-h-screen",children:[e.jsxs("header",{className:"space-y-4 border-b border-slate-800 pb-6",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"px-3 py-1 bg-sky-500/10 text-sky-400 border border-sky-500/20 text-xs font-semibold rounded-full uppercase tracking-wider",children:"Module 008_008 · Topic 7"}),e.jsx("span",{className:"px-3 py-1 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-xs font-semibold rounded-full",children:"CountDownLatch"})]}),e.jsxs("h1",{className:"text-xl sm:text-2xl md:text-3xl font-bold text-white tracking-tight",children:["Concurrency Synchronizers: ",e.jsx("code",{className:"text-emerald-400 font-mono",children:"CountDownLatch"})," Gatekeeper"]}),e.jsxs("p",{className:"text-base md:text-lg text-slate-400 leading-relaxed max-w-4xl",children:["Coordinate multi-threaded startup phases: utilizing one-time ",e.jsx("code",{className:"text-emerald-300 font-mono",children:"CountDownLatch"})," barriers to block execution until N parallel initialization tasks complete."]})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsxs("h2",{className:"text-2xl font-bold text-emerald-400 flex items-center gap-2",children:[e.jsx("span",{children:"💻"})," Hands-On Java Demo Code"]}),e.jsx(t,{fileModule:o,title:"CountDownLatchGatekeeperDemo.java",highlightLines:[7,10,14,15,26,27,33,34]})]}),e.jsx("section",{className:"space-y-4",children:e.jsx(n,{title:"CountDownLatch FAQs",questions:c})}),e.jsx("section",{className:"space-y-4",children:e.jsx(r,{content:i,title:"Module 008_008 Topic 7: CountDownLatch Gatekeeper",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Printable Note",downloadFileName:"008_008_topic7_countdownlatch_gatekeeper_note.txt"})}),e.jsx(a,{note:"CountDownLatch is like a starting gate at a marathon: The main application waits at the gate until all 3 worker threads signal 'countDown()' that their systems are ready! Once the count hits 0, the gate opens and the race begins! — Sukanta Hui"})]})}export{x as default};
