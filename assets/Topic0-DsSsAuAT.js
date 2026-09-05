import{j as e}from"./vendor-react-core-Doz9nIC6.js";import{J as t}from"./JavaFileLoader-BfBG3xz_.js";import{F as n}from"./FAQTemplate-BHhlgA96.js";import{P as r}from"./PlainTextPrint-C08xhKA4.js";import{T as a}from"./TeacherSukantaHui-DerPxfxp.js";import"./JavaCodeBlock-BwsLxS3r.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-CH1iX9C8.js";const i=`/**\r
 * Java Core Tutorial - Module 009_002: Built-in Functional Interfaces\r
 * Topic 0: Overview of java.util.function: The 43 Built-In Interfaces Landscape\r
 * Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
 */\r
\r
package com.coderaccotax.javatutorial.functional;\r
\r
public class FunctionPackageOverviewDemo {\r
\r
    public static void main(String[] args) {\r
        System.out.println("==========================================================================");\r
        System.out.println(" TOPIC 0: java.util.function PACKAGE LANDSCAPE - BARRACKPORE");\r
        System.out.println("==========================================================================\\n");\r
\r
        System.out.println(">>> THE 43 BUILT-IN FUNCTIONAL INTERFACES IN JAVA 8+:");\r
        System.out.println("  - To prevent developers from writing custom interfaces for everyday tasks,");\r
        System.out.println("    Java 8 introduced 43 standard functional interfaces organized into 4 CORE FAMILIES:");\r
        System.out.println();\r
        System.out.println("+----+-------------------+-----------------------+-------------------+-----------------------------------+");\r
        System.out.println("| #  | Core Family       | Single Abstract Method| Input -> Output   | Primary Use Case                  |");\r
        System.out.println("+----+-------------------+-----------------------+-------------------+-----------------------------------+");\r
        System.out.println("| 1. | Predicate<T>      | boolean test(T t)     | T -> boolean      | Filtering & conditional validation|");\r
        System.out.println("| 2. | Function<T, R>    | R apply(T t)          | T -> R            | Data mapping & transformation     |");\r
        System.out.println("| 3. | Consumer<T>       | void accept(T t)      | T -> void         | Executing side-effects (Print/Log)|");\r
        System.out.println("| 4. | Supplier<T>       | T get()               | () -> T           | Factory creation & Lazy evaluation|");\r
        System.out.println("+----+-------------------+-----------------------+-------------------+-----------------------------------+");\r
        System.out.println();\r
        System.out.println(">>> DERIVED SPECIALIZATIONS IN THE PACKAGE:");\r
        System.out.println("  - 2-Argument Bi-Variants  : BiPredicate<T,U>, BiFunction<T,U,R>, BiConsumer<T,U>");\r
        System.out.println("  - Operators (Same In/Out) : UnaryOperator<T>, BinaryOperator<T>");\r
        System.out.println("  - Primitive Specializations: IntPredicate, DoubleFunction, LongConsumer, ToIntFunction<T>");\r
\r
        System.out.println("\\n==========================================================================");\r
    }\r
}`,o=`================================================================================\r
JAVA CORE TUTORIAL - QUICK REVISION GUIDE\r
Module 009_002: Built-in Functional Interfaces\r
Topic 0: java.util.function Overview\r
Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
================================================================================\r
\r
1. JAVA.UTIL.FUNCTION PACKAGE (43 INTERFACES):\r
   - The Big 4:\r
     1. Predicate<T>: 'T → boolean' (Filtering).\r
     2. Function<T, R>: 'T → R' (Mapping).\r
     3. Consumer<T>: 'T → void' (Side-effects).\r
     4. Supplier<T>: '() → T' (Lazy factory).\r
   - Bi-Variants: BiPredicate, BiFunction, BiConsumer.\r
   - Operators: UnaryOperator, BinaryOperator.\r
   - Primitive Variants: IntPredicate, DoubleFunction, etc.\r
\r
================================================================================\r
Classroom Practice: Barrackpore Academy | Mentor: Sukanta Hui\r
================================================================================`,s=[{question:"Why did Java 8 introduce the 'java.util.function' package with 43 built-in functional interfaces?",shortAnswer:"To establish a universal functional vocabulary across the Java ecosystem. Without 'java.util.function', every library and developer would create custom single-method interfaces (e.g. 'MyFilter', 'MyTransformer'), resulting in incompatible APIs. The 43 built-in interfaces (centered around Predicate, Function, Consumer, and Supplier, along with their Bi, Operator, and primitive specializations) provide a standardized target type for all Stream operations, collections utilities, and lambda expressions.",explanation:"Core architecture and standard taxonomy of java.util.function.",hint:"Standardizes functional APIs across Java, centered around the 4 core families: Predicate, Function, Consumer, and Supplier.",level:"Beginner",codeExample:"Predicate<T>, Function<T, R>, Consumer<T>, Supplier<T>"}];function y(){return e.jsxs("div",{className:"space-y-12 px-4 md:px-8 py-8 text-slate-200 bg-slate-900 min-h-screen",children:[e.jsxs("header",{className:"space-y-4 border-b border-slate-800 pb-6",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"px-3 py-1 bg-sky-500/10 text-sky-400 border border-sky-500/20 text-xs font-semibold rounded-full uppercase tracking-wider",children:"Module 009_002 · Topic 0"}),e.jsx("span",{className:"px-3 py-1 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-xs font-semibold rounded-full",children:"Functional Interfaces"})]}),e.jsxs("h1",{className:"text-xl sm:text-2xl md:text-3xl font-bold text-white tracking-tight",children:["Overview of ",e.jsx("code",{className:"text-emerald-400 font-mono",children:"java.util.function"}),": The 43 Built-In Interfaces"]}),e.jsx("p",{className:"text-base md:text-lg text-slate-400 leading-relaxed max-w-4xl",children:"Survey the standard functional taxonomy: exploring the 4 core interface pillars, two-argument Bi variants, specialized mathematical operators, and primitive unboxed types."})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsxs("h2",{className:"text-2xl font-bold text-emerald-400 flex items-center gap-2",children:[e.jsx("span",{children:"💻"})," Hands-On Java Demo Code"]}),e.jsx(t,{fileModule:i,title:"FunctionPackageOverviewDemo.java",highlightLines:[7,10,13,14,18,19,20,21,25,26]})]}),e.jsx("section",{className:"space-y-4",children:e.jsx(n,{title:"Function Package FAQs",questions:s})}),e.jsx("section",{className:"space-y-4",children:e.jsx(r,{content:o,title:"Module 009_002 Topic 0: Function Package Overview",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Printable Note",downloadFileName:"009_002_topic0_function_package_overview_note.txt"})}),e.jsx(a,{note:"You almost never need to write your own '@FunctionalInterface' in real projects! Java 8 already gave you 43 perfect built-in interfaces in 'java.util.function' that cover every possible combination of inputs and outputs! — Sukanta Hui"})]})}export{y as default};
