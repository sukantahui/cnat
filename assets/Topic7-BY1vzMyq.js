import{j as e}from"./vendor-react-core-Doz9nIC6.js";import{J as t}from"./JavaFileLoader-BfBG3xz_.js";import{F as n}from"./FAQTemplate-BHhlgA96.js";import{P as r}from"./PlainTextPrint-C08xhKA4.js";import{T as a}from"./TeacherSukantaHui-DerPxfxp.js";import"./JavaCodeBlock-BwsLxS3r.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-CH1iX9C8.js";const s=`/**\r
 * Java Core Tutorial - Module 011_002: PreparedStatements, CallableStatements & SQL Safety\r
 * Topic 7: Executing CRUD Operations with PreparedStatement\r
 * Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
 */\r
\r
package com.coderaccotax.javatutorial.jdbc;\r
\r
import java.sql.Connection;\r
import java.sql.PreparedStatement;\r
import java.sql.ResultSet;\r
import java.sql.SQLException;\r
\r
public class CrudOperationsPreparedStatementDemo {\r
\r
    // 1. CREATE (INSERT):\r
    public static int createStudent(Connection conn, int id, String name, String course) throws SQLException {\r
        String sql = "INSERT INTO students (student_id, name, course) VALUES (?, ?, ?)";\r
        try (PreparedStatement pstmt = conn.prepareStatement(sql)) {\r
            pstmt.setInt(1, id);\r
            pstmt.setString(2, name);\r
            pstmt.setString(3, course);\r
            return pstmt.executeUpdate();\r
        }\r
    }\r
\r
    // 2. READ (SELECT):\r
    public static void readStudent(Connection conn, int id) throws SQLException {\r
        String sql = "SELECT student_id, name, course FROM students WHERE student_id = ?";\r
        try (PreparedStatement pstmt = conn.prepareStatement(sql)) {\r
            pstmt.setInt(1, id);\r
            try (ResultSet rs = pstmt.executeQuery()) {\r
                if (rs.next()) {\r
                    System.out.println("   [FOUND]: " + rs.getInt("student_id") + " - " + rs.getString("name"));\r
                }\r
            }\r
        }\r
    }\r
\r
    // 3. UPDATE:\r
    public static int updateStudentCourse(Connection conn, int id, String newCourse) throws SQLException {\r
        String sql = "UPDATE students SET course = ? WHERE student_id = ?";\r
        try (PreparedStatement pstmt = conn.prepareStatement(sql)) {\r
            pstmt.setString(1, newCourse);\r
            pstmt.setInt(2, id);\r
            return pstmt.executeUpdate();\r
        }\r
    }\r
\r
    // 4. DELETE:\r
    public static int deleteStudent(Connection conn, int id) throws SQLException {\r
        String sql = "DELETE FROM students WHERE student_id = ?";\r
        try (PreparedStatement pstmt = conn.prepareStatement(sql)) {\r
            pstmt.setInt(1, id);\r
            return pstmt.executeUpdate();\r
        }\r
    }\r
\r
    public static void main(String[] args) {\r
        System.out.println("==========================================================================");\r
        System.out.println(" TOPIC 7: CRUD OPERATIONS WITH PREPAREDSTATEMENT - BARRACKPORE");\r
        System.out.println("==========================================================================\\n");\r
\r
        System.out.println(">>> CRUD TEMPLATES ESTABLISHED:");\r
        System.out.println("  - CREATE : INSERT INTO students (...) VALUES (?, ?, ?)");\r
        System.out.println("  - READ   : SELECT ... FROM students WHERE student_id = ?");\r
        System.out.println("  - UPDATE : UPDATE students SET course = ? WHERE student_id = ?");\r
        System.out.println("  - DELETE : DELETE FROM students WHERE student_id = ?");\r
\r
        System.out.println("\\n==========================================================================");\r
    }\r
}\r
`,o=`================================================================================\r
JAVA CORE TUTORIAL - QUICK REVISION GUIDE\r
Module 011_002: PreparedStatements, CallableStatements & SQL Safety\r
Topic 7: CRUD Operations with PreparedStatement\r
Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
================================================================================\r
\r
1. CRUD SUMMARY:\r
   - CREATE → 'pstmt.executeUpdate()' (Returns 1 on successful insert).\r
   - READ   → 'pstmt.executeQuery()'   (Returns ResultSet; iterate with 'rs.next()').\r
   - UPDATE → 'pstmt.executeUpdate()' (Returns count of updated rows).\r
   - DELETE → 'pstmt.executeUpdate()' (Returns count of deleted rows).\r
\r
2. IDEMPOTENCY:\r
   - Updates and Deletes return '0' if no matching rows met the WHERE criteria.\r
\r
================================================================================\r
Classroom Practice: Barrackpore Academy | Mentor: Sukanta Hui\r
================================================================================\r
`,i=[{question:"What integer value does pstmt.executeUpdate() return when an UPDATE or DELETE query matches zero rows in the database?",shortAnswer:"It returns 0, indicating that the query executed successfully on the database server, but zero rows met the WHERE condition criteria.",explanation:"Does not throw an exception; returns 0 rows affected.",hint:"Returns 0.",level:"Beginner",codeExample:"int rows = pstmt.executeUpdate(); // 0 if no matching records found"},{question:"Why should each CRUD method encapsulate its PreparedStatement inside a try-with-resources statement?",shortAnswer:"To guarantee that the PreparedStatement is closed immediately upon completing the operation, preventing statement handle leaks in the underlying database connection.",explanation:"Ensures prompt statement resource deallocation.",hint:"Guarantees PreparedStatement closure and prevents statement handle leaks.",level:"Beginner",codeExample:"try (PreparedStatement ps = conn.prepareStatement(sql)) { ... }"}];function x(){return e.jsxs("div",{className:"space-y-12 px-4 md:px-8 py-8 text-slate-200 bg-slate-900 min-h-screen",children:[e.jsxs("header",{className:"space-y-4 border-b border-slate-800 pb-6",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"px-3 py-1 bg-sky-500/10 text-sky-400 border border-sky-500/20 text-xs font-semibold rounded-full uppercase tracking-wider",children:"Module 011_002 · Topic 7"}),e.jsx("span",{className:"px-3 py-1 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-xs font-semibold rounded-full",children:"SQL Safety & PreparedStatements"})]}),e.jsxs("h1",{className:"text-xl sm:text-2xl md:text-3xl font-bold text-white tracking-tight",children:["Executing CRUD Operations: ",e.jsx("code",{className:"text-emerald-400 font-mono",children:"INSERT, SELECT, UPDATE & DELETE"})]}),e.jsx("p",{className:"text-base md:text-lg text-slate-400 leading-relaxed max-w-4xl",children:"The 4 fundamental database operations: building complete, parameterized, production-ready CRUD routines with PreparedStatement."})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsxs("h2",{className:"text-2xl font-bold text-emerald-400 flex items-center gap-2",children:[e.jsx("span",{children:"💻"})," Hands-On Java Demo Code"]}),e.jsx(t,{fileModule:s,title:"CrudOperationsPreparedStatementDemo.java",highlightLines:[18,25,34,43]})]}),e.jsx("section",{className:"space-y-4",children:e.jsx(n,{title:"SQL Statements & Injection FAQs",questions:i})}),e.jsx("section",{className:"space-y-4",children:e.jsx(r,{content:o,title:"Module 011_002 Topic 7: CRUD Operations with PreparedStatement",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Printable Note",downloadFileName:"011_002_topic7_crud_operations_preparedstatement_note.txt"})}),e.jsx(a,{note:"CRUD is the backbone of all software applications — Create (INSERT), Read (SELECT), Update (UPDATE), and Delete (DELETE)! Here is the standard production template for all four operations! — Sukanta Hui"})]})}export{x as default};
