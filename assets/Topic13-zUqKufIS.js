import{j as e}from"./vendor-react-core-Doz9nIC6.js";import{J as t}from"./JavaFileLoader-BfBG3xz_.js";import{F as a}from"./FAQTemplate-CkSqDH4B.js";import{P as s}from"./PlainTextPrint-C08xhKA4.js";import{T as n}from"./TeacherSukantaHui-CC0AKmkm.js";import"./JavaCodeBlock-BwsLxS3r.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-BtJHuk7w.js";const i=`/**\r
 * Java Core Tutorial - Module 007_005: Map Implementations & HashMap Internals\r
 * Topic 13: Rehashing & Resizing: Doubling (2x) & Bitwise Node Redistribution ((e.hash & oldCap) == 0)\r
 * Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
 */\r
\r
package com.coderaccotax.javatutorial.collections;\r
\r
public class HashMapRehashingBitwiseRedistributionDemo {\r
\r
    public static void main(String[] args) {\r
        System.out.println("==========================================================================");\r
        System.out.println(" TOPIC 13: HashMap REHASHING & (e.hash & oldCap) - BARRACKPORE");\r
        System.out.println("==========================================================================\\n");\r
\r
        int oldCap = 16; // Binary: 0001 0000 (Bit 4 is the new distinguishing bit)\r
        int newCap = 32; // Binary: 0010 0000\r
\r
        // Suppose we have two keys that collided in Bucket 5 of the old table (oldCap 16):\r
        int hash1 = 5;  // Binary: 0000 0101 (Bit 4 is 0)\r
        int hash2 = 21; // Binary: 0001 0101 (Bit 4 is 1)\r
\r
        System.out.println(">>> 1. Old Table (Capacity 16, Bitmask 15 = 0000 1111):");\r
        System.out.printf("  Hash %2d: (15 & %2d) -> Old Bucket %d%n", hash1, hash1, (15 & hash1));\r
        System.out.printf("  Hash %2d: (15 & %2d) -> Old Bucket %d (Collided in same bucket!)%n", hash2, hash2, (15 & hash2));\r
\r
        System.out.println("\\n>>> 2. Java 8+ Resizing Bitwise Test '(e.hash & oldCap)':");\r
        boolean staysInLowBucket = (hash1 & oldCap) == 0;\r
        boolean movesToHighBucket = (hash2 & oldCap) != 0;\r
\r
        System.out.printf("  Hash %2d & 16: %d -> Stays in same index? %b (New Index: %d)%n",\r
                hash1, (hash1 & oldCap), staysInLowBucket, (staysInLowBucket ? 5 : 5 + oldCap));\r
        System.out.printf("  Hash %2d & 16: %d -> Moves to high index? %b (New Index: %d)%n",\r
                hash2, (hash2 & oldCap), movesToHighBucket, (movesToHighBucket ? 5 + oldCap : 5));\r
\r
        System.out.println("\\n>>> ELEGANT JAVA 8 RESIZE ALGORITHM (NO RE-HASHING!):");\r
        System.out.println("  1. In Java 7: Every node had its hash re-computed and re-moduloed (slow & reversed list order causing infinite loops in multi-threading).");\r
        System.out.println("  2. In Java 8: Nodes are split into two sub-lists (loHead/loTail and hiHead/hiTail) using '(e.hash & oldCap) == 0'.");\r
        System.out.println("  3. If (hash & oldCap) == 0 -> node stays at 'index' in new table.");\r
        System.out.println("  4. If (hash & oldCap) != 0 -> node moves to 'index + oldCap' in new table (Zero re-hashing math!).");\r
\r
        System.out.println("\\n==========================================================================");\r
    }\r
}`,o=`================================================================================\r
JAVA CORE TUTORIAL - QUICK REVISION GUIDE\r
Module 007_005: Map Implementations & HashMap Internals\r
Topic 13: Rehashing & Resizing Mechanics\r
Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
================================================================================\r
\r
1. RESIZING MECHANICS:\r
   - Capacity doubles (oldCap &times; 2).\r
   - Bit test: '(e.hash & oldCap) == 0'.\r
   - If 0 &rarr; stays at original bucket 'j'.\r
   - If != 0 &rarr; moves to high bucket 'j + oldCap'.\r
   - Preserves original node order (prevents Java 7 circular loop bugs).\r
\r
================================================================================\r
Classroom Practice: Barrackpore Academy | Mentor: Sukanta Hui\r
================================================================================`,r=[{question:"How does Java 8+ redistribute bucket elements during HashMap resizing without recomputing hash codes?",shortAnswer:"When capacity doubles (e.g. from 16 to 32), the bitmask expands by exactly 1 higher bit (bit 4, representing 16). Java tests this single bit using '(e.hash & oldCap)'. If the bit is 0 ('(hash & oldCap) == 0'), the node remains at its original bucket index ('j'). If the bit is 1, the node moves to 'j + oldCap' (e.g. 5 + 16 = 21). This splits the bucket into two clean lists without recomputing any hash arithmetic.",explanation:"Masterpiece bitwise algorithm inside java.util.HashMap.resize().",hint:"If (e.hash & oldCap) == 0 &rarr; stays at index j; otherwise &rarr; moves to index j + oldCap.",level:"Advanced",codeExample:"if ((e.hash & oldCap) == 0) { /* stays at j */ } else { /* moves to j + oldCap */ }"}];function g(){return e.jsxs("div",{className:"space-y-12 px-4 md:px-8 py-8 text-slate-200 bg-slate-900 min-h-screen",children:[e.jsxs("header",{className:"space-y-4 border-b border-slate-800 pb-6",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"px-3 py-1 bg-sky-500/10 text-sky-400 border border-sky-500/20 text-xs font-semibold rounded-full uppercase tracking-wider",children:"Module 007_005 · Topic 13"}),e.jsx("span",{className:"px-3 py-1 bg-purple-500/10 text-purple-400 border border-purple-500/20 text-xs font-semibold rounded-full",children:"Bitwise Resizing"})]}),e.jsxs("h1",{className:"text-3xl md:text-4xl font-extrabold text-white tracking-tight",children:["Rehashing & Resizing: Doubling (",e.jsx("code",{className:"text-emerald-400 font-mono",children:"2x"}),") & Bitwise Node Redistribution (",e.jsx("code",{className:"text-sky-400 font-mono",children:"e.hash & oldCap"}),")"]}),e.jsxs("p",{className:"text-base md:text-lg text-slate-400 leading-relaxed max-w-4xl",children:["Dissect table expansion algorithms: analyzing how ",e.jsx("code",{className:"text-emerald-300 font-mono",children:"(e.hash & oldCap) == 0"})," splits bucket chains into low and high partitions with zero re-hashing computation."]})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsxs("h2",{className:"text-2xl font-bold text-emerald-400 flex items-center gap-2",children:[e.jsx("span",{children:"💻"})," Hands-On Java Demo Code"]}),e.jsx(t,{fileModule:i,title:"HashMapRehashingBitwiseRedistributionDemo.java",highlightLines:[7,10,13,14,21,22,28,29,34,35]})]}),e.jsx("section",{className:"space-y-4",children:e.jsx(a,{title:"Resizing FAQs",questions:r})}),e.jsx("section",{className:"space-y-4",children:e.jsx(s,{content:o,title:"Module 007_005 Topic 13: Rehashing & Resizing",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Printable Note",downloadFileName:"007_005_topic13_rehashing_and_resizing_note.txt"})}),e.jsx(n,{note:"Java 8's resizing algorithm is pure mathematical genius! When the table doubles from 16 to 32, Java checks just 1 single bit with '(hash & 16)'. If it's 0, the node stays in bucket 5; if it's 1, it moves to bucket 21! No re-hashing required! — Sukanta Hui"})]})}export{g as default};
