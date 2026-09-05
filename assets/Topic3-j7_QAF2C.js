import{j as e}from"./vendor-react-core-Doz9nIC6.js";import{J as r}from"./JavaFileLoader-BfBG3xz_.js";import{F as t}from"./FAQTemplate-BHhlgA96.js";import{P as n}from"./PlainTextPrint-C08xhKA4.js";import{T as a}from"./TeacherSukantaHui-DerPxfxp.js";import"./JavaCodeBlock-BwsLxS3r.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-CH1iX9C8.js";const o=`/**\r
 * Java Core Tutorial - Module 008_006: JMM, volatile, Atomics & CAS\r
 * Topic 3: The Java Memory Model (JMM) Specification (JSR-133 Overhaul)\r
 * Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
 */\r
\r
package com.coderaccotax.javatutorial.multithreading;\r
\r
public class JavaMemoryModelSpecificationOverviewDemo {\r
\r
    public static void main(String[] args) {\r
        System.out.println("==========================================================================");\r
        System.out.println(" TOPIC 3: THE JAVA MEMORY MODEL (JMM / JSR-133) - BARRACKPORE");\r
        System.out.println("==========================================================================\\n");\r
\r
        System.out.println(">>> WHAT IS THE JAVA MEMORY MODEL (JMM)?");\r
        System.out.println("  - The JMM is the formal specification defining how threads interact through memory.");\r
        System.out.println("  - It defines exact rules for WHEN a write by one thread is GUARANTEED to become VISIBLE to another thread.");\r
        System.out.println("  - Major Overhaul: JSR-133 (Java 5.0) fixed the broken memory model of Java 1.4.");\r
        System.out.println();\r
        System.out.println(">>> THE TWO CRITICAL GUARANTEES OF JMM:");\r
        System.out.println("  1. Visibility  : Under what conditions does Thread B see the memory writes made by Thread A?");\r
        System.out.println("  2. Ordering    : Under what conditions does Thread B see memory operations occur in program source order?");\r
        System.out.println();\r
        System.out.println(">>> HOW JMM BRIDGES HARDWARE DIFFERENCES:");\r
        System.out.println("  - Intel x86 has strong hardware memory ordering (Total Store Order).");\r
        System.out.println("  - ARM / Apple Silicon has weak hardware memory ordering (aggressive reordering).");\r
        System.out.println("  - The JMM provides a UNIFIED, CROSS-PLATFORM contract: Write once, run correctly everywhere with identical memory semantics!");\r
\r
        System.out.println("\\n==========================================================================");\r
    }\r
}`,i=`================================================================================\r
JAVA CORE TUTORIAL - QUICK REVISION GUIDE\r
Module 008_006: JMM, volatile, Atomics & CAS\r
Topic 3: Java Memory Model (JMM)\r
Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
================================================================================\r
\r
1. JAVA MEMORY MODEL (JMM):\r
   - Formal specification (JSR-133, Java 5+).\r
   - Governs two critical dimensions:\r
     1. Visibility: When writes become visible to other threads.\r
     2. Ordering: When instruction execution order is preserved.\r
   - Provides unified memory semantics across x86, ARM, and RISC-V.\r
\r
================================================================================\r
Classroom Practice: Barrackpore Academy | Mentor: Sukanta Hui\r
================================================================================`,s=[{question:"What is the Java Memory Model (JMM / JSR-133) and what core problem does it solve?",shortAnswer:"The Java Memory Model (JMM), completely overhauled under JSR-133 in Java 5, is a formal specification that defines the rules and contracts governing how threads interact through shared memory. It bridges the gap between hardware architectures (like strong-ordered x86 and weakly-ordered ARM/PowerPC) by specifying exactly when a write to a shared variable by one thread is guaranteed to be visible to another thread (Visibility) and when instructions are guaranteed not to be reordered (Ordering).",explanation:"Core Java Language Specification and JSR-133 design rationale.",hint:"Formal specification defining memory visibility and instruction ordering guarantees across different hardware CPU architectures.",level:"Advanced",codeExample:"// JMM provides the Happens-Before specification unifying memory semantics across CPUs."}];function y(){return e.jsxs("div",{className:"space-y-12 px-4 md:px-8 py-8 text-slate-200 bg-slate-900 min-h-screen",children:[e.jsxs("header",{className:"space-y-4 border-b border-slate-800 pb-6",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"px-3 py-1 bg-sky-500/10 text-sky-400 border border-sky-500/20 text-xs font-semibold rounded-full uppercase tracking-wider",children:"Module 008_006 · Topic 3"}),e.jsx("span",{className:"px-3 py-1 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-xs font-semibold rounded-full",children:"JMM Specification"})]}),e.jsxs("h1",{className:"text-xl sm:text-2xl md:text-3xl font-bold text-white tracking-tight",children:["The ",e.jsx("code",{className:"text-emerald-400 font-mono",children:"Java Memory Model (JMM)"}),": JSR-133 Specification"]}),e.jsx("p",{className:"text-base md:text-lg text-slate-400 leading-relaxed max-w-4xl",children:"Master the formal JVM memory contract: understanding JSR-133 revisions, cross-platform memory abstractions, and the dual pillars of visibility and instruction ordering."})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsxs("h2",{className:"text-2xl font-bold text-emerald-400 flex items-center gap-2",children:[e.jsx("span",{children:"💻"})," Hands-On Java Demo Code"]}),e.jsx(r,{fileModule:o,title:"JavaMemoryModelSpecificationOverviewDemo.java",highlightLines:[7,10,13,14,15,18,19,23,24]})]}),e.jsx("section",{className:"space-y-4",children:e.jsx(t,{title:"JMM Specification FAQs",questions:s})}),e.jsx("section",{className:"space-y-4",children:e.jsx(n,{content:i,title:"Module 008_006 Topic 3: JMM Specification",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Printable Note",downloadFileName:"008_006_topic3_jmm_specification_note.txt"})}),e.jsx(a,{note:"Different computers (like Intel Core i7 vs Apple M3 chips) handle memory caches differently. The Java Memory Model (JMM) is Java's master rulebook that guarantees your multi-threaded code runs identically and correctly on every CPU on earth! — Sukanta Hui"})]})}export{y as default};
