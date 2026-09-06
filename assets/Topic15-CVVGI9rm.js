import{j as e}from"./vendor-react-core-Doz9nIC6.js";import{J as a}from"./JavaFileLoader-BfBG3xz_.js";import{F as t}from"./FAQTemplate-BHhlgA96.js";import{P as r}from"./PlainTextPrint-C08xhKA4.js";import{T as n}from"./TeacherSukantaHui-DDN87fI5.js";import"./JavaCodeBlock-BwsLxS3r.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-DEsnU7fn.js";const s=`/**\r
 * Java Core Tutorial - Module 010_003: JVM Architecture, ClassLoaders & Bytecode Execution\r
 * Topic 15: Creating a Custom ClassLoader - Dynamic Memory Bytecode (Capstone)\r
 * Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
 */\r
\r
package com.coderaccotax.javatutorial.jvm;\r
\r
import java.io.ByteArrayOutputStream;\r
import java.io.InputStream;\r
\r
public class CustomClassLoaderCapstoneDemo {\r
\r
    // Custom ClassLoader implementing parent delegation correctly by overriding findClass():\r
    public static class MemoryClassLoader extends ClassLoader {\r
\r
        public MemoryClassLoader(ClassLoader parent) {\r
            super(parent); // Register parent classloader\r
        }\r
\r
        @Override\r
        protected Class<?> findClass(String name) throws ClassNotFoundException {\r
            System.out.println("   [CUSTOM LOADER]: findClass() called for: " + name);\r
\r
            // Read existing class bytecode from stream to simulate dynamic network/encrypted load:\r
            String resourcePath = name.replace('.', '/') + ".class";\r
            try (InputStream is = getClass().getClassLoader().getResourceAsStream(resourcePath)) {\r
                if (is == null) {\r
                    throw new ClassNotFoundException("Class not found: " + name);\r
                }\r
\r
                ByteArrayOutputStream buffer = new ByteArrayOutputStream();\r
                int bytesRead;\r
                byte[] data = new byte[1024];\r
                while ((bytesRead = is.read(data, 0, data.length)) != -1) {\r
                    buffer.write(data, 0, bytesRead);\r
                }\r
                byte[] rawBytecode = buffer.toByteArray();\r
\r
                // defineClass() transforms raw byte[] into a live java.lang.Class in Metaspace!\r
                return defineClass(name, rawBytecode, 0, rawBytecode.length);\r
            } catch (Exception ex) {\r
                throw new ClassNotFoundException("Failed to load class: " + name, ex);\r
            }\r
        }\r
    }\r
\r
    public static void main(String[] args) throws Exception {\r
        System.out.println("==========================================================================");\r
        System.out.println(" TOPIC 15: CUSTOM CLASSLOADER CAPSTONE - BARRACKPORE ACADEMY");\r
        System.out.println("==========================================================================\\n");\r
\r
        MemoryClassLoader customLoader = new MemoryClassLoader(CustomClassLoaderCapstoneDemo.class.getClassLoader());\r
\r
        System.out.println(">>> 1. Loading class via Custom ClassLoader:");\r
        Class<?> loadedClass = customLoader.loadClass("com.coderaccotax.javatutorial.jvm.CustomClassLoaderCapstoneDemo$SampleStudent");\r
\r
        System.out.println("\\n>>> 2. Verified Loaded Class Metadata:");\r
        System.out.println("   - Class Name          : " + loadedClass.getName());\r
        System.out.println("   - Defining ClassLoader: " + loadedClass.getClassLoader());\r
\r
        Object studentInstance = loadedClass.getDeclaredConstructor().newInstance();\r
        System.out.println("   - Instantiated Object : " + studentInstance);\r
\r
        System.out.println("\\n==========================================================================");\r
        System.out.println(" MODULE 010_003 COMPLETE: JVM ARCHITECTURE & CLASSLOADERS MASTERED!");\r
        System.out.println("==========================================================================");\r
    }\r
\r
    public static class SampleStudent {\r
        private final String name = "Swadeep Paul (Barrackpore Hub)";\r
        @Override public String toString() { return "SampleStudent[name=" + name + "]"; }\r
    }\r
}\r
`,o=`================================================================================\r
JAVA CORE TUTORIAL - QUICK REVISION GUIDE\r
Module 010_003: JVM Architecture, ClassLoaders & Bytecode Execution\r
Topic 15: Custom ClassLoader Capstone\r
Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
================================================================================\r
\r
1. BEST PRACTICE FOR CUSTOM CLASSLOADERS:\r
   - Override 'findClass(String name)' rather than 'loadClass(String name)'.\r
   - This preserves the Parent-Delegation model automatically (handled by 'super.loadClass()').\r
\r
2. THE 'defineClass()' METHOD:\r
   - 'protected final Class<?> defineClass(String name, byte[] b, int off, int len)'\r
   - Converts an array of bytes into an instance of 'java.lang.Class' in Metaspace.\r
\r
3. USE CASES:\r
   - Encrypted / Obfuscated Bytecode loaders.\r
   - Network / Cloud / Remote ClassLoaders.\r
   - Dynamic plugin reloaders (OSGi, Tomcat webapp classloaders).\r
\r
================================================================================\r
Classroom Practice: Barrackpore Academy | Mentor: Sukanta Hui\r
================================================================================\r
`,l=[{question:"Why is it recommended to override findClass() rather than loadClass() when writing a custom ClassLoader?",shortAnswer:"Overriding findClass() preserves the Parent-Delegation model implemented in ClassLoader.loadClass(), ensuring that parent loaders are checked first before your custom lookup logic executes.",explanation:"Overriding loadClass() directly requires manually re-implementing delegation.",hint:"Preserves the parent-delegation algorithm automatically.",level:"Intermediate",codeExample:"protected Class<?> findClass(String name) { byte[] b = loadBytes(); return defineClass(name, b, 0, b.length); }"},{question:"What does the protected defineClass() method in java.lang.ClassLoader do?",shortAnswer:"It parses an array of raw bytecode bytes, performs verification checks, and creates a live java.lang.Class object in Metaspace.",explanation:"The bridge between raw bytes and JVM runtime types.",hint:"Converts byte[] array into a java.lang.Class instance in Metaspace.",level:"Advanced",codeExample:"return defineClass(name, byteData, 0, byteData.length);"}];function g(){return e.jsxs("div",{className:"space-y-12 px-4 md:px-8 py-8 text-slate-200 bg-slate-900 min-h-screen",children:[e.jsxs("header",{className:"space-y-4 border-b border-slate-800 pb-6",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"px-3 py-1 bg-sky-500/10 text-sky-400 border border-sky-500/20 text-xs font-semibold rounded-full uppercase tracking-wider",children:"Module 010_003 · Topic 15"}),e.jsx("span",{className:"px-3 py-1 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-xs font-semibold rounded-full",children:"JVM & ClassLoaders"})]}),e.jsxs("h1",{className:"text-xl sm:text-2xl md:text-3xl font-bold text-white tracking-tight",children:["Creating a Custom ClassLoader: ",e.jsx("code",{className:"text-emerald-400 font-mono",children:"findClass() & Dynamic Bytecode Ingestion"})," (Capstone)"]}),e.jsx("p",{className:"text-base md:text-lg text-slate-400 leading-relaxed max-w-4xl",children:"Extending java.lang.ClassLoader: overriding findClass(), calling defineClass(), and loading encrypted or dynamic memory bytecode."})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsxs("h2",{className:"text-2xl font-bold text-emerald-400 flex items-center gap-2",children:[e.jsx("span",{children:"💻"})," Hands-On Java Demo Code"]}),e.jsx(a,{fileModule:s,title:"CustomClassLoaderCapstoneDemo.java",highlightLines:[18,25,34,43,52]})]}),e.jsx("section",{className:"space-y-4",children:e.jsx(t,{title:"JVM Architecture & ClassLoaders FAQs",questions:l})}),e.jsx("section",{className:"space-y-4",children:e.jsx(r,{content:o,title:"Module 010_003 Topic 15: Custom ClassLoader Capstone",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Printable Note",downloadFileName:"010_003_topic15_custom_classloader_capstone_note.txt"})}),e.jsx(n,{note:"Congratulations on mastering JVM Architecture & ClassLoaders! You have built your own Custom ClassLoader from scratch, overriding findClass() and invoking defineClass()! Next up: The JVM Memory Model & Metaspace! — Sukanta Hui"})]})}export{g as default};
