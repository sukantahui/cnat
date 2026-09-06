import{j as e}from"./vendor-react-core-Doz9nIC6.js";import{J as t}from"./JavaFileLoader-BfBG3xz_.js";import{F as n}from"./FAQTemplate-BHhlgA96.js";import{P as r}from"./PlainTextPrint-C08xhKA4.js";import{T as a}from"./TeacherSukantaHui-DDN87fI5.js";import"./JavaCodeBlock-BwsLxS3r.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-DEsnU7fn.js";const s=`/**\r
 * Java Core Tutorial - Module 009_003: Method & Constructor References\r
 * Topic 5: Kind 3: Unbound Instance Method Reference (ClassName::instanceMethodName)\r
 * Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
 */\r
\r
package com.coderaccotax.javatutorial.functional;\r
\r
import java.util.List;\r
import java.util.function.Function;\r
\r
class StudentProfile {\r
    private final String fullName;\r
    private final int marks;\r
\r
    public StudentProfile(String fullName, int marks) {\r
        this.fullName = fullName;\r
        this.marks = marks;\r
    }\r
\r
    public String getFullName() {\r
        return fullName;\r
    }\r
\r
    public int getMarks() {\r
        return marks;\r
    }\r
}\r
\r
public class UnboundInstanceMethodReferenceDemo {\r
\r
    public static void main(String[] args) {\r
        System.out.println("==========================================================================");\r
        System.out.println(" TOPIC 5: UNBOUND INSTANCE METHOD REFERENCE (ClassName::method) - BARRACKPORE");\r
        System.out.println("==========================================================================\\n");\r
\r
        List<StudentProfile> students = List.of(\r
                new StudentProfile("swadeep paul", 88),\r
                new StudentProfile("tuhina das", 95),\r
                new StudentProfile("abhronila das", 79)\r
        );\r
\r
        // 1. Unbound Method Reference on Custom Class (StudentProfile::getFullName):\r
        // Lambda: (StudentProfile s) -> s.getFullName()\r
        // The first argument passed to the SAM BECOMES THE CALLER OBJECT!\r
        Function<StudentProfile, String> nameExtractor = StudentProfile::getFullName;\r
\r
        List<String> names = students.stream()\r
                .map(nameExtractor)\r
                // 2. Unbound Method Reference on JDK Class (String::toUpperCase):\r
                // Lambda: (String s) -> s.toUpperCase()\r
                .map(String::toUpperCase)\r
                .toList();\r
\r
        System.out.println(">>> Transformed Upper Case Names: " + names);\r
\r
        System.out.println("\\n>>> HOW UNBOUND REFERENCES WORK:");\r
        System.out.println("  - Syntax looks like a static reference ('ClassName::method'), but the method is an INSTANCE method!");\r
        System.out.println("  - The first parameter passed into the lambda BECOMES the target receiver: '(obj) -> obj.method()'.");\r
\r
        System.out.println("\\n==========================================================================");\r
    }\r
}`,o=`================================================================================\r
JAVA CORE TUTORIAL - QUICK REVISION GUIDE\r
Module 009_003: Method & Constructor References\r
Topic 5: Unbound Instance References\r
Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
================================================================================\r
\r
1. UNBOUND INSTANCE REFERENCES:\r
   - Syntax: 'ClassName::instanceMethodName'.\r
   - Equivalence: '(obj, args) → obj.instanceMethodName(args)'.\r
   - First parameter of SAM becomes the target receiver object.\r
   - Examples: 'String::toLowerCase', 'String::length', 'Employee::getSalary'.\r
   - Most commonly used method reference type in 'Stream.map()'!\r
\r
================================================================================\r
Classroom Practice: Barrackpore Academy | Mentor: Sukanta Hui\r
================================================================================`,i=[{question:"What is an 'Unbound Instance Method Reference' ('ClassName::instanceMethodName') and how does the compiler route the target receiver object?",shortAnswer:"In an 'Unbound Instance Method Reference', the method is an instance method, but the left side specifies the Class Name (e.g. 'String::toUpperCase' or 'Student::getName'), NOT an instance variable. The Java compiler resolves this by treating the FIRST argument supplied by the functional interface SAM as the target receiver object on which the instance method is invoked ('(target, args...) → target.method(args...)').",explanation:"Unbound instance method reference mechanics and parameter routing.",hint:"First parameter of the functional interface becomes the target object on which the instance method is called.",level:"Intermediate",codeExample:"Function<String, Integer> length = String::length; // (s) → s.length()"}];function g(){return e.jsxs("div",{className:"space-y-12 px-4 md:px-8 py-8 text-slate-200 bg-slate-900 min-h-screen",children:[e.jsxs("header",{className:"space-y-4 border-b border-slate-800 pb-6",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"px-3 py-1 bg-sky-500/10 text-sky-400 border border-sky-500/20 text-xs font-semibold rounded-full uppercase tracking-wider",children:"Module 009_003 · Topic 5"}),e.jsx("span",{className:"px-3 py-1 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-xs font-semibold rounded-full",children:"Unbound References"})]}),e.jsxs("h1",{className:"text-xl sm:text-2xl md:text-3xl font-bold text-white tracking-tight",children:["Kind 3: Reference to an ",e.jsx("code",{className:"text-emerald-400 font-mono",children:"Instance Method"})," of an Arbitrary Object (",e.jsx("code",{className:"text-sky-400 font-mono",children:"ClassName::instanceMethod"}),")"]}),e.jsxs("p",{className:"text-base md:text-lg text-slate-400 leading-relaxed max-w-4xl",children:["Demystify unbound receiver mechanics: learning how the compiler converts the first SAM argument into the instance method invocation target in ",e.jsx("code",{className:"text-emerald-300 font-mono",children:"String::toUpperCase"})," and getter getters."]})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsxs("h2",{className:"text-2xl font-bold text-emerald-400 flex items-center gap-2",children:[e.jsx("span",{children:"💻"})," Hands-On Java Demo Code"]}),e.jsx(t,{fileModule:s,title:"UnboundInstanceMethodReferenceDemo.java",highlightLines:[7,10,16,17,36,37,39,40,41,42]})]}),e.jsx("section",{className:"space-y-4",children:e.jsx(n,{title:"Unbound References FAQs",questions:i})}),e.jsx("section",{className:"space-y-4",children:e.jsx(r,{content:o,title:"Module 009_003 Topic 5: Unbound Instance References",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Printable Note",downloadFileName:"009_003_topic5_unbound_instance_references_note.txt"})}),e.jsx(a,{note:"This is the most common method reference you will see in Stream pipelines! When you write 'stream.map(Student::getName)', Java takes each student passing through the stream and calls student.getName() on it automatically! — Sukanta Hui"})]})}export{g as default};
