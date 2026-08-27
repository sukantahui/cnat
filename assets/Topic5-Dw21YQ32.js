import{j as e}from"./vendor-react-core-Doz9nIC6.js";import{J as t}from"./JavaFileLoader-BfBG3xz_.js";import{F as n}from"./FAQTemplate-CkSqDH4B.js";import{P as r}from"./PlainTextPrint-C08xhKA4.js";import{T as o}from"./TeacherSukantaHui-CC0AKmkm.js";import"./JavaCodeBlock-BwsLxS3r.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-BtJHuk7w.js";const i=`/**\r
 * Java Core Tutorial - Module 008_001: Thread Fundamentals, Lifecycle & Creation\r
 * Topic 5: Thread Lifecycle States: BLOCKED (Monitor Lock) vs WAITING (Indefinite)\r
 * Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
 */\r
\r
package com.coderaccotax.javatutorial.multithreading;\r
\r
public class BlockedAndWaitingStatesDemo {\r
\r
    private static final Object LOCK = new Object();\r
\r
    public static void main(String[] args) throws InterruptedException {\r
        System.out.println("==========================================================================");\r
        System.out.println(" TOPIC 5: BLOCKED vs WAITING THREAD STATES - BARRACKPORE");\r
        System.out.println("==========================================================================\\n");\r
\r
        // 1. DEMONSTRATING BLOCKED STATE (Waiting to acquire 'synchronized' lock):\r
        Thread lockHolder = new Thread(() -> {\r
            synchronized (LOCK) {\r
                try {\r
                    Thread.sleep(5000); // Holds lock for 5 seconds\r
                } catch (InterruptedException ignored) {}\r
            }\r
        }, "Lock-Holder");\r
\r
        Thread blockedWorker = new Thread(() -> {\r
            synchronized (LOCK) { // Will be blocked waiting for lockHolder to release!\r
                System.out.println("  [Blocked Worker] Acquired lock finally!");\r
            }\r
        }, "Blocked-Worker");\r
\r
        lockHolder.start();\r
        Thread.sleep(100); // Ensure lockHolder has acquired LOCK\r
        blockedWorker.start();\r
        Thread.sleep(100); // Ensure blockedWorker attempts to acquire LOCK\r
\r
        System.out.println(">>> 1. BLOCKED State Inspection:");\r
        System.out.println("  blockedWorker.getState() : " + blockedWorker.getState() + " (Waiting for synchronized monitor lock!)");\r
\r
        // 2. DEMONSTRATING WAITING STATE (Waiting indefinitely for notify/join):\r
        Thread waitingWorker = new Thread(() -> {\r
            synchronized (LOCK) {\r
                try {\r
                    LOCK.wait(); // Releases lock and enters WAITING state indefinitely!\r
                } catch (InterruptedException ignored) {}\r
            }\r
        }, "Waiting-Worker");\r
\r
        waitingWorker.start();\r
        Thread.sleep(100);\r
\r
        System.out.println("\\n>>> 2. WAITING State Inspection:");\r
        System.out.println("  waitingWorker.getState() : " + waitingWorker.getState() + " (Waiting indefinitely via Object.wait())");\r
\r
        System.out.println("\\n>>> BLOCKED vs WAITING DISTINCTION:");\r
        System.out.println("  - BLOCKED : Waiting exclusively to enter a 'synchronized' block/method or re-enter after wait().");\r
        System.out.println("  - WAITING : Waiting indefinitely due to 'Object.wait()', 'Thread.join()', or 'LockSupport.park()'.");\r
\r
        System.out.println("\\n==========================================================================");\r
    }\r
}`,a=`================================================================================\r
JAVA CORE TUTORIAL - QUICK REVISION GUIDE\r
Module 008_001: Thread Fundamentals, Lifecycle & Creation\r
Topic 5: BLOCKED and WAITING States\r
Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
================================================================================\r
\r
1. BLOCKED vs WAITING:\r
   - BLOCKED: Thread is waiting to acquire a 'synchronized' monitor lock.\r
   - WAITING: Thread is waiting indefinitely due to:\r
     * 'Object.wait()'\r
     * 'Thread.join()' (without timeout)\r
     * 'LockSupport.park()'\r
   - WAITING thread yields CPU and does NOT consume processor cycles.\r
\r
================================================================================\r
Classroom Practice: Barrackpore Academy | Mentor: Sukanta Hui\r
================================================================================`,s=[{question:"What is the crucial difference between the 'BLOCKED' state and the 'WAITING' state in Java?",shortAnswer:"'BLOCKED' occurs when a thread is actively attempting to acquire an intrinsic monitor lock (i.e. waiting to enter a 'synchronized' method or block currently held by another thread). 'WAITING' occurs when a thread is passively waiting indefinitely for another thread to perform a specific action (such as waiting for 'Object.notify()' after calling 'wait()', or waiting for another thread to complete after calling 'Thread.join()').",explanation:"Classic thread state distinction frequently asked in technical interviews.",hint:"BLOCKED = waiting for synchronized monitor lock; WAITING = waiting indefinitely for notify() or join().",level:"Intermediate",codeExample:"// BLOCKED: synchronized(lock) { ... } | WAITING: lock.wait(); or thread.join();"}];function x(){return e.jsxs("div",{className:"space-y-12 px-4 md:px-8 py-8 text-slate-200 bg-slate-900 min-h-screen",children:[e.jsxs("header",{className:"space-y-4 border-b border-slate-800 pb-6",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"px-3 py-1 bg-sky-500/10 text-sky-400 border border-sky-500/20 text-xs font-semibold rounded-full uppercase tracking-wider",children:"Module 008_001 · Topic 5"}),e.jsx("span",{className:"px-3 py-1 bg-rose-500/10 text-rose-400 border border-rose-500/20 text-xs font-semibold rounded-full",children:"BLOCKED & WAITING"})]}),e.jsxs("h1",{className:"text-3xl md:text-4xl font-extrabold text-white tracking-tight",children:["Thread Lifecycle: ",e.jsx("code",{className:"text-rose-400 font-mono",children:"BLOCKED"})," (Monitor Lock) vs ",e.jsx("code",{className:"text-purple-400 font-mono",children:"WAITING"})," (Indefinite Wait)"]}),e.jsxs("p",{className:"text-base md:text-lg text-slate-400 leading-relaxed max-w-4xl",children:["Dissect synchronization pauses: distinguishing active lock contention (",e.jsx("code",{className:"text-rose-300 font-mono",children:"BLOCKED"}),") from passive indefinite inter-thread signaling (",e.jsx("code",{className:"text-purple-300 font-mono",children:"WAITING"}),")."]})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsxs("h2",{className:"text-2xl font-bold text-emerald-400 flex items-center gap-2",children:[e.jsx("span",{children:"💻"})," Hands-On Java Demo Code"]}),e.jsx(t,{fileModule:i,title:"BlockedAndWaitingStatesDemo.java",highlightLines:[7,10,16,17,24,25,34,35,41,42,48,49]})]}),e.jsx("section",{className:"space-y-4",children:e.jsx(n,{title:"BLOCKED vs WAITING FAQs",questions:s})}),e.jsx("section",{className:"space-y-4",children:e.jsx(r,{content:a,title:"Module 008_001 Topic 5: BLOCKED and WAITING States",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Printable Note",downloadFileName:"008_001_topic5_blocked_and_waiting_states_note.txt"})}),e.jsx(o,{note:"BLOCKED means you are standing outside a locked bathroom door trying to turn the handle (waiting for a synchronized lock). WAITING means you sat down in the waiting room and asked someone to tap your shoulder when the meeting starts (Object.wait)! — Sukanta Hui"})]})}export{x as default};
