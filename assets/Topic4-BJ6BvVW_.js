import{j as e}from"./vendor-react-core-Doz9nIC6.js";import{J as t}from"./JavaFileLoader-BfBG3xz_.js";import{F as n}from"./FAQTemplate-BHhlgA96.js";import{P as a}from"./PlainTextPrint-C08xhKA4.js";import{T as r}from"./TeacherSukantaHui-DerPxfxp.js";import"./JavaCodeBlock-BwsLxS3r.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-CH1iX9C8.js";const s=`/**\r
 * Java Core Tutorial - Module 007_006: Concurrent Collections & ConcurrentHashMap\r
 * Topic 4: Historical ConcurrentHashMap (Java 7): Segment Locking & ConcurrencyLevel\r
 * Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
 */\r
\r
package com.coderaccotax.javatutorial.collections;\r
\r
public class Java7SegmentLockingArchitectureDemo {\r
\r
    public static void main(String[] args) {\r
        System.out.println("==========================================================================");\r
        System.out.println(" TOPIC 4: JAVA 7 ConcurrentHashMap SEGMENT LOCKING - BARRACKPORE");\r
        System.out.println("==========================================================================\\n");\r
\r
        System.out.println(">>> HISTORICAL ARCHITECTURE (JAVA 7 CONCURRENTHASHMAP):");\r
        System.out.println("  1. Segment Array     : 'final Segment<K,V>[] segments' (Default size: 16).");\r
        System.out.println("  2. Segment Class     : Each Segment literally extended 'ReentrantLock' and owned its own internal HashEntry[] table!");\r
        System.out.println("  3. ConcurrencyLevel  : The default concurrency level was 16, allowing up to 16 concurrent write threads simultaneously.");\r
        System.out.println("  4. Two-Level Hashing : The key hash was first used to find the Segment index, then used inside the segment to find the bucket index.");\r
        System.out.println();\r
        System.out.println(">>> WHY JAVA 8 ABANDONED SEGMENT LOCKING:");\r
        System.out.println("  - Memory Overhead: Allocating 16 separate Segment objects and 16 separate HashEntry tables created massive heap memory bloat for small maps.");\r
        System.out.println("  - Concurrency Bottleneck: Concurrency was strictly capped at 16 segments (unless manually tuned). Multiple keys in the same segment still blocked each other.");\r
        System.out.println("  - Java 8 Solution: Replaced Segment objects with direct bucket-level locks and CAS operations!");\r
\r
        System.out.println("\\n==========================================================================");\r
    }\r
}`,o=`================================================================================\r
JAVA CORE TUTORIAL - QUICK REVISION GUIDE\r
Module 007_006: Concurrent Collections & ConcurrentHashMap\r
Topic 4: Java 7 Segment Locking Architecture\r
Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
================================================================================\r
\r
1. JAVA 7 SEGMENT LOCKING:\r
   - 'Segment<K,V>[] segments' (Default 16).\r
   - Each Segment extends 'ReentrantLock'.\r
   - Allowed 16 concurrent write threads.\r
   - High memory bloat (16 tables allocated).\r
   - Replaced in Java 8 with fine-grained per-bucket CAS & synchronization.\r
\r
================================================================================\r
Classroom Practice: Barrackpore Academy | Mentor: Sukanta Hui\r
================================================================================`,i=[{question:"How did 'ConcurrentHashMap' achieve concurrency in Java 7, and why was this approach redesigned in Java 8?",shortAnswer:"In Java 7, ConcurrentHashMap used 'Segment Locking' (Lock Striping): the map was divided into an array of 16 'Segment' objects, where each Segment extended 'ReentrantLock' and managed its own sub-table. This allowed up to 16 threads to write concurrently to different segments. It was redesigned in Java 8 because 16 Segment objects caused massive memory overhead for small maps and concurrency was artificially capped at the segment count. Java 8 replaced segments with direct per-bucket synchronization and CAS operations.",explanation:"Classic architectural evolution question in Java technical interviews.",hint:"Java 7 used an array of 16 Segment objects extending ReentrantLock; Java 8 replaced them with per-bucket CAS and node locks.",level:"Intermediate",codeExample:"static class Segment<K,V> extends ReentrantLock { transient volatile HashEntry<K,V>[] table; }"}];function x(){return e.jsxs("div",{className:"space-y-12 px-4 md:px-8 py-8 text-slate-200 bg-slate-900 min-h-screen",children:[e.jsxs("header",{className:"space-y-4 border-b border-slate-800 pb-6",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"px-3 py-1 bg-sky-500/10 text-sky-400 border border-sky-500/20 text-xs font-semibold rounded-full uppercase tracking-wider",children:"Module 007_006 · Topic 4"}),e.jsx("span",{className:"px-3 py-1 bg-purple-500/10 text-purple-400 border border-purple-500/20 text-xs font-semibold rounded-full",children:"Java 7 Segment Locking"})]}),e.jsxs("h1",{className:"text-xl sm:text-2xl md:text-3xl font-bold text-white tracking-tight",children:["Historical ",e.jsx("code",{className:"text-emerald-400 font-mono",children:"ConcurrentHashMap"})," (Java 7): Segment Locking & ",e.jsx("code",{className:"text-purple-400 font-mono",children:"concurrencyLevel"})]}),e.jsxs("p",{className:"text-base md:text-lg text-slate-400 leading-relaxed max-w-4xl",children:["Trace concurrent data structure history: examining Java 7's 16-segment lock striping array (",e.jsx("code",{className:"text-purple-300 font-mono",children:"ReentrantLock"}),") and analyzing why it was superseded in Java 8."]})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsxs("h2",{className:"text-2xl font-bold text-emerald-400 flex items-center gap-2",children:[e.jsx("span",{children:"💻"})," Hands-On Java Demo Code"]}),e.jsx(t,{fileModule:s,title:"Java7SegmentLockingArchitectureDemo.java",highlightLines:[7,10,13,14,15,16,20,21,22]})]}),e.jsx("section",{className:"space-y-4",children:e.jsx(n,{title:"Java 7 Segment Locking FAQs",questions:i})}),e.jsx("section",{className:"space-y-4",children:e.jsx(a,{content:o,title:"Module 007_006 Topic 4: Java 7 Segment Locking",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Printable Note",downloadFileName:"007_006_topic4_java7_segment_locking_note.txt"})}),e.jsx(r,{note:"In Java 7, ConcurrentHashMap divided the map into 16 slices called Segments, each with its own lock! In Java 8, Doug Lea made it even better by putting locks directly on each individual bucket node! — Sukanta Hui"})]})}export{x as default};
