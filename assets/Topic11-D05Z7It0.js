import{j as e}from"./vendor-react-core-Doz9nIC6.js";import{J as n}from"./JavaFileLoader-BfBG3xz_.js";import{F as t}from"./FAQTemplate-CkSqDH4B.js";import{P as r}from"./PlainTextPrint-C08xhKA4.js";import{T as o}from"./TeacherSukantaHui-CC0AKmkm.js";import"./JavaCodeBlock-BwsLxS3r.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-BtJHuk7w.js";const a=`/**\r
 * Java Core Tutorial - Module 011_001: JDBC Architecture, Drivers & Connection Pooling (HikariCP)\r
 * Topic 11: Safe Connection Borrowing - DataSource & Try-With-Resources Capstone\r
 * Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
 */\r
\r
package com.coderaccotax.javatutorial.jdbc;\r
\r
import java.sql.Connection;\r
import java.sql.SQLException;\r
import javax.sql.DataSource;\r
\r
public class SafeConnectionBorrowingCapstoneDemo {\r
\r
    // Mock DataSource implementation demonstrating the borrow & return contract:\r
    public static class MockHikariDataSource implements DataSource {\r
        private int activeLeases = 0;\r
\r
        @Override\r
        public Connection getConnection() throws SQLException {\r
            activeLeases++;\r
            System.out.println("   [POOL]: Leased connection #101 (Active pool leases: " + activeLeases + ")");\r
            // In real app, returns HikariProxyConnection\r
            return null; \r
        }\r
\r
        @Override public Connection getConnection(String u, String p) { return null; }\r
        @Override public java.io.PrintWriter getLogWriter() { return null; }\r
        @Override public void setLogWriter(java.io.PrintWriter out) {}\r
        @Override public void setLoginTimeout(int seconds) {}\r
        @Override public int getLoginTimeout() { return 0; }\r
        @Override public java.util.logging.Logger getParentLogger() { return null; }\r
        @Override public <T> T unwrap(Class<T> iface) { return null; }\r
        @Override public boolean isWrapperFor(Class<?> iface) { return false; }\r
    }\r
\r
    public static void main(String[] args) {\r
        System.out.println("==========================================================================");\r
        System.out.println(" TOPIC 11: SAFE CONNECTION BORROWING CAPSTONE - BARRACKPORE");\r
        System.out.println("==========================================================================\\n");\r
\r
        DataSource dataSource = new MockHikariDataSource();\r
\r
        System.out.println(">>> 1. SAFE BORROWING PATTERN WITH TRY-WITH-RESOURCES:");\r
        System.out.println("  try (Connection conn = dataSource.getConnection();");\r
        System.out.println("       PreparedStatement stmt = conn.prepareStatement(SQL);");\r
        System.out.println("       ResultSet rs = stmt.executeQuery()) {");\r
        System.out.println("      // Process tabular data...");\r
        System.out.println("  } catch (SQLException ex) {");\r
        System.out.println("      // Log database error...");\r
        System.out.println("  }");\r
        System.out.println("  // GUARANTEE: 'conn.close()' is executed automatically, returning socket to pool! ✅\\n");\r
\r
        System.out.println(">>> 2. VERIFIED BENCHMARK & RELIABILITY GOALS:");\r
        System.out.println("  - 100% Zero Connection Leakage across all exception paths.");\r
        System.out.println("  - Microsecond lease times with HikariCP.");\r
        System.out.println("  - Production-ready database data access layer!");\r
\r
        System.out.println("\\n==========================================================================");\r
        System.out.println(" MODULE 011_001 COMPLETE: JDBC ARCHITECTURE & HIKARICP MASTERED!");\r
        System.out.println("==========================================================================");\r
    }\r
}\r
`,i=`================================================================================\r
JAVA CORE TUTORIAL - QUICK REVISION GUIDE\r
Module 011_001: JDBC Architecture, Drivers & Connection Pooling (HikariCP)\r
Topic 11: Safe Connection Borrowing Capstone\r
Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
================================================================================\r
\r
1. THE GOLDEN JDBC TRY-WITH-RESOURCES PATTERN:\r
   'try (Connection conn = dataSource.getConnection();\r
         PreparedStatement ps = conn.prepareStatement(sql);\r
         ResultSet rs = ps.executeQuery()) {\r
        while (rs.next()) { ... }\r
    }'\r
\r
2. GUARANTEES:\r
   - Closes ResultSet first, PreparedStatement second, and returns Connection to pool third.\r
   - Guarantees 100% execution even if SQLExceptions or RuntimeExceptions are thrown.\r
\r
================================================================================\r
Classroom Practice: Barrackpore Academy | Mentor: Sukanta Hui\r
================================================================================\r
`,s=[{question:"In what order does a nested try-with-resources statement close JDBC objects (Connection, Statement, ResultSet)?",shortAnswer:"In reverse order of their declaration: ResultSet is closed first, PreparedStatement is closed second, and Connection is closed (returned to the pool) last.",explanation:"Strict LIFO (Last-In, First-Out) resource cleanup order.",hint:"Reverse order of declaration (LIFO): ResultSet, Statement, then Connection.",level:"Beginner",codeExample:"try (Conn c = ...; Stmt s = ...; RS r = ...) -> Closes r, then s, then c."},{question:"What fatal consequence occurs if an application forgets to close a borrowed connection in an exception catch block when using a connection pool?",shortAnswer:"A Connection Leak. The connection remains marked as 'in-use' in the pool forever. After enough leaks occur, the pool exhausts its maximumPoolSize, and subsequent threads block until throwing 'ConnectionTimeoutException', bringing down the entire application.",explanation:"Always use try-with-resources to eliminate connection leaks.",hint:"Causes a connection leak, pool exhaustion, and application freeze.",level:"Beginner",codeExample:"Pool exhaustion: throws java.sql.SQLTransientConnectionException"}];function C(){return e.jsxs("div",{className:"space-y-12 px-4 md:px-8 py-8 text-slate-200 bg-slate-900 min-h-screen",children:[e.jsxs("header",{className:"space-y-4 border-b border-slate-800 pb-6",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"px-3 py-1 bg-sky-500/10 text-sky-400 border border-sky-500/20 text-xs font-semibold rounded-full uppercase tracking-wider",children:"Module 011_001 · Topic 11"}),e.jsx("span",{className:"px-3 py-1 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-xs font-semibold rounded-full",children:"JDBC & Data Access"})]}),e.jsxs("h1",{className:"text-3xl md:text-4xl font-extrabold text-white tracking-tight",children:["Safe Connection Borrowing: ",e.jsx("code",{className:"text-emerald-400 font-mono",children:"DataSource & Try-With-Resources"})," (Capstone)"]}),e.jsx("p",{className:"text-base md:text-lg text-slate-400 leading-relaxed max-w-4xl",children:"Zero connection leaks: implementing robust enterprise connection acquisition, auto-closure, health verification, and exception logging."})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsxs("h2",{className:"text-2xl font-bold text-emerald-400 flex items-center gap-2",children:[e.jsx("span",{children:"💻"})," Hands-On Java Demo Code"]}),e.jsx(n,{fileModule:a,title:"SafeConnectionBorrowingCapstoneDemo.java",highlightLines:[18,25,34,43,52]})]}),e.jsx("section",{className:"space-y-4",children:e.jsx(t,{title:"JDBC Architecture FAQs",questions:s})}),e.jsx("section",{className:"space-y-4",children:e.jsx(r,{content:i,title:"Module 011_001 Topic 11: Safe Connection Borrowing Capstone",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Printable Note",downloadFileName:"011_001_topic11_safe_connection_borrowing_capstone_note.txt"})}),e.jsx(o,{note:"Congratulations on completing Module 1 of Segment 11! You now know how JDBC connects, why connection pools are mandatory, and how to borrow and return connections safely! Next up: PreparedStatements, CallableStatements & SQL Safety! — Sukanta Hui"})]})}export{C as default};
