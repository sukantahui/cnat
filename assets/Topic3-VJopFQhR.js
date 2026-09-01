import{j as e}from"./vendor-react-core-Doz9nIC6.js";import{J as t}from"./JavaFileLoader-BfBG3xz_.js";import{F as n}from"./FAQTemplate-BHhlgA96.js";import{P as r}from"./PlainTextPrint-C08xhKA4.js";import{T as a}from"./TeacherSukantaHui-BaJcBHAy.js";import"./JavaCodeBlock-BwsLxS3r.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-8ao-0upJ.js";const i=`/**\r
 * Java Core Tutorial - Module 008_004: Inter-Thread Communication & Producer-Consumer\r
 * Topic 3: The Mandatory Lock Prerequisite: Calling wait() and notify() Inside Synchronized\r
 * Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
 */\r
\r
package com.coderaccotax.javatutorial.multithreading;\r
\r
public class MandatorySynchronizedLockPrerequisiteDemo {\r
\r
    private static final Object COURIER_LOCK = new Object();\r
    private static boolean packageArrived = false;\r
\r
    public static void main(String[] args) throws InterruptedException {\r
        System.out.println("==========================================================================");\r
        System.out.println(" TOPIC 3: MANDATORY SYNCHRONIZED LOCK FOR wait()/notify() - BARRACKPORE");\r
        System.out.println("==========================================================================\\n");\r
\r
        Thread recipientThread = new Thread(() -> {\r
            // MANDATORY: Must hold COURIER_LOCK monitor before calling wait():\r
            synchronized (COURIER_LOCK) {\r
                System.out.println("  [Recipient] Acquired lock. Waiting for package to arrive...");\r
                while (!packageArrived) {\r
                    try {\r
                        // Releases COURIER_LOCK and enters WAITING state:\r
                        COURIER_LOCK.wait();\r
                    } catch (InterruptedException e) {\r
                        System.out.println("  [Recipient] Interrupted!");\r
                    }\r
                }\r
                System.out.println(">>> [Recipient] Woke up! Package received successfully!");\r
            }\r
        }, "Recipient-Worker");\r
\r
        Thread deliveryThread = new Thread(() -> {\r
            try { Thread.sleep(300); } catch (InterruptedException ignored) {}\r
\r
            // MANDATORY: Must hold COURIER_LOCK monitor before calling notify():\r
            synchronized (COURIER_LOCK) {\r
                System.out.println("\\n  [Delivery] Package delivered to Barrackpore! Sending notify signal...");\r
                packageArrived = true;\r
                COURIER_LOCK.notify(); // Signals waiting thread\r
                System.out.println("  [Delivery] notify() dispatched! Releasing lock upon block exit.");\r
            }\r
        }, "Delivery-Worker");\r
\r
        recipientThread.start();\r
        deliveryThread.start();\r
\r
        recipientThread.join();\r
        deliveryThread.join();\r
\r
        System.out.println("\\n>>> WHY JAVA MANDATES LOCK OWNERSHIP FOR wait() AND notify():");\r
        System.out.println("  - To prevent the DEADLY 'Lost Wakeup' race condition!");\r
        System.out.println("  - If wait() and notify() could be called without holding the lock, a delivery thread could call notify() AFTER the recipient checked 'packageArrived' but BEFORE calling wait(), causing the recipient to wait forever!");\r
\r
        System.out.println("\\n==========================================================================");\r
    }\r
}`,o=`================================================================================\r
JAVA CORE TUTORIAL - QUICK REVISION GUIDE\r
Module 008_004: Inter-Thread Communication & Producer-Consumer\r
Topic 3: Mandatory Lock Prerequisite\r
Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
================================================================================\r
\r
1. MANDATORY LOCK PREREQUISITE:\r
   - 'wait()' and 'notify()' MUST be called inside 'synchronized(lockObject)'.\r
   - The thread must OWN the monitor lock of that exact target object.\r
   - Prevents the 'Lost Wakeup' race condition.\r
   - Calling outside synchronized throws 'IllegalMonitorStateException'.\r
\r
================================================================================\r
Classroom Practice: Barrackpore Academy | Mentor: Sukanta Hui\r
================================================================================`,c=[{question:"Why does Java strictly mandate that 'wait()' and 'notify()' MUST be called within a synchronized block holding that exact object's monitor lock?",shortAnswer:"To prevent the fatal 'Lost Wakeup' (or Missed Signal) race condition. Without mutual exclusion over the condition predicate and the wait/notify methods, a signaling thread could interleave between another thread's condition check (e.g. 'if (!packageArrived)') and its 'wait()' invocation. The notifier would fire 'notify()' into an empty wait set, and the receiver would then enter 'wait()' with the signal already lost, sleeping forever in a deadlock. Synchronization ensures that checking the condition and calling 'wait()' occurs atomically.",explanation:"Fundamental concurrency invariant preventing missed notification deadlocks.",hint:"Prevents Lost Wakeup race conditions where notify() fires before the waiting thread actually enters wait().",level:"Intermediate",codeExample:"synchronized(lock) { while(!ready) lock.wait(); } // Guaranteed atomic condition check"}];function x(){return e.jsxs("div",{className:"space-y-12 px-4 md:px-8 py-8 text-slate-200 bg-slate-900 min-h-screen",children:[e.jsxs("header",{className:"space-y-4 border-b border-slate-800 pb-6",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"px-3 py-1 bg-sky-500/10 text-sky-400 border border-sky-500/20 text-xs font-semibold rounded-full uppercase tracking-wider",children:"Module 008_004 · Topic 3"}),e.jsx("span",{className:"px-3 py-1 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-xs font-semibold rounded-full",children:"Lock Prerequisite"})]}),e.jsxs("h1",{className:"text-xl sm:text-2xl md:text-3xl font-bold text-white tracking-tight",children:["Mandatory Requirement: Calling ",e.jsx("code",{className:"text-emerald-400 font-mono",children:"wait()"})," & ",e.jsx("code",{className:"text-sky-400 font-mono",children:"notify()"})," inside ",e.jsx("code",{className:"text-purple-400 font-mono",children:"synchronized"})]}),e.jsxs("p",{className:"text-base md:text-lg text-slate-400 leading-relaxed max-w-4xl",children:["Enforce monitor ownership invariants: understanding how synchronized locks guard condition predicates and eliminate the fatal ",e.jsx("code",{className:"text-rose-300 font-mono",children:"Lost Wakeup"})," race condition."]})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsxs("h2",{className:"text-2xl font-bold text-emerald-400 flex items-center gap-2",children:[e.jsx("span",{children:"💻"})," Hands-On Java Demo Code"]}),e.jsx(t,{fileModule:i,title:"MandatorySynchronizedLockPrerequisiteDemo.java",highlightLines:[7,10,15,16,21,22,33,34,37,38]})]}),e.jsx("section",{className:"space-y-4",children:e.jsx(n,{title:"Mandatory Lock FAQs",questions:c})}),e.jsx("section",{className:"space-y-4",children:e.jsx(r,{content:o,title:"Module 008_004 Topic 3: Mandatory Synchronized Lock",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Printable Note",downloadFileName:"008_004_topic3_mandatory_synchronized_lock_note.txt"})}),e.jsx(a,{note:"If you try to call 'lock.wait()' without wrapping it inside 'synchronized(lock)', Java will throw an IllegalMonitorStateException immediately! You cannot release or signal a lock that you do not own! — Sukanta Hui"})]})}export{x as default};
