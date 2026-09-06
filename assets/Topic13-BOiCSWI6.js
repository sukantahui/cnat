import{j as e}from"./vendor-react-core-Doz9nIC6.js";import{J as r}from"./JavaFileLoader-BfBG3xz_.js";import{F as a}from"./FAQTemplate-BHhlgA96.js";import{P as t}from"./PlainTextPrint-C08xhKA4.js";import{T as n}from"./TeacherSukantaHui-DDN87fI5.js";import"./JavaCodeBlock-BwsLxS3r.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-DEsnU7fn.js";const o=`/**\r
 * Java Core Tutorial - Module 009_007: Parallel Streams & Performance Considerations\r
 * Topic 13: Parallel Stream Benchmarking & Architectural Decision Capstone\r
 * Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
 */\r
\r
package com.coderaccotax.javatutorial.parallel;\r
\r
import java.util.ArrayList;\r
import java.util.List;\r
import java.util.concurrent.ThreadLocalRandom;\r
import java.util.stream.Collectors;\r
\r
public class ParallelBenchmarkingCapstoneDemo {\r
\r
    public static void main(String[] args) {\r
        System.out.println("==========================================================================");\r
        System.out.println(" TOPIC 13: PARALLEL STREAM BENCHMARKING CAPSTONE - BARRACKPORE");\r
        System.out.println("==========================================================================\\n");\r
\r
        int recordCount = 1_000_000;\r
        List<StudentExamRecord> examRecords = new ArrayList<>(recordCount);\r
        for (int i = 0; i < recordCount; i++) {\r
            examRecords.add(new StudentExamRecord(\r
                "Student_" + i, \r
                i % 4 == 0 ? "Barrackpore" : (i % 4 == 1 ? "Naihati" : "Shyamnagar"), \r
                ThreadLocalRandom.current().nextDouble(40.0, 100.0)\r
            ));\r
        }\r
\r
        System.out.println(">>> 1. BENCHMARKING 1,000,000 EXAM ANALYSIS PIPELINES:");\r
\r
        // Benchmark 1: Sequential Stream\r
        long startSeq = System.currentTimeMillis();\r
        double seqAvg = examRecords.stream()\r
            .filter(r -> "Barrackpore".equals(r.center()) && r.score() >= 75.0)\r
            .mapToDouble(StudentExamRecord::score)\r
            .average()\r
            .orElse(0.0);\r
        long seqTime = System.currentTimeMillis() - startSeq;\r
        System.out.println("   - Sequential Duration : " + seqTime + " ms (Average Score: " + String.format("%.2f", seqAvg) + "%)");\r
\r
        // Benchmark 2: Parallel Stream\r
        long startPar = System.currentTimeMillis();\r
        double parAvg = examRecords.parallelStream()\r
            .filter(r -> "Barrackpore".equals(r.center()) && r.score() >= 75.0)\r
            .mapToDouble(StudentExamRecord::score)\r
            .average()\r
            .orElse(0.0);\r
        long parTime = System.currentTimeMillis() - startPar;\r
        System.out.println("   - Parallel Duration   : " + parTime + " ms (Average Score: " + String.format("%.2f", parAvg) + "%)");\r
        System.out.println("   --> Parallel Speedup  : " + String.format("%.2f", (double) seqTime / Math.max(parTime, 1)) + "x faster!");\r
\r
        // Benchmark 3: Order Preservation Cost: forEach() vs forEachOrdered()\r
        System.out.println("\\n>>> 2. ENCOUNTER ORDER SYNCHRONIZATION OVERHEAD:");\r
        List<Integer> sample = List.of(1, 2, 3, 4, 5, 6, 7, 8);\r
        System.out.print("   - forEach() (Unordered, Max Concurrency): ");\r
        sample.parallelStream().forEach(n -> System.out.print(n + " "));\r
        System.out.println();\r
\r
        System.out.print("   - forEachOrdered() (Enforces 1..8 order): ");\r
        sample.parallelStream().forEachOrdered(n -> System.out.print(n + " "));\r
        System.out.println();\r
\r
        System.out.println("\\n==========================================================================");\r
        System.out.println(" MODULE 009_007 COMPLETE: PARALLEL STREAMS & PERFORMANCE MASTERED!");\r
        System.out.println("==========================================================================");\r
    }\r
\r
    record StudentExamRecord(String name, String center, double score) {}\r
}\r
`,s=`================================================================================\r
JAVA CORE TUTORIAL - QUICK REVISION GUIDE\r
Module 009_007: Parallel Streams & Performance Considerations\r
Topic 13: Parallel Stream Benchmarking Capstone\r
Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
================================================================================\r
\r
1. THE PARALLEL STREAM DECISION CHECKLIST:\r
   [ ] Is N * Q > 10,000?\r
   [ ] Is the source data structure easily splittable in O(1) (ArrayList, IntStream)?\r
   [ ] Are operations stateless and free of shared mutable variables?\r
   [ ] Is the pipeline free of blocking I/O (no HTTP, DB, or Sleep calls)?\r
   [ ] Does the operation avoid expensive stateful barriers (sorted, distinct)?\r
\r
2. ORDERING IN PARALLEL STREAMS:\r
   - 'forEach()': Fast, non-deterministic order, zero barrier.\r
   - 'forEachOrdered()': Strict encounter order, introduces thread synchronization barrier.\r
\r
================================================================================\r
Classroom Practice: Barrackpore Academy | Mentor: Sukanta Hui\r
================================================================================\r
`,i=[{question:"What is the key takeaway of the 5-point Parallel Stream checklist before using .parallel() in production?",shortAnswer:"Parallel streams should only be used when N*Q > 10,000, data sources split easily in O(1), operations are pure and stateless, no blocking I/O exists, and actual performance gains are verified via benchmarks.",explanation:"Prevents performance degradation from improper parallelization.",hint:"Large N, splittable source, pure compute, no I/O, verified with benchmarks.",level:"Advanced",codeExample:"if (isLargeArray && isCpuBound && isStateless) { useParallel(); }"},{question:"Why is forEachOrdered() slower than forEach() in parallel streams?",shortAnswer:"Because forEachOrdered() imposes a synchronization barrier where threads must wait and emit elements strictly according to original encounter order, serializing the final iteration step.",explanation:"Eliminates concurrency benefits during iteration.",hint:"Imposes thread synchronization to serialize output in encounter order.",level:"Intermediate",codeExample:"stream.parallel().forEachOrdered(...) // Enforces serialization barrier"}];function x(){return e.jsxs("div",{className:"space-y-12 px-4 md:px-8 py-8 text-slate-200 bg-slate-900 min-h-screen",children:[e.jsxs("header",{className:"space-y-4 border-b border-slate-800 pb-6",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"px-3 py-1 bg-sky-500/10 text-sky-400 border border-sky-500/20 text-xs font-semibold rounded-full uppercase tracking-wider",children:"Module 009_007 · Topic 13"}),e.jsx("span",{className:"px-3 py-1 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-xs font-semibold rounded-full",children:"Parallel Streams & Performance"})]}),e.jsxs("h1",{className:"text-xl sm:text-2xl md:text-3xl font-bold text-white tracking-tight",children:["Parallel Stream Benchmarking & Order Preservation: ",e.jsx("code",{className:"text-emerald-400 font-mono",children:"forEach() vs forEachOrdered()"})," (Capstone)"]}),e.jsx("p",{className:"text-base md:text-lg text-slate-400 leading-relaxed max-w-4xl",children:"Comprehensive multi-core capstone: measuring encounter order preservation costs, benchmarking parallel pipelines, and architectural decision trees."})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsxs("h2",{className:"text-2xl font-bold text-emerald-400 flex items-center gap-2",children:[e.jsx("span",{children:"💻"})," Hands-On Java Demo Code"]}),e.jsx(r,{fileModule:o,title:"ParallelBenchmarkingCapstoneDemo.java",highlightLines:[18,25,34,43,52]})]}),e.jsx("section",{className:"space-y-4",children:e.jsx(a,{title:"Parallel Streams FAQs",questions:i})}),e.jsx("section",{className:"space-y-4",children:e.jsx(t,{content:s,title:"Module 009_007 Topic 13: Parallel Benchmarking Capstone",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Printable Note",downloadFileName:"009_007_topic13_parallel_benchmarking_capstone_note.txt"})}),e.jsx(n,{note:"Congratulations on mastering Parallel Streams & Performance Architecture! Remember Sukanta Hui's Parallel Stream Checklist: 1) Large dataset, 2) ArrayList/IntStream source, 3) Pure CPU math, 4) No shared state, and 5) Measure with JMH or timestamps before deploying to production! — Sukanta Hui"})]})}export{x as default};
