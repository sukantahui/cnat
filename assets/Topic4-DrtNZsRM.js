import{j as e}from"./vendor-react-core-Doz9nIC6.js";import{J as t}from"./JavaFileLoader-BfBG3xz_.js";import{F as r}from"./FAQTemplate-BHhlgA96.js";import{P as n}from"./PlainTextPrint-C08xhKA4.js";import{T as o}from"./TeacherSukantaHui-DDN87fI5.js";import"./JavaCodeBlock-BwsLxS3r.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-DEsnU7fn.js";const a=`/**\r
 * Java Core Tutorial - Module 010_004: JVM Memory Model: Heap, Stack, Metaspace & Runtime Areas\r
 * Topic 4: Program Counter (PC) Register - Bytecode Instruction Pointer\r
 * Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
 */\r
\r
package com.coderaccotax.javatutorial.memory;\r
\r
public class ProgramCounterPcRegisterDemo {\r
\r
    public static void main(String[] args) {\r
        System.out.println("==========================================================================");\r
        System.out.println(" TOPIC 4: PROGRAM COUNTER (PC) REGISTER - BARRACKPORE ACADEMY");\r
        System.out.println("==========================================================================\\n");\r
\r
        System.out.println(">>> WHAT IS THE PROGRAM COUNTER (PC) REGISTER:");\r
        System.out.println("  1. Each Java thread has its own private PC Register created when the thread starts.");\r
        System.out.println("  2. If the thread is executing a Java method, PC holds the offset/address of the current bytecode instruction.");\r
        System.out.println("  3. If executing a Native (C/C++) method, the PC Register value is 'undefined'.\\n");\r
\r
        System.out.println(">>> ROLE DURING THREAD CONTEXT SWITCHING:");\r
        System.out.println("  - When CPU switches from Thread 1 to Thread 2, Thread 1's PC is saved.");\r
        System.out.println("  - When Thread 1 resumes, the CPU reads its PC Register to continue execution at the exact instruction!\\n");\r
\r
        System.out.println(">>> UNIQUE JVM PROPERTY:");\r
        System.out.println("  - The PC Register is the ONLY memory area in the JVM specification that NEVER throws OutOfMemoryError!");\r
        System.out.println("==========================================================================");\r
    }\r
}\r
`,s=`================================================================================\r
JAVA CORE TUTORIAL - QUICK REVISION GUIDE\r
Module 010_004: JVM Memory Model: Heap, Stack, Metaspace & Runtime Areas\r
Topic 4: Program Counter (PC) Register\r
Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
================================================================================\r
\r
1. WHAT THE PC REGISTER DOES:\r
   - Stores the memory address / bytecode offset of the JVM instruction currently being executed\r
     by the thread.\r
   - Essential for context switching and CPU scheduling across multi-core architectures.\r
\r
2. KEY RULES:\r
   - One PC Register per Thread (Thread-Private).\r
   - Java Method: Contains address of current bytecode opcode.\r
   - Native Method: Contains 'Undefined'.\r
   - NEVER throws 'OutOfMemoryError'.\r
\r
================================================================================\r
Classroom Practice: Barrackpore Academy | Mentor: Sukanta Hui\r
================================================================================\r
`,i=[{question:"What is stored in a thread's PC Register when it is executing a native C/C++ method via JNI?",shortAnswer:"The value of the PC Register is 'Undefined' because native C/C++ instructions execute directly on the physical host CPU and are not managed by JVM bytecode offsets.",explanation:"Defined explicitly in the JVM Specification Section 2.5.1.",hint:"Undefined",level:"Intermediate",codeExample:"Executing Native C → PC Register is Undefined"},{question:"Which JVM memory area is the only one guaranteed by the specification never to throw an OutOfMemoryError?",shortAnswer:"The Program Counter (PC) Register. It has a fixed, minute size (just enough to hold an instruction pointer) and requires no dynamic heap/stack memory allocation.",explanation:"All other four areas can throw OutOfMemoryError or StackOverflowError.",hint:"The Program Counter (PC) Register.",level:"Beginner",codeExample:"PC Register never throws OutOfMemoryError."}];function g(){return e.jsxs("div",{className:"space-y-12 px-4 md:px-8 py-8 text-slate-200 bg-slate-900 min-h-screen",children:[e.jsxs("header",{className:"space-y-4 border-b border-slate-800 pb-6",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"px-3 py-1 bg-sky-500/10 text-sky-400 border border-sky-500/20 text-xs font-semibold rounded-full uppercase tracking-wider",children:"Module 010_004 · Topic 4"}),e.jsx("span",{className:"px-3 py-1 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-xs font-semibold rounded-full",children:"JVM Memory Model"})]}),e.jsxs("h1",{className:"text-xl sm:text-2xl md:text-3xl font-bold text-white tracking-tight",children:["Program Counter (PC) Register: ",e.jsx("code",{className:"text-emerald-400 font-mono",children:"Tracking Bytecode Instructions"})]}),e.jsx("p",{className:"text-base md:text-lg text-slate-400 leading-relaxed max-w-4xl",children:"The thread conductor: how the hardware-like PC register points to the current bytecode offset and coordinates thread context switching."})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsxs("h2",{className:"text-2xl font-bold text-emerald-400 flex items-center gap-2",children:[e.jsx("span",{children:"💻"})," Hands-On Java Demo Code"]}),e.jsx(t,{fileModule:a,title:"ProgramCounterPcRegisterDemo.java",highlightLines:[18,25,34,43]})]}),e.jsx("section",{className:"space-y-4",children:e.jsx(r,{title:"JVM Memory Areas FAQs",questions:i})}),e.jsx("section",{className:"space-y-4",children:e.jsx(n,{content:s,title:"Module 010_004 Topic 4: Program Counter (PC) Register",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Printable Note",downloadFileName:"010_004_topic4_program_counter_pc_register_note.txt"})}),e.jsx(o,{note:"The PC Register is the smallest memory area in the JVM! Each thread has its own PC Register holding the address of the currently executing bytecode instruction! It never throws an OutOfMemoryError! — Sukanta Hui"})]})}export{g as default};
