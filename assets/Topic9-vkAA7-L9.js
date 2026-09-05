import{j as e}from"./vendor-react-core-Doz9nIC6.js";import{J as n}from"./JavaFileLoader-BfBG3xz_.js";import{F as t}from"./FAQTemplate-BHhlgA96.js";import{P as r}from"./PlainTextPrint-C08xhKA4.js";import{T as s}from"./TeacherSukantaHui-DerPxfxp.js";import"./JavaCodeBlock-BwsLxS3r.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-CH1iX9C8.js";const o=`/**\r
 * Java Core Tutorial - Module 004_003: Throw, Throws & Custom Exceptions\r
 * Topic 9: Implementing the 4 Standard Custom Exception Constructors (Best Practice)\r
 * Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
 */\r
\r
package com.coderaccotax.javatutorial.exceptions;\r
\r
public class StandardExceptionConstructorsSuiteDemo {\r
\r
    // GOLD STANDARD: Providing all 4 canonical constructors:\r
    public static class CourseEnrollmentException extends Exception {\r
\r
        // 1. Default no-arg constructor:\r
        public CourseEnrollmentException() {\r
            super();\r
        }\r
\r
        // 2. Message-only constructor:\r
        public CourseEnrollmentException(String message) {\r
            super(message);\r
        }\r
\r
        // 3. Cause-only constructor (Exception Chaining):\r
        public CourseEnrollmentException(Throwable cause) {\r
            super(cause);\r
        }\r
\r
        // 4. Message + Cause constructor (Most powerful):\r
        public CourseEnrollmentException(String message, Throwable cause) {\r
            super(message, cause);\r
        }\r
    }\r
\r
    public static void main(String[] args) {\r
        System.out.println("==========================================================================");\r
        System.out.println(" TOPIC 9: 4 CANONICAL EXCEPTION CONSTRUCTORS - BARRACKPORE");\r
        System.out.println("==========================================================================\\n");\r
\r
        System.out.println(">>> 1. Creating Exception with Message only:");\r
        CourseEnrollmentException ex1 = new CourseEnrollmentException("Barrackpore Batch full!");\r
        System.out.println("  ex1: " + ex1.getMessage());\r
\r
        System.out.println("\\n>>> 2. Creating Chained Exception with Message + Underlying Cause:");\r
        IllegalArgumentException underlyingRoot = new IllegalArgumentException("Invalid Student ID format");\r
        CourseEnrollmentException ex2 = new CourseEnrollmentException("Failed to register trainee", underlyingRoot);\r
        System.out.println("  ex2 Message: " + ex2.getMessage());\r
        System.out.println("  ex2 Cause  : " + ex2.getCause());\r
\r
        System.out.println("\\n==========================================================================");\r
    }\r
}`,a=`================================================================================\r
JAVA CORE TUTORIAL - QUICK REVISION GUIDE\r
Module 004_003: Throw, Throws & Custom Exceptions\r
Topic 9: 4 Canonical Exception Constructors\r
Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
================================================================================\r
\r
1. THE 4 CONSTRUCTORS:\r
   - 'public MyEx()'\r
   - 'public MyEx(String message)'\r
   - 'public MyEx(Throwable cause)'\r
   - 'public MyEx(String message, Throwable cause)'\r
   - Always forward arguments to 'super(...)'.\r
\r
================================================================================\r
Classroom Practice: Barrackpore Academy | Mentor: Sukanta Hui\r
================================================================================`,c=[{question:"What are the 4 canonical constructors that every production custom exception class should implement?",shortAnswer:"1. No-arg constructor: 'public MyException() { super(); }' 2. Message constructor: 'public MyException(String msg) { super(msg); }' 3. Cause constructor: 'public MyException(Throwable cause) { super(cause); }' 4. Message + Cause constructor: 'public MyException(String msg, Throwable cause) { super(msg, cause); }'",explanation:"Conforms to standard Java idioms and enables seamless exception chaining.",hint:"No-arg, String message, Throwable cause, and String message + Throwable cause.",level:"Intermediate",codeExample:"public MyEx(String m, Throwable c) { super(m, c); }"}];function h(){return e.jsxs("div",{className:"space-y-12 px-4 md:px-8 py-8 text-slate-200 bg-slate-900 min-h-screen",children:[e.jsxs("header",{className:"space-y-4 border-b border-slate-800 pb-6",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"px-3 py-1 bg-sky-500/10 text-sky-400 border border-sky-500/20 text-xs font-semibold rounded-full uppercase tracking-wider",children:"Module 004_003 · Topic 9"}),e.jsx("span",{className:"px-3 py-1 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-xs font-semibold rounded-full",children:"Canonical Idioms"})]}),e.jsx("h1",{className:"text-xl sm:text-2xl md:text-3xl font-bold text-white tracking-tight",children:"Implementing the 4 Standard Custom Exception Constructors"}),e.jsx("p",{className:"text-base md:text-lg text-slate-400 leading-relaxed max-w-4xl",children:"Follow Java API best practices: implementing the 4 standard constructors (no-arg, message, cause, and message + cause) for robust exception chaining."})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsxs("h2",{className:"text-2xl font-bold text-emerald-400 flex items-center gap-2",children:[e.jsx("span",{children:"💻"})," Hands-On Java Demo Code"]}),e.jsx(n,{fileModule:o,title:"StandardExceptionConstructorsSuiteDemo.java",highlightLines:[7,10,11,15,16,20,21,25,26]})]}),e.jsx("section",{className:"space-y-4",children:e.jsx(t,{title:"Exception Constructors FAQs",questions:c})}),e.jsx("section",{className:"space-y-4",children:e.jsx(r,{content:a,title:"Module 004_003 Topic 9: 4 Canonical Constructors",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Printable Note",downloadFileName:"004_003_topic9_canonical_constructors_note.txt"})}),e.jsx(s,{note:"Whenever you create a custom exception class in IntelliJ or Eclipse, always generate all 4 constructors! That way your fellow developers can throw it with a message, with a root cause, or both! — Sukanta Hui"})]})}export{h as default};
