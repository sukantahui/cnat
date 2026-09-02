import{j as e}from"./vendor-react-core-Doz9nIC6.js";import{J as r}from"./JavaFileLoader-BfBG3xz_.js";import{F as n}from"./FAQTemplate-BHhlgA96.js";import{P as a}from"./PlainTextPrint-C08xhKA4.js";import{T as t}from"./TeacherSukantaHui-RpFLNJ5A.js";import"./JavaCodeBlock-BwsLxS3r.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-wprqVFW_.js";const s=`/**\r
 * Java Core Tutorial - Module 006_005: Type Erasure & Generics Limitations\r
 * Topic 13: Workarounds for Generic Instantiation: Class<T> Type Tokens & Factories\r
 * Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
 */\r
\r
package com.coderaccotax.javatutorial.generics;\r
\r
import java.lang.reflect.Array;\r
import java.util.Arrays;\r
import java.util.function.Supplier;\r
\r
public class GenericInstantiationWorkaroundsDemo {\r
\r
    // WORKAROUND 1: Dynamic Array Creation via Class<T> Type Token:\r
    @SuppressWarnings("unchecked")\r
    public static <T> T[] createGenericArray(Class<T> clazz, int capacity) {\r
        // Uses java.lang.reflect.Array.newInstance to allocate reified typed array at runtime:\r
        return (T[]) Array.newInstance(clazz, capacity);\r
    }\r
\r
    // WORKAROUND 2: Object Creation via Java 8 Supplier<T> Functional Interface:\r
    public static <T> T createInstance(Supplier<T> factory) {\r
        return factory.get();\r
    }\r
\r
    public static class StudentAccount {\r
        private final String center = "Barrackpore Academy";\r
        public String getCenter() { return center; }\r
    }\r
\r
    public static void main(String[] args) {\r
        System.out.println("==========================================================================");\r
        System.out.println(" TOPIC 13: GENERIC INSTANTIATION WORKAROUNDS - BARRACKPORE");\r
        System.out.println("==========================================================================\\n");\r
\r
        // 1. Creating Generic Array Dynamically:\r
        String[] branchArray = createGenericArray(String.class, 3);\r
        branchArray[0] = "Barrackpore";\r
        branchArray[1] = "Naihati";\r
        branchArray[2] = "Shyamnagar";\r
        System.out.println(">>> 1. Dynamically Instantiated Generic Array via Class<T>:");\r
        System.out.println("  Array: " + Arrays.toString(branchArray));\r
        System.out.println("  Runtime Component Type: " + branchArray.getClass().getComponentType().getSimpleName());\r
\r
        // 2. Creating Generic Instance via Supplier:\r
        StudentAccount acc = createInstance(StudentAccount::new);\r
        System.out.println("\\n>>> 2. Dynamically Instantiated Object via Supplier<T>:");\r
        System.out.println("  Center: " + acc.getCenter());\r
\r
        System.out.println("\\n==========================================================================");\r
    }\r
}`,i=`================================================================================\r
JAVA CORE TUTORIAL - QUICK REVISION GUIDE\r
Module 006_005: Type Erasure & Generics Limitations\r
Topic 13: Generic Instantiation Workarounds\r
Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
================================================================================\r
\r
1. INSTANTIATION WORKAROUNDS:\r
   - Type Token: 'Array.newInstance(Class<T> clazz, size)'.\r
   - Supplier Factory: 'Supplier<T> factory' with constructor reference ('MyClass::new').\r
   - Reflection: 'clazz.getDeclaredConstructor().newInstance()'.\r
   - Re-establishes runtime type creation safely.\r
\r
================================================================================\r
Classroom Practice: Barrackpore Academy | Mentor: Sukanta Hui\r
================================================================================`,c=[{question:"How do 'Class<T>' type tokens and 'java.lang.reflect.Array.newInstance()' solve the generic array creation limitation?",shortAnswer:"Because 'new T[size]' cannot be instantiated due to type erasure, passing a 'Class<T>' token provides the JVM with the actual reified class type at runtime. Calling '(T[]) Array.newInstance(clazz, capacity)' dynamically allocates an array of the exact concrete type, preserving runtime array type safety.",explanation:"Standard pattern used in high-performance generic collections like ArrayList.",hint:"Array.newInstance(clazz, size) uses the Class<T> token to allocate a reified array at runtime.",level:"Intermediate",codeExample:"T[] arr = (T[]) Array.newInstance(clazz, 10);"}];function T(){return e.jsxs("div",{className:"space-y-12 px-4 md:px-8 py-8 text-slate-200 bg-slate-900 min-h-screen",children:[e.jsxs("header",{className:"space-y-4 border-b border-slate-800 pb-6",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"px-3 py-1 bg-sky-500/10 text-sky-400 border border-sky-500/20 text-xs font-semibold rounded-full uppercase tracking-wider",children:"Module 006_005 · Topic 13"}),e.jsx("span",{className:"px-3 py-1 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-xs font-semibold rounded-full",children:"Instantiation Patterns"})]}),e.jsxs("h1",{className:"text-xl sm:text-2xl md:text-3xl font-bold text-white tracking-tight",children:["Workarounds for Generic Instantiation: ",e.jsx("code",{className:"text-emerald-400 font-mono",children:"Class<T>"})," Tokens & Suppliers"]}),e.jsxs("p",{className:"text-base md:text-lg text-slate-400 leading-relaxed max-w-4xl",children:["Bypass type erasure constraints: applying ",e.jsx("code",{className:"text-emerald-300 font-mono",children:"Class<T>"})," reflection tokens, Array.newInstance, and functional ",e.jsx("code",{className:"text-sky-300 font-mono",children:"Supplier<T>"})," factories."]})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsxs("h2",{className:"text-2xl font-bold text-emerald-400 flex items-center gap-2",children:[e.jsx("span",{children:"💻"})," Hands-On Java Demo Code"]}),e.jsx(r,{fileModule:s,title:"GenericInstantiationWorkaroundsDemo.java",highlightLines:[7,10,14,15,16,20,21,33,40]})]}),e.jsx("section",{className:"space-y-4",children:e.jsx(n,{title:"Instantiation Workarounds FAQs",questions:c})}),e.jsx("section",{className:"space-y-4",children:e.jsx(a,{content:i,title:"Module 006_005 Topic 13: Generic Instantiation Workarounds",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Printable Note",downloadFileName:"006_005_topic13_generic_instantiation_workarounds_note.txt"})}),e.jsx(t,{note:"When you need to create a generic array or generic object, use 'Class<T>' or 'Supplier<T>'! 'Supplier<T>' with constructor references (Student::new) is the modern, super-clean Java 8+ way! — Sukanta Hui"})]})}export{T as default};
