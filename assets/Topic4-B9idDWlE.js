import{j as e}from"./vendor-react-core-Doz9nIC6.js";import{J as t}from"./JavaFileLoader-BfBG3xz_.js";import{F as n}from"./FAQTemplate-BHhlgA96.js";import{P as r}from"./PlainTextPrint-C08xhKA4.js";import{T as a}from"./TeacherSukantaHui-BaJcBHAy.js";import"./JavaCodeBlock-BwsLxS3r.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-8ao-0upJ.js";const s=`/**\r
 * Java Core Tutorial - Module 007_002: List Implementations & ArrayList Internals\r
 * Topic 4: ArrayList Performance Characteristics: O(1) Reads, Amortized Appends & O(n) Shifts\r
 * Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
 */\r
\r
package com.coderaccotax.javatutorial.collections;\r
\r
import java.util.ArrayList;\r
import java.util.List;\r
\r
public class ArrayListPerformanceCharacteristicsDemo {\r
\r
    public static void main(String[] args) {\r
        System.out.println("==========================================================================");\r
        System.out.println(" TOPIC 4: ArrayList PERFORMANCE & BIG-O PROFILE - BARRACKPORE");\r
        System.out.println("==========================================================================\\n");\r
\r
        List<Integer> dataset = new ArrayList<>();\r
        for (int i = 0; i < 100000; i++) dataset.add(i);\r
\r
        // 1. O(1) RANDOM ACCESS (get by index):\r
        long t1 = System.nanoTime();\r
        int val = dataset.get(50000); // Direct pointer arithmetic (baseAddress + index * 4 bytes)\r
        long t2 = System.nanoTime();\r
        System.out.printf(">>> 1. O(1) Random Access: Index 50,000 value=%d (%d ns)%n", val, (t2 - t1));\r
\r
        // 2. O(1) AMORTIZED APPEND (add to tail):\r
        long t3 = System.nanoTime();\r
        dataset.add(999999);\r
        long t4 = System.nanoTime();\r
        System.out.printf(">>> 2. O(1) Amortized Append: Tail insertion (%d ns)%n", (t4 - t3));\r
\r
        // 3. O(n) MIDDLE INSERTION / DELETION (Requires shifting elements):\r
        long t5 = System.nanoTime();\r
        dataset.add(0, -1); // Shifting 100,000 elements right!\r
        long t6 = System.nanoTime();\r
        System.out.printf(">>> 3. O(n) Head Insertion: Shifted all elements right (%d ns)%n", (t6 - t5));\r
\r
        System.out.println("\\n>>> ArrayList TIME COMPLEXITY SUMMARY:");\r
        System.out.println("+-----------------------------+-------------------+--------------------------------------------+");\r
        System.out.println("| Operation                   | Time Complexity   | Mechanics                                  |");\r
        System.out.println("+-----------------------------+-------------------+--------------------------------------------+");\r
        System.out.println("| get(index) / set(index)     | O(1)              | Direct pointer arithmetic                  |");\r
        System.out.println("| add(element) [tail append]  | O(1) Amortized    | O(1) normal, O(n) on rare array resize     |");\r
        System.out.println("| add(index, e) / remove(i)   | O(n)              | Requires System.arraycopy() memory shifts  |");\r
        System.out.println("| contains(e) / indexOf(e)    | O(n)              | Linear sequential scan                     |");\r
        System.out.println("+-----------------------------+-------------------+--------------------------------------------+");\r
\r
        System.out.println("\\n==========================================================================");\r
    }\r
}`,i=`================================================================================\r
JAVA CORE TUTORIAL - QUICK REVISION GUIDE\r
Module 007_002: List Implementations & ArrayList Internals\r
Topic 4: ArrayList Performance Characteristics\r
Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
================================================================================\r
\r
1. BIG-O TIME COMPLEXITY:\r
   - get(i) / set(i, val) → O(1) instant pointer arithmetic.\r
   - add(tail) → O(1) amortized.\r
   - add(0, val) / remove(0) → O(n) due to arraycopy shifts.\r
   - contains(obj) → O(n) linear scan.\r
\r
================================================================================\r
Classroom Practice: Barrackpore Academy | Mentor: Sukanta Hui\r
================================================================================`,o=[{question:"Why is 'get(index)' an O(1) constant time operation in ArrayList, while 'add(0, element)' is O(n)?",shortAnswer:"'get(index)' is O(1) because ArrayList is backed by a contiguous memory array; the JVM computes the memory address instantly via formula 'baseAddress + (index * referenceSize)'. In contrast, 'add(0, element)' is O(n) because inserting at index 0 requires shifting all existing 'n' elements one slot to the right via 'System.arraycopy()'.",explanation:"Fundamental trade-off of contiguous memory array data structures.",hint:"Contiguous array memory enables direct index calculation; head insertion requires shifting all n elements.",level:"Intermediate",codeExample:'list.get(500); // O(1) address lookup | list.add(0, "First"); // O(n) memory shift'}];function h(){return e.jsxs("div",{className:"space-y-12 px-4 md:px-8 py-8 text-slate-200 bg-slate-900 min-h-screen",children:[e.jsxs("header",{className:"space-y-4 border-b border-slate-800 pb-6",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"px-3 py-1 bg-sky-500/10 text-sky-400 border border-sky-500/20 text-xs font-semibold rounded-full uppercase tracking-wider",children:"Module 007_002 · Topic 4"}),e.jsx("span",{className:"px-3 py-1 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-xs font-semibold rounded-full",children:"Performance Profile"})]}),e.jsxs("h1",{className:"text-xl sm:text-2xl md:text-3xl font-bold text-white tracking-tight",children:["ArrayList Performance: ",e.jsx("code",{className:"text-emerald-400 font-mono",children:"O(1)"})," Random Access, Amortized Appends & ",e.jsx("code",{className:"text-rose-400 font-mono",children:"O(n)"})," Shifts"]}),e.jsxs("p",{className:"text-base md:text-lg text-slate-400 leading-relaxed max-w-4xl",children:["Analyze Big-O performance metrics: benchmarking constant-time pointer reads (",e.jsx("code",{className:"text-emerald-300 font-mono",children:"O(1)"}),"), amortized append efficiency, and element shifting overhead during middle insertions."]})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsxs("h2",{className:"text-2xl font-bold text-emerald-400 flex items-center gap-2",children:[e.jsx("span",{children:"💻"})," Hands-On Java Demo Code"]}),e.jsx(t,{fileModule:s,title:"ArrayListPerformanceCharacteristicsDemo.java",highlightLines:[7,10,16,17,22,23,28,29]})]}),e.jsx("section",{className:"space-y-4",children:e.jsx(n,{title:"ArrayList Performance FAQs",questions:o})}),e.jsx("section",{className:"space-y-4",children:e.jsx(r,{content:i,title:"Module 007_002 Topic 4: ArrayList Performance",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Printable Note",downloadFileName:"007_002_topic4_arraylist_performance_note.txt"})}),e.jsx(a,{note:"If you need to look up elements by index all day long, ArrayList is unbeatable! It accesses any index in O(1) instant time because memory is contiguous! — Sukanta Hui"})]})}export{h as default};
