import{j as e}from"./vendor-react-core-Doz9nIC6.js";import{J as r}from"./JavaFileLoader-BfBG3xz_.js";import{F as t}from"./FAQTemplate-BHhlgA96.js";import{P as o}from"./PlainTextPrint-C08xhKA4.js";import{T as n}from"./TeacherSukantaHui-RpFLNJ5A.js";import"./JavaCodeBlock-BwsLxS3r.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-wprqVFW_.js";const a=`/**\r
 * Java Core Tutorial - Module 008_007: ExecutorService, Thread Pools & CompletableFuture\r
 * Topic 8: Custom ThreadPoolExecutor: The 7 Core Parameters & Rejection Policies\r
 * Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
 */\r
\r
package com.coderaccotax.javatutorial.multithreading;\r
\r
import java.util.concurrent.ArrayBlockingQueue;\r
import java.util.concurrent.Executors;\r
import java.util.concurrent.RejectedExecutionHandler;\r
import java.util.concurrent.ThreadFactory;\r
import java.util.concurrent.ThreadPoolExecutor;\r
import java.util.concurrent.TimeUnit;\r
\r
public class CustomThreadPoolExecutorDeepDiveDemo {\r
\r
    public static void main(String[] args) {\r
        System.out.println("==========================================================================");\r
        System.out.println(" TOPIC 8: CUSTOM ThreadPoolExecutor (THE 7 PARAMETERS) - BARRACKPORE");\r
        System.out.println("==========================================================================\\n");\r
\r
        // 1. CUSTOM BOUNDED PRODUCTION THREAD POOL:\r
        ThreadPoolExecutor customPool = new ThreadPoolExecutor(\r
                2,                                   // 1. corePoolSize: Core workers kept alive\r
                4,                                   // 2. maximumPoolSize: Max workers under peak load\r
                30L, TimeUnit.SECONDS,               // 3 & 4. keepAliveTime & unit for excess idle threads\r
                new ArrayBlockingQueue<>(5),         // 5. workQueue: BOUNDED queue holding max 5 tasks\r
                Executors.defaultThreadFactory(),    // 6. threadFactory: Custom thread namer\r
                new ThreadPoolExecutor.CallerRunsPolicy() // 7. handler: Backpressure policy!\r
        );\r
\r
        System.out.println(">>> THE 7 CORE PARAMETERS OF ThreadPoolExecutor:");\r
        System.out.println("  1. corePoolSize    : Minimum threads kept alive even when idle.");\r
        System.out.println("  2. maximumPoolSize : Upper limit of threads created when queue becomes full.");\r
        System.out.println("  3. keepAliveTime   : Duration that excess threads (beyond core) stay alive idle.");\r
        System.out.println("  4. unit            : TimeUnit for keepAliveTime.");\r
        System.out.println("  5. workQueue       : BlockingQueue to hold tasks before execution (ArrayBlockingQueue).");\r
        System.out.println("  6. threadFactory   : Factory creating new threads (custom descriptive names).");\r
        System.out.println("  7. handler         : RejectedExecutionHandler when queue is full AND max threads busy.");\r
        System.out.println();\r
        System.out.println(">>> THE 4 BUILT-IN REJECTED EXECUTION POLICIES:");\r
        System.out.println("  - AbortPolicy       : Throws RejectedExecutionException (Default).");\r
        System.out.println("  - CallerRunsPolicy  : Executes task on the CALLER'S thread (Natural Backpressure!).");\r
        System.out.println("  - DiscardPolicy     : Silently drops the rejected task.");\r
        System.out.println("  - DiscardOldestPolicy: Drops the oldest unhandled task in queue and retries submission.");\r
\r
        customPool.shutdown();\r
\r
        System.out.println("\\n==========================================================================");\r
    }\r
}`,s=`================================================================================\r
JAVA CORE TUTORIAL - QUICK REVISION GUIDE\r
Module 008_007: ExecutorService, Thread Pools & CompletableFuture\r
Topic 8: Custom ThreadPoolExecutor\r
Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
================================================================================\r
\r
1. THREADPOOLEXECUTOR 7 PARAMETERS:\r
   - 1. corePoolSize, 2. maxPoolSize, 3. keepAliveTime, 4. unit.\r
   - 5. workQueue (Bounded ArrayBlockingQueue recommended).\r
   - 6. threadFactory (Give threads custom names).\r
   - 7. RejectedExecutionHandler:\r
     * AbortPolicy: Throws exception.\r
     * CallerRunsPolicy: Caller executes task (Backpressure).\r
     * DiscardPolicy: Drops task silently.\r
     * DiscardOldestPolicy: Evicts oldest queued task.\r
\r
================================================================================\r
Classroom Practice: Barrackpore Academy | Mentor: Sukanta Hui\r
================================================================================`,i=[{question:"Explain the task submission workflow in 'ThreadPoolExecutor' and describe the 4 standard RejectedExecutionHandler policies.",shortAnswer:"1. 'Workflow': (A) If running threads < 'corePoolSize', spawn a new thread. (B) If core threads busy, add task to 'workQueue'. (C) If workQueue is FULL and running threads < 'maximumPoolSize', spawn an extra thread. (D) If workQueue is full AND maximumPoolSize reached, trigger 'RejectedExecutionHandler'. 2. 'The 4 Rejection Policies': (1) 'AbortPolicy' (throws RejectedExecutionException), (2) 'CallerRunsPolicy' (executes task synchronously on calling thread, creating backpressure), (3) 'DiscardPolicy' (silently drops task), (4) 'DiscardOldestPolicy' (discards oldest task from queue head and retries).",explanation:"Foundational ThreadPoolExecutor lifecycle and backpressure architecture.",hint:"Core threads → Queue → Max threads → RejectedExecutionHandler (Abort, CallerRuns, Discard, DiscardOldest).",level:"Advanced",codeExample:"new ThreadPoolExecutor(2, 4, 30L, TimeUnit.SECONDS, new ArrayBlockingQueue<>(100), new ThreadPoolExecutor.CallerRunsPolicy());"}];function y(){return e.jsxs("div",{className:"space-y-12 px-4 md:px-8 py-8 text-slate-200 bg-slate-900 min-h-screen",children:[e.jsxs("header",{className:"space-y-4 border-b border-slate-800 pb-6",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"px-3 py-1 bg-sky-500/10 text-sky-400 border border-sky-500/20 text-xs font-semibold rounded-full uppercase tracking-wider",children:"Module 008_007 · Topic 8"}),e.jsx("span",{className:"px-3 py-1 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-xs font-semibold rounded-full",children:"ThreadPoolExecutor"})]}),e.jsxs("h1",{className:"text-xl sm:text-2xl md:text-3xl font-bold text-white tracking-tight",children:[e.jsx("code",{className:"text-emerald-400 font-mono",children:"ThreadPoolExecutor"}),": The 7 Core Parameters & Rejection Policies"]}),e.jsxs("p",{className:"text-base md:text-lg text-slate-400 leading-relaxed max-w-4xl",children:["Construct production thread pools: configuring core/max boundaries, bounded ",e.jsx("code",{className:"text-emerald-300 font-mono",children:"ArrayBlockingQueue"})," capacities, custom thread factories, and ",e.jsx("code",{className:"text-purple-300 font-mono",children:"CallerRunsPolicy"})," backpressure."]})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsxs("h2",{className:"text-2xl font-bold text-emerald-400 flex items-center gap-2",children:[e.jsx("span",{children:"💻"})," Hands-On Java Demo Code"]}),e.jsx(r,{fileModule:a,title:"CustomThreadPoolExecutorDeepDiveDemo.java",highlightLines:[7,10,18,19,20,21,22,23,24,35,36]})]}),e.jsx("section",{className:"space-y-4",children:e.jsx(t,{title:"ThreadPoolExecutor FAQs",questions:i})}),e.jsx("section",{className:"space-y-4",children:e.jsx(o,{content:s,title:"Module 008_007 Topic 8: Custom ThreadPoolExecutor",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Printable Note",downloadFileName:"008_007_topic8_thread_pool_executor_note.txt"})}),e.jsx(n,{note:"This is how senior architects build thread pools! Always specify corePoolSize, maximumPoolSize, a bounded ArrayBlockingQueue, and CallerRunsPolicy! If traffic explodes, CallerRunsPolicy forces the calling thread to do the work, naturally slowing down incoming requests without crashing! — Sukanta Hui"})]})}export{y as default};
