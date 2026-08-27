import{j as e}from"./vendor-react-core-Doz9nIC6.js";import{J as t}from"./JavaFileLoader-BfBG3xz_.js";import{F as n}from"./FAQTemplate-CkSqDH4B.js";import{P as a}from"./PlainTextPrint-C08xhKA4.js";import{T as r}from"./TeacherSukantaHui-CC0AKmkm.js";import"./JavaCodeBlock-BwsLxS3r.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-BtJHuk7w.js";const i=`/**\r
 * Java Core Tutorial - Module 010_007: JIT Compiler, HotSpot Optimizations & GraalVM\r
 * Topic 10: De-optimization & Uncommon Traps - Bailing Out Safely\r
 * Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
 */\r
\r
package com.coderaccotax.javatutorial.jit;\r
\r
public class DeoptimizationUncommonTrapsDemo {\r
\r
    public interface FeeDiscount {\r
        double applyDiscount(double fee);\r
    }\r
\r
    public static class StandardDiscount implements FeeDiscount {\r
        @Override public double applyDiscount(double fee) { return fee * 0.90; }\r
    }\r
\r
    // New class introduced later at runtime:\r
    public static class SpecialScholarshipDiscount implements FeeDiscount {\r
        @Override public double applyDiscount(double fee) { return fee * 0.50; }\r
    }\r
\r
    public static void main(String[] args) {\r
        System.out.println("==========================================================================");\r
        System.out.println(" TOPIC 10: DE-OPTIMIZATION & UNCOMMON TRAPS - BARRACKPORE");\r
        System.out.println("==========================================================================\\n");\r
\r
        FeeDiscount standard = new StandardDiscount();\r
\r
        System.out.println(">>> 1. WARMING UP MONOMORPHIC CALL SITE (100% StandardDiscount):");\r
        for (int i = 0; i < 50_000; i++) {\r
            calculateFinalFee(standard, 1000.0);\r
        }\r
        System.out.println("  - JIT compiled calculateFinalFee() at Level 4 with speculative devirtualization!\\n");\r
\r
        System.out.println(">>> 2. BREAKING SPECULATIVE ASSUMPTION WITH NEW CLASS:");\r
        FeeDiscount special = new SpecialScholarshipDiscount();\r
        double fee = calculateFinalFee(special, 1000.0);\r
        System.out.println("  - Passed 'SpecialScholarshipDiscount' -> Uncommon Trap triggered!");\r
        System.out.println("  - HotSpot safely DE-OPTIMIZED back to Interpreter / C1!");\r
        System.out.println("  - Calculated Fee: ₹" + fee);\r
\r
        System.out.println("\\n==========================================================================");\r
    }\r
\r
    static double calculateFinalFee(FeeDiscount discount, double baseFee) {\r
        return discount.applyDiscount(baseFee); // Speculatively inlined by C2\r
    }\r
}\r
`,o=`================================================================================\r
JAVA CORE TUTORIAL - QUICK REVISION GUIDE\r
Module 010_007: JIT Compiler, HotSpot Optimizations & GraalVM\r
Topic 10: De-optimization & Uncommon Traps\r
Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
================================================================================\r
\r
1. WHAT IS AN UNCOMMON TRAP:\r
   - A piece of code emitted by the JIT at points where speculative assumptions might fail\r
     (e.g. assumption that a polymorphic call site is always Monomorphic).\r
\r
2. DE-OPTIMIZATION WORKFLOW:\r
   - Step 1: Speculative assumption is violated at runtime.\r
   - Step 2: CPU hits Uncommon Trap.\r
   - Step 3: JVM reconstructs the interpreted Stack Frame from the compiled frame state.\r
   - Step 4: Execution continues in Interpreter with zero crashes or data loss.\r
   - Step 5: JIT re-profiles and recompiles with more accurate heuristics.\r
\r
================================================================================\r
Classroom Practice: Barrackpore Academy | Mentor: Sukanta Hui\r
================================================================================\r
`,s=[{question:"What is De-optimization in the HotSpot Virtual Machine?",shortAnswer:"The mechanism by which the JVM safely rolls back JIT-compiled native machine code and resumes execution in the Interpreter when a speculative runtime assumption (such as class hierarchy or branch frequency) is invalidated.",explanation:"Allows the JIT to make aggressive speculative optimizations with total safety.",hint:"Safely reverts compiled machine code back to the Interpreter when assumptions fail.",level:"Intermediate",codeExample:"Assumption broken -> Uncommon Trap -> De-optimize to Interpreter."},{question:"What triggers an 'Uncommon Trap' in JIT-compiled code?",shortAnswer:"Events that violate speculative assumptions, such as loading a new subclass that turns a monomorphic call site into a polymorphic one, encountering a null pointer where none was ever seen during profiling, or taking an untaken branch.",explanation:"Ensures seamless execution continuity.",hint:"Loading new classes, unexpected nulls, or taking previously untaken branches.",level:"Advanced",codeExample:"New subclass loaded -> Invalidation of speculatively inlined call."}];function b(){return e.jsxs("div",{className:"space-y-12 px-4 md:px-8 py-8 text-slate-200 bg-slate-900 min-h-screen",children:[e.jsxs("header",{className:"space-y-4 border-b border-slate-800 pb-6",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"px-3 py-1 bg-sky-500/10 text-sky-400 border border-sky-500/20 text-xs font-semibold rounded-full uppercase tracking-wider",children:"Module 010_007 · Topic 10"}),e.jsx("span",{className:"px-3 py-1 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-xs font-semibold rounded-full",children:"JIT Compiler & GraalVM"})]}),e.jsxs("h1",{className:"text-3xl md:text-4xl font-extrabold text-white tracking-tight",children:["De-optimization & Uncommon Traps: ",e.jsx("code",{className:"text-emerald-400 font-mono",children:"Bailing Out Safely"})]}),e.jsx("p",{className:"text-base md:text-lg text-slate-400 leading-relaxed max-w-4xl",children:"When speculation fails: how HotSpot safely reverts native machine code back to the Interpreter when speculative assumptions are broken."})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsxs("h2",{className:"text-2xl font-bold text-emerald-400 flex items-center gap-2",children:[e.jsx("span",{children:"💻"})," Hands-On Java Demo Code"]}),e.jsx(t,{fileModule:i,title:"DeoptimizationUncommonTrapsDemo.java",highlightLines:[18,25,34,43]})]}),e.jsx("section",{className:"space-y-4",children:e.jsx(n,{title:"JIT Compiler & GraalVM FAQs",questions:s})}),e.jsx("section",{className:"space-y-4",children:e.jsx(a,{content:o,title:"Module 010_007 Topic 10: De-optimization & Uncommon Traps",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Printable Note",downloadFileName:"010_007_topic10_deoptimization_uncommon_traps_note.txt"})}),e.jsx(r,{note:"JIT makes aggressive bets: 'This variable is NEVER null!' If someone finally passes null, the speculative bet fails! HotSpot triggers an Uncommon Trap and de-optimizes back to the Interpreter safely! — Sukanta Hui"})]})}export{b as default};
