import{j as e}from"./vendor-react-core-Doz9nIC6.js";import{J as t}from"./JavaFileLoader-BfBG3xz_.js";import{F as a}from"./FAQTemplate-BHhlgA96.js";import{P as r}from"./PlainTextPrint-C08xhKA4.js";import{T as n}from"./TeacherSukantaHui-DerPxfxp.js";import"./JavaCodeBlock-BwsLxS3r.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-CH1iX9C8.js";const i=`/**\r
 * Java Core Tutorial - Module 002_008: Interfaces, Default/Static Methods & Multiple Inheritance\r
 * Topic 10: Java 9 Evolution: 'private' & 'private static' Methods in Interfaces\r
 * Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
 */\r
\r
package com.coderaccotax.javatutorial.interfaces;\r
\r
public class PrivateInterfaceMethodsDemo {\r
\r
    public interface DatabaseAuditor {\r
\r
        default void auditInsert(String table) {\r
            logInternal("INSERT", table); // Reusing private helper\r
        }\r
\r
        default void auditUpdate(String table) {\r
            logInternal("UPDATE", table); // Reusing private helper\r
        }\r
\r
        // JAVA 9 PRIVATE METHOD: Encapsulates shared helper logic for default methods!\r
        private void logInternal(String action, String table) {\r
            System.out.printf("  [INTERNAL PRIVATE AUDIT] Executed %s on table '%s' @ Barrackpore DB Node\\n",\r
                    action, table);\r
        }\r
\r
        // JAVA 9 PRIVATE STATIC METHOD: Helper for static interface methods\r
        static void printSecurityNotice() {\r
            formatNoticeHeader("GDPR & DPDP ACT COMPLIANT");\r
        }\r
\r
        private static void formatNoticeHeader(String title) {\r
            System.out.println("  *** [SECURITY NOTICE] " + title + " ***");\r
        }\r
    }\r
\r
    public static class ProductionDbAuditor implements DatabaseAuditor {}\r
\r
    public static void main(String[] args) {\r
        System.out.println("==========================================================================");\r
        System.out.println(" TOPIC 10: JAVA 9 PRIVATE INTERFACE METHODS - BARRACKPORE");\r
        System.out.println("==========================================================================\\n");\r
\r
        DatabaseAuditor auditor = new ProductionDbAuditor();\r
        auditor.auditInsert("student_records");\r
        auditor.auditUpdate("fee_receipts");\r
\r
        System.out.println();\r
        DatabaseAuditor.printSecurityNotice();\r
\r
        System.out.println("\\n==========================================================================");\r
    }\r
}`,o=`================================================================================\r
JAVA CORE TUTORIAL - QUICK REVISION GUIDE\r
Module 002_008: Interfaces, Default/Static Methods & Multiple Inheritance\r
Topic 10: Private Interface Methods (Java 9)\r
Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
================================================================================\r
\r
1. PRIVATE INTERFACE METHODS (JAVA 9):\r
   - 'private void helper()': Shared logic for 'default' methods.\r
   - 'private static void helper()': Shared logic for 'static' methods.\r
   - Completely invisible to implementing classes and external callers.\r
\r
================================================================================\r
Classroom Practice: Barrackpore Academy | Mentor: Sukanta Hui\r
================================================================================`,s=[{question:"Why were 'private' and 'private static' methods added to interfaces in Java 9?",shortAnswer:"To prevent code duplication across multiple default methods and static methods within the interface by encapsulating shared helper code privately without exposing internal implementation details to implementing classes or callers.",explanation:"Provides clean encapsulation and DRY (Don't Repeat Yourself) principle inside interfaces.",hint:"Encapsulates shared helper code for default and static methods without exposing it.",level:"Intermediate",codeExample:"private void helper() {} private static void staticHelper() {}"}];function x(){return e.jsxs("div",{className:"space-y-12 px-4 md:px-8 py-8 text-slate-200 bg-slate-900 min-h-screen",children:[e.jsx("style",{children:`
          @keyframes fadeIn {
            from { opacity: 0; transform: translateY(8px); }
            to { opacity: 1; transform: translateY(0); }
          }
          .animate-fade-in { animation: fadeIn 0.5s ease-out forwards; }
        `}),e.jsxs("header",{className:"space-y-4 border-b border-slate-800 pb-6 animate-fade-in",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"px-3 py-1 bg-sky-500/10 text-sky-400 border border-sky-500/20 text-xs font-semibold rounded-full uppercase tracking-wider",children:"Module 002_008 · Topic 10"}),e.jsx("span",{className:"px-3 py-1 bg-purple-500/10 text-purple-400 border border-purple-500/20 text-xs font-semibold rounded-full",children:"Java 9 Evolution"})]}),e.jsxs("h1",{className:"text-xl sm:text-2xl md:text-3xl font-bold text-white tracking-tight",children:["Java 9 Evolution: ",e.jsx("code",{className:"text-purple-400 font-mono",children:"private"})," & ",e.jsx("code",{className:"text-purple-400 font-mono",children:"private static"})," Methods in Interfaces"]}),e.jsx("p",{className:"text-base md:text-lg text-slate-400 leading-relaxed max-w-4xl",children:"Learn how Java 9 enables DRY code reuse inside interfaces: encapsulating shared boilerplate logic privately without polluting public API contracts."})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsxs("h2",{className:"text-2xl font-bold text-emerald-400 flex items-center gap-2",children:[e.jsx("span",{children:"💻"})," Hands-On Java Demo Code"]}),e.jsx(t,{fileModule:i,title:"PrivateInterfaceMethodsDemo.java",highlightLines:[12,16,20,26,30]})]}),e.jsx("section",{className:"space-y-4",children:e.jsx(a,{title:"Private Interface Methods FAQs",questions:s})}),e.jsx("section",{className:"space-y-4",children:e.jsx(r,{content:o,title:"Module 002_008 Topic 10: Private Interface Methods",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Printable Note",downloadFileName:"002_008_topic10_private_methods_note.txt"})}),e.jsx(n,{note:"If multiple default methods share the same logging or validation boilerplate, put it in a private helper method inside the interface. It keeps your interface clean! — Sukanta Hui"})]})}export{x as default};
