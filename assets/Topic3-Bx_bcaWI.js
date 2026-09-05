import{j as e}from"./vendor-react-core-Doz9nIC6.js";import{J as n}from"./JavaFileLoader-BfBG3xz_.js";import{F as t}from"./FAQTemplate-BHhlgA96.js";import{P as a}from"./PlainTextPrint-C08xhKA4.js";import{T as o}from"./TeacherSukantaHui-DerPxfxp.js";import"./JavaCodeBlock-BwsLxS3r.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-CH1iX9C8.js";const r=`/**\r
 * Java Core Tutorial - Module 012_002: Core Banking Capstone\r
 * Topic 3: Connection Pool & DAO Scaffolding - HikariCP & AccountDao\r
 * Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
 */\r
\r
package com.coderaccotax.javatutorial.banking;\r
\r
import java.math.BigDecimal;\r
import java.sql.Connection;\r
import java.sql.PreparedStatement;\r
import java.sql.ResultSet;\r
import java.sql.SQLException;\r
import java.util.Optional;\r
\r
public class ConnectionPoolAndDaoScaffoldingDemo {\r
\r
    public interface AccountDao {\r
        Optional<BigDecimal> getBalance(Connection conn, String accountNumber) throws SQLException;\r
        void updateBalance(Connection conn, String accountNumber, BigDecimal newBalance) throws SQLException;\r
    }\r
\r
    public static class AccountDaoJdbcImpl implements AccountDao {\r
        @Override\r
        public Optional<BigDecimal> getBalance(Connection conn, String accountNumber) throws SQLException {\r
            String sql = "SELECT balance FROM accounts WHERE account_number = ? FOR UPDATE"; // Row lock!\r
            try (PreparedStatement pstmt = conn.prepareStatement(sql)) {\r
                pstmt.setString(1, accountNumber);\r
                try (ResultSet rs = pstmt.executeQuery()) {\r
                    if (rs.next()) {\r
                        return Optional.of(rs.getBigDecimal("balance"));\r
                    }\r
                }\r
            }\r
            return Optional.empty();\r
        }\r
\r
        @Override\r
        public void updateBalance(Connection conn, String accountNumber, BigDecimal newBalance) throws SQLException {\r
            String sql = "UPDATE accounts SET balance = ? WHERE account_number = ?";\r
            try (PreparedStatement pstmt = conn.prepareStatement(sql)) {\r
                pstmt.setBigDecimal(1, newBalance);\r
                pstmt.setString(2, accountNumber);\r
                pstmt.executeUpdate();\r
            }\r
        }\r
    }\r
\r
    public static void main(String[] args) {\r
        System.out.println("==========================================================================");\r
        System.out.println(" TOPIC 3: HIKARICP & ACCOUNT DAO SCAFFOLDING - BARRACKPORE");\r
        System.out.println("==========================================================================\\n");\r
\r
        System.out.println("AccountDaoJdbcImpl successfully implements row-level locking with 'FOR UPDATE'.");\r
        System.out.println("Notice: Connection is passed as a parameter so Service Layer can manage multi-table Transactions!");\r
\r
        System.out.println("\\n==========================================================================");\r
    }\r
}\r
`,c=`================================================================================\r
JAVA CORE TUTORIAL - QUICK REVISION GUIDE\r
Module 012_002: Core Banking Capstone\r
Topic 3: Connection Pool & DAO Scaffolding\r
Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
================================================================================\r
\r
1. PASSING CONNECTION TO DAO METHODS:\r
   - For multi-step transactions across multiple DAOs ('AccountDao' and 'LedgerDao'),\r
     the 'Connection' must be managed by the Service layer and passed to each DAO method.\r
\r
2. 'FOR UPDATE' PESSIMISTIC LOCK:\r
   - 'SELECT ... FOR UPDATE' locks the specific account row to prevent race conditions.\r
\r
================================================================================\r
Classroom Practice: Barrackpore Academy | Mentor: Sukanta Hui\r
================================================================================\r
`,i=[{question:"Why should DAO methods in transactional systems accept a Connection object from the Service layer?",shortAnswer:"Because a single business transaction often spans multiple DAO calls (e.g. update balance on AccountDao, then write entries on LedgerDao); passing the shared Connection allows the Service layer to manage setAutoCommit(false), commit(), and rollback() across all operations.",explanation:"Essential pattern for manual JDBC transaction boundaries.",hint:"Allows a single transactional Connection to be shared across multiple DAO operations.",level:"Intermediate",codeExample:"void update(Connection conn, String accNo, BigDecimal bal);"},{question:"What does 'SELECT balance FROM accounts WHERE account_number = ? FOR UPDATE' do?",shortAnswer:"It acquires an exclusive pessimistic row lock on the matching account record, blocking other concurrent transactions from modifying that account until the current transaction commits or rolls back.",explanation:"Pessimistic locking to prevent race conditions during balance deductions.",hint:"Acquires an exclusive row-level lock on the account record.",level:"Advanced",codeExample:"SELECT ... FOR UPDATE"}];function S(){return e.jsxs("div",{className:"space-y-12 px-4 md:px-8 py-8 text-slate-200 bg-slate-900 min-h-screen",children:[e.jsxs("header",{className:"space-y-4 border-b border-slate-800 pb-6",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"px-3 py-1 bg-sky-500/10 text-sky-400 border border-sky-500/20 text-xs font-semibold rounded-full uppercase tracking-wider",children:"Module 012_002 · Topic 3"}),e.jsx("span",{className:"px-3 py-1 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-xs font-semibold rounded-full",children:"Capstone 1: Core Banking System"})]}),e.jsxs("h1",{className:"text-xl sm:text-2xl md:text-3xl font-bold text-white tracking-tight",children:["Connection Pool & DAO: ",e.jsx("code",{className:"text-emerald-400 font-mono",children:"HikariCP & AccountDao"})]}),e.jsx("p",{className:"text-base md:text-lg text-slate-400 leading-relaxed max-w-4xl",children:"Persistence scaffolding: wiring HikariDataSource to robust AccountDao and LedgerDao components with parameterized PreparedStatements."})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsxs("h2",{className:"text-2xl font-bold text-emerald-400 flex items-center gap-2",children:[e.jsx("span",{children:"💻"})," Hands-On Java Demo Code"]}),e.jsx(n,{fileModule:r,title:"ConnectionPoolAndDaoScaffoldingDemo.java",highlightLines:[18,25,34,43]})]}),e.jsx("section",{className:"space-y-4",children:e.jsx(t,{title:"Core Banking Capstone FAQs",questions:i})}),e.jsx("section",{className:"space-y-4",children:e.jsx(a,{content:c,title:"Module 012_002 Topic 3: Connection Pool & DAO Scaffolding",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Printable Note",downloadFileName:"012_002_topic3_connection_pool_and_dao_scaffolding_note.txt"})}),e.jsx(o,{note:"Always wrap your HikariDataSource inside a dedicated DatabaseManager singleton! This allows all your DAOs to cleanly fetch connections from a single centralized pool! — Sukanta Hui"})]})}export{S as default};
