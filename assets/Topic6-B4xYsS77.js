import{j as e}from"./vendor-react-core-Doz9nIC6.js";import{J as n}from"./JavaFileLoader-BfBG3xz_.js";import{F as t}from"./FAQTemplate-BHhlgA96.js";import{P as r}from"./PlainTextPrint-C08xhKA4.js";import{T as a}from"./TeacherSukantaHui-BaJcBHAy.js";import"./JavaCodeBlock-BwsLxS3r.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-8ao-0upJ.js";const i=`/**\r
 * Java Core Tutorial - Module 004_006: Exception Handling Real-World Lab\r
 * Topic 6: Timed Exception Framework Coding Challenge (Segment 4 Capstone)\r
 * Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
 */\r
\r
package com.coderaccotax.javatutorial.exceptions;\r
\r
import java.io.StringReader;\r
import java.util.Objects;\r
\r
public class ExceptionHandlingCapstoneChallengeDemo {\r
\r
    // Custom Domain Exception:\r
    public static class StudentAccountLockedException extends RuntimeException {\r
        private final String studentId;\r
        public StudentAccountLockedException(String id, String msg) {\r
            super(msg);\r
            this.studentId = id;\r
        }\r
        public String getStudentId() { return studentId; }\r
    }\r
\r
    // CAPSTONE CHALLENGE METHOD: Integrates validation, ARM, chaining, and custom exceptions:\r
    public static void executeStudentCredentialVerification(String studentId, String rawSecret) {\r
        // Step 1: Defensive fast-fail\r
        Objects.requireNonNull(studentId, "Student ID cannot be null!");\r
\r
        if (studentId.startsWith("LOCKED_")) {\r
            throw new StudentAccountLockedException(studentId, "Account is locked due to security policy!");\r
        }\r
\r
        // Step 2: Try-with-Resources automatic cleanup\r
        try (StringReader secretReader = new StringReader(rawSecret)) {\r
            int firstChar = secretReader.read();\r
            if (firstChar == 'X') {\r
                throw new IllegalArgumentException("Suspicious secret signature detected!");\r
            }\r
            System.out.println("  [VERIFIED] Credentials authenticated for: " + studentId);\r
        } catch (Exception e) {\r
            // Step 3: Exception chaining and translation\r
            throw new IllegalStateException("Security verification gateway failed for " + studentId, e);\r
        }\r
    }\r
\r
    public static void main(String[] args) {\r
        System.out.println("==========================================================================");\r
        System.out.println(" TOPIC 6: TIMED EXCEPTION CODING CHALLENGE CAPSTONE - BARRACKPORE");\r
        System.out.println("==========================================================================\\n");\r
\r
        System.out.println(">>> 1. Scenario 1: Valid Verification:");\r
        executeStudentCredentialVerification("STU_BKP_101", "VALID_PASSWORD_2026");\r
\r
        System.out.println("\\n>>> 2. Scenario 2: Handling Custom Account Locked Exception:");\r
        try {\r
            executeStudentCredentialVerification("LOCKED_STU_99", "SECRET");\r
        } catch (StudentAccountLockedException e) {\r
            System.out.println("  [CAUGHT CUSTOM EXCEPTION] " + e.getMessage() + " (ID: " + e.getStudentId() + ")");\r
        }\r
\r
        System.out.println("\\n>>> 3. Scenario 3: Handling Chained Gateway Failure:");\r
        try {\r
            executeStudentCredentialVerification("STU_BKP_102", "X_INVALID_KEY");\r
        } catch (IllegalStateException e) {\r
            System.out.println("  [CAUGHT CHAINED EXCEPTION] " + e.getMessage());\r
            System.out.println("  [UNDERLYING ROOT CAUSE] " + e.getCause());\r
        }\r
\r
        System.out.println("\\n==========================================================================");\r
        System.out.println(" MODULE 004_006 EXCEPTION HANDLING REAL-WORLD LAB 100% COMPLETE!");\r
        System.out.println(" SEGMENT 4: EXCEPTION HANDLING & ROBUST APPLICATION DESIGN 100% COMPLETE!");\r
        System.out.println("==========================================================================");\r
    }\r
}`,o=`================================================================================\r
JAVA CORE TUTORIAL - QUICK REVISION GUIDE\r
Module 004_006: Exception Handling Real-World Lab\r
Topic 6: Timed Exception Challenge Capstone\r
Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
================================================================================\r
\r
1. SEGMENT 4 COMPLETION SUMMARY:\r
   - Module 004_001: Throwable, Error vs Exception, Checked vs Unchecked.\r
   - Module 004_002: try-catch-finally, multi-catch, ordering rules, finally return rules.\r
   - Module 004_003: throw vs throws, custom domain exceptions, 4 constructors.\r
   - Module 004_004: Try-with-Resources (ARM), AutoCloseable, suppressed exceptions.\r
   - Module 004_005: Propagation, stack unwinding, chaining, anti-pattern avoidance.\r
   - Module 004_006: RFC 7807 Error model, global interceptor, retry engine, capstone.\r
\r
================================================================================\r
Classroom Practice: Barrackpore Academy | Mentor: Sukanta Hui\r
================================================================================`,s=[{question:"What makes the final coding challenge implementation resilient and production-ready?",shortAnswer:"It combines all 4 core pillars of enterprise exception handling: 1. Defensive parameter validation via 'Objects.requireNonNull()'. 2. Custom domain exception ('StudentAccountLockedException') carrying domain metadata. 3. Try-with-Resources for leak-proof stream lifecycle management. 4. Exception chaining to translate low-level errors while preserving root causes.",explanation:"The complete standard of professional enterprise Java engineering.",hint:"Combines defensive fast-fail, custom exceptions, ARM auto-closing, and root cause chaining.",level:"Advanced",codeExample:'try (var s = open()) { ... } catch (Ex e) { throw new DomainEx("msg", e); }'}];function E(){return e.jsxs("div",{className:"space-y-12 px-4 md:px-8 py-8 text-slate-200 bg-slate-900 min-h-screen",children:[e.jsxs("header",{className:"space-y-4 border-b border-slate-800 pb-6",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"px-3 py-1 bg-sky-500/10 text-sky-400 border border-sky-500/20 text-xs font-semibold rounded-full uppercase tracking-wider",children:"Module 004_006 · Topic 6"}),e.jsx("span",{className:"px-3 py-1 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-xs font-semibold rounded-full",children:"Segment 4 Capstone"})]}),e.jsx("h1",{className:"text-xl sm:text-2xl md:text-3xl font-bold text-white tracking-tight",children:"Timed Exception Framework Coding Challenge (Segment 4 Capstone)"}),e.jsx("p",{className:"text-base md:text-lg text-slate-400 leading-relaxed max-w-4xl",children:"Synthesize all Segment 4 competencies: assembling defensive checks, custom domain exceptions, Try-with-Resources stream pipelines, and root-cause chaining into a unified security gateway."})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsxs("h2",{className:"text-2xl font-bold text-emerald-400 flex items-center gap-2",children:[e.jsx("span",{children:"💻"})," Hands-On Java Demo Code"]}),e.jsx(n,{fileModule:i,title:"ExceptionHandlingCapstoneChallengeDemo.java",highlightLines:[7,10,15,20,23,27,34,35]})]}),e.jsx("section",{className:"space-y-4",children:e.jsx(t,{title:"Capstone Challenge FAQs",questions:s})}),e.jsx("section",{className:"space-y-4",children:e.jsx(r,{content:o,title:"Module 004_006 Topic 6: Exception Challenge Capstone",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Printable Note",downloadFileName:"004_006_topic6_exception_challenge_capstone_note.txt"})}),e.jsx(a,{note:"CONGRATULATIONS! You have completed Module 004_006 and ALL OF SEGMENT 4! You are now a master of Java Exception Handling, ARM, AutoCloseable, and Robust Application Design! — Sukanta Hui"})]})}export{E as default};
