import{j as e}from"./vendor-react-core-Doz9nIC6.js";import{J as r}from"./JavaFileLoader-BfBG3xz_.js";import{F as n}from"./FAQTemplate-BHhlgA96.js";import{P as t}from"./PlainTextPrint-C08xhKA4.js";import{T as o}from"./TeacherSukantaHui-DDN87fI5.js";import"./JavaCodeBlock-BwsLxS3r.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-DEsnU7fn.js";const i=`/**\r
 * Java Core Tutorial - Module 012_003: High-Concurrency Order Matching Engine\r
 * Topic 5: Atomic State Updates - ConcurrentSkipListMap & Atomics\r
 * Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
 */\r
\r
package com.coderaccotax.javatutorial.exchange;\r
\r
import java.util.concurrent.ConcurrentLinkedQueue;\r
import java.util.concurrent.ConcurrentSkipListMap;\r
import java.util.concurrent.atomic.AtomicLong;\r
\r
public class AtomicStateUpdatesSkipListDemo {\r
\r
    public record SimpleOrder(long id, long priceMicros, long qty) {}\r
\r
    public static class ConcurrentOrderBook {\r
        private final ConcurrentSkipListMap<Long, ConcurrentLinkedQueue<SimpleOrder>> bidBook =\r
            new ConcurrentSkipListMap<>((a, b) -> Long.compare(b, a)); // Descending\r
\r
        private final AtomicLong tradeSequence = new AtomicLong(1L);\r
\r
        public void submitBid(long priceMicros, SimpleOrder order) {\r
            bidBook.computeIfAbsent(priceMicros, p -> new ConcurrentLinkedQueue<>()).add(order);\r
        }\r
\r
        public long nextTradeId() {\r
            return tradeSequence.getAndIncrement();\r
        }\r
\r
        public Long getBestBidPrice() {\r
            return bidBook.isEmpty() ? null : bidBook.firstKey();\r
        }\r
    }\r
\r
    public static void main(String[] args) {\r
        System.out.println("==========================================================================");\r
        System.out.println(" TOPIC 5: CONCURRENT SKIP LIST MAP & ATOMICS - BARRACKPORE");\r
        System.out.println("==========================================================================\\n");\r
\r
        ConcurrentOrderBook book = new ConcurrentOrderBook();\r
        book.submitBid(3500000000L, new SimpleOrder(1L, 3500000000L, 50));\r
        book.submitBid(3525000000L, new SimpleOrder(2L, 3525000000L, 100));\r
\r
        System.out.println("Current Best Bid Price (Lock-Free): " + book.getBestBidPrice() / 1_000_000.0);\r
        System.out.println("Allocated Trade Sequence ID       : " + book.nextTradeId());\r
\r
        System.out.println("\\n==========================================================================");\r
    }\r
}\r
`,a=`================================================================================\r
JAVA CORE TUTORIAL - QUICK REVISION GUIDE\r
Module 012_003: High-Concurrency Order Matching Engine\r
Topic 5: Atomic State Updates with SkipList\r
Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
================================================================================\r
\r
1. CONCURRENTSKIPLISTMAP:\r
   - Lock-free, sorted, thread-safe map using probabilistic Skip Lists.\r
   - Ideal for concurrent price level lookups and modifications.\r
\r
2. ATOMIC SEQUENCE ALLOCATION:\r
   - 'AtomicLong.getAndIncrement()' guarantees unique monotonic trade IDs across threads.\r
\r
================================================================================\r
Classroom Practice: Barrackpore Academy | Mentor: Sukanta Hui\r
================================================================================\r
`,s=[{question:"Why is ConcurrentSkipListMap used instead of synchronized TreeMap in concurrent order books?",shortAnswer:"ConcurrentSkipListMap provides lock-free, scalable concurrent reads and writes with O(log N) complexity without suffering from the global contention bottleneck of synchronized TreeMap.",explanation:"Thread-safe sorted map implementation in java.util.concurrent.",hint:"Lock-free skip list architecture avoids global synchronization bottlenecks.",level:"Intermediate",codeExample:"ConcurrentSkipListMap<Long, Queue<Order>> book = new ConcurrentSkipListMap<>();"},{question:"How does AtomicLong guarantee thread safety when generating trade IDs?",shortAnswer:"It relies on hardware-level Compare-And-Swap (CAS) CPU instructions to atomically increment the internal 64-bit value without acquiring locks.",explanation:"Hardware-level lock-free atomic updates.",hint:"Uses atomic CPU CAS instructions to guarantee uniqueness without locks.",level:"Beginner",codeExample:"long nextId = tradeSequence.getAndIncrement();"}];function x(){return e.jsxs("div",{className:"space-y-12 px-4 md:px-8 py-8 text-slate-200 bg-slate-900 min-h-screen",children:[e.jsxs("header",{className:"space-y-4 border-b border-slate-800 pb-6",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"px-3 py-1 bg-sky-500/10 text-sky-400 border border-sky-500/20 text-xs font-semibold rounded-full uppercase tracking-wider",children:"Module 012_003 · Topic 5"}),e.jsx("span",{className:"px-3 py-1 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-xs font-semibold rounded-full",children:"Capstone 2: Order Matching Engine"})]}),e.jsxs("h1",{className:"text-xl sm:text-2xl md:text-3xl font-bold text-white tracking-tight",children:["Atomic State Updates: ",e.jsx("code",{className:"text-emerald-400 font-mono",children:"ConcurrentSkipListMap & Atomics"})]}),e.jsx("p",{className:"text-base md:text-lg text-slate-400 leading-relaxed max-w-4xl",children:"Lock-free concurrency: maintaining sorted order books concurrently with ConcurrentSkipListMap, AtomicLong sequence generators, and CAS loops."})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsxs("h2",{className:"text-2xl font-bold text-emerald-400 flex items-center gap-2",children:[e.jsx("span",{children:"💻"})," Hands-On Java Demo Code"]}),e.jsx(r,{fileModule:i,title:"AtomicStateUpdatesSkipListDemo.java",highlightLines:[18,25,34,43]})]}),e.jsx("section",{className:"space-y-4",children:e.jsx(n,{title:"Order Matching Engine FAQs",questions:s})}),e.jsx("section",{className:"space-y-4",children:e.jsx(t,{content:a,title:"Module 012_003 Topic 5: Atomic State Updates with SkipList",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Printable Note",downloadFileName:"012_003_topic5_atomic_state_updates_skiplist_note.txt"})}),e.jsx(o,{note:"ConcurrentSkipListMap is a lock-free, concurrent sorted map backed by Skip Lists! It allows multiple threads to read and write price levels concurrently without taking global locks! — Sukanta Hui"})]})}export{x as default};
