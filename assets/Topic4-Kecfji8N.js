import{j as e}from"./vendor-react-core-Doz9nIC6.js";import{J as t}from"./JavaFileLoader-BfBG3xz_.js";import{F as n}from"./FAQTemplate-BHhlgA96.js";import{P as r}from"./PlainTextPrint-C08xhKA4.js";import{T as i}from"./TeacherSukantaHui-DDN87fI5.js";import"./JavaCodeBlock-BwsLxS3r.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-DEsnU7fn.js";const a=`/**\r
 * Java Core Tutorial - Module 009_005: Stream Terminal Operations, Reductions & Short-Circuiting\r
 * Topic 4: 2-Argument reduce(T identity, BinaryOperator<T> accumulator)\r
 * Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
 */\r
\r
package com.coderaccotax.javatutorial.terminal;\r
\r
import java.util.List;\r
\r
public class TwoArgumentReduceDemo {\r
\r
    public static void main(String[] args) {\r
        System.out.println("==========================================================================");\r
        System.out.println(" TOPIC 4: 2-ARGUMENT REDUCE(IDENTITY, ACCUMULATOR) - BARRACKPORE");\r
        System.out.println("==========================================================================\\n");\r
\r
        List<Integer> feePayments = List.of(1500, 2200, 1800, 3500);\r
\r
        // 1. Sum of fees with Identity = 0 (Neutral for addition)\r
        int totalFees = feePayments.stream()\r
            .reduce(0, Integer::sum);\r
        System.out.println("1. Total Course Fees Collected (Identity 0): ₹" + totalFees);\r
\r
        // 2. Product of multipliers with Identity = 1 (Neutral for multiplication)\r
        List<Integer> factors = List.of(2, 3, 4, 5);\r
        int product = factors.stream()\r
            .reduce(1, (a, b) -> a * b);\r
        System.out.println("2. Product of Factors (Identity 1): " + product);\r
\r
        // 3. String CSV formatting with Identity = ""\r
        List<String> studentList = List.of("Swadeep", "Tuhina", "Abhronila");\r
        String csv = studentList.stream()\r
            .reduce("", (res, name) -> res.isEmpty() ? name : res + ", " + name);\r
        System.out.println("3. CSV Generated (Identity ''): " + csv);\r
\r
        // 4. Safe fallback on EMPTY stream (returns identity without Optional wrapping)\r
        List<Integer> emptyFees = List.of();\r
        int emptyResult = emptyFees.stream().reduce(0, Integer::sum);\r
        System.out.println("4. Empty Stream Result (Guaranteed default): ₹" + emptyResult);\r
\r
        System.out.println("\\n==========================================================================");\r
    }\r
}\r
`,s=`================================================================================\r
JAVA CORE TUTORIAL - QUICK REVISION GUIDE\r
Module 009_005: Stream Terminal Operations, Reductions & Short-Circuiting\r
Topic 4: 2-Argument reduce(identity, accumulator)\r
Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
================================================================================\r
\r
1. METHOD SIGNATURE:\r
   - 'T reduce(T identity, BinaryOperator<T> accumulator)'\r
\r
2. THE IDENTITY VALUE CONTRACT:\r
   - Must be the identity value for the accumulator:\r
     * 'accumulator.apply(identity, x)' MUST EQUAL 'x' for all x.\r
     * Addition: Identity is 0 (0 + x == x).\r
     * Multiplication: Identity is 1 (1 * x == x).\r
     * String concatenation: Identity is "" ("" + x == x).\r
     * Min comparison: Identity is Double.POSITIVE_INFINITY.\r
     * Max comparison: Identity is Double.NEGATIVE_INFINITY.\r
\r
3. BENEFITS OVER 1-ARG REDUCE:\r
   - Returns type T directly (no Optional unwrapping required).\r
   - Returns 'identity' immediately when operating on an empty stream.\r
\r
================================================================================\r
Classroom Practice: Barrackpore Academy | Mentor: Sukanta Hui\r
================================================================================\r
`,o=[{question:"Why must the identity element satisfy accumulator(identity, x) == x?",shortAnswer:"In parallel stream execution, the stream is divided into multiple substreams, each initialized with the identity element. If the identity is not mathematically neutral, each worker thread adds an invalid offset, corrupting the final combined result.",explanation:"For example, using 10 as identity for addition in a 4-thread parallel stream will erroneously add 10 * 4 = 40 to the total sum.",hint:"Each parallel worker thread uses identity as initial state.",level:"Advanced",codeExample:"// BAD: Identity 10 for sum in parallel adds 10 per thread!\\nlist.parallelStream().reduce(10, Integer::sum); // WRONG RESULT!"},{question:"What is returned when 2-argument reduce() is called on an empty stream?",shortAnswer:"It directly returns the provided identity value without executing the accumulator.",explanation:"This eliminates the need for Optional checks in client code.",hint:"Returns the identity value directly.",level:"Beginner",codeExample:"List.<Integer>of().stream().reduce(0, Integer::sum); // Returns 0"}];function h(){return e.jsxs("div",{className:"space-y-12 px-4 md:px-8 py-8 text-slate-200 bg-slate-900 min-h-screen",children:[e.jsxs("header",{className:"space-y-4 border-b border-slate-800 pb-6",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"px-3 py-1 bg-sky-500/10 text-sky-400 border border-sky-500/20 text-xs font-semibold rounded-full uppercase tracking-wider",children:"Module 009_005 · Topic 4"}),e.jsx("span",{className:"px-3 py-1 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-xs font-semibold rounded-full",children:"Terminal Operations & Reductions"})]}),e.jsxs("h1",{className:"text-xl sm:text-2xl md:text-3xl font-bold text-white tracking-tight",children:["2-Argument ",e.jsx("code",{className:"text-emerald-400 font-mono",children:"reduce(identity, accumulator)"}),": Seeded Reductions"]}),e.jsx("p",{className:"text-base md:text-lg text-slate-400 leading-relaxed max-w-4xl",children:"Reductions with an explicit neutral identity: guaranteeing direct non-Optional results and defining default fallbacks for empty streams."})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsxs("h2",{className:"text-2xl font-bold text-emerald-400 flex items-center gap-2",children:[e.jsx("span",{children:"💻"})," Hands-On Java Demo Code"]}),e.jsx(t,{fileModule:a,title:"TwoArgumentReduceDemo.java",highlightLines:[18,25,34,43]})]}),e.jsx("section",{className:"space-y-4",children:e.jsx(n,{title:"Terminal Operations & Reductions FAQs",questions:o})}),e.jsx("section",{className:"space-y-4",children:e.jsx(r,{content:s,title:"Module 009_005 Topic 4: 2-Argument reduce()",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Printable Note",downloadFileName:"009_005_topic4_two_argument_reduce_note.txt"})}),e.jsx(i,{note:"The identity element must be the neutral mathematical value for your operation: for addition use 0, for multiplication use 1, and for string concatenation use ''! If you pick the wrong identity, your parallel reductions will compute wrong results! — Sukanta Hui"})]})}export{h as default};
