import{j as e}from"./vendor-react-core-Doz9nIC6.js";import{J as t}from"./JavaFileLoader-BfBG3xz_.js";import{F as n}from"./FAQTemplate-BHhlgA96.js";import{P as r}from"./PlainTextPrint-C08xhKA4.js";import{T as a}from"./TeacherSukantaHui-RpFLNJ5A.js";import"./JavaCodeBlock-BwsLxS3r.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-wprqVFW_.js";const s=`/**\r
 * Java Core Tutorial - Module 006_004: Wildcards & The PECS Principle\r
 * Topic 7: ? extends T is READ-ONLY (Producer Role Mechanics)\r
 * Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
 */\r
\r
package com.coderaccotax.javatutorial.generics;\r
\r
import java.util.ArrayList;\r
import java.util.List;\r
\r
public class ProducerExtendsReadOnlyMechanicsDemo {\r
\r
    // PRODUCER: It PRODUCES (provides) elements of type 'Number' to our algorithm:\r
    public static double computeTotalExpense(List<? extends Number> expenseLedger) {\r
        double total = 0.0;\r
        // READING is 100% legal:\r
        for (Number expense : expenseLedger) {\r
            total += expense.doubleValue();\r
        }\r
\r
        // WRITING IS FORBIDDEN:\r
        // expenseLedger.add(500); // COMPILATION ERROR: Cannot add Integer to List<? extends Number>!\r
        // expenseLedger.add(100.50); // COMPILATION ERROR: Cannot add Double to List<? extends Number>!\r
\r
        return total;\r
    }\r
\r
    public static void main(String[] args) {\r
        System.out.println("==========================================================================");\r
        System.out.println(" TOPIC 7: PRODUCER EXTENDS (READ-ONLY) MECHANICS - BARRACKPORE");\r
        System.out.println("==========================================================================\\n");\r
\r
        List<Integer> bkpExpenses = List.of(1200, 3500, 4800);\r
        List<Double> naihatiExpenses = List.of(2450.75, 1890.25, 950.00);\r
\r
        System.out.printf(">>> Barrackpore Total Expenses: ₹%.2f%n", computeTotalExpense(bkpExpenses));\r
        System.out.printf(">>> Naihati Total Expenses    : ₹%.2f%n", computeTotalExpense(naihatiExpenses));\r
\r
        System.out.println("\\n>>> WHY PRODUCER EXTENDS IS STRICTLY READ-ONLY:");\r
        System.out.println("  1. The collection acts as a data supplier / source.");\r
        System.out.println("  2. If the caller passed a 'List<Double>', attempting to add an 'Integer' would corrupt heap memory.");\r
        System.out.println("  3. The compiler enforces read-only immutability to guarantee type safety.");\r
\r
        System.out.println("\\n==========================================================================");\r
    }\r
}`,o=`================================================================================\r
JAVA CORE TUTORIAL - QUICK REVISION GUIDE\r
Module 006_004: Wildcards & The PECS Principle\r
Topic 7: Producer Extends Read-Only\r
Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
================================================================================\r
\r
1. PRODUCER EXTENDS RULES:\r
   - 'List<? extends T>' serves as a DATA PRODUCER.\r
   - Elements are safely read as 'T'.\r
   - 'add(element)' is completely blocked at compile time.\r
   - Preserves collection integrity regardless of actual subtype.\r
\r
================================================================================\r
Classroom Practice: Barrackpore Academy | Mentor: Sukanta Hui\r
================================================================================`,l=[{question:"Why does the Java compiler prevent calling 'add(element)' on a collection declared with '? extends T'?",shortAnswer:"Because '? extends T' means the list holds some specific, unknown subtype of 'T'. For example, if the caller passed an 'ArrayList<Integer>', and the method was allowed to call 'add(Double)', it would insert a Double into an Integer list. Since the compiler cannot know which specific subtype was passed at runtime, it disallows all element additions.",explanation:"Ensures type invariants are strictly maintained.",hint:"The concrete subtype is unknown at compile time, so adding elements would risk inserting incompatible types.",level:"Intermediate",codeExample:"List<? extends Number> list = new ArrayList<Integer>(); // list.add(10.5) must be blocked!"}];function y(){return e.jsxs("div",{className:"space-y-12 px-4 md:px-8 py-8 text-slate-200 bg-slate-900 min-h-screen",children:[e.jsxs("header",{className:"space-y-4 border-b border-slate-800 pb-6",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"px-3 py-1 bg-sky-500/10 text-sky-400 border border-sky-500/20 text-xs font-semibold rounded-full uppercase tracking-wider",children:"Module 006_004 · Topic 7"}),e.jsx("span",{className:"px-3 py-1 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-xs font-semibold rounded-full",children:"Producer Role"})]}),e.jsxs("h1",{className:"text-xl sm:text-2xl md:text-3xl font-bold text-white tracking-tight",children:[e.jsx("code",{className:"text-emerald-400 font-mono",children:"? extends T"})," is READ-ONLY: Data Producer Role & Mutation Guards"]}),e.jsxs("p",{className:"text-base md:text-lg text-slate-400 leading-relaxed max-w-4xl",children:["Analyze producer mechanics: discovering why upper bounded wildcards (",e.jsx("code",{className:"text-emerald-300 font-mono",children:"<? extends T>"}),") allow element extraction as T while strictly prohibiting collection mutation."]})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsxs("h2",{className:"text-2xl font-bold text-emerald-400 flex items-center gap-2",children:[e.jsx("span",{children:"💻"})," Hands-On Java Demo Code"]}),e.jsx(t,{fileModule:s,title:"ProducerExtendsReadOnlyMechanicsDemo.java",highlightLines:[7,10,14,15,16,27,28]})]}),e.jsx("section",{className:"space-y-4",children:e.jsx(n,{title:"Producer Extends FAQs",questions:l})}),e.jsx("section",{className:"space-y-4",children:e.jsx(r,{content:o,title:"Module 006_004 Topic 7: Producer Extends",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Printable Note",downloadFileName:"006_004_topic7_producer_extends_note.txt"})}),e.jsx(a,{note:"When your method only reads data from a collection to calculate totals or print reports, always declare the parameter with '? extends T'! It makes your method flexible enough to accept any child list! — Sukanta Hui"})]})}export{y as default};
