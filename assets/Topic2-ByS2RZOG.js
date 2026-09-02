import{j as e}from"./vendor-react-core-Doz9nIC6.js";import{J as a}from"./JavaFileLoader-BfBG3xz_.js";import{F as t}from"./FAQTemplate-BHhlgA96.js";import{P as n}from"./PlainTextPrint-C08xhKA4.js";import{T as s}from"./TeacherSukantaHui-RpFLNJ5A.js";import"./JavaCodeBlock-BwsLxS3r.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-wprqVFW_.js";const r=`/**\r
 * Java Core Tutorial - Module 007_009: Collections Performance & Big-O Complexities\r
 * Topic 2: Average Case vs Worst Case Breakdown: Hash Collisions & Tree Degeneration\r
 * Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
 */\r
\r
package com.coderaccotax.javatutorial.collections;\r
\r
public class AverageVsWorstCaseBreakdownDemo {\r
\r
    public static void main(String[] args) {\r
        System.out.println("==========================================================================");\r
        System.out.println(" TOPIC 2: AVERAGE vs WORST CASE BREAKDOWN - BARRACKPORE");\r
        System.out.println("==========================================================================\\n");\r
\r
        System.out.println(">>> AVERAGE vs WORST CASE COMPARISON TABLE:");\r
        System.out.println("+-------------------+-------------------+-------------------+------------------------------------+");\r
        System.out.println("| Operation         | Average Case      | Worst Case        | What Causes the Worst Case?        |");\r
        System.out.println("+-------------------+-------------------+-------------------+------------------------------------+");\r
        System.out.println("| ArrayList.add()   | O(1) Amortized    | O(n)              | Array capacity exhaustion (resize) |");\r
        System.out.println("| HashMap.get()     | O(1) Constant     | O(log n) (Java 8+)| Hash collision storm (TreeBin)     |");\r
        System.out.println("| HashMap.get()     | O(1) Constant     | O(n) (Java 7)     | Hash collision storm (Linked list) |");\r
        System.out.println("| HashSet.contains()| O(1) Constant     | O(log n) (Java 8+)| Broken or constant hashCode()      |");\r
        System.out.println("| TreeSet.add()     | O(log n)          | O(log n)          | NONE! Red-Black Tree self-balances!|");\r
        System.out.println("| Quicksort (Dual)  | O(n log n)        | O(n^2)            | Highly pathological pivot inputs   |");\r
        System.out.println("| TimSort           | O(n log n)        | O(n log n)        | NONE! Merge Sort is O(n log n) max!|");\r
        System.out.println("+-------------------+-------------------+-------------------+------------------------------------+");\r
\r
        System.out.println("\\n>>> WHY JAVA 8 TREEIFICATION MATTERS IN ENTERPRISE SECURITY (DoS Protection):");\r
        System.out.println("  - In Java 7: Attackers could send 50,000 HTTP parameters with identical hash codes, forcing HashMap.get() into O(n) linear scans, maxing out CPU cores (Hash-DoS Attack).");\r
        System.out.println("  - In Java 8+: Treeification caps the worst-case collision lookup at O(log n), neutralizing Hash-DoS attacks completely!");\r
\r
        System.out.println("\\n==========================================================================");\r
    }\r
}`,o=`================================================================================\r
JAVA CORE TUTORIAL - QUICK REVISION GUIDE\r
Module 007_009: Collections Performance & Big-O Complexities\r
Topic 2: Average vs Worst Case Breakdown\r
Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
================================================================================\r
\r
1. AVERAGE vs WORST CASE:\r
   - ArrayList.add(): O(1) Amortized vs O(n) Resize.\r
   - HashMap.get(): O(1) Average vs O(log n) TreeBin worst-case (Java 8+).\r
   - Java 7 HashMap worst-case was O(n) (Hash-DoS vulnerability).\r
   - TreeSet / TreeMap: O(log n) guaranteed (Red-Black self-balancing).\r
   - TimSort: O(n log n) guaranteed worst-case.\r
\r
================================================================================\r
Classroom Practice: Barrackpore Academy | Mentor: Sukanta Hui\r
================================================================================`,i=[{question:"What causes the worst-case performance in 'HashMap.get()', and how did Java 8 improve it from O(n) to O(log n)?",shortAnswer:"Worst-case 'HashMap.get()' occurs during a 'Hash Collision Storm' (when many keys produce the exact same bucket index, such as when objects have a poorly implemented 'hashCode()' returning a constant). In Java 7, collisions formed a singly linked list with 'O(n)' worst-case search time. In Java 8+, when a bucket chain reaches 'TREEIFY_THRESHOLD (8)' elements and table capacity &ge; 64, Java converts the bucket into a Red-Black Tree ('TreeBin'), reducing worst-case search time to 'O(log n)'.",explanation:"Fundamental security and architectural evolution in Java 8.",hint:"Hash collision storms cause worst case; Java 8 treeifies chains to Red-Black trees at 8 nodes (O(log n)).",level:"Intermediate",codeExample:"// Java 7 worst: O(n) linked list | Java 8+ worst: O(log n) TreeBin"}];function x(){return e.jsxs("div",{className:"space-y-12 px-4 md:px-8 py-8 text-slate-200 bg-slate-900 min-h-screen",children:[e.jsxs("header",{className:"space-y-4 border-b border-slate-800 pb-6",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"px-3 py-1 bg-sky-500/10 text-sky-400 border border-sky-500/20 text-xs font-semibold rounded-full uppercase tracking-wider",children:"Module 007_009 · Topic 2"}),e.jsx("span",{className:"px-3 py-1 bg-purple-500/10 text-purple-400 border border-purple-500/20 text-xs font-semibold rounded-full",children:"Average vs Worst Case"})]}),e.jsx("h1",{className:"text-xl sm:text-2xl md:text-3xl font-bold text-white tracking-tight",children:"Average Case vs Worst Case Breakdown: Hash Collisions & Tree Degeneration"}),e.jsx("p",{className:"text-base md:text-lg text-slate-400 leading-relaxed max-w-4xl",children:"Analyze worst-case operational degradation: exploring array copy overhead during resize, collision mitigation via Java 8 treeification, and Hash-DoS security guarantees."})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsxs("h2",{className:"text-2xl font-bold text-emerald-400 flex items-center gap-2",children:[e.jsx("span",{children:"💻"})," Hands-On Java Demo Code"]}),e.jsx(a,{fileModule:r,title:"AverageVsWorstCaseBreakdownDemo.java",highlightLines:[7,10,14,15,16,17,18,19,20,21,25,26]})]}),e.jsx("section",{className:"space-y-4",children:e.jsx(t,{title:"Average vs Worst Case FAQs",questions:i})}),e.jsx("section",{className:"space-y-4",children:e.jsx(n,{content:o,title:"Module 007_009 Topic 2: Average vs Worst Case Breakdown",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Printable Note",downloadFileName:"007_009_topic2_average_vs_worst_case_breakdown_note.txt"})}),e.jsx(s,{note:"In Java 7, if a hacker sent thousands of keys with the exact same hash code, your HashMap would turn into a slow O(n) linked list and crash your server with 100% CPU! In Java 8, Doug Lea added Treeification: if a bucket exceeds 8 nodes, it turns into a Red-Black tree so searches stay blazing fast in O(log n) time! — Sukanta Hui"})]})}export{x as default};
