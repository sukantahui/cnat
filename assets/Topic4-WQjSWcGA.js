import{j as t}from"./vendor-react-core-Doz9nIC6.js";import{J as e}from"./JavaFileLoader-BfBG3xz_.js";import{F as r}from"./FAQTemplate-BHhlgA96.js";import{P as a}from"./PlainTextPrint-C08xhKA4.js";import{T as n}from"./TeacherSukantaHui-DerPxfxp.js";import"./JavaCodeBlock-BwsLxS3r.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-CH1iX9C8.js";const i=`/**\r
 * Java Core Tutorial - Module 012_001: GoF Design Patterns\r
 * Topic 4: Factory Method Pattern - Polymorphic Object Creation\r
 * Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
 */\r
\r
package com.coderaccotax.javatutorial.patterns;\r
\r
public class FactoryMethodPatternDemo {\r
\r
    // 1. Product Interface:\r
    public interface NotificationService {\r
        void send(String recipient, String message);\r
    }\r
\r
    // Concrete Products:\r
    public static class EmailNotification implements NotificationService {\r
        @Override\r
        public void send(String r, String msg) {\r
            System.out.println("   [EMAIL -> " + r + "]: " + msg);\r
        }\r
    }\r
\r
    public static class SmsNotification implements NotificationService {\r
        @Override\r
        public void send(String r, String msg) {\r
            System.out.println("   [SMS -> " + r + "]: " + msg);\r
        }\r
    }\r
\r
    // 2. Creator (Factory Method):\r
    public static abstract class NotificationFactory {\r
        // The Factory Method:\r
        public abstract NotificationService createNotification();\r
\r
        // Template operation using the product:\r
        public void sendBroadcast(String recipient, String msg) {\r
            NotificationService service = createNotification();\r
            service.send(recipient, msg);\r
        }\r
    }\r
\r
    // Concrete Creators:\r
    public static class EmailNotificationFactory extends NotificationFactory {\r
        @Override\r
        public NotificationService createNotification() {\r
            return new EmailNotification();\r
        }\r
    }\r
\r
    public static class SmsNotificationFactory extends NotificationFactory {\r
        @Override\r
        public NotificationService createNotification() {\r
            return new SmsNotification();\r
        }\r
    }\r
\r
    public static void main(String[] args) {\r
        System.out.println("==========================================================================");\r
        System.out.println(" TOPIC 4: FACTORY METHOD PATTERN - BARRACKPORE ACADEMY");\r
        System.out.println("==========================================================================\\n");\r
\r
        NotificationFactory emailFactory = new EmailNotificationFactory();\r
        emailFactory.sendBroadcast("swadeep@coderaccotax.com", "Your Java Core Certificate is Ready!");\r
\r
        NotificationFactory smsFactory = new SmsNotificationFactory();\r
        smsFactory.sendBroadcast("+91-9830000000", "Class begins tomorrow at 10 AM at Barrackpore.");\r
\r
        System.out.println("\\n==========================================================================");\r
    }\r
}\r
`,o=`================================================================================\r
JAVA CORE TUTORIAL - QUICK REVISION GUIDE\r
Module 012_001: GoF Design Patterns\r
Topic 4: Factory Method Pattern\r
Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
================================================================================\r
\r
1. INTENT:\r
   - Define an interface for creating an object, but let subclasses decide which class to instantiate.\r
   - Lets a class defer instantiation to subclasses.\r
\r
2. REAL-WORLD EXAMPLES IN JDK:\r
   - 'Calendar.getInstance()'\r
   - 'ResourceBundle.getBundle()'\r
   - 'Charset.forName()'\r
\r
================================================================================\r
Classroom Practice: Barrackpore Academy | Mentor: Sukanta Hui\r
================================================================================\r
`,s=[{question:"What problem does the Factory Method pattern solve?",shortAnswer:"It solves the problem of creating product objects without specifying their exact concrete classes in client code, deferring instantiation to specialized creator subclasses.",explanation:"Adheres to the Open-Closed and Single Responsibility principles.",hint:"Defers object instantiation to specialized creator subclasses.",level:"Beginner",codeExample:"public abstract Notification createNotification();"},{question:"How does Factory Method differ from a Simple Static Factory?",shortAnswer:"A Simple Static Factory uses a single static method with if/switch statements to instantiate classes, whereas the Factory Method pattern uses inheritance and polymorphism (abstract creator class with subclass overrides).",explanation:"Factory Method allows adding new products without modifying existing creator classes.",hint:"Factory Method uses subclass polymorphism rather than a static switch statement.",level:"Intermediate",codeExample:"Factory Method uses abstract creator class + subclass overrides."}];function x(){return t.jsxs("div",{className:"space-y-12 px-4 md:px-8 py-8 text-slate-200 bg-slate-900 min-h-screen",children:[t.jsxs("header",{className:"space-y-4 border-b border-slate-800 pb-6",children:[t.jsxs("div",{className:"flex items-center gap-3",children:[t.jsx("span",{className:"px-3 py-1 bg-sky-500/10 text-sky-400 border border-sky-500/20 text-xs font-semibold rounded-full uppercase tracking-wider",children:"Module 012_001 · Topic 4"}),t.jsx("span",{className:"px-3 py-1 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-xs font-semibold rounded-full",children:"GoF Design Patterns"})]}),t.jsxs("h1",{className:"text-xl sm:text-2xl md:text-3xl font-bold text-white tracking-tight",children:["Factory Method Pattern: ",t.jsx("code",{className:"text-emerald-400 font-mono",children:"Polymorphic Object Creation"})]}),t.jsx("p",{className:"text-base md:text-lg text-slate-400 leading-relaxed max-w-4xl",children:"Delegating instantiation: defining an interface for creating objects while letting subclasses decide which concrete class to instantiate."})]}),t.jsxs("section",{className:"space-y-4",children:[t.jsxs("h2",{className:"text-2xl font-bold text-emerald-400 flex items-center gap-2",children:[t.jsx("span",{children:"💻"})," Hands-On Java Demo Code"]}),t.jsx(e,{fileModule:i,title:"FactoryMethodPatternDemo.java",highlightLines:[18,25,34,43]})]}),t.jsx("section",{className:"space-y-4",children:t.jsx(r,{title:"GoF Design Patterns FAQs",questions:s})}),t.jsx("section",{className:"space-y-4",children:t.jsx(a,{content:o,title:"Module 012_001 Topic 4: Factory Method Pattern",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Printable Note",downloadFileName:"012_001_topic4_factory_method_pattern_note.txt"})}),t.jsx(n,{note:"The Factory Method pattern lets you write notification engines that send SMS, Email, or WhatsApp messages without your main code caring how each message object is created! Subclasses handle the specific creation! — Sukanta Hui"})]})}export{x as default};
