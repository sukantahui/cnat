import{j as n}from"./vendor-react-core-Doz9nIC6.js";import{J as e}from"./JavaFileLoader-BfBG3xz_.js";import{F as t}from"./FAQTemplate-CkSqDH4B.js";import{P as a}from"./PlainTextPrint-C08xhKA4.js";import{T as o}from"./TeacherSukantaHui-CC0AKmkm.js";import"./JavaCodeBlock-BwsLxS3r.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-BtJHuk7w.js";const r=`/**\r
 * Java Core Tutorial - Module 010_002: Java Annotations & Custom Processors\r
 * Topic 2: Meta-Annotations Overview (Annotations That Annotate Annotations)\r
 * Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
 */\r
\r
package com.coderaccotax.javatutorial.annotations;\r
\r
import java.lang.annotation.Documented;\r
import java.lang.annotation.ElementType;\r
import java.lang.annotation.Inherited;\r
import java.lang.annotation.Retention;\r
import java.lang.annotation.RetentionPolicy;\r
import java.lang.annotation.Target;\r
\r
public class MetaAnnotationsOverviewDemo {\r
\r
    // Custom Annotation fully configured with Meta-Annotations:\r
    @Documented                            // 1. Include in Javadoc\r
    @Inherited                             // 2. Automatically inherited by subclasses\r
    @Target({ElementType.TYPE, ElementType.METHOD}) // 3. Allowed on classes, interfaces & methods\r
    @Retention(RetentionPolicy.RUNTIME)    // 4. Retained in memory at runtime\r
    public @interface AcademyService {\r
        String serviceCode() default "DEFAULT_SRV";\r
        String managedBy() default "Barrackpore Admin";\r
    }\r
\r
    @AcademyService(serviceCode = "SRV-JAVA-101", managedBy = "Sukanta Hui")\r
    public static class StudentRegistrationSystem {}\r
\r
    public static void main(String[] args) {\r
        System.out.println("==========================================================================");\r
        System.out.println(" TOPIC 2: META-ANNOTATIONS OVERVIEW - BARRACKPORE ACADEMY");\r
        System.out.println("==========================================================================\\n");\r
\r
        Class<?> clazz = StudentRegistrationSystem.class;\r
        AcademyService ann = clazz.getAnnotation(AcademyService.class);\r
\r
        System.out.println(">>> 1. Custom Annotation Configured via Meta-Annotations:");\r
        System.out.println("   - Target Class : " + clazz.getSimpleName());\r
        System.out.println("   - Service Code : " + ann.serviceCode());\r
        System.out.println("   - Managed By   : " + ann.managedBy());\r
\r
        System.out.println("\\n>>> THE 5 STANDARD META-ANNOTATIONS (java.lang.annotation.*):");\r
        System.out.println("   1. @Retention  : Defines lifecycle stage (SOURCE, CLASS, RUNTIME).");\r
        System.out.println("   2. @Target     : Restricts applicable code locations (TYPE, METHOD, FIELD, etc.).");\r
        System.out.println("   3. @Documented : Includes annotation in Javadoc output.");\r
        System.out.println("   4. @Inherited  : Subclasses inherit parent class annotations.");\r
        System.out.println("   5. @Repeatable : Allows multiple annotations of same type on one element.");\r
\r
        System.out.println("\\n==========================================================================");\r
    }\r
}\r
`,i=`================================================================================\r
JAVA CORE TUTORIAL - QUICK REVISION GUIDE\r
Module 010_002: Java Annotations & Custom Processors\r
Topic 2: Meta-Annotations Overview\r
Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
================================================================================\r
\r
1. WHAT ARE META-ANNOTATIONS:\r
   - Built-in annotations in 'java.lang.annotation' used specifically to decorate\r
     and configure custom annotation declarations.\r
\r
2. THE 5 CORE META-ANNOTATIONS:\r
   -----------------------------------------------------------------------------\r
   META-ANNOTATION   PURPOSE\r
   -----------------------------------------------------------------------------\r
   @Retention        Controls how long the annotation is retained (SOURCE, CLASS, RUNTIME).\r
   @Target           Restricts what language elements the annotation can be applied to.\r
   @Documented       Ensures the annotation appears in generated Javadoc HTML.\r
   @Inherited        Enables automatic inheritance by subclasses of annotated classes.\r
   @Repeatable       Permits declaring the same annotation multiple times on an element.\r
   -----------------------------------------------------------------------------\r
\r
================================================================================\r
Classroom Practice: Barrackpore Academy | Mentor: Sukanta Hui\r
================================================================================\r
`,s=[{question:"What package contains Java's standard meta-annotations?",shortAnswer:"java.lang.annotation package (containing @Retention, @Target, @Documented, @Inherited, @Repeatable, RetentionPolicy, and ElementType).",explanation:"Core Java standard library package for annotation definitions.",hint:"java.lang.annotation",level:"Beginner",codeExample:"import java.lang.annotation.*;"},{question:"What happens if you create a custom annotation without specifying @Target?",shortAnswer:"The custom annotation can be applied to almost ANY valid Java element (classes, methods, fields, parameters, constructors, local variables), except type parameter declarations.",explanation:"Omitting @Target creates an unconstrained annotation.",hint:"It can be applied to all standard Java elements by default.",level:"Intermediate",codeExample:"public @interface OpenAnnotation {} // Applicable everywhere"}];function T(){return n.jsxs("div",{className:"space-y-12 px-4 md:px-8 py-8 text-slate-200 bg-slate-900 min-h-screen",children:[n.jsxs("header",{className:"space-y-4 border-b border-slate-800 pb-6",children:[n.jsxs("div",{className:"flex items-center gap-3",children:[n.jsx("span",{className:"px-3 py-1 bg-sky-500/10 text-sky-400 border border-sky-500/20 text-xs font-semibold rounded-full uppercase tracking-wider",children:"Module 010_002 · Topic 2"}),n.jsx("span",{className:"px-3 py-1 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-xs font-semibold rounded-full",children:"Java Annotations & APT"})]}),n.jsxs("h1",{className:"text-3xl md:text-4xl font-extrabold text-white tracking-tight",children:["Meta-Annotations: ",n.jsx("code",{className:"text-emerald-400 font-mono",children:"Annotations That Annotate Other Annotations"})]}),n.jsx("p",{className:"text-base md:text-lg text-slate-400 leading-relaxed max-w-4xl",children:"The architect's toolkit: understanding @Retention, @Target, @Documented, @Inherited, and @Repeatable in the java.lang.annotation package."})]}),n.jsxs("section",{className:"space-y-4",children:[n.jsxs("h2",{className:"text-2xl font-bold text-emerald-400 flex items-center gap-2",children:[n.jsx("span",{children:"💻"})," Hands-On Java Demo Code"]}),n.jsx(e,{fileModule:r,title:"MetaAnnotationsOverviewDemo.java",highlightLines:[18,25,34,43]})]}),n.jsx("section",{className:"space-y-4",children:n.jsx(t,{title:"Java Annotations FAQs",questions:s})}),n.jsx("section",{className:"space-y-4",children:n.jsx(a,{content:i,title:"Module 010_002 Topic 2: Meta-Annotations Overview",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Printable Note",downloadFileName:"010_002_topic2_meta_annotations_overview_note.txt"})}),n.jsx(o,{note:"Meta-annotations are the rules for your annotations! When creating custom annotations, you MUST decide: Where can it be used (@Target)? And How long does it live (@Retention)? — Sukanta Hui"})]})}export{T as default};
