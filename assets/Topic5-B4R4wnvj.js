import{j as e}from"./vendor-react-core-Doz9nIC6.js";import{J as t}from"./JavaFileLoader-BfBG3xz_.js";import{F as n}from"./FAQTemplate-BHhlgA96.js";import{P as o}from"./PlainTextPrint-C08xhKA4.js";import{T as r}from"./TeacherSukantaHui-CEPuAfsb.js";import"./JavaCodeBlock-BwsLxS3r.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-DGCamHnX.js";const a=`/**\r
 * Java Core Tutorial - Module 008_005: Thread Safety & Deadlocks\r
 * Topic 5: Coffman Condition 2: Hold & Wait (Holding Resources while Requesting More)\r
 * Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
 */\r
\r
package com.coderaccotax.javatutorial.multithreading;\r
\r
public class Coffman2HoldAndWaitDeepDiveDemo {\r
\r
    public static void main(String[] args) {\r
        System.out.println("==========================================================================");\r
        System.out.println(" TOPIC 5: COFFMAN CONDITION 2: HOLD AND WAIT - BARRACKPORE");\r
        System.out.println("==========================================================================\\n");\r
\r
        System.out.println(">>> 1. WHAT IS 'HOLD AND WAIT'?");\r
        System.out.println("  - A thread is currently HOLDING at least one lock (e.g. Lock A), and WHILE HOLDING IT,");\r
        System.out.println("    it blocks and WAITS to acquire another lock (e.g. Lock B).");\r
        System.out.println();\r
        System.out.println(">>> 2. CODE PATTERN THAT MANIFESTS 'HOLD AND WAIT':");\r
        System.out.println("    synchronized (lockA) { // Holding Lock A");\r
        System.out.println("        // Critical: Thread refuses to give up Lock A while trying to get Lock B!");\r
        System.out.println("        synchronized (lockB) { // Waiting for Lock B");\r
        System.out.println("            performTransfer();");\r
        System.out.println("        }");\r
        System.out.println("    }");\r
        System.out.println();\r
        System.out.println(">>> 3. HOW TO BREAK THE 'HOLD AND WAIT' CONDITION:");\r
        System.out.println("  - Strategy A: All-or-Nothing Acquisition (Acquire all needed locks at once before beginning).");\r
        System.out.println("  - Strategy B: Release Before Requesting (Release Lock A before attempting to acquire Lock B).");\r
\r
        System.out.println("\\n==========================================================================");\r
    }\r
}`,i=`================================================================================\r
JAVA CORE TUTORIAL - QUICK REVISION GUIDE\r
Module 008_005: Thread Safety & Deadlocks\r
Topic 5: Hold and Wait Deep Dive\r
Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
================================================================================\r
\r
1. COFFMAN 2: HOLD AND WAIT:\r
   - Nested locks: 'synchronized(A) { synchronized(B) { ... } }'.\r
   - Thread holds Lock A while waiting for Lock B.\r
   - Broken by:\r
     * All-or-Nothing resource acquisition.\r
     * Releasing held locks before requesting additional locks.\r
     * Non-blocking 'tryLock()' with timeout.\r
\r
================================================================================\r
Classroom Practice: Barrackpore Academy | Mentor: Sukanta Hui\r
================================================================================`,s=[{question:"What is the 'Hold and Wait' Coffman condition and how can software engineers break it?",shortAnswer:"'Hold and Wait' occurs when a thread holds at least one lock (resource) while simultaneously blocking to acquire another lock held by a different thread. To break 'Hold and Wait': 1. 'All-or-Nothing Locking': Require threads to request all required resources simultaneously upfront (e.g. using a global lock coordinator). 2. 'Release on Contention': If the second lock cannot be acquired immediately, release the first lock completely (using 'ReentrantLock.tryLock()') and retry later.",explanation:"Second Coffman condition analysis and prevention strategy.",hint:"Holding resource A while waiting for resource B; broken by acquiring all locks at once or releasing on failure.",level:"Intermediate",codeExample:"synchronized(lockA) { synchronized(lockB) { ... } } // Nested locks create Hold and Wait"}];function y(){return e.jsxs("div",{className:"space-y-12 px-4 md:px-8 py-8 text-slate-200 bg-slate-900 min-h-screen",children:[e.jsxs("header",{className:"space-y-4 border-b border-slate-800 pb-6",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"px-3 py-1 bg-sky-500/10 text-sky-400 border border-sky-500/20 text-xs font-semibold rounded-full uppercase tracking-wider",children:"Module 008_005 · Topic 5"}),e.jsx("span",{className:"px-3 py-1 bg-purple-500/10 text-purple-400 border border-purple-500/20 text-xs font-semibold rounded-full",children:"Coffman 2: Hold & Wait"})]}),e.jsxs("h1",{className:"text-xl sm:text-2xl md:text-3xl font-bold text-white tracking-tight",children:["Coffman Condition 2: ",e.jsx("code",{className:"text-purple-400 font-mono",children:"Hold and Wait"})," (Nested Lock Acquisition)"]}),e.jsx("p",{className:"text-base md:text-lg text-slate-400 leading-relaxed max-w-4xl",children:"Dissect nested lock hazards: analyzing how holding onto initial locks while requesting subsequent resources creates deadlocks and exploring all-or-nothing acquisition strategies."})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsxs("h2",{className:"text-2xl font-bold text-emerald-400 flex items-center gap-2",children:[e.jsx("span",{children:"💻"})," Hands-On Java Demo Code"]}),e.jsx(t,{fileModule:a,title:"Coffman2HoldAndWaitDeepDiveDemo.java",highlightLines:[7,10,13,14,18,19,20,24,25]})]}),e.jsx("section",{className:"space-y-4",children:e.jsx(n,{title:"Hold and Wait FAQs",questions:s})}),e.jsx("section",{className:"space-y-4",children:e.jsx(o,{content:i,title:"Module 008_005 Topic 5: Hold and Wait",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Printable Note",downloadFileName:"008_005_topic5_hold_and_wait_note.txt"})}),e.jsx(r,{note:"'Hold and Wait' is like holding the only printer in the office with your left hand while waiting in line to grab the only stapler with your right hand! If someone else has the stapler and is waiting for your printer, nobody works! — Sukanta Hui"})]})}export{y as default};
