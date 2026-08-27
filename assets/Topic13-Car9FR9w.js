import{j as e}from"./vendor-react-core-Doz9nIC6.js";import{J as n}from"./JavaFileLoader-BfBG3xz_.js";import{F as a}from"./FAQTemplate-CkSqDH4B.js";import{P as t}from"./PlainTextPrint-C08xhKA4.js";import{T as o}from"./TeacherSukantaHui-CyIG3xbg.js";import"./JavaCodeBlock-BwsLxS3r.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-CIaKtAt4.js";const r=`/**\r
 * Java Core Tutorial - Module 002_010: The Object Class: equals(), hashCode(), toString() & clone()\r
 * Topic 13: Shallow Copy vs Deep Copy Mechanics in Memory\r
 * Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
 */\r
\r
package com.coderaccotax.javatutorial.objectclass;\r
\r
public class ShallowVsDeepCopyMemoryDemo {\r
\r
    // Nested Mutable Reference\r
    public static class LabLocation {\r
        public String city;\r
        public LabLocation(String city) { this.city = city; }\r
    }\r
\r
    // 1. SHALLOW COPY: Default super.clone() copies primitive values and REFERENCE addresses only!\r
    public static class ShallowTrainee implements Cloneable {\r
        public String name;\r
        public LabLocation location; // Shared reference address!\r
\r
        public ShallowTrainee(String name, LabLocation loc) {\r
            this.name = name;\r
            this.location = loc;\r
        }\r
\r
        @Override\r
        public ShallowTrainee clone() {\r
            try {\r
                return (ShallowTrainee) super.clone(); // Shallow bitwise copy\r
            } catch (CloneNotSupportedException e) {\r
                throw new AssertionError();\r
            }\r
        }\r
    }\r
\r
    public static void main(String[] args) {\r
        System.out.println("==========================================================================");\r
        System.out.println(" TOPIC 13: SHALLOW COPY VS DEEP COPY IN MEMORY - BARRACKPORE");\r
        System.out.println("==========================================================================\\n");\r
\r
        LabLocation sharedLoc = new LabLocation("Barrackpore Hub");\r
        ShallowTrainee original = new ShallowTrainee("Swadeep Paul", sharedLoc);\r
        ShallowTrainee cloned = original.clone();\r
\r
        System.out.println(">>> Initial State:");\r
        System.out.println("  Original City: " + original.location.city);\r
        System.out.println("  Cloned City  : " + cloned.location.city);\r
\r
        // Mutating nested location via the CLONED instance:\r
        System.out.println("\\n>>> Mutating cloned.location.city = 'Naihati Hub'...");\r
        cloned.location.city = "Naihati Hub";\r
\r
        System.out.println("\\n>>> Observe the Shallow Copy Side-Effect:");\r
        System.out.println("  Original City: " + original.location.city + " (ACCIDENTALLY MUTATED!)");\r
        System.out.println("  Cloned City  : " + cloned.location.city);\r
        System.out.println("  original.location == cloned.location: " + (original.location == cloned.location) + " (Same Heap Address!)");\r
\r
        System.out.println("\\n==========================================================================");\r
    }\r
}`,i=`================================================================================\r
JAVA CORE TUTORIAL - QUICK REVISION GUIDE\r
Module 002_010: The Object Class & Core Contracts\r
Topic 13: Shallow Copy vs Deep Copy\r
Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
================================================================================\r
\r
1. MEMORY COMPARISON:\r
   - Shallow Copy: Primitive values copied; nested object pointers SHARED.\r
   - Deep Copy   : Primitive values copied; nested objects CLONED recursively.\r
   - Default 'super.clone()' is ALWAYS a shallow copy.\r
\r
================================================================================\r
Classroom Practice: Barrackpore Academy | Mentor: Sukanta Hui\r
================================================================================`,l=[{question:"What is the difference between a Shallow Copy and a Deep Copy in Java?",shortAnswer:"A Shallow Copy duplicates the top-level object and copies reference addresses (meaning nested mutable objects are shared between original and clone). A Deep Copy recursively creates new duplicate instances for all nested reference objects on the Heap.",explanation:"Default Object.clone() performs a shallow copy only.",hint:"Shallow copy shares nested object references; Deep copy creates fresh copies of nested objects.",level:"Intermediate",codeExample:`// Shallow: clone.loc == orig.loc (true)
// Deep: clone.loc == orig.loc (false)`}];function b(){return e.jsxs("div",{className:"space-y-12 px-4 md:px-8 py-8 text-slate-200 bg-slate-900 min-h-screen",children:[e.jsx("style",{children:`
          @keyframes fadeIn {
            from { opacity: 0; transform: translateY(8px); }
            to { opacity: 1; transform: translateY(0); }
          }
          .animate-fade-in { animation: fadeIn 0.5s ease-out forwards; }
        `}),e.jsxs("header",{className:"space-y-4 border-b border-slate-800 pb-6 animate-fade-in",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"px-3 py-1 bg-sky-500/10 text-sky-400 border border-sky-500/20 text-xs font-semibold rounded-full uppercase tracking-wider",children:"Module 002_010 · Topic 13"}),e.jsx("span",{className:"px-3 py-1 bg-rose-500/10 text-rose-400 border border-rose-500/20 text-xs font-semibold rounded-full",children:"Memory Mutation"})]}),e.jsx("h1",{className:"text-3xl md:text-4xl font-extrabold text-white tracking-tight",children:"Shallow Copy vs Deep Copy Mechanics in Memory"}),e.jsx("p",{className:"text-base md:text-lg text-slate-400 leading-relaxed max-w-4xl",children:"Trace how shallow copies share heap references, discover the accidental mutation side-effects on nested objects, and contrast with independent deep copying."})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsxs("h2",{className:"text-2xl font-bold text-emerald-400 flex items-center gap-2",children:[e.jsx("span",{children:"💻"})," Hands-On Java Demo Code"]}),e.jsx(n,{fileModule:r,title:"ShallowVsDeepCopyMemoryDemo.java",highlightLines:[12,17,24,38,43,44]})]}),e.jsx("section",{className:"space-y-4",children:e.jsx(a,{title:"Shallow vs Deep Copy FAQs",questions:l})}),e.jsx("section",{className:"space-y-4",children:e.jsx(t,{content:i,title:"Module 002_010 Topic 13: Shallow vs Deep Copy",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Printable Note",downloadFileName:"002_010_topic13_shallow_deep_copy_note.txt"})}),e.jsx(o,{note:"If Swadeep and Tuhina share the same house address object in a shallow copy, changing Tuhina's city will change Swadeep's city too! That is why shallow copy can be dangerous for mutable fields. — Sukanta Hui"})]})}export{b as default};
