import{j as e}from"./vendor-react-core-Doz9nIC6.js";import{J as n}from"./JavaFileLoader-BfBG3xz_.js";import{F as r}from"./FAQTemplate-BHhlgA96.js";import{P as t}from"./PlainTextPrint-C08xhKA4.js";import{T as o}from"./TeacherSukantaHui-RpFLNJ5A.js";import"./JavaCodeBlock-BwsLxS3r.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-wprqVFW_.js";const a=`/**\r
 * Java Core Tutorial - Module 008_004: Inter-Thread Communication & Producer-Consumer\r
 * Topic 10: Classic Problem: Thread-Safe Bounded Buffer / Producer-Consumer Queue (Capstone)\r
 * Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
 */\r
\r
package com.coderaccotax.javatutorial.multithreading;\r
\r
import java.util.LinkedList;\r
import java.util.Queue;\r
\r
// 1. THREAD-SAFE BOUNDED BUFFER IMPLEMENTATION:\r
class BoundedBlockingQueue<T> {\r
\r
    private final Queue<T> buffer = new LinkedList<>();\r
    private final int capacity;\r
    private final Object lock = new Object();\r
\r
    public BoundedBlockingQueue(int capacity) {\r
        this.capacity = capacity;\r
    }\r
\r
    // PRODUCER METHOD (Blocks if buffer is full):\r
    public void put(T item) throws InterruptedException {\r
        synchronized (lock) {\r
            // GOLDEN RULE: Wait while buffer is FULL:\r
            while (buffer.size() == capacity) {\r
                System.out.printf("  [Producer %s] Buffer is FULL (size: %d/%d). Waiting...%n",\r
                        Thread.currentThread().getName(), buffer.size(), capacity);\r
                lock.wait(); // Releases lock and waits for consumer to take an item!\r
            }\r
\r
            buffer.add(item);\r
            System.out.printf(">>> [Producer %s] PUT item: %s (Buffer size: %d/%d)%n",\r
                    Thread.currentThread().getName(), item, buffer.size(), capacity);\r
\r
            // Signal consumers that an item is available:\r
            lock.notifyAll();\r
        }\r
    }\r
\r
    // CONSUMER METHOD (Blocks if buffer is empty):\r
    public T take() throws InterruptedException {\r
        synchronized (lock) {\r
            // GOLDEN RULE: Wait while buffer is EMPTY:\r
            while (buffer.isEmpty()) {\r
                System.out.printf("  [Consumer %s] Buffer is EMPTY. Waiting...%n",\r
                        Thread.currentThread().getName());\r
                lock.wait(); // Releases lock and waits for producer to put an item!\r
            }\r
\r
            T item = buffer.remove();\r
            System.out.printf("<<< [Consumer %s] TOOK item: %s (Buffer size: %d/%d)%n",\r
                    Thread.currentThread().getName(), item, buffer.size(), capacity);\r
\r
            // Signal producers that a slot has freed up:\r
            lock.notifyAll();\r
            return item;\r
        }\r
    }\r
}\r
\r
public class ProducerConsumerBoundedBufferCapstoneDemo {\r
\r
    public static void main(String[] args) throws InterruptedException {\r
        System.out.println("==========================================================================");\r
        System.out.println(" TOPIC 10: PRODUCER-CONSUMER BOUNDED BUFFER CAPSTONE - BARRACKPORE");\r
        System.out.println("==========================================================================\\n");\r
\r
        // Bounded buffer with capacity of 2 items:\r
        BoundedBlockingQueue<String> invoiceQueue = new BoundedBlockingQueue<>(2);\r
\r
        // 2 Producers adding invoices:\r
        Thread p1 = new Thread(() -> {\r
            try {\r
                invoiceQueue.put("GST-INV-101");\r
                invoiceQueue.put("GST-INV-102");\r
                invoiceQueue.put("GST-INV-103"); // Will block until consumer drains!\r
            } catch (InterruptedException ignored) {}\r
        }, "P1");\r
\r
        // 2 Consumers consuming invoices:\r
        Thread c1 = new Thread(() -> {\r
            try {\r
                Thread.sleep(400); // Delay consumer start to demonstrate blocking on full\r
                invoiceQueue.take();\r
                invoiceQueue.take();\r
                invoiceQueue.take();\r
            } catch (InterruptedException ignored) {}\r
        }, "C1");\r
\r
        p1.start();\r
        c1.start();\r
\r
        p1.join();\r
        c1.join();\r
\r
        System.out.println("\\n==========================================================================");\r
        System.out.println(" 🎉 MODULE 008_004 INTER-THREAD COMMUNICATION 100% COMPLETE!");\r
        System.out.println("==========================================================================");\r
    }\r
}`,i=`================================================================================\r
JAVA CORE TUTORIAL - QUICK REVISION GUIDE\r
Module 008_004: Inter-Thread Communication & Producer-Consumer\r
Topic 10: Bounded Buffer Capstone\r
Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
================================================================================\r
\r
1. MODULE 008_004 GRAND SUMMARY:\r
   - Busy Waiting burns 100% CPU; wait/notify gives 0% idle CPU cost.\r
   - 4 Methods on Object: wait(), wait(timeout), notify(), notifyAll().\r
   - Declared on Object because locks belong to objects, not threads.\r
   - Mandatory: Must hold monitor lock before calling wait/notify.\r
   - IllegalMonitorStateException thrown if lock is not owned.\r
   - wait(): releases lock, enters Wait Set, re-acquires lock upon wakeup.\r
   - notify(): wakes 1 arbitrary waiter; notifyAll(): broadcasts to all.\r
   - Spurious wakeups occur due to OS kernel signals.\r
   - Golden Rule: ALWAYS call wait() inside a WHILE loop!\r
   - Bounded Buffer: Producer waits when full; Consumer waits when empty.\r
\r
================================================================================\r
Classroom Practice: Barrackpore Academy | Mentor: Sukanta Hui\r
================================================================================`,s=[{question:"Explain the dual synchronization mechanism in a classic thread-safe Bounded Buffer implemented with wait() and notifyAll().",shortAnswer:"A thread-safe Bounded Buffer coordinates producers and consumers through two complementary condition predicates on a single monitor lock: 1. 'Producer Condition': Producers check 'while (buffer.size() == capacity) lock.wait()', releasing the lock and blocking when full until a consumer removes an element. 2. 'Consumer Condition': Consumers check 'while (buffer.isEmpty()) lock.wait()', releasing the lock and blocking when empty until a producer inserts an element. Whenever a producer adds an item or a consumer removes an item, it calls 'lock.notifyAll()' to broadcast the state change to the opposing waiting threads.",explanation:"Grand capstone problem of Module 008_004 and the foundation of ArrayBlockingQueue.",hint:"Producers wait when full; consumers wait when empty; both call notifyAll() after mutating the buffer.",level:"Advanced",codeExample:"put: while(full) wait(); add(); notifyAll(); | take: while(empty) wait(); remove(); notifyAll();"}];function x(){return e.jsxs("div",{className:"space-y-12 px-4 md:px-8 py-8 text-slate-200 bg-slate-900 min-h-screen",children:[e.jsxs("header",{className:"space-y-4 border-b border-slate-800 pb-6",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"px-3 py-1 bg-sky-500/10 text-sky-400 border border-sky-500/20 text-xs font-semibold rounded-full uppercase tracking-wider",children:"Module 008_004 · Topic 10"}),e.jsx("span",{className:"px-3 py-1 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-xs font-semibold rounded-full",children:"Producer-Consumer Capstone"})]}),e.jsxs("h1",{className:"text-xl sm:text-2xl md:text-3xl font-bold text-white tracking-tight",children:["Classic Problem: Building a Thread-Safe ",e.jsx("code",{className:"text-emerald-400 font-mono",children:"Bounded Buffer"})," (Capstone)"]}),e.jsxs("p",{className:"text-base md:text-lg text-slate-400 leading-relaxed max-w-4xl",children:["Construct production-grade concurrency queues: building a thread-safe ",e.jsx("code",{className:"text-emerald-300 font-mono",children:"BoundedBlockingQueue"})," from scratch using ",e.jsx("code",{className:"text-sky-300 font-mono",children:"wait()"}),", ",e.jsx("code",{className:"text-purple-300 font-mono",children:"notifyAll()"}),", and dual condition while-loops."]})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsxs("h2",{className:"text-2xl font-bold text-emerald-400 flex items-center gap-2",children:[e.jsx("span",{children:"💻"})," Hands-On Java Demo Code"]}),e.jsx(n,{fileModule:a,title:"ProducerConsumerBoundedBufferCapstoneDemo.java",highlightLines:[7,10,21,22,29,30,39,40,47,48]})]}),e.jsx("section",{className:"space-y-4",children:e.jsx(r,{title:"Bounded Buffer FAQs",questions:s})}),e.jsx("section",{className:"space-y-4",children:e.jsx(t,{content:i,title:"Module 008_004 Topic 10: Producer-Consumer Capstone",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Printable Note",downloadFileName:"008_004_topic10_producer_consumer_capstone_note.txt"})}),e.jsx(o,{note:"Congratulations on completing Module 008_004! You have built the holy grail of multithreading—a thread-safe Bounded Buffer from scratch using wait() and notifyAll()! This exact pattern powers modern thread pools, message queues, and Kafka consumers! — Sukanta Hui"})]})}export{x as default};
