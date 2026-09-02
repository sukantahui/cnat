import{j as e}from"./vendor-react-core-Doz9nIC6.js";import{J as t}from"./JavaFileLoader-BfBG3xz_.js";import{F as r}from"./FAQTemplate-BHhlgA96.js";import{P as n}from"./PlainTextPrint-C08xhKA4.js";import{T as a}from"./TeacherSukantaHui-RpFLNJ5A.js";import"./JavaCodeBlock-BwsLxS3r.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-wprqVFW_.js";const s=`/**\r
 * Java Core Tutorial - Module 007_005: Map Implementations & HashMap Internals\r
 * Topic 16: java.util.LinkedHashMap: Insertion Order vs Access Order Modes\r
 * Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
 */\r
\r
package com.coderaccotax.javatutorial.collections;\r
\r
import java.util.LinkedHashMap;\r
import java.util.Map;\r
\r
public class LinkedHashMapOrderingModesDemo {\r
\r
    public static void main(String[] args) {\r
        System.out.println("==========================================================================");\r
        System.out.println(" TOPIC 16: LinkedHashMap INSERTION vs ACCESS ORDER - BARRACKPORE");\r
        System.out.println("==========================================================================\\n");\r
\r
        // 1. DEFAULT: INSERTION-ORDER MODE (accessOrder = false):\r
        Map<String, String> insertionOrderMap = new LinkedHashMap<>();\r
        insertionOrderMap.put("BRK-1", "Swadeep");\r
        insertionOrderMap.put("NAI-2", "Tuhina");\r
        insertionOrderMap.put("SHY-3", "Abhronila");\r
\r
        // Accessing first key:\r
        insertionOrderMap.get("BRK-1");\r
\r
        System.out.println(">>> 1. Insertion-Order Mode (Accessing 'BRK-1' does NOT change order):");\r
        System.out.println("  " + insertionOrderMap);\r
\r
        // 2. ACCESS-ORDER MODE (accessOrder = true via 3-arg constructor):\r
        // Constructor: (initialCapacity, loadFactor, accessOrder)\r
        Map<String, String> accessOrderMap = new LinkedHashMap<>(16, 0.75f, true);\r
        accessOrderMap.put("BRK-1", "Swadeep");\r
        accessOrderMap.put("NAI-2", "Tuhina");\r
        accessOrderMap.put("SHY-3", "Abhronila");\r
\r
        System.out.println("\\n>>> 2. Access-Order Mode Before Lookups:");\r
        System.out.println("  " + accessOrderMap);\r
\r
        // Accessing 'BRK-1' and 'NAI-2':\r
        accessOrderMap.get("BRK-1"); // Moves 'BRK-1' to the tail (Most Recently Used)!\r
        accessOrderMap.get("NAI-2"); // Moves 'NAI-2' to the tail!\r
\r
        System.out.println("\\n>>> 3. Access-Order Mode After get('BRK-1') and get('NAI-2'):");\r
        System.out.println("  " + accessOrderMap + " ('SHY-3' is now Least Recently Used at the Head!)");\r
\r
        System.out.println("\\n>>> HOW LinkedHashMap ACHIEVES ACCESS ORDERING:");\r
        System.out.println("  1. Extends 'HashMap.Node' into 'LinkedHashMap.Entry' which adds 'before' and 'after' pointers.");\r
        System.out.println("  2. When 'get(key)' is invoked with 'accessOrder=true', the node is unlinked from its current position and re-linked at the TAIL.");\r
        System.out.println("  3. The HEAD of the doubly linked list perpetually holds the LEAST RECENTLY USED (LRU) entry!");\r
\r
        System.out.println("\\n==========================================================================");\r
    }\r
}`,o=`================================================================================\r
JAVA CORE TUTORIAL - QUICK REVISION GUIDE\r
Module 007_005: Map Implementations & HashMap Internals\r
Topic 16: LinkedHashMap Ordering Modes\r
Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
================================================================================\r
\r
1. LINKEDHASHMAP MODES:\r
   - Default: insertion-order (reflects put sequence).\r
   - Access-order: 'new LinkedHashMap<>(16, 0.75f, true)'.\r
   - 'get()' moves entry to TAIL (Most Recently Used).\r
   - HEAD always holds Least Recently Used (LRU) entry.\r
   - Singly hash buckets + global doubly linked list ('before', 'after').\r
\r
================================================================================\r
Classroom Practice: Barrackpore Academy | Mentor: Sukanta Hui\r
================================================================================`,i=[{question:"What is the difference between 'insertion-order' and 'access-order' modes in 'java.util.LinkedHashMap'?",shortAnswer:"1. 'Insertion-Order (default)': iteration order reflects the exact chronological order in which keys were first inserted into the map. Calling 'get()' does not alter the order. 2. 'Access-Order (accessOrder = true)': every time 'get(k)' or 'put(k, v)' accesses an existing entry, that entry is automatically moved to the TAIL of the internal doubly linked list. Consequently, the HEAD always points to the Least Recently Used (LRU) element, making it ideal for LRU caching.",explanation:"Core mechanism of LinkedHashMap configured via new LinkedHashMap(cap, loadFactor, accessOrder).",hint:"Access-order mode moves accessed elements to the tail, keeping least-recently-used items at the head.",level:"Intermediate",codeExample:"Map<K,V> map = new LinkedHashMap<>(16, 0.75f, true); // access-order mode"}];function x(){return e.jsxs("div",{className:"space-y-12 px-4 md:px-8 py-8 text-slate-200 bg-slate-900 min-h-screen",children:[e.jsxs("header",{className:"space-y-4 border-b border-slate-800 pb-6",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"px-3 py-1 bg-sky-500/10 text-sky-400 border border-sky-500/20 text-xs font-semibold rounded-full uppercase tracking-wider",children:"Module 007_005 · Topic 16"}),e.jsx("span",{className:"px-3 py-1 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-xs font-semibold rounded-full",children:"LinkedHashMap Modes"})]}),e.jsxs("h1",{className:"text-xl sm:text-2xl md:text-3xl font-bold text-white tracking-tight",children:[e.jsx("code",{className:"text-emerald-400 font-mono",children:"LinkedHashMap"}),": Insertion Order vs Access Order (",e.jsx("code",{className:"text-sky-400 font-mono",children:"accessOrder = true"}),")"]}),e.jsxs("p",{className:"text-base md:text-lg text-slate-400 leading-relaxed max-w-4xl",children:["Master access-driven collection reordering: configuring ",e.jsx("code",{className:"text-emerald-300 font-mono",children:"accessOrder = true"})," to automatically relocate accessed entries to the tail of the doubly linked chain."]})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsxs("h2",{className:"text-2xl font-bold text-emerald-400 flex items-center gap-2",children:[e.jsx("span",{children:"💻"})," Hands-On Java Demo Code"]}),e.jsx(t,{fileModule:s,title:"LinkedHashMapOrderingModesDemo.java",highlightLines:[7,10,16,17,27,28,36,37,43,44]})]}),e.jsx("section",{className:"space-y-4",children:e.jsx(r,{title:"LinkedHashMap Modes FAQs",questions:i})}),e.jsx("section",{className:"space-y-4",children:e.jsx(n,{content:o,title:"Module 007_005 Topic 16: LinkedHashMap Modes",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Printable Note",downloadFileName:"007_005_topic16_linkedhashmap_ordering_modes_note.txt"})}),e.jsx(a,{note:"When you pass 'true' as the third argument to LinkedHashMap, every time you call 'get()', Java moves that item to the very back of the line! The oldest unused item stays at the front, ready to be evicted! — Sukanta Hui"})]})}export{x as default};
