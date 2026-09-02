import{j as e}from"./vendor-react-core-Doz9nIC6.js";import{J as r}from"./JavaFileLoader-BfBG3xz_.js";import{F as t}from"./FAQTemplate-BHhlgA96.js";import{P as n}from"./PlainTextPrint-C08xhKA4.js";import{T as a}from"./TeacherSukantaHui-RpFLNJ5A.js";import"./JavaCodeBlock-BwsLxS3r.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-wprqVFW_.js";const o=`/**\r
 * Java Core Tutorial - Module 007_006: Concurrent Collections & ConcurrentHashMap\r
 * Topic 10: java.util.concurrent.ConcurrentSkipListMap: Lock-Free Sorted Map Architecture\r
 * Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
 */\r
\r
package com.coderaccotax.javatutorial.collections;\r
\r
import java.util.concurrent.ConcurrentNavigableMap;\r
import java.util.concurrent.ConcurrentSkipListMap;\r
\r
public class ConcurrentSkipListMapDemo {\r
\r
    public static void main(String[] args) {\r
        System.out.println("==========================================================================");\r
        System.out.println(" TOPIC 10: ConcurrentSkipListMap (LOCK-FREE SORTED MAP) - BARRACKPORE");\r
        System.out.println("==========================================================================\\n");\r
\r
        // ConcurrentNavigableMap (Thread-safe equivalent of TreeMap!):\r
        ConcurrentNavigableMap<Integer, String> studentLedger = new ConcurrentSkipListMap<>();\r
\r
        studentLedger.put(105, "Debangshu Mukherjee");\r
        studentLedger.put(101, "Swadeep Paul");\r
        studentLedger.put(103, "Tuhina Das");\r
        studentLedger.put(102, "Abhronila Das");\r
\r
        System.out.println(">>> 1. Lock-Free Sorted Map Traversal:");\r
        studentLedger.forEach((roll, name) ->\r
                System.out.printf("  Roll: %d -> %s%n", roll, name));\r
\r
        // Range Queries concurrently:\r
        System.out.println("\\n>>> 2. Concurrent Range Query (Rolls 101 to 103):");\r
        System.out.println("  " + studentLedger.subMap(101, true, 103, true));\r
\r
        System.out.println("\\n>>> HOW SKIP LISTS ACHIEVE LOCK-FREE SORTED CONCURRENCY:");\r
        System.out.println("  - Why NOT a Concurrent TreeMap? Balancing a Red-Black Tree requires rotating multiple tree nodes simultaneously, which is impossible to do with lock-free atomic CAS.");\r
        System.out.println("  - Skip List Data Structure    : A multi-level probabilistic linked list (express lanes).");\r
        System.out.println("  - Lock-Free Mutation          : Splicing nodes into linked lists uses atomic CAS on node pointers without locking the tree!");\r
        System.out.println("  - Performance                 : Guaranteed O(log n) time for put, get, remove, and range queries.");\r
\r
        System.out.println("\\n==========================================================================");\r
    }\r
}`,i=`================================================================================\r
JAVA CORE TUTORIAL - QUICK REVISION GUIDE\r
Module 007_006: Concurrent Collections & ConcurrentHashMap\r
Topic 10: ConcurrentSkipListMap Architecture\r
Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
================================================================================\r
\r
1. CONCURRENTSKIPLISTMAP:\r
   - Thread-safe, lock-free equivalent of 'TreeMap'.\r
   - Implements 'ConcurrentNavigableMap<K, V>'.\r
   - Backed by multi-level Skip List data structure.\r
   - O(log n) average time for add, remove, contains, and range queries.\r
   - Ideal for concurrent range scans and sorted ledgers.\r
\r
================================================================================\r
Classroom Practice: Barrackpore Academy | Mentor: Sukanta Hui\r
================================================================================`,s=[{question:"Why does Java provide 'ConcurrentSkipListMap' instead of a 'ConcurrentTreeMap' for thread-safe sorted maps?",shortAnswer:"Because self-balancing Red-Black trees (used in TreeMap) require complex multi-node rotations to maintain balance upon insertion and deletion. Rebalancing multiple tree nodes atomically in a lock-free manner without acquiring global locks is extremely complex and slow. In contrast, a 'Skip List' is a multi-level linked list where nodes can be inserted and deleted using simple atomic CAS operations on pointers, providing lock-free O(log n) sorted operations.",explanation:"Core algorithmic rationale in JSR-166 concurrent data structures.",hint:"Skip Lists allow lock-free CAS pointer updates, whereas tree rotations cannot be easily made lock-free.",level:"Advanced",codeExample:"ConcurrentNavigableMap<K,V> map = new ConcurrentSkipListMap<>(); // Lock-free sorted map"}];function g(){return e.jsxs("div",{className:"space-y-12 px-4 md:px-8 py-8 text-slate-200 bg-slate-900 min-h-screen",children:[e.jsxs("header",{className:"space-y-4 border-b border-slate-800 pb-6",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"px-3 py-1 bg-sky-500/10 text-sky-400 border border-sky-500/20 text-xs font-semibold rounded-full uppercase tracking-wider",children:"Module 007_006 · Topic 10"}),e.jsx("span",{className:"px-3 py-1 bg-purple-500/10 text-purple-400 border border-purple-500/20 text-xs font-semibold rounded-full",children:"ConcurrentSkipListMap"})]}),e.jsxs("h1",{className:"text-xl sm:text-2xl md:text-3xl font-bold text-white tracking-tight",children:[e.jsx("code",{className:"text-emerald-400 font-mono",children:"ConcurrentSkipListMap"}),": Thread-Safe, Lock-Free Sorted Maps"]}),e.jsx("p",{className:"text-base md:text-lg text-slate-400 leading-relaxed max-w-4xl",children:"Master lock-free sorted indexing: analyzing multi-level Skip List pointer mechanics and exploring why Skip Lists outperform tree rotations in concurrent architectures."})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsxs("h2",{className:"text-2xl font-bold text-emerald-400 flex items-center gap-2",children:[e.jsx("span",{children:"💻"})," Hands-On Java Demo Code"]}),e.jsx(r,{fileModule:o,title:"ConcurrentSkipListMapDemo.java",highlightLines:[7,10,16,17,18,23,24,28,32,33]})]}),e.jsx("section",{className:"space-y-4",children:e.jsx(t,{title:"Skip List Map FAQs",questions:s})}),e.jsx("section",{className:"space-y-4",children:e.jsx(n,{content:i,title:"Module 007_006 Topic 10: ConcurrentSkipListMap",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Printable Note",downloadFileName:"007_006_topic10_concurrent_skiplist_map_note.txt"})}),e.jsx(a,{note:"If you need a TreeMap that is thread-safe and never slows down under heavy multi-threading, use ConcurrentSkipListMap! Its multi-level express lanes allow lock-free sorted searches in O(log n) time! — Sukanta Hui"})]})}export{g as default};
