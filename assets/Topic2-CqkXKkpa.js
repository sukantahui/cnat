import{j as e}from"./vendor-react-core-Doz9nIC6.js";import{J as t}from"./JavaFileLoader-BfBG3xz_.js";import{F as a}from"./FAQTemplate-BHhlgA96.js";import{P as r}from"./PlainTextPrint-C08xhKA4.js";import{T as n}from"./TeacherSukantaHui-RpFLNJ5A.js";import"./JavaCodeBlock-BwsLxS3r.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-wprqVFW_.js";const i=`/**\r
 * Java Core Tutorial - Module 008_002: Thread Control & Daemon Threads\r
 * Topic 2: Thread Coordination: Synchronizing Parallel Tasks via thread.join()\r
 * Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
 */\r
\r
package com.coderaccotax.javatutorial.multithreading;\r
\r
public class ThreadCoordinationJoinDemo {\r
\r
    public static void main(String[] args) throws InterruptedException {\r
        System.out.println("==========================================================================");\r
        System.out.println(" TOPIC 2: THREAD COORDINATION WITH thread.join() - BARRACKPORE");\r
        System.out.println("==========================================================================\\n");\r
\r
        // Simulating 3 asynchronous branch loading tasks:\r
        Thread taskBarrackpore = new Thread(() -> {\r
            System.out.println("  [Task-1] Loading Barrackpore student records...");\r
            try { Thread.sleep(400); } catch (InterruptedException ignored) {}\r
            System.out.println("  [Task-1] Barrackpore records loaded successfully!");\r
        }, "Task-Barrackpore");\r
\r
        Thread taskNaihati = new Thread(() -> {\r
            System.out.println("  [Task-2] Loading Naihati student records...");\r
            try { Thread.sleep(600); } catch (InterruptedException ignored) {}\r
            System.out.println("  [Task-2] Naihati records loaded successfully!");\r
        }, "Task-Naihati");\r
\r
        System.out.println(">>> 1. Launching parallel branch loader threads in background...");\r
        taskBarrackpore.start();\r
        taskNaihati.start();\r
\r
        System.out.println(">>> 2. Main thread waiting for both background tasks to finish via join()...");\r
\r
        // Calling join() blocks the CALLING thread (main) until target threads terminate:\r
        taskBarrackpore.join(); // Blocks until taskBarrackpore enters TERMINATED state\r
        taskNaihati.join();     // Blocks until taskNaihati enters TERMINATED state\r
\r
        System.out.println("\\n>>> 3. BOTH BRANCHES FULLY LOADED! Generating combined master report...");\r
        System.out.println("  [Master Report] All regional accounting databases verified!");\r
\r
        System.out.println("\\n==========================================================================");\r
    }\r
}`,o=`================================================================================\r
JAVA CORE TUTORIAL - QUICK REVISION GUIDE\r
Module 008_002: Thread Control & Daemon Threads\r
Topic 2: Thread Coordination with join()\r
Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
================================================================================\r
\r
1. THREAD.JOIN():\r
   - 't.join()' blocks the CALLING thread until 't' finishes.\r
   - Puts calling thread in 'WAITING' state.\r
   - Throws checked 'InterruptedException'.\r
   - If 't' is already terminated, 't.join()' returns immediately.\r
   - Essential for fork-join aggregation patterns.\r
\r
================================================================================\r
Classroom Practice: Barrackpore Academy | Mentor: Sukanta Hui\r
================================================================================`,s=[{question:"What does 'threadA.join()' do and which thread gets blocked during its execution?",shortAnswer:"'threadA.join()' pauses the CURRENT thread that called 'join()' (e.g. the main thread) and puts it into the 'WAITING' state until 'threadA' completes its execution and reaches the 'TERMINATED' state. It does NOT pause 'threadA'; 'threadA' continues running on its CPU core concurrently.",explanation:"Core thread synchronization primitive in java.lang.Thread.",hint:"Blocks the calling thread until the target thread finishes and terminates.",level:"Beginner",codeExample:"Thread t = new Thread(task); t.start(); t.join(); // Main thread waits for t to finish"}];function T(){return e.jsxs("div",{className:"space-y-12 px-4 md:px-8 py-8 text-slate-200 bg-slate-900 min-h-screen",children:[e.jsxs("header",{className:"space-y-4 border-b border-slate-800 pb-6",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"px-3 py-1 bg-sky-500/10 text-sky-400 border border-sky-500/20 text-xs font-semibold rounded-full uppercase tracking-wider",children:"Module 008_002 · Topic 2"}),e.jsx("span",{className:"px-3 py-1 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-xs font-semibold rounded-full",children:"thread.join()"})]}),e.jsxs("h1",{className:"text-xl sm:text-2xl md:text-3xl font-bold text-white tracking-tight",children:["Thread Coordination with ",e.jsx("code",{className:"text-emerald-400 font-mono",children:"thread.join()"}),": Synchronizing Parallel Tasks"]}),e.jsxs("p",{className:"text-base md:text-lg text-slate-400 leading-relaxed max-w-4xl",children:["Coordinate parallel execution pipelines: using ",e.jsx("code",{className:"text-emerald-300 font-mono",children:"thread.join()"})," to pause parent threads until background child workers reach the ",e.jsx("code",{className:"text-slate-300 font-mono",children:"TERMINATED"})," state."]})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsxs("h2",{className:"text-2xl font-bold text-emerald-400 flex items-center gap-2",children:[e.jsx("span",{children:"💻"})," Hands-On Java Demo Code"]}),e.jsx(t,{fileModule:i,title:"ThreadCoordinationJoinDemo.java",highlightLines:[7,10,24,25,29,30,33,34]})]}),e.jsx("section",{className:"space-y-4",children:e.jsx(a,{title:"thread.join() FAQs",questions:s})}),e.jsx("section",{className:"space-y-4",children:e.jsx(r,{content:o,title:"Module 008_002 Topic 2: Thread Coordination with join()",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Printable Note",downloadFileName:"008_002_topic2_thread_join_coordination_note.txt"})}),e.jsx(n,{note:"Calling 'worker.join()' on the main thread is like waiting for your friend to finish baking a cake before you light the birthday candles! Main thread pauses and waits patiently until worker finishes! — Sukanta Hui"})]})}export{T as default};
