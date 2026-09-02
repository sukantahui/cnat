import{j as e}from"./vendor-react-core-Doz9nIC6.js";import{J as t}from"./JavaFileLoader-BfBG3xz_.js";import{F as n}from"./FAQTemplate-BHhlgA96.js";import{P as o}from"./PlainTextPrint-C08xhKA4.js";import{T as i}from"./TeacherSukantaHui-RpFLNJ5A.js";import"./JavaCodeBlock-BwsLxS3r.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-wprqVFW_.js";const s=`/**\r
 * Java Core Tutorial - Module 007_008: Sorting, Comparable, Comparator & Collections\r
 * Topic 15: Zero-Allocation Singletons & Empty Collections: emptyList() & singletonList()\r
 * Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
 */\r
\r
package com.coderaccotax.javatutorial.collections;\r
\r
import java.util.Collections;\r
import java.util.List;\r
import java.util.Map;\r
import java.util.Set;\r
\r
public class SingletonAndEmptyCollectionsDemo {\r
\r
    // Clean zero-allocation null-safe method:\r
    public static List<String> findStudentsByHub(String hubLocation) {\r
        if ("Barrackpore".equalsIgnoreCase(hubLocation)) {\r
            return List.of("Swadeep", "Tuhina", "Abhronila");\r
        } else if ("Naihati".equalsIgnoreCase(hubLocation)) {\r
            return Collections.singletonList("Debangshu Mukherjee"); // Exactly 1 item!\r
        } else {\r
            return Collections.emptyList(); // ZERO heap allocation singleton! NEVER return null!\r
        }\r
    }\r
\r
    public static void main(String[] args) {\r
        System.out.println("==========================================================================");\r
        System.out.println(" TOPIC 15: ZERO-ALLOCATION SINGLETON & EMPTY FACTORIES - BARRACKPORE");\r
        System.out.println("==========================================================================\\n");\r
\r
        // 1. Collections.emptyList() (Returns shared static singleton EMPTY_LIST):\r
        List<String> empty1 = Collections.emptyList();\r
        List<String> empty2 = Collections.emptyList();\r
\r
        System.out.println(">>> 1. Collections.emptyList() Singleton Verification:");\r
        System.out.println("  empty1 == empty2 : " + (empty1 == empty2) + " (Exact same shared static memory instance!)");\r
\r
        // 2. Collections.singletonList(item) (Lightweight 1-element immutable list):\r
        List<String> singleStudent = Collections.singletonList("Swadeep Paul");\r
        Set<String> singleAdmin = Collections.singleton("Sukanta Hui");\r
        Map<String, String> singleConfig = Collections.singletonMap("env", "production");\r
\r
        System.out.println("\\n>>> 2. Singleton Collection Instances:");\r
        System.out.println("  singletonList : " + singleStudent);\r
        System.out.println("  singletonSet  : " + singleAdmin);\r
        System.out.println("  singletonMap  : " + singleConfig);\r
\r
        // 3. Testing findStudentsByHub helper:\r
        System.out.println("\\n>>> 3. Null-Safe API Return Value Testing:");\r
        System.out.println("  Query 'Barrackpore' -> " + findStudentsByHub("Barrackpore"));\r
        System.out.println("  Query 'Naihati'     -> " + findStudentsByHub("Naihati"));\r
        System.out.println("  Query 'Kalyani'     -> " + findStudentsByHub("Kalyani") + " (Empty list, zero allocation!)");\r
\r
        System.out.println("\\n==========================================================================");\r
    }\r
}`,r=`================================================================================\r
JAVA CORE TUTORIAL - QUICK REVISION GUIDE\r
Module 007_008: Sorting, Comparable, Comparator & Collections\r
Topic 15: Singleton & Empty Factories\r
Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
================================================================================\r
\r
1. EMPTY & SINGLETON COLLECTIONS:\r
   - 'Collections.emptyList() / emptySet() / emptyMap()'.\r
   - Returns shared static singleton instance (zero GC memory bloat).\r
   - 'Collections.singletonList(e)': highly optimized 1-element list.\r
   - Best practice: Always return empty collections instead of 'null'!\r
\r
================================================================================\r
Classroom Practice: Barrackpore Academy | Mentor: Sukanta Hui\r
================================================================================`,l=[{question:"Why should methods return 'Collections.emptyList()' instead of 'null' or 'new ArrayList<>()' when no items are found?",shortAnswer:"1. 'Prevent NullPointerException': Returning 'Collections.emptyList()' allows callers to write clean loops without defensive 'if (list != null)' checks. 2. 'Zero Memory Allocation': Unlike 'new ArrayList<>()' (which allocates an object header and an internal Object[] array on the heap), 'Collections.emptyList()' returns a shared static singleton instance ('Collections.EMPTY_LIST'), causing zero heap allocation and zero GC overhead.",explanation:"Effective Java Item 54: Return empty collections or arrays, not nulls.",hint:"Prevents NPEs and avoids heap memory allocations by reusing a shared static singleton.",level:"Beginner",codeExample:"return students.isEmpty() ? Collections.emptyList() : students; // Clean & efficient"}];function h(){return e.jsxs("div",{className:"space-y-12 px-4 md:px-8 py-8 text-slate-200 bg-slate-900 min-h-screen",children:[e.jsxs("header",{className:"space-y-4 border-b border-slate-800 pb-6",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"px-3 py-1 bg-sky-500/10 text-sky-400 border border-sky-500/20 text-xs font-semibold rounded-full uppercase tracking-wider",children:"Module 007_008 · Topic 15"}),e.jsx("span",{className:"px-3 py-1 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-xs font-semibold rounded-full",children:"Singleton & Empty Factories"})]}),e.jsxs("h1",{className:"text-xl sm:text-2xl md:text-3xl font-bold text-white tracking-tight",children:["Zero-Allocation Singletons: ",e.jsx("code",{className:"text-emerald-400 font-mono",children:"Collections.emptyList()"})," & ",e.jsx("code",{className:"text-sky-400 font-mono",children:"singletonList()"})]}),e.jsxs("p",{className:"text-base md:text-lg text-slate-400 leading-relaxed max-w-4xl",children:["Master clean enterprise API design: returning zero-allocation shared static singletons (",e.jsx("code",{className:"text-emerald-300 font-mono",children:"emptyList"}),", ",e.jsx("code",{className:"text-sky-300 font-mono",children:"singletonList"}),") to prevent null pointers and eliminate garbage collection churn."]})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsxs("h2",{className:"text-2xl font-bold text-emerald-400 flex items-center gap-2",children:[e.jsx("span",{children:"💻"})," Hands-On Java Demo Code"]}),e.jsx(t,{fileModule:s,title:"SingletonAndEmptyCollectionsDemo.java",highlightLines:[7,10,16,17,19,27,28,32,33]})]}),e.jsx("section",{className:"space-y-4",children:e.jsx(n,{title:"Singleton & Empty Collections FAQs",questions:l})}),e.jsx("section",{className:"space-y-4",children:e.jsx(o,{content:r,title:"Module 007_008 Topic 15: Singleton & Empty Factories",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Printable Note",downloadFileName:"007_008_topic15_singleton_and_empty_factories_note.txt"})}),e.jsx(i,{note:"Never return null from a method that returns a List or Set! Always return 'Collections.emptyList()'! It uses zero memory because Java shares the exact same static instance everywhere! — Sukanta Hui"})]})}export{h as default};
