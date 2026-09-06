import{j as e}from"./vendor-react-core-Doz9nIC6.js";import{J as t}from"./JavaFileLoader-BfBG3xz_.js";import{F as r}from"./FAQTemplate-BHhlgA96.js";import{P as n}from"./PlainTextPrint-C08xhKA4.js";import{T as s}from"./TeacherSukantaHui-DDN87fI5.js";import"./JavaCodeBlock-BwsLxS3r.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-DEsnU7fn.js";const i=`/**\r
 * Java Core Tutorial - Module 002_002: Constructors, Chaining & Object Lifecycle\r
 * Topic 15: Can Constructors Be static, final, synchronized, or abstract?\r
 * Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
 */\r
\r
package com.coderaccotax.javatutorial.constructors;\r
\r
public class ProhibitedConstructorModifiersDemo {\r
\r
    public static class ModifierRulesCaseStudy {\r
        private String traineeName;\r
\r
        // Valid Constructor: Access Modifiers ONLY\r
        public ModifierRulesCaseStudy(String traineeName) {\r
            this.traineeName = traineeName;\r
        }\r
\r
        // ====================================================================\r
        // WHY PROHIBITED MODIFIERS CAUSE COMPILE-TIME ERRORS:\r
        // ====================================================================\r
        // 1. static: ILLEGAL!\r
        //    Constructors require an instance ('this') to populate fields.\r
        //    static members execute without any instance context.\r
        //    // public static ModifierRulesCaseStudy() {} -> COMPILE ERROR\r
\r
        // 2. final: ILLEGAL!\r
        //    final prevents method overriding in subclasses.\r
        //    Constructors are NEVER inherited or overridden in the first place!\r
        //    // public final ModifierRulesCaseStudy() {} -> COMPILE ERROR\r
\r
        // 3. abstract: ILLEGAL!\r
        //    abstract methods have no body and require subclass overrides.\r
        //    Constructors MUST initialize the instance's state.\r
        //    // public abstract ModifierRulesCaseStudy(); -> COMPILE ERROR\r
\r
        // 4. synchronized: ILLEGAL!\r
        //    Locking 'this' during construction is forbidden because the object\r
        //    is still being created on the private thread stack (no other thread can see it).\r
        //    // public synchronized ModifierRulesCaseStudy() {} -> COMPILE ERROR\r
    }\r
\r
    public static void main(String[] args) {\r
        System.out.println("==========================================================================");\r
        System.out.println(" TOPIC 15: PROHIBITED CONSTRUCTOR MODIFIERS - BARRACKPORE");\r
        System.out.println("==========================================================================\\n");\r
\r
        System.out.println(">>> 1. The 4 Forbidden Constructor Modifiers in Java:");\r
        System.out.println("  [X] static       -> modifier static not allowed here (needs 'this')");\r
        System.out.println("  [X] final        -> modifier final not allowed here (never overridden)");\r
        System.out.println("  [X] abstract     -> modifier abstract not allowed here (must initialize)");\r
        System.out.println("  [X] synchronized -> modifier synchronized not allowed here (thread-confined at birth)");\r
\r
        System.out.println("\\n>>> 2. Valid Modifiers Permitted on Constructors:");\r
        System.out.println("  [✔] public, protected, package-private, private");\r
\r
        System.out.println("\\n==========================================================================");\r
    }\r
}`,a=`================================================================================\r
JAVA CORE TUTORIAL - QUICK REVISION GUIDE\r
Module 002_002: Constructors, Constructor Chaining & Object Lifecycle\r
Topic 15: Prohibited Constructor Modifiers: static, final, synchronized, abstract\r
Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
================================================================================\r
\r
1. THE 4 PROHIBITED MODIFIERS:\r
   -----------------------------------------------------------------------------\r
   MODIFIER         WHY FORBIDDEN BY JLS COMPILER SPECIFICATION\r
   -----------------------------------------------------------------------------\r
   static           Requires 'this' instance; static has no instance context.\r
   final            Constructors cannot be inherited or overridden.\r
   abstract         Constructors must have an executable body to initialize fields.\r
   synchronized     Object is private to creating thread until publication.\r
   -----------------------------------------------------------------------------\r
\r
2. PERMITTED MODIFIERS:\r
   - Access modifiers ONLY: public, protected, default, private.\r
\r
================================================================================\r
Classroom Practice: Barrackpore Academy | Mentor: Sukanta Hui\r
================================================================================`,o=[{question:"Why can a constructor NOT be declared 'static' in Java?",shortAnswer:"Because constructors fundamentally operate on the newly allocated Heap object referenced by 'this', whereas static members have no 'this' instance context.",explanation:"Static members belong to the class in Metaspace. Constructors exist solely to initialize an individual object instance.",hint:"Constructors operate on 'this'; static has no 'this'.",level:"Beginner",codeExample:"// Compile Error: public static Student() {}"},{question:"Why can a constructor NOT be declared 'final' in Java?",shortAnswer:"Because constructors are not inherited and cannot be overridden by subclasses, making the 'final' keyword completely redundant and illegal.",explanation:"Since overriding is impossible for constructors, 'final' serves no semantic purpose.",hint:"Constructors cannot be overridden, so final is meaningless.",level:"Beginner",codeExample:"// Compile Error: public final Student() {}"},{question:"Why can a constructor NOT be declared 'abstract' in Java?",shortAnswer:"Because abstract declarations lack implementation bodies, but constructors must execute to initialize instance memory.",explanation:"An abstract constructor would mean an object could not initialize its own memory fields, breaking object encapsulation.",hint:"Constructors must contain executable initialization bodies.",level:"Intermediate",codeExample:"// Compile Error: public abstract Student();"},{question:"Why can a constructor NOT be declared 'synchronized' in Java?",shortAnswer:"Because during construction, the object reference is thread-confined to the creating thread and cannot be accessed by any other thread.",explanation:"Synchronization is designed to coordinate multiple threads accessing a shared object. At birth, the object has not yet been published to any other thread.",hint:"Object is thread-confined until constructor completes.",level:"Advanced",codeExample:"// Compile Error: public synchronized Student() {}"}];function x(){return e.jsxs("div",{className:"space-y-12 px-4 md:px-8 py-8 text-slate-200 bg-slate-900 min-h-screen",children:[e.jsx("style",{children:`
          @keyframes fadeIn {
            from { opacity: 0; transform: translateY(8px); }
            to { opacity: 1; transform: translateY(0); }
          }
          .animate-fade-in { animation: fadeIn 0.5s ease-out forwards; }
        `}),e.jsxs("header",{className:"space-y-4 border-b border-slate-800 pb-6 animate-fade-in",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"px-3 py-1 bg-sky-500/10 text-sky-400 border border-sky-500/20 text-xs font-semibold rounded-full uppercase tracking-wider",children:"Module 002_002 · Topic 15"}),e.jsx("span",{className:"px-3 py-1 bg-rose-500/10 text-rose-400 border border-rose-500/20 text-xs font-semibold rounded-full",children:"Compiler Prohibitions"})]}),e.jsx("h1",{className:"text-xl sm:text-2xl md:text-3xl font-bold text-white tracking-tight",children:"Can Constructors Be static, final, synchronized, or abstract?"}),e.jsxs("p",{className:"text-base md:text-lg text-slate-400 leading-relaxed max-w-4xl",children:["Deep-dive into the architectural reasons why Java prohibits ",e.jsx("code",{className:"text-rose-400 font-mono",children:"static"}),", ",e.jsx("code",{className:"text-rose-400 font-mono",children:"final"}),", ",e.jsx("code",{className:"text-rose-400 font-mono",children:"abstract"}),", and ",e.jsx("code",{className:"text-rose-400 font-mono",children:"synchronized"})," on constructor declarations."]})]}),e.jsxs("section",{className:"space-y-5 bg-slate-800/40 p-6 md:p-8 rounded-2xl border border-slate-800 shadow-lg",children:[e.jsxs("h2",{className:"text-2xl font-bold text-rose-400 flex items-center gap-2",children:[e.jsx("span",{children:"🚫"})," The 4 Illegal Constructor Keywords"]}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4 text-xs md:text-sm",children:[e.jsxs("div",{className:"p-4 bg-rose-950/30 rounded-xl border border-rose-800/40 space-y-2",children:[e.jsx("h3",{className:"text-rose-300 font-bold",children:"1. Why NOT static?"}),e.jsxs("p",{className:"text-slate-300",children:["Constructors initialize the living ",e.jsx("code",{className:"text-sky-300 font-mono",children:"this"})," instance. Static members have no instance pointer."]})]}),e.jsxs("div",{className:"p-4 bg-rose-950/30 rounded-xl border border-rose-800/40 space-y-2",children:[e.jsx("h3",{className:"text-rose-300 font-bold",children:"2. Why NOT final?"}),e.jsxs("p",{className:"text-slate-300",children:["Constructors are not inherited and cannot be overridden, making ",e.jsx("code",{className:"text-amber-300 font-mono",children:"final"})," redundant."]})]}),e.jsxs("div",{className:"p-4 bg-rose-950/30 rounded-xl border border-rose-800/40 space-y-2",children:[e.jsx("h3",{className:"text-rose-300 font-bold",children:"3. Why NOT abstract?"}),e.jsx("p",{className:"text-slate-300",children:"An abstract constructor has no body, leaving fields uninitialized."})]}),e.jsxs("div",{className:"p-4 bg-rose-950/30 rounded-xl border border-rose-800/40 space-y-2",children:[e.jsx("h3",{className:"text-rose-300 font-bold",children:"4. Why NOT synchronized?"}),e.jsx("p",{className:"text-slate-300",children:"The object is thread-confined during construction. No other thread can see it until it returns."})]})]})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsxs("h2",{className:"text-2xl font-bold text-emerald-400 flex items-center gap-2",children:[e.jsx("span",{children:"💻"})," Hands-On Java Demo Code"]}),e.jsx(t,{fileModule:i,title:"ProhibitedConstructorModifiersDemo.java",highlightLines:[12,17,22,27,32]})]}),e.jsx("section",{className:"space-y-4",children:e.jsx(r,{title:"Prohibited Constructor Modifiers FAQs (Technical Q&As)",questions:o})}),e.jsx("section",{className:"space-y-4",children:e.jsx(n,{content:a,title:"Module 002_002 Topic 15: Prohibited Constructor Modifiers",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Printable Note",downloadFileName:"002_002_topic15_prohibited_modifiers_note.txt"})}),e.jsx(s,{note:"Remember: Only access modifiers (public, protected, package, private) are permitted on constructors. Never put static, final, abstract, or synchronized on your constructor! — Sukanta Hui"})]})}export{x as default};
