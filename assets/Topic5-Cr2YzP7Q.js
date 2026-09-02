import{j as e}from"./vendor-react-core-Doz9nIC6.js";import{J as n}from"./JavaFileLoader-BfBG3xz_.js";import{F as t}from"./FAQTemplate-BHhlgA96.js";import{P as a}from"./PlainTextPrint-C08xhKA4.js";import{T as r}from"./TeacherSukantaHui-RpFLNJ5A.js";import"./JavaCodeBlock-BwsLxS3r.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-wprqVFW_.js";const i=`/**\r
 * Java Core Tutorial - Module 003_004: Math, Random, BigInteger & BigDecimal\r
 * Topic 5: The IEEE 754 Floating-Point Precision Dilemma (Why 0.1 + 0.2 = 0.30000000000000004)\r
 * Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
 */\r
\r
package com.coderaccotax.javatutorial.math;\r
\r
public class IeeeFloatingPointDilemmaDemo {\r
\r
    public static void main(String[] args) {\r
        System.out.println("==========================================================================");\r
        System.out.println(" TOPIC 5: THE IEEE 754 PRECISION DILEMMA - BARRACKPORE");\r
        System.out.println("==========================================================================\\n");\r
\r
        double a = 0.1;\r
        double b = 0.2;\r
        double sum = a + b;\r
\r
        System.out.println(">>> 1. Adding 0.1 + 0.2 in standard 64-bit IEEE 754 double precision:");\r
        System.out.println("  Expected Math Result : 0.3");\r
        System.out.println("  Actual Java Output   : " + sum);\r
        System.out.println("  Is (0.1 + 0.2 == 0.3)? " + (sum == 0.3) + " (FALSE!)");\r
\r
        System.out.println("\\n>>> 2. Why Does This Happen?");\r
        System.out.println("  - Computers store numbers in Base 2 (Binary 0 and 1).");\r
        System.out.println("  - Just like 1/3 cannot be represented finitely in Base 10 (0.333333...),");\r
        System.out.println("    0.1 (1/10) and 0.2 (1/5) have INFINITELY REPEATING binary expansions in Base 2!");\r
        System.out.println("  - IEEE 754 truncates the binary stream at 53 mantissa bits, introducing roundoff error.");\r
\r
        System.out.println("\\n==========================================================================");\r
    }\r
}`,s=`================================================================================\r
JAVA CORE TUTORIAL - QUICK REVISION GUIDE\r
Module 003_004: Math, Random & Arbitrary Precision\r
Topic 5: IEEE 754 Floating-Point Dilemma\r
Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
================================================================================\r
\r
1. IEEE 754 ESSENTIALS:\r
   - 0.1 and 0.2 are repeating fractions in base-2 binary.\r
   - '0.1 + 0.2 == 0.3' evaluates to 'false'.\r
   - Produces '0.30000000000000004'.\r
   - Solution: Use 'BigDecimal' for exact decimal arithmetic!\r
\r
================================================================================\r
Classroom Practice: Barrackpore Academy | Mentor: Sukanta Hui\r
================================================================================`,o=[{question:"Why does '0.1 + 0.2 == 0.3' evaluate to 'false' and print '0.30000000000000004' in Java?",shortAnswer:"Because computers use base-2 binary representation (IEEE 754 standard). Numbers like 0.1 and 0.2 cannot be represented as exact finite fractions in binary (similar to 1/3 in base-10) and produce infinitely repeating binary fractions that are truncated after 53 mantissa bits.",explanation:"This fundamental limitation affects all programming languages implementing IEEE 754.",hint:"Base-2 binary representation cannot store 0.1 or 0.2 as finite binary fractions.",level:"Intermediate",codeExample:"double d = 0.1 + 0.2; // Evaluates to 0.30000000000000004"}];function b(){return e.jsxs("div",{className:"space-y-12 px-4 md:px-8 py-8 text-slate-200 bg-slate-900 min-h-screen",children:[e.jsxs("header",{className:"space-y-4 border-b border-slate-800 pb-6",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"px-3 py-1 bg-sky-500/10 text-sky-400 border border-sky-500/20 text-xs font-semibold rounded-full uppercase tracking-wider",children:"Module 003_004 · Topic 5"}),e.jsx("span",{className:"px-3 py-1 bg-amber-500/10 text-amber-400 border border-amber-500/20 text-xs font-semibold rounded-full",children:"Binary Hardware Dilemma"})]}),e.jsxs("h1",{className:"text-xl sm:text-2xl md:text-3xl font-bold text-white tracking-tight",children:["The IEEE 754 Floating-Point Dilemma: Why ",e.jsx("code",{className:"text-rose-400 font-mono",children:"0.1 + 0.2 == 0.30000000000000004"})]}),e.jsx("p",{className:"text-base md:text-lg text-slate-400 leading-relaxed max-w-4xl",children:"Trace base-2 binary floating-point representation: understanding why 0.1 creates an infinite repeating binary sequence and why IEEE 754 hardware causes roundoff truncation."})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsxs("h2",{className:"text-2xl font-bold text-emerald-400 flex items-center gap-2",children:[e.jsx("span",{children:"💻"})," Hands-On Java Demo Code"]}),e.jsx(n,{fileModule:i,title:"IeeeFloatingPointDilemmaDemo.java",highlightLines:[7,13,14,15,18,19,20]})]}),e.jsx("section",{className:"space-y-4",children:e.jsx(t,{title:"IEEE 754 FAQs",questions:o})}),e.jsx("section",{className:"space-y-4",children:e.jsx(a,{content:s,title:"Module 003_004 Topic 5: IEEE 754 Dilemma",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Printable Note",downloadFileName:"003_004_topic5_ieee754_dilemma_note.txt"})}),e.jsx(r,{note:"Just like 1/3 in decimal is 0.33333..., 1/10 in binary is 0.0001100110011... infinitely! The computer has to chop it off somewhere, which causes tiny fractions of a cent to disappear or appear! — Sukanta Hui"})]})}export{b as default};
