import{j as e}from"./vendor-react-core-Doz9nIC6.js";import{J as t}from"./JavaFileLoader-BfBG3xz_.js";import{F as r}from"./FAQTemplate-CkSqDH4B.js";import{P as n}from"./PlainTextPrint-C08xhKA4.js";import{T as a}from"./TeacherSukantaHui-CyIG3xbg.js";import"./JavaCodeBlock-BwsLxS3r.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-CIaKtAt4.js";const s=`/**\r
 * Java Core Tutorial - Module 008_002: Thread Control & Daemon Threads\r
 * Topic 6: Thread Interrupt API: interrupt(), isInterrupted() vs static Thread.interrupted()\r
 * Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
 */\r
\r
package com.coderaccotax.javatutorial.multithreading;\r
\r
public class ThreadInterruptTriadMethodsDemo {\r
\r
    public static void main(String[] args) throws InterruptedException {\r
        System.out.println("==========================================================================");\r
        System.out.println(" TOPIC 6: THE 3 INTERRUPT METHODS SUITE - BARRACKPORE ACADEMY");\r
        System.out.println("==========================================================================\\n");\r
\r
        Thread worker = new Thread(() -> {\r
            System.out.println(">>> 1. Worker thread started running...");\r
\r
            // Method 1: Check interrupt status using STATIC Thread.interrupted():\r
            // NOTE: Thread.interrupted() checks status AND CLEARS the flag to false!\r
            while (true) {\r
                if (Thread.interrupted()) { // Checks AND CLEARS interrupt flag!\r
                    System.out.println("  [Worker] Thread.interrupted() detected TRUE and CLEARED the flag!");\r
                    System.out.println("  [Worker] Subsequent isInterrupted() call returns: " +\r
                            Thread.currentThread().isInterrupted() + " (Reset to false!)");\r
                    break;\r
                }\r
            }\r
        }, "Worker-Interrupt-Test");\r
\r
        worker.start();\r
        Thread.sleep(100);\r
\r
        // Method 2: Set the interrupt flag on target thread via instance method:\r
        System.out.println(">>> 2. Main thread invoking worker.interrupt()...");\r
        worker.interrupt(); // Sets worker thread's internal interrupt flag = true\r
\r
        // Method 3: Query interrupt status without clearing via instance method:\r
        System.out.println(">>> 3. Checking worker.isInterrupted() from main:");\r
        System.out.println("  worker.isInterrupted() before worker clears it: " + worker.isInterrupted());\r
\r
        worker.join();\r
\r
        System.out.println("\\n>>> THE 3 INTERRUPT METHODS SUMMARY TABLE:");\r
        System.out.println("+-------------------------------+---------------+-------------------+---------------------------+");\r
        System.out.println("| Method                        | Static/Inst   | Action Performed  | Clears Interrupt Flag?    |");\r
        System.out.println("+-------------------------------+---------------+-------------------+---------------------------+");\r
        System.out.println("| t.interrupt()                 | Instance      | Sets flag to true | No (Sets to true)         |");\r
        System.out.println("| t.isInterrupted()             | Instance      | Reads status flag | NO (Preserves flag)       |");\r
        System.out.println("| Thread.interrupted()          | Static        | Reads status flag | YES (Resets flag to false)|");\r
        System.out.println("+-------------------------------+---------------+-------------------+---------------------------+");\r
\r
        System.out.println("\\n==========================================================================");\r
    }\r
}`,i=`================================================================================\r
JAVA CORE TUTORIAL - QUICK REVISION GUIDE\r
Module 008_002: Thread Control & Daemon Threads\r
Topic 6: The 3 Interrupt Methods\r
Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
================================================================================\r
\r
1. THE 3 INTERRUPT METHODS:\r
   - 't.interrupt()': sets interrupt flag = true on target thread.\r
   - 't.isInterrupted()': returns true/false without changing flag.\r
   - 'Thread.interrupted()': static check for current thread + CLEARS flag to false!\r
   - Calling 'Thread.interrupted()' twice in a row returns false second time.\r
\r
================================================================================\r
Classroom Practice: Barrackpore Academy | Mentor: Sukanta Hui\r
================================================================================`,o=[{question:"What is the critical difference between the instance method 'thread.isInterrupted()' and the static method 'Thread.interrupted()'?",shortAnswer:"'thread.isInterrupted()' is an instance method that queries the target thread's interrupt status and returns a boolean WITHOUT modifying or clearing the flag. In contrast, 'Thread.interrupted()' is a static method that queries the CURRENT thread's interrupt status AND automatically CLEARS the interrupt status flag (resetting it to 'false'). Calling 'Thread.interrupted()' twice consecutively will return 'false' on the second call.",explanation:"Classic Java certification and interview trap.",hint:"isInterrupted() only reads the flag; static Thread.interrupted() reads AND clears the flag.",level:"Intermediate",codeExample:"t.isInterrupted(); // Non-clearing check | Thread.interrupted(); // Checks AND clears flag!"}];function x(){return e.jsxs("div",{className:"space-y-12 px-4 md:px-8 py-8 text-slate-200 bg-slate-900 min-h-screen",children:[e.jsxs("header",{className:"space-y-4 border-b border-slate-800 pb-6",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"px-3 py-1 bg-sky-500/10 text-sky-400 border border-sky-500/20 text-xs font-semibold rounded-full uppercase tracking-wider",children:"Module 008_002 · Topic 6"}),e.jsx("span",{className:"px-3 py-1 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-xs font-semibold rounded-full",children:"Interrupt Triad API"})]}),e.jsxs("h1",{className:"text-3xl md:text-4xl font-extrabold text-white tracking-tight",children:["Interrupt API: ",e.jsx("code",{className:"text-emerald-400 font-mono",children:"interrupt()"}),", ",e.jsx("code",{className:"text-sky-400 font-mono",children:"isInterrupted()"})," & static ",e.jsx("code",{className:"text-amber-400 font-mono",children:"Thread.interrupted()"})]}),e.jsxs("p",{className:"text-base md:text-lg text-slate-400 leading-relaxed max-w-4xl",children:["Dissect the 3-method cancellation suite: understanding signal dispatching (",e.jsx("code",{className:"text-emerald-300 font-mono",children:"t.interrupt()"}),"), non-clearing status inspection (",e.jsx("code",{className:"text-sky-300 font-mono",children:"t.isInterrupted()"}),"), and static flag-clearing queries (",e.jsx("code",{className:"text-amber-300 font-mono",children:"Thread.interrupted()"}),")."]})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsxs("h2",{className:"text-2xl font-bold text-emerald-400 flex items-center gap-2",children:[e.jsx("span",{children:"💻"})," Hands-On Java Demo Code"]}),e.jsx(t,{fileModule:s,title:"ThreadInterruptTriadMethodsDemo.java",highlightLines:[7,10,19,20,21,31,32,35,36,42,43,44]})]}),e.jsx("section",{className:"space-y-4",children:e.jsx(r,{title:"Interrupt Triad FAQs",questions:o})}),e.jsx("section",{className:"space-y-4",children:e.jsx(n,{content:i,title:"Module 008_002 Topic 6: The 3 Interrupt Methods",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Printable Note",downloadFileName:"008_002_topic6_interrupt_triad_methods_note.txt"})}),e.jsx(a,{note:"Be careful with static 'Thread.interrupted()'! It checks the flag AND resets it back to false! If you just want to check the flag without changing it, use the instance method 'thread.isInterrupted()' instead! — Sukanta Hui"})]})}export{x as default};
