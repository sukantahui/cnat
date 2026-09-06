import{j as e}from"./vendor-react-core-Doz9nIC6.js";import{J as t}from"./JavaFileLoader-BfBG3xz_.js";import{F as n}from"./FAQTemplate-BHhlgA96.js";import{P as s}from"./PlainTextPrint-C08xhKA4.js";import{T as a}from"./TeacherSukantaHui-DDN87fI5.js";import"./JavaCodeBlock-BwsLxS3r.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-DEsnU7fn.js";const i=`/**\r
 * Java Core Tutorial - Module 002_011: SOLID Object-Oriented Design Principles in Java\r
 * Topic 3: O - Open/Closed Principle (OCP): 'Open for Extension, Closed for Modification'\r
 * Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
 */\r
\r
package com.coderaccotax.javatutorial.solid;\r
\r
public class OpenClosedPrincipleDemo {\r
\r
    // ANTI-PATTERN: Every time a new discount is introduced, we must MODIFY this existing class!\r
    // public double calculateDiscount(String type, double amount) {\r
    //     if (type.equals("STUDENT")) return amount * 0.20;\r
    //     else if (type.equals("EARLY_BIRD")) return amount * 0.10;\r
    //     // Modifying existing tested production code violates OCP!\r
    // }\r
\r
    // OCP COMPLIANT: 1. Stable Abstraction (Closed for Modification)\r
    public interface DiscountStrategy {\r
        double applyDiscount(double baseFee);\r
    }\r
\r
    // 2. Extensions (Open for Extension)\r
    public static class StudentDiscount implements DiscountStrategy {\r
        public double applyDiscount(double baseFee) { return baseFee * 0.80; } // 20% off\r
    }\r
\r
    public static class EarlyBirdDiscount implements DiscountStrategy {\r
        public double applyDiscount(double baseFee) { return baseFee * 0.90; } // 10% off\r
    }\r
\r
    // Adding NEW Corporate Discount requires ZERO modifications to existing code!\r
    public static class CorporateDiscount implements DiscountStrategy {\r
        public double applyDiscount(double baseFee) { return baseFee * 0.70; } // 30% off\r
    }\r
\r
    public static class AcademyFeeCalculator {\r
        public double calculateFinalFee(double baseFee, DiscountStrategy strategy) {\r
            return strategy.applyDiscount(baseFee); // Polymorphic dispatch!\r
        }\r
    }\r
\r
    public static void main(String[] args) {\r
        System.out.println("==========================================================================");\r
        System.out.println(" TOPIC 3: OPEN / CLOSED PRINCIPLE (OCP) - BARRACKPORE");\r
        System.out.println("==========================================================================\\n");\r
\r
        AcademyFeeCalculator calculator = new AcademyFeeCalculator();\r
        double baseFee = 20000.0;\r
\r
        System.out.println("  Student Fee   : ₹" + calculator.calculateFinalFee(baseFee, new StudentDiscount()));\r
        System.out.println("  Corporate Fee : ₹" + calculator.calculateFinalFee(baseFee, new CorporateDiscount()));\r
\r
        System.out.println("\\n>>> OCP Rule: You should be able to add new behavior without editing existing tested classes.");\r
\r
        System.out.println("\\n==========================================================================");\r
    }\r
}`,r=`================================================================================\r
JAVA CORE TUTORIAL - QUICK REVISION GUIDE\r
Module 002_011: SOLID Design Principles\r
Topic 3: Open/Closed Principle (OCP)\r
Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
================================================================================\r
\r
1. OCP RULE (Bertrand Meyer & Uncle Bob):\r
   - 'Open for extension, closed for modification.'\r
   - Replace brittle 'if-else' / 'switch' chains with polymorphic interface strategies.\r
   - New features = New classes added to classpath without editing existing code.\r
\r
================================================================================\r
Classroom Practice: Barrackpore Academy | Mentor: Sukanta Hui\r
================================================================================`,o=[{question:"What does the Open/Closed Principle (OCP) state and how is it achieved in Java?",shortAnswer:"OCP states: 'Software entities should be open for extension, but closed for modification.' It is achieved using polymorphism, abstract classes, and interfaces—enabling new behaviors by adding new classes rather than editing existing tested code.",explanation:"Prevents breaking existing, working production code when new features are added.",hint:"Open for extension (new classes/plugins), closed for modification (don't edit tested classes).",level:"Beginner",codeExample:"interface Strategy { void execute(); } // New classes implement Strategy"}];function f(){return e.jsxs("div",{className:"space-y-12 px-4 md:px-8 py-8 text-slate-200 bg-slate-900 min-h-screen",children:[e.jsx("style",{children:`
          @keyframes fadeIn {
            from { opacity: 0; transform: translateY(8px); }
            to { opacity: 1; transform: translateY(0); }
          }
          .animate-fade-in { animation: fadeIn 0.5s ease-out forwards; }
        `}),e.jsxs("header",{className:"space-y-4 border-b border-slate-800 pb-6 animate-fade-in",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"px-3 py-1 bg-sky-500/10 text-sky-400 border border-sky-500/20 text-xs font-semibold rounded-full uppercase tracking-wider",children:"Module 002_011 · Topic 3"}),e.jsx("span",{className:"px-3 py-1 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-xs font-semibold rounded-full",children:"SOLID: O"})]}),e.jsxs("h1",{className:"text-xl sm:text-2xl md:text-3xl font-bold text-white tracking-tight",children:["O — Open/Closed Principle (OCP): ",e.jsx("span",{className:"text-emerald-400",children:'"Open for Extension, Closed for Modification"'})]}),e.jsxs("p",{className:"text-base md:text-lg text-slate-400 leading-relaxed max-w-4xl",children:["Learn how polymorphic strategies and interfaces eliminate fragile ",e.jsx("code",{className:"text-amber-400 font-mono",children:"if-else"})," ladders: adding new business features without altering a single line of existing tested code."]})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsxs("h2",{className:"text-2xl font-bold text-emerald-400 flex items-center gap-2",children:[e.jsx("span",{children:"💻"})," Hands-On Java Demo Code"]}),e.jsx(t,{fileModule:i,title:"OpenClosedPrincipleDemo.java",highlightLines:[18,23,27,32,36,38]})]}),e.jsx("section",{className:"space-y-4",children:e.jsx(n,{title:"OCP FAQs",questions:o})}),e.jsx("section",{className:"space-y-4",children:e.jsx(s,{content:r,title:"Module 002_011 Topic 3: Open/Closed Principle",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Printable Note",downloadFileName:"002_011_topic3_ocp_note.txt"})}),e.jsx(a,{note:"If your boss asks for a new 'Festive Discount' and you have to modify 5 existing classes, your code violates OCP! Use an interface so you can just add a new FestiveDiscount class without touching existing code. — Sukanta Hui"})]})}export{f as default};
