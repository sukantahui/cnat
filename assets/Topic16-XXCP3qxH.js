import{j as e}from"./vendor-react-core-Doz9nIC6.js";import{J as a}from"./JavaFileLoader-BfBG3xz_.js";import{F as r}from"./FAQTemplate-BHhlgA96.js";import{P as n}from"./PlainTextPrint-C08xhKA4.js";import{T as t}from"./TeacherSukantaHui-RpFLNJ5A.js";import"./JavaCodeBlock-BwsLxS3r.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-wprqVFW_.js";const o=`/**\r
 * Java Core Tutorial - Module 003_007: Nested & Inner Classes\r
 * Topic 16: Modern Java 16+ Additions: Local Records & Local Interfaces in Method Bodies\r
 * Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
 */\r
\r
package com.coderaccotax.javatutorial.nested;\r
\r
import java.util.List;\r
\r
public class ModernLocalRecordsDemo {\r
\r
    public static void main(String[] args) {\r
        System.out.println("==========================================================================");\r
        System.out.println(" TOPIC 16: MODERN LOCAL RECORDS (JAVA 16+) - BARRACKPORE");\r
        System.out.println("==========================================================================\\n");\r
\r
        // In Java 16+, we can declare immutable 'record' types right inside a method:\r
        record TraineeRank(String name, String hub, int score) {\r
            public boolean isTopper() {\r
                return score >= 90;\r
            }\r
        }\r
\r
        List<TraineeRank> batchResults = List.of(\r
                new TraineeRank("Swadeep Paul", "Barrackpore", 94),\r
                new TraineeRank("Tuhina Das", "Naihati", 91),\r
                new TraineeRank("Abhronila Das", "Shyamnagar", 88)\r
        );\r
\r
        System.out.println(">>> Evaluated Batch Rankings via Method-Local Record:");\r
        for (TraineeRank rank : batchResults) {\r
            System.out.printf("  Trainee: %-15s | Hub: %-12s | Score: %d | Topper? %s%n",\r
                    rank.name(), rank.hub(), rank.score(), rank.isTopper() ? "YES 🏆" : "NO");\r
        }\r
\r
        System.out.println("\\n>>> NOTE: Local records are implicitly static, lightweight, and immutable!");\r
\r
        System.out.println("\\n==========================================================================");\r
    }\r
}`,i=`================================================================================\r
JAVA CORE TUTORIAL - QUICK REVISION GUIDE\r
Module 003_007: Nested & Inner Classes\r
Topic 16: Local Records (Java 16+)\r
Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
================================================================================\r
\r
1. LOCAL RECORDS (Java 16+):\r
   - Declared inside method bodies.\r
   - Implicitly static (no outer pointer).\r
   - Immutable data carriers with auto-generated getters.\r
   - Ideal for Stream API intermediate aggregation.\r
\r
================================================================================\r
Classroom Practice: Barrackpore Academy | Mentor: Sukanta Hui\r
================================================================================`,s=[{question:"What is a 'Local Record' (introduced in Java 16) and how does it enhance method-level data modeling?",shortAnswer:"A Local Record allows declaring an immutable data carrier record directly inside a method body. Unlike traditional method-local classes, local records are implicitly static (holding no outer reference) and automatically generate constructors, getters, equals(), hashCode(), and toString() in a single line.",explanation:"Ideal for intermediate aggregation in Stream pipelines and temporary tuple return values.",hint:"An immutable data carrier record declared directly inside a method block.",level:"Intermediate",codeExample:"void m() { record TempData(int id, String name) {} ... }"}];function g(){return e.jsxs("div",{className:"space-y-12 px-4 md:px-8 py-8 text-slate-200 bg-slate-900 min-h-screen",children:[e.jsxs("header",{className:"space-y-4 border-b border-slate-800 pb-6",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"px-3 py-1 bg-sky-500/10 text-sky-400 border border-sky-500/20 text-xs font-semibold rounded-full uppercase tracking-wider",children:"Module 003_007 · Topic 16"}),e.jsx("span",{className:"px-3 py-1 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-xs font-semibold rounded-full",children:"Modern Java 16+"})]}),e.jsxs("h1",{className:"text-xl sm:text-2xl md:text-3xl font-bold text-white tracking-tight",children:["Modern Java 16+ Additions: ",e.jsx("code",{className:"text-emerald-400 font-mono",children:"Local Records"})," in Method Bodies"]}),e.jsxs("p",{className:"text-base md:text-lg text-slate-400 leading-relaxed max-w-4xl",children:["Leverage modern JVM language evolutions: declaring lightweight immutable ",e.jsx("code",{className:"text-emerald-300 font-mono",children:"record"})," tuples directly inside method blocks for zero-ceremony data aggregation."]})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsxs("h2",{className:"text-2xl font-bold text-emerald-400 flex items-center gap-2",children:[e.jsx("span",{children:"💻"})," Hands-On Java Demo Code"]}),e.jsx(a,{fileModule:o,title:"ModernLocalRecordsDemo.java",highlightLines:[7,16,17,18,19,22,23,24,29,30]})]}),e.jsx("section",{className:"space-y-4",children:e.jsx(r,{title:"Local Records FAQs",questions:s})}),e.jsx("section",{className:"space-y-4",children:e.jsx(n,{content:i,title:"Module 003_007 Topic 16: Local Records",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Printable Note",downloadFileName:"003_007_topic16_local_records_note.txt"})}),e.jsx(t,{note:"Whenever you need a temporary 2-field data holder inside a complex calculation or Stream pipeline, use a local record! It takes 1 line of code and keeps your outer codebase clean! — Sukanta Hui"})]})}export{g as default};
