import{j as e}from"./vendor-react-core-Doz9nIC6.js";import{J as t}from"./JavaFileLoader-BfBG3xz_.js";import{F as a}from"./FAQTemplate-CkSqDH4B.js";import{P as n}from"./PlainTextPrint-C08xhKA4.js";import{T as o}from"./TeacherSukantaHui-CC0AKmkm.js";import"./JavaCodeBlock-BwsLxS3r.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-BtJHuk7w.js";const s=`/**\r
 * Java Core Tutorial - Module 010_006: JVM Profiling, Heap Dumps & Memory Leak Diagnosis\r
 * Topic 15: The MAT Leak Suspects Report - Automated Memory Hog Diagnosis\r
 * Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
 */\r
\r
package com.coderaccotax.javatutorial.profiling;\r
\r
public class MatLeakSuspectsReportDemo {\r
\r
    public static void main(String[] args) {\r
        System.out.println("==========================================================================");\r
        System.out.println(" TOPIC 15: THE MAT LEAK SUSPECTS REPORT - BARRACKPORE ACADEMY");\r
        System.out.println("==========================================================================\\n");\r
\r
        System.out.println(">>> SAMPLE MAT LEAK SUSPECTS REPORT OUTPUT:");\r
        System.out.println("  ┌─────────────────────────────────────────────────────────────────────────────┐");\r
        System.out.println("  │ Problem Suspect 1:                                                          │");\r
        System.out.println("  │ The instance 'com.coderaccotax...StudentRegistryService' loaded by          │");\r
        System.out.println("  │ 'jdk.internal.loader.ClassLoaders$AppClassLoader' occupies 3,450,120,400    │");\r
        System.out.println("  │ bytes (82.45% of the total heap).                                           │");\r
        System.out.println("  │                                                                             │");\r
        System.out.println("  │ Keywords:                                                                   │");\r
        System.out.println("  │   - com.coderaccotax.javatutorial.profiling.StudentRegistryService          │");\r
        System.out.println("  │   - java.util.concurrent.ConcurrentHashMap$Node[]                          │");\r
        System.out.println("  └─────────────────────────────────────────────────────────────────────────────┘\\n");\r
\r
        System.out.println(">>> ACTIONABLE NEXT STEPS FROM THE REPORT:");\r
        System.out.println("  1. Click 'Details' on Problem Suspect 1.");\r
        System.out.println("  2. View the Shortest Path to GC Roots to find the field holding the map.");\r
        System.out.println("  3. Inspect Map key/value contents to verify what data leaked.");\r
        System.out.println("==========================================================================");\r
    }\r
}\r
`,r=`================================================================================\r
JAVA CORE TUTORIAL - QUICK REVISION GUIDE\r
Module 010_006: JVM Profiling, Heap Dumps & Memory Leak Diagnosis\r
Topic 15: The MAT Leak Suspects Report\r
Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
================================================================================\r
\r
1. WHAT THE REPORT REVEALS:\r
   - Uses heuristic algorithms to identify single objects or collections that dominate &gt;10% of the heap.\r
   - Shows the exact class name, ClassLoader, and retained byte size.\r
   - Lists relevant keywords and stack traces active during allocation.\r
\r
2. SPEED OF TRIAGE:\r
   - Solves the vast majority of production OOM incidents in under 5 minutes of analysis!\r
\r
================================================================================\r
Classroom Practice: Barrackpore Academy | Mentor: Sukanta Hui\r
================================================================================\r
`,i=[{question:"What threshold does Eclipse MAT typically use to flag an object as a 'Problem Suspect' in the Leak Suspects Report?",shortAnswer:"MAT flags any single object, collection, or retained object subtree that dominates more than roughly 10% to 15% of the total heap memory.",explanation:"Heuristic based on anomalous memory accumulation.",hint:"Objects dominating more than ~10-15% of total heap memory.",level:"Intermediate",codeExample:"Problem Suspect: 1 instance occupies 82% of heap."},{question:"What section of the Problem Suspect Details view shows the exact thread and call stack that allocated the leaking object?",shortAnswer:"The 'Thread Details' / 'Accumulated Objects by Class' section, which links the object to the active Thread Stack frame at the time the dump was captured.",explanation:"Pins the leak down to the specific line of code.",hint:"Thread Details / Stack Trace section.",level:"Intermediate",codeExample:"Thread Details -> Displays call stack and local variable anchors."}];function S(){return e.jsxs("div",{className:"space-y-12 px-4 md:px-8 py-8 text-slate-200 bg-slate-900 min-h-screen",children:[e.jsxs("header",{className:"space-y-4 border-b border-slate-800 pb-6",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"px-3 py-1 bg-sky-500/10 text-sky-400 border border-sky-500/20 text-xs font-semibold rounded-full uppercase tracking-wider",children:"Module 010_006 · Topic 15"}),e.jsx("span",{className:"px-3 py-1 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-xs font-semibold rounded-full",children:"JVM Profiling & OOM"})]}),e.jsxs("h1",{className:"text-3xl md:text-4xl font-extrabold text-white tracking-tight",children:["The MAT Leak Suspects Report: ",e.jsx("code",{className:"text-emerald-400 font-mono",children:"Automated Memory Hog Diagnosis"})]}),e.jsx("p",{className:"text-base md:text-lg text-slate-400 leading-relaxed max-w-4xl",children:"Automated triage: interpreting the Leak Suspects pie chart, Problem Suspect descriptions, and accumulated object graph clusters."})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsxs("h2",{className:"text-2xl font-bold text-emerald-400 flex items-center gap-2",children:[e.jsx("span",{children:"💻"})," Hands-On Java Demo Code"]}),e.jsx(t,{fileModule:s,title:"MatLeakSuspectsReportDemo.java",highlightLines:[18,25,34,43]})]}),e.jsx("section",{className:"space-y-4",children:e.jsx(a,{title:"Memory Profiling & OOM FAQs",questions:i})}),e.jsx("section",{className:"space-y-4",children:e.jsx(n,{content:r,title:"Module 010_006 Topic 15: The Leak Suspects Report",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Printable Note",downloadFileName:"010_006_topic15_mat_leak_suspects_report_note.txt"})}),e.jsx(o,{note:"When you open a heap dump in MAT, the Leak Suspects Report gives you a pie chart showing: 'Problem Suspect 1: 1 instance of java.util.HashMap occupies 85% of total heap!' It points right at the crime scene! — Sukanta Hui"})]})}export{S as default};
