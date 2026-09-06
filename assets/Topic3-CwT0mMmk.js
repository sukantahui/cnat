import{j as e}from"./vendor-react-core-Doz9nIC6.js";import{J as t}from"./JavaFileLoader-BfBG3xz_.js";import{F as n}from"./FAQTemplate-BHhlgA96.js";import{P as r}from"./PlainTextPrint-C08xhKA4.js";import{T as a}from"./TeacherSukantaHui-DDN87fI5.js";import"./JavaCodeBlock-BwsLxS3r.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-DEsnU7fn.js";const o=`/**\r
 * Java Core Tutorial - Module 004_002: Try, Catch, Finally & Flow Control\r
 * Topic 3: Multiple Catch Blocks: Handling Diverse Failure Scenarios Independently\r
 * Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
 */\r
\r
package com.coderaccotax.javatutorial.exceptions;\r
\r
public class MultipleCatchBlocksDemo {\r
\r
    public static void executeMultiScenario(String[] rawInputs, int index) {\r
        System.out.printf("  [INVOCATION] Array Length: %d, Accessing Index: %d%n", rawInputs.length, index);\r
\r
        try {\r
            // Risky Operation 1: Array access (May throw ArrayIndexOutOfBoundsException)\r
            String targetElement = rawInputs[index];\r
\r
            // Risky Operation 2: String length on potential null (May throw NullPointerException)\r
            int len = targetElement.length();\r
\r
            // Risky Operation 3: Number parsing (May throw NumberFormatException)\r
            int parsedScore = Integer.parseInt(targetElement);\r
\r
            // Risky Operation 4: Division (May throw ArithmeticException)\r
            int bonus = 100 / parsedScore;\r
\r
            System.out.println("  [SUCCESS] Calculated Bonus: " + bonus);\r
\r
        } catch (ArrayIndexOutOfBoundsException e) {\r
            System.out.println("  [HANDLER 1] Invalid array index provided: " + e.getMessage());\r
        } catch (NullPointerException e) {\r
            System.out.println("  [HANDLER 2] Found null element at index " + index);\r
        } catch (NumberFormatException e) {\r
            System.out.println("  [HANDLER 3] Cannot parse string to integer: " + e.getMessage());\r
        } catch (ArithmeticException e) {\r
            System.out.println("  [HANDLER 4] Cannot divide bonus by zero score!");\r
        }\r
\r
        System.out.println("  [STATUS] Finished handling scenario.\\n");\r
    }\r
\r
    public static void main(String[] args) {\r
        System.out.println("==========================================================================");\r
        System.out.println(" TOPIC 3: MULTIPLE CATCH BLOCKS - BARRACKPORE");\r
        System.out.println("==========================================================================\\n");\r
\r
        String[] batchData = { "50", "0", "Naihati", null };\r
\r
        System.out.println(">>> Scenario 1 (Valid calculation):");\r
        executeMultiScenario(batchData, 0); // 100 / 50 = 2\r
\r
        System.out.println(">>> Scenario 2 (ArithmeticException):");\r
        executeMultiScenario(batchData, 1); // 100 / 0\r
\r
        System.out.println(">>> Scenario 3 (NumberFormatException):");\r
        executeMultiScenario(batchData, 2); // parse "Naihati"\r
\r
        System.out.println(">>> Scenario 4 (NullPointerException):");\r
        executeMultiScenario(batchData, 3); // null.length()\r
\r
        System.out.println(">>> Scenario 5 (ArrayIndexOutOfBoundsException):");\r
        executeMultiScenario(batchData, 99); // index 99 out of bounds\r
\r
        System.out.println("==========================================================================");\r
    }\r
}`,i=`================================================================================\r
JAVA CORE TUTORIAL - QUICK REVISION GUIDE\r
Module 004_002: Try, Catch, Finally & Flow Control\r
Topic 3: Multiple Catch Blocks\r
Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
================================================================================\r
\r
1. MULTIPLE CATCH RULES:\r
   - A single try block can have multiple catch blocks.\r
   - Evaluated from top to bottom.\r
   - Exactly one matching catch block executes.\r
   - Allows independent recovery actions per failure type.\r
\r
================================================================================\r
Classroom Practice: Barrackpore Academy | Mentor: Sukanta Hui\r
================================================================================`,c=[{question:"How does the JVM select which 'catch' block to execute when multiple catch blocks are chained after a single 'try'?",shortAnswer:"The JVM checks the catch blocks in TOP-TO-BOTTOM sequential order. It executes the FIRST catch block whose declared exception type matches or is a superclass of the thrown exception object. Only ONE catch block is ever executed per try invocation.",explanation:"Once a matching catch block finishes, all subsequent catch blocks are skipped.",hint:"Evaluated top-to-bottom; exactly one matching catch block executes.",level:"Beginner",codeExample:"try { ... } catch (TypeA a) { ... } catch (TypeB b) { ... }"}];function y(){return e.jsxs("div",{className:"space-y-12 px-4 md:px-8 py-8 text-slate-200 bg-slate-900 min-h-screen",children:[e.jsxs("header",{className:"space-y-4 border-b border-slate-800 pb-6",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"px-3 py-1 bg-sky-500/10 text-sky-400 border border-sky-500/20 text-xs font-semibold rounded-full uppercase tracking-wider",children:"Module 004_002 · Topic 3"}),e.jsx("span",{className:"px-3 py-1 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-xs font-semibold rounded-full",children:"Specialized Handlers"})]}),e.jsxs("h1",{className:"text-xl sm:text-2xl md:text-3xl font-bold text-white tracking-tight",children:["Multiple ",e.jsx("code",{className:"text-emerald-400 font-mono",children:"catch"})," Blocks: Handling Diverse Failure Scenarios Independently"]}),e.jsx("p",{className:"text-base md:text-lg text-slate-400 leading-relaxed max-w-4xl",children:"Build multi-lane error recovery: routing array index bounds, null pointers, and number format errors to dedicated recovery handlers."})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsxs("h2",{className:"text-2xl font-bold text-emerald-400 flex items-center gap-2",children:[e.jsx("span",{children:"💻"})," Hands-On Java Demo Code"]}),e.jsx(t,{fileModule:o,title:"MultipleCatchBlocksDemo.java",highlightLines:[7,10,13,16,19,22,26,28,30,32]})]}),e.jsx("section",{className:"space-y-4",children:e.jsx(n,{title:"Multiple Catch FAQs",questions:c})}),e.jsx("section",{className:"space-y-4",children:e.jsx(r,{content:i,title:"Module 004_002 Topic 3: Multiple Catch Blocks",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Printable Note",downloadFileName:"004_002_topic3_multiple_catch_blocks_note.txt"})}),e.jsx(a,{note:"Multiple catch blocks allow you to tailor your response! For a NumberFormatException, you ask the user to re-type the input; for a DatabaseException, you reconnect! Different problems get different solutions! — Sukanta Hui"})]})}export{y as default};
