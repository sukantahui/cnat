import{j as e}from"./vendor-react-core-Doz9nIC6.js";import{J as n}from"./JavaFileLoader-BfBG3xz_.js";import{F as t}from"./FAQTemplate-BHhlgA96.js";import{P as r}from"./PlainTextPrint-C08xhKA4.js";import{T as i}from"./TeacherSukantaHui-DerPxfxp.js";import"./JavaCodeBlock-BwsLxS3r.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-CH1iX9C8.js";const a=`/**\r
 * Java Core Tutorial - Module 002_006: Polymorphism, Method Overriding & Dynamic Method Dispatch\r
 * Topic 0: What is Polymorphism: "One Interface, Multiple Implementations"\r
 * Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
 */\r
\r
package com.coderaccotax.javatutorial.polymorphism;\r
\r
public class PolymorphismFoundationsDemo {\r
\r
    // Common Interface / Base Contract\r
    public interface NotificationChannel {\r
        void sendAlert(String recipient, String message);\r
    }\r
\r
    // Implementation 1: SMS Channel\r
    public static class SmsAlertChannel implements NotificationChannel {\r
        public void sendAlert(String recipient, String message) {\r
            System.out.printf("  [SMS GATEWAY] Sending SMS to %s: "%s"\\n", recipient, message);\r
        }\r
    }\r
\r
    // Implementation 2: Email Channel\r
    public static class EmailAlertChannel implements NotificationChannel {\r
        public void sendAlert(String recipient, String message) {\r
            System.out.printf("  [EMAIL SERVER] Dispatching Email to %s: "%s"\\n", recipient, message);\r
        }\r
    }\r
\r
    // Implementation 3: WhatsApp Channel\r
    public static class WhatsAppAlertChannel implements NotificationChannel {\r
        public void sendAlert(String recipient, String message) {\r
            System.out.printf("  [WHATSAPP API] Delivering message to %s: "%s"\\n", recipient, message);\r
        }\r
    }\r
\r
    public static void main(String[] args) {\r
        System.out.println("==========================================================================");\r
        System.out.println(" TOPIC 0: WHAT IS POLYMORPHISM IN JAVA - BARRACKPORE");\r
        System.out.println("==========================================================================\\n");\r
\r
        // ONE unified array of interface references, MULTIPLE dynamic implementations:\r
        NotificationChannel[] channels = {\r
            new SmsAlertChannel(),\r
            new EmailAlertChannel(),\r
            new WhatsAppAlertChannel()\r
        };\r
\r
        String trainee = "Swadeep Paul (Barrackpore Hub)";\r
        String message = "Your Java Core project review is scheduled for 4 PM.";\r
\r
        System.out.println(">>> Broadcasting alert via polymorphic channel dispatch:");\r
        for (NotificationChannel channel : channels) {\r
            channel.sendAlert(trainee, message); // Polymorphic invocation!\r
        }\r
\r
        System.out.println("\\n==========================================================================");\r
    }\r
}`,o=`================================================================================\r
JAVA CORE TUTORIAL - QUICK REVISION GUIDE\r
Module 002_006: Polymorphism, Overriding & Dynamic Method Dispatch\r
Topic 0: What is Polymorphism\r
Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
================================================================================\r
\r
1. THE TWO TYPES OF POLYMORPHISM:\r
   - Compile-Time Polymorphism (Static Binding): Method Overloading.\r
   - Runtime Polymorphism (Dynamic Binding): Method Overriding & Dynamic Dispatch.\r
\r
================================================================================\r
Classroom Practice: Barrackpore Academy | Mentor: Sukanta Hui\r
================================================================================`,s=[{question:"What does Polymorphism literally mean in Java?",shortAnswer:"Derived from Greek ('poly' = many, 'morph' = forms), polymorphism is the ability of a single interface, method, or reference variable to take on multiple concrete operational forms at runtime.",explanation:"It allows client code to interact with abstract base contracts while the JVM automatically executes specialized subclass logic.",hint:"'Many forms' - one unified interface with multiple concrete behaviors.",level:"Beginner",codeExample:"Shape s = new Circle(); s.draw();"}];function x(){return e.jsxs("div",{className:"space-y-12 px-4 md:px-8 py-8 text-slate-200 bg-slate-900 min-h-screen",children:[e.jsx("style",{children:`
          @keyframes fadeIn {
            from { opacity: 0; transform: translateY(8px); }
            to { opacity: 1; transform: translateY(0); }
          }
          .animate-fade-in { animation: fadeIn 0.5s ease-out forwards; }
        `}),e.jsxs("header",{className:"space-y-4 border-b border-slate-800 pb-6 animate-fade-in",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"px-3 py-1 bg-sky-500/10 text-sky-400 border border-sky-500/20 text-xs font-semibold rounded-full uppercase tracking-wider",children:"Module 002_006 · Topic 0"}),e.jsx("span",{className:"px-3 py-1 bg-indigo-500/10 text-indigo-400 border border-indigo-500/20 text-xs font-semibold rounded-full",children:"Core OOP Pillar"})]}),e.jsx("h1",{className:"text-xl sm:text-2xl md:text-3xl font-bold text-white tracking-tight",children:'What is Polymorphism: "One Interface, Multiple Implementations"'}),e.jsx("p",{className:"text-base md:text-lg text-slate-400 leading-relaxed max-w-4xl",children:"Discover the crowning jewel of Object-Oriented Programming: decoupling abstract intent from concrete execution through Compile-Time Overloading and Runtime Overriding."})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsxs("h2",{className:"text-2xl font-bold text-emerald-400 flex items-center gap-2",children:[e.jsx("span",{children:"💻"})," Hands-On Java Demo Code"]}),e.jsx(n,{fileModule:a,title:"PolymorphismFoundationsDemo.java",highlightLines:[12,17,24,31,42,51]})]}),e.jsx("section",{className:"space-y-4",children:e.jsx(t,{title:"Polymorphism Foundations FAQs",questions:s})}),e.jsx("section",{className:"space-y-4",children:e.jsx(r,{content:o,title:"Module 002_006 Topic 0: What is Polymorphism",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Printable Note",downloadFileName:"002_006_topic0_polymorphism_note.txt"})}),e.jsx(i,{note:"Polymorphism lets your code say: 'Send alert!' and the system automatically decides whether to use SMS, Email, or WhatsApp depending on the object behind the scenes! — Sukanta Hui"})]})}export{x as default};
