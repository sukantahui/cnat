import{j as e}from"./vendor-react-core-Doz9nIC6.js";import{J as t}from"./JavaFileLoader-BfBG3xz_.js";import{F as a}from"./FAQTemplate-BHhlgA96.js";import{P as n}from"./PlainTextPrint-C08xhKA4.js";import{T as r}from"./TeacherSukantaHui-DDN87fI5.js";import"./JavaCodeBlock-BwsLxS3r.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-DEsnU7fn.js";const s=`/**\r
 * Java Core Tutorial - Module 009_007: Parallel Streams & Performance Considerations\r
 * Topic 11: Small Datasets Overhead - When Sequential Beats Parallel\r
 * Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
 */\r
\r
package com.coderaccotax.javatutorial.parallel;\r
\r
import java.util.List;\r
import java.util.stream.IntStream;\r
\r
public class SmallDatasetsOverheadDemo {\r
\r
    public static void main(String[] args) {\r
        System.out.println("==========================================================================");\r
        System.out.println(" TOPIC 11: SMALL DATASETS OVERHEAD - BARRACKPORE ACADEMY");\r
        System.out.println("==========================================================================\\n");\r
\r
        List<String> studentList = List.of(\r
            "Swadeep Paul", "Tuhina Das", "Abhronila Das", "Debangshu Mukherjee", "Priya Sharma"\r
        );\r
\r
        System.out.println(">>> 1. Processing Tiny List (5 elements):");\r
        // Sequential: Direct main thread execution, 0 coordination overhead\r
        long start = System.nanoTime();\r
        List<String> seqResult = studentList.stream().map(String::toUpperCase).toList();\r
        long seqDuration = System.nanoTime() - start;\r
        System.out.println("   - Sequential Duration: " + seqDuration + " nanoseconds");\r
\r
        // Parallel: Spliterator trySplit, task submission, ForkJoin coordination, combiner\r
        start = System.nanoTime();\r
        List<String> parResult = studentList.parallelStream().map(String::toUpperCase).toList();\r
        long parDuration = System.nanoTime() - start;\r
        System.out.println("   - Parallel Duration  : " + parDuration + " nanoseconds");\r
\r
        System.out.println("\\n>>> BENCHMARK RESULT:");\r
        System.out.println("   Sequential was significantly faster because N = 5 has near-zero compute work!");\r
        System.out.println("   Thread orchestration overhead completely eclipsed the actual work.");\r
        System.out.println("==========================================================================");\r
    }\r
}\r
`,o=`================================================================================\r
JAVA CORE TUTORIAL - QUICK REVISION GUIDE\r
Module 009_007: Parallel Streams & Performance Considerations\r
Topic 11: Small Datasets Overhead\r
Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
================================================================================\r
\r
1. WHY SMALL DATASETS SUFFER IN PARALLEL:\r
   - Fixed Overhead Costs of Parallelism:\r
     1. Spliterator 'trySplit()' execution and boundary calculations.\r
     2. Instantiating 'ForkJoinTask' objects on the heap.\r
     3. Inserting tasks into worker thread deques.\r
     4. OS thread context switching and cache invalidation.\r
     5. Merging sub-results via the combiner function.\r
\r
2. THRESHOLD RECOMMENDATION:\r
   - For simple operations (filter, map), do NOT parallelize unless N > 10,000 elements.\r
   - For CPU-heavy math (cryptography, physics calculations), parallelism is profitable at lower N (e.g. N > 100).\r
\r
================================================================================\r
Classroom Practice: Barrackpore Academy | Mentor: Sukanta Hui\r
================================================================================\r
`,i=[{question:"Why does running a parallel stream on a List of 20 elements run slower than a standard for-loop?",shortAnswer:"Because the time required for ForkJoinPool task creation, queue management, thread synchronization, and combining results is far greater than the negligible fraction of a microsecond needed to iterate 20 items sequentially.",explanation:"Parallel coordination introduces a baseline overhead cost.",hint:"Thread management and synchronization overhead dominates computation time.",level:"Beginner",codeExample:"List.of(1..20).parallelStream() // Overkill and slower than sequential loop"},{question:"What is the recommended heuristic for determining if a collection is large enough for parallel streams?",shortAnswer:"Use Brian Goetz's NQ model: if the product of element count N and CPU operations per element Q exceeds 10,000, parallelization is likely beneficial.",explanation:"Simple arithmetic operations require larger N to justify parallelization.",hint:"N * Q > 10,000",level:"Intermediate",codeExample:"int N = list.size(); int Q = workPerElement; boolean useParallel = (N * Q) > 10000;"}];function S(){return e.jsxs("div",{className:"space-y-12 px-4 md:px-8 py-8 text-slate-200 bg-slate-900 min-h-screen",children:[e.jsxs("header",{className:"space-y-4 border-b border-slate-800 pb-6",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"px-3 py-1 bg-sky-500/10 text-sky-400 border border-sky-500/20 text-xs font-semibold rounded-full uppercase tracking-wider",children:"Module 009_007 · Topic 11"}),e.jsx("span",{className:"px-3 py-1 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-xs font-semibold rounded-full",children:"Parallel Streams & Performance"})]}),e.jsxs("h1",{className:"text-xl sm:text-2xl md:text-3xl font-bold text-white tracking-tight",children:["Small Datasets Overhead: ",e.jsx("code",{className:"text-emerald-400 font-mono",children:"Why Parallelization Slows Down Small Collections"})]}),e.jsx("p",{className:"text-base md:text-lg text-slate-400 leading-relaxed max-w-4xl",children:"Measuring thread orchestration costs: why dataset splitting, context switching, and result merging outweigh sequential compute time on small inputs."})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsxs("h2",{className:"text-2xl font-bold text-emerald-400 flex items-center gap-2",children:[e.jsx("span",{children:"💻"})," Hands-On Java Demo Code"]}),e.jsx(t,{fileModule:s,title:"SmallDatasetsOverheadDemo.java",highlightLines:[18,25,34,43]})]}),e.jsx("section",{className:"space-y-4",children:e.jsx(a,{title:"Parallel Streams FAQs",questions:i})}),e.jsx("section",{className:"space-y-4",children:e.jsx(n,{content:o,title:"Module 009_007 Topic 11: Small Datasets Overhead",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Printable Note",downloadFileName:"009_007_topic11_small_datasets_overhead_note.txt"})}),e.jsx(r,{note:"Parallelism is not magic pixie dust! If you only have 50 or 100 elements, creating ForkJoin tasks and merging them takes 10 times longer than just running a simple sequential for-loop! — Sukanta Hui"})]})}export{S as default};
