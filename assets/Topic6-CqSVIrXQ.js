import{j as e}from"./vendor-react-core-Doz9nIC6.js";import{J as t}from"./JavaFileLoader-BfBG3xz_.js";import{F as r}from"./FAQTemplate-BHhlgA96.js";import{P as n}from"./PlainTextPrint-C08xhKA4.js";import{T as o}from"./TeacherSukantaHui-BaJcBHAy.js";import"./JavaCodeBlock-BwsLxS3r.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-8ao-0upJ.js";const a=`/**\r
 * Java Core Tutorial - Module 004_005: Propagation, Chaining & Best Practices\r
 * Topic 6: The 'Log and Throw' Anti-Pattern: Preventing Log Clutter & Duplicate Alerts\r
 * Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
 */\r
\r
package com.coderaccotax.javatutorial.exceptions;\r
\r
public class LogAndThrowAntiPatternDemo {\r
\r
    // ANTI-PATTERN: Logging the error AND rethrowing it at every layer!\r
    public static void badDataLayer() {\r
        try {\r
            int err = 10 / 0;\r
        } catch (ArithmeticException e) {\r
            System.out.println("  [BAD LOG LAYER 1 - DAO] Error occurred: " + e.getMessage());\r
            throw e; // RETHROWING AFTER LOGGING!\r
        }\r
    }\r
\r
    public static void badServiceLayer() {\r
        try {\r
            badDataLayer();\r
        } catch (ArithmeticException e) {\r
            System.out.println("  [BAD LOG LAYER 2 - SERVICE] Error in service: " + e.getMessage());\r
            throw e; // RETHROWING AFTER LOGGING AGAIN!\r
        }\r
    }\r
\r
    // BEST PRACTICE: Handle OR Rethrow - NEVER BOTH!\r
    public static void cleanController() {\r
        try {\r
            badServiceLayer();\r
        } catch (ArithmeticException e) {\r
            // ONLY the outermost boundary logs the complete error once:\r
            System.out.println("  [CLEAN LOG - CONTROLLER BOUNDARY ONLY] Error handled once with full trace: " + e.getMessage());\r
        }\r
    }\r
\r
    public static void main(String[] args) {\r
        System.out.println("==========================================================================");\r
        System.out.println(" TOPIC 6: THE 'LOG AND THROW' ANTI-PATTERN - BARRACKPORE");\r
        System.out.println("==========================================================================\\n");\r
\r
        System.out.println(">>> Executing Request with Log-and-Throw Clutter:");\r
        cleanController();\r
\r
        System.out.println("\\n>>> THE GOLDEN LOGGING RULE:");\r
        System.out.println("  Either HANDLE the exception (and log it), OR RETHROW it (so the caller can handle it).");\r
        System.out.println("  NEVER DO BOTH! Doing both multiplies log noise by 5x and triggers false alarm storms in monitoring!");\r
\r
        System.out.println("\\n==========================================================================");\r
    }\r
}`,i=`================================================================================\r
JAVA CORE TUTORIAL - QUICK REVISION GUIDE\r
Module 004_005: Propagation, Chaining & Best Practices\r
Topic 6: Log and Throw Anti-Pattern\r
Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
================================================================================\r
\r
1. THE GOLDEN RULE OF LOGGING:\r
   - Handle OR Throw → NEVER BOTH.\r
   - Logging + Rethrowing creates N identical stack traces in logs.\r
   - Let exceptions bubble to the top boundary (Controller) and log once.\r
\r
================================================================================\r
Classroom Practice: Barrackpore Academy | Mentor: Sukanta Hui\r
================================================================================`,s=[{question:"Why is 'Log and Throw' (logging an exception in a catch block and then immediately rethrowing it) considered a severe anti-pattern?",shortAnswer:"Because if every method layer in a call stack logs and rethrows the exception, a single failure produces duplicate 50-line stack traces in log files at every layer (DAO, Service, Controller). This floods log storage, clutters debugging, and triggers duplicate alert storms in monitoring systems like Splunk or Datadog.",explanation:"The golden rule is: 'Handle or Propagate, Never Both'.",hint:"Causes duplicate log spam across multiple layers and triggers false monitoring alerts.",level:"Intermediate",codeExample:"// BAD: catch(Ex e) { log.error(e); throw e; } // Logged multiple times!"}];function x(){return e.jsxs("div",{className:"space-y-12 px-4 md:px-8 py-8 text-slate-200 bg-slate-900 min-h-screen",children:[e.jsxs("header",{className:"space-y-4 border-b border-slate-800 pb-6",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"px-3 py-1 bg-sky-500/10 text-sky-400 border border-sky-500/20 text-xs font-semibold rounded-full uppercase tracking-wider",children:"Module 004_005 · Topic 6"}),e.jsx("span",{className:"px-3 py-1 bg-rose-500/10 text-rose-400 border border-rose-500/20 text-xs font-semibold rounded-full",children:"Logging Anti-Pattern"})]}),e.jsxs("h1",{className:"text-xl sm:text-2xl md:text-3xl font-bold text-white tracking-tight",children:["The ",e.jsx("code",{className:"text-rose-400 font-mono",children:"'Log and Throw'"})," Anti-Pattern: Preventing Log Clutter & Alert Storms"]}),e.jsx("p",{className:"text-base md:text-lg text-slate-400 leading-relaxed max-w-4xl",children:"Clean up enterprise observability: learning why you must choose between handling an error or rethrowing it, preventing duplicate multi-tier stack trace pollution."})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsxs("h2",{className:"text-2xl font-bold text-emerald-400 flex items-center gap-2",children:[e.jsx("span",{children:"💻"})," Hands-On Java Demo Code"]}),e.jsx(t,{fileModule:a,title:"LogAndThrowAntiPatternDemo.java",highlightLines:[7,10,12,13,17,20,21,26,29]})]}),e.jsx("section",{className:"space-y-4",children:e.jsx(r,{title:"Log and Throw FAQs",questions:s})}),e.jsx("section",{className:"space-y-4",children:e.jsx(n,{content:i,title:"Module 004_005 Topic 6: Log and Throw Anti-Pattern",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Printable Note",downloadFileName:"004_005_topic6_log_and_throw_note.txt"})}),e.jsx(o,{note:"If your DAO logs an error, your Service logs the error, and your Controller logs the error, you get 3 identical error alerts at 3 AM for 1 single bug! Log it ONCE at the top boundary! — Sukanta Hui"})]})}export{x as default};
