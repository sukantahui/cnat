import{j as e}from"./vendor-react-core-Doz9nIC6.js";import{J as r}from"./JavaFileLoader-BfBG3xz_.js";import{F as t}from"./FAQTemplate-CkSqDH4B.js";import{P as n}from"./PlainTextPrint-C08xhKA4.js";import{T as a}from"./TeacherSukantaHui-CC0AKmkm.js";import"./JavaCodeBlock-BwsLxS3r.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-BtJHuk7w.js";const s=`/**\r
 * Java Core Tutorial - Module 006_004: Wildcards & The PECS Principle\r
 * Topic 6: The Complete Read/Write Rules with Wildcards: Summary & Matrix\r
 * Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
 */\r
\r
package com.coderaccotax.javatutorial.generics;\r
\r
import java.util.ArrayList;\r
import java.util.List;\r
\r
public class WildcardReadWriteRulesSummaryDemo {\r
\r
    public static void main(String[] args) {\r
        System.out.println("==========================================================================");\r
        System.out.println(" TOPIC 6: WILDCARD READ/WRITE RULES MATRIX - BARRACKPORE");\r
        System.out.println("==========================================================================\\n");\r
\r
        List<Integer> intList = new ArrayList<>(List.of(10, 20, 30));\r
\r
        // 1. UPPER BOUNDED (? extends Number) -> READ-ONLY:\r
        List<? extends Number> producer = intList;\r
        Number readValue = producer.get(0); // READ OK: returns Number\r
        // producer.add(40);               // WRITE FAILS: Compile Error!\r
        System.out.println(">>> 1. Upper Bounded (? extends Number):");\r
        System.out.println("  Read Value  : " + readValue);\r
        System.out.println("  Write Status: PROHIBITED (Compiler rejects producer.add())");\r
\r
        // 2. LOWER BOUNDED (? super Integer) -> WRITE-ENABLED:\r
        List<? super Integer> consumer = intList;\r
        consumer.add(40);                   // WRITE OK: adds Integer\r
        Object readObj = consumer.get(0);   // READ: returns Object\r
        System.out.println("\\n>>> 2. Lower Bounded (? super Integer):");\r
        System.out.println("  Write Status: PERMITTED (Added 40 successfully)");\r
        System.out.println("  Read Type   : " + readObj.getClass().getSimpleName() + " (read as java.lang.Object)");\r
        System.out.println("  Updated List: " + intList);\r
\r
        System.out.println("\\n>>> WILDCARD READ/WRITE DECISION MATRIX:");\r
        System.out.println("+----------------------+---------------------------+---------------------------+");\r
        System.out.println("| Wildcard Form        | Reading Elements (get())  | Writing Elements (add())  |");\r
        System.out.println("+----------------------+---------------------------+---------------------------+");\r
        System.out.println("| List<?>              | Read as Object            | Prohibited (only null)    |");\r
        System.out.println("| List<? extends T>    | Read as T (PRODUCER)      | Prohibited (only null)    |");\r
        System.out.println("| List<? super T>      | Read as Object            | Allowed for T (CONSUMER)  |");\r
        System.out.println("+----------------------+---------------------------+---------------------------+");\r
\r
        System.out.println("\\n==========================================================================");\r
    }\r
}`,i=`================================================================================\r
JAVA CORE TUTORIAL - QUICK REVISION GUIDE\r
Module 006_004: Wildcards & The PECS Principle\r
Topic 6: Wildcard Read/Write Rules\r
Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
================================================================================\r
\r
1. READ/WRITE DECISION MATRIX:\r
   - '<? extends T>': PRODUCER &rarr; read 'T', cannot write.\r
   - '<? super T>': CONSUMER &rarr; write 'T', read 'Object'.\r
   - '<?>': UNBOUNDED &rarr; read 'Object', cannot write.\r
   - Only 'null' can be written to '<? extends T>' or '<?>'.\r
\r
================================================================================\r
Classroom Practice: Barrackpore Academy | Mentor: Sukanta Hui\r
================================================================================`,o=[{question:"Summarize the complete Read/Write rule matrix for 'List<?>', 'List<? extends T>', and 'List<? super T>'.",shortAnswer:"1. 'List<?>': Reads as 'Object', Writes prohibited (only null). 2. 'List<? extends T>': Reads as 'T' (Data Producer), Writes prohibited (only null). 3. 'List<? super T>': Reads as 'Object', Writes permitted for 'T' and subtypes of 'T' (Data Consumer).",explanation:"The foundational mental model for all Java generic collection manipulation.",hint:"extends = read as T, no write; super = write as T, read as Object; ? = read as Object, no write.",level:"Intermediate",codeExample:"List<? extends T> prod; T t = prod.get(0); List<? super T> cons; cons.add(t);"}];function T(){return e.jsxs("div",{className:"space-y-12 px-4 md:px-8 py-8 text-slate-200 bg-slate-900 min-h-screen",children:[e.jsxs("header",{className:"space-y-4 border-b border-slate-800 pb-6",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"px-3 py-1 bg-sky-500/10 text-sky-400 border border-sky-500/20 text-xs font-semibold rounded-full uppercase tracking-wider",children:"Module 006_004 · Topic 6"}),e.jsx("span",{className:"px-3 py-1 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-xs font-semibold rounded-full",children:"Read/Write Rules"})]}),e.jsx("h1",{className:"text-3xl md:text-4xl font-extrabold text-white tracking-tight",children:"The Read/Write Rules with Wildcards: Complete Decision Matrix"}),e.jsxs("p",{className:"text-base md:text-lg text-slate-400 leading-relaxed max-w-4xl",children:["Master the complete decision matrix: analyzing why ",e.jsx("code",{className:"text-emerald-300 font-mono",children:"<? extends T>"})," is read-only as T while ",e.jsx("code",{className:"text-purple-300 font-mono",children:"<? super T>"})," is write-enabled for T."]})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsxs("h2",{className:"text-2xl font-bold text-emerald-400 flex items-center gap-2",children:[e.jsx("span",{children:"💻"})," Hands-On Java Demo Code"]}),e.jsx(r,{fileModule:s,title:"WildcardReadWriteRulesSummaryDemo.java",highlightLines:[7,10,16,17,24,25,26]})]}),e.jsx("section",{className:"space-y-4",children:e.jsx(t,{title:"Read/Write Rules FAQs",questions:o})}),e.jsx("section",{className:"space-y-4",children:e.jsx(n,{content:i,title:"Module 006_004 Topic 6: Wildcard Read/Write Rules",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Printable Note",downloadFileName:"006_004_topic6_wildcard_read_write_rules_note.txt"})}),e.jsx(a,{note:"If you only remember one thing from generics, remember this: 'extends' is for reading (get), and 'super' is for writing (add)! This simple rule will make you pass any Java interview with flying colors! — Sukanta Hui"})]})}export{T as default};
