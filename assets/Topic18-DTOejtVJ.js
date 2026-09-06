import{j as e}from"./vendor-react-core-Doz9nIC6.js";import{J as t}from"./JavaFileLoader-BfBG3xz_.js";import{F as r}from"./FAQTemplate-BHhlgA96.js";import{P as n}from"./PlainTextPrint-C08xhKA4.js";import{T as a}from"./TeacherSukantaHui-DDN87fI5.js";import"./JavaCodeBlock-BwsLxS3r.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-DEsnU7fn.js";const o=`/**\r
 * Java Core Tutorial - Module 012_001: GoF Design Patterns\r
 * Topic 18: The Template Method Pattern - Algorithm Skeletons & Hooks\r
 * Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
 */\r
\r
package com.coderaccotax.javatutorial.patterns;\r
\r
public class TemplateMethodPatternDemo {\r
\r
    // 1. Abstract Base Class with Template Method:\r
    public static abstract class CourseEnrollmentWorkflow {\r
\r
        // The Template Method (final to prevent algorithm distortion!):\r
        public final void enrollStudent(String studentName) {\r
            validateDetails(studentName);\r
            double baseFee = calculateTuitionFee();\r
            applyCenterDiscount(baseFee);\r
            generateIdCard(studentName);\r
            sendConfirmation(studentName);\r
            System.out.println("   >>> Enrollment Complete for " + studentName + "! ✅\r
");\r
        }\r
\r
        // Concrete common steps:\r
        private void validateDetails(String name) { System.out.println("   [1. VALIDATE]: Verified credentials for " + name); }\r
        private void generateIdCard(String name) { System.out.println("   [3. ID CARD ]: Printed RFID Card for " + name); }\r
        private void sendConfirmation(String name) { System.out.println("   [4. NOTIFY  ]: Sent Welcome Email to " + name); }\r
\r
        // Abstract Primitive Hooks (Must be implemented by subclasses):\r
        protected abstract double calculateTuitionFee();\r
        protected abstract void applyCenterDiscount(double baseFee);\r
    }\r
\r
    // Concrete Subclass 1: Barrackpore Campus\r
    public static class BarrackporeCampusEnrollment extends CourseEnrollmentWorkflow {\r
        @Override protected double calculateTuitionFee() { return 6000.0; }\r
        @Override protected void applyCenterDiscount(double fee) {\r
            System.out.println("   [2. TUITION ]: Barrackpore Hub (Applied 10% Local Discount: ₹" + (fee * 0.90) + ")");\r
        }\r
    }\r
\r
    public static void main(String[] args) {\r
        System.out.println("==========================================================================");\r
        System.out.println(" TOPIC 18: TEMPLATE METHOD DESIGN PATTERN - BARRACKPORE");\r
        System.out.println("==========================================================================\\n");\r
\r
        CourseEnrollmentWorkflow workflow = new BarrackporeCampusEnrollment();\r
        workflow.enrollStudent("Swadeep Paul");\r
\r
        System.out.println("==========================================================================");\r
    }\r
}\r
`,s=`================================================================================\r
JAVA CORE TUTORIAL - QUICK REVISION GUIDE\r
Module 012_001: GoF Design Patterns\r
Topic 18: Template Method Pattern\r
Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
================================================================================\r
\r
1. INTENT:\r
   - Define the skeleton of an algorithm in an operation, deferring some steps to subclasses.\r
   - Lets subclasses redefine certain steps of an algorithm without changing the algorithm's structure.\r
\r
2. THE HOLLYWOOD PRINCIPLE:\r
   - "Don't call us, we'll call you."\r
   - High-level superclass calls low-level subclass hooks, inverting control.\r
\r
================================================================================\r
Classroom Practice: Barrackpore Academy | Mentor: Sukanta Hui\r
================================================================================\r
`,l=[{question:"Why should the template method itself in the base class be marked with the 'final' keyword in Java?",shortAnswer:"To prevent child subclasses from overriding the master algorithm structure, guaranteeing that invariant workflow steps execute in the exact designated order.",explanation:"Protects algorithm integrity.",hint:"Prevents subclasses from altering the algorithm execution order.",level:"Intermediate",codeExample:"public final void processOrder() { step1(); step2(); }"},{question:"What is an example of the Template Method pattern in the Java Collections framework?",shortAnswer:"java.util.AbstractList (where get(int) and size() are abstract hooks, and all other methods like contains(), indexOf(), iterator() are implemented on top of them).",explanation:"Foundational skeletal implementation classes in the JDK.",hint:"AbstractList, AbstractSet, AbstractMap skeletal implementations.",level:"Intermediate",codeExample:"AbstractList provides concrete methods using abstract get() and size()."}];function b(){return e.jsxs("div",{className:"space-y-12 px-4 md:px-8 py-8 text-slate-200 bg-slate-900 min-h-screen",children:[e.jsxs("header",{className:"space-y-4 border-b border-slate-800 pb-6",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"px-3 py-1 bg-sky-500/10 text-sky-400 border border-sky-500/20 text-xs font-semibold rounded-full uppercase tracking-wider",children:"Module 012_001 · Topic 18"}),e.jsx("span",{className:"px-3 py-1 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-xs font-semibold rounded-full",children:"GoF Design Patterns"})]}),e.jsxs("h1",{className:"text-xl sm:text-2xl md:text-3xl font-bold text-white tracking-tight",children:["The Template Method: ",e.jsx("code",{className:"text-emerald-400 font-mono",children:"Algorithm Skeletons & Hooks"})]}),e.jsx("p",{className:"text-base md:text-lg text-slate-400 leading-relaxed max-w-4xl",children:`The Hollywood Principle: "Don't call us, we'll call you" - fixing algorithm invariant structures while allowing subclass hook overrides.`})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsxs("h2",{className:"text-2xl font-bold text-emerald-400 flex items-center gap-2",children:[e.jsx("span",{children:"💻"})," Hands-On Java Demo Code"]}),e.jsx(t,{fileModule:o,title:"TemplateMethodPatternDemo.java",highlightLines:[18,25,34,43]})]}),e.jsx("section",{className:"space-y-4",children:e.jsx(r,{title:"GoF Design Patterns FAQs",questions:l})}),e.jsx("section",{className:"space-y-4",children:e.jsx(n,{content:s,title:"Module 012_001 Topic 18: Template Method Pattern",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Printable Note",downloadFileName:"012_001_topic18_template_method_pattern_note.txt"})}),e.jsx(a,{note:"The Template Method pattern is the 'Hollywood Principle' in action! The parent class controls the master workflow step 1, 2, 3, but calls abstract hook methods implemented by children! — Sukanta Hui"})]})}export{b as default};
