import{j as e}from"./vendor-react-core-Doz9nIC6.js";import{J as t}from"./JavaFileLoader-BfBG3xz_.js";import{F as n}from"./FAQTemplate-BHhlgA96.js";import{P as r}from"./PlainTextPrint-C08xhKA4.js";import{T as o}from"./TeacherSukantaHui-DDN87fI5.js";import"./JavaCodeBlock-BwsLxS3r.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-DEsnU7fn.js";const a=`/**\r
 * Java Core Tutorial - Module 010_002: Java Annotations & Custom Processors\r
 * Topic 12: Compile-Time Annotation Processing (APT) - Modern Java Capstone\r
 * Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
 */\r
\r
package com.coderaccotax.javatutorial.annotations;\r
\r
public class CompileTimeAptCapstoneDemo {\r
\r
    public static void main(String[] args) {\r
        System.out.println("==========================================================================");\r
        System.out.println(" TOPIC 12: COMPILE-TIME ANNOTATION PROCESSING (APT) - BARRACKPORE");\r
        System.out.println("==========================================================================\\n");\r
\r
        System.out.println(">>> HOW THE ANNOTATION PROCESSING TOOL (APT) WORKS DURING javac COMPILATION:");\r
        System.out.println("  1. javac starts compilation round 1 on .java source files.");\r
        System.out.println("  2. javac scans AST (Abstract Syntax Tree) for annotations.");\r
        System.out.println("  3. Registered 'javax.annotation.processing.Processor' plugins are invoked.");\r
        System.out.println("  4. Processors generate new source files (e.g. MapStruct generates StudentMapperImpl.java).");\r
        System.out.println("  5. javac loops back (Round 2) to compile the freshly generated source files!");\r
        System.out.println("  6. Once no new files are generated, javac emits final .class bytecode.\\n");\r
\r
        System.out.println(">>> MAJOR COMPILE-TIME ANNOTATION PROCESSORS IN INDUSTRY:");\r
        System.out.println("  - Project Lombok : @Getter, @Setter, @Builder (AST manipulation).");\r
        System.out.println("  - MapStruct      : High-performance type-safe DTO-to-Entity bean mappers.");\r
        System.out.println("  - Google Auto    : @AutoValue, @AutoService compile-time code generators.");\r
        System.out.println("  - Dagger 2       : Compile-time dependency injection without runtime reflection.");\r
        System.out.println("  - Micronaut / Quarkus: Ahead-Of-Time (AOT) DI for instant serverless startup.");\r
\r
        System.out.println("\\n==========================================================================");\r
        System.out.println(" MODULE 010_002 COMPLETE: JAVA ANNOTATIONS & APT MASTERED!");\r
        System.out.println("==========================================================================");\r
    }\r
}\r
`,s=`================================================================================\r
JAVA CORE TUTORIAL - QUICK REVISION GUIDE\r
Module 010_002: Java Annotations & Custom Processors\r
Topic 12: Compile-Time APT Capstone\r
Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
================================================================================\r
\r
1. WHAT IS ANNOTATION PROCESSING (JSR 269):\r
   - A standard API ('javax.annotation.processing.*') integrated directly into 'javac'.\r
   - Executes during the compilation phase before bytecode is emitted.\r
   - Operates in iterative 'rounds' until all generated files are fully processed.\r
\r
2. RUNTIME REFLECTION VS COMPILE-TIME APT:\r
   -----------------------------------------------------------------------------\r
   FEATURE            RUNTIME REFLECTION         COMPILE-TIME APT\r
   -----------------------------------------------------------------------------\r
   Execution Timing   Application Startup / Run  Compilation Time ('javac')\r
   Performance Cost   Startup delay & Reflection Zero runtime overhead (pure code)\r
   Type Safety        Runtime errors             Compile-time errors & IDE check\r
   Examples           Spring, Hibernate          Lombok, MapStruct, Dagger\r
   -----------------------------------------------------------------------------\r
\r
================================================================================\r
Classroom Practice: Barrackpore Academy | Mentor: Sukanta Hui\r
================================================================================\r
`,i=[{question:"What is the primary performance advantage of compile-time annotation processing (APT) over runtime reflection?",shortAnswer:"APT generates pure, standard Java source code at compile time with zero runtime reflection overhead, resulting in instant application startup, zero reflection overhead during execution, and full compile-time type safety.",explanation:"Pioneered by frameworks like Dagger, MapStruct, and Quarkus.",hint:"Eliminates runtime reflection overhead and enables instant startup times.",level:"Intermediate",codeExample:"Generated code runs as standard direct method calls."},{question:"What standard Java interface must a custom compile-time annotation processor implement?",shortAnswer:"javax.annotation.processing.Processor (typically extended via javax.annotation.processing.AbstractProcessor).",explanation:"Registered via META-INF/services/javax.annotation.processing.Processor or @AutoService.",hint:"javax.annotation.processing.Processor (or AbstractProcessor).",level:"Advanced",codeExample:"public class MyProcessor extends AbstractProcessor { ... }"}];function A(){return e.jsxs("div",{className:"space-y-12 px-4 md:px-8 py-8 text-slate-200 bg-slate-900 min-h-screen",children:[e.jsxs("header",{className:"space-y-4 border-b border-slate-800 pb-6",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"px-3 py-1 bg-sky-500/10 text-sky-400 border border-sky-500/20 text-xs font-semibold rounded-full uppercase tracking-wider",children:"Module 010_002 · Topic 12"}),e.jsx("span",{className:"px-3 py-1 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-xs font-semibold rounded-full",children:"Java Annotations & APT"})]}),e.jsxs("h1",{className:"text-xl sm:text-2xl md:text-3xl font-bold text-white tracking-tight",children:["Compile-Time Annotation Processing: ",e.jsx("code",{className:"text-emerald-400 font-mono",children:"APT & javax.annotation.processing.Processor"})," (Capstone)"]}),e.jsx("p",{className:"text-base md:text-lg text-slate-400 leading-relaxed max-w-4xl",children:"Zero runtime overhead: how Lombok, MapStruct, and AutoValue hook into javac compilation rounds to generate source code and bytecode at build time."})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsxs("h2",{className:"text-2xl font-bold text-emerald-400 flex items-center gap-2",children:[e.jsx("span",{children:"💻"})," Hands-On Java Demo Code"]}),e.jsx(t,{fileModule:a,title:"CompileTimeAptCapstoneDemo.java",highlightLines:[18,25,34,43,52]})]}),e.jsx("section",{className:"space-y-4",children:e.jsx(n,{title:"Java Annotations FAQs",questions:i})}),e.jsx("section",{className:"space-y-4",children:e.jsx(r,{content:s,title:"Module 010_002 Topic 12: Compile-Time APT Capstone",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Printable Note",downloadFileName:"010_002_topic12_compile_time_apt_capstone_note.txt"})}),e.jsx(o,{note:"Congratulations on completing Module 2 of Segment 10! You now understand both Runtime Reflection Annotations and Compile-Time Annotation Processors (APT)! Next up: The inner engine of Java — JVM Architecture & ClassLoaders! — Sukanta Hui"})]})}export{A as default};
