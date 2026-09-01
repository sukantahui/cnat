import{j as r}from"./vendor-react-core-Doz9nIC6.js";import{J as e}from"./JavaFileLoader-BfBG3xz_.js";import{F as t}from"./FAQTemplate-BHhlgA96.js";import{P as n}from"./PlainTextPrint-C08xhKA4.js";import{T as a}from"./TeacherSukantaHui-BaJcBHAy.js";import"./JavaCodeBlock-BwsLxS3r.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-8ao-0upJ.js";const s=`/**\r
 * Java Core Tutorial - Module 009_003: Method & Constructor References\r
 * Topic 7: Array Constructor References: String[]::new & Stream.toArray()\r
 * Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
 */\r
\r
package com.coderaccotax.javatutorial.functional;\r
\r
import java.util.Arrays;\r
import java.util.List;\r
import java.util.function.IntFunction;\r
\r
public class ArrayConstructorReferenceDemo {\r
\r
    public static void main(String[] args) {\r
        System.out.println("==========================================================================");\r
        System.out.println(" TOPIC 7: ARRAY CONSTRUCTOR REFERENCES (Type[]::new) - BARRACKPORE");\r
        System.out.println("==========================================================================\\n");\r
\r
        // 1. Array Constructor functional handle: IntFunction<T[]>\r
        // Lambda equivalent: size -> new String[size]\r
        IntFunction<String[]> stringArrayFactory = String[]::new;\r
\r
        String[] emptyArray = stringArrayFactory.apply(5);\r
        System.out.println(">>> 1. Created empty String array of length: " + emptyArray.length);\r
\r
        // 2. THE PRODUCTION USE CASE: Stream.toArray(Type[]::new):\r
        List<String> studentList = List.of("Swadeep Paul", "Tuhina Das", "Abhronila Das", "Debangshu Mukherjee");\r
\r
        // Without Array Constructor Reference, stream.toArray() returns Object[]:\r
        Object[] legacyObjectArray = studentList.stream().toArray();\r
\r
        // WITH Array Constructor Reference, stream.toArray(String[]::new) returns TYPE-SAFE String[]:\r
        String[] typedStudentArray = studentList.stream()\r
                .filter(name -> name.startsWith("S") || name.startsWith("T"))\r
                .toArray(String[]::new); // Type-safe array allocation!\r
\r
        System.out.println("\\n>>> 2. Converted Stream to Type-Safe String[] array:");\r
        System.out.println("  Array Contents : " + Arrays.toString(typedStudentArray));\r
        System.out.println("  Array Component: " + typedStudentArray.getClass().getComponentType().getSimpleName());\r
\r
        System.out.println("\\n==========================================================================");\r
    }\r
}`,o=`================================================================================\r
JAVA CORE TUTORIAL - QUICK REVISION GUIDE\r
Module 009_003: Method & Constructor References\r
Topic 7: Array Constructor References\r
Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
================================================================================\r
\r
1. ARRAY CONSTRUCTOR REFERENCES:\r
   - Syntax: 'Type[]::new'.\r
   - Represents: 'size → new Type[size]'.\r
   - SAM Target: 'IntFunction<T[]>'.\r
   - Primary Use Case: 'stream.toArray(String[]::new)' for type-safe arrays.\r
   - Solves Generic Type Erasure in Stream-to-Array conversions.\r
\r
================================================================================\r
Classroom Practice: Barrackpore Academy | Mentor: Sukanta Hui\r
================================================================================`,i=[{question:"Why is 'String[]::new' used with 'Stream.toArray()' instead of calling the parameterless 'Stream.toArray()'?",shortAnswer:"Due to Java Generics type erasure, the parameterless 'stream.toArray()' does not know the runtime element type and is forced to return a raw 'Object[]', requiring unsafe downcasting ('(String[]) array') which fails at runtime. Passing the Array Constructor Reference 'stream.toArray(String[]::new)' supplies an 'IntFunction<String[]>' factory (size → new String[size]), allowing the Stream runtime to allocate a perfectly sized, 100% type-safe 'String[]' array without unchecked cast warnings.",explanation:"Type-safe array extraction from Streams using array constructor references.",hint:"stream.toArray() returns raw Object[]; stream.toArray(String[]::new) returns type-safe String[] array.",level:"Intermediate",codeExample:"String[] arr = stream.toArray(String[]::new);"}];function g(){return r.jsxs("div",{className:"space-y-12 px-4 md:px-8 py-8 text-slate-200 bg-slate-900 min-h-screen",children:[r.jsxs("header",{className:"space-y-4 border-b border-slate-800 pb-6",children:[r.jsxs("div",{className:"flex items-center gap-3",children:[r.jsx("span",{className:"px-3 py-1 bg-sky-500/10 text-sky-400 border border-sky-500/20 text-xs font-semibold rounded-full uppercase tracking-wider",children:"Module 009_003 · Topic 7"}),r.jsx("span",{className:"px-3 py-1 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-xs font-semibold rounded-full",children:"Array Constructors"})]}),r.jsxs("h1",{className:"text-xl sm:text-2xl md:text-3xl font-bold text-white tracking-tight",children:["Array Constructor References: ",r.jsx("code",{className:"text-emerald-400 font-mono",children:"String[]::new"})," & Type-Safe Streams"]}),r.jsxs("p",{className:"text-base md:text-lg text-slate-400 leading-relaxed max-w-4xl",children:["Overcome generic type erasure: applying ",r.jsx("code",{className:"text-emerald-300 font-mono",children:"Type[]::new"})," array constructor references to extract strongly typed arrays from stream pipelines via ",r.jsx("code",{className:"text-sky-300 font-mono",children:"Stream.toArray(String[]::new)"}),"."]})]}),r.jsxs("section",{className:"space-y-4",children:[r.jsxs("h2",{className:"text-2xl font-bold text-emerald-400 flex items-center gap-2",children:[r.jsx("span",{children:"💻"})," Hands-On Java Demo Code"]}),r.jsx(e,{fileModule:s,title:"ArrayConstructorReferenceDemo.java",highlightLines:[7,10,18,19,28,29,30,31]})]}),r.jsx("section",{className:"space-y-4",children:r.jsx(t,{title:"Array Constructors FAQs",questions:i})}),r.jsx("section",{className:"space-y-4",children:r.jsx(n,{content:o,title:"Module 009_003 Topic 7: Array Constructors",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Printable Note",downloadFileName:"009_003_topic7_array_constructors_note.txt"})}),r.jsx(a,{note:"If you ever write 'stream.toArray()', Java returns an Object[] and you'll get ClassCastException when casting it to String[]! Always pass the array constructor 'stream.toArray(String[]::new)' for 100% type-safe array generation! — Sukanta Hui"})]})}export{g as default};
