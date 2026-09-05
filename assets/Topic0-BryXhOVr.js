import{j as e}from"./vendor-react-core-Doz9nIC6.js";import{J as r}from"./JavaFileLoader-BfBG3xz_.js";import{F as t}from"./FAQTemplate-BHhlgA96.js";import{P as a}from"./PlainTextPrint-C08xhKA4.js";import{T as o}from"./TeacherSukantaHui-DerPxfxp.js";import"./JavaCodeBlock-BwsLxS3r.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-CH1iX9C8.js";const n=`/**\r
 * Java Core Tutorial - Module 009_007: Parallel Streams & Performance Considerations\r
 * Topic 0: What are Parallel Streams? Multi-Core ForkJoin Processing\r
 * Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
 */\r
\r
package com.coderaccotax.javatutorial.parallel;\r
\r
import java.util.List;\r
\r
public class WhatAreParallelStreamsDemo {\r
\r
    public static void main(String[] args) {\r
        System.out.println("==========================================================================");\r
        System.out.println(" TOPIC 0: WHAT ARE PARALLEL STREAMS? - BARRACKPORE ACADEMY");\r
        System.out.println("==========================================================================\\n");\r
\r
        List<String> studentRoster = List.of(\r
            "Swadeep Paul", "Tuhina Das", "Abhronila Das", "Debangshu Mukherjee",\r
            "Priya Sharma", "Anish Dey", "Rahul Roy", "Sneha Sen"\r
        );\r
\r
        // 1. Sequential Stream: Executed by the main thread exclusively\r
        System.out.println(">>> 1. Sequential Stream Execution (Single Thread):");\r
        studentRoster.stream()\r
            .forEach(name -> System.out.println("   [Thread: " + Thread.currentThread().getName() + "] Processing: " + name));\r
\r
        // 2. Parallel Stream: Automatically distributed across CPU cores\r
        System.out.println("\\n>>> 2. Parallel Stream Execution (Multi-Threaded ForkJoinPool):");\r
        studentRoster.parallelStream()\r
            .forEach(name -> System.out.println("   [Thread: " + Thread.currentThread().getName() + "] Processing: " + name));\r
\r
        System.out.println("\\n>>> HOW PARALLEL STREAMS WORK UNDER THE HOOD:");\r
        System.out.println("  1. Splitting: Source Spliterator recursively divides dataset into halves.");\r
        System.out.println("  2. Forking: Each chunk is submitted as a task to ForkJoinPool.commonPool().");\r
        System.out.println("  3. Joining: Partial results are combined recursively using combiner functions.");\r
        System.out.println("==========================================================================");\r
    }\r
}\r
`,l=`================================================================================\r
JAVA CORE TUTORIAL - QUICK REVISION GUIDE\r
Module 009_007: Parallel Streams & Performance Considerations\r
Topic 0: What are Parallel Streams\r
Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
================================================================================\r
\r
1. WHAT IS A PARALLEL STREAM:\r
   - A stream that executes pipeline operations concurrently across multiple CPU threads.\r
   - Divides the stream into multiple substreams using 'java.util.Spliterator'.\r
   - Executes substreams on worker threads managed by 'ForkJoinPool.commonPool()'.\r
\r
2. RECURSIVE DIVIDE-AND-CONQUER:\r
   - Step 1: Split (Spliterator.trySplit()).\r
   - Step 2: Compute in parallel (Worker threads in CommonPool).\r
   - Step 3: Combine / Join (Collector.combiner() or reduce combiner).\r
\r
================================================================================\r
Classroom Practice: Barrackpore Academy | Mentor: Sukanta Hui\r
================================================================================\r
`,s=[{question:"What underlying thread pool executes parallel stream operations in Java?",shortAnswer:"The global, JVM-wide java.util.concurrent.ForkJoinPool.commonPool(), which is shared across all parallel streams and CompletableFutures in the application.",explanation:"By default, the common pool size equals the number of available CPU cores minus one.",hint:"ForkJoinPool.commonPool()",level:"Beginner",codeExample:"ForkJoinPool pool = ForkJoinPool.commonPool();"},{question:"How does a parallel stream divide its data source across worker threads?",shortAnswer:"It uses the source's Spliterator.trySplit() method to recursively partition the data into two halves until the chunks reach a threshold suitable for individual worker threads.",explanation:"Array-backed collections split with O(1) efficiency, while linked structures split poorly with O(N) cost.",hint:"Recursively partitions data using Spliterator.trySplit().",level:"Intermediate",codeExample:"Spliterator<T> split = spliterator.trySplit();"}];function x(){return e.jsxs("div",{className:"space-y-12 px-4 md:px-8 py-8 text-slate-200 bg-slate-900 min-h-screen",children:[e.jsxs("header",{className:"space-y-4 border-b border-slate-800 pb-6",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"px-3 py-1 bg-sky-500/10 text-sky-400 border border-sky-500/20 text-xs font-semibold rounded-full uppercase tracking-wider",children:"Module 009_007 · Topic 0"}),e.jsx("span",{className:"px-3 py-1 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-xs font-semibold rounded-full",children:"Parallel Streams & Performance"})]}),e.jsxs("h1",{className:"text-xl sm:text-2xl md:text-3xl font-bold text-white tracking-tight",children:["What are ",e.jsx("code",{className:"text-emerald-400 font-mono",children:"Parallel Streams"}),"? Multi-Core Data Splitting"]}),e.jsx("p",{className:"text-base md:text-lg text-slate-400 leading-relaxed max-w-4xl",children:"Harnessing all CPU cores with one method call: automatic divide-and-conquer recursive splitting via Spliterator across ForkJoinPool worker threads."})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsxs("h2",{className:"text-2xl font-bold text-emerald-400 flex items-center gap-2",children:[e.jsx("span",{children:"💻"})," Hands-On Java Demo Code"]}),e.jsx(r,{fileModule:n,title:"WhatAreParallelStreamsDemo.java",highlightLines:[18,25,34,43]})]}),e.jsx("section",{className:"space-y-4",children:e.jsx(t,{title:"Parallel Streams FAQs",questions:s})}),e.jsx("section",{className:"space-y-4",children:e.jsx(a,{content:l,title:"Module 009_007 Topic 0: What are Parallel Streams",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Printable Note",downloadFileName:"009_007_topic0_what_are_parallel_streams_note.txt"})}),e.jsx(o,{note:"Turning a sequential stream into a multi-core powerhouse is as easy as typing .parallel()! But remember: with great power comes great responsibility — parallelism is NOT free! — Sukanta Hui"})]})}export{x as default};
