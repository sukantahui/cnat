import{j as e}from"./vendor-react-core-Doz9nIC6.js";import{J as t}from"./JavaFileLoader-BfBG3xz_.js";import{F as n}from"./FAQTemplate-BHhlgA96.js";import{P as a}from"./PlainTextPrint-C08xhKA4.js";import{T as s}from"./TeacherSukantaHui-DerPxfxp.js";import"./JavaCodeBlock-BwsLxS3r.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-CH1iX9C8.js";const r=`/**\r
 * Java Core Tutorial - Module 011_002: PreparedStatements, CallableStatements & SQL Safety\r
 * Topic 4: Setting Parameters Safely - Type-Safe Binding & setNull()\r
 * Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
 */\r
\r
package com.coderaccotax.javatutorial.jdbc;\r
\r
import java.sql.Connection;\r
import java.sql.PreparedStatement;\r
import java.sql.SQLException;\r
import java.sql.Timestamp;\r
import java.sql.Types;\r
import java.time.Instant;\r
\r
public class SettingParametersSafelyDemo {\r
\r
    public static void insertStudentRecord(Connection conn, int id, String name, Double scholarship, String email) throws SQLException {\r
        String sql = "INSERT INTO students (student_id, name, scholarship, email, enrolled_at) VALUES (?, ?, ?, ?, ?)";\r
\r
        try (PreparedStatement pstmt = conn.prepareStatement(sql)) {\r
            // 1. Primitive Int binding:\r
            pstmt.setInt(1, id);\r
\r
            // 2. String binding:\r
            pstmt.setString(2, name);\r
\r
            // 3. Nullable Double binding:\r
            if (scholarship != null) {\r
                pstmt.setDouble(3, scholarship);\r
            } else {\r
                pstmt.setNull(3, Types.DOUBLE); // Explicit SQL NULL typing!\r
            }\r
\r
            // 4. Nullable String binding:\r
            if (email != null) {\r
                pstmt.setString(4, email);\r
            } else {\r
                pstmt.setNull(4, Types.VARCHAR);\r
            }\r
\r
            // 5. Java Timestamp / Instant binding:\r
            pstmt.setTimestamp(5, Timestamp.from(Instant.now()));\r
\r
            System.out.println("   [PREPARED]: All 5 parameters bound type-safely!");\r
        }\r
    }\r
\r
    public static void main(String[] args) {\r
        System.out.println("==========================================================================");\r
        System.out.println(" TOPIC 4: SETTING PARAMETERS SAFELY & setNull() - BARRACKPORE");\r
        System.out.println("==========================================================================\\n");\r
\r
        System.out.println(">>> KEY PARAMETER BINDING METHODS:");\r
        System.out.println("  - pstmt.setInt(1, 101);");\r
        System.out.println("  - pstmt.setString(2, "Swadeep Paul");");\r
        System.out.println("  - pstmt.setDouble(3, 4500.50);");\r
        System.out.println("  - pstmt.setBoolean(4, true);");\r
        System.out.println("  - pstmt.setTimestamp(5, Timestamp.from(Instant.now()));");\r
        System.out.println("  - pstmt.setNull(6, java.sql.Types.VARCHAR); // For SQL NULLs!\\n");\r
\r
        System.out.println("==========================================================================");\r
    }\r
}\r
`,i=`================================================================================\r
JAVA CORE TUTORIAL - QUICK REVISION GUIDE\r
Module 011_002: PreparedStatements, CallableStatements & SQL Safety\r
Topic 4: Setting Parameters Safely\r
Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
================================================================================\r
\r
1. TYPE-SAFE BINDING METHODS:\r
   - 'setInt(int idx, int x)'\r
   - 'setLong(int idx, long x)'\r
   - 'setString(int idx, String x)'\r
   - 'setDouble(int idx, double x)'\r
   - 'setDate(int idx, java.sql.Date d)'\r
   - 'setTimestamp(int idx, java.sql.Timestamp ts)'\r
   - 'setNull(int idx, int sqlType)'\r
\r
2. SQL NULL HANDLING:\r
   - Always use 'setNull(index, Types.<SQL_TYPE>)' to avoid dialect-specific type coercion bugs!\r
\r
================================================================================\r
Classroom Practice: Barrackpore Academy | Mentor: Sukanta Hui\r
================================================================================\r
`,l=[{question:"How do you bind a SQL NULL value into a PreparedStatement parameter placeholder?",shortAnswer:"Using the pstmt.setNull(int parameterIndex, int sqlType) method, passing the parameter index and the corresponding constant from java.sql.Types (e.g. pstmt.setNull(3, Types.VARCHAR)).",explanation:"Ensures database engines correctly bind NULL to strongly typed columns.",hint:"pstmt.setNull(index, Types.TYPE_CONSTANT)",level:"Beginner",codeExample:"pstmt.setNull(2, java.sql.Types.VARCHAR);"},{question:"What happens if you bind a java.time.Instant or LocalDateTime to a JDBC parameter in modern JDBC 4.2+?",shortAnswer:"JDBC 4.2 introduced direct support for java.time types using pstmt.setObject(index, localDateTime), eliminating the need to manually convert to java.sql.Timestamp.",explanation:"Modern JDBC 4.2+ natively understands JSR-310 java.time API.",hint:"pstmt.setObject(index, localDateTime)",level:"Intermediate",codeExample:"pstmt.setObject(1, LocalDateTime.now());"}];function y(){return e.jsxs("div",{className:"space-y-12 px-4 md:px-8 py-8 text-slate-200 bg-slate-900 min-h-screen",children:[e.jsxs("header",{className:"space-y-4 border-b border-slate-800 pb-6",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"px-3 py-1 bg-sky-500/10 text-sky-400 border border-sky-500/20 text-xs font-semibold rounded-full uppercase tracking-wider",children:"Module 011_002 · Topic 4"}),e.jsx("span",{className:"px-3 py-1 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-xs font-semibold rounded-full",children:"SQL Safety & PreparedStatements"})]}),e.jsxs("h1",{className:"text-xl sm:text-2xl md:text-3xl font-bold text-white tracking-tight",children:["Setting Parameters Safely: ",e.jsx("code",{className:"text-emerald-400 font-mono",children:"Type-Safe Binding & setNull()"})]}),e.jsx("p",{className:"text-base md:text-lg text-slate-400 leading-relaxed max-w-4xl",children:"Strict typing: binding integers, strings, doubles, dates, timestamps, and handling SQL NULL values using Types.VARCHAR."})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsxs("h2",{className:"text-2xl font-bold text-emerald-400 flex items-center gap-2",children:[e.jsx("span",{children:"💻"})," Hands-On Java Demo Code"]}),e.jsx(t,{fileModule:r,title:"SettingParametersSafelyDemo.java",highlightLines:[18,25,34,43]})]}),e.jsx("section",{className:"space-y-4",children:e.jsx(n,{title:"SQL Statements & Injection FAQs",questions:l})}),e.jsx("section",{className:"space-y-4",children:e.jsx(a,{content:i,title:"Module 011_002 Topic 4: Setting Parameters Safely",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Printable Note",downloadFileName:"011_002_topic4_setting_parameters_safely_note.txt"})}),e.jsx(s,{note:"When binding null values in PreparedStatement, never pass null directly to setString()! Use setNull(index, java.sql.Types.VARCHAR) to tell the database exactly what SQL column type is being set to null! — Sukanta Hui"})]})}export{y as default};
