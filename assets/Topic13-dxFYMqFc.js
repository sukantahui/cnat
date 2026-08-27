import{j as e}from"./vendor-react-core-Doz9nIC6.js";import{J as t}from"./JavaFileLoader-BfBG3xz_.js";import{F as n}from"./FAQTemplate-CkSqDH4B.js";import{P as a}from"./PlainTextPrint-C08xhKA4.js";import{T as i}from"./TeacherSukantaHui-CyIG3xbg.js";import"./JavaCodeBlock-BwsLxS3r.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-CIaKtAt4.js";const r=`/**\r
 * Java Core Tutorial - Module 002_006: Polymorphism, Method Overriding & Dynamic Method Dispatch\r
 * Topic 13: Modern Pattern Matching for instanceof (Java 16+ JEP 394)\r
 * Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
 */\r
\r
package com.coderaccotax.javatutorial.polymorphism;\r
\r
public class PatternMatchingInstanceOfDemo {\r
\r
    public interface CertificationCandidate {}\r
\r
    public static class JavaSpecialist implements CertificationCandidate {\r
        public String getSpecialty() { return "Spring Boot Cloud Microservices"; }\r
    }\r
\r
    public static class DbAdministrator implements CertificationCandidate {\r
        public String getDbEngine() { return "PostgreSQL & MySQL Clusters"; }\r
    }\r
\r
    public static void evaluateCandidate(Object candidate) {\r
        // ====================================================================\r
        // MODERN PATTERN MATCHING FOR INSTANCEOF (Java 16+):\r
        // Automatically tests type AND binds a scoped local variable in 1 step!\r
        // No explicit '(JavaSpecialist) candidate' cast required!\r
        // ====================================================================\r
        if (candidate instanceof JavaSpecialist js) {\r
            System.out.println("  [JAVA PRO MATCHED] Specialty: " + js.getSpecialty());\r
        } else if (candidate instanceof DbAdministrator dba) {\r
            System.out.println("  [DBA MATCHED] Engine: " + dba.getDbEngine());\r
        } else if (candidate instanceof String s && !s.isBlank()) {\r
            System.out.println("  [STRING TEXT MATCHED] Value: " + s.toUpperCase());\r
        } else {\r
            System.out.println("  [UNKNOWN] Candidate entity not recognized.");\r
        }\r
    }\r
\r
    public static void main(String[] args) {\r
        System.out.println("==========================================================================");\r
        System.out.println(" TOPIC 13: MODERN PATTERN MATCHING FOR instanceof (JAVA 16+) - BARRACKPORE");\r
        System.out.println("==========================================================================\\n");\r
\r
        System.out.println(">>> 1. Evaluating JavaSpecialist (Swadeep):");\r
        evaluateCandidate(new JavaSpecialist());\r
\r
        System.out.println("\\n>>> 2. Evaluating DbAdministrator (Tuhina):");\r
        evaluateCandidate(new DbAdministrator());\r
\r
        System.out.println("\\n>>> 3. Evaluating String with guard expression (&& !s.isBlank()):");\r
        evaluateCandidate("barrackpore hub developer");\r
\r
        System.out.println("\\n==========================================================================");\r
    }\r
}`,s=`================================================================================\r
JAVA CORE TUTORIAL - QUICK REVISION GUIDE\r
Module 002_006: Polymorphism, Overriding & Dynamic Method Dispatch\r
Topic 13: Modern Pattern Matching for instanceof (Java 16+)\r
Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
================================================================================\r
\r
1. PATTERN MATCHING SYNTAX:\r
   - 'if (obj instanceof TargetType varName) { ... }'\r
   - The variable 'varName' is scoped strictly to the true branch of the 'if'.\r
   - Can combine with boolean guards: 'if (obj instanceof String s && s.length() > 5)'.\r
\r
================================================================================\r
Classroom Practice: Barrackpore Academy | Mentor: Sukanta Hui\r
================================================================================`,o=[{question:"What is Pattern Matching for 'instanceof' in Java 16+ (JEP 394)?",shortAnswer:"A modern language feature that combines type checking and cast assignment into a single statement: 'if (obj instanceof String s) { System.out.println(s.length()); }'.",explanation:"Eliminates repetitive, boilerplate downcasting lines across your codebase.",hint:"Combines instanceof check and variable binding in one step: 'instanceof Type var'.",level:"Intermediate",codeExample:"if (obj instanceof String s) { return s.length(); }"}];function h(){return e.jsxs("div",{className:"space-y-12 px-4 md:px-8 py-8 text-slate-200 bg-slate-900 min-h-screen",children:[e.jsx("style",{children:`
          @keyframes fadeIn {
            from { opacity: 0; transform: translateY(8px); }
            to { opacity: 1; transform: translateY(0); }
          }
          .animate-fade-in { animation: fadeIn 0.5s ease-out forwards; }
        `}),e.jsxs("header",{className:"space-y-4 border-b border-slate-800 pb-6 animate-fade-in",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"px-3 py-1 bg-sky-500/10 text-sky-400 border border-sky-500/20 text-xs font-semibold rounded-full uppercase tracking-wider",children:"Module 002_006 · Topic 13"}),e.jsx("span",{className:"px-3 py-1 bg-purple-500/10 text-purple-400 border border-purple-500/20 text-xs font-semibold rounded-full",children:"Modern Java 16+ Feature"})]}),e.jsxs("h1",{className:"text-3xl md:text-4xl font-extrabold text-white tracking-tight",children:["Modern Pattern Matching for ",e.jsx("code",{className:"text-purple-400 font-mono",children:"instanceof"})," (Java 16+)"]}),e.jsx("p",{className:"text-base md:text-lg text-slate-400 leading-relaxed max-w-4xl",children:"Write cleaner, boilerplate-free Java with JEP 394 Pattern Matching. Combine type testing and variable binding in a single expressive statement."})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsxs("h2",{className:"text-2xl font-bold text-emerald-400 flex items-center gap-2",children:[e.jsx("span",{children:"💻"})," Hands-On Java Demo Code"]}),e.jsx(t,{fileModule:r,title:"PatternMatchingInstanceOfDemo.java",highlightLines:[22,24,26,36,39]})]}),e.jsx("section",{className:"space-y-4",children:e.jsx(n,{title:"Pattern Matching instanceof FAQs",questions:o})}),e.jsx("section",{className:"space-y-4",children:e.jsx(a,{content:s,title:"Module 002_006 Topic 13: Pattern Matching instanceof",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Printable Note",downloadFileName:"002_006_topic13_pattern_matching_note.txt"})}),e.jsx(i,{note:"Pattern matching is one of the best modern additions to Java: no more writing 'if (obj instanceof Dog) { Dog d = (Dog) obj; }'. Just write 'if (obj instanceof Dog d)'! — Sukanta Hui"})]})}export{h as default};
