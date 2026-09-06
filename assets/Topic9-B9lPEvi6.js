import{j as e}from"./vendor-react-core-Doz9nIC6.js";import{J as t}from"./JavaFileLoader-BfBG3xz_.js";import{F as n}from"./FAQTemplate-BHhlgA96.js";import{P as a}from"./PlainTextPrint-C08xhKA4.js";import{T as r}from"./TeacherSukantaHui-DDN87fI5.js";import"./JavaCodeBlock-BwsLxS3r.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-DEsnU7fn.js";const o=`/**\r
 * Java Core Tutorial - Module 010_002: Java Annotations & Custom Processors\r
 * Topic 9: Annotation Attributes - Default Values & The value() Shortcut\r
 * Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
 */\r
\r
package com.coderaccotax.javatutorial.annotations;\r
\r
import java.lang.annotation.Retention;\r
import java.lang.annotation.RetentionPolicy;\r
\r
public class DefaultValuesValueShortcutDemo {\r
\r
    // 1. Single-Element Annotation using special 'value()' method:\r
    @Retention(RetentionPolicy.RUNTIME)\r
    public @interface SecurityRole {\r
        String value(); // The special shortcut method!\r
        String center() default "Barrackpore"; // Optional with default\r
    }\r
\r
    // 2. Applying with the 'value' shortcut (No need to write 'value = "ADMIN"!'):\r
    @SecurityRole("HEAD_INSTRUCTOR")\r
    public static class TeacherPortal {}\r
\r
    // 3. Applying with multiple attributes:\r
    @SecurityRole(value = "STUDENT_LEAD", center = "Naihati Lab")\r
    public static class StudentPortal {}\r
\r
    public static void main(String[] args) {\r
        System.out.println("==========================================================================");\r
        System.out.println(" TOPIC 9: DEFAULT VALUES & VALUE() SHORTCUT - BARRACKPORE");\r
        System.out.println("==========================================================================\\n");\r
\r
        SecurityRole role1 = TeacherPortal.class.getAnnotation(SecurityRole.class);\r
        System.out.println("1. TeacherPortal (Used value() shortcut):");\r
        System.out.println("   - Role   : " + role1.value());\r
        System.out.println("   - Center : " + role1.center() + " (Auto-filled from default!)");\r
\r
        SecurityRole role2 = StudentPortal.class.getAnnotation(SecurityRole.class);\r
        System.out.println("\\n2. StudentPortal (Explicit attributes):");\r
        System.out.println("   - Role   : " + role2.value());\r
        System.out.println("   - Center : " + role2.center());\r
\r
        System.out.println("\\n==========================================================================");\r
    }\r
}\r
`,l=`================================================================================\r
JAVA CORE TUTORIAL - QUICK REVISION GUIDE\r
Module 010_002: Java Annotations & Custom Processors\r
Topic 9: Default Values & value() Shortcut\r
Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
================================================================================\r
\r
1. THE 'VALUE()' SINGLE-ELEMENT SHORTCUT:\r
   - If an annotation has an element named 'value()', and it is the ONLY element being specified,\r
     the attribute name can be omitted:\r
     '@SecurityRole("ADMIN")' is identical to '@SecurityRole(value="ADMIN")'.\r
\r
2. DEFAULT VALUES:\r
   - Specified via the 'default' keyword: 'String center() default "Barrackpore";'.\r
   - Elements with defaults are OPTIONAL when declaring the annotation.\r
   - Elements without defaults are MANDATORY.\r
\r
================================================================================\r
Classroom Practice: Barrackpore Academy | Mentor: Sukanta Hui\r
================================================================================\r
`,i=[{question:"When can the attribute name be omitted when applying an annotation?",shortAnswer:"When the attribute is named 'value()' and it is the only attribute being assigned a value in the annotation declaration (e.g. @SuppressWarnings('unchecked')).",explanation:"Standard Java syntactic sugar for single-element annotations.",hint:"When the attribute is named value() and is the only attribute specified.",level:"Beginner",codeExample:"@Role('ADMIN') // Shortcut for @Role(value = 'ADMIN')"},{question:"Can an annotation element default value be set to null (e.g. String name() default null)?",shortAnswer:"No! The Java language specification strictly prohibits null as a default value (or as an assigned value) for annotation elements. Doing so causes a compile-time error.",explanation:"Use empty strings ('') or sentinel enum values instead of null.",hint:"No, null is never allowed in annotation attributes or defaults.",level:"Intermediate",codeExample:"String name() default ''; // Valid; default null is a COMPILE ERROR!"}];function f(){return e.jsxs("div",{className:"space-y-12 px-4 md:px-8 py-8 text-slate-200 bg-slate-900 min-h-screen",children:[e.jsxs("header",{className:"space-y-4 border-b border-slate-800 pb-6",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"px-3 py-1 bg-sky-500/10 text-sky-400 border border-sky-500/20 text-xs font-semibold rounded-full uppercase tracking-wider",children:"Module 010_002 · Topic 9"}),e.jsx("span",{className:"px-3 py-1 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-xs font-semibold rounded-full",children:"Java Annotations & APT"})]}),e.jsxs("h1",{className:"text-xl sm:text-2xl md:text-3xl font-bold text-white tracking-tight",children:["Annotation Attributes: ",e.jsx("code",{className:"text-emerald-400 font-mono",children:"Default Values & The value() Shortcut"})]}),e.jsx("p",{className:"text-base md:text-lg text-slate-400 leading-relaxed max-w-4xl",children:"Ergonomic syntax: declaring default values for optional attributes, and omitting attribute names using the special value() single-element shortcut."})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsxs("h2",{className:"text-2xl font-bold text-emerald-400 flex items-center gap-2",children:[e.jsx("span",{children:"💻"})," Hands-On Java Demo Code"]}),e.jsx(t,{fileModule:o,title:"DefaultValuesValueShortcutDemo.java",highlightLines:[18,25,34,43]})]}),e.jsx("section",{className:"space-y-4",children:e.jsx(n,{title:"Java Annotations FAQs",questions:i})}),e.jsx("section",{className:"space-y-4",children:e.jsx(a,{content:l,title:"Module 010_002 Topic 9: Default Values & value() Shortcut",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Printable Note",downloadFileName:"010_002_topic9_default_values_value_shortcut_note.txt"})}),e.jsx(r,{note:"If you name your annotation method value(), users can write @Role('ADMIN') instead of @Role(value = 'ADMIN')! It makes your custom annotations super clean! — Sukanta Hui"})]})}export{f as default};
