import{j as e}from"./vendor-react-core-Doz9nIC6.js";import{J as t}from"./JavaFileLoader-BfBG3xz_.js";import{F as n}from"./FAQTemplate-BHhlgA96.js";import{P as a}from"./PlainTextPrint-C08xhKA4.js";import{T as r}from"./TeacherSukantaHui-CEPuAfsb.js";import"./JavaCodeBlock-BwsLxS3r.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-DGCamHnX.js";const o=`/**\r
 * Java Core Tutorial - Module 003_002: StringBuilder, StringBuffer & String Formatting\r
 * Topic 9: Modern Java Text Blocks (Java 15+ JEP 378 Standard): Multi-Line Triple Quotes\r
 * Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
 */\r
\r
package com.coderaccotax.javatutorial.stringbuilder;\r
\r
public class ModernJavaTextBlocksDemo {\r
\r
    public static void main(String[] args) {\r
        System.out.println("==========================================================================");\r
        System.out.println(" TOPIC 9: MODERN JAVA TEXT BLOCKS (JAVA 15+) - BARRACKPORE");\r
        System.out.println("==========================================================================\\n");\r
\r
        // 1. Legacy Pre-Java 15 Multi-line String (Ugly with escape chars & concatenation):\r
        String legacyJson = "{\\n" +\r
                "  \\"name\\": \\"Swadeep Paul\\",\\n" +\r
                "  \\"hub\\": \\"Barrackpore\\"\\n" +\r
                "}";\r
\r
        // 2. Modern Java 15+ Text Block (Triple Quotes):\r
        String modernJson = """\r
                {\r
                  "name": "Swadeep Paul",\r
                  "hub": "Barrackpore",\r
                  "course": "Java Core Pro"\r
                }\r
                """;\r
\r
        System.out.println(">>> 1. Legacy Escaped String Output:");\r
        System.out.println(legacyJson);\r
\r
        System.out.println("\\n>>> 2. Modern Java 15+ Text Block Output (Zero escape backslashes!):");\r
        System.out.println(modernJson);\r
\r
        System.out.println("==========================================================================");\r
    }\r
}`,s=`================================================================================\r
JAVA CORE TUTORIAL - QUICK REVISION GUIDE\r
Module 003_002: StringBuilder, StringBuffer & String Formatting\r
Topic 9: Modern Java Text Blocks\r
Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
================================================================================\r
\r
1. TEXT BLOCKS RULES (Java 15+):\r
   - Opens with '"""' followed immediately by a newline.\r
   - Closes with '"""'.\r
   - Double quotes ('"') do NOT need backslash escapes inside Text Blocks.\r
   - Automatically computes and removes incidental indentation.\r
\r
================================================================================\r
Classroom Practice: Barrackpore Academy | Mentor: Sukanta Hui\r
================================================================================`,i=[{question:"What are Java Text Blocks (standardized in Java 15 JEP 378) and what problem do they solve?",shortAnswer:`Text Blocks are multi-line string literals enclosed in triple quotes (\\"\\"\\") that automatically preserve formatting without requiring '\\\\n' or escaped quotes. They eliminate ugly string concatenation when embedding JSON, SQL, or HTML in Java source code.`,explanation:"The opening triple quotes must be followed by an immediate newline.",hint:`Multi-line string literals using triple quotes ('"""') standardized in Java 15.`,level:"Intermediate",codeExample:'String json = \\"\\"\\"\\n{\\n  \\\\\\"name\\\\\\": \\\\\\"Swadeep\\\\\\"\\n}\\n\\"\\"\\";'}];function h(){return e.jsxs("div",{className:"space-y-12 px-4 md:px-8 py-8 text-slate-200 bg-slate-900 min-h-screen",children:[e.jsxs("header",{className:"space-y-4 border-b border-slate-800 pb-6",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"px-3 py-1 bg-sky-500/10 text-sky-400 border border-sky-500/20 text-xs font-semibold rounded-full uppercase tracking-wider",children:"Module 003_002 · Topic 9"}),e.jsx("span",{className:"px-3 py-1 bg-purple-500/10 text-purple-400 border border-purple-500/20 text-xs font-semibold rounded-full",children:"Modern Java 15+ Feature"})]}),e.jsxs("h1",{className:"text-xl sm:text-2xl md:text-3xl font-bold text-white tracking-tight",children:["Modern Java Text Blocks (Java 15+): Multi-Line String Literals (",e.jsx("code",{className:"text-purple-400 font-mono",children:'"""'}),")"]}),e.jsx("p",{className:"text-base md:text-lg text-slate-400 leading-relaxed max-w-4xl",children:"Say goodbye to ugly string concatenation and backslash clutter: embedding multi-line JSON, SQL, and HTML templates naturally with Java 15 triple-quoted Text Blocks."})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsxs("h2",{className:"text-2xl font-bold text-emerald-400 flex items-center gap-2",children:[e.jsx("span",{children:"💻"})," Hands-On Java Demo Code"]}),e.jsx(t,{fileModule:o,title:"ModernJavaTextBlocksDemo.java",highlightLines:[7,14,15,21,22,23,24,25,26]})]}),e.jsx("section",{className:"space-y-4",children:e.jsx(n,{title:"Text Blocks FAQs",questions:i})}),e.jsx("section",{className:"space-y-4",children:e.jsx(a,{content:s,title:"Module 003_002 Topic 9: Modern Text Blocks",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Printable Note",downloadFileName:"003_002_topic9_text_blocks_note.txt"})}),e.jsx(r,{note:"Text blocks are one of the most beloved modern Java features! You can paste raw JSON or SQL straight into Java source code without escaping quotes or adding '+' signs! — Sukanta Hui"})]})}export{h as default};
