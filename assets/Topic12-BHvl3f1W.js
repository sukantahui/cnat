import{j as e}from"./vendor-react-core-Doz9nIC6.js";import{J as n}from"./JavaFileLoader-BfBG3xz_.js";import{F as t}from"./FAQTemplate-BHhlgA96.js";import{P as a}from"./PlainTextPrint-C08xhKA4.js";import{T as i}from"./TeacherSukantaHui-DerPxfxp.js";import"./JavaCodeBlock-BwsLxS3r.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-CH1iX9C8.js";const o=`/**\r
 * Java Core Tutorial - Module 003_008: Java Enums & Specialized Methods\r
 * Topic 12: Why Enum is the Ultimate Thread-Safe Singleton in Java (Capstone)\r
 * Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
 */\r
\r
package com.coderaccotax.javatutorial.enums;\r
\r
import java.io.*;\r
\r
// The Gold-Standard Thread-Safe, Serialization-Proof, Reflection-Proof Singleton:\r
public enum DatabaseConnectionPoolSingleton {\r
    INSTANCE;\r
\r
    private int activeConnections = 0;\r
    private final String dbUrl = "jdbc:postgresql://localhost:5432/coderaccotax_db";\r
\r
    public void executeQuery(String sql) {\r
        activeConnections++;\r
        System.out.printf("  [DB POOL INSTANCE] Executing: '%s' | Active Connections: %d%n", sql, activeConnections);\r
    }\r
\r
    public static void main(String[] args) throws Exception {\r
        System.out.println("==========================================================================");\r
        System.out.println(" TOPIC 12: ENUM SINGLETON ARCHITECTURE CAPSTONE - BARRACKPORE");\r
        System.out.println("==========================================================================\\n");\r
\r
        // 1. Accessing the singleton instance:\r
        DatabaseConnectionPoolSingleton pool = DatabaseConnectionPoolSingleton.INSTANCE;\r
        pool.executeQuery("SELECT * FROM student_admissions WHERE center = 'Barrackpore'");\r
\r
        System.out.println("\\n>>> The 4 Pillars of Enum Singleton Invulnerability (Effective Java Item 3):");\r
        System.out.println("  1. 100% THREAD-SAFE: Class-loading initialization is guaranteed thread-safe by the JVM without volatile or locks.");\r
        System.out.println("  2. SERIALIZATION-PROOF: Java serialization handles enums specially; readObject() never creates duplicate instances!");\r
        System.out.println("  3. REFLECTION-PROOF: Constructor.newInstance() explicitly throws IllegalArgumentException if used on an Enum!");\r
        System.out.println("  4. ZERO BOILERPLATE: 3 lines of code replace 25 lines of double-checked locking boilerplate.");\r
\r
        System.out.println("\\n==========================================================================");\r
        System.out.println(" MODULE 003_008 JAVA ENUMS & SPECIALIZED METHODS 100% COMPLETE!");\r
        System.out.println(" SEGMENT 3: STRINGS, WRAPPERS & CORE UTILITIES 100% COMPLETE!");\r
        System.out.println("==========================================================================");\r
    }\r
}`,r=`================================================================================\r
JAVA CORE TUTORIAL - QUICK REVISION GUIDE\r
Module 003_008: Java Enums & Specialized Methods\r
Topic 12: Enum Singleton Capstone\r
Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
================================================================================\r
\r
1. MODULE 003_008 SUMMARY:\r
   - Enums eliminate brittle int constants.\r
   - Enums implicitly extend java.lang.Enum and are final.\r
   - Safe to compare with '=='.\r
   - Built-in methods: name(), ordinal(), values(), valueOf().\r
   - Enums support fields, constructors, and constant-specific abstract methods.\r
   - EnumSet (bit-vector) and EnumMap (array-indexed) offer maximum performance.\r
   - Single-element Enum is the ultimate thread-safe, serialization-proof Singleton.\r
\r
================================================================================\r
Classroom Practice: Barrackpore Academy | Mentor: Sukanta Hui\r
================================================================================`,s=[{question:"Why does Joshua Bloch (author of Effective Java) state: 'A single-element enum type is the best way to implement a singleton'?",shortAnswer:"Because an Enum Singleton provides absolute protection against all 3 classic singleton destruction attacks for free: 1. Thread-safety (JVM classloader guarantees single initialization). 2. Serialization (Java serialization guarantees identical instance return). 3. Reflection attacks (Constructor.newInstance() throws an exception when called on enums).",explanation:"Replaces vulnerable double-checked locking with 3 clean lines of code.",hint:"Immune to multithreading race conditions, serialization duplication, and reflection attacks.",level:"Advanced",codeExample:"public enum Singleton { INSTANCE; public void doWork() {} }"}];function E(){return e.jsxs("div",{className:"space-y-12 px-4 md:px-8 py-8 text-slate-200 bg-slate-900 min-h-screen",children:[e.jsxs("header",{className:"space-y-4 border-b border-slate-800 pb-6",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"px-3 py-1 bg-sky-500/10 text-sky-400 border border-sky-500/20 text-xs font-semibold rounded-full uppercase tracking-wider",children:"Module 003_008 · Topic 12"}),e.jsx("span",{className:"px-3 py-1 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-xs font-semibold rounded-full",children:"Singleton Capstone"})]}),e.jsxs("h1",{className:"text-xl sm:text-2xl md:text-3xl font-bold text-white tracking-tight",children:["Why Enum is the Ultimate Thread-Safe ",e.jsx("code",{className:"text-emerald-400 font-mono",children:"Singleton"})," in Java (Capstone)"]}),e.jsx("p",{className:"text-base md:text-lg text-slate-400 leading-relaxed max-w-4xl",children:"Master the highest standard of enterprise singleton architecture: exploring why single-element enums provide impenetrable defense against multithreading races, serialization duplication, and reflection attacks."})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsxs("h2",{className:"text-2xl font-bold text-emerald-400 flex items-center gap-2",children:[e.jsx("span",{children:"💻"})," Hands-On Java Demo Code"]}),e.jsx(n,{fileModule:o,title:"DatabaseConnectionPoolSingleton.java",highlightLines:[7,10,11,14,15,23,24,27,28,29,30]})]}),e.jsx("section",{className:"space-y-4",children:e.jsx(t,{title:"Enum Singleton FAQs",questions:s})}),e.jsx("section",{className:"space-y-4",children:e.jsx(a,{content:r,title:"Module 003_008 Topic 12: Enum Singleton Capstone",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Printable Note",downloadFileName:"003_008_topic12_enum_singleton_note.txt"})}),e.jsx(i,{note:"Congratulations! You have completed Module 003_008 and ALL OF SEGMENT 3! You have mastered Java Strings, StringBuilders, Wrapper Classes, Math & BigDecimals, java.time, Regex Pattern & Matcher, Nested Classes, and Java Enums! — Sukanta Hui"})]})}export{E as default};
