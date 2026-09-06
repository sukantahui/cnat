import{j as e}from"./vendor-react-core-Doz9nIC6.js";import{J as n}from"./JavaFileLoader-BfBG3xz_.js";import{F as r}from"./FAQTemplate-BHhlgA96.js";import{P as t}from"./PlainTextPrint-C08xhKA4.js";import{T as a}from"./TeacherSukantaHui-DDN87fI5.js";import"./JavaCodeBlock-BwsLxS3r.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-DEsnU7fn.js";const o=`/**\r
 * Java Core Tutorial - Module 003_004: Math, Random, BigInteger & BigDecimal\r
 * Topic 4: Cryptographically Secure Random: java.security.SecureRandom (OTPs, Tokens, Salt)\r
 * Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
 */\r
\r
package com.coderaccotax.javatutorial.math;\r
\r
import java.security.SecureRandom;\r
import java.util.Base64;\r
\r
public class SecureRandomSecurityMasteryDemo {\r
\r
    public static String generateOtp(int length) {\r
        SecureRandom sr = new SecureRandom();\r
        StringBuilder otp = new StringBuilder(length);\r
        for (int i = 0; i < length; i++) {\r
            otp.append(sr.nextInt(10)); // Digits 0-9\r
        }\r
        return otp.toString();\r
    }\r
\r
    public static String generateSecurityToken(int byteLength) {\r
        SecureRandom sr = new SecureRandom();\r
        byte[] salt = new byte[byteLength];\r
        sr.nextBytes(salt); // Fills buffer with OS entropy randomness\r
        return Base64.getUrlEncoder().withoutPadding().encodeToString(salt);\r
    }\r
\r
    public static void main(String[] args) {\r
        System.out.println("==========================================================================");\r
        System.out.println(" TOPIC 4: CRYPTOGRAPHICALLY SECURE RANDOM - BARRACKPORE");\r
        System.out.println("==========================================================================\\n");\r
\r
        System.out.println(">>> 1. Generating 6-Digit Banking OTP for Barrackpore Auth:");\r
        String otp = generateOtp(6);\r
        System.out.println("  Secure 6-Digit OTP: " + otp);\r
\r
        System.out.println("\\n>>> 2. Generating 32-Byte Cryptographic Session Token / Salt:");\r
        String sessionToken = generateSecurityToken(32);\r
        System.out.println("  Session Token (Base64): " + sessionToken);\r
\r
        System.out.println("\\n>>> WHY SecureRandom IS MANDATORY FOR SECURITY:");\r
        System.out.println("  - java.util.Random uses a simple Linear Congruential Formula (predictable after 2 numbers!).");\r
        System.out.println("  - SecureRandom collects OS hardware entropy (/dev/urandom or Windows CryptoAPI).");\r
\r
        System.out.println("\\n==========================================================================");\r
    }\r
}`,s=`================================================================================\r
JAVA CORE TUTORIAL - QUICK REVISION GUIDE\r
Module 003_004: Math, Random & Arbitrary Precision\r
Topic 4: java.security.SecureRandom\r
Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
================================================================================\r
\r
1. SECURE RANDOM RULES:\r
   - 'java.util.Random' → Predictable (Games/Simulations only).\r
   - 'SecureRandom' → Cryptographically secure (OTPs, Tokens, Salt).\r
   - Collects OS entropy (/dev/urandom / CryptoAPI).\r
\r
================================================================================\r
Classroom Practice: Barrackpore Academy | Mentor: Sukanta Hui\r
================================================================================`,i=[{question:"Why must 'java.security.SecureRandom' be used instead of 'java.util.Random' for generating authentication tokens, OTPs, and password salts?",shortAnswer:"'java.util.Random' uses a predictable linear congruential formula with a 48-bit seed. An attacker observing two consecutive random numbers can easily calculate all future numbers. 'SecureRandom' gathers non-deterministic entropy from the operating system, making it cryptographically unpredictable.",explanation:"Mandatory compliance requirement under OWASP and PCI-DSS standards.",hint:"Uses OS hardware entropy to prevent mathematical sequence prediction.",level:"Intermediate",codeExample:"SecureRandom sr = new SecureRandom(); byte[] salt = new byte[16]; sr.nextBytes(salt);"}];function g(){return e.jsxs("div",{className:"space-y-12 px-4 md:px-8 py-8 text-slate-200 bg-slate-900 min-h-screen",children:[e.jsxs("header",{className:"space-y-4 border-b border-slate-800 pb-6",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"px-3 py-1 bg-sky-500/10 text-sky-400 border border-sky-500/20 text-xs font-semibold rounded-full uppercase tracking-wider",children:"Module 003_004 · Topic 4"}),e.jsx("span",{className:"px-3 py-1 bg-rose-500/10 text-rose-400 border border-rose-500/20 text-xs font-semibold rounded-full",children:"Enterprise Security"})]}),e.jsxs("h1",{className:"text-xl sm:text-2xl md:text-3xl font-bold text-white tracking-tight",children:["Cryptographically Secure Random: ",e.jsx("code",{className:"text-emerald-400 font-mono",children:"java.security.SecureRandom"})]}),e.jsx("p",{className:"text-base md:text-lg text-slate-400 leading-relaxed max-w-4xl",children:"Build bulletproof authentication pipelines: generating 6-digit banking OTPs, password hashing salts, and cryptographically unpredictable tokens via OS hardware entropy."})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsxs("h2",{className:"text-2xl font-bold text-emerald-400 flex items-center gap-2",children:[e.jsx("span",{children:"💻"})," Hands-On Java Demo Code"]}),e.jsx(n,{fileModule:o,title:"SecureRandomSecurityMasteryDemo.java",highlightLines:[7,13,14,21,23,31,35]})]}),e.jsx("section",{className:"space-y-4",children:e.jsx(r,{title:"Secure Random FAQs",questions:i})}),e.jsx("section",{className:"space-y-4",children:e.jsx(t,{content:s,title:"Module 003_004 Topic 4: SecureRandom in Java",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Printable Note",downloadFileName:"003_004_topic4_securerandom_note.txt"})}),e.jsx(a,{note:"Never use java.util.Random or Math.random() for login tokens or password reset links! Hackers can predict the next numbers and hijack accounts. Always use SecureRandom! — Sukanta Hui"})]})}export{g as default};
