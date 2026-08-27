import{j as e}from"./vendor-react-core-Doz9nIC6.js";import{J as t}from"./JavaFileLoader-BfBG3xz_.js";import{F as n}from"./FAQTemplate-CkSqDH4B.js";import{P as r}from"./PlainTextPrint-C08xhKA4.js";import{T as s}from"./TeacherSukantaHui-CyIG3xbg.js";import"./JavaCodeBlock-BwsLxS3r.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-CIaKtAt4.js";const a=`/**\r
 * Java Core Tutorial - Module 006_005: Type Erasure & Generics Limitations\r
 * Topic 14: Super Type Tokens & The TypeToken Pattern (Neal Gafter / Gson / Jackson) (Capstone)\r
 * Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
 */\r
\r
package com.coderaccotax.javatutorial.generics;\r
\r
import java.lang.reflect.ParameterizedType;\r
import java.lang.reflect.Type;\r
import java.util.List;\r
\r
// NEAL GAFTER'S SUPER TYPE TOKEN PATTERN:\r
// By creating an anonymous subclass, the generic type information is preserved in the Class Signature attribute!\r
abstract class SuperTypeToken<T> {\r
    private final Type type;\r
\r
    protected SuperTypeToken() {\r
        Type superclass = getClass().getGenericSuperclass();\r
        if (superclass instanceof Class) {\r
            throw new RuntimeException("Missing type parameter.");\r
        }\r
        this.type = ((ParameterizedType) superclass).getActualTypeArguments()[0];\r
    }\r
\r
    public Type getType() { return type; }\r
}\r
\r
public class SuperTypeTokenReflectionCapstoneDemo {\r
\r
    public static void main(String[] args) {\r
        System.out.println("==========================================================================");\r
        System.out.println(" TOPIC 14: SUPER TYPE TOKENS & TypeToken PATTERN (CAPSTONE) - BARRACKPORE");\r
        System.out.println("==========================================================================\\n");\r
\r
        // Capturing exact generic collection type (List<String>) at runtime:\r
        SuperTypeToken<List<String>> stringListToken = new SuperTypeToken<List<String>>() {};\r
        SuperTypeToken<List<Integer>> integerListToken = new SuperTypeToken<List<Integer>>() {};\r
\r
        System.out.println(">>> 1. Inspecting Recovered Generic Types via Super Type Tokens:");\r
        System.out.println("  Token 1 Recovered Type : " + stringListToken.getType());\r
        System.out.println("  Token 2 Recovered Type : " + integerListToken.getType());\r
\r
        System.out.println("\\n>>> HOW GSON, JACKSON & SPRING RECOVER PARAMETERIZED TYPES:");\r
        System.out.println("  1. Standard variables erase types ('List<String>' becomes raw 'List').");\r
        System.out.println("  2. HOWEVER: When a class extends a generic class (e.g. 'new TypeToken<List<String>>() {}'), the JVM preserves the generic signature in the class metadata!");\r
        System.out.println("  3. Reflection ('getGenericSuperclass()') retrieves the exact parameterized type argument!");\r
\r
        System.out.println("\\n==========================================================================");\r
        System.out.println(" CONGRATULATIONS! SEGMENT 6 (JAVA GENERICS & TYPE SAFETY)");\r
        System.out.println(" IS 100% COMPLETE AND FULLY CERTIFIED!");\r
        System.out.println("==========================================================================");\r
    }\r
}`,i=`================================================================================\r
JAVA CORE TUTORIAL - QUICK REVISION GUIDE\r
Module 006_005: Type Erasure & Generics Limitations\r
Topic 14: Super Type Tokens Capstone\r
Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
================================================================================\r
\r
1. SEGMENT 6 GRAND CAPSTONE:\r
   - Type Erasure: Generics checked at compile time, erased at runtime.\r
   - Bridge methods maintain polymorphic method overriding.\r
   - The 7 Core Generics Restrictions thoroughly mastered.\r
   - Super Type Token pattern ('new TypeToken<T>(){}') captures generic types via reflection.\r
   - Complete mastery of Generic Classes, Methods, Bounds, Wildcards (PECS), and Erasure!\r
\r
================================================================================\r
Classroom Practice: Barrackpore Academy | Mentor: Sukanta Hui\r
================================================================================`,o=[{question:"How does the 'Super Type Token' (TypeToken) pattern invented by Neal Gafter allow libraries like Google Gson and Jackson to parse generic collections like 'List<MyModel>' without losing generic type information?",shortAnswer:"While instance variables erase type arguments, the Java classfile specification PRESERVES generic superclass signatures in class metadata. By instantiating an anonymous subclass ('new TypeToken<List<MyModel>>() {}'), the library uses reflection ('getClass().getGenericSuperclass()') to cast to 'ParameterizedType' and call 'getActualTypeArguments()', recovering the full generic type at runtime.",explanation:"Foundational reflection pattern powering Jackson TypeReference and Gson TypeToken.",hint:"Anonymous subclass preserves generic superclass signature in class metadata, retrievable via getGenericSuperclass().",level:"Advanced",codeExample:"Type type = new TypeToken<List<Student>>(){}.getType();"}];function g(){return e.jsxs("div",{className:"space-y-12 px-4 md:px-8 py-8 text-slate-200 bg-slate-900 min-h-screen",children:[e.jsxs("header",{className:"space-y-4 border-b border-slate-800 pb-6",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"px-3 py-1 bg-sky-500/10 text-sky-400 border border-sky-500/20 text-xs font-semibold rounded-full uppercase tracking-wider",children:"Module 006_005 · Topic 14"}),e.jsx("span",{className:"px-3 py-1 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-xs font-semibold rounded-full",children:"Segment 6 Master Capstone"})]}),e.jsxs("h1",{className:"text-3xl md:text-4xl font-extrabold text-white tracking-tight",children:["Super Type Tokens & The ",e.jsx("code",{className:"text-emerald-400 font-mono",children:"TypeToken"})," Pattern: Segment 6 Master Capstone"]}),e.jsx("p",{className:"text-base md:text-lg text-slate-400 leading-relaxed max-w-4xl",children:"Conquer advanced generic reflection: implementing Neal Gafter's super type token architecture to capture and deserialize parameterized types under runtime type erasure."})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsxs("h2",{className:"text-2xl font-bold text-emerald-400 flex items-center gap-2",children:[e.jsx("span",{children:"💻"})," Hands-On Java Demo Code"]}),e.jsx(t,{fileModule:a,title:"SuperTypeTokenReflectionCapstoneDemo.java",highlightLines:[7,10,14,15,16,17,18,20,31,32]})]}),e.jsx("section",{className:"space-y-4",children:e.jsx(n,{title:"TypeToken FAQs",questions:o})}),e.jsx("section",{className:"space-y-4",children:e.jsx(r,{content:i,title:"Module 006_005 Topic 14: Super Type Tokens Capstone",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Printable Note",downloadFileName:"006_005_topic14_super_type_tokens_capstone_note.txt"})}),e.jsx(s,{note:"CONGRATULATIONS! You have officially conquered Segment 6: Java Generics & Type Safety! You have mastered Generic Classes, Generic Methods, Bounded Types, the PECS Principle, Type Erasure, Bridge Methods, and Super Type Tokens! — Sukanta Hui"})]})}export{g as default};
