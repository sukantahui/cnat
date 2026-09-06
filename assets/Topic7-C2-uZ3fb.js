import{j as e}from"./vendor-react-core-Doz9nIC6.js";import{J as t}from"./JavaFileLoader-BfBG3xz_.js";import{F as n}from"./FAQTemplate-BHhlgA96.js";import{P as a}from"./PlainTextPrint-C08xhKA4.js";import{T as i}from"./TeacherSukantaHui-DDN87fI5.js";import"./JavaCodeBlock-BwsLxS3r.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-DEsnU7fn.js";const r=`/**\r
 * Java Core Tutorial - Module 002_008: Interfaces, Default/Static Methods & Multiple Inheritance\r
 * Topic 7: Java 8 Evolution: 'default' Methods in Interfaces (Backward Compatibility)\r
 * Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
 */\r
\r
package com.coderaccotax.javatutorial.interfaces;\r
\r
public class DefaultMethodsEvolutionDemo {\r
\r
    public interface AcademyNotifier {\r
        // Traditional abstract method (Subclass MUST implement)\r
        void sendPushNotification(String user, String message);\r
\r
        // JAVA 8 DEFAULT METHOD: Provides default implementation body!\r
        // Subclasses get this automatically without breaking legacy implementations!\r
        default void logNotificationAudit(String user) {\r
            System.out.println("  [DEFAULT AUDIT] Notification logged for " + user + " in Barrackpore Hub audit db.");\r
        }\r
    }\r
\r
    public static class LegacySlackNotifier implements AcademyNotifier {\r
        @Override\r
        public void sendPushNotification(String user, String message) {\r
            System.out.printf("  [SLACK DISPATCH] To %s: "%s"\\n", user, message);\r
        }\r
        // Inherits logNotificationAudit() automatically without writing any code!\r
    }\r
\r
    public static class CustomEmailNotifier implements AcademyNotifier {\r
        @Override\r
        public void sendPushNotification(String user, String message) {\r
            System.out.printf("  [EMAIL DISPATCH] To %s: "%s"\\n", user, message);\r
        }\r
\r
        // Subclass CAN optionally override the default method:\r
        @Override\r
        public void logNotificationAudit(String user) {\r
            System.out.println("  [CUSTOM AUDIT] Encrypted audit log generated for " + user);\r
        }\r
    }\r
\r
    public static void main(String[] args) {\r
        System.out.println("==========================================================================");\r
        System.out.println(" TOPIC 7: JAVA 8 DEFAULT METHODS IN INTERFACES - BARRACKPORE");\r
        System.out.println("==========================================================================\\n");\r
\r
        System.out.println(">>> 1. LegacySlackNotifier using inherited default method:");\r
        AcademyNotifier n1 = new LegacySlackNotifier();\r
        n1.sendPushNotification("Swadeep", "Assignment Reviewed");\r
        n1.logNotificationAudit("Swadeep"); // Default executed!\r
\r
        System.out.println("\\n>>> 2. CustomEmailNotifier using overridden default method:");\r
        AcademyNotifier n2 = new CustomEmailNotifier();\r
        n2.sendPushNotification("Tuhina", "Certificate Ready");\r
        n2.logNotificationAudit("Tuhina"); // Overridden executed!\r
\r
        System.out.println("\\n==========================================================================");\r
    }\r
}`,o=`================================================================================\r
JAVA CORE TUTORIAL - QUICK REVISION GUIDE\r
Module 002_008: Interfaces, Default/Static Methods & Multiple Inheritance\r
Topic 7: Default Methods in Interfaces (Java 8)\r
Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
================================================================================\r
\r
1. 'default' METHOD MECHANICS:\r
   - Syntax: 'default ReturnType name() { ... }'\r
   - Belongs to interface instances (invoked on object reference).\r
   - Can be optionally overridden by implementing classes.\r
   - Preserves backward compatibility across library upgrades.\r
\r
================================================================================\r
Classroom Practice: Barrackpore Academy | Mentor: Sukanta Hui\r
================================================================================`,s=[{question:"Why were 'default' methods introduced in interfaces in Java 8?",shortAnswer:"To enable backward compatibility by allowing API developers (such as the Java Collections Framework team) to add new methods to existing interfaces (like 'forEach()' and 'stream()' in Collection) without breaking existing third-party implementing classes.",explanation:"Implementing classes automatically inherit the default method without compilation errors.",hint:"Enables adding new methods to existing interfaces without breaking legacy implementations.",level:"Intermediate",codeExample:"interface List { default void sort() {} }"}];function g(){return e.jsxs("div",{className:"space-y-12 px-4 md:px-8 py-8 text-slate-200 bg-slate-900 min-h-screen",children:[e.jsx("style",{children:`
          @keyframes fadeIn {
            from { opacity: 0; transform: translateY(8px); }
            to { opacity: 1; transform: translateY(0); }
          }
          .animate-fade-in { animation: fadeIn 0.5s ease-out forwards; }
        `}),e.jsxs("header",{className:"space-y-4 border-b border-slate-800 pb-6 animate-fade-in",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"px-3 py-1 bg-sky-500/10 text-sky-400 border border-sky-500/20 text-xs font-semibold rounded-full uppercase tracking-wider",children:"Module 002_008 · Topic 7"}),e.jsx("span",{className:"px-3 py-1 bg-purple-500/10 text-purple-400 border border-purple-500/20 text-xs font-semibold rounded-full",children:"Java 8 Evolution"})]}),e.jsxs("h1",{className:"text-xl sm:text-2xl md:text-3xl font-bold text-white tracking-tight",children:["Java 8 Evolution: ",e.jsx("code",{className:"text-purple-400 font-mono",children:"default"})," Methods in Interfaces"]}),e.jsx("p",{className:"text-base md:text-lg text-slate-400 leading-relaxed max-w-4xl",children:"Learn how Java 8 revolutionized interface design: providing default method implementations for backward compatibility without breaking existing classes."})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsxs("h2",{className:"text-2xl font-bold text-emerald-400 flex items-center gap-2",children:[e.jsx("span",{children:"💻"})," Hands-On Java Demo Code"]}),e.jsx(t,{fileModule:r,title:"DefaultMethodsEvolutionDemo.java",highlightLines:[12,16,21,33,44,45]})]}),e.jsx("section",{className:"space-y-4",children:e.jsx(n,{title:"Default Methods FAQs",questions:s})}),e.jsx("section",{className:"space-y-4",children:e.jsx(a,{content:o,title:"Module 002_008 Topic 7: Default Methods in Interfaces",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Printable Note",downloadFileName:"002_008_topic7_default_methods_note.txt"})}),e.jsx(i,{note:"Before Java 8, adding a new method to an interface broke every class that implemented it worldwide! Default methods solved this forever by letting interfaces provide a default fallback body. — Sukanta Hui"})]})}export{g as default};
