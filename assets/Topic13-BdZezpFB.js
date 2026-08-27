import{j as e}from"./vendor-react-core-Doz9nIC6.js";import{J as r}from"./JavaFileLoader-BfBG3xz_.js";import{F as t}from"./FAQTemplate-CkSqDH4B.js";import{P as i}from"./PlainTextPrint-C08xhKA4.js";import{T as n}from"./TeacherSukantaHui-CyIG3xbg.js";import"./JavaCodeBlock-BwsLxS3r.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-CIaKtAt4.js";const o=`/**\r
 * Java Core Tutorial - Module 008_001: Thread Fundamentals, Lifecycle & Creation\r
 * Topic 13: Thread Priorities (1 to 10) & OS Kernel Scheduling Realities\r
 * Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
 */\r
\r
package com.coderaccotax.javatutorial.multithreading;\r
\r
public class ThreadPrioritiesAndOsSchedulingDemo {\r
\r
    public static void main(String[] args) {\r
        System.out.println("==========================================================================");\r
        System.out.println(" TOPIC 13: THREAD PRIORITIES & OS SCHEDULER REALITIES - BARRACKPORE");\r
        System.out.println("==========================================================================\\n");\r
\r
        System.out.println(">>> THE 3 STANDARD THREAD PRIORITY CONSTANTS:");\r
        System.out.println("  Thread.MIN_PRIORITY  : " + Thread.MIN_PRIORITY + " (Lowest priority)");\r
        System.out.println("  Thread.NORM_PRIORITY : " + Thread.NORM_PRIORITY + " (Default priority)");\r
        System.out.println("  Thread.MAX_PRIORITY  : " + Thread.MAX_PRIORITY + " (Highest priority)");\r
\r
        Thread lowPriorityThread = new Thread(() -> {\r
            System.out.println("  [Low-Priority Worker] Executing background cleanup...");\r
        }, "Low-Priority-Worker");\r
\r
        Thread highPriorityThread = new Thread(() -> {\r
            System.out.println("  [High-Priority Worker] Executing real-time audit...");\r
        }, "High-Priority-Worker");\r
\r
        // Setting priorities:\r
        lowPriorityThread.setPriority(Thread.MIN_PRIORITY);   // Priority = 1\r
        highPriorityThread.setPriority(Thread.MAX_PRIORITY);  // Priority = 10\r
\r
        System.out.println("\\n>>> CONFIGURED THREAD PRIORITIES:");\r
        System.out.println("  Low Worker Priority  : " + lowPriorityThread.getPriority());\r
        System.out.println("  High Worker Priority : " + highPriorityThread.getPriority());\r
\r
        System.out.println("\\n>>> THE HARD TRUTH ABOUT THREAD PRIORITIES IN MODERN OS KERNELS:");\r
        System.out.println("  1. Platform Dependency  : Thread priorities are merely HINTS to the OS kernel scheduler. Windows, Linux, and macOS map Java's 1-10 scale differently (e.g. Linux CFS completely ignores Java priorities for non-root users!).");\r
        System.out.println("  2. Starvation Risk      : Relying on priorities for program correctness is a severe bug. Low-priority threads may starve indefinitely if high-priority threads keep running.");\r
        System.out.println("  3. Best Practice        : NEVER rely on thread priorities for business logic synchronization!");\r
\r
        System.out.println("\\n==========================================================================");\r
    }\r
}`,a=`================================================================================\r
JAVA CORE TUTORIAL - QUICK REVISION GUIDE\r
Module 008_001: Thread Fundamentals, Lifecycle & Creation\r
Topic 13: Thread Priorities & OS Scheduling\r
Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
================================================================================\r
\r
1. THREAD PRIORITIES:\r
   - Range: 1 (MIN_PRIORITY) to 10 (MAX_PRIORITY); default is 5 (NORM_PRIORITY).\r
   - Merely hints to the underlying OS thread scheduler.\r
   - OS-dependent: Linux CFS often ignores Java thread priorities.\r
   - Never use priorities to enforce execution order!\r
   - Use CountDownLatch, Semaphore, or Locks instead.\r
\r
================================================================================\r
Classroom Practice: Barrackpore Academy | Mentor: Sukanta Hui\r
================================================================================`,s=[{question:"Why is relying on 'Thread.setPriority()' considered a serious anti-pattern in cross-platform Java applications?",shortAnswer:"Thread priorities in Java (ranging from 1 to 10) are merely 'hints' to the underlying Operating System kernel scheduler. Modern OS schedulers (such as Linux Completely Fair Scheduler - CFS, Windows, and macOS) have different priority scales and policies, often ignoring Java priority levels completely for non-privileged processes. Furthermore, relying on priorities can lead to unpredictable CPU starvation bugs. Application logic should use explicit concurrency synchronizers instead of priorities.",explanation:"Standard cross-platform portability and JVM scheduling reality.",hint:"Priorities are only hints; modern OS kernels map them differently and may ignore them completely.",level:"Intermediate",codeExample:"t.setPriority(Thread.MAX_PRIORITY); // Only a hint to the OS scheduler!"}];function T(){return e.jsxs("div",{className:"space-y-12 px-4 md:px-8 py-8 text-slate-200 bg-slate-900 min-h-screen",children:[e.jsxs("header",{className:"space-y-4 border-b border-slate-800 pb-6",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"px-3 py-1 bg-sky-500/10 text-sky-400 border border-sky-500/20 text-xs font-semibold rounded-full uppercase tracking-wider",children:"Module 008_001 · Topic 13"}),e.jsx("span",{className:"px-3 py-1 bg-purple-500/10 text-purple-400 border border-purple-500/20 text-xs font-semibold rounded-full",children:"Thread Priorities"})]}),e.jsxs("h1",{className:"text-3xl md:text-4xl font-extrabold text-white tracking-tight",children:["Thread Priorities (",e.jsx("code",{className:"text-emerald-400 font-mono",children:"1 to 10"}),") & OS Kernel Scheduling Realities"]}),e.jsxs("p",{className:"text-base md:text-lg text-slate-400 leading-relaxed max-w-4xl",children:["Examine CPU scheduling mechanics: understanding priority hint constants (",e.jsx("code",{className:"text-emerald-300 font-mono",children:"MIN/NORM/MAX"}),") and analyzing why OS kernels treat priorities as non-binding hints."]})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsxs("h2",{className:"text-2xl font-bold text-emerald-400 flex items-center gap-2",children:[e.jsx("span",{children:"💻"})," Hands-On Java Demo Code"]}),e.jsx(r,{fileModule:o,title:"ThreadPrioritiesAndOsSchedulingDemo.java",highlightLines:[7,10,13,14,15,23,24,30,31,32]})]}),e.jsx("section",{className:"space-y-4",children:e.jsx(t,{title:"Thread Priorities FAQs",questions:s})}),e.jsx("section",{className:"space-y-4",children:e.jsx(i,{content:a,title:"Module 008_001 Topic 13: Thread Priorities",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Printable Note",downloadFileName:"008_001_topic13_thread_priorities_note.txt"})}),e.jsx(n,{note:"Never depend on thread priorities to make your program work! Setting a priority of 10 is only a polite suggestion to Windows or Linux; the OS scheduler can completely ignore your priority whenever it wants! — Sukanta Hui"})]})}export{T as default};
