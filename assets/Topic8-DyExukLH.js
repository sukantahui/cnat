import{j as e}from"./vendor-react-core-Doz9nIC6.js";import{J as r}from"./JavaFileLoader-BfBG3xz_.js";import{F as t}from"./FAQTemplate-BHhlgA96.js";import{P as n}from"./PlainTextPrint-C08xhKA4.js";import{T as a}from"./TeacherSukantaHui-DerPxfxp.js";import"./JavaCodeBlock-BwsLxS3r.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-CH1iX9C8.js";const o=`/**\r
 * Java Core Tutorial - Module 003_006: Regular Expressions (java.util.regex)\r
 * Topic 8: Boundary Matchers: Line Anchors (^, $) and Word Boundaries (\\b, \\B)\r
 * Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
 */\r
\r
package com.coderaccotax.javatutorial.regex;\r
\r
import java.util.regex.Matcher;\r
import java.util.regex.Pattern;\r
\r
public class RegexBoundaryMatchersDemo {\r
\r
    public static void main(String[] args) {\r
        System.out.println("==========================================================================");\r
        System.out.println(" TOPIC 8: REGEX BOUNDARY MATCHERS (^, $, \\\\b, \\\\B) - BARRACKPORE");\r
        System.out.println("==========================================================================\\n");\r
\r
        System.out.println(">>> 1. Word Boundary (\\\\b) vs Substring Matching:");\r
        String sentence = "Java is great, JavaScript is flexible, and avaj is reverse.";\r
\r
        // Matching whole word 'Java' only (not 'JavaScript' or 'avaj'):\r
        Pattern wordPattern = Pattern.compile("\\\\bJava\\\\b");\r
        Matcher wordMatcher = wordPattern.matcher(sentence);\r
\r
        System.out.println("  Sentence: "" + sentence + """);\r
        int count = 0;\r
        while (wordMatcher.find()) {\r
            count++;\r
            System.out.printf("  Found Whole Word: '%s' at index %d%n", wordMatcher.group(), wordMatcher.start());\r
        }\r
        System.out.println("  Total 'Java' whole words found: " + count + " (Ignored 'JavaScript'!)");\r
\r
        System.out.println("\\n>>> 2. Line Anchors (^ Start of Line, $ End of Line):");\r
        Pattern phonePattern = Pattern.compile("^\\\\+91[6-9]\\\\d{9}$");\r
        String mobile = "+919830012345";\r
        System.out.println("  Mobile Number: " + mobile);\r
        System.out.println("  Strict Exact Match (^...$): " + phonePattern.matcher(mobile).matches());\r
\r
        System.out.println("\\n==========================================================================");\r
    }\r
}`,s=`================================================================================\r
JAVA CORE TUTORIAL - QUICK REVISION GUIDE\r
Module 003_006: Regular Expressions (Regex)\r
Topic 8: Boundary Matchers\r
Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
================================================================================\r
\r
1. BOUNDARY ANCHORS:\r
   - '^'  : Start of line/string.\r
   - '$'  : End of line/string.\r
   - '\\b' : Word boundary (isolates whole words).\r
   - '\\B' : Non-word boundary.\r
\r
================================================================================\r
Classroom Practice: Barrackpore Academy | Mentor: Sukanta Hui\r
================================================================================`,i=[{question:"What is the purpose of the '\\b' word boundary anchor in Java regular expressions?",shortAnswer:"'\\b' matches a zero-width word boundary position between a word character ('\\w') and a non-word character ('\\W' or start/end of string). It ensures search patterns match whole discrete words rather than substrings embedded inside longer identifiers.",explanation:"Essential for exact keyword search in IDEs and text editors.",hint:"Matches zero-width boundaries between words and whitespace/punctuation.",level:"Beginner",codeExample:`Pattern.compile("\\\\bcat\\\\b"); // Matches 'cat', ignores 'category' or 'bobcat'`}];function b(){return e.jsxs("div",{className:"space-y-12 px-4 md:px-8 py-8 text-slate-200 bg-slate-900 min-h-screen",children:[e.jsxs("header",{className:"space-y-4 border-b border-slate-800 pb-6",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"px-3 py-1 bg-sky-500/10 text-sky-400 border border-sky-500/20 text-xs font-semibold rounded-full uppercase tracking-wider",children:"Module 003_006 · Topic 8"}),e.jsx("span",{className:"px-3 py-1 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-xs font-semibold rounded-full",children:"Anchors & Boundaries"})]}),e.jsxs("h1",{className:"text-xl sm:text-2xl md:text-3xl font-bold text-white tracking-tight",children:["Boundary Matchers: Line Anchors (",e.jsx("code",{className:"text-emerald-400 font-mono",children:"^"}),", ",e.jsx("code",{className:"text-emerald-400 font-mono",children:"$"}),") & Word Boundaries (",e.jsx("code",{className:"text-sky-400 font-mono",children:"\b"}),")"]}),e.jsxs("p",{className:"text-base md:text-lg text-slate-400 leading-relaxed max-w-4xl",children:["Isolate discrete words and enforce exact full-string validation: using ",e.jsx("code",{className:"text-sky-300 font-mono",children:"\b"})," to prevent false substring matches and line anchors for secure form inputs."]})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsxs("h2",{className:"text-2xl font-bold text-emerald-400 flex items-center gap-2",children:[e.jsx("span",{children:"💻"})," Hands-On Java Demo Code"]}),e.jsx(r,{fileModule:o,title:"RegexBoundaryMatchersDemo.java",highlightLines:[7,18,19,23,24,29,30]})]}),e.jsx("section",{className:"space-y-4",children:e.jsx(t,{title:"Boundary Matchers FAQs",questions:i})}),e.jsx("section",{className:"space-y-4",children:e.jsx(n,{content:s,title:"Module 003_006 Topic 8: Boundary Matchers",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Printable Note",downloadFileName:"003_006_topic8_boundary_matchers_note.txt"})}),e.jsx(a,{note:"If you search for the word 'Java' without word boundaries, it will accidentally match 'JavaScript', 'JavaBean', and 'EnterpriseJavaBeans'! Always wrap search terms in '\\bJava\\b'! — Sukanta Hui"})]})}export{b as default};
