import{j as e}from"./vendor-react-core-Doz9nIC6.js";import{J as t}from"./JavaFileLoader-BfBG3xz_.js";import{F as r}from"./FAQTemplate-BHhlgA96.js";import{P as a}from"./PlainTextPrint-C08xhKA4.js";import{T as n}from"./TeacherSukantaHui-DDN87fI5.js";import"./JavaCodeBlock-BwsLxS3r.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-DEsnU7fn.js";const i=`/**\r
 * Java Core Tutorial - Module 009_007: Parallel Streams & Performance Considerations\r
 * Topic 8: Poorly Splittable Data Sources - LinkedList vs ArrayList Benchmark\r
 * Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
 */\r
\r
package com.coderaccotax.javatutorial.parallel;\r
\r
import java.util.ArrayList;\r
import java.util.LinkedList;\r
import java.util.List;\r
\r
public class PoorlySplittableSourcesDemo {\r
\r
    public static void main(String[] args) {\r
        System.out.println("==========================================================================");\r
        System.out.println(" TOPIC 8: SPLITABILITY BENCHMARK (ARRAYLIST VS LINKEDLIST) - BARRACKPORE");\r
        System.out.println("==========================================================================\\n");\r
\r
        int size = 500_000;\r
        List<Integer> arrayList = new ArrayList<>(size);\r
        List<Integer> linkedList = new LinkedList<>();\r
\r
        for (int i = 0; i < size; i++) {\r
            arrayList.add(i);\r
            linkedList.add(i);\r
        }\r
\r
        // 1. Benchmarking Parallel ArrayList (O(1) Splitability)\r
        long start = System.currentTimeMillis();\r
        long arrayListSum = arrayList.parallelStream().mapToLong(x -> x * 2L).sum();\r
        long arrayListDuration = System.currentTimeMillis() - start;\r
        System.out.println("1. ArrayList Parallel Duration : " + arrayListDuration + " ms (Sum: " + arrayListSum + ")");\r
\r
        // 2. Benchmarking Parallel LinkedList (O(N) Poor Splitability)\r
        start = System.currentTimeMillis();\r
        long linkedListSum = linkedList.parallelStream().mapToLong(x -> x * 2L).sum();\r
        long linkedListDuration = System.currentTimeMillis() - start;\r
        System.out.println("2. LinkedList Parallel Duration: " + linkedListDuration + " ms (Sum: " + linkedListSum + ")");\r
\r
        System.out.println("\\n>>> ARCHITECTURAL VERDICT:");\r
        System.out.println("  - ArrayList: Spliterator splits instantly at array midpoints.");\r
        System.out.println("  - LinkedList: Spliterator must traverse N/2 pointers sequentially, creating a massive bottleneck.");\r
        System.out.println("==========================================================================");\r
    }\r
}\r
`,s=`================================================================================\r
JAVA CORE TUTORIAL - QUICK REVISION GUIDE\r
Module 009_007: Parallel Streams & Performance Considerations\r
Topic 8: Poorly Splittable Data Sources\r
Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
================================================================================\r
\r
1. DATA SOURCE SPLITABILITY SPECTRUM:\r
   - EXCELLENT (O(1) Splitting, Known Exact Size):\r
     * 'ArrayList', 'int[]', 'IntStream.rangeClosed()', 'ArrayDeque'.\r
   - GOOD (O(1) or O(log N) Splitting, Tree balanced):\r
     * 'HashSet', 'TreeSet', 'ConcurrentHashMap.keySet()'.\r
   - POOR (O(N) Sequential Traversal Required):\r
     * 'LinkedList', 'Stream.iterate()', 'BufferedReader.lines()'.\r
\r
================================================================================\r
Classroom Practice: Barrackpore Academy | Mentor: Sukanta Hui\r
================================================================================\r
`,l=[{question:"Why does LinkedList fail to deliver multi-core speedups in parallel streams?",shortAnswer:"Because LinkedList does not support index-based random access. The Spliterator must iterate sequentially through half the nodes just to find the split boundary, introducing severe CPU overhead that destroys parallelism.",explanation:"Array-backed collections split in O(1) arithmetic time.",hint:"Requires O(N) pointer traversal to find split points.",level:"Intermediate",codeExample:"ArrayList: mid = (start + end) / 2; LinkedList: traverse node.next N/2 times"},{question:"Which data source splits most efficiently for numeric stream pipelines?",shortAnswer:"IntStream.range() or IntStream.rangeClosed(), because it has zero heap memory footprint and calculates exact midpoint integer ranges in O(1) arithmetic operations.",explanation:"Produces maximum throughput in ForkJoinPool.",hint:"IntStream.rangeClosed()",level:"Beginner",codeExample:"IntStream.rangeClosed(1, 1_000_000).parallel().sum();"}];function L(){return e.jsxs("div",{className:"space-y-12 px-4 md:px-8 py-8 text-slate-200 bg-slate-900 min-h-screen",children:[e.jsxs("header",{className:"space-y-4 border-b border-slate-800 pb-6",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"px-3 py-1 bg-sky-500/10 text-sky-400 border border-sky-500/20 text-xs font-semibold rounded-full uppercase tracking-wider",children:"Module 009_007 · Topic 8"}),e.jsx("span",{className:"px-3 py-1 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-xs font-semibold rounded-full",children:"Parallel Streams & Performance"})]}),e.jsxs("h1",{className:"text-xl sm:text-2xl md:text-3xl font-bold text-white tracking-tight",children:["Poorly Splittable Sources: ",e.jsx("code",{className:"text-emerald-400 font-mono",children:"LinkedList vs ArrayList"})," in Parallel Streams"]}),e.jsx("p",{className:"text-base md:text-lg text-slate-400 leading-relaxed max-w-4xl",children:"Data structure splitability benchmark: why array index bisecting (O(1)) crushes linked list node traversals (O(N)) in parallel pipelines."})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsxs("h2",{className:"text-2xl font-bold text-emerald-400 flex items-center gap-2",children:[e.jsx("span",{children:"💻"})," Hands-On Java Demo Code"]}),e.jsx(t,{fileModule:i,title:"PoorlySplittableSourcesDemo.java",highlightLines:[18,25,34,43]})]}),e.jsx("section",{className:"space-y-4",children:e.jsx(r,{title:"Parallel Streams FAQs",questions:l})}),e.jsx("section",{className:"space-y-4",children:e.jsx(a,{content:s,title:"Module 009_007 Topic 8: Poorly Splittable Sources",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Printable Note",downloadFileName:"009_007_topic8_poorly_splittable_sources_note.txt"})}),e.jsx(n,{note:"ArrayList splits in O(1) time by simply calculating the midpoint index. LinkedList has to traverse every node one by one just to split! That is why parallel LinkedList is often much slower than sequential! — Sukanta Hui"})]})}export{L as default};
