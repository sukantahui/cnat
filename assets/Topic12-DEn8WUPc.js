import{j as e}from"./vendor-react-core-Doz9nIC6.js";import{J as t}from"./JavaFileLoader-BfBG3xz_.js";import{F as n}from"./FAQTemplate-BHhlgA96.js";import{P as a}from"./PlainTextPrint-C08xhKA4.js";import{T as r}from"./TeacherSukantaHui-DerPxfxp.js";import"./JavaCodeBlock-BwsLxS3r.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-CH1iX9C8.js";const i=`/**\r
 * Java Core Tutorial - Module 002_005: Inheritance, IS-A vs HAS-A, Composition & Aggregation\r
 * Topic 12: Why 'Favor Composition Over Inheritance' Is a Premier Principle\r
 * Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
 */\r
\r
package com.coderaccotax.javatutorial.inheritance;\r
\r
public class FavorCompositionOverInheritanceDemo {\r
\r
    // Service 1: Payment Gateway Strategy\r
    public interface PaymentStrategy {\r
        void pay(double amount);\r
    }\r
\r
    public static class UpiPayment implements PaymentStrategy {\r
        public void pay(double amount) {\r
            System.out.printf("  [UPI PAYMENT] Paid ₹%.2f via GPay/PhonePe to Barrackpore Hub.\\n", amount);\r
        }\r
    }\r
\r
    public static class NetBankingPayment implements PaymentStrategy {\r
        public void pay(double amount) {\r
            System.out.printf("  [NETBANKING] Paid ₹%.2f via HDFC/SBI Gateway.\\n", amount);\r
        }\r
    }\r
\r
    // Flexible Composed Class (Can swap payment strategy at runtime dynamically!)\r
    public static class StudentFeeCollector {\r
        private String studentName;\r
        private PaymentStrategy paymentStrategy; // HAS-A Composition!\r
\r
        public StudentFeeCollector(String studentName, PaymentStrategy initialStrategy) {\r
            this.studentName = studentName;\r
            this.paymentStrategy = initialStrategy;\r
        }\r
\r
        // Dynamic strategy swap at runtime! (Impossible with rigid compile-time inheritance)\r
        public void setPaymentStrategy(PaymentStrategy newStrategy) {\r
            this.paymentStrategy = newStrategy;\r
        }\r
\r
        public void collectFee(double amount) {\r
            System.out.println("  Processing fee for: " + studentName);\r
            this.paymentStrategy.pay(amount);\r
        }\r
    }\r
\r
    public static void main(String[] args) {\r
        System.out.println("==========================================================================");\r
        System.out.println(" TOPIC 12: FAVOR COMPOSITION OVER INHERITANCE - BARRACKPORE");\r
        System.out.println("==========================================================================\\n");\r
\r
        System.out.println(">>> 1. Swadeep paying via UPI initially:");\r
        StudentFeeCollector collector = new StudentFeeCollector("Swadeep Paul", new UpiPayment());\r
        collector.collectFee(5000.0);\r
\r
        System.out.println("\\n>>> 2. Swapping strategy dynamically to NetBanking (Zero subclass changes!):");\r
        collector.setPaymentStrategy(new NetBankingPayment());\r
        collector.collectFee(10000.0);\r
\r
        System.out.println("\\n==========================================================================");\r
    }\r
}`,o=`================================================================================\r
JAVA CORE TUTORIAL - QUICK REVISION GUIDE\r
Module 002_005: Inheritance, IS-A vs HAS-A, Composition & Aggregation\r
Topic 12: Favor Composition Over Inheritance\r
Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
================================================================================\r
\r
1. WHY FAVOR COMPOSITION:\r
   - Dynamic Runtime Polymorphism: Can swap internal strategies on the fly.\r
   - Encapsulation Protection: Superclass changes do not break child code.\r
   - Loose Coupling: Classes depend on interfaces, not rigid concrete hierarchies.\r
\r
================================================================================\r
Classroom Practice: Barrackpore Academy | Mentor: Sukanta Hui\r
================================================================================`,s=[{question:"Why is 'Favor Composition over Inheritance' (Effective Java Item 18 / GoF) a premier software engineering principle?",shortAnswer:"Composition provides loose coupling, allows dynamic runtime behavior swapping, prevents the Fragile Base Class problem, and avoids exposing unnecessary superclass methods.",explanation:"Inheritance is rigid and breaks encapsulation (subclasses depend on superclass implementation details). Composition wraps behaviors flexibly.",hint:"Enables loose coupling, runtime strategy swapping, and avoids fragile base class issues.",level:"Advanced",codeExample:"// Flexible Strategy Pattern using Composition"}];function h(){return e.jsxs("div",{className:"space-y-12 px-4 md:px-8 py-8 text-slate-200 bg-slate-900 min-h-screen",children:[e.jsx("style",{children:`
          @keyframes fadeIn {
            from { opacity: 0; transform: translateY(8px); }
            to { opacity: 1; transform: translateY(0); }
          }
          .animate-fade-in { animation: fadeIn 0.5s ease-out forwards; }
        `}),e.jsxs("header",{className:"space-y-4 border-b border-slate-800 pb-6 animate-fade-in",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"px-3 py-1 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-xs font-semibold rounded-full uppercase tracking-wider",children:"Module 002_005 · Topic 12"}),e.jsx("span",{className:"px-3 py-1 bg-sky-500/10 text-sky-400 border border-sky-500/20 text-xs font-semibold rounded-full",children:"Architecture Principle"})]}),e.jsx("h1",{className:"text-xl sm:text-2xl md:text-3xl font-bold text-white tracking-tight",children:'Why "Favor Composition over Inheritance" is a Premier Design Principle'}),e.jsx("p",{className:"text-base md:text-lg text-slate-400 leading-relaxed max-w-4xl",children:"Learn why Gang of Four and Joshua Bloch advocate Composition over rigid class inheritance: loose coupling, runtime strategy swapping, and encapsulation safety."})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsxs("h2",{className:"text-2xl font-bold text-emerald-400 flex items-center gap-2",children:[e.jsx("span",{children:"💻"})," Hands-On Java Demo Code"]}),e.jsx(t,{fileModule:i,title:"FavorCompositionOverInheritanceDemo.java",highlightLines:[25,27,34,46,50]})]}),e.jsx("section",{className:"space-y-4",children:e.jsx(n,{title:"Favor Composition FAQs",questions:s})}),e.jsx("section",{className:"space-y-4",children:e.jsx(a,{content:o,title:"Module 002_005 Topic 12: Favor Composition Over Inheritance",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Printable Note",downloadFileName:"002_005_topic12_favor_composition_note.txt"})}),e.jsx(r,{note:"Inheritance locks you in at compile time. Composition gives you superpower flexibility at runtime by allowing you to swap strategies like changing batteries! — Sukanta Hui"})]})}export{h as default};
