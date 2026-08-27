import{j as t}from"./vendor-react-core-Doz9nIC6.js";import{J as e}from"./JavaFileLoader-BfBG3xz_.js";import{F as a}from"./FAQTemplate-CkSqDH4B.js";import{P as n}from"./PlainTextPrint-C08xhKA4.js";import{T as r}from"./TeacherSukantaHui-CC0AKmkm.js";import"./JavaCodeBlock-BwsLxS3r.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-BtJHuk7w.js";const o=`/**\r
 * Java Core Tutorial - Module 009_001: Lambda Expressions & Lexical Scoping\r
 * Topic 4: Functional Interfaces: The Single Abstract Method (SAM) Contract\r
 * Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
 */\r
\r
package com.coderaccotax.javatutorial.functional;\r
\r
// 1. VALID FUNCTIONAL INTERFACE (Exactly ONE abstract method):\r
@FunctionalInterface\r
interface InvoiceValidator {\r
\r
    // THE SINGLE ABSTRACT METHOD (SAM):\r
    boolean validate(double invoiceAmount, String clientGst);\r
\r
    // DEFAULT METHODS DO NOT COUNT AGAINST SAM:\r
    default void printAuditHeader() {\r
        System.out.println("--- Barrackpore Tax Audit Header ---");\r
    }\r
\r
    // STATIC METHODS DO NOT COUNT AGAINST SAM:\r
    static String getRegulationVersion() {\r
        return "GST-ACT-2026-V4";\r
    }\r
\r
    // OBJECT CLASS METHOD OVERRIDES DO NOT COUNT AGAINST SAM:\r
    @Override\r
    boolean equals(Object obj);\r
}\r
\r
public class FunctionalInterfaceSamContractDemo {\r
\r
    public static void main(String[] args) {\r
        System.out.println("==========================================================================");\r
        System.out.println(" TOPIC 4: FUNCTIONAL INTERFACES & THE SAM RULE - BARRACKPORE");\r
        System.out.println("==========================================================================\\n");\r
\r
        // Implementing the SAM via a clean Lambda:\r
        InvoiceValidator validator = (amount, gst) -> amount > 0 && gst.startsWith("19"); // West Bengal GST code = 19\r
\r
        validator.printAuditHeader();\r
        boolean valid = validator.validate(150000.0, "19AAACB1234F1Z5");\r
        System.out.println(">>> Invoice Validation Result: " + (valid ? "✅ VALID WB INVOICE" : "❌ INVALID"));\r
        System.out.println("  Regulation Version: " + InvoiceValidator.getRegulationVersion());\r
\r
        System.out.println("\\n==========================================================================");\r
    }\r
}`,s=`================================================================================\r
JAVA CORE TUTORIAL - QUICK REVISION GUIDE\r
Module 009_001: Lambda Expressions & Lexical Scoping\r
Topic 4: Functional Interface SAM Contract\r
Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
================================================================================\r
\r
1. FUNCTIONAL INTERFACE (SAM):\r
   - Exactly ONE abstract method (SAM: Single Abstract Method).\r
   - Can have unlimited 'default' methods.\r
   - Can have unlimited 'static' methods.\r
   - Public 'java.lang.Object' methods (equals, hashCode) do not count as SAM.\r
   - Acts as the target type for all lambda expressions.\r
\r
================================================================================\r
Classroom Practice: Barrackpore Academy | Mentor: Sukanta Hui\r
================================================================================`,i=[{question:"What is a 'Functional Interface' in Java and what types of methods are permitted inside it?",shortAnswer:"A 'Functional Interface' (Single Abstract Method / SAM interface) is an interface that declares EXACTLY ONE abstract method. In addition to that single abstract method, a Functional Interface may contain: (1) any number of 'default' methods, (2) any number of 'static' methods, and (3) abstract method declarations that match public methods of 'java.lang.Object' (such as 'equals()', 'hashCode()', or 'toString()'), as these are automatically fulfilled by all Java classes.",explanation:"Comprehensive rule definition of Functional Interfaces in Java 8.",hint:"Must have exactly 1 abstract method; can have unlimited default, static, and Object class methods.",level:"Intermediate",codeExample:"@FunctionalInterface interface Transformer<T, R> { R transform(T input); default void log() {} }"}];function A(){return t.jsxs("div",{className:"space-y-12 px-4 md:px-8 py-8 text-slate-200 bg-slate-900 min-h-screen",children:[t.jsxs("header",{className:"space-y-4 border-b border-slate-800 pb-6",children:[t.jsxs("div",{className:"flex items-center gap-3",children:[t.jsx("span",{className:"px-3 py-1 bg-sky-500/10 text-sky-400 border border-sky-500/20 text-xs font-semibold rounded-full uppercase tracking-wider",children:"Module 009_001 · Topic 4"}),t.jsx("span",{className:"px-3 py-1 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-xs font-semibold rounded-full",children:"SAM Contract"})]}),t.jsxs("h1",{className:"text-3xl md:text-4xl font-extrabold text-white tracking-tight",children:["Functional Interfaces: The ",t.jsx("code",{className:"text-emerald-400 font-mono",children:"Single Abstract Method (SAM)"})," Contract"]}),t.jsx("p",{className:"text-base md:text-lg text-slate-400 leading-relaxed max-w-4xl",children:"Master SAM interface architecture: analyzing the single abstract method rule, default and static method allowances, and Object method overrides."})]}),t.jsxs("section",{className:"space-y-4",children:[t.jsxs("h2",{className:"text-2xl font-bold text-emerald-400 flex items-center gap-2",children:[t.jsx("span",{children:"💻"})," Hands-On Java Demo Code"]}),t.jsx(e,{fileModule:o,title:"FunctionalInterfaceSamContractDemo.java",highlightLines:[7,8,11,14,15,19,20,24,25,34,35]})]}),t.jsx("section",{className:"space-y-4",children:t.jsx(a,{title:"SAM Contract FAQs",questions:i})}),t.jsx("section",{className:"space-y-4",children:t.jsx(n,{content:s,title:"Module 009_001 Topic 4: SAM Contract",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Printable Note",downloadFileName:"009_001_topic4_sam_contract_note.txt"})}),t.jsx(r,{note:"The SAM rule is very strict: exactly ONE abstract method! You can add 50 default methods or static utility methods, but there can only ever be ONE abstract method for a lambda to bind to! — Sukanta Hui"})]})}export{A as default};
