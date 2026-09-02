import{j as e}from"./vendor-react-core-Doz9nIC6.js";import{J as t}from"./JavaFileLoader-BfBG3xz_.js";import{F as n}from"./FAQTemplate-BHhlgA96.js";import{P as r}from"./PlainTextPrint-C08xhKA4.js";import{T as i}from"./TeacherSukantaHui-RpFLNJ5A.js";import"./JavaCodeBlock-BwsLxS3r.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-wprqVFW_.js";const o=`/**\r
 * Java Core Tutorial - Module 007_009: Collections Performance & Big-O Complexities\r
 * Topic 6: Microbenchmarking with JMH: JIT Warmup, Dead-Code Elimination & Blackhole\r
 * Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
 */\r
\r
package com.coderaccotax.javatutorial.collections;\r
\r
public class JmhBenchmarkingFundamentalsDemo {\r
\r
    public static void main(String[] args) {\r
        System.out.println("==========================================================================");\r
        System.out.println(" TOPIC 6: JMH MICROBENCHMARKING PRINCIPLES - BARRACKPORE");\r
        System.out.println("==========================================================================\\n");\r
\r
        System.out.println(">>> WHY System.currentTimeMillis() IS FLAWED FOR BENCHMARKS:");\r
        System.out.println("  1. JIT Compilation Warmup : The HotSpot JVM interprets bytecode first and optimizes it into native assembly (C2 Compiler) ONLY after 10,000+ invocations.");\r
        System.out.println("  2. Dead-Code Elimination  : If benchmark output is not used, the JIT compiler deletes the entire loop at runtime (yielding 0 ms false results!).");\r
        System.out.println("  3. On-Stack Replacement   : JIT switches execution modes mid-loop, distorting microsecond timings.");\r
        System.out.println();\r
        System.out.println(">>> THE JMH (JAVA MICROBENCHMARK HARNESS) SOLUTION (OpenJDK):");\r
        System.out.println("  - '@Warmup(iterations = 5)'  : Runs warmup rounds to let JIT C2 compiler fully optimize bytecode before measuring.");\r
        System.out.println("  - '@Measurement(iterations = 5)': Measures steady-state throughput or latency.");\r
        System.out.println("  - 'Blackhole.consume(result)': Prevents JIT from eliminating dead code without adding measurement overhead.");\r
        System.out.println("  - '@BenchmarkMode(Mode.Throughput / Mode.AverageTime)': Selects ops/sec or time/op metrics.");\r
\r
        System.out.println("\\n==========================================================================");\r
    }\r
}`,a=`================================================================================\r
JAVA CORE TUTORIAL - QUICK REVISION GUIDE\r
Module 007_009: Collections Performance & Big-O Complexities\r
Topic 6: JMH Microbenchmarking Principles\r
Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
================================================================================\r
\r
1. JMH FUNDAMENTALS:\r
   - Built by OpenJDK engineers for scientific Java benchmarking.\r
   - Warmup iterations: allows JIT C1/C2 compiler stabilization.\r
   - Blackhole: prevents JIT dead-code elimination optimizations.\r
   - Modes: Throughput (ops/sec) vs AverageTime (time/op).\r
   - Never benchmark Java code with simple System.currentTimeMillis() loops!\r
\r
================================================================================\r
Classroom Practice: Barrackpore Academy | Mentor: Sukanta Hui\r
================================================================================`,s=[{question:"Why is 'System.currentTimeMillis()' or 'System.nanoTime()' inadequate for accurate Java microbenchmarks, and how does JMH solve this?",shortAnswer:"Naïve 'System.nanoTime()' loops suffer from JVM runtime optimizations: 1. 'JIT Compilation': HotSpot starts in interpreted mode and compiles to native assembly only after warm-up. 2. 'Dead-Code Elimination': if the computed result is unused, the JIT optimizer deletes the entire loop. 3. 'JMH Solution': JMH (Java Microbenchmark Harness) manages explicit Warmup iterations, controls CPU frequency scaling, and uses 'Blackhole' objects to consume return values, preventing dead-code elimination and guaranteeing scientifically rigorous microsecond benchmarks.",explanation:"Standard Java performance engineering methodology from OpenJDK team.",hint:"JMH provides warm-up iterations, prevents JIT dead-code elimination via Blackhole, and measures steady state.",level:"Advanced",codeExample:"@Benchmark public void testList(Blackhole bh) { bh.consume(list.get(500)); }"}];function g(){return e.jsxs("div",{className:"space-y-12 px-4 md:px-8 py-8 text-slate-200 bg-slate-900 min-h-screen",children:[e.jsxs("header",{className:"space-y-4 border-b border-slate-800 pb-6",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"px-3 py-1 bg-sky-500/10 text-sky-400 border border-sky-500/20 text-xs font-semibold rounded-full uppercase tracking-wider",children:"Module 007_009 · Topic 6"}),e.jsx("span",{className:"px-3 py-1 bg-purple-500/10 text-purple-400 border border-purple-500/20 text-xs font-semibold rounded-full",children:"JMH Benchmarks"})]}),e.jsxs("h1",{className:"text-xl sm:text-2xl md:text-3xl font-bold text-white tracking-tight",children:["Microbenchmarking with ",e.jsx("code",{className:"text-emerald-400 font-mono",children:"JMH"}),": JIT Warmup, Dead-Code Elimination & Blackholes"]}),e.jsxs("p",{className:"text-base md:text-lg text-slate-400 leading-relaxed max-w-4xl",children:["Master scientific performance engineering: understanding HotSpot JIT warmup cycles, dead-code elimination compiler traps, and OpenJDK ",e.jsx("code",{className:"text-emerald-300 font-mono",children:"JMH"})," benchmark architecture."]})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsxs("h2",{className:"text-2xl font-bold text-emerald-400 flex items-center gap-2",children:[e.jsx("span",{children:"💻"})," Hands-On Java Demo Code"]}),e.jsx(t,{fileModule:o,title:"JmhBenchmarkingFundamentalsDemo.java",highlightLines:[7,10,13,14,15,19,20,21,22]})]}),e.jsx("section",{className:"space-y-4",children:e.jsx(n,{title:"JMH Benchmarking FAQs",questions:s})}),e.jsx("section",{className:"space-y-4",children:e.jsx(r,{content:a,title:"Module 007_009 Topic 6: JMH Benchmarking Principles",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Printable Note",downloadFileName:"007_009_topic6_jmh_benchmarking_principles_note.txt"})}),e.jsx(i,{note:"Never benchmark Java code with a simple 'for-loop + System.currentTimeMillis()'! The HotSpot JIT compiler will detect that the result isn't being used and completely delete the loop from bytecode! Always use JMH (Java Microbenchmark Harness) with Blackholes for real benchmarks! — Sukanta Hui"})]})}export{g as default};
