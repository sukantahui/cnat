import{j as e}from"./vendor-react-core-Doz9nIC6.js";import{J as n}from"./JavaFileLoader-BfBG3xz_.js";import{F as s}from"./FAQTemplate-BHhlgA96.js";import{P as t}from"./PlainTextPrint-C08xhKA4.js";import{T as a}from"./TeacherSukantaHui-BaJcBHAy.js";import"./JavaCodeBlock-BwsLxS3r.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-8ao-0upJ.js";const r=`/**\r
 * Java Core Tutorial - Module 003_007: Nested & Inner Classes\r
 * Topic 1: The 4 Types of Nested Classes Taxonomy: Member, Static Nested, Local & Anonymous\r
 * Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
 */\r
\r
package com.coderaccotax.javatutorial.nested;\r
\r
public class FourNestedClassTypesTaxonomyDemo {\r
\r
    // 1. Non-Static Member Inner Class:\r
    public class MemberInner {\r
        public void info() { System.out.println("  1. Member Inner Class (Bound to Outer instance)"); }\r
    }\r
\r
    // 2. Static Nested Class:\r
    public static class StaticNested {\r
        public void info() { System.out.println("  2. Static Nested Class (NOT bound to Outer instance)"); }\r
    }\r
\r
    public void processMethod() {\r
        // 3. Method-Local Inner Class:\r
        class MethodLocalInner {\r
            public void info() { System.out.println("  3. Method-Local Inner Class (Scoped inside method)"); }\r
        }\r
        new MethodLocalInner().info();\r
\r
        // 4. Anonymous Inner Class:\r
        Runnable anon = new Runnable() {\r
            @Override\r
            public void run() {\r
                System.out.println("  4. Anonymous Inner Class (Unnamed on-the-fly implementation)");\r
            }\r
        };\r
        anon.run();\r
    }\r
\r
    public static void main(String[] args) {\r
        System.out.println("==========================================================================");\r
        System.out.println(" TOPIC 1: THE 4 TYPES OF NESTED CLASSES - BARRACKPORE");\r
        System.out.println("==========================================================================\\n");\r
\r
        FourNestedClassTypesTaxonomyDemo outer = new FourNestedClassTypesTaxonomyDemo();\r
\r
        outer.new MemberInner().info();\r
        new FourNestedClassTypesTaxonomyDemo.StaticNested().info();\r
        outer.processMethod();\r
\r
        System.out.println("\\n==========================================================================");\r
    }\r
}`,o=`================================================================================\r
JAVA CORE TUTORIAL - QUICK REVISION GUIDE\r
Module 003_007: Nested & Inner Classes\r
Topic 1: 4 Types of Nested Classes\r
Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
================================================================================\r
\r
1. TAXONOMY MAP:\r
   - 'Member Inner'  : Non-static class at member level.\r
   - 'Static Nested' : Static class at member level.\r
   - 'Method-Local'  : Class inside a method body.\r
   - 'Anonymous'     : Unnamed class created inline.\r
\r
================================================================================\r
Classroom Practice: Barrackpore Academy | Mentor: Sukanta Hui\r
================================================================================`,l=[{question:"What are the 4 distinct categories of nested classes available in Java?",shortAnswer:"1. Non-Static Member Inner Class (declared at class level, holds outer 'this' reference). 2. Static Nested Class (declared at class level with 'static', no outer reference). 3. Method-Local Inner Class (declared inside a method body). 4. Anonymous Inner Class (unnamed inline class instantiation).",explanation:"Technically, non-static nested classes are called 'Inner Classes'.",hint:"Member Inner, Static Nested, Method-Local, and Anonymous Inner classes.",level:"Beginner",codeExample:"class Outer { class Inner {} static class StaticN {} void m() { class Local {} } }"}];function h(){return e.jsxs("div",{className:"space-y-12 px-4 md:px-8 py-8 text-slate-200 bg-slate-900 min-h-screen",children:[e.jsxs("header",{className:"space-y-4 border-b border-slate-800 pb-6",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"px-3 py-1 bg-sky-500/10 text-sky-400 border border-sky-500/20 text-xs font-semibold rounded-full uppercase tracking-wider",children:"Module 003_007 · Topic 1"}),e.jsx("span",{className:"px-3 py-1 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-xs font-semibold rounded-full",children:"Taxonomy Architecture"})]}),e.jsx("h1",{className:"text-xl sm:text-2xl md:text-3xl font-bold text-white tracking-tight",children:"The 4 Types of Nested Classes in Java: Member, Static, Local & Anonymous"}),e.jsx("p",{className:"text-base md:text-lg text-slate-400 leading-relaxed max-w-4xl",children:"Master the complete nested class taxonomy: contrasting member-level inner classes, static standalone nested classes, method-scoped local classes, and anonymous expression blocks."})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsxs("h2",{className:"text-2xl font-bold text-emerald-400 flex items-center gap-2",children:[e.jsx("span",{children:"💻"})," Hands-On Java Demo Code"]}),e.jsx(n,{fileModule:r,title:"FourNestedClassTypesTaxonomyDemo.java",highlightLines:[7,10,15,20,26,38,39,40]})]}),e.jsx("section",{className:"space-y-4",children:e.jsx(s,{title:"4 Nested Types FAQs",questions:l})}),e.jsx("section",{className:"space-y-4",children:e.jsx(t,{content:o,title:"Module 003_007 Topic 1: 4 Types of Nested Classes",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Printable Note",downloadFileName:"003_007_topic1_four_nested_types_note.txt"})}),e.jsx(a,{note:"Remember the terminology: in official Java specification, only NON-STATIC nested classes are called 'Inner Classes'. A static nested class is NOT technically an inner class! — Sukanta Hui"})]})}export{h as default};
