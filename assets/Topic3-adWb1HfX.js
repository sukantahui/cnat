import{j as e}from"./vendor-react-core-Doz9nIC6.js";import{J as t}from"./JavaFileLoader-BfBG3xz_.js";import{F as n}from"./FAQTemplate-BHhlgA96.js";import{P as r}from"./PlainTextPrint-C08xhKA4.js";import{T as i}from"./TeacherSukantaHui-RpFLNJ5A.js";import"./JavaCodeBlock-BwsLxS3r.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-wprqVFW_.js";const s=`/**\r
 * Java Core Tutorial - Module 006_002: Generic Methods, Constructors & Type Inference\r
 * Topic 3: Invoking Generic Methods: Explicit Witness Syntax vs Compiler Type Inference\r
 * Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
 */\r
\r
package com.coderaccotax.javatutorial.generics;\r
\r
public class GenericMethodInvocationWitnessDemo {\r
\r
    public static <T> T coalesce(T first, T fallback) {\r
        return first != null ? first : fallback;\r
    }\r
\r
    public static void main(String[] args) {\r
        System.out.println("==========================================================================");\r
        System.out.println(" TOPIC 3: EXPLICIT TYPE WITNESS VS TYPE INFERENCE - BARRACKPORE");\r
        System.out.println("==========================================================================\\n");\r
\r
        String primaryHub = null;\r
        String backupHub = "Barrackpore Central Hub";\r
\r
        // 1. INFERRED INVOCATION (Modern Java Standard):\r
        // Compiler automatically infers T = String from arguments!\r
        String resolvedInferred = coalesce(primaryHub, backupHub);\r
        System.out.println(">>> 1. Inferred Generic Method Invocation:");\r
        System.out.println("  Resolved Hub (Inferred) : " + resolvedInferred);\r
\r
        // 2. EXPLICIT TYPE WITNESS INVOCATION:\r
        // Explicitly specifying the type argument before the method name:\r
        String resolvedExplicit = GenericMethodInvocationWitnessDemo.<String>coalesce(primaryHub, backupHub);\r
        Number resolvedNumber = GenericMethodInvocationWitnessDemo.<Number>coalesce(10.5, 20);\r
\r
        System.out.println("\\n>>> 2. Explicit Type Witness (<Type>methodName):");\r
        System.out.println("  Resolved Hub (Explicit) : " + resolvedExplicit);\r
        System.out.println("  Resolved Number (<Number>): " + resolvedNumber);\r
\r
        System.out.println("\\n>>> WHEN EXPLICIT TYPE WITNESSES ARE REQUIRED:");\r
        System.out.println("  1. Disambiguating Overloads: When multiple overloaded generic methods match.");\r
        System.out.println("  2. Common Supertype Forcing: Forcing T = Number when mixing Integer and Double args.");\r
        System.out.println("  3. Empty Collections: E.g., 'Collections.<String>emptyList()'.");\r
\r
        System.out.println("\\n==========================================================================");\r
    }\r
}`,o=`================================================================================\r
JAVA CORE TUTORIAL - QUICK REVISION GUIDE\r
Module 006_002: Generic Methods, Constructors & Type Inference\r
Topic 3: Type Witness vs Inference\r
Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
================================================================================\r
\r
1. METHOD INVOCATION STYLES:\r
   - Inferred: 'coalesce(a, b)' (compiler deduces T automatically).\r
   - Explicit Type Witness: 'MyClass.<String>coalesce(a, b)'.\r
   - Used for common supertypes (e.g. <Number>) or empty collections.\r
   - Syntactically placed before the method name.\r
\r
================================================================================\r
Classroom Practice: Barrackpore Academy | Mentor: Sukanta Hui\r
================================================================================`,a=[{question:"What is an 'Explicit Type Witness' in Java generic method calls, and how is it written?",shortAnswer:"An Explicit Type Witness is the syntax used to explicitly specify the type argument when calling a generic method instead of relying on compiler type inference. It is written immediately before the method name: 'ClassName.<Type>methodName(args)' for static methods, or 'instance.<Type>methodName(args)' for instance methods (e.g. 'Collections.<String>emptyList()').",explanation:"Used when the compiler cannot infer a common type or when disambiguating overloaded signatures.",hint:"Written as 'ClassName.<Type>methodName(args)', explicitly declaring the generic type argument.",level:"Intermediate",codeExample:"List<String> list = Collections.<String>emptyList();"}];function h(){return e.jsxs("div",{className:"space-y-12 px-4 md:px-8 py-8 text-slate-200 bg-slate-900 min-h-screen",children:[e.jsxs("header",{className:"space-y-4 border-b border-slate-800 pb-6",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"px-3 py-1 bg-sky-500/10 text-sky-400 border border-sky-500/20 text-xs font-semibold rounded-full uppercase tracking-wider",children:"Module 006_002 · Topic 3"}),e.jsx("span",{className:"px-3 py-1 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-xs font-semibold rounded-full",children:"Type Inference"})]}),e.jsx("h1",{className:"text-xl sm:text-2xl md:text-3xl font-bold text-white tracking-tight",children:"Invoking Generic Methods: Explicit Type Witness vs Compiler Type Inference"}),e.jsxs("p",{className:"text-base md:text-lg text-slate-400 leading-relaxed max-w-4xl",children:["Master type deduction: utilizing modern Java compiler type inference and applying explicit type witness syntax (",e.jsx("code",{className:"text-emerald-300 font-mono",children:"ClassName.<Type>method()"}),") to resolve ambiguous supertypes."]})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsxs("h2",{className:"text-2xl font-bold text-emerald-400 flex items-center gap-2",children:[e.jsx("span",{children:"💻"})," Hands-On Java Demo Code"]}),e.jsx(t,{fileModule:s,title:"GenericMethodInvocationWitnessDemo.java",highlightLines:[7,10,19,20,24,25,26]})]}),e.jsx("section",{className:"space-y-4",children:e.jsx(n,{title:"Type Inference FAQs",questions:a})}),e.jsx("section",{className:"space-y-4",children:e.jsx(r,{content:o,title:"Module 006_002 Topic 3: Type Witness & Inference",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Printable Note",downloadFileName:"006_002_topic3_type_witness_inference_note.txt"})}),e.jsx(i,{note:"Most of the time, the Java compiler automatically figures out the generic type for you! But if you need to force a common parent type like Number, you can explicitly pass the type witness: 'MyClass.<Number>coalesce(10, 20.5)'! — Sukanta Hui"})]})}export{h as default};
