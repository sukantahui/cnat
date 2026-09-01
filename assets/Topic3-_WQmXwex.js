import{j as e}from"./vendor-react-core-Doz9nIC6.js";import{J as t}from"./JavaFileLoader-BfBG3xz_.js";import{F as a}from"./FAQTemplate-BHhlgA96.js";import{P as r}from"./PlainTextPrint-C08xhKA4.js";import{T as n}from"./TeacherSukantaHui-CEPuAfsb.js";import"./JavaCodeBlock-BwsLxS3r.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-DGCamHnX.js";const s=`/**\r
 * Java Core Tutorial - Module 002_009: Packages, Access Modifiers, JAR Packaging & Module System\r
 * Topic 3: Importing Packages and Classes Using 'import' Statements\r
 * Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
 */\r
\r
package com.coderaccotax.javatutorial.packages;\r
\r
// 1. Explicit Single-Class Import (Recommended for clarity):\r
import java.util.ArrayList;\r
import java.util.List;\r
\r
// 2. java.lang package is AUTOMATICALLY imported by the compiler in every Java file!\r
// (e.g. String, System, Math, Object, Integer are always available without import)\r
\r
public class ImportingPackagesSyntaxDemo {\r
\r
    public static void main(String[] args) {\r
        System.out.println("==========================================================================");\r
        System.out.println(" TOPIC 3: IMPORTING PACKAGES IN JAVA - BARRACKPORE");\r
        System.out.println("==========================================================================\\n");\r
\r
        // Using imported types directly without typing 'java.util.ArrayList':\r
        List<String> trainees = new ArrayList<>();\r
        trainees.add("Swadeep Paul (Barrackpore)");\r
        trainees.add("Tuhina Das (Naihati)");\r
        trainees.add("Debangshu Mukherjee (Shyamnagar)");\r
\r
        System.out.println(">>> Enrolled Trainees List:");\r
        for (String t : trainees) {\r
            System.out.println("  -> " + t);\r
        }\r
\r
        System.out.println("\\n==========================================================================");\r
    }\r
}`,i=`================================================================================\r
JAVA CORE TUTORIAL - QUICK REVISION GUIDE\r
Module 002_009: Packages, Access Modifiers & Module System\r
Topic 3: The 'import' Statement\r
Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
================================================================================\r
\r
1. 'import' STATEMENT RULES:\r
   - Placed after 'package' and before 'class'.\r
   - 'java.lang.*' is automatically imported into every Java file.\r
   - Same package classes do NOT need an import statement.\r
\r
================================================================================\r
Classroom Practice: Barrackpore Academy | Mentor: Sukanta Hui\r
================================================================================`,o=[{question:"What is the role of the 'import' statement in Java, and which package is imported automatically by default?",shortAnswer:"The 'import' statement brings classes from other packages into the current compilation scope so you can refer to them by their simple class names rather than fully qualified names. The 'java.lang' package is imported automatically into every Java file.",explanation:"Without 'import java.util.List', you would have to write 'java.util.List list = new java.util.ArrayList();'.",hint:"Enables using simple class names; java.lang is imported automatically.",level:"Beginner",codeExample:"import java.util.List; // java.lang.* is automatic"}];function h(){return e.jsxs("div",{className:"space-y-12 px-4 md:px-8 py-8 text-slate-200 bg-slate-900 min-h-screen",children:[e.jsx("style",{children:`
          @keyframes fadeIn {
            from { opacity: 0; transform: translateY(8px); }
            to { opacity: 1; transform: translateY(0); }
          }
          .animate-fade-in { animation: fadeIn 0.5s ease-out forwards; }
        `}),e.jsxs("header",{className:"space-y-4 border-b border-slate-800 pb-6 animate-fade-in",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"px-3 py-1 bg-sky-500/10 text-sky-400 border border-sky-500/20 text-xs font-semibold rounded-full uppercase tracking-wider",children:"Module 002_009 · Topic 3"}),e.jsx("span",{className:"px-3 py-1 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-xs font-semibold rounded-full",children:"Scope Importation"})]}),e.jsxs("h1",{className:"text-xl sm:text-2xl md:text-3xl font-bold text-white tracking-tight",children:["Importing Packages & Classes Using ",e.jsx("code",{className:"text-emerald-400 font-mono",children:"import"})," Statements"]}),e.jsxs("p",{className:"text-base md:text-lg text-slate-400 leading-relaxed max-w-4xl",children:["Learn how ",e.jsx("code",{className:"text-emerald-300 font-mono",children:"import"})," statements bring foreign package types into scope, and discover why ",e.jsx("code",{className:"text-indigo-400 font-mono",children:"java.lang"})," is universally auto-imported."]})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsxs("h2",{className:"text-2xl font-bold text-emerald-400 flex items-center gap-2",children:[e.jsx("span",{children:"💻"})," Hands-On Java Demo Code"]}),e.jsx(t,{fileModule:s,title:"ImportingPackagesSyntaxDemo.java",highlightLines:[7,10,11,22,23]})]}),e.jsx("section",{className:"space-y-4",children:e.jsx(a,{title:"Import Statements FAQs",questions:o})}),e.jsx("section",{className:"space-y-4",children:e.jsx(r,{content:i,title:"Module 002_009 Topic 3: import Statements",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Printable Note",downloadFileName:"002_009_topic3_import_statements_note.txt"})}),e.jsx(n,{note:"Import statements do not copy code or slow down your program at runtime; they simply tell the compiler: 'When I type List, I mean java.util.List!' — Sukanta Hui"})]})}export{h as default};
