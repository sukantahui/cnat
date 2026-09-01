import{j as e}from"./vendor-react-core-Doz9nIC6.js";import{J as n}from"./JavaFileLoader-BfBG3xz_.js";import{F as t}from"./FAQTemplate-BHhlgA96.js";import{P as r}from"./PlainTextPrint-C08xhKA4.js";import{T as a}from"./TeacherSukantaHui-CEPuAfsb.js";import"./JavaCodeBlock-BwsLxS3r.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-DGCamHnX.js";const s=`/**\r
 * Java Core Tutorial - Module 003_003: Wrapper Classes, Autoboxing & Number Parsing\r
 * Topic 10: Parsing Strings to Primitives: parseInt, parseDouble, parseBoolean\r
 * Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
 */\r
\r
package com.coderaccotax.javatutorial.wrappers;\r
\r
public class ParsingStringsToPrimitivesDemo {\r
\r
    public static void main(String[] args) {\r
        System.out.println("==========================================================================");\r
        System.out.println(" TOPIC 10: PARSING STRINGS TO PRIMITIVES - BARRACKPORE");\r
        System.out.println("==========================================================================\\n");\r
\r
        // 1. Parsing Integers:\r
        int age = Integer.parseInt("25");\r
        System.out.println("  Integer.parseInt("25")       : " + age);\r
\r
        // 2. Parsing Floating-Point Decimals:\r
        double fee = Double.parseDouble("45000.75");\r
        System.out.println("  Double.parseDouble("45000.75") : " + fee);\r
\r
        // 3. Parsing Booleans:\r
        boolean active = Boolean.parseBoolean("true");\r
        boolean invalidBool = Boolean.parseBoolean("anythingElse"); // Any non-"true" string returns false!\r
        System.out.println("  Boolean.parseBoolean("true")  : " + active);\r
        System.out.println("  Boolean.parseBoolean("xyz")   : " + invalidBool + " (Defaults to false without exception!)");\r
\r
        // 4. Distinction: 'parseInt()' vs 'valueOf()':\r
        int primitiveInt = Integer.parseInt("100");     // Returns primitive 'int'\r
        Integer wrapperInt = Integer.valueOf("100");   // Returns wrapper 'Integer' object from cache\r
\r
        System.out.println("\\n>>> parseInt() vs valueOf():");\r
        System.out.println("  Integer.parseInt("100") -> Returns primitive int (Stack)");\r
        System.out.println("  Integer.valueOf("100")  -> Returns Integer object (Heap/Cache)");\r
\r
        System.out.println("\\n==========================================================================");\r
    }\r
}`,i=`================================================================================\r
JAVA CORE TUTORIAL - QUICK REVISION GUIDE\r
Module 003_003: Wrapper Classes & Autoboxing\r
Topic 10: Parsing Strings to Primitives\r
Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
================================================================================\r
\r
1. PARSING METHODS:\r
   - 'Integer.parseInt(str)'    → Returns primitive 'int'.\r
   - 'Double.parseDouble(str)'  → Returns primitive 'double'.\r
   - 'Boolean.parseBoolean(str)'→ Returns 'true' (case-insensitive) or 'false'.\r
   - 'Integer.valueOf(str)'     → Returns cached 'Integer' object.\r
\r
================================================================================\r
Classroom Practice: Barrackpore Academy | Mentor: Sukanta Hui\r
================================================================================`,o=[{question:"What is the technical difference between 'Integer.parseInt(str)' and 'Integer.valueOf(str)'?",shortAnswer:"'Integer.parseInt(str)' returns a primitive 'int' directly. 'Integer.valueOf(str)' returns an 'Integer' wrapper object and leverages the internal IntegerCache pool for memory optimization.",explanation:"Use parseInt() when assigning to primitive 'int', and valueOf() when populating Collections or working with wrapper objects.",hint:"parseInt returns primitive int; valueOf returns wrapper Integer object.",level:"Beginner",codeExample:`int a = Integer.parseInt("42");
Integer b = Integer.valueOf("42");`}];function I(){return e.jsxs("div",{className:"space-y-12 px-4 md:px-8 py-8 text-slate-200 bg-slate-900 min-h-screen",children:[e.jsxs("header",{className:"space-y-4 border-b border-slate-800 pb-6",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"px-3 py-1 bg-sky-500/10 text-sky-400 border border-sky-500/20 text-xs font-semibold rounded-full uppercase tracking-wider",children:"Module 003_003 · Topic 10"}),e.jsx("span",{className:"px-3 py-1 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-xs font-semibold rounded-full",children:"String Parsing API"})]}),e.jsxs("h1",{className:"text-xl sm:text-2xl md:text-3xl font-bold text-white tracking-tight",children:["Parsing Strings to Primitives: ",e.jsx("code",{className:"text-emerald-400 font-mono",children:"parseInt()"}),", ",e.jsx("code",{className:"text-sky-400 font-mono",children:"parseDouble()"})," & ",e.jsx("code",{className:"text-amber-400 font-mono",children:"parseBoolean()"})]}),e.jsxs("p",{className:"text-base md:text-lg text-slate-400 leading-relaxed max-w-4xl",children:["Learn how to convert raw string inputs from web requests into strongly-typed primitives: understanding ",e.jsx("code",{className:"text-emerald-300 font-mono",children:"parseInt()"})," versus ",e.jsx("code",{className:"text-indigo-300 font-mono",children:"valueOf()"}),"."]})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsxs("h2",{className:"text-2xl font-bold text-emerald-400 flex items-center gap-2",children:[e.jsx("span",{children:"💻"})," Hands-On Java Demo Code"]}),e.jsx(n,{fileModule:s,title:"ParsingStringsToPrimitivesDemo.java",highlightLines:[7,14,18,22,27,28]})]}),e.jsx("section",{className:"space-y-4",children:e.jsx(t,{title:"String Parsing FAQs",questions:o})}),e.jsx("section",{className:"space-y-4",children:e.jsx(r,{content:i,title:"Module 003_003 Topic 10: String to Primitive Parsing",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Printable Note",downloadFileName:"003_003_topic10_string_parsing_note.txt"})}),e.jsx(a,{note:"If you need a primitive int, call 'Integer.parseInt()'. If you need an object for a List, call 'Integer.valueOf()'! — Sukanta Hui"})]})}export{I as default};
