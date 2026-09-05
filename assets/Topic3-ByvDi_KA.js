import{j as e}from"./vendor-react-core-Doz9nIC6.js";import{J as n}from"./JavaFileLoader-BfBG3xz_.js";import{F as t}from"./FAQTemplate-BHhlgA96.js";import{P as a}from"./PlainTextPrint-C08xhKA4.js";import{T as i}from"./TeacherSukantaHui-DerPxfxp.js";import"./JavaCodeBlock-BwsLxS3r.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-CH1iX9C8.js";const r=`/**\r
 * Java Core Tutorial - Module 012_001: GoF Design Patterns\r
 * Topic 3: The Singleton Pattern - Thread-Safe, Bill Pugh & Enum\r
 * Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
 */\r
\r
package com.coderaccotax.javatutorial.patterns;\r
\r
public class SingletonPatternVariationsDemo {\r
\r
    // 1. BILL PUGH SINGLETON (Lazy, Thread-Safe, Zero Synchronization Overhead!):\r
    public static class BillPughSingleton {\r
        private BillPughSingleton() {\r
            System.out.println("   [BILL PUGH]: Initialized single instance on demand!");\r
        }\r
\r
        // Inner static class is NOT loaded until getInstance() is invoked:\r
        private static class InstanceHolder {\r
            private static final BillPughSingleton INSTANCE = new BillPughSingleton();\r
        }\r
\r
        public static BillPughSingleton getInstance() {\r
            return InstanceHolder.INSTANCE;\r
        }\r
    }\r
\r
    // 2. ENUM SINGLETON (Joshua Bloch - Effective Java Item 3: 100% Reflection & Serialization Safe!):\r
    public enum EnumSingleton {\r
        INSTANCE;\r
\r
        public void performAcademyTask(String task) {\r
            System.out.println("   [ENUM SINGLETON]: Executing " + task + " across Barrackpore Hub.");\r
        }\r
    }\r
\r
    public static void main(String[] args) {\r
        System.out.println("==========================================================================");\r
        System.out.println(" TOPIC 3: SINGLETON PATTERN VARIATIONS - BARRACKPORE ACADEMY");\r
        System.out.println("==========================================================================\\n");\r
\r
        System.out.println(">>> 1. TESTING BILL PUGH SINGLETON:");\r
        BillPughSingleton s1 = BillPughSingleton.getInstance();\r
        BillPughSingleton s2 = BillPughSingleton.getInstance();\r
        System.out.println("  - Same instance? " + (s1 == s2)); // true!\r
\r
        System.out.println("\\n>>> 2. TESTING ENUM SINGLETON:");\r
        EnumSingleton.INSTANCE.performAcademyTask("Fee Audit");\r
        System.out.println("  - Enum singletons are immune to Reflection instantiation and Serialization duplicate bugs!");\r
\r
        System.out.println("\\n==========================================================================");\r
    }\r
}\r
`,s=`================================================================================\r
JAVA CORE TUTORIAL - QUICK REVISION GUIDE\r
Module 012_001: GoF Design Patterns\r
Topic 3: Singleton Pattern Variations\r
Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
================================================================================\r
\r
1. TOP SINGLETON APPROACHES:\r
   - Bill Pugh Holder Idiom : Uses JVM ClassLoader guarantees for lazy, lock-free thread safety.\r
   - Enum Singleton         : Recommended by Joshua Bloch; immune to reflection and serialization hacks.\r
\r
2. DOUBLE-CHECKED LOCKING PITFALL:\r
   - Must mark the instance field 'private static volatile Singleton instance;' to prevent instruction reordering bugs!\r
\r
================================================================================\r
Classroom Practice: Barrackpore Academy | Mentor: Sukanta Hui\r
================================================================================\r
`,o=[{question:"Why is an Enum Singleton considered the most robust Singleton implementation in Java according to Joshua Bloch?",shortAnswer:"Because the JVM inherently guarantees that enum constants are instantiated only once, is automatically thread-safe, and provides built-in protection against both Reflection attacks (Constructor.newInstance() throws IllegalArgumentException) and Serialization duplication bugs.",explanation:"Item 3 in Effective Java by Joshua Bloch.",hint:"Immune to Reflection instantiation attacks and Serialization duplication.",level:"Intermediate",codeExample:"public enum AcademyConfig { INSTANCE; }"},{question:"Why does the Bill Pugh Singleton idiom provide lazy loading without needing synchronized methods?",shortAnswer:"Because the inner static helper class (InstanceHolder) is not loaded into memory by the JVM ClassLoader until the getInstance() method is explicitly called, and the JVM's class initialization phase (<clinit>) is inherently thread-safe.",explanation:"Leverages JVM ClassLoader initialization guarantees.",hint:"The inner static class is loaded only when getInstance() is called.",level:"Advanced",codeExample:"private static class Holder { static final Singleton INSTANCE = new Singleton(); }"}];function S(){return e.jsxs("div",{className:"space-y-12 px-4 md:px-8 py-8 text-slate-200 bg-slate-900 min-h-screen",children:[e.jsxs("header",{className:"space-y-4 border-b border-slate-800 pb-6",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"px-3 py-1 bg-sky-500/10 text-sky-400 border border-sky-500/20 text-xs font-semibold rounded-full uppercase tracking-wider",children:"Module 012_001 · Topic 3"}),e.jsx("span",{className:"px-3 py-1 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-xs font-semibold rounded-full",children:"GoF Design Patterns"})]}),e.jsxs("h1",{className:"text-xl sm:text-2xl md:text-3xl font-bold text-white tracking-tight",children:["The Singleton Pattern: ",e.jsx("code",{className:"text-emerald-400 font-mono",children:"Thread-Safe, Bill Pugh & Enum"})]}),e.jsx("p",{className:"text-base md:text-lg text-slate-400 leading-relaxed max-w-4xl",children:"Guaranteed single instances: mastering double-checked locking, the Bill Pugh inner-static-helper idiom, and Joshua Bloch's Enum Singleton."})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsxs("h2",{className:"text-2xl font-bold text-emerald-400 flex items-center gap-2",children:[e.jsx("span",{children:"💻"})," Hands-On Java Demo Code"]}),e.jsx(n,{fileModule:r,title:"SingletonPatternVariationsDemo.java",highlightLines:[18,25,34,43]})]}),e.jsx("section",{className:"space-y-4",children:e.jsx(t,{title:"GoF Design Patterns FAQs",questions:o})}),e.jsx("section",{className:"space-y-4",children:e.jsx(a,{content:s,title:"Module 012_001 Topic 3: Singleton Pattern Variations",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Printable Note",downloadFileName:"012_001_topic3_singleton_pattern_variations_note.txt"})}),e.jsx(i,{note:"The Singleton pattern seems simple, but getting it 100% thread-safe without synchronization performance penalties is an interview classic! The Bill Pugh holder idiom and Enum singletons are the industry gold standards! — Sukanta Hui"})]})}export{S as default};
