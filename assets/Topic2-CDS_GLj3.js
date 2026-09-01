import{j as e}from"./vendor-react-core-Doz9nIC6.js";import{J as n}from"./JavaFileLoader-BfBG3xz_.js";import{F as t}from"./FAQTemplate-BHhlgA96.js";import{P as a}from"./PlainTextPrint-C08xhKA4.js";import{T as r}from"./TeacherSukantaHui-CEPuAfsb.js";import"./JavaCodeBlock-BwsLxS3r.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-DGCamHnX.js";const s=`/**\r
 * Java Core Tutorial - Module 007_005: Map Implementations & HashMap Internals\r
 * Topic 2: Java 8 Functional Map Additions: computeIfAbsent(), merge(), and compute()\r
 * Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
 */\r
\r
package com.coderaccotax.javatutorial.collections;\r
\r
import java.util.ArrayList;\r
import java.util.HashMap;\r
import java.util.List;\r
import java.util.Map;\r
\r
public class Java8FunctionalMapMethodsDemo {\r
\r
    public static void main(String[] args) {\r
        System.out.println("==========================================================================");\r
        System.out.println(" TOPIC 2: JAVA 8 FUNCTIONAL MAP METHODS - BARRACKPORE");\r
        System.out.println("==========================================================================\\n");\r
\r
        // 1. computeIfAbsent(): Building Multi-Maps (Grouping Students by Center):\r
        Map<String, List<String>> centerBatches = new HashMap<>();\r
        centerBatches.computeIfAbsent("Barrackpore", k -> new ArrayList<>()).add("Swadeep Paul");\r
        centerBatches.computeIfAbsent("Barrackpore", k -> new ArrayList<>()).add("Tuhina Das");\r
        centerBatches.computeIfAbsent("Naihati", k -> new ArrayList<>()).add("Abhronila Das");\r
\r
        System.out.println(">>> 1. Grouping via computeIfAbsent():");\r
        centerBatches.forEach((center, students) ->\r
                System.out.println("  Center: " + center + " -> Students: " + students));\r
\r
        // 2. merge(): Word / Frequency Counting in 1 Line:\r
        Map<String, Integer> feeCollectionTotals = new HashMap<>();\r
        String[] branchReceipts = {"Barrackpore", "Naihati", "Barrackpore", "Shyamnagar", "Barrackpore"};\r
\r
        for (String branch : branchReceipts) {\r
            // If absent: sets to 5000; If present: adds 5000 to existing total!\r
            feeCollectionTotals.merge(branch, 5000, Integer::sum);\r
        }\r
\r
        System.out.println("\\n>>> 2. Frequency / Financial Aggregation via merge():");\r
        feeCollectionTotals.forEach((branch, total) ->\r
                System.out.printf("  Branch: %-12s -> Total Collected: ₹%d%n", branch, total));\r
\r
        // 3. putIfAbsent():\r
        feeCollectionTotals.putIfAbsent("Ichapur", 3000);\r
        System.out.println("\\n>>> 3. After putIfAbsent('Ichapur'): " + feeCollectionTotals);\r
\r
        System.out.println("\\n==========================================================================");\r
    }\r
}`,o=`================================================================================\r
JAVA CORE TUTORIAL - QUICK REVISION GUIDE\r
Module 007_005: Map Implementations & HashMap Internals\r
Topic 2: Java 8 Functional Map Methods\r
Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
================================================================================\r
\r
1. JAVA 8 FUNCTIONAL MAP METHODS:\r
   - 'computeIfAbsent(k, k → new List())': initializes grouping lists lazily.\r
   - 'merge(k, val, (old, new) → old + new)': aggregates values / counts frequencies.\r
   - 'putIfAbsent(k, v)': puts value only if key is absent.\r
   - 'forEach((k, v) → ...)': functional lambda traversal.\r
\r
================================================================================\r
Classroom Practice: Barrackpore Academy | Mentor: Sukanta Hui\r
================================================================================`,i=[{question:"How does 'map.merge(key, value, remappingFunction)' work, and why is it ideal for counting frequencies or aggregating totals?",shortAnswer:"If the specified key is NOT present (or associated with null), 'merge()' associates it with the given 'value'. If the key IS already present, it invokes the 'remappingFunction(oldVal, newVal)' (e.g. 'Integer::sum') and stores the computed result. If the function returns null, the key is removed. This replaces 5 lines of conditional boilerplate with a single atomic-like line.",explanation:"One of the most powerful functional methods introduced in Java 8.",hint:"Inserts initial value if absent, or combines old and new values using remappingFunction if present.",level:"Intermediate",codeExample:"map.merge(word, 1, Integer::sum); // Counts word frequencies in 1 line!"}];function g(){return e.jsxs("div",{className:"space-y-12 px-4 md:px-8 py-8 text-slate-200 bg-slate-900 min-h-screen",children:[e.jsxs("header",{className:"space-y-4 border-b border-slate-800 pb-6",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"px-3 py-1 bg-sky-500/10 text-sky-400 border border-sky-500/20 text-xs font-semibold rounded-full uppercase tracking-wider",children:"Module 007_005 · Topic 2"}),e.jsx("span",{className:"px-3 py-1 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-xs font-semibold rounded-full",children:"Java 8 Functional Maps"})]}),e.jsxs("h1",{className:"text-xl sm:text-2xl md:text-3xl font-bold text-white tracking-tight",children:["Java 8 Functional Additions: ",e.jsx("code",{className:"text-emerald-400 font-mono",children:"computeIfAbsent()"}),", ",e.jsx("code",{className:"text-sky-400 font-mono",children:"merge()"})," & ",e.jsx("code",{className:"text-amber-400 font-mono",children:"compute()"})]}),e.jsxs("p",{className:"text-base md:text-lg text-slate-400 leading-relaxed max-w-4xl",children:["Apply modern functional Map patterns: building lazy multi-map groups with ",e.jsx("code",{className:"text-emerald-300 font-mono",children:"computeIfAbsent"})," and one-line frequency aggregations with ",e.jsx("code",{className:"text-sky-300 font-mono",children:"merge()"}),"."]})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsxs("h2",{className:"text-2xl font-bold text-emerald-400 flex items-center gap-2",children:[e.jsx("span",{children:"💻"})," Hands-On Java Demo Code"]}),e.jsx(n,{fileModule:s,title:"Java8FunctionalMapMethodsDemo.java",highlightLines:[7,10,18,19,20,29,30]})]}),e.jsx("section",{className:"space-y-4",children:e.jsx(t,{title:"Functional Map FAQs",questions:i})}),e.jsx("section",{className:"space-y-4",children:e.jsx(a,{content:o,title:"Module 007_005 Topic 2: Java 8 Functional Map Methods",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Printable Note",downloadFileName:"007_005_topic2_java8_functional_map_methods_note.txt"})}),e.jsx(r,{note:"'map.merge(key, 1, Integer::sum)' is the single most famous Java 8 idiom for counting word frequencies! It replaces a 5-line if-else block with one clean, professional line! — Sukanta Hui"})]})}export{g as default};
