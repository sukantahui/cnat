import{j as e}from"./vendor-react-core-Doz9nIC6.js";import{J as t}from"./JavaFileLoader-BfBG3xz_.js";import{F as a}from"./FAQTemplate-BHhlgA96.js";import{P as n}from"./PlainTextPrint-C08xhKA4.js";import{T as o}from"./TeacherSukantaHui-DDN87fI5.js";import"./JavaCodeBlock-BwsLxS3r.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-DEsnU7fn.js";const r=`/**\r
 * Java Core Tutorial - Module 009_001: Lambda Expressions & Lexical Scoping\r
 * Topic 5: The @FunctionalInterface Annotation: Compiler Validation & Defensive Design\r
 * Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
 */\r
\r
package com.coderaccotax.javatutorial.functional;\r
\r
// 1. DEFENSIVE COMPILER CHECK VIA @FunctionalInterface:\r
@FunctionalInterface\r
public interface StudentDiscountPolicy {\r
\r
    double calculateDiscount(double courseFee, int academicScore);\r
\r
    // If another developer accidentally adds a second abstract method below:\r
    // void executeRefund(); // COMPILE ERROR: Unexpected '@FunctionalInterface' annotation: Multiple non-overriding abstract methods found!\r
}`,i=`================================================================================\r
JAVA CORE TUTORIAL - QUICK REVISION GUIDE\r
Module 009_001: Lambda Expressions & Lexical Scoping\r
Topic 5: @FunctionalInterface Annotation\r
Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
================================================================================\r
\r
1. @FUNCTIONALINTERFACE ANNOTATION:\r
   - Optional, but strongly recommended (Best Practice).\r
   - Instructs compiler to verify exactly ONE abstract method.\r
   - Throws compile error if 0 or 2+ abstract methods are added.\r
   - Documents design intent clearly for other developers and Javadoc.\r
\r
================================================================================\r
Classroom Practice: Barrackpore Academy | Mentor: Sukanta Hui\r
================================================================================`,c=[{question:"What is the purpose of the '@FunctionalInterface' annotation in Java and is it mandatory for writing lambdas?",shortAnswer:"1. 'Purpose': '@FunctionalInterface' is an informative annotation that instructs the 'javac' compiler to enforce the Single Abstract Method (SAM) contract at compile time. If an interface annotated with '@FunctionalInterface' contains zero or more than one abstract method, the compiler immediately generates a compilation error. 2. 'Is it Mandatory?': NO, it is NOT mandatory. Any interface with exactly one abstract method is automatically a functional interface by definition. However, using the annotation is a critical industry best practice to prevent teammates from accidentally adding second abstract methods that would break existing lambdas across the codebase.",explanation:"Compile-time validation role of @FunctionalInterface.",hint:"Not mandatory, but provides compile-time error checking to ensure the interface maintains exactly 1 abstract method.",level:"Beginner",codeExample:"@FunctionalInterface interface Auditor { void audit(); }"}];function h(){return e.jsxs("div",{className:"space-y-12 px-4 md:px-8 py-8 text-slate-200 bg-slate-900 min-h-screen",children:[e.jsxs("header",{className:"space-y-4 border-b border-slate-800 pb-6",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"px-3 py-1 bg-sky-500/10 text-sky-400 border border-sky-500/20 text-xs font-semibold rounded-full uppercase tracking-wider",children:"Module 009_001 · Topic 5"}),e.jsx("span",{className:"px-3 py-1 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-xs font-semibold rounded-full",children:"@FunctionalInterface"})]}),e.jsxs("h1",{className:"text-xl sm:text-2xl md:text-3xl font-bold text-white tracking-tight",children:["The ",e.jsx("code",{className:"text-emerald-400 font-mono",children:"@FunctionalInterface"})," Annotation: Compiler Validation & Safety"]}),e.jsxs("p",{className:"text-base md:text-lg text-slate-400 leading-relaxed max-w-4xl",children:["Apply defensive API design: using the ",e.jsx("code",{className:"text-emerald-300 font-mono",children:"@FunctionalInterface"})," annotation to guard SAM contracts against inadvertent multi-method modifications at compile time."]})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsxs("h2",{className:"text-2xl font-bold text-emerald-400 flex items-center gap-2",children:[e.jsx("span",{children:"💻"})," Hands-On Java Demo Code"]}),e.jsx(t,{fileModule:r,title:"StudentDiscountPolicy.java",highlightLines:[7,8,10,12,13]})]}),e.jsx("section",{className:"space-y-4",children:e.jsx(a,{title:"@FunctionalInterface FAQs",questions:c})}),e.jsx("section",{className:"space-y-4",children:e.jsx(n,{content:i,title:"Module 009_001 Topic 5: @FunctionalInterface Annotation",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Printable Note",downloadFileName:"009_001_topic5_functional_interface_annotation_note.txt"})}),e.jsx(o,{note:"Always put '@FunctionalInterface' on your custom functional interfaces! Just like '@Override' guards methods, '@FunctionalInterface' stops any junior teammate from adding a second method that breaks 500 lambda expressions across your project! — Sukanta Hui"})]})}export{h as default};
