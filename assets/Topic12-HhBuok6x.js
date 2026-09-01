import{j as e}from"./vendor-react-core-Doz9nIC6.js";import{J as n}from"./JavaFileLoader-BfBG3xz_.js";import{F as r}from"./FAQTemplate-BHhlgA96.js";import{P as t}from"./PlainTextPrint-C08xhKA4.js";import{T as i}from"./TeacherSukantaHui-BaJcBHAy.js";import"./JavaCodeBlock-BwsLxS3r.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-8ao-0upJ.js";const a=`/**\r
 * Java Core Tutorial - Module 009_005: Stream Terminal Operations, Reductions & Short-Circuiting\r
 * Topic 12: findAny() vs findFirst() - Parallel Performance Optimization\r
 * Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
 */\r
\r
package com.coderaccotax.javatutorial.terminal;\r
\r
import java.util.List;\r
import java.util.Optional;\r
\r
public class FindAnyOptimizationDemo {\r
\r
    public static void main(String[] args) {\r
        System.out.println("==========================================================================");\r
        System.out.println(" TOPIC 12: FINDANY() VS FINDFIRST() - BARRACKPORE ACADEMY");\r
        System.out.println("==========================================================================\\n");\r
\r
        List<String> largeStudentList = List.of(\r
            "Anish Dey", "Bikram Ghosh", "Debangshu Mukherjee", \r
            "Priya Sharma", "Rahul Roy", "Sneha Sen", \r
            "Swadeep Paul", "Tuhina Das", "Abhronila Das"\r
        );\r
\r
        // 1. Sequential findAny (Behaves identically to findFirst in sequential mode)\r
        Optional<String> seqMatch = largeStudentList.stream()\r
            .filter(name -> name.startsWith("S"))\r
            .findAny();\r
        System.out.println("1. Sequential findAny (starts with 'S'): " + seqMatch.orElse("None"));\r
\r
        // 2. Parallel findAny: Returns WHICHEVER thread finishes first!\r
        System.out.println("\\n2. Running Parallel findAny (multi-core race):");\r
        Optional<String> parallelMatch = largeStudentList.parallelStream()\r
            .filter(name -> {\r
                System.out.println("   [Thread " + Thread.currentThread().getName() + "] Checking: " + name);\r
                return name.startsWith("S") || name.startsWith("D") || name.startsWith("T");\r
            })\r
            .findAny();\r
\r
        System.out.println("   --> Parallel Winner Match: " + parallelMatch.orElse("None"));\r
\r
        System.out.println("\\n>>> PERFORMANCE SUMMARY:");\r
        System.out.println("  - findFirst(): Enforces strict encounter order (costly synchronization in parallel).");\r
        System.out.println("  - findAny(): Zero synchronization barrier; returns first available match across any core.");\r
        System.out.println("==========================================================================");\r
    }\r
}\r
`,s=`================================================================================\r
JAVA CORE TUTORIAL - QUICK REVISION GUIDE\r
Module 009_005: Stream Terminal Operations, Reductions & Short-Circuiting\r
Topic 12: findAny() Optimization\r
Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
================================================================================\r
\r
1. METHOD CONTRACT:\r
   - Signature: 'Optional<T> findAny()'.\r
   - Returns an Optional describing some element of the stream, or an empty Optional if the stream is empty.\r
   - Terminal & Short-Circuiting operation.\r
\r
2. FINDFIRST VS FINDANY IN PARALLEL STREAMS:\r
   -----------------------------------------------------------------------------\r
   METHOD        ORDER GUARANTEE            PARALLEL PERFORMANCE\r
   -----------------------------------------------------------------------------\r
   findFirst()   Strict Encounter Order     Requires thread synchronization barrier\r
   findAny()     Non-deterministic (Any)    Maximum performance (lock-free winner takes all)\r
   -----------------------------------------------------------------------------\r
\r
================================================================================\r
Classroom Practice: Barrackpore Academy | Mentor: Sukanta Hui\r
================================================================================\r
`,o=[{question:"When should you prefer findAny() over findFirst()?",shortAnswer:"Prefer findAny() when operating on parallel streams where you only care about finding ANY element satisfying a condition and do not require strict encounter order, as findAny avoids synchronization bottlenecks.",explanation:"In sequential streams, findAny and findFirst produce identical results.",hint:"Use findAny in parallel streams when encounter order does not matter.",level:"Intermediate",codeExample:"list.parallelStream().filter(Item::isAvailable).findAny(); // Fast parallel search"},{question:"Does findAny() produce deterministic results across multiple runs on a parallel stream?",shortAnswer:"No. Because worker threads execute concurrently across CPU cores, different threads may complete filtering first on different runs, returning different matching elements.",explanation:"Non-determinism is allowed by design to maximize CPU throughput.",hint:"Non-deterministic in parallel streams.",level:"Intermediate",codeExample:"stream.parallel().findAny() // May return different elements across runs"}];function y(){return e.jsxs("div",{className:"space-y-12 px-4 md:px-8 py-8 text-slate-200 bg-slate-900 min-h-screen",children:[e.jsxs("header",{className:"space-y-4 border-b border-slate-800 pb-6",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"px-3 py-1 bg-sky-500/10 text-sky-400 border border-sky-500/20 text-xs font-semibold rounded-full uppercase tracking-wider",children:"Module 009_005 · Topic 12"}),e.jsx("span",{className:"px-3 py-1 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-xs font-semibold rounded-full",children:"Terminal Operations & Reductions"})]}),e.jsxs("h1",{className:"text-xl sm:text-2xl md:text-3xl font-bold text-white tracking-tight",children:[e.jsx("code",{className:"text-emerald-400 font-mono",children:"findAny()"}),": Non-Deterministic Multi-Threaded Retrieval"]}),e.jsx("p",{className:"text-base md:text-lg text-slate-400 leading-relaxed max-w-4xl",children:"Optimizing parallel searches: why findAny() outperforms findFirst() across multi-core processors when any matching element will suffice."})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsxs("h2",{className:"text-2xl font-bold text-emerald-400 flex items-center gap-2",children:[e.jsx("span",{children:"💻"})," Hands-On Java Demo Code"]}),e.jsx(n,{fileModule:a,title:"FindAnyOptimizationDemo.java",highlightLines:[18,25,34,43]})]}),e.jsx("section",{className:"space-y-4",children:e.jsx(r,{title:"Terminal Operations & Reductions FAQs",questions:o})}),e.jsx("section",{className:"space-y-4",children:e.jsx(t,{content:s,title:"Module 009_005 Topic 12: findAny() Optimization",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Printable Note",downloadFileName:"009_005_topic12_findany_optimization_note.txt"})}),e.jsx(i,{note:"In parallel streams, findAny() does not wait for earlier threads: whichever CPU core finds ANY matching element first immediately returns the result! Use findAny() for maximum parallel performance. — Sukanta Hui"})]})}export{y as default};
