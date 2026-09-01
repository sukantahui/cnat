import{j as e}from"./vendor-react-core-Doz9nIC6.js";import{J as n}from"./JavaFileLoader-BfBG3xz_.js";import{F as t}from"./FAQTemplate-BHhlgA96.js";import{P as i}from"./PlainTextPrint-C08xhKA4.js";import{T as r}from"./TeacherSukantaHui-BaJcBHAy.js";import"./JavaCodeBlock-BwsLxS3r.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-8ao-0upJ.js";const s=`/**\r
 * Java Core Tutorial - Module 002_011: SOLID Object-Oriented Design Principles in Java\r
 * Topic 0: Why Design Principles Matter: Maintainability, Extensibility & Scalability\r
 * Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
 */\r
\r
package com.coderaccotax.javatutorial.solid;\r
\r
public class WhyDesignPrinciplesMatterDemo {\r
\r
    public static void main(String[] args) {\r
        System.out.println("==========================================================================");\r
        System.out.println(" TOPIC 0: WHY DESIGN PRINCIPLES MATTER - BARRACKPORE");\r
        System.out.println("==========================================================================\\n");\r
\r
        System.out.println(">>> The 4 Pillars of Clean Software Engineering:");\r
        System.out.println("  1. MAINTAINABILITY: Clean code reduces bug fix times from days to minutes.");\r
        System.out.println("  2. EXTENSIBILITY  : Add new business requirements without breaking existing systems.");\r
        System.out.println("  3. TESTABILITY    : Modular, decoupled components can be easily unit-tested with mocks.");\r
        System.out.println("  4. SCALABILITY    : Clean boundaries enable microservices and high-throughput scaling.");\r
        System.out.println();\r
        System.out.println(">>> The SOLID Acronym Introduced by Robert C. Martin (Uncle Bob):");\r
        System.out.println("  [S] -> Single Responsibility Principle (SRP)");\r
        System.out.println("  [O] -> Open / Closed Principle (OCP)");\r
        System.out.println("  [L] -> Liskov Substitution Principle (LSP)");\r
        System.out.println("  [I] -> Interface Segregation Principle (ISP)");\r
        System.out.println("  [D] -> Dependency Inversion Principle (DIP)");\r
\r
        System.out.println("\\n==========================================================================");\r
    }\r
}`,a=`================================================================================\r
JAVA CORE TUTORIAL - QUICK REVISION GUIDE\r
Module 002_011: SOLID Design Principles\r
Topic 0: Why Design Principles Matter\r
Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
================================================================================\r
\r
1. SOLID ACRONYM:\r
   - S: Single Responsibility Principle (1 reason to change)\r
   - O: Open/Closed Principle (Open for extension, closed for modification)\r
   - L: Liskov Substitution Principle (Subtypes substitutable for base types)\r
   - I: Interface Segregation Principle (No client forced to depend on unused methods)\r
   - D: Dependency Inversion Principle (Depend on abstractions, not concretions)\r
\r
================================================================================\r
Classroom Practice: Barrackpore Academy | Mentor: Sukanta Hui\r
================================================================================`,o=[{question:"What does the SOLID acronym stand for in Object-Oriented Software Design?",shortAnswer:"S: Single Responsibility Principle, O: Open/Closed Principle, L: Liskov Substitution Principle, I: Interface Segregation Principle, D: Dependency Inversion Principle.",explanation:"Introduced by Robert C. Martin (Uncle Bob) to create robust, maintainable object-oriented architectures.",hint:"Single Responsibility, Open/Closed, Liskov Substitution, Interface Segregation, Dependency Inversion.",level:"Beginner",codeExample:"// SOLID: S-O-L-I-D architecture pillars"}];function S(){return e.jsxs("div",{className:"space-y-12 px-4 md:px-8 py-8 text-slate-200 bg-slate-900 min-h-screen",children:[e.jsx("style",{children:`
          @keyframes fadeIn {
            from { opacity: 0; transform: translateY(8px); }
            to { opacity: 1; transform: translateY(0); }
          }
          .animate-fade-in { animation: fadeIn 0.5s ease-out forwards; }
        `}),e.jsxs("header",{className:"space-y-4 border-b border-slate-800 pb-6 animate-fade-in",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"px-3 py-1 bg-sky-500/10 text-sky-400 border border-sky-500/20 text-xs font-semibold rounded-full uppercase tracking-wider",children:"Module 002_011 · Topic 0"}),e.jsx("span",{className:"px-3 py-1 bg-indigo-500/10 text-indigo-400 border border-indigo-500/20 text-xs font-semibold rounded-full",children:"Software Craftsmanship"})]}),e.jsx("h1",{className:"text-xl sm:text-2xl md:text-3xl font-bold text-white tracking-tight",children:"Why Design Principles Matter: Maintainability, Extensibility & Scalability"}),e.jsx("p",{className:"text-base md:text-lg text-slate-400 leading-relaxed max-w-4xl",children:"Discover why SOLID principles separate amateur coding from enterprise engineering: eliminating spaghetti dependencies and enabling painless software evolution."})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsxs("h2",{className:"text-2xl font-bold text-emerald-400 flex items-center gap-2",children:[e.jsx("span",{children:"💻"})," Hands-On Java Demo Code"]}),e.jsx(n,{fileModule:s,title:"WhyDesignPrinciplesMatterDemo.java",highlightLines:[7,13,14,15,16,20,21,22,23,24]})]}),e.jsx("section",{className:"space-y-4",children:e.jsx(t,{title:"SOLID Principles FAQs",questions:o})}),e.jsx("section",{className:"space-y-4",children:e.jsx(i,{content:a,title:"Module 002_011 Topic 0: Why Design Principles Matter",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Printable Note",downloadFileName:"002_011_topic0_why_solid_note.txt"})}),e.jsx(r,{note:"Writing code that works is easy; writing code that your teammates can read, test, and expand 3 years later without breaking everything is true craftsmanship. That is why we learn SOLID! — Sukanta Hui"})]})}export{S as default};
