import{j as e}from"./vendor-react-core-Doz9nIC6.js";import{J as t}from"./JavaFileLoader-BfBG3xz_.js";import{F as r}from"./FAQTemplate-CkSqDH4B.js";import{P as a}from"./PlainTextPrint-C08xhKA4.js";import{T as o}from"./TeacherSukantaHui-CC0AKmkm.js";import"./JavaCodeBlock-BwsLxS3r.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-BtJHuk7w.js";const n=`/**\r
 * Java Core Tutorial - Module 008_009: Virtual Threads (Java 21+ Project Loom)\r
 * Topic 11: The Golden Rule of Project Loom: NEVER POOL VIRTUAL THREADS!\r
 * Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
 */\r
\r
package com.coderaccotax.javatutorial.virtualthreads;\r
\r
public class NeverPoolVirtualThreadsGoldenRuleDemo {\r
\r
    public static void main(String[] args) {\r
        System.out.println("==========================================================================");\r
        System.out.println(" TOPIC 11: THE GOLDEN RULE: NEVER POOL VIRTUAL THREADS - BARRACKPORE");\r
        System.out.println("==========================================================================\\n");\r
\r
        System.out.println(">>> WHY WE USED TO POOL THREADS IN JAVA 1.0 - 20:");\r
        System.out.println("  - We pooled Platform Threads because they are HEAVYWEIGHT, EXPENSIVE (~1 MB RAM), and slow to create.");\r
        System.out.println("  - Thread Pools acted as a caching mechanism to avoid destroying precious OS threads.");\r
        System.out.println();\r
        System.out.println(">>> THE GOLDEN RULE OF VIRTUAL THREADS (Ron Pressler):");\r
        System.out.println("  🚨 'NEVER POOL VIRTUAL THREADS! Virtual Threads are EPHEMERAL and meant to be CREATED ON DEMAND and DISCARDED.'");\r
        System.out.println();\r
        System.out.println(">>> WHY POOLING VIRTUAL THREADS IS AN ANTI-PATTERN:");\r
        System.out.println("  1. Defeats Their Purpose : Virtual threads are designed to represent individual tasks, not reusable workers.");\r
        System.out.println("  2. Pooling Overheads     : Adding queue contention and lock synchronizers around virtual threads SLOWS THEM DOWN.");\r
        System.out.println("  3. Throttling Resources  : If you need to limit concurrent calls (e.g. max 10 DB connections), USE A SEMAPHORE ('new Semaphore(10)'), NOT A THREAD POOL!");\r
\r
        System.out.println("\\n==========================================================================");\r
    }\r
}`,s=`================================================================================\r
JAVA CORE TUTORIAL - QUICK REVISION GUIDE\r
Module 008_009: Virtual Threads (Java 21+)\r
Topic 11: Never Pool Virtual Threads\r
Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
================================================================================\r
\r
1. NEVER POOL VIRTUAL THREADS:\r
   - Platform threads were pooled because they cost 1 MB RAM.\r
   - Virtual threads are ephemeral (~few hundred bytes).\r
   - Create a new virtual thread per task & let it die upon completion.\r
   - Need to limit database/API access? Use 'Semaphore', NOT thread pools!\r
\r
================================================================================\r
Classroom Practice: Barrackpore Academy | Mentor: Sukanta Hui\r
================================================================================`,i=[{question:"Why is pooling Virtual Threads (e.g. placing them in a fixed-size thread pool) considered a major anti-pattern in Java 21?",shortAnswer:"Platform threads were pooled because creating OS threads was expensive. Virtual Threads, however, are lightweight ephemeral objects (~few hundred bytes) designed to have a 1:1 lifetime with a single task (create, execute, die). Pooling virtual threads introduces unnecessary synchronization lock overhead and limits concurrency. If an application needs to throttle access to a limited downstream resource (like a database with only 20 connections), developers should throttle using a 'Semaphore', NOT by restricting virtual thread creation.",explanation:"Core design philosophy and best practices of Project Loom.",hint:"Virtual threads are ephemeral and cheap; never pool them. Use Semaphores to throttle downstream resources instead.",level:"Intermediate",codeExample:"// Anti-Pattern: new FixedThreadPool(20, virtualThreadFactory); // DO NOT POOL! Use Semaphore for throttling."}];function T(){return e.jsxs("div",{className:"space-y-12 px-4 md:px-8 py-8 text-slate-200 bg-slate-900 min-h-screen",children:[e.jsxs("header",{className:"space-y-4 border-b border-slate-800 pb-6",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"px-3 py-1 bg-sky-500/10 text-sky-400 border border-sky-500/20 text-xs font-semibold rounded-full uppercase tracking-wider",children:"Module 008_009 · Topic 11"}),e.jsx("span",{className:"px-3 py-1 bg-amber-500/10 text-amber-400 border border-amber-500/20 text-xs font-semibold rounded-full",children:"Golden Rule: Never Pool"})]}),e.jsxs("h1",{className:"text-3xl md:text-4xl font-extrabold text-white tracking-tight",children:["The Golden Rule of Project Loom: ",e.jsx("code",{className:"text-amber-400 font-mono",children:"NEVER POOL"})," Virtual Threads"]}),e.jsxs("p",{className:"text-base md:text-lg text-slate-400 leading-relaxed max-w-4xl",children:["Unlearn legacy pooling habits: discovering why virtual threads are designed as ephemeral single-task objects and learning to throttle downstream resources via ",e.jsx("code",{className:"text-emerald-300 font-mono",children:"Semaphore"})," primitives."]})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsxs("h2",{className:"text-2xl font-bold text-emerald-400 flex items-center gap-2",children:[e.jsx("span",{children:"💻"})," Hands-On Java Demo Code"]}),e.jsx(t,{fileModule:n,title:"NeverPoolVirtualThreadsGoldenRuleDemo.java",highlightLines:[7,10,13,14,18,19,23,24,25]})]}),e.jsx("section",{className:"space-y-4",children:e.jsx(r,{title:"Never Pool Virtual Threads FAQs",questions:i})}),e.jsx("section",{className:"space-y-4",children:e.jsx(a,{content:s,title:"Module 008_009 Topic 11: Never Pool Virtual Threads",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Printable Note",downloadFileName:"008_009_topic11_never_pool_virtual_threads_note.txt"})}),e.jsx(o,{note:"Old habits die hard! Developers often try to create a 'FixedThreadPool(50)' of Virtual Threads. Don't do it! Virtual Threads are like disposable paper cups: use one for a task and throw it away! If you need to limit database connections, use a Semaphore! — Sukanta Hui"})]})}export{T as default};
