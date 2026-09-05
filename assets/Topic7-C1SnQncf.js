import{j as e}from"./vendor-react-core-Doz9nIC6.js";import{J as t}from"./JavaFileLoader-BfBG3xz_.js";import{F as a}from"./FAQTemplate-BHhlgA96.js";import{P as n}from"./PlainTextPrint-C08xhKA4.js";import{T as r}from"./TeacherSukantaHui-DerPxfxp.js";import"./JavaCodeBlock-BwsLxS3r.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-CH1iX9C8.js";const s=`/**\r
 * Java Core Tutorial - Module 003_006: Regular Expressions (java.util.regex)\r
 * Topic 7: Quantifiers: Greedy (*), Reluctant (*?), and Possessive (*+) Mechanics\r
 * Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
 */\r
\r
package com.coderaccotax.javatutorial.regex;\r
\r
import java.util.regex.Matcher;\r
import java.util.regex.Pattern;\r
\r
public class RegexQuantifiersComparisonDemo {\r
\r
    public static void main(String[] args) {\r
        System.out.println("==========================================================================");\r
        System.out.println(" TOPIC 7: REGEX QUANTIFIERS (GREEDY vs RELUCTANT vs POSSESSIVE)");\r
        System.out.println("==========================================================================\\n");\r
\r
        String htmlSnippet = "<b>Java Core</b> and <b>AccoTax</b>";\r
\r
        // 1. GREEDY Quantifier (.*) -> Eats as much text as possible (Matches from first <b> to LAST </b>!):\r
        Pattern greedyPat = Pattern.compile("<b>.*</b>");\r
        Matcher greedyMatch = greedyPat.matcher(htmlSnippet);\r
        System.out.println(">>> 1. GREEDY Match (.*):");\r
        while (greedyMatch.find()) {\r
            System.out.println("  " + greedyMatch.group()); // Outputs entire string!\r
        }\r
\r
        // 2. RELUCTANT / LAZY Quantifier (.*?) -> Stops at the EARLIEST possible match:\r
        Pattern lazyPat = Pattern.compile("<b>.*?</b>");\r
        Matcher lazyMatch = lazyPat.matcher(htmlSnippet);\r
        System.out.println("\\n>>> 2. RELUCTANT / LAZY Match (.*?):");\r
        while (lazyMatch.find()) {\r
            System.out.println("  " + lazyMatch.group()); // Cleanly matches each tag individually!\r
        }\r
\r
        // 3. POSSESSIVE Quantifier (.*+) -> Eats everything and NEVER backtracks (Prevents ReDoS attacks!):\r
        Pattern posPat = Pattern.compile("<b>.*+</b>");\r
        System.out.println("\\n>>> 3. POSSESSIVE Match (.*+): " + posPat.matcher(htmlSnippet).matches());\r
\r
        System.out.println("\\n==========================================================================");\r
    }\r
}`,i=`================================================================================\r
JAVA CORE TUTORIAL - QUICK REVISION GUIDE\r
Module 003_006: Regular Expressions (Regex)\r
Topic 7: Regex Quantifiers\r
Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
================================================================================\r
\r
1. QUANTIFIER MODES:\r
   - Greedy     : '*', '+', '?', '{n,m}' → Matches maximum length.\r
   - Reluctant  : '*?', '+?', '??' → Matches minimum length (lazy).\r
   - Possessive : '*+', '++', '?+' → Never backtracks (fastest & ReDoS safe).\r
\r
================================================================================\r
Classroom Practice: Barrackpore Academy | Mentor: Sukanta Hui\r
================================================================================`,o=[{question:"What is the difference between Greedy ('*') and Reluctant/Lazy ('*?') quantifiers in regex?",shortAnswer:"A Greedy quantifier ('*') reads the entire text first and backtracks backwards to find the longest possible match (swallowing intermediate tags). A Reluctant quantifier ('*?') matches as few characters as possible, stopping at the earliest occurrence.",explanation:"Always use reluctant quantifiers ('.*?') when parsing delimited HTML tags or quotes.",hint:"Greedy finds the longest possible match; Reluctant finds the shortest match.",level:"Intermediate",codeExample:'Pattern lazy = Pattern.compile("<b>.*?</b>"); // Matches individual tags'}];function g(){return e.jsxs("div",{className:"space-y-12 px-4 md:px-8 py-8 text-slate-200 bg-slate-900 min-h-screen",children:[e.jsxs("header",{className:"space-y-4 border-b border-slate-800 pb-6",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"px-3 py-1 bg-sky-500/10 text-sky-400 border border-sky-500/20 text-xs font-semibold rounded-full uppercase tracking-wider",children:"Module 003_006 · Topic 7"}),e.jsx("span",{className:"px-3 py-1 bg-purple-500/10 text-purple-400 border border-purple-500/20 text-xs font-semibold rounded-full",children:"Quantifier Mechanics"})]}),e.jsxs("h1",{className:"text-xl sm:text-2xl md:text-3xl font-bold text-white tracking-tight",children:["Quantifiers: Greedy (",e.jsx("code",{className:"text-rose-400 font-mono",children:".*"}),"), Reluctant (",e.jsx("code",{className:"text-emerald-400 font-mono",children:".*?"}),") & Possessive (",e.jsx("code",{className:"text-sky-400 font-mono",children:".*+"}),")"]}),e.jsxs("p",{className:"text-base md:text-lg text-slate-400 leading-relaxed max-w-4xl",children:["Master the three engine matching strategies: avoiding greedy HTML tag over-consumption with lazy ",e.jsx("code",{className:"text-emerald-300 font-mono",children:".*?"})," and preventing backtracking CPU thrashing with possessive quantifiers."]})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsxs("h2",{className:"text-2xl font-bold text-emerald-400 flex items-center gap-2",children:[e.jsx("span",{children:"💻"})," Hands-On Java Demo Code"]}),e.jsx(t,{fileModule:s,title:"RegexQuantifiersComparisonDemo.java",highlightLines:[7,16,17,24,25,31,32]})]}),e.jsx("section",{className:"space-y-4",children:e.jsx(a,{title:"Quantifiers FAQs",questions:o})}),e.jsx("section",{className:"space-y-4",children:e.jsx(n,{content:i,title:"Module 003_006 Topic 7: Regex Quantifiers",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Printable Note",downloadFileName:"003_006_topic7_quantifiers_note.txt"})}),e.jsx(r,{note:"If you are parsing HTML tags, NEVER use '<b>.*</b>'! It will swallow all your tags from the first <b> on line 1 to the last </b> on line 50! Always use lazy '<b>.*?</b>'! — Sukanta Hui"})]})}export{g as default};
