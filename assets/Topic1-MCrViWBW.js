import{j as e}from"./vendor-react-core-Doz9nIC6.js";import{J as a}from"./JavaFileLoader-BfBG3xz_.js";import{F as t}from"./FAQTemplate-BHhlgA96.js";import{P as n}from"./PlainTextPrint-C08xhKA4.js";import{T as r}from"./TeacherSukantaHui-BaJcBHAy.js";import"./JavaCodeBlock-BwsLxS3r.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-8ao-0upJ.js";const s=`/**\r
 * Java Core Tutorial - Module 002_009: Packages, Access Modifiers, JAR Packaging & Module System\r
 * Topic 1: Creating Packages Using the 'package' Statement\r
 * Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
 */\r
\r
// RULE 1: The 'package' statement MUST be the FIRST non-comment line in the source file!\r
package com.coderaccotax.academy.admissions;\r
\r
public class PackageDeclarationRulesDemo {\r
\r
    public static class EnrollmentApplicant {\r
        private String applicantName;\r
        private int applicationNumber;\r
\r
        public EnrollmentApplicant(String name, int number) {\r
            this.applicantName = name;\r
            this.applicationNumber = number;\r
        }\r
\r
        public void printBadge() {\r
            System.out.printf("  [ENROLLED] #%d: %s | Package: com.coderaccotax.academy.admissions\\n",\r
                    applicationNumber, applicantName);\r
        }\r
    }\r
\r
    public static void main(String[] args) {\r
        System.out.println("==========================================================================");\r
        System.out.println(" TOPIC 1: THE 'package' STATEMENT RULES - BARRACKPORE");\r
        System.out.println("==========================================================================\\n");\r
\r
        EnrollmentApplicant applicant = new EnrollmentApplicant("Swadeep Paul", 202601);\r
        applicant.printBadge();\r
\r
        System.out.println("\\n>>> Rules of 'package' statement:");\r
        System.out.println("  1. Must appear before any 'import' or 'class' declaration.");\r
        System.out.println("  2. Only ONE 'package' statement is permitted per file.");\r
        System.out.println("  3. Directory structure on disk MUST match: com/coderaccotax/academy/admissions/");\r
\r
        System.out.println("\\n==========================================================================");\r
    }\r
}`,i=`================================================================================\r
JAVA CORE TUTORIAL - QUICK REVISION GUIDE\r
Module 002_009: Packages, Access Modifiers & Module System\r
Topic 1: The 'package' Statement\r
Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
================================================================================\r
\r
1. 'package' STATEMENT RULES:\r
   - First non-comment line in file.\r
   - Max 1 package declaration per file.\r
   - Fully qualified class name becomes: 'packageName.ClassName'.\r
\r
================================================================================\r
Classroom Practice: Barrackpore Academy | Mentor: Sukanta Hui\r
================================================================================`,o=[{question:"Where must the 'package' statement be placed in a Java source file?",shortAnswer:"The 'package' statement MUST be the very first non-comment statement in the Java source file, preceding all 'import' statements and class/interface declarations.",explanation:"Placing any code or import before the package statement results in a compilation error.",hint:"Must be the first non-comment statement in the file.",level:"Beginner",codeExample:`package com.company.app;
import java.util.*;`}];function h(){return e.jsxs("div",{className:"space-y-12 px-4 md:px-8 py-8 text-slate-200 bg-slate-900 min-h-screen",children:[e.jsx("style",{children:`
          @keyframes fadeIn {
            from { opacity: 0; transform: translateY(8px); }
            to { opacity: 1; transform: translateY(0); }
          }
          .animate-fade-in { animation: fadeIn 0.5s ease-out forwards; }
        `}),e.jsxs("header",{className:"space-y-4 border-b border-slate-800 pb-6 animate-fade-in",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"px-3 py-1 bg-sky-500/10 text-sky-400 border border-sky-500/20 text-xs font-semibold rounded-full uppercase tracking-wider",children:"Module 002_009 · Topic 1"}),e.jsx("span",{className:"px-3 py-1 bg-amber-500/10 text-amber-400 border border-amber-500/20 text-xs font-semibold rounded-full",children:"Syntax Rules"})]}),e.jsxs("h1",{className:"text-xl sm:text-2xl md:text-3xl font-bold text-white tracking-tight",children:["Creating Packages Using the ",e.jsx("code",{className:"text-amber-400 font-mono",children:"package"})," Statement"]}),e.jsxs("p",{className:"text-base md:text-lg text-slate-400 leading-relaxed max-w-4xl",children:["Master the exact positioning and syntax of the ",e.jsx("code",{className:"text-amber-300 font-mono",children:"package"})," keyword, and learn how it translates into physical directory hierarchies."]})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsxs("h2",{className:"text-2xl font-bold text-emerald-400 flex items-center gap-2",children:[e.jsx("span",{children:"💻"})," Hands-On Java Demo Code"]}),e.jsx(a,{fileModule:s,title:"PackageDeclarationRulesDemo.java",highlightLines:[8,10,27]})]}),e.jsx("section",{className:"space-y-4",children:e.jsx(t,{title:"Package Statement FAQs",questions:o})}),e.jsx("section",{className:"space-y-4",children:e.jsx(n,{content:i,title:"Module 002_009 Topic 1: package Statement Rules",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Printable Note",downloadFileName:"002_009_topic1_package_statement_note.txt"})}),e.jsx(r,{note:"Always write 'package ...' at the very top of your file before anything else! If you put an import above it, the Java compiler will refuse to compile your code. — Sukanta Hui"})]})}export{h as default};
