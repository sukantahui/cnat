import{j as e}from"./vendor-react-core-Doz9nIC6.js";import{J as t}from"./JavaFileLoader-BfBG3xz_.js";import{F as n}from"./FAQTemplate-BHhlgA96.js";import{P as r}from"./PlainTextPrint-C08xhKA4.js";import{T as i}from"./TeacherSukantaHui-DDN87fI5.js";import"./JavaCodeBlock-BwsLxS3r.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-DEsnU7fn.js";const a=`/**\r
 * Java Core Tutorial - Module 004_003: Throw, Throws & Custom Exceptions\r
 * Topic 7: Creating Custom Checked Exceptions: Extending java.lang.Exception\r
 * Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
 */\r
\r
package com.coderaccotax.javatutorial.exceptions;\r
\r
// Custom CHECKED Exception (Extends java.lang.Exception):\r
public class GSTINValidationException extends Exception {\r
\r
    private final String invalidGstin;\r
\r
    public GSTINValidationException(String message, String gstin) {\r
        super(message);\r
        this.invalidGstin = gstin;\r
    }\r
\r
    public String getInvalidGstin() { return invalidGstin; }\r
}\r
\r
class GstBillingSystemDemo {\r
\r
    // Checked exception MUST be declared in 'throws' signature:\r
    public static void generateAccoTaxInvoice(String gstin, double invoiceAmount)\r
            throws GSTINValidationException {\r
\r
        if (gstin == null || gstin.length() != 15) {\r
            throw new GSTINValidationException("Indian GSTIN must be exactly 15 alphanumeric characters!", gstin);\r
        }\r
\r
        System.out.printf("  [INVOICE CREATED] GSTIN: %s | Amount: %.2f INR%n", gstin, invoiceAmount);\r
    }\r
\r
    public static void main(String[] args) {\r
        System.out.println("==========================================================================");\r
        System.out.println(" TOPIC 7: CUSTOM CHECKED EXCEPTIONS - BARRACKPORE");\r
        System.out.println("==========================================================================\\n");\r
\r
        System.out.println(">>> 1. Valid GST Invoice Generation:");\r
        try {\r
            generateAccoTaxInvoice("19AAAAA0000A1Z5", 45000.0);\r
        } catch (GSTINValidationException e) {\r
            System.out.println("  [ERROR] " + e.getMessage());\r
        }\r
\r
        System.out.println("\\n>>> 2. Triggering Custom Checked Exception (Caller MUST handle):");\r
        try {\r
            generateAccoTaxInvoice("INVALID_GST", 12000.0);\r
        } catch (GSTINValidationException e) {\r
            System.out.println("  [CHECKED EXCEPTION CAUGHT] " + e.getMessage());\r
            System.out.println("  [CORRECTION AUDIT] Rejected GSTIN: " + e.getInvalidGstin());\r
        }\r
\r
        System.out.println("\\n==========================================================================");\r
    }\r
}`,o=`================================================================================\r
JAVA CORE TUTORIAL - QUICK REVISION GUIDE\r
Module 004_003: Throw, Throws & Custom Exceptions\r
Topic 7: Custom Checked Exceptions\r
Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
================================================================================\r
\r
1. CUSTOM CHECKED SYNTAX:\r
   - 'public class MyCheckedException extends Exception'\r
   - Compiler enforces 'catch or specify'.\r
   - Mandatory 'throws' in throwing method signatures.\r
   - Used when the caller CAN and MUST take corrective recovery action.\r
\r
================================================================================\r
Classroom Practice: Barrackpore Academy | Mentor: Sukanta Hui\r
================================================================================`,s=[{question:"How do you create a custom Checked Exception in Java and what compiler requirements does it enforce?",shortAnswer:"Create a class that directly extends 'java.lang.Exception' (or any checked subclass). Any method that throws this exception MUST declare it in its 'throws' signature clause, and all callers are strictly forced by the compiler to handle it with 'try-catch' or propagate it with 'throws'.",explanation:"Forces callers to acknowledge and handle recoverable business conditions.",hint:"Extend Exception; compiler enforces catch-or-specify mandate.",level:"Beginner",codeExample:"public class CustomCheckedEx extends Exception { public CustomCheckedEx(String m){super(m);} }"}];function g(){return e.jsxs("div",{className:"space-y-12 px-4 md:px-8 py-8 text-slate-200 bg-slate-900 min-h-screen",children:[e.jsxs("header",{className:"space-y-4 border-b border-slate-800 pb-6",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"px-3 py-1 bg-sky-500/10 text-sky-400 border border-sky-500/20 text-xs font-semibold rounded-full uppercase tracking-wider",children:"Module 004_003 · Topic 7"}),e.jsx("span",{className:"px-3 py-1 bg-amber-500/10 text-amber-400 border border-amber-500/20 text-xs font-semibold rounded-full",children:"Checked Pattern"})]}),e.jsxs("h1",{className:"text-xl sm:text-2xl md:text-3xl font-bold text-white tracking-tight",children:["Creating Custom Checked Exceptions: Extending ",e.jsx("code",{className:"text-amber-400 font-mono",children:"java.lang.Exception"})]}),e.jsx("p",{className:"text-base md:text-lg text-slate-400 leading-relaxed max-w-4xl",children:"Enforce critical business validation: creating custom checked exceptions that compel calling services to verify tax compliance and correct invalid GST numbers."})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsxs("h2",{className:"text-2xl font-bold text-emerald-400 flex items-center gap-2",children:[e.jsx("span",{children:"💻"})," Hands-On Java Demo Code"]}),e.jsx(t,{fileModule:a,title:"GSTINValidationException.java",highlightLines:[7,9,11,12,13,20,21,23,24]})]}),e.jsx("section",{className:"space-y-4",children:e.jsx(n,{title:"Custom Checked FAQs",questions:s})}),e.jsx("section",{className:"space-y-4",children:e.jsx(r,{content:o,title:"Module 004_003 Topic 7: Custom Checked Exceptions",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Printable Note",downloadFileName:"004_003_topic7_custom_checked_exceptions_note.txt"})}),e.jsx(i,{note:"If a user enters an invalid GST number, our AccoTax accounting engine throws GSTINValidationException (Checked) so the UI form is forced to highlight the input field and prompt the user to re-enter it! — Sukanta Hui"})]})}export{g as default};
