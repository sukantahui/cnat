import{j as e}from"./vendor-react-core-Doz9nIC6.js";import{J as t}from"./JavaFileLoader-BfBG3xz_.js";import{F as n}from"./FAQTemplate-BHhlgA96.js";import{P as r}from"./PlainTextPrint-C08xhKA4.js";import{T as a}from"./TeacherSukantaHui-DerPxfxp.js";import"./JavaCodeBlock-BwsLxS3r.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-CH1iX9C8.js";const o=`/**\r
 * Java Core Tutorial - Module 004_002: Try, Catch, Finally & Flow Control\r
 * Topic 0: The 'try' Block: Guarding Critical Execution Paths in Java\r
 * Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
 */\r
\r
package com.coderaccotax.javatutorial.exceptions;\r
\r
public class TryBlockGuardedExecutionDemo {\r
\r
    public static void processStudentTuition(String rawFeeInput) {\r
        System.out.println("  [ENTRY] Entering transaction processing routine...");\r
\r
        // The 'try' block marks the guarded section where exceptions might arise:\r
        try {\r
            System.out.println("  [GUARDED STEP 1] Attempting to parse fee: " + rawFeeInput);\r
            int feeAmount = Integer.parseInt(rawFeeInput); // Potential NumberFormatException!\r
\r
            System.out.println("  [GUARDED STEP 2] Calculating installments (12-month tenure)...");\r
            int monthlyPayment = feeAmount / 12; // Potential ArithmeticException!\r
\r
            System.out.println("  [GUARDED STEP 3] Monthly installment: " + monthlyPayment + " INR");\r
            System.out.println("  [SUCCESS] All guarded statements completed successfully.");\r
        } catch (NumberFormatException e) {\r
            System.out.println("  [RECOVERY] Invalid numeric fee format: '" + rawFeeInput + "'");\r
        }\r
\r
        System.out.println("  [EXIT] Exiting transaction routine safely.\\n");\r
    }\r
\r
    public static void main(String[] args) {\r
        System.out.println("==========================================================================");\r
        System.out.println(" TOPIC 0: THE 'try' BLOCK GUARDED EXECUTION - BARRACKPORE");\r
        System.out.println("==========================================================================\\n");\r
\r
        System.out.println(">>> Scenario 1: Valid input (All try statements execute smoothly):");\r
        processStudentTuition("12000");\r
\r
        System.out.println(">>> Scenario 2: Corrupted input (Execution aborts inside try and jumps to catch):");\r
        processStudentTuition("Invalid_Ten_Thousand");\r
\r
        System.out.println("==========================================================================");\r
    }\r
}`,i=`================================================================================\r
JAVA CORE TUTORIAL - QUICK REVISION GUIDE\r
Module 004_002: Try, Catch, Finally & Flow Control\r
Topic 0: The 'try' Block\r
Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
================================================================================\r
\r
1. THE 'try' BLOCK:\r
   - Encloses statements that may throw exceptions.\r
   - Must be followed by at least one 'catch' block OR a 'finally' block.\r
   - If an error occurs, execution immediately exits the try block.\r
\r
================================================================================\r
Classroom Practice: Barrackpore Academy | Mentor: Sukanta Hui\r
================================================================================`,s=[{question:"What happens to the remaining statements inside a 'try' block if an exception is thrown on line 3?",shortAnswer:"The remaining statements in the 'try' block are immediately skipped (aborted). The JVM creates an exception object, stops execution of the try block, and jumps directly to the first matching 'catch' block (or propagates if no catch matches).",explanation:"Lines after the point of failure inside the try block are never executed.",hint:"Remaining statements in the try block are immediately bypassed upon failure.",level:"Beginner",codeExample:"try { doA(); doB(); /* fails here */ doC(); /* never runs */ } catch(...) {}"}];function y(){return e.jsxs("div",{className:"space-y-12 px-4 md:px-8 py-8 text-slate-200 bg-slate-900 min-h-screen",children:[e.jsxs("header",{className:"space-y-4 border-b border-slate-800 pb-6",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"px-3 py-1 bg-sky-500/10 text-sky-400 border border-sky-500/20 text-xs font-semibold rounded-full uppercase tracking-wider",children:"Module 004_002 · Topic 0"}),e.jsx("span",{className:"px-3 py-1 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-xs font-semibold rounded-full",children:"Guarded Execution"})]}),e.jsxs("h1",{className:"text-xl sm:text-2xl md:text-3xl font-bold text-white tracking-tight",children:["The ",e.jsx("code",{className:"text-emerald-400 font-mono",children:"try"})," Block: Guarding Critical Code Sections"]}),e.jsx("p",{className:"text-base md:text-lg text-slate-400 leading-relaxed max-w-4xl",children:"Master guarded code execution in Java: enclosing risky calculations, tracing immediate abort jumps, and isolating failure zones."})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsxs("h2",{className:"text-2xl font-bold text-emerald-400 flex items-center gap-2",children:[e.jsx("span",{children:"💻"})," Hands-On Java Demo Code"]}),e.jsx(t,{fileModule:o,title:"TryBlockGuardedExecutionDemo.java",highlightLines:[7,12,13,14,16,17,19,20,21]})]}),e.jsx("section",{className:"space-y-4",children:e.jsx(n,{title:"Try Block FAQs",questions:s})}),e.jsx("section",{className:"space-y-4",children:e.jsx(r,{content:i,title:"Module 004_002 Topic 0: The try Block",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Printable Note",downloadFileName:"004_002_topic0_try_block_note.txt"})}),e.jsx(a,{note:"The try block is like an insurance policy for your code! You put only the statements that might fail inside it, keeping safe statements outside! — Sukanta Hui"})]})}export{y as default};
