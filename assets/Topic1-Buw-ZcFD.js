import{j as t}from"./vendor-react-core-Doz9nIC6.js";import{J as e}from"./JavaFileLoader-BfBG3xz_.js";import{F as n}from"./FAQTemplate-BHhlgA96.js";import{P as a}from"./PlainTextPrint-C08xhKA4.js";import{T as o}from"./TeacherSukantaHui-DDN87fI5.js";import"./JavaCodeBlock-BwsLxS3r.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-DEsnU7fn.js";const r=`/**\r
 * Java Core Tutorial - Module 003_004: Math, Random, BigInteger & BigDecimal\r
 * Topic 1: Math Methods: abs(), max(), min(), round(), ceil(), floor(), sqrt(), pow()\r
 * Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
 */\r
\r
package com.coderaccotax.javatutorial.math;\r
\r
public class MathMethodsCatalogDemo {\r
\r
    public static void main(String[] args) {\r
        System.out.println("==========================================================================");\r
        System.out.println(" TOPIC 1: Math METHODS CATALOG - BARRACKPORE");\r
        System.out.println("==========================================================================\\n");\r
\r
        System.out.println(">>> 1. Rounding & Bounds Methods:");\r
        System.out.println("  Math.abs(-45.8)   : " + Math.abs(-45.8) + " (Absolute distance from 0)");\r
        System.out.println("  Math.ceil(4.1)    : " + Math.ceil(4.1) + " (Rounds UP to nearest integer)");\r
        System.out.println("  Math.floor(4.9)   : " + Math.floor(4.9) + " (Rounds DOWN to nearest integer)");\r
        System.out.println("  Math.round(4.5)   : " + Math.round(4.5) + " (Standard round half-up)");\r
\r
        System.out.println("\\n>>> 2. Power & Roots:");\r
        System.out.println("  Math.pow(2, 8)    : " + Math.pow(2, 8) + " (2 to the power 8 = 256.0)");\r
        System.out.println("  Math.sqrt(144)    : " + Math.sqrt(144) + " (Square root = 12.0)");\r
        System.out.println("  Math.cbrt(27)     : " + Math.cbrt(27) + " (Cube root = 3.0)");\r
\r
        System.out.println("\\n>>> 3. Extremes & Trigonometry:");\r
        System.out.println("  Math.max(100, 250): " + Math.max(100, 250));\r
        System.out.println("  Math.min(100, 250): " + Math.min(100, 250));\r
        System.out.println("  Math.sin(Math.PI / 2) : " + Math.sin(Math.PI / 2) + " (sin(90 deg) = 1.0)");\r
\r
        System.out.println("\\n==========================================================================");\r
    }\r
}`,s=`================================================================================\r
JAVA CORE TUTORIAL - QUICK REVISION GUIDE\r
Module 003_004: Math, Random & Arbitrary Precision\r
Topic 1: Math Methods Catalog\r
Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
================================================================================\r
\r
1. MATH METHODS CHEATSHEET:\r
   - 'Math.abs(n)'   : Absolute value.\r
   - 'Math.ceil(d)'  : Rounds up → double.\r
   - 'Math.floor(d)' : Rounds down → double.\r
   - 'Math.round(d)' : Nearest integer → long.\r
   - 'Math.pow(a, b)': $a^b$ → double.\r
   - 'Math.sqrt(d)'  : Square root → double.\r
\r
================================================================================\r
Classroom Practice: Barrackpore Academy | Mentor: Sukanta Hui\r
================================================================================`,l=[{question:"What is the behavioral difference between 'Math.ceil()', 'Math.floor()', and 'Math.round()'?",shortAnswer:"'Math.ceil(x)' always rounds UP towards positive infinity (ceil(4.1) → 5.0). 'Math.floor(x)' always rounds DOWN towards negative infinity (floor(4.9) → 4.0). 'Math.round(x)' rounds to the nearest mathematical integer (half-up: round(4.5) → 5).",explanation:"ceil and floor return double; round returns int or long.",hint:"ceil rounds up; floor rounds down; round rounds to nearest whole number.",level:"Beginner",codeExample:`Math.ceil(4.1); // 5.0
Math.floor(4.9); // 4.0
Math.round(4.5); // 5`}];function M(){return t.jsxs("div",{className:"space-y-12 px-4 md:px-8 py-8 text-slate-200 bg-slate-900 min-h-screen",children:[t.jsxs("header",{className:"space-y-4 border-b border-slate-800 pb-6",children:[t.jsxs("div",{className:"flex items-center gap-3",children:[t.jsx("span",{className:"px-3 py-1 bg-sky-500/10 text-sky-400 border border-sky-500/20 text-xs font-semibold rounded-full uppercase tracking-wider",children:"Module 003_004 · Topic 1"}),t.jsx("span",{className:"px-3 py-1 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-xs font-semibold rounded-full",children:"Method Catalog"})]}),t.jsxs("h1",{className:"text-xl sm:text-2xl md:text-3xl font-bold text-white tracking-tight",children:["Math Methods: ",t.jsx("code",{className:"text-emerald-400 font-mono",children:"ceil()"}),", ",t.jsx("code",{className:"text-sky-400 font-mono",children:"floor()"}),", ",t.jsx("code",{className:"text-amber-400 font-mono",children:"round()"})," & ",t.jsx("code",{className:"text-purple-400 font-mono",children:"sqrt()"})]}),t.jsxs("p",{className:"text-base md:text-lg text-slate-400 leading-relaxed max-w-4xl",children:["Master the complete mathematical library: directional ceiling/floor bounds, precision exponents with ",t.jsx("code",{className:"text-purple-300 font-mono",children:"pow()"}),", and trigonometric calculations."]})]}),t.jsxs("section",{className:"space-y-4",children:[t.jsxs("h2",{className:"text-2xl font-bold text-emerald-400 flex items-center gap-2",children:[t.jsx("span",{children:"💻"})," Hands-On Java Demo Code"]}),t.jsx(e,{fileModule:r,title:"MathMethodsCatalogDemo.java",highlightLines:[7,14,15,16,17,21,22,27,28]})]}),t.jsx("section",{className:"space-y-4",children:t.jsx(n,{title:"Math Methods FAQs",questions:l})}),t.jsx("section",{className:"space-y-4",children:t.jsx(a,{content:s,title:"Module 003_004 Topic 1: Math Methods",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Printable Note",downloadFileName:"003_004_topic1_math_methods_note.txt"})}),t.jsx(o,{note:"If you are calculating pagination in a web app with 21 items and 10 per page, write '(int) Math.ceil(21.0 / 10)' to get 3 pages! — Sukanta Hui"})]})}export{M as default};
