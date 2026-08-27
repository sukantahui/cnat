import{j as t}from"./vendor-react-core-Doz9nIC6.js";import{J as e}from"./JavaFileLoader-BfBG3xz_.js";import{F as i}from"./FAQTemplate-CkSqDH4B.js";import{P as a}from"./PlainTextPrint-C08xhKA4.js";import{T as n}from"./TeacherSukantaHui-CyIG3xbg.js";import"./JavaCodeBlock-BwsLxS3r.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-CIaKtAt4.js";const r=`/**\r
 * Java Core Tutorial - Module 010_003: JVM Architecture, ClassLoaders & Bytecode Execution\r
 * Topic 7: Phase 3 - Initialization (<clinit>) & Static Execution Order\r
 * Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
 */\r
\r
package com.coderaccotax.javatutorial.jvm;\r
\r
public class Phase3ClassInitializationDemo {\r
\r
    public static class AcademyBatchTracker {\r
        // Step 1: Static field assignment\r
        public static String campus = initializeCampus();\r
\r
        // Step 2: Static Initializer Block (SIB)\r
        static {\r
            System.out.println("   ⚙️ [SIB 1 EXECUTING]: Configuring Barrackpore Lab workstations...");\r
            labCapacity = 50;\r
        }\r
\r
        public static int labCapacity;\r
\r
        // Step 3: Second SIB\r
        static {\r
            System.out.println("   ⚙️ [SIB 2 EXECUTING]: Capacity set to: " + labCapacity + " workstations.");\r
        }\r
\r
        private static String initializeCampus() {\r
            System.out.println("   ⚙️ [STATIC FIELD INIT]: Campus assigned to Barrackpore.");\r
            return "Barrackpore Main Hub";\r
        }\r
    }\r
\r
    public static void main(String[] args) {\r
        System.out.println("==========================================================================");\r
        System.out.println(" TOPIC 7: PHASE 3 - INITIALIZATION (<clinit>) - BARRACKPORE");\r
        System.out.println("==========================================================================\\n");\r
\r
        System.out.println(">>> 1. TRIGGERING INITIALIZATION OF AcademyBatchTracker:");\r
        // First active use triggers execution of the synthesized <clinit>() method:\r
        System.out.println("Final Campus Name: " + AcademyBatchTracker.campus);\r
\r
        System.out.println("\\n>>> THE <clinit>() CONTRACT:");\r
        System.out.println("  1. Synthesized automatically by javac combining all static initializers in source order.");\r
        System.out.println("  2. The JVM acquires an internal initialization lock guaranteeing thread safety.");\r
        System.out.println("  3. Guaranteed to execute at most once per ClassLoader lifetime.");\r
        System.out.println("==========================================================================");\r
    }\r
}\r
`,s=`================================================================================\r
JAVA CORE TUTORIAL - QUICK REVISION GUIDE\r
Module 010_003: JVM Architecture, ClassLoaders & Bytecode Execution\r
Topic 7: Phase 3 (Class Initialization)\r
Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
================================================================================\r
\r
1. WHAT IS <clinit>():\r
   - The Class Initializer method synthesized by 'javac'.\r
   - Combines all static variable initializers and 'static { ... }' blocks in the order\r
     they appear textually in the source code.\r
\r
2. THREAD SAFETY GUARANTEE:\r
   - The JVM uses an internal class initialization lock to ensure that '<clinit>()' is executed\r
     by exactly one thread while other concurrent threads block and wait.\r
   - This provides the foundation for the thread-safe Bill Pugh Singleton Design Pattern!\r
\r
================================================================================\r
Classroom Practice: Barrackpore Academy | Mentor: Sukanta Hui\r
================================================================================\r
`,o=[{question:"How does the JVM guarantee thread safety during class initialization (<clinit>)?",shortAnswer:"The JVM maintains an internal initialization lock on the Class object. When multiple threads concurrently attempt to initialize a class for the first time, only one thread executes <clinit>() while all other threads block until initialization finishes.",explanation:"This is why the Initialization-on-demand holder (Bill Pugh Singleton) idiom is completely thread-safe without explicit synchronization.",hint:"Uses an internal JVM class initialization lock.",level:"Advanced",codeExample:"private static class Holder { static final Singleton INSTANCE = new Singleton(); }"},{question:"In what order are static fields and static initializer blocks executed inside <clinit>()?",shortAnswer:"In the exact textual order in which they appear in the source code from top to bottom.",explanation:"Top-to-bottom order determines initialization precedence.",hint:"In source code declaration order from top to bottom.",level:"Beginner",codeExample:"static int a = 1; static { a = 2; } // a becomes 2"}];function y(){return t.jsxs("div",{className:"space-y-12 px-4 md:px-8 py-8 text-slate-200 bg-slate-900 min-h-screen",children:[t.jsxs("header",{className:"space-y-4 border-b border-slate-800 pb-6",children:[t.jsxs("div",{className:"flex items-center gap-3",children:[t.jsx("span",{className:"px-3 py-1 bg-sky-500/10 text-sky-400 border border-sky-500/20 text-xs font-semibold rounded-full uppercase tracking-wider",children:"Module 010_003 · Topic 7"}),t.jsx("span",{className:"px-3 py-1 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-xs font-semibold rounded-full",children:"JVM & ClassLoaders"})]}),t.jsxs("h1",{className:"text-3xl md:text-4xl font-extrabold text-white tracking-tight",children:["Phase 3: ",t.jsx("code",{className:"text-emerald-400 font-mono",children:"Initialization (<clinit>)"}),": Executing SIBs & Static Fields"]}),t.jsx("p",{className:"text-base md:text-lg text-slate-400 leading-relaxed max-w-4xl",children:"Bringing the class alive: the compiler-generated <clinit> method, thread-safe class initialization, and static execution order."})]}),t.jsxs("section",{className:"space-y-4",children:[t.jsxs("h2",{className:"text-2xl font-bold text-emerald-400 flex items-center gap-2",children:[t.jsx("span",{children:"💻"})," Hands-On Java Demo Code"]}),t.jsx(e,{fileModule:r,title:"Phase3ClassInitializationDemo.java",highlightLines:[18,25,34,43]})]}),t.jsx("section",{className:"space-y-4",children:t.jsx(i,{title:"JVM Architecture & ClassLoaders FAQs",questions:o})}),t.jsx("section",{className:"space-y-4",children:t.jsx(a,{content:s,title:"Module 010_003 Topic 7: Phase 3: Class Initialization",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Printable Note",downloadFileName:"010_003_topic7_phase3_class_initialization_note.txt"})}),t.jsx(n,{note:"The compiler collects all static variable assignments and static initializer blocks into a single hidden method called <clinit>()! The JVM guarantees that <clinit>() is thread-safe and runs only ONCE! — Sukanta Hui"})]})}export{y as default};
