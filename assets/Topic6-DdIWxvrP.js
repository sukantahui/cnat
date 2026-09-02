import{j as e}from"./vendor-react-core-Doz9nIC6.js";import{J as n}from"./JavaFileLoader-BfBG3xz_.js";import{F as s}from"./FAQTemplate-BHhlgA96.js";import{P as a}from"./PlainTextPrint-C08xhKA4.js";import{T as t}from"./TeacherSukantaHui-RpFLNJ5A.js";import"./JavaCodeBlock-BwsLxS3r.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-wprqVFW_.js";const o=`/**\r
 * Java Core Tutorial - Module 009_001: Lambda Expressions & Lexical Scoping\r
 * Topic 6: Anonymous Inner Classes vs Lambdas: Bytecode Generation (invokedynamic) & Memory\r
 * Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
 */\r
\r
package com.coderaccotax.javatutorial.functional;\r
\r
public class AnonymousInnerClassVsLambdaBytecodeDemo {\r
\r
    public static void main(String[] args) {\r
        System.out.println("==========================================================================");\r
        System.out.println(" TOPIC 6: ANONYMOUS INNER CLASS vs LAMBDA BYTECODE - BARRACKPORE");\r
        System.out.println("==========================================================================\\n");\r
\r
        System.out.println("+-------------------+-----------------------------------+-----------------------------------+");\r
        System.out.println("| Feature           | Anonymous Inner Class             | Lambda Expression (Java 8+)       |");\r
        System.out.println("+-------------------+-----------------------------------+-----------------------------------+");\r
        System.out.println("| Bytecode / Files  | Generates a separate .class file  | NO separate .class file!          |");\r
        System.out.println("|                   | (e.g. 'Outer$1.class' on disk)    | Compiled via 'invokedynamic'      |");\r
        System.out.println("| Object Allocation | 'new Outer$1()' allocated every   | Reused as singleton / CallSite if |");\r
        System.out.println("|                   | time it is instantiated           | non-capturing (Zero garbage!)     |");\r
        System.out.println("| 'this' Reference  | Points to the Anonymous Object    | Points to the ENCLOSING class     |");\r
        System.out.println("| Target Types      | Classes, Abstract Classes,        | SAM Functional Interfaces ONLY    |");\r
        System.out.println("|                   | Multi-method Interfaces           |                                   |");\r
        System.out.println("+-------------------+-----------------------------------+-----------------------------------+");\r
        System.out.println();\r
        System.out.println(">>> THE 'invokedynamic' BYTECODE INSTRUCTION:");\r
        System.out.println("  - Java 8 lambdas do NOT generate synthetic '$1.class' files.");\r
        System.out.println("  - Instead, 'javac' emits an 'invokedynamic' (INDY) bytecode instruction linking to 'LambdaMetafactory'.");\r
        System.out.println("  - The JVM dynamically links and spins an optimized CallSite at runtime with zero disk I/O!");\r
\r
        System.out.println("\\n==========================================================================");\r
    }\r
}`,i=`================================================================================\r
JAVA CORE TUTORIAL - QUICK REVISION GUIDE\r
Module 009_001: Lambda Expressions & Lexical Scoping\r
Topic 6: Anonymous Classes vs Lambdas\r
Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
================================================================================\r
\r
1. ANONYMOUS CLASSES vs LAMBDAS:\r
   - Anonymous class creates 'Outer$1.class' file on disk.\r
   - Lambda generates 'invokedynamic' bytecode (no extra .class files).\r
   - Non-capturing lambdas are cached as singletons (0 allocation).\r
   - Anonymous 'this' = anonymous object; Lambda 'this' = enclosing outer object.\r
\r
================================================================================\r
Classroom Practice: Barrackpore Academy | Mentor: Sukanta Hui\r
================================================================================`,r=[{question:"How do Lambda Expressions differ from Anonymous Inner Classes in bytecode generation, memory allocation, and 'this' scope?",shortAnswer:"1. 'Bytecode & Class Files': Anonymous Inner Classes create separate physical '.class' files (e.g. 'Outer$1.class') at compile time and allocate a new object on heap each time. Lambdas emit a single 'invokedynamic' bytecode instruction that uses 'LambdaMetafactory' at runtime to generate an in-memory CallSite without creating class files on disk. 2. 'Memory Allocation': Non-capturing lambdas are cached and reused as singletons with zero allocation overhead. 3. 'Scope of this': Inside an Anonymous Inner Class, 'this' refers to the anonymous class instance itself; inside a Lambda, 'this' is lexically scoped and refers to the ENCLOSING outer class instance.",explanation:"Under-the-hood JVM mechanics comparing lambdas and anonymous inner classes.",hint:"Lambdas use invokedynamic without generating .class files, can be cached as singletons, and their 'this' refers to the enclosing outer class.",level:"Advanced",codeExample:"// Lambda: invokedynamic → LambdaMetafactory (Zero Outer$1.class files)"}];function h(){return e.jsxs("div",{className:"space-y-12 px-4 md:px-8 py-8 text-slate-200 bg-slate-900 min-h-screen",children:[e.jsxs("header",{className:"space-y-4 border-b border-slate-800 pb-6",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"px-3 py-1 bg-sky-500/10 text-sky-400 border border-sky-500/20 text-xs font-semibold rounded-full uppercase tracking-wider",children:"Module 009_001 · Topic 6"}),e.jsx("span",{className:"px-3 py-1 bg-purple-500/10 text-purple-400 border border-purple-500/20 text-xs font-semibold rounded-full",children:"Bytecode & invokedynamic"})]}),e.jsxs("h1",{className:"text-xl sm:text-2xl md:text-3xl font-bold text-white tracking-tight",children:["Anonymous Classes vs ",e.jsx("code",{className:"text-purple-400 font-mono",children:"Lambdas"}),": Bytecode & ",e.jsx("code",{className:"text-emerald-400 font-mono",children:"invokedynamic"})]}),e.jsxs("p",{className:"text-base md:text-lg text-slate-400 leading-relaxed max-w-4xl",children:["Examine JVM internals: comparing legacy ",e.jsx("code",{className:"text-rose-300 font-mono",children:"Outer$1.class"})," compilation with modern ",e.jsx("code",{className:"text-emerald-300 font-mono",children:"invokedynamic"})," CallSites, singleton caching, and memory optimization."]})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsxs("h2",{className:"text-2xl font-bold text-emerald-400 flex items-center gap-2",children:[e.jsx("span",{children:"💻"})," Hands-On Java Demo Code"]}),e.jsx(n,{fileModule:o,title:"AnonymousInnerClassVsLambdaBytecodeDemo.java",highlightLines:[7,10,13,14,15,16,17,18,19,20,24,25]})]}),e.jsx("section",{className:"space-y-4",children:e.jsx(s,{title:"Bytecode & invokedynamic FAQs",questions:r})}),e.jsx("section",{className:"space-y-4",children:e.jsx(a,{content:i,title:"Module 009_001 Topic 6: Anonymous Classes vs Lambdas",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Printable Note",downloadFileName:"009_001_topic6_anonymous_vs_lambdas_note.txt"})}),e.jsx(t,{note:"Don't think of a Lambda as just short syntax for an Anonymous Class! Under the hood, lambdas use 'invokedynamic' to execute directly without cluttering your hard drive with synthetic '$1.class' files or creating unnecessary heap objects! — Sukanta Hui"})]})}export{h as default};
