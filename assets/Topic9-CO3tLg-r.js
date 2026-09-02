import{j as e}from"./vendor-react-core-Doz9nIC6.js";import{J as a}from"./JavaFileLoader-BfBG3xz_.js";import{F as t}from"./FAQTemplate-BHhlgA96.js";import{P as n}from"./PlainTextPrint-C08xhKA4.js";import{T as r}from"./TeacherSukantaHui-RpFLNJ5A.js";import"./JavaCodeBlock-BwsLxS3r.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-wprqVFW_.js";const s=`/**\r
 * Java Core Tutorial - Module 012_001: GoF Design Patterns\r
 * Topic 9: The Adapter Pattern - Interface Translation\r
 * Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
 */\r
\r
package com.coderaccotax.javatutorial.patterns;\r
\r
public class AdapterPatternDemo {\r
\r
    // 1. Target Interface (What our modern application expects):\r
    public interface PaymentGateway {\r
        void processPayment(String customerId, double amountInRupees);\r
    }\r
\r
    // 2. Adaptee (Legacy 3rd-party library with incompatible method & currency):\r
    public static class LegacyPayPalApi {\r
        public void makeUsdPayment(String email, double amountInUsd) {\r
            System.out.println("   [LEGACY PAYPAL]: Processed $" + amountInUsd + " for " + email);\r
        }\r
    }\r
\r
    // 3. Adapter Class (Translates Target -> Adaptee):\r
    public static class PayPalPaymentAdapter implements PaymentGateway {\r
        private final LegacyPayPalApi legacyApi;\r
        private static final double USD_EXCHANGE_RATE = 86.5;\r
\r
        public PayPalPaymentAdapter(LegacyPayPalApi api) {\r
            this.legacyApi = api;\r
        }\r
\r
        @Override\r
        public void processPayment(String customerEmail, double amountInRupees) {\r
            // Translate INR to USD and forward call to legacy API:\r
            double amountInUsd = amountInRupees / USD_EXCHANGE_RATE;\r
            System.out.printf("   [ADAPTER]: Converting ₹%.2f to $%.2f%n", amountInRupees, amountInUsd);\r
            legacyApi.makeUsdPayment(customerEmail, amountInUsd);\r
        }\r
    }\r
\r
    public static void main(String[] args) {\r
        System.out.println("==========================================================================");\r
        System.out.println(" TOPIC 9: ADAPTER DESIGN PATTERN - BARRACKPORE ACADEMY");\r
        System.out.println("==========================================================================\\n");\r
\r
        PaymentGateway gateway = new PayPalPaymentAdapter(new LegacyPayPalApi());\r
        gateway.processPayment("swadeep@coderaccotax.com", 4325.0);\r
\r
        System.out.println("\\n==========================================================================");\r
    }\r
}\r
`,o=`================================================================================\r
JAVA CORE TUTORIAL - QUICK REVISION GUIDE\r
Module 012_001: GoF Design Patterns\r
Topic 9: Adapter Pattern\r
Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
================================================================================\r
\r
1. INTENT:\r
   - Convert the interface of a class into another interface clients expect.\r
   - Lets classes work together that couldn't otherwise because of incompatible interfaces.\r
\r
2. PARTICIPANTS:\r
   - Target   : Domain interface client calls.\r
   - Adaptee  : Incompatible legacy/external class.\r
   - Adapter  : Implements Target and delegates to Adaptee.\r
\r
================================================================================\r
Classroom Practice: Barrackpore Academy | Mentor: Sukanta Hui\r
================================================================================\r
`,i=[{question:"What are the two common implementation styles of the Adapter pattern in Java?",shortAnswer:"1. Object Adapter (uses object composition to wrap the adaptee instance - Recommended), and 2. Class Adapter (uses multiple inheritance/interfaces to inherit from both target and adaptee).",explanation:"Object Adapter is favored for loose coupling.",hint:"Object Adapter (composition) vs Class Adapter (inheritance).",level:"Intermediate",codeExample:"public class MyAdapter implements Target { private Adaptee adaptee; }"},{question:"What is an example of the Adapter pattern in the Java Collections framework?",shortAnswer:"java.util.Arrays.asList() (adapts an array to a List interface) and java.io.InputStreamReader (adapts an InputStream byte stream to a Reader character stream).",explanation:"Classic JDK adapter implementations.",hint:"Arrays.asList() and InputStreamReader.",level:"Beginner",codeExample:"Reader reader = new InputStreamReader(inputStream);"}];function A(){return e.jsxs("div",{className:"space-y-12 px-4 md:px-8 py-8 text-slate-200 bg-slate-900 min-h-screen",children:[e.jsxs("header",{className:"space-y-4 border-b border-slate-800 pb-6",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"px-3 py-1 bg-sky-500/10 text-sky-400 border border-sky-500/20 text-xs font-semibold rounded-full uppercase tracking-wider",children:"Module 012_001 · Topic 9"}),e.jsx("span",{className:"px-3 py-1 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-xs font-semibold rounded-full",children:"GoF Design Patterns"})]}),e.jsxs("h1",{className:"text-xl sm:text-2xl md:text-3xl font-bold text-white tracking-tight",children:["The Adapter Pattern: ",e.jsx("code",{className:"text-emerald-400 font-mono",children:"Interface Translation"})]}),e.jsx("p",{className:"text-base md:text-lg text-slate-400 leading-relaxed max-w-4xl",children:"Connecting incompatible contracts: converting legacy 3rd-party APIs, external payment gateways, and data formats into clean domain interfaces."})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsxs("h2",{className:"text-2xl font-bold text-emerald-400 flex items-center gap-2",children:[e.jsx("span",{children:"💻"})," Hands-On Java Demo Code"]}),e.jsx(a,{fileModule:s,title:"AdapterPatternDemo.java",highlightLines:[18,25,34,43]})]}),e.jsx("section",{className:"space-y-4",children:e.jsx(t,{title:"GoF Design Patterns FAQs",questions:i})}),e.jsx("section",{className:"space-y-4",children:e.jsx(n,{content:o,title:"Module 012_001 Topic 9: Adapter Pattern",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Printable Note",downloadFileName:"012_001_topic9_adapter_pattern_note.txt"})}),e.jsx(r,{note:"The Adapter pattern is just like a travel power plug converter! If your Indian laptop plug cannot fit into an American wall socket, you use an adapter! In Java, an Adapter wraps an incompatible legacy class and presents the clean interface your modern code expects! — Sukanta Hui"})]})}export{A as default};
