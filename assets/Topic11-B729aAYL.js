import{j as e}from"./vendor-react-core-Doz9nIC6.js";import{J as r}from"./JavaFileLoader-BfBG3xz_.js";import{F as t}from"./FAQTemplate-BHhlgA96.js";import{P as n}from"./PlainTextPrint-C08xhKA4.js";import{T as a}from"./TeacherSukantaHui-CEPuAfsb.js";import"./JavaCodeBlock-BwsLxS3r.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-DGCamHnX.js";const i=`/**\r
 * Java Core Tutorial - Module 007_006: Concurrent Collections & ConcurrentHashMap\r
 * Topic 11: java.util.concurrent.CopyOnWriteArraySet: Backed by CopyOnWriteArrayList\r
 * Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
 */\r
\r
package com.coderaccotax.javatutorial.collections;\r
\r
import java.util.Iterator;\r
import java.util.Set;\r
import java.util.concurrent.CopyOnWriteArraySet;\r
\r
public class CopyOnWriteArraySetDemo {\r
\r
    public static void main(String[] args) {\r
        System.out.println("==========================================================================");\r
        System.out.println(" TOPIC 11: CopyOnWriteArraySet ARCHITECTURE - BARRACKPORE");\r
        System.out.println("==========================================================================\\n");\r
\r
        // Ideal for Notification Observer Registries & Security Permission Sets:\r
        Set<String> notificationSubscribers = new CopyOnWriteArraySet<>();\r
\r
        notificationSubscribers.add("Swadeep (Barrackpore)");\r
        notificationSubscribers.add("Tuhina (Naihati)");\r
        notificationSubscribers.add("Swadeep (Barrackpore)"); // Set rejects duplicates!\r
\r
        System.out.println(">>> 1. Subscriber Set State (Duplicates Enforced):");\r
        System.out.println("  Subscribers: " + notificationSubscribers);\r
\r
        // Safe concurrent iteration while simultaneously adding new subscribers:\r
        System.out.println("\\n>>> 2. Concurrent Iteration & Mutation (Zero ConcurrentModificationException):");\r
        Iterator<String> it = notificationSubscribers.iterator();\r
\r
        // Mutating set while iterator is open:\r
        notificationSubscribers.add("Abhronila (Shyamnagar)");\r
\r
        while (it.hasNext()) {\r
            System.out.println("  Dispatching SMS to Snapshot Subscriber: " + it.next());\r
        }\r
\r
        System.out.println("\\n>>> Updated Set State: " + notificationSubscribers);\r
\r
        System.out.println("\\n>>> HOW CopyOnWriteArraySet WORKS:");\r
        System.out.println("  1. Backed by CopyOnWriteArrayList: Uses 'addIfAbsent()' on backing array list.");\r
        System.out.println("  2. Lock-Free Reads & Iteration    : Reads traverse array snapshot with ZERO locks.");\r
        System.out.println("  3. Best Use Case                 : Read-heavy sets (e.g. registered listeners, security roles).");\r
\r
        System.out.println("\\n==========================================================================");\r
    }\r
}`,s=`================================================================================\r
JAVA CORE TUTORIAL - QUICK REVISION GUIDE\r
Module 007_006: Concurrent Collections & ConcurrentHashMap\r
Topic 11: CopyOnWriteArraySet Architecture\r
Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
================================================================================\r
\r
1. COPYONWRITEARRAYSET:\r
   - Backed by 'CopyOnWriteArrayList'.\r
   - Uniqueness enforced via 'addIfAbsent()'.\r
   - Lock-free reads and snapshot iterators.\r
   - Writes clone the entire backing array.\r
   - Ideal for event listeners and read-heavy config sets.\r
\r
================================================================================\r
Classroom Practice: Barrackpore Academy | Mentor: Sukanta Hui\r
================================================================================`,o=[{question:"How is 'CopyOnWriteArraySet' implemented internally, and what is its primary use case?",shortAnswer:"'CopyOnWriteArraySet' is backed internally by an instance of 'CopyOnWriteArrayList'. When an element is added, it calls 'addIfAbsent(e)' on the backing list to enforce Set uniqueness. Reads and iterations access an immutable array snapshot without locking. It is designed for small, read-heavy sets where modifications are rare but thread-safe iterations are frequent (such as event listener registries and security permission sets).",explanation:"Core thread-safe set implementation in java.util.concurrent.",hint:"Backed by CopyOnWriteArrayList using addIfAbsent; ideal for read-heavy listener registries.",level:"Intermediate",codeExample:"Set<Listener> listeners = new CopyOnWriteArraySet<>(); // Thread-safe observer registry"}];function b(){return e.jsxs("div",{className:"space-y-12 px-4 md:px-8 py-8 text-slate-200 bg-slate-900 min-h-screen",children:[e.jsxs("header",{className:"space-y-4 border-b border-slate-800 pb-6",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"px-3 py-1 bg-sky-500/10 text-sky-400 border border-sky-500/20 text-xs font-semibold rounded-full uppercase tracking-wider",children:"Module 007_006 · Topic 11"}),e.jsx("span",{className:"px-3 py-1 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-xs font-semibold rounded-full",children:"CopyOnWriteArraySet"})]}),e.jsxs("h1",{className:"text-xl sm:text-2xl md:text-3xl font-bold text-white tracking-tight",children:[e.jsx("code",{className:"text-emerald-400 font-mono",children:"CopyOnWriteArraySet"}),": Thread-Safe Sets for Observer Registries"]}),e.jsxs("p",{className:"text-base md:text-lg text-slate-400 leading-relaxed max-w-4xl",children:["Construct concurrent observer sets: utilizing ",e.jsx("code",{className:"text-emerald-300 font-mono",children:"CopyOnWriteArraySet"})," for lock-free snapshot iterations and atomic duplicate rejection."]})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsxs("h2",{className:"text-2xl font-bold text-emerald-400 flex items-center gap-2",children:[e.jsx("span",{children:"💻"})," Hands-On Java Demo Code"]}),e.jsx(r,{fileModule:i,title:"CopyOnWriteArraySetDemo.java",highlightLines:[7,10,16,17,18,25,26,29,31]})]}),e.jsx("section",{className:"space-y-4",children:e.jsx(t,{title:"CopyOnWriteArraySet FAQs",questions:o})}),e.jsx("section",{className:"space-y-4",children:e.jsx(n,{content:s,title:"Module 007_006 Topic 11: CopyOnWriteArraySet",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Printable Note",downloadFileName:"007_006_topic11_copy_on_write_arrayset_note.txt"})}),e.jsx(a,{note:"When building an event publisher or SMS alert system where thousands of threads trigger events and occasionally add subscribers, CopyOnWriteArraySet guarantees 100% thread safety with zero locking during event firing! — Sukanta Hui"})]})}export{b as default};
