import{j as e}from"./vendor-react-core-Doz9nIC6.js";import{J as t}from"./JavaFileLoader-BfBG3xz_.js";import{F as r}from"./FAQTemplate-BHhlgA96.js";import{P as n}from"./PlainTextPrint-C08xhKA4.js";import{T as a}from"./TeacherSukantaHui-DDN87fI5.js";import"./JavaCodeBlock-BwsLxS3r.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-DEsnU7fn.js";const o=`/**\r
 * Java Core Tutorial - Module 007_007: Iterators, Spliterators & Fail-Fast Mechanics\r
 * Topic 2: Removing Elements Safely During Iteration via iterator.remove()\r
 * Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
 */\r
\r
package com.coderaccotax.javatutorial.collections;\r
\r
import java.util.ArrayList;\r
import java.util.Iterator;\r
import java.util.List;\r
\r
public class SafeRemovalDuringIterationDemo {\r
\r
    public static void main(String[] args) {\r
        System.out.println("==========================================================================");\r
        System.out.println(" TOPIC 2: SAFE REMOVAL VIA iterator.remove() - BARRACKPORE");\r
        System.out.println("==========================================================================\\n");\r
\r
        List<Integer> studentMarks = new ArrayList<>(List.of(45, 82, 35, 91, 28, 77));\r
        System.out.println(">>> 1. Initial Marks List: " + studentMarks);\r
\r
        // Filter out all failing marks (< 40) safely:\r
        Iterator<Integer> it = studentMarks.iterator();\r
        while (it.hasNext()) {\r
            int mark = it.next(); // MUST call next() before remove()!\r
            if (mark < 40) {\r
                System.out.println("  [REMOVING FAILING MARK] -> " + mark);\r
                it.remove(); // Safely removes current element from backing collection!\r
            }\r
        }\r
\r
        System.out.println("\\n>>> 2. Filtered Marks List (Only Passing Marks Remain):");\r
        System.out.println("  " + studentMarks);\r
\r
        // Modern Java 8 Alternative (removeIf):\r
        studentMarks.removeIf(m -> m > 90); // Uses iterator.remove() internally!\r
        System.out.println("\\n>>> 3. After removeIf(m > 90): " + studentMarks);\r
\r
        System.out.println("\\n>>> THE 2 RULES OF iterator.remove():");\r
        System.out.println("  1. 'next()' Precondition : You MUST call 'it.next()' before calling 'it.remove()'. Calling remove() twice without next() throws 'IllegalStateException'.");\r
        System.out.println("  2. Synchronizes modCount : 'it.remove()' updates internal cursor state AND adjusts 'expectedModCount = modCount', preventing exceptions!");\r
\r
        System.out.println("\\n==========================================================================");\r
    }\r
}`,i=`================================================================================\r
JAVA CORE TUTORIAL - QUICK REVISION GUIDE\r
Module 007_007: Iterators, Spliterators & Fail-Fast Mechanics\r
Topic 2: Safe Removal via iterator.remove()\r
Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
================================================================================\r
\r
1. SAFE REMOVAL:\r
   - 'it.remove()' is the ONLY safe way to remove during loops.\r
   - Synchronizes 'expectedModCount = modCount'.\r
   - Mandatory rule: 'next()' MUST be called before each 'remove()'.\r
   - Java 8 idiom: 'list.removeIf(predicate)' uses this under the hood.\r
\r
================================================================================\r
Classroom Practice: Barrackpore Academy | Mentor: Sukanta Hui\r
================================================================================`,s=[{question:"Why is 'iterator.remove()' the ONLY safe way to remove elements while traversing a standard collection, and what happens if you call it before 'next()'?",shortAnswer:"1. 'Why it is safe': 'iterator.remove()' modifies the backing collection AND simultaneously updates the iterator's internal cursor and increments 'expectedModCount' to match 'modCount'. This keeps the iterator synchronized with collection structure. 2. 'IllegalStateException': 'remove()' removes the element returned by the most recent 'next()' call. If 'next()' has not been called yet (or if 'remove()' is called twice consecutively), it throws 'IllegalStateException'.",explanation:"Core contract of java.util.Iterator.remove().",hint:"Synchronizes expectedModCount with modCount; throws IllegalStateException if called before next().",level:"Intermediate",codeExample:"while(it.hasNext()) { if(it.next().equals(bad)) it.remove(); } // 100% safe"}];function h(){return e.jsxs("div",{className:"space-y-12 px-4 md:px-8 py-8 text-slate-200 bg-slate-900 min-h-screen",children:[e.jsxs("header",{className:"space-y-4 border-b border-slate-800 pb-6",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"px-3 py-1 bg-sky-500/10 text-sky-400 border border-sky-500/20 text-xs font-semibold rounded-full uppercase tracking-wider",children:"Module 007_007 · Topic 2"}),e.jsx("span",{className:"px-3 py-1 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-xs font-semibold rounded-full",children:"Safe Element Removal"})]}),e.jsxs("h1",{className:"text-xl sm:text-2xl md:text-3xl font-bold text-white tracking-tight",children:["Removing Elements Safely: ",e.jsx("code",{className:"text-emerald-400 font-mono",children:"iterator.remove()"})," & ",e.jsx("code",{className:"text-sky-400 font-mono",children:"removeIf()"})]}),e.jsxs("p",{className:"text-base md:text-lg text-slate-400 leading-relaxed max-w-4xl",children:["Prevent iteration corruption: mastering safe element elimination using ",e.jsx("code",{className:"text-emerald-300 font-mono",children:"iterator.remove()"})," and modern Java 8 declarative ",e.jsx("code",{className:"text-sky-300 font-mono",children:"removeIf()"})," predicates."]})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsxs("h2",{className:"text-2xl font-bold text-emerald-400 flex items-center gap-2",children:[e.jsx("span",{children:"💻"})," Hands-On Java Demo Code"]}),e.jsx(t,{fileModule:o,title:"SafeRemovalDuringIterationDemo.java",highlightLines:[7,10,16,17,20,21,22,29,30]})]}),e.jsx("section",{className:"space-y-4",children:e.jsx(r,{title:"Safe Removal FAQs",questions:s})}),e.jsx("section",{className:"space-y-4",children:e.jsx(n,{content:i,title:"Module 007_007 Topic 2: Safe Removal via iterator.remove()",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Printable Note",downloadFileName:"007_007_topic2_safe_removal_iterator_note.txt"})}),e.jsx(a,{note:"Never call 'list.remove(item)' inside a for-each loop! That crashes with ConcurrentModificationException! Always use 'iterator.remove()' or 'list.removeIf(item → condition)'! — Sukanta Hui"})]})}export{h as default};
