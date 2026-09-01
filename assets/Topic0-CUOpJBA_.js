import{j as e}from"./vendor-react-core-Doz9nIC6.js";import{J as t}from"./JavaFileLoader-BfBG3xz_.js";import{F as a}from"./FAQTemplate-BHhlgA96.js";import{P as n}from"./PlainTextPrint-C08xhKA4.js";import{T as r}from"./TeacherSukantaHui-BaJcBHAy.js";import"./JavaCodeBlock-BwsLxS3r.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-8ao-0upJ.js";const o=`/**\r
 * Java Core Tutorial - Module 010_002: Java Annotations & Custom Processors\r
 * Topic 0: What are Java Annotations? Structured Code Metadata\r
 * Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
 */\r
\r
package com.coderaccotax.javatutorial.annotations;\r
\r
import java.lang.annotation.Retention;\r
import java.lang.annotation.RetentionPolicy;\r
\r
public class WhatAreAnnotationsDemo {\r
\r
    // Custom Annotation Definition:\r
    @Retention(RetentionPolicy.RUNTIME)\r
    public @interface CourseDetails {\r
        String faculty() default "Sukanta Hui";\r
        String center() default "Barrackpore";\r
        int durationMonths() default 6;\r
    }\r
\r
    // Applying metadata to a class:\r
    @CourseDetails(faculty = "Sukanta Hui", center = "Barrackpore (Main Hub)", durationMonths = 4)\r
    public static class FullStackJavaModule {\r
        public void executeSyllabus() {\r
            System.out.println("Executing Java Core to Pro syllabus at Barrackpore Academy...");\r
        }\r
    }\r
\r
    public static void main(String[] args) {\r
        System.out.println("==========================================================================");\r
        System.out.println(" TOPIC 0: WHAT ARE JAVA ANNOTATIONS? - BARRACKPORE ACADEMY");\r
        System.out.println("==========================================================================\\n");\r
\r
        FullStackJavaModule module = new FullStackJavaModule();\r
        module.executeSyllabus();\r
\r
        // Reading the attached metadata at runtime via Reflection:\r
        Class<?> clazz = module.getClass();\r
        if (clazz.isAnnotationPresent(CourseDetails.class)) {\r
            CourseDetails details = clazz.getAnnotation(CourseDetails.class);\r
            System.out.println("\\n>>> METADATA DISCOVERED ON CLASS:");\r
            System.out.println("   - Faculty         : " + details.faculty());\r
            System.out.println("   - Training Center : " + details.center());\r
            System.out.println("   - Duration        : " + details.durationMonths() + " months");\r
        }\r
\r
        System.out.println("\\n==========================================================================");\r
    }\r
}\r
`,s=`================================================================================\r
JAVA CORE TUTORIAL - QUICK REVISION GUIDE\r
Module 010_002: Java Annotations & Custom Processors\r
Topic 0: What are Java Annotations\r
Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
================================================================================\r
\r
1. WHAT ARE ANNOTATIONS (Java 5+):\r
   - A form of syntactic metadata that can be added to Java source code.\r
   - Target elements: packages, types (classes/interfaces/enums/records), constructors,\r
     methods, fields, parameters, and local variables.\r
   - Prefix: '@' symbol (e.g. '@Override', '@Entity', '@Test').\r
\r
2. THREE MAIN PURPOSES OF ANNOTATIONS:\r
   1. Information for the Compiler: Detecting errors or suppressing warnings ('@Override', '@SuppressWarnings').\r
   2. Compile-Time / Build-Time Processing: Code generation ('@Getter', '@Builder' via Lombok/APT).\r
   3. Runtime Processing: Framework dependency injection and transaction boundaries (Spring '@Transactional').\r
\r
================================================================================\r
Classroom Practice: Barrackpore Academy | Mentor: Sukanta Hui\r
================================================================================\r
`,i=[{question:"Do annotations in Java alter the direct bytecode logic of a method by themselves?",shortAnswer:"No. Annotations are passive metadata containers. They have no direct executable logic unless read and processed by external tools (javac compiler, APT processors, or runtime Reflection).",explanation:"Annotations declare intent; frameworks execute behavior.",hint:"Annotations are passive metadata that require a processor or reflection to act.",level:"Beginner",codeExample:"@Test public void test() { ... } // Requires JUnit runner to execute"},{question:"When were annotations introduced into the Java programming language?",shortAnswer:"Java 5 (JSR 175) in 2004, revolutionizing Java development by replacing verbose XML configuration files with code-level annotations.",explanation:"Started the transition toward configuration-by-exception.",hint:"Java 5 (JSR 175).",level:"Beginner",codeExample:"@Override"}];function g(){return e.jsxs("div",{className:"space-y-12 px-4 md:px-8 py-8 text-slate-200 bg-slate-900 min-h-screen",children:[e.jsxs("header",{className:"space-y-4 border-b border-slate-800 pb-6",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"px-3 py-1 bg-sky-500/10 text-sky-400 border border-sky-500/20 text-xs font-semibold rounded-full uppercase tracking-wider",children:"Module 010_002 · Topic 0"}),e.jsx("span",{className:"px-3 py-1 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-xs font-semibold rounded-full",children:"Java Annotations & APT"})]}),e.jsxs("h1",{className:"text-xl sm:text-2xl md:text-3xl font-bold text-white tracking-tight",children:["What are ",e.jsx("code",{className:"text-emerald-400 font-mono",children:"Java Annotations"}),"? Declarative Structured Metadata"]}),e.jsx("p",{className:"text-base md:text-lg text-slate-400 leading-relaxed max-w-4xl",children:"Code that describes code: attaching metadata tags to classes, methods, parameters, and fields to guide compilers, IDEs, and runtime frameworks."})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsxs("h2",{className:"text-2xl font-bold text-emerald-400 flex items-center gap-2",children:[e.jsx("span",{children:"💻"})," Hands-On Java Demo Code"]}),e.jsx(t,{fileModule:o,title:"WhatAreAnnotationsDemo.java",highlightLines:[18,25,34,43]})]}),e.jsx("section",{className:"space-y-4",children:e.jsx(a,{title:"Java Annotations FAQs",questions:i})}),e.jsx("section",{className:"space-y-4",children:e.jsx(n,{content:s,title:"Module 010_002 Topic 0: What are Java Annotations",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Printable Note",downloadFileName:"010_002_topic0_what_are_annotations_note.txt"})}),e.jsx(r,{note:"Annotations are metadata tags! They do not change code execution directly; instead, tools like the javac compiler, IDEs, and frameworks like Spring read these tags and take action! — Sukanta Hui"})]})}export{g as default};
