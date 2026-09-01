import{j as r}from"./vendor-react-core-Doz9nIC6.js";import{J as e}from"./JavaFileLoader-BfBG3xz_.js";import{F as t}from"./FAQTemplate-BHhlgA96.js";import{P as a}from"./PlainTextPrint-C08xhKA4.js";import{T as n}from"./TeacherSukantaHui-BaJcBHAy.js";import"./JavaCodeBlock-BwsLxS3r.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-8ao-0upJ.js";const i=`/**\r
 * Java Core Tutorial - Module 009_002: Built-in Functional Interfaces\r
 * Topic 11: Specialized Operators: UnaryOperator<T> & BinaryOperator<T>\r
 * Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
 */\r
\r
package com.coderaccotax.javatutorial.functional;\r
\r
import java.util.ArrayList;\r
import java.util.Comparator;\r
import java.util.List;\r
import java.util.function.BinaryOperator;\r
import java.util.function.UnaryOperator;\r
\r
public class SpecializedOperatorsUnaryBinaryDemo {\r
\r
    public static void main(String[] args) {\r
        System.out.println("==========================================================================");\r
        System.out.println(" TOPIC 11: SPECIALIZED OPERATORS (Unary & Binary) - BARRACKPORE");\r
        System.out.println("==========================================================================\\n");\r
\r
        // 1. UnaryOperator<T> extends Function<T, T> (Single input, SAME type output):\r
        UnaryOperator<String> sanitizePanCode = pan -> pan.trim().toUpperCase();\r
\r
        List<String> rawPans = new ArrayList<>(List.of(" abcde1234f ", "wxyz9876k", " pqrs5555l "));\r
        // List.replaceAll() accepts UnaryOperator<E>!\r
        rawPans.replaceAll(sanitizePanCode);\r
        System.out.println(">>> 1. List.replaceAll(UnaryOperator): " + rawPans);\r
\r
        // 2. BinaryOperator<T> extends BiFunction<T, T, T> (Two inputs of T, returns T):\r
        BinaryOperator<Double> calculateTotalCost = (base, gst) -> base + gst;\r
        System.out.printf(">>> 2. BinaryOperator (Base + GST)     : ₹%,.2f%n", calculateTotalCost.apply(50000.0, 9000.0));\r
\r
        // 3. Static Helpers on BinaryOperator: minBy() & maxBy():\r
        BinaryOperator<Integer> highestScoreFinder = BinaryOperator.maxBy(Comparator.naturalOrder());\r
        System.out.println(">>> 3. BinaryOperator.maxBy(92, 85)   : " + highestScoreFinder.apply(92, 85));\r
\r
        System.out.println("\\n==========================================================================");\r
    }\r
}`,o=`================================================================================\r
JAVA CORE TUTORIAL - QUICK REVISION GUIDE\r
Module 009_002: Built-in Functional Interfaces\r
Topic 11: UnaryOperator & BinaryOperator\r
Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
================================================================================\r
\r
1. SPECIALIZED OPERATORS:\r
   - 'UnaryOperator<T>': Extends 'Function<T, T>' (Same input & output type).\r
     * Used in 'List.replaceAll(UnaryOperator)'.\r
   - 'BinaryOperator<T>': Extends 'BiFunction<T, T, T>' (2 identical inputs → same output).\r
     * Used in 'Stream.reduce(BinaryOperator)'.\r
     * Static helpers: 'BinaryOperator.minBy()', 'BinaryOperator.maxBy()'.\r
\r
================================================================================\r
Classroom Practice: Barrackpore Academy | Mentor: Sukanta Hui\r
================================================================================`,s=[{question:"What are 'UnaryOperator<T>' and 'BinaryOperator<T>' in Java and how do they extend the Function hierarchy?",shortAnswer:"1. 'UnaryOperator<T>': Extends 'Function<T, T>' where the input and output types are identical ('T apply(T t)'). It simplifies syntax and powers methods like 'List.replaceAll(unaryOperator)'. 2. 'BinaryOperator<T>': Extends 'BiFunction<T, T, T>' where both operands and the return value share the exact same type ('T apply(T t1, T t2)'). It is the primary functional interface powering Stream reductions ('Stream.reduce(BinaryOperator)'). It also provides static utility methods 'BinaryOperator.minBy(comparator)' and 'BinaryOperator.maxBy(comparator)'.",explanation:"Operator specializations in java.util.function.",hint:"UnaryOperator is Function<T,T>; BinaryOperator is BiFunction<T,T,T>; powers List.replaceAll() and Stream.reduce().",level:"Intermediate",codeExample:"UnaryOperator<String> upper = String::toUpperCase; BinaryOperator<Integer> sum = Integer::sum;"}];function O(){return r.jsxs("div",{className:"space-y-12 px-4 md:px-8 py-8 text-slate-200 bg-slate-900 min-h-screen",children:[r.jsxs("header",{className:"space-y-4 border-b border-slate-800 pb-6",children:[r.jsxs("div",{className:"flex items-center gap-3",children:[r.jsx("span",{className:"px-3 py-1 bg-sky-500/10 text-sky-400 border border-sky-500/20 text-xs font-semibold rounded-full uppercase tracking-wider",children:"Module 009_002 · Topic 11"}),r.jsx("span",{className:"px-3 py-1 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-xs font-semibold rounded-full",children:"Operators"})]}),r.jsxs("h1",{className:"text-xl sm:text-2xl md:text-3xl font-bold text-white tracking-tight",children:["Specialized Operators: ",r.jsx("code",{className:"text-emerald-400 font-mono",children:"UnaryOperator<T>"})," & ",r.jsx("code",{className:"text-sky-400 font-mono",children:"BinaryOperator<T>"})]}),r.jsxs("p",{className:"text-base md:text-lg text-slate-400 leading-relaxed max-w-4xl",children:["Streamline mathematical operations: applying type-preserving ",r.jsx("code",{className:"text-emerald-300 font-mono",children:"UnaryOperator"})," for in-place list transformations and ",r.jsx("code",{className:"text-sky-300 font-mono",children:"BinaryOperator"})," for stream reductions and min/max evaluations."]})]}),r.jsxs("section",{className:"space-y-4",children:[r.jsxs("h2",{className:"text-2xl font-bold text-emerald-400 flex items-center gap-2",children:[r.jsx("span",{children:"💻"})," Hands-On Java Demo Code"]}),r.jsx(e,{fileModule:i,title:"SpecializedOperatorsUnaryBinaryDemo.java",highlightLines:[7,8,9,10,19,20,24,25,29,30,33,34]})]}),r.jsx("section",{className:"space-y-4",children:r.jsx(t,{title:"Operators FAQs",questions:s})}),r.jsx("section",{className:"space-y-4",children:r.jsx(a,{content:o,title:"Module 009_002 Topic 11: Operators",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Printable Note",downloadFileName:"009_002_topic11_specialized_operators_note.txt"})}),r.jsx(n,{note:"Whenever your input type and output type are identical (e.g. String → String or (int, int) → int), don't write verbose 'Function<String, String>' or 'BiFunction<Integer, Integer, Integer>'! Use 'UnaryOperator<String>' or 'BinaryOperator<Integer>' for cleaner, professional code! — Sukanta Hui"})]})}export{O as default};
