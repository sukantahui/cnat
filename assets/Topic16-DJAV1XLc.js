import{j as e}from"./vendor-react-core-Doz9nIC6.js";import{J as t}from"./JavaFileLoader-BfBG3xz_.js";import{F as s}from"./FAQTemplate-BHhlgA96.js";import{P as a}from"./PlainTextPrint-C08xhKA4.js";import{T as n}from"./TeacherSukantaHui-CEPuAfsb.js";import"./JavaCodeBlock-BwsLxS3r.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-DGCamHnX.js";const r=`/**\r
 * Java Core Tutorial - Module 002_010: The Object Class: equals(), hashCode(), toString() & clone()\r
 * Topic 16: The 'getClass()' Method: Inspecting Runtime Class Reflection Metadata\r
 * Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
 */\r
\r
package com.coderaccotax.javatutorial.objectclass;\r
\r
public class GetClassReflectionInspectionDemo {\r
\r
    public static class BaseAcademyMember {}\r
    public static class FullStackTrainee extends BaseAcademyMember {}\r
\r
    public static void main(String[] args) {\r
        System.out.println("==========================================================================");\r
        System.out.println(" TOPIC 16: The getClass() METHOD - BARRACKPORE");\r
        System.out.println("==========================================================================\\n");\r
\r
        BaseAcademyMember member = new FullStackTrainee(); // Upcasted reference\r
\r
        // 1. Inspecting runtime class metadata via getClass():\r
        Class<?> runtimeClass = member.getClass();\r
\r
        System.out.println(">>> Runtime Reflection Metadata:");\r
        System.out.println("  Simple Class Name   : " + runtimeClass.getSimpleName());\r
        System.out.println("  Full Binary Name    : " + runtimeClass.getName());\r
        System.out.println("  Canonical Name      : " + runtimeClass.getCanonicalName());\r
        System.out.println("  Superclass Name     : " + runtimeClass.getSuperclass().getSimpleName());\r
        System.out.println("  Is Interface?       : " + runtimeClass.isInterface());\r
        System.out.println("  Is Array?           : " + runtimeClass.isArray());\r
\r
        System.out.println("\\n>>> 'getClass()' vs 'instanceof' in equals() methods:");\r
        System.out.println("  - 'getClass() == other.getClass()' -> Requires EXACT same concrete class (Strict).");\r
        System.out.println("  - 'instanceof'                   -> Allows subclasses (Permissive, risks symmetry breach).");\r
\r
        System.out.println("\\n==========================================================================");\r
    }\r
}`,i=`================================================================================\r
JAVA CORE TUTORIAL - QUICK REVISION GUIDE\r
Module 002_010: The Object Class & Core Contracts\r
Topic 16: The getClass() Method\r
Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
================================================================================\r
\r
1. getClass() POWERS:\r
   - 'public final Class<?> getClass()'\r
   - Returns immutable Class<?> instance loaded by JVM ClassLoader.\r
   - Used for reflection, exact type equality checking, and annotations inspection.\r
\r
================================================================================\r
Classroom Practice: Barrackpore Academy | Mentor: Sukanta Hui\r
================================================================================`,l=[{question:"What does 'Object.getClass()' return in Java, and why is it marked 'final'?",shortAnswer:"'getClass()' returns the 'java.lang.Class' reflection descriptor representing the exact runtime class of the living Heap object. It is marked 'final' so that no subclass can override or tamper with JVM runtime type identification.",explanation:"Powers runtime reflection, Spring dependency injection, and JPA entity mapping.",hint:"Returns the runtime Class object; final to prevent tampering with type identification.",level:"Intermediate",codeExample:"Class<?> clazz = obj.getClass();"}];function h(){return e.jsxs("div",{className:"space-y-12 px-4 md:px-8 py-8 text-slate-200 bg-slate-900 min-h-screen",children:[e.jsx("style",{children:`
          @keyframes fadeIn {
            from { opacity: 0; transform: translateY(8px); }
            to { opacity: 1; transform: translateY(0); }
          }
          .animate-fade-in { animation: fadeIn 0.5s ease-out forwards; }
        `}),e.jsxs("header",{className:"space-y-4 border-b border-slate-800 pb-6 animate-fade-in",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"px-3 py-1 bg-sky-500/10 text-sky-400 border border-sky-500/20 text-xs font-semibold rounded-full uppercase tracking-wider",children:"Module 002_010 · Topic 16"}),e.jsx("span",{className:"px-3 py-1 bg-indigo-500/10 text-indigo-400 border border-indigo-500/20 text-xs font-semibold rounded-full",children:"Reflection Metadata"})]}),e.jsxs("h1",{className:"text-xl sm:text-2xl md:text-3xl font-bold text-white tracking-tight",children:["The ",e.jsx("code",{className:"text-indigo-400 font-mono",children:"getClass()"})," Method: Inspecting Runtime Reflection Metadata"]}),e.jsxs("p",{className:"text-base md:text-lg text-slate-400 leading-relaxed max-w-4xl",children:["Learn how ",e.jsx("code",{className:"text-indigo-300 font-mono",children:"getClass()"})," unlocks runtime reflection: inspecting concrete class types, hierarchies, and defending exact symmetry in ",e.jsx("code",{className:"text-emerald-300 font-mono",children:"equals()"}),"."]})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsxs("h2",{className:"text-2xl font-bold text-emerald-400 flex items-center gap-2",children:[e.jsx("span",{children:"💻"})," Hands-On Java Demo Code"]}),e.jsx(t,{fileModule:r,title:"GetClassReflectionInspectionDemo.java",highlightLines:[16,18,20,21,22,23]})]}),e.jsx("section",{className:"space-y-4",children:e.jsx(s,{title:"getClass() FAQs",questions:l})}),e.jsx("section",{className:"space-y-4",children:e.jsx(a,{content:i,title:"Module 002_010 Topic 16: getClass() Reflection",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Printable Note",downloadFileName:"002_010_topic16_getclass_note.txt"})}),e.jsx(n,{note:"getClass() is your object's official birth certificate in JVM memory. It tells frameworks like Spring exactly what bean type they are dealing with! — Sukanta Hui"})]})}export{h as default};
