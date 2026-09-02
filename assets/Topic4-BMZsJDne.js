import{j as e}from"./vendor-react-core-Doz9nIC6.js";import{J as t}from"./JavaFileLoader-BfBG3xz_.js";import{F as r}from"./FAQTemplate-BHhlgA96.js";import{P as a}from"./PlainTextPrint-C08xhKA4.js";import{T as n}from"./TeacherSukantaHui-RpFLNJ5A.js";import"./JavaCodeBlock-BwsLxS3r.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-wprqVFW_.js";const o=`/**\r
 * Java Core Tutorial - Module 008_006: JMM, volatile, Atomics & CAS\r
 * Topic 4: The 'Happens-Before' Relationship: Formal Memory Visibility Guarantees\r
 * Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
 */\r
\r
package com.coderaccotax.javatutorial.multithreading;\r
\r
public class HappensBeforeRelationshipRulesDemo {\r
\r
    public static void main(String[] args) {\r
        System.out.println("==========================================================================");\r
        System.out.println(" TOPIC 4: THE 'HAPPENS-BEFORE' RELATIONSHIP RULES - BARRACKPORE");\r
        System.out.println("==========================================================================\\n");\r
\r
        System.out.println(">>> THE CORE 'HAPPENS-BEFORE' RULES IN JAVA:");\r
        System.out.println("  - If Action A 'happens-before' Action B, then the memory writes by A are GUARANTEED to be visible to B, and A executes before B.");\r
        System.out.println();\r
        System.out.println("+----+-----------------------+---------------------------------------------------------------+");\r
        System.out.println("| #  | Rule Name             | Formal Memory Visibility Guarantee                            |");\r
        System.out.println("+----+-----------------------+---------------------------------------------------------------+");\r
        System.out.println("| 1. | Program Order Rule    | Within a single thread, each action happens-before any action |");\r
        System.out.println("|    |                       | that appears later in source program order.                   |");\r
        System.out.println("| 2. | Monitor Lock Rule     | An unlock on a monitor lock happens-before every subsequent   |");\r
        System.out.println("|    |                       | lock on the EXACT SAME monitor lock.                          |");\r
        System.out.println("| 3. | Volatile Variable Rule| A write to a volatile field happens-before every subsequent   |");\r
        System.out.println("|    |                       | read of that EXACT SAME volatile field.                       |");\r
        System.out.println("| 4. | Thread Start Rule     | A call to 'Thread.start()' happens-before any action in the   |");\r
        System.out.println("|    |                       | started thread's 'run()' method.                              |");\r
        System.out.println("| 5. | Thread Join Rule      | All actions in a thread happen-before any other thread        |");\r
        System.out.println("|    |                       | successfully returns from a 'join()' on that thread.          |");\r
        System.out.println("| 6. | Transitivity Rule     | If A happens-before B, and B happens-before C, then A         |");\r
        System.out.println("|    |                       | happens-before C (Transitive Guarantee!).                     |");\r
        System.out.println("+----+-----------------------+---------------------------------------------------------------+");\r
\r
        System.out.println("\\n==========================================================================");\r
    }\r
}`,i=`================================================================================\r
JAVA CORE TUTORIAL - QUICK REVISION GUIDE\r
Module 008_006: JMM, volatile, Atomics & CAS\r
Topic 4: Happens-Before Relationship\r
Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
================================================================================\r
\r
1. HAPPENS-BEFORE RULES:\r
   - Program Order: In-thread statement order.\r
   - Monitor Lock: Unlock(M) happens-before Lock(M).\r
   - Volatile Variable: Write(V) happens-before Read(V).\r
   - Thread Start: start() happens-before thread's run().\r
   - Thread Join: All thread actions happen-before join() returns.\r
   - Transitivity: A → B and B → C implies A → C.\r
\r
================================================================================\r
Classroom Practice: Barrackpore Academy | Mentor: Sukanta Hui\r
================================================================================`,s=[{question:"What is the 'Happens-Before' relationship in Java and what are its primary rules?",shortAnswer:"The 'Happens-Before' relationship is the foundational partial ordering rule of the Java Memory Model. If action A happens-before action B, the JVM guarantees that all memory mutations executed in A are fully visible to action B, and no reordering can place B before A. The core rules are: 1. 'Program Order' (within a single thread). 2. 'Monitor Lock' (unlock on monitor happens-before subsequent lock on same monitor). 3. 'Volatile Variable' (write to volatile happens-before subsequent read of that volatile). 4. 'Thread Start' (calling start() happens-before run()). 5. 'Thread Join' (all actions in thread happen-before join() returns). 6. 'Transitivity' (if A → B and B → C, then A → C).",explanation:"Central theorem of the Java Memory Model (JLS §17.4.5).",hint:"If A happens-before B, memory writes from A are guaranteed visible to B; includes volatile, lock, start, join, and transitivity.",level:"Advanced",codeExample:"// Volatile write in Thread 1 happens-before Volatile read in Thread 2."}];function b(){return e.jsxs("div",{className:"space-y-12 px-4 md:px-8 py-8 text-slate-200 bg-slate-900 min-h-screen",children:[e.jsxs("header",{className:"space-y-4 border-b border-slate-800 pb-6",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"px-3 py-1 bg-sky-500/10 text-sky-400 border border-sky-500/20 text-xs font-semibold rounded-full uppercase tracking-wider",children:"Module 008_006 · Topic 4"}),e.jsx("span",{className:"px-3 py-1 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-xs font-semibold rounded-full",children:"Happens-Before Rules"})]}),e.jsxs("h1",{className:"text-xl sm:text-2xl md:text-3xl font-bold text-white tracking-tight",children:["The ",e.jsx("code",{className:"text-emerald-400 font-mono",children:"Happens-Before"})," Relationship: Formal Visibility Rules"]}),e.jsx("p",{className:"text-base md:text-lg text-slate-400 leading-relaxed max-w-4xl",children:"Decode the 6 canonical JMM visibility axioms: tracing program order, monitor lock releases, volatile writes, thread start/join boundaries, and transitive ordering chains."})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsxs("h2",{className:"text-2xl font-bold text-emerald-400 flex items-center gap-2",children:[e.jsx("span",{children:"💻"})," Hands-On Java Demo Code"]}),e.jsx(t,{fileModule:o,title:"HappensBeforeRelationshipRulesDemo.java",highlightLines:[7,10,13,14,18,19,20,24,25,29,30]})]}),e.jsx("section",{className:"space-y-4",children:e.jsx(r,{title:"Happens-Before FAQs",questions:s})}),e.jsx("section",{className:"space-y-4",children:e.jsx(a,{content:i,title:"Module 008_006 Topic 4: Happens-Before Rules",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Printable Note",downloadFileName:"008_006_topic4_happens_before_rules_note.txt"})}),e.jsx(n,{note:"'Happens-Before' is the legal contract between you and the JVM! If you follow the rules (like writing to a volatile variable before another thread reads it), Java legally guarantees that the other thread will see the latest value 100% of the time! — Sukanta Hui"})]})}export{b as default};
