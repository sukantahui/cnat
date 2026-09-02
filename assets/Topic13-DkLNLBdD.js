import{j as e}from"./vendor-react-core-Doz9nIC6.js";import{J as r}from"./JavaFileLoader-BfBG3xz_.js";import{F as n}from"./FAQTemplate-BHhlgA96.js";import{P as t}from"./PlainTextPrint-C08xhKA4.js";import{T as a}from"./TeacherSukantaHui-RpFLNJ5A.js";import"./JavaCodeBlock-BwsLxS3r.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-wprqVFW_.js";const o=`/**\r
 * Java Core Tutorial - Module 009_005: Stream Terminal Operations, Reductions & Short-Circuiting\r
 * Topic 13: count(), min(Comparator) & max(Comparator)\r
 * Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
 */\r
\r
package com.coderaccotax.javatutorial.terminal;\r
\r
import java.util.Comparator;\r
import java.util.List;\r
import java.util.Optional;\r
\r
public class CountMinMaxAggregationsDemo {\r
\r
    public static void main(String[] args) {\r
        System.out.println("==========================================================================");\r
        System.out.println(" TOPIC 13: COUNT(), MIN() & MAX() - BARRACKPORE ACADEMY");\r
        System.out.println("==========================================================================\\n");\r
\r
        List<StudentScoreCard> cards = List.of(\r
            new StudentScoreCard("Swadeep Paul", "Barrackpore", 88.5),\r
            new StudentScoreCard("Tuhina Das", "Naihati", 95.0),\r
            new StudentScoreCard("Abhronila Das", "Shyamnagar", 76.0),\r
            new StudentScoreCard("Debangshu Mukherjee", "Ichapur", 91.5)\r
        );\r
\r
        // 1. count(): Returns long count of matching elements\r
        long distinctionCount = cards.stream()\r
            .filter(c -> c.score() >= 85.0)\r
            .count();\r
        System.out.println("1. Distinction Students Count (score >= 85): " + distinctionCount);\r
\r
        // 2. max(Comparator): Top scorer\r
        Optional<StudentScoreCard> topScorer = cards.stream()\r
            .max(Comparator.comparingDouble(StudentScoreCard::score));\r
        topScorer.ifPresent(s -> System.out.println("2. Highest Scorer (Max): " + s.name() + " (" + s.score() + "%)"));\r
\r
        // 3. min(Comparator): Lowest scorer\r
        Optional<StudentScoreCard> lowestScorer = cards.stream()\r
            .min(Comparator.comparingDouble(StudentScoreCard::score));\r
        lowestScorer.ifPresent(s -> System.out.println("3. Lowest Scorer (Min): " + s.name() + " (" + s.score() + "%)"));\r
\r
        System.out.println("\\n==========================================================================");\r
    }\r
\r
    record StudentScoreCard(String name, String center, double score) {}\r
}\r
`,i=`================================================================================\r
JAVA CORE TUTORIAL - QUICK REVISION GUIDE\r
Module 009_005: Stream Terminal Operations, Reductions & Short-Circuiting\r
Topic 13: count(), min() and max()\r
Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
================================================================================\r
\r
1. COUNT():\r
   - Signature: 'long count()'.\r
   - Returns the count of elements in this stream.\r
   - Terminal reduction operation.\r
\r
2. MIN(COMPARATOR) & MAX(COMPARATOR):\r
   - 'Optional<T> min(Comparator<? super T> comparator)'\r
   - 'Optional<T> max(Comparator<? super T> comparator)'\r
   - Special cases of reduction using 'BinaryOperator.minBy(comp)' and 'BinaryOperator.maxBy(comp)'.\r
   - Returns 'Optional.empty()' on empty streams.\r
\r
================================================================================\r
Classroom Practice: Barrackpore Academy | Mentor: Sukanta Hui\r
================================================================================\r
`,s=[{question:"What is the return type of Stream.count()?",shortAnswer:"Stream.count() returns a 64-bit primitive long (not int or Optional), enabling counting streams with billions of elements.",explanation:"Collections size() returns int, but Streams count() returns long.",hint:"Returns a primitive 64-bit long.",level:"Beginner",codeExample:"long count = stream.count();"},{question:"Why do min() and max() return Optional<T> instead of throwing an exception on empty streams?",shortAnswer:"Returning Optional<T> provides a null-safe, functional mechanism to handle the case where the stream contains zero elements without abruptly throwing exceptions.",explanation:"Allows clean integration with orElseThrow() or ifPresent().",hint:"Null-safe handling of empty streams.",level:"Beginner",codeExample:"list.stream().max(Comparator.naturalOrder()).orElse(0);"}];function h(){return e.jsxs("div",{className:"space-y-12 px-4 md:px-8 py-8 text-slate-200 bg-slate-900 min-h-screen",children:[e.jsxs("header",{className:"space-y-4 border-b border-slate-800 pb-6",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"px-3 py-1 bg-sky-500/10 text-sky-400 border border-sky-500/20 text-xs font-semibold rounded-full uppercase tracking-wider",children:"Module 009_005 · Topic 13"}),e.jsx("span",{className:"px-3 py-1 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-xs font-semibold rounded-full",children:"Terminal Operations & Reductions"})]}),e.jsxs("h1",{className:"text-xl sm:text-2xl md:text-3xl font-bold text-white tracking-tight",children:["Convenience Aggregations: ",e.jsx("code",{className:"text-emerald-400 font-mono",children:"count(), min() & max()"})]}),e.jsx("p",{className:"text-base md:text-lg text-slate-400 leading-relaxed max-w-4xl",children:"Stream metric utilities: counting elements, finding extremes via custom Comparators, and handling Optional return types."})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsxs("h2",{className:"text-2xl font-bold text-emerald-400 flex items-center gap-2",children:[e.jsx("span",{children:"💻"})," Hands-On Java Demo Code"]}),e.jsx(r,{fileModule:o,title:"CountMinMaxAggregationsDemo.java",highlightLines:[18,25,34,43]})]}),e.jsx("section",{className:"space-y-4",children:e.jsx(n,{title:"Terminal Operations & Reductions FAQs",questions:s})}),e.jsx("section",{className:"space-y-4",children:e.jsx(t,{content:i,title:"Module 009_005 Topic 13: count, min & max Aggregations",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Printable Note",downloadFileName:"009_005_topic13_count_min_max_aggregations_note.txt"})}),e.jsx(a,{note:"min() and max() take a Comparator and return an Optional<T>. For numbers, you can easily use Comparator.naturalOrder() or Comparator.comparingDouble(Student::getScore)! — Sukanta Hui"})]})}export{h as default};
