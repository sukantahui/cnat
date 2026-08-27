import{j as e}from"./vendor-react-core-Doz9nIC6.js";import{J as a}from"./JavaFileLoader-BfBG3xz_.js";import{F as r}from"./FAQTemplate-CkSqDH4B.js";import{P as t}from"./PlainTextPrint-C08xhKA4.js";import{T as n}from"./TeacherSukantaHui-CyIG3xbg.js";import"./JavaCodeBlock-BwsLxS3r.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-CIaKtAt4.js";const s=`/**\r
 * Java Core Tutorial - Module 008_009: Virtual Threads (Java 21+ Project Loom)\r
 * Topic 3: What are Virtual Threads? JVM-Managed M:N User-Mode Fibers & Tiny Dynamic Stacks\r
 * Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
 */\r
\r
package com.coderaccotax.javatutorial.virtualthreads;\r
\r
public class WhatAreVirtualThreadsDeepDiveDemo {\r
\r
    public static void main(String[] args) throws InterruptedException {\r
        System.out.println("==========================================================================");\r
        System.out.println(" TOPIC 3: WHAT ARE VIRTUAL THREADS (JAVA 21+ LTS) - BARRACKPORE");\r
        System.out.println("==========================================================================\\n");\r
\r
        // 1. Spawning a lightweight Virtual Thread (Java 21+ syntax):\r
        Thread vThread = Thread.ofVirtual().name("Barrackpore-Virtual-Worker").start(() -> {\r
            System.out.printf("  [Virtual Thread] Running on thread: %s | Is Virtual? %b%n",\r
                    Thread.currentThread().getName(), Thread.currentThread().isVirtual());\r
        });\r
\r
        vThread.join();\r
\r
        System.out.println("\\n>>> THE 4 PILLARS OF VIRTUAL THREADS IN JAVA 21:");\r
        System.out.println("  1. Managed by the JVM (User-Mode) : NOT 1:1 bound to OS kernel threads; scheduled entirely by the JVM in user space.");\r
        System.out.println("  2. M:N Scheduling Architecture    : Millions of Virtual Threads (M) are multiplexed onto a few OS Carrier Threads (N = CPU cores).");\r
        System.out.println("  3. Tiny Dynamic Heap Stacks       : Stacks start at just a few hundred bytes on the Java Heap and grow/shrink dynamically (vs static 1 MB).");\r
        System.out.println("  4. Near-Zero Creation Cost        : Creating a Virtual Thread is as cheap as allocating a plain Java object (new Object())!");\r
\r
        System.out.println("\\n==========================================================================");\r
    }\r
}`,i=`================================================================================\r
JAVA CORE TUTORIAL - QUICK REVISION GUIDE\r
Module 008_009: Virtual Threads (Java 21+)\r
Topic 3: What are Virtual Threads\r
Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
================================================================================\r
\r
1. VIRTUAL THREADS (JAVA 21 LTS):\r
   - Managed entirely by the JVM in user space.\r
   - M:N multiplexing onto OS carrier threads.\r
   - Tiny dynamic stacks (~few hundred bytes on JVM heap).\r
   - Creation cost is nearly zero (as cheap as creating a standard object).\r
   - Check with: 'Thread.currentThread().isVirtual()'.\r
\r
================================================================================\r
Classroom Practice: Barrackpore Academy | Mentor: Sukanta Hui\r
================================================================================`,o=[{question:"What are Virtual Threads in Java 21+ (Project Loom) and how do their stack allocations differ from Platform Threads?",shortAnswer:"Virtual Threads (JEP 444, Java 21 LTS) are lightweight, user-mode threads managed entirely by the JVM rather than the OS kernel. While Platform Threads require a static ~1 MB native memory call stack allocated outside the heap, Virtual Threads store their call frames in standard Java heap objects (Continuation objects). Their stack starts at only a few hundred bytes and dynamically resizes as needed. Millions of Virtual Threads (M) are multiplexed onto a small pool of OS Carrier Threads (N), allowing near-infinite concurrency.",explanation:"Core architecture of Java 21 Project Loom.",hint:"JVM-managed user-mode threads with tiny dynamic heap stacks (~few hundred bytes) multiplexed M:N onto OS carrier threads.",level:"Intermediate",codeExample:"Thread vThread = Thread.ofVirtual().start(() -> doWork());"}];function x(){return e.jsxs("div",{className:"space-y-12 px-4 md:px-8 py-8 text-slate-200 bg-slate-900 min-h-screen",children:[e.jsxs("header",{className:"space-y-4 border-b border-slate-800 pb-6",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"px-3 py-1 bg-sky-500/10 text-sky-400 border border-sky-500/20 text-xs font-semibold rounded-full uppercase tracking-wider",children:"Module 008_009 · Topic 3"}),e.jsx("span",{className:"px-3 py-1 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-xs font-semibold rounded-full",children:"Virtual Threads (Java 21)"})]}),e.jsxs("h1",{className:"text-3xl md:text-4xl font-extrabold text-white tracking-tight",children:["What are ",e.jsx("code",{className:"text-emerald-400 font-mono",children:"Virtual Threads"}),"? JVM-Managed M:N User-Mode Fibers"]}),e.jsxs("p",{className:"text-base md:text-lg text-slate-400 leading-relaxed max-w-4xl",children:["Enter the modern concurrency era: exploring Project Loom, user-mode JVM scheduling, dynamic heap-allocated call frames, and ",e.jsx("code",{className:"text-emerald-300 font-mono",children:"Thread.isVirtual()"})," inspection."]})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsxs("h2",{className:"text-2xl font-bold text-emerald-400 flex items-center gap-2",children:[e.jsx("span",{children:"💻"})," Hands-On Java Demo Code"]}),e.jsx(a,{fileModule:s,title:"WhatAreVirtualThreadsDeepDiveDemo.java",highlightLines:[7,10,14,15,16,21,22,23,24]})]}),e.jsx("section",{className:"space-y-4",children:e.jsx(r,{title:"Virtual Threads FAQs",questions:o})}),e.jsx("section",{className:"space-y-4",children:e.jsx(t,{content:i,title:"Module 008_009 Topic 3: What are Virtual Threads",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Printable Note",downloadFileName:"008_009_topic3_what_are_virtual_threads_note.txt"})}),e.jsx(n,{note:"Virtual Threads are Java's superpower! Instead of asking Windows or Linux to create a heavy 1MB thread for you, the JVM creates its own lightweight thread right on the heap for only a few hundred bytes! You can create millions of them without breaking a sweat! — Sukanta Hui"})]})}export{x as default};
