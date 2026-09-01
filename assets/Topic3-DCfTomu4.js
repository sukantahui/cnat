import{j as e}from"./vendor-react-core-Doz9nIC6.js";import{J as r}from"./JavaFileLoader-BfBG3xz_.js";import{F as n}from"./FAQTemplate-BHhlgA96.js";import{P as a}from"./PlainTextPrint-C08xhKA4.js";import{T as t}from"./TeacherSukantaHui-CEPuAfsb.js";import"./JavaCodeBlock-BwsLxS3r.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-DGCamHnX.js";const o=`/**\r
 * Java Core Tutorial - Module 007_006: Concurrent Collections & ConcurrentHashMap\r
 * Topic 3: java.util.concurrent.ConcurrentHashMap: High-Performance Lock-Free Concurrency\r
 * Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
 */\r
\r
package com.coderaccotax.javatutorial.collections;\r
\r
import java.util.concurrent.ConcurrentHashMap;\r
import java.util.concurrent.ConcurrentMap;\r
\r
public class ConcurrentHashMapFundamentalsDemo {\r
\r
    public static void main(String[] args) throws InterruptedException {\r
        System.out.println("==========================================================================");\r
        System.out.println(" TOPIC 3: ConcurrentHashMap FUNDAMENTALS - BARRACKPORE");\r
        System.out.println("==========================================================================\\n");\r
\r
        ConcurrentMap<String, Integer> admissionCounters = new ConcurrentHashMap<>();\r
\r
        // High-concurrency worker threads mutating map simultaneously:\r
        Thread worker1 = new Thread(() -> {\r
            for (int i = 0; i < 5000; i++) {\r
                admissionCounters.merge("Barrackpore", 1, Integer::sum);\r
            }\r
        });\r
\r
        Thread worker2 = new Thread(() -> {\r
            for (int i = 0; i < 5000; i++) {\r
                admissionCounters.merge("Barrackpore", 1, Integer::sum);\r
            }\r
        });\r
\r
        worker1.start();\r
        worker2.start();\r
        worker1.join();\r
        worker2.join();\r
\r
        System.out.println(">>> 1. Thread-Safe Atomic Increments via ConcurrentHashMap:");\r
        System.out.println("  Total Barrackpore Enrollments: " + admissionCounters.get("Barrackpore") + " (Guaranteed 10,000 without data loss!)");\r
\r
        System.out.println("\\n>>> WHY ConcurrentHashMap IS THE ENTERPRISE GOLD STANDARD:");\r
        System.out.println("  1. 100% Thread-Safe : Guaranteed thread-safety across all read and write methods without data corruption.");\r
        System.out.println("  2. Fine-Grained Locking: Only locks the specific bucket head node being modified; all other buckets remain unlocked!");\r
        System.out.println("  3. Lock-Free Reads  : 'get()' never acquires locks and executes at hardware memory speed.");\r
        System.out.println("  4. High Scalability : Scales linearly with available CPU cores.");\r
\r
        System.out.println("\\n==========================================================================");\r
    }\r
}`,s=`================================================================================\r
JAVA CORE TUTORIAL - QUICK REVISION GUIDE\r
Module 007_006: Concurrent Collections & ConcurrentHashMap\r
Topic 3: ConcurrentHashMap Fundamentals\r
Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
================================================================================\r
\r
1. CONCURRENTHASHMAP FUNDAMENTALS:\r
   - Part of 'java.util.concurrent' (JSR-166).\r
   - High-throughput thread-safe map.\r
   - Fine-grained bucket locking (not whole-map locking).\r
   - Lock-free 'get()' reads using volatile memory semantics.\r
   - Highly scalable across multi-core server processors.\r
\r
================================================================================\r
Classroom Practice: Barrackpore Academy | Mentor: Sukanta Hui\r
================================================================================`,i=[{question:"What is 'java.util.concurrent.ConcurrentHashMap' and what are its 3 primary architectural advantages over synchronized wrappers?",shortAnswer:"'ConcurrentHashMap' is a high-performance, thread-safe hash map designed by Doug Lea for concurrent applications. Its 3 primary advantages are: 1. 'Fine-Grained Locking': locks only the specific bucket head being modified, allowing concurrent writes to other buckets. 2. 'Lock-Free Reads': 'get()' lookups use volatile memory semantics without acquiring any locks. 3. 'Linear Scalability': throughput increases with additional CPU cores.",explanation:"Standard concurrent dictionary in enterprise Java applications.",hint:"Fine-grained bucket locking, lock-free reads, and linear multi-core scalability.",level:"Intermediate",codeExample:"ConcurrentMap<K,V> map = new ConcurrentHashMap<>(); // Enterprise standard"}];function g(){return e.jsxs("div",{className:"space-y-12 px-4 md:px-8 py-8 text-slate-200 bg-slate-900 min-h-screen",children:[e.jsxs("header",{className:"space-y-4 border-b border-slate-800 pb-6",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"px-3 py-1 bg-sky-500/10 text-sky-400 border border-sky-500/20 text-xs font-semibold rounded-full uppercase tracking-wider",children:"Module 007_006 · Topic 3"}),e.jsx("span",{className:"px-3 py-1 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-xs font-semibold rounded-full",children:"ConcurrentHashMap"})]}),e.jsxs("h1",{className:"text-xl sm:text-2xl md:text-3xl font-bold text-white tracking-tight",children:[e.jsx("code",{className:"text-emerald-400 font-mono",children:"java.util.concurrent.ConcurrentHashMap"}),": High-Performance Thread Safety"]}),e.jsx("p",{className:"text-base md:text-lg text-slate-400 leading-relaxed max-w-4xl",children:"Discover modern concurrent map architecture: analyzing fine-grained bucket synchronization, lock-free reads, and linear multi-core scalability."})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsxs("h2",{className:"text-2xl font-bold text-emerald-400 flex items-center gap-2",children:[e.jsx("span",{children:"💻"})," Hands-On Java Demo Code"]}),e.jsx(r,{fileModule:o,title:"ConcurrentHashMapFundamentalsDemo.java",highlightLines:[7,10,16,20,21,26,27,34,35]})]}),e.jsx("section",{className:"space-y-4",children:e.jsx(n,{title:"ConcurrentHashMap FAQs",questions:i})}),e.jsx("section",{className:"space-y-4",children:e.jsx(a,{content:s,title:"Module 007_006 Topic 3: ConcurrentHashMap Fundamentals",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Printable Note",downloadFileName:"007_006_topic3_concurrenthashmap_fundamentals_note.txt"})}),e.jsx(t,{note:"Whenever you need a shared map in a multithreaded web application or Spring Boot backend, ALWAYS reach for ConcurrentHashMap! It gives you 100% thread safety with virtually zero lock contention! — Sukanta Hui"})]})}export{g as default};
