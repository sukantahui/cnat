import{j as e}from"./vendor-react-core-Doz9nIC6.js";import{J as r}from"./JavaFileLoader-BfBG3xz_.js";import{F as t}from"./FAQTemplate-BHhlgA96.js";import{P as n}from"./PlainTextPrint-C08xhKA4.js";import{T as a}from"./TeacherSukantaHui-CEPuAfsb.js";import"./JavaCodeBlock-BwsLxS3r.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-DGCamHnX.js";const l=`/**\r
 * Java Core Tutorial - Module 003_001: String Immutability & The String Constant Pool (SCP)\r
 * Topic 10: Substring & Replacement: substring(), replace(), replaceAll(), replaceFirst()\r
 * Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
 */\r
\r
package com.coderaccotax.javatutorial.strings;\r
\r
public class SubstringAndReplacementMasteryDemo {\r
\r
    public static void main(String[] args) {\r
        System.out.println("==========================================================================");\r
        System.out.println(" TOPIC 10: SUBSTRING & REPLACEMENT MASTERY - BARRACKPORE");\r
        System.out.println("==========================================================================\\n");\r
\r
        String text = "Java at Barrackpore. Java is awesome!";\r
\r
        System.out.println(">>> 1. Substring Slicing (beginIndex inclusive, endIndex exclusive):");\r
        System.out.println("  text.substring(8)       : "" + text.substring(8) + """);\r
        System.out.println("  text.substring(8, 19)   : "" + text.substring(8, 19) + "" (Extracts 'Barrackpore')");\r
\r
        System.out.println("\\n>>> 2. Replacement Variants:");\r
        // replace() -> Literal character / CharSequence replacement (No regex)\r
        System.out.println("  replace("Java", "Kotlin")       : " + text.replace("Java", "Kotlin"));\r
\r
        // replaceFirst() -> Regex replacement for 1st match only\r
        System.out.println("  replaceFirst("Java", "Spring")   : " + text.replaceFirst("Java", "Spring"));\r
\r
        // replaceAll() -> Full Regex pattern replacement\r
        String sanitized = "User_Age: 25, Roll: 101".replaceAll("\\\\d+", "[REDACTED]");\r
        System.out.println("  replaceAll("\\\\d+", "[REDACTED]") : " + sanitized);\r
\r
        System.out.println("\\n==========================================================================");\r
    }\r
}`,s=`================================================================================\r
JAVA CORE TUTORIAL - QUICK REVISION GUIDE\r
Module 003_001: String Immutability & String Constant Pool\r
Topic 10: Substring & Replacement\r
Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
================================================================================\r
\r
1. SUBSTRING & REPLACEMENT RULES:\r
   - 'substring(begin, end)' : 'begin' is INCLUSIVE, 'end' is EXCLUSIVE.\r
   - 'replace(target, repl)' : Literal string replacement (no regex).\r
   - 'replaceAll(regex, repl)': Regular expression replacement.\r
   - 'replaceFirst(regex, r)': Replaces only the first regex match.\r
\r
================================================================================\r
Classroom Practice: Barrackpore Academy | Mentor: Sukanta Hui\r
================================================================================`,i=[{question:"What is the key difference between 'String.replace()' and 'String.replaceAll()' in Java?",shortAnswer:"'replace(target, replacement)' replaces exact literal substrings without interpreting regular expressions. 'replaceAll(regex, replacement)' interprets the first argument as a regular expression pattern.",explanation:"Both replace ALL occurrences, but replaceAll parses regex syntax.",hint:"replace() is literal; replaceAll() takes a regular expression.",level:"Beginner",codeExample:`str.replace(".", "/"); // Replaces literal dots
str.replaceAll(".", "/"); // Regex: replaces EVERY character!`}];function b(){return e.jsxs("div",{className:"space-y-12 px-4 md:px-8 py-8 text-slate-200 bg-slate-900 min-h-screen",children:[e.jsxs("header",{className:"space-y-4 border-b border-slate-800 pb-6",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"px-3 py-1 bg-sky-500/10 text-sky-400 border border-sky-500/20 text-xs font-semibold rounded-full uppercase tracking-wider",children:"Module 003_001 · Topic 10"}),e.jsx("span",{className:"px-3 py-1 bg-amber-500/10 text-amber-400 border border-amber-500/20 text-xs font-semibold rounded-full",children:"Slicing & Mutation"})]}),e.jsxs("h1",{className:"text-xl sm:text-2xl md:text-3xl font-bold text-white tracking-tight",children:["Substring & Replacement: ",e.jsx("code",{className:"text-emerald-400 font-mono",children:"replace()"})," vs ",e.jsx("code",{className:"text-rose-400 font-mono",children:"replaceAll()"})]}),e.jsxs("p",{className:"text-base md:text-lg text-slate-400 leading-relaxed max-w-4xl",children:["Learn the essential slice-and-replace toolset: inclusive/exclusive index slicing, literal replacements, and avoiding accidental regex traps with ",e.jsx("code",{className:"text-rose-300 font-mono",children:"replaceAll()"}),"."]})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsxs("h2",{className:"text-2xl font-bold text-emerald-400 flex items-center gap-2",children:[e.jsx("span",{children:"💻"})," Hands-On Java Demo Code"]}),e.jsx(r,{fileModule:l,title:"SubstringAndReplacementMasteryDemo.java",highlightLines:[7,14,15,19,22,25]})]}),e.jsx("section",{className:"space-y-4",children:e.jsx(t,{title:"Substring & Replacement FAQs",questions:i})}),e.jsx("section",{className:"space-y-4",children:e.jsx(n,{content:s,title:"Module 003_001 Topic 10: Substring and Replacement",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Printable Note",downloadFileName:"003_001_topic10_substring_replace_note.txt"})}),e.jsx(a,{note:"Be very careful! If you write replaceAll on a dot '.', it is a regex wildcard meaning 'any character' and will replace your entire string! Use replace for literal dots. — Sukanta Hui"})]})}export{b as default};
