import{j as e}from"./vendor-react-core-Doz9nIC6.js";import{J as t}from"./JavaFileLoader-BfBG3xz_.js";import{F as r}from"./FAQTemplate-BHhlgA96.js";import{P as n}from"./PlainTextPrint-C08xhKA4.js";import{T as a}from"./TeacherSukantaHui-CEPuAfsb.js";import"./JavaCodeBlock-BwsLxS3r.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-DGCamHnX.js";const l=`/**\r
 * Java Core Tutorial - Module 007_003: Set Implementations & TreeSet Internals\r
 * Topic 12: NavigableSet Complete Query Method Suite: Proximity, Sub-Ranges & Polls\r
 * Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
 */\r
\r
package com.coderaccotax.javatutorial.collections;\r
\r
import java.util.NavigableSet;\r
import java.util.TreeSet;\r
\r
public class NavigableSetQueryMethodsSuiteDemo {\r
\r
    public static void main(String[] args) {\r
        System.out.println("==========================================================================");\r
        System.out.println(" TOPIC 12: NavigableSet COMPLETE QUERY METHODS SUITE - BARRACKPORE");\r
        System.out.println("==========================================================================\\n");\r
\r
        NavigableSet<Integer> taxThresholds = new TreeSet<>();\r
        taxThresholds.addAll(Set.of(10000, 25000, 50000, 75000, 100000, 150000));\r
\r
        System.out.println(">>> Base Sorted Thresholds: " + taxThresholds);\r
\r
        // 1. Proximity Lookups:\r
        System.out.println("\\n>>> 1. Proximity Navigation around 50,000:");\r
        System.out.println("  lower(50000)   (< 50000)  : ₹" + taxThresholds.lower(50000));\r
        System.out.println("  floor(50000)   (<= 50000) : ₹" + taxThresholds.floor(50000));\r
        System.out.println("  ceiling(50000) (>= 50000) : ₹" + taxThresholds.ceiling(50000));\r
        System.out.println("  higher(50000)  (> 50000)  : ₹" + taxThresholds.higher(50000));\r
\r
        // 2. Sub-Range Views with Inclusive/Exclusive Flags:\r
        System.out.println("\\n>>> 2. Sub-Range Views (subSet, headSet, tailSet):");\r
        System.out.println("  subSet(25000, true, 75000, true) : " + taxThresholds.subSet(25000, true, 75000, true));\r
        System.out.println("  headSet(50000, false) (strictly < 50k) : " + taxThresholds.headSet(50000, false));\r
        System.out.println("  tailSet(75000, true)  (>= 75k)         : " + taxThresholds.tailSet(75000, true));\r
\r
        // 3. Extreme Extraction via pollFirst() and pollLast():\r
        System.out.println("\\n>>> 3. Extreme Extraction (pollFirst & pollLast):");\r
        System.out.println("  Lowest Polled & Removed  : ₹" + taxThresholds.pollFirst());\r
        System.out.println("  Highest Polled & Removed : ₹" + taxThresholds.pollLast());\r
        System.out.println("  Remaining Set Elements   : " + taxThresholds);\r
\r
        System.out.println("\\n==========================================================================");\r
    }\r
}`,s=`================================================================================\r
JAVA CORE TUTORIAL - QUICK REVISION GUIDE\r
Module 007_003: Set Implementations & TreeSet Internals\r
Topic 12: NavigableSet Query Suite\r
Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
================================================================================\r
\r
1. QUERY METHOD SUITE:\r
   - lower(e) / higher(e) → strictly < / >.\r
   - floor(e) / ceiling(e) → <= / >=.\r
   - subSet(from, fInc, to, tInc) → configurable range view.\r
   - headSet(to, inc) & tailSet(from, inc).\r
   - pollFirst() / pollLast() → retrieve & remove extremes.\r
\r
================================================================================\r
Classroom Practice: Barrackpore Academy | Mentor: Sukanta Hui\r
================================================================================`,o=[{question:"What is the difference between 'subSet(from, to)' from SortedSet and 'subSet(from, fromInclusive, to, toInclusive)' from NavigableSet?",shortAnswer:"The older 'SortedSet.subSet(from, to)' is strictly fixed to 'half-open' intervals (from is inclusive, to is exclusive). In contrast, 'NavigableSet.subSet(from, fromInc, to, toInc)' allows explicit boolean configuration for whether the start and end boundaries are inclusive or exclusive, offering full mathematical flexibility.",explanation:"Enhanced range view APIs introduced with java.util.NavigableSet.",hint:"NavigableSet allows explicit boolean flags to specify whether from and to bounds are inclusive.",level:"Intermediate",codeExample:"set.subSet(10, true, 50, true); // Fully closed interval [10, 50]"}];function S(){return e.jsxs("div",{className:"space-y-12 px-4 md:px-8 py-8 text-slate-200 bg-slate-900 min-h-screen",children:[e.jsxs("header",{className:"space-y-4 border-b border-slate-800 pb-6",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"px-3 py-1 bg-sky-500/10 text-sky-400 border border-sky-500/20 text-xs font-semibold rounded-full uppercase tracking-wider",children:"Module 007_003 · Topic 12"}),e.jsx("span",{className:"px-3 py-1 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-xs font-semibold rounded-full",children:"Query Suite"})]}),e.jsxs("h1",{className:"text-xl sm:text-2xl md:text-3xl font-bold text-white tracking-tight",children:[e.jsx("code",{className:"text-emerald-400 font-mono",children:"NavigableSet"})," Complete Query Suite: Proximity, Ranges & Polls"]}),e.jsxs("p",{className:"text-base md:text-lg text-slate-400 leading-relaxed max-w-4xl",children:["Execute advanced range queries: mastering boundary-inclusive interval slicing (",e.jsx("code",{className:"text-emerald-300 font-mono",children:"subSet"}),"), threshold lookups, and atomic extreme element extraction (",e.jsx("code",{className:"text-sky-300 font-mono",children:"pollFirst"})," / ",e.jsx("code",{className:"text-purple-300 font-mono",children:"pollLast"}),")."]})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsxs("h2",{className:"text-2xl font-bold text-emerald-400 flex items-center gap-2",children:[e.jsx("span",{children:"💻"})," Hands-On Java Demo Code"]}),e.jsx(t,{fileModule:l,title:"NavigableSetQueryMethodsSuiteDemo.java",highlightLines:[7,10,18,19,20,21,26,27,28,33,34]})]}),e.jsx("section",{className:"space-y-4",children:e.jsx(r,{title:"Query Suite FAQs",questions:o})}),e.jsx("section",{className:"space-y-4",children:e.jsx(n,{content:s,title:"Module 007_003 Topic 12: NavigableSet Query Suite",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Printable Note",downloadFileName:"007_003_topic12_navigableset_query_suite_note.txt"})}),e.jsx(a,{note:"With NavigableSet, you can pull sub-ranges with exact inclusive/exclusive control (like fetching all students between marks 60 and 90 inclusive) with zero manual loop filtering! — Sukanta Hui"})]})}export{S as default};
