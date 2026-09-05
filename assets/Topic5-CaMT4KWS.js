import{j as e}from"./vendor-react-core-Doz9nIC6.js";import{J as t}from"./JavaFileLoader-BfBG3xz_.js";import{F as n}from"./FAQTemplate-BHhlgA96.js";import{P as r}from"./PlainTextPrint-C08xhKA4.js";import{T as a}from"./TeacherSukantaHui-DerPxfxp.js";import"./JavaCodeBlock-BwsLxS3r.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-CH1iX9C8.js";const o=`/**\r
 * Java Core Tutorial - Module 007_006: Concurrent Collections & ConcurrentHashMap\r
 * Topic 5: Modern ConcurrentHashMap (Java 8+): CAS Insertion & Synchronized Bucket Head\r
 * Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
 */\r
\r
package com.coderaccotax.javatutorial.collections;\r
\r
import java.util.concurrent.ConcurrentHashMap;\r
\r
public class ModernJava8CasAndBucketLockDemo {\r
\r
    public static void main(String[] args) {\r
        System.out.println("==========================================================================");\r
        System.out.println(" TOPIC 5: MODERN JAVA 8+ CAS & BUCKET HEAD SYNCHRONIZATION - BARRACKPORE");\r
        System.out.println("==========================================================================\\n");\r
\r
        ConcurrentHashMap<String, String> centerMap = new ConcurrentHashMap<>();\r
\r
        // 1. SCENARIO A: Inserting into an EMPTY bucket (Lock-Free CAS):\r
        centerMap.put("BRK-1", "Barrackpore Head Office"); // Uses CAS (casTabAt) with ZERO locks!\r
\r
        // 2. SCENARIO B: Inserting into an OCCUPIED bucket (Fine-grained synchronized lock):\r
        centerMap.put("BRK-1", "Barrackpore Main Office"); // Synchronizes ONLY on the head Node of BRK-1's bucket!\r
\r
        System.out.println(">>> 1. Map State: " + centerMap);\r
\r
        System.out.println("\\n>>> THE 2-TIER JAVA 8+ MUTATION ALGORITHM:");\r
        System.out.println("  1. If Bucket is EMPTY (null):");\r
        System.out.println("     - Java executes 'casTabAt(tab, i, null, new Node(hash, key, value))'.");\r
        System.out.println("     - Compare-And-Swap (CAS) uses CPU hardware atomic instructions with ZERO locking overhead!");\r
        System.out.println();\r
        System.out.println("  2. If Bucket is OCCUPIED (collision):");\r
        System.out.println("     - Java acquires a 'synchronized(f)' lock ONLY on the first Node 'f' of that bucket.");\r
        System.out.println("     - All other buckets (e.g. 15 out of 16 buckets) remain 100% unlocked and available for other threads!");\r
        System.out.println("     - If bucket chain reaches 8 nodes, converts to Red-Black Tree (TreeBin) protected by TreeNode locks.");\r
\r
        System.out.println("\\n==========================================================================");\r
    }\r
}`,c=`================================================================================\r
JAVA CORE TUTORIAL - QUICK REVISION GUIDE\r
Module 007_006: Concurrent Collections & ConcurrentHashMap\r
Topic 5: Modern Java 8+ CAS & Bucket Locks\r
Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
================================================================================\r
\r
1. MODERN JAVA 8+ CONCURRENTHASHMAP:\r
   - Eliminates Segment objects.\r
   - Empty bucket → lock-free CAS ('casTabAt').\r
   - Occupied bucket → 'synchronized(headNode)'.\r
   - Maximum concurrency: number of concurrent writes = number of buckets!\r
   - Converts bucket to TreeBin at 8 nodes.\r
\r
================================================================================\r
Classroom Practice: Barrackpore Academy | Mentor: Sukanta Hui\r
================================================================================`,s=[{question:"Describe the 2-tier mutation strategy used by 'ConcurrentHashMap' in Java 8+ when calling 'put(key, value)'.",shortAnswer:"1. 'Empty Bucket (Lock-Free CAS)': If the calculated bucket is empty ('null'), Java inserts the new node using atomic hardware CAS ('casTabAt()') without acquiring any lock. 2. 'Occupied Bucket (Fine-Grained Node Lock)': If the bucket is already occupied, Java acquires a monitor lock ONLY on the bucket's head node ('synchronized(f)'). Only threads writing to that exact same bucket wait; threads accessing any other bucket execute concurrently with zero blocking.",explanation:"Core algorithmic innovation of Java 8 ConcurrentHashMap (Doug Lea).",hint:"Empty bucket → lock-free CAS; Occupied bucket → synchronized on head node of that bucket.",level:"Advanced",codeExample:"if (casTabAt(tab, i, null, new Node<>(...))) break; else synchronized(f) { ... }"}];function x(){return e.jsxs("div",{className:"space-y-12 px-4 md:px-8 py-8 text-slate-200 bg-slate-900 min-h-screen",children:[e.jsxs("header",{className:"space-y-4 border-b border-slate-800 pb-6",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"px-3 py-1 bg-sky-500/10 text-sky-400 border border-sky-500/20 text-xs font-semibold rounded-full uppercase tracking-wider",children:"Module 007_006 · Topic 5"}),e.jsx("span",{className:"px-3 py-1 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-xs font-semibold rounded-full",children:"Modern CAS & Bucket Locks"})]}),e.jsxs("h1",{className:"text-xl sm:text-2xl md:text-3xl font-bold text-white tracking-tight",children:["Modern ",e.jsx("code",{className:"text-emerald-400 font-mono",children:"ConcurrentHashMap"})," (Java 8+): ",e.jsx("code",{className:"text-emerald-400 font-mono",children:"CAS"})," & Synchronized Bucket Head"]}),e.jsxs("p",{className:"text-base md:text-lg text-slate-400 leading-relaxed max-w-4xl",children:["Dissect Java 8+ concurrency internals: analyzing lock-free atomic ",e.jsx("code",{className:"text-emerald-300 font-mono",children:"CAS"})," insertions for empty buckets and fine-grained head-node synchronization (",e.jsx("code",{className:"text-sky-300 font-mono",children:"synchronized(f)"}),")."]})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsxs("h2",{className:"text-2xl font-bold text-emerald-400 flex items-center gap-2",children:[e.jsx("span",{children:"💻"})," Hands-On Java Demo Code"]}),e.jsx(t,{fileModule:o,title:"ModernJava8CasAndBucketLockDemo.java",highlightLines:[7,10,16,17,20,26,27,30,31]})]}),e.jsx("section",{className:"space-y-4",children:e.jsx(n,{title:"Modern CAS & Bucket Locks FAQs",questions:s})}),e.jsx("section",{className:"space-y-4",children:e.jsx(r,{content:c,title:"Module 007_006 Topic 5: Modern CAS & Bucket Locks",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Printable Note",downloadFileName:"007_006_topic5_modern_cas_and_bucket_locks_note.txt"})}),e.jsx(a,{note:"In Java 8+, if a bucket is empty, Java puts your item there using CPU hardware CAS without any locks at all! If the bucket is occupied, it locks ONLY that one bucket's first node! All other buckets stay wide open! — Sukanta Hui"})]})}export{x as default};
