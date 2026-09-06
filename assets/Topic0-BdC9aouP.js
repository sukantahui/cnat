import{j as t}from"./vendor-react-core-Doz9nIC6.js";import{J as e}from"./JavaFileLoader-BfBG3xz_.js";import{F as n}from"./FAQTemplate-BHhlgA96.js";import{P as o}from"./PlainTextPrint-C08xhKA4.js";import{T as i}from"./TeacherSukantaHui-DDN87fI5.js";import"./JavaCodeBlock-BwsLxS3r.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-DEsnU7fn.js";const r=`/**\r
 * Java Core Tutorial - Module 008_008: Explicit Locks & Synchronizers\r
 * Topic 0: The 4 Major Limitations of Intrinsic 'synchronized' Monitor Locks\r
 * Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
 */\r
\r
package com.coderaccotax.javatutorial.multithreading;\r
\r
public class SynchronizedLimitationsOverviewDemo {\r
\r
    public static void main(String[] args) {\r
        System.out.println("==========================================================================");\r
        System.out.println(" TOPIC 0: LIMITATIONS OF INTRINSIC synchronized - BARRACKPORE");\r
        System.out.println("==========================================================================\\n");\r
\r
        System.out.println(">>> THE 4 CRITICAL LIMITATIONS OF JAVA'S BUILT-IN 'synchronized' KEYWORD:");\r
        System.out.println();\r
        System.out.println("  1. No Timed Lock Acquisition (Cannot Timeout):");\r
        System.out.println("     - If a lock is held by another thread, 'synchronized' blocks INDEFINITELY.");\r
        System.out.println("     - You cannot specify: 'Wait 500 ms for the lock, then abort'.");\r
        System.out.println();\r
        System.out.println("  2. Non-Interruptible Blocking (Cannot Cancel):");\r
        System.out.println("     - A thread blocked waiting to enter a 'synchronized' block CANNOT be cancelled or interrupted!");\r
        System.out.println("     - 'Thread.interrupt()' is completely ignored while waiting for monitor entry.");\r
        System.out.println();\r
        System.out.println("  3. No Non-Blocking Availability Test (tryLock):");\r
        System.out.println("     - You cannot check: 'Is this lock currently available? If yes grab it, if not do something else'.");\r
        System.out.println();\r
        System.out.println("  4. Single Monolithic Wait-Set Per Object:");\r
        System.out.println("     - An object has only ONE wait-set; 'notifyAll()' wakes up BOTH producers and consumers together!");\r
        System.out.println();\r
        System.out.println(">>> THE SOLUTION: java.util.concurrent.locks.Lock (ReentrantLock)!");\r
\r
        System.out.println("\\n==========================================================================");\r
    }\r
}`,s=`================================================================================\r
JAVA CORE TUTORIAL - QUICK REVISION GUIDE\r
Module 008_008: Explicit Locks & Synchronizers\r
Topic 0: Limitations of synchronized\r
Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
================================================================================\r
\r
1. LIMITATIONS OF SYNCHRONIZED:\r
   - 1. No Timeout: Blocks forever.\r
   - 2. Uninterruptible: Ignores 'Thread.interrupt()' during monitor acquisition.\r
   - 3. No Polling: Cannot test availability without blocking.\r
   - 4. Single Wait-Set: Causes signal thrashing between producers/consumers.\r
   - Replaced by: 'java.util.concurrent.locks.ReentrantLock' and 'Condition'.\r
\r
================================================================================\r
Classroom Practice: Barrackpore Academy | Mentor: Sukanta Hui\r
================================================================================`,a=[{question:"What are the 4 fundamental limitations of Java's intrinsic 'synchronized' keyword that motivated explicit 'java.util.concurrent.locks'?",shortAnswer:"1. 'No Timeouts': 'synchronized' blocks cannot time out; a thread waits forever if the lock is never freed. 2. 'Uninterruptible': A thread blocked on monitor entry cannot be interrupted via 'Thread.interrupt()'. 3. 'No Non-Blocking Polling': There is no way to test if a lock is free without blocking ('tryLock()'). 4. 'Single Wait-Set': Every object has only one monitor wait-set, meaning 'notifyAll()' must wake up all waiting threads (e.g. both producers and consumers), causing signal thrashing. Explicit 'Lock' and 'Condition' resolve all four flaws.",explanation:"Core justification for the JSR-166 Lock framework.",hint:"Cannot timeout, cannot interrupt, cannot test availability with tryLock, and has only 1 wait-set.",level:"Intermediate",codeExample:"// synchronized: blocks indefinitely; Lock: supports tryLock(500, TimeUnit.MILLISECONDS)"}];function x(){return t.jsxs("div",{className:"space-y-12 px-4 md:px-8 py-8 text-slate-200 bg-slate-900 min-h-screen",children:[t.jsxs("header",{className:"space-y-4 border-b border-slate-800 pb-6",children:[t.jsxs("div",{className:"flex items-center gap-3",children:[t.jsx("span",{className:"px-3 py-1 bg-sky-500/10 text-sky-400 border border-sky-500/20 text-xs font-semibold rounded-full uppercase tracking-wider",children:"Module 008_008 · Topic 0"}),t.jsx("span",{className:"px-3 py-1 bg-rose-500/10 text-rose-400 border border-rose-500/20 text-xs font-semibold rounded-full",children:"synchronized Limitations"})]}),t.jsxs("h1",{className:"text-xl sm:text-2xl md:text-3xl font-bold text-white tracking-tight",children:["Limitations of ",t.jsx("code",{className:"text-rose-400 font-mono",children:"synchronized"}),": Why Explicit Locks Were Born"]}),t.jsxs("p",{className:"text-base md:text-lg text-slate-400 leading-relaxed max-w-4xl",children:["Identify monitor locking bottlenecks: examining the lack of timeouts, uninterruptible blocking states, single wait-sets, and the motivation for ",t.jsx("code",{className:"text-emerald-300 font-mono",children:"java.util.concurrent.locks"}),"."]})]}),t.jsxs("section",{className:"space-y-4",children:[t.jsxs("h2",{className:"text-2xl font-bold text-emerald-400 flex items-center gap-2",children:[t.jsx("span",{children:"💻"})," Hands-On Java Demo Code"]}),t.jsx(e,{fileModule:r,title:"SynchronizedLimitationsOverviewDemo.java",highlightLines:[7,10,13,14,18,19,23,24,28,29]})]}),t.jsx("section",{className:"space-y-4",children:t.jsx(n,{title:"synchronized Limitations FAQs",questions:a})}),t.jsx("section",{className:"space-y-4",children:t.jsx(o,{content:s,title:"Module 008_008 Topic 0: synchronized Limitations",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Printable Note",downloadFileName:"008_008_topic0_synchronized_limitations_note.txt"})}),t.jsx(i,{note:"'synchronized' was built into Java 1.0, but it is rigid: if a thread is waiting at the door, it can never give up, never time out, and never be interrupted! Explicit Locks give you full steering control! — Sukanta Hui"})]})}export{x as default};
