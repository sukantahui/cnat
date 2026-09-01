import{j as e}from"./vendor-react-core-Doz9nIC6.js";import{J as t}from"./JavaFileLoader-BfBG3xz_.js";import{F as n}from"./FAQTemplate-BHhlgA96.js";import{P as a}from"./PlainTextPrint-C08xhKA4.js";import{T as r}from"./TeacherSukantaHui-BaJcBHAy.js";import"./JavaCodeBlock-BwsLxS3r.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-8ao-0upJ.js";const o=`/**\r
 * Java Core Tutorial - Module 012_005: Interview Mastery & Tricky MCQs\r
 * Topic 3: Tricky Riddle 4 - Floating Point NaN & Signed Zeros\r
 * Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
 */\r
\r
package com.coderaccotax.javatutorial.interview;\r
\r
public class TrickyRiddle4FloatingPointNaNDemo {\r
\r
    public static void main(String[] args) {\r
        System.out.println("==========================================================================");\r
        System.out.println(" TRICKY RIDDLE 4: IEEE 754 NAN & SIGNED ZEROS - BARRACKPORE");\r
        System.out.println("==========================================================================\\n");\r
\r
        double nan = Double.NaN;\r
        System.out.println("1. Double.NaN == Double.NaN               -> " + (nan == nan)); // FALSE!\r
        System.out.println("   Double.isNaN(Double.NaN)               -> " + Double.isNaN(nan)); // TRUE\r
\r
        double posZero = +0.0;\r
        double negZero = -0.0;\r
        System.out.println("\r
2. Primitive -0.0 == +0.0                  -> " + (negZero == posZero)); // TRUE\r
        System.out.println("   Double.valueOf(-0.0).equals(0.0)       -> " + Double.valueOf(negZero).equals(Double.valueOf(posZero))); // FALSE!\r
\r
        System.out.println("\r
3. Division by Zero with Floating Point:");\r
        System.out.println("   1.0 / 0.0                              -> " + (1.0 / 0.0)); // Infinity (No Exception!)\r
        System.out.println("   -1.0 / 0.0                             -> " + (-1.0 / 0.0)); // -Infinity\r
        System.out.println("   0.0 / 0.0                              -> " + (0.0 / 0.0)); // NaN\r
\r
        System.out.println("\\n==========================================================================");\r
    }\r
}\r
`,i=`================================================================================\r
JAVA CORE TUTORIAL - QUICK REVISION GUIDE\r
Module 012_005: Interview Mastery & Tricky MCQs\r
Topic 3: Tricky Riddle 4 - Floating Point NaN & Signed Zeros\r
Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
================================================================================\r
\r
1. IEEE 754 FLOATING POINT SPECIFICATION:\r
   - 'NaN == NaN' is ALWAYS false by IEEE 754 definition.\r
   - Use 'Double.isNaN(val)' to verify NaN.\r
   - Floating point division by zero does NOT throw 'ArithmeticException'; it returns 'Infinity' or 'NaN'.\r
   - 'Double.equals()' distinguishes between '-0.0' and '+0.0' for HashMap consistency.\r
\r
================================================================================\r
Classroom Practice: Barrackpore Academy | Mentor: Sukanta Hui\r
================================================================================\r
`,s=[{question:"Why does Double.NaN == Double.NaN evaluate to false in Java?",shortAnswer:"The IEEE 754 floating-point standard mandates that NaN (Not-a-Number) is not equal to any value, including itself, because NaN represents an undefined or unrepresentable numeric result.",explanation:"Standard IEEE 754 equality rule.",hint:"IEEE 754 specification defines NaN as unequal to any value including itself.",level:"Beginner",codeExample:"Double.isNaN(val); // Correct way to check for NaN"},{question:"Why does primitive -0.0 == +0.0 return true, but Double.valueOf(-0.0).equals(Double.valueOf(0.0)) return false?",shortAnswer:"Primitive == follows IEEE 754 where signed zeros compare as equal; however, Double.equals() complies with Java equals contract and Map hashing, treating different bit layouts (0x8000000000000000L vs 0x0L) as distinct objects.",explanation:"Distinction between IEEE 754 primitive comparison and Object.equals contract.",hint:"Double.equals() compares raw IEEE bit representations for hash consistency.",level:"Advanced",codeExample:"Double.valueOf(-0.0).equals(0.0); // false"}];function x(){return e.jsxs("div",{className:"space-y-12 px-4 md:px-8 py-8 text-slate-200 bg-slate-900 min-h-screen",children:[e.jsxs("header",{className:"space-y-4 border-b border-slate-800 pb-6",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"px-3 py-1 bg-sky-500/10 text-sky-400 border border-sky-500/20 text-xs font-semibold rounded-full uppercase tracking-wider",children:"Module 012_005 · Topic 3"}),e.jsx("span",{className:"px-3 py-1 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-xs font-semibold rounded-full",children:"Interview Mastery & Tricky MCQs"})]}),e.jsxs("h1",{className:"text-xl sm:text-2xl md:text-3xl font-bold text-white tracking-tight",children:["Tricky Riddle 4: ",e.jsx("code",{className:"text-emerald-400 font-mono",children:"Floating Point NaN & Signed Zeros"})]}),e.jsx("p",{className:"text-base md:text-lg text-slate-400 leading-relaxed max-w-4xl",children:"IEEE 754 precision quirks: why Double.NaN == Double.NaN evaluates to false, why -0.0 == +0.0 is true, but Double.valueOf(-0.0).equals(0.0) is false!"})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsxs("h2",{className:"text-2xl font-bold text-emerald-400 flex items-center gap-2",children:[e.jsx("span",{children:"💻"})," Hands-On Java Demo Code"]}),e.jsx(t,{fileModule:o,title:"TrickyRiddle4FloatingPointNaNDemo.java",highlightLines:[18,25,34,43]})]}),e.jsx("section",{className:"space-y-4",children:e.jsx(n,{title:"Interview Riddles & MCQs FAQs",questions:s})}),e.jsx("section",{className:"space-y-4",children:e.jsx(a,{content:i,title:"Module 012_005 Topic 3: Tricky Riddle 4 - Floating Point NaN & Signed Zeros",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Printable Note",downloadFileName:"012_005_topic3_tricky_riddle_4_floating_point_nan_note.txt"})}),e.jsx(r,{note:"This is one of the most famous IEEE 754 traps in Java! Double.NaN is not equal to ANYTHING, not even itself (Double.NaN == Double.NaN is FALSE)! You must always use Double.isNaN() to test for NaN! — Sukanta Hui"})]})}export{x as default};
