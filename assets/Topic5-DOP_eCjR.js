import{j as e}from"./vendor-react-core-Doz9nIC6.js";import{J as t}from"./JavaFileLoader-BfBG3xz_.js";import{F as n}from"./FAQTemplate-BHhlgA96.js";import{P as a}from"./PlainTextPrint-C08xhKA4.js";import{T as s}from"./TeacherSukantaHui-DerPxfxp.js";import"./JavaCodeBlock-BwsLxS3r.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-CH1iX9C8.js";const r=`/**\r
 * Java Core Tutorial - Module 003_007: Nested & Inner Classes\r
 * Topic 5: Static Nested Class: Architecture, Independence & Instantiation\r
 * Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
 */\r
\r
package com.coderaccotax.javatutorial.nested;\r
\r
public class StaticNestedClassArchitectureDemo {\r
\r
    private static String institutionType = "Higher Technical Education";\r
    private String campusName = "Naihati Center";\r
\r
    // Static Nested Class:\r
    public static class CourseCatalog {\r
        private String courseTitle = "Java Core Fullstack Pro";\r
\r
        public void printDetails() {\r
            // Can access outer STATIC fields:\r
            System.out.println("  Institution Type : " + institutionType);\r
            System.out.println("  Course Title     : " + courseTitle);\r
\r
            // COMPILE ERROR if we try to access non-static 'campusName' directly:\r
            // System.out.println(campusName); // Cannot make a static reference!\r
        }\r
    }\r
\r
    public static void main(String[] args) {\r
        System.out.println("==========================================================================");\r
        System.out.println(" TOPIC 5: STATIC NESTED CLASS ARCHITECTURE - BARRACKPORE");\r
        System.out.println("==========================================================================\\n");\r
\r
        // Instantiating Static Nested class WITHOUT an Outer class instance:\r
        StaticNestedClassArchitectureDemo.CourseCatalog catalog =\r
                new StaticNestedClassArchitectureDemo.CourseCatalog();\r
\r
        System.out.println(">>> Executing Static Nested CourseCatalog Method:");\r
        catalog.printDetails();\r
\r
        System.out.println("\\n>>> ARCHITECTURAL TRAIT:");\r
        System.out.println("  Static nested classes do NOT hold a hidden reference to an outer object,");\r
        System.out.println("  making them lightweight, memory-efficient, and immune to memory leaks!");\r
\r
        System.out.println("\\n==========================================================================");\r
    }\r
}`,i=`================================================================================\r
JAVA CORE TUTORIAL - QUICK REVISION GUIDE\r
Module 003_007: Nested & Inner Classes\r
Topic 5: Static Nested Class\r
Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
================================================================================\r
\r
1. STATIC NESTED CLASS:\r
   - Holds NO reference to outer instance.\r
   - Can access outer static members only.\r
   - Instantiation: 'new Outer.StaticNested()'.\r
   - Highly memory efficient (prevents memory leaks).\r
\r
================================================================================\r
Classroom Practice: Barrackpore Academy | Mentor: Sukanta Hui\r
================================================================================`,o=[{question:"How does a Static Nested Class differ from a Non-Static Member Inner Class in memory and reference holding?",shortAnswer:"A Static Nested Class behaves like a regular top-level class packaged inside another class for namespace convenience. It does NOT hold a hidden reference to an outer instance, cannot access non-static outer fields directly, and can be instantiated directly using 'new Outer.StaticNested()'.",explanation:"Favored in Effective Java (Item 24: Favor static member classes over non-static).",hint:"Holds no hidden outer reference; instantiated without an outer object.",level:"Beginner",codeExample:"Outer.StaticNested nested = new Outer.StaticNested();"}];function S(){return e.jsxs("div",{className:"space-y-12 px-4 md:px-8 py-8 text-slate-200 bg-slate-900 min-h-screen",children:[e.jsxs("header",{className:"space-y-4 border-b border-slate-800 pb-6",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"px-3 py-1 bg-sky-500/10 text-sky-400 border border-sky-500/20 text-xs font-semibold rounded-full uppercase tracking-wider",children:"Module 003_007 · Topic 5"}),e.jsx("span",{className:"px-3 py-1 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-xs font-semibold rounded-full",children:"Static Architecture"})]}),e.jsxs("h1",{className:"text-xl sm:text-2xl md:text-3xl font-bold text-white tracking-tight",children:[e.jsx("code",{className:"text-emerald-400 font-mono",children:"Static Nested Class"}),": Zero Outer Reference & Direct Instantiation"]}),e.jsxs("p",{className:"text-base md:text-lg text-slate-400 leading-relaxed max-w-4xl",children:["Master standalone nested architecture: constructing static nested objects with ",e.jsx("code",{className:"text-emerald-300 font-mono",children:"new Outer.StaticNested()"}),", memory efficiency, and eliminating outer reference leaks."]})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsxs("h2",{className:"text-2xl font-bold text-emerald-400 flex items-center gap-2",children:[e.jsx("span",{children:"💻"})," Hands-On Java Demo Code"]}),e.jsx(t,{fileModule:r,title:"StaticNestedClassArchitectureDemo.java",highlightLines:[7,10,14,18,29,30]})]}),e.jsx("section",{className:"space-y-4",children:e.jsx(n,{title:"Static Nested Class FAQs",questions:o})}),e.jsx("section",{className:"space-y-4",children:e.jsx(a,{content:i,title:"Module 003_007 Topic 5: Static Nested Class",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Printable Note",downloadFileName:"003_007_topic5_static_nested_class_note.txt"})}),e.jsx(s,{note:"If your nested class does not need to access non-static fields of the outer class, ALWAYS mark it 'static'! Joshua Bloch calls this one of the most important rules in Effective Java! — Sukanta Hui"})]})}export{S as default};
