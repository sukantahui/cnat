import{j as t}from"./vendor-react-core-Doz9nIC6.js";import{J as e}from"./JavaFileLoader-BfBG3xz_.js";import{F as a}from"./FAQTemplate-BHhlgA96.js";import{P as r}from"./PlainTextPrint-C08xhKA4.js";import{T as i}from"./TeacherSukantaHui-RpFLNJ5A.js";import"./JavaCodeBlock-BwsLxS3r.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-wprqVFW_.js";const n=`/**\r
 * Java Core Tutorial - Module 007_007: Iterators, Spliterators & Fail-Fast Mechanics\r
 * Topic 6: Fail-Fast Iterators: ArrayList, HashSet & HashMap Failure Guarantees\r
 * Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
 */\r
\r
package com.coderaccotax.javatutorial.collections;\r
\r
import java.util.ArrayList;\r
import java.util.ConcurrentModificationException;\r
import java.util.HashMap;\r
import java.util.HashSet;\r
import java.util.Iterator;\r
import java.util.List;\r
import java.util.Map;\r
import java.util.Set;\r
\r
public class FailFastCollectionsSuiteDemo {\r
\r
    public static void main(String[] args) {\r
        System.out.println("==========================================================================");\r
        System.out.println(" TOPIC 6: FAIL-FAST ITERATORS (ArrayList, HashSet, HashMap) - BARRACKPORE");\r
        System.out.println("==========================================================================\\n");\r
\r
        // 1. ArrayList Fail-Fast Test:\r
        List<String> list = new ArrayList<>(List.of("A", "B", "C"));\r
        Iterator<String> listIt = list.iterator();\r
        list.add("D"); // Modifies list directly\r
        try {\r
            listIt.next(); // Triggers CME!\r
        } catch (ConcurrentModificationException e) {\r
            System.out.println(">>> 1. ArrayList Iterator: [FAILED FAST] Caught CME as expected!");\r
        }\r
\r
        // 2. HashSet Fail-Fast Test:\r
        Set<String> set = new HashSet<>(Set.of("X", "Y", "Z"));\r
        Iterator<String> setIt = set.iterator();\r
        set.add("W");\r
        try {\r
            setIt.next();\r
        } catch (ConcurrentModificationException e) {\r
            System.out.println(">>> 2. HashSet Iterator  : [FAILED FAST] Caught CME as expected!");\r
        }\r
\r
        // 3. HashMap Fail-Fast Test:\r
        Map<String, String> map = new HashMap<>(Map.of("K1", "V1", "K2", "V2"));\r
        Iterator<String> mapIt = map.keySet().iterator();\r
        map.put("K3", "V3");\r
        try {\r
            mapIt.next();\r
        } catch (ConcurrentModificationException e) {\r
            System.out.println(">>> 3. HashMap Iterator  : [FAILED FAST] Caught CME as expected!");\r
        }\r
\r
        System.out.println("\\n>>> FAIL-FAST PHILOSOPHY:");\r
        System.out.println("  - Fail-Fast iterators fail immediately and cleanly, rather than risking non-deterministic behavior at an undetermined time in the future.");\r
\r
        System.out.println("\\n==========================================================================");\r
    }\r
}`,s=`================================================================================\r
JAVA CORE TUTORIAL - QUICK REVISION GUIDE\r
Module 007_007: Iterators, Spliterators & Fail-Fast Mechanics\r
Topic 6: Fail-Fast Iterators\r
Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
================================================================================\r
\r
1. FAIL-FAST COLLECTIONS:\r
   - ArrayList, LinkedList, HashSet, HashMap, TreeSet, TreeMap.\r
   - Mechanism: 'modCount != expectedModCount'.\r
   - Action: Throws 'ConcurrentModificationException' immediately.\r
   - Purpose: Prevents non-deterministic bugs and memory corruption.\r
\r
================================================================================\r
Classroom Practice: Barrackpore Academy | Mentor: Sukanta Hui\r
================================================================================`,o=[{question:"Which collection families in standard Java provide 'Fail-Fast' iterators, and what is the underlying philosophy?",shortAnswer:"All standard general-purpose collections in 'java.util' (including 'ArrayList', 'LinkedList', 'Vector', 'HashSet', 'LinkedHashSet', 'TreeSet', 'HashMap', 'LinkedHashMap', 'TreeMap') provide Fail-Fast iterators. The philosophy is: 'fail immediately and cleanly (throwing ConcurrentModificationException)' upon detecting structural corruption, rather than risking arbitrary, non-deterministic bugs or silent data loss later during execution.",explanation:"Standard design philosophy across java.util collection classes.",hint:"Standard collections in java.util are fail-fast: they fail immediately on structural change to prevent silent corruption.",level:"Intermediate",codeExample:'Iterator it = list.iterator(); list.add("item"); it.next(); // Throws CME immediately'}];function y(){return t.jsxs("div",{className:"space-y-12 px-4 md:px-8 py-8 text-slate-200 bg-slate-900 min-h-screen",children:[t.jsxs("header",{className:"space-y-4 border-b border-slate-800 pb-6",children:[t.jsxs("div",{className:"flex items-center gap-3",children:[t.jsx("span",{className:"px-3 py-1 bg-sky-500/10 text-sky-400 border border-sky-500/20 text-xs font-semibold rounded-full uppercase tracking-wider",children:"Module 007_007 · Topic 6"}),t.jsx("span",{className:"px-3 py-1 bg-rose-500/10 text-rose-400 border border-rose-500/20 text-xs font-semibold rounded-full",children:"Fail-Fast Iterators"})]}),t.jsxs("h1",{className:"text-xl sm:text-2xl md:text-3xl font-bold text-white tracking-tight",children:["Fail-Fast Iterators: Immediate Failure Guarantees in ",t.jsx("code",{className:"text-emerald-400 font-mono",children:"ArrayList"}),", ",t.jsx("code",{className:"text-sky-400 font-mono",children:"HashSet"})," & ",t.jsx("code",{className:"text-amber-400 font-mono",children:"HashMap"})]}),t.jsx("p",{className:"text-base md:text-lg text-slate-400 leading-relaxed max-w-4xl",children:"Understand fail-fast design contracts: observing immediate deterministic exception dispatching across standard Java Collections to prevent silent memory and index corruption."})]}),t.jsxs("section",{className:"space-y-4",children:[t.jsxs("h2",{className:"text-2xl font-bold text-emerald-400 flex items-center gap-2",children:[t.jsx("span",{children:"💻"})," Hands-On Java Demo Code"]}),t.jsx(e,{fileModule:n,title:"FailFastCollectionsSuiteDemo.java",highlightLines:[7,10,16,17,24,25,32,33,39,40]})]}),t.jsx("section",{className:"space-y-4",children:t.jsx(a,{title:"Fail-Fast FAQs",questions:o})}),t.jsx("section",{className:"space-y-4",children:t.jsx(r,{content:s,title:"Module 007_007 Topic 6: Fail-Fast Iterators",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Printable Note",downloadFileName:"007_007_topic6_fail_fast_iterators_note.txt"})}),t.jsx(i,{note:"Fail-Fast is a safety airbag for your code! If a collection is modified while you are reading it, Java crashes immediately with ConcurrentModificationException so you can fix the bug, rather than returning corrupted or missing data! — Sukanta Hui"})]})}export{y as default};
