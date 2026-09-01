import{j as e}from"./vendor-react-core-Doz9nIC6.js";import{J as a}from"./JavaFileLoader-BfBG3xz_.js";import{F as n}from"./FAQTemplate-BHhlgA96.js";import{P as t}from"./PlainTextPrint-C08xhKA4.js";import{T as r}from"./TeacherSukantaHui-BaJcBHAy.js";import"./JavaCodeBlock-BwsLxS3r.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-8ao-0upJ.js";const s=`/**\r
 * Java Core Tutorial - Module 002_004: Static Variables, Methods, Blocks & Singleton\r
 * Topic 2: Memory Comparison: Static Variables vs Instance Variables\r
 * Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
 */\r
\r
package com.coderaccotax.javatutorial.statics;\r
\r
public class StaticVsInstanceMemoryComparisonDemo {\r
\r
    public static class TraineeNode {\r
        // 1. Static Variable: 1 copy in Metaspace / Class mirror\r
        public static String hub = "Barrackpore";\r
\r
        // 2. Instance Variables: Copied on Heap for EVERY 'new' object\r
        private String name;\r
        private double fee;\r
\r
        public TraineeNode(String name, double fee) {\r
            this.name = name;\r
            this.fee = fee;\r
        }\r
\r
        public void print() {\r
            System.out.printf("  [0x%08X] Name: %-15s | Fee: ₹%.2f | Shared Hub: %s\\n",\r
                    System.identityHashCode(this), name, fee, hub);\r
        }\r
    }\r
\r
    public static void main(String[] args) {\r
        System.out.println("==========================================================================");\r
        System.out.println(" TOPIC 2: STATIC VS INSTANCE MEMORY COMPARISON - BARRACKPORE");\r
        System.out.println("==========================================================================\\n");\r
\r
        TraineeNode s1 = new TraineeNode("Swadeep Paul", 5000.0);\r
        TraineeNode s2 = new TraineeNode("Tuhina Das", 6000.0);\r
\r
        s1.print();\r
        s2.print();\r
\r
        System.out.println("\\n==========================================================================");\r
    }\r
}`,i=`================================================================================\r
JAVA CORE TUTORIAL - QUICK REVISION GUIDE\r
Module 002_004: Static Variables, Methods, Blocks & The Singleton Pattern\r
Topic 2: Static vs Instance Variables Memory Comparison\r
Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
================================================================================\r
\r
1. MEMORY COMPARISON TABLE:\r
   -----------------------------------------------------------------------------\r
   FEATURE            STATIC VARIABLE                  INSTANCE VARIABLE\r
   -----------------------------------------------------------------------------\r
   Location           Metaspace / Class mirror         Heap (Eden / Tenured space)\r
   Copies             Exactly ONE per ClassLoader      One per object instance\r
   Created            During Class Loading             During 'new' instantiation\r
   Destroyed          When Class is unloaded           When Object is GC'd\r
   Access             ClassName.variable               objectRef.variable\r
   -----------------------------------------------------------------------------\r
\r
================================================================================\r
Classroom Practice: Barrackpore Academy | Mentor: Sukanta Hui\r
================================================================================`,o=[{question:"What is the key difference between static and instance variables regarding object lifecycle?",shortAnswer:"Static variables are created once when the class is loaded and exist until the JVM terminates. Instance variables are created when 'new' is called and destroyed when garbage collected.",explanation:"Static lifecycle is bound to the class; instance lifecycle is bound to individual Heap allocations.",hint:"Class loading lifecycle vs object garbage collection lifecycle.",level:"Beginner",codeExample:`// Static: Class load to JVM shutdown
// Instance: new to GC`}];function h(){return e.jsxs("div",{className:"space-y-12 px-4 md:px-8 py-8 text-slate-200 bg-slate-900 min-h-screen",children:[e.jsx("style",{children:`
          @keyframes fadeIn {
            from { opacity: 0; transform: translateY(8px); }
            to { opacity: 1; transform: translateY(0); }
          }
          .animate-fade-in { animation: fadeIn 0.5s ease-out forwards; }
        `}),e.jsxs("header",{className:"space-y-4 border-b border-slate-800 pb-6 animate-fade-in",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"px-3 py-1 bg-sky-500/10 text-sky-400 border border-sky-500/20 text-xs font-semibold rounded-full uppercase tracking-wider",children:"Module 002_004 · Topic 2"}),e.jsx("span",{className:"px-3 py-1 bg-indigo-500/10 text-indigo-400 border border-indigo-500/20 text-xs font-semibold rounded-full",children:"Memory Architecture"})]}),e.jsx("h1",{className:"text-xl sm:text-2xl md:text-3xl font-bold text-white tracking-tight",children:"Memory Comparison: Static Variables vs Instance Variables"}),e.jsx("p",{className:"text-base md:text-lg text-slate-400 leading-relaxed max-w-4xl",children:"Deep architectural comparison between Metaspace class storage and Heap instance memory layouts. Trace memory footprint and Garbage Collection lifecycles."})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsxs("h2",{className:"text-2xl font-bold text-emerald-400 flex items-center gap-2",children:[e.jsx("span",{children:"💻"})," Hands-On Java Demo Code"]}),e.jsx(a,{fileModule:s,title:"StaticVsInstanceMemoryComparisonDemo.java",highlightLines:[12,15,16,27,28]})]}),e.jsx("section",{className:"space-y-4",children:e.jsx(n,{title:"Memory Comparison FAQs",questions:o})}),e.jsx("section",{className:"space-y-4",children:e.jsx(t,{content:i,title:"Module 002_004 Topic 2: Memory Comparison",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Printable Note",downloadFileName:"002_004_topic2_memory_comparison_note.txt"})}),e.jsx(r,{note:"1000 Trainee objects create 1000 copies of name and fee on the Heap, but only 1 single copy of hub in Metaspace! Save memory by using static for shared data. — Sukanta Hui"})]})}export{h as default};
