import{j as e}from"./vendor-react-core-Doz9nIC6.js";import{J as r}from"./JavaFileLoader-BfBG3xz_.js";import{F as t}from"./FAQTemplate-CkSqDH4B.js";import{P as n}from"./PlainTextPrint-C08xhKA4.js";import{T as o}from"./TeacherSukantaHui-CyIG3xbg.js";import"./JavaCodeBlock-BwsLxS3r.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-CIaKtAt4.js";const a=`/**\r
 * Java Core Tutorial - Module 007_001: Collections Framework Overview & Core Interfaces\r
 * Topic 8: 3. java.util.Queue & Deque: FIFO / LIFO Buffers & Task Dispatching\r
 * Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
 */\r
\r
package com.coderaccotax.javatutorial.collections;\r
\r
import java.util.ArrayDeque;\r
import java.util.Deque;\r
import java.util.PriorityQueue;\r
import java.util.Queue;\r
\r
public class QueueAndDequeContractBehaviorDemo {\r
\r
    public static void main(String[] args) {\r
        System.out.println("==========================================================================");\r
        System.out.println(" TOPIC 8: java.util.Queue & Deque CONTRACTS - BARRACKPORE");\r
        System.out.println("==========================================================================\\n");\r
\r
        // 1. STANDARD FIFO QUEUE (First-In, First-Out via ArrayDeque):\r
        Queue<String> ticketCounter = new ArrayDeque<>();\r
        ticketCounter.offer("Swadeep (Token 1)");\r
        ticketCounter.offer("Tuhina (Token 2)");\r
        ticketCounter.offer("Abhronila (Token 3)");\r
\r
        System.out.println(">>> 1. FIFO Queue Processing (ArrayDeque):");\r
        System.out.println("  Next in Line (peek()) : " + ticketCounter.peek());\r
        System.out.println("  Served & Removed (poll()): " + ticketCounter.poll());\r
        System.out.println("  Remaining in Line     : " + ticketCounter);\r
\r
        // 2. DOUBLE-ENDED QUEUE (Deque as LIFO Stack):\r
        Deque<String> undoStack = new ArrayDeque<>();\r
        undoStack.push("Action 1: Type text");\r
        undoStack.push("Action 2: Format bold");\r
        undoStack.push("Action 3: Insert table");\r
\r
        System.out.println("\\n>>> 2. LIFO Stack Processing (Deque):");\r
        System.out.println("  Top of Stack (peek()) : " + undoStack.peek());\r
        System.out.println("  Undone Action (pop()) : " + undoStack.pop());\r
        System.out.println("  Remaining Stack       : " + undoStack);\r
\r
        // 3. PRIORITY QUEUE (Min-Heap Ordering):\r
        Queue<Integer> feePriorityQueue = new PriorityQueue<>();\r
        feePriorityQueue.offer(9800);\r
        feePriorityQueue.offer(1200);\r
        feePriorityQueue.offer(4500);\r
\r
        System.out.println("\\n>>> 3. Priority Queue (Processed in Ascending Numerical Priority):");\r
        while (!feePriorityQueue.isEmpty()) {\r
            System.out.println("  Dispatched Priority Item: ₹" + feePriorityQueue.poll());\r
        }\r
\r
        System.out.println("\\n==========================================================================");\r
    }\r
}`,i=`================================================================================\r
JAVA CORE TUTORIAL - QUICK REVISION GUIDE\r
Module 007_001: Collections Framework Overview\r
Topic 8: Queue & Deque Interfaces\r
Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
================================================================================\r
\r
1. QUEUE & DEQUE CONTRACT:\r
   - Queue: FIFO task buffering (First-In, First-Out).\r
   - Deque: Double-Ended Queue (supports FIFO queue and LIFO stack).\r
   - 'offer()' / 'poll()' &rarr; return false/null (safe).\r
   - 'add()' / 'remove()' &rarr; throw exceptions.\r
   - PriorityQueue: heap-ordered priority dispatching.\r
\r
================================================================================\r
Classroom Practice: Barrackpore Academy | Mentor: Sukanta Hui\r
================================================================================`,s=[{question:"What is the key difference between 'Queue.add()/remove()' and 'Queue.offer()/poll()' methods in Java?",shortAnswer:"'add()' and 'remove()' throw runtime exceptions ('IllegalStateException' when full, 'NoSuchElementException' when empty). In contrast, 'offer()' and 'poll()' are designed for safe buffering and concurrency: 'offer()' returns 'false' if insertion fails, and 'poll()' returns 'null' if the queue is empty, avoiding exception overhead.",explanation:"Two sets of methods provided on the Queue interface for distinct error-handling strategies.",hint:"add/remove throw exceptions; offer/poll return special values (false / null).",level:"Intermediate",codeExample:"if (queue.offer(task)) { ... } Task t = queue.poll(); // Returns null if empty"}];function h(){return e.jsxs("div",{className:"space-y-12 px-4 md:px-8 py-8 text-slate-200 bg-slate-900 min-h-screen",children:[e.jsxs("header",{className:"space-y-4 border-b border-slate-800 pb-6",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"px-3 py-1 bg-sky-500/10 text-sky-400 border border-sky-500/20 text-xs font-semibold rounded-full uppercase tracking-wider",children:"Module 007_001 · Topic 8"}),e.jsx("span",{className:"px-3 py-1 bg-amber-500/10 text-amber-400 border border-amber-500/20 text-xs font-semibold rounded-full",children:"Queue & Deque"})]}),e.jsxs("h1",{className:"text-3xl md:text-4xl font-extrabold text-white tracking-tight",children:["3. ",e.jsx("code",{className:"text-amber-400 font-mono",children:"Queue"})," & ",e.jsx("code",{className:"text-amber-400 font-mono",children:"Deque"}),": FIFO Buffers, LIFO Stacks & Priority Heaps"]}),e.jsxs("p",{className:"text-base md:text-lg text-slate-400 leading-relaxed max-w-4xl",children:["Construct high-throughput dispatchers: mastering First-In First-Out buffering (",e.jsx("code",{className:"text-emerald-300 font-mono",children:"Queue"}),"), Last-In First-Out stacks (",e.jsx("code",{className:"text-sky-300 font-mono",children:"Deque"}),"), and heap priority queues."]})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsxs("h2",{className:"text-2xl font-bold text-emerald-400 flex items-center gap-2",children:[e.jsx("span",{children:"💻"})," Hands-On Java Demo Code"]}),e.jsx(r,{fileModule:a,title:"QueueAndDequeContractBehaviorDemo.java",highlightLines:[7,10,16,17,18,25,26,27,34,35,40]})]}),e.jsx("section",{className:"space-y-4",children:e.jsx(t,{title:"Queue & Deque FAQs",questions:s})}),e.jsx("section",{className:"space-y-4",children:e.jsx(n,{content:i,title:"Module 007_001 Topic 8: Queue & Deque",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Printable Note",downloadFileName:"007_001_topic8_queue_and_deque_note.txt"})}),e.jsx(o,{note:"Never use the old legacy 'Stack' class in Java! Always use 'ArrayDeque' for both queues (offer/poll) and stacks (push/pop)! It is faster, modern, and unsynchronized for maximum performance! — Sukanta Hui"})]})}export{h as default};
