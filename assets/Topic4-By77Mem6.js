import{j as t}from"./vendor-react-core-Doz9nIC6.js";import{J as e}from"./JavaFileLoader-BfBG3xz_.js";import{F as n}from"./FAQTemplate-BHhlgA96.js";import{P as r}from"./PlainTextPrint-C08xhKA4.js";import{T as a}from"./TeacherSukantaHui-BaJcBHAy.js";import"./JavaCodeBlock-BwsLxS3r.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-8ao-0upJ.js";const o=`/**\r
 * Java Core Tutorial - Module 009_009: Modern Java Features\r
 * Topic 4: Customizing Records - Compact Constructors & Data Normalization\r
 * Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
 */\r
\r
package com.coderaccotax.javatutorial.modern;\r
\r
public class CompactConstructorsDemo {\r
\r
    public record StudentRegistration(String name, String center, double score) {\r
\r
        // 1. COMPACT CONSTRUCTOR: No parameter list required!\r
        // Ideal for input validation and data normalization (e.g. trimming strings):\r
        public StudentRegistration {\r
            if (name == null || name.isBlank()) {\r
                throw new IllegalArgumentException("Student name cannot be null or blank!");\r
            }\r
            if (score < 0.0 || score > 100.0) {\r
                throw new IllegalArgumentException("Score must be between 0.0 and 100.0!");\r
            }\r
            // Data normalization:\r
            name = name.trim();\r
            center = center != null ? center.trim() : "Barrackpore (Default)";\r
            // Note: 'this.name = name' assignment happens AUTOMATICALLY after this block!\r
        }\r
\r
        // 2. Custom Business Methods inside Records:\r
        public boolean isDistinction() {\r
            return score >= 85.0;\r
        }\r
\r
        // 3. Static Factory Method:\r
        public static StudentRegistration ofDefault(String name, double score) {\r
            return new StudentRegistration(name, "Barrackpore", score);\r
        }\r
    }\r
\r
    public static void main(String[] args) {\r
        System.out.println("==========================================================================");\r
        System.out.println(" TOPIC 4: COMPACT CONSTRUCTORS & VALIDATION - BARRACKPORE");\r
        System.out.println("==========================================================================\\n");\r
\r
        // 1. Valid Record Creation with automatic trimming:\r
        StudentRegistration s1 = new StudentRegistration("  Swadeep Paul  ", " Naihati ", 94.5);\r
        System.out.println("1. Clean Normalized Record:");\r
        System.out.println("   - Name   : '" + s1.name() + "' (Trimmed)");\r
        System.out.println("   - Center : '" + s1.center() + "' (Trimmed)");\r
        System.out.println("   - Distinction? " + s1.isDistinction());\r
\r
        // 2. Invalid Record Creation (Triggers validation exception in compact constructor):\r
        System.out.println("\\n2. Testing Validation Failure (Negative Score):");\r
        try {\r
            new StudentRegistration("Tuhina Das", "Barrackpore", -15.0);\r
        } catch (IllegalArgumentException ex) {\r
            System.err.println("   [VALIDATION FAILED]: " + ex.getMessage());\r
        }\r
\r
        System.out.println("\\n==========================================================================");\r
    }\r
}\r
`,i=`================================================================================\r
JAVA CORE TUTORIAL - QUICK REVISION GUIDE\r
Module 009_009: Modern Java Features\r
Topic 4: Customizing Records (Compact Constructors)\r
Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
================================================================================\r
\r
1. COMPACT CONSTRUCTOR SYNTAX:\r
   - Eliminates the boilerplate parameter list:\r
     'public RecordName { /* validation and normalization */ }'\r
   - Field assignment ('this.field = field') is performed automatically by the compiler\r
     at the end of the constructor.\r
\r
2. WHAT CAN BE ADDED TO RECORDS:\r
   - Custom instance methods (e.g. 'isDistinction()').\r
   - Static fields and static helper methods.\r
   - Secondary overloaded constructors (must delegate to canonical constructor via 'this(...)').\r
   - Implementing interfaces.\r
\r
================================================================================\r
Classroom Practice: Barrackpore Academy | Mentor: Sukanta Hui\r
================================================================================\r
`,s=[{question:"How does a Compact Constructor in a Java Record differ from a Canonical Constructor?",shortAnswer:"A Compact Constructor has no explicit parameter list in its declaration (public RecordName { ... }) and does not require explicit this.field = field assignments, which occur automatically after the block executes.",explanation:"Ideal for clean validation and input normalization.",hint:"Omits parameter list; field assignments happen automatically.",level:"Beginner",codeExample:"public Point { if (x < 0) throw new IllegalArgumentException(); }"},{question:"Can an overloaded constructor in a Record skip calling the canonical constructor?",shortAnswer:"No. Any secondary/overloaded constructor in a Record MUST delegate to another constructor or the canonical constructor using this(...).",explanation:"Ensures all component fields are properly initialized.",hint:"Must delegate to the canonical constructor via this(...).",level:"Intermediate",codeExample:"public Point(int x) { this(x, 0); // Mandatory delegation }"}];function g(){return t.jsxs("div",{className:"space-y-12 px-4 md:px-8 py-8 text-slate-200 bg-slate-900 min-h-screen",children:[t.jsxs("header",{className:"space-y-4 border-b border-slate-800 pb-6",children:[t.jsxs("div",{className:"flex items-center gap-3",children:[t.jsx("span",{className:"px-3 py-1 bg-sky-500/10 text-sky-400 border border-sky-500/20 text-xs font-semibold rounded-full uppercase tracking-wider",children:"Module 009_009 · Topic 4"}),t.jsx("span",{className:"px-3 py-1 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-xs font-semibold rounded-full",children:"Modern Java Evolution"})]}),t.jsxs("h1",{className:"text-xl sm:text-2xl md:text-3xl font-bold text-white tracking-tight",children:["Customizing Records: ",t.jsx("code",{className:"text-emerald-400 font-mono",children:"Compact Constructors & Normalization"})]}),t.jsx("p",{className:"text-base md:text-lg text-slate-400 leading-relaxed max-w-4xl",children:"Validating and normalizing record data: writing constructor validation without repeating parameter declarations, adding custom methods, and static helpers."})]}),t.jsxs("section",{className:"space-y-4",children:[t.jsxs("h2",{className:"text-2xl font-bold text-emerald-400 flex items-center gap-2",children:[t.jsx("span",{children:"💻"})," Hands-On Java Demo Code"]}),t.jsx(e,{fileModule:o,title:"CompactConstructorsDemo.java",highlightLines:[18,25,34,43]})]}),t.jsx("section",{className:"space-y-4",children:t.jsx(n,{title:"Modern Java Features FAQs",questions:s})}),t.jsx("section",{className:"space-y-4",children:t.jsx(r,{content:i,title:"Module 009_009 Topic 4: Compact Constructors",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Printable Note",downloadFileName:"009_009_topic4_compact_constructors_note.txt"})}),t.jsx(a,{note:"A Compact Constructor has no parameter list: public StudentRegistration { if (score < 0) throw ...; }! The assignments this.x = x happen automatically at the end of the constructor block! — Sukanta Hui"})]})}export{g as default};
