import{j as e}from"./vendor-react-core-Doz9nIC6.js";import{J as t}from"./JavaFileLoader-BfBG3xz_.js";import{F as a}from"./FAQTemplate-CkSqDH4B.js";import{P as n}from"./PlainTextPrint-C08xhKA4.js";import{T as r}from"./TeacherSukantaHui-CC0AKmkm.js";import"./JavaCodeBlock-BwsLxS3r.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-BtJHuk7w.js";const i=`/**\r
 * Java Core Tutorial - Module 010_007: JIT Compiler, HotSpot Optimizations & GraalVM\r
 * Topic 7: Scalar Replacement - Zero-GC Stack & Register Allocation\r
 * Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
 */\r
\r
package com.coderaccotax.javatutorial.jit;\r
\r
public class ScalarReplacementZeroGcDemo {\r
\r
    public static class FeeSummary {\r
        public int tuitionFee;\r
        public int labFee;\r
        public FeeSummary(int t, int l) { this.tuitionFee = t; this.labFee = l; }\r
    }\r
\r
    public static void main(String[] args) {\r
        System.out.println("==========================================================================");\r
        System.out.println(" TOPIC 7: SCALAR REPLACEMENT (ZERO-GC OBJECTS) - BARRACKPORE");\r
        System.out.println("==========================================================================\\n");\r
\r
        System.out.println(">>> 1. SOURCE CODE WRITTEN BY DEVELOPER:");\r
        System.out.println("  FeeSummary summary = new FeeSummary(4000, 500);");\r
        System.out.println("  int total = summary.tuitionFee + summary.labFee;\\n");\r
\r
        System.out.println(">>> 2. WHAT JIT EMITS IN NATIVE ASSEMBLY (After Scalar Replacement):");\r
        System.out.println("  - JIT decomposes ('explodes') the FeeSummary object into its constituent scalars.");\r
        System.out.println("  - In native code: 'int tuitionFee = 4000; int labFee = 500; int total = tuitionFee + labFee;'");\r
        System.out.println("  - Stored directly in CPU registers (e.g. RAX and RBX registers)!\\n");\r
\r
        System.out.println(">>> 3. BENEFITS:");\r
        System.out.println("  - ZERO Heap Allocation (No Mark Word, Klass Word, or 16-byte object overhead).");\r
        System.out.println("  - ZERO Garbage Collection cost (No minor GC scanning or memory copying).");\r
        System.out.println("  - Blistering CPU cache performance!");\r
\r
        System.out.println("\\n==========================================================================");\r
    }\r
}\r
`,o=`================================================================================\r
JAVA CORE TUTORIAL - QUICK REVISION GUIDE\r
Module 010_007: JIT Compiler, HotSpot Optimizations & GraalVM\r
Topic 7: Scalar Replacement\r
Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
================================================================================\r
\r
1. WHAT IS SCALAR REPLACEMENT:\r
   - An optimization where an Aggregate Object is decomposed into its individual primitive fields (scalars).\r
   - The scalars are stored directly in CPU Registers or on the Thread Stack Frame instead of on the Heap.\r
\r
2. PREREQUISITES:\r
   - The object must be proven 'NoEscape' via Escape Analysis.\r
   - Enabled by default: '-XX:+EliminateAllocations'.\r
\r
================================================================================\r
Classroom Practice: Barrackpore Academy | Mentor: Sukanta Hui\r
================================================================================\r
`,s=[{question:"How does Scalar Replacement eliminate Garbage Collection overhead for temporary objects?",shortAnswer:"By deconstructing non-escaping objects into their primitive fields and storing them directly in CPU registers or stack slots, avoiding allocating an object instance on the Java Heap entirely. When the method returns, registers and stack slots are naturally reused with zero GC cost.",explanation:"Eliminates heap allocation and GC pause overhead completely.",hint:"Decomposes objects into primitive fields stored in CPU registers/stack slots.",level:"Intermediate",codeExample:"new Point(x,y) -> Transformed into int x, int y in CPU registers."},{question:"What JVM flag controls the Scalar Replacement optimization in HotSpot?",shortAnswer:"-XX:+EliminateAllocations (enabled by default when -XX:+DoEscapeAnalysis is active).",explanation:"Can be disabled with -XX:-EliminateAllocations for benchmarking.",hint:"-XX:+EliminateAllocations",level:"Intermediate",codeExample:"java -XX:+DoEscapeAnalysis -XX:+EliminateAllocations -jar app.jar"}];function b(){return e.jsxs("div",{className:"space-y-12 px-4 md:px-8 py-8 text-slate-200 bg-slate-900 min-h-screen",children:[e.jsxs("header",{className:"space-y-4 border-b border-slate-800 pb-6",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"px-3 py-1 bg-sky-500/10 text-sky-400 border border-sky-500/20 text-xs font-semibold rounded-full uppercase tracking-wider",children:"Module 010_007 · Topic 7"}),e.jsx("span",{className:"px-3 py-1 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-xs font-semibold rounded-full",children:"JIT Compiler & GraalVM"})]}),e.jsxs("h1",{className:"text-3xl md:text-4xl font-extrabold text-white tracking-tight",children:["Scalar Replacement: ",e.jsx("code",{className:"text-emerald-400 font-mono",children:"Zero-GC Stack & Register Allocation"})]}),e.jsx("p",{className:"text-base md:text-lg text-slate-400 leading-relaxed max-w-4xl",children:"Exploding objects: how the JIT breaks non-escaping objects into primitive scalars, mapping them directly to CPU registers and eliminating Garbage Collection."})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsxs("h2",{className:"text-2xl font-bold text-emerald-400 flex items-center gap-2",children:[e.jsx("span",{children:"💻"})," Hands-On Java Demo Code"]}),e.jsx(t,{fileModule:i,title:"ScalarReplacementZeroGcDemo.java",highlightLines:[18,25,34,43]})]}),e.jsx("section",{className:"space-y-4",children:e.jsx(a,{title:"JIT Compiler & GraalVM FAQs",questions:s})}),e.jsx("section",{className:"space-y-4",children:e.jsx(n,{content:o,title:"Module 010_007 Topic 7: Scalar Replacement (Zero-GC)",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Printable Note",downloadFileName:"010_007_topic7_scalar_replacement_zero_gc_note.txt"})}),e.jsx(r,{note:"Scalar Replacement is mind-blowing! When JIT sees a non-escaping object, it literally EXPLODES the object into basic primitive variables! No object header is created, no heap memory is touched, and Garbage Collection has ZERO work to do! — Sukanta Hui"})]})}export{b as default};
