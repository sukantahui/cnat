import{j as e}from"./vendor-react-core-Doz9nIC6.js";import{J as t}from"./JavaFileLoader-BfBG3xz_.js";import{F as n}from"./FAQTemplate-BHhlgA96.js";import{P as i}from"./PlainTextPrint-C08xhKA4.js";import{T as a}from"./TeacherSukantaHui-CEPuAfsb.js";import"./JavaCodeBlock-BwsLxS3r.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-DGCamHnX.js";const o=`/**\r
 * Java Core Tutorial - Module 010_007: JIT Compiler, HotSpot Optimizations & GraalVM\r
 * Topic 5: Method Inlining - The Holy Grail of JIT Optimization\r
 * Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
 */\r
\r
package com.coderaccotax.javatutorial.jit;\r
\r
public class MethodInliningDemo {\r
\r
    public static class TuitionCalculator {\r
        // Small, hot helper method (Prime candidate for JIT Inlining!):\r
        public static double calculateMonthlyFee(double baseFee, double gstPercentage) {\r
            return baseFee + (baseFee * gstPercentage / 100.0);\r
        }\r
    }\r
\r
    public static void main(String[] args) {\r
        System.out.println("==========================================================================");\r
        System.out.println(" TOPIC 5: METHOD INLINING - BARRACKPORE ACADEMY");\r
        System.out.println("==========================================================================\\n");\r
\r
        System.out.println(">>> HOW METHOD INLINING WORKS:");\r
        System.out.println("  1. BEFORE INLINING (Bytecode level):");\r
        System.out.println("     - 'invokestatic calculateMonthlyFee' -> Pushes stack frame, copies args, jumps, returns, pops frame.\\n");\r
        System.out.println("  2. AFTER JIT INLINING (Native Machine Code level):");\r
        System.out.println("     - JIT eliminates the method call completely!");\r
        System.out.println("     - Emits direct machine code: 'result = baseFee + (baseFee * gst / 100.0);' directly in main()!\\n");\r
\r
        System.out.println(">>> WHY INLINING ENABLES OTHER OPTIMIZATIONS:");\r
        System.out.println("  - Eliminates function call branch prediction penalty.");\r
        System.out.println("  - Exposes variables to Escape Analysis, Constant Folding, and Dead Code Elimination!");\r
\r
        double fee = TuitionCalculator.calculateMonthlyFee(4000.0, 18.0);\r
        System.out.println("\\n>>> Calculated Monthly Fee: ₹" + fee);\r
        System.out.println("==========================================================================");\r
    }\r
}\r
`,l=`================================================================================\r
JAVA CORE TUTORIAL - QUICK REVISION GUIDE\r
Module 010_007: JIT Compiler, HotSpot Optimizations & GraalVM\r
Topic 5: Method Inlining\r
Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
================================================================================\r
\r
1. WHAT IS METHOD INLINING:\r
   - The compiler replaces a method invocation call site with the actual body of the target method.\r
   - Eliminates method call overhead: stack frame creation, argument passing, return jumps.\r
\r
2. INLINING HEURISTICS & THRESHOLDS:\r
   - Trivial / Small Methods: Bytecode size &le; 35 bytes ('-XX:MaxInlineSize=35') are inlined aggressively.\r
   - Hot Methods: Bytecode size &le; 325 bytes ('-XX:FreqInlineSize=325') are inlined if called frequently.\r
   - Monomorphic / Bimorphic call sites are devirtualized and speculatively inlined!\r
\r
================================================================================\r
Classroom Practice: Barrackpore Academy | Mentor: Sukanta Hui\r
================================================================================\r
`,r=[{question:"Why is Method Inlining considered the most important optimization performed by the JIT compiler?",shortAnswer:"Because in addition to eliminating the CPU overhead of method call instructions and stack frame management, inlining brings the caller and callee code into the same optimization scope, enabling downstream optimizations like Escape Analysis, Constant Folding, Loop Unrolling, and Dead Code Elimination.",explanation:"Unlocks the full power of global compiler optimizations.",hint:"Eliminates call overhead and enables all other downstream optimizations.",level:"Intermediate",codeExample:"Inlining merges caller and callee scopes together."},{question:"What is the default bytecode size limit for frequently executed 'hot' methods to be inlined by HotSpot?",shortAnswer:"325 bytes of bytecode, configured via -XX:FreqInlineSize=325 (while non-frequent small methods are capped at 35 bytes via -XX:MaxInlineSize=35).",explanation:"Keeping small helper methods below 35 bytes guarantees aggressive inlining.",hint:"325 bytes for hot methods (-XX:FreqInlineSize).",level:"Advanced",codeExample:"-XX:FreqInlineSize=325 -XX:MaxInlineSize=35"}];function x(){return e.jsxs("div",{className:"space-y-12 px-4 md:px-8 py-8 text-slate-200 bg-slate-900 min-h-screen",children:[e.jsxs("header",{className:"space-y-4 border-b border-slate-800 pb-6",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"px-3 py-1 bg-sky-500/10 text-sky-400 border border-sky-500/20 text-xs font-semibold rounded-full uppercase tracking-wider",children:"Module 010_007 · Topic 5"}),e.jsx("span",{className:"px-3 py-1 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-xs font-semibold rounded-full",children:"JIT Compiler & GraalVM"})]}),e.jsxs("h1",{className:"text-xl sm:text-2xl md:text-3xl font-bold text-white tracking-tight",children:["Method Inlining: ",e.jsx("code",{className:"text-emerald-400 font-mono",children:"The Holy Grail of JIT Optimization"})]}),e.jsx("p",{className:"text-base md:text-lg text-slate-400 leading-relaxed max-w-4xl",children:"Eliminating call overhead: how the JIT replaces method invocations with raw method bodies, removing stack frames and enabling downstream optimizations."})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsxs("h2",{className:"text-2xl font-bold text-emerald-400 flex items-center gap-2",children:[e.jsx("span",{children:"💻"})," Hands-On Java Demo Code"]}),e.jsx(t,{fileModule:o,title:"MethodInliningDemo.java",highlightLines:[18,25,34,43]})]}),e.jsx("section",{className:"space-y-4",children:e.jsx(n,{title:"JIT Compiler & GraalVM FAQs",questions:r})}),e.jsx("section",{className:"space-y-4",children:e.jsx(i,{content:l,title:"Module 010_007 Topic 5: Method Inlining",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Printable Note",downloadFileName:"010_007_topic5_method_inlining_note.txt"})}),e.jsx(a,{note:"Method Inlining is called the Queen of all JIT optimizations! When you call a getter: student.getScore(), JIT replaces the call with student.score directly in machine code! It eliminates stack pushes, vtable lookups, and registers! — Sukanta Hui"})]})}export{x as default};
