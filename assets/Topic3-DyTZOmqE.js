import{j as e}from"./vendor-react-core-Doz9nIC6.js";import{J as t}from"./JavaFileLoader-BfBG3xz_.js";import{F as a}from"./FAQTemplate-BHhlgA96.js";import{P as n}from"./PlainTextPrint-C08xhKA4.js";import{T as r}from"./TeacherSukantaHui-DerPxfxp.js";import"./JavaCodeBlock-BwsLxS3r.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-CH1iX9C8.js";const i=`/**\r
 * Java Core Tutorial - Module 008_001: Thread Fundamentals, Lifecycle & Creation\r
 * Topic 3: Thread Lifecycle: The 6 States of java.lang.Thread.State Enum Overview\r
 * Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
 */\r
\r
package com.coderaccotax.javatutorial.multithreading;\r
\r
public class ThreadLifecycleStateEnumOverviewDemo {\r
\r
    public static void main(String[] args) {\r
        System.out.println("==========================================================================");\r
        System.out.println(" TOPIC 3: java.lang.Thread.State ENUM OVERVIEW - BARRACKPORE");\r
        System.out.println("==========================================================================\\n");\r
\r
        System.out.println(">>> THE 6 FORMAL STATES OF A JAVA THREAD (Thread.State):");\r
        for (Thread.State state : Thread.State.values()) {\r
            System.out.printf("  State %-15s : ", state.name());\r
            switch (state) {\r
                case NEW           -> System.out.println("Thread instantiated ('new Thread()'), but start() not yet called.");\r
                case RUNNABLE      -> System.out.println("Executing on CPU or waiting in OS ready queue to run.");\r
                case BLOCKED       -> System.out.println("Waiting to acquire an intrinsic monitor lock (synchronized block).");\r
                case WAITING       -> System.out.println("Waiting indefinitely for another thread (wait(), join(), LockSupport.park()).");\r
                case TIMED_WAITING -> System.out.println("Waiting up to a specified timeout (sleep(ms), wait(ms), join(ms)).");\r
                case TERMINATED    -> System.out.println("Execution completed run() or exited due to uncaught exception.");\r
            }\r
        }\r
\r
        System.out.println("\\n>>> HOW TO QUERY THREAD STATE PROGRAMMATICALLY:");\r
        Thread current = Thread.currentThread();\r
        System.out.printf("  Current Thread '%s' State: %s%n", current.getName(), current.getState());\r
\r
        System.out.println("\\n==========================================================================");\r
    }\r
}`,s=`================================================================================\r
JAVA CORE TUTORIAL - QUICK REVISION GUIDE\r
Module 008_001: Thread Fundamentals, Lifecycle & Creation\r
Topic 3: Thread Lifecycle Overview\r
Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
================================================================================\r
\r
1. THE 6 THREAD STATES:\r
   - NEW: instantiated, not started.\r
   - RUNNABLE: running or ready to run on CPU.\r
   - BLOCKED: waiting for 'synchronized' monitor lock.\r
   - WAITING: waiting indefinitely ('wait()', 'join()').\r
   - TIMED_WAITING: waiting for duration ('sleep()', 'wait(t)').\r
   - TERMINATED: dead/finished.\r
   - Query state: 'thread.getState()'.\r
\r
================================================================================\r
Classroom Practice: Barrackpore Academy | Mentor: Sukanta Hui\r
================================================================================`,o=[{question:"List all 6 thread states defined in the 'java.lang.Thread.State' enum and briefly explain what causes each state.",shortAnswer:"1. 'NEW': Thread object created but 'start()' not yet called. 2. 'RUNNABLE': executing on CPU or eligible to run in OS queue. 3. 'BLOCKED': waiting to acquire an intrinsic monitor lock ('synchronized'). 4. 'WAITING': waiting indefinitely for notification from another thread ('wait()', 'join()'). 5. 'TIMED_WAITING': waiting with a finite timeout ('sleep(ms)', 'join(ms)', 'wait(ms)'). 6. 'TERMINATED': run method has finished executing.",explanation:"Complete specification of java.lang.Thread.State in the JVM.",hint:"NEW, RUNNABLE, BLOCKED, WAITING, TIMED_WAITING, TERMINATED.",level:"Intermediate",codeExample:"Thread.State state = thread.getState(); // Returns one of 6 enum values"}];function x(){return e.jsxs("div",{className:"space-y-12 px-4 md:px-8 py-8 text-slate-200 bg-slate-900 min-h-screen",children:[e.jsxs("header",{className:"space-y-4 border-b border-slate-800 pb-6",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"px-3 py-1 bg-sky-500/10 text-sky-400 border border-sky-500/20 text-xs font-semibold rounded-full uppercase tracking-wider",children:"Module 008_001 · Topic 3"}),e.jsx("span",{className:"px-3 py-1 bg-amber-500/10 text-amber-400 border border-amber-500/20 text-xs font-semibold rounded-full",children:"Thread Lifecycle"})]}),e.jsxs("h1",{className:"text-xl sm:text-2xl md:text-3xl font-bold text-white tracking-tight",children:["Thread Lifecycle: The 6 States of ",e.jsx("code",{className:"text-emerald-400 font-mono",children:"java.lang.Thread.State"})," Enum"]}),e.jsxs("p",{className:"text-base md:text-lg text-slate-400 leading-relaxed max-w-4xl",children:["Master state transition mechanics: exploring the 6 formal lifecycle stages (",e.jsx("code",{className:"text-emerald-300 font-mono",children:"NEW"}),", ",e.jsx("code",{className:"text-sky-300 font-mono",children:"RUNNABLE"}),", ",e.jsx("code",{className:"text-rose-300 font-mono",children:"BLOCKED"}),", ",e.jsx("code",{className:"text-purple-300 font-mono",children:"WAITING"}),", ",e.jsx("code",{className:"text-amber-300 font-mono",children:"TIMED_WAITING"}),", ",e.jsx("code",{className:"text-slate-300 font-mono",children:"TERMINATED"}),")."]})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsxs("h2",{className:"text-2xl font-bold text-emerald-400 flex items-center gap-2",children:[e.jsx("span",{children:"💻"})," Hands-On Java Demo Code"]}),e.jsx(t,{fileModule:i,title:"ThreadLifecycleStateEnumOverviewDemo.java",highlightLines:[7,10,13,14,15,16,17,18,19,20,26,27]})]}),e.jsx("section",{className:"space-y-4",children:e.jsx(a,{title:"Thread Lifecycle FAQs",questions:o})}),e.jsx("section",{className:"space-y-4",children:e.jsx(n,{content:s,title:"Module 008_001 Topic 3: Thread Lifecycle Overview",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Printable Note",downloadFileName:"008_001_topic3_thread_lifecycle_overview_note.txt"})}),e.jsx(r,{note:"A Java thread is like a train journey: it is built at the station (NEW), moves on the tracks (RUNNABLE), stops at red signals for locks (BLOCKED), waits for passengers (WAITING / TIMED_WAITING), and arrives at the terminal (TERMINATED)! — Sukanta Hui"})]})}export{x as default};
