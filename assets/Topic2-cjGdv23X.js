import{j as e}from"./vendor-react-core-Doz9nIC6.js";import{J as t}from"./JavaFileLoader-BfBG3xz_.js";import{F as r}from"./FAQTemplate-BHhlgA96.js";import{P as n}from"./PlainTextPrint-C08xhKA4.js";import{T as a}from"./TeacherSukantaHui-DDN87fI5.js";import"./JavaCodeBlock-BwsLxS3r.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-DEsnU7fn.js";const o=`/**\r
 * Java Core Tutorial - Module 004_004: Try-with-Resources & AutoCloseable\r
 * Topic 2: Try-with-Resources Syntax, Scope Mechanics & Optional catch/finally\r
 * Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
 */\r
\r
package com.coderaccotax.javatutorial.exceptions;\r
\r
import java.io.BufferedReader;\r
import java.io.StringReader;\r
import java.io.IOException;\r
\r
public class TryWithResourcesSyntaxMechanicsDemo {\r
\r
    public static void readAcademyNotes(String content) {\r
        // Syntax: 'try (Declaration) { Body } [catch] [finally]'\r
        try (BufferedReader reader = new BufferedReader(new StringReader(content))) {\r
            String line;\r
            while ((line = reader.readLine()) != null) {\r
                System.out.println("  [NOTE LINE] " + line);\r
            }\r
            // 'reader' is automatically closed RIGHT HERE before any catch/finally block runs!\r
        } catch (IOException e) {\r
            System.out.println("  [CATCH] Handled read error: " + e.getMessage());\r
        } finally {\r
            System.out.println("  [FINALLY] Optional finally block executes AFTER resources are closed.\\n");\r
        }\r
\r
        // NOTE ON VARIABLE SCOPE:\r
        // 'reader' is in scope ONLY within the try block parentheses and body.\r
        // reader.readLine(); // COMPILE ERROR: Cannot find symbol 'reader'!\r
    }\r
\r
    public static void main(String[] args) {\r
        System.out.println("==========================================================================");\r
        System.out.println(" TOPIC 2: TRY-WITH-RESOURCES SYNTAX & MECHANICS - BARRACKPORE");\r
        System.out.println("==========================================================================\\n");\r
\r
        String syllabus = "Java Core Foundations\\nOOP Mastery in Barrackpore\\nException Handling";\r
        readAcademyNotes(syllabus);\r
\r
        System.out.println(">>> 3 SYNTACTICAL RULES:");\r
        System.out.println("  1. Scope of resource variable is strictly restricted to the 'try' body.");\r
        System.out.println("  2. 'close()' is called BEFORE any 'catch' or 'finally' block is executed.");\r
        System.out.println("  3. 'catch' and 'finally' blocks are completely OPTIONAL in try-with-resources!");\r
\r
        System.out.println("\\n==========================================================================");\r
    }\r
}`,s=`================================================================================\r
JAVA CORE TUTORIAL - QUICK REVISION GUIDE\r
Module 004_004: Try-with-Resources & AutoCloseable\r
Topic 2: Try-with-Resources Syntax\r
Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
================================================================================\r
\r
1. SYNTAX & EXECUTION ORDER:\r
   - Resource variable is scoped strictly to the try block.\r
   - Resource.close() is called BEFORE catch/finally.\r
   - 'catch' and 'finally' are completely optional.\r
\r
================================================================================\r
Classroom Practice: Barrackpore Academy | Mentor: Sukanta Hui\r
================================================================================`,c=[{question:"In what exact execution order does the JVM invoke 'close()' relative to 'catch' and 'finally' blocks in a Try-with-Resources statement?",shortAnswer:"The resource's 'close()' method is executed FIRST, immediately upon leaving the try block, BEFORE any matching 'catch' block or 'finally' block is entered. This guarantees that resources are closed before exception handlers attempt error recovery.",explanation:"A critical architectural sequence that guarantees clean state during catch recovery.",hint:"Resource close() executes BEFORE catch and finally blocks run.",level:"Intermediate",codeExample:"// Order: try_body → resource.close() → catch_block → finally_block"}];function x(){return e.jsxs("div",{className:"space-y-12 px-4 md:px-8 py-8 text-slate-200 bg-slate-900 min-h-screen",children:[e.jsxs("header",{className:"space-y-4 border-b border-slate-800 pb-6",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"px-3 py-1 bg-sky-500/10 text-sky-400 border border-sky-500/20 text-xs font-semibold rounded-full uppercase tracking-wider",children:"Module 004_004 · Topic 2"}),e.jsx("span",{className:"px-3 py-1 bg-indigo-500/10 text-indigo-400 border border-indigo-500/20 text-xs font-semibold rounded-full",children:"Syntax Mechanics"})]}),e.jsx("h1",{className:"text-xl sm:text-2xl md:text-3xl font-bold text-white tracking-tight",children:"Try-with-Resources Syntax & Execution Mechanics"}),e.jsx("p",{className:"text-base md:text-lg text-slate-400 leading-relaxed max-w-4xl",children:"Master the exact execution lifecycle: understanding block variable scoping, optional catch/finally clauses, and why resource teardown happens before error handlers run."})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsxs("h2",{className:"text-2xl font-bold text-emerald-400 flex items-center gap-2",children:[e.jsx("span",{children:"💻"})," Hands-On Java Demo Code"]}),e.jsx(t,{fileModule:o,title:"TryWithResourcesSyntaxMechanicsDemo.java",highlightLines:[7,10,13,14,15,18,19,21]})]}),e.jsx("section",{className:"space-y-4",children:e.jsx(r,{title:"ARM Syntax FAQs",questions:c})}),e.jsx("section",{className:"space-y-4",children:e.jsx(n,{content:s,title:"Module 004_004 Topic 2: ARM Syntax Mechanics",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Printable Note",downloadFileName:"004_004_topic2_arm_syntax_mechanics_note.txt"})}),e.jsx(a,{note:"Notice that in try-with-resources, the 'catch' and 'finally' blocks are completely optional! If you declare 'throws IOException' on your method, you can write 'try (Reader r = ...)' with NO catch and NO finally! — Sukanta Hui"})]})}export{x as default};
