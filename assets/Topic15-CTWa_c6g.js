import{j as e}from"./vendor-react-core-Doz9nIC6.js";import{J as n}from"./JavaFileLoader-BfBG3xz_.js";import{F as t}from"./FAQTemplate-CkSqDH4B.js";import{P as r}from"./PlainTextPrint-C08xhKA4.js";import{T as o}from"./TeacherSukantaHui-CC0AKmkm.js";import"./JavaCodeBlock-BwsLxS3r.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-BtJHuk7w.js";const a=`/**\r
 * Java Core Tutorial - Module 002_010: The Object Class: equals(), hashCode(), toString() & clone()\r
 * Topic 15: Why Copy Constructors & Static Factory Methods Are Preferred Over clone()\r
 * Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
 */\r
\r
package com.coderaccotax.javatutorial.objectclass;\r
\r
public class CopyConstructorVsCloneDemo {\r
\r
    public static class TraineeBadge {\r
        private final int badgeId;\r
        private final String studentName;\r
\r
        // 1. Primary Constructor\r
        public TraineeBadge(int id, String name) {\r
            this.badgeId = id;\r
            this.studentName = name;\r
        }\r
\r
        // 2. COPY CONSTRUCTOR (Effective Java Item 13 Recommendation):\r
        // No Cloneable interface, no checked exceptions, no casting, supports final fields!\r
        public TraineeBadge(TraineeBadge other) {\r
            this.badgeId = other.badgeId;\r
            this.studentName = other.studentName;\r
        }\r
\r
        // 3. STATIC FACTORY COPY METHOD:\r
        public static TraineeBadge newInstance(TraineeBadge other) {\r
            return new TraineeBadge(other.badgeId, other.studentName);\r
        }\r
\r
        public void printInfo() {\r
            System.out.printf("  [BADGE] ID: %d | Name: %s\\n", badgeId, studentName);\r
        }\r
    }\r
\r
    public static void main(String[] args) {\r
        System.out.println("==========================================================================");\r
        System.out.println(" TOPIC 15: COPY CONSTRUCTORS VS clone() - BARRACKPORE");\r
        System.out.println("==========================================================================\\n");\r
\r
        TraineeBadge original = new TraineeBadge(101, "Swadeep Paul");\r
\r
        // Using Copy Constructor:\r
        TraineeBadge copy1 = new TraineeBadge(original);\r
\r
        // Using Static Factory Method:\r
        TraineeBadge copy2 = TraineeBadge.newInstance(original);\r
\r
        System.out.println(">>> 1. Original:");\r
        original.printInfo();\r
\r
        System.out.println("\\n>>> 2. Cloned via Copy Constructor:");\r
        copy1.printInfo();\r
\r
        System.out.println("\\n>>> 3. Cloned via Static Factory Copy:");\r
        copy2.printInfo();\r
\r
        System.out.println("\\n>>> Why Copy Constructors Win (Joshua Bloch):");\r
        System.out.println("  ✔ They do not bypass object construction.");\r
        System.out.println("  ✔ They work seamlessly with 'final' fields (clone() cannot modify final fields!).");\r
        System.out.println("  ✔ Zero checked exceptions ('CloneNotSupportedException') or typecasting required.");\r
\r
        System.out.println("\\n==========================================================================");\r
    }\r
}`,s=`================================================================================\r
JAVA CORE TUTORIAL - QUICK REVISION GUIDE\r
Module 002_010: The Object Class & Core Contracts\r
Topic 15: Copy Constructors vs clone()\r
Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
================================================================================\r
\r
1. COPY CONSTRUCTOR ADVANTAGES:\r
   - 'public MyClass(MyClass original) { ... }'\r
   - Works cleanly with 'final' instance variables.\r
   - No exception handling or unchecked downcasts.\r
   - Clean, explicit object creation.\r
\r
================================================================================\r
Classroom Practice: Barrackpore Academy | Mentor: Sukanta Hui\r
================================================================================`,i=[{question:"Why do Joshua Bloch (Effective Java) and modern Java standards prefer Copy Constructors over 'Object.clone()'?",shortAnswer:"1. No Cloneable or CloneNotSupportedException boilerplate. 2. Fully supports 'final' fields (which clone() cannot modify). 3. Invokes real constructors rather than bypassing constructor lifecycle. 4. Allows copying across subtype interfaces.",explanation:"Object.clone() is widely considered one of Java's most flawed legacy designs.",hint:"Avoids clone boilerplate, supports final fields, and invokes regular constructors safely.",level:"Advanced",codeExample:"public MyClass(MyClass other) { this.f = other.f; }"}];function f(){return e.jsxs("div",{className:"space-y-12 px-4 md:px-8 py-8 text-slate-200 bg-slate-900 min-h-screen",children:[e.jsx("style",{children:`
          @keyframes fadeIn {
            from { opacity: 0; transform: translateY(8px); }
            to { opacity: 1; transform: translateY(0); }
          }
          .animate-fade-in { animation: fadeIn 0.5s ease-out forwards; }
        `}),e.jsxs("header",{className:"space-y-4 border-b border-slate-800 pb-6 animate-fade-in",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"px-3 py-1 bg-sky-500/10 text-sky-400 border border-sky-500/20 text-xs font-semibold rounded-full uppercase tracking-wider",children:"Module 002_010 · Topic 15"}),e.jsx("span",{className:"px-3 py-1 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-xs font-semibold rounded-full",children:"Modern Best Practice"})]}),e.jsxs("h1",{className:"text-3xl md:text-4xl font-extrabold text-white tracking-tight",children:["Why Copy Constructors & Static Factory Methods Are Preferred Over ",e.jsx("code",{className:"text-emerald-400 font-mono",children:"clone()"})]}),e.jsxs("p",{className:"text-base md:text-lg text-slate-400 leading-relaxed max-w-4xl",children:["Learn why Effective Java Item 13 advises replacing ",e.jsx("code",{className:"text-rose-400 font-mono",children:"clone()"})," with Copy Constructors: supporting ",e.jsx("code",{className:"text-emerald-300 font-mono",children:"final"})," fields and avoiding exception boilerplate."]})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsxs("h2",{className:"text-2xl font-bold text-emerald-400 flex items-center gap-2",children:[e.jsx("span",{children:"💻"})," Hands-On Java Demo Code"]}),e.jsx(n,{fileModule:a,title:"CopyConstructorVsCloneDemo.java",highlightLines:[19,20,25,37,40]})]}),e.jsx("section",{className:"space-y-4",children:e.jsx(t,{title:"Copy Constructors FAQs",questions:i})}),e.jsx("section",{className:"space-y-4",children:e.jsx(r,{content:s,title:"Module 002_010 Topic 15: Copy Constructors",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Printable Note",downloadFileName:"002_010_topic15_copy_constructors_note.txt"})}),e.jsx(o,{note:"In professional Java projects, almost nobody uses clone() anymore! Write a copy constructor 'public Student(Student other)' instead. It's 100x cleaner and works with final fields! — Sukanta Hui"})]})}export{f as default};
