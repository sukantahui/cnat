import{j as e}from"./vendor-react-core-Doz9nIC6.js";import{J as t}from"./JavaFileLoader-BfBG3xz_.js";import{F as a}from"./FAQTemplate-CkSqDH4B.js";import{P as n}from"./PlainTextPrint-C08xhKA4.js";import{T as r}from"./TeacherSukantaHui-CyIG3xbg.js";import"./JavaCodeBlock-BwsLxS3r.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-CIaKtAt4.js";const i=`/**\r
 * Java Core Tutorial - Module 002_008: Interfaces, Default/Static Methods & Multiple Inheritance\r
 * Topic 0: What is an Interface: 100% Abstract Contract and Blueprint of Behavior\r
 * Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
 */\r
\r
package com.coderaccotax.javatutorial.interfaces;\r
\r
public class InterfaceContractFoundationsDemo {\r
\r
    // INTERFACE: 100% abstract contract specifying capabilities\r
    public interface AcademicExaminer {\r
        // Method contract: WHAT to do, completely decoupled from HOW\r
        void conductPracticalAssessment(String traineeName, String projectModule);\r
        int calculateScore(int rawMarks, int attendanceBonus);\r
    }\r
\r
    // Concrete class fulfilling the contract\r
    public static class JavaSpecialistExaminer implements AcademicExaminer {\r
        @Override\r
        public void conductPracticalAssessment(String traineeName, String projectModule) {\r
            System.out.printf("  [EXAM LAB] Assessing %s on '%s' in Barrackpore terminal sandbox.\\n",\r
                    traineeName, projectModule);\r
        }\r
\r
        @Override\r
        public int calculateScore(int rawMarks, int attendanceBonus) {\r
            return rawMarks + attendanceBonus;\r
        }\r
    }\r
\r
    public static void main(String[] args) {\r
        System.out.println("==========================================================================");\r
        System.out.println(" TOPIC 0: WHAT IS AN INTERFACE IN JAVA - BARRACKPORE");\r
        System.out.println("==========================================================================\\n");\r
\r
        AcademicExaminer examiner = new JavaSpecialistExaminer();\r
        examiner.conductPracticalAssessment("Swadeep Paul", "Spring Boot Cloud Architecture");\r
        int finalScore = examiner.calculateScore(90, 5);\r
\r
        System.out.println("  -> Final Assessed Score: " + finalScore + "/100");\r
\r
        System.out.println("\\n==========================================================================");\r
    }\r
}`,s=`================================================================================\r
JAVA CORE TUTORIAL - QUICK REVISION GUIDE\r
Module 002_008: Interfaces, Default/Static Methods & Multiple Inheritance\r
Topic 0: What is an Interface\r
Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
================================================================================\r
\r
1. INTERFACE FUNDAMENTALS:\r
   - Keyword: 'interface InterfaceName { ... }'\r
   - Pure contract: All traditional methods are implicitly 'public abstract'.\r
   - Establishes loose coupling between callers and service providers.\r
\r
================================================================================\r
Classroom Practice: Barrackpore Academy | Mentor: Sukanta Hui\r
================================================================================`,c=[{question:"What is an Interface in Java and what does it represent?",shortAnswer:"An interface is a reference type in Java that acts as a pure contract and behavioral blueprint, specifying WHAT a class should do without specifying HOW it is done.",explanation:"Interfaces achieve total abstraction, loose coupling, and enable multiple inheritance of type in Java.",hint:"Pure behavioral blueprint and contract specifying what methods a class must implement.",level:"Beginner",codeExample:"public interface Flyable { void fly(); }"}];function h(){return e.jsxs("div",{className:"space-y-12 px-4 md:px-8 py-8 text-slate-200 bg-slate-900 min-h-screen",children:[e.jsx("style",{children:`
          @keyframes fadeIn {
            from { opacity: 0; transform: translateY(8px); }
            to { opacity: 1; transform: translateY(0); }
          }
          .animate-fade-in { animation: fadeIn 0.5s ease-out forwards; }
        `}),e.jsxs("header",{className:"space-y-4 border-b border-slate-800 pb-6 animate-fade-in",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"px-3 py-1 bg-sky-500/10 text-sky-400 border border-sky-500/20 text-xs font-semibold rounded-full uppercase tracking-wider",children:"Module 002_008 · Topic 0"}),e.jsx("span",{className:"px-3 py-1 bg-indigo-500/10 text-indigo-400 border border-indigo-500/20 text-xs font-semibold rounded-full",children:"Contract-Based Design"})]}),e.jsx("h1",{className:"text-3xl md:text-4xl font-extrabold text-white tracking-tight",children:"What is an Interface: A 100% Abstract Contract & Blueprint"}),e.jsx("p",{className:"text-base md:text-lg text-slate-400 leading-relaxed max-w-4xl",children:"Discover the primary mechanism for decoupling in Java: pure behavioral interfaces that define architectural contracts without implementation baggage."})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsxs("h2",{className:"text-2xl font-bold text-emerald-400 flex items-center gap-2",children:[e.jsx("span",{children:"💻"})," Hands-On Java Demo Code"]}),e.jsx(t,{fileModule:i,title:"InterfaceContractFoundationsDemo.java",highlightLines:[11,13,14,18,29]})]}),e.jsx("section",{className:"space-y-4",children:e.jsx(a,{title:"Interface Foundations FAQs",questions:c})}),e.jsx("section",{className:"space-y-4",children:e.jsx(n,{content:s,title:"Module 002_008 Topic 0: What is an Interface",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Printable Note",downloadFileName:"002_008_topic0_interface_note.txt"})}),e.jsx(r,{note:"An interface is a signed legal contract. It says: 'Any class that implements me guarantees to provide these exact capabilities!' — Sukanta Hui"})]})}export{h as default};
