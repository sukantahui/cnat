import{j as e}from"./vendor-react-core-Doz9nIC6.js";import{J as a}from"./JavaFileLoader-BfBG3xz_.js";import{F as r}from"./FAQTemplate-BHhlgA96.js";import{P as n}from"./PlainTextPrint-C08xhKA4.js";import{T as t}from"./TeacherSukantaHui-CEPuAfsb.js";import"./JavaCodeBlock-BwsLxS3r.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-DGCamHnX.js";const o=`/**\r
 * Java Core Tutorial - Module 007_008: Sorting, Comparable, Comparator & Collections\r
 * Topic 1: The java.lang.Comparable<T> Interface: Single Method 'int compareTo(T o)'\r
 * Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
 */\r
\r
package com.coderaccotax.javatutorial.collections;\r
\r
import java.util.ArrayList;\r
import java.util.Collections;\r
import java.util.List;\r
\r
class BranchOffice implements Comparable<BranchOffice> {\r
    private final int branchCode;\r
    private final String location;\r
\r
    public BranchOffice(int branchCode, String location) {\r
        this.branchCode = branchCode;\r
        this.location = location;\r
    }\r
\r
    public int getBranchCode() { return branchCode; }\r
    public String getLocation() { return location; }\r
\r
    // Implementing single contract method of java.lang.Comparable<T>:\r
    @Override\r
    public int compareTo(BranchOffice other) {\r
        // Compares 'this' against 'other':\r
        return Integer.compare(this.branchCode, other.branchCode);\r
    }\r
\r
    @Override\r
    public String toString() {\r
        return String.format("Branch[Code=%d, Location=%s]", branchCode, location);\r
    }\r
}\r
\r
public class ComparableInterfaceContractDemo {\r
\r
    public static void main(String[] args) {\r
        System.out.println("==========================================================================");\r
        System.out.println(" TOPIC 1: java.lang.Comparable<T> CONTRACT - BARRACKPORE");\r
        System.out.println("==========================================================================\\n");\r
\r
        List<BranchOffice> branches = new ArrayList<>();\r
        branches.add(new BranchOffice(700120, "Barrackpore Central"));\r
        branches.add(new BranchOffice(700123, "Shyamnagar Hub"));\r
        branches.add(new BranchOffice(700121, "Ichapur Extension"));\r
        branches.add(new BranchOffice(700122, "Naihati Center"));\r
\r
        System.out.println(">>> 1. Unsorted Branches:");\r
        branches.forEach(b -> System.out.println("  " + b));\r
\r
        // Collections.sort() uses Comparable.compareTo() automatically:\r
        Collections.sort(branches);\r
\r
        System.out.println("\\n>>> 2. Sorted Branches by Postal Branch Code (Comparable.compareTo):");\r
        branches.forEach(b -> System.out.println("  " + b));\r
\r
        System.out.println("\\n==========================================================================");\r
    }\r
}`,i=`================================================================================\r
JAVA CORE TUTORIAL - QUICK REVISION GUIDE\r
Module 007_008: Sorting, Comparable, Comparator & Collections\r
Topic 1: java.lang.Comparable Contract\r
Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
================================================================================\r
\r
1. COMPARABLE INTERFACE:\r
   - Package: 'java.lang' (auto-imported).\r
   - Single method: 'int compareTo(T o)'.\r
   - Compares 'this' (current object) with 'o' (other object).\r
   - Enables 'Collections.sort(list)' and 'Arrays.sort(arr)'.\r
\r
================================================================================\r
Classroom Practice: Barrackpore Academy | Mentor: Sukanta Hui\r
================================================================================`,c=[{question:"Where is 'Comparable<T>' located in the Java standard library, and how many abstract methods does it define?",shortAnswer:"'Comparable<T>' is located in the core 'java.lang' package (meaning it is automatically imported without any import statement). It defines exactly ONE abstract method: 'public int compareTo(T o)'.",explanation:"Fundamental standard library interface for natural comparison.",hint:"Located in java.lang (no import needed); defines single method: int compareTo(T o).",level:"Beginner",codeExample:"public class Employee implements Comparable<Employee> { public int compareTo(Employee o) { ... } }"}];function x(){return e.jsxs("div",{className:"space-y-12 px-4 md:px-8 py-8 text-slate-200 bg-slate-900 min-h-screen",children:[e.jsxs("header",{className:"space-y-4 border-b border-slate-800 pb-6",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"px-3 py-1 bg-sky-500/10 text-sky-400 border border-sky-500/20 text-xs font-semibold rounded-full uppercase tracking-wider",children:"Module 007_008 · Topic 1"}),e.jsx("span",{className:"px-3 py-1 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-xs font-semibold rounded-full",children:"Comparable Contract"})]}),e.jsxs("h1",{className:"text-xl sm:text-2xl md:text-3xl font-bold text-white tracking-tight",children:["The ",e.jsx("code",{className:"text-emerald-400 font-mono",children:"java.lang.Comparable<T>"})," Interface: ",e.jsx("code",{className:"text-emerald-400 font-mono",children:"int compareTo(T o)"})]}),e.jsxs("p",{className:"text-base md:text-lg text-slate-400 leading-relaxed max-w-4xl",children:["Implement natural ordering contracts: declaring ",e.jsx("code",{className:"text-emerald-300 font-mono",children:"Comparable<T>"})," on domain classes to enable seamless sorting via ",e.jsx("code",{className:"text-sky-300 font-mono",children:"Collections.sort()"}),"."]})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsxs("h2",{className:"text-2xl font-bold text-emerald-400 flex items-center gap-2",children:[e.jsx("span",{children:"💻"})," Hands-On Java Demo Code"]}),e.jsx(a,{fileModule:o,title:"ComparableInterfaceContractDemo.java",highlightLines:[7,10,22,23,24,25,41,42]})]}),e.jsx("section",{className:"space-y-4",children:e.jsx(r,{title:"Comparable Contract FAQs",questions:c})}),e.jsx("section",{className:"space-y-4",children:e.jsx(n,{content:i,title:"Module 007_008 Topic 1: Comparable Interface Contract",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Printable Note",downloadFileName:"007_008_topic1_comparable_interface_contract_note.txt"})}),e.jsx(t,{note:"Notice that Comparable belongs to 'java.lang', which means you don't even need to import it! When your class implements Comparable, it gains a permanent default sorting behavior! — Sukanta Hui"})]})}export{x as default};
