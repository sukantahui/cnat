import{j as e}from"./vendor-react-core-Doz9nIC6.js";import{J as n}from"./JavaFileLoader-BfBG3xz_.js";import{F as r}from"./FAQTemplate-CkSqDH4B.js";import{P as t}from"./PlainTextPrint-C08xhKA4.js";import{T as a}from"./TeacherSukantaHui-CC0AKmkm.js";import"./JavaCodeBlock-BwsLxS3r.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-BtJHuk7w.js";const i=`/**\r
 * Java Core Tutorial - Module 002_005: Inheritance, IS-A vs HAS-A, Composition & Aggregation\r
 * Topic 3: Types of Inheritance in Java: Single, Multilevel & Hierarchical\r
 * Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
 */\r
\r
package com.coderaccotax.javatutorial.inheritance;\r
\r
public class TypesOfInheritanceDemo {\r
\r
    // 1. Root Base Class\r
    public static class Person {\r
        protected String name;\r
        public Person(String name) { this.name = name; }\r
    }\r
\r
    // 2. SINGLE INHERITANCE: Trainee IS-A Person\r
    public static class Trainee extends Person {\r
        protected int roll;\r
        public Trainee(String name, int roll) {\r
            super(name);\r
            this.roll = roll;\r
        }\r
    }\r
\r
    // 3. MULTILEVEL INHERITANCE: AdvancedJavaTrainee IS-A Trainee IS-A Person\r
    public static class AdvancedJavaTrainee extends Trainee {\r
        private String projectTitle;\r
        public AdvancedJavaTrainee(String name, int roll, String projectTitle) {\r
            super(name, roll);\r
            this.projectTitle = projectTitle;\r
        }\r
\r
        public void printMultilevel() {\r
            System.out.printf("  [MULTILEVEL] %s (Roll %d) working on project: '%s'\\n", name, roll, projectTitle);\r
        }\r
    }\r
\r
    // 4. HIERARCHICAL INHERITANCE: Instructor IS-A Person (Sibling of Trainee)\r
    public static class Instructor extends Person {\r
        private String expertise;\r
        public Instructor(String name, String expertise) {\r
            super(name);\r
            this.expertise = expertise;\r
        }\r
\r
        public void printHierarchical() {\r
            System.out.printf("  [HIERARCHICAL] Instructor: %s | Domain: %s\\n", name, expertise);\r
        }\r
    }\r
\r
    public static void main(String[] args) {\r
        System.out.println("==========================================================================");\r
        System.out.println(" TOPIC 3: TYPES OF INHERITANCE IN JAVA - BARRACKPORE");\r
        System.out.println("==========================================================================\\n");\r
\r
        System.out.println(">>> 1. Multilevel Hierarchy (Person -> Trainee -> AdvancedJavaTrainee):");\r
        AdvancedJavaTrainee swadeep = new AdvancedJavaTrainee("Swadeep Paul", 101, "Banking Transaction Engine");\r
        swadeep.printMultilevel();\r
\r
        System.out.println("\\n>>> 2. Hierarchical Inheritance (Person -> Instructor):");\r
        Instructor mentor = new Instructor("Sukanta Hui", "Full Stack Java & JVM Internals");\r
        mentor.printHierarchical();\r
\r
        System.out.println("\\n==========================================================================");\r
    }\r
}`,s=`================================================================================\r
JAVA CORE TUTORIAL - QUICK REVISION GUIDE\r
Module 002_005: Inheritance, IS-A vs HAS-A, Composition & Aggregation\r
Topic 3: Types of Inheritance in Java\r
Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
================================================================================\r
\r
1. SUPPORTED CLASS INHERITANCE FORMS:\r
   - Single Inheritance: 1 Parent -> 1 Child\r
   - Multilevel Inheritance: Grandparent -> Parent -> Child\r
   - Hierarchical Inheritance: 1 Parent -> Multiple Child classes\r
\r
2. UNSUPPORTED FORMS (WITH CLASSES):\r
   - Multiple Inheritance (Multiple parents -> 1 Child)\r
   - Hybrid Inheritance involving multiple parents\r
\r
================================================================================\r
Classroom Practice: Barrackpore Academy | Mentor: Sukanta Hui\r
================================================================================`,l=[{question:"Which 3 types of class inheritance are directly supported in Java?",shortAnswer:"1. Single Inheritance (A -> B), 2. Multilevel Inheritance (A -> B -> C), 3. Hierarchical Inheritance (A -> B and A -> C).",explanation:"Multiple Inheritance with classes and Hybrid Inheritance with classes are NOT supported to prevent ambiguity.",hint:"Single, Multilevel, and Hierarchical inheritance.",level:"Beginner",codeExample:`// Single: B extends A
// Multilevel: C extends B (where B extends A)
// Hierarchical: B extends A, C extends A`}];function I(){return e.jsxs("div",{className:"space-y-12 px-4 md:px-8 py-8 text-slate-200 bg-slate-900 min-h-screen",children:[e.jsx("style",{children:`
          @keyframes fadeIn {
            from { opacity: 0; transform: translateY(8px); }
            to { opacity: 1; transform: translateY(0); }
          }
          .animate-fade-in { animation: fadeIn 0.5s ease-out forwards; }
        `}),e.jsxs("header",{className:"space-y-4 border-b border-slate-800 pb-6 animate-fade-in",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"px-3 py-1 bg-sky-500/10 text-sky-400 border border-sky-500/20 text-xs font-semibold rounded-full uppercase tracking-wider",children:"Module 002_005 · Topic 3"}),e.jsx("span",{className:"px-3 py-1 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-xs font-semibold rounded-full",children:"Hierarchy Taxonomies"})]}),e.jsx("h1",{className:"text-3xl md:text-4xl font-extrabold text-white tracking-tight",children:"Types of Inheritance in Java: Single, Multilevel & Hierarchical"}),e.jsx("p",{className:"text-base md:text-lg text-slate-400 leading-relaxed max-w-4xl",children:"Explore the three core inheritance models supported by Java: Single, Multilevel, and Hierarchical inheritance architectures."})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsxs("h2",{className:"text-2xl font-bold text-emerald-400 flex items-center gap-2",children:[e.jsx("span",{children:"💻"})," Hands-On Java Demo Code"]}),e.jsx(n,{fileModule:i,title:"TypesOfInheritanceDemo.java",highlightLines:[12,17,26,38,52,56]})]}),e.jsx("section",{className:"space-y-4",children:e.jsx(r,{title:"Types of Inheritance FAQs",questions:l})}),e.jsx("section",{className:"space-y-4",children:e.jsx(t,{content:s,title:"Module 002_005 Topic 3: Types of Inheritance",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Printable Note",downloadFileName:"002_005_topic3_types_of_inheritance_note.txt"})}),e.jsx(a,{note:"Think of Single as Father & Son, Multilevel as Grandfather -> Father -> Son, and Hierarchical as Father -> Multiple Siblings! — Sukanta Hui"})]})}export{I as default};
