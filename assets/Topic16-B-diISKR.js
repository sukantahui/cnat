import{j as t}from"./vendor-react-core-Doz9nIC6.js";import{J as r}from"./JavaFileLoader-BfBG3xz_.js";import{F as e}from"./FAQTemplate-CkSqDH4B.js";import{P as n}from"./PlainTextPrint-C08xhKA4.js";import{T as o}from"./TeacherSukantaHui-CyIG3xbg.js";import"./JavaCodeBlock-BwsLxS3r.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-CIaKtAt4.js";const i=`/**\r
 * Java Core Tutorial - Module 007_008: Sorting, Comparable, Comparator & Collections\r
 * Topic 16: Java Internal Sorting Algorithms: Dual-Pivot Quicksort & TimSort (Capstone)\r
 * Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
 */\r
\r
package com.coderaccotax.javatutorial.collections;\r
\r
import java.util.ArrayList;\r
import java.util.Arrays;\r
import java.util.Collections;\r
import java.util.List;\r
\r
public class UnderlyingSortingAlgorithmsCapstoneDemo {\r
\r
    public static void main(String[] args) {\r
        System.out.println("==========================================================================");\r
        System.out.println(" TOPIC 16: JAVA SORTING INTERNALS: DUAL-PIVOT QUICKSORT & TIMSORT (CAPSTONE)");\r
        System.out.println("==========================================================================\\n");\r
\r
        // 1. Primitive Array Sorting (Uses Dual-Pivot Quicksort by Vladimir Yaroslavskiy):\r
        int[] primitiveScores = {85, 42, 99, 12, 73, 64, 91};\r
        Arrays.sort(primitiveScores); // Dual-Pivot Quicksort\r
        System.out.println(">>> 1. Primitive Array Sorted via Dual-Pivot Quicksort:");\r
        System.out.println("  " + Arrays.toString(primitiveScores));\r
\r
        // 2. Object List Sorting (Uses TimSort by Tim Peters):\r
        List<String> studentNames = new ArrayList<>(List.of("Swadeep", "Tuhina", "Abhronila", "Debangshu"));\r
        Collections.sort(studentNames); // TimSort\r
        System.out.println("\\n>>> 2. Object Collection Sorted via TimSort:");\r
        System.out.println("  " + studentNames);\r
\r
        System.out.println("\\n>>> DEEP ARCHITECTURAL COMPARISON OF JAVA SORTING ENGINES:");\r
        System.out.println("+----------------------+---------------------------+---------------------------+");\r
        System.out.println("| Feature              | Dual-Pivot Quicksort      | TimSort                   |");\r
        System.out.println("+----------------------+---------------------------+---------------------------+");\r
        System.out.println("| Applied To           | Primitive Arrays (int[])  | Object Arrays & Lists     |");\r
        System.out.println("| Algorithm Family     | Hybrid Quicksort (2 pivots| Hybrid Merge + Insertion  |");\r
        System.out.println("| Best-Case Time       | O(n log n)                | O(n) (Already sorted!)    |");\r
        System.out.println("| Average-Case Time    | O(n log n)                | O(n log n)                |");\r
        System.out.println("| Worst-Case Time      | O(n^2)                    | O(n log n) Guaranteed     |");\r
        System.out.println("| Stability            | UNSTABLE (Order may flip) | STABLE (Preserves order)  |");\r
        System.out.println("| Extra Space          | O(log n) stack space      | O(n) temp array buffer    |");\r
        System.out.println("+----------------------+---------------------------+---------------------------+");\r
\r
        System.out.println("\\n>>> WHY TIMSORT WAS CHOSEN FOR OBJECTS:");\r
        System.out.println("  - STABILITY IS CRITICAL FOR OBJECTS: If you sort employees by Name, and then sort by Department, TimSort GUARANTEES names remain alphabetical within each department!");\r
        System.out.println("  - EXPLOITS NATURAL RUNS: Real-world data is often partially sorted; TimSort detects existing sorted chunks ('runs') and merges them in O(n) time!");\r
\r
        System.out.println("\\n==========================================================================");\r
        System.out.println(" MODULE 007_008 SORTING, COMPARABLE & COLLECTIONS 100% COMPLETE!");\r
        System.out.println("==========================================================================");\r
    }\r
}`,a=`================================================================================\r
JAVA CORE TUTORIAL - QUICK REVISION GUIDE\r
Module 007_008: Sorting, Comparable, Comparator & Collections\r
Topic 16: Java Sorting Algorithms Capstone\r
Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
================================================================================\r
\r
1. MODULE 007_008 GRAND SUMMARY:\r
   - Comparable: 'compareTo(o)' in 'java.lang' (natural sort).\r
   - Comparator: 'compare(o1, o2)' in 'java.util' (strategy sort).\r
   - compareTo contract: sign (<0, ==0, >0), consistent with equals.\r
   - Java 8 Comparator: 'comparing()', 'thenComparing()', 'nullsLast()'.\r
   - Collections utility: algorithms (sort, binarySearch, shuffle), statistical (min, max, frequency, disjoint).\r
   - Wrappers: synchronized (mutex trap), unmodifiable (view trap).\r
   - Singletons: 'emptyList()' (zero allocation), 'singletonList()'.\r
   - Under the hood: Dual-Pivot Quicksort (primitives) & TimSort (stable objects).\r
\r
================================================================================\r
Classroom Practice: Barrackpore Academy | Mentor: Sukanta Hui\r
================================================================================`,s=[{question:"Why does Java use 'Dual-Pivot Quicksort' for primitive arrays but 'TimSort' for object arrays and collections?",shortAnswer:"1. 'Primitive Arrays (Dual-Pivot Quicksort)': primitives have no identity, so sort 'stability' is irrelevant. Dual-Pivot Quicksort is in-place (O(log n) memory) and runs extremely fast by leveraging CPU hardware cache locality with zero extra object allocations. 2. 'Object Collections (TimSort)': objects require 'Stable Sorting' (preserving original order of equal keys during multi-pass sorts). TimSort is an adaptive hybrid of Merge Sort and Insertion Sort with guaranteed O(n log n) worst-case time and O(n) linear performance on partially sorted real-world data.",explanation:"Grand architectural synthesis of Java standard sorting implementations.",hint:"Primitives use in-place Dual-Pivot Quicksort (stability not needed); objects use Stable adaptive TimSort.",level:"Advanced",codeExample:"Arrays.sort(primitiveArray); // Dual-Pivot Quicksort | Arrays.sort(objectArray); // TimSort"}];function g(){return t.jsxs("div",{className:"space-y-12 px-4 md:px-8 py-8 text-slate-200 bg-slate-900 min-h-screen",children:[t.jsxs("header",{className:"space-y-4 border-b border-slate-800 pb-6",children:[t.jsxs("div",{className:"flex items-center gap-3",children:[t.jsx("span",{className:"px-3 py-1 bg-sky-500/10 text-sky-400 border border-sky-500/20 text-xs font-semibold rounded-full uppercase tracking-wider",children:"Module 007_008 · Topic 16"}),t.jsx("span",{className:"px-3 py-1 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-xs font-semibold rounded-full",children:"Sorting Engine Capstone"})]}),t.jsxs("h1",{className:"text-3xl md:text-4xl font-extrabold text-white tracking-tight",children:["Java's Sorting Algorithms: ",t.jsx("code",{className:"text-emerald-400 font-mono",children:"Dual-Pivot Quicksort"})," & ",t.jsx("code",{className:"text-sky-400 font-mono",children:"TimSort"})," (Capstone)"]}),t.jsxs("p",{className:"text-base md:text-lg text-slate-400 leading-relaxed max-w-4xl",children:["Master JVM sorting internals: comparing in-place ",t.jsx("code",{className:"text-emerald-300 font-mono",children:"Dual-Pivot Quicksort"})," for primitives against stable, adaptive hybrid ",t.jsx("code",{className:"text-sky-300 font-mono",children:"TimSort"})," for object hierarchies."]})]}),t.jsxs("section",{className:"space-y-4",children:[t.jsxs("h2",{className:"text-2xl font-bold text-emerald-400 flex items-center gap-2",children:[t.jsx("span",{children:"💻"})," Hands-On Java Demo Code"]}),t.jsx(r,{fileModule:i,title:"UnderlyingSortingAlgorithmsCapstoneDemo.java",highlightLines:[7,10,16,17,22,23,27,28,29,30]})]}),t.jsx("section",{className:"space-y-4",children:t.jsx(e,{title:"Sorting Algorithms Capstone FAQs",questions:s})}),t.jsx("section",{className:"space-y-4",children:t.jsx(n,{content:a,title:"Module 007_008 Topic 16: Sorting Engine Capstone",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Printable Note",downloadFileName:"007_008_topic16_sorting_engine_capstone_note.txt"})}),t.jsx(o,{note:"Congratulations on completing Module 007_008! You are now a master of Java sorting—from Comparable natural ordering and multi-level Comparator pipelines, to Collections utility algorithms and low-level TimSort/Dual-Pivot Quicksort engines! — Sukanta Hui"})]})}export{g as default};
