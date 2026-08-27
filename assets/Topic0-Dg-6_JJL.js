import{j as e}from"./vendor-react-core-Doz9nIC6.js";import{J as n}from"./JavaFileLoader-BfBG3xz_.js";import{F as t}from"./FAQTemplate-CkSqDH4B.js";import{P as a}from"./PlainTextPrint-C08xhKA4.js";import{T as r}from"./TeacherSukantaHui-CC0AKmkm.js";import"./JavaCodeBlock-BwsLxS3r.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-BtJHuk7w.js";const o=`/**\r
 * Java Core Tutorial - Module 010_005: Garbage Collection Algorithms, Collectors & GC Tuning\r
 * Topic 0: The Principle of Garbage Collection - Automatic Memory Reclamation\r
 * Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
 */\r
\r
package com.coderaccotax.javatutorial.gc;\r
\r
public class PrincipleOfGarbageCollectionDemo {\r
\r
    public static class StudentSession {\r
        private final String studentName;\r
        public StudentSession(String name) { this.studentName = name; }\r
        @Override public String toString() { return "StudentSession[" + studentName + "]"; }\r
    }\r
\r
    public static void main(String[] args) {\r
        System.out.println("==========================================================================");\r
        System.out.println(" TOPIC 0: PRINCIPLE OF GARBAGE COLLECTION - BARRACKPORE ACADEMY");\r
        System.out.println("==========================================================================\\n");\r
\r
        // 1. Live referenced object:\r
        StudentSession activeSession = new StudentSession("Swadeep Paul (Barrackpore)");\r
        System.out.println("1. Active Live Object: " + activeSession);\r
\r
        // 2. Making an object eligible for Garbage Collection (Dereferencing):\r
        StudentSession temporarySession = new StudentSession("Tuhina Das (Temporary)");\r
        System.out.println("2. Created Temporary Session: " + temporarySession);\r
\r
        // Nullifying reference makes the heap object unreachable (Garbage!):\r
        temporarySession = null;\r
        System.out.println("   --> 'temporarySession' set to null: Object is now ELIGIBLE for GC!\\n");\r
\r
        System.out.println(">>> 3. HOW THE GARBAGE COLLECTOR OPERATES:");\r
        System.out.println("  1. Identifies unreferenced / unreachable objects in Heap memory.");\r
        System.out.println("  2. Reclaims memory occupied by those dead objects.");\r
        System.out.println("  3. Compacts fragmented memory blocks (in compacting collectors).");\r
        System.out.println("  4. Executes fully autonomously without explicit free() / delete calls.");\r
\r
        System.out.println("\\n==========================================================================");\r
    }\r
}\r
`,i=`================================================================================\r
JAVA CORE TUTORIAL - QUICK REVISION GUIDE\r
Module 010_005: Garbage Collection Algorithms, Collectors & GC Tuning\r
Topic 0: Principle of Garbage Collection\r
Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
================================================================================\r
\r
1. WHAT IS GARBAGE COLLECTION:\r
   - Automated dynamic memory management built into the Java Virtual Machine.\r
   - Eliminates manual pointer management ('malloc', 'free', 'delete' from C/C++).\r
   - Eliminates common memory bugs: dangling pointers, double-free, and most memory leaks.\r
\r
2. WHEN AN OBJECT BECOMES ELIGIBLE FOR GC:\r
   - When it cannot be reached by any chain of live references starting from a GC Root.\r
   - Explicitly nullifying references ('obj = null') or exiting a variable's scope makes objects unreachable.\r
\r
================================================================================\r
Classroom Practice: Barrackpore Academy | Mentor: Sukanta Hui\r
================================================================================\r
`,s=[{question:"Does calling System.gc() guarantee that the JVM will immediately run garbage collection?",shortAnswer:"No! System.gc() (and Runtime.getRuntime().gc()) is merely a non-binding hint or suggestion to the JVM. The JVM is free to delay, ignore, or perform GC at its own discretion.",explanation:"In production, calling System.gc() is an anti-pattern and often disabled via -XX:+DisableExplicitGC.",hint:"No, it is only a non-binding suggestion to the JVM.",level:"Beginner",codeExample:"System.gc(); // Hint only, no guarantee!"},{question:"What are the two major hazards of manual memory management in C/C++ that Java Garbage Collection eliminates?",shortAnswer:"1. Dangling Pointers (accessing memory that has already been deallocated), and 2. Double-Free errors (corrupting memory allocator tables by freeing the same pointer twice).",explanation:"Provides fundamental memory safety for the JVM ecosystem.",hint:"Dangling pointers and double-free memory corruption.",level:"Beginner",codeExample:"Java eliminates dangling pointers and double-free bugs."}];function h(){return e.jsxs("div",{className:"space-y-12 px-4 md:px-8 py-8 text-slate-200 bg-slate-900 min-h-screen",children:[e.jsxs("header",{className:"space-y-4 border-b border-slate-800 pb-6",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"px-3 py-1 bg-sky-500/10 text-sky-400 border border-sky-500/20 text-xs font-semibold rounded-full uppercase tracking-wider",children:"Module 010_005 · Topic 0"}),e.jsx("span",{className:"px-3 py-1 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-xs font-semibold rounded-full",children:"Garbage Collection & Tuning"})]}),e.jsxs("h1",{className:"text-3xl md:text-4xl font-extrabold text-white tracking-tight",children:["The Principle of ",e.jsx("code",{className:"text-emerald-400 font-mono",children:"Garbage Collection"}),": Automatic Memory Reclamation"]}),e.jsx("p",{className:"text-base md:text-lg text-slate-400 leading-relaxed max-w-4xl",children:"Freeing developers from manual memory management: how the JVM background daemon tracks unreachable objects and reclaims heap memory."})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsxs("h2",{className:"text-2xl font-bold text-emerald-400 flex items-center gap-2",children:[e.jsx("span",{children:"💻"})," Hands-On Java Demo Code"]}),e.jsx(n,{fileModule:o,title:"PrincipleOfGarbageCollectionDemo.java",highlightLines:[18,25,34,43]})]}),e.jsx("section",{className:"space-y-4",children:e.jsx(t,{title:"Garbage Collection FAQs",questions:s})}),e.jsx("section",{className:"space-y-4",children:e.jsx(a,{content:i,title:"Module 010_005 Topic 0: Principle of Garbage Collection",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Printable Note",downloadFileName:"010_005_topic0_principle_of_garbage_collection_note.txt"})}),e.jsx(r,{note:"In C++, one forgotten free() causes memory leaks, and a double free() crashes the OS! In Java, the Garbage Collector runs automatically as a background daemon, scanning for unreachable objects and returning memory to the heap! — Sukanta Hui"})]})}export{h as default};
