import{j as e}from"./vendor-react-core-Doz9nIC6.js";import{J as t}from"./JavaFileLoader-BfBG3xz_.js";import{F as a}from"./FAQTemplate-CkSqDH4B.js";import{P as r}from"./PlainTextPrint-C08xhKA4.js";import{T as n}from"./TeacherSukantaHui-CC0AKmkm.js";import"./JavaCodeBlock-BwsLxS3r.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-BtJHuk7w.js";const s=`/**\r
 * Java Core Tutorial - Module 003_003: Wrapper Classes, Autoboxing & Number Parsing\r
 * Topic 6: The Integer Cache Pool (-128 to 127): Why 100 == 100 is True, but 200 == 200 is False\r
 * Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
 */\r
\r
package com.coderaccotax.javatutorial.wrappers;\r
\r
public class IntegerCachePoolMasteryDemo {\r
\r
    public static void main(String[] args) {\r
        System.out.println("==========================================================================");\r
        System.out.println(" TOPIC 6: THE INTEGER CACHE POOL (-128 to 127) - BARRACKPORE");\r
        System.out.println("==========================================================================\\n");\r
\r
        // 1. Values WITHIN the cache range [-128 to 127]:\r
        Integer a = 100; // Translates to Integer.valueOf(100) -> Fetched from Cache!\r
        Integer b = 100; // Translates to Integer.valueOf(100) -> Reuses SAME object!\r
\r
        System.out.println(">>> 1. Comparing Cached Integers (Value = 100):");\r
        System.out.println("  a == b            : " + (a == b) + " (TRUE: Points to same cached instance in RAM!)");\r
        System.out.println("  a.equals(b)       : " + a.equals(b) + " (TRUE)");\r
\r
        // 2. Values OUTSIDE the cache range (> 127):\r
        Integer x = 200; // Translates to Integer.valueOf(200) -> Allocates NEW Heap object!\r
        Integer y = 200; // Translates to Integer.valueOf(200) -> Allocates ANOTHER Heap object!\r
\r
        System.out.println("\\n>>> 2. Comparing Non-Cached Integers (Value = 200):");\r
        System.out.println("  x == y            : " + (x == y) + " (FALSE: Distinct objects on Heap!)");\r
        System.out.println("  x.equals(y)       : " + x.equals(y) + " (TRUE: Characters/Values are equal)");\r
\r
        System.out.println("\\n>>> GOLDEN RULE: NEVER compare Wrapper Objects with '==', ALWAYS use '.equals()'!");\r
\r
        System.out.println("\\n==========================================================================");\r
    }\r
}`,o=`================================================================================\r
JAVA CORE TUTORIAL - QUICK REVISION GUIDE\r
Module 003_003: Wrapper Classes & Autoboxing\r
Topic 6: The Integer Cache Pool (-128 to 127)\r
Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
================================================================================\r
\r
1. INTEGER CACHE RULES:\r
   - Cache range: '-128' to '127' (inclusive).\r
   - 'Integer.valueOf(n)' queries the cache first.\r
   - Within cache: 'a == b' is true.\r
   - Outside cache: 'a == b' is false (two distinct objects).\r
   - ALWAYS compare wrapper objects using '.equals()'!\r
\r
================================================================================\r
Classroom Practice: Barrackpore Academy | Mentor: Sukanta Hui\r
================================================================================`,l=[{question:"Why does 'Integer a = 100, b = 100; (a == b)' return true, whereas with 200 it returns false?",shortAnswer:"The JVM maintains an internal IntegerCache pool for values from -128 to 127. 'Integer.valueOf(100)' returns a cached shared object (same memory reference), whereas 200 exceeds the cache threshold and allocates new distinct Heap objects.",explanation:"Can be tuned using JVM flag: -XX:AutoBoxCacheMax=<size>.",hint:"JVM caches Integers from -128 to 127; values outside create separate heap objects.",level:"Intermediate",codeExample:`Integer a = 100, b = 100; // a == b is true
Integer x = 200, y = 200; // x == y is false`}];function g(){return e.jsxs("div",{className:"space-y-12 px-4 md:px-8 py-8 text-slate-200 bg-slate-900 min-h-screen",children:[e.jsxs("header",{className:"space-y-4 border-b border-slate-800 pb-6",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"px-3 py-1 bg-sky-500/10 text-sky-400 border border-sky-500/20 text-xs font-semibold rounded-full uppercase tracking-wider",children:"Module 003_003 · Topic 6"}),e.jsx("span",{className:"px-3 py-1 bg-amber-500/10 text-amber-400 border border-amber-500/20 text-xs font-semibold rounded-full",children:"Cache Pool Pitfall"})]}),e.jsxs("h1",{className:"text-3xl md:text-4xl font-extrabold text-white tracking-tight",children:["The Integer Cache Pool (-128 to 127): Why ",e.jsx("code",{className:"text-emerald-400 font-mono",children:"100 == 100"})," is True but ",e.jsx("code",{className:"text-rose-400 font-mono",children:"200 == 200"})," is False"]}),e.jsxs("p",{className:"text-base md:text-lg text-slate-400 leading-relaxed max-w-4xl",children:["Master the most famous Java interview trap: exploring the JVM Flyweight IntegerCache pool, boundary thresholds, and why comparing wrapper references with ",e.jsx("code",{className:"text-rose-400 font-mono",children:"=="})," creates intermittent bugs."]})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsxs("h2",{className:"text-2xl font-bold text-emerald-400 flex items-center gap-2",children:[e.jsx("span",{children:"💻"})," Hands-On Java Demo Code"]}),e.jsx(t,{fileModule:s,title:"IntegerCachePoolMasteryDemo.java",highlightLines:[7,14,15,18,22,23,26]})]}),e.jsx("section",{className:"space-y-4",children:e.jsx(a,{title:"Integer Cache FAQs",questions:l})}),e.jsx("section",{className:"space-y-4",children:e.jsx(r,{content:o,title:"Module 003_003 Topic 6: Integer Cache Pool",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Printable Note",downloadFileName:"003_003_topic6_integer_cache_note.txt"})}),e.jsx(n,{note:"Imagine testing your code with student roll number 50 and '==' passes, then in production with roll number 150 it silently fails! ALWAYS use '.equals()' when comparing Integer objects. — Sukanta Hui"})]})}export{g as default};
