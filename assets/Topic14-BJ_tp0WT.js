import{j as e}from"./vendor-react-core-Doz9nIC6.js";import{J as n}from"./JavaFileLoader-BfBG3xz_.js";import{F as s}from"./FAQTemplate-BHhlgA96.js";import{P as a}from"./PlainTextPrint-C08xhKA4.js";import{T as t}from"./TeacherSukantaHui-RpFLNJ5A.js";import"./JavaCodeBlock-BwsLxS3r.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-wprqVFW_.js";const r=`/**\r
 * Java Core Tutorial - Module 003_007: Nested & Inner Classes\r
 * Topic 14: Comparing Anonymous Inner Classes vs Java 8 Lambdas (Architecture & 'this' Scope)\r
 * Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
 */\r
\r
package com.coderaccotax.javatutorial.nested;\r
\r
public class AnonymousVsLambdaComparisonDemo {\r
\r
    private String scopeOrigin = "Enclosing Outer Class Scope";\r
\r
    public void testScopes() {\r
\r
        // 1. Anonymous Inner Class ('this' refers to the ANONYMOUS CLASS INSTANCE itself):\r
        Runnable anonRunnable = new Runnable() {\r
            private String scopeOrigin = "Anonymous Class Scope";\r
\r
            @Override\r
            public void run() {\r
                System.out.println("  1. Anonymous Class 'this': " + this.scopeOrigin);\r
                System.out.println("     Outer Scope Reference : " + AnonymousVsLambdaComparisonDemo.this.scopeOrigin);\r
            }\r
        };\r
        anonRunnable.run();\r
\r
        // 2. Java 8 Lambda Expression ('this' refers to the ENCLOSING CLASS INSTANCE - Lexical Scoping):\r
        Runnable lambdaRunnable = () -> {\r
            // In a lambda, 'this' refers directly to the enclosing outer object!\r
            System.out.println("  2. Lambda Expression 'this': " + this.scopeOrigin);\r
        };\r
        lambdaRunnable.run();\r
    }\r
\r
    public static void main(String[] args) {\r
        System.out.println("==========================================================================");\r
        System.out.println(" TOPIC 14: ANONYMOUS CLASSES vs JAVA 8 LAMBDAS - BARRACKPORE");\r
        System.out.println("==========================================================================\\n");\r
\r
        System.out.println(">>> 3 Key Architectural Differences:");\r
        System.out.println("  1. 'this' Scope: In anonymous classes, 'this' is the inner object; in lambdas, 'this' is lexical (outer object).");\r
        System.out.println("  2. Class Generation: Anonymous creates 'Outer$1.class'; Lambda uses 'invokedynamic' (no .class file).");\r
        System.out.println("  3. Target Types: Anonymous can extend classes and multi-method interfaces; Lambda works ONLY with Functional Interfaces (SAM).");\r
\r
        System.out.println("\\n>>> Executing Scope Comparison Demo:");\r
        new AnonymousVsLambdaComparisonDemo().testScopes();\r
\r
        System.out.println("\\n==========================================================================");\r
    }\r
}`,o=`================================================================================\r
JAVA CORE TUTORIAL - QUICK REVISION GUIDE\r
Module 003_007: Nested & Inner Classes\r
Topic 14: Anonymous Classes vs Lambdas\r
Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
================================================================================\r
\r
1. ANONYMOUS vs LAMBDA COMPARISON:\r
   - Scope of 'this': Inner instance vs Enclosing outer instance (lexical).\r
   - Bytecode: Generates 'Outer$1.class' vs 'invokedynamic' instruction.\r
   - Interface: Multiple methods/abstract class vs Single Abstract Method (SAM).\r
\r
================================================================================\r
Classroom Practice: Barrackpore Academy | Mentor: Sukanta Hui\r
================================================================================`,i=[{question:"What is the fundamental difference in how 'this' keyword behaves in an Anonymous Inner Class versus a Java 8 Lambda expression?",shortAnswer:"In an Anonymous Inner Class, 'this' refers to the anonymous inner class instance itself. In a Lambda expression, 'this' is lexically scoped and refers directly to the enclosing outer class instance where the lambda was defined.",explanation:"Also, lambdas are compiled via invokedynamic without creating extra .class files on disk.",hint:"Anonymous 'this' refers to inner instance; lambda 'this' refers to outer enclosing instance.",level:"Intermediate",codeExample:"// In Lambda: this.field accesses enclosing class instance variable directly"}];function b(){return e.jsxs("div",{className:"space-y-12 px-4 md:px-8 py-8 text-slate-200 bg-slate-900 min-h-screen",children:[e.jsxs("header",{className:"space-y-4 border-b border-slate-800 pb-6",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"px-3 py-1 bg-sky-500/10 text-sky-400 border border-sky-500/20 text-xs font-semibold rounded-full uppercase tracking-wider",children:"Module 003_007 · Topic 14"}),e.jsx("span",{className:"px-3 py-1 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-xs font-semibold rounded-full",children:"Modern Evolution"})]}),e.jsxs("h1",{className:"text-xl sm:text-2xl md:text-3xl font-bold text-white tracking-tight",children:["Comparing Anonymous Inner Classes vs Java 8 Lambdas: Architecture & ",e.jsx("code",{className:"text-emerald-400 font-mono",children:"this"})," Scope"]}),e.jsxs("p",{className:"text-base md:text-lg text-slate-400 leading-relaxed max-w-4xl",children:["Understand the modern functional shift: contrasting object-level ",e.jsx("code",{className:"text-amber-300 font-mono",children:"this"})," bindings, lexical scoping, and ",e.jsx("code",{className:"text-emerald-300 font-mono",children:"invokedynamic"})," bytecode generation."]})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsxs("h2",{className:"text-2xl font-bold text-emerald-400 flex items-center gap-2",children:[e.jsx("span",{children:"💻"})," Hands-On Java Demo Code"]}),e.jsx(n,{fileModule:r,title:"AnonymousVsLambdaComparisonDemo.java",highlightLines:[7,13,14,18,19,24,25,26]})]}),e.jsx("section",{className:"space-y-4",children:e.jsx(s,{title:"Anonymous vs Lambdas FAQs",questions:i})}),e.jsx("section",{className:"space-y-4",children:e.jsx(a,{content:o,title:"Module 003_007 Topic 14: Anonymous vs Lambdas",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Printable Note",downloadFileName:"003_007_topic14_anonymous_vs_lambdas_note.txt"})}),e.jsx(t,{note:"Remember in technical interviews: A lambda is NOT just syntactic sugar for an anonymous class! Lambdas use invokedynamic, create no extra class files, and have lexical 'this' scoping! — Sukanta Hui"})]})}export{b as default};
