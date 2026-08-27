import{j as e}from"./vendor-react-core-Doz9nIC6.js";import{J as t}from"./JavaFileLoader-BfBG3xz_.js";import{F as r}from"./FAQTemplate-CkSqDH4B.js";import{P as n}from"./PlainTextPrint-C08xhKA4.js";import{T as c}from"./TeacherSukantaHui-CyIG3xbg.js";import"./JavaCodeBlock-BwsLxS3r.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-CIaKtAt4.js";const o=`/**\r
 * Java Core Tutorial - Module 008_007: ExecutorService, Thread Pools & CompletableFuture\r
 * Topic 2: The Executor Interface Hierarchy: Executor, ExecutorService & ScheduledExecutorService\r
 * Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
 */\r
\r
package com.coderaccotax.javatutorial.multithreading;\r
\r
public class ExecutorInterfaceHierarchyDemo {\r
\r
    public static void main(String[] args) {\r
        System.out.println("==========================================================================");\r
        System.out.println(" TOPIC 2: EXECUTOR INTERFACE HIERARCHY - BARRACKPORE ACADEMY");\r
        System.out.println("==========================================================================\\n");\r
\r
        System.out.println(">>> THE 3 CORE INTERFACES OF THE CONCURRENCY EXECUTOR HIERARCHY:");\r
        System.out.println();\r
        System.out.println("  1. java.util.concurrent.Executor (Base Interface):");\r
        System.out.println("     - Single method: 'void execute(Runnable command)'");\r
        System.out.println("     - Bare-minimum contract: accept a task and run it.");\r
        System.out.println();\r
        System.out.println("  2. java.util.concurrent.ExecutorService (Enterprise Engine):");\r
        System.out.println("     - Extends 'Executor'.");\r
        System.out.println("     - Adds task submission with return values: '<T> Future<T> submit(Callable<T> task)'");\r
        System.out.println("     - Adds bulk task execution: 'invokeAll()', 'invokeAny()'");\r
        System.out.println("     - Adds lifecycle management: 'shutdown()', 'shutdownNow()', 'awaitTermination()'");\r
        System.out.println();\r
        System.out.println("  3. java.util.concurrent.ScheduledExecutorService (Timer & Cron Engine):");\r
        System.out.println("     - Extends 'ExecutorService'.");\r
        System.out.println("     - Adds delayed execution: 'schedule(task, delay, unit)'");\r
        System.out.println("     - Adds periodic execution: 'scheduleAtFixedRate()', 'scheduleWithFixedDelay()'");\r
\r
        System.out.println("\\n==========================================================================");\r
    }\r
}`,a=`================================================================================\r
JAVA CORE TUTORIAL - QUICK REVISION GUIDE\r
Module 008_007: ExecutorService, Thread Pools & CompletableFuture\r
Topic 2: Executor Interface Hierarchy\r
Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
================================================================================\r
\r
1. EXECUTOR INTERFACE HIERARCHY:\r
   - 'Executor': 'execute(Runnable)' (bare-bones).\r
   - 'ExecutorService': 'submit()', 'shutdown()', 'invokeAll()', 'Future<T>'.\r
   - 'ScheduledExecutorService': 'scheduleAtFixedRate()', 'scheduleWithFixedDelay()'.\r
   - Implemented by 'ThreadPoolExecutor' and 'ScheduledThreadPoolExecutor'.\r
\r
================================================================================\r
Classroom Practice: Barrackpore Academy | Mentor: Sukanta Hui\r
================================================================================`,i=[{question:"Outline the interface hierarchy of 'Executor', 'ExecutorService', and 'ScheduledExecutorService' in Java.",shortAnswer:"1. 'Executor' (Base): Defines exactly one method: 'void execute(Runnable command)' for fire-and-forget execution. 2. 'ExecutorService' (Extends Executor): Extends the contract by adding Future-returning methods ('submit(Callable/Runnable)'), batch execution ('invokeAll', 'invokeAny'), and lifecycle shutdown controls ('shutdown', 'shutdownNow'). 3. 'ScheduledExecutorService' (Extends ExecutorService): Extends lifecycle controls by adding time-delayed and recurring scheduled execution methods ('schedule', 'scheduleAtFixedRate', 'scheduleWithFixedDelay').",explanation:"Core Java concurrency interface inheritance hierarchy.",hint:"Executor (execute) &rarr; ExecutorService (submit, shutdown, Future) &rarr; ScheduledExecutorService (periodic scheduling).",level:"Intermediate",codeExample:"Executor e = ...; ExecutorService es = ...; ScheduledExecutorService ses = ...;"}];function E(){return e.jsxs("div",{className:"space-y-12 px-4 md:px-8 py-8 text-slate-200 bg-slate-900 min-h-screen",children:[e.jsxs("header",{className:"space-y-4 border-b border-slate-800 pb-6",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"px-3 py-1 bg-sky-500/10 text-sky-400 border border-sky-500/20 text-xs font-semibold rounded-full uppercase tracking-wider",children:"Module 008_007 · Topic 2"}),e.jsx("span",{className:"px-3 py-1 bg-purple-500/10 text-purple-400 border border-purple-500/20 text-xs font-semibold rounded-full",children:"Interface Hierarchy"})]}),e.jsxs("h1",{className:"text-3xl md:text-4xl font-extrabold text-white tracking-tight",children:["The Executor Hierarchy: ",e.jsx("code",{className:"text-emerald-400 font-mono",children:"Executor"}),", ",e.jsx("code",{className:"text-sky-400 font-mono",children:"ExecutorService"})," & ",e.jsx("code",{className:"text-purple-400 font-mono",children:"ScheduledExecutorService"})]}),e.jsx("p",{className:"text-base md:text-lg text-slate-400 leading-relaxed max-w-4xl",children:"Survey the core concurrency contracts: evaluating base task dispatchers, lifecycle management interfaces, and periodic timer scheduling engines."})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsxs("h2",{className:"text-2xl font-bold text-emerald-400 flex items-center gap-2",children:[e.jsx("span",{children:"💻"})," Hands-On Java Demo Code"]}),e.jsx(t,{fileModule:o,title:"ExecutorInterfaceHierarchyDemo.java",highlightLines:[7,10,13,14,18,19,20,25,26]})]}),e.jsx("section",{className:"space-y-4",children:e.jsx(r,{title:"Executor Hierarchy FAQs",questions:i})}),e.jsx("section",{className:"space-y-4",children:e.jsx(n,{content:a,title:"Module 008_007 Topic 2: Executor Interface Hierarchy",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Printable Note",downloadFileName:"008_007_topic2_executor_hierarchy_note.txt"})}),e.jsx(c,{note:"Remember the 3-tier hierarchy: 'Executor' is the simple worker (execute), 'ExecutorService' is the manager (submit, return values, shutdown), and 'ScheduledExecutorService' is the calendar (scheduled and recurring tasks)! — Sukanta Hui"})]})}export{E as default};
