import{j as e}from"./vendor-react-core-Doz9nIC6.js";import{J as a}from"./JavaFileLoader-BfBG3xz_.js";import{F as s}from"./FAQTemplate-CkSqDH4B.js";import{P as r}from"./PlainTextPrint-C08xhKA4.js";import{T as t}from"./TeacherSukantaHui-CC0AKmkm.js";import"./JavaCodeBlock-BwsLxS3r.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-BtJHuk7w.js";const n=`/**\r
 * Java Core Tutorial - Module 010_003: JVM Architecture, ClassLoaders & Bytecode Execution\r
 * Topic 11: The Application ClassLoader - System Classpath & User Code\r
 * Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
 */\r
\r
package com.coderaccotax.javatutorial.jvm;\r
\r
public class ApplicationClassLoaderDemo {\r
\r
    public static void main(String[] args) {\r
        System.out.println("==========================================================================");\r
        System.out.println(" TOPIC 11: THE APPLICATION CLASSLOADER - BARRACKPORE ACADEMY");\r
        System.out.println("==========================================================================\\n");\r
\r
        // 1. Obtaining the System / Application ClassLoader:\r
        ClassLoader sysLoader = ClassLoader.getSystemClassLoader();\r
        System.out.println("1. System ClassLoader : " + sysLoader);\r
\r
        // 2. ClassLoader of our own class:\r
        ClassLoader ourLoader = ApplicationClassLoaderDemo.class.getClassLoader();\r
        System.out.println("2. Our ClassLoader    : " + ourLoader);\r
        System.out.println("   - Is sysLoader == ourLoader? " + (sysLoader == ourLoader));\r
\r
        // 3. Inspecting java.class.path:\r
        System.out.println("\\n>>> 3. RUNTIME CLASSPATH (java.class.path):");\r
        String classPath = System.getProperty("java.class.path");\r
        String[] entries = classPath.split(";"); // Semicolon for Windows\r
        for (String entry : entries) {\r
            System.out.println("   - " + entry);\r
        }\r
\r
        System.out.println("\\n==========================================================================");\r
    }\r
}\r
`,o=`================================================================================\r
JAVA CORE TUTORIAL - QUICK REVISION GUIDE\r
Module 010_003: JVM Architecture, ClassLoaders & Bytecode Execution\r
Topic 11: The Application ClassLoader\r
Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
================================================================================\r
\r
1. WHAT THE APPLICATION CLASSLOADER DOES:\r
   - Also known as the 'System ClassLoader'.\r
   - Loads classes from the application classpath ('-classpath', '-cp', or 'CLASSPATH' env variable).\r
   - Responsible for loading all user-written application code and third-party libraries (Maven/Gradle JARs).\r
\r
2. RETRIEVAL METHOD:\r
   - 'ClassLoader.getSystemClassLoader()'\r
\r
================================================================================\r
Classroom Practice: Barrackpore Academy | Mentor: Sukanta Hui\r
================================================================================\r
`,l=[{question:"What is the primary responsibility of the Application (System) ClassLoader?",shortAnswer:"To load all application-level user classes and third-party library JARs specified on the application classpath (-cp / -classpath).",explanation:"Default classloader for main method execution.",hint:"Loads user classes and dependency JARs from classpath.",level:"Beginner",codeExample:"ClassLoader appLoader = ClassLoader.getSystemClassLoader();"},{question:"Which system property contains the list of directories and JARs searched by the Application ClassLoader?",shortAnswer:"System.getProperty('java.class.path').",explanation:"Contains the resolved runtime classpath paths.",hint:"java.class.path",level:"Beginner",codeExample:"String cp = System.getProperty('java.class.path');"}];function y(){return e.jsxs("div",{className:"space-y-12 px-4 md:px-8 py-8 text-slate-200 bg-slate-900 min-h-screen",children:[e.jsxs("header",{className:"space-y-4 border-b border-slate-800 pb-6",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"px-3 py-1 bg-sky-500/10 text-sky-400 border border-sky-500/20 text-xs font-semibold rounded-full uppercase tracking-wider",children:"Module 010_003 · Topic 11"}),e.jsx("span",{className:"px-3 py-1 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-xs font-semibold rounded-full",children:"JVM & ClassLoaders"})]}),e.jsxs("h1",{className:"text-3xl md:text-4xl font-extrabold text-white tracking-tight",children:["The Application ClassLoader: ",e.jsx("code",{className:"text-emerald-400 font-mono",children:"System Classpath & Dependencies"})]}),e.jsx("p",{className:"text-base md:text-lg text-slate-400 leading-relaxed max-w-4xl",children:"Loading user code: how the System ClassLoader loads application classes, Maven/Gradle dependencies, and handles CLASSPATH env variables."})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsxs("h2",{className:"text-2xl font-bold text-emerald-400 flex items-center gap-2",children:[e.jsx("span",{children:"💻"})," Hands-On Java Demo Code"]}),e.jsx(a,{fileModule:n,title:"ApplicationClassLoaderDemo.java",highlightLines:[18,25,34,43]})]}),e.jsx("section",{className:"space-y-4",children:e.jsx(s,{title:"JVM Architecture & ClassLoaders FAQs",questions:l})}),e.jsx("section",{className:"space-y-4",children:e.jsx(r,{content:o,title:"Module 010_003 Topic 11: The Application ClassLoader",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Printable Note",downloadFileName:"010_003_topic11_application_classloader_note.txt"})}),e.jsx(t,{note:"The Application ClassLoader (also called System ClassLoader) loads everything you write and every Maven/Gradle dependency in your classpath! ClassLoader.getSystemClassLoader() returns this loader! — Sukanta Hui"})]})}export{y as default};
