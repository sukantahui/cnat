import{j as e}from"./vendor-react-core-Doz9nIC6.js";import{J as t}from"./JavaFileLoader-BfBG3xz_.js";import{F as n}from"./FAQTemplate-CkSqDH4B.js";import{P as o}from"./PlainTextPrint-C08xhKA4.js";import{T as r}from"./TeacherSukantaHui-CyIG3xbg.js";import"./JavaCodeBlock-BwsLxS3r.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-CIaKtAt4.js";const a=`/**\r
 * Java Core Tutorial - Module 008_005: Thread Safety & Deadlocks\r
 * Topic 6: Coffman Condition 3: No Preemption & Explicit Voluntary Release\r
 * Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
 */\r
\r
package com.coderaccotax.javatutorial.multithreading;\r
\r
import java.util.concurrent.locks.ReentrantLock;\r
\r
public class Coffman3NoPreemptionDeepDiveDemo {\r
\r
    public static void main(String[] args) {\r
        System.out.println("==========================================================================");\r
        System.out.println(" TOPIC 6: COFFMAN CONDITION 3: NO PREEMPTION - BARRACKPORE");\r
        System.out.println("==========================================================================\\n");\r
\r
        System.out.println(">>> 1. WHAT IS 'NO PREEMPTION'?");\r
        System.out.println("  - 'No Preemption' means a lock held by Thread A CANNOT be forcibly taken away or stolen by Thread B or the JVM runtime.");\r
        System.out.println("  - The lock can ONLY be released voluntarily by the thread that originally acquired it (when exiting 'synchronized' or calling 'unlock()').");\r
        System.out.println();\r
        System.out.println(">>> 2. WHY JAVA INTRINSIC 'synchronized' ENFORCES NO PREEMPTION:");\r
        System.out.println("  - Java prevents lock theft to protect data integrity (if a lock was stolen mid-mutation, memory would be corrupted!).");\r
        System.out.println("  - Downside: If a thread blocks indefinitely while holding a lock, no one can rescue the system!");\r
        System.out.println();\r
        System.out.println(">>> 3. HOW TO BREAK NO PREEMPTION SAFELY:");\r
        System.out.println("  - Use 'java.util.concurrent.locks.Lock.tryLock(timeout, unit)':");\r
        System.out.println("    * If a thread cannot acquire the second lock within 500 ms, it gives up, RELEASES its own first lock voluntarily, and backs off!");\r
\r
        System.out.println("\\n==========================================================================");\r
    }\r
}`,i=`================================================================================\r
JAVA CORE TUTORIAL - QUICK REVISION GUIDE\r
Module 008_005: Thread Safety & Deadlocks\r
Topic 6: No Preemption Deep Dive\r
Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
================================================================================\r
\r
1. COFFMAN 3: NO PREEMPTION:\r
   - Locks cannot be stolen by force from the holding thread.\r
   - Intrinsic 'synchronized' has NO timeout and cannot be preempted.\r
   - Broken by: 'ReentrantLock.tryLock(timeout)' with voluntary back-off.\r
\r
================================================================================\r
Classroom Practice: Barrackpore Academy | Mentor: Sukanta Hui\r
================================================================================`,s=[{question:"What does the 'No Preemption' Coffman condition mean, and how does 'ReentrantLock.tryLock()' allow applications to bypass it safely?",shortAnswer:"'No Preemption' means that once a thread acquires a lock, neither another thread nor the JVM can forcefully seize or confiscate that lock; only the holding thread can release it voluntarily. With Java's intrinsic 'synchronized' keyword, threads block unconditionally until the lock is freed. 'ReentrantLock.tryLock(timeout)' bypasses this limitation by enabling cooperative back-off: if a thread cannot acquire a secondary lock within a timeout period, it voluntarily yields and releases its currently held locks, breaking the deadlock precondition.",explanation:"Third Coffman condition analysis and cooperative lock back-off pattern.",hint:"Locks cannot be stolen by force; tryLock() allows cooperative voluntary release on timeout.",level:"Intermediate",codeExample:"if (lock2.tryLock(500, TimeUnit.MILLISECONDS)) { ... } else { lock1.unlock(); // Back off! }"}];function k(){return e.jsxs("div",{className:"space-y-12 px-4 md:px-8 py-8 text-slate-200 bg-slate-900 min-h-screen",children:[e.jsxs("header",{className:"space-y-4 border-b border-slate-800 pb-6",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"px-3 py-1 bg-sky-500/10 text-sky-400 border border-sky-500/20 text-xs font-semibold rounded-full uppercase tracking-wider",children:"Module 008_005 · Topic 6"}),e.jsx("span",{className:"px-3 py-1 bg-purple-500/10 text-purple-400 border border-purple-500/20 text-xs font-semibold rounded-full",children:"Coffman 3: No Preemption"})]}),e.jsxs("h1",{className:"text-3xl md:text-4xl font-extrabold text-white tracking-tight",children:["Coffman Condition 3: ",e.jsx("code",{className:"text-purple-400 font-mono",children:"No Preemption"})," (Unconfiscated Lock Ownership)"]}),e.jsxs("p",{className:"text-base md:text-lg text-slate-400 leading-relaxed max-w-4xl",children:["Analyze lock retention immutability: understanding why JVM monitors forbid forced lock revocation and mastering cooperative back-off via ",e.jsx("code",{className:"text-emerald-300 font-mono",children:"tryLock()"})," timeouts."]})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsxs("h2",{className:"text-2xl font-bold text-emerald-400 flex items-center gap-2",children:[e.jsx("span",{children:"💻"})," Hands-On Java Demo Code"]}),e.jsx(t,{fileModule:a,title:"Coffman3NoPreemptionDeepDiveDemo.java",highlightLines:[7,10,13,14,18,19,23,24]})]}),e.jsx("section",{className:"space-y-4",children:e.jsx(n,{title:"No Preemption FAQs",questions:s})}),e.jsx("section",{className:"space-y-4",children:e.jsx(o,{content:i,title:"Module 008_005 Topic 6: No Preemption",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Printable Note",downloadFileName:"008_005_topic6_no_preemption_note.txt"})}),e.jsx(r,{note:"'No Preemption' means the JVM will never wrestle a lock out of a thread's hands! If thread A is holding a lock, it keeps it until it chooses to release it! That's why we use 'tryLock()' so threads can voluntarily release their locks if they get stuck! — Sukanta Hui"})]})}export{k as default};
