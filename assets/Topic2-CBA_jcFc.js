import{j as e}from"./vendor-react-core-Doz9nIC6.js";import{J as t}from"./JavaFileLoader-BfBG3xz_.js";import{F as n}from"./FAQTemplate-BHhlgA96.js";import{P as i}from"./PlainTextPrint-C08xhKA4.js";import{T as r}from"./TeacherSukantaHui-RpFLNJ5A.js";import"./JavaCodeBlock-BwsLxS3r.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-wprqVFW_.js";const a=`/**\r
 * Java Core Tutorial - Module 012_005: Interview Mastery & Tricky MCQs\r
 * Topic 2: Tricky Riddle 3 - Static Variable Hiding & Overriding Traps\r
 * Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
 */\r
\r
package com.coderaccotax.javatutorial.interview;\r
\r
public class TrickyRiddle3StaticHidingVsOverridingDemo {\r
\r
    public static class Parent {\r
        public static String name = "Parent Static Field";\r
        public static void print() {\r
            System.out.println("Parent static print()");\r
        }\r
        public void instancePrint() {\r
            System.out.println("Parent instance print()");\r
        }\r
    }\r
\r
    public static class Child extends Parent {\r
        public static String name = "Child Static Field"; // Hides Parent.name\r
        public static void print() {\r
            System.out.println("Child static print()"); // Hides Parent.print()\r
        }\r
        @Override\r
        public void instancePrint() {\r
            System.out.println("Child instance print() - Polymorphic Overriding!");\r
        }\r
    }\r
\r
    public static void main(String[] args) {\r
        System.out.println("==========================================================================");\r
        System.out.println(" TRICKY RIDDLE 3: STATIC METHOD & FIELD HIDING - BARRACKPORE");\r
        System.out.println("==========================================================================\\n");\r
\r
        Parent parentRef = new Child();\r
\r
        System.out.println("1. Static Field Access (parentRef.name):");\r
        System.out.println("   -> " + parentRef.name); // "Parent Static Field"\r
\r
        System.out.println("\r
2. Static Method Call (parentRef.print()):");\r
        System.out.print("   -> ");\r
        parentRef.print(); // Calls Parent.print()! (Static method hiding)\r
\r
        System.out.println("\r
3. Instance Method Call (parentRef.instancePrint()):");\r
        System.out.print("   -> ");\r
        parentRef.instancePrint(); // Calls Child.instancePrint()! (Dynamic dispatch)\r
\r
        System.out.println("\\n==========================================================================");\r
    }\r
}\r
`,s=`================================================================================\r
JAVA CORE TUTORIAL - QUICK REVISION GUIDE\r
Module 012_005: Interview Mastery & Tricky MCQs\r
Topic 2: Tricky Riddle 3 - Static Hiding vs Overriding\r
Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
================================================================================\r
\r
1. STATIC METHOD & FIELD HIDING:\r
   - Static members belong to the Class, not instances.\r
   - Bound at compile time using reference type ('Parent ref = new Child()').\r
   - Instance methods are dynamically dispatched at runtime via vtable.\r
\r
================================================================================\r
Classroom Practice: Barrackpore Academy | Mentor: Sukanta Hui\r
================================================================================\r
`,o=[{question:"Can static methods be overridden in Java?",shortAnswer:"No. Static methods can only be hidden, not overridden. Because static methods are bound at compile time based on the reference type, dynamic method dispatch (runtime polymorphism) does not apply to them.",explanation:"Static methods use invokestatic bytecode instruction bound at compile time.",hint:"Static methods are hidden at compile time, not overridden polymorphically.",level:"Beginner",codeExample:"Parent p = new Child(); p.staticMethod(); // Calls Parent"},{question:"What happens if a Child class attempts to declare an instance method with the same signature as a static method in the Parent class?",shortAnswer:"A compile-time error occurs: 'This instance method cannot override the static method from Parent'.",explanation:"Java compiler prohibits mixing static and instance signatures across inheritance.",hint:"Compiler error: instance method cannot override static method.",level:"Intermediate",codeExample:"// Compile Error: Cannot override static method with instance method"}];function y(){return e.jsxs("div",{className:"space-y-12 px-4 md:px-8 py-8 text-slate-200 bg-slate-900 min-h-screen",children:[e.jsxs("header",{className:"space-y-4 border-b border-slate-800 pb-6",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"px-3 py-1 bg-sky-500/10 text-sky-400 border border-sky-500/20 text-xs font-semibold rounded-full uppercase tracking-wider",children:"Module 012_005 · Topic 2"}),e.jsx("span",{className:"px-3 py-1 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-xs font-semibold rounded-full",children:"Interview Mastery & Tricky MCQs"})]}),e.jsxs("h1",{className:"text-xl sm:text-2xl md:text-3xl font-bold text-white tracking-tight",children:["Tricky Riddle 3: ",e.jsx("code",{className:"text-emerald-400 font-mono",children:"Static Variable Hiding & Overriding Traps"})]}),e.jsx("p",{className:"text-base md:text-lg text-slate-400 leading-relaxed max-w-4xl",children:"Compile-time binding: demonstrating why static methods and fields are hidden (not overridden) and depend solely on reference variable type."})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsxs("h2",{className:"text-2xl font-bold text-emerald-400 flex items-center gap-2",children:[e.jsx("span",{children:"💻"})," Hands-On Java Demo Code"]}),e.jsx(t,{fileModule:a,title:"TrickyRiddle3StaticHidingVsOverridingDemo.java",highlightLines:[18,25,34,43]})]}),e.jsx("section",{className:"space-y-4",children:e.jsx(n,{title:"Interview Riddles & MCQs FAQs",questions:o})}),e.jsx("section",{className:"space-y-4",children:e.jsx(i,{content:s,title:"Module 012_005 Topic 2: Tricky Riddle 3 - Static Hiding vs Overriding",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Printable Note",downloadFileName:"012_005_topic2_tricky_riddle_3_static_hiding_vs_overriding_note.txt"})}),e.jsx(r,{note:"Static methods and fields cannot be overridden polymorphically! They are resolved at compile-time based on the reference type, not the runtime object instance! Notice how parentRef.print() calls Parent! — Sukanta Hui"})]})}export{y as default};
