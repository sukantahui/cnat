import{j as e}from"./vendor-react-core-Doz9nIC6.js";import{J as t}from"./JavaFileLoader-BfBG3xz_.js";import{F as r}from"./FAQTemplate-CkSqDH4B.js";import{P as n}from"./PlainTextPrint-C08xhKA4.js";import{T as a}from"./TeacherSukantaHui-CyIG3xbg.js";import"./JavaCodeBlock-BwsLxS3r.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-CIaKtAt4.js";const o=`/**\r
 * Java Core Tutorial - Module 004_002: Try, Catch, Finally & Flow Control\r
 * Topic 4: Catch Block Ordering Rule: Specific Subclasses MUST Precede General Superclasses\r
 * Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
 */\r
\r
package com.coderaccotax.javatutorial.exceptions;\r
\r
import java.io.FileInputStream;\r
import java.io.FileNotFoundException;\r
import java.io.IOException;\r
\r
public class CatchBlockOrderingRuleDemo {\r
\r
    public static void loadAcademyResource(String path) {\r
        try {\r
            FileInputStream fis = new FileInputStream(path);\r
            fis.read();\r
            fis.close();\r
        }\r
        // RULE: Most specific subclass (FileNotFoundException) MUST come FIRST:\r
        catch (FileNotFoundException fnf) {\r
            System.out.println("  [SPECIFIC CATCH 1] File does not exist: " + fnf.getMessage());\r
        }\r
        // General superclass (IOException) MUST follow after its subclasses:\r
        catch (IOException ioe) {\r
            System.out.println("  [GENERAL CATCH 2] General I/O transmission failure: " + ioe.getMessage());\r
        }\r
        // Ultimate root application catch (Exception) comes LAST:\r
        catch (Exception ex) {\r
            System.out.println("  [FALLBACK CATCH 3] Unexpected general error: " + ex.getMessage());\r
        }\r
\r
        /*\r
         * ILLEGAL ORDERING DEMONSTRATION (Causes Compile Error):\r
         *\r
         * catch (IOException ioe) { ... }\r
         * catch (FileNotFoundException fnf) { ... }\r
         *\r
         * COMPILE ERROR: "exception java.io.FileNotFoundException has already been caught"\r
         * Because IOException catches all its subclasses, making FileNotFoundException unreachable!\r
         */\r
    }\r
\r
    public static void main(String[] args) {\r
        System.out.println("==========================================================================");\r
        System.out.println(" TOPIC 4: CATCH BLOCK ORDERING RULE - BARRACKPORE");\r
        System.out.println("==========================================================================\\n");\r
\r
        System.out.println(">>> 1. Executing Properly Ordered Catch Blocks:");\r
        loadAcademyResource("non_existent_file.dat");\r
\r
        System.out.println("\\n>>> THE GOLDEN ORDERING RULE:");\r
        System.out.println("  Subclass (Child) FIRST -> Superclass (Parent) SECOND -> Root (Ancestor) LAST!");\r
\r
        System.out.println("\\n==========================================================================");\r
    }\r
}`,c=`================================================================================\r
JAVA CORE TUTORIAL - QUICK REVISION GUIDE\r
Module 004_002: Try, Catch, Finally & Flow Control\r
Topic 4: Catch Block Ordering Rule\r
Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
================================================================================\r
\r
1. ORDERING MANDATE:\r
   - Child/Subclass MUST come BEFORE Parent/Superclass.\r
   - Example: 'FileNotFoundException' &rarr; 'IOException' &rarr; 'Exception'.\r
   - Inverting the order results in a compile-time "unreachable code" error.\r
\r
================================================================================\r
Classroom Practice: Barrackpore Academy | Mentor: Sukanta Hui\r
================================================================================`,s=[{question:"What happens if a developer places 'catch (IOException e)' BEFORE 'catch (FileNotFoundException e)' in Java?",shortAnswer:"The Java compiler generates a COMPILE ERROR: 'exception java.io.FileNotFoundException has already been caught'. Because 'FileNotFoundException' is a subclass of 'IOException', the first catch block would intercept all file errors, making the second catch block completely unreachable dead code.",explanation:"The compiler strictly enforces the Subclass-First ordering rule for catch blocks.",hint:"Causes a compile error because the subclass catch block becomes unreachable.",level:"Beginner",codeExample:"// Order: catch (FileNotFoundException e) {} catch (IOException e) {}"}];function E(){return e.jsxs("div",{className:"space-y-12 px-4 md:px-8 py-8 text-slate-200 bg-slate-900 min-h-screen",children:[e.jsxs("header",{className:"space-y-4 border-b border-slate-800 pb-6",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"px-3 py-1 bg-sky-500/10 text-sky-400 border border-sky-500/20 text-xs font-semibold rounded-full uppercase tracking-wider",children:"Module 004_002 · Topic 4"}),e.jsx("span",{className:"px-3 py-1 bg-amber-500/10 text-amber-400 border border-amber-500/20 text-xs font-semibold rounded-full",children:"Ordering Rule"})]}),e.jsx("h1",{className:"text-3xl md:text-4xl font-extrabold text-white tracking-tight",children:"Ordering Rule for Multiple Catch Blocks: Subclasses MUST Precede Superclasses"}),e.jsx("p",{className:"text-base md:text-lg text-slate-400 leading-relaxed max-w-4xl",children:"Avoid unreachable catch block compile errors: mastering the Child-First, Parent-Second hierarchy sorting rule for resilient error interceptors."})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsxs("h2",{className:"text-2xl font-bold text-emerald-400 flex items-center gap-2",children:[e.jsx("span",{children:"💻"})," Hands-On Java Demo Code"]}),e.jsx(t,{fileModule:o,title:"CatchBlockOrderingRuleDemo.java",highlightLines:[7,14,15,18,19,22,23,26,27,30]})]}),e.jsx("section",{className:"space-y-4",children:e.jsx(r,{title:"Catch Ordering FAQs",questions:s})}),e.jsx("section",{className:"space-y-4",children:e.jsx(n,{content:c,title:"Module 004_002 Topic 4: Catch Block Ordering",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Printable Note",downloadFileName:"004_002_topic4_catch_ordering_rule_note.txt"})}),e.jsx(a,{note:"Think of catch blocks like a filter net: you place the finest net (subclass) on top, and the coarsest net (Exception) at the bottom! If you put the big net on top, nothing reaches the smaller net! — Sukanta Hui"})]})}export{E as default};
