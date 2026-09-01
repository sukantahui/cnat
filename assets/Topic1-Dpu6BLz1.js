import{j as e}from"./vendor-react-core-Doz9nIC6.js";import{J as n}from"./JavaFileLoader-BfBG3xz_.js";import{F as t}from"./FAQTemplate-BHhlgA96.js";import{P as o}from"./PlainTextPrint-C08xhKA4.js";import{T as r}from"./TeacherSukantaHui-CEPuAfsb.js";import"./JavaCodeBlock-BwsLxS3r.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-DGCamHnX.js";const a=`/**\r
 * Java Core Tutorial - Module 008_008: Explicit Locks & Synchronizers\r
 * Topic 1: The Lock Interface & ReentrantLock: The Mandatory lock()/unlock() Idiom\r
 * Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
 */\r
\r
package com.coderaccotax.javatutorial.multithreading;\r
\r
import java.util.concurrent.locks.Lock;\r
import java.util.concurrent.locks.ReentrantLock;\r
\r
public class LockInterfaceAndReentrantLockDemo {\r
\r
    // 1. Instantiating explicit ReentrantLock:\r
    private static final Lock LOCK = new ReentrantLock();\r
    private static int balance = 1000;\r
\r
    public static void safeDeposit(int amount) {\r
        // MANDATORY IDIOM: Call lock.lock() BEFORE the try block:\r
        LOCK.lock();\r
        try {\r
            // Critical Section:\r
            balance += amount;\r
            System.out.printf("[%s] Deposited ₹%d | Current Balance: ₹%d%n",\r
                    Thread.currentThread().getName(), amount, balance);\r
        } finally {\r
            // MANDATORY IDIOM: ALWAYS call lock.unlock() inside the 'finally' block!\r
            LOCK.unlock();\r
        }\r
    }\r
\r
    public static void main(String[] args) throws InterruptedException {\r
        System.out.println("==========================================================================");\r
        System.out.println(" TOPIC 1: THE Lock INTERFACE & ReentrantLock IDIOM - BARRACKPORE");\r
        System.out.println("==========================================================================\\n");\r
\r
        Thread t1 = new Thread(() -> safeDeposit(500), "Swadeep-Thread");\r
        Thread t2 = new Thread(() -> safeDeposit(300), "Tuhina-Thread");\r
\r
        t1.start();\r
        t2.start();\r
\r
        t1.join();\r
        t2.join();\r
\r
        System.out.printf("\\n>>> Final Safe Account Balance: ₹%d (100%% INTACT!)%n", balance);\r
\r
        System.out.println("\\n==========================================================================");\r
    }\r
}`,l=`================================================================================\r
JAVA CORE TUTORIAL - QUICK REVISION GUIDE\r
Module 008_008: Explicit Locks & Synchronizers\r
Topic 1: Lock Interface & ReentrantLock\r
Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
================================================================================\r
\r
1. THE REENTRANTLOCK IDIOM:\r
   - Interface: 'java.util.concurrent.locks.Lock'.\r
   - Standard Implementation: 'ReentrantLock'.\r
   - Rule 1: Call 'lock.lock()' immediately BEFORE 'try {'.\r
   - Rule 2: ALWAYS call 'lock.unlock()' in the 'finally {' block.\r
   - Reentrant: Same thread can acquire the lock multiple times without self-deadlock.\r
\r
================================================================================\r
Classroom Practice: Barrackpore Academy | Mentor: Sukanta Hui\r
================================================================================`,c=[{question:"Why MUST 'lock.lock()' be called outside the 'try' block and 'lock.unlock()' inside the 'finally' block?",shortAnswer:"1. 'lock.lock() before try': If 'lock.lock()' were placed inside the 'try' block and threw an exception (e.g. OutOfMemoryError or failure), the 'finally' block would still execute and call 'unlock()'. Attempting to unlock an un-acquired lock throws an 'IllegalMonitorStateException', masking the original exception. 2. 'lock.unlock() in finally': Placing 'unlock()' in 'finally' guarantees the lock is 100% released even if an unexpected RuntimeException occurs in the critical section, preventing permanent application deadlocks.",explanation:"Golden coding idiom for explicit locks in Java.",hint:"Call lock() before try so failed acquisition doesn't trigger unlock(); call unlock() in finally to prevent permanent lock leaks on error.",level:"Intermediate",codeExample:"Lock lock = new ReentrantLock(); lock.lock(); try { ... } finally { lock.unlock(); }"}];function h(){return e.jsxs("div",{className:"space-y-12 px-4 md:px-8 py-8 text-slate-200 bg-slate-900 min-h-screen",children:[e.jsxs("header",{className:"space-y-4 border-b border-slate-800 pb-6",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"px-3 py-1 bg-sky-500/10 text-sky-400 border border-sky-500/20 text-xs font-semibold rounded-full uppercase tracking-wider",children:"Module 008_008 · Topic 1"}),e.jsx("span",{className:"px-3 py-1 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-xs font-semibold rounded-full",children:"ReentrantLock Idiom"})]}),e.jsxs("h1",{className:"text-xl sm:text-2xl md:text-3xl font-bold text-white tracking-tight",children:["The ",e.jsx("code",{className:"text-emerald-400 font-mono",children:"Lock"})," Interface & ",e.jsx("code",{className:"text-sky-400 font-mono",children:"ReentrantLock"}),": The Golden Idiom"]}),e.jsxs("p",{className:"text-base md:text-lg text-slate-400 leading-relaxed max-w-4xl",children:["Master explicit locking: implementing the mandatory ",e.jsx("code",{className:"text-emerald-300 font-mono",children:"lock()"})," pre-try acquisition and guaranteeing leak-free ",e.jsx("code",{className:"text-amber-300 font-mono",children:"unlock()"})," execution inside ",e.jsx("code",{className:"text-purple-300 font-mono",children:"finally"})," blocks."]})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsxs("h2",{className:"text-2xl font-bold text-emerald-400 flex items-center gap-2",children:[e.jsx("span",{children:"💻"})," Hands-On Java Demo Code"]}),e.jsx(n,{fileModule:a,title:"LockInterfaceAndReentrantLockDemo.java",highlightLines:[7,10,14,15,18,19,21,22,26,27]})]}),e.jsx("section",{className:"space-y-4",children:e.jsx(t,{title:"ReentrantLock Idiom FAQs",questions:c})}),e.jsx("section",{className:"space-y-4",children:e.jsx(o,{content:l,title:"Module 008_008 Topic 1: ReentrantLock Idiom",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Printable Note",downloadFileName:"008_008_topic1_reentrantlock_idiom_note.txt"})}),e.jsx(r,{note:"Memorize this pattern for life: 'lock.lock()' goes RIGHT BEFORE the try block, and 'lock.unlock()' goes in the finally block! If you forget the finally block, an unhandled exception will lock up your server forever! — Sukanta Hui"})]})}export{h as default};
