import{j as e}from"./vendor-react-core-Doz9nIC6.js";import{J as r}from"./JavaFileLoader-BfBG3xz_.js";import{F as n}from"./FAQTemplate-CkSqDH4B.js";import{P as t}from"./PlainTextPrint-C08xhKA4.js";import{T as a}from"./TeacherSukantaHui-CC0AKmkm.js";import"./JavaCodeBlock-BwsLxS3r.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-BtJHuk7w.js";const o=`/**\r
 * Java Core Tutorial - Module 002_005: Inheritance, IS-A vs HAS-A, Composition & Aggregation\r
 * Topic 7: Constructor Execution Sequence in an Inheritance Hierarchy\r
 * Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
 */\r
\r
package com.coderaccotax.javatutorial.inheritance;\r
\r
public class ConstructorHierarchyExecutionSequenceDemo {\r
\r
    // Grandparent Class\r
    public static class GrandParent {\r
        public GrandParent() {\r
            System.out.println("  [1] GrandParent Constructor: Foundation established.");\r
        }\r
    }\r
\r
    // Parent Class\r
    public static class Parent extends GrandParent {\r
        public Parent() {\r
            // Implicit super() invokes GrandParent()\r
            System.out.println("  [2] Parent Constructor: Intermediate tier configured.");\r
        }\r
    }\r
\r
    // Child Class\r
    public static class Child extends Parent {\r
        public Child() {\r
            // Implicit super() invokes Parent()\r
            System.out.println("  [3] Child Constructor: Final specialized instance ready!");\r
        }\r
    }\r
\r
    public static void main(String[] args) {\r
        System.out.println("==========================================================================");\r
        System.out.println(" TOPIC 7: CONSTRUCTOR EXECUTION SEQUENCE IN HIERARCHY - BARRACKPORE");\r
        System.out.println("==========================================================================\\n");\r
\r
        System.out.println(">>> Instantiating Child object ('new Child()'):\\n");\r
        Child c = new Child();\r
\r
        System.out.println("\\n>>> Order of Execution Rule:");\r
        System.out.println("  Constructors execute Top-Down from Object -> GrandParent -> Parent -> Child!");\r
\r
        System.out.println("\\n==========================================================================");\r
    }\r
}`,i=`================================================================================\r
JAVA CORE TUTORIAL - QUICK REVISION GUIDE\r
Module 002_005: Inheritance, IS-A vs HAS-A, Composition & Aggregation\r
Topic 7: Constructor Execution Sequence in Hierarchy\r
Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
================================================================================\r
\r
1. HIERARCHY CONSTRUCTOR DISPATCH:\r
   - Invocation order: Child &rarr; Parent &rarr; GrandParent (via super() calls).\r
   - Execution order: GrandParent &rarr; Parent &rarr; Child (bodies run top-down).\r
\r
================================================================================\r
Classroom Practice: Barrackpore Academy | Mentor: Sukanta Hui\r
================================================================================`,s=[{question:"What is the exact execution order of constructors in an inheritance hierarchy?",shortAnswer:"Top-down from the highest ancestor (Object) down through each intermediate class to the most derived subclass.",explanation:"Each child constructor delegates to its parent via 'super()' before executing its own body.",hint:"Top-down: Object -> GrandParent -> Parent -> Child.",level:"Beginner",codeExample:"// Execution order: GrandParent() -> Parent() -> Child()"}];function C(){return e.jsxs("div",{className:"space-y-12 px-4 md:px-8 py-8 text-slate-200 bg-slate-900 min-h-screen",children:[e.jsx("style",{children:`
          @keyframes fadeIn {
            from { opacity: 0; transform: translateY(8px); }
            to { opacity: 1; transform: translateY(0); }
          }
          .animate-fade-in { animation: fadeIn 0.5s ease-out forwards; }
        `}),e.jsxs("header",{className:"space-y-4 border-b border-slate-800 pb-6 animate-fade-in",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"px-3 py-1 bg-sky-500/10 text-sky-400 border border-sky-500/20 text-xs font-semibold rounded-full uppercase tracking-wider",children:"Module 002_005 · Topic 7"}),e.jsx("span",{className:"px-3 py-1 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-xs font-semibold rounded-full",children:"Lifecycle Order"})]}),e.jsx("h1",{className:"text-3xl md:text-4xl font-extrabold text-white tracking-tight",children:"Constructor Execution Sequence in an Inheritance Hierarchy"}),e.jsxs("p",{className:"text-base md:text-lg text-slate-400 leading-relaxed max-w-4xl",children:["Trace how the JVM coordinates multi-tier constructor dispatch: delegating bottom-up via ",e.jsx("code",{className:"text-emerald-300 font-mono",children:"super()"})," and executing initialization bodies top-down."]})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsxs("h2",{className:"text-2xl font-bold text-emerald-400 flex items-center gap-2",children:[e.jsx("span",{children:"💻"})," Hands-On Java Demo Code"]}),e.jsx(r,{fileModule:o,title:"ConstructorHierarchyExecutionSequenceDemo.java",highlightLines:[12,19,27,37]})]}),e.jsx("section",{className:"space-y-4",children:e.jsx(n,{title:"Constructor Execution Sequence FAQs",questions:s})}),e.jsx("section",{className:"space-y-4",children:e.jsx(t,{content:i,title:"Module 002_005 Topic 7: Constructor Execution Order",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Printable Note",downloadFileName:"002_005_topic7_constructor_sequence_note.txt"})}),e.jsx(a,{note:"Constructor calls travel up like a rocket (Child -> Parent -> Grandparent), and execute down like a waterfall (Grandparent -> Parent -> Child)! — Sukanta Hui"})]})}export{C as default};
