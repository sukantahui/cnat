import{j as e}from"./vendor-react-core-Doz9nIC6.js";import{J as t}from"./JavaFileLoader-BfBG3xz_.js";import{F as n}from"./FAQTemplate-BHhlgA96.js";import{P as r}from"./PlainTextPrint-C08xhKA4.js";import{T as i}from"./TeacherSukantaHui-BaJcBHAy.js";import"./JavaCodeBlock-BwsLxS3r.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-8ao-0upJ.js";const a=`/**\r
 * Java Core Tutorial - Module 007_002: List Implementations & ArrayList Internals\r
 * Topic 9: Comprehensive Head-to-Head Benchmark: ArrayList vs LinkedList (CPU Cache Locality)\r
 * Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
 */\r
\r
package com.coderaccotax.javatutorial.collections;\r
\r
import java.util.ArrayList;\r
import java.util.LinkedList;\r
import java.util.List;\r
\r
public class ArrayListVsLinkedListBenchmarkDemo {\r
\r
    private static final int ITERATIONS = 100_000;\r
\r
    public static void main(String[] args) {\r
        System.out.println("==========================================================================");\r
        System.out.println(" TOPIC 9: HEAD-TO-HEAD BENCHMARK: ArrayList vs LinkedList - BARRACKPORE");\r
        System.out.println("==========================================================================\\n");\r
\r
        List<Integer> arrayList = new ArrayList<>();\r
        List<Integer> linkedList = new LinkedList<>();\r
\r
        // 1. BENCHMARK 1: SEQUENTIAL APPENDS (add()):\r
        long t1 = System.currentTimeMillis();\r
        for (int i = 0; i < ITERATIONS; i++) arrayList.add(i);\r
        long t2 = System.currentTimeMillis();\r
        long alAppendTime = t2 - t1;\r
\r
        long t3 = System.currentTimeMillis();\r
        for (int i = 0; i < ITERATIONS; i++) linkedList.add(i);\r
        long t4 = System.currentTimeMillis();\r
        long llAppendTime = t4 - t3;\r
\r
        System.out.println(">>> 1. 100,000 Sequential Appends:");\r
        System.out.println("  ArrayList  : " + alAppendTime + " ms (Fast contiguous allocation)");\r
        System.out.println("  LinkedList : " + llAppendTime + " ms (100,000 separate Node heap allocations!)");\r
\r
        // 2. BENCHMARK 2: SEQUENTIAL ITERATION (for-each sum):\r
        long t5 = System.currentTimeMillis();\r
        long alSum = 0;\r
        for (int v : arrayList) alSum += v;\r
        long t6 = System.currentTimeMillis();\r
        long alIterTime = t6 - t5;\r
\r
        long t7 = System.currentTimeMillis();\r
        long llSum = 0;\r
        for (int v : linkedList) llSum += v;\r
        long t8 = System.currentTimeMillis();\r
        long llIterTime = t8 - t7;\r
\r
        System.out.println("\\n>>> 2. 100,000 Sequential Iteration / Traversal:");\r
        System.out.println("  ArrayList  : " + alIterTime + " ms (CPU L1/L2 Cache Prefetching Hits!)");\r
        System.out.println("  LinkedList : " + llIterTime + " ms (Pointer Chasing & CPU Cache Misses!)");\r
\r
        System.out.println("\\n>>> THE HARDWARE REALITY: CPU CACHE LINES (64 Bytes):");\r
        System.out.println("  - Modern CPUs load memory in 64-byte Cache Lines.");\r
        System.out.println("  - ArrayList is contiguous; loading one element loads the next 8-16 elements into CPU cache for free!");\r
        System.out.println("  - LinkedList nodes are scattered randomly across heap memory, forcing a cold RAM fetch on every node!");\r
\r
        System.out.println("\\n==========================================================================");\r
    }\r
}`,s=`================================================================================\r
JAVA CORE TUTORIAL - QUICK REVISION GUIDE\r
Module 007_002: List Implementations & ArrayList Internals\r
Topic 9: ArrayList vs LinkedList Benchmark\r
Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
================================================================================\r
\r
1. BENCHMARK COMPARISON:\r
   - Appends: ArrayList 3x-5x faster (no Node allocations).\r
   - Iteration: ArrayList 5x-10x faster (CPU Cache Lines).\r
   - Random Access: ArrayList O(1) vs LinkedList O(n).\r
   - Memory Overhead: ArrayList 4 bytes vs LinkedList 24-32 bytes.\r
\r
================================================================================\r
Classroom Practice: Barrackpore Academy | Mentor: Sukanta Hui\r
================================================================================`,o=[{question:"Why does 'ArrayList' iterate significantly faster than 'LinkedList' on modern CPU hardware even though both are O(n) mathematically?",shortAnswer:"Due to 'CPU Spatial Locality and Hardware Prefetching'. ArrayList stores references in a contiguous memory array. When the CPU fetches an element, its hardware prefetcher loads an entire 64-byte cache line into high-speed L1/L2 CPU cache, executing subsequent reads instantly. In contrast, LinkedList nodes are scattered randomly across the JVM heap, causing frequent CPU cache misses and forcing expensive main RAM stalls (Pointer Chasing).",explanation:"Foundational computer architecture insight applied to Java data structures.",hint:"Contiguous array elements benefit from CPU L1/L2 cache prefetching; LinkedList nodes cause cache misses.",level:"Advanced",codeExample:"for (int x : arrayList) { ... } // 10x faster due to CPU cache line prefetching"}];function y(){return e.jsxs("div",{className:"space-y-12 px-4 md:px-8 py-8 text-slate-200 bg-slate-900 min-h-screen",children:[e.jsxs("header",{className:"space-y-4 border-b border-slate-800 pb-6",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"px-3 py-1 bg-sky-500/10 text-sky-400 border border-sky-500/20 text-xs font-semibold rounded-full uppercase tracking-wider",children:"Module 007_002 · Topic 9"}),e.jsx("span",{className:"px-3 py-1 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-xs font-semibold rounded-full",children:"Hardware Benchmark"})]}),e.jsxs("h1",{className:"text-xl sm:text-2xl md:text-3xl font-bold text-white tracking-tight",children:["Comprehensive Benchmark: ",e.jsx("code",{className:"text-emerald-400 font-mono",children:"ArrayList"})," vs ",e.jsx("code",{className:"text-purple-400 font-mono",children:"LinkedList"})," & CPU Cache Locality"]}),e.jsx("p",{className:"text-base md:text-lg text-slate-400 leading-relaxed max-w-4xl",children:"Execute real-world performance benchmarks: discovering how CPU spatial locality and 64-byte cache line prefetching give contiguous ArrayLists a decisive advantage over pointer-chasing LinkedLists."})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsxs("h2",{className:"text-2xl font-bold text-emerald-400 flex items-center gap-2",children:[e.jsx("span",{children:"💻"})," Hands-On Java Demo Code"]}),e.jsx(t,{fileModule:a,title:"ArrayListVsLinkedListBenchmarkDemo.java",highlightLines:[7,10,18,19,23,24,33,34,39,40]})]}),e.jsx("section",{className:"space-y-4",children:e.jsx(n,{title:"Benchmark FAQs",questions:o})}),e.jsx("section",{className:"space-y-4",children:e.jsx(r,{content:s,title:"Module 007_002 Topic 9: Benchmark & CPU Cache Locality",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Printable Note",downloadFileName:"007_002_topic9_arraylist_vs_linkedlist_benchmark_note.txt"})}),e.jsx(i,{note:"In university textbooks, people teach that LinkedList is better for insertions. But on modern CPUs, ArrayList wins almost 100% of the time because hardware loves contiguous memory and CPU cache lines! — Sukanta Hui"})]})}export{y as default};
