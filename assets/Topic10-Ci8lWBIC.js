import{j as e}from"./vendor-react-core-Doz9nIC6.js";import{J as n}from"./JavaFileLoader-BfBG3xz_.js";import{F as r}from"./FAQTemplate-BHhlgA96.js";import{P as a}from"./PlainTextPrint-C08xhKA4.js";import{T as t}from"./TeacherSukantaHui-CEPuAfsb.js";import"./JavaCodeBlock-BwsLxS3r.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-DGCamHnX.js";const s=`/**\r
 * Java Core Tutorial - Module 003_007: Nested & Inner Classes\r
 * Topic 10: Anonymous Classes in Callbacks, Event Listeners & Legacy Multithreading\r
 * Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
 */\r
\r
package com.coderaccotax.javatutorial.nested;\r
\r
import java.util.ArrayList;\r
import java.util.Collections;\r
import java.util.Comparator;\r
import java.util.List;\r
\r
public class AnonymousCallbacksAndListenersDemo {\r
\r
    public static void main(String[] args) throws InterruptedException {\r
        System.out.println("==========================================================================");\r
        System.out.println(" TOPIC 10: ANONYMOUS CALLBACKS & THREADING - BARRACKPORE");\r
        System.out.println("==========================================================================\\n");\r
\r
        // 1. Legacy Multithreading using Anonymous Runnable:\r
        Thread backgroundWorker = new Thread(new Runnable() {\r
            @Override\r
            public void run() {\r
                System.out.println("  [ASYNC THREAD] Generating Barrackpore attendance ledger in background...");\r
            }\r
        });\r
        backgroundWorker.start();\r
        backgroundWorker.join();\r
\r
        // 2. Custom Sorting with Anonymous Comparator:\r
        List<String> trainees = new ArrayList<>();\r
        trainees.add("Swadeep Paul (Barrackpore)");\r
        trainees.add("Tuhina Das (Naihati)");\r
        trainees.add("Abhronila Das (Shyamnagar)");\r
        trainees.add("Debangshu Mukherjee (Ichapur)");\r
\r
        // Anonymous Comparator sorting by name length:\r
        Collections.sort(trainees, new Comparator<String>() {\r
            @Override\r
            public int compare(String s1, String s2) {\r
                return Integer.compare(s1.length(), s2.length());\r
            }\r
        });\r
\r
        System.out.println("\\n>>> 2. Trainees Sorted by Length via Anonymous Comparator:");\r
        for (String trainee : trainees) {\r
            System.out.println("  - " + trainee);\r
        }\r
\r
        System.out.println("\\n==========================================================================");\r
    }\r
}`,o=`================================================================================\r
JAVA CORE TUTORIAL - QUICK REVISION GUIDE\r
Module 003_007: Nested & Inner Classes\r
Topic 10: Anonymous Callbacks & Listeners\r
Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
================================================================================\r
\r
1. COMMON PATTERNS:\r
   - 'new Thread(new Runnable() { public void run() {...} }).start()'\r
   - 'Collections.sort(list, new Comparator<T>() {...})'\r
   - GUI Event handling (ActionListeners, MouseListeners).\r
\r
================================================================================\r
Classroom Practice: Barrackpore Academy | Mentor: Sukanta Hui\r
================================================================================`,i=[{question:"Where were Anonymous Inner Classes predominantly used prior to Java 8?",shortAnswer:"1. GUI event listeners (e.g. Swing 'button.addActionListener(new ActionListener() { ... })'). 2. Multithreading ('new Thread(new Runnable() { ... }).start()'). 3. Collections sorting ('Collections.sort(list, new Comparator<T>() { ... })').",explanation:"Many single-abstract-method (SAM) use cases were superseded by Java 8 lambdas.",hint:"GUI event handlers, Thread Runnables, and Comparator sorting callbacks.",level:"Beginner",codeExample:"button.addActionListener(new ActionListener() { public void actionPerformed(ActionEvent e) {} });"}];function g(){return e.jsxs("div",{className:"space-y-12 px-4 md:px-8 py-8 text-slate-200 bg-slate-900 min-h-screen",children:[e.jsxs("header",{className:"space-y-4 border-b border-slate-800 pb-6",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"px-3 py-1 bg-sky-500/10 text-sky-400 border border-sky-500/20 text-xs font-semibold rounded-full uppercase tracking-wider",children:"Module 003_007 · Topic 10"}),e.jsx("span",{className:"px-3 py-1 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-xs font-semibold rounded-full",children:"Callbacks & Threads"})]}),e.jsx("h1",{className:"text-xl sm:text-2xl md:text-3xl font-bold text-white tracking-tight",children:"Anonymous Classes in Event Listeners, Callbacks & Legacy Multithreading"}),e.jsxs("p",{className:"text-base md:text-lg text-slate-400 leading-relaxed max-w-4xl",children:["Build interactive pipelines: dispatching asynchronous background threads with ",e.jsxs("code",{className:"text-emerald-300 font-mono",children:["new Runnable() ","{ ... }"]})," and custom sorting with anonymous ",e.jsx("code",{className:"text-sky-300 font-mono",children:"Comparator"})," instances."]})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsxs("h2",{className:"text-2xl font-bold text-emerald-400 flex items-center gap-2",children:[e.jsx("span",{children:"💻"})," Hands-On Java Demo Code"]}),e.jsx(n,{fileModule:s,title:"AnonymousCallbacksAndListenersDemo.java",highlightLines:[7,19,20,21,34,35,36,37,38]})]}),e.jsx("section",{className:"space-y-4",children:e.jsx(r,{title:"Callbacks FAQs",questions:i})}),e.jsx("section",{className:"space-y-4",children:e.jsx(a,{content:o,title:"Module 003_007 Topic 10: Anonymous Callbacks",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Printable Note",downloadFileName:"003_007_topic10_anonymous_callbacks_note.txt"})}),e.jsx(t,{note:"Understanding anonymous classes is vital for reading legacy enterprise codebases like Spring 3/4 or Android apps before Java 8 lambdas became prevalent! — Sukanta Hui"})]})}export{g as default};
