import{j as e}from"./vendor-react-core-Doz9nIC6.js";import{J as t}from"./JavaFileLoader-BfBG3xz_.js";import{F as r}from"./FAQTemplate-BHhlgA96.js";import{P as n}from"./PlainTextPrint-C08xhKA4.js";import{T as o}from"./TeacherSukantaHui-CEPuAfsb.js";import"./JavaCodeBlock-BwsLxS3r.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-DGCamHnX.js";const a=`/**\r
 * Java Core Tutorial - Module 008_007: ExecutorService, Thread Pools & CompletableFuture\r
 * Topic 3: The Executors Factory Methods & Hidden Production OutOfMemory Risks\r
 * Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
 */\r
\r
package com.coderaccotax.javatutorial.multithreading;\r
\r
public class ExecutorsFactoryMethodsOverviewDemo {\r
\r
    public static void main(String[] args) {\r
        System.out.println("==========================================================================");\r
        System.out.println(" TOPIC 3: Executors FACTORY METHODS & PRODUCTION TRAPS - BARRACKPORE");\r
        System.out.println("==========================================================================\\n");\r
\r
        System.out.println(">>> THE 4 COMMON CONVENIENCE FACTORY METHODS IN java.util.concurrent.Executors:");\r
        System.out.println("+----+-------------------------------+-------------------------------+-----------------------------------+");\r
        System.out.println("| #  | Factory Method                | Internal Work Queue Used      | Hidden Production Failure Risk    |");\r
        System.out.println("+----+-------------------------------+-------------------------------+-----------------------------------+");\r
        System.out.println("| 1. | newFixedThreadPool(n)         | Unbounded LinkedBlockingQueue | Queue OOM (Heap Exhaustion)       |");\r
        System.out.println("| 2. | newCachedThreadPool()         | Zero-Capacity SynchronousQueue| Thread Explosion OOM (Native Stack)|");\r
        System.out.println("| 3. | newSingleThreadExecutor()     | Unbounded LinkedBlockingQueue | Queue OOM (Heap Exhaustion)       |");\r
        System.out.println("| 4. | newScheduledThreadPool(n)     | Unbounded DelayedWorkQueue    | Queue OOM (Heap Exhaustion)       |");\r
        System.out.println("+----+-------------------------------+-------------------------------+-----------------------------------+");\r
        System.out.println();\r
        System.out.println(">>> ALIBABA JAVA CODING GUIDELINE & INDUSTRY BEST PRACTICE:");\r
        System.out.println("  - 'Threads must not be explicitly created via Executors factory methods;");\r
        System.out.println("     instead, ThreadPoolExecutor MUST be instantiated directly with custom bounded queues!'");\r
\r
        System.out.println("\\n==========================================================================");\r
    }\r
}`,s=`================================================================================\r
JAVA CORE TUTORIAL - QUICK REVISION GUIDE\r
Module 008_007: ExecutorService, Thread Pools & CompletableFuture\r
Topic 3: Executors Factory Methods Overview\r
Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
================================================================================\r
\r
1. EXECUTORS FACTORY TRAPS:\r
   - 'newFixedThreadPool(n)': Unbounded queue → Heap OutOfMemoryError.\r
   - 'newCachedThreadPool()': Unbounded thread count → Native thread OOM crash.\r
   - 'newSingleThreadExecutor()': Unbounded queue.\r
   - Production Best Practice: Instantiate 'ThreadPoolExecutor' with explicit bounded queues!\r
\r
================================================================================\r
Classroom Practice: Barrackpore Academy | Mentor: Sukanta Hui\r
================================================================================`,i=[{question:"Why do enterprise coding standards (like the Alibaba Java Coding Guidelines) strictly forbid using 'Executors.newFixedThreadPool()' and 'Executors.newCachedThreadPool()' in production?",shortAnswer:"Convenience methods in 'Executors' conceal dangerous unbounded defaults: 1. 'newFixedThreadPool()' and 'newSingleThreadExecutor()' use an unbounded 'LinkedBlockingQueue' (capacity = Integer.MAX_VALUE ~ 2.14 billion). If producers generate tasks faster than workers can consume, millions of tasks pile up in the queue, causing a heap 'OutOfMemoryError'. 2. 'newCachedThreadPool()' allows 'maximumPoolSize = Integer.MAX_VALUE'. Under traffic spikes, it attempts to create thousands of native OS threads, triggering 'OutOfMemoryError: unable to create native thread'. Production code must instantiate 'ThreadPoolExecutor' directly with explicit, bounded limits.",explanation:"Enterprise Java concurrency reliability standard.",hint:"newFixedThreadPool has an unbounded queue (heap OOM); newCachedThreadPool has uncapped threads (native thread OOM).",level:"Advanced",codeExample:"// Forbidden in production: Executors.newFixedThreadPool(10); // Use ThreadPoolExecutor instead!"}];function y(){return e.jsxs("div",{className:"space-y-12 px-4 md:px-8 py-8 text-slate-200 bg-slate-900 min-h-screen",children:[e.jsxs("header",{className:"space-y-4 border-b border-slate-800 pb-6",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"px-3 py-1 bg-sky-500/10 text-sky-400 border border-sky-500/20 text-xs font-semibold rounded-full uppercase tracking-wider",children:"Module 008_007 · Topic 3"}),e.jsx("span",{className:"px-3 py-1 bg-amber-500/10 text-amber-400 border border-amber-500/20 text-xs font-semibold rounded-full",children:"Executors Factory Traps"})]}),e.jsxs("h1",{className:"text-xl sm:text-2xl md:text-3xl font-bold text-white tracking-tight",children:["The ",e.jsx("code",{className:"text-amber-400 font-mono",children:"Executors"})," Factory Methods & Hidden Production Risks"]}),e.jsxs("p",{className:"text-base md:text-lg text-slate-400 leading-relaxed max-w-4xl",children:["Expose production memory hazards: discovering why standard ",e.jsx("code",{className:"text-amber-300 font-mono",children:"Executors"})," convenience factories contain unbounded queues and thread explosion risks that crash live servers."]})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsxs("h2",{className:"text-2xl font-bold text-emerald-400 flex items-center gap-2",children:[e.jsx("span",{children:"💻"})," Hands-On Java Demo Code"]}),e.jsx(t,{fileModule:a,title:"ExecutorsFactoryMethodsOverviewDemo.java",highlightLines:[7,10,13,14,15,16,17,18,22,23]})]}),e.jsx("section",{className:"space-y-4",children:e.jsx(r,{title:"Executors Factory FAQs",questions:i})}),e.jsx("section",{className:"space-y-4",children:e.jsx(n,{content:s,title:"Module 008_007 Topic 3: Executors Factory Traps",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Printable Note",downloadFileName:"008_007_topic3_executors_factory_traps_note.txt"})}),e.jsx(o,{note:"While 'Executors.newFixedThreadPool()' is great for classroom homework, top tech companies ban it in production! Its internal queue has a capacity of 2.14 BILLION items, which will eat all your server RAM and crash your app during traffic spikes! — Sukanta Hui"})]})}export{y as default};
