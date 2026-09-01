import{j as e}from"./vendor-react-core-Doz9nIC6.js";import{J as t}from"./JavaFileLoader-BfBG3xz_.js";import{F as n}from"./FAQTemplate-BHhlgA96.js";import{P as r}from"./PlainTextPrint-C08xhKA4.js";import{T as o}from"./TeacherSukantaHui-CEPuAfsb.js";import"./JavaCodeBlock-BwsLxS3r.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-DGCamHnX.js";const i=`/**\r
 * Java Core Tutorial - Module 010_007: JIT Compiler, HotSpot Optimizations & GraalVM\r
 * Topic 0: How Java Executes Code - Interpreter vs JIT Compiler\r
 * Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
 */\r
\r
package com.coderaccotax.javatutorial.jit;\r
\r
public class InterpreterVsJitCompilerDemo {\r
\r
    public static void main(String[] args) {\r
        System.out.println("==========================================================================");\r
        System.out.println(" TOPIC 0: INTERPRETER VS JIT COMPILER - BARRACKPORE ACADEMY");\r
        System.out.println("==========================================================================\\n");\r
\r
        System.out.println(">>> 1. BENCHMARKING WARMUP & JIT COMPILATION IN REAL TIME:");\r
\r
        // Iteration 1: Interpreted execution (Warmup phase)\r
        long start1 = System.nanoTime();\r
        long sum1 = computeSum(10_000);\r
        long time1 = System.nanoTime() - start1;\r
        System.out.println("  - Run 1 (Interpreted / Warmup) : " + time1 + " ns (Sum: " + sum1 + ")");\r
\r
        // Warming up the method so JIT compiles it to native machine code:\r
        for (int i = 0; i < 50_000; i++) {\r
            computeSum(1_000);\r
        }\r
\r
        // Iteration 2: JIT-compiled native execution\r
        long start2 = System.nanoTime();\r
        long sum2 = computeSum(10_000);\r
        long time2 = System.nanoTime() - start2;\r
        System.out.println("  - Run 2 (JIT Compiled Native) : " + time2 + " ns (Sum: " + sum2 + ")");\r
        System.out.println("  - Speedup Factor              : " + ((double) time1 / time2) + "x faster! 🚀\\n");\r
\r
        System.out.println(">>> THE HYBRID ARCHITECTURE:");\r
        System.out.println("  - Interpreter : Zero compilation delay -> Instant application startup.");\r
        System.out.println("  - JIT Compiler: Detects 'hot spots' -> Compiles to native CPU instructions.");\r
        System.out.println("==========================================================================");\r
    }\r
\r
    static long computeSum(int limit) {\r
        long total = 0;\r
        for (int i = 0; i < limit; i++) {\r
            total += i;\r
        }\r
        return total;\r
    }\r
}\r
`,a=`================================================================================\r
JAVA CORE TUTORIAL - QUICK REVISION GUIDE\r
Module 010_007: JIT Compiler, HotSpot Optimizations & GraalVM\r
Topic 0: Interpreter vs JIT Compiler\r
Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
================================================================================\r
\r
1. THE JVM HYBRID EXECUTION ENGINE:\r
   - Interpreter : Translates bytecode instructions line-by-line into machine code on-the-fly.\r
   - JIT Compiler: Compiles frequently executed ('hot') bytecode directly into native machine code\r
     and stores it in the CodeCache in memory.\r
\r
2. WHY NOT AOT ONLY:\r
   - Dynamic JIT has access to RUNTIME PROFILING DATA (real types, actual branch probabilities,\r
     hardware CPU instruction sets) allowing profile-guided optimizations impossible in static AOT compilers!\r
\r
================================================================================\r
Classroom Practice: Barrackpore Academy | Mentor: Sukanta Hui\r
================================================================================\r
`,s=[{question:"Why does the JVM use both an Interpreter and a JIT Compiler instead of only a JIT Compiler?",shortAnswer:"The Interpreter allows the Java application to start executing immediately without waiting for upfront compilation. The JIT Compiler compiles only frequently executed 'hot' code into native machine instructions in the background, combining fast startup with peak runtime performance.",explanation:"Pioneered by the Sun HotSpot research team.",hint:"Combines zero startup delay (Interpreter) with peak peak performance (JIT).",level:"Beginner",codeExample:"Startup → Interpreter; Hot Spots → JIT Native Compilation"},{question:"Where does the JVM store JIT-compiled native machine code in memory?",shortAnswer:"In the CodeCache, a dedicated native memory area allocated by the HotSpot JVM outside the Java Heap.",explanation:"Sized via -XX:ReservedCodeCacheSize.",hint:"The CodeCache (native memory).",level:"Intermediate",codeExample:"-XX:ReservedCodeCacheSize=256m"}];function I(){return e.jsxs("div",{className:"space-y-12 px-4 md:px-8 py-8 text-slate-200 bg-slate-900 min-h-screen",children:[e.jsxs("header",{className:"space-y-4 border-b border-slate-800 pb-6",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"px-3 py-1 bg-sky-500/10 text-sky-400 border border-sky-500/20 text-xs font-semibold rounded-full uppercase tracking-wider",children:"Module 010_007 · Topic 0"}),e.jsx("span",{className:"px-3 py-1 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-xs font-semibold rounded-full",children:"JIT Compiler & GraalVM"})]}),e.jsxs("h1",{className:"text-xl sm:text-2xl md:text-3xl font-bold text-white tracking-tight",children:["How Java Executes Code: ",e.jsx("code",{className:"text-emerald-400 font-mono",children:"Interpreter vs JIT Compiler"})]}),e.jsx("p",{className:"text-base md:text-lg text-slate-400 leading-relaxed max-w-4xl",children:"The best of both worlds: combining fast instant startup via the Interpreter with peak C/C++ bare-metal performance via Just-In-Time compilation."})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsxs("h2",{className:"text-2xl font-bold text-emerald-400 flex items-center gap-2",children:[e.jsx("span",{children:"💻"})," Hands-On Java Demo Code"]}),e.jsx(t,{fileModule:i,title:"InterpreterVsJitCompilerDemo.java",highlightLines:[18,25,34,43]})]}),e.jsx("section",{className:"space-y-4",children:e.jsx(n,{title:"JIT Compiler & GraalVM FAQs",questions:s})}),e.jsx("section",{className:"space-y-4",children:e.jsx(r,{content:a,title:"Module 010_007 Topic 0: Interpreter vs JIT Compiler",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Printable Note",downloadFileName:"010_007_topic0_interpreter_vs_jit_compiler_note.txt"})}),e.jsx(o,{note:"Why is Java fast? Because it starts instantly by interpreting bytecode, and as methods get 'hot', the JIT compiler compiles them into pure native assembly machine code running directly on the CPU! — Sukanta Hui"})]})}export{I as default};
