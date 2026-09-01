import{j as e}from"./vendor-react-core-Doz9nIC6.js";import{J as r}from"./JavaFileLoader-BfBG3xz_.js";import{F as t}from"./FAQTemplate-BHhlgA96.js";import{P as n}from"./PlainTextPrint-C08xhKA4.js";import{T as i}from"./TeacherSukantaHui-BaJcBHAy.js";import"./JavaCodeBlock-BwsLxS3r.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-8ao-0upJ.js";const a=`/**\r
 * Java Core Tutorial - Module 007_009: Collections Performance & Big-O Complexities\r
 * Topic 4: Primitive Arrays vs Boxed Collections: int[] vs ArrayList<Integer> Benchmark\r
 * Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
 */\r
\r
package com.coderaccotax.javatutorial.collections;\r
\r
import java.util.ArrayList;\r
import java.util.List;\r
\r
public class PrimitiveVsBoxedBenchmarkDemo {\r
\r
    private static final int ELEMENT_COUNT = 5_000_000;\r
\r
    public static void main(String[] args) {\r
        System.out.println("==========================================================================");\r
        System.out.println(" TOPIC 4: PRIMITIVE ARRAYS vs BOXED COLLECTIONS - BARRACKPORE");\r
        System.out.println("==========================================================================\\n");\r
\r
        System.out.println(">>> BENCHMARKING " + ELEMENT_COUNT + " INTEGERS ITERATION & SUMMATION:");\r
\r
        // 1. Primitive int[] Array (Hardware contiguous RAM):\r
        int[] rawArray = new int[ELEMENT_COUNT];\r
        for (int i = 0; i < ELEMENT_COUNT; i++) rawArray[i] = i;\r
\r
        long start1 = System.nanoTime();\r
        long sum1 = 0;\r
        for (int i = 0; i < ELEMENT_COUNT; i++) {\r
            sum1 += rawArray[i]; // Raw L1 CPU cache fetch\r
        }\r
        long dur1 = System.nanoTime() - start1;\r
\r
        // 2. Boxed ArrayList<Integer> (Pointer indirection & auto-unboxing):\r
        List<Integer> boxedList = new ArrayList<>(ELEMENT_COUNT);\r
        for (int i = 0; i < ELEMENT_COUNT; i++) boxedList.add(i);\r
\r
        long start2 = System.nanoTime();\r
        long sum2 = 0;\r
        for (int i = 0; i < ELEMENT_COUNT; i++) {\r
            sum2 += boxedList.get(i); // Auto-unboxing Integer.intValue()\r
        }\r
        long dur2 = System.nanoTime() - start2;\r
\r
        System.out.printf("  1. Primitive int[] Time         : %,12d ns (Sum: %d)%n", dur1, sum1);\r
        System.out.printf("  2. Boxed ArrayList<Integer> Time: %,12d ns (Sum: %d)%n", dur2, sum2);\r
        System.out.printf("  ⚡ SPEED DIFFERENCE             : Primitive array is %.2fx FASTER!%n", (double) dur2 / dur1);\r
\r
        System.out.println("\\n>>> WHY PRIMITIVE ARRAYS DESTROY BOXED COLLECTIONS IN RAW SPEED:");\r
        System.out.println("  1. CPU L1/L2 Cache Locality : 'int[]' loads 16 consecutive integers in a single 64-byte CPU cache line.");\r
        System.out.println("  2. Zero Pointer Indirection : Direct value access without pointer dereferencing.");\r
        System.out.println("  3. Zero Auto-Unboxing       : No 'Integer.intValue()' method invocation overhead.");\r
\r
        System.out.println("\\n==========================================================================");\r
    }\r
}`,s=`================================================================================\r
JAVA CORE TUTORIAL - QUICK REVISION GUIDE\r
Module 007_009: Collections Performance & Big-O Complexities\r
Topic 4: Primitive Arrays vs Boxed Collections\r
Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
================================================================================\r
\r
1. PRIMITIVE vs BOXED PERFORMANCE:\r
   - int[] stores raw bits; ArrayList<Integer> stores references.\r
   - 64-byte CPU cache line holds 16 consecutive primitive ints.\r
   - ArrayList requires pointer dereference + auto-unboxing.\r
   - Primitive arrays are 5x-10x faster for intensive math/data processing.\r
\r
================================================================================\r
Classroom Practice: Barrackpore Academy | Mentor: Sukanta Hui\r
================================================================================`,o=[{question:"Why is iterating and summing a primitive 'int[]' array 5x to 10x faster than an 'ArrayList<Integer>'?",shortAnswer:"1. 'Hardware Cache Locality': A primitive 'int[]' stores 32-bit values consecutively, allowing the CPU to load 16 integers simultaneously into a single 64-byte L1 CPU cache line with hardware prefetching. 2. 'Pointer Dereferencing & Unboxing': 'ArrayList<Integer>' stores an array of object references pointing to scattered 'Integer' objects on the heap. Accessing each element requires pointer dereferencing (causing CPU cache misses) and executing 'Integer.intValue()' unboxing instructions.",explanation:"Core hardware architecture and CPU cache line mechanics in Java.",hint:"CPU cache locality loads 16 ints per cache line; ArrayList suffers from pointer indirection and unboxing.",level:"Intermediate",codeExample:"for (int n : rawIntArray) sum += n; // 10x faster than ArrayList<Integer>"}];function h(){return e.jsxs("div",{className:"space-y-12 px-4 md:px-8 py-8 text-slate-200 bg-slate-900 min-h-screen",children:[e.jsxs("header",{className:"space-y-4 border-b border-slate-800 pb-6",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"px-3 py-1 bg-sky-500/10 text-sky-400 border border-sky-500/20 text-xs font-semibold rounded-full uppercase tracking-wider",children:"Module 007_009 · Topic 4"}),e.jsx("span",{className:"px-3 py-1 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-xs font-semibold rounded-full",children:"Primitive vs Boxed"})]}),e.jsxs("h1",{className:"text-xl sm:text-2xl md:text-3xl font-bold text-white tracking-tight",children:["Performance Comparison: Primitive Arrays vs Boxed Collections (",e.jsx("code",{className:"text-emerald-400 font-mono",children:"int[]"})," vs ",e.jsx("code",{className:"text-amber-400 font-mono",children:"ArrayList<Integer>"}),")"]}),e.jsx("p",{className:"text-base md:text-lg text-slate-400 leading-relaxed max-w-4xl",children:"Measure hardware throughput disparities: analyzing L1/L2 CPU cache line utilization, pointer dereferencing delays, and auto-unboxing overhead across high-volume iterations."})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsxs("h2",{className:"text-2xl font-bold text-emerald-400 flex items-center gap-2",children:[e.jsx("span",{children:"💻"})," Hands-On Java Demo Code"]}),e.jsx(r,{fileModule:a,title:"PrimitiveVsBoxedBenchmarkDemo.java",highlightLines:[7,10,19,20,24,25,30,31,36,37]})]}),e.jsx("section",{className:"space-y-4",children:e.jsx(t,{title:"Primitive vs Boxed FAQs",questions:o})}),e.jsx("section",{className:"space-y-4",children:e.jsx(n,{content:s,title:"Module 007_009 Topic 4: Primitive vs Boxed Collections",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Printable Note",downloadFileName:"007_009_topic4_primitive_vs_boxed_collections_note.txt"})}),e.jsx(i,{note:"When building high-frequency trading engines or big data analytics, use primitive arrays (or specialized libraries like Eclipse Collections / Trove)! A primitive int[] array is 5x to 10x faster than ArrayList<Integer> because it sits directly in the CPU's high-speed L1 cache! — Sukanta Hui"})]})}export{h as default};
