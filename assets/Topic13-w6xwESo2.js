import{j as e}from"./vendor-react-core-Doz9nIC6.js";import{J as t}from"./JavaFileLoader-BfBG3xz_.js";import{F as n}from"./FAQTemplate-BHhlgA96.js";import{P as r}from"./PlainTextPrint-C08xhKA4.js";import{T as a}from"./TeacherSukantaHui-DDN87fI5.js";import"./JavaCodeBlock-BwsLxS3r.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-DEsnU7fn.js";const o=`/**\r
 * Java Core Tutorial - Module 008_005: Thread Safety & Deadlocks\r
 * Topic 13: Livelock: Continuous State Mutation & Excessive Politeness without Progress\r
 * Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
 */\r
\r
package com.coderaccotax.javatutorial.multithreading;\r
\r
public class LivelockPolitePedestriansDemo {\r
\r
    public static void main(String[] args) {\r
        System.out.println("==========================================================================");\r
        System.out.println(" TOPIC 13: LIVELOCK (ACTIVE STATE FLIPPING WITHOUT PROGRESS) - BARRACKPORE");\r
        System.out.println("==========================================================================\\n");\r
\r
        System.out.println(">>> DEADLOCK vs LIVELOCK COMPARISON:");\r
        System.out.println("+-------------------+-----------------------------------+-----------------------------------+");\r
        System.out.println("| Feature           | Deadlock                          | Livelock                          |");\r
        System.out.println("+-------------------+-----------------------------------+-----------------------------------+");\r
        System.out.println("| Thread State      | BLOCKED / WAITING (Sleeping)      | RUNNABLE (Actively running CPU!)  |");\r
        System.out.println("| CPU Usage         | 0% CPU Utilization                | 100% CPU Core Spikes (High Burn)  |");\r
        System.out.println("| Behavior          | Frozen in place, doing nothing    | Continuously acting and reacting  |");\r
        System.out.println("| Forward Progress  | ZERO                              | ZERO                              |");\r
        System.out.println("+-------------------+-----------------------------------+-----------------------------------+");\r
        System.out.println();\r
        System.out.println(">>> THE REAL-WORLD ANALOGY (POLITE PEDESTRIANS IN A NARROW HALLWAY):");\r
        System.out.println("  - Swadeep and Tuhina walk toward each other in a narrow hallway in Barrackpore.");\r
        System.out.println("  - Swadeep steps to the left to let Tuhina pass. At the same second, Tuhina steps to her right!");\r
        System.out.println("  - They block each other again!");\r
        System.out.println("  - Swadeep steps to the right. Tuhina steps to her left!");\r
        System.out.println("  - They repeat this dance indefinitely: Both are moving actively (100% CPU), but neither can walk forward!");\r
        System.out.println();\r
        System.out.println(">>> HOW TO SOLVE / PREVENT LIVELOCK:");\r
        System.out.println("  - Introduce RANDOMIZED BACK-OFF JITTER (e.g. Ethernet CSMA/CD exponential back-off).");\r
        System.out.println("  - When contention is detected, threads wait for a random duration (e.g. 10ms–50ms) before retrying, breaking the synchronized lockstep!");\r
\r
        System.out.println("\\n==========================================================================");\r
    }\r
}`,i=`================================================================================\r
JAVA CORE TUTORIAL - QUICK REVISION GUIDE\r
Module 008_005: Thread Safety & Deadlocks\r
Topic 13: Livelock Mechanics\r
Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
================================================================================\r
\r
1. LIVELOCK:\r
   - Threads actively change states in lockstep without progress.\r
   - RUNNABLE state (100% CPU burn, unlike Deadlock's 0%).\r
   - Analogy: Two polite people dodging back and forth in a hallway.\r
   - Solution: Randomized Back-Off Jitter before retrying.\r
\r
================================================================================\r
Classroom Practice: Barrackpore Academy | Mentor: Sukanta Hui\r
================================================================================`,s=[{question:"What is a 'Livelock' in multi-threading, how does it differ from a Deadlock, and how is it resolved?",shortAnswer:"A 'Livelock' occurs when two or more threads continuously change their state in active response to each other without making any forward progress on their actual business tasks. Unlike Deadlock (where threads are BLOCKED with 0% CPU usage), in Livelock threads remain RUNNABLE and actively burn 100% CPU cycles spinning in polite retry loops. Livelock is resolved by introducing 'Randomized Back-off Jitter' (e.g. 'Thread.sleep(random(10, 50))'), which breaks the deterministic lockstep resonance between competing threads.",explanation:"Classic concurrency anomaly and mitigation via randomized exponential backoff.",hint:"Threads actively change state with 100% CPU burn but make no forward progress; solved by randomized back-off jitter.",level:"Intermediate",codeExample:"Thread.sleep((long)(Math.random() * 50)); // Randomized back-off breaks livelock"}];function k(){return e.jsxs("div",{className:"space-y-12 px-4 md:px-8 py-8 text-slate-200 bg-slate-900 min-h-screen",children:[e.jsxs("header",{className:"space-y-4 border-b border-slate-800 pb-6",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"px-3 py-1 bg-sky-500/10 text-sky-400 border border-sky-500/20 text-xs font-semibold rounded-full uppercase tracking-wider",children:"Module 008_005 · Topic 13"}),e.jsx("span",{className:"px-3 py-1 bg-amber-500/10 text-amber-400 border border-amber-500/20 text-xs font-semibold rounded-full",children:"Livelock Anomaly"})]}),e.jsxs("h1",{className:"text-xl sm:text-2xl md:text-3xl font-bold text-white tracking-tight",children:[e.jsx("code",{className:"text-amber-400 font-mono",children:"Livelock"}),": Active State Mutation & Excessive Politeness Without Progress"]}),e.jsxs("p",{className:"text-base md:text-lg text-slate-400 leading-relaxed max-w-4xl",children:["Contrast dynamic concurrency stalls: distinguishing 100% CPU burn in ",e.jsx("code",{className:"text-amber-300 font-mono",children:"Livelock"})," retry resonance from zero-CPU ",e.jsx("code",{className:"text-rose-300 font-mono",children:"Deadlock"})," freezes, and applying randomized back-off jitter."]})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsxs("h2",{className:"text-2xl font-bold text-emerald-400 flex items-center gap-2",children:[e.jsx("span",{children:"💻"})," Hands-On Java Demo Code"]}),e.jsx(t,{fileModule:o,title:"LivelockPolitePedestriansDemo.java",highlightLines:[7,10,13,14,15,16,17,26,27]})]}),e.jsx("section",{className:"space-y-4",children:e.jsx(n,{title:"Livelock FAQs",questions:s})}),e.jsx("section",{className:"space-y-4",children:e.jsx(r,{content:i,title:"Module 008_005 Topic 13: Livelock Mechanics",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Printable Note",downloadFileName:"008_005_topic13_livelock_mechanics_note.txt"})}),e.jsx(a,{note:"In Deadlock, two threads are frozen asleep (0% CPU). In Livelock, two threads are running around frantically politely trying to let the other go first (100% CPU), but neither makes progress! Add a random delay before retrying, and the livelock vanishes! — Sukanta Hui"})]})}export{k as default};
