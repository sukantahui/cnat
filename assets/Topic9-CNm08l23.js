import{j as a}from"./vendor-react-core-Doz9nIC6.js";import{J as e}from"./JavaFileLoader-BfBG3xz_.js";import{F as t}from"./FAQTemplate-BHhlgA96.js";import{P as r}from"./PlainTextPrint-C08xhKA4.js";import{T as s}from"./TeacherSukantaHui-CEPuAfsb.js";import"./JavaCodeBlock-BwsLxS3r.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-DGCamHnX.js";const o=`/**\r
 * Java Core Tutorial - Module 010_003: JVM Architecture, ClassLoaders & Bytecode Execution\r
 * Topic 9: The Bootstrap ClassLoader - Primordial Native Loader\r
 * Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
 */\r
\r
package com.coderaccotax.javatutorial.jvm;\r
\r
public class BootstrapClassLoaderDemo {\r
\r
    public static void main(String[] args) {\r
        System.out.println("==========================================================================");\r
        System.out.println(" TOPIC 9: THE BOOTSTRAP CLASSLOADER - BARRACKPORE ACADEMY");\r
        System.out.println("==========================================================================\\n");\r
\r
        System.out.println(">>> 1. INSPECTING FUNDAMENTAL BOOTSTRAP-LOADED TYPES:");\r
        printLoaderInfo("java.lang.Object", Object.class);\r
        printLoaderInfo("java.lang.Class", Class.class);\r
        printLoaderInfo("java.lang.System", System.class);\r
        printLoaderInfo("java.lang.Thread", Thread.class);\r
        printLoaderInfo("java.util.Map", java.util.Map.class);\r
\r
        System.out.println("\\n>>> HISTORICAL EVOLUTION:");\r
        System.out.println("  - In Java 8 and earlier: Bootstrap loader loaded 'rt.jar' (Runtime JAR, ~65MB).");\r
        System.out.println("  - In Java 9 and later  : Modularized! Loads 'java.base' and core modules from 'lib/modules' (jimage format).");\r
        System.out.println("==========================================================================");\r
    }\r
\r
    static void printLoaderInfo(String label, Class<?> clazz) {\r
        System.out.println("  - " + label + " ClassLoader: " + clazz.getClassLoader() + " (Native Bootstrap)");\r
    }\r
}\r
`,n=`================================================================================\r
JAVA CORE TUTORIAL - QUICK REVISION GUIDE\r
Module 010_003: JVM Architecture, ClassLoaders & Bytecode Execution\r
Topic 9: The Bootstrap ClassLoader\r
Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
================================================================================\r
\r
1. CHARACTERISTICS OF THE BOOTSTRAP CLASSLOADER:\r
   - Implemented in native C/C++ (part of the HotSpot JVM kernel).\r
   - Has no parent classloader (it is the root of the hierarchy).\r
   - Responsible for loading fundamental JVM types ('java.lang.*', 'java.util.*', 'java.io.*').\r
\r
2. RUNTIME STORAGE (Java 8 vs 9+):\r
   - Java 8 : Loaded from '$JAVA_HOME/jre/lib/rt.jar'.\r
   - Java 9+: Loaded from modular runtime image file '$JAVA_HOME/lib/modules' (jimage).\r
\r
================================================================================\r
Classroom Practice: Barrackpore Academy | Mentor: Sukanta Hui\r
================================================================================\r
`,l=[{question:"Where did the Bootstrap ClassLoader load core classes from in Java 8 versus Java 9+?",shortAnswer:"In Java 8, it loaded classes from rt.jar located in jre/lib. In Java 9+, rt.jar was removed and replaced by modular runtime image jimage files located in lib/modules.",explanation:"Modularization in Java 9 eliminated rt.jar.",hint:"Java 8: rt.jar; Java 9+: lib/modules jimage.",level:"Intermediate",codeExample:"Java 9+: $JAVA_HOME/lib/modules"},{question:"Can you instantiate a new instance of the Bootstrap ClassLoader in Java code?",shortAnswer:"No. The Bootstrap ClassLoader is an internal native C++ component of the JVM and is not exposed as an instantiable Java class.",explanation:"Expressed strictly as null in Java APIs.",hint:"No, it is a native C++ JVM component.",level:"Beginner",codeExample:"Cannot write: new BootstrapClassLoader()"}];function j(){return a.jsxs("div",{className:"space-y-12 px-4 md:px-8 py-8 text-slate-200 bg-slate-900 min-h-screen",children:[a.jsxs("header",{className:"space-y-4 border-b border-slate-800 pb-6",children:[a.jsxs("div",{className:"flex items-center gap-3",children:[a.jsx("span",{className:"px-3 py-1 bg-sky-500/10 text-sky-400 border border-sky-500/20 text-xs font-semibold rounded-full uppercase tracking-wider",children:"Module 010_003 · Topic 9"}),a.jsx("span",{className:"px-3 py-1 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-xs font-semibold rounded-full",children:"JVM & ClassLoaders"})]}),a.jsxs("h1",{className:"text-xl sm:text-2xl md:text-3xl font-bold text-white tracking-tight",children:["The Bootstrap ClassLoader: ",a.jsx("code",{className:"text-emerald-400 font-mono",children:"Native C++ Core Loader & java.base"})]}),a.jsx("p",{className:"text-base md:text-lg text-slate-400 leading-relaxed max-w-4xl",children:"The primordial loader: how the JVM bootstraps itself, loading foundational classes (Object, Class, System) from the base runtime image."})]}),a.jsxs("section",{className:"space-y-4",children:[a.jsxs("h2",{className:"text-2xl font-bold text-emerald-400 flex items-center gap-2",children:[a.jsx("span",{children:"💻"})," Hands-On Java Demo Code"]}),a.jsx(e,{fileModule:o,title:"BootstrapClassLoaderDemo.java",highlightLines:[18,25,34,43]})]}),a.jsx("section",{className:"space-y-4",children:a.jsx(t,{title:"JVM Architecture & ClassLoaders FAQs",questions:l})}),a.jsx("section",{className:"space-y-4",children:a.jsx(r,{content:n,title:"Module 010_003 Topic 9: The Bootstrap ClassLoader",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Printable Note",downloadFileName:"010_003_topic9_bootstrap_classloader_note.txt"})}),a.jsx(s,{note:"The Bootstrap ClassLoader is the seed from which the entire JVM grows! It is written in C++ and loads java.lang.Object and java.base before any Java code can run! — Sukanta Hui"})]})}export{j as default};
