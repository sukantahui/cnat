import{j as t}from"./vendor-react-core-Doz9nIC6.js";import{J as r}from"./JavaFileLoader-BfBG3xz_.js";import{F as a}from"./FAQTemplate-CkSqDH4B.js";import{P as n}from"./PlainTextPrint-C08xhKA4.js";import{T as e}from"./TeacherSukantaHui-CyIG3xbg.js";import"./JavaCodeBlock-BwsLxS3r.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-CIaKtAt4.js";const l=`/**\r
 * Java Core Tutorial - Module 007_008: Sorting, Comparable, Comparator & Collections\r
 * Topic 9: Null-Safe Sorting: Comparator.nullsFirst() & Comparator.nullsLast()\r
 * Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
 */\r
\r
package com.coderaccotax.javatutorial.collections;\r
\r
import java.util.ArrayList;\r
import java.util.Arrays;\r
import java.util.Comparator;\r
import java.util.List;\r
\r
public class NullSafeComparatorWrappersDemo {\r
\r
    public static void main(String[] args) {\r
        System.out.println("==========================================================================");\r
        System.out.println(" TOPIC 9: NULL-SAFE COMPARATORS (nullsFirst & nullsLast) - BARRACKPORE");\r
        System.out.println("==========================================================================\\n");\r
\r
        List<String> branchCodes = new ArrayList<>(Arrays.asList(\r
                "BRK-101", null, "NAI-102", null, "SHY-103", "ICH-104"\r
        ));\r
\r
        System.out.println(">>> 1. Original List with Nulls: " + branchCodes);\r
\r
        // 1. Sorting with nullsFirst():\r
        branchCodes.sort(Comparator.nullsFirst(Comparator.naturalOrder()));\r
        System.out.println("\\n>>> 2. Sorted with Comparator.nullsFirst():");\r
        System.out.println("  " + branchCodes + " (All nulls placed safely at FRONT!)");\r
\r
        // 2. Sorting with nullsLast():\r
        branchCodes.sort(Comparator.nullsLast(Comparator.naturalOrder()));\r
        System.out.println("\\n>>> 3. Sorted with Comparator.nullsLast():");\r
        System.out.println("  " + branchCodes + " (All nulls placed safely at END!)");\r
\r
        System.out.println("\\n>>> WHY NULL-SAFE WRAPPERS PREVENT PRODUCTION OUTAGES:");\r
        System.out.println("  - Without nullsFirst/Last: A single null in a 1,000,000-row list will crash the sorting thread with NullPointerException!");\r
        System.out.println("  - With nullsFirst/Last: Java intercepts null references before calling compareTo(), positioning nulls safely without exceptions.");\r
\r
        System.out.println("\\n==========================================================================");\r
    }\r
}`,s=`================================================================================\r
JAVA CORE TUTORIAL - QUICK REVISION GUIDE\r
Module 007_008: Sorting, Comparable, Comparator & Collections\r
Topic 9: Null-Safe Comparators\r
Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
================================================================================\r
\r
1. NULL-SAFE COMPARATORS:\r
   - Standard sorting crashes on 'null' with NPE.\r
   - 'Comparator.nullsFirst(c)': places all nulls at the beginning.\r
   - 'Comparator.nullsLast(c)': places all nulls at the end.\r
   - Essential for real-world enterprise databases with nullable columns.\r
\r
================================================================================\r
Classroom Practice: Barrackpore Academy | Mentor: Sukanta Hui\r
================================================================================`,o=[{question:"What happens if a collection containing 'null' elements is sorted with a standard Comparator, and how do 'nullsFirst()' and 'nullsLast()' solve this?",shortAnswer:"Sorting a collection containing 'null' elements with standard 'Collections.sort()' or standard Comparators immediately throws a runtime 'NullPointerException' because Java attempts to call 'e.compareTo(null)' or 'null.compareTo(e)'. 'Comparator.nullsFirst(c)' and 'Comparator.nullsLast(c)' wrap the comparator, intercepting nulls and placing them safely at the beginning or end of the sorted sequence with zero exceptions.",explanation:"Crucial null-safety enhancement added in Java 8.",hint:"Standard sorting crashes with NPE on nulls; nullsFirst/nullsLast position nulls at the start or end safely.",level:"Intermediate",codeExample:"list.sort(Comparator.nullsLast(Comparator.comparing(User::getEmail)));"}];function C(){return t.jsxs("div",{className:"space-y-12 px-4 md:px-8 py-8 text-slate-200 bg-slate-900 min-h-screen",children:[t.jsxs("header",{className:"space-y-4 border-b border-slate-800 pb-6",children:[t.jsxs("div",{className:"flex items-center gap-3",children:[t.jsx("span",{className:"px-3 py-1 bg-sky-500/10 text-sky-400 border border-sky-500/20 text-xs font-semibold rounded-full uppercase tracking-wider",children:"Module 007_008 · Topic 9"}),t.jsx("span",{className:"px-3 py-1 bg-rose-500/10 text-rose-400 border border-rose-500/20 text-xs font-semibold rounded-full",children:"Null-Safe Sorting"})]}),t.jsxs("h1",{className:"text-3xl md:text-4xl font-extrabold text-white tracking-tight",children:["Handling Nulls: ",t.jsx("code",{className:"text-emerald-400 font-mono",children:"Comparator.nullsFirst()"})," & ",t.jsx("code",{className:"text-sky-400 font-mono",children:"Comparator.nullsLast()"})]}),t.jsxs("p",{className:"text-base md:text-lg text-slate-400 leading-relaxed max-w-4xl",children:["Prevent production sorting crashes: wrapping comparators with ",t.jsx("code",{className:"text-emerald-300 font-mono",children:"nullsFirst()"})," and ",t.jsx("code",{className:"text-sky-300 font-mono",children:"nullsLast()"})," to safely manage nullable database records."]})]}),t.jsxs("section",{className:"space-y-4",children:[t.jsxs("h2",{className:"text-2xl font-bold text-emerald-400 flex items-center gap-2",children:[t.jsx("span",{children:"💻"})," Hands-On Java Demo Code"]}),t.jsx(r,{fileModule:l,title:"NullSafeComparatorWrappersDemo.java",highlightLines:[7,10,16,17,21,22,26,27,31,32]})]}),t.jsx("section",{className:"space-y-4",children:t.jsx(a,{title:"Null-Safe Sorting FAQs",questions:o})}),t.jsx("section",{className:"space-y-4",children:t.jsx(n,{content:s,title:"Module 007_008 Topic 9: Null-Safe Comparators",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Printable Note",downloadFileName:"007_008_topic9_null_safe_comparators_note.txt"})}),t.jsx(e,{note:"In real-world databases, some columns contain null values! If you sort without null protection, Java will crash with a NullPointerException! Always wrap your comparator with 'Comparator.nullsLast()' to keep your application bulletproof! — Sukanta Hui"})]})}export{C as default};
