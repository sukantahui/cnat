import{j as e}from"./vendor-react-core-Doz9nIC6.js";import{J as t}from"./JavaFileLoader-BfBG3xz_.js";import{F as n}from"./FAQTemplate-CkSqDH4B.js";import{P as r}from"./PlainTextPrint-C08xhKA4.js";import{T as a}from"./TeacherSukantaHui-CC0AKmkm.js";import"./JavaCodeBlock-BwsLxS3r.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-BtJHuk7w.js";const i=`/**\r
 * Java Core Tutorial - Module 009_004: Stream API Pipeline & Intermediate Operations\r
 * Topic 9: Anatomy of a Stream Pipeline: Source -> Intermediate Operations -> Terminal Operation\r
 * Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
 */\r
\r
package com.coderaccotax.javatutorial.streams;\r
\r
import java.util.List;\r
\r
public class StreamPipelineAnatomyDemo {\r
\r
    public static void main(String[] args) {\r
        System.out.println("==========================================================================");\r
        System.out.println(" TOPIC 9: ANATOMY OF A STREAM PIPELINE - BARRACKPORE ACADEMY");\r
        System.out.println("==========================================================================\\n");\r
\r
        List<String> studentRoster = List.of(\r
            "Swadeep Paul", "Tuhina Das", "Abhronila Das", \r
            "Debangshu Mukherjee", "Priya Sharma", "Anish Dey"\r
        );\r
\r
        System.out.println(">>> 3-STAGE PIPELINE BREAKDOWN:");\r
        System.out.println("  1. SOURCE       : studentRoster.stream()");\r
        System.out.println("  2. INTERMEDIATE : .filter(name -> name.contains('Das'))");\r
        System.out.println("  3. INTERMEDIATE : .map(String::toUpperCase)");\r
        System.out.println("  4. TERMINAL     : .toList() (Materializes output & triggers computation)\\n");\r
\r
        // Executing the complete pipeline\r
        List<String> dasFamily = studentRoster.stream()                 // 1. SOURCE\r
            .filter(name -> name.contains("Das"))                      // 2. INTERMEDIATE (Stateless)\r
            .map(String::toUpperCase)                                 // 3. INTERMEDIATE (Stateless)\r
            .toList();                                                // 4. TERMINAL\r
\r
        System.out.println("Pipeline Execution Result: " + dasFamily);\r
\r
        System.out.println("\\n>>> PIPELINE RULES:");\r
        System.out.println("  - Must have EXACTLY 1 Source.");\r
        System.out.println("  - Can have 0, 1, or MULTIPLE Intermediate operations.");\r
        System.out.println("  - Must have EXACTLY 1 Terminal operation to trigger execution.");\r
        System.out.println("==========================================================================");\r
    }\r
}\r
`,o=`================================================================================\r
JAVA CORE TUTORIAL - QUICK REVISION GUIDE\r
Module 009_004: Stream API Pipeline & Intermediate Operations\r
Topic 9: Anatomy of a Stream Pipeline\r
Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
================================================================================\r
\r
1. THE THREE PIPELINE STAGES:\r
   STAGE 1: SOURCE\r
   - Ingestion point (Collection, Array, I/O channel, Generator, Range).\r
   \r
   STAGE 2: INTERMEDIATE OPERATIONS (0 or More)\r
   - Transforms one stream into another stream.\r
   - Always LAZY (no work is performed until terminal operation is reached).\r
   - Examples: filter(), map(), flatMap(), distinct(), sorted(), peek(), limit(), skip().\r
\r
   STAGE 3: TERMINAL OPERATION (Exactly 1)\r
   - Consumes the stream pipeline and produces a non-stream result (List, int, void, Optional).\r
   - Triggers the actual traversal and processing of elements.\r
   - Examples: forEach(), collect(), toList(), count(), reduce(), min(), max(), findFirst().\r
\r
================================================================================\r
Classroom Practice: Barrackpore Academy | Mentor: Sukanta Hui\r
================================================================================\r
`,s=[{question:"Can a Stream pipeline exist without any intermediate operations?",shortAnswer:"Yes! A pipeline can go directly from a Source to a Terminal Operation (e.g. list.stream().forEach(System.out::println) or list.stream().count()).",explanation:"Zero or more intermediate operations are permitted between source and terminal.",hint:"Intermediate operations are optional; source and terminal operations are mandatory.",level:"Beginner",codeExample:"long totalCount = students.stream().count(); // 0 intermediate operations"},{question:"What happens if a stream pipeline defines intermediate operations but never calls a terminal operation?",shortAnswer:"Absolutely nothing executes! The intermediate operations remain lazy declarations, no elements are pulled from the source, and zero CPU cycles are spent on computations.",explanation:"Terminal operations act as the ignition key that starts the data processing engine.",hint:"Without a terminal operation, the pipeline is inert and never runs.",level:"Beginner",codeExample:"Stream<String> s = list.stream().filter(x -> { System.out.println(x); return true; }); // Nothing printed!"}];function E(){return e.jsxs("div",{className:"space-y-12 px-4 md:px-8 py-8 text-slate-200 bg-slate-900 min-h-screen",children:[e.jsxs("header",{className:"space-y-4 border-b border-slate-800 pb-6",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"px-3 py-1 bg-sky-500/10 text-sky-400 border border-sky-500/20 text-xs font-semibold rounded-full uppercase tracking-wider",children:"Module 009_004 · Topic 9"}),e.jsx("span",{className:"px-3 py-1 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-xs font-semibold rounded-full",children:"Stream API Pipelines"})]}),e.jsxs("h1",{className:"text-3xl md:text-4xl font-extrabold text-white tracking-tight",children:["Anatomy of a ",e.jsx("code",{className:"text-emerald-400 font-mono",children:"Stream Pipeline"}),": Source, Intermediate & Terminal Operations"]}),e.jsx("p",{className:"text-base md:text-lg text-slate-400 leading-relaxed max-w-4xl",children:"Deconstructing the 3-phase lifecycle of stream execution: data source ingestion, declarative intermediate transformations, and terminal materialization."})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsxs("h2",{className:"text-2xl font-bold text-emerald-400 flex items-center gap-2",children:[e.jsx("span",{children:"💻"})," Hands-On Java Demo Code"]}),e.jsx(t,{fileModule:i,title:"StreamPipelineAnatomyDemo.java",highlightLines:[18,25,32,39]})]}),e.jsx("section",{className:"space-y-4",children:e.jsx(n,{title:"Stream API Pipeline FAQs",questions:s})}),e.jsx("section",{className:"space-y-4",children:e.jsx(r,{content:o,title:"Module 009_004 Topic 9: Anatomy of a Stream Pipeline",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Printable Note",downloadFileName:"009_004_topic9_anatomy_of_stream_pipeline_note.txt"})}),e.jsx(a,{note:"A stream pipeline is like an industrial assembly line: the raw materials enter at the Source, go through various transformation and sorting stations (Intermediate Operations), and the final product is packaged and shipped at the Terminal Station! — Sukanta Hui"})]})}export{E as default};
