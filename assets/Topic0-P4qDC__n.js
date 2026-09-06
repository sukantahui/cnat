import{j as e}from"./vendor-react-core-Doz9nIC6.js";import{J as t}from"./JavaFileLoader-BfBG3xz_.js";import{F as n}from"./FAQTemplate-BHhlgA96.js";import{P as r}from"./PlainTextPrint-C08xhKA4.js";import{T as a}from"./TeacherSukantaHui-DDN87fI5.js";import"./JavaCodeBlock-BwsLxS3r.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-DEsnU7fn.js";const s=`/**\r
 * Java Core Tutorial - Module 007_004: Queue, Deque & PriorityQueue\r
 * Topic 0: The java.util.Queue Interface: FIFO Task & Message Processing Mechanics\r
 * Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
 */\r
\r
package com.coderaccotax.javatutorial.collections;\r
\r
import java.util.ArrayDeque;\r
import java.util.Queue;\r
\r
public class QueueFifoTaskProcessingDemo {\r
\r
    public static void main(String[] args) {\r
        System.out.println("==========================================================================");\r
        System.out.println(" TOPIC 0: java.util.Queue FIFO PROCESSING - BARRACKPORE");\r
        System.out.println("==========================================================================\\n");\r
\r
        Queue<String> studentHelpdesk = new ArrayDeque<>();\r
\r
        // Enqueue tasks in chronological order (FIFO):\r
        studentHelpdesk.offer("Ticket #101: Swadeep Paul (Barrackpore - Fee Query)");\r
        studentHelpdesk.offer("Ticket #102: Tuhina Das (Naihati - Course Certificate)");\r
        studentHelpdesk.offer("Ticket #103: Abhronila Das (Shyamnagar - Lab Access)");\r
\r
        System.out.println(">>> 1. Helpdesk Queue State:");\r
        System.out.println("  Queue Size : " + studentHelpdesk.size());\r
        System.out.println("  Next in line to be served (peek()): " + studentHelpdesk.peek());\r
\r
        // Dequeue tasks in strict First-In First-Out sequence:\r
        System.out.println("\\n>>> 2. Dispatching Tasks in FIFO Sequence:");\r
        while (!studentHelpdesk.isEmpty()) {\r
            String activeTicket = studentHelpdesk.poll(); // Retrieves and removes head\r
            System.out.println("  [DISPATCHED] Serving: " + activeTicket);\r
        }\r
\r
        System.out.println("\\n>>> FINAL STATE: Queue is empty: " + studentHelpdesk.isEmpty());\r
\r
        System.out.println("\\n>>> THE FIFO QUEUE CONTRACT:");\r
        System.out.println("  1. First-In, First-Out: Elements are processed in exact arrival sequence.");\r
        System.out.println("  2. Head & Tail Access : Insertions happen at the TAIL; extractions happen at the HEAD.");\r
        System.out.println("  3. Buffer Pipeline    : Ideal for asynchronous messaging, thread dispatching, and printer queues.");\r
\r
        System.out.println("\\n==========================================================================");\r
    }\r
}`,i=`================================================================================\r
JAVA CORE TUTORIAL - QUICK REVISION GUIDE\r
Module 007_004: Queue, Deque & PriorityQueue\r
Topic 0: java.util.Queue FIFO Processing\r
Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
================================================================================\r
\r
1. QUEUE CONTRACT:\r
   - FIFO: First-In, First-Out sequence.\r
   - Insertions at TAIL; removals at HEAD.\r
   - Ideal for task scheduling, job queues, and message dispatching.\r
   - Default recommended implementation: 'ArrayDeque'.\r
\r
================================================================================\r
Classroom Practice: Barrackpore Academy | Mentor: Sukanta Hui\r
================================================================================`,o=[{question:"What is the primary operational ordering guaranteed by the 'java.util.Queue' interface for standard implementations?",shortAnswer:"The 'java.util.Queue' interface guarantees 'FIFO' (First-In, First-Out) ordering for standard implementations (like ArrayDeque and LinkedList). Elements are appended to the 'tail' of the queue and extracted from the 'head' of the queue in strict chronological arrival sequence.",explanation:"Core ordering principle of the Queue interface.",hint:"First-In First-Out (FIFO) where elements are added at the tail and removed from the head.",level:"Beginner",codeExample:'Queue<String> q = new ArrayDeque<>(); q.offer("First"); String s = q.poll();'}];function f(){return e.jsxs("div",{className:"space-y-12 px-4 md:px-8 py-8 text-slate-200 bg-slate-900 min-h-screen",children:[e.jsxs("header",{className:"space-y-4 border-b border-slate-800 pb-6",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"px-3 py-1 bg-sky-500/10 text-sky-400 border border-sky-500/20 text-xs font-semibold rounded-full uppercase tracking-wider",children:"Module 007_004 · Topic 0"}),e.jsx("span",{className:"px-3 py-1 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-xs font-semibold rounded-full",children:"FIFO Processing"})]}),e.jsxs("h1",{className:"text-xl sm:text-2xl md:text-3xl font-bold text-white tracking-tight",children:["The ",e.jsx("code",{className:"text-emerald-400 font-mono",children:"java.util.Queue"})," Interface: FIFO Task & Message Buffering"]}),e.jsxs("p",{className:"text-base md:text-lg text-slate-400 leading-relaxed max-w-4xl",children:["Master linear buffering architecture: implementing First-In First-Out (",e.jsx("code",{className:"text-emerald-300 font-mono",children:"FIFO"}),") queue dispatchers with tail ingestion and head processing."]})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsxs("h2",{className:"text-2xl font-bold text-emerald-400 flex items-center gap-2",children:[e.jsx("span",{children:"💻"})," Hands-On Java Demo Code"]}),e.jsx(t,{fileModule:s,title:"QueueFifoTaskProcessingDemo.java",highlightLines:[7,10,16,17,18,23,27,28]})]}),e.jsx("section",{className:"space-y-4",children:e.jsx(n,{title:"Queue FIFO FAQs",questions:o})}),e.jsx("section",{className:"space-y-4",children:e.jsx(r,{content:i,title:"Module 007_004 Topic 0: Queue FIFO Processing",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Printable Note",downloadFileName:"007_004_topic0_queue_fifo_processing_note.txt"})}),e.jsx(a,{note:"A Queue is like standing in line at the Barrackpore railway ticket counter! The first person in line is the first person served (FIFO)! In Java, we use 'offer()' to join the line and 'poll()' to serve and leave! — Sukanta Hui"})]})}export{f as default};
