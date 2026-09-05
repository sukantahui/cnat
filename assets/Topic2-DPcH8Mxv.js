import{j as e}from"./vendor-react-core-Doz9nIC6.js";import{J as t}from"./JavaFileLoader-BfBG3xz_.js";import{F as n}from"./FAQTemplate-BHhlgA96.js";import{P as r}from"./PlainTextPrint-C08xhKA4.js";import{T as a}from"./TeacherSukantaHui-DerPxfxp.js";import"./JavaCodeBlock-BwsLxS3r.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-CH1iX9C8.js";const s=`/**\r
 * Java Core Tutorial - Module 009_003: Method & Constructor References\r
 * Topic 2: The 4 Kinds of Method References in Java: Complete Taxonomy Matrix\r
 * Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
 */\r
\r
package com.coderaccotax.javatutorial.functional;\r
\r
public class FourKindsMethodReferencesMatrixDemo {\r
\r
    public static void main(String[] args) {\r
        System.out.println("==========================================================================");\r
        System.out.println(" TOPIC 2: THE 4 KINDS OF METHOD REFERENCES - BARRACKPORE");\r
        System.out.println("==========================================================================\\n");\r
\r
        System.out.println("+----+---------------------------------------------------+-----------------------+-------------------------------+");\r
        System.out.println("| Kind| Classification                                    | Syntax Format         | Practical Java Example        |");\r
        System.out.println("+----+---------------------------------------------------+-----------------------+-------------------------------+");\r
        System.out.println("| 1. | Static Method Reference                           | ClassName::staticMethod| Math::max, Integer::parseInt  |");\r
        System.out.println("| 2. | Bound Instance Method (Particular Object)         | objRef::instanceMethod| System.out::println, myObj::calc|");\r
        System.out.println("| 3. | Unbound Instance Method (Arbitrary Object of Type)| ClassName::instMethod | String::toUpperCase, User::getId|");\r
        System.out.println("| 4. | Constructor Reference                             | ClassName::new        | ArrayList::new, String[]::new |");\r
        System.out.println("+----+---------------------------------------------------+-----------------------+-------------------------------+");\r
        System.out.println();\r
        System.out.println(">>> THE CORE DISTINCTION:");\r
        System.out.println("  - Kinds 1, 2, and 4 are straightforward 1:1 parameter matches.");\r
        System.out.println("  - Kind 3 (Unbound) uses the FIRST parameter of the functional interface as the TARGET OBJECT invocation receiver!");\r
\r
        System.out.println("\\n==========================================================================");\r
    }\r
}`,o=`================================================================================\r
JAVA CORE TUTORIAL - QUICK REVISION GUIDE\r
Module 009_003: Method & Constructor References\r
Topic 2: The 4 Kinds of Method References\r
Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
================================================================================\r
\r
1. THE 4 KINDS OF METHOD REFERENCES:\r
   - 1. Static: 'ClassName::staticMethod' ('Math::max').\r
   - 2. Bound Instance: 'objRef::instanceMethod' ('System.out::println').\r
   - 3. Unbound Instance: 'ClassName::instanceMethod' ('String::length').\r
   - 4. Constructor: 'ClassName::new' ('ArrayList::new').\r
\r
================================================================================\r
Classroom Practice: Barrackpore Academy | Mentor: Sukanta Hui\r
================================================================================`,i=[{question:"Enumerate and classify the 4 kinds of Method References supported in Java.",shortAnswer:"1. 'Static Method Reference': 'ClassName::staticMethodName' (e.g. 'Math::max'). 2. 'Bound Instance Method Reference': 'instanceRef::instanceMethodName' on a specific pre-existing object (e.g. 'System.out::println'). 3. 'Unbound Instance Method Reference': 'ClassName::instanceMethodName' where the first parameter of the SAM becomes the target receiver object (e.g. 'String::toUpperCase', 'Student::getMarks'). 4. 'Constructor Reference': 'ClassName::new' (e.g. 'ArrayList::new', 'String[]::new').",explanation:"Complete taxonomy of the 4 method reference types in Java 8.",hint:"1. Static (ClassName::staticMethod), 2. Bound (obj::method), 3. Unbound (ClassName::instanceMethod), 4. Constructor (Class::new).",level:"Intermediate",codeExample:"Math::max; System.out::println; String::toLowerCase; ArrayList::new;"}];function f(){return e.jsxs("div",{className:"space-y-12 px-4 md:px-8 py-8 text-slate-200 bg-slate-900 min-h-screen",children:[e.jsxs("header",{className:"space-y-4 border-b border-slate-800 pb-6",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"px-3 py-1 bg-sky-500/10 text-sky-400 border border-sky-500/20 text-xs font-semibold rounded-full uppercase tracking-wider",children:"Module 009_003 · Topic 2"}),e.jsx("span",{className:"px-3 py-1 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-xs font-semibold rounded-full",children:"The 4 Kinds"})]}),e.jsxs("h1",{className:"text-xl sm:text-2xl md:text-3xl font-bold text-white tracking-tight",children:["The ",e.jsx("code",{className:"text-emerald-400 font-mono",children:"4 Kinds of Method References"})," in Java: Complete Taxonomy"]}),e.jsx("p",{className:"text-base md:text-lg text-slate-400 leading-relaxed max-w-4xl",children:"Survey the method reference matrix: classifying static references, bound instance handles, unbound instance receivers, and constructor instantiations."})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsxs("h2",{className:"text-2xl font-bold text-emerald-400 flex items-center gap-2",children:[e.jsx("span",{children:"💻"})," Hands-On Java Demo Code"]}),e.jsx(t,{fileModule:s,title:"FourKindsMethodReferencesMatrixDemo.java",highlightLines:[7,10,13,14,15,16,17,18,22,23]})]}),e.jsx("section",{className:"space-y-4",children:e.jsx(n,{title:"The 4 Kinds FAQs",questions:i})}),e.jsx("section",{className:"space-y-4",children:e.jsx(r,{content:o,title:"Module 009_003 Topic 2: The 4 Kinds of Method References",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Printable Note",downloadFileName:"009_003_topic2_four_kinds_of_method_references_note.txt"})}),e.jsx(a,{note:"Every method reference in Java belongs to one of these 4 categories! Master the difference between Bound (on an existing object) and Unbound (where the first parameter is the object itself) and you will never be confused again! — Sukanta Hui"})]})}export{f as default};
