import{j as e}from"./vendor-react-core-Doz9nIC6.js";import{J as t}from"./JavaFileLoader-BfBG3xz_.js";import{F as n}from"./FAQTemplate-BHhlgA96.js";import{P as r}from"./PlainTextPrint-C08xhKA4.js";import{T as a}from"./TeacherSukantaHui-DDN87fI5.js";import"./JavaCodeBlock-BwsLxS3r.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-DEsnU7fn.js";const s=`/**\r
 * Java Core Tutorial - Module 008_001: Thread Fundamentals, Lifecycle & Creation\r
 * Topic 4: Thread Lifecycle States: NEW & RUNNABLE (Ready vs Running)\r
 * Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
 */\r
\r
package com.coderaccotax.javatutorial.multithreading;\r
\r
public class NewAndRunnableStatesDemo {\r
\r
    public static void main(String[] args) throws InterruptedException {\r
        System.out.println("==========================================================================");\r
        System.out.println(" TOPIC 4: NEW & RUNNABLE THREAD STATES - BARRACKPORE ACADEMY");\r
        System.out.println("==========================================================================\\n");\r
\r
        // 1. STATE: NEW (Object allocated on heap, but start() has NOT been called):\r
        Thread workerThread = new Thread(() -> {\r
            // Inside run() method:\r
            System.out.println("  [Inside Worker Thread] Executing task on CPU core...");\r
            for (int i = 0; i < 1_000_000; i++) {\r
                // Busy computing\r
            }\r
        }, "Worker-Barrackpore");\r
\r
        System.out.println(">>> 1. Thread Instantiated (Before start()):");\r
        System.out.println("  workerThread.getState() : " + workerThread.getState() + " (NEW)");\r
\r
        // 2. STATE: RUNNABLE (start() invoked -> registered with OS thread scheduler):\r
        workerThread.start();\r
\r
        System.out.println("\\n>>> 2. Thread Started (After start()):");\r
        System.out.println("  workerThread.getState() : " + workerThread.getState() + " (RUNNABLE)");\r
\r
        workerThread.join(); // Wait for completion\r
\r
        System.out.println("\\n>>> THE TWO SUB-STATES OF RUNNABLE IN THE OS:");\r
        System.out.println("  - READY   : The thread is waiting in the OS run-queue for its CPU time-slice.");\r
        System.out.println("  - RUNNING : The CPU core is currently executing instructions from the thread's PC register.");\r
        System.out.println("  - Note    : The JVM combines both Ready and Running into a single 'Thread.State.RUNNABLE' state.");\r
\r
        System.out.println("\\n==========================================================================");\r
    }\r
}`,o=`================================================================================\r
JAVA CORE TUTORIAL - QUICK REVISION GUIDE\r
Module 008_001: Thread Fundamentals, Lifecycle & Creation\r
Topic 4: NEW and RUNNABLE States\r
Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
================================================================================\r
\r
1. NEW & RUNNABLE STATES:\r
   - NEW: Thread instance created ('new Thread()'), OS thread not allocated yet.\r
   - RUNNABLE: 'start()' invoked; allocated native OS thread.\r
   - RUNNABLE encompasses both 'Ready' (in OS queue) and 'Running' (on CPU core).\r
   - Calling 'start()' on a thread twice throws 'IllegalThreadStateException'.\r
\r
================================================================================\r
Classroom Practice: Barrackpore Academy | Mentor: Sukanta Hui\r
================================================================================`,i=[{question:"Why does the JVM's 'Thread.State' enum combine both 'Ready to Run' and 'Currently Running' into a single 'RUNNABLE' state?",shortAnswer:"Because the underlying Operating System's kernel thread scheduler switches threads between 'Ready' (waiting in the CPU queue for a time-slice) and 'Running' (actively executing instructions on a core) millions of times per second. Trying to track whether a thread is actively running or ready-to-run inside the JVM would incur unacceptable synchronization and polling overhead. Thus, Java models both as 'RUNNABLE'.",explanation:"Standard JVM OS-level abstraction design rationale.",hint:"OS kernel switches threads between ready and running millions of times a second; tracking both inside the JVM would be too slow.",level:"Intermediate",codeExample:"Thread t = new Thread(task); t.getState(); // NEW; t.start(); t.getState(); // RUNNABLE"}];function x(){return e.jsxs("div",{className:"space-y-12 px-4 md:px-8 py-8 text-slate-200 bg-slate-900 min-h-screen",children:[e.jsxs("header",{className:"space-y-4 border-b border-slate-800 pb-6",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"px-3 py-1 bg-sky-500/10 text-sky-400 border border-sky-500/20 text-xs font-semibold rounded-full uppercase tracking-wider",children:"Module 008_001 · Topic 4"}),e.jsx("span",{className:"px-3 py-1 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-xs font-semibold rounded-full",children:"NEW & RUNNABLE States"})]}),e.jsxs("h1",{className:"text-xl sm:text-2xl md:text-3xl font-bold text-white tracking-tight",children:["Thread Lifecycle: ",e.jsx("code",{className:"text-emerald-400 font-mono",children:"NEW"})," & ",e.jsx("code",{className:"text-sky-400 font-mono",children:"RUNNABLE"})," (Ready vs Running)"]}),e.jsxs("p",{className:"text-base md:text-lg text-slate-400 leading-relaxed max-w-4xl",children:["Trace thread inception: transitioning from unstarted heap allocation (",e.jsx("code",{className:"text-emerald-300 font-mono",children:"NEW"}),") to OS kernel scheduling and CPU time-slicing (",e.jsx("code",{className:"text-sky-300 font-mono",children:"RUNNABLE"}),")."]})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsxs("h2",{className:"text-2xl font-bold text-emerald-400 flex items-center gap-2",children:[e.jsx("span",{children:"💻"})," Hands-On Java Demo Code"]}),e.jsx(t,{fileModule:s,title:"NewAndRunnableStatesDemo.java",highlightLines:[7,10,14,15,23,24,27,28,30]})]}),e.jsx("section",{className:"space-y-4",children:e.jsx(n,{title:"NEW & RUNNABLE FAQs",questions:i})}),e.jsx("section",{className:"space-y-4",children:e.jsx(r,{content:o,title:"Module 008_001 Topic 4: NEW and RUNNABLE States",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Printable Note",downloadFileName:"008_001_topic4_new_and_runnable_states_note.txt"})}),e.jsx(a,{note:"When you type 'new Thread()', the thread is just a plain Java object sitting in heap memory (NEW). Only after you call 'start()' does the JVM create an actual OS thread and move it to RUNNABLE! — Sukanta Hui"})]})}export{x as default};
