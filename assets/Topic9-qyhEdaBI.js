import{j as e}from"./vendor-react-core-Doz9nIC6.js";import{J as n}from"./JavaFileLoader-BfBG3xz_.js";import{F as t}from"./FAQTemplate-BHhlgA96.js";import{P as a}from"./PlainTextPrint-C08xhKA4.js";import{T as s}from"./TeacherSukantaHui-DDN87fI5.js";import"./JavaCodeBlock-BwsLxS3r.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-DEsnU7fn.js";const r=`/**\r
 * Java Core Tutorial - Module 003_007: Nested & Inner Classes\r
 * Topic 9: Anonymous Classes: Implementing Interfaces vs Extending Abstract Classes\r
 * Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
 */\r
\r
package com.coderaccotax.javatutorial.nested;\r
\r
abstract class TaxCalculator {\r
    protected double taxRate = 0.18; // 18% GST base\r
    public abstract double calculateTax(double amount);\r
}\r
\r
public class AnonymousSubclassingDemo {\r
\r
    public static void main(String[] args) {\r
        System.out.println("==========================================================================");\r
        System.out.println(" TOPIC 9: ANONYMOUS INTERFACES vs ABSTRACT CLASSES - BARRACKPORE");\r
        System.out.println("==========================================================================\\n");\r
\r
        // 1. Extending Abstract Class Anonymously (Can access abstract class state):\r
        TaxCalculator luxuryGstCalculator = new TaxCalculator() {\r
            @Override\r
            public double calculateTax(double amount) {\r
                // Modifying behavior by applying 28% Luxury GST rate:\r
                return amount * 0.28;\r
            }\r
        };\r
\r
        // 2. Extending Concrete Class Anonymously (Method overriding on the fly):\r
        Object customToString = new Object() {\r
            @Override\r
            public String toString() {\r
                return "Custom Anonymous Object generated at Barrackpore Hub!";\r
            }\r
        };\r
\r
        double invoiceAmount = 10000.0;\r
        System.out.println(">>> 1. Luxury Tax on 10,000 INR (28% Rate): " + luxuryGstCalculator.calculateTax(invoiceAmount) + " INR");\r
        System.out.println(">>> 2. Custom Overridden toString(): " + customToString);\r
\r
        System.out.println("\\n>>> SYNTAX CONSTRAINT: An anonymous class can implement EXACTLY ONE interface OR extend ONE class (Never both)!");\r
\r
        System.out.println("\\n==========================================================================");\r
    }\r
}`,o=`================================================================================\r
JAVA CORE TUTORIAL - QUICK REVISION GUIDE\r
Module 003_007: Nested & Inner Classes\r
Topic 9: Anonymous Subclassing Rules\r
Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
================================================================================\r
\r
1. SUBCLASSING RULES:\r
   - Exactly ONE superclass OR ONE interface (never both).\r
   - No explicit constructor (can use instance initializer blocks).\r
   - Can access protected/public fields of the extended abstract class.\r
\r
================================================================================\r
Classroom Practice: Barrackpore Academy | Mentor: Sukanta Hui\r
================================================================================`,i=[{question:"Can an anonymous inner class extend a class AND implement an interface simultaneously in Java?",shortAnswer:"NO. An anonymous inner class can either extend exactly ONE superclass (abstract or concrete) OR implement exactly ONE interface. It can never implement multiple interfaces or extend a class and implement an interface at the same time.",explanation:"Also, anonymous inner classes cannot have explicit constructors because they have no class name.",hint:"An anonymous class can extend 1 class OR implement 1 interface, never both.",level:"Intermediate",codeExample:"AbstractClass a = new AbstractClass() { void foo() { ... } };"}];function y(){return e.jsxs("div",{className:"space-y-12 px-4 md:px-8 py-8 text-slate-200 bg-slate-900 min-h-screen",children:[e.jsxs("header",{className:"space-y-4 border-b border-slate-800 pb-6",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"px-3 py-1 bg-sky-500/10 text-sky-400 border border-sky-500/20 text-xs font-semibold rounded-full uppercase tracking-wider",children:"Module 003_007 · Topic 9"}),e.jsx("span",{className:"px-3 py-1 bg-indigo-500/10 text-indigo-400 border border-indigo-500/20 text-xs font-semibold rounded-full",children:"Subclassing Rules"})]}),e.jsx("h1",{className:"text-xl sm:text-2xl md:text-3xl font-bold text-white tracking-tight",children:"Anonymous Classes: Implementing Interfaces vs Extending Abstract Classes"}),e.jsx("p",{className:"text-base md:text-lg text-slate-400 leading-relaxed max-w-4xl",children:"Explore polymorphic anonymous expressions: overriding methods in abstract classes, inheritance access, and the single-type inheritance constraint."})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsxs("h2",{className:"text-2xl font-bold text-emerald-400 flex items-center gap-2",children:[e.jsx("span",{children:"💻"})," Hands-On Java Demo Code"]}),e.jsx(n,{fileModule:r,title:"AnonymousSubclassingDemo.java",highlightLines:[7,18,19,20,27,28,29,34,35]})]}),e.jsx("section",{className:"space-y-4",children:e.jsx(t,{title:"Anonymous Subclassing FAQs",questions:i})}),e.jsx("section",{className:"space-y-4",children:e.jsx(a,{content:o,title:"Module 003_007 Topic 9: Anonymous Subclassing",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Printable Note",downloadFileName:"003_007_topic9_anonymous_subclassing_note.txt"})}),e.jsx(s,{note:"Since anonymous classes have no name, you cannot write a constructor like 'public MyAnon()'! If you need initialization logic, use an instance initializer block '{ ... }'! — Sukanta Hui"})]})}export{y as default};
