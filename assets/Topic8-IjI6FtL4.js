import{j as e}from"./vendor-react-core-Doz9nIC6.js";import{J as a}from"./JavaFileLoader-BfBG3xz_.js";import{F as n}from"./FAQTemplate-BHhlgA96.js";import{P as t}from"./PlainTextPrint-C08xhKA4.js";import{T as i}from"./TeacherSukantaHui-RpFLNJ5A.js";import"./JavaCodeBlock-BwsLxS3r.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-wprqVFW_.js";const r=`/**\r
 * Java Core Tutorial - Module 009_001: Lambda Expressions & Lexical Scoping\r
 * Topic 8: Variable Capture / Closures: Capturing Local Variables & 'Effectively Final'\r
 * Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
 */\r
\r
package com.coderaccotax.javatutorial.functional;\r
\r
import java.util.function.Function;\r
\r
public class VariableCaptureEffectivelyFinalDemo {\r
\r
    public static void main(String[] args) {\r
        System.out.println("==========================================================================");\r
        System.out.println(" TOPIC 8: VARIABLE CAPTURE & EFFECTIVELY FINAL - BARRACKPORE");\r
        System.out.println("==========================================================================\\n");\r
\r
        // 1. Local variable in enclosing method:\r
        double taxExemptionThreshold = 250000.0; // NOT declared final, but never re-assigned!\r
\r
        // 2. Variable Capture inside Lambda (Closure):\r
        Function<Double, Double> taxableIncomeCalculator = annualIncome -> {\r
            // 'taxExemptionThreshold' is CAPTURED by value into the lambda:\r
            if (annualIncome > taxExemptionThreshold) {\r
                return annualIncome - taxExemptionThreshold;\r
            }\r
            return 0.0;\r
        };\r
\r
        // If you uncomment the line below, compiler triggers an error in the lambda:\r
        // taxExemptionThreshold = 300000.0; // COMPILE ERROR: Local variable referenced from a lambda expression must be final or effectively final!\r
\r
        double income = 650000.0;\r
        System.out.printf(">>> Annual Income: ₹%,.2f | Taxable Income: ₹%,.2f%n",\r
                income, taxableIncomeCalculator.apply(income));\r
\r
        System.out.println("\\n>>> WHAT DOES 'EFFECTIVELY FINAL' MEAN?");\r
        System.out.println("  - A variable is 'Effectively Final' if its value is assigned ONCE and NEVER modified afterwards, even if the 'final' keyword is omitted.");\r
        System.out.println("  - Java 8 allows omitting the 'final' modifier for cleaner syntax, but still enforces compile-time immutability!");\r
\r
        System.out.println("\\n==========================================================================");\r
    }\r
}`,l=`================================================================================\r
JAVA CORE TUTORIAL - QUICK REVISION GUIDE\r
Module 009_001: Lambda Expressions & Lexical Scoping\r
Topic 8: Variable Capture & Closures\r
Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
================================================================================\r
\r
1. EFFECTIVELY FINAL RULE:\r
   - Capturing: Lambda copies local variables into its closure.\r
   - Captured local variables MUST be 'final' or 'Effectively Final'.\r
   - 'Effectively Final' = Assigned once, never modified.\r
   - Instance and static fields CAN be read and mutated (they live on heap).\r
\r
================================================================================\r
Classroom Practice: Barrackpore Academy | Mentor: Sukanta Hui\r
================================================================================`,o=[{question:"What is 'Variable Capture' in Java Lambda expressions and what does the 'Effectively Final' requirement mean?",shortAnswer:"1. 'Variable Capture': When a lambda expression references a local variable declared in its enclosing method, it 'captures' a copy of that variable's value into its closure. 2. 'Effectively Final': A local variable is 'Effectively Final' if it is assigned exactly once and its value is never mutated after initialization, even if the explicit 'final' keyword is omitted. The Java compiler verifies this at compile time and prohibits capturing any local variable that is reassigned elsewhere in the enclosing method.",explanation:"Core closure mechanics and variable capture rules in Java 8.",hint:"Local variables captured by lambdas must never be reassigned (assigned once and never mutated).",level:"Intermediate",codeExample:"int discount = 10; Function<Integer, Integer> f = price → price - discount; // discount is effectively final"}];function b(){return e.jsxs("div",{className:"space-y-12 px-4 md:px-8 py-8 text-slate-200 bg-slate-900 min-h-screen",children:[e.jsxs("header",{className:"space-y-4 border-b border-slate-800 pb-6",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"px-3 py-1 bg-sky-500/10 text-sky-400 border border-sky-500/20 text-xs font-semibold rounded-full uppercase tracking-wider",children:"Module 009_001 · Topic 8"}),e.jsx("span",{className:"px-3 py-1 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-xs font-semibold rounded-full",children:"Effectively Final"})]}),e.jsxs("h1",{className:"text-xl sm:text-2xl md:text-3xl font-bold text-white tracking-tight",children:["Variable Capture & Closures: The ",e.jsx("code",{className:"text-emerald-400 font-mono",children:"Effectively Final"})," Requirement"]}),e.jsx("p",{className:"text-base md:text-lg text-slate-400 leading-relaxed max-w-4xl",children:"Master functional closures: analyzing stack value capture, compiler immutability checks, and the effectively final rule for local method variables."})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsxs("h2",{className:"text-2xl font-bold text-emerald-400 flex items-center gap-2",children:[e.jsx("span",{children:"💻"})," Hands-On Java Demo Code"]}),e.jsx(a,{fileModule:r,title:"VariableCaptureEffectivelyFinalDemo.java",highlightLines:[7,10,15,16,18,19,20,21,22,25,26]})]}),e.jsx("section",{className:"space-y-4",children:e.jsx(n,{title:"Effectively Final FAQs",questions:o})}),e.jsx("section",{className:"space-y-4",children:e.jsx(t,{content:l,title:"Module 009_001 Topic 8: Effectively Final",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Printable Note",downloadFileName:"009_001_topic8_effectively_final_note.txt"})}),e.jsx(i,{note:"In Java 7, you had to type 'final int x = 10;' before passing it into an inner class. In Java 8, you can omit the word 'final', but Java still watches you: if you try to change 'x = 20;' later, your code won't compile! That is Effectively Final! — Sukanta Hui"})]})}export{b as default};
