import{j as e}from"./vendor-react-core-Doz9nIC6.js";import{J as t}from"./JavaFileLoader-BfBG3xz_.js";import{F as a}from"./FAQTemplate-BHhlgA96.js";import{P as r}from"./PlainTextPrint-C08xhKA4.js";import{T as n}from"./TeacherSukantaHui-DDN87fI5.js";import"./JavaCodeBlock-BwsLxS3r.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-DEsnU7fn.js";const s=`/**\r
 * Java Core Tutorial - Module 008_001: Thread Fundamentals, Lifecycle & Creation\r
 * Topic 11: Starting a Thread: Why Calling start() is Mandatory (start() vs run())\r
 * Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
 */\r
\r
package com.coderaccotax.javatutorial.multithreading;\r
\r
public class StartVsRunDirectInvocationDemo {\r
\r
    public static void main(String[] args) {\r
        System.out.println("==========================================================================");\r
        System.out.println(" TOPIC 11: thread.start() vs calling thread.run() DIRECTLY - BARRACKPORE");\r
        System.out.println("==========================================================================\\n");\r
\r
        Runnable demoTask = () -> {\r
            System.out.printf("  [Task Executing] Running on Thread: '%s' (ID: %d)%n",\r
                    Thread.currentThread().getName(), Thread.currentThread().getId());\r
        };\r
\r
        Thread customThread = new Thread(demoTask, "Worker-Async-1");\r
\r
        // 1. MISTAKE: Calling run() directly (Synchronous execution on MAIN thread!):\r
        System.out.println(">>> 1. INCORRECT: Calling customThread.run() directly:");\r
        customThread.run(); // No new thread is spawned! Runs synchronously on main!\r
\r
        // 2. CORRECT: Calling start() (Spawns a new OS Thread & Stack!):\r
        System.out.println("\\n>>> 2. CORRECT: Calling customThread.start():");\r
        customThread.start(); // JVM calls native method to allocate OS thread & calls run() on new stack!\r
\r
        System.out.println("\\n>>> WHAT HAPPENS UNDER THE HOOD WHEN YOU CALL start():");\r
        System.out.println("  1. 'start()' calls JVM private native method: 'private native void start0()'.");\r
        System.out.println("  2. The JVM interacts with the OS kernel to allocate a new native thread and private 1 MB Call Stack.");\r
        System.out.println("  3. The OS thread scheduler registers the thread (RUNNABLE) and executes 'run()' ON THE NEW STACK.");\r
        System.out.println("  4. If you call 'run()' directly, it is just a normal Java method call executing on the CURRENT CALLING STACK with ZERO concurrency!");\r
\r
        System.out.println("\\n==========================================================================");\r
    }\r
}`,o=`================================================================================\r
JAVA CORE TUTORIAL - QUICK REVISION GUIDE\r
Module 008_001: Thread Fundamentals, Lifecycle & Creation\r
Topic 11: thread.start() vs thread.run()\r
Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
================================================================================\r
\r
1. START vs RUN:\r
   - 'thread.run()': plain synchronous method call on CURRENT stack (zero concurrency).\r
   - 'thread.start()': invokes native 'start0()', creates new OS thread & Call Stack.\r
   - Calling 'start()' twice throws 'IllegalThreadStateException'.\r
   - Always call 'start()' to achieve true multithreading!\r
\r
================================================================================\r
Classroom Practice: Barrackpore Academy | Mentor: Sukanta Hui\r
================================================================================`,l=[{question:"What happens if a developer calls 'thread.run()' directly instead of 'thread.start()'?",shortAnswer:"Calling 'thread.run()' directly executes the 'run()' method synchronously on the CURRENT calling thread (e.g. the 'main' thread) as a standard Java method call. No new native OS thread or private Call Stack is created, and zero concurrency or parallel execution occurs. In contrast, calling 'thread.start()' invokes native JVM code ('start0()') to allocate a new OS thread and private Call Stack, executing 'run()' asynchronously in parallel.",explanation:"Number one most common multithreading interview and exam question.",hint:"run() executes synchronously on the current thread; start() creates a new native OS thread and Call Stack.",level:"Beginner",codeExample:"t.run(); // Synchronous on main! | t.start(); // Asynchronous on new thread!"}];function y(){return e.jsxs("div",{className:"space-y-12 px-4 md:px-8 py-8 text-slate-200 bg-slate-900 min-h-screen",children:[e.jsxs("header",{className:"space-y-4 border-b border-slate-800 pb-6",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"px-3 py-1 bg-sky-500/10 text-sky-400 border border-sky-500/20 text-xs font-semibold rounded-full uppercase tracking-wider",children:"Module 008_001 · Topic 11"}),e.jsx("span",{className:"px-3 py-1 bg-rose-500/10 text-rose-400 border border-rose-500/20 text-xs font-semibold rounded-full",children:"start() vs run()"})]}),e.jsxs("h1",{className:"text-xl sm:text-2xl md:text-3xl font-bold text-white tracking-tight",children:["Starting a Thread: Why We MUST Call ",e.jsx("code",{className:"text-emerald-400 font-mono",children:"thread.start()"})," instead of ",e.jsx("code",{className:"text-rose-400 font-mono",children:"run()"})]}),e.jsxs("p",{className:"text-base md:text-lg text-slate-400 leading-relaxed max-w-4xl",children:["Avoid the #1 junior multithreading mistake: understanding native ",e.jsx("code",{className:"text-emerald-300 font-mono",children:"start0()"})," stack allocation versus synchronous in-thread method invocation."]})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsxs("h2",{className:"text-2xl font-bold text-emerald-400 flex items-center gap-2",children:[e.jsx("span",{children:"💻"})," Hands-On Java Demo Code"]}),e.jsx(t,{fileModule:s,title:"StartVsRunDirectInvocationDemo.java",highlightLines:[7,10,18,19,23,24,27,28,31,32]})]}),e.jsx("section",{className:"space-y-4",children:e.jsx(a,{title:"start() vs run() FAQs",questions:l})}),e.jsx("section",{className:"space-y-4",children:e.jsx(r,{content:o,title:"Module 008_001 Topic 11: thread.start() vs thread.run()",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Printable Note",downloadFileName:"008_001_topic11_start_vs_run_note.txt"})}),e.jsx(n,{note:"Never call 'thread.run()' directly! If you call run(), it runs on the main thread like a plain old method call! Only 'thread.start()' creates a brand new thread in the operating system! — Sukanta Hui"})]})}export{y as default};
