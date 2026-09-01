import{j as e}from"./vendor-react-core-Doz9nIC6.js";import{J as n}from"./JavaFileLoader-BfBG3xz_.js";import{F as t}from"./FAQTemplate-BHhlgA96.js";import{P as r}from"./PlainTextPrint-C08xhKA4.js";import{T as a}from"./TeacherSukantaHui-CEPuAfsb.js";import"./JavaCodeBlock-BwsLxS3r.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-DGCamHnX.js";const o=`/**\r
 * Java Core Tutorial - Module 003_002: StringBuilder, StringBuffer & String Formatting\r
 * Topic 7: Formatted Output with printf() and String.format() (%s, %d, %f, %b, %x)\r
 * Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
 */\r
\r
package com.coderaccotax.javatutorial.stringbuilder;\r
\r
public class StringFormattingSpecifiersDemo {\r
\r
    public static void main(String[] args) {\r
        System.out.println("==========================================================================");\r
        System.out.println(" TOPIC 7: String.format() & printf() SPECIFIERS - BARRACKPORE");\r
        System.out.println("==========================================================================\\n");\r
\r
        String name = "Swadeep Paul";\r
        int roll = 101;\r
        double fee = 25000.758;\r
        boolean passed = true;\r
        int hexValue = 255;\r
\r
        // Formatted String Construction:\r
        String reportCard = String.format(\r
                "Trainee: %s | Roll: %04d | Fee: ₹%.2f | Passed: %b | Hex: 0x%X",\r
                name, roll, fee, passed, hexValue\r
        );\r
\r
        System.out.println(">>> 1. Assembled with String.format():");\r
        System.out.println("  " + reportCard);\r
\r
        System.out.println("\\n>>> 2. Common Format Specifiers Cheatsheet:");\r
        System.out.println("  %s : String argument");\r
        System.out.println("  %d : Decimal integer (e.g. %04d -> zero-padded to 4 digits)");\r
        System.out.println("  %f : Floating-point number (e.g. %.2f -> rounded to 2 decimals)");\r
        System.out.println("  %b : Boolean value ('true'/'false')");\r
        System.out.println("  %x / %X : Hexadecimal representation (lower/upper)");\r
        System.out.println("  %n : Platform-independent newline separator (CRLF on Windows, LF on Linux)");\r
\r
        System.out.println("\\n==========================================================================");\r
    }\r
}`,i=`================================================================================\r
JAVA CORE TUTORIAL - QUICK REVISION GUIDE\r
Module 003_002: StringBuilder, StringBuffer & String Formatting\r
Topic 7: String Formatting Specifiers\r
Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
================================================================================\r
\r
1. FORMAT SPECIFIERS:\r
   - '%s' : String\r
   - '%d' : Integer\r
   - '%f' : Float / Double (e.g. '%.2f')\r
   - '%b' : Boolean\r
   - '%x' : Hexadecimal\r
   - '%n' : Platform newline\r
\r
================================================================================\r
Classroom Practice: Barrackpore Academy | Mentor: Sukanta Hui\r
================================================================================`,s=[{question:"Why should you use '%n' instead of '\\n' inside 'String.format()' and 'System.out.printf()'?",shortAnswer:"'%n' produces the correct platform-specific newline character (\\r\\n on Windows, \\n on Linux/macOS), ensuring consistent multi-line formatting across all operating systems.",explanation:"'%n' is portable and cross-platform.",hint:"Produces platform-independent newline characters across Windows and Linux.",level:"Beginner",codeExample:'String.format("Line 1%nLine 2"); // Cross-platform newline'}];function f(){return e.jsxs("div",{className:"space-y-12 px-4 md:px-8 py-8 text-slate-200 bg-slate-900 min-h-screen",children:[e.jsxs("header",{className:"space-y-4 border-b border-slate-800 pb-6",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"px-3 py-1 bg-sky-500/10 text-sky-400 border border-sky-500/20 text-xs font-semibold rounded-full uppercase tracking-wider",children:"Module 003_002 · Topic 7"}),e.jsx("span",{className:"px-3 py-1 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-xs font-semibold rounded-full",children:"Formatting Engine"})]}),e.jsxs("h1",{className:"text-xl sm:text-2xl md:text-3xl font-bold text-white tracking-tight",children:["Formatted Output with ",e.jsx("code",{className:"text-emerald-400 font-mono",children:"printf()"})," & ",e.jsx("code",{className:"text-emerald-400 font-mono",children:"String.format()"})]}),e.jsxs("p",{className:"text-base md:text-lg text-slate-400 leading-relaxed max-w-4xl",children:["Master the Java formatting engine: precision rounding with ",e.jsx("code",{className:"text-emerald-300 font-mono",children:"%.2f"}),", zero-padding, and platform-independent newlines via ",e.jsx("code",{className:"text-emerald-300 font-mono",children:"%n"}),"."]})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsxs("h2",{className:"text-2xl font-bold text-emerald-400 flex items-center gap-2",children:[e.jsx("span",{children:"💻"})," Hands-On Java Demo Code"]}),e.jsx(n,{fileModule:o,title:"StringFormattingSpecifiersDemo.java",highlightLines:[7,15,16,17,21,22,28]})]}),e.jsx("section",{className:"space-y-4",children:e.jsx(t,{title:"String Formatting FAQs",questions:s})}),e.jsx("section",{className:"space-y-4",children:e.jsx(r,{content:i,title:"Module 003_002 Topic 7: String Formatting",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Printable Note",downloadFileName:"003_002_topic7_string_format_note.txt"})}),e.jsx(a,{note:`Always use %n instead of \r
 in your formatting strings! %n automatically adapts to Windows CRLF and Linux LF without breaking file outputs. — Sukanta Hui`})]})}export{f as default};
