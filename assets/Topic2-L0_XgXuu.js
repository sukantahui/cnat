import{j as e}from"./vendor-react-core-Doz9nIC6.js";import{J as n}from"./JavaFileLoader-BfBG3xz_.js";import{F as t}from"./FAQTemplate-CkSqDH4B.js";import{P as r}from"./PlainTextPrint-C08xhKA4.js";import{T as a}from"./TeacherSukantaHui-CC0AKmkm.js";import"./JavaCodeBlock-BwsLxS3r.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-BtJHuk7w.js";const s=`/**\r
 * Java Core Tutorial - Module 003_007: Nested & Inner Classes\r
 * Topic 2: Non-Static Member Inner Class: Implicit Reference & Access to Outer Private Fields\r
 * Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
 */\r
\r
package com.coderaccotax.javatutorial.nested;\r
\r
public class MemberInnerClassFoundationsDemo {\r
\r
    private String academyName = "Coder & AccoTax Academy";\r
    private String branch = "Barrackpore Main Campus";\r
    private int batchStrength = 45;\r
\r
    // Non-Static Member Inner Class:\r
    public class BatchCoordinator {\r
        private String coordinatorName = "Swadeep Paul";\r
\r
        public void printBatchSummary() {\r
            // Can seamlessly access all outer private fields without getters:\r
            System.out.println("  Coordinator   : " + coordinatorName);\r
            System.out.println("  Academy       : " + academyName);\r
            System.out.println("  Branch        : " + branch);\r
            System.out.println("  Total Trainees: " + batchStrength);\r
        }\r
    }\r
\r
    public static void main(String[] args) {\r
        System.out.println("==========================================================================");\r
        System.out.println(" TOPIC 2: MEMBER INNER CLASS FOUNDATIONS - BARRACKPORE");\r
        System.out.println("==========================================================================\\n");\r
\r
        // Step 1: Create an enclosing Outer class instance:\r
        MemberInnerClassFoundationsDemo outerCampus = new MemberInnerClassFoundationsDemo();\r
\r
        // Step 2: Create the Member Inner Class instance bound to outerCampus:\r
        MemberInnerClassFoundationsDemo.BatchCoordinator coordinator = outerCampus.new BatchCoordinator();\r
\r
        System.out.println(">>> Executing Member Inner Class Method:");\r
        coordinator.printBatchSummary();\r
\r
        System.out.println("\\n>>> NOTE: A Member Inner class instance CANNOT exist without an enclosing Outer class instance!");\r
\r
        System.out.println("\\n==========================================================================");\r
    }\r
}`,o=`================================================================================\r
JAVA CORE TUTORIAL - QUICK REVISION GUIDE\r
Module 003_007: Nested & Inner Classes\r
Topic 2: Member Inner Class Foundations\r
Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
================================================================================\r
\r
1. MEMBER INNER CLASS:\r
   - Bound to an outer instance.\r
   - Holds compiler-generated 'this$0' reference.\r
   - Full access to all outer private fields and methods.\r
   - Instantiation: 'outerInstance.new InnerClass()'.\r
\r
================================================================================\r
Classroom Practice: Barrackpore Academy | Mentor: Sukanta Hui\r
================================================================================`,i=[{question:"Why does a non-static Member Inner Class instance hold an implicit reference to its enclosing Outer class?",shortAnswer:"Because it is conceptually part of an outer instance. When the Java compiler compiles a member inner class, it secretly injects a hidden final field 'this$0' pointing to the outer instance, enabling transparent access to outer private variables and methods.",explanation:"This hidden reference can cause memory leaks if the inner class outlives the outer class in event listeners.",hint:"The compiler injects a hidden 'this$0' reference to the outer instance.",level:"Intermediate",codeExample:"Outer outer = new Outer();\\nOuter.Inner inner = outer.new Inner();"}];function b(){return e.jsxs("div",{className:"space-y-12 px-4 md:px-8 py-8 text-slate-200 bg-slate-900 min-h-screen",children:[e.jsxs("header",{className:"space-y-4 border-b border-slate-800 pb-6",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"px-3 py-1 bg-sky-500/10 text-sky-400 border border-sky-500/20 text-xs font-semibold rounded-full uppercase tracking-wider",children:"Module 003_007 · Topic 2"}),e.jsx("span",{className:"px-3 py-1 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-xs font-semibold rounded-full",children:"Member Inner Class"})]}),e.jsx("h1",{className:"text-3xl md:text-4xl font-extrabold text-white tracking-tight",children:"Non-Static Member Inner Class: Implicit Reference & Outer Private Field Access"}),e.jsxs("p",{className:"text-base md:text-lg text-slate-400 leading-relaxed max-w-4xl",children:["Understand how inner class instances bind to enclosing objects: accessing private state directly and exploring the compiler-generated ",e.jsx("code",{className:"text-emerald-300 font-mono",children:"this$0"})," reference pointer."]})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsxs("h2",{className:"text-2xl font-bold text-emerald-400 flex items-center gap-2",children:[e.jsx("span",{children:"💻"})," Hands-On Java Demo Code"]}),e.jsx(n,{fileModule:s,title:"MemberInnerClassFoundationsDemo.java",highlightLines:[7,10,11,14,17,18,19,30,33]})]}),e.jsx("section",{className:"space-y-4",children:e.jsx(t,{title:"Member Inner Class FAQs",questions:i})}),e.jsx("section",{className:"space-y-4",children:e.jsx(r,{content:o,title:"Module 003_007 Topic 2: Member Inner Class",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Printable Note",downloadFileName:"003_007_topic2_member_inner_class_note.txt"})}),e.jsx(a,{note:"A member inner class is like a room inside a house. You cannot enter the room (create the Inner instance) without first having a house (Outer instance) to build it in! — Sukanta Hui"})]})}export{b as default};
