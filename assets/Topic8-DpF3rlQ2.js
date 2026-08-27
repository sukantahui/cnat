import{j as e}from"./vendor-react-core-Doz9nIC6.js";import{J as r}from"./JavaFileLoader-BfBG3xz_.js";import{F as a}from"./FAQTemplate-CkSqDH4B.js";import{P as t}from"./PlainTextPrint-C08xhKA4.js";import{T as n}from"./TeacherSukantaHui-CyIG3xbg.js";import"./JavaCodeBlock-BwsLxS3r.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-CIaKtAt4.js";const s=`/**\r
 * Java Core Tutorial - Module 008_002: Thread Control & Daemon Threads\r
 * Topic 8: User Threads vs Daemon Threads Overview: Foreground vs Background Roles\r
 * Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
 */\r
\r
package com.coderaccotax.javatutorial.multithreading;\r
\r
public class UserVsDaemonThreadsOverviewDemo {\r
\r
    public static void main(String[] args) {\r
        System.out.println("==========================================================================");\r
        System.out.println(" TOPIC 8: USER THREADS vs DAEMON THREADS OVERVIEW - BARRACKPORE");\r
        System.out.println("==========================================================================\\n");\r
\r
        Thread mainThread = Thread.currentThread();\r
        System.out.println(">>> 1. Main Thread Identity:");\r
        System.out.println("  Name      : " + mainThread.getName());\r
        System.out.println("  Is Daemon : " + mainThread.isDaemon() + " (Main is a USER thread!)");\r
\r
        System.out.println("\\n>>> 2. USER THREADS vs DAEMON THREADS COMPARISON:");\r
        System.out.println("+-------------------+-----------------------------------+-----------------------------------+");\r
        System.out.println("| Feature           | User Thread (Non-Daemon / Default)| Daemon Thread (Service Provider)  |");\r
        System.out.println("+-------------------+-----------------------------------+-----------------------------------+");\r
        System.out.println("| Purpose           | Core business logic tasks         | Background auxiliary services     |");\r
        System.out.println("| JVM Exit Rule     | JVM REMAINS ALIVE as long as any  | JVM KILLS DAEMONS INSTANTLY when  |");\r
        System.out.println("|                   | single User thread is running!    | all User threads finish!          |");\r
        System.out.println("| Default Status    | Inherited from parent (User)      | Set explicitly via setDaemon(true)|");\r
        System.out.println("| Examples          | Main thread, REST API request,    | JVM Garbage Collector, Finalizer, |");\r
        System.out.println("|                   | Payment processing, PDF generator | Memory monitor, JIT compiler      |");\r
        System.out.println("+-------------------+-----------------------------------+-----------------------------------+");\r
\r
        System.out.println("\\n==========================================================================");\r
    }\r
}`,o=`================================================================================\r
JAVA CORE TUTORIAL - QUICK REVISION GUIDE\r
Module 008_002: Thread Control & Daemon Threads\r
Topic 8: User vs Daemon Threads\r
Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
================================================================================\r
\r
1. USER vs DAEMON THREADS:\r
   - User Threads: Core business logic; JVM stays alive until all User threads finish.\r
   - Daemon Threads: Background helpers (GC, health monitor); JVM kills them when User threads die.\r
   - Method: 'thread.setDaemon(true)'.\r
   - 'isDaemon()' queries daemon status.\r
\r
================================================================================\r
Classroom Practice: Barrackpore Academy | Mentor: Sukanta Hui\r
================================================================================`,i=[{question:"What is the primary difference between a 'User Thread' and a 'Daemon Thread' regarding JVM process termination?",shortAnswer:"A 'User Thread' is a high-priority foreground thread executing core application business logic; the JVM will keep running and will NOT shut down as long as at least ONE User thread is active. A 'Daemon Thread' is a low-priority background service provider (like the Garbage Collector); when all User threads complete their execution, the JVM terminates immediately and abruptly abandons all running Daemon threads without executing their 'finally' blocks.",explanation:"Fundamental JVM lifecycle rule in Java.",hint:"JVM stays alive as long as 1 User thread is alive; JVM exits immediately when all User threads finish, killing all daemons.",level:"Beginner",codeExample:"thread.setDaemon(true); // Marks thread as a background service daemon"}];function g(){return e.jsxs("div",{className:"space-y-12 px-4 md:px-8 py-8 text-slate-200 bg-slate-900 min-h-screen",children:[e.jsxs("header",{className:"space-y-4 border-b border-slate-800 pb-6",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"px-3 py-1 bg-sky-500/10 text-sky-400 border border-sky-500/20 text-xs font-semibold rounded-full uppercase tracking-wider",children:"Module 008_002 · Topic 8"}),e.jsx("span",{className:"px-3 py-1 bg-purple-500/10 text-purple-400 border border-purple-500/20 text-xs font-semibold rounded-full",children:"User vs Daemon"})]}),e.jsxs("h1",{className:"text-3xl md:text-4xl font-extrabold text-white tracking-tight",children:[e.jsx("code",{className:"text-emerald-400 font-mono",children:"User Threads"})," vs ",e.jsx("code",{className:"text-purple-400 font-mono",children:"Daemon Threads"}),": Foreground vs Background Roles"]}),e.jsx("p",{className:"text-base md:text-lg text-slate-400 leading-relaxed max-w-4xl",children:"Classify execution priorities: understanding how the JVM process lifecycle is governed exclusively by active User threads while Daemon threads serve auxiliary background roles."})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsxs("h2",{className:"text-2xl font-bold text-emerald-400 flex items-center gap-2",children:[e.jsx("span",{children:"💻"})," Hands-On Java Demo Code"]}),e.jsx(r,{fileModule:s,title:"UserVsDaemonThreadsOverviewDemo.java",highlightLines:[7,10,13,14,18,19,20,21,22,23]})]}),e.jsx("section",{className:"space-y-4",children:e.jsx(a,{title:"User vs Daemon FAQs",questions:i})}),e.jsx("section",{className:"space-y-4",children:e.jsx(t,{content:o,title:"Module 008_002 Topic 8: User vs Daemon Threads",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Printable Note",downloadFileName:"008_002_topic8_user_vs_daemon_threads_note.txt"})}),e.jsx(n,{note:"Think of User threads like customers at a restaurant—the restaurant stays open as long as there is 1 customer inside! Daemon threads are like the cleaning crew—the moment all customers leave, the owner shuts the lights off and locks the doors immediately! — Sukanta Hui"})]})}export{g as default};
