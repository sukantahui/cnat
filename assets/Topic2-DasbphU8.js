import{j as e}from"./vendor-react-core-Doz9nIC6.js";import{J as t}from"./JavaFileLoader-BfBG3xz_.js";import{F as a}from"./FAQTemplate-BHhlgA96.js";import{P as r}from"./PlainTextPrint-C08xhKA4.js";import{T as n}from"./TeacherSukantaHui-DDN87fI5.js";import"./JavaCodeBlock-BwsLxS3r.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-DEsnU7fn.js";const o=`/**\r
 * Java Core Tutorial - Module 008_005: Thread Safety & Deadlocks\r
 * Topic 2: What is a Deadlock: Two Threads Permanently Blocked Waiting for Each Other\r
 * Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
 */\r
\r
package com.coderaccotax.javatutorial.multithreading;\r
\r
public class DeadlockDefinitionConceptDemo {\r
\r
    private static final Object LOCK_BARRACKPORE = new Object();\r
    private static final Object LOCK_NAIHATI = new Object();\r
\r
    public static void main(String[] args) {\r
        System.out.println("==========================================================================");\r
        System.out.println(" TOPIC 2: WHAT IS A DEADLOCK (CONCEPT & ANATOMY) - BARRACKPORE");\r
        System.out.println("==========================================================================\\n");\r
\r
        System.out.println(">>> THE CLASSICAL DEFINITION OF DEADLOCK:");\r
        System.out.println("  'A Deadlock is a situation where two or more threads are blocked forever,");\r
        System.out.println("   each waiting for a resource/lock that is held by another thread in the group.'");\r
        System.out.println();\r
        System.out.println(">>> THE DEADLOCK SCENARIO (SWADEEP vs TUHINA):");\r
        System.out.println("  1. Swadeep's Thread acquires LOCK_BARRACKPORE, then attempts to acquire LOCK_NAIHATI.");\r
        System.out.println("  2. Tuhina's Thread acquires LOCK_NAIHATI, then attempts to acquire LOCK_BARRACKPORE.");\r
        System.out.println("  3. Swadeep is holding Barrackpore waiting for Naihati.");\r
        System.out.println("  4. Tuhina is holding Naihati waiting for Barrackpore.");\r
        System.out.println("  5. Result: NEITHER THREAD CAN PROCEED! The JVM process freezes permanently in a mutual embrace!");\r
\r
        System.out.println("\\n==========================================================================");\r
    }\r
}`,s=`================================================================================\r
JAVA CORE TUTORIAL - QUICK REVISION GUIDE\r
Module 008_005: Thread Safety & Deadlocks\r
Topic 2: What is a Deadlock\r
Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
================================================================================\r
\r
1. WHAT IS DEADLOCK:\r
   - Circular dependency where 2+ threads wait forever on locks held by each other.\r
   - Deadlocked threads enter 'BLOCKED' state.\r
   - CPU usage drops to 0%, but application freezes completely.\r
   - JVM cannot resolve deadlocks automatically; process must be diagnosed or restarted.\r
\r
================================================================================\r
Classroom Practice: Barrackpore Academy | Mentor: Sukanta Hui\r
================================================================================`,i=[{question:"What is a 'Deadlock' in Java multi-threading and what state do deadlocked threads enter?",shortAnswer:"A 'Deadlock' is a permanent concurrency freeze where two or more threads are blocked indefinitely because each thread holds a lock that another thread needs, while simultaneously waiting to acquire a lock held by that other thread. Deadlocked threads enter the 'BLOCKED' state (when waiting on synchronized monitor locks) or 'WAITING' state and can never make forward progress on their own without external process termination.",explanation:"Fundamental deadlock definition in operating systems and JVM concurrency.",hint:"Permanent freeze where Thread A holds Lock 1 waiting for Lock 2, while Thread B holds Lock 2 waiting for Lock 1.",level:"Beginner",codeExample:"// Thread 1: Lock A → Lock B | Thread 2: Lock B → Lock A => Deadlock!"}];function x(){return e.jsxs("div",{className:"space-y-12 px-4 md:px-8 py-8 text-slate-200 bg-slate-900 min-h-screen",children:[e.jsxs("header",{className:"space-y-4 border-b border-slate-800 pb-6",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"px-3 py-1 bg-sky-500/10 text-sky-400 border border-sky-500/20 text-xs font-semibold rounded-full uppercase tracking-wider",children:"Module 008_005 · Topic 2"}),e.jsx("span",{className:"px-3 py-1 bg-rose-500/10 text-rose-400 border border-rose-500/20 text-xs font-semibold rounded-full",children:"Deadlock Concept"})]}),e.jsxs("h1",{className:"text-xl sm:text-2xl md:text-3xl font-bold text-white tracking-tight",children:["What is a ",e.jsx("code",{className:"text-rose-400 font-mono",children:"Deadlock"}),": Anatomy of Circular Mutual Lock Blockages"]}),e.jsxs("p",{className:"text-base md:text-lg text-slate-400 leading-relaxed max-w-4xl",children:["Uncover the deadly embrace: understanding how inverted lock acquisition orders cause multiple threads to enter permanent ",e.jsx("code",{className:"text-rose-300 font-mono",children:"BLOCKED"})," state dependencies."]})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsxs("h2",{className:"text-2xl font-bold text-emerald-400 flex items-center gap-2",children:[e.jsx("span",{children:"💻"})," Hands-On Java Demo Code"]}),e.jsx(t,{fileModule:o,title:"DeadlockDefinitionConceptDemo.java",highlightLines:[7,10,13,14,18,19,23,24,25]})]}),e.jsx("section",{className:"space-y-4",children:e.jsx(a,{title:"Deadlock Concept FAQs",questions:i})}),e.jsx("section",{className:"space-y-4",children:e.jsx(r,{content:s,title:"Module 008_005 Topic 2: What is a Deadlock",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Printable Note",downloadFileName:"008_005_topic2_deadlock_concept_note.txt"})}),e.jsx(n,{note:"Deadlock is like two stubborn people meeting in a narrow doorway: person A refuses to step back until person B steps back, and person B refuses to step back until person A steps back! Both stand frozen forever! — Sukanta Hui"})]})}export{x as default};
