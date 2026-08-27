import{j as e}from"./vendor-react-core-Doz9nIC6.js";import{J as t}from"./JavaFileLoader-BfBG3xz_.js";import{F as r}from"./FAQTemplate-CkSqDH4B.js";import{P as a}from"./PlainTextPrint-C08xhKA4.js";import{T as n}from"./TeacherSukantaHui-CC0AKmkm.js";import"./JavaCodeBlock-BwsLxS3r.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-BtJHuk7w.js";const s=`/**\r
 * Java Core Tutorial - Module 009_004: Stream API Pipeline & Intermediate Operations\r
 * Topic 8: Primitive Streams (IntStream, LongStream, DoubleStream) & Performance\r
 * Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
 */\r
\r
package com.coderaccotax.javatutorial.streams;\r
\r
import java.util.IntSummaryStatistics;\r
import java.util.List;\r
import java.util.stream.IntStream;\r
import java.util.stream.Stream;\r
\r
public class PrimitiveStreamsDemo {\r
\r
    public static void main(String[] args) {\r
        System.out.println("==========================================================================");\r
        System.out.println(" TOPIC 8: PRIMITIVE STREAMS - BARRACKPORE ACADEMY");\r
        System.out.println("==========================================================================\\n");\r
\r
        // 1. IntStream.range(1, 5) [Exclusive] vs IntStream.rangeClosed(1, 5) [Inclusive]\r
        System.out.print("1. IntStream.range(1, 5) [1..4]: ");\r
        IntStream.range(1, 5).forEach(n -> System.out.print(n + " "));\r
        System.out.println();\r
\r
        System.out.print("2. IntStream.rangeClosed(1, 5) [1..5]: ");\r
        IntStream.rangeClosed(1, 5).forEach(n -> System.out.print(n + " "));\r
        System.out.println();\r
\r
        // 3. Built-in Numeric Terminal Reductions: sum(), average(), min(), max()\r
        int sum = IntStream.rangeClosed(1, 100).sum();\r
        System.out.println("\\n3. Sum of 1 to 100 via IntStream: " + sum);\r
\r
        // 4. IntSummaryStatistics: All summary stats in a single pass\r
        IntSummaryStatistics stats = IntStream.of(88, 94, 76, 91, 65).summaryStatistics();\r
        System.out.println("4. Student Score Statistics:");\r
        System.out.println("   - Count   : " + stats.getCount());\r
        System.out.println("   - Min     : " + stats.getMin());\r
        System.out.println("   - Max     : " + stats.getMax());\r
        System.out.println("   - Average : " + stats.getAverage());\r
        System.out.println("   - Sum     : " + stats.getSum());\r
\r
        // 5. Converting between Object Stream and Primitive Stream (mapToInt vs boxed)\r
        List<String> names = List.of("Swadeep", "Tuhina", "Abhronila");\r
        IntStream lengthStream = names.stream().mapToInt(String::length); // Object -> Primitive\r
        Stream<Integer> boxedStream = lengthStream.boxed();               // Primitive -> Object\r
        System.out.println("\\n5. Boxed lengths list: " + boxedStream.toList());\r
\r
        System.out.println("==========================================================================");\r
    }\r
}\r
`,i=`================================================================================\r
JAVA CORE TUTORIAL - QUICK REVISION GUIDE\r
Module 009_004: Stream API Pipeline & Intermediate Operations\r
Topic 8: Primitive Streams (IntStream, LongStream, DoubleStream)\r
Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
================================================================================\r
\r
1. SPECIALIZED PRIMITIVE STREAMS:\r
   - 'IntStream', 'LongStream', 'DoubleStream'.\r
   - Avoids heap overhead of 'Stream<Integer>', 'Stream<Long>', 'Stream<Double>'.\r
\r
2. KEY PRIMITIVE STREAM METHODS:\r
   - Range Creation: 'IntStream.range(1, 10)' (exclusive), 'IntStream.rangeClosed(1, 10)' (inclusive).\r
   - Numeric Reductions: '.sum()', '.average()', '.min()', '.max()', '.summaryStatistics()'.\r
   - Conversions:\r
     * Object -> Primitive: 'stream.mapToInt(...)', 'stream.mapToLong(...)', 'stream.mapToDouble(...)'.\r
     * Primitive -> Object: 'intStream.boxed()' (Stream<Integer>) or 'intStream.mapToObj(...)'.\r
\r
================================================================================\r
Classroom Practice: Barrackpore Academy | Mentor: Sukanta Hui\r
================================================================================\r
`,m=[{question:"What is the difference between IntStream.range() and IntStream.rangeClosed()?",shortAnswer:"IntStream.range(start, end) excludes the end value [start, end), whereas IntStream.rangeClosed(start, end) includes the end value [start, end].",explanation:"range(1, 5) generates 1, 2, 3, 4 while rangeClosed(1, 5) generates 1, 2, 3, 4, 5.",hint:"range is exclusive of upper bound; rangeClosed is inclusive.",level:"Beginner",codeExample:"IntStream.range(1, 3); // 1, 2\\nIntStream.rangeClosed(1, 3); // 1, 2, 3"},{question:"What is IntSummaryStatistics and why is it more efficient than calling min(), max(), and average() separately?",shortAnswer:"IntSummaryStatistics calculates count, min, max, sum, and average in a single traversal of the stream. Calling min(), max(), and average() separately would require re-running 3 separate stream passes.",explanation:"Since streams can only be consumed once, summaryStatistics provides an efficient 1-pass solution.",hint:"Gathers all 5 statistical metrics in a single pass over the stream.",level:"Intermediate",codeExample:"IntSummaryStatistics stats = IntStream.of(10, 20, 30).summaryStatistics();\\nstats.getAverage(); // 20.0"}];function x(){return e.jsxs("div",{className:"space-y-12 px-4 md:px-8 py-8 text-slate-200 bg-slate-900 min-h-screen",children:[e.jsxs("header",{className:"space-y-4 border-b border-slate-800 pb-6",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"px-3 py-1 bg-sky-500/10 text-sky-400 border border-sky-500/20 text-xs font-semibold rounded-full uppercase tracking-wider",children:"Module 009_004 · Topic 8"}),e.jsx("span",{className:"px-3 py-1 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-xs font-semibold rounded-full",children:"Stream API Pipelines"})]}),e.jsxs("h1",{className:"text-3xl md:text-4xl font-extrabold text-white tracking-tight",children:[e.jsx("code",{className:"text-emerald-400 font-mono",children:"Primitive Streams"}),": IntStream, LongStream & DoubleStream"]}),e.jsx("p",{className:"text-base md:text-lg text-slate-400 leading-relaxed max-w-4xl",children:"Zero-overhead numeric processing: ranges, statistical summaries, mapping to/from object streams without auto-boxing penalties."})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsxs("h2",{className:"text-2xl font-bold text-emerald-400 flex items-center gap-2",children:[e.jsx("span",{children:"💻"})," Hands-On Java Demo Code"]}),e.jsx(t,{fileModule:s,title:"PrimitiveStreamsDemo.java",highlightLines:[18,25,32,38,45]})]}),e.jsx("section",{className:"space-y-4",children:e.jsx(r,{title:"Stream API Pipeline FAQs",questions:m})}),e.jsx("section",{className:"space-y-4",children:e.jsx(a,{content:i,title:"Module 009_004 Topic 8: Primitive Streams",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Printable Note",downloadFileName:"009_004_topic8_primitive_streams_note.txt"})}),e.jsx(n,{note:"Whenever you calculate sums, averages, min/max, or numeric ranges, NEVER use Stream<Integer>! Always use IntStream, LongStream, or DoubleStream to dodge thousands of garbage collection allocations! — Sukanta Hui"})]})}export{x as default};
