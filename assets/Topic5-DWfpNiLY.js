import{j as e}from"./vendor-react-core-Doz9nIC6.js";import{J as t}from"./JavaFileLoader-BfBG3xz_.js";import{F as r}from"./FAQTemplate-CkSqDH4B.js";import{P as n}from"./PlainTextPrint-C08xhKA4.js";import{T as a}from"./TeacherSukantaHui-CC0AKmkm.js";import"./JavaCodeBlock-BwsLxS3r.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-BtJHuk7w.js";const s=`/**\r
 * Java Core Tutorial - Module 007_001: Collections Framework Overview & Core Interfaces\r
 * Topic 5: The 4 Primary Branches of JCF: List, Set, Queue & Map Taxonomy Overview\r
 * Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
 */\r
\r
package com.coderaccotax.javatutorial.collections;\r
\r
public class FourPrimaryJcfBranchesTaxonomyDemo {\r
\r
    public static void main(String[] args) {\r
        System.out.println("==========================================================================");\r
        System.out.println(" TOPIC 5: THE 4 PRIMARY BRANCHES OF JCF - BARRACKPORE");\r
        System.out.println("==========================================================================\\n");\r
\r
        System.out.println(">>> THE 4 PILLARS OF JAVA DATA STRUCTURES:");\r
        System.out.println("  1. LIST   : Ordered Sequence | Zero-Indexed | Permits Duplicates.");\r
        System.out.println("              Implementations: ArrayList (fast read), LinkedList (fast node insert), Vector (legacy synchronized).");\r
        System.out.println();\r
        System.out.println("  2. SET    : Unique Elements | Forbids Duplicates | Mathematical Set.");\r
        System.out.println("              Implementations: HashSet (O(1) unordered), LinkedHashSet (insertion ordered), TreeSet (red-black sorted).");\r
        System.out.println();\r
        System.out.println("  3. QUEUE  : FIFO / LIFO Buffers | Task Scheduling & Dispatching.");\r
        System.out.println("              Implementations: PriorityQueue (natural/custom heap order), ArrayDeque (blazing double-ended queue).");\r
        System.out.println();\r
        System.out.println("  4. MAP    : Key-Value Dictionary | Unique Keys | Fast Lookups.");\r
        System.out.println("              Implementations: HashMap (O(1) hash bucket), LinkedHashMap (ordered entries), TreeMap (sorted keys).");\r
\r
        System.out.println("\\n==========================================================================");\r
    }\r
}`,o=`================================================================================\r
JAVA CORE TUTORIAL - QUICK REVISION GUIDE\r
Module 007_001: Collections Framework Overview\r
Topic 5: 4 Primary Branches of JCF\r
Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
================================================================================\r
\r
1. THE 4 JCF BRANCHES:\r
   - List  : Index-based sequence, permits duplicates.\r
   - Set   : Mathematical uniqueness, no duplicates.\r
   - Queue : FIFO/LIFO processing buffer.\r
   - Map   : Key-Value dictionary (unique keys).\r
\r
================================================================================\r
Classroom Practice: Barrackpore Academy | Mentor: Sukanta Hui\r
================================================================================`,i=[{question:"Summarize the primary behavioral differences among List, Set, Queue, and Map in the Java Collections Framework.",shortAnswer:"1. 'List': Ordered sequence accessed by numeric index; permits duplicate elements. 2. 'Set': Mathematical set containing strictly unique elements; forbids duplicates. 3. 'Queue/Deque': Collection designed for holding elements prior to processing (FIFO queue, LIFO stack, or Priority heap). 4. 'Map': Key-Value dictionary where each unique key maps to exactly one value.",explanation:"The foundational taxonomy of all Java data structures.",hint:"List = ordered/duplicates; Set = unique/no duplicates; Queue = processing buffer; Map = key-value pairs.",level:"Beginner",codeExample:"List<T> list; Set<T> set; Queue<T> queue; Map<K, V> map;"}];function y(){return e.jsxs("div",{className:"space-y-12 px-4 md:px-8 py-8 text-slate-200 bg-slate-900 min-h-screen",children:[e.jsxs("header",{className:"space-y-4 border-b border-slate-800 pb-6",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"px-3 py-1 bg-sky-500/10 text-sky-400 border border-sky-500/20 text-xs font-semibold rounded-full uppercase tracking-wider",children:"Module 007_001 · Topic 5"}),e.jsx("span",{className:"px-3 py-1 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-xs font-semibold rounded-full",children:"JCF 4 Branches"})]}),e.jsxs("h1",{className:"text-3xl md:text-4xl font-extrabold text-white tracking-tight",children:["The 4 Primary Branches of JCF: ",e.jsx("code",{className:"text-emerald-400 font-mono",children:"List"}),", ",e.jsx("code",{className:"text-sky-400 font-mono",children:"Set"}),", ",e.jsx("code",{className:"text-amber-400 font-mono",children:"Queue"})," & ",e.jsx("code",{className:"text-purple-400 font-mono",children:"Map"})]}),e.jsx("p",{className:"text-base md:text-lg text-slate-400 leading-relaxed max-w-4xl",children:"Master the four pillars of Java collections: comparing indexing, uniqueness contracts, buffering semantics, and key-value mapping paradigms."})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsxs("h2",{className:"text-2xl font-bold text-emerald-400 flex items-center gap-2",children:[e.jsx("span",{children:"💻"})," Hands-On Java Demo Code"]}),e.jsx(t,{fileModule:s,title:"FourPrimaryJcfBranchesTaxonomyDemo.java",highlightLines:[7,10,13,14,16,17,19,20,22,23]})]}),e.jsx("section",{className:"space-y-4",children:e.jsx(r,{title:"4 Branches FAQs",questions:i})}),e.jsx("section",{className:"space-y-4",children:e.jsx(n,{content:o,title:"Module 007_001 Topic 5: 4 Primary JCF Branches",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Printable Note",downloadFileName:"007_001_topic5_four_primary_jcf_branches_note.txt"})}),e.jsx(a,{note:"Whenever you have data to store, ask yourself 3 questions: Do I need an ordered list (List)? Do I need strict uniqueness (Set)? Do I need key-value lookup (Map)? Or do I need a processing queue (Queue)? Your answer picks the right branch instantly! — Sukanta Hui"})]})}export{y as default};
