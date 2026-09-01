import{j as e}from"./vendor-react-core-Doz9nIC6.js";import{J as t}from"./JavaFileLoader-BfBG3xz_.js";import{F as n}from"./FAQTemplate-BHhlgA96.js";import{P as r}from"./PlainTextPrint-C08xhKA4.js";import{T as a}from"./TeacherSukantaHui-CEPuAfsb.js";import"./JavaCodeBlock-BwsLxS3r.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-DGCamHnX.js";const o=`/**\r
 * Java Core Tutorial - Module 007_003: Set Implementations & TreeSet Internals\r
 * Topic 13: TreeSet Performance: O(log n) Time Complexity & Self-Balancing Tree Invariants\r
 * Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
 */\r
\r
package com.coderaccotax.javatutorial.collections;\r
\r
import java.util.TreeSet;\r
\r
public class TreeSetLogNPerformanceDemo {\r
\r
    public static void main(String[] args) {\r
        System.out.println("==========================================================================");\r
        System.out.println(" TOPIC 13: TreeSet O(log n) PERFORMANCE PROFILE - BARRACKPORE");\r
        System.out.println("==========================================================================\\n");\r
\r
        TreeSet<Integer> scoreTree = new TreeSet<>();\r
        int elementCount = 100_000;\r
        for (int i = 0; i < elementCount; i++) scoreTree.add(i);\r
\r
        // 1. O(log n) MEMBERSHIP LOOKUP:\r
        long t1 = System.nanoTime();\r
        boolean found = scoreTree.contains(88888); // Tree height <= 2 * log2(100,000) ~ 33 node visits maximum!\r
        long t2 = System.nanoTime();\r
\r
        System.out.printf(">>> 1. O(log n) Tree Lookup: Element found=%b (Time: %d ns)%n", found, (t2 - t1));\r
\r
        System.out.println("\\n>>> MATHEMATICAL COMPLEXITY OF RED-BLACK TREES:");\r
        System.out.println("  - Element Count (n) : 100,000");\r
        System.out.println("  - Binary log2(n)    : ~17 levels");\r
        System.out.println("  - Max Tree Height   : 2 * log2(n + 1) = ~34 comparisons maximum!");\r
        System.out.println("  - While HashSet is O(1) average, TreeSet guarantees O(log n) in BOTH average AND worst cases!");\r
\r
        System.out.println("\\n==========================================================================");\r
    }\r
}`,s=`================================================================================\r
JAVA CORE TUTORIAL - QUICK REVISION GUIDE\r
Module 007_003: Set Implementations & TreeSet Internals\r
Topic 13: TreeSet O(log n) Performance\r
Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
================================================================================\r
\r
1. TREESET PERFORMANCE:\r
   - add(), remove(), contains() → O(log n).\r
   - Driven by Red-Black tree height.\r
   - For 100,000 elements: at most ~34 node visits.\r
   - Continuous sorted order maintained at all times.\r
\r
================================================================================\r
Classroom Practice: Barrackpore Academy | Mentor: Sukanta Hui\r
================================================================================`,i=[{question:"Why does 'TreeSet' provide O(log n) time complexity for basic operations instead of O(1)?",shortAnswer:"Because 'TreeSet' is a balanced binary search tree rather than a hash table. To find, insert, or delete an element, the algorithm starts at the root node and compares keys, traversing down the tree height. In a self-balancing Red-Black tree with 'n' elements, the tree height is mathematically capped at 2 * log2(n + 1), guaranteeing O(log n) time for both average and worst cases while maintaining continuous sorted order.",explanation:"Fundamental trade-off between hash-based and tree-based data structures.",hint:"Tree traversal steps down the balanced tree height, which is mathematically bounded by O(log n).",level:"Intermediate",codeExample:"treeSet.contains(key); // Maximum ~34 node comparisons for 100,000 elements"}];function x(){return e.jsxs("div",{className:"space-y-12 px-4 md:px-8 py-8 text-slate-200 bg-slate-900 min-h-screen",children:[e.jsxs("header",{className:"space-y-4 border-b border-slate-800 pb-6",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"px-3 py-1 bg-sky-500/10 text-sky-400 border border-sky-500/20 text-xs font-semibold rounded-full uppercase tracking-wider",children:"Module 007_003 · Topic 13"}),e.jsx("span",{className:"px-3 py-1 bg-amber-500/10 text-amber-400 border border-amber-500/20 text-xs font-semibold rounded-full",children:"O(log n) Complexity"})]}),e.jsxs("h1",{className:"text-xl sm:text-2xl md:text-3xl font-bold text-white tracking-tight",children:["TreeSet Performance: ",e.jsx("code",{className:"text-amber-400 font-mono",children:"O(log n)"})," Time Complexity & Tree Height Guarantees"]}),e.jsx("p",{className:"text-base md:text-lg text-slate-400 leading-relaxed max-w-4xl",children:"Analyze logarithmic tree bounds: calculating maximum Red-Black tree heights and evaluating the trade-off between O(1) hash lookups and O(log n) continuous sorting."})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsxs("h2",{className:"text-2xl font-bold text-emerald-400 flex items-center gap-2",children:[e.jsx("span",{children:"💻"})," Hands-On Java Demo Code"]}),e.jsx(t,{fileModule:o,title:"TreeSetLogNPerformanceDemo.java",highlightLines:[7,10,16,17,18,22,23,24]})]}),e.jsx("section",{className:"space-y-4",children:e.jsx(n,{title:"O(log n) Performance FAQs",questions:i})}),e.jsx("section",{className:"space-y-4",children:e.jsx(r,{content:s,title:"Module 007_003 Topic 13: TreeSet O(log n) Performance",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Printable Note",downloadFileName:"007_003_topic13_treeset_logn_performance_note.txt"})}),e.jsx(a,{note:"While HashSet is O(1), TreeSet is O(log n). For 1 million items, log₂(1,000,000) is only about 20 comparisons! That is still blazingly fast, and you get continuous sorted order for free! — Sukanta Hui"})]})}export{x as default};
