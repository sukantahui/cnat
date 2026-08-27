import{j as e}from"./vendor-react-core-Doz9nIC6.js";import{J as t}from"./JavaFileLoader-BfBG3xz_.js";import{F as n}from"./FAQTemplate-CkSqDH4B.js";import{P as r}from"./PlainTextPrint-C08xhKA4.js";import{T as s}from"./TeacherSukantaHui-CC0AKmkm.js";import"./JavaCodeBlock-BwsLxS3r.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-BtJHuk7w.js";const a=`/**\r
 * Java Core Tutorial - Module 006_004: Wildcards & The PECS Principle\r
 * Topic 4: Upper Bounded Wildcard (List<? extends Number>): Covariance & Read Mechanics\r
 * Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
 */\r
\r
package com.coderaccotax.javatutorial.generics;\r
\r
import java.util.List;\r
\r
public class UpperBoundedWildcardCovarianceDemo {\r
\r
    // Upper Bounded Wildcard Method (Covariance):\r
    // Accepts List<Number>, List<Integer>, List<Double>, List<Long>, etc.\r
    public static double sumOfList(List<? extends Number> numbers) {\r
        double sum = 0.0;\r
        for (Number num : numbers) { // READ-SAFE: Elements are guaranteed to be at least a Number!\r
            sum += num.doubleValue();\r
        }\r
        return sum;\r
    }\r
\r
    public static void main(String[] args) {\r
        System.out.println("==========================================================================");\r
        System.out.println(" TOPIC 4: UPPER BOUNDED WILDCARD (List<? extends Number>) - BARRACKPORE");\r
        System.out.println("==========================================================================\\n");\r
\r
        List<Integer> studentRolls = List.of(101, 102, 103, 104);\r
        List<Double> tuitionFees = List.of(8500.50, 9200.75, 9800.00);\r
        List<Long> accessTimestamps = List.of(100000L, 200000L, 300000L);\r
\r
        System.out.println(">>> 1. Executing sumOfList across Covariant Collections:");\r
        System.out.printf("  Sum of Integer Rolls      : %.1f%n", sumOfList(studentRolls));\r
        System.out.printf("  Sum of Tuition Fees       : ₹%.2f%n", sumOfList(tuitionFees));\r
        System.out.printf("  Sum of Access Timestamps  : %.1f%n", sumOfList(accessTimestamps));\r
\r
        System.out.println("\\n>>> WHAT IS COVARIANCE IN GENERICS?");\r
        System.out.println("  1. 'List<? extends Number>' creates a COVARIANT subtyping relationship.");\r
        System.out.println("  2. 'List<Integer>' IS considered a subtype of 'List<? extends Number>'!");\r
        System.out.println("  3. Read-Safe as Number, but WRITE-RESTRICTED (you cannot add numbers into it).");\r
\r
        System.out.println("\\n==========================================================================");\r
    }\r
}`,i=`================================================================================\r
JAVA CORE TUTORIAL - QUICK REVISION GUIDE\r
Module 006_004: Wildcards & The PECS Principle\r
Topic 4: Upper Bounded Wildcard (Covariance)\r
Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
================================================================================\r
\r
1. UPPER BOUNDED WILDCARD (COVARIANCE):\r
   - 'List<? extends Number>': accepts Number and any subtype.\r
   - Elements can be read safely as 'Number'.\r
   - Acts as a DATA PRODUCER.\r
   - Cannot add elements (except null) to preserve type invariants.\r
\r
================================================================================\r
Classroom Practice: Barrackpore Academy | Mentor: Sukanta Hui\r
================================================================================`,o=[{question:"What subtyping relationship does 'List<? extends Number>' establish (Covariance vs Contravariance), and what type can you safely read from it?",shortAnswer:"'List<? extends Number>' establishes a 'Covariant' relationship, allowing 'List<Integer>', 'List<Double>', or any subtype list to be assigned to it. You can safely READ elements from it as 'Number' (or 'Object'), but you CANNOT write/add elements into it because the compiler does not know the exact concrete subtype.",explanation:"Core producer role in Joshua Bloch's PECS principle.",hint:"Establishes Covariance; elements can be read safely as Number.",level:"Intermediate",codeExample:"List<? extends Number> list = new ArrayList<Integer>(); Number n = list.get(0); // Valid read"}];function f(){return e.jsxs("div",{className:"space-y-12 px-4 md:px-8 py-8 text-slate-200 bg-slate-900 min-h-screen",children:[e.jsxs("header",{className:"space-y-4 border-b border-slate-800 pb-6",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"px-3 py-1 bg-sky-500/10 text-sky-400 border border-sky-500/20 text-xs font-semibold rounded-full uppercase tracking-wider",children:"Module 006_004 · Topic 4"}),e.jsx("span",{className:"px-3 py-1 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-xs font-semibold rounded-full",children:"Covariant Wildcards"})]}),e.jsxs("h1",{className:"text-3xl md:text-4xl font-extrabold text-white tracking-tight",children:["Upper Bounded Wildcard (",e.jsx("code",{className:"text-emerald-400 font-mono",children:"List<? extends Number>"}),"): Covariance"]}),e.jsxs("p",{className:"text-base md:text-lg text-slate-400 leading-relaxed max-w-4xl",children:["Implement covariant collection reading: accepting parameterized subtypes with ",e.jsx("code",{className:"text-emerald-300 font-mono",children:"<? extends T>"})," and accessing member methods safely as supertypes."]})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsxs("h2",{className:"text-2xl font-bold text-emerald-400 flex items-center gap-2",children:[e.jsx("span",{children:"💻"})," Hands-On Java Demo Code"]}),e.jsx(t,{fileModule:a,title:"UpperBoundedWildcardCovarianceDemo.java",highlightLines:[7,10,14,15,16,25,26,27]})]}),e.jsx("section",{className:"space-y-4",children:e.jsx(n,{title:"Upper Bounded Wildcards FAQs",questions:o})}),e.jsx("section",{className:"space-y-4",children:e.jsx(r,{content:i,title:"Module 006_004 Topic 4: Upper Bounded Wildcard",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Printable Note",downloadFileName:"006_004_topic4_upper_bounded_wildcard_note.txt"})}),e.jsx(s,{note:"'List<? extends Number>' lets you accept a List of Integers, Doubles, or Longs all in one method! You can read numbers out of it freely, making it the perfect data PRODUCER! — Sukanta Hui"})]})}export{f as default};
