import{j as e}from"./vendor-react-core-Doz9nIC6.js";import{J as t}from"./JavaFileLoader-BfBG3xz_.js";import{F as a}from"./FAQTemplate-BHhlgA96.js";import{P as n}from"./PlainTextPrint-C08xhKA4.js";import{T as r}from"./TeacherSukantaHui-BaJcBHAy.js";import"./JavaCodeBlock-BwsLxS3r.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-8ao-0upJ.js";const s=`/**\r
 * Java Core Tutorial - Module 009_003: Method & Constructor References\r
 * Topic 3: Kind 1: Reference to a Static Method (ClassName::staticMethodName)\r
 * Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
 */\r
\r
package com.coderaccotax.javatutorial.functional;\r
\r
import java.util.List;\r
import java.util.function.BinaryOperator;\r
import java.util.function.Function;\r
\r
class TaxMathEngine {\r
    public static double computeCess(double taxAmount) {\r
        return taxAmount * 0.04; // 4% Health & Education Cess\r
    }\r
}\r
\r
public class StaticMethodReferenceDemo {\r
\r
    public static void main(String[] args) {\r
        System.out.println("==========================================================================");\r
        System.out.println(" TOPIC 3: STATIC METHOD REFERENCE (ClassName::staticMethod) - BARRACKPORE");\r
        System.out.println("==========================================================================\\n");\r
\r
        // 1. Standard JDK Static Method Reference (Math::max):\r
        // Lambda: (a, b) -> Math.max(a, b)\r
        BinaryOperator<Integer> maxFinder = Math::max;\r
        System.out.println(">>> 1. Math::max(85, 92)             : " + maxFinder.apply(85, 92));\r
\r
        // 2. Standard JDK Static Method Reference (Integer::parseInt):\r
        // Lambda: s -> Integer.parseInt(s)\r
        Function<String, Integer> stringParser = Integer::parseInt;\r
        List<String> rawScores = List.of("95", "88", "76");\r
        List<Integer> parsedScores = rawScores.stream().map(Integer::parseInt).toList();\r
        System.out.println(">>> 2. Stream.map(Integer::parseInt) : " + parsedScores);\r
\r
        // 3. Custom Class Static Method Reference (TaxMathEngine::computeCess):\r
        // Lambda: amt -> TaxMathEngine.computeCess(amt)\r
        Function<Double, Double> cessCalculator = TaxMathEngine::computeCess;\r
        System.out.printf(">>> 3. Custom TaxMathEngine::computeCess: ₹%,.2f on ₹10,000%n", cessCalculator.apply(10000.0));\r
\r
        System.out.println("\\n==========================================================================");\r
    }\r
}`,o=`================================================================================\r
JAVA CORE TUTORIAL - QUICK REVISION GUIDE\r
Module 009_003: Method & Constructor References\r
Topic 3: Static Method References\r
Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
================================================================================\r
\r
1. STATIC METHOD REFERENCES:\r
   - Syntax: 'ClassName::staticMethodName'.\r
   - Equivalence: '(args) → ClassName.staticMethodName(args)'.\r
   - Examples: 'Math::max', 'Integer::parseInt', 'Double::valueOf'.\r
   - Arguments match 1:1 with SAM parameters.\r
\r
================================================================================\r
Classroom Practice: Barrackpore Academy | Mentor: Sukanta Hui\r
================================================================================`,i=[{question:"How does the Java compiler resolve a Static Method Reference ('ClassName::staticMethodName') to a functional interface SAM?",shortAnswer:"When using 'ClassName::staticMethodName', the compiler verifies that the referenced static method's parameter list and return type match the parameter list and return type of the functional interface SAM. For example, 'Math::max' takes two ints '(int, int)' and returns an int, exactly matching 'BinaryOperator<Integer>' ('Integer apply(Integer, Integer)'). The compiler emits bytecode invoking that static method with the SAM arguments directly.",explanation:"Static method reference mechanics and parameter matching.",hint:"ClassName::staticMethodName matches parameters 1:1 with the functional interface arguments.",level:"Beginner",codeExample:"BinaryOperator<Integer> max = Math::max; Function<String, Integer> p = Integer::parseInt;"}];function g(){return e.jsxs("div",{className:"space-y-12 px-4 md:px-8 py-8 text-slate-200 bg-slate-900 min-h-screen",children:[e.jsxs("header",{className:"space-y-4 border-b border-slate-800 pb-6",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"px-3 py-1 bg-sky-500/10 text-sky-400 border border-sky-500/20 text-xs font-semibold rounded-full uppercase tracking-wider",children:"Module 009_003 · Topic 3"}),e.jsx("span",{className:"px-3 py-1 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-xs font-semibold rounded-full",children:"Static References"})]}),e.jsxs("h1",{className:"text-xl sm:text-2xl md:text-3xl font-bold text-white tracking-tight",children:["Kind 1: Reference to a ",e.jsx("code",{className:"text-emerald-400 font-mono",children:"Static Method"})," (",e.jsx("code",{className:"text-sky-400 font-mono",children:"ClassName::staticMethod"}),")"]}),e.jsxs("p",{className:"text-base md:text-lg text-slate-400 leading-relaxed max-w-4xl",children:["Apply static functional handles: referencing JDK utilities like ",e.jsx("code",{className:"text-emerald-300 font-mono",children:"Math::max"})," and ",e.jsx("code",{className:"text-sky-300 font-mono",children:"Integer::parseInt"})," alongside custom business class calculations."]})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsxs("h2",{className:"text-2xl font-bold text-emerald-400 flex items-center gap-2",children:[e.jsx("span",{children:"💻"})," Hands-On Java Demo Code"]}),e.jsx(t,{fileModule:s,title:"StaticMethodReferenceDemo.java",highlightLines:[7,10,11,22,23,27,28,33,34]})]}),e.jsx("section",{className:"space-y-4",children:e.jsx(a,{title:"Static References FAQs",questions:i})}),e.jsx("section",{className:"space-y-4",children:e.jsx(n,{content:o,title:"Module 009_003 Topic 3: Static References",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Printable Note",downloadFileName:"009_003_topic3_static_references_note.txt"})}),e.jsx(r,{note:"Whenever you have a static utility method that takes arguments and returns a value, write 'ClassName::method'! For example, 'list.map(Integer::parseInt)' is 10 times cleaner than 'list.map(s → Integer.parseInt(s))'! — Sukanta Hui"})]})}export{g as default};
