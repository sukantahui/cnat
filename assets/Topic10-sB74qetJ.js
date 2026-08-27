import{j as e}from"./vendor-react-core-Doz9nIC6.js";import{J as t}from"./JavaFileLoader-BfBG3xz_.js";import{F as r}from"./FAQTemplate-CkSqDH4B.js";import{P as a}from"./PlainTextPrint-C08xhKA4.js";import{T as n}from"./TeacherSukantaHui-CyIG3xbg.js";import"./JavaCodeBlock-BwsLxS3r.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-CIaKtAt4.js";const i=`/**\r
 * Java Core Tutorial - Module 008_008: Explicit Locks & Synchronizers\r
 * Topic 10: Concurrency Synchronizer 3: Semaphore (Permit Throttling & Rate Limiting) (Capstone)\r
 * Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
 */\r
\r
package com.coderaccotax.javatutorial.multithreading;\r
\r
import java.util.concurrent.Semaphore;\r
\r
public class SemaphoreRateLimiterCapstoneDemo {\r
\r
    // 1. Semaphore with 2 permits (Max 2 concurrent database connections allowed):\r
    private static final Semaphore DB_CONNECTION_POOL = new Semaphore(2);\r
\r
    public static void accessDatabase(String studentName) {\r
        try {\r
            System.out.printf("[%s] Requesting DB connection permit... (Available: %d)%n",\r
                    studentName, DB_CONNECTION_POOL.availablePermits());\r
\r
            // Acquire 1 permit (Blocks if all 2 permits are currently held):\r
            DB_CONNECTION_POOL.acquire();\r
\r
            System.out.printf(">>> [%s] GRANTED PERMIT! Querying GST Ledger...%n", studentName);\r
            Thread.sleep(300); // Simulate DB query\r
        } catch (InterruptedException ignored) {\r
        } finally {\r
            System.out.printf("[%s] Finished query. Releasing permit.%n", studentName);\r
            // Mandatory: ALWAYS release permit in finally block:\r
            DB_CONNECTION_POOL.release();\r
        }\r
    }\r
\r
    public static void main(String[] args) throws InterruptedException {\r
        System.out.println("==========================================================================");\r
        System.out.println(" TOPIC 10: Semaphore PERMIT THROTTLING & RATE LIMITING (CAPSTONE)");\r
        System.out.println("==========================================================================\\n");\r
\r
        Thread t1 = new Thread(() -> accessDatabase("Swadeep"), "T1");\r
        Thread t2 = new Thread(() -> accessDatabase("Tuhina"), "T2");\r
        Thread t3 = new Thread(() -> accessDatabase("Abhronila"), "T3");\r
        Thread t4 = new Thread(() -> accessDatabase("Debangshu"), "T4");\r
\r
        t1.start(); t2.start(); t3.start(); t4.start();\r
\r
        t1.join(); t2.join(); t3.join(); t4.join();\r
\r
        System.out.println("\\n==========================================================================");\r
        System.out.println(" 🎉 MODULE 008_008 EXPLICIT LOCKS & SYNCHRONIZERS 100% COMPLETE!");\r
        System.out.println("==========================================================================");\r
    }\r
}`,o=`================================================================================\r
JAVA CORE TUTORIAL - QUICK REVISION GUIDE\r
Module 008_008: Explicit Locks & Synchronizers\r
Topic 10: Semaphore Rate Limiting Capstone\r
Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
================================================================================\r
\r
1. MODULE 008_008 GRAND SUMMARY:\r
   - synchronized Limitations: No timeouts, uninterruptible, single wait-set.\r
   - ReentrantLock: Explicit lock/unlock in finally block with reentrancy.\r
   - Lock Features: tryLock(timeout), lockInterruptibly(), fair FIFO queuing.\r
   - Condition: Multiple targeted wait-queues (notFull & notEmpty).\r
   - ReentrantReadWriteLock: Shared readLock + exclusive writeLock.\r
   - StampedLock: Optimistic reads without lock acquisition (Java 8+).\r
   - CountDownLatch: One-time gate, master waits for N countdown events.\r
   - CyclicBarrier: Reusable rendezvous point for N peer threads.\r
   - Semaphore: Controls access to a pool of N permits (rate limiting).\r
\r
================================================================================\r
Classroom Practice: Barrackpore Academy | Mentor: Sukanta Hui\r
================================================================================`,s=[{question:"How does 'java.util.concurrent.Semaphore' control access to shared resource pools and enforce rate limiting?",shortAnswer:"'Semaphore' maintains a set of virtual 'permits'. Threads call 'semaphore.acquire()' to request a permit; if permits are available (> 0), one is deducted and the thread proceeds immediately. If zero permits remain, the calling thread blocks until another thread returns a permit via 'semaphore.release()'. Semaphores are ideal for throttling concurrency, managing connection pools (e.g. max 10 DB connections), and rate-limiting outbound API calls. A Semaphore initialized with 1 permit ('new Semaphore(1)') functions as a Binary Mutex.",explanation:"Grand architectural capstone of Module 008_008.",hint:"Maintains N permits; acquire() takes a permit; release() returns a permit in finally block.",level:"Advanced",codeExample:"Semaphore sem = new Semaphore(5); sem.acquire(); try { ... } finally { sem.release(); }"}];function S(){return e.jsxs("div",{className:"space-y-12 px-4 md:px-8 py-8 text-slate-200 bg-slate-900 min-h-screen",children:[e.jsxs("header",{className:"space-y-4 border-b border-slate-800 pb-6",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"px-3 py-1 bg-sky-500/10 text-sky-400 border border-sky-500/20 text-xs font-semibold rounded-full uppercase tracking-wider",children:"Module 008_008 · Topic 10"}),e.jsx("span",{className:"px-3 py-1 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-xs font-semibold rounded-full",children:"Semaphore Capstone"})]}),e.jsxs("h1",{className:"text-3xl md:text-4xl font-extrabold text-white tracking-tight",children:["Concurrency Synchronizers: ",e.jsx("code",{className:"text-emerald-400 font-mono",children:"Semaphore"})," Permit Pools & Rate Limiting (Capstone)"]}),e.jsxs("p",{className:"text-base md:text-lg text-slate-400 leading-relaxed max-w-4xl",children:["Synthesize explicit locking architectures: managing bounded resource pools with ",e.jsx("code",{className:"text-emerald-300 font-mono",children:"Semaphore"})," permits, implementing outbound API rate limiters, and mastering Java synchronizer primitives."]})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsxs("h2",{className:"text-2xl font-bold text-emerald-400 flex items-center gap-2",children:[e.jsx("span",{children:"💻"})," Hands-On Java Demo Code"]}),e.jsx(t,{fileModule:i,title:"SemaphoreRateLimiterCapstoneDemo.java",highlightLines:[7,10,14,15,20,21,27,28]})]}),e.jsx("section",{className:"space-y-4",children:e.jsx(r,{title:"Semaphore Capstone FAQs",questions:s})}),e.jsx("section",{className:"space-y-4",children:e.jsx(a,{content:o,title:"Module 008_008 Topic 10: Semaphore Rate Limiting Capstone",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Printable Note",downloadFileName:"008_008_topic10_semaphore_rate_limiting_note.txt"})}),e.jsx(n,{note:"Congratulations on completing Module 008_008! You have mastered explicit ReentrantLocks, Condition queues, ReadWriteLocks, StampedLock optimistic reads, CountDownLatch, CyclicBarrier, and Semaphore permit pools! — Sukanta Hui"})]})}export{S as default};
