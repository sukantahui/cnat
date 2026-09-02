import{j as a}from"./vendor-react-core-Doz9nIC6.js";import{J as e}from"./JavaFileLoader-BfBG3xz_.js";import{F as t}from"./FAQTemplate-BHhlgA96.js";import{P as n}from"./PlainTextPrint-C08xhKA4.js";import{T as o}from"./TeacherSukantaHui-RpFLNJ5A.js";import"./JavaCodeBlock-BwsLxS3r.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-wprqVFW_.js";const r=`/**\r
 * Java Core Tutorial - Module 002_009: Packages, Access Modifiers, JAR Packaging & Module System\r
 * Topic 10: Compiling and Running Packaged Java Files from Command Line ('javac -d .' & 'java')\r
 * Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
 */\r
\r
package com.coderaccotax.javatutorial.packages;\r
\r
public class CommandLinePackagingCompilationDemo {\r
\r
    public static void main(String[] args) {\r
        System.out.println("==========================================================================");\r
        System.out.println(" TOPIC 10: COMPILING & RUNNING PACKAGED JAVA CODE (CLI) - BARRACKPORE");\r
        System.out.println("==========================================================================\\n");\r
\r
        System.out.println(">>> 1. The '-d' (Destination) Flag with 'javac':");\r
        System.out.println("  Command: javac -d bin src/com/coderaccotax/academy/Main.java");\r
        System.out.println("  Effect : Automatically generates folder hierarchy 'bin/com/coderaccotax/academy/'");\r
        System.out.println("           and places 'Main.class' inside it!");\r
        System.out.println();\r
        System.out.println(">>> 2. Running Packaged Bytecode with 'java':");\r
        System.out.println("  Command: java -cp bin com.coderaccotax.academy.Main");\r
        System.out.println("  Rules  :");\r
        System.out.println("    ✔ '-cp bin' specifies the root classpath folder.");\r
        System.out.println("    ✔ MUST use the Fully Qualified Class Name ('com.coderaccotax.academy.Main').");\r
        System.out.println("    X Do NOT use slashes ('com/coderaccotax/academy/Main') or '.class' extension!");\r
\r
        System.out.println("\\n==========================================================================");\r
    }\r
}`,i=`================================================================================\r
JAVA CORE TUTORIAL - QUICK REVISION GUIDE\r
Module 002_009: Packages, Access Modifiers & Module System\r
Topic 10: Compiling & Running Packaged Code\r
Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
================================================================================\r
\r
1. COMMAND LINE PACKAGING WORKFLOW:\r
   - Compilation : 'javac -d bin src/com/company/App.java'\r
   - Execution   : 'java -cp bin com.company.App'\r
   - Always run using the Fully Qualified Class Name from the root classpath.\r
\r
================================================================================\r
Classroom Practice: Barrackpore Academy | Mentor: Sukanta Hui\r
================================================================================`,s=[{question:"What is the purpose of the '-d' flag when running the 'javac' compiler on packaged Java files?",shortAnswer:"The '-d <directory>' flag tells javac to automatically create the package directory structure (e.g. 'com/company/app/') inside the specified target folder and place the compiled '.class' files in their correct folder hierarchy.",explanation:"Without '-d', javac simply outputs the .class file in the current folder without creating package folders.",hint:"Automatically creates package folder hierarchies for compiled .class files.",level:"Beginner",codeExample:`javac -d out src/com/app/Main.java
java -cp out com.app.Main`}];function g(){return a.jsxs("div",{className:"space-y-12 px-4 md:px-8 py-8 text-slate-200 bg-slate-900 min-h-screen",children:[a.jsx("style",{children:`
          @keyframes fadeIn {
            from { opacity: 0; transform: translateY(8px); }
            to { opacity: 1; transform: translateY(0); }
          }
          .animate-fade-in { animation: fadeIn 0.5s ease-out forwards; }
        `}),a.jsxs("header",{className:"space-y-4 border-b border-slate-800 pb-6 animate-fade-in",children:[a.jsxs("div",{className:"flex items-center gap-3",children:[a.jsx("span",{className:"px-3 py-1 bg-sky-500/10 text-sky-400 border border-sky-500/20 text-xs font-semibold rounded-full uppercase tracking-wider",children:"Module 002_009 · Topic 10"}),a.jsx("span",{className:"px-3 py-1 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-xs font-semibold rounded-full",children:"CLI Tooling"})]}),a.jsxs("h1",{className:"text-xl sm:text-2xl md:text-3xl font-bold text-white tracking-tight",children:["Compiling & Running Packaged Java Files: ",a.jsx("code",{className:"text-emerald-400 font-mono",children:"javac -d"})," & ",a.jsx("code",{className:"text-emerald-400 font-mono",children:"java -cp"})]}),a.jsxs("p",{className:"text-base md:text-lg text-slate-400 leading-relaxed max-w-4xl",children:["Master terminal build workflows: using ",a.jsx("code",{className:"text-emerald-300 font-mono",children:"javac -d"})," for automatic package directory creation and running fully qualified class names via classpath flags."]})]}),a.jsxs("section",{className:"space-y-4",children:[a.jsxs("h2",{className:"text-2xl font-bold text-emerald-400 flex items-center gap-2",children:[a.jsx("span",{children:"💻"})," Hands-On Java Demo Code"]}),a.jsx(e,{fileModule:r,title:"CommandLinePackagingCompilationDemo.java",highlightLines:[7,14,15,19,20]})]}),a.jsx("section",{className:"space-y-4",children:a.jsx(t,{title:"CLI Packaging FAQs",questions:s})}),a.jsx("section",{className:"space-y-4",children:a.jsx(n,{content:i,title:"Module 002_009 Topic 10: CLI Packaging Compilation",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Printable Note",downloadFileName:"002_009_topic10_cli_packaging_note.txt"})}),a.jsx(o,{note:"Never cd into the package folder and type 'java Main'! Always stay in the root folder, set -cp bin, and run 'com.coderaccotax.Main'. That is how real JVM servers execute code! — Sukanta Hui"})]})}export{g as default};
