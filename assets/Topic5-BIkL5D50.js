import{j as e}from"./vendor-react-core-Doz9nIC6.js";import{J as t}from"./JavaFileLoader-BfBG3xz_.js";import{F as r}from"./FAQTemplate-CkSqDH4B.js";import{P as n}from"./PlainTextPrint-C08xhKA4.js";import{T as o}from"./TeacherSukantaHui-CyIG3xbg.js";import"./JavaCodeBlock-BwsLxS3r.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-CIaKtAt4.js";const a=`/**\r
 * Java Core Tutorial - Module 008_004: Inter-Thread Communication & Producer-Consumer\r
 * Topic 5: How wait() Operates: Lock Release, Wait Set Registration & State Lifecycle\r
 * Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
 */\r
\r
package com.coderaccotax.javatutorial.multithreading;\r
\r
public class HowWaitReleasesLockInternalDemo {\r
\r
    private static final Object GATE_LOCK = new Object();\r
\r
    public static void main(String[] args) throws InterruptedException {\r
        System.out.println("==========================================================================");\r
        System.out.println(" TOPIC 5: HOW wait() RELEASES LOCKS & USES WAIT SET - BARRACKPORE");\r
        System.out.println("==========================================================================\\n");\r
\r
        Thread workerA = new Thread(() -> {\r
            synchronized (GATE_LOCK) {\r
                System.out.println("  [Worker A] 1. Acquired GATE_LOCK.");\r
                System.out.println("  [Worker A] 2. Calling GATE_LOCK.wait()...");\r
                try {\r
                    // ATOMIC ACTION: Releases GATE_LOCK and enters GATE_LOCK's Wait Set:\r
                    GATE_LOCK.wait();\r
                } catch (InterruptedException ignored) {}\r
\r
                System.out.println("  [Worker A] 5. RE-ACQUIRED GATE_LOCK and resumed execution!");\r
            }\r
        }, "Worker-A");\r
\r
        Thread workerB = new Thread(() -> {\r
            // Worker B can ONLY enter here because Worker A released GATE_LOCK in wait()!\r
            synchronized (GATE_LOCK) {\r
                System.out.println(">>> [Worker B] 3. Successfully acquired GATE_LOCK (Proof that wait() released it!)");\r
                System.out.println(">>> [Worker B] 4. Calling GATE_LOCK.notify() and releasing lock...");\r
                GATE_LOCK.notify();\r
            }\r
        }, "Worker-B");\r
\r
        workerA.start();\r
        Thread.sleep(100); // Ensure Worker A enters wait()\r
        workerB.start();\r
\r
        workerA.join();\r
        workerB.join();\r
\r
        System.out.println("\\n>>> THE 4-STEP LIFECYCLE OF wait():");\r
        System.out.println("  1. Lock Release       : Atomically releases the object's intrinsic monitor lock.");\r
        System.out.println("  2. Wait Set Migration : Thread is placed in the object's internal 'Wait Set' queue.");\r
        System.out.println("  3. CPU Descheduling   : Thread transitions to 'WAITING' (0% CPU consumption).");\r
        System.out.println("  4. Re-Acquisition     : Upon being notified, thread moves to 'Entry Set' (BLOCKED) to re-acquire the lock before returning from wait()!");\r
\r
        System.out.println("\\n==========================================================================");\r
    }\r
}`,i=`================================================================================\r
JAVA CORE TUTORIAL - QUICK REVISION GUIDE\r
Module 008_004: Inter-Thread Communication & Producer-Consumer\r
Topic 5: How wait() Works\r
Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
================================================================================\r
\r
1. HOW WAIT() WORKS:\r
   - Atomically releases the monitor lock.\r
   - Enrolls thread in object's Wait Set (WAITING state).\r
   - Consumes 0% CPU cycles.\r
   - On 'notify()', moves to Entry Set (BLOCKED).\r
   - MUST re-acquire monitor lock before exiting 'wait()'.\r
\r
================================================================================\r
Classroom Practice: Barrackpore Academy | Mentor: Sukanta Hui\r
================================================================================`,s=[{question:"Explain the complete step-by-step internal process that occurs when a thread calls 'object.wait()'.",shortAnswer:"1. 'Atomic Lock Release': the thread automatically and atomically releases the intrinsic monitor lock of 'object'. 2. 'Wait Set Enrollment': the thread is added to 'object''s internal Wait Set. 3. 'Suspension': the thread moves from RUNNABLE to WAITING (or TIMED_WAITING) and yields the CPU core. 4. 'Notification & Lock Contention': when signaled via 'notify()', the thread is removed from the Wait Set and placed into the Entry Set (BLOCKED state). 5. 'Resume': the thread MUST re-acquire the monitor lock before it is allowed to return from 'wait()' and continue execution.",explanation:"Deep dive into JVM monitor and Wait Set mechanics.",hint:"Releases lock, enters Wait Set, deschedules CPU, moves to Entry Set on notify, re-acquires lock before resuming.",level:"Advanced",codeExample:"synchronized(obj) { obj.wait(); // Releases lock, re-acquires before returning }"}];function k(){return e.jsxs("div",{className:"space-y-12 px-4 md:px-8 py-8 text-slate-200 bg-slate-900 min-h-screen",children:[e.jsxs("header",{className:"space-y-4 border-b border-slate-800 pb-6",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"px-3 py-1 bg-sky-500/10 text-sky-400 border border-sky-500/20 text-xs font-semibold rounded-full uppercase tracking-wider",children:"Module 008_004 · Topic 5"}),e.jsx("span",{className:"px-3 py-1 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-xs font-semibold rounded-full",children:"wait() Mechanics"})]}),e.jsxs("h1",{className:"text-3xl md:text-4xl font-extrabold text-white tracking-tight",children:["How ",e.jsx("code",{className:"text-emerald-400 font-mono",children:"wait()"})," Works: Lock Release, Wait Set & Lock Re-Acquisition"]}),e.jsx("p",{className:"text-base md:text-lg text-slate-400 leading-relaxed max-w-4xl",children:"Trace internal JVM monitor transitions: understanding atomic lock releases, Wait Set enrollment, notification queues, and the mandatory lock re-acquisition phase."})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsxs("h2",{className:"text-2xl font-bold text-emerald-400 flex items-center gap-2",children:[e.jsx("span",{children:"💻"})," Hands-On Java Demo Code"]}),e.jsx(t,{fileModule:a,title:"HowWaitReleasesLockInternalDemo.java",highlightLines:[7,10,15,16,20,21,28,29,36,37]})]}),e.jsx("section",{className:"space-y-4",children:e.jsx(r,{title:"wait() Mechanics FAQs",questions:s})}),e.jsx("section",{className:"space-y-4",children:e.jsx(n,{content:i,title:"Module 008_004 Topic 5: How wait() Works",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Printable Note",downloadFileName:"008_004_topic5_how_wait_works_note.txt"})}),e.jsx(o,{note:"Notice the magic of wait(): It releases the lock so another thread can enter and produce data, but when notify() is called, the waiting thread MUST re-acquire the exact same lock before continuing! — Sukanta Hui"})]})}export{k as default};
