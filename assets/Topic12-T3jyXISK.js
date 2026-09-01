import{j as e}from"./vendor-react-core-Doz9nIC6.js";import{J as t}from"./JavaFileLoader-BfBG3xz_.js";import{F as n}from"./FAQTemplate-BHhlgA96.js";import{P as a}from"./PlainTextPrint-C08xhKA4.js";import{T as s}from"./TeacherSukantaHui-CEPuAfsb.js";import"./JavaCodeBlock-BwsLxS3r.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-DGCamHnX.js";const i=`/**\r
 * Java Core Tutorial - Module 002_002: Constructors, Chaining & Object Lifecycle\r
 * Topic 12: Static Initialization Blocks (SIB) vs Instance Initialization Blocks (IIB)\r
 * Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
 */\r
\r
package com.coderaccotax.javatutorial.constructors;\r
\r
public class SIBvsIIBExecutionHierarchyDemo {\r
\r
    public static class DatabaseConnector {\r
\r
        // Static variable\r
        private static String databaseUrl;\r
\r
        // STATIC INITIALIZATION BLOCK (SIB):\r
        // Executes ONCE when class is loaded into Metaspace by ClassLoader\r
        static {\r
            databaseUrl = "jdbc:mysql://localhost:3306/coderaccotax_barrackpore";\r
            System.out.println("  [SIB] Static Block Executed: Database Driver Loaded & URL Configured (ONCE)");\r
        }\r
\r
        // Instance variable\r
        private String connectionId;\r
\r
        // INSTANCE INITIALIZATION BLOCK (IIB):\r
        // Executes ON EVERY 'new' object instantiation\r
        {\r
            this.connectionId = "CONN-" + System.nanoTime() % 10000;\r
            System.out.println("  [IIB] Instance Block Executed: Allocated Connection ID: " + this.connectionId);\r
        }\r
\r
        // Constructor\r
        public DatabaseConnector(String clientName) {\r
            System.out.printf("  [CONSTRUCTOR] Client '%s' bound to connection %s\\n", clientName, this.connectionId);\r
        }\r
    }\r
\r
    public static void main(String[] args) {\r
        System.out.println("==========================================================================");\r
        System.out.println(" TOPIC 12: SIB VS IIB EXECUTION HIERARCHY - BARRACKPORE");\r
        System.out.println("==========================================================================\\n");\r
\r
        System.out.println(">>> 1. First Object Creation (Triggers Class Loading -> SIB, then IIB, then Constructor):");\r
        DatabaseConnector c1 = new DatabaseConnector("Swadeep Paul");\r
\r
        System.out.println("\\n>>> 2. Second Object Creation (SIB does NOT re-run; only IIB + Constructor run):");\r
        DatabaseConnector c2 = new DatabaseConnector("Tuhina Das");\r
\r
        System.out.println("\\n>>> 3. Third Object Creation (Only IIB + Constructor run):");\r
        DatabaseConnector c3 = new DatabaseConnector("Abhronila Das");\r
\r
        System.out.println("\\n==========================================================================");\r
    }\r
}`,r=`================================================================================\r
JAVA CORE TUTORIAL - QUICK REVISION GUIDE\r
Module 002_002: Constructors, Constructor Chaining & Object Lifecycle\r
Topic 12: Static Initialization Blocks (SIB) vs Instance Initialization Blocks (IIB)\r
Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
================================================================================\r
\r
1. COMPARISON MATRIX:\r
   -----------------------------------------------------------------------------\r
   FEATURE             SIB (Static Block)              IIB (Instance Block)\r
   -----------------------------------------------------------------------------\r
   Syntax              static { ... }                  { ... }\r
   Execution Trigger   Class loading (once per JVM)    Every 'new' instantiation\r
   Context             Class / Metaspace               Heap instance ('this')\r
   Access              Static members ONLY             Both Static & Instance\r
   Parent-Child Order  Parent SIB → Child SIB         Parent IIB → Child IIB\r
   -----------------------------------------------------------------------------\r
\r
2. COMPLETE ORDER OF EXECUTION:\r
   1. Parent SIB\r
   2. Child SIB\r
   3. Parent IIB\r
   4. Parent Constructor Body\r
   5. Child IIB\r
   6. Child Constructor Body\r
\r
================================================================================\r
Classroom Practice: Barrackpore Academy | Mentor: Sukanta Hui\r
================================================================================`,o=[{question:"What is the key architectural difference between a Static Initialization Block (SIB) and an Instance Initialization Block (IIB)?",shortAnswer:"A SIB executes ONCE when the class is loaded into Metaspace by the JVM ClassLoader, while an IIB executes ON EVERY object instantiation ('new').",explanation:"SIBs configure class-level state (drivers, configuration files, static constants). IIBs configure per-instance state before constructors run.",hint:"Once at class loading (SIB) vs on every new instantiation (IIB).",level:"Beginner",codeExample:`static { /* SIB: runs once */ }
{ /* IIB: runs on every new */ }`},{question:"In what order do SIBs and IIBs execute in a parent-child inheritance hierarchy?",shortAnswer:"1. Parent SIB → 2. Child SIB → 3. Parent IIB → 4. Parent Constructor → 5. Child IIB → 6. Child Constructor.",explanation:"Class loading must complete for the entire hierarchy before any instance allocation begins.",hint:"Parent SIB → Child SIB → Parent IIB → Parent Const → Child IIB → Child Const.",level:"Intermediate",codeExample:"// Full JVM hierarchy order"},{question:"Can an SIB access instance variables or the 'this' keyword?",shortAnswer:"No! SIBs execute at class level when zero objects exist in the Heap. Accessing 'this' or instance fields causes a compile error.",explanation:"Static context has no 'this' receiver pointer.",hint:"No instance context in SIB; 'this' is inaccessible.",level:"Beginner",codeExample:"// Compile Error: static { this.x = 10; }"},{question:"Can an IIB access static variables?",shortAnswer:"Yes! IIBs have full access to both static (class-level) and instance variables.",explanation:"Instance contexts can freely read and mutate static state.",hint:"IIBs can access both static and instance variables.",level:"Beginner",codeExample:"{ staticCounter++; this.instanceId = staticCounter; }"},{question:"What is the classroom analogy by Sukanta Hui for SIB vs IIB?",shortAnswer:"SIB is turning on the main electrical transformer and building the Barrackpore campus (done ONCE at inauguration); IIB is turning on a trainee's computer each time Swadeep or Tuhina sits at a desk!",explanation:"Campus building = SIB; individual student workstation = IIB.",hint:"Campus building (SIB) vs student workstation power-on (IIB).",level:"Beginner",codeExample:"// SIB = Campus Setup; IIB = Student Seat Init"}];function m(){return e.jsxs("div",{className:"space-y-12 px-4 md:px-8 py-8 text-slate-200 bg-slate-900 min-h-screen",children:[e.jsx("style",{children:`
          @keyframes fadeIn {
            from { opacity: 0; transform: translateY(8px); }
            to { opacity: 1; transform: translateY(0); }
          }
          .animate-fade-in { animation: fadeIn 0.5s ease-out forwards; }
        `}),e.jsxs("header",{className:"space-y-4 border-b border-slate-800 pb-6 animate-fade-in",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"px-3 py-1 bg-sky-500/10 text-sky-400 border border-sky-500/20 text-xs font-semibold rounded-full uppercase tracking-wider",children:"Module 002_002 · Topic 12"}),e.jsx("span",{className:"px-3 py-1 bg-indigo-500/10 text-indigo-400 border border-indigo-500/20 text-xs font-semibold rounded-full",children:"Initialization Architecture"})]}),e.jsx("h1",{className:"text-xl sm:text-2xl md:text-3xl font-bold text-white tracking-tight",children:"Static Initialization Blocks (SIB) vs Instance Initialization Blocks (IIB)"}),e.jsx("p",{className:"text-base md:text-lg text-slate-400 leading-relaxed max-w-4xl",children:"Demystify class-level vs instance-level lifecycle execution. Understand when the ClassLoader fires SIBs once into Metaspace and how IIBs execute on every Heap object birth."})]}),e.jsxs("section",{className:"space-y-5 bg-slate-800/40 p-6 md:p-8 rounded-2xl border border-slate-800 shadow-lg",children:[e.jsxs("h2",{className:"text-2xl font-bold text-sky-400 flex items-center gap-2",children:[e.jsx("span",{children:"🏛️"})," The Class vs Instance Genesis Divide"]}),e.jsxs("div",{className:"space-y-4 text-slate-300 leading-relaxed text-sm md:text-base",children:[e.jsxs("p",{children:["Java divides initialization into two distinct lifecycle planes: ",e.jsx("strong",{children:"Static Blocks (SIB)"})," run once per class loading, while ",e.jsx("strong",{children:"Instance Blocks (IIB)"})," run once per object instantiation."]}),e.jsxs("div",{className:"p-4 bg-slate-900/60 rounded-xl border-l-4 border-indigo-500 text-slate-300 space-y-2",children:[e.jsx("p",{className:"font-medium text-indigo-300",children:"Barrackpore Hub Campus vs Workstation Analogy:"}),e.jsxs("p",{className:"text-sm leading-relaxed",children:["Setting up the central database and building the Barrackpore center happens ",e.jsx("strong",{children:"once"})," (SIB). Powering on individual trainee terminals for Swadeep, Tuhina, and Abhronila happens ",e.jsx("strong",{children:"on every session"})," (IIB)!"]})]})]})]}),e.jsxs("section",{className:"space-y-5 bg-slate-800/40 p-6 md:p-8 rounded-2xl border border-slate-800 shadow-lg",children:[e.jsxs("h2",{className:"text-2xl font-bold text-indigo-400 flex items-center gap-2",children:[e.jsx("span",{children:"⚙️"})," Complete JVM Hierarchy Order (Parent to Child)"]}),e.jsx("div",{className:"w-full overflow-hidden rounded-xl border border-slate-700 bg-slate-950 p-4",children:e.jsxs("svg",{viewBox:"0 0 920 220",className:"w-full h-auto",children:[e.jsx("rect",{x:"30",y:"30",width:"260",height:"160",rx:"8",fill:"#0f172a",stroke:"#818cf8",strokeWidth:"2"}),e.jsx("text",{x:"160",y:"55",fill:"#a5b4fc",fontSize:"11",fontWeight:"bold",textAnchor:"middle",children:"1. STATIC LOADING (ONCE)"}),e.jsx("rect",{x:"45",y:"75",width:"230",height:"45",rx:"4",fill:"#1e1b4b"}),e.jsx("text",{x:"55",y:"100",fill:"#c7d2fe",fontSize:"9",fontFamily:"monospace",children:"Parent SIB → Child SIB"}),e.jsx("text",{x:"160",y:"150",fill:"#94a3b8",fontSize:"8",textAnchor:"middle",children:"Class Loaded in Metaspace"}),e.jsx("path",{d:"M 300 110 L 350 110",stroke:"#818cf8",strokeWidth:"2"}),e.jsx("rect",{x:"360",y:"30",width:"260",height:"160",rx:"8",fill:"#0f172a",stroke:"#0284c7",strokeWidth:"2"}),e.jsx("text",{x:"490",y:"55",fill:"#38bdf8",fontSize:"11",fontWeight:"bold",textAnchor:"middle",children:"2. PARENT INSTANCE"}),e.jsx("rect",{x:"375",y:"75",width:"230",height:"45",rx:"4",fill:"#0c4a6e"}),e.jsx("text",{x:"385",y:"100",fill:"#bae6fd",fontSize:"9",fontFamily:"monospace",children:"Parent IIB → Parent Const"}),e.jsx("text",{x:"490",y:"150",fill:"#94a3b8",fontSize:"8",textAnchor:"middle",children:"Base Object Constructed"}),e.jsx("path",{d:"M 630 110 L 680 110",stroke:"#818cf8",strokeWidth:"2"}),e.jsx("rect",{x:"690",y:"30",width:"210",height:"160",rx:"8",fill:"#0f172a",stroke:"#10b981",strokeWidth:"2"}),e.jsx("text",{x:"795",y:"55",fill:"#34d399",fontSize:"11",fontWeight:"bold",textAnchor:"middle",children:"3. CHILD INSTANCE"}),e.jsx("rect",{x:"700",y:"75",width:"190",height:"45",rx:"4",fill:"#064e3b"}),e.jsx("text",{x:"710",y:"100",fill:"#a7f3d0",fontSize:"9",fontFamily:"monospace",children:"Child IIB → Child Const"}),e.jsx("text",{x:"795",y:"150",fill:"#94a3b8",fontSize:"8",textAnchor:"middle",children:"Child Object Ready"})]})})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsxs("h2",{className:"text-2xl font-bold text-emerald-400 flex items-center gap-2",children:[e.jsx("span",{children:"💻"})," Hands-On Java Demo Code"]}),e.jsx(t,{fileModule:i,title:"SIBvsIIBExecutionHierarchyDemo.java",highlightLines:[16,26,33,45,48,51]})]}),e.jsx("section",{className:"space-y-4",children:e.jsx(n,{title:"SIB vs IIB FAQs (Technical Q&As)",questions:o})}),e.jsx("section",{className:"space-y-4",children:e.jsx(a,{content:r,title:"Module 002_002 Topic 12: SIB vs IIB",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Printable Note",downloadFileName:"002_002_topic12_sib_vs_iib_note.txt"})}),e.jsx(s,{note:"Remember: SIB runs once at class loading, IIB runs on every new object creation. If it's class configuration, use static; if it's per-trainee preparation, use instance! — Sukanta Hui"})]})}export{m as default};
