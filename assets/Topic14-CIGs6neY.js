import{j as e}from"./vendor-react-core-Doz9nIC6.js";import{J as t}from"./JavaFileLoader-BfBG3xz_.js";import{F as n}from"./FAQTemplate-BHhlgA96.js";import{P as o}from"./PlainTextPrint-C08xhKA4.js";import{T as r}from"./TeacherSukantaHui-RpFLNJ5A.js";import"./JavaCodeBlock-BwsLxS3r.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-wprqVFW_.js";const l=`/**\r
 * Java Core Tutorial - Module 009_006: The Collectors Class & Downstream Reducers\r
 * Topic 14: Collectors.collectingAndThen() - Finishing Transformations\r
 * Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
 */\r
\r
package com.coderaccotax.javatutorial.collectors;\r
\r
import java.util.Collections;\r
import java.util.List;\r
import java.util.stream.Collectors;\r
\r
public class CollectingAndThenDemo {\r
\r
    public static void main(String[] args) {\r
        System.out.println("==========================================================================");\r
        System.out.println(" TOPIC 14: COLLECTINGANDTHEN() - BARRACKPORE ACADEMY");\r
        System.out.println("==========================================================================\\n");\r
\r
        List<String> studentList = List.of(\r
            "Swadeep Paul", "Tuhina Das", "Abhronila Das", "Debangshu Mukherjee"\r
        );\r
\r
        // 1. Collect to List AND THEN wrap in Collections.unmodifiableList:\r
        List<String> immutableList = studentList.stream()\r
            .filter(name -> name.contains("Das"))\r
            .collect(Collectors.collectingAndThen(\r
                Collectors.toList(),\r
                Collections::unmodifiableList\r
            ));\r
\r
        System.out.println("1. Immutable List collected: " + immutableList);\r
\r
        // 2. Collect to List AND THEN compute total character count:\r
        int totalChars = studentList.stream()\r
            .collect(Collectors.collectingAndThen(\r
                Collectors.toList(),\r
                list -> list.stream().mapToInt(String::length).sum()\r
            ));\r
\r
        System.out.println("2. Total characters across collected list: " + totalChars);\r
\r
        System.out.println("\\n==========================================================================");\r
    }\r
}\r
`,s=`================================================================================\r
JAVA CORE TUTORIAL - QUICK REVISION GUIDE\r
Module 009_006: The Collectors Class & Downstream Reducers\r
Topic 14: Collectors.collectingAndThen()\r
Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
================================================================================\r
\r
1. METHOD SIGNATURE:\r
   - '<T, A, R, RR> Collector<T, A, RR> collectingAndThen(Collector<T, A, R> downstream, Function<R, RR> finisher)'\r
\r
2. HOW IT WORKS:\r
   - Executes the 'downstream' collector normally to produce intermediate result 'R'.\r
   - Passes 'R' to the 'finisher' function to transform it into final result 'RR'.\r
\r
3. COMMON APPLICATIONS:\r
   - Creating unmodifiable collections ('Collections::unmodifiableList', 'Set::copyOf').\r
   - Unwrapping Optional from 'maxBy' / 'minBy' ('Optional::orElseThrow').\r
   - Converting domain aggregates to customized DTO wrappers.\r
\r
================================================================================\r
Classroom Practice: Barrackpore Academy | Mentor: Sukanta Hui\r
================================================================================\r
`,a=[{question:"What is the primary architectural purpose of Collectors.collectingAndThen()?",shortAnswer:"It adapts an existing Collector by applying an additional post-processing finisher function to its final result before returning it to the caller.",explanation:"Useful for converting collections into immutable views, unwrapping optionals, or applying custom decorators.",hint:"Applies a final transformation function to the collector's output.",level:"Intermediate",codeExample:"stream.collect(collectingAndThen(toList(), Collections::unmodifiableList));"},{question:"How does collectingAndThen() differ from calling .map() before collecting?",shortAnswer:".map() transforms individual stream elements one by one during streaming, whereas collectingAndThen() transforms the entire aggregated collection/result container once after all elements have been collected.",explanation:"map is an element-level intermediate step; collectingAndThen is a container-level terminal post-step.",hint:"map transforms individual elements; collectingAndThen transforms the final aggregated container.",level:"Intermediate",codeExample:"stream.map(fn) vs stream.collect(collectingAndThen(collector, finisher))"}];function x(){return e.jsxs("div",{className:"space-y-12 px-4 md:px-8 py-8 text-slate-200 bg-slate-900 min-h-screen",children:[e.jsxs("header",{className:"space-y-4 border-b border-slate-800 pb-6",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"px-3 py-1 bg-sky-500/10 text-sky-400 border border-sky-500/20 text-xs font-semibold rounded-full uppercase tracking-wider",children:"Module 009_006 · Topic 14"}),e.jsx("span",{className:"px-3 py-1 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-xs font-semibold rounded-full",children:"The Collectors Framework"})]}),e.jsxs("h1",{className:"text-xl sm:text-2xl md:text-3xl font-bold text-white tracking-tight",children:[e.jsx("code",{className:"text-emerald-400 font-mono",children:"Collectors.collectingAndThen()"}),": Post-Collection Transformations"]}),e.jsx("p",{className:"text-base md:text-lg text-slate-400 leading-relaxed max-w-4xl",children:"Applying finishing transformations: wrapping collected lists in unmodifiable views, unwrapping Optionals, and custom post-processing."})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsxs("h2",{className:"text-2xl font-bold text-emerald-400 flex items-center gap-2",children:[e.jsx("span",{children:"💻"})," Hands-On Java Demo Code"]}),e.jsx(t,{fileModule:l,title:"CollectingAndThenDemo.java",highlightLines:[18,25,34,43]})]}),e.jsx("section",{className:"space-y-4",children:e.jsx(n,{title:"Collectors Framework FAQs",questions:a})}),e.jsx("section",{className:"space-y-4",children:e.jsx(o,{content:s,title:"Module 009_006 Topic 14: collectingAndThen() Post-Processing",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Printable Note",downloadFileName:"009_006_topic14_collectingandthen_post_processing_note.txt"})}),e.jsx(r,{note:"collectingAndThen() lets you attach an extra finishing function to ANY collector: collect to a List and THEN make it unmodifiable, or collect to a maxBy Optional and THEN unwrap it! — Sukanta Hui"})]})}export{x as default};
