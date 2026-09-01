import{j as e}from"./vendor-react-core-Doz9nIC6.js";import{J as t}from"./JavaFileLoader-BfBG3xz_.js";import{F as n}from"./FAQTemplate-BHhlgA96.js";import{P as r}from"./PlainTextPrint-C08xhKA4.js";import{T as s}from"./TeacherSukantaHui-CEPuAfsb.js";import"./JavaCodeBlock-BwsLxS3r.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-DGCamHnX.js";const i=`/**\r
 * Java Core Tutorial - Module 006_004: Wildcards & The PECS Principle\r
 * Topic 1: Introduction to the Wildcard Symbol (?): Representing an Unknown Type\r
 * Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
 */\r
\r
package com.coderaccotax.javatutorial.generics;\r
\r
import java.util.List;\r
\r
public class WildcardSymbolIntroductionDemo {\r
\r
    // Method accepting a List of UNKNOWN TYPE (List<?>):\r
    public static void printAnyCollection(List<?> list) {\r
        System.out.print("  List size [" + list.size() + "]: ");\r
        for (Object element : list) { // Elements can always be safely read as Object!\r
            System.out.print(element + " ");\r
        }\r
        System.out.println();\r
    }\r
\r
    public static void main(String[] args) {\r
        System.out.println("==========================================================================");\r
        System.out.println(" TOPIC 1: THE WILDCARD SYMBOL (?) - BARRACKPORE");\r
        System.out.println("==========================================================================\\n");\r
\r
        List<String> studentNames = List.of("Swadeep", "Tuhina", "Abhronila");\r
        List<Integer> rollNumbers = List.of(101, 102, 103, 104);\r
        List<Double> examScores = List.of(98.5, 99.0, 94.75);\r
\r
        System.out.println(">>> 1. Invoking printAnyCollection(List<?>) across Diverse Types:");\r
        printAnyCollection(studentNames);\r
        printAnyCollection(rollNumbers);\r
        printAnyCollection(examScores);\r
\r
        System.out.println("\\n>>> WHAT DOES THE WILDCARD '?' MEAN?");\r
        System.out.println("  1. The question mark '?' represents an 'Unknown Type'.");\r
        System.out.println("  2. 'List<?>' is the supertype of ALL parameterized lists ('List<String>', 'List<Integer>', etc.).");\r
        System.out.println("  3. Read-Safe: Any item read from 'List<?>' is guaranteed to be an instance of 'java.lang.Object'.");\r
\r
        System.out.println("\\n==========================================================================");\r
    }\r
}`,a=`================================================================================\r
JAVA CORE TUTORIAL - QUICK REVISION GUIDE\r
Module 006_004: Wildcards & The PECS Principle\r
Topic 1: The Wildcard Symbol (?)\r
Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
================================================================================\r
\r
1. WILDCARD ESSENTIALS:\r
   - '?' = Unknown type.\r
   - 'List<?>' is the parent supertype of all 'List<T>'.\r
   - Safely read items as 'java.lang.Object'.\r
   - Enables read-only polymorphic collection processing.\r
\r
================================================================================\r
Classroom Practice: Barrackpore Academy | Mentor: Sukanta Hui\r
================================================================================`,o=[{question:"What does the question mark '?' wildcard symbol represent in Java Generics?",shortAnswer:"The question mark '?' is the Wildcard symbol representing an 'Unknown Type'. In 'List<?>', it denotes a list whose exact element type is unknown at compile time. 'List<?>' acts as the common universal supertype for all generic lists (such as List<String>, List<Integer>, List<Date>), allowing generic polymorphic collection passing.",explanation:"Re-establishes polymorphism for generic collections.",hint:"Represents an unknown type, acting as the universal supertype for all generic collections.",level:"Beginner",codeExample:"public static void print(List<?> list) { ... } // Accepts any generic list"}];function h(){return e.jsxs("div",{className:"space-y-12 px-4 md:px-8 py-8 text-slate-200 bg-slate-900 min-h-screen",children:[e.jsxs("header",{className:"space-y-4 border-b border-slate-800 pb-6",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"px-3 py-1 bg-sky-500/10 text-sky-400 border border-sky-500/20 text-xs font-semibold rounded-full uppercase tracking-wider",children:"Module 006_004 · Topic 1"}),e.jsx("span",{className:"px-3 py-1 bg-indigo-500/10 text-indigo-400 border border-indigo-500/20 text-xs font-semibold rounded-full",children:"Wildcard Symbol"})]}),e.jsxs("h1",{className:"text-xl sm:text-2xl md:text-3xl font-bold text-white tracking-tight",children:["Introduction to the Wildcard Symbol (",e.jsx("code",{className:"text-emerald-400 font-mono",children:"?"}),"): Unknown Type Representation"]}),e.jsxs("p",{className:"text-base md:text-lg text-slate-400 leading-relaxed max-w-4xl",children:["Restore collection polymorphism: utilizing the ",e.jsx("code",{className:"text-emerald-300 font-mono",children:"?"})," wildcard to accept any parameterized list and inspect elements safely as Java Objects."]})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsxs("h2",{className:"text-2xl font-bold text-emerald-400 flex items-center gap-2",children:[e.jsx("span",{children:"💻"})," Hands-On Java Demo Code"]}),e.jsx(t,{fileModule:i,title:"WildcardSymbolIntroductionDemo.java",highlightLines:[7,10,13,14,15,23,24,25]})]}),e.jsx("section",{className:"space-y-4",children:e.jsx(n,{title:"Wildcard FAQs",questions:o})}),e.jsx("section",{className:"space-y-4",children:e.jsx(r,{content:a,title:"Module 006_004 Topic 1: Wildcard Symbol (?)",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Printable Note",downloadFileName:"006_004_topic1_wildcard_symbol_intro_note.txt"})}),e.jsx(s,{note:"The wildcard '?' is like a blank wildcard in a card game! It says 'I don't know or care what type is inside this list, I will treat them all respectfully as Objects!' — Sukanta Hui"})]})}export{h as default};
