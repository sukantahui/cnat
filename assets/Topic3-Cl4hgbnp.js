import{j as n}from"./vendor-react-core-Doz9nIC6.js";import{J as e}from"./JavaFileLoader-BfBG3xz_.js";import{F as t}from"./FAQTemplate-BHhlgA96.js";import{P as r}from"./PlainTextPrint-C08xhKA4.js";import{T as a}from"./TeacherSukantaHui-BaJcBHAy.js";import"./JavaCodeBlock-BwsLxS3r.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-8ao-0upJ.js";const s=`/**\r
 * Java Core Tutorial - Module 003_007: Nested & Inner Classes\r
 * Topic 3: Instantiating Member Inner Classes: Outer.Inner inner = outer.new Inner();\r
 * Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
 */\r
\r
package com.coderaccotax.javatutorial.nested;\r
\r
public class MemberInnerInstantiationSyntaxDemo {\r
\r
    public class Engine {\r
        public void start() {\r
            System.out.println("  V8 Twin-Turbo Engine Started Successfully!");\r
        }\r
    }\r
\r
    public static void main(String[] args) {\r
        System.out.println("==========================================================================");\r
        System.out.println(" TOPIC 3: outer.new Inner() INSTANTIATION SYNTAX - BARRACKPORE");\r
        System.out.println("==========================================================================\\n");\r
\r
        System.out.println(">>> 2 Ways to Instantiate a Member Inner Class:");\r
        System.out.println();\r
        System.out.println("  STYLE 1: Two-Step Explicit Instantiation:");\r
        MemberInnerInstantiationSyntaxDemo car = new MemberInnerInstantiationSyntaxDemo();\r
        MemberInnerInstantiationSyntaxDemo.Engine engine1 = car.new Engine();\r
        engine1.start();\r
\r
        System.out.println();\r
        System.out.println("  STYLE 2: Inline Chained Instantiation:");\r
        MemberInnerInstantiationSyntaxDemo.Engine engine2 = new MemberInnerInstantiationSyntaxDemo().new Engine();\r
        engine2.start();\r
\r
        System.out.println("\\n>>> SYNTAX RULE: Use 'outerRef.new InnerClass()' to construct member inner instances.");\r
\r
        System.out.println("\\n==========================================================================");\r
    }\r
}`,i=`================================================================================\r
JAVA CORE TUTORIAL - QUICK REVISION GUIDE\r
Module 003_007: Nested & Inner Classes\r
Topic 3: Member Inner Instantiation Syntax\r
Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
================================================================================\r
\r
1. INSTANTIATION SYNTAX:\r
   - Style 1: 'Outer outer = new Outer(); Outer.Inner in = outer.new Inner();'\r
   - Style 2: 'Outer.Inner in = new Outer().new Inner();'\r
   - 'new Outer.Inner()' only works for STATIC nested classes.\r
\r
================================================================================\r
Classroom Practice: Barrackpore Academy | Mentor: Sukanta Hui\r
================================================================================`,o=[{question:"What is the exact Java syntax to instantiate a non-static member inner class named 'Inner' of class 'Outer' from a static method?",shortAnswer:"You must first create an instance of 'Outer' and then invoke '.new Inner()' on that instance reference: 'Outer outer = new Outer(); Outer.Inner inner = outer.new Inner();' (or shorthand: 'Outer.Inner inner = new Outer().new Inner();').",explanation:"Attempting 'new Outer.Inner()' will cause a compilation error for non-static classes.",hint:"Use 'outerInstance.new InnerClass()'.",level:"Beginner",codeExample:"Outer.Inner inner = new Outer().new Inner();"}];function b(){return n.jsxs("div",{className:"space-y-12 px-4 md:px-8 py-8 text-slate-200 bg-slate-900 min-h-screen",children:[n.jsxs("header",{className:"space-y-4 border-b border-slate-800 pb-6",children:[n.jsxs("div",{className:"flex items-center gap-3",children:[n.jsx("span",{className:"px-3 py-1 bg-sky-500/10 text-sky-400 border border-sky-500/20 text-xs font-semibold rounded-full uppercase tracking-wider",children:"Module 003_007 · Topic 3"}),n.jsx("span",{className:"px-3 py-1 bg-amber-500/10 text-amber-400 border border-amber-500/20 text-xs font-semibold rounded-full",children:"Instantiation Syntax"})]}),n.jsxs("h1",{className:"text-xl sm:text-2xl md:text-3xl font-bold text-white tracking-tight",children:["Instantiating Member Inner Classes: ",n.jsx("code",{className:"text-emerald-400 font-mono",children:"outer.new Inner()"})]}),n.jsxs("p",{className:"text-base md:text-lg text-slate-400 leading-relaxed max-w-4xl",children:["Master the unique Java instantiation syntax: constructing inner instances with ",n.jsx("code",{className:"text-emerald-300 font-mono",children:"car.new Engine()"})," and chained one-liners."]})]}),n.jsxs("section",{className:"space-y-4",children:[n.jsxs("h2",{className:"text-2xl font-bold text-emerald-400 flex items-center gap-2",children:[n.jsx("span",{children:"💻"})," Hands-On Java Demo Code"]}),n.jsx(e,{fileModule:s,title:"MemberInnerInstantiationSyntaxDemo.java",highlightLines:[7,10,19,20,21,26,27]})]}),n.jsx("section",{className:"space-y-4",children:n.jsx(t,{title:"Instantiation Syntax FAQs",questions:o})}),n.jsx("section",{className:"space-y-4",children:n.jsx(r,{content:i,title:"Module 003_007 Topic 3: Member Inner Instantiation",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Printable Note",downloadFileName:"003_007_topic3_member_inner_instantiation_note.txt"})}),n.jsx(a,{note:"Many students make the mistake of writing 'new Outer.Inner()'. For a non-static class, that will cause a compiler error! You must write 'outerObject.new Inner()'! — Sukanta Hui"})]})}export{b as default};
