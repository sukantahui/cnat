import{j as e}from"./vendor-react-core-Doz9nIC6.js";import{J as n}from"./JavaFileLoader-BfBG3xz_.js";import{F as t}from"./FAQTemplate-BHhlgA96.js";import{P as a}from"./PlainTextPrint-C08xhKA4.js";import{T as r}from"./TeacherSukantaHui-BaJcBHAy.js";import"./JavaCodeBlock-BwsLxS3r.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-8ao-0upJ.js";const s=`/**\r
 * Java Core Tutorial - Module 006_005: Type Erasure & Generics Limitations\r
 * Topic 7: Restriction 2: Cannot Create Instances of Type Parameters (Why 'new T()' Fails)\r
 * Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
 */\r
\r
package com.coderaccotax.javatutorial.generics;\r
\r
class FactoryContainer<T> {\r
    private T instance;\r
\r
    // ILLEGAL CONSTRUCTOR (Will NOT compile):\r
    // public FactoryContainer() {\r
    //     this.instance = new T(); // COMPILE ERROR: Cannot instantiate the type T!\r
    // }\r
\r
    // LEGAL WORKAROUND: Pass Class<T> token and use Reflection:\r
    public FactoryContainer(Class<T> clazz) throws Exception {\r
        this.instance = clazz.getDeclaredConstructor().newInstance();\r
    }\r
\r
    public T getInstance() { return instance; }\r
}\r
\r
class StudentBadge {\r
    public void display() { System.out.println("  [STUDENT BADGE INSTANTIATED] Barrackpore Central Hub"); }\r
}\r
\r
public class Restriction2CannotInstantiateTypeParamDemo {\r
\r
    public static void main(String[] args) throws Exception {\r
        System.out.println("==========================================================================");\r
        System.out.println(" TOPIC 7: RESTRICTION 2 - NO 'new T()' - BARRACKPORE");\r
        System.out.println("==========================================================================\\n");\r
\r
        // Instantiating generic instance via Class<T> token workaround:\r
        FactoryContainer<StudentBadge> container = new FactoryContainer<>(StudentBadge.class);\r
        container.getInstance().display();\r
\r
        System.out.println("\\n>>> WHY 'new T()' IS FORBIDDEN:");\r
        System.out.println("  1. 'T' is erased to 'Object' during compilation.");\r
        System.out.println("  2. 'new T()' would translate to 'new Object()', which is completely wrong and useless.");\r
        System.out.println("  3. The compiler cannot know if 'T' has a no-arg constructor or is an interface/abstract class!");\r
\r
        System.out.println("\\n==========================================================================");\r
    }\r
}`,o=`================================================================================\r
JAVA CORE TUTORIAL - QUICK REVISION GUIDE\r
Module 006_005: Type Erasure & Generics Limitations\r
Topic 7: Restriction 2 - No 'new T()'\r
Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
================================================================================\r
\r
1. RESTRICTION 2: NO 'new T()':\r
   - 'new T()' is illegal (erased to new Object()).\r
   - Compiler cannot guarantee accessible constructor exists.\r
   - Workaround: Pass 'Class<T> clazz' token.\r
   - Instantiate via: 'clazz.getDeclaredConstructor().newInstance()'.\r
\r
================================================================================\r
Classroom Practice: Barrackpore Academy | Mentor: Sukanta Hui\r
================================================================================`,i=[{question:"Why does writing 'T item = new T();' inside a generic class fail compilation, and what is the standard workaround?",shortAnswer:"Because type erasure erases 'T' to 'Object' in bytecode, so 'new T()' would generate 'new Object()'. Furthermore, the compiler cannot guarantee that 'T' is a concrete class with an accessible no-argument constructor. The standard workaround is to pass a 'Class<T>' type token and invoke 'clazz.getDeclaredConstructor().newInstance()'.",explanation:"Classic generic instantiation limitation and the reflection token solution.",hint:"Type erasure converts T to Object, making 'new T()' impossible; pass Class<T> token instead.",level:"Intermediate",codeExample:"public <T> T create(Class<T> c) throws Exception { return c.getDeclaredConstructor().newInstance(); }"}];function w(){return e.jsxs("div",{className:"space-y-12 px-4 md:px-8 py-8 text-slate-200 bg-slate-900 min-h-screen",children:[e.jsxs("header",{className:"space-y-4 border-b border-slate-800 pb-6",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"px-3 py-1 bg-sky-500/10 text-sky-400 border border-sky-500/20 text-xs font-semibold rounded-full uppercase tracking-wider",children:"Module 006_005 · Topic 7"}),e.jsx("span",{className:"px-3 py-1 bg-rose-500/10 text-rose-400 border border-rose-500/20 text-xs font-semibold rounded-full",children:"Restriction 2"})]}),e.jsxs("h1",{className:"text-xl sm:text-2xl md:text-3xl font-bold text-white tracking-tight",children:["Restriction 2: Cannot Create Instances of Type Parameters (",e.jsx("code",{className:"text-rose-400 font-mono",children:"new T()"}),")"]}),e.jsxs("p",{className:"text-base md:text-lg text-slate-400 leading-relaxed max-w-4xl",children:["Overcome instantiation roadblocks: understanding why ",e.jsx("code",{className:"text-rose-400 font-mono",children:"new T()"})," is impossible under type erasure and passing Class type tokens (",e.jsx("code",{className:"text-emerald-300 font-mono",children:"Class<T>"}),") as factory workarounds."]})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsxs("h2",{className:"text-2xl font-bold text-emerald-400 flex items-center gap-2",children:[e.jsx("span",{children:"💻"})," Hands-On Java Demo Code"]}),e.jsx(n,{fileModule:s,title:"Restriction2CannotInstantiateTypeParamDemo.java",highlightLines:[7,10,16,17,18,32,33]})]}),e.jsx("section",{className:"space-y-4",children:e.jsx(t,{title:"Instantiation FAQs",questions:i})}),e.jsx("section",{className:"space-y-4",children:e.jsx(a,{content:o,title:"Module 006_005 Topic 7: Restriction 2 - No new T()",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Printable Note",downloadFileName:"006_005_topic7_restriction2_no_new_t_note.txt"})}),e.jsx(r,{note:"You cannot write 'new T()' in Java because at runtime T is gone! To instantiate a generic object dynamically, always pass 'Class<T> clazz' into your constructor and call 'clazz.getDeclaredConstructor().newInstance()'! — Sukanta Hui"})]})}export{w as default};
