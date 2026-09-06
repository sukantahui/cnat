import{j as e}from"./vendor-react-core-Doz9nIC6.js";import{J as t}from"./JavaFileLoader-BfBG3xz_.js";import{F as n}from"./FAQTemplate-BHhlgA96.js";import{P as i}from"./PlainTextPrint-C08xhKA4.js";import{T as r}from"./TeacherSukantaHui-DDN87fI5.js";import"./JavaCodeBlock-BwsLxS3r.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-DEsnU7fn.js";const s=`/**\r
 * Java Core Tutorial - Module 006_004: Wildcards & The PECS Principle\r
 * Topic 0: The Limitation of Invariant Generics: Why List<Object> Cannot Accept List<String>\r
 * Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
 */\r
\r
package com.coderaccotax.javatutorial.generics;\r
\r
import java.util.ArrayList;\r
import java.util.List;\r
\r
public class GenericsInvarianceLimitationDemo {\r
\r
    // Method accepting List<Object>:\r
    public static void printObjectList(List<Object> list) {\r
        for (Object obj : list) {\r
            System.out.println("  Item: " + obj);\r
        }\r
    }\r
\r
    public static void main(String[] args) {\r
        System.out.println("==========================================================================");\r
        System.out.println(" TOPIC 0: GENERICS INVARIANCE LIMITATION - BARRACKPORE");\r
        System.out.println("==========================================================================\\n");\r
\r
        List<String> studentNames = new ArrayList<>();\r
        studentNames.add("Swadeep Paul");\r
        studentNames.add("Tuhina Das");\r
\r
        // printObjectList(studentNames); // COMPILATION ERROR: List<String> is NOT a subtype of List<Object>!\r
\r
        System.out.println(">>> 1. WHY List<String> IS NOT A SUBTYPE OF List<Object> (INVARIANCE):");\r
        System.out.println("  - Even though 'String extends Object', 'List<String>' DOES NOT extend 'List<Object>'.");\r
        System.out.println("  - If Java allowed this, you could write: 'list.add(100);' into what is actually a List<String>!");\r
        System.out.println("  - That would cause a catastrophic ClassCastException when reading from studentNames!");\r
\r
        System.out.println("\\n>>> 2. HOW JAVA GUARANTEES TYPE SAFETY VIA INVARIANCE:");\r
        System.out.println("  - Generics are INVARIANT by default to prevent heap corruption.");\r
        System.out.println("  - To allow polymorphic collections safely, Java introduced WILDCARDS (List<?>)!");\r
\r
        System.out.println("\\n==========================================================================");\r
    }\r
}`,a=`================================================================================\r
JAVA CORE TUTORIAL - QUICK REVISION GUIDE\r
Module 006_004: Wildcards & The PECS Principle\r
Topic 0: Generics Invariance Limitation\r
Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
================================================================================\r
\r
1. GENERICS INVARIANCE:\r
   - 'List<String>' is NOT a subtype of 'List<Object>'.\r
   - Prevents inserting wrong types into specialized collections.\r
   - Eliminates runtime ClassCastException risks.\r
   - Solution for polymorphism: Wildcards ('List<?>', 'List<? extends T>').\r
\r
================================================================================\r
Classroom Practice: Barrackpore Academy | Mentor: Sukanta Hui\r
================================================================================`,o=[{question:"Why does passing a 'List<String>' to a method expecting 'List<Object>' cause a compilation error in Java?",shortAnswer:"In Java, generic types are 'Invariant'. Although 'String' is a subtype of 'Object', 'List<String>' is NOT a subtype of 'List<Object>'. If the compiler allowed this assignment, code could insert an Integer or Date into the 'List<Object>' reference ('list.add(123)'), corrupting the underlying 'List<String>' and causing fatal runtime ClassCastExceptions.",explanation:"Invariance is the core defense mechanism preserving compile-time type safety.",hint:"Generics are invariant; allowing List<String> as List<Object> would permit adding non-Strings.",level:"Intermediate",codeExample:"// List<Object> list = new ArrayList<String>(); // Compilation Error!"}];function g(){return e.jsxs("div",{className:"space-y-12 px-4 md:px-8 py-8 text-slate-200 bg-slate-900 min-h-screen",children:[e.jsxs("header",{className:"space-y-4 border-b border-slate-800 pb-6",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"px-3 py-1 bg-sky-500/10 text-sky-400 border border-sky-500/20 text-xs font-semibold rounded-full uppercase tracking-wider",children:"Module 006_004 · Topic 0"}),e.jsx("span",{className:"px-3 py-1 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-xs font-semibold rounded-full",children:"Invariance Theory"})]}),e.jsxs("h1",{className:"text-xl sm:text-2xl md:text-3xl font-bold text-white tracking-tight",children:["The Limitation of Invariant Generics: ",e.jsx("code",{className:"text-emerald-400 font-mono",children:"List<Object>"})," vs ",e.jsx("code",{className:"text-sky-400 font-mono",children:"List<String>"})]}),e.jsx("p",{className:"text-base md:text-lg text-slate-400 leading-relaxed max-w-4xl",children:"Discover generic invariance fundamentals: understanding why Java prohibits subtyping between parameterized collections to prevent runtime heap corruption."})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsxs("h2",{className:"text-2xl font-bold text-emerald-400 flex items-center gap-2",children:[e.jsx("span",{children:"💻"})," Hands-On Java Demo Code"]}),e.jsx(t,{fileModule:s,title:"GenericsInvarianceLimitationDemo.java",highlightLines:[7,10,13,14,23,24,25]})]}),e.jsx("section",{className:"space-y-4",children:e.jsx(n,{title:"Invariance FAQs",questions:o})}),e.jsx("section",{className:"space-y-4",children:e.jsx(i,{content:a,title:"Module 006_004 Topic 0: Generics Invariance",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Printable Note",downloadFileName:"006_004_topic0_generics_invariance_note.txt"})}),e.jsx(r,{note:"Remember this rule forever: 'String IS AN Object', but 'List<String> IS NOT A List<Object>'! If Java allowed it, anyone could slip an Integer into your List of Strings! That's why we need Wildcards! — Sukanta Hui"})]})}export{g as default};
