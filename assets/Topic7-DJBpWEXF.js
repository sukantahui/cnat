import{j as e}from"./vendor-react-core-Doz9nIC6.js";import{J as r}from"./JavaFileLoader-BfBG3xz_.js";import{F as t}from"./FAQTemplate-BHhlgA96.js";import{P as a}from"./PlainTextPrint-C08xhKA4.js";import{T as o}from"./TeacherSukantaHui-DerPxfxp.js";import"./JavaCodeBlock-BwsLxS3r.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-CH1iX9C8.js";const n=`/**\r
 * Java Core Tutorial - Module 008_006: JMM, volatile, Atomics & CAS\r
 * Topic 7: volatile Guarantee 2: Hardware Memory Barriers & Preventing Reordering\r
 * Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
 */\r
\r
package com.coderaccotax.javatutorial.multithreading;\r
\r
public class VolatileMemoryBarriersInstructionFencesDemo {\r
\r
    private static int preparedData = 0;\r
    // VOLATILE PUBLICATION FLAG:\r
    private static volatile boolean published = false;\r
\r
    public static void main(String[] args) {\r
        System.out.println("==========================================================================");\r
        System.out.println(" TOPIC 7: volatile MEMORY BARRIERS & HARDWARE FENCES - BARRACKPORE");\r
        System.out.println("==========================================================================\\n");\r
\r
        System.out.println(">>> HOW volatile PREVENTS INSTRUCTION REORDERING:");\r
        System.out.println("  1. Producer Thread Actions:");\r
        System.out.println("     preparedData = 9999;     // Plain write (Normal store)");\r
        System.out.println("     // [STORESTORE BARRIER INSERTED BY JVM]");\r
        System.out.println("     published = true;        // Volatile write (Release Barrier)");\r
        System.out.println();\r
        System.out.println("  2. Consumer Thread Actions:");\r
        System.out.println("     if (published) {         // Volatile read (Acquire Barrier)");\r
        System.out.println("         // [LOADLOAD & LOADSTORE BARRIERS INSERTED BY JVM]");\r
        System.out.println("         int x = preparedData;// Plain read (Guaranteed to see 9999!)");\r
        System.out.println("     }");\r
        System.out.println();\r
        System.out.println(">>> THE 4 CANONICAL JMM MEMORY BARRIERS:");\r
        System.out.println("  - StoreStore Barrier : Ensures all previous writes are flushed before the volatile write.");\r
        System.out.println("  - StoreLoad Barrier  : Prevents volatile write from being reordered with subsequent reads (heaviest fence).");\r
        System.out.println("  - LoadLoad Barrier   : Ensures volatile read happens before any subsequent reads.");\r
        System.out.println("  - LoadStore Barrier  : Ensures volatile read happens before any subsequent writes.");\r
\r
        System.out.println("\\n==========================================================================");\r
    }\r
}`,i=`================================================================================\r
JAVA CORE TUTORIAL - QUICK REVISION GUIDE\r
Module 008_006: JMM, volatile, Atomics & CAS\r
Topic 7: volatile Memory Barriers\r
Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
================================================================================\r
\r
1. VOLATILE MEMORY BARRIERS:\r
   - StoreStore: Flushes prior writes before volatile write.\r
   - StoreLoad: Heaviest barrier; separates writes from subsequent reads.\r
   - LoadLoad & LoadStore: Ensures volatile read happens before subsequent ops.\r
   - Guarantees Safe Publication: Normal variables written before volatile are visible!\r
\r
================================================================================\r
Classroom Practice: Barrackpore Academy | Mentor: Sukanta Hui\r
================================================================================`,s=[{question:"How do JMM Memory Barriers (Memory Fences) enforce safe publication when writing and reading volatile variables?",shortAnswer:"The JVM inserts hardware memory barriers around volatile operations: 1. 'Before a volatile write': A 'StoreStore' barrier is emitted to ensure all preceding normal writes (e.g. initializing 'data = 9999') are fully flushed to memory before the volatile variable ('published = true') is updated. 2. 'After a volatile write': A 'StoreLoad' barrier prevents the volatile write from reordering with subsequent reads. 3. 'After a volatile read': A 'LoadLoad' and 'LoadStore' barrier ensures that subsequent reads (e.g. reading 'data') cannot be reordered before the volatile read. This guarantee is known as 'Safe Publication'.",explanation:"Core JMM memory barrier matrix specification (JSR-133 Cookbook).",hint:"StoreStore barriers flush prior writes before volatile writes; LoadLoad/LoadStore barriers prevent reordering after volatile reads.",level:"Advanced",codeExample:"data = 42; // StoreStore fence inserted before: volatileReady = true;"}];function x(){return e.jsxs("div",{className:"space-y-12 px-4 md:px-8 py-8 text-slate-200 bg-slate-900 min-h-screen",children:[e.jsxs("header",{className:"space-y-4 border-b border-slate-800 pb-6",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"px-3 py-1 bg-sky-500/10 text-sky-400 border border-sky-500/20 text-xs font-semibold rounded-full uppercase tracking-wider",children:"Module 008_006 · Topic 7"}),e.jsx("span",{className:"px-3 py-1 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-xs font-semibold rounded-full",children:"Memory Barriers"})]}),e.jsxs("h1",{className:"text-xl sm:text-2xl md:text-3xl font-bold text-white tracking-tight",children:[e.jsx("code",{className:"text-emerald-400 font-mono",children:"volatile"})," Guarantee 2: Memory Barriers & Instruction Fences"]}),e.jsx("p",{className:"text-base md:text-lg text-slate-400 leading-relaxed max-w-4xl",children:"Dissect low-level CPU instruction fences: examining StoreStore, StoreLoad, LoadLoad, and LoadStore memory barriers and achieving safe concurrent object publication."})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsxs("h2",{className:"text-2xl font-bold text-emerald-400 flex items-center gap-2",children:[e.jsx("span",{children:"💻"})," Hands-On Java Demo Code"]}),e.jsx(r,{fileModule:n,title:"VolatileMemoryBarriersInstructionFencesDemo.java",highlightLines:[7,10,13,14,18,19,20,24,25,29,30]})]}),e.jsx("section",{className:"space-y-4",children:e.jsx(t,{title:"Memory Barriers FAQs",questions:s})}),e.jsx("section",{className:"space-y-4",children:e.jsx(a,{content:i,title:"Module 008_006 Topic 7: volatile Memory Barriers",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Printable Note",downloadFileName:"008_006_topic7_volatile_memory_barriers_note.txt"})}),e.jsx(o,{note:"Volatile doesn't just make itself visible—it acts as a guard fence! Any normal variables you set BEFORE writing to a volatile variable are also guaranteed to be safely published and visible to other threads! — Sukanta Hui"})]})}export{x as default};
