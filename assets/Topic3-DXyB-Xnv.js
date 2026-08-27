import{j as e}from"./vendor-react-core-Doz9nIC6.js";import{J as n}from"./JavaFileLoader-BfBG3xz_.js";import{F as r}from"./FAQTemplate-CkSqDH4B.js";import{P as t}from"./PlainTextPrint-C08xhKA4.js";import{T as a}from"./TeacherSukantaHui-CC0AKmkm.js";import"./JavaCodeBlock-BwsLxS3r.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-BtJHuk7w.js";const o=`/**\r
 * Java Core Tutorial - Module 007_004: Queue, Deque & PriorityQueue\r
 * Topic 3: Safe Special-Value Queue Methods: offer(e), poll(), and peek()\r
 * Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
 */\r
\r
package com.coderaccotax.javatutorial.collections;\r
\r
import java.util.ArrayDeque;\r
import java.util.Queue;\r
import java.util.concurrent.ArrayBlockingQueue;\r
\r
public class QueueSpecialValueMethodsDemo {\r
\r
    public static void main(String[] args) {\r
        System.out.println("==========================================================================");\r
        System.out.println(" TOPIC 3: SPECIAL-VALUE QUEUE METHODS (offer, poll, peek) - BARRACKPORE");\r
        System.out.println("==========================================================================\\n");\r
\r
        // 1. poll() on EMPTY Queue returns null (NO Exception):\r
        Queue<String> emptyQueue = new ArrayDeque<>();\r
        String polledItem = emptyQueue.poll(); // Returns null safely!\r
        String peekedItem = emptyQueue.peek(); // Returns null safely!\r
\r
        System.out.println(">>> 1. Inspecting Empty Queue via Special-Value APIs:");\r
        System.out.println("  poll() result : " + polledItem + " (Safe null return, zero exceptions)");\r
        System.out.println("  peek() result : " + peekedItem + " (Safe null return, zero exceptions)");\r
\r
        // 2. offer() on a FULL Bounded Queue returns false (NO Exception):\r
        Queue<Integer> boundedQueue = new ArrayBlockingQueue<>(2);\r
        boolean inserted1 = boundedQueue.offer(101);\r
        boolean inserted2 = boundedQueue.offer(102);\r
        boolean insertedOverflow = boundedQueue.offer(103); // Returns false!\r
\r
        System.out.println("\\n>>> 2. Ingesting into Bounded Queue (Capacity 2):");\r
        System.out.println("  offer(101) status      : " + inserted1);\r
        System.out.println("  offer(102) status      : " + inserted2);\r
        System.out.println("  offer(103) on full cap : " + insertedOverflow + " (Gracefully returned false!)");\r
\r
        // 3. Normal Workflow:\r
        System.out.println("\\n>>> 3. Processing Bounded Queue:");\r
        while (boundedQueue.peek() != null) {\r
            System.out.println("  Peeked next: " + boundedQueue.peek() + " | Polled: " + boundedQueue.poll());\r
        }\r
\r
        System.out.println("\\n==========================================================================");\r
    }\r
}`,l=`================================================================================\r
JAVA CORE TUTORIAL - QUICK REVISION GUIDE\r
Module 007_004: Queue, Deque & PriorityQueue\r
Topic 3: Special-Value Queue Methods\r
Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
================================================================================\r
\r
1. SPECIAL-VALUE METHODS:\r
   - 'offer(e)' &rarr; returns 'false' if bounded queue is full.\r
   - 'poll()' &rarr; returns 'null' if queue is empty.\r
   - 'peek()' &rarr; returns 'null' without removing head.\r
   - Zero exception allocation overhead; high throughput standard.\r
\r
================================================================================\r
Classroom Practice: Barrackpore Academy | Mentor: Sukanta Hui\r
================================================================================`,s=[{question:"Why are 'offer()', 'poll()', and 'peek()' overwhelmingly preferred in concurrent, network, and high-performance Java applications?",shortAnswer:"Because creating and throwing Java exceptions incurs severe CPU and memory performance penalties (allocating exception objects, capturing stack traces, and unwinding the JVM execution stack). Returning special values ('false' on full, 'null' on empty) allows algorithms to handle buffer states using lightweight branch checks (e.g. 'if (item == null)'), achieving maximum throughput.",explanation:"Fundamental performance guideline for Java concurrency and messaging architectures.",hint:"Avoids the heavy JVM performance penalty of creating and unwinding exception stack traces.",level:"Intermediate",codeExample:"Task t = queue.poll(); if (t != null) { process(t); } // Zero exception overhead"}];function h(){return e.jsxs("div",{className:"space-y-12 px-4 md:px-8 py-8 text-slate-200 bg-slate-900 min-h-screen",children:[e.jsxs("header",{className:"space-y-4 border-b border-slate-800 pb-6",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"px-3 py-1 bg-sky-500/10 text-sky-400 border border-sky-500/20 text-xs font-semibold rounded-full uppercase tracking-wider",children:"Module 007_004 · Topic 3"}),e.jsx("span",{className:"px-3 py-1 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-xs font-semibold rounded-full",children:"Special Value Methods"})]}),e.jsxs("h1",{className:"text-3xl md:text-4xl font-extrabold text-white tracking-tight",children:["Special-Value Methods: ",e.jsx("code",{className:"text-emerald-400 font-mono",children:"offer()"}),", ",e.jsx("code",{className:"text-sky-400 font-mono",children:"poll()"})," & ",e.jsx("code",{className:"text-amber-400 font-mono",children:"peek()"})]}),e.jsxs("p",{className:"text-base md:text-lg text-slate-400 leading-relaxed max-w-4xl",children:["Build high-throughput queue consumers: utilizing ",e.jsx("code",{className:"text-emerald-300 font-mono",children:"offer(e)"}),", ",e.jsx("code",{className:"text-sky-300 font-mono",children:"poll()"}),", and ",e.jsx("code",{className:"text-amber-300 font-mono",children:"peek()"})," for zero-exception buffer management."]})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsxs("h2",{className:"text-2xl font-bold text-emerald-400 flex items-center gap-2",children:[e.jsx("span",{children:"💻"})," Hands-On Java Demo Code"]}),e.jsx(n,{fileModule:o,title:"QueueSpecialValueMethodsDemo.java",highlightLines:[7,10,16,17,24,25,26,33,34]})]}),e.jsx("section",{className:"space-y-4",children:e.jsx(r,{title:"Special-Value Methods FAQs",questions:s})}),e.jsx("section",{className:"space-y-4",children:e.jsx(t,{content:l,title:"Module 007_004 Topic 3: Special-Value Queue Methods",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Printable Note",downloadFileName:"007_004_topic3_special_value_queue_methods_note.txt"})}),e.jsx(a,{note:"'poll()' and 'offer()' are the industry standard in production microservices and concurrency! If you want clean, lightning-fast code that never crashes on empty queues, always use special-value methods! — Sukanta Hui"})]})}export{h as default};
