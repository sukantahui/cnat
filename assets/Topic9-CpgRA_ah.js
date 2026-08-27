import{j as e}from"./vendor-react-core-Doz9nIC6.js";import{J as t}from"./JavaFileLoader-BfBG3xz_.js";import{F as n}from"./FAQTemplate-CkSqDH4B.js";import{P as a}from"./PlainTextPrint-C08xhKA4.js";import{T as r}from"./TeacherSukantaHui-CC0AKmkm.js";import"./JavaCodeBlock-BwsLxS3r.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-BtJHuk7w.js";const o=`/**\r
 * Java Core Tutorial - Module 004_001: Exception Hierarchy\r
 * Topic 9: Common Standard Java Exceptions Catalog: Triggers & Defensive Preventions\r
 * Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
 */\r
\r
package com.coderaccotax.javatutorial.exceptions;\r
\r
public class CommonStandardExceptionsCatalogDemo {\r
\r
    public static void main(String[] args) {\r
        System.out.println("==========================================================================");\r
        System.out.println(" TOPIC 9: COMMON JAVA EXCEPTIONS CATALOG - BARRACKPORE");\r
        System.out.println("==========================================================================\\n");\r
\r
        System.out.println("+---------------------------------------+-----------+-----------------------------------------------+");\r
        System.out.println("| Exception Name                        | Type      | Root Trigger Cause                            |");\r
        System.out.println("+---------------------------------------+-----------+-----------------------------------------------+");\r
        System.out.println("| NullPointerException (NPE)            | Unchecked | Calling method/field on null reference        |");\r
        System.out.println("| ArrayIndexOutOfBoundsException        | Unchecked | Accessing array with negative or excessive index|");\r
        System.out.println("| ClassCastException                    | Unchecked | Casting object to incompatible subtype        |");\r
        System.out.println("| IllegalArgumentException              | Unchecked | Method received inappropriate parameter       |");\r
        System.out.println("| IllegalStateException                 | Unchecked | Object invoked in unsuitable lifecycle state  |");\r
        System.out.println("| NumberFormatException                 | Unchecked | Parsing non-numeric string into number        |");\r
        System.out.println("| IOException                           | Checked   | File, network, or stream communication failure|");\r
        System.out.println("| SQLException                          | Checked   | Database syntax, connection or query error    |");\r
        System.out.println("| ClassNotFoundException                | Checked   | JVM failed to load dynamic class by name      |");\r
        System.out.println("+---------------------------------------+-----------+-----------------------------------------------+");\r
\r
        // Demonstration of ClassCastException:\r
        try {\r
            Object text = "Barrackpore Training Center";\r
            Integer num = (Integer) text; // Invalid downcast!\r
        } catch (ClassCastException e) {\r
            System.out.println("\\n>>> Caught ClassCastException: " + e.getMessage());\r
        }\r
\r
        System.out.println("\\n==========================================================================");\r
    }\r
}`,i=`================================================================================\r
JAVA CORE TUTORIAL - QUICK REVISION GUIDE\r
Module 004_001: Exception Hierarchy\r
Topic 9: Common Exceptions Catalog\r
Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
================================================================================\r
\r
1. STANDARD EXCEPTIONS SUMMARY:\r
   - 'NPE'              : Invocation on null pointer.\r
   - 'ClassCastException': Incompatible downcasting.\r
   - 'IllegalArgument'  : Method argument validation failure.\r
   - 'IllegalState'     : Object state lifecycle violation.\r
   - 'NumberFormat'     : Integer.parseInt("abc") failure.\r
\r
================================================================================\r
Classroom Practice: Barrackpore Academy | Mentor: Sukanta Hui\r
================================================================================`,s=[{question:"What is the difference between 'IllegalArgumentException' and 'IllegalStateException' in standard Java APIs?",shortAnswer:"'IllegalArgumentException' indicates that a method was passed an invalid or inappropriate argument (e.g. negative radius). 'IllegalStateException' indicates that the method invocation was invalid because the target object is currently in an inappropriate lifecycle state (e.g. attempting to read from an already-closed stream).",explanation:"Item 72 of Effective Java mandates reusing standard Java exceptions.",hint:"IllegalArgumentException is for bad parameters; IllegalStateException is for bad object state.",level:"Intermediate",codeExample:'if (isClosed) throw new IllegalStateException("Connection already closed");'}];function h(){return e.jsxs("div",{className:"space-y-12 px-4 md:px-8 py-8 text-slate-200 bg-slate-900 min-h-screen",children:[e.jsxs("header",{className:"space-y-4 border-b border-slate-800 pb-6",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"px-3 py-1 bg-sky-500/10 text-sky-400 border border-sky-500/20 text-xs font-semibold rounded-full uppercase tracking-wider",children:"Module 004_001 · Topic 9"}),e.jsx("span",{className:"px-3 py-1 bg-indigo-500/10 text-indigo-400 border border-indigo-500/20 text-xs font-semibold rounded-full",children:"Standard Catalog"})]}),e.jsx("h1",{className:"text-3xl md:text-4xl font-extrabold text-white tracking-tight",children:"Common Standard Java Exceptions & Their Root Triggers"}),e.jsxs("p",{className:"text-base md:text-lg text-slate-400 leading-relaxed max-w-4xl",children:["Catalogue the core exceptions in the JDK: distinguishing ",e.jsx("code",{className:"text-emerald-300 font-mono",children:"IllegalArgumentException"})," from ",e.jsx("code",{className:"text-sky-300 font-mono",children:"IllegalStateException"})," and practicing standard exception reuse."]})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsxs("h2",{className:"text-2xl font-bold text-emerald-400 flex items-center gap-2",children:[e.jsx("span",{children:"💻"})," Hands-On Java Demo Code"]}),e.jsx(t,{fileModule:o,title:"CommonStandardExceptionsCatalogDemo.java",highlightLines:[7,14,15,16,17,18,19,20,27,28,29]})]}),e.jsx("section",{className:"space-y-4",children:e.jsx(n,{title:"Standard Catalog FAQs",questions:s})}),e.jsx("section",{className:"space-y-4",children:e.jsx(a,{content:i,title:"Module 004_001 Topic 9: Common Exceptions Catalog",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Printable Note",downloadFileName:"004_001_topic9_common_exceptions_catalog_note.txt"})}),e.jsx(r,{note:"Don't invent custom exceptions for everything! Java already provides IllegalArgumentException, IllegalStateException, and UnsupportedOperationException! Reusing standard exceptions makes your API easy for other developers to learn! — Sukanta Hui"})]})}export{h as default};
