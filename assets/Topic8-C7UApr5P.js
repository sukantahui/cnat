import{j as e}from"./vendor-react-core-Doz9nIC6.js";import{J as n}from"./JavaFileLoader-BfBG3xz_.js";import{F as s}from"./FAQTemplate-BHhlgA96.js";import{P as t}from"./PlainTextPrint-C08xhKA4.js";import{T as a}from"./TeacherSukantaHui-DerPxfxp.js";import"./JavaCodeBlock-BwsLxS3r.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-CH1iX9C8.js";const r=`/**\r
 * Java Core Tutorial - Module 003_007: Nested & Inner Classes\r
 * Topic 8: Anonymous Inner Class: Declaring & Instantiating Unnamed Classes on the Fly\r
 * Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
 */\r
\r
package com.coderaccotax.javatutorial.nested;\r
\r
interface NotificationService {\r
    void sendNotification(String message, String recipient);\r
}\r
\r
public class AnonymousInnerClassFoundationsDemo {\r
\r
    public static void main(String[] args) {\r
        System.out.println("==========================================================================");\r
        System.out.println(" TOPIC 8: ANONYMOUS INNER CLASS FOUNDATIONS - BARRACKPORE");\r
        System.out.println("==========================================================================\\n");\r
\r
        // Declaring and instantiating an Anonymous Inner Class implementing NotificationService on the fly:\r
        NotificationService smsService = new NotificationService() {\r
            @Override\r
            public void sendNotification(String message, String recipient) {\r
                System.out.printf("  [SMS GATEWAY] To: %s | Message: '%s'%n", recipient, message);\r
            }\r
        };\r
\r
        // Another distinct Anonymous Inner Class instance:\r
        NotificationService emailService = new NotificationService() {\r
            @Override\r
            public void sendNotification(String message, String recipient) {\r
                System.out.printf("  [EMAIL SERVER] To: %s | Subject: '%s'%n", recipient, message);\r
            }\r
        };\r
\r
        System.out.println(">>> Executing Anonymous Inner Class Implementations:");\r
        smsService.sendNotification("Barrackpore Batch Starts Tomorrow at 10 AM", "+919830012345");\r
        emailService.sendNotification("Welcome to Java Core Pro", "swadeep.paul@coderaccotax.com");\r
\r
        System.out.println("\\n>>> NOTE: Anonymous classes have NO class name in source code (compiled to Outer$1.class)!");\r
\r
        System.out.println("\\n==========================================================================");\r
    }\r
}`,i=`================================================================================\r
JAVA CORE TUTORIAL - QUICK REVISION GUIDE\r
Module 003_007: Nested & Inner Classes\r
Topic 8: Anonymous Inner Class Foundations\r
Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
================================================================================\r
\r
1. ANONYMOUS INNER CLASS:\r
   - No explicit class name.\r
   - Declared and instantiated simultaneously in one expression.\r
   - Implements an interface or extends a class on the fly.\r
   - Compiled to synthetic 'Outer$1.class', 'Outer$2.class'.\r
\r
================================================================================\r
Classroom Practice: Barrackpore Academy | Mentor: Sukanta Hui\r
================================================================================`,o=[{question:"What is an Anonymous Inner Class in Java and how does it differ from a named class?",shortAnswer:"An Anonymous Inner Class is a local inner class with NO explicit name in source code. It is declared and instantiated simultaneously in a single expression using 'new SuperType() { ... }'. It is typically used for one-off implementations of interfaces or abstract classes.",explanation:"The compiler generates synthetic class files like 'Outer$1.class'.",hint:"An unnamed class declared and instantiated in a single expression.",level:"Beginner",codeExample:"Runnable r = new Runnable() { public void run() { ... } };"}];function y(){return e.jsxs("div",{className:"space-y-12 px-4 md:px-8 py-8 text-slate-200 bg-slate-900 min-h-screen",children:[e.jsxs("header",{className:"space-y-4 border-b border-slate-800 pb-6",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"px-3 py-1 bg-sky-500/10 text-sky-400 border border-sky-500/20 text-xs font-semibold rounded-full uppercase tracking-wider",children:"Module 003_007 · Topic 8"}),e.jsx("span",{className:"px-3 py-1 bg-purple-500/10 text-purple-400 border border-purple-500/20 text-xs font-semibold rounded-full",children:"Inline Subclasses"})]}),e.jsxs("h1",{className:"text-xl sm:text-2xl md:text-3xl font-bold text-white tracking-tight",children:[e.jsx("code",{className:"text-purple-400 font-mono",children:"Anonymous Inner Class"}),": Declaring & Instantiating on the Fly"]}),e.jsxs("p",{className:"text-base md:text-lg text-slate-400 leading-relaxed max-w-4xl",children:["Master unnamed inline class declarations: creating single-use implementations of interfaces with ",e.jsxs("code",{className:"text-purple-300 font-mono",children:["new Interface() ","{ ... }"]}),"."]})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsxs("h2",{className:"text-2xl font-bold text-emerald-400 flex items-center gap-2",children:[e.jsx("span",{children:"💻"})," Hands-On Java Demo Code"]}),e.jsx(n,{fileModule:r,title:"AnonymousInnerClassFoundationsDemo.java",highlightLines:[7,18,19,20,26,27,28,34,35]})]}),e.jsx("section",{className:"space-y-4",children:e.jsx(s,{title:"Anonymous Inner Class FAQs",questions:o})}),e.jsx("section",{className:"space-y-4",children:e.jsx(t,{content:i,title:"Module 003_007 Topic 8: Anonymous Inner Class",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Printable Note",downloadFileName:"003_007_topic8_anonymous_inner_class_note.txt"})}),e.jsx(a,{note:"Before Java 8 lambdas existed, anonymous inner classes were the ONLY way to pass customized behavior into methods! They remain essential for multi-method interfaces! — Sukanta Hui"})]})}export{y as default};
