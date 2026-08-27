import{j as e}from"./vendor-react-core-Doz9nIC6.js";import{J as n}from"./JavaFileLoader-BfBG3xz_.js";import{F as t}from"./FAQTemplate-CkSqDH4B.js";import{P as r}from"./PlainTextPrint-C08xhKA4.js";import{T as o}from"./TeacherSukantaHui-CC0AKmkm.js";import"./JavaCodeBlock-BwsLxS3r.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-BtJHuk7w.js";const i=`/**\r
 * Java Core Tutorial - Module 004_001: Exception Hierarchy\r
 * Topic 6: Unchecked Exceptions (Runtime): Subclasses of java.lang.RuntimeException\r
 * Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
 */\r
\r
package com.coderaccotax.javatutorial.exceptions;\r
\r
public class UncheckedRuntimeExceptionCatalogDemo {\r
\r
    public static void main(String[] args) {\r
        System.out.println("==========================================================================");\r
        System.out.println(" TOPIC 6: UNCHECKED RUNTIME EXCEPTIONS - BARRACKPORE");\r
        System.out.println("==========================================================================\\n");\r
\r
        System.out.println(">>> The 5 Most Common Unchecked Exceptions in Java (Subclasses of RuntimeException):");\r
        System.out.println();\r
\r
        // 1. ArithmeticException:\r
        try {\r
            int result = 100 / 0;\r
        } catch (ArithmeticException e) {\r
            System.out.println("  1. ArithmeticException: " + e.getMessage() + " (Integer division by zero)");\r
        }\r
\r
        // 2. NullPointerException (NPE):\r
        try {\r
            String name = null;\r
            int len = name.length();\r
        } catch (NullPointerException e) {\r
            System.out.println("  2. NullPointerException: Attempted method invocation on null reference");\r
        }\r
\r
        // 3. ArrayIndexOutOfBoundsException:\r
        try {\r
            int[] scores = { 85, 90, 95 };\r
            int invalidScore = scores[10];\r
        } catch (ArrayIndexOutOfBoundsException e) {\r
            System.out.println("  3. ArrayIndexOutOfBoundsException: Index 10 out of bounds for length 3");\r
        }\r
\r
        // 4. IllegalArgumentException:\r
        try {\r
            Thread.sleep(-500); // Invalid negative duration\r
        } catch (IllegalArgumentException | InterruptedException e) {\r
            System.out.println("  4. IllegalArgumentException: " + e.getMessage());\r
        }\r
\r
        // 5. NumberFormatException (Subclass of IllegalArgumentException):\r
        try {\r
            int val = Integer.parseInt("Barrackpore123");\r
        } catch (NumberFormatException e) {\r
            System.out.println("  5. NumberFormatException: " + e.getMessage());\r
        }\r
\r
        System.out.println("\\n>>> NOTE: Unchecked exceptions indicate PROGRAMMING BUGS that should be fixed via code logic, not try-catch!");\r
\r
        System.out.println("\\n==========================================================================");\r
    }\r
}`,c=`================================================================================\r
JAVA CORE TUTORIAL - QUICK REVISION GUIDE\r
Module 004_001: Exception Hierarchy\r
Topic 6: Unchecked Exceptions\r
Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
================================================================================\r
\r
1. UNCHECKED EXCEPTIONS:\r
   - Subclasses of 'RuntimeException'.\r
   - Compiler does NOT enforce 'catch or specify'.\r
   - Examples: 'NullPointerException', 'ArithmeticException', 'ArrayIndexOutOfBoundsException'.\r
   - Root Cause: Programmer logic errors (fix code with if checks).\r
\r
================================================================================\r
Classroom Practice: Barrackpore Academy | Mentor: Sukanta Hui\r
================================================================================`,s=[{question:"What are Unchecked Exceptions in Java and how do they differ from Checked Exceptions?",shortAnswer:"'Unchecked Exceptions' are subclasses of 'java.lang.RuntimeException' (and 'java.lang.Error'). The compiler does NOT require them to be caught or declared in 'throws' clauses. They typically represent programming defects or logic bugs (like NullPointerException or ArrayIndexOutOfBoundsException) that should be prevented via defensive checks.",explanation:"Catching RuntimeExceptions everywhere is an anti-pattern; fix the underlying logic bug instead.",hint:"Subclasses of RuntimeException; not enforced by compiler; represent logic bugs.",level:"Beginner",codeExample:"int len = str != null ? str.length() : 0; // Defensive check prevents NPE"}];function E(){return e.jsxs("div",{className:"space-y-12 px-4 md:px-8 py-8 text-slate-200 bg-slate-900 min-h-screen",children:[e.jsxs("header",{className:"space-y-4 border-b border-slate-800 pb-6",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"px-3 py-1 bg-sky-500/10 text-sky-400 border border-sky-500/20 text-xs font-semibold rounded-full uppercase tracking-wider",children:"Module 004_001 · Topic 6"}),e.jsx("span",{className:"px-3 py-1 bg-rose-500/10 text-rose-400 border border-rose-500/20 text-xs font-semibold rounded-full",children:"Runtime Defects"})]}),e.jsxs("h1",{className:"text-3xl md:text-4xl font-extrabold text-white tracking-tight",children:["Unchecked Exceptions: Subclasses of ",e.jsx("code",{className:"text-rose-400 font-mono",children:"RuntimeException"})," (",e.jsx("code",{className:"text-rose-300 font-mono",children:"NullPointerException"}),", ",e.jsx("code",{className:"text-amber-400 font-mono",children:"ArithmeticException"}),")"]}),e.jsxs("p",{className:"text-base md:text-lg text-slate-400 leading-relaxed max-w-4xl",children:["Catalogue the core runtime defects: understanding why the compiler ignores ",e.jsx("code",{className:"text-rose-300 font-mono",children:"NullPointerException"})," and why defensive coding beats try-catch wrapping."]})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsxs("h2",{className:"text-2xl font-bold text-emerald-400 flex items-center gap-2",children:[e.jsx("span",{children:"💻"})," Hands-On Java Demo Code"]}),e.jsx(n,{fileModule:i,title:"UncheckedRuntimeExceptionCatalogDemo.java",highlightLines:[7,14,15,21,22,28,29,35,36,42,43]})]}),e.jsx("section",{className:"space-y-4",children:e.jsx(t,{title:"Unchecked Exceptions FAQs",questions:s})}),e.jsx("section",{className:"space-y-4",children:e.jsx(r,{content:c,title:"Module 004_001 Topic 6: Unchecked Exceptions",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Printable Note",downloadFileName:"004_001_topic6_unchecked_exceptions_note.txt"})}),e.jsx(o,{note:"Never write 'try { ... } catch (NullPointerException e)'! That is an amateur code smell. Use an if-statement: 'if (obj != null)'! Unchecked exceptions should be prevented, not caught! — Sukanta Hui"})]})}export{E as default};
