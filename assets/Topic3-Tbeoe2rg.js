import{j as e}from"./vendor-react-core-Doz9nIC6.js";import{J as t}from"./JavaFileLoader-BfBG3xz_.js";import{F as a}from"./FAQTemplate-BHhlgA96.js";import{P as n}from"./PlainTextPrint-C08xhKA4.js";import{T as s}from"./TeacherSukantaHui-DDN87fI5.js";import"./JavaCodeBlock-BwsLxS3r.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-DEsnU7fn.js";const r=`/**\r
 * Java Core Tutorial - Module 002_004: Static Variables, Methods, Blocks & Singleton\r
 * Topic 3: Accessing Static Variables: ClassName.var vs objectRef.var\r
 * Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
 */\r
\r
package com.coderaccotax.javatutorial.statics;\r
\r
public class StaticAccessConventionsDemo {\r
\r
    public static class AcademicConfig {\r
        public static String hubName = "Barrackpore Academic Hub";\r
    }\r
\r
    public static void main(String[] args) {\r
        System.out.println("==========================================================================");\r
        System.out.println(" TOPIC 3: STATIC ACCESS CONVENTIONS - BARRACKPORE");\r
        System.out.println("==========================================================================\\n");\r
\r
        // 1. BEST PRACTICE: Accessing via Class Name (Crystal-clear intent)\r
        System.out.println(">>> 1. Recommended: Access via Class Name:");\r
        System.out.println("  AcademicConfig.hubName = " + AcademicConfig.hubName);\r
\r
        // 2. DISCOURAGED: Accessing via Object Reference\r
        AcademicConfig ref = new AcademicConfig();\r
        System.out.println("\\n>>> 2. Discouraged: Access via object reference 'ref.hubName':");\r
        System.out.println("  ref.hubName = " + ref.hubName);\r
\r
        // 3. NULL REFERENCE TRICK:\r
        AcademicConfig nullRef = null;\r
        System.out.println("\\n>>> 3. Null Reference Access (No NullPointerException thrown!):");\r
        // The compiler replaces 'nullRef.hubName' with 'AcademicConfig.hubName' at compile time!\r
        System.out.println("  nullRef.hubName = " + nullRef.hubName);\r
\r
        System.out.println("\\n==========================================================================");\r
    }\r
}`,i=`================================================================================\r
JAVA CORE TUTORIAL - QUICK REVISION GUIDE\r
Module 002_004: Static Variables, Methods, Blocks & The Singleton Pattern\r
Topic 3: Accessing Static Variables\r
Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
================================================================================\r
\r
1. ACCESS CONVENTIONS:\r
   - Always access static members via: 'ClassName.variableName'\r
   - Avoid 'objectRef.variableName' (misleading; implies instance state).\r
   - Even if 'ref = null', 'ref.staticVar' works because javac binds it to ClassName.\r
\r
================================================================================\r
Classroom Practice: Barrackpore Academy | Mentor: Sukanta Hui\r
================================================================================`,c=[{question:"Why does 'nullRef.staticVariable' NOT throw a NullPointerException in Java?",shortAnswer:"Because the Java compiler binds static member access at compile time to the declaring Class type, completely ignoring the runtime value of the reference variable.",explanation:"Bytecode uses 'getstatic AcademicConfig.hubName' directly without dereferencing the pointer.",hint:"Compiler resolves static access using the compile-time type, ignoring null.",level:"Advanced",codeExample:"Student s = null; System.out.println(s.ACADEMY); // Works fine!"}];function f(){return e.jsxs("div",{className:"space-y-12 px-4 md:px-8 py-8 text-slate-200 bg-slate-900 min-h-screen",children:[e.jsx("style",{children:`
          @keyframes fadeIn {
            from { opacity: 0; transform: translateY(8px); }
            to { opacity: 1; transform: translateY(0); }
          }
          .animate-fade-in { animation: fadeIn 0.5s ease-out forwards; }
        `}),e.jsxs("header",{className:"space-y-4 border-b border-slate-800 pb-6 animate-fade-in",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"px-3 py-1 bg-sky-500/10 text-sky-400 border border-sky-500/20 text-xs font-semibold rounded-full uppercase tracking-wider",children:"Module 002_004 · Topic 3"}),e.jsx("span",{className:"px-3 py-1 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-xs font-semibold rounded-full",children:"Best Practices"})]}),e.jsxs("h1",{className:"text-xl sm:text-2xl md:text-3xl font-bold text-white tracking-tight",children:["Accessing Static Variables: ",e.jsx("code",{className:"text-emerald-300 font-mono",children:"ClassName.var"})," vs ",e.jsx("code",{className:"text-rose-300 font-mono",children:"objectRef.var"})]}),e.jsx("p",{className:"text-base md:text-lg text-slate-400 leading-relaxed max-w-4xl",children:"Learn why accessing static members through object references is an anti-pattern, and understand the famous JVM bytecode null-reference static access puzzle."})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsxs("h2",{className:"text-2xl font-bold text-emerald-400 flex items-center gap-2",children:[e.jsx("span",{children:"💻"})," Hands-On Java Demo Code"]}),e.jsx(t,{fileModule:r,title:"StaticAccessConventionsDemo.java",highlightLines:[18,23,29]})]}),e.jsx("section",{className:"space-y-4",children:e.jsx(a,{title:"Static Access Conventions FAQs",questions:c})}),e.jsx("section",{className:"space-y-4",children:e.jsx(n,{content:i,title:"Module 002_004 Topic 3: Static Access Conventions",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Printable Note",downloadFileName:"002_004_topic3_access_conventions_note.txt"})}),e.jsx(s,{note:"Always write ClassName.variableName! Writing obj.variableName is misleading and can confuse your teammates into thinking it is an instance variable. — Sukanta Hui"})]})}export{f as default};
