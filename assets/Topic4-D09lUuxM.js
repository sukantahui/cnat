import{j as e}from"./vendor-react-core-Doz9nIC6.js";import{J as t}from"./JavaFileLoader-BfBG3xz_.js";import{F as a}from"./FAQTemplate-CkSqDH4B.js";import{P as n}from"./PlainTextPrint-C08xhKA4.js";import{T as r}from"./TeacherSukantaHui-CC0AKmkm.js";import"./JavaCodeBlock-BwsLxS3r.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-BtJHuk7w.js";const o=`/**\r
 * Java Core Tutorial - Module 008_005: Thread Safety & Deadlocks\r
 * Topic 4: Coffman Condition 1: Mutual Exclusion (Non-Shareable Locks vs Read-Locks)\r
 * Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
 */\r
\r
package com.coderaccotax.javatutorial.multithreading;\r
\r
import java.util.concurrent.locks.ReentrantReadWriteLock;\r
\r
public class Coffman1MutualExclusionDeepDiveDemo {\r
\r
    public static void main(String[] args) {\r
        System.out.println("==========================================================================");\r
        System.out.println(" TOPIC 4: COFFMAN CONDITION 1: MUTUAL EXCLUSION - BARRACKPORE");\r
        System.out.println("==========================================================================\\n");\r
\r
        System.out.println(">>> 1. WHAT IS MUTUAL EXCLUSION IN DEADLOCK FORMATION?");\r
        System.out.println("  - Mutual Exclusion means a resource can only be held by ONE thread at a time.");\r
        System.out.println("  - In Java, 'synchronized' blocks and 'ReentrantLock' enforce strict exclusive ownership.");\r
        System.out.println("  - If Thread A holds the lock, Thread B CANNOT share it and is forced to wait.");\r
        System.out.println();\r
        System.out.println(">>> 2. CAN WE BREAK MUTUAL EXCLUSION TO PREVENT DEADLOCKS?");\r
        System.out.println("  - For pure READ operations, YES! (Using 'ReentrantReadWriteLock.readLock()').");\r
        System.out.println("  - Multiple reader threads can share the read-lock SIMULTANEOUSLY without blocking each other (Zero Mutual Exclusion for readers!).");\r
        System.out.println("  - However, for WRITE operations (mutating state), Mutual Exclusion is mathematically MANDATORY to prevent data corruption!");\r
\r
        System.out.println("\\n==========================================================================");\r
    }\r
}`,s=`================================================================================\r
JAVA CORE TUTORIAL - QUICK REVISION GUIDE\r
Module 008_005: Thread Safety & Deadlocks\r
Topic 4: Mutual Exclusion Deep Dive\r
Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
================================================================================\r
\r
1. COFFMAN 1: MUTUAL EXCLUSION:\r
   - Resource held exclusively by 1 thread (non-shareable).\r
   - Java 'synchronized' enforces 100% exclusive mutex.\r
   - For write operations, mutual exclusion is essential.\r
   - For read operations, 'ReadWriteLock' allows shared concurrent access.\r
\r
================================================================================\r
Classroom Practice: Barrackpore Academy | Mentor: Sukanta Hui\r
================================================================================`,i=[{question:"Explain the 'Mutual Exclusion' Coffman condition and how ReadWriteLocks relax this condition for reader threads.",shortAnswer:"'Mutual Exclusion' states that at least one resource must be held in an exclusive, non-shareable mode by a single thread, forcing other requesting threads to block. For state-mutating operations (writes), mutual exclusion is mandatory to prevent data corruption. However, for read-only operations, 'ReentrantReadWriteLock' relaxes mutual exclusion by allowing multiple reader threads to acquire the 'readLock()' concurrently in shared mode, eliminating deadlock potential among readers.",explanation:"First Coffman condition analysis and ReadWriteLock design.",hint:"Exclusive access prevents sharing; ReadWriteLock allows concurrent sharing for readers.",level:"Intermediate",codeExample:"rwLock.readLock().lock(); // Shared read access breaks mutual exclusion for readers"}];function f(){return e.jsxs("div",{className:"space-y-12 px-4 md:px-8 py-8 text-slate-200 bg-slate-900 min-h-screen",children:[e.jsxs("header",{className:"space-y-4 border-b border-slate-800 pb-6",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"px-3 py-1 bg-sky-500/10 text-sky-400 border border-sky-500/20 text-xs font-semibold rounded-full uppercase tracking-wider",children:"Module 008_005 · Topic 4"}),e.jsx("span",{className:"px-3 py-1 bg-purple-500/10 text-purple-400 border border-purple-500/20 text-xs font-semibold rounded-full",children:"Coffman 1: Mutex"})]}),e.jsxs("h1",{className:"text-3xl md:text-4xl font-extrabold text-white tracking-tight",children:["Coffman Condition 1: ",e.jsx("code",{className:"text-purple-400 font-mono",children:"Mutual Exclusion"})," (Non-Shareable Resources)"]}),e.jsxs("p",{className:"text-base md:text-lg text-slate-400 leading-relaxed max-w-4xl",children:["Examine exclusive lock semantics: analyzing why write operations mandate mutual exclusion and how ",e.jsx("code",{className:"text-emerald-300 font-mono",children:"ReadWriteLock"})," relaxes exclusivity for concurrent readers."]})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsxs("h2",{className:"text-2xl font-bold text-emerald-400 flex items-center gap-2",children:[e.jsx("span",{children:"💻"})," Hands-On Java Demo Code"]}),e.jsx(t,{fileModule:o,title:"Coffman1MutualExclusionDeepDiveDemo.java",highlightLines:[7,10,13,14,15,18,19,20]})]}),e.jsx("section",{className:"space-y-4",children:e.jsx(a,{title:"Mutual Exclusion FAQs",questions:i})}),e.jsx("section",{className:"space-y-4",children:e.jsx(n,{content:s,title:"Module 008_005 Topic 4: Mutual Exclusion",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Printable Note",downloadFileName:"008_005_topic4_mutual_exclusion_note.txt"})}),e.jsx(r,{note:"Mutual exclusion simply means only one person can hold the microphone at a time. If everyone is just listening (reading data), multiple people can share the speaker! But when someone speaks (writes data), they need exclusive access! — Sukanta Hui"})]})}export{f as default};
