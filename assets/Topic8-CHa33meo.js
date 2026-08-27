import{j as n}from"./vendor-react-core-Doz9nIC6.js";import{J as t}from"./JavaFileLoader-BfBG3xz_.js";import{F as e}from"./FAQTemplate-CkSqDH4B.js";import{P as a}from"./PlainTextPrint-C08xhKA4.js";import{T as o}from"./TeacherSukantaHui-CC0AKmkm.js";import"./JavaCodeBlock-BwsLxS3r.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-BtJHuk7w.js";const r=`/**\r
 * Java Core Tutorial - Module 010_002: Java Annotations & Custom Processors\r
 * Topic 8: Creating Custom Annotations via @interface Syntax\r
 * Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
 */\r
\r
package com.coderaccotax.javatutorial.annotations;\r
\r
import java.lang.annotation.Annotation;\r
import java.lang.annotation.Retention;\r
import java.lang.annotation.RetentionPolicy;\r
\r
public class CreatingCustomAnnotationsDemo {\r
\r
    // Defining a Custom Annotation:\r
    @Retention(RetentionPolicy.RUNTIME)\r
    public @interface StudentAudit {\r
        String auditorName();\r
        String campus() default "Barrackpore";\r
        int reviewCycleDays() default 30;\r
    }\r
\r
    // Applying Custom Annotation:\r
    @StudentAudit(auditorName = "Sukanta Hui", campus = "Barrackpore Hub", reviewCycleDays = 15)\r
    public static class FinalProjectSubmission {}\r
\r
    public static void main(String[] args) {\r
        System.out.println("==========================================================================");\r
        System.out.println(" TOPIC 8: CREATING CUSTOM ANNOTATIONS - BARRACKPORE ACADEMY");\r
        System.out.println("==========================================================================\\n");\r
\r
        Class<?> clazz = FinalProjectSubmission.class;\r
        StudentAudit audit = clazz.getAnnotation(StudentAudit.class);\r
\r
        System.out.println(">>> 1. Inspecting Custom Annotation Instance:");\r
        System.out.println("   - Auditor Name       : " + audit.auditorName());\r
        System.out.println("   - Campus Center      : " + audit.campus());\r
        System.out.println("   - Review Cycle Days  : " + audit.reviewCycleDays() + " days");\r
\r
        System.out.println("\\n>>> 2. Verifying Annotation Superclass:");\r
        System.out.println("   - Is Annotation?     : " + audit.annotationType().isAnnotation());\r
        System.out.println("   - Base Interface     : " + Annotation.class.getName());\r
\r
        System.out.println("\\n>>> RULES FOR @INTERFACE ELEMENT METHODS:");\r
        System.out.println("  1. Methods must have ZERO parameters (no arguments).");\r
        System.out.println("  2. Methods cannot have a 'throws' clause.");\r
        System.out.println("  3. Methods can have default values using the 'default' keyword.");\r
        System.out.println("==========================================================================");\r
    }\r
}\r
`,i=`================================================================================\r
JAVA CORE TUTORIAL - QUICK REVISION GUIDE\r
Module 010_002: Java Annotations & Custom Processors\r
Topic 8: Creating Custom Annotations (@interface)\r
Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
================================================================================\r
\r
1. THE '@INTERFACE' KEYWORD:\r
   - Declares an annotation type.\r
   - Implicitly extends 'java.lang.annotation.Annotation'.\r
   - Annotation types cannot explicitly extend other classes or interfaces.\r
\r
2. ELEMENT METHOD RULES:\r
   - No parameters allowed ('String value()' is valid; 'String value(int x)' is a compile error).\r
   - No 'throws' clauses allowed.\r
   - Return types are restricted to specific allowed types.\r
\r
================================================================================\r
Classroom Practice: Barrackpore Academy | Mentor: Sukanta Hui\r
================================================================================\r
`,s=[{question:"Can an element method in a custom annotation declare parameters (e.g. String title(int id))?",shortAnswer:"No! All methods in an annotation declaration must have zero parameters. Declaring parameters produces a compile-time error.",explanation:"Annotation attributes are declarative properties, not dynamic functions.",hint:"Zero parameters are allowed in annotation methods.",level:"Beginner",codeExample:"public @interface Invalid { String value(int id); // COMPILE ERROR! }"},{question:"Can an annotation explicitly extend another annotation (e.g. @interface SubAnn extends BaseAnn)?",shortAnswer:"No. Java syntax does not allow annotations to use the 'extends' keyword. All annotations implicitly extend java.lang.annotation.Annotation.",explanation:"Inheritance between annotations is not supported in Java.",hint:"No, annotations cannot extend other annotations.",level:"Intermediate",codeExample:"public @interface MyAnn {} // Implicitly extends java.lang.annotation.Annotation"}];function A(){return n.jsxs("div",{className:"space-y-12 px-4 md:px-8 py-8 text-slate-200 bg-slate-900 min-h-screen",children:[n.jsxs("header",{className:"space-y-4 border-b border-slate-800 pb-6",children:[n.jsxs("div",{className:"flex items-center gap-3",children:[n.jsx("span",{className:"px-3 py-1 bg-sky-500/10 text-sky-400 border border-sky-500/20 text-xs font-semibold rounded-full uppercase tracking-wider",children:"Module 010_002 · Topic 8"}),n.jsx("span",{className:"px-3 py-1 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-xs font-semibold rounded-full",children:"Java Annotations & APT"})]}),n.jsxs("h1",{className:"text-3xl md:text-4xl font-extrabold text-white tracking-tight",children:["Creating Custom Annotations: ",n.jsx("code",{className:"text-emerald-400 font-mono",children:"The @interface Syntax & Contracts"})]}),n.jsx("p",{className:"text-base md:text-lg text-slate-400 leading-relaxed max-w-4xl",children:"Crafting domain annotations: the @interface declaration, extending java.lang.annotation.Annotation implicitly, and element method syntax."})]}),n.jsxs("section",{className:"space-y-4",children:[n.jsxs("h2",{className:"text-2xl font-bold text-emerald-400 flex items-center gap-2",children:[n.jsx("span",{children:"💻"})," Hands-On Java Demo Code"]}),n.jsx(t,{fileModule:r,title:"CreatingCustomAnnotationsDemo.java",highlightLines:[18,25,34,43]})]}),n.jsx("section",{className:"space-y-4",children:n.jsx(e,{title:"Java Annotations FAQs",questions:s})}),n.jsx("section",{className:"space-y-4",children:n.jsx(a,{content:i,title:"Module 010_002 Topic 8: Creating Custom Annotations",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Printable Note",downloadFileName:"010_002_topic8_creating_custom_annotations_note.txt"})}),n.jsx(o,{note:"When you write public @interface MyAnn, the compiler creates an interface extending java.lang.annotation.Annotation! Annotation methods cannot take parameters or throw exceptions! — Sukanta Hui"})]})}export{A as default};
