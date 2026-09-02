import{j as e}from"./vendor-react-core-Doz9nIC6.js";import{J as r}from"./JavaFileLoader-BfBG3xz_.js";import{F as s}from"./FAQTemplate-BHhlgA96.js";import{P as t}from"./PlainTextPrint-C08xhKA4.js";import{T as n}from"./TeacherSukantaHui-RpFLNJ5A.js";import"./JavaCodeBlock-BwsLxS3r.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-wprqVFW_.js";const a=`/**\r
 * Java Core Tutorial - Module 004_004: Try-with-Resources & AutoCloseable\r
 * Topic 9: Programmatic Inspection of Suppressed Exceptions using Throwable.getSuppressed()\r
 * Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
 */\r
\r
package com.coderaccotax.javatutorial.exceptions;\r
\r
public class ProgrammaticSuppressedInspectionDemo {\r
\r
    // Simulating multiple resources failing during close():\r
    public static class FlawedResource implements AutoCloseable {\r
        private final String resourceName;\r
\r
        public FlawedResource(String name) { this.resourceName = name; }\r
\r
        public void execute() {\r
            throw new RuntimeException("Primary failure in " + resourceName + " business execution!");\r
        }\r
\r
        @Override\r
        public void close() {\r
            throw new RuntimeException("Close failure in " + resourceName);\r
        }\r
    }\r
\r
    public static void main(String[] args) {\r
        System.out.println("==========================================================================");\r
        System.out.println(" TOPIC 9: PROGRAMMATIC getSuppressed() INSPECTION - BARRACKPORE");\r
        System.out.println("==========================================================================\\n");\r
\r
        try (\r
            FlawedResource r1 = new FlawedResource("Resource_Alpha");\r
            FlawedResource r2 = new FlawedResource("Resource_Beta")\r
        ) {\r
            r1.execute();\r
        } catch (Exception ex) {\r
            System.out.println(">>> 1. PRIMARY ROOT EXCEPTION:");\r
            System.out.println("  Class   : " + ex.getClass().getName());\r
            System.out.println("  Message : " + ex.getMessage());\r
\r
            System.out.println("\\n>>> 2. ITERATING ALL SUPPRESSED EXCEPTIONS:");\r
            Throwable[] suppressed = ex.getSuppressed();\r
            System.out.println("  Suppressed Count: " + suppressed.length);\r
\r
            for (int i = 0; i < suppressed.length; i++) {\r
                System.out.printf("  [%d] Suppressed Message: %s%n", i + 1, suppressed[i].getMessage());\r
            }\r
\r
            System.out.println("\\n>>> 3. PRINTING COMPOSITE STACK TRACE:");\r
            ex.printStackTrace(System.out); // Built-in printStackTrace automatically includes suppressed lines!\r
        }\r
\r
        System.out.println("\\n==========================================================================");\r
    }\r
}`,i=`================================================================================\r
JAVA CORE TUTORIAL - QUICK REVISION GUIDE\r
Module 004_004: Try-with-Resources & AutoCloseable\r
Topic 9: getSuppressed Inspection\r
Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
================================================================================\r
\r
1. getSuppressed() API:\r
   - Returns 'Throwable[]' array of suppressed secondary errors.\r
   - 'ex.addSuppressed(secondaryEx)' used internally by ARM.\r
   - 'printStackTrace()' formats suppressed errors automatically.\r
\r
================================================================================\r
Classroom Practice: Barrackpore Academy | Mentor: Sukanta Hui\r
================================================================================`,o=[{question:"How does 'Throwable.printStackTrace()' format and render Suppressed Exceptions in the console?",shortAnswer:"'Throwable.printStackTrace()' automatically formats all suppressed exceptions beneath the primary stack trace, prefixing each suppressed exception with 'Suppressed: ...' and indenting its associated call stack, guaranteeing full diagnostic visibility without extra logging code.",explanation:"Seamlessly supported across standard JDK logging tools and production APM agents.",hint:"Automatically outputs 'Suppressed: ...' sections beneath the primary stack trace.",level:"Intermediate",codeExample:"ex.printStackTrace(); // Built-in support prints both primary and suppressed traces"}];function h(){return e.jsxs("div",{className:"space-y-12 px-4 md:px-8 py-8 text-slate-200 bg-slate-900 min-h-screen",children:[e.jsxs("header",{className:"space-y-4 border-b border-slate-800 pb-6",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"px-3 py-1 bg-sky-500/10 text-sky-400 border border-sky-500/20 text-xs font-semibold rounded-full uppercase tracking-wider",children:"Module 004_004 · Topic 9"}),e.jsx("span",{className:"px-3 py-1 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-xs font-semibold rounded-full",children:"Diagnostic Inspection"})]}),e.jsxs("h1",{className:"text-xl sm:text-2xl md:text-3xl font-bold text-white tracking-tight",children:["Inspecting Suppressed Exceptions using ",e.jsx("code",{className:"text-emerald-400 font-mono",children:"Throwable.getSuppressed()"})]}),e.jsx("p",{className:"text-base md:text-lg text-slate-400 leading-relaxed max-w-4xl",children:"Inspect multi-tiered runtime failures: iterating suppressed arrays, parsing chained teardown faults, and reading composite stack trace output."})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsxs("h2",{className:"text-2xl font-bold text-emerald-400 flex items-center gap-2",children:[e.jsx("span",{children:"💻"})," Hands-On Java Demo Code"]}),e.jsx(r,{fileModule:a,title:"ProgrammaticSuppressedInspectionDemo.java",highlightLines:[7,13,14,18,19,27,28,38,39,44]})]}),e.jsx("section",{className:"space-y-4",children:e.jsx(s,{title:"Suppressed Inspection FAQs",questions:o})}),e.jsx("section",{className:"space-y-4",children:e.jsx(t,{content:i,title:"Module 004_004 Topic 9: getSuppressed Inspection",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Printable Note",downloadFileName:"004_004_topic9_suppressed_inspection_note.txt"})}),e.jsx(n,{note:"When debugging production logs in Barrackpore, look for 'Suppressed:' lines right under the main exception! They tell you which resource failed during closing! — Sukanta Hui"})]})}export{h as default};
