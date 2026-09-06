import{j as e}from"./vendor-react-core-Doz9nIC6.js";import{J as t}from"./JavaFileLoader-BfBG3xz_.js";import{F as r}from"./FAQTemplate-BHhlgA96.js";import{P as a}from"./PlainTextPrint-C08xhKA4.js";import{T as n}from"./TeacherSukantaHui-DDN87fI5.js";import"./JavaCodeBlock-BwsLxS3r.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-DEsnU7fn.js";const l=`/**\r
 * Java Core Tutorial - Module 009_007: Parallel Streams & Performance Considerations\r
 * Topic 5: The NQ Model for Parallel Stream Viability (N * Q > 10,000)\r
 * Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
 */\r
\r
package com.coderaccotax.javatutorial.parallel;\r
\r
import java.util.stream.IntStream;\r
\r
public class NQPerformanceModelDemo {\r
\r
    public static void main(String[] args) {\r
        System.out.println("==========================================================================");\r
        System.out.println(" TOPIC 5: THE NQ PERFORMANCE MODEL - BARRACKPORE ACADEMY");\r
        System.out.println("==========================================================================\\n");\r
\r
        System.out.println(">>> THE NQ FORMULA EXPLAINED:");\r
        System.out.println("  - N = Number of elements in the stream.");\r
        System.out.println("  - Q = Computational cost (CPU cycles) per element.");\r
        System.out.println("  - Threshold: N * Q > 10,000 &rarr; Parallel stream is likely faster.");\r
        System.out.println("  - Threshold: N * Q < 10,000 &rarr; Sequential stream is faster (Thread overhead dominates!)\\n");\r
\r
        // Scenario 1: High N (N = 1,000,000), Low Q (Simple addition) -> N * Q ~ 1,000,000 (BENEFITS FROM PARALLEL)\r
        int N1 = 1_000_000;\r
        long start = System.currentTimeMillis();\r
        long sumSeq = IntStream.rangeClosed(1, N1).sum();\r
        long seqTime = System.currentTimeMillis() - start;\r
\r
        start = System.currentTimeMillis();\r
        long sumPar = IntStream.rangeClosed(1, N1).parallel().sum();\r
        long parTime = System.currentTimeMillis() - start;\r
\r
        System.out.println(">>> SCENARIO 1 (N = 1,000,000, Low Q):");\r
        System.out.println("  - Sequential Time : " + seqTime + " ms");\r
        System.out.println("  - Parallel Time   : " + parTime + " ms");\r
\r
        // Scenario 2: Low N (N = 10), High Q (Cryptographic/Mathematical hashing)\r
        System.out.println("\\n>>> SCENARIO 2 (Low N, High Q per element):");\r
        System.out.println("  - Heavy matrix operations or bcrypt hashing on 20 items yields massive parallel speedups!");\r
        System.out.println("==========================================================================");\r
    }\r
}\r
`,s=`================================================================================\r
JAVA CORE TUTORIAL - QUICK REVISION GUIDE\r
Module 009_007: Parallel Streams & Performance Considerations\r
Topic 5: The NQ Performance Model\r
Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
================================================================================\r
\r
1. THE NQ RULE (By Brian Goetz, Java Language Architect):\r
   - 'N' = Total number of data elements in the stream.\r
   - 'Q' = Approximate number of CPU instructions required to process each element.\r
   - Total Computation Work = 'N * Q'.\r
\r
2. HEURISTIC THRESHOLD:\r
   - When 'N * Q > 10,000', parallel speedup generally outweighs ForkJoinPool splitting\r
     and merging overhead.\r
   - When 'N * Q < 10,000', sequential execution is almost always faster.\r
\r
================================================================================\r
Classroom Practice: Barrackpore Academy | Mentor: Sukanta Hui\r
================================================================================\r
`,o=[{question:"What does the NQ model measure in Java Stream performance?",shortAnswer:"It measures total computational volume by multiplying element count N with the CPU cost per element Q. If N*Q exceeds ~10,000, parallel execution is likely to yield performance gains over sequential execution.",explanation:"Helps developers decide objectively whether to call .parallel().",hint:"N = element count, Q = CPU work per element; N * Q > 10,000.",level:"Intermediate",codeExample:"N = 100_000, Q = simple filter → N*Q = 100,000 > 10,000 (Parallel is viable)"},{question:"Why can small datasets (e.g. N = 50) run slower with parallel streams?",shortAnswer:"Because the fixed overhead of thread scheduling, Spliterator task splitting, task queue insertion, context switching, and merging partial results exceeds the tiny sequential compute time.",explanation:"Parallelism has a non-zero startup and coordination cost.",hint:"Thread creation, scheduling, and result merging overhead exceeds sequential compute time.",level:"Beginner",codeExample:"List.of(1, 2, 3, 4, 5).parallelStream().map(x → x * 2).toList(); // Slower than sequential!"}];function N(){return e.jsxs("div",{className:"space-y-12 px-4 md:px-8 py-8 text-slate-200 bg-slate-900 min-h-screen",children:[e.jsxs("header",{className:"space-y-4 border-b border-slate-800 pb-6",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"px-3 py-1 bg-sky-500/10 text-sky-400 border border-sky-500/20 text-xs font-semibold rounded-full uppercase tracking-wider",children:"Module 009_007 · Topic 5"}),e.jsx("span",{className:"px-3 py-1 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-xs font-semibold rounded-full",children:"Parallel Streams & Performance"})]}),e.jsxs("h1",{className:"text-xl sm:text-2xl md:text-3xl font-bold text-white tracking-tight",children:["The ",e.jsx("code",{className:"text-emerald-400 font-mono",children:"NQ Model"})," for Parallel Stream Viability: N × Q Rule"]}),e.jsx("p",{className:"text-base md:text-lg text-slate-400 leading-relaxed max-w-4xl",children:"Brian Goetz's performance metric: multiplying element count N by computational cost Q to determine when parallelization is profitable."})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsxs("h2",{className:"text-2xl font-bold text-emerald-400 flex items-center gap-2",children:[e.jsx("span",{children:"💻"})," Hands-On Java Demo Code"]}),e.jsx(t,{fileModule:l,title:"NQPerformanceModelDemo.java",highlightLines:[18,25,34,43]})]}),e.jsx("section",{className:"space-y-4",children:e.jsx(r,{title:"Parallel Streams FAQs",questions:o})}),e.jsx("section",{className:"space-y-4",children:e.jsx(a,{content:s,title:"Module 009_007 Topic 5: The NQ Performance Model",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Printable Note",downloadFileName:"009_007_topic5_nq_performance_model_note.txt"})}),e.jsx(n,{note:"The NQ Model is the golden rule of parallel streams: N is the number of elements, and Q is the CPU work per element. If N * Q > 10,000, parallel streams will speed up your code. If N * Q is small, parallel streams will actually SLOW YOU DOWN! — Sukanta Hui"})]})}export{N as default};
