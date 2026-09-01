import{j as e}from"./vendor-react-core-Doz9nIC6.js";import{J as t}from"./JavaFileLoader-BfBG3xz_.js";import{F as r}from"./FAQTemplate-BHhlgA96.js";import{P as n}from"./PlainTextPrint-C08xhKA4.js";import{T as a}from"./TeacherSukantaHui-CEPuAfsb.js";import"./JavaCodeBlock-BwsLxS3r.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-DGCamHnX.js";const o=`/**\r
 * Java Core Tutorial - Module 009_002: Built-in Functional Interfaces\r
 * Topic 1: The Big 4 Core Interfaces: Predicate, Function, Consumer & Supplier\r
 * Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
 */\r
\r
package com.coderaccotax.javatutorial.functional;\r
\r
import java.util.function.Consumer;\r
import java.util.function.Function;\r
import java.util.function.Predicate;\r
import java.util.function.Supplier;\r
\r
public class BigFourCoreInterfacesOverviewDemo {\r
\r
    public static void main(String[] args) {\r
        System.out.println("==========================================================================");\r
        System.out.println(" TOPIC 1: THE BIG 4 CORE FUNCTIONAL INTERFACES - BARRACKPORE");\r
        System.out.println("==========================================================================\\n");\r
\r
        // 1. Predicate<T>: boolean test(T t) -> Tests a condition\r
        Predicate<Double> isEligibleForGst = turnover -> turnover > 2000000.0; // > ₹20 Lakhs threshold\r
\r
        // 2. Function<T, R>: R apply(T t) -> Transforms T into R\r
        Function<Double, String> currencyFormatter = amount -> String.format("₹%,.2f", amount);\r
\r
        // 3. Consumer<T>: void accept(T t) -> Consumes data with side effects\r
        Consumer<String> reportPrinter = message -> System.out.println("  [Audit Print] " + message);\r
\r
        // 4. Supplier<T>: T get() -> Supplies / generates a value\r
        Supplier<String> currentAcademicHub = () -> "Barrackpore Central IT Hub";\r
\r
        // Executing the Big 4:\r
        double businessTurnover = 3500000.0;\r
        if (isEligibleForGst.test(businessTurnover)) {\r
            String formattedTurnover = currencyFormatter.apply(businessTurnover);\r
            reportPrinter.accept("GST Registration Mandatory for turnover: " + formattedTurnover);\r
        }\r
        System.out.println("  Registered at: " + currentAcademicHub.get());\r
\r
        System.out.println("\\n==========================================================================");\r
    }\r
}`,i=`================================================================================\r
JAVA CORE TUTORIAL - QUICK REVISION GUIDE\r
Module 009_002: Built-in Functional Interfaces\r
Topic 1: The Big 4 Core Interfaces\r
Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
================================================================================\r
\r
1. THE BIG 4 INTERFACES:\r
   - 'Predicate<T>': 'boolean test(T)' (Filter/Check).\r
   - 'Function<T, R>': 'R apply(T)' (Map/Transform).\r
   - 'Consumer<T>': 'void accept(T)' (Print/Process).\r
   - 'Supplier<T>': 'T get()' (Generate/Supply).\r
\r
================================================================================\r
Classroom Practice: Barrackpore Academy | Mentor: Sukanta Hui\r
================================================================================`,s=[{question:"Explain the roles, input/output types, and SAM methods of the Big 4 Java Functional Interfaces.",shortAnswer:"1. 'Predicate<T>': 'boolean test(T t)' – Accepts 1 argument of type T, returns boolean (Condition testing/filtering). 2. 'Function<T, R>': 'R apply(T t)' – Accepts 1 argument of type T, returns transformed value of type R (Data mapping). 3. 'Consumer<T>': 'void accept(T t)' – Accepts 1 argument of type T, returns void (Side-effect actions like printing/saving). 4. 'Supplier<T>': 'T get()' – Takes 0 arguments, returns a new/cached value of type T (Lazy generation/factory).",explanation:"Core matrix of the Big 4 foundational functional interfaces.",hint:"Predicate tests (T → boolean), Function transforms (T → R), Consumer consumes (T → void), Supplier generates (() → T).",level:"Beginner",codeExample:"Predicate<T> (test), Function<T,R> (apply), Consumer<T> (accept), Supplier<T> (get)"}];function x(){return e.jsxs("div",{className:"space-y-12 px-4 md:px-8 py-8 text-slate-200 bg-slate-900 min-h-screen",children:[e.jsxs("header",{className:"space-y-4 border-b border-slate-800 pb-6",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"px-3 py-1 bg-sky-500/10 text-sky-400 border border-sky-500/20 text-xs font-semibold rounded-full uppercase tracking-wider",children:"Module 009_002 · Topic 1"}),e.jsx("span",{className:"px-3 py-1 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-xs font-semibold rounded-full",children:"The Big 4 Core"})]}),e.jsxs("h1",{className:"text-xl sm:text-2xl md:text-3xl font-bold text-white tracking-tight",children:["The Big 4 Core Interfaces: ",e.jsx("code",{className:"text-emerald-400 font-mono",children:"Predicate"}),", ",e.jsx("code",{className:"text-sky-400 font-mono",children:"Function"}),", ",e.jsx("code",{className:"text-purple-400 font-mono",children:"Consumer"})," & ",e.jsx("code",{className:"text-amber-400 font-mono",children:"Supplier"})]}),e.jsx("p",{className:"text-base md:text-lg text-slate-400 leading-relaxed max-w-4xl",children:"Master the four foundational pillars of modern Java: comparing condition testers, transformative mappers, side-effect consumers, and lazy factory suppliers."})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsxs("h2",{className:"text-2xl font-bold text-emerald-400 flex items-center gap-2",children:[e.jsx("span",{children:"💻"})," Hands-On Java Demo Code"]}),e.jsx(t,{fileModule:o,title:"BigFourCoreInterfacesOverviewDemo.java",highlightLines:[7,8,9,10,19,20,22,23,25,26,28,29]})]}),e.jsx("section",{className:"space-y-4",children:e.jsx(r,{title:"Big 4 Interfaces FAQs",questions:s})}),e.jsx("section",{className:"space-y-4",children:e.jsx(n,{content:i,title:"Module 009_002 Topic 1: The Big 4 Core Interfaces",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Printable Note",downloadFileName:"009_002_topic1_big_four_core_interfaces_note.txt"})}),e.jsx(a,{note:"Memorize the Big 4 by their verbs: Predicate TESTS (yes/no), Function TRANSFORMS (A into B), Consumer ACCEPTS (eats data without returning anything), and Supplier GIVES (supplies data out of thin air)! — Sukanta Hui"})]})}export{x as default};
