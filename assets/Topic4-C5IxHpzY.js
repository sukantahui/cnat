import{j as e}from"./vendor-react-core-Doz9nIC6.js";import{J as t}from"./JavaFileLoader-BfBG3xz_.js";import{F as n}from"./FAQTemplate-BHhlgA96.js";import{P as r}from"./PlainTextPrint-C08xhKA4.js";import{T as a}from"./TeacherSukantaHui-DerPxfxp.js";import"./JavaCodeBlock-BwsLxS3r.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-CH1iX9C8.js";const i=`/**\r
 * Java Core Tutorial - Module 009_003: Method & Constructor References\r
 * Topic 4: Kind 2: Bound Instance Method Reference (instanceRef::instanceMethodName)\r
 * Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
 */\r
\r
package com.coderaccotax.javatutorial.functional;\r
\r
import java.util.List;\r
import java.util.function.Consumer;\r
\r
class StudentInvoiceNotifier {\r
    private final String branchCode;\r
\r
    public StudentInvoiceNotifier(String branchCode) {\r
        this.branchCode = branchCode;\r
    }\r
\r
    public void dispatchNotification(String studentName) {\r
        System.out.printf("  [%s Branch] Invoice notification sent to: %s%n", branchCode, studentName);\r
    }\r
}\r
\r
public class BoundInstanceMethodReferenceDemo {\r
\r
    public static void main(String[] args) {\r
        System.out.println("==========================================================================");\r
        System.out.println(" TOPIC 4: BOUND INSTANCE METHOD REFERENCE (instanceRef::method) - BARRACKPORE");\r
        System.out.println("==========================================================================\\n");\r
\r
        // 1. Pre-existing specific object instance:\r
        StudentInvoiceNotifier barrackporeNotifier = new StudentInvoiceNotifier("BKP-01");\r
\r
        List<String> students = List.of("Swadeep Paul", "Tuhina Das", "Abhronila Das");\r
\r
        // 2. Bound Instance Method Reference:\r
        // Lambda: s -> barrackporeNotifier.dispatchNotification(s)\r
        Consumer<String> notifierConsumer = barrackporeNotifier::dispatchNotification;\r
\r
        System.out.println(">>> 1. Dispatching via Bound Reference (barrackporeNotifier::dispatchNotification):");\r
        students.forEach(notifierConsumer);\r
\r
        // 3. Classic JDK Example: System.out is a static instance of PrintStream!\r
        // System.out::println is a BOUND instance method reference to the 'System.out' PrintStream object!\r
        System.out.println("\\n>>> 2. Classic JDK Bound Reference (System.out::println):");\r
        students.forEach(System.out::println);\r
\r
        System.out.println("\\n==========================================================================");\r
    }\r
}`,o=`================================================================================\r
JAVA CORE TUTORIAL - QUICK REVISION GUIDE\r
Module 009_003: Method & Constructor References\r
Topic 4: Bound Instance Method References\r
Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
================================================================================\r
\r
1. BOUND INSTANCE METHOD REFERENCES:\r
   - Syntax: 'instanceRef::instanceMethodName'.\r
   - Bound to a SPECIFIC object instance created beforehand.\r
   - Equivalence: 'x → myObject.doSomething(x)'.\r
   - 'System.out::println' is bound to the 'System.out' PrintStream object.\r
\r
================================================================================\r
Classroom Practice: Barrackpore Academy | Mentor: Sukanta Hui\r
================================================================================`,s=[{question:"What is a 'Bound Instance Method Reference' ('instanceRef::instanceMethodName') and why is 'System.out::println' an example?",shortAnswer:"A 'Bound Instance Method Reference' is bound to a specific, pre-existing object instance outside the lambda. When invoked, the method is always called on that exact object instance, and the functional interface arguments are passed as method parameters. 'System.out::println' is a bound instance method reference because 'System.out' is a specific, pre-instantiated 'java.io.PrintStream' object; the method reference binds the 'println' method to that specific 'System.out' instance.",explanation:"Bound instance method reference mechanics and object target binding.",hint:"Bound to a specific existing object instance; method calls are dispatched directly to that object.",level:"Intermediate",codeExample:"PrintStream out = System.out; Consumer<String> c = out::println;"}];function x(){return e.jsxs("div",{className:"space-y-12 px-4 md:px-8 py-8 text-slate-200 bg-slate-900 min-h-screen",children:[e.jsxs("header",{className:"space-y-4 border-b border-slate-800 pb-6",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"px-3 py-1 bg-sky-500/10 text-sky-400 border border-sky-500/20 text-xs font-semibold rounded-full uppercase tracking-wider",children:"Module 009_003 · Topic 4"}),e.jsx("span",{className:"px-3 py-1 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-xs font-semibold rounded-full",children:"Bound Instance References"})]}),e.jsxs("h1",{className:"text-xl sm:text-2xl md:text-3xl font-bold text-white tracking-tight",children:["Kind 2: Reference to an ",e.jsx("code",{className:"text-emerald-400 font-mono",children:"Instance Method"})," of a Particular Object (",e.jsx("code",{className:"text-sky-400 font-mono",children:"obj::method"}),")"]}),e.jsxs("p",{className:"text-base md:text-lg text-slate-400 leading-relaxed max-w-4xl",children:["Bind execution to specific instances: exploring bound instance method references, analyzing target object lifecycles, and demystifying the ubiquitous ",e.jsx("code",{className:"text-emerald-300 font-mono",children:"System.out::println"})," handle."]})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsxs("h2",{className:"text-2xl font-bold text-emerald-400 flex items-center gap-2",children:[e.jsx("span",{children:"💻"})," Hands-On Java Demo Code"]}),e.jsx(t,{fileModule:i,title:"BoundInstanceMethodReferenceDemo.java",highlightLines:[7,10,15,16,26,27,30,31,36,37]})]}),e.jsx("section",{className:"space-y-4",children:e.jsx(n,{title:"Bound References FAQs",questions:s})}),e.jsx("section",{className:"space-y-4",children:e.jsx(r,{content:o,title:"Module 009_003 Topic 4: Bound Instance References",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Printable Note",downloadFileName:"009_003_topic4_bound_instance_references_note.txt"})}),e.jsx(a,{note:"Whenever you already have an object sitting in a variable (like 'notifier' or 'System.out'), writing 'notifier::dispatchNotification' binds the method to that specific object! — Sukanta Hui"})]})}export{x as default};
