import{j as e}from"./vendor-react-core-Doz9nIC6.js";import{J as t}from"./JavaFileLoader-BfBG3xz_.js";import{F as a}from"./FAQTemplate-CkSqDH4B.js";import{P as r}from"./PlainTextPrint-C08xhKA4.js";import{T as i}from"./TeacherSukantaHui-CC0AKmkm.js";import"./JavaCodeBlock-BwsLxS3r.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-BtJHuk7w.js";const n=`/**\r
 * Java Core Tutorial - Module 007_002: List Implementations & ArrayList Internals\r
 * Topic 5: Optimizing ArrayList: ensureCapacity(int) & trimToSize() Memory Tuning\r
 * Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
 */\r
\r
package com.coderaccotax.javatutorial.collections;\r
\r
import java.lang.reflect.Field;\r
import java.util.ArrayList;\r
\r
public class ArrayListCapacityOptimizationDemo {\r
\r
    private static int getInternalCapacity(ArrayList<?> list) throws Exception {\r
        Field elementDataField = ArrayList.class.getDeclaredField("elementData");\r
        elementDataField.setAccessible(true);\r
        Object[] elementData = (Object[]) elementDataField.get(list);\r
        return elementData == null ? 0 : elementData.length;\r
    }\r
\r
    public static void main(String[] args) throws Exception {\r
        System.out.println("==========================================================================");\r
        System.out.println(" TOPIC 5: ArrayList OPTIMIZATION (ensureCapacity & trimToSize) - BARRACKPORE");\r
        System.out.println("==========================================================================\\n");\r
\r
        // SCENARIO 1: We know upfront that 50,000 records will be loaded:\r
        System.out.println(">>> 1. Using ensureCapacity(50000) to Pre-Allocate in 1 Shot:");\r
        ArrayList<String> optimizedList = new ArrayList<>();\r
        optimizedList.ensureCapacity(50000); // Pre-allocates array of 50,000 slots!\r
        System.out.println("  Capacity after ensureCapacity(50000): " + getInternalCapacity(optimizedList));\r
\r
        // SCENARIO 2: Ingest 30,000 records, leaving 20,000 empty slots:\r
        for (int i = 0; i < 30000; i++) {\r
            optimizedList.add("Record " + i);\r
        }\r
        System.out.printf("  Current State: Size=%d, Internal Capacity=%d (20,000 wasted slots!)%n",\r
                optimizedList.size(), getInternalCapacity(optimizedList));\r
\r
        // SCENARIO 3: Releasing wasted heap memory via trimToSize():\r
        System.out.println("\\n>>> 2. Releasing Memory via trimToSize():");\r
        optimizedList.trimToSize();\r
        System.out.printf("  State after trimToSize(): Size=%d, Internal Capacity=%d (Zero wasted memory!)%n",\r
                optimizedList.size(), getInternalCapacity(optimizedList));\r
\r
        System.out.println("\\n>>> 2 GOLDEN RULES FOR ArrayList PERFORMANCE:");\r
        System.out.println("  1. Bulk Load Upfront : Use 'new ArrayList<>(expectedSize)' or 'ensureCapacity(n)' to eliminate all resize array allocations.");\r
        System.out.println("  2. Long-Lived Caches : Call 'trimToSize()' on static/long-lived lists after loading to reclaim unused heap memory.");\r
\r
        System.out.println("\\n==========================================================================");\r
    }\r
}`,s=`================================================================================\r
JAVA CORE TUTORIAL - QUICK REVISION GUIDE\r
Module 007_002: List Implementations & ArrayList Internals\r
Topic 5: ArrayList Optimization\r
Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
================================================================================\r
\r
1. ARRAYLIST TUNING:\r
   - Constructor: 'new ArrayList<>(expectedSize)'.\r
   - 'ensureCapacity(n)': pre-allocates capacity in 1 shot, eliminates resizes.\r
   - 'trimToSize()': shrinks backing array to match exact 'size'.\r
   - Essential for large datasets and long-lived memory caches.\r
\r
================================================================================\r
Classroom Practice: Barrackpore Academy | Mentor: Sukanta Hui\r
================================================================================`,o=[{question:"When should you use 'ensureCapacity(int minCapacity)' vs 'trimToSize()' on an ArrayList?",shortAnswer:"1. Use 'ensureCapacity(int)' BEFORE performing large batch insertions when the approximate element count is known, preventing multiple costly array allocations and memory copying passes. 2. Use 'trimToSize()' AFTER completing insertions on long-lived or cached lists to shrink the backing array down to the exact 'size', freeing unused memory slots for garbage collection.",explanation:"Standard enterprise heap tuning techniques for high-throughput Java applications.",hint:"ensureCapacity pre-allocates to avoid resizes; trimToSize shrinks the buffer to size to free memory.",level:"Intermediate",codeExample:"list.ensureCapacity(100000); // Pre-allocate; list.trimToSize(); // Shrink buffer"}];function h(){return e.jsxs("div",{className:"space-y-12 px-4 md:px-8 py-8 text-slate-200 bg-slate-900 min-h-screen",children:[e.jsxs("header",{className:"space-y-4 border-b border-slate-800 pb-6",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"px-3 py-1 bg-sky-500/10 text-sky-400 border border-sky-500/20 text-xs font-semibold rounded-full uppercase tracking-wider",children:"Module 007_002 · Topic 5"}),e.jsx("span",{className:"px-3 py-1 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-xs font-semibold rounded-full",children:"Capacity Optimization"})]}),e.jsxs("h1",{className:"text-3xl md:text-4xl font-extrabold text-white tracking-tight",children:["Optimizing ArrayList: ",e.jsx("code",{className:"text-emerald-400 font-mono",children:"ensureCapacity()"})," & ",e.jsx("code",{className:"text-sky-400 font-mono",children:"trimToSize()"})," Tuning"]}),e.jsxs("p",{className:"text-base md:text-lg text-slate-400 leading-relaxed max-w-4xl",children:["Tune JVM heap allocation: pre-allocating buffer capacities to eliminate repeated array resizes and reclaiming idle memory using ",e.jsx("code",{className:"text-sky-300 font-mono",children:"trimToSize()"}),"."]})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsxs("h2",{className:"text-2xl font-bold text-emerald-400 flex items-center gap-2",children:[e.jsx("span",{children:"💻"})," Hands-On Java Demo Code"]}),e.jsx(t,{fileModule:n,title:"ArrayListCapacityOptimizationDemo.java",highlightLines:[7,10,14,15,23,24,33,34]})]}),e.jsx("section",{className:"space-y-4",children:e.jsx(a,{title:"Optimization FAQs",questions:o})}),e.jsx("section",{className:"space-y-4",children:e.jsx(r,{content:s,title:"Module 007_002 Topic 5: ArrayList Optimization",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Printable Note",downloadFileName:"007_002_topic5_arraylist_optimization_note.txt"})}),e.jsx(i,{note:"If you know you are fetching 10,000 student records from a database, never use 'new ArrayList<>()' without arguments! Use 'new ArrayList<>(10000)'! That single change eliminates 12 separate array reallocations! — Sukanta Hui"})]})}export{h as default};
