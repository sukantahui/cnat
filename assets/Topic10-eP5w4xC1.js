import{j as e}from"./vendor-react-core-Doz9nIC6.js";import{J as t}from"./JavaFileLoader-BfBG3xz_.js";import{F as n}from"./FAQTemplate-CkSqDH4B.js";import{P as a}from"./PlainTextPrint-C08xhKA4.js";import{T as i}from"./TeacherSukantaHui-CyIG3xbg.js";import"./JavaCodeBlock-BwsLxS3r.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-CIaKtAt4.js";const r=`/**\r
 * Java Core Tutorial - Module 009_004: Stream API Pipeline & Intermediate Operations\r
 * Topic 10: Lazy Evaluation Mechanics & Loop Fusion\r
 * Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
 */\r
\r
package com.coderaccotax.javatutorial.streams;\r
\r
import java.util.List;\r
import java.util.Optional;\r
\r
public class LazyEvaluationDemo {\r
\r
    public static void main(String[] args) {\r
        System.out.println("==========================================================================");\r
        System.out.println(" TOPIC 10: LAZY EVALUATION & SHORT-CIRCUITING - BARRACKPORE");\r
        System.out.println("==========================================================================\\n");\r
\r
        List<String> studentNames = List.of(\r
            "Anish", "Swadeep Paul", "Tuhina Das", \r
            "Abhronila Das", "Debangshu Mukherjee", "Priya"\r
        );\r
\r
        System.out.println(">>> STEP 1: Building lazy stream (Filtering length > 6 and Mapping to Upper)...");\r
        // Intermediate operations only build the execution graph:\r
        var pipeline = studentNames.stream()\r
            .filter(name -> {\r
                System.out.println("   [FILTER EVALUATED] Testing: " + name);\r
                return name.length() > 6;\r
            })\r
            .map(name -> {\r
                System.out.println("   [MAP EVALUATED] Transforming: " + name);\r
                return name.toUpperCase();\r
            });\r
\r
        System.out.println(">>> STEP 2: Notice NOTHING was printed above during declaration!");\r
        System.out.println(">>> STEP 3: Invoking short-circuiting terminal operation: findFirst()...\\n");\r
\r
        Optional<String> firstMatch = pipeline.findFirst();\r
\r
        System.out.println("\\n>>> RESULT: " + firstMatch.orElse("None"));\r
        System.out.println("\\n>>> OBSERVATION:");\r
        System.out.println("  - Notice that 'Tuhina Das', 'Abhronila Das', and 'Debangshu Mukherjee' were NEVER TOUCHED!");\r
        System.out.println("  - Execution halted the moment findFirst() satisfied its condition with 'Swadeep Paul'.");\r
        System.out.println("==========================================================================");\r
    }\r
}\r
`,s=`================================================================================\r
JAVA CORE TUTORIAL - QUICK REVISION GUIDE\r
Module 009_004: Stream API Pipeline & Intermediate Operations\r
Topic 10: Lazy Evaluation & Short-Circuit Optimization\r
Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
================================================================================\r
\r
1. WHAT IS LAZY EVALUATION:\r
   - Intermediate operations are not executed when defined.\r
   - They register a series of transformation stages in an internal linked pipeline.\r
   - Computation begins only when a terminal operation is called.\r
\r
2. LOOP FUSION (Vertical Pipeline Traversal):\r
   - Rather than making 3 separate horizontal passes over all N elements (pass 1 for filter,\r
     pass 2 for map, pass 3 for limit), elements are pushed individually through the\r
     entire vertical pipeline one at a time.\r
\r
3. SHORT-CIRCUITING OPTIMIZATION:\r
   - Operations like 'limit(n)', 'findFirst()', 'findAny()', 'anyMatch()', 'allMatch()'\r
     can terminate stream traversal immediately without evaluating remaining elements.\r
   - Allows processing infinite streams safely.\r
\r
================================================================================\r
Classroom Practice: Barrackpore Academy | Mentor: Sukanta Hui\r
================================================================================\r
`,o=[{question:"What is 'Loop Fusion' in the Java Stream API?",shortAnswer:"Loop Fusion is a stream engine optimization where multiple chained intermediate operations (e.g. filter, map, filter) are merged into a single pass per element rather than executing multiple iterations over the whole collection.",explanation:"This drastically reduces memory allocation and enhances CPU cache locality.",hint:"Fusing multiple operations into a single pass per element.",level:"Intermediate",codeExample:"list.stream().filter(f).map(m).findFirst(); // Only evaluates elements until 1st match passes both f and m!"},{question:"Which stream operations qualify as 'short-circuiting' operations?",shortAnswer:"Intermediate short-circuiting: limit(), takeWhile() (Java 9). Terminal short-circuiting: findFirst(), findAny(), anyMatch(), allMatch(), noneMatch().",explanation:"Short-circuiting operations can finish processing before inspecting the entire stream source.",hint:"Operations that can finish without inspecting all source elements.",level:"Intermediate",codeExample:"Stream.iterate(1, n -> n + 1).limit(5).toList(); // Short-circuits infinite generator at 5 elements."}];function g(){return e.jsxs("div",{className:"space-y-12 px-4 md:px-8 py-8 text-slate-200 bg-slate-900 min-h-screen",children:[e.jsxs("header",{className:"space-y-4 border-b border-slate-800 pb-6",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"px-3 py-1 bg-sky-500/10 text-sky-400 border border-sky-500/20 text-xs font-semibold rounded-full uppercase tracking-wider",children:"Module 009_004 · Topic 10"}),e.jsx("span",{className:"px-3 py-1 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-xs font-semibold rounded-full",children:"Stream API Pipelines"})]}),e.jsxs("h1",{className:"text-3xl md:text-4xl font-extrabold text-white tracking-tight",children:["Understanding ",e.jsx("code",{className:"text-emerald-400 font-mono",children:"Lazy Evaluation"})," & Short-Circuit Optimization"]}),e.jsx("p",{className:"text-base md:text-lg text-slate-400 leading-relaxed max-w-4xl",children:"Seeing under the hood of Java Streams: how loop fusion and short-circuiting prevent unnecessary computations and redundant loops."})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsxs("h2",{className:"text-2xl font-bold text-emerald-400 flex items-center gap-2",children:[e.jsx("span",{children:"💻"})," Hands-On Java Demo Code"]}),e.jsx(t,{fileModule:r,title:"LazyEvaluationDemo.java",highlightLines:[18,25,34,42]})]}),e.jsx("section",{className:"space-y-4",children:e.jsx(n,{title:"Stream API Pipeline FAQs",questions:o})}),e.jsx("section",{className:"space-y-4",children:e.jsx(a,{content:s,title:"Module 009_004 Topic 10: Lazy Evaluation Mechanics",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Printable Note",downloadFileName:"009_004_topic10_lazy_evaluation_mechanics_note.txt"})}),e.jsx(i,{note:"Notice how only the exact required elements travel through the filter and map pipeline! Streams do not loop over the entire list for filter and then again for map; they fuse operations into a single vertical pass per element. — Sukanta Hui"})]})}export{g as default};
