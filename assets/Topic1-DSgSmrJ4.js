import{j as e}from"./vendor-react-core-Doz9nIC6.js";import{J as n}from"./JavaFileLoader-BfBG3xz_.js";import{F as a}from"./FAQTemplate-BHhlgA96.js";import{P as t}from"./PlainTextPrint-C08xhKA4.js";import{T as r}from"./TeacherSukantaHui-DerPxfxp.js";import"./JavaCodeBlock-BwsLxS3r.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-CH1iX9C8.js";const s=`/**\r
 * Java Core Tutorial - Module 003_008: Java Enums & Specialized Methods\r
 * Topic 1: The 'enum' Keyword: Creating Type-Safe Enumeration Types & Constants\r
 * Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
 */\r
\r
package com.coderaccotax.javatutorial.enums;\r
\r
// Declaring a top-level or nested type-safe enum:\r
public enum AcademicBranch {\r
    BARRACKPORE,\r
    NAIHATI,\r
    SHYAMNAGAR,\r
    ICHAPUR\r
}\r
\r
class BranchUsageDemo {\r
\r
    public static void printBranchInfo(AcademicBranch branch) {\r
        System.out.println("  Selected Training Hub: " + branch);\r
    }\r
\r
    public static void main(String[] args) {\r
        System.out.println("==========================================================================");\r
        System.out.println(" TOPIC 1: THE 'enum' KEYWORD FOUNDATIONS - BARRACKPORE");\r
        System.out.println("==========================================================================\\n");\r
\r
        AcademicBranch primaryCenter = AcademicBranch.BARRACKPORE;\r
        AcademicBranch extensionCenter = AcademicBranch.NAIHATI;\r
\r
        System.out.println(">>> 1. Utilizing Type-Safe Enum Constants:");\r
        printBranchInfo(primaryCenter);\r
        printBranchInfo(extensionCenter);\r
\r
        System.out.println("\\n>>> 2. Enum Reference Identity (== vs equals):");\r
        // Because enums are strictly singleton constants, '==' is always 100% safe and preferred!\r
        boolean isSame = (primaryCenter == AcademicBranch.BARRACKPORE);\r
        System.out.println("  primaryCenter == AcademicBranch.BARRACKPORE? " + isSame);\r
\r
        System.out.println("\\n==========================================================================");\r
    }\r
}`,o=`================================================================================\r
JAVA CORE TUTORIAL - QUICK REVISION GUIDE\r
Module 003_008: Java Enums & Specialized Methods\r
Topic 1: The 'enum' Keyword\r
Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
================================================================================\r
\r
1. ENUM SYNTAX:\r
   - 'public enum Day { MON, TUE, WED }'\r
   - Constants are uppercase by convention.\r
   - Singleton guarantee in JVM.\r
   - Always compare enums using '==' instead of '.equals()'.\r
\r
================================================================================\r
Classroom Practice: Barrackpore Academy | Mentor: Sukanta Hui\r
================================================================================`,i=[{question:"Why is it safe and recommended to compare Enum constants using the reference equality operator '==' in Java?",shortAnswer:"Because the JVM guarantees that each enum constant is an absolute singleton instance created once during class loading. There is only ever one instance of each enum constant in memory, making '==' completely safe, null-safe, and faster than '.equals()'.",explanation:"'==' prevents NullPointerException if the reference is null.",hint:"Enum constants are singleton instances in the JVM, so '==' is safe and null-friendly.",level:"Beginner",codeExample:"if (status == Status.ACTIVE) { ... } // Safe against null!"}];function y(){return e.jsxs("div",{className:"space-y-12 px-4 md:px-8 py-8 text-slate-200 bg-slate-900 min-h-screen",children:[e.jsxs("header",{className:"space-y-4 border-b border-slate-800 pb-6",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"px-3 py-1 bg-sky-500/10 text-sky-400 border border-sky-500/20 text-xs font-semibold rounded-full uppercase tracking-wider",children:"Module 003_008 · Topic 1"}),e.jsx("span",{className:"px-3 py-1 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-xs font-semibold rounded-full",children:"Type-Safe Enums"})]}),e.jsxs("h1",{className:"text-xl sm:text-2xl md:text-3xl font-bold text-white tracking-tight",children:["The ",e.jsx("code",{className:"text-emerald-400 font-mono",children:"enum"})," Keyword: Creating Type-Safe Enumeration Types"]}),e.jsxs("p",{className:"text-base md:text-lg text-slate-400 leading-relaxed max-w-4xl",children:["Master the foundation of Java enumerations: declaring domain constants, JVM singleton guarantees, and comparing enum constants with null-safe ",e.jsx("code",{className:"text-emerald-300 font-mono",children:"=="})," operators."]})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsxs("h2",{className:"text-2xl font-bold text-emerald-400 flex items-center gap-2",children:[e.jsx("span",{children:"💻"})," Hands-On Java Demo Code"]}),e.jsx(n,{fileModule:s,title:"AcademicBranch.java",highlightLines:[7,8,9,10,11,12,13,28,32,33]})]}),e.jsx("section",{className:"space-y-4",children:e.jsx(a,{title:"Enum Keyword FAQs",questions:i})}),e.jsx("section",{className:"space-y-4",children:e.jsx(t,{content:o,title:"Module 003_008 Topic 1: The enum Keyword",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Printable Note",downloadFileName:"003_008_topic1_enum_keyword_note.txt"})}),e.jsx(r,{note:"Always use '==' to compare enums! If myVar is null, 'myVar.equals(Status.ACTIVE)' will throw a NullPointerException, but 'myVar == Status.ACTIVE' returns false cleanly without crashing! — Sukanta Hui"})]})}export{y as default};
