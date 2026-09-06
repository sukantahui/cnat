import{j as t}from"./vendor-react-core-Doz9nIC6.js";import{J as e}from"./JavaFileLoader-BfBG3xz_.js";import{F as n}from"./FAQTemplate-BHhlgA96.js";import{P as r}from"./PlainTextPrint-C08xhKA4.js";import{T as o}from"./TeacherSukantaHui-DDN87fI5.js";import"./JavaCodeBlock-BwsLxS3r.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-DEsnU7fn.js";const a=`/**\r
 * Java Core Tutorial - Module 004_002: Try, Catch, Finally & Flow Control\r
 * Topic 2: Execution Flow Comparison: Normal Execution vs Exception Branching\r
 * Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
 */\r
\r
package com.coderaccotax.javatutorial.exceptions;\r
\r
public class ExecutionFlowComparisonDemo {\r
\r
    public static void executeFlowTrace(int divisor) {\r
        System.out.println("  [1] Statement BEFORE try block");\r
\r
        try {\r
            System.out.println("  [2] Inside try block - Step A");\r
            int result = 100 / divisor; // Fails if divisor is 0!\r
            System.out.println("  [3] Inside try block - Step B (Calculated: " + result + ")");\r
        } catch (ArithmeticException ex) {\r
            System.out.println("  [4] Inside catch block - Handled ArithmeticException!");\r
        }\r
\r
        System.out.println("  [5] Statement AFTER try-catch block\\n");\r
    }\r
\r
    public static void main(String[] args) {\r
        System.out.println("==========================================================================");\r
        System.out.println(" TOPIC 2: EXECUTION FLOW COMPARISON - BARRACKPORE");\r
        System.out.println("==========================================================================\\n");\r
\r
        System.out.println(">>> CASE A: NO EXCEPTION OCCURS (divisor = 2):");\r
        System.out.println("Expected Sequence: 1 -> 2 -> 3 -> 5 (Catch is skipped)");\r
        executeFlowTrace(2);\r
\r
        System.out.println(">>> CASE B: EXCEPTION OCCURS (divisor = 0):");\r
        System.out.println("Expected Sequence: 1 -> 2 -> (Aborts 3) -> 4 -> 5");\r
        executeFlowTrace(0);\r
\r
        System.out.println("==========================================================================");\r
    }\r
}`,s=`================================================================================\r
JAVA CORE TUTORIAL - QUICK REVISION GUIDE\r
Module 004_002: Try, Catch, Finally & Flow Control\r
Topic 2: Execution Flow Control\r
Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
================================================================================\r
\r
1. FLOW CONTROL RULES:\r
   - Success Case: try block runs to completion → catch skipped → post-code runs.\r
   - Failure Case: try block aborts at failure → catch runs → post-code runs.\r
   - Uncaught Error: try aborts → method terminates abruptly → exception propagates.\r
\r
================================================================================\r
Classroom Practice: Barrackpore Academy | Mentor: Sukanta Hui\r
================================================================================`,i=[{question:"In standard try-catch execution flow, what is the exact statement sequence when an exception is thrown on step 2 of a 3-step try block?",shortAnswer:"1. Step 1 (runs). 2. Step 2 (fails and throws exception). 3. Step 3 inside try is SKIPPED. 4. Matching 'catch' block executes. 5. Code continues sequentially with statements AFTER the try-catch structure.",explanation:"Guarantees graceful continuation rather than abrupt process termination.",hint:"Statements after the failure in try are skipped; catch executes; execution continues after catch.",level:"Beginner",codeExample:"// Flow: try_step1 → try_step2 (fails) → catch_block → post_statements"}];function y(){return t.jsxs("div",{className:"space-y-12 px-4 md:px-8 py-8 text-slate-200 bg-slate-900 min-h-screen",children:[t.jsxs("header",{className:"space-y-4 border-b border-slate-800 pb-6",children:[t.jsxs("div",{className:"flex items-center gap-3",children:[t.jsx("span",{className:"px-3 py-1 bg-sky-500/10 text-sky-400 border border-sky-500/20 text-xs font-semibold rounded-full uppercase tracking-wider",children:"Module 004_002 · Topic 2"}),t.jsx("span",{className:"px-3 py-1 bg-indigo-500/10 text-indigo-400 border border-indigo-500/20 text-xs font-semibold rounded-full",children:"Flow Tracing"})]}),t.jsx("h1",{className:"text-xl sm:text-2xl md:text-3xl font-bold text-white tracking-tight",children:"Execution Flow: Normal Execution vs Exception Branching"}),t.jsx("p",{className:"text-base md:text-lg text-slate-400 leading-relaxed max-w-4xl",children:"Trace step-by-step JVM execution paths: contrasting normal completed try blocks against immediate abort jumps to catch handlers and post-block recovery."})]}),t.jsxs("section",{className:"space-y-4",children:[t.jsxs("h2",{className:"text-2xl font-bold text-emerald-400 flex items-center gap-2",children:[t.jsx("span",{children:"💻"})," Hands-On Java Demo Code"]}),t.jsx(e,{fileModule:a,title:"ExecutionFlowComparisonDemo.java",highlightLines:[7,10,12,13,14,15,16,17,20]})]}),t.jsx("section",{className:"space-y-4",children:t.jsx(n,{title:"Execution Flow FAQs",questions:i})}),t.jsx("section",{className:"space-y-4",children:t.jsx(r,{content:s,title:"Module 004_002 Topic 2: Execution Flow",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Printable Note",downloadFileName:"004_002_topic2_execution_flow_note.txt"})}),t.jsx(o,{note:"Notice that in both Case A and Case B, statement [5] after the try-catch block executes! That proves try-catch protects your application from crashing! — Sukanta Hui"})]})}export{y as default};
