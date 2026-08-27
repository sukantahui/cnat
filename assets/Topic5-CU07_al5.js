import{j as e}from"./vendor-react-core-Doz9nIC6.js";import{J as t}from"./JavaFileLoader-BfBG3xz_.js";import{F as r}from"./FAQTemplate-CkSqDH4B.js";import{P as n}from"./PlainTextPrint-C08xhKA4.js";import{T as s}from"./TeacherSukantaHui-CC0AKmkm.js";import"./JavaCodeBlock-BwsLxS3r.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-BtJHuk7w.js";const a=`/**\r
 * Java Core Tutorial - Module 006_004: Wildcards & The PECS Principle\r
 * Topic 5: Lower Bounded Wildcard (List<? super Integer>): Contravariance & Insertion\r
 * Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
 */\r
\r
package com.coderaccotax.javatutorial.generics;\r
\r
import java.util.ArrayList;\r
import java.util.List;\r
\r
public class LowerBoundedWildcardContravarianceDemo {\r
\r
    // Lower Bounded Wildcard Method (Contravariance):\r
    // Accepts List<Integer>, List<Number>, List<Object>!\r
    public static void populateRollNumbers(List<? super Integer> destination) {\r
        // WRITE-ENABLED: Safe to insert Integer and any subtype of Integer!\r
        destination.add(101);\r
        destination.add(102);\r
        destination.add(103);\r
        System.out.println("  [INSERTED] Added 3 roll numbers into consumer list.");\r
    }\r
\r
    public static void main(String[] args) {\r
        System.out.println("==========================================================================");\r
        System.out.println(" TOPIC 5: LOWER BOUNDED WILDCARD (List<? super Integer>) - BARRACKPORE");\r
        System.out.println("==========================================================================\\n");\r
\r
        List<Integer> integerList = new ArrayList<>();\r
        List<Number> numberList = new ArrayList<>();\r
        List<Object> objectList = new ArrayList<>();\r
\r
        System.out.println(">>> 1. Populating Integer List (List<Integer>):");\r
        populateRollNumbers(integerList);\r
        System.out.println("  Integer List Content : " + integerList);\r
\r
        System.out.println("\\n>>> 2. Populating Number List (List<Number>):");\r
        populateRollNumbers(numberList);\r
        System.out.println("  Number List Content  : " + numberList);\r
\r
        System.out.println("\\n>>> 3. Populating Object List (List<Object>):");\r
        populateRollNumbers(objectList);\r
        System.out.println("  Object List Content  : " + objectList);\r
\r
        System.out.println("\\n>>> WHAT IS CONTRAVARIANCE IN GENERICS?");\r
        System.out.println("  1. 'List<? super Integer>' creates a CONTRAVARIANT subtyping relationship.");\r
        System.out.println("  2. 'List<Number>' and 'List<Object>' ARE considered subtypes of 'List<? super Integer>'!");\r
        System.out.println("  3. Write-Enabled for Integer, but elements can ONLY be read as 'Object'.");\r
\r
        System.out.println("\\n==========================================================================");\r
    }\r
}`,i=`================================================================================\r
JAVA CORE TUTORIAL - QUICK REVISION GUIDE\r
Module 006_004: Wildcards & The PECS Principle\r
Topic 5: Lower Bounded Wildcard (Contravariance)\r
Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
================================================================================\r
\r
1. LOWER BOUNDED WILDCARD (CONTRAVARIANCE):\r
   - 'List<? super Integer>': accepts Integer and all supertypes.\r
   - Accepts 'List<Integer>', 'List<Number>', 'List<Object>'.\r
   - WRITE-ENABLED: safe to add 'Integer'.\r
   - Acts as a DATA CONSUMER.\r
   - Elements read only as 'Object'.\r
\r
================================================================================\r
Classroom Practice: Barrackpore Academy | Mentor: Sukanta Hui\r
================================================================================`,o=[{question:"Why is 'List<? super Integer>' write-enabled for Integers, and what type can you read from it?",shortAnswer:"'List<? super Integer>' accepts any list holding 'Integer' or any supertype of Integer (like 'Number' or 'Object'). Because an 'Integer' is guaranteed to be compatible with Integer, Number, and Object, it is 100% type-safe to add Integers into the list. However, when reading elements, you can ONLY read them as 'Object' because the underlying list could be a 'List<Object>'.",explanation:"Core consumer role in Joshua Bloch's PECS principle.",hint:"Safe to write Integers into the list; elements can only be read as Object.",level:"Intermediate",codeExample:"List<? super Integer> list = new ArrayList<Number>(); list.add(10); // OK; Object o = list.get(0);"}];function g(){return e.jsxs("div",{className:"space-y-12 px-4 md:px-8 py-8 text-slate-200 bg-slate-900 min-h-screen",children:[e.jsxs("header",{className:"space-y-4 border-b border-slate-800 pb-6",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"px-3 py-1 bg-sky-500/10 text-sky-400 border border-sky-500/20 text-xs font-semibold rounded-full uppercase tracking-wider",children:"Module 006_004 · Topic 5"}),e.jsx("span",{className:"px-3 py-1 bg-purple-500/10 text-purple-400 border border-purple-500/20 text-xs font-semibold rounded-full",children:"Contravariant Wildcards"})]}),e.jsxs("h1",{className:"text-3xl md:text-4xl font-extrabold text-white tracking-tight",children:["Lower Bounded Wildcard (",e.jsx("code",{className:"text-purple-400 font-mono",children:"List<? super Integer>"}),"): Contravariance"]}),e.jsxs("p",{className:"text-base md:text-lg text-slate-400 leading-relaxed max-w-4xl",children:["Master contravariant collection writing: utilizing ",e.jsx("code",{className:"text-purple-300 font-mono",children:"<? super T>"})," to ingest elements safely into supertype collections (Consumer role)."]})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsxs("h2",{className:"text-2xl font-bold text-emerald-400 flex items-center gap-2",children:[e.jsx("span",{children:"💻"})," Hands-On Java Demo Code"]}),e.jsx(t,{fileModule:a,title:"LowerBoundedWildcardContravarianceDemo.java",highlightLines:[7,10,14,15,16,17,28,32,36]})]}),e.jsx("section",{className:"space-y-4",children:e.jsx(r,{title:"Lower Bounded Wildcards FAQs",questions:o})}),e.jsx("section",{className:"space-y-4",children:e.jsx(n,{content:i,title:"Module 006_004 Topic 5: Lower Bounded Wildcard",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Printable Note",downloadFileName:"006_004_topic5_lower_bounded_wildcard_note.txt"})}),e.jsx(s,{note:"Whenever you want a method to WRITE or CONSUME data into a collection, use '? super T'! 'List<? super Integer>' allows you to safely insert Integers into a List of Integers, a List of Numbers, or a List of Objects! — Sukanta Hui"})]})}export{g as default};
