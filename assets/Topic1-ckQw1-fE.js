import{j as e}from"./vendor-react-core-Doz9nIC6.js";import{J as t}from"./JavaFileLoader-BfBG3xz_.js";import{F as n}from"./FAQTemplate-BHhlgA96.js";import{P as r}from"./PlainTextPrint-C08xhKA4.js";import{T as a}from"./TeacherSukantaHui-CEPuAfsb.js";import"./JavaCodeBlock-BwsLxS3r.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-DGCamHnX.js";const o=`/**\r
 * Java Core Tutorial - Module 004_003: Throw, Throws & Custom Exceptions\r
 * Topic 1: Throwing Built-in Standard Exceptions (Effective Java Item 72)\r
 * Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
 */\r
\r
package com.coderaccotax.javatutorial.exceptions;\r
\r
import java.util.NoSuchElementException;\r
\r
public class StandardExceptionsReuseDemo {\r
\r
    // 1. Reusing IllegalArgumentException for bad parameters:\r
    public static void setMonthlyInstallmentTenure(int months) {\r
        if (months <= 0 || months > 36) {\r
            throw new IllegalArgumentException("Installment tenure must be between 1 and 36 months! Received: " + months);\r
        }\r
        System.out.println("  [CONFIGURED] Installment tenure set to " + months + " months.");\r
    }\r
\r
    // 2. Reusing IllegalStateException for invalid object lifecycle:\r
    public static class CourseBatch {\r
        private boolean isClosed = false;\r
\r
        public void closeBatch() { this.isClosed = true; }\r
\r
        public void enrollStudent(String studentName) {\r
            if (isClosed) {\r
                throw new IllegalStateException("Cannot enroll " + studentName + "! Batch has already concluded.");\r
            }\r
            System.out.println("  [ENROLLED] " + studentName + " added to active batch.");\r
        }\r
    }\r
\r
    // 3. Reusing NoSuchElementException when searching:\r
    public static String findStudentByRoll(String rollNumber) {\r
        if (!"ROLL_101".equals(rollNumber)) {\r
            throw new NoSuchElementException("No student record found with roll number: " + rollNumber);\r
        }\r
        return "Abhronila Das (Barrackpore Hub)";\r
    }\r
\r
    public static void main(String[] args) {\r
        System.out.println("==========================================================================");\r
        System.out.println(" TOPIC 1: REUSING STANDARD EXCEPTIONS - BARRACKPORE");\r
        System.out.println("==========================================================================\\n");\r
\r
        System.out.println(">>> 1. IllegalArgumentException Demo:");\r
        try {\r
            setMonthlyInstallmentTenure(48);\r
        } catch (IllegalArgumentException e) {\r
            System.out.println("  [CAUGHT] " + e.getMessage());\r
        }\r
\r
        System.out.println("\\n>>> 2. IllegalStateException Demo:");\r
        try {\r
            CourseBatch batch = new CourseBatch();\r
            batch.closeBatch();\r
            batch.enrollStudent("Debangshu Mukherjee");\r
        } catch (IllegalStateException e) {\r
            System.out.println("  [CAUGHT] " + e.getMessage());\r
        }\r
\r
        System.out.println("\\n>>> 3. NoSuchElementException Demo:");\r
        try {\r
            findStudentByRoll("ROLL_999");\r
        } catch (NoSuchElementException e) {\r
            System.out.println("  [CAUGHT] " + e.getMessage());\r
        }\r
\r
        System.out.println("\\n==========================================================================");\r
    }\r
}`,s=`================================================================================\r
JAVA CORE TUTORIAL - QUICK REVISION GUIDE\r
Module 004_003: Throw, Throws & Custom Exceptions\r
Topic 1: Standard Exceptions Reuse\r
Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
================================================================================\r
\r
1. CORE STANDARD EXCEPTIONS:\r
   - 'IllegalArgumentException'     : Bad argument passed by caller.\r
   - 'IllegalStateException'        : Object not in valid state for call.\r
   - 'NoSuchElementException'       : Requested element does not exist.\r
   - 'UnsupportedOperationException': Method not supported by implementation.\r
\r
================================================================================\r
Classroom Practice: Barrackpore Academy | Mentor: Sukanta Hui\r
================================================================================`,i=[{question:"Why does Effective Java Item 72 advise developers to favor reusing standard exceptions (IllegalArgumentException, IllegalStateException, NoSuchElementException, UnsupportedOperationException) over inventing new custom exceptions?",shortAnswer:"1. Makes APIs easier to learn and read because all Java programmers already understand standard exception semantics. 2. Decreases memory footprint and classloader overhead. 3. Keeps exception hierarchies clean without redundant custom classes that add no new domain information.",explanation:"Only create custom exceptions if you have domain-specific recovery metadata.",hint:"Increases API readability, leverages existing idioms, and prevents class bloat.",level:"Intermediate",codeExample:'throw new UnsupportedOperationException("Immutable list cannot be modified");'}];function g(){return e.jsxs("div",{className:"space-y-12 px-4 md:px-8 py-8 text-slate-200 bg-slate-900 min-h-screen",children:[e.jsxs("header",{className:"space-y-4 border-b border-slate-800 pb-6",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"px-3 py-1 bg-sky-500/10 text-sky-400 border border-sky-500/20 text-xs font-semibold rounded-full uppercase tracking-wider",children:"Module 004_003 · Topic 1"}),e.jsx("span",{className:"px-3 py-1 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-xs font-semibold rounded-full",children:"Standard Idioms"})]}),e.jsxs("h1",{className:"text-xl sm:text-2xl md:text-3xl font-bold text-white tracking-tight",children:["Throwing Built-in Standard Exceptions (",e.jsx("code",{className:"text-emerald-400 font-mono",children:"IllegalArgumentException"}),", ",e.jsx("code",{className:"text-sky-400 font-mono",children:"IllegalStateException"}),")"]}),e.jsx("p",{className:"text-base md:text-lg text-slate-400 leading-relaxed max-w-4xl",children:"Apply Effective Java Item 72: mastering the standard JDK exception idioms to report invalid arguments, lifecycle violations, and missing elements cleanly."})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsxs("h2",{className:"text-2xl font-bold text-emerald-400 flex items-center gap-2",children:[e.jsx("span",{children:"💻"})," Hands-On Java Demo Code"]}),e.jsx(t,{fileModule:o,title:"StandardExceptionsReuseDemo.java",highlightLines:[7,10,11,12,19,23,24,30,31]})]}),e.jsx("section",{className:"space-y-4",children:e.jsx(n,{title:"Standard Exceptions FAQs",questions:i})}),e.jsx("section",{className:"space-y-4",children:e.jsx(r,{content:s,title:"Module 004_003 Topic 1: Standard Exceptions Reuse",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Printable Note",downloadFileName:"004_003_topic1_standard_exceptions_reuse_note.txt"})}),e.jsx(a,{note:"Before creating a custom 'BadInputException', check if 'IllegalArgumentException' already does the job! Reusing standard exceptions makes your code intuitive to every Java engineer in the world! — Sukanta Hui"})]})}export{g as default};
