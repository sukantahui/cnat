import{j as e}from"./vendor-react-core-Doz9nIC6.js";import{J as t}from"./JavaFileLoader-BfBG3xz_.js";import{F as a}from"./FAQTemplate-CkSqDH4B.js";import{P as r}from"./PlainTextPrint-C08xhKA4.js";import{T as n}from"./TeacherSukantaHui-CyIG3xbg.js";import"./JavaCodeBlock-BwsLxS3r.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-CIaKtAt4.js";const s=`/**\r
 * Java Core Tutorial - Module 008_001: Thread Fundamentals, Lifecycle & Creation\r
 * Topic 6: Thread Lifecycle States: TIMED_WAITING (Timeout) vs TERMINATED (Dead)\r
 * Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
 */\r
\r
package com.coderaccotax.javatutorial.multithreading;\r
\r
public class TimedWaitingAndTerminatedStatesDemo {\r
\r
    public static void main(String[] args) throws InterruptedException {\r
        System.out.println("==========================================================================");\r
        System.out.println(" TOPIC 6: TIMED_WAITING & TERMINATED STATES - BARRACKPORE");\r
        System.out.println("==========================================================================\\n");\r
\r
        // 1. DEMONSTRATING TIMED_WAITING STATE (Waiting with a maximum duration):\r
        Thread sleeperThread = new Thread(() -> {\r
            try {\r
                // Thread.sleep() transitions thread to TIMED_WAITING:\r
                Thread.sleep(2000); // Sleeps for 2 seconds\r
            } catch (InterruptedException e) {\r
                System.out.println("  [Sleeper Thread] Woken up prematurely via interrupt!");\r
            }\r
        }, "Sleeper-Thread");\r
\r
        sleeperThread.start();\r
        Thread.sleep(100); // Give sleeperThread time to enter sleep()\r
\r
        System.out.println(">>> 1. TIMED_WAITING State Inspection:");\r
        System.out.println("  sleeperThread.getState() : " + sleeperThread.getState() + " (TIMED_WAITING due to Thread.sleep(2000))");\r
\r
        // Wait for sleeperThread to finish its 2-second sleep and exit run():\r
        sleeperThread.join();\r
\r
        // 2. DEMONSTRATING TERMINATED STATE (run() method completed or exception thrown):\r
        System.out.println("\\n>>> 2. TERMINATED State Inspection:");\r
        System.out.println("  sleeperThread.getState() : " + sleeperThread.getState() + " (TERMINATED / DEAD)");\r
\r
        // 3. ATTEMPTING TO RESTART A TERMINATED THREAD:\r
        System.out.println("\\n>>> 3. Attempting to restart a TERMINATED thread:");\r
        try {\r
            sleeperThread.start(); // A dead thread CANNOT be restarted!\r
        } catch (IllegalThreadStateException e) {\r
            System.out.println("  [CAUGHT EXPECTED EXCEPTION] " + e.getClass().getSimpleName() + "!");\r
            System.out.println("  Rule: A terminated thread's call stack is destroyed; it CANNOT be restarted!");\r
        }\r
\r
        System.out.println("\\n==========================================================================");\r
    }\r
}`,i=`================================================================================\r
JAVA CORE TUTORIAL - QUICK REVISION GUIDE\r
Module 008_001: Thread Fundamentals, Lifecycle & Creation\r
Topic 6: TIMED_WAITING and TERMINATED States\r
Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
================================================================================\r
\r
1. TIMED_WAITING & TERMINATED:\r
   - TIMED_WAITING: entered via 'sleep(t)', 'wait(t)', 'join(t)'.\r
   - Wakes up when timeout expires OR if interrupted.\r
   - TERMINATED: run() finished normally or threw uncaught exception.\r
   - Dead threads CANNOT be restarted (throws 'IllegalThreadStateException').\r
\r
================================================================================\r
Classroom Practice: Barrackpore Academy | Mentor: Sukanta Hui\r
================================================================================`,o=[{question:"What causes a thread to enter 'TIMED_WAITING' and what happens if you attempt to call 'start()' on a 'TERMINATED' thread?",shortAnswer:"1. 'TIMED_WAITING': occurs when a thread calls a waiting method with a specified maximum timeout parameter (e.g. 'Thread.sleep(ms)', 'Object.wait(timeout)', 'Thread.join(timeout)', or 'LockSupport.parkNanos()'). 2. 'Restarting Terminated Thread': once a thread completes its 'run()' method and enters 'TERMINATED', its native OS thread and Call Stack are deallocated. Calling 'start()' on a terminated thread immediately throws an 'IllegalThreadStateException'.",explanation:"Core Java thread lifecycle rules.",hint:"Methods with timeout parameters enter TIMED_WAITING; restarted dead threads throw IllegalThreadStateException.",level:"Intermediate",codeExample:"t.join(); // t is now TERMINATED; t.start(); // Throws IllegalThreadStateException!"}];function I(){return e.jsxs("div",{className:"space-y-12 px-4 md:px-8 py-8 text-slate-200 bg-slate-900 min-h-screen",children:[e.jsxs("header",{className:"space-y-4 border-b border-slate-800 pb-6",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"px-3 py-1 bg-sky-500/10 text-sky-400 border border-sky-500/20 text-xs font-semibold rounded-full uppercase tracking-wider",children:"Module 008_001 · Topic 6"}),e.jsx("span",{className:"px-3 py-1 bg-amber-500/10 text-amber-400 border border-amber-500/20 text-xs font-semibold rounded-full",children:"TIMED_WAITING & TERMINATED"})]}),e.jsxs("h1",{className:"text-3xl md:text-4xl font-extrabold text-white tracking-tight",children:["Thread Lifecycle: ",e.jsx("code",{className:"text-amber-400 font-mono",children:"TIMED_WAITING"})," (Timeout) vs ",e.jsx("code",{className:"text-slate-400 font-mono",children:"TERMINATED"})," (Dead)"]}),e.jsxs("p",{className:"text-base md:text-lg text-slate-400 leading-relaxed max-w-4xl",children:["Complete the lifecycle continuum: understanding bounded timer delays (",e.jsx("code",{className:"text-amber-300 font-mono",children:"TIMED_WAITING"}),"), post-execution destruction (",e.jsx("code",{className:"text-slate-300 font-mono",children:"TERMINATED"}),"), and the illegal restart invariant."]})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsxs("h2",{className:"text-2xl font-bold text-emerald-400 flex items-center gap-2",children:[e.jsx("span",{children:"💻"})," Hands-On Java Demo Code"]}),e.jsx(t,{fileModule:s,title:"TimedWaitingAndTerminatedStatesDemo.java",highlightLines:[7,10,16,17,24,25,30,31,36,37]})]}),e.jsx("section",{className:"space-y-4",children:e.jsx(a,{title:"TIMED_WAITING & TERMINATED FAQs",questions:o})}),e.jsx("section",{className:"space-y-4",children:e.jsx(r,{content:i,title:"Module 008_001 Topic 6: TIMED_WAITING & TERMINATED States",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Printable Note",downloadFileName:"008_001_topic6_timed_waiting_and_terminated_states_note.txt"})}),e.jsx(n,{note:"Once a thread finishes its run() method and becomes TERMINATED, it is completely dead and its stack memory is gone! You can NEVER call start() on it again—if you try, Java will immediately throw an IllegalThreadStateException! — Sukanta Hui"})]})}export{I as default};
