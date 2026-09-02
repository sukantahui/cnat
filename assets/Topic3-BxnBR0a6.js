import{j as e}from"./vendor-react-core-Doz9nIC6.js";import{J as t}from"./JavaFileLoader-BfBG3xz_.js";import{F as n}from"./FAQTemplate-BHhlgA96.js";import{P as r}from"./PlainTextPrint-C08xhKA4.js";import{T as a}from"./TeacherSukantaHui-RpFLNJ5A.js";import"./JavaCodeBlock-BwsLxS3r.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-wprqVFW_.js";const s=`/**\r
 * Java Core Tutorial - Module 009_005: Stream Terminal Operations, Reductions & Short-Circuiting\r
 * Topic 3: 1-Argument reduce(BinaryOperator<T>) - Optional Accumulations\r
 * Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
 */\r
\r
package com.coderaccotax.javatutorial.terminal;\r
\r
import java.util.List;\r
import java.util.Optional;\r
\r
public class OneArgumentReduceDemo {\r
\r
    public static void main(String[] args) {\r
        System.out.println("==========================================================================");\r
        System.out.println(" TOPIC 3: 1-ARGUMENT REDUCE(BINARYOPERATOR) - BARRACKPORE");\r
        System.out.println("==========================================================================\\n");\r
\r
        List<String> studentNames = List.of(\r
            "Swadeep Paul", "Tuhina Das", "Abhronila Das", "Debangshu Mukherjee"\r
        );\r
\r
        // 1. Finding Longest Student Name via 1-Arg reduce\r
        Optional<String> longestName = studentNames.stream()\r
            .reduce((name1, name2) -> name1.length() >= name2.length() ? name1 : name2);\r
\r
        System.out.println("1. Longest Name: " + longestName.orElse("No students found"));\r
\r
        // 2. Finding Minimum Score via 1-Arg reduce\r
        List<Double> scores = List.of(88.5, 94.0, 76.5, 91.0);\r
        Optional<Double> minScore = scores.stream()\r
            .reduce(Double::min);\r
\r
        System.out.println("2. Minimum Score: " + minScore.orElse(0.0));\r
\r
        // 3. Behavior on an EMPTY stream: returns Optional.empty()\r
        List<Double> emptyList = List.of();\r
        Optional<Double> emptyResult = emptyList.stream()\r
            .reduce(Double::min);\r
\r
        System.out.println("3. Empty Stream Reduce Result: " + emptyResult);\r
        System.out.println("   - Is present: " + emptyResult.isPresent());\r
        System.out.println("   - orElse value: " + emptyResult.orElse(-1.0));\r
\r
        System.out.println("\\n==========================================================================");\r
    }\r
}\r
`,i=`================================================================================\r
JAVA CORE TUTORIAL - QUICK REVISION GUIDE\r
Module 009_005: Stream Terminal Operations, Reductions & Short-Circuiting\r
Topic 3: 1-Argument reduce(BinaryOperator)\r
Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
================================================================================\r
\r
1. METHOD SIGNATURE:\r
   - 'Optional<T> reduce(BinaryOperator<T> accumulator)'\r
\r
2. EXECUTION SEMANTICS:\r
   - If stream is empty → returns 'Optional.empty()'.\r
   - If stream has 1 element → returns 'Optional.of(element)' without invoking accumulator.\r
   - If stream has N elements → first element is used as initial accumulator, then combined\r
     with remaining N-1 elements.\r
\r
3. COMMON USE CASES:\r
   - Finding custom min/max without requiring Comparator.\r
   - Finding the longest/shortest string.\r
   - Mathematical reductions when no neutral identity exists.\r
\r
================================================================================\r
Classroom Practice: Barrackpore Academy | Mentor: Sukanta Hui\r
================================================================================\r
`,o=[{question:"How many times is the accumulator lambda invoked in a 1-argument reduce() for a stream with N elements?",shortAnswer:"The accumulator lambda is invoked exactly (N - 1) times because the very first element serves as the initial accumulator state.",explanation:"For a stream of 1 element, the accumulator is invoked 0 times and the element is returned directly in an Optional.",hint:"Invoked N - 1 times.",level:"Intermediate",codeExample:"List.of(10).stream().reduce((a, b) → a + b); // Accumulator called 0 times, returns Optional.of(10)"},{question:"What is the primary difference between 1-argument reduce and 2-argument reduce?",shortAnswer:"1-argument reduce takes no identity and returns Optional<T> (to safely represent empty streams), while 2-argument reduce takes an initial identity T and directly returns T.",explanation:"The identity value in 2-argument reduce serves as the default result for empty streams.",hint:"1-argument returns Optional<T>; 2-argument returns T.",level:"Beginner",codeExample:"Optional<Integer> opt = list.stream().reduce(Integer::sum);\\nint total = list.stream().reduce(0, Integer::sum);"}];function x(){return e.jsxs("div",{className:"space-y-12 px-4 md:px-8 py-8 text-slate-200 bg-slate-900 min-h-screen",children:[e.jsxs("header",{className:"space-y-4 border-b border-slate-800 pb-6",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"px-3 py-1 bg-sky-500/10 text-sky-400 border border-sky-500/20 text-xs font-semibold rounded-full uppercase tracking-wider",children:"Module 009_005 · Topic 3"}),e.jsx("span",{className:"px-3 py-1 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-xs font-semibold rounded-full",children:"Terminal Operations & Reductions"})]}),e.jsxs("h1",{className:"text-xl sm:text-2xl md:text-3xl font-bold text-white tracking-tight",children:["1-Argument ",e.jsx("code",{className:"text-emerald-400 font-mono",children:"reduce(BinaryOperator)"}),": Optional Reductions"]}),e.jsx("p",{className:"text-base md:text-lg text-slate-400 leading-relaxed max-w-4xl",children:"Aggregating streams without default values: returning Optional results, handling empty streams, and finding maximums."})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsxs("h2",{className:"text-2xl font-bold text-emerald-400 flex items-center gap-2",children:[e.jsx("span",{children:"💻"})," Hands-On Java Demo Code"]}),e.jsx(t,{fileModule:s,title:"OneArgumentReduceDemo.java",highlightLines:[18,25,34,43]})]}),e.jsx("section",{className:"space-y-4",children:e.jsx(n,{title:"Terminal Operations & Reductions FAQs",questions:o})}),e.jsx("section",{className:"space-y-4",children:e.jsx(r,{content:i,title:"Module 009_005 Topic 3: 1-Argument reduce()",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Printable Note",downloadFileName:"009_005_topic3_one_argument_reduce_note.txt"})}),e.jsx(a,{note:"When you do not provide an identity element to reduce(), the first element of the stream becomes the accumulator seed. If the stream has 0 elements, you safely get Optional.empty()! — Sukanta Hui"})]})}export{x as default};
