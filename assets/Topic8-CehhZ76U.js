import{j as e}from"./vendor-react-core-Doz9nIC6.js";import{J as t}from"./JavaFileLoader-BfBG3xz_.js";import{F as r}from"./FAQTemplate-CkSqDH4B.js";import{P as n}from"./PlainTextPrint-C08xhKA4.js";import{T as a}from"./TeacherSukantaHui-CyIG3xbg.js";import"./JavaCodeBlock-BwsLxS3r.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-CIaKtAt4.js";const s=`/**\r
 * Java Core Tutorial - Module 012_001: GoF Design Patterns\r
 * Topic 8: Structural Patterns Overview - Composition Abstractions\r
 * Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
 */\r
\r
package com.coderaccotax.javatutorial.patterns;\r
\r
public class StructuralPatternsOverviewDemo {\r
\r
    public static void main(String[] args) {\r
        System.out.println("==========================================================================");\r
        System.out.println(" TOPIC 8: STRUCTURAL PATTERNS OVERVIEW - BARRACKPORE ACADEMY");\r
        System.out.println("==========================================================================\\n");\r
\r
        System.out.println(">>> THE 7 STRUCTURAL PATTERNS AT A GLANCE:");\r
        System.out.println("  --------------------------------------------------------------------------------------------------");\r
        System.out.println("  PATTERN           INTENT & PRIMARY USE CASE");\r
        System.out.println("  --------------------------------------------------------------------------------------------------");\r
        System.out.println("  1. Adapter        Convert interface of a class into another interface clients expect.");\r
        System.out.println("  2. Decorator      Attach additional responsibilities dynamically without subclassing (Java I/O).");\r
        System.out.println("  3. Facade         Provide a unified simple interface to a set of complex subsystem interfaces.");\r
        System.out.println("  4. Proxy          Provide a surrogate or placeholder for another object to control access.");\r
        System.out.println("  5. Composite      Compose objects into tree structures to represent part-whole hierarchies.");\r
        System.out.println("  6. Bridge         Decouple an abstraction from its implementation so the two can vary independently.");\r
        System.out.println("  7. Flyweight      Use sharing to support large numbers of fine-grained objects efficiently.");\r
        System.out.println("  --------------------------------------------------------------------------------------------------");\r
\r
        System.out.println("\\n==========================================================================");\r
    }\r
}\r
`,o=`================================================================================\r
JAVA CORE TUTORIAL - QUICK REVISION GUIDE\r
Module 012_001: GoF Design Patterns\r
Topic 8: Structural Patterns Overview\r
Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
================================================================================\r
\r
1. WHAT ARE STRUCTURAL PATTERNS:\r
   - Patterns concerned with how classes and objects are composed to form larger structures.\r
\r
2. CORE PRINCIPLE:\r
   - 'Favor composition over inheritance'.\r
\r
================================================================================\r
Classroom Practice: Barrackpore Academy | Mentor: Sukanta Hui\r
================================================================================\r
`,i=[{question:"What is the primary benefit of using object composition over class inheritance in structural patterns?",shortAnswer:"Composition allows component behaviors to be dynamically swapped and configured at runtime, avoids fragile base class hierarchies, and adheres to the Single Responsibility Principle.",explanation:"Core structural pattern principle.",hint:"Dynamic runtime flexibility without fragile inheritance trees.",level:"Beginner",codeExample:"Composition (has-a) vs Inheritance (is-a)."},{question:"Which structural pattern is standard for wrapping 3rd-party legacy libraries to match your new application interfaces?",shortAnswer:"The Adapter Pattern.",explanation:"Translates one interface into another.",hint:"The Adapter Pattern.",level:"Beginner",codeExample:"PaymentAdapter implements ModernPaymentGateway { ... }"}];function y(){return e.jsxs("div",{className:"space-y-12 px-4 md:px-8 py-8 text-slate-200 bg-slate-900 min-h-screen",children:[e.jsxs("header",{className:"space-y-4 border-b border-slate-800 pb-6",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"px-3 py-1 bg-sky-500/10 text-sky-400 border border-sky-500/20 text-xs font-semibold rounded-full uppercase tracking-wider",children:"Module 012_001 · Topic 8"}),e.jsx("span",{className:"px-3 py-1 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-xs font-semibold rounded-full",children:"GoF Design Patterns"})]}),e.jsxs("h1",{className:"text-3xl md:text-4xl font-extrabold text-white tracking-tight",children:["Structural Patterns: ",e.jsx("code",{className:"text-emerald-400 font-mono",children:"Composition Abstractions"})]}),e.jsx("p",{className:"text-base md:text-lg text-slate-400 leading-relaxed max-w-4xl",children:"Composing flexible architectures: understanding how structural patterns use object composition to connect classes and interfaces without rigid inheritance."})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsxs("h2",{className:"text-2xl font-bold text-emerald-400 flex items-center gap-2",children:[e.jsx("span",{children:"💻"})," Hands-On Java Demo Code"]}),e.jsx(t,{fileModule:s,title:"StructuralPatternsOverviewDemo.java",highlightLines:[18,25,34,43]})]}),e.jsx("section",{className:"space-y-4",children:e.jsx(r,{title:"GoF Design Patterns FAQs",questions:i})}),e.jsx("section",{className:"space-y-4",children:e.jsx(n,{content:o,title:"Module 012_001 Topic 8: Structural Patterns Overview",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Printable Note",downloadFileName:"012_001_topic8_structural_patterns_overview_note.txt"})}),e.jsx(a,{note:"Structural patterns show you how to assemble classes like LEGO bricks! Instead of creating rigid 10-level inheritance hierarchies that break when anything changes, use composition to wrap, adapt, and decorate objects! — Sukanta Hui"})]})}export{y as default};
