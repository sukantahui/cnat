import{j as e}from"./vendor-react-core-Doz9nIC6.js";import{J as t}from"./JavaFileLoader-BfBG3xz_.js";import{F as a}from"./FAQTemplate-CkSqDH4B.js";import{P as n}from"./PlainTextPrint-C08xhKA4.js";import{T as r}from"./TeacherSukantaHui-CyIG3xbg.js";import"./JavaCodeBlock-BwsLxS3r.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-CIaKtAt4.js";const o=`/**\r
 * Java Core Tutorial - Module 010_005: Garbage Collection Algorithms, Collectors & GC Tuning\r
 * Topic 2: What Constitutes a GC Root? - The 4 Primary Root Sources\r
 * Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
 */\r
\r
package com.coderaccotax.javatutorial.gc;\r
\r
public class WhatConstitutesGcRootDemo {\r
\r
    // GC ROOT CATEGORY 2: Static variable held in Metaspace/Class\r
    public static StudentRegistry globalAcademyRegistry = new StudentRegistry("Barrackpore Master Registry");\r
\r
    public static void main(String[] args) {\r
        System.out.println("==========================================================================");\r
        System.out.println(" TOPIC 2: WHAT CONSTITUTES A GC ROOT - BARRACKPORE ACADEMY");\r
        System.out.println("==========================================================================\\n");\r
\r
        // GC ROOT CATEGORY 1: Local variable in active Thread Stack frame\r
        StudentSession localSession = new StudentSession("Swadeep Paul");\r
\r
        // GC ROOT CATEGORY 4: Synchronized Monitor Lock\r
        Object monitorLock = new Object();\r
        synchronized (monitorLock) {\r
            System.out.println(">>> 1. ACTIVE GC ROOTS IN THIS JVM EXECUTION:");\r
            System.out.println("  - [GC ROOT 1]: Active Thread Stack Local Var -> 'localSession' (" + localSession.name + ")");\r
            System.out.println("  - [GC ROOT 2]: Static Class Variable in Metaspace -> 'globalAcademyRegistry' (" + globalAcademyRegistry.registryName + ")");\r
            System.out.println("  - [GC ROOT 3]: JNI Native References -> Global / Local C++ JNI handles");\r
            System.out.println("  - [GC ROOT 4]: Active Thread Synchronization Monitor -> 'monitorLock'");\r
        }\r
\r
        System.out.println("\\n==========================================================================");\r
    }\r
\r
    public static class StudentRegistry {\r
        public String registryName;\r
        public StudentRegistry(String name) { this.registryName = name; }\r
    }\r
\r
    public static class StudentSession {\r
        public String name;\r
        public StudentSession(String name) { this.name = name; }\r
    }\r
}\r
`,s=`================================================================================\r
JAVA CORE TUTORIAL - QUICK REVISION GUIDE\r
Module 010_005: Garbage Collection Algorithms, Collectors & GC Tuning\r
Topic 2: What Constitutes a GC Root\r
Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
================================================================================\r
\r
1. THE 4 PRIMARY CATEGORIES OF GC ROOTS:\r
   1. Active Thread Stack Frames : Local variables, parameters, and references on operand stacks of all running threads.\r
   2. Static Class Variables     : References held by static fields in loaded classes in Metaspace/Heap.\r
   3. JNI Native References      : Global / local C/C++ pointers created via Java Native Interface (JNI).\r
   4. Synchronization Monitors   : Objects currently locked by 'synchronized(obj)' blocks or used for thread signaling.\r
\r
2. REACHABILITY CONTRACT:\r
   - If an object is directly or indirectly referenced by ANY of the above roots, it is ALIVE.\r
\r
================================================================================\r
Classroom Practice: Barrackpore Academy | Mentor: Sukanta Hui\r
================================================================================\r
`,i=[{question:"Why does an object referenced by a static field never get garbage collected during normal application execution?",shortAnswer:"Because static fields belong to the loaded Class object in Metaspace/Heap, which acts as a permanent GC Root. As long as the ClassLoader that loaded the class remains alive, the static reference keeps the target object alive.",explanation:"Common cause of memory leaks in static collection caches.",hint:"Static fields are GC Roots and remain reachable for the ClassLoader's lifetime.",level:"Beginner",codeExample:"public static final List<Item> CACHE = new ArrayList<>(); // GC Root!"},{question:"What are the four primary sources of GC Roots in the HotSpot JVM?",shortAnswer:"1. Thread Stack local variables/parameters, 2. Static class variables, 3. JNI native references, and 4. Active synchronization monitor locks.",explanation:"Foundation for all reachability analysis algorithms.",hint:"Stack variables, static fields, JNI references, and synchronization monitors.",level:"Intermediate",codeExample:"GC Roots = Stacks + Statics + JNI + Monitors"}];function C(){return e.jsxs("div",{className:"space-y-12 px-4 md:px-8 py-8 text-slate-200 bg-slate-900 min-h-screen",children:[e.jsxs("header",{className:"space-y-4 border-b border-slate-800 pb-6",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"px-3 py-1 bg-sky-500/10 text-sky-400 border border-sky-500/20 text-xs font-semibold rounded-full uppercase tracking-wider",children:"Module 010_005 · Topic 2"}),e.jsx("span",{className:"px-3 py-1 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-xs font-semibold rounded-full",children:"Garbage Collection & Tuning"})]}),e.jsxs("h1",{className:"text-3xl md:text-4xl font-extrabold text-white tracking-tight",children:["What Constitutes a ",e.jsx("code",{className:"text-emerald-400 font-mono",children:"GC Root"}),"? The 4 Primary Root Sources"]}),e.jsx("p",{className:"text-base md:text-lg text-slate-400 leading-relaxed max-w-4xl",children:"The anchors of reachability: Thread Stack local variables, Static fields in Metaspace, JNI native pointers, and Monitor lock references."})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsxs("h2",{className:"text-2xl font-bold text-emerald-400 flex items-center gap-2",children:[e.jsx("span",{children:"💻"})," Hands-On Java Demo Code"]}),e.jsx(t,{fileModule:o,title:"WhatConstitutesGcRootDemo.java",highlightLines:[18,25,34,43]})]}),e.jsx("section",{className:"space-y-4",children:e.jsx(a,{title:"Garbage Collection FAQs",questions:i})}),e.jsx("section",{className:"space-y-4",children:e.jsx(n,{content:s,title:"Module 010_005 Topic 2: What Constitutes a GC Root",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Printable Note",downloadFileName:"010_005_topic2_what_constitutes_gc_root_note.txt"})}),e.jsx(r,{note:"A GC Root is the starting point of the reachability graph! In Java, there are 4 main GC Roots: 1) Local variables on active thread stacks, 2) Static variables in classes, 3) JNI native pointers, and 4) Thread monitor locks! — Sukanta Hui"})]})}export{C as default};
