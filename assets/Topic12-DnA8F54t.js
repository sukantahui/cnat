import{j as e}from"./vendor-react-core-Doz9nIC6.js";import{J as t}from"./JavaFileLoader-BfBG3xz_.js";import{F as n}from"./FAQTemplate-BHhlgA96.js";import{P as a}from"./PlainTextPrint-C08xhKA4.js";import{T as r}from"./TeacherSukantaHui-DDN87fI5.js";import"./JavaCodeBlock-BwsLxS3r.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-DEsnU7fn.js";const i=`/**\r
 * Java Core Tutorial - Module 002_009: Packages, Access Modifiers, JAR Packaging & Module System\r
 * Topic 12: Understanding the MANIFEST.MF File & the 'Main-Class' Entry\r
 * Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
 */\r
\r
package com.coderaccotax.javatutorial.packages;\r
\r
public class ManifestFileStructureDemo {\r
\r
    public static void main(String[] args) {\r
        System.out.println("==========================================================================");\r
        System.out.println(" TOPIC 12: UNDERSTANDING MANIFEST.MF & Main-Class - BARRACKPORE");\r
        System.out.println("==========================================================================\\n");\r
\r
        System.out.println(">>> What is META-INF/MANIFEST.MF?");\r
        System.out.println("  - A special header metadata file located at the root of every JAR file.");\r
        System.out.println("  - Key-value header pairs configuring JVM runtime parameters.");\r
        System.out.println();\r
        System.out.println(">>> Sample MANIFEST.MF Anatomy:");\r
        System.out.println("  Manifest-Version: 1.0");\r
        System.out.println("  Created-By: 21.0.2 (Oracle Corporation)");\r
        System.out.println("  Main-Class: com.coderaccotax.academy.admissions.ApplicationLauncher");\r
        System.out.println("  Class-Path: lib/mysql-connector-j-8.3.0.jar lib/lombok.jar");\r
        System.out.println();\r
        System.out.println(">>> CRITICAL SYNTAX RULE:");\r
        System.out.println("  - Every MANIFEST.MF file MUST end with an empty NEWLINE (CRLF/LF)!");\r
        System.out.println("  - If the trailing newline is missing, javac ignores the last line (e.g. Main-Class)!\\n");\r
\r
        System.out.println("==========================================================================");\r
    }\r
}`,s=`================================================================================\r
JAVA CORE TUTORIAL - QUICK REVISION GUIDE\r
Module 002_009: Packages, Access Modifiers & Module System\r
Topic 12: MANIFEST.MF Structure & Main-Class\r
Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
================================================================================\r
\r
1. MANIFEST.MF RULES:\r
   - Located at: 'META-INF/MANIFEST.MF' inside the JAR.\r
   - 'Main-Class: com.company.Main' → Entry point.\r
   - 'Class-Path: lib/a.jar lib/b.jar' → Dependency bundle.\r
   - Trailing newline is MANDATORY.\r
\r
================================================================================\r
Classroom Practice: Barrackpore Academy | Mentor: Sukanta Hui\r
================================================================================`,o=[{question:"What is the role of the 'Main-Class' entry in the 'META-INF/MANIFEST.MF' file?",shortAnswer:"The 'Main-Class' entry designates the entry point (the fully qualified class containing 'public static void main(String[] args)') to be executed when the JAR is launched via 'java -jar app.jar'.",explanation:"Also requires an empty trailing newline at the end of the manifest file.",hint:"Specifies the entry-point class for 'java -jar' execution.",level:"Beginner",codeExample:`Main-Class: com.coderaccotax.Main
`}];function f(){return e.jsxs("div",{className:"space-y-12 px-4 md:px-8 py-8 text-slate-200 bg-slate-900 min-h-screen",children:[e.jsx("style",{children:`
          @keyframes fadeIn {
            from { opacity: 0; transform: translateY(8px); }
            to { opacity: 1; transform: translateY(0); }
          }
          .animate-fade-in { animation: fadeIn 0.5s ease-out forwards; }
        `}),e.jsxs("header",{className:"space-y-4 border-b border-slate-800 pb-6 animate-fade-in",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"px-3 py-1 bg-sky-500/10 text-sky-400 border border-sky-500/20 text-xs font-semibold rounded-full uppercase tracking-wider",children:"Module 002_009 · Topic 12"}),e.jsx("span",{className:"px-3 py-1 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-xs font-semibold rounded-full",children:"Manifest Configuration"})]}),e.jsxs("h1",{className:"text-xl sm:text-2xl md:text-3xl font-bold text-white tracking-tight",children:["Understanding the ",e.jsx("code",{className:"text-emerald-400 font-mono",children:"MANIFEST.MF"})," File & ",e.jsx("code",{className:"text-emerald-400 font-mono",children:"Main-Class"})," Entry"]}),e.jsx("p",{className:"text-base md:text-lg text-slate-400 leading-relaxed max-w-4xl",children:"Learn how JVM archives configure entry points: header attributes, classpath referencing, and avoiding the infamous missing-newline bug."})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsxs("h2",{className:"text-2xl font-bold text-emerald-400 flex items-center gap-2",children:[e.jsx("span",{children:"💻"})," Hands-On Java Demo Code"]}),e.jsx(t,{fileModule:i,title:"ManifestFileStructureDemo.java",highlightLines:[7,16,17,18,22]})]}),e.jsx("section",{className:"space-y-4",children:e.jsx(n,{title:"MANIFEST.MF FAQs",questions:o})}),e.jsx("section",{className:"space-y-4",children:e.jsx(a,{content:s,title:"Module 002_009 Topic 12: MANIFEST.MF Structure",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Printable Note",downloadFileName:"002_009_topic12_manifest_note.txt"})}),e.jsx(r,{note:"If your JAR fails with 'no main manifest attribute in app.jar', 99% of the time you forgot to add an empty newline at the end of MANIFEST.MF! Always hit enter at the end of the file. — Sukanta Hui"})]})}export{f as default};
