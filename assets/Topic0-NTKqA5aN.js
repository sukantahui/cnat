import{j as e}from"./vendor-react-core-Doz9nIC6.js";import{J as t}from"./JavaFileLoader-BfBG3xz_.js";import{F as n}from"./FAQTemplate-BHhlgA96.js";import{P as r}from"./PlainTextPrint-C08xhKA4.js";import{T as s}from"./TeacherSukantaHui-CEPuAfsb.js";import"./JavaCodeBlock-BwsLxS3r.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-DGCamHnX.js";const a=`/**\r
 * Java Core Tutorial - Module 006_003: Bounded Type Parameters & Multiple Bounds\r
 * Topic 0: Why Bounded Types are Necessary: Restricting Generic Type Hierarchies\r
 * Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
 */\r
\r
package com.coderaccotax.javatutorial.generics;\r
\r
// 1. UNBOUNDED CONTAINER: Allows ANY object (Strings, Threads, DB connections):\r
class UnboundedHolder<T> {\r
    private final T item;\r
    public UnboundedHolder(T item) { this.item = item; }\r
    // Problem: Inside the class, 'item' only has access to java.lang.Object methods (toString, hashCode, equals)!\r
}\r
\r
// 2. BOUNDED CONTAINER: Restricts T to numeric types only!\r
class NumericAccountHolder<T extends Number> {\r
    private final T balance;\r
    public NumericAccountHolder(T balance) { this.balance = balance; }\r
\r
    // Benefit: Direct access to Number methods without casting!\r
    public double getAsDouble() {\r
        return balance.doubleValue();\r
    }\r
}\r
\r
public class BoundedTypesNecessityDemo {\r
\r
    public static void main(String[] args) {\r
        System.out.println("==========================================================================");\r
        System.out.println(" TOPIC 0: WHY BOUNDED TYPES ARE NECESSARY - BARRACKPORE");\r
        System.out.println("==========================================================================\\n");\r
\r
        NumericAccountHolder<Integer> intAcc = new NumericAccountHolder<>(5000);\r
        NumericAccountHolder<Double> dblAcc = new NumericAccountHolder<>(12450.75);\r
        NumericAccountHolder<Long> longAcc = new NumericAccountHolder<>(1000000L);\r
\r
        System.out.println(">>> 1. Bounded Numeric Account Balances:");\r
        System.out.printf("  Integer Account : ₹%.2f%n", intAcc.getAsDouble());\r
        System.out.printf("  Double Account  : ₹%.2f%n", dblAcc.getAsDouble());\r
        System.out.printf("  Long Account    : ₹%.2f%n", longAcc.getAsDouble());\r
\r
        System.out.println("\\n>>> WHY BOUNDED TYPE PARAMETERS ARE ESSENTIAL:");\r
        System.out.println("  1. Restrict Permissible Types: Prevents invalid types (e.g. new NumericAccountHolder<String>("hello")).");\r
        System.out.println("  2. Direct Method Access: Grants access to methods defined on the bound (e.g. doubleValue(), compareTo()).");\r
        System.out.println("  3. Compile-Time Enforcement: Catches type violations at compile time rather than crashing at runtime.");\r
\r
        System.out.println("\\n==========================================================================");\r
    }\r
}`,o=`================================================================================\r
JAVA CORE TUTORIAL - QUICK REVISION GUIDE\r
Module 006_003: Bounded Type Parameters & Multiple Bounds\r
Topic 0: Why Bounded Types are Necessary\r
Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
================================================================================\r
\r
1. BOUNDED TYPE PARAMETERS:\r
   - Syntax: '<T extends SuperType>'.\r
   - Restricts type arguments to subtypes of 'SuperType'.\r
   - Unlocks supertype methods inside generic class body.\r
   - Prevents incompatible type instantiation at compile time.\r
\r
================================================================================\r
Classroom Practice: Barrackpore Academy | Mentor: Sukanta Hui\r
================================================================================`,i=[{question:"What are the two major advantages of declaring an Upper Bounded Type Parameter like '<T extends Number>' in Java?",shortAnswer:"1. Type Restriction: It restricts client code from instantiating the generic class with incompatible types (e.g. 'new Holder<String>()' fails compilation). 2. Method Invocability: It allows code inside the generic class to invoke all public methods of the bounding type ('Number.doubleValue()', 'intValue()') directly on instances of 'T' without manual type casting.",explanation:"Eliminates the need to treat generic elements as opaque java.lang.Object instances.",hint:"Restricts invalid types and enables calling methods declared on the bounding superclass.",level:"Beginner",codeExample:"class Stats<T extends Number> { double get() { return val.doubleValue(); } }"}];function h(){return e.jsxs("div",{className:"space-y-12 px-4 md:px-8 py-8 text-slate-200 bg-slate-900 min-h-screen",children:[e.jsxs("header",{className:"space-y-4 border-b border-slate-800 pb-6",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"px-3 py-1 bg-sky-500/10 text-sky-400 border border-sky-500/20 text-xs font-semibold rounded-full uppercase tracking-wider",children:"Module 006_003 · Topic 0"}),e.jsx("span",{className:"px-3 py-1 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-xs font-semibold rounded-full",children:"Bounded Generics"})]}),e.jsx("h1",{className:"text-xl sm:text-2xl md:text-3xl font-bold text-white tracking-tight",children:"Why Bounded Types are Necessary: Restricting Subtype Hierarchies"}),e.jsx("p",{className:"text-base md:text-lg text-slate-400 leading-relaxed max-w-4xl",children:"Constrain type variables: restricting generic arguments to specific class hierarchies and unlocking supertype member methods without casting."})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsxs("h2",{className:"text-2xl font-bold text-emerald-400 flex items-center gap-2",children:[e.jsx("span",{children:"💻"})," Hands-On Java Demo Code"]}),e.jsx(t,{fileModule:a,title:"BoundedTypesNecessityDemo.java",highlightLines:[7,10,16,17,21,22,30,31,32]})]}),e.jsx("section",{className:"space-y-4",children:e.jsx(n,{title:"Bounded Generics FAQs",questions:i})}),e.jsx("section",{className:"space-y-4",children:e.jsx(r,{content:o,title:"Module 006_003 Topic 0: Bounded Types Necessity",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Printable Note",downloadFileName:"006_003_topic0_bounded_types_necessity_note.txt"})}),e.jsx(s,{note:"Without bounds, '<T>' is treated as pure java.lang.Object! By writing '<T extends Number>', you tell Java: 'T is guaranteed to be a number', allowing you to call 'doubleValue()' or 'intValue()' directly! — Sukanta Hui"})]})}export{h as default};
