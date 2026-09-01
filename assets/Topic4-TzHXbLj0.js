import{j as e}from"./vendor-react-core-Doz9nIC6.js";import{J as t}from"./JavaFileLoader-BfBG3xz_.js";import{F as r}from"./FAQTemplate-BHhlgA96.js";import{P as n}from"./PlainTextPrint-C08xhKA4.js";import{T as i}from"./TeacherSukantaHui-BaJcBHAy.js";import"./JavaCodeBlock-BwsLxS3r.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-8ao-0upJ.js";const a=`/**\r
 * Java Core Tutorial - Module 008_002: Thread Control & Daemon Threads\r
 * Topic 4: Cooperative Scheduling: Thread.yield() Mechanics & Scheduling Hints\r
 * Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
 */\r
\r
package com.coderaccotax.javatutorial.multithreading;\r
\r
public class ThreadYieldCooperativeSchedulingDemo {\r
\r
    public static void main(String[] args) throws InterruptedException {\r
        System.out.println("==========================================================================");\r
        System.out.println(" TOPIC 4: Thread.yield() COOPERATIVE SCHEDULING - BARRACKPORE");\r
        System.out.println("==========================================================================\\n");\r
\r
        Runnable yieldingTask = () -> {\r
            for (int i = 1; i <= 3; i++) {\r
                System.out.printf("  [%s] Executed step #%d - Giving other threads a chance via Thread.yield()...%n",\r
                        Thread.currentThread().getName(), i);\r
\r
                // Voluntarily relinquish remaining CPU time-slice to OS scheduler:\r
                Thread.yield(); // Hint to OS that current thread is willing to yield its core!\r
            }\r
        };\r
\r
        Thread t1 = new Thread(yieldingTask, "Barrackpore-Worker-1");\r
        Thread t2 = new Thread(yieldingTask, "Naihati-Worker-2");\r
\r
        t1.start();\r
        t2.start();\r
\r
        t1.join();\r
        t2.join();\r
\r
        System.out.println("\\n>>> HOW Thread.yield() WORKS INTERNALLY:");\r
        System.out.println("  1. State Transition : Does NOT move the thread to WAITING or BLOCKED; the thread remains in the 'RUNNABLE' state!");\r
        System.out.println("  2. OS Re-queuing    : Moves the thread to the back of the OS ready run-queue for threads of EQUAL priority.");\r
        System.out.println("  3. Non-Binding Hint : The OS kernel scheduler is free to ignore 'yield()' completely.");\r
        System.out.println("  4. Lock Retention   : Like sleep(), 'yield()' does NOT release any locks held by the thread!");\r
\r
        System.out.println("\\n==========================================================================");\r
    }\r
}`,o=`================================================================================\r
JAVA CORE TUTORIAL - QUICK REVISION GUIDE\r
Module 008_002: Thread Control & Daemon Threads\r
Topic 4: Thread.yield() Scheduling\r
Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
================================================================================\r
\r
1. THREAD.YIELD():\r
   - Voluntary hint to OS scheduler to give up remaining CPU time-slice.\r
   - Thread remains in 'RUNNABLE' state.\r
   - Does NOT release locks.\r
   - Non-deterministic and platform dependent.\r
   - Rarely used in application logic (useful in busy-wait spinlocks).\r
\r
================================================================================\r
Classroom Practice: Barrackpore Academy | Mentor: Sukanta Hui\r
================================================================================`,s=[{question:"What does 'Thread.yield()' do, does it change the thread's state, and does it release locks?",shortAnswer:"'Thread.yield()' is a static method that provides a voluntary hint to the OS thread scheduler that the currently executing thread is willing to relinquish its remaining CPU time-slice. 1. 'State': The thread remains in the 'RUNNABLE' state (it does NOT become WAITING or BLOCKED). 2. 'Locks': It does NOT release any locks held by the thread. 3. 'OS Behavior': The scheduler is free to ignore the hint, or re-assign the CPU core to another thread of equal priority.",explanation:"Standard specification of Thread.yield().",hint:"Yields current CPU time-slice; stays in RUNNABLE state; does NOT release locks.",level:"Intermediate",codeExample:"Thread.yield(); // Hints scheduler to allow other threads of equal priority to run"}];function x(){return e.jsxs("div",{className:"space-y-12 px-4 md:px-8 py-8 text-slate-200 bg-slate-900 min-h-screen",children:[e.jsxs("header",{className:"space-y-4 border-b border-slate-800 pb-6",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"px-3 py-1 bg-sky-500/10 text-sky-400 border border-sky-500/20 text-xs font-semibold rounded-full uppercase tracking-wider",children:"Module 008_002 · Topic 4"}),e.jsx("span",{className:"px-3 py-1 bg-purple-500/10 text-purple-400 border border-purple-500/20 text-xs font-semibold rounded-full",children:"Thread.yield()"})]}),e.jsxs("h1",{className:"text-xl sm:text-2xl md:text-3xl font-bold text-white tracking-tight",children:[e.jsx("code",{className:"text-emerald-400 font-mono",children:"Thread.yield()"}),": Voluntary Cooperative CPU Yielding"]}),e.jsx("p",{className:"text-base md:text-lg text-slate-400 leading-relaxed max-w-4xl",children:"Explore CPU time-slice management: examining voluntary cooperative yielding hints, run-queue re-prioritization, and lock retention invariants."})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsxs("h2",{className:"text-2xl font-bold text-emerald-400 flex items-center gap-2",children:[e.jsx("span",{children:"💻"})," Hands-On Java Demo Code"]}),e.jsx(t,{fileModule:a,title:"ThreadYieldCooperativeSchedulingDemo.java",highlightLines:[7,10,15,16,19,20,28,29]})]}),e.jsx("section",{className:"space-y-4",children:e.jsx(r,{title:"Thread.yield() FAQs",questions:s})}),e.jsx("section",{className:"space-y-4",children:e.jsx(n,{content:o,title:"Module 008_002 Topic 4: Thread.yield() Scheduling",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Printable Note",downloadFileName:"008_002_topic4_thread_yield_scheduling_note.txt"})}),e.jsx(i,{note:"'Thread.yield()' is like a polite driver waving other cars through an intersection! It tells the CPU: 'If someone else of equal priority needs the core, they can go first, otherwise I will keep running!' — Sukanta Hui"})]})}export{x as default};
