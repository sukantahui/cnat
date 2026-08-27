import{j as e}from"./vendor-react-core-Doz9nIC6.js";import{J as t}from"./JavaFileLoader-BfBG3xz_.js";import{F as n}from"./FAQTemplate-CkSqDH4B.js";import{P as r}from"./PlainTextPrint-C08xhKA4.js";import{T as o}from"./TeacherSukantaHui-CyIG3xbg.js";import"./JavaCodeBlock-BwsLxS3r.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-CIaKtAt4.js";const a=`/**\r
 * Java Core Tutorial - Module 008_007: ExecutorService, Thread Pools & CompletableFuture\r
 * Topic 9: Graceful Shutdown: 2-Phase Protocol via shutdown(), shutdownNow() & awaitTermination()\r
 * Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
 */\r
\r
package com.coderaccotax.javatutorial.multithreading;\r
\r
import java.util.List;\r
import java.util.concurrent.ExecutorService;\r
import java.util.concurrent.Executors;\r
import java.util.concurrent.TimeUnit;\r
\r
public class GracefulExecutorShutdownProtocolDemo {\r
\r
    // 1. CANONICAL 2-PHASE SHUTDOWN PROTOCOL (Oracle / Doug Lea standard):\r
    public static void shutdownAndAwaitTermination(ExecutorService pool) {\r
        // Phase 1: Disable new tasks from being submitted:\r
        pool.shutdown();\r
        try {\r
            // Wait up to 5 seconds for existing tasks to terminate:\r
            if (!pool.awaitTermination(5, TimeUnit.SECONDS)) {\r
                System.out.println("  [Shutdown Handler] Tasks took > 5s. Cancelling running tasks via shutdownNow()...");\r
                // Phase 2: Cancel currently executing tasks via interrupt:\r
                List<Runnable> droppedTasks = pool.shutdownNow();\r
                System.out.printf("  [Shutdown Handler] Dropped %d queued tasks.%n", droppedTasks.size());\r
\r
                // Wait another 5 seconds for tasks to respond to interrupt:\r
                if (!pool.awaitTermination(5, TimeUnit.SECONDS)) {\r
                    System.err.println("  [Shutdown Handler] CRITICAL: Thread pool did NOT terminate cleanly!");\r
                }\r
            }\r
        } catch (InterruptedException ie) {\r
            // Re-cancel if current thread was also interrupted:\r
            pool.shutdownNow();\r
            Thread.currentThread().interrupt();\r
        }\r
    }\r
\r
    public static void main(String[] args) {\r
        System.out.println("==========================================================================");\r
        System.out.println(" TOPIC 9: GRACEFUL EXECUTOR SERVICE SHUTDOWN PROTOCOL - BARRACKPORE");\r
        System.out.println("==========================================================================\\n");\r
\r
        ExecutorService executor = Executors.newFixedThreadPool(2);\r
\r
        executor.submit(() -> {\r
            System.out.println("  [Worker] Performing task safely...");\r
            try { Thread.sleep(200); } catch (InterruptedException ignored) {}\r
            System.out.println("  [Worker] Finished task safely before shutdown!");\r
        });\r
\r
        System.out.println(">>> Executing 2-Phase Graceful Shutdown Protocol...");\r
        shutdownAndAwaitTermination(executor);\r
\r
        System.out.println("\\n>>> Pool shutdown complete! Is Terminated? " + executor.isTerminated());\r
\r
        System.out.println("\\n==========================================================================");\r
    }\r
}`,i=`================================================================================\r
JAVA CORE TUTORIAL - QUICK REVISION GUIDE\r
Module 008_007: ExecutorService, Thread Pools & CompletableFuture\r
Topic 9: Graceful Executor Shutdown\r
Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
================================================================================\r
\r
1. GRACEFUL SHUTDOWN PROTOCOL:\r
   - 'shutdown()': Stops accepting new tasks; drains existing queue.\r
   - 'shutdownNow()': Sends 'interrupt()' to running threads; returns unstarted tasks.\r
   - 'awaitTermination(t, unit)': Blocks calling thread waiting for termination.\r
   - Standard 2-Phase: 'shutdown()' &rarr; 'await(5s)' &rarr; if timeout: 'shutdownNow()' &rarr; 'await(5s)'.\r
\r
================================================================================\r
Classroom Practice: Barrackpore Academy | Mentor: Sukanta Hui\r
================================================================================`,s=[{question:"Explain the standard 2-Phase Graceful Shutdown Protocol for 'ExecutorService' recommended by Oracle.",shortAnswer:"1. 'Phase 1 (Polite Drain)': Call 'pool.shutdown()' to reject new incoming submissions while allowing all currently queued and executing tasks to finish. 2. 'Wait SLA': Call 'pool.awaitTermination(timeout, unit)' to block and wait for completion. 3. 'Phase 2 (Forceful Cancellation)': If the timeout expires before tasks complete, call 'pool.shutdownNow()' to send thread interrupts ('Thread.interrupt()') to currently running workers and drain unstarted tasks from the queue into a List<Runnable>. 4. 'Final Wait': Call 'awaitTermination()' a second time to ensure all interrupted tasks unwind and terminate cleanly.",explanation:"Standard production graceful shutdown idiom from Java official documentation.",hint:"Phase 1: shutdown() + awaitTermination(); Phase 2 (if timeout): shutdownNow() + awaitTermination().",level:"Intermediate",codeExample:"pool.shutdown(); if (!pool.awaitTermination(5, TimeUnit.SECONDS)) pool.shutdownNow();"}];function w(){return e.jsxs("div",{className:"space-y-12 px-4 md:px-8 py-8 text-slate-200 bg-slate-900 min-h-screen",children:[e.jsxs("header",{className:"space-y-4 border-b border-slate-800 pb-6",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"px-3 py-1 bg-sky-500/10 text-sky-400 border border-sky-500/20 text-xs font-semibold rounded-full uppercase tracking-wider",children:"Module 008_007 · Topic 9"}),e.jsx("span",{className:"px-3 py-1 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-xs font-semibold rounded-full",children:"Graceful Shutdown"})]}),e.jsxs("h1",{className:"text-3xl md:text-4xl font-extrabold text-white tracking-tight",children:["Graceful Shutdown of ",e.jsx("code",{className:"text-emerald-400 font-mono",children:"ExecutorService"}),": The 2-Phase Protocol"]}),e.jsxs("p",{className:"text-base md:text-lg text-slate-400 leading-relaxed max-w-4xl",children:["Master production cleanup lifecycles: implementing the canonical 2-phase shutdown idiom combining ",e.jsx("code",{className:"text-emerald-300 font-mono",children:"shutdown()"}),", ",e.jsx("code",{className:"text-amber-300 font-mono",children:"awaitTermination()"}),", and ",e.jsx("code",{className:"text-rose-300 font-mono",children:"shutdownNow()"}),"."]})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsxs("h2",{className:"text-2xl font-bold text-emerald-400 flex items-center gap-2",children:[e.jsx("span",{children:"💻"})," Hands-On Java Demo Code"]}),e.jsx(t,{fileModule:a,title:"GracefulExecutorShutdownProtocolDemo.java",highlightLines:[7,10,16,17,20,21,23,24,38,39]})]}),e.jsx("section",{className:"space-y-4",children:e.jsx(n,{title:"Graceful Shutdown FAQs",questions:s})}),e.jsx("section",{className:"space-y-4",children:e.jsx(r,{content:i,title:"Module 008_007 Topic 9: Graceful Executor Shutdown",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Printable Note",downloadFileName:"008_007_topic9_graceful_executor_shutdown_note.txt"})}),e.jsx(o,{note:"Never leave an ExecutorService running when your application shuts down! Always use the 2-phase shutdown protocol: first call shutdown() to let existing tasks finish, and if they take too long, call shutdownNow() to cancel them! — Sukanta Hui"})]})}export{w as default};
