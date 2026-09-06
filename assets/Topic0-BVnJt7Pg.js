import{j as e}from"./vendor-react-core-Doz9nIC6.js";import{J as r}from"./JavaFileLoader-BfBG3xz_.js";import{F as t}from"./FAQTemplate-BHhlgA96.js";import{P as n}from"./PlainTextPrint-C08xhKA4.js";import{T as o}from"./TeacherSukantaHui-DDN87fI5.js";import"./JavaCodeBlock-BwsLxS3r.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-DEsnU7fn.js";const s=`/**\r
 * Java Core Tutorial - Module 008_002: Thread Control & Daemon Threads\r
 * Topic 0: Controlling Thread Timing: Thread.sleep(millis) & The No-Lock-Release Rule\r
 * Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
 */\r
\r
package com.coderaccotax.javatutorial.multithreading;\r
\r
public class ThreadSleepTimingAndLockRuleDemo {\r
\r
    private static final Object VAULT_LOCK = new Object();\r
\r
    public static void main(String[] args) throws InterruptedException {\r
        System.out.println("==========================================================================");\r
        System.out.println(" TOPIC 0: Thread.sleep(millis) & LOCK RETENTION RULE - BARRACKPORE");\r
        System.out.println("==========================================================================\\n");\r
\r
        Thread sleepingWorker = new Thread(() -> {\r
            synchronized (VAULT_LOCK) {\r
                System.out.println(">>> 1. [Sleeping Worker] Entered synchronized block & acquired VAULT_LOCK.");\r
                try {\r
                    System.out.println("  [Sleeping Worker] Going to sleep for 2 seconds (Thread.sleep(2000))...");\r
                    // Calling Thread.sleep() transitions thread to TIMED_WAITING:\r
                    Thread.sleep(2000); // CRITICAL: Does NOT release VAULT_LOCK!\r
                    System.out.println("  [Sleeping Worker] Woke up! Releasing VAULT_LOCK now.");\r
                } catch (InterruptedException e) {\r
                    System.out.println("  [Sleeping Worker] Sleep interrupted!");\r
                }\r
            }\r
        }, "Sleeping-Worker");\r
\r
        Thread waitingWorker = new Thread(() -> {\r
            System.out.println(">>> 2. [Waiting Worker] Attempting to acquire VAULT_LOCK...");\r
            synchronized (VAULT_LOCK) {\r
                System.out.println("  [Waiting Worker] FINALLY acquired VAULT_LOCK after sleeper woke up!");\r
            }\r
        }, "Waiting-Worker");\r
\r
        sleepingWorker.start();\r
        Thread.sleep(100); // Ensure sleepingWorker gets lock first\r
        waitingWorker.start();\r
\r
        sleepingWorker.join();\r
        waitingWorker.join();\r
\r
        System.out.println("\\n>>> THE GOLDEN RULE OF Thread.sleep(millis):");\r
        System.out.println("  1. Pauses Current Thread: Moves the calling thread from RUNNABLE to TIMED_WAITING.");\r
        System.out.println("  2. DOES NOT RELEASE LOCKS: If the thread holds an intrinsic monitor lock ('synchronized') or explicit lock, it HOLDS ONTO THE LOCK while sleeping!");\r
        System.out.println("  3. Contrast with wait(): 'Object.wait()' RELEASES the monitor lock; 'Thread.sleep()' KEEPS the monitor lock!");\r
\r
        System.out.println("\\n==========================================================================");\r
    }\r
}`,i=`================================================================================\r
JAVA CORE TUTORIAL - QUICK REVISION GUIDE\r
Module 008_002: Thread Control & Daemon Threads\r
Topic 0: Thread.sleep() & Lock Rule\r
Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
================================================================================\r
\r
1. THREAD.SLEEP(MILLIS):\r
   - Static method pausing currently executing thread.\r
   - Transitions thread to 'TIMED_WAITING' state.\r
   - Throws checked 'InterruptedException'.\r
   - NEVER releases locks (holds onto synchronized monitors!).\r
   - In contrast: 'Object.wait()' releases monitor locks.\r
\r
================================================================================\r
Classroom Practice: Barrackpore Academy | Mentor: Sukanta Hui\r
================================================================================`,a=[{question:"Does 'Thread.sleep(millis)' release intrinsic monitor locks held inside a 'synchronized' block, and how does this contrast with 'Object.wait()'?",shortAnswer:"NO. 'Thread.sleep(millis)' does NOT release any monitor locks or synchronized locks held by the sleeping thread; other threads competing for those same locks remain BLOCKED for the entire duration of the sleep. In contrast, 'Object.wait()' immediately RELEASES the intrinsic monitor lock and enters the WAITING pool, allowing other threads to acquire the lock.",explanation:"Core multithreading distinction between sleep() and wait().",hint:"sleep() keeps locks; wait() releases locks.",level:"Intermediate",codeExample:"synchronized(lock) { Thread.sleep(1000); } // Keeps lock | synchronized(lock) { lock.wait(); } // Releases lock"}];function x(){return e.jsxs("div",{className:"space-y-12 px-4 md:px-8 py-8 text-slate-200 bg-slate-900 min-h-screen",children:[e.jsxs("header",{className:"space-y-4 border-b border-slate-800 pb-6",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"px-3 py-1 bg-sky-500/10 text-sky-400 border border-sky-500/20 text-xs font-semibold rounded-full uppercase tracking-wider",children:"Module 008_002 · Topic 0"}),e.jsx("span",{className:"px-3 py-1 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-xs font-semibold rounded-full",children:"Thread.sleep()"})]}),e.jsxs("h1",{className:"text-xl sm:text-2xl md:text-3xl font-bold text-white tracking-tight",children:["Controlling Thread Timing: ",e.jsx("code",{className:"text-emerald-400 font-mono",children:"Thread.sleep(millis)"})," & The Lock Retention Rule"]}),e.jsxs("p",{className:"text-base md:text-lg text-slate-400 leading-relaxed max-w-4xl",children:["Master execution pauses: analyzing ",e.jsx("code",{className:"text-emerald-300 font-mono",children:"Thread.sleep()"})," mechanics, ",e.jsx("code",{className:"text-amber-300 font-mono",children:"TIMED_WAITING"})," transitions, and why sleeping threads hold onto locks without releasing them."]})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsxs("h2",{className:"text-2xl font-bold text-emerald-400 flex items-center gap-2",children:[e.jsx("span",{children:"💻"})," Hands-On Java Demo Code"]}),e.jsx(r,{fileModule:s,title:"ThreadSleepTimingAndLockRuleDemo.java",highlightLines:[7,10,15,16,20,21,28,29,41,42]})]}),e.jsx("section",{className:"space-y-4",children:e.jsx(t,{title:"Thread.sleep() FAQs",questions:a})}),e.jsx("section",{className:"space-y-4",children:e.jsx(n,{content:i,title:"Module 008_002 Topic 0: Thread.sleep() and Lock Retention",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Printable Note",downloadFileName:"008_002_topic0_thread_sleep_lock_rule_note.txt"})}),e.jsx(o,{note:"Remember this rule for exams: 'sleep()' sleeps with the key in its pocket! It never releases its synchronized lock! If you want a thread to release its lock while waiting, use 'wait()' instead! — Sukanta Hui"})]})}export{x as default};
