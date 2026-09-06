import{j as e}from"./vendor-react-core-Doz9nIC6.js";import{J as t}from"./JavaFileLoader-BfBG3xz_.js";import{F as r}from"./FAQTemplate-BHhlgA96.js";import{P as a}from"./PlainTextPrint-C08xhKA4.js";import{T as n}from"./TeacherSukantaHui-DDN87fI5.js";import"./JavaCodeBlock-BwsLxS3r.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-DEsnU7fn.js";const s=`/**\r
 * Java Core Tutorial - Module 009_007: Parallel Streams & Performance Considerations\r
 * Topic 7: When Parallel Streams Fail & Hurt Performance - The 5 Anti-Patterns\r
 * Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
 */\r
\r
package com.coderaccotax.javatutorial.parallel;\r
\r
import java.util.LinkedList;\r
import java.util.List;\r
import java.util.stream.Stream;\r
\r
public class ParallelStreamAntiPatternsDemo {\r
\r
    public static void main(String[] args) {\r
        System.out.println("==========================================================================");\r
        System.out.println(" TOPIC 7: PARALLEL STREAM ANTI-PATTERNS - BARRACKPORE ACADEMY");\r
        System.out.println("==========================================================================\\n");\r
\r
        System.out.println(">>> THE 5 MAJOR PARALLEL STREAM PERFORMANCE KILLERS:");\r
        System.out.println("  1. Poor Data Splitting (e.g. LinkedList, Stream.iterate)");\r
        System.out.println("  2. Object Boxing & Unboxing Overhead (Stream<Integer> vs IntStream)");\r
        System.out.println("  3. Blocking I/O & Thread Starvation in commonPool");\r
        System.out.println("  4. Small Dataset Overhead (Splitting cost > compute cost)");\r
        System.out.println("  5. Shared Mutable State & Lock Contention (AtomicLong, synchronized)\\n");\r
\r
        // Demonstration: Stream.iterate without bound splits TERRIBLY in parallel!\r
        System.out.println(">>> Anti-Pattern Demo: Stream.iterate() in parallel:");\r
        long startSeq = System.currentTimeMillis();\r
        long seqSum = Stream.iterate(1L, n -> n + 1).limit(1_000_000).reduce(0L, Long::sum);\r
        long seqTime = System.currentTimeMillis() - startSeq;\r
\r
        long startPar = System.currentTimeMillis();\r
        long parSum = Stream.iterate(1L, n -> n + 1).parallel().limit(1_000_000).reduce(0L, Long::sum);\r
        long parTime = System.currentTimeMillis() - startPar;\r
\r
        System.out.println("  - Stream.iterate SEQUENTIAL : " + seqTime + " ms");\r
        System.out.println("  - Stream.iterate PARALLEL   : " + parTime + " ms (DRAMATICALLY SLOWER due to sequential dependency!)");\r
\r
        System.out.println("\\n==========================================================================");\r
    }\r
}\r
`,l=`================================================================================\r
JAVA CORE TUTORIAL - QUICK REVISION GUIDE\r
Module 009_007: Parallel Streams & Performance Considerations\r
Topic 7: Parallel Stream Anti-Patterns\r
Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
================================================================================\r
\r
1. THE 5 PARALLEL PERFORMANCE ANTI-PATTERNS:\r
   1. POOR SPLITTERS:\r
      - 'LinkedList', 'Stream.iterate()', 'BufferedReader.lines()'.\r
      - Cannot be split into equal chunks without scanning nodes.\r
   2. BOXING OVERHEAD:\r
      - 'Stream<Integer>' forces millions of heap allocations, cache misses, and GC pressure.\r
   3. BLOCKING I/O:\r
      - Stalls ForkJoinPool worker threads, causing CPU underutilization.\r
   4. TRIVIAL N:\r
      - Small collections (N < 1,000) waste more time on thread orchestration than compute.\r
   5. LOCK CONTENTION / STATEFUL BARRIERS:\r
      - Using 'AtomicInteger', 'ConcurrentHashMap', or 'sorted()' / 'distinct()' in parallel.\r
\r
================================================================================\r
Classroom Practice: Barrackpore Academy | Mentor: Sukanta Hui\r
================================================================================\r
`,i=[{question:"Why does Stream.iterate(1, n → n + 1).parallel() perform so poorly?",shortAnswer:"Because Stream.iterate computes each element sequentially based on the previous element (f(prev)), making it impossible to know where to split the sequence in advance without computing earlier elements first.",explanation:"Use LongStream.rangeClosed(1, N).parallel() instead, which splits instantly in O(1).",hint:"Each element depends on the previous one, preventing O(1) splitting.",level:"Intermediate",codeExample:"// BAD:\\nStream.iterate(1, n → n + 1).parallel()\\n// GOOD:\\nIntStream.rangeClosed(1, 1_000_000).parallel()"},{question:"How does excessive boxing/unboxing impact parallel stream performance?",shortAnswer:"Boxing creates millions of heap objects that cause CPU cache thrashing, pointer chasing, and garbage collection pauses, which often completely negates multi-core parallel gains.",explanation:"Always use primitive streams (IntStream, LongStream, DoubleStream) for numeric workloads.",hint:"Causes CPU cache misses and high garbage collection overhead.",level:"Intermediate",codeExample:"Stream<Integer> vs IntStream"}];function x(){return e.jsxs("div",{className:"space-y-12 px-4 md:px-8 py-8 text-slate-200 bg-slate-900 min-h-screen",children:[e.jsxs("header",{className:"space-y-4 border-b border-slate-800 pb-6",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"px-3 py-1 bg-sky-500/10 text-sky-400 border border-sky-500/20 text-xs font-semibold rounded-full uppercase tracking-wider",children:"Module 009_007 · Topic 7"}),e.jsx("span",{className:"px-3 py-1 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-xs font-semibold rounded-full",children:"Parallel Streams & Performance"})]}),e.jsxs("h1",{className:"text-xl sm:text-2xl md:text-3xl font-bold text-white tracking-tight",children:["When Parallel Streams ",e.jsx("code",{className:"text-emerald-400 font-mono",children:"FAIL & Hurt Performance"}),": The 5 Anti-Patterns"]}),e.jsx("p",{className:"text-base md:text-lg text-slate-400 leading-relaxed max-w-4xl",children:"Diagnosing parallel bottlenecks: identifying the 5 major anti-patterns that make parallel streams drastically slower than sequential loops."})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsxs("h2",{className:"text-2xl font-bold text-emerald-400 flex items-center gap-2",children:[e.jsx("span",{children:"💻"})," Hands-On Java Demo Code"]}),e.jsx(t,{fileModule:s,title:"ParallelStreamAntiPatternsDemo.java",highlightLines:[18,25,34,43]})]}),e.jsx("section",{className:"space-y-4",children:e.jsx(r,{title:"Parallel Streams FAQs",questions:i})}),e.jsx("section",{className:"space-y-4",children:e.jsx(a,{content:l,title:"Module 009_007 Topic 7: Parallel Stream Anti-Patterns",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Printable Note",downloadFileName:"009_007_topic7_parallel_stream_anti_patterns_note.txt"})}),e.jsx(n,{note:"Never assume parallel is always faster! Parallel streams with LinkedList, boxing, or shared locks are often 5x to 10x SLOWER than simple for-loops! Always benchmark before putting .parallel() in production! — Sukanta Hui"})]})}export{x as default};
