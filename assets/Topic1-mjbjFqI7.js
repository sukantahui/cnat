import{j as e}from"./vendor-react-core-Doz9nIC6.js";import{J as t}from"./JavaFileLoader-BfBG3xz_.js";import{F as i}from"./FAQTemplate-BHhlgA96.js";import{P as r}from"./PlainTextPrint-C08xhKA4.js";import{T as n}from"./TeacherSukantaHui-BaJcBHAy.js";import"./JavaCodeBlock-BwsLxS3r.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-8ao-0upJ.js";const s=`/**\r
 * Java Core Tutorial - Module 012_005: Interview Mastery & Tricky MCQs\r
 * Topic 1: Tricky Riddle 2 - Method Overloading Resolution with null\r
 * Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
 */\r
\r
package com.coderaccotax.javatutorial.interview;\r
\r
public class TrickyRiddle2OverloadingWithNullDemo {\r
\r
    public static void display(Object obj) {\r
        System.out.println("Called display(Object)");\r
    }\r
\r
    public static void display(String str) {\r
        System.out.println("Called display(String) - Most specific subtype!");\r
    }\r
\r
    public static void main(String[] args) {\r
        System.out.println("==========================================================================");\r
        System.out.println(" TRICKY RIDDLE 2: OVERLOADING RESOLUTION WITH NULL - BARRACKPORE");\r
        System.out.println("==========================================================================\\n");\r
\r
        System.out.println("Calling display(null):");\r
        display(null); // String is subtype of Object -> Compiler chooses most specific!\r
\r
        System.out.println("\r
RULE: If two sibling classes exist at the same hierarchy level (e.g. String & Integer),");\r
        System.out.println("calling display(null) causes: 'reference to display is ambiguous' COMPILE ERROR!");\r
\r
        System.out.println("\\n==========================================================================");\r
    }\r
}\r
`,a=`================================================================================\r
JAVA CORE TUTORIAL - QUICK REVISION GUIDE\r
Module 012_005: Interview Mastery & Tricky MCQs\r
Topic 1: Tricky Riddle 2 - Overloading with null\r
Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
================================================================================\r
\r
1. MOST SPECIFIC METHOD RULE (JLS 15.12.2.5):\r
   - Java compiler chooses the most specific method compatible with arguments.\r
   - 'String' is a subclass of 'Object' → 'String' is more specific.\r
   - If two candidate parameter types are siblings (e.g. String vs StringBuffer),\r
     neither is more specific → Ambiguity compile-time error.\r
\r
================================================================================\r
Classroom Practice: Barrackpore Academy | Mentor: Sukanta Hui\r
================================================================================\r
`,l=[{question:"Why does calling an overloaded method with null pick the String parameter over Object?",shortAnswer:"According to the Java Language Specification (JLS), when multiple applicable overloaded methods exist, the compiler selects the most specific type. Since String is a subtype of Object, String is more specific.",explanation:"Most Specific Method Rule in Java compiler resolution.",hint:"Subtypes are more specific than supertypes.",level:"Intermediate",codeExample:"display(null); // Selects display(String)"},{question:"What happens if a class defines display(String s) and display(Integer i) and you invoke display(null)?",shortAnswer:"It results in a compile-time error: 'reference to display is ambiguous', because String and Integer are sibling classes under Object with neither being more specific than the other.",explanation:"Compiler ambiguity error on sibling types.",hint:"Compile error because neither String nor Integer is a subtype of the other.",level:"Intermediate",codeExample:"// Compile Error: Ambiguous method call"}];function y(){return e.jsxs("div",{className:"space-y-12 px-4 md:px-8 py-8 text-slate-200 bg-slate-900 min-h-screen",children:[e.jsxs("header",{className:"space-y-4 border-b border-slate-800 pb-6",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"px-3 py-1 bg-sky-500/10 text-sky-400 border border-sky-500/20 text-xs font-semibold rounded-full uppercase tracking-wider",children:"Module 012_005 · Topic 1"}),e.jsx("span",{className:"px-3 py-1 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-xs font-semibold rounded-full",children:"Interview Mastery & Tricky MCQs"})]}),e.jsxs("h1",{className:"text-xl sm:text-2xl md:text-3xl font-bold text-white tracking-tight",children:["Tricky Riddle 2: ",e.jsx("code",{className:"text-emerald-400 font-mono",children:"Overloading Resolution with null"})]}),e.jsx("p",{className:"text-base md:text-lg text-slate-400 leading-relaxed max-w-4xl",children:"Compiler specificity rules: understanding why foo((String) null) binds to the most specific child type, and when ambiguity compiler errors occur."})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsxs("h2",{className:"text-2xl font-bold text-emerald-400 flex items-center gap-2",children:[e.jsx("span",{children:"💻"})," Hands-On Java Demo Code"]}),e.jsx(t,{fileModule:s,title:"TrickyRiddle2OverloadingWithNullDemo.java",highlightLines:[18,25,34,43]})]}),e.jsx("section",{className:"space-y-4",children:e.jsx(i,{title:"Interview Riddles & MCQs FAQs",questions:l})}),e.jsx("section",{className:"space-y-4",children:e.jsx(r,{content:a,title:"Module 012_005 Topic 1: Tricky Riddle 2 - Overloading with null",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Printable Note",downloadFileName:"012_005_topic1_tricky_riddle_2_overloading_with_null_note.txt"})}),e.jsx(n,{note:"When calling test(null) with overloaded methods test(Object o) and test(String s), Java picks test(String s) because String is more specific than Object! But if you also add test(Integer i), compilation FAILS with an ambiguity error! — Sukanta Hui"})]})}export{y as default};
