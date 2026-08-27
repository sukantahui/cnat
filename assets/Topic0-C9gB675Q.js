import{j as e}from"./vendor-react-core-Doz9nIC6.js";import{J as t}from"./JavaFileLoader-BfBG3xz_.js";import{F as n}from"./FAQTemplate-CkSqDH4B.js";import{P as r}from"./PlainTextPrint-C08xhKA4.js";import{T as a}from"./TeacherSukantaHui-CyIG3xbg.js";import"./JavaCodeBlock-BwsLxS3r.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-CIaKtAt4.js";const i=`/**\r
 * Java Core Tutorial - Module 009_005: Stream Terminal Operations, Reductions & Short-Circuiting\r
 * Topic 0: What is a Terminal Operation? Triggering Pipeline Execution\r
 * Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
 */\r
\r
package com.coderaccotax.javatutorial.terminal;\r
\r
import java.util.List;\r
\r
public class WhatIsTerminalOperationDemo {\r
\r
    public static void main(String[] args) {\r
        System.out.println("==========================================================================");\r
        System.out.println(" TOPIC 0: WHAT IS A TERMINAL OPERATION? - BARRACKPORE ACADEMY");\r
        System.out.println("==========================================================================\\n");\r
\r
        List<String> studentList = List.of(\r
            "Swadeep Paul", "Tuhina Das", "Abhronila Das", "Debangshu Mukherjee"\r
        );\r
\r
        // 1. Defining intermediate operations without a terminal operation\r
        System.out.println(">>> STEP 1: Creating intermediate stream definition...");\r
        var inertStream = studentList.stream()\r
            .filter(name -> {\r
                System.out.println("   [FILTER LOG] Testing: " + name);\r
                return name.startsWith("S") || name.startsWith("T");\r
            })\r
            .map(name -> {\r
                System.out.println("   [MAP LOG] Transforming: " + name);\r
                return name.toUpperCase();\r
            });\r
\r
        System.out.println(">>> STEP 2: Notice that NO logs appeared above! The pipeline is inert.");\r
\r
        // 2. Calling terminal operation: triggers full execution and produces output\r
        System.out.println("\\n>>> STEP 3: Calling Terminal Operation '.forEach()':");\r
        inertStream.forEach(name -> System.out.println("   --> [TERMINAL CONSUMED]: " + name));\r
\r
        // 3. Demonstrating that the stream is now CLOSED\r
        System.out.println("\\n>>> STEP 4: Attempting to call another terminal operation on the same stream:");\r
        try {\r
            inertStream.count();\r
        } catch (IllegalStateException ex) {\r
            System.err.println("   [CAUGHT EXPECTED EXCEPTION]: " + ex.getMessage());\r
            System.out.println("   --> Streams cannot be reused after a terminal operation has executed.");\r
        }\r
\r
        System.out.println("\\n==========================================================================");\r
    }\r
}\r
`,o=`================================================================================\r
JAVA CORE TUTORIAL - QUICK REVISION GUIDE\r
Module 009_005: Stream Terminal Operations, Reductions & Short-Circuiting\r
Topic 0: What is a Terminal Operation\r
Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
================================================================================\r
\r
1. TERMINAL OPERATION CORE DEFINITION:\r
   - A terminal operation is the final method invoked on a Stream pipeline.\r
   - It triggers element traversal, executes all intermediate operations (filter, map, etc.),\r
     and produces either a non-stream result (e.g. List, long, boolean, Optional) or a side-effect (void).\r
   - Once executed, the stream is considered CONSUMED and CLOSED.\r
\r
2. CATEGORIES OF TERMINAL OPERATIONS:\r
   - Iteration / Side-effects: 'forEach()', 'forEachOrdered()'.\r
   - Reductions & Aggregations: 'reduce()', 'collect()', 'count()', 'min()', 'max()', 'sum()', 'average()'.\r
   - Search & Match: 'anyMatch()', 'allMatch()', 'noneMatch()', 'findFirst()', 'findAny()'.\r
   - Array Conversion: 'toArray()'.\r
\r
================================================================================\r
Classroom Practice: Barrackpore Academy | Mentor: Sukanta Hui\r
================================================================================\r
`,s=[{question:"What is the primary role of a terminal operation in a Java Stream pipeline?",shortAnswer:"A terminal operation initiates stream traversal, triggers the deferred execution of all intermediate operations, gathers the computed result (or executes a side-effect), and closes the stream.",explanation:"Without a terminal operation, intermediate operations are never executed.",hint:"Ignites execution, consumes the stream, and produces a final non-stream result or side-effect.",level:"Beginner",codeExample:"long count = list.stream().filter(s -> s.length() > 5).count(); // count() is terminal"},{question:"Can a stream have more than one terminal operation?",shortAnswer:"No. A stream can have at most one terminal operation. After it executes, the stream instance is closed and attempting any further operations throws an IllegalStateException.",explanation:"To process the underlying data again, a new Stream instance must be created from the source.",hint:"Exactly 1 terminal operation per stream instance.",level:"Beginner",codeExample:"Stream<String> s = list.stream();\\ns.toList();\\ns.count(); // Throws IllegalStateException!"}];function g(){return e.jsxs("div",{className:"space-y-12 px-4 md:px-8 py-8 text-slate-200 bg-slate-900 min-h-screen",children:[e.jsxs("header",{className:"space-y-4 border-b border-slate-800 pb-6",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"px-3 py-1 bg-sky-500/10 text-sky-400 border border-sky-500/20 text-xs font-semibold rounded-full uppercase tracking-wider",children:"Module 009_005 · Topic 0"}),e.jsx("span",{className:"px-3 py-1 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-xs font-semibold rounded-full",children:"Terminal Operations & Reductions"})]}),e.jsxs("h1",{className:"text-3xl md:text-4xl font-extrabold text-white tracking-tight",children:["What is a ",e.jsx("code",{className:"text-emerald-400 font-mono",children:"Terminal Operation"}),"? Triggering Pipeline Execution"]}),e.jsx("p",{className:"text-base md:text-lg text-slate-400 leading-relaxed max-w-4xl",children:"The ignition switch of the Stream pipeline: consuming elements, producing results or side-effects, and closing the stream lifecycle."})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsxs("h2",{className:"text-2xl font-bold text-emerald-400 flex items-center gap-2",children:[e.jsx("span",{children:"💻"})," Hands-On Java Demo Code"]}),e.jsx(t,{fileModule:i,title:"WhatIsTerminalOperationDemo.java",highlightLines:[18,25,34,43]})]}),e.jsx("section",{className:"space-y-4",children:e.jsx(n,{title:"Terminal Operations & Reductions FAQs",questions:s})}),e.jsx("section",{className:"space-y-4",children:e.jsx(r,{content:o,title:"Module 009_005 Topic 0: What is a Terminal Operation",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Printable Note",downloadFileName:"009_005_topic0_what_is_terminal_operation_note.txt"})}),e.jsx(a,{note:"Without a terminal operation, a stream pipeline is just an idle blueprint on paper. The moment you call a terminal method like forEach(), collect(), or count(), the JVM starts pulling data through the pipeline! — Sukanta Hui"})]})}export{g as default};
