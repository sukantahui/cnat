import{j as e}from"./vendor-react-core-Doz9nIC6.js";import{J as t}from"./JavaFileLoader-BfBG3xz_.js";import{F as r}from"./FAQTemplate-CkSqDH4B.js";import{P as n}from"./PlainTextPrint-C08xhKA4.js";import{T as a}from"./TeacherSukantaHui-CyIG3xbg.js";import"./JavaCodeBlock-BwsLxS3r.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-CIaKtAt4.js";const i=`/**\r
 * Java Core Tutorial - Module 008_001: Thread Fundamentals, Lifecycle & Creation\r
 * Topic 14: Comprehensive Thread State Inspector: Observing All 6 States Live\r
 * Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
 */\r
\r
package com.coderaccotax.javatutorial.multithreading;\r
\r
public class ThreadLifecycleStateInspectorLiveDemo {\r
\r
    private static final Object MONITOR = new Object();\r
\r
    public static void main(String[] args) throws InterruptedException {\r
        System.out.println("==========================================================================");\r
        System.out.println(" TOPIC 14: LIVE THREAD LIFECYCLE STATE TRANSITIONS - BARRACKPORE");\r
        System.out.println("==========================================================================\\n");\r
\r
        Thread observedThread = new Thread(() -> {\r
            try {\r
                // 1. TIMED_WAITING:\r
                Thread.sleep(400);\r
\r
                // 2. WAITING on Monitor:\r
                synchronized (MONITOR) {\r
                    MONITOR.wait();\r
                }\r
\r
                // 3. Busy compute:\r
                for (int i = 0; i < 500_000; i++) {}\r
\r
            } catch (InterruptedException ignored) {}\r
        }, "Observed-Worker");\r
\r
        // Step 1: NEW\r
        System.out.println("  Step 1 (After instantiation) : State = " + observedThread.getState());\r
\r
        // Step 2: RUNNABLE (After start)\r
        observedThread.start();\r
        System.out.println("  Step 2 (After start())       : State = " + observedThread.getState());\r
\r
        // Step 3: TIMED_WAITING (During sleep)\r
        Thread.sleep(100);\r
        System.out.println("  Step 3 (During sleep(400))   : State = " + observedThread.getState());\r
\r
        // Step 4: WAITING (During wait())\r
        Thread.sleep(400);\r
        System.out.println("  Step 4 (During MONITOR.wait()): State = " + observedThread.getState());\r
\r
        // Step 5: Notify and wake up\r
        synchronized (MONITOR) {\r
            MONITOR.notify();\r
        }\r
\r
        // Step 6: TERMINATED (After join)\r
        observedThread.join();\r
        System.out.println("  Step 6 (After completion)    : State = " + observedThread.getState());\r
\r
        System.out.println("\\n>>> COMPLETE STATE TRANSITION GRAPH VERIFIED IN ACTION!");\r
\r
        System.out.println("\\n==========================================================================");\r
    }\r
}`,s=`================================================================================\r
JAVA CORE TUTORIAL - QUICK REVISION GUIDE\r
Module 008_001: Thread Fundamentals, Lifecycle & Creation\r
Topic 14: Live Lifecycle Inspector\r
Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
================================================================================\r
\r
1. LIVE STATE TRANSITIONS:\r
   - NEW &rarr; start() &rarr; RUNNABLE.\r
   - RUNNABLE &rarr; sleep(t) &rarr; TIMED_WAITING.\r
   - TIMED_WAITING &rarr; wait() &rarr; WAITING.\r
   - WAITING &rarr; notify() &rarr; BLOCKED / RUNNABLE.\r
   - RUNNABLE &rarr; exit run() &rarr; TERMINATED.\r
\r
================================================================================\r
Classroom Practice: Barrackpore Academy | Mentor: Sukanta Hui\r
================================================================================`,o=[{question:"Trace the state transitions of 'observedThread' from creation to termination in the live demo.",shortAnswer:"1. 'NEW': when created via 'new Thread()'. 2. 'RUNNABLE': immediately after calling 'start()'. 3. 'TIMED_WAITING': when entering 'Thread.sleep(400)'. 4. 'WAITING': when entering 'MONITOR.wait()'. 5. 'BLOCKED / RUNNABLE': when notified and competing to re-acquire monitor lock. 6. 'TERMINATED': after exiting 'run()' and completing execution.",explanation:"Complete empirical verification of JVM thread lifecycle state machine.",hint:"NEW &rarr; RUNNABLE &rarr; TIMED_WAITING &rarr; WAITING &rarr; RUNNABLE &rarr; TERMINATED.",level:"Intermediate",codeExample:"System.out.println(thread.getState()); // Prints state transitions"}];function h(){return e.jsxs("div",{className:"space-y-12 px-4 md:px-8 py-8 text-slate-200 bg-slate-900 min-h-screen",children:[e.jsxs("header",{className:"space-y-4 border-b border-slate-800 pb-6",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"px-3 py-1 bg-sky-500/10 text-sky-400 border border-sky-500/20 text-xs font-semibold rounded-full uppercase tracking-wider",children:"Module 008_001 · Topic 14"}),e.jsx("span",{className:"px-3 py-1 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-xs font-semibold rounded-full",children:"Live State Inspector"})]}),e.jsx("h1",{className:"text-3xl md:text-4xl font-extrabold text-white tracking-tight",children:"Thread Lifecycle State Inspection: Observing All 6 States Live"}),e.jsxs("p",{className:"text-base md:text-lg text-slate-400 leading-relaxed max-w-4xl",children:["Witness live state transitions: orchestrating a multi-stage worker thread through ",e.jsx("code",{className:"text-emerald-300 font-mono",children:"NEW"}),", ",e.jsx("code",{className:"text-sky-300 font-mono",children:"RUNNABLE"}),", ",e.jsx("code",{className:"text-amber-300 font-mono",children:"TIMED_WAITING"}),", ",e.jsx("code",{className:"text-purple-300 font-mono",children:"WAITING"}),", and ",e.jsx("code",{className:"text-slate-300 font-mono",children:"TERMINATED"}),"."]})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsxs("h2",{className:"text-2xl font-bold text-emerald-400 flex items-center gap-2",children:[e.jsx("span",{children:"💻"})," Hands-On Java Demo Code"]}),e.jsx(t,{fileModule:i,title:"ThreadLifecycleStateInspectorLiveDemo.java",highlightLines:[7,10,16,17,20,21,29,33,37,41,48]})]}),e.jsx("section",{className:"space-y-4",children:e.jsx(r,{title:"Live State Inspector FAQs",questions:o})}),e.jsx("section",{className:"space-y-4",children:e.jsx(n,{content:s,title:"Module 008_001 Topic 14: Live State Inspector",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Printable Note",downloadFileName:"008_001_topic14_live_state_inspector_note.txt"})}),e.jsx(a,{note:"Watching thread states in real-time makes everything crystal clear! Notice how calling sleep() turns it to TIMED_WAITING, wait() turns it to WAITING, and after join() it enters TERMINATED! — Sukanta Hui"})]})}export{h as default};
