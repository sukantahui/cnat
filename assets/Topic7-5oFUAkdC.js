import{j as e}from"./vendor-react-core-Doz9nIC6.js";import{J as r}from"./JavaFileLoader-BfBG3xz_.js";import{F as t}from"./FAQTemplate-BHhlgA96.js";import{P as n}from"./PlainTextPrint-C08xhKA4.js";import{T as a}from"./TeacherSukantaHui-DerPxfxp.js";import"./JavaCodeBlock-BwsLxS3r.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-CH1iX9C8.js";const i=`/**\r
 * Java Core Tutorial - Module 007_004: Queue, Deque & PriorityQueue\r
 * Topic 7: Building a Max-Heap Using Collections.reverseOrder() / Custom Reverse Comparators\r
 * Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
 */\r
\r
package com.coderaccotax.javatutorial.collections;\r
\r
import java.util.Collections;\r
import java.util.PriorityQueue;\r
import java.util.Queue;\r
\r
public class PriorityQueueMaxHeapReverseOrderDemo {\r
\r
    public static void main(String[] args) {\r
        System.out.println("==========================================================================");\r
        System.out.println(" TOPIC 7: BUILDING A MAX-HEAP IN JAVA - BARRACKPORE");\r
        System.out.println("==========================================================================\\n");\r
\r
        // 1. DEFAULT MIN-HEAP (Lowest number extracted first):\r
        Queue<Integer> minHeap = new PriorityQueue<>();\r
        minHeap.offer(4500);\r
        minHeap.offer(1200);\r
        minHeap.offer(9800);\r
\r
        System.out.println(">>> 1. Default Min-Heap Dispatch (Lowest Fee First):");\r
        while (!minHeap.isEmpty()) {\r
            System.out.println("  Min Polled : ₹" + minHeap.poll());\r
        }\r
\r
        // 2. REVERSE MAX-HEAP (Highest number extracted first via Collections.reverseOrder()):\r
        Queue<Integer> maxHeap = new PriorityQueue<>(Collections.reverseOrder());\r
        maxHeap.offer(4500);\r
        maxHeap.offer(1200);\r
        maxHeap.offer(9800);\r
\r
        System.out.println("\\n>>> 2. Max-Heap Dispatch (Collections.reverseOrder() - Highest Fee First):");\r
        while (!maxHeap.isEmpty()) {\r
            System.out.println("  Max Polled : ₹" + maxHeap.poll());\r
        }\r
\r
        System.out.println("\\n>>> REAL-WORLD MAX-HEAP USE CASES:");\r
        System.out.println("  1. Top-K Largest Elements: Finding the highest revenue branches or highest student scores in a stream.");\r
        System.out.println("  2. CPU Process Schedulers: Highest priority CPU threads dispatched first.");\r
        System.out.println("  3. Financial Trading Engines: Highest bidding buyers matched first with sellers.");\r
\r
        System.out.println("\\n==========================================================================");\r
    }\r
}`,s=`================================================================================\r
JAVA CORE TUTORIAL - QUICK REVISION GUIDE\r
Module 007_004: Queue, Deque & PriorityQueue\r
Topic 7: Building a Max-Heap\r
Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
================================================================================\r
\r
1. MAX-HEAP IN JAVA:\r
   - Default PriorityQueue = Min-Heap.\r
   - Max-Heap syntax: 'new PriorityQueue<>(Collections.reverseOrder())'.\r
   - Root index 0 holds the maximum element.\r
   - Essential for Top-K largest problems and priority dispatching.\r
\r
================================================================================\r
Classroom Practice: Barrackpore Academy | Mentor: Sukanta Hui\r
================================================================================`,o=[{question:"How do you instantiate a 'Max-Heap' using Java's standard 'PriorityQueue' class?",shortAnswer:"By passing 'Collections.reverseOrder()' (or a custom reversed Comparator) into the PriorityQueue constructor: 'PriorityQueue<T> maxHeap = new PriorityQueue<>(Collections.reverseOrder());'. This reverses the natural comparison logic, ensuring the maximum element sits at the root index 0.",explanation:"Standard interview and LeetCode algorithmic technique in Java.",hint:"Pass 'Collections.reverseOrder()' into the PriorityQueue constructor.",level:"Beginner",codeExample:"PriorityQueue<Integer> maxHeap = new PriorityQueue<>(Collections.reverseOrder());"}];function y(){return e.jsxs("div",{className:"space-y-12 px-4 md:px-8 py-8 text-slate-200 bg-slate-900 min-h-screen",children:[e.jsxs("header",{className:"space-y-4 border-b border-slate-800 pb-6",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"px-3 py-1 bg-sky-500/10 text-sky-400 border border-sky-500/20 text-xs font-semibold rounded-full uppercase tracking-wider",children:"Module 007_004 · Topic 7"}),e.jsx("span",{className:"px-3 py-1 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-xs font-semibold rounded-full",children:"Max-Heap Pattern"})]}),e.jsxs("h1",{className:"text-xl sm:text-2xl md:text-3xl font-bold text-white tracking-tight",children:["Building a Max-Heap Using ",e.jsx("code",{className:"text-emerald-400 font-mono",children:"Collections.reverseOrder()"})]}),e.jsxs("p",{className:"text-base md:text-lg text-slate-400 leading-relaxed max-w-4xl",children:["Construct inverted priority heaps: utilizing ",e.jsx("code",{className:"text-emerald-300 font-mono",children:"Collections.reverseOrder()"})," to build Max-Heaps for Top-K stream queries and highest-bidder scheduling."]})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsxs("h2",{className:"text-2xl font-bold text-emerald-400 flex items-center gap-2",children:[e.jsx("span",{children:"💻"})," Hands-On Java Demo Code"]}),e.jsx(r,{fileModule:i,title:"PriorityQueueMaxHeapReverseOrderDemo.java",highlightLines:[7,10,16,17,24,25,26,30]})]}),e.jsx("section",{className:"space-y-4",children:e.jsx(t,{title:"Max-Heap FAQs",questions:o})}),e.jsx("section",{className:"space-y-4",children:e.jsx(n,{content:s,title:"Module 007_004 Topic 7: Building a Max-Heap",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Printable Note",downloadFileName:"007_004_topic7_max_heap_reverse_order_note.txt"})}),e.jsx(a,{note:"By default, PriorityQueue is a Min-Heap (smallest item at top). If you want a Max-Heap (largest item at top), just pass 'Collections.reverseOrder()' to the constructor! It is that simple! — Sukanta Hui"})]})}export{y as default};
