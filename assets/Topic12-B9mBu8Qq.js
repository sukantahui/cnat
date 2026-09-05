import{j as e}from"./vendor-react-core-Doz9nIC6.js";import{J as n}from"./JavaFileLoader-BfBG3xz_.js";import{F as r}from"./FAQTemplate-BHhlgA96.js";import{P as t}from"./PlainTextPrint-C08xhKA4.js";import{T as a}from"./TeacherSukantaHui-DerPxfxp.js";import"./JavaCodeBlock-BwsLxS3r.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-CH1iX9C8.js";const o=`/**\r
 * Java Core Tutorial - Module 007_006: Concurrent Collections & ConcurrentHashMap\r
 * Topic 12: Enterprise Benchmark: HashMap vs Hashtable vs SynchronizedMap vs ConcurrentHashMap (Capstone)\r
 * Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
 */\r
\r
package com.coderaccotax.javatutorial.collections;\r
\r
import java.util.Collections;\r
import java.util.HashMap;\r
import java.util.Hashtable;\r
import java.util.Map;\r
import java.util.concurrent.ConcurrentHashMap;\r
import java.util.concurrent.CountDownLatch;\r
import java.util.concurrent.ExecutorService;\r
import java.util.concurrent.Executors;\r
\r
public class ConcurrentMapBenchmarkCapstoneDemo {\r
\r
    private static final int THREAD_COUNT = 8;\r
    private static final int OPS_PER_THREAD = 50_000;\r
\r
    private static long benchmark(Map<Integer, Integer> map) throws InterruptedException {\r
        ExecutorService executor = Executors.newFixedThreadPool(THREAD_COUNT);\r
        CountDownLatch latch = new CountDownLatch(THREAD_COUNT);\r
\r
        long start = System.currentTimeMillis();\r
        for (int t = 0; t < THREAD_COUNT; t++) {\r
            final int threadId = t;\r
            executor.submit(() -> {\r
                for (int i = 0; i < OPS_PER_THREAD; i++) {\r
                    int key = (threadId * OPS_PER_THREAD) + i;\r
                    map.put(key, i);\r
                    map.get(key);\r
                }\r
                latch.countDown();\r
            });\r
        }\r
        latch.await();\r
        executor.shutdown();\r
        return System.currentTimeMillis() - start;\r
    }\r
\r
    public static void main(String[] args) throws InterruptedException {\r
        System.out.println("==========================================================================");\r
        System.out.println(" TOPIC 12: ENTERPRISE MAP CONCURRENCY BENCHMARK (CAPSTONE) - BARRACKPORE");\r
        System.out.println("==========================================================================\\n");\r
\r
        // 1. Hashtable (Legacy Whole-Map Synchronized):\r
        long hashtableTime = benchmark(new Hashtable<>());\r
\r
        // 2. Collections.synchronizedMap (Synchronized Decorator):\r
        long syncMapTime = benchmark(Collections.synchronizedMap(new HashMap<>()));\r
\r
        // 3. ConcurrentHashMap (Modern CAS + Bucket Head Lock):\r
        long chmTime = benchmark(new ConcurrentHashMap<>());\r
\r
        System.out.println(">>> BENCHMARK RESULTS (" + THREAD_COUNT + " Threads x " + OPS_PER_THREAD + " Operations = 400,000 Ops):");\r
        System.out.println("  1. Legacy Hashtable           : " + hashtableTime + " ms (Coarse lock serialization)");\r
        System.out.println("  2. Collections.synchronizedMap: " + syncMapTime + " ms (Coarse lock serialization)");\r
        System.out.println("  3. ConcurrentHashMap          : " + chmTime + " ms (⚡ 3x-6x faster, zero whole-map locking!)");\r
\r
        System.out.println("\\n>>> GRAND ARCHITECTURAL MATRIX:");\r
        System.out.println("+-------------------+-------------------+-------------------+-------------------+");\r
        System.out.println("| Implementation    | Thread-Safe?      | Locking Mechanism | Read Performance  |");\r
        System.out.println("+-------------------+-------------------+-------------------+-------------------+");\r
        System.out.println("| HashMap           | NO (Data Corrupt) | None              | O(1) Fast         |");\r
        System.out.println("| Hashtable         | YES               | Method-level Lock | Blocked by Writes |");\r
        System.out.println("| SynchronizedMap   | YES               | Object Mutex Lock | Blocked by Writes |");\r
        System.out.println("| ConcurrentHashMap | YES (100% Safe)   | CAS + Bucket Lock | 100% Lock-Free    |");\r
        System.out.println("+-------------------+-------------------+-------------------+-------------------+");\r
\r
        System.out.println("\\n==========================================================================");\r
        System.out.println(" MODULE 007_006 CONCURRENT COLLECTIONS 100% COMPLETE!");\r
        System.out.println("==========================================================================");\r
    }\r
}`,s=`================================================================================\r
JAVA CORE TUTORIAL - QUICK REVISION GUIDE\r
Module 007_006: Concurrent Collections & ConcurrentHashMap\r
Topic 12: Concurrent Map Benchmark Capstone\r
Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
================================================================================\r
\r
1. MODULE 007_006 GRAND SUMMARY:\r
   - Standard collections (HashMap/ArrayList) are NOT thread-safe.\r
   - Synchronized wrappers use coarse global locks that kill concurrency.\r
   - Java 7 ConcurrentHashMap: Segment locking (16 ReentrantLocks).\r
   - Java 8+ ConcurrentHashMap: CAS empty bucket insertion + synchronized bucket head.\r
   - Lock-free 'get()' via volatile 'val' and 'next' pointers.\r
   - Size counted via 'baseCount' + 'CounterCell[]' (LongAdder pattern).\r
   - Prohibits null keys & values to eliminate concurrency race conditions.\r
   - ConcurrentSkipListMap: Lock-free sorted map (Skip Lists).\r
   - CopyOnWriteArraySet: Lock-free observer registry set.\r
\r
================================================================================\r
Classroom Practice: Barrackpore Academy | Mentor: Sukanta Hui\r
================================================================================`,c=[{question:"Why does 'ConcurrentHashMap' massively outperform 'Hashtable' and 'Collections.synchronizedMap' under multi-threaded contention?",shortAnswer:"Because 'Hashtable' and 'SynchronizedMap' use a single global lock that forces all threads to execute sequentially (even threads accessing different keys or just performing reads). In contrast, 'ConcurrentHashMap' uses CAS for empty buckets, locks only individual bucket heads for collisions, and makes all 'get()' reads completely lock-free via volatile memory. Threads accessing different buckets run in parallel at full hardware capability.",explanation:"Grand summary benchmark of Java concurrent map architectures.",hint:"Hashtable serializes all threads with 1 global lock; ConcurrentHashMap uses CAS, bucket locks, and lock-free reads.",level:"Advanced",codeExample:"ConcurrentMap<K,V> map = new ConcurrentHashMap<>(); // 3x to 6x faster than SynchronizedMap"}];function x(){return e.jsxs("div",{className:"space-y-12 px-4 md:px-8 py-8 text-slate-200 bg-slate-900 min-h-screen",children:[e.jsxs("header",{className:"space-y-4 border-b border-slate-800 pb-6",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"px-3 py-1 bg-sky-500/10 text-sky-400 border border-sky-500/20 text-xs font-semibold rounded-full uppercase tracking-wider",children:"Module 007_006 · Topic 12"}),e.jsx("span",{className:"px-3 py-1 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-xs font-semibold rounded-full",children:"Concurrency Capstone"})]}),e.jsxs("h1",{className:"text-xl sm:text-2xl md:text-3xl font-bold text-white tracking-tight",children:["Performance Benchmark: ",e.jsx("code",{className:"text-emerald-400 font-mono",children:"HashMap"})," vs ",e.jsx("code",{className:"text-rose-400 font-mono",children:"Hashtable"})," vs ",e.jsx("code",{className:"text-sky-400 font-mono",children:"ConcurrentHashMap"})," (Capstone)"]}),e.jsx("p",{className:"text-base md:text-lg text-slate-400 leading-relaxed max-w-4xl",children:"Synthesize Java concurrent collection architectures: executing high-contention benchmarks comparing whole-map serialization against CAS bucket striping and lock-free reads."})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsxs("h2",{className:"text-2xl font-bold text-emerald-400 flex items-center gap-2",children:[e.jsx("span",{children:"💻"})," Hands-On Java Demo Code"]}),e.jsx(n,{fileModule:o,title:"ConcurrentMapBenchmarkCapstoneDemo.java",highlightLines:[7,10,16,17,21,22,45,48,51,56,57]})]}),e.jsx("section",{className:"space-y-4",children:e.jsx(r,{title:"Concurrency Capstone FAQs",questions:c})}),e.jsx("section",{className:"space-y-4",children:e.jsx(t,{content:s,title:"Module 007_006 Topic 12: Concurrent Map Benchmark Capstone",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Printable Note",downloadFileName:"007_006_topic12_concurrent_map_benchmark_capstone_note.txt"})}),e.jsx(a,{note:"Congratulations on completing Module 007_006! You now possess elite mastery of Java concurrency—from fine-grained CAS bucket synchronization and lock-free reads, to striped counter size calculation and Skip List sorted maps! — Sukanta Hui"})]})}export{x as default};
