import{j as e}from"./vendor-react-core-Doz9nIC6.js";import{J as t}from"./JavaFileLoader-BfBG3xz_.js";import{F as r}from"./FAQTemplate-CkSqDH4B.js";import{P as a}from"./PlainTextPrint-C08xhKA4.js";import{T as n}from"./TeacherSukantaHui-CyIG3xbg.js";import"./JavaCodeBlock-BwsLxS3r.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-CIaKtAt4.js";const s=`/**\r
 * Java Core Tutorial - Module 011_002: PreparedStatements, CallableStatements & SQL Safety\r
 * Topic 2: The PreparedStatement Interface - Parameterized SQL\r
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
public class PreparedStatementInterfaceDemo {\r
\r
    public static void executeSecureQuery(Connection conn, String inputName) throws SQLException {\r
        // Parameterized SQL query with '?' placeholder:\r
        String sql = "SELECT student_id, name, course, fees_paid FROM students WHERE name = ?";\r
\r
        try (PreparedStatement pstmt = conn.prepareStatement(sql)) {\r
            // Binding parameter safely (1-based index):\r
            pstmt.setString(1, inputName);\r
\r
            try (ResultSet rs = pstmt.executeQuery()) {\r
                while (rs.next()) {\r
                    System.out.println("   [STUDENT FOUND]: ID=" + rs.getInt("student_id") + \r
                                       ", Name=" + rs.getString("name") + \r
                                       ", Course=" + rs.getString("course"));\r
                }\r
            }\r
        }\r
    }\r
\r
    public static void main(String[] args) {\r
        System.out.println("==========================================================================");\r
        System.out.println(" TOPIC 2: THE PREPAREDSTATEMENT INTERFACE - BARRACKPORE");\r
        System.out.println("==========================================================================\\n");\r
\r
        System.out.println(">>> KEY ADVANTAGES OF PREPAREDSTATEMENT OVER STATEMENT:");\r
        System.out.println("  1. 100% IMMUNE TO SQL INJECTION : Data values are transported via binary protocol; never parsed as SQL!");\r
        System.out.println("  2. PRE-COMPILED QUERY PLANS     : Database parses and optimizes execution plan ONCE; reuses for 10,000 queries!");\r
        System.out.println("  3. STRICT TYPE SAFETY           : setInt(), setString(), setTimestamp() enforce explicit data typing!");\r
        System.out.println("  4. STREAMLINED BINARY TRANSFER  : Efficient transmission of BLOBs, CLOBs, and byte arrays.");\r
\r
        System.out.println("\\n==========================================================================");\r
    }\r
}\r
`,i=`================================================================================\r
JAVA CORE TUTORIAL - QUICK REVISION GUIDE\r
Module 011_002: PreparedStatements, CallableStatements & SQL Safety\r
Topic 2: The PreparedStatement Interface\r
Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
================================================================================\r
\r
1. WHAT IS PREPAREDSTATEMENT:\r
   - Interface extending 'java.sql.Statement'.\r
   - Represents a pre-compiled SQL statement executed multiple times with different parameter values.\r
\r
2. PARAMETER INDEXING RULE:\r
   - Parameter placeholders ('?') use **1-BASED INDEXING** (the first '?' is index 1, second is index 2).\r
   - Passing index 0 throws 'SQLException: Parameter index out of range'.\r
\r
================================================================================\r
Classroom Practice: Barrackpore Academy | Mentor: Sukanta Hui\r
================================================================================\r
`,o=[{question:"What index number corresponds to the first parameter placeholder (?) in a PreparedStatement?",shortAnswer:"Index 1 (JDBC parameters use 1-based indexing, not 0-based indexing).",explanation:"Passing 0 causes java.sql.SQLException: Parameter index out of range.",hint:"Index 1 (1-based indexing).",level:"Beginner",codeExample:"pstmt.setString(1, 'Swadeep'); // 1st placeholder is index 1"},{question:"Why does PreparedStatement prevent SQL injection even if an attacker passes malicious characters like quotes or boolean operators?",shortAnswer:"Because the SQL query template is pre-compiled by the database engine before parameter values are sent. Parameter values are sent separately as pure literal data values over the binary wire protocol and are never evaluated as SQL command syntax.",explanation:"Separation of command syntax from data values.",hint:"The database pre-compiles query structure separately from data values.",level:"Intermediate",codeExample:"pstmt.setString(1, 'admin' OR '1'='1'); // Treated literally as a username string!"}];function E(){return e.jsxs("div",{className:"space-y-12 px-4 md:px-8 py-8 text-slate-200 bg-slate-900 min-h-screen",children:[e.jsxs("header",{className:"space-y-4 border-b border-slate-800 pb-6",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"px-3 py-1 bg-sky-500/10 text-sky-400 border border-sky-500/20 text-xs font-semibold rounded-full uppercase tracking-wider",children:"Module 011_002 · Topic 2"}),e.jsx("span",{className:"px-3 py-1 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-xs font-semibold rounded-full",children:"SQL Safety & PreparedStatements"})]}),e.jsxs("h1",{className:"text-3xl md:text-4xl font-extrabold text-white tracking-tight",children:["The PreparedStatement Interface: ",e.jsx("code",{className:"text-emerald-400 font-mono",children:"java.sql.PreparedStatement"})]}),e.jsx("p",{className:"text-base md:text-lg text-slate-400 leading-relaxed max-w-4xl",children:"Parameterized, pre-compiled SQL execution: separating SQL command structure from user data to achieve ironclad security and high performance."})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsxs("h2",{className:"text-2xl font-bold text-emerald-400 flex items-center gap-2",children:[e.jsx("span",{children:"💻"})," Hands-On Java Demo Code"]}),e.jsx(t,{fileModule:s,title:"PreparedStatementInterfaceDemo.java",highlightLines:[18,25,34,43]})]}),e.jsx("section",{className:"space-y-4",children:e.jsx(r,{title:"SQL Statements & Injection FAQs",questions:o})}),e.jsx("section",{className:"space-y-4",children:e.jsx(a,{content:i,title:"Module 011_002 Topic 2: The PreparedStatement Interface",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Printable Note",downloadFileName:"011_002_topic2_preparedstatement_interface_note.txt"})}),e.jsx(n,{note:"PreparedStatement is the superhero of JDBC! It extends Statement and introduces parameterized queries with question marks ('SELECT * FROM users WHERE id = ?')! It is fast, type-safe, and 100% immune to SQL injection! — Sukanta Hui"})]})}export{E as default};
