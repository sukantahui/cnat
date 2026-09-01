import{j as e}from"./vendor-react-core-Doz9nIC6.js";import{J as t}from"./JavaFileLoader-BfBG3xz_.js";import{F as r}from"./FAQTemplate-BHhlgA96.js";import{P as n}from"./PlainTextPrint-C08xhKA4.js";import{T as a}from"./TeacherSukantaHui-CEPuAfsb.js";import"./JavaCodeBlock-BwsLxS3r.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-DGCamHnX.js";const o=`/**\r
 * Java Core Tutorial - Module 008_005: Thread Safety & Deadlocks\r
 * Topic 14: Thread Starvation & Fair Locks: Guaranteeing FIFO Acquisition (Capstone)\r
 * Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
 */\r
\r
package com.coderaccotax.javatutorial.multithreading;\r
\r
import java.util.concurrent.locks.Lock;\r
import java.util.concurrent.locks.ReentrantLock;\r
\r
public class ThreadStarvationAndFairLocksCapstoneDemo {\r
\r
    // 1. FAIR LOCK (Enforces strict FIFO queue ordering to eliminate starvation):\r
    private static final Lock FAIR_LOCK = new ReentrantLock(true); // 'true' = Fair FIFO Lock!\r
\r
    public static void accessResource(String threadName) {\r
        FAIR_LOCK.lock();\r
        try {\r
            System.out.printf("[%s] Acquired fair lock! Executing audit task...%n", threadName);\r
            Thread.sleep(100);\r
        } catch (InterruptedException ignored) {\r
        } finally {\r
            FAIR_LOCK.unlock();\r
            System.out.printf("[%s] Released fair lock.%n", threadName);\r
        }\r
    }\r
\r
    public static void main(String[] args) throws InterruptedException {\r
        System.out.println("==========================================================================");\r
        System.out.println(" TOPIC 14: THREAD STARVATION & FAIR LOCKS CAPSTONE - BARRACKPORE");\r
        System.out.println("==========================================================================\\n");\r
\r
        System.out.println(">>> 1. WHAT IS THREAD STARVATION?");\r
        System.out.println("  - Starvation occurs when a runnable thread is perpetually denied CPU time-slices or lock acquisition");\r
        System.out.println("    because greedy, higher-priority threads monopolize the shared resource.");\r
        System.out.println();\r
        System.out.println(">>> 2. NON-FAIR (BARGING) vs FAIR (FIFO) LOCKS:");\r
        System.out.println("  - Default 'synchronized' & 'new ReentrantLock()' are NON-FAIR (allow barging for higher throughput).");\r
        System.out.println("  - 'new ReentrantLock(true)' creates a FAIR Lock: guarantees longest-waiting thread gets lock next (0% Starvation)!");\r
\r
        Thread t1 = new Thread(() -> accessResource("Student-Swadeep"), "T1");\r
        Thread t2 = new Thread(() -> accessResource("Student-Tuhina"), "T2");\r
        Thread t3 = new Thread(() -> accessResource("Student-Abhronila"), "T3");\r
\r
        t1.start();\r
        t2.start();\r
        t3.start();\r
\r
        t1.join();\r
        t2.join();\r
        t3.join();\r
\r
        System.out.println("\\n==========================================================================");\r
        System.out.println(" 🎉 MODULE 008_005 THREAD SAFETY & DEADLOCKS 100% COMPLETE!");\r
        System.out.println("==========================================================================");\r
    }\r
}`,i=`================================================================================\r
JAVA CORE TUTORIAL - QUICK REVISION GUIDE\r
Module 008_005: Thread Safety & Deadlocks\r
Topic 14: Starvation & Fair Locks Capstone\r
Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
================================================================================\r
\r
1. MODULE 008_005 GRAND SUMMARY:\r
   - Thread Safety: Behaves correctly without external synchronization (Goetz).\r
   - Race Categories: Read-Modify-Write (lost updates) & Check-Then-Act (stale check).\r
   - Deadlock: 2+ threads permanently blocked waiting on each other's locks.\r
   - 4 Coffman Conditions: Mutex, Hold & Wait, No Preemption, Circular Wait.\r
   - Prevention: Enforce Global Lock Ordering to break Circular Wait.\r
   - Resilience: 'tryLock(timeout)' with voluntary release to break No Preemption.\r
   - Dining Philosophers: Dijkstra's resource hierarchy breaks chopstick deadlock.\r
   - Diagnosis: 'jcmd Thread.print', 'jstack -l', and 'ThreadMXBean'.\r
   - Livelock: 100% CPU active retry loop; solved by randomized back-off jitter.\r
   - Starvation: Solved by FIFO Fair Locks ('new ReentrantLock(true)').\r
\r
================================================================================\r
Classroom Practice: Barrackpore Academy | Mentor: Sukanta Hui\r
================================================================================`,s=[{question:"What is 'Thread Starvation' and how does 'new ReentrantLock(true)' prevent starvation in high-contention environments?",shortAnswer:"'Thread Starvation' is a condition where a ready-to-run thread is perpetually denied access to shared resources, locks, or CPU cores because other 'greedy' or higher-priority threads repeatedly jump the queue (barging). Default Java 'synchronized' blocks and non-fair locks permit lock barging to maximize raw multi-core throughput. 'new ReentrantLock(true)' instantiates a 'Fair Lock' that enforces strict FIFO (First-In, First-Out) queuing: the thread that has been waiting the longest in the queue is guaranteed to acquire the lock next, eliminating starvation.",explanation:"Grand architectural capstone of Module 008_005.",hint:"Starvation occurs when greedy threads jump the lock queue; new ReentrantLock(true) enforces strict FIFO lock ordering.",level:"Advanced",codeExample:"Lock fairLock = new ReentrantLock(true); // Guarantees FIFO fair lock acquisition"}];function x(){return e.jsxs("div",{className:"space-y-12 px-4 md:px-8 py-8 text-slate-200 bg-slate-900 min-h-screen",children:[e.jsxs("header",{className:"space-y-4 border-b border-slate-800 pb-6",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"px-3 py-1 bg-sky-500/10 text-sky-400 border border-sky-500/20 text-xs font-semibold rounded-full uppercase tracking-wider",children:"Module 008_005 · Topic 14"}),e.jsx("span",{className:"px-3 py-1 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-xs font-semibold rounded-full",children:"Starvation Capstone"})]}),e.jsxs("h1",{className:"text-xl sm:text-2xl md:text-3xl font-bold text-white tracking-tight",children:["Thread Starvation & ",e.jsx("code",{className:"text-emerald-400 font-mono",children:"Fair ReentrantLocks"}),": Guaranteeing FIFO Order (Capstone)"]}),e.jsxs("p",{className:"text-base md:text-lg text-slate-400 leading-relaxed max-w-4xl",children:["Synthesize concurrency safety architectures: evaluating barging throughput versus FIFO fairness, preventing resource starvation with ",e.jsx("code",{className:"text-emerald-300 font-mono",children:"new ReentrantLock(true)"}),", and mastering complete deadlock defense."]})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsxs("h2",{className:"text-2xl font-bold text-emerald-400 flex items-center gap-2",children:[e.jsx("span",{children:"💻"})," Hands-On Java Demo Code"]}),e.jsx(t,{fileModule:o,title:"ThreadStarvationAndFairLocksCapstoneDemo.java",highlightLines:[7,10,14,15,20,21,33,34,35]})]}),e.jsx("section",{className:"space-y-4",children:e.jsx(r,{title:"Starvation Capstone FAQs",questions:s})}),e.jsx("section",{className:"space-y-4",children:e.jsx(n,{content:i,title:"Module 008_005 Topic 14: Starvation Capstone",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Printable Note",downloadFileName:"008_005_topic14_starvation_capstone_note.txt"})}),e.jsx(a,{note:"Congratulations on completing Module 008_005! You have mastered the entire science of thread safety, race conditions, the 4 Coffman deadlock conditions, jstack dump diagnostics, livelock jitter, and fair FIFO locking! — Sukanta Hui"})]})}export{x as default};
