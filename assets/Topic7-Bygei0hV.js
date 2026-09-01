import{j as e}from"./vendor-react-core-Doz9nIC6.js";import{J as t}from"./JavaFileLoader-BfBG3xz_.js";import{F as r}from"./FAQTemplate-BHhlgA96.js";import{P as n}from"./PlainTextPrint-C08xhKA4.js";import{T as o}from"./TeacherSukantaHui-BaJcBHAy.js";import"./JavaCodeBlock-BwsLxS3r.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-8ao-0upJ.js";const a=`/**\r
 * Java Core Tutorial - Module 012_001: GoF Design Patterns\r
 * Topic 7: The Prototype Pattern - Object Cloning & Deep Copies\r
 * Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
 */\r
\r
package com.coderaccotax.javatutorial.patterns;\r
\r
public class PrototypePatternDemo {\r
\r
    public interface Prototype<T> {\r
        T copy();\r
    }\r
\r
    public static class CourseTemplate implements Prototype<CourseTemplate> {\r
        private String courseCode;\r
        private String title;\r
        private double baseFee;\r
\r
        public CourseTemplate(String code, String title, double fee) {\r
            this.courseCode = code;\r
            this.title = title;\r
            this.baseFee = fee;\r
        }\r
\r
        // Copy constructor / Prototype copy method:\r
        @Override\r
        public CourseTemplate copy() {\r
            return new CourseTemplate(this.courseCode, this.title, this.baseFee);\r
        }\r
\r
        public void setBaseFee(double fee) { this.baseFee = fee; }\r
\r
        @Override\r
        public String toString() {\r
            return "CourseTemplate[" + courseCode + ": " + title + " @ ₹" + baseFee + "]";\r
        }\r
    }\r
\r
    public static void main(String[] args) {\r
        System.out.println("==========================================================================");\r
        System.out.println(" TOPIC 7: PROTOTYPE DESIGN PATTERN - BARRACKPORE ACADEMY");\r
        System.out.println("==========================================================================\\n");\r
\r
        // 1. Expensive prototype initialized once:\r
        CourseTemplate standardJava = new CourseTemplate("JAVA_2026", "Java Pro Masterclass", 5000.0);\r
        System.out.println("Master Prototype: " + standardJava);\r
\r
        // 2. Fast cloning for customized discounted batch:\r
        CourseTemplate barrackporeDiscounted = standardJava.copy();\r
        barrackporeDiscounted.setBaseFee(4000.0);\r
        System.out.println("Cloned Instance : " + barrackporeDiscounted);\r
\r
        System.out.println("\\n==========================================================================");\r
    }\r
}\r
`,s=`================================================================================\r
JAVA CORE TUTORIAL - QUICK REVISION GUIDE\r
Module 012_001: GoF Design Patterns\r
Topic 7: Prototype Pattern\r
Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
================================================================================\r
\r
1. INTENT:\r
   - Specify the kinds of objects to create using a prototypical instance, and create new objects\r
     by copying this prototype.\r
\r
2. CLONING APPROACHES IN JAVA:\r
   - Copy Constructors (Recommended by Joshua Bloch).\r
   - Factory copy methods ('copy()' / 'clone()').\r
   - 'java.lang.Cloneable' (Flawed; bypasses constructors).\r
\r
================================================================================\r
Classroom Practice: Barrackpore Academy | Mentor: Sukanta Hui\r
================================================================================\r
`,i=[{question:"Why does Joshua Bloch recommend Copy Constructors over java.lang.Cloneable for implementing the Prototype pattern?",shortAnswer:"Because Cloneable has a broken contract that bypasses constructors, doesn't work well with final fields, throws checked CloneNotSupportedException, and requires unsafe type casting, whereas copy constructors are clean, type-safe, and obey standard Java object creation rules.",explanation:"Item 13 in Effective Java.",hint:"Copy constructors are type-safe and do not bypass normal object construction.",level:"Intermediate",codeExample:"public Course(Course original) { this.title = original.title; }"},{question:"What is the difference between a Shallow Copy and a Deep Copy when cloning a Prototype?",shortAnswer:"A Shallow Copy duplicates the top-level object but shares references to inner nested objects. A Deep Copy recursively duplicates all referenced nested objects, creating completely independent object graphs.",explanation:"Crucial for preventing mutation side-effects across prototypes.",hint:"Shallow copy copies references; deep copy duplicates the entire object tree.",level:"Beginner",codeExample:"Deep copy duplicates nested collections and mutable references."}];function h(){return e.jsxs("div",{className:"space-y-12 px-4 md:px-8 py-8 text-slate-200 bg-slate-900 min-h-screen",children:[e.jsxs("header",{className:"space-y-4 border-b border-slate-800 pb-6",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"px-3 py-1 bg-sky-500/10 text-sky-400 border border-sky-500/20 text-xs font-semibold rounded-full uppercase tracking-wider",children:"Module 012_001 · Topic 7"}),e.jsx("span",{className:"px-3 py-1 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-xs font-semibold rounded-full",children:"GoF Design Patterns"})]}),e.jsxs("h1",{className:"text-xl sm:text-2xl md:text-3xl font-bold text-white tracking-tight",children:["The Prototype Pattern: ",e.jsx("code",{className:"text-emerald-400 font-mono",children:"Object Cloning & Deep Copies"})]}),e.jsx("p",{className:"text-base md:text-lg text-slate-400 leading-relaxed max-w-4xl",children:"Cloning existing instances: creating new objects by duplicating prototype instances using Cloneable, copy constructors, and serialization."})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsxs("h2",{className:"text-2xl font-bold text-emerald-400 flex items-center gap-2",children:[e.jsx("span",{children:"💻"})," Hands-On Java Demo Code"]}),e.jsx(t,{fileModule:a,title:"PrototypePatternDemo.java",highlightLines:[18,25,34,43]})]}),e.jsx("section",{className:"space-y-4",children:e.jsx(r,{title:"GoF Design Patterns FAQs",questions:i})}),e.jsx("section",{className:"space-y-4",children:e.jsx(n,{content:s,title:"Module 012_001 Topic 7: Prototype Pattern",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Printable Note",downloadFileName:"012_001_topic7_prototype_pattern_note.txt"})}),e.jsx(o,{note:"The Prototype pattern is ideal when creating a new object from scratch is expensive (e.g. requires 100 database queries or XML parsing). Instead, keep one pre-loaded prototype in RAM and clone it whenever a new instance is needed! — Sukanta Hui"})]})}export{h as default};
