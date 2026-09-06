import{j as e}from"./vendor-react-core-Doz9nIC6.js";import{J as t}from"./JavaFileLoader-BfBG3xz_.js";import{F as n}from"./FAQTemplate-BHhlgA96.js";import{P as r}from"./PlainTextPrint-C08xhKA4.js";import{T as o}from"./TeacherSukantaHui-DDN87fI5.js";import"./JavaCodeBlock-BwsLxS3r.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-DEsnU7fn.js";const a=`/**\r
 * Java Core Tutorial - Module 007_006: Concurrent Collections & ConcurrentHashMap\r
 * Topic 2: Bottleneck of Synchronized Wrappers: Coarse-Grained Whole-Map Lock Contention\r
 * Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
 */\r
\r
package com.coderaccotax.javatutorial.collections;\r
\r
public class SynchronizedWrapperBottleneckAnalysisDemo {\r
\r
    public static void main(String[] args) {\r
        System.out.println("==========================================================================");\r
        System.out.println(" TOPIC 2: SYNCHRONIZED WRAPPER LOCK CONTENTION BOTTLENECK - BARRACKPORE");\r
        System.out.println("==========================================================================\\n");\r
\r
        System.out.println(">>> THE ARCHITECTURAL DEFECT OF SYNCHRONIZED WRAPPERS (AND Hashtable):");\r
        System.out.println("  - Imagine an office building with 100 rooms, but only 1 master door key!");\r
        System.out.println("  - Even if 50 people want to work in 50 completely different rooms (different buckets):");\r
        System.out.println("  - ONLY ONE PERSON CAN ENTER THE BUILDING AT A TIME!");\r
        System.out.println("  - All other 49 people are blocked in the hallway (WAITING state) wasting CPU power!");\r
        System.out.println();\r
        System.out.println(">>> 3 CRIPPLING BOTTLENECK CHARACTERISTICS:");\r
        System.out.println("  1. Whole-Map Coarse Lock  : A single mutex locks the ENTIRE map object for all operations.");\r
        System.out.println("  2. Read-Blocks-Read Contention: Even when 16 CPU cores only want to READ ('get()'), only 1 thread can read at a time!");\r
        System.out.println("  3. Scalability Collapse   : Adding more CPU cores actually DEGRADES throughput due to thread context switching overhead!");\r
\r
        System.out.println("\\n>>> SOLUTION: ConcurrentHashMap (Fine-Grained Bucket Locks & Lock-Free Reads)");\r
\r
        System.out.println("\\n==========================================================================");\r
    }\r
}`,s=`================================================================================\r
JAVA CORE TUTORIAL - QUICK REVISION GUIDE\r
Module 007_006: Concurrent Collections & ConcurrentHashMap\r
Topic 2: Synchronized Wrapper Bottleneck\r
Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
================================================================================\r
\r
1. LOCK CONTENTION BOTTLENECK:\r
   - Coarse-grained global mutex locks the entire map.\r
   - Multiple threads accessing different buckets block each other.\r
   - Reads block reads; writes block writes.\r
   - Multi-core scalability collapses under high concurrency.\r
   - Obsolete in modern Java → use 'ConcurrentHashMap'.\r
\r
================================================================================\r
Classroom Practice: Barrackpore Academy | Mentor: Sukanta Hui\r
================================================================================`,l=[{question:"Why do 'Hashtable' and 'Collections.synchronizedMap()' fail to scale on modern multi-core server processors?",shortAnswer:"Because they use a single coarse-grained object-level monitor lock (whole-map lock). Every single method ('put', 'get', 'remove', 'containsKey') must acquire this exact same global mutex. Even when multiple threads are reading from or writing to completely different buckets, they block each other sequentially. Adding more CPU cores increases lock contention and context-switching overhead rather than increasing throughput.",explanation:"Core scalability bottleneck that led Doug Lea to design ConcurrentHashMap in JSR-166.",hint:"Uses a single global lock for the entire map; reads block reads and writes block writes across all buckets.",level:"Intermediate",codeExample:"// Inside SynchronizedMap: public V get(Object k) { synchronized(mutex) { return m.get(k); } }"}];function x(){return e.jsxs("div",{className:"space-y-12 px-4 md:px-8 py-8 text-slate-200 bg-slate-900 min-h-screen",children:[e.jsxs("header",{className:"space-y-4 border-b border-slate-800 pb-6",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"px-3 py-1 bg-sky-500/10 text-sky-400 border border-sky-500/20 text-xs font-semibold rounded-full uppercase tracking-wider",children:"Module 007_006 · Topic 2"}),e.jsx("span",{className:"px-3 py-1 bg-rose-500/10 text-rose-400 border border-rose-500/20 text-xs font-semibold rounded-full",children:"Lock Contention Bottleneck"})]}),e.jsx("h1",{className:"text-xl sm:text-2xl md:text-3xl font-bold text-white tracking-tight",children:"Bottleneck of Synchronized Wrappers: Coarse-Grained Whole-Map Lock Contention"}),e.jsx("p",{className:"text-base md:text-lg text-slate-400 leading-relaxed max-w-4xl",children:"Analyze concurrency scalability collapse: understanding why coarse whole-map monitor locks serialize multi-core processors and stall high-throughput enterprise systems."})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsxs("h2",{className:"text-2xl font-bold text-emerald-400 flex items-center gap-2",children:[e.jsx("span",{children:"💻"})," Hands-On Java Demo Code"]}),e.jsx(t,{fileModule:a,title:"SynchronizedWrapperBottleneckAnalysisDemo.java",highlightLines:[7,10,13,14,15,16,20,21,22,25]})]}),e.jsx("section",{className:"space-y-4",children:e.jsx(n,{title:"Lock Contention FAQs",questions:l})}),e.jsx("section",{className:"space-y-4",children:e.jsx(r,{content:s,title:"Module 007_006 Topic 2: Synchronized Wrapper Bottleneck",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Printable Note",downloadFileName:"007_006_topic2_synchronized_wrapper_bottleneck_note.txt"})}),e.jsx(o,{note:"Imagine an AccoTax office where 50 accountants are trying to file taxes, but there is only 1 pen in the whole office! That is Hashtable and SynchronizedMap! ConcurrentHashMap gives every accountant their own separate pen! — Sukanta Hui"})]})}export{x as default};
