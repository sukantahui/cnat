import{j as e}from"./vendor-react-core-Doz9nIC6.js";import{J as t}from"./JavaFileLoader-BfBG3xz_.js";import{F as r}from"./FAQTemplate-CkSqDH4B.js";import{P as n}from"./PlainTextPrint-C08xhKA4.js";import{T as a}from"./TeacherSukantaHui-CC0AKmkm.js";import"./JavaCodeBlock-BwsLxS3r.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-BtJHuk7w.js";const s=`/**\r
 * Java Core Tutorial - Module 012_005: Interview Mastery & Tricky MCQs\r
 * Topic 4: Tricky Riddle 5 - Integer Cache Equality (-128 to 127)\r
 * Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
 */\r
\r
package com.coderaccotax.javatutorial.interview;\r
\r
public class TrickyRiddle5IntegerCacheEqualityDemo {\r
\r
    public static void main(String[] args) {\r
        System.out.println("==========================================================================");\r
        System.out.println(" TRICKY RIDDLE 5: INTEGER CACHE EQUALITY - BARRACKPORE ACADEMY");\r
        System.out.println("==========================================================================\\n");\r
\r
        Integer a = 100;\r
        Integer b = 100;\r
        System.out.println("1. Integer a = 100, b = 100 (Within Cache -128..127):");\r
        System.out.println("   a == b          -> " + (a == b)); // TRUE (Same Flyweight Object)\r
        System.out.println("   a.equals(b)     -> " + a.equals(b)); // TRUE\r
\r
        Integer x = 200;\r
        Integer y = 200;\r
        System.out.println("\r
2. Integer x = 200, y = 200 (Outside Cache):");\r
        System.out.println("   x == y          -> " + (x == y)); // FALSE! (Two distinct heap objects!)\r
        System.out.println("   x.equals(y)     -> " + x.equals(y)); // TRUE (Value equality)\r
\r
        System.out.println("\r
3. Explicit 'new Integer(100)' (Deprecated):");\r
        Integer custom = new Integer(100);\r
        System.out.println("   custom == a     -> " + (custom == a)); // FALSE (Explicit heap instantiation)\r
\r
        System.out.println("\\n==========================================================================");\r
    }\r
}\r
`,i=`================================================================================\r
JAVA CORE TUTORIAL - QUICK REVISION GUIDE\r
Module 012_005: Interview Mastery & Tricky MCQs\r
Topic 4: Tricky Riddle 5 - Integer Cache Equality\r
Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
================================================================================\r
\r
1. INTEGER CACHE (Flyweight Pattern):\r
   - 'IntegerCache' caches instances from -128 to 127 (high bound configurable via '-XX:AutoBoxCacheMax=<size>').\r
   - Autoboxing ('Integer i = 100') invokes 'Integer.valueOf(100)'.\r
   - Outside [-128, 127], 'valueOf()' calls 'new Integer()', returning distinct references.\r
   - ALWAYS use '.equals()' for wrapper class equality!\r
\r
================================================================================\r
Classroom Practice: Barrackpore Academy | Mentor: Sukanta Hui\r
================================================================================\r
`,o=[{question:"Why does Integer a = 127, b = 127; a == b return true, but for 128 it returns false?",shortAnswer:"Autoboxing calls Integer.valueOf(), which caches objects between -128 and 127. Values in this range return the same shared flyweight instance from the cache; for 128, new separate heap objects are created with different memory addresses.",explanation:"Integer cache flyweight optimization in Java.",hint:"Integer.valueOf caches values between -128 and 127.",level:"Beginner",codeExample:"Integer.valueOf(127) == Integer.valueOf(127); // true"},{question:"Can the upper limit of the Integer cache (127) be modified via JVM arguments?",shortAnswer:"Yes, using the JVM flag -XX:AutoBoxCacheMax=<size> (e.g. -XX:AutoBoxCacheMax=1000). The lower limit of -128 is fixed.",explanation:"Configurable HotSpot JVM property.",hint:"Yes, via -XX:AutoBoxCacheMax=<size>.",level:"Intermediate",codeExample:"-XX:AutoBoxCacheMax=2048"}];function g(){return e.jsxs("div",{className:"space-y-12 px-4 md:px-8 py-8 text-slate-200 bg-slate-900 min-h-screen",children:[e.jsxs("header",{className:"space-y-4 border-b border-slate-800 pb-6",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"px-3 py-1 bg-sky-500/10 text-sky-400 border border-sky-500/20 text-xs font-semibold rounded-full uppercase tracking-wider",children:"Module 012_005 · Topic 4"}),e.jsx("span",{className:"px-3 py-1 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-xs font-semibold rounded-full",children:"Interview Mastery & Tricky MCQs"})]}),e.jsxs("h1",{className:"text-3xl md:text-4xl font-extrabold text-white tracking-tight",children:["Tricky Riddle 5: ",e.jsx("code",{className:"text-emerald-400 font-mono",children:"Integer Cache Equality (-128 to 127)"})]}),e.jsx("p",{className:"text-base md:text-lg text-slate-400 leading-relaxed max-w-4xl",children:"Flyweight caching: understanding why Integer.valueOf(100) == Integer.valueOf(100) is true, but Integer.valueOf(200) == Integer.valueOf(200) is false!"})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsxs("h2",{className:"text-2xl font-bold text-emerald-400 flex items-center gap-2",children:[e.jsx("span",{children:"💻"})," Hands-On Java Demo Code"]}),e.jsx(t,{fileModule:s,title:"TrickyRiddle5IntegerCacheEqualityDemo.java",highlightLines:[18,25,34,43]})]}),e.jsx("section",{className:"space-y-4",children:e.jsx(r,{title:"Interview Riddles & MCQs FAQs",questions:o})}),e.jsx("section",{className:"space-y-4",children:e.jsx(n,{content:i,title:"Module 012_005 Topic 4: Tricky Riddle 5 - Integer Cache Equality",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Printable Note",downloadFileName:"012_005_topic4_tricky_riddle_5_integer_cache_equality_note.txt"})}),e.jsx(a,{note:"Autoboxing uses Integer.valueOf() under the hood! Java caches Integer objects in the range -128 to 127. So == works for 100, but fails for 200 because 200 creates two separate heap objects! Always use .equals() for objects! — Sukanta Hui"})]})}export{g as default};
