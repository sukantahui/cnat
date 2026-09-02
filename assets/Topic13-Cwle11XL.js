import{j as e}from"./vendor-react-core-Doz9nIC6.js";import{J as n}from"./JavaFileLoader-BfBG3xz_.js";import{F as r}from"./FAQTemplate-BHhlgA96.js";import{P as t}from"./PlainTextPrint-C08xhKA4.js";import{T as i}from"./TeacherSukantaHui-RpFLNJ5A.js";import"./JavaCodeBlock-BwsLxS3r.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-wprqVFW_.js";const a=`/**\r
 * Java Core Tutorial - Module 007_004: Queue, Deque & PriorityQueue\r
 * Topic 13: Introduction to java.util.concurrent.BlockingQueue: Producer-Consumer Concurrency (Capstone)\r
 * Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
 */\r
\r
package com.coderaccotax.javatutorial.collections;\r
\r
import java.util.concurrent.ArrayBlockingQueue;\r
import java.util.concurrent.BlockingQueue;\r
import java.util.concurrent.TimeUnit;\r
\r
public class BlockingQueueProducerConsumerCapstoneDemo {\r
\r
    public static void main(String[] args) throws InterruptedException {\r
        System.out.println("==========================================================================");\r
        System.out.println(" TOPIC 13: BlockingQueue PRODUCER-CONSUMER (CAPSTONE) - BARRACKPORE");\r
        System.out.println("==========================================================================\\n");\r
\r
        // Bounded BlockingQueue with capacity of 2 slots:\r
        BlockingQueue<String> messageBus = new ArrayBlockingQueue<>(2);\r
\r
        // 1. Thread 1: PRODUCER (puts messages, blocks if queue is full):\r
        Thread producer = new Thread(() -> {\r
            try {\r
                String[] batch = {"Enrollment: Swadeep", "Enrollment: Tuhina", "Enrollment: Abhronila"};\r
                for (String msg : batch) {\r
                    System.out.println("  [PRODUCER] Attempting to put: " + msg);\r
                    messageBus.put(msg); // BLOCKS if queue is full until space becomes available!\r
                    System.out.println("  [PRODUCER SUCCESS] Put: " + msg);\r
                    Thread.sleep(100);\r
                }\r
            } catch (InterruptedException e) {\r
                Thread.currentThread().interrupt();\r
            }\r
        });\r
\r
        // 2. Thread 2: CONSUMER (takes messages, blocks if queue is empty):\r
        Thread consumer = new Thread(() -> {\r
            try {\r
                for (int i = 0; i < 3; i++) {\r
                    Thread.sleep(250); // Simulating work processing delay\r
                    String item = messageBus.take(); // BLOCKS if queue is empty until item is placed!\r
                    System.out.println("    >>> [CONSUMER PROCESSED] " + item);\r
                }\r
            } catch (InterruptedException e) {\r
                Thread.currentThread().interrupt();\r
            }\r
        });\r
\r
        producer.start();\r
        consumer.start();\r
\r
        producer.join();\r
        consumer.join();\r
\r
        System.out.println("\\n>>> THE BLOCKING QUEUE CONTRACT (java.util.concurrent.BlockingQueue):");\r
        System.out.println("  1. 'put(e)' : Blocks indefinitely until buffer has available capacity.");\r
        System.out.println("  2. 'take()' : Blocks indefinitely until buffer has an element available.");\r
        System.out.println("  3. 'offer(e, time, unit)' / 'poll(time, unit)': Timed blocking methods.");\r
        System.out.println("  4. Standard Implementations: ArrayBlockingQueue (bounded array), LinkedBlockingQueue (linked nodes).");\r
\r
        System.out.println("\\n==========================================================================");\r
        System.out.println(" MODULE 007_004 QUEUE, DEQUE & PRIORITYQUEUE 100% COMPLETE!");\r
        System.out.println("==========================================================================");\r
    }\r
}`,o=`================================================================================\r
JAVA CORE TUTORIAL - QUICK REVISION GUIDE\r
Module 007_004: Queue, Deque & PriorityQueue\r
Topic 13: BlockingQueue Concurrency Capstone\r
Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
================================================================================\r
\r
1. MODULE 007_004 GRAND SUMMARY:\r
   - Queue: FIFO task buffering (First-In, First-Out).\r
   - 2 Method Families: Exceptions (add/remove) vs Special Values (offer/poll).\r
   - PriorityQueue: Binary Min-Heap (Array math: parent=(i-1)/2, children=2i+1, 2i+2).\r
   - Sifting: O(log n) sift-up (offer) and sift-down (poll); Max-Heap via reverseOrder().\r
   - Deque: Double-Ended Queue (12-method matrix).\r
   - ArrayDeque: Contiguous circular array buffer; beats Stack & LinkedList.\r
   - BlockingQueue: 'put()' / 'take()' thread coordination for producer-consumer systems.\r
\r
================================================================================\r
Classroom Practice: Barrackpore Academy | Mentor: Sukanta Hui\r
================================================================================`,s=[{question:"How do 'BlockingQueue.put(e)' and 'BlockingQueue.take()' coordinate producer and consumer threads without active CPU busy-waiting?",shortAnswer:"'BlockingQueue.put(e)' blocks the calling producer thread (putting it into a WAITING state via internal ReentrantLock Condition variables) if the queue is full, automatically waking it when a consumer removes an item. Similarly, 'BlockingQueue.take()' blocks the consumer thread if the queue is empty, automatically waking it when a producer inserts an item. This provides thread coordination with zero CPU busy-waiting.",explanation:"Core concurrency building block in java.util.concurrent (JSR-166).",hint:"put() blocks on full queue; take() blocks on empty queue; coordinates threads using Condition variables with 0% CPU spin.",level:"Advanced",codeExample:"queue.put(item); // Blocks until space; Item i = queue.take(); // Blocks until item arrives"}];function k(){return e.jsxs("div",{className:"space-y-12 px-4 md:px-8 py-8 text-slate-200 bg-slate-900 min-h-screen",children:[e.jsxs("header",{className:"space-y-4 border-b border-slate-800 pb-6",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"px-3 py-1 bg-sky-500/10 text-sky-400 border border-sky-500/20 text-xs font-semibold rounded-full uppercase tracking-wider",children:"Module 007_004 · Topic 13"}),e.jsx("span",{className:"px-3 py-1 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-xs font-semibold rounded-full",children:"BlockingQueue Capstone"})]}),e.jsxs("h1",{className:"text-xl sm:text-2xl md:text-3xl font-bold text-white tracking-tight",children:[e.jsx("code",{className:"text-emerald-400 font-mono",children:"BlockingQueue"}),": Thread-Safe Producer-Consumer Pipelines (Capstone)"]}),e.jsxs("p",{className:"text-base md:text-lg text-slate-400 leading-relaxed max-w-4xl",children:["Synthesize concurrent queue architectures: coordinating multi-threaded producer and consumer threads using blocking ",e.jsx("code",{className:"text-emerald-300 font-mono",children:"put()"})," and ",e.jsx("code",{className:"text-sky-300 font-mono",children:"take()"})," semantics."]})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsxs("h2",{className:"text-2xl font-bold text-emerald-400 flex items-center gap-2",children:[e.jsx("span",{children:"💻"})," Hands-On Java Demo Code"]}),e.jsx(n,{fileModule:a,title:"BlockingQueueProducerConsumerCapstoneDemo.java",highlightLines:[7,10,16,21,22,32,33,39,40]})]}),e.jsx("section",{className:"space-y-4",children:e.jsx(r,{title:"BlockingQueue FAQs",questions:s})}),e.jsx("section",{className:"space-y-4",children:e.jsx(t,{content:o,title:"Module 007_004 Topic 13: BlockingQueue Capstone",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Printable Note",downloadFileName:"007_004_topic13_blocking_queue_capstone_note.txt"})}),e.jsx(i,{note:"Congratulations on completing Module 007_004! You have mastered FIFO Queues, Min/Max Binary Heaps with bitwise indexing math, ArrayDeque circular buffers, and concurrent BlockingQueues! — Sukanta Hui"})]})}export{k as default};
