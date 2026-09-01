import{j as e}from"./vendor-react-core-Doz9nIC6.js";import{J as r}from"./JavaFileLoader-BfBG3xz_.js";import{F as t}from"./FAQTemplate-BHhlgA96.js";import{P as i}from"./PlainTextPrint-C08xhKA4.js";import{T as n}from"./TeacherSukantaHui-CEPuAfsb.js";import"./JavaCodeBlock-BwsLxS3r.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-DGCamHnX.js";const a=`/**\r
 * Java Core Tutorial - Module 002_006: Polymorphism, Method Overriding & Dynamic Method Dispatch\r
 * Topic 5: Access Modifier Rules in Overriding: Cannot Assign Stricter Visibility\r
 * Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
 */\r
\r
package com.coderaccotax.javatutorial.polymorphism;\r
\r
public class AccessModifierOverridingRulesDemo {\r
\r
    public static class BaseReportingService {\r
        // Protected access in Superclass\r
        protected void generateAuditReport() {\r
            System.out.println("  [BASE REPORT] Protected audit report generated.");\r
        }\r
    }\r
\r
    public static class ExtendedReportingService extends BaseReportingService {\r
        // VALID: Child can maintain SAME access (protected) or WIDEN access (public):\r
        @Override\r
        public void generateAuditReport() {\r
            System.out.println("  [CHILD REPORT] Public widened audit report generated for global export.");\r
        }\r
\r
        // ILLEGAL: Attempting to NARROW access (e.g. private or package-private):\r
        // @Override\r
        // private void generateAuditReport() {} // COMPILE ERROR: "cannot assign weaker access privileges"\r
    }\r
\r
    public static void main(String[] args) {\r
        System.out.println("==========================================================================");\r
        System.out.println(" TOPIC 5: ACCESS MODIFIER OVERRIDING RULES - BARRACKPORE");\r
        System.out.println("==========================================================================\\n");\r
\r
        BaseReportingService service = new ExtendedReportingService();\r
        service.generateAuditReport();\r
\r
        System.out.println("\\n>>> Visibility Hierarchy Rule:");\r
        System.out.println("  private < default (package) < protected < public");\r
        System.out.println("  - Child method CAN stay same or become WIDER (e.g. protected -> public).");\r
        System.out.println("  - Child method CANNOT become STRICTER (e.g. protected -> private is FORBIDDEN).");\r
\r
        System.out.println("\\n==========================================================================");\r
    }\r
}`,s=`================================================================================\r
JAVA CORE TUTORIAL - QUICK REVISION GUIDE\r
Module 002_006: Polymorphism, Overriding & Dynamic Method Dispatch\r
Topic 5: Access Modifier Overriding Rules\r
Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
================================================================================\r
\r
1. VISIBILITY RULES IN OVERRIDING:\r
   - Parent 'public' → Child MUST be 'public'.\r
   - Parent 'protected' → Child can be 'protected' or 'public'.\r
   - Parent 'default' → Child can be 'default', 'protected', or 'public'.\r
   - Stricter access in child causes: "attempting to assign weaker access privileges".\r
\r
================================================================================\r
Classroom Practice: Barrackpore Academy | Mentor: Sukanta Hui\r
================================================================================`,o=[{question:"What is the access modifier rule when overriding a method in Java?",shortAnswer:"An overriding method in a subclass CANNOT assign stricter (weaker/narrower) access privileges, but CAN maintain the same or provide broader (wider) access.",explanation:"If parent is protected, child can be protected or public (cannot be default or private). This preserves the Liskov Substitution Principle.",hint:"Child can widen or keep same access; child CANNOT narrow access.",level:"Intermediate",codeExample:`// Parent: protected void show()
// Child: public void show() // Valid!`}];function g(){return e.jsxs("div",{className:"space-y-12 px-4 md:px-8 py-8 text-slate-200 bg-slate-900 min-h-screen",children:[e.jsx("style",{children:`
          @keyframes fadeIn {
            from { opacity: 0; transform: translateY(8px); }
            to { opacity: 1; transform: translateY(0); }
          }
          .animate-fade-in { animation: fadeIn 0.5s ease-out forwards; }
        `}),e.jsxs("header",{className:"space-y-4 border-b border-slate-800 pb-6 animate-fade-in",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"px-3 py-1 bg-sky-500/10 text-sky-400 border border-sky-500/20 text-xs font-semibold rounded-full uppercase tracking-wider",children:"Module 002_006 · Topic 5"}),e.jsx("span",{className:"px-3 py-1 bg-amber-500/10 text-amber-400 border border-amber-500/20 text-xs font-semibold rounded-full",children:"Visibility Hierarchy"})]}),e.jsx("h1",{className:"text-xl sm:text-2xl md:text-3xl font-bold text-white tracking-tight",children:"Access Modifier Rules in Overriding: Maintaining or Widening Privileges"}),e.jsxs("p",{className:"text-base md:text-lg text-slate-400 leading-relaxed max-w-4xl",children:["Master the visibility rules of method overriding: why child methods can expand access from ",e.jsx("code",{className:"text-amber-300 font-mono",children:"protected"})," to ",e.jsx("code",{className:"text-emerald-300 font-mono",children:"public"}),", but can never restrict privileges."]})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsxs("h2",{className:"text-2xl font-bold text-emerald-400 flex items-center gap-2",children:[e.jsx("span",{children:"💻"})," Hands-On Java Demo Code"]}),e.jsx(r,{fileModule:a,title:"AccessModifierOverridingRulesDemo.java",highlightLines:[12,19,20,31]})]}),e.jsx("section",{className:"space-y-4",children:e.jsx(t,{title:"Access Modifier Overriding FAQs",questions:o})}),e.jsx("section",{className:"space-y-4",children:e.jsx(i,{content:s,title:"Module 002_006 Topic 5: Access Modifier Overriding Rules",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Printable Note",downloadFileName:"002_006_topic5_access_overriding_note.txt"})}),e.jsx(n,{note:"If a parent method promises protected access to the world, the child cannot suddenly lock the door and make it private! You can only keep the door the same or open it wider. — Sukanta Hui"})]})}export{g as default};
