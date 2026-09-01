import{j as e}from"./vendor-react-core-Doz9nIC6.js";import{J as a}from"./JavaFileLoader-BfBG3xz_.js";import{F as t}from"./FAQTemplate-BHhlgA96.js";import{P as n}from"./PlainTextPrint-C08xhKA4.js";import{T as r}from"./TeacherSukantaHui-BaJcBHAy.js";import"./JavaCodeBlock-BwsLxS3r.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-8ao-0upJ.js";const s=`/**\r
 * Java Core Tutorial - Module 002_009: Packages, Access Modifiers, JAR Packaging & Module System\r
 * Topic 11: Creating and Executing JAR (Java Archive) Files Using 'jar' Tool\r
 * Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
 */\r
\r
package com.coderaccotax.javatutorial.packages;\r
\r
public class JarPackagingToolingDemo {\r
\r
    public static void main(String[] args) {\r
        System.out.println("==========================================================================");\r
        System.out.println(" TOPIC 11: CREATING & EXECUTING JAR (JAVA ARCHIVE) FILES - BARRACKPORE");\r
        System.out.println("==========================================================================\\n");\r
\r
        System.out.println(">>> What is a JAR File?");\r
        System.out.println("  - A JAR (Java Archive) is a compressed ZIP archive containing compiled .class files,");\r
        System.out.println("    resources (images, XML, properties), and metadata.");\r
        System.out.println();\r
        System.out.println(">>> Essential JAR CLI Commands:");\r
        System.out.println("  1. Create Executable JAR:");\r
        System.out.println("     jar --create --file academy-app.jar --main-class com.coderaccotax.Main -C bin .");\r
        System.out.println("     (or legacy flags: jar cfe academy-app.jar com.coderaccotax.Main -C bin .)");\r
        System.out.println();\r
        System.out.println("  2. Run Executable JAR:");\r
        System.out.println("     java -jar academy-app.jar");\r
        System.out.println();\r
        System.out.println("  3. Inspect Contents of a JAR:");\r
        System.out.println("     jar --list --file academy-app.jar (or: jar tf academy-app.jar)");\r
\r
        System.out.println("\\n==========================================================================");\r
    }\r
}`,i=`================================================================================\r
JAVA CORE TUTORIAL - QUICK REVISION GUIDE\r
Module 002_009: Packages, Access Modifiers & Module System\r
Topic 11: JAR Packaging & Execution\r
Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
================================================================================\r
\r
1. JAR TOOL SYNTAX:\r
   - Create: 'jar cfe app.jar com.company.Main -C bin .'\r
   - List  : 'jar tf app.jar'\r
   - Extract: 'jar xf app.jar'\r
   - Run   : 'java -jar app.jar'\r
\r
================================================================================\r
Classroom Practice: Barrackpore Academy | Mentor: Sukanta Hui\r
================================================================================`,o=[{question:"What is a JAR file in Java and how do you execute an executable JAR from the terminal?",shortAnswer:"A JAR (Java Archive) is a zip-compressed package of compiled .class files, resources, and manifest metadata. You execute an executable JAR using the command: 'java -jar app.jar'.",explanation:"The JAR must contain a MANIFEST.MF file declaring the 'Main-Class' entry.",hint:"ZIP-compressed archive of bytecode; executed via 'java -jar filename.jar'.",level:"Beginner",codeExample:`jar cfe app.jar com.company.Main -C bin .
java -jar app.jar`}];function g(){return e.jsxs("div",{className:"space-y-12 px-4 md:px-8 py-8 text-slate-200 bg-slate-900 min-h-screen",children:[e.jsx("style",{children:`
          @keyframes fadeIn {
            from { opacity: 0; transform: translateY(8px); }
            to { opacity: 1; transform: translateY(0); }
          }
          .animate-fade-in { animation: fadeIn 0.5s ease-out forwards; }
        `}),e.jsxs("header",{className:"space-y-4 border-b border-slate-800 pb-6 animate-fade-in",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"px-3 py-1 bg-sky-500/10 text-sky-400 border border-sky-500/20 text-xs font-semibold rounded-full uppercase tracking-wider",children:"Module 002_009 · Topic 11"}),e.jsx("span",{className:"px-3 py-1 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-xs font-semibold rounded-full",children:"Deployment Packaging"})]}),e.jsxs("h1",{className:"text-xl sm:text-2xl md:text-3xl font-bold text-white tracking-tight",children:["Creating & Executing JAR (Java Archive) Files Using the ",e.jsx("code",{className:"text-emerald-400 font-mono",children:"jar"})," Tool"]}),e.jsxs("p",{className:"text-base md:text-lg text-slate-400 leading-relaxed max-w-4xl",children:["Learn how to bundle enterprise applications into self-contained, executable JAR files: packaging bytecode, embedding metadata, and running with ",e.jsx("code",{className:"text-emerald-300 font-mono",children:"java -jar"}),"."]})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsxs("h2",{className:"text-2xl font-bold text-emerald-400 flex items-center gap-2",children:[e.jsx("span",{children:"💻"})," Hands-On Java Demo Code"]}),e.jsx(a,{fileModule:s,title:"JarPackagingToolingDemo.java",highlightLines:[7,15,18,22]})]}),e.jsx("section",{className:"space-y-4",children:e.jsx(t,{title:"JAR Packaging FAQs",questions:o})}),e.jsx("section",{className:"space-y-4",children:e.jsx(n,{content:i,title:"Module 002_009 Topic 11: JAR Packaging & Execution",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Printable Note",downloadFileName:"002_009_topic11_jar_packaging_note.txt"})}),e.jsx(r,{note:"A JAR file is just a zip file with a manifest! When you deliver software to a client or upload a microservice to Docker, you package it as an executable JAR. — Sukanta Hui"})]})}export{g as default};
