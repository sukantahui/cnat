import{j as t}from"./vendor-react-core-Doz9nIC6.js";import{J as e}from"./JavaFileLoader-BfBG3xz_.js";import{F as r}from"./FAQTemplate-BHhlgA96.js";import{P as a}from"./PlainTextPrint-C08xhKA4.js";import{T as n}from"./TeacherSukantaHui-RpFLNJ5A.js";import"./JavaCodeBlock-BwsLxS3r.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-wprqVFW_.js";const i=`/**\r
 * Java Core Tutorial - Module 007_007: Iterators, Spliterators & Fail-Fast Mechanics\r
 * Topic 9: java.util.Spliterator (Splittable Iterator) Overview: The Engine of Java Streams\r
 * Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
 */\r
\r
package com.coderaccotax.javatutorial.collections;\r
\r
import java.util.ArrayList;\r
import java.util.List;\r
import java.util.Spliterator;\r
\r
public class SpliteratorFundamentalsOverviewDemo {\r
\r
    public static void main(String[] args) {\r
        System.out.println("==========================================================================");\r
        System.out.println(" TOPIC 9: java.util.Spliterator FUNDAMENTALS - BARRACKPORE");\r
        System.out.println("==========================================================================\\n");\r
\r
        List<String> studentList = new ArrayList<>(List.of(\r
                "Swadeep", "Tuhina", "Abhronila", "Debangshu", "Sourav", "Ananya"\r
        ));\r
\r
        // Obtaining a Spliterator from the List:\r
        Spliterator<String> spliterator = studentList.spliterator();\r
\r
        System.out.println(">>> 1. Inspecting Initial Spliterator Metrics:");\r
        System.out.println("  Estimated Size        : " + spliterator.estimateSize());\r
        System.out.println("  Exact Size if Sized   : " + spliterator.getExactSizeIfKnown());\r
        System.out.println("  Characteristics Mask  : " + spliterator.characteristics());\r
\r
        // Consuming elements one-by-one via tryAdvance():\r
        System.out.println("\\n>>> 2. Consuming Elements via tryAdvance():");\r
        spliterator.tryAdvance(name -> System.out.println("  Advance 1: " + name));\r
        spliterator.tryAdvance(name -> System.out.println("  Advance 2: " + name));\r
\r
        System.out.println("\\n>>> 3. Remaining Size after 2 Advances: " + spliterator.estimateSize());\r
\r
        System.out.println("\\n>>> WHY JAVA 8 INTRODUCED Spliterator:");\r
        System.out.println("  - 'Iterator' is inherently sequential and cannot be parallelized without locking.");\r
        System.out.println("  - 'Spliterator' (Split + Iterator) was designed specifically for Java 8 Parallel Streams!");\r
        System.out.println("  - It allows recursive partitioning ('trySplit()') so multiple CPU worker threads process separate chunks simultaneously!");\r
\r
        System.out.println("\\n==========================================================================");\r
    }\r
}`,s=`================================================================================\r
JAVA CORE TUTORIAL - QUICK REVISION GUIDE\r
Module 007_007: Iterators, Spliterators & Fail-Fast Mechanics\r
Topic 9: Spliterator Fundamentals\r
Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
================================================================================\r
\r
1. SPLITERATOR FUNDAMENTALS:\r
   - Portmanteau of 'Split' + 'Iterator'.\r
   - Engine behind Java 8 Streams and Parallel Streams.\r
   - Key methods: 'tryAdvance()', 'trySplit()', 'estimateSize()'.\r
   - Enables lock-free recursive partitioning for multi-core CPUs.\r
\r
================================================================================\r
Classroom Practice: Barrackpore Academy | Mentor: Sukanta Hui\r
================================================================================`,l=[{question:"What is 'java.util.Spliterator' and why was it introduced in Java 8 alongside the Streams API?",shortAnswer:"'Spliterator' (short for 'Splittable Iterator') is an interface introduced in Java 8 to traverse and partition sequences of elements. Unlike standard sequential iterators, Spliterators are designed specifically for parallel execution: they can recursively split off a portion of their elements into a new independent Spliterator via 'trySplit()', allowing ForkJoinPool worker threads to process chunks concurrently without locking.",explanation:"Core parallel engine powering Java 8 Streams.",hint:"Splittable Iterator; designed for parallel streams to divide data into chunks via trySplit().",level:"Intermediate",codeExample:"Spliterator<T> split = list.spliterator(); Spliterator<T> prefix = split.trySplit();"}];function h(){return t.jsxs("div",{className:"space-y-12 px-4 md:px-8 py-8 text-slate-200 bg-slate-900 min-h-screen",children:[t.jsxs("header",{className:"space-y-4 border-b border-slate-800 pb-6",children:[t.jsxs("div",{className:"flex items-center gap-3",children:[t.jsx("span",{className:"px-3 py-1 bg-sky-500/10 text-sky-400 border border-sky-500/20 text-xs font-semibold rounded-full uppercase tracking-wider",children:"Module 007_007 · Topic 9"}),t.jsx("span",{className:"px-3 py-1 bg-purple-500/10 text-purple-400 border border-purple-500/20 text-xs font-semibold rounded-full",children:"Spliterator Overview"})]}),t.jsxs("h1",{className:"text-xl sm:text-2xl md:text-3xl font-bold text-white tracking-tight",children:[t.jsx("code",{className:"text-emerald-400 font-mono",children:"java.util.Spliterator"})," Overview: The Engine of Java Streams"]}),t.jsxs("p",{className:"text-base md:text-lg text-slate-400 leading-relaxed max-w-4xl",children:["Discover modern parallel iteration: analyzing how ",t.jsx("code",{className:"text-emerald-300 font-mono",children:"Spliterator"})," bridges collections and parallel stream pipelines through partitionable traversal."]})]}),t.jsxs("section",{className:"space-y-4",children:[t.jsxs("h2",{className:"text-2xl font-bold text-emerald-400 flex items-center gap-2",children:[t.jsx("span",{children:"💻"})," Hands-On Java Demo Code"]}),t.jsx(e,{fileModule:i,title:"SpliteratorFundamentalsOverviewDemo.java",highlightLines:[7,10,16,17,21,22,23,27,28]})]}),t.jsx("section",{className:"space-y-4",children:t.jsx(r,{title:"Spliterator FAQs",questions:l})}),t.jsx("section",{className:"space-y-4",children:t.jsx(a,{content:s,title:"Module 007_007 Topic 9: Spliterator Fundamentals",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Printable Note",downloadFileName:"007_007_topic9_spliterator_fundamentals_note.txt"})}),t.jsx(n,{note:"Spliterator stands for 'Splittable Iterator'! It is the secret engine that powers Java 8 parallel streams! It splits a big list into smaller slices so all CPU cores can work in parallel! — Sukanta Hui"})]})}export{h as default};
