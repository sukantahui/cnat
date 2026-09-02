import{j as e}from"./vendor-react-core-Doz9nIC6.js";import{J as n}from"./JavaFileLoader-BfBG3xz_.js";import{F as a}from"./FAQTemplate-BHhlgA96.js";import{P as s}from"./PlainTextPrint-C08xhKA4.js";import{T as t}from"./TeacherSukantaHui-RpFLNJ5A.js";import"./JavaCodeBlock-BwsLxS3r.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-wprqVFW_.js";const o=`/**\r
 * Java Core Tutorial - Module 009_001: Lambda Expressions & Lexical Scoping\r
 * Topic 7: Lexical Scoping: What 'this' and 'super' Point to Inside a Lambda Expression\r
 * Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
 */\r
\r
package com.coderaccotax.javatutorial.functional;\r
\r
public class LambdaLexicalScopingScopeDemo {\r
\r
    private final String locationName = "Barrackpore Central Hub";\r
\r
    public void demonstrateLexicalThis() {\r
        // 1. In Anonymous Inner Class: 'this' refers to the ANONYMOUS class instance:\r
        Runnable anonRunnable = new Runnable() {\r
            private final String locationName = "Anonymous Inner Scope";\r
\r
            @Override\r
            public void run() {\r
                System.out.println(">>> 1. Anonymous 'this.locationName': " + this.locationName); // Prints "Anonymous Inner Scope"\r
            }\r
        };\r
        anonRunnable.run();\r
\r
        // 2. In Lambda Expression: 'this' refers to the ENCLOSING outer instance (Lexical Scoping):\r
        Runnable lambdaRunnable = () -> {\r
            // Lambdas do NOT introduce a new 'this' scope!\r
            System.out.println(">>> 2. Lambda 'this.locationName'   : " + this.locationName); // Prints "Barrackpore Central Hub"\r
        };\r
        lambdaRunnable.run();\r
    }\r
\r
    public static void main(String[] args) {\r
        System.out.println("==========================================================================");\r
        System.out.println(" TOPIC 7: LEXICAL SCOPING & 'this' BINDING - BARRACKPORE");\r
        System.out.println("==========================================================================\\n");\r
\r
        new LambdaLexicalScopingScopeDemo().demonstrateLexicalThis();\r
\r
        System.out.println("\\n>>> LEXICAL SCOPING RULE (Brian Goetz):");\r
        System.out.println("  - A Lambda expression is LEXICALLY SCOPED.");\r
        System.out.println("  - It does NOT hide (shadow) variables from the enclosing scope.");\r
        System.out.println("  - 'this' and 'super' in a lambda have the EXACT SAME meaning as they do outside the lambda!");\r
\r
        System.out.println("\\n==========================================================================");\r
    }\r
}`,r=`================================================================================\r
JAVA CORE TUTORIAL - QUICK REVISION GUIDE\r
Module 009_001: Lambda Expressions & Lexical Scoping\r
Topic 7: Lexical Scoping & 'this'\r
Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
================================================================================\r
\r
1. LEXICAL SCOPING IN LAMBDAS:\r
   - Lambdas do NOT create their own 'this' scope.\r
   - 'this' inside a lambda = 'this' of the enclosing outer class.\r
   - 'super' inside a lambda = 'super' of the enclosing outer class.\r
   - Variable names cannot shadow outer variables (e.g. 'int x' cannot be re-declared in lambda parameter).\r
\r
================================================================================\r
Classroom Practice: Barrackpore Academy | Mentor: Sukanta Hui\r
================================================================================`,i=[{question:"What is 'Lexical Scoping' in Java Lambda expressions and what does the 'this' keyword reference inside a lambda?",shortAnswer:"Lambda expressions are 'Lexically Scoped', meaning they do not introduce a new variable scope or shadow the enclosing class scope. Inside a lambda expression, the 'this' and 'super' keywords have the exact same meaning as in the surrounding enclosing method: they refer directly to the instance of the enclosing outer class. In contrast, inside an Anonymous Inner Class, 'this' refers to the anonymous inner class instance itself.",explanation:"Core lexical scoping principles of Java 8 Lambdas (JLS §15.27.2).",hint:"Lambda is lexically scoped; 'this' inside a lambda refers to the enclosing outer class instance, not the lambda.",level:"Intermediate",codeExample:"Runnable r = () → System.out.println(this.toString()); // Refers to outer enclosing class!"}];function b(){return e.jsxs("div",{className:"space-y-12 px-4 md:px-8 py-8 text-slate-200 bg-slate-900 min-h-screen",children:[e.jsxs("header",{className:"space-y-4 border-b border-slate-800 pb-6",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"px-3 py-1 bg-sky-500/10 text-sky-400 border border-sky-500/20 text-xs font-semibold rounded-full uppercase tracking-wider",children:"Module 009_001 · Topic 7"}),e.jsx("span",{className:"px-3 py-1 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-xs font-semibold rounded-full",children:"Lexical Scoping"})]}),e.jsxs("h1",{className:"text-xl sm:text-2xl md:text-3xl font-bold text-white tracking-tight",children:[e.jsx("code",{className:"text-emerald-400 font-mono",children:"Lexical Scoping"}),": What ",e.jsx("code",{className:"text-sky-400 font-mono",children:"this"})," & ",e.jsx("code",{className:"text-purple-400 font-mono",children:"super"})," Mean in Lambdas"]}),e.jsxs("p",{className:"text-base md:text-lg text-slate-400 leading-relaxed max-w-4xl",children:["Master lexical binding: understanding why lambdas do not shadow surrounding scope, and contrasting enclosing class ",e.jsx("code",{className:"text-emerald-300 font-mono",children:"this"})," references with anonymous inner class instances."]})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsxs("h2",{className:"text-2xl font-bold text-emerald-400 flex items-center gap-2",children:[e.jsx("span",{children:"💻"})," Hands-On Java Demo Code"]}),e.jsx(n,{fileModule:o,title:"LambdaLexicalScopingScopeDemo.java",highlightLines:[7,10,11,15,16,20,21,24,25]})]}),e.jsx("section",{className:"space-y-4",children:e.jsx(a,{title:"Lexical Scoping FAQs",questions:i})}),e.jsx("section",{className:"space-y-4",children:e.jsx(s,{content:r,title:"Module 009_001 Topic 7: Lexical Scoping",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Printable Note",downloadFileName:"009_001_topic7_lexical_scoping_note.txt"})}),e.jsx(t,{note:"Inside an Anonymous Inner Class, 'this' was a trap that pointed to the anonymous object itself! Inside a Lambda, 'this' behaves intuitively and points straight to your outer enclosing class! No more 'OuterClass.this' gymnastics needed! — Sukanta Hui"})]})}export{b as default};
