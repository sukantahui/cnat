import{j as e}from"./vendor-react-core-Doz9nIC6.js";import{J as t}from"./JavaFileLoader-BfBG3xz_.js";import{F as r}from"./FAQTemplate-BHhlgA96.js";import{P as a}from"./PlainTextPrint-C08xhKA4.js";import{T as n}from"./TeacherSukantaHui-CEPuAfsb.js";import"./JavaCodeBlock-BwsLxS3r.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-DGCamHnX.js";const i=`/**\r
 * Java Core Tutorial - Module 006_003: Bounded Type Parameters & Multiple Bounds\r
 * Topic 7: Building a Type-Safe Generic Numeric Calculator (Byte, Short, Int, Long, Float, Double)\r
 * Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
 */\r
\r
package com.coderaccotax.javatutorial.generics;\r
\r
public class GenericNumericCalculatorProjectDemo {\r
\r
    // Type-Safe Numeric Calculator Operating on ANY Java Number:\r
    public static class NumericCalculator<T extends Number> {\r
        private final T first;\r
        private final T second;\r
\r
        public NumericCalculator(T a, T b) {\r
            this.first = a;\r
            this.second = b;\r
        }\r
\r
        public double add() { return first.doubleValue() + second.doubleValue(); }\r
        public double subtract() { return first.doubleValue() - second.doubleValue(); }\r
        public double multiply() { return first.doubleValue() * second.doubleValue(); }\r
        public double divide() {\r
            if (second.doubleValue() == 0.0) throw new ArithmeticException("Division by zero!");\r
            return first.doubleValue() / second.doubleValue();\r
        }\r
    }\r
\r
    public static void main(String[] args) {\r
        System.out.println("==========================================================================");\r
        System.out.println(" TOPIC 7: GENERIC NUMERIC CALCULATOR - BARRACKPORE");\r
        System.out.println("==========================================================================\\n");\r
\r
        // 1. Calculating on Integers:\r
        NumericCalculator<Integer> intCalc = new NumericCalculator<>(150, 25);\r
        System.out.println(">>> 1. Integer Arithmetic (150 & 25):");\r
        System.out.printf("  Add: %.1f | Subtract: %.1f | Multiply: %.1f | Divide: %.1f%n",\r
                intCalc.add(), intCalc.subtract(), intCalc.multiply(), intCalc.divide());\r
\r
        // 2. Calculating on Floating-Point Doubles:\r
        NumericCalculator<Double> dblCalc = new NumericCalculator<>(9850.50, 18.5);\r
        System.out.println("\\n>>> 2. Double Floating-Point Arithmetic (₹9850.50 & 18.5% GST):");\r
        System.out.printf("  Total with GST: ₹%.2f%n", dblCalc.add());\r
        System.out.printf("  GST Product   : ₹%.2f%n", (dblCalc.multiply() / 100.0));\r
\r
        // 3. Calculating on Long Primitives:\r
        NumericCalculator<Long> longCalc = new NumericCalculator<>(50000000L, 1000000L);\r
        System.out.println("\\n>>> 3. Long Enterprise Batch Operations:");\r
        System.out.printf("  Divide Ratio: %.2f%n", longCalc.divide());\r
\r
        System.out.println("\\n==========================================================================");\r
    }\r
}`,l=`================================================================================\r
JAVA CORE TUTORIAL - QUICK REVISION GUIDE\r
Module 006_003: Bounded Type Parameters & Multiple Bounds\r
Topic 7: Generic Numeric Calculator\r
Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
================================================================================\r
\r
1. NUMERIC CALCULATOR PATTERN:\r
   - '<T extends Number>' encapsulates all numeric types.\r
   - Bypasses operator overloading limitation via 'doubleValue()'.\r
   - Unifies arithmetic logic for Byte, Short, Integer, Long, Float, Double.\r
   - Type-safe compile-time mathematical engine.\r
\r
================================================================================\r
Classroom Practice: Barrackpore Academy | Mentor: Sukanta Hui\r
================================================================================`,o=[{question:"Why does 'first.doubleValue() + second.doubleValue()' solve the arithmetic operator limitation on Java generic type parameters?",shortAnswer:"In Java, standard arithmetic operators (+, -, *, /) cannot be directly applied to generic type variables ('T a, T b') because Java does not support operator overloading. By bounding 'T' to '<T extends Number>', we extract their primitive double values via 'doubleValue()' and perform high-precision arithmetic calculations natively.",explanation:"Standard design pattern for numeric mathematical abstractions in Java.",hint:"Generics don't support operator overloading; converting to primitive doubleValue() enables math operations.",level:"Intermediate",codeExample:"public double add() { return a.doubleValue() + b.doubleValue(); }"}];function g(){return e.jsxs("div",{className:"space-y-12 px-4 md:px-8 py-8 text-slate-200 bg-slate-900 min-h-screen",children:[e.jsxs("header",{className:"space-y-4 border-b border-slate-800 pb-6",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"px-3 py-1 bg-sky-500/10 text-sky-400 border border-sky-500/20 text-xs font-semibold rounded-full uppercase tracking-wider",children:"Module 006_003 · Topic 7"}),e.jsx("span",{className:"px-3 py-1 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-xs font-semibold rounded-full",children:"Numeric Calculator"})]}),e.jsx("h1",{className:"text-xl sm:text-2xl md:text-3xl font-bold text-white tracking-tight",children:"Building a Type-Safe Generic Numeric Calculator"}),e.jsx("p",{className:"text-base md:text-lg text-slate-400 leading-relaxed max-w-4xl",children:"Unify numerical operations: constructing a polymorphic mathematical calculator supporting Byte, Short, Integer, Long, Float, and Double numbers."})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsxs("h2",{className:"text-2xl font-bold text-emerald-400 flex items-center gap-2",children:[e.jsx("span",{children:"💻"})," Hands-On Java Demo Code"]}),e.jsx(t,{fileModule:i,title:"GenericNumericCalculatorProjectDemo.java",highlightLines:[7,10,11,19,20,21,22,33,39]})]}),e.jsx("section",{className:"space-y-4",children:e.jsx(r,{title:"Numeric Calculator FAQs",questions:o})}),e.jsx("section",{className:"space-y-4",children:e.jsx(a,{content:l,title:"Module 006_003 Topic 7: Generic Numeric Calculator",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Printable Note",downloadFileName:"006_003_topic7_generic_numeric_calculator_note.txt"})}),e.jsx(n,{note:"Because Java doesn't let us write 'T a + T b', bounding 'T extends Number' and calling 'a.doubleValue() + b.doubleValue()' is the industry-standard way to build generic math libraries! — Sukanta Hui"})]})}export{g as default};
