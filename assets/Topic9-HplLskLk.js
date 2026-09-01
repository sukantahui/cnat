import{j as t}from"./vendor-react-core-Doz9nIC6.js";import{J as r}from"./JavaFileLoader-BfBG3xz_.js";import{F as e}from"./FAQTemplate-BHhlgA96.js";import{P as n}from"./PlainTextPrint-C08xhKA4.js";import{T as a}from"./TeacherSukantaHui-CEPuAfsb.js";import"./JavaCodeBlock-BwsLxS3r.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-DGCamHnX.js";const o=`/**\r
 * Java Core Tutorial - Module 003_006: Regular Expressions (java.util.regex)\r
 * Topic 9: Capturing Groups () and Non-Capturing Groups (?:) in java.util.regex\r
 * Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
 */\r
\r
package com.coderaccotax.javatutorial.regex;\r
\r
import java.util.regex.Matcher;\r
import java.util.regex.Pattern;\r
\r
public class RegexCapturingGroupsMasteryDemo {\r
\r
    public static void main(String[] args) {\r
        System.out.println("==========================================================================");\r
        System.out.println(" TOPIC 9: CAPTURING & NON-CAPTURING GROUPS - BARRACKPORE");\r
        System.out.println("==========================================================================\\n");\r
\r
        // Parsing Date Format "2026-08-26" using 3 Capturing Groups ():\r
        Pattern datePattern = Pattern.compile("(\\\\d{4})-(\\\\d{2})-(\\\\d{2})");\r
        String inputDate = "Admission Date: 2026-08-26";\r
        Matcher matcher = datePattern.matcher(inputDate);\r
\r
        if (matcher.find()) {\r
            System.out.println(">>> 1. Capturing Groups Breakdown (1-indexed):");\r
            System.out.println("  Group 0 (Entire Match) : " + matcher.group(0));\r
            System.out.println("  Group 1 (Year YYYY)    : " + matcher.group(1));\r
            System.out.println("  Group 2 (Month MM)     : " + matcher.group(2));\r
            System.out.println("  Group 3 (Day DD)       : " + matcher.group(3));\r
        }\r
\r
        // 2. Non-Capturing Group (?:) -> Groups logic without saving memory:\r
        // Matching http or https without creating an extra group:\r
        Pattern urlPattern = Pattern.compile("(?:https?://)?([\\\\w.]+)\\\\b");\r
        Matcher urlMatcher = urlPattern.matcher("Visit https://coderaccotax.com for tutorials");\r
\r
        if (urlMatcher.find()) {\r
            System.out.println("\\n>>> 2. Non-Capturing Group (?:https?://) Demonstration:");\r
            System.out.println("  Group 1 (Domain Only)  : " + urlMatcher.group(1));\r
        }\r
\r
        System.out.println("\\n==========================================================================");\r
    }\r
}`,s=`================================================================================\r
JAVA CORE TUTORIAL - QUICK REVISION GUIDE\r
Module 003_006: Regular Expressions (Regex)\r
Topic 9: Capturing & Non-Capturing Groups\r
Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
================================================================================\r
\r
1. GROUPS SUMMARY:\r
   - '()'     : Capturing group (1-indexed: group(1), group(2)).\r
   - 'group(0)': Entire matched expression.\r
   - '(?:)'   : Non-capturing group (groups logic with zero memory overhead).\r
\r
================================================================================\r
Classroom Practice: Barrackpore Academy | Mentor: Sukanta Hui\r
================================================================================`,i=[{question:"What is the difference between a Capturing Group '()' and a Non-Capturing Group '(?:)' in Java regex?",shortAnswer:"A Capturing Group '()' remembers the matched sub-pattern and makes it accessible via 'matcher.group(n)'. A Non-Capturing Group '(?:)' applies grouping logic (such as alternation '(?:http|https)') without storing the matched text in memory, improving performance.",explanation:"Group 0 always refers to the entire matching pattern.",hint:"'()' captures and saves matched text; '(?:)' groups without saving in memory.",level:"Intermediate",codeExample:'Pattern p = Pattern.compile("(?:https?://)(.+)"); // Group 1 contains domain only'}];function h(){return t.jsxs("div",{className:"space-y-12 px-4 md:px-8 py-8 text-slate-200 bg-slate-900 min-h-screen",children:[t.jsxs("header",{className:"space-y-4 border-b border-slate-800 pb-6",children:[t.jsxs("div",{className:"flex items-center gap-3",children:[t.jsx("span",{className:"px-3 py-1 bg-sky-500/10 text-sky-400 border border-sky-500/20 text-xs font-semibold rounded-full uppercase tracking-wider",children:"Module 003_006 · Topic 9"}),t.jsx("span",{className:"px-3 py-1 bg-purple-500/10 text-purple-400 border border-purple-500/20 text-xs font-semibold rounded-full",children:"Extraction Groups"})]}),t.jsxs("h1",{className:"text-xl sm:text-2xl md:text-3xl font-bold text-white tracking-tight",children:["Capturing Groups ",t.jsx("code",{className:"text-purple-400 font-mono",children:"()"})," & Non-Capturing Groups ",t.jsx("code",{className:"text-emerald-400 font-mono",children:"(?:)"})]}),t.jsxs("p",{className:"text-base md:text-lg text-slate-400 leading-relaxed max-w-4xl",children:["Extract structural data from raw strings: decomposing dates into year, month, and day components and optimizing performance with non-capturing ",t.jsx("code",{className:"text-emerald-300 font-mono",children:"(?:)"})," blocks."]})]}),t.jsxs("section",{className:"space-y-4",children:[t.jsxs("h2",{className:"text-2xl font-bold text-emerald-400 flex items-center gap-2",children:[t.jsx("span",{children:"💻"})," Hands-On Java Demo Code"]}),t.jsx(r,{fileModule:o,title:"RegexCapturingGroupsMasteryDemo.java",highlightLines:[7,14,19,20,21,22,27,31]})]}),t.jsx("section",{className:"space-y-4",children:t.jsx(e,{title:"Capturing Groups FAQs",questions:i})}),t.jsx("section",{className:"space-y-4",children:t.jsx(n,{content:s,title:"Module 003_006 Topic 9: Capturing Groups",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Printable Note",downloadFileName:"003_006_topic9_capturing_groups_note.txt"})}),t.jsx(a,{note:"Remember: group(0) is always the ENTIRE match! group(1) is the first pair of parentheses, group(2) is the second pair, and so on! — Sukanta Hui"})]})}export{h as default};
