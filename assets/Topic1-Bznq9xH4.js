import{j as e}from"./vendor-react-core-Doz9nIC6.js";import{J as n}from"./JavaFileLoader-BfBG3xz_.js";import{F as t}from"./FAQTemplate-BHhlgA96.js";import{P as r}from"./PlainTextPrint-C08xhKA4.js";import{T as o}from"./TeacherSukantaHui-BaJcBHAy.js";import"./JavaCodeBlock-BwsLxS3r.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-8ao-0upJ.js";const a=`/**\r
 * Java Core Tutorial - Module 010_005: Garbage Collection Algorithms, Collectors & GC Tuning\r
 * Topic 1: Determining Object Liveness - Reference Counting vs GC Roots Reachability\r
 * Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
 */\r
\r
package com.coderaccotax.javatutorial.gc;\r
\r
public class LivenessRefcountingVsGcrootsDemo {\r
\r
    public static class CircularNode {\r
        public String label;\r
        public CircularNode next;\r
\r
        public CircularNode(String label) { this.label = label; }\r
    }\r
\r
    public static void main(String[] args) {\r
        System.out.println("==========================================================================");\r
        System.out.println(" TOPIC 1: LIVENESS - REF COUNTING VS GC ROOTS - BARRACKPORE");\r
        System.out.println("==========================================================================\\n");\r
\r
        // 1. Creating an isolated circular reference (Island of Isolation):\r
        CircularNode nodeA = new CircularNode("Barrackpore Node A");\r
        CircularNode nodeB = new CircularNode("Barrackpore Node B");\r
\r
        nodeA.next = nodeB; // A points to B\r
        nodeB.next = nodeA; // B points to A (Circular reference!)\r
\r
        System.out.println(">>> 1. CREATING CIRCULAR REFERENCE ISLAND:");\r
        System.out.println("  - nodeA.next points to: " + nodeA.next.label);\r
        System.out.println("  - nodeB.next points to: " + nodeB.next.label);\r
\r
        // 2. Severing references from the Stack (GC Root):\r
        nodeA = null;\r
        nodeB = null;\r
\r
        System.out.println("\\n>>> 2. SEVERING GC ROOT REFERENCES (nodeA = null, nodeB = null):");\r
        System.out.println("  - UNDER REFERENCE COUNTING: Both objects have count = 1 (each referenced by the other).");\r
        System.out.println("    --> Fatal Bug: Reference Counting CANNOT collect this memory (Memory Leak)!\\n");\r
        System.out.println("  - UNDER JAVA GC ROOTS REACHABILITY (Tracing):");\r
        System.out.println("    --> GC starts at GC Roots (active stack frames). Neither Node A nor Node B is reachable.");\r
        System.out.println("    --> Java correctly collects both objects as Garbage! (Island of Isolation reclaimed!)");\r
\r
        System.out.println("\\n==========================================================================");\r
    }\r
}\r
`,s=`================================================================================\r
JAVA CORE TUTORIAL - QUICK REVISION GUIDE\r
Module 010_005: Garbage Collection Algorithms, Collectors & GC Tuning\r
Topic 1: Determining Liveness (Reference Counting vs GC Roots)\r
Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
================================================================================\r
\r
1. WHY REFERENCE COUNTING WAS REJECTED BY JAVA:\r
   - In Reference Counting, each object holds an integer count of inbound pointers.\r
   - Flaw: Circular References ('A → B → A') maintain a count &ge; 1 even when totally disconnected\r
     from the running application ('Island of Isolation').\r
\r
2. JAVA'S SOLUTION: GC ROOTS REACHABILITY ANALYSIS (Tracing):\r
   - A graph traversal algorithm starting from a set of known live pointers ('GC Roots').\r
   - Traverses all object references.\r
   - Any object in the heap that is not reachable via any path from a GC Root is marked dead.\r
\r
================================================================================\r
Classroom Practice: Barrackpore Academy | Mentor: Sukanta Hui\r
================================================================================\r
`,i=[{question:"Why does Java use GC Roots Reachability Analysis instead of Reference Counting?",shortAnswer:"Reference counting fails to reclaim circular references (where two unreferenced objects point to each other, creating an Island of Isolation). Reachability analysis traverses object graphs from live GC Roots, ensuring circular dead structures are collected.",explanation:"Guarantees 100% reclamation of isolated cyclic graphs.",hint:"Reference counting cannot collect circular references (Islands of Isolation).",level:"Beginner",codeExample:"nodeA.next = nodeB; nodeB.next = nodeA; nodeA = null; nodeB = null;"},{question:"What is an 'Island of Isolation' in Java memory management?",shortAnswer:"A group of two or more objects that reference each other in a cycle, but where no object in the entire group is reachable from any active GC Root. The JVM Garbage Collector reclaims the entire group together.",explanation:"Reachable among themselves, but unreachable from any live thread.",hint:"A cycle of objects referencing each other with no connection to any GC Root.",level:"Intermediate",codeExample:"A <-> B with no external live pointers → Both collected by GC."}];function f(){return e.jsxs("div",{className:"space-y-12 px-4 md:px-8 py-8 text-slate-200 bg-slate-900 min-h-screen",children:[e.jsxs("header",{className:"space-y-4 border-b border-slate-800 pb-6",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"px-3 py-1 bg-sky-500/10 text-sky-400 border border-sky-500/20 text-xs font-semibold rounded-full uppercase tracking-wider",children:"Module 010_005 · Topic 1"}),e.jsx("span",{className:"px-3 py-1 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-xs font-semibold rounded-full",children:"Garbage Collection & Tuning"})]}),e.jsxs("h1",{className:"text-xl sm:text-2xl md:text-3xl font-bold text-white tracking-tight",children:["Determining Object Liveness: ",e.jsx("code",{className:"text-emerald-400 font-mono",children:"Reference Counting vs GC Roots Reachability"})]}),e.jsx("p",{className:"text-base md:text-lg text-slate-400 leading-relaxed max-w-4xl",children:"Why Java rejected Reference Counting: the fatal circular reference bug (A references B, B references A) and how Tracing Reachability solves it."})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsxs("h2",{className:"text-2xl font-bold text-emerald-400 flex items-center gap-2",children:[e.jsx("span",{children:"💻"})," Hands-On Java Demo Code"]}),e.jsx(n,{fileModule:a,title:"LivenessRefcountingVsGcrootsDemo.java",highlightLines:[18,25,34,43]})]}),e.jsx("section",{className:"space-y-4",children:e.jsx(t,{title:"Garbage Collection FAQs",questions:i})}),e.jsx("section",{className:"space-y-4",children:e.jsx(r,{content:s,title:"Module 010_005 Topic 1: Liveness: Reference Counting vs GC Roots",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Printable Note",downloadFileName:"010_005_topic1_liveness_refcounting_vs_gcroots_note.txt"})}),e.jsx(o,{note:"Reference Counting fails completely on circular references (Node A points to Node B, and Node B points to Node A)! Java uses GC Roots Tracing Reachability Analysis instead: if you cannot walk to the object from a GC Root, it is garbage! — Sukanta Hui"})]})}export{f as default};
