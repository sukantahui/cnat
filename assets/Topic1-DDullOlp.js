import{j as e}from"./vendor-react-core-Doz9nIC6.js";import{J as t}from"./JavaFileLoader-BfBG3xz_.js";import{F as n}from"./FAQTemplate-BHhlgA96.js";import{P as a}from"./PlainTextPrint-C08xhKA4.js";import{T as r}from"./TeacherSukantaHui-DDN87fI5.js";import"./JavaCodeBlock-BwsLxS3r.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-DEsnU7fn.js";const s=`/**\r
 * Java Core Tutorial - Module 004_002: Try, Catch, Finally & Flow Control\r
 * Topic 1: The 'catch' Block: Exception Interception, Inspection & Stack Traces\r
 * Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
 */\r
\r
package com.coderaccotax.javatutorial.exceptions;\r
\r
public class CatchBlockInspectionDemo {\r
\r
    public static void inspectExceptionObject(String input) {\r
        try {\r
            int score = Integer.parseInt(input);\r
            System.out.println("  Parsed Score: " + score);\r
        } catch (NumberFormatException ex) {\r
            System.out.println(">>> 1. Intercepted Exception Object Inspection:");\r
            System.out.println("  ex.getClass().getName() : " + ex.getClass().getName());\r
            System.out.println("  ex.getMessage()         : " + ex.getMessage());\r
            System.out.println("  ex.getLocalizedMessage(): " + ex.getLocalizedMessage());\r
\r
            System.out.println("\\n>>> 2. Diagnostic Stack Trace Output (ex.printStackTrace()):");\r
            ex.printStackTrace(System.out); // Printing to stdout for display\r
        }\r
    }\r
\r
    public static void main(String[] args) {\r
        System.out.println("==========================================================================");\r
        System.out.println(" TOPIC 1: THE 'catch' BLOCK INSPECTION - BARRACKPORE");\r
        System.out.println("==========================================================================\\n");\r
\r
        inspectExceptionObject("BarrackporeGradeA");\r
\r
        System.out.println("\\n==========================================================================");\r
    }\r
}`,c=`================================================================================\r
JAVA CORE TUTORIAL - QUICK REVISION GUIDE\r
Module 004_002: Try, Catch, Finally & Flow Control\r
Topic 1: The 'catch' Block\r
Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
================================================================================\r
\r
1. THE 'catch' BLOCK:\r
   - Parameter specifies target exception type ('catch (IOException ex)').\r
   - Polymorphic: catches the declared type and all its subclasses.\r
   - Core methods: 'getMessage()', 'getCause()', 'printStackTrace()'.\r
\r
================================================================================\r
Classroom Practice: Barrackpore Academy | Mentor: Sukanta Hui\r
================================================================================`,o=[{question:"What core diagnostic methods are available on the exception object caught inside a 'catch (Exception ex)' block?",shortAnswer:"1. 'ex.getMessage()': Returns the detailed descriptive error string. 2. 'ex.getClass().getName()': Returns the exact runtime exception type. 3. 'ex.getCause()': Returns the underlying chained root cause. 4. 'ex.printStackTrace()': Prints the complete call-stack history leading up to the point of failure.",explanation:"Logging these diagnostics with SLF4J/Logback is essential in enterprise systems.",hint:"getMessage(), getCause(), and printStackTrace() provide full diagnostic context.",level:"Beginner",codeExample:'catch (Exception e) { log.error("Operation failed: {}", e.getMessage(), e); }'}];function h(){return e.jsxs("div",{className:"space-y-12 px-4 md:px-8 py-8 text-slate-200 bg-slate-900 min-h-screen",children:[e.jsxs("header",{className:"space-y-4 border-b border-slate-800 pb-6",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"px-3 py-1 bg-sky-500/10 text-sky-400 border border-sky-500/20 text-xs font-semibold rounded-full uppercase tracking-wider",children:"Module 004_002 · Topic 1"}),e.jsx("span",{className:"px-3 py-1 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-xs font-semibold rounded-full",children:"Exception Interception"})]}),e.jsxs("h1",{className:"text-xl sm:text-2xl md:text-3xl font-bold text-white tracking-tight",children:["The ",e.jsx("code",{className:"text-emerald-400 font-mono",children:"catch"})," Block: Intercepting & Inspecting Exception Diagnostics"]}),e.jsxs("p",{className:"text-base md:text-lg text-slate-400 leading-relaxed max-w-4xl",children:["Intercept errors with surgical precision: extracting descriptive messages via ",e.jsx("code",{className:"text-emerald-300 font-mono",children:"getMessage()"})," and logging call-stack execution paths."]})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsxs("h2",{className:"text-2xl font-bold text-emerald-400 flex items-center gap-2",children:[e.jsx("span",{children:"💻"})," Hands-On Java Demo Code"]}),e.jsx(t,{fileModule:s,title:"CatchBlockInspectionDemo.java",highlightLines:[7,10,11,13,14,15,16,17,20]})]}),e.jsx("section",{className:"space-y-4",children:e.jsx(n,{title:"Catch Block FAQs",questions:o})}),e.jsx("section",{className:"space-y-4",children:e.jsx(a,{content:c,title:"Module 004_002 Topic 1: The catch Block",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Printable Note",downloadFileName:"004_002_topic1_catch_block_note.txt"})}),e.jsx(r,{note:"Never leave an empty catch block: 'catch (Exception e) {}'! That is called 'swallowing the exception' and it makes debugging impossible when something fails silently in production! — Sukanta Hui"})]})}export{h as default};
