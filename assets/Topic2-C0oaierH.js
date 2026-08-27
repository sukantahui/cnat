import{j as e}from"./vendor-react-core-Doz9nIC6.js";import{J as n}from"./JavaFileLoader-BfBG3xz_.js";import{F as t}from"./FAQTemplate-CkSqDH4B.js";import{P as s}from"./PlainTextPrint-C08xhKA4.js";import{T as a}from"./TeacherSukantaHui-CC0AKmkm.js";import"./JavaCodeBlock-BwsLxS3r.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-BtJHuk7w.js";const r=`/**\r
 * Java Core Tutorial - Module 010_001: Java Reflection API & Dynamic Member Inspection\r
 * Topic 2: Obtaining java.lang.Class Instances - The 3 Primary Techniques\r
 * Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
 */\r
\r
package com.coderaccotax.javatutorial.reflection;\r
\r
public class ObtainingClassInstancesDemo {\r
\r
    public static void main(String[] args) throws ClassNotFoundException {\r
        System.out.println("==========================================================================");\r
        System.out.println(" TOPIC 2: OBTAINING CLASS INSTANCES - BARRACKPORE ACADEMY");\r
        System.out.println("==========================================================================\\n");\r
\r
        // --- TECHNIQUE 1: Class Literal (.class syntax - Compile-Time Known) ---\r
        Class<Student> c1 = Student.class;\r
        System.out.println("1. Via Class Literal (Student.class)     : " + c1.getName());\r
\r
        // --- TECHNIQUE 2: Object.getClass() (Runtime Instance Available) ---\r
        Student studentInstance = new Student(101, "Swadeep Paul");\r
        Class<? extends Student> c2 = studentInstance.getClass();\r
        System.out.println("2. Via object.getClass()                 : " + c2.getName());\r
\r
        // --- TECHNIQUE 3: Class.forName(String fullyQualifiedName) (Dynamic Plugin Loading) ---\r
        Class<?> c3 = Class.forName("com.coderaccotax.javatutorial.reflection.ObtainingClassInstancesDemo$Student");\r
        System.out.println("3. Via Class.forName('...Student')       : " + c3.getName());\r
\r
        // Verifying that ALL 3 techniques reference the EXACT SAME Metaspace Class Singleton:\r
        System.out.println("\\n>>> SINGLETON VERIFICATION:");\r
        System.out.println("  - c1 == c2 : " + (c1 == c2) + " (Exact same Class instance!)");\r
        System.out.println("  - c2 == c3 : " + (c2 == c3) + " (Exact same Class instance!)");\r
\r
        // --- SPECIAL CASES: Primitives & Arrays ---\r
        Class<?> intPrimitiveClass = int.class; // Or Integer.TYPE\r
        Class<?> stringArrayClass = String[].class;\r
        System.out.println("\\n>>> SPECIAL CLASS OBJECTS:");\r
        System.out.println("  - int.class name          : " + intPrimitiveClass.getName());\r
        System.out.println("  - String[].class name     : " + stringArrayClass.getName());\r
\r
        System.out.println("\\n==========================================================================");\r
    }\r
\r
    public static class Student {\r
        private final int id;\r
        private final String name;\r
        public Student(int id, String name) { this.id = id; this.name = name; }\r
    }\r
}\r
`,i=`================================================================================\r
JAVA CORE TUTORIAL - QUICK REVISION GUIDE\r
Module 010_001: Java Reflection API & Dynamic Member Inspection\r
Topic 2: Obtaining java.lang.Class Instances\r
Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
================================================================================\r
\r
1. THE 3 WAYS TO OBTAIN A CLASS OBJECT:\r
   1. Class Literal: 'ClassName.class'\r
      - Compile-time safe, zero runtime overhead, throws no exceptions.\r
   2. Instance Method: 'object.getClass()'\r
      - Inherited from 'java.lang.Object'. Returns the runtime concrete type of polymorphic objects.\r
   3. Dynamic Lookup: 'Class.forName("com.pkg.ClassName")'\r
      - Loads class dynamically by string name.\r
      - Throws 'ClassNotFoundException' if class is missing.\r
      - Essential for JDBC driver loading and plugin systems.\r
\r
2. CLASS SINGLETON GUARANTEE:\r
   - For any loaded class in a ClassLoader, exactly ONE 'java.lang.Class' instance exists in Metaspace.\r
   - 'c1 == c2' evaluates to true.\r
\r
================================================================================\r
Classroom Practice: Barrackpore Academy | Mentor: Sukanta Hui\r
================================================================================\r
`,l=[{question:"What exception must be handled when using Class.forName('com.example.MyClass')?",shortAnswer:"java.lang.ClassNotFoundException (a checked exception), which is thrown if the specified class cannot be located by the ClassLoader.",explanation:"Standard checked exception for dynamic reflection loading.",hint:"ClassNotFoundException",level:"Beginner",codeExample:"try { Class.forName('com.mysql.cj.jdbc.Driver'); } catch (ClassNotFoundException e) { ... }"},{question:"What is the difference between int.class and Integer.class?",shortAnswer:"int.class represents the primitive 32-bit integer type (equivalent to Integer.TYPE), whereas Integer.class represents the reference wrapper object class java.lang.Integer.",explanation:"int.class != Integer.class.",hint:"int.class is primitive type; Integer.class is the wrapper class.",level:"Intermediate",codeExample:"int.class == Integer.TYPE // true; int.class == Integer.class // false"}];function x(){return e.jsxs("div",{className:"space-y-12 px-4 md:px-8 py-8 text-slate-200 bg-slate-900 min-h-screen",children:[e.jsxs("header",{className:"space-y-4 border-b border-slate-800 pb-6",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"px-3 py-1 bg-sky-500/10 text-sky-400 border border-sky-500/20 text-xs font-semibold rounded-full uppercase tracking-wider",children:"Module 010_001 · Topic 2"}),e.jsx("span",{className:"px-3 py-1 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-xs font-semibold rounded-full",children:"Reflection API & Metadata"})]}),e.jsxs("h1",{className:"text-3xl md:text-4xl font-extrabold text-white tracking-tight",children:["Obtaining ",e.jsx("code",{className:"text-emerald-400 font-mono",children:"java.lang.Class Instances"}),": The 3 Primary Techniques"]}),e.jsx("p",{className:"text-base md:text-lg text-slate-400 leading-relaxed max-w-4xl",children:'Accessing class descriptors: ClassName.class literal, object.getClass(), Class.forName("..."), primitive types, and array classes.'})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsxs("h2",{className:"text-2xl font-bold text-emerald-400 flex items-center gap-2",children:[e.jsx("span",{children:"💻"})," Hands-On Java Demo Code"]}),e.jsx(n,{fileModule:r,title:"ObtainingClassInstancesDemo.java",highlightLines:[18,25,34,43]})]}),e.jsx("section",{className:"space-y-4",children:e.jsx(t,{title:"Java Reflection FAQs",questions:l})}),e.jsx("section",{className:"space-y-4",children:e.jsx(s,{content:i,title:"Module 010_001 Topic 2: Obtaining Class Instances",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Printable Note",downloadFileName:"010_001_topic2_obtaining_class_instances_note.txt"})}),e.jsx(a,{note:"There are 3 ways to get a Class object: 1) Class literal (Student.class), 2) Runtime object (obj.getClass()), and 3) Dynamic string name (Class.forName('com.pkg.Student'))! All three point to the exact same singleton Class object in memory! — Sukanta Hui"})]})}export{x as default};
