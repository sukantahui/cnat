import{j as e}from"./vendor-react-core-Doz9nIC6.js";import{J as t}from"./JavaFileLoader-BfBG3xz_.js";import{F as r}from"./FAQTemplate-BHhlgA96.js";import{P as n}from"./PlainTextPrint-C08xhKA4.js";import{T as a}from"./TeacherSukantaHui-CEPuAfsb.js";import"./JavaCodeBlock-BwsLxS3r.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-DGCamHnX.js";const s=`/**\r
 * Java Core Tutorial - Module 003_001: String Immutability & The String Constant Pool (SCP)\r
 * Topic 6: Comparing Strings: '==' Reference Equality vs '.equals()' Content Equality\r
 * Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
 */\r
\r
package com.coderaccotax.javatutorial.strings;\r
\r
public class StringEqualsVsOperatorDemo {\r
\r
    public static void main(String[] args) {\r
        System.out.println("==========================================================================");\r
        System.out.println(" TOPIC 6: '==' VS 'equals()' FOR STRINGS - BARRACKPORE");\r
        System.out.println("==========================================================================\\n");\r
\r
        String str1 = "Shyamnagar";\r
        String str2 = "Shyamnagar";\r
        String str3 = new String("Shyamnagar");\r
        String str4 = "Shyam" + "nagar"; // Compile-time constant expression evaluates to "Shyamnagar" in SCP!\r
\r
        System.out.println(">>> 1. Comparing References with '==' (Memory Address):");\r
        System.out.println("  str1 == str2 : " + (str1 == str2) + " (Both point to same SCP literal)");\r
        System.out.println("  str1 == str3 : " + (str1 == str3) + " (str3 is separate Heap instance)");\r
        System.out.println("  str1 == str4 : " + (str1 == str4) + " (Compiler folded constant literal into SCP)");\r
\r
        System.out.println("\\n>>> 2. Comparing Character Values with '.equals()':");\r
        System.out.println("  str1.equals(str3) : " + str1.equals(str3) + " (TRUE: Identical character sequence)");\r
\r
        System.out.println("\\n>>> GOLDEN RULE: ALWAYS compare Strings with '.equals()', NEVER with '=='!");\r
\r
        System.out.println("\\n==========================================================================");\r
    }\r
}`,o=`================================================================================\r
JAVA CORE TUTORIAL - QUICK REVISION GUIDE\r
Module 003_001: String Immutability & String Constant Pool\r
Topic 6: '==' vs equals() for Strings\r
Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
================================================================================\r
\r
1. STRING EQUALITY RULES:\r
   - '=='       : Reference identity (Do they point to the exact same RAM address?).\r
   - '.equals()': Semantic content equality (Are the characters identical?).\r
   - Compile-time constants ('"a" + "b"') are folded by javac into SCP.\r
\r
================================================================================\r
Classroom Practice: Barrackpore Academy | Mentor: Sukanta Hui\r
================================================================================`,i=[{question:"Why should you always use '.equals()' instead of '==' when comparing Strings in Java?",shortAnswer:"'==' checks if both string variables point to the exact same memory address on the Heap. '.equals()' compares the actual characters inside the strings. Using '==' will fail when comparing strings loaded from files, scanners, or 'new String()' constructors.",explanation:"Using '==' for string comparisons is the #1 cause of bugs in beginner Java code.",hint:"'==' compares memory addresses; .equals() compares character contents.",level:"Beginner",codeExample:'if ("admin".equals(inputRole)) { /* Safe & correct */ }'}];function h(){return e.jsxs("div",{className:"space-y-12 px-4 md:px-8 py-8 text-slate-200 bg-slate-900 min-h-screen",children:[e.jsxs("header",{className:"space-y-4 border-b border-slate-800 pb-6",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"px-3 py-1 bg-sky-500/10 text-sky-400 border border-sky-500/20 text-xs font-semibold rounded-full uppercase tracking-wider",children:"Module 003_001 · Topic 6"}),e.jsx("span",{className:"px-3 py-1 bg-amber-500/10 text-amber-400 border border-amber-500/20 text-xs font-semibold rounded-full",children:"Cardinal Equality Law"})]}),e.jsxs("h1",{className:"text-xl sm:text-2xl md:text-3xl font-bold text-white tracking-tight",children:["Comparing Strings: Reference Identity (",e.jsx("code",{className:"text-rose-400 font-mono",children:"=="}),") vs Content Equality (",e.jsx("code",{className:"text-emerald-400 font-mono",children:".equals()"}),")"]}),e.jsxs("p",{className:"text-base md:text-lg text-slate-400 leading-relaxed max-w-4xl",children:["Master the cardinal law of String comparisons: compiler constant folding, literal pooling, and why ",e.jsx("code",{className:"text-rose-300 font-mono",children:"=="})," produces catastrophic false negatives on dynamic strings."]})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsxs("h2",{className:"text-2xl font-bold text-emerald-400 flex items-center gap-2",children:[e.jsx("span",{children:"💻"})," Hands-On Java Demo Code"]}),e.jsx(t,{fileModule:s,title:"StringEqualsVsOperatorDemo.java",highlightLines:[7,15,16,17,18,22,23,27]})]}),e.jsx("section",{className:"space-y-4",children:e.jsx(r,{title:"String Comparison FAQs",questions:i})}),e.jsx("section",{className:"space-y-4",children:e.jsx(n,{content:o,title:"Module 003_001 Topic 6: String == vs equals()",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Printable Note",downloadFileName:"003_001_topic6_string_equals_note.txt"})}),e.jsx(a,{note:"If you take input from a Scanner or web form and compare it with 'name == Swadeep', it will ALWAYS return false! Always use 'Swadeep'.equals(name) to avoid null pointers and bugs. — Sukanta Hui"})]})}export{h as default};
