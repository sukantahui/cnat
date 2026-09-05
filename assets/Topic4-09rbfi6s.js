import{j as e}from"./vendor-react-core-Doz9nIC6.js";import{J as t}from"./JavaFileLoader-BfBG3xz_.js";import{F as r}from"./FAQTemplate-BHhlgA96.js";import{P as a}from"./PlainTextPrint-C08xhKA4.js";import{T as n}from"./TeacherSukantaHui-DerPxfxp.js";import"./JavaCodeBlock-BwsLxS3r.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-CH1iX9C8.js";const s=`/**\r
 * Java Core Tutorial - Module 003_006: Regular Expressions (java.util.regex)\r
 * Topic 4: Meta-Characters Breakdown: \\d, \\D, \\s, \\S, \\w, \\W and '.'\r
 * Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
 */\r
\r
package com.coderaccotax.javatutorial.regex;\r
\r
import java.util.regex.Matcher;\r
import java.util.regex.Pattern;\r
\r
public class RegexMetaCharactersCatalogDemo {\r
\r
    public static void main(String[] args) {\r
        System.out.println("==========================================================================");\r
        System.out.println(" TOPIC 4: REGEX META-CHARACTERS CATALOG - BARRACKPORE");\r
        System.out.println("==========================================================================\\n");\r
\r
        System.out.println("+---------------+---------------------------------------+---------------------+");\r
        System.out.println("| Meta-Char     | Meaning / Definition                  | Equivalent Class    |");\r
        System.out.println("+---------------+---------------------------------------+---------------------+");\r
        System.out.println("| .             | Any character (except newline default)| [^\\\\n\\\\r]            |");\r
        System.out.println("| \\\\d           | Any digit [0-9]                       | [0-9]               |");\r
        System.out.println("| \\\\D           | Any NON-digit                         | [^0-9]              |");\r
        System.out.println("| \\\\s           | Any whitespace (space, tab, newline)  | [ \\\\t\\\\n\\\\x0B\\\\f\\\\r]  |");\r
        System.out.println("| \\\\S           | Any NON-whitespace                    | [^\\\\s]               |");\r
        System.out.println("| \\\\w           | Word character (letters, digits, _)   | [a-zA-Z_0-9]        |");\r
        System.out.println("| \\\\W           | NON-word character (punctuation, etc) | [^\\\\w]               |");\r
        System.out.println("+---------------+---------------------------------------+---------------------+");\r
\r
        // Example: Extracting all digits from a registration string:\r
        String reg = "Trainee_ID: BKP-2026-9874";\r
        Pattern digitPattern = Pattern.compile("\\\\d+");\r
        Matcher digitMatcher = digitPattern.matcher(reg);\r
\r
        System.out.println("\\n>>> Extracting All Numbers from: "" + reg + """);\r
        while (digitMatcher.find()) {\r
            System.out.println("  Extracted Number: " + digitMatcher.group());\r
        }\r
\r
        System.out.println("\\n==========================================================================");\r
    }\r
}`,i=`================================================================================\r
JAVA CORE TUTORIAL - QUICK REVISION GUIDE\r
Module 003_006: Regular Expressions (Regex)\r
Topic 4: Meta-Characters Catalog\r
Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
================================================================================\r
\r
1. META-CHARACTERS:\r
   - '.'  : Any character.\r
   - '\\d' : Digit [0-9].\r
   - '\\D' : Non-digit.\r
   - '\\s' : Whitespace.\r
   - '\\S' : Non-whitespace.\r
   - '\\w' : Word char [a-zA-Z0-9_].\r
   - '\\W' : Non-word char.\r
\r
================================================================================\r
Classroom Practice: Barrackpore Academy | Mentor: Sukanta Hui\r
================================================================================`,o=[{question:"What characters are matched by the '\\w' meta-character in Java regular expressions?",shortAnswer:"'\\w' matches any 'word character': English letters (a-z, A-Z), numeric digits (0-9), and the underscore character ('_') — equivalent to the character class '[a-zA-Z_0-9]'.",explanation:"'\\W' (uppercase) matches any character that is NOT a word character.",hint:"Matches letters, digits, and underscores ([a-zA-Z_0-9]).",level:"Beginner",codeExample:'boolean isUsername = input.matches("\\\\w{5,15}"); // Alphanumeric + underscore'}];function g(){return e.jsxs("div",{className:"space-y-12 px-4 md:px-8 py-8 text-slate-200 bg-slate-900 min-h-screen",children:[e.jsxs("header",{className:"space-y-4 border-b border-slate-800 pb-6",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"px-3 py-1 bg-sky-500/10 text-sky-400 border border-sky-500/20 text-xs font-semibold rounded-full uppercase tracking-wider",children:"Module 003_006 · Topic 4"}),e.jsx("span",{className:"px-3 py-1 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-xs font-semibold rounded-full",children:"Meta-Characters"})]}),e.jsxs("h1",{className:"text-xl sm:text-2xl md:text-3xl font-bold text-white tracking-tight",children:["Meta-Characters Breakdown: ",e.jsx("code",{className:"text-emerald-400 font-mono",children:"d"}),", ",e.jsx("code",{className:"text-sky-400 font-mono",children:"s"}),", ",e.jsx("code",{className:"text-amber-400 font-mono",children:"w"})," & ",e.jsx("code",{className:"text-purple-400 font-mono",children:"."})]}),e.jsxs("p",{className:"text-base md:text-lg text-slate-400 leading-relaxed max-w-4xl",children:["Master the foundational building blocks of regex: shorthand character classes, extracting numeric tokens with ",e.jsx("code",{className:"text-emerald-300 font-mono",children:"d+"}),", and whitespace matching."]})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsxs("h2",{className:"text-2xl font-bold text-emerald-400 flex items-center gap-2",children:[e.jsx("span",{children:"💻"})," Hands-On Java Demo Code"]}),e.jsx(t,{fileModule:s,title:"RegexMetaCharactersCatalogDemo.java",highlightLines:[7,14,15,16,17,18,19,20,26,27]})]}),e.jsx("section",{className:"space-y-4",children:e.jsx(r,{title:"Meta-Characters FAQs",questions:o})}),e.jsx("section",{className:"space-y-4",children:e.jsx(a,{content:i,title:"Module 003_006 Topic 4: Meta-Characters Catalog",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Printable Note",downloadFileName:"003_006_topic4_meta_characters_note.txt"})}),e.jsx(n,{note:"Remember the capital letter rule in regex: lowercase is the match, uppercase is the NEGATION! So d is digit, and D is NON-digit! — Sukanta Hui"})]})}export{g as default};
