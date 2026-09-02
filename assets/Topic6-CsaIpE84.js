import{j as e}from"./vendor-react-core-Doz9nIC6.js";import{J as n}from"./JavaFileLoader-BfBG3xz_.js";import{F as t}from"./FAQTemplate-BHhlgA96.js";import{P as a}from"./PlainTextPrint-C08xhKA4.js";import{T as s}from"./TeacherSukantaHui-RpFLNJ5A.js";import"./JavaCodeBlock-BwsLxS3r.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-wprqVFW_.js";const r=`/**\r
 * Java Core Tutorial - Module 010_002: Java Annotations & Custom Processors\r
 * Topic 6: @Inherited Meta-Annotation - Subclass Annotation Inheritance\r
 * Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
 */\r
\r
package com.coderaccotax.javatutorial.annotations;\r
\r
import java.lang.annotation.Inherited;\r
import java.lang.annotation.Retention;\r
import java.lang.annotation.RetentionPolicy;\r
\r
public class InheritedMetaAnnotationDemo {\r
\r
    // 1. INHERITED Annotation: Subclasses will automatically possess this annotation!\r
    @Inherited\r
    @Retention(RetentionPolicy.RUNTIME)\r
    public @interface AcademySecured { String securityLevel() default "ADMIN"; }\r
\r
    // 2. NON-INHERITED Annotation: Subclasses will NOT inherit this!\r
    @Retention(RetentionPolicy.RUNTIME)\r
    public @interface TransientLabel { String label(); }\r
\r
    // Parent Base Class\r
    @AcademySecured(securityLevel = "FACULTY_HIGH")\r
    @TransientLabel(label = "BASE_TEMPLATE")\r
    public static class BaseAcademyController {}\r
\r
    // Child Subclass (Declares NO annotations directly):\r
    public static class StudentManagementController extends BaseAcademyController {}\r
\r
    public static void main(String[] args) {\r
        System.out.println("==========================================================================");\r
        System.out.println(" TOPIC 6: @INHERITED META-ANNOTATION - BARRACKPORE ACADEMY");\r
        System.out.println("==========================================================================\\n");\r
\r
        Class<?> childClass = StudentManagementController.class;\r
\r
        System.out.println(">>> TESTING ANNOTATION INHERITANCE ON SUBCLASS (StudentManagementController):");\r
        System.out.println("  - @AcademySecured present? : " + childClass.isAnnotationPresent(AcademySecured.class) + " (TRUE! Inherited from BaseAcademyController)");\r
        System.out.println("  - @TransientLabel present? : " + childClass.isAnnotationPresent(TransientLabel.class) + " (FALSE - Not marked @Inherited)");\r
\r
        if (childClass.isAnnotationPresent(AcademySecured.class)) {\r
            AcademySecured sec = childClass.getAnnotation(AcademySecured.class);\r
            System.out.println("  --> Inherited Security Level: " + sec.securityLevel());\r
        }\r
\r
        System.out.println("\\n>>> CRUCIAL @INHERITED RULE:");\r
        System.out.println("  - @Inherited ONLY affects class-to-class inheritance (extends BaseClass).");\r
        System.out.println("  - It has ZERO effect on interfaces (implementing an annotated interface does NOT inherit annotations!).");\r
        System.out.println("==========================================================================");\r
    }\r
}\r
`,i=`================================================================================\r
JAVA CORE TUTORIAL - QUICK REVISION GUIDE\r
Module 010_002: Java Annotations & Custom Processors\r
Topic 6: @Inherited Meta-Annotation\r
Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
================================================================================\r
\r
1. WHAT @INHERITED DOES:\r
   - Indicates that an annotation type is automatically inherited from superclass to subclass.\r
   - When querying a subclass via 'isAnnotationPresent()' or 'getAnnotation()', the JVM walks\r
     up the superclass hierarchy to find inherited annotations.\r
\r
2. CRITICAL LIMITATIONS:\r
   - Only applies to CLASS inheritance ('extends').\r
   - Does NOT apply to interfaces (classes implementing annotated interfaces do NOT inherit).\r
   - Does NOT apply to methods or fields (overriding methods do not inherit method annotations).\r
\r
================================================================================\r
Classroom Practice: Barrackpore Academy | Mentor: Sukanta Hui\r
================================================================================\r
`,o=[{question:"If an interface is annotated with an @Inherited annotation, does a class implementing that interface inherit the annotation?",shortAnswer:"No! The @Inherited meta-annotation only works for superclass-to-subclass inheritance via the 'extends' keyword. It has no effect when implementing interfaces.",explanation:"Core Java language specification rule for @Inherited.",hint:"No, @Inherited only applies to superclasses, not interfaces.",level:"Intermediate",codeExample:"@Inherited public @interface ServiceAnn {}\\ninterface I {}\\nclass C implements I {} // C does NOT have ServiceAnn"},{question:"Does @Inherited cause overridden methods in a subclass to inherit annotations from the superclass method?",shortAnswer:"No. @Inherited only applies to type declarations (classes). Overridden methods in subclasses do not inherit annotations from the overridden superclass method.",explanation:"Method annotations must be declared explicitly on each overriding method if needed.",hint:"No, @Inherited only applies to classes, not method overrides.",level:"Advanced",codeExample:"// Subclass method must re-declare annotations"}];function x(){return e.jsxs("div",{className:"space-y-12 px-4 md:px-8 py-8 text-slate-200 bg-slate-900 min-h-screen",children:[e.jsxs("header",{className:"space-y-4 border-b border-slate-800 pb-6",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"px-3 py-1 bg-sky-500/10 text-sky-400 border border-sky-500/20 text-xs font-semibold rounded-full uppercase tracking-wider",children:"Module 010_002 · Topic 6"}),e.jsx("span",{className:"px-3 py-1 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-xs font-semibold rounded-full",children:"Java Annotations & APT"})]}),e.jsxs("h1",{className:"text-xl sm:text-2xl md:text-3xl font-bold text-white tracking-tight",children:[e.jsx("code",{className:"text-emerald-400 font-mono",children:"@Inherited"}),": Automatic Class Hierarchy Annotation Propagation"]}),e.jsx("p",{className:"text-base md:text-lg text-slate-400 leading-relaxed max-w-4xl",children:"Inheritance behavior: enabling subclasses to automatically inherit annotations from parent classes, and understanding interface inheritance limitations."})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsxs("h2",{className:"text-2xl font-bold text-emerald-400 flex items-center gap-2",children:[e.jsx("span",{children:"💻"})," Hands-On Java Demo Code"]}),e.jsx(n,{fileModule:r,title:"InheritedMetaAnnotationDemo.java",highlightLines:[18,25,34,43]})]}),e.jsx("section",{className:"space-y-4",children:e.jsx(t,{title:"Java Annotations FAQs",questions:o})}),e.jsx("section",{className:"space-y-4",children:e.jsx(a,{content:i,title:"Module 010_002 Topic 6: @Inherited Meta-Annotation",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Printable Note",downloadFileName:"010_002_topic6_inherited_meta_annotation_note.txt"})}),e.jsx(s,{note:"@Inherited only works for CLASS inheritance! It does NOT inherit annotations from interfaces to implementing classes! Remember this critical difference! — Sukanta Hui"})]})}export{x as default};
