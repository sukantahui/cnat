import{j as e}from"./vendor-react-core-Doz9nIC6.js";import{J as t}from"./JavaFileLoader-BfBG3xz_.js";import{F as a}from"./FAQTemplate-BHhlgA96.js";import{P as n}from"./PlainTextPrint-C08xhKA4.js";import{T as r}from"./TeacherSukantaHui-CEPuAfsb.js";import"./JavaCodeBlock-BwsLxS3r.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-DGCamHnX.js";const s=`/**\r
 * Java Core Tutorial - Module 003_001: String Immutability & The String Constant Pool (SCP)\r
 * Topic 4: Why Are Java Strings Immutable? (4 Pillars of String Immutability)\r
 * Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
 */\r
\r
package com.coderaccotax.javatutorial.strings;\r
\r
public class WhyStringsAreImmutableDemo {\r
\r
    public static void main(String[] args) {\r
        System.out.println("==========================================================================");\r
        System.out.println(" TOPIC 4: WHY JAVA STRINGS ARE IMMUTABLE - BARRACKPORE");\r
        System.out.println("==========================================================================\\n");\r
\r
        System.out.println(">>> The 4 Fundamental Reasons James Gosling Made Strings Immutable:");\r
        System.out.println();\r
        System.out.println("  1. STRING CONSTANT POOL (SCP) INTEGRITY:");\r
        System.out.println("     If String was mutable, changing 'Barrackpore' in one reference would silently");\r
        System.out.println("     alter the value for thousands of other independent references!");\r
        System.out.println();\r
        System.out.println("  2. SECURITY & CLASS LOADING:");\r
        System.out.println("     File paths, database URLs, and network ports are passed as Strings.");\r
        System.out.println("     If mutable, a malicious thread could change the DB username after authentication!");\r
        System.out.println();\r
        System.out.println("  3. THREAD SAFETY & CONCURRENCY:");\r
        System.out.println("     Immutable strings can be shared across 100 concurrent threads with ZERO synchronization overhead.");\r
        System.out.println();\r
        System.out.println("  4. HASHCODE CACHING (High Performance in HashMaps):");\r
        System.out.println("     Because String contents never change, the hashCode is calculated once and cached");\r
        System.out.println("     inside the 'hash' field. Subsequent hashCode() calls run in O(1) instant time!");\r
\r
        System.out.println("\\n==========================================================================");\r
    }\r
}`,i=`================================================================================\r
JAVA CORE TUTORIAL - QUICK REVISION GUIDE\r
Module 003_001: String Immutability & String Constant Pool\r
Topic 4: Why Strings Are Immutable\r
Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
================================================================================\r
\r
1. THE 4 IMMUTABILITY PILLARS:\r
   - SCP Sharing  : Shared references remain isolated and uncorrupted.\r
   - Security     : Network/DB connection strings cannot be hijacked.\r
   - Concurrency  : Thread-safe without 'synchronized' locks.\r
   - Hash Caching : 'hash' integer cached on first calculation for fast HashMap lookups.\r
\r
================================================================================\r
Classroom Practice: Barrackpore Academy | Mentor: Sukanta Hui\r
================================================================================`,o=[{question:"What are the 4 primary reasons why Java Strings are designed to be immutable?",shortAnswer:"1. String Constant Pool integrity (shared pool references don't corrupt each other). 2. Security (prevents tampering with DB URLs, passwords, or ClassLoader paths). 3. Thread Safety (naturally safe without locking). 4. HashCode Caching (hash is cached after 1st calculation for O(1) HashMap lookup).",explanation:"Declared 'final' to prevent subclasses from breaking immutability.",hint:"SCP sharing, Security, Thread-safety, and HashCode caching.",level:"Intermediate",codeExample:"// Immutability enables caching: private int hash; // cached hash code"}];function S(){return e.jsxs("div",{className:"space-y-12 px-4 md:px-8 py-8 text-slate-200 bg-slate-900 min-h-screen",children:[e.jsx("style",{children:`
          @keyframes fadeIn {
            from { opacity: 0; transform: translateY(8px); }
            to { opacity: 1; transform: translateY(0); }
          }
          .animate-fade-in { animation: fadeIn 0.5s ease-out forwards; }
        `}),e.jsxs("header",{className:"space-y-4 border-b border-slate-800 pb-6 animate-fade-in",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"px-3 py-1 bg-sky-500/10 text-sky-400 border border-sky-500/20 text-xs font-semibold rounded-full uppercase tracking-wider",children:"Module 003_001 · Topic 4"}),e.jsx("span",{className:"px-3 py-1 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-xs font-semibold rounded-full",children:"Core Language Architecture"})]}),e.jsx("h1",{className:"text-xl sm:text-2xl md:text-3xl font-bold text-white tracking-tight",children:"Why Are Java Strings Immutable? (The 4 Pillars of Immutability)"}),e.jsx("p",{className:"text-base md:text-lg text-slate-400 leading-relaxed max-w-4xl",children:"Master the four architectural reasons James Gosling made Strings immutable: Constant Pool integrity, system security, multi-threaded safety, and O(1) hashcode caching."})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsxs("h2",{className:"text-2xl font-bold text-emerald-400 flex items-center gap-2",children:[e.jsx("span",{children:"💻"})," Hands-On Java Demo Code"]}),e.jsx(t,{fileModule:s,title:"WhyStringsAreImmutableDemo.java",highlightLines:[7,13,17,21,25]})]}),e.jsx("section",{className:"space-y-4",children:e.jsx(a,{title:"String Immutability FAQs",questions:o})}),e.jsx("section",{className:"space-y-4",children:e.jsx(n,{content:i,title:"Module 003_001 Topic 4: Why Strings Are Immutable",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Printable Note",downloadFileName:"003_001_topic4_immutability_pillars_note.txt"})}),e.jsx(r,{note:"If Strings were mutable in Java, imagine this: Swadeep changes his name to 'Abhronila', and suddenly 100 database connection strings and passwords change too because they shared the same String pool address! Immutability keeps Java secure. — Sukanta Hui"})]})}export{S as default};
