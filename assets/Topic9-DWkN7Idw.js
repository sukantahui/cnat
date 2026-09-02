import{j as e}from"./vendor-react-core-Doz9nIC6.js";import{J as r}from"./JavaFileLoader-BfBG3xz_.js";import{F as t}from"./FAQTemplate-BHhlgA96.js";import{P as n}from"./PlainTextPrint-C08xhKA4.js";import{T as s}from"./TeacherSukantaHui-RpFLNJ5A.js";import"./JavaCodeBlock-BwsLxS3r.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-wprqVFW_.js";const i=`/**\r
 * Java Core Tutorial - Module 006_004: Wildcards & The PECS Principle\r
 * Topic 9: Joshua Bloch's PECS Principle: "Producer Extends, Consumer Super"\r
 * Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
 */\r
\r
package com.coderaccotax.javatutorial.generics;\r
\r
import java.util.ArrayList;\r
import java.util.List;\r
\r
public class PecsPrincipleJoshuaBlochDemo {\r
\r
    // THE GOLD STANDARD PECS METHOD:\r
    // 'src' is a PRODUCER (we read T from it) -> <? extends T>\r
    // 'dest' is a CONSUMER (we write T into it) -> <? super T>\r
    public static <T> void copyElements(List<? super T> dest, List<? extends T> src) {\r
        for (T item : src) {\r
            dest.add(item); // Reads from src (Producer) and writes to dest (Consumer)!\r
        }\r
    }\r
\r
    public static void main(String[] args) {\r
        System.out.println("==========================================================================");\r
        System.out.println(" TOPIC 9: JOSHUA BLOCH'S PECS PRINCIPLE - BARRACKPORE");\r
        System.out.println("==========================================================================\\n");\r
\r
        // Producer: List of specific Integers:\r
        List<Integer> integerSource = List.of(10, 20, 30, 40);\r
\r
        // Consumer: List of broad Numbers:\r
        List<Number> numberDestination = new ArrayList<>();\r
\r
        System.out.println(">>> 1. Copying from List<Integer> to List<Number> via PECS:");\r
        copyElements(numberDestination, integerSource);\r
        System.out.println("  Destination List Content : " + numberDestination);\r
\r
        // Consumer: List of universal Objects:\r
        List<Object> objectDestination = new ArrayList<>();\r
        copyElements(objectDestination, integerSource);\r
        System.out.println("  Object Destination Content: " + objectDestination);\r
\r
        System.out.println("\\n>>> JOSHUA BLOCH'S PECS MNEMONIC (Effective Java Item 31):");\r
        System.out.println("  P - Producer");\r
        System.out.println("  E - Extends  (Use '? extends T' when reading data from a parameter)");\r
        System.out.println("  C - Consumer");\r
        System.out.println("  S - Super    (Use '? super T' when writing data into a parameter)");\r
\r
        System.out.println("\\n==========================================================================");\r
    }\r
}`,o=`================================================================================\r
JAVA CORE TUTORIAL - QUICK REVISION GUIDE\r
Module 006_004: Wildcards & The PECS Principle\r
Topic 9: The PECS Principle\r
Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
================================================================================\r
\r
1. JOSHUA BLOCH'S PECS PRINCIPLE:\r
   - P - Producer → Extends ('? extends T' for reading).\r
   - C - Consumer → Super ('? super T' for writing).\r
   - If both reading AND writing → exact type '<T>'.\r
   - Maximizes API flexibility for client callers.\r
\r
================================================================================\r
Classroom Practice: Barrackpore Academy | Mentor: Sukanta Hui\r
================================================================================`,a=[{question:"What does Joshua Bloch's 'PECS' mnemonic stand for in Effective Java Item 31, and when should each wildcard be used?",shortAnswer:"PECS stands for 'Producer Extends, Consumer Super'. 1. Use '? extends T' if a parameterized type represents a 'Producer' (your method reads/extracts items from it). 2. Use '? super T' if a parameterized type represents a 'Consumer' (your method writes/stores items into it). 3. If a parameter is both a producer AND a consumer, do not use wildcards—use exact type parameters ('List<T>').",explanation:"The single most famous and influential API design rule in Java history.",hint:"Producer Extends, Consumer Super; use extends for reading, super for writing, exact type if doing both.",level:"Advanced",codeExample:"public static <T> void copy(List<? super T> dest, List<? extends T> src)"}];function P(){return e.jsxs("div",{className:"space-y-12 px-4 md:px-8 py-8 text-slate-200 bg-slate-900 min-h-screen",children:[e.jsxs("header",{className:"space-y-4 border-b border-slate-800 pb-6",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"px-3 py-1 bg-sky-500/10 text-sky-400 border border-sky-500/20 text-xs font-semibold rounded-full uppercase tracking-wider",children:"Module 006_004 · Topic 9"}),e.jsx("span",{className:"px-3 py-1 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-xs font-semibold rounded-full",children:"The PECS Rule"})]}),e.jsxs("h1",{className:"text-xl sm:text-2xl md:text-3xl font-bold text-white tracking-tight",children:["Joshua Bloch's PECS Principle: ",e.jsx("code",{className:"text-emerald-400 font-mono",children:'"Producer Extends, Consumer Super"'})]}),e.jsx("p",{className:"text-base md:text-lg text-slate-400 leading-relaxed max-w-4xl",children:"Master Effective Java Item 31: applying the gold standard PECS rule to design highly flexible, polymorphic enterprise generic APIs."})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsxs("h2",{className:"text-2xl font-bold text-emerald-400 flex items-center gap-2",children:[e.jsx("span",{children:"💻"})," Hands-On Java Demo Code"]}),e.jsx(r,{fileModule:i,title:"PecsPrincipleJoshuaBlochDemo.java",highlightLines:[7,10,16,17,18,28,29,34,35]})]}),e.jsx("section",{className:"space-y-4",children:e.jsx(t,{title:"PECS Principle FAQs",questions:a})}),e.jsx("section",{className:"space-y-4",children:e.jsx(n,{content:o,title:"Module 006_004 Topic 9: The PECS Principle",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Printable Note",downloadFileName:"006_004_topic9_pecs_principle_note.txt"})}),e.jsx(s,{note:"Joshua Bloch's PECS rule is legendary in the Java universe! 'Producer Extends, Consumer Super'! If data is coming out of a collection, use extends; if data is going into a collection, use super! — Sukanta Hui"})]})}export{P as default};
