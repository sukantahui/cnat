import{j as e}from"./vendor-react-core-Doz9nIC6.js";import{J as t}from"./JavaFileLoader-BfBG3xz_.js";import{F as n}from"./FAQTemplate-BHhlgA96.js";import{P as r}from"./PlainTextPrint-C08xhKA4.js";import{T as i}from"./TeacherSukantaHui-RpFLNJ5A.js";import"./JavaCodeBlock-BwsLxS3r.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-wprqVFW_.js";const o=`/**\r
 * Java Core Tutorial - Module 008_003: Thread Synchronization & Locks\r
 * Topic 7: Minimizing Lock Scope: Reducing Contention to Maximize Parallel Throughput\r
 * Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
 */\r
\r
package com.coderaccotax.javatutorial.multithreading;\r
\r
import java.util.ArrayList;\r
import java.util.List;\r
\r
public class MinimizingLockScopeThroughputDemo {\r
\r
    private final List<String> certificateLedger = new ArrayList<>();\r
    private final Object ledgerLock = new Object();\r
\r
    // OPTIMIZED PATTERN: EXPENSIVE WORK OUTSIDE LOCK, CRITICAL STATE INSIDE LOCK:\r
    public void generateAndSaveCertificate(String studentName, int score) {\r
        // Step 1: EXPENSIVE CPU / I/O WORK (Takes 300 ms, executed 100% in parallel!):\r
        String certData = String.format("CERT-%05d: %s [Marks: %d/100, Institute: Barrackpore AccoTax]",\r
                System.currentTimeMillis() % 10000, studentName, score);\r
        try { Thread.sleep(300); } catch (InterruptedException ignored) {} // Expensive work\r
\r
        // Step 2: SHORT CRITICAL SECTION (Takes 0.001 ms, lock held for microseconds!):\r
        synchronized (ledgerLock) {\r
            certificateLedger.add(certData);\r
            System.out.printf("[%s] Saved to Ledger: %s%n", Thread.currentThread().getName(), certData);\r
        } // Lock immediately released!\r
    }\r
\r
    public static void main(String[] args) throws InterruptedException {\r
        System.out.println("==========================================================================");\r
        System.out.println(" TOPIC 7: MINIMIZING LOCK SCOPE & CONTENTION - BARRACKPORE");\r
        System.out.println("==========================================================================\\n");\r
\r
        MinimizingLockScopeThroughputDemo demo = new MinimizingLockScopeThroughputDemo();\r
\r
        long start = System.currentTimeMillis();\r
\r
        Thread t1 = new Thread(() -> demo.generateAndSaveCertificate("Swadeep", 98), "Worker-1");\r
        Thread t2 = new Thread(() -> demo.generateAndSaveCertificate("Tuhina", 99), "Worker-2");\r
        Thread t3 = new Thread(() -> demo.generateAndSaveCertificate("Abhronila", 97), "Worker-3");\r
\r
        t1.start();\r
        t2.start();\r
        t3.start();\r
\r
        t1.join();\r
        t2.join();\r
        t3.join();\r
\r
        long duration = System.currentTimeMillis() - start;\r
        System.out.printf("\\n>>> Total Time Taken: %d ms (All 3 certificates generated in parallel ~300 ms!)%n", duration);\r
        System.out.println("  - If entire method was synchronized, total time would be 3 x 300 ms = 900 ms (3x SLOWER)!");\r
\r
        System.out.println("\\n==========================================================================");\r
    }\r
}`,a=`================================================================================\r
JAVA CORE TUTORIAL - QUICK REVISION GUIDE\r
Module 008_003: Thread Synchronization & Locks\r
Topic 7: Minimizing Lock Scope\r
Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
================================================================================\r
\r
1. MINIMIZING LOCK SCOPE:\r
   - Rule: Hold locks for the absolute shortest duration possible.\r
   - Do expensive tasks (JSON parsing, DB I/O, crypto) OUTSIDE the lock.\r
   - Enter 'synchronized' only to update shared memory.\r
   - Low lock contention = maximum multi-core CPU utilization.\r
\r
================================================================================\r
Classroom Practice: Barrackpore Academy | Mentor: Sukanta Hui\r
================================================================================`,s=[{question:"What is 'Lock Contention' and how does minimizing the lock scope reduce application latency?",shortAnswer:"'Lock Contention' occurs when multiple threads attempt to acquire the same lock simultaneously, causing competing threads to block and wait in the 'BLOCKED' state (serializing execution). By 'Minimizing Lock Scope' (keeping expensive computations, network calls, and I/O outside the synchronized block), the lock is held for only microseconds rather than milliseconds, allowing other threads to acquire the lock immediately without queueing or blocking.",explanation:"Fundamental high-throughput concurrency optimization guideline.",hint:"Keep expensive I/O and computations outside the lock so the lock is held for microseconds, not milliseconds.",level:"Intermediate",codeExample:"String data = computeExpensive(); synchronized(lock) { list.add(data); }"}];function x(){return e.jsxs("div",{className:"space-y-12 px-4 md:px-8 py-8 text-slate-200 bg-slate-900 min-h-screen",children:[e.jsxs("header",{className:"space-y-4 border-b border-slate-800 pb-6",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"px-3 py-1 bg-sky-500/10 text-sky-400 border border-sky-500/20 text-xs font-semibold rounded-full uppercase tracking-wider",children:"Module 008_003 · Topic 7"}),e.jsx("span",{className:"px-3 py-1 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-xs font-semibold rounded-full",children:"Minimizing Lock Scope"})]}),e.jsx("h1",{className:"text-xl sm:text-2xl md:text-3xl font-bold text-white tracking-tight",children:"Minimizing Lock Scope: Reducing Contention to Maximize Parallel Throughput"}),e.jsx("p",{className:"text-base md:text-lg text-slate-400 leading-relaxed max-w-4xl",children:"Optimize concurrency throughput: keeping expensive formatting and I/O calculations outside synchronized blocks to hold locks for mere microseconds."})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsxs("h2",{className:"text-2xl font-bold text-emerald-400 flex items-center gap-2",children:[e.jsx("span",{children:"💻"})," Hands-On Java Demo Code"]}),e.jsx(t,{fileModule:o,title:"MinimizingLockScopeThroughputDemo.java",highlightLines:[7,10,16,17,21,22,23,36,37,38]})]}),e.jsx("section",{className:"space-y-4",children:e.jsx(n,{title:"Minimizing Lock Scope FAQs",questions:s})}),e.jsx("section",{className:"space-y-4",children:e.jsx(r,{content:a,title:"Module 008_003 Topic 7: Minimizing Lock Scope",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Printable Note",downloadFileName:"008_003_topic7_minimizing_lock_scope_note.txt"})}),e.jsx(i,{note:"Always calculate PDF templates and parse JSON OUTSIDE your synchronized block! Enter the lock for only 1 microsecond to append the record to your list, then exit immediately! That keeps your server blazingly fast! — Sukanta Hui"})]})}export{x as default};
