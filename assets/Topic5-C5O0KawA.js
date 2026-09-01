import{j as r}from"./vendor-react-core-Doz9nIC6.js";import{J as e}from"./JavaFileLoader-BfBG3xz_.js";import{F as a}from"./FAQTemplate-BHhlgA96.js";import{P as t}from"./PlainTextPrint-C08xhKA4.js";import{T as n}from"./TeacherSukantaHui-CEPuAfsb.js";import"./JavaCodeBlock-BwsLxS3r.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-DGCamHnX.js";const s=`/**\r
 * Java Core Tutorial - Module 009_004: Stream API Pipeline & Intermediate Operations\r
 * Topic 5: Creating Streams from Arrays & Sub-Array Range Slicing\r
 * Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
 */\r
\r
package com.coderaccotax.javatutorial.streams;\r
\r
import java.util.Arrays;\r
import java.util.stream.IntStream;\r
import java.util.stream.Stream;\r
\r
public class StreamsFromArraysDemo {\r
\r
    public static void main(String[] args) {\r
        System.out.println("==========================================================================");\r
        System.out.println(" TOPIC 5: STREAMS FROM ARRAYS - BARRACKPORE ACADEMY");\r
        System.out.println("==========================================================================\\n");\r
\r
        // 1. Streaming an Object Array (String[])\r
        String[] branchNames = {"Barrackpore", "Naihati", "Shyamnagar", "Ichapur", "Titagarh"};\r
        Stream<String> branchStream = Arrays.stream(branchNames);\r
        System.out.print("1. Full Object Array Stream: ");\r
        branchStream.forEach(b -> System.out.print("[" + b + "] "));\r
        System.out.println();\r
\r
        // 2. Sub-Array Slicing with Range: Arrays.stream(arr, startInclusive, endExclusive)\r
        System.out.print("2. Sub-Array Slice [1..4) (Naihati to Ichapur): ");\r
        Arrays.stream(branchNames, 1, 4)\r
            .map(String::toUpperCase)\r
            .forEach(b -> System.out.print(b + " "));\r
        System.out.println();\r
\r
        // 3. Streaming Primitive Arrays (int[], long[], double[])\r
        int[] scores = {88, 92, 75, 94, 85, 90};\r
        IntStream scoreStream = Arrays.stream(scores);\r
        double averageScore = scoreStream.average().orElse(0.0);\r
        System.out.println("\\n3. Primitive int[] Stream Average Score: " + averageScore);\r
\r
        // 4. Primitive Sub-Array Slicing\r
        int sumOfMiddleThree = Arrays.stream(scores, 1, 4).sum();\r
        System.out.println("4. Sum of slice indices 1 to 3: " + sumOfMiddleThree);\r
\r
        System.out.println("\\n==========================================================================");\r
    }\r
}\r
`,i=`================================================================================\r
JAVA CORE TUTORIAL - QUICK REVISION GUIDE\r
Module 009_004: Stream API Pipeline & Intermediate Operations\r
Topic 5: Streams from Arrays\r
Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
================================================================================\r
\r
1. ARRAYS.STREAM() METHODS:\r
   - 'Arrays.stream(T[] array)' → Stream<T> (Generic Object Stream).\r
   - 'Arrays.stream(T[] array, int startInclusive, int endExclusive)' → Sub-array Stream<T>.\r
   - 'Arrays.stream(int[] array)' → IntStream (Primitive unboxed).\r
   - 'Arrays.stream(long[] array)' → LongStream.\r
   - 'Arrays.stream(double[] array)' → DoubleStream.\r
\r
2. SUB-ARRAY SLICING BENEFITS:\r
   - Slicing via 'Arrays.stream(arr, from, to)' operates with zero memory allocation.\r
   - Eliminates need for 'Arrays.copyOfRange()' before streaming.\r
\r
================================================================================\r
Classroom Practice: Barrackpore Academy | Mentor: Sukanta Hui\r
================================================================================\r
`,o=[{question:"How does Arrays.stream(int[]) prevent performance degradation compared to Stream.of(Integer[])?",shortAnswer:"Arrays.stream(int[]) returns a primitive IntStream that operates directly on unboxed 32-bit primitive integers, avoiding thousands of heap allocations and auto-boxing/unboxing overhead.",explanation:"IntStream provides dedicated numeric operations like sum(), average(), and summaryStatistics().",hint:"Returns a primitive IntStream that avoids boxing into wrapper objects.",level:"Intermediate",codeExample:"int[] arr = {1, 2, 3};\\nIntStream is = Arrays.stream(arr); // Zero boxing overhead!"},{question:"Is the end index in Arrays.stream(array, start, end) inclusive or exclusive?",shortAnswer:"The end index is exclusive, following standard Java range conventions [startInclusive, endExclusive).",explanation:"This matches substring(start, end) and subList(start, end) semantics across the JDK.",hint:"Start is inclusive, end is exclusive.",level:"Beginner",codeExample:"String[] arr = {'A', 'B', 'C', 'D'};\\nArrays.stream(arr, 1, 3); // Processes elements at index 1 and 2 ('B', 'C')"}];function x(){return r.jsxs("div",{className:"space-y-12 px-4 md:px-8 py-8 text-slate-200 bg-slate-900 min-h-screen",children:[r.jsxs("header",{className:"space-y-4 border-b border-slate-800 pb-6",children:[r.jsxs("div",{className:"flex items-center gap-3",children:[r.jsx("span",{className:"px-3 py-1 bg-sky-500/10 text-sky-400 border border-sky-500/20 text-xs font-semibold rounded-full uppercase tracking-wider",children:"Module 009_004 · Topic 5"}),r.jsx("span",{className:"px-3 py-1 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-xs font-semibold rounded-full",children:"Stream API Pipelines"})]}),r.jsxs("h1",{className:"text-xl sm:text-2xl md:text-3xl font-bold text-white tracking-tight",children:["Creating Streams from ",r.jsx("code",{className:"text-emerald-400 font-mono",children:"Arrays"}),": Arrays.stream() & Sub-Array Slicing"]}),r.jsx("p",{className:"text-base md:text-lg text-slate-400 leading-relaxed max-w-4xl",children:"Stream processing over fixed-size object and primitive arrays, including zero-copy sub-array range slicing."})]}),r.jsxs("section",{className:"space-y-4",children:[r.jsxs("h2",{className:"text-2xl font-bold text-emerald-400 flex items-center gap-2",children:[r.jsx("span",{children:"💻"})," Hands-On Java Demo Code"]}),r.jsx(e,{fileModule:s,title:"StreamsFromArraysDemo.java",highlightLines:[18,24,30,36]})]}),r.jsx("section",{className:"space-y-4",children:r.jsx(a,{title:"Stream API Pipeline FAQs",questions:o})}),r.jsx("section",{className:"space-y-4",children:r.jsx(t,{content:i,title:"Module 009_004 Topic 5: Streams from Arrays",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Printable Note",downloadFileName:"009_004_topic5_streams_from_arrays_note.txt"})}),r.jsx(n,{note:"Arrays.stream(array, startInclusive, endExclusive) allows you to process specific sub-ranges of arrays without creating any new sliced array copies in memory! — Sukanta Hui"})]})}export{x as default};
