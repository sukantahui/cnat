import{j as e}from"./vendor-react-core-Doz9nIC6.js";import{J as t}from"./JavaFileLoader-BfBG3xz_.js";import{F as a}from"./FAQTemplate-CkSqDH4B.js";import{P as n}from"./PlainTextPrint-C08xhKA4.js";import{T as r}from"./TeacherSukantaHui-CyIG3xbg.js";import"./JavaCodeBlock-BwsLxS3r.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-CIaKtAt4.js";const s=`/**\r
 * Java Core Tutorial - Module 002_004: Static Variables, Methods, Blocks & Singleton\r
 * Topic 1: Static Variables (Class Variables): Single Shared Copy in Metaspace\r
 * Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
 */\r
\r
package com.coderaccotax.javatutorial.statics;\r
\r
public class StaticVariablesSharedMemoryDemo {\r
\r
    public static class EnrollmentTracker {\r
        // STATIC COUNTER: Incremented on every object instantiation\r
        public static int totalEnrolledStudents = 0;\r
\r
        private int studentId;\r
        private String studentName;\r
\r
        public EnrollmentTracker(String studentName) {\r
            // Static variable is shared; modifying it impacts the global counter\r
            totalEnrolledStudents++;\r
            this.studentId = totalEnrolledStudents;\r
            this.studentName = studentName;\r
        }\r
\r
        public void printStatus() {\r
            System.out.printf("  -> Student: %-15s | ID: %-4d | Global Count: %d\\n",\r
                    studentName, studentId, totalEnrolledStudents);\r
        }\r
    }\r
\r
    public static void main(String[] args) {\r
        System.out.println("==========================================================================");\r
        System.out.println(" TOPIC 1: STATIC VARIABLES SHARED MEMORY - BARRACKPORE");\r
        System.out.println("==========================================================================\\n");\r
\r
        System.out.println(">>> Enrolling students sequentially:");\r
        EnrollmentTracker s1 = new EnrollmentTracker("Swadeep Paul");\r
        s1.printStatus();\r
\r
        EnrollmentTracker s2 = new EnrollmentTracker("Tuhina Das");\r
        s2.printStatus();\r
\r
        EnrollmentTracker s3 = new EnrollmentTracker("Debangshu Mukherjee");\r
        s3.printStatus();\r
\r
        System.out.println("\\n>>> Final Total Count via ClassName: " + EnrollmentTracker.totalEnrolledStudents);\r
\r
        System.out.println("\\n==========================================================================");\r
    }\r
}`,i=`================================================================================\r
JAVA CORE TUTORIAL - QUICK REVISION GUIDE\r
Module 002_004: Static Variables, Methods, Blocks & The Singleton Pattern\r
Topic 1: Static Variables (Class Variables)\r
Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
================================================================================\r
\r
1. STATIC VARIABLE MECHANICS:\r
   - Declared with 'static' modifier at class level.\r
   - Initialized when class is loaded by JVM ClassLoader.\r
   - Ideal for global counters, shared configuration, and constants (static final).\r
\r
================================================================================\r
Classroom Practice: Barrackpore Academy | Mentor: Sukanta Hui\r
================================================================================`,l=[{question:"Where are static variables stored in modern Java memory (Java 8+)?",shortAnswer:"In the Metaspace (specifically in the Class mirror object on the Heap in modern JVMs), allocated once when the class is loaded.",explanation:"In Java 8+, permanent generation was replaced by native Metaspace, and static variables reside within the java.lang.Class instance.",hint:"Class object in Metaspace/Heap, allocated once upon class loading.",level:"Intermediate",codeExample:"public static int count = 0;"}];function h(){return e.jsxs("div",{className:"space-y-12 px-4 md:px-8 py-8 text-slate-200 bg-slate-900 min-h-screen",children:[e.jsx("style",{children:`
          @keyframes fadeIn {
            from { opacity: 0; transform: translateY(8px); }
            to { opacity: 1; transform: translateY(0); }
          }
          .animate-fade-in { animation: fadeIn 0.5s ease-out forwards; }
        `}),e.jsxs("header",{className:"space-y-4 border-b border-slate-800 pb-6 animate-fade-in",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"px-3 py-1 bg-sky-500/10 text-sky-400 border border-sky-500/20 text-xs font-semibold rounded-full uppercase tracking-wider",children:"Module 002_004 · Topic 1"}),e.jsx("span",{className:"px-3 py-1 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-xs font-semibold rounded-full",children:"Shared State"})]}),e.jsx("h1",{className:"text-3xl md:text-4xl font-extrabold text-white tracking-tight",children:"Static Variables (Class Variables): Single Shared Copy in Metaspace"}),e.jsx("p",{className:"text-base md:text-lg text-slate-400 leading-relaxed max-w-4xl",children:"Learn how static class variables provide a single source of truth across all instances, perfect for global sequence generators and institutional telemetry."})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsxs("h2",{className:"text-2xl font-bold text-emerald-400 flex items-center gap-2",children:[e.jsx("span",{children:"💻"})," Hands-On Java Demo Code"]}),e.jsx(t,{fileModule:s,title:"StaticVariablesSharedMemoryDemo.java",highlightLines:[12,18,19,39]})]}),e.jsx("section",{className:"space-y-4",children:e.jsx(a,{title:"Static Variables FAQs",questions:l})}),e.jsx("section",{className:"space-y-4",children:e.jsx(n,{content:i,title:"Module 002_004 Topic 1: Static Variables",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Printable Note",downloadFileName:"002_004_topic1_static_variables_note.txt"})}),e.jsx(r,{note:"If every student object needs its own value, make it an instance variable. If all students share the exact same counter, make it static! — Sukanta Hui"})]})}export{h as default};
