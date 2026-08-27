import{j as e}from"./vendor-react-core-Doz9nIC6.js";import{J as n}from"./JavaFileLoader-BfBG3xz_.js";import{F as t}from"./FAQTemplate-CkSqDH4B.js";import{P as r}from"./PlainTextPrint-C08xhKA4.js";import{T as a}from"./TeacherSukantaHui-CC0AKmkm.js";import"./JavaCodeBlock-BwsLxS3r.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-BtJHuk7w.js";const i=`/**\r
 * Java Core Tutorial - Module 004_001: Exception Hierarchy\r
 * Topic 10: Handling NullPointerException Gracefully: Defensive Checks & Java 14+ Helpful NPEs (Capstone)\r
 * Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
 */\r
\r
package com.coderaccotax.javatutorial.exceptions;\r
\r
import java.util.Objects;\r
import java.util.Optional;\r
\r
public class HelpfulNpeAndDefensiveHandlingCapstoneDemo {\r
\r
    public static class StudentRecord {\r
        private String studentName;\r
        private String enrolledCenter;\r
\r
        public StudentRecord(String name, String center) {\r
            // Defensive validation using Objects.requireNonNull():\r
            this.studentName = Objects.requireNonNull(name, "Student name cannot be null!");\r
            this.enrolledCenter = Objects.requireNonNull(center, "Enrolled center cannot be null!");\r
        }\r
\r
        public String getStudentName() { return studentName; }\r
        public String getEnrolledCenter() { return enrolledCenter; }\r
    }\r
\r
    public static String getSafeCenterName(StudentRecord record) {\r
        // Safe handling using Optional:\r
        return Optional.ofNullable(record)\r
                .map(StudentRecord::getEnrolledCenter)\r
                .orElse("Default Center: Barrackpore Main");\r
    }\r
\r
    public static void main(String[] args) {\r
        System.out.println("==========================================================================");\r
        System.out.println(" TOPIC 10: DEFENSIVE NPE HANDLING CAPSTONE - BARRACKPORE");\r
        System.out.println("==========================================================================\\n");\r
\r
        System.out.println(">>> 1. Creating Valid Student Record with Objects.requireNonNull():");\r
        StudentRecord validStudent = new StudentRecord("Swadeep Paul", "Barrackpore");\r
        System.out.println("  Student: " + validStudent.getStudentName() + " (" + validStudent.getEnrolledCenter() + ")");\r
\r
        System.out.println("\\n>>> 2. Catching Defensive Fast-Fail Exception:");\r
        try {\r
            new StudentRecord(null, "Barrackpore");\r
        } catch (NullPointerException e) {\r
            System.out.println("  [DEFENSIVE SHIELD] Fast-Failed: " + e.getMessage());\r
        }\r
\r
        System.out.println("\\n>>> 3. Safe Null-Handling via Optional.ofNullable():");\r
        System.out.println("  Safe Center (Null Record): " + getSafeCenterName(null));\r
        System.out.println("  Safe Center (Valid Record): " + getSafeCenterName(validStudent));\r
\r
        System.out.println("\\n>>> 4. Helpful NPEs in Modern Java (Java 14+):");\r
        System.out.println("  In Java 14+, the JVM specifies the EXACT variable that was null (e.g. 'Cannot invoke length() because record.name is null')!");\r
\r
        System.out.println("\\n==========================================================================");\r
        System.out.println(" MODULE 004_001 EXCEPTION ARCHITECTURE 100% COMPLETE!");\r
        System.out.println("==========================================================================");\r
    }\r
}`,l=`================================================================================\r
JAVA CORE TUTORIAL - QUICK REVISION GUIDE\r
Module 004_001: Exception Hierarchy\r
Topic 10: NPE Defensive Handling Capstone\r
Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
================================================================================\r
\r
1. MODULE 004_001 SUMMARY:\r
   - Throwable is the root class (splits into Error and Exception).\r
   - Error (JVM failures - never catch).\r
   - Checked Exceptions (Exception subclasses - compiler enforced).\r
   - Unchecked Exceptions (RuntimeException subclasses - programming bugs).\r
   - Catch or Specify requirement for Checked exceptions.\r
   - Modern trend favors Unchecked exceptions for framework flexibility.\r
   - Use Objects.requireNonNull() and Optional for defensive NPE prevention.\r
\r
================================================================================\r
Classroom Practice: Barrackpore Academy | Mentor: Sukanta Hui\r
================================================================================`,o=[{question:"How do 'Objects.requireNonNull()' and 'Java 14 Helpful NullPointerExceptions' transform NPE debugging in enterprise Java?",shortAnswer:"1. 'Objects.requireNonNull(arg, msg)' enables defensive fast-failing at constructor boundaries, ensuring errors are caught immediately where null is introduced. 2. Java 14 Helpful NPEs analyze bytecode to pinpoint the EXACT expression in a chain ('a.b.c()') that evaluated to null, eliminating guesswork.",explanation:"A landmark JVM feature (JEP 358) that revolutionized production stack trace debugging.",hint:"Objects.requireNonNull enforces fast-failing; Java 14 pinpoints the exact null expression in stack traces.",level:"Intermediate",codeExample:'this.name = Objects.requireNonNull(name, "Name cannot be null");'}];function f(){return e.jsxs("div",{className:"space-y-12 px-4 md:px-8 py-8 text-slate-200 bg-slate-900 min-h-screen",children:[e.jsxs("header",{className:"space-y-4 border-b border-slate-800 pb-6",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"px-3 py-1 bg-sky-500/10 text-sky-400 border border-sky-500/20 text-xs font-semibold rounded-full uppercase tracking-wider",children:"Module 004_001 · Topic 10"}),e.jsx("span",{className:"px-3 py-1 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-xs font-semibold rounded-full",children:"NPE Shield Capstone"})]}),e.jsxs("h1",{className:"text-3xl md:text-4xl font-extrabold text-white tracking-tight",children:["Handling ",e.jsx("code",{className:"text-rose-400 font-mono",children:"NullPointerException"})," Gracefully: Defensive Checks & Java 14+ Helpful NPEs"]}),e.jsxs("p",{className:"text-base md:text-lg text-slate-400 leading-relaxed max-w-4xl",children:["Build bulletproof data pipelines: fast-failing constructor boundaries with ",e.jsx("code",{className:"text-emerald-300 font-mono",children:"Objects.requireNonNull()"}),", safe retrieval with ",e.jsx("code",{className:"text-sky-300 font-mono",children:"Optional"}),", and modern Java 14 helpful diagnostics."]})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsxs("h2",{className:"text-2xl font-bold text-emerald-400 flex items-center gap-2",children:[e.jsx("span",{children:"💻"})," Hands-On Java Demo Code"]}),e.jsx(n,{fileModule:i,title:"HelpfulNpeAndDefensiveHandlingCapstoneDemo.java",highlightLines:[7,16,17,23,24,25,37,43]})]}),e.jsx("section",{className:"space-y-4",children:e.jsx(t,{title:"NPE Handling FAQs",questions:o})}),e.jsx("section",{className:"space-y-4",children:e.jsx(r,{content:l,title:"Module 004_001 Topic 10: NPE Defensive Handling Capstone",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Printable Note",downloadFileName:"004_001_topic10_npe_defensive_capstone_note.txt"})}),e.jsx(a,{note:"Congratulations on completing Module 004_001! You have mastered the Java Throwable hierarchy, Error vs Exception, Checked vs Unchecked design philosophy, modern framework trends, and defensive NPE shielding! — Sukanta Hui"})]})}export{f as default};
