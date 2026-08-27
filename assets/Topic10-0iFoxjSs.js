import{j as t}from"./vendor-react-core-Doz9nIC6.js";import{J as r}from"./JavaFileLoader-BfBG3xz_.js";import{F as e}from"./FAQTemplate-CkSqDH4B.js";import{P as a}from"./PlainTextPrint-C08xhKA4.js";import{T as n}from"./TeacherSukantaHui-CC0AKmkm.js";import"./JavaCodeBlock-BwsLxS3r.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-BtJHuk7w.js";const i=`/**\r
 * Java Core Tutorial - Module 007_007: Iterators, Spliterators & Fail-Fast Mechanics\r
 * Topic 10: Spliterator Methods: tryAdvance(), trySplit(), and Characteristics Flags\r
 * Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
 */\r
\r
package com.coderaccotax.javatutorial.collections;\r
\r
import java.util.ArrayList;\r
import java.util.List;\r
import java.util.Spliterator;\r
\r
public class SpliteratorMethodsAndCharacteristicsDemo {\r
\r
    public static void main(String[] args) {\r
        System.out.println("==========================================================================");\r
        System.out.println(" TOPIC 10: Spliterator METHODS & CHARACTERISTICS FLAGS - BARRACKPORE");\r
        System.out.println("==========================================================================\\n");\r
\r
        List<String> studentList = new ArrayList<>(List.of(\r
                "Swadeep", "Tuhina", "Abhronila", "Debangshu", "Sourav", "Ananya", "Priyanka", "Rahul"\r
        ));\r
\r
        Spliterator<String> spliterator1 = studentList.spliterator();\r
\r
        // 1. RECURSIVE SPLITTING (trySplit):\r
        // Splits the first half (0 to 3) into a new Spliterator; spliterator1 retains the second half (4 to 7):\r
        Spliterator<String> spliterator2 = spliterator1.trySplit();\r
\r
        System.out.println(">>> 1. After trySplit() Execution:");\r
        System.out.println("  Spliterator 2 (Partition 1) Size : " + spliterator2.estimateSize());\r
        System.out.println("  Spliterator 1 (Partition 2) Size : " + spliterator1.estimateSize());\r
\r
        System.out.println("\\n>>> 2. Consuming Partition 1:");\r
        spliterator2.forEachRemaining(name -> System.out.println("  [Thread-A / Part 1] -> " + name));\r
\r
        System.out.println("\\n>>> 3. Consuming Partition 2:");\r
        spliterator1.forEachRemaining(name -> System.out.println("  [Thread-B / Part 2] -> " + name));\r
\r
        // 4. CHARACTERISTICS FLAGS:\r
        System.out.println("\\n>>> 4. Inspecting Spliterator Characteristics Flags:");\r
        int chars = spliterator1.characteristics();\r
        System.out.println("  ORDERED    : " + ((chars & Spliterator.ORDERED) != 0));\r
        System.out.println("  SIZED      : " + ((chars & Spliterator.SIZED) != 0));\r
        System.out.println("  SUBSIZED   : " + ((chars & Spliterator.SUBSIZED) != 0));\r
        System.out.println("  DISTINCT   : " + ((chars & Spliterator.DISTINCT) != 0));\r
        System.out.println("  SORTED     : " + ((chars & Spliterator.SORTED) != 0));\r
        System.out.println("  CONCURRENT : " + ((chars & Spliterator.CONCURRENT) != 0));\r
\r
        System.out.println("\\n==========================================================================");\r
    }\r
}`,s=`================================================================================\r
JAVA CORE TUTORIAL - QUICK REVISION GUIDE\r
Module 007_007: Iterators, Spliterators & Fail-Fast Mechanics\r
Topic 10: Spliterator Characteristics & trySplit\r
Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
================================================================================\r
\r
1. SPLITERATOR CHARACTERISTICS:\r
   - 'trySplit()': splits source in half for parallel threads.\r
   - 'ORDERED': elements have defined encounter order.\r
   - 'SIZED': exact size known before traversal.\r
   - 'DISTINCT': no duplicate element pairs.\r
   - 'SORTED': elements follow natural or custom sort.\r
   - 'CONCURRENT': safely mutated concurrently.\r
\r
================================================================================\r
Classroom Practice: Barrackpore Academy | Mentor: Sukanta Hui\r
================================================================================`,o=[{question:"Explain what 'Spliterator.trySplit()' does and summarize the key characteristics flags (ORDERED, SIZED, DISTINCT, SORTED, CONCURRENT).",shortAnswer:"1. 'trySplit()': partitions a prefix chunk of elements into a newly returned Spliterator while the original Spliterator retains the remaining suffix chunk (returns null if non-splittable). 2. 'Characteristics Flags': bitmask flags informing the Stream pipeline of source properties for optimizations: 'ORDERED' (defined sequence), 'SIZED' (known exact element count), 'DISTINCT' (no duplicates), 'SORTED' (elements follow a sort order), 'CONCURRENT' (safe for concurrent modification without external locking).",explanation:"Complete specification of java.util.Spliterator methods and characteristics.",hint:"trySplit() splits off a prefix chunk; characteristics (ORDERED, SIZED, DISTINCT, etc.) guide stream optimizations.",level:"Advanced",codeExample:"Spliterator<T> part2 = part1.trySplit(); int mask = part1.characteristics();"}];function x(){return t.jsxs("div",{className:"space-y-12 px-4 md:px-8 py-8 text-slate-200 bg-slate-900 min-h-screen",children:[t.jsxs("header",{className:"space-y-4 border-b border-slate-800 pb-6",children:[t.jsxs("div",{className:"flex items-center gap-3",children:[t.jsx("span",{className:"px-3 py-1 bg-sky-500/10 text-sky-400 border border-sky-500/20 text-xs font-semibold rounded-full uppercase tracking-wider",children:"Module 007_007 · Topic 10"}),t.jsx("span",{className:"px-3 py-1 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-xs font-semibold rounded-full",children:"trySplit & Characteristics"})]}),t.jsxs("h1",{className:"text-3xl md:text-4xl font-extrabold text-white tracking-tight",children:["Spliterator Methods: ",t.jsx("code",{className:"text-emerald-400 font-mono",children:"trySplit()"})," & Bitmask Characteristics Flags"]}),t.jsxs("p",{className:"text-base md:text-lg text-slate-400 leading-relaxed max-w-4xl",children:["Dissect parallel stream partitioning: executing ",t.jsx("code",{className:"text-emerald-300 font-mono",children:"trySplit()"})," data slicing and analyzing bitmask optimization flags (",t.jsx("code",{className:"text-sky-300 font-mono",children:"ORDERED"}),", ",t.jsx("code",{className:"text-amber-300 font-mono",children:"SIZED"}),", ",t.jsx("code",{className:"text-purple-300 font-mono",children:"DISTINCT"}),", ",t.jsx("code",{className:"text-rose-300 font-mono",children:"SORTED"}),")."]})]}),t.jsxs("section",{className:"space-y-4",children:[t.jsxs("h2",{className:"text-2xl font-bold text-emerald-400 flex items-center gap-2",children:[t.jsx("span",{children:"💻"})," Hands-On Java Demo Code"]}),t.jsx(r,{fileModule:i,title:"SpliteratorMethodsAndCharacteristicsDemo.java",highlightLines:[7,10,16,17,21,22,29,32,36,37]})]}),t.jsx("section",{className:"space-y-4",children:t.jsx(e,{title:"trySplit & Characteristics FAQs",questions:o})}),t.jsx("section",{className:"space-y-4",children:t.jsx(a,{content:s,title:"Module 007_007 Topic 10: Spliterator Characteristics",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Printable Note",downloadFileName:"007_007_topic10_spliterator_characteristics_note.txt"})}),t.jsx(n,{note:"Calling 'spliterator.trySplit()' splits your collection right down the middle like cutting a cake! Thread 1 takes the first half, Thread 2 takes the second half, and both compute at double speed! — Sukanta Hui"})]})}export{x as default};
