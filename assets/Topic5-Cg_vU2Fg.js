import{j as e}from"./vendor-react-core-Doz9nIC6.js";import{J as n}from"./JavaFileLoader-BfBG3xz_.js";import{F as t}from"./FAQTemplate-BHhlgA96.js";import{P as r}from"./PlainTextPrint-C08xhKA4.js";import{T as i}from"./TeacherSukantaHui-DerPxfxp.js";import"./JavaCodeBlock-BwsLxS3r.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-CH1iX9C8.js";const s=`/**\r
 * Java Core Tutorial - Module 006_002: Generic Methods, Constructors & Type Inference\r
 * Topic 5: Generic Constructors: Parameterizing Constructors Independently\r
 * Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
 */\r
\r
package com.coderaccotax.javatutorial.generics;\r
\r
// Non-generic class containing a GENERIC CONSTRUCTOR:\r
class StudentEntryRecord {\r
    private final String description;\r
\r
    // Generic Constructor: Declares '<T>' independently for constructor arguments:\r
    public <T> StudentEntryRecord(T inputData) {\r
        this.description = "Entry [" + inputData.getClass().getSimpleName() + "]: " + inputData.toString();\r
    }\r
\r
    public String getDescription() { return description; }\r
}\r
\r
public class GenericConstructorIndependenceDemo {\r
\r
    public static void main(String[] args) {\r
        System.out.println("==========================================================================");\r
        System.out.println(" TOPIC 5: GENERIC CONSTRUCTORS - BARRACKPORE");\r
        System.out.println("==========================================================================\\n");\r
\r
        // 1. Initializing using String:\r
        StudentEntryRecord rec1 = new StudentEntryRecord("Swadeep Paul (Barrackpore)");\r
\r
        // 2. Initializing using Integer:\r
        StudentEntryRecord rec2 = new StudentEntryRecord(101);\r
\r
        // 3. Initializing using Double:\r
        StudentEntryRecord rec3 = new StudentEntryRecord(9850.75);\r
\r
        System.out.println(">>> Initialized Records via Generic Constructor:");\r
        System.out.println("  Record 1: " + rec1.getDescription());\r
        System.out.println("  Record 2: " + rec2.getDescription());\r
        System.out.println("  Record 3: " + rec3.getDescription());\r
\r
        System.out.println("\\n>>> SYNTAX RULES FOR GENERIC CONSTRUCTORS:");\r
        System.out.println("  1. The type parameter '<T>' appears immediately before the constructor name.");\r
        System.out.println("  2. Allowed in both generic and non-generic classes.");\r
        System.out.println("  3. Explicit witness syntax: 'new <String>StudentEntryRecord("Data")'.");\r
\r
        System.out.println("\\n==========================================================================");\r
    }\r
}`,o=`================================================================================\r
JAVA CORE TUTORIAL - QUICK REVISION GUIDE\r
Module 006_002: Generic Methods, Constructors & Type Inference\r
Topic 5: Generic Constructors\r
Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
================================================================================\r
\r
1. GENERIC CONSTRUCTORS:\r
   - 'public <T> ClassName(T arg)'.\r
   - '<T>' placed before constructor name.\r
   - Can exist in non-generic classes.\r
   - Flexible polymorphic constructor ingestion.\r
\r
================================================================================\r
Classroom Practice: Barrackpore Academy | Mentor: Sukanta Hui\r
================================================================================`,a=[{question:"Can a non-generic class have a generic constructor, and what is its declaration syntax?",shortAnswer:"YES. A non-generic class can define a generic constructor by declaring the type parameter '<T>' immediately before the constructor name: 'public <T> MyClass(T input)'. This allows the constructor to accept and process polymorphic arguments independently while the class itself remains non-generic.",explanation:"Useful for converting heterogeneous inputs into standard internal representations.",hint:"Yes; declared as 'public <T> ClassName(T arg)' immediately before the constructor name.",level:"Intermediate",codeExample:"public class Entry { public <T> Entry(T value) { ... } }"}];function y(){return e.jsxs("div",{className:"space-y-12 px-4 md:px-8 py-8 text-slate-200 bg-slate-900 min-h-screen",children:[e.jsxs("header",{className:"space-y-4 border-b border-slate-800 pb-6",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"px-3 py-1 bg-sky-500/10 text-sky-400 border border-sky-500/20 text-xs font-semibold rounded-full uppercase tracking-wider",children:"Module 006_002 · Topic 5"}),e.jsx("span",{className:"px-3 py-1 bg-indigo-500/10 text-indigo-400 border border-indigo-500/20 text-xs font-semibold rounded-full",children:"Generic Constructors"})]}),e.jsx("h1",{className:"text-xl sm:text-2xl md:text-3xl font-bold text-white tracking-tight",children:"Generic Constructors: Parameterizing Constructors Independently"}),e.jsx("p",{className:"text-base md:text-lg text-slate-400 leading-relaxed max-w-4xl",children:"Construct polymorphic objects: defining generic constructors in standard classes to ingest heterogeneous data types with compile-time verification."})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsxs("h2",{className:"text-2xl font-bold text-emerald-400 flex items-center gap-2",children:[e.jsx("span",{children:"💻"})," Hands-On Java Demo Code"]}),e.jsx(n,{fileModule:s,title:"GenericConstructorIndependenceDemo.java",highlightLines:[7,10,11,12,13,22,25,28]})]}),e.jsx("section",{className:"space-y-4",children:e.jsx(t,{title:"Generic Constructors FAQs",questions:a})}),e.jsx("section",{className:"space-y-4",children:e.jsx(r,{content:o,title:"Module 006_002 Topic 5: Generic Constructors",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Printable Note",downloadFileName:"006_002_topic5_generic_constructors_note.txt"})}),e.jsx(i,{note:"Generic constructors allow an ordinary class to accept any type during object creation! Writing '<T>' before the constructor name gives you maximum flexibility! — Sukanta Hui"})]})}export{y as default};
