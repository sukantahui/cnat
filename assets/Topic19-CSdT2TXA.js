import{j as e}from"./vendor-react-core-Doz9nIC6.js";import{J as t}from"./JavaFileLoader-BfBG3xz_.js";import{F as n}from"./FAQTemplate-CkSqDH4B.js";import{P as r}from"./PlainTextPrint-C08xhKA4.js";import{T as s}from"./TeacherSukantaHui-CyIG3xbg.js";import"./JavaCodeBlock-BwsLxS3r.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-CIaKtAt4.js";const a=`/**\r
 * Java Core Tutorial - Module 012_001: GoF Design Patterns\r
 * Topic 19: Architectural Anti-Patterns - Over-Engineering & God Objects (Capstone)\r
 * Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
 */\r
\r
package com.coderaccotax.javatutorial.patterns;\r
\r
public class AntiPatternsCapstoneDemo {\r
\r
    public static void main(String[] args) {\r
        System.out.println("==========================================================================");\r
        System.out.println(" TOPIC 19: ARCHITECTURAL ANTI-PATTERNS CAPSTONE - BARRACKPORE");\r
        System.out.println("==========================================================================\\n");\r
\r
        System.out.println(">>> THE TOP 4 ARCHITECTURAL ANTI-PATTERNS TO AVOID:");\r
        System.out.println("  1. PREMATURE PATTERNIZATION (Over-Engineering):");\r
        System.out.println("     - Creating 15 interfaces and factories for a 20-line utility script.");\r
        System.out.println("     - Rule: Apply KISS (Keep It Simple, Stupid) and YAGNI (You Aren't Gonna Need It).\\n");\r
\r
        System.out.println("  2. GOD OBJECT (Blob Anti-Pattern):");\r
        System.out.println("     - A single monster class with 5,000 lines of code handling database, UI, and business rules.");\r
        System.out.println("     - Solution: Refactor using Single Responsibility Principle (SRP) into DAOs, Services, and Controllers.\\n");\r
\r
        System.out.println("  3. GOLDEN HAMMER (Law of the Instrument):");\r
        System.out.println("     - Forcing your favorite pattern (e.g. Singleton or Observer) onto EVERY problem even when inappropriate.\\n");\r
\r
        System.out.println("  4. CARGO CULT PROGRAMMING:");\r
        System.out.println("     - Copying design pattern boilerplate without understanding WHY the pattern is needed.");\r
\r
        System.out.println("\\n==========================================================================");\r
        System.out.println(" MODULE 012_001 COMPLETE: GOF DESIGN PATTERNS MASTERED!");\r
        System.out.println("==========================================================================");\r
    }\r
}\r
`,o=`================================================================================\r
JAVA CORE TUTORIAL - QUICK REVISION GUIDE\r
Module 012_001: GoF Design Patterns\r
Topic 19: Anti-Patterns Capstone\r
Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
================================================================================\r
\r
1. WHAT IS AN ANTI-PATTERN:\r
   - A common response to a recurring problem that is usually ineffective and risks being highly counterproductive.\r
\r
2. CORE GUIDING LAWS:\r
   - KISS  : Keep It Simple, Stupid.\r
   - YAGNI : You Aren't Gonna Need It.\r
   - DRY   : Don't Repeat Yourself.\r
\r
================================================================================\r
Classroom Practice: Barrackpore Academy | Mentor: Sukanta Hui\r
================================================================================\r
`,i=[{question:"What is the 'God Object' (Blob) anti-pattern and how should it be remediated?",shortAnswer:"A God Object is a massive class that knows or does too much, accumulating hundreds of responsibilities and monopolizing system processing. It should be refactored into cohesive, single-responsibility classes (Services, DAOs, Validators).",explanation:"Major violation of Single Responsibility Principle.",hint:"A monster class that attempts to do everything across all layers.",level:"Beginner",codeExample:"Refactor GodClass into UserService, UserDao, and UserValidator."},{question:"What is 'Premature Patternization' and why is it harmful?",shortAnswer:"Introducing complex design patterns, multiple layers of abstraction, and speculative generic factories before a concrete problem exists, resulting in unreadable code, excessive cognitive load, and slowed development velocity.",explanation:"Violates KISS and YAGNI principles.",hint:"Adding unnecessary pattern complexity before a clear problem justifies it.",level:"Beginner",codeExample:"Writing 10 classes for a simple string concatenation."}];function A(){return e.jsxs("div",{className:"space-y-12 px-4 md:px-8 py-8 text-slate-200 bg-slate-900 min-h-screen",children:[e.jsxs("header",{className:"space-y-4 border-b border-slate-800 pb-6",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"px-3 py-1 bg-sky-500/10 text-sky-400 border border-sky-500/20 text-xs font-semibold rounded-full uppercase tracking-wider",children:"Module 012_001 · Topic 19"}),e.jsx("span",{className:"px-3 py-1 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-xs font-semibold rounded-full",children:"GoF Design Patterns"})]}),e.jsxs("h1",{className:"text-3xl md:text-4xl font-extrabold text-white tracking-tight",children:["Architectural Anti-Patterns: ",e.jsx("code",{className:"text-emerald-400 font-mono",children:"Over-Engineering & God Objects"})," (Capstone)"]}),e.jsx("p",{className:"text-base md:text-lg text-slate-400 leading-relaxed max-w-4xl",children:"Pragmatic craftsmanship: avoiding Premature Patternization, God Objects, Golden Hammers, and Cargo Cult design in production systems."})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsxs("h2",{className:"text-2xl font-bold text-emerald-400 flex items-center gap-2",children:[e.jsx("span",{children:"💻"})," Hands-On Java Demo Code"]}),e.jsx(t,{fileModule:a,title:"AntiPatternsCapstoneDemo.java",highlightLines:[18,25,34,43,52]})]}),e.jsx("section",{className:"space-y-4",children:e.jsx(n,{title:"GoF Design Patterns FAQs",questions:i})}),e.jsx("section",{className:"space-y-4",children:e.jsx(r,{content:o,title:"Module 012_001 Topic 19: Anti-Patterns Capstone",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Printable Note",downloadFileName:"012_001_topic19_antipatterns_capstone_note.txt"})}),e.jsx(s,{note:"Congratulations on completing Module 1 of Segment 12! Remember: Patterns are solutions to real problems, not toys to show off! Always write the simplest code that works first (KISS / YAGNI), and refactor to patterns only when complexity demands it! — Sukanta Hui"})]})}export{A as default};
