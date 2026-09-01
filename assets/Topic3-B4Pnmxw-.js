import{j as e}from"./vendor-react-core-Doz9nIC6.js";import{J as n}from"./JavaFileLoader-BfBG3xz_.js";import{F as t}from"./FAQTemplate-BHhlgA96.js";import{P as o}from"./PlainTextPrint-C08xhKA4.js";import{T as i}from"./TeacherSukantaHui-BaJcBHAy.js";import"./JavaCodeBlock-BwsLxS3r.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-8ao-0upJ.js";const r=`/**\r
 * Java Core Tutorial - Module 008_008: Explicit Locks & Synchronizers\r
 * Topic 3: The Condition Interface: Replacing wait/notify with Multiple Condition Queues\r
 * Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
 */\r
\r
package com.coderaccotax.javatutorial.multithreading;\r
\r
import java.util.concurrent.locks.Condition;\r
import java.util.concurrent.locks.Lock;\r
import java.util.concurrent.locks.ReentrantLock;\r
\r
class BoundedQueueWithConditions<T> {\r
    private final Object[] items;\r
    private int count = 0, putIndex = 0, takeIndex = 0;\r
\r
    private final Lock lock = new ReentrantLock();\r
    // 2 SEPARATE CONDITION QUEUES BOUND TO THE SAME LOCK:\r
    private final Condition notFull = lock.newCondition();   // Producer Wait-Queue\r
    private final Condition notEmpty = lock.newCondition();  // Consumer Wait-Queue\r
\r
    public BoundedQueueWithConditions(int capacity) {\r
        this.items = new Object[capacity];\r
    }\r
\r
    public void put(T item) throws InterruptedException {\r
        lock.lock();\r
        try {\r
            while (count == items.length) {\r
                notFull.await(); // Producer sleeps ONLY in notFull wait-queue!\r
            }\r
            items[putIndex] = item;\r
            if (++putIndex == items.length) putIndex = 0;\r
            count++;\r
            // Target ONLY waiting consumers directly (Zero producer wake-up thrashing!):\r
            notEmpty.signal();\r
        } finally {\r
            lock.unlock();\r
        }\r
    }\r
\r
    @SuppressWarnings("unchecked")\r
    public T take() throws InterruptedException {\r
        lock.lock();\r
        try {\r
            while (count == 0) {\r
                notEmpty.await(); // Consumer sleeps ONLY in notEmpty wait-queue!\r
            }\r
            T item = (T) items[takeIndex];\r
            if (++takeIndex == items.length) takeIndex = 0;\r
            count--;\r
            // Target ONLY waiting producers directly:\r
            notFull.signal();\r
            return item;\r
        } finally {\r
            lock.unlock();\r
        }\r
    }\r
}\r
\r
public class ConditionMultipleWaitQueuesDemo {\r
\r
    public static void main(String[] args) throws InterruptedException {\r
        System.out.println("==========================================================================");\r
        System.out.println(" TOPIC 3: Condition INTERFACE & TARGETED SIGNALING - BARRACKPORE");\r
        System.out.println("==========================================================================\\n");\r
\r
        BoundedQueueWithConditions<String> queue = new BoundedQueueWithConditions<>(2);\r
\r
        Thread producer = new Thread(() -> {\r
            try {\r
                queue.put("GST-Invoice-#101");\r
                queue.put("GST-Invoice-#102");\r
                System.out.println(">>> Producer placed 2 items in queue via notFull.signal()!");\r
            } catch (InterruptedException ignored) {}\r
        });\r
\r
        producer.start();\r
        producer.join();\r
\r
        System.out.println("\\n==========================================================================");\r
    }\r
}`,a=`================================================================================\r
JAVA CORE TUTORIAL - QUICK REVISION GUIDE\r
Module 008_008: Explicit Locks & Synchronizers\r
Topic 3: Condition Interface & Multiple Queues\r
Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
================================================================================\r
\r
1. THE CONDITION INTERFACE:\r
   - Replaces 'wait/notify' with 'await()' and 'signal()'.\r
   - Created via 'lock.newCondition()'.\r
   - Enables multiple independent wait-sets per lock (e.g. 'notFull', 'notEmpty').\r
   - Eliminates CPU wake-up thrashing of 'notifyAll()'.\r
   - Powers Java's built-in 'ArrayBlockingQueue'.\r
\r
================================================================================\r
Classroom Practice: Barrackpore Academy | Mentor: Sukanta Hui\r
================================================================================`,l=[{question:"How does the 'Condition' interface in Java improve upon 'Object.wait()' and 'Object.notify()'?",shortAnswer:"With 'Object.wait/notify', every object has only ONE intrinsic wait-set. Calling 'notifyAll()' indiscriminately wakes up ALL waiting threads—both producers and consumers—causing severe CPU context switching thrashing. The 'Condition' interface allows developers to create MULTIPLE independent wait queues ('lock.newCondition()') on a SINGLE lock (e.g. 'notFull' and 'notEmpty'). Producers wait on 'notFull.await()' and are signaled by consumers, while consumers wait on 'notEmpty.await()' and are signaled by producers, achieving precise targeted wakeups.",explanation:"Core architecture of java.util.concurrent.locks.Condition.",hint:"Allows multiple wait-queues per lock (e.g. notFull and notEmpty), eliminating signal thrashing.",level:"Advanced",codeExample:"Condition notFull = lock.newCondition(); notFull.await(); notFull.signal();"}];function w(){return e.jsxs("div",{className:"space-y-12 px-4 md:px-8 py-8 text-slate-200 bg-slate-900 min-h-screen",children:[e.jsxs("header",{className:"space-y-4 border-b border-slate-800 pb-6",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"px-3 py-1 bg-sky-500/10 text-sky-400 border border-sky-500/20 text-xs font-semibold rounded-full uppercase tracking-wider",children:"Module 008_008 · Topic 3"}),e.jsx("span",{className:"px-3 py-1 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-xs font-semibold rounded-full",children:"Condition Queues"})]}),e.jsxs("h1",{className:"text-xl sm:text-2xl md:text-3xl font-bold text-white tracking-tight",children:["The ",e.jsx("code",{className:"text-emerald-400 font-mono",children:"Condition"})," Interface: Multiple Wait Queues (",e.jsx("code",{className:"text-sky-400 font-mono",children:"notFull"})," & ",e.jsx("code",{className:"text-purple-400 font-mono",children:"notEmpty"}),")"]}),e.jsxs("p",{className:"text-base md:text-lg text-slate-400 leading-relaxed max-w-4xl",children:["Evolve beyond monolithic monitor sets: creating multiple targeted ",e.jsx("code",{className:"text-emerald-300 font-mono",children:"Condition"})," wait-queues per lock to eliminate producer/consumer signal thrashing."]})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsxs("h2",{className:"text-2xl font-bold text-emerald-400 flex items-center gap-2",children:[e.jsx("span",{children:"💻"})," Hands-On Java Demo Code"]}),e.jsx(n,{fileModule:r,title:"ConditionMultipleWaitQueuesDemo.java",highlightLines:[7,10,16,17,18,26,27,32,33,42,43,48,49]})]}),e.jsx("section",{className:"space-y-4",children:e.jsx(t,{title:"Condition Interface FAQs",questions:l})}),e.jsx("section",{className:"space-y-4",children:e.jsx(o,{content:a,title:"Module 008_008 Topic 3: Condition Interface & Multiple Queues",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Printable Note",downloadFileName:"008_008_topic3_condition_interface_note.txt"})}),e.jsx(i,{note:"With Object.wait(), producers and consumers sleep in the same crowded room. When you call notifyAll(), everyone wakes up in confusion! With Condition, producers sleep in Room 1 (notFull) and consumers sleep in Room 2 (notEmpty)! You only wake up the exact room you need! — Sukanta Hui"})]})}export{w as default};
