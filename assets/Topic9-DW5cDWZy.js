import{j as e}from"./vendor-react-core-Doz9nIC6.js";import{J as a}from"./JavaFileLoader-BfBG3xz_.js";import{F as r}from"./FAQTemplate-CkSqDH4B.js";import{P as t}from"./PlainTextPrint-C08xhKA4.js";import{T as n}from"./TeacherSukantaHui-CC0AKmkm.js";import"./JavaCodeBlock-BwsLxS3r.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-BtJHuk7w.js";const l=`/**\r
 * Java Core Tutorial - Module 007_003: Set Implementations & TreeSet Internals\r
 * Topic 9: java.util.TreeSet Internal Mechanics: Backed by a Red-Black Binary Search Tree (TreeMap)\r
 * Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
 */\r
\r
package com.coderaccotax.javatutorial.collections;\r
\r
import java.lang.reflect.Field;\r
import java.util.NavigableMap;\r
import java.util.TreeSet;\r
\r
public class TreeSetRedBlackTreeInternalsDemo {\r
\r
    public static void main(String[] args) throws Exception {\r
        System.out.println("==========================================================================");\r
        System.out.println(" TOPIC 9: TreeSet RED-BLACK TREE (TreeMap) INTERNALS - BARRACKPORE");\r
        System.out.println("==========================================================================\\n");\r
\r
        TreeSet<Integer> rollTree = new TreeSet<>();\r
        rollTree.add(104);\r
        rollTree.add(101);\r
        rollTree.add(108);\r
        rollTree.add(102);\r
\r
        // Inspecting private transient NavigableMap<E,Object> m field in TreeSet:\r
        Field mapField = TreeSet.class.getDeclaredField("m");\r
        mapField.setAccessible(true);\r
        NavigableMap<?, ?> internalTreeMap = (NavigableMap<?, ?>) mapField.get(rollTree);\r
\r
        System.out.println(">>> 1. Reflecting Inside TreeSet's Internal State:");\r
        System.out.println("  TreeSet Class            : " + rollTree.getClass().getName());\r
        System.out.println("  Internal Backing Map     : " + internalTreeMap.getClass().getName());\r
        System.out.println("  Internal TreeMap Entries : " + internalTreeMap);\r
\r
        System.out.println("\\n>>> HOW TreeSet WORKS INTERNALLY:");\r
        System.out.println("  1. Backed by TreeMap: Just like HashSet uses HashMap, TreeSet is backed by 'java.util.TreeMap'!");\r
        System.out.println("  2. Red-Black Tree Data Structure: TreeMap is a self-balancing binary search tree.");\r
        System.out.println("  3. Guaranteed Height Balance   : The tree never degenerates into a linear linked list.");\r
        System.out.println("  4. Automatic Sorting           : In-order traversal naturally yields elements in sorted ascending order.");\r
\r
        System.out.println("\\n==========================================================================");\r
    }\r
}`,s=`================================================================================\r
JAVA CORE TUTORIAL - QUICK REVISION GUIDE\r
Module 007_003: Set Implementations & TreeSet Internals\r
Topic 9: TreeSet Red-Black Tree Internals\r
Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
================================================================================\r
\r
1. TREESET INTERNALS:\r
   - Backed by 'private transient NavigableMap<E, Object> m;' (TreeMap).\r
   - Red-Black self-balancing Binary Search Tree.\r
   - Guaranteed O(log n) performance for add, remove, contains.\r
   - In-order tree traversal provides automatic sorted sequence.\r
\r
================================================================================\r
Classroom Practice: Barrackpore Academy | Mentor: Sukanta Hui\r
================================================================================`,i=[{question:"What exact data structure powers 'java.util.TreeSet' internally, and what algorithmic guarantees does it provide?",shortAnswer:"'java.util.TreeSet' is backed internally by a 'java.util.TreeMap', which is a self-balancing Red-Black Binary Search Tree. This guarantees O(log n) time complexity for basic operations ('add', 'remove', 'contains') and ensures that elements remain perpetually sorted according to natural ordering or a custom Comparator.",explanation:"Core architecture of Java's sorted set implementation.",hint:"Backed by TreeMap, which is a self-balancing Red-Black Binary Search Tree providing O(log n) operations.",level:"Intermediate",codeExample:"private transient NavigableMap<E,Object> m; // Backed by TreeMap"}];function S(){return e.jsxs("div",{className:"space-y-12 px-4 md:px-8 py-8 text-slate-200 bg-slate-900 min-h-screen",children:[e.jsxs("header",{className:"space-y-4 border-b border-slate-800 pb-6",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"px-3 py-1 bg-sky-500/10 text-sky-400 border border-sky-500/20 text-xs font-semibold rounded-full uppercase tracking-wider",children:"Module 007_003 · Topic 9"}),e.jsx("span",{className:"px-3 py-1 bg-purple-500/10 text-purple-400 border border-purple-500/20 text-xs font-semibold rounded-full",children:"Red-Black Tree Internals"})]}),e.jsxs("h1",{className:"text-3xl md:text-4xl font-extrabold text-white tracking-tight",children:[e.jsx("code",{className:"text-emerald-400 font-mono",children:"java.util.TreeSet"})," Internal Mechanics: Backed by a Red-Black Tree (",e.jsx("code",{className:"text-purple-400 font-mono",children:"TreeMap"}),")"]}),e.jsxs("p",{className:"text-base md:text-lg text-slate-400 leading-relaxed max-w-4xl",children:["Trace Red-Black binary search tree mechanics: inspecting TreeSet's internal ",e.jsx("code",{className:"text-emerald-300 font-mono",children:"TreeMap"})," backing instance and exploring self-balancing node rotations."]})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsxs("h2",{className:"text-2xl font-bold text-emerald-400 flex items-center gap-2",children:[e.jsx("span",{children:"💻"})," Hands-On Java Demo Code"]}),e.jsx(a,{fileModule:l,title:"TreeSetRedBlackTreeInternalsDemo.java",highlightLines:[7,10,16,17,20,21,28,29]})]}),e.jsx("section",{className:"space-y-4",children:e.jsx(r,{title:"TreeSet Internals FAQs",questions:i})}),e.jsx("section",{className:"space-y-4",children:e.jsx(t,{content:s,title:"Module 007_003 Topic 9: TreeSet Red-Black Tree Internals",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Printable Note",downloadFileName:"007_003_topic9_treeset_red_black_tree_note.txt"})}),e.jsx(n,{note:"Just like HashSet delegates to HashMap, TreeSet delegates to TreeMap! The Red-Black tree keeps itself balanced so tree searches never slow down! — Sukanta Hui"})]})}export{S as default};
