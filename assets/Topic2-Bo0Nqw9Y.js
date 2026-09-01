import{j as e}from"./vendor-react-core-Doz9nIC6.js";import{J as r}from"./JavaFileLoader-BfBG3xz_.js";import{F as t}from"./FAQTemplate-BHhlgA96.js";import{P as n}from"./PlainTextPrint-C08xhKA4.js";import{T as i}from"./TeacherSukantaHui-BaJcBHAy.js";import"./JavaCodeBlock-BwsLxS3r.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-8ao-0upJ.js";const o=`/**\r
 * Java Core Tutorial - Module 008_006: JMM, volatile, Atomics & CAS\r
 * Topic 2: Instruction Reordering: Compilers, JIT & Out-of-Order CPU Execution\r
 * Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
 */\r
\r
package com.coderaccotax.javatutorial.multithreading;\r
\r
public class InstructionReorderingExplanationDemo {\r
\r
    public static void main(String[] args) {\r
        System.out.println("==========================================================================");\r
        System.out.println(" TOPIC 2: INSTRUCTION REORDERING & AS-IF-SERIAL SEMANTICS - BARRACKPORE");\r
        System.out.println("==========================================================================\\n");\r
\r
        System.out.println(">>> WHAT IS INSTRUCTION REORDERING?");\r
        System.out.println("  - To maximize CPU instruction pipelining and memory throughput, 3 distinct layers reorder your code:");\r
        System.out.println("    1. Java Compiler (javac)      : Compiles code to optimize bytecode layout.");\r
        System.out.println("    2. JIT Compiler (HotSpot C2)  : Aggressively reorders machine instructions.");\r
        System.out.println("    3. Out-of-Order CPU Pipeline  : Modern x86/ARM processors execute instructions out of order if data dependencies allow!");\r
        System.out.println();\r
        System.out.println(">>> THE 'AS-IF-SERIAL' SEMANTICS RULE:");\r
        System.out.println("  - Compilers and CPUs are allowed to reorder ANY instructions as long as the result in a SINGLE THREAD is identical to source code order.");\r
        System.out.println("  - Example:");\r
        System.out.println("      int a = 1; // Line 1");\r
        System.out.println("      boolean ready = true; // Line 2");\r
        System.out.println("  - In single-threaded execution, the CPU can execute Line 2 BEFORE Line 1 with zero side effects!");\r
        System.out.println("  - In MULTITHREADED execution, another thread might observe 'ready == true' while 'a == 0' (uninitialized!), causing catastrophic bugs!");\r
\r
        System.out.println("\\n==========================================================================");\r
    }\r
}`,a=`================================================================================\r
JAVA CORE TUTORIAL - QUICK REVISION GUIDE\r
Module 008_006: JMM, volatile, Atomics & CAS\r
Topic 2: Instruction Reordering\r
Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
================================================================================\r
\r
1. INSTRUCTION REORDERING:\r
   - Reordered by: javac compiler, JIT compiler (HotSpot C2), CPU hardware pipeline.\r
   - 'as-if-serial' semantics: Single-threaded execution looks unaltered.\r
   - Multithreaded hazard: Another thread sees 'ready=true' before data is written!\r
   - Solution: Use 'volatile' (inserts hardware Memory Barriers preventing reordering).\r
\r
================================================================================\r
Classroom Practice: Barrackpore Academy | Mentor: Sukanta Hui\r
================================================================================`,s=[{question:"What is 'Instruction Reordering', what are 'as-if-serial' semantics, and why does reordering break multi-threaded programs?",shortAnswer:"'Instruction Reordering' is a performance optimization where the Java compiler, JIT compiler, and CPU pipeline rearrange the execution order of instructions to maximize CPU instruction-level parallelism and cache line efficiency. 'as-if-serial' semantics guarantee that reordering will never change the outcome within a SINGLE thread. However, across MULTIPLE threads, when Thread 1 writes 'data = 42; ready = true;', the CPU may reorder them so 'ready = true' is visible before 'data = 42', causing Thread 2 to observe 'ready == true' but read uninitialized 'data == 0'.",explanation:"Foundational Java Memory Model concurrency concept.",hint:"Compilers and CPUs reorder instructions for speed as long as single-threaded output is unchanged; breaks multi-threading.",level:"Intermediate",codeExample:"int a = 1; boolean ready = true; // May be executed as: ready = true; int a = 1;"}];function y(){return e.jsxs("div",{className:"space-y-12 px-4 md:px-8 py-8 text-slate-200 bg-slate-900 min-h-screen",children:[e.jsxs("header",{className:"space-y-4 border-b border-slate-800 pb-6",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"px-3 py-1 bg-sky-500/10 text-sky-400 border border-sky-500/20 text-xs font-semibold rounded-full uppercase tracking-wider",children:"Module 008_006 · Topic 2"}),e.jsx("span",{className:"px-3 py-1 bg-purple-500/10 text-purple-400 border border-purple-500/20 text-xs font-semibold rounded-full",children:"Instruction Reordering"})]}),e.jsxs("h1",{className:"text-xl sm:text-2xl md:text-3xl font-bold text-white tracking-tight",children:[e.jsx("code",{className:"text-purple-400 font-mono",children:"Instruction Reordering"}),": JIT Optimizations & As-If-Serial Semantics"]}),e.jsx("p",{className:"text-base md:text-lg text-slate-400 leading-relaxed max-w-4xl",children:"Dissect compiler optimizations: exploring how JIT compilers and out-of-order CPU execution pipelines reorder instructions for speed and why multi-threaded programs require memory barriers."})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsxs("h2",{className:"text-2xl font-bold text-emerald-400 flex items-center gap-2",children:[e.jsx("span",{children:"💻"})," Hands-On Java Demo Code"]}),e.jsx(r,{fileModule:o,title:"InstructionReorderingExplanationDemo.java",highlightLines:[7,10,13,14,15,16,17,21,22,26,27]})]}),e.jsx("section",{className:"space-y-4",children:e.jsx(t,{title:"Instruction Reordering FAQs",questions:s})}),e.jsx("section",{className:"space-y-4",children:e.jsx(n,{content:a,title:"Module 008_006 Topic 2: Instruction Reordering",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Printable Note",downloadFileName:"008_006_topic2_instruction_reordering_note.txt"})}),e.jsx(i,{note:"The CPU is allowed to execute line 2 before line 1 if it makes the computer faster! For 1 thread, you never notice. But with multiple threads, thread 2 might see your ready flag before your data is even initialized! That's why we need memory barriers! — Sukanta Hui"})]})}export{y as default};
