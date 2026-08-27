import{j as e}from"./vendor-react-core-Doz9nIC6.js";import{J as r}from"./JavaFileLoader-BfBG3xz_.js";import{F as n}from"./FAQTemplate-CkSqDH4B.js";import{P as t}from"./PlainTextPrint-C08xhKA4.js";import{T as s}from"./TeacherSukantaHui-CyIG3xbg.js";import"./JavaCodeBlock-BwsLxS3r.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-CIaKtAt4.js";const i=`/**\r
 * Java Core Tutorial - Module 010_006: JVM Profiling, Heap Dumps & Memory Leak Diagnosis\r
 * Topic 3: Unregistered Listeners & Callbacks - The Lapsed Listener Problem\r
 * Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
 */\r
\r
package com.coderaccotax.javatutorial.profiling;\r
\r
import java.util.ArrayList;\r
import java.util.List;\r
\r
public class UnregisteredListenersCallbacksDemo {\r
\r
    public interface StudentFeeListener {\r
        void onFeePaid(String studentName, double amount);\r
    }\r
\r
    // Long-lived event broadcaster (Singleton / Global Service):\r
    public static class AcademyEventBroadcaster {\r
        private final List<StudentFeeListener> listeners = new ArrayList<>();\r
\r
        public void registerListener(StudentFeeListener listener) {\r
            listeners.add(listener);\r
        }\r
\r
        public void unregisterListener(StudentFeeListener listener) {\r
            listeners.remove(listener); // Mandatory to prevent leak!\r
        }\r
    }\r
\r
    // Short-lived UI / Window component:\r
    public static class StudentEnrollmentDialog implements StudentFeeListener, AutoCloseable {\r
        private final String studentName;\r
        private final AcademyEventBroadcaster broadcaster;\r
\r
        public StudentEnrollmentDialog(String name, AcademyEventBroadcaster broadcaster) {\r
            this.studentName = name;\r
            this.broadcaster = broadcaster;\r
            // Registering listener:\r
            this.broadcaster.registerListener(this);\r
            System.out.println("   [DIALOG OPENED]: " + studentName + " (Listener Registered)");\r
        }\r
\r
        @Override\r
        public void onFeePaid(String name, double amount) {\r
            System.out.println("   --> Dialog updated for " + name + ": ₹" + amount);\r
        }\r
\r
        @Override\r
        public void close() {\r
            // FIX: Unregister listener on close!\r
            broadcaster.unregisterListener(this);\r
            System.out.println("   [DIALOG CLOSED]: " + studentName + " (Listener Unregistered ✅)");\r
        }\r
    }\r
\r
    public static void main(String[] args) {\r
        System.out.println("==========================================================================");\r
        System.out.println(" TOPIC 3: UNREGISTERED LISTENERS & CALLBACKS - BARRACKPORE");\r
        System.out.println("==========================================================================\\n");\r
\r
        AcademyEventBroadcaster globalBroadcaster = new AcademyEventBroadcaster();\r
\r
        // Using try-with-resources to guarantee listener unregistration:\r
        try (StudentEnrollmentDialog dialog = new StudentEnrollmentDialog("Swadeep Paul", globalBroadcaster)) {\r
            // Dialog actively in use\r
        } // AutoCloseable triggers dialog.close() -> Unregisters listener!\r
\r
        System.out.println("\\n>>> VERDICT: Zero Lapsed Listener Memory Leak!");\r
        System.out.println("==========================================================================");\r
    }\r
}\r
`,a=`================================================================================\r
JAVA CORE TUTORIAL - QUICK REVISION GUIDE\r
Module 010_006: JVM Profiling, Heap Dumps & Memory Leak Diagnosis\r
Topic 3: Unregistered Listeners & Callbacks\r
Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
================================================================================\r
\r
1. THE LAPSED LISTENER PROBLEM:\r
   - A short-lived subscriber object registers as a listener to a long-lived publisher object.\r
   - The publisher retains a strong reference to the subscriber in its internal list.\r
   - Even if the application discards the subscriber, the publisher keeps the subscriber\r
     (and everything the subscriber references) alive indefinitely!\r
\r
2. DEFENSIVE PATTERNS:\r
   - Always implement 'AutoCloseable' and unregister in 'close()'.\r
   - Use 'WeakReference' lists in publisher implementations (EventBus / WeakListeners).\r
\r
================================================================================\r
Classroom Practice: Barrackpore Academy | Mentor: Sukanta Hui\r
================================================================================\r
`,o=[{question:"Why does the 'Lapsed Listener Problem' cause memory leaks in Java GUI and event-driven architectures?",shortAnswer:"Because the long-lived event publisher holds a strong reference to the listener callback in its subscriber collection. If the subscriber window or component closes without unregistering, the publisher keeps the entire subscriber object tree pinned in memory.",explanation:"One of the most common causes of client-side and server-side memory leaks.",hint:"Long-lived publisher holds strong references to short-lived subscribers.",level:"Intermediate",codeExample:"publisher.register(subscriber); // Must call publisher.unregister(subscriber)!"},{question:"How can an event publisher be designed so that listeners are automatically garbage collected without manual unregistration?",shortAnswer:"By storing subscriber callbacks in a WeakReference collection or using a WeakListener wrapper, allowing subscribers to be garbage collected when they lose other strong references.",explanation:"Pioneered in UI frameworks like JavaFX and Swing.",hint:"Use WeakReference listeners in the publisher.",level:"Advanced",codeExample:"List<WeakReference<Listener>> listeners = new ArrayList<>();"}];function h(){return e.jsxs("div",{className:"space-y-12 px-4 md:px-8 py-8 text-slate-200 bg-slate-900 min-h-screen",children:[e.jsxs("header",{className:"space-y-4 border-b border-slate-800 pb-6",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"px-3 py-1 bg-sky-500/10 text-sky-400 border border-sky-500/20 text-xs font-semibold rounded-full uppercase tracking-wider",children:"Module 010_006 · Topic 3"}),e.jsx("span",{className:"px-3 py-1 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-xs font-semibold rounded-full",children:"JVM Profiling & OOM"})]}),e.jsxs("h1",{className:"text-3xl md:text-4xl font-extrabold text-white tracking-tight",children:["Unregistered Listeners & Callbacks: ",e.jsx("code",{className:"text-emerald-400 font-mono",children:"The Lapsed Listener Problem"})]}),e.jsx("p",{className:"text-base md:text-lg text-slate-400 leading-relaxed max-w-4xl",children:"Event broadcaster leaks: why registering a short-lived listener with a long-lived publisher keeps the entire subscriber object graph pinned in memory."})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsxs("h2",{className:"text-2xl font-bold text-emerald-400 flex items-center gap-2",children:[e.jsx("span",{children:"💻"})," Hands-On Java Demo Code"]}),e.jsx(r,{fileModule:i,title:"UnregisteredListenersCallbacksDemo.java",highlightLines:[18,25,34,43]})]}),e.jsx("section",{className:"space-y-4",children:e.jsx(n,{title:"Memory Profiling & OOM FAQs",questions:o})}),e.jsx("section",{className:"space-y-4",children:e.jsx(t,{content:a,title:"Module 010_006 Topic 3: Unregistered Listeners & Callbacks",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Printable Note",downloadFileName:"010_006_topic3_unregistered_listeners_callbacks_note.txt"})}),e.jsx(s,{note:"When you register a listener: publisher.addListener(this), the publisher now holds a strong reference to your object! If you forget publisher.removeListener(this) when closing, your entire object graph is leaked forever! — Sukanta Hui"})]})}export{h as default};
