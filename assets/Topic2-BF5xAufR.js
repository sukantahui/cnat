import{j as e}from"./vendor-react-core-Doz9nIC6.js";import{J as a}from"./JavaFileLoader-BfBG3xz_.js";import{F as n}from"./FAQTemplate-BHhlgA96.js";import{P as o}from"./PlainTextPrint-C08xhKA4.js";import{T as t}from"./TeacherSukantaHui-DDN87fI5.js";import"./JavaCodeBlock-BwsLxS3r.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-DEsnU7fn.js";const r=`/**\r
 * Java Core Tutorial - Module 002_009: Packages, Access Modifiers, JAR Packaging & Module System\r
 * Topic 2: Reverse Domain Name Package Naming Convention\r
 * Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
 */\r
\r
package com.coderaccotax.javatutorial.packages;\r
\r
public class ReverseDomainNamingConventionDemo {\r
\r
    public static void main(String[] args) {\r
        System.out.println("==========================================================================");\r
        System.out.println(" TOPIC 2: REVERSE DOMAIN NAME PACKAGE CONVENTION - BARRACKPORE");\r
        System.out.println("==========================================================================\\n");\r
\r
        System.out.println(">>> Why Java Uses Reverse Domain Names (e.g. com.company.project.module):");\r
        System.out.println("  1. Global Uniqueness: Internet domain names (like coderaccotax.com) are globally registered.");\r
        System.out.println("  2. Standard Hierarchical Breakdown:");\r
        System.out.println("     - 'com'                  -> Top-Level Domain (TLD)");\r
        System.out.println("     - 'coderaccotax'         -> Organization Name");\r
        System.out.println("     - 'academy'              -> Product / Department");\r
        System.out.println("     - 'admissions'           -> Specific Functional Layer / Subsystem");\r
        System.out.println();\r
        System.out.println("  3. Naming Rules & Conventions:");\r
        System.out.println("     ✔ Always all LOWERCASE (e.g. 'com.coderaccotax', NOT 'com.CoderAccoTax')");\r
        System.out.println("     ✔ Cannot contain Java keywords (e.g. 'com.coderaccotax.int' -> ILLEGAL!)");\r
        System.out.println("     ✔ Replace hyphens with underscores if necessary.");\r
\r
        System.out.println("\\n==========================================================================");\r
    }\r
}`,s=`================================================================================\r
JAVA CORE TUTORIAL - QUICK REVISION GUIDE\r
Module 002_009: Packages, Access Modifiers & Module System\r
Topic 2: Reverse Domain Name Conventions\r
Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
================================================================================\r
\r
1. REVERSE DOMAIN CONVENTION:\r
   - 'com.organization.project.layer'\r
   - Strictly all lowercase.\r
   - Prevents clashes in Maven/Gradle distributed libraries.\r
\r
================================================================================\r
Classroom Practice: Barrackpore Academy | Mentor: Sukanta Hui\r
================================================================================`,i=[{question:"Why does standard Java convention recommend using Reverse Domain Names (e.g. 'com.company.project') for packages?",shortAnswer:"Because internet domain names are globally unique, reversing the domain name (e.g. 'com.google', 'org.apache', 'com.coderaccotax') guarantees that your package names will never clash with packages developed by other organizations worldwide.",explanation:"All package names should be written in lowercase to avoid conflicts with class names.",hint:"Guarantees global uniqueness across all software organizations worldwide.",level:"Beginner",codeExample:"package com.coderaccotax.javatutorial;"}];function y(){return e.jsxs("div",{className:"space-y-12 px-4 md:px-8 py-8 text-slate-200 bg-slate-900 min-h-screen",children:[e.jsx("style",{children:`
          @keyframes fadeIn {
            from { opacity: 0; transform: translateY(8px); }
            to { opacity: 1; transform: translateY(0); }
          }
          .animate-fade-in { animation: fadeIn 0.5s ease-out forwards; }
        `}),e.jsxs("header",{className:"space-y-4 border-b border-slate-800 pb-6 animate-fade-in",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"px-3 py-1 bg-sky-500/10 text-sky-400 border border-sky-500/20 text-xs font-semibold rounded-full uppercase tracking-wider",children:"Module 002_009 · Topic 2"}),e.jsx("span",{className:"px-3 py-1 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-xs font-semibold rounded-full",children:"Naming Conventions"})]}),e.jsx("h1",{className:"text-xl sm:text-2xl md:text-3xl font-bold text-white tracking-tight",children:"Reverse Domain Name Package Naming Convention"}),e.jsxs("p",{className:"text-base md:text-lg text-slate-400 leading-relaxed max-w-4xl",children:["Learn why international Java standards enforce reverse domain prefixes (",e.jsx("code",{className:"text-emerald-300 font-mono",children:"com.company.project"}),"): guaranteeing worldwide namespace uniqueness across open-source ecosystems."]})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsxs("h2",{className:"text-2xl font-bold text-emerald-400 flex items-center gap-2",children:[e.jsx("span",{children:"💻"})," Hands-On Java Demo Code"]}),e.jsx(a,{fileModule:r,title:"ReverseDomainNamingConventionDemo.java",highlightLines:[7,14,15,16,21]})]}),e.jsx("section",{className:"space-y-4",children:e.jsx(n,{title:"Reverse Domain Naming FAQs",questions:i})}),e.jsx("section",{className:"space-y-4",children:e.jsx(o,{content:s,title:"Module 002_009 Topic 2: Reverse Domain Conventions",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Printable Note",downloadFileName:"002_009_topic2_reverse_domain_note.txt"})}),e.jsx(t,{note:"If Coder & AccoTax owns 'coderaccotax.com', our package starts with 'com.coderaccotax'. This guarantees our libraries will never clash with Oracle, Google, or Apache! — Sukanta Hui"})]})}export{y as default};
