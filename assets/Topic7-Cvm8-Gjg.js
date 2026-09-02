import{j as e}from"./vendor-react-core-Doz9nIC6.js";import{J as n}from"./JavaFileLoader-BfBG3xz_.js";import{F as t}from"./FAQTemplate-BHhlgA96.js";import{P as s}from"./PlainTextPrint-C08xhKA4.js";import{T as r}from"./TeacherSukantaHui-RpFLNJ5A.js";import"./JavaCodeBlock-BwsLxS3r.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-wprqVFW_.js";const i=`/**\r
 * Java Core Tutorial - Module 011_005: Batch Updates & DAO Pattern\r
 * Topic 7: Decoupling Business Logic - Service vs DAO Separation\r
 * Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
 */\r
\r
package com.coderaccotax.javatutorial.jdbc;\r
\r
import java.util.List;\r
import java.util.Optional;\r
\r
public class DecouplingBusinessLogicDemo {\r
\r
    public record Student(int id, String name, double score, String center) {}\r
\r
    // 1. Clean DAO Contract (Zero java.sql imports!):\r
    public interface StudentDao {\r
        Optional<Student> findById(int id);\r
        List<Student> findByCenter(String center);\r
        void save(Student student);\r
    }\r
\r
    // 2. Pure Business Service Layer:\r
    public static class StudentScholarshipService {\r
        private final StudentDao studentDao;\r
\r
        public StudentScholarshipService(StudentDao studentDao) {\r
            this.studentDao = studentDao; // Dependency Injection!\r
        }\r
\r
        public double calculateScholarshipBonus(int studentId) {\r
            // Pure domain business logic:\r
            return studentDao.findById(studentId)\r
                .map(s -> s.score() >= 90.0 ? 5000.0 : 1000.0)\r
                .orElse(0.0);\r
        }\r
    }\r
\r
    public static void main(String[] args) {\r
        System.out.println("==========================================================================");\r
        System.out.println(" TOPIC 7: DECOUPLING BUSINESS LOGIC & DAO SEPARATION - BARRACKPORE");\r
        System.out.println("==========================================================================\\n");\r
\r
        System.out.println(">>> THE CLEAN SEPARATION RULE:");\r
        System.out.println("  - Service Layer : Contains business rules, validations, calculations, and transaction orchestration.");\r
        System.out.println("  - DAO Layer     : Contains SQL strings, PreparedStatement binding, and ResultSet mapping.");\r
        System.out.println("  - Result        : Business logic contains 0 lines of SQL and 0 java.sql imports!");\r
\r
        System.out.println("\\n==========================================================================");\r
    }\r
}\r
`,a=`================================================================================\r
JAVA CORE TUTORIAL - QUICK REVISION GUIDE\r
Module 011_005: Batch Updates & DAO Pattern\r
Topic 7: Decoupling Business Logic\r
Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
================================================================================\r
\r
1. RESPONSIBILITY MATRIX:\r
   - DAO     : 'save()', 'delete()', 'findById()' (Translates Java objects to/from SQL tables).\r
   - Service : 'enrollStudent()', 'applyDiscount()', 'validateEligibility()' (Enforces business rules).\r
\r
2. DEPENDENCY INJECTION:\r
   - Services accept DAO interfaces via constructor injection, enabling easy mocking.\r
\r
================================================================================\r
Classroom Practice: Barrackpore Academy | Mentor: Sukanta Hui\r
================================================================================\r
`,o=[{question:"Why should business Service classes never import java.sql.* or execute SQL queries directly?",shortAnswer:"Because coupling business logic with SQL queries violates the Single Responsibility Principle, makes business rules impossible to unit-test without a database, and prevents switching persistence technologies without rewriting business code.",explanation:"Preserves clean architectural boundaries and separation of concerns.",hint:"Violates separation of concerns and prevents unit testing without a database.",level:"Beginner",codeExample:"Service classes should only consume Domain Models and DAO Interfaces."},{question:"How does Constructor Dependency Injection help wire DAOs into Services?",shortAnswer:"By passing the DAO interface instance into the Service constructor, the service remains decoupled from any specific implementation, allowing production code to inject a JDBC DAO while tests inject a Mock DAO.",explanation:"Core pattern for loose coupling and testability.",hint:"Passes DAO interface to service constructor for loose coupling.",level:"Intermediate",codeExample:"public UserService(UserDao dao) { this.dao = dao; }"}];function x(){return e.jsxs("div",{className:"space-y-12 px-4 md:px-8 py-8 text-slate-200 bg-slate-900 min-h-screen",children:[e.jsxs("header",{className:"space-y-4 border-b border-slate-800 pb-6",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"px-3 py-1 bg-sky-500/10 text-sky-400 border border-sky-500/20 text-xs font-semibold rounded-full uppercase tracking-wider",children:"Module 011_005 · Topic 7"}),e.jsx("span",{className:"px-3 py-1 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-xs font-semibold rounded-full",children:"Batch Updates & DAO Pattern"})]}),e.jsxs("h1",{className:"text-xl sm:text-2xl md:text-3xl font-bold text-white tracking-tight",children:["Decoupling Business Logic: ",e.jsx("code",{className:"text-emerald-400 font-mono",children:"Service vs DAO Separation"})]}),e.jsx("p",{className:"text-base md:text-lg text-slate-400 leading-relaxed max-w-4xl",children:"Architectural hygiene: why service classes should never import java.sql.* and how clean domain contracts maintain modularity."})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsxs("h2",{className:"text-2xl font-bold text-emerald-400 flex items-center gap-2",children:[e.jsx("span",{children:"💻"})," Hands-On Java Demo Code"]}),e.jsx(n,{fileModule:i,title:"DecouplingBusinessLogicDemo.java",highlightLines:[18,25,34,43]})]}),e.jsx("section",{className:"space-y-4",children:e.jsx(t,{title:"Batch Updates & DAO FAQs",questions:o})}),e.jsx("section",{className:"space-y-4",children:e.jsx(s,{content:a,title:"Module 011_005 Topic 7: Decoupling Business Logic",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Printable Note",downloadFileName:"011_005_topic7_decoupling_business_logic_note.txt"})}),e.jsx(r,{note:"Rule of thumb: If you see `import java.sql.*` inside a Service or Controller class, reject the Pull Request! Only DAO classes should touch SQL and ResultSets! — Sukanta Hui"})]})}export{x as default};
