import{j as e}from"./vendor-react-core-Doz9nIC6.js";import{J as t}from"./JavaFileLoader-BfBG3xz_.js";import{F as i}from"./FAQTemplate-BHhlgA96.js";import{P as r}from"./PlainTextPrint-C08xhKA4.js";import{T as s}from"./TeacherSukantaHui-RpFLNJ5A.js";import"./JavaCodeBlock-BwsLxS3r.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-wprqVFW_.js";const n=`/**\r
 * Java Core Tutorial - Module 008_005: Thread Safety & Deadlocks\r
 * Topic 10: Classic Concurrency Simulation: Dining Philosophers & Inverted Transfers\r
 * Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
 */\r
\r
package com.coderaccotax.javatutorial.multithreading;\r
\r
public class ClassicDiningPhilosophersDeadlockDemo {\r
\r
    // Simulating 5 chopsticks (locks) shared between 5 philosophers (threads):\r
    private static final Object[] CHOPSTICKS = new Object[5];\r
\r
    static {\r
        for (int i = 0; i < 5; i++) {\r
            CHOPSTICKS[i] = new Object();\r
        }\r
    }\r
\r
    public static void main(String[] args) {\r
        System.out.println("==========================================================================");\r
        System.out.println(" TOPIC 10: DINING PHILOSOPHERS DEADLOCK SIMULATION - BARRACKPORE");\r
        System.out.println("==========================================================================\\n");\r
\r
        System.out.println(">>> THE CLASSIC DINING PHILOSOPHERS PROBLEM (Dijkstra, 1965):");\r
        System.out.println("  - 5 Philosophers sit around a circular table with 5 Chopsticks between them.");\r
        System.out.println("  - Each philosopher needs TWO chopsticks (Left and Right) to eat noodles.");\r
        System.out.println();\r
        System.out.println(">>> THE DEADLOCK HAZARD (INVERTED NAIVE ALGORITHM):");\r
        System.out.println("  1. Every philosopher sits down and simultaneously picks up their LEFT chopstick.");\r
        System.out.println("  2. Now, all 5 chopsticks are held by 5 philosophers.");\r
        System.out.println("  3. Every philosopher attempts to pick up their RIGHT chopstick.");\r
        System.out.println("  4. Every right chopstick is already held by their right neighbor!");\r
        System.out.println("  5. Result: COMPLETE CIRCULAR DEADLOCK! All 5 philosophers starve!");\r
        System.out.println();\r
        System.out.println(">>> THE SOLUTION (RESOURCE HIERARCHY / ASYMMETRY):");\r
        System.out.println("  - Number chopsticks 0 to 4.");\r
        System.out.println("  - Rule: EVERY philosopher MUST pick up the LOWER-NUMBERED chopstick first, then higher.");\r
        System.out.println("  - Philosopher 4 (between 4 and 0) will pick up chopstick 0 FIRST instead of 4, instantly breaking the cycle!");\r
\r
        System.out.println("\\n==========================================================================");\r
    }\r
}`,o=`================================================================================\r
JAVA CORE TUTORIAL - QUICK REVISION GUIDE\r
Module 008_005: Thread Safety & Deadlocks\r
Topic 10: Dining Philosophers Simulation\r
Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
================================================================================\r
\r
1. DINING PHILOSOPHERS:\r
   - 5 philosophers need 2 chopsticks to eat.\r
   - Naive algorithm: All grab left chopstick → Deadlock!\r
   - Dijkstra's Solution: Resource Hierarchy (Global Ordering).\r
   - Always acquire smaller indexed chopstick first: 'min(left, right)'.\r
   - Breaks Circular Wait condition.\r
\r
================================================================================\r
Classroom Practice: Barrackpore Academy | Mentor: Sukanta Hui\r
================================================================================`,a=[{question:"Explain the Dining Philosophers Problem and how Dijkstra's resource hierarchy solution prevents deadlock.",shortAnswer:"The Dining Philosophers Problem models 5 philosophers at a circular table who require both left and right chopsticks to eat. If all philosophers pick up their left chopstick simultaneously, all 5 chopsticks are held, and each philosopher blocks waiting indefinitely for the right chopstick held by their neighbor (Circular Wait Deadlock). Dijkstra solved this by numbering chopsticks 0–4 and enforcing a 'Resource Hierarchy': philosophers must always pick up the lower-numbered chopstick first. The last philosopher (between 4 and 0) attempts to pick up chopstick 0 first (which is already held by philosopher 0), allowing philosopher 3 to acquire chopstick 4 and eat, breaking the cycle.",explanation:"Classic computer science problem formulated by Edsger Dijkstra in 1965.",hint:"Numbered chopsticks enforce lower-number-first acquisition, breaking the circular dependency.",level:"Intermediate",codeExample:"// Asymmetric order: int first = Math.min(left, right); int second = Math.max(left, right);"}];function y(){return e.jsxs("div",{className:"space-y-12 px-4 md:px-8 py-8 text-slate-200 bg-slate-900 min-h-screen",children:[e.jsxs("header",{className:"space-y-4 border-b border-slate-800 pb-6",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"px-3 py-1 bg-sky-500/10 text-sky-400 border border-sky-500/20 text-xs font-semibold rounded-full uppercase tracking-wider",children:"Module 008_005 · Topic 10"}),e.jsx("span",{className:"px-3 py-1 bg-purple-500/10 text-purple-400 border border-purple-500/20 text-xs font-semibold rounded-full",children:"Dining Philosophers"})]}),e.jsxs("h1",{className:"text-xl sm:text-2xl md:text-3xl font-bold text-white tracking-tight",children:["Classic Concurrency Simulation: The ",e.jsx("code",{className:"text-purple-400 font-mono",children:"Dining Philosophers"})," Problem"]}),e.jsx("p",{className:"text-base md:text-lg text-slate-400 leading-relaxed max-w-4xl",children:"Simulate Dijkstra's classical dilemma: demonstrating circular chopstick starvation deadlocks and implementing asymmetric resource numbering to restore continuous dining progress."})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsxs("h2",{className:"text-2xl font-bold text-emerald-400 flex items-center gap-2",children:[e.jsx("span",{children:"💻"})," Hands-On Java Demo Code"]}),e.jsx(t,{fileModule:n,title:"ClassicDiningPhilosophersDeadlockDemo.java",highlightLines:[7,10,13,14,19,20,26,27,28]})]}),e.jsx("section",{className:"space-y-4",children:e.jsx(i,{title:"Dining Philosophers FAQs",questions:a})}),e.jsx("section",{className:"space-y-4",children:e.jsx(r,{content:o,title:"Module 008_005 Topic 10: Dining Philosophers Simulation",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Printable Note",downloadFileName:"008_005_topic10_dining_philosophers_simulation_note.txt"})}),e.jsx(s,{note:"The Dining Philosophers is Dijkstra's timeless thought experiment that explains every multi-lock system on earth! If all 5 philosophers grab their left chopstick at the same second, everyone starves! The solution is simply numbering chopsticks and grabbing the smaller one first! — Sukanta Hui"})]})}export{y as default};
