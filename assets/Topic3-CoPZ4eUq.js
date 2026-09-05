import{j as e}from"./vendor-react-core-Doz9nIC6.js";import{J as r}from"./JavaFileLoader-BfBG3xz_.js";import{F as t}from"./FAQTemplate-BHhlgA96.js";import{P as n}from"./PlainTextPrint-C08xhKA4.js";import{T as a}from"./TeacherSukantaHui-DerPxfxp.js";import"./JavaCodeBlock-BwsLxS3r.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-CH1iX9C8.js";const i=`/**\r
 * Java Core Tutorial - Module 002_006: Polymorphism, Method Overriding & Dynamic Method Dispatch\r
 * Topic 3: Rules of Method Overriding: Identical Method Signature\r
 * Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
 */\r
\r
package com.coderaccotax.javatutorial.polymorphism;\r
\r
public class OverridingRulesSignatureDemo {\r
\r
    public static class ParentService {\r
        // Method to override\r
        public void processTransaction(int transactionId, double amount) {\r
            System.out.printf("  [PARENT] Base processing of TXN #%d: ₹%.2f\\n", transactionId, amount);\r
        }\r
    }\r
\r
    public static class ChildService extends ParentService {\r
        // 1. MUST have identical method name: 'processTransaction'\r
        // 2. MUST have identical parameter types in identical order: '(int, double)'\r
        @Override\r
        public void processTransaction(int transactionId, double amount) {\r
            System.out.printf("  [CHILD SPECIALIZED] Verified & encrypted processing of TXN #%d: ₹%.2f\\n",\r
                    transactionId, amount);\r
        }\r
\r
        // Overloaded, NOT Overridden (Different parameter types):\r
        public void processTransaction(String transactionCode) {\r
            System.out.println("  [OVERLOADED] Processed via String code: " + transactionCode);\r
        }\r
    }\r
\r
    public static void main(String[] args) {\r
        System.out.println("==========================================================================");\r
        System.out.println(" TOPIC 3: METHOD OVERRIDING SIGNATURE RULES - BARRACKPORE");\r
        System.out.println("==========================================================================\\n");\r
\r
        ParentService service = new ChildService();\r
        service.processTransaction(9901, 15000.0); // Dispatches overridden method!\r
\r
        System.out.println("\\n==========================================================================");\r
    }\r
}`,o=`================================================================================\r
JAVA CORE TUTORIAL - QUICK REVISION GUIDE\r
Module 002_006: Polymorphism, Overriding & Dynamic Method Dispatch\r
Topic 3: Rules of Method Overriding\r
Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
================================================================================\r
\r
1. OVERRIDING SIGNATURE RULES:\r
   - Identical method name.\r
   - Identical parameter count, types, and sequence.\r
   - Return type must be identical or a subtype (Covariant Return).\r
\r
================================================================================\r
Classroom Practice: Barrackpore Academy | Mentor: Sukanta Hui\r
================================================================================`,s=[{question:"What constitutes an identical method signature for method overriding in Java?",shortAnswer:"The method name and parameter list (parameter count, data types, and parameter ordering) must match exactly.",explanation:"If parameter types or count differ, the method is overloaded rather than overridden.",hint:"Exact match on method name and parameter types in identical order.",level:"Beginner",codeExample:"@Override void run(int a, String b) {}"}];function g(){return e.jsxs("div",{className:"space-y-12 px-4 md:px-8 py-8 text-slate-200 bg-slate-900 min-h-screen",children:[e.jsx("style",{children:`
          @keyframes fadeIn {
            from { opacity: 0; transform: translateY(8px); }
            to { opacity: 1; transform: translateY(0); }
          }
          .animate-fade-in { animation: fadeIn 0.5s ease-out forwards; }
        `}),e.jsxs("header",{className:"space-y-4 border-b border-slate-800 pb-6 animate-fade-in",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"px-3 py-1 bg-sky-500/10 text-sky-400 border border-sky-500/20 text-xs font-semibold rounded-full uppercase tracking-wider",children:"Module 002_006 · Topic 3"}),e.jsx("span",{className:"px-3 py-1 bg-amber-500/10 text-amber-400 border border-amber-500/20 text-xs font-semibold rounded-full",children:"Signature Rules"})]}),e.jsx("h1",{className:"text-xl sm:text-2xl md:text-3xl font-bold text-white tracking-tight",children:"Rules of Method Overriding: Identical Method Signatures"}),e.jsx("p",{className:"text-base md:text-lg text-slate-400 leading-relaxed max-w-4xl",children:"Master the exact compiler laws for overriding: matching parameter lists, method names, and distinguishing true overriding from accidental overloading."})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsxs("h2",{className:"text-2xl font-bold text-emerald-400 flex items-center gap-2",children:[e.jsx("span",{children:"💻"})," Hands-On Java Demo Code"]}),e.jsx(r,{fileModule:i,title:"OverridingRulesSignatureDemo.java",highlightLines:[12,19,26,35]})]}),e.jsx("section",{className:"space-y-4",children:e.jsx(t,{title:"Overriding Signature Rules FAQs",questions:s})}),e.jsx("section",{className:"space-y-4",children:e.jsx(n,{content:o,title:"Module 002_006 Topic 3: Overriding Signature Rules",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Printable Note",downloadFileName:"002_006_topic3_overriding_rules_note.txt"})}),e.jsx(a,{note:"If you change even one parameter type from int to long, you didn't override the method—you overloaded it! Always use @Override to let the compiler check for you. — Sukanta Hui"})]})}export{g as default};
