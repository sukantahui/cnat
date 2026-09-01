import{j as e}from"./vendor-react-core-Doz9nIC6.js";import{J as t}from"./JavaFileLoader-BfBG3xz_.js";import{F as r}from"./FAQTemplate-BHhlgA96.js";import{P as a}from"./PlainTextPrint-C08xhKA4.js";import{T as n}from"./TeacherSukantaHui-CEPuAfsb.js";import"./JavaCodeBlock-BwsLxS3r.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-DGCamHnX.js";const s=`/**\r
 * Java Core Tutorial - Module 003_006: Regular Expressions (java.util.regex)\r
 * Topic 11: Matcher Methods: matches(), find(), group(), start(), end(), replaceAll()\r
 * Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
 */\r
\r
package com.coderaccotax.javatutorial.regex;\r
\r
import java.util.regex.Matcher;\r
import java.util.regex.Pattern;\r
\r
public class MatcherMethodsComprehensiveDemo {\r
\r
    public static void main(String[] args) {\r
        System.out.println("==========================================================================");\r
        System.out.println(" TOPIC 11: Matcher METHODS COMPREHENSIVE SUITE - BARRACKPORE");\r
        System.out.println("==========================================================================\\n");\r
\r
        String rawData = "Student Swadeep has phone 9830012345, while Tuhina has 9830054321.";\r
        Pattern phonePattern = Pattern.compile("\\\\b\\\\d{10}\\\\b");\r
        Matcher matcher = phonePattern.matcher(rawData);\r
\r
        // 1. matches() vs find():\r
        // matches() checks if the ENTIRE string matches; find() searches for substrings!\r
        System.out.println(">>> 1. matches() vs find():");\r
        System.out.println("  matcher.matches() : " + matcher.matches() + " (FALSE because rawData has other words!)");\r
        matcher.reset(); // Reset cursor after matches()!\r
\r
        // 2. find(), group(), start(), end():\r
        System.out.println("\\n>>> 2. find() Substring Search:");\r
        while (matcher.find()) {\r
            System.out.printf("  Phone Number: %s [Range: %d to %d]%n",\r
                    matcher.group(), matcher.start(), matcher.end());\r
        }\r
\r
        // 3. Masking phone numbers with replaceAll():\r
        String maskedData = matcher.replaceAll("XXXXXXXXXX");\r
        System.out.println("\\n>>> 3. Masked Sensitive Output via replaceAll():");\r
        System.out.println("  " + maskedData);\r
\r
        System.out.println("\\n==========================================================================");\r
    }\r
}`,o=`================================================================================\r
JAVA CORE TUTORIAL - QUICK REVISION GUIDE\r
Module 003_006: Regular Expressions (Regex)\r
Topic 11: Matcher Methods Comprehensive\r
Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
================================================================================\r
\r
1. MATCHER METHODS:\r
   - 'matches()'     : Asserts entire string matches pattern.\r
   - 'find()'        : Searches for next matching substring.\r
   - 'reset()'       : Resets search cursor to beginning.\r
   - 'replaceAll()'  : Replaces all matching substrings.\r
   - 'replaceFirst()': Replaces only first match.\r
\r
================================================================================\r
Classroom Practice: Barrackpore Academy | Mentor: Sukanta Hui\r
================================================================================`,c=[{question:"What is the critical behavioral difference between 'matcher.matches()' and 'matcher.find()'?",shortAnswer:"'matcher.matches()' requires the ENTIRE input string to match the pattern from start to finish. 'matcher.find()' searches for the NEXT occurrence of a matching substring anywhere within the text without requiring the whole string to match.",explanation:"If you call matches(), you must call matcher.reset() before using find().",hint:"matches() validates the whole string; find() searches for substring matches.",level:"Beginner",codeExample:`boolean fullMatch = m.matches(); // Whole string
boolean subMatch = m.find(); // Substring search`}];function g(){return e.jsxs("div",{className:"space-y-12 px-4 md:px-8 py-8 text-slate-200 bg-slate-900 min-h-screen",children:[e.jsxs("header",{className:"space-y-4 border-b border-slate-800 pb-6",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"px-3 py-1 bg-sky-500/10 text-sky-400 border border-sky-500/20 text-xs font-semibold rounded-full uppercase tracking-wider",children:"Module 003_006 · Topic 11"}),e.jsx("span",{className:"px-3 py-1 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-xs font-semibold rounded-full",children:"Matcher Methods"})]}),e.jsxs("h1",{className:"text-xl sm:text-2xl md:text-3xl font-bold text-white tracking-tight",children:[e.jsx("code",{className:"text-emerald-400 font-mono",children:"Matcher"})," Methods: ",e.jsx("code",{className:"text-emerald-400 font-mono",children:"matches()"}),", ",e.jsx("code",{className:"text-sky-400 font-mono",children:"find()"}),", ",e.jsx("code",{className:"text-amber-400 font-mono",children:"start()"})," & ",e.jsx("code",{className:"text-purple-400 font-mono",children:"replaceAll()"})]}),e.jsx("p",{className:"text-base md:text-lg text-slate-400 leading-relaxed max-w-4xl",children:"Master the complete Matcher search-and-replace toolbox: contrasting full validation against substring searching, cursor resets, and phone number data masking."})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsxs("h2",{className:"text-2xl font-bold text-emerald-400 flex items-center gap-2",children:[e.jsx("span",{children:"💻"})," Hands-On Java Demo Code"]}),e.jsx(t,{fileModule:s,title:"MatcherMethodsComprehensiveDemo.java",highlightLines:[7,18,19,23,24,29,30]})]}),e.jsx("section",{className:"space-y-4",children:e.jsx(r,{title:"Matcher Methods FAQs",questions:c})}),e.jsx("section",{className:"space-y-4",children:e.jsx(a,{content:o,title:"Module 003_006 Topic 11: Matcher Methods",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Printable Note",downloadFileName:"003_006_topic11_matcher_methods_note.txt"})}),e.jsx(n,{note:"If you call matcher.matches() and it returns false, remember that the internal pointer is now at the end of the string! Call matcher.reset() before running matcher.find()! — Sukanta Hui"})]})}export{g as default};
