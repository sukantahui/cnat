import{j as e}from"./vendor-react-core-Doz9nIC6.js";import{J as t}from"./JavaFileLoader-BfBG3xz_.js";import{F as r}from"./FAQTemplate-BHhlgA96.js";import{P as n}from"./PlainTextPrint-C08xhKA4.js";import{T as a}from"./TeacherSukantaHui-DDN87fI5.js";import"./JavaCodeBlock-BwsLxS3r.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-DEsnU7fn.js";const l=`/**\r
 * Java Core Tutorial - Module 012_005: Interview Mastery & Tricky MCQs\r
 * Topic 5: Tricky Riddle 6 - try-catch-finally Return Value Overrides\r
 * Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
 */\r
\r
package com.coderaccotax.javatutorial.interview;\r
\r
public class TrickyRiddle6TryCatchFinallyReturnsDemo {\r
\r
    public static int testReturnOverride() {\r
        try {\r
            return 10;\r
        } finally {\r
            return 20; // OVERWRITES the 10 from try block!\r
        }\r
    }\r
\r
    public static int testExceptionSwallowed() {\r
        try {\r
            throw new RuntimeException("Fatal Error!");\r
        } finally {\r
            return 999; // SILENTLY SWALLOWS the RuntimeException!\r
        }\r
    }\r
\r
    public static void main(String[] args) {\r
        System.out.println("==========================================================================");\r
        System.out.println(" TRICKY RIDDLE 6: FINALLY RETURN OVERRIDES - BARRACKPORE");\r
        System.out.println("==========================================================================\\n");\r
\r
        System.out.println("1. testReturnOverride() output   -> " + testReturnOverride()); // 20\r
        System.out.println("2. testExceptionSwallowed() output -> " + testExceptionSwallowed()); // 999 (No Exception thrown!)\r
\r
        System.out.println("\r
WARNING: Returning from a finally block suppresses all pending exceptions");\r
        System.out.println("and overwrites all try/catch return statements.");\r
\r
        System.out.println("\\n==========================================================================");\r
    }\r
}\r
`,i=`================================================================================\r
JAVA CORE TUTORIAL - QUICK REVISION GUIDE\r
Module 012_005: Interview Mastery & Tricky MCQs\r
Topic 5: Tricky Riddle 6 - try-catch-finally Return Overrides\r
Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
================================================================================\r
\r
1. FINALLY EXECUTION GUARANTEES:\r
   - 'finally' block executes regardless of normal completion or exception throwing.\r
   - If 'finally' contains a 'return', it overwrites previous 'return' statements.\r
   - If an exception was thrown in 'try', a 'finally' return discards the exception!\r
   - Anti-Pattern: Never place 'return' or 'throw' inside a finally block.\r
\r
================================================================================\r
Classroom Practice: Barrackpore Academy | Mentor: Sukanta Hui\r
================================================================================\r
`,s=[{question:"What happens if both try and finally blocks execute a return statement?",shortAnswer:"The return statement in the finally block overwrites and discards the return value from the try block, returning the finally value to the caller.",explanation:"Finally block has the last word on control flow return values.",hint:"Finally block return statement supersedes the try block return.",level:"Beginner",codeExample:"try { return 1; } finally { return 2; } // returns 2"},{question:"Is there any scenario where a finally block will NOT execute?",shortAnswer:"Yes: 1) If System.exit() is called, 2) If the JVM encounters a fatal crash/SIGKILL, 3) If an infinite loop or deadlock freezes the try block thread.",explanation:"Extreme JVM termination cases where finally is bypassed.",hint:"System.exit(), fatal JVM abort/crash, or unyielding infinite loop.",level:"Intermediate",codeExample:"System.exit(0); // Finally will NOT run"}];function h(){return e.jsxs("div",{className:"space-y-12 px-4 md:px-8 py-8 text-slate-200 bg-slate-900 min-h-screen",children:[e.jsxs("header",{className:"space-y-4 border-b border-slate-800 pb-6",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"px-3 py-1 bg-sky-500/10 text-sky-400 border border-sky-500/20 text-xs font-semibold rounded-full uppercase tracking-wider",children:"Module 012_005 · Topic 5"}),e.jsx("span",{className:"px-3 py-1 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-xs font-semibold rounded-full",children:"Interview Mastery & Tricky MCQs"})]}),e.jsxs("h1",{className:"text-xl sm:text-2xl md:text-3xl font-bold text-white tracking-tight",children:["Tricky Riddle 6: ",e.jsx("code",{className:"text-emerald-400 font-mono",children:"try-catch-finally Return Value Overrides"})]}),e.jsx("p",{className:"text-base md:text-lg text-slate-400 leading-relaxed max-w-4xl",children:"Flow control hijacking: demonstrating why finally return statements overwrite try/catch returns and swallow in-flight exceptions."})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsxs("h2",{className:"text-2xl font-bold text-emerald-400 flex items-center gap-2",children:[e.jsx("span",{children:"💻"})," Hands-On Java Demo Code"]}),e.jsx(t,{fileModule:l,title:"TrickyRiddle6TryCatchFinallyReturnsDemo.java",highlightLines:[18,25,34,43]})]}),e.jsx("section",{className:"space-y-4",children:e.jsx(r,{title:"Interview Riddles & MCQs FAQs",questions:s})}),e.jsx("section",{className:"space-y-4",children:e.jsx(n,{content:i,title:"Module 012_005 Topic 5: Tricky Riddle 6 - try-catch-finally Returns",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Printable Note",downloadFileName:"012_005_topic5_tricky_riddle_6_try_catch_finally_returns_note.txt"})}),e.jsx(a,{note:"A return statement inside a finally block is a dangerous anti-pattern! It hijacks and discards any return value from the try block, and even silently swallows unhandled exceptions! Never return from finally! — Sukanta Hui"})]})}export{h as default};
