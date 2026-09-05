import{j as e}from"./vendor-react-core-Doz9nIC6.js";import{J as t}from"./JavaFileLoader-BfBG3xz_.js";import{F as n}from"./FAQTemplate-BHhlgA96.js";import{P as o}from"./PlainTextPrint-C08xhKA4.js";import{T as a}from"./TeacherSukantaHui-DerPxfxp.js";import"./JavaCodeBlock-BwsLxS3r.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-CH1iX9C8.js";const r=`/**\r
 * Java Core Tutorial - Module 010_005: Garbage Collection Algorithms, Collectors & GC Tuning\r
 * Topic 5: Stop-The-World (STW) Pauses & JVM Safepoints\r
 * Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
 */\r
\r
package com.coderaccotax.javatutorial.gc;\r
\r
public class StwSafepointsDemo {\r
\r
    public static void main(String[] args) {\r
        System.out.println("==========================================================================");\r
        System.out.println(" TOPIC 5: STOP-THE-WORLD (STW) PAUSES & SAFEPOINTS - BARRACKPORE");\r
        System.out.println("==========================================================================\\n");\r
\r
        System.out.println(">>> WHAT IS A STOP-THE-WORLD (STW) PAUSE:");\r
        System.out.println("  1. The JVM brings ALL active application threads (mutators) to a complete halt.");\r
        System.out.println("  2. During the pause, no application code executes; only GC threads run.");\r
        System.out.println("  3. Why necessary: Prevents object references from shifting while GC is copying memory!\\n");\r
\r
        System.out.println(">>> WHAT IS A JVM SAFEPOINT:");\r
        System.out.println("  - A predetermined point in bytecode execution where thread state is completely stable.");\r
        System.out.println("  - Safepoint locations: Loop backwards branches, method invocations, JNI returns.");\r
        System.out.println("  - JIT compiler injects polling instructions (Safepoint Polls) so threads check if GC requested a pause.");\r
\r
        System.out.println("\\n==========================================================================");\r
    }\r
}\r
`,s=`================================================================================\r
JAVA CORE TUTORIAL - QUICK REVISION GUIDE\r
Module 010_005: Garbage Collection Algorithms, Collectors & GC Tuning\r
Topic 5: Stop-The-World (STW) & Safepoints\r
Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
================================================================================\r
\r
1. WHAT IS A SAFEPOINT:\r
   - A point during program execution where all execution state is known and consistent.\r
   - JIT compiler places safepoint polls at method returns and loop back-edges.\r
\r
2. TIME TO SAFEPOINT (TTSP):\r
   - The time it takes for all threads to reach a safepoint after GC signals a pause.\r
   - Counted loops without safepoints can cause delayed TTSP and latency spikes!\r
\r
================================================================================\r
Classroom Practice: Barrackpore Academy | Mentor: Sukanta Hui\r
================================================================================\r
`,i=[{question:"Why must all application threads stop during a Stop-The-World GC phase?",shortAnswer:"To prevent mutator threads from creating new objects or modifying reference pointers while the garbage collector is actively inspecting, marking, or relocating memory objects, which would otherwise result in data corruption.",explanation:"Ensures heap consistency during critical GC phases.",hint:"Prevents memory corruption while objects are being inspected or moved.",level:"Beginner",codeExample:"STW pauses mutator threads → GC moves objects safely."},{question:"Where does the JIT compiler place Safepoint checks in compiled Java code?",shortAnswer:"At method invocations, method returns, loop back-edges (backward branches), and transitions between Java and JNI native code.",explanation:"Ensures threads frequently check for pending GC pause requests.",hint:"At method calls, returns, loop back-edges, and JNI transitions.",level:"Intermediate",codeExample:"Safepoints at loop branches and method return points."}];function S(){return e.jsxs("div",{className:"space-y-12 px-4 md:px-8 py-8 text-slate-200 bg-slate-900 min-h-screen",children:[e.jsxs("header",{className:"space-y-4 border-b border-slate-800 pb-6",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"px-3 py-1 bg-sky-500/10 text-sky-400 border border-sky-500/20 text-xs font-semibold rounded-full uppercase tracking-wider",children:"Module 010_005 · Topic 5"}),e.jsx("span",{className:"px-3 py-1 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-xs font-semibold rounded-full",children:"Garbage Collection & Tuning"})]}),e.jsxs("h1",{className:"text-xl sm:text-2xl md:text-3xl font-bold text-white tracking-tight",children:["Stop-The-World (STW) Pauses: ",e.jsx("code",{className:"text-emerald-400 font-mono",children:"JVM Safepoints & Thread Coordination"})]}),e.jsx("p",{className:"text-base md:text-lg text-slate-400 leading-relaxed max-w-4xl",children:"Why Java pauses: how Safepoints bring application threads to a complete standstill so the GC can inspect and relocate heap objects safely."})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsxs("h2",{className:"text-2xl font-bold text-emerald-400 flex items-center gap-2",children:[e.jsx("span",{children:"💻"})," Hands-On Java Demo Code"]}),e.jsx(t,{fileModule:r,title:"StwSafepointsDemo.java",highlightLines:[18,25,34,43]})]}),e.jsx("section",{className:"space-y-4",children:e.jsx(n,{title:"Garbage Collection FAQs",questions:i})}),e.jsx("section",{className:"space-y-4",children:e.jsx(o,{content:s,title:"Module 010_005 Topic 5: Stop-The-World (STW) & Safepoints",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Printable Note",downloadFileName:"010_005_topic5_stw_safepoints_note.txt"})}),e.jsx(a,{note:"When a Stop-The-World pause occurs, all application threads pause at designated Safepoints! If threads kept creating or moving pointers while GC was copying objects, memory corruption would occur! — Sukanta Hui"})]})}export{S as default};
