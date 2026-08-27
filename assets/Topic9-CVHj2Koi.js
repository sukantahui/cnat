import{j as e}from"./vendor-react-core-Doz9nIC6.js";import{J as n}from"./JavaFileLoader-BfBG3xz_.js";import{F as r}from"./FAQTemplate-CkSqDH4B.js";import{P as t}from"./PlainTextPrint-C08xhKA4.js";import{T as a}from"./TeacherSukantaHui-CC0AKmkm.js";import"./JavaCodeBlock-BwsLxS3r.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-BtJHuk7w.js";const i=`/**\r
 * Java Core Tutorial - Module 002_011: SOLID Object-Oriented Design Principles in Java\r
 * Topic 9: D - Dependency Inversion Principle (DIP): Inverting Architectural Dependencies\r
 * Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
 */\r
\r
package com.coderaccotax.javatutorial.solid;\r
\r
public class DependencyInversionPrincipleDemo {\r
\r
    // 1. ABSTRACTION (Both High-Level & Low-Level Modules Depend on this!):\r
    public interface DatabaseDriver {\r
        void executeQuery(String sql);\r
    }\r
\r
    // 2. LOW-LEVEL MODULE (Implements Abstraction)\r
    public static class MySqlDatabaseDriver implements DatabaseDriver {\r
        public void executeQuery(String sql) {\r
            System.out.println("  [MYSQL DRIVER] Executing on Port 3306: " + sql);\r
        }\r
    }\r
\r
    // 3. LOW-LEVEL MODULE (Alternative)\r
    public static class PostgresDatabaseDriver implements DatabaseDriver {\r
        public void executeQuery(String sql) {\r
            System.out.println("  [POSTGRES DRIVER] Executing on Port 5432: " + sql);\r
        }\r
    }\r
\r
    // 4. HIGH-LEVEL MODULE (Depends ONLY on DatabaseDriver abstraction via Constructor Injection!):\r
    public static class TraineeRecordService {\r
        private final DatabaseDriver db; // Abstraction, not concrete MySqlDatabaseDriver!\r
\r
        public TraineeRecordService(DatabaseDriver driver) {\r
            this.db = driver;\r
        }\r
\r
        public void enrollTrainee(String name) {\r
            System.out.println(">>> Enrolling Trainee: " + name);\r
            db.executeQuery("INSERT INTO trainees(name, hub) VALUES('" + name + "', 'Barrackpore');");\r
        }\r
    }\r
\r
    public static void main(String[] args) {\r
        System.out.println("==========================================================================");\r
        System.out.println(" TOPIC 9: DEPENDENCY INVERSION PRINCIPLE (DIP) - BARRACKPORE");\r
        System.out.println("==========================================================================\\n");\r
\r
        System.out.println(">>> 1. Injected MySQL Provider into High-Level Service:");\r
        TraineeRecordService svc1 = new TraineeRecordService(new MySqlDatabaseDriver());\r
        svc1.enrollTrainee("Swadeep Paul");\r
\r
        System.out.println("\\n>>> 2. Swapped to Postgres Provider without modifying Service code:");\r
        TraineeRecordService svc2 = new TraineeRecordService(new PostgresDatabaseDriver());\r
        svc2.enrollTrainee("Tuhina Das");\r
\r
        System.out.println("\\n>>> DIP Rule: High-level business logic must not depend on low-level database details.");\r
\r
        System.out.println("\\n==========================================================================");\r
    }\r
}`,s=`================================================================================\r
JAVA CORE TUTORIAL - QUICK REVISION GUIDE\r
Module 002_011: SOLID Design Principles\r
Topic 9: Dependency Inversion Principle (DIP)\r
Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
================================================================================\r
\r
1. DIP LAWS (Uncle Bob):\r
   - High-level business policies must NOT depend on low-level I/O / DB classes.\r
   - Both layers must depend on abstract interfaces.\r
   - Enables swapping databases, network clients, and unit test mocks with 0 friction.\r
\r
================================================================================\r
Classroom Practice: Barrackpore Academy | Mentor: Sukanta Hui\r
================================================================================`,o=[{question:"What is the Dependency Inversion Principle (DIP) in SOLID design?",shortAnswer:"DIP states: 1. High-level modules should not depend on low-level modules; both should depend on abstractions. 2. Abstractions should not depend on details; details should depend on abstractions.",explanation:"DIP is the architectural foundation of Dependency Injection and Spring Framework.",hint:"Both high-level and low-level code must depend on shared interfaces/abstractions.",level:"Intermediate",codeExample:"class Service { private final Database db; public Service(Database db) { this.db = db; } }"}];function v(){return e.jsxs("div",{className:"space-y-12 px-4 md:px-8 py-8 text-slate-200 bg-slate-900 min-h-screen",children:[e.jsx("style",{children:`
          @keyframes fadeIn {
            from { opacity: 0; transform: translateY(8px); }
            to { opacity: 1; transform: translateY(0); }
          }
          .animate-fade-in { animation: fadeIn 0.5s ease-out forwards; }
        `}),e.jsxs("header",{className:"space-y-4 border-b border-slate-800 pb-6 animate-fade-in",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"px-3 py-1 bg-sky-500/10 text-sky-400 border border-sky-500/20 text-xs font-semibold rounded-full uppercase tracking-wider",children:"Module 002_011 · Topic 9"}),e.jsx("span",{className:"px-3 py-1 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-xs font-semibold rounded-full",children:"SOLID: D"})]}),e.jsxs("h1",{className:"text-3xl md:text-4xl font-extrabold text-white tracking-tight",children:["D — Dependency Inversion Principle (DIP): ",e.jsx("span",{className:"text-emerald-400",children:"Inverting Dependencies"})]}),e.jsx("p",{className:"text-base md:text-lg text-slate-400 leading-relaxed max-w-4xl",children:"Master the fifth and final pillar of SOLID: decoupling core enterprise business logic from database, caching, and network implementation details using abstractions."})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsxs("h2",{className:"text-2xl font-bold text-emerald-400 flex items-center gap-2",children:[e.jsx("span",{children:"💻"})," Hands-On Java Demo Code"]}),e.jsx(n,{fileModule:i,title:"DependencyInversionPrincipleDemo.java",highlightLines:[11,16,23,30,33,47,51]})]}),e.jsx("section",{className:"space-y-4",children:e.jsx(r,{title:"DIP FAQs",questions:o})}),e.jsx("section",{className:"space-y-4",children:e.jsx(t,{content:s,title:"Module 002_011 Topic 9: Dependency Inversion Principle",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Printable Note",downloadFileName:"002_011_topic9_dip_note.txt"})}),e.jsx(a,{note:"Never use 'new MySqlDatabase()' inside your service class! Pass the DatabaseDriver interface through the constructor. This is how Spring Framework works under the hood. — Sukanta Hui"})]})}export{v as default};
