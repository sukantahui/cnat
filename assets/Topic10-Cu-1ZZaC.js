import{j as e}from"./vendor-react-core-Doz9nIC6.js";import{J as t}from"./JavaFileLoader-BfBG3xz_.js";import{F as r}from"./FAQTemplate-CkSqDH4B.js";import{P as a}from"./PlainTextPrint-C08xhKA4.js";import{T as n}from"./TeacherSukantaHui-CC0AKmkm.js";import"./JavaCodeBlock-BwsLxS3r.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-BtJHuk7w.js";const s=`/**\r
 * Java Core Tutorial - Module 011_002: PreparedStatements, CallableStatements & SQL Safety\r
 * Topic 10: Registering OUT Parameters - registerOutParameter() & Types Capstone\r
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
public class RegisteringOutParametersCapstoneDemo {\r
\r
    public static void executeInOutParameterDemo(Connection conn) throws SQLException {\r
        // Procedure with INOUT parameter (Parameter 1 acts as both input and output):\r
        String sql = "{call apply_barrackpore_gst_and_rebate(?)}";\r
\r
        try (CallableStatement cstmt = conn.prepareCall(sql)) {\r
            // 1. Bind input value:\r
            cstmt.setDouble(1, 5000.0);\r
\r
            // 2. Register output SQL type on the SAME parameter index:\r
            cstmt.registerOutParameter(1, Types.DOUBLE);\r
\r
            // 3. Execute:\r
            cstmt.execute();\r
\r
            // 4. Retrieve mutated output:\r
            double finalAmount = cstmt.getDouble(1);\r
            System.out.println("   [INOUT RESULT]: Initial: ₹5000.0 -> Mutated Output: ₹" + finalAmount);\r
        }\r
    }\r
\r
    public static void main(String[] args) {\r
        System.out.println("==========================================================================");\r
        System.out.println(" TOPIC 10: REGISTERING OUT PARAMETERS CAPSTONE - BARRACKPORE");\r
        System.out.println("==========================================================================\\n");\r
\r
        System.out.println(">>> THE COMPLETE 4-STEP CALLABLESTATEMENT OUT PARAMETER WORKFLOW:");\r
        System.out.println("  1. Prepare Call            : CallableStatement cs = conn.prepareCall("{call proc(?, ?)}");");\r
        System.out.println("  2. Set IN parameters       : cs.setInt(1, 101);");\r
        System.out.println("  3. Register OUT parameters : cs.registerOutParameter(2, java.sql.Types.VARCHAR);");\r
        System.out.println("  4. Execute & Read OUT      : cs.execute(); String output = cs.getString(2);\\n");\r
\r
        System.out.println("==========================================================================");\r
        System.out.println(" MODULE 011_002 COMPLETE: PREPAREDSTATEMENTS & SQL SAFETY MASTERED!");\r
        System.out.println("==========================================================================");\r
    }\r
}\r
`,o=`================================================================================\r
JAVA CORE TUTORIAL - QUICK REVISION GUIDE\r
Module 011_002: PreparedStatements, CallableStatements & SQL Safety\r
Topic 10: Registering OUT Parameters Capstone\r
Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
================================================================================\r
\r
1. OUT PARAMETER REGISTRATION RULES:\r
   - Must be registered BEFORE calling 'execute()'.\r
   - Uses SQL type constants from 'java.sql.Types' (e.g. 'Types.INTEGER', 'Types.VARCHAR', 'Types.DECIMAL').\r
\r
2. INOUT PARAMETERS:\r
   - Must call BOTH 'setXxx(index, value)' AND 'registerOutParameter(index, sqlType)' before execution!\r
\r
================================================================================\r
Classroom Practice: Barrackpore Academy | Mentor: Sukanta Hui\r
================================================================================\r
`,i=[{question:"What method must be invoked to register a parameter as an OUT parameter on a CallableStatement before execution?",shortAnswer:"cstmt.registerOutParameter(int parameterIndex, int sqlType), using the type constants from java.sql.Types.",explanation:"Tells JDBC driver which SQL data type to expect when reading output buffers.",hint:"cstmt.registerOutParameter(index, Types.SQL_TYPE)",level:"Beginner",codeExample:"cstmt.registerOutParameter(2, java.sql.Types.INTEGER);"},{question:"How do you handle an INOUT parameter in CallableStatement?",shortAnswer:"You must call both setXxx(index, value) (to provide the input value) and registerOutParameter(index, sqlType) (to declare the expected output type) on the exact same parameter index before calling execute().",explanation:"Allows a single parameter to pass data into the procedure and receive updated data back.",hint:"Call both setXxx() and registerOutParameter() on the same index.",level:"Intermediate",codeExample:"cs.setInt(1, 50); cs.registerOutParameter(1, Types.INTEGER); cs.execute(); int res = cs.getInt(1);"}];function g(){return e.jsxs("div",{className:"space-y-12 px-4 md:px-8 py-8 text-slate-200 bg-slate-900 min-h-screen",children:[e.jsxs("header",{className:"space-y-4 border-b border-slate-800 pb-6",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"px-3 py-1 bg-sky-500/10 text-sky-400 border border-sky-500/20 text-xs font-semibold rounded-full uppercase tracking-wider",children:"Module 011_002 · Topic 10"}),e.jsx("span",{className:"px-3 py-1 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-xs font-semibold rounded-full",children:"SQL Safety & PreparedStatements"})]}),e.jsxs("h1",{className:"text-3xl md:text-4xl font-extrabold text-white tracking-tight",children:["Registering OUT Parameters: ",e.jsx("code",{className:"text-emerald-400 font-mono",children:"registerOutParameter() & Types"})," (Capstone)"]}),e.jsx("p",{className:"text-base md:text-lg text-slate-400 leading-relaxed max-w-4xl",children:"Bidirectional parameter binding: registering SQL data types, reading output results, and handling INOUT parameters in enterprise stored procedures."})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsxs("h2",{className:"text-2xl font-bold text-emerald-400 flex items-center gap-2",children:[e.jsx("span",{children:"💻"})," Hands-On Java Demo Code"]}),e.jsx(t,{fileModule:s,title:"RegisteringOutParametersCapstoneDemo.java",highlightLines:[18,25,34,43,52]})]}),e.jsx("section",{className:"space-y-4",children:e.jsx(r,{title:"SQL Statements & Injection FAQs",questions:i})}),e.jsx("section",{className:"space-y-4",children:e.jsx(a,{content:o,title:"Module 011_002 Topic 10: Registering OUT Parameters Capstone",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Printable Note",downloadFileName:"011_002_topic10_registering_out_parameters_capstone_note.txt"})}),e.jsx(n,{note:"Congratulations on completing Module 2 of Segment 11! You now know how to execute parameterized SQL, prevent 100% of SQL injection attacks, retrieve auto-generated IDs, and call stored procedures! Next up: ResultSet Deep Dive! — Sukanta Hui"})]})}export{g as default};
