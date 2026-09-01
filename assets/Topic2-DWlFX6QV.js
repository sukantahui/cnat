import{j as t}from"./vendor-react-core-Doz9nIC6.js";import{J as e}from"./JavaFileLoader-BfBG3xz_.js";import{F as a}from"./FAQTemplate-BHhlgA96.js";import{P as n}from"./PlainTextPrint-C08xhKA4.js";import{T as r}from"./TeacherSukantaHui-BaJcBHAy.js";import"./JavaCodeBlock-BwsLxS3r.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-8ao-0upJ.js";const i=`/**\r
 * Java Core Tutorial - Module 003_004: Math, Random, BigInteger & BigDecimal\r
 * Topic 2: Exact Arithmetic with Overflow Detection: Math.addExact(), multiplyExact() (Java 8+)\r
 * Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
 */\r
\r
package com.coderaccotax.javatutorial.math;\r
\r
public class ExactArithmeticOverflowDetectionDemo {\r
\r
    public static void main(String[] args) {\r
        System.out.println("==========================================================================");\r
        System.out.println(" TOPIC 2: EXACT ARITHMETIC OVERFLOW DETECTION - BARRACKPORE");\r
        System.out.println("==========================================================================\\n");\r
\r
        int max = Integer.MAX_VALUE; // 2,147,483,647\r
\r
        // 1. STANDARD JAVA ARITHMETIC (SILENT WRAPAROUND DISASTER):\r
        int silentOverflow = max + 1;\r
        System.out.println(">>> 1. Standard Arithmetic with '+':");\r
        System.out.println("  Integer.MAX_VALUE + 1 = " + silentOverflow + " (SILENT WRAPAROUND TO NEGATIVE!)");\r
\r
        // 2. JAVA 8+ EXACT ARITHMETIC (Throws ArithmeticException on Overflow):\r
        System.out.println("\\n>>> 2. Java 8+ Math.addExact():");\r
        try {\r
            int safeResult = Math.addExact(max, 1);\r
            System.out.println("  Result: " + safeResult);\r
        } catch (ArithmeticException e) {\r
            System.out.println("  [PROTECTION DETECTED] ArithmeticException: " + e.getMessage());\r
            System.out.println("  Explanation: Math.addExact prevented silent financial corruption!");\r
        }\r
\r
        System.out.println("\\n>>> 3. Other Java 8+ Exact Arithmetic Methods:");\r
        System.out.println("  - Math.subtractExact(a, b)");\r
        System.out.println("  - Math.multiplyExact(a, b)");\r
        System.out.println("  - Math.incrementExact(a)");\r
        System.out.println("  - Math.decrementExact(a)");\r
        System.out.println("  - Math.negateExact(a)");\r
        System.out.println("  - Math.toIntExact(longVal) (Safely converts long to int or throws)");\r
\r
        System.out.println("\\n==========================================================================");\r
    }\r
}`,o=`================================================================================\r
JAVA CORE TUTORIAL - QUICK REVISION GUIDE\r
Module 003_004: Math, Random & Arbitrary Precision\r
Topic 2: Exact Arithmetic (Java 8+)\r
Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
================================================================================\r
\r
1. EXACT ARITHMETIC RULES:\r
   - 'Math.addExact(x, y)'       → Throws ArithmeticException on overflow.\r
   - 'Math.multiplyExact(x, y)'  → Throws ArithmeticException on overflow.\r
   - 'Math.toIntExact(longVal)'  → Safe downcast from long to int.\r
\r
================================================================================\r
Classroom Practice: Barrackpore Academy | Mentor: Sukanta Hui\r
================================================================================`,c=[{question:"Why were exact arithmetic methods like 'Math.addExact()' and 'Math.multiplyExact()' introduced in Java 8?",shortAnswer:"Standard primitive arithmetic (+, *, -) overflows silently by wrapping around (e.g. Integer.MAX_VALUE + 1 becomes negative) without throwing errors. Java 8 exact methods actively detect overflow and throw 'ArithmeticException', preventing silent financial calculation corruption.",explanation:"Use Math.toIntExact(long) to safely cast longs to ints without data loss.",hint:"Prevents silent integer wraparound overflow by throwing ArithmeticException.",level:"Intermediate",codeExample:"int result = Math.addExact(Integer.MAX_VALUE, 1); // Throws ArithmeticException"}];function E(){return t.jsxs("div",{className:"space-y-12 px-4 md:px-8 py-8 text-slate-200 bg-slate-900 min-h-screen",children:[t.jsxs("header",{className:"space-y-4 border-b border-slate-800 pb-6",children:[t.jsxs("div",{className:"flex items-center gap-3",children:[t.jsx("span",{className:"px-3 py-1 bg-sky-500/10 text-sky-400 border border-sky-500/20 text-xs font-semibold rounded-full uppercase tracking-wider",children:"Module 003_004 · Topic 2"}),t.jsx("span",{className:"px-3 py-1 bg-rose-500/10 text-rose-400 border border-rose-500/20 text-xs font-semibold rounded-full",children:"Overflow Protection"})]}),t.jsxs("h1",{className:"text-xl sm:text-2xl md:text-3xl font-bold text-white tracking-tight",children:["Exact Arithmetic with Overflow Detection: ",t.jsx("code",{className:"text-emerald-400 font-mono",children:"Math.addExact()"})," & ",t.jsx("code",{className:"text-emerald-400 font-mono",children:"multiplyExact()"})]}),t.jsxs("p",{className:"text-base md:text-lg text-slate-400 leading-relaxed max-w-4xl",children:["Prevent silent integer wraparounds: exploring Java 8 exact arithmetic methods that catch integer overflows and safely downcast with ",t.jsx("code",{className:"text-emerald-300 font-mono",children:"Math.toIntExact()"}),"."]})]}),t.jsxs("section",{className:"space-y-4",children:[t.jsxs("h2",{className:"text-2xl font-bold text-emerald-400 flex items-center gap-2",children:[t.jsx("span",{children:"💻"})," Hands-On Java Demo Code"]}),t.jsx(e,{fileModule:i,title:"ExactArithmeticOverflowDetectionDemo.java",highlightLines:[7,14,15,20,21,28,33]})]}),t.jsx("section",{className:"space-y-4",children:t.jsx(a,{title:"Exact Arithmetic FAQs",questions:c})}),t.jsx("section",{className:"space-y-4",children:t.jsx(n,{content:o,title:"Module 003_004 Topic 2: Exact Arithmetic",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Printable Note",downloadFileName:"003_004_topic2_exact_arithmetic_note.txt"})}),t.jsx(r,{note:"Silent overflow has caused spacecraft failures and financial loss! Always use Math.addExact() or Math.multiplyExact() when calculating critical account balances. — Sukanta Hui"})]})}export{E as default};
