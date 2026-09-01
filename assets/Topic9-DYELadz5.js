import{j as e}from"./vendor-react-core-Doz9nIC6.js";import{J as t}from"./JavaFileLoader-BfBG3xz_.js";import{F as r}from"./FAQTemplate-BHhlgA96.js";import{P as n}from"./PlainTextPrint-C08xhKA4.js";import{T as a}from"./TeacherSukantaHui-CEPuAfsb.js";import"./JavaCodeBlock-BwsLxS3r.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-DGCamHnX.js";const s=`/**\r
 * Java Core Tutorial - Module 011_003: ResultSet, Scrollable, Updatable & Metadata\r
 * Topic 9: Mapping ResultSets to Domain Objects - RowMapper & Records\r
 * Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
 */\r
\r
package com.coderaccotax.javatutorial.jdbc;\r
\r
import java.sql.Connection;\r
import java.sql.PreparedStatement;\r
import java.sql.ResultSet;\r
import java.sql.SQLException;\r
import java.util.ArrayList;\r
import java.util.List;\r
\r
public class MappingResultSetsToRecordsDemo {\r
\r
    // 1. Immutable Domain Record (Java 16+):\r
    public record StudentRecord(\r
        int studentId,\r
        String name,\r
        String course,\r
        double score,\r
        String center\r
    ) {}\r
\r
    // 2. Functional Interface for Row Mapping (Spring RowMapper pattern):\r
    @FunctionalInterface\r
    public interface RowMapper<T> {\r
        T mapRow(ResultSet rs) throws SQLException;\r
    }\r
\r
    // 3. Reusable Generic Query Runner:\r
    public static <T> List<T> executeQueryList(Connection conn, String sql, RowMapper<T> mapper, Object... params) throws SQLException {\r
        List<T> results = new ArrayList<>();\r
        try (PreparedStatement pstmt = conn.prepareStatement(sql)) {\r
            for (int i = 0; i < params.length; i++) {\r
                pstmt.setObject(i + 1, params[i]);\r
            }\r
            try (ResultSet rs = pstmt.executeQuery()) {\r
                while (rs.next()) {\r
                    results.add(mapper.mapRow(rs)); // Clean mapping!\r
                }\r
            }\r
        }\r
        return results;\r
    }\r
\r
    public static void main(String[] args) {\r
        System.out.println("==========================================================================");\r
        System.out.println(" TOPIC 9: MAPPING RESULTSETS TO IMMUTABLE RECORDS - BARRACKPORE");\r
        System.out.println("==========================================================================\\n");\r
\r
        System.out.println(">>> THE CLEAN ROWMAPPER PATTERN (Spring / JDBI Style):");\r
        System.out.println("  RowMapper<StudentRecord> studentMapper = rs -> new StudentRecord(");\r
        System.out.println("      rs.getInt("student_id"),");\r
        System.out.println("      rs.getString("name"),");\r
        System.out.println("      rs.getString("course"),");\r
        System.out.println("      rs.getDouble("score"),");\r
        System.out.println("      rs.getString("center")");\r
        System.out.println("  );\\n");\r
\r
        System.out.println(">>> ARCHITECTURAL BENEFIT:");\r
        System.out.println("  - 100% Encapsulation: Database cursors are closed immediately.");\r
        System.out.println("  - Business logic receives pure, strongly typed, immutable Java collections!");\r
\r
        System.out.println("\\n==========================================================================");\r
    }\r
}\r
`,o=`================================================================================\r
JAVA CORE TUTORIAL - QUICK REVISION GUIDE\r
Module 011_003: ResultSet, Scrollable, Updatable & Metadata\r
Topic 9: Mapping ResultSets to Records\r
Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
================================================================================\r
\r
1. WHY USE THE ROWMAPPER PATTERN:\r
   - Eliminates boilerplate repetition of 'rs.getInt()' across DAO methods.\r
   - Decouples SQL database mechanics from business domain models.\r
\r
2. COMBINING WITH JAVA RECORDS:\r
   - Java Records (introduced in Java 16) provide compact, immutable, thread-safe DTO carriers\r
     for tabular database data.\r
\r
================================================================================\r
Classroom Practice: Barrackpore Academy | Mentor: Sukanta Hui\r
================================================================================\r
`,i=[{question:"Why should a DAO method return domain objects or Java Records instead of returning the live ResultSet to service callers?",shortAnswer:"Because a ResultSet requires an open database Connection and Statement. Returning a ResultSet leaks database connection resources and forces service layers to manage low-level SQLExceptions, violating encapsulation and separation of concerns.",explanation:"Always map and close ResultSets within the data access layer.",hint:"Prevents leaking connection resources and decouples service logic from JDBC.",level:"Beginner",codeExample:"public List<Student> findAll() { return query(mapper); } // Returns domain list"},{question:"What is the RowMapper pattern popularized by Spring JdbcTemplate?",shortAnswer:"A functional interface with a single method (mapRow(ResultSet rs, int rowNum)) that encapsulates the logic of extracting column values from the current row of a ResultSet and constructing a domain object.",explanation:"Allows clean functional decomposition of data mapping.",hint:"A functional interface that transforms a single ResultSet row into a domain object.",level:"Intermediate",codeExample:"RowMapper<Student> mapper = (rs, rowNum) → new Student(rs.getInt(1), rs.getString(2));"}];function x(){return e.jsxs("div",{className:"space-y-12 px-4 md:px-8 py-8 text-slate-200 bg-slate-900 min-h-screen",children:[e.jsxs("header",{className:"space-y-4 border-b border-slate-800 pb-6",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"px-3 py-1 bg-sky-500/10 text-sky-400 border border-sky-500/20 text-xs font-semibold rounded-full uppercase tracking-wider",children:"Module 011_003 · Topic 9"}),e.jsx("span",{className:"px-3 py-1 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-xs font-semibold rounded-full",children:"ResultSet & Metadata"})]}),e.jsxs("h1",{className:"text-xl sm:text-2xl md:text-3xl font-bold text-white tracking-tight",children:["Mapping ResultSets to Domain Objects: ",e.jsx("code",{className:"text-emerald-400 font-mono",children:"RowMapper & Records"})]}),e.jsx("p",{className:"text-base md:text-lg text-slate-400 leading-relaxed max-w-4xl",children:"From SQL rows to clean Java: implementing the RowMapper pattern to map database tuples into immutable Java Records and DTO domain models."})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsxs("h2",{className:"text-2xl font-bold text-emerald-400 flex items-center gap-2",children:[e.jsx("span",{children:"💻"})," Hands-On Java Demo Code"]}),e.jsx(t,{fileModule:s,title:"MappingResultSetsToRecordsDemo.java",highlightLines:[18,25,34,43]})]}),e.jsx("section",{className:"space-y-4",children:e.jsx(r,{title:"ResultSet & Metadata FAQs",questions:i})}),e.jsx("section",{className:"space-y-4",children:e.jsx(n,{content:o,title:"Module 011_003 Topic 9: Mapping ResultSets to Records",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Printable Note",downloadFileName:"011_003_topic9_mapping_resultsets_to_records_note.txt"})}),e.jsx(a,{note:"Never leak ResultSet objects into your business services or controller layer! Always convert ResultSet rows into immutable Java Records or DTOs using a clean RowMapper lambda function! — Sukanta Hui"})]})}export{x as default};
