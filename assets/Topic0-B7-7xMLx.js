import{j as e}from"./vendor-react-core-Doz9nIC6.js";import{J as n}from"./JavaFileLoader-BfBG3xz_.js";import{F as t}from"./FAQTemplate-BHhlgA96.js";import{P as r}from"./PlainTextPrint-C08xhKA4.js";import{T as a}from"./TeacherSukantaHui-BaJcBHAy.js";import"./JavaCodeBlock-BwsLxS3r.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-8ao-0upJ.js";const s=`/**\r
 * Java Core Tutorial - Module 004_004: Try-with-Resources & AutoCloseable\r
 * Topic 0: The Flaws of Legacy Manual Resource Cleanup in 'finally' Blocks\r
 * Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
 */\r
\r
package com.coderaccotax.javatutorial.exceptions;\r
\r
import java.io.FileInputStream;\r
import java.io.FileOutputStream;\r
import java.io.IOException;\r
\r
public class LegacyFinallyFlawsDemo {\r
\r
    // ANTI-PATTERN: Pre-Java 7 Verbose, Error-Prone Manual Resource Teardown:\r
    public static void copyFileLegacy(String src, String dest) {\r
        FileInputStream in = null;\r
        FileOutputStream out = null;\r
\r
        try {\r
            in = new FileInputStream(src);\r
            out = new FileOutputStream(dest);\r
\r
            int b;\r
            while ((b = in.read()) != -1) {\r
                out.write(b);\r
            }\r
            System.out.println("  [LEGACY] File copied successfully.");\r
\r
        } catch (IOException e) {\r
            System.out.println("  [LEGACY ERROR] " + e.getMessage());\r
        } finally {\r
            // NIGHTMARE BOILERPLATE: Closing resources safely in finally requires nested try-catches!\r
            if (in != null) {\r
                try {\r
                    in.close();\r
                } catch (IOException e) {\r
                    // Suppresses original exception if in.close() fails!\r
                }\r
            }\r
            if (out != null) {\r
                try {\r
                    out.close();\r
                } catch (IOException e) {\r
                    // Suppresses original exception if out.close() fails!\r
                }\r
            }\r
        }\r
    }\r
\r
    public static void main(String[] args) {\r
        System.out.println("==========================================================================");\r
        System.out.println(" TOPIC 0: FLAWS OF LEGACY 'finally' RESOURCE CLEANUP - BARRACKPORE");\r
        System.out.println("==========================================================================\\n");\r
\r
        System.out.println(">>> 3 CRITICAL FLAWS OF PRE-JAVA 7 RESOURCE MANAGEMENT:");\r
        System.out.println("  1. Massive Boilerplate: 20 lines of nested try-catch-finally code to close 2 streams.");\r
        System.out.println("  2. Exception Masking: If 'in.close()' throws an exception, 'out.close()' is NEVER called, leaking memory!");\r
        System.out.println("  3. Suppressed Diagnostics: An exception in 'finally' completely wipes out the original exception from 'try'.");\r
\r
        System.out.println("\\n==========================================================================");\r
    }\r
}`,l=`================================================================================\r
JAVA CORE TUTORIAL - QUICK REVISION GUIDE\r
Module 004_004: Try-with-Resources & AutoCloseable\r
Topic 0: Flaws of Legacy finally\r
Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
================================================================================\r
\r
1. LEGACY CLEANUP ANTI-PATTERNS:\r
   - Nested try-catch blocks inside 'finally'.\r
   - Null-checks required before closing.\r
   - If first 'close()' fails, subsequent streams are never closed (leak).\r
   - Clutters code and masks original business exceptions.\r
\r
================================================================================\r
Classroom Practice: Barrackpore Academy | Mentor: Sukanta Hui\r
================================================================================`,i=[{question:"What were the 3 severe issues with managing resources (like File and DB streams) using legacy 'finally' blocks in Java?",shortAnswer:"1. Massive nested boilerplate (checking for null and wrapping each 'close()' in its own try-catch). 2. Resource leak cascades: If the first stream's close() threw an exception, the second stream was never closed. 3. Exception masking: A failure during close() in finally completely obliterated the original, more important business exception from the try block.",explanation:"Effective Java Item 9 mandates: Prefer try-with-resources to try-finally.",hint:"Nested boilerplate, leak cascades if first close() throws, and exception masking.",level:"Beginner",codeExample:"// Ugly legacy pattern: finally { if (s!=null) try { s.close(); } catch(e){} }"}];function f(){return e.jsxs("div",{className:"space-y-12 px-4 md:px-8 py-8 text-slate-200 bg-slate-900 min-h-screen",children:[e.jsxs("header",{className:"space-y-4 border-b border-slate-800 pb-6",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"px-3 py-1 bg-sky-500/10 text-sky-400 border border-sky-500/20 text-xs font-semibold rounded-full uppercase tracking-wider",children:"Module 004_004 · Topic 0"}),e.jsx("span",{className:"px-3 py-1 bg-rose-500/10 text-rose-400 border border-rose-500/20 text-xs font-semibold rounded-full",children:"Legacy Anti-Patterns"})]}),e.jsxs("h1",{className:"text-xl sm:text-2xl md:text-3xl font-bold text-white tracking-tight",children:["The Problem with Manual Resource Cleanup in Legacy ",e.jsx("code",{className:"text-rose-400 font-mono",children:"finally"})," Blocks"]}),e.jsx("p",{className:"text-base md:text-lg text-slate-400 leading-relaxed max-w-4xl",children:"Discover why pre-Java 7 manual resource teardowns caused devastating production leaks, masked diagnostic stack traces, and produced unwieldy nested boilerplate."})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsxs("h2",{className:"text-2xl font-bold text-emerald-400 flex items-center gap-2",children:[e.jsx("span",{children:"💻"})," Hands-On Java Demo Code"]}),e.jsx(n,{fileModule:s,title:"LegacyFinallyFlawsDemo.java",highlightLines:[7,14,15,27,28,29,30,35,36,37]})]}),e.jsx("section",{className:"space-y-4",children:e.jsx(t,{title:"Legacy Cleanup FAQs",questions:i})}),e.jsx("section",{className:"space-y-4",children:e.jsx(r,{content:l,title:"Module 004_004 Topic 0: Legacy Cleanup Flaws",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Printable Note",downloadFileName:"004_004_topic0_legacy_cleanup_flaws_note.txt"})}),e.jsx(a,{note:"In the old days of Java 1.4 to 6, closing 3 database objects (Connection, Statement, ResultSet) took 30 lines of ugly finally code! Java 7 changed everything with Try-with-Resources! — Sukanta Hui"})]})}export{f as default};
