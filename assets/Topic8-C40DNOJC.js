import{j as e}from"./vendor-react-core-Doz9nIC6.js";import{J as t}from"./JavaFileLoader-BfBG3xz_.js";import{F as r}from"./FAQTemplate-BHhlgA96.js";import{P as n}from"./PlainTextPrint-C08xhKA4.js";import{T as a}from"./TeacherSukantaHui-DerPxfxp.js";import"./JavaCodeBlock-BwsLxS3r.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-CH1iX9C8.js";const o=`/**\r
 * Java Core Tutorial - Module 004_005: Propagation, Chaining & Best Practices\r
 * Topic 8: The 'Catch Generic Throwable/Exception' Anti-Pattern\r
 * Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
 */\r
\r
package com.coderaccotax.javatutorial.exceptions;\r
\r
public class CatchGenericThrowableAntiPatternDemo {\r
\r
    // ANTI-PATTERN 1: Catching 'Throwable' (Swallows OutOfMemoryError and ThreadDeath):\r
    public static void dangerousCatchThrowable() {\r
        try {\r
            // Risky operation\r
            String text = null;\r
            text.toLowerCase();\r
        } catch (Throwable t) {\r
            // DANGEROUS: Intercepts fatal JVM Errors like OutOfMemoryError or StackOverflowError!\r
            System.out.println("  [DANGEROUS] Intercepted Throwable: " + t.getClass().getSimpleName());\r
        }\r
    }\r
\r
    // BEST PRACTICE: Catch specific, intended exceptions:\r
    public static void specificCleanCatch() {\r
        try {\r
            String text = null;\r
            text.toLowerCase();\r
        } catch (NullPointerException e) {\r
            System.out.println("  [BEST PRACTICE] Caught specific NullPointerException.");\r
        }\r
    }\r
\r
    public static void main(String[] args) {\r
        System.out.println("==========================================================================");\r
        System.out.println(" TOPIC 8: CATCH GENERIC THROWABLE ANTI-PATTERN - BARRACKPORE");\r
        System.out.println("==========================================================================\\n");\r
\r
        System.out.println(">>> 1. Dangerous Generic Catch Throwable:");\r
        dangerousCatchThrowable();\r
\r
        System.out.println("\\n>>> 2. Clean Specific Catch:");\r
        specificCleanCatch();\r
\r
        System.out.println("\\n>>> WHY CATCHING THROWABLE IS DANGEROUS:");\r
        System.out.println("  1. 'Throwable' includes 'java.lang.Error' (OutOfMemoryError, InternalError).");\r
        System.out.println("  2. Swallowing Errors traps the JVM in a damaged, corrupted state without recovery.");\r
        System.out.println("  3. Always catch specific domain exceptions or at most 'Exception' at the outermost boundary.");\r
\r
        System.out.println("\\n==========================================================================");\r
    }\r
}`,i=`================================================================================\r
JAVA CORE TUTORIAL - QUICK REVISION GUIDE\r
Module 004_005: Propagation, Chaining & Best Practices\r
Topic 8: Catch Generic Throwable Anti-Pattern\r
Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
================================================================================\r
\r
1. ANTI-PATTERN RULES:\r
   - NEVER catch 'Throwable' (catches fatal JVM Errors).\r
   - Avoid catching generic 'Exception' in low-level business methods.\r
   - Catch specific exceptions (e.g. 'IOException', 'SQLException').\r
   - Only global frameworks (like Spring) catch generic Exception at API boundaries.\r
\r
================================================================================\r
Classroom Practice: Barrackpore Academy | Mentor: Sukanta Hui\r
================================================================================`,s=[{question:"Why should developers NEVER catch 'java.lang.Throwable' in business code?",shortAnswer:"'Throwable' is the superclass of 'java.lang.Error'. Catching Throwable intercepts catastrophic JVM failures like OutOfMemoryError, StackOverflowError, and ThreadDeath. When these are caught in application code, the JVM is prevented from crashing cleanly and is left running in an unstable, corrupted memory state.",explanation:"Only top-level framework infrastructure should ever catch Throwable.",hint:"Catches fatal JVM Errors, preventing clean restarts and leaving memory corrupted.",level:"Intermediate",codeExample:"// BAD: catch (Throwable t) { ... } // Catches OutOfMemoryError!"}];function T(){return e.jsxs("div",{className:"space-y-12 px-4 md:px-8 py-8 text-slate-200 bg-slate-900 min-h-screen",children:[e.jsxs("header",{className:"space-y-4 border-b border-slate-800 pb-6",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"px-3 py-1 bg-sky-500/10 text-sky-400 border border-sky-500/20 text-xs font-semibold rounded-full uppercase tracking-wider",children:"Module 004_005 · Topic 8"}),e.jsx("span",{className:"px-3 py-1 bg-rose-500/10 text-rose-400 border border-rose-500/20 text-xs font-semibold rounded-full",children:"Anti-Pattern"})]}),e.jsxs("h1",{className:"text-xl sm:text-2xl md:text-3xl font-bold text-white tracking-tight",children:["The ",e.jsx("code",{className:"text-rose-400 font-mono",children:"'Catch Generic Throwable/Exception'"})," Anti-Pattern"]}),e.jsxs("p",{className:"text-base md:text-lg text-slate-400 leading-relaxed max-w-4xl",children:["Maintain JVM stability: discovering why catching ",e.jsx("code",{className:"text-rose-300 font-mono",children:"Throwable"})," traps the JVM in corrupt memory states and learning precise exception filtering."]})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsxs("h2",{className:"text-2xl font-bold text-emerald-400 flex items-center gap-2",children:[e.jsx("span",{children:"💻"})," Hands-On Java Demo Code"]}),e.jsx(t,{fileModule:o,title:"CatchGenericThrowableAntiPatternDemo.java",highlightLines:[7,10,14,15,20,23,24]})]}),e.jsx("section",{className:"space-y-4",children:e.jsx(r,{title:"Catch Generic FAQs",questions:s})}),e.jsx("section",{className:"space-y-4",children:e.jsx(n,{content:i,title:"Module 004_005 Topic 8: Catch Generic Throwable",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Printable Note",downloadFileName:"004_005_topic8_catch_generic_throwable_note.txt"})}),e.jsx(a,{note:"Catching Throwable is dangerous because if the JVM runs out of memory (OutOfMemoryError), your catch block catches it and tries to keep running! Always catch specific exceptions! — Sukanta Hui"})]})}export{T as default};
