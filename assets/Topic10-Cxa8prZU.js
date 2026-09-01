import{j as e}from"./vendor-react-core-Doz9nIC6.js";import{J as r}from"./JavaFileLoader-BfBG3xz_.js";import{F as t}from"./FAQTemplate-BHhlgA96.js";import{P as a}from"./PlainTextPrint-C08xhKA4.js";import{T as n}from"./TeacherSukantaHui-CEPuAfsb.js";import"./JavaCodeBlock-BwsLxS3r.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-DGCamHnX.js";const o=`/**\r
 * Java Core Tutorial - Module 008_009: Virtual Threads (Java 21+ Project Loom)\r
 * Topic 10: Executors.newVirtualThreadPerTaskExecutor(): The Production Gold Standard\r
 * Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
 */\r
\r
package com.coderaccotax.javatutorial.virtualthreads;\r
\r
import java.util.concurrent.ExecutorService;\r
import java.util.concurrent.Executors;\r
import java.util.concurrent.Future;\r
\r
public class VirtualThreadPerTaskExecutorDemo {\r
\r
    public static void main(String[] args) throws Exception {\r
        System.out.println("==========================================================================");\r
        System.out.println(" TOPIC 10: newVirtualThreadPerTaskExecutor() - BARRACKPORE");\r
        System.out.println("==========================================================================\\n");\r
\r
        // PRODUCTION GOLD STANDARD: Automatic Virtual Thread per Task with try-with-resources auto-close!\r
        try (ExecutorService executor = Executors.newVirtualThreadPerTaskExecutor()) {\r
\r
            Future<String> task1 = executor.submit(() -> {\r
                Thread.sleep(100);\r
                return "GST Filing #901 Completed";\r
            });\r
\r
            Future<String> task2 = executor.submit(() -> {\r
                Thread.sleep(150);\r
                return "Income Tax Return #402 Processed";\r
            });\r
\r
            System.out.println(">>> 1. Submitted 2 tasks to newVirtualThreadPerTaskExecutor.");\r
            System.out.println(">>> 2. Result 1: " + task1.get());\r
            System.out.println(">>> 3. Result 2: " + task2.get());\r
\r
            // When exiting the try block, ExecutorService.close() AUTOMATICALLY waits for all tasks to finish!\r
        }\r
\r
        System.out.println("\\n>>> Auto-closed executor cleanly after all tasks finished!");\r
\r
        System.out.println("\\n==========================================================================");\r
    }\r
}`,s=`================================================================================\r
JAVA CORE TUTORIAL - QUICK REVISION GUIDE\r
Module 008_009: Virtual Threads (Java 21+)\r
Topic 10: newVirtualThreadPerTaskExecutor\r
Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
================================================================================\r
\r
1. NEWVIRTUALTHREADPERTASKEXECUTOR():\r
   - Spawns a new Virtual Thread for EVERY task.\r
   - Implements 'AutoCloseable': use with 'try-with-resources'.\r
   - Exiting 'try' block automatically waits for all tasks to complete!\r
   - The default executor used in modern Spring Boot 3.2+ and Quarkus.\r
\r
================================================================================\r
Classroom Practice: Barrackpore Academy | Mentor: Sukanta Hui\r
================================================================================`,i=[{question:"Why is 'Executors.newVirtualThreadPerTaskExecutor()' used with 'try-with-resources' in Java 21 enterprise backend services?",shortAnswer:"'Executors.newVirtualThreadPerTaskExecutor()' creates an ExecutorService that spawns a brand new, unpooled Virtual Thread for every submitted task. In Java 19+, 'ExecutorService' implements 'AutoCloseable', where 'close()' internally calls 'shutdown()' and blocks via 'awaitTermination()' until all submitted tasks complete. Combining it with 'try-with-resources' provides clean structured lifecycle scoping with zero manual thread pool sizing or shutdown boilerplate.",explanation:"Enterprise standard for Virtual Thread execution in Java 21.",hint:"Creates a new virtual thread per task and integrates with try-with-resources for automatic graceful shutdown waiting.",level:"Intermediate",codeExample:"try (var executor = Executors.newVirtualThreadPerTaskExecutor()) { executor.submit(task); }"}];function T(){return e.jsxs("div",{className:"space-y-12 px-4 md:px-8 py-8 text-slate-200 bg-slate-900 min-h-screen",children:[e.jsxs("header",{className:"space-y-4 border-b border-slate-800 pb-6",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"px-3 py-1 bg-sky-500/10 text-sky-400 border border-sky-500/20 text-xs font-semibold rounded-full uppercase tracking-wider",children:"Module 008_009 · Topic 10"}),e.jsx("span",{className:"px-3 py-1 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-xs font-semibold rounded-full",children:"Virtual Thread Executor"})]}),e.jsxs("h1",{className:"text-xl sm:text-2xl md:text-3xl font-bold text-white tracking-tight",children:[e.jsx("code",{className:"text-emerald-400 font-mono",children:"Executors.newVirtualThreadPerTaskExecutor()"}),": Enterprise Gold Standard"]}),e.jsxs("p",{className:"text-base md:text-lg text-slate-400 leading-relaxed max-w-4xl",children:["Master production virtual execution: utilizing ",e.jsx("code",{className:"text-emerald-300 font-mono",children:"newVirtualThreadPerTaskExecutor()"}),", pairing with ",e.jsx("code",{className:"text-sky-300 font-mono",children:"try-with-resources"})," auto-close mechanics, and executing concurrent workflows."]})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsxs("h2",{className:"text-2xl font-bold text-emerald-400 flex items-center gap-2",children:[e.jsx("span",{children:"💻"})," Hands-On Java Demo Code"]}),e.jsx(r,{fileModule:o,title:"VirtualThreadPerTaskExecutorDemo.java",highlightLines:[7,10,16,17,18,23,24,29,30]})]}),e.jsx("section",{className:"space-y-4",children:e.jsx(t,{title:"Virtual Thread Executor FAQs",questions:i})}),e.jsx("section",{className:"space-y-4",children:e.jsx(a,{content:s,title:"Module 008_009 Topic 10: Virtual Thread Executor",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Printable Note",downloadFileName:"008_009_topic10_virtual_thread_executor_note.txt"})}),e.jsx(n,{note:"In modern Spring Boot 3.2+ and Java 21, you simply configure 'newVirtualThreadPerTaskExecutor()'! You don't have to guess pool sizes or queue capacities anymore—every incoming HTTP request gets its own brand-new virtual thread automatically! — Sukanta Hui"})]})}export{T as default};
