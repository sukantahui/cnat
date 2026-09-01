import{j as e}from"./vendor-react-core-Doz9nIC6.js";import{J as t}from"./JavaFileLoader-BfBG3xz_.js";import{F as n}from"./FAQTemplate-BHhlgA96.js";import{P as a}from"./PlainTextPrint-C08xhKA4.js";import{T as r}from"./TeacherSukantaHui-BaJcBHAy.js";import"./JavaCodeBlock-BwsLxS3r.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-8ao-0upJ.js";const o=`/**\r
 * Java Core Tutorial - Module 010_001: Java Reflection API & Dynamic Member Inspection\r
 * Topic 5: Inspecting & Invoking Methods Dynamically via method.invoke()\r
 * Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
 */\r
\r
package com.coderaccotax.javatutorial.reflection;\r
\r
import java.lang.reflect.Method;\r
\r
public class InspectingInvokingMethodsDemo {\r
\r
    public static void main(String[] args) throws Exception {\r
        System.out.println("==========================================================================");\r
        System.out.println(" TOPIC 5: DYNAMIC METHOD INVOCATION - BARRACKPORE ACADEMY");\r
        System.out.println("==========================================================================\\n");\r
\r
        AcademyStudent student = new AcademyStudent("Swadeep Paul", 88.0);\r
        Class<?> clazz = student.getClass();\r
\r
        // 1. Invoking a Public Instance Method with Arguments: updateScore(double)\r
        System.out.println(">>> 1. Invoking Instance Method 'updateScore(double)':");\r
        Method updateScoreMethod = clazz.getDeclaredMethod("updateScore", double.class);\r
        updateScoreMethod.invoke(student, 94.5); // Invoked dynamically!\r
        System.out.println("   - Student score updated dynamically to: " + student.getScore());\r
\r
        // 2. Invoking a Method that returns a value: generateReport()\r
        System.out.println("\\n>>> 2. Invoking Instance Method 'generateReport()':");\r
        Method reportMethod = clazz.getDeclaredMethod("generateReport");\r
        Object reportResult = reportMethod.invoke(student);\r
        System.out.println("   - Result: " + reportResult);\r
\r
        // 3. Invoking a STATIC Method (Pass 'null' as target object!):\r
        System.out.println("\\n>>> 3. Invoking Static Method 'getAcademyLocation()':");\r
        Method staticMethod = clazz.getDeclaredMethod("getAcademyLocation");\r
        Object locationResult = staticMethod.invoke(null); // Target object is null for static!\r
        System.out.println("   - Static Location: " + locationResult);\r
\r
        System.out.println("\\n==========================================================================");\r
    }\r
\r
    public static class AcademyStudent {\r
        private final String name;\r
        private double score;\r
\r
        public AcademyStudent(String name, double score) {\r
            this.name = name;\r
            this.score = score;\r
        }\r
\r
        public void updateScore(double newScore) {\r
            this.score = newScore;\r
        }\r
\r
        public String generateReport() {\r
            return "Student: " + name + " | Final Score: " + score + "%";\r
        }\r
\r
        public double getScore() { return score; }\r
\r
        public static String getAcademyLocation() {\r
            return "Barrackpore, West Bengal (Coder & AccoTax Hub)";\r
        }\r
    }\r
}\r
`,s=`================================================================================\r
JAVA CORE TUTORIAL - QUICK REVISION GUIDE\r
Module 010_001: Java Reflection API & Dynamic Member Inspection\r
Topic 5: Inspecting & Invoking Methods\r
Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
================================================================================\r
\r
1. METHOD DISCOVERY:\r
   - 'clazz.getMethods()': Returns all public methods (including those inherited from superclasses).\r
   - 'clazz.getDeclaredMethods()': Returns all methods declared directly in this class\r
     (private, protected, default, public), excluding inherited methods.\r
\r
2. METHOD INVOCATION SYNTAX:\r
   - 'public Object invoke(Object obj, Object... args)'\r
   - Instance Method: First argument is the target object instance ('method.invoke(instance, arg1, arg2)').\r
   - Static Method: First argument is ignored and can be passed as 'null' ('method.invoke(null, arg1)').\r
\r
================================================================================\r
Classroom Practice: Barrackpore Academy | Mentor: Sukanta Hui\r
================================================================================\r
`,i=[{question:"What is the difference between clazz.getMethods() and clazz.getDeclaredMethods()?",shortAnswer:"getMethods() returns all public methods of the class including those inherited from superclasses/interfaces, while getDeclaredMethods() returns all methods declared in the class itself regardless of access level (public, private, protected), but excludes inherited methods.",explanation:"Declared methods inspect the immediate class body.",hint:"getMethods() is public + inherited; getDeclaredMethods() is all access levels of immediate class only.",level:"Beginner",codeExample:"clazz.getMethods() vs clazz.getDeclaredMethods()"},{question:"What should be passed as the first argument to method.invoke() when invoking a static method?",shortAnswer:"Pass null (or any object reference, which is ignored) because static methods belong to the class rather than any individual heap instance.",explanation:"Static methods execute in a class context.",hint:"Pass null as the target object.",level:"Beginner",codeExample:"staticMethod.invoke(null, 'arg1', 'arg2');"}];function x(){return e.jsxs("div",{className:"space-y-12 px-4 md:px-8 py-8 text-slate-200 bg-slate-900 min-h-screen",children:[e.jsxs("header",{className:"space-y-4 border-b border-slate-800 pb-6",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"px-3 py-1 bg-sky-500/10 text-sky-400 border border-sky-500/20 text-xs font-semibold rounded-full uppercase tracking-wider",children:"Module 010_001 · Topic 5"}),e.jsx("span",{className:"px-3 py-1 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-xs font-semibold rounded-full",children:"Reflection API & Metadata"})]}),e.jsxs("h1",{className:"text-xl sm:text-2xl md:text-3xl font-bold text-white tracking-tight",children:["Inspecting & Invoking Methods: ",e.jsx("code",{className:"text-emerald-400 font-mono",children:"method.invoke(target, args...)"})]}),e.jsx("p",{className:"text-base md:text-lg text-slate-400 leading-relaxed max-w-4xl",children:"Dynamic method execution: getMethods() vs getDeclaredMethods(), invoking static vs instance methods, and handling InvocationTargetException."})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsxs("h2",{className:"text-2xl font-bold text-emerald-400 flex items-center gap-2",children:[e.jsx("span",{children:"💻"})," Hands-On Java Demo Code"]}),e.jsx(t,{fileModule:o,title:"InspectingInvokingMethodsDemo.java",highlightLines:[18,25,34,43]})]}),e.jsx("section",{className:"space-y-4",children:e.jsx(n,{title:"Java Reflection FAQs",questions:i})}),e.jsx("section",{className:"space-y-4",children:e.jsx(a,{content:s,title:"Module 010_001 Topic 5: Inspecting & Invoking Methods",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Printable Note",downloadFileName:"010_001_topic5_inspecting_invoking_methods_note.txt"})}),e.jsx(r,{note:"When invoking an instance method dynamically, pass the target object as the first argument: method.invoke(studentInstance, 'Barrackpore'). For static methods, pass null as the target object! — Sukanta Hui"})]})}export{x as default};
