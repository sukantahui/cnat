import{j as e}from"./vendor-react-core-Doz9nIC6.js";import{J as t}from"./JavaFileLoader-BfBG3xz_.js";import{F as n}from"./FAQTemplate-BHhlgA96.js";import{P as r}from"./PlainTextPrint-C08xhKA4.js";import{T as a}from"./TeacherSukantaHui-BaJcBHAy.js";import"./JavaCodeBlock-BwsLxS3r.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-8ao-0upJ.js";const i=`/**\r
 * Java Core Tutorial - Module 010_003: JVM Architecture, ClassLoaders & Bytecode Execution\r
 * Topic 0: Architectural Overview of the Java Virtual Machine\r
 * Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
 */\r
\r
package com.coderaccotax.javatutorial.jvm;\r
\r
import java.lang.management.ManagementFactory;\r
import java.lang.management.RuntimeMXBean;\r
\r
public class JvmArchitectureOverviewDemo {\r
\r
    public static void main(String[] args) {\r
        System.out.println("==========================================================================");\r
        System.out.println(" TOPIC 0: ARCHITECTURAL OVERVIEW OF THE JVM - BARRACKPORE");\r
        System.out.println("==========================================================================\\n");\r
\r
        RuntimeMXBean runtimeBean = ManagementFactory.getRuntimeMXBean();\r
        Runtime runtime = Runtime.getRuntime();\r
\r
        System.out.println(">>> 1. RUNTIME JVM INSTANCE DIAGNOSTICS:");\r
        System.out.println("  - JVM Implementation  : " + runtimeBean.getVmName() + " (" + runtimeBean.getVmVendor() + ")");\r
        System.out.println("  - JVM Version         : " + runtimeBean.getVmVersion());\r
        System.out.println("  - Available CPU Cores : " + runtime.availableProcessors());\r
        System.out.println("  - Total Heap Memory   : " + (runtime.totalMemory() / (1024 * 1024)) + " MB");\r
        System.out.println("  - Max Heap Memory     : " + (runtime.maxMemory() / (1024 * 1024)) + " MB");\r
\r
        System.out.println("\\n>>> THE 4 CORE SUBSYSTEMS OF THE JVM:");\r
        System.out.println("  1. CLASSLOADER SUBSYSTEM : Loads, Links, and Initializes .class bytecode files into memory.");\r
        System.out.println("  2. RUNTIME DATA AREAS    : Heap, JVM Stacks, Metaspace/Method Area, PC Registers, Native Stacks.");\r
        System.out.println("  3. EXECUTION ENGINE      : Bytecode Interpreter, JIT Compiler (C1/C2 Tiered), Garbage Collector.");\r
        System.out.println("  4. NATIVE METHOD INTERFACE: JNI bridging to C/C++ native system libraries.");\r
\r
        System.out.println("\\n==========================================================================");\r
    }\r
}\r
`,s=`================================================================================\r
JAVA CORE TUTORIAL - QUICK REVISION GUIDE\r
Module 010_003: JVM Architecture, ClassLoaders & Bytecode Execution\r
Topic 0: Architectural Overview of the JVM\r
Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
================================================================================\r
\r
1. THE 4 PILLARS OF JVM ARCHITECTURE:\r
   1. ClassLoader Subsystem: Responsible for dynamic class loading, bytecode verification, and linking.\r
   2. Runtime Data Areas: Memory allocated to JVM execution (Heap, Stack, Metaspace, PC Register, Native Stack).\r
   3. Execution Engine: Translates bytecode into machine code via Interpreter + JIT Compiler (HotSpot Tiered Compilation), managed by Garbage Collection.\r
   4. Native Interface (JNI): Executes native C/C++ libraries when bytecode requests system-level operations.\r
\r
================================================================================\r
Classroom Practice: Barrackpore Academy | Mentor: Sukanta Hui\r
================================================================================\r
`,o=[{question:"What are the four primary subsystems of the Java Virtual Machine?",shortAnswer:"1. ClassLoader Subsystem, 2. Runtime Data Areas (Memory), 3. Execution Engine (Interpreter, JIT, GC), and 4. Java Native Interface (JNI) & Native Method Libraries.",explanation:"Standard HotSpot JVM high-level architectural specification.",hint:"ClassLoader, Runtime Memory Areas, Execution Engine, and JNI.",level:"Beginner",codeExample:"JVM = ClassLoaders + Memory (Heap/Stack) + Engine (JIT/GC) + JNI"},{question:"What is the role of the Execution Engine in the JVM?",shortAnswer:"The Execution Engine reads bytecode from the Runtime Data Areas and executes it either by interpreting instructions one-by-one or compiling frequently executed 'hot' methods into native machine code via the JIT (Just-In-Time) compiler.",explanation:"Combines fast startup (Interpreter) with peak performance (JIT).",hint:"Interprets and JIT-compiles bytecode into native CPU instructions.",level:"Intermediate",codeExample:"Interpreter → JIT Compiler (C1/C2) → Native CPU Execution"}];function y(){return e.jsxs("div",{className:"space-y-12 px-4 md:px-8 py-8 text-slate-200 bg-slate-900 min-h-screen",children:[e.jsxs("header",{className:"space-y-4 border-b border-slate-800 pb-6",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"px-3 py-1 bg-sky-500/10 text-sky-400 border border-sky-500/20 text-xs font-semibold rounded-full uppercase tracking-wider",children:"Module 010_003 · Topic 0"}),e.jsx("span",{className:"px-3 py-1 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-xs font-semibold rounded-full",children:"JVM & ClassLoaders"})]}),e.jsxs("h1",{className:"text-xl sm:text-2xl md:text-3xl font-bold text-white tracking-tight",children:["Architectural Overview of the ",e.jsx("code",{className:"text-emerald-400 font-mono",children:"Java Virtual Machine (JVM)"})]}),e.jsx("p",{className:"text-base md:text-lg text-slate-400 leading-relaxed max-w-4xl",children:"The 4 primary subsystems: ClassLoader Subsystem, Runtime Data Areas, Execution Engine (Interpreter & JIT), and Native Interface (JNI)."})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsxs("h2",{className:"text-2xl font-bold text-emerald-400 flex items-center gap-2",children:[e.jsx("span",{children:"💻"})," Hands-On Java Demo Code"]}),e.jsx(t,{fileModule:i,title:"JvmArchitectureOverviewDemo.java",highlightLines:[18,25,34,43]})]}),e.jsx("section",{className:"space-y-4",children:e.jsx(n,{title:"JVM Architecture & ClassLoaders FAQs",questions:o})}),e.jsx("section",{className:"space-y-4",children:e.jsx(r,{content:s,title:"Module 010_003 Topic 0: JVM Architecture Overview",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Printable Note",downloadFileName:"010_003_topic0_jvm_architecture_overview_note.txt"})}),e.jsx(a,{note:"The JVM is an abstract computing machine with its own instruction set, memory architecture, and execution engine! Understanding its 4 subsystems is what separates junior coders from senior architects! — Sukanta Hui"})]})}export{y as default};
