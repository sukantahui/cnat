import{j as e}from"./vendor-react-core-Doz9nIC6.js";import{J as t}from"./JavaFileLoader-BfBG3xz_.js";import{F as r}from"./FAQTemplate-CkSqDH4B.js";import{P as n}from"./PlainTextPrint-C08xhKA4.js";import{T as s}from"./TeacherSukantaHui-CyIG3xbg.js";import"./JavaCodeBlock-BwsLxS3r.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-CIaKtAt4.js";const a=`/**\r
 * Java Core Tutorial - Module 007_003: Set Implementations & TreeSet Internals\r
 * Topic 8: The java.util.SortedSet & java.util.NavigableSet Interface Contracts\r
 * Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
 */\r
\r
package com.coderaccotax.javatutorial.collections;\r
\r
import java.util.NavigableSet;\r
import java.util.SortedSet;\r
import java.util.TreeSet;\r
\r
public class SortedSetAndNavigableSetContractsDemo {\r
\r
    public static void main(String[] args) {\r
        System.out.println("==========================================================================");\r
        System.out.println(" TOPIC 8: SortedSet & NavigableSet INTERFACES - BARRACKPORE");\r
        System.out.println("==========================================================================\\n");\r
\r
        NavigableSet<Integer> studentScores = new TreeSet<>();\r
        studentScores.addAll(Set.of(45, 62, 78, 85, 92, 98));\r
\r
        // 1. SortedSet Methods (first, last, subSet, headSet, tailSet):\r
        SortedSet<Integer> sortedView = studentScores;\r
        System.out.println(">>> 1. SortedSet Core Queries:");\r
        System.out.println("  Lowest Score (first())  : " + sortedView.first());\r
        System.out.println("  Highest Score (last())  : " + sortedView.last());\r
        System.out.println("  SubSet [62 to 92)       : " + sortedView.subSet(62, 92)); // 62 inclusive, 92 exclusive\r
\r
        // 2. NavigableSet Navigation Methods (closest match queries):\r
        System.out.println("\\n>>> 2. NavigableSet Proximity Lookups:");\r
        System.out.println("  Scores: " + studentScores);\r
        System.out.println("  lower(85)   (strictly < 85) : " + studentScores.lower(85));\r
        System.out.println("  floor(85)   (<= 85)         : " + studentScores.floor(85));\r
        System.out.println("  ceiling(80) (>= 80)         : " + studentScores.ceiling(80));\r
        System.out.println("  higher(85)  (strictly > 85) : " + studentScores.higher(85));\r
\r
        // 3. Descending Reversal:\r
        System.out.println("\\n>>> 3. Reverse View (descendingSet()):");\r
        System.out.println("  Descending Scores : " + studentScores.descendingSet());\r
\r
        System.out.println("\\n>>> INTERFACE INHERITANCE HIERARCHY:");\r
        System.out.println("  java.util.Collection<E>");\r
        System.out.println("    └── java.util.Set<E>");\r
        System.out.println("          └── java.util.SortedSet<E>     (first, last, headSet, tailSet)");\r
        System.out.println("                └── java.util.NavigableSet<E> (lower, floor, ceiling, higher, pollFirst, descendingSet)");\r
        System.out.println("                      └── java.util.TreeSet<E>");\r
\r
        System.out.println("\\n==========================================================================");\r
    }\r
}`,o=`================================================================================\r
JAVA CORE TUTORIAL - QUICK REVISION GUIDE\r
Module 007_003: Set Implementations & TreeSet Internals\r
Topic 8: SortedSet & NavigableSet Interfaces\r
Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
================================================================================\r
\r
1. NAVIGABLESET CONTRACT:\r
   - Extends 'SortedSet'.\r
   - 'lower(e)' / 'higher(e)': strictly less/greater.\r
   - 'floor(e)' / 'ceiling(e)': less-or-equal / greater-or-equal.\r
   - 'pollFirst()' / 'pollLast()': retrieve & remove extremes.\r
   - 'descendingSet()': reverse view in O(1) time.\r
\r
================================================================================\r
Classroom Practice: Barrackpore Academy | Mentor: Sukanta Hui\r
================================================================================`,i=[{question:"What capabilities did 'java.util.NavigableSet' add to Java 6 on top of the older 'SortedSet' interface?",shortAnswer:"'NavigableSet' added closest-match search methods: 'lower(e)' (< e), 'floor(e)' (<= e), 'ceiling(e)' (>= e), and 'higher(e)' (> e). It also added retrieval and removal methods: 'pollFirst()' and 'pollLast()', as well as reverse traversal views: 'descendingSet()' and 'descendingIterator()'.",explanation:"Introduced in Java 6 to complete the sorted collections API.",hint:"Adds lower, floor, ceiling, higher, pollFirst/pollLast, and descendingSet views.",level:"Intermediate",codeExample:"set.floor(80); // <= 80 | set.ceiling(80); // >= 80 | set.descendingSet();"}];function x(){return e.jsxs("div",{className:"space-y-12 px-4 md:px-8 py-8 text-slate-200 bg-slate-900 min-h-screen",children:[e.jsxs("header",{className:"space-y-4 border-b border-slate-800 pb-6",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"px-3 py-1 bg-sky-500/10 text-sky-400 border border-sky-500/20 text-xs font-semibold rounded-full uppercase tracking-wider",children:"Module 007_003 · Topic 8"}),e.jsx("span",{className:"px-3 py-1 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-xs font-semibold rounded-full",children:"NavigableSet Interface"})]}),e.jsxs("h1",{className:"text-3xl md:text-4xl font-extrabold text-white tracking-tight",children:["The ",e.jsx("code",{className:"text-emerald-400 font-mono",children:"SortedSet"})," & ",e.jsx("code",{className:"text-sky-400 font-mono",children:"NavigableSet"})," Interfaces: Proximity & Range Queries"]}),e.jsxs("p",{className:"text-base md:text-lg text-slate-400 leading-relaxed max-w-4xl",children:["Master sorted collection navigation: utilizing proximity queries (",e.jsx("code",{className:"text-emerald-300 font-mono",children:"floor"}),", ",e.jsx("code",{className:"text-sky-300 font-mono",children:"ceiling"}),", ",e.jsx("code",{className:"text-amber-300 font-mono",children:"lower"}),", ",e.jsx("code",{className:"text-purple-300 font-mono",children:"higher"}),") and descending set views."]})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsxs("h2",{className:"text-2xl font-bold text-emerald-400 flex items-center gap-2",children:[e.jsx("span",{children:"💻"})," Hands-On Java Demo Code"]}),e.jsx(t,{fileModule:a,title:"SortedSetAndNavigableSetContractsDemo.java",highlightLines:[7,10,19,20,21,27,28,29,30,34]})]}),e.jsx("section",{className:"space-y-4",children:e.jsx(r,{title:"NavigableSet FAQs",questions:i})}),e.jsx("section",{className:"space-y-4",children:e.jsx(n,{content:o,title:"Module 007_003 Topic 8: SortedSet & NavigableSet",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Printable Note",downloadFileName:"007_003_topic8_sortedset_and_navigableset_note.txt"})}),e.jsx(s,{note:"If you need to find the closest number, nearest date, or score threshold, NavigableSet's 'floor()' and 'ceiling()' methods are like magic! They do binary search in O(log n) time! — Sukanta Hui"})]})}export{x as default};
