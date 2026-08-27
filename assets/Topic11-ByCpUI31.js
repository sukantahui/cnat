import{j as n}from"./vendor-react-core-Doz9nIC6.js";import{J as e}from"./JavaFileLoader-BfBG3xz_.js";import{F as t}from"./FAQTemplate-CkSqDH4B.js";import{P as a}from"./PlainTextPrint-C08xhKA4.js";import{T as o}from"./TeacherSukantaHui-CyIG3xbg.js";import"./JavaCodeBlock-BwsLxS3r.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-CIaKtAt4.js";const r=`/**\r
 * Java Core Tutorial - Module 010_002: Java Annotations & Custom Processors\r
 * Topic 11: Processing Runtime Annotations via Reflection - Mini Test Runner\r
 * Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
 */\r
\r
package com.coderaccotax.javatutorial.annotations;\r
\r
import java.lang.annotation.ElementType;\r
import java.lang.annotation.Retention;\r
import java.lang.annotation.RetentionPolicy;\r
import java.lang.annotation.Target;\r
import java.lang.reflect.Method;\r
\r
public class ProcessingRuntimeAnnotationsDemo {\r
\r
    // 1. Custom Test Annotation\r
    @Target(ElementType.METHOD)\r
    @Retention(RetentionPolicy.RUNTIME)\r
    public @interface AcademyTest {\r
        String description();\r
        boolean enabled() default true;\r
    }\r
\r
    // 2. Test Suite Class\r
    public static class StudentValidationTestSuite {\r
\r
        @AcademyTest(description = "Verify Swadeep's Barrackpore Enrollment")\r
        public void testSwadeepEnrollment() {\r
            System.out.println("   --> Running Swadeep Enrollment Test: PASSED ✅");\r
        }\r
\r
        @AcademyTest(description = "Verify Disabled Test Behavior", enabled = false)\r
        public void testDisabledFeature() {\r
            System.out.println("   --> Running Disabled Test (Should NOT run!)");\r
        }\r
\r
        public void helperMethodNotAnnotated() {\r
            System.out.println("   --> Unannotated helper method");\r
        }\r
    }\r
\r
    public static void main(String[] args) throws Exception {\r
        System.out.println("==========================================================================");\r
        System.out.println(" TOPIC 11: PROCESSING RUNTIME ANNOTATIONS - BARRACKPORE");\r
        System.out.println("==========================================================================\\n");\r
\r
        StudentValidationTestSuite suite = new StudentValidationTestSuite();\r
        Class<?> clazz = suite.getClass();\r
\r
        System.out.println(">>> RUNNING MINI JUNIT-STYLE TEST RUNNER FOR: " + clazz.getSimpleName());\r
\r
        int passed = 0, skipped = 0;\r
        for (Method m : clazz.getDeclaredMethods()) {\r
            if (m.isAnnotationPresent(AcademyTest.class)) {\r
                AcademyTest testAnn = m.getAnnotation(AcademyTest.class);\r
                System.out.println("\\nDiscovered Test Method: " + m.getName() + "()");\r
                System.out.println(" - Description : " + testAnn.description());\r
                System.out.println(" - Enabled     : " + testAnn.enabled());\r
\r
                if (testAnn.enabled()) {\r
                    m.invoke(suite); // Execute test method dynamically!\r
                    passed++;\r
                } else {\r
                    System.out.println("   --> Test SKIPPED ⏸️ (enabled = false)");\r
                    skipped++;\r
                }\r
            }\r
        }\r
\r
        System.out.println("\\n>>> TEST RUNNER SUMMARY: " + passed + " Passed, " + skipped + " Skipped.");\r
        System.out.println("==========================================================================");\r
    }\r
}\r
`,s=`================================================================================\r
JAVA CORE TUTORIAL - QUICK REVISION GUIDE\r
Module 010_002: Java Annotations & Custom Processors\r
Topic 11: Processing Runtime Annotations\r
Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
================================================================================\r
\r
1. REFLECTION METHODS FOR ANNOTATIONS ('AnnotatedElement' interface):\r
   - 'boolean isAnnotationPresent(Class<? extends Annotation> annotationClass)'\r
   - '<T extends Annotation> T getAnnotation(Class<T> annotationClass)'\r
   - 'Annotation[] getAnnotations()': All annotations (including inherited).\r
   - 'Annotation[] getDeclaredAnnotations()': Directly declared annotations.\r
\r
2. RUNTIME PIPELINE PATTERN:\r
   - Iterate over class / method / field descriptors.\r
   - Test for presence of target annotation.\r
   - Extract attribute values.\r
   - Execute framework behavior (security check, dependency injection, validation).\r
\r
================================================================================\r
Classroom Practice: Barrackpore Academy | Mentor: Sukanta Hui\r
================================================================================\r
`,i=[{question:"What interface provides getAnnotation() and isAnnotationPresent() across Class, Method, Field, and Constructor?",shortAnswer:"java.lang.reflect.AnnotatedElement, which is implemented by Class, Method, Field, Constructor, and Parameter.",explanation:"Provides uniform annotation introspection across all language elements.",hint:"AnnotatedElement interface.",level:"Intermediate",codeExample:"AnnotatedElement element = clazz.getMethod('test'); element.isAnnotationPresent(Test.class);"},{question:"What does getAnnotation(MyAnn.class) return if the annotation is NOT present on the target element?",shortAnswer:"It returns null.",explanation:"Always check isAnnotationPresent() or verify non-null before dereferencing.",hint:"Returns null.",level:"Beginner",codeExample:"MyAnn ann = element.getAnnotation(MyAnn.class); if (ann != null) { ... }"}];function T(){return n.jsxs("div",{className:"space-y-12 px-4 md:px-8 py-8 text-slate-200 bg-slate-900 min-h-screen",children:[n.jsxs("header",{className:"space-y-4 border-b border-slate-800 pb-6",children:[n.jsxs("div",{className:"flex items-center gap-3",children:[n.jsx("span",{className:"px-3 py-1 bg-sky-500/10 text-sky-400 border border-sky-500/20 text-xs font-semibold rounded-full uppercase tracking-wider",children:"Module 010_002 · Topic 11"}),n.jsx("span",{className:"px-3 py-1 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-xs font-semibold rounded-full",children:"Java Annotations & APT"})]}),n.jsxs("h1",{className:"text-3xl md:text-4xl font-extrabold text-white tracking-tight",children:["Processing Runtime Annotations: ",n.jsx("code",{className:"text-emerald-400 font-mono",children:"isAnnotationPresent() & Reflection Pipeline"})]}),n.jsx("p",{className:"text-base md:text-lg text-slate-400 leading-relaxed max-w-4xl",children:"Building a custom mini-framework: discovering annotations on classes, methods, and fields to validate data constraints and execute automated test runners."})]}),n.jsxs("section",{className:"space-y-4",children:[n.jsxs("h2",{className:"text-2xl font-bold text-emerald-400 flex items-center gap-2",children:[n.jsx("span",{children:"💻"})," Hands-On Java Demo Code"]}),n.jsx(e,{fileModule:r,title:"ProcessingRuntimeAnnotationsDemo.java",highlightLines:[18,25,34,43]})]}),n.jsx("section",{className:"space-y-4",children:n.jsx(t,{title:"Java Annotations FAQs",questions:i})}),n.jsx("section",{className:"space-y-4",children:n.jsx(a,{content:s,title:"Module 010_002 Topic 11: Processing Runtime Annotations",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Printable Note",downloadFileName:"010_002_topic11_processing_runtime_annotations_note.txt"})}),n.jsx(o,{note:"Let's build our own mini-JUnit test runner! We scan a class for @AcademyTest methods and execute only the annotated methods dynamically via Reflection! — Sukanta Hui"})]})}export{T as default};
