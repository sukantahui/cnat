import{j as e}from"./vendor-react-core-Doz9nIC6.js";import{J as a}from"./JavaFileLoader-BfBG3xz_.js";import{F as r}from"./FAQTemplate-CkSqDH4B.js";import{P as t}from"./PlainTextPrint-C08xhKA4.js";import{T as s}from"./TeacherSukantaHui-CyIG3xbg.js";import"./JavaCodeBlock-BwsLxS3r.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-CIaKtAt4.js";const o=`/**\r
 * Java Core Tutorial - Module 010_003: JVM Architecture, ClassLoaders & Bytecode Execution\r
 * Topic 14: Thread Context ClassLoaders (TCCL) - SPI & JDBC Dynamic Resolution\r
 * Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
 */\r
\r
package com.coderaccotax.javatutorial.jvm;\r
\r
public class ThreadContextClassLoadersDemo {\r
\r
    public static void main(String[] args) {\r
        System.out.println("==========================================================================");\r
        System.out.println(" TOPIC 14: THREAD CONTEXT CLASSLOADERS (TCCL) - BARRACKPORE");\r
        System.out.println("==========================================================================\\n");\r
\r
        // 1. Inspecting Thread Context ClassLoader of current executing thread:\r
        ClassLoader tccl = Thread.currentThread().getContextClassLoader();\r
        System.out.println("1. Thread Context ClassLoader (TCCL) : " + tccl);\r
\r
        System.out.println("\\n>>> THE SERVICE PROVIDER INTERFACE (SPI) DILEMMA:");\r
        System.out.println("  - Problem: Core Java class (e.g. java.sql.DriverManager) is loaded by Bootstrap/Platform loader.");\r
        System.out.println("  - Bootstrap loader CANNOT see database drivers (e.g. com.mysql.cj.jdbc.Driver) on App classpath!");\r
        System.out.println("  - Solution: TCCL allows DriverManager to reach DOWN into the Application ClassLoader to load drivers!\\n");\r
\r
        // 2. Setting a custom TCCL for plugin thread execution:\r
        Thread worker = new Thread(() -> {\r
            ClassLoader workerTccl = Thread.currentThread().getContextClassLoader();\r
            System.out.println("2. Worker Thread running with TCCL: " + workerTccl.getClass().getSimpleName());\r
        });\r
        worker.setContextClassLoader(tccl);\r
        worker.start();\r
\r
        System.out.println("==========================================================================");\r
    }\r
}\r
`,n=`================================================================================\r
JAVA CORE TUTORIAL - QUICK REVISION GUIDE\r
Module 010_003: JVM Architecture, ClassLoaders & Bytecode Execution\r
Topic 14: Thread Context ClassLoaders (TCCL)\r
Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
================================================================================\r
\r
1. WHAT IS TCCL (Thread Context ClassLoader):\r
   - A ClassLoader assigned to a specific Thread via 'thread.setContextClassLoader()'.\r
   - Retrieved via 'Thread.currentThread().getContextClassLoader()'.\r
\r
2. WHY TCCL WAS INVENTED (The SPI Problem):\r
   - Standard delegation only allows child loaders to see classes loaded by parents.\r
   - When core JDK interfaces (loaded by Bootstrap) need to instantiate vendor implementations\r
     (loaded by AppClassLoader, like JDBC drivers or XML parsers), standard delegation fails.\r
   - TCCL breaks the hierarchy legitimately, allowing parent code to access child loaders.\r
\r
================================================================================\r
Classroom Practice: Barrackpore Academy | Mentor: Sukanta Hui\r
================================================================================\r
`,l=[{question:"Why was the Thread Context ClassLoader (TCCL) introduced in Java?",shortAnswer:"To solve the Service Provider Interface (SPI) dilemma, allowing core JDK classes loaded by the Bootstrap ClassLoader (such as java.sql.DriverManager) to load vendor implementation classes located on the application classpath.",explanation:"Standard parent delegation only allows lookups upward, not downward.",hint:"Allows core JDK classes to load vendor implementations on the application classpath.",level:"Advanced",codeExample:"ClassLoader cl = Thread.currentThread().getContextClassLoader();"},{question:"What does Thread.currentThread().getContextClassLoader() default to for the main thread?",shortAnswer:"It defaults to the Application (System) ClassLoader.",explanation:"New threads inherit the context classloader from their creating parent thread.",hint:"The Application (System) ClassLoader.",level:"Beginner",codeExample:"Thread.currentThread().getContextClassLoader() == ClassLoader.getSystemClassLoader()"}];function u(){return e.jsxs("div",{className:"space-y-12 px-4 md:px-8 py-8 text-slate-200 bg-slate-900 min-h-screen",children:[e.jsxs("header",{className:"space-y-4 border-b border-slate-800 pb-6",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"px-3 py-1 bg-sky-500/10 text-sky-400 border border-sky-500/20 text-xs font-semibold rounded-full uppercase tracking-wider",children:"Module 010_003 · Topic 14"}),e.jsx("span",{className:"px-3 py-1 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-xs font-semibold rounded-full",children:"JVM & ClassLoaders"})]}),e.jsxs("h1",{className:"text-3xl md:text-4xl font-extrabold text-white tracking-tight",children:["Context ClassLoaders: ",e.jsx("code",{className:"text-emerald-400 font-mono",children:"Thread.currentThread().getContextClassLoader()"})]}),e.jsx("p",{className:"text-base md:text-lg text-slate-400 leading-relaxed max-w-4xl",children:"Breaking parent delegation legitimately: how SPI (Service Provider Interface), JDBC, and JNDI locate third-party drivers using Context ClassLoaders."})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsxs("h2",{className:"text-2xl font-bold text-emerald-400 flex items-center gap-2",children:[e.jsx("span",{children:"💻"})," Hands-On Java Demo Code"]}),e.jsx(a,{fileModule:o,title:"ThreadContextClassLoadersDemo.java",highlightLines:[18,25,34,43]})]}),e.jsx("section",{className:"space-y-4",children:e.jsx(r,{title:"JVM Architecture & ClassLoaders FAQs",questions:l})}),e.jsx("section",{className:"space-y-4",children:e.jsx(t,{content:n,title:"Module 010_003 Topic 14: Thread Context ClassLoaders",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Printable Note",downloadFileName:"010_003_topic14_thread_context_classloaders_note.txt"})}),e.jsx(s,{note:"Why does JDBC DriverManager (loaded by Bootstrap) need ContextClassLoader? Because Bootstrap loader cannot see MySQL drivers on your application classpath! Thread.currentThread().getContextClassLoader() lets core code reach down to load your drivers! — Sukanta Hui"})]})}export{u as default};
