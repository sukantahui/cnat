import{j as e}from"./vendor-react-core-Doz9nIC6.js";import{J as t}from"./JavaFileLoader-BfBG3xz_.js";import{F as n}from"./FAQTemplate-CkSqDH4B.js";import{P as r}from"./PlainTextPrint-C08xhKA4.js";import{T as a}from"./TeacherSukantaHui-CyIG3xbg.js";import"./JavaCodeBlock-BwsLxS3r.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-CIaKtAt4.js";const s=`/**\r
 * Java Core Tutorial - Module 009_004: Stream API Pipeline & Intermediate Operations\r
 * Topic 1: Streams vs Collections: Architecture & Lifecycle Comparison\r
 * Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
 */\r
\r
package com.coderaccotax.javatutorial.streams;\r
\r
import java.util.ArrayList;\r
import java.util.List;\r
import java.util.stream.Stream;\r
\r
public class StreamsVsCollectionsDemo {\r
\r
    public static void main(String[] args) {\r
        System.out.println("==========================================================================");\r
        System.out.println(" TOPIC 1: STREAMS VS COLLECTIONS - BARRACKPORE ACADEMY");\r
        System.out.println("==========================================================================\\n");\r
\r
        // 1. COLLECTION: In-memory data structure, stores elements eagerly\r
        List<String> centers = new ArrayList<>();\r
        centers.add("Barrackpore");\r
        centers.add("Naihati");\r
        centers.add("Shyamnagar");\r
        centers.add("Ichapur");\r
        System.out.println("1. Collection in Memory (Eager Storage): " + centers);\r
\r
        // 2. STREAM: Transient computation pipeline (stores NO elements)\r
        Stream<String> centerStream = centers.stream()\r
            .map(String::toUpperCase);\r
\r
        System.out.println("2. Stream created: Centers mapped to upper-case (computation not yet triggered)");\r
\r
        // 3. Terminal operation triggers execution and consumes stream\r
        System.out.print("3. Executing Terminal Operation (forEach): ");\r
        centerStream.forEach(s -> System.out.print(s + " | "));\r
        System.out.println();\r
\r
        // 4. ATTEMPTING REUSE: Streams CANNOT be consumed twice!\r
        System.out.println("\\n4. Attempting to reuse the consumed stream:");\r
        try {\r
            centerStream.forEach(System.out::println);\r
        } catch (IllegalStateException ex) {\r
            System.err.println("   [CAUGHT EXPECTED EXCEPTION]: " + ex.getMessage());\r
            System.out.println("   --> Streams are single-use disposable pipelines! Once closed, you must obtain a new stream.");\r
        }\r
\r
        System.out.println("\\n==========================================================================");\r
    }\r
}\r
`,o=`================================================================================\r
JAVA CORE TUTORIAL - QUICK REVISION GUIDE\r
Module 009_004: Stream API Pipeline & Intermediate Operations\r
Topic 1: Streams vs Collections\r
Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
================================================================================\r
\r
1. ARCHITECTURAL COMPARISON MATRIX:\r
   -----------------------------------------------------------------------------\r
   FEATURE              COLLECTION                       STREAM\r
   -----------------------------------------------------------------------------\r
   Primary Role         Data storage in memory          Data computation & processing\r
   Evaluation           Eager (computed on addition)    Lazy (computed on terminal call)\r
   Iteration            External (for, Iterator)        Internal (forEach, map, filter)\r
   Reusability          Reusable infinite times         Single-use only (closed upon termination)\r
   Mutation             Mutates internal structure      Non-mutating (pure functional)\r
   Memory Footprint     Proportional to element count   Near-zero (pulls on demand)\r
   -----------------------------------------------------------------------------\r
\r
2. CRITICAL PITFALL:\r
   - Re-using a consumed Stream throws 'java.lang.IllegalStateException: stream has already been operated upon or closed'.\r
   - Solution: Obtain a fresh stream via 'collection.stream()' for each pipeline.\r
\r
================================================================================\r
Classroom Practice: Barrackpore Academy | Mentor: Sukanta Hui\r
================================================================================\r
`,i=[{question:"Why does calling a terminal operation twice on the same Stream instance throw an IllegalStateException?",shortAnswer:"Streams are single-use consumable pipelines designed around lazy evaluation and internal iteration. Once a terminal operation executes, the pipeline lifecycle finishes and its elements are fully consumed, rendering the instance closed.",explanation:"Unlike collections which store elements persistently, streams are transient conduits of data.",hint:"Streams are single-use pipelines, not reusable data structures.",level:"Intermediate",codeExample:"Stream<String> s = list.stream();\\ns.forEach(System.out::println);\\ns.forEach(System.out::println); // Throws IllegalStateException!"},{question:"Explain the difference between Internal Iteration (Streams) and External Iteration (Collections).",shortAnswer:"External Iteration requires the client code to explicitly pull elements using for-each loops or Iterators, controlling iteration order and state. Internal Iteration delegates traversal to the Stream runtime, enabling automated parallelization and pipeline optimization.",explanation:"Internal iteration allows the JVM to optimize pipeline loops, eliminate redundant passes, and distribute chunks across CPU cores.",hint:"External: you write the loop; Internal: Java manages iteration and optimization.",level:"Beginner",codeExample:"// External:\\nfor (String item : list) { ... }\\n// Internal:\\nlist.stream().forEach(item -> ...);"}];function S(){return e.jsxs("div",{className:"space-y-12 px-4 md:px-8 py-8 text-slate-200 bg-slate-900 min-h-screen",children:[e.jsxs("header",{className:"space-y-4 border-b border-slate-800 pb-6",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"px-3 py-1 bg-sky-500/10 text-sky-400 border border-sky-500/20 text-xs font-semibold rounded-full uppercase tracking-wider",children:"Module 009_004 · Topic 1"}),e.jsx("span",{className:"px-3 py-1 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-xs font-semibold rounded-full",children:"Stream API Pipelines"})]}),e.jsxs("h1",{className:"text-3xl md:text-4xl font-extrabold text-white tracking-tight",children:[e.jsx("code",{className:"text-emerald-400 font-mono",children:"Streams vs Collections"}),": Data in Memory vs Computational Pipelines"]}),e.jsx("p",{className:"text-base md:text-lg text-slate-400 leading-relaxed max-w-4xl",children:"Demystifying the architectural divide: Collections store data structures in memory, whereas Streams are transient computational views over data."})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsxs("h2",{className:"text-2xl font-bold text-emerald-400 flex items-center gap-2",children:[e.jsx("span",{children:"💻"})," Hands-On Java Demo Code"]}),e.jsx(t,{fileModule:s,title:"StreamsVsCollectionsDemo.java",highlightLines:[17,24,30,36,42]})]}),e.jsx("section",{className:"space-y-4",children:e.jsx(n,{title:"Stream API Pipeline FAQs",questions:i})}),e.jsx("section",{className:"space-y-4",children:e.jsx(r,{content:o,title:"Module 009_004 Topic 1: Streams vs Collections",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Printable Note",downloadFileName:"009_004_topic1_streams_vs_collections_note.txt"})}),e.jsx(a,{note:"Think of a DVD collection versus a YouTube video stream: the DVD holds physical data on disk (Collection), whereas YouTube streams frames on demand as you watch (Stream) without storing everything at once! — Sukanta Hui"})]})}export{S as default};
