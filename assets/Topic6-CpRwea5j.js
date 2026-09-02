import{j as e}from"./vendor-react-core-Doz9nIC6.js";import{J as t}from"./JavaFileLoader-BfBG3xz_.js";import{F as r}from"./FAQTemplate-BHhlgA96.js";import{P as n}from"./PlainTextPrint-C08xhKA4.js";import{T as i}from"./TeacherSukantaHui-RpFLNJ5A.js";import"./JavaCodeBlock-BwsLxS3r.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-wprqVFW_.js";const a=`/**\r
 * Java Core Tutorial - Module 012_001: GoF Design Patterns\r
 * Topic 6: The Builder Pattern - Fluent Immutable Construction\r
 * Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
 */\r
\r
package com.coderaccotax.javatutorial.patterns;\r
\r
public class BuilderPatternDemo {\r
\r
    public static class StudentProfile {\r
        // All fields immutable:\r
        private final int id;\r
        private final String name;\r
        private final String email;\r
        private final String center;\r
        private final double gpa;\r
        private final boolean scholarshipEligible;\r
\r
        private StudentProfile(Builder builder) {\r
            this.id = builder.id;\r
            this.name = builder.name;\r
            this.email = builder.email;\r
            this.center = builder.center;\r
            this.gpa = builder.gpa;\r
            this.scholarshipEligible = builder.scholarshipEligible;\r
        }\r
\r
        public static Builder builder() {\r
            return new Builder();\r
        }\r
\r
        public static class Builder {\r
            private int id;\r
            private String name;\r
            private String email;\r
            private String center = "Barrackpore"; // Default value\r
            private double gpa;\r
            private boolean scholarshipEligible;\r
\r
            public Builder id(int id) { this.id = id; return this; }\r
            public Builder name(String name) { this.name = name; return this; }\r
            public Builder email(String email) { this.email = email; return this; }\r
            public Builder center(String center) { this.center = center; return this; }\r
            public Builder gpa(double gpa) { this.gpa = gpa; return this; }\r
            public Builder scholarshipEligible(boolean eligible) { this.scholarshipEligible = eligible; return this; }\r
\r
            public StudentProfile build() {\r
                // Validation before creation:\r
                if (id <= 0 || name == null || name.isBlank()) {\r
                    throw new IllegalStateException("Student ID and Name are mandatory!");\r
                }\r
                return new StudentProfile(this);\r
            }\r
        }\r
\r
        @Override\r
        public String toString() {\r
            return "StudentProfile[id=" + id + ", name=" + name + ", center=" + center + ", gpa=" + gpa + "]";\r
        }\r
    }\r
\r
    public static void main(String[] args) {\r
        System.out.println("==========================================================================");\r
        System.out.println(" TOPIC 6: BUILDER PATTERN FLUENT CONSTRUCTION - BARRACKPORE");\r
        System.out.println("==========================================================================\\n");\r
\r
        StudentProfile profile = StudentProfile.builder()\r
            .id(101)\r
            .name("Swadeep Paul")\r
            .email("swadeep@coderaccotax.com")\r
            .center("Barrackpore")\r
            .gpa(3.95)\r
            .scholarshipEligible(true)\r
            .build();\r
\r
        System.out.println("Built Immutable Student Profile:\r
  " + profile);\r
\r
        System.out.println("\\n==========================================================================");\r
    }\r
}\r
`,l=`================================================================================\r
JAVA CORE TUTORIAL - QUICK REVISION GUIDE\r
Module 012_001: GoF Design Patterns\r
Topic 6: Builder Pattern\r
Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
================================================================================\r
\r
1. WHAT IT SOLVES:\r
   - Telescoping constructor anti-pattern (constructors with 8+ parameters).\r
   - Java Bean mutation anti-pattern (using setters that break immutability).\r
\r
2. KEY ELEMENTS:\r
   - Private constructor on product class.\r
   - Static nested 'Builder' class with fluent chaining ('return this;').\r
   - 'build()' method that validates and calls private constructor.\r
\r
================================================================================\r
Classroom Practice: Barrackpore Academy | Mentor: Sukanta Hui\r
================================================================================\r
`,s=[{question:"What is the 'Telescoping Constructor' anti-pattern and how does the Builder pattern fix it?",shortAnswer:"The telescoping constructor anti-pattern occurs when a class provides numerous overloaded constructors with increasing parameter counts, making code unreadable and error-prone. The Builder pattern replaces this with fluent, self-describing method chaining and final validation in build().",explanation:"Effective Java Item 2 recommendation.",hint:"Eliminates constructors with numerous ambiguous parameters.",level:"Beginner",codeExample:'Student.builder().name("Tuhina").center("Naihati").build();'},{question:"Why does the Builder pattern support creating completely immutable domain objects?",shortAnswer:"Because all fields on the target class can be declared private and final without public setter methods, as the private constructor receives all validated state directly from the Builder instance.",explanation:"Enforces thread-safe, immutable domain models.",hint:"All target class fields remain private and final without setters.",level:"Intermediate",codeExample:"private final String name; // immutable field populated by Builder"}];function g(){return e.jsxs("div",{className:"space-y-12 px-4 md:px-8 py-8 text-slate-200 bg-slate-900 min-h-screen",children:[e.jsxs("header",{className:"space-y-4 border-b border-slate-800 pb-6",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"px-3 py-1 bg-sky-500/10 text-sky-400 border border-sky-500/20 text-xs font-semibold rounded-full uppercase tracking-wider",children:"Module 012_001 · Topic 6"}),e.jsx("span",{className:"px-3 py-1 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-xs font-semibold rounded-full",children:"GoF Design Patterns"})]}),e.jsxs("h1",{className:"text-xl sm:text-2xl md:text-3xl font-bold text-white tracking-tight",children:["The Builder Pattern: ",e.jsx("code",{className:"text-emerald-400 font-mono",children:"Fluent Immutable Construction"})]}),e.jsx("p",{className:"text-base md:text-lg text-slate-400 leading-relaxed max-w-4xl",children:"Telescoping constructor antidote: constructing complex immutable domain objects with step-by-step method chaining and mandatory validation."})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsxs("h2",{className:"text-2xl font-bold text-emerald-400 flex items-center gap-2",children:[e.jsx("span",{children:"💻"})," Hands-On Java Demo Code"]}),e.jsx(t,{fileModule:a,title:"BuilderPatternDemo.java",highlightLines:[18,25,34,43]})]}),e.jsx("section",{className:"space-y-4",children:e.jsx(r,{title:"GoF Design Patterns FAQs",questions:s})}),e.jsx("section",{className:"space-y-4",children:e.jsx(n,{content:l,title:"Module 012_001 Topic 6: Builder Pattern",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Printable Note",downloadFileName:"012_001_topic6_builder_pattern_note.txt"})}),e.jsx(i,{note:"The Builder pattern is everywhere in modern Java (Lombok @Builder, HttpRequest.newBuilder(), Stream.builder())! It eliminates ugly constructors with 10 parameters where you can accidentally swap arguments! — Sukanta Hui"})]})}export{g as default};
