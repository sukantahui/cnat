import{j as e}from"./vendor-react-core-Doz9nIC6.js";import{J as t}from"./JavaFileLoader-BfBG3xz_.js";import{F as a}from"./FAQTemplate-BHhlgA96.js";import{P as r}from"./PlainTextPrint-C08xhKA4.js";import{T as n}from"./TeacherSukantaHui-DDN87fI5.js";import"./JavaCodeBlock-BwsLxS3r.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-DEsnU7fn.js";const s=`/**\r
 * Java Core Tutorial - Module 008_002: Thread Control & Daemon Threads\r
 * Topic 10: Setting Daemon Status: thread.setDaemon(true) & The Start-Order Rule\r
 * Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
 */\r
\r
package com.coderaccotax.javatutorial.multithreading;\r
\r
public class SetDaemonBeforeStartRuleDemo {\r
\r
    public static void main(String[] args) {\r
        System.out.println("==========================================================================");\r
        System.out.println(" TOPIC 10: thread.setDaemon(true) BEFORE start() RULE - BARRACKPORE");\r
        System.out.println("==========================================================================\\n");\r
\r
        // 1. CORRECT USAGE: Calling setDaemon(true) BEFORE start():\r
        Thread validDaemon = new Thread(() -> {\r
            System.out.println("  [Valid Daemon] Running background memory monitor...");\r
        }, "Valid-Daemon");\r
\r
        validDaemon.setDaemon(true); // MUST be called before start()!\r
        validDaemon.start();\r
\r
        System.out.println(">>> 1. Valid Daemon configured successfully! Is Daemon? " + validDaemon.isDaemon());\r
\r
        // 2. INCORRECT USAGE: Attempting to call setDaemon(true) AFTER start():\r
        Thread invalidDaemon = new Thread(() -> {\r
            try { Thread.sleep(500); } catch (InterruptedException ignored) {}\r
        }, "Invalid-Daemon");\r
\r
        invalidDaemon.start(); // Started as a User thread!\r
\r
        System.out.println("\\n>>> 2. Attempting to call setDaemon(true) AFTER start():");\r
        try {\r
            invalidDaemon.setDaemon(true); // THROWS IllegalThreadStateException!\r
        } catch (IllegalThreadStateException e) {\r
            System.out.println("  [CAUGHT EXPECTED EXCEPTION] " + e.getClass().getSimpleName() + "!");\r
            System.out.println("  Reason: A thread's daemon status CANNOT be altered once the thread is alive!");\r
        }\r
\r
        System.out.println("\\n==========================================================================");\r
    }\r
}`,o=`================================================================================\r
JAVA CORE TUTORIAL - QUICK REVISION GUIDE\r
Module 008_002: Thread Control & Daemon Threads\r
Topic 10: setDaemon() Rules\r
Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
================================================================================\r
\r
1. SETDAEMON() RULES:\r
   - Must be called while thread is in 'NEW' state (before 'start()').\r
   - Calling after 'start()' → throws 'IllegalThreadStateException'.\r
   - A thread created by a daemon thread automatically inherits daemon status.\r
   - A thread created by a user thread defaults to user thread.\r
\r
================================================================================\r
Classroom Practice: Barrackpore Academy | Mentor: Sukanta Hui\r
================================================================================`,l=[{question:"What happens if 'thread.setDaemon(true)' is invoked AFTER 'thread.start()' has already been called?",shortAnswer:"Invoking 'thread.setDaemon(true)' on an already running/started thread immediately throws a runtime 'IllegalThreadStateException'. A thread's daemon status must be configured strictly BEFORE 'start()' is called while the thread is still in the 'NEW' state.",explanation:"Explicit constraint defined in java.lang.Thread.setDaemon().",hint:"Throws IllegalThreadStateException; setDaemon() must be called before start() while in NEW state.",level:"Beginner",codeExample:"t.setDaemon(true); t.start(); // Correct! | t.start(); t.setDaemon(true); // Throws exception!"}];function T(){return e.jsxs("div",{className:"space-y-12 px-4 md:px-8 py-8 text-slate-200 bg-slate-900 min-h-screen",children:[e.jsxs("header",{className:"space-y-4 border-b border-slate-800 pb-6",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"px-3 py-1 bg-sky-500/10 text-sky-400 border border-sky-500/20 text-xs font-semibold rounded-full uppercase tracking-wider",children:"Module 008_002 · Topic 10"}),e.jsx("span",{className:"px-3 py-1 bg-purple-500/10 text-purple-400 border border-purple-500/20 text-xs font-semibold rounded-full",children:"setDaemon() Rule"})]}),e.jsxs("h1",{className:"text-xl sm:text-2xl md:text-3xl font-bold text-white tracking-tight",children:["Setting Daemon Status: ",e.jsx("code",{className:"text-emerald-400 font-mono",children:"thread.setDaemon(true)"})," & The Start-Order Rule"]}),e.jsxs("p",{className:"text-base md:text-lg text-slate-400 leading-relaxed max-w-4xl",children:["Master daemon initialization invariants: configuring daemon flags in the ",e.jsx("code",{className:"text-emerald-300 font-mono",children:"NEW"})," state and avoiding ",e.jsx("code",{className:"text-rose-300 font-mono",children:"IllegalThreadStateException"})," from post-start mutations."]})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsxs("h2",{className:"text-2xl font-bold text-emerald-400 flex items-center gap-2",children:[e.jsx("span",{children:"💻"})," Hands-On Java Demo Code"]}),e.jsx(t,{fileModule:s,title:"SetDaemonBeforeStartRuleDemo.java",highlightLines:[7,10,18,19,27,28,31,32]})]}),e.jsx("section",{className:"space-y-4",children:e.jsx(a,{title:"setDaemon() Rule FAQs",questions:l})}),e.jsx("section",{className:"space-y-4",children:e.jsx(r,{content:o,title:"Module 008_002 Topic 10: setDaemon() Rules",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Printable Note",downloadFileName:"008_002_topic10_setdaemon_rules_note.txt"})}),e.jsx(n,{note:"Always call 'thread.setDaemon(true)' BEFORE 'thread.start()'! If you start the thread first and then try to make it a daemon, Java will immediately crash with an IllegalThreadStateException! — Sukanta Hui"})]})}export{T as default};
