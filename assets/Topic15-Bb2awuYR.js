import{j as e}from"./vendor-react-core-Doz9nIC6.js";import{J as a}from"./JavaFileLoader-BfBG3xz_.js";import{F as t}from"./FAQTemplate-CkSqDH4B.js";import{P as n}from"./PlainTextPrint-C08xhKA4.js";import{T as r}from"./TeacherSukantaHui-CyIG3xbg.js";import"./JavaCodeBlock-BwsLxS3r.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-CIaKtAt4.js";const i=`/**\r
 * Java Core Tutorial - Module 002_008: Interfaces, Default/Static Methods & Multiple Inheritance\r
 * Topic 15: Real-World Architecture: PaymentService Depending on PaymentGateway Interface\r
 * Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
 */\r
\r
package com.coderaccotax.javatutorial.interfaces;\r
\r
public class RealWorldPaymentServiceArchitectureDemo {\r
\r
    public interface PaymentGateway {\r
        boolean processTransaction(String traineeName, double amount);\r
        String getProviderName();\r
    }\r
\r
    public static class RazorpayGateway implements PaymentGateway {\r
        public boolean processTransaction(String trainee, double amount) {\r
            System.out.printf("  [RAZORPAY] Charging ₹%.2f to %s via UPI/QR Gateway.\\n", amount, trainee);\r
            return true;\r
        }\r
        public String getProviderName() { return "Razorpay India"; }\r
    }\r
\r
    public static class StripeGlobalGateway implements PaymentGateway {\r
        public boolean processTransaction(String trainee, double amount) {\r
            System.out.printf("  [STRIPE] Charging $%.2f equivalent to %s via International Card.\\n", (amount / 86.0), trainee);\r
            return true;\r
        }\r
        public String getProviderName() { return "Stripe Global"; }\r
    }\r
\r
    public static class AcademyFeeManagementService {\r
        private PaymentGateway gateway;\r
\r
        public AcademyFeeManagementService(PaymentGateway gateway) {\r
            this.gateway = gateway;\r
        }\r
\r
        public void collectFee(String trainee, double amount) {\r
            System.out.println("  Initiating fee payment using: " + gateway.getProviderName());\r
            boolean success = gateway.processTransaction(trainee, amount);\r
            if (success) {\r
                System.out.println("  [FEE AUDIT] Payment receipt registered in Barrackpore Accounts Ledger.\r
");\r
            }\r
        }\r
    }\r
\r
    public static void main(String[] args) {\r
        System.out.println("==========================================================================");\r
        System.out.println(" TOPIC 15: REAL-WORLD PAYMENT GATEWAY ARCHITECTURE - BARRACKPORE");\r
        System.out.println("==========================================================================\\n");\r
\r
        AcademyFeeManagementService domesticFee = new AcademyFeeManagementService(new RazorpayGateway());\r
        domesticFee.collectFee("Swadeep Paul", 15000.0);\r
\r
        AcademyFeeManagementService internationalFee = new AcademyFeeManagementService(new StripeGlobalGateway());\r
        internationalFee.collectFee("Abhronila Das", 25000.0);\r
\r
        System.out.println("==========================================================================");\r
    }\r
}`,o=`================================================================================\r
JAVA CORE TUTORIAL - QUICK REVISION GUIDE\r
Module 002_008: Interfaces, Default/Static Methods & Multiple Inheritance\r
Topic 15: Real-World PaymentGateway Architecture\r
Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
================================================================================\r
\r
1. ENTERPRISE PAYMENT ARCHITECTURE:\r
   - Interface: 'PaymentGateway' contract (processTransaction, getProviderName).\r
   - Implementations: 'RazorpayGateway', 'StripeGlobalGateway', 'PaytmGateway'.\r
   - Service: 'AcademyFeeManagementService' (Depends only on Interface).\r
\r
================================================================================\r
Classroom Practice: Barrackpore Academy | Mentor: Sukanta Hui\r
================================================================================`,c=[{question:"How does the PaymentGateway interface enable modular enterprise banking architectures?",shortAnswer:"The core fee service is completely agnostic of banking SDKs (Razorpay, Stripe, Paytm). Any provider can be plugged in or swapped via configuration without touching accounting or checkout logic.",explanation:"Demonstrates true inversion of control and clean software boundaries.",hint:"Decouples checkout business logic from concrete payment provider SDKs.",level:"Intermediate",codeExample:"// PaymentService depends only on PaymentGateway interface"}];function h(){return e.jsxs("div",{className:"space-y-12 px-4 md:px-8 py-8 text-slate-200 bg-slate-900 min-h-screen",children:[e.jsx("style",{children:`
          @keyframes fadeIn {
            from { opacity: 0; transform: translateY(8px); }
            to { opacity: 1; transform: translateY(0); }
          }
          .animate-fade-in { animation: fadeIn 0.5s ease-out forwards; }
        `}),e.jsxs("header",{className:"space-y-4 border-b border-slate-800 pb-6 animate-fade-in",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"px-3 py-1 bg-sky-500/10 text-sky-400 border border-sky-500/20 text-xs font-semibold rounded-full uppercase tracking-wider",children:"Module 002_008 · Topic 15"}),e.jsx("span",{className:"px-3 py-1 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-xs font-semibold rounded-full",children:"Financial Architecture"})]}),e.jsxs("h1",{className:"text-3xl md:text-4xl font-extrabold text-white tracking-tight",children:["Real-World Architecture: ",e.jsx("code",{className:"text-emerald-400 font-mono",children:"PaymentService"})," & ",e.jsx("code",{className:"text-emerald-400 font-mono",children:"PaymentGateway"})]}),e.jsx("p",{className:"text-base md:text-lg text-slate-400 leading-relaxed max-w-4xl",children:"Build a real-world enterprise payment orchestration layer: decoupling financial checkout workflows from third-party vendor SDKs."})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsxs("h2",{className:"text-2xl font-bold text-emerald-400 flex items-center gap-2",children:[e.jsx("span",{children:"💻"})," Hands-On Java Demo Code"]}),e.jsx(a,{fileModule:i,title:"RealWorldPaymentServiceArchitectureDemo.java",highlightLines:[10,15,23,31,48,51]})]}),e.jsx("section",{className:"space-y-4",children:e.jsx(t,{title:"Payment Architecture FAQs",questions:c})}),e.jsx("section",{className:"space-y-4",children:e.jsx(n,{content:o,title:"Module 002_008 Topic 15: Payment Service Architecture",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Printable Note",downloadFileName:"002_008_topic15_payment_arch_note.txt"})}),e.jsx(r,{note:"In production systems, you never hardcode a payment vendor inside your checkout class. You write to the PaymentGateway interface so switching from Razorpay to Stripe is a 1-line configuration change! — Sukanta Hui"})]})}export{h as default};
