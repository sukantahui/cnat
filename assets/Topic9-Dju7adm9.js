import{j as e}from"./vendor-react-core-Doz9nIC6.js";import{J as n}from"./JavaFileLoader-BfBG3xz_.js";import{F as t}from"./FAQTemplate-CkSqDH4B.js";import{P as r}from"./PlainTextPrint-C08xhKA4.js";import{T as a}from"./TeacherSukantaHui-CyIG3xbg.js";import"./JavaCodeBlock-BwsLxS3r.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-CIaKtAt4.js";const o=`/**\r
 * Java Core Tutorial - Module 010_001: Java Reflection API & Dynamic Member Inspection\r
 * Topic 9: Reflection Performance, Security & MethodHandles - Capstone\r
 * Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
 */\r
\r
package com.coderaccotax.javatutorial.reflection;\r
\r
import java.lang.invoke.MethodHandle;\r
import java.lang.invoke.MethodHandles;\r
import java.lang.invoke.MethodType;\r
import java.lang.reflect.Method;\r
\r
public class PerformanceMethodHandlesCapstoneDemo {\r
\r
    public static class Calculator {\r
        public int square(int x) { return x * x; }\r
    }\r
\r
    public static void main(String[] args) throws Throwable {\r
        System.out.println("==========================================================================");\r
        System.out.println(" TOPIC 9: REFLECTION PERFORMANCE & METHODHANDLES - BARRACKPORE");\r
        System.out.println("==========================================================================\\n");\r
\r
        Calculator calc = new Calculator();\r
        int iterations = 10_000_000;\r
\r
        // 1. Direct Method Invocation (Baseline - JIT Inlined)\r
        long start = System.currentTimeMillis();\r
        long sumDirect = 0;\r
        for (int i = 0; i < iterations; i++) {\r
            sumDirect += calc.square(i % 100);\r
        }\r
        long directTime = System.currentTimeMillis() - start;\r
        System.out.println("1. Direct Call (10,000,000 runs)       : " + directTime + " ms");\r
\r
        // 2. Reflection Method.invoke() (Boxing + Access Checks + JIT barriers)\r
        Method reflectionMethod = Calculator.class.getMethod("square", int.class);\r
        start = System.currentTimeMillis();\r
        long sumReflection = 0;\r
        for (int i = 0; i < iterations; i++) {\r
            sumReflection += (Integer) reflectionMethod.invoke(calc, i % 100);\r
        }\r
        long reflectionTime = System.currentTimeMillis() - start;\r
        System.out.println("2. Reflection invoke() (10,000,000 runs): " + reflectionTime + " ms (Slow due to boxing & checks)");\r
\r
        // 3. MethodHandle (Java 7+ High-Performance Bytecode Invocation)\r
        MethodHandles.Lookup lookup = MethodHandles.lookup();\r
        MethodType methodType = MethodType.methodType(int.class, int.class);\r
        MethodHandle methodHandle = lookup.findVirtual(Calculator.class, "square", methodType);\r
\r
        start = System.currentTimeMillis();\r
        long sumHandle = 0;\r
        for (int i = 0; i < iterations; i++) {\r
            sumHandle += (int) methodHandle.invokeExact(calc, i % 100);\r
        }\r
        long handleTime = System.currentTimeMillis() - start;\r
        System.out.println("3. MethodHandle invokeExact()           : " + handleTime + " ms (Near direct speed!)");\r
\r
        System.out.println("\\n==========================================================================");\r
        System.out.println(" MODULE 010_001 COMPLETE: JAVA REFLECTION API FULLY MASTERED!");\r
        System.out.println("==========================================================================");\r
    }\r
}\r
`,i=`================================================================================\r
JAVA CORE TUTORIAL - QUICK REVISION GUIDE\r
Module 010_001: Java Reflection API & Dynamic Member Inspection\r
Topic 9: Reflection Performance & MethodHandles Capstone\r
Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
================================================================================\r
\r
1. WHY REFLECTION IS SLOWER THAN DIRECT CALLS:\r
   - Dynamic Resolution: Type checking happens at runtime instead of compile time.\r
   - Boxing / Unboxing: Primitive arguments and return types are boxed in heap wrappers.\r
   - Array Allocation: Varargs 'args' array is instantiated on each invoke() call.\r
   - JIT Inlining Barriers: JIT compiler cannot inline polymorphic reflective calls.\r
\r
2. MODERN ALTERNATIVE: METHODHANDLES (java.lang.invoke):\r
   - Introduced to support dynamic JVM languages (invokedynamic).\r
   - Provides strongly-typed, direct bytecode method handles.\r
   - 'invokeExact()' compiles down to direct machine instructions without boxing.\r
\r
================================================================================\r
Classroom Practice: Barrackpore Academy | Mentor: Sukanta Hui\r
================================================================================\r
`,s=[{question:"Why is MethodHandle.invokeExact() faster than Method.invoke()?",shortAnswer:"MethodHandle operates directly with the JVM's invokedynamic bytecode instructions, performs type checks once at lookup time, avoids primitive boxing/unboxing, and allows full JIT compiler method inlining.",explanation:"Method.invoke creates Object[] arrays and boxes primitives on every call.",hint:"Avoids boxing, eliminates array allocation, and enables JIT inlining.",level:"Advanced",codeExample:"MethodHandle mh = lookup.findVirtual(Target.class, 'method', methodType);"},{question:"How can enterprise frameworks mitigate the performance cost of Reflection on application startup?",shortAnswer:"By caching Method and Field objects in static lookup maps, using bytecode generation (ByteBuddy/ASM), or adopting Ahead-Of-Time (AOT) compile-time reflection indexing (GraalVM, Micronaut, Quarkus).",explanation:"AOT frameworks eliminate runtime reflection entirely.",hint:"Cache reflection metadata or use compile-time AOT code generation.",level:"Intermediate",codeExample:"private static final Map<String, Method> METHOD_CACHE = new ConcurrentHashMap<>();"}];function g(){return e.jsxs("div",{className:"space-y-12 px-4 md:px-8 py-8 text-slate-200 bg-slate-900 min-h-screen",children:[e.jsxs("header",{className:"space-y-4 border-b border-slate-800 pb-6",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"px-3 py-1 bg-sky-500/10 text-sky-400 border border-sky-500/20 text-xs font-semibold rounded-full uppercase tracking-wider",children:"Module 010_001 · Topic 9"}),e.jsx("span",{className:"px-3 py-1 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-xs font-semibold rounded-full",children:"Reflection API & Metadata"})]}),e.jsxs("h1",{className:"text-3xl md:text-4xl font-extrabold text-white tracking-tight",children:["Reflection Performance & Security: ",e.jsx("code",{className:"text-emerald-400 font-mono",children:"MethodHandles & Modern Metaprogramming"})," (Capstone)"]}),e.jsx("p",{className:"text-base md:text-lg text-slate-400 leading-relaxed max-w-4xl",children:"Production considerations: why Reflection is slower than direct calls, JIT optimization barriers, and high-speed MethodHandle alternatives (JEP 412)."})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsxs("h2",{className:"text-2xl font-bold text-emerald-400 flex items-center gap-2",children:[e.jsx("span",{children:"💻"})," Hands-On Java Demo Code"]}),e.jsx(n,{fileModule:o,title:"PerformanceMethodHandlesCapstoneDemo.java",highlightLines:[18,25,34,43,52]})]}),e.jsx("section",{className:"space-y-4",children:e.jsx(t,{title:"Java Reflection FAQs",questions:s})}),e.jsx("section",{className:"space-y-4",children:e.jsx(r,{content:i,title:"Module 010_001 Topic 9: Performance & MethodHandles Capstone",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Printable Note",downloadFileName:"010_001_topic9_performance_methodhandles_capstone_note.txt"})}),e.jsx(a,{note:"Congratulations on mastering Module 1 of Segment 10! You have decoded the inner workings of Java Reflection, Dynamic Proxies, and Framework Metaprogramming! Next up: Custom Annotations & Processors! — Sukanta Hui"})]})}export{g as default};
