import{j as e}from"./vendor-react-core-Doz9nIC6.js";import{J as t}from"./JavaFileLoader-BfBG3xz_.js";import{F as n}from"./FAQTemplate-BHhlgA96.js";import{P as r}from"./PlainTextPrint-C08xhKA4.js";import{T as a}from"./TeacherSukantaHui-DDN87fI5.js";import"./JavaCodeBlock-BwsLxS3r.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-DEsnU7fn.js";const o=`/**\r
 * Java Core Tutorial - Module 011_005: Batch Updates & DAO Pattern\r
 * Topic 9: Concrete DAO Implementation - StudentDaoJdbcImpl\r
 * Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
 */\r
\r
package com.coderaccotax.javatutorial.jdbc;\r
\r
import javax.sql.DataSource;\r
import java.sql.Connection;\r
import java.sql.PreparedStatement;\r
import java.sql.ResultSet;\r
import java.sql.SQLException;\r
import java.util.ArrayList;\r
import java.util.List;\r
import java.util.Optional;\r
\r
public class ConcreteDaoImplementationDemo {\r
\r
    public record Student(Integer id, String name, double score, String center) {}\r
\r
    public interface StudentDao {\r
        Optional<Student> findById(int id);\r
        List<Student> findAll();\r
        void save(Student student);\r
        boolean deleteById(int id);\r
    }\r
\r
    // Concrete JDBC DAO Implementation:\r
    public static class StudentDaoJdbcImpl implements StudentDao {\r
        private final DataSource dataSource;\r
\r
        public StudentDaoJdbcImpl(DataSource dataSource) {\r
            this.dataSource = dataSource;\r
        }\r
\r
        @Override\r
        public Optional<Student> findById(int id) {\r
            String sql = "SELECT student_id, name, score, center FROM students WHERE student_id = ?";\r
            try (Connection conn = dataSource.getConnection();\r
                 PreparedStatement pstmt = conn.prepareStatement(sql)) {\r
\r
                pstmt.setInt(1, id);\r
                try (ResultSet rs = pstmt.executeQuery()) {\r
                    if (rs.next()) {\r
                        return Optional.of(new Student(\r
                            rs.getInt("student_id"),\r
                            rs.getString("name"),\r
                            rs.getDouble("score"),\r
                            rs.getString("center")\r
                        ));\r
                    }\r
                }\r
            } catch (SQLException ex) {\r
                throw new RuntimeException("Data access error in findById: " + ex.getMessage(), ex);\r
            }\r
            return Optional.empty();\r
        }\r
\r
        @Override\r
        public List<Student> findAll() {\r
            String sql = "SELECT student_id, name, score, center FROM students ORDER BY name ASC";\r
            List<Student> list = new ArrayList<>();\r
            try (Connection conn = dataSource.getConnection();\r
                 PreparedStatement pstmt = conn.prepareStatement(sql);\r
                 ResultSet rs = pstmt.executeQuery()) {\r
\r
                while (rs.next()) {\r
                    list.add(new Student(\r
                        rs.getInt("student_id"),\r
                        rs.getString("name"),\r
                        rs.getDouble("score"),\r
                        rs.getString("center")\r
                    ));\r
                }\r
            } catch (SQLException ex) {\r
                throw new RuntimeException("Data access error in findAll: " + ex.getMessage(), ex);\r
            }\r
            return list;\r
        }\r
\r
        @Override\r
        public void save(Student s) {\r
            String sql = "INSERT INTO students (student_id, name, score, center) VALUES (?, ?, ?, ?)";\r
            try (Connection conn = dataSource.getConnection();\r
                 PreparedStatement pstmt = conn.prepareStatement(sql)) {\r
\r
                pstmt.setInt(1, s.id());\r
                pstmt.setString(2, s.name());\r
                pstmt.setDouble(3, s.score());\r
                pstmt.setString(4, s.center());\r
                pstmt.executeUpdate();\r
\r
            } catch (SQLException ex) {\r
                throw new RuntimeException("Data access error in save: " + ex.getMessage(), ex);\r
            }\r
        }\r
\r
        @Override\r
        public boolean deleteById(int id) {\r
            String sql = "DELETE FROM students WHERE student_id = ?";\r
            try (Connection conn = dataSource.getConnection();\r
                 PreparedStatement pstmt = conn.prepareStatement(sql)) {\r
\r
                pstmt.setInt(1, id);\r
                return pstmt.executeUpdate() > 0;\r
\r
            } catch (SQLException ex) {\r
                throw new RuntimeException("Data access error in deleteById: " + ex.getMessage(), ex);\r
            }\r
        }\r
    }\r
\r
    public static void main(String[] args) {\r
        System.out.println("==========================================================================");\r
        System.out.println(" TOPIC 9: CONCRETE JDBC DAO IMPLEMENTATION - BARRACKPORE");\r
        System.out.println("==========================================================================\\n");\r
\r
        System.out.println("StudentDaoJdbcImpl encapsulates all SQL queries and connection handling safely.");\r
    }\r
}\r
`,s=`================================================================================\r
JAVA CORE TUTORIAL - QUICK REVISION GUIDE\r
Module 011_005: Batch Updates & DAO Pattern\r
Topic 9: Concrete DAO Implementation\r
Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
================================================================================\r
\r
1. BEST PRACTICES IN CONCRETE DAOS:\r
   - Accept 'javax.sql.DataSource' via constructor injection.\r
   - Use try-with-resources on 'conn', 'pstmt', and 'rs'.\r
   - Wrap checked 'SQLException' into unchecked domain 'DataAccessException' / 'RuntimeException'.\r
\r
================================================================================\r
Classroom Practice: Barrackpore Academy | Mentor: Sukanta Hui\r
================================================================================\r
`,i=[{question:"Why should a DAO class receive a DataSource via its constructor rather than creating DriverManager connections manually?",shortAnswer:"To leverage connection pooling, enable easy configuration swapping between production connection pools and test databases, and avoid hardcoding database credentials inside data access classes.",explanation:"Standard Dependency Injection and connection pooling best practice.",hint:"Leverages connection pooling and enables swapping databases in tests.",level:"Intermediate",codeExample:"public StudentDaoJdbcImpl(DataSource dataSource) { this.ds = dataSource; }"},{question:"Why do modern DAO implementations translate checked SQLException into unchecked RuntimeExceptions?",shortAnswer:"Because callers in service or controller layers cannot meaningfully recover from low-level SQL syntax or socket connection failures; translating to unchecked exceptions prevents cluttering the entire business layer with checked throws clauses.",explanation:"Standard Spring Data and Hibernate exception translation pattern.",hint:"Prevents cluttering service methods with checked SQLExceptions that business logic cannot recover from.",level:"Intermediate",codeExample:"catch (SQLException e) { throw new DataAccessException(e); }"}];function g(){return e.jsxs("div",{className:"space-y-12 px-4 md:px-8 py-8 text-slate-200 bg-slate-900 min-h-screen",children:[e.jsxs("header",{className:"space-y-4 border-b border-slate-800 pb-6",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"px-3 py-1 bg-sky-500/10 text-sky-400 border border-sky-500/20 text-xs font-semibold rounded-full uppercase tracking-wider",children:"Module 011_005 · Topic 9"}),e.jsx("span",{className:"px-3 py-1 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-xs font-semibold rounded-full",children:"Batch Updates & DAO Pattern"})]}),e.jsxs("h1",{className:"text-xl sm:text-2xl md:text-3xl font-bold text-white tracking-tight",children:["Concrete DAO Implementation: ",e.jsx("code",{className:"text-emerald-400 font-mono",children:"StudentDaoJdbcImpl"})]}),e.jsx("p",{className:"text-base md:text-lg text-slate-400 leading-relaxed max-w-4xl",children:"Production-ready CRUD implementation: managing DataSource connections, try-with-resources, and mapping SQL exceptions into domain exceptions."})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsxs("h2",{className:"text-2xl font-bold text-emerald-400 flex items-center gap-2",children:[e.jsx("span",{children:"💻"})," Hands-On Java Demo Code"]}),e.jsx(t,{fileModule:o,title:"ConcreteDaoImplementationDemo.java",highlightLines:[18,25,34,43]})]}),e.jsx("section",{className:"space-y-4",children:e.jsx(n,{title:"Batch Updates & DAO FAQs",questions:i})}),e.jsx("section",{className:"space-y-4",children:e.jsx(r,{content:s,title:"Module 011_005 Topic 9: Concrete DAO Implementation",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Printable Note",downloadFileName:"011_005_topic9_concrete_dao_implementation_note.txt"})}),e.jsx(a,{note:"Here is a complete, production-grade JDBC DAO implementation! Notice how it uses try-with-resources on every Connection, Statement, and ResultSet so there are NEVER any connection leaks! — Sukanta Hui"})]})}export{g as default};
