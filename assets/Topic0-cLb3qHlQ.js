import{j as e}from"./vendor-react-core-Doz9nIC6.js";import{J as n}from"./JavaFileLoader-BfBG3xz_.js";import{F as r}from"./FAQTemplate-BHhlgA96.js";import{P as t}from"./PlainTextPrint-C08xhKA4.js";import{T as a}from"./TeacherSukantaHui-DDN87fI5.js";import"./JavaCodeBlock-BwsLxS3r.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-DEsnU7fn.js";const i=`/**\r
 * Java Core Tutorial - Module 004_001: Exception Hierarchy\r
 * Topic 0: Structured Exception Handling vs Legacy Return-Code Checking\r
 * Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
 */\r
\r
package com.coderaccotax.javatutorial.exceptions;\r
\r
public class StructuredExceptionsVsReturnCodesDemo {\r
\r
    // ANTI-PATTERN: The C-style Return Code Error Checking:\r
    public static int withdrawLegacy(int currentBalance, int amount) {\r
        if (amount <= 0) return -1; // Error code -1: Invalid amount\r
        if (amount > currentBalance) return -2; // Error code -2: Insufficient funds\r
        return currentBalance - amount; // Success: returns new balance (What if balance happens to be -1?)\r
    }\r
\r
    // BEST PRACTICE: Structured Java Exception Handling:\r
    public static int withdrawStructured(int currentBalance, int amount) {\r
        if (amount <= 0) {\r
            throw new IllegalArgumentException("Withdrawal amount must be positive! Received: " + amount);\r
        }\r
        if (amount > currentBalance) {\r
            throw new IllegalStateException("Insufficient funds! Balance: " + currentBalance + ", Requested: " + amount);\r
        }\r
        return currentBalance - amount;\r
    }\r
\r
    public static void main(String[] args) {\r
        System.out.println("==========================================================================");\r
        System.out.println(" TOPIC 0: STRUCTURED EXCEPTION HANDLING - BARRACKPORE");\r
        System.out.println("==========================================================================\\n");\r
\r
        int balance = 5000;\r
\r
        System.out.println(">>> 1. Legacy Return-Code Pitfalls (Errors can be silently ignored by callers):");\r
        int res = withdrawLegacy(balance, 10000);\r
        if (res == -2) {\r
            System.out.println("  [LEGACY] Error detected manually via if-check: Insufficient funds.");\r
        }\r
\r
        System.out.println("\\n>>> 2. Modern Structured Exception Handling (Errors CANNOT be ignored):");\r
        try {\r
            withdrawStructured(balance, 10000);\r
        } catch (IllegalStateException e) {\r
            System.out.println("  [STRUCTURED CATCH] " + e.getMessage());\r
        }\r
\r
        System.out.println("\\n>>> WHY STRUCTURED EXCEPTIONS WIN:");\r
        System.out.println("  1. Separation of Normal Business Logic from Error-Handling Code.");\r
        System.out.println("  2. Impossible to Silently Ignore: Unhandled errors bubble up and halt execution safely.");\r
        System.out.println("  3. Rich Diagnostic Context: Stack trace, error message, and exception type hierarchy.");\r
\r
        System.out.println("\\n==========================================================================");\r
    }\r
}`,o=`================================================================================\r
JAVA CORE TUTORIAL - QUICK REVISION GUIDE\r
Module 004_001: Exception Hierarchy\r
Topic 0: Structured Exception Handling\r
Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
================================================================================\r
\r
1. RETURN CODE FLAWS:\r
   - Callers can forget to check return codes.\r
   - Return value conflation (is -1 an error or a valid answer?).\r
   - Clutters business logic with nested if-else checks.\r
\r
2. STRUCTURED EXCEPTION ADVANTAGES:\r
   - Clean separation via try-catch.\r
   - Cannot be ignored.\r
   - Rich stack trace diagnostics.\r
\r
================================================================================\r
Classroom Practice: Barrackpore Academy | Mentor: Sukanta Hui\r
================================================================================`,s=[{question:"Why is structured exception handling in Java vastly superior to C-style return code error checking?",shortAnswer:"1. Separates regular business logic from error-handling paths. 2. Exceptions cannot be silently ignored by callers (they halt execution or propagate if unhandled). 3. Eliminates return-value ambiguities (e.g. distinguishing a real result of -1 from an error code of -1). 4. Carries full stack traces and contextual error messages.",explanation:"Standard foundation of all modern object-oriented software engineering.",hint:"Separates business logic, prevents silent error ignoring, and provides stack traces.",level:"Beginner",codeExample:'if (amount > balance) throw new InsufficientFundsException("Cannot withdraw");'}];function h(){return e.jsxs("div",{className:"space-y-12 px-4 md:px-8 py-8 text-slate-200 bg-slate-900 min-h-screen",children:[e.jsxs("header",{className:"space-y-4 border-b border-slate-800 pb-6",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"px-3 py-1 bg-sky-500/10 text-sky-400 border border-sky-500/20 text-xs font-semibold rounded-full uppercase tracking-wider",children:"Module 004_001 · Topic 0"}),e.jsx("span",{className:"px-3 py-1 bg-indigo-500/10 text-indigo-400 border border-indigo-500/20 text-xs font-semibold rounded-full",children:"Fault Tolerance Strategy"})]}),e.jsx("h1",{className:"text-xl sm:text-2xl md:text-3xl font-bold text-white tracking-tight",children:"Why Structured Exception Handling is Superior to Return-Code Error Checking"}),e.jsx("p",{className:"text-base md:text-lg text-slate-400 leading-relaxed max-w-4xl",children:"Discover why modern enterprise systems eliminate C-style error codes: separating clean happy-path business logic from failure recovery and enforcing unignorable error handling."})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsxs("h2",{className:"text-2xl font-bold text-emerald-400 flex items-center gap-2",children:[e.jsx("span",{children:"💻"})," Hands-On Java Demo Code"]}),e.jsx(n,{fileModule:i,title:"StructuredExceptionsVsReturnCodesDemo.java",highlightLines:[7,10,11,12,17,18,20,21,37,38,39]})]}),e.jsx("section",{className:"space-y-4",children:e.jsx(r,{title:"Structured Exceptions FAQs",questions:s})}),e.jsx("section",{className:"space-y-4",children:e.jsx(t,{content:o,title:"Module 004_001 Topic 0: Structured Exception Handling",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Printable Note",downloadFileName:"004_001_topic0_structured_exceptions_note.txt"})}),e.jsx(a,{note:"In C programming, if you forgot to check 'if (result == -1)', the program continued running with corrupted data! In Java, an unhandled exception halts immediately, preventing database and financial corruption! — Sukanta Hui"})]})}export{h as default};
