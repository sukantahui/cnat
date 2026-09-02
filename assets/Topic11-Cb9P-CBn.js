import{j as e}from"./vendor-react-core-Doz9nIC6.js";import{J as r}from"./JavaFileLoader-BfBG3xz_.js";import{F as t}from"./FAQTemplate-BHhlgA96.js";import{P as a}from"./PlainTextPrint-C08xhKA4.js";import{T as n}from"./TeacherSukantaHui-RpFLNJ5A.js";import"./JavaCodeBlock-BwsLxS3r.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-wprqVFW_.js";const s=`/**\r
 * Java Core Tutorial - Module 004_004: Try-with-Resources & AutoCloseable\r
 * Topic 11: Definitive Architectural Comparison: Legacy try-finally vs Modern ARM (Capstone)\r
 * Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
 */\r
\r
package com.coderaccotax.javatutorial.exceptions;\r
\r
import java.io.StringReader;\r
\r
public class LegacyVsModernArmCapstoneDemo {\r
\r
    public static void main(String[] args) {\r
        System.out.println("==========================================================================");\r
        System.out.println(" TOPIC 11: LEGACY vs MODERN ARM CAPSTONE - BARRACKPORE");\r
        System.out.println("==========================================================================\\n");\r
\r
        System.out.println("+--------------------------+-------------------------------------+-------------------------------------+");\r
        System.out.println("| Evaluation Criterion     | Legacy try-finally (Java 1.0 - 6)   | Modern Try-with-Resources (Java 7+) |");\r
        System.out.println("+--------------------------+-------------------------------------+-------------------------------------+");\r
        System.out.println("| Boilerplate Verbosity    | Massive (20+ lines for 2 streams)   | Minimal (1 single line in header)   |");\r
        System.out.println("| Exception Masking        | High Risk (Finally error masks Try) | Zero Risk (Suppressed exceptions)   |");\r
        System.out.println("| Closing Order            | Manual, error-prone ordering        | Automatic reverse order (LIFO)      |");\r
        System.out.println("| Multi-Resource Safety    | First failure leaks other resources | All resources guaranteed closing    |");\r
        System.out.println("| Code Readability         | Severely cluttered with try-catches | Clean, declarative, and elegant     |");\r
        System.out.println("+--------------------------+-------------------------------------+-------------------------------------+");\r
\r
        System.out.println("\\n>>> Demonstrating Ultra-Clean Modern Try-with-Resources:");\r
        try (StringReader reader = new StringReader("Barrackpore Master Roadmap 2026")) {\r
            int charVal = reader.read();\r
            System.out.println("  Read character: '" + (char) charVal + "'");\r
        } catch (Exception e) {\r
            System.out.println("  [ERROR] " + e.getMessage());\r
        }\r
\r
        System.out.println("\\n==========================================================================");\r
        System.out.println(" MODULE 004_004 TRY-WITH-RESOURCES & AUTOCLOSEABLE 100% COMPLETE!");\r
        System.out.println("==========================================================================");\r
    }\r
}`,o=`================================================================================\r
JAVA CORE TUTORIAL - QUICK REVISION GUIDE\r
Module 004_004: Try-with-Resources & AutoCloseable\r
Topic 11: Legacy vs ARM Capstone\r
Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
================================================================================\r
\r
1. MODULE 004_004 SUMMARY:\r
   - Try-with-resources eliminates legacy finally boilerplate.\r
   - All managed resources must implement 'java.lang.AutoCloseable'.\r
   - 'java.io.Closeable' is the I/O sub-interface with 'IOException'.\r
   - Resources close in reverse order of declaration (LIFO).\r
   - Multiple resources separated by semicolons ';'.\r
   - Java 9 allows effectively final variables directly.\r
   - Secondary close failures attached via 'addSuppressed()' and read via 'getSuppressed()'.\r
   - Always prefer try-with-resources over try-finally.\r
\r
================================================================================\r
Classroom Practice: Barrackpore Academy | Mentor: Sukanta Hui\r
================================================================================`,i=[{question:"Why is Try-with-Resources unanimously considered one of the greatest enhancements in Java history?",shortAnswer:"Because it completely eradicated resource leak bugs, eliminated 80% of nested finally boilerplate, guaranteed reverse-order teardown, and introduced Suppressed Exceptions so secondary cleanup failures never mask critical primary business errors.",explanation:"Effective Java Item 9: Always prefer try-with-resources to try-finally.",hint:"Eradicates resource leaks, eliminates boilerplate, and prevents exception masking via suppressed errors.",level:"Advanced",codeExample:"try (var s = open()) { s.read(); } // Clean, safe, leak-proof"}];function h(){return e.jsxs("div",{className:"space-y-12 px-4 md:px-8 py-8 text-slate-200 bg-slate-900 min-h-screen",children:[e.jsxs("header",{className:"space-y-4 border-b border-slate-800 pb-6",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"px-3 py-1 bg-sky-500/10 text-sky-400 border border-sky-500/20 text-xs font-semibold rounded-full uppercase tracking-wider",children:"Module 004_004 · Topic 11"}),e.jsx("span",{className:"px-3 py-1 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-xs font-semibold rounded-full",children:"ARM Capstone"})]}),e.jsxs("h1",{className:"text-xl sm:text-2xl md:text-3xl font-bold text-white tracking-tight",children:["Comparing Legacy ",e.jsx("code",{className:"text-rose-400 font-mono",children:"try-finally"})," vs Modern ",e.jsx("code",{className:"text-emerald-400 font-mono",children:"try-with-resources"})," (Capstone)"]}),e.jsx("p",{className:"text-base md:text-lg text-slate-400 leading-relaxed max-w-4xl",children:"Synthesize automatic resource management: comparing legacy vs modern paradigms, verifying leak elimination, and reviewing Effective Java Item 9 mandates."})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsxs("h2",{className:"text-2xl font-bold text-emerald-400 flex items-center gap-2",children:[e.jsx("span",{children:"💻"})," Hands-On Java Demo Code"]}),e.jsx(r,{fileModule:s,title:"LegacyVsModernArmCapstoneDemo.java",highlightLines:[7,14,15,16,17,18,23,24,25]})]}),e.jsx("section",{className:"space-y-4",children:e.jsx(t,{title:"ARM Capstone FAQs",questions:i})}),e.jsx("section",{className:"space-y-4",children:e.jsx(a,{content:o,title:"Module 004_004 Topic 11: ARM Capstone",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Printable Note",downloadFileName:"004_004_topic11_arm_capstone_note.txt"})}),e.jsx(n,{note:"Congratulations on completing Module 004_004! You have mastered Automatic Resource Management (ARM), AutoCloseable, reverse closing order, multi-resource headers, Java 9 enhancements, and suppressed exceptions! — Sukanta Hui"})]})}export{h as default};
