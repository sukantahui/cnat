import{j as e}from"./vendor-react-core-Doz9nIC6.js";import{J as t}from"./JavaFileLoader-BfBG3xz_.js";import{F as a}from"./FAQTemplate-BHhlgA96.js";import{P as n}from"./PlainTextPrint-C08xhKA4.js";import{T as o}from"./TeacherSukantaHui-RpFLNJ5A.js";import"./JavaCodeBlock-BwsLxS3r.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-wprqVFW_.js";const r=`/**\r
 * Java Core Tutorial - Module 010_006: JVM Profiling, Heap Dumps & Memory Leak Diagnosis\r
 * Topic 17: Histogram View - Shallow Heap vs Retained Heap\r
 * Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
 */\r
\r
package com.coderaccotax.javatutorial.profiling;\r
\r
public class HistogramShallowVsRetainedHeapDemo {\r
\r
    public static void main(String[] args) {\r
        System.out.println("==========================================================================");\r
        System.out.println(" TOPIC 17: SHALLOW HEAP VS RETAINED HEAP - BARRACKPORE ACADEMY");\r
        System.out.println("==========================================================================\\n");\r
\r
        System.out.println(">>> SHALLOW HEAP VS RETAINED HEAP DEFINITIONS:");\r
        System.out.println("  --------------------------------------------------------------------------------------------------");\r
        System.out.println("  METRIC             DEFINITION                                            TYPICAL EXAMPLE");\r
        System.out.println("  --------------------------------------------------------------------------------------------------");\r
        System.out.println("  Shallow Heap Size  Memory consumed by the object's OWN fields/header.    HashMap instance = 48 bytes");\r
        System.out.println("  Retained Heap Size Total memory that would be FREED if this object is GC'd. Map + 50,000 entries = 250 MB!");\r
        System.out.println("  --------------------------------------------------------------------------------------------------\\n");\r
\r
        System.out.println(">>> WHY THIS MATTERS IN PRODUCTION TRIAGE:");\r
        System.out.println("  - Sorting a Histogram by Shallow Heap shows 'byte[]' and 'java.lang.String' at the top (symptom, not cause!).");\r
        System.out.println("  - Sorting by Retained Heap reveals the real culprit (the Cache or Service object holding those bytes!).");\r
\r
        System.out.println("\\n==========================================================================");\r
    }\r
}\r
`,s=`================================================================================\r
JAVA CORE TUTORIAL - QUICK REVISION GUIDE\r
Module 010_006: JVM Profiling, Heap Dumps & Memory Leak Diagnosis\r
Topic 17: Shallow vs Retained Heap\r
Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
================================================================================\r
\r
1. SHALLOW HEAP:\r
   - The memory allocated to hold the object's own direct state (Object Header + primitive fields + reference pointers).\r
   - Does NOT include memory of referenced objects!\r
\r
2. RETAINED HEAP:\r
   - The sum of Shallow Heap sizes of all objects that are reachable EXCLUSIVELY through this object.\r
   - The exact amount of RAM returned to the JVM if this object is collected.\r
\r
================================================================================\r
Classroom Practice: Barrackpore Academy | Mentor: Sukanta Hui\r
================================================================================\r
`,i=[{question:"Why do 'byte[]' and 'java.lang.String' almost always have the highest Shallow Heap in a memory dump histogram, even when they are not the root cause of a leak?",shortAnswer:"Because Strings and byte arrays are the primary data payload containers used by business objects, JSON payloads, and network buffers. The root cause is the collection or service object retaining references to those strings/arrays (which shows high Retained Heap).",explanation:"byte[] is the victim payload; the holding collection is the criminal.",hint:"They are payload containers; the container object has high Retained Heap.",level:"Intermediate",codeExample:"Shallow: byte[] = 80%; Retained: StudentCache = 80%"},{question:"What is the difference between Retained Heap and Deep Heap?",shortAnswer:"Deep Heap is the sum of sizes of all objects reachable from an object (regardless of whether others reference them), whereas Retained Heap includes ONLY objects that are exclusively reachable from this object and will be freed if it is garbage collected.",explanation:"Retained Heap accurately reflects reclaimable memory.",hint:"Retained Heap counts only exclusively reachable objects that will be freed upon collection.",level:"Advanced",codeExample:"Retained Heap = Exclusively dominated objects."}];function y(){return e.jsxs("div",{className:"space-y-12 px-4 md:px-8 py-8 text-slate-200 bg-slate-900 min-h-screen",children:[e.jsxs("header",{className:"space-y-4 border-b border-slate-800 pb-6",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"px-3 py-1 bg-sky-500/10 text-sky-400 border border-sky-500/20 text-xs font-semibold rounded-full uppercase tracking-wider",children:"Module 010_006 · Topic 17"}),e.jsx("span",{className:"px-3 py-1 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-xs font-semibold rounded-full",children:"JVM Profiling & OOM"})]}),e.jsxs("h1",{className:"text-xl sm:text-2xl md:text-3xl font-bold text-white tracking-tight",children:["Histogram View: ",e.jsx("code",{className:"text-emerald-400 font-mono",children:"Shallow Heap vs Retained Heap"})]}),e.jsx("p",{className:"text-base md:text-lg text-slate-400 leading-relaxed max-w-4xl",children:"The essential distinction: Shallow Heap (object instance size itself) vs Retained Heap (total memory freed when object is garbage collected)."})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsxs("h2",{className:"text-2xl font-bold text-emerald-400 flex items-center gap-2",children:[e.jsx("span",{children:"💻"})," Hands-On Java Demo Code"]}),e.jsx(t,{fileModule:r,title:"HistogramShallowVsRetainedHeapDemo.java",highlightLines:[18,25,34,43]})]}),e.jsx("section",{className:"space-y-4",children:e.jsx(a,{title:"Memory Profiling & OOM FAQs",questions:i})}),e.jsx("section",{className:"space-y-4",children:e.jsx(n,{content:s,title:"Module 010_006 Topic 17: Histogram: Shallow vs Retained Heap",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Printable Note",downloadFileName:"010_006_topic17_histogram_shallow_vs_retained_heap_note.txt"})}),e.jsx(o,{note:"A HashMap object has a Shallow Heap of only 48 bytes! But if it holds 100,000 students, its Retained Heap is 500 MEGABYTES! Never be fooled by Shallow Heap size! — Sukanta Hui"})]})}export{y as default};
