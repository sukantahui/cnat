import{j as e}from"./vendor-react-core-Doz9nIC6.js";import{J as n}from"./JavaFileLoader-BfBG3xz_.js";import{F as t}from"./FAQTemplate-BHhlgA96.js";import{P as r}from"./PlainTextPrint-C08xhKA4.js";import{T as o}from"./TeacherSukantaHui-RpFLNJ5A.js";import"./JavaCodeBlock-BwsLxS3r.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-wprqVFW_.js";const s=`/**\r
 * Java Core Tutorial - Module 008_007: ExecutorService, Thread Pools & CompletableFuture\r
 * Topic 12: Creating Asynchronous Stages: supplyAsync vs runAsync & Custom Thread Pools\r
 * Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
 */\r
\r
package com.coderaccotax.javatutorial.multithreading;\r
\r
import java.util.concurrent.CompletableFuture;\r
import java.util.concurrent.ExecutorService;\r
import java.util.concurrent.Executors;\r
\r
public class SupplyAsyncRunAsyncCreationDemo {\r
\r
    public static void main(String[] args) {\r
        System.out.println("==========================================================================");\r
        System.out.println(" TOPIC 12: supplyAsync vs runAsync CREATION - BARRACKPORE");\r
        System.out.println("==========================================================================\\n");\r
\r
        ExecutorService customIoPool = Executors.newFixedThreadPool(4);\r
\r
        // 1. runAsync(Runnable): Fire-and-forget task with NO return value (CompletableFuture<Void>):\r
        CompletableFuture<Void> runStage = CompletableFuture.runAsync(() -> {\r
            System.out.printf("  [runAsync] Emitting background telemetry on: %s%n",\r
                    Thread.currentThread().getName());\r
        }, customIoPool);\r
\r
        // 2. supplyAsync(Supplier<U>): Asynchronous task returning a value (CompletableFuture<U>):\r
        CompletableFuture<String> supplyStage = CompletableFuture.supplyAsync(() -> {\r
            System.out.printf("  [supplyAsync] Querying Barrackpore GST Database on: %s%n",\r
                    Thread.currentThread().getName());\r
            return "GST-INVOICE-#98421";\r
        }, customIoPool);\r
\r
        // Wait for both to complete:\r
        runStage.join();\r
        String invoice = supplyStage.join();\r
\r
        System.out.println(">>> Retrieved Invoice Result: " + invoice);\r
\r
        customIoPool.shutdown();\r
\r
        System.out.println("\\n==========================================================================");\r
    }\r
}`,a=`================================================================================\r
JAVA CORE TUTORIAL - QUICK REVISION GUIDE\r
Module 008_007: ExecutorService, Thread Pools & CompletableFuture\r
Topic 12: supplyAsync & runAsync Creation\r
Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
================================================================================\r
\r
1. SUPPLYASYNC vs RUNASYNC:\r
   - 'runAsync(Runnable)': Returns 'CompletableFuture<Void>' (no result).\r
   - 'supplyAsync(Supplier<T>)': Returns 'CompletableFuture<T>' (with result).\r
   - Default Pool: 'ForkJoinPool.commonPool()'.\r
   - Best Practice: Always pass a custom 'ExecutorService' for blocking I/O tasks!\r
\r
================================================================================\r
Classroom Practice: Barrackpore Academy | Mentor: Sukanta Hui\r
================================================================================`,l=[{question:"What is the difference between 'CompletableFuture.supplyAsync()' and 'CompletableFuture.runAsync()' and why should a custom Executor be provided?",shortAnswer:"1. 'supplyAsync(Supplier<U>)' accepts a 'Supplier' and returns a 'CompletableFuture<U>' holding the computed return value. 2. 'runAsync(Runnable)' accepts a 'Runnable' and returns a 'CompletableFuture<Void>' for tasks with no return value. 3. 'Custom Executor': By default, both methods use the shared 'ForkJoinPool.commonPool()'. If I/O-bound blocking tasks (e.g. database/HTTP calls) execute on the common pool, they exhaust common pool worker threads and starve parallel streams across the entire JVM. Passing a dedicated 'ExecutorService' isolates I/O workloads safely.",explanation:"Core async task initiation and thread pool isolation rules.",hint:"supplyAsync returns a value (Supplier); runAsync returns void (Runnable); custom executor prevents commonPool thread starvation.",level:"Intermediate",codeExample:"CompletableFuture.supplyAsync(() → queryDb(), customThreadPool);"}];function h(){return e.jsxs("div",{className:"space-y-12 px-4 md:px-8 py-8 text-slate-200 bg-slate-900 min-h-screen",children:[e.jsxs("header",{className:"space-y-4 border-b border-slate-800 pb-6",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"px-3 py-1 bg-sky-500/10 text-sky-400 border border-sky-500/20 text-xs font-semibold rounded-full uppercase tracking-wider",children:"Module 008_007 · Topic 12"}),e.jsx("span",{className:"px-3 py-1 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-xs font-semibold rounded-full",children:"supplyAsync & runAsync"})]}),e.jsxs("h1",{className:"text-xl sm:text-2xl md:text-3xl font-bold text-white tracking-tight",children:["Creating Asynchronous Stages: ",e.jsx("code",{className:"text-emerald-400 font-mono",children:"supplyAsync"})," & ",e.jsx("code",{className:"text-sky-400 font-mono",children:"runAsync"})]}),e.jsxs("p",{className:"text-base md:text-lg text-slate-400 leading-relaxed max-w-4xl",children:["Initiate asynchronous execution: comparing value-returning ",e.jsx("code",{className:"text-emerald-300 font-mono",children:"supplyAsync"})," with fire-and-forget ",e.jsx("code",{className:"text-sky-300 font-mono",children:"runAsync"})," and isolating custom I/O thread pools."]})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsxs("h2",{className:"text-2xl font-bold text-emerald-400 flex items-center gap-2",children:[e.jsx("span",{children:"💻"})," Hands-On Java Demo Code"]}),e.jsx(n,{fileModule:s,title:"SupplyAsyncRunAsyncCreationDemo.java",highlightLines:[7,10,15,16,18,19,25,26,32,33]})]}),e.jsx("section",{className:"space-y-4",children:e.jsx(t,{title:"Async Creation FAQs",questions:l})}),e.jsx("section",{className:"space-y-4",children:e.jsx(r,{content:a,title:"Module 008_007 Topic 12: supplyAsync & runAsync Creation",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Printable Note",downloadFileName:"008_007_topic12_supply_async_run_async_note.txt"})}),e.jsx(o,{note:"If your asynchronous task returns a value (like fetching data from a database), use 'supplyAsync()'. If it just sends a log or email without returning anything, use 'runAsync()'! Always supply your own ThreadPool for database and HTTP calls! — Sukanta Hui"})]})}export{h as default};
