import{j as n}from"./vendor-react-core-Doz9nIC6.js";import{J as e}from"./JavaFileLoader-BfBG3xz_.js";import{F as t}from"./FAQTemplate-BHhlgA96.js";import{P as o}from"./PlainTextPrint-C08xhKA4.js";import{T as r}from"./TeacherSukantaHui-DerPxfxp.js";import"./JavaCodeBlock-BwsLxS3r.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-CH1iX9C8.js";const i=`/**\r
 * Java Core Tutorial - Module 002_005: Inheritance, IS-A vs HAS-A, Composition & Aggregation\r
 * Topic 11: Composition (Strong Association): Ownership and Shared Lifecycle\r
 * Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
 */\r
\r
package com.coderaccotax.javatutorial.inheritance;\r
\r
public class CompositionStrongAssociationDemo {\r
\r
    // Tightly Bound Component: MicroprocessorEngine\r
    public static class MicroprocessorEngine {\r
        private String cpuModel;\r
\r
        public MicroprocessorEngine(String cpuModel) {\r
            this.cpuModel = cpuModel;\r
            System.out.println("  [ENGINE BORN] Microprocessor instantiated: " + cpuModel);\r
        }\r
\r
        public void process() {\r
            System.out.println("  [ENGINE PROCESSING] " + cpuModel + " executing instructions...");\r
        }\r
    }\r
\r
    // COMPOSITION: LabComputer OWNS MicroprocessorEngine\r
    // Shared Lifecycle: LabComputer creates its own engine inside its constructor;\r
    // If LabComputer is destroyed, its internal Engine is destroyed with it!\r
    public static class LabComputer {\r
        private String stationId;\r
        private MicroprocessorEngine internalEngine; // Owned exclusively\r
\r
        public LabComputer(String stationId, String cpuModel) {\r
            this.stationId = stationId;\r
            // STRONG OWNERSHIP: Component is born with parent!\r
            this.internalEngine = new MicroprocessorEngine(cpuModel);\r
        }\r
\r
        public void operate() {\r
            System.out.println("  [WORKSTATION OPERATING] " + stationId);\r
            this.internalEngine.process();\r
        }\r
    }\r
\r
    public static void main(String[] args) {\r
        System.out.println("==========================================================================");\r
        System.out.println(" TOPIC 11: COMPOSITION (STRONG ASSOCIATION) - BARRACKPORE");\r
        System.out.println("==========================================================================\\n");\r
\r
        System.out.println(">>> 1. Creating LabComputer (Instantiates internal Engine automatically):");\r
        LabComputer pc = new LabComputer("BKP-LAB-NODE-01", "Intel Core i9-14900K");\r
        pc.operate();\r
\r
        System.out.println("\\n>>> 2. Architectural Rule of Composition:");\r
        System.out.println("  - Strong 'Part-Whole' ownership relationship.");\r
        System.out.println("  - The part CANNOT exist meaningfully without its whole container.");\r
\r
        System.out.println("\\n==========================================================================");\r
    }\r
}`,s=`================================================================================\r
JAVA CORE TUTORIAL - QUICK REVISION GUIDE\r
Module 002_005: Inheritance, IS-A vs HAS-A, Composition & Aggregation\r
Topic 11: Composition (Strong Association)\r
Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
================================================================================\r
\r
1. COMPOSITION RULES:\r
   - Strong Part-Whole relationship.\r
   - Contained object is instantiated inside the container's constructor.\r
   - Shared lifecycle: Container destruction destroys the contained parts.\r
\r
================================================================================\r
Classroom Practice: Barrackpore Academy | Mentor: Sukanta Hui\r
================================================================================`,a=[{question:"What is Composition in Java OOP and how does it differ from Aggregation?",shortAnswer:"Composition is a strong HAS-A relationship where the contained object cannot exist independently of the owner; the owner strictly manages and shares its lifecycle (e.g. Car and Engine, Computer and CPU).",explanation:"In Composition, the component is created and destroyed with the container.",hint:"Strong association with shared lifecycle ownership.",level:"Intermediate",codeExample:"public Car() { this.engine = new Engine(); }"}];function x(){return n.jsxs("div",{className:"space-y-12 px-4 md:px-8 py-8 text-slate-200 bg-slate-900 min-h-screen",children:[n.jsx("style",{children:`
          @keyframes fadeIn {
            from { opacity: 0; transform: translateY(8px); }
            to { opacity: 1; transform: translateY(0); }
          }
          .animate-fade-in { animation: fadeIn 0.5s ease-out forwards; }
        `}),n.jsxs("header",{className:"space-y-4 border-b border-slate-800 pb-6 animate-fade-in",children:[n.jsxs("div",{className:"flex items-center gap-3",children:[n.jsx("span",{className:"px-3 py-1 bg-sky-500/10 text-sky-400 border border-sky-500/20 text-xs font-semibold rounded-full uppercase tracking-wider",children:"Module 002_005 · Topic 11"}),n.jsx("span",{className:"px-3 py-1 bg-indigo-500/10 text-indigo-400 border border-indigo-500/20 text-xs font-semibold rounded-full",children:"Strong Association"})]}),n.jsx("h1",{className:"text-xl sm:text-2xl md:text-3xl font-bold text-white tracking-tight",children:"Composition (Strong Association): Ownership & Shared Lifecycle"}),n.jsx("p",{className:"text-base md:text-lg text-slate-400 leading-relaxed max-w-4xl",children:"Master strong part-whole modeling: life-and-death coupling, internal component lifecycle management, and enterprise component architecture."})]}),n.jsxs("section",{className:"space-y-4",children:[n.jsxs("h2",{className:"text-2xl font-bold text-emerald-400 flex items-center gap-2",children:[n.jsx("span",{children:"💻"})," Hands-On Java Demo Code"]}),n.jsx(e,{fileModule:i,title:"CompositionStrongAssociationDemo.java",highlightLines:[12,25,29,39]})]}),n.jsx("section",{className:"space-y-4",children:n.jsx(t,{title:"Composition FAQs",questions:a})}),n.jsx("section",{className:"space-y-4",children:n.jsx(o,{content:s,title:"Module 002_005 Topic 11: Composition Strong Association",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Printable Note",downloadFileName:"002_005_topic11_composition_note.txt"})}),n.jsx(r,{note:"If a Computer is destroyed, its motherboard and CPU are destroyed with it. That is Composition: strong ownership and shared lifecycle! — Sukanta Hui"})]})}export{x as default};
