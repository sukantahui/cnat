import{j as e}from"./vendor-react-core-Doz9nIC6.js";import{J as n}from"./JavaFileLoader-BfBG3xz_.js";import{F as t}from"./FAQTemplate-CkSqDH4B.js";import{P as r}from"./PlainTextPrint-C08xhKA4.js";import{T as o}from"./TeacherSukantaHui-CyIG3xbg.js";import"./JavaCodeBlock-BwsLxS3r.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-CIaKtAt4.js";const a=`/**\r
 * Java Core Tutorial - Module 003_003: Wrapper Classes, Autoboxing & Number Parsing\r
 * Topic 8: The Hidden Danger of Unboxing: NullPointerException on Null Wrappers\r
 * Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
 */\r
\r
package com.coderaccotax.javatutorial.wrappers;\r
\r
public class UnboxingNullPointerExceptionDangerDemo {\r
\r
    public static void main(String[] args) {\r
        System.out.println("==========================================================================");\r
        System.out.println(" TOPIC 8: UNBOXING NullPointerException TRAP - BARRACKPORE");\r
        System.out.println("==========================================================================\\n");\r
\r
        Integer studentScore = null; // Unassigned score from database\r
\r
        System.out.println(">>> 1. Attempting to auto-unbox a NULL Integer reference into a primitive 'int':");\r
        try {\r
            // Under the hood, this executes: int primitiveVal = studentScore.intValue();\r
            // Calling a method on a NULL reference throws NullPointerException!\r
            int primitiveVal = studentScore;\r
            System.out.println("  Value: " + primitiveVal);\r
        } catch (NullPointerException e) {\r
            System.out.println("  [CRASH DETECTED] NullPointerException thrown during auto-unboxing!");\r
            System.out.println("  Explanation: JVM attempted to invoke .intValue() on a null reference.");\r
        }\r
\r
        System.out.println("\\n>>> 2. Defensive Coding Pattern (Safe Unboxing with default fallback):");\r
        int safeScore = (studentScore != null) ? studentScore : 0;\r
        System.out.println("  Safe Score using Ternary Fallback: " + safeScore);\r
\r
        System.out.println("\\n==========================================================================");\r
    }\r
}`,i=`================================================================================\r
JAVA CORE TUTORIAL - QUICK REVISION GUIDE\r
Module 003_003: Wrapper Classes & Autoboxing\r
Topic 8: Unboxing NullPointerException Danger\r
Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
================================================================================\r
\r
1. UNBOXING NPE TRAP:\r
   - 'Integer x = null; int y = x;' &rarr; Throws NPE.\r
   - Reason: Translated to 'int y = x.intValue()'.\r
   - Fix: Always check for null or use 'Optional' before unboxing.\r
\r
================================================================================\r
Classroom Practice: Barrackpore Academy | Mentor: Sukanta Hui\r
================================================================================`,s=[{question:"Why does assigning a 'null' Integer wrapper variable to a primitive 'int' throw a NullPointerException at runtime?",shortAnswer:"Because auto-unboxing generates a method call: 'studentScore.intValue()'. When 'studentScore' is null, invoking any instance method on it immediately triggers a java.lang.NullPointerException at runtime.",explanation:"This is one of the most common production NPE causes in Java backend systems.",hint:"Auto-unboxing calls .intValue() on the object; calling methods on null throws NPE.",level:"Intermediate",codeExample:"Integer x = null; int y = x; // Throws NullPointerException!"}];function h(){return e.jsxs("div",{className:"space-y-12 px-4 md:px-8 py-8 text-slate-200 bg-slate-900 min-h-screen",children:[e.jsxs("header",{className:"space-y-4 border-b border-slate-800 pb-6",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"px-3 py-1 bg-sky-500/10 text-sky-400 border border-sky-500/20 text-xs font-semibold rounded-full uppercase tracking-wider",children:"Module 003_003 · Topic 8"}),e.jsx("span",{className:"px-3 py-1 bg-rose-500/10 text-rose-400 border border-rose-500/20 text-xs font-semibold rounded-full",children:"Production Danger"})]}),e.jsxs("h1",{className:"text-3xl md:text-4xl font-extrabold text-white tracking-tight",children:["The Hidden Danger of Unboxing: ",e.jsx("code",{className:"text-rose-400 font-mono",children:"NullPointerException"})," on Null Wrappers"]}),e.jsxs("p",{className:"text-base md:text-lg text-slate-400 leading-relaxed max-w-4xl",children:["Diagnose and eliminate the #1 autoboxing disaster in production: why unboxing null wrapper references triggers unexpected runtime ",e.jsx("code",{className:"text-rose-400 font-mono",children:"NullPointerException"})," crashes."]})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsxs("h2",{className:"text-2xl font-bold text-emerald-400 flex items-center gap-2",children:[e.jsx("span",{children:"💻"})," Hands-On Java Demo Code"]}),e.jsx(n,{fileModule:a,title:"UnboxingNullPointerExceptionDangerDemo.java",highlightLines:[7,14,18,19,26]})]}),e.jsx("section",{className:"space-y-4",children:e.jsx(t,{title:"Unboxing NPE FAQs",questions:s})}),e.jsx("section",{className:"space-y-4",children:e.jsx(r,{content:i,title:"Module 003_003 Topic 8: Unboxing NPE Trap",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Printable Note",downloadFileName:"003_003_topic8_unboxing_npe_note.txt"})}),e.jsx(o,{note:"If your database entity has a column mapped to Integer and it contains NULL, assigning it to a primitive 'int score = entity.getScore();' will crash your server! Always check null or keep it as Integer. — Sukanta Hui"})]})}export{h as default};
