import{j as e}from"./vendor-react-core-Doz9nIC6.js";import{J as t}from"./JavaFileLoader-BfBG3xz_.js";import{F as s}from"./FAQTemplate-CkSqDH4B.js";import{P as n}from"./PlainTextPrint-C08xhKA4.js";import{T as r}from"./TeacherSukantaHui-CC0AKmkm.js";import"./JavaCodeBlock-BwsLxS3r.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-BtJHuk7w.js";const o=`/**\r
 * Java Core Tutorial - Module 006_004: Wildcards & The PECS Principle\r
 * Topic 10: Deconstructing java.util.Collections.copy() using PECS Architecture\r
 * Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
 */\r
\r
package com.coderaccotax.javatutorial.generics;\r
\r
import java.util.ArrayList;\r
import java.util.Collections;\r
import java.util.List;\r
\r
public class CollectionsCopyPecsDeconstructionDemo {\r
\r
    public static void main(String[] args) {\r
        System.out.println("==========================================================================");\r
        System.out.println(" TOPIC 10: DECONSTRUCTING Collections.copy() - BARRACKPORE");\r
        System.out.println("==========================================================================\\n");\r
\r
        // Source list (Producer of Integers):\r
        List<Integer> integerSource = List.of(101, 102, 103, 104);\r
\r
        // Destination list (Consumer capable of holding Numbers):\r
        List<Number> numberDestination = new ArrayList<>(Collections.nCopies(4, 0));\r
\r
        System.out.println(">>> 1. State Before Collections.copy():");\r
        System.out.println("  Source (List<Integer>) : " + integerSource);\r
        System.out.println("  Dest   (List<Number>)  : " + numberDestination);\r
\r
        // Invoking JDK java.util.Collections.copy():\r
        // Signature: public static <T> void copy(List<? super T> dest, List<? extends T> src)\r
        Collections.copy(numberDestination, integerSource);\r
\r
        System.out.println("\\n>>> 2. State After Collections.copy():");\r
        System.out.println("  Dest (Copied Numbers)  : " + numberDestination);\r
\r
        System.out.println("\\n>>> ARCHITECTURAL BREAKDOWN OF Collections.copy():");\r
        System.out.println("  - 'src' is 'List<? extends T>': Acts as a Producer. Can pass List<Integer> when T=Number.");\r
        System.out.println("  - 'dest' is 'List<? super T>': Acts as a Consumer. Can pass List<Number> or List<Object>.");\r
        System.out.println("  - Without PECS wildcards, Collections.copy would require EXACT identical type matches (e.g. List<T> to List<T>), breaking flexibility!");\r
\r
        System.out.println("\\n==========================================================================");\r
    }\r
}`,i=`================================================================================\r
JAVA CORE TUTORIAL - QUICK REVISION GUIDE\r
Module 006_004: Wildcards & The PECS Principle\r
Topic 10: Deconstructing Collections.copy\r
Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
================================================================================\r
\r
1. Collections.copy DECONSTRUCTION:\r
   - 'public static <T> void copy(List<? super T> dest, List<? extends T> src)'.\r
   - 'src' produces data of type 'T' (extends).\r
   - 'dest' consumes data of type 'T' (super).\r
   - Enables copying 'List<Integer>' into 'List<Number>' or 'List<Object>'.\r
\r
================================================================================\r
Classroom Practice: Barrackpore Academy | Mentor: Sukanta Hui\r
================================================================================`,a=[{question:"How does the signature 'Collections.copy(List<? super T> dest, List<? extends T> src)' demonstrate maximum API flexibility?",shortAnswer:"Without wildcards ('copy(List<T> dest, List<T> src)'), copying a 'List<Integer>' into a 'List<Number>' would fail compilation due to invariance. By applying PECS, 'src' is declared as '? extends T' (Producer) and 'dest' is declared as '? super T' (Consumer). When T=Integer, src can be 'List<Integer>' and dest can be 'List<Number>' or 'List<Object>', providing total polymorphic flexibility.",explanation:"Standard design pattern found throughout java.util.Collections and java.util.stream.",hint:"Allows copying from specialized subtypes (List<Integer>) into generalized supertypes (List<Number>).",level:"Advanced",codeExample:"Collections.copy(numberList, integerList); // Works seamlessly via PECS!"}];function C(){return e.jsxs("div",{className:"space-y-12 px-4 md:px-8 py-8 text-slate-200 bg-slate-900 min-h-screen",children:[e.jsxs("header",{className:"space-y-4 border-b border-slate-800 pb-6",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"px-3 py-1 bg-sky-500/10 text-sky-400 border border-sky-500/20 text-xs font-semibold rounded-full uppercase tracking-wider",children:"Module 006_004 · Topic 10"}),e.jsx("span",{className:"px-3 py-1 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-xs font-semibold rounded-full",children:"Collections.copy Case Study"})]}),e.jsxs("h1",{className:"text-3xl md:text-4xl font-extrabold text-white tracking-tight",children:["Deconstructing ",e.jsx("code",{className:"text-emerald-400 font-mono",children:"Collections.copy()"})," using the PECS Principle"]}),e.jsxs("p",{className:"text-base md:text-lg text-slate-400 leading-relaxed max-w-4xl",children:["Dissect production JDK library signatures: examining how ",e.jsx("code",{className:"text-emerald-300 font-mono",children:"Collections.copy(List<? super T>, List<? extends T>)"})," achieves maximum cross-type collection interoperability."]})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsxs("h2",{className:"text-2xl font-bold text-emerald-400 flex items-center gap-2",children:[e.jsx("span",{children:"💻"})," Hands-On Java Demo Code"]}),e.jsx(t,{fileModule:o,title:"CollectionsCopyPecsDeconstructionDemo.java",highlightLines:[7,10,16,17,24,25,26]})]}),e.jsx("section",{className:"space-y-4",children:e.jsx(s,{title:"Collections.copy FAQs",questions:a})}),e.jsx("section",{className:"space-y-4",children:e.jsx(n,{content:i,title:"Module 006_004 Topic 10: Collections.copy Deconstruction",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Printable Note",downloadFileName:"006_004_topic10_collections_copy_note.txt"})}),e.jsx(r,{note:"Look at the JDK source code for 'Collections.copy()'! The source is declared with '<? extends T>' and destination with '<? super T>'! That is Joshua Bloch's PECS rule at work inside the Java runtime! — Sukanta Hui"})]})}export{C as default};
