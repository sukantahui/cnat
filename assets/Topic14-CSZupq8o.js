import{j as e}from"./vendor-react-core-Doz9nIC6.js";import{J as t}from"./JavaFileLoader-BfBG3xz_.js";import{F as n}from"./FAQTemplate-CkSqDH4B.js";import{P as r}from"./PlainTextPrint-C08xhKA4.js";import{T as a}from"./TeacherSukantaHui-CyIG3xbg.js";import"./JavaCodeBlock-BwsLxS3r.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-CIaKtAt4.js";const s=`/**\r
 * Java Core Tutorial - Module 007_003: Set Implementations & TreeSet Internals\r
 * Topic 14: Comprehensive Set Matrix: HashSet vs LinkedHashSet vs TreeSet (Capstone)\r
 * Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
 */\r
\r
package com.coderaccotax.javatutorial.collections;\r
\r
public class SetImplementationsComparisonCapstoneDemo {\r
\r
    public static void main(String[] args) {\r
        System.out.println("==========================================================================");\r
        System.out.println(" TOPIC 14: HashSet vs LinkedHashSet vs TreeSet MATRIX (CAPSTONE) - BARRACKPORE");\r
        System.out.println("==========================================================================\\n");\r
\r
        System.out.println(">>> THE COMPLETE JAVA SET IMPLEMENTATION MATRIX:");\r
        System.out.println("+-------------------+-------------------+-------------------+-------------------+");\r
        System.out.println("| Feature           | HashSet           | LinkedHashSet     | TreeSet           |");\r
        System.out.println("+-------------------+-------------------+-------------------+-------------------+");\r
        System.out.println("| Underlying Engine | HashMap (Array)   | LinkedHashMap     | TreeMap (RedBlack)|");\r
        System.out.println("| Iteration Order   | Unordered/Random  | Insertion Order   | Sorted Order      |");\r
        System.out.println("| Time Complexity   | O(1) Average      | O(1) Average      | O(log n) Absolute |");\r
        System.out.println("| Uniqueness Basis  | hashCode & equals | hashCode & equals | compareTo/compare |");\r
        System.out.println("| Null Permitted?   | YES (At most 1)   | YES (At most 1)   | NO (Throws NPE)   |");\r
        System.out.println("| Memory Footprint  | Low               | Medium (Pointers) | High (Tree Nodes) |");\r
        System.out.println("+-------------------+-------------------+-------------------+-------------------+");\r
\r
        System.out.println("\\n>>> 3 GOLDEN ARCHITECTURAL RULES FOR SETS:");\r
        System.out.println("  1. Default Choice   : Use 'HashSet' for maximum speed whenever ordering is irrelevant.");\r
        System.out.println("  2. Chronological Set: Use 'LinkedHashSet' when deduplicating streams or audit trails.");\r
        System.out.println("  3. Range/Sorted Set : Use 'TreeSet' when you need proximity queries (floor/ceiling) or sorted reports.");\r
\r
        System.out.println("\\n==========================================================================");\r
        System.out.println(" MODULE 007_003 SET IMPLEMENTATIONS 100% COMPLETE!");\r
        System.out.println("==========================================================================");\r
    }\r
}`,o=`================================================================================\r
JAVA CORE TUTORIAL - QUICK REVISION GUIDE\r
Module 007_003: Set Implementations & TreeSet Internals\r
Topic 14: Set Matrix Capstone\r
Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
================================================================================\r
\r
1. MODULE 007_003 GRAND SUMMARY:\r
   - HashSet: O(1) hash bucket lookup; backed by HashMap + PRESENT.\r
   - Element Mutability Hazard: Never mutate hash fields after insertion.\r
   - LinkedHashSet: O(1) + guaranteed insertion ordering via before/after pointers.\r
   - TreeSet: O(log n) sorted Red-Black tree; backed by TreeMap.\r
   - compareTo() == 0 dictates TreeSet uniqueness (ignores equals).\r
   - Nulls: HashSet & LinkedHashSet permit 1 null; TreeSet prohibits null (NPE).\r
\r
================================================================================\r
Classroom Practice: Barrackpore Academy | Mentor: Sukanta Hui\r
================================================================================`,i=[{question:"Why does 'TreeSet' throw a 'NullPointerException' when attempting to insert 'null', whereas 'HashSet' and 'LinkedHashSet' permit at most one 'null'?",shortAnswer:"'HashSet' and 'LinkedHashSet' handle 'null' by assigning it a designated hash code of 0 (storing it in bucket 0 of the backing HashMap). In contrast, 'TreeSet' relies on 'compareTo()' or 'Comparator.compare()'. Invoking 'e.compareTo(null)' or 'null.compareTo(e)' causes a 'NullPointerException' because null cannot be compared against other elements.",explanation:"Fundamental null-safety design difference among Java Set implementations.",hint:"Null cannot be compared with compareTo()/compare(), triggering a NullPointerException in TreeSet.",level:"Intermediate",codeExample:"hashSet.add(null); // OK (size=1) | treeSet.add(null); // Throws NullPointerException!"}];function x(){return e.jsxs("div",{className:"space-y-12 px-4 md:px-8 py-8 text-slate-200 bg-slate-900 min-h-screen",children:[e.jsxs("header",{className:"space-y-4 border-b border-slate-800 pb-6",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"px-3 py-1 bg-sky-500/10 text-sky-400 border border-sky-500/20 text-xs font-semibold rounded-full uppercase tracking-wider",children:"Module 007_003 · Topic 14"}),e.jsx("span",{className:"px-3 py-1 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-xs font-semibold rounded-full",children:"Set Matrix Capstone"})]}),e.jsxs("h1",{className:"text-3xl md:text-4xl font-extrabold text-white tracking-tight",children:["Comprehensive Set Matrix: ",e.jsx("code",{className:"text-emerald-400 font-mono",children:"HashSet"})," vs ",e.jsx("code",{className:"text-sky-400 font-mono",children:"LinkedHashSet"})," vs ",e.jsx("code",{className:"text-purple-400 font-mono",children:"TreeSet"})," (Capstone)"]}),e.jsx("p",{className:"text-base md:text-lg text-slate-400 leading-relaxed max-w-4xl",children:"Synthesize Java Set architectures: comparing ordering guarantees, time complexities, uniqueness mechanisms, and null support across the entire Set hierarchy."})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsxs("h2",{className:"text-2xl font-bold text-emerald-400 flex items-center gap-2",children:[e.jsx("span",{children:"💻"})," Hands-On Java Demo Code"]}),e.jsx(t,{fileModule:s,title:"SetImplementationsComparisonCapstoneDemo.java",highlightLines:[7,10,13,14,15,16,17,18,19,20]})]}),e.jsx("section",{className:"space-y-4",children:e.jsx(n,{title:"Set Capstone FAQs",questions:i})}),e.jsx("section",{className:"space-y-4",children:e.jsx(r,{content:o,title:"Module 007_003 Topic 14: Set Matrix Capstone",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Printable Note",downloadFileName:"007_003_topic14_set_matrix_capstone_note.txt"})}),e.jsx(a,{note:"Congratulations on completing Module 007_003! You now possess expert mastery of Java Sets—from HashSet's HashMap internals and PRESENT dummy value, to LinkedHashSet's chronological pointers and TreeSet's Red-Black binary search tree! — Sukanta Hui"})]})}export{x as default};
