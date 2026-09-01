import{j as e}from"./vendor-react-core-Doz9nIC6.js";import{J as r}from"./JavaFileLoader-BfBG3xz_.js";import{F as a}from"./FAQTemplate-BHhlgA96.js";import{P as t}from"./PlainTextPrint-C08xhKA4.js";import{T as n}from"./TeacherSukantaHui-CEPuAfsb.js";import"./JavaCodeBlock-BwsLxS3r.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-DGCamHnX.js";const i=`/**\r
 * Java Core Tutorial - Module 012_005: Interview Mastery & Tricky MCQs\r
 * Topic 8: Concurrency Live Coding Scenarios - Deadlock, LRU Cache & Semaphore\r
 * Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
 */\r
\r
package com.coderaccotax.javatutorial.interview;\r
\r
import java.util.LinkedHashMap;\r
import java.util.Map;\r
import java.util.concurrent.locks.ReentrantReadWriteLock;\r
\r
public class ConcurrencyLiveCodingScenariosDemo {\r
\r
    // Thread-Safe LRU Cache:\r
    public static class ThreadSafeLRUCache<K, V> {\r
        private final int capacity;\r
        private final Map<K, V> map;\r
        private final ReentrantReadWriteLock lock = new ReentrantReadWriteLock();\r
\r
        public ThreadSafeLRUCache(int capacity) {\r
            this.capacity = capacity;\r
            this.map = new LinkedHashMap<K, V>(capacity, 0.75f, true) {\r
                @Override\r
                protected boolean removeEldestEntry(Map.Entry<K, V> eldest) {\r
                    return size() > capacity;\r
                }\r
            };\r
        }\r
\r
        public V get(K key) {\r
            lock.writeLock().lock(); // access-order requires writeLock\r
            try { return map.get(key); }\r
            finally { lock.writeLock().unlock(); }\r
        }\r
\r
        public void put(K key, V value) {\r
            lock.writeLock().lock();\r
            try { map.put(key, value); }\r
            finally { lock.writeLock().unlock(); }\r
        }\r
    }\r
\r
    public static void main(String[] args) {\r
        System.out.println("==========================================================================");\r
        System.out.println(" TOPIC 8: CONCURRENCY LIVE CODING SCENARIOS - BARRACKPORE");\r
        System.out.println("==========================================================================\\n");\r
\r
        ThreadSafeLRUCache<Integer, String> cache = new ThreadSafeLRUCache<>(2);\r
        cache.put(1, "Barrackpore");\r
        cache.put(2, "Shyamnagar");\r
        cache.get(1); // Access 1 -> 2 becomes eldest\r
        cache.put(3, "Naihati"); // Evicts key 2!\r
\r
        System.out.println("LRU Cache Results:");\r
        System.out.println("  Key 1 (Accessed) : " + cache.get(1)); // "Barrackpore"\r
        System.out.println("  Key 2 (Evicted)  : " + cache.get(2)); // null\r
        System.out.println("  Key 3 (Newest)   : " + cache.get(3)); // "Naihati"\r
\r
        System.out.println("\\n==========================================================================");\r
    }\r
}\r
`,o=`================================================================================\r
JAVA CORE TUTORIAL - QUICK REVISION GUIDE\r
Module 012_005: Interview Mastery & Tricky MCQs\r
Topic 8: Concurrency Live Coding Scenarios\r
Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
================================================================================\r
\r
1. LRU CACHE IMPLEMENTATION:\r
   - 'LinkedHashMap(capacity, loadFactor, accessOrder=true)'.\r
   - Override 'removeEldestEntry()' returning 'size() > capacity'.\r
   - Guard with 'ReentrantReadWriteLock' (write lock needed for get due to access order mutation).\r
\r
================================================================================\r
Classroom Practice: Barrackpore Academy | Mentor: Sukanta Hui\r
================================================================================\r
`,c=[{question:"Why must get() on an access-ordered LinkedHashMap acquire a write lock rather than a read lock in multi-threaded code?",shortAnswer:"Because in access-order mode (accessOrder=true), calling get() mutates the internal doubly-linked list pointers to move the accessed entry to the tail, which is a structural write operation that is not thread-safe under read locks.",explanation:"Access-order LinkedHashMap mutates list nodes on reads.",hint:"get() modifies internal doubly-linked list node order, requiring a write lock.",level:"Advanced",codeExample:"lock.writeLock().lock(); try { return map.get(key); } ..."},{question:"What are the 4 Coffman conditions required for a Deadlock to occur?",shortAnswer:"1) Mutual Exclusion, 2) Hold and Wait, 3) No Preemption, 4) Circular Wait. Breaking any one of these four conditions completely prevents deadlocks.",explanation:"Theoretical foundation of deadlock prevention.",hint:"Mutual Exclusion, Hold and Wait, No Preemption, Circular Wait.",level:"Intermediate",codeExample:"Enforcing global lock acquisition order breaks Circular Wait."}];function y(){return e.jsxs("div",{className:"space-y-12 px-4 md:px-8 py-8 text-slate-200 bg-slate-900 min-h-screen",children:[e.jsxs("header",{className:"space-y-4 border-b border-slate-800 pb-6",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"px-3 py-1 bg-sky-500/10 text-sky-400 border border-sky-500/20 text-xs font-semibold rounded-full uppercase tracking-wider",children:"Module 012_005 · Topic 8"}),e.jsx("span",{className:"px-3 py-1 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-xs font-semibold rounded-full",children:"Interview Mastery & Tricky MCQs"})]}),e.jsxs("h1",{className:"text-xl sm:text-2xl md:text-3xl font-bold text-white tracking-tight",children:["Concurrency Scenarios: ",e.jsx("code",{className:"text-emerald-400 font-mono",children:"Deadlock, LRU Cache & Semaphore"})]}),e.jsx("p",{className:"text-base md:text-lg text-slate-400 leading-relaxed max-w-4xl",children:"Live coding scenarios: writing an intentional deadlock and thread dump analysis, implementing a thread-safe LRU cache, and writing a custom Semaphore."})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsxs("h2",{className:"text-2xl font-bold text-emerald-400 flex items-center gap-2",children:[e.jsx("span",{children:"💻"})," Hands-On Java Demo Code"]}),e.jsx(r,{fileModule:i,title:"ConcurrencyLiveCodingScenariosDemo.java",highlightLines:[18,25,34,43]})]}),e.jsx("section",{className:"space-y-4",children:e.jsx(a,{title:"Interview Riddles & MCQs FAQs",questions:c})}),e.jsx("section",{className:"space-y-4",children:e.jsx(t,{content:o,title:"Module 012_005 Topic 8: Concurrency Live Coding Scenarios",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Printable Note",downloadFileName:"012_005_topic8_concurrency_live_coding_scenarios_note.txt"})}),e.jsx(n,{note:"These three live-coding problems are standard interview tests for senior roles! Always know how to write an intentional deadlock with lock ordering, and how to build a Thread-Safe LRU cache using LinkedHashMap or custom doubly-linked lists! — Sukanta Hui"})]})}export{y as default};
