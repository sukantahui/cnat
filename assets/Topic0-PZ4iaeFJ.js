import{j as e}from"./vendor-react-core-Doz9nIC6.js";import{J as n}from"./JavaFileLoader-BfBG3xz_.js";import{F as t}from"./FAQTemplate-CkSqDH4B.js";import{P as a}from"./PlainTextPrint-C08xhKA4.js";import{T as r}from"./TeacherSukantaHui-CC0AKmkm.js";import"./JavaCodeBlock-BwsLxS3r.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-BtJHuk7w.js";const i=`/**\r
 * Java Core Tutorial - Module 010_001: Java Reflection API & Dynamic Member Inspection\r
 * Topic 0: What is Java Reflection? Runtime Metaprogramming\r
 * Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
 */\r
\r
package com.coderaccotax.javatutorial.reflection;\r
\r
import java.lang.reflect.Method;\r
import java.lang.reflect.Modifier;\r
\r
public class WhatIsReflectionDemo {\r
\r
    public static void main(String[] args) {\r
        System.out.println("==========================================================================");\r
        System.out.println(" TOPIC 0: WHAT IS JAVA REFLECTION? - BARRACKPORE ACADEMY");\r
        System.out.println("==========================================================================\\n");\r
\r
        // Dynamic inspection of a class at runtime without compile-time direct coupling\r
        Class<?> clazz = StudentProfile.class;\r
\r
        System.out.println(">>> 1. BASIC RUNTIME INTROSPECTION:");\r
        System.out.println("  - Full Class Name   : " + clazz.getName());\r
        System.out.println("  - Simple Class Name : " + clazz.getSimpleName());\r
        System.out.println("  - Package Name      : " + clazz.getPackageName());\r
        System.out.println("  - Superclass        : " + clazz.getSuperclass().getSimpleName());\r
        System.out.println("  - Is Public?        : " + Modifier.isPublic(clazz.getModifiers()));\r
\r
        System.out.println("\\n>>> 2. DISCOVERING DECLARED METHODS DYNAMICALLY:");\r
        Method[] methods = clazz.getDeclaredMethods();\r
        for (Method m : methods) {\r
            System.out.println("  - Method: " + m.getName() + "() -> Return Type: " + m.getReturnType().getSimpleName());\r
        }\r
\r
        System.out.println("\\n>>> WHAT REFLECTION ENABLES:");\r
        System.out.println("  1. Dependency Injection (Spring Framework)");\r
        System.out.println("  2. Object-Relational Mapping (Hibernate / JPA)");\r
        System.out.println("  3. JSON Serialization (Jackson / Gson)");\r
        System.out.println("  4. Automated Testing Runners (JUnit 5)");\r
        System.out.println("==========================================================================");\r
    }\r
\r
    public static class StudentProfile {\r
        private String name;\r
        private String center;\r
        private double score;\r
\r
        public String getName() { return name; }\r
        public String getCenter() { return center; }\r
        public double getScore() { return score; }\r
        public void setScore(double score) { this.score = score; }\r
    }\r
}\r
`,o=`================================================================================\r
JAVA CORE TUTORIAL - QUICK REVISION GUIDE\r
Module 010_001: Java Reflection API & Dynamic Member Inspection\r
Topic 0: What is Java Reflection\r
Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
================================================================================\r
\r
1. DEFINITION OF REFLECTION:\r
   - The ability of a running program to examine and inspect its own internal metadata\r
     (classes, interfaces, constructors, methods, fields, annotations) and instantiate\r
     objects or invoke methods dynamically at runtime.\r
   - Core packages: 'java.lang.Class', 'java.lang.reflect.*'.\r
\r
2. METAPROGRAMMING USE CASES:\r
   - Frameworks (Spring DI, Hibernate ORM, Jackson JSON).\r
   - Dynamic Proxies and Aspect-Oriented Programming (AOP).\r
   - Test runners (JUnit discovering '@Test' methods).\r
   - Plugin architectures.\r
\r
================================================================================\r
Classroom Practice: Barrackpore Academy | Mentor: Sukanta Hui\r
================================================================================\r
`,s=[{question:"What is the primary capability provided by the Java Reflection API?",shortAnswer:"The Reflection API allows a running Java application to dynamically inspect class metadata, access internal fields, invoke methods, and instantiate objects without knowing their concrete types at compile time.",explanation:"Forms the foundational backbone of all modern Java frameworks.",hint:"Dynamic runtime introspection and execution without compile-time binding.",level:"Beginner",codeExample:"Class<?> clazz = Class.forName('com.example.Service'); Object instance = clazz.getDeclaredConstructor().newInstance();"},{question:"Why do frameworks like Spring and Hibernate rely heavily on Java Reflection?",shortAnswer:"Because user classes (Controllers, Services, JPA Entities) do not exist when the framework is compiled. Reflection allows the framework to dynamically discover user annotations, instantiate beans, and inject dependencies at application startup.",explanation:"Enables loose coupling and inversion of control.",hint:"Frameworks can discover and wire user classes dynamically without compile-time knowledge.",level:"Intermediate",codeExample:"@Autowired and @Entity scanning via Reflection"}];function x(){return e.jsxs("div",{className:"space-y-12 px-4 md:px-8 py-8 text-slate-200 bg-slate-900 min-h-screen",children:[e.jsxs("header",{className:"space-y-4 border-b border-slate-800 pb-6",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"px-3 py-1 bg-sky-500/10 text-sky-400 border border-sky-500/20 text-xs font-semibold rounded-full uppercase tracking-wider",children:"Module 010_001 · Topic 0"}),e.jsx("span",{className:"px-3 py-1 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-xs font-semibold rounded-full",children:"Reflection API & Metadata"})]}),e.jsxs("h1",{className:"text-3xl md:text-4xl font-extrabold text-white tracking-tight",children:["What is ",e.jsx("code",{className:"text-emerald-400 font-mono",children:"Java Reflection"}),"? Runtime Inspection & Metaprogramming"]}),e.jsx("p",{className:"text-base md:text-lg text-slate-400 leading-relaxed max-w-4xl",children:"Looking into the JVM mirror: examining, introspecting, and modifying classes, interfaces, constructors, methods, and fields dynamically at runtime."})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsxs("h2",{className:"text-2xl font-bold text-emerald-400 flex items-center gap-2",children:[e.jsx("span",{children:"💻"})," Hands-On Java Demo Code"]}),e.jsx(n,{fileModule:i,title:"WhatIsReflectionDemo.java",highlightLines:[18,25,34,43]})]}),e.jsx("section",{className:"space-y-4",children:e.jsx(t,{title:"Java Reflection FAQs",questions:s})}),e.jsx("section",{className:"space-y-4",children:e.jsx(a,{content:o,title:"Module 010_001 Topic 0: What is Reflection",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Printable Note",downloadFileName:"010_001_topic0_what_is_reflection_note.txt"})}),e.jsx(r,{note:"Reflection allows Java programs to inspect themselves at runtime! Without reflection, Spring cannot inject @Autowired dependencies, Hibernate cannot map database tables, and Jackson cannot serialize JSON! — Sukanta Hui"})]})}export{x as default};
