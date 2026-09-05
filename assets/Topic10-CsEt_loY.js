import{j as e}from"./vendor-react-core-Doz9nIC6.js";import{J as a}from"./JavaFileLoader-BfBG3xz_.js";import{F as r}from"./FAQTemplate-BHhlgA96.js";import{P as t}from"./PlainTextPrint-C08xhKA4.js";import{T as s}from"./TeacherSukantaHui-DerPxfxp.js";import"./JavaCodeBlock-BwsLxS3r.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-CH1iX9C8.js";const o=`/**\r
 * Java Core Tutorial - Module 010_003: JVM Architecture, ClassLoaders & Bytecode Execution\r
 * Topic 10: The Platform ClassLoader (Java 9+ Standard)\r
 * Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
 */\r
\r
package com.coderaccotax.javatutorial.jvm;\r
\r
import java.sql.Driver;\r
import java.sql.DriverManager;\r
\r
public class PlatformClassLoaderDemo {\r
\r
    public static void main(String[] args) {\r
        System.out.println("==========================================================================");\r
        System.out.println(" TOPIC 10: THE PLATFORM CLASSLOADER - BARRACKPORE ACADEMY");\r
        System.out.println("==========================================================================\\n");\r
\r
        // 1. Obtaining the Platform ClassLoader directly in Java 9+:\r
        ClassLoader platformLoader = ClassLoader.getPlatformClassLoader();\r
        System.out.println("1. ClassLoader.getPlatformClassLoader() : " + platformLoader);\r
\r
        // 2. Classes loaded by the Platform ClassLoader (e.g. java.sql.Driver):\r
        System.out.println("\\n>>> 2. CLASSES LOADED BY PLATFORM CLASSLOADER:");\r
        System.out.println("  - java.sql.Driver.class ClassLoader   : " + Driver.class.getClassLoader());\r
\r
        System.out.println("\\n>>> WHY EXTENSION CLASSLOADER WAS REPLACED IN JAVA 9:");\r
        System.out.println("  1. The old extension directory ($JAVA_HOME/jre/lib/ext) allowed accidental classpath clashes.");\r
        System.out.println("  2. In Java 9, JPMS modules (java.sql, java.xml, java.desktop) are loaded cleanly via PlatformClassLoader.");\r
        System.out.println("==========================================================================");\r
    }\r
}\r
`,l=`================================================================================\r
JAVA CORE TUTORIAL - QUICK REVISION GUIDE\r
Module 010_003: JVM Architecture, ClassLoaders & Bytecode Execution\r
Topic 10: The Platform ClassLoader (Java 9+)\r
Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
================================================================================\r
\r
1. WHAT IS THE PLATFORM CLASSLOADER:\r
   - Introduced in Java 9 (replacing 'Extension ClassLoader').\r
   - Accessible via 'ClassLoader.getPlatformClassLoader()'.\r
   - Loads standard Java SE platform modules that are not part of 'java.base' (e.g. 'java.sql', 'java.xml').\r
\r
2. WHY 'jre/lib/ext' WAS REMOVED:\r
   - Dropping arbitrary JARs into 'lib/ext' caused silent version conflicts across enterprise applications.\r
   - Java Module System (JPMS) replaced the extension mechanism completely.\r
\r
================================================================================\r
Classroom Practice: Barrackpore Academy | Mentor: Sukanta Hui\r
================================================================================\r
`,n=[{question:"How do you obtain a reference to the Platform ClassLoader in Java 9+?",shortAnswer:"By calling the static factory method ClassLoader.getPlatformClassLoader().",explanation:"Introduced in Java 9 as part of JPMS.",hint:"ClassLoader.getPlatformClassLoader()",level:"Beginner",codeExample:"ClassLoader pl = ClassLoader.getPlatformClassLoader();"},{question:"What happened to the jre/lib/ext directory and Extension ClassLoader in Java 9?",shortAnswer:"The extension mechanism and jre/lib/ext directory were completely removed from the JDK, and Extension ClassLoader was replaced by PlatformClassLoader to load non-base modular platform components.",explanation:"Eliminated uncontrolled classpath pollution from external JARs.",hint:"Removed and replaced by PlatformClassLoader.",level:"Intermediate",codeExample:"Extension mechanism was deprecated and removed in Java 9."}];function h(){return e.jsxs("div",{className:"space-y-12 px-4 md:px-8 py-8 text-slate-200 bg-slate-900 min-h-screen",children:[e.jsxs("header",{className:"space-y-4 border-b border-slate-800 pb-6",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"px-3 py-1 bg-sky-500/10 text-sky-400 border border-sky-500/20 text-xs font-semibold rounded-full uppercase tracking-wider",children:"Module 010_003 · Topic 10"}),e.jsx("span",{className:"px-3 py-1 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-xs font-semibold rounded-full",children:"JVM & ClassLoaders"})]}),e.jsxs("h1",{className:"text-xl sm:text-2xl md:text-3xl font-bold text-white tracking-tight",children:["The Platform ClassLoader: ",e.jsx("code",{className:"text-emerald-400 font-mono",children:"Platform Modules & Extensions (Java 9+)"})]}),e.jsx("p",{className:"text-base md:text-lg text-slate-400 leading-relaxed max-w-4xl",children:"From ExtClassLoader to PlatformClassLoader: how Java 9 modularity restructured extension classes, java.sql, and XML modules."})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsxs("h2",{className:"text-2xl font-bold text-emerald-400 flex items-center gap-2",children:[e.jsx("span",{children:"💻"})," Hands-On Java Demo Code"]}),e.jsx(a,{fileModule:o,title:"PlatformClassLoaderDemo.java",highlightLines:[18,25,34,43]})]}),e.jsx("section",{className:"space-y-4",children:e.jsx(r,{title:"JVM Architecture & ClassLoaders FAQs",questions:n})}),e.jsx("section",{className:"space-y-4",children:e.jsx(t,{content:l,title:"Module 010_003 Topic 10: The Platform ClassLoader",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Printable Note",downloadFileName:"010_003_topic10_platform_classloader_note.txt"})}),e.jsx(s,{note:"In Java 9, the old Extension ClassLoader (which loaded JARs from jre/lib/ext) was replaced by the Platform ClassLoader to load non-base standard Java modules like java.sql and java.xml! — Sukanta Hui"})]})}export{h as default};
