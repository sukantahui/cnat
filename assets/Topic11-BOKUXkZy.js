import{j as e}from"./vendor-react-core-Doz9nIC6.js";import{J as t}from"./JavaFileLoader-BfBG3xz_.js";import{F as n}from"./FAQTemplate-BHhlgA96.js";import{P as i}from"./PlainTextPrint-C08xhKA4.js";import{T as o}from"./TeacherSukantaHui-RpFLNJ5A.js";import"./JavaCodeBlock-BwsLxS3r.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-wprqVFW_.js";const a=`/**\r
 * Java Core Tutorial - Module 010_007: JIT Compiler, HotSpot Optimizations & GraalVM\r
 * Topic 11: JIT Diagnostics Flags - -XX:+PrintCompilation & -XX:+PrintInlining\r
 * Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
 */\r
\r
package com.coderaccotax.javatutorial.jit;\r
\r
public class JitDiagnosticsFlagsDemo {\r
\r
    public static void main(String[] args) {\r
        System.out.println("==========================================================================");\r
        System.out.println(" TOPIC 11: JIT DIAGNOSTICS FLAGS - BARRACKPORE ACADEMY");\r
        System.out.println("==========================================================================\\n");\r
\r
        System.out.println(">>> THE 4 ESSENTIAL JIT DIAGNOSTIC FLAGS:");\r
        System.out.println("  1. -XX:+PrintCompilation                 : Logs every JIT compilation event to stdout.");\r
        System.out.println("  2. -XX:+UnlockDiagnosticVMOptions        : Unlocks advanced JIT diagnostic flags.");\r
        System.out.println("  3. -XX:+PrintInlining                    : Displays complete tree of which methods were inlined.");\r
        System.out.println("  4. -XX:+PrintAssembly                    : Disassembles native machine code (requires hsdis plugin).\\n");\r
\r
        System.out.println(">>> DECODING A -XX:+PrintCompilation LOG LINE:");\r
        System.out.println("  152   4       com.coderaccotax.Student::getFee (5 bytes)");\r
        System.out.println("  │     │       │                                │");\r
        System.out.println("  │     │       │                                └── Bytecode length");\r
        System.out.println("  │     │       └─────────────────────────────────── Method signature");\r
        System.out.println("  │     └─────────────────────────────────────────── Tiered Level (4 = C2 Server JIT)");\r
        System.out.println("  └───────────────────────────────────────────────── Timestamp (ms since JVM boot)");\r
\r
        System.out.println("\\n==========================================================================");\r
    }\r
}\r
`,r=`================================================================================\r
JAVA CORE TUTORIAL - QUICK REVISION GUIDE\r
Module 010_007: JIT Compiler, HotSpot Optimizations & GraalVM\r
Topic 11: JIT Diagnostics Flags\r
Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
================================================================================\r
\r
1. LOG FLAGS CHEATSHEET:\r
   - '-XX:+PrintCompilation'               : Real-time notification of method compilation and tier.\r
   - '-XX:+UnlockDiagnosticVMOptions -XX:+PrintInlining' : Explains why methods were or were not inlined.\r
\r
2. PRINTCOMPILATION ATTRIBUTE FLAGS:\r
   - '%' : On-Stack Replacement (OSR) compilation.\r
   - 's' : Synchronized method.\r
   - '!' : Method has exception handlers.\r
   - 'b' : Blocking compilation.\r
   - 'make_not_entrant' : Method de-optimized and marked stale.\r
\r
================================================================================\r
Classroom Practice: Barrackpore Academy | Mentor: Sukanta Hui\r
================================================================================\r
`,s=[{question:"What does the '%' symbol indicate in a -XX:+PrintCompilation output line?",shortAnswer:"It indicates an On-Stack Replacement (OSR) compilation, where a long-running loop was compiled and swapped onto the stack while the method was already executing.",explanation:"Indicates loop-level OSR compilation.",hint:"On-Stack Replacement (OSR).",level:"Intermediate",codeExample:"145  %  4  com.foo.LoopDemo::runLoop @ 12 (85 bytes)"},{question:"What does 'make_not_entrant' mean in JIT compilation logs?",shortAnswer:"It indicates that a previously compiled native method has been invalidated or de-optimized (due to speculative invalidation or class loading changes) and that future invocations will not enter this code.",explanation:"Triggers recompilation or return to interpreter.",hint:"Compiled code is invalidated and marked not to be entered.",level:"Advanced",codeExample:"made not entrant → Code invalidated and de-optimized."}];function g(){return e.jsxs("div",{className:"space-y-12 px-4 md:px-8 py-8 text-slate-200 bg-slate-900 min-h-screen",children:[e.jsxs("header",{className:"space-y-4 border-b border-slate-800 pb-6",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"px-3 py-1 bg-sky-500/10 text-sky-400 border border-sky-500/20 text-xs font-semibold rounded-full uppercase tracking-wider",children:"Module 010_007 · Topic 11"}),e.jsx("span",{className:"px-3 py-1 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-xs font-semibold rounded-full",children:"JIT Compiler & GraalVM"})]}),e.jsxs("h1",{className:"text-xl sm:text-2xl md:text-3xl font-bold text-white tracking-tight",children:["JIT Diagnostics Flags: ",e.jsx("code",{className:"text-emerald-400 font-mono",children:"-XX:+PrintCompilation & -XX:+PrintInlining"})]}),e.jsx("p",{className:"text-base md:text-lg text-slate-400 leading-relaxed max-w-4xl",children:"Peeking inside the compiler: decoding compilation logs, tiered levels, de-optimization tags, and inlining decision trees in real time."})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsxs("h2",{className:"text-2xl font-bold text-emerald-400 flex items-center gap-2",children:[e.jsx("span",{children:"💻"})," Hands-On Java Demo Code"]}),e.jsx(t,{fileModule:a,title:"JitDiagnosticsFlagsDemo.java",highlightLines:[18,25,34,43]})]}),e.jsx("section",{className:"space-y-4",children:e.jsx(n,{title:"JIT Compiler & GraalVM FAQs",questions:s})}),e.jsx("section",{className:"space-y-4",children:e.jsx(i,{content:r,title:"Module 010_007 Topic 11: JIT Diagnostics Flags",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Printable Note",downloadFileName:"010_007_topic11_jit_diagnostics_flags_note.txt"})}),e.jsx(o,{note:"Want to see what the JIT is compiling right now? Run with -XX:+PrintCompilation! You will see real-time logs showing exact compilation tiers, timestamps, and de-optimizations! — Sukanta Hui"})]})}export{g as default};
