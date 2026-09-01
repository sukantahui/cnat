import{j as e}from"./vendor-react-core-Doz9nIC6.js";import{J as r}from"./JavaFileLoader-BfBG3xz_.js";import{F as t}from"./FAQTemplate-BHhlgA96.js";import{P as a}from"./PlainTextPrint-C08xhKA4.js";import{T as n}from"./TeacherSukantaHui-CEPuAfsb.js";import"./JavaCodeBlock-BwsLxS3r.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-DGCamHnX.js";const o=`/**\r
 * Java Core Tutorial - Module 009_007: Parallel Streams & Performance Considerations\r
 * Topic 9: The Boxing Penalty - Stream<Integer> vs IntStream in Multi-Core Processing\r
 * Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
 */\r
\r
package com.coderaccotax.javatutorial.parallel;\r
\r
import java.util.List;\r
import java.util.stream.IntStream;\r
import java.util.stream.Stream;\r
\r
public class BoxingPenaltyParallelDemo {\r
\r
    public static void main(String[] args) {\r
        System.out.println("==========================================================================");\r
        System.out.println(" TOPIC 9: THE BOXING PENALTY IN PARALLEL STREAMS - BARRACKPORE");\r
        System.out.println("==========================================================================\\n");\r
\r
        int size = 5_000_000;\r
        System.out.println(">>> BENCHMARKING 5,000,000 NUMERIC SUMMATIONS (PARALLEL):");\r
\r
        // 1. Primitive IntStream (Zero boxing, dense contiguous memory)\r
        long start = System.currentTimeMillis();\r
        long primitiveSum = IntStream.rangeClosed(1, size)\r
            .parallel()\r
            .mapToLong(x -> x)\r
            .sum();\r
        long primitiveTime = System.currentTimeMillis() - start;\r
        System.out.println("1. IntStream.rangeClosed() Parallel Time : " + primitiveTime + " ms (Sum: " + primitiveSum + ")");\r
\r
        // 2. Boxed Stream<Integer> (Millions of Heap Allocations & Pointer Dereferences)\r
        start = System.currentTimeMillis();\r
        long boxedSum = Stream.iterate(1, n -> n <= size, n -> n + 1)\r
            .parallel()\r
            .mapToLong(Integer::longValue)\r
            .sum();\r
        long boxedTime = System.currentTimeMillis() - start;\r
        System.out.println("2. Boxed Stream<Integer> Parallel Time   : " + boxedTime + " ms (Sum: " + boxedSum + ")");\r
\r
        System.out.println("\\n>>> LESSON:");\r
        System.out.println("  - Boxing introduces massive pointer-chasing and cache invalidation overhead across CPU cores!");\r
        System.out.println("==========================================================================");\r
    }\r
}\r
`,s=`================================================================================\r
JAVA CORE TUTORIAL - QUICK REVISION GUIDE\r
Module 009_007: Parallel Streams & Performance Considerations\r
Topic 9: The Boxing Penalty in Parallel Streams\r
Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
================================================================================\r
\r
1. WHY BOXING HURTS MULTI-CORE PERFORMANCE:\r
   - Cache Misses: Primitive arrays store contiguous values in high-speed CPU L1/L2/L3 cache.\r
     Boxed objects store 64-bit pointers to scattered heap locations (pointer chasing).\r
   - GC Pressure: Millions of temporary wrapper objects trigger GC pauses that stall worker threads.\r
   - Synchronization / Memory Bandwidth: Multiple CPU cores saturate the memory bus fetching scattered heap objects.\r
\r
================================================================================\r
Classroom Practice: Barrackpore Academy | Mentor: Sukanta Hui\r
================================================================================\r
`,i=[{question:"Why does auto-boxing degrade parallel stream performance more severely than sequential loops?",shortAnswer:"In parallel execution, multiple CPU cores concurrently dereference scattered heap pointers, causing extreme L1/L2 cache misses and saturating the hardware memory bus.",explanation:"Hardware memory bandwidth becomes the primary bottleneck rather than CPU calculation capacity.",hint:"Multiple CPU cores saturate memory bandwidth and trash CPU caches.",level:"Advanced",codeExample:"Stream<Integer> vs IntStream"},{question:"How can you eliminate boxing in a Stream pipeline that starts with objects but calculates numbers?",shortAnswer:"By using mapToInt(), mapToLong(), or mapToDouble() to immediately transition the pipeline into a specialized primitive stream.",explanation:"Transfers execution to unboxed primitive operations.",hint:"Use mapToInt(), mapToLong(), or mapToDouble().",level:"Beginner",codeExample:"students.parallelStream().mapToDouble(Student::getScore).sum();"}];function h(){return e.jsxs("div",{className:"space-y-12 px-4 md:px-8 py-8 text-slate-200 bg-slate-900 min-h-screen",children:[e.jsxs("header",{className:"space-y-4 border-b border-slate-800 pb-6",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"px-3 py-1 bg-sky-500/10 text-sky-400 border border-sky-500/20 text-xs font-semibold rounded-full uppercase tracking-wider",children:"Module 009_007 · Topic 9"}),e.jsx("span",{className:"px-3 py-1 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-xs font-semibold rounded-full",children:"Parallel Streams & Performance"})]}),e.jsxs("h1",{className:"text-xl sm:text-2xl md:text-3xl font-bold text-white tracking-tight",children:["The Boxing Penalty: ",e.jsx("code",{className:"text-emerald-400 font-mono",children:"Stream<Integer> vs IntStream"})," in Multi-Core Processing"]}),e.jsx("p",{className:"text-base md:text-lg text-slate-400 leading-relaxed max-w-4xl",children:"Measuring memory bandwidth bottlenecks: cache misses, pointer chasing, and garbage collection pressure caused by wrapper objects."})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsxs("h2",{className:"text-2xl font-bold text-emerald-400 flex items-center gap-2",children:[e.jsx("span",{children:"💻"})," Hands-On Java Demo Code"]}),e.jsx(r,{fileModule:o,title:"BoxingPenaltyParallelDemo.java",highlightLines:[18,25,34,43]})]}),e.jsx("section",{className:"space-y-4",children:e.jsx(t,{title:"Parallel Streams FAQs",questions:i})}),e.jsx("section",{className:"space-y-4",children:e.jsx(a,{content:s,title:"Module 009_007 Topic 9: The Boxing Penalty in Parallel",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Printable Note",downloadFileName:"009_007_topic9_boxing_penalty_parallel_note.txt"})}),e.jsx(n,{note:"When you use Stream<Integer> in parallel, millions of wrapper objects are dereferenced, destroying CPU L1/L2 cache locality! Always use IntStream or LongStream for multi-core numeric computing! — Sukanta Hui"})]})}export{h as default};
