import{j as e}from"./vendor-react-core-Doz9nIC6.js";import{J as n}from"./JavaFileLoader-BfBG3xz_.js";import{F as t}from"./FAQTemplate-BHhlgA96.js";import{P as a}from"./PlainTextPrint-C08xhKA4.js";import{T as r}from"./TeacherSukantaHui-DerPxfxp.js";import"./JavaCodeBlock-BwsLxS3r.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-CH1iX9C8.js";const s=`/**\r
 * Java Core Tutorial - Module 002_006: Polymorphism, Method Overriding & Dynamic Method Dispatch\r
 * Topic 2: Runtime Polymorphism (Dynamic Binding / Late Binding): Method Overriding\r
 * Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
 */\r
\r
package com.coderaccotax.javatutorial.polymorphism;\r
\r
public class RuntimeOverridingDemo {\r
\r
    // Superclass\r
    public static class AcademicExam {\r
        public void conductAssessment() {\r
            System.out.println("  [BASE EXAM] Conducting standard pen-and-paper assessment.");\r
        }\r
    }\r
\r
    // Subclass 1: Online Exam\r
    public static class OnlineCodeLabExam extends AcademicExam {\r
        @Override\r
        public void conductAssessment() {\r
            System.out.println("  [CODE LAB EXAM] Launching browser sandbox with automated JUnit testing!");\r
        }\r
    }\r
\r
    // Subclass 2: Viva Interview\r
    public static class VivaVoceExam extends AcademicExam {\r
        @Override\r
        public void conductAssessment() {\r
            System.out.println("  [VIVA VOCE] Conducting 1-on-1 architecture interview with Sukanta Hui!");\r
        }\r
    }\r
\r
    public static void main(String[] args) {\r
        System.out.println("==========================================================================");\r
        System.out.println(" TOPIC 2: RUNTIME POLYMORPHISM (OVERRIDING) - BARRACKPORE");\r
        System.out.println("==========================================================================\\n");\r
\r
        // Superclass reference holding Subclass 1:\r
        AcademicExam exam1 = new OnlineCodeLabExam();\r
        // Superclass reference holding Subclass 2:\r
        AcademicExam exam2 = new VivaVoceExam();\r
\r
        System.out.println(">>> 1. Invoking conductAssessment() on exam1 (Resolved at Runtime):");\r
        exam1.conductAssessment(); // Dispatches to OnlineCodeLabExam!\r
\r
        System.out.println("\\n>>> 2. Invoking conductAssessment() on exam2 (Resolved at Runtime):");\r
        exam2.conductAssessment(); // Dispatches to VivaVoceExam!\r
\r
        System.out.println("\\n==========================================================================");\r
    }\r
}`,i=`================================================================================\r
JAVA CORE TUTORIAL - QUICK REVISION GUIDE\r
Module 002_006: Polymorphism, Overriding & Dynamic Method Dispatch\r
Topic 2: Runtime Polymorphism (Method Overriding)\r
Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
================================================================================\r
\r
1. RUNTIME POLYMORPHISM MECHANICS:\r
   - Occurs when a subclass overrides a parent method.\r
   - Superclass reference points to Subclass object ('Parent p = new Child()').\r
   - Method executed is determined at RUNTIME based on the Heap object.\r
\r
================================================================================\r
Classroom Practice: Barrackpore Academy | Mentor: Sukanta Hui\r
================================================================================`,o=[{question:"How does Runtime Polymorphism (Dynamic Binding / Late Binding) work in Java?",shortAnswer:"When an overridden method is called through a superclass reference variable, the JVM resolves and invokes the method of the actual concrete object residing in Heap memory at runtime.",explanation:"Dynamic method dispatch uses the object's runtime virtual method table (vtable).",hint:"JVM resolves method execution at runtime based on the actual Heap object type.",level:"Beginner",codeExample:"Parent p = new Child(); p.show(); // Executes Child's show() at runtime"}];function b(){return e.jsxs("div",{className:"space-y-12 px-4 md:px-8 py-8 text-slate-200 bg-slate-900 min-h-screen",children:[e.jsx("style",{children:`
          @keyframes fadeIn {
            from { opacity: 0; transform: translateY(8px); }
            to { opacity: 1; transform: translateY(0); }
          }
          .animate-fade-in { animation: fadeIn 0.5s ease-out forwards; }
        `}),e.jsxs("header",{className:"space-y-4 border-b border-slate-800 pb-6 animate-fade-in",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"px-3 py-1 bg-sky-500/10 text-sky-400 border border-sky-500/20 text-xs font-semibold rounded-full uppercase tracking-wider",children:"Module 002_006 · Topic 2"}),e.jsx("span",{className:"px-3 py-1 bg-purple-500/10 text-purple-400 border border-purple-500/20 text-xs font-semibold rounded-full",children:"Dynamic Binding"})]}),e.jsx("h1",{className:"text-xl sm:text-2xl md:text-3xl font-bold text-white tracking-tight",children:"Runtime Polymorphism (Dynamic / Late Binding): Method Overriding"}),e.jsx("p",{className:"text-base md:text-lg text-slate-400 leading-relaxed max-w-4xl",children:"Learn how JVM Dynamic Method Dispatch evaluates the living Heap object at runtime, executing specialized subclass implementations through parent reference interfaces."})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsxs("h2",{className:"text-2xl font-bold text-emerald-400 flex items-center gap-2",children:[e.jsx("span",{children:"💻"})," Hands-On Java Demo Code"]}),e.jsx(n,{fileModule:s,title:"RuntimeOverridingDemo.java",highlightLines:[12,19,27,37,39,42,45]})]}),e.jsx("section",{className:"space-y-4",children:e.jsx(t,{title:"Runtime Polymorphism FAQs",questions:o})}),e.jsx("section",{className:"space-y-4",children:e.jsx(a,{content:i,title:"Module 002_006 Topic 2: Runtime Polymorphism",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Printable Note",downloadFileName:"002_006_topic2_runtime_poly_note.txt"})}),e.jsx(r,{note:"Runtime polymorphism means the decision of which method runs is delayed until the exact moment of execution on the Heap. The object decides its own behavior! — Sukanta Hui"})]})}export{b as default};
