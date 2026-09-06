import{j as e}from"./vendor-react-core-Doz9nIC6.js";import{J as n}from"./JavaFileLoader-BfBG3xz_.js";import{F as a}from"./FAQTemplate-BHhlgA96.js";import{P as t}from"./PlainTextPrint-C08xhKA4.js";import{T as i}from"./TeacherSukantaHui-DDN87fI5.js";import"./JavaCodeBlock-BwsLxS3r.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-DEsnU7fn.js";const r=`/**\r
 * Java Core Tutorial - Module 003_007: Nested & Inner Classes\r
 * Topic 11: Effectively Final Rule (Java 8+): Variable Capture in Inner & Anonymous Closures\r
 * Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
 */\r
\r
package com.coderaccotax.javatutorial.nested;\r
\r
interface DiscountPolicy {\r
    double applyDiscount(double price);\r
}\r
\r
public class EffectivelyFinalClosureDemo {\r
\r
    public static void main(String[] args) {\r
        System.out.println("==========================================================================");\r
        System.out.println(" TOPIC 11: EFFECTIVELY FINAL VARIABLE CAPTURE - BARRACKPORE");\r
        System.out.println("==========================================================================\\n");\r
\r
        // 1. In Java 7: local variables captured by inner classes HAD to be explicitly declared 'final':\r
        final double flatDiscount = 500.0;\r
\r
        // 2. In Java 8+: 'final' keyword is optional if the variable is EFFECTIVELY FINAL (never reassigned):\r
        double festivalBonusDiscount = 250.0; // Effectively final!\r
\r
        DiscountPolicy diwaliPolicy = new DiscountPolicy() {\r
            @Override\r
            public double applyDiscount(double price) {\r
                // Capturing flatDiscount and festivalBonusDiscount into closure:\r
                return price - flatDiscount - festivalBonusDiscount;\r
            }\r
        };\r
\r
        // IF WE REASSIGN festivalBonusDiscount LATER:\r
        // festivalBonusDiscount = 300.0;\r
        // COMPILE ERROR: "Local variable referenced from an inner class must be final or effectively final"!\r
\r
        double originalFee = 5000.0;\r
        double discountedFee = diwaliPolicy.applyDiscount(originalFee);\r
\r
        System.out.println(">>> 1. Fee Calculation with Captured Closure Variables:");\r
        System.out.println("  Original Admission Fee: " + originalFee + " INR");\r
        System.out.println("  Flat Discount (final) : " + flatDiscount + " INR");\r
        System.out.println("  Festival (Eff. Final) : " + festivalBonusDiscount + " INR");\r
        System.out.println("  Final Payable Fee     : " + discountedFee + " INR");\r
\r
        System.out.println("\\n>>> WHY THE RULE EXISTS:");\r
        System.out.println("  When an inner class captures a local variable, it makes a PRIVATE COPY on the heap.");\r
        System.out.println("  If the variable were mutable, the copy and the stack variable would fall out of sync!");\r
\r
        System.out.println("\\n==========================================================================");\r
    }\r
}`,s=`================================================================================\r
JAVA CORE TUTORIAL - QUICK REVISION GUIDE\r
Module 003_007: Nested & Inner Classes\r
Topic 11: Effectively Final Rule\r
Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
================================================================================\r
\r
1. EFFECTIVELY FINAL RULES:\r
   - Initialized once and never reassigned.\r
   - 'final' keyword is optional since Java 8.\r
   - Inner classes capture a heap-allocated copy.\r
   - Mutating the variable causes a compile-time error.\r
\r
================================================================================\r
Classroom Practice: Barrackpore Academy | Mentor: Sukanta Hui\r
================================================================================`,l=[{question:"What is an 'Effectively Final' variable in Java (introduced in Java 8) and why must captured variables be effectively final?",shortAnswer:"A variable is 'effectively final' if its value is never modified after initialization, even if the 'final' keyword is omitted. Captured variables must be effectively final because the JVM creates a copy of the primitive/reference inside the inner class on the heap; allowing mutations would create synchronization discrepancies between stack frames and the heap.",explanation:"Applies equally to Anonymous Inner Classes, Method-Local classes, and Java 8 Lambdas.",hint:"A variable that is never reassigned; copies are passed to the inner class on heap.",level:"Intermediate",codeExample:"int x = 10; Runnable r = () → System.out.println(x); // x is effectively final"}];function b(){return e.jsxs("div",{className:"space-y-12 px-4 md:px-8 py-8 text-slate-200 bg-slate-900 min-h-screen",children:[e.jsxs("header",{className:"space-y-4 border-b border-slate-800 pb-6",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"px-3 py-1 bg-sky-500/10 text-sky-400 border border-sky-500/20 text-xs font-semibold rounded-full uppercase tracking-wider",children:"Module 003_007 · Topic 11"}),e.jsx("span",{className:"px-3 py-1 bg-amber-500/10 text-amber-400 border border-amber-500/20 text-xs font-semibold rounded-full",children:"Closure Mechanics"})]}),e.jsxs("h1",{className:"text-xl sm:text-2xl md:text-3xl font-bold text-white tracking-tight",children:[e.jsx("code",{className:"text-amber-400 font-mono",children:"Effectively Final"})," Variable Rule (Java 8+) for Inner Class Closures"]}),e.jsxs("p",{className:"text-base md:text-lg text-slate-400 leading-relaxed max-w-4xl",children:["Understand closure variable capture in the JVM: tracing why local variables must never be reassigned after capture and how Java 8 eliminated mandatory ",e.jsx("code",{className:"text-emerald-300 font-mono",children:"final"})," keyword boilerplate."]})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsxs("h2",{className:"text-2xl font-bold text-emerald-400 flex items-center gap-2",children:[e.jsx("span",{children:"💻"})," Hands-On Java Demo Code"]}),e.jsx(n,{fileModule:r,title:"EffectivelyFinalClosureDemo.java",highlightLines:[7,18,21,23,24,25,26,27,30,31]})]}),e.jsx("section",{className:"space-y-4",children:e.jsx(a,{title:"Effectively Final FAQs",questions:l})}),e.jsx("section",{className:"space-y-4",children:e.jsx(t,{content:s,title:"Module 003_007 Topic 11: Effectively Final Rule",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Printable Note",downloadFileName:"003_007_topic11_effectively_final_note.txt"})}),e.jsx(i,{note:"If a method finishes execution, its stack frame is destroyed! But the inner class may live on in another thread. That is why Java copies the effectively final variable into the inner class heap object! — Sukanta Hui"})]})}export{b as default};
