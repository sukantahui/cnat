import{j as e}from"./vendor-react-core-Doz9nIC6.js";import{J as t}from"./JavaFileLoader-BfBG3xz_.js";import{F as r}from"./FAQTemplate-BHhlgA96.js";import{P as n}from"./PlainTextPrint-C08xhKA4.js";import{T as s}from"./TeacherSukantaHui-DDN87fI5.js";import"./JavaCodeBlock-BwsLxS3r.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-DEsnU7fn.js";const a=`/**\r
 * Java Core Tutorial - Module 007_009: Collections Performance & Big-O Complexities\r
 * Topic 3: Memory Footprint Analysis: Object Headers, Compressed OOPs & JOL Internals\r
 * Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
 */\r
\r
package com.coderaccotax.javatutorial.collections;\r
\r
public class MemoryFootprintAnalysisJolDemo {\r
\r
    public static void main(String[] args) {\r
        System.out.println("==========================================================================");\r
        System.out.println(" TOPIC 3: MEMORY FOOTPRINT & OBJECT HEADER ANALYSIS - BARRACKPORE");\r
        System.out.println("==========================================================================\\n");\r
\r
        System.out.println(">>> 64-BIT JVM MEMORY OBJECT LAYOUT (WITH COMPRESSED OOPS):");\r
        System.out.println("  1. Standard Object Header : 12 bytes (8-byte Mark Word + 4-byte Klass Word).");\r
        System.out.println("  2. 8-Byte Alignment Pad   : All objects on 64-bit JVMs are rounded up to multiples of 8 bytes!");\r
        System.out.println();\r
        System.out.println(">>> MEMORY COST PER ENTRY ACROSS JCF IMPLEMENTATIONS (1,000,000 Elements):");\r
        System.out.println("+-------------------+-------------------+-------------------+---------------------------+");\r
        System.out.println("| Implementation    | Node Class Size   | Bytes Per Element | Total RAM for 1M Elements |");\r
        System.out.println("+-------------------+-------------------+-------------------+---------------------------+");\r
        System.out.println("| Primitive int[]   | N/A (Flat array)  | 4 bytes           | ~4 MB (Maximum Density)   |");\r
        System.out.println("| ArrayList<Integer>| Ref (4B) + Box(16B| 20 - 24 bytes     | ~24 MB (6x primitive!)    |");\r
        System.out.println("| LinkedList<Int>   | Node (24B) + (16B)| 40 - 48 bytes     | ~48 MB (12x primitive!)   |");\r
        System.out.println("| HashSet<Integer>  | Map.Node (32B)+16B| 48 - 56 bytes     | ~56 MB (14x primitive!)   |");\r
        System.out.println("| HashMap<Int, Int> | Node (32B)+16B+16B| ~64 bytes         | ~64 MB (16x primitive!)   |");\r
        System.out.println("+-------------------+-------------------+-------------------+---------------------------+");\r
\r
        System.out.println("\\n>>> WHY NODE-BASED COLLECTIONS CONSUME MASSIVE RAM:");\r
        System.out.println("  - In LinkedList: Each 'Node' has Object header (12B) + item ref (4B) + next ref (4B) + prev ref (4B) = 24 bytes just for the container!");\r
        System.out.println("  - Plus the boxed 'Integer' object: Object header (12B) + int value (4B) = 16 bytes!");\r
        System.out.println("  - Storing a single 4-byte integer in LinkedList consumes 40 to 48 bytes of RAM (1000% memory overhead!).");\r
\r
        System.out.println("\\n==========================================================================");\r
    }\r
}`,o=`================================================================================\r
JAVA CORE TUTORIAL - QUICK REVISION GUIDE\r
Module 007_009: Collections Performance & Big-O Complexities\r
Topic 3: Memory Footprint & JOL Analysis\r
Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
================================================================================\r
\r
1. MEMORY LAYOUT ON 64-BIT JVM:\r
   - Object Header: 12 bytes (Mark Word 8B + Compressed Klass 4B).\r
   - 8-byte boundary alignment padding.\r
   - int[]: 4 bytes per element (~4 MB for 1M).\r
   - ArrayList<Integer>: ~24 MB for 1M.\r
   - LinkedList<Integer>: ~48 MB for 1M.\r
   - HashMap<K, V>: ~64 MB for 1M.\r
\r
================================================================================\r
Classroom Practice: Barrackpore Academy | Mentor: Sukanta Hui\r
================================================================================`,i=[{question:"Why does storing 1,000,000 integers in a 'LinkedList<Integer>' consume approximately 48 MB of RAM, compared to only 4 MB for a primitive 'int[]' array?",shortAnswer:"1. 'Primitive int[]': stores raw 4-byte integers contiguously in a single array header, consuming exactly ~4 MB. 2. 'LinkedList<Integer>': each element requires a separate heap-allocated 'Node' object (12B header + 4B item ref + 4B next ref + 4B prev ref = 24B) PLUS a separate heap-allocated 'Integer' wrapper object (12B header + 4B int = 16B), plus array references and 8-byte alignment padding. This totals 40 to 48 bytes per element (12x more memory).",explanation:"Deep-dive JVM memory layout analysis.",hint:"Primitive array is 4 bytes/int; LinkedList creates a Node object (24B) + Integer object (16B) = ~48 bytes/element.",level:"Advanced",codeExample:"// int[] arr = 4 MB | ArrayList<Integer> = 24 MB | LinkedList<Integer> = 48 MB"}];function x(){return e.jsxs("div",{className:"space-y-12 px-4 md:px-8 py-8 text-slate-200 bg-slate-900 min-h-screen",children:[e.jsxs("header",{className:"space-y-4 border-b border-slate-800 pb-6",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"px-3 py-1 bg-sky-500/10 text-sky-400 border border-sky-500/20 text-xs font-semibold rounded-full uppercase tracking-wider",children:"Module 007_009 · Topic 3"}),e.jsx("span",{className:"px-3 py-1 bg-amber-500/10 text-amber-400 border border-amber-500/20 text-xs font-semibold rounded-full",children:"Memory Footprint"})]}),e.jsxs("h1",{className:"text-xl sm:text-2xl md:text-3xl font-bold text-white tracking-tight",children:["Memory Footprint Analysis: Object Headers, References & ",e.jsx("code",{className:"text-amber-400 font-mono",children:"JOL"})," Internals"]}),e.jsx("p",{className:"text-base md:text-lg text-slate-400 leading-relaxed max-w-4xl",children:"Dissect JVM memory consumption: analyzing 12-byte object headers, 8-byte alignment padding, pointer overhead, and heap memory bloat across node-based collection architectures."})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsxs("h2",{className:"text-2xl font-bold text-emerald-400 flex items-center gap-2",children:[e.jsx("span",{children:"💻"})," Hands-On Java Demo Code"]}),e.jsx(t,{fileModule:a,title:"MemoryFootprintAnalysisJolDemo.java",highlightLines:[7,10,13,14,18,19,20,21,22,27,28,29]})]}),e.jsx("section",{className:"space-y-4",children:e.jsx(r,{title:"Memory Footprint FAQs",questions:i})}),e.jsx("section",{className:"space-y-4",children:e.jsx(n,{content:o,title:"Module 007_009 Topic 3: Memory Footprint Analysis",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Printable Note",downloadFileName:"007_009_topic3_memory_footprint_analysis_note.txt"})}),e.jsx(s,{note:"Every Java object carries a 12-byte backpack called the Object Header! That's why storing 1 million numbers in a LinkedList takes 48 MB, while a simple int[] array takes only 4 MB! Choose your data structures wisely in memory-constrained microservices! — Sukanta Hui"})]})}export{x as default};
