import{j as e}from"./vendor-react-core-Doz9nIC6.js";import{J as s}from"./JavaFileLoader-BfBG3xz_.js";import{F as t}from"./FAQTemplate-BHhlgA96.js";import{P as r}from"./PlainTextPrint-C08xhKA4.js";import{T as n}from"./TeacherSukantaHui-RpFLNJ5A.js";import"./JavaCodeBlock-BwsLxS3r.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-wprqVFW_.js";const a=`/**\r
 * Java Core Tutorial - Module 008_001: Thread Fundamentals, Lifecycle & Creation\r
 * Topic 1: Process vs Thread: Memory Address Isolation vs Shared Memory Concurrency\r
 * Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
 */\r
\r
package com.coderaccotax.javatutorial.multithreading;\r
\r
public class ProcessVsThreadComparisonDemo {\r
\r
    public static void main(String[] args) {\r
        System.out.println("==========================================================================");\r
        System.out.println(" TOPIC 1: PROCESS vs THREAD COMPARISON - BARRACKPORE ACADEMY");\r
        System.out.println("==========================================================================\\n");\r
\r
        long pid = ProcessHandle.current().pid();\r
        System.out.println(">>> 1. Current Running OS Process ID (PID): " + pid);\r
        System.out.println("  Active JVM Threads in this Process   : " + Thread.activeCount());\r
\r
        System.out.println("\\n>>> 2. PROCESS vs THREAD ARCHITECTURAL COMPARISON:");\r
        System.out.println("+--------------------+-----------------------------------+-----------------------------------+");\r
        System.out.println("| Feature            | Process (Heavyweight)             | Thread (Lightweight Sub-Process)  |");\r
        System.out.println("+--------------------+-----------------------------------+-----------------------------------+");\r
        System.out.println("| Memory Space       | Isolated virtual address space    | Shares JVM Heap & Metaspace       |");\r
        System.out.println("| Creation Cost      | High (OS forks address space)     | Low (~1 MB thread stack allocation|");\r
        System.out.println("| Context Switch     | Slow (Flushes CPU TLB & registers)| Fast (Swaps registers and stack)  |");\r
        System.out.println("| Communication      | IPC (Pipes, Sockets, Shared Mem)  | Direct shared object references   |");\r
        System.out.println("| Crash Impact       | Isolated (Does not crash other OS)| Crashes entire process if fatal   |");\r
        System.out.println("+--------------------+-----------------------------------+-----------------------------------+");\r
\r
        System.out.println("\\n>>> SUMMARY: A Process is an execution container; a Thread is the execution unit inside it!");\r
\r
        System.out.println("\\n==========================================================================");\r
    }\r
}`,o=`================================================================================\r
JAVA CORE TUTORIAL - QUICK REVISION GUIDE\r
Module 008_001: Thread Fundamentals, Lifecycle & Creation\r
Topic 1: Process vs Thread\r
Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
================================================================================\r
\r
1. PROCESS vs THREAD:\r
   - Process: Heavyweight, isolated memory space, high creation/switch cost.\r
   - Thread: Lightweight, shares heap memory within 1 process, fast switch.\r
   - 1 Java Process (JVM) contains many concurrent Threads.\r
   - Threads communicate directly via shared heap references.\r
\r
================================================================================\r
Classroom Practice: Barrackpore Academy | Mentor: Sukanta Hui\r
================================================================================`,i=[{question:"Explain the key differences between an Operating System 'Process' and a Java 'Thread'.",shortAnswer:"A 'Process' is an independent heavyweight program executing in its own isolated memory address space; processes communicate via complex Inter-Process Communication (IPC) and a crash in one does not affect others. A 'Thread' is a lightweight unit of execution within a process that shares the JVM Heap, Metaspace, and open file handles with other threads in that same process, communicating easily via shared objects with fast context switching.",explanation:"Core operating systems and multithreading foundation question.",hint:"Processes have isolated memory spaces; threads share heap memory within the same process.",level:"Beginner",codeExample:"long pid = ProcessHandle.current().pid(); // OS Process ID"}];function y(){return e.jsxs("div",{className:"space-y-12 px-4 md:px-8 py-8 text-slate-200 bg-slate-900 min-h-screen",children:[e.jsxs("header",{className:"space-y-4 border-b border-slate-800 pb-6",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"px-3 py-1 bg-sky-500/10 text-sky-400 border border-sky-500/20 text-xs font-semibold rounded-full uppercase tracking-wider",children:"Module 008_001 · Topic 1"}),e.jsx("span",{className:"px-3 py-1 bg-purple-500/10 text-purple-400 border border-purple-500/20 text-xs font-semibold rounded-full",children:"Process vs Thread"})]}),e.jsxs("h1",{className:"text-xl sm:text-2xl md:text-3xl font-bold text-white tracking-tight",children:[e.jsx("code",{className:"text-emerald-400 font-mono",children:"Process"})," vs ",e.jsx("code",{className:"text-sky-400 font-mono",children:"Thread"}),": Address Space Isolation vs Shared Memory Concurrency"]}),e.jsx("p",{className:"text-base md:text-lg text-slate-400 leading-relaxed max-w-4xl",children:"Understand runtime boundaries: contrasting isolated OS process address spaces and Inter-Process Communication against lightweight in-process shared memory threads."})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsxs("h2",{className:"text-2xl font-bold text-emerald-400 flex items-center gap-2",children:[e.jsx("span",{children:"💻"})," Hands-On Java Demo Code"]}),e.jsx(s,{fileModule:a,title:"ProcessVsThreadComparisonDemo.java",highlightLines:[7,10,13,14,15,19,20,21,22,23,24]})]}),e.jsx("section",{className:"space-y-4",children:e.jsx(t,{title:"Process vs Thread FAQs",questions:i})}),e.jsx("section",{className:"space-y-4",children:e.jsx(r,{content:o,title:"Module 008_001 Topic 1: Process vs Thread",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Printable Note",downloadFileName:"008_001_topic1_process_vs_thread_note.txt"})}),e.jsx(n,{note:"Think of an OS Process like an entire house with its own private address and fence. Inside the house, the family members are Threads—they share the kitchen (Heap memory) and living room, but each person has their own private notebook (Call Stack)! — Sukanta Hui"})]})}export{y as default};
