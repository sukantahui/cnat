import{j as e}from"./vendor-react-core-Doz9nIC6.js";import{J as t}from"./JavaFileLoader-BfBG3xz_.js";import{F as n}from"./FAQTemplate-BHhlgA96.js";import{P as o}from"./PlainTextPrint-C08xhKA4.js";import{T as r}from"./TeacherSukantaHui-RpFLNJ5A.js";import"./JavaCodeBlock-BwsLxS3r.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-wprqVFW_.js";const a=`/**\r
 * Java Core Tutorial - Module 010_006: JVM Profiling, Heap Dumps & Memory Leak Diagnosis\r
 * Topic 16: The MAT Dominator Tree - Retained Memory Accumulation\r
 * Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
 */\r
\r
package com.coderaccotax.javatutorial.profiling;\r
\r
public class MatDominatorTreeDemo {\r
\r
    public static void main(String[] args) {\r
        System.out.println("==========================================================================");\r
        System.out.println(" TOPIC 16: THE MAT DOMINATOR TREE - BARRACKPORE ACADEMY");\r
        System.out.println("==========================================================================\\n");\r
\r
        System.out.println(">>> WHAT IS A DOMINATOR IN GRAPH THEORY:");\r
        System.out.println("  - Node A 'dominates' Node B if EVERY path from the GC Roots to B must pass through A.");\r
        System.out.println("  - Consequence: If Node A is garbage collected, Node B is GUARANTEED to become unreachable and collected too!\\n");\r
\r
        System.out.println(">>> DOMINATOR TREE HIERARCHY EXAMPLE:");\r
        System.out.println("  [GC ROOT] -> StudentRegistry (Dominator) [Retained Heap: 500 MB]");\r
        System.out.println("                 ├── HashMap$Node[]        [Retained Heap: 499 MB]");\r
        System.out.println("                 │     ├── StudentRecord 1  [Retained Heap: 250 MB]");\r
        System.out.println("                 │     └── StudentRecord 2  [Retained Heap: 249 MB]");\r
        System.out.println("                 └── RegistryConfig        [Retained Heap: 1 MB]\\n");\r
\r
        System.out.println(">>> WHY IT IS INVALUABLE:");\r
        System.out.println("  - It instantly identifies the 'Head of the Snake' — the single parent object responsible for hoarding memory!");\r
        System.out.println("==========================================================================");\r
    }\r
}\r
`,i=`================================================================================\r
JAVA CORE TUTORIAL - QUICK REVISION GUIDE\r
Module 010_006: JVM Profiling, Heap Dumps & Memory Leak Diagnosis\r
Topic 16: The Dominator Tree\r
Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
================================================================================\r
\r
1. DOMINATOR TREE DEFINITION:\r
   - Transforms the complex, cyclical object reference graph into a strict, tree-shaped\r
     dominator hierarchy.\r
   - The top nodes in the Dominator Tree are the single largest memory retainers in the JVM.\r
\r
2. IMMEDIATE DOMINATOR (idom):\r
   - The unique closest node that dominates a target node.\r
\r
================================================================================\r
Classroom Practice: Barrackpore Academy | Mentor: Sukanta Hui\r
================================================================================\r
`,s=[{question:"What does it mean if Object X dominates Object Y in the Eclipse MAT Dominator Tree?",shortAnswer:"It means that every reference path from the GC Roots to Object Y passes through Object X. If Object X is dereferenced and garbage collected, Object Y is guaranteed to be collected as well.",explanation:"Object X is the exclusive gateway keeping Object Y alive.",hint:"Every path from GC Roots to Y goes through X.",level:"Advanced",codeExample:"GC Root → X → Y (X dominates Y; removing X frees Y)"},{question:"How do you use the Dominator Tree in MAT to find the root cause of a memory leak?",shortAnswer:"Sort the Dominator Tree descending by 'Retained Heap'. The topmost root node in the tree is the primary accumulator object retaining the vast majority of leaked memory.",explanation:"Drilling down into the top dominator exposes the leaking collection.",hint:"Sort descending by Retained Heap to find the top hoarding object.",level:"Intermediate",codeExample:"Sort Dominator Tree by Retained Heap → Expand top row."}];function T(){return e.jsxs("div",{className:"space-y-12 px-4 md:px-8 py-8 text-slate-200 bg-slate-900 min-h-screen",children:[e.jsxs("header",{className:"space-y-4 border-b border-slate-800 pb-6",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"px-3 py-1 bg-sky-500/10 text-sky-400 border border-sky-500/20 text-xs font-semibold rounded-full uppercase tracking-wider",children:"Module 010_006 · Topic 16"}),e.jsx("span",{className:"px-3 py-1 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-xs font-semibold rounded-full",children:"JVM Profiling & OOM"})]}),e.jsxs("h1",{className:"text-xl sm:text-2xl md:text-3xl font-bold text-white tracking-tight",children:["The MAT Dominator Tree: ",e.jsx("code",{className:"text-emerald-400 font-mono",children:"Retained Memory Accumulation"})]}),e.jsx("p",{className:"text-base md:text-lg text-slate-400 leading-relaxed max-w-4xl",children:"Graph theory in memory forensics: understanding object domination, immediate dominators, and retained heap subtree cascading."})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsxs("h2",{className:"text-2xl font-bold text-emerald-400 flex items-center gap-2",children:[e.jsx("span",{children:"💻"})," Hands-On Java Demo Code"]}),e.jsx(t,{fileModule:a,title:"MatDominatorTreeDemo.java",highlightLines:[18,25,34,43]})]}),e.jsx("section",{className:"space-y-4",children:e.jsx(n,{title:"Memory Profiling & OOM FAQs",questions:s})}),e.jsx("section",{className:"space-y-4",children:e.jsx(o,{content:i,title:"Module 010_006 Topic 16: The Dominator Tree",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Printable Note",downloadFileName:"010_006_topic16_mat_dominator_tree_note.txt"})}),e.jsx(r,{note:"In the Dominator Tree, if Object A dominates Object B, that means the ONLY way to reach B is through A! If you delete A, all memory for B and its children is immediately freed! That is Retained Heap! — Sukanta Hui"})]})}export{T as default};
