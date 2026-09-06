import{j as e}from"./vendor-react-core-Doz9nIC6.js";import{J as t}from"./JavaFileLoader-BfBG3xz_.js";import{F as r}from"./FAQTemplate-BHhlgA96.js";import{P as a}from"./PlainTextPrint-C08xhKA4.js";import{T as n}from"./TeacherSukantaHui-DDN87fI5.js";import"./JavaCodeBlock-BwsLxS3r.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-DEsnU7fn.js";const s=`/**\r
 * Java Core Tutorial - Module 003_006: Regular Expressions (java.util.regex)\r
 * Topic 10: Backreferences (\\\\1, \\\\2): Detecting Repeated Words & Duplicate Tokens\r
 * Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
 */\r
\r
package com.coderaccotax.javatutorial.regex;\r
\r
import java.util.regex.Matcher;\r
import java.util.regex.Pattern;\r
\r
public class RegexBackreferencesMasteryDemo {\r
\r
    public static void main(String[] args) {\r
        System.out.println("==========================================================================");\r
        System.out.println(" TOPIC 10: REGEX BACKREFERENCES (\\\\1, \\\\2) - BARRACKPORE");\r
        System.out.println("==========================================================================\\n");\r
\r
        // Finding duplicate consecutive words (e.g. "the the" typo):\r
        // Pattern: (\\\\b\\\\w+) matches a word -> \\\\s+ spaces -> \\\\1 matches the EXACT same word captured in Group 1!\r
        Pattern duplicateWordPattern = Pattern.compile("\\\\b(\\\\w+)\\\\s+\\\\1\\\\b", Pattern.CASE_INSENSITIVE);\r
\r
        String sampleArticle = "Java is the the best language for for enterprise backend systems.";\r
        Matcher matcher = duplicateWordPattern.matcher(sampleArticle);\r
\r
        System.out.println(">>> 1. Original Text with Grammatical Typos:");\r
        System.out.println("  "" + sampleArticle + """);\r
\r
        System.out.println("\\n>>> 2. Detecting Repeated Words via Backreference \\\\1:");\r
        while (matcher.find()) {\r
            System.out.printf("  Duplicate Found: '%s' (Word: '%s')%n", matcher.group(0), matcher.group(1));\r
        }\r
\r
        // Replacing duplicate words automatically:\r
        String cleanedArticle = duplicateWordPattern.matcher(sampleArticle).replaceAll("$1");\r
        System.out.println("\\n>>> 3. Sanitized Text via replaceAll("$1"):");\r
        System.out.println("  "" + cleanedArticle + """);\r
\r
        System.out.println("\\n==========================================================================");\r
    }\r
}`,c=`================================================================================\r
JAVA CORE TUTORIAL - QUICK REVISION GUIDE\r
Module 003_006: Regular Expressions (Regex)\r
Topic 10: Regex Backreferences\r
Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
================================================================================\r
\r
1. BACKREFERENCE RULES:\r
   - In Pattern: '\\1', '\\2' matches content of Group 1, Group 2.\r
   - In Replacement: '$1', '$2' substitutes Group 1, Group 2 text.\r
   - Ideal for grammar linters, duplicate word detection, and XML tag matching.\r
\r
================================================================================\r
Classroom Practice: Barrackpore Academy | Mentor: Sukanta Hui\r
================================================================================`,i=[{question:"How do Backreferences (like '\\1') work in regular expressions and what is '$1' in replacement strings?",shortAnswer:`Inside the regex pattern, '\\1' refers to the exact text captured by the first capturing group '()', allowing detection of duplicate words (e.g. '(\\b\\w+)\\s+\\1'). In replacement strings (e.g. 'replaceAll("$1")'), '$1' inserts the text captured by Group 1.`,explanation:"Backreferences dynamically match the evaluated content, not just the pattern structure.",hint:"\\1 matches captured group text inside pattern; $1 inserts captured text during replacement.",level:"Intermediate",codeExample:'str.replaceAll("(\\\\b\\\\w+)\\\\s+\\\\1", "$1"); // Removes duplicate words'}];function g(){return e.jsxs("div",{className:"space-y-12 px-4 md:px-8 py-8 text-slate-200 bg-slate-900 min-h-screen",children:[e.jsxs("header",{className:"space-y-4 border-b border-slate-800 pb-6",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"px-3 py-1 bg-sky-500/10 text-sky-400 border border-sky-500/20 text-xs font-semibold rounded-full uppercase tracking-wider",children:"Module 003_006 · Topic 10"}),e.jsx("span",{className:"px-3 py-1 bg-amber-500/10 text-amber-400 border border-amber-500/20 text-xs font-semibold rounded-full",children:"Self-Referencing Patterns"})]}),e.jsxs("h1",{className:"text-xl sm:text-2xl md:text-3xl font-bold text-white tracking-tight",children:["Backreferences (",e.jsx("code",{className:"text-amber-400 font-mono",children:"\\1"}),", ",e.jsx("code",{className:"text-amber-400 font-mono",children:"\\2"}),"): Detecting Duplicate Words & Typos"]}),e.jsxs("p",{className:"text-base md:text-lg text-slate-400 leading-relaxed max-w-4xl",children:["Build intelligent grammar linters: matching duplicate consecutive words with ",e.jsx("code",{className:"text-amber-300 font-mono",children:"\\1"})," and deduplicating phrases with replacement tokens ",e.jsx("code",{className:"text-emerald-300 font-mono",children:"$1"}),"."]})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsxs("h2",{className:"text-2xl font-bold text-emerald-400 flex items-center gap-2",children:[e.jsx("span",{children:"💻"})," Hands-On Java Demo Code"]}),e.jsx(t,{fileModule:s,title:"RegexBackreferencesMasteryDemo.java",highlightLines:[7,15,17,23,24,28]})]}),e.jsx("section",{className:"space-y-4",children:e.jsx(r,{title:"Backreferences FAQs",questions:i})}),e.jsx("section",{className:"space-y-4",children:e.jsx(a,{content:c,title:"Module 003_006 Topic 10: Regex Backreferences",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Printable Note",downloadFileName:"003_006_topic10_backreferences_note.txt"})}),e.jsx(n,{note:"Backreferences are so powerful! With '\\\\b(\\\\w+)\\\\s+\\\\1\\\\b' you can scan an entire 500-page book and instantly highlight every single duplicate word typo! — Sukanta Hui"})]})}export{g as default};
