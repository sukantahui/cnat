import{j as e}from"./vendor-react-core-Doz9nIC6.js";import{J as t}from"./JavaFileLoader-BfBG3xz_.js";import{F as n}from"./FAQTemplate-BHhlgA96.js";import{P as r}from"./PlainTextPrint-C08xhKA4.js";import{T as s}from"./TeacherSukantaHui-DDN87fI5.js";import"./JavaCodeBlock-BwsLxS3r.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-DEsnU7fn.js";const a=`/**\r
 * Java Core Tutorial - Module 003_007: Nested & Inner Classes\r
 * Topic 15: Performance & Memory Footprint: Static Nested vs Member Inner Classes Benchmark\r
 * Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
 */\r
\r
package com.coderaccotax.javatutorial.nested;\r
\r
public class InnerVsStaticMemoryBenchmarkDemo {\r
\r
    // Non-static inner class (contains hidden 8-byte pointer to outer object):\r
    public class MemberInnerNode {\r
        int value;\r
        MemberInnerNode(int v) { this.value = v; }\r
    }\r
\r
    // Static nested class (NO outer pointer; saves RAM across millions of nodes):\r
    public static class StaticNestedNode {\r
        int value;\r
        StaticNestedNode(int v) { this.value = v; }\r
    }\r
\r
    public static void main(String[] args) {\r
        System.out.println("==========================================================================");\r
        System.out.println(" TOPIC 15: MEMORY FOOTPRINT BENCHMARK - BARRACKPORE");\r
        System.out.println("==========================================================================\\n");\r
\r
        int nodeCount = 10_000_000;\r
        System.out.println(">>> Analyzing Memory Cost of " + nodeCount + " Nodes:");\r
        System.out.println();\r
        System.out.println("  1. MemberInnerNode (Non-static):");\r
        System.out.println("     - Extra 8-byte pointer (this$0) per instance.");\r
        System.out.println("     - 10M nodes = ~80 MB extra memory overhead!");\r
        System.out.println();\r
        System.out.println("  2. StaticNestedNode (Static):");\r
        System.out.println("     - Zero outer pointer overhead.");\r
        System.out.println("     - Saves 80 MB of heap memory, reduces GC pressure!");\r
\r
        System.out.println("\\n>>> VERDICT (Effective Java Item 24):");\r
        System.out.println("  ALWAYS prefer static member classes over non-static unless access to enclosing instance is required!");\r
\r
        System.out.println("\\n==========================================================================");\r
    }\r
}`,o=`================================================================================\r
JAVA CORE TUTORIAL - QUICK REVISION GUIDE\r
Module 003_007: Nested & Inner Classes\r
Topic 15: Memory & Performance Benchmark\r
Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
================================================================================\r
\r
1. PERFORMANCE RULES:\r
   - Non-static inner: +8 bytes per object (this$0 pointer).\r
   - Static nested: Zero extra pointer overhead.\r
   - High volume (1M+ nodes) → ALWAYS use static nested classes.\r
\r
================================================================================\r
Classroom Practice: Barrackpore Academy | Mentor: Sukanta Hui\r
================================================================================`,i=[{question:"Why does Effective Java Item 24 recommend: 'Favor static member classes over non-static'?",shortAnswer:"Every non-static inner class instance retains a hidden reference ('this$0') to its enclosing instance, consuming an extra 8 bytes of heap memory per object and adding constructor time overhead. Static nested classes have no such reference, preventing memory leaks and saving memory in high-volume data structures.",explanation:"Standard optimization across Java Collections Framework (e.g. TreeMap.Entry, HashMap.Node).",hint:"Saves 8 bytes per instance and eliminates memory leak risks.",level:"Intermediate",codeExample:"public static class Node<E> { E item; Node<E> next; } // Zero outer overhead"}];function y(){return e.jsxs("div",{className:"space-y-12 px-4 md:px-8 py-8 text-slate-200 bg-slate-900 min-h-screen",children:[e.jsxs("header",{className:"space-y-4 border-b border-slate-800 pb-6",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"px-3 py-1 bg-sky-500/10 text-sky-400 border border-sky-500/20 text-xs font-semibold rounded-full uppercase tracking-wider",children:"Module 003_007 · Topic 15"}),e.jsx("span",{className:"px-3 py-1 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-xs font-semibold rounded-full",children:"Heap Optimization"})]}),e.jsxs("h1",{className:"text-xl sm:text-2xl md:text-3xl font-bold text-white tracking-tight",children:["Performance & Memory Footprint: ",e.jsx("code",{className:"text-emerald-400 font-mono",children:"Static Nested"})," vs ",e.jsx("code",{className:"text-amber-400 font-mono",children:"Member Inner"})]}),e.jsx("p",{className:"text-base md:text-lg text-slate-400 leading-relaxed max-w-4xl",children:"Quantify JVM heap overhead: measuring the 8-byte pointer cost of non-static inner instances and applying Effective Java Item 24 across millions of data structures."})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsxs("h2",{className:"text-2xl font-bold text-emerald-400 flex items-center gap-2",children:[e.jsx("span",{children:"💻"})," Hands-On Java Demo Code"]}),e.jsx(t,{fileModule:a,title:"InnerVsStaticMemoryBenchmarkDemo.java",highlightLines:[7,10,11,16,17,24,28,32]})]}),e.jsx("section",{className:"space-y-4",children:e.jsx(n,{title:"Performance FAQs",questions:i})}),e.jsx("section",{className:"space-y-4",children:e.jsx(r,{content:o,title:"Module 003_007 Topic 15: Memory Benchmark",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Printable Note",downloadFileName:"003_007_topic15_memory_benchmark_note.txt"})}),e.jsx(s,{note:"If you build a graph or tree with 10 million nodes, using static nested Node classes saves almost 100 megabytes of memory compared to non-static inner nodes! — Sukanta Hui"})]})}export{y as default};
