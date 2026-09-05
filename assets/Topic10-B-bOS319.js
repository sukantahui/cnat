import{j as t}from"./vendor-react-core-Doz9nIC6.js";import{J as e}from"./JavaFileLoader-BfBG3xz_.js";import{F as i}from"./FAQTemplate-BHhlgA96.js";import{P as n}from"./PlainTextPrint-C08xhKA4.js";import{T as o}from"./TeacherSukantaHui-DerPxfxp.js";import"./JavaCodeBlock-BwsLxS3r.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-CH1iX9C8.js";const l=`/**\r
 * Java Core Tutorial - Module 007_008: Sorting, Comparable, Comparator & Collections\r
 * Topic 10: The java.util.Collections Utility Class: Static Powerhouse Architecture\r
 * Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
 */\r
\r
package com.coderaccotax.javatutorial.collections;\r
\r
public class CollectionsUtilityClassOverviewDemo {\r
\r
    public static void main(String[] args) {\r
        System.out.println("==========================================================================");\r
        System.out.println(" TOPIC 10: java.util.Collections UTILITY POWERHOUSE - BARRACKPORE");\r
        System.out.println("==========================================================================\\n");\r
\r
        System.out.println(">>> THE 5 PILLARS OF java.util.Collections:");\r
        System.out.println("  1. Polymorphic Algorithms  : 'sort()', 'binarySearch()', 'reverse()', 'shuffle()', 'swap()'.");\r
        System.out.println("  2. Statistical Analysis    : 'min()', 'max()', 'frequency()', 'disjoint()'.");\r
        System.out.println("  3. Synchronized Wrappers   : 'synchronizedList()', 'synchronizedSet()', 'synchronizedMap()'.");\r
        System.out.println("  4. Immutability Wrappers   : 'unmodifiableList()', 'unmodifiableSet()', 'unmodifiableMap()'.");\r
        System.out.println("  5. Empty & Singleton Factory: 'emptyList()', 'singletonList()', 'emptyMap()'.");\r
\r
        System.out.println("\\n>>> ARCHITECTURAL DESIGN OF java.util.Collections:");\r
        System.out.println("  - It is a non-instantiable utility class (private constructor: 'private Collections() {}').");\r
        System.out.println("  - Consists exclusively of static polymorphic methods that operate on or return Collections.");\r
        System.out.println("  - DO NOT CONFUSE: 'Collection' (Interface) vs 'Collections' (Utility Class)!");\r
\r
        System.out.println("\\n==========================================================================");\r
    }\r
}`,s=`================================================================================\r
JAVA CORE TUTORIAL - QUICK REVISION GUIDE\r
Module 007_008: Sorting, Comparable, Comparator & Collections\r
Topic 10: Collections Utility Class Overview\r
Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
================================================================================\r
\r
1. COLLECTIONS UTILITY CLASS:\r
   - 'java.util.Collections' (plural).\r
   - Non-instantiable static utility class.\r
   - Distinct from 'Collection' (interface).\r
   - Contains algorithms, wrappers, and singleton factories.\r
\r
================================================================================\r
Classroom Practice: Barrackpore Academy | Mentor: Sukanta Hui\r
================================================================================`,a=[{question:"What is the crucial difference between 'java.util.Collection' and 'java.util.Collections' in Java?",shortAnswer:"'java.util.Collection' is the root generic INTERFACE for list, set, and queue data structures in the Java Collections Framework hierarchy. In contrast, 'java.util.Collections' (plural) is a non-instantiable static UTILITY CLASS consisting entirely of static polymorphic algorithms, wrappers, and factory methods (such as 'sort()', 'unmodifiableList()', 'synchronizedMap()').",explanation:"Fundamental Java vocabulary question in interviews.",hint:"Collection is the root interface; Collections is the static utility class containing helper algorithms.",level:"Beginner",codeExample:"Collection<String> c = new ArrayList<>(); Collections.sort((List<String>) c);"}];function y(){return t.jsxs("div",{className:"space-y-12 px-4 md:px-8 py-8 text-slate-200 bg-slate-900 min-h-screen",children:[t.jsxs("header",{className:"space-y-4 border-b border-slate-800 pb-6",children:[t.jsxs("div",{className:"flex items-center gap-3",children:[t.jsx("span",{className:"px-3 py-1 bg-sky-500/10 text-sky-400 border border-sky-500/20 text-xs font-semibold rounded-full uppercase tracking-wider",children:"Module 007_008 · Topic 10"}),t.jsx("span",{className:"px-3 py-1 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-xs font-semibold rounded-full",children:"Collections Utility"})]}),t.jsxs("h1",{className:"text-xl sm:text-2xl md:text-3xl font-bold text-white tracking-tight",children:["The ",t.jsx("code",{className:"text-emerald-400 font-mono",children:"java.util.Collections"})," Utility Class: Static Powerhouse Architecture"]}),t.jsxs("p",{className:"text-base md:text-lg text-slate-400 leading-relaxed max-w-4xl",children:["Explore the standard utility toolkit: understanding the 5 functional pillars of ",t.jsx("code",{className:"text-emerald-300 font-mono",children:"java.util.Collections"})," and contrasting ",t.jsx("code",{className:"text-sky-300 font-mono",children:"Collection"})," (interface) with ",t.jsx("code",{className:"text-purple-300 font-mono",children:"Collections"})," (utility class)."]})]}),t.jsxs("section",{className:"space-y-4",children:[t.jsxs("h2",{className:"text-2xl font-bold text-emerald-400 flex items-center gap-2",children:[t.jsx("span",{children:"💻"})," Hands-On Java Demo Code"]}),t.jsx(e,{fileModule:l,title:"CollectionsUtilityClassOverviewDemo.java",highlightLines:[7,10,13,14,15,16,17,21,22]})]}),t.jsx("section",{className:"space-y-4",children:t.jsx(i,{title:"Collections Utility FAQs",questions:a})}),t.jsx("section",{className:"space-y-4",children:t.jsx(n,{content:s,title:"Module 007_008 Topic 10: Collections Utility Overview",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Printable Note",downloadFileName:"007_008_topic10_collections_utility_overview_note.txt"})}),t.jsx(o,{note:"Never confuse 'Collection' with 'Collections'! Collection is an interface that classes like ArrayList implement; Collections is a helper class full of static tools like sort(), reverse(), and shuffle()! — Sukanta Hui"})]})}export{y as default};
