import{j as e}from"./vendor-react-core-Doz9nIC6.js";import{J as t}from"./JavaFileLoader-BfBG3xz_.js";import{F as n}from"./FAQTemplate-CkSqDH4B.js";import{P as a}from"./PlainTextPrint-C08xhKA4.js";import{T as o}from"./TeacherSukantaHui-CyIG3xbg.js";import"./JavaCodeBlock-BwsLxS3r.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-CIaKtAt4.js";const r=`/**\r
 * Java Core Tutorial - Module 010_002: Java Annotations & Custom Processors\r
 * Topic 7: @Repeatable Annotations (Java 8+) - Container Annotation Architecture\r
 * Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
 */\r
\r
package com.coderaccotax.javatutorial.annotations;\r
\r
import java.lang.annotation.Repeatable;\r
import java.lang.annotation.Retention;\r
import java.lang.annotation.RetentionPolicy;\r
import java.lang.reflect.Method;\r
\r
public class RepeatableAnnotationsJava8Demo {\r
\r
    // 1. Container Annotation (Holds an array of repeated annotations):\r
    @Retention(RetentionPolicy.RUNTIME)\r
    public @interface BatchTimetables {\r
        BatchTimetable[] value();\r
    }\r
\r
    // 2. Repeatable Annotation: References its container annotation class\r
    @Repeatable(BatchTimetables.class)\r
    @Retention(RetentionPolicy.RUNTIME)\r
    public @interface BatchTimetable {\r
        String day();\r
        String time();\r
        String center() default "Barrackpore";\r
    }\r
\r
    // 3. Applying REPEATED annotations on a single method cleanly:\r
    public static class CourseScheduler {\r
\r
        @BatchTimetable(day = "Monday", time = "10:00 AM", center = "Barrackpore")\r
        @BatchTimetable(day = "Wednesday", time = "02:00 PM", center = "Naihati")\r
        @BatchTimetable(day = "Saturday", time = "04:30 PM", center = "Shyamnagar")\r
        public void scheduleJavaCoreBatch() {\r
            System.out.println("Java Core batch schedules active across multiple centers!");\r
        }\r
    }\r
\r
    public static void main(String[] args) throws Exception {\r
        System.out.println("==========================================================================");\r
        System.out.println(" TOPIC 7: @REPEATABLE ANNOTATIONS (JAVA 8+) - BARRACKPORE");\r
        System.out.println("==========================================================================\\n");\r
\r
        Method method = CourseScheduler.class.getMethod("scheduleJavaCoreBatch");\r
\r
        // Reading repeated annotations via getAnnotationsByType() [Java 8]:\r
        BatchTimetable[] schedules = method.getAnnotationsByType(BatchTimetable.class);\r
\r
        System.out.println(">>> 1. DISCOVERED REPEATED SCHEDULES VIA getAnnotationsByType():");\r
        for (BatchTimetable s : schedules) {\r
            System.out.println("   - Day: " + s.day() + " | Time: " + s.time() + " | Center: " + s.center());\r
        }\r
\r
        // Under the hood: It is stored in the container annotation @BatchTimetables!\r
        BatchTimetables container = method.getAnnotation(BatchTimetables.class);\r
        System.out.println("\\n>>> 2. Under the hood Container Annotation:");\r
        System.out.println("   - Container Class: " + container.getClass().getSimpleName());\r
        System.out.println("   - Contained Elements Count: " + container.value().length);\r
\r
        System.out.println("\\n==========================================================================");\r
    }\r
}\r
`,i=`================================================================================\r
JAVA CORE TUTORIAL - QUICK REVISION GUIDE\r
Module 010_002: Java Annotations & Custom Processors\r
Topic 7: @Repeatable Annotations (Java 8+)\r
Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
================================================================================\r
\r
1. WHAT @REPEATABLE DOES (Java 8+):\r
   - Allows an annotation type to be applied more than once to the same declaration.\r
   - Eliminates clunky container wrapping syntax (e.g. '@Filters({@Filter, @Filter})').\r
\r
2. THE TWO REQUIRED STEPS:\r
   1. Define Container Annotation with a 'value()' method returning an array:\r
      'public @interface Schedules { Schedule[] value(); }'\r
   2. Annotate the repeated annotation with '@Repeatable(Schedules.class)'.\r
\r
3. REFLECTION EXTRACTION METHOD:\r
   - Use 'element.getAnnotationsByType(Schedule.class)' to extract the array directly.\r
\r
================================================================================\r
Classroom Practice: Barrackpore Academy | Mentor: Sukanta Hui\r
================================================================================\r
`,s=[{question:"What is the requirement for the container annotation used with @Repeatable?",shortAnswer:"The container annotation must declare a 'value()' method whose return type is an array of the repeatable annotation type (e.g. MyAnnotation[] value();) and its @Retention and @Target must be at least as broad as the repeatable annotation.",explanation:"Enforced by javac at compile time.",hint:"Must declare a value() method returning an array of the repeatable annotation.",level:"Intermediate",codeExample:"@Retention(RetentionPolicy.RUNTIME) public @interface Containers { Item[] value(); }"},{question:"Which Reflection method should you call to retrieve repeatable annotations?",shortAnswer:"element.getAnnotationsByType(MyAnnotation.class), introduced in Java 8 to unwrap and return all repeated instances directly as an array.",explanation:"getAnnotation() would only return the container annotation wrapper.",hint:"getAnnotationsByType()",level:"Beginner",codeExample:"Schedule[] list = method.getAnnotationsByType(Schedule.class);"}];function b(){return e.jsxs("div",{className:"space-y-12 px-4 md:px-8 py-8 text-slate-200 bg-slate-900 min-h-screen",children:[e.jsxs("header",{className:"space-y-4 border-b border-slate-800 pb-6",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"px-3 py-1 bg-sky-500/10 text-sky-400 border border-sky-500/20 text-xs font-semibold rounded-full uppercase tracking-wider",children:"Module 010_002 · Topic 7"}),e.jsx("span",{className:"px-3 py-1 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-xs font-semibold rounded-full",children:"Java Annotations & APT"})]}),e.jsxs("h1",{className:"text-3xl md:text-4xl font-extrabold text-white tracking-tight",children:[e.jsx("code",{className:"text-emerald-400 font-mono",children:"@Repeatable"})," (Java 8+): Declaring Multiple Annotations on One Element"]}),e.jsx("p",{className:"text-base md:text-lg text-slate-400 leading-relaxed max-w-4xl",children:"Container annotation architecture: declaring repeated annotations cleanly without clumsy container annotation wrapper boilerplate."})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsxs("h2",{className:"text-2xl font-bold text-emerald-400 flex items-center gap-2",children:[e.jsx("span",{children:"💻"})," Hands-On Java Demo Code"]}),e.jsx(t,{fileModule:r,title:"RepeatableAnnotationsJava8Demo.java",highlightLines:[18,25,34,43]})]}),e.jsx("section",{className:"space-y-4",children:e.jsx(n,{title:"Java Annotations FAQs",questions:s})}),e.jsx("section",{className:"space-y-4",children:e.jsx(a,{content:i,title:"Module 010_002 Topic 7: @Repeatable Annotations in Java 8",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Printable Note",downloadFileName:"010_002_topic7_repeatable_annotations_java8_note.txt"})}),e.jsx(o,{note:"In Java 8, @Repeatable allows you to write @BatchTimetable multiple times on the same method! Under the hood, Java wraps them inside a container annotation like @BatchTimetables! — Sukanta Hui"})]})}export{b as default};
