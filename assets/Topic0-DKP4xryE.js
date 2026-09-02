import{j as e}from"./vendor-react-core-Doz9nIC6.js";import{J as t}from"./JavaFileLoader-BfBG3xz_.js";import{F as n}from"./FAQTemplate-BHhlgA96.js";import{P as r}from"./PlainTextPrint-C08xhKA4.js";import{T as s}from"./TeacherSukantaHui-RpFLNJ5A.js";import"./JavaCodeBlock-BwsLxS3r.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-wprqVFW_.js";const a=`/**\r
 * Java Core Tutorial - Module 011_002: PreparedStatements, CallableStatements & SQL Safety\r
 * Topic 0: Executing Queries with Statement - executeQuery vs executeUpdate vs execute\r
 * Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
 */\r
\r
package com.coderaccotax.javatutorial.jdbc;\r
\r
import java.sql.Connection;\r
import java.sql.ResultSet;\r
import java.sql.SQLException;\r
import java.sql.Statement;\r
\r
public class StatementExecutionMethodsDemo {\r
\r
    public static void demonstrateExecutionMethods(Connection conn) throws SQLException {\r
        try (Statement stmt = conn.createStatement()) {\r
\r
            // 1. executeQuery(sql): Used strictly for SELECT statements -> Returns ResultSet\r
            String selectSql = "SELECT student_id, name FROM students WHERE center = 'Barrackpore'";\r
            try (ResultSet rs = stmt.executeQuery(selectSql)) {\r
                while (rs.next()) {\r
                    System.out.println("   [SELECT]: ID: " + rs.getInt("student_id") + " | Name: " + rs.getString("name"));\r
                }\r
            }\r
\r
            // 2. executeUpdate(sql): Used for INSERT, UPDATE, DELETE, or DDL -> Returns int (affected rows count)\r
            String updateSql = "UPDATE students SET status = 'ACTIVE' WHERE center = 'Barrackpore'";\r
            int affectedRows = stmt.executeUpdate(updateSql);\r
            System.out.println("   [UPDATE]: Rows affected = " + affectedRows);\r
\r
            // 3. execute(sql): Generic execution -> Returns boolean (true if ResultSet, false if update count)\r
            boolean isResultSet = stmt.execute("SELECT COUNT(*) FROM students");\r
            if (isResultSet) {\r
                try (ResultSet rsCount = stmt.getResultSet()) {\r
                    if (rsCount.next()) System.out.println("   [COUNT]: Total students = " + rsCount.getInt(1));\r
                }\r
            }\r
        }\r
    }\r
\r
    public static void main(String[] args) {\r
        System.out.println("==========================================================================");\r
        System.out.println(" TOPIC 0: STATEMENT EXECUTION METHODS (QUERY vs UPDATE) - BARRACKPORE");\r
        System.out.println("==========================================================================\\n");\r
\r
        System.out.println(">>> THE 3 STATEMENT METHODS COMPARISON:");\r
        System.out.println("  1. stmt.executeQuery(sql)  -> Returns ResultSet (SELECT only).");\r
        System.out.println("  2. stmt.executeUpdate(sql) -> Returns int (INSERT, UPDATE, DELETE row count).");\r
        System.out.println("  3. stmt.execute(sql)       -> Returns boolean (Generic execution).\\n");\r
\r
        System.out.println("==========================================================================");\r
    }\r
}\r
`,o=`================================================================================\r
JAVA CORE TUTORIAL - QUICK REVISION GUIDE\r
Module 011_002: PreparedStatements, CallableStatements & SQL Safety\r
Topic 0: Statement Execution Methods\r
Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
================================================================================\r
\r
1. THE 3 METHODS OF 'java.sql.Statement':\r
   - 'ResultSet executeQuery(String sql)' : SELECT queries returning tabular data.\r
   - 'int executeUpdate(String sql)'       : DML (INSERT/UPDATE/DELETE) or DDL (CREATE/DROP) returning row count.\r
   - 'boolean execute(String sql)'        : Dynamic execution returning true if result is ResultSet.\r
\r
2. PITFALL TO AVOID:\r
   - Calling 'executeQuery()' with an UPDATE statement throws 'SQLException: No ResultSet was produced'.\r
   - Calling 'executeUpdate()' with a SELECT statement throws 'SQLException: A result was returned when none was expected'.\r
\r
================================================================================\r
Classroom Practice: Barrackpore Academy | Mentor: Sukanta Hui\r
================================================================================\r
`,i=[{question:"What happens if you execute an INSERT statement using statement.executeQuery('INSERT INTO...')?",shortAnswer:"The JDBC driver throws a java.sql.SQLException because executeQuery() requires the database to return a tabular ResultSet, which DML statements (INSERT/UPDATE/DELETE) do not produce.",explanation:"Always use executeUpdate() for DML operations.",hint:"Throws java.sql.SQLException because no ResultSet is returned.",level:"Beginner",codeExample:"stmt.executeQuery('INSERT...'); // Throws SQLException!"},{question:"What does the boolean return value of statement.execute(sql) signify?",shortAnswer:"It returns true if the first result generated by the SQL command is a ResultSet (which can be retrieved via stmt.getResultSet()), or false if it is an update count or there are no results (which can be retrieved via stmt.getUpdateCount()).",explanation:"Enables handling dynamic SQL and stored procedures returning multiple results.",hint:"Returns true if result is a ResultSet, false if update count.",level:"Intermediate",codeExample:"boolean isRS = stmt.execute(sql); if (isRS) ResultSet rs = stmt.getResultSet();"}];function E(){return e.jsxs("div",{className:"space-y-12 px-4 md:px-8 py-8 text-slate-200 bg-slate-900 min-h-screen",children:[e.jsxs("header",{className:"space-y-4 border-b border-slate-800 pb-6",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"px-3 py-1 bg-sky-500/10 text-sky-400 border border-sky-500/20 text-xs font-semibold rounded-full uppercase tracking-wider",children:"Module 011_002 · Topic 0"}),e.jsx("span",{className:"px-3 py-1 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-xs font-semibold rounded-full",children:"SQL Safety & PreparedStatements"})]}),e.jsxs("h1",{className:"text-xl sm:text-2xl md:text-3xl font-bold text-white tracking-tight",children:["Executing Queries with Statement: ",e.jsx("code",{className:"text-emerald-400 font-mono",children:"executeQuery vs executeUpdate vs execute"})]}),e.jsx("p",{className:"text-base md:text-lg text-slate-400 leading-relaxed max-w-4xl",children:"The 3 execution methods of java.sql.Statement: returning ResultSets for SELECT, row counts for DML/DDL, and handling multiple result sets."})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsxs("h2",{className:"text-2xl font-bold text-emerald-400 flex items-center gap-2",children:[e.jsx("span",{children:"💻"})," Hands-On Java Demo Code"]}),e.jsx(t,{fileModule:a,title:"StatementExecutionMethodsDemo.java",highlightLines:[18,25,34,43]})]}),e.jsx("section",{className:"space-y-4",children:e.jsx(n,{title:"SQL Statements & Injection FAQs",questions:i})}),e.jsx("section",{className:"space-y-4",children:e.jsx(r,{content:o,title:"Module 011_002 Topic 0: Statement Execution Methods",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Printable Note",downloadFileName:"011_002_topic0_statement_execution_methods_note.txt"})}),e.jsx(s,{note:"Statement has 3 execution methods: executeQuery() for SELECT queries returning a ResultSet, executeUpdate() for INSERT/UPDATE/DELETE returning affected rows, and execute() for dynamic SQL! — Sukanta Hui"})]})}export{E as default};
