import{j as e}from"./vendor-react-core-Doz9nIC6.js";import{J as n}from"./JavaFileLoader-BfBG3xz_.js";import{F as t}from"./FAQTemplate-BHhlgA96.js";import{P as r}from"./PlainTextPrint-C08xhKA4.js";import{T as o}from"./TeacherSukantaHui-BaJcBHAy.js";import"./JavaCodeBlock-BwsLxS3r.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-8ao-0upJ.js";const a=`/**\r
 * Java Core Tutorial - Module 003_004: Math, Random, BigInteger & BigDecimal\r
 * Topic 13: BigInteger Cryptographic Operations: modPow, isProbablePrime, gcd (Capstone)\r
 * Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
 */\r
\r
package com.coderaccotax.javatutorial.math;\r
\r
import java.math.BigInteger;\r
import java.security.SecureRandom;\r
\r
public class BigIntegerCryptoAndGcdCapstoneDemo {\r
\r
    public static void main(String[] args) {\r
        System.out.println("==========================================================================");\r
        System.out.println(" TOPIC 13: BigInteger CRYPTO & MATH OPERATIONS CAPSTONE - BARRACKPORE");\r
        System.out.println("==========================================================================\\n");\r
\r
        // 1. Greatest Common Divisor (GCD / HCF):\r
        BigInteger num1 = new BigInteger("1071");\r
        BigInteger num2 = new BigInteger("462");\r
        BigInteger gcd = num1.gcd(num2);\r
        System.out.println(">>> 1. Euclidean GCD (1071, 462) = " + gcd + " (HCF)");\r
\r
        // 2. Generating Cryptographic 512-bit Probable Prime for RSA Keys:\r
        SecureRandom sr = new SecureRandom();\r
        BigInteger primeCandidate = BigInteger.probablePrime(512, sr);\r
        System.out.println("\\n>>> 2. Generated 512-bit RSA Probable Prime:");\r
        System.out.println("  Prime: " + primeCandidate);\r
        System.out.println("  isProbablePrime(100 certainty)? " + primeCandidate.isProbablePrime(100));\r
\r
        // 3. Modular Exponentiation: (base^exponent) mod modulus (Core of RSA Encryption):\r
        BigInteger base = new BigInteger("65");\r
        BigInteger exp = new BigInteger("17");\r
        BigInteger mod = new BigInteger("3233");\r
        BigInteger cipher = base.modPow(exp, mod);\r
\r
        System.out.println("\\n>>> 3. Modular Exponentiation: modPow(65^17 mod 3233):");\r
        System.out.println("  Cipher Output: " + cipher + " (Calculated via fast Montgomery squaring)");\r
\r
        System.out.println("\\n==========================================================================");\r
        System.out.println(" MODULE 003_004 MATH, RANDOM & BIGDECIMAL 100% COMPLETE!");\r
        System.out.println("==========================================================================");\r
    }\r
}`,i=`================================================================================\r
JAVA CORE TUTORIAL - QUICK REVISION GUIDE\r
Module 003_004: Math, Random & Arbitrary Precision\r
Topic 13: BigInteger Crypto & GCD Capstone\r
Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
================================================================================\r
\r
1. MODULE 003_004 SUMMARY:\r
   - 'java.lang.Math' provides static constants and exact overflow math.\r
   - 'SecureRandom' is mandatory for tokens and OTPs.\r
   - IEEE 754 float/double fails for money; NEVER use for finance.\r
   - 'BigDecimal' provides exact monetary precision (use String constructor).\r
   - Use 'compareTo() == 0' instead of 'equals()' for BigDecimal values.\r
   - 'BigInteger' powers RSA cryptography with 'modPow()', 'gcd()', and 'probablePrime()'.\r
\r
================================================================================\r
Classroom Practice: Barrackpore Academy | Mentor: Sukanta Hui\r
================================================================================`,s=[{question:"How does 'BigInteger.modPow(exp, m)' optimize massive modular exponentiations for RSA cryptography?",shortAnswer:"Instead of computing the gigantic 'base^exp' number first (which would consume petabytes of RAM) and then applying modulo, 'modPow()' performs intermediate modulo reductions on every step using the Fast Modular Squaring Algorithm (Montgomery Reduction).",explanation:"Essential foundation for RSA encryption and Diffie-Hellman key exchanges.",hint:"Applies modulo at every intermediate multiplication step to prevent memory explosion.",level:"Advanced",codeExample:"BigInteger cipher = msg.modPow(publicKey, modulus);"}];function y(){return e.jsxs("div",{className:"space-y-12 px-4 md:px-8 py-8 text-slate-200 bg-slate-900 min-h-screen",children:[e.jsxs("header",{className:"space-y-4 border-b border-slate-800 pb-6",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"px-3 py-1 bg-sky-500/10 text-sky-400 border border-sky-500/20 text-xs font-semibold rounded-full uppercase tracking-wider",children:"Module 003_004 · Topic 13"}),e.jsx("span",{className:"px-3 py-1 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-xs font-semibold rounded-full",children:"Cryptography Capstone"})]}),e.jsxs("h1",{className:"text-xl sm:text-2xl md:text-3xl font-bold text-white tracking-tight",children:[e.jsx("code",{className:"text-emerald-400 font-mono",children:"BigInteger"})," Operations: ",e.jsx("code",{className:"text-emerald-400 font-mono",children:"gcd()"}),", ",e.jsx("code",{className:"text-purple-400 font-mono",children:"modPow()"})," & ",e.jsx("code",{className:"text-sky-400 font-mono",children:"probablePrime()"})]}),e.jsxs("p",{className:"text-base md:text-lg text-slate-400 leading-relaxed max-w-4xl",children:["Build advanced cryptographic pipelines: generating 512-bit RSA prime candidates, calculating greatest common divisors, and executing modular exponentiation with ",e.jsx("code",{className:"text-purple-300 font-mono",children:"modPow()"}),"."]})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsxs("h2",{className:"text-2xl font-bold text-emerald-400 flex items-center gap-2",children:[e.jsx("span",{children:"💻"})," Hands-On Java Demo Code"]}),e.jsx(n,{fileModule:a,title:"BigIntegerCryptoAndGcdCapstoneDemo.java",highlightLines:[7,16,17,18,23,24,30,31,32,33]})]}),e.jsx("section",{className:"space-y-4",children:e.jsx(t,{title:"Crypto Math FAQs",questions:s})}),e.jsx("section",{className:"space-y-4",children:e.jsx(r,{content:i,title:"Module 003_004 Topic 13: BigInteger Crypto Capstone",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Printable Note",downloadFileName:"003_004_topic13_crypto_capstone_note.txt"})}),e.jsx(o,{note:"Congratulations on completing Module 003_004! You have mastered java.lang.Math, SecureRandom, IEEE 754 precision dilemmas, enterprise BigDecimal financial accounting, and cryptographic BigInteger operations! — Sukanta Hui"})]})}export{y as default};
