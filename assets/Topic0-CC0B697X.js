import{j as e}from"./vendor-react-core-Doz9nIC6.js";import{J as t}from"./JavaFileLoader-BfBG3xz_.js";import{F as n}from"./FAQTemplate-BHhlgA96.js";import{P as a}from"./PlainTextPrint-C08xhKA4.js";import{T as r}from"./TeacherSukantaHui-RpFLNJ5A.js";import"./JavaCodeBlock-BwsLxS3r.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-wprqVFW_.js";const i=`/**\r
 * Java Core Tutorial - Module 003_001: String Immutability & The String Constant Pool (SCP)\r
 * Topic 0: What is java.lang.String and Why It is the Most Heavily Used Type\r
 * Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
 */\r
\r
package com.coderaccotax.javatutorial.strings;\r
\r
public class StringFoundationsOverviewDemo {\r
\r
    public static void main(String[] args) {\r
        System.out.println("==========================================================================");\r
        System.out.println(" TOPIC 0: WHAT IS java.lang.String - BARRACKPORE");\r
        System.out.println("==========================================================================\\n");\r
\r
        // 1. String is an object that wraps an immutable byte/char array:\r
        String instituteName = "Coder & AccoTax Barrackpore";\r
\r
        System.out.println(">>> 1. Basic String Properties:");\r
        System.out.println("  Value              : " + instituteName);\r
        System.out.println("  Length (characters): " + instituteName.length());\r
        System.out.println("  Class Name         : " + instituteName.getClass().getName());\r
        System.out.println("  Interfaces         : Serializable, Comparable<String>, CharSequence");\r
\r
        System.out.println("\\n>>> 2. Compact Strings (Java 9+ JVM Optimization):");\r
        System.out.println("  - Historically stored as 'char[]' (2 bytes per character).");\r
        System.out.println("  - Modern Java stores Strings as 'byte[]' + a 1-byte LATIN1/UTF16 coder flag.");\r
        System.out.println("  - Cuts String heap footprint in half (50% RAM reduction in enterprise apps!).");\r
\r
        System.out.println("\\n==========================================================================");\r
    }\r
}`,o=`================================================================================\r
JAVA CORE TUTORIAL - QUICK REVISION GUIDE\r
Module 003_001: String Immutability & String Constant Pool\r
Topic 0: What is java.lang.String\r
Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
================================================================================\r
\r
1. STRING FUNDAMENTALS:\r
   - Represents immutable character sequences.\r
   - Implements Serializable, Comparable<String>, CharSequence.\r
   - Java 9 Compact Strings: 'byte[] value' + 'byte coder' (Latin-1 or UTF-16).\r
\r
================================================================================\r
Classroom Practice: Barrackpore Academy | Mentor: Sukanta Hui\r
================================================================================`,s=[{question:"What is 'java.lang.String' under the hood and what major internal optimization was introduced in Java 9?",shortAnswer:"'java.lang.String' is an immutable sequence of characters. In Java 9 (Compact Strings / JEP 254), the internal representation was changed from 'char[]' (16-bit) to 'byte[]' with a 1-byte coder flag (Latin-1 or UTF-16), reducing String memory footprint by up to 50%.",explanation:"Strings are final and immutable objects located in java.lang.",hint:"Immutable character sequence; optimized to byte[] in Java 9 for 50% memory savings.",level:"Beginner",codeExample:'String s = "Barrackpore"; // Stored as byte[] in Java 9+'}];function x(){return e.jsxs("div",{className:"space-y-12 px-4 md:px-8 py-8 text-slate-200 bg-slate-900 min-h-screen",children:[e.jsxs("header",{className:"space-y-4 border-b border-slate-800 pb-6",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"px-3 py-1 bg-sky-500/10 text-sky-400 border border-sky-500/20 text-xs font-semibold rounded-full uppercase tracking-wider",children:"Module 003_001 · Topic 0"}),e.jsx("span",{className:"px-3 py-1 bg-indigo-500/10 text-indigo-400 border border-indigo-500/20 text-xs font-semibold rounded-full",children:"Segment 3 Opener"})]}),e.jsxs("h1",{className:"text-xl sm:text-2xl md:text-3xl font-bold text-white tracking-tight",children:["What is ",e.jsx("code",{className:"text-indigo-400 font-mono",children:"java.lang.String"})," & Why It Dominates Java Memory"]}),e.jsxs("p",{className:"text-base md:text-lg text-slate-400 leading-relaxed max-w-4xl",children:["Discover why ",e.jsx("code",{className:"text-indigo-300 font-mono",children:"java.lang.String"})," accounts for over 30% of enterprise JVM heap memory, and explore modern Java 9 Compact Strings (",e.jsx("code",{className:"text-emerald-400 font-mono",children:"byte[]"})," Latin-1)."]})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsxs("h2",{className:"text-2xl font-bold text-emerald-400 flex items-center gap-2",children:[e.jsx("span",{children:"💻"})," Hands-On Java Demo Code"]}),e.jsx(t,{fileModule:i,title:"StringFoundationsOverviewDemo.java",highlightLines:[7,14,17,18,23,24]})]}),e.jsx("section",{className:"space-y-4",children:e.jsx(n,{title:"String Foundations FAQs",questions:s})}),e.jsx("section",{className:"space-y-4",children:e.jsx(a,{content:o,title:"Module 003_001 Topic 0: java.lang.String Overview",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Printable Note",downloadFileName:"003_001_topic0_string_overview_note.txt"})}),e.jsx(r,{note:"Welcome to Segment 3! In Java, Strings are not primitive types like int or double—they are full-fledged immutable objects with their own specialized memory region in the Heap. — Sukanta Hui"})]})}export{x as default};
