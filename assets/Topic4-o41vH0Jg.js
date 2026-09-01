import{j as e}from"./vendor-react-core-Doz9nIC6.js";import{J as t}from"./JavaFileLoader-BfBG3xz_.js";import{F as r}from"./FAQTemplate-BHhlgA96.js";import{P as n}from"./PlainTextPrint-C08xhKA4.js";import{T as a}from"./TeacherSukantaHui-BaJcBHAy.js";import"./JavaCodeBlock-BwsLxS3r.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-8ao-0upJ.js";const i=`/**\r
 * Java Core Tutorial - Module 002_006: Polymorphism, Method Overriding & Dynamic Method Dispatch\r
 * Topic 4: The @Override Annotation: Compiler Verification & Safety\r
 * Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
 */\r
\r
package com.coderaccotax.javatutorial.polymorphism;\r
\r
public class OverrideAnnotationSafetyDemo {\r
\r
    public static class DatabaseConnector {\r
        public void connectToCluster(String host, int port) {\r
            System.out.printf("  [PARENT] Connecting to %s:%d\\n", host, port);\r
        }\r
    }\r
\r
    public static class SecureSslConnector extends DatabaseConnector {\r
        // @Override FORCES the Java compiler to verify that this method matches a parent signature!\r
        // If you make a typo (e.g. 'connectToClustr'), javac flags an immediate COMPILE ERROR!\r
        @Override\r
        public void connectToCluster(String host, int port) {\r
            System.out.printf("  [CHILD SSL] Secure TLS 1.3 encrypted connection to %s:%d established!\\n", host, port);\r
        }\r
    }\r
\r
    public static void main(String[] args) {\r
        System.out.println("==========================================================================");\r
        System.out.println(" TOPIC 4: THE @Override ANNOTATION SAFETY - BARRACKPORE");\r
        System.out.println("==========================================================================\\n");\r
\r
        DatabaseConnector connector = new SecureSslConnector();\r
        connector.connectToCluster("db.barrackpore.internal", 3306);\r
\r
        System.out.println("\\n==========================================================================");\r
    }\r
}`,o=`================================================================================\r
JAVA CORE TUTORIAL - QUICK REVISION GUIDE\r
Module 002_006: Polymorphism, Overriding & Dynamic Method Dispatch\r
Topic 4: The @Override Annotation\r
Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
================================================================================\r
\r
1. @Override ANNOTATION POWERS:\r
   - Compile-Time Safety Guard: Compiler verifies matching parent method exists.\r
   - Prevents Silent Bug: Without @Override, a typo creates an unused overload.\r
   - Best Practice: Always annotate overridden methods with @Override.\r
\r
================================================================================\r
Classroom Practice: Barrackpore Academy | Mentor: Sukanta Hui\r
================================================================================`,s=[{question:"What are the two primary benefits of using the '@Override' annotation in Java?",shortAnswer:"1. Compiler Safety: Catches typos and signature mismatches at compile time rather than silently creating an accidental overload. 2. Readability: Explicitly signals to team members that this method overrides a superclass contract.",explanation:"If the superclass method changes or has a typo, @Override generates an immediate compilation failure.",hint:"Catches signature typos at compile time and improves code readability.",level:"Beginner",codeExample:"@Override public void execute() {}"}];function y(){return e.jsxs("div",{className:"space-y-12 px-4 md:px-8 py-8 text-slate-200 bg-slate-900 min-h-screen",children:[e.jsx("style",{children:`
          @keyframes fadeIn {
            from { opacity: 0; transform: translateY(8px); }
            to { opacity: 1; transform: translateY(0); }
          }
          .animate-fade-in { animation: fadeIn 0.5s ease-out forwards; }
        `}),e.jsxs("header",{className:"space-y-4 border-b border-slate-800 pb-6 animate-fade-in",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"px-3 py-1 bg-sky-500/10 text-sky-400 border border-sky-500/20 text-xs font-semibold rounded-full uppercase tracking-wider",children:"Module 002_006 · Topic 4"}),e.jsx("span",{className:"px-3 py-1 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-xs font-semibold rounded-full",children:"Compiler Verification"})]}),e.jsxs("h1",{className:"text-xl sm:text-2xl md:text-3xl font-bold text-white tracking-tight",children:["The ",e.jsx("code",{className:"text-emerald-400 font-mono",children:"@Override"})," Annotation: Compiler Verification & Safety"]}),e.jsxs("p",{className:"text-base md:text-lg text-slate-400 leading-relaxed max-w-4xl",children:["Learn why ",e.jsx("code",{className:"text-emerald-300 font-mono",children:"@Override"})," is an essential safety shield against silent signature bugs, typographical mismatches, and breaking library upgrades."]})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsxs("h2",{className:"text-2xl font-bold text-emerald-400 flex items-center gap-2",children:[e.jsx("span",{children:"💻"})," Hands-On Java Demo Code"]}),e.jsx(t,{fileModule:i,title:"OverrideAnnotationSafetyDemo.java",highlightLines:[12,19,20,29]})]}),e.jsx("section",{className:"space-y-4",children:e.jsx(r,{title:"@Override Annotation FAQs",questions:s})}),e.jsx("section",{className:"space-y-4",children:e.jsx(n,{content:o,title:"Module 002_006 Topic 4: @Override Annotation",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Printable Note",downloadFileName:"002_006_topic4_override_annotation_note.txt"})}),e.jsx(a,{note:"Never skip @Override! If the parent method changes its parameters in an update, @Override ensures your code fails loudly at compile time instead of failing quietly in production! — Sukanta Hui"})]})}export{y as default};
