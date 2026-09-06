import{j as e}from"./vendor-react-core-Doz9nIC6.js";import{J as n}from"./JavaFileLoader-BfBG3xz_.js";import{F as a}from"./FAQTemplate-BHhlgA96.js";import{P as t}from"./PlainTextPrint-C08xhKA4.js";import{T as s}from"./TeacherSukantaHui-DDN87fI5.js";import"./JavaCodeBlock-BwsLxS3r.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-DEsnU7fn.js";const r=`/**\r
 * Java Core Tutorial - Module 002_009: Packages, Access Modifiers, JAR Packaging & Module System\r
 * Topic 15: Strong Encapsulation Benefits Provided by the Java 9 Module System (Capstone)\r
 * Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
 */\r
\r
package com.coderaccotax.javatutorial.packages;\r
\r
public class StrongEncapsulationCapstoneDemo {\r
\r
    public static void main(String[] args) {\r
        System.out.println("==========================================================================");\r
        System.out.println(" TOPIC 15: STRONG ENCAPSULATION CAPSTONE - BARRACKPORE");\r
        System.out.println("==========================================================================\\n");\r
\r
        System.out.println(">>> The 5th Level of Encapsulation: Module Boundaries!");\r
        System.out.println("  1. Class Level       : 'private' fields hidden inside class.");\r
        System.out.println("  2. Package Level     : 'default' methods hidden inside package.");\r
        System.out.println("  3. Subclass Level    : 'protected' methods accessible only to children.");\r
        System.out.println("  4. Universal Level   : 'public' types accessible everywhere.");\r
        System.out.println("  5. MODULE LEVEL (NEW): 'public' types in UNEXPORTED packages are completely HIDDEN");\r
        System.out.println("                         from the outside world!");\r
        System.out.println();\r
        System.out.println(">>> Why Strong Encapsulation Transformed Java Security:");\r
        System.out.println("  - Prevents external code from accessing internal helper classes (e.g. sun.misc.Unsafe).");\r
        System.out.println("  - Library authors can safely refactor internal packages without breaking public clients.");\r
        System.out.println("  - Eliminates accidental dependency on unstable internal vendor APIs.");\r
\r
        System.out.println("\\n==========================================================================");\r
        System.out.println(" MODULE 002_009 PACKAGES, ACCESS & MODULES 100% COMPLETE!");\r
        System.out.println("==========================================================================");\r
    }\r
}`,o=`================================================================================\r
JAVA CORE TUTORIAL - QUICK REVISION GUIDE\r
Module 002_009: Packages, Access Modifiers & Module System\r
Topic 15: Strong Encapsulation Capstone\r
Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
================================================================================\r
\r
1. MODULE 002_009 SUMMARY:\r
   - Packages organize code and prevent namespace collisions.\r
   - Reverse domain name (com.coderaccotax.app) ensures global uniqueness.\r
   - 4 Access Modifiers: private, default, protected, public.\r
   - Packaged CLI: 'javac -d bin' and 'java -cp bin com.pkg.Main'.\r
   - JAR packaging bundles bytecode + MANIFEST.MF metadata.\r
   - Java 9 JPMS enforces module boundaries: 'requires', 'exports', 'opens'.\r
\r
================================================================================\r
Classroom Practice: Barrackpore Academy | Mentor: Sukanta Hui\r
================================================================================`,i=[{question:"How does Strong Encapsulation in the Java 9 Module System redefine the meaning of 'public' in Java?",shortAnswer:"In Java 9+, a 'public' class is ONLY accessible to other modules if its containing package is explicitly declared in an 'exports' directive in 'module-info.java'. If the package is not exported, its public classes remain strictly internal and inaccessible to outside modules.",explanation:"This introduces a true 5th layer of encapsulation beyond private, default, protected, and public.",hint:"Public classes in unexported packages are completely hidden from external modules.",level:"Advanced",codeExample:"// Package not exported → Public classes inside are inaccessible outside"}];function g(){return e.jsxs("div",{className:"space-y-12 px-4 md:px-8 py-8 text-slate-200 bg-slate-900 min-h-screen",children:[e.jsx("style",{children:`
          @keyframes fadeIn {
            from { opacity: 0; transform: translateY(8px); }
            to { opacity: 1; transform: translateY(0); }
          }
          .animate-fade-in { animation: fadeIn 0.5s ease-out forwards; }
        `}),e.jsxs("header",{className:"space-y-4 border-b border-slate-800 pb-6 animate-fade-in",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"px-3 py-1 bg-sky-500/10 text-sky-400 border border-sky-500/20 text-xs font-semibold rounded-full uppercase tracking-wider",children:"Module 002_009 · Topic 15"}),e.jsx("span",{className:"px-3 py-1 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-xs font-semibold rounded-full",children:"Security Capstone"})]}),e.jsx("h1",{className:"text-xl sm:text-2xl md:text-3xl font-bold text-white tracking-tight",children:"Strong Encapsulation Benefits Provided by the Java 9 Module System"}),e.jsx("p",{className:"text-base md:text-lg text-slate-400 leading-relaxed max-w-4xl",children:"Synthesize all package, access control, and modular boundaries: understanding the 5th layer of Java encapsulation and securing enterprise software architectures."})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsxs("h2",{className:"text-2xl font-bold text-emerald-400 flex items-center gap-2",children:[e.jsx("span",{children:"💻"})," Hands-On Java Demo Code"]}),e.jsx(n,{fileModule:r,title:"StrongEncapsulationCapstoneDemo.java",highlightLines:[7,14,18,23]})]}),e.jsx("section",{className:"space-y-4",children:e.jsx(a,{title:"Strong Encapsulation FAQs",questions:i})}),e.jsx("section",{className:"space-y-4",children:e.jsx(t,{content:o,title:"Module 002_009 Topic 15: Strong Encapsulation Capstone",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Printable Note",downloadFileName:"002_009_topic15_encapsulation_capstone_note.txt"})}),e.jsx(s,{note:"Congratulations on mastering Module 002_009! You now know everything about packages, reverse domain names, access control matrices, JAR files, and the modern Java 9 Module System! — Sukanta Hui"})]})}export{g as default};
