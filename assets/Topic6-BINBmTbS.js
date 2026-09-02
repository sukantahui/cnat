import{j as e}from"./vendor-react-core-Doz9nIC6.js";import{J as t}from"./JavaFileLoader-BfBG3xz_.js";import{F as a}from"./FAQTemplate-BHhlgA96.js";import{P as n}from"./PlainTextPrint-C08xhKA4.js";import{T as s}from"./TeacherSukantaHui-RpFLNJ5A.js";import"./JavaCodeBlock-BwsLxS3r.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-wprqVFW_.js";const r=`/**\r
 * Java Core Tutorial - Module 009_009: Modern Java Features\r
 * Topic 6: Sealed Classes & Interfaces (Java 17+ Standard - JEP 409)\r
 * Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
 */\r
\r
package com.coderaccotax.javatutorial.modern;\r
\r
public class SealedClassesJep409Demo {\r
\r
    // Sealed Interface: Permitted subclasses explicitly declared\r
    public sealed interface PaymentMethod permits UpiPayment, CardPayment, NetBankingPayment {}\r
\r
    public static final class UpiPayment implements PaymentMethod {\r
        private final String upiId;\r
        public UpiPayment(String upiId) { this.upiId = upiId; }\r
        public String getUpiId() { return upiId; }\r
    }\r
\r
    public static final class CardPayment implements PaymentMethod {\r
        private final String last4Digits;\r
        public CardPayment(String last4Digits) { this.last4Digits = last4Digits; }\r
        public String getLast4Digits() { return last4Digits; }\r
    }\r
\r
    public static final class NetBankingPayment implements PaymentMethod {\r
        private final String bankCode;\r
        public NetBankingPayment(String bankCode) { this.bankCode = bankCode; }\r
        public String getBankCode() { return bankCode; }\r
    }\r
\r
    public static void main(String[] args) {\r
        System.out.println("==========================================================================");\r
        System.out.println(" TOPIC 6: SEALED CLASSES (JEP 409) - BARRACKPORE ACADEMY");\r
        System.out.println("==========================================================================\\n");\r
\r
        PaymentMethod p1 = new UpiPayment("swadeep@upi");\r
        PaymentMethod p2 = new CardPayment("4421");\r
\r
        System.out.println("1. Created Permitted Payment Instances:");\r
        System.out.println("   - UPI Payment  : " + p1.getClass().getSimpleName());\r
        System.out.println("   - Card Payment : " + p2.getClass().getSimpleName());\r
\r
        System.out.println("\\n>>> WHY SEALED CLASSES ARE REVOLUTIONARY:");\r
        System.out.println("  1. Domain Integrity: Prevents unauthorized external subclasses from breaking invariants.");\r
        System.out.println("  2. Exhaustiveness: Enables the compiler to verify all cases in switch expressions!");\r
        System.out.println("==========================================================================");\r
    }\r
}\r
`,i=`================================================================================\r
JAVA CORE TUTORIAL - QUICK REVISION GUIDE\r
Module 009_009: Modern Java Features\r
Topic 6: Sealed Classes & Interfaces (JEP 409)\r
Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
================================================================================\r
\r
1. WHAT ARE SEALED CLASSES:\r
   - Introduced in Java 17 (JEP 409).\r
   - Allows a class or interface to declare which other classes or interfaces may extend\r
     or implement it.\r
   - Syntax:\r
     'public sealed class Shape permits Circle, Rectangle, Triangle {}'\r
\r
2. CORE MOTIVATION:\r
   - Bridges the gap between fully open inheritance ('public') and closed ('final').\r
   - Models closed algebraic data types (ADTs) in object-oriented Java.\r
\r
================================================================================\r
Classroom Practice: Barrackpore Academy | Mentor: Sukanta Hui\r
================================================================================\r
`,l=[{question:"What is the primary architectural purpose of Sealed Classes in Java 17+?",shortAnswer:"To restrict which specific classes or interfaces can extend or implement a type, enabling domain modeling of closed type hierarchies and allowing the compiler to perform exhaustiveness checking in switch expressions.",explanation:"Prevents arbitrary external subclasses.",hint:"Restricts subclassing to an explicit permitted whitelist.",level:"Intermediate",codeExample:"public sealed interface Result permits Success, Failure {}"},{question:"Can an unauthorized third-party class in another package extend a sealed class?",shortAnswer:"No! The compiler enforces that all permitted subclasses must be declared in the permits clause and must reside in the same module or package as the sealed class.",explanation:"Guarantees domain boundary integrity at compile time.",hint:"No, compilation fails if the class is not explicitly permitted.",level:"Beginner",codeExample:"class Unauthorized extends SealedClass // COMPILE ERROR!"}];function g(){return e.jsxs("div",{className:"space-y-12 px-4 md:px-8 py-8 text-slate-200 bg-slate-900 min-h-screen",children:[e.jsxs("header",{className:"space-y-4 border-b border-slate-800 pb-6",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"px-3 py-1 bg-sky-500/10 text-sky-400 border border-sky-500/20 text-xs font-semibold rounded-full uppercase tracking-wider",children:"Module 009_009 · Topic 6"}),e.jsx("span",{className:"px-3 py-1 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-xs font-semibold rounded-full",children:"Modern Java Evolution"})]}),e.jsxs("h1",{className:"text-xl sm:text-2xl md:text-3xl font-bold text-white tracking-tight",children:["Sealed Classes & Interfaces: ",e.jsx("code",{className:"text-emerald-400 font-mono",children:"Restricting Subclassing (JEP 409)"})]}),e.jsx("p",{className:"text-base md:text-lg text-slate-400 leading-relaxed max-w-4xl",children:"Regaining control over class hierarchies: restricting which classes may extend or implement a type using sealed, permits, and closed type hierarchies."})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsxs("h2",{className:"text-2xl font-bold text-emerald-400 flex items-center gap-2",children:[e.jsx("span",{children:"💻"})," Hands-On Java Demo Code"]}),e.jsx(t,{fileModule:r,title:"SealedClassesJep409Demo.java",highlightLines:[18,25,34,43]})]}),e.jsx("section",{className:"space-y-4",children:e.jsx(a,{title:"Modern Java Features FAQs",questions:l})}),e.jsx("section",{className:"space-y-4",children:e.jsx(n,{content:i,title:"Module 009_009 Topic 6: Sealed Classes (JEP 409)",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Printable Note",downloadFileName:"009_009_topic6_sealed_classes_jep409_note.txt"})}),e.jsx(s,{note:"Before Java 17, a class was either wide open for anyone to extend (public) or completely locked down (final). Sealed classes give you the perfect middle ground: you choose exactly WHICH subclasses are permitted! — Sukanta Hui"})]})}export{g as default};
