import{j as e}from"./vendor-react-core-Doz9nIC6.js";import{J as n}from"./JavaFileLoader-BfBG3xz_.js";import{F as t}from"./FAQTemplate-CkSqDH4B.js";import{P as o}from"./PlainTextPrint-C08xhKA4.js";import{T as a}from"./TeacherSukantaHui-CC0AKmkm.js";import"./JavaCodeBlock-BwsLxS3r.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-BtJHuk7w.js";const r=`/**\r
 * Java Core Tutorial - Module 008_005: Thread Safety & Deadlocks\r
 * Topic 3: The 4 Coffman Conditions: Mathematical Blueprint for Deadlock Formation\r
 * Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
 */\r
\r
package com.coderaccotax.javatutorial.multithreading;\r
\r
public class FourCoffmanConditionsOverviewDemo {\r
\r
    public static void main(String[] args) {\r
        System.out.println("==========================================================================");\r
        System.out.println(" TOPIC 3: THE 4 COFFMAN CONDITIONS FOR DEADLOCK - BARRACKPORE");\r
        System.out.println("==========================================================================\\n");\r
\r
        System.out.println(">>> THE 4 COFFMAN CONDITIONS (Edward G. Coffman Jr., 1971):");\r
        System.out.println("  - A deadlock CANNOT occur unless ALL FOUR of the following conditions hold simultaneously!");\r
        System.out.println("  - If you break even ONE of these four conditions, deadlocks become mathematically IMPOSSIBLE!");\r
        System.out.println();\r
        System.out.println("+----+-----------------------+---------------------------------------------------------------+");\r
        System.out.println("| #  | Condition Name        | Description in Java Concurrency                               |");\r
        System.out.println("+----+-----------------------+---------------------------------------------------------------+");\r
        System.out.println("| 1. | Mutual Exclusion      | At least one resource (lock) is held in a non-shareable mode. |");\r
        System.out.println("| 2. | Hold and Wait         | A thread holds >= 1 lock while waiting to acquire another lock.|");\r
        System.out.println("| 3. | No Preemption         | Locks cannot be stolen or forcibly taken away from a thread.  |");\r
        System.out.println("| 4. | Circular Wait         | A closed cycle exists: Thread 1 &rarr; Lock B &rarr; Thread 2 &rarr; Lock A.|");\r
        System.out.println("+----+-----------------------+---------------------------------------------------------------+");\r
\r
        System.out.println("\\n==========================================================================");\r
    }\r
}`,i=`================================================================================\r
JAVA CORE TUTORIAL - QUICK REVISION GUIDE\r
Module 008_005: Thread Safety & Deadlocks\r
Topic 3: The 4 Coffman Conditions\r
Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
================================================================================\r
\r
1. THE 4 COFFMAN CONDITIONS:\r
   - 1. Mutual Exclusion: Exclusive lock access.\r
   - 2. Hold and Wait: Holding Lock 1 while waiting for Lock 2.\r
   - 3. No Preemption: Locks cannot be confiscated by force.\r
   - 4. Circular Wait: Thread A waits for B; Thread B waits for A.\r
   - BREAK ANY 1 CONDITION &rarr; DEADLOCK IS PREVENTED!\r
\r
================================================================================\r
Classroom Practice: Barrackpore Academy | Mentor: Sukanta Hui\r
================================================================================`,s=[{question:"Name the 4 Coffman Conditions required for a deadlock to occur in a computer system.",shortAnswer:"1. 'Mutual Exclusion': at least one resource must be held in a non-shareable mode by one thread. 2. 'Hold and Wait': a thread holding at least one resource is actively waiting to acquire additional resources held by other threads. 3. 'No Preemption': resources cannot be forcibly confiscated from a thread holding them; only the thread can voluntarily release them. 4. 'Circular Wait': a circular chain of threads exists such that each thread waits for a resource held by the next thread in the chain.",explanation:"Fundamental operating systems and concurrency theorem by Edward G. Coffman Jr. (1971).",hint:"Mutual Exclusion, Hold and Wait, No Preemption, and Circular Wait.",level:"Intermediate",codeExample:"// Deadlock occurs if and only if ALL 4 Coffman conditions hold simultaneously."}];function x(){return e.jsxs("div",{className:"space-y-12 px-4 md:px-8 py-8 text-slate-200 bg-slate-900 min-h-screen",children:[e.jsxs("header",{className:"space-y-4 border-b border-slate-800 pb-6",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"px-3 py-1 bg-sky-500/10 text-sky-400 border border-sky-500/20 text-xs font-semibold rounded-full uppercase tracking-wider",children:"Module 008_005 · Topic 3"}),e.jsx("span",{className:"px-3 py-1 bg-purple-500/10 text-purple-400 border border-purple-500/20 text-xs font-semibold rounded-full",children:"Coffman Conditions"})]}),e.jsxs("h1",{className:"text-3xl md:text-4xl font-extrabold text-white tracking-tight",children:["The ",e.jsx("code",{className:"text-emerald-400 font-mono",children:"4 Coffman Conditions"}),": Mathematical Blueprint for Deadlock Formation"]}),e.jsx("p",{className:"text-base md:text-lg text-slate-400 leading-relaxed max-w-4xl",children:"Analyze formal deadlock preconditions: examining Edward G. Coffman Jr.'s 4 simultaneous requirements and discovering how breaking a single condition guarantees deadlock prevention."})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsxs("h2",{className:"text-2xl font-bold text-emerald-400 flex items-center gap-2",children:[e.jsx("span",{children:"💻"})," Hands-On Java Demo Code"]}),e.jsx(n,{fileModule:r,title:"FourCoffmanConditionsOverviewDemo.java",highlightLines:[7,10,13,14,15,18,19,20,21]})]}),e.jsx("section",{className:"space-y-4",children:e.jsx(t,{title:"Coffman Conditions FAQs",questions:s})}),e.jsx("section",{className:"space-y-4",children:e.jsx(o,{content:i,title:"Module 008_005 Topic 3: The 4 Coffman Conditions",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Printable Note",downloadFileName:"008_005_topic3_coffman_conditions_note.txt"})}),e.jsx(a,{note:"Every deadlock in computer history requires all 4 Coffman conditions to be true at the same time! If you break just ONE condition—like preventing Circular Wait with consistent lock ordering—deadlocks become 100% impossible! — Sukanta Hui"})]})}export{x as default};
