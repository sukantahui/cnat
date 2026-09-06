import{j as e}from"./vendor-react-core-Doz9nIC6.js";import{J as a}from"./JavaFileLoader-BfBG3xz_.js";import{F as t}from"./FAQTemplate-BHhlgA96.js";import{P as s}from"./PlainTextPrint-C08xhKA4.js";import{T as r}from"./TeacherSukantaHui-DDN87fI5.js";import"./JavaCodeBlock-BwsLxS3r.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-DEsnU7fn.js";const n=`/**\r
 * Java Core Tutorial - Module 002_010: The Object Class: equals(), hashCode(), toString() & clone()\r
 * Topic 11: Using java.util.Objects.hash() and Objects.equals() Utility Helpers\r
 * Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
 */\r
\r
package com.coderaccotax.javatutorial.objectclass;\r
\r
import java.util.Objects;\r
\r
public class ObjectsUtilityHelpersDemo {\r
\r
    public static class ProfessionalDeveloper {\r
        private String name;\r
        private String primarySkill;\r
        private double rating;\r
\r
        public ProfessionalDeveloper(String name, String skill, double rating) {\r
            this.name = name;\r
            this.primarySkill = skill;\r
            this.rating = rating;\r
        }\r
\r
        // Clean, Null-Safe, Modern equals() using Objects.equals():\r
        @Override\r
        public boolean equals(Object obj) {\r
            if (this == obj) return true;\r
            if (obj == null || getClass() != obj.getClass()) return false;\r
            ProfessionalDeveloper other = (ProfessionalDeveloper) obj;\r
            return Double.compare(this.rating, other.rating) == 0 &&\r
                   Objects.equals(this.name, other.name) &&\r
                   Objects.equals(this.primarySkill, other.primarySkill);\r
        }\r
\r
        // Modern 1-line hashCode() using Objects.hash():\r
        @Override\r
        public int hashCode() {\r
            return Objects.hash(name, primarySkill, rating);\r
        }\r
    }\r
\r
    public static void main(String[] args) {\r
        System.out.println("==========================================================================");\r
        System.out.println(" TOPIC 11: java.util.Objects UTILITY HELPERS - BARRACKPORE");\r
        System.out.println("==========================================================================\\n");\r
\r
        ProfessionalDeveloper dev1 = new ProfessionalDeveloper("Swadeep Paul", "Java Core", 9.8);\r
        ProfessionalDeveloper dev2 = new ProfessionalDeveloper("Swadeep Paul", "Java Core", 9.8);\r
\r
        System.out.println("  dev1.equals(dev2)  : " + dev1.equals(dev2));\r
        System.out.println("  dev1.hashCode()    : " + dev1.hashCode());\r
        System.out.println("  dev2.hashCode()    : " + dev2.hashCode());\r
\r
        System.out.println("\\n==========================================================================");\r
    }\r
}`,l=`================================================================================\r
JAVA CORE TUTORIAL - QUICK REVISION GUIDE\r
Module 002_010: The Object Class & Core Contracts\r
Topic 11: java.util.Objects Helpers\r
Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
================================================================================\r
\r
1. java.util.Objects HELPERS:\r
   - 'Objects.equals(a, b)': (a == b) || (a != null && a.equals(b)).\r
   - 'Objects.hash(varargs...)': Generates Arrays.hashCode(new Object[]{...}).\r
   - 'Objects.requireNonNull(obj, "msg")': Fast fail-fast null validator.\r
\r
================================================================================\r
Classroom Practice: Barrackpore Academy | Mentor: Sukanta Hui\r
================================================================================`,i=[{question:"What are the benefits of using 'java.util.Objects.equals()' and 'java.util.Objects.hash()' (introduced in Java 7)?",shortAnswer:"1. 'Objects.equals(a, b)' prevents NullPointerExceptions by handling null checks gracefully. 2. 'Objects.hash(f1, f2, f3)' computes a robust, multi-field hash code in a single concise line of code.",explanation:"Eliminates tedious manual null checks and boilerplate prime multiplier calculations.",hint:"Provides null-safe equality checks and concise multi-field hash generation.",level:"Beginner",codeExample:`return Objects.equals(this.name, other.name);
return Objects.hash(id, name, score);`}];function j(){return e.jsxs("div",{className:"space-y-12 px-4 md:px-8 py-8 text-slate-200 bg-slate-900 min-h-screen",children:[e.jsx("style",{children:`
          @keyframes fadeIn {
            from { opacity: 0; transform: translateY(8px); }
            to { opacity: 1; transform: translateY(0); }
          }
          .animate-fade-in { animation: fadeIn 0.5s ease-out forwards; }
        `}),e.jsxs("header",{className:"space-y-4 border-b border-slate-800 pb-6 animate-fade-in",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"px-3 py-1 bg-sky-500/10 text-sky-400 border border-sky-500/20 text-xs font-semibold rounded-full uppercase tracking-wider",children:"Module 002_010 · Topic 11"}),e.jsx("span",{className:"px-3 py-1 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-xs font-semibold rounded-full",children:"Standard Utilities"})]}),e.jsxs("h1",{className:"text-xl sm:text-2xl md:text-3xl font-bold text-white tracking-tight",children:["Using ",e.jsx("code",{className:"text-emerald-400 font-mono",children:"java.util.Objects.hash()"})," & ",e.jsx("code",{className:"text-emerald-400 font-mono",children:"Objects.equals()"})]}),e.jsxs("p",{className:"text-base md:text-lg text-slate-400 leading-relaxed max-w-4xl",children:["Write clean, modern, null-safe equality and hashing code using Java 7's ",e.jsx("code",{className:"text-emerald-300 font-mono",children:"java.util.Objects"})," helper class."]})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsxs("h2",{className:"text-2xl font-bold text-emerald-400 flex items-center gap-2",children:[e.jsx("span",{children:"💻"})," Hands-On Java Demo Code"]}),e.jsx(a,{fileModule:n,title:"ObjectsUtilityHelpersDemo.java",highlightLines:[7,24,25,26,31]})]}),e.jsx("section",{className:"space-y-4",children:e.jsx(t,{title:"Objects Utilities FAQs",questions:i})}),e.jsx("section",{className:"space-y-4",children:e.jsx(s,{content:l,title:"Module 002_010 Topic 11: java.util.Objects Helpers",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Printable Note",downloadFileName:"002_010_topic11_objects_utils_note.txt"})}),e.jsx(r,{note:"Don't write manual null checks for every string! Just write Objects.equals(this.name, other.name) and Objects.hash(id, name). It's clean, safe, and professional! — Sukanta Hui"})]})}export{j as default};
