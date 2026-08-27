import{j as e}from"./vendor-react-core-Doz9nIC6.js";import{J as t}from"./JavaFileLoader-BfBG3xz_.js";import{F as r}from"./FAQTemplate-CkSqDH4B.js";import{P as a}from"./PlainTextPrint-C08xhKA4.js";import{T as n}from"./TeacherSukantaHui-CC0AKmkm.js";import"./JavaCodeBlock-BwsLxS3r.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-BtJHuk7w.js";const s=`/**\r
 * Java Core Tutorial - Module 002_010: The Object Class: equals(), hashCode(), toString() & clone()\r
 * Topic 5: Writing a Bulletproof equals() Method Step-by-Step\r
 * Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
 */\r
\r
package com.coderaccotax.javatutorial.objectclass;\r
\r
import java.util.Objects;\r
\r
public class BulletproofEqualsStepByStepDemo {\r
\r
    public static class TraineeRecord {\r
        private final int rollNumber;\r
        private final String fullName;\r
        private final double gpaScore;\r
\r
        public TraineeRecord(int roll, String name, double gpa) {\r
            this.rollNumber = roll;\r
            this.fullName = name;\r
            this.gpaScore = gpa;\r
        }\r
\r
        // ====================================================================\r
        // THE 4-STEP BULLETPROOF equals() TEMPLATE:\r
        // ====================================================================\r
        @Override\r
        public boolean equals(Object obj) {\r
            // STEP 1: Fast identity check (Are they the exact same reference in RAM?)\r
            if (this == obj) return true;\r
\r
            // STEP 2: Null check & exact Class type check (Guarantees Symmetry!)\r
            if (obj == null || getClass() != obj.getClass()) return false;\r
\r
            // STEP 3: Safe Downcast to current class type\r
            TraineeRecord other = (TraineeRecord) obj;\r
\r
            // STEP 4: Compare all significant fields using Double.compare and Objects.equals\r
            return this.rollNumber == other.rollNumber &&\r
                   Double.compare(this.gpaScore, other.gpaScore) == 0 &&\r
                   Objects.equals(this.fullName, other.fullName);\r
        }\r
\r
        @Override\r
        public int hashCode() {\r
            return Objects.hash(rollNumber, fullName, gpaScore);\r
        }\r
    }\r
\r
    public static void main(String[] args) {\r
        System.out.println("==========================================================================");\r
        System.out.println(" TOPIC 5: 4-STEP BULLETPROOF equals() TEMPLATE - BARRACKPORE");\r
        System.out.println("==========================================================================\\n");\r
\r
        TraineeRecord t1 = new TraineeRecord(101, "Swadeep Paul", 9.4);\r
        TraineeRecord t2 = new TraineeRecord(101, "Swadeep Paul", 9.4);\r
        TraineeRecord t3 = null;\r
\r
        System.out.println(">>> 1. Comparing two identical instances:");\r
        System.out.println("  t1.equals(t2) -> " + t1.equals(t2));\r
\r
        System.out.println("\\n>>> 2. Comparing with null (Null-safe check):");\r
        System.out.println("  t1.equals(t3) -> " + t1.equals(t3));\r
\r
        System.out.println("\\n==========================================================================");\r
    }\r
}`,l=`================================================================================\r
JAVA CORE TUTORIAL - QUICK REVISION GUIDE\r
Module 002_010: The Object Class & Core Contracts\r
Topic 5: Bulletproof equals() Template\r
Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
================================================================================\r
\r
1. THE 4-STEP equals() RECIPE:\r
   - Step 1: 'if (this == obj) return true;'\r
   - Step 2: 'if (obj == null || getClass() != obj.getClass()) return false;'\r
   - Step 3: 'ClassType other = (ClassType) obj;'\r
   - Step 4: 'return field1 == other.field1 && Objects.equals(f2, other.f2);'\r
\r
================================================================================\r
Classroom Practice: Barrackpore Academy | Mentor: Sukanta Hui\r
================================================================================`,o=[{question:"What are the 4 standard steps for writing a bulletproof 'equals()' method in Java?",shortAnswer:"1. Reference check ('if (this == obj) return true;'). 2. Null and type check ('if (obj == null || getClass() != obj.getClass()) return false;'). 3. Safe downcast ('MyClass other = (MyClass) obj;'). 4. Significant field comparisons ('Objects.equals(...)').",explanation:"This 4-step structure guarantees all 5 mathematical laws of the equals contract.",hint:"1. this == obj, 2. null/type check, 3. cast, 4. compare fields.",level:"Intermediate",codeExample:"// Complete 4-step template shown in Topic 5"}];function b(){return e.jsxs("div",{className:"space-y-12 px-4 md:px-8 py-8 text-slate-200 bg-slate-900 min-h-screen",children:[e.jsx("style",{children:`
          @keyframes fadeIn {
            from { opacity: 0; transform: translateY(8px); }
            to { opacity: 1; transform: translateY(0); }
          }
          .animate-fade-in { animation: fadeIn 0.5s ease-out forwards; }
        `}),e.jsxs("header",{className:"space-y-4 border-b border-slate-800 pb-6 animate-fade-in",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"px-3 py-1 bg-sky-500/10 text-sky-400 border border-sky-500/20 text-xs font-semibold rounded-full uppercase tracking-wider",children:"Module 002_010 · Topic 5"}),e.jsx("span",{className:"px-3 py-1 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-xs font-semibold rounded-full",children:"Engineering Standard"})]}),e.jsxs("h1",{className:"text-3xl md:text-4xl font-extrabold text-white tracking-tight",children:["Writing a Bulletproof ",e.jsx("code",{className:"text-emerald-400 font-mono",children:"equals()"})," Method Step-by-Step"]}),e.jsxs("p",{className:"text-base md:text-lg text-slate-400 leading-relaxed max-w-4xl",children:["Learn the industry-standard 4-step recipe for overriding ",e.jsx("code",{className:"text-emerald-300 font-mono",children:"equals()"}),": fast reference checks, null defense, exact type validation, and multi-field comparisons."]})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsxs("h2",{className:"text-2xl font-bold text-emerald-400 flex items-center gap-2",children:[e.jsx("span",{children:"💻"})," Hands-On Java Demo Code"]}),e.jsx(t,{fileModule:s,title:"BulletproofEqualsStepByStepDemo.java",highlightLines:[25,27,30,33,34,35,38]})]}),e.jsx("section",{className:"space-y-4",children:e.jsx(r,{title:"Bulletproof equals() FAQs",questions:o})}),e.jsx("section",{className:"space-y-4",children:e.jsx(a,{content:l,title:"Module 002_010 Topic 5: Bulletproof equals() Template",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Printable Note",downloadFileName:"002_010_topic5_bulletproof_equals_note.txt"})}),e.jsx(n,{note:"Always follow this 4-step template! Step 1 gives you lightning speed for identical references, Step 2 protects you from NullPointerExceptions and class mismatches, and Step 4 compares your real data. — Sukanta Hui"})]})}export{b as default};
