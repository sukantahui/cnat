import{j as e}from"./vendor-react-core-Doz9nIC6.js";import{J as t}from"./JavaFileLoader-BfBG3xz_.js";import{F as r}from"./FAQTemplate-BHhlgA96.js";import{P as n}from"./PlainTextPrint-C08xhKA4.js";import{T as i}from"./TeacherSukantaHui-DerPxfxp.js";import"./JavaCodeBlock-BwsLxS3r.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-CH1iX9C8.js";const a=`/**\r
 * Java Core Tutorial - Module 007_009: Collections Performance & Big-O Complexities\r
 * Topic 1: Master Big-O Time Complexity Matrix across All Collection Operations\r
 * Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
 */\r
\r
package com.coderaccotax.javatutorial.collections;\r
\r
public class MasterBigOTimeComplexityMatrixDemo {\r
\r
    public static void main(String[] args) {\r
        System.out.println("==========================================================================");\r
        System.out.println(" TOPIC 1: MASTER BIG-O TIME COMPLEXITY MATRIX - BARRACKPORE");\r
        System.out.println("==========================================================================\\n");\r
\r
        System.out.println(">>> THE GRAND BIG-O PERFORMANCE MATRIX (AVERAGE CASE):");\r
        System.out.println("+-------------------+---------------+---------------+---------------+---------------+---------------+");\r
        System.out.println("| Collection        | Random Access | Insert (Head) | Insert (Tail) | Insert (Mid)  | Search/Lookup |");\r
        System.out.println("+-------------------+---------------+---------------+---------------+---------------+---------------+");\r
        System.out.println("| ArrayList         | O(1) [Fast]   | O(n) [Shift]  | O(1) Amortized| O(n) [Shift]  | O(n) Contains |");\r
        System.out.println("| LinkedList        | O(n) [Seek]   | O(1) [Fast]   | O(1) [Fast]   | O(n) [Seek]   | O(n) Contains |");\r
        System.out.println("| ArrayDeque        | O(1) Ends     | O(1) [Fast]   | O(1) [Fast]   | N/A (Deque)   | O(n) Contains |");\r
        System.out.println("| PriorityQueue     | O(1) Peek Min | O(log n) Sift | O(log n) Sift | N/A (Heap)    | O(n) Contains |");\r
        System.out.println("| HashSet           | N/A (No Index)| O(1) Hash     | O(1) Hash     | O(1) Hash     | O(1) [Hash]   |");\r
        System.out.println("| LinkedHashSet     | N/A (No Index)| O(1) Hash     | O(1) Hash     | O(1) Hash     | O(1) [Hash]   |");\r
        System.out.println("| TreeSet           | N/A (No Index)| O(log n) Tree | O(log n) Tree | O(log n) Tree | O(log n) Tree |");\r
        System.out.println("| HashMap           | N/A (By Key)  | O(1) [put]    | O(1) [put]    | O(1) [put]    | O(1) [get]    |");\r
        System.out.println("| TreeMap           | N/A (By Key)  | O(log n) Tree | O(log n) Tree | O(log n) Tree | O(log n) Tree |");\r
        System.out.println("| ConcurrentHashMap | N/A (By Key)  | O(1) CAS/Lock | O(1) CAS/Lock | O(1) CAS/Lock | O(1) LockFree |");\r
        System.out.println("+-------------------+---------------+---------------+---------------+---------------+---------------+");\r
\r
        System.out.println("\\n==========================================================================");\r
    }\r
}`,s=`================================================================================\r
JAVA CORE TUTORIAL - QUICK REVISION GUIDE\r
Module 007_009: Collections Performance & Big-O Complexities\r
Topic 1: Master Big-O Complexity Matrix\r
Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
================================================================================\r
\r
1. MASTER BIG-O COMPLEXITY:\r
   - Index Access: ArrayList O(1) vs LinkedList O(n).\r
   - Head/Tail Insert: ArrayDeque O(1), LinkedList O(1), ArrayList Tail O(1) Amortized.\r
   - Hash Lookup: HashSet/HashMap O(1) Average.\r
   - Sorted Tree Lookup: TreeSet/TreeMap O(log n).\r
   - Priority Dequeue: PriorityQueue O(log n).\r
\r
================================================================================\r
Classroom Practice: Barrackpore Academy | Mentor: Sukanta Hui\r
================================================================================`,o=[{question:"Compare the Big-O time complexity of 'ArrayList.get(index)' vs 'LinkedList.get(index)' and explain the reason.",shortAnswer:"'ArrayList.get(index)' is 'O(1) Constant Time' because an array occupies contiguous memory, allowing the JVM to compute the exact physical RAM address using simple offset arithmetic: 'address = base + (index * 4 bytes)'. In contrast, 'LinkedList.get(index)' is 'O(n) Linear Time' because linked nodes are scattered in heap memory without index math, requiring the JVM to sequentially traverse node pointers from the head or tail until reaching the target position.",explanation:"Core algorithm complexity difference in Java Collections.",hint:"ArrayList is O(1) via direct memory pointer arithmetic; LinkedList is O(n) via pointer traversal.",level:"Intermediate",codeExample:"list.get(5000); // ArrayList: 1 CPU cycle | LinkedList: 5000 pointer hops"}];function y(){return e.jsxs("div",{className:"space-y-12 px-4 md:px-8 py-8 text-slate-200 bg-slate-900 min-h-screen",children:[e.jsxs("header",{className:"space-y-4 border-b border-slate-800 pb-6",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"px-3 py-1 bg-sky-500/10 text-sky-400 border border-sky-500/20 text-xs font-semibold rounded-full uppercase tracking-wider",children:"Module 007_009 · Topic 1"}),e.jsx("span",{className:"px-3 py-1 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-xs font-semibold rounded-full",children:"Big-O Matrix"})]}),e.jsx("h1",{className:"text-xl sm:text-2xl md:text-3xl font-bold text-white tracking-tight",children:"Master Big-O Time Complexity Matrix across All Collection Operations"}),e.jsx("p",{className:"text-base md:text-lg text-slate-400 leading-relaxed max-w-4xl",children:"Evaluate computational complexities: comparing index lookup, insertion, deletion, and search performance across contiguous arrays, linked pointers, hash tables, and red-black trees."})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsxs("h2",{className:"text-2xl font-bold text-emerald-400 flex items-center gap-2",children:[e.jsx("span",{children:"💻"})," Hands-On Java Demo Code"]}),e.jsx(t,{fileModule:a,title:"MasterBigOTimeComplexityMatrixDemo.java",highlightLines:[7,10,14,15,16,17,18,19,20,21,22,23,24]})]}),e.jsx("section",{className:"space-y-4",children:e.jsx(r,{title:"Big-O Matrix FAQs",questions:o})}),e.jsx("section",{className:"space-y-4",children:e.jsx(n,{content:s,title:"Module 007_009 Topic 1: Master Big-O Matrix",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Printable Note",downloadFileName:"007_009_topic1_master_big_o_matrix_note.txt"})}),e.jsx(i,{note:"Every enterprise architect knows this matrix by heart! Choosing the wrong collection can slow down your app by 10,000x! If you need index lookups, use ArrayList (O(1)); if you need key lookups, use HashMap (O(1)); if you need sorted keys, use TreeMap (O(log n))! — Sukanta Hui"})]})}export{y as default};
