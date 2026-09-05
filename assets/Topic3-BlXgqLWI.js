import{j as e}from"./vendor-react-core-Doz9nIC6.js";import{J as t}from"./JavaFileLoader-BfBG3xz_.js";import{F as n}from"./FAQTemplate-BHhlgA96.js";import{P as a}from"./PlainTextPrint-C08xhKA4.js";import{T as r}from"./TeacherSukantaHui-DerPxfxp.js";import"./JavaCodeBlock-BwsLxS3r.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-CH1iX9C8.js";const s=`/**\r
 * Java Core Tutorial - Module 003_006: Regular Expressions (java.util.regex)\r
 * Topic 3: Regex Compilation Flags: CASE_INSENSITIVE, MULTILINE & DOTALL Modes\r
 * Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
 */\r
\r
package com.coderaccotax.javatutorial.regex;\r
\r
import java.util.regex.Matcher;\r
import java.util.regex.Pattern;\r
\r
public class RegexCompilationFlagsDemo {\r
\r
    public static void main(String[] args) {\r
        System.out.println("==========================================================================");\r
        System.out.println(" TOPIC 3: REGEX COMPILATION FLAGS - BARRACKPORE");\r
        System.out.println("==========================================================================\\n");\r
\r
        // 1. CASE_INSENSITIVE Flag (Pattern.CASE_INSENSITIVE or (?i)):\r
        Pattern casePattern = Pattern.compile("java", Pattern.CASE_INSENSITIVE);\r
        Matcher caseMatcher = casePattern.matcher("Java, JAVA, and jAvA");\r
        System.out.println(">>> 1. CASE_INSENSITIVE Matches:");\r
        while (caseMatcher.find()) {\r
            System.out.println("  Found: " + caseMatcher.group());\r
        }\r
\r
        // 2. DOTALL Flag (Pattern.DOTALL or (?s)):\r
        // By default, dot '.' matches ANY char EXCEPT newlines (\\n).\r
        // DOTALL mode makes dot '.' match newline characters as well!\r
        String multiLineText = "<div>\\n  <p>Hello Barrackpore</p>\\n</div>";\r
        Pattern dotAllPattern = Pattern.compile("<div>.*</div>", Pattern.DOTALL);\r
        System.out.println("\\n>>> 2. DOTALL Matching across newlines: " + dotAllPattern.matcher(multiLineText).matches());\r
\r
        // 3. Combining multiple flags using Bitwise OR (|):\r
        Pattern combined = Pattern.compile("^swadeep", Pattern.CASE_INSENSITIVE | Pattern.MULTILINE);\r
        System.out.println("\\n>>> 3. Combined Flags (CASE_INSENSITIVE | MULTILINE) Configured!");\r
\r
        System.out.println("\\n==========================================================================");\r
    }\r
}`,i=`================================================================================\r
JAVA CORE TUTORIAL - QUICK REVISION GUIDE\r
Module 003_006: Regular Expressions (Regex)\r
Topic 3: Regex Flags (CASE_INSENSITIVE, DOTALL)\r
Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
================================================================================\r
\r
1. REGEX FLAGS CHEATSHEET:\r
   - 'Pattern.CASE_INSENSITIVE' ('(?i)') : Ignores uppercase/lowercase.\r
   - 'Pattern.MULTILINE'        ('(?m)') : '^' and '$' match start/end of each line.\r
   - 'Pattern.DOTALL'           ('(?s)') : Dot '.' matches newlines ('\\n').\r
   - Combining flags: 'FLAG1 | FLAG2' (Bitwise OR).\r
\r
================================================================================\r
Classroom Practice: Barrackpore Academy | Mentor: Sukanta Hui\r
================================================================================`,o=[{question:"What does the 'Pattern.DOTALL' flag do in Java regular expressions?",shortAnswer:"By default, the dot meta-character ('.') matches any character EXCEPT newline terminators (\\n, \\r). Enabling 'Pattern.DOTALL' (or inline flag '(?s)') makes '.' match absolutely any character including newlines, allowing cross-line multi-line matching.",explanation:"Combine flags using bitwise OR: Pattern.CASE_INSENSITIVE | Pattern.DOTALL.",hint:"Allows the dot '.' meta-character to match newlines across multi-line text.",level:"Intermediate",codeExample:'Pattern p = Pattern.compile("<div>.*</div>", Pattern.DOTALL);'}];function h(){return e.jsxs("div",{className:"space-y-12 px-4 md:px-8 py-8 text-slate-200 bg-slate-900 min-h-screen",children:[e.jsxs("header",{className:"space-y-4 border-b border-slate-800 pb-6",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"px-3 py-1 bg-sky-500/10 text-sky-400 border border-sky-500/20 text-xs font-semibold rounded-full uppercase tracking-wider",children:"Module 003_006 · Topic 3"}),e.jsx("span",{className:"px-3 py-1 bg-purple-500/10 text-purple-400 border border-purple-500/20 text-xs font-semibold rounded-full",children:"Flag Modifiers"})]}),e.jsxs("h1",{className:"text-xl sm:text-2xl md:text-3xl font-bold text-white tracking-tight",children:["Regex Flags: ",e.jsx("code",{className:"text-purple-400 font-mono",children:"CASE_INSENSITIVE"}),", ",e.jsx("code",{className:"text-emerald-400 font-mono",children:"MULTILINE"})," & ",e.jsx("code",{className:"text-amber-400 font-mono",children:"DOTALL"})]}),e.jsxs("p",{className:"text-base md:text-lg text-slate-400 leading-relaxed max-w-4xl",children:["Learn how to customize pattern compilation rules: matching across newlines with ",e.jsx("code",{className:"text-amber-300 font-mono",children:"Pattern.DOTALL"})," and combining flags using bitwise bitmasks."]})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsxs("h2",{className:"text-2xl font-bold text-emerald-400 flex items-center gap-2",children:[e.jsx("span",{children:"💻"})," Hands-On Java Demo Code"]}),e.jsx(t,{fileModule:s,title:"RegexCompilationFlagsDemo.java",highlightLines:[7,15,16,25,26,29,30]})]}),e.jsx("section",{className:"space-y-4",children:e.jsx(n,{title:"Regex Flags FAQs",questions:o})}),e.jsx("section",{className:"space-y-4",children:e.jsx(a,{content:i,title:"Module 003_006 Topic 3: Regex Flags",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Printable Note",downloadFileName:"003_006_topic3_regex_flags_note.txt"})}),e.jsx(r,{note:"If your regex needs to scrape HTML or JSON across multiple lines, you MUST use Pattern.DOTALL! Otherwise, the dot '.' stops as soon as it hits the first newline! — Sukanta Hui"})]})}export{h as default};
