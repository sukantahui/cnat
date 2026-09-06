import{j as e}from"./vendor-react-core-Doz9nIC6.js";import{J as t}from"./JavaFileLoader-BfBG3xz_.js";import{F as n}from"./FAQTemplate-BHhlgA96.js";import{P as a}from"./PlainTextPrint-C08xhKA4.js";import{T as o}from"./TeacherSukantaHui-DDN87fI5.js";import"./JavaCodeBlock-BwsLxS3r.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-DEsnU7fn.js";const i=`/**\r
 * Java Core Tutorial - Module 008_004: Inter-Thread Communication & Producer-Consumer\r
 * Topic 2: Architectural Design: Why wait() & notify() Belong to java.lang.Object\r
 * Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
 */\r
\r
package com.coderaccotax.javatutorial.multithreading;\r
\r
public class WhyWaitNotifyInObjectNotThreadDemo {\r
\r
    public static void main(String[] args) {\r
        System.out.println("==========================================================================");\r
        System.out.println(" TOPIC 2: WHY wait() / notify() ARE IN Object, NOT Thread - BARRACKPORE");\r
        System.out.println("==========================================================================\\n");\r
\r
        System.out.println(">>> THE #1 ARCHITECTURAL REASON:");\r
        System.out.println("  1. Locks Belong to Objects, NOT to Threads!");\r
        System.out.println("     - In Java, every Object has a Monitor Lock.");\r
        System.out.println("     - 'wait()' means: 'Release the lock on THIS object and wait on THIS object's wait-set'.");\r
        System.out.println("     - If wait() were on Thread (e.g. 'Thread.wait()'), which object's lock would it release?");\r
        System.out.println("     - A thread can hold locks on MULTIPLE objects simultaneously (e.g. holding Lock A and Lock B).");\r
        System.out.println("     - Calling 'lockA.wait()' explicitly specifies that ONLY Lock A should be released, while Lock B remains held!");\r
        System.out.println();\r
        System.out.println(">>> THE #2 REASON: OBJECT WAIT SETS:");\r
        System.out.println("  - Each Java object manages its own private 'Wait Set' (queue of threads waiting on that resource).");\r
        System.out.println("  - Calling 'lockA.notify()' wakes up threads waiting specifically on Lock A without disturbing threads waiting on Lock B.");\r
\r
        System.out.println("\\n==========================================================================");\r
    }\r
}`,s=`================================================================================\r
JAVA CORE TUTORIAL - QUICK REVISION GUIDE\r
Module 008_004: Inter-Thread Communication & Producer-Consumer\r
Topic 2: Why wait/notify are in Object\r
Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
================================================================================\r
\r
1. WHY WAIT/NOTIFY ARE IN OBJECT:\r
   - Intrinsic locks live on Objects, not Threads.\r
   - Threads can hold locks on multiple objects at once.\r
   - 'obj.wait()' specifies WHICH object lock is released.\r
   - Each object has its own private Wait Set.\r
   - Calling 'objA.notify()' targets only threads waiting on objA.\r
\r
================================================================================\r
Classroom Practice: Barrackpore Academy | Mentor: Sukanta Hui\r
================================================================================`,r=[{question:"Why are 'wait()', 'notify()', and 'notifyAll()' defined in 'java.lang.Object' rather than 'java.lang.Thread'?",shortAnswer:"1. 'Locks Belong to Objects': In Java's architecture, intrinsic monitor locks are attached to object instances in heap memory, not to thread instances. 2. 'Multiple Lock Disambiguation': A single thread can acquire locks on multiple distinct objects simultaneously (e.g. holding locks on both 'bufferA' and 'bufferB'). If 'wait()' were a method on Thread, the JVM would have no way of knowing which specific object's monitor should be released. Defining 'wait()' on Object enables 'bufferA.wait()', unambiguously releasing ONLY bufferA's lock while retaining bufferB's lock. 3. 'Dedicated Wait Sets': Every object maintains its own private Wait Set of waiting threads.",explanation:"Classic senior Java architect design interview question.",hint:"Locks belong to objects, not threads; a thread can hold multiple locks and must specify which lock to release.",level:"Advanced",codeExample:"synchronized(objA) { synchronized(objB) { objA.wait(); // Releases only objA! } }"}];function y(){return e.jsxs("div",{className:"space-y-12 px-4 md:px-8 py-8 text-slate-200 bg-slate-900 min-h-screen",children:[e.jsxs("header",{className:"space-y-4 border-b border-slate-800 pb-6",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"px-3 py-1 bg-sky-500/10 text-sky-400 border border-sky-500/20 text-xs font-semibold rounded-full uppercase tracking-wider",children:"Module 008_004 · Topic 2"}),e.jsx("span",{className:"px-3 py-1 bg-purple-500/10 text-purple-400 border border-purple-500/20 text-xs font-semibold rounded-full",children:"OOP Design Architecture"})]}),e.jsxs("h1",{className:"text-xl sm:text-2xl md:text-3xl font-bold text-white tracking-tight",children:["Why ",e.jsx("code",{className:"text-emerald-400 font-mono",children:"wait()"})," & ",e.jsx("code",{className:"text-sky-400 font-mono",children:"notify()"})," Belong to ",e.jsx("code",{className:"text-purple-400 font-mono",children:"java.lang.Object"})]}),e.jsx("p",{className:"text-base md:text-lg text-slate-400 leading-relaxed max-w-4xl",children:"Uncover JVM architectural design decisions: analyzing why intrinsic locks and Wait Sets belong to heap objects rather than thread execution stacks."})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsxs("h2",{className:"text-2xl font-bold text-emerald-400 flex items-center gap-2",children:[e.jsx("span",{children:"💻"})," Hands-On Java Demo Code"]}),e.jsx(t,{fileModule:i,title:"WhyWaitNotifyInObjectNotThreadDemo.java",highlightLines:[7,10,13,14,15,16,17,18,22,23]})]}),e.jsx("section",{className:"space-y-4",children:e.jsx(n,{title:"Why wait/notify in Object FAQs",questions:r})}),e.jsx("section",{className:"space-y-4",children:e.jsx(a,{content:s,title:"Module 008_004 Topic 2: Why wait/notify are in Object",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Printable Note",downloadFileName:"008_004_topic2_why_wait_notify_in_object_note.txt"})}),e.jsx(o,{note:"This is one of the all-time favorite Java interview questions! The answer is simple: 'Locks belong to objects, not threads! If a thread holds 3 different locks, calling objA.wait() tells Java exactly which lock to release!' — Sukanta Hui"})]})}export{y as default};
