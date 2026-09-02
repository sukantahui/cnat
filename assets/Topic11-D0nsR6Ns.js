import{j as e}from"./vendor-react-core-Doz9nIC6.js";import{J as t}from"./JavaFileLoader-BfBG3xz_.js";import{F as n}from"./FAQTemplate-BHhlgA96.js";import{P as r}from"./PlainTextPrint-C08xhKA4.js";import{T as s}from"./TeacherSukantaHui-RpFLNJ5A.js";import"./JavaCodeBlock-BwsLxS3r.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-wprqVFW_.js";const i=`/**\r
 * Java Core Tutorial - Module 002_011: SOLID Object-Oriented Design Principles in Java\r
 * Topic 11: Code Smells & Anti-Patterns: God Object, Spaghetti Code & Tight Coupling\r
 * Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
 */\r
\r
package com.coderaccotax.javatutorial.solid;\r
\r
public class CodeSmellsAndAntiPatternsDemo {\r
\r
    public static void main(String[] args) {\r
        System.out.println("==========================================================================");\r
        System.out.println(" TOPIC 11: MAJOR OOP CODE SMELLS & ANTI-PATTERNS - BARRACKPORE");\r
        System.out.println("==========================================================================\\n");\r
\r
        System.out.println(">>> The 4 Deadliest Code Smells in Enterprise Java:");\r
        System.out.println();\r
        System.out.println("  1. THE GOD OBJECT (Bloated Class Anti-Pattern):");\r
        System.out.println("     - A single class that knows too much or does too much (1000+ lines).");\r
        System.out.println("     - Violates SRP. Hard to test, maintain, or understand.");\r
        System.out.println();\r
        System.out.println("  2. SPAGHETTI CODE:");\r
        System.out.println("     - Unstructured, tangled control flows with complex nested if-else ladders.");\r
        System.out.println("     - Violates OCP.");\r
        System.out.println();\r
        System.out.println("  3. TIGHT COUPLING (Concretions over Abstractions):");\r
        System.out.println("     - Classes instantiate concrete dependencies directly using 'new'.");\r
        System.out.println("     - Violates DIP.");\r
        System.out.println();\r
        System.out.println("  4. SHOTGUN SURGERY:");\r
        System.out.println("     - Making a single small business change requires modifying 15 different files.");\r
\r
        System.out.println("\\n==========================================================================");\r
    }\r
}`,a=`================================================================================\r
JAVA CORE TUTORIAL - QUICK REVISION GUIDE\r
Module 002_011: SOLID Design Principles\r
Topic 11: Code Smells & Anti-Patterns\r
Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
================================================================================\r
\r
1. ANTI-PATTERNS CATALOG:\r
   - God Object     → Cured by SRP.\r
   - Hardcoded 'new' → Cured by DIP & Dependency Injection.\r
   - Giant Switches → Cured by OCP & Strategy Pattern.\r
   - Fat Interfaces → Cured by ISP.\r
   - Fragile Child  → Cured by LSP.\r
\r
================================================================================\r
Classroom Practice: Barrackpore Academy | Mentor: Sukanta Hui\r
================================================================================`,o=[{question:"What is the 'God Object' anti-pattern and how do SOLID principles eliminate it?",shortAnswer:"A God Object is an oversized class that aggregates unrelated responsibilities (UI, database, calculations, email). Applying the Single Responsibility Principle (SRP) decomposes the God Object into cohesive, focused services.",explanation:"God Objects lead to severe merge conflicts and regression bugs.",hint:"A giant class doing everything; cured by applying SRP to split responsibilities.",level:"Beginner",codeExample:"// Anti-pattern: class ApplicationManager { void doEverything(); }"}];function x(){return e.jsxs("div",{className:"space-y-12 px-4 md:px-8 py-8 text-slate-200 bg-slate-900 min-h-screen",children:[e.jsx("style",{children:`
          @keyframes fadeIn {
            from { opacity: 0; transform: translateY(8px); }
            to { opacity: 1; transform: translateY(0); }
          }
          .animate-fade-in { animation: fadeIn 0.5s ease-out forwards; }
        `}),e.jsxs("header",{className:"space-y-4 border-b border-slate-800 pb-6 animate-fade-in",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"px-3 py-1 bg-rose-500/10 text-rose-400 border border-rose-500/20 text-xs font-semibold rounded-full uppercase tracking-wider",children:"Module 002_011 · Topic 11"}),e.jsx("span",{className:"px-3 py-1 bg-amber-500/10 text-amber-400 border border-amber-500/20 text-xs font-semibold rounded-full",children:"Anti-Pattern Diagnostics"})]}),e.jsx("h1",{className:"text-xl sm:text-2xl md:text-3xl font-bold text-white tracking-tight",children:"Code Smells & Anti-Patterns: God Object, Spaghetti Code & Tight Coupling"}),e.jsx("p",{className:"text-base md:text-lg text-slate-400 leading-relaxed max-w-4xl",children:"Diagnose and eliminate the most destructive design flaws in enterprise software: identifying God Objects, tangled spaghetti logic, tight coupling, and shotgun surgery."})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsxs("h2",{className:"text-2xl font-bold text-emerald-400 flex items-center gap-2",children:[e.jsx("span",{children:"💻"})," Hands-On Java Demo Code"]}),e.jsx(t,{fileModule:i,title:"CodeSmellsAndAntiPatternsDemo.java",highlightLines:[7,13,17,21,25]})]}),e.jsx("section",{className:"space-y-4",children:e.jsx(n,{title:"Code Smells FAQs",questions:o})}),e.jsx("section",{className:"space-y-4",children:e.jsx(r,{content:a,title:"Module 002_011 Topic 11: Code Smells & Anti-Patterns",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Printable Note",downloadFileName:"002_011_topic11_code_smells_note.txt"})}),e.jsx(s,{note:"If changing a button color requires editing 10 different files, you are suffering from 'Shotgun Surgery'! SOLID principles keep related code together and unrelated code separate. — Sukanta Hui"})]})}export{x as default};
