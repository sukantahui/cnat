import{j as e}from"./vendor-react-core-Doz9nIC6.js";import{J as t}from"./JavaFileLoader-BfBG3xz_.js";import{F as r}from"./FAQTemplate-CkSqDH4B.js";import{P as n}from"./PlainTextPrint-C08xhKA4.js";import{T as o}from"./TeacherSukantaHui-CC0AKmkm.js";import"./JavaCodeBlock-BwsLxS3r.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-BtJHuk7w.js";const i=`/**\r
 * Java Core Tutorial - Module 007_004: Queue, Deque & PriorityQueue\r
 * Topic 6: PriorityQueue Operations: O(log n) Sift-Up (offer) & Sift-Down (poll)\r
 * Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
 */\r
\r
package com.coderaccotax.javatutorial.collections;\r
\r
import java.util.PriorityQueue;\r
\r
public class PriorityQueueSiftOperationsDemo {\r
\r
    public static void main(String[] args) {\r
        System.out.println("==========================================================================");\r
        System.out.println(" TOPIC 6: PriorityQueue SIFT-UP & SIFT-DOWN - BARRACKPORE");\r
        System.out.println("==========================================================================\\n");\r
\r
        PriorityQueue<Integer> pq = new PriorityQueue<>();\r
\r
        // 1. INSERTION & SIFT-UP (siftUp / siftUpUsingComparator):\r
        // Element is added at tail, then swapped UP with its parent until min-heap property is satisfied:\r
        pq.offer(30);\r
        pq.offer(20);\r
        pq.offer(10); // Sifts up to root index 0!\r
\r
        System.out.println(">>> 1. Sift-Up on Insertion (offer()):");\r
        System.out.println("  Top of Heap (peek()) : " + pq.peek() + " (O(1) instant read)");\r
\r
        // 2. EXTRACTION & SIFT-DOWN (siftDown / siftDownUsingComparator):\r
        // Root is removed, last element moves to root, then swapped DOWN with smaller child:\r
        int extractedMin = pq.poll(); // Removes 10, sifts down to restore heap!\r
\r
        System.out.println("\\n>>> 2. Sift-Down on Extraction (poll()):");\r
        System.out.println("  Extracted Min Element : " + extractedMin);\r
        System.out.println("  New Root after Sift-Down: " + pq.peek());\r
\r
        System.out.println("\\n>>> TIME COMPLEXITY OF HEAP OPERATIONS:");\r
        System.out.println("  - peek()  : O(1)     (Directly reads array[0])");\r
        System.out.println("  - offer() : O(log n) (Sift-up tree height)");\r
        System.out.println("  - poll()  : O(log n) (Sift-down tree height)");\r
        System.out.println("  - remove(Object): O(n) (Requires linear scan to find item before sifting)");\r
\r
        System.out.println("\\n==========================================================================");\r
    }\r
}`,a=`================================================================================\r
JAVA CORE TUTORIAL - QUICK REVISION GUIDE\r
Module 007_004: Queue, Deque & PriorityQueue\r
Topic 6: Sift-Up & Sift-Down Operations\r
Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
================================================================================\r
\r
1. HEAP SIFTING OPERATIONS:\r
   - 'peek()' &rarr; O(1) instant root lookup ('queue[0]').\r
   - 'offer()' &rarr; O(log n) sift-up from tail.\r
   - 'poll()' &rarr; O(log n) sift-down from root.\r
   - 'remove(o)' &rarr; O(n) linear search + O(log n) sift.\r
\r
================================================================================\r
Classroom Practice: Barrackpore Academy | Mentor: Sukanta Hui\r
================================================================================`,s=[{question:"Explain the mechanics of 'sift-up' during 'offer()' and 'sift-down' during 'poll()' in a PriorityQueue.",shortAnswer:"1. 'Sift-Up (offer)': The new element is appended to the end of the array. It compares itself with its parent at '(k-1)/2'; if smaller, it swaps with the parent, repeating upward until the heap invariant is restored (O(log n)). 2. 'Sift-Down (poll)': The root at index 0 is returned. The last array element is moved to index 0, then compared with its smallest child; if larger, it swaps downward, repeating until the heap invariant is restored (O(log n)).",explanation:"Core heap algorithms in the Java runtime library.",hint:"offer() uses sift-up from tail to root; poll() replaces root with last item and uses sift-down.",level:"Intermediate",codeExample:"private void siftUp(int k, E x) { ... } private void siftDown(int k, E x) { ... }"}];function h(){return e.jsxs("div",{className:"space-y-12 px-4 md:px-8 py-8 text-slate-200 bg-slate-900 min-h-screen",children:[e.jsxs("header",{className:"space-y-4 border-b border-slate-800 pb-6",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"px-3 py-1 bg-sky-500/10 text-sky-400 border border-sky-500/20 text-xs font-semibold rounded-full uppercase tracking-wider",children:"Module 007_004 · Topic 6"}),e.jsx("span",{className:"px-3 py-1 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-xs font-semibold rounded-full",children:"Heap Sifting"})]}),e.jsxs("h1",{className:"text-3xl md:text-4xl font-extrabold text-white tracking-tight",children:["PriorityQueue Operations: ",e.jsx("code",{className:"text-emerald-400 font-mono",children:"O(log n)"})," Sift-Up & Sift-Down Mechanics"]}),e.jsxs("p",{className:"text-base md:text-lg text-slate-400 leading-relaxed max-w-4xl",children:["Dissect heap restoration algorithms: analyzing ",e.jsx("code",{className:"text-emerald-300 font-mono",children:"siftUp"})," on insertion (",e.jsx("code",{className:"text-sky-300 font-mono",children:"offer"}),"), ",e.jsx("code",{className:"text-amber-300 font-mono",children:"siftDown"})," on extraction (",e.jsx("code",{className:"text-purple-300 font-mono",children:"poll"}),"), and constant-time root peeks."]})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsxs("h2",{className:"text-2xl font-bold text-emerald-400 flex items-center gap-2",children:[e.jsx("span",{children:"💻"})," Hands-On Java Demo Code"]}),e.jsx(t,{fileModule:i,title:"PriorityQueueSiftOperationsDemo.java",highlightLines:[7,10,16,17,18,24,25,30,31,32]})]}),e.jsx("section",{className:"space-y-4",children:e.jsx(r,{title:"Heap Sifting FAQs",questions:s})}),e.jsx("section",{className:"space-y-4",children:e.jsx(n,{content:a,title:"Module 007_004 Topic 6: Sift-Up & Sift-Down Operations",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Printable Note",downloadFileName:"007_004_topic6_heap_sift_operations_note.txt"})}),e.jsx(o,{note:"When you add an item to a PriorityQueue, Java 'bubbles' it up the tree until it finds its proper place (sift-up). When you remove the top item, Java takes the bottom item, puts it at the top, and 'bubbles' it down (sift-down)! Both take O(log n) time! — Sukanta Hui"})]})}export{h as default};
