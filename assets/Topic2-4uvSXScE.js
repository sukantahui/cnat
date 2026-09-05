import{j as e}from"./vendor-react-core-Doz9nIC6.js";import{J as r}from"./JavaFileLoader-BfBG3xz_.js";import{F as t}from"./FAQTemplate-BHhlgA96.js";import{P as n}from"./PlainTextPrint-C08xhKA4.js";import{T as a}from"./TeacherSukantaHui-DerPxfxp.js";import"./JavaCodeBlock-BwsLxS3r.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-CH1iX9C8.js";const o=`/**\r
 * Java Core Tutorial - Module 003_003: Wrapper Classes, Autoboxing & Number Parsing\r
 * Topic 2: Inheritance Hierarchy: java.lang.Number Superclass vs Character & Boolean\r
 * Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
 */\r
\r
package com.coderaccotax.javatutorial.wrappers;\r
\r
public class WrapperInheritanceHierarchyDemo {\r
\r
    public static void main(String[] args) {\r
        System.out.println("==========================================================================");\r
        System.out.println(" TOPIC 2: WRAPPER CLASS INHERITANCE HIERARCHY - BARRACKPORE");\r
        System.out.println("==========================================================================\\n");\r
\r
        System.out.println(">>> 1. The java.lang.Number Abstract Hierarchy:");\r
        System.out.println("  Object -> Number (abstract)");\r
        System.out.println("              ├── Byte");\r
        System.out.println("              ├── Short");\r
        System.out.println("              ├── Integer");\r
        System.out.println("              ├── Long");\r
        System.out.println("              ├── Float");\r
        System.out.println("              ├── Double");\r
        System.out.println("              ├── BigInteger (math)");\r
        System.out.println("              └── BigDecimal (math)");\r
\r
        System.out.println("\\n>>> 2. Non-Numeric Wrappers (Direct descendants of Object):");\r
        System.out.println("  Object -> Character");\r
        System.out.println("  Object -> Boolean");\r
\r
        System.out.println("\\n>>> 3. Universal Number Extraction Methods in java.lang.Number:");\r
        Number numRef = Integer.valueOf(42); // Polymorphic reference!\r
        System.out.println("  numRef.intValue()    : " + numRef.intValue());\r
        System.out.println("  numRef.doubleValue() : " + numRef.doubleValue());\r
        System.out.println("  numRef.byteValue()   : " + numRef.byteValue());\r
\r
        System.out.println("\\n==========================================================================");\r
    }\r
}`,s=`================================================================================\r
JAVA CORE TUTORIAL - QUICK REVISION GUIDE\r
Module 003_003: Wrapper Classes & Autoboxing\r
Topic 2: Wrapper Class Inheritance Hierarchy\r
Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
================================================================================\r
\r
1. HIERARCHY STRUCTURE:\r
   - 'Object' → 'Number' (abstract) → Byte, Short, Integer, Long, Float, Double.\r
   - 'Object' → Character.\r
   - 'Object' → Boolean.\r
   - 'Number' provides: 'intValue()', 'doubleValue()', 'longValue()'.\r
\r
================================================================================\r
Classroom Practice: Barrackpore Academy | Mentor: Sukanta Hui\r
================================================================================`,l=[{question:"What is the common abstract superclass of the 6 numeric wrapper classes in Java?",shortAnswer:"'java.lang.Number'. The 6 numeric wrappers (Byte, Short, Integer, Long, Float, Double) as well as BigInteger and BigDecimal extend Number. Character and Boolean directly extend java.lang.Object.",explanation:"Number declares abstract casting methods: intValue(), doubleValue(), longValue(), floatValue(), byteValue(), shortValue().",hint:"java.lang.Number is the superclass of numeric wrappers.",level:"Intermediate",codeExample:"Number n = 42; double d = n.doubleValue();"}];function b(){return e.jsxs("div",{className:"space-y-12 px-4 md:px-8 py-8 text-slate-200 bg-slate-900 min-h-screen",children:[e.jsxs("header",{className:"space-y-4 border-b border-slate-800 pb-6",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"px-3 py-1 bg-sky-500/10 text-sky-400 border border-sky-500/20 text-xs font-semibold rounded-full uppercase tracking-wider",children:"Module 003_003 · Topic 2"}),e.jsx("span",{className:"px-3 py-1 bg-indigo-500/10 text-indigo-400 border border-indigo-500/20 text-xs font-semibold rounded-full",children:"Class Hierarchy"})]}),e.jsxs("h1",{className:"text-xl sm:text-2xl md:text-3xl font-bold text-white tracking-tight",children:["Inheritance Hierarchy: ",e.jsx("code",{className:"text-indigo-400 font-mono",children:"java.lang.Number"})," Superclass vs ",e.jsx("code",{className:"text-emerald-400 font-mono",children:"Character"})," & ",e.jsx("code",{className:"text-emerald-400 font-mono",children:"Boolean"})]}),e.jsxs("p",{className:"text-base md:text-lg text-slate-400 leading-relaxed max-w-4xl",children:["Understand the OOP architecture of wrapper types: why numeric wrappers inherit from abstract ",e.jsx("code",{className:"text-indigo-300 font-mono",children:"Number"})," while ",e.jsx("code",{className:"text-emerald-300 font-mono",children:"Character"})," and ",e.jsx("code",{className:"text-emerald-300 font-mono",children:"Boolean"})," extend ",e.jsx("code",{className:"text-sky-300 font-mono",children:"Object"})," directly."]})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsxs("h2",{className:"text-2xl font-bold text-emerald-400 flex items-center gap-2",children:[e.jsx("span",{children:"💻"})," Hands-On Java Demo Code"]}),e.jsx(r,{fileModule:o,title:"WrapperInheritanceHierarchyDemo.java",highlightLines:[7,14,15,16,23,27,28,29]})]}),e.jsx("section",{className:"space-y-4",children:e.jsx(t,{title:"Wrapper Hierarchy FAQs",questions:l})}),e.jsx("section",{className:"space-y-4",children:e.jsx(n,{content:s,title:"Module 003_003 Topic 2: Wrapper Hierarchy",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Printable Note",downloadFileName:"003_003_topic2_wrapper_hierarchy_note.txt"})}),e.jsx(a,{note:"Notice that Number allows polymorphic numeric conversion: you can hold any Integer or Double in a Number reference and call .doubleValue() on it! — Sukanta Hui"})]})}export{b as default};
