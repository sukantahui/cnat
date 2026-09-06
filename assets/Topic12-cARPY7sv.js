import{j as e}from"./vendor-react-core-Doz9nIC6.js";import{J as a}from"./JavaFileLoader-BfBG3xz_.js";import{F as t}from"./FAQTemplate-BHhlgA96.js";import{P as s}from"./PlainTextPrint-C08xhKA4.js";import{T as n}from"./TeacherSukantaHui-DDN87fI5.js";import"./JavaCodeBlock-BwsLxS3r.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-DEsnU7fn.js";const r=`/**\r
 * Java Core Tutorial - Module 010_003: JVM Architecture, ClassLoaders & Bytecode Execution\r
 * Topic 12: The Parent-Delegation Model - Upward Request Flow\r
 * Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
 */\r
\r
package com.coderaccotax.javatutorial.jvm;\r
\r
public class ParentDelegationModelDemo {\r
\r
    public static void main(String[] args) {\r
        System.out.println("==========================================================================");\r
        System.out.println(" TOPIC 12: THE PARENT-DELEGATION MODEL - BARRACKPORE ACADEMY");\r
        System.out.println("==========================================================================\\n");\r
\r
        System.out.println(">>> HOW CLASS LOADING DELEGATION OPERATES STEP-BY-STEP:");\r
        System.out.println("  1. AppClassLoader receives request to load 'java.lang.String'.");\r
        System.out.println("  2. AppClassLoader checks its cache. If not found, delegates up to PlatformClassLoader.");\r
        System.out.println("  3. PlatformClassLoader checks cache. If not found, delegates up to BootstrapClassLoader.");\r
        System.out.println("  4. BootstrapClassLoader searches 'java.base' and finds 'java.lang.String'.");\r
        System.out.println("  5. BootstrapClassLoader loads and returns the Class object.");\r
        System.out.println("  6. AppClassLoader and PlatformClassLoader do NOT attempt to search locally!\\n");\r
\r
        System.out.println(">>> CORE BENEFITS OF PARENT-DELEGATION:");\r
        System.out.println("  - Single Namespace Guarantee : Prevents duplicate class definitions in memory.");\r
        System.out.println("  - Security Sandbox Protection: Ensures untrusted code cannot hijack core Java types.");\r
        System.out.println("==========================================================================");\r
    }\r
}\r
`,o=`================================================================================\r
JAVA CORE TUTORIAL - QUICK REVISION GUIDE\r
Module 010_003: JVM Architecture, ClassLoaders & Bytecode Execution\r
Topic 12: The Parent-Delegation Model\r
Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
================================================================================\r
\r
1. THE PARENT-DELEGATION ALGORITHM ('loadClass()' implementation):\r
   1. Check if class is already loaded in cache via 'findLoadedClass(name)'.\r
   2. If not loaded, delegate to parent classloader: 'parent.loadClass(name)'.\r
   3. If parent is null, delegate to Bootstrap ClassLoader.\r
   4. If parent fails ('ClassNotFoundException'), invoke own 'findClass(name)'.\r
\r
2. WHY IT MATTERS:\r
   - Guarantees class uniqueness. Two classes are only considered identical by the JVM\r
     if both their fully-qualified names AND their defining ClassLoaders match!\r
\r
================================================================================\r
Classroom Practice: Barrackpore Academy | Mentor: Sukanta Hui\r
================================================================================\r
`,l=[{question:"How does ClassLoader.loadClass() implement the parent-delegation algorithm in Java?",shortAnswer:"It first checks if the class is already loaded, then calls parent.loadClass() (or the bootstrap loader if parent is null). If the parent throws ClassNotFoundException, it calls its own findClass() method to search locally.",explanation:"Standard implementation in java.lang.ClassLoader.",hint:"Checks cache → delegates to parent → falls back to findClass().",level:"Intermediate",codeExample:"protected Class<?> loadClass(String name) { ... parent.loadClass(name) ... findClass(name); }"},{question:"When are two class instances considered identical (equal) by the JVM?",shortAnswer:"Two classes are only identical if they have the exact same fully-qualified binary name AND were loaded by the exact same ClassLoader instance.",explanation:"Same class bytes loaded by two different classloaders are treated as distinct incompatible types.",hint:"Exact same binary name AND exact same ClassLoader instance.",level:"Advanced",codeExample:"Class1.equals(Class2) requires Class1.getClassLoader() == Class2.getClassLoader()"}];function y(){return e.jsxs("div",{className:"space-y-12 px-4 md:px-8 py-8 text-slate-200 bg-slate-900 min-h-screen",children:[e.jsxs("header",{className:"space-y-4 border-b border-slate-800 pb-6",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"px-3 py-1 bg-sky-500/10 text-sky-400 border border-sky-500/20 text-xs font-semibold rounded-full uppercase tracking-wider",children:"Module 010_003 · Topic 12"}),e.jsx("span",{className:"px-3 py-1 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-xs font-semibold rounded-full",children:"JVM & ClassLoaders"})]}),e.jsxs("h1",{className:"text-xl sm:text-2xl md:text-3xl font-bold text-white tracking-tight",children:["The Parent-Delegation Model: ",e.jsx("code",{className:"text-emerald-400 font-mono",children:"Delegating Upward Before Searching Locally"})]}),e.jsx("p",{className:"text-base md:text-lg text-slate-400 leading-relaxed max-w-4xl",children:"ClassLoader request flow: why a ClassLoader delegates to its parent before searching locally, avoiding duplicate classes and maintaining type safety."})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsxs("h2",{className:"text-2xl font-bold text-emerald-400 flex items-center gap-2",children:[e.jsx("span",{children:"💻"})," Hands-On Java Demo Code"]}),e.jsx(a,{fileModule:r,title:"ParentDelegationModelDemo.java",highlightLines:[18,25,34,43]})]}),e.jsx("section",{className:"space-y-4",children:e.jsx(t,{title:"JVM Architecture & ClassLoaders FAQs",questions:l})}),e.jsx("section",{className:"space-y-4",children:e.jsx(s,{content:o,title:"Module 010_003 Topic 12: Parent-Delegation Model",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Printable Note",downloadFileName:"010_003_topic12_parent_delegation_model_note.txt"})}),e.jsx(n,{note:"The Parent-Delegation rule is simple: When asked to load a class, ALWAYS ask your parent first! Only if your parent and grandparents say 'I cannot find it' do you attempt to load it yourself! — Sukanta Hui"})]})}export{y as default};
