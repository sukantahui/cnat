import{j as e}from"./vendor-react-core-Doz9nIC6.js";import{J as n}from"./JavaFileLoader-BfBG3xz_.js";import{F as o}from"./FAQTemplate-CkSqDH4B.js";import{P as t}from"./PlainTextPrint-C08xhKA4.js";import{T as r}from"./TeacherSukantaHui-CC0AKmkm.js";import"./JavaCodeBlock-BwsLxS3r.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-BtJHuk7w.js";const i=`/**\r
 * Java Core Tutorial - Module 010_007: JIT Compiler, HotSpot Optimizations & GraalVM\r
 * Topic 8: Lock Elision & Lock Coarsening - JIT Concurrency Optimizations\r
 * Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
 */\r
\r
package com.coderaccotax.javatutorial.jit;\r
\r
public class LockElisionCoarseningDemo {\r
\r
    public static void main(String[] args) {\r
        System.out.println("==========================================================================");\r
        System.out.println(" TOPIC 8: LOCK ELISION & LOCK COARSENING - BARRACKPORE ACADEMY");\r
        System.out.println("==========================================================================\\n");\r
\r
        System.out.println(">>> 1. LOCK ELISION (Removing Redundant Synchronization):");\r
        System.out.println("  - Example: Calling 'StringBuffer.append()' inside a local method.");\r
        System.out.println("  - In Java source : 'public synchronized StringBuffer append(String s) { ... }'");\r
        System.out.println("  - Escape Analysis: Proves the StringBuffer NEVER escapes the method.");\r
        System.out.println("  - JIT Compilation: JIT completely REMOVES the lock in native assembly! Zero locking overhead!\\n");\r
\r
        System.out.println(">>> 2. LOCK COARSENING (Merging Consecutive Locks):");\r
        System.out.println("  - Code written by developer:");\r
        System.out.println("    synchronized(lock) { doTask1(); }");\r
        System.out.println("    synchronized(lock) { doTask2(); }");\r
        System.out.println("    synchronized(lock) { doTask3(); }\\n");\r
        System.out.println("  - JIT Native Code: Merges all 3 into ONE single synchronized block around all three calls!");\r
        System.out.println("  - Eliminates 2 redundant lock acquire and release cycles!");\r
\r
        System.out.println("\\n==========================================================================");\r
    }\r
}\r
`,s=`================================================================================\r
JAVA CORE TUTORIAL - QUICK REVISION GUIDE\r
Module 010_007: JIT Compiler, HotSpot Optimizations & GraalVM\r
Topic 8: Lock Elision & Lock Coarsening\r
Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
================================================================================\r
\r
1. LOCK ELISION:\r
   - If an object on which synchronization is performed is determined to be 'NoEscape',\r
     the JIT compiler omits all monitor enter/exit instructions in the generated native machine code.\r
\r
2. LOCK COARSENING:\r
   - When a sequence of adjacent operations repeatedly acquires and releases the same lock\r
     (e.g. inside a loop), JIT expands the lock boundary to encompass the entire sequence.\r
\r
================================================================================\r
Classroom Practice: Barrackpore Academy | Mentor: Sukanta Hui\r
================================================================================\r
`,a=[{question:"How does Lock Elision improve the performance of synchronized classes like StringBuffer or Vector?",shortAnswer:"When Escape Analysis proves that a StringBuffer or Vector instance is confined to a local method and not shared between threads, the JIT compiler eliminates all internal monitor acquisition and release instructions in the native assembly.",explanation:"Allows legacy synchronized code to run at full unsynchronized speed.",hint:"Erases synchronization locks when objects are proven thread-confined.",level:"Intermediate",codeExample:"Local StringBuffer sb = new StringBuffer(); // Locks are elided by JIT"},{question:"What is Lock Coarsening?",shortAnswer:"An optimization where the JIT compiler merges multiple consecutive lock acquisitions on the same monitor into a single larger synchronized block, reducing lock acquire and release CPU cycles.",explanation:"Prevents lock ping-pong within tight loops.",hint:"Merges adjacent synchronization blocks on the same monitor.",level:"Intermediate",codeExample:"3 separate locks -> Merged into 1 coarsened lock block."}];function y(){return e.jsxs("div",{className:"space-y-12 px-4 md:px-8 py-8 text-slate-200 bg-slate-900 min-h-screen",children:[e.jsxs("header",{className:"space-y-4 border-b border-slate-800 pb-6",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"px-3 py-1 bg-sky-500/10 text-sky-400 border border-sky-500/20 text-xs font-semibold rounded-full uppercase tracking-wider",children:"Module 010_007 · Topic 8"}),e.jsx("span",{className:"px-3 py-1 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-xs font-semibold rounded-full",children:"JIT Compiler & GraalVM"})]}),e.jsxs("h1",{className:"text-3xl md:text-4xl font-extrabold text-white tracking-tight",children:["Lock Elision & Lock Coarsening: ",e.jsx("code",{className:"text-emerald-400 font-mono",children:"JIT Concurrency Optimizations"})]}),e.jsx("p",{className:"text-base md:text-lg text-slate-400 leading-relaxed max-w-4xl",children:"Removing synchronization bottlenecks: how the JIT eliminates redundant locks on non-escaping objects and merges consecutive locks."})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsxs("h2",{className:"text-2xl font-bold text-emerald-400 flex items-center gap-2",children:[e.jsx("span",{children:"💻"})," Hands-On Java Demo Code"]}),e.jsx(n,{fileModule:i,title:"LockElisionCoarseningDemo.java",highlightLines:[18,25,34,43]})]}),e.jsx("section",{className:"space-y-4",children:e.jsx(o,{title:"JIT Compiler & GraalVM FAQs",questions:a})}),e.jsx("section",{className:"space-y-4",children:e.jsx(t,{content:s,title:"Module 010_007 Topic 8: Lock Elision & Coarsening",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Printable Note",downloadFileName:"010_007_topic8_lock_elision_coarsening_note.txt"})}),e.jsx(r,{note:"If you use StringBuffer inside a method, its append() method is synchronized! But since the StringBuffer cannot escape the method, JIT uses Lock Elision to ERASE the synchronization lock completely! — Sukanta Hui"})]})}export{y as default};
