import{j as e}from"./vendor-react-core-Doz9nIC6.js";import{J as t}from"./JavaFileLoader-BfBG3xz_.js";import{F as n}from"./FAQTemplate-CkSqDH4B.js";import{P as a}from"./PlainTextPrint-C08xhKA4.js";import{T as r}from"./TeacherSukantaHui-CC0AKmkm.js";import"./JavaCodeBlock-BwsLxS3r.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-BtJHuk7w.js";const s=`/**\r
 * Java Core Tutorial - Module 007_003: Set Implementations & TreeSet Internals\r
 * Topic 4: HashSet Performance: O(1) Constant Time add(), remove(), contains() Mechanics\r
 * Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
 */\r
\r
package com.coderaccotax.javatutorial.collections;\r
\r
import java.util.HashSet;\r
import java.util.Set;\r
\r
public class HashSetPerformanceCharacteristicsDemo {\r
\r
    public static void main(String[] args) {\r
        System.out.println("==========================================================================");\r
        System.out.println(" TOPIC 4: HashSet O(1) PERFORMANCE PROFILE - BARRACKPORE");\r
        System.out.println("==========================================================================\\n");\r
\r
        Set<Integer> largeHashSet = new HashSet<>(150000);\r
        for (int i = 0; i < 100000; i++) largeHashSet.add(i);\r
\r
        // 1. O(1) CONTAINS CHECK (Hash Bucket Direct Jump):\r
        long t1 = System.nanoTime();\r
        boolean found = largeHashSet.contains(75000); // Directly hashes to bucket!\r
        long t2 = System.nanoTime();\r
        System.out.printf(">>> 1. O(1) Membership Lookup (contains(75000)): %b (%d ns)%n", found, (t2 - t1));\r
\r
        // 2. O(1) REMOVAL (Hash Bucket Direct Unlink):\r
        long t3 = System.nanoTime();\r
        boolean removed = largeHashSet.remove(75000);\r
        long t4 = System.nanoTime();\r
        System.out.printf(">>> 2. O(1) Removal (remove(75000))            : %b (%d ns)%n", removed, (t4 - t3));\r
\r
        System.out.println("\\n>>> WHY HashSet DELIVERS TRUE O(1) CONSTANT TIME:");\r
        System.out.println("  1. No Sequential Scanning: Does not walk through 100,000 elements like ArrayList.");\r
        System.out.println("  2. Direct Array Indexing : 'bucketIndex = (table.length - 1) & hash' jumps directly to the target memory slot!");\r
        System.out.println("  3. Load Factor & TreeBins: Rehashes at 0.75 load factor and turns long bucket chains into O(log n) Red-Black trees if collisions exceed 8!");\r
\r
        System.out.println("\\n==========================================================================");\r
    }\r
}`,o=`================================================================================\r
JAVA CORE TUTORIAL - QUICK REVISION GUIDE\r
Module 007_003: Set Implementations & TreeSet Internals\r
Topic 4: HashSet Performance\r
Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
================================================================================\r
\r
1. HASHSET PERFORMANCE:\r
   - add(), remove(), contains() &rarr; O(1) average.\r
   - Jump to bucket via: '(length - 1) & hash'.\r
   - Load factor: 0.75 default before rehashing.\r
   - Java 8+ Treeification: bucket converts to Red-Black tree at 8 nodes (O(log n) worst-case).\r
\r
================================================================================\r
Classroom Practice: Barrackpore Academy | Mentor: Sukanta Hui\r
================================================================================`,i=[{question:"Under what conditions does 'HashSet.contains()' operate in O(1) constant time, and what happens if extreme hash collisions occur?",shortAnswer:"'HashSet.contains()' operates in O(1) constant time assuming a well-distributed hash function that spreads elements uniformly across buckets. In the worst-case scenario where many elements produce the identical hash code, elements chain in the same bucket. In Java 8+, if a bucket chain exceeds 8 nodes, it transforms from a linked list into a self-balancing Red-Black tree (TreeBin), guaranteeing O(log n) worst-case performance instead of O(n).",explanation:"Java 8 HashMap/HashSet collision handling architecture.",hint:"O(1) with uniform hash distribution; converts to O(log n) Red-Black tree if bucket has > 8 collisions.",level:"Intermediate",codeExample:"set.contains(key); // O(1) hash bucket jump; O(log n) if bucket treeified"}];function f(){return e.jsxs("div",{className:"space-y-12 px-4 md:px-8 py-8 text-slate-200 bg-slate-900 min-h-screen",children:[e.jsxs("header",{className:"space-y-4 border-b border-slate-800 pb-6",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"px-3 py-1 bg-sky-500/10 text-sky-400 border border-sky-500/20 text-xs font-semibold rounded-full uppercase tracking-wider",children:"Module 007_003 · Topic 4"}),e.jsx("span",{className:"px-3 py-1 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-xs font-semibold rounded-full",children:"O(1) Performance"})]}),e.jsxs("h1",{className:"text-3xl md:text-4xl font-extrabold text-white tracking-tight",children:["HashSet Performance: ",e.jsx("code",{className:"text-emerald-400 font-mono",children:"O(1)"})," Constant Time ",e.jsx("code",{className:"text-emerald-400 font-mono",children:"add()"}),", ",e.jsx("code",{className:"text-sky-400 font-mono",children:"remove()"})," & ",e.jsx("code",{className:"text-amber-400 font-mono",children:"contains()"})]}),e.jsxs("p",{className:"text-base md:text-lg text-slate-400 leading-relaxed max-w-4xl",children:["Analyze constant-time hash mechanics: exploring direct bucket address computation, load factor thresholds (",e.jsx("code",{className:"text-emerald-300 font-mono",children:"0.75"}),"), and Java 8 treeification worst-case guarantees."]})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsxs("h2",{className:"text-2xl font-bold text-emerald-400 flex items-center gap-2",children:[e.jsx("span",{children:"💻"})," Hands-On Java Demo Code"]}),e.jsx(t,{fileModule:s,title:"HashSetPerformanceCharacteristicsDemo.java",highlightLines:[7,10,16,17,22,23,28,29,30]})]}),e.jsx("section",{className:"space-y-4",children:e.jsx(n,{title:"HashSet Performance FAQs",questions:i})}),e.jsx("section",{className:"space-y-4",children:e.jsx(a,{content:o,title:"Module 007_003 Topic 4: HashSet Performance",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Printable Note",downloadFileName:"007_003_topic4_hashset_performance_note.txt"})}),e.jsx(r,{note:"If you need to check if 100,000 voter IDs or customer codes exist, an ArrayList takes seconds, but a HashSet takes nanoseconds! Direct bucket hashing makes lookup instantaneous! — Sukanta Hui"})]})}export{f as default};
