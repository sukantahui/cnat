import{j as n}from"./vendor-react-core-Doz9nIC6.js";import{J as t}from"./JavaFileLoader-BfBG3xz_.js";import{F as e}from"./FAQTemplate-CkSqDH4B.js";import{P as r}from"./PlainTextPrint-C08xhKA4.js";import{T as i}from"./TeacherSukantaHui-CyIG3xbg.js";import"./JavaCodeBlock-BwsLxS3r.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-CIaKtAt4.js";const o=`/**\r
 * Java Core Tutorial - Module 003_001: String Immutability & The String Constant Pool (SCP)\r
 * Topic 12: Converting Primitives to String: String.valueOf() vs toString() vs Concatenation ("" + n)\r
 * Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
 */\r
\r
package com.coderaccotax.javatutorial.strings;\r
\r
public class PrimitiveToStringConversionDemo {\r
\r
    public static void main(String[] args) {\r
        System.out.println("==========================================================================");\r
        System.out.println(" TOPIC 12: PRIMITIVE TO STRING CONVERSION - BARRACKPORE");\r
        System.out.println("==========================================================================\\n");\r
\r
        int roll = 101;\r
        Double gpa = 9.75;\r
        Object nullObj = null;\r
\r
        System.out.println(">>> 1. Using String.valueOf() [RECOMMENDED BEST PRACTICE]:");\r
        String s1 = String.valueOf(roll);\r
        String s2 = String.valueOf(nullObj); // Safely returns "null" without throwing NPE!\r
        System.out.println("  String.valueOf(roll)    : "" + s1 + """);\r
        System.out.println("  String.valueOf(nullObj) : "" + s2 + "" (Null Safe!)");\r
\r
        System.out.println("\\n>>> 2. Using Wrapper.toString():");\r
        String s3 = Integer.toString(roll);\r
        String s4 = gpa.toString();\r
        System.out.println("  Integer.toString(roll)  : "" + s3 + """);\r
        System.out.println("  gpa.toString()          : "" + s4 + """);\r
\r
        System.out.println("\\n>>> 3. Using String Concatenation ("" + n) [AVOID IN TIGHT LOOPS]:");\r
        String s5 = "" + roll; // Creates extra StringBuilder underneath!\r
        System.out.println("  "" + roll               : "" + s5 + "" (Slowest due to intermediate allocations)");\r
\r
        System.out.println("\\n==========================================================================");\r
    }\r
}`,a=`================================================================================\r
JAVA CORE TUTORIAL - QUICK REVISION GUIDE\r
Module 003_001: String Immutability & String Constant Pool\r
Topic 12: Primitive to String Conversion\r
Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
================================================================================\r
\r
1. CONVERSION RANKING:\r
   - 1st (Best)  : 'String.valueOf(val)' &rarr; Null safe, optimized.\r
   - 2nd (Good)  : 'Integer.toString(n)' &rarr; Fast primitive parsing.\r
   - 3rd (Avoid) : '"" + val' &rarr; Unnecessary StringBuilder allocation.\r
\r
================================================================================\r
Classroom Practice: Barrackpore Academy | Mentor: Sukanta Hui\r
================================================================================`,s=[{question:"Why is 'String.valueOf(obj)' preferred over 'obj.toString()' and 'emptyString + obj' in Java?",shortAnswer:`1. 'String.valueOf(obj)' is null-safe (returns "null" instead of throwing NullPointerException). 2. Unlike string concatenation, it avoids unnecessary StringBuilder instantiations when converting primitives.`,explanation:"String.valueOf() is the most robust and idiomatic conversion tool in the standard library.",hint:"Handles nulls safely and avoids hidden StringBuilder object allocations.",level:"Beginner",codeExample:"String s = String.valueOf(data); // Null safe and clean"}];function x(){return n.jsxs("div",{className:"space-y-12 px-4 md:px-8 py-8 text-slate-200 bg-slate-900 min-h-screen",children:[n.jsxs("header",{className:"space-y-4 border-b border-slate-800 pb-6",children:[n.jsxs("div",{className:"flex items-center gap-3",children:[n.jsx("span",{className:"px-3 py-1 bg-sky-500/10 text-sky-400 border border-sky-500/20 text-xs font-semibold rounded-full uppercase tracking-wider",children:"Module 003_001 · Topic 12"}),n.jsx("span",{className:"px-3 py-1 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-xs font-semibold rounded-full",children:"Type Casting"})]}),n.jsxs("h1",{className:"text-3xl md:text-4xl font-extrabold text-white tracking-tight",children:["Converting Primitives to String: ",n.jsx("code",{className:"text-emerald-400 font-mono",children:"String.valueOf()"})," vs ",n.jsx("code",{className:"text-amber-400 font-mono",children:"toString()"})]}),n.jsxs("p",{className:"text-base md:text-lg text-slate-400 leading-relaxed max-w-4xl",children:["Compare primitive serialization techniques: null-safe conversions with ",n.jsx("code",{className:"text-emerald-300 font-mono",children:"String.valueOf()"})," versus costly hidden StringBuilder allocations."]})]}),n.jsxs("section",{className:"space-y-4",children:[n.jsxs("h2",{className:"text-2xl font-bold text-emerald-400 flex items-center gap-2",children:[n.jsx("span",{children:"💻"})," Hands-On Java Demo Code"]}),n.jsx(t,{fileModule:o,title:"PrimitiveToStringConversionDemo.java",highlightLines:[7,18,19,24,29]})]}),n.jsx("section",{className:"space-y-4",children:n.jsx(e,{title:"Primitive Conversion FAQs",questions:s})}),n.jsx("section",{className:"space-y-4",children:n.jsx(r,{content:a,title:"Module 003_001 Topic 12: Primitive to String Conversion",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Printable Note",downloadFileName:"003_001_topic12_primitive_conversion_note.txt"})}),n.jsx(i,{note:"Don't write 'emptyString + student' to turn something into a String! Use 'String.valueOf(student)'—it is null-safe, clean, and won't crash your app with a NullPointerException. — Sukanta Hui"})]})}export{x as default};
