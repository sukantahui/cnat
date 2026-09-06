import{j as e}from"./vendor-react-core-Doz9nIC6.js";import{J as t}from"./JavaFileLoader-BfBG3xz_.js";import{F as n}from"./FAQTemplate-BHhlgA96.js";import{P as r}from"./PlainTextPrint-C08xhKA4.js";import{T as o}from"./TeacherSukantaHui-DDN87fI5.js";import"./JavaCodeBlock-BwsLxS3r.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-DEsnU7fn.js";const a=`/**\r
 * Java Core Tutorial - Module 004_003: Throw, Throws & Custom Exceptions\r
 * Topic 0: The 'throw' Keyword: Explicitly Raising Exception Instances at Runtime\r
 * Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
 */\r
\r
package com.coderaccotax.javatutorial.exceptions;\r
\r
public class ThrowKeywordExplicitDemo {\r
\r
    public static void validateAdmissionAge(int age, String studentName) {\r
        System.out.printf("  Validating applicant: %s (Age: %d)%n", studentName, age);\r
\r
        // Explicitly instantiate and throw an exception object:\r
        if (age < 15) {\r
            throw new IllegalArgumentException("Student " + studentName + " must be at least 15 years old for professional Java training!");\r
        }\r
\r
        System.out.println("  [APPROVED] Admission eligibility verified for: " + studentName);\r
    }\r
\r
    public static void main(String[] args) {\r
        System.out.println("==========================================================================");\r
        System.out.println(" TOPIC 0: THE 'throw' KEYWORD - BARRACKPORE");\r
        System.out.println("==========================================================================\\n");\r
\r
        System.out.println(">>> 1. Successful Validation (Swadeep Paul, Age 20):");\r
        validateAdmissionAge(20, "Swadeep Paul");\r
\r
        System.out.println("\\n>>> 2. Triggering Explicit 'throw' (Junior Applicant, Age 12):");\r
        try {\r
            validateAdmissionAge(12, "Junior Trainee");\r
        } catch (IllegalArgumentException e) {\r
            System.out.println("  [CAUGHT THROWN EXCEPTION] " + e.getMessage());\r
        }\r
\r
        System.out.println("\\n>>> SYNTAX RULES FOR 'throw':");\r
        System.out.println("  1. 'throw' is followed by an INSTANCE of Throwable (e.g. 'throw new MyException();').");\r
        System.out.println("  2. 'throw' immediately terminates the current execution flow.");\r
\r
        System.out.println("\\n==========================================================================");\r
    }\r
}`,i=`================================================================================\r
JAVA CORE TUTORIAL - QUICK REVISION GUIDE\r
Module 004_003: Throw, Throws & Custom Exceptions\r
Topic 0: The 'throw' Keyword\r
Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
================================================================================\r
\r
1. THE 'throw' STATEMENT:\r
   - Keyword: 'throw' (singular verb).\r
   - Followed by an instantiated object: 'throw new Exception("message");'\r
   - Used inside method bodies to raise an error.\r
   - Instantly interrupts normal control flow.\r
\r
================================================================================\r
Classroom Practice: Barrackpore Academy | Mentor: Sukanta Hui\r
================================================================================`,s=[{question:"What is the syntax requirement and runtime effect of the 'throw' keyword in Java?",shortAnswer:"The 'throw' statement must be followed by an instantiated object of type 'Throwable' (or any subclass). When executed, it immediately stops current method execution, creates an active exception state, and begins searching the call stack for an enclosing try-catch handler.",explanation:"Used to explicitly signal precondition violations or business failures.",hint:"Requires an instantiated Throwable object and halts sequential execution immediately.",level:"Beginner",codeExample:'if (balance < 0) throw new IllegalArgumentException("Negative balance");'}];function w(){return e.jsxs("div",{className:"space-y-12 px-4 md:px-8 py-8 text-slate-200 bg-slate-900 min-h-screen",children:[e.jsxs("header",{className:"space-y-4 border-b border-slate-800 pb-6",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"px-3 py-1 bg-sky-500/10 text-sky-400 border border-sky-500/20 text-xs font-semibold rounded-full uppercase tracking-wider",children:"Module 004_003 · Topic 0"}),e.jsx("span",{className:"px-3 py-1 bg-rose-500/10 text-rose-400 border border-rose-500/20 text-xs font-semibold rounded-full",children:"Explicit Raising"})]}),e.jsxs("h1",{className:"text-xl sm:text-2xl md:text-3xl font-bold text-white tracking-tight",children:["The ",e.jsx("code",{className:"text-rose-400 font-mono",children:"throw"})," Keyword: Explicitly Raising Exception Instances at Runtime"]}),e.jsxs("p",{className:"text-base md:text-lg text-slate-400 leading-relaxed max-w-4xl",children:["Learn how to actively enforce business preconditions: using the ",e.jsx("code",{className:"text-rose-300 font-mono",children:"throw"})," statement to instantiate exception objects and abort invalid program states."]})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsxs("h2",{className:"text-2xl font-bold text-emerald-400 flex items-center gap-2",children:[e.jsx("span",{children:"💻"})," Hands-On Java Demo Code"]}),e.jsx(t,{fileModule:a,title:"ThrowKeywordExplicitDemo.java",highlightLines:[7,10,11,12,13,14,25,26]})]}),e.jsx("section",{className:"space-y-4",children:e.jsx(n,{title:"Throw Keyword FAQs",questions:s})}),e.jsx("section",{className:"space-y-4",children:e.jsx(r,{content:i,title:"Module 004_003 Topic 0: The throw Keyword",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Printable Note",downloadFileName:"004_003_topic0_throw_keyword_note.txt"})}),e.jsx(o,{note:"Think of 'throw' as pressing an emergency fire alarm button in your method body! When you execute 'throw new ...', execution stops right there! — Sukanta Hui"})]})}export{w as default};
