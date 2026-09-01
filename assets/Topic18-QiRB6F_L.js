import{j as e}from"./vendor-react-core-Doz9nIC6.js";import{J as a}from"./JavaFileLoader-BfBG3xz_.js";import{F as t}from"./FAQTemplate-BHhlgA96.js";import{P as n}from"./PlainTextPrint-C08xhKA4.js";import{T as r}from"./TeacherSukantaHui-BaJcBHAy.js";import"./JavaCodeBlock-BwsLxS3r.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-8ao-0upJ.js";const s=`/**\r
 * Java Core Tutorial - Module 007_005: Map Implementations & HashMap Internals\r
 * Topic 18: java.util.TreeMap: Red-Black Tree Map Sorted by Key & NavigableMap Operations (Capstone)\r
 * Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
 */\r
\r
package com.coderaccotax.javatutorial.collections;\r
\r
import java.util.NavigableMap;\r
import java.util.TreeMap;\r
\r
public class TreeMapNavigableMapCapstoneDemo {\r
\r
    public static void main(String[] args) {\r
        System.out.println("==========================================================================");\r
        System.out.println(" TOPIC 18: TreeMap & NavigableMap ARCHITECTURE (CAPSTONE) - BARRACKPORE");\r
        System.out.println("==========================================================================\\n");\r
\r
        NavigableMap<Integer, String> studentLedger = new TreeMap<>();\r
        studentLedger.put(105, "Debangshu Mukherjee (Ichapur)");\r
        studentLedger.put(101, "Swadeep Paul (Barrackpore)");\r
        studentLedger.put(103, "Tuhina Das (Naihati)");\r
        studentLedger.put(102, "Abhronila Das (Shyamnagar)");\r
\r
        System.out.println(">>> 1. Automatic Key-Sorted In-Order Traversal:");\r
        studentLedger.forEach((roll, name) ->\r
                System.out.printf("  Roll: %d -> %s%n", roll, name));\r
\r
        // 2. NavigableMap Proximity Lookups:\r
        System.out.println("\\n>>> 2. Proximity Range Queries around Roll 103:");\r
        System.out.println("  firstKey()           : " + studentLedger.firstKey());\r
        System.out.println("  lastKey()            : " + studentLedger.lastKey());\r
        System.out.println("  lowerKey(103)  (<103): " + studentLedger.lowerKey(103));\r
        System.out.println("  floorKey(103) (<=103): " + studentLedger.floorKey(103));\r
        System.out.println("  ceilingKey(104) (>=104): " + studentLedger.ceilingKey(104));\r
        System.out.println("  higherKey(103) (>103): " + studentLedger.higherKey(103));\r
\r
        // 3. SubMap Slicing:\r
        System.out.println("\\n>>> 3. SubMap Range Slice [Roll 101 to 103 Inclusive]:");\r
        System.out.println("  " + studentLedger.subMap(101, true, 103, true));\r
\r
        System.out.println("\\n>>> 4. Reverse View (descendingMap()):");\r
        System.out.println("  " + studentLedger.descendingMap());\r
\r
        System.out.println("\\n==========================================================================");\r
        System.out.println(" MODULE 007_005 MAP IMPLEMENTATIONS & HASHMAP INTERNALS 100% COMPLETE!");\r
        System.out.println("==========================================================================");\r
    }\r
}`,o=`================================================================================\r
JAVA CORE TUTORIAL - QUICK REVISION GUIDE\r
Module 007_005: Map Implementations & HashMap Internals\r
Topic 18: TreeMap & NavigableMap Capstone\r
Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
================================================================================\r
\r
1. MODULE 007_005 GRAND SUMMARY:\r
   - Map: Key-Value association; unique keys.\r
   - HashMap Internals: Node<K,V>[] table, 16 initial cap, 0.75 load factor.\r
   - Bitwise Math: '(h ^ (h >>> 16))' spreading, '(n - 1) & hash' indexing.\r
   - Treeification: >= 8 nodes (table >= 64) → TreeNode<K,V> (O(log n)).\r
   - Untreeification: <= 6 nodes → converts back to Node<K,V> (hysteresis).\r
   - Resizing: '(e.hash & oldCap) == 0' split (no re-hashing).\r
   - Keys: Immutable (String, Integer); mutable keys cause Lost Key memory leaks.\r
   - LinkedHashMap: accessOrder mode for LRU cache ('removeEldestEntry').\r
   - TreeMap: Red-Black tree, O(log n), NavigableMap proximity queries, prohibits null keys.\r
\r
================================================================================\r
Classroom Practice: Barrackpore Academy | Mentor: Sukanta Hui\r
================================================================================`,i=[{question:"Summarize the architectural differences between 'HashMap', 'LinkedHashMap', and 'TreeMap' across ordering, time complexity, and internal structure.",shortAnswer:"1. 'HashMap': Unordered; backed by a hash bucket array ('Node<K,V>[]') with Red-Black treeification (TreeBin); O(1) average lookup; allows 1 null key. 2. 'LinkedHashMap': Maintains insertion or access order; backed by HashMap buckets + a global doubly-linked list; O(1) lookup; allows 1 null key; ideal for LRU caching. 3. 'TreeMap': Maintains sorted key order; backed by a pure Red-Black self-balancing binary search tree; O(log n) lookup; implements NavigableMap; does NOT permit null keys (throws NullPointerException).",explanation:"Grand architectural summary of the Java Map hierarchy.",hint:"HashMap: O(1) unordered; LinkedHashMap: O(1) insertion/access order; TreeMap: O(log n) sorted Red-Black tree.",level:"Advanced",codeExample:"Map<K,V> hm = new HashMap<>(); Map<K,V> lhm = new LinkedHashMap<>(); NavigableMap<K,V> tm = new TreeMap<>();"}];function M(){return e.jsxs("div",{className:"space-y-12 px-4 md:px-8 py-8 text-slate-200 bg-slate-900 min-h-screen",children:[e.jsxs("header",{className:"space-y-4 border-b border-slate-800 pb-6",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"px-3 py-1 bg-sky-500/10 text-sky-400 border border-sky-500/20 text-xs font-semibold rounded-full uppercase tracking-wider",children:"Module 007_005 · Topic 18"}),e.jsx("span",{className:"px-3 py-1 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-xs font-semibold rounded-full",children:"Map Architecture Capstone"})]}),e.jsxs("h1",{className:"text-xl sm:text-2xl md:text-3xl font-bold text-white tracking-tight",children:[e.jsx("code",{className:"text-emerald-400 font-mono",children:"java.util.TreeMap"}),": Red-Black Tree Key Sorting & NavigableMap (Capstone)"]}),e.jsxs("p",{className:"text-base md:text-lg text-slate-400 leading-relaxed max-w-4xl",children:["Synthesize Java Map architectures: comparing ",e.jsx("code",{className:"text-emerald-300 font-mono",children:"HashMap"}),", ",e.jsx("code",{className:"text-sky-300 font-mono",children:"LinkedHashMap"}),", and ",e.jsx("code",{className:"text-purple-300 font-mono",children:"TreeMap"})," across time complexity, bitwise mechanics, and range queries."]})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsxs("h2",{className:"text-2xl font-bold text-emerald-400 flex items-center gap-2",children:[e.jsx("span",{children:"💻"})," Hands-On Java Demo Code"]}),e.jsx(a,{fileModule:s,title:"TreeMapNavigableMapCapstoneDemo.java",highlightLines:[7,10,16,17,18,19,27,28,29,30,36,40]})]}),e.jsx("section",{className:"space-y-4",children:e.jsx(t,{title:"Map Capstone FAQs",questions:i})}),e.jsx("section",{className:"space-y-4",children:e.jsx(n,{content:o,title:"Module 007_005 Topic 18: Map Architecture Capstone",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Printable Note",downloadFileName:"007_005_topic18_map_architecture_capstone_note.txt"})}),e.jsx(r,{note:"Congratulations on completing Module 007_005! You now hold deep, authoritative knowledge of Java Maps—from bitwise XOR hash spreading and bucket arrays, to Red-Black treeification, LRU caching, and TreeMap navigation! — Sukanta Hui"})]})}export{M as default};
