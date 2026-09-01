import{j as t}from"./vendor-react-core-Doz9nIC6.js";import{J as e}from"./JavaFileLoader-BfBG3xz_.js";import{F as n}from"./FAQTemplate-BHhlgA96.js";import{P as r}from"./PlainTextPrint-C08xhKA4.js";import{T as s}from"./TeacherSukantaHui-CEPuAfsb.js";import"./JavaCodeBlock-BwsLxS3r.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-DGCamHnX.js";const i=`/**\r
 * Java Core Tutorial - Module 003_001: String Immutability & The String Constant Pool (SCP)\r
 * Topic 8: Core String Inspection Methods: length(), isEmpty(), isBlank(), charAt(), indexOf(), contains()\r
 * Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
 */\r
\r
package com.coderaccotax.javatutorial.strings;\r
\r
public class StringInspectionMethodsDemo {\r
\r
    public static void main(String[] args) {\r
        System.out.println("==========================================================================");\r
        System.out.println(" TOPIC 8: CORE STRING INSPECTION METHODS - BARRACKPORE");\r
        System.out.println("==========================================================================\\n");\r
\r
        String str = "Coder & AccoTax Barrackpore";\r
\r
        System.out.println(">>> 1. String Inspection Operations on: "" + str + """);\r
        System.out.println("  str.length()                 : " + str.length() + " chars");\r
        System.out.println("  str.charAt(0)                : '" + str.charAt(0) + "'");\r
        System.out.println("  str.indexOf("AccoTax")        : Index " + str.indexOf("AccoTax"));\r
        System.out.println("  str.contains("Barrackpore")  : " + str.contains("Barrackpore"));\r
        System.out.println("  str.startsWith("Coder")      : " + str.startsWith("Coder"));\r
        System.out.println("  str.endsWith("pore")         : " + str.endsWith("pore"));\r
\r
        System.out.println("\\n>>> 2. isEmpty() vs isBlank() (Java 11+ Distinction):");\r
        String emptyStr = "";\r
        String whitespaceStr = "   \\t\\n  ";\r
\r
        System.out.println("  emptyStr.isEmpty()           : " + emptyStr.isEmpty() + " (length == 0)");\r
        System.out.println("  whitespaceStr.isEmpty()      : " + whitespaceStr.isEmpty() + " (length > 0, so FALSE!)");\r
        System.out.println("  whitespaceStr.isBlank()      : " + whitespaceStr.isBlank() + " (Only whitespace, TRUE!)");\r
\r
        System.out.println("\\n==========================================================================");\r
    }\r
}`,a=`================================================================================\r
JAVA CORE TUTORIAL - QUICK REVISION GUIDE\r
Module 003_001: String Immutability & String Constant Pool\r
Topic 8: Core String Inspection Methods\r
Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
================================================================================\r
\r
1. INSPECTION METHODS:\r
   - 'length()'             : Total number of 16-bit char code units.\r
   - 'isEmpty()'            : 'length() == 0'.\r
   - 'isBlank()' (Java 11+) : True if empty or all whitespaces.\r
   - 'charAt(idx)'          : Char at index (0-indexed).\r
   - 'indexOf(sub)'         : First occurrence index (-1 if missing).\r
   - 'contains(seq)'        : True if substring is present.\r
\r
================================================================================\r
Classroom Practice: Barrackpore Academy | Mentor: Sukanta Hui\r
================================================================================`,o=[{question:"What is the difference between 'String.isEmpty()' and 'String.isBlank()' (introduced in Java 11)?",shortAnswer:"'isEmpty()' returns true ONLY if 'length() == 0'. 'isBlank()' returns true if the string is empty OR contains only whitespace characters (spaces, tabs, newlines).",explanation:"'isBlank()' is essential for validating form inputs and user submissions.",hint:"isEmpty() checks length == 0; isBlank() checks if empty or all whitespaces.",level:"Beginner",codeExample:`"   ".isEmpty(); // false
"   ".isBlank(); // true`}];function y(){return t.jsxs("div",{className:"space-y-12 px-4 md:px-8 py-8 text-slate-200 bg-slate-900 min-h-screen",children:[t.jsx("style",{children:`
          @keyframes fadeIn {
            from { opacity: 0; transform: translateY(8px); }
            to { opacity: 1; transform: translateY(0); }
          }
          .animate-fade-in { animation: fadeIn 0.5s ease-out forwards; }
        `}),t.jsxs("header",{className:"space-y-4 border-b border-slate-800 pb-6 animate-fade-in",children:[t.jsxs("div",{className:"flex items-center gap-3",children:[t.jsx("span",{className:"px-3 py-1 bg-sky-500/10 text-sky-400 border border-sky-500/20 text-xs font-semibold rounded-full uppercase tracking-wider",children:"Module 003_001 · Topic 8"}),t.jsx("span",{className:"px-3 py-1 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-xs font-semibold rounded-full",children:"Core Inspection API"})]}),t.jsxs("h1",{className:"text-xl sm:text-2xl md:text-3xl font-bold text-white tracking-tight",children:["Core String Inspection Methods: ",t.jsx("code",{className:"text-emerald-400 font-mono",children:"isEmpty()"})," vs ",t.jsx("code",{className:"text-emerald-400 font-mono",children:"isBlank()"})]}),t.jsxs("p",{className:"text-base md:text-lg text-slate-400 leading-relaxed max-w-4xl",children:["Master the fundamental string interrogation toolset: character indexing, substring search with ",t.jsx("code",{className:"text-emerald-300 font-mono",children:"indexOf()"}),", and whitespace validation via Java 11 ",t.jsx("code",{className:"text-emerald-300 font-mono",children:"isBlank()"}),"."]})]}),t.jsxs("section",{className:"space-y-4",children:[t.jsxs("h2",{className:"text-2xl font-bold text-emerald-400 flex items-center gap-2",children:[t.jsx("span",{children:"💻"})," Hands-On Java Demo Code"]}),t.jsx(e,{fileModule:i,title:"StringInspectionMethodsDemo.java",highlightLines:[7,14,15,16,23,24,25]})]}),t.jsx("section",{className:"space-y-4",children:t.jsx(n,{title:"String Inspection FAQs",questions:o})}),t.jsx("section",{className:"space-y-4",children:t.jsx(r,{content:a,title:"Module 003_001 Topic 8: String Inspection Methods",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Printable Note",downloadFileName:"003_001_topic8_inspection_methods_note.txt"})}),t.jsx(s,{note:"Never validate user form input with just .isEmpty()! If a student enters three spaces '   ', isEmpty() returns false, but isBlank() correctly catches it. — Sukanta Hui"})]})}export{y as default};
