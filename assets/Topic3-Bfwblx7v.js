import{j as e}from"./vendor-react-core-Doz9nIC6.js";import{J as t}from"./JavaFileLoader-BfBG3xz_.js";import{F as a}from"./FAQTemplate-BHhlgA96.js";import{P as n}from"./PlainTextPrint-C08xhKA4.js";import{T as r}from"./TeacherSukantaHui-DDN87fI5.js";import"./JavaCodeBlock-BwsLxS3r.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-DEsnU7fn.js";const i=`/**\r
 * Java Core Tutorial - Module 007_005: Map Implementations & HashMap Internals\r
 * Topic 3: java.util.HashMap Internal Architecture Deep Dive: High-Level Overview\r
 * Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
 */\r
\r
package com.coderaccotax.javatutorial.collections;\r
\r
public class HashMapInternalArchitectureOverviewDemo {\r
\r
    public static void main(String[] args) {\r
        System.out.println("==========================================================================");\r
        System.out.println(" TOPIC 3: HashMap INTERNAL ARCHITECTURE OVERVIEW - BARRACKPORE");\r
        System.out.println("==========================================================================\\n");\r
\r
        System.out.println(">>> THE 5 FOUNDATIONAL PILLARS OF java.util.HashMap:");\r
        System.out.println("  1. Backing Bucket Array : 'Node<K,V>[] table' (Contiguous array of hash buckets).");\r
        System.out.println("  2. Hash Spread Function : 'hash = (h = key.hashCode()) ^ (h >>> 16)' (Spreads high bits into low bits).");\r
        System.out.println("  3. Bitwise Bucket Index : 'index = (table.length - 1) & hash' (Replaces slow modulo '%' with 1-cycle bitwise AND).");\r
        System.out.println("  4. Collision Handling   : Separate Chaining via Singly Linked List (Node<K,V>).");\r
        System.out.println("  5. Java 8 Treeification : When bucket chain >= 8 and table capacity >= 64, list converts to Red-Black Tree (TreeNode<K,V>)!");\r
\r
        System.out.println("\\n>>> DEFAULT TUNING CONSTANTS IN HashMap.java:");\r
        System.out.println("  - DEFAULT_INITIAL_CAPACITY = 16   (Must be a power of 2!)");\r
        System.out.println("  - MAXIMUM_CAPACITY         = 1 << 30 (1,073,741,824)");\r
        System.out.println("  - DEFAULT_LOAD_FACTOR      = 0.75f");\r
        System.out.println("  - TREEIFY_THRESHOLD        = 8");\r
        System.out.println("  - UNTREEIFY_THRESHOLD      = 6");\r
        System.out.println("  - MIN_TREEIFY_CAPACITY     = 64");\r
\r
        System.out.println("\\n==========================================================================");\r
    }\r
}`,s=`================================================================================\r
JAVA CORE TUTORIAL - QUICK REVISION GUIDE\r
Module 007_005: Map Implementations & HashMap Internals\r
Topic 3: HashMap Architecture Overview\r
Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
================================================================================\r
\r
1. HASHMAP PILLARS:\r
   - 'Node<K, V>[] table' bucket array.\r
   - Hash function: '(h = key.hashCode()) ^ (h >>> 16)'.\r
   - Index formula: '(n - 1) & hash'.\r
   - Initial Capacity: 16 (power of 2).\r
   - Load Factor: 0.75 (Threshold = 12).\r
   - Treeify at 8 nodes (>= 64 capacity); Untreeify at 6 nodes.\r
\r
================================================================================\r
Classroom Practice: Barrackpore Academy | Mentor: Sukanta Hui\r
================================================================================`,o=[{question:"What are the core tuning constants defined in 'java.util.HashMap' (Initial Capacity, Load Factor, Treeify Threshold)?",shortAnswer:"1. 'DEFAULT_INITIAL_CAPACITY = 16' (1 << 4, must be a power of 2). 2. 'DEFAULT_LOAD_FACTOR = 0.75f' (balances time vs space cost). 3. 'TREEIFY_THRESHOLD = 8' (converts bucket list to Red-Black tree). 4. 'UNTREEIFY_THRESHOLD = 6' (converts tree back to list upon shrinkage). 5. 'MIN_TREEIFY_CAPACITY = 64' (minimum table capacity required for treeification).",explanation:"Fundamental constants defined in the JDK HashMap source code.",hint:"Initial Capacity: 16, Load Factor: 0.75, Treeify Threshold: 8, Untreeify Threshold: 6, Min Treeify Capacity: 64.",level:"Intermediate",codeExample:"static final int DEFAULT_INITIAL_CAPACITY = 1 << 4; static final float DEFAULT_LOAD_FACTOR = 0.75f;"}];function x(){return e.jsxs("div",{className:"space-y-12 px-4 md:px-8 py-8 text-slate-200 bg-slate-900 min-h-screen",children:[e.jsxs("header",{className:"space-y-4 border-b border-slate-800 pb-6",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"px-3 py-1 bg-sky-500/10 text-sky-400 border border-sky-500/20 text-xs font-semibold rounded-full uppercase tracking-wider",children:"Module 007_005 · Topic 3"}),e.jsx("span",{className:"px-3 py-1 bg-purple-500/10 text-purple-400 border border-purple-500/20 text-xs font-semibold rounded-full",children:"HashMap Architecture"})]}),e.jsxs("h1",{className:"text-xl sm:text-2xl md:text-3xl font-bold text-white tracking-tight",children:[e.jsx("code",{className:"text-emerald-400 font-mono",children:"java.util.HashMap"})," Internal Architecture Deep Dive: Overview"]}),e.jsx("p",{className:"text-base md:text-lg text-slate-400 leading-relaxed max-w-4xl",children:"Dissect HashMap internals: cataloging the 5 architectural pillars (bucket array, hash spreading, bitwise indexing, separate chaining, and Java 8 treeification)."})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsxs("h2",{className:"text-2xl font-bold text-emerald-400 flex items-center gap-2",children:[e.jsx("span",{children:"💻"})," Hands-On Java Demo Code"]}),e.jsx(t,{fileModule:i,title:"HashMapInternalArchitectureOverviewDemo.java",highlightLines:[7,10,13,14,15,16,17,21,22,23,24,25]})]}),e.jsx("section",{className:"space-y-4",children:e.jsx(a,{title:"HashMap Architecture FAQs",questions:o})}),e.jsx("section",{className:"space-y-4",children:e.jsx(n,{content:s,title:"Module 007_005 Topic 3: HashMap Architecture Overview",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Printable Note",downloadFileName:"007_005_topic3_hashmap_architecture_overview_note.txt"})}),e.jsx(r,{note:"Every Java developer is asked about HashMap internals in technical interviews! We are going to explore all 5 pillars step by step—from bitwise hash spreading to bucket tables and Red-Black treeification! — Sukanta Hui"})]})}export{x as default};
