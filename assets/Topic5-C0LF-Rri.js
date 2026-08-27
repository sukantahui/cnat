import{j as e}from"./vendor-react-core-Doz9nIC6.js";import{J as t}from"./JavaFileLoader-BfBG3xz_.js";import{F as r}from"./FAQTemplate-CkSqDH4B.js";import{P as n}from"./PlainTextPrint-C08xhKA4.js";import{T as a}from"./TeacherSukantaHui-CyIG3xbg.js";import"./JavaCodeBlock-BwsLxS3r.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-CIaKtAt4.js";const o=`/**\r
 * Java Core Tutorial - Module 009_005: Stream Terminal Operations, Reductions & Short-Circuiting\r
 * Topic 5: 3-Argument reduce(U identity, BiFunction accumulator, BinaryOperator combiner)\r
 * Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
 */\r
\r
package com.coderaccotax.javatutorial.terminal;\r
\r
import java.util.List;\r
\r
public class ThreeArgumentReduceDemo {\r
\r
    public static void main(String[] args) {\r
        System.out.println("==========================================================================");\r
        System.out.println(" TOPIC 5: 3-ARGUMENT REDUCE (PARALLEL COMBINER) - BARRACKPORE");\r
        System.out.println("==========================================================================\\n");\r
\r
        List<StudentScore> scoreRecords = List.of(\r
            new StudentScore("Swadeep Paul", 88),\r
            new StudentScore("Tuhina Das", 94),\r
            new StudentScore("Abhronila Das", 76),\r
            new StudentScore("Debangshu Mukherjee", 92)\r
        );\r
\r
        // 3-Argument reduce:\r
        // Type T: StudentScore (Input element)\r
        // Type U: Integer (Accumulator result)\r
        // 1. Identity: 0 (Integer)\r
        // 2. Accumulator (BiFunction<Integer, StudentScore, Integer>): (total, s) -> total + s.score()\r
        // 3. Combiner (BinaryOperator<Integer>): (total1, total2) -> total1 + total2 (Used in parallel mode)\r
        \r
        System.out.println(">>> 1. Sequential 3-Arg Reduce (Sum of scores):");\r
        int sequentialSum = scoreRecords.stream()\r
            .reduce(\r
                0,                                                  // Identity U\r
                (total, student) -> total + student.score(),       // Accumulator: (U, T) -> U\r
                Integer::sum                                        // Combiner: (U, U) -> U\r
            );\r
        System.out.println("   Sequential Total Score: " + sequentialSum);\r
\r
        System.out.println("\\n>>> 2. Parallel 3-Arg Reduce (Combiner merges thread results):");\r
        int parallelSum = scoreRecords.parallelStream()\r
            .reduce(\r
                0,\r
                (total, student) -> {\r
                    System.out.println("   [Thread " + Thread.currentThread().getName() + "] Accumulating: " + student.name());\r
                    return total + student.score();\r
                },\r
                (subtotal1, subtotal2) -> {\r
                    System.out.println("   [COMBINER MERGE] " + subtotal1 + " + " + subtotal2);\r
                    return subtotal1 + subtotal2;\r
                }\r
            );\r
        System.out.println("   Parallel Total Score: " + parallelSum);\r
\r
        System.out.println("\\n==========================================================================");\r
    }\r
\r
    record StudentScore(String name, int score) {}\r
}\r
`,s=`================================================================================\r
JAVA CORE TUTORIAL - QUICK REVISION GUIDE\r
Module 009_005: Stream Terminal Operations, Reductions & Short-Circuiting\r
Topic 5: 3-Argument reduce(identity, accumulator, combiner)\r
Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
================================================================================\r
\r
1. METHOD SIGNATURE:\r
   - '<U> U reduce(U identity, BiFunction<U, ? super T, U> accumulator, BinaryOperator<U> combiner)'\r
\r
2. THE 3 ARGUMENTS EXPLAINED:\r
   1. Identity U: The initial value of type U.\r
   2. Accumulator (BiFunction<U, T, U>): Incorporates a stream element T into an existing\r
      accumulator state U.\r
   3. Combiner (BinaryOperator<U>): Merges two partial results U1 and U2 calculated by\r
      separate worker threads in a parallel stream.\r
\r
3. SEQUENTIAL VS PARALLEL EXECUTION:\r
   - In a sequential stream: The Combiner is NEVER called (since one thread does everything).\r
   - In a parallel stream: The Combiner is ESSENTIAL to merge thread branch results in ForkJoinPool.\r
\r
================================================================================\r
Classroom Practice: Barrackpore Academy | Mentor: Sukanta Hui\r
================================================================================\r
`,l=[{question:"Why is the Combiner parameter in 3-argument reduce() ignored during sequential stream execution?",shortAnswer:"In a sequential stream, all elements are processed sequentially by a single thread in a continuous loop, so there are never multiple partial results that need to be merged.",explanation:"The Combiner is only activated when stream execution is parallelized across multiple threads.",hint:"Sequential execution uses a single thread; combiner is only needed to merge multiple thread results.",level:"Intermediate",codeExample:"stream.reduce(0, (sum, item) -> sum + item.val(), Integer::sum);"},{question:"What is the key advantage of 3-argument reduce over 2-argument reduce?",shortAnswer:"3-argument reduce allows changing the output type (from Stream<T> to result type U), eliminating the need for a preceding map() step.",explanation:"2-argument reduce requires the input and accumulator type to be identical (Stream<T> -> T).",hint:"Allows accumulator result type U to differ from stream element type T.",level:"Intermediate",codeExample:"// Type of input is Student, type of output is Integer (total score)\\nstudents.stream().reduce(0, (tot, s) -> tot + s.getScore(), Integer::sum);"}];function x(){return e.jsxs("div",{className:"space-y-12 px-4 md:px-8 py-8 text-slate-200 bg-slate-900 min-h-screen",children:[e.jsxs("header",{className:"space-y-4 border-b border-slate-800 pb-6",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"px-3 py-1 bg-sky-500/10 text-sky-400 border border-sky-500/20 text-xs font-semibold rounded-full uppercase tracking-wider",children:"Module 009_005 · Topic 5"}),e.jsx("span",{className:"px-3 py-1 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-xs font-semibold rounded-full",children:"Terminal Operations & Reductions"})]}),e.jsxs("h1",{className:"text-3xl md:text-4xl font-extrabold text-white tracking-tight",children:["3-Argument ",e.jsx("code",{className:"text-emerald-400 font-mono",children:"reduce(identity, accumulator, combiner)"}),": Parallel Reductions"]}),e.jsx("p",{className:"text-base md:text-lg text-slate-400 leading-relaxed max-w-4xl",children:"Cross-type reductions and parallel combiner mechanics: transforming elements of type T into accumulated type U across multi-threaded pipelines."})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsxs("h2",{className:"text-2xl font-bold text-emerald-400 flex items-center gap-2",children:[e.jsx("span",{children:"💻"})," Hands-On Java Demo Code"]}),e.jsx(t,{fileModule:o,title:"ThreeArgumentReduceDemo.java",highlightLines:[18,25,34,43]})]}),e.jsx("section",{className:"space-y-4",children:e.jsx(r,{title:"Terminal Operations & Reductions FAQs",questions:l})}),e.jsx("section",{className:"space-y-4",children:e.jsx(n,{content:s,title:"Module 009_005 Topic 5: 3-Argument reduce()",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Printable Note",downloadFileName:"009_005_topic5_three_argument_reduce_note.txt"})}),e.jsx(a,{note:"The 3-argument reduce is special: it allows the accumulator result (type U) to be DIFFERENT from the stream element (type T), and the combiner is used to merge partial results from multiple parallel threads! — Sukanta Hui"})]})}export{x as default};
