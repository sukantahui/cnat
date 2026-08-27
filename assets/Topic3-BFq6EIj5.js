import{j as e}from"./vendor-react-core-Doz9nIC6.js";import{J as a}from"./JavaFileLoader-BfBG3xz_.js";import{F as t}from"./FAQTemplate-CkSqDH4B.js";import{P as r}from"./PlainTextPrint-C08xhKA4.js";import{T as n}from"./TeacherSukantaHui-CC0AKmkm.js";import"./JavaCodeBlock-BwsLxS3r.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-BtJHuk7w.js";const s=`/**\r
 * Java Core Tutorial - Module 010_004: JVM Memory Model: Heap, Stack, Metaspace & Runtime Areas\r
 * Topic 3: Java Thread Stack - Private Method Execution Frames\r
 * Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
 */\r
\r
package com.coderaccotax.javatutorial.memory;\r
\r
public class JavaThreadStackDemo {\r
\r
    public static void main(String[] args) {\r
        System.out.println("==========================================================================");\r
        System.out.println(" TOPIC 3: JAVA THREAD STACK - BARRACKPORE ACADEMY");\r
        System.out.println("==========================================================================\\n");\r
\r
        System.out.println(">>> 1. INITIATING METHOD CALL CHAIN (Pushing Stack Frames):");\r
        methodA("Swadeep Paul", 101);\r
\r
        System.out.println("\\n>>> STACK MEMORY PROPERTIES:");\r
        System.out.println("  1. Thread Isolation: Thread A cannot access Thread B's stack frame.");\r
        System.out.println("  2. Zero GC Cost    : Memory is automatically freed when the frame pops on method return.");\r
        System.out.println("  3. Size Tuning     : '-Xss' controls stack size per thread (default ~1MB).");\r
        System.out.println("==========================================================================");\r
    }\r
\r
    static void methodA(String studentName, int id) {\r
        System.out.println("   --> Entering methodA() [Stack Frame 1 Pushed]");\r
        int internalCalculatedScore = 95;\r
        methodB(studentName, internalCalculatedScore);\r
        System.out.println("   <-- Exiting methodA() [Stack Frame 1 Popped]");\r
    }\r
\r
    static void methodB(String studentName, int score) {\r
        System.out.println("      --> Entering methodB() [Stack Frame 2 Pushed]");\r
        System.out.println("      --> Student: " + studentName + " | Score: " + score + "%");\r
        System.out.println("      <-- Exiting methodB() [Stack Frame 2 Popped]");\r
    }\r
}\r
`,o=`================================================================================\r
JAVA CORE TUTORIAL - QUICK REVISION GUIDE\r
Module 010_004: JVM Memory Model: Heap, Stack, Metaspace & Runtime Areas\r
Topic 3: Java Thread Stack\r
Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
================================================================================\r
\r
1. CHARACTERISTICS OF THE JVM THREAD STACK:\r
   - Created simultaneously when a Java Thread is created.\r
   - Holds Stack Frames. A frame is pushed when a method is called and popped when it returns.\r
   - Stores primitive local variables and object references.\r
\r
2. STACK CONFIGURATION:\r
   - '-Xss<size>' : Sets thread stack size (e.g. '-Xss512k' or '-Xss1m').\r
   - Deep recursive calls without base cases exhaust stack memory, triggering 'StackOverflowError'.\r
\r
================================================================================\r
Classroom Practice: Barrackpore Academy | Mentor: Sukanta Hui\r
================================================================================\r
`,i=[{question:"Can two threads share local variables located in their respective stack frames?",shortAnswer:"No! JVM Thread Stacks are strictly thread-private. A thread can never access or modify the stack frame or local variables of another thread, ensuring thread safety for local variables.",explanation:"Only Heap and Metaspace objects can be shared between threads.",hint:"No, stack frames are completely private to each individual thread.",level:"Beginner",codeExample:"Local variables are intrinsically thread-safe."},{question:"What error is thrown when a thread's method invocation depth exceeds the allocated stack size?",shortAnswer:"java.lang.StackOverflowError, a subclass of VirtualMachineError caused by infinite recursion or excessively deep method call chains.",explanation:"Tuned via the -Xss JVM flag.",hint:"StackOverflowError",level:"Beginner",codeExample:"void loop() { loop(); } // Throws StackOverflowError"}];function S(){return e.jsxs("div",{className:"space-y-12 px-4 md:px-8 py-8 text-slate-200 bg-slate-900 min-h-screen",children:[e.jsxs("header",{className:"space-y-4 border-b border-slate-800 pb-6",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"px-3 py-1 bg-sky-500/10 text-sky-400 border border-sky-500/20 text-xs font-semibold rounded-full uppercase tracking-wider",children:"Module 010_004 · Topic 3"}),e.jsx("span",{className:"px-3 py-1 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-xs font-semibold rounded-full",children:"JVM Memory Model"})]}),e.jsxs("h1",{className:"text-3xl md:text-4xl font-extrabold text-white tracking-tight",children:["Java Thread Stack: ",e.jsx("code",{className:"text-emerald-400 font-mono",children:"Private Method Frames & Call Sequences"})]}),e.jsx("p",{className:"text-base md:text-lg text-slate-400 leading-relaxed max-w-4xl",children:"The execution stack: how each thread receives its own private call stack, pushing stack frames on invocation and popping on return."})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsxs("h2",{className:"text-2xl font-bold text-emerald-400 flex items-center gap-2",children:[e.jsx("span",{children:"💻"})," Hands-On Java Demo Code"]}),e.jsx(a,{fileModule:s,title:"JavaThreadStackDemo.java",highlightLines:[18,25,34,43]})]}),e.jsx("section",{className:"space-y-4",children:e.jsx(t,{title:"JVM Memory Areas FAQs",questions:i})}),e.jsx("section",{className:"space-y-4",children:e.jsx(r,{content:o,title:"Module 010_004 Topic 3: Java Thread Stack",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Printable Note",downloadFileName:"010_004_topic3_java_thread_stack_note.txt"})}),e.jsx(n,{note:"Every thread has its own private Stack! When methodA() calls methodB(), a new Stack Frame is pushed. When methodB() returns, its frame is popped and destroyed! No GC is involved on the stack! — Sukanta Hui"})]})}export{S as default};
