import{j as e}from"./vendor-react-core-Doz9nIC6.js";import{J as n}from"./JavaFileLoader-BfBG3xz_.js";import{F as t}from"./FAQTemplate-BHhlgA96.js";import{P as a}from"./PlainTextPrint-C08xhKA4.js";import{T as r}from"./TeacherSukantaHui-DerPxfxp.js";import"./JavaCodeBlock-BwsLxS3r.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-CH1iX9C8.js";const s=`/**\r
 * Java Core Tutorial - Module 003_008: Java Enums & Specialized Methods\r
 * Topic 10: Enums Implementing Interfaces: Extensible Enums & Strategy Pattern\r
 * Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
 */\r
\r
package com.coderaccotax.javatutorial.enums;\r
\r
// Common Interface:\r
interface TaxAssessmentStrategy {\r
    double computeTax(double taxableIncome);\r
}\r
\r
// Enum implementing interface for Indian Income Tax Regimes:\r
public enum IncomeTaxRegime implements TaxAssessmentStrategy {\r
    OLD_REGIME {\r
        @Override\r
        public double computeTax(double taxableIncome) {\r
            // Allows 80C deductions, higher progressive slab rate:\r
            return taxableIncome * 0.20;\r
        }\r
    },\r
    NEW_REGIME {\r
        @Override\r
        public double computeTax(double taxableIncome) {\r
            // Lower progressive rate, no 80C deductions:\r
            return taxableIncome * 0.15;\r
        }\r
    };\r
\r
    public static void main(String[] args) {\r
        System.out.println("==========================================================================");\r
        System.out.println(" TOPIC 10: ENUMS IMPLEMENTING INTERFACES - BARRACKPORE");\r
        System.out.println("==========================================================================\\n");\r
\r
        double traineeIncome = 800000.0; // 8 Lakhs INR\r
\r
        System.out.println(">>> Calculating Tax via Polymorphic TaxAssessmentStrategy Interface:");\r
        for (TaxAssessmentStrategy strategy : IncomeTaxRegime.values()) {\r
            double tax = strategy.computeTax(traineeIncome);\r
            System.out.printf("  %s -> Tax Payable: %.2f INR%n", strategy, tax);\r
        }\r
\r
        System.out.println("\\n>>> EXTENSIBLE STRATEGY PATTERN:");\r
        System.out.println("  By implementing interfaces, enums can be passed polymorphically to any method expecting that interface!");\r
\r
        System.out.println("\\n==========================================================================");\r
    }\r
}`,i=`================================================================================\r
JAVA CORE TUTORIAL - QUICK REVISION GUIDE\r
Module 003_008: Java Enums & Specialized Methods\r
Topic 10: Enums Implementing Interfaces\r
Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
================================================================================\r
\r
1. INTERFACE IMPLEMENTATION:\r
   - 'public enum MyEnum implements MyInterface'\r
   - Can implement multiple interfaces.\r
   - Enables Strategy Pattern with enums.\r
   - Polymorphically assignable to interface reference types.\r
\r
================================================================================\r
Classroom Practice: Barrackpore Academy | Mentor: Sukanta Hui\r
================================================================================`,l=[{question:"Why does Java permit Enums to implement interfaces even though they cannot extend classes?",shortAnswer:"Implementing interfaces allows enums to participate in polymorphic hierarchies and the Strategy Design Pattern. It enables passing enum constants to generic APIs expecting an interface type (e.g. 'TaxStrategy'), achieving extensible behavior without violating the single-class-inheritance rule.",explanation:"Effective Java Item 38: Emulate extensible enums with interfaces.",hint:"Allows enums to participate polymorphically in design patterns and generic APIs.",level:"Intermediate",codeExample:"public enum MathOp implements BinaryOperation { ADD, SUBTRACT }"}];function h(){return e.jsxs("div",{className:"space-y-12 px-4 md:px-8 py-8 text-slate-200 bg-slate-900 min-h-screen",children:[e.jsxs("header",{className:"space-y-4 border-b border-slate-800 pb-6",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"px-3 py-1 bg-sky-500/10 text-sky-400 border border-sky-500/20 text-xs font-semibold rounded-full uppercase tracking-wider",children:"Module 003_008 · Topic 10"}),e.jsx("span",{className:"px-3 py-1 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-xs font-semibold rounded-full",children:"Interface Extensibility"})]}),e.jsxs("h1",{className:"text-xl sm:text-2xl md:text-3xl font-bold text-white tracking-tight",children:["Enums Implementing Interfaces: Extensible Enums & The ",e.jsx("code",{className:"text-emerald-400 font-mono",children:"Strategy Pattern"})]}),e.jsx("p",{className:"text-base md:text-lg text-slate-400 leading-relaxed max-w-4xl",children:"Build extensible strategy engines: implementing interfaces across enum constants to enable polymorphic assignment and pluggable tax calculation rules."})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsxs("h2",{className:"text-2xl font-bold text-emerald-400 flex items-center gap-2",children:[e.jsx("span",{children:"💻"})," Hands-On Java Demo Code"]}),e.jsx(n,{fileModule:s,title:"IncomeTaxRegime.java",highlightLines:[7,12,13,14,19,20,31,32]})]}),e.jsx("section",{className:"space-y-4",children:e.jsx(t,{title:"Interface Implementation FAQs",questions:l})}),e.jsx("section",{className:"space-y-4",children:e.jsx(a,{content:i,title:"Module 003_008 Topic 10: Enums Implementing Interfaces",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Printable Note",downloadFileName:"003_008_topic10_enums_implementing_interfaces_note.txt"})}),e.jsx(r,{note:"If you need extensible enums (where different modules can add new operations), have an interface like 'Operation' and let different enums implement it! This is pure Effective Java elegance! — Sukanta Hui"})]})}export{h as default};
