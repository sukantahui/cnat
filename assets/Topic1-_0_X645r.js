import{j as e}from"./vendor-react-core-Doz9nIC6.js";import{J as n}from"./JavaFileLoader-BfBG3xz_.js";import{F as t}from"./FAQTemplate-BHhlgA96.js";import{P as o}from"./PlainTextPrint-C08xhKA4.js";import{T as r}from"./TeacherSukantaHui-DerPxfxp.js";import"./JavaCodeBlock-BwsLxS3r.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-CH1iX9C8.js";const a=`/**\r
 * Java Core Tutorial - Module 012_004: Custom DI Framework\r
 * Topic 1: Custom Annotations - @Component, @Autowired & @Transactional\r
 * Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
 */\r
\r
package com.coderaccotax.javatutorial.minispring;\r
\r
import java.lang.annotation.ElementType;\r
import java.lang.annotation.Retention;\r
import java.lang.annotation.RetentionPolicy;\r
import java.lang.annotation.Target;\r
\r
public class CustomFrameworkAnnotationsDemo {\r
\r
    // 1. Core Component Marker:\r
    @Retention(RetentionPolicy.RUNTIME)\r
    @Target(ElementType.TYPE)\r
    public @interface Component {\r
        String value() default "";\r
    }\r
\r
    // 2. Service Stereotype:\r
    @Retention(RetentionPolicy.RUNTIME)\r
    @Target(ElementType.TYPE)\r
    public @interface Service {}\r
\r
    // 3. Autowire Dependency Injection Marker:\r
    @Retention(RetentionPolicy.RUNTIME)\r
    @Target({ElementType.FIELD, ElementType.CONSTRUCTOR})\r
    public @interface Autowired {}\r
\r
    // 4. Declarative Transaction Boundary:\r
    @Retention(RetentionPolicy.RUNTIME)\r
    @Target(ElementType.METHOD)\r
    public @interface Transactional {}\r
\r
    // 5. Config Value Injection:\r
    @Retention(RetentionPolicy.RUNTIME)\r
    @Target(ElementType.FIELD)\r
    public @interface Value {\r
        String value();\r
    }\r
\r
    public static void main(String[] args) {\r
        System.out.println("==========================================================================");\r
        System.out.println(" TOPIC 1: CUSTOM FRAMEWORK ANNOTATIONS - BARRACKPORE ACADEMY");\r
        System.out.println("==========================================================================\\n");\r
\r
        System.out.println("Successfully declared Custom Framework Annotations:");\r
        System.out.println("  - @Component     : Targets TYPE with RUNTIME retention.");\r
        System.out.println("  - @Service       : Stereotype for business services.");\r
        System.out.println("  - @Autowired     : Targets FIELD and CONSTRUCTOR for DI.");\r
        System.out.println("  - @Transactional : Targets METHOD for dynamic proxy interceptors.");\r
        System.out.println("  - @Value         : Injects external property strings.");\r
\r
        System.out.println("\\n==========================================================================");\r
    }\r
}\r
`,i=`================================================================================\r
JAVA CORE TUTORIAL - QUICK REVISION GUIDE\r
Module 012_004: Custom DI Framework\r
Topic 1: Custom Annotations\r
Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
================================================================================\r
\r
1. ANNOTATION TARGETS:\r
   - 'ElementType.TYPE'        : For class definitions (@Component, @Service).\r
   - 'ElementType.FIELD'       : For field injection (@Autowired, @Value).\r
   - 'ElementType.METHOD'      : For method interception (@Transactional).\r
\r
2. RETENTION POLICY:\r
   - Must strictly be 'RetentionPolicy.RUNTIME' for reflection inspection.\r
\r
================================================================================\r
Classroom Practice: Barrackpore Academy | Mentor: Sukanta Hui\r
================================================================================\r
`,s=[{question:"Why is @Retention(RetentionPolicy.RUNTIME) mandatory for custom Dependency Injection annotations?",shortAnswer:"Because without RUNTIME retention, the compiler discards annotations or stores them in class files without loading them into JVM memory, making them completely invisible to reflection APIs (Class.getAnnotations(), Field.isAnnotationPresent()).",explanation:"Essential for runtime metadata inspection.",hint:"Makes annotations visible to JVM reflection at runtime.",level:"Beginner",codeExample:"@Retention(RetentionPolicy.RUNTIME)"},{question:"Why are stereotype annotations like @Service and @Repository useful even if they behave identically to @Component?",shortAnswer:"They convey explicit architectural intent (domain layering), enable layer-specific exception translation, and allow AOP pointcuts to target specific layers (e.g. apply caching only to @Repository beans).",explanation:"Domain clarity and specialized aspect targeting.",hint:"Communicates domain intent and allows layer-specific AOP targeting.",level:"Intermediate",codeExample:"@Service public class PaymentService { ... }"}];function x(){return e.jsxs("div",{className:"space-y-12 px-4 md:px-8 py-8 text-slate-200 bg-slate-900 min-h-screen",children:[e.jsxs("header",{className:"space-y-4 border-b border-slate-800 pb-6",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"px-3 py-1 bg-sky-500/10 text-sky-400 border border-sky-500/20 text-xs font-semibold rounded-full uppercase tracking-wider",children:"Module 012_004 · Topic 1"}),e.jsx("span",{className:"px-3 py-1 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-xs font-semibold rounded-full",children:"Capstone 3: Custom DI Framework"})]}),e.jsxs("h1",{className:"text-xl sm:text-2xl md:text-3xl font-bold text-white tracking-tight",children:["Custom Annotations: ",e.jsx("code",{className:"text-emerald-400 font-mono",children:"@Component, @Autowired & @Transactional"})]}),e.jsx("p",{className:"text-base md:text-lg text-slate-400 leading-relaxed max-w-4xl",children:"Declarative metadata: building custom runtime annotations (@Component, @Service, @Repository, @Autowired, @Transactional, @Value) with RetentionPolicy.RUNTIME."})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsxs("h2",{className:"text-2xl font-bold text-emerald-400 flex items-center gap-2",children:[e.jsx("span",{children:"💻"})," Hands-On Java Demo Code"]}),e.jsx(n,{fileModule:a,title:"CustomFrameworkAnnotationsDemo.java",highlightLines:[18,25,34,43]})]}),e.jsx("section",{className:"space-y-4",children:e.jsx(t,{title:"Custom DI Framework FAQs",questions:s})}),e.jsx("section",{className:"space-y-4",children:e.jsx(o,{content:i,title:"Module 012_004 Topic 1: Custom Framework Annotations",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Printable Note",downloadFileName:"012_004_topic1_custom_framework_annotations_note.txt"})}),e.jsx(r,{note:"Notice that all framework annotations MUST use @Retention(RetentionPolicy.RUNTIME)! If you forget this, the Java compiler will strip the annotations from the .class bytecode, and our framework reflection scanner won't be able to find them! — Sukanta Hui"})]})}export{x as default};
