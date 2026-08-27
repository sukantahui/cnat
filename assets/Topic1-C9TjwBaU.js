import{j as e}from"./vendor-react-core-Doz9nIC6.js";import{J as t}from"./JavaFileLoader-BfBG3xz_.js";import{F as i}from"./FAQTemplate-CkSqDH4B.js";import{P as n}from"./PlainTextPrint-C08xhKA4.js";import{T as r}from"./TeacherSukantaHui-CyIG3xbg.js";import"./JavaCodeBlock-BwsLxS3r.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-CIaKtAt4.js";const o=`/**\r
 * Java Core Tutorial - Module 010_007: JIT Compiler, HotSpot Optimizations & GraalVM\r
 * Topic 1: Tiered Compilation in HotSpot - The 5 Execution Levels (0 to 4)\r
 * Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
 */\r
\r
package com.coderaccotax.javatutorial.jit;\r
\r
public class TieredCompilationOverviewDemo {\r
\r
    public static void main(String[] args) {\r
        System.out.println("==========================================================================");\r
        System.out.println(" TOPIC 1: TIERED COMPILATION (LEVELS 0 TO 4) - BARRACKPORE");\r
        System.out.println("==========================================================================\\n");\r
\r
        System.out.println(">>> THE 5 TIERS OF HOTSPOT COMPILATION:");\r
        System.out.println("  -----------------------------------------------------------------------------------------");\r
        System.out.println("  TIER / LEVEL    ENGINE             PROFILING         PURPOSE");\r
        System.out.println("  -----------------------------------------------------------------------------------------");\r
        System.out.println("  Level 0         Interpreter        Invocation count  Instant startup, counts hot methods.");\r
        System.out.println("  Level 1         C1 (Client)        None              Fast compilation, zero profiling.");\r
        System.out.println("  Level 2         C1 (Client)        Basic             Lightweight profiling (call counts).");\r
        System.out.println("  Level 3         C1 (Client)        Full MDO          Full profiling (branches, type feedback).");\r
        System.out.println("  Level 4         C2 (Server) / Graal None (Uses L3)   Aggressive, heavy optimization (peak speed).");\r
        System.out.println("  -----------------------------------------------------------------------------------------\\n");\r
\r
        System.out.println(">>> TIERED COMPILATION FLAGS:");\r
        System.out.println("  - Enabled by Default : -XX:+TieredCompilation");\r
        System.out.println("  - View Compilation   : -XX:+PrintCompilation (prints tier levels 1, 2, 3, 4)");\r
        System.out.println("==========================================================================");\r
    }\r
}\r
`,a=`================================================================================\r
JAVA CORE TUTORIAL - QUICK REVISION GUIDE\r
Module 010_007: JIT Compiler, HotSpot Optimizations & GraalVM\r
Topic 1: Tiered Compilation Overview\r
Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
================================================================================\r
\r
1. WHAT IS TIERED COMPILATION:\r
   - Default since Java 8 ('-XX:+TieredCompilation').\r
   - Bridges the gap between C1 (fast compilation, moderate optimization) and C2 (slow compilation, peak optimization).\r
\r
2. STANDARD PROMOTION PATH:\r
   - 'Level 0 (Interpreted) &rarr; Level 3 (C1 Full Profiling) &rarr; Level 4 (C2 Server JIT)'.\r
\r
================================================================================\r
Classroom Practice: Barrackpore Academy | Mentor: Sukanta Hui\r
================================================================================\r
`,l=[{question:"What is the primary benefit of Tiered Compilation enabled by default in Java?",shortAnswer:"It provides both ultra-fast application startup (via C1 client compilation) and maximum long-term peak throughput (via C2 server compilation) without requiring developers to choose between -client and -server JVM modes.",explanation:"Combines the advantages of both historical JIT compilers.",hint:"Combines fast startup (C1) with peak long-term optimization (C2).",level:"Intermediate",codeExample:"Tiered promotion: 0 -> 3 -> 4"},{question:"What does the number in the output column of -XX:+PrintCompilation represent (e.g. '1254   4   com.foo.Bar::calculate')?",shortAnswer:"It represents the Tier Compilation Level (from 1 to 4) at which the method was just compiled by the JIT.",explanation:"Level 4 indicates maximum C2 optimization.",hint:"The Tiered Compilation level (1, 2, 3, or 4).",level:"Beginner",codeExample:"1254  4  ... -> Level 4 C2 Server compilation."}];function v(){return e.jsxs("div",{className:"space-y-12 px-4 md:px-8 py-8 text-slate-200 bg-slate-900 min-h-screen",children:[e.jsxs("header",{className:"space-y-4 border-b border-slate-800 pb-6",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"px-3 py-1 bg-sky-500/10 text-sky-400 border border-sky-500/20 text-xs font-semibold rounded-full uppercase tracking-wider",children:"Module 010_007 · Topic 1"}),e.jsx("span",{className:"px-3 py-1 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-xs font-semibold rounded-full",children:"JIT Compiler & GraalVM"})]}),e.jsxs("h1",{className:"text-3xl md:text-4xl font-extrabold text-white tracking-tight",children:["Tiered Compilation in HotSpot: ",e.jsx("code",{className:"text-emerald-400 font-mono",children:"The 5 Execution Levels (0 to 4)"})]}),e.jsx("p",{className:"text-base md:text-lg text-slate-400 leading-relaxed max-w-4xl",children:"Adaptive multi-tier compilation: how HotSpot seamlessly transitions code from Level 0 (Interpreter) to Level 1–3 (C1 Client) and Level 4 (C2 Server)."})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsxs("h2",{className:"text-2xl font-bold text-emerald-400 flex items-center gap-2",children:[e.jsx("span",{children:"💻"})," Hands-On Java Demo Code"]}),e.jsx(t,{fileModule:o,title:"TieredCompilationOverviewDemo.java",highlightLines:[18,25,34,43]})]}),e.jsx("section",{className:"space-y-4",children:e.jsx(i,{title:"JIT Compiler & GraalVM FAQs",questions:l})}),e.jsx("section",{className:"space-y-4",children:e.jsx(n,{content:a,title:"Module 010_007 Topic 1: Tiered Compilation Overview",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Printable Note",downloadFileName:"010_007_topic1_tiered_compilation_overview_note.txt"})}),e.jsx(r,{note:"Tiered Compilation is the secret behind Java's blistering speed! Level 0 interprets, Level 1-3 uses the fast C1 compiler to gather telemetry, and Level 4 unleashes the heavy C2 optimizing compiler! — Sukanta Hui"})]})}export{v as default};
