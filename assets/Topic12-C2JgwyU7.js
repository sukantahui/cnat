import{j as e}from"./vendor-react-core-Doz9nIC6.js";import{J as t}from"./JavaFileLoader-BfBG3xz_.js";import{F as n}from"./FAQTemplate-CkSqDH4B.js";import{P as r}from"./PlainTextPrint-C08xhKA4.js";import{T as i}from"./TeacherSukantaHui-CyIG3xbg.js";import"./JavaCodeBlock-BwsLxS3r.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-CIaKtAt4.js";const a=`/**\r
 * Java Core Tutorial - Module 003_004: Math, Random, BigInteger & BigDecimal\r
 * Topic 12: java.math.BigInteger: Arbitrary-Precision Integers for Cryptography\r
 * Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
 */\r
\r
package com.coderaccotax.javatutorial.math;\r
\r
import java.math.BigInteger;\r
\r
public class BigIntegerFoundationsDemo {\r
\r
    public static void main(String[] args) {\r
        System.out.println("==========================================================================");\r
        System.out.println(" TOPIC 12: java.math.BigInteger FOUNDATIONS - BARRACKPORE");\r
        System.out.println("==========================================================================\\n");\r
\r
        System.out.println(">>> 1. Exceeding 64-bit Long Maximum Limit (Long.MAX_VALUE = 9,223,372,036,854,775,807):");\r
\r
        // Storing a massive 50-digit number impossible for primitive types:\r
        BigInteger nationalDebt = new BigInteger("98765432109876543210987654321098765432109876543210");\r
        System.out.println("  Massive BigInteger : " + nationalDebt);\r
        System.out.println("  Bit Length         : " + nationalDebt.bitLength() + " bits");\r
\r
        // 2. Exact Factorial of 50 (Massive number calculation):\r
        BigInteger fact = BigInteger.ONE;\r
        for (int i = 2; i <= 50; i++) {\r
            fact = fact.multiply(BigInteger.valueOf(i));\r
        }\r
\r
        System.out.println("\\n>>> 2. Exact Calculation of 50! (Factorial 50):");\r
        System.out.println("  50! = " + fact);\r
\r
        System.out.println("\\n>>> NOTE: BigInteger size is limited ONLY by available JVM Heap RAM!");\r
\r
        System.out.println("\\n==========================================================================");\r
    }\r
}`,o=`================================================================================\r
JAVA CORE TUTORIAL - QUICK REVISION GUIDE\r
Module 003_004: Math, Random & Arbitrary Precision\r
Topic 12: BigInteger Foundations\r
Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
================================================================================\r
\r
1. BIGINTEGER ESSENTIALS:\r
   - Represents integers of arbitrary length.\r
   - Constants: 'BigInteger.ZERO', 'ONE', 'TWO', 'TEN'.\r
   - Immutable and thread-safe.\r
   - Essential for RSA cryptography and prime factorization.\r
\r
================================================================================\r
Classroom Practice: Barrackpore Academy | Mentor: Sukanta Hui\r
================================================================================`,s=[{question:"What is 'java.math.BigInteger' and what is the maximum number of digits it can store?",shortAnswer:"'BigInteger' is an immutable arbitrary-precision integer representation in Java. It is not constrained by 32-bit or 64-bit hardware limits—it can hold integers with millions of digits, limited only by available JVM heap RAM.",explanation:"Powers RSA public-key encryption, blockchain signatures, and astronomical math.",hint:"Arbitrary-precision immutable integer limited only by JVM heap memory.",level:"Beginner",codeExample:'BigInteger huge = new BigInteger("123456789012345678901234567890");'}];function b(){return e.jsxs("div",{className:"space-y-12 px-4 md:px-8 py-8 text-slate-200 bg-slate-900 min-h-screen",children:[e.jsxs("header",{className:"space-y-4 border-b border-slate-800 pb-6",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"px-3 py-1 bg-sky-500/10 text-sky-400 border border-sky-500/20 text-xs font-semibold rounded-full uppercase tracking-wider",children:"Module 003_004 · Topic 12"}),e.jsx("span",{className:"px-3 py-1 bg-indigo-500/10 text-indigo-400 border border-indigo-500/20 text-xs font-semibold rounded-full",children:"Infinite Integer Precision"})]}),e.jsxs("h1",{className:"text-3xl md:text-4xl font-extrabold text-white tracking-tight",children:[e.jsx("code",{className:"text-indigo-400 font-mono",children:"java.math.BigInteger"}),": Arbitrary-Precision Integers for Cryptography"]}),e.jsxs("p",{className:"text-base md:text-lg text-slate-400 leading-relaxed max-w-4xl",children:["Break free from 64-bit ",e.jsx("code",{className:"text-amber-400 font-mono",children:"long"})," boundaries: computing exact 50-digit factorials and understanding infinite integer memory structures in RAM."]})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsxs("h2",{className:"text-2xl font-bold text-emerald-400 flex items-center gap-2",children:[e.jsx("span",{children:"💻"})," Hands-On Java Demo Code"]}),e.jsx(t,{fileModule:a,title:"BigIntegerFoundationsDemo.java",highlightLines:[7,17,18,22,23,24]})]}),e.jsx("section",{className:"space-y-4",children:e.jsx(n,{title:"BigInteger FAQs",questions:s})}),e.jsx("section",{className:"space-y-4",children:e.jsx(r,{content:o,title:"Module 003_004 Topic 12: BigInteger Foundations",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Printable Note",downloadFileName:"003_004_topic12_biginteger_foundations_note.txt"})}),e.jsx(i,{note:"If you need to calculate 100! (factorial of 100) in Java, long overflows at 21!. BigInteger handles 10,000! effortlessly in milliseconds! — Sukanta Hui"})]})}export{b as default};
