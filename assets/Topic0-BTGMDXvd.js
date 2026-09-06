import{j as e}from"./vendor-react-core-Doz9nIC6.js";import{J as t}from"./JavaFileLoader-BfBG3xz_.js";import{F as n}from"./FAQTemplate-BHhlgA96.js";import{P as r}from"./PlainTextPrint-C08xhKA4.js";import{T as a}from"./TeacherSukantaHui-DDN87fI5.js";import"./JavaCodeBlock-BwsLxS3r.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-DEsnU7fn.js";const o=`/**\r
 * Java Core Tutorial - Module 004_005: Propagation, Chaining & Best Practices\r
 * Topic 0: Exception Propagation: How Unhandled Errors Bubble Up the Call Stack\r
 * Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
 */\r
\r
package com.coderaccotax.javatutorial.exceptions;\r
\r
public class ExceptionPropagationBubblingDemo {\r
\r
    // Method Level 3 (Deepest in call stack):\r
    public static void methodLevel3_LowLevelIO() {\r
        System.out.println("    [LEVEL 3] Reached deepest method. Triggering ArithmeticException (100 / 0)...");\r
        int fault = 100 / 0; // Unhandled here! Bubbles up to Level 2!\r
        System.out.println("    [LEVEL 3] This line will NEVER execute!");\r
    }\r
\r
    // Method Level 2 (Intermediate layer):\r
    public static void methodLevel2_BusinessService() {\r
        System.out.println("  [LEVEL 2] Invoking Level 3...");\r
        methodLevel3_LowLevelIO(); // Unhandled here! Bubbles up to Level 1!\r
        System.out.println("  [LEVEL 2] This line will NEVER execute!");\r
    }\r
\r
    // Method Level 1 (Top application layer with try-catch):\r
    public static void methodLevel1_Controller() {\r
        System.out.println("[LEVEL 1] Controller initiating request...");\r
        try {\r
            methodLevel2_BusinessService();\r
        } catch (ArithmeticException e) {\r
            System.out.println("[LEVEL 1 CATCH] Intercepted propagated error: " + e.getMessage());\r
        }\r
        System.out.println("[LEVEL 1] Controller completed gracefully.");\r
    }\r
\r
    public static void main(String[] args) {\r
        System.out.println("==========================================================================");\r
        System.out.println(" TOPIC 0: EXCEPTION PROPAGATION BUBBLING - BARRACKPORE");\r
        System.out.println("==========================================================================\\n");\r
\r
        System.out.println(">>> Tracing Call Stack Propagation (Level 3 -> Level 2 -> Level 1):");\r
        methodLevel1_Controller();\r
\r
        System.out.println("\\n>>> HOW PROPAGATION WORKS:");\r
        System.out.println("  1. When an exception occurs in Level 3, the JVM looks for a local try-catch.");\r
        System.out.println("  2. Finding none, Level 3 stack frame is popped, and the error bubbles to Level 2.");\r
        System.out.println("  3. Finding none in Level 2, it bubbles to Level 1, where the catch block intercepts it!");\r
\r
        System.out.println("\\n==========================================================================");\r
    }\r
}`,i=`================================================================================\r
JAVA CORE TUTORIAL - QUICK REVISION GUIDE\r
Module 004_005: Propagation, Chaining & Best Practices\r
Topic 0: Exception Propagation\r
Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
================================================================================\r
\r
1. EXCEPTION PROPAGATION:\r
   - Starts at the failing line in method N.\r
   - Searches local try-catch; if absent, method terminates immediately.\r
   - Bubbles up to caller method (N-1).\r
   - Repeats until caught or JVM Default Exception Handler terminates the thread.\r
\r
================================================================================\r
Classroom Practice: Barrackpore Academy | Mentor: Sukanta Hui\r
================================================================================`,l=[{question:"What is 'Exception Propagation' in Java and what happens to the method call stack during propagation?",shortAnswer:"When an exception occurs inside a method that lacks a matching 'catch' block, the JVM immediately drops (unwinds) the current method stack frame and passes (bubbles) the active exception object up to the calling method. This process repeats up the call stack until an enclosing catch block is found or the main thread terminates.",explanation:"Allows low-level errors to be handled centrally at higher architectural layers.",hint:"Unhandled exceptions bubble up the call stack, popping stack frames until caught.",level:"Beginner",codeExample:"// Level3 (fails) → Level2 (propagates) → Level1 (catches)"}];function g(){return e.jsxs("div",{className:"space-y-12 px-4 md:px-8 py-8 text-slate-200 bg-slate-900 min-h-screen",children:[e.jsxs("header",{className:"space-y-4 border-b border-slate-800 pb-6",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"px-3 py-1 bg-sky-500/10 text-sky-400 border border-sky-500/20 text-xs font-semibold rounded-full uppercase tracking-wider",children:"Module 004_005 · Topic 0"}),e.jsx("span",{className:"px-3 py-1 bg-indigo-500/10 text-indigo-400 border border-indigo-500/20 text-xs font-semibold rounded-full",children:"Stack Bubbling"})]}),e.jsx("h1",{className:"text-xl sm:text-2xl md:text-3xl font-bold text-white tracking-tight",children:"Exception Propagation: How Unhandled Errors Bubble Up the Call Stack"}),e.jsx("p",{className:"text-base md:text-lg text-slate-400 leading-relaxed max-w-4xl",children:"Trace call-stack error ascension: understanding how runtime exceptions bubble from deep data access layers up through business services to top-level controllers."})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsxs("h2",{className:"text-2xl font-bold text-emerald-400 flex items-center gap-2",children:[e.jsx("span",{children:"💻"})," Hands-On Java Demo Code"]}),e.jsx(t,{fileModule:o,title:"ExceptionPropagationBubblingDemo.java",highlightLines:[7,10,11,16,17,23,24,25,26]})]}),e.jsx("section",{className:"space-y-4",children:e.jsx(n,{title:"Propagation FAQs",questions:l})}),e.jsx("section",{className:"space-y-4",children:e.jsx(r,{content:i,title:"Module 004_005 Topic 0: Exception Propagation",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Printable Note",downloadFileName:"004_005_topic0_exception_propagation_note.txt"})}),e.jsx(a,{note:"Think of exception propagation like passing a hot potato! If Method 3 can't hold it, it throws it to Method 2, which throws it to Method 1! If nobody catches it, the main thread drops it and crashes! — Sukanta Hui"})]})}export{g as default};
