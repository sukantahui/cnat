import{j as e}from"./vendor-react-core-Doz9nIC6.js";import{J as t}from"./JavaFileLoader-BfBG3xz_.js";import{F as r}from"./FAQTemplate-CkSqDH4B.js";import{P as a}from"./PlainTextPrint-C08xhKA4.js";import{T as n}from"./TeacherSukantaHui-CC0AKmkm.js";import"./JavaCodeBlock-BwsLxS3r.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-BtJHuk7w.js";const s=`/**\r
 * Java Core Tutorial - Module 008_007: ExecutorService, Thread Pools & CompletableFuture\r
 * Topic 0: Why Manual 'new Thread()' is an Anti-Pattern: Allocation Overhead & OOM Crashes\r
 * Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
 */\r
\r
package com.coderaccotax.javatutorial.multithreading;\r
\r
public class ManualThreadCreationAntiPatternDemo {\r
\r
    public static void main(String[] args) {\r
        System.out.println("==========================================================================");\r
        System.out.println(" TOPIC 0: WHY 'new Thread()' IS AN ANTI-PATTERN - BARRACKPORE");\r
        System.out.println("==========================================================================\\n");\r
\r
        System.out.println(">>> THE 3 FATAL FLAWS OF MANUAL THREAD CREATION ('new Thread().start()'):");\r
        System.out.println("  1. Heavyweight Thread Lifecycle Costs:");\r
        System.out.println("     - Spawning a native OS thread requires allocating ~1 MB of private Call Stack memory.");\r
        System.out.println("     - Interacting with the OS kernel to create, schedule, and destroy a thread takes significant CPU cycles!");\r
        System.out.println();\r
        System.out.println("  2. OutOfMemoryError (OOM) Thread Exhaustion:");\r
        System.out.println("     - If a web server receives 10,000 requests and spawns 'new Thread()' for each,");\r
        System.out.println("       10,000 x 1 MB = 10 GB of native stack memory requested!");\r
        System.out.println("     - The JVM crashes catastrophically with: 'java.lang.OutOfMemoryError: unable to create native thread'!");\r
        System.out.println();\r
        System.out.println("  3. Zero Worker Reuse:");\r
        System.out.println("     - Once a thread completes its task, it dies (TERMINATED) and its stack is discarded.");\r
        System.out.println();\r
        System.out.println(">>> THE MODERN SOLUTION: THREAD POOLS & THE EXECUTOR FRAMEWORK:");\r
        System.out.println("  - Maintain a bounded pool of reusable worker threads that process tasks from an in-memory queue!");\r
\r
        System.out.println("\\n==========================================================================");\r
    }\r
}`,o=`================================================================================\r
JAVA CORE TUTORIAL - QUICK REVISION GUIDE\r
Module 008_007: ExecutorService, Thread Pools & CompletableFuture\r
Topic 0: Manual Thread Creation Anti-Pattern\r
Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
================================================================================\r
\r
1. MANUAL THREAD ANTI-PATTERN:\r
   - 'new Thread().start()' allocates ~1 MB native stack per thread.\r
   - Unbounded thread creation &rarr; 'OutOfMemoryError: unable to create native thread'.\r
   - Severe CPU context-switch degradation.\r
   - Zero worker reuse (threads die upon completion).\r
   - Solution: Managed Thread Pools via ExecutorService!\r
\r
================================================================================\r
Classroom Practice: Barrackpore Academy | Mentor: Sukanta Hui\r
================================================================================`,i=[{question:"Why is manual thread creation ('new Thread(task).start()') considered a dangerous anti-pattern in high-throughput enterprise systems?",shortAnswer:"1. 'Resource Exhaustion & OOM': Each native Java thread allocates ~1 MB of private Call Stack memory outside the JVM heap. Spawning unconstrained threads per request under traffic spikes rapidly causes 'java.lang.OutOfMemoryError: unable to create native thread' and crashes the process. 2. 'High Lifecycle Overhead': The OS kernel overhead to allocate, register, context-switch, and tear down native thread stacks degrades CPU throughput. 3. 'Lack of Worker Reuse': Manual threads terminate upon completing a task and cannot be reused for subsequent workloads.",explanation:"Core justification for thread pooling and the Executor framework.",hint:"Each thread costs ~1 MB stack memory, lacks reuse, and uncapped creation causes OutOfMemoryError crashes.",level:"Intermediate",codeExample:"// Anti-Pattern: while(true) new Thread(handleRequest).start(); // Will crash server!"}];function y(){return e.jsxs("div",{className:"space-y-12 px-4 md:px-8 py-8 text-slate-200 bg-slate-900 min-h-screen",children:[e.jsxs("header",{className:"space-y-4 border-b border-slate-800 pb-6",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"px-3 py-1 bg-sky-500/10 text-sky-400 border border-sky-500/20 text-xs font-semibold rounded-full uppercase tracking-wider",children:"Module 008_007 · Topic 0"}),e.jsx("span",{className:"px-3 py-1 bg-rose-500/10 text-rose-400 border border-rose-500/20 text-xs font-semibold rounded-full",children:"Thread Creation Anti-Pattern"})]}),e.jsxs("h1",{className:"text-3xl md:text-4xl font-extrabold text-white tracking-tight",children:["Why Manual ",e.jsx("code",{className:"text-rose-400 font-mono",children:"new Thread()"})," is an Anti-Pattern: Allocation Overhead & OOM Crashes"]}),e.jsx("p",{className:"text-base md:text-lg text-slate-400 leading-relaxed max-w-4xl",children:"Understand production scaling bottlenecks: examining native stack allocation costs, OS thread exhaustion risks, and why modern architectures mandate managed thread pools."})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsxs("h2",{className:"text-2xl font-bold text-emerald-400 flex items-center gap-2",children:[e.jsx("span",{children:"💻"})," Hands-On Java Demo Code"]}),e.jsx(t,{fileModule:s,title:"ManualThreadCreationAntiPatternDemo.java",highlightLines:[7,10,13,14,18,19,20,26,27]})]}),e.jsx("section",{className:"space-y-4",children:e.jsx(r,{title:"Thread Creation Anti-Pattern FAQs",questions:i})}),e.jsx("section",{className:"space-y-4",children:e.jsx(a,{content:o,title:"Module 008_007 Topic 0: Manual Thread Creation Anti-Pattern",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Printable Note",downloadFileName:"008_007_topic0_manual_thread_creation_note.txt"})}),e.jsx(n,{note:"Never type 'new Thread().start()' in an enterprise web app! Every thread eats 1MB of RAM and dies after one job. If 5,000 users visit at once, your server crashes with OutOfMemoryError! Use a Thread Pool instead! — Sukanta Hui"})]})}export{y as default};
