import{j as e}from"./vendor-react-core-Doz9nIC6.js";import{J as t}from"./JavaFileLoader-BfBG3xz_.js";import{F as a}from"./FAQTemplate-BHhlgA96.js";import{P as n}from"./PlainTextPrint-C08xhKA4.js";import{T as i}from"./TeacherSukantaHui-DDN87fI5.js";import"./JavaCodeBlock-BwsLxS3r.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-DEsnU7fn.js";const r=`/**\r
 * Java Core Tutorial - Module 010_003: JVM Architecture, ClassLoaders & Bytecode Execution\r
 * Topic 5: Linking Step 2 - Preparation & Memory Allocations\r
 * Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
 */\r
\r
package com.coderaccotax.javatutorial.jvm;\r
\r
public class LinkingPreparationDemo {\r
\r
    // Demonstrating the difference between Preparation and Initialization:\r
    public static class PreparationInspector {\r
        // Step 2 (Preparation)   : enrolledCount = 0 (Default primitive value)\r
        // Step 3 (Initialization): enrolledCount = 250 (Explicit code assignment)\r
        public static int enrolledCount = 250;\r
\r
        // Step 2 (Preparation)   : isOnlineActive = false\r
        // Step 3 (Initialization): isOnlineActive = true\r
        public static boolean isOnlineActive = true;\r
\r
        // Step 2 (Preparation)   : centerName = null\r
        // Step 3 (Initialization): centerName = "Barrackpore Campus"\r
        public static String centerName = "Barrackpore Campus";\r
\r
        // EXCEPTION: ConstantValue attribute in Constant Pool:\r
        // 'static final' compile-time constants are initialized in Preparation directly!\r
        public static final int MAX_STUDENTS_PER_BATCH = 30;\r
    }\r
\r
    public static void main(String[] args) {\r
        System.out.println("==========================================================================");\r
        System.out.println(" TOPIC 5: LINKING STEP 2 - PREPARATION - BARRACKPORE ACADEMY");\r
        System.out.println("==========================================================================\\n");\r
\r
        System.out.println(">>> DEFAULT VALUES ASSIGNED DURING PREPARATION:");\r
        System.out.println("  - byte / short / int / long : 0 / 0L");\r
        System.out.println("  - float / double            : 0.0f / 0.0d");\r
        System.out.println("  - char                      : '\\u0000'");\r
        System.out.println("  - boolean                   : false");\r
        System.out.println("  - Any Object Reference      : null\\n");\r
\r
        System.out.println(">>> COMPILE-TIME CONSTANTS (static final primitives/strings):");\r
        System.out.println("  - Constant: " + PreparationInspector.MAX_STUDENTS_PER_BATCH + " (Assigned in Preparation via ConstantValue!)");\r
\r
        System.out.println("\\n==========================================================================");\r
    }\r
}\r
`,s=`================================================================================\r
JAVA CORE TUTORIAL - QUICK REVISION GUIDE\r
Module 010_003: JVM Architecture, ClassLoaders & Bytecode Execution\r
Topic 5: Linking Step 2 (Preparation)\r
Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
================================================================================\r
\r
1. WHAT OCCURS IN PREPARATION:\r
   - JVM allocates memory in Metaspace/Heap for static variables (class variables).\r
   - Sets each variable to the default initial value of its datatype (0, false, null).\r
   - No user code or expressions are executed yet.\r
\r
2. SPECIAL CASE - 'ConstantValue' ATTRIBUTE:\r
   - If a field is 'static final' with a compile-time constant expression, the compiler\r
     attaches a 'ConstantValue' attribute.\r
   - The JVM assigns the real value during Preparation rather than waiting for Initialization!\r
\r
================================================================================\r
Classroom Practice: Barrackpore Academy | Mentor: Sukanta Hui\r
================================================================================\r
`,o=[{question:"When is the value 100 assigned to 'public static final int MAX = 100;' versus 'public static int count = 100;'?",shortAnswer:"'public static final int MAX = 100;' is assigned during the Preparation phase via the ConstantValue attribute. In contrast, 'public static int count = 100;' is set to 0 in Preparation and assigned 100 later during the Initialization phase (<clinit>).",explanation:"Compile-time constants bypass <clinit> initialization.",hint:"Constants assigned in Preparation; non-constants assigned in Initialization.",level:"Intermediate",codeExample:"final constant → Preparation; non-final static → Initialization"},{question:"Where are static variables allocated in modern HotSpot JVMs?",shortAnswer:"In modern HotSpot JVMs (Java 8+), class metadata resides in native Metaspace, but static field reference variables are allocated directly on the Java Heap as part of the companion java.lang.Class instance.",explanation:"Allows garbage collection of static objects when classes unload.",hint:"Allocated on the Java Heap as part of the Class mirror object.",level:"Advanced",codeExample:"Static fields live on the Java Heap alongside the Class object."}];function b(){return e.jsxs("div",{className:"space-y-12 px-4 md:px-8 py-8 text-slate-200 bg-slate-900 min-h-screen",children:[e.jsxs("header",{className:"space-y-4 border-b border-slate-800 pb-6",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"px-3 py-1 bg-sky-500/10 text-sky-400 border border-sky-500/20 text-xs font-semibold rounded-full uppercase tracking-wider",children:"Module 010_003 · Topic 5"}),e.jsx("span",{className:"px-3 py-1 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-xs font-semibold rounded-full",children:"JVM & ClassLoaders"})]}),e.jsxs("h1",{className:"text-xl sm:text-2xl md:text-3xl font-bold text-white tracking-tight",children:["Linking Step 2: ",e.jsx("code",{className:"text-emerald-400 font-mono",children:"Preparation & Default Allocations"})]}),e.jsx("p",{className:"text-base md:text-lg text-slate-400 leading-relaxed max-w-4xl",children:"Allocating class variables: assigning default zeroes and nulls to static fields in Metaspace before code-level initialization."})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsxs("h2",{className:"text-2xl font-bold text-emerald-400 flex items-center gap-2",children:[e.jsx("span",{children:"💻"})," Hands-On Java Demo Code"]}),e.jsx(t,{fileModule:r,title:"LinkingPreparationDemo.java",highlightLines:[18,25,34,43]})]}),e.jsx("section",{className:"space-y-4",children:e.jsx(a,{title:"JVM Architecture & ClassLoaders FAQs",questions:o})}),e.jsx("section",{className:"space-y-4",children:e.jsx(n,{content:s,title:"Module 010_003 Topic 5: Linking: Preparation",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Printable Note",downloadFileName:"010_003_topic5_linking_preparation_note.txt"})}),e.jsx(i,{note:"During Preparation, static memory is allocated and filled with binary zeroes: ints become 0, booleans become false, and objects become null! The actual values you wrote in code are assigned later in Initialization! — Sukanta Hui"})]})}export{b as default};
