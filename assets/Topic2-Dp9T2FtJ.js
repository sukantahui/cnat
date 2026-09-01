import{j as e}from"./vendor-react-core-Doz9nIC6.js";import{J as t}from"./JavaFileLoader-BfBG3xz_.js";import{F as n}from"./FAQTemplate-BHhlgA96.js";import{P as a}from"./PlainTextPrint-C08xhKA4.js";import{T as r}from"./TeacherSukantaHui-BaJcBHAy.js";import"./JavaCodeBlock-BwsLxS3r.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-8ao-0upJ.js";const i=`/**\r
 * Java Core Tutorial - Module 012_001: GoF Design Patterns\r
 * Topic 2: Creational Patterns Deep Dive - Instantiation Abstractions\r
 * Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
 */\r
\r
package com.coderaccotax.javatutorial.patterns;\r
\r
public class CreationalPatternsDeepDiveDemo {\r
\r
    public static void main(String[] args) {\r
        System.out.println("==========================================================================");\r
        System.out.println(" TOPIC 2: CREATIONAL PATTERNS OVERVIEW - BARRACKPORE ACADEMY");\r
        System.out.println("==========================================================================\\n");\r
\r
        System.out.println(">>> THE 5 CREATIONAL PATTERNS AT A GLANCE:");\r
        System.out.println("  --------------------------------------------------------------------------------------------------");\r
        System.out.println("  PATTERN           INTENT & PRIMARY USE CASE");\r
        System.out.println("  --------------------------------------------------------------------------------------------------");\r
        System.out.println("  1. Singleton      Ensure a class has only ONE instance and provide a global access point.");\r
        System.out.println("  2. Factory Method Define an interface for creating an object, but let subclasses decide the class.");\r
        System.out.println("  3. Abstract Fact. Create families of related or dependent objects without specifying concrete classes.");\r
        System.out.println("  4. Builder        Separate construction of complex objects from their representation (fluent chaining).");\r
        System.out.println("  5. Prototype      Create new objects by cloning an existing prototype instance.");\r
        System.out.println("  --------------------------------------------------------------------------------------------------");\r
\r
        System.out.println("\\n==========================================================================");\r
    }\r
}\r
`,o=`================================================================================\r
JAVA CORE TUTORIAL - QUICK REVISION GUIDE\r
Module 012_001: GoF Design Patterns\r
Topic 2: Creational Patterns Deep Dive\r
Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
================================================================================\r
\r
1. WHY CREATIONAL PATTERNS:\r
   - Decouples client code from concrete constructors.\r
   - Facilitates dependency injection, testability, and polymorphism.\r
\r
2. TOP 5 PATTERNS:\r
   - Singleton, Factory Method, Abstract Factory, Builder, Prototype.\r
\r
================================================================================\r
Classroom Practice: Barrackpore Academy | Mentor: Sukanta Hui\r
================================================================================\r
`,s=[{question:"Why is hardcoding the 'new' keyword across application classes considered an anti-pattern in large enterprise systems?",shortAnswer:"Because it tightly couples client classes to concrete implementations, preventing runtime polymorphism, dependency injection, mocking in unit tests, and dynamic configuration swapping.",explanation:"Violates the Open-Closed Principle and Dependency Inversion Principle.",hint:"Couples code to concrete classes, making mocking and swapping impossible.",level:"Intermediate",codeExample:"Bad: Service s = new HeavyServiceImpl(); Good: Service s = factory.create();"},{question:"Which creational pattern is ideal for constructing complex immutable objects with 10+ optional parameters?",shortAnswer:"The Builder Pattern.",explanation:"Provides readable fluent method chaining and enforces immutability.",hint:"The Builder Pattern.",level:"Beginner",codeExample:'Student s = Student.builder().name("Swadeep").score(95.0).build();'}];function h(){return e.jsxs("div",{className:"space-y-12 px-4 md:px-8 py-8 text-slate-200 bg-slate-900 min-h-screen",children:[e.jsxs("header",{className:"space-y-4 border-b border-slate-800 pb-6",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"px-3 py-1 bg-sky-500/10 text-sky-400 border border-sky-500/20 text-xs font-semibold rounded-full uppercase tracking-wider",children:"Module 012_001 · Topic 2"}),e.jsx("span",{className:"px-3 py-1 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-xs font-semibold rounded-full",children:"GoF Design Patterns"})]}),e.jsxs("h1",{className:"text-xl sm:text-2xl md:text-3xl font-bold text-white tracking-tight",children:["Creational Patterns: ",e.jsx("code",{className:"text-emerald-400 font-mono",children:"Instantiation Abstractions"})]}),e.jsx("p",{className:"text-base md:text-lg text-slate-400 leading-relaxed max-w-4xl",children:'Decoupling object birth: analyzing why hardcoding "new MyClass()" creates rigid coupling and how creational patterns introduce flexibility.'})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsxs("h2",{className:"text-2xl font-bold text-emerald-400 flex items-center gap-2",children:[e.jsx("span",{children:"💻"})," Hands-On Java Demo Code"]}),e.jsx(t,{fileModule:i,title:"CreationalPatternsDeepDiveDemo.java",highlightLines:[18,25,34,43]})]}),e.jsx("section",{className:"space-y-4",children:e.jsx(n,{title:"GoF Design Patterns FAQs",questions:s})}),e.jsx("section",{className:"space-y-4",children:e.jsx(a,{content:o,title:"Module 012_001 Topic 2: Creational Patterns Deep Dive",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Printable Note",downloadFileName:"012_001_topic2_creational_patterns_deep_dive_note.txt"})}),e.jsx(r,{note:"Whenever you write new SomeClass() directly in your code, you tightly couple your class to that concrete implementation! Creational patterns inject flexibility so you can swap implementations dynamically! — Sukanta Hui"})]})}export{h as default};
