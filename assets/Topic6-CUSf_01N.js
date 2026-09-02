import{j as e}from"./vendor-react-core-Doz9nIC6.js";import{J as t}from"./JavaFileLoader-BfBG3xz_.js";import{F as a}from"./FAQTemplate-BHhlgA96.js";import{P as n}from"./PlainTextPrint-C08xhKA4.js";import{T as o}from"./TeacherSukantaHui-RpFLNJ5A.js";import"./JavaCodeBlock-BwsLxS3r.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-wprqVFW_.js";const r=`/**\r
 * Java Core Tutorial - Module 010_007: JIT Compiler, HotSpot Optimizations & GraalVM\r
 * Topic 6: Escape Analysis - Determining Object Confinement (JEP 106)\r
 * Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
 */\r
\r
package com.coderaccotax.javatutorial.jit;\r
\r
public class EscapeAnalysisJep106Demo {\r
\r
    public record LocalCoordinate(int x, int y) {}\r
\r
    // 1. NO ESCAPE: Object is created and discarded entirely within this method\r
    public static int calculateDistanceNoEscape(int a, int b) {\r
        LocalCoordinate point = new LocalCoordinate(a, b); // NEVER escapes this method!\r
        return point.x() + point.y();\r
    }\r
\r
    // 2. ARGUMENT ESCAPE (ArgEscape): Passed as parameter to another method\r
    public static void processEscape(LocalCoordinate point) {\r
        System.out.println("Point received: " + point);\r
    }\r
\r
    // 3. GLOBAL ESCAPE: Assigned to static field or returned to caller\r
    public static LocalCoordinate GLOBAL_POINT;\r
    public static void makeGlobalEscape(int a, int b) {\r
        GLOBAL_POINT = new LocalCoordinate(a, b); // Escapes globally to Metaspace GC Root!\r
    }\r
\r
    public static void main(String[] args) {\r
        System.out.println("==========================================================================");\r
        System.out.println(" TOPIC 6: ESCAPE ANALYSIS (JEP 106) - BARRACKPORE ACADEMY");\r
        System.out.println("==========================================================================\\n");\r
\r
        System.out.println(">>> THE 3 ESCAPE STATES OF AN OBJECT:");\r
        System.out.println("  1. NoEscape     : Confined strictly within current method. Candidate for SCALAR REPLACEMENT!");\r
        System.out.println("  2. ArgEscape    : Escapes into another method as argument, but does not outlive thread.");\r
        System.out.println("  3. GlobalEscape : Escapes method/thread (returned, stored in field/collection, or published).\\n");\r
\r
        int dist = calculateDistanceNoEscape(10, 20);\r
        System.out.println(">>> NoEscape Calculation Output: " + dist);\r
\r
        System.out.println("\\n>>> ESCAPE ANALYSIS JVM FLAGS:");\r
        System.out.println("  - Enabled by Default : -XX:+DoEscapeAnalysis");\r
        System.out.println("==========================================================================");\r
    }\r
}\r
`,s=`================================================================================\r
JAVA CORE TUTORIAL - QUICK REVISION GUIDE\r
Module 010_007: JIT Compiler, HotSpot Optimizations & GraalVM\r
Topic 6: Escape Analysis (JEP 106)\r
Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
================================================================================\r
\r
1. WHAT IS ESCAPE ANALYSIS:\r
   - A static global analysis technique by which the C2/Graal compiler analyzes the scope\r
     of a new object's reference throughout the execution graph.\r
\r
2. THE 3 CLASSIFICATIONS:\r
   - 'NoEscape'     : Object cannot be observed outside the allocating method.\r
   - 'ArgEscape'    : Object is passed to other methods, but does not escape the current thread.\r
   - 'GlobalEscape' : Object is accessible by other threads or stored in heap/static fields.\r
\r
3. OPTIMIZATIONS ENABLED BY 'NoEscape':\r
   - 1. Scalar Replacement (Stack/Register allocation).\r
   - 2. Lock Elision (removes synchronized monitors).\r
\r
================================================================================\r
Classroom Practice: Barrackpore Academy | Mentor: Sukanta Hui\r
================================================================================\r
`,i=[{question:"What are the three escape states identified by Java's Escape Analysis?",shortAnswer:"1. NoEscape (confined strictly to the allocating method), 2. ArgEscape (passed as parameter but does not escape thread), and 3. GlobalEscape (accessible to other threads or returned to caller).",explanation:"Determines eligibility for scalar replacement and lock elision.",hint:"NoEscape, ArgEscape, and GlobalEscape.",level:"Intermediate",codeExample:"NoEscape → Candidate for zero-heap stack allocation."},{question:"What major optimizations does the JIT compiler apply when an object is determined to be NoEscape?",shortAnswer:"Scalar Replacement (deconstructing the object into primitive local variables on stack/registers) and Lock Elision (eliminating synchronized synchronization blocks).",explanation:"Eliminates GC pressure and synchronization overhead entirely.",hint:"Scalar Replacement and Lock Elision.",level:"Intermediate",codeExample:"NoEscape → Scalar Replacement + Lock Elision"}];function b(){return e.jsxs("div",{className:"space-y-12 px-4 md:px-8 py-8 text-slate-200 bg-slate-900 min-h-screen",children:[e.jsxs("header",{className:"space-y-4 border-b border-slate-800 pb-6",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"px-3 py-1 bg-sky-500/10 text-sky-400 border border-sky-500/20 text-xs font-semibold rounded-full uppercase tracking-wider",children:"Module 010_007 · Topic 6"}),e.jsx("span",{className:"px-3 py-1 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-xs font-semibold rounded-full",children:"JIT Compiler & GraalVM"})]}),e.jsxs("h1",{className:"text-xl sm:text-2xl md:text-3xl font-bold text-white tracking-tight",children:["Escape Analysis: ",e.jsx("code",{className:"text-emerald-400 font-mono",children:"Determining Object Confinement (JEP 106)"})]}),e.jsx("p",{className:"text-base md:text-lg text-slate-400 leading-relaxed max-w-4xl",children:"Tracking reference lifecycles: GlobalEscape, ArgEscape, and NoEscape states that allow the JVM to avoid heap allocation entirely."})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsxs("h2",{className:"text-2xl font-bold text-emerald-400 flex items-center gap-2",children:[e.jsx("span",{children:"💻"})," Hands-On Java Demo Code"]}),e.jsx(t,{fileModule:r,title:"EscapeAnalysisJep106Demo.java",highlightLines:[18,25,34,43]})]}),e.jsx("section",{className:"space-y-4",children:e.jsx(a,{title:"JIT Compiler & GraalVM FAQs",questions:i})}),e.jsx("section",{className:"space-y-4",children:e.jsx(n,{content:s,title:"Module 010_007 Topic 6: Escape Analysis (JEP 106)",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Printable Note",downloadFileName:"010_007_topic6_escape_analysis_jep106_note.txt"})}),e.jsx(o,{note:"Escape Analysis checks: Does this object escape outside the current method? If you create new Point(x, y) and only use it inside the method, it NEVER ESCAPES! That means it does not need to go to the Java Heap! — Sukanta Hui"})]})}export{b as default};
