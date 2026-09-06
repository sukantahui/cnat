import{j as e}from"./vendor-react-core-Doz9nIC6.js";import{J as t}from"./JavaFileLoader-BfBG3xz_.js";import{F as s}from"./FAQTemplate-BHhlgA96.js";import{P as n}from"./PlainTextPrint-C08xhKA4.js";import{T as a}from"./TeacherSukantaHui-DDN87fI5.js";import"./JavaCodeBlock-BwsLxS3r.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-DEsnU7fn.js";const r=`/**\r
 * Java Core Tutorial - Module 009_009: Modern Java Features\r
 * Topic 11: Exhaustiveness Checking in Switch Expressions with Sealed Classes\r
 * Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
 */\r
\r
package com.coderaccotax.javatutorial.modern;\r
\r
public class ExhaustivenessCheckingSwitchDemo {\r
\r
    // Sealed hierarchy: Only 3 permitted subtypes\r
    public sealed interface PaymentStatus permits Pending, Successful, Failed {}\r
\r
    public record Pending(String transactionRef, long initiatedEpoch) implements PaymentStatus {}\r
    public record Successful(String transactionRef, String authCode, double amount) implements PaymentStatus {}\r
    public record Failed(String transactionRef, String errorCode, String reason) implements PaymentStatus {}\r
\r
    public static void main(String[] args) {\r
        System.out.println("==========================================================================");\r
        System.out.println(" TOPIC 11: EXHAUSTIVENESS CHECKING WITH SEALED TYPES - BARRACKPORE");\r
        System.out.println("==========================================================================\\n");\r
\r
        PaymentStatus status1 = new Successful("TXN-101", "AUTH-9942", 4500.0);\r
        PaymentStatus status2 = new Failed("TXN-102", "ERR-INSUFFICIENT-FUNDS", "Declined by bank");\r
        PaymentStatus status3 = new Pending("TXN-103", System.currentTimeMillis());\r
\r
        System.out.println("1. " + generateUserAlert(status1));\r
        System.out.println("2. " + generateUserAlert(status2));\r
        System.out.println("3. " + generateUserAlert(status3));\r
\r
        System.out.println("\\n>>> THE POWER OF EXHAUSTIVENESS:");\r
        System.out.println("  - Notice there is NO 'default' branch in generateUserAlert()!");\r
        System.out.println("  - The compiler proves all 3 subtypes (Pending, Successful, Failed) are covered.");\r
        System.out.println("==========================================================================");\r
    }\r
\r
    // Modern Exhaustive Switch Expression: NO 'default' needed!\r
    static String generateUserAlert(PaymentStatus status) {\r
        return switch (status) {\r
            case Successful s -> "✅ Payment of ₹" + s.amount() + " confirmed (Auth: " + s.authCode() + ")";\r
            case Failed f     -> "❌ Payment failed [" + f.errorCode() + "]: " + f.reason();\r
            case Pending p    -> "⏳ Payment " + p.transactionRef() + " is currently processing...";\r
            // If someone adds 'case Refunded' to PaymentStatus, this file WILL NOT COMPILE\r
            // until 'case Refunded' is explicitly handled here!\r
        };\r
    }\r
}\r
`,i=`================================================================================\r
JAVA CORE TUTORIAL - QUICK REVISION GUIDE\r
Module 009_009: Modern Java Features\r
Topic 11: Exhaustiveness Checking with Sealed Types\r
Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
================================================================================\r
\r
1. HOW EXHAUSTIVENESS WORKS:\r
   - When switching on an enum or a 'sealed' type, the compiler knows the full closed\r
     set of permitted subclasses.\r
   - If the 'switch' expression covers every permitted subclass, NO 'default' branch is required.\r
\r
2. ARCHITECTURAL SAFETY:\r
   - If a new permitted subclass is added in the future, the compiler generates errors\r
     at all switch sites across the codebase that fail to cover the new type.\r
   - Eliminates silent runtime bugs caused by forgotten switch branches.\r
\r
================================================================================\r
Classroom Practice: Barrackpore Academy | Mentor: Sukanta Hui\r
================================================================================\r
`,l=[{question:"Why is omitting the 'default' branch considered an advantage when switching over sealed hierarchies?",shortAnswer:"Because omitting 'default' forces the Java compiler to verify that every permitted subclass is explicitly handled. If a new subclass is added later, the compiler immediately flags all incomplete switch sites.",explanation:"A default branch would swallow the new subclass silently, leading to subtle runtime bugs.",hint:"Ensures future subclasses are caught at compile time rather than swallowed by default.",level:"Advanced",codeExample:"switch (sealedShape) { case Circle c → ...; case Rect r → ...; } // 100% verified"},{question:"Does exhaustiveness checking apply to switch statements as well as switch expressions?",shortAnswer:"In Java 21+, pattern switch statements as well as switch expressions require exhaustiveness when operating on sealed types or pattern selectors.",explanation:"Ensures type safety across all modern switch constructs.",hint:"Yes, pattern switch statements also require exhaustiveness in Java 21.",level:"Intermediate",codeExample:"switch (status) { case Ok → ...; case Err → ...; }"}];function S(){return e.jsxs("div",{className:"space-y-12 px-4 md:px-8 py-8 text-slate-200 bg-slate-900 min-h-screen",children:[e.jsxs("header",{className:"space-y-4 border-b border-slate-800 pb-6",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"px-3 py-1 bg-sky-500/10 text-sky-400 border border-sky-500/20 text-xs font-semibold rounded-full uppercase tracking-wider",children:"Module 009_009 · Topic 11"}),e.jsx("span",{className:"px-3 py-1 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-xs font-semibold rounded-full",children:"Modern Java Evolution"})]}),e.jsxs("h1",{className:"text-xl sm:text-2xl md:text-3xl font-bold text-white tracking-tight",children:["Exhaustiveness Checking: ",e.jsx("code",{className:"text-emerald-400 font-mono",children:"Switch Expressions with Sealed Types"})]}),e.jsx("p",{className:"text-base md:text-lg text-slate-400 leading-relaxed max-w-4xl",children:"Compile-time perfection: combining Sealed Classes with pattern switch to eliminate default branches and catch missing subclasses during compilation."})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsxs("h2",{className:"text-2xl font-bold text-emerald-400 flex items-center gap-2",children:[e.jsx("span",{children:"💻"})," Hands-On Java Demo Code"]}),e.jsx(t,{fileModule:r,title:"ExhaustivenessCheckingSwitchDemo.java",highlightLines:[18,25,34,43]})]}),e.jsx("section",{className:"space-y-4",children:e.jsx(s,{title:"Modern Java Features FAQs",questions:l})}),e.jsx("section",{className:"space-y-4",children:e.jsx(n,{content:i,title:"Module 009_009 Topic 11: Exhaustiveness Checking in Switch",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Printable Note",downloadFileName:"009_009_topic11_exhaustiveness_checking_switch_note.txt"})}),e.jsx(a,{note:"When you switch over a sealed hierarchy, the compiler KNOWS every permitted subclass! If you cover all of them, NO default branch is needed! And if someone adds a new subclass tomorrow, your code refuses to compile until you handle it! — Sukanta Hui"})]})}export{S as default};
