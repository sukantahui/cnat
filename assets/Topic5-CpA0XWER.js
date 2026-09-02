import{j as e}from"./vendor-react-core-Doz9nIC6.js";import{J as t}from"./JavaFileLoader-BfBG3xz_.js";import{F as a}from"./FAQTemplate-BHhlgA96.js";import{P as r}from"./PlainTextPrint-C08xhKA4.js";import{T as n}from"./TeacherSukantaHui-RpFLNJ5A.js";import"./JavaCodeBlock-BwsLxS3r.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-wprqVFW_.js";const s=`/**\r
 * Java Core Tutorial - Module 003_006: Regular Expressions (java.util.regex)\r
 * Topic 5: Java Escaping Requirement: Why Double Backslashes (\\\\d, \\\\w) Are Mandatory\r
 * Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
 */\r
\r
package com.coderaccotax.javatutorial.regex;\r
\r
public class JavaDoubleBackslashEscapingDemo {\r
\r
    public static void main(String[] args) {\r
        System.out.println("==========================================================================");\r
        System.out.println(" TOPIC 5: JAVA DOUBLE BACKSLASH (\\\\\\\\) ESCAPING - BARRACKPORE");\r
        System.out.println("==========================================================================\\n");\r
\r
        System.out.println(">>> Why does Java require '\\\\d' instead of '\\d'?");\r
        System.out.println();\r
        System.out.println("  STEP 1: Java String Literal Compiler Parsing:");\r
        System.out.println("  - In Java source code, the backslash '\\\\' is an escape prefix for chars like '\\\\n', '\\\\t'.");\r
        System.out.println("  - If you write "\\\\d", the Java compiler looks for an escape sequence '\\\\d' and fails with a COMPILE ERROR!");\r
        System.out.println("  - To put a single literal backslash into the String in RAM, you must write "\\\\\\\\".");\r
        System.out.println();\r
        System.out.println("  STEP 2: Regex Engine Regex Parsing:");\r
        System.out.println("  - The Regex engine receives the string containing '\\\\d' in memory.");\r
        System.out.println("  - The regex parser recognizes '\\\\d' as the DIGIT meta-character!");\r
        System.out.println();\r
        System.out.println("  ESCAPING A LITERAL DOT ('.'):");\r
        System.out.println("  - In Regex, '.' means ANY character.");\r
        System.out.println("  - To match a literal dot (like in IP or email), regex needs '\\\\.'.");\r
        System.out.println("  - Therefore, in Java code you must write: "\\\\\\\\."!");\r
\r
        String filename = "report.pdf";\r
        boolean isPdf = filename.matches(".+\\\\\\\\.pdf"); // Escaped literal dot before 'pdf'\r
        System.out.println("\\n>>> Verification: Does '" + filename + "' end with literal '.pdf'? " + isPdf);\r
\r
        System.out.println("\\n==========================================================================");\r
    }\r
}`,i=`================================================================================\r
JAVA CORE TUTORIAL - QUICK REVISION GUIDE\r
Module 003_006: Regular Expressions (Regex)\r
Topic 5: Java Double Backslash Escaping\r
Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
================================================================================\r
\r
1. ESCAPING TWO-TIER ARCHITECTURE:\r
   - Tier 1: Java String literal compiler (consumes 1st '\\').\r
   - Tier 2: Regex engine parser (interprets '\\d', '\\w', '\\.').\r
   - Literal dot in Java code: '\\\\.'.\r
   - Literal backslash in Java code: '\\\\\\\\'.\r
\r
================================================================================\r
Classroom Practice: Barrackpore Academy | Mentor: Sukanta Hui\r
================================================================================`,o=[{question:'Why do Java regular expressions require double backslashes (e.g. "\\\\d" instead of "\\d") in string literals?',shortAnswer:"Because the backslash '\\' is an escape character for the Java compiler itself. The first backslash escapes the second backslash so that a single literal backslash character is embedded into the string in memory. When the Regex engine receives '\\d' in memory, it interprets it as the digit meta-character.",explanation:'To match a literal backslash in regex, you need 4 backslashes: "\\\\\\\\".',hint:"The Java compiler consumes the first backslash to produce a literal backslash for the regex engine.",level:"Beginner",codeExample:'Pattern.compile("\\\\d+"); // Produces \\d in memory for the regex engine'}];function g(){return e.jsxs("div",{className:"space-y-12 px-4 md:px-8 py-8 text-slate-200 bg-slate-900 min-h-screen",children:[e.jsxs("header",{className:"space-y-4 border-b border-slate-800 pb-6",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"px-3 py-1 bg-sky-500/10 text-sky-400 border border-sky-500/20 text-xs font-semibold rounded-full uppercase tracking-wider",children:"Module 003_006 · Topic 5"}),e.jsx("span",{className:"px-3 py-1 bg-amber-500/10 text-amber-400 border border-amber-500/20 text-xs font-semibold rounded-full",children:"Escaping Architecture"})]}),e.jsxs("h1",{className:"text-xl sm:text-2xl md:text-3xl font-bold text-white tracking-tight",children:["Java Escaping Requirement: Why Double Backslashes (",e.jsx("code",{className:"text-amber-400 font-mono",children:"\\d"}),", ",e.jsx("code",{className:"text-amber-400 font-mono",children:"\\."}),") Are Mandatory"]}),e.jsx("p",{className:"text-base md:text-lg text-slate-400 leading-relaxed max-w-4xl",children:"Understand the two-tier parsing pipeline: tracing how the Java language compiler and the regex engine interpret backslash sequences in string literals."})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsxs("h2",{className:"text-2xl font-bold text-emerald-400 flex items-center gap-2",children:[e.jsx("span",{children:"💻"})," Hands-On Java Demo Code"]}),e.jsx(t,{fileModule:s,title:"JavaDoubleBackslashEscapingDemo.java",highlightLines:[7,14,15,16,20,21,26,27]})]}),e.jsx("section",{className:"space-y-4",children:e.jsx(a,{title:"Double Backslash FAQs",questions:o})}),e.jsx("section",{className:"space-y-4",children:e.jsx(r,{content:i,title:"Module 003_006 Topic 5: Double Backslash Escaping",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Printable Note",downloadFileName:"003_006_topic5_double_backslash_note.txt"})}),e.jsx(n,{note:"If you want to match a literal dot in a filename like 'test.txt', writing 'test.txt' will match 'testXtxt' because '.' is any character! You must write 'test\\\\.txt'! — Sukanta Hui"})]})}export{g as default};
