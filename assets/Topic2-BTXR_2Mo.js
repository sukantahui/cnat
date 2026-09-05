import{j as e}from"./vendor-react-core-Doz9nIC6.js";import{J as t}from"./JavaFileLoader-BfBG3xz_.js";import{F as n}from"./FAQTemplate-BHhlgA96.js";import{P as a}from"./PlainTextPrint-C08xhKA4.js";import{T as i}from"./TeacherSukantaHui-DerPxfxp.js";import"./JavaCodeBlock-BwsLxS3r.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-CH1iX9C8.js";const r=`/**\r
 * Java Core Tutorial - Module 008_003: Thread Synchronization & Locks\r
 * Topic 2: The Critical Section Concept & Mutual Exclusion (Mutex)\r
 * Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
 */\r
\r
package com.coderaccotax.javatutorial.multithreading;\r
\r
public class CriticalSectionAndMutexConceptDemo {\r
\r
    public static void main(String[] args) {\r
        System.out.println("==========================================================================");\r
        System.out.println(" TOPIC 2: CRITICAL SECTION & MUTUAL EXCLUSION (MUTEX) - BARRACKPORE");\r
        System.out.println("==========================================================================\\n");\r
\r
        System.out.println(">>> WHAT IS A 'CRITICAL SECTION'?");\r
        System.out.println("  - A Critical Section is a block of code that accesses shared mutable resources (e.g. balance, shared file, database connection).");\r
        System.out.println("  - Fundamental Law: Exactly ONE thread must execute inside the Critical Section at any given time!");\r
        System.out.println();\r
        System.out.println(">>> THE 3 GOLDEN REQUIREMENTS OF MUTUAL EXCLUSION (Dijkstra):");\r
        System.out.println("  1. Mutual Exclusion : If Thread A is executing in the critical section, no other threads can enter.");\r
        System.out.println("  2. Progress         : If no thread is in the critical section, any thread that requests entry must be allowed in without indefinite delay.");\r
        System.out.println("  3. Bounded Waiting  : A thread must not wait indefinitely to enter; there must be a limit on the number of times other threads can enter ahead of it.");\r
        System.out.println();\r
        System.out.println(">>> HOW JAVA ENFORCES MUTUAL EXCLUSION:");\r
        System.out.println("  - Java implements Mutual Exclusion using the 'synchronized' keyword, backed by JVM Intrinsic Object Monitors (Lock acquisition & release).");\r
\r
        System.out.println("\\n==========================================================================");\r
    }\r
}`,s=`================================================================================\r
JAVA CORE TUTORIAL - QUICK REVISION GUIDE\r
Module 008_003: Thread Synchronization & Locks\r
Topic 2: Critical Section & Mutex\r
Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
================================================================================\r
\r
1. CRITICAL SECTION:\r
   - Code block accessing shared mutable resources.\r
   - Must be executed with Mutual Exclusion (Mutex).\r
   - Dijkstra's 3 rules: Mutual Exclusion, Progress, Bounded Waiting.\r
   - Java enforces this via 'synchronized' blocks and explicit locks.\r
\r
================================================================================\r
Classroom Practice: Barrackpore Academy | Mentor: Sukanta Hui\r
================================================================================`,o=[{question:"What is a 'Critical Section' and what are the 3 classical requirements of Mutual Exclusion defined in computer science?",shortAnswer:"A 'Critical Section' is a segment of code that accesses shared mutable resources and cannot be executed concurrently by more than one thread without risking data corruption. The 3 classical requirements (formulated by Edsger Dijkstra) are: 1. 'Mutual Exclusion' (only 1 thread can be inside at any time), 2. 'Progress' (threads seeking entry are not indefinitely delayed if section is free), 3. 'Bounded Waiting' (a limit exists on how many times others can enter before a waiting thread is granted access).",explanation:"Fundamental operating systems and concurrency theory principle.",hint:"Critical section accesses shared mutable state; requires Mutual Exclusion, Progress, and Bounded Waiting.",level:"Intermediate",codeExample:"// Critical Section protected by Mutex: synchronized(mutex) { sharedState.update(); }"}];function y(){return e.jsxs("div",{className:"space-y-12 px-4 md:px-8 py-8 text-slate-200 bg-slate-900 min-h-screen",children:[e.jsxs("header",{className:"space-y-4 border-b border-slate-800 pb-6",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"px-3 py-1 bg-sky-500/10 text-sky-400 border border-sky-500/20 text-xs font-semibold rounded-full uppercase tracking-wider",children:"Module 008_003 · Topic 2"}),e.jsx("span",{className:"px-3 py-1 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-xs font-semibold rounded-full",children:"Critical Section & Mutex"})]}),e.jsxs("h1",{className:"text-xl sm:text-2xl md:text-3xl font-bold text-white tracking-tight",children:["The ",e.jsx("code",{className:"text-emerald-400 font-mono",children:"Critical Section"})," Concept & Mutual Exclusion (",e.jsx("code",{className:"text-purple-400 font-mono",children:"Mutex"}),")"]}),e.jsxs("p",{className:"text-base md:text-lg text-slate-400 leading-relaxed max-w-4xl",children:["Master concurrency foundations: analyzing Dijkstra's 3 laws of Mutual Exclusion (",e.jsx("code",{className:"text-emerald-300 font-mono",children:"Mutex"}),", ",e.jsx("code",{className:"text-sky-300 font-mono",children:"Progress"}),", ",e.jsx("code",{className:"text-amber-300 font-mono",children:"Bounded Waiting"}),") and demarcating thread-safe critical boundaries."]})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsxs("h2",{className:"text-2xl font-bold text-emerald-400 flex items-center gap-2",children:[e.jsx("span",{children:"💻"})," Hands-On Java Demo Code"]}),e.jsx(t,{fileModule:r,title:"CriticalSectionAndMutexConceptDemo.java",highlightLines:[7,10,13,14,18,19,20,24,25]})]}),e.jsx("section",{className:"space-y-4",children:e.jsx(n,{title:"Critical Section FAQs",questions:o})}),e.jsx("section",{className:"space-y-4",children:e.jsx(a,{content:s,title:"Module 008_003 Topic 2: Critical Section and Mutex",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Printable Note",downloadFileName:"008_003_topic2_critical_section_and_mutex_note.txt"})}),e.jsx(i,{note:"Think of a Critical Section like a single-person fitting room in a clothing store: only one customer can be inside at a time! When customer 1 is inside, customer 2 must wait outside! This is the essence of Mutual Exclusion! — Sukanta Hui"})]})}export{y as default};
