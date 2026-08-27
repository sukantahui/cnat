import{j as t}from"./vendor-react-core-Doz9nIC6.js";import{J as e}from"./JavaFileLoader-BfBG3xz_.js";import{F as n}from"./FAQTemplate-CkSqDH4B.js";import{P as r}from"./PlainTextPrint-C08xhKA4.js";import{T as a}from"./TeacherSukantaHui-CC0AKmkm.js";import"./JavaCodeBlock-BwsLxS3r.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-BtJHuk7w.js";const o=`/**\r
 * Java Core Tutorial - Module 010_001: Java Reflection API & Dynamic Member Inspection\r
 * Topic 4: Constructors & Dynamic Instantiation via getDeclaredConstructor().newInstance()\r
 * Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
 */\r
\r
package com.coderaccotax.javatutorial.reflection;\r
\r
import java.lang.reflect.Constructor;\r
import java.util.Arrays;\r
\r
public class ConstructorsDynamicInstantiationDemo {\r
\r
    public static void main(String[] args) throws Exception {\r
        System.out.println("==========================================================================");\r
        System.out.println(" TOPIC 4: DYNAMIC INSTANTIATION - BARRACKPORE ACADEMY");\r
        System.out.println("==========================================================================\\n");\r
\r
        Class<StudentProfile> clazz = StudentProfile.class;\r
\r
        // 1. Inspecting All Constructors: getConstructors() [public only] vs getDeclaredConstructors() [all]\r
        System.out.println(">>> 1. Inspecting Declared Constructors:");\r
        Constructor<?>[] constructors = clazz.getDeclaredConstructors();\r
        for (Constructor<?> c : constructors) {\r
            System.out.println("   - Constructor: " + c.getName() + "(" + Arrays.toString(c.getParameterTypes()) + ")");\r
        }\r
\r
        // 2. Dynamic Instantiation via Default No-Arg Constructor:\r
        System.out.println("\\n>>> 2. Instantiating via No-Arg Constructor:");\r
        Constructor<StudentProfile> noArgConstructor = clazz.getDeclaredConstructor();\r
        StudentProfile student1 = noArgConstructor.newInstance();\r
        System.out.println("   Created Object 1: " + student1);\r
\r
        // 3. Dynamic Instantiation via Parameterized Constructor (String, String, double):\r
        System.out.println("\\n>>> 3. Instantiating via Parameterized Constructor (String, String, double):");\r
        Constructor<StudentProfile> paramConstructor = clazz.getDeclaredConstructor(String.class, String.class, double.class);\r
        StudentProfile student2 = paramConstructor.newInstance("Swadeep Paul", "Barrackpore", 94.5);\r
        System.out.println("   Created Object 2: " + student2);\r
\r
        System.out.println("\\n>>> WHY clazz.newInstance() WAS DEPRECATED IN JAVA 9:");\r
        System.out.println("  1. clazz.newInstance() bypassed compile-time checked exception checks.");\r
        System.out.println("  2. clazz.getDeclaredConstructor().newInstance() properly wraps target exceptions inside InvocationTargetException.");\r
        System.out.println("==========================================================================");\r
    }\r
\r
    public static class StudentProfile {\r
        private String name;\r
        private String center;\r
        private double score;\r
\r
        // No-arg constructor\r
        public StudentProfile() {\r
            this.name = "Guest Student";\r
            this.center = "Barrackpore";\r
            this.score = 0.0;\r
        }\r
\r
        // Parameterized constructor\r
        public StudentProfile(String name, String center, double score) {\r
            this.name = name;\r
            this.center = center;\r
            this.score = score;\r
        }\r
\r
        @Override\r
        public String toString() {\r
            return "StudentProfile[name=" + name + ", center=" + center + ", score=" + score + "%]";\r
        }\r
    }\r
}\r
`,s=`================================================================================\r
JAVA CORE TUTORIAL - QUICK REVISION GUIDE\r
Module 010_001: Java Reflection API & Dynamic Member Inspection\r
Topic 4: Constructors & Dynamic Instantiation\r
Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
================================================================================\r
\r
1. GETCONSTRUCTORS VS GETDECLAREDCONSTRUCTORS:\r
   - 'clazz.getConstructors()': Returns ONLY public constructors.\r
   - 'clazz.getDeclaredConstructors()': Returns ALL constructors (public, protected, package-private, private).\r
\r
2. MODERN DYNAMIC INSTANTIATION IDIOM:\r
   - 'clazz.getDeclaredConstructor(Class<?>... parameterTypes).newInstance(Object... initargs)'\r
\r
3. WHY 'Class.newInstance()' IS DEPRECATED (Java 9+):\r
   - Only worked for no-arg constructors.\r
   - Propagated any checked exception thrown by the constructor without declaring it.\r
   - Modern 'Constructor.newInstance()' cleanly wraps constructor failures in 'InvocationTargetException'.\r
\r
================================================================================\r
Classroom Practice: Barrackpore Academy | Mentor: Sukanta Hui\r
================================================================================\r
`,c=[{question:"Why was Class.newInstance() deprecated in Java 9 in favor of clazz.getDeclaredConstructor().newInstance()?",shortAnswer:"Class.newInstance() bypassed checked exception handling and could only invoke public zero-argument constructors. Constructor.newInstance() supports any parameter list and wraps constructor exceptions safely in InvocationTargetException.",explanation:"Promotes safer exception transparency and uniform constructor selection.",hint:"Deprecated due to checked exception bypassing and limitation to public no-arg constructors.",level:"Intermediate",codeExample:"clazz.getDeclaredConstructor(String.class).newInstance('Swadeep');"},{question:"What exception is thrown when an invoked constructor itself throws an exception during Reflection?",shortAnswer:"java.lang.reflect.InvocationTargetException, a checked wrapper exception whose getCause() method provides the actual underlying exception thrown by the constructor body.",explanation:"Always inspect getCause() when catching InvocationTargetException.",hint:"InvocationTargetException wraps the underlying thrown exception.",level:"Intermediate",codeExample:"try { c.newInstance(); } catch (InvocationTargetException e) { Throwable cause = e.getCause(); }"}];function C(){return t.jsxs("div",{className:"space-y-12 px-4 md:px-8 py-8 text-slate-200 bg-slate-900 min-h-screen",children:[t.jsxs("header",{className:"space-y-4 border-b border-slate-800 pb-6",children:[t.jsxs("div",{className:"flex items-center gap-3",children:[t.jsx("span",{className:"px-3 py-1 bg-sky-500/10 text-sky-400 border border-sky-500/20 text-xs font-semibold rounded-full uppercase tracking-wider",children:"Module 010_001 · Topic 4"}),t.jsx("span",{className:"px-3 py-1 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-xs font-semibold rounded-full",children:"Reflection API & Metadata"})]}),t.jsxs("h1",{className:"text-3xl md:text-4xl font-extrabold text-white tracking-tight",children:["Dynamic Instantiation & Constructors: ",t.jsx("code",{className:"text-emerald-400 font-mono",children:"clazz.getDeclaredConstructor().newInstance()"})]}),t.jsx("p",{className:"text-base md:text-lg text-slate-400 leading-relaxed max-w-4xl",children:"Creating objects dynamically: getConstructors() vs getDeclaredConstructors(), constructor parameter matching, and why clazz.newInstance() is deprecated."})]}),t.jsxs("section",{className:"space-y-4",children:[t.jsxs("h2",{className:"text-2xl font-bold text-emerald-400 flex items-center gap-2",children:[t.jsx("span",{children:"💻"})," Hands-On Java Demo Code"]}),t.jsx(e,{fileModule:o,title:"ConstructorsDynamicInstantiationDemo.java",highlightLines:[18,25,34,43]})]}),t.jsx("section",{className:"space-y-4",children:t.jsx(n,{title:"Java Reflection FAQs",questions:c})}),t.jsx("section",{className:"space-y-4",children:t.jsx(r,{content:s,title:"Module 010_001 Topic 4: Constructors & Dynamic Instantiation",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Printable Note",downloadFileName:"010_001_topic4_constructors_dynamic_instantiation_note.txt"})}),t.jsx(a,{note:"Never call clazz.newInstance()! It was deprecated in Java 9 because it hides constructor exceptions! Always use clazz.getDeclaredConstructor(paramTypes).newInstance(args) instead! — Sukanta Hui"})]})}export{C as default};
