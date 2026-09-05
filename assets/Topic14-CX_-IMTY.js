import{j as e}from"./vendor-react-core-Doz9nIC6.js";import{J as t}from"./JavaFileLoader-BfBG3xz_.js";import{F as n}from"./FAQTemplate-BHhlgA96.js";import{P as a}from"./PlainTextPrint-C08xhKA4.js";import{T as r}from"./TeacherSukantaHui-DerPxfxp.js";import"./JavaCodeBlock-BwsLxS3r.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-CH1iX9C8.js";const s=`/**\r
 * Java Core Tutorial - Module 010_006: JVM Profiling, Heap Dumps & Memory Leak Diagnosis\r
 * Topic 14: Eclipse Memory Analyzer (MAT) - Heap Dump Analysis Architecture\r
 * Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
 */\r
\r
package com.coderaccotax.javatutorial.profiling;\r
\r
public class EclipseMatOverviewDemo {\r
\r
    public static void main(String[] args) {\r
        System.out.println("==========================================================================");\r
        System.out.println(" TOPIC 14: ECLIPSE MEMORY ANALYZER (MAT) - BARRACKPORE ACADEMY");\r
        System.out.println("==========================================================================\\n");\r
\r
        System.out.println(">>> THE 4 CORE DIAGNOSTIC VIEWS IN ECLIPSE MAT:");\r
        System.out.println("  1. LEAK SUSPECTS REPORT : Automated AI-like diagnosis pointing to the single largest object trees.");\r
        System.out.println("  2. DOMINATOR TREE      : Hierarchical tree showing which object dominates/retains the most memory.");\r
        System.out.println("  3. HISTOGRAM VIEW       : Class-by-class instance counts and Retained vs Shallow heap sizes.");\r
        System.out.println("  4. PATH TO GC ROOTS     : The exact chain of references keeping an object alive (excluding weak/soft refs).\\n");\r
\r
        System.out.println(">>> HOW MAT PROCESSES DUMPS:");\r
        System.out.println("  - Generates fast index files (.index, .inbound, .outbound, .domTree) on initial open.");\r
        System.out.println("  - Allows instantaneous navigation of 64GB+ heap dumps on standard developer laptops!");\r
\r
        System.out.println("\\n==========================================================================");\r
    }\r
}\r
`,i=`================================================================================\r
JAVA CORE TUTORIAL - QUICK REVISION GUIDE\r
Module 010_006: JVM Profiling, Heap Dumps & Memory Leak Diagnosis\r
Topic 14: Eclipse MAT Overview\r
Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
================================================================================\r
\r
1. WHAT IS ECLIPSE MAT:\r
   - Industry-standard open-source memory analyzer for Java heap dumps.\r
   - Capable of analyzing massive production heap dumps (multi-gigabyte to terabyte).\r
\r
2. KEY WORKFLOW:\r
   - Step 1: Open '.hprof' file in MAT.\r
   - Step 2: Review automated 'Leak Suspects' pie chart report.\r
   - Step 3: Drill down into 'Dominator Tree' or 'Histogram'.\r
   - Step 4: Inspect 'Path to GC Roots' to locate the offending reference.\r
\r
================================================================================\r
Classroom Practice: Barrackpore Academy | Mentor: Sukanta Hui\r
================================================================================\r
`,o=[{question:"Why does Eclipse MAT generate multiple index files (.index, .domTree, etc.) when opening a .hprof file for the first time?",shortAnswer:"To build optimized graph data structures and dominator trees on disk, allowing fast querying, filtering, and path-to-root traversals across multi-gigabyte heaps with minimal RAM usage.",explanation:"Enables analyzing 32GB dumps on an 8GB developer laptop.",hint:"Builds disk-based graph indexes for fast querying of large heaps.",level:"Intermediate",codeExample:"Indexes: .index, .domTree, .inbound, .outbound"},{question:"What is the first report Eclipse MAT prompts you to generate upon opening a heap dump?",shortAnswer:"The 'Leak Suspects Report', which automatically scans the object graph and generates a pie chart identifying object groups that consume an unusually large percentage of the total heap.",explanation:"Fast-tracks finding the root cause of 90% of memory leaks.",hint:"The Leak Suspects Report.",level:"Beginner",codeExample:"MAT → Run 'Leak Suspects Report'"}];function x(){return e.jsxs("div",{className:"space-y-12 px-4 md:px-8 py-8 text-slate-200 bg-slate-900 min-h-screen",children:[e.jsxs("header",{className:"space-y-4 border-b border-slate-800 pb-6",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"px-3 py-1 bg-sky-500/10 text-sky-400 border border-sky-500/20 text-xs font-semibold rounded-full uppercase tracking-wider",children:"Module 010_006 · Topic 14"}),e.jsx("span",{className:"px-3 py-1 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-xs font-semibold rounded-full",children:"JVM Profiling & OOM"})]}),e.jsxs("h1",{className:"text-xl sm:text-2xl md:text-3xl font-bold text-white tracking-tight",children:["Eclipse Memory Analyzer (MAT): ",e.jsx("code",{className:"text-emerald-400 font-mono",children:"Heap Dump Analysis Architecture"})]}),e.jsx("p",{className:"text-base md:text-lg text-slate-400 leading-relaxed max-w-4xl",children:"Industrial-strength memory forensics: indexing multi-gigabyte HPROF dumps, Object ID graphs, and navigating the MAT diagnostic interface."})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsxs("h2",{className:"text-2xl font-bold text-emerald-400 flex items-center gap-2",children:[e.jsx("span",{children:"💻"})," Hands-On Java Demo Code"]}),e.jsx(t,{fileModule:s,title:"EclipseMatOverviewDemo.java",highlightLines:[18,25,34,43]})]}),e.jsx("section",{className:"space-y-4",children:e.jsx(n,{title:"Memory Profiling & OOM FAQs",questions:o})}),e.jsx("section",{className:"space-y-4",children:e.jsx(a,{content:i,title:"Module 010_006 Topic 14: Eclipse MAT Overview",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Printable Note",downloadFileName:"010_006_topic14_eclipse_mat_overview_note.txt"})}),e.jsx(r,{note:"Eclipse MAT (Memory Analyzer Tool) is the gold standard for analyzing multi-gigabyte heap dumps! It indexes the entire heap graph and automatically highlights the biggest memory culprits in minutes! — Sukanta Hui"})]})}export{x as default};
