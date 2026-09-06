import{j as n}from"./vendor-react-core-Doz9nIC6.js";import{J as e}from"./JavaFileLoader-BfBG3xz_.js";import{F as t}from"./FAQTemplate-BHhlgA96.js";import{P as r}from"./PlainTextPrint-C08xhKA4.js";import{T as a}from"./TeacherSukantaHui-DDN87fI5.js";import"./JavaCodeBlock-BwsLxS3r.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-DEsnU7fn.js";const o=`/**\r
 * Java Core Tutorial - Module 010_002: Java Annotations & Custom Processors\r
 * Topic 10: Valid Data Types for Annotation Elements\r
 * Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
 */\r
\r
package com.coderaccotax.javatutorial.annotations;\r
\r
import java.lang.annotation.Retention;\r
import java.lang.annotation.RetentionPolicy;\r
import java.util.Arrays;\r
\r
public class ValidAnnotationElementTypesDemo {\r
\r
    public enum AcademyTier { FOUNDATION, INTERMEDIATE, PRO }\r
\r
    // Nested Annotation Type\r
    public @interface CenterLocation {\r
        String city();\r
        String pin();\r
    }\r
\r
    // Custom Annotation showcasing ALL 6 LEGAL DATA TYPES:\r
    @Retention(RetentionPolicy.RUNTIME)\r
    public @interface ComprehensiveCourseConfig {\r
        // 1. Primitive types (byte, short, int, long, float, double, boolean, char)\r
        int courseId();\r
        double baseFee();\r
        boolean isActive() default true;\r
\r
        // 2. String\r
        String courseTitle();\r
\r
        // 3. Class (Type descriptor)\r
        Class<?> handlerClass() default Object.class;\r
\r
        // 4. Enum\r
        AcademyTier tier() default AcademyTier.PRO;\r
\r
        // 5. Another Annotation (Nested)\r
        CenterLocation primaryCenter();\r
\r
        // 6. 1-Dimensional Arrays of any of the above\r
        String[] prerequisites() default {};\r
        CenterLocation[] branchOffices() default {};\r
    }\r
\r
    @ComprehensiveCourseConfig(\r
        courseId = 101,\r
        baseFee = 4500.0,\r
        courseTitle = "Full Stack Java Core to Pro",\r
        tier = AcademyTier.PRO,\r
        primaryCenter = @CenterLocation(city = "Barrackpore", pin = "700120"),\r
        prerequisites = {"Basic C Programming", "Core OOP Concepts"}\r
    )\r
    public static class FullStackCourse {}\r
\r
    public static void main(String[] args) {\r
        System.out.println("==========================================================================");\r
        System.out.println(" TOPIC 10: VALID ANNOTATION DATA TYPES - BARRACKPORE ACADEMY");\r
        System.out.println("==========================================================================\\n");\r
\r
        ComprehensiveCourseConfig config = FullStackCourse.class.getAnnotation(ComprehensiveCourseConfig.class);\r
\r
        System.out.println(">>> 1. Reading Nested Annotation & Array Attributes:");\r
        System.out.println("   - Course Title  : " + config.courseTitle());\r
        System.out.println("   - Base Fee      : ₹" + config.baseFee());\r
        System.out.println("   - Tier (Enum)   : " + config.tier());\r
        System.out.println("   - Primary City  : " + config.primaryCenter().city() + " (PIN: " + config.primaryCenter().pin() + ")");\r
        System.out.println("   - Prerequisites : " + Arrays.toString(config.prerequisites()));\r
\r
        System.out.println("\\n>>> WHAT TYPES ARE ILLEGAL IN ANNOTATIONS:");\r
        System.out.println("  ❌ Arbitrary custom classes (e.g. StudentProfile).");\r
        System.out.println("  ❌ Collections (List<String>, Map<String, Object>).");\r
        System.out.println("  ❌ Multi-dimensional arrays (String[][]).");\r
        System.out.println("==========================================================================");\r
    }\r
}\r
`,i=`================================================================================\r
JAVA CORE TUTORIAL - QUICK REVISION GUIDE\r
Module 010_002: Java Annotations & Custom Processors\r
Topic 10: Valid Annotation Element Types\r
Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
================================================================================\r
\r
1. THE ONLY ALLOWED RETURN TYPES FOR ANNOTATION METHODS:\r
   1. All 8 Primitives ('int', 'double', 'boolean', 'char', 'long', 'float', 'byte', 'short').\r
   2. 'java.lang.String'.\r
   3. 'java.lang.Class' (or 'Class<?>').\r
   4. Any 'enum' type.\r
   5. Any other 'annotation' type (nested annotations).\r
   6. 1-Dimensional arrays of any of the above (e.g. 'String[]', 'Class<?>[]', 'int[]').\r
\r
2. STRICT RESTRICTIONS:\r
   - No arbitrary object references.\r
   - No generic Collections ('List<String>', 'Set<Integer>').\r
   - No multidimensional arrays ('String[][]').\r
\r
================================================================================\r
Classroom Practice: Barrackpore Academy | Mentor: Sukanta Hui\r
================================================================================\r
`,s=[{question:"Can an annotation element declare a return type of List<String> or Map<String, String>?",shortAnswer:"No! The Java compiler strictly forbids generic Collections as annotation element return types. You must use a 1-dimensional array (String[]) instead.",explanation:"Enforced to keep annotation metadata simple and statically evaluable.",hint:"No, Collections are forbidden; use 1D arrays like String[] instead.",level:"Beginner",codeExample:"// BAD: List<String> tags();\\n// GOOD: String[] tags();"},{question:"Are 2D arrays (such as String[][]) allowed as annotation element types?",shortAnswer:"No. Only 1-dimensional arrays of the supported types are permitted in annotation declarations.",explanation:"Multidimensional arrays violate the annotation grammar specification.",hint:"No, only 1D arrays are permitted.",level:"Intermediate",codeExample:"int[] ids(); // Legal\\nint[][] matrix(); // COMPILE ERROR!"}];function A(){return n.jsxs("div",{className:"space-y-12 px-4 md:px-8 py-8 text-slate-200 bg-slate-900 min-h-screen",children:[n.jsxs("header",{className:"space-y-4 border-b border-slate-800 pb-6",children:[n.jsxs("div",{className:"flex items-center gap-3",children:[n.jsx("span",{className:"px-3 py-1 bg-sky-500/10 text-sky-400 border border-sky-500/20 text-xs font-semibold rounded-full uppercase tracking-wider",children:"Module 010_002 · Topic 10"}),n.jsx("span",{className:"px-3 py-1 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-xs font-semibold rounded-full",children:"Java Annotations & APT"})]}),n.jsxs("h1",{className:"text-xl sm:text-2xl md:text-3xl font-bold text-white tracking-tight",children:["Valid Data Types for ",n.jsx("code",{className:"text-emerald-400 font-mono",children:"Annotation Elements"})]}),n.jsx("p",{className:"text-base md:text-lg text-slate-400 leading-relaxed max-w-4xl",children:"The 6 allowed type categories: primitives, String, Class, Enums, other Annotations, and 1-dimensional arrays thereof."})]}),n.jsxs("section",{className:"space-y-4",children:[n.jsxs("h2",{className:"text-2xl font-bold text-emerald-400 flex items-center gap-2",children:[n.jsx("span",{children:"💻"})," Hands-On Java Demo Code"]}),n.jsx(e,{fileModule:o,title:"ValidAnnotationElementTypesDemo.java",highlightLines:[18,25,34,43]})]}),n.jsx("section",{className:"space-y-4",children:n.jsx(t,{title:"Java Annotations FAQs",questions:s})}),n.jsx("section",{className:"space-y-4",children:n.jsx(r,{content:i,title:"Module 010_002 Topic 10: Valid Annotation Element Types",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Printable Note",downloadFileName:"010_002_topic10_valid_annotation_element_types_note.txt"})}),n.jsx(a,{note:"Remember: You cannot use arbitrary Objects or Collections (like List or Map) as annotation attributes! Java only allows: 1) Primitives, 2) String, 3) Class, 4) Enum, 5) Another Annotation, and 6) 1D arrays of these! — Sukanta Hui"})]})}export{A as default};
