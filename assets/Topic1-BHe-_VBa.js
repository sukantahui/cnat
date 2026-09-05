import{j as e}from"./vendor-react-core-Doz9nIC6.js";import{J as t}from"./JavaFileLoader-BfBG3xz_.js";import{F as n}from"./FAQTemplate-BHhlgA96.js";import{P as r}from"./PlainTextPrint-C08xhKA4.js";import{T as a}from"./TeacherSukantaHui-DerPxfxp.js";import"./JavaCodeBlock-BwsLxS3r.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-CH1iX9C8.js";const o=`/**\r
 * Java Core Tutorial - Module 004_001: Exception Hierarchy\r
 * Topic 1: The Java Exception Hierarchy: java.lang.Throwable, Error & Exception\r
 * Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
 */\r
\r
package com.coderaccotax.javatutorial.exceptions;\r
\r
public class ThrowableHierarchyTaxonomyDemo {\r
\r
    public static void main(String[] args) {\r
        System.out.println("==========================================================================");\r
        System.out.println(" TOPIC 1: THE java.lang.Throwable HIERARCHY - BARRACKPORE");\r
        System.out.println("==========================================================================\\n");\r
\r
        System.out.println(">>> THE COMPLETE JAVA EXCEPTION HIERARCHY TREE:");\r
        System.out.println();\r
        System.out.println("                     Object");\r
        System.out.println("                        |");\r
        System.out.println("                java.lang.Throwable  (Root of all errors & exceptions)");\r
        System.out.println("                   /          \\\\");\r
        System.out.println("                  /            \\\\");\r
        System.out.println("         java.lang.Error    java.lang.Exception");\r
        System.out.println("          (Fatal JVM faults)       /         \\\\");\r
        System.out.println("                                  /           \\\\");\r
        System.out.println("                         CHECKED EXCEPTIONS   RuntimeException");\r
        System.out.println("                         (IOException,         (UNCHECKED)");\r
        System.out.println("                          SQLException, etc.)  (NullPointerException,");\r
        System.out.println("                                                ArithmeticException)");\r
\r
        System.out.println("\\n>>> 3 CORE HIERARCHY RULES:");\r
        System.out.println("  1. ONLY subclasses of 'Throwable' can be thrown ('throw') or caught ('catch').");\r
        System.out.println("  2. 'Error' represents catastrophic JVM-level failures that applications should NEVER catch.");\r
        System.out.println("  3. 'Exception' represents recoverable conditions that applications CAN and SHOULD handle.");\r
\r
        System.out.println("\\n==========================================================================");\r
    }\r
}`,s=`================================================================================\r
JAVA CORE TUTORIAL - QUICK REVISION GUIDE\r
Module 004_001: Exception Hierarchy\r
Topic 1: Throwable Hierarchy Taxonomy\r
Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
================================================================================\r
\r
1. HIERARCHY BREAKDOWN:\r
   - 'Object' → 'Throwable' (Root).\r
   - Branch A: 'Error' (JVM hardware/RAM failure - unrecoverable).\r
   - Branch B: 'Exception' (Application conditions - recoverable).\r
     - Checked: Subclasses of Exception (compile-time enforced).\r
     - Unchecked: Subclasses of RuntimeException.\r
\r
================================================================================\r
Classroom Practice: Barrackpore Academy | Mentor: Sukanta Hui\r
================================================================================`,i=[{question:"What is the root class of the entire Java exception and error hierarchy?",shortAnswer:"'java.lang.Throwable'. Only instances of 'Throwable' (or any of its subclasses) can be thrown by the JVM or the 'throw' statement, and only 'Throwable' subclasses can be specified in a 'catch' clause.",explanation:"Throwable splits directly into two main branches: java.lang.Error and java.lang.Exception.",hint:"java.lang.Throwable is the ultimate superclass of Error and Exception.",level:"Beginner",codeExample:"public class MyCustomException extends Exception { ... } // Subclass of Throwable"}];function E(){return e.jsxs("div",{className:"space-y-12 px-4 md:px-8 py-8 text-slate-200 bg-slate-900 min-h-screen",children:[e.jsxs("header",{className:"space-y-4 border-b border-slate-800 pb-6",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"px-3 py-1 bg-sky-500/10 text-sky-400 border border-sky-500/20 text-xs font-semibold rounded-full uppercase tracking-wider",children:"Module 004_001 · Topic 1"}),e.jsx("span",{className:"px-3 py-1 bg-indigo-500/10 text-indigo-400 border border-indigo-500/20 text-xs font-semibold rounded-full",children:"Hierarchy Tree"})]}),e.jsxs("h1",{className:"text-xl sm:text-2xl md:text-3xl font-bold text-white tracking-tight",children:["The Java Exception Hierarchy: ",e.jsx("code",{className:"text-indigo-400 font-mono",children:"java.lang.Throwable"})," as Root Class"]}),e.jsxs("p",{className:"text-base md:text-lg text-slate-400 leading-relaxed max-w-4xl",children:["Master the complete object inheritance tree: understanding the separation between fatal JVM ",e.jsx("code",{className:"text-rose-400 font-mono",children:"Error"})," failures and application-level ",e.jsx("code",{className:"text-emerald-400 font-mono",children:"Exception"})," classes."]})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsxs("h2",{className:"text-2xl font-bold text-emerald-400 flex items-center gap-2",children:[e.jsx("span",{children:"💻"})," Hands-On Java Demo Code"]}),e.jsx(t,{fileModule:o,title:"ThrowableHierarchyTaxonomyDemo.java",highlightLines:[7,13,14,15,16,17,18,19,20]})]}),e.jsx("section",{className:"space-y-4",children:e.jsx(n,{title:"Throwable Hierarchy FAQs",questions:i})}),e.jsx("section",{className:"space-y-4",children:e.jsx(r,{content:s,title:"Module 004_001 Topic 1: Throwable Hierarchy",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Printable Note",downloadFileName:"004_001_topic1_throwable_hierarchy_note.txt"})}),e.jsx(a,{note:"Draw the Throwable tree in your notebook! Throwable splits into Error and Exception. Under Exception, everything is Checked EXCEPT RuntimeException and its subclasses! — Sukanta Hui"})]})}export{E as default};
