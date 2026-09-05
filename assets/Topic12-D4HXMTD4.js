import{j as e}from"./vendor-react-core-Doz9nIC6.js";import{J as n}from"./JavaFileLoader-BfBG3xz_.js";import{F as t}from"./FAQTemplate-BHhlgA96.js";import{P as r}from"./PlainTextPrint-C08xhKA4.js";import{T as i}from"./TeacherSukantaHui-DerPxfxp.js";import"./JavaCodeBlock-BwsLxS3r.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-CH1iX9C8.js";const a=`/**\r
 * Java Core Tutorial - Module 002_011: SOLID Object-Oriented Design Principles in Java\r
 * Topic 12: Refactoring Legacy Spaghetti Code into Pristine SOLID Architecture (Capstone)\r
 * Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
 */\r
\r
package com.coderaccotax.javatutorial.solid;\r
\r
public class SolidCapstoneArchitectureDemo {\r
\r
    // S: Model Layer (State only)\r
    public static class TraineeAdmissionRequest {\r
        public String traineeName;\r
        public String courseName;\r
        public double feeAmount;\r
        public TraineeAdmissionRequest(String name, String course, double fee) {\r
            this.traineeName = name;\r
            this.courseName = course;\r
            this.feeAmount = fee;\r
        }\r
    }\r
\r
    // O: Extensible Payment Interface\r
    public interface PaymentGatewayDriver {\r
        void processPayment(String name, double amount);\r
    }\r
\r
    public static class UpiPaymentDriver implements PaymentGatewayDriver {\r
        public void processPayment(String name, double amount) {\r
            System.out.printf("  [UPI DRIVER] Received ₹%.2f from %s via QR Scan.\\n", amount, name);\r
        }\r
    }\r
\r
    // I: Segregated Communication Interface\r
    public interface NotificationSender {\r
        void notifyTrainee(String name, String message);\r
    }\r
\r
    public static class SmsNotificationSender implements NotificationSender {\r
        public void notifyTrainee(String name, String message) {\r
            System.out.printf("  [SMS NOTIFICATION] Sent to %s: "%s"\\n", name, message);\r
        }\r
    }\r
\r
    // D & L: High-level Orchestrator depending on Abstractions (Pure SOLID Architecture!)\r
    public static class AcademyEnrollmentOrchestrator {\r
        private final PaymentGatewayDriver paymentDriver;\r
        private final NotificationSender notificationSender;\r
\r
        public AcademyEnrollmentOrchestrator(PaymentGatewayDriver payment, NotificationSender notification) {\r
            this.paymentDriver = payment;\r
            this.notificationSender = notification;\r
        }\r
\r
        public void processAdmission(TraineeAdmissionRequest req) {\r
            System.out.println(">>> Initiating Admission Pipeline for: " + req.traineeName);\r
            paymentDriver.processPayment(req.traineeName, req.feeAmount);\r
            notificationSender.notifyTrainee(req.traineeName, "Welcome to Coder & AccoTax Barrackpore Academy!");\r
            System.out.println("  [ORCHESTRATOR] Admission Pipeline Completed Successfully!\r
");\r
        }\r
    }\r
\r
    public static void main(String[] args) {\r
        System.out.println("==========================================================================");\r
        System.out.println(" TOPIC 12: SOLID ARCHITECTURE CAPSTONE PIPELINE - BARRACKPORE");\r
        System.out.println("==========================================================================\\n");\r
\r
        AcademyEnrollmentOrchestrator orchestrator = new AcademyEnrollmentOrchestrator(\r
                new UpiPaymentDriver(),\r
                new SmsNotificationSender()\r
        );\r
\r
        TraineeAdmissionRequest req = new TraineeAdmissionRequest(\r
                "Swadeep Paul",\r
                "Full Stack Java Core",\r
                25000.0\r
        );\r
\r
        orchestrator.processAdmission(req);\r
\r
        System.out.println("==========================================================================");\r
        System.out.println(" MODULE 002_011 SOLID PRINCIPLES 100% COMPLETE!");\r
        System.out.println(" SEGMENT 2 OBJECT-ORIENTED PROGRAMMING 100% COMPLETE (11/11 MODULES)!");\r
        System.out.println("==========================================================================");\r
    }\r
}`,o=`================================================================================\r
JAVA CORE TUTORIAL - QUICK REVISION GUIDE\r
Module 002_011: SOLID Design Principles\r
Topic 12: SOLID Architecture Capstone\r
Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
================================================================================\r
\r
1. THE SOLID MASTER MATRIX:\r
   - S (Single Responsibility) : 1 reason to change.\r
   - O (Open/Closed)          : Open for extension, closed for modification.\r
   - L (Liskov Substitution)   : Subtypes must preserve parent contracts.\r
   - I (Interface Segregation) : Fine-grained, role-specific interfaces.\r
   - D (Dependency Inversion)  : Depend on abstractions via constructor DI.\r
\r
================================================================================\r
Classroom Practice: Barrackpore Academy | Mentor: Sukanta Hui\r
================================================================================`,s=[{question:"How does the AcademyEnrollmentOrchestrator capstone demonstrate all 5 SOLID principles working together?",shortAnswer:"1. SRP: Payment, notification, data, and orchestration are distinct classes. 2. OCP: New payment gateways and notification drivers can be added without modifying the orchestrator. 3. LSP: Any driver subtype can be substituted without crashes. 4. ISP: NotificationSender and PaymentGatewayDriver are segregated. 5. DIP: Orchestrator depends only on interfaces via constructor injection.",explanation:"This creates a production-grade enterprise design pattern.",hint:"Combines SRP, OCP, LSP, ISP, and DIP into a single clean architecture pipeline.",level:"Advanced",codeExample:"// Complete 5-principle pipeline in Topic 12"}];function f(){return e.jsxs("div",{className:"space-y-12 px-4 md:px-8 py-8 text-slate-200 bg-slate-900 min-h-screen",children:[e.jsx("style",{children:`
          @keyframes fadeIn {
            from { opacity: 0; transform: translateY(8px); }
            to { opacity: 1; transform: translateY(0); }
          }
          .animate-fade-in { animation: fadeIn 0.5s ease-out forwards; }
        `}),e.jsxs("header",{className:"space-y-4 border-b border-slate-800 pb-6 animate-fade-in",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"px-3 py-1 bg-sky-500/10 text-sky-400 border border-sky-500/20 text-xs font-semibold rounded-full uppercase tracking-wider",children:"Module 002_011 · Topic 12"}),e.jsx("span",{className:"px-3 py-1 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-xs font-semibold rounded-full",children:"Segment 2 Grand Finale Capstone"})]}),e.jsx("h1",{className:"text-xl sm:text-2xl md:text-3xl font-bold text-white tracking-tight",children:"Refactoring Legacy Spaghetti Code into Pristine SOLID Architecture"}),e.jsx("p",{className:"text-base md:text-lg text-slate-400 leading-relaxed max-w-4xl",children:"Synthesize all 5 SOLID design principles (SRP, OCP, LSP, ISP, DIP) into an enterprise admission orchestrator: achieving supreme testability, zero tight coupling, and limitless extensibility."})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsxs("h2",{className:"text-2xl font-bold text-emerald-400 flex items-center gap-2",children:[e.jsx("span",{children:"💻"})," Hands-On Java Demo Code"]}),e.jsx(n,{fileModule:a,title:"SolidCapstoneArchitectureDemo.java",highlightLines:[10,20,31,41,45,59]})]}),e.jsx("section",{className:"space-y-4",children:e.jsx(t,{title:"SOLID Capstone FAQs",questions:s})}),e.jsx("section",{className:"space-y-4",children:e.jsx(r,{content:o,title:"Module 002_011 Topic 12: SOLID Capstone Architecture",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Printable Note",downloadFileName:"002_011_topic12_solid_capstone_note.txt"})}),e.jsx(i,{note:"CONGRATULATIONS! By completing Module 002_011, you have conquered the entire Segment 2: Object-Oriented Programming (all 11 modules and 188 topics)! You now possess the architectural foundation of a senior Java software engineer! — Sukanta Hui"})]})}export{f as default};
