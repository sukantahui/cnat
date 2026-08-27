import{j as e}from"./vendor-react-core-Doz9nIC6.js";import{J as r}from"./JavaFileLoader-BfBG3xz_.js";import{F as t}from"./FAQTemplate-CkSqDH4B.js";import{P as n}from"./PlainTextPrint-C08xhKA4.js";import{T as s}from"./TeacherSukantaHui-CyIG3xbg.js";import"./JavaCodeBlock-BwsLxS3r.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-CIaKtAt4.js";const a=`/**\r
 * Java Core Tutorial - Module 012_001: GoF Design Patterns\r
 * Topic 15: The Observer Pattern - Publish-Subscribe Notifications\r
 * Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
 */\r
\r
package com.coderaccotax.javatutorial.patterns;\r
\r
import java.util.ArrayList;\r
import java.util.List;\r
\r
public class ObserverPatternDemo {\r
\r
    // 1. Observer Interface:\r
    public interface ExamResultObserver {\r
        void onResultPublished(String studentName, double score, String center);\r
    }\r
\r
    // 2. Subject / Publisher:\r
    public static class ExamNotificationCenter {\r
        private final List<ExamResultObserver> observers = new ArrayList<>();\r
\r
        public void subscribe(ExamResultObserver observer) {\r
            observers.add(observer);\r
        }\r
\r
        public void unsubscribe(ExamResultObserver observer) {\r
            observers.remove(observer);\r
        }\r
\r
        public void publishResult(String studentName, double score, String center) {\r
            System.out.println(">>> [PUBLISHER]: Publishing Exam Result for " + studentName + " (Score: " + score + ")...");\r
            for (ExamResultObserver obs : observers) {\r
                obs.onResultPublished(studentName, score, center);\r
            }\r
            System.out.println();\r
        }\r
    }\r
\r
    public static void main(String[] args) {\r
        System.out.println("==========================================================================");\r
        System.out.println(" TOPIC 15: OBSERVER DESIGN PATTERN - BARRACKPORE ACADEMY");\r
        System.out.println("==========================================================================\\n");\r
\r
        ExamNotificationCenter publisher = new ExamNotificationCenter();\r
\r
        // Registering multiple independent subscribers:\r
        publisher.subscribe((name, score, center) ->\r
            System.out.println("   [SMS DISPATCHER]: SMS sent to " + name + " -> Score: " + score)\r
        );\r
\r
        publisher.subscribe((name, score, center) ->\r
            System.out.println("   [SCHOLARSHIP PORTAL]: Verified merit eligibility at " + center)\r
        );\r
\r
        publisher.publishResult("Swadeep Paul", 96.5, "Barrackpore");\r
\r
        System.out.println("==========================================================================");\r
    }\r
}\r
`,i=`================================================================================\r
JAVA CORE TUTORIAL - QUICK REVISION GUIDE\r
Module 012_001: GoF Design Patterns\r
Topic 15: Observer Pattern\r
Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
================================================================================\r
\r
1. INTENT:\r
   - Define a one-to-many dependency between objects so that when one object changes state,\r
     all its dependents are notified and updated automatically.\r
\r
2. REAL-WORLD ADOPTIONS:\r
   - Java Swing: 'button.addActionListener(e -> ...)'\r
   - Java Flow API (Reactive Streams)\r
   - Spring ApplicationEventPublisher\r
\r
================================================================================\r
Classroom Practice: Barrackpore Academy | Mentor: Sukanta Hui\r
================================================================================\r
`,o=[{question:"What is the primary architectural advantage of the Observer pattern?",shortAnswer:"It establishes loose coupling between the subject (publisher) and observers (subscribers); the subject only knows that observers implement the notification interface, allowing new subscribers to be added or removed dynamically without modifying the subject.",explanation:"Enables highly extensible event-driven systems.",hint:"Subject and observers are loosely coupled via interfaces.",level:"Beginner",codeExample:"subject.subscribe(event -> handle(event));"},{question:"What is the 'Memory Leak' hazard associated with the Observer pattern in Java?",shortAnswer:"The 'Lapsed Listener' problem: if subscribers register with a long-lived subject but forget to unsubscribe when done, the subject's listener collection holds strong references to them, preventing garbage collection and causing memory leaks.",explanation:"Can be mitigated using WeakReferences or explicit unregister lifecycles.",hint:"Subscribers not unsubscribed remain strongly referenced by the subject.",level:"Intermediate",codeExample:"Always call subject.unsubscribe(listener) when tearing down."}];function x(){return e.jsxs("div",{className:"space-y-12 px-4 md:px-8 py-8 text-slate-200 bg-slate-900 min-h-screen",children:[e.jsxs("header",{className:"space-y-4 border-b border-slate-800 pb-6",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"px-3 py-1 bg-sky-500/10 text-sky-400 border border-sky-500/20 text-xs font-semibold rounded-full uppercase tracking-wider",children:"Module 012_001 · Topic 15"}),e.jsx("span",{className:"px-3 py-1 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-xs font-semibold rounded-full",children:"GoF Design Patterns"})]}),e.jsxs("h1",{className:"text-3xl md:text-4xl font-extrabold text-white tracking-tight",children:["The Observer Pattern: ",e.jsx("code",{className:"text-emerald-400 font-mono",children:"Publish-Subscribe Notifications"})]}),e.jsx("p",{className:"text-base md:text-lg text-slate-400 leading-relaxed max-w-4xl",children:"Event-driven decoupling: building a one-to-many publisher-subscriber broadcast engine for UI listeners, broker events, and webhook dispatchers."})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsxs("h2",{className:"text-2xl font-bold text-emerald-400 flex items-center gap-2",children:[e.jsx("span",{children:"💻"})," Hands-On Java Demo Code"]}),e.jsx(r,{fileModule:a,title:"ObserverPatternDemo.java",highlightLines:[18,25,34,43]})]}),e.jsx("section",{className:"space-y-4",children:e.jsx(t,{title:"GoF Design Patterns FAQs",questions:o})}),e.jsx("section",{className:"space-y-4",children:e.jsx(n,{content:i,title:"Module 012_001 Topic 15: Observer Pattern",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Printable Note",downloadFileName:"012_001_topic15_observer_pattern_note.txt"})}),e.jsx(s,{note:"The Observer pattern is the heart of event-driven programming! When a student submits an exam, the Academy Exam Subject automatically notifies the SMS Service, the Email Service, and the Student Dashboard subscribers without knowing who they are! — Sukanta Hui"})]})}export{x as default};
