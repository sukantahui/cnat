import{j as e}from"./vendor-react-core-Doz9nIC6.js";import{J as t}from"./JavaFileLoader-BfBG3xz_.js";import{F as n}from"./FAQTemplate-BHhlgA96.js";import{P as o}from"./PlainTextPrint-C08xhKA4.js";import{T as r}from"./TeacherSukantaHui-DDN87fI5.js";import"./JavaCodeBlock-BwsLxS3r.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-DEsnU7fn.js";const i=`/**\r
 * Java Core Tutorial - Module 010_007: JIT Compiler, HotSpot Optimizations & GraalVM\r
 * Topic 2: Tiered Level 0 - Interpreted Bytecode & Invocation Counters\r
 * Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
 */\r
\r
package com.coderaccotax.javatutorial.jit;\r
\r
public class TieredLevel0InterpreterDemo {\r
\r
    public static void main(String[] args) {\r
        System.out.println("==========================================================================");\r
        System.out.println(" TOPIC 2: TIERED LEVEL 0 (INTERPRETED BYTECODE) - BARRACKPORE");\r
        System.out.println("==========================================================================\\n");\r
\r
        System.out.println(">>> HOW LEVEL 0 OPERATES (Template Interpreter):");\r
        System.out.println("  1. When JVM boots, it maps each bytecode opcode to a tiny snippet of native assembly code.");\r
        System.out.println("  2. Level 0 executes instructions directly without compiling the entire method.");\r
        System.out.println("  3. HotSpot maintains TWO internal counters per method:");\r
        System.out.println("     - Invocation Counter : Incremented every time the method is called.");\r
        System.out.println("     - Backedge Counter   : Incremented every time a loop executes a backward jump.\\n");\r
\r
        System.out.println(">>> TRIGGERING COMPILATION:");\r
        System.out.println("  - When (Invocation Counter + Backedge Counter) > CompileThreshold:");\r
        System.out.println("  - The JVM queues a compilation request to the C1 JIT Compiler thread (Level 3)!");\r
        System.out.println("==========================================================================");\r
    }\r
}\r
`,a=`================================================================================\r
JAVA CORE TUTORIAL - QUICK REVISION GUIDE\r
Module 010_007: JIT Compiler, HotSpot Optimizations & GraalVM\r
Topic 2: Tiered Level 0 (Interpreter)\r
Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
================================================================================\r
\r
1. WHAT HAPPENS AT LEVEL 0:\r
   - Bytecode execution with zero JIT compilation overhead.\r
   - Collects initial invocation counters to identify 'hot' candidate methods.\r
\r
2. ON-STACK REPLACEMENT (OSR):\r
   - If a method contains a long-running loop that runs millions of iterations before the method returns,\r
     the Backedge Counter triggers OSR (compiles and swaps native code onto the active stack mid-loop!).\r
\r
================================================================================\r
Classroom Practice: Barrackpore Academy | Mentor: Sukanta Hui\r
================================================================================\r
`,s=[{question:"What are the two counters tracked by the JVM at Level 0 to detect hot code?",shortAnswer:"1. The Invocation Counter (counts method entries), and 2. The Backedge Counter (counts loop iterations).",explanation:"When their sum exceeds the compilation threshold, JIT compilation is queued.",hint:"Invocation Counter and Backedge Counter.",level:"Intermediate",codeExample:"Invocation Count + Backedge Count > Threshold → Triggers JIT"},{question:"What is On-Stack Replacement (OSR) in the JVM execution engine?",shortAnswer:"A JIT optimization technique where a long-running loop is compiled into native code while it is still actively executing, and the JVM replaces the interpreted stack frame with the native compiled frame mid-execution without waiting for the method to return.",explanation:"Crucial for long-running batch loops.",hint:"Swaps interpreted loop frames with native machine code mid-execution.",level:"Advanced",codeExample:"for (int i=0; i<10_000_000; i++) { ... } // Replaced on stack via OSR!"}];function T(){return e.jsxs("div",{className:"space-y-12 px-4 md:px-8 py-8 text-slate-200 bg-slate-900 min-h-screen",children:[e.jsxs("header",{className:"space-y-4 border-b border-slate-800 pb-6",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"px-3 py-1 bg-sky-500/10 text-sky-400 border border-sky-500/20 text-xs font-semibold rounded-full uppercase tracking-wider",children:"Module 010_007 · Topic 2"}),e.jsx("span",{className:"px-3 py-1 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-xs font-semibold rounded-full",children:"JIT Compiler & GraalVM"})]}),e.jsxs("h1",{className:"text-xl sm:text-2xl md:text-3xl font-bold text-white tracking-tight",children:["Tiered Level 0: ",e.jsx("code",{className:"text-emerald-400 font-mono",children:"Interpreted Bytecode & Invocation Counters"})]}),e.jsx("p",{className:"text-base md:text-lg text-slate-400 leading-relaxed max-w-4xl",children:"From the first instruction: how the template interpreter executes opcodes, increments invocation counters, and triggers JIT compilation requests."})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsxs("h2",{className:"text-2xl font-bold text-emerald-400 flex items-center gap-2",children:[e.jsx("span",{children:"💻"})," Hands-On Java Demo Code"]}),e.jsx(t,{fileModule:i,title:"TieredLevel0InterpreterDemo.java",highlightLines:[18,25,34,43]})]}),e.jsx("section",{className:"space-y-4",children:e.jsx(n,{title:"JIT Compiler & GraalVM FAQs",questions:s})}),e.jsx("section",{className:"space-y-4",children:e.jsx(o,{content:a,title:"Module 010_007 Topic 2: Tiered Level 0: Interpreter",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Printable Note",downloadFileName:"010_007_topic2_tiered_level0_interpreter_note.txt"})}),e.jsx(r,{note:"When your main method runs, it begins at Level 0! The HotSpot Template Interpreter executes bytecodes and tracks two counters: Invocation Counter (how many times called) and Backedge Counter (how many loop iterations)! — Sukanta Hui"})]})}export{T as default};
