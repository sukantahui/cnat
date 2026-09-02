import{j as e}from"./vendor-react-core-Doz9nIC6.js";import{J as t}from"./JavaFileLoader-BfBG3xz_.js";import{F as a}from"./FAQTemplate-BHhlgA96.js";import{P as n}from"./PlainTextPrint-C08xhKA4.js";import{T as r}from"./TeacherSukantaHui-RpFLNJ5A.js";import"./JavaCodeBlock-BwsLxS3r.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-wprqVFW_.js";const o=`/**\r
 * Java Core Tutorial - Module 009_001: Lambda Expressions & Lexical Scoping\r
 * Topic 1: Anatomy of a Lambda Expression: (parameters) -> { body }\r
 * Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
 */\r
\r
package com.coderaccotax.javatutorial.functional;\r
\r
@FunctionalInterface\r
interface TaxCalculator {\r
    double calculate(double amount, double ratePercent);\r
}\r
\r
public class LambdaExpressionAnatomyDemo {\r
\r
    public static void main(String[] args) {\r
        System.out.println("==========================================================================");\r
        System.out.println(" TOPIC 1: ANATOMY OF A LAMBDA EXPRESSION - BARRACKPORE ACADEMY");\r
        System.out.println("==========================================================================\\n");\r
\r
        System.out.println(">>> THE 3 COMPONENTS OF A LAMBDA EXPRESSION:");\r
        System.out.println("  (parameters)       ->                { body }");\r
        System.out.println("  [Argument List] [Arrow Token] [Action Code / Expression]");\r
        System.out.println();\r
\r
        // Standard explicit full syntax lambda:\r
        TaxCalculator gstCalculator = (double amount, double ratePercent) -> {\r
            double totalTax = (amount * ratePercent) / 100.0;\r
            return totalTax;\r
        };\r
\r
        double calculatedGst = gstCalculator.calculate(50000.0, 18.0);\r
        System.out.printf(">>> Calculated 18%% GST on ₹50,000: ₹%,.2f%n", calculatedGst);\r
\r
        System.out.println("\\n>>> ANATOMY BREAKDOWN:");\r
        System.out.println("  1. Parameters  : '(double amount, double ratePercent)' matching the Functional Interface parameters.");\r
        System.out.println("  2. Arrow Token : '->' (Separates parameter list from executable body).");\r
        System.out.println("  3. Body Block  : '{ ... }' contains the method logic returning a double value.");\r
\r
        System.out.println("\\n==========================================================================");\r
    }\r
}`,s=`================================================================================\r
JAVA CORE TUTORIAL - QUICK REVISION GUIDE\r
Module 009_001: Lambda Expressions & Lexical Scoping\r
Topic 1: Lambda Expression Anatomy\r
Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
================================================================================\r
\r
1. LAMBDA ANATOMY:\r
   - Syntax: '(parameters) → { body }'\r
   - 1. Parameter List: Arguments received by the SAM interface method.\r
   - 2. Arrow Token ('->'): Connects parameters to the implementation.\r
   - 3. Body: Single expression or block of statements.\r
\r
================================================================================\r
Classroom Practice: Barrackpore Academy | Mentor: Sukanta Hui\r
================================================================================`,l=[{question:"Describe the three core structural components of a Java Lambda Expression.",shortAnswer:"A lambda expression consists of three components: 1. 'Parameters' (Argument list in parentheses, e.g. '(double amount, double rate)' or '(a, b)'). 2. 'Arrow Token' ('->', known as the lambda operator, separating arguments from execution logic). 3. 'Body' (either a single expression or a curly-brace code block '{ ... }' containing the statements to execute and return).",explanation:"Syntax grammar of Java 8 Lambda Expressions (JLS §15.27).",hint:"(parameter list) → { body block / expression }",level:"Beginner",codeExample:"(a, b) → a + b"}];function y(){return e.jsxs("div",{className:"space-y-12 px-4 md:px-8 py-8 text-slate-200 bg-slate-900 min-h-screen",children:[e.jsxs("header",{className:"space-y-4 border-b border-slate-800 pb-6",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"px-3 py-1 bg-sky-500/10 text-sky-400 border border-sky-500/20 text-xs font-semibold rounded-full uppercase tracking-wider",children:"Module 009_001 · Topic 1"}),e.jsx("span",{className:"px-3 py-1 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-xs font-semibold rounded-full",children:"Lambda Anatomy"})]}),e.jsxs("h1",{className:"text-xl sm:text-2xl md:text-3xl font-bold text-white tracking-tight",children:["Anatomy of a Lambda Expression: ",e.jsx("code",{className:"text-emerald-400 font-mono",children:"(parameters) -> { body }"})]}),e.jsxs("p",{className:"text-base md:text-lg text-slate-400 leading-relaxed max-w-4xl",children:["Dissect functional syntax grammar: examining parameter lists, the lambda arrow operator (",e.jsx("code",{className:"text-emerald-300 font-mono",children:"->"}),"), and method body statement blocks."]})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsxs("h2",{className:"text-2xl font-bold text-emerald-400 flex items-center gap-2",children:[e.jsx("span",{children:"💻"})," Hands-On Java Demo Code"]}),e.jsx(t,{fileModule:o,title:"LambdaExpressionAnatomyDemo.java",highlightLines:[7,8,9,10,19,20,21,22,25,26]})]}),e.jsx("section",{className:"space-y-4",children:e.jsx(a,{title:"Lambda Anatomy FAQs",questions:l})}),e.jsx("section",{className:"space-y-4",children:e.jsx(n,{content:s,title:"Module 009_001 Topic 1: Lambda Anatomy",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Printable Note",downloadFileName:"009_001_topic1_lambda_anatomy_note.txt"})}),e.jsx(r,{note:"A Lambda expression is simply an anonymous method stripped down to its bare essentials: Arguments on the left, the arrow in the middle, and the logic on the right! Clean, concise, and beautiful! — Sukanta Hui"})]})}export{y as default};
