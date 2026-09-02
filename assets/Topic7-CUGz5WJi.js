import{j as e}from"./vendor-react-core-Doz9nIC6.js";import{J as t}from"./JavaFileLoader-BfBG3xz_.js";import{F as n}from"./FAQTemplate-BHhlgA96.js";import{P as r}from"./PlainTextPrint-C08xhKA4.js";import{T as a}from"./TeacherSukantaHui-RpFLNJ5A.js";import"./JavaCodeBlock-BwsLxS3r.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-wprqVFW_.js";const s=`/**\r
 * Java Core Tutorial - Module 008_004: Inter-Thread Communication & Producer-Consumer\r
 * Topic 7: How notifyAll() Operates: Broadcast Wakeup & Eliminating Missed Signals\r
 * Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
 */\r
\r
package com.coderaccotax.javatutorial.multithreading;\r
\r
public class HowNotifyAllWakesAllWaitersDemo {\r
\r
    private static final Object CLASSROOM_BELL = new Object();\r
\r
    public static void main(String[] args) throws InterruptedException {\r
        System.out.println("==========================================================================");\r
        System.out.println(" TOPIC 7: HOW notifyAll() WAKES ALL WAITING THREADS - BARRACKPORE");\r
        System.out.println("==========================================================================\\n");\r
\r
        Runnable studentTask = () -> {\r
            synchronized (CLASSROOM_BELL) {\r
                String name = Thread.currentThread().getName();\r
                System.out.printf("  [%s] Waiting for morning assembly bell in classroom...%n", name);\r
                try {\r
                    CLASSROOM_BELL.wait();\r
                    System.out.printf(">>> [%s] WOKEN UP by bell broadcast! Entering assembly hall.%n", name);\r
                } catch (InterruptedException ignored) {}\r
            }\r
        };\r
\r
        Thread s1 = new Thread(studentTask, "Student-Swadeep");\r
        Thread s2 = new Thread(studentTask, "Student-Tuhina");\r
        Thread s3 = new Thread(studentTask, "Student-Abhronila");\r
\r
        s1.start();\r
        s2.start();\r
        s3.start();\r
\r
        Thread.sleep(200); // Ensure all 3 students are registered in Wait Set\r
\r
        // School Bell Rings (Broadcasting notifyAll):\r
        Thread bellRinger = new Thread(() -> {\r
            synchronized (CLASSROOM_BELL) {\r
                System.out.println("\\n>>> [Principal Sukanta Hui] Ringing Assembly Bell via notifyAll()...");\r
                CLASSROOM_BELL.notifyAll(); // Wakes up EVERY thread in the Wait Set!\r
                System.out.println("  [Principal] notifyAll() broadcast sent! All students transitioning to Entry Set.");\r
            }\r
        }, "Bell-Ringer");\r
\r
        bellRinger.start();\r
        bellRinger.join();\r
\r
        s1.join();\r
        s2.join();\r
        s3.join();\r
\r
        System.out.println("\\n>>> WHY notifyAll() IS HIGHLY RECOMMENDED OVER notify():");\r
        System.out.println("  1. Broadcast Guarantee : All waiting threads are moved from the Wait Set to the Entry Set.");\r
        System.out.println("  2. Sequential Execution: Each woken thread competes for the lock one by one, verifies its condition, and proceeds safely.");\r
        System.out.println("  3. Zero Lost Signals   : Completely prevents deadlocks caused by waking up the wrong thread in heterogeneous waiter queues.");\r
\r
        System.out.println("\\n==========================================================================");\r
    }\r
}`,i=`================================================================================\r
JAVA CORE TUTORIAL - QUICK REVISION GUIDE\r
Module 008_004: Inter-Thread Communication & Producer-Consumer\r
Topic 7: How notifyAll() Works\r
Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
================================================================================\r
\r
1. HOW NOTIFYALL() WORKS:\r
   - Wakes up ALL threads in the Wait Set.\r
   - Moves all threads to Entry Set (BLOCKED state).\r
   - Threads acquire lock sequentially and re-test condition.\r
   - Eliminates 'lost signal' and 'wrong thread awakened' bugs.\r
   - Standard best practice in 99% of custom synchronization code.\r
\r
================================================================================\r
Classroom Practice: Barrackpore Academy | Mentor: Sukanta Hui\r
================================================================================`,o=[{question:"Why does 'notifyAll()' prevent missed signals and deadlocks in multi-threaded systems?",shortAnswer:"'notifyAll()' wakes up ALL threads currently in the object's Wait Set and moves them to the Entry Set. Each thread then competes for the intrinsic monitor lock one by one. Once a thread acquires the lock, it re-evaluates its while-loop condition predicate. If the condition is met, it proceeds; if not, it calls 'wait()' again. This ensures that the thread for which the signal was intended is guaranteed to wake up, eliminating missed signal deadlocks where 'notify()' accidentally woke up an unready thread.",explanation:"Standard design recommendation from Java Concurrency in Practice.",hint:"Moves all waiting threads to Entry Set; each checks its own while loop condition without losing signals.",level:"Intermediate",codeExample:"synchronized(lock) { lock.notifyAll(); } // Broadcasts to all waiting threads"}];function g(){return e.jsxs("div",{className:"space-y-12 px-4 md:px-8 py-8 text-slate-200 bg-slate-900 min-h-screen",children:[e.jsxs("header",{className:"space-y-4 border-b border-slate-800 pb-6",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"px-3 py-1 bg-sky-500/10 text-sky-400 border border-sky-500/20 text-xs font-semibold rounded-full uppercase tracking-wider",children:"Module 008_004 · Topic 7"}),e.jsx("span",{className:"px-3 py-1 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-xs font-semibold rounded-full",children:"notifyAll() Broadcast"})]}),e.jsxs("h1",{className:"text-xl sm:text-2xl md:text-3xl font-bold text-white tracking-tight",children:["How ",e.jsx("code",{className:"text-emerald-400 font-mono",children:"notifyAll()"})," Works: Broadcast Signaling & Deadlock Prevention"]}),e.jsx("p",{className:"text-base md:text-lg text-slate-400 leading-relaxed max-w-4xl",children:"Master broadcast notifications: understanding mass Wait-Set to Entry-Set migration, sequential lock contention, and the total elimination of missed-signal deadlocks."})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsxs("h2",{className:"text-2xl font-bold text-emerald-400 flex items-center gap-2",children:[e.jsx("span",{children:"💻"})," Hands-On Java Demo Code"]}),e.jsx(t,{fileModule:s,title:"HowNotifyAllWakesAllWaitersDemo.java",highlightLines:[7,10,16,17,18,35,36,37,43,44]})]}),e.jsx("section",{className:"space-y-4",children:e.jsx(n,{title:"notifyAll() Broadcast FAQs",questions:o})}),e.jsx("section",{className:"space-y-4",children:e.jsx(r,{content:i,title:"Module 008_004 Topic 7: How notifyAll() Works",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Printable Note",downloadFileName:"008_004_topic7_how_notifyall_works_note.txt"})}),e.jsx(a,{note:"'notifyAll()' is like ringing the school bell—it alerts every single student in the building! Each student then checks their own class schedule and enters their room safely! Always prefer notifyAll()! — Sukanta Hui"})]})}export{g as default};
