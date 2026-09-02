import{j as e}from"./vendor-react-core-Doz9nIC6.js";import{J as r}from"./JavaFileLoader-BfBG3xz_.js";import{F as t}from"./FAQTemplate-BHhlgA96.js";import{P as n}from"./PlainTextPrint-C08xhKA4.js";import{T as a}from"./TeacherSukantaHui-RpFLNJ5A.js";import"./JavaCodeBlock-BwsLxS3r.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-wprqVFW_.js";const i=`/**\r
 * Java Core Tutorial - Module 007_004: Queue, Deque & PriorityQueue\r
 * Topic 5: PriorityQueue Internal Structure: Binary Min-Heap Array Indexing Mathematics\r
 * Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
 */\r
\r
package com.coderaccotax.javatutorial.collections;\r
\r
import java.lang.reflect.Field;\r
import java.util.Arrays;\r
import java.util.PriorityQueue;\r
\r
public class PriorityQueueMinHeapArrayMathDemo {\r
\r
    public static void main(String[] args) throws Exception {\r
        System.out.println("==========================================================================");\r
        System.out.println(" TOPIC 5: PriorityQueue MIN-HEAP ARRAY MATHEMATICS - BARRACKPORE");\r
        System.out.println("==========================================================================\\n");\r
\r
        PriorityQueue<Integer> minHeap = new PriorityQueue<>();\r
        // Ingest numbers in random order:\r
        minHeap.offer(50);\r
        minHeap.offer(20);\r
        minHeap.offer(80);\r
        minHeap.offer(10);\r
        minHeap.offer(30);\r
        minHeap.offer(90);\r
\r
        // Inspecting private Object[] queue backing array:\r
        Field queueField = PriorityQueue.class.getDeclaredField("queue");\r
        queueField.setAccessible(true);\r
        Object[] queueArray = (Object[]) queueField.get(minHeap);\r
\r
        System.out.println(">>> 1. Backing Object[] queue Array State:");\r
        System.out.println("  Active Elements in Array: " + Arrays.toString(Arrays.copyOf(queueArray, minHeap.size())));\r
        System.out.println("  Root of Heap (Index 0)  : " + queueArray[0] + " (Smallest element guaranteed at index 0!)");\r
\r
        System.out.println("\\n>>> 2. BINARY HEAP ARRAY MATHEMATICAL INDEXING FORMULAS:");\r
        System.out.println("  For any node at index 'i':");\r
        System.out.println("    - Parent Index      : (i - 1) / 2");\r
        System.out.println("    - Left Child Index  : (2 * i) + 1");\r
        System.out.println("    - Right Child Index : (2 * i) + 2");\r
        System.out.println();\r
        System.out.println(">>> 3. Tracing Tree Nodes in our Array:");\r
        System.out.printf("  Root [Index 0 = %d]: Left Child [Index 1 = %d], Right Child [Index 2 = %d]%n",\r
                queueArray[0], queueArray[1], queueArray[2]);\r
        System.out.printf("  Node [Index 1 = %d]: Left Child [Index 3 = %d], Right Child [Index 4 = %d]%n",\r
                queueArray[1], queueArray[3], queueArray[4]);\r
\r
        System.out.println("\\n==========================================================================");\r
    }\r
}`,o=`================================================================================\r
JAVA CORE TUTORIAL - QUICK REVISION GUIDE\r
Module 007_004: Queue, Deque & PriorityQueue\r
Topic 5: Binary Min-Heap Array Math\r
Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
================================================================================\r
\r
1. MIN-HEAP ARRAY MATHEMATICS:\r
   - Root (minimum): always at index 0 ('queue[0]').\r
   - Parent of 'i'     → '(i - 1) / 2'.\r
   - Left child of 'i'  → '2 * i + 1'.\r
   - Right child of 'i' → '2 * i + 2'.\r
   - Zero pointer overhead; stores complete binary tree in a flat array.\r
\r
================================================================================\r
Classroom Practice: Barrackpore Academy | Mentor: Sukanta Hui\r
================================================================================`,s=[{question:"What are the mathematical formulas used to locate the parent, left child, and right child of a node at index 'i' in PriorityQueue's backing array?",shortAnswer:"In a zero-indexed binary heap array: 1. 'Parent Index' = '(i - 1) / 2' (integer division). 2. 'Left Child Index' = '(2 * i) + 1'. 3. 'Right Child Index' = '(2 * i) + 2'. This allows complete binary trees to be represented compactly in a flat array without allocating separate pointer node objects.",explanation:"Classic binary heap array indexing mathematics.",hint:"Parent: (i-1)/2, Left Child: 2i+1, Right Child: 2i+2.",level:"Intermediate",codeExample:"int parent = (i - 1) >>> 1; int left = (i << 1) + 1; int right = left + 1;"}];function h(){return e.jsxs("div",{className:"space-y-12 px-4 md:px-8 py-8 text-slate-200 bg-slate-900 min-h-screen",children:[e.jsxs("header",{className:"space-y-4 border-b border-slate-800 pb-6",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"px-3 py-1 bg-sky-500/10 text-sky-400 border border-sky-500/20 text-xs font-semibold rounded-full uppercase tracking-wider",children:"Module 007_004 · Topic 5"}),e.jsx("span",{className:"px-3 py-1 bg-purple-500/10 text-purple-400 border border-purple-500/20 text-xs font-semibold rounded-full",children:"Min-Heap Array Math"})]}),e.jsx("h1",{className:"text-xl sm:text-2xl md:text-3xl font-bold text-white tracking-tight",children:"PriorityQueue Internal Structure: Binary Min-Heap Array Indexing Mathematics"}),e.jsxs("p",{className:"text-base md:text-lg text-slate-400 leading-relaxed max-w-4xl",children:["Trace binary heap storage: calculating parent (",e.jsx("code",{className:"text-emerald-300 font-mono",children:"(i-1)/2"}),") and child (",e.jsx("code",{className:"text-sky-300 font-mono",children:"2i+1"}),", ",e.jsx("code",{className:"text-amber-300 font-mono",children:"2i+2"}),") offsets in flat array buffers."]})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsxs("h2",{className:"text-2xl font-bold text-emerald-400 flex items-center gap-2",children:[e.jsx("span",{children:"💻"})," Hands-On Java Demo Code"]}),e.jsx(r,{fileModule:i,title:"PriorityQueueMinHeapArrayMathDemo.java",highlightLines:[7,10,16,17,24,25,30,31,35,36]})]}),e.jsx("section",{className:"space-y-4",children:e.jsx(t,{title:"Heap Mathematics FAQs",questions:s})}),e.jsx("section",{className:"space-y-4",children:e.jsx(n,{content:o,title:"Module 007_004 Topic 5: Binary Min-Heap Array Math",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Printable Note",downloadFileName:"007_004_topic5_min_heap_array_math_note.txt"})}),e.jsx(a,{note:"Binary heaps do not need node pointers like linked trees! Because the tree is completely full, we store all nodes in a flat array and compute children with '(2*i) + 1'! It is clean, fast, and cache-friendly! — Sukanta Hui"})]})}export{h as default};
