import{j as e}from"./vendor-react-core-Doz9nIC6.js";import{J as t}from"./JavaFileLoader-BfBG3xz_.js";import{F as r}from"./FAQTemplate-BHhlgA96.js";import{P as a}from"./PlainTextPrint-C08xhKA4.js";import{T as n}from"./TeacherSukantaHui-DerPxfxp.js";import"./JavaCodeBlock-BwsLxS3r.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-CH1iX9C8.js";const o=`/**\r
 * Java Core Tutorial - Module 002_006: Polymorphism, Method Overriding & Dynamic Method Dispatch\r
 * Topic 1: Compile-Time Polymorphism (Static Binding / Early Binding): Method Overloading\r
 * Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
 */\r
\r
package com.coderaccotax.javatutorial.polymorphism;\r
\r
public class CompileTimeOverloadingDemo {\r
\r
    public static class FeeCalculator {\r
        // Overloaded Method 1: Base course fee\r
        public double calculateFee(double baseFee) {\r
            return baseFee;\r
        }\r
\r
        // Overloaded Method 2: Base fee with percentage scholarship\r
        public double calculateFee(double baseFee, double scholarshipPercent) {\r
            return baseFee - (baseFee * (scholarshipPercent / 100.0));\r
        }\r
\r
        // Overloaded Method 3: Base fee with scholarship and special hub discount\r
        public double calculateFee(double baseFee, double scholarshipPercent, double hubDiscountFlat) {\r
            double discounted = baseFee - (baseFee * (scholarshipPercent / 100.0));\r
            return discounted - hubDiscountFlat;\r
        }\r
    }\r
\r
    public static void main(String[] args) {\r
        System.out.println("==========================================================================");\r
        System.out.println(" TOPIC 1: COMPILE-TIME POLYMORPHISM (OVERLOADING) - BARRACKPORE");\r
        System.out.println("==========================================================================\\n");\r
\r
        FeeCalculator calc = new FeeCalculator();\r
\r
        // 1. Resolved at COMPILE TIME via argument types:\r
        System.out.println("  1-Arg Call: ₹" + calc.calculateFee(12000.0));\r
        System.out.println("  2-Arg Call: ₹" + calc.calculateFee(12000.0, 25.0));\r
        System.out.println("  3-Arg Call: ₹" + calc.calculateFee(12000.0, 25.0, 1500.0));\r
\r
        System.out.println("\\n>>> Why it is called Compile-Time / Early Binding:");\r
        System.out.println("  - Javac determines the EXACT method descriptor to invoke during compilation.");\r
        System.out.println("  - Zero runtime lookup overhead!");\r
\r
        System.out.println("\\n==========================================================================");\r
    }\r
}`,i=`================================================================================\r
JAVA CORE TUTORIAL - QUICK REVISION GUIDE\r
Module 002_006: Polymorphism, Overriding & Dynamic Method Dispatch\r
Topic 1: Compile-Time Polymorphism (Method Overloading)\r
Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
================================================================================\r
\r
1. METHOD OVERLOADING MECHANICS:\r
   - Same method name in the same class.\r
   - Different parameter list (type, count, or order).\r
   - Return type alone CANNOT overload a method.\r
   - Bound at compile time (Static / Early Binding).\r
\r
================================================================================\r
Classroom Practice: Barrackpore Academy | Mentor: Sukanta Hui\r
================================================================================`,l=[{question:"Why is Method Overloading classified as Compile-Time Polymorphism (Static Binding)?",shortAnswer:"Because the compiler examines the arguments at compile time and binds the call directly to a specific method descriptor in the bytecode, requiring zero runtime dispatch lookup.",explanation:"Static binding means the method target is fixed before the program runs.",hint:"Target method is resolved by the compiler during code compilation.",level:"Beginner",codeExample:"// Bytecode: invokevirtual calculateFee:(DD)D"}];function b(){return e.jsxs("div",{className:"space-y-12 px-4 md:px-8 py-8 text-slate-200 bg-slate-900 min-h-screen",children:[e.jsx("style",{children:`
          @keyframes fadeIn {
            from { opacity: 0; transform: translateY(8px); }
            to { opacity: 1; transform: translateY(0); }
          }
          .animate-fade-in { animation: fadeIn 0.5s ease-out forwards; }
        `}),e.jsxs("header",{className:"space-y-4 border-b border-slate-800 pb-6 animate-fade-in",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"px-3 py-1 bg-sky-500/10 text-sky-400 border border-sky-500/20 text-xs font-semibold rounded-full uppercase tracking-wider",children:"Module 002_006 · Topic 1"}),e.jsx("span",{className:"px-3 py-1 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-xs font-semibold rounded-full",children:"Static Binding"})]}),e.jsx("h1",{className:"text-xl sm:text-2xl md:text-3xl font-bold text-white tracking-tight",children:"Compile-Time Polymorphism (Static / Early Binding): Method Overloading"}),e.jsx("p",{className:"text-base md:text-lg text-slate-400 leading-relaxed max-w-4xl",children:"Understand how javac binds overloaded method calls at compile time, matching method descriptors against argument types with zero runtime overhead."})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsxs("h2",{className:"text-2xl font-bold text-emerald-400 flex items-center gap-2",children:[e.jsx("span",{children:"💻"})," Hands-On Java Demo Code"]}),e.jsx(t,{fileModule:o,title:"CompileTimeOverloadingDemo.java",highlightLines:[12,17,22,34,35,36]})]}),e.jsx("section",{className:"space-y-4",children:e.jsx(r,{title:"Compile-Time Overloading FAQs",questions:l})}),e.jsx("section",{className:"space-y-4",children:e.jsx(a,{content:i,title:"Module 002_006 Topic 1: Compile-Time Overloading",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Printable Note",downloadFileName:"002_006_topic1_overloading_note.txt"})}),e.jsx(n,{note:"With overloading, the compiler knows the exact method to call before your code even runs. It matches parameter types at compile time! — Sukanta Hui"})]})}export{b as default};
