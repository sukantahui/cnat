import{j as e}from"./vendor-react-core-Doz9nIC6.js";import{J as n}from"./JavaFileLoader-BfBG3xz_.js";import{F as r}from"./FAQTemplate-CkSqDH4B.js";import{P as t}from"./PlainTextPrint-C08xhKA4.js";import{T as o}from"./TeacherSukantaHui-CyIG3xbg.js";import"./JavaCodeBlock-BwsLxS3r.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-CIaKtAt4.js";const a=`/**\r
 * Java Core Tutorial - Module 008_007: ExecutorService, Thread Pools & CompletableFuture\r
 * Topic 4: Executors.newFixedThreadPool(n): Fixed Workers & Unbounded LinkedBlockingQueue\r
 * Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
 */\r
\r
package com.coderaccotax.javatutorial.multithreading;\r
\r
import java.util.concurrent.ExecutorService;\r
import java.util.concurrent.Executors;\r
\r
public class FixedThreadPoolUnboundedQueueRiskDemo {\r
\r
    public static void main(String[] args) throws InterruptedException {\r
        System.out.println("==========================================================================");\r
        System.out.println(" TOPIC 4: Executors.newFixedThreadPool(n) DEEP DIVE - BARRACKPORE");\r
        System.out.println("==========================================================================\\n");\r
\r
        // Fixed thread pool with exactly 3 worker threads:\r
        ExecutorService fixedPool = Executors.newFixedThreadPool(3);\r
\r
        System.out.println(">>> 1. HOW newFixedThreadPool(3) IS CONSTRUCTED INTERNALLY:");\r
        System.out.println("  return new ThreadPoolExecutor(");\r
        System.out.println("      3, 3,                         // corePoolSize = 3, maxPoolSize = 3");\r
        System.out.println("      0L, TimeUnit.MILLISECONDS,    // keepAliveTime = 0 (threads never die)");\r
        System.out.println("      new LinkedBlockingQueue<>()   // Capacity = Integer.MAX_VALUE (2,147,483,647!)");\r
        System.out.println("  );");\r
        System.out.println();\r
\r
        System.out.println(">>> 2. Submitting 6 tasks to FixedThreadPool:");\r
        for (int i = 1; i <= 6; i++) {\r
            final int id = i;\r
            fixedPool.submit(() -> {\r
                System.out.printf("  [Task #%d] Running on %s%n", id, Thread.currentThread().getName());\r
                try { Thread.sleep(150); } catch (InterruptedException ignored) {}\r
            });\r
        }\r
\r
        fixedPool.shutdown();\r
\r
        System.out.println("\\n==========================================================================");\r
    }\r
}`,i=`================================================================================\r
JAVA CORE TUTORIAL - QUICK REVISION GUIDE\r
Module 008_007: ExecutorService, Thread Pools & CompletableFuture\r
Topic 4: FixedThreadPool & Unbounded Queue\r
Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
================================================================================\r
\r
1. NEWFIXEDTHREADPOOL(N):\r
   - 'corePoolSize = n', 'maxPoolSize = n'.\r
   - 'workQueue': Unbounded 'LinkedBlockingQueue' (Integer.MAX_VALUE).\r
   - Rejection policy is NEVER triggered because queue never fills up!\r
   - Risk: Sudden traffic spike queues millions of tasks &rarr; Heap OOM.\r
   - Solution: Use 'ArrayBlockingQueue' with explicit bounded capacity.\r
\r
================================================================================\r
Classroom Practice: Barrackpore Academy | Mentor: Sukanta Hui\r
================================================================================`,s=[{question:"What is the internal configuration of 'Executors.newFixedThreadPool(n)' and what causes its OutOfMemoryError risk?",shortAnswer:"'Executors.newFixedThreadPool(n)' creates a 'ThreadPoolExecutor' with: 'corePoolSize = n', 'maximumPoolSize = n', 'keepAliveTime = 0ms', and an unbounded 'new LinkedBlockingQueue<Runnable>()'. Because the queue has a default capacity of 'Integer.MAX_VALUE' (over 2.14 billion tasks), if tasks arrive faster than the 'n' worker threads can execute them, pending tasks accumulate indefinitely in heap memory until the JVM runs out of memory and crashes with 'java.lang.OutOfMemoryError: Java heap space'.",explanation:"Deep dive into FixedThreadPool internals and heap exhaustion vulnerability.",hint:"Uses an unbounded LinkedBlockingQueue with capacity of Integer.MAX_VALUE, risking Java heap space OOM.",level:"Intermediate",codeExample:"new ThreadPoolExecutor(n, n, 0L, TimeUnit.MILLISECONDS, new LinkedBlockingQueue<Runnable>());"}];function k(){return e.jsxs("div",{className:"space-y-12 px-4 md:px-8 py-8 text-slate-200 bg-slate-900 min-h-screen",children:[e.jsxs("header",{className:"space-y-4 border-b border-slate-800 pb-6",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"px-3 py-1 bg-sky-500/10 text-sky-400 border border-sky-500/20 text-xs font-semibold rounded-full uppercase tracking-wider",children:"Module 008_007 · Topic 4"}),e.jsx("span",{className:"px-3 py-1 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-xs font-semibold rounded-full",children:"FixedThreadPool"})]}),e.jsxs("h1",{className:"text-3xl md:text-4xl font-extrabold text-white tracking-tight",children:[e.jsx("code",{className:"text-emerald-400 font-mono",children:"Executors.newFixedThreadPool(n)"}),": Unbounded Queue & OOM Hazards"]}),e.jsxs("p",{className:"text-base md:text-lg text-slate-400 leading-relaxed max-w-4xl",children:["Dissect fixed-worker pool internals: analyzing ",e.jsx("code",{className:"text-emerald-300 font-mono",children:"LinkedBlockingQueue"})," allocation, task buffering dynamics, and heap memory exhaustion failure modes."]})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsxs("h2",{className:"text-2xl font-bold text-emerald-400 flex items-center gap-2",children:[e.jsx("span",{children:"💻"})," Hands-On Java Demo Code"]}),e.jsx(n,{fileModule:a,title:"FixedThreadPoolUnboundedQueueRiskDemo.java",highlightLines:[7,10,15,16,17,18,19,24,25]})]}),e.jsx("section",{className:"space-y-4",children:e.jsx(r,{title:"FixedThreadPool FAQs",questions:s})}),e.jsx("section",{className:"space-y-4",children:e.jsx(t,{content:i,title:"Module 008_007 Topic 4: FixedThreadPool & Unbounded Queue",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Printable Note",downloadFileName:"008_007_topic4_fixed_thread_pool_note.txt"})}),e.jsx(o,{note:"In FixedThreadPool, the number of worker threads is fixed (e.g. 3), but the queue waiting behind them is infinite! If 1,000,000 tasks arrive and your 3 workers are slow, your JVM heap explodes! — Sukanta Hui"})]})}export{k as default};
