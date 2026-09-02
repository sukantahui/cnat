import{j as e}from"./vendor-react-core-Doz9nIC6.js";import{J as n}from"./JavaFileLoader-BfBG3xz_.js";import{F as t}from"./FAQTemplate-BHhlgA96.js";import{P as r}from"./PlainTextPrint-C08xhKA4.js";import{T as a}from"./TeacherSukantaHui-RpFLNJ5A.js";import"./JavaCodeBlock-BwsLxS3r.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-wprqVFW_.js";const i=`/**\r
 * Java Core Tutorial - Module 003_002: StringBuilder, StringBuffer & String Formatting\r
 * Topic 6: Chaining StringBuilder Methods Fluently (Fluent Interface Pattern)\r
 * Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
 */\r
\r
package com.coderaccotax.javatutorial.stringbuilder;\r
\r
public class MethodChainingFluentPipelineDemo {\r
\r
    public static void main(String[] args) {\r
        System.out.println("==========================================================================");\r
        System.out.println(" TOPIC 6: FLUENT METHOD CHAINING PIPELINE - BARRACKPORE");\r
        System.out.println("==========================================================================\\n");\r
\r
        // FLUENT BUILDER PIPELINE:\r
        // Each method returns 'this' (the current StringBuilder instance reference)!\r
        String query = new StringBuilder("SELECT id, full_name, gpa ")\r
                .append("FROM trainee_records ")\r
                .append("WHERE hub_location = 'Barrackpore' ")\r
                .append("AND gpa >= 9.0 ")\r
                .append("ORDER BY full_name ASC;")\r
                .toString();\r
\r
        System.out.println(">>> Assembled SQL Query via Fluent Chaining:");\r
        System.out.println("  " + query);\r
\r
        System.out.println("\\n>>> Why Method Chaining Works in Java:");\r
        System.out.println("  - 'append()', 'insert()', and 'reverse()' all return 'this' (the reference to itself).");\r
        System.out.println("  - Allows nesting multiple operations into a single clean, readable statement.");\r
\r
        System.out.println("\\n==========================================================================");\r
    }\r
}`,s=`================================================================================\r
JAVA CORE TUTORIAL - QUICK REVISION GUIDE\r
Module 003_002: StringBuilder, StringBuffer & String Formatting\r
Topic 6: Fluent Method Chaining\r
Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
================================================================================\r
\r
1. FLUENT CHAINING MECHANICS:\r
   - 'return this;' in every modifying method.\r
   - Eliminates repetitive variable references.\r
   - Clean, fluent syntax for assembling queries, JSON, and complex reports.\r
\r
================================================================================\r
Classroom Practice: Barrackpore Academy | Mentor: Sukanta Hui\r
================================================================================`,l=[{question:"Why do 'StringBuilder.append()' and 'insert()' return a 'StringBuilder' reference instead of 'void'?",shortAnswer:"They return 'this' (the current StringBuilder instance) to enable Method Chaining (the Fluent Interface Pattern), allowing developers to cascade multiple append and manipulation operations in a single readable statement.",explanation:"Widely used across modern Java builders (Stream API, HttpRequest, Lombok @Builder).",hint:"Returns 'this' to support fluent cascading method calls.",level:"Beginner",codeExample:'String sql = new StringBuilder().append("SELECT ").append("* ").toString();'}];function x(){return e.jsxs("div",{className:"space-y-12 px-4 md:px-8 py-8 text-slate-200 bg-slate-900 min-h-screen",children:[e.jsxs("header",{className:"space-y-4 border-b border-slate-800 pb-6",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"px-3 py-1 bg-sky-500/10 text-sky-400 border border-sky-500/20 text-xs font-semibold rounded-full uppercase tracking-wider",children:"Module 003_002 · Topic 6"}),e.jsx("span",{className:"px-3 py-1 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-xs font-semibold rounded-full",children:"Fluent Builder Pattern"})]}),e.jsxs("h1",{className:"text-xl sm:text-2xl md:text-3xl font-bold text-white tracking-tight",children:["Chaining ",e.jsx("code",{className:"text-emerald-400 font-mono",children:"StringBuilder"})," Methods Fluently (Fluent Interface Pattern)"]}),e.jsxs("p",{className:"text-base md:text-lg text-slate-400 leading-relaxed max-w-4xl",children:["Learn how the ",e.jsx("code",{className:"text-emerald-300 font-mono",children:"return this;"})," design pattern enables expressive, cascaded string assembly pipelines for SQL queries and enterprise JSON builders."]})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsxs("h2",{className:"text-2xl font-bold text-emerald-400 flex items-center gap-2",children:[e.jsx("span",{children:"💻"})," Hands-On Java Demo Code"]}),e.jsx(n,{fileModule:i,title:"MethodChainingFluentPipelineDemo.java",highlightLines:[7,15,16,17,18,19,20]})]}),e.jsx("section",{className:"space-y-4",children:e.jsx(t,{title:"Method Chaining FAQs",questions:l})}),e.jsx("section",{className:"space-y-4",children:e.jsx(r,{content:s,title:"Module 003_002 Topic 6: Fluent Method Chaining",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Printable Note",downloadFileName:"003_002_topic6_method_chaining_note.txt"})}),e.jsx(a,{note:"Fluent chaining is used everywhere in modern Java—from StringBuilder to Java 8 Streams and Spring Security builders! — Sukanta Hui"})]})}export{x as default};
