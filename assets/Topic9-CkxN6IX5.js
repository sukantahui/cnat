import{j as e}from"./vendor-react-core-Doz9nIC6.js";import{J as t}from"./JavaFileLoader-BfBG3xz_.js";import{F as a}from"./FAQTemplate-BHhlgA96.js";import{P as r}from"./PlainTextPrint-C08xhKA4.js";import{T as n}from"./TeacherSukantaHui-DerPxfxp.js";import"./JavaCodeBlock-BwsLxS3r.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-CH1iX9C8.js";const s=`/**\r
 * Java Core Tutorial - Module 008_009: Virtual Threads (Java 21+ Project Loom)\r
 * Topic 9: Thread.startVirtualThread(Runnable): The Instant One-Line Launcher\r
 * Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
 */\r
\r
package com.coderaccotax.javatutorial.virtualthreads;\r
\r
public class StartVirtualThreadQuickStarterDemo {\r
\r
    public static void main(String[] args) throws InterruptedException {\r
        System.out.println("==========================================================================");\r
        System.out.println(" TOPIC 9: Thread.startVirtualThread() QUICK LAUNCHER - BARRACKPORE");\r
        System.out.println("==========================================================================\\n");\r
\r
        // Instant one-line Virtual Thread launch:\r
        Thread worker = Thread.startVirtualThread(() -> {\r
            System.out.println(">>> [Quick Worker] Executing asynchronous task on Virtual Thread!");\r
            System.out.println("  Thread Name : " + Thread.currentThread().getName()); // Anonymous (empty name)\r
            System.out.println("  Is Virtual? : " + Thread.currentThread().isVirtual());\r
        });\r
\r
        worker.join();\r
\r
        System.out.println("\\n>>> CHARACTERISTICS OF Thread.startVirtualThread():");\r
        System.out.println("  - Starts immediately (no unstarted state).");\r
        System.out.println("  - Anonymous by default (no name assigned).");\r
        System.out.println("  - Ideal for quick scripts, fire-and-forget background operations, and educational demos.");\r
\r
        System.out.println("\\n==========================================================================");\r
    }\r
}`,i=`================================================================================\r
JAVA CORE TUTORIAL - QUICK REVISION GUIDE\r
Module 008_009: Virtual Threads (Java 21+)\r
Topic 9: Thread.startVirtualThread()\r
Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
================================================================================\r
\r
1. THREAD.STARTVIRTUALTHREAD(RUNNABLE):\r
   - One-line quick launcher for virtual threads.\r
   - Starts immediately; anonymous by default.\r
   - Replaces legacy 'new Thread(r).start()'.\r
   - Returns a 'Thread' handle you can 'join()' on.\r
\r
================================================================================\r
Classroom Practice: Barrackpore Academy | Mentor: Sukanta Hui\r
================================================================================`,o=[{question:"What is 'Thread.startVirtualThread(Runnable)' in Java 21 and when is it typically used?",shortAnswer:"'Thread.startVirtualThread(Runnable)' is a static convenience method that immediately creates and starts an anonymous Virtual Thread in a single line of code. It is the direct modern replacement for 'new Thread(runnable).start()'. It is ideal for quick scripts, background asynchronous task execution, and educational demos where custom naming or thread factory configuration is not required.",explanation:"Static helper method for instant virtual thread creation in Java 21.",hint:"Convenience method to immediately create and start an anonymous virtual thread in one line.",level:"Beginner",codeExample:'Thread.startVirtualThread(() → System.out.println("Running virtually!"));'}];function x(){return e.jsxs("div",{className:"space-y-12 px-4 md:px-8 py-8 text-slate-200 bg-slate-900 min-h-screen",children:[e.jsxs("header",{className:"space-y-4 border-b border-slate-800 pb-6",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"px-3 py-1 bg-sky-500/10 text-sky-400 border border-sky-500/20 text-xs font-semibold rounded-full uppercase tracking-wider",children:"Module 008_009 · Topic 9"}),e.jsx("span",{className:"px-3 py-1 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-xs font-semibold rounded-full",children:"startVirtualThread()"})]}),e.jsxs("h1",{className:"text-xl sm:text-2xl md:text-3xl font-bold text-white tracking-tight",children:["The ",e.jsx("code",{className:"text-emerald-400 font-mono",children:"Thread.startVirtualThread()"})," Instant One-Line Launcher"]}),e.jsxs("p",{className:"text-base md:text-lg text-slate-400 leading-relaxed max-w-4xl",children:["Deploy instant lightweight execution: utilizing the static ",e.jsx("code",{className:"text-emerald-300 font-mono",children:"Thread.startVirtualThread()"})," utility to spawn anonymous virtual workers with zero boilerplate."]})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsxs("h2",{className:"text-2xl font-bold text-emerald-400 flex items-center gap-2",children:[e.jsx("span",{children:"💻"})," Hands-On Java Demo Code"]}),e.jsx(t,{fileModule:s,title:"StartVirtualThreadQuickStarterDemo.java",highlightLines:[7,10,14,15,16,17,20,21]})]}),e.jsx("section",{className:"space-y-4",children:e.jsx(a,{title:"startVirtualThread FAQs",questions:o})}),e.jsx("section",{className:"space-y-4",children:e.jsx(r,{content:i,title:"Module 008_009 Topic 9: startVirtualThread()",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Printable Note",downloadFileName:"008_009_topic9_start_virtual_thread_note.txt"})}),e.jsx(n,{note:"Whenever you just want to run a quick task in the background without creating thread pools or builders, just write 'Thread.startVirtualThread(() → doWork())'! It is the simplest and cleanest way to run asynchronous code in Java 21! — Sukanta Hui"})]})}export{x as default};
