import{j as e}from"./vendor-react-core-Doz9nIC6.js";import{J as t}from"./JavaFileLoader-BfBG3xz_.js";import{F as r}from"./FAQTemplate-BHhlgA96.js";import{P as n}from"./PlainTextPrint-C08xhKA4.js";import{T as a}from"./TeacherSukantaHui-BaJcBHAy.js";import"./JavaCodeBlock-BwsLxS3r.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-8ao-0upJ.js";const o=`/**\r
 * Java Core Tutorial - Module 004_002: Try, Catch, Finally & Flow Control\r
 * Topic 12: Nested try-catch Blocks & Multi-Tier Exception Handling Delegation (Capstone)\r
 * Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
 */\r
\r
package com.coderaccotax.javatutorial.exceptions;\r
\r
public class NestedTryCatchDelegationCapstoneDemo {\r
\r
    public static void executeTwoTierProcessing(String rawNumber, int divisor) {\r
        System.out.println("  [OUTER ENTRY] Starting outer financial calculation tier...");\r
\r
        // OUTER TRY BLOCK: Handles broad system-level lifecycle\r
        try {\r
            int baseAmount = 10000;\r
\r
            // INNER TRY BLOCK 1: Specialized in parsing numbers\r
            int parsedFactor = 1;\r
            try {\r
                System.out.println("    [INNER TIER 1] Parsing input string: '" + rawNumber + "'");\r
                parsedFactor = Integer.parseInt(rawNumber);\r
            } catch (NumberFormatException nfe) {\r
                System.out.println("    [INNER RECOVERY 1] Invalid number format! Defaulted factor to 1.");\r
                parsedFactor = 1;\r
            }\r
\r
            // INNER TRY BLOCK 2: Specialized in arithmetic division\r
            try {\r
                System.out.println("    [INNER TIER 2] Dividing base amount by: " + divisor);\r
                int share = baseAmount / divisor;\r
                System.out.println("    [INNER TIER 2 SUCCESS] Share per student: " + (share * parsedFactor) + " INR");\r
            } catch (ArithmeticException ae) {\r
                System.out.println("    [INNER RECOVERY 2] Cannot divide by zero divisor!");\r
                // Re-throwing to delegate to outer block:\r
                throw new IllegalStateException("Calculation aborted due to zero divisor", ae);\r
            }\r
\r
        } catch (IllegalStateException outerEx) {\r
            System.out.println("  [OUTER CATCH] Outer supervisor caught delegated error: " + outerEx.getMessage());\r
            System.out.println("  [OUTER ROOT CAUSE] " + outerEx.getCause());\r
        } finally {\r
            System.out.println("  [OUTER FINALLY] Multi-tier audit ledger closed.\\n");\r
        }\r
    }\r
\r
    public static void main(String[] args) {\r
        System.out.println("==========================================================================");\r
        System.out.println(" TOPIC 12: NESTED try-catch DELEGATION CAPSTONE - BARRACKPORE");\r
        System.out.println("==========================================================================\\n");\r
\r
        System.out.println(">>> RUN 1: Inner local recovery (Number parsed with fallback):");\r
        executeTwoTierProcessing("invalid_str", 5);\r
\r
        System.out.println(">>> RUN 2: Inner-to-outer delegation (Arithmetic error escalated):");\r
        executeTwoTierProcessing("2", 0);\r
\r
        System.out.println("==========================================================================");\r
        System.out.println(" MODULE 004_002 TRY, CATCH, FINALLY & FLOW CONTROL 100% COMPLETE!");\r
        System.out.println("==========================================================================");\r
    }\r
}`,i=`================================================================================\r
JAVA CORE TUTORIAL - QUICK REVISION GUIDE\r
Module 004_002: Try, Catch, Finally & Flow Control\r
Topic 12: Nested try-catch Delegation Capstone\r
Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
================================================================================\r
\r
1. MODULE 004_002 SUMMARY:\r
   - 'try' guards critical code.\r
   - 'catch' intercepts specific errors; order: Subclass FIRST, Superclass LAST.\r
   - Multi-catch: 'catch (A | B ex)' with implicitly final parameter.\r
   - 'finally' guarantees resource cleanup under all branches.\r
   - 'finally' runs even on 'return', but NOT on 'System.exit(0)'.\r
   - NEVER return from a 'finally' block (swallows exceptions).\r
   - Nested try-catch blocks provide granular multi-tier error delegation.\r
\r
================================================================================\r
Classroom Practice: Barrackpore Academy | Mentor: Sukanta Hui\r
================================================================================`,s=[{question:"When and why should an architect design Nested try-catch blocks in Java?",shortAnswer:"Nested try-catch blocks are used when an inner operation has a localized fallback (e.g. default value if parsing fails) that should NOT abort the larger surrounding transaction, OR when an inner block handles a low-level error and re-throws a wrapped domain exception to be handled by the outer supervisor.",explanation:"Provides granular error handling without aborting entire composite routines.",hint:"Allows fine-grained local recovery without aborting the larger surrounding task.",level:"Advanced",codeExample:"try { try { parse(); } catch(NFE e) { defaultVal(); } divide(); } catch(Ex e) {}"}];function y(){return e.jsxs("div",{className:"space-y-12 px-4 md:px-8 py-8 text-slate-200 bg-slate-900 min-h-screen",children:[e.jsxs("header",{className:"space-y-4 border-b border-slate-800 pb-6",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"px-3 py-1 bg-sky-500/10 text-sky-400 border border-sky-500/20 text-xs font-semibold rounded-full uppercase tracking-wider",children:"Module 004_002 · Topic 12"}),e.jsx("span",{className:"px-3 py-1 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-xs font-semibold rounded-full",children:"Flow Control Capstone"})]}),e.jsxs("h1",{className:"text-xl sm:text-2xl md:text-3xl font-bold text-white tracking-tight",children:["Nested ",e.jsx("code",{className:"text-emerald-400 font-mono",children:"try-catch"})," Blocks & Multi-Tier Exception Delegation (Capstone)"]}),e.jsx("p",{className:"text-base md:text-lg text-slate-400 leading-relaxed max-w-4xl",children:"Synthesize flow control mastery: orchestrating multi-tiered nested error recovery, local fallbacks, and escalating failures to outer supervisor catch blocks."})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsxs("h2",{className:"text-2xl font-bold text-emerald-400 flex items-center gap-2",children:[e.jsx("span",{children:"💻"})," Hands-On Java Demo Code"]}),e.jsx(t,{fileModule:o,title:"NestedTryCatchDelegationCapstoneDemo.java",highlightLines:[7,12,17,18,20,21,26,27,30,31,35,36,39]})]}),e.jsx("section",{className:"space-y-4",children:e.jsx(r,{title:"Nested Try-Catch FAQs",questions:s})}),e.jsx("section",{className:"space-y-4",children:e.jsx(n,{content:i,title:"Module 004_002 Topic 12: Nested try-catch Capstone",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Printable Note",downloadFileName:"004_002_topic12_nested_try_catch_note.txt"})}),e.jsx(a,{note:"Congratulations on completing Module 004_002! You have mastered try, multiple catch blocks, ordering rules, Java 7 multi-catch, guaranteed finally execution, return corner cases, and nested delegation! — Sukanta Hui"})]})}export{y as default};
