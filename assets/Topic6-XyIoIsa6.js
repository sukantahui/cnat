import{j as e}from"./vendor-react-core-Doz9nIC6.js";import{J as a}from"./JavaFileLoader-BfBG3xz_.js";import{F as t}from"./FAQTemplate-BHhlgA96.js";import{P as r}from"./PlainTextPrint-C08xhKA4.js";import{T as n}from"./TeacherSukantaHui-BaJcBHAy.js";import"./JavaCodeBlock-BwsLxS3r.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-8ao-0upJ.js";const s=`/**\r
 * Java Core Tutorial - Module 003_006: Regular Expressions (java.util.regex)\r
 * Topic 6: Character Classes: Simple [abc], Negated [^abc], Ranges [a-z], Unions & Intersections\r
 * Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
 */\r
\r
package com.coderaccotax.javatutorial.regex;\r
\r
import java.util.regex.Matcher;\r
import java.util.regex.Pattern;\r
\r
public class RegexCharacterClassesMasteryDemo {\r
\r
    public static void main(String[] args) {\r
        System.out.println("==========================================================================");\r
        System.out.println(" TOPIC 6: REGEX CHARACTER CLASSES - BARRACKPORE");\r
        System.out.println("==========================================================================\\n");\r
\r
        System.out.println(">>> 1. Character Class Variants Cheatsheet:");\r
        System.out.println("  [abc]       : Matches 'a', 'b', or 'c' (Simple set)");\r
        System.out.println("  [^abc]      : Negation: Any character EXCEPT 'a', 'b', or 'c'");\r
        System.out.println("  [a-zA-Z]    : Range: Any English letter (lower or upper case)");\r
        System.out.println("  [0-9]       : Range: Any decimal digit (Equivalent to \\\\d)");\r
        System.out.println("  [a-z&&[def]]: Intersection: Matches ONLY 'd', 'e', or 'f'");\r
\r
        // Validating Indian PAN Card Format: 5 Letters + 4 Digits + 1 Letter (e.g. ABCDE1234F)\r
        String panCard = "ABCDE1234F";\r
        Pattern panPattern = Pattern.compile("[A-Z]{5}[0-9]{4}[A-Z]");\r
        boolean isPanValid = panPattern.matcher(panCard).matches();\r
\r
        System.out.println("\\n>>> 2. Indian PAN Card Validation Example:");\r
        System.out.println("  PAN String   : " + panCard);\r
        System.out.println("  Is Valid PAN : " + isPanValid + " (Matches [A-Z]{5}[0-9]{4}[A-Z])");\r
\r
        System.out.println("\\n==========================================================================");\r
    }\r
}`,i=`================================================================================\r
JAVA CORE TUTORIAL - QUICK REVISION GUIDE\r
Module 003_006: Regular Expressions (Regex)\r
Topic 6: Character Classes\r
Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
================================================================================\r
\r
1. CHARACTER CLASSES:\r
   - '[abc]'      : Match a, b, or c.\r
   - '[^abc]'     : Match NOT a, b, or c.\r
   - '[a-zA-Z]'   : Match any English letter.\r
   - '[0-9]'      : Match any digit.\r
   - '[a-z&&[aeiou]]' : Intersection (vowels only).\r
\r
================================================================================\r
Classroom Practice: Barrackpore Academy | Mentor: Sukanta Hui\r
================================================================================`,o=[{question:"What does the '^' caret symbol mean when placed as the FIRST character inside square brackets '[^0-9]'?",shortAnswer:"Inside square brackets, '^' at the beginning acts as a NEGATION operator, matching any character that is NOT in the specified set (e.g. '[^0-9]' matches any non-digit). Outside square brackets, '^' matches the start of a line.",explanation:"Position dictates meaning: inside [] it negates; outside [] it anchors start of line.",hint:"Inside brackets it acts as negation; outside brackets it anchors line start.",level:"Beginner",codeExample:'Pattern nonVowels = Pattern.compile("[^aeiouAEIOU]");'}];function g(){return e.jsxs("div",{className:"space-y-12 px-4 md:px-8 py-8 text-slate-200 bg-slate-900 min-h-screen",children:[e.jsxs("header",{className:"space-y-4 border-b border-slate-800 pb-6",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"px-3 py-1 bg-sky-500/10 text-sky-400 border border-sky-500/20 text-xs font-semibold rounded-full uppercase tracking-wider",children:"Module 003_006 · Topic 6"}),e.jsx("span",{className:"px-3 py-1 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-xs font-semibold rounded-full",children:"Character Sets"})]}),e.jsxs("h1",{className:"text-xl sm:text-2xl md:text-3xl font-bold text-white tracking-tight",children:["Character Classes: ",e.jsx("code",{className:"text-emerald-400 font-mono",children:"[abc]"}),", Negated ",e.jsx("code",{className:"text-rose-400 font-mono",children:"[^abc]"})," & Ranges ",e.jsx("code",{className:"text-sky-400 font-mono",children:"[a-zA-Z]"})]}),e.jsx("p",{className:"text-base md:text-lg text-slate-400 leading-relaxed max-w-4xl",children:"Learn how to define precise sets and ranges: validating Indian PAN cards, filtering alphanumeric passwords, and performing set intersection operations."})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsxs("h2",{className:"text-2xl font-bold text-emerald-400 flex items-center gap-2",children:[e.jsx("span",{children:"💻"})," Hands-On Java Demo Code"]}),e.jsx(a,{fileModule:s,title:"RegexCharacterClassesMasteryDemo.java",highlightLines:[7,14,15,16,17,18,22,23,24]})]}),e.jsx("section",{className:"space-y-4",children:e.jsx(t,{title:"Character Classes FAQs",questions:o})}),e.jsx("section",{className:"space-y-4",children:e.jsx(r,{content:i,title:"Module 003_006 Topic 6: Character Classes",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Printable Note",downloadFileName:"003_006_topic6_character_classes_note.txt"})}),e.jsx(n,{note:"Character classes give you total control over accepted characters! For example, Indian PAN cards are strictly '[A-Z]{5}[0-9]{4}[A-Z]'—5 letters, 4 digits, and 1 letter! — Sukanta Hui"})]})}export{g as default};
