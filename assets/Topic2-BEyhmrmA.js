import{j as e}from"./vendor-react-core-Doz9nIC6.js";import{J as t}from"./JavaFileLoader-BfBG3xz_.js";import{F as r}from"./FAQTemplate-CkSqDH4B.js";import{P as n}from"./PlainTextPrint-C08xhKA4.js";import{T as a}from"./TeacherSukantaHui-CyIG3xbg.js";import"./JavaCodeBlock-BwsLxS3r.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-CIaKtAt4.js";const i=`/**\r
 * Java Core Tutorial - Module 009_005: Stream Terminal Operations, Reductions & Short-Circuiting\r
 * Topic 2: Reduction with reduce() - Overview of Fold Aggregations\r
 * Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
 */\r
\r
package com.coderaccotax.javatutorial.terminal;\r
\r
import java.util.List;\r
import java.util.Optional;\r
\r
public class ReductionOverviewDemo {\r
\r
    public static void main(String[] args) {\r
        System.out.println("==========================================================================");\r
        System.out.println(" TOPIC 2: REDUCTION WITH REDUCE() - BARRACKPORE ACADEMY");\r
        System.out.println("==========================================================================\\n");\r
\r
        List<Integer> testScores = List.of(88, 92, 75, 94, 85);\r
\r
        // 1. Conceptual Breakdown of Reduction:\r
        // Step 1: (88 + 92) = 180\r
        // Step 2: (180 + 75) = 255\r
        // Step 3: (255 + 94) = 349\r
        // Step 4: (349 + 85) = 434 -> Final Reduced Value!\r
        System.out.println(">>> 1. REDUCTION PROCESS (Sum of " + testScores + "):");\r
        Optional<Integer> totalSum = testScores.stream()\r
            .reduce((accum, val) -> {\r
                int result = accum + val;\r
                System.out.println("   [ACCUMULATING] " + accum + " + " + val + " = " + result);\r
                return result;\r
            });\r
\r
        System.out.println("   --> Total Sum: " + totalSum.orElse(0));\r
\r
        // 2. Finding Max using reduce(BinaryOperator)\r
        Optional<Integer> maxScore = testScores.stream()\r
            .reduce(Integer::max);\r
        System.out.println("\\n2. Maximum Score via reduce(Integer::max): " + maxScore.orElse(0));\r
\r
        // 3. Joining Strings with reduce\r
        List<String> branches = List.of("Barrackpore", "Naihati", "Shyamnagar", "Ichapur");\r
        String joinedBranches = branches.stream()\r
            .reduce("", (accum, branch) -> accum.isEmpty() ? branch : accum + " -> " + branch);\r
        System.out.println("3. Joined Branch Flow: " + joinedBranches);\r
\r
        System.out.println("\\n==========================================================================");\r
    }\r
}\r
`,o=`================================================================================\r
JAVA CORE TUTORIAL - QUICK REVISION GUIDE\r
Module 009_005: Stream Terminal Operations, Reductions & Short-Circuiting\r
Topic 2: Reduction with reduce() Overview\r
Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
================================================================================\r
\r
1. WHAT IS A REDUCTION OPERATION:\r
   - Takes a stream of elements and combines them repeatedly into a single summary value\r
     (such as finding sum, product, max, min, or concatenating strings).\r
   - Also known as 'fold' or 'accumulate' in functional programming languages.\r
\r
2. THE THREE OVERLOADS OF REDUCE():\r
   1. 'Optional<T> reduce(BinaryOperator<T> accumulator)' -> 1 Argument (No identity value).\r
   2. 'T reduce(T identity, BinaryOperator<T> accumulator)' -> 2 Arguments (With identity value).\r
   3. '<U> U reduce(U identity, BiFunction<U, ? super T, U> accumulator, BinaryOperator<U> combiner)' -> 3 Arguments (Parallel type transformation).\r
\r
================================================================================\r
Classroom Practice: Barrackpore Academy | Mentor: Sukanta Hui\r
================================================================================\r
`,s=[{question:"What mathematical property must the accumulator function in reduce() satisfy for parallel safety?",shortAnswer:"The accumulator function must be Associative: (a op b) op c must equal a op (b op c). Examples of associative operations include addition, multiplication, max, and min.",explanation:"Associativity allows the stream engine to split the collection into arbitrary parallel chunks and combine their intermediate results safely.",hint:"Associativity: order of grouping does not change the result.",level:"Intermediate",codeExample:"(a + b) + c === a + (b + c) // Associative\\n(a - b) - c !== a - (b - c) // NOT associative!"},{question:"Why does the 1-argument reduce(BinaryOperator) return an Optional<T> instead of T?",shortAnswer:"Because if the stream is empty, there is no initial identity value to return, so reduce() returns Optional.empty() rather than throwing an exception or returning null.",explanation:"The Optional return type forces the caller to handle the empty stream case explicitly.",hint:"Handles the case where the stream is empty without an identity fallback.",level:"Beginner",codeExample:"List.<Integer>of().stream().reduce((a, b) -> a + b); // Returns Optional.empty()"}];function g(){return e.jsxs("div",{className:"space-y-12 px-4 md:px-8 py-8 text-slate-200 bg-slate-900 min-h-screen",children:[e.jsxs("header",{className:"space-y-4 border-b border-slate-800 pb-6",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"px-3 py-1 bg-sky-500/10 text-sky-400 border border-sky-500/20 text-xs font-semibold rounded-full uppercase tracking-wider",children:"Module 009_005 · Topic 2"}),e.jsx("span",{className:"px-3 py-1 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-xs font-semibold rounded-full",children:"Terminal Operations & Reductions"})]}),e.jsxs("h1",{className:"text-3xl md:text-4xl font-extrabold text-white tracking-tight",children:["Reduction with ",e.jsx("code",{className:"text-emerald-400 font-mono",children:"reduce()"}),": The Foundational Aggregation"]}),e.jsx("p",{className:"text-base md:text-lg text-slate-400 leading-relaxed max-w-4xl",children:"Understanding fold / reduce operations: combining a stream of elements into a single summary value via associative binary functions."})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsxs("h2",{className:"text-2xl font-bold text-emerald-400 flex items-center gap-2",children:[e.jsx("span",{children:"💻"})," Hands-On Java Demo Code"]}),e.jsx(t,{fileModule:i,title:"ReductionOverviewDemo.java",highlightLines:[18,25,34,43]})]}),e.jsx("section",{className:"space-y-4",children:e.jsx(r,{title:"Terminal Operations & Reductions FAQs",questions:s})}),e.jsx("section",{className:"space-y-4",children:e.jsx(n,{content:o,title:"Module 009_005 Topic 2: Reduction with reduce() Overview",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Printable Note",downloadFileName:"009_005_topic2_reduction_reduce_overview_note.txt"})}),e.jsx(a,{note:"The reduce() method is the mother of all aggregation functions! Every count, sum, min, max, and string join can be expressed under the hood as a reduce() operation! — Sukanta Hui"})]})}export{g as default};
