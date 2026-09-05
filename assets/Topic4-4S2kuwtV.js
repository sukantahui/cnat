import{j as e}from"./vendor-react-core-Doz9nIC6.js";import{J as r}from"./JavaFileLoader-BfBG3xz_.js";import{F as t}from"./FAQTemplate-BHhlgA96.js";import{P as n}from"./PlainTextPrint-C08xhKA4.js";import{T as a}from"./TeacherSukantaHui-DerPxfxp.js";import"./JavaCodeBlock-BwsLxS3r.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-CH1iX9C8.js";const i=`/**\r
 * Java Core Tutorial - Module 010_003: JVM Architecture, ClassLoaders & Bytecode Execution\r
 * Topic 4: Linking Step 1 - Verification & Bytecode Verifier\r
 * Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
 */\r
\r
package com.coderaccotax.javatutorial.jvm;\r
\r
public class LinkingVerificationDemo {\r
\r
    public static void main(String[] args) {\r
        System.out.println("==========================================================================");\r
        System.out.println(" TOPIC 4: LINKING STEP 1 - VERIFICATION - BARRACKPORE ACADEMY");\r
        System.out.println("==========================================================================\\n");\r
\r
        System.out.println(">>> THE 4 PASSES OF BYTECODE VERIFICATION:");\r
        System.out.println("  Pass 1 (File Format Check): Validates 0xCAFEBABE magic number, major/minor versions.");\r
        System.out.println("  Pass 2 (Semantic Analysis): Checks final class restrictions, superclass validity.");\r
        System.out.println("  Pass 3 (Bytecode Verification): Data-flow analysis, stack map frame checks, operand types.");\r
        System.out.println("  Pass 4 (Symbolic Reference Check): Verifies target methods/fields exist during resolution.\\n");\r
\r
        System.out.println(">>> VERIFICATION FAILURE EXCEPTION:");\r
        System.out.println("  - If bytecode tampering or corruption is detected, JVM throws: 'java.lang.VerifyError'.");\r
        System.out.println("  - Disabling verification in production is strongly discouraged ('-Xverify:none').");\r
        System.out.println("==========================================================================");\r
    }\r
}\r
`,o=`================================================================================\r
JAVA CORE TUTORIAL - QUICK REVISION GUIDE\r
Module 010_003: JVM Architecture, ClassLoaders & Bytecode Execution\r
Topic 4: Linking Step 1 (Verification)\r
Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
================================================================================\r
\r
1. WHAT VERIFICATION GUARANTEES:\r
   - Variable values are never accessed without prior initialization.\r
   - Method calls adhere to access control modifiers (public/private/protected).\r
   - Parameters match expected method argument types.\r
   - Operand stack depth never overflows or underflows during execution.\r
   - Bytecode instructions have valid opcode branch targets.\r
\r
2. VERIFICATION ERROR:\r
   - 'java.lang.VerifyError' (subclass of 'LinkageError').\r
\r
================================================================================\r
Classroom Practice: Barrackpore Academy | Mentor: Sukanta Hui\r
================================================================================\r
`,s=[{question:"What exception is thrown by the JVM if a .class file contains corrupted or tampered bytecode?",shortAnswer:"java.lang.VerifyError, an unchecked LinkageError indicating that the bytecode violates JVM semantic or structural constraints.",explanation:"Protects the runtime from malicious code execution.",hint:"java.lang.VerifyError",level:"Beginner",codeExample:"throws java.lang.VerifyError"},{question:"Can bytecode verification be disabled via JVM command-line flags?",shortAnswer:"Historically, -Xverify:none or -noverify could disable verification, but this option has been deprecated in modern JDKs (Java 13+) due to severe security vulnerabilities.",explanation:"Modern JDKs enforce verification by default.",hint:"-noverify (deprecated in modern Java).",level:"Intermediate",codeExample:"Deprecated flag: -noverify"}];function y(){return e.jsxs("div",{className:"space-y-12 px-4 md:px-8 py-8 text-slate-200 bg-slate-900 min-h-screen",children:[e.jsxs("header",{className:"space-y-4 border-b border-slate-800 pb-6",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"px-3 py-1 bg-sky-500/10 text-sky-400 border border-sky-500/20 text-xs font-semibold rounded-full uppercase tracking-wider",children:"Module 010_003 · Topic 4"}),e.jsx("span",{className:"px-3 py-1 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-xs font-semibold rounded-full",children:"JVM & ClassLoaders"})]}),e.jsxs("h1",{className:"text-xl sm:text-2xl md:text-3xl font-bold text-white tracking-tight",children:["Linking Step 1: ",e.jsx("code",{className:"text-emerald-400 font-mono",children:"Verification & Bytecode Security"})]}),e.jsx("p",{className:"text-base md:text-lg text-slate-400 leading-relaxed max-w-4xl",children:"Ensuring structural correctness: format checks, semantic constraints, operand stack bounds, and the VerifyError exception."})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsxs("h2",{className:"text-2xl font-bold text-emerald-400 flex items-center gap-2",children:[e.jsx("span",{children:"💻"})," Hands-On Java Demo Code"]}),e.jsx(r,{fileModule:i,title:"LinkingVerificationDemo.java",highlightLines:[18,25,34,43]})]}),e.jsx("section",{className:"space-y-4",children:e.jsx(t,{title:"JVM Architecture & ClassLoaders FAQs",questions:s})}),e.jsx("section",{className:"space-y-4",children:e.jsx(n,{content:o,title:"Module 010_003 Topic 4: Linking: Verification",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Printable Note",downloadFileName:"010_003_topic4_linking_verification_note.txt"})}),e.jsx(a,{note:"The Bytecode Verifier is Java's digital bodyguard! It scans the bytecode instructions before execution to make sure there are no illegal memory jumps, no stack overflows, and no type violations! If corrupt, it throws java.lang.VerifyError! — Sukanta Hui"})]})}export{y as default};
