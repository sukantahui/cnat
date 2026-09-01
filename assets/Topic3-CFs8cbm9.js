import{j as e}from"./vendor-react-core-Doz9nIC6.js";import{J as t}from"./JavaFileLoader-BfBG3xz_.js";import{F as n}from"./FAQTemplate-BHhlgA96.js";import{P as s}from"./PlainTextPrint-C08xhKA4.js";import{T as a}from"./TeacherSukantaHui-BaJcBHAy.js";import"./JavaCodeBlock-BwsLxS3r.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-8ao-0upJ.js";const r=`/**\r
 * Java Core Tutorial - Module 002_010: The Object Class: equals(), hashCode(), toString() & clone()\r
 * Topic 3: The 'equals(Object obj)' Method: Reference Identity (==) vs Semantic Equality\r
 * Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
 */\r
\r
package com.coderaccotax.javatutorial.objectclass;\r
\r
public class EqualsVsReferenceComparisonDemo {\r
\r
    public static class StudentRecord {\r
        private int studentId;\r
        private String name;\r
\r
        public StudentRecord(int id, String name) {\r
            this.studentId = id;\r
            this.name = name;\r
        }\r
\r
        // SEMANTIC EQUALITY: Overriding equals() to compare field values!\r
        @Override\r
        public boolean equals(Object obj) {\r
            if (this == obj) return true; // Reference check\r
            if (obj == null || getClass() != obj.getClass()) return false;\r
            StudentRecord other = (StudentRecord) obj;\r
            return this.studentId == other.studentId &&\r
                   (this.name != null && this.name.equals(other.name));\r
        }\r
    }\r
\r
    public static void main(String[] args) {\r
        System.out.println("==========================================================================");\r
        System.out.println(" TOPIC 3: '==' VS 'equals()' IN JAVA - BARRACKPORE");\r
        System.out.println("==========================================================================\\n");\r
\r
        StudentRecord s1 = new StudentRecord(101, "Swadeep Paul");\r
        StudentRecord s2 = new StudentRecord(101, "Swadeep Paul"); // Separate Heap instance!\r
\r
        System.out.println(">>> 1. Comparing with '==' operator (Reference Identity / Memory Address):");\r
        System.out.println("  s1 == s2                  : " + (s1 == s2) + " (Different memory addresses!)");\r
\r
        System.out.println("\\n>>> 2. Comparing with overridden 'equals()' (Semantic Value Equality):");\r
        System.out.println("  s1.equals(s2)             : " + s1.equals(s2) + " (Identical studentId & name!)");\r
\r
        System.out.println("\\n==========================================================================");\r
    }\r
}`,o=`================================================================================\r
JAVA CORE TUTORIAL - QUICK REVISION GUIDE\r
Module 002_010: The Object Class & Core Contracts\r
Topic 3: '==' vs equals() Comparison\r
Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
================================================================================\r
\r
1. '==' VS equals():\r
   - '=='       : Primitive value equality OR Object reference identity.\r
   - 'equals()' : Logical semantic equality of object contents.\r
   - Default Object.equals() delegates directly to 'this == obj'.\r
\r
================================================================================\r
Classroom Practice: Barrackpore Academy | Mentor: Sukanta Hui\r
================================================================================`,i=[{question:"What is the fundamental difference between the '==' operator and the 'equals()' method in Java?",shortAnswer:"'==' tests for reference identity (checks if both variables point to the exact same memory address on the Heap). 'equals()' tests for logical/semantic equality (compares internal field values when overridden).",explanation:"By default, Object.equals() uses '==' until overridden by a class like String or custom entities.",hint:"'==' compares memory addresses; 'equals()' compares field contents.",level:"Beginner",codeExample:`s1 == s2; // false (different objects)
s1.equals(s2); // true (same fields)`}];function f(){return e.jsxs("div",{className:"space-y-12 px-4 md:px-8 py-8 text-slate-200 bg-slate-900 min-h-screen",children:[e.jsx("style",{children:`
          @keyframes fadeIn {
            from { opacity: 0; transform: translateY(8px); }
            to { opacity: 1; transform: translateY(0); }
          }
          .animate-fade-in { animation: fadeIn 0.5s ease-out forwards; }
        `}),e.jsxs("header",{className:"space-y-4 border-b border-slate-800 pb-6 animate-fade-in",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"px-3 py-1 bg-sky-500/10 text-sky-400 border border-sky-500/20 text-xs font-semibold rounded-full uppercase tracking-wider",children:"Module 002_010 · Topic 3"}),e.jsx("span",{className:"px-3 py-1 bg-amber-500/10 text-amber-400 border border-amber-500/20 text-xs font-semibold rounded-full",children:"Core Contract"})]}),e.jsxs("h1",{className:"text-xl sm:text-2xl md:text-3xl font-bold text-white tracking-tight",children:["The ",e.jsx("code",{className:"text-amber-400 font-mono",children:"equals(Object obj)"})," Method: Reference Identity (",e.jsx("code",{className:"text-rose-400 font-mono",children:"=="}),") vs Semantic Equality"]}),e.jsx("p",{className:"text-base md:text-lg text-slate-400 leading-relaxed max-w-4xl",children:"Master the foundational comparison distinction in Java: memory reference addresses vs logical content equality."})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsxs("h2",{className:"text-2xl font-bold text-emerald-400 flex items-center gap-2",children:[e.jsx("span",{children:"💻"})," Hands-On Java Demo Code"]}),e.jsx(t,{fileModule:r,title:"EqualsVsReferenceComparisonDemo.java",highlightLines:[17,18,19,20,34,37]})]}),e.jsx("section",{className:"space-y-4",children:e.jsx(n,{title:"equals() vs == FAQs",questions:i})}),e.jsx("section",{className:"space-y-4",children:e.jsx(s,{content:o,title:"Module 002_010 Topic 3: equals() vs ==",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Printable Note",downloadFileName:"002_010_topic3_equals_vs_identity_note.txt"})}),e.jsx(a,{note:"'==' asks: 'Are these two variables pointing to the exact same spot in RAM?' while equals() asks: 'Do these two students have the same name and ID?'. Never use == for business object comparisons! — Sukanta Hui"})]})}export{f as default};
