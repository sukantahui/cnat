import{j as e}from"./vendor-react-core-Doz9nIC6.js";import{J as t}from"./JavaFileLoader-BfBG3xz_.js";import{F as n}from"./FAQTemplate-CkSqDH4B.js";import{P as i}from"./PlainTextPrint-C08xhKA4.js";import{T as s}from"./TeacherSukantaHui-CyIG3xbg.js";import"./JavaCodeBlock-BwsLxS3r.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-CIaKtAt4.js";const a=`/**\r
 * Java Core Tutorial - Module 006_005: Type Erasure & Generics Limitations\r
 * Topic 9: Restriction 4: Cannot Use 'instanceof' or Casts with Parameterized Types\r
 * Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
 */\r
\r
package com.coderaccotax.javatutorial.generics;\r
\r
import java.util.ArrayList;\r
import java.util.List;\r
\r
public class Restriction4NoInstanceofParameterizedTypesDemo {\r
\r
    public static void inspectUnknownObject(Object obj) {\r
        // ILLEGAL SYNTAX (Will NOT compile):\r
        // if (obj instanceof List<String>) { } // COMPILE ERROR: Cannot perform instanceof check against parameterized type List<String>!\r
\r
        // LEGAL SYNTAX 1: Check against unbounded wildcard List<?> (Reifiable):\r
        if (obj instanceof List<?> list) {\r
            System.out.println("  [VALIDATED] Object is an instance of List (checked via List<?>): Size=" + list.size());\r
        }\r
\r
        // LEGAL SYNTAX 2: Raw type check:\r
        if (obj instanceof List) {\r
            System.out.println("  [VALIDATED] Object is an instance of raw List.");\r
        }\r
    }\r
\r
    public static void main(String[] args) {\r
        System.out.println("==========================================================================");\r
        System.out.println(" TOPIC 9: RESTRICTION 4 - NO instanceof List<String> - BARRACKPORE");\r
        System.out.println("==========================================================================\\n");\r
\r
        List<String> studentList = new ArrayList<>(List.of("Swadeep", "Tuhina"));\r
        inspectUnknownObject(studentList);\r
\r
        System.out.println("\\n>>> WHY 'instanceof List<String>' IS IMPOSSIBLE:");\r
        System.out.println("  1. Non-Reifiable Types: Types with erased parameters are 'non-reifiable' (not completely available at runtime).");\r
        System.out.println("  2. Erasure: At runtime, both 'List<String>' and 'List<Integer>' are just 'ArrayList'.");\r
        System.out.println("  3. The JVM bytecode instruction 'instanceof' has no way to check if the elements inside are Strings!");\r
\r
        System.out.println("\\n==========================================================================");\r
    }\r
}`,r=`================================================================================\r
JAVA CORE TUTORIAL - QUICK REVISION GUIDE\r
Module 006_005: Type Erasure & Generics Limitations\r
Topic 9: Restriction 4 - No Parameterized instanceof\r
Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
================================================================================\r
\r
1. RESTRICTION 4: NO PARAMETERIZED INSTANCEOF:\r
   - 'instanceof List<String>' is ILLEGAL.\r
   - Generic types are non-reifiable.\r
   - JVM cannot inspect element types at runtime.\r
   - Valid checks: 'instanceof List<?>' or 'instanceof List'.\r
\r
================================================================================\r
Classroom Practice: Barrackpore Academy | Mentor: Sukanta Hui\r
================================================================================`,o=[{question:"Why does 'if (obj instanceof List<String>)' fail compilation in Java, and what is the valid wildcard alternative?",shortAnswer:"'List<String>' is a 'non-reifiable' type whose type argument '<String>' is erased at compile time. At runtime, the JVM only knows the object is a 'List' and cannot verify whether its elements are Strings. Therefore, 'instanceof List<String>' is illegal. The valid alternative is checking against the unbounded wildcard 'if (obj instanceof List<?>)' or raw 'if (obj instanceof List)'.",explanation:"Reifiable vs Non-Reifiable type rules in Java.",hint:"Type information is erased at runtime; check against 'List<?>' or raw 'List' instead.",level:"Intermediate",codeExample:"if (obj instanceof List<?> list) { ... } // Legal pattern matching check"}];function x(){return e.jsxs("div",{className:"space-y-12 px-4 md:px-8 py-8 text-slate-200 bg-slate-900 min-h-screen",children:[e.jsxs("header",{className:"space-y-4 border-b border-slate-800 pb-6",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"px-3 py-1 bg-sky-500/10 text-sky-400 border border-sky-500/20 text-xs font-semibold rounded-full uppercase tracking-wider",children:"Module 006_005 · Topic 9"}),e.jsx("span",{className:"px-3 py-1 bg-rose-500/10 text-rose-400 border border-rose-500/20 text-xs font-semibold rounded-full",children:"Restriction 4"})]}),e.jsxs("h1",{className:"text-3xl md:text-4xl font-extrabold text-white tracking-tight",children:["Restriction 4: Cannot Use ",e.jsx("code",{className:"text-rose-400 font-mono",children:"instanceof"})," with Parameterized Types (",e.jsx("code",{className:"text-rose-400 font-mono",children:"List<String>"}),")"]}),e.jsxs("p",{className:"text-base md:text-lg text-slate-400 leading-relaxed max-w-4xl",children:["Master reifiability constraints: understanding why non-reifiable parameterized types cannot be tested with ",e.jsx("code",{className:"text-rose-400 font-mono",children:"instanceof"})," and applying ",e.jsx("code",{className:"text-emerald-300 font-mono",children:"List<?>"})," checks."]})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsxs("h2",{className:"text-2xl font-bold text-emerald-400 flex items-center gap-2",children:[e.jsx("span",{children:"💻"})," Hands-On Java Demo Code"]}),e.jsx(t,{fileModule:a,title:"Restriction4NoInstanceofParameterizedTypesDemo.java",highlightLines:[7,10,14,15,16,19,20]})]}),e.jsx("section",{className:"space-y-4",children:e.jsx(n,{title:"Instanceof FAQs",questions:o})}),e.jsx("section",{className:"space-y-4",children:e.jsx(i,{content:r,title:"Module 006_005 Topic 9: Restriction 4 - No Instanceof",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Printable Note",downloadFileName:"006_005_topic9_restriction4_no_instanceof_note.txt"})}),e.jsx(s,{note:"At runtime, the JVM has no idea if a list was created as List<String> or List<Integer>! That's why 'obj instanceof List<String>' is illegal! Always write 'obj instanceof List<?>' instead! — Sukanta Hui"})]})}export{x as default};
