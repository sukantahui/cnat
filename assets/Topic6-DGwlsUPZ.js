import{j as e}from"./vendor-react-core-Doz9nIC6.js";import{J as t}from"./JavaFileLoader-BfBG3xz_.js";import{F as r}from"./FAQTemplate-CkSqDH4B.js";import{P as n}from"./PlainTextPrint-C08xhKA4.js";import{T as s}from"./TeacherSukantaHui-CC0AKmkm.js";import"./JavaCodeBlock-BwsLxS3r.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-BtJHuk7w.js";const i=`/**\r
 * Java Core Tutorial - Module 003_007: Nested & Inner Classes\r
 * Topic 6: When to Choose Static Nested Classes: The Builder Pattern & Map.Entry Architecture\r
 * Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
 */\r
\r
package com.coderaccotax.javatutorial.nested;\r
\r
public class StudentAdmissionProfile {\r
\r
    private final String studentName;\r
    private final String enrollmentId;\r
    private final String courseName;\r
    private final double scholarshipPercent;\r
\r
    // Private constructor called strictly by the Static Nested Builder:\r
    private StudentAdmissionProfile(Builder builder) {\r
        this.studentName = builder.studentName;\r
        this.enrollmentId = builder.enrollmentId;\r
        this.courseName = builder.courseName;\r
        this.scholarshipPercent = builder.scholarshipPercent;\r
    }\r
\r
    // STATIC NESTED CLASS: The Builder Pattern\r
    public static class Builder {\r
        private String studentName;\r
        private String enrollmentId;\r
        private String courseName;\r
        private double scholarshipPercent;\r
\r
        public Builder setStudentName(String studentName) {\r
            this.studentName = studentName;\r
            return this;\r
        }\r
\r
        public Builder setEnrollmentId(String enrollmentId) {\r
            this.enrollmentId = enrollmentId;\r
            return this;\r
        }\r
\r
        public Builder setCourseName(String courseName) {\r
            this.courseName = courseName;\r
            return this;\r
        }\r
\r
        public Builder setScholarshipPercent(double scholarshipPercent) {\r
            this.scholarshipPercent = scholarshipPercent;\r
            return this;\r
        }\r
\r
        public StudentAdmissionProfile build() {\r
            return new StudentAdmissionProfile(this);\r
        }\r
    }\r
\r
    @Override\r
    public String toString() {\r
        return String.format("Student[ID=%s, Name=%s, Course=%s, Scholarship=%.1f%%]",\r
                enrollmentId, studentName, courseName, scholarshipPercent);\r
    }\r
\r
    public static void main(String[] args) {\r
        System.out.println("==========================================================================");\r
        System.out.println(" TOPIC 6: STATIC NESTED BUILDER PATTERN - BARRACKPORE");\r
        System.out.println("==========================================================================\\n");\r
\r
        // Constructing immutable StudentProfile using Fluent Static Builder:\r
        StudentAdmissionProfile profile = new StudentAdmissionProfile.Builder()\r
                .setStudentName("Swadeep Paul")\r
                .setEnrollmentId("BKP-2026-001")\r
                .setCourseName("Java Core & Spring Microservices")\r
                .setScholarshipPercent(25.0)\r
                .build();\r
\r
        System.out.println(">>> Constructed Immutable Student Profile via Static Nested Builder:");\r
        System.out.println("  " + profile);\r
\r
        System.out.println("\\n==========================================================================");\r
    }\r
}`,a=`================================================================================\r
JAVA CORE TUTORIAL - QUICK REVISION GUIDE\r
Module 003_007: Nested & Inner Classes\r
Topic 6: Static Nested Class Best Practices\r
Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
================================================================================\r
\r
1. REAL-WORLD USE CASES:\r
   - The Builder Pattern ('new User.Builder().build()').\r
   - Map.Entry key-value pair helper ('java.util.Map.Entry').\r
   - LinkedList node container ('static class Node<E>').\r
\r
================================================================================\r
Classroom Practice: Barrackpore Academy | Mentor: Sukanta Hui\r
================================================================================`,l=[{question:"Why is the Builder Pattern implemented using a 'public static class Builder' rather than a non-static inner class?",shortAnswer:"Because the Builder must be instantiated BEFORE the target outer object exists (e.g. 'new Student.Builder()'). A non-static inner class would require an existing outer object first, defeating the purpose of a constructor helper.",explanation:"Static nested classes are also used for Map.Entry and LinkedList.Node.",hint:"The builder constructs the outer object, so it cannot depend on an outer instance existing first.",level:"Intermediate",codeExample:'Student s = new Student.Builder().setName("Swadeep").build();'}];function S(){return e.jsxs("div",{className:"space-y-12 px-4 md:px-8 py-8 text-slate-200 bg-slate-900 min-h-screen",children:[e.jsxs("header",{className:"space-y-4 border-b border-slate-800 pb-6",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"px-3 py-1 bg-sky-500/10 text-sky-400 border border-sky-500/20 text-xs font-semibold rounded-full uppercase tracking-wider",children:"Module 003_007 · Topic 6"}),e.jsx("span",{className:"px-3 py-1 bg-purple-500/10 text-purple-400 border border-purple-500/20 text-xs font-semibold rounded-full",children:"Enterprise Design Patterns"})]}),e.jsxs("h1",{className:"text-3xl md:text-4xl font-extrabold text-white tracking-tight",children:["When to Choose Static Nested Classes: The ",e.jsx("code",{className:"text-purple-400 font-mono",children:"Builder Pattern"})," & ",e.jsx("code",{className:"text-emerald-400 font-mono",children:"Map.Entry"})]}),e.jsxs("p",{className:"text-base md:text-lg text-slate-400 leading-relaxed max-w-4xl",children:["Build immutable enterprise models: leveraging static nested classes for fluent builder pattern pipelines and understanding standard library ",e.jsx("code",{className:"text-emerald-300 font-mono",children:"Map.Entry"})," architecture."]})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsxs("h2",{className:"text-2xl font-bold text-emerald-400 flex items-center gap-2",children:[e.jsx("span",{children:"💻"})," Hands-On Java Demo Code"]}),e.jsx(t,{fileModule:i,title:"StudentAdmissionProfile.java",highlightLines:[7,13,20,26,43,44,57,58,59,60,61,62]})]}),e.jsx("section",{className:"space-y-4",children:e.jsx(r,{title:"Builder Pattern FAQs",questions:l})}),e.jsx("section",{className:"space-y-4",children:e.jsx(n,{content:a,title:"Module 003_007 Topic 6: Static Nested Builder Pattern",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Printable Note",downloadFileName:"003_007_topic6_builder_pattern_note.txt"})}),e.jsx(s,{note:"Look at Lombok's @Builder annotation or java.util.Map.Entry! They are all powered by static nested classes. They make code so clean and eliminate telescoping constructors! — Sukanta Hui"})]})}export{S as default};
