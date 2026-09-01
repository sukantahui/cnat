import{j as e}from"./vendor-react-core-Doz9nIC6.js";import{J as r}from"./JavaFileLoader-BfBG3xz_.js";import{F as t}from"./FAQTemplate-BHhlgA96.js";import{P as n}from"./PlainTextPrint-C08xhKA4.js";import{T as s}from"./TeacherSukantaHui-BaJcBHAy.js";import"./JavaCodeBlock-BwsLxS3r.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-8ao-0upJ.js";const o=`/**\r
 * Java Core Tutorial - Module 007_009: Collections Performance & Big-O Complexities\r
 * Topic 5: Garbage Collection Pressure: Node Allocations in LinkedList/TreeMap vs Arrays\r
 * Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
 */\r
\r
package com.coderaccotax.javatutorial.collections;\r
\r
public class GarbageCollectionPressureAnalysisDemo {\r
\r
    public static void main(String[] args) {\r
        System.out.println("==========================================================================");\r
        System.out.println(" TOPIC 5: GARBAGE COLLECTION PRESSURE & HEAP FRAGMENTATION - BARRACKPORE");\r
        System.out.println("==========================================================================\\n");\r
\r
        System.out.println(">>> THE GC HEAP BURDEN OF 1,000,000 ELEMENTS:");\r
        System.out.println("+-------------------+-----------------------+-----------------------+---------------------------+");\r
        System.out.println("| Collection        | Total Heap Objects    | GC Young Gen Pressure | Heap Fragmentation Risk   |");\r
        System.out.println("+-------------------+-----------------------+-----------------------+---------------------------+");\r
        System.out.println("| int[]             | EXACTLY 1 OBJECT!     | ZERO Pressure         | ZERO Fragmentation        |");\r
        System.out.println("| ArrayList<String> | 1 Array + 1M Strings  | Low Pressure          | Very Low (Linear buffer)  |");\r
        System.out.println("| LinkedList<String>| 1M Nodes + 1M Strings | EXTREME (2M Objects!) | HIGH (Scattered nodes)    |");\r
        System.out.println("| TreeMap<K, V>     | 1M Entries + 2M Obj   | EXTREME (3M Objects!) | HIGH (Tree rebalancing)   |");\r
        System.out.println("+-------------------+-----------------------+-----------------------+---------------------------+");\r
\r
        System.out.println("\\n>>> HOW NODE ALLOCATIONS DEGRADE APPLICATION LATENCY (Stop-The-World Pauses):");\r
        System.out.println("  1. Allocation Storm : Inserting 1,000,000 elements into LinkedList calls 'new Node()' 1,000,000 times, filling the Eden generation rapidly.");\r
        System.out.println("  2. GC Mark Phase    : During garbage collection, the GC must traverse and mark 1,000,000 separate object references across memory pages.");\r
        System.out.println("  3. GC Sweep/Compact : Moving 1,000,000 tiny objects during heap compaction takes significantly longer than copying 1 contiguous array buffer.");\r
        System.out.println("  4. Rule of Thumb    : In high-throughput microservices, prefer array-backed collections (ArrayList, ArrayDeque) to keep GC pause times sub-millisecond!");\r
\r
        System.out.println("\\n==========================================================================");\r
    }\r
}`,a=`================================================================================\r
JAVA CORE TUTORIAL - QUICK REVISION GUIDE\r
Module 007_009: Collections Performance & Big-O Complexities\r
Topic 5: GC Pressure: Node Collections vs Arrays\r
Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
================================================================================\r
\r
1. GARBAGE COLLECTION PRESSURE:\r
   - ArrayList: 1 backing array object (low GC pressure).\r
   - LinkedList: 1 million elements = 1 million Node objects!\r
   - High Eden space allocation storm → frequent Minor GCs.\r
   - Long GC tracing and compaction pauses (Stop-The-World).\r
   - Production Rule: Use array-backed structures (ArrayList, ArrayDeque).\r
\r
================================================================================\r
Classroom Practice: Barrackpore Academy | Mentor: Sukanta Hui\r
================================================================================`,i=[{question:"How do node-based collections (like 'LinkedList' and 'TreeMap') create severe Garbage Collection (GC) pressure compared to array-based collections (like 'ArrayList')?",shortAnswer:"For 1,000,000 elements, an array-based collection creates only 1 contiguous backing array object on the heap. In contrast, 'LinkedList' creates 1,000,000 individual 'Node' objects (and TreeMap creates 1,000,000 'Entry' objects). Creating millions of individual objects fills the JVM Eden space rapidly, triggering frequent Minor GC cycles and forcing the garbage collector to trace and relocate millions of distinct memory pointers during Stop-The-World pauses, causing severe latency spikes.",explanation:"Enterprise JVM performance tuning and GC latency optimization.",hint:"Array creates 1 object; LinkedList creates 1,000,000 Node objects, causing high GC marking and compaction pauses.",level:"Advanced",codeExample:"// ArrayList = 1 heap buffer | LinkedList = 1,000,000 Node objects on heap"}];function x(){return e.jsxs("div",{className:"space-y-12 px-4 md:px-8 py-8 text-slate-200 bg-slate-900 min-h-screen",children:[e.jsxs("header",{className:"space-y-4 border-b border-slate-800 pb-6",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"px-3 py-1 bg-sky-500/10 text-sky-400 border border-sky-500/20 text-xs font-semibold rounded-full uppercase tracking-wider",children:"Module 007_009 · Topic 5"}),e.jsx("span",{className:"px-3 py-1 bg-rose-500/10 text-rose-400 border border-rose-500/20 text-xs font-semibold rounded-full",children:"GC Pressure"})]}),e.jsx("h1",{className:"text-xl sm:text-2xl md:text-3xl font-bold text-white tracking-tight",children:"Garbage Collection Pressure: Node-Based Collections vs Contiguous Arrays"}),e.jsxs("p",{className:"text-base md:text-lg text-slate-400 leading-relaxed max-w-4xl",children:["Trace JVM garbage collector latency: analyzing object allocation storms in ",e.jsx("code",{className:"text-rose-300 font-mono",children:"LinkedList"})," and ",e.jsx("code",{className:"text-amber-300 font-mono",children:"TreeMap"})," versus contiguous ",e.jsx("code",{className:"text-emerald-300 font-mono",children:"ArrayList"})," buffers."]})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsxs("h2",{className:"text-2xl font-bold text-emerald-400 flex items-center gap-2",children:[e.jsx("span",{children:"💻"})," Hands-On Java Demo Code"]}),e.jsx(r,{fileModule:o,title:"GarbageCollectionPressureAnalysisDemo.java",highlightLines:[7,10,14,15,16,17,18,22,23,24,25]})]}),e.jsx("section",{className:"space-y-4",children:e.jsx(t,{title:"GC Pressure FAQs",questions:i})}),e.jsx("section",{className:"space-y-4",children:e.jsx(n,{content:a,title:"Module 007_009 Topic 5: GC Pressure Analysis",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Printable Note",downloadFileName:"007_009_topic5_gc_pressure_analysis_note.txt"})}),e.jsx(s,{note:"If you put 1 million items in a LinkedList, you are forcing the Java Garbage Collector to track 1 million separate Node objects across the heap! When GC kicks in, your application will experience long Stop-The-World pauses! Always stick with ArrayList unless you have a proven reason! — Sukanta Hui"})]})}export{x as default};
