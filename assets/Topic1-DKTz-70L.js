import{j as e}from"./vendor-react-core-Doz9nIC6.js";import{J as t}from"./JavaFileLoader-BfBG3xz_.js";import{F as n}from"./FAQTemplate-CkSqDH4B.js";import{P as r}from"./PlainTextPrint-C08xhKA4.js";import{T as a}from"./TeacherSukantaHui-CC0AKmkm.js";import"./JavaCodeBlock-BwsLxS3r.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-BtJHuk7w.js";const s=`/**\r
 * Java Core Tutorial - Module 004_004: Try-with-Resources & AutoCloseable\r
 * Topic 1: Introduction to Automatic Resource Management (ARM) / Try-with-Resources\r
 * Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
 */\r
\r
package com.coderaccotax.javatutorial.exceptions;\r
\r
import java.io.ByteArrayInputStream;\r
import java.io.InputStream;\r
\r
public class ArmIntroductionFoundationsDemo {\r
\r
    public static void processStreamArm(byte[] data) {\r
        System.out.println("  [ARM INITIATED] Entering Try-with-Resources block...");\r
\r
        // Try-with-Resources (ARM): Resource is declared in parentheses after 'try':\r
        try (InputStream in = new ByteArrayInputStream(data)) {\r
            int firstByte = in.read();\r
            System.out.println("  [READ DATA] First byte value: " + firstByte);\r
            // Resource 'in' is AUTOMATICALLY CLOSED here by the JVM as execution exits!\r
        } catch (Exception e) {\r
            System.out.println("  [ERROR] " + e.getMessage());\r
        }\r
\r
        System.out.println("  [ARM FINISHED] Stream closed safely with zero manual code.\\n");\r
    }\r
\r
    public static void main(String[] args) {\r
        System.out.println("==========================================================================");\r
        System.out.println(" TOPIC 1: AUTOMATIC RESOURCE MANAGEMENT (ARM) - BARRACKPORE");\r
        System.out.println("==========================================================================\\n");\r
\r
        byte[] sampleBytes = { 65, 66, 67, 68 }; // 'A', 'B', 'C', 'D'\r
        processStreamArm(sampleBytes);\r
\r
        System.out.println(">>> THE 3 PILLARS OF TRY-WITH-RESOURCES:");\r
        System.out.println("  1. Zero Boilerplate: No null checks, no explicit in.close(), no finally block needed.");\r
        System.out.println("  2. Guaranteed Closing: Executes close() whether the block finishes normally or throws an exception.");\r
        System.out.println("  3. AutoCloseable Invariant: Any class implementing 'java.lang.AutoCloseable' works seamlessly.");\r
\r
        System.out.println("\\n==========================================================================");\r
    }\r
}`,o=`================================================================================\r
JAVA CORE TUTORIAL - QUICK REVISION GUIDE\r
Module 004_004: Try-with-Resources & AutoCloseable\r
Topic 1: Introduction to ARM\r
Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
================================================================================\r
\r
1. ARM / TRY-WITH-RESOURCES:\r
   - Syntax: 'try (Resource r = new Resource()) { ... }'\r
   - Automatically calls 'r.close()' upon exit.\r
   - Eliminates tedious manual finally blocks.\r
   - Guaranteed closing even during exceptions.\r
\r
================================================================================\r
Classroom Practice: Barrackpore Academy | Mentor: Sukanta Hui\r
================================================================================`,i=[{question:"What is Automatic Resource Management (ARM) in Java and when was it introduced?",shortAnswer:"Introduced in Java 7 (Project Coin), ARM (also known as Try-with-Resources) is a language feature that automatically closes any resource declared inside the 'try (Resource r = ...)' parentheses at the end of the statement, eliminating the need for manual 'finally' blocks and 'close()' calls.",explanation:"Any class that implements java.lang.AutoCloseable can be used in ARM.",hint:"Introduced in Java 7; automatically closes resources declared in try parentheses.",level:"Beginner",codeExample:'try (InputStream is = new FileInputStream("file.txt")) { ... }'}];function h(){return e.jsxs("div",{className:"space-y-12 px-4 md:px-8 py-8 text-slate-200 bg-slate-900 min-h-screen",children:[e.jsxs("header",{className:"space-y-4 border-b border-slate-800 pb-6",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"px-3 py-1 bg-sky-500/10 text-sky-400 border border-sky-500/20 text-xs font-semibold rounded-full uppercase tracking-wider",children:"Module 004_004 · Topic 1"}),e.jsx("span",{className:"px-3 py-1 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-xs font-semibold rounded-full",children:"Modern Resource Management"})]}),e.jsx("h1",{className:"text-3xl md:text-4xl font-extrabold text-white tracking-tight",children:"Introduction to Automatic Resource Management (ARM) / Try-with-Resources (Java 7+)"}),e.jsx("p",{className:"text-base md:text-lg text-slate-400 leading-relaxed max-w-4xl",children:"Revolutionize resource safety: learning how Java 7 Automatic Resource Management eliminates leak hazards and closes I/O handles automatically."})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsxs("h2",{className:"text-2xl font-bold text-emerald-400 flex items-center gap-2",children:[e.jsx("span",{children:"💻"})," Hands-On Java Demo Code"]}),e.jsx(t,{fileModule:s,title:"ArmIntroductionFoundationsDemo.java",highlightLines:[7,10,14,15,16,17,18]})]}),e.jsx("section",{className:"space-y-4",children:e.jsx(n,{title:"ARM Foundations FAQs",questions:i})}),e.jsx("section",{className:"space-y-4",children:e.jsx(r,{content:o,title:"Module 004_004 Topic 1: ARM Foundations",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Printable Note",downloadFileName:"004_004_topic1_arm_foundations_note.txt"})}),e.jsx(a,{note:"Always use try-with-resources for files, sockets, database connections, and scanners! It makes your code 50% shorter and 100% leak-proof! — Sukanta Hui"})]})}export{h as default};
