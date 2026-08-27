import{j as e}from"./vendor-react-core-Doz9nIC6.js";import{J as r}from"./JavaFileLoader-BfBG3xz_.js";import{F as t}from"./FAQTemplate-CkSqDH4B.js";import{P as n}from"./PlainTextPrint-C08xhKA4.js";import{T as a}from"./TeacherSukantaHui-CC0AKmkm.js";import"./JavaCodeBlock-BwsLxS3r.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-BtJHuk7w.js";const i=`/**\r
 * Java Core Tutorial - Module 006_002: Generic Methods, Constructors & Type Inference\r
 * Topic 7: Generic Algorithms: Swapping Elements, Finding Extremes & Merging Lists\r
 * Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
 */\r
\r
package com.coderaccotax.javatutorial.generics;\r
\r
import java.util.ArrayList;\r
import java.util.Arrays;\r
import java.util.List;\r
\r
public class GenericAlgorithmsToolkitDemo {\r
\r
    // 1. Generic Swap Algorithm:\r
    public static <T> void swap(T[] array, int i, int j) {\r
        T temp = array[i];\r
        array[i] = array[j];\r
        array[j] = temp;\r
    }\r
\r
    // 2. Generic Maximum Finder (Bounded to Comparable):\r
    public static <T extends Comparable<T>> T findMax(T[] array) {\r
        if (array == null || array.length == 0) return null;\r
        T max = array[0];\r
        for (int i = 1; i < array.length; i++) {\r
            if (array[i].compareTo(max) > 0) {\r
                max = array[i];\r
            }\r
        }\r
        return max;\r
    }\r
\r
    // 3. Generic List Merger:\r
    public static <T> List<T> mergeLists(List<T> list1, List<T> list2) {\r
        List<T> merged = new ArrayList<>(list1.size() + list2.size());\r
        merged.addAll(list1);\r
        merged.addAll(list2);\r
        return merged;\r
    }\r
\r
    public static void main(String[] args) {\r
        System.out.println("==========================================================================");\r
        System.out.println(" TOPIC 7: GENERIC ALGORITHMS TOOLKIT - BARRACKPORE");\r
        System.out.println("==========================================================================\\n");\r
\r
        // 1. Testing Swap:\r
        String[] branches = {"Naihati", "Barrackpore", "Shyamnagar"};\r
        System.out.println(">>> 1. Array Before Swap: " + Arrays.toString(branches));\r
        swap(branches, 0, 1);\r
        System.out.println("  Array After Swap  : " + Arrays.toString(branches));\r
\r
        // 2. Testing Find Max:\r
        Integer[] scores = {88, 99, 74, 100, 92};\r
        Integer topScore = findMax(scores);\r
        String topBranch = findMax(branches);\r
        System.out.println("\\n>>> 2. Generic Find Max:");\r
        System.out.println("  Top Score : " + topScore);\r
        System.out.println("  Top Lexicographical Branch : " + topBranch);\r
\r
        // 3. Testing Merge Lists:\r
        List<String> batchA = List.of("Swadeep Paul", "Tuhina Das");\r
        List<String> batchB = List.of("Abhronila Das", "Debangshu Mukherjee");\r
        List<String> allStudents = mergeLists(batchA, batchB);\r
        System.out.println("\\n>>> 3. Generic List Merger:");\r
        System.out.println("  Combined Batch: " + allStudents);\r
\r
        System.out.println("\\n==========================================================================");\r
    }\r
}`,s=`================================================================================\r
JAVA CORE TUTORIAL - QUICK REVISION GUIDE\r
Module 006_002: Generic Methods, Constructors & Type Inference\r
Topic 7: Generic Algorithms Toolkit\r
Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
================================================================================\r
\r
1. GENERIC ALGORITHM PATTERNS:\r
   - 'swap(T[] arr, int i, int j)': in-place array swap.\r
   - 'findMax(T[] arr)': bounded to '<T extends Comparable<T>>'.\r
   - 'mergeLists(List<T>, List<T>)': type-safe collection merge.\r
   - Reusable across any domain models.\r
\r
================================================================================\r
Classroom Practice: Barrackpore Academy | Mentor: Sukanta Hui\r
================================================================================`,o=[{question:"Why must the type parameter in 'public static <T extends Comparable<T>> T findMax(T[] array)' have a bounded type?",shortAnswer:"Without the bound '<T extends Comparable<T>>', the compiler only knows that 'T' is an Object, and Object does not possess the 'compareTo()' method. Bounding 'T' to Comparable guarantees at compile-time that any type passed to 'findMax' supports comparison operators ('compareTo() > 0').",explanation:"Standard pattern for generic sorting, searching, and tree structures.",hint:"Guarantees that T implements compareTo() for element comparison at compile time.",level:"Intermediate",codeExample:"public static <T extends Comparable<T>> T max(T a, T b) { return a.compareTo(b) > 0 ? a : b; }"}];function h(){return e.jsxs("div",{className:"space-y-12 px-4 md:px-8 py-8 text-slate-200 bg-slate-900 min-h-screen",children:[e.jsxs("header",{className:"space-y-4 border-b border-slate-800 pb-6",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"px-3 py-1 bg-sky-500/10 text-sky-400 border border-sky-500/20 text-xs font-semibold rounded-full uppercase tracking-wider",children:"Module 006_002 · Topic 7"}),e.jsx("span",{className:"px-3 py-1 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-xs font-semibold rounded-full",children:"Generic Algorithms"})]}),e.jsx("h1",{className:"text-3xl md:text-4xl font-extrabold text-white tracking-tight",children:"Generic Methods: Swapping Elements, Finding Extremes & Merging"}),e.jsx("p",{className:"text-base md:text-lg text-slate-400 leading-relaxed max-w-4xl",children:"Implement canonical data algorithms: constructing generic swap utilities, comparable-bounded extreme finders, and type-safe collection mergers."})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsxs("h2",{className:"text-2xl font-bold text-emerald-400 flex items-center gap-2",children:[e.jsx("span",{children:"💻"})," Hands-On Java Demo Code"]}),e.jsx(r,{fileModule:i,title:"GenericAlgorithmsToolkitDemo.java",highlightLines:[7,10,13,14,15,19,20,29,30]})]}),e.jsx("section",{className:"space-y-4",children:e.jsx(t,{title:"Generic Algorithms FAQs",questions:o})}),e.jsx("section",{className:"space-y-4",children:e.jsx(n,{content:s,title:"Module 006_002 Topic 7: Generic Algorithms",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Printable Note",downloadFileName:"006_002_topic7_generic_algorithms_note.txt"})}),e.jsx(a,{note:"Generic algorithms form the backbone of the Java Collections Framework (like Collections.swap and Collections.max)! Once you write an algorithm generically with '<T>', you can reuse it across every class in your project! — Sukanta Hui"})]})}export{h as default};
