import{j as e}from"./vendor-react-core-Doz9nIC6.js";import{J as t}from"./JavaFileLoader-BfBG3xz_.js";import{F as a}from"./FAQTemplate-BHhlgA96.js";import{P as n}from"./PlainTextPrint-C08xhKA4.js";import{T as o}from"./TeacherSukantaHui-CEPuAfsb.js";import"./JavaCodeBlock-BwsLxS3r.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-DGCamHnX.js";const r=`/**\r
 * Java Core Tutorial - Module 007_005: Map Implementations & HashMap Internals\r
 * Topic 12: Search Complexity Evolution: From Java 7 O(n) to Java 8 O(log n) Treeification\r
 * Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
 */\r
\r
package com.coderaccotax.javatutorial.collections;\r
\r
public class HashMapComplexityEvolutionDemo {\r
\r
    public static void main(String[] args) {\r
        System.out.println("==========================================================================");\r
        System.out.println(" TOPIC 12: HashMap COMPLEXITY EVOLUTION - BARRACKPORE");\r
        System.out.println("==========================================================================\\n");\r
\r
        System.out.println(">>> COMPARATIVE COMPLEXITY MATRIX (JAVA 7 vs JAVA 8):");\r
        System.out.println("+-------------------+-------------------+-------------------+");\r
        System.out.println("| Scenario          | Java 7 (LinkedList| Java 8+ (TreeBin) |");\r
        System.out.println("+-------------------+-------------------+-------------------+");\r
        System.out.println("| Best Case         | O(1)              | O(1)              |");\r
        System.out.println("| Average Case      | O(1)              | O(1)              |");\r
        System.out.println("| Worst Case (DoS)  | O(n) (Linear Crawl| O(log n) (Balanced|");\r
        System.out.println("+-------------------+-------------------+-------------------+");\r
\r
        System.out.println("\\n>>> MATHEMATICAL IMPACT OF O(log n) TREEIFICATION:");\r
        System.out.println("  - Suppose an attacker injects 10,000 keys with identical hashCodes:");\r
        System.out.println("  - In Java 7: 'get(key)' performs up to 10,000 node equals() checks (Server CPU spikes to 100%!).");\r
        System.out.println("  - In Java 8+: 'get(key)' performs at most ~14 Red-Black tree comparisons (log2(10000) ~ 13.3)!");\r
        System.out.println("  - Improvement Factor: 10,000 / 14 = Over 700x faster under catastrophic worst-case collisions!");\r
\r
        System.out.println("\\n==========================================================================");\r
    }\r
}`,s=`================================================================================\r
JAVA CORE TUTORIAL - QUICK REVISION GUIDE\r
Module 007_005: Map Implementations & HashMap Internals\r
Topic 12: Search Complexity Evolution\r
Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
================================================================================\r
\r
1. COMPLEXITY MATRIX:\r
   - Average: O(1) for put, get, containsKey.\r
   - Worst-case Java 7: O(n) linear list scan.\r
   - Worst-case Java 8+: O(log n) balanced Red-Black tree.\r
   - Defeats Algorithmic Complexity / HashDoS attacks.\r
\r
================================================================================\r
Classroom Practice: Barrackpore Academy | Mentor: Sukanta Hui\r
================================================================================`,i=[{question:"How did Java 8 revolutionize the worst-case search complexity of HashMap?",shortAnswer:"In Java 7 and earlier, severe hash collisions chained elements into a linear linked list, causing lookup time to degrade to O(n) worst-case (vulnerable to HashDoS attacks). Java 8 introduced bucket treeification, converting collision chains &ge; 8 nodes into Red-Black trees. This guaranteed a worst-case lookup complexity of O(log n), reducing 10,000 comparisons down to at most ~14 comparisons.",explanation:"Major security and algorithmic milestone in Java 8.",hint:"Worst-case improved from O(n) linear scan to O(log n) Red-Black tree search.",level:"Intermediate",codeExample:"get(key); // Average O(1); Worst-case O(log n) in Java 8+"}];function v(){return e.jsxs("div",{className:"space-y-12 px-4 md:px-8 py-8 text-slate-200 bg-slate-900 min-h-screen",children:[e.jsxs("header",{className:"space-y-4 border-b border-slate-800 pb-6",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"px-3 py-1 bg-sky-500/10 text-sky-400 border border-sky-500/20 text-xs font-semibold rounded-full uppercase tracking-wider",children:"Module 007_005 · Topic 12"}),e.jsx("span",{className:"px-3 py-1 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-xs font-semibold rounded-full",children:"O(log n) Worst-Case"})]}),e.jsxs("h1",{className:"text-xl sm:text-2xl md:text-3xl font-bold text-white tracking-tight",children:["Worst-Case Search Complexity: From ",e.jsx("code",{className:"text-rose-400 font-mono",children:"O(n)"})," to ",e.jsx("code",{className:"text-emerald-400 font-mono",children:"O(log n)"})," Treeification"]}),e.jsx("p",{className:"text-base md:text-lg text-slate-400 leading-relaxed max-w-4xl",children:"Analyze algorithmic complexity evolution: comparing Java 7 linear collision lists against Java 8+ balanced Red-Black trees under deliberate HashDoS collision workloads."})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsxs("h2",{className:"text-2xl font-bold text-emerald-400 flex items-center gap-2",children:[e.jsx("span",{children:"💻"})," Hands-On Java Demo Code"]}),e.jsx(t,{fileModule:r,title:"HashMapComplexityEvolutionDemo.java",highlightLines:[7,10,13,14,15,16,17,18,19,23,24]})]}),e.jsx("section",{className:"space-y-4",children:e.jsx(a,{title:"Complexity Evolution FAQs",questions:i})}),e.jsx("section",{className:"space-y-4",children:e.jsx(n,{content:s,title:"Module 007_005 Topic 12: Search Complexity Evolution",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Printable Note",downloadFileName:"007_005_topic12_search_complexity_evolution_note.txt"})}),e.jsx(o,{note:"If you are asked in an interview: 'What is the worst-case time complexity of HashMap.get()?', answer: 'In Java 7 it was O(n), but in Java 8+ it is O(log n) because buckets convert into Red-Black trees!' Interviewers love this answer! — Sukanta Hui"})]})}export{v as default};
