import{j as e}from"./vendor-react-core-Doz9nIC6.js";import{J as n}from"./JavaFileLoader-BfBG3xz_.js";import{F as t}from"./FAQTemplate-BHhlgA96.js";import{P as a}from"./PlainTextPrint-C08xhKA4.js";import{T as r}from"./TeacherSukantaHui-CEPuAfsb.js";import"./JavaCodeBlock-BwsLxS3r.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-DGCamHnX.js";const o=`/**\r
 * Java Core Tutorial - Module 008_004: Inter-Thread Communication & Producer-Consumer\r
 * Topic 8: Spurious Wakeups: POSIX Kernel Realities & Why Threads Wake Spontaneously\r
 * Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
 */\r
\r
package com.coderaccotax.javatutorial.multithreading;\r
\r
public class SpuriousWakeupsMechanismDemo {\r
\r
    public static void main(String[] args) {\r
        System.out.println("==========================================================================");\r
        System.out.println(" TOPIC 8: SPURIOUS WAKEUPS MECHANICS & POSIX SIGNALS - BARRACKPORE");\r
        System.out.println("==========================================================================\\n");\r
\r
        System.out.println(">>> WHAT IS A 'SPURIOUS WAKEUP'?");\r
        System.out.println("  - A Spurious Wakeup occurs when a waiting thread wakes up from 'wait()' WITHOUT any thread having called 'notify()' or 'notifyAll()', and without being interrupted or timing out!");\r
        System.out.println();\r
        System.out.println(">>> WHY DO SPURIOUS WAKEUPS OCCUR IN MODERN COMPUTERS?");\r
        System.out.println("  1. OS Kernel Design (POSIX Threads / Windows Kernel):");\r
        System.out.println("     - On Linux/Unix (pthreads) and Windows, low-level OS condition variables can experience spurious wakeups due to kernel interrupt handlers, context switch optimizations, or multi-core CPU signal broadcasts.");\r
        System.out.println("     - Eliminating spurious wakeups at the OS kernel level would cause severe performance penalties on multi-core hardware.");\r
        System.out.println("  2. Java Specification Guarantee:");\r
        System.out.println("     - Java Memory Model explicitly permits spurious wakeups.");\r
        System.out.println("     - Programmers MUST assume spurious wakeups CAN AND WILL HAPPEN!");\r
        System.out.println();\r
        System.out.println(">>> HOW TO DEFEND AGAINST SPURIOUS WAKEUPS (THE IMMUTABLE LAW):");\r
        System.out.println("  - ALWAYS check the condition inside a 'while' loop:");\r
        System.out.println("    while (!conditionReady) {");\r
        System.out.println("        lock.wait(); // If spurious wakeup happens, loop re-evaluates condition and goes back to sleep!");\r
        System.out.println("    }");\r
\r
        System.out.println("\\n==========================================================================");\r
    }\r
}`,i=`================================================================================\r
JAVA CORE TUTORIAL - QUICK REVISION GUIDE\r
Module 008_004: Inter-Thread Communication & Producer-Consumer\r
Topic 8: Spurious Wakeups\r
Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
================================================================================\r
\r
1. SPURIOUS WAKEUPS:\r
   - Thread wakes from 'wait()' without notify() or interrupt.\r
   - Caused by low-level OS kernel signal handling (POSIX pthreads).\r
   - Explicitly allowed by Java Language Specification.\r
   - Defense: ALWAYS wrap 'wait()' in a 'while' loop.\r
\r
================================================================================\r
Classroom Practice: Barrackpore Academy | Mentor: Sukanta Hui\r
================================================================================`,s=[{question:"What is a 'Spurious Wakeup' and why does the Java Memory Model allow it?",shortAnswer:"A 'Spurious Wakeup' is when a thread wakes up from 'wait()' without any corresponding 'notify()' or 'notifyAll()' invocation, timeout, or interruption. It occurs because underlying Operating System kernel threading implementations (like POSIX pthreads on Linux/macOS and Windows condition variables) allow spontaneous wakeups to optimize low-level multi-core hardware context switches and avoid expensive kernel synchronization. The Java Language Specification explicitly permits spurious wakeups, mandating that developers always enclose 'wait()' inside a 'while' condition loop.",explanation:"Core Java Concurrency / OS condition variable specification.",hint:"OS kernel condition variables can wake threads spontaneously; always guard with a while loop.",level:"Advanced",codeExample:"while (!condition) { obj.wait(); } // Immune to spurious wakeups!"}];function x(){return e.jsxs("div",{className:"space-y-12 px-4 md:px-8 py-8 text-slate-200 bg-slate-900 min-h-screen",children:[e.jsxs("header",{className:"space-y-4 border-b border-slate-800 pb-6",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"px-3 py-1 bg-sky-500/10 text-sky-400 border border-sky-500/20 text-xs font-semibold rounded-full uppercase tracking-wider",children:"Module 008_004 · Topic 8"}),e.jsx("span",{className:"px-3 py-1 bg-purple-500/10 text-purple-400 border border-purple-500/20 text-xs font-semibold rounded-full",children:"Spurious Wakeups"})]}),e.jsxs("h1",{className:"text-xl sm:text-2xl md:text-3xl font-bold text-white tracking-tight",children:[e.jsx("code",{className:"text-purple-400 font-mono",children:"Spurious Wakeups"}),": POSIX Kernel Realities & Spontaneous Wakeups"]}),e.jsx("p",{className:"text-base md:text-lg text-slate-400 leading-relaxed max-w-4xl",children:"Examine low-level OS threading quirks: discovering why POSIX kernel condition variables wake threads spontaneously and understanding the mandatory architectural defense."})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsxs("h2",{className:"text-2xl font-bold text-emerald-400 flex items-center gap-2",children:[e.jsx("span",{children:"💻"})," Hands-On Java Demo Code"]}),e.jsx(n,{fileModule:o,title:"SpuriousWakeupsMechanismDemo.java",highlightLines:[7,10,13,14,18,19,20,26,27,28]})]}),e.jsx("section",{className:"space-y-4",children:e.jsx(t,{title:"Spurious Wakeups FAQs",questions:s})}),e.jsx("section",{className:"space-y-4",children:e.jsx(a,{content:i,title:"Module 008_004 Topic 8: Spurious Wakeups",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Printable Note",downloadFileName:"008_004_topic8_spurious_wakeups_note.txt"})}),e.jsx(r,{note:"Sometimes the operating system wakes up a sleeping thread for no reason at all (a Spurious Wakeup)! If you used an 'if' statement, your thread would wake up and read corrupt data! But if you used a 'while' loop, your thread sees that data isn't ready and goes right back to sleep! — Sukanta Hui"})]})}export{x as default};
