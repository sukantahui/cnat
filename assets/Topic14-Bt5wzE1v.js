import{j as e}from"./vendor-react-core-Doz9nIC6.js";import{J as a}from"./JavaFileLoader-BfBG3xz_.js";import{F as t}from"./FAQTemplate-BHhlgA96.js";import{P as n}from"./PlainTextPrint-C08xhKA4.js";import{T as r}from"./TeacherSukantaHui-BaJcBHAy.js";import"./JavaCodeBlock-BwsLxS3r.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-8ao-0upJ.js";const i=`/**\r
 * Java Core Tutorial - Module 002_006: Polymorphism, Method Overriding & Dynamic Method Dispatch\r
 * Topic 14: Real-World Polymorphism: PaymentGateway Hierarchy (CreditCard, UPI, NetBanking)\r
 * Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
 */\r
\r
package com.coderaccotax.javatutorial.polymorphism;\r
\r
public class RealWorldPaymentGatewayPolymorphismDemo {\r
\r
    public interface PaymentGateway {\r
        void processPayment(String traineeName, double amount);\r
    }\r
\r
    public static class UpiPaymentGateway implements PaymentGateway {\r
        @Override\r
        public void processPayment(String traineeName, double amount) {\r
            System.out.printf("  [UPI GATEWAY] Processing ₹%.2f instant transfer for %s via VPA: %s@okaxis\\n",\r
                    amount, traineeName, traineeName.toLowerCase().replace(" ", ""));\r
        }\r
    }\r
\r
    public static class CreditCardGateway implements PaymentGateway {\r
        @Override\r
        public void processPayment(String traineeName, double amount) {\r
            double surcharge = amount * 0.015;\r
            System.out.printf("  [CARD GATEWAY] Processing ₹%.2f (Card fee: ₹%.2f) for %s via Visa/MasterCard 3D-Secure\\n",\r
                    amount, surcharge, traineeName);\r
        }\r
    }\r
\r
    public static class NetBankingGateway implements PaymentGateway {\r
        @Override\r
        public void processPayment(String traineeName, double amount) {\r
            System.out.printf("  [NETBANKING] Redirecting %s to HDFC / SBI Corporate Portal for ₹%.2f\\n",\r
                    traineeName, amount);\r
        }\r
    }\r
\r
    // Client Checkout Service (Completely agnostic of concrete gateway!)\r
    public static void executeAdmissionCheckout(PaymentGateway gateway, String trainee, double fee) {\r
        gateway.processPayment(trainee, fee); // Polymorphic dispatch!\r
    }\r
\r
    public static void main(String[] args) {\r
        System.out.println("==========================================================================");\r
        System.out.println(" TOPIC 14: REAL-WORLD PAYMENT GATEWAY POLYMORPHISM - BARRACKPORE");\r
        System.out.println("==========================================================================\\n");\r
\r
        System.out.println(">>> 1. Swadeep Paul paying admission fee via UPI:");\r
        executeAdmissionCheckout(new UpiPaymentGateway(), "Swadeep Paul", 8000.0);\r
\r
        System.out.println("\\n>>> 2. Tuhina Das paying admission fee via Credit Card:");\r
        executeAdmissionCheckout(new CreditCardGateway(), "Tuhina Das", 12000.0);\r
\r
        System.out.println("\\n>>> 3. Debangshu Mukherjee paying admission fee via NetBanking:");\r
        executeAdmissionCheckout(new NetBankingGateway(), "Debangshu Mukherjee", 15000.0);\r
\r
        System.out.println("\\n==========================================================================");\r
    }\r
}`,o=`================================================================================\r
JAVA CORE TUTORIAL - QUICK REVISION GUIDE\r
Module 002_006: Polymorphism, Overriding & Dynamic Method Dispatch\r
Topic 14: Real-World Payment Gateway Polymorphism\r
Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
================================================================================\r
\r
1. PAYMENT GATEWAY POLYMORPHISM:\r
   - High-level Checkout service depends ONLY on 'PaymentGateway' interface.\r
   - Low-level concrete gateways (UPI, Card, NetBanking) implement 'processPayment()'.\r
   - True Open/Closed Principle compliance.\r
\r
================================================================================\r
Classroom Practice: Barrackpore Academy | Mentor: Sukanta Hui\r
================================================================================`,s=[{question:"How does Polymorphism enable extensible payment gateway architectures in enterprise banking systems?",shortAnswer:"The checkout service writes to an abstract 'PaymentGateway' contract. Adding new payment methods (e.g. Crypto, EMI) requires creating a new subclass without modifying a single line of existing checkout logic (Open/Closed Principle).",explanation:"Polymorphism cleanly isolates checkout orchestration from specific provider APIs.",hint:"Enables Open/Closed principle by allowing new gateways without altering checkout code.",level:"Intermediate",codeExample:"void checkout(PaymentGateway g) { g.pay(amount); }"}];function g(){return e.jsxs("div",{className:"space-y-12 px-4 md:px-8 py-8 text-slate-200 bg-slate-900 min-h-screen",children:[e.jsx("style",{children:`
          @keyframes fadeIn {
            from { opacity: 0; transform: translateY(8px); }
            to { opacity: 1; transform: translateY(0); }
          }
          .animate-fade-in { animation: fadeIn 0.5s ease-out forwards; }
        `}),e.jsxs("header",{className:"space-y-4 border-b border-slate-800 pb-6 animate-fade-in",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"px-3 py-1 bg-sky-500/10 text-sky-400 border border-sky-500/20 text-xs font-semibold rounded-full uppercase tracking-wider",children:"Module 002_006 · Topic 14"}),e.jsx("span",{className:"px-3 py-1 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-xs font-semibold rounded-full",children:"Enterprise Architecture"})]}),e.jsx("h1",{className:"text-xl sm:text-2xl md:text-3xl font-bold text-white tracking-tight",children:"Real-World Polymorphism: PaymentGateway Implementations (UPI, Card, NetBanking)"}),e.jsx("p",{className:"text-base md:text-lg text-slate-400 leading-relaxed max-w-4xl",children:"Build a production-grade checkout engine using Polymorphism. See how interface abstractions cleanly support UPI, Credit Card, and NetBanking providers."})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsxs("h2",{className:"text-2xl font-bold text-emerald-400 flex items-center gap-2",children:[e.jsx("span",{children:"💻"})," Hands-On Java Demo Code"]}),e.jsx(a,{fileModule:i,title:"RealWorldPaymentGatewayPolymorphismDemo.java",highlightLines:[10,14,21,30,37,44]})]}),e.jsx("section",{className:"space-y-4",children:e.jsx(t,{title:"Payment Gateway Polymorphism FAQs",questions:s})}),e.jsx("section",{className:"space-y-4",children:e.jsx(n,{content:o,title:"Module 002_006 Topic 14: Payment Gateway Polymorphism",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Printable Note",downloadFileName:"002_006_topic14_payment_poly_note.txt"})}),e.jsx(r,{note:"If tomorrow Barrackpore Academy adds Apple Pay or Bitcoin, you write one new class and zero lines in the checkout engine change! That is the power of polymorphism. — Sukanta Hui"})]})}export{g as default};
