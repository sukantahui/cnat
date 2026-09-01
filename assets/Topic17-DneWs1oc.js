import{j as e}from"./vendor-react-core-Doz9nIC6.js";import{J as t}from"./JavaFileLoader-BfBG3xz_.js";import{F as n}from"./FAQTemplate-BHhlgA96.js";import{P as a}from"./PlainTextPrint-C08xhKA4.js";import{T as r}from"./TeacherSukantaHui-BaJcBHAy.js";import"./JavaCodeBlock-BwsLxS3r.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-8ao-0upJ.js";const i=`/**\r
 * Java Core Tutorial - Module 002_004: Static Variables, Methods, Blocks & Singleton\r
 * Topic 17: Enum Singleton: The Most Robust Singleton Implementation in Java\r
 * Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
 */\r
\r
package com.coderaccotax.javatutorial.statics;\r
\r
public class EnumSingletonRobustnessDemo {\r
\r
    // JOSHUA BLOCH'S GOLD STANDARD: Enum Singleton\r
    // 1. Thread-safe by JVM definition.\r
    // 2. Immune to Java Reflection attacks!\r
    // 3. Immune to Serialization / Deserialization duplicate creation!\r
    public enum CentralAcademicAuthority {\r
        INSTANCE; // Exactly one instance created by JVM\r
\r
        private String authorityLead = "Sukanta Hui";\r
        private String headquarters = "Barrackpore Central Hub";\r
\r
        public void issueCertificate(String traineeName, String course) {\r
            System.out.printf("  [AUTHORITY CERTIFICATE] %s certified in %s by %s @ %s\\n",\r
                    traineeName, course, authorityLead, headquarters);\r
        }\r
\r
        public void printStatus() {\r
            System.out.println("  -> Authority Singleton Active: " + name() + " (Hash: " + System.identityHashCode(this) + ")");\r
        }\r
    }\r
\r
    public static void main(String[] args) {\r
        System.out.println("==========================================================================");\r
        System.out.println(" TOPIC 17: ENUM SINGLETON ROBUSTNESS - BARRACKPORE");\r
        System.out.println("==========================================================================\\n");\r
\r
        System.out.println(">>> 1. Using Enum Singleton to issue certificates:");\r
        CentralAcademicAuthority auth1 = CentralAcademicAuthority.INSTANCE;\r
        auth1.issueCertificate("Swadeep Paul", "Java Core & Spring Boot Pro");\r
        auth1.printStatus();\r
\r
        System.out.println("\\n>>> 2. Verifying identity across references:");\r
        CentralAcademicAuthority auth2 = CentralAcademicAuthority.INSTANCE;\r
        System.out.println("  Is auth1 == auth2? " + (auth1 == auth2));\r
\r
        System.out.println("\\n==========================================================================");\r
        System.out.println(" MODULE 002_004 STATIC & SINGLETON PATTERNS 100% COMPLETE!");\r
        System.out.println("==========================================================================");\r
    }\r
}`,o=`================================================================================\r
JAVA CORE TUTORIAL - QUICK REVISION GUIDE\r
Module 002_004: Static Variables, Methods, Blocks & The Singleton Pattern\r
Topic 17: Enum Singleton: The Most Robust Singleton in Java\r
Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
================================================================================\r
\r
1. WHY ENUM SINGLETON IS UNBEATABLE:\r
   - 100% Thread-safe (guaranteed by JVM).\r
   - Reflection Proof: 'Constructor.newInstance()' throws IllegalArgumentException for Enums.\r
   - Serialization Proof: Java guarantees only 1 enum constant exists during deserialization.\r
   - Recommended by Joshua Bloch (Effective Java).\r
\r
================================================================================\r
Classroom Practice: Barrackpore Academy | Mentor: Sukanta Hui\r
================================================================================`,s=[{question:"Why did Joshua Bloch (author of Effective Java) recommend Enum as the best way to implement a Singleton in Java?",shortAnswer:"Because Enum singletons provide ironclad protection against both Java Reflection instantiation attacks and Serialization/Deserialization duplicate creation, while guaranteeing thread-safety automatically.",explanation:"The JVM strictly forbids reflecting on enum constructors and handles enum serialization natively without creating new instances.",hint:"Immune to Reflection attacks and Serialization duplicate instance traps.",level:"Expert",codeExample:"public enum Singleton { INSTANCE; public void doWork() {} }"}];function g(){return e.jsxs("div",{className:"space-y-12 px-4 md:px-8 py-8 text-slate-200 bg-slate-900 min-h-screen",children:[e.jsx("style",{children:`
          @keyframes fadeIn {
            from { opacity: 0; transform: translateY(8px); }
            to { opacity: 1; transform: translateY(0); }
          }
          .animate-fade-in { animation: fadeIn 0.5s ease-out forwards; }
        `}),e.jsxs("header",{className:"space-y-4 border-b border-slate-800 pb-6 animate-fade-in",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"px-3 py-1 bg-sky-500/10 text-sky-400 border border-sky-500/20 text-xs font-semibold rounded-full uppercase tracking-wider",children:"Module 002_004 · Topic 17"}),e.jsx("span",{className:"px-3 py-1 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-xs font-semibold rounded-full",children:"Joshua Bloch Gold Standard"})]}),e.jsx("h1",{className:"text-xl sm:text-2xl md:text-3xl font-bold text-white tracking-tight",children:"Enum Singleton: The Most Robust Singleton Implementation in Java"}),e.jsx("p",{className:"text-base md:text-lg text-slate-400 leading-relaxed max-w-4xl",children:"Learn why Joshua Bloch declared the Enum Singleton the gold standard of Java design patterns: completely immune to reflection attacks, serialization duplicates, and multithreaded race conditions."})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsxs("h2",{className:"text-2xl font-bold text-emerald-400 flex items-center gap-2",children:[e.jsx("span",{children:"💻"})," Hands-On Java Demo Code"]}),e.jsx(t,{fileModule:i,title:"EnumSingletonRobustnessDemo.java",highlightLines:[14,15,20,32,37]})]}),e.jsx("section",{className:"space-y-4",children:e.jsx(n,{title:"Enum Singleton FAQs",questions:s})}),e.jsx("section",{className:"space-y-4",children:e.jsx(a,{content:o,title:"Module 002_004 Topic 17: Enum Singleton",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Printable Note",downloadFileName:"002_004_topic17_enum_singleton_note.txt"})}),e.jsx(r,{note:"Congratulations on finishing Module 002_004! Remember Joshua Bloch's golden advice: A single-element enum type is the best way to implement a singleton. Keep building great software in Barrackpore! — Sukanta Hui"})]})}export{g as default};
