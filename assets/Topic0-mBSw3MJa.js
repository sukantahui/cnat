import{j as t}from"./vendor-react-core-Doz9nIC6.js";import{J as a}from"./JavaFileLoader-BfBG3xz_.js";import{F as e}from"./FAQTemplate-BHhlgA96.js";import{P as n}from"./PlainTextPrint-C08xhKA4.js";import{T as r}from"./TeacherSukantaHui-CEPuAfsb.js";import"./JavaCodeBlock-BwsLxS3r.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-DGCamHnX.js";const s=`/**\r
 * Java Core Tutorial - Module 003_004: Math, Random, BigInteger & BigDecimal\r
 * Topic 0: The java.lang.Math Utility Class: Constants (PI, E) & Pure Static Architecture\r
 * Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
 */\r
\r
package com.coderaccotax.javatutorial.math;\r
\r
public class MathClassOverviewDemo {\r
\r
    public static void main(String[] args) {\r
        System.out.println("==========================================================================");\r
        System.out.println(" TOPIC 0: java.lang.Math ARCHITECTURE - BARRACKPORE");\r
        System.out.println("==========================================================================\\n");\r
\r
        System.out.println(">>> 1. Architecture of java.lang.Math:");\r
        System.out.println("  - Marked 'public final class Math' (Cannot be extended).");\r
        System.out.println("  - Private constructor 'private Math() {}' (Cannot be instantiated with 'new').");\r
        System.out.println("  - 100% of methods and constants are static!");\r
\r
        System.out.println("\\n>>> 2. Fundamental Mathematical Constants:");\r
        System.out.println("  Math.PI : " + Math.PI + " (Ratio of circumference to diameter)");\r
        System.out.println("  Math.E  : " + Math.E + " (Euler's number base of natural logs)");\r
\r
        // Calculating circle area:\r
        double radius = 7.0; // In meters\r
        double area = Math.PI * radius * radius;\r
        System.out.printf("\\n>>> 3. Circle Area (r=%.1f m) = %.4f sq.m%n", radius, area);\r
\r
        System.out.println("\\n==========================================================================");\r
    }\r
}`,i=`================================================================================\r
JAVA CORE TUTORIAL - QUICK REVISION GUIDE\r
Module 003_004: Math, Random & Arbitrary Precision\r
Topic 0: java.lang.Math Overview\r
Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
================================================================================\r
\r
1. MATH CLASS DESIGN:\r
   - 'public final class Math'.\r
   - Private constructor (no instantiation).\r
   - Constants: 'Math.PI' (3.14159...), 'Math.E' (2.71828...).\r
   - All methods are 'static'.\r
\r
================================================================================\r
Classroom Practice: Barrackpore Academy | Mentor: Sukanta Hui\r
================================================================================`,o=[{question:"Why does 'java.lang.Math' have a private constructor and why can it not be instantiated?",shortAnswer:"'java.lang.Math' is a utility class containing only static constants (PI, E) and static methods. Having a private constructor prevents accidental instantiation ('new Math()'), and being declared 'final' prevents subclassing.",explanation:"Standard design pattern for pure utility helper classes.",hint:"Pure static utility class; private constructor prevents instantiation.",level:"Beginner",codeExample:"double circle = Math.PI * Math.pow(radius, 2);"}];function g(){return t.jsxs("div",{className:"space-y-12 px-4 md:px-8 py-8 text-slate-200 bg-slate-900 min-h-screen",children:[t.jsxs("header",{className:"space-y-4 border-b border-slate-800 pb-6",children:[t.jsxs("div",{className:"flex items-center gap-3",children:[t.jsx("span",{className:"px-3 py-1 bg-sky-500/10 text-sky-400 border border-sky-500/20 text-xs font-semibold rounded-full uppercase tracking-wider",children:"Module 003_004 · Topic 0"}),t.jsx("span",{className:"px-3 py-1 bg-indigo-500/10 text-indigo-400 border border-indigo-500/20 text-xs font-semibold rounded-full",children:"Scientific Math Engine"})]}),t.jsxs("h1",{className:"text-xl sm:text-2xl md:text-3xl font-bold text-white tracking-tight",children:["The ",t.jsx("code",{className:"text-indigo-400 font-mono",children:"java.lang.Math"})," Utility Class: Constants & Static Architecture"]}),t.jsxs("p",{className:"text-base md:text-lg text-slate-400 leading-relaxed max-w-4xl",children:["Explore Java's core mathematical utility engine: private constructor design patterns, static constant precision (",t.jsx("code",{className:"text-emerald-400 font-mono",children:"Math.PI"}),", ",t.jsx("code",{className:"text-emerald-400 font-mono",children:"Math.E"}),"), and scientific calculations."]})]}),t.jsxs("section",{className:"space-y-4",children:[t.jsxs("h2",{className:"text-2xl font-bold text-emerald-400 flex items-center gap-2",children:[t.jsx("span",{children:"💻"})," Hands-On Java Demo Code"]}),t.jsx(a,{fileModule:s,title:"MathClassOverviewDemo.java",highlightLines:[7,13,14,15,19,20,24]})]}),t.jsx("section",{className:"space-y-4",children:t.jsx(e,{title:"Math Architecture FAQs",questions:o})}),t.jsx("section",{className:"space-y-4",children:t.jsx(n,{content:i,title:"Module 003_004 Topic 0: java.lang.Math Overview",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Printable Note",downloadFileName:"003_004_topic0_math_overview_note.txt"})}),t.jsx(r,{note:"Math is in the 'java.lang' package, so you NEVER need an import statement to use Math.PI or Math.sqrt()! — Sukanta Hui"})]})}export{g as default};
