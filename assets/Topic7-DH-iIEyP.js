import{j as e}from"./vendor-react-core-Doz9nIC6.js";import{J as t}from"./JavaFileLoader-BfBG3xz_.js";import{F as n}from"./FAQTemplate-BHhlgA96.js";import{P as r}from"./PlainTextPrint-C08xhKA4.js";import{T as a}from"./TeacherSukantaHui-RpFLNJ5A.js";import"./JavaCodeBlock-BwsLxS3r.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-wprqVFW_.js";const s=`/**\r
 * Java Core Tutorial - Module 003_008: Java Enums & Specialized Methods\r
 * Topic 7: Why Enum Constructors Are Strictly Private by Default (Singleton Integrity)\r
 * Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
 */\r
\r
package com.coderaccotax.javatutorial.enums;\r
\r
public class EnumPrivateConstructorIntegrityDemo {\r
\r
    public enum ServerEnvironment {\r
        LOCAL("http://localhost:8080"),\r
        STAGING("https://staging.coderaccotax.com"),\r
        PRODUCTION("https://api.coderaccotax.com");\r
\r
        private final String baseUrl;\r
\r
        // Enum constructors are ALWAYS implicitly private.\r
        // Explicit 'public' or 'protected' modifiers cause a COMPILE ERROR!\r
        private ServerEnvironment(String baseUrl) {\r
            this.baseUrl = baseUrl;\r
        }\r
\r
        public String getBaseUrl() { return baseUrl; }\r
    }\r
\r
    public static void main(String[] args) {\r
        System.out.println("==========================================================================");\r
        System.out.println(" TOPIC 7: ENUM PRIVATE CONSTRUCTOR INTEGRITY - BARRACKPORE");\r
        System.out.println("==========================================================================\\n");\r
\r
        System.out.println(">>> 1. Why are Enum Constructors strictly PRIVATE?");\r
        System.out.println("  - To guarantee that NO new instances can ever be created outside the declared constants.");\r
        System.out.println("  - The JVM instantiates the constants exactly once during class loading.");\r
        System.out.println("  - Writing 'new ServerEnvironment("...")' is strictly forbidden by the compiler!");\r
\r
        System.out.println("\\n>>> 2. Active Environment Configurations:");\r
        for (ServerEnvironment env : ServerEnvironment.values()) {\r
            System.out.printf("  Environment: %-12s | Base URL: %s%n", env.name(), env.getBaseUrl());\r
        }\r
\r
        System.out.println("\\n==========================================================================");\r
    }\r
}`,i=`================================================================================\r
JAVA CORE TUTORIAL - QUICK REVISION GUIDE\r
Module 003_008: Java Enums & Specialized Methods\r
Topic 7: Enum Private Constructor Integrity\r
Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
================================================================================\r
\r
1. CONSTRUCTOR INTEGRITY:\r
   - Always implicitly private.\r
   - 'public' or 'protected' causes a compiler error.\r
   - Instantiation via 'new' is completely prohibited.\r
   - Guarantees finite closed set of constants.\r
\r
================================================================================\r
Classroom Practice: Barrackpore Academy | Mentor: Sukanta Hui\r
================================================================================`,o=[{question:"Why does the Java language strictly forbid 'public' or 'protected' constructors in Enums?",shortAnswer:"To protect the finite set guarantee and singleton integrity of enum constants. If public constructors were permitted, external client code could invoke 'new MyEnum()' and create rogue instances at runtime, destroying compile-time type safety and reference equality guarantees.",explanation:"Even if you omit the access modifier, enum constructors are always package-private/private.",hint:"Prevents external code from creating new instances, preserving singleton integrity.",level:"Intermediate",codeExample:"// public MyEnum() {} // COMPILE ERROR: Modifier public not allowed here"}];function v(){return e.jsxs("div",{className:"space-y-12 px-4 md:px-8 py-8 text-slate-200 bg-slate-900 min-h-screen",children:[e.jsxs("header",{className:"space-y-4 border-b border-slate-800 pb-6",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"px-3 py-1 bg-sky-500/10 text-sky-400 border border-sky-500/20 text-xs font-semibold rounded-full uppercase tracking-wider",children:"Module 003_008 · Topic 7"}),e.jsx("span",{className:"px-3 py-1 bg-amber-500/10 text-amber-400 border border-amber-500/20 text-xs font-semibold rounded-full",children:"Constructor Security"})]}),e.jsx("h1",{className:"text-xl sm:text-2xl md:text-3xl font-bold text-white tracking-tight",children:"Why Enum Constructors Are Strictly Private by Default"}),e.jsxs("p",{className:"text-base md:text-lg text-slate-400 leading-relaxed max-w-4xl",children:["Understand JVM instance control: discovering why ",e.jsx("code",{className:"text-emerald-300 font-mono",children:"new MyEnum()"})," is illegal and how private constructors guarantee immutable singleton integrity."]})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsxs("h2",{className:"text-2xl font-bold text-emerald-400 flex items-center gap-2",children:[e.jsx("span",{children:"💻"})," Hands-On Java Demo Code"]}),e.jsx(t,{fileModule:s,title:"EnumPrivateConstructorIntegrityDemo.java",highlightLines:[7,10,11,12,17,18,19,29,30]})]}),e.jsx("section",{className:"space-y-4",children:e.jsx(n,{title:"Private Constructor FAQs",questions:o})}),e.jsx("section",{className:"space-y-4",children:e.jsx(r,{content:i,title:"Module 003_008 Topic 7: Enum Private Constructors",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Printable Note",downloadFileName:"003_008_topic7_enum_private_constructor_note.txt"})}),e.jsx(a,{note:"If you try to write 'public MyEnum()', the Java compiler will shout at you! Enums represent a closed set of instances instantiated strictly once by the JVM! — Sukanta Hui"})]})}export{v as default};
