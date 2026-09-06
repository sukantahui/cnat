import{j as e}from"./vendor-react-core-Doz9nIC6.js";import{J as a}from"./JavaFileLoader-BfBG3xz_.js";import{F as t}from"./FAQTemplate-BHhlgA96.js";import{P as s}from"./PlainTextPrint-C08xhKA4.js";import{T as n}from"./TeacherSukantaHui-DDN87fI5.js";import"./JavaCodeBlock-BwsLxS3r.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-DEsnU7fn.js";const r=`/**\r
 * Java Core Tutorial - Module 007_008: Sorting, Comparable, Comparator & Collections\r
 * Topic 3: Consistency Between compareTo() and equals(): (x.compareTo(y) == 0) == (x.equals(y))\r
 * Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
 */\r
\r
package com.coderaccotax.javatutorial.collections;\r
\r
import java.math.BigDecimal;\r
import java.util.HashSet;\r
import java.util.Set;\r
import java.util.TreeSet;\r
\r
public class ConsistencyCompareToEqualsDemo {\r
\r
    public static void main(String[] args) {\r
        System.out.println("==========================================================================");\r
        System.out.println(" TOPIC 3: CONSISTENCY BETWEEN compareTo() & equals() - BARRACKPORE");\r
        System.out.println("==========================================================================\\n");\r
\r
        // BigDecimal: The Classic Standard Library Inconsistency Example:\r
        BigDecimal val1 = new BigDecimal("1.0");\r
        BigDecimal val2 = new BigDecimal("1.00");\r
\r
        System.out.println(">>> 1. Comparing '1.0' vs '1.00':");\r
        System.out.println("  equals() evaluation    : " + val1.equals(val2) + " (FALSE! Scale 1 != Scale 2)");\r
        System.out.println("  compareTo() evaluation : " + val1.compareTo(val2) + " (ZERO! Numerically equal!)");\r
\r
        // In HashSet (Uses equals):\r
        Set<BigDecimal> hashSet = new HashSet<>();\r
        hashSet.add(val1);\r
        hashSet.add(val2);\r
        System.out.println("\\n>>> 2. Behavior in HashSet (Uses equals):");\r
        System.out.println("  HashSet Size: " + hashSet.size() + " (Both admitted because equals() returned false!)");\r
\r
        // In TreeSet (Uses compareTo == 0):\r
        Set<BigDecimal> treeSet = new TreeSet<>();\r
        treeSet.add(val1);\r
        treeSet.add(val2);\r
        System.out.println("\\n>>> 3. Behavior in TreeSet (Uses compareTo):");\r
        System.out.println("  TreeSet Size: " + treeSet.size() + " (Duplicate rejected because compareTo returned 0!)");\r
\r
        System.out.println("\\n>>> THE GOLDEN RULE OF COMPARABLE (Effective Java Item 14):");\r
        System.out.println("  - Strongly recommended: '(x.compareTo(y) == 0) == (x.equals(y))'.");\r
        System.out.println("  - If your class violates consistency, clearly document it in Javadoc to prevent silent bugs in sorted sets/maps!");\r
\r
        System.out.println("\\n==========================================================================");\r
    }\r
}`,o=`================================================================================\r
JAVA CORE TUTORIAL - QUICK REVISION GUIDE\r
Module 007_008: Sorting, Comparable, Comparator & Collections\r
Topic 3: Consistency: compareTo vs equals\r
Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
================================================================================\r
\r
1. CONSISTENCY RULE:\r
   - '(x.compareTo(y) == 0) == (x.equals(y))'.\r
   - Inconsistent: 'BigDecimal("1.0")' vs 'BigDecimal("1.00")'.\r
   - HashSet treats them as distinct (size 2).\r
   - TreeSet treats them as duplicates (size 1).\r
   - Always ensure compareTo reflects equals fields!\r
\r
================================================================================\r
Classroom Practice: Barrackpore Academy | Mentor: Sukanta Hui\r
================================================================================`,i=[{question:"What does it mean for 'compareTo()' to be 'consistent with equals()', and what happens if a class violates this recommendation?",shortAnswer:"'compareTo()' is 'consistent with equals()' if and only if '(x.compareTo(y) == 0) == (x.equals(y))' for all instances. If violated (such as in 'java.math.BigDecimal' where '1.0.equals(1.00)' is false but '1.0.compareTo(1.00)' is 0), collections that use 'equals()' (like 'HashSet') will retain both elements, whereas sorted collections that use 'compareTo()' (like 'TreeSet') will treat them as duplicates and discard one, causing inconsistent behavior.",explanation:"Effective Java Item 14 and java.lang.Comparable Javadoc specification.",hint:"(x.compareTo(y) == 0) == (x.equals(y)); inconsistency causes divergent behavior between HashSet and TreeSet.",level:"Advanced",codeExample:'BigDecimal a = new BigDecimal("1.0"); BigDecimal b = new BigDecimal("1.00"); a.equals(b); // false; a.compareTo(b); // 0'}];function S(){return e.jsxs("div",{className:"space-y-12 px-4 md:px-8 py-8 text-slate-200 bg-slate-900 min-h-screen",children:[e.jsxs("header",{className:"space-y-4 border-b border-slate-800 pb-6",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"px-3 py-1 bg-sky-500/10 text-sky-400 border border-sky-500/20 text-xs font-semibold rounded-full uppercase tracking-wider",children:"Module 007_008 · Topic 3"}),e.jsx("span",{className:"px-3 py-1 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-xs font-semibold rounded-full",children:"Consistency with equals()"})]}),e.jsxs("h1",{className:"text-xl sm:text-2xl md:text-3xl font-bold text-white tracking-tight",children:["Consistency: ",e.jsx("code",{className:"text-emerald-400 font-mono",children:"(x.compareTo(y) == 0) == (x.equals(y))"})]}),e.jsxs("p",{className:"text-base md:text-lg text-slate-400 leading-relaxed max-w-4xl",children:["Trace collection behavioral divergence: analyzing how classes like ",e.jsx("code",{className:"text-amber-300 font-mono",children:"BigDecimal"})," behave differently in ",e.jsx("code",{className:"text-emerald-300 font-mono",children:"HashSet"})," vs ",e.jsx("code",{className:"text-purple-300 font-mono",children:"TreeSet"})," due to equals inconsistency."]})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsxs("h2",{className:"text-2xl font-bold text-emerald-400 flex items-center gap-2",children:[e.jsx("span",{children:"💻"})," Hands-On Java Demo Code"]}),e.jsx(a,{fileModule:r,title:"ConsistencyCompareToEqualsDemo.java",highlightLines:[7,10,16,17,20,21,26,27,32,33]})]}),e.jsx("section",{className:"space-y-4",children:e.jsx(t,{title:"Consistency FAQs",questions:i})}),e.jsx("section",{className:"space-y-4",children:e.jsx(s,{content:o,title:"Module 007_008 Topic 3: Consistency: compareTo vs equals",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Printable Note",downloadFileName:"007_008_topic3_consistency_compareto_equals_note.txt"})}),e.jsx(n,{note:"If your compareTo() returns 0 for two objects, make sure equals() also returns true! Otherwise, HashSet will store both items, but TreeSet will throw away the second item as a duplicate! — Sukanta Hui"})]})}export{S as default};
