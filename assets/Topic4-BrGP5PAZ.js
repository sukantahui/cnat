import{j as e}from"./vendor-react-core-Doz9nIC6.js";import{J as t}from"./JavaFileLoader-BfBG3xz_.js";import{F as n}from"./FAQTemplate-BHhlgA96.js";import{P as r}from"./PlainTextPrint-C08xhKA4.js";import{T as a}from"./TeacherSukantaHui-RpFLNJ5A.js";import"./JavaCodeBlock-BwsLxS3r.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-wprqVFW_.js";const s=`/**\r
 * Java Core Tutorial - Module 006_002: Generic Methods, Constructors & Type Inference\r
 * Topic 4: Generic Static Methods: Why Static Methods Cannot Access Class-Level <T>\r
 * Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
 */\r
\r
package com.coderaccotax.javatutorial.generics;\r
\r
// Generic Class parameterized with type parameter <T>:\r
class RepositoryContainer<T> {\r
    private T entity;\r
\r
    public RepositoryContainer(T entity) { this.entity = entity; }\r
\r
    // 1. Instance Method: CAN use class-level type <T>:\r
    public T getEntity() { return entity; }\r
\r
    // 2. STATIC METHOD: CANNOT use class-level <T>!\r
    // Compiler Error if written: 'public static T findInvalid()' -> Non-static type T cannot be referenced from static context!\r
    // MUST declare its own method-level generic parameter <E>:\r
    public static <E> RepositoryContainer<E> of(E item) {\r
        return new RepositoryContainer<>(item);\r
    }\r
}\r
\r
public class GenericStaticMethodScopingRulesDemo {\r
\r
    public static void main(String[] args) {\r
        System.out.println("==========================================================================");\r
        System.out.println(" TOPIC 4: GENERIC STATIC METHOD SCOPING - BARRACKPORE");\r
        System.out.println("==========================================================================\\n");\r
\r
        // Using Static Factory Generic Method:\r
        RepositoryContainer<String> stringRepo = RepositoryContainer.of("Trainee: Swadeep Paul");\r
        RepositoryContainer<Integer> integerRepo = RepositoryContainer.of(101);\r
\r
        System.out.println(">>> 1. Containers Created via Generic Static Factory:");\r
        System.out.println("  String Repo Value  : " + stringRepo.getEntity());\r
        System.out.println("  Integer Repo Value : " + integerRepo.getEntity());\r
\r
        System.out.println("\\n>>> WHY STATIC METHODS CANNOT USE CLASS TYPE <T>:");\r
        System.out.println("  1. Instance Bound: Class-level <T> is only determined when an OBJECT is instantiated (new RepositoryContainer<String>()).");\r
        System.out.println("  2. Static Context: Static methods belong to the Class template and exist before any object is created.");\r
        System.out.println("  3. Independent Declaration: Therefore, any static method requiring generics MUST declare its own '<E>' before the return type!");\r
\r
        System.out.println("\\n==========================================================================");\r
    }\r
}`,i=`================================================================================\r
JAVA CORE TUTORIAL - QUICK REVISION GUIDE\r
Module 006_002: Generic Methods, Constructors & Type Inference\r
Topic 4: Generic Static Method Scoping\r
Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
================================================================================\r
\r
1. STATIC GENERICS SCOPING RULE:\r
   - Class-level '<T>' belongs to heap instances.\r
   - Static methods belong to the class definition.\r
   - Static methods CANNOT use class '<T>'.\r
   - Static methods MUST declare independent '<E>' before return type.\r
\r
================================================================================\r
Classroom Practice: Barrackpore Academy | Mentor: Sukanta Hui\r
================================================================================`,o=[{question:"Why does the Java compiler produce a compilation error ('non-static type variable T cannot be referenced from a static context') if a static method tries to use a class-level type parameter <T>?",shortAnswer:"Class-level type parameters '<T>' are tied to individual object instances created on the heap via 'new MyClass<String>()'. Static methods belong to the Class definition in Metaspace and can be invoked before any object instance exists (e.g. 'MyClass.doSomething()'). Therefore, static methods have no access to instance type <T> and MUST declare their own independent type parameter (e.g. 'public static <E> void doSomething(E e)').",explanation:"Fundamental memory scoping rule between class-level Metaspace and instance-level Heap.",hint:"Class <T> exists only upon object instantiation; static methods exist before instances and must declare their own <E>.",level:"Intermediate",codeExample:"public class Box<T> { public static <E> Box<E> create(E val) { ... } }"}];function x(){return e.jsxs("div",{className:"space-y-12 px-4 md:px-8 py-8 text-slate-200 bg-slate-900 min-h-screen",children:[e.jsxs("header",{className:"space-y-4 border-b border-slate-800 pb-6",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"px-3 py-1 bg-sky-500/10 text-sky-400 border border-sky-500/20 text-xs font-semibold rounded-full uppercase tracking-wider",children:"Module 006_002 · Topic 4"}),e.jsx("span",{className:"px-3 py-1 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-xs font-semibold rounded-full",children:"Static Scoping"})]}),e.jsxs("h1",{className:"text-xl sm:text-2xl md:text-3xl font-bold text-white tracking-tight",children:["Generic Static Methods: Why Static Methods Cannot Access Class-Level ",e.jsx("code",{className:"text-emerald-400 font-mono",children:"<T>"})]}),e.jsx("p",{className:"text-base md:text-lg text-slate-400 leading-relaxed max-w-4xl",children:"Analyze static generic constraints: understanding why static methods cannot reference class-level type variables and must declare independent method-level generic parameters."})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsxs("h2",{className:"text-2xl font-bold text-emerald-400 flex items-center gap-2",children:[e.jsx("span",{children:"💻"})," Hands-On Java Demo Code"]}),e.jsx(t,{fileModule:s,title:"GenericStaticMethodScopingRulesDemo.java",highlightLines:[7,10,15,16,17,18,20,21]})]}),e.jsx("section",{className:"space-y-4",children:e.jsx(n,{title:"Static Scoping FAQs",questions:o})}),e.jsx("section",{className:"space-y-4",children:e.jsx(r,{content:i,title:"Module 006_002 Topic 4: Generic Static Scoping",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Printable Note",downloadFileName:"006_002_topic4_generic_static_scoping_note.txt"})}),e.jsx(a,{note:"This is a famous interview trap! Static methods cannot use the class '<T>' because static methods exist before any object is created! A static method must always declare its own '<E>' before its return type! — Sukanta Hui"})]})}export{x as default};
