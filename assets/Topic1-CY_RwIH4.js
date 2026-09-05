import{j as e}from"./vendor-react-core-Doz9nIC6.js";import{J as t}from"./JavaFileLoader-BfBG3xz_.js";import{F as a}from"./FAQTemplate-BHhlgA96.js";import{P as n}from"./PlainTextPrint-C08xhKA4.js";import{T as o}from"./TeacherSukantaHui-DerPxfxp.js";import"./JavaCodeBlock-BwsLxS3r.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-CH1iX9C8.js";const r=`/**\r
 * Java Core Tutorial - Module 002_010: The Object Class: equals(), hashCode(), toString() & clone()\r
 * Topic 1: Survey of 11 Object Class Methods\r
 * Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
 */\r
\r
package com.coderaccotax.javatutorial.objectclass;\r
\r
public class ElevenObjectMethodsSurveyDemo {\r
\r
    public static void main(String[] args) {\r
        System.out.println("==========================================================================");\r
        System.out.println(" TOPIC 1: SURVEY OF THE 11 METHODS IN java.lang.Object - BARRACKPORE");\r
        System.out.println("==========================================================================\\n");\r
\r
        System.out.println(">>> The Complete 11 Universal Methods in java.lang.Object:");\r
        System.out.println("  1. public final Class<?> getClass()       -> Returns runtime class reflection metadata.");\r
        System.out.println("  2. public int hashCode()                  -> Returns memory hash integer for hash collections.");\r
        System.out.println("  3. public boolean equals(Object obj)      -> Tests logical equality (defaults to reference '==').");\r
        System.out.println("  4. protected Object clone()               -> Creates field-by-field copy (requires Cloneable).");\r
        System.out.println("  5. public String toString()               -> Returns human-readable string representation.");\r
        System.out.println("  6. public final void notify()             -> Wakes one waiting thread on object monitor.");\r
        System.out.println("  7. public final void notifyAll()          -> Wakes all waiting threads on object monitor.");\r
        System.out.println("  8. public final void wait()               -> Releases monitor & waits indefinitely.");\r
        System.out.println("  9. public final void wait(long timeout)   -> Releases monitor & waits up to millis.");\r
        System.out.println(" 10. public final void wait(long t, int n)  -> Releases monitor & waits up to nanos.");\r
        System.out.println(" 11. protected void finalize()              -> Deprecated legacy GC cleanup hook.");\r
\r
        System.out.println("\\n==========================================================================");\r
    }\r
}`,s=`================================================================================\r
JAVA CORE TUTORIAL - QUICK REVISION GUIDE\r
Module 002_010: The Object Class & Core Contracts\r
Topic 1: 11 Object Methods Survey\r
Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
================================================================================\r
\r
1. THE 11 OBJECT METHODS:\r
   - Overridable     : toString(), equals(), hashCode(), clone(), finalize().\r
   - Final (Locked)  : getClass(), notify(), notifyAll(), wait() (3 overloads).\r
\r
================================================================================\r
Classroom Practice: Barrackpore Academy | Mentor: Sukanta Hui\r
================================================================================`,i=[{question:"How many total methods are declared in 'java.lang.Object' and what are their primary categories?",shortAnswer:"Exactly 11 methods: 1. Identity & State: toString(), equals(), hashCode(), getClass(), clone(). 2. Thread Concurrency: wait() (3 overloads), notify(), notifyAll(). 3. Garbage Collection: finalize() (deprecated).",explanation:"Notice that wait, notify, notifyAll, and getClass are 'final' and cannot be overridden.",hint:"11 methods split into identity/comparison, thread concurrency, and GC finalization.",level:"Intermediate",codeExample:"// 5 Overridable methods: toString, equals, hashCode, clone, finalize"}];function b(){return e.jsxs("div",{className:"space-y-12 px-4 md:px-8 py-8 text-slate-200 bg-slate-900 min-h-screen",children:[e.jsx("style",{children:`
          @keyframes fadeIn {
            from { opacity: 0; transform: translateY(8px); }
            to { opacity: 1; transform: translateY(0); }
          }
          .animate-fade-in { animation: fadeIn 0.5s ease-out forwards; }
        `}),e.jsxs("header",{className:"space-y-4 border-b border-slate-800 pb-6 animate-fade-in",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"px-3 py-1 bg-sky-500/10 text-sky-400 border border-sky-500/20 text-xs font-semibold rounded-full uppercase tracking-wider",children:"Module 002_010 · Topic 1"}),e.jsx("span",{className:"px-3 py-1 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-xs font-semibold rounded-full",children:"Complete API Catalog"})]}),e.jsxs("h1",{className:"text-xl sm:text-2xl md:text-3xl font-bold text-white tracking-tight",children:["Survey of the 11 Methods in ",e.jsx("code",{className:"text-emerald-400 font-mono",children:"java.lang.Object"})]}),e.jsx("p",{className:"text-base md:text-lg text-slate-400 leading-relaxed max-w-4xl",children:"Master the complete catalog of all 11 universal Object methods: categorization into state identity, thread synchronization monitors, and lifecycle cleanups."})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsxs("h2",{className:"text-2xl font-bold text-emerald-400 flex items-center gap-2",children:[e.jsx("span",{children:"💻"})," Hands-On Java Demo Code"]}),e.jsx(t,{fileModule:r,title:"ElevenObjectMethodsSurveyDemo.java",highlightLines:[13,14,15,16,17,18,19,20]})]}),e.jsx("section",{className:"space-y-4",children:e.jsx(a,{title:"11 Object Methods FAQs",questions:i})}),e.jsx("section",{className:"space-y-4",children:e.jsx(n,{content:s,title:"Module 002_010 Topic 1: 11 Object Methods Survey",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Printable Note",downloadFileName:"002_010_topic1_survey_11_methods_note.txt"})}),e.jsx(o,{note:"Notice that 6 of these methods are final (getClass, wait, notify) so no subclass can break JVM internals, while 5 are customizable (toString, equals, hashCode, clone, finalize). — Sukanta Hui"})]})}export{b as default};
