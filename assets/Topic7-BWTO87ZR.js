import{j as e}from"./vendor-react-core-Doz9nIC6.js";import{J as r}from"./JavaFileLoader-BfBG3xz_.js";import{F as n}from"./FAQTemplate-BHhlgA96.js";import{P as t}from"./PlainTextPrint-C08xhKA4.js";import{T as a}from"./TeacherSukantaHui-DerPxfxp.js";import"./JavaCodeBlock-BwsLxS3r.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-CH1iX9C8.js";const i=`/**\r
 * Java Core Tutorial - Module 008_005: Thread Safety & Deadlocks\r
 * Topic 7: Coffman Condition 4: Circular Wait (The Closed Dependency Chain)\r
 * Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
 */\r
\r
package com.coderaccotax.javatutorial.multithreading;\r
\r
public class Coffman4CircularWaitDeepDiveDemo {\r
\r
    public static void main(String[] args) {\r
        System.out.println("==========================================================================");\r
        System.out.println(" TOPIC 7: COFFMAN CONDITION 4: CIRCULAR WAIT - BARRACKPORE");\r
        System.out.println("==========================================================================\\n");\r
\r
        System.out.println(">>> 1. WHAT IS 'CIRCULAR WAIT'?");\r
        System.out.println("  - A closed cycle of dependencies where:");\r
        System.out.println("    * Thread 1 is waiting for a lock held by Thread 2.");\r
        System.out.println("    * Thread 2 is waiting for a lock held by Thread 3.");\r
        System.out.println("    * ... and Thread N is waiting for a lock held by Thread 1!");\r
        System.out.println();\r
        System.out.println(">>> 2. THE RESOURCE ALLOCATION GRAPH (RAG) CYCLE:");\r
        System.out.println("  [Thread 1] ===(holds)===> [Lock A] <---(waits)--- [Thread 2]");\r
        System.out.println("      |                                                 ^");\r
        System.out.println("      +---(waits)---> [Lock B] <====(holds)=============+");\r
        System.out.println();\r
        System.out.println(">>> 3. WHY CIRCULAR WAIT IS THE #1 TARGET FOR DEADLOCK PREVENTION:");\r
        System.out.println("  - While breaking conditions 1, 2, or 3 can be complex or hurt performance,");\r
        System.out.println("    BREAKING CIRCULAR WAIT IS EASY, ELEGANT, AND 100% EFFECTIVE via GLOBAL LOCK ORDERING!");\r
\r
        System.out.println("\\n==========================================================================");\r
    }\r
}`,o=`================================================================================\r
JAVA CORE TUTORIAL - QUICK REVISION GUIDE\r
Module 008_005: Thread Safety & Deadlocks\r
Topic 7: Circular Wait Deep Dive\r
Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
================================================================================\r
\r
1. COFFMAN 4: CIRCULAR WAIT:\r
   - Closed loop of lock dependencies: T1 → T2 → T3 → T1.\r
   - Forms a cycle in the Resource Allocation Graph (RAG).\r
   - The primary target for deadlock prevention in industry.\r
   - Solution: Enforce strict Global Lock Ordering.\r
\r
================================================================================\r
Classroom Practice: Barrackpore Academy | Mentor: Sukanta Hui\r
================================================================================`,l=[{question:"Why is breaking 'Circular Wait' considered the gold standard for deadlock prevention in production Java applications?",shortAnswer:"Breaking Circular Wait does not require sacrificing exclusive write access (Mutual Exclusion), does not require complex all-or-nothing acquisitions (Hold and Wait), and does not require replacing simple 'synchronized' blocks with explicit lock frameworks (No Preemption). By simply enforcing a strict 'Global Lock Ordering' (e.g. always acquiring locks in ascending alphabetical or numeric ID order), cycles in the Resource Allocation Graph become mathematically impossible.",explanation:"Standard production deadlock prevention architecture.",hint:"Enforcing consistent global lock ordering eliminates cycles in the Resource Allocation Graph with zero performance penalty.",level:"Intermediate",codeExample:"// Global Order: Always lock smaller ID first → No cycle possible!"}];function y(){return e.jsxs("div",{className:"space-y-12 px-4 md:px-8 py-8 text-slate-200 bg-slate-900 min-h-screen",children:[e.jsxs("header",{className:"space-y-4 border-b border-slate-800 pb-6",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"px-3 py-1 bg-sky-500/10 text-sky-400 border border-sky-500/20 text-xs font-semibold rounded-full uppercase tracking-wider",children:"Module 008_005 · Topic 7"}),e.jsx("span",{className:"px-3 py-1 bg-purple-500/10 text-purple-400 border border-purple-500/20 text-xs font-semibold rounded-full",children:"Coffman 4: Circular Wait"})]}),e.jsxs("h1",{className:"text-xl sm:text-2xl md:text-3xl font-bold text-white tracking-tight",children:["Coffman Condition 4: ",e.jsx("code",{className:"text-purple-400 font-mono",children:"Circular Wait"})," (Resource Graph Cycles)"]}),e.jsx("p",{className:"text-base md:text-lg text-slate-400 leading-relaxed max-w-4xl",children:"Trace dependency graphs: analyzing Resource Allocation Graph (RAG) cycles and discovering why breaking circular wait via global ordering is the industry standard for deadlock immunity."})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsxs("h2",{className:"text-2xl font-bold text-emerald-400 flex items-center gap-2",children:[e.jsx("span",{children:"💻"})," Hands-On Java Demo Code"]}),e.jsx(r,{fileModule:i,title:"Coffman4CircularWaitDeepDiveDemo.java",highlightLines:[7,10,13,14,18,19,23,24]})]}),e.jsx("section",{className:"space-y-4",children:e.jsx(n,{title:"Circular Wait FAQs",questions:l})}),e.jsx("section",{className:"space-y-4",children:e.jsx(t,{content:o,title:"Module 008_005 Topic 7: Circular Wait",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Printable Note",downloadFileName:"008_005_topic7_circular_wait_note.txt"})}),e.jsx(a,{note:"Circular Wait is the circle of death: A waits for B, B waits for C, and C waits for A! To break the circle, just enforce a rule: Everyone MUST pick up locks in numerical order (Lock 1 before Lock 2)! The circle disappears immediately! — Sukanta Hui"})]})}export{y as default};
