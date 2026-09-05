import{j as e}from"./vendor-react-core-Doz9nIC6.js";import{J as t}from"./JavaFileLoader-BfBG3xz_.js";import{F as n}from"./FAQTemplate-BHhlgA96.js";import{P as a}from"./PlainTextPrint-C08xhKA4.js";import{T as r}from"./TeacherSukantaHui-DerPxfxp.js";import"./JavaCodeBlock-BwsLxS3r.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-CH1iX9C8.js";const o=`/**\r
 * Java Core Tutorial - Module 004_005: Propagation, Chaining & Best Practices\r
 * Topic 7: The 'Swallow and Ignore' Anti-Pattern: Silent Data Corruption & Empty Catches\r
 * Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
 */\r
\r
package com.coderaccotax.javatutorial.exceptions;\r
\r
public class SwallowAndIgnoreAntiPatternDemo {\r
\r
    // CATASTROPHIC ANTI-PATTERN: Empty Catch Block (Swallowing exceptions):\r
    public static void processTraineeFeePayment(String studentName, int amount) {\r
        try {\r
            // Risky financial operation:\r
            if (amount < 0) {\r
                throw new IllegalArgumentException("Negative payment amount: " + amount);\r
            }\r
            System.out.println("  [PAID] Processed " + amount + " INR for " + studentName);\r
        } catch (Exception e) {\r
            // EMPTY CATCH BLOCK: The exception is swallowed in total silence!\r
            // No logging, no rethrowing, no user notification!\r
        }\r
    }\r
\r
    public static void main(String[] args) {\r
        System.out.println("==========================================================================");\r
        System.out.println(" TOPIC 7: THE 'SWALLOW & IGNORE' ANTI-PATTERN - BARRACKPORE");\r
        System.out.println("==========================================================================\\n");\r
\r
        System.out.println(">>> Executing Method with Empty Catch Block:");\r
        processTraineeFeePayment("Swadeep Paul", -5000);\r
\r
        System.out.println("  [OUTPUT] Notice that the program continued with ZERO warnings or errors!");\r
        System.out.println("  [REALITY] The negative payment failed silently, corrupting accounts and leaving zero audit trace!");\r
\r
        System.out.println("\\n>>> EFFECTIVE JAVA ITEM 77 MANDATE:");\r
        System.out.println("  'An empty catch block defeats the entire purpose of exceptions.'");\r
        System.out.println("  If an exception should genuinely be ignored, the catch block MUST contain an explicit explanatory comment!");\r
\r
        System.out.println("\\n==========================================================================");\r
    }\r
}`,i=`================================================================================\r
JAVA CORE TUTORIAL - QUICK REVISION GUIDE\r
Module 004_005: Propagation, Chaining & Best Practices\r
Topic 7: Swallow and Ignore Anti-Pattern\r
Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
================================================================================\r
\r
1. SWALLOWING ANTI-PATTERN:\r
   - 'catch (Exception e) {}' with empty body.\r
   - Masks bugs and causes silent data corruption.\r
   - Mandatory: At minimum, log the exception or throw a RuntimeException.\r
\r
================================================================================\r
Classroom Practice: Barrackpore Academy | Mentor: Sukanta Hui\r
================================================================================`,s=[{question:"Why does Effective Java Item 77 state: 'Do not ignore exceptions' and why is an empty catch block considered disastrous?",shortAnswer:"An empty catch block silently ignores the exception as if nothing went wrong. The program continues executing with corrupted data, missing records, and invalid state with zero logs or alerts, turning simple bugs into impossible-to-diagnose production nightmares.",explanation:"SonarQube flags empty catch blocks as critical major security code smells.",hint:"Empty catch blocks cause silent failures, data corruption, and impossible-to-debug defects.",level:"Beginner",codeExample:"// NEVER DO THIS: catch (Exception e) {} // Silent disaster!"}];function g(){return e.jsxs("div",{className:"space-y-12 px-4 md:px-8 py-8 text-slate-200 bg-slate-900 min-h-screen",children:[e.jsxs("header",{className:"space-y-4 border-b border-slate-800 pb-6",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"px-3 py-1 bg-sky-500/10 text-sky-400 border border-sky-500/20 text-xs font-semibold rounded-full uppercase tracking-wider",children:"Module 004_005 · Topic 7"}),e.jsx("span",{className:"px-3 py-1 bg-rose-500/10 text-rose-400 border border-rose-500/20 text-xs font-semibold rounded-full",children:"Silent Bug Threat"})]}),e.jsxs("h1",{className:"text-xl sm:text-2xl md:text-3xl font-bold text-white tracking-tight",children:["The ",e.jsx("code",{className:"text-rose-400 font-mono",children:"'Swallow & Ignore'"})," Anti-Pattern: Silent Data Corruption"]}),e.jsx("p",{className:"text-base md:text-lg text-slate-400 leading-relaxed max-w-4xl",children:"Apply Effective Java Item 77: discovering why empty catch blocks defeat the entire purpose of exceptions and turn easily fixable errors into silent production disasters."})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsxs("h2",{className:"text-2xl font-bold text-emerald-400 flex items-center gap-2",children:[e.jsx("span",{children:"💻"})," Hands-On Java Demo Code"]}),e.jsx(t,{fileModule:o,title:"SwallowAndIgnoreAntiPatternDemo.java",highlightLines:[7,10,11,12,14,15,16]})]}),e.jsx("section",{className:"space-y-4",children:e.jsx(n,{title:"Swallowing Exceptions FAQs",questions:s})}),e.jsx("section",{className:"space-y-4",children:e.jsx(a,{content:i,title:"Module 004_005 Topic 7: Swallow and Ignore Anti-Pattern",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Printable Note",downloadFileName:"004_005_topic7_swallow_and_ignore_note.txt"})}),e.jsx(r,{note:"Writing 'catch (Exception e) {}' is like seeing a fire alarm flashing in your building and putting tape over the speaker so you can't hear it! Never swallow exceptions! — Sukanta Hui"})]})}export{g as default};
