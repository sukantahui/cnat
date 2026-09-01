import{j as e}from"./vendor-react-core-Doz9nIC6.js";import{J as t}from"./JavaFileLoader-BfBG3xz_.js";import{F as a}from"./FAQTemplate-BHhlgA96.js";import{P as n}from"./PlainTextPrint-C08xhKA4.js";import{T as o}from"./TeacherSukantaHui-CEPuAfsb.js";import"./JavaCodeBlock-BwsLxS3r.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-DGCamHnX.js";const r=`/**\r
 * Java Core Tutorial - Module 010_004: JVM Memory Model: Heap, Stack, Metaspace & Runtime Areas\r
 * Topic 5: Native Method Stack - Supporting JNI C/C++ Execution\r
 * Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
 */\r
\r
package com.coderaccotax.javatutorial.memory;\r
\r
public class NativeMethodStackDemo {\r
\r
    public static void main(String[] args) {\r
        System.out.println("==========================================================================");\r
        System.out.println(" TOPIC 5: NATIVE METHOD STACK (JNI) - BARRACKPORE ACADEMY");\r
        System.out.println("==========================================================================\\n");\r
\r
        System.out.println(">>> 1. EXECUTING FAMOUS NATIVE METHODS IN CORE JAVA:");\r
\r
        // Native method: public static native long currentTimeMillis();\r
        long now = System.currentTimeMillis();\r
        System.out.println("  - System.currentTimeMillis() [Native C] : " + now);\r
\r
        // Native method: public static native int identityHashCode(Object x);\r
        Object obj = new Object();\r
        int rawHash = System.identityHashCode(obj);\r
        System.out.println("  - System.identityHashCode()   [Native C] : " + rawHash);\r
\r
        System.out.println("\\n>>> HOW THE NATIVE METHOD STACK OPERATES:");\r
        System.out.println("  1. When a thread calls a 'native' method, JVM leaves the Java Stack Frame.");\r
        System.out.println("  2. JVM pushes a Native Stack Frame onto the Native Method Stack (C calling convention).");\r
        System.out.println("  3. Native code executes directly on the OS CPU (using OS C compiler conventions).");\r
        System.out.println("  4. Once C function finishes, result is passed back to Java Stack and execution resumes.");\r
        System.out.println("==========================================================================");\r
    }\r
}\r
`,i=`================================================================================\r
JAVA CORE TUTORIAL - QUICK REVISION GUIDE\r
Module 010_004: JVM Memory Model: Heap, Stack, Metaspace & Runtime Areas\r
Topic 5: Native Method Stack\r
Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
================================================================================\r
\r
1. WHAT IS THE NATIVE METHOD STACK:\r
   - Dedicated thread-private memory stack supporting execution of native methods\r
     (methods declared with the 'native' keyword and implemented in C/C++).\r
\r
2. ERROR CONDITIONS:\r
   - 'StackOverflowError' : If native method recursion exceeds native stack bounds.\r
   - 'OutOfMemoryError'   : If native memory cannot be allocated for new native threads.\r
\r
================================================================================\r
Classroom Practice: Barrackpore Academy | Mentor: Sukanta Hui\r
================================================================================\r
`,s=[{question:"What keyword is used in Java to declare a method whose implementation is written in C/C++ on the Native Method Stack?",shortAnswer:"The 'native' keyword (e.g. public static native long currentTimeMillis();), which has no body in Java source code and is resolved via the Java Native Interface (JNI).",explanation:"Indicates implementation is provided by a native dynamic library (.dll / .so).",hint:"The 'native' keyword.",level:"Beginner",codeExample:"public native void nativeMethod();"},{question:"Is the Native Method Stack memory allocated on the Java Heap or native OS memory?",shortAnswer:"It is allocated in native OS process memory outside the Java Heap.",explanation:"Allocated according to the operating system C calling conventions.",hint:"Allocated in native OS process memory.",level:"Intermediate",codeExample:"Native Stack uses OS thread memory."}];function x(){return e.jsxs("div",{className:"space-y-12 px-4 md:px-8 py-8 text-slate-200 bg-slate-900 min-h-screen",children:[e.jsxs("header",{className:"space-y-4 border-b border-slate-800 pb-6",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"px-3 py-1 bg-sky-500/10 text-sky-400 border border-sky-500/20 text-xs font-semibold rounded-full uppercase tracking-wider",children:"Module 010_004 · Topic 5"}),e.jsx("span",{className:"px-3 py-1 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-xs font-semibold rounded-full",children:"JVM Memory Model"})]}),e.jsxs("h1",{className:"text-xl sm:text-2xl md:text-3xl font-bold text-white tracking-tight",children:["The Native Method Stack: ",e.jsx("code",{className:"text-emerald-400 font-mono",children:"Supporting JNI C/C++ Execution"})]}),e.jsx("p",{className:"text-base md:text-lg text-slate-400 leading-relaxed max-w-4xl",children:"Connecting to the operating system: how the Native Stack manages C/C++ execution frames when Java invokes native methods via JNI."})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsxs("h2",{className:"text-2xl font-bold text-emerald-400 flex items-center gap-2",children:[e.jsx("span",{children:"💻"})," Hands-On Java Demo Code"]}),e.jsx(t,{fileModule:r,title:"NativeMethodStackDemo.java",highlightLines:[18,25,34,43]})]}),e.jsx("section",{className:"space-y-4",children:e.jsx(a,{title:"JVM Memory Areas FAQs",questions:s})}),e.jsx("section",{className:"space-y-4",children:e.jsx(n,{content:i,title:"Module 010_004 Topic 5: Native Method Stack",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Printable Note",downloadFileName:"010_004_topic5_native_method_stack_note.txt"})}),e.jsx(o,{note:"When you call System.currentTimeMillis() or Thread.sleep(), Java invokes native C code via JNI! The execution switches from the Java Stack to the Native Method Stack in C! — Sukanta Hui"})]})}export{x as default};
