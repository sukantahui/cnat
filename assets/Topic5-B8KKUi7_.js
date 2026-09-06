import{j as e}from"./vendor-react-core-Doz9nIC6.js";import{J as t}from"./JavaFileLoader-BfBG3xz_.js";import{F as a}from"./FAQTemplate-BHhlgA96.js";import{P as r}from"./PlainTextPrint-C08xhKA4.js";import{T as n}from"./TeacherSukantaHui-DDN87fI5.js";import"./JavaCodeBlock-BwsLxS3r.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-DEsnU7fn.js";const o=`/**\r
 * Java Core Tutorial - Module 008_007: ExecutorService, Thread Pools & CompletableFuture\r
 * Topic 5: Executors.newCachedThreadPool(): Dynamic Scaling & Thread Explosion Risks\r
 * Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
 */\r
\r
package com.coderaccotax.javatutorial.multithreading;\r
\r
import java.util.concurrent.ExecutorService;\r
import java.util.concurrent.Executors;\r
\r
public class CachedThreadPoolThreadExplosionDemo {\r
\r
    public static void main(String[] args) {\r
        System.out.println("==========================================================================");\r
        System.out.println(" TOPIC 5: Executors.newCachedThreadPool() DEEP DIVE - BARRACKPORE");\r
        System.out.println("==========================================================================\\n");\r
\r
        System.out.println(">>> 1. HOW newCachedThreadPool() IS CONSTRUCTED INTERNALLY:");\r
        System.out.println("  return new ThreadPoolExecutor(");\r
        System.out.println("      0, Integer.MAX_VALUE,         // corePoolSize = 0, maxPoolSize = 2,147,483,647!");\r
        System.out.println("      60L, TimeUnit.SECONDS,        // Idle threads killed after 60 seconds");\r
        System.out.println("      new SynchronousQueue<>()      // Zero-capacity handoff queue (NO buffering!)");\r
        System.out.println("  );");\r
        System.out.println();\r
        System.out.println(">>> 2. THE THREAD EXPLOSION DANGER:");\r
        System.out.println("  - 'SynchronousQueue' has ZERO buffer capacity; it cannot hold pending tasks.");\r
        System.out.println("  - If all existing threads are busy when a new task arrives, the pool IMMEDIATELY SPAWNS A BRAND NEW THREAD!");\r
        System.out.println("  - Under a flash spike of 10,000 requests, it attempts to create 10,000 OS threads simultaneously!");\r
        System.out.println("  - Result: CPU core thrashing and 'OutOfMemoryError: unable to create native thread'!");\r
\r
        System.out.println("\\n==========================================================================");\r
    }\r
}`,s=`================================================================================\r
JAVA CORE TUTORIAL - QUICK REVISION GUIDE\r
Module 008_007: ExecutorService, Thread Pools & CompletableFuture\r
Topic 5: CachedThreadPool & Thread Explosion\r
Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
================================================================================\r
\r
1. NEWCACHEDTHREADPOOL():\r
   - 'corePoolSize = 0', 'maxPoolSize = Integer.MAX_VALUE' (uncapped!).\r
   - 'workQueue': 'SynchronousQueue' (zero capacity handoff).\r
   - Idle threads terminate after 60 seconds.\r
   - Great for: Many short-lived, lightweight asynchronous tasks.\r
   - Fatal hazard: Traffic spikes create thousands of threads → Native Stack OOM crash.\r
\r
================================================================================\r
Classroom Practice: Barrackpore Academy | Mentor: Sukanta Hui\r
================================================================================`,i=[{question:"How does 'Executors.newCachedThreadPool()' work and why can it cause 'Thread Explosion' OutOfMemoryErrors?",shortAnswer:"'Executors.newCachedThreadPool()' is configured with 'corePoolSize = 0', 'maximumPoolSize = Integer.MAX_VALUE', 'keepAliveTime = 60s', and a zero-capacity 'SynchronousQueue'. Because the queue cannot buffer tasks, whenever a task is submitted and no existing idle thread is immediately available to accept the handoff, the pool spawns a new native OS thread. If an influx of long-running tasks arrives (e.g. 5,000 simultaneous network requests), it creates 5,000 threads, causing CPU thrashing and crashing the JVM with 'OutOfMemoryError: unable to create native thread'.",explanation:"CachedThreadPool internals and native thread exhaustion mechanics.",hint:"SynchronousQueue has zero buffer; uncapped maximumPoolSize spawns a new thread for every concurrent task.",level:"Intermediate",codeExample:"new ThreadPoolExecutor(0, Integer.MAX_VALUE, 60L, TimeUnit.SECONDS, new SynchronousQueue<Runnable>());"}];function f(){return e.jsxs("div",{className:"space-y-12 px-4 md:px-8 py-8 text-slate-200 bg-slate-900 min-h-screen",children:[e.jsxs("header",{className:"space-y-4 border-b border-slate-800 pb-6",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"px-3 py-1 bg-sky-500/10 text-sky-400 border border-sky-500/20 text-xs font-semibold rounded-full uppercase tracking-wider",children:"Module 008_007 · Topic 5"}),e.jsx("span",{className:"px-3 py-1 bg-amber-500/10 text-amber-400 border border-amber-500/20 text-xs font-semibold rounded-full",children:"CachedThreadPool"})]}),e.jsxs("h1",{className:"text-xl sm:text-2xl md:text-3xl font-bold text-white tracking-tight",children:[e.jsx("code",{className:"text-amber-400 font-mono",children:"Executors.newCachedThreadPool()"}),": Dynamic Scaling & Thread Explosions"]}),e.jsxs("p",{className:"text-base md:text-lg text-slate-400 leading-relaxed max-w-4xl",children:["Evaluate dynamic worker creation: examining ",e.jsx("code",{className:"text-amber-300 font-mono",children:"SynchronousQueue"})," zero-capacity handoffs, 60-second idle lifecycles, and thread explosion native memory crashes."]})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsxs("h2",{className:"text-2xl font-bold text-emerald-400 flex items-center gap-2",children:[e.jsx("span",{children:"💻"})," Hands-On Java Demo Code"]}),e.jsx(t,{fileModule:o,title:"CachedThreadPoolThreadExplosionDemo.java",highlightLines:[7,10,13,14,15,16,17,21,22,24]})]}),e.jsx("section",{className:"space-y-4",children:e.jsx(a,{title:"CachedThreadPool FAQs",questions:i})}),e.jsx("section",{className:"space-y-4",children:e.jsx(r,{content:s,title:"Module 008_007 Topic 5: CachedThreadPool & Thread Explosion",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Printable Note",downloadFileName:"008_007_topic5_cached_thread_pool_note.txt"})}),e.jsx(n,{note:"CachedThreadPool is the opposite of FixedThreadPool: Its queue holds 0 tasks, but its maximum thread limit is 2.14 BILLION! If 5,000 tasks arrive at once, it tries to create 5,000 OS threads in a fraction of a second, crashing your machine! — Sukanta Hui"})]})}export{f as default};
