import{j as e}from"./vendor-react-core-Doz9nIC6.js";import{J as n}from"./JavaFileLoader-BfBG3xz_.js";import{F as t}from"./FAQTemplate-BHhlgA96.js";import{P as r}from"./PlainTextPrint-C08xhKA4.js";import{T as a}from"./TeacherSukantaHui-RpFLNJ5A.js";import"./JavaCodeBlock-BwsLxS3r.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-wprqVFW_.js";const i=`/**\r
 * Java Core Tutorial - Module 005_007: File Handling & I/O Hands-On Capstone Lab\r
 * Topic 4: Comprehensive File I/O Multiple Choice Question Assessment Exam\r
 * Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
 */\r
\r
package com.coderaccotax.javatutorial.io.lab;\r
\r
import java.util.List;\r
\r
public class FileIoComprehensiveMcqExamDemo {\r
\r
    public static class ExamQuestion {\r
        public final int number;\r
        public final String question;\r
        public final List<String> options;\r
        public final int correctIndex;\r
        public final String rationale;\r
\r
        public ExamQuestion(int num, String q, List<String> opts, int correct, String reason) {\r
            this.number = num;\r
            this.question = q;\r
            this.options = opts;\r
            this.correctIndex = correct;\r
            this.rationale = reason;\r
        }\r
    }\r
\r
    public static void main(String[] args) {\r
        System.out.println("==========================================================================");\r
        System.out.println(" TOPIC 4: COMPREHENSIVE FILE I/O MCQ ASSESSMENT - BARRACKPORE");\r
        System.out.println("==========================================================================\\n");\r
\r
        List<ExamQuestion> exam = List.of(\r
                new ExamQuestion(\r
                        1,\r
                        "What is the default buffer size in BufferedReader and BufferedInputStream?",\r
                        List.of("A) 1024 bytes", "B) 4096 bytes", "C) 8192 bytes (8 KB)", "D) 16384 bytes"),\r
                        2,\r
                        "Java uses a default buffer array of 8192 chars/bytes to match standard OS disk sectors."\r
                ),\r
                new ExamQuestion(\r
                        2,\r
                        "Which method in Java NIO.2 is recommended for lazily streaming gigabyte log files?",\r
                        List.of("A) Files.readAllLines(path)", "B) Files.readString(path)", "C) Files.lines(path)", "D) Files.readAllBytes(path)"),\r
                        2,\r
                        "Files.lines(path) returns a lazy Stream<String> that reads on demand with O(1) memory."\r
                ),\r
                new ExamQuestion(\r
                        3,\r
                        "What happens to fields marked with 'transient' during deserialization?",\r
                        List.of("A) They throw NotSerializableException", "B) They receive Java default values (null / 0)", "C) They retain pre-serialization values", "D) They are encrypted"),\r
                        1,\r
                        "Transient fields are skipped during serialization and rehydrated to default values (null, 0, false)."\r
                )\r
        );\r
\r
        for (ExamQuestion q : exam) {\r
            System.out.println("Q" + q.number + ": " + q.question);\r
            for (String opt : q.options) {\r
                System.out.println("   " + opt);\r
            }\r
            System.out.println("   -> Correct: Option " + (char)('A' + q.correctIndex));\r
            System.out.println("   -> Rationale: " + q.rationale + "\\n");\r
        }\r
\r
        System.out.println("==========================================================================");\r
    }\r
}`,s=`================================================================================\r
JAVA CORE TUTORIAL - QUICK REVISION GUIDE\r
Module 005_007: File Handling & I/O Hands-On Capstone Lab\r
Topic 4: File I/O MCQ Self-Assessment\r
Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
================================================================================\r
\r
1. CORE I/O EXAM CHECKPOINTS:\r
   - 8192 bytes default buffer in BufferedReader.\r
   - Files.lines() for lazy streaming.\r
   - 'transient' resets fields to null/0 on deserialization.\r
   - serialVersionUID prevents InvalidClassException.\r
   - Path.of() is immutable and platform independent.\r
\r
================================================================================\r
Classroom Practice: Barrackpore Academy | Mentor: Sukanta Hui\r
================================================================================`,l=[{question:"Which of the following File I/O methods loads an entire file into heap RAM simultaneously and should NEVER be used on multi-gigabyte files?",shortAnswer:"'Files.readAllLines(path)' and 'Files.readAllBytes(path)' read every single byte/line of a file into a Java List/Array in heap memory at once. If used on a multi-gigabyte file, the JVM will immediately exhaust heap memory and crash with 'java.lang.OutOfMemoryError: Java heap space'. Always use lazy 'Files.lines(path)' instead.",explanation:"Critical performance rule for all Java backend developers.",hint:"Files.readAllLines loads all lines into a List in RAM, causing OutOfMemoryError on big files.",level:"Intermediate",codeExample:"Files.lines(path) // Safe lazy stream vs Files.readAllLines(path) // Memory hazard"}];function f(){return e.jsxs("div",{className:"space-y-12 px-4 md:px-8 py-8 text-slate-200 bg-slate-900 min-h-screen",children:[e.jsxs("header",{className:"space-y-4 border-b border-slate-800 pb-6",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"px-3 py-1 bg-sky-500/10 text-sky-400 border border-sky-500/20 text-xs font-semibold rounded-full uppercase tracking-wider",children:"Module 005_007 · Topic 4"}),e.jsx("span",{className:"px-3 py-1 bg-sky-500/10 text-sky-400 border border-sky-500/20 text-xs font-semibold rounded-full",children:"Self-Assessment Exam"})]}),e.jsx("h1",{className:"text-xl sm:text-2xl md:text-3xl font-bold text-white tracking-tight",children:"Comprehensive File I/O Multiple Choice Question Assessment Exam"}),e.jsx("p",{className:"text-base md:text-lg text-slate-400 leading-relaxed max-w-4xl",children:"Validate your Java I/O knowledge: solving multiple-choice questions covering stream buffer sizing, NIO.2 memory boundaries, and serialization contracts."})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsxs("h2",{className:"text-2xl font-bold text-emerald-400 flex items-center gap-2",children:[e.jsx("span",{children:"💻"})," Hands-On Java Demo Code"]}),e.jsx(n,{fileModule:i,title:"FileIoComprehensiveMcqExamDemo.java",highlightLines:[7,10,24,25,30,31,36,37]})]}),e.jsx("section",{className:"space-y-4",children:e.jsx(t,{title:"MCQ Exam FAQs",questions:l})}),e.jsx("section",{className:"space-y-4",children:e.jsx(r,{content:s,title:"Module 005_007 Topic 4: File I/O MCQ Exam",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Printable Note",downloadFileName:"005_007_topic4_file_io_mcq_exam_note.txt"})}),e.jsx(a,{note:"Reviewing these core questions will prepare you for technical interviews at top software companies! Make sure you can explain why Files.lines() is superior to Files.readAllLines()! — Sukanta Hui"})]})}export{f as default};
