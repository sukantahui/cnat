import{j as e}from"./vendor-react-core-Doz9nIC6.js";import{J as r}from"./JavaFileLoader-BfBG3xz_.js";import{F as t}from"./FAQTemplate-BHhlgA96.js";import{P as n}from"./PlainTextPrint-C08xhKA4.js";import{T as s}from"./TeacherSukantaHui-BaJcBHAy.js";import"./JavaCodeBlock-BwsLxS3r.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-8ao-0upJ.js";const a=`/**\r
 * Java Core Tutorial - Module 003_002: StringBuilder, StringBuffer & String Formatting\r
 * Topic 5: StringBuilder Methods: append, insert, delete, reverse, replace, setCharAt\r
 * Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
 */\r
\r
package com.coderaccotax.javatutorial.stringbuilder;\r
\r
public class StringBuilderMethodsMasteryDemo {\r
\r
    public static void main(String[] args) {\r
        System.out.println("==========================================================================");\r
        System.out.println(" TOPIC 5: StringBuilder CORE METHODS MASTERY - BARRACKPORE");\r
        System.out.println("==========================================================================\\n");\r
\r
        StringBuilder sb = new StringBuilder("Hello Barrackpore");\r
\r
        // 1. append() -> Adds to the end:\r
        sb.append(" Hub");\r
        System.out.println("  1. append()      : "" + sb + """);\r
\r
        // 2. insert(offset, text) -> Inserts at exact index:\r
        sb.insert(6, "Academy @ ");\r
        System.out.println("  2. insert()      : "" + sb + """);\r
\r
        // 3. replace(start, end, text) -> Replaces range:\r
        sb.replace(0, 5, "Welcome to");\r
        System.out.println("  3. replace()     : "" + sb + """);\r
\r
        // 4. delete(start, end) & deleteCharAt(index):\r
        sb.delete(0, 11); // Removes "Welcome to "\r
        System.out.println("  4. delete()      : "" + sb + """);\r
\r
        // 5. setCharAt(index, ch):\r
        sb.setCharAt(0, 'a');\r
        System.out.println("  5. setCharAt()   : "" + sb + """);\r
\r
        // 6. reverse() -> In-place reversal (Great for Palindrome checks!):\r
        StringBuilder pal = new StringBuilder("MADAM");\r
        pal.reverse();\r
        System.out.println("  6. reverse()     : "" + pal + "" (MADAM reversed is MADAM!)");\r
\r
        System.out.println("\\n==========================================================================");\r
    }\r
}`,i=`================================================================================\r
JAVA CORE TUTORIAL - QUICK REVISION GUIDE\r
Module 003_002: StringBuilder, StringBuffer & String Formatting\r
Topic 5: StringBuilder Core Methods\r
Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
================================================================================\r
\r
1. CORE METHOD TOOLSET:\r
   - 'append(data)'              : Appends primitives/objects to end.\r
   - 'insert(offset, data)'      : Inserts at index.\r
   - 'delete(start, end)'        : Deletes range (end exclusive).\r
   - 'deleteCharAt(idx)'         : Deletes single character.\r
   - 'replace(start, end, str)'  : Replaces slice with string.\r
   - 'reverse()'                 : Reverses buffer in-place.\r
   - 'setCharAt(idx, ch)'        : Mutates single char at index.\r
\r
================================================================================\r
Classroom Practice: Barrackpore Academy | Mentor: Sukanta Hui\r
================================================================================`,l=[{question:"What makes 'StringBuilder.reverse()' useful in competitive programming and interview algorithm tests?",shortAnswer:"It reverses the character buffer in-place with O(N) time and O(1) auxiliary space, making palindrome verification and number reversal trivial in a single method call.",explanation:"Reverses characters without creating intermediate object copies.",hint:"Performs in-place buffer reversal in O(N) time.",level:"Beginner",codeExample:"boolean isPal = s.equals(new StringBuilder(s).reverse().toString());"}];function g(){return e.jsxs("div",{className:"space-y-12 px-4 md:px-8 py-8 text-slate-200 bg-slate-900 min-h-screen",children:[e.jsxs("header",{className:"space-y-4 border-b border-slate-800 pb-6",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"px-3 py-1 bg-sky-500/10 text-sky-400 border border-sky-500/20 text-xs font-semibold rounded-full uppercase tracking-wider",children:"Module 003_002 · Topic 5"}),e.jsx("span",{className:"px-3 py-1 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-xs font-semibold rounded-full",children:"Buffer Manipulation API"})]}),e.jsxs("h1",{className:"text-xl sm:text-2xl md:text-3xl font-bold text-white tracking-tight",children:[e.jsx("code",{className:"text-emerald-400 font-mono",children:"StringBuilder"})," Core Methods: ",e.jsx("code",{className:"text-emerald-400 font-mono",children:"append()"}),", ",e.jsx("code",{className:"text-sky-400 font-mono",children:"insert()"})," & ",e.jsx("code",{className:"text-amber-400 font-mono",children:"reverse()"})]}),e.jsxs("p",{className:"text-base md:text-lg text-slate-400 leading-relaxed max-w-4xl",children:["Master the complete in-place buffer manipulation API: inserting at offsets, slicing with ",e.jsx("code",{className:"text-rose-300 font-mono",children:"delete()"}),", character replacement, and instant palindromic reversal."]})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsxs("h2",{className:"text-2xl font-bold text-emerald-400 flex items-center gap-2",children:[e.jsx("span",{children:"💻"})," Hands-On Java Demo Code"]}),e.jsx(r,{fileModule:a,title:"StringBuilderMethodsMasteryDemo.java",highlightLines:[7,15,19,23,27,31,36]})]}),e.jsx("section",{className:"space-y-4",children:e.jsx(t,{title:"StringBuilder Methods FAQs",questions:l})}),e.jsx("section",{className:"space-y-4",children:e.jsx(n,{content:i,title:"Module 003_002 Topic 5: StringBuilder Core Methods",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Printable Note",downloadFileName:"003_002_topic5_sb_methods_note.txt"})}),e.jsx(s,{note:"Notice how all these methods modify the SAME buffer in RAM and return 'this'! That lets you chain them together in 1 elegant sentence. — Sukanta Hui"})]})}export{g as default};
