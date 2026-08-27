import{j as e}from"./vendor-react-core-Doz9nIC6.js";import{J as n}from"./JavaFileLoader-BfBG3xz_.js";import{F as t}from"./FAQTemplate-CkSqDH4B.js";import{P as a}from"./PlainTextPrint-C08xhKA4.js";import{T as r}from"./TeacherSukantaHui-CC0AKmkm.js";import"./JavaCodeBlock-BwsLxS3r.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-BtJHuk7w.js";const i=`/**\r
 * Java Core Tutorial - Module 010_002: Java Annotations & Custom Processors\r
 * Topic 4: @Target Deep Dive - ElementType Placement Constraints\r
 * Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
 */\r
\r
package com.coderaccotax.javatutorial.annotations;\r
\r
import java.lang.annotation.ElementType;\r
import java.lang.annotation.Retention;\r
import java.lang.annotation.RetentionPolicy;\r
import java.lang.annotation.Target;\r
import java.util.List;\r
\r
public class TargetElementTypeDeepDiveDemo {\r
\r
    // 1. Field Only Target:\r
    @Target(ElementType.FIELD)\r
    @Retention(RetentionPolicy.RUNTIME)\r
    public @interface FieldOnly { String column(); }\r
\r
    // 2. Method & Parameter Target:\r
    @Target({ElementType.METHOD, ElementType.PARAMETER})\r
    @Retention(RetentionPolicy.RUNTIME)\r
    public @interface Audited { String action(); }\r
\r
    // 3. Java 8 TYPE_USE Target: Can be placed on any type usage (generics, casts)!\r
    @Target(ElementType.TYPE_USE)\r
    @Retention(RetentionPolicy.RUNTIME)\r
    public @interface NonNullField {}\r
\r
    // Demonstrating targeted placements:\r
    public static class StudentEnrollment {\r
        @FieldOnly(column = "student_name")\r
        private String name;\r
\r
        // TYPE_USE on generic type argument:\r
        private List<@NonNullField String> subjects;\r
\r
        @Audited(action = "ENROLL_STUDENT")\r
        public void enroll(@Audited(action = "STUDENT_ID_PARAM") int id) {\r
            System.out.println("Enrolling student ID: " + id + " at Barrackpore Academy...");\r
        }\r
    }\r
\r
    public static void main(String[] args) {\r
        System.out.println("==========================================================================");\r
        System.out.println(" TOPIC 4: @TARGET DEEP DIVE - BARRACKPORE ACADEMY");\r
        System.out.println("==========================================================================\\n");\r
\r
        StudentEnrollment enrollment = new StudentEnrollment();\r
        enrollment.enroll(101);\r
\r
        System.out.println("\\n>>> ELEMENTTYPE TARGETS (java.lang.annotation.ElementType):");\r
        System.out.println("   - TYPE           : Classes, Interfaces, Enums, Records");\r
        System.out.println("   - FIELD          : Instance & Static fields");\r
        System.out.println("   - METHOD         : Method declarations");\r
        System.out.println("   - PARAMETER      : Method parameter variables");\r
        System.out.println("   - CONSTRUCTOR    : Constructor declarations");\r
        System.out.println("   - LOCAL_VARIABLE : Local variables inside method bodies");\r
        System.out.println("   - ANNOTATION_TYPE: Meta-annotations only");\r
        System.out.println("   - TYPE_USE       : Anywhere a type is referenced (Java 8+)");\r
\r
        System.out.println("\\n==========================================================================");\r
    }\r
}\r
`,o=`================================================================================\r
JAVA CORE TUTORIAL - QUICK REVISION GUIDE\r
Module 010_002: Java Annotations & Custom Processors\r
Topic 4: @Target Deep Dive\r
Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
================================================================================\r
\r
1. WHAT @TARGET CONTROLS:\r
   - Restricts which syntactic elements the annotation can be attached to.\r
   - Values defined in 'java.lang.annotation.ElementType' enum.\r
\r
2. ELEMENTTYPE.TYPE_USE (Java 8+):\r
   - Allows annotations to be placed on any use of a type:\r
     * Generics: 'List<@NonNull String> list'\r
     * Type casts: '(@NonNull String) obj'\r
     * Implements: 'class Foo implements @ReadOnly Bar'\r
     * Throws: 'void read() throws @Critical IOException'\r
   - Used heavily by static analysis tools (Checker Framework, NullAway).\r
\r
================================================================================\r
Classroom Practice: Barrackpore Academy | Mentor: Sukanta Hui\r
================================================================================\r
`,s=[{question:"What happens if a developer places an annotation on a method when its @Target is restricted to ElementType.FIELD?",shortAnswer:"The javac compiler emits a compile-time error: 'annotation not applicable to this kind of declaration'.",explanation:"Enforces design constraints at compile time.",hint:"Produces a compile-time error.",level:"Beginner",codeExample:"@Target(ElementType.FIELD) public @interface Column {}"},{question:"What is the difference between ElementType.TYPE and ElementType.TYPE_USE?",shortAnswer:"ElementType.TYPE applies strictly to type declarations (class, interface, enum, record), while ElementType.TYPE_USE can be applied anywhere a type is referenced, including generic type parameters, casts, and exception declarations.",explanation:"TYPE_USE enables granular static type-checking annotations.",hint:"TYPE is for class declarations; TYPE_USE is for any type reference including generics.",level:"Intermediate",codeExample:"List<@NonNull String> items; // Requires ElementType.TYPE_USE"}];function y(){return e.jsxs("div",{className:"space-y-12 px-4 md:px-8 py-8 text-slate-200 bg-slate-900 min-h-screen",children:[e.jsxs("header",{className:"space-y-4 border-b border-slate-800 pb-6",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"px-3 py-1 bg-sky-500/10 text-sky-400 border border-sky-500/20 text-xs font-semibold rounded-full uppercase tracking-wider",children:"Module 010_002 · Topic 4"}),e.jsx("span",{className:"px-3 py-1 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-xs font-semibold rounded-full",children:"Java Annotations & APT"})]}),e.jsxs("h1",{className:"text-3xl md:text-4xl font-extrabold text-white tracking-tight",children:[e.jsx("code",{className:"text-emerald-400 font-mono",children:"@Target"})," Deep Dive: Restricting Annotation Locations & TYPE_USE"]}),e.jsx("p",{className:"text-base md:text-lg text-slate-400 leading-relaxed max-w-4xl",children:"Placement enforcement: TYPE, FIELD, METHOD, PARAMETER, CONSTRUCTOR, and Java 8 TYPE_USE for type annotations (e.g. List<String>)."})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsxs("h2",{className:"text-2xl font-bold text-emerald-400 flex items-center gap-2",children:[e.jsx("span",{children:"💻"})," Hands-On Java Demo Code"]}),e.jsx(n,{fileModule:i,title:"TargetElementTypeDeepDiveDemo.java",highlightLines:[18,25,34,43]})]}),e.jsx("section",{className:"space-y-4",children:e.jsx(t,{title:"Java Annotations FAQs",questions:s})}),e.jsx("section",{className:"space-y-4",children:e.jsx(a,{content:o,title:"Module 010_002 Topic 4: @Target & ElementType Deep Dive",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Printable Note",downloadFileName:"010_002_topic4_target_elementtype_deep_dive_note.txt"})}),e.jsx(r,{note:"ElementType.TYPE_USE introduced in Java 8 allows annotations to appear anywhere a type is used — inside generic collections, casts, and throws clauses! — Sukanta Hui"})]})}export{y as default};
