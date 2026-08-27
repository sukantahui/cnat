import{j as e}from"./vendor-react-core-Doz9nIC6.js";import{J as t}from"./JavaFileLoader-BfBG3xz_.js";import{F as n}from"./FAQTemplate-CkSqDH4B.js";import{P as r}from"./PlainTextPrint-C08xhKA4.js";import{T as o}from"./TeacherSukantaHui-CyIG3xbg.js";import"./JavaCodeBlock-BwsLxS3r.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-CIaKtAt4.js";const a=`/**\r
 * Java Core Tutorial - Module 002_009: Packages, Access Modifiers, JAR Packaging & Module System\r
 * Topic 14: module-info.java Syntax: 'module', 'requires', 'exports', 'opens'\r
 * Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
 */\r
\r
package com.coderaccotax.javatutorial.packages;\r
\r
public class ModuleDescriptorSyntaxDemo {\r
\r
    public static void main(String[] args) {\r
        System.out.println("==========================================================================");\r
        System.out.println(" TOPIC 14: module-info.java DESCRIPTOR SYNTAX - BARRACKPORE");\r
        System.out.println("==========================================================================\\n");\r
\r
        System.out.println(">>> The 4 Core Directives in 'module-info.java':");\r
        System.out.println();\r
        System.out.println("  1. 'module <module.name> { ... }'");\r
        System.out.println("     Declares a named module.");\r
        System.out.println();\r
        System.out.println("  2. 'requires <module.name>;'");\r
        System.out.println("     Declares a DEPENDENCY on another module (e.g. 'requires java.sql;').");\r
        System.out.println();\r
        System.out.println("  3. 'exports <package.name>;'");\r
        System.out.println("     EXPOSES all public types in that package to other modules.");\r
        System.out.println("     (Unexported packages remain STRICTLY PRIVATE inside the module!).");\r
        System.out.println();\r
        System.out.println("  4. 'opens <package.name>;'");\r
        System.out.println("     Permits runtime DEEP REFLECTION (e.g. for Spring Boot / Hibernate / Jackson).");\r
\r
        System.out.println("\\n==========================================================================");\r
    }\r
}`,s=`================================================================================\r
JAVA CORE TUTORIAL - QUICK REVISION GUIDE\r
Module 002_009: Packages, Access Modifiers & Module System\r
Topic 14: module-info.java Syntax & Directives\r
Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
================================================================================\r
\r
1. MODULE DIRECTIVES CHEATSHEET:\r
   - 'requires M;'        &rarr; Module depends on M.\r
   - 'requires transitive M;' &rarr; Anyone requiring this module also gets M.\r
   - 'exports P;'         &rarr; Package P public types accessible to callers.\r
   - 'exports P to M1, M2;' &rarr; Qualified export to specific modules only.\r
   - 'opens P;'           &rarr; Opens package P for runtime reflection.\r
\r
================================================================================\r
Classroom Practice: Barrackpore Academy | Mentor: Sukanta Hui\r
================================================================================`,i=[{question:"What is the difference between 'exports' and 'opens' in a 'module-info.java' descriptor?",shortAnswer:"'exports' makes public classes in the package accessible at both compile-time and runtime. 'opens' allows runtime deep reflection (including private field access) by frameworks like Spring Boot or Jackson without exposing compile-time access.",explanation:"If you don't 'open' a package, reflection frameworks like Hibernate will fail with an IllegalAccessException.",hint:"'exports' for compile-time public API; 'opens' for runtime reflection by frameworks.",level:"Advanced",codeExample:"module com.app { exports com.app.api; opens com.app.model to spring.core; }"}];function y(){return e.jsxs("div",{className:"space-y-12 px-4 md:px-8 py-8 text-slate-200 bg-slate-900 min-h-screen",children:[e.jsx("style",{children:`
          @keyframes fadeIn {
            from { opacity: 0; transform: translateY(8px); }
            to { opacity: 1; transform: translateY(0); }
          }
          .animate-fade-in { animation: fadeIn 0.5s ease-out forwards; }
        `}),e.jsxs("header",{className:"space-y-4 border-b border-slate-800 pb-6 animate-fade-in",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"px-3 py-1 bg-sky-500/10 text-sky-400 border border-sky-500/20 text-xs font-semibold rounded-full uppercase tracking-wider",children:"Module 002_009 · Topic 14"}),e.jsx("span",{className:"px-3 py-1 bg-purple-500/10 text-purple-400 border border-purple-500/20 text-xs font-semibold rounded-full",children:"JPMS Directives"})]}),e.jsxs("h1",{className:"text-3xl md:text-4xl font-extrabold text-white tracking-tight",children:[e.jsx("code",{className:"text-purple-400 font-mono",children:"module-info.java"})," Syntax: ",e.jsx("code",{className:"text-emerald-400 font-mono",children:"requires"}),", ",e.jsx("code",{className:"text-sky-400 font-mono",children:"exports"})," & ",e.jsx("code",{className:"text-amber-400 font-mono",children:"opens"})]}),e.jsxs("p",{className:"text-base md:text-lg text-slate-400 leading-relaxed max-w-4xl",children:["Master the configuration grammar of Java 9 module descriptors: declaring dependency graphs with ",e.jsx("code",{className:"text-emerald-300 font-mono",children:"requires"}),", exposing APIs with ",e.jsx("code",{className:"text-sky-300 font-mono",children:"exports"}),", and granting reflection with ",e.jsx("code",{className:"text-amber-300 font-mono",children:"opens"}),"."]})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsxs("h2",{className:"text-2xl font-bold text-emerald-400 flex items-center gap-2",children:[e.jsx("span",{children:"💻"})," Hands-On Java Demo Code"]}),e.jsx(t,{fileModule:a,title:"ModuleDescriptorSyntaxDemo.java",highlightLines:[7,14,17,20,24]})]}),e.jsx("section",{className:"space-y-4",children:e.jsx(n,{title:"module-info.java FAQs",questions:i})}),e.jsx("section",{className:"space-y-4",children:e.jsx(r,{content:s,title:"Module 002_009 Topic 14: module-info.java Directives",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Printable Note",downloadFileName:"002_009_topic14_module_info_note.txt"})}),e.jsx(o,{note:"If you are using Spring Boot or Jackson to convert objects to JSON, always remember to 'opens com.app.model;' in your module-info so Jackson can reflectively inspect your fields! — Sukanta Hui"})]})}export{y as default};
