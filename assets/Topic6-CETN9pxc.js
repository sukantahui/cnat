import{j as e}from"./vendor-react-core-Doz9nIC6.js";import{J as t}from"./JavaFileLoader-BfBG3xz_.js";import{F as r}from"./FAQTemplate-BHhlgA96.js";import{P as n}from"./PlainTextPrint-C08xhKA4.js";import{T as a}from"./TeacherSukantaHui-DerPxfxp.js";import"./JavaCodeBlock-BwsLxS3r.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-CH1iX9C8.js";const i=`/**\r
 * Java Core Tutorial - Module 008_004: Inter-Thread Communication & Producer-Consumer\r
 * Topic 6: How notify() Operates: Arbitrary Wait-Set Selection & Entry-Set Migration\r
 * Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
 */\r
\r
package com.coderaccotax.javatutorial.multithreading;\r
\r
public class HowNotifyWakesSingleWaiterDemo {\r
\r
    private static final Object SIGNAL_LOCK = new Object();\r
\r
    public static void main(String[] args) throws InterruptedException {\r
        System.out.println("==========================================================================");\r
        System.out.println(" TOPIC 6: HOW notify() WAKES A SINGLE ARBITRARY THREAD - BARRACKPORE");\r
        System.out.println("==========================================================================\\n");\r
\r
        Runnable waiterTask = () -> {\r
            synchronized (SIGNAL_LOCK) {\r
                String name = Thread.currentThread().getName();\r
                System.out.printf("  [%s] Entered Wait Set waiting for signal...%n", name);\r
                try {\r
                    SIGNAL_LOCK.wait();\r
                    System.out.printf(">>> [%s] WOKEN UP BY notify() and successfully re-acquired lock!%n", name);\r
                } catch (InterruptedException ignored) {}\r
            }\r
        };\r
\r
        Thread t1 = new Thread(waiterTask, "Student-Swadeep");\r
        Thread t2 = new Thread(waiterTask, "Student-Tuhina");\r
        Thread t3 = new Thread(waiterTask, "Student-Abhronila");\r
\r
        t1.start();\r
        t2.start();\r
        t3.start();\r
\r
        Thread.sleep(200); // Ensure all 3 students are in Wait Set\r
\r
        // Single notifier thread invoking notify():\r
        Thread notifier = new Thread(() -> {\r
            synchronized (SIGNAL_LOCK) {\r
                System.out.println("\\n>>> [Notifier] Calling SIGNAL_LOCK.notify() ONCE:");\r
                SIGNAL_LOCK.notify(); // Wakes up ONLY ONE arbitrary thread!\r
                System.out.println("  [Notifier] notify() completed. Notice that ONLY ONE student wakes up!");\r
            }\r
        }, "Notifier-Thread");\r
\r
        notifier.start();\r
        notifier.join();\r
\r
        Thread.sleep(300);\r
\r
        System.out.println("\\n>>> CRITICAL REALITIES OF notify():");\r
        System.out.println("  1. Non-Deterministic : The JVM chooses an arbitrary thread from the Wait Set. There is NO FIFO or priority guarantee!");\r
        System.out.println("  2. Starvation Hazard : The other 2 students remain stuck in the Wait Set forever unless another notify() is issued.");\r
        System.out.println("  3. Best Practice     : Use 'notifyAll()' in 99% of enterprise applications to prevent deadlocks!");\r
\r
        // Cleanup: Wake remaining threads before finishing\r
        synchronized (SIGNAL_LOCK) {\r
            SIGNAL_LOCK.notifyAll();\r
        }\r
        t1.join();\r
        t2.join();\r
        t3.join();\r
\r
        System.out.println("\\n==========================================================================");\r
    }\r
}`,o=`================================================================================\r
JAVA CORE TUTORIAL - QUICK REVISION GUIDE\r
Module 008_004: Inter-Thread Communication & Producer-Consumer\r
Topic 6: How notify() Works\r
Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
================================================================================\r
\r
1. HOW NOTIFY() WORKS:\r
   - Wakes up exactly ONE arbitrary thread from Wait Set.\r
   - Non-deterministic: NO FIFO or priority order guaranteed.\r
   - Moves thread from WAITING to BLOCKED (Entry Set).\r
   - Risk: Other waiting threads remain trapped (Thread Starvation).\r
   - Prefer 'notifyAll()' to eliminate missed signal hazards.\r
\r
================================================================================\r
Classroom Practice: Barrackpore Academy | Mentor: Sukanta Hui\r
================================================================================`,s=[{question:"What are the rules and potential risks when calling 'notify()' with multiple waiting threads?",shortAnswer:"'notify()' wakes up exactly ONE arbitrary thread from the object's Wait Set and moves it to the Entry Set (BLOCKED state). 1. 'Arbitrary Selection': The selection is non-deterministic (JVM does not guarantee FIFO order or priority). 2. 'Starvation & Deadlock Risk': If multiple threads are waiting on different conditions (e.g. producers waiting for space and consumers waiting for data), 'notify()' might wake up another producer instead of a consumer, resulting in a thread starvation or total system deadlock. 3. 'Recommendation': Prefer 'notifyAll()'.",explanation:"Standard Java concurrency hazard analysis.",hint:"notify() selects an arbitrary thread with no FIFO guarantee; unnotified threads may starve.",level:"Intermediate",codeExample:"lock.notify(); // Wakes only 1 arbitrary thread from wait set"}];function f(){return e.jsxs("div",{className:"space-y-12 px-4 md:px-8 py-8 text-slate-200 bg-slate-900 min-h-screen",children:[e.jsxs("header",{className:"space-y-4 border-b border-slate-800 pb-6",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"px-3 py-1 bg-sky-500/10 text-sky-400 border border-sky-500/20 text-xs font-semibold rounded-full uppercase tracking-wider",children:"Module 008_004 · Topic 6"}),e.jsx("span",{className:"px-3 py-1 bg-amber-500/10 text-amber-400 border border-amber-500/20 text-xs font-semibold rounded-full",children:"notify() Mechanics"})]}),e.jsxs("h1",{className:"text-xl sm:text-2xl md:text-3xl font-bold text-white tracking-tight",children:["How ",e.jsx("code",{className:"text-amber-400 font-mono",children:"notify()"})," Works: Arbitrary Selection & Starvation Hazards"]}),e.jsx("p",{className:"text-base md:text-lg text-slate-400 leading-relaxed max-w-4xl",children:"Analyze single-signal dispatching: examining non-deterministic Wait-Set selection, Entry-Set lock migration, and the risk of orphaned waiting threads."})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsxs("h2",{className:"text-2xl font-bold text-emerald-400 flex items-center gap-2",children:[e.jsx("span",{children:"💻"})," Hands-On Java Demo Code"]}),e.jsx(t,{fileModule:i,title:"HowNotifyWakesSingleWaiterDemo.java",highlightLines:[7,10,16,17,18,36,37,38,48,49]})]}),e.jsx("section",{className:"space-y-4",children:e.jsx(r,{title:"notify() Mechanics FAQs",questions:s})}),e.jsx("section",{className:"space-y-4",children:e.jsx(n,{content:o,title:"Module 008_004 Topic 6: How notify() Works",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Printable Note",downloadFileName:"008_004_topic6_how_notify_works_note.txt"})}),e.jsx(a,{note:"If 3 students are waiting for admission results and you call 'notify()', Java picks ONLY ONE random student to wake up! The other 2 remain asleep forever! That's why in real-world systems, we almost always use 'notifyAll()' so nobody gets left behind! — Sukanta Hui"})]})}export{f as default};
