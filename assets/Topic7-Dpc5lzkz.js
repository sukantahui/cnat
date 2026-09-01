import{j as e}from"./vendor-react-core-Doz9nIC6.js";import{J as r}from"./JavaFileLoader-BfBG3xz_.js";import{F as t}from"./FAQTemplate-BHhlgA96.js";import{P as n}from"./PlainTextPrint-C08xhKA4.js";import{T as a}from"./TeacherSukantaHui-BaJcBHAy.js";import"./JavaCodeBlock-BwsLxS3r.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-8ao-0upJ.js";const o=`/**\r
 * Java Core Tutorial - Module 003_001: String Immutability & The String Constant Pool (SCP)\r
 * Topic 7: Case-Insensitive Comparisons: equalsIgnoreCase(), compareTo(), compareToIgnoreCase()\r
 * Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
 */\r
\r
package com.coderaccotax.javatutorial.strings;\r
\r
public class StringComparisonMethodsDemo {\r
\r
    public static void main(String[] args) {\r
        System.out.println("==========================================================================");\r
        System.out.println(" TOPIC 7: CASE-INSENSITIVE & LEXICOGRAPHICAL COMPARISON - BARRACKPORE");\r
        System.out.println("==========================================================================\\n");\r
\r
        String hubA = "Barrackpore";\r
        String hubB = "barrackpore";\r
        String hubC = "Ichapur";\r
\r
        System.out.println(">>> 1. Case-Insensitive Equality:");\r
        System.out.println("  hubA.equals(hubB)               : " + hubA.equals(hubB) + " (Case Sensitive)");\r
        System.out.println("  hubA.equalsIgnoreCase(hubB)     : " + hubA.equalsIgnoreCase(hubB) + " (Ignores Case)");\r
\r
        System.out.println("\\n>>> 2. Lexicographical Ordering (compareTo):");\r
        System.out.println("  hubA.compareTo(hubC)            : " + hubA.compareTo(hubC) + " ('B' comes before 'I' -> Negative)");\r
        System.out.println("  hubC.compareTo(hubA)            : " + hubC.compareTo(hubA) + " ('I' comes after 'B' -> Positive)");\r
        System.out.println("  hubA.compareToIgnoreCase(hubB)  : " + hubA.compareToIgnoreCase(hubB) + " (0 = Alphabetically Identical)");\r
\r
        System.out.println("\\n>>> Return Value Contract of compareTo():");\r
        System.out.println("  - Returns < 0 : This string comes BEFORE the argument string alphabetically.");\r
        System.out.println("  - Returns = 0 : Both strings are equal.");\r
        System.out.println("  - Returns > 0 : This string comes AFTER the argument string alphabetically.");\r
\r
        System.out.println("\\n==========================================================================");\r
    }\r
}`,s=`================================================================================\r
JAVA CORE TUTORIAL - QUICK REVISION GUIDE\r
Module 003_001: String Immutability & String Constant Pool\r
Topic 7: Case-Insensitive & Lexicographical Comparison\r
Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
================================================================================\r
\r
1. COMPARISON METHODS:\r
   - 'equalsIgnoreCase(str)'     : Returns true/false ignoring uppercase/lowercase.\r
   - 'compareTo(str)'            : Returns negative, 0, or positive (Unicode diff).\r
   - 'compareToIgnoreCase(str)'  : Alphabetical sort comparison ignoring case.\r
\r
================================================================================\r
Classroom Practice: Barrackpore Academy | Mentor: Sukanta Hui\r
================================================================================`,i=[{question:"What does the 'compareTo(String anotherString)' method return in Java?",shortAnswer:"It returns an integer: negative (< 0) if this string lexicographically precedes the argument, zero (0) if they are equal, and positive (> 0) if this string follows the argument. 'compareToIgnoreCase()' performs the same check ignoring case.",explanation:"Powers sorting algorithms in Collections.sort() and Arrays.sort().",hint:"Returns < 0 for before, 0 for equal, > 0 for after.",level:"Beginner",codeExample:'int diff = "Apple".compareTo("Banana"); // Returns negative number'}];function x(){return e.jsxs("div",{className:"space-y-12 px-4 md:px-8 py-8 text-slate-200 bg-slate-900 min-h-screen",children:[e.jsx("style",{children:`
          @keyframes fadeIn {
            from { opacity: 0; transform: translateY(8px); }
            to { opacity: 1; transform: translateY(0); }
          }
          .animate-fade-in { animation: fadeIn 0.5s ease-out forwards; }
        `}),e.jsxs("header",{className:"space-y-4 border-b border-slate-800 pb-6 animate-fade-in",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"px-3 py-1 bg-sky-500/10 text-sky-400 border border-sky-500/20 text-xs font-semibold rounded-full uppercase tracking-wider",children:"Module 003_001 · Topic 7"}),e.jsx("span",{className:"px-3 py-1 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-xs font-semibold rounded-full",children:"Lexicographical Sorting"})]}),e.jsxs("h1",{className:"text-xl sm:text-2xl md:text-3xl font-bold text-white tracking-tight",children:["Case-Insensitive Comparisons: ",e.jsx("code",{className:"text-emerald-400 font-mono",children:"equalsIgnoreCase()"})," & ",e.jsx("code",{className:"text-emerald-400 font-mono",children:"compareTo()"})]}),e.jsxs("p",{className:"text-base md:text-lg text-slate-400 leading-relaxed max-w-4xl",children:["Learn how to perform case-agnostic equality tests and alphabetical sorting comparisons using ",e.jsx("code",{className:"text-emerald-300 font-mono",children:"compareTo()"})," and Unicode code-point differences."]})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsxs("h2",{className:"text-2xl font-bold text-emerald-400 flex items-center gap-2",children:[e.jsx("span",{children:"💻"})," Hands-On Java Demo Code"]}),e.jsx(r,{fileModule:o,title:"StringComparisonMethodsDemo.java",highlightLines:[7,14,15,16,20,24,25]})]}),e.jsx("section",{className:"space-y-4",children:e.jsx(t,{title:"Lexicographical Comparison FAQs",questions:i})}),e.jsx("section",{className:"space-y-4",children:e.jsx(n,{content:s,title:"Module 003_001 Topic 7: String Comparisons",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Printable Note",downloadFileName:"003_001_topic7_comparison_methods_note.txt"})}),e.jsx(a,{note:"When sorting student names alphabetically in our Barrackpore portal, Collections.sort() uses compareTo() under the hood. Negative means 'comes before', zero means 'equal', and positive means 'comes after'! — Sukanta Hui"})]})}export{x as default};
