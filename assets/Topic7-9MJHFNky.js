import{j as e}from"./vendor-react-core-Doz9nIC6.js";import{J as n}from"./JavaFileLoader-BfBG3xz_.js";import{F as t}from"./FAQTemplate-BHhlgA96.js";import{P as r}from"./PlainTextPrint-C08xhKA4.js";import{T as o}from"./TeacherSukantaHui-DDN87fI5.js";import"./JavaCodeBlock-BwsLxS3r.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-DEsnU7fn.js";const a=`/**\r
 * Java Core Tutorial - Module 007_006: Concurrent Collections & ConcurrentHashMap\r
 * Topic 7: ConcurrentHashMap Size Calculation: baseCount & CounterCell[] (LongAdder Pattern)\r
 * Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
 */\r
\r
package com.coderaccotax.javatutorial.collections;\r
\r
import java.util.concurrent.ConcurrentHashMap;\r
\r
public class ConcurrentHashMapSizeCalculationDemo {\r
\r
    public static void main(String[] args) {\r
        System.out.println("==========================================================================");\r
        System.out.println(" TOPIC 7: ConcurrentHashMap SIZE & CounterCell[] - BARRACKPORE");\r
        System.out.println("==========================================================================\\n");\r
\r
        ConcurrentHashMap<String, Integer> map = new ConcurrentHashMap<>();\r
        map.put("A", 1);\r
        map.put("B", 2);\r
        map.put("C", 3);\r
\r
        // size() vs mappingCount():\r
        int intSize = map.size();\r
        long longSize = map.mappingCount(); // Recommended in Java 8+ for high volume collections\r
\r
        System.out.println(">>> 1. Size Queries:");\r
        System.out.println("  size()         : " + intSize);\r
        System.out.println("  mappingCount() : " + longSize + " (Long value preventing 32-bit overflow)");\r
\r
        System.out.println("\\n>>> HOW ConcurrentHashMap COUNTS ELEMENTS CONCURRENTLY (LongAdder Pattern):");\r
        System.out.println("  - Problem: If 64 threads all update a single 'volatile long size' with atomic CAS, they will stall each other (CAS contention storm).");\r
        System.out.println("  - Solution (Striped Counters):");\r
        System.out.println("    1. Under LOW contention  : Threads update 'private transient volatile long baseCount' via CAS.");\r
        System.out.println("    2. Under HIGH contention : Threads distribute increments across a striped 'CounterCell[] counterCells' array based on thread hash.");\r
        System.out.println("    3. During 'size() / mappingCount()': Java computes: 'sum = baseCount + sum(counterCells[i].value)'.");\r
        System.out.println("  - Result: Blazingly fast concurrent size updates with zero global lock bottlenecks!");\r
\r
        System.out.println("\\n==========================================================================");\r
    }\r
}`,s=`================================================================================\r
JAVA CORE TUTORIAL - QUICK REVISION GUIDE\r
Module 007_006: Concurrent Collections & ConcurrentHashMap\r
Topic 7: Size Calculation & CounterCell Array\r
Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
================================================================================\r
\r
1. SIZE CALCULATION:\r
   - 'baseCount' + sum of 'CounterCell[]' array.\r
   - LongAdder striped counter design.\r
   - Low contention → updates 'baseCount'.\r
   - High contention → distributes updates across 'CounterCell' slots.\r
   - 'mappingCount()' preferred over 'size()' in Java 8+.\r
\r
================================================================================\r
Classroom Practice: Barrackpore Academy | Mentor: Sukanta Hui\r
================================================================================`,l=[{question:"How does 'ConcurrentHashMap' compute its size without creating a global CAS bottleneck across multiple threads?",shortAnswer:"ConcurrentHashMap uses the 'LongAdder / Striped Counter' pattern. It maintains a 'volatile long baseCount' field and a striped 'CounterCell[] counterCells' array. When thread contention on 'baseCount' is low, threads update 'baseCount' via CAS. When contention is high, threads hash to independent 'CounterCell' slots. When 'size()' or 'mappingCount()' is called, it sums 'baseCount' and all active 'CounterCell' values, eliminating global lock or CAS bottlenecks.",explanation:"Core high-throughput concurrency design in java.util.concurrent.",hint:"Striped counters (baseCount + sum of CounterCell array) eliminate CAS storm contention.",level:"Advanced",codeExample:"long sum = baseCount; if (counterCells != null) { for (CounterCell c : counterCells) sum += c.value; }"}];function x(){return e.jsxs("div",{className:"space-y-12 px-4 md:px-8 py-8 text-slate-200 bg-slate-900 min-h-screen",children:[e.jsxs("header",{className:"space-y-4 border-b border-slate-800 pb-6",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"px-3 py-1 bg-sky-500/10 text-sky-400 border border-sky-500/20 text-xs font-semibold rounded-full uppercase tracking-wider",children:"Module 007_006 · Topic 7"}),e.jsx("span",{className:"px-3 py-1 bg-purple-500/10 text-purple-400 border border-purple-500/20 text-xs font-semibold rounded-full",children:"Striped Size Counters"})]}),e.jsxs("h1",{className:"text-xl sm:text-2xl md:text-3xl font-bold text-white tracking-tight",children:[e.jsx("code",{className:"text-emerald-400 font-mono",children:"ConcurrentHashMap"})," Size: ",e.jsx("code",{className:"text-emerald-400 font-mono",children:"baseCount"})," & ",e.jsx("code",{className:"text-purple-400 font-mono",children:"CounterCell[]"})," (LongAdder Pattern)"]}),e.jsxs("p",{className:"text-base md:text-lg text-slate-400 leading-relaxed max-w-4xl",children:["Understand high-throughput counter striping: analyzing how ",e.jsx("code",{className:"text-emerald-300 font-mono",children:"baseCount"})," and ",e.jsx("code",{className:"text-purple-300 font-mono",children:"CounterCell[]"})," eliminate CAS storms during concurrent element counting."]})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsxs("h2",{className:"text-2xl font-bold text-emerald-400 flex items-center gap-2",children:[e.jsx("span",{children:"💻"})," Hands-On Java Demo Code"]}),e.jsx(n,{fileModule:a,title:"ConcurrentHashMapSizeCalculationDemo.java",highlightLines:[7,10,16,17,21,22,29,30,31]})]}),e.jsx("section",{className:"space-y-4",children:e.jsx(t,{title:"Size Calculation FAQs",questions:l})}),e.jsx("section",{className:"space-y-4",children:e.jsx(r,{content:s,title:"Module 007_006 Topic 7: Size Calculation & CounterCell",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Printable Note",downloadFileName:"007_006_topic7_size_calculation_countercell_note.txt"})}),e.jsx(o,{note:"If 50 threads try to increment a single counter at once, 49 of them will fail CAS and retry! Doug Lea solved this with CounterCell array: threads spread their increments across different slots, and size() sums them up! — Sukanta Hui"})]})}export{x as default};
