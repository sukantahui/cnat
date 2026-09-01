import{j as e}from"./vendor-react-core-Doz9nIC6.js";import{J as t}from"./JavaFileLoader-BfBG3xz_.js";import{F as a}from"./FAQTemplate-BHhlgA96.js";import{P as r}from"./PlainTextPrint-C08xhKA4.js";import{T as n}from"./TeacherSukantaHui-BaJcBHAy.js";import"./JavaCodeBlock-BwsLxS3r.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-8ao-0upJ.js";const s=`/**\r
 * Java Core Tutorial - Module 002_007: Abstract Classes & Partial Abstraction\r
 * Topic 5: Concrete Methods Inside Abstract Classes: Sharing Common Logic\r
 * Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
 */\r
\r
package com.coderaccotax.javatutorial.abstraction;\r
\r
public class ConcreteMethodsInAbstractClassDemo {\r
\r
    public abstract static class AcademicExamTemplate {\r
        protected String studentName;\r
        protected String hubLocation;\r
\r
        public AcademicExamTemplate(String name, String hub) {\r
            this.studentName = name;\r
            this.hubLocation = hub;\r
        }\r
\r
        // 1. CONCRETE METHOD (Fully shared across all exam types):\r
        public void recordBiometricAttendance() {\r
            System.out.printf("  [ATTENDANCE] Biometric check-in recorded for %s @ %s.\\n", studentName, hubLocation);\r
        }\r
\r
        // 2. CONCRETE METHOD (Common certificate generator):\r
        public void issueCertificate(String grade) {\r
            System.out.printf("  [CERTIFICATE] Awarded grade '%s' to %s (Certified by Sukanta Hui).\\n", grade, studentName);\r
        }\r
\r
        // 3. ABSTRACT METHOD (Specialized per exam format):\r
        public abstract void evaluateQuestions();\r
    }\r
\r
    public static class PracticalCodingExam extends AcademicExamTemplate {\r
        public PracticalCodingExam(String name, String hub) { super(name, hub); }\r
\r
        @Override\r
        public void evaluateQuestions() {\r
            System.out.println("  [EVALUATION] Executing automated JUnit assertions on GitHub repository...");\r
        }\r
    }\r
\r
    public static void main(String[] args) {\r
        System.out.println("==========================================================================");\r
        System.out.println(" TOPIC 5: CONCRETE METHODS IN ABSTRACT CLASSES - BARRACKPORE");\r
        System.out.println("==========================================================================\\n");\r
\r
        AcademicExamTemplate exam = new PracticalCodingExam("Swadeep Paul", "Barrackpore Hub");\r
\r
        // Calling shared concrete methods:\r
        exam.recordBiometricAttendance();\r
\r
        // Calling specialized overridden method:\r
        exam.evaluateQuestions();\r
\r
        // Calling another shared concrete method:\r
        exam.issueCertificate("A+");\r
\r
        System.out.println("\\n==========================================================================");\r
    }\r
}`,i=`================================================================================\r
JAVA CORE TUTORIAL - QUICK REVISION GUIDE\r
Module 002_007: Abstract Classes & Partial Abstraction\r
Topic 5: Concrete Methods in Abstract Classes\r
Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
================================================================================\r
\r
1. CONCRETE METHOD REUSE:\r
   - Abstract classes can contain 100% fully implemented concrete methods.\r
   - Subclasses inherit these concrete methods without needing to override them.\r
\r
================================================================================\r
Classroom Practice: Barrackpore Academy | Mentor: Sukanta Hui\r
================================================================================`,o=[{question:"Why does Java allow concrete (fully implemented) methods inside abstract classes?",shortAnswer:"To provide shared default logic across all subclasses, eliminating code duplication while still allowing abstract methods to enforce specialized behavior.",explanation:"This creates the foundation for Template Method and partial abstraction designs.",hint:"Allows code reuse for shared logic while mandating customization for abstract methods.",level:"Beginner",codeExample:"abstract class Base { void shared() {} abstract void custom(); }"}];function b(){return e.jsxs("div",{className:"space-y-12 px-4 md:px-8 py-8 text-slate-200 bg-slate-900 min-h-screen",children:[e.jsx("style",{children:`
          @keyframes fadeIn {
            from { opacity: 0; transform: translateY(8px); }
            to { opacity: 1; transform: translateY(0); }
          }
          .animate-fade-in { animation: fadeIn 0.5s ease-out forwards; }
        `}),e.jsxs("header",{className:"space-y-4 border-b border-slate-800 pb-6 animate-fade-in",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"px-3 py-1 bg-sky-500/10 text-sky-400 border border-sky-500/20 text-xs font-semibold rounded-full uppercase tracking-wider",children:"Module 002_007 · Topic 5"}),e.jsx("span",{className:"px-3 py-1 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-xs font-semibold rounded-full",children:"Code Reusability"})]}),e.jsx("h1",{className:"text-xl sm:text-2xl md:text-3xl font-bold text-white tracking-tight",children:"Concrete Methods Inside Abstract Classes: Sharing Common Logic"}),e.jsx("p",{className:"text-base md:text-lg text-slate-400 leading-relaxed max-w-4xl",children:"Learn how abstract classes combine default boilerplate implementations with abstract contracts to eliminate code duplication across large hierarchies."})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsxs("h2",{className:"text-2xl font-bold text-emerald-400 flex items-center gap-2",children:[e.jsx("span",{children:"💻"})," Hands-On Java Demo Code"]}),e.jsx(t,{fileModule:s,title:"ConcreteMethodsInAbstractClassDemo.java",highlightLines:[18,23,28,42,45,48]})]}),e.jsx("section",{className:"space-y-4",children:e.jsx(a,{title:"Concrete Methods in Abstract Classes FAQs",questions:o})}),e.jsx("section",{className:"space-y-4",children:e.jsx(r,{content:i,title:"Module 002_007 Topic 5: Concrete Methods in Abstract Classes",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Printable Note",downloadFileName:"002_007_topic5_concrete_methods_note.txt"})}),e.jsx(n,{note:"If attendance logging is identical for every exam in Barrackpore, put it in a concrete method inside the abstract class so nobody has to write it twice! — Sukanta Hui"})]})}export{b as default};
