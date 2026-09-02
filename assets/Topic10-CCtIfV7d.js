import{j as e}from"./vendor-react-core-Doz9nIC6.js";import{J as t}from"./JavaFileLoader-BfBG3xz_.js";import{F as a}from"./FAQTemplate-BHhlgA96.js";import{P as r}from"./PlainTextPrint-C08xhKA4.js";import{T as s}from"./TeacherSukantaHui-RpFLNJ5A.js";import"./JavaCodeBlock-BwsLxS3r.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-wprqVFW_.js";const n=`/**\r
 * Java Core Tutorial - Module 002_007: Abstract Classes & Partial Abstraction\r
 * Topic 10: What Happens If a Child Does NOT Implement All Abstract Methods?\r
 * Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
 */\r
\r
package com.coderaccotax.javatutorial.abstraction;\r
\r
public class PartialSubclassingAbstractChainDemo {\r
\r
    // Tier 1: Root Abstract Class (2 abstract methods)\r
    public abstract static class SoftwareProjectBlueprint {\r
        public abstract void designArchitecture();\r
        public abstract void implementBackend();\r
    }\r
\r
    // Tier 2: Intermediate Abstract Class (Implements only 1 of 2 abstract methods)\r
    // MUST BE DECLARED ABSTRACT!\r
    public abstract static class ArchitecturalDraft extends SoftwareProjectBlueprint {\r
        @Override\r
        public void designArchitecture() {\r
            System.out.println("  [TIER 2] Architecture designed: Spring Boot Microservices + MySQL Cluster.");\r
        }\r
\r
        // 'implementBackend()' is left unimplemented here, so ArchitecturalDraft remains abstract!\r
    }\r
\r
    // Tier 3: Final Concrete Subclass (Implements the remaining abstract method)\r
    public static class CompletedProject extends ArchitecturalDraft {\r
        @Override\r
        public void implementBackend() {\r
            System.out.println("  [TIER 3] Backend fully implemented by Swadeep & Tuhina in Barrackpore!");\r
        }\r
    }\r
\r
    public static void main(String[] args) {\r
        System.out.println("==========================================================================");\r
        System.out.println(" TOPIC 10: PARTIAL SUBCLASSING (ABSTRACT CHAIN) - BARRACKPORE");\r
        System.out.println("==========================================================================\\n");\r
\r
        SoftwareProjectBlueprint project = new CompletedProject();\r
        project.designArchitecture();\r
        project.implementBackend();\r
\r
        System.out.println("\\n==========================================================================");\r
    }\r
}`,i=`================================================================================\r
JAVA CORE TUTORIAL - QUICK REVISION GUIDE\r
Module 002_007: Abstract Classes & Partial Abstraction\r
Topic 10: Partial Subclassing & Abstract Chains\r
Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
================================================================================\r
\r
1. PARTIAL SUBCLASSING RULES:\r
   - If child implements 1 out of 2 abstract methods, child MUST be marked 'abstract'.\r
   - Downstream grandchild class must implement all remaining abstract methods to become concrete.\r
\r
================================================================================\r
Classroom Practice: Barrackpore Academy | Mentor: Sukanta Hui\r
================================================================================`,l=[{question:"What must happen if a subclass does NOT implement all inherited abstract methods from its parent?",shortAnswer:"The subclass MUST itself be declared 'abstract'. It passes down the responsibility of implementing the remaining abstract methods to its own concrete descendants.",explanation:"This creates multi-tiered abstract hierarchies where each level implements part of the blueprint.",hint:"Subclass must be marked abstract if it leaves any abstract method unimplemented.",level:"Intermediate",codeExample:"abstract class Intermediate extends Base { /* implements some methods */ }"}];function x(){return e.jsxs("div",{className:"space-y-12 px-4 md:px-8 py-8 text-slate-200 bg-slate-900 min-h-screen",children:[e.jsx("style",{children:`
          @keyframes fadeIn {
            from { opacity: 0; transform: translateY(8px); }
            to { opacity: 1; transform: translateY(0); }
          }
          .animate-fade-in { animation: fadeIn 0.5s ease-out forwards; }
        `}),e.jsxs("header",{className:"space-y-4 border-b border-slate-800 pb-6 animate-fade-in",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"px-3 py-1 bg-sky-500/10 text-sky-400 border border-sky-500/20 text-xs font-semibold rounded-full uppercase tracking-wider",children:"Module 002_007 · Topic 10"}),e.jsx("span",{className:"px-3 py-1 bg-purple-500/10 text-purple-400 border border-purple-500/20 text-xs font-semibold rounded-full",children:"Hierarchy Chaining"})]}),e.jsx("h1",{className:"text-xl sm:text-2xl md:text-3xl font-bold text-white tracking-tight",children:"What Happens If a Child Class Does NOT Implement All Abstract Methods?"}),e.jsx("p",{className:"text-base md:text-lg text-slate-400 leading-relaxed max-w-4xl",children:"Learn how multi-tiered abstract hierarchies divide responsibilities across generations: partial implementation in intermediate abstract classes and final completion in concrete leaves."})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsxs("h2",{className:"text-2xl font-bold text-emerald-400 flex items-center gap-2",children:[e.jsx("span",{children:"💻"})," Hands-On Java Demo Code"]}),e.jsx(t,{fileModule:n,title:"PartialSubclassingAbstractChainDemo.java",highlightLines:[11,18,19,28,38]})]}),e.jsx("section",{className:"space-y-4",children:e.jsx(a,{title:"Partial Subclassing FAQs",questions:l})}),e.jsx("section",{className:"space-y-4",children:e.jsx(r,{content:i,title:"Module 002_007 Topic 10: Partial Subclassing Chains",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Printable Note",downloadFileName:"002_007_topic10_partial_subclassing_note.txt"})}),e.jsx(s,{note:"If the architect only writes half the solution, the class remains abstract. The next engineer in line finishes the remaining methods to make the class concrete! — Sukanta Hui"})]})}export{x as default};
