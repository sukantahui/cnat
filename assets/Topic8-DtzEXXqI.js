import{j as e}from"./vendor-react-core-Doz9nIC6.js";import{J as r}from"./JavaFileLoader-BfBG3xz_.js";import{F as t}from"./FAQTemplate-BHhlgA96.js";import{P as a}from"./PlainTextPrint-C08xhKA4.js";import{T as n}from"./TeacherSukantaHui-BaJcBHAy.js";import"./JavaCodeBlock-BwsLxS3r.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-8ao-0upJ.js";const i=`/**\r
 * Java Core Tutorial - Module 008_009: Virtual Threads (Java 21+ Project Loom)\r
 * Topic 8: The Thread.ofVirtual() Fluent Builder: Naming & ThreadFactory Generation\r
 * Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
 */\r
\r
package com.coderaccotax.javatutorial.virtualthreads;\r
\r
import java.util.concurrent.ThreadFactory;\r
\r
public class ThreadOfVirtualFluentBuilderDemo {\r
\r
    public static void main(String[] args) throws InterruptedException {\r
        System.out.println("==========================================================================");\r
        System.out.println(" TOPIC 8: Thread.ofVirtual() FLUENT BUILDER API - BARRACKPORE");\r
        System.out.println("==========================================================================\\n");\r
\r
        // 1. Fluent Builder starting immediately:\r
        Thread v1 = Thread.ofVirtual()\r
                .name("GstAuditWorker-", 1) // Auto-increments: GstAuditWorker-1, GstAuditWorker-2...\r
                .start(() -> {\r
                    System.out.println(">>> 1. Running named virtual thread: " + Thread.currentThread().getName());\r
                });\r
\r
        v1.join();\r
\r
        // 2. Creating a reusable ThreadFactory of Virtual Threads:\r
        ThreadFactory vFactory = Thread.ofVirtual()\r
                .name("StudentInvoiceWorker-", 100)\r
                .factory();\r
\r
        Thread t100 = vFactory.newThread(() -> {\r
            System.out.println(">>> 2. Spawned from Virtual ThreadFactory: " + Thread.currentThread().getName());\r
        });\r
        t100.start();\r
        t100.join();\r
\r
        System.out.println("\\n==========================================================================");\r
    }\r
}`,o=`================================================================================\r
JAVA CORE TUTORIAL - QUICK REVISION GUIDE\r
Module 008_009: Virtual Threads (Java 21+)\r
Topic 8: Thread.ofVirtual() Builder\r
Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
================================================================================\r
\r
1. THREAD.OFVIRTUAL() BUILDER:\r
   - '.name("prefix-", startNumber)': Auto-incrementing thread names.\r
   - '.start(runnable)': Creates and immediately starts.\r
   - '.unstarted(runnable)': Creates thread in NEW unstarted state.\r
   - '.factory()': Produces a reusable 'ThreadFactory' for virtual threads.\r
\r
================================================================================\r
Classroom Practice: Barrackpore Academy | Mentor: Sukanta Hui\r
================================================================================`,s=[{question:"How does the 'Thread.ofVirtual()' builder allow configuring thread names, sequence numbers, and reusable ThreadFactory instances?",shortAnswer:`'Thread.ofVirtual()' returns a 'Thread.Builder.OfVirtual' builder interface. Calling '.name("prefix-", startNumber)' configures an auto-incrementing naming pattern (e.g. 'prefix-1', 'prefix-2') for debugging telemetry. Calling '.start(runnable)' builds and starts the thread immediately; calling '.unstarted(runnable)' builds it in the NEW state; and calling '.factory()' produces a standard 'java.util.concurrent.ThreadFactory' configured to instantiate virtual threads.`,explanation:"Fluent builder API design in Java 21 (JEP 444).",hint:"Returns Thread.Builder.OfVirtual; supports .name(prefix, start), .start(runnable), .unstarted(runnable), and .factory().",level:"Intermediate",codeExample:'ThreadFactory factory = Thread.ofVirtual().name("worker-", 1).factory();'}];function f(){return e.jsxs("div",{className:"space-y-12 px-4 md:px-8 py-8 text-slate-200 bg-slate-900 min-h-screen",children:[e.jsxs("header",{className:"space-y-4 border-b border-slate-800 pb-6",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"px-3 py-1 bg-sky-500/10 text-sky-400 border border-sky-500/20 text-xs font-semibold rounded-full uppercase tracking-wider",children:"Module 008_009 · Topic 8"}),e.jsx("span",{className:"px-3 py-1 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-xs font-semibold rounded-full",children:"ofVirtual() Builder"})]}),e.jsxs("h1",{className:"text-xl sm:text-2xl md:text-3xl font-bold text-white tracking-tight",children:["The ",e.jsx("code",{className:"text-emerald-400 font-mono",children:"Thread.ofVirtual()"})," Fluent Builder & ThreadFactory Creation"]}),e.jsxs("p",{className:"text-base md:text-lg text-slate-400 leading-relaxed max-w-4xl",children:["Construct customized virtual workers: configuring auto-incrementing naming sequences, unstarted thread instances, and generating reusable ",e.jsx("code",{className:"text-emerald-300 font-mono",children:"ThreadFactory"})," components."]})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsxs("h2",{className:"text-2xl font-bold text-emerald-400 flex items-center gap-2",children:[e.jsx("span",{children:"💻"})," Hands-On Java Demo Code"]}),e.jsx(r,{fileModule:i,title:"ThreadOfVirtualFluentBuilderDemo.java",highlightLines:[7,10,15,16,17,23,24,25,27,28]})]}),e.jsx("section",{className:"space-y-4",children:e.jsx(t,{title:"ofVirtual() Builder FAQs",questions:s})}),e.jsx("section",{className:"space-y-4",children:e.jsx(a,{content:o,title:"Module 008_009 Topic 8: ofVirtual() Builder",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Printable Note",downloadFileName:"008_009_topic8_ofvirtual_builder_note.txt"})}),e.jsx(n,{note:"Always give your Virtual Threads descriptive names using '.name(\\'worker-\\', 1)'! When inspecting thread dumps or logging errors, seeing 'worker-1' instead of an empty anonymous thread makes production debugging effortless! — Sukanta Hui"})]})}export{f as default};
