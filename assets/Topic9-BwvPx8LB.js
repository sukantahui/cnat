import{j as e}from"./vendor-react-core-Doz9nIC6.js";import{J as t}from"./JavaFileLoader-BfBG3xz_.js";import{F as r}from"./FAQTemplate-BHhlgA96.js";import{P as n}from"./PlainTextPrint-C08xhKA4.js";import{T as o}from"./TeacherSukantaHui-RpFLNJ5A.js";import"./JavaCodeBlock-BwsLxS3r.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-wprqVFW_.js";const a=`/**\r
 * Java Core Tutorial - Module 008_005: Thread Safety & Deadlocks\r
 * Topic 9: Breaking Deadlocks with Timeouts: Timed Lock Acquisition via tryLock()\r
 * Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
 */\r
\r
package com.coderaccotax.javatutorial.multithreading;\r
\r
import java.util.concurrent.TimeUnit;\r
import java.util.concurrent.locks.Lock;\r
import java.util.concurrent.locks.ReentrantLock;\r
\r
public class BreakingDeadlocksWithTryLockTimeoutDemo {\r
\r
    private static final Lock LOCK_A = new ReentrantLock();\r
    private static final Lock LOCK_B = new ReentrantLock();\r
\r
    public static void safeTransferWithTimeout(String threadName, Lock first, Lock second) {\r
        while (true) {\r
            boolean acquiredFirst = false;\r
            boolean acquiredSecond = false;\r
            try {\r
                // Attempt to acquire first lock with 50 ms timeout:\r
                acquiredFirst = first.tryLock(50, TimeUnit.MILLISECONDS);\r
                if (acquiredFirst) {\r
                    System.out.printf("[%s] Acquired first lock. Attempting second lock...%n", threadName);\r
                    // Attempt to acquire second lock with 50 ms timeout:\r
                    acquiredSecond = second.tryLock(50, TimeUnit.MILLISECONDS);\r
                    if (acquiredSecond) {\r
                        System.out.printf(">>> [%s] ACQUIRED BOTH LOCKS! Transferring funds safely...%n", threadName);\r
                        Thread.sleep(100); // Simulate transfer\r
                        break; // Success! Exit retry loop\r
                    }\r
                }\r
            } catch (InterruptedException ignored) {\r
            } finally {\r
                // If we got second lock, release it:\r
                if (acquiredSecond) second.unlock();\r
                // If we got first lock but couldn't get second, RELEASE FIRST TO PREVENT DEADLOCK!\r
                if (acquiredFirst) {\r
                    first.unlock();\r
                    System.out.printf("[%s] Contention detected! Voluntarily backed off and released first lock.%n", threadName);\r
                }\r
            }\r
\r
            // Random backoff before retrying to prevent livelock synchronization:\r
            try { Thread.sleep((long) (Math.random() * 50)); } catch (InterruptedException ignored) {}\r
        }\r
    }\r
\r
    public static void main(String[] args) throws InterruptedException {\r
        System.out.println("==========================================================================");\r
        System.out.println(" TOPIC 9: BREAKING DEADLOCKS WITH tryLock(timeout) - BARRACKPORE");\r
        System.out.println("==========================================================================\\n");\r
\r
        // Thread 1: Wants Lock A then Lock B\r
        Thread t1 = new Thread(() -> safeTransferWithTimeout("Swadeep", LOCK_A, LOCK_B), "Thread-Swadeep");\r
        // Thread 2: Wants Lock B then Lock A (Inverted Order!)\r
        Thread t2 = new Thread(() -> safeTransferWithTimeout("Tuhina", LOCK_B, LOCK_A), "Thread-Tuhina");\r
\r
        t1.start();\r
        t2.start();\r
\r
        t1.join();\r
        t2.join();\r
\r
        System.out.println("\\n>>> BOTH TRANSFERS COMPLETED SAFELY WITHOUT PERMANENT DEADLOCK!");\r
\r
        System.out.println("\\n==========================================================================");\r
    }\r
}`,i=`================================================================================\r
JAVA CORE TUTORIAL - QUICK REVISION GUIDE\r
Module 008_005: Thread Safety & Deadlocks\r
Topic 9: Breaking Deadlocks with tryLock()\r
Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
================================================================================\r
\r
1. BREAKING DEADLOCKS WITH TIMEOUTS:\r
   - 'lock.tryLock(timeout, TimeUnit)': Bounded lock acquisition attempt.\r
   - Returns boolean success/failure.\r
   - On timeout: Release all held locks in 'finally' block.\r
   - Add randomized sleep back-off to prevent Livelock.\r
   - Superior to unbounded 'synchronized' blocks for high-contention systems.\r
\r
================================================================================\r
Classroom Practice: Barrackpore Academy | Mentor: Sukanta Hui\r
================================================================================`,c=[{question:"How does 'ReentrantLock.tryLock(long timeout, TimeUnit unit)' prevent unrecoverable deadlocks compared to 'synchronized'?",shortAnswer:"With 'synchronized', if a thread cannot acquire a monitor lock, it blocks indefinitely with NO timeout and cannot be rescued. With 'ReentrantLock.tryLock(timeout)', a thread attempts to acquire the lock within the specified duration. If the timeout expires without acquiring the lock, 'tryLock()' returns 'false'. The thread can then immediately release any previously acquired locks in the 'finally' block, back off, and retry later, thereby breaking the Hold-and-Wait and No-Preemption deadlock conditions.",explanation:"Core resilience pattern using java.util.concurrent.locks.",hint:"Returns false on timeout so the thread can release currently held locks, back off, and retry.",level:"Intermediate",codeExample:"if (lock.tryLock(100, TimeUnit.MILLISECONDS)) { try { ... } finally { lock.unlock(); } }"}];function f(){return e.jsxs("div",{className:"space-y-12 px-4 md:px-8 py-8 text-slate-200 bg-slate-900 min-h-screen",children:[e.jsxs("header",{className:"space-y-4 border-b border-slate-800 pb-6",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"px-3 py-1 bg-sky-500/10 text-sky-400 border border-sky-500/20 text-xs font-semibold rounded-full uppercase tracking-wider",children:"Module 008_005 · Topic 9"}),e.jsx("span",{className:"px-3 py-1 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-xs font-semibold rounded-full",children:"tryLock() Timeouts"})]}),e.jsxs("h1",{className:"text-xl sm:text-2xl md:text-3xl font-bold text-white tracking-tight",children:["Breaking Deadlocks with Timeouts: ",e.jsx("code",{className:"text-emerald-400 font-mono",children:"ReentrantLock.tryLock(timeout)"})]}),e.jsxs("p",{className:"text-base md:text-lg text-slate-400 leading-relaxed max-w-4xl",children:["Construct resilient lock acquisitions: replacing unbounded blocking with timed ",e.jsx("code",{className:"text-emerald-300 font-mono",children:"tryLock()"})," attempts, voluntary lock release in ",e.jsx("code",{className:"text-amber-300 font-mono",children:"finally"}),", and randomized back-off loops."]})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsxs("h2",{className:"text-2xl font-bold text-emerald-400 flex items-center gap-2",children:[e.jsx("span",{children:"💻"})," Hands-On Java Demo Code"]}),e.jsx(t,{fileModule:a,title:"BreakingDeadlocksWithTryLockTimeoutDemo.java",highlightLines:[7,10,19,20,24,25,33,34,35,41,42]})]}),e.jsx("section",{className:"space-y-4",children:e.jsx(r,{title:"tryLock() Timeouts FAQs",questions:c})}),e.jsx("section",{className:"space-y-4",children:e.jsx(n,{content:i,title:"Module 008_005 Topic 9: Breaking Deadlocks with tryLock()",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Printable Note",downloadFileName:"008_005_topic9_trylock_timeouts_note.txt"})}),e.jsx(o,{note:"With 'synchronized', if someone doesn't give you the lock, your thread waits until the end of time! With 'tryLock(50, TimeUnit.MILLISECONDS)', your thread says: 'If you don't give me the lock in 50 milliseconds, I'm dropping my other lock and trying again later!' Deadlock defeated! — Sukanta Hui"})]})}export{f as default};
