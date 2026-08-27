import{j as e}from"./vendor-react-core-Doz9nIC6.js";import{J as t}from"./JavaFileLoader-BfBG3xz_.js";import{F as n}from"./FAQTemplate-CkSqDH4B.js";import{P as a}from"./PlainTextPrint-C08xhKA4.js";import{T as s}from"./TeacherSukantaHui-CC0AKmkm.js";import"./JavaCodeBlock-BwsLxS3r.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-BtJHuk7w.js";const r=`/**\r
 * Java Core Tutorial - Module 006_004: Wildcards & The PECS Principle\r
 * Topic 3: 1. Unbounded Wildcard (List<?>): Universal Subtyping & Read-Only Semantics\r
 * Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
 */\r
\r
package com.coderaccotax.javatutorial.generics;\r
\r
import java.util.ArrayList;\r
import java.util.List;\r
\r
public class UnboundedWildcardReadOnlyDemo {\r
\r
    public static void inspectElements(List<?> list) {\r
        System.out.println("  >>> Inspecting List<?> of size: " + list.size());\r
        for (Object item : list) {\r
            System.out.println("    Element: " + item + " (Type: " + item.getClass().getSimpleName() + ")");\r
        }\r
\r
        // WRITE RESTRICTION WITH UNBOUNDED WILDCARDS:\r
        // list.add("Hello"); // COMPILE ERROR: Cannot add String to List<?>!\r
        // list.add(100);     // COMPILE ERROR: Cannot add Integer to List<?>!\r
        list.add(null);       // LEGAL: 'null' is the ONLY value allowed to be added to List<?>, because null belongs to all types!\r
    }\r
\r
    public static void main(String[] args) {\r
        System.out.println("==========================================================================");\r
        System.out.println(" TOPIC 3: UNBOUNDED WILDCARD (List<?>) - BARRACKPORE");\r
        System.out.println("==========================================================================\\n");\r
\r
        List<String> branches = new ArrayList<>(List.of("Barrackpore", "Naihati"));\r
        inspectElements(branches);\r
\r
        System.out.println("\\n>>> CRITICAL WRITE RESTRICTION ON List<?>:");\r
        System.out.println("  - You CANNOT add any object into a 'List<?>' because the compiler does not know what type the list actually holds!");\r
        System.out.println("  - If it let you add a String to a List<?> that was actually instantiated as List<Integer>, type safety would shatter.");\r
        System.out.println("  - The only literal you can ever add to List<?> is 'null'.");\r
\r
        System.out.println("\\n==========================================================================");\r
    }\r
}`,l=`================================================================================\r
JAVA CORE TUTORIAL - QUICK REVISION GUIDE\r
Module 006_004: Wildcards & The PECS Principle\r
Topic 3: Unbounded Wildcard (List<?>)\r
Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
================================================================================\r
\r
1. UNBOUNDED WILDCARD RULES:\r
   - 'List<?>': universal read-only supertype.\r
   - Elements can be read safely as 'Object'.\r
   - CANNOT add any objects (compile error).\r
   - 'list.add(null)' is the ONLY allowed insertion.\r
\r
================================================================================\r
Classroom Practice: Barrackpore Academy | Mentor: Sukanta Hui\r
================================================================================`,i=[{question:`Why does calling 'list.add("hello")' on a variable of type 'List<?>' fail compilation, while 'list.add(null)' compiles successfully?`,shortAnswer:"Because '?' represents an unknown type. If 'list' was passed a 'List<Integer>', adding a String would corrupt the list. Therefore, the compiler prohibits adding ANY object reference to 'List<?>'. The literal 'null' is the sole exception because 'null' represents the absence of a value and is a valid member of all reference types in Java.",explanation:"Fundamental type-safety invariant of unbounded wildcards.",hint:"Compiler doesn't know the exact type so it blocks all object insertions; only 'null' is permitted.",level:"Intermediate",codeExample:"List<?> list = new ArrayList<Integer>(); list.add(null); // OK; list.add(10); // COMPILE ERROR"}];function y(){return e.jsxs("div",{className:"space-y-12 px-4 md:px-8 py-8 text-slate-200 bg-slate-900 min-h-screen",children:[e.jsxs("header",{className:"space-y-4 border-b border-slate-800 pb-6",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"px-3 py-1 bg-sky-500/10 text-sky-400 border border-sky-500/20 text-xs font-semibold rounded-full uppercase tracking-wider",children:"Module 006_004 · Topic 3"}),e.jsx("span",{className:"px-3 py-1 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-xs font-semibold rounded-full",children:"Unbounded Wildcard"})]}),e.jsxs("h1",{className:"text-3xl md:text-4xl font-extrabold text-white tracking-tight",children:["Unbounded Wildcard (",e.jsx("code",{className:"text-emerald-400 font-mono",children:"List<?>"}),"): Universal Subtyping & Read-Only Rules"]}),e.jsxs("p",{className:"text-base md:text-lg text-slate-400 leading-relaxed max-w-4xl",children:["Understand wildcard write restrictions: discovering why ",e.jsx("code",{className:"text-emerald-300 font-mono",children:"List<?>"})," permits reading elements as Objects but blocks all insertions except literal ",e.jsx("code",{className:"text-rose-400 font-mono",children:"null"}),"."]})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsxs("h2",{className:"text-2xl font-bold text-emerald-400 flex items-center gap-2",children:[e.jsx("span",{children:"💻"})," Hands-On Java Demo Code"]}),e.jsx(t,{fileModule:r,title:"UnboundedWildcardReadOnlyDemo.java",highlightLines:[7,10,13,14,15,20,21,22]})]}),e.jsx("section",{className:"space-y-4",children:e.jsx(n,{title:"Unbounded Wildcard FAQs",questions:i})}),e.jsx("section",{className:"space-y-4",children:e.jsx(a,{content:l,title:"Module 006_004 Topic 3: Unbounded Wildcard",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Printable Note",downloadFileName:"006_004_topic3_unbounded_wildcard_note.txt"})}),e.jsx(s,{note:"If someone hands you a box labeled 'Unknown Contents' (List<?>), you are allowed to look inside (read), but you aren't allowed to put anything in (write), because you might put an apple into an electronics box! Only null is allowed! — Sukanta Hui"})]})}export{y as default};
