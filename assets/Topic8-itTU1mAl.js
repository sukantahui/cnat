import{j as e}from"./vendor-react-core-Doz9nIC6.js";import{J as t}from"./JavaFileLoader-BfBG3xz_.js";import{F as r}from"./FAQTemplate-BHhlgA96.js";import{P as n}from"./PlainTextPrint-C08xhKA4.js";import{T as a}from"./TeacherSukantaHui-DDN87fI5.js";import"./JavaCodeBlock-BwsLxS3r.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-DEsnU7fn.js";const o=`/**\r
 * Java Core Tutorial - Module 009_008: The Optional Class & Null-Safe Functional Programming\r
 * Topic 8: Performance Benchmark - orElse() vs orElseGet()\r
 * Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
 */\r
\r
package com.coderaccotax.javatutorial.optional;\r
\r
import java.util.Optional;\r
\r
public class OrElseVsOrElseGetBenchmarkDemo {\r
\r
    public static void main(String[] args) {\r
        System.out.println("==========================================================================");\r
        System.out.println(" TOPIC 8: ORELSE VS ORELSEGET BENCHMARK - BARRACKPORE ACADEMY");\r
        System.out.println("==========================================================================\\n");\r
\r
        Optional<String> presentStudent = Optional.of("Swadeep Paul (Existing Cache Entry)");\r
\r
        // 1. Testing orElse(): Eager evaluation (Runs computeHeavyDefault() UNNECESSARILY!)\r
        System.out.println(">>> 1. Testing orElse() with a PRESENT Optional:");\r
        String res1 = presentStudent.orElse(computeHeavyDefault("orElse"));\r
        System.out.println("   Result: " + res1);\r
\r
        // 2. Testing orElseGet(): Lazy evaluation (NEVER runs computeHeavyDefault()!)\r
        System.out.println("\\n>>> 2. Testing orElseGet() with a PRESENT Optional:");\r
        String res2 = presentStudent.orElseGet(() -> computeHeavyDefault("orElseGet"));\r
        System.out.println("   Result: " + res2);\r
\r
        System.out.println("\\n>>> BENCHMARK VERDICT:");\r
        System.out.println("  - Notice that 'computeHeavyDefault' WAS EXECUTED for orElse() even though the value was present!");\r
        System.out.println("  - For orElseGet(), the supplier was SKIPPED ENTIRELY, saving CPU cycles and DB queries!");\r
        System.out.println("==========================================================================");\r
    }\r
\r
    static String computeHeavyDefault(String caller) {\r
        System.out.println("   ⚠️ [HEAVY COMPUTATION EXECUTED] Called from: " + caller);\r
        return "Heavy Default Value";\r
    }\r
}\r
`,s=`================================================================================\r
JAVA CORE TUTORIAL - QUICK REVISION GUIDE\r
Module 009_008: The Optional Class & Null-Safe Functional Programming\r
Topic 8: Performance Benchmark (orElse vs orElseGet)\r
Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
================================================================================\r
\r
1. CRITICAL COMPARISON SUMMARY:\r
   -----------------------------------------------------------------------------\r
   METHOD            EVALUATION TYPE    WHEN IS ARGUMENT EVALUATED?\r
   -----------------------------------------------------------------------------\r
   orElse(val)       Eager              ALWAYS (at method invocation time)\r
   orElseGet(lambda) Lazy               ONLY IF Optional is EMPTY\r
   -----------------------------------------------------------------------------\r
\r
2. RULE OF THUMB:\r
   - Use 'orElse(val)' ONLY for pre-existing constants or cheap literals.\r
   - Use 'orElseGet(() → compute())' whenever the fallback involves:\r
     * Calling another method.\r
     * Creating new objects on heap ('new Student()').\r
     * Accessing databases, files, or network services.\r
\r
================================================================================\r
Classroom Practice: Barrackpore Academy | Mentor: Sukanta Hui\r
================================================================================\r
`,l=[{question:"Why does orElse(computeDefault()) execute computeDefault() even when the Optional contains a value?",shortAnswer:"Because Java is a pass-by-value language that evaluates method arguments before calling the method. The JVM must compute the return value of computeDefault() first to pass it as the parameter to orElse().",explanation:"orElseGet avoids this by passing a functional Supplier lambda instead of a precomputed value.",hint:"Java evaluates method parameters eagerly before method invocation.",level:"Intermediate",codeExample:"opt.orElse(heavyMethod()); // heavyMethod() runs unconditionally before orElse starts!"},{question:"What is the memory and performance risk of using orElse(new ArrayList<>()) in a high-throughput loop?",shortAnswer:"A new ArrayList instance will be allocated on the heap during every single iteration, causing high memory churn and GC pressure even if 99% of the Optionals are present.",explanation:"Use orElseGet(ArrayList::new) to allocate only on empty Optionals.",hint:"Creates wasteful heap allocations on every iteration.",level:"Intermediate",codeExample:"opt.orElseGet(ArrayList::new); // Zero allocation when present!"}];function x(){return e.jsxs("div",{className:"space-y-12 px-4 md:px-8 py-8 text-slate-200 bg-slate-900 min-h-screen",children:[e.jsxs("header",{className:"space-y-4 border-b border-slate-800 pb-6",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"px-3 py-1 bg-sky-500/10 text-sky-400 border border-sky-500/20 text-xs font-semibold rounded-full uppercase tracking-wider",children:"Module 009_008 · Topic 8"}),e.jsx("span",{className:"px-3 py-1 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-xs font-semibold rounded-full",children:"Optional & Null-Safety"})]}),e.jsxs("h1",{className:"text-xl sm:text-2xl md:text-3xl font-bold text-white tracking-tight",children:["Performance Benchmark: ",e.jsx("code",{className:"text-emerald-400 font-mono",children:"orElse() vs orElseGet()"})," in Action"]}),e.jsx("p",{className:"text-base md:text-lg text-slate-400 leading-relaxed max-w-4xl",children:"High-stakes performance profiling: proving why orElse() runs side-effects unconditionally while orElseGet() runs strictly on-demand."})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsxs("h2",{className:"text-2xl font-bold text-emerald-400 flex items-center gap-2",children:[e.jsx("span",{children:"💻"})," Hands-On Java Demo Code"]}),e.jsx(t,{fileModule:o,title:"OrElseVsOrElseGetBenchmarkDemo.java",highlightLines:[18,25,34,43]})]}),e.jsx("section",{className:"space-y-4",children:e.jsx(r,{title:"Optional & Null-Safe Programming FAQs",questions:l})}),e.jsx("section",{className:"space-y-4",children:e.jsx(n,{content:s,title:"Module 009_008 Topic 8: orElse vs orElseGet Benchmark",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Printable Note",downloadFileName:"009_008_topic8_orelse_vs_orelseget_benchmark_note.txt"})}),e.jsx(a,{note:"Look at the console output of this benchmark carefully! Notice that when the Optional is present, orElse() still executed the heavy method, while orElseGet() did NOT! That is the critical performance secret of orElseGet()! — Sukanta Hui"})]})}export{x as default};
