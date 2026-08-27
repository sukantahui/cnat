import{j as e}from"./vendor-react-core-Doz9nIC6.js";import{J as t}from"./JavaFileLoader-BfBG3xz_.js";import{F as n}from"./FAQTemplate-CkSqDH4B.js";import{P as o}from"./PlainTextPrint-C08xhKA4.js";import{T as r}from"./TeacherSukantaHui-CC0AKmkm.js";import"./JavaCodeBlock-BwsLxS3r.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-BtJHuk7w.js";const i=`/**\r
 * Java Core Tutorial - Module 008_003: Thread Synchronization & Locks\r
 * Topic 3: Java's Intrinsic Lock (Monitor Lock) & Object Header Mark Word\r
 * Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
 */\r
\r
package com.coderaccotax.javatutorial.multithreading;\r
\r
public class IntrinsicMonitorLockArchitectureDemo {\r
\r
    public static void main(String[] args) {\r
        System.out.println("==========================================================================");\r
        System.out.println(" TOPIC 3: INTRINSIC MONITOR LOCK ARCHITECTURE - BARRACKPORE");\r
        System.out.println("==========================================================================\\n");\r
\r
        Object anyJavaObject = new Object();\r
\r
        System.out.println(">>> 1. EVERY JAVA OBJECT HAS AN INTRINSIC MONITOR:");\r
        System.out.println("  - In Java, ANY object (e.g. 'new Object()', 'new Student()', 'new int[10]') possesses an internal Monitor Lock!");\r
        System.out.println("  - Where does the lock live? Inside the 8-byte 'Mark Word' of the Object Header!");\r
        System.out.println();\r
        System.out.println(">>> 2. HOW JVM MARK WORD ENCODES INTRINSIC LOCKS (HotSpot JVM):");\r
        System.out.println("  - Biased Lock   (01): Optimized for single-thread execution with ZERO CAS/locking overhead.");\r
        System.out.println("  - Lightweight   (00): Acquired via fast CPU CAS pointer swap into the thread stack frame.");\r
        System.out.println("  - Heavyweight   (10): Inflated into a full OS Mutex with wait/blocked OS thread queues.");\r
        System.out.println();\r
        System.out.println(">>> 3. SYNCHRONIZATION BYTECODE INSTRUCTION PAIR:");\r
        System.out.println("  - 'monitorenter': Emitted by javac at the beginning of a synchronized block (acquires monitor).");\r
        System.out.println("  - 'monitorexit' : Emitted by javac at every exit path (including exception handlers) to guarantee lock release!");\r
\r
        System.out.println("\\n==========================================================================");\r
    }\r
}`,a=`================================================================================\r
JAVA CORE TUTORIAL - QUICK REVISION GUIDE\r
Module 008_003: Thread Synchronization & Locks\r
Topic 3: Intrinsic Monitor Lock Architecture\r
Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
================================================================================\r
\r
1. INTRINSIC MONITOR LOCKS:\r
   - Attached to EVERY Java object in heap memory.\r
   - Encoded in the Object Header's 8-byte Mark Word.\r
   - Lock inflation: Biased &rarr; Lightweight (CAS) &rarr; Heavyweight (OS Mutex).\r
   - Bytecode instructions: 'monitorenter' and 'monitorexit'.\r
   - Exception safety guaranteed by JVM exception tables.\r
\r
================================================================================\r
Classroom Practice: Barrackpore Academy | Mentor: Sukanta Hui\r
================================================================================`,s=[{question:"Where is an object's intrinsic lock (monitor) stored in the JVM, and what bytecode instructions enforce synchronized blocks?",shortAnswer:"Every Java object contains an intrinsic monitor lock stored within the 'Mark Word' (first 8 bytes) of its Object Header. When compiling a 'synchronized' block, the 'javac' compiler emits two specific bytecode instructions: 'monitorenter' (which increments the monitor's entry count and locks the object) and 'monitorexit' (which decrements the entry count and releases the lock). The JVM automatically wraps the block in an exception table to ensure 'monitorexit' is executed even if an unexpected runtime exception is thrown.",explanation:"Core JVM specification and HotSpot object header internals.",hint:"Stored in Mark Word of Object Header; compiled to monitorenter and monitorexit bytecode instructions.",level:"Advanced",codeExample:"// Bytecode: monitorenter ... monitorexit"}];function y(){return e.jsxs("div",{className:"space-y-12 px-4 md:px-8 py-8 text-slate-200 bg-slate-900 min-h-screen",children:[e.jsxs("header",{className:"space-y-4 border-b border-slate-800 pb-6",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"px-3 py-1 bg-sky-500/10 text-sky-400 border border-sky-500/20 text-xs font-semibold rounded-full uppercase tracking-wider",children:"Module 008_003 · Topic 3"}),e.jsx("span",{className:"px-3 py-1 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-xs font-semibold rounded-full",children:"Intrinsic Monitor Lock"})]}),e.jsxs("h1",{className:"text-3xl md:text-4xl font-extrabold text-white tracking-tight",children:["Java's Intrinsic Lock: ",e.jsx("code",{className:"text-emerald-400 font-mono",children:"Monitor Lock"})," & Object Header Mark Word"]}),e.jsxs("p",{className:"text-base md:text-lg text-slate-400 leading-relaxed max-w-4xl",children:["Dissect low-level JVM synchronization mechanics: analyzing Mark Word lock state encoding, lock inflation tiers, and ",e.jsx("code",{className:"text-emerald-300 font-mono",children:"monitorenter"}),"/",e.jsx("code",{className:"text-sky-300 font-mono",children:"monitorexit"})," bytecode execution."]})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsxs("h2",{className:"text-2xl font-bold text-emerald-400 flex items-center gap-2",children:[e.jsx("span",{children:"💻"})," Hands-On Java Demo Code"]}),e.jsx(t,{fileModule:i,title:"IntrinsicMonitorLockArchitectureDemo.java",highlightLines:[7,10,13,14,18,19,20,24,25]})]}),e.jsx("section",{className:"space-y-4",children:e.jsx(n,{title:"Intrinsic Monitor FAQs",questions:s})}),e.jsx("section",{className:"space-y-4",children:e.jsx(o,{content:a,title:"Module 008_003 Topic 3: Intrinsic Monitor Lock Architecture",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Printable Note",downloadFileName:"008_003_topic3_intrinsic_monitor_lock_note.txt"})}),e.jsx(r,{note:"Every single object in Java has a built-in lock hidden inside its 8-byte Mark Word header! When you use 'synchronized', Java executes 'monitorenter' to lock that object and 'monitorexit' to unlock it when done! — Sukanta Hui"})]})}export{y as default};
