import{j as e}from"./vendor-react-core-Doz9nIC6.js";import{J as a}from"./JavaFileLoader-BfBG3xz_.js";import{F as t}from"./FAQTemplate-CkSqDH4B.js";import{P as n}from"./PlainTextPrint-C08xhKA4.js";import{T as r}from"./TeacherSukantaHui-CyIG3xbg.js";import"./JavaCodeBlock-BwsLxS3r.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-CIaKtAt4.js";const s=`/**\r
 * Java Core Tutorial - Module 003_007: Nested & Inner Classes\r
 * Topic 7: Method-Local Inner Class: Scoped Class Declarations & Effectively Final Capture\r
 * Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
 */\r
\r
package com.coderaccotax.javatutorial.nested;\r
\r
public class MethodLocalInnerClassDemo {\r
\r
    private String institutionName = "Coder & AccoTax Barrackpore";\r
\r
    public void processScholarshipEvaluation(final String studentName, double rawScore) {\r
        // Local variable (effectively final):\r
        int graceMarks = 5;\r
\r
        // METHOD-LOCAL INNER CLASS: Declared right inside the method body!\r
        class ScholarshipEvaluator {\r
            public void computeAndDisplay() {\r
                double finalScore = rawScore + graceMarks;\r
                boolean isEligible = finalScore >= 80.0;\r
\r
                System.out.println("  Evaluating Trainee : " + studentName);\r
                System.out.println("  Institution        : " + institutionName);\r
                System.out.println("  Final Score (Grace): " + finalScore);\r
                System.out.println("  Scholarship Awarded: " + (isEligible ? "YES (50% Grant)" : "NO"));\r
            }\r
        }\r
\r
        // Instantiate and run the method-local class within its scope:\r
        ScholarshipEvaluator evaluator = new ScholarshipEvaluator();\r
        evaluator.computeAndDisplay();\r
    }\r
\r
    public static void main(String[] args) {\r
        System.out.println("==========================================================================");\r
        System.out.println(" TOPIC 7: METHOD-LOCAL INNER CLASS - BARRACKPORE");\r
        System.out.println("==========================================================================\\n");\r
\r
        MethodLocalInnerClassDemo processor = new MethodLocalInnerClassDemo();\r
\r
        System.out.println(">>> Executing Method with Enclosed Method-Local Class:");\r
        processor.processScholarshipEvaluation("Swadeep Paul", 78.5);\r
\r
        System.out.println("\\n==========================================================================");\r
    }\r
}`,o=`================================================================================\r
JAVA CORE TUTORIAL - QUICK REVISION GUIDE\r
Module 003_007: Nested & Inner Classes\r
Topic 7: Method-Local Inner Class\r
Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
================================================================================\r
\r
1. METHOD-LOCAL CLASS RULES:\r
   - Declared inside a method body.\r
   - Scope is restricted solely to that method.\r
   - Cannot have access modifiers (public/private/protected).\r
   - Can access 'effectively final' local variables.\r
\r
================================================================================\r
Classroom Practice: Barrackpore Academy | Mentor: Sukanta Hui\r
================================================================================`,l=[{question:"What is a Method-Local Inner Class and what are its scope boundaries in Java?",shortAnswer:"A Method-Local Inner Class is a class defined completely inside a method block. It is only visible and instantiable within that specific method execution. It can access outer class members as well as local method variables, provided those local variables are 'final' or 'effectively final'.",explanation:"Method-local classes cannot have access modifiers (public, private, protected) or be declared static.",hint:"Declared inside a method body; scoped only to that method.",level:"Intermediate",codeExample:"void m() { class LocalHelper { ... } new LocalHelper().run(); }"}];function b(){return e.jsxs("div",{className:"space-y-12 px-4 md:px-8 py-8 text-slate-200 bg-slate-900 min-h-screen",children:[e.jsxs("header",{className:"space-y-4 border-b border-slate-800 pb-6",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"px-3 py-1 bg-sky-500/10 text-sky-400 border border-sky-500/20 text-xs font-semibold rounded-full uppercase tracking-wider",children:"Module 003_007 · Topic 7"}),e.jsx("span",{className:"px-3 py-1 bg-amber-500/10 text-amber-400 border border-amber-500/20 text-xs font-semibold rounded-full",children:"Method-Scoped Classes"})]}),e.jsxs("h1",{className:"text-3xl md:text-4xl font-extrabold text-white tracking-tight",children:[e.jsx("code",{className:"text-amber-400 font-mono",children:"Method-Local Inner Class"}),": Scoped Declarations & Variable Capture"]}),e.jsx("p",{className:"text-base md:text-lg text-slate-400 leading-relaxed max-w-4xl",children:"Learn how to declare classes inside execution method blocks: scoping specialized helper algorithms and capturing effectively final parameters."})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsxs("h2",{className:"text-2xl font-bold text-emerald-400 flex items-center gap-2",children:[e.jsx("span",{children:"💻"})," Hands-On Java Demo Code"]}),e.jsx(a,{fileModule:s,title:"MethodLocalInnerClassDemo.java",highlightLines:[7,10,14,15,25,26]})]}),e.jsx("section",{className:"space-y-4",children:e.jsx(t,{title:"Method-Local FAQs",questions:l})}),e.jsx("section",{className:"space-y-4",children:e.jsx(n,{content:o,title:"Module 003_007 Topic 7: Method-Local Inner Class",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Printable Note",downloadFileName:"003_007_topic7_method_local_note.txt"})}),e.jsx(r,{note:"A method-local inner class is like a temporary tool created inside a single function. Once the method finishes execution, that class definition is completely inaccessible outside! — Sukanta Hui"})]})}export{b as default};
