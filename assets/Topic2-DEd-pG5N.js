import{j as e}from"./vendor-react-core-Doz9nIC6.js";import{J as n}from"./JavaFileLoader-BfBG3xz_.js";import{F as t}from"./FAQTemplate-BHhlgA96.js";import{P as r}from"./PlainTextPrint-C08xhKA4.js";import{T as a}from"./TeacherSukantaHui-DerPxfxp.js";import"./JavaCodeBlock-BwsLxS3r.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-CH1iX9C8.js";const i=`/**\r
 * Java Core Tutorial - Module 002_011: SOLID Object-Oriented Design Principles in Java\r
 * Topic 2: Refactoring Monolithic Classes into Cohesive Single-Purpose Services\r
 * Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
 */\r
\r
package com.coderaccotax.javatutorial.solid;\r
\r
public class MonolithicRefactoringCaseStudyDemo {\r
\r
    // 1. DTO / Model Layer\r
    public static class Invoice {\r
        public String invoiceNumber;\r
        public double rawAmount;\r
        public Invoice(String num, double amount) { this.invoiceNumber = num; this.rawAmount = amount; }\r
    }\r
\r
    // 2. Calculation Service (Financial Business Logic)\r
    public static class TaxCalculatorService {\r
        public double computeGst(double amount) {\r
            return amount * 0.18; // 18% GST in Barrackpore\r
        }\r
    }\r
\r
    // 3. Document Generator Service (Rendering Engine)\r
    public static class InvoicePdfGenerator {\r
        public void generatePdf(Invoice inv, double tax) {\r
            System.out.printf("  [PDF ENGINE] Generated PDF for %s: Total = ₹%.2f (Base ₹%.2f + GST ₹%.2f)\\n",\r
                    inv.invoiceNumber, (inv.rawAmount + tax), inv.rawAmount, tax);\r
        }\r
    }\r
\r
    public static void main(String[] args) {\r
        System.out.println("==========================================================================");\r
        System.out.println(" TOPIC 2: REFACTORING MONOLITHIC CLASSES - BARRACKPORE");\r
        System.out.println("==========================================================================\\n");\r
\r
        Invoice inv = new Invoice("INV-BKP-2026-001", 10000.0);\r
        TaxCalculatorService taxService = new TaxCalculatorService();\r
        InvoicePdfGenerator pdfService = new InvoicePdfGenerator();\r
\r
        double gst = taxService.computeGst(inv.rawAmount);\r
        pdfService.generatePdf(inv, gst);\r
\r
        System.out.println("\\n>>> Benefits of Refactoring:");\r
        System.out.println("  - Changing GST tax brackets only touches TaxCalculatorService.");\r
        System.out.println("  - Changing PDF layout formatting only touches InvoicePdfGenerator.");\r
\r
        System.out.println("\\n==========================================================================");\r
    }\r
}`,o=`================================================================================\r
JAVA CORE TUTORIAL - QUICK REVISION GUIDE\r
Module 002_011: SOLID Design Principles\r
Topic 2: Refactoring Monolithic Classes\r
Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
================================================================================\r
\r
1. REFACTORING WORKFLOW:\r
   - Identify disparate responsibilities (Compute, Format, Persist).\r
   - Extract into dedicated stateless service classes.\r
   - Compose services together in an orchestration coordinator.\r
\r
================================================================================\r
Classroom Practice: Barrackpore Academy | Mentor: Sukanta Hui\r
================================================================================`,s=[{question:"How does decomposing a monolithic invoice class into TaxCalculatorService and InvoicePdfGenerator protect against regressions?",shortAnswer:"Because modifications to tax law regulations are completely isolated inside TaxCalculatorService without risking formatting bugs in InvoicePdfGenerator, and vice versa.",explanation:"Isolating concerns minimizes the blast radius of code changes.",hint:"Separates tax computation changes from PDF layout rendering changes.",level:"Intermediate",codeExample:"TaxCalculatorService calc = new TaxCalculatorService();"}];function f(){return e.jsxs("div",{className:"space-y-12 px-4 md:px-8 py-8 text-slate-200 bg-slate-900 min-h-screen",children:[e.jsx("style",{children:`
          @keyframes fadeIn {
            from { opacity: 0; transform: translateY(8px); }
            to { opacity: 1; transform: translateY(0); }
          }
          .animate-fade-in { animation: fadeIn 0.5s ease-out forwards; }
        `}),e.jsxs("header",{className:"space-y-4 border-b border-slate-800 pb-6 animate-fade-in",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"px-3 py-1 bg-sky-500/10 text-sky-400 border border-sky-500/20 text-xs font-semibold rounded-full uppercase tracking-wider",children:"Module 002_011 · Topic 2"}),e.jsx("span",{className:"px-3 py-1 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-xs font-semibold rounded-full",children:"Refactoring Case Study"})]}),e.jsx("h1",{className:"text-xl sm:text-2xl md:text-3xl font-bold text-white tracking-tight",children:"Refactoring Monolithic Classes into Cohesive Single-Purpose Services"}),e.jsx("p",{className:"text-base md:text-lg text-slate-400 leading-relaxed max-w-4xl",children:"Walk through an end-to-end enterprise refactoring case study: carving a monstrous 1000-line invoice class into cohesive, testable, and isolated micro-services."})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsxs("h2",{className:"text-2xl font-bold text-emerald-400 flex items-center gap-2",children:[e.jsx("span",{children:"💻"})," Hands-On Java Demo Code"]}),e.jsx(n,{fileModule:i,title:"MonolithicRefactoringCaseStudyDemo.java",highlightLines:[11,17,24,38,39]})]}),e.jsx("section",{className:"space-y-4",children:e.jsx(t,{title:"Refactoring FAQs",questions:s})}),e.jsx("section",{className:"space-y-4",children:e.jsx(r,{content:o,title:"Module 002_011 Topic 2: Refactoring Monolithic Classes",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Printable Note",downloadFileName:"002_011_topic2_refactoring_note.txt"})}),e.jsx(a,{note:"When a class has more than 300 lines, start looking for hidden services trying to get out! Break calculation, validation, and printing into small, happy classes. — Sukanta Hui"})]})}export{f as default};
