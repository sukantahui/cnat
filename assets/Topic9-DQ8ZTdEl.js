import{j as e}from"./vendor-react-core-Doz9nIC6.js";import{J as r}from"./JavaFileLoader-BfBG3xz_.js";import{F as t}from"./FAQTemplate-CkSqDH4B.js";import{P as a}from"./PlainTextPrint-C08xhKA4.js";import{T as n}from"./TeacherSukantaHui-CC0AKmkm.js";import"./JavaCodeBlock-BwsLxS3r.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-BtJHuk7w.js";const o=`/**\r
 * Java Core Tutorial - Module 008_008: Explicit Locks & Synchronizers\r
 * Topic 9: Architectural Comparison: CountDownLatch vs CyclicBarrier\r
 * Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
 */\r
\r
package com.coderaccotax.javatutorial.multithreading;\r
\r
public class LatchVsBarrierComparisonMatrixDemo {\r
\r
    public static void main(String[] args) {\r
        System.out.println("==========================================================================");\r
        System.out.println(" TOPIC 9: CountDownLatch vs CyclicBarrier COMPARISON - BARRACKPORE");\r
        System.out.println("==========================================================================\\n");\r
\r
        System.out.println("+-------------------+-----------------------------------+-----------------------------------+");\r
        System.out.println("| Feature           | CountDownLatch                    | CyclicBarrier                     |");\r
        System.out.println("+-------------------+-----------------------------------+-----------------------------------+");\r
        System.out.println("| Reusability       | ONE-TIME ONLY (Cannot be reset)   | REUSABLE (Resets automatically)   |");\r
        System.out.println("| Synchronization   | 1+ threads wait for N events      | N threads wait for EACH OTHER     |");\r
        System.out.println("| Thread Role       | Workers call countDown(),         | All participating threads call    |");\r
        System.out.println("|                   | Master thread calls await()       | barrier.await() (Peer-to-peer)    |");\r
        System.out.println("| Action Callback   | NO callback support               | Supports optional 'barrierAction' |");\r
        System.out.println("| Typical Use Case  | Application / Service startup,    | Iterative multi-phase algorithms, |");\r
        System.out.println("|                   | waiting for async init tasks      | parallel simulation matrix steps  |");\r
        System.out.println("+-------------------+-----------------------------------+-----------------------------------+");\r
\r
        System.out.println("\\n==========================================================================");\r
    }\r
}`,i=`================================================================================\r
JAVA CORE TUTORIAL - QUICK REVISION GUIDE\r
Module 008_008: Explicit Locks & Synchronizers\r
Topic 9: Latch vs Barrier Comparison\r
Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
================================================================================\r
\r
1. LATCH vs BARRIER:\r
   - CountDownLatch: One-time gate, 1 master waits for N tasks to finish.\r
   - CyclicBarrier: Reusable barrier, N peer threads wait for each other.\r
   - Latch cannot reset; Barrier resets automatically after each round.\r
   - Barrier executes optional 'barrierAction' when all threads reach gate.\r
\r
================================================================================\r
Classroom Practice: Barrackpore Academy | Mentor: Sukanta Hui\r
================================================================================`,s=[{question:"Summarize the primary differences between 'CountDownLatch' and 'CyclicBarrier' in Java.",shortAnswer:"1. 'Reusability': CountDownLatch is strictly one-time; once its count reaches zero it cannot be reset. CyclicBarrier is reusable and automatically resets its count back to N once all threads pass. 2. 'Coordination Model': CountDownLatch allows one or more coordinator threads to wait for N external events ('countDown()'). CyclicBarrier is a peer-to-peer rendezvous where N participating threads wait for EACH OTHER at a common barrier ('await()'). 3. 'Callback': CyclicBarrier supports an optional 'barrierAction' Runnable that executes when all threads arrive; CountDownLatch does not.",explanation:"Classic Java concurrency interview comparison.",hint:"Latch is one-time waiting for N events; Barrier is reusable rendezvous where N threads wait for each other.",level:"Intermediate",codeExample:"// Latch: latch.countDown(); latch.await(); | Barrier: barrier.await(); (Resets!)"}];function y(){return e.jsxs("div",{className:"space-y-12 px-4 md:px-8 py-8 text-slate-200 bg-slate-900 min-h-screen",children:[e.jsxs("header",{className:"space-y-4 border-b border-slate-800 pb-6",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"px-3 py-1 bg-sky-500/10 text-sky-400 border border-sky-500/20 text-xs font-semibold rounded-full uppercase tracking-wider",children:"Module 008_008 · Topic 9"}),e.jsx("span",{className:"px-3 py-1 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-xs font-semibold rounded-full",children:"Latch vs Barrier"})]}),e.jsxs("h1",{className:"text-3xl md:text-4xl font-extrabold text-white tracking-tight",children:["Architectural Comparison: ",e.jsx("code",{className:"text-emerald-400 font-mono",children:"CountDownLatch"})," vs ",e.jsx("code",{className:"text-purple-400 font-mono",children:"CyclicBarrier"})]}),e.jsx("p",{className:"text-base md:text-lg text-slate-400 leading-relaxed max-w-4xl",children:"Evaluate synchronizer design decisions: contrasting one-time event countdowns against cyclic peer-to-peer rendezvous barriers and barrier action callbacks."})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsxs("h2",{className:"text-2xl font-bold text-emerald-400 flex items-center gap-2",children:[e.jsx("span",{children:"💻"})," Hands-On Java Demo Code"]}),e.jsx(r,{fileModule:o,title:"LatchVsBarrierComparisonMatrixDemo.java",highlightLines:[7,10,13,14,15,16,17,18,19,20]})]}),e.jsx("section",{className:"space-y-4",children:e.jsx(t,{title:"Latch vs Barrier FAQs",questions:s})}),e.jsx("section",{className:"space-y-4",children:e.jsx(a,{content:i,title:"Module 008_008 Topic 9: Latch vs Barrier Comparison",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Printable Note",downloadFileName:"008_008_topic9_latch_vs_barrier_comparison_note.txt"})}),e.jsx(n,{note:"Remember the simple rule: If 1 manager is waiting for 3 tasks to finish, use CountDownLatch! If 3 workers need to wait for each other at a checkpoint and repeat the cycle tomorrow, use CyclicBarrier! — Sukanta Hui"})]})}export{y as default};
