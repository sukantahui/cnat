import{j as e}from"./vendor-react-core-Doz9nIC6.js";import{J as r}from"./JavaFileLoader-BfBG3xz_.js";import{F as s}from"./FAQTemplate-BHhlgA96.js";import{P as t}from"./PlainTextPrint-C08xhKA4.js";import{T as n}from"./TeacherSukantaHui-RpFLNJ5A.js";import"./JavaCodeBlock-BwsLxS3r.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-wprqVFW_.js";const a=`/**\r
 * Java Core Tutorial - Module 004_004: Try-with-Resources & AutoCloseable\r
 * Topic 8: Suppressed Exceptions: Preserving Primary Business Exceptions in ARM\r
 * Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
 */\r
\r
package com.coderaccotax.javatutorial.exceptions;\r
\r
// A resource whose close() method also fails:\r
class FailingResource implements AutoCloseable {\r
    private final String id;\r
\r
    public FailingResource(String id) { this.id = id; }\r
\r
    public void doBusinessTask() {\r
        System.out.println("  [TASK EXECUTING] Executing primary calculation on " + id);\r
        throw new IllegalStateException("PRIMARY FAILURE: Calculation calculation formula invalid in Barrackpore!");\r
    }\r
\r
    @Override\r
    public void close() {\r
        System.out.println("  [CLOSING...] Attempting to close " + id);\r
        throw new RuntimeException("SECONDARY FAILURE: Network socket crashed during close()!");\r
    }\r
}\r
\r
public class SuppressedExceptionsCaptureDemo {\r
\r
    public static void main(String[] args) {\r
        System.out.println("==========================================================================");\r
        System.out.println(" TOPIC 8: SUPPRESSED EXCEPTIONS CAPTURE - BARRACKPORE");\r
        System.out.println("==========================================================================\\n");\r
\r
        System.out.println(">>> Executing ARM where BOTH try-body AND close() throw exceptions:");\r
        try (FailingResource res = new FailingResource("RES_BKP_01")) {\r
            res.doBusinessTask();\r
        } catch (Exception primaryEx) {\r
            System.out.println("\\n>>> 1. PRIMARY EXCEPTION PRESERVED:");\r
            System.out.println("  Class   : " + primaryEx.getClass().getSimpleName());\r
            System.out.println("  Message : " + primaryEx.getMessage());\r
\r
            System.out.println("\\n>>> 2. INSPECTING SUPPRESSED SECONDARY EXCEPTIONS (Throwable.getSuppressed()):");\r
            Throwable[] suppressedArray = primaryEx.getSuppressed();\r
            System.out.println("  Total Suppressed Exceptions Count: " + suppressedArray.length);\r
\r
            for (Throwable sup : suppressedArray) {\r
                System.out.println("  - Suppressed Class   : " + sup.getClass().getSimpleName());\r
                System.out.println("  - Suppressed Message : " + sup.getMessage());\r
            }\r
        }\r
\r
        System.out.println("\\n>>> WHY SUPPRESSED EXCEPTIONS WIN OVER LEGACY FINALLY:");\r
        System.out.println("  In legacy finally, the secondary close() error ERASED the primary business error.");\r
        System.out.println("  In ARM, Java preserves the primary error and attaches secondary errors via addSuppressed()!");\r
\r
        System.out.println("\\n==========================================================================");\r
    }\r
}`,o=`================================================================================\r
JAVA CORE TUTORIAL - QUICK REVISION GUIDE\r
Module 004_004: Try-with-Resources & AutoCloseable\r
Topic 8: Suppressed Exceptions\r
Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
================================================================================\r
\r
1. SUPPRESSED EXCEPTIONS:\r
   - Primary Exception = Error from try block (preserved).\r
   - Suppressed Exception = Error from close() method (attached).\r
   - Access via 'ex.getSuppressed()'.\r
   - Eliminates legacy exception masking.\r
\r
================================================================================\r
Classroom Practice: Barrackpore Academy | Mentor: Sukanta Hui\r
================================================================================`,i=[{question:"What is a 'Suppressed Exception' in Java Try-with-Resources and how do you access it?",shortAnswer:"When both the 'try' block and the automatic 'close()' method throw exceptions, the JVM preserves the try block's exception as the PRIMARY exception. The exception thrown by 'close()' is attached to the primary exception as a 'Suppressed Exception'. You access them via 'primaryException.getSuppressed()'.",explanation:"Introduced in Java 7 to solve the critical legacy flaw of exception masking in finally blocks.",hint:"The primary try exception is kept; secondary close() errors are attached and retrieved via getSuppressed().",level:"Intermediate",codeExample:'for (Throwable s : ex.getSuppressed()) { log.warn("Suppressed error: ", s); }'}];function h(){return e.jsxs("div",{className:"space-y-12 px-4 md:px-8 py-8 text-slate-200 bg-slate-900 min-h-screen",children:[e.jsxs("header",{className:"space-y-4 border-b border-slate-800 pb-6",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"px-3 py-1 bg-sky-500/10 text-sky-400 border border-sky-500/20 text-xs font-semibold rounded-full uppercase tracking-wider",children:"Module 004_004 · Topic 8"}),e.jsx("span",{className:"px-3 py-1 bg-amber-500/10 text-amber-400 border border-amber-500/20 text-xs font-semibold rounded-full",children:"Diagnostic Preservation"})]}),e.jsxs("h1",{className:"text-xl sm:text-2xl md:text-3xl font-bold text-white tracking-tight",children:["Suppressed Exceptions: Capturing Secondary ",e.jsx("code",{className:"text-amber-400 font-mono",children:"close()"})," Failures"]}),e.jsx("p",{className:"text-base md:text-lg text-slate-400 leading-relaxed max-w-4xl",children:"Master deep exception diagnostics: understanding how try-with-resources attaches secondary teardown errors as suppressed exceptions to the primary business fault."})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsxs("h2",{className:"text-2xl font-bold text-emerald-400 flex items-center gap-2",children:[e.jsx("span",{children:"💻"})," Hands-On Java Demo Code"]}),e.jsx(r,{fileModule:a,title:"SuppressedExceptionsCaptureDemo.java",highlightLines:[7,10,11,16,17,26,27,34,35]})]}),e.jsx("section",{className:"space-y-4",children:e.jsx(s,{title:"Suppressed Exceptions FAQs",questions:i})}),e.jsx("section",{className:"space-y-4",children:e.jsx(t,{content:o,title:"Module 004_004 Topic 8: Suppressed Exceptions",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Printable Note",downloadFileName:"004_004_topic8_suppressed_exceptions_note.txt"})}),e.jsx(n,{note:"Before Java 7, if close() failed in finally, it completely erased your original database calculation error! With Suppressed Exceptions, you get both errors in your log file! — Sukanta Hui"})]})}export{h as default};
