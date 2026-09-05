import{j as e}from"./vendor-react-core-Doz9nIC6.js";import{J as t}from"./JavaFileLoader-BfBG3xz_.js";import{F as n}from"./FAQTemplate-BHhlgA96.js";import{P as o}from"./PlainTextPrint-C08xhKA4.js";import{T as s}from"./TeacherSukantaHui-DerPxfxp.js";import"./JavaCodeBlock-BwsLxS3r.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-CH1iX9C8.js";const i=`/**\r
 * Java Core Tutorial - Module 007_008: Sorting, Comparable, Comparator & Collections\r
 * Topic 12: Statistical Analysis: Collections.min(), max(), frequency(), and disjoint()\r
 * Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
 */\r
\r
package com.coderaccotax.javatutorial.collections;\r
\r
import java.util.Collections;\r
import java.util.List;\r
import java.util.Set;\r
\r
public class CollectionsStatisticalAnalysisDemo {\r
\r
    public static void main(String[] args) {\r
        System.out.println("==========================================================================");\r
        System.out.println(" TOPIC 12: Collections STATISTICAL ANALYSIS METHODS - BARRACKPORE");\r
        System.out.println("==========================================================================\\n");\r
\r
        List<Integer> feeReceipts = List.of(5000, 8500, 5000, 12000, 5000, 9500);\r
\r
        // 1. min() and max():\r
        int lowestFee = Collections.min(feeReceipts);\r
        int highestFee = Collections.max(feeReceipts);\r
\r
        System.out.println(">>> 1. Extremes (min & max):");\r
        System.out.println("  Lowest Fee Receipt  : ₹" + lowestFee);\r
        System.out.println("  Highest Fee Receipt : ₹" + highestFee);\r
\r
        // 2. frequency(): Counting Occurrences of a Target Value:\r
        int count5000 = Collections.frequency(feeReceipts, 5000);\r
        System.out.println("\\n>>> 2. Frequency Analysis:");\r
        System.out.println("  Number of ₹5,000 receipts : " + count5000 + " occurrences");\r
\r
        // 3. disjoint(): Testing if Two Collections Share Zero Common Elements:\r
        Set<String> barrackporeCourses = Set.of("Java Core", "Spring Boot", "GST & Taxation");\r
        Set<String> medicalCourses = Set.of("Anatomy", "Pharmacology");\r
        Set<String> commerceCourses = Set.of("GST & Taxation", "Auditing");\r
\r
        boolean isDisjointMedical = Collections.disjoint(barrackporeCourses, medicalCourses);\r
        boolean isDisjointCommerce = Collections.disjoint(barrackporeCourses, commerceCourses);\r
\r
        System.out.println("\\n>>> 3. Set Intersection Analysis (Collections.disjoint):");\r
        System.out.println("  Barrackpore vs Medical  (Disjoint?): " + isDisjointMedical + " (Zero shared courses)");\r
        System.out.println("  Barrackpore vs Commerce (Disjoint?): " + isDisjointCommerce + " (Shares 'GST & Taxation'!)");\r
\r
        System.out.println("\\n==========================================================================");\r
    }\r
}`,r=`================================================================================\r
JAVA CORE TUTORIAL - QUICK REVISION GUIDE\r
Module 007_008: Sorting, Comparable, Comparator & Collections\r
Topic 12: Collections Statistical Analysis\r
Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
================================================================================\r
\r
1. STATISTICAL METHODS:\r
   - 'Collections.min(c)' / 'max(c)': find extreme elements in O(n).\r
   - 'Collections.frequency(c, obj)': count occurrences in 1 pass.\r
   - 'Collections.disjoint(c1, c2)': returns true if no common elements exist.\r
   - Works uniformly across all Collection types (List, Set, Queue).\r
\r
================================================================================\r
Classroom Practice: Barrackpore Academy | Mentor: Sukanta Hui\r
================================================================================`,a=[{question:"What does 'Collections.disjoint(c1, c2)' do and when does it return true?",shortAnswer:"'Collections.disjoint(c1, c2)' tests whether two collections have NO elements in common (i.e. their mathematical intersection is empty). It returns 'true' if the two specified collections share zero identical elements; and returns 'false' if they contain at least one common element.",explanation:"Standard set analysis method in java.util.Collections.",hint:"Returns true if c1 and c2 have zero common elements (empty intersection).",level:"Beginner",codeExample:"boolean emptyIntersection = Collections.disjoint(listA, listB);"}];function h(){return e.jsxs("div",{className:"space-y-12 px-4 md:px-8 py-8 text-slate-200 bg-slate-900 min-h-screen",children:[e.jsxs("header",{className:"space-y-4 border-b border-slate-800 pb-6",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"px-3 py-1 bg-sky-500/10 text-sky-400 border border-sky-500/20 text-xs font-semibold rounded-full uppercase tracking-wider",children:"Module 007_008 · Topic 12"}),e.jsx("span",{className:"px-3 py-1 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-xs font-semibold rounded-full",children:"Statistical Methods"})]}),e.jsxs("h1",{className:"text-xl sm:text-2xl md:text-3xl font-bold text-white tracking-tight",children:["Statistical Operations: ",e.jsx("code",{className:"text-emerald-400 font-mono",children:"min()"}),", ",e.jsx("code",{className:"text-sky-400 font-mono",children:"max()"}),", ",e.jsx("code",{className:"text-amber-400 font-mono",children:"frequency()"})," & ",e.jsx("code",{className:"text-purple-400 font-mono",children:"disjoint()"})]}),e.jsxs("p",{className:"text-base md:text-lg text-slate-400 leading-relaxed max-w-4xl",children:["Execute fast collection metrics: extracting extremes (",e.jsx("code",{className:"text-emerald-300 font-mono",children:"min/max"}),"), computing element occurrences (",e.jsx("code",{className:"text-amber-300 font-mono",children:"frequency"}),"), and testing disjoint set intersections."]})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsxs("h2",{className:"text-2xl font-bold text-emerald-400 flex items-center gap-2",children:[e.jsx("span",{children:"💻"})," Hands-On Java Demo Code"]}),e.jsx(t,{fileModule:i,title:"CollectionsStatisticalAnalysisDemo.java",highlightLines:[7,10,16,17,22,23,30,31]})]}),e.jsx("section",{className:"space-y-4",children:e.jsx(n,{title:"Statistical Analysis FAQs",questions:a})}),e.jsx("section",{className:"space-y-4",children:e.jsx(o,{content:r,title:"Module 007_008 Topic 12: Collections Statistical Analysis",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Printable Note",downloadFileName:"007_008_topic12_collections_statistical_analysis_note.txt"})}),e.jsx(s,{note:"'Collections.frequency(list, item)' is a lifesaver! Instead of writing a manual for-loop to count how many times an item appears, just call frequency() in one clean line! — Sukanta Hui"})]})}export{h as default};
