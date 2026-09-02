import{j as e}from"./vendor-react-core-Doz9nIC6.js";import{J as r}from"./JavaFileLoader-BfBG3xz_.js";import{F as t}from"./FAQTemplate-BHhlgA96.js";import{P as a}from"./PlainTextPrint-C08xhKA4.js";import{T as n}from"./TeacherSukantaHui-RpFLNJ5A.js";import"./JavaCodeBlock-BwsLxS3r.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-wprqVFW_.js";const s=`/**\r
 * Java Core Tutorial - Module 008_009: Virtual Threads (Java 21+ Project Loom)\r
 * Topic 7: Creating Virtual Threads: The 3 Primary Creation APIs Overview\r
 * Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
 */\r
\r
package com.coderaccotax.javatutorial.virtualthreads;\r
\r
import java.util.concurrent.ExecutorService;\r
import java.util.concurrent.Executors;\r
\r
public class CreatingVirtualThreadsOverviewDemo {\r
\r
    public static void main(String[] args) throws InterruptedException {\r
        System.out.println("==========================================================================");\r
        System.out.println(" TOPIC 7: CREATING VIRTUAL THREADS (THE 3 APIS) - BARRACKPORE");\r
        System.out.println("==========================================================================\\n");\r
\r
        System.out.println(">>> THE 3 CANONICAL APIS TO CREATE VIRTUAL THREADS IN JAVA 21:");\r
        System.out.println();\r
        System.out.println("  API 1. Fluent Builder: 'Thread.ofVirtual().name("prefix-", 1).start(runnable)'");\r
        System.out.println("         - Custom naming, sequence numbers, and unstarted factory creation.");\r
        System.out.println();\r
        System.out.println("  API 2. Static Shorthand: 'Thread.startVirtualThread(runnable)'");\r
        System.out.println("         - Quick one-line anonymous virtual thread launch.");\r
        System.out.println();\r
        System.out.println("  API 3. Executor Service: 'Executors.newVirtualThreadPerTaskExecutor()'");\r
        System.out.println("         - Production gold standard: creates a brand-new virtual thread for EVERY submitted task!");\r
\r
        System.out.println("\\n==========================================================================");\r
    }\r
}`,i=`================================================================================\r
JAVA CORE TUTORIAL - QUICK REVISION GUIDE\r
Module 008_009: Virtual Threads (Java 21+)\r
Topic 7: Creating Virtual Threads Overview\r
Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
================================================================================\r
\r
1. CREATING VIRTUAL THREADS (3 APIS):\r
   - 1. 'Thread.ofVirtual().name(...).start(...)': Fluent builder.\r
   - 2. 'Thread.startVirtualThread(runnable)': Quick one-line starter.\r
   - 3. 'Executors.newVirtualThreadPerTaskExecutor()': Production executor.\r
\r
================================================================================\r
Classroom Practice: Barrackpore Academy | Mentor: Sukanta Hui\r
================================================================================`,o=[{question:"What are the three primary APIs introduced in Java 21 to create and launch Virtual Threads?",shortAnswer:"1. 'Thread.ofVirtual()': A fluent builder interface that configures virtual thread properties (names, sequence numbers, unstarted instances). 2. 'Thread.startVirtualThread(Runnable)': A convenient static factory method to immediately create and start an anonymous virtual thread in one line. 3. 'Executors.newVirtualThreadPerTaskExecutor()': An 'ExecutorService' implementation that spawns a brand new, ephemeral virtual thread for every submitted task.",explanation:"Overview of the primary Virtual Thread creation mechanisms in Java 21.",hint:"Thread.ofVirtual() builder, Thread.startVirtualThread(), and Executors.newVirtualThreadPerTaskExecutor().",level:"Beginner",codeExample:"Thread.ofVirtual().start(task); Thread.startVirtualThread(task); Executors.newVirtualThreadPerTaskExecutor();"}];function T(){return e.jsxs("div",{className:"space-y-12 px-4 md:px-8 py-8 text-slate-200 bg-slate-900 min-h-screen",children:[e.jsxs("header",{className:"space-y-4 border-b border-slate-800 pb-6",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"px-3 py-1 bg-sky-500/10 text-sky-400 border border-sky-500/20 text-xs font-semibold rounded-full uppercase tracking-wider",children:"Module 008_009 · Topic 7"}),e.jsx("span",{className:"px-3 py-1 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-xs font-semibold rounded-full",children:"Creation APIs"})]}),e.jsxs("h1",{className:"text-xl sm:text-2xl md:text-3xl font-bold text-white tracking-tight",children:["Creating ",e.jsx("code",{className:"text-emerald-400 font-mono",children:"Virtual Threads"}),": Overview of the 3 Core Java 21 APIs"]}),e.jsxs("p",{className:"text-base md:text-lg text-slate-400 leading-relaxed max-w-4xl",children:["Survey modern thread factories: comparing the fluent ",e.jsx("code",{className:"text-emerald-300 font-mono",children:"Thread.ofVirtual()"})," builder, one-line ",e.jsx("code",{className:"text-sky-300 font-mono",children:"startVirtualThread()"})," launches, and the ",e.jsx("code",{className:"text-purple-300 font-mono",children:"newVirtualThreadPerTaskExecutor"})," engine."]})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsxs("h2",{className:"text-2xl font-bold text-emerald-400 flex items-center gap-2",children:[e.jsx("span",{children:"💻"})," Hands-On Java Demo Code"]}),e.jsx(r,{fileModule:s,title:"CreatingVirtualThreadsOverviewDemo.java",highlightLines:[7,10,14,15,17,18,20,21]})]}),e.jsx("section",{className:"space-y-4",children:e.jsx(t,{title:"Creation APIs FAQs",questions:o})}),e.jsx("section",{className:"space-y-4",children:e.jsx(a,{content:i,title:"Module 008_009 Topic 7: Creating Virtual Threads Overview",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Printable Note",downloadFileName:"008_009_topic7_creating_virtual_threads_overview_note.txt"})}),e.jsx(n,{note:"Java 21 gives you three great ways to spawn Virtual Threads: the fluent builder for custom names, startVirtualThread() for quick scripts, and newVirtualThreadPerTaskExecutor() for enterprise web backends! — Sukanta Hui"})]})}export{T as default};
