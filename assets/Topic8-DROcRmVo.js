import{j as e}from"./vendor-react-core-Doz9nIC6.js";import{J as t}from"./JavaFileLoader-BfBG3xz_.js";import{F as a}from"./FAQTemplate-BHhlgA96.js";import{P as r}from"./PlainTextPrint-C08xhKA4.js";import{T as n}from"./TeacherSukantaHui-DDN87fI5.js";import"./JavaCodeBlock-BwsLxS3r.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-DEsnU7fn.js";const o=`/**\r
 * Java Core Tutorial - Module 007_004: Queue, Deque & PriorityQueue\r
 * Topic 8: The java.util.Deque (Double-Ended Queue) Interface: Head & Tail Operations\r
 * Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
 */\r
\r
package com.coderaccotax.javatutorial.collections;\r
\r
import java.util.ArrayDeque;\r
import java.util.Deque;\r
\r
public class DequeDoubleEndedQueueContractDemo {\r
\r
    public static void main(String[] args) {\r
        System.out.println("==========================================================================");\r
        System.out.println(" TOPIC 8: java.util.Deque (DOUBLE-ENDED QUEUE) CONTRACT - BARRACKPORE");\r
        System.out.println("==========================================================================\\n");\r
\r
        Deque<String> dispatcher = new ArrayDeque<>();\r
\r
        // 1. Ingesting at Both Ends:\r
        dispatcher.addFirst("Regular Task 1");\r
        dispatcher.addLast("Low Priority Task 2");\r
        dispatcher.addFirst("VIP Emergency Task 0 (Jumped to Head!)");\r
\r
        System.out.println(">>> 1. Deque State after Dual-End Ingestion:");\r
        System.out.println("  " + dispatcher);\r
\r
        // 2. Extracting from Both Ends:\r
        System.out.println("\\n>>> 2. Dual-End Extractions:");\r
        System.out.println("  Removed from Head (removeFirst()) : " + dispatcher.removeFirst());\r
        System.out.println("  Removed from Tail (removeLast())  : " + dispatcher.removeLast());\r
        System.out.println("  Remaining in Deque                : " + dispatcher);\r
\r
        System.out.println("\\n>>> THE 3 PERSONAS OF java.util.Deque<E>:");\r
        System.out.println("  1. FIFO Queue : 'offerLast(e)' + 'pollFirst()' (First-In, First-Out).");\r
        System.out.println("  2. LIFO Stack : 'push(e)' + 'pop()' (Last-In, First-Out).");\r
        System.out.println("  3. Double Queue: Ingest and extract at both head and tail dynamically.");\r
\r
        System.out.println("\\n==========================================================================");\r
    }\r
}`,s=`================================================================================\r
JAVA CORE TUTORIAL - QUICK REVISION GUIDE\r
Module 007_004: Queue, Deque & PriorityQueue\r
Topic 8: java.util.Deque Interface\r
Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
================================================================================\r
\r
1. DEQUE CONTRACT:\r
   - Double-Ended Queue (pronounced 'deck').\r
   - Insert and extract at both head and tail.\r
   - Replaces legacy 'Stack' class for LIFO operations.\r
   - Dual-mode: acts as FIFO queue, LIFO stack, and deque buffer.\r
\r
================================================================================\r
Classroom Practice: Barrackpore Academy | Mentor: Sukanta Hui\r
================================================================================`,i=[{question:"What does 'Deque' stand for in Java, and what are its 3 primary architectural use cases?",shortAnswer:"'Deque' stands for 'Double-Ended Queue' (pronounced 'deck'). It supports element insertion and removal at both endpoints. Its 3 primary use cases are: 1. 'FIFO Queue' (operating at head and tail), 2. 'LIFO Stack' (push and pop at head), and 3. 'Bidirectional Work Stealing' buffers in thread pools (e.g. ForkJoinPool).",explanation:"Core contract of java.util.Deque introduced in Java 6.",hint:"Double-Ended Queue; can act as a FIFO Queue, a LIFO Stack, or a bidirectional work-stealing buffer.",level:"Beginner",codeExample:'Deque<String> dq = new ArrayDeque<>(); dq.addFirst("Head"); dq.addLast("Tail");'}];function D(){return e.jsxs("div",{className:"space-y-12 px-4 md:px-8 py-8 text-slate-200 bg-slate-900 min-h-screen",children:[e.jsxs("header",{className:"space-y-4 border-b border-slate-800 pb-6",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"px-3 py-1 bg-sky-500/10 text-sky-400 border border-sky-500/20 text-xs font-semibold rounded-full uppercase tracking-wider",children:"Module 007_004 · Topic 8"}),e.jsx("span",{className:"px-3 py-1 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-xs font-semibold rounded-full",children:"Deque Contract"})]}),e.jsxs("h1",{className:"text-xl sm:text-2xl md:text-3xl font-bold text-white tracking-tight",children:["The ",e.jsx("code",{className:"text-emerald-400 font-mono",children:"java.util.Deque"})," Interface: Double-Ended Queue Architecture"]}),e.jsxs("p",{className:"text-base md:text-lg text-slate-400 leading-relaxed max-w-4xl",children:["Master double-ended collection semantics: utilizing ",e.jsx("code",{className:"text-emerald-300 font-mono",children:"Deque"})," as a versatile FIFO buffer, high-speed LIFO stack, and bidirectional work-stealing queue."]})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsxs("h2",{className:"text-2xl font-bold text-emerald-400 flex items-center gap-2",children:[e.jsx("span",{children:"💻"})," Hands-On Java Demo Code"]}),e.jsx(t,{fileModule:o,title:"DequeDoubleEndedQueueContractDemo.java",highlightLines:[7,10,16,17,18,24,25]})]}),e.jsx("section",{className:"space-y-4",children:e.jsx(a,{title:"Deque FAQs",questions:i})}),e.jsx("section",{className:"space-y-4",children:e.jsx(r,{content:s,title:"Module 007_004 Topic 8: java.util.Deque Interface",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Printable Note",downloadFileName:"007_004_topic8_deque_interface_note.txt"})}),e.jsx(n,{note:"Deque (pronounced 'deck') is like a train tunnel with doors at both ends! You can load passengers from the front (addFirst) or the back (addLast), and unload them from either end! — Sukanta Hui"})]})}export{D as default};
