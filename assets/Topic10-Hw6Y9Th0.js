import{j as e}from"./vendor-react-core-Doz9nIC6.js";import{J as t}from"./JavaFileLoader-BfBG3xz_.js";import{F as n}from"./FAQTemplate-CkSqDH4B.js";import{P as r}from"./PlainTextPrint-C08xhKA4.js";import{T as a}from"./TeacherSukantaHui-CyIG3xbg.js";import"./JavaCodeBlock-BwsLxS3r.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-CIaKtAt4.js";const i=`/**\r
 * Java Core Tutorial - Module 002_005: Inheritance, IS-A vs HAS-A, Composition & Aggregation\r
 * Topic 10: Aggregation (Weak Association): Lifecycle Independence\r
 * Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
 */\r
\r
package com.coderaccotax.javatutorial.inheritance;\r
\r
import java.util.ArrayList;\r
import java.util.List;\r
\r
public class AggregationWeakAssociationDemo {\r
\r
    // Independent Entity: FacultyInstructor\r
    public static class FacultyInstructor {\r
        private String name;\r
        private String subject;\r
\r
        public FacultyInstructor(String name, String subject) {\r
            this.name = name;\r
            this.subject = subject;\r
        }\r
\r
        public String getName() { return name; }\r
        public String getSubject() { return subject; }\r
    }\r
\r
    // AGGREGATION: AcademyDepartment HAS-A FacultyInstructors\r
    // Lifecycle Independence: If AcademyDepartment is destroyed, FacultyInstructor still exists!\r
    public static class AcademyDepartment {\r
        private String deptName;\r
        private List<FacultyInstructor> instructors;\r
\r
        public AcademyDepartment(String deptName) {\r
            this.deptName = deptName;\r
            this.instructors = new ArrayList<>();\r
        }\r
\r
        public void assignInstructor(FacultyInstructor instructor) {\r
            this.instructors.add(instructor);\r
        }\r
\r
        public void printFacultyRoster() {\r
            System.out.println("  [DEPARTMENT] " + deptName + " Faculty Roster:");\r
            for (FacultyInstructor f : instructors) {\r
                System.out.printf("    -> %s (%s)\\n", f.getName(), f.getSubject());\r
            }\r
        }\r
    }\r
\r
    public static void main(String[] args) {\r
        System.out.println("==========================================================================");\r
        System.out.println(" TOPIC 10: AGGREGATION (WEAK ASSOCIATION) - BARRACKPORE");\r
        System.out.println("==========================================================================\\n");\r
\r
        // 1. Create Instructor independently (Lives on Heap outside Department)\r
        FacultyInstructor sukantaSir = new FacultyInstructor("Sukanta Hui", "Java Core & Spring Boot");\r
\r
        // 2. Associate with Software Department\r
        AcademyDepartment csDept = new AcademyDepartment("Computer Science & IT");\r
        csDept.assignInstructor(sukantaSir);\r
        csDept.printFacultyRoster();\r
\r
        // 3. Destroy Department reference\r
        System.out.println("\\n>>> Closing Department (Setting csDept = null)...");\r
        csDept = null;\r
\r
        // 4. Sukanta Hui instructor object STILL LIVES independently in memory!\r
        System.out.println(">>> Verifying Independent Lifecycle of FacultyInstructor:");\r
        System.out.println("  Instructor still exists independently: " + sukantaSir.getName());\r
\r
        System.out.println("\\n==========================================================================");\r
    }\r
}`,s=`================================================================================\r
JAVA CORE TUTORIAL - QUICK REVISION GUIDE\r
Module 002_005: Inheritance, IS-A vs HAS-A, Composition & Aggregation\r
Topic 10: Aggregation (Weak Association)\r
Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
================================================================================\r
\r
1. AGGREGATION CHARACTERISTICS:\r
   - Weak HAS-A relationship.\r
   - Contained object created OUTSIDE and passed into container.\r
   - Independent lifecycle: Container deletion does NOT destroy contained object.\r
\r
================================================================================\r
Classroom Practice: Barrackpore Academy | Mentor: Sukanta Hui\r
================================================================================`,o=[{question:"What is Aggregation in Java OOP and how is lifecycle independence defined?",shortAnswer:"Aggregation is a weak HAS-A relationship where the child/contained object can exist independently of the parent container object (e.g. Department and Teacher).",explanation:"If the parent container is deleted or garbage collected, the contained object remains alive and unaffected in memory.",hint:"Weak association where contained objects have independent lifecycles.",level:"Intermediate",codeExample:"// Teacher created outside Department and passed in"}];function A(){return e.jsxs("div",{className:"space-y-12 px-4 md:px-8 py-8 text-slate-200 bg-slate-900 min-h-screen",children:[e.jsx("style",{children:`
          @keyframes fadeIn {
            from { opacity: 0; transform: translateY(8px); }
            to { opacity: 1; transform: translateY(0); }
          }
          .animate-fade-in { animation: fadeIn 0.5s ease-out forwards; }
        `}),e.jsxs("header",{className:"space-y-4 border-b border-slate-800 pb-6 animate-fade-in",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"px-3 py-1 bg-sky-500/10 text-sky-400 border border-sky-500/20 text-xs font-semibold rounded-full uppercase tracking-wider",children:"Module 002_005 · Topic 10"}),e.jsx("span",{className:"px-3 py-1 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-xs font-semibold rounded-full",children:"Weak Association"})]}),e.jsx("h1",{className:"text-3xl md:text-4xl font-extrabold text-white tracking-tight",children:"Aggregation (Weak Association): Lifecycle Independence"}),e.jsx("p",{className:"text-base md:text-lg text-slate-400 leading-relaxed max-w-4xl",children:"Learn how Aggregation models loose coupling between entities where parts exist independently of their containing parent."})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsxs("h2",{className:"text-2xl font-bold text-emerald-400 flex items-center gap-2",children:[e.jsx("span",{children:"💻"})," Hands-On Java Demo Code"]}),e.jsx(t,{fileModule:i,title:"AggregationWeakAssociationDemo.java",highlightLines:[13,27,47,51,57]})]}),e.jsx("section",{className:"space-y-4",children:e.jsx(n,{title:"Aggregation FAQs",questions:o})}),e.jsx("section",{className:"space-y-4",children:e.jsx(r,{content:s,title:"Module 002_005 Topic 10: Aggregation Weak Association",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Printable Note",downloadFileName:"002_005_topic10_aggregation_note.txt"})}),e.jsx(a,{note:"If Sukanta Hui teaches in the IT Department, and the IT Department is closed down, Sukanta Hui still exists! That is Aggregation: lifecycle independence. — Sukanta Hui"})]})}export{A as default};
