import{j as e}from"./vendor-react-core-Doz9nIC6.js";import{J as n}from"./JavaFileLoader-BfBG3xz_.js";import{F as t}from"./FAQTemplate-BHhlgA96.js";import{P as a}from"./PlainTextPrint-C08xhKA4.js";import{T as r}from"./TeacherSukantaHui-BaJcBHAy.js";import"./JavaCodeBlock-BwsLxS3r.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-8ao-0upJ.js";const i=`/**\r
 * Java Core Tutorial - Module 003_008: Java Enums & Specialized Methods\r
 * Topic 2: How the Compiler Compiles Enums: Implicit java.lang.Enum Inheritance & Final Architecture\r
 * Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
 */\r
\r
package com.coderaccotax.javatutorial.enums;\r
\r
public class CompilerEnumInheritanceDemo {\r
\r
    public enum StudentGrade {\r
        A_PLUS, A, B, C, F\r
    }\r
\r
    public static void main(String[] args) {\r
        System.out.println("==========================================================================");\r
        System.out.println(" TOPIC 2: HOW THE COMPILER COMPILES ENUMS - BARRACKPORE");\r
        System.out.println("==========================================================================\\n");\r
\r
        System.out.println(">>> What the 'javac' Compiler Generates Under the Hood for 'StudentGrade':");\r
        System.out.println();\r
        System.out.println("  public final class StudentGrade extends java.lang.Enum<StudentGrade> {");\r
        System.out.println("      public static final StudentGrade A_PLUS = new StudentGrade("A_PLUS", 0);");\r
        System.out.println("      public static final StudentGrade A      = new StudentGrade("A", 1);");\r
        System.out.println("      public static final StudentGrade B      = new StudentGrade("B", 2);");\r
        System.out.println("      public static final StudentGrade C      = new StudentGrade("C", 3);");\r
        System.out.println("      public static final StudentGrade F      = new StudentGrade("F", 4);");\r
        System.out.println("      private StudentGrade(String name, int ordinal) { super(name, ordinal); }");\r
        System.out.println("      public static StudentGrade[] values() { ... }");\r
        System.out.println("      public static StudentGrade valueOf(String name) { ... }");\r
        System.out.println("  }");\r
\r
        System.out.println("\\n>>> 3 CRITICAL ARCHITECTURAL CONSEQUENCES:");\r
        System.out.println("  1. Enums CANNOT extend another class (since Java lacks multiple class inheritance).");\r
        System.out.println("  2. Enum classes are implicitly 'final' (they cannot be subclassed).");\r
        System.out.println("  3. Enums CAN implement multiple interfaces!");\r
\r
        System.out.println("\\n==========================================================================");\r
    }\r
}`,s=`================================================================================\r
JAVA CORE TUTORIAL - QUICK REVISION GUIDE\r
Module 003_008: Java Enums & Specialized Methods\r
Topic 2: Compiler Enum Architecture\r
Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
================================================================================\r
\r
1. COMPILER SYNTHESIS:\r
   - 'public final class MyEnum extends java.lang.Enum<MyEnum>'\r
   - Constants are 'public static final' fields initialized with super(name, ordinal).\r
   - Cannot extend any class (already extends java.lang.Enum).\r
   - CAN implement interfaces.\r
\r
================================================================================\r
Classroom Practice: Barrackpore Academy | Mentor: Sukanta Hui\r
================================================================================`,l=[{question:"Can an enum in Java explicitly extend another class using the 'extends' keyword?",shortAnswer:"NO. Because the Java compiler automatically and implicitly makes every enum inherit from 'java.lang.Enum<E>'. Since Java does not support multiple class inheritance, an enum cannot extend any other class (though it CAN implement one or more interfaces).",explanation:"All enum classes are also implicitly final and cannot be subclassed.",hint:"Every enum implicitly extends java.lang.Enum; multiple inheritance of classes is forbidden.",level:"Intermediate",codeExample:"// enum Bad extends Parent {} // COMPILE ERROR: Cannot extend another class"}];function S(){return e.jsxs("div",{className:"space-y-12 px-4 md:px-8 py-8 text-slate-200 bg-slate-900 min-h-screen",children:[e.jsxs("header",{className:"space-y-4 border-b border-slate-800 pb-6",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"px-3 py-1 bg-sky-500/10 text-sky-400 border border-sky-500/20 text-xs font-semibold rounded-full uppercase tracking-wider",children:"Module 003_008 · Topic 2"}),e.jsx("span",{className:"px-3 py-1 bg-indigo-500/10 text-indigo-400 border border-indigo-500/20 text-xs font-semibold rounded-full",children:"Compiler Decompilation"})]}),e.jsxs("h1",{className:"text-xl sm:text-2xl md:text-3xl font-bold text-white tracking-tight",children:["How the Compiler Compiles Enums: Implicit ",e.jsx("code",{className:"text-indigo-400 font-mono",children:"java.lang.Enum"})," Inheritance"]}),e.jsxs("p",{className:"text-base md:text-lg text-slate-400 leading-relaxed max-w-4xl",children:["Decompile Java enums under the hood: understanding how ",e.jsx("code",{className:"text-emerald-300 font-mono",children:"javac"})," converts enum syntax into a final class extending ",e.jsx("code",{className:"text-indigo-300 font-mono",children:"java.lang.Enum"})," with static singleton constants."]})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsxs("h2",{className:"text-2xl font-bold text-emerald-400 flex items-center gap-2",children:[e.jsx("span",{children:"💻"})," Hands-On Java Demo Code"]}),e.jsx(n,{fileModule:i,title:"CompilerEnumInheritanceDemo.java",highlightLines:[7,10,17,18,19,20,21,22,29,30]})]}),e.jsx("section",{className:"space-y-4",children:e.jsx(t,{title:"Enum Inheritance FAQs",questions:l})}),e.jsx("section",{className:"space-y-4",children:e.jsx(a,{content:s,title:"Module 003_008 Topic 2: Compiler Enum Architecture",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Printable Note",downloadFileName:"003_008_topic2_compiler_enum_note.txt"})}),e.jsx(r,{note:"If an interviewer asks: 'Can an enum extend a class?', answer with a confident NO! Because the compiler already made it extend java.lang.Enum, and Java does not support multiple class inheritance! — Sukanta Hui"})]})}export{S as default};
