import{j as e}from"./vendor-react-core-Doz9nIC6.js";import{J as t}from"./JavaFileLoader-BfBG3xz_.js";import{F as n}from"./FAQTemplate-CkSqDH4B.js";import{P as a}from"./PlainTextPrint-C08xhKA4.js";import{T as r}from"./TeacherSukantaHui-CyIG3xbg.js";import"./JavaCodeBlock-BwsLxS3r.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-CIaKtAt4.js";const o=`/**\r
 * Java Core Tutorial - Module 012_001: GoF Design Patterns\r
 * Topic 1: The 3 Categories of GoF Design Patterns\r
 * Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
 */\r
\r
package com.coderaccotax.javatutorial.patterns;\r
\r
public class ThreeCategoriesGofPatternsDemo {\r
\r
    public static void main(String[] args) {\r
        System.out.println("==========================================================================");\r
        System.out.println(" TOPIC 1: THE 3 GOF DESIGN PATTERN FAMILIES - BARRACKPORE");\r
        System.out.println("==========================================================================\\n");\r
\r
        System.out.println(">>> 1. CREATIONAL PATTERNS (Object Instantiation Mechanisms):");\r
        System.out.println("  - Focus: Abstracting the instantiation process to make systems independent of how objects are created.");\r
        System.out.println("  - Key Patterns: Singleton, Factory Method, Abstract Factory, Builder, Prototype.\\n");\r
\r
        System.out.println(">>> 2. STRUCTURAL PATTERNS (Class & Object Composition):");\r
        System.out.println("  - Focus: How classes and objects are composed to form larger, flexible structures.");\r
        System.out.println("  - Key Patterns: Adapter, Decorator, Facade, Proxy, Bridge, Composite, Flyweight.\\n");\r
\r
        System.out.println(">>> 3. BEHAVIORAL PATTERNS (Object Communication & Responsibility Assignment):");\r
        System.out.println("  - Focus: Algorithms and assignment of responsibilities between collaborating objects.");\r
        System.out.println("  - Key Patterns: Strategy, Observer, Command, Chain of Responsibility, Template Method, State, Iterator, Mediator, Memento, Visitor, Interpreter.");\r
\r
        System.out.println("\\n==========================================================================");\r
    }\r
}\r
`,s=`================================================================================\r
JAVA CORE TUTORIAL - QUICK REVISION GUIDE\r
Module 012_001: GoF Design Patterns\r
Topic 1: 3 Categories of GoF Patterns\r
Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
================================================================================\r
\r
1. THE THREE PILLARS:\r
   - Creational (5 patterns)  : Instantiation and object creation.\r
   - Structural (7 patterns)  : Composition and relationships between classes.\r
   - Behavioral (11 patterns) : Interaction, algorithms, and message passing.\r
\r
================================================================================\r
Classroom Practice: Barrackpore Academy | Mentor: Sukanta Hui\r
================================================================================\r
`,i=[{question:"What is the primary distinguishing intent between Creational, Structural, and Behavioral patterns?",shortAnswer:"Creational patterns deal with object creation mechanisms; Structural patterns deal with class and object composition; Behavioral patterns deal with communication and responsibility assignment between objects.",explanation:"Clear taxonomy of object-oriented design concerns.",hint:"Creational = Object Creation; Structural = Composition; Behavioral = Communication/Algorithms.",level:"Beginner",codeExample:"Creational (Builder) vs Structural (Adapter) vs Behavioral (Strategy)."},{question:"How many total design patterns were published in the original GoF book across all three categories?",shortAnswer:"23 design patterns (5 Creational, 7 Structural, 11 Behavioral).",explanation:"The complete classical GoF catalog.",hint:"23 patterns (5 + 7 + 11).",level:"Beginner",codeExample:"Total: 23 GoF Design Patterns."}];function g(){return e.jsxs("div",{className:"space-y-12 px-4 md:px-8 py-8 text-slate-200 bg-slate-900 min-h-screen",children:[e.jsxs("header",{className:"space-y-4 border-b border-slate-800 pb-6",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"px-3 py-1 bg-sky-500/10 text-sky-400 border border-sky-500/20 text-xs font-semibold rounded-full uppercase tracking-wider",children:"Module 012_001 · Topic 1"}),e.jsx("span",{className:"px-3 py-1 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-xs font-semibold rounded-full",children:"GoF Design Patterns"})]}),e.jsxs("h1",{className:"text-3xl md:text-4xl font-extrabold text-white tracking-tight",children:["The 3 GoF Categories: ",e.jsx("code",{className:"text-emerald-400 font-mono",children:"Creational, Structural & Behavioral"})]}),e.jsx("p",{className:"text-base md:text-lg text-slate-400 leading-relaxed max-w-4xl",children:"Taxonomy of 23 patterns: categorizing patterns by intent into object creation, class composition, and object communication."})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsxs("h2",{className:"text-2xl font-bold text-emerald-400 flex items-center gap-2",children:[e.jsx("span",{children:"💻"})," Hands-On Java Demo Code"]}),e.jsx(t,{fileModule:o,title:"ThreeCategoriesGofPatternsDemo.java",highlightLines:[18,25,34,43]})]}),e.jsx("section",{className:"space-y-4",children:e.jsx(n,{title:"GoF Design Patterns FAQs",questions:i})}),e.jsx("section",{className:"space-y-4",children:e.jsx(a,{content:s,title:"Module 012_001 Topic 1: 3 Categories of GoF Patterns",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Printable Note",downloadFileName:"012_001_topic1_three_categories_gof_patterns_note.txt"})}),e.jsx(r,{note:"The 23 GoF patterns are divided into 3 simple families: Creational (HOW objects are born), Structural (HOW objects fit together), and Behavioral (HOW objects talk to each other)! — Sukanta Hui"})]})}export{g as default};
