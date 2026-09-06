import{j as e}from"./vendor-react-core-Doz9nIC6.js";import{J as t}from"./JavaFileLoader-BfBG3xz_.js";import{F as n}from"./FAQTemplate-BHhlgA96.js";import{P as r}from"./PlainTextPrint-C08xhKA4.js";import{T as o}from"./TeacherSukantaHui-DDN87fI5.js";import"./JavaCodeBlock-BwsLxS3r.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-DEsnU7fn.js";const a=`/**\r
 * Java Core Tutorial - Module 008_003: Thread Synchronization & Locks\r
 * Topic 0: The Problem of Shared Mutable State: Race Conditions & Data Corruption\r
 * Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
 */\r
\r
package com.coderaccotax.javatutorial.multithreading;\r
\r
public class SharedMutableStateRaceConditionDemo {\r
\r
    // Shared Mutable State on Heap without synchronization:\r
    private static int counter = 0;\r
\r
    public static void main(String[] args) throws InterruptedException {\r
        System.out.println("==========================================================================");\r
        System.out.println(" TOPIC 0: SHARED MUTABLE STATE & RACE CONDITIONS - BARRACKPORE");\r
        System.out.println("==========================================================================\\n");\r
\r
        Runnable incrementTask = () -> {\r
            for (int i = 0; i < 50_000; i++) {\r
                // 'counter++' is NOT ATOMIC! It compiles to 3 distinct CPU instructions:\r
                // 1. READ: Load 'counter' from memory into CPU register.\r
                // 2. MODIFY: Increment register value by 1.\r
                // 3. WRITE: Write register value back to 'counter' in memory.\r
                counter++;\r
            }\r
        };\r
\r
        Thread t1 = new Thread(incrementTask, "Incrementer-Thread-1");\r
        Thread t2 = new Thread(incrementTask, "Incrementer-Thread-2");\r
\r
        t1.start();\r
        t2.start();\r
\r
        t1.join();\r
        t2.join();\r
\r
        System.out.println(">>> EXPERIMENT RESULTS (50,000 + 50,000 Expected = 100,000):");\r
        System.out.printf("  Actual Final Counter Value: %,d (Data Corrupted due to Race Condition!)%n", counter);\r
\r
        System.out.println("\\n>>> WHY DID DATA LOSS OCCUR?");\r
        System.out.println("  - When Thread 1 and Thread 2 read counter at the same time (e.g. value = 10):");\r
        System.out.println("    * Both increment their local register to 11.");\r
        System.out.println("    * Both write 11 back to memory.");\r
        System.out.println("    * 2 increments occurred, but the counter only increased by 1! (Lost Update Anomaly).");\r
\r
        System.out.println("\\n==========================================================================");\r
    }\r
}`,i=`================================================================================\r
JAVA CORE TUTORIAL - QUICK REVISION GUIDE\r
Module 008_003: Thread Synchronization & Locks\r
Topic 0: Shared Mutable State & Race Conditions\r
Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
================================================================================\r
\r
1. RACE CONDITIONS:\r
   - Occur when 2+ threads access shared mutable state without synchronization.\r
   - 'counter++' is NOT atomic (Read → Modify → Write).\r
   - Lost Update Anomaly: Multiple increments overwrite each other.\r
   - Solution: Synchronization (locks) or Atomic variables (AtomicInteger).\r
\r
================================================================================\r
Classroom Practice: Barrackpore Academy | Mentor: Sukanta Hui\r
================================================================================`,s=[{question:"Why is 'count++' not thread-safe in Java, leading to race conditions under concurrent access?",shortAnswer:"'count++' is not an atomic operation. At the bytecode and CPU level, it consists of 3 distinct instructions: 1. 'Read' current value from memory into a CPU register. 2. 'Modify' (increment) the register value by 1. 3. 'Write' the updated value back to main memory. When multiple threads execute these 3 steps simultaneously, their operations interleave, causing 'Lost Updates' where one thread overwrites another's increment.",explanation:"Core race condition definition in computer science and the Java Memory Model.",hint:"count++ consists of 3 steps: Read, Modify, Write; interleaving causes lost updates.",level:"Beginner",codeExample:"counter++; // 3 bytecode instructions: getstatic, iconst_1, iadd, putstatic"}];function y(){return e.jsxs("div",{className:"space-y-12 px-4 md:px-8 py-8 text-slate-200 bg-slate-900 min-h-screen",children:[e.jsxs("header",{className:"space-y-4 border-b border-slate-800 pb-6",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"px-3 py-1 bg-sky-500/10 text-sky-400 border border-sky-500/20 text-xs font-semibold rounded-full uppercase tracking-wider",children:"Module 008_003 · Topic 0"}),e.jsx("span",{className:"px-3 py-1 bg-rose-500/10 text-rose-400 border border-rose-500/20 text-xs font-semibold rounded-full",children:"Race Conditions"})]}),e.jsxs("h1",{className:"text-xl sm:text-2xl md:text-3xl font-bold text-white tracking-tight",children:["The Problem of Shared Mutable State: ",e.jsx("code",{className:"text-rose-400 font-mono",children:"Race Conditions"})," & Data Corruption"]}),e.jsxs("p",{className:"text-base md:text-lg text-slate-400 leading-relaxed max-w-4xl",children:["Examine concurrent memory anomalies: dissecting non-atomic ",e.jsx("code",{className:"text-rose-300 font-mono",children:"count++"})," operations into Read-Modify-Write machine cycles and observing lost update corruptions."]})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsxs("h2",{className:"text-2xl font-bold text-emerald-400 flex items-center gap-2",children:[e.jsx("span",{children:"💻"})," Hands-On Java Demo Code"]}),e.jsx(t,{fileModule:a,title:"SharedMutableStateRaceConditionDemo.java",highlightLines:[7,10,13,14,20,21,28,29,34,35]})]}),e.jsx("section",{className:"space-y-4",children:e.jsx(n,{title:"Race Conditions FAQs",questions:s})}),e.jsx("section",{className:"space-y-4",children:e.jsx(r,{content:i,title:"Module 008_003 Topic 0: Shared Mutable State & Race Conditions",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Printable Note",downloadFileName:"008_003_topic0_race_conditions_note.txt"})}),e.jsx(o,{note:"Writing 'counter++' looks like one simple line of Java, but under the hood the CPU does three separate steps: READ, MODIFY, and WRITE! When two threads interleave these steps, increments vanish into thin air! This is the classic Race Condition! — Sukanta Hui"})]})}export{y as default};
