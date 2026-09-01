import{j as e}from"./vendor-react-core-Doz9nIC6.js";import{J as a}from"./JavaFileLoader-BfBG3xz_.js";import{F as t}from"./FAQTemplate-BHhlgA96.js";import{P as o}from"./PlainTextPrint-C08xhKA4.js";import{T as n}from"./TeacherSukantaHui-BaJcBHAy.js";import"./JavaCodeBlock-BwsLxS3r.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-8ao-0upJ.js";const r=`/**\r
 * Java Core Tutorial - Module 008_009: Virtual Threads (Java 21+ Project Loom)\r
 * Topic 13: Scoped Values (JEP 446 / Java 21+): Immutable, Lightweight Context Sharing\r
 * Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
 */\r
\r
package com.coderaccotax.javatutorial.virtualthreads;\r
\r
public class ScopedValuesContextSharingDemo {\r
\r
    // 1. SCOPED VALUE DECLARATION (Immutable & Lightweight context token):\r
    // In Java 21+ Preview (java.lang.ScopedValue):\r
    // public static final ScopedValue<String> CURRENT_USER = ScopedValue.newInstance();\r
\r
    public static void main(String[] args) {\r
        System.out.println("==========================================================================");\r
        System.out.println(" TOPIC 13: Scoped Values (JEP 446) vs ThreadLocal - BARRACKPORE");\r
        System.out.println("==========================================================================\\n");\r
\r
        System.out.println(">>> WHY ThreadLocal FAILS WITH MILLIONS OF VIRTUAL THREADS:");\r
        System.out.println("  1. Memory Bloat          : Every thread allocates an internal ThreadLocalMap; 1,000,000 threads with ThreadLocals = Gigabytes of memory!");\r
        System.out.println("  2. Mutable State Hazard  : Any method in the call stack can overwrite 'threadLocal.set(val)', creating hard-to-trace bugs.");\r
        System.out.println("  3. Memory Leaks          : Forgetting to call 'threadLocal.remove()' causes permanent memory leaks in long-lived thread pools.");\r
        System.out.println();\r
        System.out.println(">>> THE SCOPED VALUES SOLUTION (JEP 446 / Java 21+):");\r
        System.out.println("  - Immutable Context Token : Set ONCE in a bounded execution block; cannot be modified by downstream methods.");\r
        System.out.println("  - Bounded Scope Lifecycle : Context exists ONLY for the duration of 'ScopedValue.where(KEY, val).run(task)'.");\r
        System.out.println("  - Zero Memory Leaks       : As soon as the bounded lambda finishes, all context is instantly discarded with zero manual cleanup!");\r
\r
        System.out.println("\\n==========================================================================");\r
    }\r
}`,l=`================================================================================\r
JAVA CORE TUTORIAL - QUICK REVISION GUIDE\r
Module 008_009: Virtual Threads (Java 21+)\r
Topic 13: Scoped Values (JEP 446)\r
Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
================================================================================\r
\r
1. SCOPED VALUES:\r
   - Replaces heavy, mutable 'ThreadLocal'.\r
   - Immutable: Values cannot be modified downstream.\r
   - Bounded Lifetime: Automatically cleared when scope exits.\r
   - Zero memory leaks (No manual 'remove()' required).\r
   - Designed specifically to scale across millions of Virtual Threads.\r
\r
================================================================================\r
Classroom Practice: Barrackpore Academy | Mentor: Sukanta Hui\r
================================================================================`,s=[{question:"What are 'Scoped Values' (JEP 446) in modern Java and why are they superior to 'ThreadLocal' when working with millions of Virtual Threads?",shortAnswer:"1. 'Unbounded Memory Overhead in ThreadLocal': When spawning millions of virtual threads, each thread duplicating a mutable 'ThreadLocalMap' consumes massive heap memory. 2. 'Immutability': 'ScopedValue<T>' is strictly immutable; child methods cannot overwrite the context value. 3. 'Bounded Scoping & No Leaks': Scoped Values are bound to a specific lexical scope ('ScopedValue.where(KEY, value).run(...)'). When the scope completes, the context is automatically unlinked and cleaned up, completely eliminating 'ThreadLocal.remove()' memory leak vulnerabilities.",explanation:"Modern context propagation architecture in Java 21+ (JEP 446).",hint:"Immutable context bound to a single execution scope; automatically cleaned up with zero ThreadLocal memory leaks.",level:"Advanced",codeExample:'ScopedValue.where(USER, "Swadeep").run(() → handleRequest());'}];function S(){return e.jsxs("div",{className:"space-y-12 px-4 md:px-8 py-8 text-slate-200 bg-slate-900 min-h-screen",children:[e.jsxs("header",{className:"space-y-4 border-b border-slate-800 pb-6",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"px-3 py-1 bg-sky-500/10 text-sky-400 border border-sky-500/20 text-xs font-semibold rounded-full uppercase tracking-wider",children:"Module 008_009 · Topic 13"}),e.jsx("span",{className:"px-3 py-1 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-xs font-semibold rounded-full",children:"Scoped Values"})]}),e.jsxs("h1",{className:"text-xl sm:text-2xl md:text-3xl font-bold text-white tracking-tight",children:[e.jsx("code",{className:"text-emerald-400 font-mono",children:"Scoped Values"})," (JEP 446): Lightweight Immutable Context Sharing"]}),e.jsxs("p",{className:"text-base md:text-lg text-slate-400 leading-relaxed max-w-4xl",children:["Evolve beyond mutable thread locals: implementing immutable, leak-free ",e.jsx("code",{className:"text-emerald-300 font-mono",children:"ScopedValue"})," context propagation across millions of concurrent virtual threads."]})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsxs("h2",{className:"text-2xl font-bold text-emerald-400 flex items-center gap-2",children:[e.jsx("span",{children:"💻"})," Hands-On Java Demo Code"]}),e.jsx(a,{fileModule:r,title:"ScopedValuesContextSharingDemo.java",highlightLines:[7,10,14,15,19,20,21,22]})]}),e.jsx("section",{className:"space-y-4",children:e.jsx(t,{title:"Scoped Values FAQs",questions:s})}),e.jsx("section",{className:"space-y-4",children:e.jsx(o,{content:l,title:"Module 008_009 Topic 13: Scoped Values",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Printable Note",downloadFileName:"008_009_topic13_scoped_values_note.txt"})}),e.jsx(n,{note:"ThreadLocal was dangerous because developers would forget to call remove(), causing memory leaks. Scoped Values fix this forever: you declare a value for a specific code block, and the moment the block ends, the memory is cleaned up automatically! — Sukanta Hui"})]})}export{S as default};
