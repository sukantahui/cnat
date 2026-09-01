import{j as e}from"./vendor-react-core-Doz9nIC6.js";import{J as t}from"./JavaFileLoader-BfBG3xz_.js";import{F as n}from"./FAQTemplate-BHhlgA96.js";import{P as a}from"./PlainTextPrint-C08xhKA4.js";import{T as r}from"./TeacherSukantaHui-BaJcBHAy.js";import"./JavaCodeBlock-BwsLxS3r.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-8ao-0upJ.js";const s=`/**\r
 * Java Core Tutorial - Module 012_001: GoF Design Patterns\r
 * Topic 11: The Facade Pattern - Simplified Subsystem Entry\r
 * Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
 */\r
\r
package com.coderaccotax.javatutorial.patterns;\r
\r
public class FacadePatternDemo {\r
\r
    // 1. Complex Subsystem Components:\r
    public static class StudentRegistrationSystem {\r
        public void register(String name) { System.out.println("   [SUBSYSTEM 1]: Registered " + name); }\r
    }\r
\r
    public static class FeeBillingSystem {\r
        public void processFee(String name, double amount) { System.out.println("   [SUBSYSTEM 2]: Billed ₹" + amount + " for " + name); }\r
    }\r
\r
    public static class IdCardPrinter {\r
        public void printCard(String name) { System.out.println("   [SUBSYSTEM 3]: Printed RFID ID card for " + name); }\r
    }\r
\r
    public static class NotificationService {\r
        public void sendWelcomeSms(String name) { System.out.println("   [SUBSYSTEM 4]: Sent Welcome SMS to " + name); }\r
    }\r
\r
    // 2. The Facade (Clean, One-Click Unified API):\r
    public static class AcademyEnrollmentFacade {\r
        private final StudentRegistrationSystem reg = new StudentRegistrationSystem();\r
        private final FeeBillingSystem billing = new FeeBillingSystem();\r
        private final IdCardPrinter idCard = new IdCardPrinter();\r
        private final NotificationService notify = new NotificationService();\r
\r
        public void enrollNewStudent(String studentName, double courseFee) {\r
            System.out.println(">>> [FACADE]: Starting Automated 4-Step Student Onboarding...");\r
            reg.register(studentName);\r
            billing.processFee(studentName, courseFee);\r
            idCard.printCard(studentName);\r
            notify.sendWelcomeSms(studentName);\r
            System.out.println(">>> [FACADE]: Student " + studentName + " enrolled successfully! ✅\r
");\r
        }\r
    }\r
\r
    public static void main(String[] args) {\r
        System.out.println("==========================================================================");\r
        System.out.println(" TOPIC 11: FACADE DESIGN PATTERN - BARRACKPORE ACADEMY");\r
        System.out.println("==========================================================================\\n");\r
\r
        AcademyEnrollmentFacade enrollment = new AcademyEnrollmentFacade();\r
        enrollment.enrollNewStudent("Swadeep Paul", 5000.0);\r
\r
        System.out.println("==========================================================================");\r
    }\r
}\r
`,i=`================================================================================\r
JAVA CORE TUTORIAL - QUICK REVISION GUIDE\r
Module 012_001: GoF Design Patterns\r
Topic 11: Facade Pattern\r
Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
================================================================================\r
\r
1. INTENT:\r
   - Provide a unified interface to a set of interfaces in a subsystem.\r
   - Defines a higher-level interface that makes the subsystem easier to use.\r
\r
2. ADAPTER VS FACADE:\r
   - Adapter : Converts one incompatible interface to match another expected interface.\r
   - Facade  : Simplifies a large collection of multiple subsystem interfaces into a single entry point.\r
\r
================================================================================\r
Classroom Practice: Barrackpore Academy | Mentor: Sukanta Hui\r
================================================================================\r
`,o=[{question:"How does the Facade pattern differ from the Adapter pattern?",shortAnswer:"An Adapter converts an existing incompatible interface into a specific target interface so two systems can communicate. A Facade defines a new, simplified high-level interface that aggregates and hides the complexity of multiple subsystem classes.",explanation:"Interface translation vs subsystem simplification.",hint:"Adapter translates interfaces; Facade simplifies multiple subsystem APIs.",level:"Intermediate",codeExample:"Facade: unified simple API over complex subsystem."},{question:"Does the Facade pattern prevent clients from accessing low-level subsystem classes directly if needed?",shortAnswer:"No, a Facade provides a convenient simplified view, but does not encapsulate or hide subsystem classes behind an impenetrable wall; power users can still access individual subsystem classes directly.",explanation:"Provides convenience without restricting granular access.",hint:"Does not restrict direct access to subsystem components.",level:"Intermediate",codeExample:"Facade provides a default high-level path without blocking lower layers."}];function x(){return e.jsxs("div",{className:"space-y-12 px-4 md:px-8 py-8 text-slate-200 bg-slate-900 min-h-screen",children:[e.jsxs("header",{className:"space-y-4 border-b border-slate-800 pb-6",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"px-3 py-1 bg-sky-500/10 text-sky-400 border border-sky-500/20 text-xs font-semibold rounded-full uppercase tracking-wider",children:"Module 012_001 · Topic 11"}),e.jsx("span",{className:"px-3 py-1 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-xs font-semibold rounded-full",children:"GoF Design Patterns"})]}),e.jsxs("h1",{className:"text-xl sm:text-2xl md:text-3xl font-bold text-white tracking-tight",children:["The Facade Pattern: ",e.jsx("code",{className:"text-emerald-400 font-mono",children:"Simplified Subsystem Entry"})]}),e.jsx("p",{className:"text-base md:text-lg text-slate-400 leading-relaxed max-w-4xl",children:"Taming subsystem complexity: providing a clean, high-level interface to hide complex subsystems, multi-step workflows, and micro-libraries."})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsxs("h2",{className:"text-2xl font-bold text-emerald-400 flex items-center gap-2",children:[e.jsx("span",{children:"💻"})," Hands-On Java Demo Code"]}),e.jsx(t,{fileModule:s,title:"FacadePatternDemo.java",highlightLines:[18,25,34,43]})]}),e.jsx("section",{className:"space-y-4",children:e.jsx(n,{title:"GoF Design Patterns FAQs",questions:o})}),e.jsx("section",{className:"space-y-4",children:e.jsx(a,{content:i,title:"Module 012_001 Topic 11: Facade Pattern",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Printable Note",downloadFileName:"012_001_topic11_facade_pattern_note.txt"})}),e.jsx(r,{note:"The Facade pattern is like the reception desk of our academy! A student doesn't need to visit the accountant, the server admin, the classroom scheduler, and the librarian separately. The receptionist handles all 4 subsystems through one simple window! — Sukanta Hui"})]})}export{x as default};
