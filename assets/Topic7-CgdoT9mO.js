import{j as e}from"./vendor-react-core-Doz9nIC6.js";import{J as n}from"./JavaFileLoader-BfBG3xz_.js";import{F as t}from"./FAQTemplate-BHhlgA96.js";import{P as a}from"./PlainTextPrint-C08xhKA4.js";import{T as r}from"./TeacherSukantaHui-DerPxfxp.js";import"./JavaCodeBlock-BwsLxS3r.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-CH1iX9C8.js";const o=`/**\r
 * Java Core Tutorial - Module 003_003: Wrapper Classes, Autoboxing & Number Parsing\r
 * Topic 7: Caching in Other Wrappers: Byte, Short, Long, Character & Boolean\r
 * Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
 */\r
\r
package com.coderaccotax.javatutorial.wrappers;\r
\r
public class OtherWrapperCachingMechanicsDemo {\r
\r
    public static void main(String[] args) {\r
        System.out.println("==========================================================================");\r
        System.out.println(" TOPIC 7: CACHING IN OTHER WRAPPER CLASSES - BARRACKPORE");\r
        System.out.println("==========================================================================\\n");\r
\r
        System.out.println(">>> Summary of Caching Across All 8 Wrapper Types:");\r
        System.out.println("+---------------+-------------------------------+-------------------------+");\r
        System.out.println("| Wrapper Class | Cached Value Range            | Cache Mechanism         |");\r
        System.out.println("+---------------+-------------------------------+-------------------------+");\r
        System.out.println("| Boolean       | TRUE and FALSE (All 2 values) | Static Constants        |");\r
        System.out.println("| Byte          | -128 to 127 (All 256 values!) | ByteCache Pool          |");\r
        System.out.println("| Character     | 0 to 127 (ASCII standard)     | CharacterCache Pool     |");\r
        System.out.println("| Short         | -128 to 127                   | ShortCache Pool         |");\r
        System.out.println("| Integer       | -128 to 127 (Tunable max)     | IntegerCache Pool       |");\r
        System.out.println("| Long          | -128 to 127                   | LongCache Pool          |");\r
        System.out.println("| Float         | NO CACHING                    | N/A (Infinite fractions)|");\r
        System.out.println("| Double        | NO CACHING                    | N/A (Infinite fractions)|");\r
        System.out.println("+---------------+-------------------------------+-------------------------+");\r
\r
        // Demonstration of Boolean and Character Caching:\r
        Boolean b1 = true;\r
        Boolean b2 = true;\r
        Character c1 = 'A'; // ASCII 65\r
        Character c2 = 'A';\r
\r
        System.out.println("\\n>>> Verification of Boolean & Character caching:");\r
        System.out.println("  Boolean 'true == true'   : " + (b1 == b2) + " (TRUE: Boolean.TRUE singleton)");\r
        System.out.println("  Character 'A' == 'A'     : " + (c1 == c2) + " (TRUE: Within ASCII 0-127)");\r
\r
        System.out.println("\\n==========================================================================");\r
    }\r
}`,s=`================================================================================\r
JAVA CORE TUTORIAL - QUICK REVISION GUIDE\r
Module 003_003: Wrapper Classes & Autoboxing\r
Topic 7: Caching in Other Wrapper Classes\r
Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
================================================================================\r
\r
1. CACHE SUMMARY ACROSS WRAPPERS:\r
   - Boolean   : TRUE & FALSE (100% cached).\r
   - Byte      : -128 to 127 (100% cached).\r
   - Character : 0 to 127 (ASCII).\r
   - Short/Int/Long : -128 to 127.\r
   - Float/Double   : NO CACHING.\r
\r
================================================================================\r
Classroom Practice: Barrackpore Academy | Mentor: Sukanta Hui\r
================================================================================`,i=[{question:"Which wrapper classes in Java DO NOT have any caching mechanism, and why?",shortAnswer:"'Float' and 'Double' do not have any caching pools. Because there are infinite floating-point decimal values between any two numbers (e.g. between 0.0 and 1.0), maintaining a cache would be computationally impossible and waste memory.",explanation:"Byte, Short, Integer, Long, Character, and Boolean all support caching.",hint:"Float and Double do not cache values due to infinite decimal fractions.",level:"Intermediate",codeExample:"Double d1 = 1.0, d2 = 1.0; // (d1 == d2) is ALWAYS false!"}];function C(){return e.jsxs("div",{className:"space-y-12 px-4 md:px-8 py-8 text-slate-200 bg-slate-900 min-h-screen",children:[e.jsxs("header",{className:"space-y-4 border-b border-slate-800 pb-6",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"px-3 py-1 bg-sky-500/10 text-sky-400 border border-sky-500/20 text-xs font-semibold rounded-full uppercase tracking-wider",children:"Module 003_003 · Topic 7"}),e.jsx("span",{className:"px-3 py-1 bg-indigo-500/10 text-indigo-400 border border-indigo-500/20 text-xs font-semibold rounded-full",children:"Cache Landscape"})]}),e.jsxs("h1",{className:"text-xl sm:text-2xl md:text-3xl font-bold text-white tracking-tight",children:["Caching in Other Wrappers: ",e.jsx("code",{className:"text-sky-400 font-mono",children:"Byte"}),", ",e.jsx("code",{className:"text-emerald-400 font-mono",children:"Character"})," & ",e.jsx("code",{className:"text-amber-400 font-mono",children:"Boolean"})]}),e.jsxs("p",{className:"text-base md:text-lg text-slate-400 leading-relaxed max-w-4xl",children:["Survey caching mechanisms across the entire wrapper family: ASCII character pooling, byte caching, and why ",e.jsx("code",{className:"text-rose-400 font-mono",children:"Float"})," and ",e.jsx("code",{className:"text-rose-400 font-mono",children:"Double"})," never cache instances."]})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsxs("h2",{className:"text-2xl font-bold text-emerald-400 flex items-center gap-2",children:[e.jsx("span",{children:"💻"})," Hands-On Java Demo Code"]}),e.jsx(n,{fileModule:o,title:"OtherWrapperCachingMechanicsDemo.java",highlightLines:[7,14,15,16,17,18,19,20,21,28,29]})]}),e.jsx("section",{className:"space-y-4",children:e.jsx(t,{title:"Wrapper Caching FAQs",questions:i})}),e.jsx("section",{className:"space-y-4",children:e.jsx(a,{content:s,title:"Module 003_003 Topic 7: Wrapper Caching Landscape",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Printable Note",downloadFileName:"003_003_topic7_other_caching_note.txt"})}),e.jsx(r,{note:"Byte caches all 256 possible byte values, while Float and Double have zero caching because of infinite fractions! — Sukanta Hui"})]})}export{C as default};
