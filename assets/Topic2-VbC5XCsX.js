import{j as e}from"./vendor-react-core-Doz9nIC6.js";import{J as t}from"./JavaFileLoader-BfBG3xz_.js";import{F as r}from"./FAQTemplate-CkSqDH4B.js";import{P as o}from"./PlainTextPrint-C08xhKA4.js";import{T as n}from"./TeacherSukantaHui-CyIG3xbg.js";import"./JavaCodeBlock-BwsLxS3r.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-CIaKtAt4.js";const a=`/**\r
 * Java Core Tutorial - Module 007_008: Sorting, Comparable, Comparator & Collections\r
 * Topic 2: The Contract of compareTo(): Negative (< 0), Zero (== 0) & Positive (> 0)\r
 * Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
 */\r
\r
package com.coderaccotax.javatutorial.collections;\r
\r
public class CompareToReturnContractDemo {\r
\r
    public static void main(String[] args) {\r
        System.out.println("==========================================================================");\r
        System.out.println(" TOPIC 2: THE 3-WAY RETURN CONTRACT OF compareTo() - BARRACKPORE");\r
        System.out.println("==========================================================================\\n");\r
\r
        Integer a = 10;\r
        Integer b = 20;\r
        Integer c = 10;\r
\r
        int result1 = a.compareTo(b); // 10 vs 20 -> Negative (< 0)\r
        int result2 = a.compareTo(c); // 10 vs 10 -> Zero (== 0)\r
        int result3 = b.compareTo(a); // 20 vs 10 -> Positive (> 0)\r
\r
        System.out.println(">>> 1. Mathematical Sign Results:");\r
        System.out.println("  10.compareTo(20) : " + result1 + " (Negative: 'this' comes BEFORE 'other')");\r
        System.out.println("  10.compareTo(10) : " + result2 + " (Zero    : 'this' EQUALS 'other')");\r
        System.out.println("  20.compareTo(10) : " + result3 + " (Positive: 'this' comes AFTER 'other')");\r
\r
        System.out.println("\\n>>> CRITICAL WARNING ON INTEGER SUBTRACTION IN compareTo():");\r
        System.out.println("  - BAD CODE : 'return this.id - other.id;'");\r
        System.out.println("  - DANGER   : If this.id is negative and other.id is large positive, Integer Overflow will reverse the sign!");\r
        System.out.println("  - SAFE CODE: Always use 'Integer.compare(this.id, other.id)' or 'Double.compare()'!");\r
\r
        System.out.println("\\n==========================================================================");\r
    }\r
}`,i=`================================================================================\r
JAVA CORE TUTORIAL - QUICK REVISION GUIDE\r
Module 007_008: Sorting, Comparable, Comparator & Collections\r
Topic 2: The Contract of compareTo()\r
Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
================================================================================\r
\r
1. COMPARETO CONTRACT:\r
   - Return < 0 : 'this' precedes 'other'.\r
   - Return == 0: 'this' equals 'other'.\r
   - Return > 0 : 'this' follows 'other'.\r
   - Subtraction Trap: Never use 'a - b' due to 32-bit integer overflow.\r
   - Safe idiom: 'Integer.compare(a, b)', 'Double.compare(a, b)'.\r
\r
================================================================================\r
Classroom Practice: Barrackpore Academy | Mentor: Sukanta Hui\r
================================================================================`,s=[{question:"What is the return contract of 'compareTo(T o)' and why is 'return this.id - other.id' considered a dangerous bug?",shortAnswer:"1. 'Contract': Returns a negative integer if 'this < o', zero if 'this == o', and a positive integer if 'this > o'. 2. 'Integer Overflow Hazard': Writing 'this.id - other.id' causes catastrophic sign-inversion bugs if '(this.id - other.id)' underflows or overflows the 32-bit signed integer boundary (e.g. 'Integer.MIN_VALUE - 1'). Developers should ALWAYS use 'Integer.compare(this.id, other.id)' instead.",explanation:"Effective Java Item 14: Consider implementing Comparable.",hint:"Negative (< 0), Zero (== 0), Positive (> 0); direct subtraction risks 32-bit integer overflow.",level:"Intermediate",codeExample:"return Integer.compare(this.score, other.score); // Safe overflow-free comparison"}];function x(){return e.jsxs("div",{className:"space-y-12 px-4 md:px-8 py-8 text-slate-200 bg-slate-900 min-h-screen",children:[e.jsxs("header",{className:"space-y-4 border-b border-slate-800 pb-6",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"px-3 py-1 bg-sky-500/10 text-sky-400 border border-sky-500/20 text-xs font-semibold rounded-full uppercase tracking-wider",children:"Module 007_008 · Topic 2"}),e.jsx("span",{className:"px-3 py-1 bg-amber-500/10 text-amber-400 border border-amber-500/20 text-xs font-semibold rounded-full",children:"compareTo Contract"})]}),e.jsxs("h1",{className:"text-3xl md:text-4xl font-extrabold text-white tracking-tight",children:["Contract of ",e.jsx("code",{className:"text-emerald-400 font-mono",children:"compareTo()"}),": Negative (",e.jsx("code",{className:"text-sky-400 font-mono",children:"< 0"}),"), Zero (",e.jsx("code",{className:"text-amber-400 font-mono",children:"== 0"}),") & Positive (",e.jsx("code",{className:"text-purple-400 font-mono",children:"> 0"}),")"]}),e.jsx("p",{className:"text-base md:text-lg text-slate-400 leading-relaxed max-w-4xl",children:"Master mathematical comparison invariants: understanding the 3-way sign contract and avoiding dangerous integer overflow bugs in subtraction idioms."})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsxs("h2",{className:"text-2xl font-bold text-emerald-400 flex items-center gap-2",children:[e.jsx("span",{children:"💻"})," Hands-On Java Demo Code"]}),e.jsx(t,{fileModule:a,title:"CompareToReturnContractDemo.java",highlightLines:[7,10,15,16,17,24,25,26]})]}),e.jsx("section",{className:"space-y-4",children:e.jsx(r,{title:"compareTo Contract FAQs",questions:s})}),e.jsx("section",{className:"space-y-4",children:e.jsx(o,{content:i,title:"Module 007_008 Topic 2: Contract of compareTo",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Printable Note",downloadFileName:"007_008_topic2_contract_of_compareto_note.txt"})}),e.jsx(n,{note:"Never write 'return this.id - other.id' inside compareTo()! If the numbers are negative or large, integer overflow will turn a positive number into negative and break your entire sort order! Always use 'Integer.compare(a, b)'! — Sukanta Hui"})]})}export{x as default};
