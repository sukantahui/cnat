import{j as e}from"./vendor-react-core-Doz9nIC6.js";import{J as t}from"./JavaFileLoader-BfBG3xz_.js";import{F as n}from"./FAQTemplate-BHhlgA96.js";import{P as r}from"./PlainTextPrint-C08xhKA4.js";import{T as a}from"./TeacherSukantaHui-RpFLNJ5A.js";import"./JavaCodeBlock-BwsLxS3r.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-wprqVFW_.js";const o=`/**\r
 * Java Core Tutorial - Module 009_009: Modern Java Features\r
 * Topic 12: Record Patterns (Java 21+ Standard - JEP 440) - Direct Deconstruction\r
 * Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
 */\r
\r
package com.coderaccotax.javatutorial.modern;\r
\r
public class RecordPatternsJep440Demo {\r
\r
    public record Center(String city, String district) {}\r
    public record Student(String name, Center center, double score) {}\r
\r
    public static void main(String[] args) {\r
        System.out.println("==========================================================================");\r
        System.out.println(" TOPIC 12: RECORD PATTERNS (JEP 440) - BARRACKPORE ACADEMY");\r
        System.out.println("==========================================================================\\n");\r
\r
        Object studentObj = new Student("Swadeep Paul", new Center("Barrackpore", "North 24 Parganas"), 94.5);\r
\r
        // 1. Basic Record Pattern with instanceof: Direct Deconstruction!\r
        if (studentObj instanceof Student(String name, Center center, double score)) {\r
            System.out.println("1. Deconstructed Student Record Directly:");\r
            System.out.println("   - Extracted Name  : " + name);\r
            System.out.println("   - Extracted Center: " + center.city());\r
            System.out.println("   - Extracted Score : " + score + "%");\r
        }\r
\r
        // 2. NESTED Record Pattern (Deep Destructuring in 1 Step!):\r
        System.out.println("\\n2. Deep Nested Record Destructuring in Java 21:");\r
        if (studentObj instanceof Student(String name, Center(String city, String district), double score)) {\r
            System.out.println("   - Student Name    : " + name);\r
            System.out.println("   - Extracted City  : " + city);\r
            System.out.println("   - Extracted Dist  : " + district);\r
            System.out.println("   - Extracted Score : " + score + "%");\r
        }\r
\r
        System.out.println("\\n==========================================================================");\r
    }\r
}\r
`,s=`================================================================================\r
JAVA CORE TUTORIAL - QUICK REVISION GUIDE\r
Module 009_009: Modern Java Features\r
Topic 12: Record Patterns (JEP 440)\r
Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
================================================================================\r
\r
1. WHAT ARE RECORD PATTERNS (Java 21 Standard - JEP 440):\r
   - Allows deconstructing record instances into their individual constituent components\r
     directly inside 'instanceof' and 'switch' expressions.\r
   - Syntax:\r
     'if (obj instanceof Point(int x, int y)) { /* use x and y directly */ }'\r
\r
2. NESTED RECORD PATTERNS:\r
   - Records containing other records can be destructured recursively in a single pattern:\r
     'if (obj instanceof Order(Customer(String name, Address(String city)), double total))'\r
\r
================================================================================\r
Classroom Practice: Barrackpore Academy | Mentor: Sukanta Hui\r
================================================================================\r
`,i=[{question:"What is the primary benefit of Record Patterns introduced in Java 21 (JEP 440)?",shortAnswer:"Record Patterns enable direct, concise deconstruction of record components into local pattern variables inside instanceof and switch expressions without calling individual accessor methods manually.",explanation:"Enables elegant data-oriented programming.",hint:"Destructures record components directly without calling accessor methods.",level:"Intermediate",codeExample:"if (obj instanceof Point(int x, int y)) { System.out.println(x + y); }"},{question:"Can Record Patterns be nested inside other Record Patterns?",shortAnswer:"Yes! Java 21 supports arbitrary levels of nested record pattern deconstruction, allowing deep component extraction in a single expression.",explanation:"Unpacks composite nested data structures seamlessly.",hint:"Supports recursive nested deconstruction.",level:"Advanced",codeExample:"if (obj instanceof Rect(Point(int x1, int y1), Point(int x2, int y2))) { ... }"}];function S(){return e.jsxs("div",{className:"space-y-12 px-4 md:px-8 py-8 text-slate-200 bg-slate-900 min-h-screen",children:[e.jsxs("header",{className:"space-y-4 border-b border-slate-800 pb-6",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"px-3 py-1 bg-sky-500/10 text-sky-400 border border-sky-500/20 text-xs font-semibold rounded-full uppercase tracking-wider",children:"Module 009_009 · Topic 12"}),e.jsx("span",{className:"px-3 py-1 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-xs font-semibold rounded-full",children:"Modern Java Evolution"})]}),e.jsxs("h1",{className:"text-xl sm:text-2xl md:text-3xl font-bold text-white tracking-tight",children:["Record Patterns: ",e.jsx("code",{className:"text-emerald-400 font-mono",children:"Deconstructing Records in Pattern Matching (JEP 440)"})]}),e.jsx("p",{className:"text-base md:text-lg text-slate-400 leading-relaxed max-w-4xl",children:"Direct component destructuring: extracting record components in place with Point(int x, int y) and nested record patterns in Java 21."})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsxs("h2",{className:"text-2xl font-bold text-emerald-400 flex items-center gap-2",children:[e.jsx("span",{children:"💻"})," Hands-On Java Demo Code"]}),e.jsx(t,{fileModule:o,title:"RecordPatternsJep440Demo.java",highlightLines:[18,25,34,43]})]}),e.jsx("section",{className:"space-y-4",children:e.jsx(n,{title:"Modern Java Features FAQs",questions:i})}),e.jsx("section",{className:"space-y-4",children:e.jsx(r,{content:s,title:"Module 009_009 Topic 12: Record Patterns (JEP 440)",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Printable Note",downloadFileName:"009_009_topic12_record_patterns_jep440_note.txt"})}),e.jsx(a,{note:"Record Patterns in Java 21 let you deconstruct an object on the fly! Instead of writing Student s and then calling s.name() and s.score(), you write Student(String name, double score) and the fields are already extracted! — Sukanta Hui"})]})}export{S as default};
