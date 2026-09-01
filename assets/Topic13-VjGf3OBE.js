import{j as e}from"./vendor-react-core-Doz9nIC6.js";import{J as t}from"./JavaFileLoader-BfBG3xz_.js";import{F as n}from"./FAQTemplate-BHhlgA96.js";import{P as r}from"./PlainTextPrint-C08xhKA4.js";import{T as o}from"./TeacherSukantaHui-CEPuAfsb.js";import"./JavaCodeBlock-BwsLxS3r.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-DGCamHnX.js";const a=`/**\r
 * Java Core Tutorial - Module 003_003: Wrapper Classes, Autoboxing & Number Parsing\r
 * Topic 13: Wrapper Constants & Methods: MAX_VALUE, SIZE, BYTES, toBinaryString, compare (Capstone)\r
 * Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
 */\r
\r
package com.coderaccotax.javatutorial.wrappers;\r
\r
public class WrapperUtilitiesAndConstantsCapstoneDemo {\r
\r
    public static void main(String[] args) {\r
        System.out.println("==========================================================================");\r
        System.out.println(" TOPIC 13: WRAPPER UTILITIES & CONSTANTS CAPSTONE - BARRACKPORE");\r
        System.out.println("==========================================================================\\n");\r
\r
        System.out.println(">>> 1. Architecture Constants in Integer & Long:");\r
        System.out.println("  Integer.MIN_VALUE    : " + Integer.MIN_VALUE);\r
        System.out.println("  Integer.MAX_VALUE    : " + Integer.MAX_VALUE);\r
        System.out.println("  Integer.SIZE         : " + Integer.SIZE + " bits");\r
        System.out.println("  Integer.BYTES        : " + Integer.BYTES + " bytes");\r
\r
        System.out.println("\\n>>> 2. Bitwise & Binary Representation Utilities:");\r
        int num = 255;\r
        System.out.println("  Integer.toBinaryString(255) : " + Integer.toBinaryString(num));\r
        System.out.println("  Integer.toHexString(255)    : 0x" + Integer.toHexString(num).toUpperCase());\r
        System.out.println("  Integer.bitCount(255)       : " + Integer.bitCount(num) + " set bits (popcount)");\r
\r
        System.out.println("\\n>>> 3. Static Type-Safe Comparison Methods (compare):");\r
        // Integer.compare(x, y) prevents subtraction integer overflow bugs!\r
        int comp1 = Integer.compare(10, 20); // Returns negative\r
        int comp2 = Double.compare(4.5, 4.5); // Returns 0 (Handles NaN and -0.0 correctly!)\r
\r
        System.out.println("  Integer.compare(10, 20) : " + comp1 + " (10 is less than 20)");\r
        System.out.println("  Double.compare(4.5, 4.5): " + comp2 + " (Equal)");\r
\r
        System.out.println("\\n==========================================================================");\r
        System.out.println(" MODULE 003_003 WRAPPER CLASSES & AUTOBOXING 100% COMPLETE!");\r
        System.out.println("==========================================================================");\r
    }\r
}`,s=`================================================================================\r
JAVA CORE TUTORIAL - QUICK REVISION GUIDE\r
Module 003_003: Wrapper Classes & Autoboxing\r
Topic 13: Wrapper Utilities & Constants Capstone\r
Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
================================================================================\r
\r
1. MODULE 003_003 SUMMARY:\r
   - 8 Wrapper classes bridge primitives with Collections.\r
   - Autoboxing translates to 'Integer.valueOf(p)'.\r
   - Unboxing translates to 'wrapper.intValue()'.\r
   - IntegerCache pools '-128 to 127'.\r
   - Unboxing null triggers 'NullPointerException'.\r
   - Use 'Integer.compare(a, b)' instead of 'a - b' to avoid overflow.\r
\r
================================================================================\r
Classroom Practice: Barrackpore Academy | Mentor: Sukanta Hui\r
================================================================================`,i=[{question:"Why is 'Integer.compare(a, b)' preferred over 'a - b' when implementing Comparators in Java?",shortAnswer:"Using subtraction 'a - b' suffers from catastrophic integer underflow/overflow bugs when comparing extreme values (e.g. Integer.MIN_VALUE - 1 wraps around to positive). 'Integer.compare(a, b)' evaluates boolean inequalities without arithmetic subtraction, guaranteeing mathematical correctness.",explanation:"Always use static type compare methods for Comparator lambdas.",hint:"Prevents catastrophic integer overflow/underflow bugs caused by subtraction.",level:"Advanced",codeExample:"(a, b) → Integer.compare(a, b); // Overflow-safe sorting comparator"}];function b(){return e.jsxs("div",{className:"space-y-12 px-4 md:px-8 py-8 text-slate-200 bg-slate-900 min-h-screen",children:[e.jsxs("header",{className:"space-y-4 border-b border-slate-800 pb-6",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"px-3 py-1 bg-sky-500/10 text-sky-400 border border-sky-500/20 text-xs font-semibold rounded-full uppercase tracking-wider",children:"Module 003_003 · Topic 13"}),e.jsx("span",{className:"px-3 py-1 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-xs font-semibold rounded-full",children:"Capstone Toolbox"})]}),e.jsxs("h1",{className:"text-xl sm:text-2xl md:text-3xl font-bold text-white tracking-tight",children:["Wrapper Utility Constants & Methods: ",e.jsx("code",{className:"text-emerald-400 font-mono",children:"MAX_VALUE"}),", ",e.jsx("code",{className:"text-sky-400 font-mono",children:"toBinaryString()"})," & ",e.jsx("code",{className:"text-amber-400 font-mono",children:"compare()"})]}),e.jsxs("p",{className:"text-base md:text-lg text-slate-400 leading-relaxed max-w-4xl",children:["Synthesize all wrapper class utilities: inspecting bit architecture constants, binary string conversions, population count bit manipulation, and overflow-safe ",e.jsx("code",{className:"text-emerald-300 font-mono",children:"compare()"})," helpers."]})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsxs("h2",{className:"text-2xl font-bold text-emerald-400 flex items-center gap-2",children:[e.jsx("span",{children:"💻"})," Hands-On Java Demo Code"]}),e.jsx(t,{fileModule:a,title:"WrapperUtilitiesAndConstantsCapstoneDemo.java",highlightLines:[7,14,15,21,23,27,28]})]}),e.jsx("section",{className:"space-y-4",children:e.jsx(n,{title:"Wrapper Toolbox FAQs",questions:i})}),e.jsx("section",{className:"space-y-4",children:e.jsx(r,{content:s,title:"Module 003_003 Topic 13: Wrapper Toolbox Capstone",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Printable Note",downloadFileName:"003_003_topic13_wrapper_toolbox_note.txt"})}),e.jsx(o,{note:"Congratulations on completing Module 003_003! You now understand the complete mechanics of Wrapper Classes, Autoboxing/Unboxing bytecode translations, the IntegerCache pool, and safe numeric parsing! — Sukanta Hui"})]})}export{b as default};
