import{j as e}from"./vendor-react-core-Doz9nIC6.js";import{J as n}from"./JavaFileLoader-BfBG3xz_.js";import{F as r}from"./FAQTemplate-CkSqDH4B.js";import{P as t}from"./PlainTextPrint-C08xhKA4.js";import{T as s}from"./TeacherSukantaHui-CyIG3xbg.js";import"./JavaCodeBlock-BwsLxS3r.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-CIaKtAt4.js";const a=`/**\r
 * Java Core Tutorial - Module 003_007: Nested & Inner Classes\r
 * Topic 13: Inner Classes and Memory Leaks: Hidden Outer References in Event Listeners\r
 * Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
 */\r
\r
package com.coderaccotax.javatutorial.nested;\r
\r
import java.util.ArrayList;\r
import java.util.List;\r
\r
public class InnerClassMemoryLeakDemo {\r
\r
    // Simulating a long-lived global event listener registry:\r
    public static final List<Runnable> GLOBAL_EVENT_LISTENERS = new ArrayList<>();\r
\r
    // A heavy Outer Class representing an entire Academy UI Window with large byte buffers:\r
    public static class HeavyUiWindow {\r
        private byte[] largeImageData = new byte[10 * 1024 * 1024]; // 10 MB payload!\r
        private String windowTitle = "Barrackpore Student Dashboard";\r
\r
        public void registerLeakingListener() {\r
            // BAD PRACTICE: Non-static anonymous inner class holds implicit hidden reference to HeavyUiWindow!\r
            GLOBAL_EVENT_LISTENERS.add(new Runnable() {\r
                @Override\r
                public void run() {\r
                    System.out.println("  Event fired for: " + windowTitle);\r
                }\r
            });\r
        }\r
    }\r
\r
    public static void main(String[] args) {\r
        System.out.println("==========================================================================");\r
        System.out.println(" TOPIC 13: INNER CLASS MEMORY LEAK DIAGNOSIS - BARRACKPORE");\r
        System.out.println("==========================================================================\\n");\r
\r
        System.out.println(">>> 1. Creating HeavyUiWindow and Registering Listener:");\r
        HeavyUiWindow window = new HeavyUiWindow();\r
        window.registerLeakingListener();\r
\r
        // Nullifying local reference to HeavyUiWindow:\r
        window = null;\r
        System.gc(); // Requesting garbage collection\r
\r
        System.out.println("\\n>>> 2. Memory Leak Analysis:");\r
        System.out.println("  Even though 'window = null', the 10 MB HeavyUiWindow CANNOT be garbage collected!");\r
        System.out.println("  Because GLOBAL_EVENT_LISTENERS holds the Runnable, which holds a hidden 'this$0' reference to HeavyUiWindow!");\r
        System.out.println("\\n>>> REMEDY: Use static nested classes or WeakReference in event listeners!");\r
\r
        System.out.println("\\n==========================================================================");\r
    }\r
}`,i=`================================================================================\r
JAVA CORE TUTORIAL - QUICK REVISION GUIDE\r
Module 003_007: Nested & Inner Classes\r
Topic 13: Memory Leaks in Inner Classes\r
Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
================================================================================\r
\r
1. MEMORY LEAK MECHANISM:\r
   - Inner class holds hidden reference ('this$0') to Outer instance.\r
   - If Inner is registered in a static/global list, Outer CANNOT be GC'd.\r
   - Causes OutOfMemoryError in Android Activities & Swing UI.\r
   - Solution: Use 'static class' or 'WeakReference'.\r
\r
================================================================================\r
Classroom Practice: Barrackpore Academy | Mentor: Sukanta Hui\r
================================================================================`,o=[{question:"Why do non-static member inner classes and anonymous classes frequently cause OutOfMemoryError memory leaks in Android or GUI systems?",shortAnswer:"Because non-static inner classes hold a hidden reference ('this$0') to their outer enclosing object (e.g. an Activity or Frame). If the inner class is registered with a long-lived service (like an EventBus or ThreadPool), the entire heavy outer object is prevented from being garbage-collected even after its lifecycle has ended.",explanation:"Remedy: Use 'static nested classes' and pass a 'WeakReference' to the outer object.",hint:"The hidden outer reference prevents the garbage collector from reclaiming the enclosing instance.",level:"Advanced",codeExample:"static class SafeListener implements Runnable { ... } // Static prevents memory leaks"}];function g(){return e.jsxs("div",{className:"space-y-12 px-4 md:px-8 py-8 text-slate-200 bg-slate-900 min-h-screen",children:[e.jsxs("header",{className:"space-y-4 border-b border-slate-800 pb-6",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"px-3 py-1 bg-sky-500/10 text-sky-400 border border-sky-500/20 text-xs font-semibold rounded-full uppercase tracking-wider",children:"Module 003_007 · Topic 13"}),e.jsx("span",{className:"px-3 py-1 bg-rose-500/10 text-rose-400 border border-rose-500/20 text-xs font-semibold rounded-full",children:"Memory Leak Pitfall"})]}),e.jsx("h1",{className:"text-3xl md:text-4xl font-extrabold text-white tracking-tight",children:"Inner Classes & Memory Leaks: Hidden Outer References in Event Listeners"}),e.jsxs("p",{className:"text-base md:text-lg text-slate-400 leading-relaxed max-w-4xl",children:["Diagnose severe garbage collection traps in GUI and mobile apps: tracing how long-lived listeners retain heavy outer instances via compiler-generated ",e.jsx("code",{className:"text-rose-300 font-mono",children:"this$0"})," pointers."]})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsxs("h2",{className:"text-2xl font-bold text-emerald-400 flex items-center gap-2",children:[e.jsx("span",{children:"💻"})," Hands-On Java Demo Code"]}),e.jsx(n,{fileModule:a,title:"InnerClassMemoryLeakDemo.java",highlightLines:[7,13,16,17,20,21,33,34]})]}),e.jsx("section",{className:"space-y-4",children:e.jsx(r,{title:"Memory Leaks FAQs",questions:o})}),e.jsx("section",{className:"space-y-4",children:e.jsx(t,{content:i,title:"Module 003_007 Topic 13: Inner Class Memory Leaks",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Printable Note",downloadFileName:"003_007_topic13_inner_memory_leak_note.txt"})}),e.jsx(s,{note:"This is why Android developers used to get Activity memory leaks all the time with Handlers and AsyncTasks! Making the inner class 'static' completely breaks the retention link! — Sukanta Hui"})]})}export{g as default};
