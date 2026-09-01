import{j as t}from"./vendor-react-core-Doz9nIC6.js";import{J as a}from"./JavaFileLoader-BfBG3xz_.js";import{F as e}from"./FAQTemplate-BHhlgA96.js";import{P as r}from"./PlainTextPrint-C08xhKA4.js";import{T as s}from"./TeacherSukantaHui-BaJcBHAy.js";import"./JavaCodeBlock-BwsLxS3r.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-8ao-0upJ.js";const n=`/**\r
 * Java Core Tutorial - Module 002_007: Abstract Classes & Partial Abstraction\r
 * Topic 1: What is an Abstract Class: Definition, Syntax & 'abstract' Keyword\r
 * Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
 */\r
\r
package com.coderaccotax.javatutorial.abstraction;\r
\r
public class AbstractClassSyntaxDemo {\r
\r
    // ABSTRACT CLASS: Declared using 'abstract' modifier\r
    public abstract static class CourseCurriculum {\r
        protected String courseTitle;\r
        protected int durationHours;\r
\r
        public CourseCurriculum(String title, int hours) {\r
            this.courseTitle = title;\r
            this.durationHours = hours;\r
        }\r
\r
        // Abstract method: Signature only\r
        public abstract void conductFinalAssessment();\r
\r
        // Concrete method: Fully implemented logic\r
        public void printCurriculumSummary() {\r
            System.out.printf("  [CURRICULUM] %s (%d Total Hours)\\n", courseTitle, durationHours);\r
        }\r
    }\r
\r
    // Concrete Subclass\r
    public static class FullStackJavaCurriculum extends CourseCurriculum {\r
        public FullStackJavaCurriculum() {\r
            super("Full Stack Java & Spring Boot", 180);\r
        }\r
\r
        @Override\r
        public void conductFinalAssessment() {\r
            System.out.println("  [ASSESSMENT] Full Stack Capstone: Building Multi-tier Banking App with Spring & React!");\r
        }\r
    }\r
\r
    public static void main(String[] args) {\r
        System.out.println("==========================================================================");\r
        System.out.println(" TOPIC 1: ABSTRACT CLASS SYNTAX & STRUCTURE - BARRACKPORE");\r
        System.out.println("==========================================================================\\n");\r
\r
        CourseCurriculum curriculum = new FullStackJavaCurriculum();\r
        curriculum.printCurriculumSummary();\r
        curriculum.conductFinalAssessment();\r
\r
        System.out.println("\\n==========================================================================");\r
    }\r
}`,i=`================================================================================\r
JAVA CORE TUTORIAL - QUICK REVISION GUIDE\r
Module 002_007: Abstract Classes & Partial Abstraction\r
Topic 1: Abstract Class Syntax & Definition\r
Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
================================================================================\r
\r
1. ABSTRACT CLASS ANATOMY:\r
   - Keyword: 'abstract class ClassName { ... }'\r
   - Can hold: abstract methods, concrete methods, constructors, instance fields, static variables.\r
   - Purpose: Define common baseline state and mandate subclass implementation.\r
\r
================================================================================\r
Classroom Practice: Barrackpore Academy | Mentor: Sukanta Hui\r
================================================================================`,c=[{question:"What is an Abstract Class in Java and how is it declared?",shortAnswer:"A class declared with the 'abstract' keyword ('public abstract class ClassName { ... }') that serves as an incomplete template for subclasses and cannot be directly instantiated.",explanation:"Can contain both abstract methods (without bodies) and concrete methods (with bodies).",hint:"Declared with 'abstract' modifier; incomplete template that cannot be instantiated directly.",level:"Beginner",codeExample:"public abstract class BaseService { public abstract void execute(); }"}];function h(){return t.jsxs("div",{className:"space-y-12 px-4 md:px-8 py-8 text-slate-200 bg-slate-900 min-h-screen",children:[t.jsx("style",{children:`
          @keyframes fadeIn {
            from { opacity: 0; transform: translateY(8px); }
            to { opacity: 1; transform: translateY(0); }
          }
          .animate-fade-in { animation: fadeIn 0.5s ease-out forwards; }
        `}),t.jsxs("header",{className:"space-y-4 border-b border-slate-800 pb-6 animate-fade-in",children:[t.jsxs("div",{className:"flex items-center gap-3",children:[t.jsx("span",{className:"px-3 py-1 bg-sky-500/10 text-sky-400 border border-sky-500/20 text-xs font-semibold rounded-full uppercase tracking-wider",children:"Module 002_007 · Topic 1"}),t.jsx("span",{className:"px-3 py-1 bg-amber-500/10 text-amber-400 border border-amber-500/20 text-xs font-semibold rounded-full",children:"Syntax & Structure"})]}),t.jsxs("h1",{className:"text-xl sm:text-2xl md:text-3xl font-bold text-white tracking-tight",children:["What is an Abstract Class: Definition, Syntax & the ",t.jsx("code",{className:"text-amber-400 font-mono",children:"abstract"})," Keyword"]}),t.jsx("p",{className:"text-base md:text-lg text-slate-400 leading-relaxed max-w-4xl",children:"Learn the structure and grammar of abstract classes: combining concrete state with abstract method declarations to establish rigid subclass blueprints."})]}),t.jsxs("section",{className:"space-y-4",children:[t.jsxs("h2",{className:"text-2xl font-bold text-emerald-400 flex items-center gap-2",children:[t.jsx("span",{children:"💻"})," Hands-On Java Demo Code"]}),t.jsx(a,{fileModule:n,title:"AbstractClassSyntaxDemo.java",highlightLines:[11,19,22,29,35,45]})]}),t.jsx("section",{className:"space-y-4",children:t.jsx(e,{title:"Abstract Class Syntax FAQs",questions:c})}),t.jsx("section",{className:"space-y-4",children:t.jsx(r,{content:i,title:"Module 002_007 Topic 1: Abstract Class Syntax",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Printable Note",downloadFileName:"002_007_topic1_abstract_syntax_note.txt"})}),t.jsx(s,{note:"An abstract class is an architectural blueprint. It says: 'Here are the common features I provide, and here are the specific methods you MUST implement yourself!' — Sukanta Hui"})]})}export{h as default};
