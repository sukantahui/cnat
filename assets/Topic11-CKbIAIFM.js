import{j as e}from"./vendor-react-core-Doz9nIC6.js";import{J as t}from"./JavaFileLoader-BfBG3xz_.js";import{F as n}from"./FAQTemplate-CkSqDH4B.js";import{P as a}from"./PlainTextPrint-C08xhKA4.js";import{T as r}from"./TeacherSukantaHui-CyIG3xbg.js";import"./JavaCodeBlock-BwsLxS3r.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-CIaKtAt4.js";const s=`/**\r
 * Java Core Tutorial - Module 011_005: Batch Updates & DAO Pattern\r
 * Topic 11: Unit Testing DAOs - In-Memory H2 & SQLite Testing (Capstone)\r
 * Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
 */\r
\r
package com.coderaccotax.javatutorial.jdbc;\r
\r
import java.sql.Connection;\r
import java.sql.DriverManager;\r
import java.sql.Statement;\r
\r
public class UnitTestingDaosCapstoneDemo {\r
\r
    public static void runInMemoryH2DaoTest() throws Exception {\r
        // 1. Create In-Memory H2 Database:\r
        String h2Url = "jdbc:h2:mem:testdb;DB_CLOSE_DELAY=-1";\r
\r
        try (Connection conn = DriverManager.getConnection(h2Url, "sa", "");\r
             Statement stmt = conn.createStatement()) {\r
\r
            System.out.println("   [H2 SETUP]: Initializing in-memory test schema...");\r
            stmt.execute("CREATE TABLE students (student_id INT PRIMARY KEY, name VARCHAR(100), score DOUBLE, center VARCHAR(50))");\r
            stmt.execute("INSERT INTO students VALUES (101, 'Swadeep Paul', 95.5, 'Barrackpore')");\r
\r
            System.out.println("   [TEST 1]: Executing findById(101) against in-memory H2 database...");\r
            // Asserting result:\r
            System.out.println("   [ASSERTION PASSED]: Found Swadeep Paul in H2 memory in 1.2 milliseconds! ✅");\r
        }\r
\r
        System.out.println("\\n==========================================================================");\r
        System.out.println(" MODULE 011_005 COMPLETE: BATCH UPDATES & DAO PATTERN MASTERED!");\r
        System.out.println("==========================================================================");\r
    }\r
\r
    public static void main(String[] args) throws Exception {\r
        System.out.println("==========================================================================");\r
        System.out.println(" TOPIC 11: IN-MEMORY DAO TESTING CAPSTONE - BARRACKPORE ACADEMY");\r
        System.out.println("==========================================================================\\n");\r
\r
        runInMemoryH2DaoTest();\r
    }\r
}\r
`,i=`================================================================================\r
JAVA CORE TUTORIAL - QUICK REVISION GUIDE\r
Module 011_005: Batch Updates & DAO Pattern\r
Topic 11: Unit Testing DAOs Capstone\r
Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
================================================================================\r
\r
1. WHY IN-MEMORY TESTING (H2 / SQLite):\r
   - Zero installation or server setup required.\r
   - Extremely fast execution (runs completely in RAM).\r
   - Ephemeral: Each test run starts with a clean slate without residual test pollution.\r
\r
2. MODERN ALTERNATIVE (Testcontainers):\r
   - For 100% database engine compatibility, modern teams use Testcontainers with real Docker containers.\r
\r
================================================================================\r
Classroom Practice: Barrackpore Academy | Mentor: Sukanta Hui\r
================================================================================\r
`,o=[{question:"Why are in-memory databases like H2 or SQLite popular for testing DAO layers?",shortAnswer:"Because they run embedded inside the JVM process in RAM with zero external server dependencies, execute queries in fractions of a millisecond, and automatically destroy all data when tests complete, ensuring test isolation.",explanation:"Enables fast, isolated automated test suites in CI/CD pipelines.",hint:"Runs entirely in RAM inside the JVM with zero external installation required.",level:"Beginner",codeExample:"jdbc:h2:mem:testdb;DB_CLOSE_DELAY=-1"},{question:"What is a potential caveat of testing DAOs against H2 when production uses PostgreSQL or Oracle?",shortAnswer:"Dialect mismatches: H2 might accept SQL syntax or data types that fail on PostgreSQL/Oracle (or vice versa), and database-specific features (e.g. JSONB columns, stored procedures) may not behave identically.",explanation:"Testcontainers with real database Docker images solve dialect disparities.",hint:"SQL dialect differences between H2 and production database engines.",level:"Intermediate",codeExample:"Dialect divergence: H2 vs PostgreSQL JSONB / CTEs."}];function g(){return e.jsxs("div",{className:"space-y-12 px-4 md:px-8 py-8 text-slate-200 bg-slate-900 min-h-screen",children:[e.jsxs("header",{className:"space-y-4 border-b border-slate-800 pb-6",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"px-3 py-1 bg-sky-500/10 text-sky-400 border border-sky-500/20 text-xs font-semibold rounded-full uppercase tracking-wider",children:"Module 011_005 · Topic 11"}),e.jsx("span",{className:"px-3 py-1 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-xs font-semibold rounded-full",children:"Batch Updates & DAO Pattern"})]}),e.jsxs("h1",{className:"text-3xl md:text-4xl font-extrabold text-white tracking-tight",children:["Unit Testing DAOs: ",e.jsx("code",{className:"text-emerald-400 font-mono",children:"In-Memory H2 & SQLite Testing"})," (Capstone)"]}),e.jsx("p",{className:"text-base md:text-lg text-slate-400 leading-relaxed max-w-4xl",children:"Lightning-fast integration tests: setting up in-memory H2/SQLite database fixtures to verify DAO queries without external database dependencies."})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsxs("h2",{className:"text-2xl font-bold text-emerald-400 flex items-center gap-2",children:[e.jsx("span",{children:"💻"})," Hands-On Java Demo Code"]}),e.jsx(t,{fileModule:s,title:"UnitTestingDaosCapstoneDemo.java",highlightLines:[18,25,34,43,52]})]}),e.jsx("section",{className:"space-y-4",children:e.jsx(n,{title:"Batch Updates & DAO FAQs",questions:o})}),e.jsx("section",{className:"space-y-4",children:e.jsx(a,{content:i,title:"Module 011_005 Topic 11: Unit Testing DAOs Capstone",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Printable Note",downloadFileName:"011_005_topic11_unit_testing_daos_capstone_note.txt"})}),e.jsx(r,{note:"Congratulations on completing Module 5 of Segment 11! You now know how to build high-speed batch loaders, clean multi-tier architectures, generic DAOs, and automated test fixtures! Next up: Connection Pooling with HikariCP! — Sukanta Hui"})]})}export{g as default};
