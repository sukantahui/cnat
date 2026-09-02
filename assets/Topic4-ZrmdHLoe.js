import{j as e}from"./vendor-react-core-Doz9nIC6.js";import{J as t}from"./JavaFileLoader-BfBG3xz_.js";import{F as a}from"./FAQTemplate-BHhlgA96.js";import{P as n}from"./PlainTextPrint-C08xhKA4.js";import{T as s}from"./TeacherSukantaHui-RpFLNJ5A.js";import"./JavaCodeBlock-BwsLxS3r.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-wprqVFW_.js";const r=`/**\r
 * Java Core Tutorial - Module 003_007: Nested & Inner Classes\r
 * Topic 4: Resolving Variable Shadowing: The OuterClass.this Explicit Reference Syntax\r
 * Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
 */\r
\r
package com.coderaccotax.javatutorial.nested;\r
\r
public class OuterClassThisShadowingDemo {\r
\r
    // Variable in Outer Class scope:\r
    private String centerLocation = "Barrackpore Hub (Outer)";\r
\r
    public class InnerDepartment {\r
        // Variable shadowing the outer variable with the same name:\r
        private String centerLocation = "Software Lab (Inner)";\r
\r
        public void printLocations(String centerLocation) {\r
            // Local method parameter shadows both!\r
            System.out.println("  1. Method Parameter Scope  : " + centerLocation);\r
            System.out.println("  2. Inner Class Scope (this): " + this.centerLocation);\r
            System.out.println("  3. Outer Class Scope (Outer.this): " + OuterClassThisShadowingDemo.this.centerLocation);\r
        }\r
    }\r
\r
    public static void main(String[] args) {\r
        System.out.println("==========================================================================");\r
        System.out.println(" TOPIC 4: OuterClass.this SHADOWING RESOLUTION - BARRACKPORE");\r
        System.out.println("==========================================================================\\n");\r
\r
        OuterClassThisShadowingDemo outer = new OuterClassThisShadowingDemo();\r
        OuterClassThisShadowingDemo.InnerDepartment inner = outer.new InnerDepartment();\r
\r
        System.out.println(">>> Resolving 3 Tiers of Shadowed Identifiers:");\r
        inner.printLocations("Trainee Desk #4 (Local Param)");\r
\r
        System.out.println("\\n==========================================================================");\r
    }\r
}`,i=`================================================================================\r
JAVA CORE TUTORIAL - QUICK REVISION GUIDE\r
Module 003_007: Nested & Inner Classes\r
Topic 4: OuterClass.this Syntax\r
Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
================================================================================\r
\r
1. SHADOWING DISAMBIGUATION:\r
   - 'name'                 → Local variable / parameter.\r
   - 'this.name'            → Inner class instance variable.\r
   - 'OuterClass.this.name' → Enclosing Outer class instance variable.\r
\r
================================================================================\r
Classroom Practice: Barrackpore Academy | Mentor: Sukanta Hui\r
================================================================================`,o=[{question:"How do you explicitly reference an outer class instance variable when it is shadowed by an inner class member and a method parameter?",shortAnswer:"Use the syntax 'OuterClassName.this.fieldName'. In Java, 'this.fieldName' refers to the inner class instance variable, whereas prefixing the outer class name ('OuterClass.this') directs the compiler to the enclosing outer instance.",explanation:"Standard resolution pattern for deeply nested GUI listeners and builder classes.",hint:"Use OuterClass.this.variableName to disambiguate outer instance state.",level:"Intermediate",codeExample:"System.out.println(OuterClass.this.centerLocation);"}];function b(){return e.jsxs("div",{className:"space-y-12 px-4 md:px-8 py-8 text-slate-200 bg-slate-900 min-h-screen",children:[e.jsxs("header",{className:"space-y-4 border-b border-slate-800 pb-6",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"px-3 py-1 bg-sky-500/10 text-sky-400 border border-sky-500/20 text-xs font-semibold rounded-full uppercase tracking-wider",children:"Module 003_007 · Topic 4"}),e.jsx("span",{className:"px-3 py-1 bg-indigo-500/10 text-indigo-400 border border-indigo-500/20 text-xs font-semibold rounded-full",children:"Scope Disambiguation"})]}),e.jsxs("h1",{className:"text-xl sm:text-2xl md:text-3xl font-bold text-white tracking-tight",children:["The ",e.jsx("code",{className:"text-emerald-400 font-mono",children:"OuterClass.this"})," Syntax for Variable Shadowing"]}),e.jsxs("p",{className:"text-base md:text-lg text-slate-400 leading-relaxed max-w-4xl",children:["Disambiguate three levels of variable scope: cleanly accessing method parameters, inner class instance fields with ",e.jsx("code",{className:"text-sky-300 font-mono",children:"this"}),", and enclosing outer fields with ",e.jsx("code",{className:"text-emerald-300 font-mono",children:"Outer.this"}),"."]})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsxs("h2",{className:"text-2xl font-bold text-emerald-400 flex items-center gap-2",children:[e.jsx("span",{children:"💻"})," Hands-On Java Demo Code"]}),e.jsx(t,{fileModule:r,title:"OuterClassThisShadowingDemo.java",highlightLines:[7,10,14,18,19,20]})]}),e.jsx("section",{className:"space-y-4",children:e.jsx(a,{title:"Variable Shadowing FAQs",questions:o})}),e.jsx("section",{className:"space-y-4",children:e.jsx(n,{content:i,title:"Module 003_007 Topic 4: OuterClass.this Syntax",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Printable Note",downloadFileName:"003_007_topic4_outer_this_note.txt"})}),e.jsx(s,{note:"Whenever you have the same variable name in a method parameter, inner class, and outer class, 'OuterClass.this.field' is your universal rescue syntax! — Sukanta Hui"})]})}export{b as default};
