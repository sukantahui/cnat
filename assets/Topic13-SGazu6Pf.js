import{j as e}from"./vendor-react-core-Doz9nIC6.js";import{J as t}from"./JavaFileLoader-BfBG3xz_.js";import{F as a}from"./FAQTemplate-BHhlgA96.js";import{P as n}from"./PlainTextPrint-C08xhKA4.js";import{T as s}from"./TeacherSukantaHui-DerPxfxp.js";import"./JavaCodeBlock-BwsLxS3r.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-CH1iX9C8.js";const r=`/**\r
 * Java Core Tutorial - Module 002_009: Packages, Access Modifiers, JAR Packaging & Module System\r
 * Topic 13: Introduction to Java 9 Platform Module System (JPMS / Project Jigsaw)\r
 * Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
 */\r
\r
package com.coderaccotax.javatutorial.packages;\r
\r
public class Java9ModuleSystemOverviewDemo {\r
\r
    public static void main(String[] args) {\r
        System.out.println("==========================================================================");\r
        System.out.println(" TOPIC 13: JAVA 9 MODULE SYSTEM (JPMS / PROJECT JIGSAW) - BARRACKPORE");\r
        System.out.println("==========================================================================\\n");\r
\r
        System.out.println(">>> The 3 Historical Problems of Classpath (Before Java 9):");\r
        System.out.println("  1. 'JAR HELL' / Classpath Hell: Silent runtime NoClassDefFoundError crashes.");\r
        System.out.println("  2. Weak Encapsulation: If a class was 'public', every JAR on classpath could access its internals!");\r
        System.out.println("  3. Monolithic rt.jar: JDK runtime was huge (60MB+), impossible to run on small IoT devices.");\r
        System.out.println();\r
        System.out.println(">>> The Java 9 JPMS Solution (Project Jigsaw):");\r
        System.out.println("  ✔ Modular JDK: JDK split into ~90 modular chunks (java.base, java.sql, java.net.http, etc.).");\r
        System.out.println("  ✔ Reliable Configuration: Missing dependencies are caught during STARTUP, not runtime.");\r
        System.out.println("  ✔ Strong Encapsulation: Public classes are HIDDEN unless explicitly exported in 'module-info.java'!");\r
        System.out.println("  ✔ Custom JREs: Create ultra-lightweight 20MB microservice images using 'jlink' tool!");\r
\r
        System.out.println("\\n==========================================================================");\r
    }\r
}`,o=`================================================================================\r
JAVA CORE TUTORIAL - QUICK REVISION GUIDE\r
Module 002_009: Packages, Access Modifiers & Module System\r
Topic 13: Java 9 Platform Module System (JPMS)\r
Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
================================================================================\r
\r
1. JPMS ARCHITECTURE:\r
   - Module = Packages + Resources + module-info.java metadata.\r
   - Root Module: 'java.base' (automatically required by all modules).\r
   - Tooling: 'jlink' (create custom lightweight runtime images).\r
\r
================================================================================\r
Classroom Practice: Barrackpore Academy | Mentor: Sukanta Hui\r
================================================================================`,i=[{question:"What major problems did the Java 9 Module System (JPMS / Project Jigsaw) solve in enterprise Java?",shortAnswer:"1. Eliminated 'Classpath Hell' by validating dependencies at boot time. 2. Introduced Strong Encapsulation (public classes are private to the module unless exported). 3. Modularized the monolithic JDK (rt.jar) enabling custom minimal runtimes via 'jlink'.",explanation:"JPMS is the most significant architectural evolution of the Java platform since Java 5.",hint:"Solves classpath hell, enforces strong encapsulation, and enables minimal jlink runtimes.",level:"Intermediate",codeExample:"// module com.company.app { requires java.sql; }"}];function g(){return e.jsxs("div",{className:"space-y-12 px-4 md:px-8 py-8 text-slate-200 bg-slate-900 min-h-screen",children:[e.jsx("style",{children:`
          @keyframes fadeIn {
            from { opacity: 0; transform: translateY(8px); }
            to { opacity: 1; transform: translateY(0); }
          }
          .animate-fade-in { animation: fadeIn 0.5s ease-out forwards; }
        `}),e.jsxs("header",{className:"space-y-4 border-b border-slate-800 pb-6 animate-fade-in",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"px-3 py-1 bg-sky-500/10 text-sky-400 border border-sky-500/20 text-xs font-semibold rounded-full uppercase tracking-wider",children:"Module 002_009 · Topic 13"}),e.jsx("span",{className:"px-3 py-1 bg-purple-500/10 text-purple-400 border border-purple-500/20 text-xs font-semibold rounded-full",children:"Modern Java Architecture"})]}),e.jsx("h1",{className:"text-xl sm:text-2xl md:text-3xl font-bold text-white tracking-tight",children:"Introduction to Java 9 Platform Module System (JPMS / Project Jigsaw)"}),e.jsx("p",{className:"text-base md:text-lg text-slate-400 leading-relaxed max-w-4xl",children:"Understand the greatest architectural evolution in modern Java: ending classpath hell, modularizing the JDK, and introducing strong encapsulation across module boundaries."})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsxs("h2",{className:"text-2xl font-bold text-emerald-400 flex items-center gap-2",children:[e.jsx("span",{children:"💻"})," Hands-On Java Demo Code"]}),e.jsx(t,{fileModule:r,title:"Java9ModuleSystemOverviewDemo.java",highlightLines:[7,14,15,16,20,21]})]}),e.jsx("section",{className:"space-y-4",children:e.jsx(a,{title:"Java 9 JPMS FAQs",questions:i})}),e.jsx("section",{className:"space-y-4",children:e.jsx(n,{content:o,title:"Module 002_009 Topic 13: JPMS Overview",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Printable Note",downloadFileName:"002_009_topic13_jpms_note.txt"})}),e.jsx(s,{note:"Before Java 9, rt.jar was a massive 60MB monolith containing everything from CORBA to Swing. Java 9 broke it into clean modules, allowing us to build tiny 20MB microservices for Docker! — Sukanta Hui"})]})}export{g as default};
