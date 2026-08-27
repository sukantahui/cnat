import{j as e}from"./vendor-react-core-Doz9nIC6.js";import{J as t}from"./JavaFileLoader-BfBG3xz_.js";import{F as r}from"./FAQTemplate-CkSqDH4B.js";import{P as a}from"./PlainTextPrint-C08xhKA4.js";import{T as n}from"./TeacherSukantaHui-CC0AKmkm.js";import"./JavaCodeBlock-BwsLxS3r.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-BtJHuk7w.js";const s=`/**\r
 * Java Core Tutorial - Module 011_002: PreparedStatements, CallableStatements & SQL Safety\r
 * Topic 9: The CallableStatement Interface - Stored Procedures & Functions\r
 * Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
 */\r
\r
package com.coderaccotax.javatutorial.jdbc;\r
\r
import java.sql.CallableStatement;\r
import java.sql.Connection;\r
import java.sql.SQLException;\r
import java.sql.Types;\r
\r
public class CallableStatementInterfaceDemo {\r
\r
    public static void executeStoredProcedure(Connection conn, int studentId) throws SQLException {\r
        // Standard JDBC escape syntax for Stored Procedures:\r
        String procedureSql = "{call get_student_fee_summary(?, ?, ?)}";\r
\r
        try (CallableStatement cstmt = conn.prepareCall(procedureSql)) {\r
            // 1. Setting IN parameter (Parameter 1):\r
            cstmt.setInt(1, studentId);\r
\r
            // 2. Registering OUT parameters (Parameters 2 and 3):\r
            cstmt.registerOutParameter(2, Types.VARCHAR); // Student Name (OUT)\r
            cstmt.registerOutParameter(3, Types.DOUBLE);  // Total Due (OUT)\r
\r
            // 3. Executing the stored procedure:\r
            cstmt.execute();\r
\r
            // 4. Reading OUT parameter values:\r
            String studentName = cstmt.getString(2);\r
            double totalDue    = cstmt.getDouble(3);\r
\r
            System.out.println("   [PROCEDURE RESULT]: Student: " + studentName + " | Balance Due: ₹" + totalDue);\r
        }\r
    }\r
\r
    public static void main(String[] args) {\r
        System.out.println("==========================================================================");\r
        System.out.println(" TOPIC 9: THE CALLABLESTATEMENT INTERFACE - BARRACKPORE");\r
        System.out.println("==========================================================================\\n");\r
\r
        System.out.println(">>> THE 3 JDBC CALL ESCAPE SYNTAX VARIATIONS:");\r
        System.out.println("  1. Procedure with no return value : {call procedure_name(?, ?)}");\r
        System.out.println("  2. Function with return value     : {? = call function_name(?, ?)}");\r
        System.out.println("  3. Procedure with no arguments    : {call procedure_name}\\n");\r
\r
        System.out.println(">>> PARAMETER MODES:");\r
        System.out.println("  - IN    : Passed from Java into the stored procedure (bound via setInt/setString).");\r
        System.out.println("  - OUT   : Calculated by procedure and returned to Java (registered via registerOutParameter).");\r
        System.out.println("  - INOUT : Passed from Java, mutated by procedure, and returned to Java.");\r
\r
        System.out.println("\\n==========================================================================");\r
    }\r
}\r
`,l=`================================================================================\r
JAVA CORE TUTORIAL - QUICK REVISION GUIDE\r
Module 011_002: PreparedStatements, CallableStatements & SQL Safety\r
Topic 9: CallableStatement Interface\r
Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
================================================================================\r
\r
1. WHAT IS CALLABLESTATEMENT:\r
   - Interface extending 'java.sql.PreparedStatement'.\r
   - Used to execute SQL Stored Procedures and Functions.\r
\r
2. JDBC ESCAPE SYNTAX:\r
   - Standard: '{call procedure_name(?, ?)}'\r
   - Function: '{? = call function_name(?)}' (First '?' is the return value).\r
\r
================================================================================\r
Classroom Practice: Barrackpore Academy | Mentor: Sukanta Hui\r
================================================================================\r
`,o=[{question:"What is the standard JDBC escape syntax used to invoke a database stored procedure with CallableStatement?",shortAnswer:"{call procedure_name(?, ?, ...)}",explanation:"The curly braces indicate standard JDBC escape syntax translated by vendor drivers.",hint:"{call procedure_name(?, ?)}",level:"Beginner",codeExample:"CallableStatement cs = conn.prepareCall('{call enroll_student(?, ?)}');"},{question:"How do you invoke a database stored Function that returns a value using CallableStatement?",shortAnswer:"Using the syntax '{? = call function_name(?)}', where the first placeholder (?) represents the return value registered as an OUT parameter.",explanation:"Register placeholder 1 via registerOutParameter() to capture the function return value.",hint:"{? = call function_name(?)}",level:"Intermediate",codeExample:"cstmt = conn.prepareCall('{? = call get_discount(?)}'); cstmt.registerOutParameter(1, Types.DOUBLE);"}];function b(){return e.jsxs("div",{className:"space-y-12 px-4 md:px-8 py-8 text-slate-200 bg-slate-900 min-h-screen",children:[e.jsxs("header",{className:"space-y-4 border-b border-slate-800 pb-6",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"px-3 py-1 bg-sky-500/10 text-sky-400 border border-sky-500/20 text-xs font-semibold rounded-full uppercase tracking-wider",children:"Module 011_002 · Topic 9"}),e.jsx("span",{className:"px-3 py-1 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-xs font-semibold rounded-full",children:"SQL Safety & PreparedStatements"})]}),e.jsxs("h1",{className:"text-3xl md:text-4xl font-extrabold text-white tracking-tight",children:["The CallableStatement Interface: ",e.jsx("code",{className:"text-emerald-400 font-mono",children:"Stored Procedures & Functions"})]}),e.jsx("p",{className:"text-base md:text-lg text-slate-400 leading-relaxed max-w-4xl",children:"Database procedural logic: calling stored procedures and user-defined functions using standard JDBC escape syntax {call procedure_name(?, ?)}."})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsxs("h2",{className:"text-2xl font-bold text-emerald-400 flex items-center gap-2",children:[e.jsx("span",{children:"💻"})," Hands-On Java Demo Code"]}),e.jsx(t,{fileModule:s,title:"CallableStatementInterfaceDemo.java",highlightLines:[18,25,34,43]})]}),e.jsx("section",{className:"space-y-4",children:e.jsx(r,{title:"SQL Statements & Injection FAQs",questions:o})}),e.jsx("section",{className:"space-y-4",children:e.jsx(a,{content:l,title:"Module 011_002 Topic 9: CallableStatement Interface",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Printable Note",downloadFileName:"011_002_topic9_callablestatement_interface_note.txt"})}),e.jsx(n,{note:"CallableStatement extends PreparedStatement and lets you invoke database Stored Procedures and Functions using the standard JDBC escape syntax: {call calculate_student_discount(?, ?, ?)}! — Sukanta Hui"})]})}export{b as default};
