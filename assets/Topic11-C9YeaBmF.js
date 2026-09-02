import{j as e}from"./vendor-react-core-Doz9nIC6.js";import{J as n}from"./JavaFileLoader-BfBG3xz_.js";import{F as t}from"./FAQTemplate-BHhlgA96.js";import{P as r}from"./PlainTextPrint-C08xhKA4.js";import{T as a}from"./TeacherSukantaHui-RpFLNJ5A.js";import"./JavaCodeBlock-BwsLxS3r.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-wprqVFW_.js";const i=`/**\r
 * Java Core Tutorial - Module 004_002: Try, Catch, Finally & Flow Control\r
 * Topic 11: The 'return in finally' Anti-Pattern: Value Overriding & Exception Swallowing\r
 * Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
 */\r
\r
package com.coderaccotax.javatutorial.exceptions;\r
\r
public class ReturnInFinallyAntiPatternDemo {\r
\r
    // SEVERE ANTI-PATTERN: Returning inside 'finally' overrides try return:\r
    public static int badReturnOverride() {\r
        try {\r
            return 100; // Expected return\r
        } finally {\r
            return 999; // FATAL: Overrides and destroys the return value of 100!\r
        }\r
    }\r
\r
    // DISASTER ANTI-PATTERN: Returning inside 'finally' SILENTLY SWALLOWS EXCEPTIONS!\r
    public static void dangerousExceptionSwallowing() {\r
        try {\r
            throw new RuntimeException("CRITICAL DATABASE CORRUPTION AT BARRACKPORE HUB!");\r
        } finally {\r
            return; // FATAL: Silently suppresses and discards the thrown RuntimeException!\r
        }\r
    }\r
\r
    public static void main(String[] args) {\r
        System.out.println("==========================================================================");\r
        System.out.println(" TOPIC 11: THE 'return in finally' ANTI-PATTERN - BARRACKPORE");\r
        System.out.println("==========================================================================\\n");\r
\r
        System.out.println(">>> 1. Demonstrating Return Value Destruction:");\r
        int val = badReturnOverride();\r
        System.out.println("  Method returned: " + val + " (Expected 100, but finally returned 999!)");\r
\r
        System.out.println("\\n>>> 2. Demonstrating Silent Exception Swallowing:");\r
        System.out.println("  Calling method that throws RuntimeException...");\r
        dangerousExceptionSwallowing();\r
        System.out.println("  [SHOCKING] Method returned normally! The RuntimeException was completely LOST!");\r
\r
        System.out.println("\\n>>> GOLDEN RULE:");\r
        System.out.println("  NEVER EVER place a 'return', 'break', or 'throw' inside a 'finally' block!");\r
\r
        System.out.println("\\n==========================================================================");\r
    }\r
}`,s=`================================================================================\r
JAVA CORE TUTORIAL - QUICK REVISION GUIDE\r
Module 004_002: Try, Catch, Finally & Flow Control\r
Topic 11: Return in finally Anti-Pattern\r
Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
================================================================================\r
\r
1. THE DANGER OF RETURN IN FINALLY:\r
   - Overrides return values from try and catch.\r
   - Silently swallows propagating exceptions.\r
   - Converts severe crashes into fake successful executions.\r
   - RULE: 'finally' must ONLY perform resource cleanup, never control flow.\r
\r
================================================================================\r
Classroom Practice: Barrackpore Academy | Mentor: Sukanta Hui\r
================================================================================`,o=[{question:"Why is placing a 'return' statement inside a 'finally' block considered one of the most dangerous anti-patterns in Java?",shortAnswer:"1. It silently overwrites and destroys any return value computed in the 'try' or 'catch' blocks. 2. Even worse, if an uncaught exception is being thrown by the 'try' block, a 'return' in 'finally' SILENTLY SWALLOWS and discards the exception entirely as if nothing went wrong, hiding critical bugs.",explanation:"Modern static analysis tools (SonarQube, SpotBugs) flag this as a critical blocker severity violation.",hint:"Overwrites previous return values and silently swallows uncaught exceptions.",level:"Intermediate",codeExample:"// BAD: try { throw new Error(); } finally { return; } // Error is silently lost!"}];function h(){return e.jsxs("div",{className:"space-y-12 px-4 md:px-8 py-8 text-slate-200 bg-slate-900 min-h-screen",children:[e.jsxs("header",{className:"space-y-4 border-b border-slate-800 pb-6",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"px-3 py-1 bg-sky-500/10 text-sky-400 border border-sky-500/20 text-xs font-semibold rounded-full uppercase tracking-wider",children:"Module 004_002 · Topic 11"}),e.jsx("span",{className:"px-3 py-1 bg-rose-500/10 text-rose-400 border border-rose-500/20 text-xs font-semibold rounded-full",children:"Severe Anti-Pattern"})]}),e.jsxs("h1",{className:"text-xl sm:text-2xl md:text-3xl font-bold text-white tracking-tight",children:["Why Returning Values from a ",e.jsx("code",{className:"text-rose-400 font-mono",children:"finally"})," Block is a Dangerous Anti-Pattern"]}),e.jsxs("p",{className:"text-base md:text-lg text-slate-400 leading-relaxed max-w-4xl",children:["Diagnose catastrophic exception swallowing: discovering why ",e.jsx("code",{className:"text-rose-300 font-mono",children:"return"})," in finally overrides previous returns, suppresses runtime crashes, and hides production errors."]})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsxs("h2",{className:"text-2xl font-bold text-emerald-400 flex items-center gap-2",children:[e.jsx("span",{children:"💻"})," Hands-On Java Demo Code"]}),e.jsx(n,{fileModule:i,title:"ReturnInFinallyAntiPatternDemo.java",highlightLines:[7,10,12,13,17,18,20,21]})]}),e.jsx("section",{className:"space-y-4",children:e.jsx(t,{title:"Return in Finally FAQs",questions:o})}),e.jsx("section",{className:"space-y-4",children:e.jsx(r,{content:s,title:"Module 004_002 Topic 11: Return in finally Anti-Pattern",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Printable Note",downloadFileName:"004_002_topic11_return_in_finally_note.txt"})}),e.jsx(a,{note:"Never put 'return' inside a finally block! It will silently delete any exception thrown in try! If your server had a database failure, a return in finally makes Java pretend everything succeeded! — Sukanta Hui"})]})}export{h as default};
