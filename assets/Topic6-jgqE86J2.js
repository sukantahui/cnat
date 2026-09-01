import{j as e}from"./vendor-react-core-Doz9nIC6.js";import{J as r}from"./JavaFileLoader-BfBG3xz_.js";import{F as t}from"./FAQTemplate-BHhlgA96.js";import{P as a}from"./PlainTextPrint-C08xhKA4.js";import{T as n}from"./TeacherSukantaHui-BaJcBHAy.js";import"./JavaCodeBlock-BwsLxS3r.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-8ao-0upJ.js";const s=`/**\r
 * Java Core Tutorial - Module 009_007: Parallel Streams & Performance Considerations\r
 * Topic 6: When Parallel Streams Excel - Optimal Performance Criteria\r
 * Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
 */\r
\r
package com.coderaccotax.javatutorial.parallel;\r
\r
import java.util.ArrayList;\r
import java.util.List;\r
import java.util.concurrent.ThreadLocalRandom;\r
\r
public class WhenParallelStreamsExcelDemo {\r
\r
    public static void main(String[] args) {\r
        System.out.println("==========================================================================");\r
        System.out.println(" TOPIC 6: WHEN PARALLEL STREAMS EXCEL - BARRACKPORE ACADEMY");\r
        System.out.println("==========================================================================\\n");\r
\r
        int dataSize = 2_000_000;\r
        List<Double> transactionAmounts = new ArrayList<>(dataSize);\r
        for (int i = 0; i < dataSize; i++) {\r
            transactionAmounts.add(ThreadLocalRandom.current().nextDouble(100.0, 50_000.0));\r
        }\r
\r
        System.out.println(">>> BENCHMARKING 2,000,000 TAX CALCULATIONS (ArrayList source):");\r
\r
        // 1. Sequential Calculation\r
        long startSeq = System.currentTimeMillis();\r
        double seqTotalTax = transactionAmounts.stream()\r
            .mapToDouble(amt -> calculateGstTax(amt))\r
            .sum();\r
        long seqDuration = System.currentTimeMillis() - startSeq;\r
        System.out.println("  1. Sequential Duration: " + seqDuration + " ms (Total: ₹" + String.format("%.2f", seqTotalTax) + ")");\r
\r
        // 2. Parallel Calculation\r
        long startPar = System.currentTimeMillis();\r
        double parTotalTax = transactionAmounts.parallelStream()\r
            .mapToDouble(amt -> calculateGstTax(amt))\r
            .sum();\r
        long parDuration = System.currentTimeMillis() - startPar;\r
        System.out.println("  2. Parallel Duration  : " + parDuration + " ms (Total: ₹" + String.format("%.2f", parTotalTax) + ")");\r
\r
        double speedup = (double) seqDuration / Math.max(parDuration, 1);\r
        System.out.println("  --> Multi-Core Speedup Factor: " + String.format("%.2f", speedup) + "x faster!");\r
\r
        System.out.println("\\n==========================================================================");\r
    }\r
\r
    static double calculateGstTax(double amount) {\r
        // Simulating moderate CPU-bound financial calculations\r
        double tax = amount * 0.18;\r
        for (int i = 0; i < 50; i++) {\r
            tax = Math.sqrt(tax * tax + 1.0);\r
        }\r
        return tax;\r
    }\r
}\r
`,i=`================================================================================\r
JAVA CORE TUTORIAL - QUICK REVISION GUIDE\r
Module 009_007: Parallel Streams & Performance Considerations\r
Topic 6: When Parallel Streams Excel\r
Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
================================================================================\r
\r
1. THE THREE PILLARS OF PARALLEL STREAM EXCELLENCE:\r
   A. SOURCE SPLITABILITY:\r
      - Best: 'ArrayList', 'int[]', 'IntStream.rangeClosed()', 'HashSet'.\r
      - Spliterators can partition these in O(1) time with zero memory copy.\r
\r
   B. HIGH COMPUTATIONAL DENSITY (High Q):\r
      - Math, cryptography, image processing, complex filtering, regex parsing.\r
\r
   C. PURE FUNCTIONAL STATE (Zero Contention):\r
      - No 'synchronized' blocks, no Atomic variables, no shared mutable collections.\r
\r
================================================================================\r
Classroom Practice: Barrackpore Academy | Mentor: Sukanta Hui\r
================================================================================\r
`,l=[{question:"Why does ArrayList split much better in parallel streams than LinkedList?",shortAnswer:"ArrayList is backed by an indexed array where Spliterator.trySplit() computes mid = (start + end)/2 in O(1) time. LinkedList requires traversing N/2 node pointers sequentially just to find the split midpoint.",explanation:"O(1) index splitting vs O(N) pointer traversal.",hint:"ArrayList splits in O(1) by index; LinkedList requires O(N) pointer traversal.",level:"Intermediate",codeExample:"ArrayList: O(1) split; LinkedList: O(N) split."},{question:"What characteristics describe the ideal workload for parallel streams?",shortAnswer:"Large datasets (N > 10,000) stored in array-backed sources, performing CPU-intensive computations without blocking I/O, lock contention, or shared mutable state.",explanation:"Maximizes multi-core scaling efficiency.",hint:"Large N, array source, CPU-bound, stateless.",level:"Beginner",codeExample:"IntStream.rangeClosed(1, 1_000_000).parallel().map(this::cpuHeavyMath).sum();"}];function S(){return e.jsxs("div",{className:"space-y-12 px-4 md:px-8 py-8 text-slate-200 bg-slate-900 min-h-screen",children:[e.jsxs("header",{className:"space-y-4 border-b border-slate-800 pb-6",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"px-3 py-1 bg-sky-500/10 text-sky-400 border border-sky-500/20 text-xs font-semibold rounded-full uppercase tracking-wider",children:"Module 009_007 · Topic 6"}),e.jsx("span",{className:"px-3 py-1 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-xs font-semibold rounded-full",children:"Parallel Streams & Performance"})]}),e.jsxs("h1",{className:"text-xl sm:text-2xl md:text-3xl font-bold text-white tracking-tight",children:["When Parallel Streams ",e.jsx("code",{className:"text-emerald-400 font-mono",children:"Excel"}),": High N, High Q & Splittable Sources"]}),e.jsx("p",{className:"text-base md:text-lg text-slate-400 leading-relaxed max-w-4xl",children:"The golden formula for multi-core speedup: large datasets, CPU-bound computations, and O(1) random-access Spliterators (ArrayList, IntStream)."})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsxs("h2",{className:"text-2xl font-bold text-emerald-400 flex items-center gap-2",children:[e.jsx("span",{children:"💻"})," Hands-On Java Demo Code"]}),e.jsx(r,{fileModule:s,title:"WhenParallelStreamsExcelDemo.java",highlightLines:[18,25,34,43]})]}),e.jsx("section",{className:"space-y-4",children:e.jsx(t,{title:"Parallel Streams FAQs",questions:l})}),e.jsx("section",{className:"space-y-4",children:e.jsx(a,{content:i,title:"Module 009_007 Topic 6: When Parallel Streams Excel",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Printable Note",downloadFileName:"009_007_topic6_when_parallel_streams_excel_note.txt"})}),e.jsx(n,{note:"Parallel streams give near 100% linear speedup when three conditions are met: 1) Data is in an ArrayList or IntStream, 2) Data volume is large, and 3) The work is pure CPU math with NO locks or I/O! — Sukanta Hui"})]})}export{S as default};
