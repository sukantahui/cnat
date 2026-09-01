import{j as e}from"./vendor-react-core-Doz9nIC6.js";import{J as t}from"./JavaFileLoader-BfBG3xz_.js";import{F as r}from"./FAQTemplate-BHhlgA96.js";import{P as n}from"./PlainTextPrint-C08xhKA4.js";import{T as a}from"./TeacherSukantaHui-BaJcBHAy.js";import"./JavaCodeBlock-BwsLxS3r.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-8ao-0upJ.js";const i=`/**\r
 * Java Core Tutorial - Module 009_004: Stream API Pipeline & Intermediate Operations\r
 * Topic 2: The Three Core Stream Characteristics: Non-Mutating, Lazy, Single-Pass\r
 * Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
 */\r
\r
package com.coderaccotax.javatutorial.streams;\r
\r
import java.util.ArrayList;\r
import java.util.List;\r
\r
public class StreamCharacteristicsDemo {\r
\r
    public static void main(String[] args) {\r
        System.out.println("==========================================================================");\r
        System.out.println(" TOPIC 2: CORE STREAM CHARACTERISTICS - BARRACKPORE");\r
        System.out.println("==========================================================================\\n");\r
\r
        List<String> originalStudents = new ArrayList<>(List.of(\r
            "Swadeep Paul", "Tuhina Das", "Abhronila Das"\r
        ));\r
\r
        // --- CHARACTERISTIC 1: NON-MUTATING (Source Immutability) ---\r
        System.out.println("1. [NON-MUTATING] Original list before stream: " + originalStudents);\r
        List<String> uppercaseList = originalStudents.stream()\r
            .map(String::toUpperCase)\r
            .toList();\r
        System.out.println("   Transformed Stream Result: " + uppercaseList);\r
        System.out.println("   Original list after stream (UNTOUCHED): " + originalStudents);\r
\r
        // --- CHARACTERISTIC 2: LAZY EVALUATION ---\r
        System.out.println("\\n2. [LAZY EVALUATION] Setting up pipeline with logging peek:");\r
        var lazyStream = originalStudents.stream()\r
            .filter(name -> {\r
                System.out.println("   [DEBUG EVALUATED] Filtering: " + name);\r
                return name.startsWith("T");\r
            });\r
\r
        System.out.println("   --> Pipeline assembled! Notice NO logs printed above yet.");\r
        System.out.println("   --> Invoking terminal operation now...");\r
        long count = lazyStream.count(); // Terminal operation triggers execution\r
        System.out.println("   --> Terminal result count: " + count);\r
\r
        // --- CHARACTERISTIC 3: CONSUMABLE ONLY ONCE ---\r
        System.out.println("\\n3. [CONSUMABLE ONCE] Pipeline cannot be restarted once consumed.");\r
        System.out.println("==========================================================================");\r
    }\r
}\r
`,s=`================================================================================\r
JAVA CORE TUTORIAL - QUICK REVISION GUIDE\r
Module 009_004: Stream API Pipeline & Intermediate Operations\r
Topic 2: Core Stream Characteristics\r
Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
================================================================================\r
\r
1. THE THREE CORE STREAM CHARACTERISTICS:\r
   A. NON-MUTATING (Source Preservation):\r
      - Stream operations never modify the underlying source collection or array.\r
      - Produces new results or views, adhering to pure functional immutability.\r
\r
   B. LAZY EVALUATION (Deferred Execution):\r
      - Intermediate operations (filter, map, sorted) do NOT perform any computations\r
        at the moment they are declared.\r
      - Execution begins ONLY when a terminal operation (collect, count, forEach) is called.\r
      - Enables query optimizations (loop fusion, short-circuiting).\r
\r
   C. CONSUMABLE ONLY ONCE (Single-Pass Lifecycle):\r
      - A stream instance is traversed once and closed immediately upon terminal completion.\r
      - Attempting to invoke further operations triggers IllegalStateException.\r
\r
================================================================================\r
Classroom Practice: Barrackpore Academy | Mentor: Sukanta Hui\r
================================================================================\r
`,o=[{question:"What does it mean that Java Streams are 'Non-Mutating'?",shortAnswer:"A stream reads data from its underlying source but never modifies the original collection, array, or I/O channel. All transformations result in new intermediate streams or newly collected result structures.",explanation:"Non-mutation prevents race conditions in multithreaded environments and maintains functional purity.",hint:"Source data remains untouched; new results are produced.",level:"Beginner",codeExample:"List<String> src = List.of('a', 'b');\\nList<String> upper = src.stream().map(String::toUpperCase).toList();\\n// src is still ['a', 'b']!"},{question:"Why is lazy evaluation crucial for Stream API performance and memory efficiency?",shortAnswer:"Lazy evaluation allows the JVM to fuse multiple intermediate operations into a single pass over data, skip processing unneeded elements via short-circuiting (e.g. limit(5) or findFirst()), and avoid creating wasteful intermediate collection buffers.",explanation:"Without laziness, chaining 4 stream operations would generate 4 intermediate lists in memory.",hint:"Enables loop fusion, short-circuiting, and eliminates temporary buffer allocations.",level:"Intermediate",codeExample:"Stream.iterate(1, n → n + 1).filter(n → n % 2 == 0).limit(3).forEach(System.out::println);"}];function g(){return e.jsxs("div",{className:"space-y-12 px-4 md:px-8 py-8 text-slate-200 bg-slate-900 min-h-screen",children:[e.jsxs("header",{className:"space-y-4 border-b border-slate-800 pb-6",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"px-3 py-1 bg-sky-500/10 text-sky-400 border border-sky-500/20 text-xs font-semibold rounded-full uppercase tracking-wider",children:"Module 009_004 · Topic 2"}),e.jsx("span",{className:"px-3 py-1 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-xs font-semibold rounded-full",children:"Stream API Pipelines"})]}),e.jsxs("h1",{className:"text-xl sm:text-2xl md:text-3xl font-bold text-white tracking-tight",children:["Core ",e.jsx("code",{className:"text-emerald-400 font-mono",children:"Stream Characteristics"}),": Non-Mutating, Lazy & Consumable Once"]}),e.jsx("p",{className:"text-base md:text-lg text-slate-400 leading-relaxed max-w-4xl",children:"The three golden pillars of Java Streams: immutability of source data, deferred computation, and single-pass lifecycle."})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsxs("h2",{className:"text-2xl font-bold text-emerald-400 flex items-center gap-2",children:[e.jsx("span",{children:"💻"})," Hands-On Java Demo Code"]}),e.jsx(t,{fileModule:i,title:"StreamCharacteristicsDemo.java",highlightLines:[18,22,28,33,40]})]}),e.jsx("section",{className:"space-y-4",children:e.jsx(r,{title:"Stream API Pipeline FAQs",questions:o})}),e.jsx("section",{className:"space-y-4",children:e.jsx(n,{content:s,title:"Module 009_004 Topic 2: Core Stream Characteristics",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Printable Note",downloadFileName:"009_004_topic2_core_stream_characteristics_note.txt"})}),e.jsx(a,{note:"Always verify that your original list is untouched after a stream operation! If you need modified data, collect it into a brand new collection. Streams never tamper with source truth. — Sukanta Hui"})]})}export{g as default};
