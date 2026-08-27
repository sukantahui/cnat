import{j as a}from"./vendor-react-core-Doz9nIC6.js";import{J as e}from"./JavaFileLoader-BfBG3xz_.js";import{F as r}from"./FAQTemplate-CkSqDH4B.js";import{P as t}from"./PlainTextPrint-C08xhKA4.js";import{T as s}from"./TeacherSukantaHui-CyIG3xbg.js";import"./JavaCodeBlock-BwsLxS3r.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-CIaKtAt4.js";const n=`/**\r
 * Java Core Tutorial - Module 010_003: JVM Architecture, ClassLoaders & Bytecode Execution\r
 * Topic 8: Built-in ClassLoader Hierarchy - 3-Tiered Tree Navigation\r
 * Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
 */\r
\r
package com.coderaccotax.javatutorial.jvm;\r
\r
import java.sql.DriverManager;\r
import java.util.ArrayList;\r
\r
public class BuiltinClassLoaderHierarchyDemo {\r
\r
    public static void main(String[] args) {\r
        System.out.println("==========================================================================");\r
        System.out.println(" TOPIC 8: BUILT-IN CLASSLOADER HIERARCHY - BARRACKPORE ACADEMY");\r
        System.out.println("==========================================================================\\n");\r
\r
        // 1. Application / System ClassLoader (Our own classes)\r
        ClassLoader appLoader = BuiltinClassLoaderHierarchyDemo.class.getClassLoader();\r
        System.out.println("1. App ClassLoader (Our Class)     : " + appLoader);\r
\r
        // 2. Platform ClassLoader (Parent of AppLoader - Standard extensions/SQL/XML)\r
        ClassLoader platformLoader = appLoader.getParent();\r
        System.out.println("2. Platform ClassLoader (Parent)   : " + platformLoader);\r
\r
        // 3. Bootstrap ClassLoader (Parent of PlatformLoader - Native C++ core / null in Java)\r
        ClassLoader bootstrapLoader = platformLoader.getParent();\r
        System.out.println("3. Bootstrap ClassLoader (Root)    : " + bootstrapLoader + " (null represents Bootstrap in Java!)");\r
\r
        // 4. Verifying Core Java Classes (java.lang.String, ArrayList):\r
        System.out.println("\\n>>> CORE CLASSES LOADED BY BOOTSTRAP CLASSLOADER:");\r
        System.out.println("  - String.class.getClassLoader()    : " + String.class.getClassLoader() + " (Bootstrap)");\r
        System.out.println("  - ArrayList.class.getClassLoader() : " + ArrayList.class.getClassLoader() + " (Bootstrap)");\r
\r
        System.out.println("\\n==========================================================================");\r
    }\r
}\r
`,o=`================================================================================\r
JAVA CORE TUTORIAL - QUICK REVISION GUIDE\r
Module 010_003: JVM Architecture, ClassLoaders & Bytecode Execution\r
Topic 8: Built-in ClassLoader Hierarchy\r
Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
================================================================================\r
\r
1. THE 3 BUILT-IN CLASSLOADERS:\r
   -----------------------------------------------------------------------------\r
   LOADER                    RESPONSIBILITY                   PARENT\r
   -----------------------------------------------------------------------------\r
   Bootstrap ClassLoader     Core JDK ('java.base', Object, String) None (Native root)\r
   Platform ClassLoader      Platform modules (SQL, XML, Logging)   Bootstrap\r
   App/System ClassLoader    User classpath / application JARs     Platform\r
   -----------------------------------------------------------------------------\r
\r
2. WHY 'getClassLoader()' RETURNS NULL:\r
   - In Java, the Bootstrap ClassLoader is implemented in native C/C++ inside the JVM.\r
   - It is not represented as a Java object, so 'String.class.getClassLoader()' returns 'null'.\r
\r
================================================================================\r
Classroom Practice: Barrackpore Academy | Mentor: Sukanta Hui\r
================================================================================\r
`,l=[{question:"Why does String.class.getClassLoader() return null in Java?",shortAnswer:"Because java.lang.String is loaded by the Bootstrap ClassLoader, which is written in native C/C++ inside the JVM binary and is represented as null in the Java language API.",explanation:"null return value is the official sentinel for the Bootstrap ClassLoader.",hint:"Bootstrap ClassLoader is implemented in native C++ and represented as null.",level:"Beginner",codeExample:"String.class.getClassLoader() == null // true"},{question:"What is the parent of the Application (System) ClassLoader?",shortAnswer:"The Platform ClassLoader (in Java 9+) or Extension ClassLoader (in Java 8 and earlier).",explanation:"Renamed to PlatformClassLoader during the modularization of Java 9.",hint:"Platform ClassLoader (Java 9+) / Extension ClassLoader (Java 8).",level:"Beginner",codeExample:"ClassLoader.getSystemClassLoader().getParent(); // PlatformClassLoader"}];function x(){return a.jsxs("div",{className:"space-y-12 px-4 md:px-8 py-8 text-slate-200 bg-slate-900 min-h-screen",children:[a.jsxs("header",{className:"space-y-4 border-b border-slate-800 pb-6",children:[a.jsxs("div",{className:"flex items-center gap-3",children:[a.jsx("span",{className:"px-3 py-1 bg-sky-500/10 text-sky-400 border border-sky-500/20 text-xs font-semibold rounded-full uppercase tracking-wider",children:"Module 010_003 · Topic 8"}),a.jsx("span",{className:"px-3 py-1 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-xs font-semibold rounded-full",children:"JVM & ClassLoaders"})]}),a.jsxs("h1",{className:"text-3xl md:text-4xl font-extrabold text-white tracking-tight",children:["The Built-in ",a.jsx("code",{className:"text-emerald-400 font-mono",children:"ClassLoader Hierarchy"}),": Bootstrap, Platform & App Loaders"]}),a.jsx("p",{className:"text-base md:text-lg text-slate-400 leading-relaxed max-w-4xl",children:"Navigating the 3-tiered loader tree: parent-child links between Bootstrap, Platform (Extension), and Application/System ClassLoaders."})]}),a.jsxs("section",{className:"space-y-4",children:[a.jsxs("h2",{className:"text-2xl font-bold text-emerald-400 flex items-center gap-2",children:[a.jsx("span",{children:"💻"})," Hands-On Java Demo Code"]}),a.jsx(e,{fileModule:n,title:"BuiltinClassLoaderHierarchyDemo.java",highlightLines:[18,25,34,43]})]}),a.jsx("section",{className:"space-y-4",children:a.jsx(r,{title:"JVM Architecture & ClassLoaders FAQs",questions:l})}),a.jsx("section",{className:"space-y-4",children:a.jsx(t,{content:o,title:"Module 010_003 Topic 8: Built-in ClassLoader Hierarchy",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Printable Note",downloadFileName:"010_003_topic8_builtin_classloader_hierarchy_note.txt"})}),a.jsx(s,{note:"Let's print the parent chain of ClassLoaders! String.class returns null because it is loaded by the native Bootstrap ClassLoader! Our application class is loaded by AppClassLoader! — Sukanta Hui"})]})}export{x as default};
