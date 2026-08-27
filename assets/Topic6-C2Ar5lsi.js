import{j as e}from"./vendor-react-core-Doz9nIC6.js";import{J as a}from"./JavaFileLoader-BfBG3xz_.js";import{F as t}from"./FAQTemplate-CkSqDH4B.js";import{P as n}from"./PlainTextPrint-C08xhKA4.js";import{T as s}from"./TeacherSukantaHui-CC0AKmkm.js";import"./JavaCodeBlock-BwsLxS3r.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-BtJHuk7w.js";const r=`/**\r
 * Java Core Tutorial - Module 002_009: Packages, Access Modifiers, JAR Packaging & Module System\r
 * Topic 6: The Default Package and Why Production Code Must Never Use It\r
 * Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
 */\r
\r
package com.coderaccotax.javatutorial.packages;\r
\r
public class DefaultPackageRisksDemo {\r
\r
    public static void main(String[] args) {\r
        System.out.println("==========================================================================");\r
        System.out.println(" TOPIC 6: THE DEFAULT PACKAGE & PRODUCTION HAZARDS - BARRACKPORE");\r
        System.out.println("==========================================================================\\n");\r
\r
        System.out.println(">>> What is the 'Default Package'?");\r
        System.out.println("  - When a .java file omits the 'package' statement entirely, it belongs to the unnamed 'default package'.");\r
        System.out.println();\r
        System.out.println(">>> 4 Critical Reasons Why Production Code Must NEVER Use the Default Package:");\r
        System.out.println("  1. UNIMPORTABLE: Classes inside named packages CANNOT import classes from the default package!");\r
        System.out.println("  2. COLLISION RISK: Instant name clashes in enterprise JAR dependencies.");\r
        System.out.println("  3. JPMS INCOMPATIBILITY: Java 9+ Modules strictly forbid exporting the default package.");\r
        System.out.println("  4. FRAMEWORK FAILURES: Spring Boot, Hibernate, and JPA scanner tools require named packages.");\r
\r
        System.out.println("\\n==========================================================================");\r
    }\r
}`,o=`================================================================================\r
JAVA CORE TUTORIAL - QUICK REVISION GUIDE\r
Module 002_009: Packages, Access Modifiers & Module System\r
Topic 6: The Default Package Risks\r
Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
================================================================================\r
\r
1. DEFAULT PACKAGE HAZARDS:\r
   - Created when 'package ...' statement is omitted.\r
   - Classes in named packages CANNOT import or use default package classes.\r
   - Incompatible with Java 9 Modules, Spring Boot, and Maven builds.\r
\r
================================================================================\r
Classroom Practice: Barrackpore Academy | Mentor: Sukanta Hui\r
================================================================================`,i=[{question:"Why can't classes in a named package import a class from the default (unnamed) package?",shortAnswer:"Java syntax does not support importing from an unnamed package ('import ClassName' is invalid syntax). Therefore, classes placed in the default package are invisible and inaccessible to all packaged code.",explanation:"Production Java applications must always declare explicit package names.",hint:"Cannot import classes from the default package into packaged code.",level:"Intermediate",codeExample:"// Always declare: package com.company.app;"}];function f(){return e.jsxs("div",{className:"space-y-12 px-4 md:px-8 py-8 text-slate-200 bg-slate-900 min-h-screen",children:[e.jsx("style",{children:`
          @keyframes fadeIn {
            from { opacity: 0; transform: translateY(8px); }
            to { opacity: 1; transform: translateY(0); }
          }
          .animate-fade-in { animation: fadeIn 0.5s ease-out forwards; }
        `}),e.jsxs("header",{className:"space-y-4 border-b border-slate-800 pb-6 animate-fade-in",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"px-3 py-1 bg-rose-500/10 text-rose-400 border border-rose-500/20 text-xs font-semibold rounded-full uppercase tracking-wider",children:"Module 002_009 · Topic 6"}),e.jsx("span",{className:"px-3 py-1 bg-amber-500/10 text-amber-400 border border-amber-500/20 text-xs font-semibold rounded-full",children:"Production Best Practices"})]}),e.jsx("h1",{className:"text-3xl md:text-4xl font-extrabold text-white tracking-tight",children:"The Default Package & Why Production Code Must NEVER Use It"}),e.jsx("p",{className:"text-base md:text-lg text-slate-400 leading-relaxed max-w-4xl",children:"Learn why omitting the package statement creates unimportable legacy code, breaks Spring Boot component scanning, and violates Java 9 Module System standards."})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsxs("h2",{className:"text-2xl font-bold text-emerald-400 flex items-center gap-2",children:[e.jsx("span",{children:"💻"})," Hands-On Java Demo Code"]}),e.jsx(a,{fileModule:r,title:"DefaultPackageRisksDemo.java",highlightLines:[7,14,18,19,20]})]}),e.jsx("section",{className:"space-y-4",children:e.jsx(t,{title:"Default Package FAQs",questions:i})}),e.jsx("section",{className:"space-y-4",children:e.jsx(n,{content:o,title:"Module 002_009 Topic 6: Default Package Risks",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Printable Note",downloadFileName:"002_009_topic6_default_package_note.txt"})}),e.jsx(s,{note:"Never omit the package statement in real projects! If a class is in the default package, no other package can ever import it, making it completely useless for enterprise apps. — Sukanta Hui"})]})}export{f as default};
