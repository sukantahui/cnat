import{j as e}from"./vendor-react-core-Doz9nIC6.js";import{J as t}from"./JavaFileLoader-BfBG3xz_.js";import{F as a}from"./FAQTemplate-BHhlgA96.js";import{P as n}from"./PlainTextPrint-C08xhKA4.js";import{T as i}from"./TeacherSukantaHui-DDN87fI5.js";import"./JavaCodeBlock-BwsLxS3r.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-DEsnU7fn.js";const r=`/**\r
 * Java Core Tutorial - Module 003_004: Math, Random, BigInteger & BigDecimal\r
 * Topic 7: java.math.BigDecimal: Arbitrary-Precision Signed Decimals for Enterprise Finance\r
 * Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
 */\r
\r
package com.coderaccotax.javatutorial.math;\r
\r
import java.math.BigDecimal;\r
\r
public class BigDecimalArchitectureOverviewDemo {\r
\r
    public static void main(String[] args) {\r
        System.out.println("==========================================================================");\r
        System.out.println(" TOPIC 7: java.math.BigDecimal ARCHITECTURE - BARRACKPORE");\r
        System.out.println("==========================================================================\\n");\r
\r
        System.out.println(">>> 1. Internal Anatomy of a BigDecimal Object:");\r
        System.out.println("  - An unscaled integer value: BigInteger 'intVal'");\r
        System.out.println("  - A 32-bit integer scale   : int 'scale' (Number of digits to the right of the decimal point)");\r
        System.out.println("  - Formula: value = unscaledValue * 10^(-scale)");\r
\r
        // Example: 123.456\r
        BigDecimal amount = new BigDecimal("123.456");\r
\r
        System.out.println("\\n>>> 2. Inspecting BigDecimal("123.456"):");\r
        System.out.println("  Value              : " + amount);\r
        System.out.println("  Unscaled BigInteger: " + amount.unscaledValue() + " (123456)");\r
        System.out.println("  Scale (Decimals)   : " + amount.scale() + " digits");\r
        System.out.println("  Precision (Digits) : " + amount.precision() + " total significant digits");\r
\r
        // Solving the 0.1 + 0.2 problem with BigDecimal:\r
        BigDecimal b1 = new BigDecimal("0.1");\r
        BigDecimal b2 = new BigDecimal("0.2");\r
        BigDecimal result = b1.add(b2);\r
\r
        System.out.println("\\n>>> 3. Solving the 0.1 + 0.2 problem:");\r
        System.out.println("  0.1 + 0.2 via BigDecimal = " + result + " (100% Mathematically Exact!)");\r
\r
        System.out.println("\\n==========================================================================");\r
    }\r
}`,l=`================================================================================\r
JAVA CORE TUTORIAL - QUICK REVISION GUIDE\r
Module 003_004: Math, Random & Arbitrary Precision\r
Topic 7: BigDecimal Architecture\r
Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
================================================================================\r
\r
1. BIGDECIMAL ANATOMY:\r
   - Unscaled value: 'BigInteger'.\r
   - Scale: 'int' (count of decimal digits).\r
   - Immutable and thread-safe.\r
   - Provides exact mathematical decimal representation.\r
\r
================================================================================\r
Classroom Practice: Barrackpore Academy | Mentor: Sukanta Hui\r
================================================================================`,s=[{question:"How does 'java.math.BigDecimal' represent arbitrary precision decimal numbers internally?",shortAnswer:"'BigDecimal' consists of two main components: an arbitrary-precision integer unscaled value ('BigInteger') and a 32-bit integer 'scale' representing the number of digits to the right of the decimal point (value = unscaledValue * 10^(-scale)).",explanation:"BigDecimal is completely immune to base-2 binary floating point roundoff errors.",hint:"Consists of an unscaled BigInteger value and an integer scale factor.",level:"Intermediate",codeExample:'BigDecimal b = new BigDecimal("123.45"); // unscaled=12345, scale=2'}];function h(){return e.jsxs("div",{className:"space-y-12 px-4 md:px-8 py-8 text-slate-200 bg-slate-900 min-h-screen",children:[e.jsxs("header",{className:"space-y-4 border-b border-slate-800 pb-6",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"px-3 py-1 bg-sky-500/10 text-sky-400 border border-sky-500/20 text-xs font-semibold rounded-full uppercase tracking-wider",children:"Module 003_004 · Topic 7"}),e.jsx("span",{className:"px-3 py-1 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-xs font-semibold rounded-full",children:"Arbitrary Decimal Precision"})]}),e.jsxs("h1",{className:"text-xl sm:text-2xl md:text-3xl font-bold text-white tracking-tight",children:[e.jsx("code",{className:"text-emerald-400 font-mono",children:"java.math.BigDecimal"}),": Arbitrary-Precision Signed Decimals"]}),e.jsxs("p",{className:"text-base md:text-lg text-slate-400 leading-relaxed max-w-4xl",children:["Discover how Java achieves flawless decimal accuracy: examining the internal ",e.jsx("code",{className:"text-indigo-300 font-mono",children:"unscaledValue"})," BigInteger and 32-bit ",e.jsx("code",{className:"text-emerald-300 font-mono",children:"scale"})," mechanics."]})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsxs("h2",{className:"text-2xl font-bold text-emerald-400 flex items-center gap-2",children:[e.jsx("span",{children:"💻"})," Hands-On Java Demo Code"]}),e.jsx(t,{fileModule:r,title:"BigDecimalArchitectureOverviewDemo.java",highlightLines:[7,19,23,24,25,29,30,31]})]}),e.jsx("section",{className:"space-y-4",children:e.jsx(a,{title:"BigDecimal Architecture FAQs",questions:s})}),e.jsx("section",{className:"space-y-4",children:e.jsx(n,{content:l,title:"Module 003_004 Topic 7: BigDecimal Architecture",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Printable Note",downloadFileName:"003_004_topic7_bigdecimal_architecture_note.txt"})}),e.jsx(i,{note:"With BigDecimal, 0.1 + 0.2 gives exactly 0.3 every single time! It is the industry gold standard across Wall Street, banks, and enterprise tax engines. — Sukanta Hui"})]})}export{h as default};
