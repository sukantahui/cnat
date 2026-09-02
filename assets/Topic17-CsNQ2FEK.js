import{j as e}from"./vendor-react-core-Doz9nIC6.js";import{J as n}from"./JavaFileLoader-BfBG3xz_.js";import{F as t}from"./FAQTemplate-BHhlgA96.js";import{P as s}from"./PlainTextPrint-C08xhKA4.js";import{T as r}from"./TeacherSukantaHui-RpFLNJ5A.js";import"./JavaCodeBlock-BwsLxS3r.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-wprqVFW_.js";const i=`/**\r
 * Java Core Tutorial - Module 003_007: Nested & Inner Classes\r
 * Topic 17: Enterprise Architecture Capstone: Event-Driven Notification Engine\r
 * Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
 */\r
\r
package com.coderaccotax.javatutorial.nested;\r
\r
import java.util.ArrayList;\r
import java.util.List;\r
\r
public class EventDrivenNotificationEngineCapstoneDemo {\r
\r
    // 1. Static Nested Event Class:\r
    public static class AdmissionEvent {\r
        private final String studentName;\r
        private final String center;\r
        private final double feePaid;\r
\r
        public AdmissionEvent(String name, String center, double fee) {\r
            this.studentName = name;\r
            this.center = center;\r
            this.feePaid = fee;\r
        }\r
\r
        public String getStudentName() { return studentName; }\r
        public String getCenter() { return center; }\r
        public double getFeePaid() { return feePaid; }\r
    }\r
\r
    // 2. Functional Interface Callback:\r
    public interface AdmissionEventListener {\r
        void onAdmissionCompleted(AdmissionEvent event);\r
    }\r
\r
    // 3. Inner Class Dispatcher:\r
    public class EventDispatcher {\r
        private final List<AdmissionEventListener> listeners = new ArrayList<>();\r
\r
        public void subscribe(AdmissionEventListener listener) {\r
            listeners.add(listener);\r
        }\r
\r
        public void publish(AdmissionEvent event) {\r
            for (AdmissionEventListener l : listeners) {\r
                l.onAdmissionCompleted(event);\r
            }\r
        }\r
    }\r
\r
    public static void main(String[] args) {\r
        System.out.println("==========================================================================");\r
        System.out.println(" TOPIC 17: EVENT-DRIVEN ENGINE CAPSTONE - BARRACKPORE");\r
        System.out.println("==========================================================================\\n");\r
\r
        EventDrivenNotificationEngineCapstoneDemo engine = new EventDrivenNotificationEngineCapstoneDemo();\r
        EventDrivenNotificationEngineCapstoneDemo.EventDispatcher dispatcher = engine.new EventDispatcher();\r
\r
        // Subscribing with Anonymous Classes & Lambdas:\r
        dispatcher.subscribe(new AdmissionEventListener() {\r
            @Override\r
            public void onAdmissionCompleted(AdmissionEvent e) {\r
                System.out.printf("  [SMS SERVICE] Sent receipt to %s (%s center)%n", e.getStudentName(), e.getCenter());\r
            }\r
        });\r
\r
        dispatcher.subscribe(e ->\r
                System.out.printf("  [ACCOTAX LEDGER] Logged tuition payment of %.2f INR into Barrackpore Books.%n", e.getFeePaid())\r
        );\r
\r
        System.out.println(">>> Triggering New Admission Event Publication:");\r
        AdmissionEvent newStudent = new AdmissionEvent("Swadeep Paul", "Barrackpore", 12500.0);\r
        dispatcher.publish(newStudent);\r
\r
        System.out.println("\\n==========================================================================");\r
        System.out.println(" MODULE 003_007 NESTED, INNER & ANONYMOUS CLASSES 100% COMPLETE!");\r
        System.out.println("==========================================================================");\r
    }\r
}`,a=`================================================================================\r
JAVA CORE TUTORIAL - QUICK REVISION GUIDE\r
Module 003_007: Nested & Inner Classes\r
Topic 17: Event-Driven Engine Capstone\r
Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
================================================================================\r
\r
1. MODULE 003_007 SUMMARY:\r
   - Member Inner Class: bound to outer instance ('outer.new Inner()').\r
   - Scope disambiguation: 'OuterClass.this.field'.\r
   - Static Nested Class: standalone helper ('new Outer.Static()').\r
   - Method-Local Class: scoped inside method, accesses effectively final vars.\r
   - Anonymous Class: unnamed inline class implementing interface or abstract class.\r
   - Modern Java 16+: Local Records for concise method-level immutable models.\r
\r
================================================================================\r
Classroom Practice: Barrackpore Academy | Mentor: Sukanta Hui\r
================================================================================`,o=[{question:"How do nested classes, static data models, and anonymous event listeners collaborate in enterprise callback architectures?",shortAnswer:"1. 'Static Nested Classes' model immutable event payloads (e.g. AdmissionEvent) with zero outer overhead. 2. 'Member Inner Classes' manage stateful publishing/subscription lifecycles bound to the engine. 3. 'Anonymous Classes & Lambdas' provide pluggable handler implementations on the fly.",explanation:"This architecture is the core foundation behind Spring ApplicationEvents and Java AWT/Swing.",hint:"Static nested classes model event data; inner classes manage dispatching; anonymous classes handle callbacks.",level:"Advanced",codeExample:"dispatcher.subscribe(new Listener() { public void onEvent(Event e) {} });"}];function E(){return e.jsxs("div",{className:"space-y-12 px-4 md:px-8 py-8 text-slate-200 bg-slate-900 min-h-screen",children:[e.jsxs("header",{className:"space-y-4 border-b border-slate-800 pb-6",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"px-3 py-1 bg-sky-500/10 text-sky-400 border border-sky-500/20 text-xs font-semibold rounded-full uppercase tracking-wider",children:"Module 003_007 · Topic 17"}),e.jsx("span",{className:"px-3 py-1 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-xs font-semibold rounded-full",children:"Enterprise Capstone"})]}),e.jsx("h1",{className:"text-xl sm:text-2xl md:text-3xl font-bold text-white tracking-tight",children:"Enterprise Architecture: Designing an Event-Driven Callback Engine with Nested Classes"}),e.jsx("p",{className:"text-base md:text-lg text-slate-400 leading-relaxed max-w-4xl",children:"Synthesize the complete nested class taxonomy: orchestrating static event data carriers, inner dispatchers, anonymous subscribers, and modern lambda callbacks."})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsxs("h2",{className:"text-2xl font-bold text-emerald-400 flex items-center gap-2",children:[e.jsx("span",{children:"💻"})," Hands-On Java Demo Code"]}),e.jsx(n,{fileModule:i,title:"EventDrivenNotificationEngineCapstoneDemo.java",highlightLines:[7,13,14,28,33,53,54,55,60,64]})]}),e.jsx("section",{className:"space-y-4",children:e.jsx(t,{title:"Callback Engine FAQs",questions:o})}),e.jsx("section",{className:"space-y-4",children:e.jsx(s,{content:a,title:"Module 003_007 Topic 17: Event Engine Capstone",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Printable Note",downloadFileName:"003_007_topic17_event_engine_note.txt"})}),e.jsx(r,{note:"Congratulations on completing Module 003_007! You have mastered Member Inner Classes, OuterClass.this, Static Nested Builders, Method-Local classes, Anonymous callbacks, effectively final closures, and Java 16 Local Records! — Sukanta Hui"})]})}export{E as default};
