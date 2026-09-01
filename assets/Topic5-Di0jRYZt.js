import{j as e}from"./vendor-react-core-Doz9nIC6.js";import{J as t}from"./JavaFileLoader-BfBG3xz_.js";import{F as n}from"./FAQTemplate-BHhlgA96.js";import{P as i}from"./PlainTextPrint-C08xhKA4.js";import{T as r}from"./TeacherSukantaHui-BaJcBHAy.js";import"./JavaCodeBlock-BwsLxS3r.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-8ao-0upJ.js";const a=`/**\r
 * Java Core Tutorial - Module 004_003: Throw, Throws & Custom Exceptions\r
 * Topic 5: Why Create Custom Exceptions: Domain Clarity & Semantic Business Signaling\r
 * Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
 */\r
\r
package com.coderaccotax.javatutorial.exceptions;\r
\r
public class WhyCustomExceptionsAreEssentialDemo {\r
\r
    // ANTI-PATTERN: Generic RuntimeException with ambiguous message:\r
    public static void withdrawGeneric(double amount) {\r
        if (amount > 10000) {\r
            throw new RuntimeException("Error: Limit exceeded!"); // Vague! Callers cannot catch this specifically!\r
        }\r
    }\r
\r
    // BEST PRACTICE: Semantic Custom Domain Exception:\r
    public static class DailyWithdrawalLimitExceededException extends RuntimeException {\r
        private final double requestedAmount;\r
        private final double maxDailyLimit;\r
\r
        public DailyWithdrawalLimitExceededException(double requested, double limit) {\r
            super("Requested " + requested + " INR exceeds daily threshold of " + limit + " INR");\r
            this.requestedAmount = requested;\r
            this.maxDailyLimit = limit;\r
        }\r
\r
        public double getRequestedAmount() { return requestedAmount; }\r
        public double getMaxDailyLimit() { return maxDailyLimit; }\r
    }\r
\r
    public static void withdrawDomain(double amount) {\r
        if (amount > 10000) {\r
            throw new DailyWithdrawalLimitExceededException(amount, 10000);\r
        }\r
        System.out.println("  [SUCCESS] Withdrawn: " + amount + " INR");\r
    }\r
\r
    public static void main(String[] args) {\r
        System.out.println("==========================================================================");\r
        System.out.println(" TOPIC 5: WHY CUSTOM EXCEPTIONS MATTER - BARRACKPORE");\r
        System.out.println("==========================================================================\\n");\r
\r
        System.out.println(">>> 1. The 3 Primary Benefits of Custom Exceptions:");\r
        System.out.println("  1. Semantic Clarity: The class name itself ('DailyWithdrawalLimitExceeded') explains the business failure.");\r
        System.out.println("  2. Targeted Catching: Callers can catch this specific error without catching all generic RuntimeExceptions.");\r
        System.out.println("  3. Domain Metadata: Carries structured fields (requested amount, limit, transaction ID) for automated recovery.");\r
\r
        System.out.println("\\n>>> 2. Catching and Inspecting Custom Exception:");\r
        try {\r
            withdrawDomain(25000);\r
        } catch (DailyWithdrawalLimitExceededException e) {\r
            System.out.println("  [BUSINESS REACTION] " + e.getMessage());\r
            System.out.println("  [AUDIT] Max Limit: " + e.getMaxDailyLimit() + " INR | Requested: " + e.getRequestedAmount() + " INR");\r
        }\r
\r
        System.out.println("\\n==========================================================================");\r
    }\r
}`,s=`================================================================================\r
JAVA CORE TUTORIAL - QUICK REVISION GUIDE\r
Module 004_003: Throw, Throws & Custom Exceptions\r
Topic 5: Why Custom Exceptions\r
Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
================================================================================\r
\r
1. BENEFITS OF CUSTOM EXCEPTIONS:\r
   - Self-documenting class names.\r
   - Enables targeted catch blocks.\r
   - Carries structured metadata fields (IDs, limits, timestamps).\r
   - Separates technical JVM crashes from business rules.\r
\r
================================================================================\r
Classroom Practice: Barrackpore Academy | Mentor: Sukanta Hui\r
================================================================================`,o=[{question:"What are the core reasons to create custom user-defined exceptions instead of using generic RuntimeException in enterprise Java?",shortAnswer:"1. Semantic domain signaling: Class names (like 'UserNotFoundException') immediately clarify business intent. 2. Granular error routing: Allows callers to catch specific business failures independently. 3. Rich domain metadata: Custom exceptions can store structured attributes (like account numbers, timestamps, and error codes) for automated audits.",explanation:"Fundamental to building domain-driven microservice architectures.",hint:"Semantic clarity, granular catch blocks, and rich domain metadata fields.",level:"Beginner",codeExample:"public class InsufficientFundsException extends Exception { ... }"}];function y(){return e.jsxs("div",{className:"space-y-12 px-4 md:px-8 py-8 text-slate-200 bg-slate-900 min-h-screen",children:[e.jsxs("header",{className:"space-y-4 border-b border-slate-800 pb-6",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"px-3 py-1 bg-sky-500/10 text-sky-400 border border-sky-500/20 text-xs font-semibold rounded-full uppercase tracking-wider",children:"Module 004_003 · Topic 5"}),e.jsx("span",{className:"px-3 py-1 bg-purple-500/10 text-purple-400 border border-purple-500/20 text-xs font-semibold rounded-full",children:"Domain Modeling"})]}),e.jsx("h1",{className:"text-xl sm:text-2xl md:text-3xl font-bold text-white tracking-tight",children:"Why Create Custom Exceptions? Domain Clarity & Semantic Business Signaling"}),e.jsx("p",{className:"text-base md:text-lg text-slate-400 leading-relaxed max-w-4xl",children:"Elevate enterprise software quality: moving away from generic runtime exceptions to expressive domain models carrying rich recovery metadata."})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsxs("h2",{className:"text-2xl font-bold text-emerald-400 flex items-center gap-2",children:[e.jsx("span",{children:"💻"})," Hands-On Java Demo Code"]}),e.jsx(t,{fileModule:a,title:"WhyCustomExceptionsAreEssentialDemo.java",highlightLines:[7,10,15,16,17,20,21,28,29,44,45]})]}),e.jsx("section",{className:"space-y-4",children:e.jsx(n,{title:"Custom Exceptions FAQs",questions:o})}),e.jsx("section",{className:"space-y-4",children:e.jsx(i,{content:s,title:"Module 004_003 Topic 5: Why Custom Exceptions",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Printable Note",downloadFileName:"004_003_topic5_why_custom_exceptions_note.txt"})}),e.jsx(r,{note:"If you throw generic RuntimeException('Error'), nobody knows what went wrong! When you throw 'StudentNotFoundException', the meaning is instantly crystal clear to every developer on the team! — Sukanta Hui"})]})}export{y as default};
