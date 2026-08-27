import{j as e}from"./vendor-react-core-Doz9nIC6.js";import{J as t}from"./JavaFileLoader-BfBG3xz_.js";import{F as r}from"./FAQTemplate-CkSqDH4B.js";import{P as n}from"./PlainTextPrint-C08xhKA4.js";import{T as a}from"./TeacherSukantaHui-CyIG3xbg.js";import"./JavaCodeBlock-BwsLxS3r.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-CIaKtAt4.js";const i=`/**\r
 * Java Core Tutorial - Module 008_007: ExecutorService, Thread Pools & CompletableFuture\r
 * Topic 6: Executors.newSingleThreadExecutor(): Sequential FIFO Processing & Crash Resilience\r
 * Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
 */\r
\r
package com.coderaccotax.javatutorial.multithreading;\r
\r
import java.util.concurrent.ExecutorService;\r
import java.util.concurrent.Executors;\r
\r
public class SingleThreadExecutorSequentialDemo {\r
\r
    public static void main(String[] args) throws InterruptedException {\r
        System.out.println("==========================================================================");\r
        System.out.println(" TOPIC 6: Executors.newSingleThreadExecutor() - BARRACKPORE");\r
        System.out.println("==========================================================================\\n");\r
\r
        // Single-threaded executor: Guaranteed strict sequential execution:\r
        ExecutorService singleExecutor = Executors.newSingleThreadExecutor();\r
\r
        System.out.println(">>> Submitting 3 Audit Log Events (Guaranteed FIFO Execution Order):");\r
        for (int i = 1; i <= 3; i++) {\r
            final int eventId = i;\r
            singleExecutor.submit(() -> {\r
                System.out.printf("  [Audit Log #%d] Written to disk by %s%n",\r
                        eventId, Thread.currentThread().getName());\r
            });\r
        }\r
\r
        singleExecutor.shutdown();\r
\r
        System.out.println("\\n>>> WHY SingleThreadExecutor IS SUPERIOR TO A MANUAL SINGLE THREAD:");\r
        System.out.println("  1. Strict FIFO Ordering  : Guaranteed that no two tasks execute concurrently.");\r
        System.out.println("  2. Automatic Self-Healing: If a task throws an uncaught RuntimeException and kills the worker thread, the executor AUTOMATICALLY SPAWNS A NEW WORKER THREAD to execute remaining queued tasks!");\r
\r
        System.out.println("\\n==========================================================================");\r
    }\r
}`,o=`================================================================================\r
JAVA CORE TUTORIAL - QUICK REVISION GUIDE\r
Module 008_007: ExecutorService, Thread Pools & CompletableFuture\r
Topic 6: SingleThreadExecutor\r
Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
================================================================================\r
\r
1. NEWSINGLETHREADEXECUTOR():\r
   - Exactly 1 worker thread at all times.\r
   - Strict FIFO execution order.\r
   - Self-Healing: Spawns a replacement thread if worker crashes.\r
   - Ideal for: Sequential audit logging, single-writer state machines.\r
   - Caution: Uses unbounded queue; keep memory bounded in production.\r
\r
================================================================================\r
Classroom Practice: Barrackpore Academy | Mentor: Sukanta Hui\r
================================================================================`,s=[{question:"How does 'Executors.newSingleThreadExecutor()' differ from a standard manual single Thread instance?",shortAnswer:"1. 'Sequential FIFO Guarantee': It guarantees tasks are executed sequentially in strict submission order, with no more than one task active at any time. 2. 'Self-Healing Crash Resilience': If a task fails and throws an uncaught RuntimeException that terminates the underlying worker thread, the 'SingleThreadExecutor' automatically detects the termination and creates a replacement worker thread to continue processing subsequent tasks in the queue. A manual Thread would simply die permanently.",explanation:"Core resilience mechanism of SingleThreadExecutor.",hint:"Guarantees FIFO sequential execution and automatically spawns a replacement worker if a task throws an uncaught exception.",level:"Intermediate",codeExample:"ExecutorService single = Executors.newSingleThreadExecutor();"}];function g(){return e.jsxs("div",{className:"space-y-12 px-4 md:px-8 py-8 text-slate-200 bg-slate-900 min-h-screen",children:[e.jsxs("header",{className:"space-y-4 border-b border-slate-800 pb-6",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"px-3 py-1 bg-sky-500/10 text-sky-400 border border-sky-500/20 text-xs font-semibold rounded-full uppercase tracking-wider",children:"Module 008_007 · Topic 6"}),e.jsx("span",{className:"px-3 py-1 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-xs font-semibold rounded-full",children:"SingleThreadExecutor"})]}),e.jsxs("h1",{className:"text-3xl md:text-4xl font-extrabold text-white tracking-tight",children:[e.jsx("code",{className:"text-emerald-400 font-mono",children:"Executors.newSingleThreadExecutor()"}),": Sequential FIFO & Self-Healing"]}),e.jsx("p",{className:"text-base md:text-lg text-slate-400 leading-relaxed max-w-4xl",children:"Construct single-writer pipelines: enforcing strict FIFO execution ordering and utilizing automatic worker replacement upon uncaught task exceptions."})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsxs("h2",{className:"text-2xl font-bold text-emerald-400 flex items-center gap-2",children:[e.jsx("span",{children:"💻"})," Hands-On Java Demo Code"]}),e.jsx(t,{fileModule:i,title:"SingleThreadExecutorSequentialDemo.java",highlightLines:[7,10,15,16,20,21,27,28]})]}),e.jsx("section",{className:"space-y-4",children:e.jsx(r,{title:"SingleThreadExecutor FAQs",questions:s})}),e.jsx("section",{className:"space-y-4",children:e.jsx(n,{content:o,title:"Module 008_007 Topic 6: SingleThreadExecutor",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Printable Note",downloadFileName:"008_007_topic6_single_thread_executor_note.txt"})}),e.jsx(a,{note:"If you need a background task that writes audit logs in exact order without locking, SingleThreadExecutor is your best friend! And if an unexpected bug crashes the worker thread, the executor automatically creates a new one so your logging never stops! — Sukanta Hui"})]})}export{g as default};
