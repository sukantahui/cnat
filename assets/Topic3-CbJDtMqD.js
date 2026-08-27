import{j as e}from"./vendor-react-core-Doz9nIC6.js";import{J as t}from"./JavaFileLoader-BfBG3xz_.js";import{F as i}from"./FAQTemplate-CkSqDH4B.js";import{P as n}from"./PlainTextPrint-C08xhKA4.js";import{T as o}from"./TeacherSukantaHui-CC0AKmkm.js";import"./JavaCodeBlock-BwsLxS3r.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-BtJHuk7w.js";const r=`/**\r
 * Java Core Tutorial - Module 010_007: JIT Compiler, HotSpot Optimizations & GraalVM\r
 * Topic 3: Tiered Levels 1-3 - C1 (Client) Compiler & Profiling Tiers\r
 * Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
 */\r
\r
package com.coderaccotax.javatutorial.jit;\r
\r
public class TieredLevels1To3C1Demo {\r
\r
    public static void main(String[] args) {\r
        System.out.println("==========================================================================");\r
        System.out.println(" TOPIC 3: TIERED LEVELS 1 TO 3 (C1 COMPILER) - BARRACKPORE");\r
        System.out.println("==========================================================================\\n");\r
\r
        System.out.println(">>> THE 3 SUB-TIERS OF THE C1 COMPILER:");\r
        System.out.println("  - Level 1 (Simple C1)   : Compiles directly to native code with NO profiling (used for trivial methods).");\r
        System.out.println("  - Level 2 (Limited C1)  : Compiles with invocation and backedge profiling counters.");\r
        System.out.println("  - Level 3 (Full C1 MDO) : Injects full MethodDataObjects (MDO) profiling probes into the native code!\\n");\r
\r
        System.out.println(">>> WHAT MDO (METHOD DATA OBJECTS) MEASURES AT LEVEL 3:");\r
        System.out.println("  1. Branch Probabilities : Is 'if (condition)' taken 99.9% of the time?");\r
        System.out.println("  2. Type Feedback        : Is the method parameter always 'StudentImpl' (Monomorphic call site)?");\r
        System.out.println("  3. Null Check Frequency : Is the reference ever null?");\r
        System.out.println("  4. Loop Iteration Counts: How many iterations do loops typically execute?");\r
\r
        System.out.println("\\n==========================================================================");\r
    }\r
}\r
`,a=`================================================================================\r
JAVA CORE TUTORIAL - QUICK REVISION GUIDE\r
Module 010_007: JIT Compiler, HotSpot Optimizations & GraalVM\r
Topic 3: Tiered Levels 1-3 (C1 Compiler)\r
Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
================================================================================\r
\r
1. WHAT IS THE C1 COMPILER:\r
   - High-speed native code compiler designed for fast startup.\r
   - Performs basic local optimizations (constant folding, copy propagation).\r
\r
2. LEVEL 3 FULL PROFILING ROLE:\r
   - Functions as an intelligent telemetry collector.\r
   - Embeds profiling instructions that gather real-world runtime execution statistics (MDO).\r
   - Once sufficient profiling samples are gathered, the JVM promotes the method to Level 4 (C2)!\r
\r
================================================================================\r
Classroom Practice: Barrackpore Academy | Mentor: Sukanta Hui\r
================================================================================\r
`,l=[{question:"What is the primary role of Level 3 compilation in HotSpot's Tiered Compilation model?",shortAnswer:"To provide fast native execution while injecting full profiling probes (MethodDataObjects - MDO) to collect runtime telemetry (branch probabilities, type feedback, nullness) required for Level 4 C2 optimization.",explanation:"Acts as the profiling bridge between interpreted code and C2.",hint:"Compiles natively while collecting MDO profiling telemetry for C2.",level:"Intermediate",codeExample:"Level 3: Full C1 compilation with MDO profiling."},{question:"What is 'Type Feedback' gathered during Level 3 execution?",shortAnswer:"Information recorded by profiling probes about the actual runtime classes of objects passed to polymorphic call sites (e.g. discovering that 99.9% of calls to 'payment.pay()' are Monomorphic and invoke 'CreditCardPayment').",explanation:"Enables speculative devirtualization and method inlining in C2.",hint:"Records concrete runtime classes passed to polymorphic call sites.",level:"Advanced",codeExample:"Discovers monomorphic call sites for speculative inlining."}];function f(){return e.jsxs("div",{className:"space-y-12 px-4 md:px-8 py-8 text-slate-200 bg-slate-900 min-h-screen",children:[e.jsxs("header",{className:"space-y-4 border-b border-slate-800 pb-6",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"px-3 py-1 bg-sky-500/10 text-sky-400 border border-sky-500/20 text-xs font-semibold rounded-full uppercase tracking-wider",children:"Module 010_007 · Topic 3"}),e.jsx("span",{className:"px-3 py-1 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-xs font-semibold rounded-full",children:"JIT Compiler & GraalVM"})]}),e.jsxs("h1",{className:"text-3xl md:text-4xl font-extrabold text-white tracking-tight",children:["Tiered Levels 1–3: ",e.jsx("code",{className:"text-emerald-400 font-mono",children:"C1 (Client) Compiler & Profiling Tiers"})]}),e.jsx("p",{className:"text-base md:text-lg text-slate-400 leading-relaxed max-w-4xl",children:"Fast compilation with profiling: how C1 generates native code in milliseconds while embedding MDO (MethodDataObjects) to feed C2."})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsxs("h2",{className:"text-2xl font-bold text-emerald-400 flex items-center gap-2",children:[e.jsx("span",{children:"💻"})," Hands-On Java Demo Code"]}),e.jsx(t,{fileModule:r,title:"TieredLevels1To3C1Demo.java",highlightLines:[18,25,34,43]})]}),e.jsx("section",{className:"space-y-4",children:e.jsx(i,{title:"JIT Compiler & GraalVM FAQs",questions:l})}),e.jsx("section",{className:"space-y-4",children:e.jsx(n,{content:a,title:"Module 010_007 Topic 3: Tiered Levels 1-3: C1 Compiler",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Printable Note",downloadFileName:"010_007_topic3_tiered_levels_1_to_3_c1_note.txt"})}),e.jsx(o,{note:"C1 is the Client Compiler! It compiles code in milliseconds and inserts profiling sensors (MDO) to record which branches are taken and which object types are passed! That data feeds the C2 super-optimizer! — Sukanta Hui"})]})}export{f as default};
