import{j as e}from"./vendor-react-core-Doz9nIC6.js";import{J as t}from"./JavaFileLoader-BfBG3xz_.js";import{F as n}from"./FAQTemplate-CkSqDH4B.js";import{P as r}from"./PlainTextPrint-C08xhKA4.js";import{T as a}from"./TeacherSukantaHui-CyIG3xbg.js";import"./JavaCodeBlock-BwsLxS3r.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-CIaKtAt4.js";const o=`/**\r
 * Java Core Tutorial - Module 003_002: StringBuilder, StringBuffer & String Formatting\r
 * Topic 10: Whitespace & Interpolation in Text Blocks: formatted(), stripIndent(), translateEscapes()\r
 * Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
 */\r
\r
package com.coderaccotax.javatutorial.stringbuilder;\r
\r
public class TextBlockMethodsAndInterpolationDemo {\r
\r
    public static void main(String[] args) {\r
        System.out.println("==========================================================================");\r
        System.out.println(" TOPIC 10: TEXT BLOCK HELPER METHODS - BARRACKPORE");\r
        System.out.println("==========================================================================\\n");\r
\r
        String studentName = "Swadeep Paul";\r
        String hub = "Barrackpore Central";\r
        double gpa = 9.85;\r
\r
        // 1. Text Block Interpolation using .formatted() (Instance method added in Java 15!):\r
        String template = """\r
                {\r
                  "student": "%s",\r
                  "hub": "%s",\r
                  "gpa": %.2f\r
                }\r
                """.formatted(studentName, hub, gpa);\r
\r
        System.out.println(">>> 1. Interpolated Text Block via .formatted():");\r
        System.out.println(template);\r
\r
        // 2. Line continuation using trailing backslash '\\' (prevents newline):\r
        String singleLineQuery = """\r
                SELECT * FROM students                 WHERE hub = 'Barrackpore'                 AND active = true;                """;\r
\r
        System.out.println(">>> 2. Single Line Output with Escaped Newlines ('\\\\'):");\r
        System.out.println("  " + singleLineQuery);\r
\r
        System.out.println("\\n==========================================================================");\r
    }\r
}`,i=`================================================================================\r
JAVA CORE TUTORIAL - QUICK REVISION GUIDE\r
Module 003_002: StringBuilder, StringBuffer & String Formatting\r
Topic 10: Text Block Interpolation & Methods\r
Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
================================================================================\r
\r
1. TEXT BLOCK UTILITIES:\r
   - 'textBlock.formatted(args...)'  &rarr; Instance String.format() shorthand.\r
   - '\\' (Trailing backslash)        &rarr; Suppresses newline (Line continuation).\r
   - '\\s'                            &rarr; Preserves explicit trailing whitespace.\r
   - 'stripIndent()'                 &rarr; Strips common leading indentation.\r
\r
================================================================================\r
Classroom Practice: Barrackpore Academy | Mentor: Sukanta Hui\r
================================================================================`,s=[{question:"What does the '.formatted(...)' instance method do on modern Java Strings and Text Blocks?",shortAnswer:"The '.formatted(...)' method (introduced in Java 15) is an instance method equivalent to 'String.format(this, args)', allowing clean, readable inline string formatting directly on text blocks and templates.",explanation:"Greatly simplifies string interpolation in Java 15+.",hint:"Instance method shorthand for String.format() on text blocks.",level:"Intermediate",codeExample:'String json = """{\\"id\\": %d}""".formatted(42);'}];function g(){return e.jsxs("div",{className:"space-y-12 px-4 md:px-8 py-8 text-slate-200 bg-slate-900 min-h-screen",children:[e.jsxs("header",{className:"space-y-4 border-b border-slate-800 pb-6",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"px-3 py-1 bg-sky-500/10 text-sky-400 border border-sky-500/20 text-xs font-semibold rounded-full uppercase tracking-wider",children:"Module 003_002 · Topic 10"}),e.jsx("span",{className:"px-3 py-1 bg-purple-500/10 text-purple-400 border border-purple-500/20 text-xs font-semibold rounded-full",children:"Modern Text Utilities"})]}),e.jsxs("h1",{className:"text-3xl md:text-4xl font-extrabold text-white tracking-tight",children:["Text Block Interpolation: ",e.jsx("code",{className:"text-purple-400 font-mono",children:".formatted()"})," & Line Continuations"]}),e.jsxs("p",{className:"text-base md:text-lg text-slate-400 leading-relaxed max-w-4xl",children:["Learn modern template interpolation: using Java 15 ",e.jsx("code",{className:"text-emerald-300 font-mono",children:".formatted()"})," on text blocks, suppressing line breaks with trailing backslashes, and preserving trailing whitespace."]})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsxs("h2",{className:"text-2xl font-bold text-emerald-400 flex items-center gap-2",children:[e.jsx("span",{children:"💻"})," Hands-On Java Demo Code"]}),e.jsx(t,{fileModule:o,title:"TextBlockMethodsAndInterpolationDemo.java",highlightLines:[7,18,19,20,21,22,23,24,30,31,32]})]}),e.jsx("section",{className:"space-y-4",children:e.jsx(n,{title:"Text Block Methods FAQs",questions:s})}),e.jsx("section",{className:"space-y-4",children:e.jsx(r,{content:i,title:"Module 003_002 Topic 10: Text Block Methods",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Printable Note",downloadFileName:"003_002_topic10_tb_methods_note.txt"})}),e.jsx(a,{note:"Using .formatted() at the end of a Text Block gives you clean, python-like template interpolation without needing third-party template libraries! — Sukanta Hui"})]})}export{g as default};
