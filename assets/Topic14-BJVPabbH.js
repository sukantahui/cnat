import{j as e}from"./vendor-react-core-Doz9nIC6.js";import{J as n}from"./JavaFileLoader-BfBG3xz_.js";import{F as r}from"./FAQTemplate-BHhlgA96.js";import{P as t}from"./PlainTextPrint-C08xhKA4.js";import{T as i}from"./TeacherSukantaHui-CEPuAfsb.js";import"./JavaCodeBlock-BwsLxS3r.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-DGCamHnX.js";const a=`/**\r
 * Java Core Tutorial - Module 002_008: Interfaces, Default/Static Methods & Multiple Inheritance\r
 * Topic 14: Loose Coupling: Programming to an Interface, Not an Implementation\r
 * Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
 */\r
\r
package com.coderaccotax.javatutorial.interfaces;\r
\r
public class LooseCouplingPrincipleDemo {\r
\r
    // 1. ABSTRACT CONTRACT\r
    public interface MessageSender {\r
        void deliver(String to, String msg);\r
    }\r
\r
    // 2. Concrete Provider 1\r
    public static class TwilioSmsSender implements MessageSender {\r
        public void deliver(String to, String msg) {\r
            System.out.printf("  [TWILIO SMS] Dispatched to %s: "%s"\\n", to, msg);\r
        }\r
    }\r
\r
    // 3. Concrete Provider 2\r
    public static class SendGridEmailSender implements MessageSender {\r
        public void deliver(String to, String msg) {\r
            System.out.printf("  [SENDGRID EMAIL] Sent TLS email to %s: "%s"\\n", to, msg);\r
        }\r
    }\r
\r
    // 4. LOOSELY COUPLED HIGH-LEVEL SERVICE (Depends ONLY on MessageSender interface!)\r
    public static class TraineeAdmissionAlertService {\r
        private MessageSender sender; // Decoupled interface reference!\r
\r
        // Dependency Injection via constructor:\r
        public TraineeAdmissionAlertService(MessageSender sender) {\r
            this.sender = sender;\r
        }\r
\r
        public void alertTrainee(String recipient, String message) {\r
            this.sender.deliver(recipient, message); // Polymorphic dispatch\r
        }\r
    }\r
\r
    public static void main(String[] args) {\r
        System.out.println("==========================================================================");\r
        System.out.println(" TOPIC 14: PROGRAMMING TO AN INTERFACE - BARRACKPORE");\r
        System.out.println("==========================================================================\\n");\r
\r
        System.out.println(">>> 1. Injecting Twilio SMS Provider:");\r
        TraineeAdmissionAlertService service1 = new TraineeAdmissionAlertService(new TwilioSmsSender());\r
        service1.alertTrainee("Swadeep Paul (9830000000)", "Your batch starts Monday @ Barrackpore!");\r
\r
        System.out.println("\\n>>> 2. Swapping to SendGrid Email Provider (Zero client code changes!):");\r
        TraineeAdmissionAlertService service2 = new TraineeAdmissionAlertService(new SendGridEmailSender());\r
        service2.alertTrainee("swadeep@example.com", "Your course syllabus is attached.");\r
\r
        System.out.println("\\n==========================================================================");\r
    }\r
}`,s=`================================================================================\r
JAVA CORE TUTORIAL - QUICK REVISION GUIDE\r
Module 002_008: Interfaces, Default/Static Methods & Multiple Inheritance\r
Topic 14: Loose Coupling & Interface Design\r
Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
================================================================================\r
\r
1. LOOSE COUPLING PRINCIPLE:\r
   - Always declare variable references as the Interface type (e.g. 'List<T>' not 'ArrayList<T>').\r
   - High-level classes depend on abstractions (interfaces), not concrete details.\r
   - Foundation for Dependency Injection and Unit Testing (Mocking).\r
\r
================================================================================\r
Classroom Practice: Barrackpore Academy | Mentor: Sukanta Hui\r
================================================================================`,o=[{question:"What does the software design rule 'Program to an interface, not an implementation' mean?",shortAnswer:"It means high-level business logic should declare its dependencies as abstract interfaces rather than concrete classes, allowing implementations to be swapped, mocked, or upgraded without modifying the calling code.",explanation:"This is the fundamental principle behind Dependency Injection and Spring Framework.",hint:"Declare variables and dependencies as interface types to decouple caller from provider.",level:"Advanced",codeExample:"List<String> list = new ArrayList<>(); // Programming to interface"}];function h(){return e.jsxs("div",{className:"space-y-12 px-4 md:px-8 py-8 text-slate-200 bg-slate-900 min-h-screen",children:[e.jsx("style",{children:`
          @keyframes fadeIn {
            from { opacity: 0; transform: translateY(8px); }
            to { opacity: 1; transform: translateY(0); }
          }
          .animate-fade-in { animation: fadeIn 0.5s ease-out forwards; }
        `}),e.jsxs("header",{className:"space-y-4 border-b border-slate-800 pb-6 animate-fade-in",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"px-3 py-1 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-xs font-semibold rounded-full uppercase tracking-wider",children:"Module 002_008 · Topic 14"}),e.jsx("span",{className:"px-3 py-1 bg-sky-500/10 text-sky-400 border border-sky-500/20 text-xs font-semibold rounded-full",children:"Design Principle"})]}),e.jsx("h1",{className:"text-xl sm:text-2xl md:text-3xl font-bold text-white tracking-tight",children:"Loose Coupling: Programming to an Interface, Not an Implementation"}),e.jsx("p",{className:"text-base md:text-lg text-slate-400 leading-relaxed max-w-4xl",children:"Learn why Gang of Four and modern enterprise architecture demand programming to interfaces: enabling zero-friction provider swapping and frictionless unit test mocking."})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsxs("h2",{className:"text-2xl font-bold text-emerald-400 flex items-center gap-2",children:[e.jsx("span",{children:"💻"})," Hands-On Java Demo Code"]}),e.jsx(n,{fileModule:a,title:"LooseCouplingPrincipleDemo.java",highlightLines:[11,26,29,44,48]})]}),e.jsx("section",{className:"space-y-4",children:e.jsx(r,{title:"Loose Coupling FAQs",questions:o})}),e.jsx("section",{className:"space-y-4",children:e.jsx(t,{content:s,title:"Module 002_008 Topic 14: Loose Coupling Principle",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Printable Note",downloadFileName:"002_008_topic14_loose_coupling_note.txt"})}),e.jsx(i,{note:"Always declare 'List<String> trainees = new ArrayList<>();' rather than 'ArrayList<String> trainees'! Programming to the List interface lets you swap to LinkedList or Vector without changing the rest of your app. — Sukanta Hui"})]})}export{h as default};
