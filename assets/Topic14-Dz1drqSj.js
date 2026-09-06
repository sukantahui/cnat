import{j as e}from"./vendor-react-core-Doz9nIC6.js";import{J as t}from"./JavaFileLoader-BfBG3xz_.js";import{F as a}from"./FAQTemplate-BHhlgA96.js";import{P as r}from"./PlainTextPrint-C08xhKA4.js";import{T as n}from"./TeacherSukantaHui-DDN87fI5.js";import"./JavaCodeBlock-BwsLxS3r.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-DEsnU7fn.js";const s=`/**\r
 * Java Core Tutorial - Module 002_007: Abstract Classes & Partial Abstraction\r
 * Topic 14: The Template Method Design Pattern: Algorithm Skeleton in Abstract Class\r
 * Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
 */\r
\r
package com.coderaccotax.javatutorial.abstraction;\r
\r
public class TemplateMethodPatternDemo {\r
\r
    // Abstract Class defining the TEMPLATE METHOD:\r
    public abstract static class AdmissionProcessingTemplate {\r
\r
        // 1. THE TEMPLATE METHOD (Marked 'final' so child classes cannot alter the algorithm flow!):\r
        public final void processTraineeAdmission(String applicantName) {\r
            System.out.println("==========================================================================");\r
            System.out.println("  >>> Processing Admission for: " + applicantName);\r
            System.out.println("==========================================================================");\r
            collectRegistrationDetails(applicantName);\r
            boolean eligible = evaluateEligibility(applicantName);\r
            if (eligible) {\r
                assignBatchSchedule();\r
                generateStudentIdCard(applicantName);\r
                sendWelcomeSms(applicantName);\r
            } else {\r
                System.out.println("  [REJECTED] Applicant did not meet prerequisite criteria.");\r
            }\r
        }\r
\r
        // Shared concrete step\r
        private void collectRegistrationDetails(String name) {\r
            System.out.println("  [STEP 1 - COMMON] Intake form and Aadhar verification completed.");\r
        }\r
\r
        // Abstract customizable step\r
        protected abstract boolean evaluateEligibility(String name);\r
\r
        // Abstract customizable step\r
        protected abstract void assignBatchSchedule();\r
\r
        // Abstract customizable step\r
        protected abstract void generateStudentIdCard(String name);\r
\r
        // Shared concrete hook / step\r
        private void sendWelcomeSms(String name) {\r
            System.out.println("  [STEP 5 - COMMON] Welcome SMS & Portal Login dispatched to " + name);\r
        }\r
    }\r
\r
    // Concrete Specialization 1: Fast-track Professional Batch\r
    public static class FullStackJavaAdmission extends AdmissionProcessingTemplate {\r
        @Override\r
        protected boolean evaluateEligibility(String name) {\r
            System.out.println("  [STEP 2 - CUSTOM] Evaluated Core Java & OOP basics test: 85% Score (PASS)");\r
            return true;\r
        }\r
\r
        @Override\r
        protected void assignBatchSchedule() {\r
            System.out.println("  [STEP 3 - CUSTOM] Assigned to Barrackpore Weekend Professional Batch (Sat-Sun 4 PM)");\r
        }\r
\r
        @Override\r
        protected void generateStudentIdCard(String name) {\r
            System.out.println("  [STEP 4 - CUSTOM] Generated RFID Smart Card: BKP-FSJ-2026-99");\r
        }\r
    }\r
\r
    public static void main(String[] args) {\r
        AdmissionProcessingTemplate admission = new FullStackJavaAdmission();\r
        admission.processTraineeAdmission("Swadeep Paul");\r
    }\r
}`,i=`================================================================================\r
JAVA CORE TUTORIAL - QUICK REVISION GUIDE\r
Module 002_007: Abstract Classes & Partial Abstraction\r
Topic 14: The Template Method Design Pattern\r
Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
================================================================================\r
\r
1. TEMPLATE METHOD PATTERN STRUCTURE:\r
   - 'public final void templateMethod()': Controls invariant execution order.\r
   - Abstract primitive operations: Implemented by subclasses.\r
   - Hollywood Principle: "Don't call us, we'll call you" (Framework calls child steps).\r
\r
================================================================================\r
Classroom Practice: Barrackpore Academy | Mentor: Sukanta Hui\r
================================================================================`,o=[{question:"What is the Template Method Design Pattern and why is the template method itself typically declared 'final'?",shortAnswer:"The Template Method pattern defines the invariant skeleton of an algorithm in an abstract base class method, while deferring specific customizable steps to subclasses. The template method is marked 'final' to prevent subclasses from altering the overall execution order/structure of the algorithm.",explanation:"A classic Gang of Four behavioral pattern heavily used across Spring and Java core libraries.",hint:"Defines algorithm skeleton in base class; marked final to protect algorithm sequence.",level:"Advanced",codeExample:"public final void execute() { step1(); customStep2(); step3(); }"}];function g(){return e.jsxs("div",{className:"space-y-12 px-4 md:px-8 py-8 text-slate-200 bg-slate-900 min-h-screen",children:[e.jsx("style",{children:`
          @keyframes fadeIn {
            from { opacity: 0; transform: translateY(8px); }
            to { opacity: 1; transform: translateY(0); }
          }
          .animate-fade-in { animation: fadeIn 0.5s ease-out forwards; }
        `}),e.jsxs("header",{className:"space-y-4 border-b border-slate-800 pb-6 animate-fade-in",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"px-3 py-1 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-xs font-semibold rounded-full uppercase tracking-wider",children:"Module 002_007 · Topic 14"}),e.jsx("span",{className:"px-3 py-1 bg-sky-500/10 text-sky-400 border border-sky-500/20 text-xs font-semibold rounded-full",children:"GoF Design Pattern"})]}),e.jsx("h1",{className:"text-xl sm:text-2xl md:text-3xl font-bold text-white tracking-tight",children:"The Template Method Design Pattern: Defining Algorithm Skeletons"}),e.jsxs("p",{className:"text-base md:text-lg text-slate-400 leading-relaxed max-w-4xl",children:["Master the quintessential architectural pattern of abstract classes: locking algorithm flows with ",e.jsx("code",{className:"text-emerald-300 font-mono",children:"final"})," template methods while delegating step details to subclasses."]})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsxs("h2",{className:"text-2xl font-bold text-emerald-400 flex items-center gap-2",children:[e.jsx("span",{children:"💻"})," Hands-On Java Demo Code"]}),e.jsx(t,{fileModule:s,title:"TemplateMethodPatternDemo.java",highlightLines:[13,14,21,31,34,46,61]})]}),e.jsx("section",{className:"space-y-4",children:e.jsx(a,{title:"Template Method Pattern FAQs",questions:o})}),e.jsx("section",{className:"space-y-4",children:e.jsx(r,{content:i,title:"Module 002_007 Topic 14: Template Method Pattern",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Printable Note",downloadFileName:"002_007_topic14_template_method_note.txt"})}),e.jsx(n,{note:"The Template Method pattern is everywhere in Spring Framework (e.g. JdbcTemplate, JmsTemplate). The base class controls the recipe steps, while you just provide the ingredients! — Sukanta Hui"})]})}export{g as default};
