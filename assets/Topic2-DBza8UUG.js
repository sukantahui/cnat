import{j as e}from"./vendor-react-core-Doz9nIC6.js";import{J as t}from"./JavaFileLoader-BfBG3xz_.js";import{F as n}from"./FAQTemplate-CkSqDH4B.js";import{P as a}from"./PlainTextPrint-C08xhKA4.js";import{T as r}from"./TeacherSukantaHui-CyIG3xbg.js";import"./JavaCodeBlock-BwsLxS3r.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-CIaKtAt4.js";const s=`/**\r
 * Java Core Tutorial - Module 004_005: Propagation, Chaining & Best Practices\r
 * Topic 2: The JVM Default Exception Handler & Thread.UncaughtExceptionHandler\r
 * Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
 */\r
\r
package com.coderaccotax.javatutorial.exceptions;\r
\r
public class DefaultUncaughtExceptionHandlerDemo {\r
\r
    public static void main(String[] args) {\r
        System.out.println("==========================================================================");\r
        System.out.println(" TOPIC 2: JVM DEFAULT EXCEPTION HANDLER - BARRACKPORE");\r
        System.out.println("==========================================================================\\n");\r
\r
        // 1. Setting a Custom Global UncaughtExceptionHandler for the current thread:\r
        Thread.currentThread().setUncaughtExceptionHandler((thread, throwable) -> {\r
            System.out.println(">>> [GLOBAL UNCAUGHT HANDLER HOOK ACTIVATED]");\r
            System.out.println("  Terminating Thread : " + thread.getName() + " (ID: " + thread.getId() + ")");\r
            System.out.println("  Exception Class    : " + throwable.getClass().getName());\r
            System.out.println("  Exception Message  : " + throwable.getMessage());\r
            System.out.println("  [ALERT] Dispatched critical telemetry alert to Barrackpore DevOps dashboard!");\r
        });\r
\r
        System.out.println(">>> 1. Thread UncaughtExceptionHandler is configured.");\r
        System.out.println(">>> 2. What happens when an exception reaches the bottom of main() unhandled?");\r
        System.out.println("  - The JVM invokes the thread's UncaughtExceptionHandler.");\r
        System.out.println("  - By default, it prints the stack trace to System.err and kills the thread.");\r
        System.out.println("  - If all non-daemon user threads die, the entire JVM process exits!");\r
\r
        System.out.println("\\n>>> 3. Triggering simulated unhandled crash:");\r
        throw new IllegalStateException("Simulated fatal uncaught crash in Barrackpore main thread!");\r
    }\r
}`,o=`================================================================================\r
JAVA CORE TUTORIAL - QUICK REVISION GUIDE\r
Module 004_005: Propagation, Chaining & Best Practices\r
Topic 2: Default Exception Handler\r
Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
================================================================================\r
\r
1. UNCAUGHT EXCEPTION LIFECYCLE:\r
   - Unhandled in main() &rarr; Invokes 'Thread.UncaughtExceptionHandler'.\r
   - Default action: Prints stack trace to System.err & halts thread.\r
   - Enterprise hook: 'Thread.setDefaultUncaughtExceptionHandler(...)'.\r
\r
================================================================================\r
Classroom Practice: Barrackpore Academy | Mentor: Sukanta Hui\r
================================================================================`,i=[{question:"What happens when an exception propagates all the way out of the 'main()' method without being caught?",shortAnswer:"The JVM invokes the thread's 'UncaughtExceptionHandler' (or the JVM's default handler). By default, it prints the complete stack trace to 'System.err' and terminates the offending thread. If the terminated thread was the last running non-daemon thread, the entire JVM process exits.",explanation:"Enterprise systems install global UncaughtExceptionHandlers to log crashes to APM systems before exit.",hint:"JVM invokes UncaughtExceptionHandler, prints stack trace, and terminates the thread.",level:"Intermediate",codeExample:'Thread.setDefaultUncaughtExceptionHandler((t, e) -> log.error("Crash in: " + t, e));'}];function g(){return e.jsxs("div",{className:"space-y-12 px-4 md:px-8 py-8 text-slate-200 bg-slate-900 min-h-screen",children:[e.jsxs("header",{className:"space-y-4 border-b border-slate-800 pb-6",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"px-3 py-1 bg-sky-500/10 text-sky-400 border border-sky-500/20 text-xs font-semibold rounded-full uppercase tracking-wider",children:"Module 004_005 · Topic 2"}),e.jsx("span",{className:"px-3 py-1 bg-rose-500/10 text-rose-400 border border-rose-500/20 text-xs font-semibold rounded-full",children:"JVM Death Hook"})]}),e.jsxs("h1",{className:"text-3xl md:text-4xl font-extrabold text-white tracking-tight",children:["The JVM Default Exception Handler & ",e.jsx("code",{className:"text-rose-400 font-mono",children:"UncaughtExceptionHandler"})]}),e.jsxs("p",{className:"text-base md:text-lg text-slate-400 leading-relaxed max-w-4xl",children:["Master global crash safety: configuring thread-level ",e.jsx("code",{className:"text-emerald-300 font-mono",children:"UncaughtExceptionHandler"})," hooks to capture fatal uncaught crashes and alert monitoring telemetry."]})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsxs("h2",{className:"text-2xl font-bold text-emerald-400 flex items-center gap-2",children:[e.jsx("span",{children:"💻"})," Hands-On Java Demo Code"]}),e.jsx(t,{fileModule:s,title:"DefaultUncaughtExceptionHandlerDemo.java",highlightLines:[7,14,15,16,17,18,19,29]})]}),e.jsx("section",{className:"space-y-4",children:e.jsx(n,{title:"Default Handler FAQs",questions:i})}),e.jsx("section",{className:"space-y-4",children:e.jsx(a,{content:o,title:"Module 004_005 Topic 2: Default Exception Handler",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Printable Note",downloadFileName:"004_005_topic2_default_exception_handler_note.txt"})}),e.jsx(r,{note:"In production Android apps and Spring servers, you always configure a default UncaughtExceptionHandler to send crash reports to Crashlytics or Sentry before the app dies! — Sukanta Hui"})]})}export{g as default};
