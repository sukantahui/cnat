import{j as e}from"./vendor-react-core-Doz9nIC6.js";import{J as t}from"./JavaFileLoader-BfBG3xz_.js";import{F as n}from"./FAQTemplate-CkSqDH4B.js";import{P as i}from"./PlainTextPrint-C08xhKA4.js";import{T as a}from"./TeacherSukantaHui-CC0AKmkm.js";import"./JavaCodeBlock-BwsLxS3r.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-BtJHuk7w.js";const r=`/**\r
 * Java Core Tutorial - Module 003_004: Math, Random, BigInteger & BigDecimal\r
 * Topic 8: BigDecimal Instantiation: String Constructor vs why new BigDecimal(double) is Fatal\r
 * Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
 */\r
\r
package com.coderaccotax.javatutorial.math;\r
\r
import java.math.BigDecimal;\r
\r
public class BigDecimalInstantiationPitfallDemo {\r
\r
    public static void main(String[] args) {\r
        System.out.println("==========================================================================");\r
        System.out.println(" TOPIC 8: BigDecimal INSTANTIATION PITFALL - BARRACKPORE");\r
        System.out.println("==========================================================================\\n");\r
\r
        // 1. FATAL BAD PRACTICE: Using double constructor:\r
        BigDecimal fatal = new BigDecimal(0.1);\r
        System.out.println(">>> 1. FATAL TRAP: new BigDecimal(0.1) using double constructor:");\r
        System.out.println("  Result: " + fatal);\r
        System.out.println("  Explanation: 0.1 was ALREADY corrupted by IEEE 754 before reaching BigDecimal!");\r
\r
        // 2. BEST PRACTICE 1: Using String constructor:\r
        BigDecimal exact1 = new BigDecimal("0.1");\r
        System.out.println("\\n>>> 2. BEST PRACTICE 1: new BigDecimal("0.1") using String constructor:");\r
        System.out.println("  Result: " + exact1 + " (100% Exact!)");\r
\r
        // 3. BEST PRACTICE 2: Using BigDecimal.valueOf(double):\r
        // valueOf(double) converts double to String using Double.toString(d) internally!\r
        BigDecimal exact2 = BigDecimal.valueOf(0.1);\r
        System.out.println("\\n>>> 3. BEST PRACTICE 2: BigDecimal.valueOf(0.1):");\r
        System.out.println("  Result: " + exact2 + " (Uses Double.toString() under the hood!)");\r
\r
        System.out.println("\\n>>> GOLDEN RULE: ALWAYS use 'new BigDecimal("string")' or 'BigDecimal.valueOf(double)'!");\r
\r
        System.out.println("\\n==========================================================================");\r
    }\r
}`,o=`================================================================================\r
JAVA CORE TUTORIAL - QUICK REVISION GUIDE\r
Module 003_004: Math, Random & Arbitrary Precision\r
Topic 8: BigDecimal Instantiation Pitfall\r
Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
================================================================================\r
\r
1. INSTANTIATION RULES:\r
   - FORBIDDEN : 'new BigDecimal(0.1)' &rarr; Imprecise double input.\r
   - PREFERRED : 'new BigDecimal("0.1")' &rarr; Pristine string input.\r
   - ACCEPTABLE: 'BigDecimal.valueOf(0.1)' &rarr; Uses Double.toString().\r
\r
================================================================================\r
Classroom Practice: Barrackpore Academy | Mentor: Sukanta Hui\r
================================================================================`,s=[{question:"Why should you NEVER use 'new BigDecimal(0.1)' with a double parameter in Java?",shortAnswer:`Because the primitive 'double 0.1' is ALREADY corrupted by IEEE 754 binary floating-point inaccuracy before it ever enters the BigDecimal constructor, creating '0.1000000000000000055511151231257827021181583404541015625'. Always use 'new BigDecimal("0.1")' or 'BigDecimal.valueOf(0.1)'.`,explanation:"Effective Java Item 60 strongly emphasizes using String constructor for BigDecimal.",hint:"The double argument is already imprecise before the constructor runs.",level:"Intermediate",codeExample:`BigDecimal safe = new BigDecimal("0.1"); // Exact
BigDecimal alsoSafe = BigDecimal.valueOf(0.1);`}];function D(){return e.jsxs("div",{className:"space-y-12 px-4 md:px-8 py-8 text-slate-200 bg-slate-900 min-h-screen",children:[e.jsxs("header",{className:"space-y-4 border-b border-slate-800 pb-6",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"px-3 py-1 bg-sky-500/10 text-sky-400 border border-sky-500/20 text-xs font-semibold rounded-full uppercase tracking-wider",children:"Module 003_004 · Topic 8"}),e.jsx("span",{className:"px-3 py-1 bg-rose-500/10 text-rose-400 border border-rose-500/20 text-xs font-semibold rounded-full",children:"Instantiation Pitfall"})]}),e.jsxs("h1",{className:"text-3xl md:text-4xl font-extrabold text-white tracking-tight",children:[e.jsx("code",{className:"text-emerald-400 font-mono",children:"BigDecimal"})," Instantiation: ",e.jsx("code",{className:"text-emerald-400 font-mono",children:'new BigDecimal("0.1")'})," vs Fatal ",e.jsx("code",{className:"text-rose-400 font-mono",children:"new BigDecimal(0.1)"})]}),e.jsxs("p",{className:"text-base md:text-lg text-slate-400 leading-relaxed max-w-4xl",children:["Learn why the double constructor corrupts decimal precision at instantiation time: comparing string constructors against ",e.jsx("code",{className:"text-emerald-300 font-mono",children:"BigDecimal.valueOf()"}),"."]})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsxs("h2",{className:"text-2xl font-bold text-emerald-400 flex items-center gap-2",children:[e.jsx("span",{children:"💻"})," Hands-On Java Demo Code"]}),e.jsx(t,{fileModule:r,title:"BigDecimalInstantiationPitfallDemo.java",highlightLines:[7,16,17,22,23,28,29]})]}),e.jsx("section",{className:"space-y-4",children:e.jsx(n,{title:"BigDecimal Instantiation FAQs",questions:s})}),e.jsx("section",{className:"space-y-4",children:e.jsx(i,{content:o,title:"Module 003_004 Topic 8: BigDecimal Instantiation",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Printable Note",downloadFileName:"003_004_topic8_bigdecimal_instantiation_note.txt"})}),e.jsx(a,{note:"If you write 'new BigDecimal(0.1)', you defeat the entire purpose of using BigDecimal because the double was already corrupted before BigDecimal received it! Always pass a String: new BigDecimal('0.1')! — Sukanta Hui"})]})}export{D as default};
