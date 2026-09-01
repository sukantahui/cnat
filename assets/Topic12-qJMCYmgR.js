import{j as e}from"./vendor-react-core-Doz9nIC6.js";import{J as r}from"./JavaFileLoader-BfBG3xz_.js";import{F as t}from"./FAQTemplate-BHhlgA96.js";import{P as a}from"./PlainTextPrint-C08xhKA4.js";import{T as n}from"./TeacherSukantaHui-CEPuAfsb.js";import"./JavaCodeBlock-BwsLxS3r.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-DGCamHnX.js";const i=`/**\r
 * Java Core Tutorial - Module 008_001: Thread Fundamentals, Lifecycle & Creation\r
 * Topic 12: Thread Identification: Thread.currentThread(), getName(), setName(), and getId()\r
 * Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
 */\r
\r
package com.coderaccotax.javatutorial.multithreading;\r
\r
public class ThreadNamingAndIdentificationDemo {\r
\r
    public static void main(String[] args) throws InterruptedException {\r
        System.out.println("==========================================================================");\r
        System.out.println(" TOPIC 12: THREAD NAMING & IDENTIFICATION - BARRACKPORE");\r
        System.out.println("==========================================================================\\n");\r
\r
        // 1. Inspecting the Main Application Thread:\r
        Thread mainThread = Thread.currentThread();\r
        System.out.println(">>> 1. Main Thread Metadata:");\r
        System.out.println("  Name       : " + mainThread.getName());\r
        System.out.println("  ID         : " + mainThread.getId() + " (Deprecated in Java 19+ in favor of threadId())");\r
        System.out.println("  Priority   : " + mainThread.getPriority());\r
        System.out.println("  Thread Group: " + mainThread.getThreadGroup().getName());\r
\r
        // 2. Creating Threads with Meaningful Names for Production Diagnostics:\r
        Thread auditThread = new Thread(() -> {\r
            // Self-identifying inside thread execution:\r
            Thread current = Thread.currentThread();\r
            System.out.printf("  [Audit Worker] Hello! I am running on Thread '%s' (ID: %d)%n",\r
                    current.getName(), current.getId());\r
        });\r
\r
        // Setting a descriptive name BEFORE starting:\r
        auditThread.setName("Invoice-Audit-Worker-Barrackpore");\r
\r
        System.out.println("\\n>>> 2. Worker Thread Details Before Start:");\r
        System.out.println("  Assigned Name: " + auditThread.getName());\r
\r
        auditThread.start();\r
        auditThread.join();\r
\r
        System.out.println("\\n>>> WHY DESCRIPTIVE THREAD NAMES ARE CRITICAL IN PRODUCTION:");\r
        System.out.println("  - When taking a production Thread Dump (via 'jstack' or VisualVM) during a CPU spike or deadlock, threads named 'Thread-0' or 'Thread-1' give ZERO clue about which subsystem is failing.");\r
        System.out.println("  - Threads named 'Order-Payment-Processor-1' or 'GST-Invoice-Batch-2' allow instant troubleshooting!");\r
\r
        System.out.println("\\n==========================================================================");\r
    }\r
}`,s=`================================================================================\r
JAVA CORE TUTORIAL - QUICK REVISION GUIDE\r
Module 008_001: Thread Fundamentals, Lifecycle & Creation\r
Topic 12: Thread Naming & Identification\r
Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
================================================================================\r
\r
1. THREAD IDENTIFICATION:\r
   - 'Thread.currentThread()': returns reference to currently executing thread.\r
   - 'getName()' / 'setName("Descriptive-Name")': assigns human-readable name.\r
   - 'getId()' / 'threadId()': unique long integer identifier.\r
   - Always name threads explicitly to aid production thread dump analysis!\r
\r
================================================================================\r
Classroom Practice: Barrackpore Academy | Mentor: Sukanta Hui\r
================================================================================`,o=[{question:"Why is giving descriptive names to threads via 'thread.setName()' or Thread constructors essential in production enterprise systems?",shortAnswer:"In production, when servers experience deadlocks, memory leaks, or 100% CPU spikes, engineers take thread dumps using diagnostic tools like 'jstack', VisualVM, or JConsole. Default generated names like 'Thread-0' or 'pool-1-thread-1' make it nearly impossible to identify which component is malfunctioning. Descriptive names (e.g. 'Order-Payment-Worker-1', 'GST-Batch-Processor') allow immediate root-cause isolation.",explanation:"Enterprise observability and JVM troubleshooting best practice.",hint:"Enables instant root-cause analysis during production jstack thread dumps and deadlock diagnosis.",level:"Beginner",codeExample:'Thread t = new Thread(task, "Payment-Processor-Worker-1"); // Best practice'}];function g(){return e.jsxs("div",{className:"space-y-12 px-4 md:px-8 py-8 text-slate-200 bg-slate-900 min-h-screen",children:[e.jsxs("header",{className:"space-y-4 border-b border-slate-800 pb-6",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"px-3 py-1 bg-sky-500/10 text-sky-400 border border-sky-500/20 text-xs font-semibold rounded-full uppercase tracking-wider",children:"Module 008_001 · Topic 12"}),e.jsx("span",{className:"px-3 py-1 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-xs font-semibold rounded-full",children:"Thread Identification"})]}),e.jsxs("h1",{className:"text-xl sm:text-2xl md:text-3xl font-bold text-white tracking-tight",children:["Thread Identification: ",e.jsx("code",{className:"text-emerald-400 font-mono",children:"Thread.currentThread()"}),", ",e.jsx("code",{className:"text-sky-400 font-mono",children:"getName()"})," & ",e.jsx("code",{className:"text-amber-400 font-mono",children:"setName()"})]}),e.jsxs("p",{className:"text-base md:text-lg text-slate-400 leading-relaxed max-w-4xl",children:["Enhance production observability: inspecting active thread metadata and naming background worker threads descriptively for fast ",e.jsx("code",{className:"text-emerald-300 font-mono",children:"jstack"})," thread-dump diagnostics."]})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsxs("h2",{className:"text-2xl font-bold text-emerald-400 flex items-center gap-2",children:[e.jsx("span",{children:"💻"})," Hands-On Java Demo Code"]}),e.jsx(r,{fileModule:i,title:"ThreadNamingAndIdentificationDemo.java",highlightLines:[7,10,13,14,15,20,21,26,27,30]})]}),e.jsx("section",{className:"space-y-4",children:e.jsx(t,{title:"Thread Identification FAQs",questions:o})}),e.jsx("section",{className:"space-y-4",children:e.jsx(a,{content:s,title:"Module 008_001 Topic 12: Thread Identification",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Printable Note",downloadFileName:"008_001_topic12_thread_identification_note.txt"})}),e.jsx(n,{note:"Always give your threads meaningful names like 'Payment-Processor-1' instead of letting Java call them 'Thread-0'! When a production server crashes at 2 AM and you look at the thread dump, descriptive names will save your life! — Sukanta Hui"})]})}export{g as default};
