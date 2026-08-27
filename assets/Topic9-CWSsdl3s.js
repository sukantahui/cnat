import{j as e}from"./vendor-react-core-Doz9nIC6.js";import{J as t}from"./JavaFileLoader-BfBG3xz_.js";import{F as r}from"./FAQTemplate-CkSqDH4B.js";import{P as n}from"./PlainTextPrint-C08xhKA4.js";import{T as a}from"./TeacherSukantaHui-CC0AKmkm.js";import"./JavaCodeBlock-BwsLxS3r.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-BtJHuk7w.js";const s=`/**\r
 * Java Core Tutorial - Module 003_001: String Immutability & The String Constant Pool (SCP)\r
 * Topic 9: Core String Transformation Methods: trim(), strip() (Java 11+), repeat()\r
 * Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
 */\r
\r
package com.coderaccotax.javatutorial.strings;\r
\r
public class StringTransformationMethodsDemo {\r
\r
    public static void main(String[] args) {\r
        System.out.println("==========================================================================");\r
        System.out.println(" TOPIC 9: STRING TRANSFORMATION METHODS - BARRACKPORE");\r
        System.out.println("==========================================================================\\n");\r
\r
        String rawInput = "  \\t  Barrackpore Hub  \\n  ";\r
\r
        System.out.println(">>> 1. Case Conversions (Creates BRAND NEW Strings!):");\r
        System.out.println("  toLowerCase() : "" + "JAVA CORE".toLowerCase() + """);\r
        System.out.println("  toUpperCase() : "" + "java core".toUpperCase() + """);\r
\r
        System.out.println("\\n>>> 2. trim() vs Modern strip() (Java 11+ Unicode Aware):");\r
        System.out.println("  trim()          : "" + rawInput.trim() + "" (Strips ASCII <= 32 only)");\r
        System.out.println("  strip()         : "" + rawInput.strip() + "" (Unicode-aware whitespace removal)");\r
        System.out.println("  stripLeading()  : "" + rawInput.stripLeading() + """);\r
        System.out.println("  stripTrailing() : "" + rawInput.stripTrailing() + """);\r
\r
        System.out.println("\\n>>> 3. repeat() (Java 11+):");\r
        String stars = "*".repeat(30);\r
        System.out.println("  "*".repeat(30)  : " + stars);\r
\r
        System.out.println("\\n>>> REMINDER: Because Strings are immutable, none of these methods modify the original string!");\r
\r
        System.out.println("\\n==========================================================================");\r
    }\r
}`,i=`================================================================================\r
JAVA CORE TUTORIAL - QUICK REVISION GUIDE\r
Module 003_001: String Immutability & String Constant Pool\r
Topic 9: String Transformation Methods\r
Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
================================================================================\r
\r
1. TRANSFORMATION METHODS:\r
   - 'toLowerCase()' / 'toUpperCase()' : Generates new case string.\r
   - 'trim()'                          : Legacy ASCII whitespace strip.\r
   - 'strip()' (Java 11+)              : Unicode-aware whitespace strip.\r
   - 'stripLeading()' / 'stripTrailing()': Strips start or end whitespace.\r
   - 'repeat(n)' (Java 11+)            : Concatenates string n times.\r
\r
================================================================================\r
Classroom Practice: Barrackpore Academy | Mentor: Sukanta Hui\r
================================================================================`,o=[{question:"What is the difference between 'trim()' and 'strip()' (introduced in Java 11)?",shortAnswer:"'trim()' removes only ASCII characters with code point <= 32 (standard space, tab, newline). 'strip()' is Unicode-aware and removes ALL universal Unicode whitespace characters according to Character.isWhitespace().",explanation:"'strip()' is the modern replacement for 'trim()' in modern Java applications.",hint:"trim() is legacy ASCII; strip() is modern Unicode-compliant whitespace stripping.",level:"Intermediate",codeExample:"String clean = raw.strip(); // Modern Unicode whitespace removal"}];function g(){return e.jsxs("div",{className:"space-y-12 px-4 md:px-8 py-8 text-slate-200 bg-slate-900 min-h-screen",children:[e.jsx("style",{children:`
          @keyframes fadeIn {
            from { opacity: 0; transform: translateY(8px); }
            to { opacity: 1; transform: translateY(0); }
          }
          .animate-fade-in { animation: fadeIn 0.5s ease-out forwards; }
        `}),e.jsxs("header",{className:"space-y-4 border-b border-slate-800 pb-6 animate-fade-in",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"px-3 py-1 bg-sky-500/10 text-sky-400 border border-sky-500/20 text-xs font-semibold rounded-full uppercase tracking-wider",children:"Module 003_001 · Topic 9"}),e.jsx("span",{className:"px-3 py-1 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-xs font-semibold rounded-full",children:"Modern String API"})]}),e.jsxs("h1",{className:"text-3xl md:text-4xl font-extrabold text-white tracking-tight",children:["Core String Transformation Methods: ",e.jsx("code",{className:"text-emerald-400 font-mono",children:"trim()"})," vs Modern ",e.jsx("code",{className:"text-emerald-400 font-mono",children:"strip()"})]}),e.jsxs("p",{className:"text-base md:text-lg text-slate-400 leading-relaxed max-w-4xl",children:["Learn modern Java 11 string transformations: Unicode-compliant whitespace stripping via ",e.jsx("code",{className:"text-emerald-300 font-mono",children:"strip()"})," and instant multiplication using ",e.jsx("code",{className:"text-emerald-300 font-mono",children:"repeat()"}),"."]})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsxs("h2",{className:"text-2xl font-bold text-emerald-400 flex items-center gap-2",children:[e.jsx("span",{children:"💻"})," Hands-On Java Demo Code"]}),e.jsx(t,{fileModule:s,title:"StringTransformationMethodsDemo.java",highlightLines:[7,14,15,19,20,25]})]}),e.jsx("section",{className:"space-y-4",children:e.jsx(r,{title:"String Transformations FAQs",questions:o})}),e.jsx("section",{className:"space-y-4",children:e.jsx(n,{content:i,title:"Module 003_001 Topic 9: String Transformations",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Printable Note",downloadFileName:"003_001_topic9_transformations_note.txt"})}),e.jsx(a,{note:"Always use .strip() instead of .trim() in modern Java (Java 11+). strip() handles international characters and Unicode whitespace properly! — Sukanta Hui"})]})}export{g as default};
