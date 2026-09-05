import{j as n}from"./vendor-react-core-Doz9nIC6.js";import{J as e}from"./JavaFileLoader-BfBG3xz_.js";import{F as r}from"./FAQTemplate-BHhlgA96.js";import{P as t}from"./PlainTextPrint-C08xhKA4.js";import{T as a}from"./TeacherSukantaHui-DerPxfxp.js";import"./JavaCodeBlock-BwsLxS3r.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-CH1iX9C8.js";const o=`/**\r
 * Java Core Tutorial - Module 008_009: Virtual Threads (Java 21+ Project Loom)\r
 * Topic 12: The Thread Pinning Pitfall: synchronized Blocks vs ReentrantLock\r
 * Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
 */\r
\r
package com.coderaccotax.javatutorial.virtualthreads;\r
\r
import java.util.concurrent.locks.Lock;\r
import java.util.concurrent.locks.ReentrantLock;\r
\r
public class ThreadPinningPitfallDemo {\r
\r
    private static final Object MONITOR_LOCK = new Object();\r
    private static final Lock EXPLICIT_LOCK = new ReentrantLock();\r
\r
    // 1. THE PINNING PITFALL (BAD PRACTICE IN VIRTUAL THREADS):\r
    public static void pinnedMethod() {\r
        synchronized (MONITOR_LOCK) {\r
            // If a blocking I/O operation occurs inside a 'synchronized' block,\r
            // the Virtual Thread is PINNED to its OS Carrier Thread and CANNOT unmount!\r
            // Result: The underlying OS Carrier Thread is FROZEN!\r
            try { Thread.sleep(100); } catch (InterruptedException ignored) {}\r
        }\r
    }\r
\r
    // 2. THE PINNING-SAFE SOLUTION (BEST PRACTICE IN JAVA 21):\r
    public static void pinningSafeMethod() {\r
        EXPLICIT_LOCK.lock();\r
        try {\r
            // ReentrantLock is fully Loom-aware!\r
            // The Virtual Thread unmounts cleanly even when holding a ReentrantLock!\r
            try { Thread.sleep(100); } catch (InterruptedException ignored) {}\r
        } finally {\r
            EXPLICIT_LOCK.unlock();\r
        }\r
    }\r
\r
    public static void main(String[] args) {\r
        System.out.println("==========================================================================");\r
        System.out.println(" TOPIC 12: THREAD PINNING & ReentrantLock REMEDY - BARRACKPORE");\r
        System.out.println("==========================================================================\\n");\r
\r
        System.out.println(">>> WHAT IS THREAD PINNING?");\r
        System.out.println("  - Pinning occurs when a Virtual Thread executes blocking I/O while:");\r
        System.out.println("    1. Inside a 'synchronized' block / method, OR");\r
        System.out.println("    2. Inside a native method / foreign function call (JNI / C-library).");\r
        System.out.println();\r
        System.out.println(">>> THE CONSEQUENCE OF PINNING:");\r
        System.out.println("  - The JVM cannot unmount the virtual thread; the OS Carrier Thread is blocked!");\r
        System.out.println("  - If 16 virtual threads are pinned, all 16 OS carrier threads freeze, stalling the JVM!");\r
        System.out.println();\r
        System.out.println(">>> THE INDUSTRY SOLUTION: REPLACE 'synchronized' WITH 'ReentrantLock'!");\r
\r
        System.out.println("\\n==========================================================================");\r
    }\r
}`,i=`================================================================================\r
JAVA CORE TUTORIAL - QUICK REVISION GUIDE\r
Module 008_009: Virtual Threads (Java 21+)\r
Topic 12: Thread Pinning Pitfall\r
Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
================================================================================\r
\r
1. THREAD PINNING:\r
   - What: Virtual Thread cannot unmount during blocking I/O.\r
   - Causes: 'synchronized' blocks or JNI Native C methods.\r
   - Consequence: Freezes physical OS carrier threads.\r
   - Diagnostic Flag: '-Djdk.tracePinnedThreads=full'.\r
   - Fix: Replace 'synchronized' with 'ReentrantLock'!\r
\r
================================================================================\r
Classroom Practice: Barrackpore Academy | Mentor: Sukanta Hui\r
================================================================================`,s=[{question:"What is 'Thread Pinning' in Java 21 Virtual Threads, what causes it, and how is it resolved?",shortAnswer:"'Thread Pinning' occurs when a Virtual Thread performs a blocking I/O operation but is unable to unmount from its underlying OS Carrier Thread because its call stack contains: (1) an intrinsic 'synchronized' block/method, or (2) a Native method (JNI/C call). When pinned, the underlying OS Carrier Thread is frozen for the entire duration of the I/O, exhausting the carrier pool. It is resolved by refactoring legacy 'synchronized' blocks to use 'java.util.concurrent.locks.ReentrantLock', which was completely rewritten in Java 21 to support seamless unmounting.",explanation:"Number one production performance gotcha when adopting Virtual Threads in Java 21.",hint:"Occurs when blocking I/O runs inside synchronized or native methods; resolved by replacing synchronized with ReentrantLock.",level:"Advanced",codeExample:"// Replace: synchronized(lock) { doIo(); } → With: reentrantLock.lock(); try { doIo(); } finally { reentrantLock.unlock(); }"}];function x(){return n.jsxs("div",{className:"space-y-12 px-4 md:px-8 py-8 text-slate-200 bg-slate-900 min-h-screen",children:[n.jsxs("header",{className:"space-y-4 border-b border-slate-800 pb-6",children:[n.jsxs("div",{className:"flex items-center gap-3",children:[n.jsx("span",{className:"px-3 py-1 bg-sky-500/10 text-sky-400 border border-sky-500/20 text-xs font-semibold rounded-full uppercase tracking-wider",children:"Module 008_009 · Topic 12"}),n.jsx("span",{className:"px-3 py-1 bg-rose-500/10 text-rose-400 border border-rose-500/20 text-xs font-semibold rounded-full",children:"Thread Pinning Pitfall"})]}),n.jsxs("h1",{className:"text-xl sm:text-2xl md:text-3xl font-bold text-white tracking-tight",children:["The ",n.jsx("code",{className:"text-rose-400 font-mono",children:"Thread Pinning"})," Pitfall: ",n.jsx("code",{className:"text-amber-400 font-mono",children:"synchronized"})," vs ",n.jsx("code",{className:"text-emerald-400 font-mono",children:"ReentrantLock"})]}),n.jsxs("p",{className:"text-base md:text-lg text-slate-400 leading-relaxed max-w-4xl",children:["Identify production concurrency traps: diagnosing carrier thread pinning inside ",n.jsx("code",{className:"text-rose-300 font-mono",children:"synchronized"})," blocks and migrating to unmount-safe ",n.jsx("code",{className:"text-emerald-300 font-mono",children:"ReentrantLock"})," synchronization."]})]}),n.jsxs("section",{className:"space-y-4",children:[n.jsxs("h2",{className:"text-2xl font-bold text-emerald-400 flex items-center gap-2",children:[n.jsx("span",{children:"💻"})," Hands-On Java Demo Code"]}),n.jsx(e,{fileModule:o,title:"ThreadPinningPitfallDemo.java",highlightLines:[7,10,15,16,17,24,25,26,30,31]})]}),n.jsx("section",{className:"space-y-4",children:n.jsx(r,{title:"Thread Pinning FAQs",questions:s})}),n.jsx("section",{className:"space-y-4",children:n.jsx(t,{content:i,title:"Module 008_009 Topic 12: Thread Pinning Pitfall",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Printable Note",downloadFileName:"008_009_topic12_thread_pinning_pitfall_note.txt"})}),n.jsx(a,{note:"If you migrate an app to Java 21 Virtual Threads and your performance slows down, check for Pinning! If you have blocking database calls inside old 'synchronized' methods, the thread is pinned and cannot unmount! Replace 'synchronized' with 'ReentrantLock' and watch it fly! — Sukanta Hui"})]})}export{x as default};
