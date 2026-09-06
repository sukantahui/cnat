import{j as e}from"./vendor-react-core-Doz9nIC6.js";import{J as t}from"./JavaFileLoader-BfBG3xz_.js";import{F as a}from"./FAQTemplate-BHhlgA96.js";import{P as r}from"./PlainTextPrint-C08xhKA4.js";import{T as n}from"./TeacherSukantaHui-DDN87fI5.js";import"./JavaCodeBlock-BwsLxS3r.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-DEsnU7fn.js";const o=`/**\r
 * Java Core Tutorial - Module 002_004: Static Variables, Methods, Blocks & Singleton\r
 * Topic 6: Can Static Methods Be Overloaded? (Yes, Compile-Time Polymorphism)\r
 * Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
 */\r
\r
package com.coderaccotax.javatutorial.statics;\r
\r
public class StaticMethodOverloadingDemo {\r
\r
    public static class FormatToolkit {\r
        // Overloaded static method 1: Formats student name\r
        public static String formatInfo(String studentName) {\r
            return "Trainee: " + studentName.toUpperCase();\r
        }\r
\r
        // Overloaded static method 2: Formats name + roll\r
        public static String formatInfo(String studentName, int roll) {\r
            return String.format("Trainee: %s [Roll #%d]", studentName, roll);\r
        }\r
\r
        // Overloaded static method 3: Formats name + roll + hub\r
        public static String formatInfo(String studentName, int roll, String hub) {\r
            return String.format("Trainee: %s [Roll #%d] @ %s Hub", studentName, roll, hub);\r
        }\r
    }\r
\r
    public static void main(String[] args) {\r
        System.out.println("==========================================================================");\r
        System.out.println(" TOPIC 6: STATIC METHOD OVERLOADING - BARRACKPORE");\r
        System.out.println("==========================================================================\\n");\r
\r
        System.out.println(FormatToolkit.formatInfo("Swadeep Paul"));\r
        System.out.println(FormatToolkit.formatInfo("Tuhina Das", 102));\r
        System.out.println(FormatToolkit.formatInfo("Debangshu Mukherjee", 103, "Barrackpore"));\r
\r
        System.out.println("\\n==========================================================================");\r
    }\r
}`,s=`================================================================================\r
JAVA CORE TUTORIAL - QUICK REVISION GUIDE\r
Module 002_004: Static Variables, Methods, Blocks & The Singleton Pattern\r
Topic 6: Static Method Overloading\r
Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
================================================================================\r
\r
1. OVERLOADING RULES:\r
   - Static methods CAN be overloaded freely by changing parameter types/counts.\r
   - Resolved at compile time based on static reference types.\r
\r
================================================================================\r
Classroom Practice: Barrackpore Academy | Mentor: Sukanta Hui\r
================================================================================`,i=[{question:"Can static methods be overloaded in Java?",shortAnswer:"Yes! Java allows multiple static methods with the same name in the same class as long as their parameter lists (types, count, or order) differ.",explanation:"Static method overloading is resolved statically at compile time using static method signatures.",hint:"Yes, static methods can be overloaded based on different parameter signatures.",level:"Beginner",codeExample:`static void print(int a) {}
static void print(String s) {}`}];function g(){return e.jsxs("div",{className:"space-y-12 px-4 md:px-8 py-8 text-slate-200 bg-slate-900 min-h-screen",children:[e.jsx("style",{children:`
          @keyframes fadeIn {
            from { opacity: 0; transform: translateY(8px); }
            to { opacity: 1; transform: translateY(0); }
          }
          .animate-fade-in { animation: fadeIn 0.5s ease-out forwards; }
        `}),e.jsxs("header",{className:"space-y-4 border-b border-slate-800 pb-6 animate-fade-in",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"px-3 py-1 bg-sky-500/10 text-sky-400 border border-sky-500/20 text-xs font-semibold rounded-full uppercase tracking-wider",children:"Module 002_004 · Topic 6"}),e.jsx("span",{className:"px-3 py-1 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-xs font-semibold rounded-full",children:"Compile-Time Polymorphism"})]}),e.jsx("h1",{className:"text-xl sm:text-2xl md:text-3xl font-bold text-white tracking-tight",children:"Can Static Methods Be Overloaded? (Yes!)"}),e.jsx("p",{className:"text-base md:text-lg text-slate-400 leading-relaxed max-w-4xl",children:"Learn how compile-time method signature resolution allows static methods to be overloaded cleanly across parameter counts and types."})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsxs("h2",{className:"text-2xl font-bold text-emerald-400 flex items-center gap-2",children:[e.jsx("span",{children:"💻"})," Hands-On Java Demo Code"]}),e.jsx(t,{fileModule:o,title:"StaticMethodOverloadingDemo.java",highlightLines:[12,17,22,31,32,33]})]}),e.jsx("section",{className:"space-y-4",children:e.jsx(a,{title:"Static Method Overloading FAQs",questions:i})}),e.jsx("section",{className:"space-y-4",children:e.jsx(r,{content:s,title:"Module 002_004 Topic 6: Static Method Overloading",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Printable Note",downloadFileName:"002_004_topic6_static_overloading_note.txt"})}),e.jsx(n,{note:"Yes, static methods can be overloaded just like regular instance methods! The compiler picks the right method at compile time based on parameter types. — Sukanta Hui"})]})}export{g as default};
