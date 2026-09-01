import{j as e}from"./vendor-react-core-Doz9nIC6.js";import{J as n}from"./JavaFileLoader-BfBG3xz_.js";import{F as a}from"./FAQTemplate-BHhlgA96.js";import{P as s}from"./PlainTextPrint-C08xhKA4.js";import{T as r}from"./TeacherSukantaHui-CEPuAfsb.js";import"./JavaCodeBlock-BwsLxS3r.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-DGCamHnX.js";const i=`/**\r
 * Java Core Tutorial - Module 002_011: SOLID Object-Oriented Design Principles in Java\r
 * Topic 1: S - Single Responsibility Principle (SRP): 'One Reason to Change'\r
 * Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
 */\r
\r
package com.coderaccotax.javatutorial.solid;\r
\r
public class SingleResponsibilityPrincipleDemo {\r
\r
    // ANTI-PATTERN: 'God Class' violating SRP (Mixes Model + DB persistence + Email notifications + PDF export!)\r
    public static class MonolithicStudentManager {\r
        public void calculateGpa() { /* Reason 1: Academic Grading change */ }\r
        public void saveToDatabase() { /* Reason 2: Database schema change */ }\r
        public void sendWelcomeEmail() { /* Reason 3: SMTP provider change */ }\r
    }\r
\r
    // SRP COMPLIANT: Each class has EXACTLY ONE reason to change!\r
    // 1. Domain Model: State only\r
    public static class Trainee {\r
        private String name;\r
        private double score;\r
        public Trainee(String name, double score) { this.name = name; this.score = score; }\r
        public String getName() { return name; }\r
        public double getScore() { return score; }\r
    }\r
\r
    // 2. Persistence Layer: Database operations only\r
    public static class TraineeRepository {\r
        public void save(Trainee t) {\r
            System.out.printf("  [DATABASE] Saved trainee '%s' to MySQL (Barrackpore DB).\\n", t.getName());\r
        }\r
    }\r
\r
    // 3. Notification Layer: Communication only\r
    public static class TraineeEmailService {\r
        public void sendWelcomeMail(Trainee t) {\r
            System.out.printf("  [EMAIL] Dispatched welcome email to: %s\\n", t.getName());\r
        }\r
    }\r
\r
    public static void main(String[] args) {\r
        System.out.println("==========================================================================");\r
        System.out.println(" TOPIC 1: SINGLE RESPONSIBILITY PRINCIPLE (SRP) - BARRACKPORE");\r
        System.out.println("==========================================================================\\n");\r
\r
        Trainee swadeep = new Trainee("Swadeep Paul", 95.5);\r
        TraineeRepository repo = new TraineeRepository();\r
        TraineeEmailService emailService = new TraineeEmailService();\r
\r
        repo.save(swadeep);\r
        emailService.sendWelcomeMail(swadeep);\r
\r
        System.out.println("\\n>>> SRP Rule: A class should have one, and only one, reason to change.");\r
\r
        System.out.println("\\n==========================================================================");\r
    }\r
}`,t=`================================================================================\r
JAVA CORE TUTORIAL - QUICK REVISION GUIDE\r
Module 002_011: SOLID Design Principles\r
Topic 1: Single Responsibility Principle (SRP)\r
Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
================================================================================\r
\r
1. SRP RULE (Uncle Bob):\r
   - 'A class should have only one reason to change.'\r
   - Separate concerns: Domain Models, Repositories, Services, Controllers.\r
   - Prevents bloated 'God Classes'.\r
\r
================================================================================\r
Classroom Practice: Barrackpore Academy | Mentor: Sukanta Hui\r
================================================================================`,o=[{question:"What is the core definition and benefit of the Single Responsibility Principle (SRP)?",shortAnswer:"SRP states that 'A class should have one, and only one, reason to change.' By separating business logic, database persistence, and external notifications into distinct classes, modifying one subsystem never breaks another.",explanation:"High cohesion and low coupling are direct results of SRP.",hint:"Every class should have a single focused responsibility and only one reason to change.",level:"Beginner",codeExample:"// Separate: User (model), UserRepository (DB), UserNotifier (email)"}];function S(){return e.jsxs("div",{className:"space-y-12 px-4 md:px-8 py-8 text-slate-200 bg-slate-900 min-h-screen",children:[e.jsx("style",{children:`
          @keyframes fadeIn {
            from { opacity: 0; transform: translateY(8px); }
            to { opacity: 1; transform: translateY(0); }
          }
          .animate-fade-in { animation: fadeIn 0.5s ease-out forwards; }
        `}),e.jsxs("header",{className:"space-y-4 border-b border-slate-800 pb-6 animate-fade-in",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"px-3 py-1 bg-sky-500/10 text-sky-400 border border-sky-500/20 text-xs font-semibold rounded-full uppercase tracking-wider",children:"Module 002_011 · Topic 1"}),e.jsx("span",{className:"px-3 py-1 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-xs font-semibold rounded-full",children:"SOLID: S"})]}),e.jsxs("h1",{className:"text-xl sm:text-2xl md:text-3xl font-bold text-white tracking-tight",children:["S — Single Responsibility Principle (SRP): ",e.jsx("span",{className:"text-emerald-400",children:'"One Reason to Change"'})]}),e.jsx("p",{className:"text-base md:text-lg text-slate-400 leading-relaxed max-w-4xl",children:"Deconstruct bloated God classes into clean, cohesive single-purpose components: separating domain data, database persistence, and external communication channels."})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsxs("h2",{className:"text-2xl font-bold text-emerald-400 flex items-center gap-2",children:[e.jsx("span",{children:"💻"})," Hands-On Java Demo Code"]}),e.jsx(n,{fileModule:i,title:"SingleResponsibilityPrincipleDemo.java",highlightLines:[11,18,26,33,44,45]})]}),e.jsx("section",{className:"space-y-4",children:e.jsx(a,{title:"SRP FAQs",questions:o})}),e.jsx("section",{className:"space-y-4",children:e.jsx(s,{content:t,title:"Module 002_011 Topic 1: Single Responsibility Principle",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Printable Note",downloadFileName:"002_011_topic1_srp_note.txt"})}),e.jsx(r,{note:"If changing your MySQL password forces you to edit the same class that formats your invoice HTML, you have violated SRP! Give each class a single job. — Sukanta Hui"})]})}export{S as default};
