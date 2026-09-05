import{j as e}from"./vendor-react-core-Doz9nIC6.js";import{J as t}from"./JavaFileLoader-BfBG3xz_.js";import{F as r}from"./FAQTemplate-BHhlgA96.js";import{P as n}from"./PlainTextPrint-C08xhKA4.js";import{T as a}from"./TeacherSukantaHui-DerPxfxp.js";import"./JavaCodeBlock-BwsLxS3r.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-CH1iX9C8.js";const i=`/**\r
 * Java Core Tutorial - Module 009_004: Stream API Pipeline & Intermediate Operations\r
 * Topic 0: What is the Stream API? Declarative vs Imperative Processing\r
 * Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
 */\r
\r
package com.coderaccotax.javatutorial.streams;\r
\r
import java.util.ArrayList;\r
import java.util.Collections;\r
import java.util.List;\r
import java.util.stream.Collectors;\r
\r
public class WhatIsStreamApiDemo {\r
\r
    public static void main(String[] args) {\r
        System.out.println("==========================================================================");\r
        System.out.println(" TOPIC 0: WHAT IS THE STREAM API? - BARRACKPORE ACADEMY");\r
        System.out.println("==========================================================================\\n");\r
\r
        List<Student> students = List.of(\r
            new Student("Swadeep Paul", "Barrackpore", 88.5),\r
            new Student("Tuhina Das", "Naihati", 94.0),\r
            new Student("Abhronila Das", "Shyamnagar", 76.0),\r
            new Student("Debangshu Mukherjee", "Ichapur", 91.5),\r
            new Student("Priya Sharma", "Barrackpore", 65.0)\r
        );\r
\r
        // --- 1. OLD IMPERATIVE STYLE (HOW to do it: loops, temp collections, mutable flags) ---\r
        List<String> topStudentsImperative = new ArrayList<>();\r
        for (Student s : students) {\r
            if (s.getScore() >= 85.0) {\r
                topStudentsImperative.add(s.getName().toUpperCase());\r
            }\r
        }\r
        Collections.sort(topStudentsImperative);\r
        System.out.println("1. Top Students (Imperative Loop): " + topStudentsImperative);\r
\r
        // --- 2. MODERN DECLARATIVE STREAM PIPELINE (WHAT to do: filter, map, sorted, collect) ---\r
        List<String> topStudentsDeclarative = students.stream()\r
            .filter(s -> s.getScore() >= 85.0)           // Filter condition\r
            .map(s -> s.getName().toUpperCase())        // Transformation\r
            .sorted()                                   // Ordering\r
            .collect(Collectors.toList());              // Terminal collection\r
\r
        System.out.println("2. Top Students (Stream Pipeline): " + topStudentsDeclarative);\r
\r
        System.out.println("\\n>>> KEY BENEFITS OF STREAM API:");\r
        System.out.println("  1. Declarative: Expresses intent cleanly without boilerplate loops.");\r
        System.out.println("  2. Composable: Pipelines easily chain filter, map, sort, limit operations.");\r
        System.out.println("  3. Parallelizable: Seamless transition to multi-core processing via .parallelStream().");\r
        System.out.println("==========================================================================");\r
    }\r
\r
    static class Student {\r
        private final String name;\r
        private final String center;\r
        private final double score;\r
\r
        public Student(String name, String center, double score) {\r
            this.name = name;\r
            this.center = center;\r
            this.score = score;\r
        }\r
\r
        public String getName() { return name; }\r
        public String getCenter() { return center; }\r
        public double getScore() { return score; }\r
    }\r
}\r
`,s=`================================================================================\r
JAVA CORE TUTORIAL - QUICK REVISION GUIDE\r
Module 009_004: Stream API Pipeline & Intermediate Operations\r
Topic 0: What is the Stream API (Declarative Data Processing)\r
Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
================================================================================\r
\r
1. WHAT IS THE STREAM API (Java 8+):\r
   - A sequence of elements supporting sequential and parallel aggregate operations.\r
   - Operates on a declarative model: developer specifies WHAT to achieve rather than\r
     HOW to mechanically index and loop through data.\r
\r
2. IMPERATIVE VS DECLARATIVE:\r
   - Imperative: Uses for/while loops, temporary mutable collections, manual counters.\r
     Hard to read, error-prone, tightly coupled with sequential execution.\r
   - Declarative (Streams): Method chaining of functional transformations (filter, map, reduce).\r
     Clean, expressive, decoupled from underlying data iteration.\r
\r
3. KEY STREAM CHARACTERISTICS:\r
   - Not a data structure (does not store elements).\r
   - Functional in nature (does not modify the underlying source).\r
   - Lazily evaluated (computations deferred until terminal operation).\r
   - Consumable only once (cannot reuse a closed stream).\r
\r
================================================================================\r
Classroom Practice: Barrackpore Academy | Mentor: Sukanta Hui\r
================================================================================\r
`,o=[{question:"What is the primary architectural purpose of the Java 8 Stream API?",shortAnswer:"The Stream API provides a declarative, functional pipeline for processing sequences of elements (filtering, transforming, aggregating) without mutating the underlying data source and enabling easy parallelization.",explanation:"Introduced in Java 8, Streams allow developers to write concise queries over in-memory collections similar to SQL queries over database tables.",hint:"Declarative functional pipeline over collections and data sources.",level:"Beginner",codeExample:"List<String> list = students.stream().filter(s → s.getScore() > 80).map(Student::getName).toList();"},{question:"How does declarative stream processing differ fundamentally from imperative loop processing?",shortAnswer:"Imperative processing focuses on 'HOW to do it' (manual iteration, index management, state mutations in temp lists), whereas Declarative stream processing focuses on 'WHAT to do' (specifying transformations via pure functions).",explanation:"Declarative pipelines improve maintainability, reduce bug surface area, and abstract execution mechanics away from business logic.",hint:"HOW (loops and manual mutations) vs WHAT (functional composition).",level:"Intermediate",codeExample:"// Declarative:\\nstudents.stream().filter(s → s.isActive()).forEach(System.out::println);"}];function g(){return e.jsxs("div",{className:"space-y-12 px-4 md:px-8 py-8 text-slate-200 bg-slate-900 min-h-screen",children:[e.jsxs("header",{className:"space-y-4 border-b border-slate-800 pb-6",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"px-3 py-1 bg-sky-500/10 text-sky-400 border border-sky-500/20 text-xs font-semibold rounded-full uppercase tracking-wider",children:"Module 009_004 · Topic 0"}),e.jsx("span",{className:"px-3 py-1 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-xs font-semibold rounded-full",children:"Stream API Pipelines"})]}),e.jsxs("h1",{className:"text-xl sm:text-2xl md:text-3xl font-bold text-white tracking-tight",children:["What is the ",e.jsx("code",{className:"text-emerald-400 font-mono",children:"Stream API"}),"? Declarative Data Processing Pipelines"]}),e.jsx("p",{className:"text-base md:text-lg text-slate-400 leading-relaxed max-w-4xl",children:"Transitioning from imperative loops to declarative stream pipelines: focus on WHAT data to process rather than HOW to step through iterations."})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsxs("h2",{className:"text-2xl font-bold text-emerald-400 flex items-center gap-2",children:[e.jsx("span",{children:"💻"})," Hands-On Java Demo Code"]}),e.jsx(t,{fileModule:i,title:"WhatIsStreamApiDemo.java",highlightLines:[18,22,28,30,31,32]})]}),e.jsx("section",{className:"space-y-4",children:e.jsx(r,{title:"Stream API Pipeline FAQs",questions:o})}),e.jsx("section",{className:"space-y-4",children:e.jsx(n,{content:s,title:"Module 009_004 Topic 0: What is the Stream API",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Printable Note",downloadFileName:"009_004_topic0_what_is_stream_api_note.txt"})}),e.jsx(a,{note:"Imperative code is like cooking by describing every single muscle movement. Declarative streams are like writing a recipe: filter high scorers, extract their names, sort them alphabetically, and collect the result! — Sukanta Hui"})]})}export{g as default};
