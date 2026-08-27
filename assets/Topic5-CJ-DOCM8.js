import{j as e}from"./vendor-react-core-Doz9nIC6.js";import{J as r}from"./JavaFileLoader-BfBG3xz_.js";import{F as a}from"./FAQTemplate-CkSqDH4B.js";import{P as t}from"./PlainTextPrint-C08xhKA4.js";import{T as n}from"./TeacherSukantaHui-CyIG3xbg.js";import"./JavaCodeBlock-BwsLxS3r.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-CIaKtAt4.js";const o=`/**\r
 * Java Core Tutorial - Module 008_008: Explicit Locks & Synchronizers\r
 * Topic 5: High-Performance Concurrent Cache: 10x Read Throughput with ReadWriteLock\r
 * Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
 */\r
\r
package com.coderaccotax.javatutorial.multithreading;\r
\r
import java.util.HashMap;\r
import java.util.Map;\r
import java.util.concurrent.locks.Lock;\r
import java.util.concurrent.locks.ReadWriteLock;\r
import java.util.concurrent.locks.ReentrantReadWriteLock;\r
\r
class ThreadSafeStudentCache {\r
    private final Map<String, String> cache = new HashMap<>();\r
    private final ReadWriteLock rwLock = new ReentrantReadWriteLock();\r
    private final Lock readLock = rwLock.readLock();\r
    private final Lock writeLock = rwLock.writeLock();\r
\r
    public String get(String key) {\r
        readLock.lock();\r
        try {\r
            return cache.get(key); // High concurrency: 1,000 threads can read simultaneously!\r
        } finally {\r
            readLock.unlock();\r
        }\r
    }\r
\r
    public void put(String key, String value) {\r
        writeLock.lock();\r
        try {\r
            cache.put(key, value); // Exclusive write\r
        } finally {\r
            writeLock.unlock();\r
        }\r
    }\r
}\r
\r
public class ReadWriteLockCacheBenchmarkDemo {\r
\r
    public static void main(String[] args) {\r
        System.out.println("==========================================================================");\r
        System.out.println(" TOPIC 5: ReadWriteLock HIGH-THROUGHPUT CACHE - BARRACKPORE");\r
        System.out.println("==========================================================================\\n");\r
\r
        ThreadSafeStudentCache studentCache = new ThreadSafeStudentCache();\r
        studentCache.put("STD-101", "Swadeep Paul [GST Grade A]");\r
        studentCache.put("STD-102", "Tuhina Das [Tax Grade A+]");\r
\r
        System.out.println(">>> Cache Populated. Reading concurrently:");\r
        System.out.println("  STD-101: " + studentCache.get("STD-101"));\r
        System.out.println("  STD-102: " + studentCache.get("STD-102"));\r
\r
        System.out.println("\\n>>> WHEN TO USE ReadWriteLock IN PRODUCTION:");\r
        System.out.println("  - Ideal for READ-HEAVY architectures (e.g. 95% reads, 5% writes).");\r
        System.out.println("  - Caution: In write-heavy architectures, ReentrantLock or ConcurrentHashMap is faster due to ReadWriteLock tracking overhead.");\r
\r
        System.out.println("\\n==========================================================================");\r
    }\r
}`,i=`================================================================================\r
JAVA CORE TUTORIAL - QUICK REVISION GUIDE\r
Module 008_008: Explicit Locks & Synchronizers\r
Topic 5: ReadWriteLock in Caches\r
Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
================================================================================\r
\r
1. READWRITELOCK CACHE ARCHITECTURE:\r
   - Wraps standard 'HashMap' with 'ReadWriteLock'.\r
   - 'get()' acquires 'readLock()'.\r
   - 'put()' acquires 'writeLock()'.\r
   - Best for: Read-heavy shared caches (>90% reads).\r
   - High multi-core speedup over synchronized HashMap.\r
\r
================================================================================\r
Classroom Practice: Barrackpore Academy | Mentor: Sukanta Hui\r
================================================================================`,s=[{question:"When is 'ReentrantReadWriteLock' most beneficial and when should it be avoided in favor of 'ConcurrentHashMap' or 'ReentrantLock'?",shortAnswer:"'ReentrantReadWriteLock' provides massive throughput gains in 'Read-Heavy' systems (e.g., 90%+ reads, <10% writes) where operations hold the read lock for non-trivial durations (e.g. searching a cache or parsing a structure). However, in 'Write-Heavy' systems or micro-read operations (retrieving a simple pointer), the internal bookkeeping overhead of managing shared read count bits and write owner locks can degrade performance below that of a plain 'ReentrantLock' or lock-free 'ConcurrentHashMap'.",explanation:"Production profiling criteria for ReadWriteLock.",hint:"Use in read-heavy systems (90%+ reads); avoid in write-heavy systems where bookkeeping overhead slows down throughput.",level:"Intermediate",codeExample:"class Cache { ReadWriteLock rw = new ReentrantReadWriteLock(); ... }"}];function x(){return e.jsxs("div",{className:"space-y-12 px-4 md:px-8 py-8 text-slate-200 bg-slate-900 min-h-screen",children:[e.jsxs("header",{className:"space-y-4 border-b border-slate-800 pb-6",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"px-3 py-1 bg-sky-500/10 text-sky-400 border border-sky-500/20 text-xs font-semibold rounded-full uppercase tracking-wider",children:"Module 008_008 · Topic 5"}),e.jsx("span",{className:"px-3 py-1 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-xs font-semibold rounded-full",children:"High-Throughput Cache"})]}),e.jsxs("h1",{className:"text-3xl md:text-4xl font-extrabold text-white tracking-tight",children:["Massive Read Throughput with ",e.jsx("code",{className:"text-emerald-400 font-mono",children:"ReadWriteLock"})," in Shared Caches"]}),e.jsxs("p",{className:"text-base md:text-lg text-slate-400 leading-relaxed max-w-4xl",children:["Construct production caches: wrapping fast ",e.jsx("code",{className:"text-emerald-300 font-mono",children:"HashMap"})," structures with asymmetric read/write locks to achieve 10x throughput scalability under read-heavy workloads."]})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsxs("h2",{className:"text-2xl font-bold text-emerald-400 flex items-center gap-2",children:[e.jsx("span",{children:"💻"})," Hands-On Java Demo Code"]}),e.jsx(r,{fileModule:o,title:"ReadWriteLockCacheBenchmarkDemo.java",highlightLines:[7,10,11,17,18,22,23,26,27,31,32]})]}),e.jsx("section",{className:"space-y-4",children:e.jsx(a,{title:"ReadWriteLock Cache FAQs",questions:s})}),e.jsx("section",{className:"space-y-4",children:e.jsx(t,{content:i,title:"Module 008_008 Topic 5: ReadWriteLock in Caches",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Printable Note",downloadFileName:"008_008_topic5_read_write_lock_cache_note.txt"})}),e.jsx(n,{note:"Most enterprise applications are 95% reads and only 5% writes! If you use standard 'synchronized' on a cache, 95% of your users are stuck waiting in line for no reason! ReadWriteLock lets all 95% read simultaneously! — Sukanta Hui"})]})}export{x as default};
