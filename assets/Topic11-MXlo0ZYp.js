import{j as e}from"./vendor-react-core-Doz9nIC6.js";import{J as t}from"./JavaFileLoader-BfBG3xz_.js";import{F as n}from"./FAQTemplate-BHhlgA96.js";import{P as r}from"./PlainTextPrint-C08xhKA4.js";import{T as s}from"./TeacherSukantaHui-BaJcBHAy.js";import"./JavaCodeBlock-BwsLxS3r.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-8ao-0upJ.js";const o=`/**\r
 * Java Core Tutorial - Module 007_008: Sorting, Comparable, Comparator & Collections\r
 * Topic 11: Core Algorithms: sort(), binarySearch(), reverse(), shuffle(), and swap()\r
 * Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
 */\r
\r
package com.coderaccotax.javatutorial.collections;\r
\r
import java.util.ArrayList;\r
import java.util.Collections;\r
import java.util.List;\r
\r
public class CollectionsAlgorithmsSuiteDemo {\r
\r
    public static void main(String[] args) {\r
        System.out.println("==========================================================================");\r
        System.out.println(" TOPIC 11: Collections ALGORITHMS SUITE - BARRACKPORE");\r
        System.out.println("==========================================================================\\n");\r
\r
        List<String> studentRolls = new ArrayList<>(List.of(\r
                "Swadeep", "Tuhina", "Abhronila", "Debangshu", "Sourav"\r
        ));\r
\r
        // 1. sort() & reverse():\r
        Collections.sort(studentRolls);\r
        System.out.println(">>> 1. Sorted Alphabetically: " + studentRolls);\r
\r
        Collections.reverse(studentRolls);\r
        System.out.println(">>> 2. Reversed Sequence    : " + studentRolls);\r
\r
        // 2. binarySearch() (Pre-condition: list MUST be sorted in ascending order!):\r
        Collections.sort(studentRolls); // Re-sorting ascending\r
        int foundIndex = Collections.binarySearch(studentRolls, "Swadeep");\r
        int missingIndex = Collections.binarySearch(studentRolls, "Priyanka");\r
\r
        System.out.println("\\n>>> 3. binarySearch() Execution:");\r
        System.out.println("  'Swadeep' found at index   : " + foundIndex);\r
        System.out.println("  'Priyanka' missing result  : " + missingIndex + " (Negative insertion point: -1)");\r
\r
        // 3. swap() & shuffle():\r
        Collections.swap(studentRolls, 0, studentRolls.size() - 1);\r
        System.out.println("\\n>>> 4. Swapped First & Last : " + studentRolls);\r
\r
        Collections.shuffle(studentRolls); // Pseudo-random permutation\r
        System.out.println(">>> 5. Shuffled Randomly    : " + studentRolls);\r
\r
        System.out.println("\\n==========================================================================");\r
    }\r
}`,i=`================================================================================\r
JAVA CORE TUTORIAL - QUICK REVISION GUIDE\r
Module 007_008: Sorting, Comparable, Comparator & Collections\r
Topic 11: Collections Algorithms Suite\r
Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
================================================================================\r
\r
1. CORE ALGORITHMS:\r
   - 'Collections.sort(list)' → sorts list in-place (TimSort).\r
   - 'Collections.reverse(list)' → reverses list in-place.\r
   - 'Collections.binarySearch(list, key)' → O(log n) lookup (must be sorted!).\r
   - 'Collections.swap(list, i, j)' → swaps elements at indices i and j.\r
   - 'Collections.shuffle(list)' → pseudo-random permutation.\r
\r
================================================================================\r
Classroom Practice: Barrackpore Academy | Mentor: Sukanta Hui\r
================================================================================`,l=[{question:"What is the mandatory prerequisite before calling 'Collections.binarySearch(list, key)', and what does a negative return value indicate?",shortAnswer:"1. 'Prerequisite': the list MUST be sorted in ascending order according to natural ordering or the specified Comparator prior to calling 'binarySearch()'. If unsorted, the result is undefined. 2. 'Negative Return Value': if the element is not found, binarySearch returns '(-(insertion point) - 1)', indicating the exact index where the key would be inserted while preserving sort order.",explanation:"Classic binary search algorithm contract in java.util.Collections.",hint:"Must be sorted first; returns negative index '(-(insertion point) - 1)' if key is absent.",level:"Intermediate",codeExample:'Collections.sort(list); int idx = Collections.binarySearch(list, "Target");'}];function g(){return e.jsxs("div",{className:"space-y-12 px-4 md:px-8 py-8 text-slate-200 bg-slate-900 min-h-screen",children:[e.jsxs("header",{className:"space-y-4 border-b border-slate-800 pb-6",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"px-3 py-1 bg-sky-500/10 text-sky-400 border border-sky-500/20 text-xs font-semibold rounded-full uppercase tracking-wider",children:"Module 007_008 · Topic 11"}),e.jsx("span",{className:"px-3 py-1 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-xs font-semibold rounded-full",children:"Collections Algorithms"})]}),e.jsxs("h1",{className:"text-xl sm:text-2xl md:text-3xl font-bold text-white tracking-tight",children:["Algorithms: ",e.jsx("code",{className:"text-emerald-400 font-mono",children:"sort()"}),", ",e.jsx("code",{className:"text-sky-400 font-mono",children:"binarySearch()"}),", ",e.jsx("code",{className:"text-amber-400 font-mono",children:"reverse()"})," & ",e.jsx("code",{className:"text-purple-400 font-mono",children:"shuffle()"})]}),e.jsxs("p",{className:"text-base md:text-lg text-slate-400 leading-relaxed max-w-4xl",children:["Apply polymorphic collection algorithms: mastering ",e.jsx("code",{className:"text-emerald-300 font-mono",children:"O(log n)"})," binary search prerequisite rules, in-place sequence reversals, element swaps, and random permutations."]})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsxs("h2",{className:"text-2xl font-bold text-emerald-400 flex items-center gap-2",children:[e.jsx("span",{children:"💻"})," Hands-On Java Demo Code"]}),e.jsx(t,{fileModule:o,title:"CollectionsAlgorithmsSuiteDemo.java",highlightLines:[7,10,16,17,21,22,28,29,36,37]})]}),e.jsx("section",{className:"space-y-4",children:e.jsx(n,{title:"Collections Algorithms FAQs",questions:l})}),e.jsx("section",{className:"space-y-4",children:e.jsx(r,{content:i,title:"Module 007_008 Topic 11: Collections Algorithms",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Printable Note",downloadFileName:"007_008_topic11_collections_algorithms_note.txt"})}),e.jsx(s,{note:"Remember: You MUST sort a list before calling 'Collections.binarySearch()'! If the list is unsorted, binarySearch will return random, incorrect results! — Sukanta Hui"})]})}export{g as default};
