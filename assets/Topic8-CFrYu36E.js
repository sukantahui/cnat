import{j as e}from"./vendor-react-core-Doz9nIC6.js";import{J as t}from"./JavaFileLoader-BfBG3xz_.js";import{F as n}from"./FAQTemplate-BHhlgA96.js";import{P as r}from"./PlainTextPrint-C08xhKA4.js";import{T as o}from"./TeacherSukantaHui-BaJcBHAy.js";import"./JavaCodeBlock-BwsLxS3r.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-8ao-0upJ.js";const a=`/**\r
 * Java Core Tutorial - Module 006_003: Bounded Type Parameters & Multiple Bounds\r
 * Topic 8: Compile-Time Rejection of Out-of-Bound Type Arguments (Capstone)\r
 * Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
 */\r
\r
package com.coderaccotax.javatutorial.generics;\r
\r
class BoundedTaxLedger<T extends Number> {\r
    private final T totalAmount;\r
    public BoundedTaxLedger(T amt) { this.totalAmount = amt; }\r
    public double getAmount() { return totalAmount.doubleValue(); }\r
}\r
\r
public class CompileTimeRejectionOutOfBoundsCapstoneDemo {\r
\r
    public static void main(String[] args) {\r
        System.out.println("==========================================================================");\r
        System.out.println(" TOPIC 8: COMPILE-TIME BOUND REJECTION CAPSTONE - BARRACKPORE");\r
        System.out.println("==========================================================================\\n");\r
\r
        // 1. VALID TYPE ARGUMENTS (Within Upper Bound 'Number'):\r
        BoundedTaxLedger<Double> valid1 = new BoundedTaxLedger<>(8500.50);\r
        BoundedTaxLedger<Integer> valid2 = new BoundedTaxLedger<>(5000);\r
        System.out.println(">>> 1. Valid Bounded Instantiations Accepted by Compiler:");\r
        System.out.println("  Valid Double Ledger : ₹" + valid1.getAmount());\r
        System.out.println("  Valid Integer Ledger: ₹" + valid2.getAmount());\r
\r
        // 2. INVALID TYPE ARGUMENTS (Rejected at Compile Time by javac):\r
        System.out.println("\\n>>> 2. HOW THE COMPILER REJECTS OUT-OF-BOUND ARGUMENTS:");\r
        System.out.println("  Code: 'BoundedTaxLedger<String> invalid = new BoundedTaxLedger<>("₹5000");'");\r
        System.out.println("  Compile Error: 'type argument java.lang.String is not within bounds of type-variable T'");\r
        System.out.println("  Reason: String does not extend java.lang.Number!");\r
\r
        System.out.println("\\n>>> 3 CORE BENEFITS OF COMPILE-TIME REJECTION:");\r
        System.out.println("  1. Zero Runtime Cost: Type safety verified entirely at compile time.");\r
        System.out.println("  2. Eliminates Defensive Type Checking: No 'if (!(obj instanceof Number))' code required.");\r
        System.out.println("  3. Self-Documenting APIs: Generic signatures communicate constraints clearly to other engineers.");\r
\r
        System.out.println("\\n==========================================================================");\r
        System.out.println(" MODULE 006_003 BOUNDED TYPE PARAMETERS 100% COMPLETE!");\r
        System.out.println("==========================================================================");\r
    }\r
}`,i=`================================================================================\r
JAVA CORE TUTORIAL - QUICK REVISION GUIDE\r
Module 006_003: Bounded Type Parameters & Multiple Bounds\r
Topic 8: Compile-Time Rejection Capstone\r
Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
================================================================================\r
\r
1. MODULE 006_003 SUMMARY:\r
   - Bounded Types: '<T extends SuperType>' restricts hierarchy.\r
   - 'extends' used for both classes and interfaces.\r
   - Direct access to bound methods (e.g. 'Number.doubleValue()').\r
   - Multiple bounds syntax: '<T extends Class & InterfaceA & InterfaceB>'.\r
   - Class bound MUST come first, at most 1 class permitted.\r
   - Recursive type bounds: '<T extends Comparable<T>>' for mutual comparison.\r
   - Compile-time rejection prevents runtime type corruption.\r
\r
================================================================================\r
Classroom Practice: Barrackpore Academy | Mentor: Sukanta Hui\r
================================================================================`,s=[{question:"What exact error message does the Java compiler output when an argument does not satisfy a type bound constraint?",shortAnswer:"The Java compiler rejects the code with: 'error: type argument X is not within bounds of type-variable T / found: X, required: SuperType'. This is caught 100% at compile-time during semantic analysis, preventing defective bytecode from ever being generated.",explanation:"Core principle of Java type safety.",hint:"Outputs 'type argument X is not within bounds of type-variable T' at compile time.",level:"Beginner",codeExample:"BoundedHolder<String> b = new BoundedHolder<>(); // Compiler error: String not within Number bound"}];function y(){return e.jsxs("div",{className:"space-y-12 px-4 md:px-8 py-8 text-slate-200 bg-slate-900 min-h-screen",children:[e.jsxs("header",{className:"space-y-4 border-b border-slate-800 pb-6",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"px-3 py-1 bg-sky-500/10 text-sky-400 border border-sky-500/20 text-xs font-semibold rounded-full uppercase tracking-wider",children:"Module 006_003 · Topic 8"}),e.jsx("span",{className:"px-3 py-1 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-xs font-semibold rounded-full",children:"Bounds Capstone"})]}),e.jsx("h1",{className:"text-xl sm:text-2xl md:text-3xl font-bold text-white tracking-tight",children:"Compile-Time Rejection of Invalid Out-of-Bound Type Arguments (Capstone)"}),e.jsx("p",{className:"text-base md:text-lg text-slate-400 leading-relaxed max-w-4xl",children:"Synthesize bounded type safety: analyzing compile-time type verification diagnostics and observing how the compiler rejects out-of-bound arguments."})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsxs("h2",{className:"text-2xl font-bold text-emerald-400 flex items-center gap-2",children:[e.jsx("span",{children:"💻"})," Hands-On Java Demo Code"]}),e.jsx(t,{fileModule:a,title:"CompileTimeRejectionOutOfBoundsCapstoneDemo.java",highlightLines:[7,10,19,20,26,27,28]})]}),e.jsx("section",{className:"space-y-4",children:e.jsx(n,{title:"Rejection Diagnostics FAQs",questions:s})}),e.jsx("section",{className:"space-y-4",children:e.jsx(r,{content:i,title:"Module 006_003 Topic 8: Bounds Rejection Capstone",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Printable Note",downloadFileName:"006_003_topic8_bounds_rejection_capstone_note.txt"})}),e.jsx(o,{note:"Congratulations on completing Module 006_003! You now master Upper Bounded types, Multiple Bounds syntax and ordering rules, Recursive Type Bounds, and compile-time bounds verification! — Sukanta Hui"})]})}export{y as default};
