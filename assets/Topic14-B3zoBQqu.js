import{j as t}from"./vendor-react-core-Doz9nIC6.js";import{J as e}from"./JavaFileLoader-BfBG3xz_.js";import{F as a}from"./FAQTemplate-BHhlgA96.js";import{P as r}from"./PlainTextPrint-C08xhKA4.js";import{T as n}from"./TeacherSukantaHui-DDN87fI5.js";import"./JavaCodeBlock-BwsLxS3r.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-DEsnU7fn.js";const s=`/**\r
 * Java Core Tutorial - Module 012_001: GoF Design Patterns\r
 * Topic 14: The Strategy Pattern - Interchangeable Algorithms\r
 * Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
 */\r
\r
package com.coderaccotax.javatutorial.patterns;\r
\r
import java.util.function.DoubleUnaryOperator;\r
\r
public class StrategyPatternDemo {\r
\r
    // 1. Classic Strategy Interface (SAM / Functional Interface):\r
    @FunctionalInterface\r
    public interface DiscountStrategy {\r
        double applyDiscount(double rawAmount);\r
    }\r
\r
    // 2. Context Class:\r
    public static class FeeCalculatorContext {\r
        private DiscountStrategy strategy;\r
\r
        public FeeCalculatorContext(DiscountStrategy initialStrategy) {\r
            this.strategy = initialStrategy;\r
        }\r
\r
        public void setStrategy(DiscountStrategy newStrategy) {\r
            this.strategy = newStrategy; // Swap algorithm at runtime!\r
        }\r
\r
        public double calculateFinalFee(double rawFee) {\r
            return strategy.applyDiscount(rawFee);\r
        }\r
    }\r
\r
    public static void main(String[] args) {\r
        System.out.println("==========================================================================");\r
        System.out.println(" TOPIC 14: STRATEGY PATTERN & JAVA 8 LAMBDAS - BARRACKPORE");\r
        System.out.println("==========================================================================\\n");\r
\r
        double baseFee = 6000.0;\r
        FeeCalculatorContext context = new FeeCalculatorContext(raw -> raw); // No discount\r
\r
        System.out.println("1. Standard Fee   : ₹" + context.calculateFinalFee(baseFee));\r
\r
        // Swap to Early Bird 20% Discount Strategy:\r
        context.setStrategy(raw -> raw * 0.80);\r
        System.out.println("2. Early Bird 20% : ₹" + context.calculateFinalFee(baseFee));\r
\r
        // Swap to Merit Scholarship 50% Discount Strategy:\r
        context.setStrategy(raw -> raw * 0.50);\r
        System.out.println("3. Merit 50% Disc : ₹" + context.calculateFinalFee(baseFee));\r
\r
        System.out.println("\\n==========================================================================");\r
    }\r
}\r
`,o=`================================================================================\r
JAVA CORE TUTORIAL - QUICK REVISION GUIDE\r
Module 012_001: GoF Design Patterns\r
Topic 14: Strategy Pattern\r
Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
================================================================================\r
\r
1. INTENT:\r
   - Define a family of algorithms, encapsulate each one, and make them interchangeable.\r
   - Strategy lets the algorithm vary independently from clients that use it.\r
\r
2. MODERN JAVA 8 INTEGRATION:\r
   - 'java.util.Comparator' is the prime example of the Strategy pattern in Java!\r
   - Lambdas allow passing strategies as first-class parameters.\r
\r
================================================================================\r
Classroom Practice: Barrackpore Academy | Mentor: Sukanta Hui\r
================================================================================\r
`,i=[{question:"How does the Strategy pattern eliminate massive if-else or switch-case conditional ladders?",shortAnswer:"By encapsulating each branch of the conditional logic into an independent strategy object implementing a common interface, allowing the client to execute the appropriate algorithm polymorphically without branching statements.",explanation:"Adheres to the Open-Closed Principle.",hint:"Encapsulates branching algorithm variants into polymorphic strategy objects.",level:"Beginner",codeExample:"context.setStrategy(new HighDiscountStrategy());"},{question:"What is the standard example of the Strategy pattern built directly into the Java Standard Library?",shortAnswer:"java.util.Comparator<T> passed to Collections.sort() or Stream.sorted().",explanation:"Allows passing custom comparison algorithms dynamically.",hint:"java.util.Comparator interface.",level:"Beginner",codeExample:"list.sort((a, b) → Double.compare(a.score(), b.score()));"}];function x(){return t.jsxs("div",{className:"space-y-12 px-4 md:px-8 py-8 text-slate-200 bg-slate-900 min-h-screen",children:[t.jsxs("header",{className:"space-y-4 border-b border-slate-800 pb-6",children:[t.jsxs("div",{className:"flex items-center gap-3",children:[t.jsx("span",{className:"px-3 py-1 bg-sky-500/10 text-sky-400 border border-sky-500/20 text-xs font-semibold rounded-full uppercase tracking-wider",children:"Module 012_001 · Topic 14"}),t.jsx("span",{className:"px-3 py-1 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-xs font-semibold rounded-full",children:"GoF Design Patterns"})]}),t.jsxs("h1",{className:"text-xl sm:text-2xl md:text-3xl font-bold text-white tracking-tight",children:["The Strategy Pattern: ",t.jsx("code",{className:"text-emerald-400 font-mono",children:"Interchangeable Algorithms"})]}),t.jsx("p",{className:"text-base md:text-lg text-slate-400 leading-relaxed max-w-4xl",children:"Algorithm abstraction: swapping payment calculations, sorting strategies, and compression algorithms dynamically using Java 8 Lambdas and Functions."})]}),t.jsxs("section",{className:"space-y-4",children:[t.jsxs("h2",{className:"text-2xl font-bold text-emerald-400 flex items-center gap-2",children:[t.jsx("span",{children:"💻"})," Hands-On Java Demo Code"]}),t.jsx(e,{fileModule:s,title:"StrategyPatternDemo.java",highlightLines:[18,25,34,43]})]}),t.jsx("section",{className:"space-y-4",children:t.jsx(a,{title:"GoF Design Patterns FAQs",questions:i})}),t.jsx("section",{className:"space-y-4",children:t.jsx(r,{content:o,title:"Module 012_001 Topic 14: Strategy Pattern",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Printable Note",downloadFileName:"012_001_topic14_strategy_pattern_note.txt"})}),t.jsx(n,{note:"In Java 8+, the Strategy pattern became effortless! Instead of creating 5 separate strategy classes, any Functional Interface (like Function<Double, Double> or Comparator<T>) is instantly a Strategy! — Sukanta Hui"})]})}export{x as default};
