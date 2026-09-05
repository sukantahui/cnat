import{j as e}from"./vendor-react-core-Doz9nIC6.js";import{J as t}from"./JavaFileLoader-BfBG3xz_.js";import{F as a}from"./FAQTemplate-BHhlgA96.js";import{P as s}from"./PlainTextPrint-C08xhKA4.js";import{T as r}from"./TeacherSukantaHui-DerPxfxp.js";import"./JavaCodeBlock-BwsLxS3r.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-CH1iX9C8.js";const n=`/**\r
 * Java Core Tutorial - Module 002_007: Abstract Classes & Partial Abstraction\r
 * Topic 9: Extending Abstract Classes: Mandatory Implementation of Abstract Methods\r
 * Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
 */\r
\r
package com.coderaccotax.javatutorial.abstraction;\r
\r
public class ExtendingAbstractClassesDemo {\r
\r
    public abstract static class NotificationSystem {\r
        public abstract void sendImmediateNotification(String to, String message);\r
        public abstract boolean verifyDelivery(String messageId);\r
    }\r
\r
    // Concrete Subclass MUST implement ALL declared abstract methods:\r
    public static class SmsNotificationSystem extends NotificationSystem {\r
        @Override\r
        public void sendImmediateNotification(String to, String message) {\r
            System.out.printf("  [SMS SENT] Dispatched to %s: "%s"\\n", to, message);\r
        }\r
\r
        @Override\r
        public boolean verifyDelivery(String messageId) {\r
            System.out.println("  [SMS VERIFIED] Delivery receipt confirmed for MSG: " + messageId);\r
            return true;\r
        }\r
    }\r
\r
    public static void main(String[] args) {\r
        System.out.println("==========================================================================");\r
        System.out.println(" TOPIC 9: EXTENDING ABSTRACT CLASSES - BARRACKPORE");\r
        System.out.println("==========================================================================\\n");\r
\r
        NotificationSystem notifier = new SmsNotificationSystem();\r
        notifier.sendImmediateNotification("9830000000", "Barrackpore Lab Java Class @ 5 PM");\r
        notifier.verifyDelivery("TXN-SMS-9988");\r
\r
        System.out.println("\\n==========================================================================");\r
    }\r
}`,i=`================================================================================\r
JAVA CORE TUTORIAL - QUICK REVISION GUIDE\r
Module 002_007: Abstract Classes & Partial Abstraction\r
Topic 9: Extending Abstract Classes\r
Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
================================================================================\r
\r
1. SUBCLASS OBLIGATIONS:\r
   - Must provide concrete bodies for ALL inherited abstract methods.\r
   - Failure to implement even 1 method produces: 'Subclass is not abstract and does not override abstract method'.\r
\r
================================================================================\r
Classroom Practice: Barrackpore Academy | Mentor: Sukanta Hui\r
================================================================================`,o=[{question:"What is the compiler requirement when a concrete class extends an abstract superclass?",shortAnswer:"The concrete subclass MUST implement every single abstract method inherited from the abstract superclass (and any ancestor abstract classes), or else the subclass itself must be marked 'abstract'.",explanation:"This guarantees that by the time an object is instantiated, every method in its type hierarchy has an executable body.",hint:"Subclass must override all abstract methods or be declared abstract itself.",level:"Beginner",codeExample:"class Concrete extends AbstractBase { @Override void m() {} }"}];function h(){return e.jsxs("div",{className:"space-y-12 px-4 md:px-8 py-8 text-slate-200 bg-slate-900 min-h-screen",children:[e.jsx("style",{children:`
          @keyframes fadeIn {
            from { opacity: 0; transform: translateY(8px); }
            to { opacity: 1; transform: translateY(0); }
          }
          .animate-fade-in { animation: fadeIn 0.5s ease-out forwards; }
        `}),e.jsxs("header",{className:"space-y-4 border-b border-slate-800 pb-6 animate-fade-in",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"px-3 py-1 bg-sky-500/10 text-sky-400 border border-sky-500/20 text-xs font-semibold rounded-full uppercase tracking-wider",children:"Module 002_007 · Topic 9"}),e.jsx("span",{className:"px-3 py-1 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-xs font-semibold rounded-full",children:"Subclass Contracts"})]}),e.jsx("h1",{className:"text-xl sm:text-2xl md:text-3xl font-bold text-white tracking-tight",children:"Extending Abstract Classes: Mandatory Implementation of Abstract Methods"}),e.jsx("p",{className:"text-base md:text-lg text-slate-400 leading-relaxed max-w-4xl",children:"Learn how the Java compiler enforces contract completion: verifying that concrete subclasses provide executable bodies for all inherited abstract signatures."})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsxs("h2",{className:"text-2xl font-bold text-emerald-400 flex items-center gap-2",children:[e.jsx("span",{children:"💻"})," Hands-On Java Demo Code"]}),e.jsx(t,{fileModule:n,title:"ExtendingAbstractClassesDemo.java",highlightLines:[11,12,17,18,23,33]})]}),e.jsx("section",{className:"space-y-4",children:e.jsx(a,{title:"Extending Abstract Classes FAQs",questions:o})}),e.jsx("section",{className:"space-y-4",children:e.jsx(s,{content:i,title:"Module 002_007 Topic 9: Extending Abstract Classes",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Printable Note",downloadFileName:"002_007_topic9_extending_abstract_note.txt"})}),e.jsx(r,{note:"If the parent abstract class defines two abstract methods, the child must implement both. If it only implements one, the compiler will not let you create an object! — Sukanta Hui"})]})}export{h as default};
