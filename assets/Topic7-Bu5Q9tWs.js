import{j as e}from"./vendor-react-core-Doz9nIC6.js";import{J as a}from"./JavaFileLoader-BfBG3xz_.js";import{F as r}from"./FAQTemplate-CkSqDH4B.js";import{P as t}from"./PlainTextPrint-C08xhKA4.js";import{T as n}from"./TeacherSukantaHui-CyIG3xbg.js";import"./JavaCodeBlock-BwsLxS3r.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-CIaKtAt4.js";const i=`/**\r
 * Java Core Tutorial - Module 004_004: Try-with-Resources & AutoCloseable\r
 * Topic 7: Java 9 Enhancement: Using Pre-Declared 'Effectively Final' Variables in ARM\r
 * Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
 */\r
\r
package com.coderaccotax.javatutorial.exceptions;\r
\r
import java.io.ByteArrayInputStream;\r
import java.io.InputStream;\r
\r
public class Java9EffectivelyFinalArmDemo {\r
\r
    public static void executeJava9Arm(InputStream existingStream) {\r
        System.out.println("  [JAVA 9 ARM] Managing external stream parameter directly...");\r
\r
        // JAVA 9 ENHANCEMENT: Passing an already-instantiated, effectively final variable directly!\r
        // (In Java 7/8, you were forced to create a redundant variable: 'try (InputStream s = existingStream)')\r
        try (existingStream) {\r
            int first = existingStream.read();\r
            System.out.println("  Read byte value: " + first);\r
        } catch (Exception e) {\r
            System.out.println("  [ERROR] " + e.getMessage());\r
        }\r
\r
        System.out.println("  [SUCCESS] External stream closed cleanly.\\n");\r
    }\r
\r
    public static void main(String[] args) {\r
        System.out.println("==========================================================================");\r
        System.out.println(" TOPIC 7: JAVA 9 EFFECTIVELY FINAL ARM - BARRACKPORE");\r
        System.out.println("==========================================================================\\n");\r
\r
        byte[] payload = { 101, 102, 103 };\r
        InputStream stream = new ByteArrayInputStream(payload); // 'stream' is effectively final (never reassigned)\r
\r
        System.out.println(">>> Passing pre-declared stream to Java 9 Try-with-Resources:");\r
        executeJava9Arm(stream);\r
\r
        System.out.println(">>> THE JAVA 9 IMPROVEMENT:");\r
        System.out.println("  - Prior to Java 9, try-with-resources required a fresh variable declaration: 'try (Reader r = reader)'.");\r
        System.out.println("  - Java 9+ allows writing 'try (reader)' directly, provided 'reader' is final or effectively final!");\r
\r
        System.out.println("\\n==========================================================================");\r
    }\r
}`,s=`================================================================================\r
JAVA CORE TUTORIAL - QUICK REVISION GUIDE\r
Module 004_004: Try-with-Resources & AutoCloseable\r
Topic 7: Java 9 ARM Enhancement\r
Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
================================================================================\r
\r
1. JAVA 9 ARM ENHANCEMENT:\r
   - Pre-Java 9: 'try (Resource r = externalRes)' (Required declaration).\r
   - Java 9+: 'try (externalRes)' (Direct reference allowed).\r
   - Constraint: Variable must be final or effectively final.\r
\r
================================================================================\r
Classroom Practice: Barrackpore Academy | Mentor: Sukanta Hui\r
================================================================================`,l=[{question:"What major syntactic enhancement was introduced in Java 9 for Try-with-Resources statements?",shortAnswer:"Java 9 allows passing previously declared 'final' or 'effectively final' resource variables directly into the try parentheses (e.g. 'try (myStream) { ... }'). In Java 7 and 8, developers were forced to create redundant alias declarations inside the header (e.g. 'try (InputStream s = myStream) { ... }').",explanation:"Eliminates duplicate variable declarations when resources are initialized outside the try statement.",hint:"Allows passing pre-existing final/effectively final variables directly without re-declaration.",level:"Intermediate",codeExample:"Reader r = getReader(); try (r) { ... } // Legal in Java 9+"}];function v(){return e.jsxs("div",{className:"space-y-12 px-4 md:px-8 py-8 text-slate-200 bg-slate-900 min-h-screen",children:[e.jsxs("header",{className:"space-y-4 border-b border-slate-800 pb-6",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"px-3 py-1 bg-sky-500/10 text-sky-400 border border-sky-500/20 text-xs font-semibold rounded-full uppercase tracking-wider",children:"Module 004_004 · Topic 7"}),e.jsx("span",{className:"px-3 py-1 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-xs font-semibold rounded-full",children:"Java 9 Modernization"})]}),e.jsxs("h1",{className:"text-3xl md:text-4xl font-extrabold text-white tracking-tight",children:["Java 9 Enhancement: Using ",e.jsx("code",{className:"text-emerald-400 font-mono",children:"Effectively Final"})," Variables in ARM"]}),e.jsx("p",{className:"text-base md:text-lg text-slate-400 leading-relaxed max-w-4xl",children:"Clean up modern codebases: leveraging Java 9 syntax to pass pre-declared effectively final resource handles directly into try-with-resources headers."})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsxs("h2",{className:"text-2xl font-bold text-emerald-400 flex items-center gap-2",children:[e.jsx("span",{children:"💻"})," Hands-On Java Demo Code"]}),e.jsx(a,{fileModule:i,title:"Java9EffectivelyFinalArmDemo.java",highlightLines:[7,10,13,14,15,16,27,28]})]}),e.jsx("section",{className:"space-y-4",children:e.jsx(r,{title:"Java 9 ARM FAQs",questions:l})}),e.jsx("section",{className:"space-y-4",children:e.jsx(t,{content:s,title:"Module 004_004 Topic 7: Java 9 ARM",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Printable Note",downloadFileName:"004_004_topic7_java9_arm_note.txt"})}),e.jsx(n,{note:"If a method takes an open stream parameter, in Java 9+ you can write 'try (stream)' directly without creating a dummy second variable! Much cleaner! — Sukanta Hui"})]})}export{v as default};
