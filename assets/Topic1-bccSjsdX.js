import{j as e}from"./vendor-react-core-Doz9nIC6.js";import{J as t}from"./JavaFileLoader-BfBG3xz_.js";import{F as n}from"./FAQTemplate-BHhlgA96.js";import{P as a}from"./PlainTextPrint-C08xhKA4.js";import{T as r}from"./TeacherSukantaHui-BaJcBHAy.js";import"./JavaCodeBlock-BwsLxS3r.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-8ao-0upJ.js";const o=`/**\r
 * Java Core Tutorial - Module 009_008: The Optional Class & Null-Safe Functional Programming\r
 * Topic 1: The Philosophy of java.util.Optional<T>\r
 * Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
 */\r
\r
package com.coderaccotax.javatutorial.optional;\r
\r
import java.util.Optional;\r
\r
public class PhilosophyOfOptionalDemo {\r
\r
    public static void main(String[] args) {\r
        System.out.println("==========================================================================");\r
        System.out.println(" TOPIC 1: PHILOSOPHY OF OPTIONAL<T> - BARRACKPORE ACADEMY");\r
        System.out.println("==========================================================================\\n");\r
\r
        // 1. Value is Present: Container holds an object\r
        Optional<String> presentStudent = Optional.of("Swadeep Paul (Barrackpore)");\r
        System.out.println("1. Present Optional:");\r
        System.out.println("   - Container : " + presentStudent);\r
        System.out.println("   - isPresent : " + presentStudent.isPresent());\r
        System.out.println("   - isEmpty   : " + presentStudent.isEmpty() + " (Java 11+)");\r
\r
        // 2. Value is Absent: Container is empty (NOT NULL!)\r
        Optional<String> absentStudent = Optional.empty();\r
        System.out.println("\\n2. Absent Optional (Empty container, NOT a null pointer!):");\r
        System.out.println("   - Container : " + absentStudent);\r
        System.out.println("   - isPresent : " + absentStudent.isPresent());\r
        System.out.println("   - isEmpty   : " + absentStudent.isEmpty());\r
\r
        // 3. Querying with fallback safely\r
        System.out.println("\\n3. Extracting with fallback:");\r
        System.out.println("   - Present unwrapped: " + presentStudent.orElse("Default Guest"));\r
        System.out.println("   - Absent unwrapped : " + absentStudent.orElse("Default Guest"));\r
\r
        System.out.println("\\n==========================================================================");\r
    }\r
}\r
`,i=`================================================================================\r
JAVA CORE TUTORIAL - QUICK REVISION GUIDE\r
Module 009_008: The Optional Class & Null-Safe Functional Programming\r
Topic 1: Philosophy of java.util.Optional<T>\r
Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
================================================================================\r
\r
1. WHAT IS OPTIONAL<T>:\r
   - A final, value-based container object which may or may not contain a non-null value.\r
   - If a value is present, 'isPresent()' returns true.\r
   - If no value is present, the object is considered 'empty' and 'isEmpty()' returns true.\r
\r
2. CORE INTENT:\r
   - Designed primarily to provide a type-level solution for representing 'no result'\r
     from library methods where returning null was traditionally error-prone.\r
\r
================================================================================\r
Classroom Practice: Barrackpore Academy | Mentor: Sukanta Hui\r
================================================================================\r
`,s=[{question:"Is an empty Optional object the same as a null reference?",shortAnswer:"No! An empty Optional (Optional.empty()) is a valid, non-null heap object instance representing an empty box. Invoking methods on Optional.empty() is completely safe and never throws a NullPointerException.",explanation:"This eliminates null pointer dereferencing completely.",hint:"Optional.empty() is a valid non-null instance, not a null pointer.",level:"Beginner",codeExample:"Optional<String> opt = Optional.empty(); opt.isPresent(); // Returns false safely!"},{question:"When was the isEmpty() method added to the java.util.Optional class?",shortAnswer:"isEmpty() was introduced in Java 11 as the direct inverse of isPresent(), eliminating the need to write !opt.isPresent().",explanation:"Improves code readability.",hint:"Java 11",level:"Beginner",codeExample:"if (opt.isEmpty()) { ... }"}];function x(){return e.jsxs("div",{className:"space-y-12 px-4 md:px-8 py-8 text-slate-200 bg-slate-900 min-h-screen",children:[e.jsxs("header",{className:"space-y-4 border-b border-slate-800 pb-6",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"px-3 py-1 bg-sky-500/10 text-sky-400 border border-sky-500/20 text-xs font-semibold rounded-full uppercase tracking-wider",children:"Module 009_008 · Topic 1"}),e.jsx("span",{className:"px-3 py-1 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-xs font-semibold rounded-full",children:"Optional & Null-Safety"})]}),e.jsxs("h1",{className:"text-xl sm:text-2xl md:text-3xl font-bold text-white tracking-tight",children:["The Philosophy of ",e.jsx("code",{className:"text-emerald-400 font-mono",children:"java.util.Optional<T>"}),": Explicit Container of Presence"]}),e.jsx("p",{className:"text-base md:text-lg text-slate-400 leading-relaxed max-w-4xl",children:"Deconstructing Optional as a single-element container: representing presence vs absence cleanly without polluting heap architectures."})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsxs("h2",{className:"text-2xl font-bold text-emerald-400 flex items-center gap-2",children:[e.jsx("span",{children:"💻"})," Hands-On Java Demo Code"]}),e.jsx(t,{fileModule:o,title:"PhilosophyOfOptionalDemo.java",highlightLines:[18,25,34,43]})]}),e.jsx("section",{className:"space-y-4",children:e.jsx(n,{title:"Optional & Null-Safe Programming FAQs",questions:s})}),e.jsx("section",{className:"space-y-4",children:e.jsx(a,{content:i,title:"Module 009_008 Topic 1: Philosophy of Optional",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Printable Note",downloadFileName:"009_008_topic1_philosophy_of_optional_note.txt"})}),e.jsx(r,{note:"Optional is like a sealed parcel box: it either contains a value inside (Present) or it is empty (Absent). You cannot touch the content until you unseal the box with safe functional methods! — Sukanta Hui"})]})}export{x as default};
