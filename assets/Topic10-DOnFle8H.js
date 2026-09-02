import{j as e}from"./vendor-react-core-Doz9nIC6.js";import{J as n}from"./JavaFileLoader-BfBG3xz_.js";import{F as t}from"./FAQTemplate-BHhlgA96.js";import{P as r}from"./PlainTextPrint-C08xhKA4.js";import{T as o}from"./TeacherSukantaHui-RpFLNJ5A.js";import"./JavaCodeBlock-BwsLxS3r.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-wprqVFW_.js";const s=`/**\r
 * Java Core Tutorial - Module 002_011: SOLID Object-Oriented Design Principles in Java\r
 * Topic 10: Implementing DIP in Pure Java Using Constructor Dependency Injection\r
 * Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
 */\r
\r
package com.coderaccotax.javatutorial.solid;\r
\r
public class ConstructorDependencyInjectionDemo {\r
\r
    // 1. Dependency Contract\r
    public interface PaymentProcessor {\r
        boolean charge(String trainee, double amount);\r
    }\r
\r
    // 2. Production Implementation\r
    public static class ProductionRazorpayProcessor implements PaymentProcessor {\r
        public boolean charge(String trainee, double amount) {\r
            System.out.printf("  [LIVE GATEWAY] Charged ₹%.2f to %s via Razorpay Gateway.\\n", amount, trainee);\r
            return true;\r
        }\r
    }\r
\r
    // 3. Mock Test Implementation (For Instant Unit Testing with Zero Network Calls!)\r
    public static class MockTestPaymentProcessor implements PaymentProcessor {\r
        public boolean charge(String trainee, double amount) {\r
            System.out.printf("  [MOCK TEST] Simulated ₹%.2f charge for %s (Success: True)\\n", amount, trainee);\r
            return true;\r
        }\r
    }\r
\r
    // 4. Client Service utilizing Constructor Dependency Injection\r
    public static class CourseCheckoutService {\r
        private final PaymentProcessor processor; // Immutable injected dependency\r
\r
        // PURE JAVA CONSTRUCTOR DEPENDENCY INJECTION:\r
        public CourseCheckoutService(PaymentProcessor processor) {\r
            if (processor == null) throw new IllegalArgumentException("Processor cannot be null!");\r
            this.processor = processor;\r
        }\r
\r
        public void enrollInCourse(String student, double fee) {\r
            System.out.println(">>> Processing Enrollment for: " + student);\r
            boolean success = processor.charge(student, fee);\r
            if (success) System.out.println("  [ACADEMY] Enrollment Confirmed @ Barrackpore Hub!\r
");\r
        }\r
    }\r
\r
    public static void main(String[] args) {\r
        System.out.println("==========================================================================");\r
        System.out.println(" TOPIC 10: CONSTRUCTOR DEPENDENCY INJECTION IN PURE JAVA - BARRACKPORE");\r
        System.out.println("==========================================================================\\n");\r
\r
        System.out.println(">>> 1. Executing Unit Test with Mock Dependency:");\r
        CourseCheckoutService testService = new CourseCheckoutService(new MockTestPaymentProcessor());\r
        testService.enrollInCourse("Swadeep Paul", 12000.0);\r
\r
        System.out.println(">>> 2. Executing Production App with Real Razorpay Dependency:");\r
        CourseCheckoutService prodService = new CourseCheckoutService(new ProductionRazorpayProcessor());\r
        prodService.enrollInCourse("Tuhina Das", 15000.0);\r
\r
        System.out.println("==========================================================================");\r
    }\r
}`,i=`================================================================================\r
JAVA CORE TUTORIAL - QUICK REVISION GUIDE\r
Module 002_011: SOLID Design Principles\r
Topic 10: Constructor Dependency Injection\r
Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
================================================================================\r
\r
1. CONSTRUCTOR INJECTION BEST PRACTICES:\r
   - Mark injected dependencies as 'private final'.\r
   - Validate nullability in constructor ('Objects.requireNonNull').\r
   - Pass Mock implementations in JUnit tests for sub-millisecond execution.\r
\r
================================================================================\r
Classroom Practice: Barrackpore Academy | Mentor: Sukanta Hui\r
================================================================================`,a=[{question:"Why is Constructor Dependency Injection (CDI) considered superior to Field Injection in Java?",shortAnswer:"Constructor Injection makes all dependencies explicit and immutable ('final'), prevents creating partially initialized objects, and allows fast, lightweight unit testing by passing mock implementations without needing reflection frameworks.",explanation:"Recommended as the gold standard by Spring Framework and Google Guice.",hint:"Guarantees immutable dependencies and enables effortless unit test mocking.",level:"Intermediate",codeExample:"public Service(PaymentProcessor p) { this.p = Objects.requireNonNull(p); }"}];function b(){return e.jsxs("div",{className:"space-y-12 px-4 md:px-8 py-8 text-slate-200 bg-slate-900 min-h-screen",children:[e.jsx("style",{children:`
          @keyframes fadeIn {
            from { opacity: 0; transform: translateY(8px); }
            to { opacity: 1; transform: translateY(0); }
          }
          .animate-fade-in { animation: fadeIn 0.5s ease-out forwards; }
        `}),e.jsxs("header",{className:"space-y-4 border-b border-slate-800 pb-6 animate-fade-in",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"px-3 py-1 bg-sky-500/10 text-sky-400 border border-sky-500/20 text-xs font-semibold rounded-full uppercase tracking-wider",children:"Module 002_011 · Topic 10"}),e.jsx("span",{className:"px-3 py-1 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-xs font-semibold rounded-full",children:"Dependency Injection"})]}),e.jsx("h1",{className:"text-xl sm:text-2xl md:text-3xl font-bold text-white tracking-tight",children:"Implementing DIP with Constructor Dependency Injection"}),e.jsx("p",{className:"text-base md:text-lg text-slate-400 leading-relaxed max-w-4xl",children:"Learn how to implement Dependency Injection in pure Java without third-party frameworks: creating immutable dependencies, enabling fast mock testing, and achieving total inversion of control."})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsxs("h2",{className:"text-2xl font-bold text-emerald-400 flex items-center gap-2",children:[e.jsx("span",{children:"💻"})," Hands-On Java Demo Code"]}),e.jsx(n,{fileModule:s,title:"ConstructorDependencyInjectionDemo.java",highlightLines:[11,16,24,32,35,50,54]})]}),e.jsx("section",{className:"space-y-4",children:e.jsx(t,{title:"Constructor Injection FAQs",questions:a})}),e.jsx("section",{className:"space-y-4",children:e.jsx(r,{content:i,title:"Module 002_011 Topic 10: Constructor Dependency Injection",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Printable Note",downloadFileName:"002_011_topic10_constructor_di_note.txt"})}),e.jsx(o,{note:"Constructor Injection lets you test your service in 1 millisecond by injecting a MockPaymentProcessor without connecting to a real payment gateway or database! — Sukanta Hui"})]})}export{b as default};
