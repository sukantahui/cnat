import{j as t}from"./vendor-react-core-Doz9nIC6.js";import{J as e}from"./JavaFileLoader-BfBG3xz_.js";import{F as n}from"./FAQTemplate-BHhlgA96.js";import{P as o}from"./PlainTextPrint-C08xhKA4.js";import{T as r}from"./TeacherSukantaHui-CEPuAfsb.js";import"./JavaCodeBlock-BwsLxS3r.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-DGCamHnX.js";const i=`/**\r
 * Java Core Tutorial - Module 007_007: Iterators, Spliterators & Fail-Fast Mechanics\r
 * Topic 3: Direct Mutation Hazard: Why Modifying Collections During Iteration Throws CME\r
 * Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
 */\r
\r
package com.coderaccotax.javatutorial.collections;\r
\r
import java.util.ArrayList;\r
import java.util.ConcurrentModificationException;\r
import java.util.List;\r
\r
public class ConcurrentModificationExceptionCrashDemo {\r
\r
    public static void main(String[] args) {\r
        System.out.println("==========================================================================");\r
        System.out.println(" TOPIC 3: ConcurrentModificationException CRASH ANALYSIS - BARRACKPORE");\r
        System.out.println("==========================================================================\\n");\r
\r
        List<String> studentList = new ArrayList<>(List.of("Swadeep", "Tuhina", "Abhronila", "Debangshu"));\r
\r
        System.out.println(">>> 1. Attempting Direct Mutation Inside Enhanced For-Each Loop:");\r
        try {\r
            for (String student : studentList) {\r
                System.out.println("  Inspecting: " + student);\r
                if (student.equals("Tuhina")) {\r
                    // DIRECT COLLECTION MUTATION DURING ITERATION:\r
                    studentList.remove("Tuhina"); // Modifies list directly instead of using iterator!\r
                }\r
            }\r
        } catch (ConcurrentModificationException e) {\r
            System.out.println("\\n  [CRITICAL RUNTIME EXCEPTION CAUGHT]");\r
            System.out.println("  Caught: " + e.getClass().getName());\r
            System.out.println("  Reason: Direct modification corrupted iterator cursor invariants!");\r
        }\r
\r
        System.out.println("\\n>>> WHY DOES DIRECT MODIFICATION CRASH?");\r
        System.out.println("  1. The enhanced for-each loop compiles down to: 'Iterator it = studentList.iterator()'.");\r
        System.out.println("  2. When 'studentList.remove()' runs, it increments the internal 'modCount' counter.");\r
        System.out.println("  3. On the next loop step, 'it.next()' checks: 'if (modCount != expectedModCount) throw new CME()'.");\r
        System.out.println("  4. Because 'expectedModCount' is stale, Java immediately aborts with CME to prevent silent corruption!");\r
\r
        System.out.println("\\n==========================================================================");\r
    }\r
}`,a=`================================================================================\r
JAVA CORE TUTORIAL - QUICK REVISION GUIDE\r
Module 007_007: Iterators, Spliterators & Fail-Fast Mechanics\r
Topic 3: ConcurrentModificationException Hazard\r
Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
================================================================================\r
\r
1. CME HAZARD:\r
   - For-each loop compiles to Iterator 'it = list.iterator()'.\r
   - 'list.add()' or 'list.remove()' increments 'modCount'.\r
   - Next call to 'it.next()' detects 'modCount != expectedModCount'.\r
   - Throws 'ConcurrentModificationException' immediately (Fail-Fast).\r
   - Solution: Use 'iterator.remove()' or 'list.removeIf()'.\r
\r
================================================================================\r
Classroom Practice: Barrackpore Academy | Mentor: Sukanta Hui\r
================================================================================`,s=[{question:"Why does invoking 'list.remove(item)' or 'list.add(item)' inside an enhanced for-each loop throw 'ConcurrentModificationException'?",shortAnswer:"The enhanced for-each loop is syntactic sugar for a standard 'Iterator'. When the iterator is initialized, it copies the list's 'modCount' into its internal 'expectedModCount'. When you call 'list.remove()' directly, the list increments 'modCount' without updating the iterator's 'expectedModCount'. On the next iteration step, 'iterator.next()' detects 'modCount != expectedModCount' and immediately throws 'ConcurrentModificationException'.",explanation:"Most frequent Java interview question and common junior developer mistake.",hint:"For-each uses an iterator under the hood; direct list.remove() changes modCount making expectedModCount stale.",level:"Intermediate",codeExample:'for(String s : list) { if(s.equals("X")) list.remove(s); } // Throws CME on next loop iteration!'}];function C(){return t.jsxs("div",{className:"space-y-12 px-4 md:px-8 py-8 text-slate-200 bg-slate-900 min-h-screen",children:[t.jsxs("header",{className:"space-y-4 border-b border-slate-800 pb-6",children:[t.jsxs("div",{className:"flex items-center gap-3",children:[t.jsx("span",{className:"px-3 py-1 bg-sky-500/10 text-sky-400 border border-sky-500/20 text-xs font-semibold rounded-full uppercase tracking-wider",children:"Module 007_007 · Topic 3"}),t.jsx("span",{className:"px-3 py-1 bg-rose-500/10 text-rose-400 border border-rose-500/20 text-xs font-semibold rounded-full",children:"CME Hazard"})]}),t.jsxs("h1",{className:"text-xl sm:text-2xl md:text-3xl font-bold text-white tracking-tight",children:["Direct Mutation Hazard: Why Modifying Collections During Iteration Throws ",t.jsx("code",{className:"text-rose-400 font-mono",children:"CME"})]}),t.jsxs("p",{className:"text-base md:text-lg text-slate-400 leading-relaxed max-w-4xl",children:["Analyze fail-fast runtime crashes: observing how calling ",t.jsx("code",{className:"text-rose-300 font-mono",children:"list.remove()"})," inside for-each loops corrupts internal iteration state and triggers ",t.jsx("code",{className:"text-rose-300 font-mono",children:"ConcurrentModificationException"}),"."]})]}),t.jsxs("section",{className:"space-y-4",children:[t.jsxs("h2",{className:"text-2xl font-bold text-emerald-400 flex items-center gap-2",children:[t.jsx("span",{children:"💻"})," Hands-On Java Demo Code"]}),t.jsx(e,{fileModule:i,title:"ConcurrentModificationExceptionCrashDemo.java",highlightLines:[7,10,16,18,19,21,22,24,25]})]}),t.jsx("section",{className:"space-y-4",children:t.jsx(n,{title:"CME Hazard FAQs",questions:s})}),t.jsx("section",{className:"space-y-4",children:t.jsx(o,{content:a,title:"Module 007_007 Topic 3: ConcurrentModificationException Hazard",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Printable Note",downloadFileName:"007_007_topic3_cme_hazard_note.txt"})}),t.jsx(r,{note:"Every Java programmer makes this mistake once: calling 'list.remove(item)' inside a for-each loop! Remember: for-each uses an Iterator under the hood, and changing the list behind the iterator's back will crash your program instantly! — Sukanta Hui"})]})}export{C as default};
