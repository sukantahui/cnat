import{j as e}from"./vendor-react-core-Doz9nIC6.js";import{J as r}from"./JavaFileLoader-BfBG3xz_.js";import{F as t}from"./FAQTemplate-CkSqDH4B.js";import{P as o}from"./PlainTextPrint-C08xhKA4.js";import{T as n}from"./TeacherSukantaHui-CC0AKmkm.js";import"./JavaCodeBlock-BwsLxS3r.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-BtJHuk7w.js";const a=`/**\r
 * Java Core Tutorial - Module 008_007: ExecutorService, Thread Pools & CompletableFuture\r
 * Topic 1: The Executor Framework: Decoupling Task Submission from Thread Execution\r
 * Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
 */\r
\r
package com.coderaccotax.javatutorial.multithreading;\r
\r
import java.util.concurrent.ExecutorService;\r
import java.util.concurrent.Executors;\r
\r
public class ExecutorFrameworkDecouplingDemo {\r
\r
    public static void main(String[] args) throws InterruptedException {\r
        System.out.println("==========================================================================");\r
        System.out.println(" TOPIC 1: THE EXECUTOR FRAMEWORK ARCHITECTURE - BARRACKPORE");\r
        System.out.println("==========================================================================\\n");\r
\r
        // 1. CREATE A BOUNDED THREAD POOL OF 2 WORKERS:\r
        ExecutorService executor = Executors.newFixedThreadPool(2);\r
\r
        System.out.println(">>> Submitting 4 GST Accounting Tasks to the 2-Worker Pool:");\r
        for (int i = 1; i <= 4; i++) {\r
            final int taskId = i;\r
            // DECOUPLING: Submitting a Runnable task (WHAT) without knowing which thread executes it (HOW):\r
            executor.submit(() -> {\r
                String workerName = Thread.currentThread().getName();\r
                System.out.printf("  [Task #%d] Executing on Worker: %s...%n", taskId, workerName);\r
                try { Thread.sleep(200); } catch (InterruptedException ignored) {}\r
                System.out.printf("  [Task #%d] Completed!%n", taskId);\r
            });\r
        }\r
\r
        // 2. INITIATING CLEAN SHUTDOWN:\r
        executor.shutdown();\r
\r
        System.out.println("\\n>>> CORE ADVANTAGES OF THE EXECUTOR FRAMEWORK (Doug Lea):");\r
        System.out.println("  1. Clean Decoupling       : Separates the 'WHAT' (Runnable/Callable task) from the 'HOW' (Thread scheduling & execution).");\r
        System.out.println("  2. Continuous Worker Reuse: The 2 pooled threads stay alive, picking up tasks from the queue continuously without destruction overhead.");\r
        System.out.println("  3. Throttling & Protection: A maximum of 2 threads run simultaneously, protecting server CPU & RAM from exhaustion!");\r
\r
        System.out.println("\\n==========================================================================");\r
    }\r
}`,s=`================================================================================\r
JAVA CORE TUTORIAL - QUICK REVISION GUIDE\r
Module 008_007: ExecutorService, Thread Pools & CompletableFuture\r
Topic 1: Executor Framework Architecture\r
Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
================================================================================\r
\r
1. EXECUTOR FRAMEWORK:\r
   - Cleanly separates Task Definition (Runnable/Callable) from Execution (Thread Pool).\r
   - Reuses worker threads continuously from an internal queue.\r
   - Throttles concurrency to protect server hardware.\r
   - Standard: 'ExecutorService executor = Executors.newFixedThreadPool(n)'.\r
   - Mandatory: Always call 'executor.shutdown()' when finished!\r
\r
================================================================================\r
Classroom Practice: Barrackpore Academy | Mentor: Sukanta Hui\r
================================================================================`,i=[{question:"How does the Java Executor Framework achieve 'Separation of Concerns' between task definition and execution?",shortAnswer:"The Executor Framework cleanly decouples the 'What' (the business task represented by 'Runnable' or 'Callable') from the 'How' (the mechanics of thread creation, OS scheduling, and resource allocation managed by 'ExecutorService'). Application developers simply define workloads and submit them to the executor. The framework manages worker thread lifecycles, queues pending tasks, throttles concurrency, and reuses threads across thousands of jobs with zero manual thread management.",explanation:"Core design philosophy of java.util.concurrent (JSR-166).",hint:"Separates the 'What' (Runnable/Callable task) from the 'How' (Thread creation and scheduling).",level:"Intermediate",codeExample:"ExecutorService pool = Executors.newFixedThreadPool(4); pool.submit(() -> doWork());"}];function k(){return e.jsxs("div",{className:"space-y-12 px-4 md:px-8 py-8 text-slate-200 bg-slate-900 min-h-screen",children:[e.jsxs("header",{className:"space-y-4 border-b border-slate-800 pb-6",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"px-3 py-1 bg-sky-500/10 text-sky-400 border border-sky-500/20 text-xs font-semibold rounded-full uppercase tracking-wider",children:"Module 008_007 · Topic 1"}),e.jsx("span",{className:"px-3 py-1 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-xs font-semibold rounded-full",children:"Executor Framework"})]}),e.jsxs("h1",{className:"text-3xl md:text-4xl font-extrabold text-white tracking-tight",children:["The ",e.jsx("code",{className:"text-emerald-400 font-mono",children:"Executor Framework"}),": Decoupling Task Submission from Execution"]}),e.jsxs("p",{className:"text-base md:text-lg text-slate-400 leading-relaxed max-w-4xl",children:["Master managed concurrency: separating task definitions (",e.jsx("code",{className:"text-emerald-300 font-mono",children:"Runnable"}),"/",e.jsx("code",{className:"text-sky-300 font-mono",children:"Callable"}),") from thread pooling infrastructure and recycling worker threads."]})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsxs("h2",{className:"text-2xl font-bold text-emerald-400 flex items-center gap-2",children:[e.jsx("span",{children:"💻"})," Hands-On Java Demo Code"]}),e.jsx(r,{fileModule:a,title:"ExecutorFrameworkDecouplingDemo.java",highlightLines:[7,10,15,16,21,22,30,31,35,36]})]}),e.jsx("section",{className:"space-y-4",children:e.jsx(t,{title:"Executor Framework FAQs",questions:i})}),e.jsx("section",{className:"space-y-4",children:e.jsx(o,{content:s,title:"Module 008_007 Topic 1: Executor Framework Architecture",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Printable Note",downloadFileName:"008_007_topic1_executor_framework_note.txt"})}),e.jsx(n,{note:"The Executor Framework is like a professional delivery company: You just hand them the packages (tasks), and they have a permanent fleet of delivery drivers (thread pool) who deliver them efficiently without you ever having to hire or fire drivers! — Sukanta Hui"})]})}export{k as default};
